/**
 * Mount() catch used to show `reason.message`, which becomes `[object Object]`
 * when Univer/collab throws a protocol body instead of an Error.
 */
export function formatUnknownError(reason: unknown, fallback: string): string {
  const fromObject = (value: unknown, depth: number): string | null => {
    if (depth > 4 || value == null) return null;
    if (typeof value === "string") {
      const trimmed = value.trim();
      if (!trimmed || trimmed === "[object Object]") return null;
      return trimmed;
    }
    if (typeof value === "number" || typeof value === "boolean") return String(value);
    if (typeof value !== "object") return null;
    const record = value as Record<string, unknown>;
    const nested =
      fromObject(record.message, depth + 1) ||
      fromObject(record.error, depth + 1) ||
      fromObject(record.reason, depth + 1) ||
      fromObject(record.cause, depth + 1);
    if (nested) return nested;
    try {
      const json = JSON.stringify(value);
      if (json && json !== "{}" && json !== "[]" && json !== "[object Object]") return json;
    } catch {
      return null;
    }
    return null;
  };

  if (reason instanceof Error) {
    const message = typeof reason.message === "string" ? reason.message.trim() : "";
    if (message && message !== "[object Object]") return message;
    const extras = fromObject((reason as { cause?: unknown; error?: unknown }).cause, 0)
      || fromObject((reason as { error?: unknown }).error, 0)
      || fromObject(reason, 0);
    if (extras) return extras;
    return fallback;
  }
  return fromObject(reason, 0) || fallback;
}
