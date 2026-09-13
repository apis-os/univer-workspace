import type { Nullable, UniverInstanceType } from '@univerjs/core';
import type { ICollaborationSocket } from '../socket/collaboration-socket.service';
import type { ICollaborationClientAdapter } from './collaboration-client-adapter';
import { Disposable, IConfigService, ILogService, Injector } from '@univerjs/core';
import { CollaborationUIEventService } from '../collaboration-ui-event/collaboration-ui-event';
import { INetworkConditionService } from '../network-condition/network-condition.service';
import { ICollaborationSocketService } from '../socket/collaboration-socket.service';
import { CollaborationSession, SessionStatus } from './collaboration-session';
/**
 * This service provide collaboration sessions to univer instances. A collaboration session
 * may be used by different controllers of different features.
 */
export declare class CollaborationSessionService extends Disposable {
    private readonly _injector;
    private readonly _logService;
    private readonly _configService;
    private readonly _socketService;
    private readonly _collaborationUIEventService;
    private readonly _adapter;
    private readonly _networkConditionService?;
    private _sessions;
    private _pendingSessions;
    private _sessionChannels;
    private _socketChannels;
    /**
     * Socket for collaboration sessions on the default endpoint.
     */
    readonly socket$: import("rxjs").Observable<Nullable<ICollaborationSocket>>;
    private _status$;
    status$: import("rxjs").Observable<SessionStatus>;
    constructor(_injector: Injector, _logService: ILogService, _configService: IConfigService, _socketService: ICollaborationSocketService, _collaborationUIEventService: CollaborationUIEventService, _adapter: ICollaborationClientAdapter, _networkConditionService?: INetworkConditionService | undefined);
    private _listenToNetworkCondition;
    dispose(): void;
    /**
     * Require a collaboration session.
     * @param unitID
     * @returns a collaboration session.
     */
    requireSession(unitID: string, unitType?: UniverInstanceType): Promise<CollaborationSession>;
    private _createSession;
    closeSession(unitID: string): void;
    reconnect(): void;
    private _clearRetryConnectingTimer;
    /**
     * Authentication flow for WebSocket connections:
     * 1. Get one-time session ticket via HTTP request
     * 2. Connect WebSocket with ticket as URL parameter
     *
     * Benefits:
     * - Bypasses cookie-based auth restrictions
     * - Supports custom auth headers
     * - Uses secure one-time ticket validation
     */
    private _createSocket;
    /**
     * Try to establish connection to the collaboration server.
     *
     * Will send heartbeat channel to the server to keep the connection alive.
     */
    private _tryEnsureSocket;
    private _onConnectionOpen;
    private _onOffline;
    private _onConnectionFailed;
    private _tryReconnect;
    private _resolveSessionIdentity;
    private _onMessage;
    private _hasSessionsForEndpoint;
    private _getSocketChannel;
    private _rescheduleHeartbeat;
    private _sendHeartbeat;
    private _waitForHeartbeatResponse;
    private _clearHeartbeatTimer;
    private _clearTimeoutTimer;
}
