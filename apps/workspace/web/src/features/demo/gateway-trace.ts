export type GatewayModelShort = "70b-fast" | "8b";

export interface GatewayTrace {
  readonly cache: "HIT" | "MISS" | null;
  readonly model: GatewayModelShort | null;
  readonly logId: string | null;
  readonly cacheKey: string | null;
  readonly elapsedMs: number | null;
}

export function shortGatewayModel(model: string): GatewayModelShort | null {
  if (!model || typeof model !== "string") return null;
  if (model.includes("70b")) return "70b-fast";
  if (model.includes("8b")) return "8b";
  return null;
}

export function gatewayTraceFromDone(data: Record<string, unknown>): GatewayTrace {
  const cache =
    data.cache === "HIT" || data.cache === "MISS"
      ? data.cache
      : data["cf-aig-cache-status"] === "HIT" || data["cf-aig-cache-status"] === "MISS"
      ? (data["cf-aig-cache-status"] as "HIT" | "MISS")
      : null;

  const modelRaw = typeof data.model === "string" ? data.model : "";
  const model = shortGatewayModel(modelRaw);

  const logId =
    typeof data.aiGatewayLogId === "string" && data.aiGatewayLogId.length > 0
      ? data.aiGatewayLogId
      : typeof data.logId === "string" && data.logId.length > 0
      ? data.logId
      : null;

  const cacheKey = typeof data.cacheKey === "string" && data.cacheKey.length > 0 ? data.cacheKey : null;

  const elapsedMs = typeof data.elapsedMs === "number" && Number.isFinite(data.elapsedMs) ? data.elapsedMs : null;

  return {
    cache,
    model,
    logId,
    cacheKey,
    elapsedMs,
  };
}
