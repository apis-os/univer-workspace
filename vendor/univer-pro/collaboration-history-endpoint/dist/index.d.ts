import { IUniverHistoryService } from "@univerjs-pro/collaboration-history-service";
import { NodeRouter, NodeTransportEndpoint } from "@univerjs-pro/collaboration-transport-node";

//#region src/endpoint.d.ts
declare class UniverHistoryEndpoint implements NodeTransportEndpoint {
  private readonly _service;
  private _disposed;
  constructor(_service: IUniverHistoryService);
  register(router: NodeRouter): void;
  private _handleHttp;
  dispose(): void;
}
//#endregion
export { UniverHistoryEndpoint };