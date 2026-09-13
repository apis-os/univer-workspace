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
import { G, z } from "./internal-glue.js";
let X = class extends G {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46844, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46845, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46846, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46847, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46848, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46849 = false, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46850, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46851, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46852, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46853, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46854, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46855, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46856) {
    super(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46844, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46845, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46846, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46847, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46848, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46851, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46852, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46853, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46856), this._isPermissionRej = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46849, this._permissionService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46850, this._localeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46854, this._collaborationUIEventService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46855, this.localCacheService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46856, z(this, "status", "conflict"), this._showConflictNotification(), this._clearLocalCache(), this._disableEditing();
  }
  appendMutation() {
    return this;
  }
  onRemoteChangeset() {
    return this;
  }
  onRemoteAck() {
    return this;
  }
  onRemoteRej() {
    return this;
  }
  onRemoteRetry() {
    return this;
  }
  toggleOffline() {
    return this;
  }
  toggleOnline() {
    return this;
  }
  resend() {
    throw Error("[ConflictState]: invalid calling to `resend`.");
  }
  _clearLocalCache() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46870, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46871, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46872;
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46870 = this._localCacheService) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46871 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46870.backupOfflineData) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46871 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46871.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46870, this.unitID, "conflict")) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46871.catch(() => undefined), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46872 = this._localCacheService) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46872.updateOfflineData(this.unitID, this.type, null, []);
  }
  _showConflictNotification() {
    this._isPermissionRej ? this._collaborationUIEventService["emitEvent"]({
      id: "PERMISSION_DENIED"
    }) : this._collaborationUIEventService["emitEvent"]({
      id: "CONFLICT"
    });
  }
  _disableEditing() {
    this._permissionService["updatePermissionPoint"](new WorkbookEditablePermission(this.unitID).id, false);
  }
};
export { X as ConflictState };
