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
function En(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461903) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461904 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461903.data,
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18 = JSON.parse(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461904);
  switch (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18.cmd) {
    case CombCmd.HEARTBEAT:
    case CombCmd.HELLO:
      {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18.infoRsp;
        return {
          ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18,
          data: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292,
          cmd: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18.cmd
        };
      }
    case CombCmd.JOIN:
      {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18.joinRsp;
        return {
          ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18,
          data: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293,
          cmd: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18.cmd
        };
      }
    case CombCmd.RECV:
      {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18.collaMsg;
        switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294.eventID) {
          case CollaborationEvent.PERMISSION_REJ:
            var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461905;
            return {
              ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18,
              data: {
                ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294,
                data: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461905 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294.permissionRejEvent) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461905.cs
              },
              cmd: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18.cmd
            };
          case CollaborationEvent.CHANGESET_ACK:
            var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461906;
            return {
              ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18,
              data: {
                ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294,
                data: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461906 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294.csAckEvent) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461906.cs
              },
              cmd: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18.cmd
            };
          case CollaborationEvent.NEW_CHANGESETS:
            var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461907;
            return {
              ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18,
              data: {
                ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294,
                data: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461907 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294.newCsEvent) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461907.cs
              },
              cmd: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18.cmd
            };
          case CollaborationEvent.CHANGESET_REJ:
            var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461908;
            return {
              ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18,
              data: {
                ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294,
                data: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461908 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294.csRejEvent) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461908.cs
              },
              cmd: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18.cmd
            };
          case CollaborationEvent.CHANGESET_SHOULD_RETRY:
            var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461909;
            return {
              ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18,
              data: {
                ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294,
                data: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461909 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294.csShouldRetryEvent) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461909.cs
              },
              cmd: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18.cmd
            };
          case CollaborationEvent.UPDATE_CURSOR:
            return {
              ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18,
              data: {
                ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294,
                data: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294.updateCursorEvent
              },
              cmd: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18.cmd
            };
          case CollaborationEvent.USERS_ENTER:
            return {
              ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18,
              data: {
                ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294,
                data: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294.joinEvent
              },
              cmd: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18.cmd
            };
          case CollaborationEvent.USERS_LEAVE:
            return {
              ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18,
              data: {
                ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294,
                data: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294.leaveEvent
              },
              cmd: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18.cmd
            };
          case CollaborationEvent.LIVESHARE_NEW_HOST:
            return {
              ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18,
              data: {
                ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294,
                data: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294.liveShareNewHost
              },
              cmd: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18.cmd
            };
          case CollaborationEvent.LIVESHARE_FETCH_OPERATIONS:
          case CollaborationEvent.LIVESHARE_OPERATION:
            return {
              ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18,
              data: {
                ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294,
                data: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294.liveShareOperation
              },
              cmd: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18.cmd
            };
          case CollaborationEvent.LIVESHARE_TERMINATE:
            return {
              ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18,
              data: {
                ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294,
                data: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294.liveShareNewHost
              },
              cmd: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18.cmd
            };
          case CollaborationEvent.MSG_FOR_ERROR:
            return {
              ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18,
              data: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294,
              cmd: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18.cmd
            };
          case CollaborationEvent.COMMENT_UPDATE:
            return {
              ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18,
              data: {
                ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294,
                data: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294.commentUpdateEvent
              },
              cmd: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18.cmd
            };
          case CollaborationEvent.UPDATE_PERMISSION_OBJ:
            return {
              ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18,
              data: {
                ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294,
                data: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294.updatePermissionObjEvent
              },
              cmd: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18.cmd
            };
          case CollaborationEvent.SHOULD_CLOSE_CONN:
            return {
              ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18,
              data: {
                ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294,
                data: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294.shouldCloseConn
              },
              cmd: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18.cmd
            };
          case CollaborationEvent.UNISCRIPT_RUN:
            return {
              ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18,
              data: {
                ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294,
                data: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294.uniscriptRunEvent
              },
              cmd: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18.cmd
            };
          default:
            return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18;
        }
      }
    default:
      return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18;
  }
}
export { En as deserializeToCombResponse };
