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
import { At } from "./collaboration-client-member-service.js";
import { Pn, Ut } from "./collaboration-client-collaboration-session.js";
import { B, kt } from "./collaboration-client-collaboration-uievent.js";
import { Kt } from "./collaboration-client-sheet-transform-selections.js";
import { K } from "./collaboration-client-synced-state.js";
import { U } from "./collaboration-client-ilocal-cache.js";
import { q } from "./collaboration-client-pending-state.js";
import { J } from "./collaboration-client-awaiting-state.js";
import { Y } from "./collaboration-client-awaiting-with-pending-state.js";
import { X } from "./collaboration-client-conflict-state.js";
import { Z } from "./collaboration-client-offline-state.js";
import { Q } from "./collaboration-client-fetching-miss-state.js";
import { bn, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461962 } from "./collaboration-client-collaboration-entity.js";
import { W } from "./collaboration-client-isingle-active-unit.js";
import { yn } from "./collaboration-client-doc-collaboration-entity.js";
import { xn } from "./collaboration-client-sheet-collaboration-entity.js";
import { Sn } from "./collaboration-client-slide-collaboration-entity.js";
import { Cn } from "./collaboration-client-board-collaboration-entity.js";
import { wn } from "./collaboration-client-pdf-collaboration-entity.js";
import { An } from "./collaboration-client-collaboration-socket.js";
import { On } from "./collaboration-client-icollaboration-socket.js";
import { jn } from "./collaboration-client-icollaboration-client-adapter.js";
import { Tn } from "./collaboration-client-inetwork-condition.js";
import { Fn } from "./collaboration-client-collaboration-controller.js";
import { Hn, Jn, Qn, Rn, rr } from "./collaboration-client-plugin.js";
import { Bn } from "./collaboration-client-collaboration-attachment-io.js";
import { Un } from "./collaboration-client-authz-io-http.js";
import { Yn } from "./collaboration-client-data-loader.js";
import { Xn } from "./collaboration-client-collaboration-image-io.js";
import { Zn } from "./collaboration-client-mention-io-http.js";
import { tr } from "./collaboration-client-snapshot-server-over-httpservice.js";
import { nr } from "./collaboration-client-collaborative-undo-redo.js";
function Tt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461727) {
  "@babel/helpers - typeof";

  return Tt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447) {
    return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447;
  } : function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449 && typeof Symbol == "function" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449.constructor === Symbol && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449 !== Symbol.prototype ? "symbol" : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449;
  }, Tt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461727);
}
function Et(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461729, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461730) {
  if (Tt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461729) != "object" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461729) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461729;
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461731 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461729[Symbol.toPrimitive];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461731 !== undefined) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461732 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461731.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461729, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461730 || "default");
    if (Tt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461732) != "object") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461732;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461730 === "string" ? String : Number)(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461729);
}
function Dt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461737) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461738 = Et(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461737, "string");
  return Tt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461738) == "symbol" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461738 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461738 + "";
}
function z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461741, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461742, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461743) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461742 = Dt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461742)) in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461741 ? Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461741, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461742, {
    value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461743,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461741[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461742] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461743, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461741;
}
function V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461749, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461750) {
  return function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46455, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46456) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461750(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46455, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46456, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461749);
  };
}
function H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461753, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461754, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461755, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461756) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461757 = arguments.length,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461758 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461757 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461754 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461756 === null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461756 = Object.getOwnPropertyDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461754, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461755) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461756,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461759;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461758 = Reflect.decorate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461753, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461754, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461755, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461756);else {
    for (var var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D10 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461753.length - 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D10 >= 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D10--) (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461759 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461753[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D10]) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461758 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461757 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461759(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461758) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461757 > 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461759(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461754, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461755, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461758) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461759(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461754, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461755)) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461758);
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461757 > 3 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461758 && Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461754, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461755, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461758), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461758;
}
At = H([V(0, IUniverInstanceService)], At);
Ut = H([V(2, ILogService), V(3, IConfigService), V(4, Inject(At)), V(5, Inject(kt)), V(6, Inject(B)), V(7, Optional(ITelemetryService))], Ut);
Kt = H([V(0, Inject(Injector)), V(1, ITransformService), V(2, IUniverInstanceService)], Kt);
function dn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461883, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461884) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461885 = new ReplaySubject(1);
  return setTimeout(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461885.next(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461884), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461883), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461885.asObservable().pipe(take(1));
}
var fn, pn, mn;
var G = class {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46596, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46597, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46598, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46599, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46600, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46601, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46603, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46604) {
    this.unitID = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46596, this.type = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46597, this._handler = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46600, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46601, this._undoRedoService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602, this._revisionService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46603, this._localCacheService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46604, z(this, "_awaitingChangeset", null), z(this, "_pendingMutations", []), this._awaitingChangeset = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46598, this._pendingMutations = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46599;
  }
  _checkMissing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46614) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46615 = this._revisionService["getCurrentRevOfUnit"](this.unitID);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46614.revision > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46615 + 1 ? (this._handler["onMissingChangesets"]({
      from: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46615,
      to: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46614.revision - 1
    }), true) : false;
  }
  _transformUndoredo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46618) {
    this._undoRedoService["transformUndoRedo"](this.unitID, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46618);
  }
  _transformSelections(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46620) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46621, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46622;
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46621 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46622 = this._handler).onTransformSelections) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46621.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46622, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46620);
  }
  _prepareTransformSelections(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46626) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46627, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46628;
    return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46627 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46628 = this._handler).onPrepareTransformSelections) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46627.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46628, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46626)) ?? null;
  }
  _transformIMECache(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46632) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46633, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46634;
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46633 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46634 = this._handler).onTransformIME) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46633.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46634, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46632);
  }
  _transformStateCache(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46638) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46639, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640;
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46639 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640 = this._handler).onTransformState) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46639.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46638);
  }
  _transformRemoteChangesetByIMECache(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46644) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46645, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46646;
    return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46645 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46646 = this._handler).onTransformRemoteChangesetByIMECache) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46645.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46646, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46644)) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46644;
  }
  _transformRemoteChangesetByStateCache(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46650) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46651, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46652;
    return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46651 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46652 = this._handler).onTransformRemoteChangesetByStateCache) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46651.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46652, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46650)) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46650;
  }
  _syncEditingCollabCursor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46656) {
    if (this.type === UniverInstanceType.UNIVER_DOC) {
      let {
          unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135,
          mutations: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136,
          memberID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46656,
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136.length > 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136[0].params["textRanges"] : [];
      if (Array.isArray(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1) && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1.length > 0) {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46657, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46658;
        (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46657 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46658 = this._handler).onSyncEditingCollabCursor) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46657.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46658, {
          unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135,
          memberID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137,
          textRanges: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1
        });
      }
    }
  }
  _updateLocalCache() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46662;
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46662 = this._localCacheService) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46662.updateOfflineData(this.unitID, this.type, this._awaitingChangeset, this._pendingMutations);
  }
  _getCurrentRevision() {
    return this._revisionService["getCurrentRevOfUnit"](this.unitID);
  }
  _incrementRevisionNumber() {
    this._revisionService["incrementRevOfUnit"](this.unitID);
  }
  _executeRemoteChangeset(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46664) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665 = this._transformRemoteChangesetByIMECache(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46664);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665 = this._transformRemoteChangesetByStateCache(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46666 = this._prepareTransformSelections(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46667 = sequenceExecute(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665.mutations, this._commandService, {
        fromCollab: true
      });
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46667.result) throw var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46666 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46666.rollback(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46667.error instanceof Error ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46667.error : Error(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46667.error ?? "[CollaborationState]: apply error!");
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46666 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46666.commit(), this._transformIMECache(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665), this._transformStateCache(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665), this._transformUndoredo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46664), this._transformSelections(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665), this._syncEditingCollabCursor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665), this._incrementRevisionNumber();
  }
};
K = H([V(3, Inject(RevisionService)), V(4, Inject(Injector)), V(5, IUndoRedoService), V(6, ICommandService), V(7, ILogService), V(8, ITransformService), V(9, Optional(U))], K);
q = fn = H([V(4, Inject(Injector)), V(5, Inject(RevisionService)), V(6, Inject(UserManagerService)), V(7, ILogService), V(8, ICommandService), V(9, IConfigService), V(10, ITransformService), V(11, IUniverInstanceService), V(12, IUndoRedoService), V(13, Optional(U))], q);
J = pn = H([V(4, Inject(Injector)), V(5, Inject(RevisionService)), V(6, ICommandService), V(7, ILogService), V(8, ITransformService), V(9, IUndoRedoService), V(10, Optional(U))], J);
Y = mn = H([V(6, Inject(Injector)), V(7, Inject(RevisionService)), V(8, ICommandService), V(9, ILogService), V(10, ITransformService), V(11, IUndoRedoService), V(12, Optional(U))], Y);
X = H([V(6, Inject(IPermissionService)), V(7, ICommandService), V(8, IUndoRedoService), V(9, Inject(RevisionService)), V(10, Inject(LocaleService)), V(11, Inject(B)), V(12, Optional(U))], X);
Z = H([V(5, Inject(Injector)), V(6, Inject(RevisionService)), V(7, ICommandService), V(8, IUndoRedoService), V(9, Optional(U))], Z);
Q = H([V(7, Inject(Injector)), V(8, Inject(RevisionService)), V(9, ILogService), V(10, ICommandService), V(11, IUndoRedoService), V(12, ITransformService), V(13, Optional(U))], Q);
function vn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461891, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461892, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461893, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461894, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461895, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461896) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461894 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461895.length ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461891.createInstance(Y, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461892, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461893, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461894, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461895, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461896, undefined) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461894 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461891.createInstance(J, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461892, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461893, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461894, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461896) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461895.length ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461891.createInstance(q, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461892, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461893, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461895, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461896) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461891.createInstance(K, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461892, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461893, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461896);
}
var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461962 = H([V(3, Inject(Injector)), V(4, Inject(CompressMutationService)), V(5, Inject(LocaleService)), V(6, Inject(RevisionService)), V(7, Inject(B)), V(8, IUniverInstanceService), V(9, ILogService), V(10, ICommandService), V(11, IPermissionService), V(12, Optional(W)), V(13, Optional(U))], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461962);
yn = H([V(3, Inject(Injector)), V(4, Inject(CompressMutationService)), V(5, Inject(LocaleService)), V(6, Inject(RevisionService)), V(7, Inject(B)), V(8, IUniverInstanceService), V(9, ILogService), V(10, ICommandService), V(11, IPermissionService), V(12, Inject(DocStateChangeManagerService)), V(13, Optional(W)), V(14, Optional(U))], yn);
bn = H([V(3, Inject(Injector)), V(4, Inject(CompressMutationService)), V(5, Inject(LocaleService)), V(6, Inject(RevisionService)), V(7, Inject(B)), V(8, IUniverInstanceService), V(9, ILogService), V(10, ICommandService), V(11, IPermissionService), V(12, Optional(W)), V(13, Optional(U))], bn);
xn = H([V(3, Inject(Injector)), V(4, Inject(CompressMutationService)), V(5, Inject(LocaleService)), V(6, Inject(RevisionService)), V(7, Inject(Kt)), V(8, Inject(B)), V(9, IUniverInstanceService), V(10, ILogService), V(11, ICommandService), V(12, IPermissionService), V(13, Optional(W)), V(14, Optional(U))], xn);
Sn = H([V(3, Inject(Injector)), V(4, Inject(CompressMutationService)), V(5, Inject(LocaleService)), V(6, Inject(RevisionService)), V(7, Inject(B)), V(8, IUniverInstanceService), V(9, ILogService), V(10, ICommandService), V(11, IPermissionService), V(12, Optional(W)), V(13, Optional(U))], Sn);
Cn = H([V(3, Inject(Injector)), V(4, Inject(CompressMutationService)), V(5, Inject(LocaleService)), V(6, Inject(RevisionService)), V(7, Inject(B)), V(8, IUniverInstanceService), V(9, ILogService), V(10, ICommandService), V(11, IPermissionService), V(12, Optional(W)), V(13, Optional(U))], Cn);
wn = H([V(3, Inject(Injector)), V(4, Inject(CompressMutationService)), V(5, Inject(LocaleService)), V(6, Inject(RevisionService)), V(7, Inject(B)), V(8, IUniverInstanceService), V(9, ILogService), V(10, ICommandService), V(11, IPermissionService), V(12, Optional(W)), V(13, Optional(U))], wn);
An = H([V(0, Inject(Injector)), V(1, Inject(HTTPService)), V(2, IConfigService), V(3, ILogService), V(4, ISnapshotServerService)], An);
Pn = H([V(0, Inject(Injector)), V(1, ILogService), V(2, IConfigService), V(3, On), V(4, Inject(B)), V(5, jn), V(6, Optional(Tn))], Pn);
Fn = H([V(0, Inject(Injector)), V(1, Inject(Pn)), V(2, IConfigService), V(3, IUniverInstanceService)], Fn);
var In = "@univerjs-pro/collaboration-client",
  Ln = "1.0.0-insiders.20260907-70fc579";
