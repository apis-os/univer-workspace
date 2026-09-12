import type { GatewayTrace } from "./gateway-trace";

export type CombWire = "protobuf" | "json";
export type GatewayCache = "HIT" | "MISS";
export type BrowserHud = "ok" | "off";

export interface EdgeHudState {
  readonly comb: CombWire | null;
  readonly gateway: GatewayCache | null;
  readonly gatewayTrace?: GatewayTrace | null;
  readonly browser: BrowserHud;
}

export interface EdgeHudChip {
  readonly id: "comb" | "gateway" | "browser";
  readonly value: string;
  readonly showValue: boolean;
  readonly ariaLabel: string;
}

const JSON_OBJECT_START = 0x7b;

const listeners = new Set<() => void>();

let hudState: EdgeHudState = {
  comb: null,
  gateway: null,
  gatewayTrace: null,
  browser: "off",
};

function emit(): void {
  for (const listener of listeners) listener();
}

export function readEdgeHudState(): EdgeHudState {
  return hudState;
}

export function resetEdgeHudState(): void {
  hudState = { comb: null, gateway: null, gatewayTrace: null, browser: "off" };
  emit();
}

export function subscribeEdgeHud(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function noteLastCombWire(wire: CombWire): void {
  if (hudState.comb === wire) return;
  hudState = { ...hudState, comb: wire };
  emit();
}

export function noteLastGatewayCache(status: GatewayCache | null): void {
  if (hudState.gateway === status) return;
  hudState = { ...hudState, gateway: status };
  emit();
}

export function noteGatewayTrace(trace: GatewayTrace): void {
  hudState = {
    ...hudState,
    gateway: trace.cache,
    gatewayTrace: trace,
  };
  emit();
}

export function noteBrowserHealth(browser: BrowserHud): void {
  if (hudState.browser === browser) return;
  hudState = { ...hudState, browser };
  emit();
}

export function combWireFromFrame(data: unknown): CombWire {
  if (typeof data === "string") {
    const trimmed = data.trimStart();
    return trimmed.startsWith("{") || trimmed.startsWith("[") ? "json" : "protobuf";
  }
  const bytes = frameBytes(data);
  if (!bytes || bytes.byteLength === 0) return "json";
  return bytes[0] === JSON_OBJECT_START ? "json" : "protobuf";
}

function frameBytes(data: unknown): Uint8Array | null {
  if (data instanceof ArrayBuffer) return new Uint8Array(data);
  if (ArrayBuffer.isView(data)) {
    return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
  }
  return null;
}

export function browserHudStatus(healthz: {
  readonly ai?: unknown;
  readonly browser?: unknown;
}): BrowserHud {
  return healthz.browser === "ok" ? "ok" : "off";
}

export function edgeHudChips(input: {
  readonly comb: CombWire | null;
  readonly gateway: GatewayCache | null;
  readonly gatewayTrace?: GatewayTrace | null;
  readonly browser: BrowserHud;
  readonly compact: boolean;
}): readonly EdgeHudChip[] {
  const showValue = !input.compact;
  const combValue = input.comb ?? "—";
  const combAria = input.comb ? `Comb ${input.comb}` : "Comb pending";

  let gatewayValue = input.gateway ?? "—";
  let gatewayAria = input.gateway ? `Gateway ${input.gateway}` : "Gateway pending";

  if (input.gatewayTrace && !input.compact) {
    const parts: string[] = [];
    if (input.gatewayTrace.cache) parts.push(input.gatewayTrace.cache);
    if (input.gatewayTrace.model) parts.push(input.gatewayTrace.model);
    if (input.gatewayTrace.logId) {
      const shortLog =
        input.gatewayTrace.logId.length > 12
          ? `${input.gatewayTrace.logId.slice(0, 10)}…`
          : input.gatewayTrace.logId;
      parts.push(shortLog);
    }
    if (parts.length > 0) {
      gatewayValue = parts.join(" · ");
      gatewayAria = `Gateway ${parts.join(" ")}`;
    }
  }

  return [
    {
      id: "comb",
      value: combValue,
      showValue,
      ariaLabel: combAria,
    },
    {
      id: "gateway",
      value: gatewayValue,
      showValue,
      ariaLabel: gatewayAria,
    },
    {
      id: "browser",
      value: input.browser,
      showValue,
      ariaLabel: `BROWSER ${input.browser}`,
    },
  ];
}

const COMB_CONNECT_URL =
  /\/universer-api(?:\/worktrees\/[^/?#]+)?\/comb\/connect(?:[/?#]|$)/;

export function isCombConnectUrl(url: string): boolean {
  return COMB_CONNECT_URL.test(url);
}

function combFrameFromSocketEvent(event: unknown): unknown {
  if (
    typeof event === "string" ||
    event instanceof ArrayBuffer ||
    ArrayBuffer.isView(event)
  ) {
    return event;
  }
  if (event !== null && typeof event === "object" && "data" in event) {
    const data = (event as { data: unknown }).data;
    if (
      typeof data === "string" ||
      data instanceof ArrayBuffer ||
      ArrayBuffer.isView(data)
    ) {
      return data;
    }
  }
  return event;
}

function noteCombFrameFromSocketEvent(event: unknown): void {
  const frame = combFrameFromSocketEvent(event);
  if (
    typeof frame !== "string" &&
    !(frame instanceof ArrayBuffer) &&
    !ArrayBuffer.isView(frame)
  ) {
    return;
  }
  noteLastCombWire(combWireFromFrame(frame));
}

export function tapCombWireFromSocket(
  socket:
    | {
        readonly addEventListener?: (
          type: string,
          listener: (event: { readonly data?: unknown }) => void
        ) => void;
        readonly message$?: {
          readonly subscribe: (next: (event: unknown) => void) => unknown;
        };
      }
    | null
    | undefined
): void {
  socket?.addEventListener?.("message", (event) => {
    noteCombFrameFromSocketEvent(event);
  });
  socket?.message$?.subscribe?.((event) => {
    noteCombFrameFromSocketEvent(event);
  });
}

type BrowserWebSocket = {
  new (url: string | URL, protocols?: string | string[]): WebSocket;
  prototype: WebSocket;
};

export function installCombWireWebSocketProbe(
  target: { WebSocket?: BrowserWebSocket } = globalThis as {
    WebSocket?: BrowserWebSocket;
  }
): void {
  const Native = target.WebSocket;
  if (typeof Native !== "function") return;
  if ((Native as { __edgeHudCombWire?: boolean }).__edgeHudCombWire) return;

  class CombWireWebSocket extends Native {
    constructor(url: string | URL, protocols?: string | string[]) {
      super(url, protocols);
      if (!isCombConnectUrl(String(url))) return;
      this.addEventListener("message", (event) => {
        noteLastCombWire(combWireFromFrame(event.data));
      });
      const send = this.send.bind(this);
      this.send = (data: Parameters<WebSocket["send"]>[0]) => {
        noteLastCombWire(combWireFromFrame(data));
        return send(data);
      };
    }
  }
  (CombWireWebSocket as { __edgeHudCombWire?: boolean }).__edgeHudCombWire =
    true;
  target.WebSocket = CombWireWebSocket as BrowserWebSocket;
}
