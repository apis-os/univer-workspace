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
import { z } from "./internal-glue.js";
import { R } from "./collaboration-client-plugin-config-key.js";
function wt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461725) {
  return JSON.stringify(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461725).length;
}
function Mt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461767, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461768) {
  if (Pt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461767)) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461768;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461768.eventID === CollaborationEvent.SUBMIT_CHANGESET) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495 = zt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461767),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46496 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461768;
    return {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46496,
      data: {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46496.data,
        unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461767.target["unitId"],
        unitType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461767.target["unitType"] ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46496.data["unitType"],
        changeset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495.toRemote(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46496.data["changeset"], Bt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461767))
      }
    };
  }
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461768.eventID === CollaborationEvent.FETCH_MISSING) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461768;
    return {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497,
      data: {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497.data,
        unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461767.target["unitId"],
        unitType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461767.target["unitType"] ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497.data["unitType"]
      }
    };
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461768;
}
function Nt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461771, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461772) {
  if (Pt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461771)) return [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461772];
  switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461772.eventID) {
    case CollaborationEvent.NEW_CHANGESETS:
      return [Ft(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461771, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461772)];
    case CollaborationEvent.PSEUDO_FETCH_MISSING_RESULT:
      return [Lt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461771, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461772)];
    case CollaborationEvent.CHANGESET_SHOULD_RETRY:
      return [It(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461771, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461772)];
    default:
      return [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461772];
  }
}
function Pt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461775) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461775.target["endpoint"] == null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461775.target["unitId"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461775.localUnitId && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461775.changeset;
}
function Ft(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461777, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461778) {
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461778,
    data: parseChangesetToProtocol(Rt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461777, parseProtocolChangeset(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461778.data)))
  };
}
function It(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461781, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461782) {
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461782,
    data: Rt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461781, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461782.data)
  };
}
function Lt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461785, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461786) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461787 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461786.data;
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461786,
    data: {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461787,
      changesets: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461787.changesets["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498 => parseChangesetToProtocol(Rt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461785, parseProtocolChangeset(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498))))
    }
  };
}
function Rt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461791, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461792) {
  return zt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461791).toLocal(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461792, Bt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461791));
}
function zt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461795) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461795.changeset) throw Error("COLLABORATION_CHANGESET_TRANSLATION_REQUIRED");
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461795.changeset;
}
function Bt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461797) {
  return {
    localUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461797.localUnitId,
    unitType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461797.unitType,
    target: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461797.target
  };
}
const Ht = {
  [CmdRspCode.FAIL]: "session.join-failed",
  [CmdRspCode.JOIN_ROOM_FULL]: "session.room-full",
  [CmdRspCode.JOIN_ROOM_NOT_EXISTS]: "session.room-not-exists",
  [CmdRspCode.JOIN_ROOM_PERMISSION_DENIED]: "session.room-permission-denied",
  [CmdRspCode.GLOBAL_ROOMS_CNT_EXCEEDS]: "session.room-cnt-exceeds"
};
let Ut = class extends RxDisposable {
  get sessionStatus() {
    return this._sessionStatus$["getValue"]();
  }
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46501, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46503, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46504, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506) {
    super(), this._identity = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499, this._logService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46501, this._configService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502, this._memberService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46503, this._commentService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46504, this._collaborationUIEventService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505, this._telemetryService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506, z(this, "_sessionStatus$", new BehaviorSubject(0)), z(this, "sessionStatus$", this._sessionStatus$["asObservable"]()), z(this, "_event$", new Subject()), z(this, "event$", this._event$["asObservable"]()), z(this, "_socket", undefined), z(this, "_socketMessageSubscription", undefined), z(this, "_collaborationTimeoutTimer", undefined), z(this, "_shouldReportTelemetry", false), z(this, "_telemetryInfo", null), this._shouldReportTelemetry = !!this._telemetryService, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500.pipe(takeUntil(this.dispose$)).subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127 => {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127 !== undefined) {
        if (this._socket = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127) this._joinRoom(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127), this._socketMessageSubscription = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127.message$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612 => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612.routeKey === this._identity["target"].unitId && this._onCombEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612);
        });else {
          var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128;
          this._throwTelemetryCollaborationNewChangeset(), this._sessionStatus$["next"](2), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128 = this._socketMessageSubscription) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128.unsubscribe(), this._socketMessageSubscription = null;
        }
      }
    });
  }
  getMemberID() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515;
    return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515 = this._socket) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515.memberID) ?? null;
  }
  dispose() {
    super.dispose(), this.close(), this.dispose$["next"](), this.dispose$["complete"]();
  }
  close() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517;
    this._throwTelemetryCollaborationNewChangeset(), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517 = this._socket) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517.send({
      cmd: CombCmd.LEAVE,
      data: {
        roomID: this._identity["target"].unitId
      }
    }), this._event$["complete"](), this._sessionStatus$["complete"]();
  }
  _onCombEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519.cmd === CombCmd.JOIN ? this._onJoinRoomEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519.cmd === CombCmd.RECV && this._onRecvEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519);
  }
  _joinRoom(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521) {
    this._sessionStatus$["next"](1), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521.send({
      cmd: CombCmd.JOIN,
      routeKey: this._identity["target"].unitId,
      routeType: "",
      data: {
        rooms: [{
          roomID: this._identity["target"].unitId
        }]
      }
    });
  }
  _onJoinRoomEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46523) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46524;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46523.code in Ht) {
      this._collaborationUIEventService["emitEvent"]({
        id: "JOIN_ROOM_FAILED",
        data: Ht[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46523.code]
      }), this._sessionStatus$["next"](2);
      return;
    }
    this._sessionStatus$["next"](3);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46524 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46523.data["roomInfos"][this._identity["target"].unitId]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46524.members;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131 => this._memberService["updateMember"](this._identity["localUnitId"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131));
  }
  _onRecvEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46529) {
    try {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132 = Nt(this._identity, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46529.data);
      for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132) switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632.eventID) {
        case CollaborationEvent.USERS_ENTER:
          this._onUserJoin(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632), this._event$["next"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632);
          break;
        case CollaborationEvent.USERS_LEAVE:
          this._onUserLeave(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632), this._event$["next"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632);
          break;
        case CollaborationEvent.CHANGESET_ACK:
        case CollaborationEvent.CHANGESET_SHOULD_RETRY:
          this._stopTelemetryCollaborationNewChangeset(), this._clearCollaborationTimeoutTimer(), this._event$["next"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632);
          break;
        case CollaborationEvent.MSG_FOR_ERROR:
          this._logService["error"]("save fail reason is " + JSON.stringify(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632)), this._event$["next"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632);
          break;
        case CollaborationEvent.COMMENT_UPDATE:
          this._commentService["onCommentUpdate"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632.data), this._event$["next"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632);
          break;
        default:
          this._event$["next"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632);
      }
    } catch (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC52) {
      this._logService["error"](var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC52, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46529);
    }
  }
  _onUserJoin(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46531) {
    this._memberService["updateMember"](this._identity["localUnitId"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46531.data);
  }
  _onUserLeave(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46533) {
    this._memberService["removeMember"](this._identity["localUnitId"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46533.data["memberID"]);
  }
  async send(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46535, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46536) {
    if (this.sessionStatus !== 3 || !this._socket) throw Error("[CollaborationSession]:\x20should\x20not\x20send\x20message\x20when\x20the\x20session\x20is\x20offline!");
    try {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133 = Mt(this._identity, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46535);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133.eventID === CollaborationEvent.SUBMIT_CHANGESET && (this._scheduleCollaborationTimeoutTimer(), this._startTelemetryCollaborationNewChangeset(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133)), this._socket["send"]({
        cmd: CombCmd.INGEST,
        routeKey: this._identity["target"].unitId,
        routeType: "",
        data: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133
      });
    } catch (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC54) {
      this._logService["error"](var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC54);
    }
  }
  _scheduleCollaborationTimeoutTimer() {
    this._collaborationTimeoutTimer = setTimeout(() => {
      this._collaborationTimeoutTimer = null, this._collaborationUIEventService["emitEvent"]({
        id: "SUBMIT_CHANGESET_TIMEOUT"
      });
    }, this._configService["getConfig"]("HEARTBEAT_TIMEOUT") ?? 20000);
  }
  _clearCollaborationTimeoutTimer() {
    this._collaborationTimeoutTimer &&= (clearTimeout(this._collaborationTimeoutTimer), null);
  }
  _startTelemetryCollaborationNewChangeset(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46539) {
    if (!this._shouldReportTelemetry) return;
    let {
        data: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46540
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46539,
      {
        unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46541,
        changeset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46542
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46540,
      {
        mutations: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46543,
        type: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46544
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46542;
    this._telemetryInfo = {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46541,
      type: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46544,
      startTime: performance.now(),
      stopTime: 0,
      duration: 0,
      size: wt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46543)
    };
  }
  _stopTelemetryCollaborationNewChangeset() {
    if (this._shouldReportTelemetry) {
      if (!this._telemetryInfo) {
        this._logService["error"]("[CollaborationSession]", "telemetry\x20info\x20is\x20not\x20initialized");
        return;
      }
      this._telemetryInfo["stopTime"] = performance.now(), this._telemetryInfo["duration"] = this._telemetryInfo["stopTime"] - this._telemetryInfo["startTime"], this._telemetryService["capture"]("collaboration_new_changeset", this._telemetryInfo), this._telemetryInfo = null;
    }
  }
  _throwTelemetryCollaborationNewChangeset() {
    this._telemetryInfo = null;
  }
};
function Nn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461927, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461928, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461929) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461930 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461929.target["endpoint"];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461930 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461930.trim() === "") throw Error("COLLABORATION_ENDPOINT_INVALID");
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461929.target["unitId"]) throw Error("COLLABORATION_SESSION_TARGET_UNIT_ID_REQUIRED");
  return {
    localUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461927,
    unitType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461928,
    target: {
      endpoint: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461930,
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461929.target["unitId"],
      unitType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461929.target["unitType"] ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461928
    },
    changeset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461929.changeset
  };
}
let Pn = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461291, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461292, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461293, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461294, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461295, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461296, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461297) {
    super(), this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461291, this._logService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461292, this._configService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461293, this._socketService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461294, this._collaborationUIEventService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461295, this._adapter = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461296, this._networkConditionService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461297, z(this, "_sessions", new Map()), z(this, "_pendingSessions", new Map()), z(this, "_sessionChannels", new Map()), z(this, "_socketChannels", new Map()), z(this, "socket$", this._getSocketChannel(undefined).socket$["asObservable"]()), z(this, "_status$", new BehaviorSubject(0)), z(this, "status$", this._status$["asObservable"]()), this._listenToNetworkCondition();
  }
  _listenToNetworkCondition() {
    this._networkConditionService && this.disposeWithMe(this._networkConditionService["online$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46305 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46305 && this.reconnect(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46305 || this._socketChannels["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654 => this._onOffline(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654));
    }));
  }
  dispose() {
    super.dispose(), this._socketChannels["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46307 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46308, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309;
      (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46308 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46307.socketMessageSubscription) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46308.unsubscribe(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46307.socketMessageSubscription = null, this._clearRetryConnectingTimer(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46307), this._clearTimeoutTimer(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46307), this._clearHeartbeatTimer(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46307), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46307.socket$["getValue"]()) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309.close(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46307.socket$["complete"]();
    }), this._socketChannels["clear"](), this._sessions["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313.dispose()), this._sessions["clear"](), this._sessionChannels["clear"](), this._status$["complete"]();
  }
  async requireSession(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461305, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461306) {
    if (this._sessions["has"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461305)) return this._sessions["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461305);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461307 = this._pendingSessions["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461305);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461307) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461307;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461308 = this._createSession(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461305, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461306);
    this._pendingSessions["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461305, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461308);
    try {
      return await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461308;
    } finally {
      this._pendingSessions["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461305);
    }
  }
  async _createSession(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461313, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461314) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461315 = await this._resolveSessionIdentity(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461313, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461314),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461316 = this._getSocketChannel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461315.target["endpoint"]);
    this._tryEnsureSocket(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461316);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461317 = this._injector["createInstance"](Ut, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461315, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461316.socket$["asObservable"]());
    return this._sessions["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461313, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461317), this._sessionChannels["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461313, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461316.endpointKey), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461317;
  }
  closeSession(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461323) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461324 = this._sessions["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461323),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461325 = this._sessionChannels["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461323);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461324 && (this._sessions["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461323), this._sessionChannels["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461323), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461324.close()), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461325 && !this._hasSessionsForEndpoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461325)) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461326;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46314 = this._socketChannels["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461325);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46314 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461326 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46314.socket$["getValue"]()) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461326.close();
    }
  }
  reconnect() {
    (this._socketChannels["size"] ? [...this._socketChannels["values"]()] : [this._getSocketChannel(undefined)]).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315.retryCount = 0, this._clearRetryConnectingTimer(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315), this._tryReconnect(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315);
    });
  }
  _clearRetryConnectingTimer(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461331) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461331.retryConnectingTimer != null && (clearTimeout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461331.retryConnectingTimer), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461331.retryConnectingTimer = null);
  }
  async _createSocket(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461333) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461334 = this._configService["getConfig"](R),
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB6 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461333.endpoint ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461334 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461334.collabWebSocketUrl) ?? "ws://127.0.0.1:8000/universer-api/comb/connect",
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461335 = await this._socketService["createSocket"](var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB6);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461333.candidateSocket = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461335, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461335;
  }
  async _tryEnsureSocket(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461339) {
    try {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461339.socket$["getValue"]() ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461339.candidateSocket ?? (await this._createSocket(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461339));
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317) {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461340;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317.send;
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317.send = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618 => (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618.cmd !== CombCmd.LEAVE && this._rescheduleHeartbeat(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461339), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655.apply(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618])), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461340 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461339.socketMessageSubscription) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461340.unsubscribe(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461339.socketMessageSubscription = null, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461339.socketMessageSubscription = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317.message$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619 => this._onMessage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461339, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317.error$["pipe"](takeLocal(1)).subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620 => this._logService["error"]("[CollaborationSessionService]: socket error", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317.open$["pipe"](takeLocal(1)).subscribe(() => {
          this._onConnectionOpen(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461339, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317);
        }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317.close$["pipe"](takeLocal(1)).subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621 => {
          this._logService["debug"]("[CollaborationSessionService]", "socket\x20close", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621), this._onConnectionFailed(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461339);
        });
      }
    } catch (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC520) {
      this._logService["error"](var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC520), this._onConnectionFailed(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461339);
    }
  }
  _onConnectionOpen(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461343, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461344) {
    this._logService["debug"]("[CollaborationSessionService]", "socket open."), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461344.send({
      cmd: CombCmd.HELLO
    }), this._rescheduleHeartbeat(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461343);
  }
  _onOffline(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461347) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461347.socketReady = false, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461347.candidateSocket = null, this._status$["next"](2), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461347.socket$["next"](null), this._clearTimeoutTimer(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461347), this._clearHeartbeatTimer(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461347);
  }
  _onConnectionFailed(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461349) {
    this._onOffline(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461349), this._hasSessionsForEndpoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461349.endpointKey) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461349.retryCount < (this._configService["getConfig"]("RETRY_CONNECTING_MAX_COUNT") ?? 3) ? (this._collaborationUIEventService["emitEvent"]({
      id: "SOCKET_FAILED_RETRY"
    }), this._tryReconnect(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461349)) : this._collaborationUIEventService["emitEvent"]({
      id: "SOCKET_FAILED"
    }));
  }
  _tryReconnect(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461351) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461352 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461351.retryCount,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461353 = this._configService["getConfig"](R),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461352 === 0 ? 0 : ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461353 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461353.retryConnectingInterval) ?? 20000) * 2 ** var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461352;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461351.retryConnectingTimer = setTimeout(() => {
      clearTimeout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461351.retryConnectingTimer), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461351.retryConnectingTimer = null, this._tryEnsureSocket(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461351);
    }, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461351.retryCount += 1;
  }
  async _resolveSessionIdentity(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461357, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461358) {
    return Nn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461357, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461358, await this._adapter["resolveUnit"]({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461357,
      unitType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461358
    }));
  }
  _onMessage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461361, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461362, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461363) {
    let {
      cmd: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461364
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461363;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461364 === CombCmd.HELLO && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461361.socketReady && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461362.memberID = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461363.data["memberID"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461361.socket$["next"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461362), this._status$["next"](3), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461361.socketReady = true, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461361.candidateSocket = null), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461364 === CombCmd.HEARTBEAT && this._clearTimeoutTimer(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461361), this._rescheduleHeartbeat(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461361);
  }
  _hasSessionsForEndpoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461369) {
    return [...this._sessionChannels["values"]()].some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46318 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46318 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461369);
  }
  _getSocketChannel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461371) {
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB8 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461371 ?? "",
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461372 = this._socketChannels["get"](var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB8);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461372) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461372;
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB15 = {
      endpointKey: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB8,
      endpoint: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461371,
      socket$: new BehaviorSubject(undefined),
      candidateSocket: null,
      socketReady: false,
      socketMessageSubscription: null,
      retryConnectingTimer: null,
      retryCount: 0,
      sendHeartbeatTimer: null,
      timeoutTimer: null
    };
    return this._socketChannels["set"](var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB8, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB15), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB15;
  }
  _rescheduleHeartbeat(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461375) {
    this._clearHeartbeatTimer(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461375), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461375.sendHeartbeatTimer = setTimeout(() => this._sendHeartbeat(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461375), this._configService["getConfig"]("HEARTBEAT_INTERVAL") ?? 30000);
  }
  _sendHeartbeat(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461377) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461377.socket$["getValue"]().send({
      cmd: CombCmd.HEARTBEAT
    }), this._waitForHeartbeatResponse(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461377);
  }
  _waitForHeartbeatResponse(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461379) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461379.timeoutTimer = setTimeout(() => this._onConnectionFailed(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461379), this._configService["getConfig"]("HEARTBEAT_TIMEOUT") ?? 20000);
  }
  _clearHeartbeatTimer(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461381) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461381.sendHeartbeatTimer != null && (clearTimeout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461381.sendHeartbeatTimer), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461381.sendHeartbeatTimer = null);
  }
  _clearTimeoutTimer(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461383) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461383.timeoutTimer != null && (clearTimeout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461383.timeoutTimer), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461383.timeoutTimer = null);
  }
};
export { Ut as CollaborationSession, Pn as CollaborationSessionService };
