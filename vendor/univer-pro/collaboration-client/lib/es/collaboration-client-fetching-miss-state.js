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
import { Y } from "./collaboration-client-awaiting-with-pending-state.js";
import { J } from "./collaboration-client-awaiting-state.js";
import { q } from "./collaboration-client-pending-state.js";
import { K } from "./collaboration-client-synced-state.js";
import { X } from "./collaboration-client-conflict-state.js";
import { Z } from "./collaboration-client-offline-state.js";
let Q = class extends G {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46914, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46915, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46916, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46917, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46918, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46919, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46920, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46921, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46922, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46923, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46924, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46925, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46926, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46927) {
    super(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46914, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46915, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46916, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46917, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46920, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46924, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46925, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46922, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46927), this._acknowledgedAwaitingRevision = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46918, this._queuedRemoteChangesets = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46919, this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46921, this._logService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46923, this._transformService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46926, this.localCacheService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46927, z(this, "status", "fetch_missing");
  }
  onMissedChangesetFetched(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46942) {
    try {
      if (this._handleRemoteChangesets(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46942).missingChangesets) throw Error("[FetchMissState]: missing changesets response still has revision gaps.");
      if (this._handleRemoteChangesets([...this._queuedRemoteChangesets].sort((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646.revision - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647.revision)).missingChangesets) return this._queuedRemoteChangesets = [], this._updateLocalCache(), this._handler["onMissingChangesets"]({
        from: this._getCurrentRevision(),
        to: 0
      }), this;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162 = this._awaitingChangeset,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163 = this._pendingMutations,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164;
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163.length !== 0) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164 = this._injector["createInstance"](Y, this.unitID, this.type, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163, this._handler, undefined);else {
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163.length === 0) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162.baseRev = this._getCurrentRevision(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164 = this._injector["createInstance"](J, this.unitID, this.type, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162, this._handler);else {
          if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163.length !== 0) {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 = this._injector["createInstance"](q, this.unitID, this.type, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163, this._handler);
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46._schedule(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46;
          } else var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164 = this._injector["createInstance"](K, this.unitID, this.type, this._handler);
        }
      }
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164._updateLocalCache(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164;
    } catch (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC514) {
      return this._logService["error"]("[FetchMissState]", "failed to apply missed changesets!", var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC514), this._injector["createInstance"](X, this.unitID, this.type, this._awaitingChangeset, this._pendingMutations, this._handler, false);
    }
  }
  _handleRemoteChangesets(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46944) {
    this._acknowledgeAwaitingIfReady();
    for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46944.length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1++) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46944[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649 = this._getCurrentRevision();
      if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648.revision <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649)) {
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648.revision > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649 + 1) return {
          missingChangesets: true
        };
        if (this._isEchoedAwaitingChangeset(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648)) {
          this._acknowledgeAwaiting();
          continue;
        }
        this._transformAndApplyRemoteChangeset(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648), this._acknowledgeAwaitingIfReady();
      }
    }
    return {
      missingChangesets: false
    };
  }
  _transformAndApplyRemoteChangeset(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46946) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46947 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46946,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46948 = this._awaitingChangeset;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46948) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165 = this._transformService["transformChangesets"]([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46946], [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46948], false);
      if (!isTransformChangesetsSuccess(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165)) throw var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165.error;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46947 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165.c1Prime[0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46948 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165.c2Prime[0];
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46949 = this._pendingMutations;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46949.length) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166 = this._transformService["transformMutationsWithChangeset"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46947, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46949);
      if (!isTransformMutationsWithChangesetSuccess(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166)) throw var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166.error;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46947 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166.c1Prime, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46949 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166.m2Prime;
    }
    this._executeRemoteChangeset(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46947), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46948 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46948.baseRev = this._getCurrentRevision()), this._awaitingChangeset = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46948, this._pendingMutations = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46949;
  }
  _acknowledgeAwaitingIfReady() {
    if (!this._awaitingChangeset || this._acknowledgedAwaitingRevision == null) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46954 = this._getCurrentRevision();
    if (this._acknowledgedAwaitingRevision <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46954) throw Error("[FetchingMissState]: received stale ack revision: " + this._acknowledgedAwaitingRevision + ".");
    this._acknowledgedAwaitingRevision === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46954 + 1 && this._acknowledgeAwaiting();
  }
  _acknowledgeAwaiting() {
    this._incrementRevisionNumber(), this._awaitingChangeset = null, this._acknowledgedAwaitingRevision = null;
  }
  _isEchoedAwaitingChangeset(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46956) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46957 = this._awaitingChangeset;
    return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46957 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46957.sid || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46957.reqId === null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46957.reqId === undefined ? false : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46956.unitID === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46957.unitID && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46956.sid === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46957.sid && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46956.reqId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46957.reqId;
  }
  resend() {
    throw Error("[FetchingMissState]: invalid calling to `resend`.");
  }
  appendMutation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46960) {
    return this._pendingMutations["push"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46960), this;
  }
  onRemoteChangeset(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46962) {
    return this._queuedRemoteChangesets["push"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46962), this;
  }
  onRemoteAck(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46964) {
    if (this._awaitingChangeset) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167 = this._getCurrentRevision();
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46964.revision <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167 + 1 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46964.revision ? (this._incrementRevisionNumber(), this._awaitingChangeset = null, this._acknowledgedAwaitingRevision = null) : this._acknowledgedAwaitingRevision = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46964.revision), this;
    }
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46964.revision <= this._getCurrentRevision()) return this;
    throw Error("[FetchingMissState]: not expected to receive ack when `this._awaitingChangeset` is null!");
  }
  onRemoteRej(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46966) {
    return this._onConflict(!!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46966 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46966.isPermissionRej));
  }
  onRemoteRetry() {
    return this;
  }
  toggleOffline() {
    return this._injector["createInstance"](Z, this.unitID, this.type, this._awaitingChangeset, this._pendingMutations, this._handler);
  }
  toggleOnline() {
    return this;
  }
  _onConflict(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46968) {
    return this._injector["createInstance"](X, this.unitID, this.type, this._awaitingChangeset, this._pendingMutations, this._handler, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46968);
  }
};
export { Q as FetchingMissState };
