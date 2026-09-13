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
let Ot = function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461747) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461747.OTHER_CLIENT_EDITING = "OTHER_CLIENT_EDITING", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461747.PERMISSION_DENIED = "PERMISSION_DENIED", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461747.CONFLICT = "CONFLICT", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461747.CLOSE_ROOM = "CLOSE_ROOM", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461747.JOIN_ROOM_FAILED = "JOIN_ROOM_FAILED", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461747.SOCKET_FAILED_RETRY = "SOCKET_FAILED_RETRY", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461747.SOCKET_FAILED = "SOCKET_FAILED", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461747.SUBMIT_CHANGESET_TIMEOUT = "SUBMIT_CHANGESET_TIMEOUT", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461747;
}({});
export { Ot as CollaborationUIEventId };
