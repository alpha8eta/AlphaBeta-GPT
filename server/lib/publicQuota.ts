export type PublicQuota = {
  total: number;
  usage: number;
  hasApiKey: boolean;
};

/**
 * Public quota payload. Never include key material — only a boolean for
 * whether the user has stored their own key.
 */
export function toPublicQuota(data: {
  total?: number;
  usage?: number;
  hasApiKey?: boolean;
  apiKey?: unknown;
}): PublicQuota {
  return {
    total: Number(data.total) || 0,
    usage: Number(data.usage) || 0,
    hasApiKey: Boolean(data.hasApiKey),
  };
}
