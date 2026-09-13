/**
 * Lightweight live-collaboration entry for Node-hosted Workspace agents.
 *
 * Import this subpath instead of the package root when you only need auth,
 * HTTP, and Universer snapshot/changeset/history. The package root also
 * pulls the headless Univer CLI runtime.
 */

export {
  completeCliLogin,
  loginWithPassword,
  logout,
  startCliLogin,
  whoami,
  type CliLoginCompletion,
  type PendingCliLogin,
  type WorkspaceAuthentication,
  type WorkspaceSubject,
} from "./auth.js";
export {
  bearerTokenFromCookie,
  isWorkspaceRecord,
  sessionHeaders,
  WorkspaceHttp,
  type AuthenticatedWorkspaceHttp,
  type WorkspaceHttpOptions,
  type WorkspaceRequestOptions,
} from "./http.js";
export {
  LiveUniverserClient,
  liveCollaborationEndpoints,
  universerPrefix,
  type LiveCollaborationEndpoints,
  type LiveCollaborator,
  type LiveHistoryEntry,
  type LiveUnitSnapshot,
} from "./collab.js";
export {
  LiveWorkspaceUnit,
  actorMemberId,
  type LiveAgentTurnResult,
  type LiveSheetRangeResult,
} from "./live-unit.js";
export {
  a1ToRowCol,
  activeSheetId,
  buildSetRangeChangeset,
  cellsFromGrid,
  encodeSheetCell,
  getSheetCell,
  getSheetRange,
  rowColToA1,
  snapshotRevision,
  univerTypeNumber,
  type SheetCellValue,
  type SheetRangeCell,
} from "./sheet-mutations.js";
export {
  parseWorkspaceRuntimeTarget,
  serializeWorkspaceRuntimeTarget,
  workspaceRuntimeKey,
  workspaceSnapshotPrefix,
  type WorkspaceRuntimeScope,
  type WorkspaceRuntimeTarget,
} from "./runtime-target.js";
export { WorkspaceSpaceFeature, type BrowseSpaceInput } from "./space.js";
export {
  parseSpace,
  parseUnitType,
  type WorkspaceSpace,
  type WorkspaceUnitType,
} from "./space-model.js";
export {
  DEMO_UNIT_ID,
  DEMO_UNIVER_FILE,
  SET_E4_CODE,
  SUM_E2_CODE,
  WorkspaceUniverFileClient,
} from "./univer-file.js";