Rn = H([V(0, IUniverInstanceService), V(1, IConfigService)], Rn);
Bn = H([V(0, Inject(HTTPService)), V(1, Inject(IConfigService)), V(2, Inject(IUniverInstanceService))], Bn);
Hn = H([V(0, IConfigService), V(1, Inject(HTTPService)), V(2, Inject(LocaleService))], Hn);
Un = H([V(0, Inject(HTTPService)), V(1, Inject(IConfigService))], Un);
Jn = H([V(0, Inject(HTTPService))], Jn);
Yn = H([V(0, ILogService), V(1, Inject(SnapshotService)), V(2, Optional(U))], Yn);
Xn = H([V(0, Inject(HTTPService)), V(1, IConfigService), V(2, Inject(IUniverInstanceService))], Xn);
Zn = H([V(0, Inject(IConfigService)), V(1, Inject(HTTPService))], Zn);
Qn = H([V(0, Inject(Injector)), V(1, IUniverInstanceService), V(2, IPermissionService), V(3, IAuthzIoService), V(4, Inject(Pn)), V(5, Inject(B))], Qn);
tr = H([V(0, IConfigService), V(1, Inject(HTTPService))], tr);
nr = H([V(0, IUniverInstanceService), V(1, ICommandService), V(2, IContextService), V(3, IConfigService), V(4, ITransformService), V(5, ILogService)], nr);
z(rr, "pluginName", "UNIVER_COLLABORATION_CLIENT_PLUGIN"), z(rr, "packageName", In), z(rr, "version", Ln), rr = H([DependentOn(UniverLicensePlugin, UniverNetworkPlugin, UniverCollaborationPlugin), V(1, ILogService), V(2, Inject(Injector)), V(3, IConfigService)], rr);
export { z, fn, G, pn, dn, mn, vn };
