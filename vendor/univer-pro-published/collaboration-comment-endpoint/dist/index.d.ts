import { IUniverCommentService } from "@univerjs-pro/collaboration-comment-service";
import { ITrustedUnitRoomHost } from "@univerjs-pro/collaboration-endpoint";
import { NodeRouter, NodeTransportEndpoint } from "@univerjs-pro/collaboration-transport-node";

//#region src/endpoint.d.ts
interface UniverCommentEndpointOptions {
  readonly service: IUniverCommentService;
  readonly roomHost: ITrustedUnitRoomHost;
  readonly protocolBasePath?: string;
}
declare class UniverCommentEndpoint implements NodeTransportEndpoint {
  private readonly _service;
  private readonly _roomHost;
  private readonly _protocolBasePath;
  private readonly _subscription;
  private readonly _calls;
  private _disposed;
  private _disposePromise;
  constructor(options: UniverCommentEndpointOptions);
  register(router: NodeRouter): void;
  dispose(): Promise<void>;
  private _track;
  private _handleHttp;
  private _resolveWriteSession;
  private _publish;
}
//#endregion
export { UniverCommentEndpoint, type UniverCommentEndpointOptions };