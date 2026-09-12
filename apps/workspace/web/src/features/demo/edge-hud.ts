export type CombWire = "protobuf" | "json";
export type GatewayCache = "HIT" | "MISS";
export type BrowserHud = "ok" | "off";

export interface EdgeHudState {
  readonly comb: CombWire;
  readonly gateway: GatewayCache;
  readonly browser: BrowserHud;
}

export interface EdgeHudChip {
  readonly id: "comb" | "gateway" | "browser";
  readonly value: CombWire | GatewayCache | BrowserHud;
  readonly showValue: boolean;
  readonly ariaLabel: string;
}

const JSON_OBJECT_START = 0x7b;

const listeners = new Set<() => void>();

let hudState: EdgeHudState = {
  comb: "json",
  gateway: "MISS",
  browser: "off",
};

function emit(): void {
  for (const listener of listeners) listener();
}

export function readEdgeHudState(): EdgeHudState {
  return hudState;
}

export function resetEdgeHudState(): void {
  hudState = { comb: "json", gateway: "MISS", browser: "off" };
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

export function noteLastGatewayCache(status: GatewayCache): void {
  if (hudState.gateway === status) return;
  hudState = { ...hudState, gateway: status };
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
  readonly comb: CombWire;
  readonly gateway: GatewayCache;
  readonly browser: BrowserHud;
  readonly compact: boolean;
}): readonly EdgeHudChip[] {
  const showValue = !input.compact;
  return [
    {
      id: "comb",
      value: input.comb,
      showValue,
      ariaLabel: `Comb ${input.comb}`,
    },
    {
      id: "gateway",
      value: input.gateway,
      showValue,
      ariaLabel: `Gateway ${input.gateway}`,
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
