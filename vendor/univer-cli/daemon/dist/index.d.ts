//#region src/types.d.ts
type JsonValue = null | boolean | number | string | JsonValue[] | {
  readonly [key: string]: JsonValue;
};
interface DaemonClient {
  request(method: string, payload: JsonValue): Promise<JsonValue>;
}
interface DaemonIdentity {
  readonly buildId?: string;
  readonly id: string;
  readonly version: string;
}
interface DaemonClientOptions {
  readonly entry: string | URL;
  readonly env?: NodeJS.ProcessEnv;
  readonly identity: DaemonIdentity;
  readonly requestTimeoutMs?: number;
  readonly socketPath: string;
  readonly startTimeoutMs?: number;
}
interface DaemonControl {
  restart(): Promise<DaemonRestartResult>;
  status(): Promise<DaemonStatus>;
  start(): Promise<DaemonStartResult>;
  stop(): Promise<DaemonStopResult>;
}
interface DaemonControlOptions extends DaemonClientOptions {
  readonly stopTimeoutMs?: number;
}
type DaemonStatus = DaemonIncompatibleStatus | DaemonRunningStatus | DaemonStoppedStatus | DaemonUnreachableStatus;
type DaemonIncompatibilityReason = "build-id-mismatch" | "identity-mismatch" | "invalid-health" | "legacy-protocol" | "protocol-mismatch" | "version-mismatch";
interface DaemonIncompatibleStatus {
  readonly actual?: DaemonHealth;
  readonly diagnostic?: DaemonStatusDiagnostic;
  readonly expected: {
    readonly identity: DaemonIdentity;
    readonly protocolVersion: number;
  };
  readonly reason: DaemonIncompatibilityReason;
  readonly socketPath: string;
  readonly state: "incompatible";
}
interface DaemonStatusDiagnostic {
  readonly code?: string;
  readonly message: string;
}
interface DaemonUnreachableStatus {
  readonly diagnostic: DaemonStatusDiagnostic;
  readonly socketPath: string;
  readonly state: "unreachable";
}
interface DaemonHealth {
  readonly identity: DaemonIdentity;
  readonly pid: number;
  readonly protocolVersion: number;
  readonly socketPath: string;
  readonly startedAt: string;
}
interface DaemonRunningStatus extends DaemonHealth {
  readonly state: "running";
}
interface DaemonStoppedStatus {
  readonly socketPath: string;
  readonly state: "stopped";
}
interface DaemonStartResult extends DaemonRunningStatus {
  readonly started: boolean;
}
interface DaemonRestartResult extends DaemonRunningStatus {
  readonly previousPid?: number;
  readonly restarted: boolean;
}
interface DaemonStopResult extends DaemonStoppedStatus {
  readonly stopped: boolean;
}
type DaemonRequestHandler = (payload: JsonValue) => Promise<JsonValue>;
interface DaemonServer {
  close(): Promise<void>;
  handle(method: string, handler: DaemonRequestHandler): void;
  listen(): Promise<void>;
}
interface DaemonServerOptions {
  readonly identity: DaemonIdentity;
  readonly onShutdown?: () => void | Promise<void>;
  readonly socketPath: string;
}
//#endregion
//#region src/transport.d.ts
declare const DAEMON_SOCKET_ENV = "UNIVER_CLI_SDK_DAEMON_SOCKET";
//#endregion
//#region src/client.d.ts
declare function createDaemonClient(options: DaemonClientOptions): DaemonClient;
//#endregion
//#region src/control.d.ts
declare function createDaemonControl(options: DaemonControlOptions): DaemonControl;
//#endregion
//#region src/protocol.d.ts
declare const DAEMON_PROTOCOL_VERSION = 1;
declare const DAEMON_STATUS_METHOD = "daemon.status";
declare const DAEMON_SHUTDOWN_METHOD = "daemon.shutdown";
//#endregion
//#region src/server.d.ts
declare function createDaemonServer(options: DaemonServerOptions): DaemonServer;
//#endregion
export { DAEMON_PROTOCOL_VERSION, DAEMON_SHUTDOWN_METHOD, DAEMON_SOCKET_ENV, DAEMON_STATUS_METHOD, type DaemonClient, type DaemonClientOptions, type DaemonControl, type DaemonControlOptions, type DaemonHealth, type DaemonIdentity, type DaemonIncompatibilityReason, type DaemonIncompatibleStatus, type DaemonRequestHandler, type DaemonRestartResult, type DaemonRunningStatus, type DaemonServer, type DaemonServerOptions, type DaemonStartResult, type DaemonStatus, type DaemonStatusDiagnostic, type DaemonStopResult, type DaemonStoppedStatus, type DaemonUnreachableStatus, type JsonValue, createDaemonClient, createDaemonControl, createDaemonServer };