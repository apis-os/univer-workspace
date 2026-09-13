import { CollaborationEvent, CompressMutationService, EmptyMutationInfo, ISnapshotServerService, ITransformService, RevisionService, SnapshotService, UniverCollaborationPlugin, b64DecodeUnicode, isTransformChangesetsSuccess, isTransformMutationsWithChangesetFailure, isTransformMutationsWithChangesetSuccess, mapDocumentTypeToUniverInstanceType, parseChangesetToProtocol, parseProtocolChangeset, textEncoder, uuidv4 } from "@univerjs-pro/collaboration";
import { CommandType, DependentOn, Disposable, DisposableCollection, IAuthzIoService, ICommandService, IConfigService, IContextService, IImageIoService, ILogService, IMentionIOService, IPermissionService, IUndoRedoService, IUniverInstanceService, ImageSourceType, ImageUploadStatusType, Inject, Injector, JSONX, LocalUndoRedoService, LocaleService, MentionType, Optional, Plugin, Quantity, Rectangle, RxDisposable, Tools, UniverInstanceType, UserManagerService, Workbook, createIdentifier, generateRandomId, isInternalEditorID, merge, mergeOverrideWithDependencies, registerDependencies, resolveWithBasePath, sequenceExecute, toDisposable, touchDependencies } from "@univerjs/core";
import { DocStateChangeManagerService, RichTextEditingMutation } from "@univerjs/docs";
import { InsertSheetMutation, SetSelectionsOperation, SheetPermissionInitController, SheetsSelectionsService, WorkbookEditablePermission } from "@univerjs/sheets";
import { BehaviorSubject, ReplaySubject, Subject, concatMap, firstValueFrom, map, merge as mergeLocal, of, shareReplay, take, takeUntil } from "rxjs";
import { CmdRspCode, CombCmd, ErrorCode, FileSource, UnitAction, UnitObject } from "@univerjs/protocol";
import { ITelemetryService } from "@univerjs/telemetry";
import { delay, filter, map as mapLocal, take as takeLocal, takeUntil as takeUntilLocal } from "rxjs/operators";
import { AddSlidePageMutation, EnsureSlideMasterPageMutation, MoveSlidePageMutation, RemoveSlidePageMutation } from "@univerjs-pro/slides";
import { HTTPRequest, HTTPService, ISocketService, MergeInterceptorFactory, ThresholdInterceptorFactory, UniverNetworkPlugin } from "@univerjs/network";
import { UniverLicensePlugin, getGlobalObject } from "@univerjs-pro/license";
import { cbc } from "@noble/ciphers/aes.js";
import { concatBytes, randomBytes, utf8ToBytes } from "@noble/ciphers/utils.js";
import { DRAWING_IMAGE_ALLOW_IMAGE_LIST, getDrawingImageAllowSize } from "@univerjs/drawing";
function Dn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461917) {
  switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461917.cmd) {
    case CombCmd.HEARTBEAT:
    case CombCmd.HELLO:
      return JSON.stringify({
        cmd: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461917.cmd,
        routeKey: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461917.routeKey
      });
    case CombCmd.INGEST:
      {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295;
        switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461917.data["eventID"]) {
          case CollaborationEvent.UPDATE_CURSOR:
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295 = {
              eventID: CollaborationEvent.UPDATE_CURSOR,
              updateCursorEvent: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461917.data["data"]
            };
            break;
          case CollaborationEvent.USERS_LEAVE:
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295 = {
              eventID: CollaborationEvent.USERS_LEAVE,
              leaveEvent: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461917.data["data"]
            };
            break;
          case CollaborationEvent.USERS_ENTER:
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295 = {
              eventID: CollaborationEvent.USERS_ENTER,
              joinEvent: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461917.data["data"]
            };
            break;
          case CollaborationEvent.LIVESHARE_NEW_HOST:
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295 = {
              eventID: CollaborationEvent.LIVESHARE_NEW_HOST,
              liveShareNewHost: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461917.data["data"]
            };
            break;
          case CollaborationEvent.LIVESHARE_OPERATION:
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295 = {
              eventID: CollaborationEvent.LIVESHARE_OPERATION,
              liveShareOperation: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461917.data["data"]
            };
            break;
          case CollaborationEvent.LIVESHARE_TERMINATE:
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295 = {
              eventID: CollaborationEvent.LIVESHARE_TERMINATE,
              liveShareTerminate: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461917.data["data"]
            };
            break;
          case CollaborationEvent.LIVESHARE_REQUEST_HOST:
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295 = {
              eventID: CollaborationEvent.LIVESHARE_REQUEST_HOST,
              liveShareRequestHost: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461917.data["data"]
            };
            break;
          case CollaborationEvent.LIVESHARE_FETCH_OPERATIONS:
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295 = {
              eventID: CollaborationEvent.LIVESHARE_FETCH_OPERATIONS
            };
            break;
          default:
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295 = {
              eventID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461917.data["eventID"]
            };
        }
        return JSON.stringify({
          cmd: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461917.cmd,
          routeKey: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461917.routeKey,
          collaMsg: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295
        });
      }
    case CombCmd.JOIN:
      return JSON.stringify({
        cmd: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461917.cmd,
        routeKey: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461917.routeKey,
        joinReq: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461917.data
      });
    case CombCmd.LEAVE:
      return JSON.stringify({
        cmd: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461917.cmd,
        routeKey: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461917.routeKey,
        leaveReq: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461917.data
      });
    default:
      throw Error("[serializeCombRequest]: should not fall into default branch!");
  }
}
export { Dn as serializeCombRequest };
