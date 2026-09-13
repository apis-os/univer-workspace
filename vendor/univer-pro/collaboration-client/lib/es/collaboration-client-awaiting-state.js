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
import { G, dn, pn, z } from "./internal-glue.js";
import { Y } from "./collaboration-client-awaiting-with-pending-state.js";
import { Q } from "./collaboration-client-fetching-miss-state.js";
import { K } from "./collaboration-client-synced-state.js";
import { gn, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D14 } from "./internal-core-endo.js";
import { Z } from "./collaboration-client-offline-state.js";
import { X } from "./collaboration-client-conflict-state.js";
let J = pn = class extends G {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46746, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46747, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46748, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46749, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46750, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46751, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46752, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46753, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46754, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46755, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46756) {
    super(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46746, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46747, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46748, [], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46749, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46752, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46755, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46751, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46756), this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46750, this._logService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46753, this._transformService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46754, z(this, "status", "awaiting"), z(this, "_resendTimeout", 0), z(this, "_maxTotalRetryTimeout", 0), z(this, "_resendTimer", undefined), z(this, "_sender", undefined);
  }
  appendMutation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46768) {
    this._clearScheduledTask();
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46769 = this._injector["createInstance"](Y, this.unitID, this.type, this._awaitingChangeset, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46768], this._handler, this._resendTimer);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46769._updateLocalCache(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46769;
  }
  onRemoteChangeset(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46772) {
    if (this._checkMissing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46772)) return this._clearScheduledTask(), this._injector["createInstance"](Q, this.unitID, this.type, this._awaitingChangeset, [], null, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46772], this._handler);
    try {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148 = this._transformService["transformChangesets"]([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46772], [this._awaitingChangeset], false);
      if (isTransformChangesetsSuccess(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148)) {
        let {
          c1Prime: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640,
          c2Prime: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148;
        this._executeRemoteChangeset(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640[0]), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641[0].baseRev = this._getCurrentRevision(), this._clearScheduledTask();
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642 = this._injector["createInstance"](pn, this.unitID, this.type, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641[0], this._handler);
        return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642._updateLocalCache(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642;
      }
      throw var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148.error;
    } catch (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC510) {
      return this._logService["error"](var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC510), this._onConflict(false);
    }
  }
  onRemoteAck(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46774) {
    this._clearScheduledTask();
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46775 = this._revisionService["getCurrentRevOfUnit"](this.unitID);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46774.revision <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46775) return this;
    if (this._checkMissing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46774)) return this._injector["createInstance"](Q, this.unitID, this.type, this._awaitingChangeset, [], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46774.revision, [], this._handler);
    this._incrementRevisionNumber();
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46776 = this._injector["createInstance"](K, this.unitID, this.type, this._handler);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46776._updateLocalCache(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46776;
  }
  onRemoteRej(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46780) {
    return this._onConflict(!!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46780 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46780.isPermissionRej));
  }
  onRemoteRetry(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46782) {
    return this._maxTotalRetryTimeout > var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D14 ? this.toggleOffline() : (this._resendTimer = dn(this._resendTimeout, {
      timeout: this._resendTimeout,
      reqId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46782.reqId
    }), this._sender = this._resendTimer["subscribe"](({
      reqId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149,
      timeout: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150
    }) => {
      this._resendWithTimeout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150);
    }), this);
  }
  toggleOffline() {
    return this._clearScheduledTask(), this._injector["createInstance"](Z, this.unitID, this.type, this._awaitingChangeset, [], this._handler);
  }
  toggleOnline() {
    return this;
  }
  resend() {
    this._handler["onSendChangeset"](this._awaitingChangeset);
  }
  _onConflict(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46784) {
    return this._clearScheduledTask(), this._injector["createInstance"](X, this.unitID, this.type, this._awaitingChangeset, [], this._handler, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46784);
  }
  _resendWithTimeout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46786, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46787) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46788;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46786 === ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46788 = this._awaitingChangeset) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46788.reqId) && (this.resend(), this._resendTimeout = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46787 === 0 ? 1000 : Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46787 * 2, gn), this._maxTotalRetryTimeout += this._resendTimeout);
  }
  _clearScheduledTask() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46792;
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46792 = this._sender) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46792.unsubscribe(), this._resendTimeout = 0, this._maxTotalRetryTimeout = 0;
  }
};
export { J as AwaitingState };
