import { IncomingMessage, ServerResponse } from "node:http";
import { Duplex } from "node:stream";

//#region src/errors.d.ts
type NodeTransportErrorCode = "INVALID_URL" | "INVALID_JSON" | "REQUEST_BODY_TOO_LARGE" | "REQUEST_ABORTED" | "TRANSPORT_DISPOSED";
declare class NodeTransportError extends Error {
  readonly code: NodeTransportErrorCode;
  constructor(code: NodeTransportErrorCode, message: string, options?: ErrorOptions);
}
//#endregion
//#region src/node-transport.d.ts
declare function createNodeTransport(options?: NodeTransportOptions): INodeTransport;
//#endregion
//#region src/transport.d.ts
type TransportCustomData = Record<string, unknown>;
interface TransportDisposable {
  dispose(): void | Promise<void>;
}
interface NodeTransportConnection {
  readonly id: string;
  readonly customData: TransportCustomData;
  send(data: string | Uint8Array): void | Promise<void>;
  close(code?: number, reason?: string): void;
}
interface NodeHttpTransportContext {
  readonly incomingMessage: IncomingMessage;
  readonly response: ServerResponse;
  readonly customData: TransportCustomData;
  readonly route?: NodeRoute;
  readonly params: Readonly<Record<string, string | undefined>>;
  userID?: string;
  readBody(): Promise<Uint8Array>;
  readJson<T = unknown>(): Promise<T>;
}
interface NodeWebSocketUpgradeContext {
  readonly incomingMessage: IncomingMessage;
  readonly customData: TransportCustomData;
  readonly route?: NodeRoute;
  readonly params: Readonly<Record<string, string | undefined>>;
  reject(statusCode?: number, message?: string): void;
}
interface NodeWebSocketEndpointContext extends NodeWebSocketUpgradeContext {
  accept(handler: NodeWebSocketHandler): void;
}
interface NodeWebSocketOpenContext {
  readonly connection: NodeTransportConnection;
}
interface NodeWebSocketMessageContext {
  readonly connection: NodeTransportConnection;
  readonly data: string | Uint8Array;
  readonly customData: TransportCustomData;
}
interface NodeWebSocketCloseContext {
  readonly connection: NodeTransportConnection;
  readonly code?: number;
  readonly reason?: string;
}
interface NodeWebSocketHandler {
  open?(ctx: NodeWebSocketOpenContext): void | Promise<void>;
  message?(ctx: NodeWebSocketMessageContext): void | Promise<void>;
  close?(ctx: NodeWebSocketCloseContext): void | Promise<void>;
}
type NodeTransportNext = () => Promise<void>;
type NodeHttpTransportMiddleware = (ctx: NodeHttpTransportContext, next: NodeTransportNext) => void | Promise<void>;
type NodeWebSocketUpgradeMiddleware = (ctx: NodeWebSocketUpgradeContext, next: NodeTransportNext) => void | Promise<void>;
interface NodeRoute {
  readonly path: string;
}
type NodeHttpHandler = (ctx: NodeHttpTransportContext) => void | Promise<void>;
type NodeUpgradeHandler = (ctx: NodeWebSocketEndpointContext) => void | Promise<void>;
interface NodeRouter {
  get(path: string, handler: NodeHttpHandler): void;
  post(path: string, handler: NodeHttpHandler): void;
  delete(path: string, handler: NodeHttpHandler): void;
  upgrade(path: string, handler: NodeUpgradeHandler): void;
}
interface NodeTransportEndpoint {
  register(router: NodeRouter): void;
  dispose?(): void | Promise<void>;
}
interface NodeTransportOptions {
  readonly maxRequestBodyBytes?: number;
  readonly maxWebSocketMessageBytes?: number;
}
interface INodeTransport {
  use(middleware: NodeHttpTransportMiddleware): TransportDisposable;
  useUpgrade(middleware: NodeWebSocketUpgradeMiddleware): TransportDisposable;
  register(endpoint: NodeTransportEndpoint): TransportDisposable;
  handleRequest(request: IncomingMessage, response: ServerResponse): void;
  handleUpgrade(request: IncomingMessage, socket: Duplex, head: Buffer): void;
  dispose(): Promise<void>;
}
//#endregion
export { type INodeTransport, type NodeHttpHandler, type NodeHttpTransportContext, type NodeHttpTransportMiddleware, type NodeRoute, type NodeRouter, type NodeTransportConnection, type NodeTransportEndpoint, NodeTransportError, type NodeTransportErrorCode, type NodeTransportNext, type NodeTransportOptions, type NodeUpgradeHandler, type NodeWebSocketCloseContext, type NodeWebSocketEndpointContext, type NodeWebSocketHandler, type NodeWebSocketMessageContext, type NodeWebSocketOpenContext, type NodeWebSocketUpgradeContext, type NodeWebSocketUpgradeMiddleware, type TransportCustomData, type TransportDisposable, createNodeTransport };