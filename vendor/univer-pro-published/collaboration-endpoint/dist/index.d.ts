import { CustomData, Disposable, IUniverCollabService } from "@univerjs-pro/collaboration-service";
import { NodeRouter, NodeTransportConnection, NodeTransportEndpoint } from "@univerjs-pro/collaboration-transport-node";

//#region src/endpoint.d.ts
type EndpointListener<K extends keyof EndpointEventMap> = (event: EndpointEventMap[K]) => void | Promise<void>;
declare class UniverCollabEndpoint implements NodeTransportEndpoint, ITrustedUnitRoomHost {
  private readonly _service;
  private readonly _middleware;
  private readonly _listeners;
  private readonly _bindingsByConnection;
  private readonly _bindingsByMember;
  private readonly _rooms;
  private readonly _outboundQueues;
  private readonly _ticketStore;
  private readonly _ownsTicketStore;
  private readonly _ticketTtlMs;
  private readonly _protocolBasePath;
  private readonly _serviceSubscriptions;
  private readonly _deletedUnitIDs;
  private _disposed;
  constructor(_service: IUniverCollabService, options?: UniverCollabEndpointOptions);
  use<K extends EndpointMiddlewareAction>(action: K, middleware: EndpointMiddlewareMap[K]): Disposable;
  on<K extends keyof EndpointEventMap>(event: K, listener: EndpointListener<K>): Disposable;
  findJoinedSession(input: {
    readonly unitID: string;
    readonly memberID: string;
    readonly authenticatedUserID: string;
  }): EndpointSession | null;
  findJoinedSessionByUser(input: {
    readonly unitID: string;
    readonly authenticatedUserID: string;
  }): EndpointSession | null;
  invalidateUnitSessions(input: InvalidateUnitSessionsInput): Promise<void>;
  publishTrustedUnitEvent(input: {
    readonly unitID: string;
    readonly memberID: string;
    readonly eventID: string;
    readonly data: Readonly<Record<string, unknown>>;
  }): Promise<void>;
  register(router: NodeRouter): void;
  private _handleUpgrade;
  dispose(): Promise<void>;
  private _handleHttp;
  private _openConnection;
  private _handleMessage;
  private _handleJoin;
  private _handleLeave;
  private _handlePresence;
  private _handleNewChanges;
  private _trustedClientChangeset;
  private _enqueueCommittedChangeset;
  private _evictUnitRoom;
  private _enqueueUnitOutbound;
  private _disconnectConnection;
  private _disconnectBinding;
  private _leaveUnit;
  private _broadcastToRoom;
  private _safeSend;
  private _emit;
  private _assertRunning;
  private _assertJoinable;
}
//#endregion
//#region src/ticket-store.d.ts
declare class MemorySessionTicketStore implements ISessionTicketStore {
  private readonly _tickets;
  private _disposed;
  issue(record: SessionTicketRecord, ttlMs: number): Promise<string>;
  consume(ticket: string): Promise<SessionTicketRecord | null>;
  dispose(): Promise<void>;
  private _purgeExpired;
}
//#endregion
//#region src/univer-collab-endpoint.d.ts
interface SessionTicketRecord {
  readonly userID: string;
  readonly customData: CustomData;
}
interface EndpointSession {
  readonly userID: string;
  readonly memberID: string;
  readonly customData: CustomData;
}
interface ISessionTicketStore {
  issue(record: SessionTicketRecord, ttlMs: number): Promise<string>;
  consume(ticket: string): Promise<SessionTicketRecord | null>;
  dispose?(): Promise<void>;
}
interface EndpointSessionBinding {
  readonly connection: NodeTransportConnection;
  readonly session: EndpointSession;
  readonly member: EndpointMember;
  readonly joinedUnitIDs: ReadonlySet<string>;
}
interface ITrustedUnitRoomHost {
  findJoinedSession(input: {
    readonly unitID: string;
    readonly memberID: string;
    readonly authenticatedUserID: string;
  }): EndpointSession | null;
  findJoinedSessionByUser(input: {
    readonly unitID: string;
    readonly authenticatedUserID: string;
  }): EndpointSession | null;
  publishTrustedUnitEvent(input: {
    readonly unitID: string;
    readonly memberID: string;
    readonly eventID: string;
    readonly data: Readonly<Record<string, unknown>>;
  }): Promise<void>;
}
interface EndpointMember {
  readonly memberID: string;
  readonly userID: string;
  name: string;
  avatar?: string;
}
interface BaseEndpointMiddlewareContext {
  readonly session: EndpointSession;
}
interface ConnectEndpointMiddlewareContext extends BaseEndpointMiddlewareContext {
  readonly connection: NodeTransportConnection;
  readonly member: EndpointMember;
}
interface JoinUnitEndpointMiddlewareContext extends BaseEndpointMiddlewareContext {
  readonly unitID: string;
}
interface ReceivePresenceEndpointMiddlewareContext extends BaseEndpointMiddlewareContext {
  readonly unitID: string;
  readonly payload: unknown;
  readonly customData: CustomData;
}
interface SendPresenceEndpointMiddlewareContext extends ReceivePresenceEndpointMiddlewareContext {
  readonly targetMemberID: string;
}
type EndpointMiddlewareAction = "connect" | "joinUnit" | "receivePresence" | "sendPresence";
type EndpointMiddlewareNext = () => Promise<void>;
type EndpointMiddleware<TContext> = (ctx: TContext, next: EndpointMiddlewareNext) => void | Promise<void>;
interface EndpointMiddlewareMap {
  readonly connect: EndpointMiddleware<ConnectEndpointMiddlewareContext>;
  readonly joinUnit: EndpointMiddleware<JoinUnitEndpointMiddlewareContext>;
  readonly receivePresence: EndpointMiddleware<ReceivePresenceEndpointMiddlewareContext>;
  readonly sendPresence: EndpointMiddleware<SendPresenceEndpointMiddlewareContext>;
}
type MemberLeftUnitReason = "client-leave" | "connection-closed" | "endpoint-disposed" | "session-evicted";
interface MemberLeftUnitEvent {
  readonly session: EndpointSession;
  readonly unitID: string;
  readonly reason: MemberLeftUnitReason;
}
interface InvalidateUnitSessionsInput {
  readonly unitID: string;
  readonly userID?: string;
}
interface EndpointEventMap {
  readonly memberLeftUnit: MemberLeftUnitEvent;
}
interface UniverCollabEndpointOptions {
  readonly ticketStore?: ISessionTicketStore;
  readonly sessionTicketTtlMs?: number;
  readonly protocolBasePath?: string;
}
//#endregion
export { type BaseEndpointMiddlewareContext, type ConnectEndpointMiddlewareContext, type EndpointEventMap, type EndpointMember, type EndpointMiddleware, type EndpointMiddlewareAction, type EndpointMiddlewareMap, type EndpointMiddlewareNext, type EndpointSession, type EndpointSessionBinding, type ISessionTicketStore, type ITrustedUnitRoomHost, type InvalidateUnitSessionsInput, type JoinUnitEndpointMiddlewareContext, type MemberLeftUnitEvent, type MemberLeftUnitReason, MemorySessionTicketStore, type ReceivePresenceEndpointMiddlewareContext, type SendPresenceEndpointMiddlewareContext, type SessionTicketRecord, UniverCollabEndpoint, type UniverCollabEndpointOptions };