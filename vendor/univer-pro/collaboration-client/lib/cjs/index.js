Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
let e = require("@univerjs-pro/collaboration"),
  t = require("@univerjs/core"),
  n = require("@univerjs/docs"),
  r = require("@univerjs/sheets"),
  i = require("rxjs"),
  a = require("@univerjs/protocol"),
  o = require("@univerjs/telemetry"),
  s = require("rxjs/operators"),
  c = require("@univerjs-pro/slides"),
  l = require("@univerjs/network"),
  u = require("@univerjs-pro/license"),
  d = require("@noble/ciphers/aes.js"),
  f = require("@noble/ciphers/utils.js"),
  p = require("@univerjs/drawing");
const m = "collaboration-client.config",
  ee = {};
function te(var_core_value_sig5A51) {
  return JSON.stringify(var_core_value_sig5A51).length;
}
function h(var_core_value_sigF1D1) {
  "@babel/helpers - typeof";

  return h = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sigFF19) {
    return typeof var_core_value_sigFF19;
  } : function (var_core_value_sig43B8) {
    return var_core_value_sig43B8 && typeof Symbol == "function" && var_core_value_sig43B8.constructor === Symbol && var_core_value_sig43B8 !== Symbol.prototype ? "symbol" : typeof var_core_value_sig43B8;
  }, h(var_core_value_sigF1D1);
}
function ne(var_core_value_sig370E, var_core_value_sigDE14) {
  if (h(var_core_value_sig370E) != "object" || !var_core_value_sig370E) return var_core_value_sig370E;
  var var_core_value_sig02CB = var_core_value_sig370E[Symbol.toPrimitive];
  if (var_core_value_sig02CB !== undefined) {
    var var_core_value_sig6CBB = var_core_value_sig02CB.call(var_core_value_sig370E, var_core_value_sigDE14 || "default");
    if (h(var_core_value_sig6CBB) != "object") return var_core_value_sig6CBB;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sigDE14 === "string" ? String : Number)(var_core_value_sig370E);
}
function re(var_core_value_sig68DA) {
  var var_core_value_sig64D8 = ne(var_core_value_sig68DA, "string");
  return h(var_core_value_sig64D8) == "symbol" ? var_core_value_sig64D8 : var_core_value_sig64D8 + "";
}
function g(var_core_value_sigD755, var_core_value_sigF897, var_core_value_sigA578) {
  return (var_core_value_sigF897 = re(var_core_value_sigF897)) in var_core_value_sigD755 ? Object.defineProperty(var_core_value_sigD755, var_core_value_sigF897, {
    value: var_core_value_sigA578,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sigD755[var_core_value_sigF897] = var_core_value_sigA578, var_core_value_sigD755;
}
let ie = function (var_core_value_sig0260) {
  return var_core_value_sig0260.OTHER_CLIENT_EDITING = "OTHER_CLIENT_EDITING", var_core_value_sig0260.PERMISSION_DENIED = "PERMISSION_DENIED", var_core_value_sig0260.CONFLICT = "CONFLICT", var_core_value_sig0260.CLOSE_ROOM = "CLOSE_ROOM", var_core_value_sig0260.JOIN_ROOM_FAILED = "JOIN_ROOM_FAILED", var_core_value_sig0260.SOCKET_FAILED_RETRY = "SOCKET_FAILED_RETRY", var_core_value_sig0260.SOCKET_FAILED = "SOCKET_FAILED", var_core_value_sig0260.SUBMIT_CHANGESET_TIMEOUT = "SUBMIT_CHANGESET_TIMEOUT", var_core_value_sig0260;
}({});
var _ = class {
    constructor() {
      g(this, "_event$", new i["Subject"]()), g(this, "event$", this._event$["asObservable"]());
    }
    emitEvent(var_core_value_sigD98F) {
      this._event$["next"](var_core_value_sigD98F);
    }
  },
  ae = class {
    constructor() {
      g(this, "_commentUpdate$", new i["Subject"]()), g(this, "commentUpdate$", this._commentUpdate$["asObservable"]());
    }
    onCommentUpdate(var_core_value_sig66C0) {
      this._commentUpdate$["next"](var_core_value_sig66C0);
    }
  };
function v(var_core_value_sig034D, var_core_value_sig89EC) {
  return function (var_core_value_sig9D15, var_core_value_sigB785) {
    var_core_value_sig89EC(var_core_value_sig9D15, var_core_value_sigB785, var_core_value_sig034D);
  };
}
function y(var_core_value_sig9975, var_core_value_sigD6D9, var_core_value_sig2637, var_core_value_sigAF1D) {
  var var_core_value_sigC92D = arguments.length,
    var_core_value_sigEA3D = var_core_value_sigC92D < 3 ? var_core_value_sigD6D9 : var_core_value_sigAF1D === null ? var_core_value_sigAF1D = Object.getOwnPropertyDescriptor(var_core_value_sigD6D9, var_core_value_sig2637) : var_core_value_sigAF1D,
    var_core_value_sig2841;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sigEA3D = Reflect.decorate(var_core_value_sig9975, var_core_value_sigD6D9, var_core_value_sig2637, var_core_value_sigAF1D);else {
    for (var var_core_value_sig9FE1 = var_core_value_sig9975.length - 1; var_core_value_sig9FE1 >= 0; var_core_value_sig9FE1--) (var_core_value_sig2841 = var_core_value_sig9975[var_core_value_sig9FE1]) && (var_core_value_sigEA3D = (var_core_value_sigC92D < 3 ? var_core_value_sig2841(var_core_value_sigEA3D) : var_core_value_sigC92D > 3 ? var_core_value_sig2841(var_core_value_sigD6D9, var_core_value_sig2637, var_core_value_sigEA3D) : var_core_value_sig2841(var_core_value_sigD6D9, var_core_value_sig2637)) || var_core_value_sigEA3D);
  }
  return var_core_value_sigC92D > 3 && var_core_value_sigEA3D && Object.defineProperty(var_core_value_sigD6D9, var_core_value_sig2637, var_core_value_sigEA3D), var_core_value_sigEA3D;
}
let b = class extends t.Disposable {
  constructor(var_core_value_sig130F) {
    super(), this._univerInstanceService = var_core_value_sig130F, g(this, "_roomMembers", new Map()), g(this, "_roomCreated$", new i["Subject"]()), this.disposeWithMe((0, i.merge)(this._univerInstanceService["getTypeOfUnitDisposed$"](t.UniverInstanceType["UNIVER_SHEET"]).pipe((0, s.map)(var_core_value_sig97A2 => var_core_value_sig97A2.getUnitId())), this._univerInstanceService["getTypeOfUnitDisposed$"](t.UniverInstanceType["UNIVER_DOC"]).pipe((0, s.map)(var_core_value_sig07E9 => var_core_value_sig07E9.getUnitId())), this._univerInstanceService["getTypeOfUnitDisposed$"](t.UniverInstanceType["UNIVER_BOARD"]).pipe((0, s.map)(var_core_value_sig4F59 => var_core_value_sig4F59.getUnitId())), this._univerInstanceService["getTypeOfUnitDisposed$"](t.UniverInstanceType["UNIVER_BASE"]).pipe((0, s.map)(var_core_value_sigF564 => var_core_value_sigF564.getUnitId()))).subscribe(var_core_value_sig8CFA => this._removeRoom(var_core_value_sig8CFA)));
  }
  waitForRoom$(var_core_value_sigC0E3) {
    return this._roomMembers["has"](var_core_value_sigC0E3) ? (0, i.of)(this._roomMembers["get"](var_core_value_sigC0E3)) : this._roomCreated$["pipe"]((0, s.map)(var_core_value_sig2E11 => {
      if (var_core_value_sig2E11 === var_core_value_sigC0E3) return this._roomMembers["get"](var_core_value_sig2E11);
    }));
  }
  updateMember(var_core_value_sig52F7, var_core_value_sig866F) {
    let var_core_value_sigDE3D = this._roomMembers["get"](var_core_value_sig52F7);
    var_core_value_sigDE3D || (var_core_value_sigDE3D = new oe(), this._roomMembers["set"](var_core_value_sig52F7, var_core_value_sigDE3D), this._roomCreated$["next"](var_core_value_sig52F7)), var_core_value_sigDE3D.updateMember(var_core_value_sig866F);
  }
  removeMember(var_core_value_sigF175, var_core_value_sig6A18) {
    let var_core_value_sig4E3D = this._roomMembers["get"](var_core_value_sigF175);
    var_core_value_sig4E3D && var_core_value_sig4E3D.removeMember(var_core_value_sig6A18);
  }
  getRoom(var_core_value_sig49B0) {
    return this._roomMembers["get"](var_core_value_sig49B0);
  }
  getMember(var_core_value_sig2547, var_core_value_sigBCA9) {
    let var_core_value_sig4CDF = this._roomMembers["get"](var_core_value_sig2547);
    if (var_core_value_sig4CDF) return var_core_value_sig4CDF.getMember(var_core_value_sigBCA9);
  }
  _removeRoom(var_core_value_sig3F79) {
    let var_core_value_sig880E = this._roomMembers["get"](var_core_value_sig3F79);
    var_core_value_sig880E && (var_core_value_sig880E.dispose(), this._roomMembers["delete"](var_core_value_sig3F79));
  }
  dispose() {
    this._roomMembers["forEach"](var_core_value_sig5B69 => var_core_value_sig5B69.dispose()), this._roomMembers["clear"](), this._roomCreated$["complete"]();
  }
};
b = y([v(0, t.IUniverInstanceService)], b);
var oe = class extends t.Disposable {
  constructor(...var_core_value_sigC9ED) {
    super(...var_core_value_sigC9ED), g(this, "_members", new Map()), g(this, "_members$", new i["BehaviorSubject"](this._members)), g(this, "members$", this._members$["asObservable"]());
  }
  dispose() {
    this._members["clear"](), this._members$["complete"]();
  }
  updateMember(var_core_value_sigB57B) {
    this._members["set"](var_core_value_sigB57B.memberID, var_core_value_sigB57B), this._emitMembers();
  }
  removeMember(var_core_value_sig780B) {
    this._members["delete"](var_core_value_sig780B), this._emitMembers();
  }
  getMember(var_core_value_sig7D1B) {
    return this._members["get"](var_core_value_sig7D1B);
  }
  getAllMembers() {
    return Array.from(this._members["values"]());
  }
  _emitMembers() {
    this._members$["next"](this._members);
  }
};
function se(var_core_value_sig9DAA, var_core_value_sig1F8A) {
  if (le(var_core_value_sig9DAA)) return var_core_value_sig1F8A;
  if (var_core_value_sig1F8A.eventID === e.CollaborationEvent["SUBMIT_CHANGESET"]) {
    let var_core_value_sig7BE0 = me(var_core_value_sig9DAA),
      var_core_value_sig7D40 = var_core_value_sig1F8A;
    return {
      ...var_core_value_sig7D40,
      data: {
        ...var_core_value_sig7D40.data,
        unitID: var_core_value_sig9DAA.target["unitId"],
        unitType: var_core_value_sig9DAA.target["unitType"] ?? var_core_value_sig7D40.data["unitType"],
        changeset: var_core_value_sig7BE0.toRemote(var_core_value_sig7D40.data["changeset"], he(var_core_value_sig9DAA))
      }
    };
  }
  if (var_core_value_sig1F8A.eventID === e.CollaborationEvent["FETCH_MISSING"]) {
    let var_core_value_sig6C7E = var_core_value_sig1F8A;
    return {
      ...var_core_value_sig6C7E,
      data: {
        ...var_core_value_sig6C7E.data,
        unitID: var_core_value_sig9DAA.target["unitId"],
        unitType: var_core_value_sig9DAA.target["unitType"] ?? var_core_value_sig6C7E.data["unitType"]
      }
    };
  }
  return var_core_value_sig1F8A;
}
function ce(var_core_value_sigEBB4, var_core_value_sig2B74) {
  if (le(var_core_value_sigEBB4)) return [var_core_value_sig2B74];
  switch (var_core_value_sig2B74.eventID) {
    case e.CollaborationEvent["NEW_CHANGESETS"]:
      return [ue(var_core_value_sigEBB4, var_core_value_sig2B74)];
    case e.CollaborationEvent["PSEUDO_FETCH_MISSING_RESULT"]:
      return [fe(var_core_value_sigEBB4, var_core_value_sig2B74)];
    case e.CollaborationEvent["CHANGESET_SHOULD_RETRY"]:
      return [de(var_core_value_sigEBB4, var_core_value_sig2B74)];
    default:
      return [var_core_value_sig2B74];
  }
}
function le(var_core_value_sig0483) {
  return var_core_value_sig0483.target["endpoint"] == null && var_core_value_sig0483.target["unitId"] === var_core_value_sig0483.localUnitId && !var_core_value_sig0483.changeset;
}
function ue(var_core_value_sig4A48, var_core_value_sigD170) {
  return {
    ...var_core_value_sigD170,
    data: (0, e.parseChangesetToProtocol)(pe(var_core_value_sig4A48, (0, e.parseProtocolChangeset)(var_core_value_sigD170.data)))
  };
}
function de(var_core_value_sig90E5, var_core_value_sig7000) {
  return {
    ...var_core_value_sig7000,
    data: pe(var_core_value_sig90E5, var_core_value_sig7000.data)
  };
}
function fe(var_core_value_sigD7C5, var_core_value_sig3633) {
  let var_core_value_sig1DF5 = var_core_value_sig3633.data;
  return {
    ...var_core_value_sig3633,
    data: {
      ...var_core_value_sig1DF5,
      changesets: var_core_value_sig1DF5.changesets["map"](var_core_value_sig68BE => (0, e.parseChangesetToProtocol)(pe(var_core_value_sigD7C5, (0, e.parseProtocolChangeset)(var_core_value_sig68BE))))
    }
  };
}
function pe(var_core_value_sig90A3, var_core_value_sig28BE) {
  return me(var_core_value_sig90A3).toLocal(var_core_value_sig28BE, he(var_core_value_sig90A3));
}
function me(var_core_value_sig0224) {
  if (!var_core_value_sig0224.changeset) throw Error("COLLABORATION_CHANGESET_TRANSLATION_REQUIRED");
  return var_core_value_sig0224.changeset;
}
function he(var_core_value_sig854B) {
  return {
    localUnitId: var_core_value_sig854B.localUnitId,
    unitType: var_core_value_sig854B.unitType,
    target: var_core_value_sig854B.target
  };
}
let ge = function (var_core_value_sig1FF6) {
  return var_core_value_sig1FF6[var_core_value_sig1FF6.IDLE = 0] = "IDLE", var_core_value_sig1FF6[var_core_value_sig1FF6.JOINING = 1] = "JOINING", var_core_value_sig1FF6[var_core_value_sig1FF6.OFFLINE = 2] = "OFFLINE", var_core_value_sig1FF6[var_core_value_sig1FF6.ONLINE = 3] = "ONLINE", var_core_value_sig1FF6;
}({});
const _e = {
  [a.CmdRspCode["FAIL"]]: "session.join-failed",
  [a.CmdRspCode["JOIN_ROOM_FULL"]]: "session.room-full",
  [a.CmdRspCode["JOIN_ROOM_NOT_EXISTS"]]: "session.room-not-exists",
  [a.CmdRspCode["JOIN_ROOM_PERMISSION_DENIED"]]: "session.room-permission-denied",
  [a.CmdRspCode["GLOBAL_ROOMS_CNT_EXCEEDS"]]: "session.room-cnt-exceeds"
};
let ve = class extends t.RxDisposable {
  get sessionStatus() {
    return this._sessionStatus$["getValue"]();
  }
  constructor(var_core_value_sig04C6, var_core_value_sigCA05, var_core_value_sig2F2B, var_core_value_sig70AF, var_core_value_sigD04E, var_core_value_sigB99B, var_core_value_sig5A75, var_core_value_sig7BAF) {
    super(), this._identity = var_core_value_sig04C6, this._logService = var_core_value_sig2F2B, this._configService = var_core_value_sig70AF, this._memberService = var_core_value_sigD04E, this._commentService = var_core_value_sigB99B, this._collaborationUIEventService = var_core_value_sig5A75, this._telemetryService = var_core_value_sig7BAF, g(this, "_sessionStatus$", new i["BehaviorSubject"](0)), g(this, "sessionStatus$", this._sessionStatus$["asObservable"]()), g(this, "_event$", new i["Subject"]()), g(this, "event$", this._event$["asObservable"]()), g(this, "_socket", undefined), g(this, "_socketMessageSubscription", undefined), g(this, "_collaborationTimeoutTimer", undefined), g(this, "_shouldReportTelemetry", false), g(this, "_telemetryInfo", null), this._shouldReportTelemetry = !!this._telemetryService, var_core_value_sigCA05.pipe((0, i.takeUntil)(this.dispose$)).subscribe(var_core_value_sigB098 => {
      if (var_core_value_sigB098 !== undefined) {
        if (this._socket = var_core_value_sigB098, var_core_value_sigB098) this._joinRoom(var_core_value_sigB098), this._socketMessageSubscription = var_core_value_sigB098.message$["subscribe"](var_core_value_sig76BA => {
          var_core_value_sig76BA.routeKey === this._identity["target"].unitId && this._onCombEvent(var_core_value_sig76BA);
        });else {
          var var_core_value_sigCE71;
          this._throwTelemetryCollaborationNewChangeset(), this._sessionStatus$["next"](2), (var_core_value_sigCE71 = this._socketMessageSubscription) == null || var_core_value_sigCE71.unsubscribe(), this._socketMessageSubscription = null;
        }
      }
    });
  }
  getMemberID() {
    var var_core_value_sig8F69;
    return ((var_core_value_sig8F69 = this._socket) == null ? undefined : var_core_value_sig8F69.memberID) ?? null;
  }
  dispose() {
    super.dispose(), this.close(), this.dispose$["next"](), this.dispose$["complete"]();
  }
  close() {
    var var_core_value_sig6884;
    this._throwTelemetryCollaborationNewChangeset(), (var_core_value_sig6884 = this._socket) == null || var_core_value_sig6884.send({
      cmd: a.CombCmd["LEAVE"],
      data: {
        roomID: this._identity["target"].unitId
      }
    }), this._event$["complete"](), this._sessionStatus$["complete"]();
  }
  _onCombEvent(var_core_value_sig066E) {
    var_core_value_sig066E.cmd === a.CombCmd["JOIN"] ? this._onJoinRoomEvent(var_core_value_sig066E) : var_core_value_sig066E.cmd === a.CombCmd["RECV"] && this._onRecvEvent(var_core_value_sig066E);
  }
  _joinRoom(var_core_value_sig9B0D) {
    this._sessionStatus$["next"](1), var_core_value_sig9B0D.send({
      cmd: a.CombCmd["JOIN"],
      routeKey: this._identity["target"].unitId,
      routeType: "",
      data: {
        rooms: [{
          roomID: this._identity["target"].unitId
        }]
      }
    });
  }
  _onJoinRoomEvent(var_core_value_sig3D2C) {
    var var_core_value_sigC56D;
    if (var_core_value_sig3D2C.code in _e) {
      this._collaborationUIEventService["emitEvent"]({
        id: "JOIN_ROOM_FAILED",
        data: _e[var_core_value_sig3D2C.code]
      }), this._sessionStatus$["next"](2);
      return;
    }
    this._sessionStatus$["next"](3);
    let var_core_value_sig3A17 = (var_core_value_sigC56D = var_core_value_sig3D2C.data["roomInfos"][this._identity["target"].unitId]) == null ? undefined : var_core_value_sigC56D.members;
    var_core_value_sig3A17 && var_core_value_sig3A17.forEach(var_core_value_sig21D8 => this._memberService["updateMember"](this._identity["localUnitId"], var_core_value_sig21D8));
  }
  _onRecvEvent(var_core_value_sig938F) {
    try {
      let var_core_value_sig2B65 = ce(this._identity, var_core_value_sig938F.data);
      for (let var_core_value_sig429F of var_core_value_sig2B65) switch (var_core_value_sig429F.eventID) {
        case e.CollaborationEvent["USERS_ENTER"]:
          this._onUserJoin(var_core_value_sig429F), this._event$["next"](var_core_value_sig429F);
          break;
        case e.CollaborationEvent["USERS_LEAVE"]:
          this._onUserLeave(var_core_value_sig429F), this._event$["next"](var_core_value_sig429F);
          break;
        case e.CollaborationEvent["CHANGESET_ACK"]:
        case e.CollaborationEvent["CHANGESET_SHOULD_RETRY"]:
          this._stopTelemetryCollaborationNewChangeset(), this._clearCollaborationTimeoutTimer(), this._event$["next"](var_core_value_sig429F);
          break;
        case e.CollaborationEvent["MSG_FOR_ERROR"]:
          this._logService["error"]("save fail reason is " + JSON.stringify(var_core_value_sig429F)), this._event$["next"](var_core_value_sig429F);
          break;
        case e.CollaborationEvent["COMMENT_UPDATE"]:
          this._commentService["onCommentUpdate"](var_core_value_sig429F.data), this._event$["next"](var_core_value_sig429F);
          break;
        default:
          this._event$["next"](var_core_value_sig429F);
      }
    } catch (var_core_value_sigD7EA) {
      this._logService["error"](var_core_value_sigD7EA, var_core_value_sig938F);
    }
  }
  _onUserJoin(var_core_value_sigD948) {
    this._memberService["updateMember"](this._identity["localUnitId"], var_core_value_sigD948.data);
  }
  _onUserLeave(var_core_value_sigBE5E) {
    this._memberService["removeMember"](this._identity["localUnitId"], var_core_value_sigBE5E.data["memberID"]);
  }
  async send(var_core_value_sig0281, var_core_value_sigED71) {
    if (this.sessionStatus !== 3 || !this._socket) throw Error("[CollaborationSession]: should not send message when the session is offline!");
    try {
      let var_core_value_sigB33B = se(this._identity, var_core_value_sig0281);
      var_core_value_sigB33B.eventID === e.CollaborationEvent["SUBMIT_CHANGESET"] && (this._scheduleCollaborationTimeoutTimer(), this._startTelemetryCollaborationNewChangeset(var_core_value_sigB33B)), this._socket["send"]({
        cmd: a.CombCmd["INGEST"],
        routeKey: this._identity["target"].unitId,
        routeType: "",
        data: var_core_value_sigB33B
      });
    } catch (var_core_value_sig24B9) {
      this._logService["error"](var_core_value_sig24B9);
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
  _startTelemetryCollaborationNewChangeset(var_core_value_sig281C) {
    if (!this._shouldReportTelemetry) return;
    let {
        data: var_core_value_sig3C92
      } = var_core_value_sig281C,
      {
        unitID: var_core_value_sigB16B,
        changeset: var_core_value_sig585D
      } = var_core_value_sig3C92,
      {
        mutations: var_core_value_sigE722,
        type: var_core_value_sig062A
      } = var_core_value_sig585D;
    this._telemetryInfo = {
      unitId: var_core_value_sigB16B,
      type: var_core_value_sig062A,
      startTime: performance.now(),
      stopTime: 0,
      duration: 0,
      size: te(var_core_value_sigE722)
    };
  }
  _stopTelemetryCollaborationNewChangeset() {
    if (this._shouldReportTelemetry) {
      if (!this._telemetryInfo) {
        this._logService["error"]("[CollaborationSession]", "telemetry info is not initialized");
        return;
      }
      this._telemetryInfo["stopTime"] = performance.now(), this._telemetryInfo["duration"] = this._telemetryInfo["stopTime"] - this._telemetryInfo["startTime"], this._telemetryService["capture"]("collaboration_new_changeset", this._telemetryInfo), this._telemetryInfo = null;
    }
  }
  _throwTelemetryCollaborationNewChangeset() {
    this._telemetryInfo = null;
  }
};
ve = y([v(2, t.ILogService), v(3, t.IConfigService), v(4, (0, t.Inject)(b)), v(5, (0, t.Inject)(ae)), v(6, (0, t.Inject)(_)), v(7, (0, t.Optional)(o.ITelemetryService))], ve);
const x = (0, t.createIdentifier)("collaboration-client.local-cache-service");
function ye(var_core_value_sig4B27) {
  return "unit-cache-" + var_core_value_sig4B27;
}
function be(var_core_value_sig3A41) {
  let {
    unitID: var_core_value_sig269A,
    mutations: var_core_value_sigBF53
  } = var_core_value_sig3A41;
  return {
    unitId: var_core_value_sig269A,
    subUnitId: var_core_value_sigBF53.length > 0 ? var_core_value_sigBF53[0].params["subUnitId"] : null
  };
}
let S = class {
  constructor(var_core_value_sig050A, var_core_value_sig8B32, var_core_value_sig870F) {
    this._injector = var_core_value_sig050A, this._transformService = var_core_value_sig8B32, this._instanceService = var_core_value_sig870F;
  }
  transformSelections(var_core_value_sigB683) {
    var var_core_value_sig26EC, var_core_value_sigEEDB;
    let var_core_value_sig36E7 = this._injector["get"](r.SheetsSelectionsService),
      {
        unitId: var_core_value_sig6A78,
        subUnitId: var_core_value_sigF7EF
      } = be(var_core_value_sigB683),
      var_core_value_sig27F9 = var_core_value_sig36E7 == null ? undefined : var_core_value_sig36E7.getWorkbookSelections(var_core_value_sig6A78).getCurrentSelections(),
      var_core_value_sig393E = (var_core_value_sig26EC = this._instanceService["getUnit"](var_core_value_sig6A78)) == null || (var_core_value_sig26EC = var_core_value_sig26EC.getActiveSheet()) == null ? undefined : var_core_value_sig26EC.getSheetId();
    if (var_core_value_sig27F9.length === 0 || !var_core_value_sig6A78 || !var_core_value_sigF7EF) return;
    let var_core_value_sigB609 = [{
        id: r.SetSelectionsOperation["id"],
        params: {
          unitId: var_core_value_sig6A78,
          subUnitId: var_core_value_sig393E,
          selections: t.Tools["deepClone"](var_core_value_sig27F9)
        }
      }],
      var_core_value_sig390D = this._transformService["transformMutationsWithChangeset"](var_core_value_sigB683, var_core_value_sigB609);
    if (!(0, e.isTransformMutationsWithChangesetSuccess)(var_core_value_sig390D)) throw var_core_value_sig390D.error;
    let var_core_value_sigC928 = (var_core_value_sigEEDB = var_core_value_sig390D.m2Prime[0]) == null || (var_core_value_sigEEDB = var_core_value_sigEEDB.params) == null ? undefined : var_core_value_sigEEDB.selections;
    if (Array.isArray(var_core_value_sigC928) && var_core_value_sigC928.length) {
      if (var_core_value_sigC928.length === var_core_value_sigB609[0].params["selections"].length && var_core_value_sigC928.every((var_core_value_sigF62A, var_core_value_sig8178) => t.Rectangle["equals"](var_core_value_sigF62A.range, var_core_value_sigB609[0].params["selections"][var_core_value_sig8178].range))) return;
      this._injector["get"](t.ICommandService).executeCommand(r.SetSelectionsOperation["id"], {
        unitId: var_core_value_sig6A78,
        subUnitId: var_core_value_sig393E,
        selections: var_core_value_sigC928
      });
    }
  }
};
S = y([v(0, (0, t.Inject)(t.Injector)), v(1, e.ITransformService), v(2, t.IUniverInstanceService)], S);
const C = (0, t.createIdentifier)("univer-pro.collaboration-client.single-active-unit-service");
let xe = function (var_core_value_sigD9BB) {
  return var_core_value_sigD9BB[var_core_value_sigD9BB.NO_OTHER_CLIENTS_EDITING = 0] = "NO_OTHER_CLIENTS_EDITING", var_core_value_sigD9BB[var_core_value_sigD9BB.OTHER_CLIENTS_EDITING = 1] = "OTHER_CLIENTS_EDITING", var_core_value_sigD9BB;
}({});
function Se(var_core_value_sigF549) {
  var var_core_value_sigC125;
  return !!((var_core_value_sigC125 = var_core_value_sigF549.params) != null && var_core_value_sigC125.__splitChunk__);
}
const Ce = new Set([r.InsertSheetMutation["id"]]),
  we = new Set([c.AddSlidePageMutation["id"], c.EnsureSlideMasterPageMutation["id"], c.MoveSlidePageMutation["id"], c.RemoveSlidePageMutation["id"]]);
function Te(var_core_value_sigB63D, var_core_value_sig8255 = Ce) {
  let var_core_value_sigBFC7 = [];
  for (let var_core_value_sig39B7 of var_core_value_sigB63D) {
    if (var_core_value_sig8255.has(var_core_value_sig39B7.id)) {
      if (var_core_value_sigBFC7.length > 0) break;
      var_core_value_sigBFC7.push(var_core_value_sig39B7);
      break;
    }
    if (Se(var_core_value_sig39B7)) {
      if (var_core_value_sigBFC7.length > 0) break;
      var_core_value_sigBFC7.push(var_core_value_sig39B7);
      break;
    }
    var_core_value_sigBFC7.push(var_core_value_sig39B7);
  }
  return var_core_value_sigBFC7;
}
function w(var_core_value_sig933F, var_core_value_sig29DE, var_core_value_sig4AFB, var_core_value_sigC7EA, var_core_value_sigDAB9) {
  let var_core_value_sig9CF7 = Te(var_core_value_sig933F),
    var_core_value_sigCCE5 = var_core_value_sigDAB9.getCurrentUser(),
    var_core_value_sig5933 = (var_core_value_sigCCE5 == null ? undefined : var_core_value_sigCCE5.userID) ?? "unknown",
    var_core_value_sig884B = (var_core_value_sigCCE5 == null ? undefined : var_core_value_sigCCE5.memberID) ?? "unknown";
  return {
    changeset: {
      unitID: var_core_value_sig29DE,
      type: (0, e.mapDocumentTypeToUniverInstanceType)(var_core_value_sig4AFB.getUnitType(var_core_value_sig29DE)),
      baseRev: var_core_value_sigC7EA.getCurrentRevOfUnit(var_core_value_sig29DE),
      revision: 0,
      userID: var_core_value_sig5933,
      memberID: var_core_value_sig884B,
      mutations: var_core_value_sig9CF7
    },
    pendingMutations: var_core_value_sig933F.slice(var_core_value_sig9CF7.length)
  };
}
const Ee = w;
function De(var_core_value_sig4E30, var_core_value_sig9730, var_core_value_sig8E4A, var_core_value_sig300B, var_core_value_sig8457) {
  let var_core_value_sigB30D = Te(var_core_value_sig4E30, we),
    var_core_value_sigDB33 = var_core_value_sig8457.getCurrentUser(),
    var_core_value_sig6C8C = (var_core_value_sigDB33 == null ? undefined : var_core_value_sigDB33.userID) ?? "unknown",
    var_core_value_sig7A5E = (var_core_value_sigDB33 == null ? undefined : var_core_value_sigDB33.memberID) ?? "unknown";
  return {
    changeset: {
      unitID: var_core_value_sig9730,
      type: (0, e.mapDocumentTypeToUniverInstanceType)(var_core_value_sig8E4A.getUnitType(var_core_value_sig9730)),
      baseRev: var_core_value_sig300B.getCurrentRevOfUnit(var_core_value_sig9730),
      revision: 0,
      userID: var_core_value_sig6C8C,
      memberID: var_core_value_sig7A5E,
      mutations: var_core_value_sigB30D
    },
    pendingMutations: var_core_value_sig4E30.slice(var_core_value_sigB30D.length)
  };
}
function Oe(var_core_value_sig838E, var_core_value_sig9A5B, var_core_value_sigC860, var_core_value_sigE64C, var_core_value_sigF39B) {
  let var_core_value_sig9B88 = var_core_value_sig838E.reduce((var_core_value_sig18E0, var_core_value_sigE161) => {
      let var_core_value_sigBDEE = var_core_value_sig18E0[var_core_value_sig18E0.length - 1],
        {
          id: var_core_value_sig1F40
        } = var_core_value_sigBDEE ?? {},
        {
          id: var_core_value_sig3FC7,
          type: var_core_value_sig1E1B
        } = var_core_value_sigE161,
        var_core_value_sig3B10 = var_core_value_sigE161.params;
      if (var_core_value_sig1F40 && var_core_value_sig1F40 !== var_core_value_sig3FC7) throw Error("Cannot\x20assemble\x20a\x20changeset\x20from\x20multiple\x20mutations\x20of\x20different\x20types:\x20" + var_core_value_sig1F40 + " - " + var_core_value_sig3FC7 + ".");
      if (!var_core_value_sigBDEE) return [{
        id: var_core_value_sig3FC7,
        type: var_core_value_sig1E1B,
        params: {
          unitId: var_core_value_sig3B10.unitId,
          textRanges: var_core_value_sig3B10.textRanges,
          actions: var_core_value_sig3B10.actions
        }
      }];
      let var_core_value_sig89E6 = var_core_value_sigBDEE.params;
      return ke(var_core_value_sig89E6, var_core_value_sig3B10) ? [...var_core_value_sig18E0.slice(0, -1), {
        ...var_core_value_sigBDEE,
        id: var_core_value_sig3FC7,
        type: var_core_value_sig1E1B,
        params: {
          unitId: var_core_value_sig3B10.unitId,
          textRanges: var_core_value_sig3B10.textRanges,
          actions: t.JSONX["compose"](var_core_value_sig89E6.actions, var_core_value_sig3B10.actions)
        }
      }] : [...var_core_value_sig18E0, {
        id: var_core_value_sig3FC7,
        type: var_core_value_sig1E1B,
        params: {
          unitId: var_core_value_sig3B10.unitId,
          textRanges: var_core_value_sig3B10.textRanges,
          actions: var_core_value_sig3B10.actions
        }
      }];
    }, []),
    var_core_value_sig992A = var_core_value_sigF39B.getCurrentUser(),
    var_core_value_sig6281 = (var_core_value_sig992A == null ? undefined : var_core_value_sig992A.userID) ?? "unknown",
    var_core_value_sig9B01 = (var_core_value_sig992A == null ? undefined : var_core_value_sig992A.memberID) ?? "unknown";
  return {
    changeset: {
      unitID: var_core_value_sig9A5B,
      type: (0, e.mapDocumentTypeToUniverInstanceType)(var_core_value_sigC860.getUnitType(var_core_value_sig9A5B)),
      baseRev: var_core_value_sigE64C.getCurrentRevOfUnit(var_core_value_sig9A5B),
      revision: 0,
      userID: var_core_value_sig6281,
      memberID: var_core_value_sig9B01,
      mutations: var_core_value_sig9B88
    },
    pendingMutations: var_core_value_sig838E.slice(var_core_value_sig838E.length)
  };
}
function ke(var_core_value_sigA724, var_core_value_sig385E) {
  return !Ae(var_core_value_sigA724) && !Ae(var_core_value_sig385E) && je(var_core_value_sigA724.actions, var_core_value_sig385E.actions);
}
function Ae(var_core_value_sig10D3) {
  return var_core_value_sig10D3.isCompositionEnd !== undefined;
}
function je(var_core_value_sig41F2, var_core_value_sig32DD) {
  return Me(var_core_value_sig41F2) && Me(var_core_value_sig32DD) && !Pe(var_core_value_sig41F2) && !Pe(var_core_value_sig32DD) && !Ne(var_core_value_sig41F2) && !Ne(var_core_value_sig32DD);
}
function Me(var_core_value_sig7A88) {
  return Fe(var_core_value_sig7A88).some(var_core_value_sig4743 => T(var_core_value_sig4743) && var_core_value_sig4743.et === "text-x");
}
function Ne(var_core_value_sig6CFC) {
  return Fe(var_core_value_sig6CFC).some(var_core_value_sigEB6A => Array.isArray(var_core_value_sigEB6A) || typeof var_core_value_sigEB6A == "string" || typeof var_core_value_sigEB6A == "number");
}
function Pe(var_core_value_sig3EC0) {
  return Fe(var_core_value_sig3EC0).some(var_core_value_sig3D46 => !T(var_core_value_sig3D46) || var_core_value_sig3D46.et !== "text-x" || !Array.isArray(var_core_value_sig3D46.e) ? false : var_core_value_sig3D46.e["some"](var_core_value_sigE627 => !T(var_core_value_sigE627) || !T(var_core_value_sigE627.body) ? false : Object.prototype["hasOwnProperty"].call(var_core_value_sigE627.body, "tables") || Object.prototype["hasOwnProperty"].call(var_core_value_sigE627.body, "columnGroups") || Object.prototype["hasOwnProperty"].call(var_core_value_sigE627.body, "blockRanges")));
}
function Fe(var_core_value_sigEA69) {
  if (!Array.isArray(var_core_value_sigEA69)) return [];
  let var_core_value_sigF42A = var_core_value_sigEA69.includes("body") ? var_core_value_sigEA69 : var_core_value_sigEA69.find(var_core_value_sigCC93 => Array.isArray(var_core_value_sigCC93) && var_core_value_sigCC93.includes("body"));
  if (!Array.isArray(var_core_value_sigF42A)) return [];
  let var_core_value_sig898E = var_core_value_sigF42A.indexOf("body");
  return var_core_value_sig898E === -1 ? [] : var_core_value_sigF42A.slice(var_core_value_sig898E + 1);
}
function T(var_core_value_sigC481) {
  return typeof var_core_value_sigC481 == "object" && !!var_core_value_sigC481 && !Array.isArray(var_core_value_sigC481);
}
function Ie(var_core_value_sig27B7, var_core_value_sig2DAD) {
  let var_core_value_sig00DE = new i.ReplaySubject(1);
  return setTimeout(() => var_core_value_sig00DE.next(var_core_value_sig2DAD), var_core_value_sig27B7), var_core_value_sig00DE.asObservable().pipe((0, i.take)(1));
}
var Le, Re, ze;
let Be = function (var_core_value_sigEF7C) {
  return var_core_value_sigEF7C.NOT_COLLAB = "not_collab", var_core_value_sigEF7C.SYNCED = "synced", var_core_value_sigEF7C.PENDING = "pending", var_core_value_sigEF7C.AWAITING = "awaiting", var_core_value_sigEF7C.AWAITING_WITH_PENDING = "awaiting_with_pending", var_core_value_sigEF7C.FETCH_MISS = "fetch_missing", var_core_value_sigEF7C.CONFLICT = "conflict", var_core_value_sigEF7C.OFFLINE = "offline", var_core_value_sigEF7C;
}({});
const Ve = 20000,
  He = 180000;
var E = class {
  constructor(var_core_value_sig5964, var_core_value_sig808B, var_core_value_sig2A26, var_core_value_sig1179, var_core_value_sigEA92, var_core_value_sig8FD9, var_core_value_sig1AE5, var_core_value_sig7100, var_core_value_sigA19A) {
    this.unitID = var_core_value_sig5964, this.type = var_core_value_sig808B, this._handler = var_core_value_sigEA92, this._commandService = var_core_value_sig8FD9, this._undoRedoService = var_core_value_sig1AE5, this._revisionService = var_core_value_sig7100, this._localCacheService = var_core_value_sigA19A, g(this, "_awaitingChangeset", null), g(this, "_pendingMutations", []), this._awaitingChangeset = var_core_value_sig2A26, this._pendingMutations = var_core_value_sig1179;
  }
  _checkMissing(var_core_value_sigD3F5) {
    let var_core_value_sig3082 = this._revisionService["getCurrentRevOfUnit"](this.unitID);
    return var_core_value_sigD3F5.revision > var_core_value_sig3082 + 1 ? (this._handler["onMissingChangesets"]({
      from: var_core_value_sig3082,
      to: var_core_value_sigD3F5.revision - 1
    }), true) : false;
  }
  _transformUndoredo(var_core_value_sigF5D1) {
    this._undoRedoService["transformUndoRedo"](this.unitID, var_core_value_sigF5D1);
  }
  _transformSelections(var_core_value_sig8775) {
    var var_core_value_sig481B, var_core_value_sig13D7;
    (var_core_value_sig481B = (var_core_value_sig13D7 = this._handler).onTransformSelections) == null || var_core_value_sig481B.call(var_core_value_sig13D7, var_core_value_sig8775);
  }
  _prepareTransformSelections(var_core_value_sig90C0) {
    var var_core_value_sigF1B2, var_core_value_sigC2BB;
    return ((var_core_value_sigF1B2 = (var_core_value_sigC2BB = this._handler).onPrepareTransformSelections) == null ? undefined : var_core_value_sigF1B2.call(var_core_value_sigC2BB, var_core_value_sig90C0)) ?? null;
  }
  _transformIMECache(var_core_value_sigD9DB) {
    var var_core_value_sigA363, var_core_value_sigFBA5;
    return (var_core_value_sigA363 = (var_core_value_sigFBA5 = this._handler).onTransformIME) == null ? undefined : var_core_value_sigA363.call(var_core_value_sigFBA5, var_core_value_sigD9DB);
  }
  _transformStateCache(var_core_value_sigAC47) {
    var var_core_value_sigA06F, var_core_value_sig770E;
    return (var_core_value_sigA06F = (var_core_value_sig770E = this._handler).onTransformState) == null ? undefined : var_core_value_sigA06F.call(var_core_value_sig770E, var_core_value_sigAC47);
  }
  _transformRemoteChangesetByIMECache(var_core_value_sig4654) {
    var var_core_value_sigB26B, var_core_value_sig019B;
    return ((var_core_value_sigB26B = (var_core_value_sig019B = this._handler).onTransformRemoteChangesetByIMECache) == null ? undefined : var_core_value_sigB26B.call(var_core_value_sig019B, var_core_value_sig4654)) ?? var_core_value_sig4654;
  }
  _transformRemoteChangesetByStateCache(var_core_value_sigC6BC) {
    var var_core_value_sig8EC2, var_core_value_sigA8C3;
    return ((var_core_value_sig8EC2 = (var_core_value_sigA8C3 = this._handler).onTransformRemoteChangesetByStateCache) == null ? undefined : var_core_value_sig8EC2.call(var_core_value_sigA8C3, var_core_value_sigC6BC)) ?? var_core_value_sigC6BC;
  }
  _syncEditingCollabCursor(var_core_value_sig5276) {
    if (this.type === t.UniverInstanceType["UNIVER_DOC"]) {
      let {
          unitID: var_core_value_sigEF3E,
          mutations: var_core_value_sig273D,
          memberID: var_core_value_sig9A0D
        } = var_core_value_sig5276,
        var_core_value_sigA319 = var_core_value_sig273D.length > 0 ? var_core_value_sig273D[0].params["textRanges"] : [];
      if (Array.isArray(var_core_value_sigA319) && var_core_value_sigA319.length > 0) {
        var var_core_value_sig031B, var_core_value_sig9DC0;
        (var_core_value_sig031B = (var_core_value_sig9DC0 = this._handler).onSyncEditingCollabCursor) == null || var_core_value_sig031B.call(var_core_value_sig9DC0, {
          unitID: var_core_value_sigEF3E,
          memberID: var_core_value_sig9A0D,
          textRanges: var_core_value_sigA319
        });
      }
    }
  }
  _updateLocalCache() {
    var var_core_value_sig95F0;
    (var_core_value_sig95F0 = this._localCacheService) == null || var_core_value_sig95F0.updateOfflineData(this.unitID, this.type, this._awaitingChangeset, this._pendingMutations);
  }
  _getCurrentRevision() {
    return this._revisionService["getCurrentRevOfUnit"](this.unitID);
  }
  _incrementRevisionNumber() {
    this._revisionService["incrementRevOfUnit"](this.unitID);
  }
  _executeRemoteChangeset(var_core_value_sig9CCB) {
    let var_core_value_sigE718 = this._transformRemoteChangesetByIMECache(var_core_value_sig9CCB);
    var_core_value_sigE718 = this._transformRemoteChangesetByStateCache(var_core_value_sigE718);
    let var_core_value_sigAEC8 = this._prepareTransformSelections(var_core_value_sigE718),
      var_core_value_sigB977 = (0, t.sequenceExecute)(var_core_value_sigE718.mutations, this._commandService, {
        fromCollab: true
      });
    if (!var_core_value_sigB977.result) throw var_core_value_sigAEC8 == null || var_core_value_sigAEC8.rollback(), var_core_value_sigB977.error instanceof Error ? var_core_value_sigB977.error : Error(var_core_value_sigB977.error ?? "[CollaborationState]: apply error!");
    var_core_value_sigAEC8 == null || var_core_value_sigAEC8.commit(), this._transformIMECache(var_core_value_sigE718), this._transformStateCache(var_core_value_sigE718), this._transformUndoredo(var_core_value_sig9CCB), this._transformSelections(var_core_value_sigE718), this._syncEditingCollabCursor(var_core_value_sigE718), this._incrementRevisionNumber();
  }
};
let D = class extends E {
  constructor(var_core_value_sig2949, var_core_value_sig308A, var_core_value_sig528D, var_core_value_sigA309, var_core_value_sig9E20, var_core_value_sig26BB, var_core_value_sig19B4, var_core_value_sig218A, var_core_value_sig14CB, var_core_value_sigFDEE) {
    super(var_core_value_sig2949, var_core_value_sig308A, null, [], var_core_value_sig528D, var_core_value_sig19B4, var_core_value_sig26BB, var_core_value_sigA309, var_core_value_sigFDEE), this._injector = var_core_value_sig9E20, this._logService = var_core_value_sig218A, this._transformService = var_core_value_sig14CB, this.localCacheService = var_core_value_sigFDEE, g(this, "status", "synced");
  }
  appendMutation(var_core_value_sigA676) {
    let var_core_value_sigC27E = this._injector["createInstance"](O, this.unitID, this.type, [var_core_value_sigA676], this._handler);
    return var_core_value_sigC27E._schedule(), var_core_value_sigC27E._updateLocalCache(), var_core_value_sigC27E;
  }
  onRemoteChangeset(var_core_value_sigA70D) {
    if (this._checkMissing(var_core_value_sigA70D)) return this._injector["createInstance"](N, this.unitID, this.type, null, [], null, [var_core_value_sigA70D], this._handler);
    try {
      let var_core_value_sig2D58 = this._transformService["transformMutationsWithChangeset"](var_core_value_sigA70D, [e.EmptyMutationInfo]);
      if ((0, e.isTransformMutationsWithChangesetSuccess)(var_core_value_sig2D58)) {
        let {
          c1Prime: var_core_value_sigE9ED
        } = var_core_value_sig2D58;
        return this._executeRemoteChangeset(var_core_value_sigE9ED), this;
      }
      throw var_core_value_sig2D58.error;
    } catch (var_core_value_sig223F) {
      return this._logService["error"](var_core_value_sig223F), this._onConflict(false);
    }
  }
  _onConflict(var_core_value_sigCE10) {
    return this._injector["createInstance"](j, this.unitID, this.type, null, [], this._handler, var_core_value_sigCE10);
  }
  onRemoteAck(var_core_value_sigA386) {
    if (var_core_value_sigA386.revision <= this._getCurrentRevision()) return this;
    throw Error("[SyncedState]:\x20received\x20acknowledgement.");
  }
  onRemoteRej() {
    throw Error("[SyncedState]:\x20received\x20rejection.");
  }
  onRemoteRetry() {
    return this;
  }
  toggleOffline() {
    return this._injector["createInstance"](M, this.unitID, this.type, null, [], this._handler);
  }
  toggleOnline() {
    return this;
  }
  resend() {
    throw Error("[SyncedState]:\x20invalid\x20calling\x20to\x20`resend`.");
  }
  fetchMiss() {
    let var_core_value_sigCD82 = this._revisionService["getCurrentRevOfUnit"](this.unitID);
    return this._handler["onMissingChangesets"]({
      from: var_core_value_sigCD82,
      to: 0
    }), this._injector["createInstance"](N, this.unitID, this.type, null, [], null, [], this._handler);
  }
};
D = y([v(3, (0, t.Inject)(e.RevisionService)), v(4, (0, t.Inject)(t.Injector)), v(5, t.IUndoRedoService), v(6, t.ICommandService), v(7, t.ILogService), v(8, e.ITransformService), v(9, (0, t.Optional)(x))], D);
let O = Le = class extends E {
  constructor(var_core_value_sig44DD, var_core_value_sig96FA, var_core_value_sigAB68, var_core_value_sig040A, var_core_value_sig2AE0, var_core_value_sigC349, var_core_value_sig9D96, var_core_value_sig2776, var_core_value_sig6FB2, var_core_value_sigEB43, var_core_value_sig4186, var_core_value_sigF963, var_core_value_sigB608, var_core_value_sigF866) {
    super(var_core_value_sig44DD, var_core_value_sig96FA, null, var_core_value_sigAB68, var_core_value_sig040A, var_core_value_sig6FB2, var_core_value_sigB608, var_core_value_sigC349, var_core_value_sigF866), this._injector = var_core_value_sig2AE0, this._userManagerService = var_core_value_sig9D96, this._logService = var_core_value_sig2776, this._configService = var_core_value_sigEB43, this._transformService = var_core_value_sig4186, this._univerInstanceService = var_core_value_sigF963, g(this, "status", "pending"), g(this, "_scheduleCompleteTimestamp", null), g(this, "_sendingTimer", null);
  }
  appendMutation(var_core_value_sig5EFB) {
    return this._pendingMutations["push"](var_core_value_sig5EFB), this._updateLocalCache(), this;
  }
  onRemoteChangeset(var_core_value_sig3A85) {
    if (this._checkMissing(var_core_value_sig3A85)) return this._clearScheduledTask(), this._injector["createInstance"](N, this.unitID, this.type, null, this._pendingMutations, null, [var_core_value_sig3A85], this._handler);
    try {
      let var_core_value_sigD749 = this._transformService["transformMutationsWithChangeset"](var_core_value_sig3A85, this._pendingMutations);
      if ((0, e.isTransformMutationsWithChangesetSuccess)(var_core_value_sigD749)) {
        let {
          c1Prime: var_core_value_sigB577,
          m2Prime: var_core_value_sig9572
        } = var_core_value_sigD749;
        this._executeRemoteChangeset(var_core_value_sigB577);
        let var_core_value_sigD873 = this._injector["createInstance"](Le, this.unitID, this.type, var_core_value_sig9572, this._handler);
        this._clearScheduledTask();
        let var_core_value_sigA12B = new Date().getTime(),
          var_core_value_sigF230 = this._scheduleCompleteTimestamp ? Math.max(this._scheduleCompleteTimestamp - var_core_value_sigA12B, 0) : this._getSendChangesetTimeout();
        return var_core_value_sigD873._schedule(var_core_value_sigF230), var_core_value_sigD873;
      }
      throw var_core_value_sigD749.error;
    } catch (var_core_value_sigCFFA) {
      return this._logService["error"](var_core_value_sigCFFA), this._onConflict(false);
    }
  }
  onRemoteAck(var_core_value_sig2682) {
    if (var_core_value_sig2682.revision <= this._getCurrentRevision()) return this;
    throw Error("[PendingState]:\x20received\x20acknowledgement.");
  }
  onRemoteRej() {
    throw Error("[PendingState]: received rejection.");
  }
  onRemoteRetry() {
    return this;
  }
  toggleOffline() {
    return this._clearScheduledTask(), this._injector["createInstance"](M, this.unitID, this.type, null, this._pendingMutations, this._handler);
  }
  toggleOnline() {
    return this;
  }
  _schedule(var_core_value_sig4BB5) {
    let var_core_value_sig6709 = var_core_value_sig4BB5 ?? this._getSendChangesetTimeout();
    this._scheduleCompleteTimestamp = new Date().getTime() + var_core_value_sig6709, this._sendingTimer = setTimeout(() => {
      this._clearScheduledTask();
      let var_core_value_sig58C1 = null;
      switch (this.type) {
        case t.UniverInstanceType["UNIVER_SHEET"]:
          var_core_value_sig58C1 = w(this._pendingMutations, this.unitID, this._univerInstanceService, this._revisionService, this._userManagerService);
          break;
        case t.UniverInstanceType["UNIVER_DOC"]:
          var_core_value_sig58C1 = this._pendingMutations["every"](var_core_value_sigFBFA => var_core_value_sigFBFA.id === n.RichTextEditingMutation["id"]) ? Oe(this._pendingMutations, this.unitID, this._univerInstanceService, this._revisionService, this._userManagerService) : w(this._pendingMutations, this.unitID, this._univerInstanceService, this._revisionService, this._userManagerService);
          break;
        case t.UniverInstanceType["UNIVER_SLIDE"]:
          var_core_value_sig58C1 = De(this._pendingMutations, this.unitID, this._univerInstanceService, this._revisionService, this._userManagerService);
          break;
        case t.UniverInstanceType["UNIVER_PDF"]:
          var_core_value_sig58C1 = Ee(this._pendingMutations, this.unitID, this._univerInstanceService, this._revisionService, this._userManagerService);
          break;
        case t.UniverInstanceType["UNIVER_BOARD"]:
          var_core_value_sig58C1 = w(this._pendingMutations, this.unitID, this._univerInstanceService, this._revisionService, this._userManagerService);
          break;
        case t.UniverInstanceType["UNIVER_BASE"]:
          var_core_value_sig58C1 = w(this._pendingMutations, this.unitID, this._univerInstanceService, this._revisionService, this._userManagerService);
          break;
        default:
          throw Error("[PendingState]: unhandled univer type: " + this.type + " in _schedule.");
      }
      let {
        changeset: var_core_value_sig5090,
        pendingMutations: var_core_value_sigC368
      } = var_core_value_sig58C1;
      this._handler["onSendChangeset"](var_core_value_sig5090);
      let var_core_value_sigAD56 = var_core_value_sigC368.length ? this._injector["createInstance"](A, this.unitID, this.type, var_core_value_sig5090, var_core_value_sigC368, this._handler, undefined) : this._injector["createInstance"](k, this.unitID, this.type, var_core_value_sig5090, this._handler);
      var_core_value_sigAD56._updateLocalCache(), this._handler["onStateChange"](this, var_core_value_sigAD56);
    }, var_core_value_sig6709);
  }
  _getSendChangesetTimeout() {
    let var_core_value_sig52CA = this._configService["getConfig"](m);
    return (var_core_value_sig52CA == null ? undefined : var_core_value_sig52CA.sendChangesetTimeout) ?? 2000;
  }
  resend() {
    throw Error("[PendingState]: invalid calling to `resend`.");
  }
  _clearScheduledTask() {
    this._sendingTimer != null && (clearTimeout(this._sendingTimer), this._sendingTimer = null);
  }
  _onConflict(var_core_value_sigC030) {
    return this._clearScheduledTask(), this._injector["createInstance"](j, this.unitID, this.type, null, this._pendingMutations, this._handler, var_core_value_sigC030);
  }
};
O = Le = y([v(4, (0, t.Inject)(t.Injector)), v(5, (0, t.Inject)(e.RevisionService)), v(6, (0, t.Inject)(t.UserManagerService)), v(7, t.ILogService), v(8, t.ICommandService), v(9, t.IConfigService), v(10, e.ITransformService), v(11, t.IUniverInstanceService), v(12, t.IUndoRedoService), v(13, (0, t.Optional)(x))], O);
let k = Re = class extends E {
  constructor(var_core_value_sig88F6, var_core_value_sig37DB, var_core_value_sig5542, var_core_value_sigE0A9, var_core_value_sigA73E, var_core_value_sig7620, var_core_value_sigB9FC, var_core_value_sig5055, var_core_value_sig3801, var_core_value_sig45F0, var_core_value_sigBC91) {
    super(var_core_value_sig88F6, var_core_value_sig37DB, var_core_value_sig5542, [], var_core_value_sigE0A9, var_core_value_sigB9FC, var_core_value_sig45F0, var_core_value_sig7620, var_core_value_sigBC91), this._injector = var_core_value_sigA73E, this._logService = var_core_value_sig5055, this._transformService = var_core_value_sig3801, g(this, "status", "awaiting"), g(this, "_resendTimeout", 0), g(this, "_maxTotalRetryTimeout", 0), g(this, "_resendTimer", undefined), g(this, "_sender", undefined);
  }
  appendMutation(var_core_value_sigCB88) {
    this._clearScheduledTask();
    let var_core_value_sig8D65 = this._injector["createInstance"](A, this.unitID, this.type, this._awaitingChangeset, [var_core_value_sigCB88], this._handler, this._resendTimer);
    return var_core_value_sig8D65._updateLocalCache(), var_core_value_sig8D65;
  }
  onRemoteChangeset(var_core_value_sig8122) {
    if (this._checkMissing(var_core_value_sig8122)) return this._clearScheduledTask(), this._injector["createInstance"](N, this.unitID, this.type, this._awaitingChangeset, [], null, [var_core_value_sig8122], this._handler);
    try {
      let var_core_value_sigDB4A = this._transformService["transformChangesets"]([var_core_value_sig8122], [this._awaitingChangeset], false);
      if ((0, e.isTransformChangesetsSuccess)(var_core_value_sigDB4A)) {
        let {
          c1Prime: var_core_value_sig09B8,
          c2Prime: var_core_value_sig6F91
        } = var_core_value_sigDB4A;
        this._executeRemoteChangeset(var_core_value_sig09B8[0]), var_core_value_sig6F91[0].baseRev = this._getCurrentRevision(), this._clearScheduledTask();
        let var_core_value_sigF9C7 = this._injector["createInstance"](Re, this.unitID, this.type, var_core_value_sig6F91[0], this._handler);
        return var_core_value_sigF9C7._updateLocalCache(), var_core_value_sigF9C7;
      }
      throw var_core_value_sigDB4A.error;
    } catch (var_core_value_sig6418) {
      return this._logService["error"](var_core_value_sig6418), this._onConflict(false);
    }
  }
  onRemoteAck(var_core_value_sigEDC6) {
    this._clearScheduledTask();
    let var_core_value_sig611A = this._revisionService["getCurrentRevOfUnit"](this.unitID);
    if (var_core_value_sigEDC6.revision <= var_core_value_sig611A) return this;
    if (this._checkMissing(var_core_value_sigEDC6)) return this._injector["createInstance"](N, this.unitID, this.type, this._awaitingChangeset, [], var_core_value_sigEDC6.revision, [], this._handler);
    this._incrementRevisionNumber();
    let var_core_value_sig6BD9 = this._injector["createInstance"](D, this.unitID, this.type, this._handler);
    return var_core_value_sig6BD9._updateLocalCache(), var_core_value_sig6BD9;
  }
  onRemoteRej(var_core_value_sig7E56) {
    return this._onConflict(!!(var_core_value_sig7E56 != null && var_core_value_sig7E56.isPermissionRej));
  }
  onRemoteRetry(var_core_value_sig4161) {
    return this._maxTotalRetryTimeout > He ? this.toggleOffline() : (this._resendTimer = Ie(this._resendTimeout, {
      timeout: this._resendTimeout,
      reqId: var_core_value_sig4161.reqId
    }), this._sender = this._resendTimer["subscribe"](({
      reqId: var_core_value_sig1896,
      timeout: var_core_value_sig0285
    }) => {
      this._resendWithTimeout(var_core_value_sig1896, var_core_value_sig0285);
    }), this);
  }
  toggleOffline() {
    return this._clearScheduledTask(), this._injector["createInstance"](M, this.unitID, this.type, this._awaitingChangeset, [], this._handler);
  }
  toggleOnline() {
    return this;
  }
  resend() {
    this._handler["onSendChangeset"](this._awaitingChangeset);
  }
  _onConflict(var_core_value_sig7580) {
    return this._clearScheduledTask(), this._injector["createInstance"](j, this.unitID, this.type, this._awaitingChangeset, [], this._handler, var_core_value_sig7580);
  }
  _resendWithTimeout(var_core_value_sig1F18, var_core_value_sigD5A0) {
    var var_core_value_sig81B2;
    var_core_value_sig1F18 === ((var_core_value_sig81B2 = this._awaitingChangeset) == null ? undefined : var_core_value_sig81B2.reqId) && (this.resend(), this._resendTimeout = var_core_value_sigD5A0 === 0 ? 1000 : Math.min(var_core_value_sigD5A0 * 2, Ve), this._maxTotalRetryTimeout += this._resendTimeout);
  }
  _clearScheduledTask() {
    var var_core_value_sigA0A5;
    (var_core_value_sigA0A5 = this._sender) == null || var_core_value_sigA0A5.unsubscribe(), this._resendTimeout = 0, this._maxTotalRetryTimeout = 0;
  }
};
k = Re = y([v(4, (0, t.Inject)(t.Injector)), v(5, (0, t.Inject)(e.RevisionService)), v(6, t.ICommandService), v(7, t.ILogService), v(8, e.ITransformService), v(9, t.IUndoRedoService), v(10, (0, t.Optional)(x))], k);
let A = ze = class extends E {
  constructor(var_core_value_sig10AA, var_core_value_sigE6D0, var_core_value_sig8E91, var_core_value_sig00BE, var_core_value_sig7BB5, var_core_value_sig6AAD, var_core_value_sig1157, var_core_value_sigA694, var_core_value_sig18E01, var_core_value_sig0428, var_core_value_sigBE07, var_core_value_sig555F, var_core_value_sig3D6F) {
    super(var_core_value_sig10AA, var_core_value_sigE6D0, var_core_value_sig8E91, var_core_value_sig00BE, var_core_value_sig7BB5, var_core_value_sig18E01, var_core_value_sig555F, var_core_value_sigA694, var_core_value_sig3D6F), this._injector = var_core_value_sig1157, this._logService = var_core_value_sig0428, this._transformService = var_core_value_sigBE07, this.localCacheService = var_core_value_sig3D6F, g(this, "status", "awaiting_with_pending"), g(this, "_resendTimeout", 0), g(this, "_maxTotalRetryTimeout", 0), g(this, "_resendTimer", undefined), g(this, "_sender", undefined), var_core_value_sig6AAD && (this._resendTimer = var_core_value_sig6AAD, this._sender = this._resendTimer["subscribe"](({
      reqId: var_core_value_sig777D,
      timeout: var_core_value_sig3F4C
    }) => {
      this._resendWithTimeout(var_core_value_sig777D, var_core_value_sig3F4C);
    }));
  }
  appendMutation(var_core_value_sig336C) {
    return this._pendingMutations["push"](var_core_value_sig336C), this;
  }
  onRemoteChangeset(var_core_value_sig6E68) {
    if (this._checkMissing(var_core_value_sig6E68)) return this._clearScheduledTask(), this._injector["createInstance"](N, this.unitID, this.type, this._awaitingChangeset, this._pendingMutations, null, [var_core_value_sig6E68], this._handler);
    try {
      let var_core_value_sigD65A = this._transformService["transformChangesets"]([var_core_value_sig6E68], [this._awaitingChangeset], false);
      if ((0, e.isTransformChangesetsSuccess)(var_core_value_sigD65A)) {
        let {
            c1Prime: var_core_value_sig8895,
            c2Prime: var_core_value_sigC80B
          } = var_core_value_sigD65A,
          var_core_value_sig284F = this._transformService["transformMutationsWithChangeset"](var_core_value_sig8895[0], this._pendingMutations);
        if ((0, e.isTransformMutationsWithChangesetSuccess)(var_core_value_sig284F)) {
          let {
            c1Prime: var_core_value_sigF602,
            m2Prime: var_core_value_sig1BBD
          } = var_core_value_sig284F;
          return this._executeRemoteChangeset(var_core_value_sigF602), var_core_value_sigC80B[0].baseRev = this._getCurrentRevision(), this._clearScheduledTask(), this._injector["createInstance"](ze, this.unitID, this.type, var_core_value_sigC80B[0], var_core_value_sig1BBD, this._handler, undefined);
        }
        throw var_core_value_sig284F.error;
      }
      throw var_core_value_sigD65A.error;
    } catch (var_core_value_sig5A13) {
      return this._logService["error"](var_core_value_sig5A13), this._onConflict(false);
    }
  }
  onRemoteAck(var_core_value_sig8DFE) {
    this._clearScheduledTask();
    let var_core_value_sig48EA = this._getCurrentRevision();
    if (var_core_value_sig8DFE.revision <= var_core_value_sig48EA) return this;
    if (this._checkMissing(var_core_value_sig8DFE)) return this._injector["createInstance"](N, this.unitID, this.type, this._awaitingChangeset, this._pendingMutations, var_core_value_sig8DFE.revision, [], this._handler);
    this._incrementRevisionNumber();
    let var_core_value_sig5E16 = this._injector["createInstance"](O, this.unitID, this.type, this._pendingMutations, this._handler);
    return var_core_value_sig5E16._schedule(), var_core_value_sig5E16._updateLocalCache(), var_core_value_sig5E16;
  }
  onRemoteRej(var_core_value_sig09F3) {
    return this._onConflict(!!(var_core_value_sig09F3 != null && var_core_value_sig09F3.isPermissionRej));
  }
  onRemoteRetry(var_core_value_sig4592) {
    return this._maxTotalRetryTimeout > He ? this.toggleOffline() : (this._resendTimer = Ie(this._resendTimeout, {
      timeout: this._resendTimeout,
      reqId: var_core_value_sig4592.reqId
    }), this._sender = this._resendTimer["subscribe"](({
      reqId: var_core_value_sigF593,
      timeout: var_core_value_sig3607
    }) => {
      this._resendWithTimeout(var_core_value_sigF593, var_core_value_sig3607);
    }), this);
  }
  toggleOffline() {
    return this._clearScheduledTask(), this._injector["createInstance"](M, this.unitID, this.type, this._awaitingChangeset, this._pendingMutations, this._handler);
  }
  toggleOnline() {
    return this;
  }
  resend() {
    this._handler["onSendChangeset"](this._awaitingChangeset);
  }
  _onConflict(var_core_value_sigC5C4) {
    return this._clearScheduledTask(), this._injector["createInstance"](j, this.unitID, this.type, null, this._pendingMutations, this._handler, var_core_value_sigC5C4);
  }
  _resendWithTimeout(var_core_value_sig1617, var_core_value_sig4169) {
    var var_core_value_sig6D19;
    var_core_value_sig1617 === ((var_core_value_sig6D19 = this._awaitingChangeset) == null ? undefined : var_core_value_sig6D19.reqId) && (this.resend(), this._resendTimeout = var_core_value_sig4169 === 0 ? 1000 : Math.min(var_core_value_sig4169 * 2, Ve), this._maxTotalRetryTimeout += this._resendTimeout);
  }
  _clearScheduledTask() {
    var var_core_value_sig279C;
    (var_core_value_sig279C = this._sender) == null || var_core_value_sig279C.unsubscribe(), this._resendTimeout = 0, this._maxTotalRetryTimeout = 0;
  }
};
A = ze = y([v(6, (0, t.Inject)(t.Injector)), v(7, (0, t.Inject)(e.RevisionService)), v(8, t.ICommandService), v(9, t.ILogService), v(10, e.ITransformService), v(11, t.IUndoRedoService), v(12, (0, t.Optional)(x))], A);
let j = class extends E {
  constructor(var_core_value_sigAC51, var_core_value_sig8986, var_core_value_sigCAF7, var_core_value_sigED1C, var_core_value_sig726E, var_core_value_sig2CD3 = false, var_core_value_sig038E, var_core_value_sigAA1E, var_core_value_sigC9F5, var_core_value_sig7EEA, var_core_value_sig59CE, var_core_value_sig33C8, var_core_value_sig957F) {
    super(var_core_value_sigAC51, var_core_value_sig8986, var_core_value_sigCAF7, var_core_value_sigED1C, var_core_value_sig726E, var_core_value_sigAA1E, var_core_value_sigC9F5, var_core_value_sig7EEA, var_core_value_sig957F), this._isPermissionRej = var_core_value_sig2CD3, this._permissionService = var_core_value_sig038E, this._localeService = var_core_value_sig59CE, this._collaborationUIEventService = var_core_value_sig33C8, this.localCacheService = var_core_value_sig957F, g(this, "status", "conflict"), this._showConflictNotification(), this._clearLocalCache(), this._disableEditing();
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
    var var_core_value_sig803B, var_core_value_sig5830, var_core_value_sig4A7C;
    (var_core_value_sig803B = this._localCacheService) == null || (var_core_value_sig5830 = var_core_value_sig803B.backupOfflineData) == null || (var_core_value_sig5830 = var_core_value_sig5830.call(var_core_value_sig803B, this.unitID, "conflict")) == null || var_core_value_sig5830.catch(() => undefined), (var_core_value_sig4A7C = this._localCacheService) == null || var_core_value_sig4A7C.updateOfflineData(this.unitID, this.type, null, []);
  }
  _showConflictNotification() {
    this._isPermissionRej ? this._collaborationUIEventService["emitEvent"]({
      id: "PERMISSION_DENIED"
    }) : this._collaborationUIEventService["emitEvent"]({
      id: "CONFLICT"
    });
  }
  _disableEditing() {
    this._permissionService["updatePermissionPoint"](new r["WorkbookEditablePermission"](this.unitID).id, false);
  }
};
j = y([v(6, (0, t.Inject)(t.IPermissionService)), v(7, t.ICommandService), v(8, t.IUndoRedoService), v(9, (0, t.Inject)(e.RevisionService)), v(10, (0, t.Inject)(t.LocaleService)), v(11, (0, t.Inject)(_)), v(12, (0, t.Optional)(x))], j);
let M = class extends E {
  constructor(var_core_value_sigF975, var_core_value_sigCDAF, var_core_value_sigA298, var_core_value_sig0B40, var_core_value_sig330B, var_core_value_sig3625, var_core_value_sig0B4E, var_core_value_sig0E9F, var_core_value_sigE5BA, var_core_value_sig4A83) {
    super(var_core_value_sigF975, var_core_value_sigCDAF, var_core_value_sigA298, var_core_value_sig0B40, var_core_value_sig330B, var_core_value_sig0E9F, var_core_value_sigE5BA, var_core_value_sig0B4E, var_core_value_sig4A83), this._injector = var_core_value_sig3625, g(this, "status", "offline");
  }
  appendMutation(var_core_value_sig58AA) {
    return this._pendingMutations["push"](var_core_value_sig58AA), this._updateLocalCache(), this;
  }
  onRemoteChangeset(var_core_value_sig84C4) {
    throw Error("[OfflineState]: received changeset.");
  }
  onRemoteAck() {
    throw Error("[OfflineState]: received acknowledgement.");
  }
  onRemoteRej() {
    throw Error("[OfflineState]:\x20received\x20rejection.");
  }
  onRemoteRetry() {
    return this;
  }
  toggleOffline() {
    return this;
  }
  toggleOnline() {
    let {
        _injector: var_core_value_sigB6F7,
        _pendingMutations: var_core_value_sigB495,
        _awaitingChangeset: var_core_value_sig70D0,
        unitID: var_core_value_sig2A8A,
        _handler: var_core_value_sig3782,
        type: var_core_value_sigD22E
      } = this,
      var_core_value_sig3455 = Ue(var_core_value_sigB6F7, var_core_value_sig2A8A, var_core_value_sigD22E, var_core_value_sig70D0, var_core_value_sigB495, var_core_value_sig3782);
    return var_core_value_sig3455 instanceof O ? var_core_value_sig3455._schedule() : (var_core_value_sig3455 instanceof A || var_core_value_sig3455 instanceof k) && var_core_value_sig3455.resend(), var_core_value_sig3455;
  }
  resend() {
    throw Error("[OfflineState]: invalid calling to `resend`.");
  }
};
M = y([v(5, (0, t.Inject)(t.Injector)), v(6, (0, t.Inject)(e.RevisionService)), v(7, t.ICommandService), v(8, t.IUndoRedoService), v(9, (0, t.Optional)(x))], M);
let N = class extends E {
  constructor(var_core_value_sig5CEF, var_core_value_sig43D5, var_core_value_sig1395, var_core_value_sig9FA0, var_core_value_sig055E, var_core_value_sig7C77, var_core_value_sig9578, var_core_value_sigA2D3, var_core_value_sigC218, var_core_value_sigADEC, var_core_value_sig3D8E, var_core_value_sig37E5, var_core_value_sigF079, var_core_value_sigFCA0) {
    super(var_core_value_sig5CEF, var_core_value_sig43D5, var_core_value_sig1395, var_core_value_sig9FA0, var_core_value_sig9578, var_core_value_sig3D8E, var_core_value_sig37E5, var_core_value_sigC218, var_core_value_sigFCA0), this._acknowledgedAwaitingRevision = var_core_value_sig055E, this._queuedRemoteChangesets = var_core_value_sig7C77, this._injector = var_core_value_sigA2D3, this._logService = var_core_value_sigADEC, this._transformService = var_core_value_sigF079, this.localCacheService = var_core_value_sigFCA0, g(this, "status", "fetch_missing");
  }
  onMissedChangesetFetched(var_core_value_sigC84D) {
    try {
      if (this._handleRemoteChangesets(var_core_value_sigC84D).missingChangesets) throw Error("[FetchMissState]:\x20missing\x20changesets\x20response\x20still\x20has\x20revision\x20gaps.");
      if (this._handleRemoteChangesets([...this._queuedRemoteChangesets].sort((var_core_value_sigE154, var_core_value_sig4632) => var_core_value_sigE154.revision - var_core_value_sig4632.revision)).missingChangesets) return this._queuedRemoteChangesets = [], this._updateLocalCache(), this._handler["onMissingChangesets"]({
        from: this._getCurrentRevision(),
        to: 0
      }), this;
      let var_core_value_sigB512 = this._awaitingChangeset,
        var_core_value_sigF2E6 = this._pendingMutations,
        var_core_value_sig34C8;
      if (var_core_value_sigB512 && var_core_value_sigF2E6.length !== 0) var_core_value_sig34C8 = this._injector["createInstance"](A, this.unitID, this.type, var_core_value_sigB512, var_core_value_sigF2E6, this._handler, undefined);else {
        if (var_core_value_sigB512 && var_core_value_sigF2E6.length === 0) var_core_value_sigB512.baseRev = this._getCurrentRevision(), var_core_value_sig34C8 = this._injector["createInstance"](k, this.unitID, this.type, var_core_value_sigB512, this._handler);else {
          if (var_core_value_sigF2E6.length !== 0) {
            let var_core_value_sig7524 = this._injector["createInstance"](O, this.unitID, this.type, var_core_value_sigF2E6, this._handler);
            var_core_value_sig7524._schedule(), var_core_value_sig34C8 = var_core_value_sig7524;
          } else var_core_value_sig34C8 = this._injector["createInstance"](D, this.unitID, this.type, this._handler);
        }
      }
      return var_core_value_sig34C8._updateLocalCache(), var_core_value_sig34C8;
    } catch (var_core_value_sigB744) {
      return this._logService["error"]("[FetchMissState]", "failed to apply missed changesets!", var_core_value_sigB744), this._injector["createInstance"](j, this.unitID, this.type, this._awaitingChangeset, this._pendingMutations, this._handler, false);
    }
  }
  _handleRemoteChangesets(var_core_value_sigF2BC) {
    this._acknowledgeAwaitingIfReady();
    for (let var_core_value_sigEAE2 = 0; var_core_value_sigEAE2 < var_core_value_sigF2BC.length; var_core_value_sigEAE2++) {
      let var_core_value_sig12F2 = var_core_value_sigF2BC[var_core_value_sigEAE2],
        var_core_value_sig2259 = this._getCurrentRevision();
      if (!(var_core_value_sig12F2.revision <= var_core_value_sig2259)) {
        if (var_core_value_sig12F2.revision > var_core_value_sig2259 + 1) return {
          missingChangesets: true
        };
        if (this._isEchoedAwaitingChangeset(var_core_value_sig12F2)) {
          this._acknowledgeAwaiting();
          continue;
        }
        this._transformAndApplyRemoteChangeset(var_core_value_sig12F2), this._acknowledgeAwaitingIfReady();
      }
    }
    return {
      missingChangesets: false
    };
  }
  _transformAndApplyRemoteChangeset(var_core_value_sigD37B) {
    let var_core_value_sigFA28 = var_core_value_sigD37B,
      var_core_value_sig93BE = this._awaitingChangeset;
    if (var_core_value_sig93BE) {
      let var_core_value_sigE68A = this._transformService["transformChangesets"]([var_core_value_sigD37B], [var_core_value_sig93BE], false);
      if (!(0, e.isTransformChangesetsSuccess)(var_core_value_sigE68A)) throw var_core_value_sigE68A.error;
      var_core_value_sigFA28 = var_core_value_sigE68A.c1Prime[0], var_core_value_sig93BE = var_core_value_sigE68A.c2Prime[0];
    }
    let var_core_value_sigABEC = this._pendingMutations;
    if (var_core_value_sigABEC.length) {
      let var_core_value_sig3E68 = this._transformService["transformMutationsWithChangeset"](var_core_value_sigFA28, var_core_value_sigABEC);
      if (!(0, e.isTransformMutationsWithChangesetSuccess)(var_core_value_sig3E68)) throw var_core_value_sig3E68.error;
      var_core_value_sigFA28 = var_core_value_sig3E68.c1Prime, var_core_value_sigABEC = var_core_value_sig3E68.m2Prime;
    }
    this._executeRemoteChangeset(var_core_value_sigFA28), var_core_value_sig93BE && (var_core_value_sig93BE.baseRev = this._getCurrentRevision()), this._awaitingChangeset = var_core_value_sig93BE, this._pendingMutations = var_core_value_sigABEC;
  }
  _acknowledgeAwaitingIfReady() {
    if (!this._awaitingChangeset || this._acknowledgedAwaitingRevision == null) return;
    let var_core_value_sig2712 = this._getCurrentRevision();
    if (this._acknowledgedAwaitingRevision <= var_core_value_sig2712) throw Error("[FetchingMissState]: received stale ack revision: " + this._acknowledgedAwaitingRevision + ".");
    this._acknowledgedAwaitingRevision === var_core_value_sig2712 + 1 && this._acknowledgeAwaiting();
  }
  _acknowledgeAwaiting() {
    this._incrementRevisionNumber(), this._awaitingChangeset = null, this._acknowledgedAwaitingRevision = null;
  }
  _isEchoedAwaitingChangeset(var_core_value_sig0B9E) {
    let var_core_value_sigC545 = this._awaitingChangeset;
    return !var_core_value_sigC545 || !var_core_value_sigC545.sid || var_core_value_sigC545.reqId === null || var_core_value_sigC545.reqId === undefined ? false : var_core_value_sig0B9E.unitID === var_core_value_sigC545.unitID && var_core_value_sig0B9E.sid === var_core_value_sigC545.sid && var_core_value_sig0B9E.reqId === var_core_value_sigC545.reqId;
  }
  resend() {
    throw Error("[FetchingMissState]:\x20invalid\x20calling\x20to\x20`resend`.");
  }
  appendMutation(var_core_value_sig12A7) {
    return this._pendingMutations["push"](var_core_value_sig12A7), this;
  }
  onRemoteChangeset(var_core_value_sig6F4E) {
    return this._queuedRemoteChangesets["push"](var_core_value_sig6F4E), this;
  }
  onRemoteAck(var_core_value_sigA021) {
    if (this._awaitingChangeset) {
      let var_core_value_sigF4C5 = this._getCurrentRevision();
      return var_core_value_sigA021.revision <= var_core_value_sigF4C5 || (var_core_value_sigF4C5 + 1 === var_core_value_sigA021.revision ? (this._incrementRevisionNumber(), this._awaitingChangeset = null, this._acknowledgedAwaitingRevision = null) : this._acknowledgedAwaitingRevision = var_core_value_sigA021.revision), this;
    }
    if (var_core_value_sigA021.revision <= this._getCurrentRevision()) return this;
    throw Error("[FetchingMissState]: not expected to receive ack when `this._awaitingChangeset` is null!");
  }
  onRemoteRej(var_core_value_sig49D9) {
    return this._onConflict(!!(var_core_value_sig49D9 != null && var_core_value_sig49D9.isPermissionRej));
  }
  onRemoteRetry() {
    return this;
  }
  toggleOffline() {
    return this._injector["createInstance"](M, this.unitID, this.type, this._awaitingChangeset, this._pendingMutations, this._handler);
  }
  toggleOnline() {
    return this;
  }
  _onConflict(var_core_value_sig320C) {
    return this._injector["createInstance"](j, this.unitID, this.type, this._awaitingChangeset, this._pendingMutations, this._handler, var_core_value_sig320C);
  }
};
N = y([v(7, (0, t.Inject)(t.Injector)), v(8, (0, t.Inject)(e.RevisionService)), v(9, t.ILogService), v(10, t.ICommandService), v(11, t.IUndoRedoService), v(12, e.ITransformService), v(13, (0, t.Optional)(x))], N);
function Ue(var_core_value_sig07E7, var_core_value_sig6005, var_core_value_sig25A4, var_core_value_sigB591, var_core_value_sigB272, var_core_value_sig6F52) {
  return var_core_value_sigB591 && var_core_value_sigB272.length ? var_core_value_sig07E7.createInstance(A, var_core_value_sig6005, var_core_value_sig25A4, var_core_value_sigB591, var_core_value_sigB272, var_core_value_sig6F52, undefined) : var_core_value_sigB591 ? var_core_value_sig07E7.createInstance(k, var_core_value_sig6005, var_core_value_sig25A4, var_core_value_sigB591, var_core_value_sig6F52) : var_core_value_sigB272.length ? var_core_value_sig07E7.createInstance(O, var_core_value_sig6005, var_core_value_sig25A4, var_core_value_sigB272, var_core_value_sig6F52) : var_core_value_sig07E7.createInstance(D, var_core_value_sig6005, var_core_value_sig25A4, var_core_value_sig6F52);
}
let P = class extends t.RxDisposable {
  get state() {
    return this._state;
  }
  constructor(var_core_value_sigE7F0, var_core_value_sigE837, var_core_value_sig34F4, var_core_value_sigA45D, var_core_value_sig1BC7, var_core_value_sig4956, var_core_value_sigCC9E, var_core_value_sig444C, var_core_value_sigE42E, var_core_value_sigF039, var_core_value_sigA321, var_core_value_sigBF4C, var_core_value_sig3457, var_core_value_sig4A08) {
    super(), this.unitID = var_core_value_sigE7F0, this.session = var_core_value_sigE837, this._type = var_core_value_sig34F4, this._injector = var_core_value_sigA45D, this._compressMutationService = var_core_value_sig1BC7, this._localeService = var_core_value_sig4956, this._revisionService = var_core_value_sigCC9E, this._eventService = var_core_value_sig444C, this._univerInstanceService = var_core_value_sigE42E, this._logService = var_core_value_sigF039, this._commandService = var_core_value_sigA321, this._permissionService = var_core_value_sigBF4C, this._singleActiveUnitService = var_core_value_sig3457, this._localCacheService = var_core_value_sig4A08, g(this, "_state$", new i["BehaviorSubject"](null)), g(this, "state$", this._state$["asObservable"]()), g(this, "_state", undefined), g(this, "_collaborationPaused", false), g(this, "_changesetSessionId", ""), g(this, "_changesetReqId", 0), g(this, "status$", this.state$["pipe"]((0, i.map)(var_core_value_sig5410 => var_core_value_sig5410 ? var_core_value_sig5410.status : "offline"), (0, i.shareReplay)({
      bufferSize: 1,
      refCount: true
    }))), g(this, "_transitionLocked", false), g(this, "_remoteChangesetQueue", []);
  }
  async init() {
    if (this.state) throw Error('[CollaborationEntity]: initial state has been created before. You should not call "init" twice.');
    await this._init();
  }
  pauseCollaboration() {
    return this._collaborationPaused = true, (0, t.toDisposable)(() => {
      this._collaborationPaused = false, this._exhaustRemoteChangesetQueue();
    });
  }
  onLocalMutation(var_core_value_sig1BC4) {
    this._onLocalMutation(var_core_value_sig1BC4);
  }
  _updateState(var_core_value_sig9EAB) {
    this._state = var_core_value_sig9EAB, this._state$["next"](var_core_value_sig9EAB);
  }
  async _init() {
    if (this._updateState(await this._createInitialState()), this._singleActiveUnitService) {
      var var_core_value_sigA5C3;
      (var_core_value_sigA5C3 = this._singleActiveUnitService) == null || var_core_value_sigA5C3.editingUnit(this.unitID), this.disposeWithMe(this._singleActiveUnitService["getUnitStatus$"](this.unitID).subscribe(var_core_value_sig9E2F => {
        this._logService["debug"]("[CollaborationEntity]", "editing status changed to", var_core_value_sig9E2F), var_core_value_sig9E2F === 1 ? (this._eventService["emitEvent"]({
          id: "OTHER_CLIENT_EDITING"
        }), this._permissionService["updatePermissionPoint"](new r["WorkbookEditablePermission"](this.unitID).id, false), this._permissionService["setShowComponents"](false)) : (this._permissionService["updatePermissionPoint"](new r.WorkbookEditablePermission(this.unitID).id, true), this._permissionService["setShowComponents"](true));
      }));
    }
    let var_core_value_sig3A1E = false;
    return this.disposeWithMe(this.session["sessionStatus$"].subscribe(var_core_value_sig492F => {
      var_core_value_sig492F === 3 ? this._toggleOnline(var_core_value_sig3A1E) : var_core_value_sig492F === 2 && (var_core_value_sig3A1E = true, this._toggleOffline());
    })), this.disposeWithMe(this.session["event$"].subscribe(var_core_value_sig8EA0 => {
      try {
        switch (var_core_value_sig8EA0.eventID) {
          case e.CollaborationEvent["NEW_CHANGESETS"]:
            this._onRemoteChangeset((0, e.parseProtocolChangeset)(var_core_value_sig8EA0.data));
            break;
          case e.CollaborationEvent["CHANGESET_ACK"]:
            this._onRemoteACK(var_core_value_sig8EA0.data);
            break;
          case e.CollaborationEvent["CHANGESET_REJ"]:
            this._onRemoteRejected();
            break;
          case e.CollaborationEvent["CHANGESET_SHOULD_RETRY"]:
            this._onRemoteRetry(var_core_value_sig8EA0.data);
            break;
          case e.CollaborationEvent["PSEUDO_FETCH_MISSING_RESULT"]:
            this._onFetchMissResult(var_core_value_sig8EA0.data["changesets"].map(var_core_value_sig2AD8 => (0, e.parseProtocolChangeset)(var_core_value_sig2AD8)));
            break;
          case e.CollaborationEvent["PERMISSION_REJ"]:
            this._onRemoteRejected({
              isPermissionRej: true
            });
            break;
          case e.CollaborationEvent["UNISCRIPT_RUN"]:
            break;
        }
      } catch (var_core_value_sigD082) {
        throw console.error("Error on receiving event", var_core_value_sigD082), var_core_value_sigD082;
      }
    })), this._state;
  }
  _unlockTransition() {
    this._transitionLocked = false;
  }
  _lockTransition() {
    if (this._transitionLocked) throw Error("[CollaborationEntity]:\x20cannot\x20lock\x20transition\x20twice!\x20This\x20is\x20an\x20implementation\x20error,\x20meaning\x20you\x20transit\x20the\x20collaboration\x20state\x20again\x20in\x20the\x20process\x20of\x20a\x20previous\x20transition.\x20This\x20should\x20never\x20happen.");
    this._transitionLocked = true;
  }
  _onLocalMutation(var_core_value_sigDC92) {
    this._lockTransition(), this._updateState(this._state["appendMutation"](var_core_value_sigDC92)), this._unlockTransition();
  }
  _onRemoteChangeset(var_core_value_sig3515) {
    if (!(var_core_value_sig3515.revision <= this._revisionService["getCurrentRevOfUnit"](this.unitID))) {
      if (this._collaborationPaused) {
        this._remoteChangesetQueue["push"](var_core_value_sig3515);
        return;
      }
      this._applyRemoteChangeset(var_core_value_sig3515);
    }
  }
  _exhaustRemoteChangesetQueue() {
    this._remoteChangesetQueue["forEach"](var_core_value_sigA6F6 => this._applyRemoteChangeset(var_core_value_sigA6F6)), this._remoteChangesetQueue = [];
  }
  _applyRemoteChangeset(var_core_value_sigC2A0) {
    let var_core_value_sig7C65 = this._compressMutationService["interceptor"].fetchThroughInterceptors(this._compressMutationService["interceptor"].getInterceptPoints().COMPRESS_MUTATION_APPLY)(var_core_value_sigC2A0.mutations, null) || var_core_value_sigC2A0.mutations,
      var_core_value_sig7F05 = {
        ...var_core_value_sigC2A0,
        mutations: var_core_value_sig7C65
      };
    this._lockTransition(), this._updateState(this._state["onRemoteChangeset"](var_core_value_sig7F05)), this._unlockTransition();
  }
  _onRemoteACK(var_core_value_sig41F3) {
    this._lockTransition(), this._updateState(this._state["onRemoteAck"](var_core_value_sig41F3)), this._unlockTransition();
  }
  _onRemoteRejected(var_core_value_sigF455) {
    this._lockTransition(), this._updateState(this._state["onRemoteRej"](var_core_value_sigF455)), this._unlockTransition();
  }
  _onRemoteRetry(var_core_value_sig6E78) {
    this._lockTransition(), this._updateState(this._state["onRemoteRetry"](var_core_value_sig6E78)), this._unlockTransition();
  }
  _onFetchMissResult(var_core_value_sigB3EE) {
    if (!(this._state instanceof N)) throw TypeError("[CollaborationEntity]: cannot apply missing results on other states!");
    let var_core_value_sigC50A = var_core_value_sigB3EE.map(var_core_value_sigCDDA => {
      let var_core_value_sigE243 = this._compressMutationService["interceptor"].fetchThroughInterceptors(this._compressMutationService["interceptor"].getInterceptPoints().COMPRESS_MUTATION_APPLY)(var_core_value_sigCDDA.mutations, null) || var_core_value_sigCDDA.mutations;
      return {
        ...var_core_value_sigCDDA,
        mutations: var_core_value_sigE243
      };
    });
    this._lockTransition(), this._updateState(this._state["onMissedChangesetFetched"](var_core_value_sigC50A)), this._unlockTransition();
  }
  _toggleOffline() {
    this._lockTransition(), this._updateState(this._state["toggleOffline"]()), this._unlockTransition();
  }
  _toggleOnline(var_core_value_sig11D0 = false) {
    this._lockTransition(), this._updateState(this._state["toggleOnline"]()), this._unlockTransition();
    let var_core_value_sigB8ED = this._state;
    var_core_value_sig11D0 && var_core_value_sigB8ED instanceof D && (this._lockTransition(), this._updateState(var_core_value_sigB8ED.fetchMiss()), this._unlockTransition());
  }
  async _createInitialState() {
    return new Promise(var_core_value_sig74A8 => {
      this.session["sessionStatus$"].pipe((0, i.take)(1)).subscribe(async var_core_value_sigDBB7 => {
        var_core_value_sig74A8(await this._createInitialStateImpl(var_core_value_sigDBB7 === 3));
      });
    });
  }
  _createHandler() {
    let var_core_value_sig8EAE = this.unitID;
    return {
      onStateChange: (var_core_value_sig21B2, var_core_value_sigDE08) => {
        if (var_core_value_sig21B2 !== this._state) throw Error("[CollaborationEntity]: invalid state transition! State transferred from is not the current state.\nBefore: " + var_core_value_sig21B2.status + "\nAfter: " + var_core_value_sigDE08.status + "\x0aCurrent:\x20" + this._state["status"]);
        this._updateState(var_core_value_sigDE08);
      },
      onSendChangeset: var_core_value_sigACCB => {
        var_core_value_sigACCB.sid || (var_core_value_sigACCB.sid = this._changesetSessionId, var_core_value_sigACCB.reqId = ++this._changesetReqId);
        let var_core_value_sig7F33 = {
          eventID: e.CollaborationEvent["SUBMIT_CHANGESET"],
          data: {
            unitID: var_core_value_sigACCB.unitID,
            unitType: this._type,
            changeset: var_core_value_sigACCB,
            memberID: this.session["getMemberID"]()
          }
        };
        this.session["send"](var_core_value_sig7F33, this.unitID);
      },
      onMissingChangesets: ({
        from: var_core_value_sig0C53,
        to: var_core_value_sigEA04
      }) => {
        this._logService["debug"]("[CollaborationEntity]", "fetching missing changesets from " + var_core_value_sig0C53 + " to " + var_core_value_sigEA04);
        let var_core_value_sig7A62 = {
          eventID: e.CollaborationEvent["FETCH_MISSING"],
          data: {
            unitID: var_core_value_sig8EAE,
            unitType: this._type,
            from: var_core_value_sig0C53,
            to: var_core_value_sigEA04
          }
        };
        this.session["send"](var_core_value_sig7A62, this.unitID);
      }
    };
  }
  async _createInitialStateImpl(var_core_value_sig1CDD) {
    var var_core_value_sig0DB1;
    let var_core_value_sig68A2 = await ((var_core_value_sig0DB1 = this._localCacheService) == null ? undefined : var_core_value_sig0DB1.loadOfflineData(this.unitID)),
      var_core_value_sigCC17 = (var_core_value_sig68A2 == null ? undefined : var_core_value_sig68A2.mutations) ?? [],
      var_core_value_sig32AE = (var_core_value_sig68A2 == null ? undefined : var_core_value_sig68A2.awaitingChangeset) ?? null,
      var_core_value_sigC753 = !!(var_core_value_sig32AE != null && var_core_value_sig32AE.sid) && !!(var_core_value_sig32AE != null && var_core_value_sig32AE.reqId);
    this._changesetSessionId = var_core_value_sigC753 ? var_core_value_sig32AE.sid : (0, e.uuidv4)(), this._changesetReqId = var_core_value_sigC753 ? var_core_value_sig32AE.reqId : 0;
    let var_core_value_sigFFD1 = this.unitID;
    try {
      this._replayCachedMutations(var_core_value_sig32AE, var_core_value_sigCC17);
    } catch (var_core_value_sig8109) {
      this._logService["error"](var_core_value_sig8109);
    }
    let var_core_value_sig81AE = this._createHandler();
    if (var_core_value_sig1CDD) {
      let var_core_value_sig7565 = Ue(this._injector, var_core_value_sigFFD1, this._type, var_core_value_sig32AE, var_core_value_sigCC17, var_core_value_sig81AE);
      return var_core_value_sig7565 instanceof O ? var_core_value_sig7565._schedule() : (var_core_value_sig7565 instanceof A || var_core_value_sig7565 instanceof k) && var_core_value_sig7565.resend(), var_core_value_sig7565;
    }
    return this._injector["createInstance"](M, var_core_value_sigFFD1, this._type, var_core_value_sig32AE, var_core_value_sigCC17, var_core_value_sig81AE);
  }
  _replayCachedMutations(var_core_value_sigF79F, var_core_value_sig0E54) {
    var var_core_value_sig3B17, var_core_value_sig6C4A;
    let var_core_value_sig73D9 = this._compressMutationService["interceptor"].fetchThroughInterceptors(this._compressMutationService["interceptor"].getInterceptPoints().COMPRESS_MUTATION_APPLY);
    (var_core_value_sig3B17 = var_core_value_sig73D9((var_core_value_sigF79F == null ? undefined : var_core_value_sigF79F.mutations) || [], null)) == null || var_core_value_sig3B17.forEach(var_core_value_sigD4FB => this._commandService["executeCommand"](var_core_value_sigD4FB.id, var_core_value_sigD4FB.params)), (var_core_value_sig6C4A = var_core_value_sig73D9(var_core_value_sig0E54 || [], null)) == null || var_core_value_sig6C4A.forEach(var_core_value_sig3E71 => this._commandService["executeCommand"](var_core_value_sig3E71.id, var_core_value_sig3E71.params));
  }
};
P = y([v(3, (0, t.Inject)(t.Injector)), v(4, (0, t.Inject)(e.CompressMutationService)), v(5, (0, t.Inject)(t.LocaleService)), v(6, (0, t.Inject)(e.RevisionService)), v(7, (0, t.Inject)(_)), v(8, t.IUniverInstanceService), v(9, t.ILogService), v(10, t.ICommandService), v(11, t.IPermissionService), v(12, (0, t.Optional)(C)), v(13, (0, t.Optional)(x))], P);
let F = class extends P {
  constructor(var_core_value_sigEAF8, var_core_value_sig0455, var_core_value_sig737C, var_core_value_sig5AF5, var_core_value_sig9DE4, var_core_value_sig77FA, var_core_value_sigA4A7, var_core_value_sigA4DF, var_core_value_sigCC9D, var_core_value_sig90F5, var_core_value_sigD2BA, var_core_value_sigCD3A, var_core_value_sig519D, var_core_value_sigC7E7, var_core_value_sig6E1C) {
    super(var_core_value_sigEAF8, var_core_value_sig737C, var_core_value_sig0455, var_core_value_sig5AF5, var_core_value_sig9DE4, var_core_value_sig77FA, var_core_value_sigA4A7, var_core_value_sigA4DF, var_core_value_sigCC9D, var_core_value_sig90F5, var_core_value_sigD2BA, var_core_value_sigCD3A, var_core_value_sigC7E7, var_core_value_sig6E1C), this.unitID = var_core_value_sigEAF8, this.type = var_core_value_sig0455, this._docStateChangeManagerService = var_core_value_sig519D, g(this, "_handlerCallback", null);
  }
  addHandlerCallback(var_core_value_sigFABC) {
    this._handlerCallback = var_core_value_sigFABC;
  }
  dispose() {
    this._handlerCallback = null, super.dispose();
  }
  _createHandler() {
    let var_core_value_sig413D = super._createHandler();
    return var_core_value_sig413D.onTransformIME = var_core_value_sig01B3 => {
      var var_core_value_sig7442, var_core_value_sigDF87;
      return (var_core_value_sig7442 = this._handlerCallback) == null || (var_core_value_sigDF87 = var_core_value_sig7442.onTransformIME) == null ? undefined : var_core_value_sigDF87.call(var_core_value_sig7442, var_core_value_sig01B3);
    }, var_core_value_sig413D.onTransformState = var_core_value_sig9EE0 => {
      var var_core_value_sigF051, var_core_value_sig0B45;
      return (var_core_value_sigF051 = this._handlerCallback) == null || (var_core_value_sig0B45 = var_core_value_sigF051.onTransformState) == null ? undefined : var_core_value_sig0B45.call(var_core_value_sigF051, var_core_value_sig9EE0);
    }, var_core_value_sig413D.onPrepareTransformSelections = var_core_value_sig36F8 => {
      var var_core_value_sig03E1, var_core_value_sigBB57;
      return ((var_core_value_sig03E1 = this._handlerCallback) == null || (var_core_value_sigBB57 = var_core_value_sig03E1.onPrepareTransformSelections) == null ? undefined : var_core_value_sigBB57.call(var_core_value_sig03E1, var_core_value_sig36F8)) ?? null;
    }, var_core_value_sig413D.onTransformSelections = var_core_value_sig7C4A => {
      var var_core_value_sigE799, var_core_value_sigB601;
      return (var_core_value_sigE799 = this._handlerCallback) == null || (var_core_value_sigB601 = var_core_value_sigE799.onTransformSelections) == null ? undefined : var_core_value_sigB601.call(var_core_value_sigE799, var_core_value_sig7C4A);
    }, var_core_value_sig413D.onSyncEditingCollabCursor = var_core_value_sig8B71 => {
      var var_core_value_sigAEFB, var_core_value_sig826B;
      return (var_core_value_sigAEFB = this._handlerCallback) == null || (var_core_value_sig826B = var_core_value_sigAEFB.onSyncEditingCollabCursor) == null ? undefined : var_core_value_sig826B.call(var_core_value_sigAEFB, var_core_value_sig8B71);
    }, var_core_value_sig413D.onTransformRemoteChangesetByIMECache = var_core_value_sigCF89 => {
      var var_core_value_sig00CB, var_core_value_sig77EE;
      return ((var_core_value_sig00CB = this._handlerCallback) == null || (var_core_value_sig77EE = var_core_value_sig00CB.onTransformRemoteChangesetByIMECache) == null ? undefined : var_core_value_sig77EE.call(var_core_value_sig00CB, var_core_value_sigCF89)) ?? var_core_value_sigCF89;
    }, var_core_value_sig413D.onTransformRemoteChangesetByStateCache = var_core_value_sig9F76 => {
      var var_core_value_sigB008, var_core_value_sig8721;
      return ((var_core_value_sigB008 = this._handlerCallback) == null || (var_core_value_sig8721 = var_core_value_sigB008.onTransformRemoteChangesetByStateCache) == null ? undefined : var_core_value_sig8721.call(var_core_value_sigB008, var_core_value_sig9F76)) ?? var_core_value_sig9F76;
    }, var_core_value_sig413D;
  }
  async _init() {
    let var_core_value_sig5BCE = await super._init();
    return this.disposeWithMe(this._docStateChangeManagerService["docStateChange$"].subscribe(var_core_value_sig08BA => {
      if (var_core_value_sig08BA == null || var_core_value_sig08BA.unitId !== this.unitID) return;
      let {
          commandId: var_core_value_sigDBB5,
          redoState: var_core_value_sigCFAC,
          unitId: var_core_value_sig237B
        } = var_core_value_sig08BA,
        var_core_value_sigFEAB = {
          id: var_core_value_sigDBB5,
          type: t.CommandType["MUTATION"],
          params: {
            unitId: var_core_value_sig237B,
            actions: var_core_value_sigCFAC.actions,
            textRanges: null
          }
        };
      this._onLocalMutation(var_core_value_sigFEAB);
    })), this.disposeWithMe(this._commandService["onMutationExecutedForCollab"]((var_core_value_sigE347, var_core_value_sig3C5B) => {
      if (var_core_value_sigE347.type !== t.CommandType["MUTATION"] || var_core_value_sig3C5B != null && var_core_value_sig3C5B.fromCollab || var_core_value_sig3C5B != null && var_core_value_sig3C5B.onlyLocal || var_core_value_sigE347.id === n.RichTextEditingMutation["id"]) return;
      let var_core_value_sig200B = var_core_value_sigE347.params;
      if ((var_core_value_sig200B == null ? undefined : var_core_value_sig200B.unitId) !== this.unitID) return;
      let var_core_value_sig3863 = var_core_value_sigE347,
        var_core_value_sigC97C = this._compressMutationService["interceptor"].fetchThroughInterceptors(this._compressMutationService["interceptor"].getInterceptPoints().COMPRESS_MUTATION_SEND)([var_core_value_sig3863], this._univerInstanceService) || [var_core_value_sig3863];
      this._onLocalMutation(var_core_value_sigC97C[0]);
    })), var_core_value_sig5BCE;
  }
};
F = y([v(3, (0, t.Inject)(t.Injector)), v(4, (0, t.Inject)(e.CompressMutationService)), v(5, (0, t.Inject)(t.LocaleService)), v(6, (0, t.Inject)(e.RevisionService)), v(7, (0, t.Inject)(_)), v(8, t.IUniverInstanceService), v(9, t.ILogService), v(10, t.ICommandService), v(11, t.IPermissionService), v(12, (0, t.Inject)(n.DocStateChangeManagerService)), v(13, (0, t.Optional)(C)), v(14, (0, t.Optional)(x))], F);
let I = class extends P {
  constructor(var_core_value_sig8EF0, var_core_value_sig78AC, var_core_value_sig4CEF, var_core_value_sigD57D, var_core_value_sig2CC7, var_core_value_sig4784, var_core_value_sigC39E, var_core_value_sig16C7, var_core_value_sig7481, var_core_value_sig08A3, var_core_value_sig77D8, var_core_value_sig78A3, var_core_value_sig649B, var_core_value_sig6256) {
    super(var_core_value_sig8EF0, var_core_value_sig4CEF, var_core_value_sig78AC, var_core_value_sigD57D, var_core_value_sig2CC7, var_core_value_sig4784, var_core_value_sigC39E, var_core_value_sig16C7, var_core_value_sig7481, var_core_value_sig08A3, var_core_value_sig77D8, var_core_value_sig78A3, var_core_value_sig649B, var_core_value_sig6256), this.unitID = var_core_value_sig8EF0, this.type = var_core_value_sig78AC;
  }
  async _init() {
    let var_core_value_sigE7A6 = await super._init();
    return this.disposeWithMe(this._commandService["onMutationExecutedForCollab"]((var_core_value_sigC4B1, var_core_value_sig1BD9) => {
      if (var_core_value_sigC4B1.type !== t.CommandType["MUTATION"] || var_core_value_sig1BD9 != null && var_core_value_sig1BD9.fromCollab || var_core_value_sig1BD9 != null && var_core_value_sig1BD9.onlyLocal) return;
      let var_core_value_sigE43E = var_core_value_sigC4B1.params;
      if ((var_core_value_sigE43E == null ? undefined : var_core_value_sigE43E.unitId) !== this.unitID) return;
      let var_core_value_sigA937 = var_core_value_sigC4B1,
        var_core_value_sigCAD5 = this._compressMutationService["interceptor"].fetchThroughInterceptors(this._compressMutationService["interceptor"].getInterceptPoints().COMPRESS_MUTATION_SEND)([var_core_value_sigA937], this._univerInstanceService) || [var_core_value_sigA937];
      this._onLocalMutation(var_core_value_sigCAD5[0]);
    })), var_core_value_sigE7A6;
  }
};
I = y([v(3, (0, t.Inject)(t.Injector)), v(4, (0, t.Inject)(e.CompressMutationService)), v(5, (0, t.Inject)(t.LocaleService)), v(6, (0, t.Inject)(e.RevisionService)), v(7, (0, t.Inject)(_)), v(8, t.IUniverInstanceService), v(9, t.ILogService), v(10, t.ICommandService), v(11, t.IPermissionService), v(12, (0, t.Optional)(C)), v(13, (0, t.Optional)(x))], I);
let L = class extends P {
  constructor(var_core_value_sigB505, var_core_value_sig7428, var_core_value_sig1DCE, var_core_value_sig0567, var_core_value_sigA7F3, var_core_value_sigEACD, var_core_value_sig901E, var_core_value_sigF7BB, var_core_value_sigFA38, var_core_value_sig102B, var_core_value_sigA7DB, var_core_value_sig5EEE, var_core_value_sig65B4, var_core_value_sigF98E, var_core_value_sigA470) {
    super(var_core_value_sigB505, var_core_value_sig1DCE, var_core_value_sig7428, var_core_value_sig0567, var_core_value_sigA7F3, var_core_value_sigEACD, var_core_value_sig901E, var_core_value_sigFA38, var_core_value_sig102B, var_core_value_sigA7DB, var_core_value_sig5EEE, var_core_value_sig65B4, var_core_value_sigF98E, var_core_value_sigA470), this.unitID = var_core_value_sigB505, this.type = var_core_value_sig7428, this._sheetTransformSelectionsService = var_core_value_sigF7BB;
  }
  _createHandler() {
    let var_core_value_sig19A1 = super._createHandler();
    return var_core_value_sig19A1.onTransformSelections = var_core_value_sigE503 => this._sheetTransformSelectionsService["transformSelections"](var_core_value_sigE503), var_core_value_sig19A1;
  }
  async _init() {
    let var_core_value_sig81F7 = await super._init();
    return this.disposeWithMe(this._commandService["onMutationExecutedForCollab"]((var_core_value_sig48DD, var_core_value_sig5E6A) => {
      if (var_core_value_sig48DD.type !== t.CommandType["MUTATION"] || var_core_value_sig5E6A != null && var_core_value_sig5E6A.fromCollab || var_core_value_sig5E6A != null && var_core_value_sig5E6A.onlyLocal) return;
      let var_core_value_sigB7FC = var_core_value_sig48DD.params;
      if ((var_core_value_sigB7FC == null ? undefined : var_core_value_sigB7FC.unitId) !== this.unitID) return;
      let var_core_value_sig9CD9 = var_core_value_sig48DD,
        var_core_value_sigFD0C = this._compressMutationService["interceptor"].fetchThroughInterceptors(this._compressMutationService["interceptor"].getInterceptPoints().COMPRESS_MUTATION_SEND)([var_core_value_sig9CD9], this._univerInstanceService) || [var_core_value_sig9CD9];
      this._onLocalMutation(var_core_value_sigFD0C[0]);
    })), var_core_value_sig81F7;
  }
};
L = y([v(3, (0, t.Inject)(t.Injector)), v(4, (0, t.Inject)(e.CompressMutationService)), v(5, (0, t.Inject)(t.LocaleService)), v(6, (0, t.Inject)(e.RevisionService)), v(7, (0, t.Inject)(S)), v(8, (0, t.Inject)(_)), v(9, t.IUniverInstanceService), v(10, t.ILogService), v(11, t.ICommandService), v(12, t.IPermissionService), v(13, (0, t.Optional)(C)), v(14, (0, t.Optional)(x))], L);
let R = class extends P {
  constructor(var_core_value_sigBE51, var_core_value_sigAAD1, var_core_value_sigBC1A, var_core_value_sig3F3A, var_core_value_sigA984, var_core_value_sigA504, var_core_value_sig05FF, var_core_value_sigFBF0, var_core_value_sig2F95, var_core_value_sigF0E1, var_core_value_sig2D8D, var_core_value_sigE5A6, var_core_value_sigF449, var_core_value_sig38C5) {
    super(var_core_value_sigBE51, var_core_value_sigBC1A, var_core_value_sigAAD1, var_core_value_sig3F3A, var_core_value_sigA984, var_core_value_sigA504, var_core_value_sig05FF, var_core_value_sigFBF0, var_core_value_sig2F95, var_core_value_sigF0E1, var_core_value_sig2D8D, var_core_value_sigE5A6, var_core_value_sigF449, var_core_value_sig38C5), this.unitID = var_core_value_sigBE51, this.type = var_core_value_sigAAD1;
  }
  async _init() {
    let var_core_value_sigC87D = await super._init();
    return this.disposeWithMe(this._commandService["onMutationExecutedForCollab"]((var_core_value_sig849B, var_core_value_sig5F1A) => {
      if (var_core_value_sig849B.type !== t.CommandType["MUTATION"] || var_core_value_sig5F1A != null && var_core_value_sig5F1A.fromCollab || var_core_value_sig5F1A != null && var_core_value_sig5F1A.onlyLocal) return;
      let var_core_value_sigB455 = var_core_value_sig849B.params;
      if ((var_core_value_sigB455 == null ? undefined : var_core_value_sigB455.unitId) !== this.unitID) return;
      let var_core_value_sig5241 = var_core_value_sig849B,
        var_core_value_sigC6E5 = this._compressMutationService["interceptor"].fetchThroughInterceptors(this._compressMutationService["interceptor"].getInterceptPoints().COMPRESS_MUTATION_SEND)([var_core_value_sig5241], this._univerInstanceService) || [var_core_value_sig5241];
      this._onLocalMutation(var_core_value_sigC6E5[0]);
    })), var_core_value_sigC87D;
  }
};
R = y([v(3, (0, t.Inject)(t.Injector)), v(4, (0, t.Inject)(e.CompressMutationService)), v(5, (0, t.Inject)(t.LocaleService)), v(6, (0, t.Inject)(e.RevisionService)), v(7, (0, t.Inject)(_)), v(8, t.IUniverInstanceService), v(9, t.ILogService), v(10, t.ICommandService), v(11, t.IPermissionService), v(12, (0, t.Optional)(C)), v(13, (0, t.Optional)(x))], R);
let z = class extends P {
  constructor(var_core_value_sigCCDC, var_core_value_sigC310, var_core_value_sigA4E8, var_core_value_sigDC07, var_core_value_sig3474, var_core_value_sig4E80, var_core_value_sigD23B, var_core_value_sig2B2A, var_core_value_sig0B5C, var_core_value_sig7D42, var_core_value_sig8FDE, var_core_value_sig78E6, var_core_value_sig541F, var_core_value_sig417B) {
    super(var_core_value_sigCCDC, var_core_value_sigA4E8, var_core_value_sigC310, var_core_value_sigDC07, var_core_value_sig3474, var_core_value_sig4E80, var_core_value_sigD23B, var_core_value_sig2B2A, var_core_value_sig0B5C, var_core_value_sig7D42, var_core_value_sig8FDE, var_core_value_sig78E6, var_core_value_sig541F, var_core_value_sig417B), this.unitID = var_core_value_sigCCDC, this.type = var_core_value_sigC310;
  }
  async _init() {
    let var_core_value_sigAA90 = await super._init();
    return this.disposeWithMe(this._commandService["onMutationExecutedForCollab"]((var_core_value_sigCEFB, var_core_value_sig1537) => {
      if (var_core_value_sigCEFB.type !== t.CommandType["MUTATION"] || var_core_value_sig1537 != null && var_core_value_sig1537.fromCollab || var_core_value_sig1537 != null && var_core_value_sig1537.onlyLocal) return;
      let var_core_value_sigE4C6 = var_core_value_sigCEFB.params;
      if ((var_core_value_sigE4C6 == null ? undefined : var_core_value_sigE4C6.unitId) !== this.unitID) return;
      let var_core_value_sig4313 = var_core_value_sigCEFB,
        var_core_value_sigFC87 = this._compressMutationService["interceptor"].fetchThroughInterceptors(this._compressMutationService["interceptor"].getInterceptPoints().COMPRESS_MUTATION_SEND)([var_core_value_sig4313], this._univerInstanceService) || [var_core_value_sig4313];
      this._onLocalMutation(var_core_value_sigFC87[0]);
    })), var_core_value_sigAA90;
  }
};
z = y([v(3, (0, t.Inject)(t.Injector)), v(4, (0, t.Inject)(e.CompressMutationService)), v(5, (0, t.Inject)(t.LocaleService)), v(6, (0, t.Inject)(e.RevisionService)), v(7, (0, t.Inject)(_)), v(8, t.IUniverInstanceService), v(9, t.ILogService), v(10, t.ICommandService), v(11, t.IPermissionService), v(12, (0, t.Optional)(C)), v(13, (0, t.Optional)(x))], z);
let B = class extends P {
  constructor(var_core_value_sigE92D, var_core_value_sig9940, var_core_value_sig682D, var_core_value_sig1435, var_core_value_sig4082, var_core_value_sigC049, var_core_value_sigE5C3, var_core_value_sigCCAA, var_core_value_sigF32D, var_core_value_sig9427, var_core_value_sig21F4, var_core_value_sigA345, var_core_value_sigA468, var_core_value_sig1561) {
    super(var_core_value_sigE92D, var_core_value_sig682D, var_core_value_sig9940, var_core_value_sig1435, var_core_value_sig4082, var_core_value_sigC049, var_core_value_sigE5C3, var_core_value_sigCCAA, var_core_value_sigF32D, var_core_value_sig9427, var_core_value_sig21F4, var_core_value_sigA345, var_core_value_sigA468, var_core_value_sig1561), this.unitID = var_core_value_sigE92D, this.type = var_core_value_sig9940;
  }
  async _init() {
    let var_core_value_sigDF14 = await super._init();
    return this.disposeWithMe(this._commandService["onMutationExecutedForCollab"]((var_core_value_sig156F, var_core_value_sigDD51) => {
      if (var_core_value_sig156F.type !== t.CommandType["MUTATION"] || var_core_value_sigDD51 != null && var_core_value_sigDD51.fromCollab || var_core_value_sigDD51 != null && var_core_value_sigDD51.onlyLocal) return;
      let var_core_value_sigF057 = var_core_value_sig156F.params;
      if ((var_core_value_sigF057 == null ? undefined : var_core_value_sigF057.unitId) !== this.unitID) return;
      let var_core_value_sig72F6 = var_core_value_sig156F,
        var_core_value_sig9FBA = this._compressMutationService["interceptor"].fetchThroughInterceptors(this._compressMutationService["interceptor"].getInterceptPoints().COMPRESS_MUTATION_SEND)([var_core_value_sig72F6], this._univerInstanceService) || [var_core_value_sig72F6];
      this._onLocalMutation(var_core_value_sig9FBA[0]);
    })), var_core_value_sigDF14;
  }
};
B = y([v(3, (0, t.Inject)(t.Injector)), v(4, (0, t.Inject)(e.CompressMutationService)), v(5, (0, t.Inject)(t.LocaleService)), v(6, (0, t.Inject)(e.RevisionService)), v(7, (0, t.Inject)(_)), v(8, t.IUniverInstanceService), v(9, t.ILogService), v(10, t.ICommandService), v(11, t.IPermissionService), v(12, (0, t.Optional)(C)), v(13, (0, t.Optional)(x))], B);
const We = (0, t.createIdentifier)("univer-pro.collaboration-client.network-condition.service");
function Ge(var_core_value_sig09C4) {
  let var_core_value_sig8E3E = var_core_value_sig09C4.data,
    var_core_value_sigC3D3 = JSON.parse(var_core_value_sig8E3E);
  switch (var_core_value_sigC3D3.cmd) {
    case a.CombCmd["HEARTBEAT"]:
    case a.CombCmd["HELLO"]:
      {
        let var_core_value_sigFE01 = var_core_value_sigC3D3.infoRsp;
        return {
          ...var_core_value_sigC3D3,
          data: var_core_value_sigFE01,
          cmd: var_core_value_sigC3D3.cmd
        };
      }
    case a.CombCmd["JOIN"]:
      {
        let var_core_value_sigA2CE = var_core_value_sigC3D3.joinRsp;
        return {
          ...var_core_value_sigC3D3,
          data: var_core_value_sigA2CE,
          cmd: var_core_value_sigC3D3.cmd
        };
      }
    case a.CombCmd["RECV"]:
      {
        let var_core_value_sig1975 = var_core_value_sigC3D3.collaMsg;
        switch (var_core_value_sig1975.eventID) {
          case e.CollaborationEvent["PERMISSION_REJ"]:
            var var_core_value_sig1451;
            return {
              ...var_core_value_sigC3D3,
              data: {
                ...var_core_value_sig1975,
                data: (var_core_value_sig1451 = var_core_value_sig1975.permissionRejEvent) == null ? undefined : var_core_value_sig1451.cs
              },
              cmd: var_core_value_sigC3D3.cmd
            };
          case e.CollaborationEvent["CHANGESET_ACK"]:
            var var_core_value_sigAD57;
            return {
              ...var_core_value_sigC3D3,
              data: {
                ...var_core_value_sig1975,
                data: (var_core_value_sigAD57 = var_core_value_sig1975.csAckEvent) == null ? undefined : var_core_value_sigAD57.cs
              },
              cmd: var_core_value_sigC3D3.cmd
            };
          case e.CollaborationEvent["NEW_CHANGESETS"]:
            var var_core_value_sig58A8;
            return {
              ...var_core_value_sigC3D3,
              data: {
                ...var_core_value_sig1975,
                data: (var_core_value_sig58A8 = var_core_value_sig1975.newCsEvent) == null ? undefined : var_core_value_sig58A8.cs
              },
              cmd: var_core_value_sigC3D3.cmd
            };
          case e.CollaborationEvent["CHANGESET_REJ"]:
            var var_core_value_sigEC1A;
            return {
              ...var_core_value_sigC3D3,
              data: {
                ...var_core_value_sig1975,
                data: (var_core_value_sigEC1A = var_core_value_sig1975.csRejEvent) == null ? undefined : var_core_value_sigEC1A.cs
              },
              cmd: var_core_value_sigC3D3.cmd
            };
          case e.CollaborationEvent["CHANGESET_SHOULD_RETRY"]:
            var var_core_value_sigBDED;
            return {
              ...var_core_value_sigC3D3,
              data: {
                ...var_core_value_sig1975,
                data: (var_core_value_sigBDED = var_core_value_sig1975.csShouldRetryEvent) == null ? undefined : var_core_value_sigBDED.cs
              },
              cmd: var_core_value_sigC3D3.cmd
            };
          case e.CollaborationEvent["UPDATE_CURSOR"]:
            return {
              ...var_core_value_sigC3D3,
              data: {
                ...var_core_value_sig1975,
                data: var_core_value_sig1975.updateCursorEvent
              },
              cmd: var_core_value_sigC3D3.cmd
            };
          case e.CollaborationEvent["USERS_ENTER"]:
            return {
              ...var_core_value_sigC3D3,
              data: {
                ...var_core_value_sig1975,
                data: var_core_value_sig1975.joinEvent
              },
              cmd: var_core_value_sigC3D3.cmd
            };
          case e.CollaborationEvent["USERS_LEAVE"]:
            return {
              ...var_core_value_sigC3D3,
              data: {
                ...var_core_value_sig1975,
                data: var_core_value_sig1975.leaveEvent
              },
              cmd: var_core_value_sigC3D3.cmd
            };
          case e.CollaborationEvent["LIVESHARE_NEW_HOST"]:
            return {
              ...var_core_value_sigC3D3,
              data: {
                ...var_core_value_sig1975,
                data: var_core_value_sig1975.liveShareNewHost
              },
              cmd: var_core_value_sigC3D3.cmd
            };
          case e.CollaborationEvent["LIVESHARE_FETCH_OPERATIONS"]:
          case e.CollaborationEvent["LIVESHARE_OPERATION"]:
            return {
              ...var_core_value_sigC3D3,
              data: {
                ...var_core_value_sig1975,
                data: var_core_value_sig1975.liveShareOperation
              },
              cmd: var_core_value_sigC3D3.cmd
            };
          case e.CollaborationEvent["LIVESHARE_TERMINATE"]:
            return {
              ...var_core_value_sigC3D3,
              data: {
                ...var_core_value_sig1975,
                data: var_core_value_sig1975.liveShareNewHost
              },
              cmd: var_core_value_sigC3D3.cmd
            };
          case e.CollaborationEvent["MSG_FOR_ERROR"]:
            return {
              ...var_core_value_sigC3D3,
              data: var_core_value_sig1975,
              cmd: var_core_value_sigC3D3.cmd
            };
          case e.CollaborationEvent["COMMENT_UPDATE"]:
            return {
              ...var_core_value_sigC3D3,
              data: {
                ...var_core_value_sig1975,
                data: var_core_value_sig1975.commentUpdateEvent
              },
              cmd: var_core_value_sigC3D3.cmd
            };
          case e.CollaborationEvent["UPDATE_PERMISSION_OBJ"]:
            return {
              ...var_core_value_sigC3D3,
              data: {
                ...var_core_value_sig1975,
                data: var_core_value_sig1975.updatePermissionObjEvent
              },
              cmd: var_core_value_sigC3D3.cmd
            };
          case e.CollaborationEvent["SHOULD_CLOSE_CONN"]:
            return {
              ...var_core_value_sigC3D3,
              data: {
                ...var_core_value_sig1975,
                data: var_core_value_sig1975.shouldCloseConn
              },
              cmd: var_core_value_sigC3D3.cmd
            };
          case e.CollaborationEvent["UNISCRIPT_RUN"]:
            return {
              ...var_core_value_sigC3D3,
              data: {
                ...var_core_value_sig1975,
                data: var_core_value_sig1975.uniscriptRunEvent
              },
              cmd: var_core_value_sigC3D3.cmd
            };
          default:
            return var_core_value_sigC3D3;
        }
      }
    default:
      return var_core_value_sigC3D3;
  }
}
function Ke(var_core_value_sig4BFF) {
  switch (var_core_value_sig4BFF.cmd) {
    case a.CombCmd["HEARTBEAT"]:
    case a.CombCmd["HELLO"]:
      return JSON.stringify({
        cmd: var_core_value_sig4BFF.cmd,
        routeKey: var_core_value_sig4BFF.routeKey
      });
    case a.CombCmd["INGEST"]:
      {
        let var_core_value_sig6EA1;
        switch (var_core_value_sig4BFF.data["eventID"]) {
          case e.CollaborationEvent["UPDATE_CURSOR"]:
            var_core_value_sig6EA1 = {
              eventID: e.CollaborationEvent["UPDATE_CURSOR"],
              updateCursorEvent: var_core_value_sig4BFF.data["data"]
            };
            break;
          case e.CollaborationEvent["USERS_LEAVE"]:
            var_core_value_sig6EA1 = {
              eventID: e.CollaborationEvent["USERS_LEAVE"],
              leaveEvent: var_core_value_sig4BFF.data["data"]
            };
            break;
          case e.CollaborationEvent["USERS_ENTER"]:
            var_core_value_sig6EA1 = {
              eventID: e.CollaborationEvent["USERS_ENTER"],
              joinEvent: var_core_value_sig4BFF.data["data"]
            };
            break;
          case e.CollaborationEvent["LIVESHARE_NEW_HOST"]:
            var_core_value_sig6EA1 = {
              eventID: e.CollaborationEvent["LIVESHARE_NEW_HOST"],
              liveShareNewHost: var_core_value_sig4BFF.data["data"]
            };
            break;
          case e.CollaborationEvent["LIVESHARE_OPERATION"]:
            var_core_value_sig6EA1 = {
              eventID: e.CollaborationEvent["LIVESHARE_OPERATION"],
              liveShareOperation: var_core_value_sig4BFF.data["data"]
            };
            break;
          case e.CollaborationEvent["LIVESHARE_TERMINATE"]:
            var_core_value_sig6EA1 = {
              eventID: e.CollaborationEvent["LIVESHARE_TERMINATE"],
              liveShareTerminate: var_core_value_sig4BFF.data["data"]
            };
            break;
          case e.CollaborationEvent["LIVESHARE_REQUEST_HOST"]:
            var_core_value_sig6EA1 = {
              eventID: e.CollaborationEvent["LIVESHARE_REQUEST_HOST"],
              liveShareRequestHost: var_core_value_sig4BFF.data["data"]
            };
            break;
          case e.CollaborationEvent["LIVESHARE_FETCH_OPERATIONS"]:
            var_core_value_sig6EA1 = {
              eventID: e.CollaborationEvent["LIVESHARE_FETCH_OPERATIONS"]
            };
            break;
          default:
            var_core_value_sig6EA1 = {
              eventID: var_core_value_sig4BFF.data["eventID"]
            };
        }
        return JSON.stringify({
          cmd: var_core_value_sig4BFF.cmd,
          routeKey: var_core_value_sig4BFF.routeKey,
          collaMsg: var_core_value_sig6EA1
        });
      }
    case a.CombCmd["JOIN"]:
      return JSON.stringify({
        cmd: var_core_value_sig4BFF.cmd,
        routeKey: var_core_value_sig4BFF.routeKey,
        joinReq: var_core_value_sig4BFF.data
      });
    case a.CombCmd["LEAVE"]:
      return JSON.stringify({
        cmd: var_core_value_sig4BFF.cmd,
        routeKey: var_core_value_sig4BFF.routeKey,
        leaveReq: var_core_value_sig4BFF.data
      });
    default:
      throw Error("[serializeCombRequest]: should not fall into default branch!");
  }
}
const qe = (0, t.createIdentifier)("univer-pro.collaboration-client-socket-service");
function Je(var_core_value_sig40E7, var_core_value_sigEDBA, var_core_value_sigE863) {
  return var_core_value_sig40E7 + "/" + var_core_value_sigEDBA + "/unit/" + var_core_value_sigE863 + "/new_changes";
}
let Ye = class extends t.Disposable {
  constructor(var_core_value_sig842F, var_core_value_sigC4C0, var_core_value_sig214A, var_core_value_sigCCC3, var_core_value_sig986E) {
    super(), this._injector = var_core_value_sig842F, this._httpService = var_core_value_sigC4C0, this._configService = var_core_value_sig214A, this._logService = var_core_value_sigCCC3, this._snapshotServerService = var_core_value_sig986E;
  }
  _doCreateSocket(var_core_value_sig537C) {
    let var_core_value_sigBBBC = this._injector["get"](l.ISocketService);
    if (!var_core_value_sigBBBC) throw Error("[CollaborationSocketService]: failed to get web socket factory!");
    let var_core_value_sig5440 = var_core_value_sigBBBC.createSocket(var_core_value_sig537C);
    if (!var_core_value_sig5440) throw Error("[CollaborationSocketService]: failed to create socket!");
    let var_core_value_sigE28B = new t["DisposableCollection"](),
      var_core_value_sig0FD9 = new i.Subject();
    var_core_value_sigE28B.add(var_core_value_sig5440.close$["subscribe"](var_core_value_sig029F => var_core_value_sig0FD9.next(var_core_value_sig029F))), var_core_value_sigE28B.add((0, t.toDisposable)(() => var_core_value_sig0FD9.complete()));
    let var_core_value_sig5649 = new i.Subject();
    var_core_value_sigE28B.add(var_core_value_sig5440.error$["subscribe"](var_core_value_sig3767 => var_core_value_sig5649.next(var_core_value_sig3767))), var_core_value_sigE28B.add((0, t.toDisposable)(() => var_core_value_sig5649.complete()));
    let var_core_value_sigAF82 = new i.Subject();
    var_core_value_sigE28B.add(var_core_value_sig5440.message$["subscribe"](var_core_value_sig670B => {
      let var_core_value_sig6912 = Ge(var_core_value_sig670B);
      var_core_value_sigAF82.next(var_core_value_sig6912);
    })), var_core_value_sigE28B.add((0, t.toDisposable)(() => var_core_value_sigAF82.complete()));
    let var_core_value_sig21A2,
      var_core_value_sig5C1D = () => {
        var_core_value_sig5649.next(new Event("connection\x20error")), var_core_value_sig0FD9.next(new Event("connection error")), var_core_value_sig21A2.close();
      };
    return var_core_value_sig21A2 = {
      memberID: "",
      close$: var_core_value_sig0FD9.asObservable(),
      error$: var_core_value_sig5649.asObservable(),
      open$: var_core_value_sig5440.open$,
      message$: var_core_value_sigAF82.asObservable(),
      send: var_core_value_sigE235 => {
        if (var_core_value_sigE235.cmd === a.CombCmd["INGEST"]) {
          if (var_core_value_sigE235.data["eventID"] === e.CollaborationEvent["SUBMIT_CHANGESET"]) {
            this._submitChangeset(var_core_value_sig21A2, var_core_value_sigE235.data).catch(var_core_value_sig2AD0 => {
              this._logService["error"](var_core_value_sig2AD0), var_core_value_sig5C1D();
            });
            return;
          }
          if (var_core_value_sigE235.data["eventID"] === e.CollaborationEvent["FETCH_MISSING"]) {
            let var_core_value_sigF704 = var_core_value_sigE235.data;
            this._fetchMissChangesets(var_core_value_sigF704).then(var_core_value_sig3EEE => {
              var_core_value_sigAF82.next({
                cmd: a.CombCmd["RECV"],
                code: a.CmdRspCode["OK"],
                routeKey: var_core_value_sigF704.data["unitID"],
                routeType: "",
                data: {
                  eventID: e.CollaborationEvent["PSEUDO_FETCH_MISSING_RESULT"],
                  data: {
                    changesets: var_core_value_sig3EEE
                  }
                }
              });
            }).catch(var_core_value_sigBC46 => {
              this._logService["error"](var_core_value_sigBC46), var_core_value_sig5C1D();
            });
            return;
          }
        }
        var_core_value_sig5440.send(Ke(var_core_value_sigE235));
      },
      close: () => {
        var_core_value_sig5440.close(), var_core_value_sigE28B.dispose();
      }
    }, var_core_value_sig21A2;
  }
  async _submitChangeset(var_core_value_sig4CBA, var_core_value_sig8E65) {
    let {
        unitType: var_core_value_sig772C,
        unitID: var_core_value_sigF309,
        changeset: var_core_value_sig44F9
      } = var_core_value_sig8E65.data,
      var_core_value_sigE532 = {
        unitID: var_core_value_sigF309,
        memberID: var_core_value_sig4CBA.memberID,
        type: var_core_value_sig772C,
        changeset: (0, e.parseChangesetToProtocol)(var_core_value_sig44F9)
      },
      var_core_value_sigF381 = this._configService["getConfig"](m),
      var_core_value_sigCB92 = Je((var_core_value_sigF381 == null ? undefined : var_core_value_sigF381.collabSubmitChangesetUrl) ?? "/universer-api/comb", var_core_value_sig772C, var_core_value_sigF309);
    try {
      await this._httpService["post"](var_core_value_sigCB92, {
        body: var_core_value_sigE532
      });
    } catch (var_core_value_sig7664) {
      throw this._logService["error"]("[CollaborationSession]", "submit changeset error!"), var_core_value_sig7664;
    }
  }
  async _fetchMissChangesets(var_core_value_sigC844) {
    let {
      unitID: var_core_value_sig2ED4,
      from: var_core_value_sig0477,
      to: var_core_value_sig6FDF,
      unitType: var_core_value_sig27C4
    } = var_core_value_sigC844.data;
    return (await this._snapshotServerService["fetchMissingChangesets"]({
      metadata: undefined
    }, {
      unitID: var_core_value_sig2ED4,
      type: var_core_value_sig27C4,
      from: var_core_value_sig0477,
      to: var_core_value_sig6FDF
    })).changesets["map"](var_core_value_sig2281 => ((var_core_value_sig2281.mutations === null || var_core_value_sig2281.mutations === undefined) && (var_core_value_sig2281.mutations = []), var_core_value_sig2281));
  }
};
Ye = y([v(0, (0, t.Inject)(t.Injector)), v(1, (0, t.Inject)(l.HTTPService)), v(2, t.IConfigService), v(3, t.ILogService), v(4, e.ISnapshotServerService)], Ye);
const Xe = (0, t.createIdentifier)("univer-pro.collaboration-client-adapter-service");
function Ze(var_core_value_sig04B4 = {}) {
  return var_core_value_sig04B4.resolveUnit ? {
    resolveUnit: var_core_value_sig04B4.resolveUnit
  } : {
    resolveUnit: var_core_value_sig3E1A => ({
      target: {
        unitId: var_core_value_sig3E1A.unitId,
        unitType: var_core_value_sig3E1A.unitType
      }
    })
  };
}
function Qe(var_core_value_sig1C07, var_core_value_sig93D6, var_core_value_sigDD05) {
  let var_core_value_sig3932 = var_core_value_sigDD05.target["endpoint"];
  if (var_core_value_sig3932 != null && var_core_value_sig3932.trim() === "") throw Error("COLLABORATION_ENDPOINT_INVALID");
  if (!var_core_value_sigDD05.target["unitId"]) throw Error("COLLABORATION_SESSION_TARGET_UNIT_ID_REQUIRED");
  return {
    localUnitId: var_core_value_sig1C07,
    unitType: var_core_value_sig93D6,
    target: {
      endpoint: var_core_value_sig3932,
      unitId: var_core_value_sigDD05.target["unitId"],
      unitType: var_core_value_sigDD05.target["unitType"] ?? var_core_value_sig93D6
    },
    changeset: var_core_value_sigDD05.changeset
  };
}
let V = class extends t.Disposable {
  constructor(var_core_value_sig7FB0, var_core_value_sig5215, var_core_value_sig5204, var_core_value_sig5E11, var_core_value_sig4D58, var_core_value_sig2DBD, var_core_value_sig424E) {
    super(), this._injector = var_core_value_sig7FB0, this._logService = var_core_value_sig5215, this._configService = var_core_value_sig5204, this._socketService = var_core_value_sig5E11, this._collaborationUIEventService = var_core_value_sig4D58, this._adapter = var_core_value_sig2DBD, this._networkConditionService = var_core_value_sig424E, g(this, "_sessions", new Map()), g(this, "_pendingSessions", new Map()), g(this, "_sessionChannels", new Map()), g(this, "_socketChannels", new Map()), g(this, "socket$", this._getSocketChannel(undefined).socket$["asObservable"]()), g(this, "_status$", new i["BehaviorSubject"](0)), g(this, "status$", this._status$["asObservable"]()), this._listenToNetworkCondition();
  }
  _listenToNetworkCondition() {
    this._networkConditionService && this.disposeWithMe(this._networkConditionService["online$"].subscribe(var_core_value_sig5E86 => {
      var_core_value_sig5E86 && this.reconnect(), var_core_value_sig5E86 || this._socketChannels["forEach"](var_core_value_sigD0A8 => this._onOffline(var_core_value_sigD0A8));
    }));
  }
  dispose() {
    super.dispose(), this._socketChannels["forEach"](var_core_value_sig6998 => {
      var var_core_value_sigF639, var_core_value_sigEAE5;
      (var_core_value_sigF639 = var_core_value_sig6998.socketMessageSubscription) == null || var_core_value_sigF639.unsubscribe(), var_core_value_sig6998.socketMessageSubscription = null, this._clearRetryConnectingTimer(var_core_value_sig6998), this._clearTimeoutTimer(var_core_value_sig6998), this._clearHeartbeatTimer(var_core_value_sig6998), (var_core_value_sigEAE5 = var_core_value_sig6998.socket$["getValue"]()) == null || var_core_value_sigEAE5.close(), var_core_value_sig6998.socket$["complete"]();
    }), this._socketChannels["clear"](), this._sessions["forEach"](var_core_value_sigE94C => var_core_value_sigE94C.dispose()), this._sessions["clear"](), this._sessionChannels["clear"](), this._status$["complete"]();
  }
  async requireSession(var_core_value_sigF481, var_core_value_sigD7F2) {
    if (this._sessions["has"](var_core_value_sigF481)) return this._sessions["get"](var_core_value_sigF481);
    let var_core_value_sig7CF3 = this._pendingSessions["get"](var_core_value_sigF481);
    if (var_core_value_sig7CF3) return var_core_value_sig7CF3;
    let var_core_value_sig9DC6 = this._createSession(var_core_value_sigF481, var_core_value_sigD7F2);
    this._pendingSessions["set"](var_core_value_sigF481, var_core_value_sig9DC6);
    try {
      return await var_core_value_sig9DC6;
    } finally {
      this._pendingSessions["delete"](var_core_value_sigF481);
    }
  }
  async _createSession(var_core_value_sig6643, var_core_value_sig4124) {
    let var_core_value_sigBF1C = await this._resolveSessionIdentity(var_core_value_sig6643, var_core_value_sig4124),
      var_core_value_sigEEEF = this._getSocketChannel(var_core_value_sigBF1C.target["endpoint"]);
    this._tryEnsureSocket(var_core_value_sigEEEF);
    let var_core_value_sig9A01 = this._injector["createInstance"](ve, var_core_value_sigBF1C, var_core_value_sigEEEF.socket$["asObservable"]());
    return this._sessions["set"](var_core_value_sig6643, var_core_value_sig9A01), this._sessionChannels["set"](var_core_value_sig6643, var_core_value_sigEEEF.endpointKey), var_core_value_sig9A01;
  }
  closeSession(var_core_value_sig674F) {
    let var_core_value_sigC8F6 = this._sessions["get"](var_core_value_sig674F),
      var_core_value_sig8A26 = this._sessionChannels["get"](var_core_value_sig674F);
    if (var_core_value_sigC8F6 && (this._sessions["delete"](var_core_value_sig674F), this._sessionChannels["delete"](var_core_value_sig674F), var_core_value_sigC8F6.close()), var_core_value_sig8A26 && !this._hasSessionsForEndpoint(var_core_value_sig8A26)) {
      var var_core_value_sigD073;
      let var_core_value_sig6D47 = this._socketChannels["get"](var_core_value_sig8A26);
      var_core_value_sig6D47 == null || (var_core_value_sigD073 = var_core_value_sig6D47.socket$["getValue"]()) == null || var_core_value_sigD073.close();
    }
  }
  reconnect() {
    (this._socketChannels["size"] ? [...this._socketChannels["values"]()] : [this._getSocketChannel(undefined)]).forEach(var_core_value_sigCB82 => {
      var_core_value_sigCB82.retryCount = 0, this._clearRetryConnectingTimer(var_core_value_sigCB82), this._tryReconnect(var_core_value_sigCB82);
    });
  }
  _clearRetryConnectingTimer(var_core_value_sigF631) {
    var_core_value_sigF631.retryConnectingTimer != null && (clearTimeout(var_core_value_sigF631.retryConnectingTimer), var_core_value_sigF631.retryConnectingTimer = null);
  }
  async _createSocket(var_core_value_sig2278) {
    let var_core_value_sig7053 = this._configService["getConfig"](m),
      var_core_value_sig52F1 = var_core_value_sig2278.endpoint ?? (var_core_value_sig7053 == null ? undefined : var_core_value_sig7053.collabWebSocketUrl) ?? "ws://127.0.0.1:8000/universer-api/comb/connect",
      var_core_value_sig1E74 = await this._socketService["createSocket"](var_core_value_sig52F1);
    return var_core_value_sig2278.candidateSocket = var_core_value_sig1E74, var_core_value_sig1E74;
  }
  async _tryEnsureSocket(var_core_value_sig1E84) {
    try {
      let var_core_value_sigCF4E = var_core_value_sig1E84.socket$["getValue"]() ?? var_core_value_sig1E84.candidateSocket ?? (await this._createSocket(var_core_value_sig1E84));
      if (var_core_value_sigCF4E) {
        var var_core_value_sig133B;
        let var_core_value_sigF4B9 = var_core_value_sigCF4E.send;
        var_core_value_sigCF4E.send = var_core_value_sig2BCF => (var_core_value_sig2BCF.cmd !== a.CombCmd["LEAVE"] && this._rescheduleHeartbeat(var_core_value_sig1E84), var_core_value_sigF4B9.apply(var_core_value_sigCF4E, [var_core_value_sig2BCF])), (var_core_value_sig133B = var_core_value_sig1E84.socketMessageSubscription) == null || var_core_value_sig133B.unsubscribe(), var_core_value_sig1E84.socketMessageSubscription = null, var_core_value_sig1E84.socketMessageSubscription = var_core_value_sigCF4E.message$["subscribe"](var_core_value_sig0D69 => this._onMessage(var_core_value_sig1E84, var_core_value_sigCF4E, var_core_value_sig0D69)), var_core_value_sigCF4E.error$["pipe"]((0, s.take)(1)).subscribe(var_core_value_sig480E => this._logService["error"]("[CollaborationSessionService]:\x20socket\x20error", var_core_value_sig480E)), var_core_value_sigCF4E.open$["pipe"]((0, s.take)(1)).subscribe(() => {
          this._onConnectionOpen(var_core_value_sig1E84, var_core_value_sigCF4E);
        }), var_core_value_sigCF4E.close$["pipe"]((0, s.take)(1)).subscribe(var_core_value_sig26DB => {
          this._logService["debug"]("[CollaborationSessionService]", "socket close", var_core_value_sig26DB), this._onConnectionFailed(var_core_value_sig1E84);
        });
      }
    } catch (var_core_value_sig6CAD) {
      this._logService["error"](var_core_value_sig6CAD), this._onConnectionFailed(var_core_value_sig1E84);
    }
  }
  _onConnectionOpen(var_core_value_sig69B8, var_core_value_sig983D) {
    this._logService["debug"]("[CollaborationSessionService]", "socket open."), var_core_value_sig983D.send({
      cmd: a.CombCmd["HELLO"]
    }), this._rescheduleHeartbeat(var_core_value_sig69B8);
  }
  _onOffline(var_core_value_sig9A03) {
    var_core_value_sig9A03.socketReady = false, var_core_value_sig9A03.candidateSocket = null, this._status$["next"](2), var_core_value_sig9A03.socket$["next"](null), this._clearTimeoutTimer(var_core_value_sig9A03), this._clearHeartbeatTimer(var_core_value_sig9A03);
  }
  _onConnectionFailed(var_core_value_sig3363) {
    this._onOffline(var_core_value_sig3363), this._hasSessionsForEndpoint(var_core_value_sig3363.endpointKey) && (var_core_value_sig3363.retryCount < (this._configService["getConfig"]("RETRY_CONNECTING_MAX_COUNT") ?? 3) ? (this._collaborationUIEventService["emitEvent"]({
      id: "SOCKET_FAILED_RETRY"
    }), this._tryReconnect(var_core_value_sig3363)) : this._collaborationUIEventService["emitEvent"]({
      id: "SOCKET_FAILED"
    }));
  }
  _tryReconnect(var_core_value_sigF64A) {
    let var_core_value_sig25EC = var_core_value_sigF64A.retryCount,
      var_core_value_sigA790 = this._configService["getConfig"](m),
      var_core_value_sig9A5E = var_core_value_sig25EC === 0 ? 0 : ((var_core_value_sigA790 == null ? undefined : var_core_value_sigA790.retryConnectingInterval) ?? 20000) * 2 ** var_core_value_sig25EC;
    var_core_value_sigF64A.retryConnectingTimer = setTimeout(() => {
      clearTimeout(var_core_value_sigF64A.retryConnectingTimer), var_core_value_sigF64A.retryConnectingTimer = null, this._tryEnsureSocket(var_core_value_sigF64A);
    }, var_core_value_sig9A5E), var_core_value_sigF64A.retryCount += 1;
  }
  async _resolveSessionIdentity(var_core_value_sig01B9, var_core_value_sigD6A9) {
    return Qe(var_core_value_sig01B9, var_core_value_sigD6A9, await this._adapter["resolveUnit"]({
      unitId: var_core_value_sig01B9,
      unitType: var_core_value_sigD6A9
    }));
  }
  _onMessage(var_core_value_sig0FCF, var_core_value_sigCF96, var_core_value_sigC4E9) {
    let {
      cmd: var_core_value_sigF612
    } = var_core_value_sigC4E9;
    var_core_value_sigF612 === a.CombCmd["HELLO"] && !var_core_value_sig0FCF.socketReady && (var_core_value_sigCF96.memberID = var_core_value_sigC4E9.data["memberID"], var_core_value_sig0FCF.socket$["next"](var_core_value_sigCF96), this._status$["next"](3), var_core_value_sig0FCF.socketReady = true, var_core_value_sig0FCF.candidateSocket = null), var_core_value_sigF612 === a.CombCmd["HEARTBEAT"] && this._clearTimeoutTimer(var_core_value_sig0FCF), this._rescheduleHeartbeat(var_core_value_sig0FCF);
  }
  _hasSessionsForEndpoint(var_core_value_sigAA6C) {
    return [...this._sessionChannels["values"]()].some(var_core_value_sig8CF5 => var_core_value_sig8CF5 === var_core_value_sigAA6C);
  }
  _getSocketChannel(var_core_value_sig8BFA) {
    let var_core_value_sig236B = var_core_value_sig8BFA ?? "",
      var_core_value_sig1951 = this._socketChannels["get"](var_core_value_sig236B);
    if (var_core_value_sig1951) return var_core_value_sig1951;
    let var_core_value_sigFEA0 = {
      endpointKey: var_core_value_sig236B,
      endpoint: var_core_value_sig8BFA,
      socket$: new i.BehaviorSubject(undefined),
      candidateSocket: null,
      socketReady: false,
      socketMessageSubscription: null,
      retryConnectingTimer: null,
      retryCount: 0,
      sendHeartbeatTimer: null,
      timeoutTimer: null
    };
    return this._socketChannels["set"](var_core_value_sig236B, var_core_value_sigFEA0), var_core_value_sigFEA0;
  }
  _rescheduleHeartbeat(var_core_value_sig931A) {
    this._clearHeartbeatTimer(var_core_value_sig931A), var_core_value_sig931A.sendHeartbeatTimer = setTimeout(() => this._sendHeartbeat(var_core_value_sig931A), this._configService["getConfig"]("HEARTBEAT_INTERVAL") ?? 30000);
  }
  _sendHeartbeat(var_core_value_sigEE7D) {
    var_core_value_sigEE7D.socket$["getValue"]().send({
      cmd: a.CombCmd["HEARTBEAT"]
    }), this._waitForHeartbeatResponse(var_core_value_sigEE7D);
  }
  _waitForHeartbeatResponse(var_core_value_sig3585) {
    var_core_value_sig3585.timeoutTimer = setTimeout(() => this._onConnectionFailed(var_core_value_sig3585), this._configService["getConfig"]("HEARTBEAT_TIMEOUT") ?? 20000);
  }
  _clearHeartbeatTimer(var_core_value_sig31A8) {
    var_core_value_sig31A8.sendHeartbeatTimer != null && (clearTimeout(var_core_value_sig31A8.sendHeartbeatTimer), var_core_value_sig31A8.sendHeartbeatTimer = null);
  }
  _clearTimeoutTimer(var_core_value_sigA4DA) {
    var_core_value_sigA4DA.timeoutTimer != null && (clearTimeout(var_core_value_sigA4DA.timeoutTimer), var_core_value_sigA4DA.timeoutTimer = null);
  }
};
V = y([v(0, (0, t.Inject)(t.Injector)), v(1, t.ILogService), v(2, t.IConfigService), v(3, qe), v(4, (0, t.Inject)(_)), v(5, Xe), v(6, (0, t.Optional)(We))], V);
let H = class extends t.RxDisposable {
  constructor(var_core_value_sig6FC0, var_core_value_sig6217, var_core_value_sigB805, var_core_value_sig4FAE) {
    var var_core_value_sig1FCC;
    super(), this._injector = var_core_value_sig6FC0, this._collabSessionService = var_core_value_sig6217, this._configService = var_core_value_sigB805, this._univerInstanceService = var_core_value_sig4FAE, g(this, "_entities", new Map()), g(this, "_entityInit$", new i["Subject"]()), g(this, "entityInit$", this._entityInit$["asObservable"]()), ((var_core_value_sig1FCC = this._configService["getConfig"]("collaboration-client.config")) == null ? undefined : var_core_value_sig1FCC.enableCollaboration) !== false && this._init();
  }
  dispose() {
    super.dispose(), this._entities["forEach"](var_core_value_sigDDD7 => var_core_value_sigDDD7.dispose()), this._entities["clear"]();
  }
  getCollabEntity(var_core_value_sigB7F9) {
    return this._entities["get"](var_core_value_sigB7F9) ?? null;
  }
  getCollabEntity$(var_core_value_sigB1A2) {
    let var_core_value_sig526D = this.getCollabEntity(var_core_value_sigB1A2);
    return var_core_value_sig526D ? (0, i.of)(var_core_value_sig526D) : this._entityInit$["pipe"]((0, s.filter)(var_core_value_sigB2CE => var_core_value_sigB2CE.unitID === var_core_value_sigB1A2));
  }
  readyForCollab(var_core_value_sigBDB5) {
    return (0, i.firstValueFrom)(this.getCollabEntity$(var_core_value_sigBDB5).pipe((0, s.map)(() => undefined)));
  }
  _init() {
    this._univerInstanceService["getTypeOfUnitAdded$"](t.UniverInstanceType["UNIVER_SHEET"]).pipe((0, i.takeUntil)(this.dispose$), (0, s.delay)(16)).subscribe(async var_core_value_sig443C => {
      let var_core_value_sig39B1 = var_core_value_sig443C.unit["getUnitId"](),
        var_core_value_sig210D = await this._startCollaboration(var_core_value_sig39B1, t.UniverInstanceType["UNIVER_SHEET"]);
      this._entities["set"](var_core_value_sig39B1, var_core_value_sig210D);
    }), this._univerInstanceService["getTypeOfUnitAdded$"](t.UniverInstanceType["UNIVER_DOC"]).pipe((0, i.takeUntil)(this.dispose$), (0, s.delay)(16)).pipe((0, s.filter)(var_core_value_sigB4B4 => !var_core_value_sigB4B4.unit["getUnitId"]().startsWith("__"))).subscribe(async var_core_value_sigD407 => {
      let var_core_value_sig63F3 = var_core_value_sigD407.unit["getUnitId"](),
        var_core_value_sig6A71 = await this._startCollaboration(var_core_value_sig63F3, t.UniverInstanceType["UNIVER_DOC"]);
      this._entities["set"](var_core_value_sig63F3, var_core_value_sig6A71);
    }), this._univerInstanceService["getTypeOfUnitAdded$"](t.UniverInstanceType["UNIVER_SLIDE"]).pipe((0, i.takeUntil)(this.dispose$), (0, s.delay)(16)).subscribe(async var_core_value_sig3BF6 => {
      let var_core_value_sig38CE = var_core_value_sig3BF6.unit["getUnitId"](),
        var_core_value_sig62B7 = await this._startCollaboration(var_core_value_sig38CE, t.UniverInstanceType["UNIVER_SLIDE"]);
      this._entities["set"](var_core_value_sig38CE, var_core_value_sig62B7);
    }), this._univerInstanceService["getTypeOfUnitAdded$"](t.UniverInstanceType["UNIVER_BOARD"]).pipe((0, i.takeUntil)(this.dispose$), (0, s.delay)(16)).subscribe(async var_core_value_sig37A8 => {
      let var_core_value_sigA90D = var_core_value_sig37A8.unit["getUnitId"](),
        var_core_value_sig7A3C = await this._startCollaboration(var_core_value_sigA90D, t.UniverInstanceType["UNIVER_BOARD"]);
      this._entities["set"](var_core_value_sigA90D, var_core_value_sig7A3C);
    }), this._univerInstanceService["getTypeOfUnitAdded$"](t.UniverInstanceType["UNIVER_BASE"]).pipe((0, i.takeUntil)(this.dispose$), (0, s.delay)(16)).subscribe(async var_core_value_sig0511 => {
      let var_core_value_sig1F44 = var_core_value_sig0511.unit["getUnitId"](),
        var_core_value_sigCB04 = await this._startCollaboration(var_core_value_sig1F44, t.UniverInstanceType["UNIVER_BASE"]);
      this._entities["set"](var_core_value_sig1F44, var_core_value_sigCB04);
    }), this._univerInstanceService["getTypeOfUnitAdded$"](t.UniverInstanceType["UNIVER_PDF"]).pipe((0, i.takeUntil)(this.dispose$), (0, s.delay)(16)).subscribe(async var_core_value_sig947E => {
      let var_core_value_sig4545 = var_core_value_sig947E.unit["getUnitId"](),
        var_core_value_sigF39A = await this._startCollaboration(var_core_value_sig4545, t.UniverInstanceType["UNIVER_PDF"]);
      this._entities["set"](var_core_value_sig4545, var_core_value_sigF39A);
    }), (0, i.merge)(this._univerInstanceService["getTypeOfUnitDisposed$"](t.UniverInstanceType["UNIVER_SHEET"]), this._univerInstanceService["getTypeOfUnitDisposed$"](t.UniverInstanceType["UNIVER_DOC"]), this._univerInstanceService["getTypeOfUnitDisposed$"](t.UniverInstanceType["UNIVER_SLIDE"]), this._univerInstanceService["getTypeOfUnitDisposed$"](t.UniverInstanceType["UNIVER_BOARD"]), this._univerInstanceService["getTypeOfUnitDisposed$"](t.UniverInstanceType["UNIVER_BASE"]), this._univerInstanceService["getTypeOfUnitDisposed$"](t.UniverInstanceType["UNIVER_PDF"])).pipe((0, i.takeUntil)(this.dispose$)).subscribe(var_core_value_sigF79C => {
      let var_core_value_sig2E54 = var_core_value_sigF79C.getUnitId(),
        var_core_value_sig7658 = this._entities["get"](var_core_value_sig2E54);
      var_core_value_sig7658 && (var_core_value_sig7658.dispose(), this._entities["delete"](var_core_value_sig2E54));
    });
  }
  async _startCollaboration(var_core_value_sig59CE1, var_core_value_sig3AD7) {
    let var_core_value_sig04E4 = await this._collabSessionService["requireSession"](var_core_value_sig59CE1),
      var_core_value_sigD8F0 = this._injector["createInstance"](this._getCtorByUniverInstanceType(var_core_value_sig3AD7), var_core_value_sig59CE1, var_core_value_sig3AD7, var_core_value_sig04E4);
    return await var_core_value_sigD8F0.init(), this._entityInit$["next"](var_core_value_sigD8F0), var_core_value_sigD8F0;
  }
  _getCtorByUniverInstanceType(var_core_value_sig1475) {
    switch (var_core_value_sig1475) {
      case t.UniverInstanceType["UNIVER_DOC"]:
        return F;
      case t.UniverInstanceType["UNIVER_SHEET"]:
        return L;
      case t.UniverInstanceType["UNIVER_SLIDE"]:
        return R;
      case t.UniverInstanceType["UNIVER_BOARD"]:
        return z;
      case t.UniverInstanceType["UNIVER_BASE"]:
        return I;
      case t.UniverInstanceType["UNIVER_PDF"]:
        return B;
      default:
        throw Error("[CollaborationController]: invalid univer type: " + var_core_value_sig1475);
    }
  }
};
H = y([v(0, (0, t.Inject)(t.Injector)), v(1, (0, t.Inject)(V)), v(2, t.IConfigService), v(3, t.IUniverInstanceService)], H);
var $e = "@univerjs-pro/collaboration-client",
  et = "1.0.0-insiders.20260907-70fc579";
let tt = class extends t.Disposable {
  constructor(var_core_value_sig08B7, var_core_value_sig2008) {
    super(), this._univerInstanceService = var_core_value_sig08B7, this._configService = var_core_value_sig2008, this._init();
  }
  _init() {
    this.disposeWithMe(this._univerInstanceService["focused$"].subscribe(() => {
      let var_core_value_sigDCF5 = this._univerInstanceService["getFocusedUnit"](),
        var_core_value_sigC786 = this._configService["getConfig"]("DEFAULT_FILE_NAME") ?? "Univer";
      var_core_value_sigDCF5 instanceof t.Workbook && (var_core_value_sigC786 = var_core_value_sigDCF5.name), document.title = var_core_value_sigC786;
    }));
  }
};
tt = y([v(0, t.IUniverInstanceService), v(1, t.IConfigService)], tt);
const nt = (0, t.createIdentifier)("base-ui.attachment-io.service");
let U = class {
  constructor(var_core_value_sig496B, var_core_value_sig7161, var_core_value_sig2AB8) {
    this._httpService = var_core_value_sig496B, this._configService = var_core_value_sig7161, this._univerInstanceService = var_core_value_sig2AB8;
  }
  getUploadOptions() {
    return this._getConfig().attachment ?? {};
  }
  async saveAttachment(var_core_value_sig3FCF) {
    let var_core_value_sig675A = this.getUploadOptions();
    if (rt(var_core_value_sig3FCF, var_core_value_sig675A), var_core_value_sig675A.upload) return var_core_value_sig675A.upload(var_core_value_sig3FCF);
    let var_core_value_sig837F = await this._upload(var_core_value_sig3FCF);
    return {
      id: var_core_value_sig837F,
      name: var_core_value_sig3FCF.name,
      mimeType: var_core_value_sig3FCF.type,
      size: var_core_value_sig3FCF.size,
      sourceType: t.ImageSourceType["UUID"],
      source: var_core_value_sig837F
    };
  }
  async getAttachmentUrl(var_core_value_sig9D6E, var_core_value_sigB205) {
    if (var_core_value_sigB205 !== t.ImageSourceType["UUID"]) return var_core_value_sig9D6E;
    let var_core_value_sigBF78 = (await this._httpService["get"](this._getSignURL().replace("{fileID}", var_core_value_sig9D6E))).body;
    if (var_core_value_sigBF78.error && var_core_value_sigBF78.error["code"] !== a.ErrorCode["OK"]) throw var_core_value_sigBF78.error;
    if (!var_core_value_sigBF78.url) throw Error("[CollaborationAttachmentIoService]: failed to resolve attachment URL.");
    return (0, t.resolveWithBasePath)(var_core_value_sigBF78.url, this._getDownloadEndpointURL());
  }
  async _upload(var_core_value_sig8AF3) {
    let var_core_value_sigA0CC = this._univerInstanceService["getFocusedUnit"](),
      var_core_value_sigB3A1 = var_core_value_sigA0CC == null ? undefined : var_core_value_sigA0CC.getUnitId();
    if (!var_core_value_sigB3A1) throw Error("[CollaborationAttachmentIoService]: unitId is not found.");
    let var_core_value_sig1FB9 = new FormData();
    var_core_value_sig1FB9.append("file", var_core_value_sig8AF3);
    let var_core_value_sig53A9 = this._getUploadFileURL() + "?size=" + var_core_value_sig8AF3.size["toString"]() + "&source=" + a.FileSource["UnitEmbedded"] + "&assign=" + encodeURIComponent(var_core_value_sigB3A1),
      var_core_value_sigDACD = (await this._httpService["post"](var_core_value_sig53A9, {
        body: var_core_value_sig1FB9
      })).body["FileId"];
    if (typeof var_core_value_sigDACD != "string" || !var_core_value_sigDACD) throw Error("[CollaborationAttachmentIoService]: failed to upload attachment.");
    return var_core_value_sigDACD;
  }
  _getUploadFileURL() {
    return this._getConfig().uploadFileServerUrl ?? "/universer-api/stream/file/upload";
  }
  _getSignURL() {
    return this._getConfig().signUrlServerUrl ?? "/universer-api/file/{fileID}/sign-url";
  }
  _getDownloadEndpointURL() {
    let var_core_value_sig691E = this._getConfig();
    return var_core_value_sig691E.downloadEndpointUrl ? var_core_value_sig691E.downloadEndpointUrl : typeof location < "u" ? location.origin : var_core_value_sig691E.uploadFileServerUrl ?? "";
  }
  _getConfig() {
    return this._configService["getConfig"]("collaboration-client.config") ?? {};
  }
};
U = y([v(0, (0, t.Inject)(l.HTTPService)), v(1, (0, t.Inject)(t.IConfigService)), v(2, (0, t.Inject)(t.IUniverInstanceService))], U);
function rt(var_core_value_sig48B2, var_core_value_sig57DF) {
  var var_core_value_sigC985;
  if (var_core_value_sig57DF.maxSize != null && var_core_value_sig48B2.size > var_core_value_sig57DF.maxSize) throw Error("[CollaborationAttachmentIoService]: attachment exceeds max size.");
  if ((var_core_value_sigC985 = var_core_value_sig57DF.accept) != null && var_core_value_sigC985.length && !var_core_value_sig57DF.accept["some"](var_core_value_sigD6D6 => var_core_value_sig48B2.type === var_core_value_sigD6D6 || var_core_value_sig48B2.name["endsWith"](var_core_value_sigD6D6) || var_core_value_sigD6D6.endsWith("/*") && var_core_value_sig48B2.type["startsWith"](var_core_value_sigD6D6.slice(0, -1)))) throw Error("[CollaborationAttachmentIoService]: attachment type is not accepted.");
}
let W = class {
  constructor(var_core_value_sig0347, var_core_value_sig52A3, var_core_value_sigAD91) {
    this._configService = var_core_value_sig0347, this._httpService = var_core_value_sig52A3, this.localeService = var_core_value_sigAD91, this.init();
  }
  init() {
    this._httpService["registerHTTPInterceptor"]({
      priority: 1,
      interceptor: (var_core_value_sigC0D9, var_core_value_sigF0511) => var_core_value_sigF0511(var_core_value_sigC0D9).pipe((0, i.concatMap)(async var_core_value_sig5CEE => {
        let var_core_value_sigE92A = var_core_value_sig5CEE;
        if (var_core_value_sigE92A.status === 401) {
          if (typeof window > "u") throw Error("[AuthServerService]:\x20you\x20should\x20provide\x20authentication\x20info\x20on\x20Node.js.");
          if (window.confirm(this.localeService["t"]("collaboration-client.auth.needGotoLoginAlert"))) {
            let var_core_value_sig3D7D = window.encodeURIComponent(window.location["href"]);
            window.location["href"] = this._getLoginPath() + "?url=" + var_core_value_sig3D7D;
          }
        }
        return var_core_value_sigE92A;
      }))
    });
  }
  _getLoginPath() {
    let var_core_value_sigF64E = this._configService["getConfig"](m);
    return (var_core_value_sigF64E == null ? undefined : var_core_value_sigF64E.loginUrlKey) ?? "/universer-api/oidc/authpage";
  }
};
W = y([v(0, t.IConfigService), v(1, (0, t.Inject)(l.HTTPService)), v(2, (0, t.Inject)(t.LocaleService))], W);
let G = class extends t.Disposable {
  constructor(var_core_value_sig9B3D, var_core_value_sigB217) {
    super(), this._HTTPService = var_core_value_sig9B3D, this._configService = var_core_value_sigB217, g(this, "_cfgEnableObjInherit", false), this._initMergeInterceptor();
  }
  _initMergeInterceptor() {
    let var_core_value_sig1FE6 = this;
    this.disposeWithMe(this._HTTPService["registerHTTPInterceptor"]({
      priority: 999,
      interceptor: (0, l.MergeInterceptorFactory)({
        isMatch(var_core_value_sig5825) {
          var var_core_value_sig4EB7;
          if (var_core_value_sig5825.method === "POST" && (var_core_value_sig4EB7 = var_core_value_sig5825.requestParams) != null && var_core_value_sig4EB7.body) {
            let {
              objectID: var_core_value_sig362B,
              objectType: var_core_value_sig5CA5
            } = var_core_value_sig5825.requestParams["body"] || {};
            if (!var_core_value_sig362B || var_core_value_sig5CA5 === undefined) return false;
            let var_core_value_sigE90F = var_core_value_sig1FE6._getAPIPrefixPath() + "/" + var_core_value_sig5CA5 + "/object/" + var_core_value_sig362B + "/allowed";
            if (var_core_value_sig5825.url === var_core_value_sigE90F) return true;
          }
          return false;
        },
        getParamsFromRequest(var_core_value_sig73AF) {
          var var_core_value_sig548A;
          return (var_core_value_sig548A = var_core_value_sig73AF.requestParams) == null ? undefined : var_core_value_sig548A.body;
        },
        mergeParamsToRequest(var_core_value_sigE026, var_core_value_sig339E) {
          let var_core_value_sig7550 = var_core_value_sig1FE6._getAPIPrefixPath() + "/-/object/-/batch_allowed",
            var_core_value_sig2983 = var_core_value_sigE026.reduce((var_core_value_sigEFD4, var_core_value_sig861B) => {
              let {
                unitID: var_core_value_sig5237,
                objectID: var_core_value_sigBB00,
                objectType: var_core_value_sig7E54,
                actions: var_core_value_sig9A8D
              } = var_core_value_sig861B;
              return var_core_value_sigEFD4[var_core_value_sig5237] || (var_core_value_sigEFD4[var_core_value_sig5237] = {}), var_core_value_sigEFD4[var_core_value_sig5237][var_core_value_sigBB00] || (var_core_value_sigEFD4[var_core_value_sig5237][var_core_value_sigBB00] = {
                objectID: var_core_value_sigBB00,
                objectType: var_core_value_sig7E54,
                actions: []
              }), var_core_value_sigEFD4[var_core_value_sig5237][var_core_value_sigBB00].actions["push"](...var_core_value_sig9A8D), var_core_value_sigEFD4;
            }, {}),
            var_core_value_sigE1B0 = [];
          for (let var_core_value_sigC259 in var_core_value_sig2983) for (let var_core_value_sigF0F9 in var_core_value_sig2983[var_core_value_sigC259]) {
            let {
                actions: var_core_value_sig27E5,
                objectType: var_core_value_sig8061
              } = var_core_value_sig2983[var_core_value_sigC259][var_core_value_sigF0F9],
              var_core_value_sig4D4C = [...new Set(var_core_value_sig27E5)];
            var_core_value_sigE1B0.push({
              unitID: var_core_value_sigC259,
              objectID: var_core_value_sigF0F9,
              objectType: var_core_value_sig8061,
              actions: var_core_value_sig4D4C
            });
          }
          return new l["HTTPRequest"]("POST", var_core_value_sig7550, {
            headers: var_core_value_sig339E.headers,
            withCredentials: var_core_value_sig339E.withCredentials,
            responseType: var_core_value_sig339E.responseType,
            body: {
              requests: var_core_value_sigE1B0
            }
          });
        }
      }, {
        distributeResult(var_core_value_sigD4FF, var_core_value_sig1E5B) {
          let {
            objectActions: var_core_value_sigB680
          } = var_core_value_sigD4FF;
          return var_core_value_sig1E5B.map(var_core_value_sig9C9F => {
            let {
                unitID: var_core_value_sigFDEA,
                objectID: var_core_value_sig86D0,
                actions: var_core_value_sig4CD2
              } = var_core_value_sig9C9F,
              var_core_value_sig48CA = var_core_value_sigB680.find(var_core_value_sig1A0F => var_core_value_sig1A0F.unitID === var_core_value_sigFDEA && var_core_value_sig1A0F.objectID === var_core_value_sig86D0);
            return {
              config: var_core_value_sig9C9F,
              result: {
                actions: var_core_value_sig4CD2.map(var_core_value_sigFBA4 => var_core_value_sig48CA == null ? undefined : var_core_value_sig48CA.actions["find"](var_core_value_sigC9E0 => var_core_value_sigC9E0.action === var_core_value_sigFBA4)).filter(var_core_value_sig4383 => !!var_core_value_sig4383),
                error: var_core_value_sigD4FF.error
              }
            };
          });
        }
      })
    }));
  }
  _getAPIPrefixPath() {
    let var_core_value_sig2471 = this._configService["getConfig"](m);
    return (var_core_value_sig2471 == null ? undefined : var_core_value_sig2471.authzUrl) ?? "/universer-api/authz";
  }
  async create(var_core_value_sigD1FC) {
    let var_core_value_sigE2F9 = this._getAPIPrefixPath() + "/" + var_core_value_sigD1FC.objectType + "/object";
    return (await this._HTTPService["post"](var_core_value_sigE2F9, {
      body: var_core_value_sigD1FC
    })).body["objectID"] || "";
  }
  async list(var_core_value_sigD689) {
    let var_core_value_sig7AE3 = this._getAPIPrefixPath() + "/-/object/list";
    return (await this._HTTPService["post"](var_core_value_sig7AE3, {
      body: var_core_value_sigD689
    })).body["objects"];
  }
  async update(var_core_value_sig1EB3) {
    var var_core_value_sigE120;
    let var_core_value_sigD6E7 = this._getAPIPrefixPath() + "/" + var_core_value_sig1EB3.objectType + "/object/" + var_core_value_sig1EB3.objectID,
      var_core_value_sig3669 = await this._HTTPService["put"](var_core_value_sigD6E7, {
        body: var_core_value_sig1EB3
      });
    if ((var_core_value_sig3669 == null || (var_core_value_sigE120 = var_core_value_sig3669.body) == null || (var_core_value_sigE120 = var_core_value_sigE120.error) == null ? undefined : var_core_value_sigE120.code) !== 1) throw Error("Failed to update permission point");
  }
  async allowed(var_core_value_sig5CBC) {
    let var_core_value_sig20BE = this._getAPIPrefixPath() + "/" + var_core_value_sig5CBC.objectType + "/object/" + var_core_value_sig5CBC.objectID + "/allowed";
    return (await this._HTTPService["post"](var_core_value_sig20BE, {
      body: var_core_value_sig5CBC
    })).body["actions"];
  }
  async batchAllowed(var_core_value_sig6BD0) {
    let var_core_value_sig8C15 = this._getAPIPrefixPath() + "/-/object/-/batch_allowed";
    return (await this._HTTPService["post"](var_core_value_sig8C15, {
      body: {
        requests: var_core_value_sig6BD0
      }
    })).body["objectActions"];
  }
  async listRoles(var_core_value_sig6DF7) {
    let var_core_value_sigB411 = this._getAPIPrefixPath() + "/" + var_core_value_sig6DF7.objectType + "/role",
      var_core_value_sigA81B = await this._HTTPService["post"](var_core_value_sigB411, {
        body: var_core_value_sig6DF7
      });
    return {
      roles: var_core_value_sigA81B.body["roles"],
      actions: var_core_value_sigA81B.body["actions"]
    };
  }
  async deleteCollaborator(var_core_value_sigFE8D) {
    let var_core_value_sig8595 = this._getAPIPrefixPath() + "/collaborator";
    await this._HTTPService["delete"](var_core_value_sig8595, {
      params: {
        collaboratorID: var_core_value_sigFE8D.collaboratorID,
        objectID: var_core_value_sigFE8D.objectID,
        unitID: var_core_value_sigFE8D.unitID
      }
    });
  }
  async updateCollaborator(var_core_value_sigF8DE) {
    let var_core_value_sigFE76 = this._getAPIPrefixPath() + "/collaborator";
    await this._HTTPService["patch"](var_core_value_sigFE76, {
      body: var_core_value_sigF8DE
    });
  }
  async createCollaborator(var_core_value_sig84C8) {
    let var_core_value_sig80C0 = this._getAPIPrefixPath() + "/collaborator";
    await this._HTTPService["post"](var_core_value_sig80C0, {
      body: var_core_value_sig84C8
    });
  }
  async listCollaborators(var_core_value_sig22B4) {
    let var_core_value_sigBB37 = this._getAPIPrefixPath() + "/collaborator",
      var_core_value_sig0C51 = await this._HTTPService["get"](var_core_value_sigBB37, {
        params: {
          objectID: var_core_value_sig22B4.objectID,
          unitID: var_core_value_sig22B4.unitID
        }
      });
    return this.setCfgEnableObjInherit(var_core_value_sig0C51.body["cfgEnableObjInherit"] ?? false), var_core_value_sig0C51.body["collaborators"];
  }
  async putCollaborators(var_core_value_sigADA4) {
    let var_core_value_sig0E48 = this._getAPIPrefixPath() + "/collaborator";
    await this._HTTPService["put"](var_core_value_sig0E48, {
      body: var_core_value_sigADA4
    });
  }
  setCfgEnableObjInherit(var_core_value_sig495B) {
    this._cfgEnableObjInherit = var_core_value_sig495B;
  }
  getCfgEnableObjInherit() {
    return this._cfgEnableObjInherit;
  }
};
G = y([v(0, (0, t.Inject)(l.HTTPService)), v(1, (0, t.Inject)(t.IConfigService))], G);
function it(var_core_value_sig8DA6) {
  let var_core_value_sigCA69 = atob(var_core_value_sig8DA6),
    var_core_value_sigB77C = new Uint8Array(var_core_value_sigCA69.length);
  for (let var_core_value_sig310C = 0; var_core_value_sig310C < var_core_value_sigCA69.length; var_core_value_sig310C++) var_core_value_sigB77C[var_core_value_sig310C] = var_core_value_sigCA69.charCodeAt(var_core_value_sig310C);
  return var_core_value_sigB77C;
}
function at(var_core_value_sig9AFF) {
  let var_core_value_sig3545 = "";
  for (let var_core_value_sig759E = 0; var_core_value_sig759E < var_core_value_sig9AFF.length; var_core_value_sig759E++) var_core_value_sig3545 += String.fromCharCode(var_core_value_sig9AFF[var_core_value_sig759E]);
  return btoa(var_core_value_sig3545);
}
function ot(var_core_value_sig5EE4, var_core_value_sig7EAB) {
  let var_core_value_sig56B9 = it(var_core_value_sig7EAB),
    var_core_value_sig90CF = (0, f.randomBytes)(16);
  return at((0, f.concatBytes)(var_core_value_sig90CF, (0, d.cbc)(var_core_value_sig56B9, var_core_value_sig90CF).encrypt((0, f.utf8ToBytes)(var_core_value_sig5EE4))));
}
function st() {
  let var_core_value_sigA3861 = (0, u.getGlobalObject)().__Key__;
  if (typeof window < "u" && window.location !== undefined && var_core_value_sigA3861) {
    let var_core_value_sig6C80 = {
      time: Math.floor(Date.now() / 1000),
      domain: location.hostname
    };
    return ot(JSON.stringify(var_core_value_sig6C80), var_core_value_sigA3861);
  }
}
let K = class {
  constructor(var_core_value_sig6B99) {
    this._httpService = var_core_value_sig6B99, this._initRequestHeader();
  }
  _initRequestHeader() {
    this._httpService["registerHTTPInterceptor"]({
      interceptor: (var_core_value_sig1F64, var_core_value_sigDD1C) => {
        let var_core_value_sig2C39 = st();
        return var_core_value_sig2C39 && var_core_value_sig1F64.headers["set"]("x-univer-host", var_core_value_sig2C39), var_core_value_sigDD1C(var_core_value_sig1F64);
      }
    });
  }
};
K = y([v(0, (0, t.Inject)(l.HTTPService))], K);
let q = class extends t.RxDisposable {
  constructor(var_core_value_sig6ADC, var_core_value_sig41AD, var_core_value_sigDBC2) {
    super(), this._logService = var_core_value_sig6ADC, this._snapshotService = var_core_value_sig41AD, this._localCacheService = var_core_value_sigDBC2, g(this, "_unitInfo$", new i["BehaviorSubject"](null)), g(this, "_unitLoaded$", new i["Subject"]()), g(this, "unitInfo$", this._unitInfo$["asObservable"]()), g(this, "unitLoaded$", this._unitLoaded$["asObservable"]());
  }
  dispose() {
    super.dispose(), this._unitLoaded$["complete"](), this._unitInfo$["complete"]();
  }
  async loadUnitOfRevision(var_core_value_sig7739, var_core_value_sig4040, var_core_value_sig1AAA, var_core_value_sig58DB) {
    this._unitInfo$["next"]({
      unitId: var_core_value_sig7739,
      type: var_core_value_sig4040,
      subUnitId: var_core_value_sig58DB
    });
    let var_core_value_sig4840 = null;
    switch (var_core_value_sig4040) {
      case t.UniverInstanceType["UNIVER_SHEET"]:
        var_core_value_sig4840 = await this._snapshotService["loadSheet"](var_core_value_sig7739, var_core_value_sig1AAA, undefined, {
          initialSubUnitId: var_core_value_sig58DB
        });
        break;
      case t.UniverInstanceType["UNIVER_DOC"]:
        var_core_value_sig4840 = await this._snapshotService["loadDoc"](var_core_value_sig7739, var_core_value_sig1AAA);
        break;
      case t.UniverInstanceType["UNIVER_SLIDE"]:
        var_core_value_sig4840 = await this._snapshotService["loadSlide"](var_core_value_sig7739, var_core_value_sig1AAA);
        break;
      case t.UniverInstanceType["UNIVER_BOARD"]:
        var_core_value_sig4840 = await this._snapshotService["loadBoard"](var_core_value_sig7739, var_core_value_sig1AAA);
        break;
      case t.UniverInstanceType["UNIVER_BASE"]:
        var_core_value_sig4840 = await this._snapshotService["loadBase"](var_core_value_sig7739, var_core_value_sig1AAA);
        break;
      case t.UniverInstanceType["UNIVER_PDF"]:
        var_core_value_sig4840 = await this._snapshotService["loadPdf"](var_core_value_sig7739, var_core_value_sig1AAA);
        break;
      default:
        this._logService["error"]("[DataLoaderService]", "Unknown\x20type.\x20Will\x20not\x20load\x20files\x20from\x20remote\x20address.");
        break;
    }
    return var_core_value_sig4840 && this._unitLoaded$["next"](var_core_value_sig4840), var_core_value_sig4840;
  }
  async loadUnit(var_core_value_sigB76D, var_core_value_sig1015, var_core_value_sig6223) {
    var var_core_value_sigC6B6;
    this._unitInfo$["next"]({
      unitId: var_core_value_sigB76D,
      type: var_core_value_sig1015,
      subUnitId: var_core_value_sig6223
    });
    let var_core_value_sig498A = 0,
      var_core_value_sigEF45 = await ((var_core_value_sigC6B6 = this._localCacheService) == null ? undefined : var_core_value_sigC6B6.loadOfflineData(var_core_value_sigB76D));
    return var_core_value_sigEF45 && (var_core_value_sigEF45.awaitingChangeset || var_core_value_sigEF45.mutations["length"] !== 0) && (var_core_value_sig498A = var_core_value_sigEF45.rev), var_core_value_sig498A === 0 && this._logService["debug"]("[DataLoaderService]", "fetching the latest document from the server."), this.loadUnitOfRevision(var_core_value_sigB76D, var_core_value_sig1015, var_core_value_sig498A, var_core_value_sig6223);
  }
};
q = y([v(0, t.ILogService), v(1, (0, t.Inject)(e.SnapshotService)), v(2, (0, t.Optional)(x))], q);
let J = class {
  constructor(var_core_value_sig36FE, var_core_value_sig3AF5, var_core_value_sig14E6) {
    this._httpService = var_core_value_sig36FE, this._configService = var_core_value_sig3AF5, this._univerInstanceService = var_core_value_sig14E6, g(this, "_waitCount", 0), g(this, "_change$", new i["Subject"]()), g(this, "change$", this._change$), g(this, "_imageSourceCache", new Map());
  }
  setWaitCount(var_core_value_sig8690) {
    this._waitCount = var_core_value_sig8690, this._change$["next"](var_core_value_sig8690);
  }
  getImageSourceCache(var_core_value_sigDF29, var_core_value_sigC0F8) {
    if (var_core_value_sigC0F8 === t.ImageSourceType["BASE64"]) {
      let var_core_value_sigB7D1 = new Image();
      return var_core_value_sigB7D1.src = var_core_value_sigDF29, var_core_value_sigB7D1;
    }
    return this._imageSourceCache["get"](var_core_value_sigDF29);
  }
  addImageSourceCache(var_core_value_sig3C75, var_core_value_sig992D, var_core_value_sigE4E4) {
    var_core_value_sig992D !== t.ImageSourceType["BASE64"] && var_core_value_sigE4E4 != null && this._imageSourceCache["set"](var_core_value_sig3C75, var_core_value_sigE4E4);
  }
  async getImage(var_core_value_sigA4B0) {
    try {
      let var_core_value_sig64F0 = this._replaceFileID(this._getSignURL(), "" + var_core_value_sigA4B0),
        var_core_value_sig85B1 = (await this._httpService["get"](var_core_value_sig64F0)).body;
      if (var_core_value_sig85B1.error && var_core_value_sig85B1.error["code"] === a.ErrorCode["OK"]) {
        let var_core_value_sig50AF = (0, t.resolveWithBasePath)(var_core_value_sig85B1.url, this._getDownloadEndpointURL());
        return Promise.resolve(var_core_value_sig50AF);
      }
      return Promise.reject(var_core_value_sig85B1.error);
    } catch (var_core_value_sig3141) {
      return Promise.reject(var_core_value_sig3141);
    }
  }
  async saveImage(var_core_value_sig5F50) {
    let var_core_value_sig4494 = "";
    if (!p.DRAWING_IMAGE_ALLOW_IMAGE_LIST["includes"](var_core_value_sig5F50.type)) return this._decreaseWaiting(), Promise.reject(Error(t.ImageUploadStatusType["ERROR_IMAGE_TYPE"]));
    if (var_core_value_sig5F50.size > (0, p.getDrawingImageAllowSize)()) return this._decreaseWaiting(), Promise.reject(Error(t.ImageUploadStatusType["ERROR_EXCEED_SIZE"]));
    try {
      let var_core_value_sig2162 = new FormData();
      var_core_value_sig2162.append("file", var_core_value_sig5F50);
      let var_core_value_sig2EAD = this._univerInstanceService["getFocusedUnit"](),
        var_core_value_sig6774 = var_core_value_sig2EAD == null ? undefined : var_core_value_sig2EAD.getUnitId();
      if (!var_core_value_sig6774) throw Error("unitId is not found");
      let var_core_value_sig340D = this._getUploadFileURL() + "?size=" + var_core_value_sig5F50.size["toString"]() + "&source=" + a.FileSource["UnitEmbedded"] + "&assign=" + encodeURIComponent(var_core_value_sig6774),
        var_core_value_sig82D4 = {
          body: var_core_value_sig2162
        },
        var_core_value_sigBDE4 = (await this._httpService["post"](var_core_value_sig340D, var_core_value_sig82D4)).body;
      if (typeof var_core_value_sigBDE4.FileId != "string") return this._decreaseWaiting(), Promise.reject(Error(t.ImageUploadStatusType["ERROR_IMAGE"]));
      var_core_value_sig4494 = var_core_value_sigBDE4.FileId;
    } catch {
      return this._decreaseWaiting(), Promise.reject(Error(t.ImageUploadStatusType["ERROR_IMAGE"]));
    }
    return new Promise((var_core_value_sig7DF1, var_core_value_sigDC86) => {
      let var_core_value_sig0B0C = new FileReader();
      var_core_value_sig0B0C.readAsDataURL(var_core_value_sig5F50), var_core_value_sig0B0C.onload = var_core_value_sigA942 => {
        var var_core_value_sigA621;
        let var_core_value_sigBBFF = (var_core_value_sigA621 = var_core_value_sigA942.target) == null ? undefined : var_core_value_sigA621.result;
        if (var_core_value_sigBBFF == null) {
          this._decreaseWaiting(), var_core_value_sigDC86(Error(t.ImageUploadStatusType["ERROR_IMAGE"]));
          return;
        }
        var_core_value_sig7DF1({
          imageId: (0, t.generateRandomId)(6),
          imageSourceType: t.ImageSourceType["UUID"],
          source: var_core_value_sig4494,
          base64Cache: var_core_value_sigBBFF,
          status: t.ImageUploadStatusType["SUCCUSS"]
        }), this._decreaseWaiting();
      };
    });
  }
  _getUploadFileURL() {
    let var_core_value_sigFFAF = this._configService["getConfig"](m);
    return (var_core_value_sigFFAF == null ? undefined : var_core_value_sigFFAF.uploadFileServerUrl) ?? "/universer-api/stream/file/upload";
  }
  _getSignURL() {
    let var_core_value_sig478B = this._configService["getConfig"](m);
    return (var_core_value_sig478B == null ? undefined : var_core_value_sig478B.signUrlServerUrl) ?? "/universer-api/file/{fileID}/sign-url";
  }
  _getDownloadEndpointURL() {
    let var_core_value_sig1E21 = this._configService["getConfig"](m);
    return (var_core_value_sig1E21 == null ? undefined : var_core_value_sig1E21.downloadEndpointUrl) ?? location.origin;
  }
  _replaceFileID(var_core_value_sig9DBF, var_core_value_sig36CC) {
    return var_core_value_sig9DBF.replace("{fileID}", var_core_value_sig36CC);
  }
  _decreaseWaiting() {
    --this._waitCount, this._change$["next"](this._waitCount);
  }
};
J = y([v(0, (0, t.Inject)(l.HTTPService)), v(1, t.IConfigService), v(2, (0, t.Inject)(t.IUniverInstanceService))], J);
let Y = class {
  constructor(var_core_value_sigA568, var_core_value_sigD22D) {
    this._configService = var_core_value_sigA568, this._HTTPService = var_core_value_sigD22D;
  }
  _getAPIPrefixPath() {
    let var_core_value_sig85D5 = this._configService["getConfig"](m);
    return (var_core_value_sig85D5 == null ? undefined : var_core_value_sig85D5.authzUrl) ?? "/universer-api/authz";
  }
  async list(var_core_value_sig5D2E) {
    let var_core_value_sig7221 = this._getAPIPrefixPath() + "/collaborator";
    return {
      list: [{
        title: "People",
        mentions: (await this._HTTPService["get"](var_core_value_sig7221, {
          params: {
            objectID: var_core_value_sig5D2E.unitId,
            unitID: var_core_value_sig5D2E.unitId
          }
        })).body["collaborators"].map(var_core_value_sigA39E => ({
          objectId: var_core_value_sigA39E.id,
          name: var_core_value_sigA39E.subject["name"],
          metadata: {
            icon: var_core_value_sigA39E.subject["avatar"]
          },
          label: var_core_value_sigA39E.subject["name"],
          objectType: t.MentionType["PERSON"]
        })),
        metadata: {},
        type: t.MentionType["PERSON"]
      }]
    };
  }
};
Y = y([v(0, (0, t.Inject)(t.IConfigService)), v(1, (0, t.Inject)(l.HTTPService))], Y);
let X = class extends t.RxDisposable {
  constructor(var_core_value_sig0A5A, var_core_value_sigE6D6, var_core_value_sig8507, var_core_value_sig8A7F, var_core_value_sig9E81, var_core_value_sig8295) {
    super(), this._injector = var_core_value_sig0A5A, this._univerInstanceService = var_core_value_sigE6D6, this._permissionService = var_core_value_sig8507, this._authzIoService = var_core_value_sig8A7F, this._collaborationSessionService = var_core_value_sig9E81, this._collaborationUIEventService = var_core_value_sig8295, this._initUnitPermissionChange(), this._initCloseConn();
  }
  _initCloseConn() {
    let var_core_value_sigA975 = async (var_core_value_sigBBEE, var_core_value_sig011D) => {
      (await this._collaborationSessionService["requireSession"](var_core_value_sigBBEE)).event$["pipe"]((0, s.filter)(var_core_value_sig8889 => var_core_value_sig8889.eventID === e.CollaborationEvent["SHOULD_CLOSE_CONN"]), (0, s.takeUntil)(this.dispose$)).subscribe(var_core_value_sig32F8 => {
        let {
          reason: var_core_value_sig5B67
        } = var_core_value_sig32F8.data;
        this._collaborationUIEventService["emitEvent"]({
          id: "CLOSE_ROOM",
          data: var_core_value_sig5B67
        });
        let var_core_value_sig1758 = lt(var_core_value_sig011D);
        var_core_value_sig1758 != null && this._updateUnitPermissionPoint(var_core_value_sigBBEE, var_core_value_sig1758, a.UnitAction["Edit"], false), this._collaborationSessionService["closeSession"](var_core_value_sigBBEE);
      });
    };
    ct(this._univerInstanceService).pipe((0, s.filter)(({
      unitId: var_core_value_sig6167
    }) => !(0, t.isInternalEditorID)(var_core_value_sig6167)), (0, s.takeUntil)(this.dispose$)).subscribe(({
      type: var_core_value_sig65A1,
      unitId: var_core_value_sig7F19
    }) => {
      var_core_value_sigA975(var_core_value_sig7F19, var_core_value_sig65A1);
    });
  }
  _initUnitPermissionChange() {
    let var_core_value_sig1263 = async (var_core_value_sig7827, var_core_value_sig652C) => {
      let var_core_value_sig7E32 = await this._collaborationSessionService["requireSession"](var_core_value_sig7827);
      if (var_core_value_sig652C === t.UniverInstanceType["UNIVER_SHEET"]) {
        let var_core_value_sig4805 = this._injector["get"](r.SheetPermissionInitController);
        await var_core_value_sig4805.initWorkbookPermissionChange(var_core_value_sig7827), var_core_value_sig7E32.event$["pipe"]((0, s.filter)(var_core_value_sig186C => var_core_value_sig186C.eventID === e.CollaborationEvent["UPDATE_PERMISSION_OBJ"]), (0, s.takeUntil)(this.dispose$)).subscribe(var_core_value_sigD955 => {
          let {
            objectId: var_core_value_sig48BD
          } = var_core_value_sigD955.data;
          var_core_value_sig48BD === var_core_value_sig7827 ? var_core_value_sig4805.initWorkbookPermissionChange(var_core_value_sig7827) : var_core_value_sig4805.refreshPermission(var_core_value_sig7827, var_core_value_sig48BD);
        });
        return;
      }
      await this._refreshUnitPermission(var_core_value_sig7827, var_core_value_sig652C), var_core_value_sig7E32.event$["pipe"]((0, s.filter)(var_core_value_sigE67E => var_core_value_sigE67E.eventID === e.CollaborationEvent["UPDATE_PERMISSION_OBJ"]), (0, s.takeUntil)(this.dispose$)).subscribe(var_core_value_sig2902 => {
        let {
          objectId: var_core_value_sig9989
        } = var_core_value_sig2902.data;
        var_core_value_sig9989 === var_core_value_sig7827 && this._refreshUnitPermission(var_core_value_sig7827, var_core_value_sig652C);
      });
    };
    ct(this._univerInstanceService).pipe((0, s.filter)(({
      unitId: var_core_value_sig4C07
    }) => !(0, t.isInternalEditorID)(var_core_value_sig4C07)), (0, s.takeUntil)(this.dispose$)).subscribe(({
      type: var_core_value_sig79AB,
      unitId: var_core_value_sig8E74
    }) => {
      var_core_value_sig1263(var_core_value_sig8E74, var_core_value_sig79AB);
    });
  }
  async _refreshUnitPermission(var_core_value_sig457C, var_core_value_sigA4E6) {
    let var_core_value_sig934F = lt(var_core_value_sigA4E6);
    if (var_core_value_sig934F == null) return;
    let var_core_value_sig74A7 = this._getUnitPermissionPoints(var_core_value_sig457C, var_core_value_sig934F);
    var_core_value_sig74A7.length && (await this._authzIoService["allowed"]({
      objectID: var_core_value_sig457C,
      objectType: var_core_value_sig934F,
      unitID: var_core_value_sig457C,
      actions: var_core_value_sig74A7.map(({
        action: var_core_value_sig104C
      }) => var_core_value_sig104C)
    })).forEach(var_core_value_sig841D => {
      let var_core_value_sig90CB = var_core_value_sig841D.action,
        var_core_value_sigBDF5 = var_core_value_sig841D.allowed;
      var_core_value_sig90CB != null && var_core_value_sigBDF5 != null && var_core_value_sig74A7.filter(var_core_value_sig698E => var_core_value_sig698E.action === var_core_value_sig90CB).forEach(var_core_value_sig2809 => this._permissionService["updatePermissionPoint"](var_core_value_sig2809.id, var_core_value_sigBDF5));
    });
  }
  _getUnitPermissionPoints(var_core_value_sig3685, var_core_value_sigC621) {
    let var_core_value_sig86D7 = [];
    return this._permissionService["getAllPermissionPoint"]().forEach((var_core_value_sigACC6, var_core_value_sig1614) => {
      var_core_value_sigACC6.subscribe(var_core_value_sig2DAB => {
        var_core_value_sig2DAB.type === var_core_value_sigC621 && "unitId" in var_core_value_sig2DAB && var_core_value_sig2DAB.unitId === var_core_value_sig3685 && (!("objectId" in var_core_value_sig2DAB) || var_core_value_sig2DAB.objectId === var_core_value_sig3685) && var_core_value_sig86D7.push({
          id: var_core_value_sig1614,
          action: var_core_value_sig2DAB.subType
        });
      }).unsubscribe();
    }), var_core_value_sig86D7;
  }
  _updateUnitPermissionPoint(var_core_value_sig431B, var_core_value_sig5C7C, var_core_value_sig87E2, var_core_value_sig2E04) {
    this._permissionService["getAllPermissionPoint"]().forEach((var_core_value_sig85C3, var_core_value_sigB996) => {
      let var_core_value_sig4BBA = false;
      var_core_value_sig85C3.subscribe(var_core_value_sig877E => {
        var_core_value_sig4BBA = var_core_value_sig877E.type === var_core_value_sig5C7C && var_core_value_sig877E.subType === var_core_value_sig87E2 && "unitId" in var_core_value_sig877E && var_core_value_sig877E.unitId === var_core_value_sig431B && (!("objectId" in var_core_value_sig877E) || var_core_value_sig877E.objectId === var_core_value_sig431B);
      }).unsubscribe(), var_core_value_sig4BBA && this._permissionService["updatePermissionPoint"](var_core_value_sigB996, var_core_value_sig2E04);
    });
  }
};
X = y([v(0, (0, t.Inject)(t.Injector)), v(1, t.IUniverInstanceService), v(2, t.IPermissionService), v(3, t.IAuthzIoService), v(4, (0, t.Inject)(V)), v(5, (0, t.Inject)(_))], X);
function ct(var_core_value_sigCD6E) {
  return (0, i.merge)(...[t.UniverInstanceType["UNIVER_SHEET"], t.UniverInstanceType["UNIVER_DOC"], t.UniverInstanceType["UNIVER_SLIDE"], t.UniverInstanceType["UNIVER_BOARD"], t.UniverInstanceType["UNIVER_BASE"]].map(var_core_value_sig2EDD => var_core_value_sigCD6E.getTypeOfUnitAdded$(var_core_value_sig2EDD).pipe((0, s.map)(var_core_value_sig6201 => ({
    type: var_core_value_sig2EDD,
    unitId: var_core_value_sig6201.unit["getUnitId"]()
  })))));
}
function lt(var_core_value_sigFD9D) {
  switch (var_core_value_sigFD9D) {
    case t.UniverInstanceType["UNIVER_SHEET"]:
      return a.UnitObject["Workbook"];
    case t.UniverInstanceType["UNIVER_DOC"]:
      return a.UnitObject["Document"];
    case t.UniverInstanceType["UNIVER_SLIDE"]:
      return a.UnitObject["Slide"];
    case t.UniverInstanceType["UNIVER_BOARD"]:
      return a.UnitObject["Board"];
    case t.UniverInstanceType["UNIVER_BASE"]:
      return a.UnitObject["Base"];
    default:
      return;
  }
}
let Z = class {
  constructor(var_core_value_sig27D2, var_core_value_sig355D) {
    this._configService = var_core_value_sig27D2, this._httpService = var_core_value_sig355D;
  }
  async getUnitOnRev(var_core_value_sig8B21, var_core_value_sigEB36) {
    var var_core_value_sig5C27;
    let {
        unitID: var_core_value_sigD494,
        type: var_core_value_sigBF6D,
        revision: var_core_value_sigD051 = 0
      } = var_core_value_sigEB36,
      var_core_value_sig16D9 = this.getSnapshotAPIPath() + "/" + var_core_value_sigBF6D + "/unit/" + var_core_value_sigD494 + "/rev/" + var_core_value_sigD051,
      var_core_value_sigF378 = (await this._httpService["get"](var_core_value_sig16D9)).body,
      var_core_value_sig5F6C = (var_core_value_sig5C27 = var_core_value_sigF378.snapshot) == null ? undefined : var_core_value_sig5C27.workbook;
    if (var_core_value_sig5F6C) {
      let var_core_value_sig5151 = var_core_value_sig5F6C == null ? undefined : var_core_value_sig5F6C.originalMeta;
      var_core_value_sig5F6C.originalMeta = e.textEncoder["encode"]((0, e.b64DecodeUnicode)(var_core_value_sig5151)), Object.entries(var_core_value_sig5F6C.sheets).forEach(([, var_core_value_sig20C8]) => {
        let var_core_value_sigE9A7 = var_core_value_sig20C8.originalMeta;
        var_core_value_sig20C8.originalMeta = e.textEncoder["encode"]((0, e.b64DecodeUnicode)(var_core_value_sigE9A7));
      });
    }
    return var_core_value_sigF378;
  }
  async getSheetBlock(var_core_value_sig7E85, var_core_value_sigF204) {
    let {
        unitID: var_core_value_sig7A15,
        type: var_core_value_sigEEA6,
        blockID: var_core_value_sigEAE1
      } = var_core_value_sigF204,
      var_core_value_sigC69F = this._getAPIPrefix() + "/" + var_core_value_sigEEA6 + "/unit/" + var_core_value_sig7A15 + "/block/" + var_core_value_sigEAE1;
    return (await this._httpService["get"](var_core_value_sigC69F)).body;
  }
  async getDeserializedSheetBlock(var_core_value_sig0442, var_core_value_sig697A) {
    let {
        unitID: var_core_value_sigDB65,
        type: var_core_value_sig045E,
        blockID: var_core_value_sig4524
      } = var_core_value_sig697A,
      var_core_value_sig64D5 = this._getAPIPrefix() + "/block/" + var_core_value_sig045E + "/unit/" + var_core_value_sigDB65 + "/block/" + var_core_value_sig4524;
    return (await this._httpService["get"](var_core_value_sig64D5)).body;
  }
  async fetchMissingChangesets(var_core_value_sig9678, var_core_value_sig5E74) {
    let {
        unitID: var_core_value_sig75FC,
        type: var_core_value_sig639A,
        from: var_core_value_sig567C,
        to: var_core_value_sig825F
      } = var_core_value_sig5E74,
      var_core_value_sig546D = this._getAPIPrefix() + "/" + var_core_value_sig639A + "/unit/" + var_core_value_sig75FC + "/fetchmissing?from=" + var_core_value_sig567C + "&to=" + var_core_value_sig825F;
    return (await this._httpService["get"](var_core_value_sig546D)).body;
  }
  getSnapshotAPIPath() {
    return this._configService["getConfig"]("SNAPSHOT_URL_KEY") ?? this._getAPIPrefix();
  }
  _getAPIPrefix() {
    let var_core_value_sig8078 = this._configService["getConfig"](m);
    return (var_core_value_sig8078 == null ? undefined : var_core_value_sig8078.snapshotServerUrl) ?? "/universer-api/snapshot";
  }
  async getResourcesRequest(var_core_value_sigDCED, var_core_value_sig2829) {
    let var_core_value_sig6EE2 = "/universer-api/snapshot/" + var_core_value_sig2829.type + "/unit/" + var_core_value_sig2829.unitID + "/resources";
    return (await this._httpService["get"](var_core_value_sig6EE2, {
      params: {
        resourceId: JSON.stringify(var_core_value_sig2829.resourceIDs)
      }
    })).body;
  }
  saveSnapshot() {
    throw Error("This\x20method\x20should\x20not\x20be\x20called\x20on\x20the\x20client\x20side!");
  }
  updateSnapshot() {
    throw Error("This method should not be called on the client side!");
  }
  saveSheetBlock() {
    throw Error("This method should not be called on the client side!");
  }
  saveChangeset() {
    throw Error("This\x20method\x20should\x20not\x20be\x20called\x20on\x20the\x20client\x20side!");
  }
  copyFileMeta() {
    throw Error("This method should not be called on the client side!");
  }
  getLatestCsReqIdBySid() {
    throw Error("This method should not be called on the client side!");
  }
};
Z = y([v(0, t.IConfigService), v(1, (0, t.Inject)(l.HTTPService))], Z);
let Q = class extends t.LocalUndoRedoService {
  constructor(var_core_value_sig4CCC, var_core_value_sig6E47, var_core_value_sigB64D, var_core_value_sig2407, var_core_value_sigE4D0, var_core_value_sigD5F1) {
    super(var_core_value_sig4CCC, var_core_value_sig6E47, var_core_value_sigB64D, var_core_value_sig2407), this._transformService = var_core_value_sigE4D0, this._logService = var_core_value_sigD5F1;
  }
  transformUndoRedo(var_core_value_sigBC19, var_core_value_sig4F3C) {
    let var_core_value_sig8D44 = this._getUndoStack(var_core_value_sigBC19);
    if (var_core_value_sig8D44) try {
      let var_core_value_sigB542 = this._transformStack(var_core_value_sig8D44, var_core_value_sig4F3C);
      this._substituteUndoStack(var_core_value_sigBC19, var_core_value_sigB542);
    } catch (var_core_value_sigBB6C) {
      this._logService["error"]("[CollaborationUndoRedoService]", var_core_value_sigBB6C), this._clearUndo(var_core_value_sigBC19);
    }
    let var_core_value_sig1660 = this._getRedoStack(var_core_value_sigBC19);
    if (var_core_value_sig1660) try {
      let var_core_value_sigE2BF = this._transformStack(var_core_value_sig1660, var_core_value_sig4F3C);
      this._substituteRedoStack(var_core_value_sigBC19, var_core_value_sigE2BF);
    } catch (var_core_value_sigB8C7) {
      this._logService["error"](var_core_value_sigB8C7), this._clearRedo(var_core_value_sigBC19);
    }
  }
  _clearUndo(var_core_value_sigEE7B) {
    let var_core_value_sig44DF = this._getUndoStack(var_core_value_sigEE7B);
    var_core_value_sig44DF && (var_core_value_sig44DF.length = 0, this._updateStatus());
  }
  _clearRedo(var_core_value_sig7E48) {
    let var_core_value_sig7B9E = this._getRedoStack(var_core_value_sig7E48);
    var_core_value_sig7B9E && (var_core_value_sig7B9E.length = 0, this._updateStatus());
  }
  _substituteUndoStack(var_core_value_sig5C3B, var_core_value_sig4002) {
    this._undoStacks["set"](var_core_value_sig5C3B, var_core_value_sig4002), this._updateStatus();
  }
  _substituteRedoStack(var_core_value_sig4153, var_core_value_sig2825) {
    this._redoStacks["set"](var_core_value_sig4153, var_core_value_sig2825), this._updateStatus();
  }
  _transformStack(var_core_value_sig5FD0, var_core_value_sigA7E3) {
    let var_core_value_sigA784 = [],
      var_core_value_sig4406 = var_core_value_sigA7E3,
      var_core_value_sig6806 = var_core_value_sigA7E3;
    for (let var_core_value_sigA56E = var_core_value_sig5FD0.length - 1; var_core_value_sigA56E >= 0; var_core_value_sigA56E--) {
      let {
          unitID: var_core_value_sigBECE,
          undoMutations: var_core_value_sig1B22,
          redoMutations: var_core_value_sig7F72
        } = var_core_value_sig5FD0[var_core_value_sigA56E],
        var_core_value_sig7B2A = this._transformService["transformMutationsWithChangeset"](var_core_value_sig4406, var_core_value_sig1B22),
        var_core_value_sig06CD = this._transformService["transformMutationsWithChangeset"](var_core_value_sig6806, var_core_value_sig7F72);
      if ((0, e.isTransformMutationsWithChangesetFailure)(var_core_value_sig7B2A) || (0, e.isTransformMutationsWithChangesetFailure)(var_core_value_sig06CD)) {
        this._logService["error"]("[CollaborationUndoRedoService]", "transformStack failed!", var_core_value_sig7B2A, var_core_value_sig06CD);
        break;
      }
      var_core_value_sig4406 = var_core_value_sig7B2A.c1Prime, var_core_value_sig6806 = var_core_value_sig06CD.c1Prime, var_core_value_sigA784.push({
        unitID: var_core_value_sigBECE,
        undoMutations: var_core_value_sig7B2A.m2Prime,
        redoMutations: var_core_value_sig06CD.m2Prime
      });
    }
    return var_core_value_sigA784.reverse();
  }
};
Q = y([v(0, t.IUniverInstanceService), v(1, t.ICommandService), v(2, t.IContextService), v(3, t.IConfigService), v(4, e.ITransformService), v(5, t.ILogService)], Q);
let $ = class extends t.Plugin {
  constructor(var_core_value_sigD4AA = ee, var_core_value_sigDC41, var_core_value_sigFB47, var_core_value_sig9B3D1) {
    super(), this._config = var_core_value_sigD4AA, this._logService = var_core_value_sigDC41, this._injector = var_core_value_sigFB47, this._configService = var_core_value_sig9B3D1;
    let {
      ...var_core_value_sigC1CF
    } = (0, t.merge)({}, ee, this._config);
    if (!var_core_value_sigC1CF.socketService) throw Error("[UniverCollaborationClientPlugin]: you must provide a socketService implementation in config!");
    this._config = var_core_value_sigC1CF, this._configService["setConfig"](m, var_core_value_sigC1CF);
  }
  onStarting() {
    this._registerDependencies(), this._initDependencies();
  }
  _registerDependencies() {
    var var_core_value_sigEE12, var_core_value_sigD70C;
    this._injector["has"](t.IUndoRedoService) && this._logService["error"]("[UniverCollaborationClientPlugin]", 'you should override "IUndoRedoService" provided in "core" package!');
    let var_core_value_sigF047 = (0, t.mergeOverrideWithDependencies)([[t.IUndoRedoService, {
      useClass: Q
    }], [Xe, {
      useValue: Ze()
    }], [V], [b], [S], [W], [K], [ae], [X], [_], [q], [qe, {
      useClass: this._config["socketService"]
    }], [e.ISnapshotServerService, {
      useClass: Z
    }], [t.IAuthzIoService, {
      useClass: G
    }], [t.IImageIoService, {
      useClass: J
    }], [nt, {
      useClass: U
    }], [t.IMentionIOService, {
      useClass: Y
    }], [H], [tt]], (var_core_value_sigEE12 = this._config) == null ? undefined : var_core_value_sigEE12.override);
    if (!((var_core_value_sigD70C = this._config) != null && var_core_value_sigD70C.enableSingleActiveInstanceLock)) {
      let var_core_value_sig1998 = var_core_value_sigF047.findIndex(([var_core_value_sigA5F1]) => var_core_value_sigA5F1 === C);
      var_core_value_sig1998 !== -1 && var_core_value_sigF047.splice(var_core_value_sig1998, 1);
    }
    (0, t.registerDependencies)(this._injector, var_core_value_sigF047);
  }
  _initDependencies() {
    var var_core_value_sigC2F9, var_core_value_sig1F51;
    if (this._injector["get"](l.HTTPService).registerHTTPInterceptor({
      priority: 20,
      interceptor: (0, l.ThresholdInterceptorFactory)({
        maxParallel: 6
      })
    }), !((var_core_value_sigC2F9 = this._config) != null && var_core_value_sigC2F9.enableOfflineEditing)) {
      var var_core_value_sig29F5;
      (var_core_value_sig29F5 = this._injector["get"](x, t.Quantity["OPTIONAL"])) == null || var_core_value_sig29F5.disableLocalCache();
    }
    (var_core_value_sig1F51 = this._config) != null && var_core_value_sig1F51.enableAuthServer && (0, t.touchDependencies)(this._injector, [[W]]), (0, t.touchDependencies)(this._injector, [[K], [H], [X]]);
  }
};
g($, "pluginName", "UNIVER_COLLABORATION_CLIENT_PLUGIN"), g($, "packageName", $e), g($, "version", et), $ = y([(0, t.DependentOn)(u.UniverLicensePlugin, l.UniverNetworkPlugin, e.UniverCollaborationPlugin), v(1, t.ILogService), v(2, (0, t.Inject)(t.Injector)), v(3, t.IConfigService)], $), Object.defineProperty(exports, "AuthzIoHttpService", {
  enumerable: true,
  get: function () {
    return G;
  }
}), Object.defineProperty(exports, "AwaitingState", {
  enumerable: true,
  get: function () {
    return k;
  }
}), Object.defineProperty(exports, "AwaitingWithPendingState", {
  enumerable: true,
  get: function () {
    return A;
  }
}), Object.defineProperty(exports, "BaseCollaborationEntity", {
  enumerable: true,
  get: function () {
    return I;
  }
}), Object.defineProperty(exports, "BoardCollaborationEntity", {
  enumerable: true,
  get: function () {
    return z;
  }
}), exports.COLLABORATION_CLIENT_PLUGIN_CONFIG_KEY = m, Object.defineProperty(exports, "CollaborationAttachmentIoService", {
  enumerable: true,
  get: function () {
    return U;
  }
}), Object.defineProperty(exports, "CollaborationController", {
  enumerable: true,
  get: function () {
    return H;
  }
}), Object.defineProperty(exports, "CollaborationEntity", {
  enumerable: true,
  get: function () {
    return P;
  }
}), Object.defineProperty(exports, "CollaborationImageIoService", {
  enumerable: true,
  get: function () {
    return J;
  }
}), Object.defineProperty(exports, "CollaborationSession", {
  enumerable: true,
  get: function () {
    return ve;
  }
}), Object.defineProperty(exports, "CollaborationSessionService", {
  enumerable: true,
  get: function () {
    return V;
  }
}), Object.defineProperty(exports, "CollaborationSocketService", {
  enumerable: true,
  get: function () {
    return Ye;
  }
}), exports.CollaborationStatus = Be, exports.CollaborationUIEventId = ie, exports.CollaborationUIEventService = _, Object.defineProperty(exports, "CollaborativeUndoRedoService", {
  enumerable: true,
  get: function () {
    return Q;
  }
}), exports.CommentService = ae, Object.defineProperty(exports, "ConflictState", {
  enumerable: true,
  get: function () {
    return j;
  }
}), exports.DEFAULT_COLLAB_WEB_SOCKET_URL = "ws://127.0.0.1:8000/universer-api/comb/connect", exports.DEFAULT_REMOTE_UNISCRIPT_EXECUTION_ENDPOINT = "/universer-api/uniscript", exports.DEFAULT_WS_SESSION_TICKET_URL = "/universer-api/user/session-ticket", Object.defineProperty(exports, "DataLoaderService", {
  enumerable: true,
  get: function () {
    return q;
  }
}), Object.defineProperty(exports, "DocCollaborationEntity", {
  enumerable: true,
  get: function () {
    return F;
  }
}), Object.defineProperty(exports, "FetchingMissState", {
  enumerable: true,
  get: function () {
    return N;
  }
}), exports.HEARTBEAT_INTERVAL_KEY = "HEARTBEAT_INTERVAL", exports.HEARTBEAT_TIMEOUT_KEY = "HEARTBEAT_TIMEOUT", exports.IAttachmentIoService = nt, exports.ICollaborationClientAdapterService = Xe, exports.ICollaborationSocketService = qe, exports.ILocalCacheService = x, exports.INetworkConditionService = We, exports.ISingleActiveUnitService = C, exports.LOCAL_CACHE_INTERVAL = 1000, exports.LOCAL_CACHE_INTERVAL_KEY = "LOCAL_CACHE_INTERVAL", Object.defineProperty(exports, "MemberService", {
  enumerable: true,
  get: function () {
    return b;
  }
}), Object.defineProperty(exports, "MentionIoHttpService", {
  enumerable: true,
  get: function () {
    return Y;
  }
}), Object.defineProperty(exports, "OfflineState", {
  enumerable: true,
  get: function () {
    return M;
  }
}), Object.defineProperty(exports, "PdfCollaborationEntity", {
  enumerable: true,
  get: function () {
    return B;
  }
}), Object.defineProperty(exports, "PendingState", {
  enumerable: true,
  get: function () {
    return O;
  }
}), exports.REMOTE_UNISCRIPT_EXECUTION_ENDPOINT_KEY = "REMOTE_UNISCRIPT_EXECUTION_ENDPOINT", exports.RETRY_CONNECTING_MAX_COUNT_KEY = "RETRY_CONNECTING_MAX_COUNT", exports.SessionStatus = ge, Object.defineProperty(exports, "SheetCollaborationEntity", {
  enumerable: true,
  get: function () {
    return L;
  }
}), Object.defineProperty(exports, "SheetTransformSelectionsService", {
  enumerable: true,
  get: function () {
    return S;
  }
}), Object.defineProperty(exports, "SlideCollaborationEntity", {
  enumerable: true,
  get: function () {
    return R;
  }
}), Object.defineProperty(exports, "SnapshotServerOverHTTPService", {
  enumerable: true,
  get: function () {
    return Z;
  }
}), Object.defineProperty(exports, "SyncedState", {
  enumerable: true,
  get: function () {
    return D;
  }
}), exports.UnitStatus = xe, Object.defineProperty(exports, "UniverCollaborationClientPlugin", {
  enumerable: true,
  get: function () {
    return $;
  }
}), exports.createUniverCollaborationAdapter = Ze, exports.deserializeToCombResponse = Ge, exports.getLocalCacheKey = ye, exports.serializeCombRequest = Ke;
