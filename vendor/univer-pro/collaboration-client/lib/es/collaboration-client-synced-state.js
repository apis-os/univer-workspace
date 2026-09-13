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
import { q } from "./collaboration-client-pending-state.js";
import { Q } from "./collaboration-client-fetching-miss-state.js";
import { X } from "./collaboration-client-conflict-state.js";
import { Z } from "./collaboration-client-offline-state.js";
let K = class extends G {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46672, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46673, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46674, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46675, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46676, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46677, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46678, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46679, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46680, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46681) {
    super(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46672, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46673, null, [], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46674, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46678, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46677, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46675, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46681), this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46676, this._logService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46679, this._transformService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46680, this.localCacheService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46681, z(this, "status", "synced");
  }
  appendMutation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46692) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46693 = this._injector["createInstance"](q, this.unitID, this.type, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46692], this._handler);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46693._schedule(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46693._updateLocalCache(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46693;
  }
  onRemoteChangeset(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46696) {
    if (this._checkMissing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46696)) return this._injector["createInstance"](Q, this.unitID, this.type, null, [], null, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46696], this._handler);
    try {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138 = this._transformService["transformMutationsWithChangeset"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46696, [EmptyMutationInfo]);
      if (isTransformMutationsWithChangesetSuccess(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138)) {
        let {
          c1Prime: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138;
        return this._executeRemoteChangeset(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635), this;
      }
      throw var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138.error;
    } catch (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC56) {
      return this._logService["error"](var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC56), this._onConflict(false);
    }
  }
  _onConflict(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46698) {
    return this._injector["createInstance"](X, this.unitID, this.type, null, [], this._handler, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46698);
  }
  onRemoteAck(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46700) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46700.revision <= this._getCurrentRevision()) return this;
    throw Error("[SyncedState]:\x20received\x20acknowledgement.");
  }
  onRemoteRej() {
    throw Error("[SyncedState]: received rejection.");
  }
  onRemoteRetry() {
    return this;
  }
  toggleOffline() {
    return this._injector["createInstance"](Z, this.unitID, this.type, null, [], this._handler);
  }
  toggleOnline() {
    return this;
  }
  resend() {
    throw Error("[SyncedState]: invalid calling to `resend`.");
  }
  fetchMiss() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46702 = this._revisionService["getCurrentRevOfUnit"](this.unitID);
    return this._handler["onMissingChangesets"]({
      from: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46702,
      to: 0
    }), this._injector["createInstance"](Q, this.unitID, this.type, null, [], null, [], this._handler);
  }
};
export { K as SyncedState };
