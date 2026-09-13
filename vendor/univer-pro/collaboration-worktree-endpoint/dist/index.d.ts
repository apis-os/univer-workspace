import { EndpointMember, EndpointSession, ISessionTicketStore, MemberLeftUnitReason } from "@univerjs-pro/collaboration-endpoint";
import { Disposable } from "@univerjs-pro/collaboration-service";
import { NodeRouter, NodeTransportConnection, NodeTransportEndpoint } from "@univerjs-pro/collaboration-transport-node";
import { IUniverCollabWorktreeService, WorktreeData } from "@univerjs-pro/collaboration-worktree-service";

//#region src/worktree-endpoint.d.ts
interface UniverCollabWorktreeEndpointOptions {
  readonly ticketStore: ISessionTicketStore;
  readonly sessionTicketTtlMs?: number;
}
interface BaseWorktreeEndpointMiddlewareContext {
  readonly worktreeID: string;
  readonly session: EndpointSession;
}
interface ConnectWorktreeEndpointMiddlewareContext extends BaseWorktreeEndpointMiddlewareContext {
  readonly connection: NodeTransportConnection;
  readonly member: EndpointMember;
}
interface JoinWorktreeUnitEndpointMiddlewareContext extends BaseWorktreeEndpointMiddlewareContext {
  readonly unitID: string;
}
interface ReceiveWorktreePresenceEndpointMiddlewareContext extends JoinWorktreeUnitEndpointMiddlewareContext {
  readonly payload: unknown;
  readonly customData: Record<string, unknown>;
}
interface SendWorktreePresenceEndpointMiddlewareContext extends ReceiveWorktreePresenceEndpointMiddlewareContext {
  readonly targetMemberID: string;
}
type WorktreeEndpointMiddlewareAction = "connect" | "joinUnit" | "receivePresence" | "sendPresence";
type WorktreeEndpointMiddlewareNext = () => Promise<void>;
type WorktreeEndpointMiddleware<TContext> = (context: TContext, next: WorktreeEndpointMiddlewareNext) => void | Promise<void>;
interface WorktreeEndpointMiddlewareMap {
  readonly connect: WorktreeEndpointMiddleware<ConnectWorktreeEndpointMiddlewareContext>;
  readonly joinUnit: WorktreeEndpointMiddleware<JoinWorktreeUnitEndpointMiddlewareContext>;
  readonly receivePresence: WorktreeEndpointMiddleware<ReceiveWorktreePresenceEndpointMiddlewareContext>;
  readonly sendPresence: WorktreeEndpointMiddleware<SendWorktreePresenceEndpointMiddlewareContext>;
}
interface MemberLeftWorktreeUnitEvent {
  readonly worktreeID: string;
  readonly session: EndpointSession;
  readonly unitID: string;
  readonly reason: MemberLeftUnitReason;
}
interface WorktreeEndpointEventMap {
  readonly memberLeftUnit: MemberLeftWorktreeUnitEvent;
}
interface WorktreeChangedMessage {
  readonly event: "worktreeChanged";
  readonly worktree: WorktreeData;
}
type EndpointListener<K extends keyof WorktreeEndpointEventMap> = (event: WorktreeEndpointEventMap[K]) => void | Promise<void>;
declare class UniverCollabWorktreeEndpoint implements NodeTransportEndpoint {
  private readonly _service;
  private readonly _options;
  private readonly _middleware;
  private readonly _listeners;
  private readonly _scopedEndpoints;
  private readonly _eventBindings;
  private readonly _eventRooms;
  private readonly _eventQueues;
  private readonly _subscriptions;
  private readonly _ticketTtlMs;
  private _disposed;
  constructor(_service: IUniverCollabWorktreeService, _options: UniverCollabWorktreeEndpointOptions);
  use<K extends WorktreeEndpointMiddlewareAction>(action: K, middleware: WorktreeEndpointMiddlewareMap[K]): Disposable;
  on<K extends keyof WorktreeEndpointEventMap>(event: K, listener: EndpointListener<K>): Disposable;
  register(router: NodeRouter): void;
  private _handleEventUpgrade;
  dispose(): Promise<void>;
  private _handleTicket;
  private _handleManagement;
  private _openEventConnection;
  private _scopedEndpoint;
  private _getJoinableWorktree;
  private _enqueueWorktreeChanged;
  private _sendChanged;
  private _removeEventBinding;
  private _emit;
  private _requireUser;
  private _writeFailure;
  private _assertRunning;
}
//#endregion
export { type BaseWorktreeEndpointMiddlewareContext, type ConnectWorktreeEndpointMiddlewareContext, type JoinWorktreeUnitEndpointMiddlewareContext, type MemberLeftWorktreeUnitEvent, type ReceiveWorktreePresenceEndpointMiddlewareContext, type SendWorktreePresenceEndpointMiddlewareContext, UniverCollabWorktreeEndpoint, type UniverCollabWorktreeEndpointOptions, type WorktreeChangedMessage, type WorktreeEndpointEventMap, type WorktreeEndpointMiddleware, type WorktreeEndpointMiddlewareAction, type WorktreeEndpointMiddlewareMap, type WorktreeEndpointMiddlewareNext };