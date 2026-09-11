import type { Ctor, DependencyOverride } from '@univerjs/core';
import type { IAttachmentUploadOptions } from '../services/attachment-remote/types';
import type { ICollaborationSocketService } from '../services/socket/collaboration-socket.service';
export declare const COLLABORATION_CLIENT_PLUGIN_CONFIG_KEY = "collaboration-client.config";
export declare const configSymbol: unique symbol;
export interface IUniverCollaborationClientConfig {
    /**
     * Which socket should the plugin use to build connections to the collaborative engine.
     * For normal cases, you should use `BrowserCollaborationSocketService` from the `collaboration-client-ui` plugin.
     */
    socketService: Ctor<ICollaborationSocketService>;
    /**
     * If the plugin should enable collaborative editing. Which means the client will exchange edits with
     * the collaboration server. It this is set to false, the client will simply load data from the server.
     *
     * @default true
     */
    enableCollaboration?: boolean;
    /**
     * If offline editing is enabled.
     * @default false
     */
    enableOfflineEditing?: boolean;
    enableSingleActiveInstanceLock?: boolean;
    enableAuthServer?: boolean;
    /**
     * Override internal modules with custom implementations.
     */
    override?: DependencyOverride;
    sendChangesetTimeout?: number;
    snapshotServerUrl?: string;
    collabSubmitChangesetUrl?: string;
    collabWebSocketUrl?: string;
    /**
     * The URL of the endpoint for getting the websocket session ticket.
     */
    wsSessionTicketUrl?: string;
    loginUrlKey?: string;
    retryConnectingInterval?: number;
    authzUrl?: string;
    /**
     * The URL of the endpoint for downloading files.
     * @default 'location.origin'
     */
    downloadEndpointUrl?: string;
    uploadFileServerUrl?: string;
    signUrlServerUrl?: string;
    /**
     * Shared attachment upload restrictions and optional custom uploader used by
     * the collaboration attachment IO service.
     */
    attachment?: IAttachmentUploadOptions;
    /**
     * The URL of the endpoint for starting formula limit.
     */
    startFormulaLimitUrl?: string;
    /**
     * The URL of the endpoint for getting formula limit status.
     */
    getFormulaLimitStatusUrl?: string;
    /**
     * The URL of the endpoint for releasing formula limit.
     */
    releaseFormulaLimitUrl?: string;
    /**
     * The socket connection custom headers.
     */
    customHeaders?: Record<string, string>;
}
export declare const defaultPluginConfig: Omit<IUniverCollaborationClientConfig, 'socketService'>;
/**
 * Default value for `SNAPSHOT_SERVER_URL_KEY`.
 *
 * Determined in the protocol file in `submodules/protocol/universer/v1/snapshot.proto`.
 */
export declare const DEFAULT_SNAPSHOT_SERVER_URL = "/universer-api/snapshot";
/**
 * @ignore
 */
export declare const SNAPSHOT_URL_KEY = "SNAPSHOT_URL_KEY";
export declare const DEFAULT_SEND_CHANGESET_TIMEOUT = 2000;
export declare const DEFAULT_COLLAB_WEB_SOCKET_URL = "ws://127.0.0.1:8000/universer-api/comb/connect";
export declare const DEFAULT_WS_SESSION_TICKET_URL = "/universer-api/user/session-ticket";
/** The heartbeat interval in milliseconds. */
export declare const HEARTBEAT_INTERVAL_KEY = "HEARTBEAT_INTERVAL";
export declare const DEFAULT_HEARTBEAT_INTERVAL = 30000;
export declare const HEARTBEAT_TIMEOUT_KEY = "HEARTBEAT_TIMEOUT";
export declare const DEFAULT_HEARTBEAT_TIMEOUT = 20000;
export declare const DEFAULT_RETRY_CONNECTING_INTERVAL = 20000;
export declare const RETRY_CONNECTING_MAX_COUNT_KEY = "RETRY_CONNECTING_MAX_COUNT";
export declare const DEFAULT_RETRY_CONNECTING_MAX_COUNT = 3;
/**
 * A config key to determine how often should Univer save local edits.
 */
export declare const LOCAL_CACHE_INTERVAL_KEY = "LOCAL_CACHE_INTERVAL";
export declare const LOCAL_CACHE_INTERVAL = 1000;
/** The url prefix is determined by protocol in submodules/protocol/universer/v1/comb.proto */
export declare const DEFAULT_COLLAB_SUBMIT_CHANGESET_URL = "/universer-api/comb";
export declare const DEFAULT_LOGIN_URL = "/universer-api/oidc/authpage";
/**
 * The config key to determine the URL of the Uniscript execution endpoint.
 */
export declare const REMOTE_UNISCRIPT_EXECUTION_ENDPOINT_KEY = "REMOTE_UNISCRIPT_EXECUTION_ENDPOINT";
export declare const DEFAULT_REMOTE_UNISCRIPT_EXECUTION_ENDPOINT = "/universer-api/uniscript";
