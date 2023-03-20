import {
  View,
  rcss,
  Text,
  Button,
  tokens,
  ExternalLinkIcon,
} from "node_modules";
import type { NextApiRequest, NextApiResponse } from "next";
import { useEffect, useState } from "react";

export default function Login() {
  const [inIframe, setInIframe] = useState(false);
  const authorize = () => {
    if (inIframe) {
      window.open("https://ai.repl.page", "_blank");
      return;
    }
    window.addEventListener("message", authComplete);

    var h = 500;
    var w = 400;
    var left = screen.width / 2 - w / 2;
    var top = screen.height / 2 - h / 2;

    var authWindow = window.open(
      "https://replit.com/auth_with_repl_site?domain=" + location.host,
      "_blank",
      `modal=yes, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${w}, height=${h}, top=${top}, left=${left}`
    );

    function authComplete(e) {
      if (e.data !== "auth_complete") {
        return;
      }

      window.removeEventListener("message", authComplete);

      location.reload();
      authWindow.close();
    }
  };

  useEffect(() => {
    if (window.location !== window.parent.location) {
      setInIframe(true);
    }
  }, []);

  return (
    <View css={[rcss.flex.column, rcss.center, rcss.p(16), rcss.flex.grow(1)]}>
      <View
        css={[
          rcss.p(16),
          rcss.borderRadius(8),
          rcss.flex.column,
          rcss.colWithGap(8),
          {
            background: tokens.backgroundDefault,
            maxWidth: 300,
          },
        ]}
      >
        <Text variant="headerDefault">Log In</Text>
        {inIframe ? (
          <Text color="dimmer" multiline>
            Please open in a new tab to use
          </Text>
        ) : (
          <Text color="dimmer" multiline>
            Please log in with{" "}
            <a href="https://replit.com" target="_blank" rel="noreferrer">
              Replit
            </a>{" "}
            to start using this application
          </Text>
        )}
        <img
          src="/icon.png"
          style={{ display: "block", width: "100%", borderRadius: 8 }}
          alt="Illustration of the Amjad GPT project"
        />
        <Button
          text={inIframe ? "Open in new tab" : "Authorize Replit"}
          iconRight={inIframe ? <ExternalLinkIcon /> : null}
          colorway="primary"
          onClick={authorize}
        />
      </View>
    </View>
  );
}

export async function getServerSideProps({
  req,
}: {
  req: NextApiRequest;
  res: NextApiResponse;
}) {
  if (req.headers["x-replit-user-id"]) {
    return {
      redirect: {
        destination: "/",
      },
    };
  } else {
    return {
      props: {},
    };
  }
}
