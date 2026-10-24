import assert from "node:assert/strict";
import type { NextApiRequest, NextApiResponse } from "next";
import isReplAuthed from "../server/lib/auth/isReplAuthed";
import { toPublicQuota } from "../server/lib/publicQuota";
import getQuota from "../pages/api/getQuota";

type MockRes = NextApiResponse & {
  statusCode: number;
  body: unknown;
  finished?: boolean;
};

function createMockRes(): MockRes {
  const res = {
    statusCode: 200,
    body: undefined as unknown,
    headers: {} as Record<string, string>,
    finished: false,
    setHeader(name: string, value: string) {
      this.headers[name] = value;
      return this;
    },
    getHeader(name: string) {
      return this.headers[name];
    },
    status(code: number) {
      this.statusCode = code;
      return this;
    },
    json(payload: unknown) {
      this.body = payload;
      this.finished = true;
      return this;
    },
    end(payload?: unknown) {
      if (payload !== undefined) this.body = payload;
      this.finished = true;
      return this;
    },
  };
  return res as unknown as MockRes;
}

function createMockReq(
  headers: Record<string, string> = {}
): NextApiRequest {
  return {
    method: "GET",
    url: "/api/getQuota",
    headers,
    query: {},
    cookies: {},
    body: {},
  } as NextApiRequest;
}

async function invoke(
  handler: typeof getQuota,
  req: NextApiRequest
): Promise<MockRes> {
  const res = createMockRes();
  await new Promise<void>((resolve, reject) => {
    const done = () => resolve();
    (res as unknown as { end: (...args: unknown[]) => unknown }).end =
      function end(this: MockRes, payload?: unknown) {
        if (payload !== undefined) this.body = payload;
        this.finished = true;
        done();
        return this;
      };
    const originalJson = res.json.bind(res);
    res.json = (payload: unknown) => {
      const result = originalJson(payload);
      done();
      return result;
    };
    try {
      const maybe = handler(req, res) as unknown as
        | void
        | Promise<void>;
      if (maybe && typeof (maybe as Promise<void>).then === "function") {
        (maybe as Promise<void>).then(() => {
          if (res.finished || res.body !== undefined) done();
        }, reject);
      }
    } catch (error) {
      reject(error);
    }
  });
  return res;
}

async function main() {
  const unauthorizedRes = createMockRes();
  let nextCalled = false;
  isReplAuthed(createMockReq(), unauthorizedRes, () => {
    nextCalled = true;
  });
  assert.equal(unauthorizedRes.statusCode, 401);
  assert.equal(nextCalled, false);
  assert.deepEqual(unauthorizedRes.body, {
    success: false,
    message: "Unauthorized",
  });

  const authorizedRes = createMockRes();
  nextCalled = false;
  isReplAuthed(
    createMockReq({ "x-replit-user-id": "user-1" }),
    authorizedRes,
    () => {
      nextCalled = true;
    }
  );
  assert.equal(nextCalled, true);
  assert.equal(authorizedRes.statusCode, 200);

  const leaked = toPublicQuota({
    total: 100,
    usage: 0,
    hasApiKey: true,
    apiKey: "should-never-appear",
  });
  assert.equal("apiKey" in leaked, false);
  assert.deepEqual(leaked, {
    total: 100,
    usage: 0,
    hasApiKey: true,
  });

  const unauthenticated = await invoke(getQuota, createMockReq());
  assert.equal(unauthenticated.statusCode, 401);
  assert.ok(
    unauthenticated.body &&
      typeof unauthenticated.body === "object" &&
      !("apiKey" in (unauthenticated.body as object))
  );

  const authenticated = await invoke(
    getQuota,
    createMockReq({
      "x-replit-user-id": "user-1",
      "x-replit-user-name": "tester",
    })
  );
  assert.equal(authenticated.statusCode, 200);
  assert.ok(authenticated.body && typeof authenticated.body === "object");
  assert.equal("apiKey" in (authenticated.body as object), false);
  assert.equal(
    (authenticated.body as { hasApiKey?: boolean }).hasApiKey === true ||
      (authenticated.body as { hasApiKey?: boolean }).hasApiKey === false,
    true
  );

  console.log(
    "ok: unauthenticated getQuota returns 401; authenticated quota has no apiKey"
  );
  process.exit(0);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
