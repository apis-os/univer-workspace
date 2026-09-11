Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
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
function te(_0x269ec5) {
 return JSON.stringify(_0x269ec5).length;
}
function h(_0x4ed19a) {
 "@babel/helpers - typeof";
 return (
 (h =
 typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
 ? function (_0x536247) {
 return typeof _0x536247;
 }
 : function (_0x2bf27e) {
 return _0x2bf27e &&
 typeof Symbol == "function" &&
 _0x2bf27e.constructor === Symbol &&
 _0x2bf27e !== Symbol.prototype
 ? "symbol"
 : typeof _0x2bf27e;
 }),
 h(_0x4ed19a)
 );
}
function ne(_0x21e1b7, _0x52b920) {
 if (h(_0x21e1b7) != "object" || !_0x21e1b7) return _0x21e1b7;
 var _0x2e1acc = _0x21e1b7[Symbol.toPrimitive];
 if (_0x2e1acc !== undefined) {
 var _0x5f6f6b = _0x2e1acc.call(_0x21e1b7, _0x52b920 || "default");
 if (h(_0x5f6f6b) != "object") return _0x5f6f6b;
 throw TypeError("@@toPrimitive must return a primitive value.");
 }
 return (_0x52b920 === "string" ? String : Number)(_0x21e1b7);
}
function re(_0x11395a) {
 var _0x295f16 = ne(_0x11395a, "string");
 return h(_0x295f16) == "symbol" ? _0x295f16 : _0x295f16 + "";
}
function g(_0x478246, _0x153b2e, _0x21a3e0) {
 return (
 (_0x153b2e = re(_0x153b2e)) in _0x478246
 ? Object.defineProperty(_0x478246, _0x153b2e, {
 value: _0x21a3e0,
 enumerable: true,
 configurable: true,
 writable: true,
 })
 : (_0x478246[_0x153b2e] = _0x21a3e0),
 _0x478246
 );
}
let ie = (function (_0x17c65c) {
 return (
 (_0x17c65c.OTHER_CLIENT_EDITING = "OTHER_CLIENT_EDITING"),
 (_0x17c65c.PERMISSION_DENIED = "PERMISSION_DENIED"),
 (_0x17c65c.CONFLICT = "CONFLICT"),
 (_0x17c65c.CLOSE_ROOM = "CLOSE_ROOM"),
 (_0x17c65c.JOIN_ROOM_FAILED = "JOIN_ROOM_FAILED"),
 (_0x17c65c.SOCKET_FAILED_RETRY = "SOCKET_FAILED_RETRY"),
 (_0x17c65c.SOCKET_FAILED = "SOCKET_FAILED"),
 (_0x17c65c.SUBMIT_CHANGESET_TIMEOUT = "SUBMIT_CHANGESET_TIMEOUT"),
 _0x17c65c
 );
})({});
var _ = class {
 constructor() {
 (g(this, "_event$", new i["Subject"]()),
 g(this, "event$", this._event$["asObservable"]()));
 }
 emitEvent(_0x4cad93) {
 this._event$["next"](_0x4cad93);
 }
 },
 ae = class {
 constructor() {
 (g(this, "_commentUpdate$", new i["Subject"]()),
 g(this, "commentUpdate$", this._commentUpdate$["asObservable"]()));
 }
 onCommentUpdate(_0x4a3f75) {
 this._commentUpdate$["next"](_0x4a3f75);
 }
 };
function v(_0x5d5f3a, _0xdb3ae0) {
 return function (_0xc37e58, _0x3bb2f4) {
 _0xdb3ae0(_0xc37e58, _0x3bb2f4, _0x5d5f3a);
 };
}
function y(_0x5c3cd8, _0x4c3577, _0x2d3280, _0x22acf6) {
 var _0x1a192d = arguments.length,
 _0x7d15cf =
 _0x1a192d < 3
 ? _0x4c3577
 : _0x22acf6 === null
 ? (_0x22acf6 = Object.getOwnPropertyDescriptor(_0x4c3577, _0x2d3280))
 : _0x22acf6,
 _0x1867b4;
 if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
 _0x7d15cf = Reflect.decorate(_0x5c3cd8, _0x4c3577, _0x2d3280, _0x22acf6);
 else {
 for (var _0x7fbe23 = _0x5c3cd8.length - 1; _0x7fbe23 >= 0; _0x7fbe23--)
 (_0x1867b4 = _0x5c3cd8[_0x7fbe23]) &&
 (_0x7d15cf =
 (_0x1a192d < 3
 ? _0x1867b4(_0x7d15cf)
 : _0x1a192d > 3
 ? _0x1867b4(_0x4c3577, _0x2d3280, _0x7d15cf)
 : _0x1867b4(_0x4c3577, _0x2d3280)) || _0x7d15cf);
 }
 return (
 _0x1a192d > 3 &&
 _0x7d15cf &&
 Object.defineProperty(_0x4c3577, _0x2d3280, _0x7d15cf),
 _0x7d15cf
 );
}
let b = class extends t.Disposable {
 constructor(_0x34ed31) {
 (super(),
 (this._univerInstanceService = _0x34ed31),
 g(this, "_roomMembers", new Map()),
 g(this, "_roomCreated$", new i["Subject"]()),
 this.disposeWithMe(
 (0, i.merge)(
 this._univerInstanceService["getTypeOfUnitDisposed$"](
 t.UniverInstanceType["UNIVER_SHEET"],
 ).pipe((0, s.map)((_0x34a58a) => _0x34a58a.getUnitId())),
 this._univerInstanceService["getTypeOfUnitDisposed$"](
 t.UniverInstanceType["UNIVER_DOC"],
 ).pipe((0, s.map)((_0x559f7a) => _0x559f7a.getUnitId())),
 this._univerInstanceService["getTypeOfUnitDisposed$"](
 t.UniverInstanceType["UNIVER_BOARD"],
 ).pipe((0, s.map)((_0x512d1b) => _0x512d1b.getUnitId())),
 this._univerInstanceService["getTypeOfUnitDisposed$"](
 t.UniverInstanceType["UNIVER_BASE"],
 ).pipe((0, s.map)((_0x30ca36) => _0x30ca36.getUnitId())),
 ).subscribe((_0x149711) => this._removeRoom(_0x149711)),
 ));
 }
 waitForRoom$(_0x1323c2) {
 return this._roomMembers["has"](_0x1323c2)
 ? (0, i.of)(this._roomMembers["get"](_0x1323c2))
 : this._roomCreated$["pipe"](
 (0, s.map)((_0xd5babb) => {
 if (_0xd5babb === _0x1323c2)
 return this._roomMembers["get"](_0xd5babb);
 }),
 );
 }
 updateMember(_0x3717de, _0x25536d) {
 let _0x15354e = this._roomMembers["get"](_0x3717de);
 (_0x15354e ||
 ((_0x15354e = new oe()),
 this._roomMembers["set"](_0x3717de, _0x15354e),
 this._roomCreated$["next"](_0x3717de)),
 _0x15354e.updateMember(_0x25536d));
 }
 removeMember(_0xd2cd41, _0x42f36d) {
 let _0x15b04f = this._roomMembers["get"](_0xd2cd41);
 _0x15b04f && _0x15b04f.removeMember(_0x42f36d);
 }
 getRoom(_0x1a201d) {
 return this._roomMembers["get"](_0x1a201d);
 }
 getMember(_0x3c1ba2, _0x14af82) {
 let _0x45bc9f = this._roomMembers["get"](_0x3c1ba2);
 if (_0x45bc9f) return _0x45bc9f.getMember(_0x14af82);
 }
 _removeRoom(_0x32b8b2) {
 let _0x42414c = this._roomMembers["get"](_0x32b8b2);
 _0x42414c && (_0x42414c.dispose(), this._roomMembers["delete"](_0x32b8b2));
 }
 dispose() {
 (this._roomMembers["forEach"]((_0xda7227) => _0xda7227.dispose()),
 this._roomMembers["clear"](),
 this._roomCreated$["complete"]());
 }
};
b = y([v(0, t.IUniverInstanceService)], b);
var oe = class extends t.Disposable {
 constructor(..._0x55384b) {
 (super(..._0x55384b),
 g(this, "_members", new Map()),
 g(this, "_members$", new i["BehaviorSubject"](this._members)),
 g(this, "members$", this._members$["asObservable"]()));
 }
 dispose() {
 (this._members["clear"](), this._members$["complete"]());
 }
 updateMember(_0xbbbf97) {
 (this._members["set"](_0xbbbf97.memberID, _0xbbbf97), this._emitMembers());
 }
 removeMember(_0x200f6a) {
 (this._members["delete"](_0x200f6a), this._emitMembers());
 }
 getMember(_0xf118f2) {
 return this._members["get"](_0xf118f2);
 }
 getAllMembers() {
 return Array.from(this._members["values"]());
 }
 _emitMembers() {
 this._members$["next"](this._members);
 }
};
function se(_0x2fe9ad, _0xe18bdf) {
 if (le(_0x2fe9ad)) return _0xe18bdf;
 if (_0xe18bdf.eventID === e.CollaborationEvent["SUBMIT_CHANGESET"]) {
 let _0x214612 = me(_0x2fe9ad),
 _0x2c6c0b = _0xe18bdf;
 return {
 ..._0x2c6c0b,
 data: {
 ..._0x2c6c0b.data,
 unitID: _0x2fe9ad.target["unitId"],
 unitType: _0x2fe9ad.target["unitType"] ?? _0x2c6c0b.data["unitType"],
 changeset: _0x214612.toRemote(
 _0x2c6c0b.data["changeset"],
 he(_0x2fe9ad),
 ),
 },
 };
 }
 if (_0xe18bdf.eventID === e.CollaborationEvent["FETCH_MISSING"]) {
 let _0x38e35f = _0xe18bdf;
 return {
 ..._0x38e35f,
 data: {
 ..._0x38e35f.data,
 unitID: _0x2fe9ad.target["unitId"],
 unitType: _0x2fe9ad.target["unitType"] ?? _0x38e35f.data["unitType"],
 },
 };
 }
 return _0xe18bdf;
}
function ce(_0x137ee9, _0x593b08) {
 if (le(_0x137ee9)) return [_0x593b08];
 switch (_0x593b08.eventID) {
 case e.CollaborationEvent["NEW_CHANGESETS"]:
 return [ue(_0x137ee9, _0x593b08)];
 case e.CollaborationEvent["PSEUDO_FETCH_MISSING_RESULT"]:
 return [fe(_0x137ee9, _0x593b08)];
 case e.CollaborationEvent["CHANGESET_SHOULD_RETRY"]:
 return [de(_0x137ee9, _0x593b08)];
 default:
 return [_0x593b08];
 }
}
function le(_0x3f19d3) {
 return (
 _0x3f19d3.target["endpoint"] == null &&
 _0x3f19d3.target["unitId"] === _0x3f19d3.localUnitId &&
 !_0x3f19d3.changeset
 );
}
function ue(_0x2bd7c8, _0xa9aaa) {
 return {
 ..._0xa9aaa,
 data: (0, e.parseChangesetToProtocol)(
 pe(_0x2bd7c8, (0, e.parseProtocolChangeset)(_0xa9aaa.data)),
 ),
 };
}
function de(_0x368b8f, _0x3f75fe) {
 return { ..._0x3f75fe, data: pe(_0x368b8f, _0x3f75fe.data) };
}
function fe(_0x21cce4, _0x8310d7) {
 let _0x4ec1ce = _0x8310d7.data;
 return {
 ..._0x8310d7,
 data: {
 ..._0x4ec1ce,
 changesets: _0x4ec1ce.changesets["map"]((_0x4d7be1) =>
 (0, e.parseChangesetToProtocol)(
 pe(_0x21cce4, (0, e.parseProtocolChangeset)(_0x4d7be1)),
 ),
 ),
 },
 };
}
function pe(_0x2d5067, _0x961b38) {
 return me(_0x2d5067).toLocal(_0x961b38, he(_0x2d5067));
}
function me(_0x5af13e) {
 if (!_0x5af13e.changeset)
 throw Error("COLLABORATION_CHANGESET_TRANSLATION_REQUIRED");
 return _0x5af13e.changeset;
}
function he(_0x571710) {
 return {
 localUnitId: _0x571710.localUnitId,
 unitType: _0x571710.unitType,
 target: _0x571710.target,
 };
}
let ge = (function (_0x7b911c) {
 return (
 (_0x7b911c[(_0x7b911c.IDLE = 0)] = "IDLE"),
 (_0x7b911c[(_0x7b911c.JOINING = 1)] = "JOINING"),
 (_0x7b911c[(_0x7b911c.OFFLINE = 2)] = "OFFLINE"),
 (_0x7b911c[(_0x7b911c.ONLINE = 3)] = "ONLINE"),
 _0x7b911c
 );
})({});
const _e = {
 [a.CmdRspCode["FAIL"]]: "session.join-failed",
 [a.CmdRspCode["JOIN_ROOM_FULL"]]: "session.room-full",
 [a.CmdRspCode["JOIN_ROOM_NOT_EXISTS"]]: "session.room-not-exists",
 [a.CmdRspCode["JOIN_ROOM_PERMISSION_DENIED"]]:
 "session.room-permission-denied",
 [a.CmdRspCode["GLOBAL_ROOMS_CNT_EXCEEDS"]]: "session.room-cnt-exceeds",
};
let ve = class extends t.RxDisposable {
 get sessionStatus() {
 return this._sessionStatus$["getValue"]();
 }
 constructor(
 _0x2b8ede,
 _0x114611,
 _0x54072c,
 _0x25e89b,
 _0x29ff9d,
 _0x247a50,
 _0x57ce16,
 _0x5bfd65,
 ) {
 (super(),
 (this._identity = _0x2b8ede),
 (this._logService = _0x54072c),
 (this._configService = _0x25e89b),
 (this._memberService = _0x29ff9d),
 (this._commentService = _0x247a50),
 (this._collaborationUIEventService = _0x57ce16),
 (this._telemetryService = _0x5bfd65),
 g(this, "_sessionStatus$", new i["BehaviorSubject"](0)),
 g(this, "sessionStatus$", this._sessionStatus$["asObservable"]()),
 g(this, "_event$", new i["Subject"]()),
 g(this, "event$", this._event$["asObservable"]()),
 g(this, "_socket", undefined),
 g(this, "_socketMessageSubscription", undefined),
 g(this, "_collaborationTimeoutTimer", undefined),
 g(this, "_shouldReportTelemetry", false),
 g(this, "_telemetryInfo", null),
 (this._shouldReportTelemetry = !!this._telemetryService),
 _0x114611.pipe((0, i.takeUntil)(this.dispose$)).subscribe((_0x41f54c) => {
 if (_0x41f54c !== undefined) {
 if (((this._socket = _0x41f54c), _0x41f54c))
 (this._joinRoom(_0x41f54c),
 (this._socketMessageSubscription = _0x41f54c.message$[
 "subscribe"
 ]((_0x4cdd68) => {
 _0x4cdd68.routeKey === this._identity["target"].unitId &&
 this._onCombEvent(_0x4cdd68);
 })));
 else {
 var _0x46d7c1;
 (this._throwTelemetryCollaborationNewChangeset(),
 this._sessionStatus$["next"](2),
 (_0x46d7c1 = this._socketMessageSubscription) == null ||
 _0x46d7c1.unsubscribe(),
 (this._socketMessageSubscription = null));
 }
 }
 }));
 }
 getMemberID() {
 var _0x33c96b;
 return (
 ((_0x33c96b = this._socket) == null ? undefined : _0x33c96b.memberID) ??
 null
 );
 }
 dispose() {
 (super.dispose(),
 this.close(),
 this.dispose$["next"](),
 this.dispose$["complete"]());
 }
 close() {
 var _0x1d76b7;
 (this._throwTelemetryCollaborationNewChangeset(),
 (_0x1d76b7 = this._socket) == null ||
 _0x1d76b7.send({
 cmd: a.CombCmd["LEAVE"],
 data: { roomID: this._identity["target"].unitId },
 }),
 this._event$["complete"](),
 this._sessionStatus$["complete"]());
 }
 _onCombEvent(_0x85869f) {
 _0x85869f.cmd === a.CombCmd["JOIN"]
 ? this._onJoinRoomEvent(_0x85869f)
 : _0x85869f.cmd === a.CombCmd["RECV"] && this._onRecvEvent(_0x85869f);
 }
 _joinRoom(_0x239cec) {
 (this._sessionStatus$["next"](1),
 _0x239cec.send({
 cmd: a.CombCmd["JOIN"],
 routeKey: this._identity["target"].unitId,
 routeType: "",
 data: { rooms: [{ roomID: this._identity["target"].unitId }] },
 }));
 }
 _onJoinRoomEvent(_0x11d43a) {
 var _0x334155;
 if (_0x11d43a.code in _e) {
 (this._collaborationUIEventService["emitEvent"]({
 id: "JOIN_ROOM_FAILED",
 data: _e[_0x11d43a.code],
 }),
 this._sessionStatus$["next"](2));
 return;
 }
 this._sessionStatus$["next"](3);
 let _0x4c6a9e =
 (_0x334155 =
 _0x11d43a.data["roomInfos"][this._identity["target"].unitId]) == null
 ? undefined
 : _0x334155.members;
 _0x4c6a9e &&
 _0x4c6a9e.forEach((_0x1e3abe) =>
 this._memberService["updateMember"](
 this._identity["localUnitId"],
 _0x1e3abe,
 ),
 );
 }
 _onRecvEvent(_0x4d5141) {
 try {
 let _0x592346 = ce(this._identity, _0x4d5141.data);
 for (let _0x4659f2 of _0x592346)
 switch (_0x4659f2.eventID) {
 case e.CollaborationEvent["USERS_ENTER"]:
 (this._onUserJoin(_0x4659f2), this._event$["next"](_0x4659f2));
 break;
 case e.CollaborationEvent["USERS_LEAVE"]:
 (this._onUserLeave(_0x4659f2), this._event$["next"](_0x4659f2));
 break;
 case e.CollaborationEvent["CHANGESET_ACK"]:
 case e.CollaborationEvent["CHANGESET_SHOULD_RETRY"]:
 (this._stopTelemetryCollaborationNewChangeset(),
 this._clearCollaborationTimeoutTimer(),
 this._event$["next"](_0x4659f2));
 break;
 case e.CollaborationEvent["MSG_FOR_ERROR"]:
 (this._logService["error"](
 "save fail reason is " + JSON.stringify(_0x4659f2),
 ),
 this._event$["next"](_0x4659f2));
 break;
 case e.CollaborationEvent["COMMENT_UPDATE"]:
 (this._commentService["onCommentUpdate"](_0x4659f2.data),
 this._event$["next"](_0x4659f2));
 break;
 default:
 this._event$["next"](_0x4659f2);
 }
 } catch (_0x18c255) {
 this._logService["error"](_0x18c255, _0x4d5141);
 }
 }
 _onUserJoin(_0xef0a75) {
 this._memberService["updateMember"](
 this._identity["localUnitId"],
 _0xef0a75.data,
 );
 }
 _onUserLeave(_0x3dabae) {
 this._memberService["removeMember"](
 this._identity["localUnitId"],
 _0x3dabae.data["memberID"],
 );
 }
 async send(_0x570c56, _0x5e0977) {
 if (this.sessionStatus !== 3 || !this._socket)
 throw Error(
 "[CollaborationSession]: should not send message when the session is offline!",
 );
 try {
 let _0x3e3fc2 = se(this._identity, _0x570c56);
 (_0x3e3fc2.eventID === e.CollaborationEvent["SUBMIT_CHANGESET"] &&
 (this._scheduleCollaborationTimeoutTimer(),
 this._startTelemetryCollaborationNewChangeset(_0x3e3fc2)),
 this._socket["send"]({
 cmd: a.CombCmd["INGEST"],
 routeKey: this._identity["target"].unitId,
 routeType: "",
 data: _0x3e3fc2,
 }));
 } catch (_0x4d9da5) {
 this._logService["error"](_0x4d9da5);
 }
 }
 _scheduleCollaborationTimeoutTimer() {
 this._collaborationTimeoutTimer = setTimeout(
 () => {
 ((this._collaborationTimeoutTimer = null),
 this._collaborationUIEventService["emitEvent"]({
 id: "SUBMIT_CHANGESET_TIMEOUT",
 }));
 },
 this._configService["getConfig"]("HEARTBEAT_TIMEOUT") ?? 20000,
 );
 }
 _clearCollaborationTimeoutTimer() {
 this._collaborationTimeoutTimer &&=
 (clearTimeout(this._collaborationTimeoutTimer), null);
 }
 _startTelemetryCollaborationNewChangeset(_0x34ebdd) {
 if (!this._shouldReportTelemetry) return;
 let { data: _0x55bed2 } = _0x34ebdd,
 { unitID: _0x32f30e, changeset: _0x28cbcf } = _0x55bed2,
 { mutations: _0x82425a, type: _0x5da6d2 } = _0x28cbcf;
 this._telemetryInfo = {
 unitId: _0x32f30e,
 type: _0x5da6d2,
 startTime: performance.now(),
 stopTime: 0,
 duration: 0,
 size: te(_0x82425a),
 };
 }
 _stopTelemetryCollaborationNewChangeset() {
 if (this._shouldReportTelemetry) {
 if (!this._telemetryInfo) {
 this._logService["error"](
 "[CollaborationSession]",
 "telemetry info is not initialized",
 );
 return;
 }
 ((this._telemetryInfo["stopTime"] = performance.now()),
 (this._telemetryInfo["duration"] =
 this._telemetryInfo["stopTime"] - this._telemetryInfo["startTime"]),
 this._telemetryService["capture"](
 "collaboration_new_changeset",
 this._telemetryInfo,
 ),
 (this._telemetryInfo = null));
 }
 }
 _throwTelemetryCollaborationNewChangeset() {
 this._telemetryInfo = null;
 }
};
ve = y(
 [
 v(2, t.ILogService),
 v(3, t.IConfigService),
 v(4, (0, t.Inject)(b)),
 v(5, (0, t.Inject)(ae)),
 v(6, (0, t.Inject)(_)),
 v(7, (0, t.Optional)(o.ITelemetryService)),
 ],
 ve,
);
const x = (0, t.createIdentifier)("collaboration-client.local-cache-service");
function ye(_0x53b547) {
 return "unit-cache-" + _0x53b547;
}
function be(_0x519b59) {
 let { unitID: _0x11a63a, mutations: _0x123bf4 } = _0x519b59;
 return {
 unitId: _0x11a63a,
 subUnitId: _0x123bf4.length > 0 ? _0x123bf4[0].params["subUnitId"] : null,
 };
}
let S = class {
 constructor(_0x238437, _0x112a76, _0x295df0) {
 ((this._injector = _0x238437),
 (this._transformService = _0x112a76),
 (this._instanceService = _0x295df0));
 }
 transformSelections(_0x41852d) {
 var _0x5caeb5, _0x7bd784;
 let _0x1ee04d = this._injector["get"](r.SheetsSelectionsService),
 { unitId: _0x4de16f, subUnitId: _0x540853 } = be(_0x41852d),
 _0x4b4f0f =
 _0x1ee04d == null
 ? undefined
 : _0x1ee04d.getWorkbookSelections(_0x4de16f).getCurrentSelections(),
 _0x237af8 =
 (_0x5caeb5 = this._instanceService["getUnit"](_0x4de16f)) == null ||
 (_0x5caeb5 = _0x5caeb5.getActiveSheet()) == null
 ? undefined
 : _0x5caeb5.getSheetId();
 if (_0x4b4f0f.length === 0 || !_0x4de16f || !_0x540853) return;
 let _0x15bf3f = [
 {
 id: r.SetSelectionsOperation["id"],
 params: {
 unitId: _0x4de16f,
 subUnitId: _0x237af8,
 selections: t.Tools["deepClone"](_0x4b4f0f),
 },
 },
 ],
 _0xfb0e32 = this._transformService["transformMutationsWithChangeset"](
 _0x41852d,
 _0x15bf3f,
 );
 if (!(0, e.isTransformMutationsWithChangesetSuccess)(_0xfb0e32))
 throw _0xfb0e32.error;
 let _0x50f9d6 =
 (_0x7bd784 = _0xfb0e32.m2Prime[0]) == null ||
 (_0x7bd784 = _0x7bd784.params) == null
 ? undefined
 : _0x7bd784.selections;
 if (Array.isArray(_0x50f9d6) && _0x50f9d6.length) {
 if (
 _0x50f9d6.length === _0x15bf3f[0].params["selections"].length &&
 _0x50f9d6.every((_0x4da531, _0x4ca7cd) =>
 t.Rectangle["equals"](
 _0x4da531.range,
 _0x15bf3f[0].params["selections"][_0x4ca7cd].range,
 ),
 )
 )
 return;
 this._injector["get"](t.ICommandService).executeCommand(
 r.SetSelectionsOperation["id"],
 { unitId: _0x4de16f, subUnitId: _0x237af8, selections: _0x50f9d6 },
 );
 }
 }
};
S = y(
 [
 v(0, (0, t.Inject)(t.Injector)),
 v(1, e.ITransformService),
 v(2, t.IUniverInstanceService),
 ],
 S,
);
const C = (0, t.createIdentifier)(
 "univer-pro.collaboration-client.single-active-unit-service",
);
let xe = (function (_0x220062) {
 return (
 (_0x220062[(_0x220062.NO_OTHER_CLIENTS_EDITING = 0)] =
 "NO_OTHER_CLIENTS_EDITING"),
 (_0x220062[(_0x220062.OTHER_CLIENTS_EDITING = 1)] =
 "OTHER_CLIENTS_EDITING"),
 _0x220062
 );
})({});
function Se(_0x4e3b3e) {
 var _0x1074ab;
 return !!((_0x1074ab = _0x4e3b3e.params) != null && _0x1074ab.__splitChunk__);
}
const Ce = new Set([r.InsertSheetMutation["id"]]),
 we = new Set([
 c.AddSlidePageMutation["id"],
 c.EnsureSlideMasterPageMutation["id"],
 c.MoveSlidePageMutation["id"],
 c.RemoveSlidePageMutation["id"],
 ]);
function Te(_0x406e22, _0x47f674 = Ce) {
 let _0x364d12 = [];
 for (let _0x6d9771 of _0x406e22) {
 if (_0x47f674.has(_0x6d9771.id)) {
 if (_0x364d12.length > 0) break;
 _0x364d12.push(_0x6d9771);
 break;
 }
 if (Se(_0x6d9771)) {
 if (_0x364d12.length > 0) break;
 _0x364d12.push(_0x6d9771);
 break;
 }
 _0x364d12.push(_0x6d9771);
 }
 return _0x364d12;
}
function w(_0x4ad727, _0x36dd20, _0x309db3, _0x3cc76b, _0x164705) {
 let _0x5c3f2e = Te(_0x4ad727),
 _0x2aafa3 = _0x164705.getCurrentUser(),
 _0x3d9977 = (_0x2aafa3 == null ? undefined : _0x2aafa3.userID) ?? "unknown",
 _0xa1200d =
 (_0x2aafa3 == null ? undefined : _0x2aafa3.memberID) ?? "unknown";
 return {
 changeset: {
 unitID: _0x36dd20,
 type: (0, e.mapDocumentTypeToUniverInstanceType)(
 _0x309db3.getUnitType(_0x36dd20),
 ),
 baseRev: _0x3cc76b.getCurrentRevOfUnit(_0x36dd20),
 revision: 0,
 userID: _0x3d9977,
 memberID: _0xa1200d,
 mutations: _0x5c3f2e,
 },
 pendingMutations: _0x4ad727.slice(_0x5c3f2e.length),
 };
}
const Ee = w;
function De(_0x2e3858, _0x218b75, _0xef19a7, _0x59cac3, _0x19cf3a) {
 let _0x4d1cff = Te(_0x2e3858, we),
 _0x3c6993 = _0x19cf3a.getCurrentUser(),
 _0x418576 = (_0x3c6993 == null ? undefined : _0x3c6993.userID) ?? "unknown",
 _0x5a706 =
 (_0x3c6993 == null ? undefined : _0x3c6993.memberID) ?? "unknown";
 return {
 changeset: {
 unitID: _0x218b75,
 type: (0, e.mapDocumentTypeToUniverInstanceType)(
 _0xef19a7.getUnitType(_0x218b75),
 ),
 baseRev: _0x59cac3.getCurrentRevOfUnit(_0x218b75),
 revision: 0,
 userID: _0x418576,
 memberID: _0x5a706,
 mutations: _0x4d1cff,
 },
 pendingMutations: _0x2e3858.slice(_0x4d1cff.length),
 };
}
function Oe(_0x3db3aa, _0x4d1995, _0xecd4bd, _0x54f4f0, _0x1d8dc2) {
 let _0xe616c = _0x3db3aa.reduce((_0x1f624e, _0x8e252a) => {
 let _0x1aea48 = _0x1f624e[_0x1f624e.length - 1],
 { id: _0x51495e } = _0x1aea48 ?? {},
 { id: _0x5b6cef, type: _0x988d70 } = _0x8e252a,
 _0x38992a = _0x8e252a.params;
 if (_0x51495e && _0x51495e !== _0x5b6cef)
 throw Error(
 "Cannot\x20assemble\x20a\x20changeset\x20from\x20multiple\x20mutations\x20of\x20different\x20types:\x20" +
 _0x51495e +
 " - " +
 _0x5b6cef +
 ".",
 );
 if (!_0x1aea48)
 return [
 {
 id: _0x5b6cef,
 type: _0x988d70,
 params: {
 unitId: _0x38992a.unitId,
 textRanges: _0x38992a.textRanges,
 actions: _0x38992a.actions,
 },
 },
 ];
 let _0x57452c = _0x1aea48.params;
 return ke(_0x57452c, _0x38992a)
 ? [
 ..._0x1f624e.slice(0, -1),
 {
 ..._0x1aea48,
 id: _0x5b6cef,
 type: _0x988d70,
 params: {
 unitId: _0x38992a.unitId,
 textRanges: _0x38992a.textRanges,
 actions: t.JSONX["compose"](
 _0x57452c.actions,
 _0x38992a.actions,
 ),
 },
 },
 ]
 : [
 ..._0x1f624e,
 {
 id: _0x5b6cef,
 type: _0x988d70,
 params: {
 unitId: _0x38992a.unitId,
 textRanges: _0x38992a.textRanges,
 actions: _0x38992a.actions,
 },
 },
 ];
 }, []),
 _0x575977 = _0x1d8dc2.getCurrentUser(),
 _0x3267de = (_0x575977 == null ? undefined : _0x575977.userID) ?? "unknown",
 _0x5564cd =
 (_0x575977 == null ? undefined : _0x575977.memberID) ?? "unknown";
 return {
 changeset: {
 unitID: _0x4d1995,
 type: (0, e.mapDocumentTypeToUniverInstanceType)(
 _0xecd4bd.getUnitType(_0x4d1995),
 ),
 baseRev: _0x54f4f0.getCurrentRevOfUnit(_0x4d1995),
 revision: 0,
 userID: _0x3267de,
 memberID: _0x5564cd,
 mutations: _0xe616c,
 },
 pendingMutations: _0x3db3aa.slice(_0x3db3aa.length),
 };
}
function ke(_0x17a615, _0x4fd9e5) {
 return (
 !Ae(_0x17a615) && !Ae(_0x4fd9e5) && je(_0x17a615.actions, _0x4fd9e5.actions)
 );
}
function Ae(_0x746b81) {
 return _0x746b81.isCompositionEnd !== undefined;
}
function je(_0x2da993, _0x524850) {
 return (
 Me(_0x2da993) &&
 Me(_0x524850) &&
 !Pe(_0x2da993) &&
 !Pe(_0x524850) &&
 !Ne(_0x2da993) &&
 !Ne(_0x524850)
 );
}
function Me(_0x512c51) {
 return Fe(_0x512c51).some(
 (_0x5e2986) => T(_0x5e2986) && _0x5e2986.et === "text-x",
 );
}
function Ne(_0x77fd01) {
 return Fe(_0x77fd01).some(
 (_0x56ac76) =>
 Array.isArray(_0x56ac76) ||
 typeof _0x56ac76 == "string" ||
 typeof _0x56ac76 == "number",
 );
}
function Pe(_0x560495) {
 return Fe(_0x560495).some((_0x3146c6) =>
 !T(_0x3146c6) || _0x3146c6.et !== "text-x" || !Array.isArray(_0x3146c6.e)
 ? false
 : _0x3146c6.e["some"]((_0x5151a0) =>
 !T(_0x5151a0) || !T(_0x5151a0.body)
 ? false
 : Object.prototype["hasOwnProperty"].call(
 _0x5151a0.body,
 "tables",
 ) ||
 Object.prototype["hasOwnProperty"].call(
 _0x5151a0.body,
 "columnGroups",
 ) ||
 Object.prototype["hasOwnProperty"].call(
 _0x5151a0.body,
 "blockRanges",
 ),
 ),
 );
}
function Fe(_0x221c13) {
 if (!Array.isArray(_0x221c13)) return [];
 let _0x5e1461 = _0x221c13.includes("body")
 ? _0x221c13
 : _0x221c13.find(
 (_0x46b753) => Array.isArray(_0x46b753) && _0x46b753.includes("body"),
 );
 if (!Array.isArray(_0x5e1461)) return [];
 let _0x2aa2aa = _0x5e1461.indexOf("body");
 return _0x2aa2aa === -1 ? [] : _0x5e1461.slice(_0x2aa2aa + 1);
}
function T(_0x472342) {
 return (
 typeof _0x472342 == "object" && !!_0x472342 && !Array.isArray(_0x472342)
 );
}
function Ie(_0x4fd013, _0x4d5722) {
 let _0x2c8206 = new i.ReplaySubject(1);
 return (
 setTimeout(() => _0x2c8206.next(_0x4d5722), _0x4fd013),
 _0x2c8206.asObservable().pipe((0, i.take)(1))
 );
}
var Le, Re, ze;
let Be = (function (_0x1df5d1) {
 return (
 (_0x1df5d1.NOT_COLLAB = "not_collab"),
 (_0x1df5d1.SYNCED = "synced"),
 (_0x1df5d1.PENDING = "pending"),
 (_0x1df5d1.AWAITING = "awaiting"),
 (_0x1df5d1.AWAITING_WITH_PENDING = "awaiting_with_pending"),
 (_0x1df5d1.FETCH_MISS = "fetch_missing"),
 (_0x1df5d1.CONFLICT = "conflict"),
 (_0x1df5d1.OFFLINE = "offline"),
 _0x1df5d1
 );
})({});
const Ve = 20000,
 He = 180000;
var E = class {
 constructor(
 _0x495f14,
 _0x1d1492,
 _0x119640,
 _0xffd075,
 _0xf57771,
 _0x4f7183,
 _0x11a00,
 _0x406d21,
 _0x10fec4,
 ) {
 ((this.unitID = _0x495f14),
 (this.type = _0x1d1492),
 (this._handler = _0xf57771),
 (this._commandService = _0x4f7183),
 (this._undoRedoService = _0x11a00),
 (this._revisionService = _0x406d21),
 (this._localCacheService = _0x10fec4),
 g(this, "_awaitingChangeset", null),
 g(this, "_pendingMutations", []),
 (this._awaitingChangeset = _0x119640),
 (this._pendingMutations = _0xffd075));
 }
 _checkMissing(_0x2433e6) {
 let _0x481eff = this._revisionService["getCurrentRevOfUnit"](this.unitID);
 return _0x2433e6.revision > _0x481eff + 1
 ? (this._handler["onMissingChangesets"]({
 from: _0x481eff,
 to: _0x2433e6.revision - 1,
 }),
 true)
 : false;
 }
 _transformUndoredo(_0x3da242) {
 this._undoRedoService["transformUndoRedo"](this.unitID, _0x3da242);
 }
 _transformSelections(_0x14d0ce) {
 var _0x10c11f, _0x52bc18;
 (_0x10c11f = (_0x52bc18 = this._handler).onTransformSelections) == null ||
 _0x10c11f.call(_0x52bc18, _0x14d0ce);
 }
 _prepareTransformSelections(_0x2820fd) {
 var _0x8cc501, _0x2dc274;
 return (
 ((_0x8cc501 = (_0x2dc274 = this._handler).onPrepareTransformSelections) ==
 null
 ? undefined
 : _0x8cc501.call(_0x2dc274, _0x2820fd)) ?? null
 );
 }
 _transformIMECache(_0x365eec) {
 var _0x53fe03, _0x5a0bd9;
 return (_0x53fe03 = (_0x5a0bd9 = this._handler).onTransformIME) == null
 ? undefined
 : _0x53fe03.call(_0x5a0bd9, _0x365eec);
 }
 _transformStateCache(_0x4fbebe) {
 var _0x291945, _0x109ea3;
 return (_0x291945 = (_0x109ea3 = this._handler).onTransformState) == null
 ? undefined
 : _0x291945.call(_0x109ea3, _0x4fbebe);
 }
 _transformRemoteChangesetByIMECache(_0x120633) {
 var _0x3c167f, _0x2efd1f;
 return (
 ((_0x3c167f = (_0x2efd1f = this._handler)
 .onTransformRemoteChangesetByIMECache) == null
 ? undefined
 : _0x3c167f.call(_0x2efd1f, _0x120633)) ?? _0x120633
 );
 }
 _transformRemoteChangesetByStateCache(_0x52a57b) {
 var _0x412a79, _0x245bb1;
 return (
 ((_0x412a79 = (_0x245bb1 = this._handler)
 .onTransformRemoteChangesetByStateCache) == null
 ? undefined
 : _0x412a79.call(_0x245bb1, _0x52a57b)) ?? _0x52a57b
 );
 }
 _syncEditingCollabCursor(_0x1803d7) {
 if (this.type === t.UniverInstanceType["UNIVER_DOC"]) {
 let {
 unitID: _0x2e1021,
 mutations: _0x56a639,
 memberID: _0x40fc5d,
 } = _0x1803d7,
 _0x44045a =
 _0x56a639.length > 0 ? _0x56a639[0].params["textRanges"] : [];
 if (Array.isArray(_0x44045a) && _0x44045a.length > 0) {
 var _0x5e203b, _0x283aa7;
 (_0x5e203b = (_0x283aa7 = this._handler).onSyncEditingCollabCursor) ==
 null ||
 _0x5e203b.call(_0x283aa7, {
 unitID: _0x2e1021,
 memberID: _0x40fc5d,
 textRanges: _0x44045a,
 });
 }
 }
 }
 _updateLocalCache() {
 var _0x1a661d;
 (_0x1a661d = this._localCacheService) == null ||
 _0x1a661d.updateOfflineData(
 this.unitID,
 this.type,
 this._awaitingChangeset,
 this._pendingMutations,
 );
 }
 _getCurrentRevision() {
 return this._revisionService["getCurrentRevOfUnit"](this.unitID);
 }
 _incrementRevisionNumber() {
 this._revisionService["incrementRevOfUnit"](this.unitID);
 }
 _executeRemoteChangeset(_0x3bdcf1) {
 let _0x53be66 = this._transformRemoteChangesetByIMECache(_0x3bdcf1);
 _0x53be66 = this._transformRemoteChangesetByStateCache(_0x53be66);
 let _0xea9a18 = this._prepareTransformSelections(_0x53be66),
 _0x5220fe = (0, t.sequenceExecute)(
 _0x53be66.mutations,
 this._commandService,
 { fromCollab: true },
 );
 if (!_0x5220fe.result)
 throw (
 _0xea9a18 == null || _0xea9a18.rollback(),
 _0x5220fe.error instanceof Error
 ? _0x5220fe.error
 : Error(_0x5220fe.error ?? "[CollaborationState]: apply error!")
 );
 (_0xea9a18 == null || _0xea9a18.commit(),
 this._transformIMECache(_0x53be66),
 this._transformStateCache(_0x53be66),
 this._transformUndoredo(_0x3bdcf1),
 this._transformSelections(_0x53be66),
 this._syncEditingCollabCursor(_0x53be66),
 this._incrementRevisionNumber());
 }
};
let D = class extends E {
 constructor(
 _0x5eaf7a,
 _0x49f466,
 _0x2a39ae,
 _0x33a267,
 _0x20fffe,
 _0x576766,
 _0xf1a371,
 _0x3510bb,
 _0x2be5bc,
 _0x40e8cc,
 ) {
 (super(
 _0x5eaf7a,
 _0x49f466,
 null,
 [],
 _0x2a39ae,
 _0xf1a371,
 _0x576766,
 _0x33a267,
 _0x40e8cc,
 ),
 (this._injector = _0x20fffe),
 (this._logService = _0x3510bb),
 (this._transformService = _0x2be5bc),
 (this.localCacheService = _0x40e8cc),
 g(this, "status", "synced"));
 }
 appendMutation(_0x10f1aa) {
 let _0x1ab8ce = this._injector["createInstance"](
 O,
 this.unitID,
 this.type,
 [_0x10f1aa],
 this._handler,
 );
 return (_0x1ab8ce._schedule(), _0x1ab8ce._updateLocalCache(), _0x1ab8ce);
 }
 onRemoteChangeset(_0x3a24ec) {
 if (this._checkMissing(_0x3a24ec))
 return this._injector["createInstance"](
 N,
 this.unitID,
 this.type,
 null,
 [],
 null,
 [_0x3a24ec],
 this._handler,
 );
 try {
 let _0x411bc2 = this._transformService["transformMutationsWithChangeset"](
 _0x3a24ec,
 [e.EmptyMutationInfo],
 );
 if ((0, e.isTransformMutationsWithChangesetSuccess)(_0x411bc2)) {
 let { c1Prime: _0xce87a6 } = _0x411bc2;
 return (this._executeRemoteChangeset(_0xce87a6), this);
 }
 throw _0x411bc2.error;
 } catch (_0x1a82fb) {
 return (this._logService["error"](_0x1a82fb), this._onConflict(false));
 }
 }
 _onConflict(_0x330f90) {
 return this._injector["createInstance"](
 j,
 this.unitID,
 this.type,
 null,
 [],
 this._handler,
 _0x330f90,
 );
 }
 onRemoteAck(_0x5c0931) {
 if (_0x5c0931.revision <= this._getCurrentRevision()) return this;
 throw Error("[SyncedState]:\x20received\x20acknowledgement.");
 }
 onRemoteRej() {
 throw Error("[SyncedState]:\x20received\x20rejection.");
 }
 onRemoteRetry() {
 return this;
 }
 toggleOffline() {
 return this._injector["createInstance"](
 M,
 this.unitID,
 this.type,
 null,
 [],
 this._handler,
 );
 }
 toggleOnline() {
 return this;
 }
 resend() {
 throw Error("[SyncedState]:\x20invalid\x20calling\x20to\x20`resend`.");
 }
 fetchMiss() {
 let _0x4c88d0 = this._revisionService["getCurrentRevOfUnit"](this.unitID);
 return (
 this._handler["onMissingChangesets"]({ from: _0x4c88d0, to: 0 }),
 this._injector["createInstance"](
 N,
 this.unitID,
 this.type,
 null,
 [],
 null,
 [],
 this._handler,
 )
 );
 }
};
D = y(
 [
 v(3, (0, t.Inject)(e.RevisionService)),
 v(4, (0, t.Inject)(t.Injector)),
 v(5, t.IUndoRedoService),
 v(6, t.ICommandService),
 v(7, t.ILogService),
 v(8, e.ITransformService),
 v(9, (0, t.Optional)(x)),
 ],
 D,
);
let O = (Le = class extends E {
 constructor(
 _0xd128b1,
 _0x56649f,
 _0x422a98,
 _0x2cc8bf,
 _0x5f286c,
 _0x878b20,
 _0xae1701,
 _0xaec623,
 _0x51caed,
 _0x2aa263,
 _0x448e04,
 _0x4f2fcf,
 _0x130d66,
 _0xa20e14,
 ) {
 (super(
 _0xd128b1,
 _0x56649f,
 null,
 _0x422a98,
 _0x2cc8bf,
 _0x51caed,
 _0x130d66,
 _0x878b20,
 _0xa20e14,
 ),
 (this._injector = _0x5f286c),
 (this._userManagerService = _0xae1701),
 (this._logService = _0xaec623),
 (this._configService = _0x2aa263),
 (this._transformService = _0x448e04),
 (this._univerInstanceService = _0x4f2fcf),
 g(this, "status", "pending"),
 g(this, "_scheduleCompleteTimestamp", null),
 g(this, "_sendingTimer", null));
 }
 appendMutation(_0xebe598) {
 return (
 this._pendingMutations["push"](_0xebe598),
 this._updateLocalCache(),
 this
 );
 }
 onRemoteChangeset(_0x197f7f) {
 if (this._checkMissing(_0x197f7f))
 return (
 this._clearScheduledTask(),
 this._injector["createInstance"](
 N,
 this.unitID,
 this.type,
 null,
 this._pendingMutations,
 null,
 [_0x197f7f],
 this._handler,
 )
 );
 try {
 let _0x377494 = this._transformService["transformMutationsWithChangeset"](
 _0x197f7f,
 this._pendingMutations,
 );
 if ((0, e.isTransformMutationsWithChangesetSuccess)(_0x377494)) {
 let { c1Prime: _0x4b4d0a, m2Prime: _0x1158e9 } = _0x377494;
 this._executeRemoteChangeset(_0x4b4d0a);
 let _0x1c858d = this._injector["createInstance"](
 Le,
 this.unitID,
 this.type,
 _0x1158e9,
 this._handler,
 );
 this._clearScheduledTask();
 let _0x391090 = new Date().getTime(),
 _0x15a7b8 = this._scheduleCompleteTimestamp
 ? Math.max(this._scheduleCompleteTimestamp - _0x391090, 0)
 : this._getSendChangesetTimeout();
 return (_0x1c858d._schedule(_0x15a7b8), _0x1c858d);
 }
 throw _0x377494.error;
 } catch (_0x257221) {
 return (this._logService["error"](_0x257221), this._onConflict(false));
 }
 }
 onRemoteAck(_0x55060e) {
 if (_0x55060e.revision <= this._getCurrentRevision()) return this;
 throw Error("[PendingState]:\x20received\x20acknowledgement.");
 }
 onRemoteRej() {
 throw Error("[PendingState]: received rejection.");
 }
 onRemoteRetry() {
 return this;
 }
 toggleOffline() {
 return (
 this._clearScheduledTask(),
 this._injector["createInstance"](
 M,
 this.unitID,
 this.type,
 null,
 this._pendingMutations,
 this._handler,
 )
 );
 }
 toggleOnline() {
 return this;
 }
 _schedule(_0x56f609) {
 let _0x21b675 = _0x56f609 ?? this._getSendChangesetTimeout();
 ((this._scheduleCompleteTimestamp = new Date().getTime() + _0x21b675),
 (this._sendingTimer = setTimeout(() => {
 this._clearScheduledTask();
 let _0x534e96 = null;
 switch (this.type) {
 case t.UniverInstanceType["UNIVER_SHEET"]:
 _0x534e96 = w(
 this._pendingMutations,
 this.unitID,
 this._univerInstanceService,
 this._revisionService,
 this._userManagerService,
 );
 break;
 case t.UniverInstanceType["UNIVER_DOC"]:
 _0x534e96 = this._pendingMutations["every"](
 (_0x1e703f) => _0x1e703f.id === n.RichTextEditingMutation["id"],
 )
 ? Oe(
 this._pendingMutations,
 this.unitID,
 this._univerInstanceService,
 this._revisionService,
 this._userManagerService,
 )
 : w(
 this._pendingMutations,
 this.unitID,
 this._univerInstanceService,
 this._revisionService,
 this._userManagerService,
 );
 break;
 case t.UniverInstanceType["UNIVER_SLIDE"]:
 _0x534e96 = De(
 this._pendingMutations,
 this.unitID,
 this._univerInstanceService,
 this._revisionService,
 this._userManagerService,
 );
 break;
 case t.UniverInstanceType["UNIVER_PDF"]:
 _0x534e96 = Ee(
 this._pendingMutations,
 this.unitID,
 this._univerInstanceService,
 this._revisionService,
 this._userManagerService,
 );
 break;
 case t.UniverInstanceType["UNIVER_BOARD"]:
 _0x534e96 = w(
 this._pendingMutations,
 this.unitID,
 this._univerInstanceService,
 this._revisionService,
 this._userManagerService,
 );
 break;
 case t.UniverInstanceType["UNIVER_BASE"]:
 _0x534e96 = w(
 this._pendingMutations,
 this.unitID,
 this._univerInstanceService,
 this._revisionService,
 this._userManagerService,
 );
 break;
 default:
 throw Error(
 "[PendingState]: unhandled univer type: " +
 this.type +
 " in _schedule.",
 );
 }
 let { changeset: _0x151479, pendingMutations: _0x30e901 } = _0x534e96;
 this._handler["onSendChangeset"](_0x151479);
 let _0x1e4610 = _0x30e901.length
 ? this._injector["createInstance"](
 A,
 this.unitID,
 this.type,
 _0x151479,
 _0x30e901,
 this._handler,
 undefined,
 )
 : this._injector["createInstance"](
 k,
 this.unitID,
 this.type,
 _0x151479,
 this._handler,
 );
 (_0x1e4610._updateLocalCache(),
 this._handler["onStateChange"](this, _0x1e4610));
 }, _0x21b675)));
 }
 _getSendChangesetTimeout() {
 let _0x316d6f = this._configService["getConfig"](m);
 return (
 (_0x316d6f == null ? undefined : _0x316d6f.sendChangesetTimeout) ?? 2000
 );
 }
 resend() {
 throw Error("[PendingState]: invalid calling to `resend`.");
 }
 _clearScheduledTask() {
 this._sendingTimer != null &&
 (clearTimeout(this._sendingTimer), (this._sendingTimer = null));
 }
 _onConflict(_0x4a3095) {
 return (
 this._clearScheduledTask(),
 this._injector["createInstance"](
 j,
 this.unitID,
 this.type,
 null,
 this._pendingMutations,
 this._handler,
 _0x4a3095,
 )
 );
 }
});
O = Le = y(
 [
 v(4, (0, t.Inject)(t.Injector)),
 v(5, (0, t.Inject)(e.RevisionService)),
 v(6, (0, t.Inject)(t.UserManagerService)),
 v(7, t.ILogService),
 v(8, t.ICommandService),
 v(9, t.IConfigService),
 v(10, e.ITransformService),
 v(11, t.IUniverInstanceService),
 v(12, t.IUndoRedoService),
 v(13, (0, t.Optional)(x)),
 ],
 O,
);
let k = (Re = class extends E {
 constructor(
 _0x1d612f,
 _0x266b2c,
 _0x395aef,
 _0xf89a28,
 _0x2cc932,
 _0xeb407,
 _0x4e5684,
 _0x36867e,
 _0x21b8fb,
 _0xbdafb8,
 _0x3d51df,
 ) {
 (super(
 _0x1d612f,
 _0x266b2c,
 _0x395aef,
 [],
 _0xf89a28,
 _0x4e5684,
 _0xbdafb8,
 _0xeb407,
 _0x3d51df,
 ),
 (this._injector = _0x2cc932),
 (this._logService = _0x36867e),
 (this._transformService = _0x21b8fb),
 g(this, "status", "awaiting"),
 g(this, "_resendTimeout", 0),
 g(this, "_maxTotalRetryTimeout", 0),
 g(this, "_resendTimer", undefined),
 g(this, "_sender", undefined));
 }
 appendMutation(_0x3f036e) {
 this._clearScheduledTask();
 let _0xa9c935 = this._injector["createInstance"](
 A,
 this.unitID,
 this.type,
 this._awaitingChangeset,
 [_0x3f036e],
 this._handler,
 this._resendTimer,
 );
 return (_0xa9c935._updateLocalCache(), _0xa9c935);
 }
 onRemoteChangeset(_0x351174) {
 if (this._checkMissing(_0x351174))
 return (
 this._clearScheduledTask(),
 this._injector["createInstance"](
 N,
 this.unitID,
 this.type,
 this._awaitingChangeset,
 [],
 null,
 [_0x351174],
 this._handler,
 )
 );
 try {
 let _0x4750e3 = this._transformService["transformChangesets"](
 [_0x351174],
 [this._awaitingChangeset],
 false,
 );
 if ((0, e.isTransformChangesetsSuccess)(_0x4750e3)) {
 let { c1Prime: _0x119886, c2Prime: _0x590982 } = _0x4750e3;
 (this._executeRemoteChangeset(_0x119886[0]),
 (_0x590982[0].baseRev = this._getCurrentRevision()),
 this._clearScheduledTask());
 let _0x4741e0 = this._injector["createInstance"](
 Re,
 this.unitID,
 this.type,
 _0x590982[0],
 this._handler,
 );
 return (_0x4741e0._updateLocalCache(), _0x4741e0);
 }
 throw _0x4750e3.error;
 } catch (_0x5d2ae3) {
 return (this._logService["error"](_0x5d2ae3), this._onConflict(false));
 }
 }
 onRemoteAck(_0x1603ec) {
 this._clearScheduledTask();
 let _0x522ae6 = this._revisionService["getCurrentRevOfUnit"](this.unitID);
 if (_0x1603ec.revision <= _0x522ae6) return this;
 if (this._checkMissing(_0x1603ec))
 return this._injector["createInstance"](
 N,
 this.unitID,
 this.type,
 this._awaitingChangeset,
 [],
 _0x1603ec.revision,
 [],
 this._handler,
 );
 this._incrementRevisionNumber();
 let _0x505b07 = this._injector["createInstance"](
 D,
 this.unitID,
 this.type,
 this._handler,
 );
 return (_0x505b07._updateLocalCache(), _0x505b07);
 }
 onRemoteRej(_0x5d3e76) {
 return this._onConflict(!!(_0x5d3e76 != null && _0x5d3e76.isPermissionRej));
 }
 onRemoteRetry(_0xb4de66) {
 return this._maxTotalRetryTimeout > He
 ? this.toggleOffline()
 : ((this._resendTimer = Ie(this._resendTimeout, {
 timeout: this._resendTimeout,
 reqId: _0xb4de66.reqId,
 })),
 (this._sender = this._resendTimer["subscribe"](
 ({ reqId: _0x2e7fd6, timeout: _0x41b6e1 }) => {
 this._resendWithTimeout(_0x2e7fd6, _0x41b6e1);
 },
 )),
 this);
 }
 toggleOffline() {
 return (
 this._clearScheduledTask(),
 this._injector["createInstance"](
 M,
 this.unitID,
 this.type,
 this._awaitingChangeset,
 [],
 this._handler,
 )
 );
 }
 toggleOnline() {
 return this;
 }
 resend() {
 this._handler["onSendChangeset"](this._awaitingChangeset);
 }
 _onConflict(_0x4d561b) {
 return (
 this._clearScheduledTask(),
 this._injector["createInstance"](
 j,
 this.unitID,
 this.type,
 this._awaitingChangeset,
 [],
 this._handler,
 _0x4d561b,
 )
 );
 }
 _resendWithTimeout(_0x515111, _0x12f1bd) {
 var _0x43a944;
 _0x515111 ===
 ((_0x43a944 = this._awaitingChangeset) == null
 ? undefined
 : _0x43a944.reqId) &&
 (this.resend(),
 (this._resendTimeout =
 _0x12f1bd === 0 ? 1000 : Math.min(_0x12f1bd * 2, Ve)),
 (this._maxTotalRetryTimeout += this._resendTimeout));
 }
 _clearScheduledTask() {
 var _0x3c7175;
 ((_0x3c7175 = this._sender) == null || _0x3c7175.unsubscribe(),
 (this._resendTimeout = 0),
 (this._maxTotalRetryTimeout = 0));
 }
});
k = Re = y(
 [
 v(4, (0, t.Inject)(t.Injector)),
 v(5, (0, t.Inject)(e.RevisionService)),
 v(6, t.ICommandService),
 v(7, t.ILogService),
 v(8, e.ITransformService),
 v(9, t.IUndoRedoService),
 v(10, (0, t.Optional)(x)),
 ],
 k,
);
let A = (ze = class extends E {
 constructor(
 _0x18d738,
 _0x2b4ecd,
 _0x33fbc0,
 _0x18f24f,
 _0x174754,
 _0x140e2d,
 _0x587a26,
 _0x1d0b8c,
 _0x49ae67,
 _0x7ca461,
 _0x1ad3e1,
 _0x927b89,
 _0x31d46a,
 ) {
 (super(
 _0x18d738,
 _0x2b4ecd,
 _0x33fbc0,
 _0x18f24f,
 _0x174754,
 _0x49ae67,
 _0x927b89,
 _0x1d0b8c,
 _0x31d46a,
 ),
 (this._injector = _0x587a26),
 (this._logService = _0x7ca461),
 (this._transformService = _0x1ad3e1),
 (this.localCacheService = _0x31d46a),
 g(this, "status", "awaiting_with_pending"),
 g(this, "_resendTimeout", 0),
 g(this, "_maxTotalRetryTimeout", 0),
 g(this, "_resendTimer", undefined),
 g(this, "_sender", undefined),
 _0x140e2d &&
 ((this._resendTimer = _0x140e2d),
 (this._sender = this._resendTimer["subscribe"](
 ({ reqId: _0x3f1627, timeout: _0x26184a }) => {
 this._resendWithTimeout(_0x3f1627, _0x26184a);
 },
 ))));
 }
 appendMutation(_0x3c0b0a) {
 return (this._pendingMutations["push"](_0x3c0b0a), this);
 }
 onRemoteChangeset(_0x2b5590) {
 if (this._checkMissing(_0x2b5590))
 return (
 this._clearScheduledTask(),
 this._injector["createInstance"](
 N,
 this.unitID,
 this.type,
 this._awaitingChangeset,
 this._pendingMutations,
 null,
 [_0x2b5590],
 this._handler,
 )
 );
 try {
 let _0x5bcdef = this._transformService["transformChangesets"](
 [_0x2b5590],
 [this._awaitingChangeset],
 false,
 );
 if ((0, e.isTransformChangesetsSuccess)(_0x5bcdef)) {
 let { c1Prime: _0x3c11f0, c2Prime: _0x4f5493 } = _0x5bcdef,
 _0x4cae2c = this._transformService["transformMutationsWithChangeset"](
 _0x3c11f0[0],
 this._pendingMutations,
 );
 if ((0, e.isTransformMutationsWithChangesetSuccess)(_0x4cae2c)) {
 let { c1Prime: _0x2bd4dd, m2Prime: _0x9ed446 } = _0x4cae2c;
 return (
 this._executeRemoteChangeset(_0x2bd4dd),
 (_0x4f5493[0].baseRev = this._getCurrentRevision()),
 this._clearScheduledTask(),
 this._injector["createInstance"](
 ze,
 this.unitID,
 this.type,
 _0x4f5493[0],
 _0x9ed446,
 this._handler,
 undefined,
 )
 );
 }
 throw _0x4cae2c.error;
 }
 throw _0x5bcdef.error;
 } catch (_0x2114de) {
 return (this._logService["error"](_0x2114de), this._onConflict(false));
 }
 }
 onRemoteAck(_0x1d347d) {
 this._clearScheduledTask();
 let _0x495556 = this._getCurrentRevision();
 if (_0x1d347d.revision <= _0x495556) return this;
 if (this._checkMissing(_0x1d347d))
 return this._injector["createInstance"](
 N,
 this.unitID,
 this.type,
 this._awaitingChangeset,
 this._pendingMutations,
 _0x1d347d.revision,
 [],
 this._handler,
 );
 this._incrementRevisionNumber();
 let _0xc2125e = this._injector["createInstance"](
 O,
 this.unitID,
 this.type,
 this._pendingMutations,
 this._handler,
 );
 return (_0xc2125e._schedule(), _0xc2125e._updateLocalCache(), _0xc2125e);
 }
 onRemoteRej(_0xc12575) {
 return this._onConflict(!!(_0xc12575 != null && _0xc12575.isPermissionRej));
 }
 onRemoteRetry(_0x4c07b8) {
 return this._maxTotalRetryTimeout > He
 ? this.toggleOffline()
 : ((this._resendTimer = Ie(this._resendTimeout, {
 timeout: this._resendTimeout,
 reqId: _0x4c07b8.reqId,
 })),
 (this._sender = this._resendTimer["subscribe"](
 ({ reqId: _0x374df6, timeout: _0x4a95a7 }) => {
 this._resendWithTimeout(_0x374df6, _0x4a95a7);
 },
 )),
 this);
 }
 toggleOffline() {
 return (
 this._clearScheduledTask(),
 this._injector["createInstance"](
 M,
 this.unitID,
 this.type,
 this._awaitingChangeset,
 this._pendingMutations,
 this._handler,
 )
 );
 }
 toggleOnline() {
 return this;
 }
 resend() {
 this._handler["onSendChangeset"](this._awaitingChangeset);
 }
 _onConflict(_0x4551ab) {
 return (
 this._clearScheduledTask(),
 this._injector["createInstance"](
 j,
 this.unitID,
 this.type,
 null,
 this._pendingMutations,
 this._handler,
 _0x4551ab,
 )
 );
 }
 _resendWithTimeout(_0x2efe71, _0x411a14) {
 var _0x97a8fc;
 _0x2efe71 ===
 ((_0x97a8fc = this._awaitingChangeset) == null
 ? undefined
 : _0x97a8fc.reqId) &&
 (this.resend(),
 (this._resendTimeout =
 _0x411a14 === 0 ? 1000 : Math.min(_0x411a14 * 2, Ve)),
 (this._maxTotalRetryTimeout += this._resendTimeout));
 }
 _clearScheduledTask() {
 var _0x48b8af;
 ((_0x48b8af = this._sender) == null || _0x48b8af.unsubscribe(),
 (this._resendTimeout = 0),
 (this._maxTotalRetryTimeout = 0));
 }
});
A = ze = y(
 [
 v(6, (0, t.Inject)(t.Injector)),
 v(7, (0, t.Inject)(e.RevisionService)),
 v(8, t.ICommandService),
 v(9, t.ILogService),
 v(10, e.ITransformService),
 v(11, t.IUndoRedoService),
 v(12, (0, t.Optional)(x)),
 ],
 A,
);
let j = class extends E {
 constructor(
 _0x1a2f76,
 _0xa4e307,
 _0x5462e9,
 _0x1b693b,
 _0x3893a5,
 _0x29e050 = false,
 _0x176039,
 _0x3382d4,
 _0x39a2be,
 _0x5707e1,
 _0x12834f,
 _0x5be4f6,
 _0x378122,
 ) {
 (super(
 _0x1a2f76,
 _0xa4e307,
 _0x5462e9,
 _0x1b693b,
 _0x3893a5,
 _0x3382d4,
 _0x39a2be,
 _0x5707e1,
 _0x378122,
 ),
 (this._isPermissionRej = _0x29e050),
 (this._permissionService = _0x176039),
 (this._localeService = _0x12834f),
 (this._collaborationUIEventService = _0x5be4f6),
 (this.localCacheService = _0x378122),
 g(this, "status", "conflict"),
 this._showConflictNotification(),
 this._clearLocalCache(),
 this._disableEditing());
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
 var _0x596a90, _0x4a3ae8, _0x5578d6;
 ((_0x596a90 = this._localCacheService) == null ||
 (_0x4a3ae8 = _0x596a90.backupOfflineData) == null ||
 (_0x4a3ae8 = _0x4a3ae8.call(_0x596a90, this.unitID, "conflict")) ==
 null ||
 _0x4a3ae8.catch(() => undefined),
 (_0x5578d6 = this._localCacheService) == null ||
 _0x5578d6.updateOfflineData(this.unitID, this.type, null, []));
 }
 _showConflictNotification() {
 this._isPermissionRej
 ? this._collaborationUIEventService["emitEvent"]({
 id: "PERMISSION_DENIED",
 })
 : this._collaborationUIEventService["emitEvent"]({ id: "CONFLICT" });
 }
 _disableEditing() {
 this._permissionService["updatePermissionPoint"](
 new r["WorkbookEditablePermission"](this.unitID).id,
 false,
 );
 }
};
j = y(
 [
 v(6, (0, t.Inject)(t.IPermissionService)),
 v(7, t.ICommandService),
 v(8, t.IUndoRedoService),
 v(9, (0, t.Inject)(e.RevisionService)),
 v(10, (0, t.Inject)(t.LocaleService)),
 v(11, (0, t.Inject)(_)),
 v(12, (0, t.Optional)(x)),
 ],
 j,
);
let M = class extends E {
 constructor(
 _0x7bb7c4,
 _0x2e9a93,
 _0x181cc7,
 _0x5cbf71,
 _0x49999a,
 _0x3af3eb,
 _0x32c5d1,
 _0x46f1b9,
 _0xc55dd1,
 _0x55bdef,
 ) {
 (super(
 _0x7bb7c4,
 _0x2e9a93,
 _0x181cc7,
 _0x5cbf71,
 _0x49999a,
 _0x46f1b9,
 _0xc55dd1,
 _0x32c5d1,
 _0x55bdef,
 ),
 (this._injector = _0x3af3eb),
 g(this, "status", "offline"));
 }
 appendMutation(_0x43a381) {
 return (
 this._pendingMutations["push"](_0x43a381),
 this._updateLocalCache(),
 this
 );
 }
 onRemoteChangeset(_0x1e63ec) {
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
 _injector: _0x652942,
 _pendingMutations: _0x210333,
 _awaitingChangeset: _0x4f8c71,
 unitID: _0x16b965,
 _handler: _0x21af31,
 type: _0xda2574,
 } = this,
 _0x5a8aa8 = Ue(
 _0x652942,
 _0x16b965,
 _0xda2574,
 _0x4f8c71,
 _0x210333,
 _0x21af31,
 );
 return (
 _0x5a8aa8 instanceof O
 ? _0x5a8aa8._schedule()
 : (_0x5a8aa8 instanceof A || _0x5a8aa8 instanceof k) &&
 _0x5a8aa8.resend(),
 _0x5a8aa8
 );
 }
 resend() {
 throw Error("[OfflineState]: invalid calling to `resend`.");
 }
};
M = y(
 [
 v(5, (0, t.Inject)(t.Injector)),
 v(6, (0, t.Inject)(e.RevisionService)),
 v(7, t.ICommandService),
 v(8, t.IUndoRedoService),
 v(9, (0, t.Optional)(x)),
 ],
 M,
);
let N = class extends E {
 constructor(
 _0x26c680,
 _0x556815,
 _0x2422c8,
 _0x4735aa,
 _0x8fbe5f,
 _0x1dc8e0,
 _0x13dbb9,
 _0x5b7141,
 _0x4e5035,
 _0x1cfcb6,
 _0x45f6e8,
 _0x1d7d2a,
 _0x4805f5,
 _0x3f4a4d,
 ) {
 (super(
 _0x26c680,
 _0x556815,
 _0x2422c8,
 _0x4735aa,
 _0x13dbb9,
 _0x45f6e8,
 _0x1d7d2a,
 _0x4e5035,
 _0x3f4a4d,
 ),
 (this._acknowledgedAwaitingRevision = _0x8fbe5f),
 (this._queuedRemoteChangesets = _0x1dc8e0),
 (this._injector = _0x5b7141),
 (this._logService = _0x1cfcb6),
 (this._transformService = _0x4805f5),
 (this.localCacheService = _0x3f4a4d),
 g(this, "status", "fetch_missing"));
 }
 onMissedChangesetFetched(_0x1da483) {
 try {
 if (this._handleRemoteChangesets(_0x1da483).missingChangesets)
 throw Error(
 "[FetchMissState]:\x20missing\x20changesets\x20response\x20still\x20has\x20revision\x20gaps.",
 );
 if (
 this._handleRemoteChangesets(
 [...this._queuedRemoteChangesets].sort(
 (_0xc4dc47, _0x373ccc) => _0xc4dc47.revision - _0x373ccc.revision,
 ),
 ).missingChangesets
 )
 return (
 (this._queuedRemoteChangesets = []),
 this._updateLocalCache(),
 this._handler["onMissingChangesets"]({
 from: this._getCurrentRevision(),
 to: 0,
 }),
 this
 );
 let _0x285fa5 = this._awaitingChangeset,
 _0x3820a5 = this._pendingMutations,
 _0x3a9b80;
 if (_0x285fa5 && _0x3820a5.length !== 0)
 _0x3a9b80 = this._injector["createInstance"](
 A,
 this.unitID,
 this.type,
 _0x285fa5,
 _0x3820a5,
 this._handler,
 undefined,
 );
 else {
 if (_0x285fa5 && _0x3820a5.length === 0)
 ((_0x285fa5.baseRev = this._getCurrentRevision()),
 (_0x3a9b80 = this._injector["createInstance"](
 k,
 this.unitID,
 this.type,
 _0x285fa5,
 this._handler,
 )));
 else {
 if (_0x3820a5.length !== 0) {
 let _0x2a1af6 = this._injector["createInstance"](
 O,
 this.unitID,
 this.type,
 _0x3820a5,
 this._handler,
 );
 (_0x2a1af6._schedule(), (_0x3a9b80 = _0x2a1af6));
 } else
 _0x3a9b80 = this._injector["createInstance"](
 D,
 this.unitID,
 this.type,
 this._handler,
 );
 }
 }
 return (_0x3a9b80._updateLocalCache(), _0x3a9b80);
 } catch (_0x3ef861) {
 return (
 this._logService["error"](
 "[FetchMissState]",
 "failed to apply missed changesets!",
 _0x3ef861,
 ),
 this._injector["createInstance"](
 j,
 this.unitID,
 this.type,
 this._awaitingChangeset,
 this._pendingMutations,
 this._handler,
 false,
 )
 );
 }
 }
 _handleRemoteChangesets(_0x1168c9) {
 this._acknowledgeAwaitingIfReady();
 for (let _0x4d906a = 0; _0x4d906a < _0x1168c9.length; _0x4d906a++) {
 let _0xfd951d = _0x1168c9[_0x4d906a],
 _0x27c198 = this._getCurrentRevision();
 if (!(_0xfd951d.revision <= _0x27c198)) {
 if (_0xfd951d.revision > _0x27c198 + 1)
 return { missingChangesets: true };
 if (this._isEchoedAwaitingChangeset(_0xfd951d)) {
 this._acknowledgeAwaiting();
 continue;
 }
 (this._transformAndApplyRemoteChangeset(_0xfd951d),
 this._acknowledgeAwaitingIfReady());
 }
 }
 return { missingChangesets: false };
 }
 _transformAndApplyRemoteChangeset(_0x3b770b) {
 let _0x25ead3 = _0x3b770b,
 _0xeb23ed = this._awaitingChangeset;
 if (_0xeb23ed) {
 let _0x31e775 = this._transformService["transformChangesets"](
 [_0x3b770b],
 [_0xeb23ed],
 false,
 );
 if (!(0, e.isTransformChangesetsSuccess)(_0x31e775))
 throw _0x31e775.error;
 ((_0x25ead3 = _0x31e775.c1Prime[0]), (_0xeb23ed = _0x31e775.c2Prime[0]));
 }
 let _0x4ca188 = this._pendingMutations;
 if (_0x4ca188.length) {
 let _0x495a60 = this._transformService["transformMutationsWithChangeset"](
 _0x25ead3,
 _0x4ca188,
 );
 if (!(0, e.isTransformMutationsWithChangesetSuccess)(_0x495a60))
 throw _0x495a60.error;
 ((_0x25ead3 = _0x495a60.c1Prime), (_0x4ca188 = _0x495a60.m2Prime));
 }
 (this._executeRemoteChangeset(_0x25ead3),
 _0xeb23ed && (_0xeb23ed.baseRev = this._getCurrentRevision()),
 (this._awaitingChangeset = _0xeb23ed),
 (this._pendingMutations = _0x4ca188));
 }
 _acknowledgeAwaitingIfReady() {
 if (!this._awaitingChangeset || this._acknowledgedAwaitingRevision == null)
 return;
 let _0x175018 = this._getCurrentRevision();
 if (this._acknowledgedAwaitingRevision <= _0x175018)
 throw Error(
 "[FetchingMissState]: received stale ack revision: " +
 this._acknowledgedAwaitingRevision +
 ".",
 );
 this._acknowledgedAwaitingRevision === _0x175018 + 1 &&
 this._acknowledgeAwaiting();
 }
 _acknowledgeAwaiting() {
 (this._incrementRevisionNumber(),
 (this._awaitingChangeset = null),
 (this._acknowledgedAwaitingRevision = null));
 }
 _isEchoedAwaitingChangeset(_0x1d329e) {
 let _0x52c327 = this._awaitingChangeset;
 return !_0x52c327 ||
 !_0x52c327.sid ||
 _0x52c327.reqId === null ||
 _0x52c327.reqId === undefined
 ? false
 : _0x1d329e.unitID === _0x52c327.unitID &&
 _0x1d329e.sid === _0x52c327.sid &&
 _0x1d329e.reqId === _0x52c327.reqId;
 }
 resend() {
 throw Error(
 "[FetchingMissState]:\x20invalid\x20calling\x20to\x20`resend`.",
 );
 }
 appendMutation(_0x559b38) {
 return (this._pendingMutations["push"](_0x559b38), this);
 }
 onRemoteChangeset(_0x1c3abb) {
 return (this._queuedRemoteChangesets["push"](_0x1c3abb), this);
 }
 onRemoteAck(_0x271d24) {
 if (this._awaitingChangeset) {
 let _0x1a015b = this._getCurrentRevision();
 return (
 _0x271d24.revision <= _0x1a015b ||
 (_0x1a015b + 1 === _0x271d24.revision
 ? (this._incrementRevisionNumber(),
 (this._awaitingChangeset = null),
 (this._acknowledgedAwaitingRevision = null))
 : (this._acknowledgedAwaitingRevision = _0x271d24.revision)),
 this
 );
 }
 if (_0x271d24.revision <= this._getCurrentRevision()) return this;
 throw Error(
 "[FetchingMissState]: not expected to receive ack when `this._awaitingChangeset` is null!",
 );
 }
 onRemoteRej(_0x545866) {
 return this._onConflict(!!(_0x545866 != null && _0x545866.isPermissionRej));
 }
 onRemoteRetry() {
 return this;
 }
 toggleOffline() {
 return this._injector["createInstance"](
 M,
 this.unitID,
 this.type,
 this._awaitingChangeset,
 this._pendingMutations,
 this._handler,
 );
 }
 toggleOnline() {
 return this;
 }
 _onConflict(_0x53afb7) {
 return this._injector["createInstance"](
 j,
 this.unitID,
 this.type,
 this._awaitingChangeset,
 this._pendingMutations,
 this._handler,
 _0x53afb7,
 );
 }
};
N = y(
 [
 v(7, (0, t.Inject)(t.Injector)),
 v(8, (0, t.Inject)(e.RevisionService)),
 v(9, t.ILogService),
 v(10, t.ICommandService),
 v(11, t.IUndoRedoService),
 v(12, e.ITransformService),
 v(13, (0, t.Optional)(x)),
 ],
 N,
);
function Ue(_0x402389, _0x30e80e, _0x2837a9, _0x1123e0, _0x8987be, _0x41d07c) {
 return _0x1123e0 && _0x8987be.length
 ? _0x402389.createInstance(
 A,
 _0x30e80e,
 _0x2837a9,
 _0x1123e0,
 _0x8987be,
 _0x41d07c,
 undefined,
 )
 : _0x1123e0
 ? _0x402389.createInstance(k, _0x30e80e, _0x2837a9, _0x1123e0, _0x41d07c)
 : _0x8987be.length
 ? _0x402389.createInstance(
 O,
 _0x30e80e,
 _0x2837a9,
 _0x8987be,
 _0x41d07c,
 )
 : _0x402389.createInstance(D, _0x30e80e, _0x2837a9, _0x41d07c);
}
let P = class extends t.RxDisposable {
 get state() {
 return this._state;
 }
 constructor(
 _0x34f47f,
 _0x6e933c,
 _0x39dff2,
 _0x471cee,
 _0x2b02ed,
 _0x4647a4,
 _0x99d2b5,
 _0x4cb3cd,
 _0x9335c,
 _0x2fd661,
 _0x3d1e12,
 _0x11f028,
 _0x7d1e97,
 _0x1a799a,
 ) {
 (super(),
 (this.unitID = _0x34f47f),
 (this.session = _0x6e933c),
 (this._type = _0x39dff2),
 (this._injector = _0x471cee),
 (this._compressMutationService = _0x2b02ed),
 (this._localeService = _0x4647a4),
 (this._revisionService = _0x99d2b5),
 (this._eventService = _0x4cb3cd),
 (this._univerInstanceService = _0x9335c),
 (this._logService = _0x2fd661),
 (this._commandService = _0x3d1e12),
 (this._permissionService = _0x11f028),
 (this._singleActiveUnitService = _0x7d1e97),
 (this._localCacheService = _0x1a799a),
 g(this, "_state$", new i["BehaviorSubject"](null)),
 g(this, "state$", this._state$["asObservable"]()),
 g(this, "_state", undefined),
 g(this, "_collaborationPaused", false),
 g(this, "_changesetSessionId", ""),
 g(this, "_changesetReqId", 0),
 g(
 this,
 "status$",
 this.state$["pipe"](
 (0, i.map)((_0x513361) => (_0x513361 ? _0x513361.status : "offline")),
 (0, i.shareReplay)({ bufferSize: 1, refCount: true }),
 ),
 ),
 g(this, "_transitionLocked", false),
 g(this, "_remoteChangesetQueue", []));
 }
 async init() {
 if (this.state)
 throw Error(
 '[CollaborationEntity]: initial state has been created before. You should not call "init" twice.',
 );
 await this._init();
 }
 pauseCollaboration() {
 return (
 (this._collaborationPaused = true),
 (0, t.toDisposable)(() => {
 ((this._collaborationPaused = false),
 this._exhaustRemoteChangesetQueue());
 })
 );
 }
 onLocalMutation(_0x389b5d) {
 this._onLocalMutation(_0x389b5d);
 }
 _updateState(_0x551e24) {
 ((this._state = _0x551e24), this._state$["next"](_0x551e24));
 }
 async _init() {
 if (
 (this._updateState(await this._createInitialState()),
 this._singleActiveUnitService)
 ) {
 var _0x9f4e56;
 ((_0x9f4e56 = this._singleActiveUnitService) == null ||
 _0x9f4e56.editingUnit(this.unitID),
 this.disposeWithMe(
 this._singleActiveUnitService["getUnitStatus$"](
 this.unitID,
 ).subscribe((_0x31f01f) => {
 (this._logService["debug"](
 "[CollaborationEntity]",
 "editing status changed to",
 _0x31f01f,
 ),
 _0x31f01f === 1
 ? (this._eventService["emitEvent"]({
 id: "OTHER_CLIENT_EDITING",
 }),
 this._permissionService["updatePermissionPoint"](
 new r["WorkbookEditablePermission"](this.unitID).id,
 false,
 ),
 this._permissionService["setShowComponents"](false))
 : (this._permissionService["updatePermissionPoint"](
 new r.WorkbookEditablePermission(this.unitID).id,
 true,
 ),
 this._permissionService["setShowComponents"](true)));
 }),
 ));
 }
 let _0x21380a = false;
 return (
 this.disposeWithMe(
 this.session["sessionStatus$"].subscribe((_0x4ebd4b) => {
 _0x4ebd4b === 3
 ? this._toggleOnline(_0x21380a)
 : _0x4ebd4b === 2 && ((_0x21380a = true), this._toggleOffline());
 }),
 ),
 this.disposeWithMe(
 this.session["event$"].subscribe((_0x41bb18) => {
 try {
 switch (_0x41bb18.eventID) {
 case e.CollaborationEvent["NEW_CHANGESETS"]:
 this._onRemoteChangeset(
 (0, e.parseProtocolChangeset)(_0x41bb18.data),
 );
 break;
 case e.CollaborationEvent["CHANGESET_ACK"]:
 this._onRemoteACK(_0x41bb18.data);
 break;
 case e.CollaborationEvent["CHANGESET_REJ"]:
 this._onRemoteRejected();
 break;
 case e.CollaborationEvent["CHANGESET_SHOULD_RETRY"]:
 this._onRemoteRetry(_0x41bb18.data);
 break;
 case e.CollaborationEvent["PSEUDO_FETCH_MISSING_RESULT"]:
 this._onFetchMissResult(
 _0x41bb18.data["changesets"].map((_0x3fb445) =>
 (0, e.parseProtocolChangeset)(_0x3fb445),
 ),
 );
 break;
 case e.CollaborationEvent["PERMISSION_REJ"]:
 this._onRemoteRejected({ isPermissionRej: true });
 break;
 case e.CollaborationEvent["UNISCRIPT_RUN"]:
 break;
 }
 } catch (_0x41ae98) {
 throw (
 console.error("Error on receiving event", _0x41ae98),
 _0x41ae98
 );
 }
 }),
 ),
 this._state
 );
 }
 _unlockTransition() {
 this._transitionLocked = false;
 }
 _lockTransition() {
 if (this._transitionLocked)
 throw Error(
 "[CollaborationEntity]:\x20cannot\x20lock\x20transition\x20twice!\x20This\x20is\x20an\x20implementation\x20error,\x20meaning\x20you\x20transit\x20the\x20collaboration\x20state\x20again\x20in\x20the\x20process\x20of\x20a\x20previous\x20transition.\x20This\x20should\x20never\x20happen.",
 );
 this._transitionLocked = true;
 }
 _onLocalMutation(_0x2f82f4) {
 (this._lockTransition(),
 this._updateState(this._state["appendMutation"](_0x2f82f4)),
 this._unlockTransition());
 }
 _onRemoteChangeset(_0x59fb2f) {
 if (
 !(
 _0x59fb2f.revision <=
 this._revisionService["getCurrentRevOfUnit"](this.unitID)
 )
 ) {
 if (this._collaborationPaused) {
 this._remoteChangesetQueue["push"](_0x59fb2f);
 return;
 }
 this._applyRemoteChangeset(_0x59fb2f);
 }
 }
 _exhaustRemoteChangesetQueue() {
 (this._remoteChangesetQueue["forEach"]((_0x3be146) =>
 this._applyRemoteChangeset(_0x3be146),
 ),
 (this._remoteChangesetQueue = []));
 }
 _applyRemoteChangeset(_0x23c005) {
 let _0x3ba492 =
 this._compressMutationService["interceptor"].fetchThroughInterceptors(
 this._compressMutationService["interceptor"].getInterceptPoints()
 .COMPRESS_MUTATION_APPLY,
 )(_0x23c005.mutations, null) || _0x23c005.mutations,
 _0x491d08 = { ..._0x23c005, mutations: _0x3ba492 };
 (this._lockTransition(),
 this._updateState(this._state["onRemoteChangeset"](_0x491d08)),
 this._unlockTransition());
 }
 _onRemoteACK(_0x2f29ea) {
 (this._lockTransition(),
 this._updateState(this._state["onRemoteAck"](_0x2f29ea)),
 this._unlockTransition());
 }
 _onRemoteRejected(_0x58d146) {
 (this._lockTransition(),
 this._updateState(this._state["onRemoteRej"](_0x58d146)),
 this._unlockTransition());
 }
 _onRemoteRetry(_0x2006c3) {
 (this._lockTransition(),
 this._updateState(this._state["onRemoteRetry"](_0x2006c3)),
 this._unlockTransition());
 }
 _onFetchMissResult(_0x3c0168) {
 if (!(this._state instanceof N))
 throw TypeError(
 "[CollaborationEntity]: cannot apply missing results on other states!",
 );
 let _0x528cfc = _0x3c0168.map((_0x426d7a) => {
 let _0x146943 =
 this._compressMutationService["interceptor"].fetchThroughInterceptors(
 this._compressMutationService["interceptor"].getInterceptPoints()
 .COMPRESS_MUTATION_APPLY,
 )(_0x426d7a.mutations, null) || _0x426d7a.mutations;
 return { ..._0x426d7a, mutations: _0x146943 };
 });
 (this._lockTransition(),
 this._updateState(this._state["onMissedChangesetFetched"](_0x528cfc)),
 this._unlockTransition());
 }
 _toggleOffline() {
 (this._lockTransition(),
 this._updateState(this._state["toggleOffline"]()),
 this._unlockTransition());
 }
 _toggleOnline(_0x38241e = false) {
 (this._lockTransition(),
 this._updateState(this._state["toggleOnline"]()),
 this._unlockTransition());
 let _0x117f55 = this._state;
 _0x38241e &&
 _0x117f55 instanceof D &&
 (this._lockTransition(),
 this._updateState(_0x117f55.fetchMiss()),
 this._unlockTransition());
 }
 async _createInitialState() {
 return new Promise((_0x2a9791) => {
 this.session["sessionStatus$"]
 .pipe((0, i.take)(1))
 .subscribe(async (_0x11ce41) => {
 _0x2a9791(await this._createInitialStateImpl(_0x11ce41 === 3));
 });
 });
 }
 _createHandler() {
 let _0x295a91 = this.unitID;
 return {
 onStateChange: (_0x26ff39, _0xc37b6e) => {
 if (_0x26ff39 !== this._state)
 throw Error(
 "[CollaborationEntity]: invalid state transition! State transferred from is not the current state.\nBefore: " +
 _0x26ff39.status +
 "\nAfter: " +
 _0xc37b6e.status +
 "\x0aCurrent:\x20" +
 this._state["status"],
 );
 this._updateState(_0xc37b6e);
 },
 onSendChangeset: (_0x1bff0b) => {
 _0x1bff0b.sid ||
 ((_0x1bff0b.sid = this._changesetSessionId),
 (_0x1bff0b.reqId = ++this._changesetReqId));
 let _0x1d98cd = {
 eventID: e.CollaborationEvent["SUBMIT_CHANGESET"],
 data: {
 unitID: _0x1bff0b.unitID,
 unitType: this._type,
 changeset: _0x1bff0b,
 memberID: this.session["getMemberID"](),
 },
 };
 this.session["send"](_0x1d98cd, this.unitID);
 },
 onMissingChangesets: ({ from: _0x3442b7, to: _0x1e8888 }) => {
 this._logService["debug"](
 "[CollaborationEntity]",
 "fetching missing changesets from " + _0x3442b7 + " to " + _0x1e8888,
 );
 let _0x12d302 = {
 eventID: e.CollaborationEvent["FETCH_MISSING"],
 data: {
 unitID: _0x295a91,
 unitType: this._type,
 from: _0x3442b7,
 to: _0x1e8888,
 },
 };
 this.session["send"](_0x12d302, this.unitID);
 },
 };
 }
 async _createInitialStateImpl(_0x50b37d) {
 var _0x4a4199;
 let _0x4e8f19 = await ((_0x4a4199 = this._localCacheService) == null
 ? undefined
 : _0x4a4199.loadOfflineData(this.unitID)),
 _0x1302ea = (_0x4e8f19 == null ? undefined : _0x4e8f19.mutations) ?? [],
 _0x49ce43 =
 (_0x4e8f19 == null ? undefined : _0x4e8f19.awaitingChangeset) ?? null,
 _0x3df6cb =
 !!(_0x49ce43 != null && _0x49ce43.sid) &&
 !!(_0x49ce43 != null && _0x49ce43.reqId);
 ((this._changesetSessionId = _0x3df6cb ? _0x49ce43.sid : (0, e.uuidv4)()),
 (this._changesetReqId = _0x3df6cb ? _0x49ce43.reqId : 0));
 let _0x29b0a4 = this.unitID;
 try {
 this._replayCachedMutations(_0x49ce43, _0x1302ea);
 } catch (_0x32f350) {
 this._logService["error"](_0x32f350);
 }
 let _0x309bd6 = this._createHandler();
 if (_0x50b37d) {
 let _0x4300e1 = Ue(
 this._injector,
 _0x29b0a4,
 this._type,
 _0x49ce43,
 _0x1302ea,
 _0x309bd6,
 );
 return (
 _0x4300e1 instanceof O
 ? _0x4300e1._schedule()
 : (_0x4300e1 instanceof A || _0x4300e1 instanceof k) &&
 _0x4300e1.resend(),
 _0x4300e1
 );
 }
 return this._injector["createInstance"](
 M,
 _0x29b0a4,
 this._type,
 _0x49ce43,
 _0x1302ea,
 _0x309bd6,
 );
 }
 _replayCachedMutations(_0xea9e70, _0x36dd65) {
 var _0x5b48de, _0xf2bb30;
 let _0x4b3fd7 = this._compressMutationService[
 "interceptor"
 ].fetchThroughInterceptors(
 this._compressMutationService["interceptor"].getInterceptPoints()
 .COMPRESS_MUTATION_APPLY,
 );
 ((_0x5b48de = _0x4b3fd7(
 (_0xea9e70 == null ? undefined : _0xea9e70.mutations) || [],
 null,
 )) == null ||
 _0x5b48de.forEach((_0x5d409b) =>
 this._commandService["executeCommand"](_0x5d409b.id, _0x5d409b.params),
 ),
 (_0xf2bb30 = _0x4b3fd7(_0x36dd65 || [], null)) == null ||
 _0xf2bb30.forEach((_0x1c0767) =>
 this._commandService["executeCommand"](
 _0x1c0767.id,
 _0x1c0767.params,
 ),
 ));
 }
};
P = y(
 [
 v(3, (0, t.Inject)(t.Injector)),
 v(4, (0, t.Inject)(e.CompressMutationService)),
 v(5, (0, t.Inject)(t.LocaleService)),
 v(6, (0, t.Inject)(e.RevisionService)),
 v(7, (0, t.Inject)(_)),
 v(8, t.IUniverInstanceService),
 v(9, t.ILogService),
 v(10, t.ICommandService),
 v(11, t.IPermissionService),
 v(12, (0, t.Optional)(C)),
 v(13, (0, t.Optional)(x)),
 ],
 P,
);
let F = class extends P {
 constructor(
 _0x1f94d0,
 _0x4fa0ad,
 _0x48c7f1,
 _0x1f8e0b,
 _0x370d11,
 _0x70c9d3,
 _0x5f3664,
 _0xe1a366,
 _0x1aff1c,
 _0x32c26f,
 _0x3bad84,
 _0x362c8d,
 _0x2b8d26,
 _0x2242f3,
 _0x49f3fe,
 ) {
 (super(
 _0x1f94d0,
 _0x48c7f1,
 _0x4fa0ad,
 _0x1f8e0b,
 _0x370d11,
 _0x70c9d3,
 _0x5f3664,
 _0xe1a366,
 _0x1aff1c,
 _0x32c26f,
 _0x3bad84,
 _0x362c8d,
 _0x2242f3,
 _0x49f3fe,
 ),
 (this.unitID = _0x1f94d0),
 (this.type = _0x4fa0ad),
 (this._docStateChangeManagerService = _0x2b8d26),
 g(this, "_handlerCallback", null));
 }
 addHandlerCallback(_0x13cebe) {
 this._handlerCallback = _0x13cebe;
 }
 dispose() {
 ((this._handlerCallback = null), super.dispose());
 }
 _createHandler() {
 let _0x3e8d8f = super._createHandler();
 return (
 (_0x3e8d8f.onTransformIME = (_0x3cb3bc) => {
 var _0x9b4d55, _0x23ddc4;
 return (_0x9b4d55 = this._handlerCallback) == null ||
 (_0x23ddc4 = _0x9b4d55.onTransformIME) == null
 ? undefined
 : _0x23ddc4.call(_0x9b4d55, _0x3cb3bc);
 }),
 (_0x3e8d8f.onTransformState = (_0x2faae6) => {
 var _0x31f10a, _0x458237;
 return (_0x31f10a = this._handlerCallback) == null ||
 (_0x458237 = _0x31f10a.onTransformState) == null
 ? undefined
 : _0x458237.call(_0x31f10a, _0x2faae6);
 }),
 (_0x3e8d8f.onPrepareTransformSelections = (_0x48e5b4) => {
 var _0x51c70f, _0x19ce3a;
 return (
 ((_0x51c70f = this._handlerCallback) == null ||
 (_0x19ce3a = _0x51c70f.onPrepareTransformSelections) == null
 ? undefined
 : _0x19ce3a.call(_0x51c70f, _0x48e5b4)) ?? null
 );
 }),
 (_0x3e8d8f.onTransformSelections = (_0x397417) => {
 var _0x49ddf4, _0x1a97e9;
 return (_0x49ddf4 = this._handlerCallback) == null ||
 (_0x1a97e9 = _0x49ddf4.onTransformSelections) == null
 ? undefined
 : _0x1a97e9.call(_0x49ddf4, _0x397417);
 }),
 (_0x3e8d8f.onSyncEditingCollabCursor = (_0x21fb72) => {
 var _0x42b028, _0x2ae8f6;
 return (_0x42b028 = this._handlerCallback) == null ||
 (_0x2ae8f6 = _0x42b028.onSyncEditingCollabCursor) == null
 ? undefined
 : _0x2ae8f6.call(_0x42b028, _0x21fb72);
 }),
 (_0x3e8d8f.onTransformRemoteChangesetByIMECache = (_0x3dd96f) => {
 var _0x298436, _0x529f04;
 return (
 ((_0x298436 = this._handlerCallback) == null ||
 (_0x529f04 = _0x298436.onTransformRemoteChangesetByIMECache) == null
 ? undefined
 : _0x529f04.call(_0x298436, _0x3dd96f)) ?? _0x3dd96f
 );
 }),
 (_0x3e8d8f.onTransformRemoteChangesetByStateCache = (_0x296400) => {
 var _0x5bb9bc, _0x4a534f;
 return (
 ((_0x5bb9bc = this._handlerCallback) == null ||
 (_0x4a534f = _0x5bb9bc.onTransformRemoteChangesetByStateCache) == null
 ? undefined
 : _0x4a534f.call(_0x5bb9bc, _0x296400)) ?? _0x296400
 );
 }),
 _0x3e8d8f
 );
 }
 async _init() {
 let _0x46bf56 = await super._init();
 return (
 this.disposeWithMe(
 this._docStateChangeManagerService["docStateChange$"].subscribe(
 (_0x445461) => {
 if (_0x445461 == null || _0x445461.unitId !== this.unitID) return;
 let {
 commandId: _0x3e737f,
 redoState: _0x3fd381,
 unitId: _0xe9211c,
 } = _0x445461,
 _0x52362a = {
 id: _0x3e737f,
 type: t.CommandType["MUTATION"],
 params: {
 unitId: _0xe9211c,
 actions: _0x3fd381.actions,
 textRanges: null,
 },
 };
 this._onLocalMutation(_0x52362a);
 },
 ),
 ),
 this.disposeWithMe(
 this._commandService["onMutationExecutedForCollab"](
 (_0x5e8e35, _0x1a87ce) => {
 if (
 _0x5e8e35.type !== t.CommandType["MUTATION"] ||
 (_0x1a87ce != null && _0x1a87ce.fromCollab) ||
 (_0x1a87ce != null && _0x1a87ce.onlyLocal) ||
 _0x5e8e35.id === n.RichTextEditingMutation["id"]
 )
 return;
 let _0x58df51 = _0x5e8e35.params;
 if (
 (_0x58df51 == null ? undefined : _0x58df51.unitId) !== this.unitID
 )
 return;
 let _0xdb12fc = _0x5e8e35,
 _0xe9cc61 = this._compressMutationService[
 "interceptor"
 ].fetchThroughInterceptors(
 this._compressMutationService[
 "interceptor"
 ].getInterceptPoints().COMPRESS_MUTATION_SEND,
 )([_0xdb12fc], this._univerInstanceService) || [_0xdb12fc];
 this._onLocalMutation(_0xe9cc61[0]);
 },
 ),
 ),
 _0x46bf56
 );
 }
};
F = y(
 [
 v(3, (0, t.Inject)(t.Injector)),
 v(4, (0, t.Inject)(e.CompressMutationService)),
 v(5, (0, t.Inject)(t.LocaleService)),
 v(6, (0, t.Inject)(e.RevisionService)),
 v(7, (0, t.Inject)(_)),
 v(8, t.IUniverInstanceService),
 v(9, t.ILogService),
 v(10, t.ICommandService),
 v(11, t.IPermissionService),
 v(12, (0, t.Inject)(n.DocStateChangeManagerService)),
 v(13, (0, t.Optional)(C)),
 v(14, (0, t.Optional)(x)),
 ],
 F,
);
let I = class extends P {
 constructor(
 _0x41d2fd,
 _0x12c61f,
 _0x4d36d6,
 _0x364aa6,
 _0x5eca8d,
 _0x20c6e4,
 _0x10607f,
 _0x120a30,
 _0x24fc13,
 _0x28c793,
 _0x2eb4b6,
 _0x4132f3,
 _0x112287,
 _0x50b5ce,
 ) {
 (super(
 _0x41d2fd,
 _0x4d36d6,
 _0x12c61f,
 _0x364aa6,
 _0x5eca8d,
 _0x20c6e4,
 _0x10607f,
 _0x120a30,
 _0x24fc13,
 _0x28c793,
 _0x2eb4b6,
 _0x4132f3,
 _0x112287,
 _0x50b5ce,
 ),
 (this.unitID = _0x41d2fd),
 (this.type = _0x12c61f));
 }
 async _init() {
 let _0x2d2db9 = await super._init();
 return (
 this.disposeWithMe(
 this._commandService["onMutationExecutedForCollab"](
 (_0x24d7b4, _0x5ba552) => {
 if (
 _0x24d7b4.type !== t.CommandType["MUTATION"] ||
 (_0x5ba552 != null && _0x5ba552.fromCollab) ||
 (_0x5ba552 != null && _0x5ba552.onlyLocal)
 )
 return;
 let _0x4dcbbd = _0x24d7b4.params;
 if (
 (_0x4dcbbd == null ? undefined : _0x4dcbbd.unitId) !== this.unitID
 )
 return;
 let _0x220c04 = _0x24d7b4,
 _0x5b98cc = this._compressMutationService[
 "interceptor"
 ].fetchThroughInterceptors(
 this._compressMutationService[
 "interceptor"
 ].getInterceptPoints().COMPRESS_MUTATION_SEND,
 )([_0x220c04], this._univerInstanceService) || [_0x220c04];
 this._onLocalMutation(_0x5b98cc[0]);
 },
 ),
 ),
 _0x2d2db9
 );
 }
};
I = y(
 [
 v(3, (0, t.Inject)(t.Injector)),
 v(4, (0, t.Inject)(e.CompressMutationService)),
 v(5, (0, t.Inject)(t.LocaleService)),
 v(6, (0, t.Inject)(e.RevisionService)),
 v(7, (0, t.Inject)(_)),
 v(8, t.IUniverInstanceService),
 v(9, t.ILogService),
 v(10, t.ICommandService),
 v(11, t.IPermissionService),
 v(12, (0, t.Optional)(C)),
 v(13, (0, t.Optional)(x)),
 ],
 I,
);
let L = class extends P {
 constructor(
 _0x2ab75c,
 _0x335fd0,
 _0x1b1a6e,
 _0x152f3f,
 _0x310040,
 _0xcb1561,
 _0x374985,
 _0x48425e,
 _0x42c297,
 _0x4329d8,
 _0x365542,
 _0xee40d2,
 _0x4da38b,
 _0x27a71e,
 _0x3b59b1,
 ) {
 (super(
 _0x2ab75c,
 _0x1b1a6e,
 _0x335fd0,
 _0x152f3f,
 _0x310040,
 _0xcb1561,
 _0x374985,
 _0x42c297,
 _0x4329d8,
 _0x365542,
 _0xee40d2,
 _0x4da38b,
 _0x27a71e,
 _0x3b59b1,
 ),
 (this.unitID = _0x2ab75c),
 (this.type = _0x335fd0),
 (this._sheetTransformSelectionsService = _0x48425e));
 }
 _createHandler() {
 let _0x28fd72 = super._createHandler();
 return (
 (_0x28fd72.onTransformSelections = (_0x378583) =>
 this._sheetTransformSelectionsService["transformSelections"](
 _0x378583,
 )),
 _0x28fd72
 );
 }
 async _init() {
 let _0x44300a = await super._init();
 return (
 this.disposeWithMe(
 this._commandService["onMutationExecutedForCollab"](
 (_0x12f541, _0x165ae3) => {
 if (
 _0x12f541.type !== t.CommandType["MUTATION"] ||
 (_0x165ae3 != null && _0x165ae3.fromCollab) ||
 (_0x165ae3 != null && _0x165ae3.onlyLocal)
 )
 return;
 let _0x153f0e = _0x12f541.params;
 if (
 (_0x153f0e == null ? undefined : _0x153f0e.unitId) !== this.unitID
 )
 return;
 let _0x24b8ea = _0x12f541,
 _0x5171a4 = this._compressMutationService[
 "interceptor"
 ].fetchThroughInterceptors(
 this._compressMutationService[
 "interceptor"
 ].getInterceptPoints().COMPRESS_MUTATION_SEND,
 )([_0x24b8ea], this._univerInstanceService) || [_0x24b8ea];
 this._onLocalMutation(_0x5171a4[0]);
 },
 ),
 ),
 _0x44300a
 );
 }
};
L = y(
 [
 v(3, (0, t.Inject)(t.Injector)),
 v(4, (0, t.Inject)(e.CompressMutationService)),
 v(5, (0, t.Inject)(t.LocaleService)),
 v(6, (0, t.Inject)(e.RevisionService)),
 v(7, (0, t.Inject)(S)),
 v(8, (0, t.Inject)(_)),
 v(9, t.IUniverInstanceService),
 v(10, t.ILogService),
 v(11, t.ICommandService),
 v(12, t.IPermissionService),
 v(13, (0, t.Optional)(C)),
 v(14, (0, t.Optional)(x)),
 ],
 L,
);
let R = class extends P {
 constructor(
 _0x3a3ea5,
 _0x43ca9c,
 _0x4fc978,
 _0x32754c,
 _0x270cbc,
 _0x2e5302,
 _0x393003,
 _0x302eac,
 _0x5ea7d1,
 _0x1961f8,
 _0x24fdf9,
 _0x4a01c8,
 _0xcbcc65,
 _0x2d81dc,
 ) {
 (super(
 _0x3a3ea5,
 _0x4fc978,
 _0x43ca9c,
 _0x32754c,
 _0x270cbc,
 _0x2e5302,
 _0x393003,
 _0x302eac,
 _0x5ea7d1,
 _0x1961f8,
 _0x24fdf9,
 _0x4a01c8,
 _0xcbcc65,
 _0x2d81dc,
 ),
 (this.unitID = _0x3a3ea5),
 (this.type = _0x43ca9c));
 }
 async _init() {
 let _0x1178b8 = await super._init();
 return (
 this.disposeWithMe(
 this._commandService["onMutationExecutedForCollab"](
 (_0x5ba70f, _0x169a5d) => {
 if (
 _0x5ba70f.type !== t.CommandType["MUTATION"] ||
 (_0x169a5d != null && _0x169a5d.fromCollab) ||
 (_0x169a5d != null && _0x169a5d.onlyLocal)
 )
 return;
 let _0x50b88f = _0x5ba70f.params;
 if (
 (_0x50b88f == null ? undefined : _0x50b88f.unitId) !== this.unitID
 )
 return;
 let _0x1bb062 = _0x5ba70f,
 _0x243588 = this._compressMutationService[
 "interceptor"
 ].fetchThroughInterceptors(
 this._compressMutationService[
 "interceptor"
 ].getInterceptPoints().COMPRESS_MUTATION_SEND,
 )([_0x1bb062], this._univerInstanceService) || [_0x1bb062];
 this._onLocalMutation(_0x243588[0]);
 },
 ),
 ),
 _0x1178b8
 );
 }
};
R = y(
 [
 v(3, (0, t.Inject)(t.Injector)),
 v(4, (0, t.Inject)(e.CompressMutationService)),
 v(5, (0, t.Inject)(t.LocaleService)),
 v(6, (0, t.Inject)(e.RevisionService)),
 v(7, (0, t.Inject)(_)),
 v(8, t.IUniverInstanceService),
 v(9, t.ILogService),
 v(10, t.ICommandService),
 v(11, t.IPermissionService),
 v(12, (0, t.Optional)(C)),
 v(13, (0, t.Optional)(x)),
 ],
 R,
);
let z = class extends P {
 constructor(
 _0x15f567,
 _0x523734,
 _0x4a862d,
 _0x5bdabc,
 _0x4b4719,
 _0x559673,
 _0x21ac56,
 _0x5c9c2c,
 _0x53f395,
 _0x7a0c9b,
 _0x3d5f2e,
 _0x34c940,
 _0x594c5a,
 _0x264639,
 ) {
 (super(
 _0x15f567,
 _0x4a862d,
 _0x523734,
 _0x5bdabc,
 _0x4b4719,
 _0x559673,
 _0x21ac56,
 _0x5c9c2c,
 _0x53f395,
 _0x7a0c9b,
 _0x3d5f2e,
 _0x34c940,
 _0x594c5a,
 _0x264639,
 ),
 (this.unitID = _0x15f567),
 (this.type = _0x523734));
 }
 async _init() {
 let _0x58349c = await super._init();
 return (
 this.disposeWithMe(
 this._commandService["onMutationExecutedForCollab"](
 (_0x2a9998, _0x1fe540) => {
 if (
 _0x2a9998.type !== t.CommandType["MUTATION"] ||
 (_0x1fe540 != null && _0x1fe540.fromCollab) ||
 (_0x1fe540 != null && _0x1fe540.onlyLocal)
 )
 return;
 let _0x166077 = _0x2a9998.params;
 if (
 (_0x166077 == null ? undefined : _0x166077.unitId) !== this.unitID
 )
 return;
 let _0x358126 = _0x2a9998,
 _0x34adec = this._compressMutationService[
 "interceptor"
 ].fetchThroughInterceptors(
 this._compressMutationService[
 "interceptor"
 ].getInterceptPoints().COMPRESS_MUTATION_SEND,
 )([_0x358126], this._univerInstanceService) || [_0x358126];
 this._onLocalMutation(_0x34adec[0]);
 },
 ),
 ),
 _0x58349c
 );
 }
};
z = y(
 [
 v(3, (0, t.Inject)(t.Injector)),
 v(4, (0, t.Inject)(e.CompressMutationService)),
 v(5, (0, t.Inject)(t.LocaleService)),
 v(6, (0, t.Inject)(e.RevisionService)),
 v(7, (0, t.Inject)(_)),
 v(8, t.IUniverInstanceService),
 v(9, t.ILogService),
 v(10, t.ICommandService),
 v(11, t.IPermissionService),
 v(12, (0, t.Optional)(C)),
 v(13, (0, t.Optional)(x)),
 ],
 z,
);
let B = class extends P {
 constructor(
 _0x5d1b0d,
 _0x4ed4fc,
 _0x19489c,
 _0x36e7c4,
 _0xf37b4c,
 _0x1d1477,
 _0x5e4611,
 _0x2ac530,
 _0x5d2344,
 _0x4d1220,
 _0x37fc79,
 _0xd2e461,
 _0x7d99fc,
 _0x2bc2f0,
 ) {
 (super(
 _0x5d1b0d,
 _0x19489c,
 _0x4ed4fc,
 _0x36e7c4,
 _0xf37b4c,
 _0x1d1477,
 _0x5e4611,
 _0x2ac530,
 _0x5d2344,
 _0x4d1220,
 _0x37fc79,
 _0xd2e461,
 _0x7d99fc,
 _0x2bc2f0,
 ),
 (this.unitID = _0x5d1b0d),
 (this.type = _0x4ed4fc));
 }
 async _init() {
 let _0x37b031 = await super._init();
 return (
 this.disposeWithMe(
 this._commandService["onMutationExecutedForCollab"](
 (_0x2621d1, _0x5e285) => {
 if (
 _0x2621d1.type !== t.CommandType["MUTATION"] ||
 (_0x5e285 != null && _0x5e285.fromCollab) ||
 (_0x5e285 != null && _0x5e285.onlyLocal)
 )
 return;
 let _0x55ab3d = _0x2621d1.params;
 if (
 (_0x55ab3d == null ? undefined : _0x55ab3d.unitId) !== this.unitID
 )
 return;
 let _0x4c46be = _0x2621d1,
 _0x523152 = this._compressMutationService[
 "interceptor"
 ].fetchThroughInterceptors(
 this._compressMutationService[
 "interceptor"
 ].getInterceptPoints().COMPRESS_MUTATION_SEND,
 )([_0x4c46be], this._univerInstanceService) || [_0x4c46be];
 this._onLocalMutation(_0x523152[0]);
 },
 ),
 ),
 _0x37b031
 );
 }
};
B = y(
 [
 v(3, (0, t.Inject)(t.Injector)),
 v(4, (0, t.Inject)(e.CompressMutationService)),
 v(5, (0, t.Inject)(t.LocaleService)),
 v(6, (0, t.Inject)(e.RevisionService)),
 v(7, (0, t.Inject)(_)),
 v(8, t.IUniverInstanceService),
 v(9, t.ILogService),
 v(10, t.ICommandService),
 v(11, t.IPermissionService),
 v(12, (0, t.Optional)(C)),
 v(13, (0, t.Optional)(x)),
 ],
 B,
);
const We = (0, t.createIdentifier)(
 "univer-pro.collaboration-client.network-condition.service",
);
function Ge(_0x129ed7) {
 let _0x35204c = _0x129ed7.data,
 _0x3a913b = JSON.parse(_0x35204c);
 switch (_0x3a913b.cmd) {
 case a.CombCmd["HEARTBEAT"]:
 case a.CombCmd["HELLO"]: {
 let _0x2529fc = _0x3a913b.infoRsp;
 return { ..._0x3a913b, data: _0x2529fc, cmd: _0x3a913b.cmd };
 }
 case a.CombCmd["JOIN"]: {
 let _0x562490 = _0x3a913b.joinRsp;
 return { ..._0x3a913b, data: _0x562490, cmd: _0x3a913b.cmd };
 }
 case a.CombCmd["RECV"]: {
 let _0x37aa7c = _0x3a913b.collaMsg;
 switch (_0x37aa7c.eventID) {
 case e.CollaborationEvent["PERMISSION_REJ"]:
 var _0x345cfa;
 return {
 ..._0x3a913b,
 data: {
 ..._0x37aa7c,
 data:
 (_0x345cfa = _0x37aa7c.permissionRejEvent) == null
 ? undefined
 : _0x345cfa.cs,
 },
 cmd: _0x3a913b.cmd,
 };
 case e.CollaborationEvent["CHANGESET_ACK"]:
 var _0x3f742f;
 return {
 ..._0x3a913b,
 data: {
 ..._0x37aa7c,
 data:
 (_0x3f742f = _0x37aa7c.csAckEvent) == null
 ? undefined
 : _0x3f742f.cs,
 },
 cmd: _0x3a913b.cmd,
 };
 case e.CollaborationEvent["NEW_CHANGESETS"]:
 var _0x2a2cc5;
 return {
 ..._0x3a913b,
 data: {
 ..._0x37aa7c,
 data:
 (_0x2a2cc5 = _0x37aa7c.newCsEvent) == null
 ? undefined
 : _0x2a2cc5.cs,
 },
 cmd: _0x3a913b.cmd,
 };
 case e.CollaborationEvent["CHANGESET_REJ"]:
 var _0x1500f4;
 return {
 ..._0x3a913b,
 data: {
 ..._0x37aa7c,
 data:
 (_0x1500f4 = _0x37aa7c.csRejEvent) == null
 ? undefined
 : _0x1500f4.cs,
 },
 cmd: _0x3a913b.cmd,
 };
 case e.CollaborationEvent["CHANGESET_SHOULD_RETRY"]:
 var _0x3649b5;
 return {
 ..._0x3a913b,
 data: {
 ..._0x37aa7c,
 data:
 (_0x3649b5 = _0x37aa7c.csShouldRetryEvent) == null
 ? undefined
 : _0x3649b5.cs,
 },
 cmd: _0x3a913b.cmd,
 };
 case e.CollaborationEvent["UPDATE_CURSOR"]:
 return {
 ..._0x3a913b,
 data: { ..._0x37aa7c, data: _0x37aa7c.updateCursorEvent },
 cmd: _0x3a913b.cmd,
 };
 case e.CollaborationEvent["USERS_ENTER"]:
 return {
 ..._0x3a913b,
 data: { ..._0x37aa7c, data: _0x37aa7c.joinEvent },
 cmd: _0x3a913b.cmd,
 };
 case e.CollaborationEvent["USERS_LEAVE"]:
 return {
 ..._0x3a913b,
 data: { ..._0x37aa7c, data: _0x37aa7c.leaveEvent },
 cmd: _0x3a913b.cmd,
 };
 case e.CollaborationEvent["LIVESHARE_NEW_HOST"]:
 return {
 ..._0x3a913b,
 data: { ..._0x37aa7c, data: _0x37aa7c.liveShareNewHost },
 cmd: _0x3a913b.cmd,
 };
 case e.CollaborationEvent["LIVESHARE_FETCH_OPERATIONS"]:
 case e.CollaborationEvent["LIVESHARE_OPERATION"]:
 return {
 ..._0x3a913b,
 data: { ..._0x37aa7c, data: _0x37aa7c.liveShareOperation },
 cmd: _0x3a913b.cmd,
 };
 case e.CollaborationEvent["LIVESHARE_TERMINATE"]:
 return {
 ..._0x3a913b,
 data: { ..._0x37aa7c, data: _0x37aa7c.liveShareNewHost },
 cmd: _0x3a913b.cmd,
 };
 case e.CollaborationEvent["MSG_FOR_ERROR"]:
 return { ..._0x3a913b, data: _0x37aa7c, cmd: _0x3a913b.cmd };
 case e.CollaborationEvent["COMMENT_UPDATE"]:
 return {
 ..._0x3a913b,
 data: { ..._0x37aa7c, data: _0x37aa7c.commentUpdateEvent },
 cmd: _0x3a913b.cmd,
 };
 case e.CollaborationEvent["UPDATE_PERMISSION_OBJ"]:
 return {
 ..._0x3a913b,
 data: { ..._0x37aa7c, data: _0x37aa7c.updatePermissionObjEvent },
 cmd: _0x3a913b.cmd,
 };
 case e.CollaborationEvent["SHOULD_CLOSE_CONN"]:
 return {
 ..._0x3a913b,
 data: { ..._0x37aa7c, data: _0x37aa7c.shouldCloseConn },
 cmd: _0x3a913b.cmd,
 };
 case e.CollaborationEvent["UNISCRIPT_RUN"]:
 return {
 ..._0x3a913b,
 data: { ..._0x37aa7c, data: _0x37aa7c.uniscriptRunEvent },
 cmd: _0x3a913b.cmd,
 };
 default:
 return _0x3a913b;
 }
 }
 default:
 return _0x3a913b;
 }
}
function Ke(_0x59fdd8) {
 switch (_0x59fdd8.cmd) {
 case a.CombCmd["HEARTBEAT"]:
 case a.CombCmd["HELLO"]:
 return JSON.stringify({
 cmd: _0x59fdd8.cmd,
 routeKey: _0x59fdd8.routeKey,
 });
 case a.CombCmd["INGEST"]: {
 let _0x7a587f;
 switch (_0x59fdd8.data["eventID"]) {
 case e.CollaborationEvent["UPDATE_CURSOR"]:
 _0x7a587f = {
 eventID: e.CollaborationEvent["UPDATE_CURSOR"],
 updateCursorEvent: _0x59fdd8.data["data"],
 };
 break;
 case e.CollaborationEvent["USERS_LEAVE"]:
 _0x7a587f = {
 eventID: e.CollaborationEvent["USERS_LEAVE"],
 leaveEvent: _0x59fdd8.data["data"],
 };
 break;
 case e.CollaborationEvent["USERS_ENTER"]:
 _0x7a587f = {
 eventID: e.CollaborationEvent["USERS_ENTER"],
 joinEvent: _0x59fdd8.data["data"],
 };
 break;
 case e.CollaborationEvent["LIVESHARE_NEW_HOST"]:
 _0x7a587f = {
 eventID: e.CollaborationEvent["LIVESHARE_NEW_HOST"],
 liveShareNewHost: _0x59fdd8.data["data"],
 };
 break;
 case e.CollaborationEvent["LIVESHARE_OPERATION"]:
 _0x7a587f = {
 eventID: e.CollaborationEvent["LIVESHARE_OPERATION"],
 liveShareOperation: _0x59fdd8.data["data"],
 };
 break;
 case e.CollaborationEvent["LIVESHARE_TERMINATE"]:
 _0x7a587f = {
 eventID: e.CollaborationEvent["LIVESHARE_TERMINATE"],
 liveShareTerminate: _0x59fdd8.data["data"],
 };
 break;
 case e.CollaborationEvent["LIVESHARE_REQUEST_HOST"]:
 _0x7a587f = {
 eventID: e.CollaborationEvent["LIVESHARE_REQUEST_HOST"],
 liveShareRequestHost: _0x59fdd8.data["data"],
 };
 break;
 case e.CollaborationEvent["LIVESHARE_FETCH_OPERATIONS"]:
 _0x7a587f = {
 eventID: e.CollaborationEvent["LIVESHARE_FETCH_OPERATIONS"],
 };
 break;
 default:
 _0x7a587f = { eventID: _0x59fdd8.data["eventID"] };
 }
 return JSON.stringify({
 cmd: _0x59fdd8.cmd,
 routeKey: _0x59fdd8.routeKey,
 collaMsg: _0x7a587f,
 });
 }
 case a.CombCmd["JOIN"]:
 return JSON.stringify({
 cmd: _0x59fdd8.cmd,
 routeKey: _0x59fdd8.routeKey,
 joinReq: _0x59fdd8.data,
 });
 case a.CombCmd["LEAVE"]:
 return JSON.stringify({
 cmd: _0x59fdd8.cmd,
 routeKey: _0x59fdd8.routeKey,
 leaveReq: _0x59fdd8.data,
 });
 default:
 throw Error(
 "[serializeCombRequest]: should not fall into default branch!",
 );
 }
}
const qe = (0, t.createIdentifier)(
 "univer-pro.collaboration-client-socket-service",
);
function Je(_0x46fd88, _0x131b59, _0x5d914c) {
 return _0x46fd88 + "/" + _0x131b59 + "/unit/" + _0x5d914c + "/new_changes";
}
let Ye = class extends t.Disposable {
 constructor(_0x3fb109, _0x4fd6a8, _0x54a136, _0x5458c2, _0x1bc362) {
 (super(),
 (this._injector = _0x3fb109),
 (this._httpService = _0x4fd6a8),
 (this._configService = _0x54a136),
 (this._logService = _0x5458c2),
 (this._snapshotServerService = _0x1bc362));
 }
 _doCreateSocket(_0x1bb8f7) {
 let _0x1ca6cc = this._injector["get"](l.ISocketService);
 if (!_0x1ca6cc)
 throw Error(
 "[CollaborationSocketService]: failed to get web socket factory!",
 );
 let _0x2402bc = _0x1ca6cc.createSocket(_0x1bb8f7);
 if (!_0x2402bc)
 throw Error("[CollaborationSocketService]: failed to create socket!");
 let _0xb63085 = new t["DisposableCollection"](),
 _0x4fc197 = new i.Subject();
 (_0xb63085.add(
 _0x2402bc.close$["subscribe"]((_0x3dc78b) => _0x4fc197.next(_0x3dc78b)),
 ),
 _0xb63085.add((0, t.toDisposable)(() => _0x4fc197.complete())));
 let _0x2488e6 = new i.Subject();
 (_0xb63085.add(
 _0x2402bc.error$["subscribe"]((_0x37f975) => _0x2488e6.next(_0x37f975)),
 ),
 _0xb63085.add((0, t.toDisposable)(() => _0x2488e6.complete())));
 let _0x578c1e = new i.Subject();
 (_0xb63085.add(
 _0x2402bc.message$["subscribe"]((_0x438464) => {
 let _0x1fee9b = Ge(_0x438464);
 _0x578c1e.next(_0x1fee9b);
 }),
 ),
 _0xb63085.add((0, t.toDisposable)(() => _0x578c1e.complete())));
 let _0x1cec52,
 _0x304823 = () => {
 (_0x2488e6.next(new Event("connection\x20error")),
 _0x4fc197.next(new Event("connection error")),
 _0x1cec52.close());
 };
 return (
 (_0x1cec52 = {
 memberID: "",
 close$: _0x4fc197.asObservable(),
 error$: _0x2488e6.asObservable(),
 open$: _0x2402bc.open$,
 message$: _0x578c1e.asObservable(),
 send: (_0x2d2932) => {
 if (_0x2d2932.cmd === a.CombCmd["INGEST"]) {
 if (
 _0x2d2932.data["eventID"] ===
 e.CollaborationEvent["SUBMIT_CHANGESET"]
 ) {
 this._submitChangeset(_0x1cec52, _0x2d2932.data).catch(
 (_0x29bf6f) => {
 (this._logService["error"](_0x29bf6f), _0x304823());
 },
 );
 return;
 }
 if (
 _0x2d2932.data["eventID"] ===
 e.CollaborationEvent["FETCH_MISSING"]
 ) {
 let _0x3b1e01 = _0x2d2932.data;
 this._fetchMissChangesets(_0x3b1e01)
 .then((_0x144ec5) => {
 _0x578c1e.next({
 cmd: a.CombCmd["RECV"],
 code: a.CmdRspCode["OK"],
 routeKey: _0x3b1e01.data["unitID"],
 routeType: "",
 data: {
 eventID:
 e.CollaborationEvent["PSEUDO_FETCH_MISSING_RESULT"],
 data: { changesets: _0x144ec5 },
 },
 });
 })
 .catch((_0x4f3098) => {
 (this._logService["error"](_0x4f3098), _0x304823());
 });
 return;
 }
 }
 _0x2402bc.send(Ke(_0x2d2932));
 },
 close: () => {
 (_0x2402bc.close(), _0xb63085.dispose());
 },
 }),
 _0x1cec52
 );
 }
 async _submitChangeset(_0xf4d5c3, _0x3d33ba) {
 let {
 unitType: _0x5985e6,
 unitID: _0x5533a1,
 changeset: _0x2ae769,
 } = _0x3d33ba.data,
 _0x37c3d2 = {
 unitID: _0x5533a1,
 memberID: _0xf4d5c3.memberID,
 type: _0x5985e6,
 changeset: (0, e.parseChangesetToProtocol)(_0x2ae769),
 },
 _0x4e22da = this._configService["getConfig"](m),
 _0x334d9c = Je(
 (_0x4e22da == null ? undefined : _0x4e22da.collabSubmitChangesetUrl) ??
 "/universer-api/comb",
 _0x5985e6,
 _0x5533a1,
 );
 try {
 await this._httpService["post"](_0x334d9c, { body: _0x37c3d2 });
 } catch (_0x5a7245) {
 throw (
 this._logService["error"](
 "[CollaborationSession]",
 "submit changeset error!",
 ),
 _0x5a7245
 );
 }
 }
 async _fetchMissChangesets(_0x493cf5) {
 let {
 unitID: _0x49f8f1,
 from: _0x52a213,
 to: _0x4d843d,
 unitType: _0x55bdac,
 } = _0x493cf5.data;
 return (
 await this._snapshotServerService["fetchMissingChangesets"](
 { metadata: undefined },
 { unitID: _0x49f8f1, type: _0x55bdac, from: _0x52a213, to: _0x4d843d },
 )
 ).changesets["map"](
 (_0x274125) => (
 (_0x274125.mutations === null || _0x274125.mutations === undefined) &&
 (_0x274125.mutations = []),
 _0x274125
 ),
 );
 }
};
Ye = y(
 [
 v(0, (0, t.Inject)(t.Injector)),
 v(1, (0, t.Inject)(l.HTTPService)),
 v(2, t.IConfigService),
 v(3, t.ILogService),
 v(4, e.ISnapshotServerService),
 ],
 Ye,
);
const Xe = (0, t.createIdentifier)(
 "univer-pro.collaboration-client-adapter-service",
);
function Ze(_0x3c7964 = {}) {
 return _0x3c7964.resolveUnit
 ? { resolveUnit: _0x3c7964.resolveUnit }
 : {
 resolveUnit: (_0x3bf83f) => ({
 target: { unitId: _0x3bf83f.unitId, unitType: _0x3bf83f.unitType },
 }),
 };
}
function Qe(_0x4b90c6, _0x58a2e7, _0x201f47) {
 let _0x4a01cd = _0x201f47.target["endpoint"];
 if (_0x4a01cd != null && _0x4a01cd.trim() === "")
 throw Error("COLLABORATION_ENDPOINT_INVALID");
 if (!_0x201f47.target["unitId"])
 throw Error("COLLABORATION_SESSION_TARGET_UNIT_ID_REQUIRED");
 return {
 localUnitId: _0x4b90c6,
 unitType: _0x58a2e7,
 target: {
 endpoint: _0x4a01cd,
 unitId: _0x201f47.target["unitId"],
 unitType: _0x201f47.target["unitType"] ?? _0x58a2e7,
 },
 changeset: _0x201f47.changeset,
 };
}
let V = class extends t.Disposable {
 constructor(
 _0x4fee29,
 _0x5747ba,
 _0x879d4d,
 _0x361ab4,
 _0x5b8585,
 _0x3b8fc3,
 _0x302925,
 ) {
 (super(),
 (this._injector = _0x4fee29),
 (this._logService = _0x5747ba),
 (this._configService = _0x879d4d),
 (this._socketService = _0x361ab4),
 (this._collaborationUIEventService = _0x5b8585),
 (this._adapter = _0x3b8fc3),
 (this._networkConditionService = _0x302925),
 g(this, "_sessions", new Map()),
 g(this, "_pendingSessions", new Map()),
 g(this, "_sessionChannels", new Map()),
 g(this, "_socketChannels", new Map()),
 g(
 this,
 "socket$",
 this._getSocketChannel(undefined).socket$["asObservable"](),
 ),
 g(this, "_status$", new i["BehaviorSubject"](0)),
 g(this, "status$", this._status$["asObservable"]()),
 this._listenToNetworkCondition());
 }
 _listenToNetworkCondition() {
 this._networkConditionService &&
 this.disposeWithMe(
 this._networkConditionService["online$"].subscribe((_0x3824bd) => {
 (_0x3824bd && this.reconnect(),
 _0x3824bd ||
 this._socketChannels["forEach"]((_0x4e9f80) =>
 this._onOffline(_0x4e9f80),
 ));
 }),
 );
 }
 dispose() {
 (super.dispose(),
 this._socketChannels["forEach"]((_0x563f24) => {
 var _0x2d72a3, _0x4bb503;
 ((_0x2d72a3 = _0x563f24.socketMessageSubscription) == null ||
 _0x2d72a3.unsubscribe(),
 (_0x563f24.socketMessageSubscription = null),
 this._clearRetryConnectingTimer(_0x563f24),
 this._clearTimeoutTimer(_0x563f24),
 this._clearHeartbeatTimer(_0x563f24),
 (_0x4bb503 = _0x563f24.socket$["getValue"]()) == null ||
 _0x4bb503.close(),
 _0x563f24.socket$["complete"]());
 }),
 this._socketChannels["clear"](),
 this._sessions["forEach"]((_0x386186) => _0x386186.dispose()),
 this._sessions["clear"](),
 this._sessionChannels["clear"](),
 this._status$["complete"]());
 }
 async requireSession(_0x33d579, _0x4c0616) {
 if (this._sessions["has"](_0x33d579))
 return this._sessions["get"](_0x33d579);
 let _0x18ba60 = this._pendingSessions["get"](_0x33d579);
 if (_0x18ba60) return _0x18ba60;
 let _0xadc6d5 = this._createSession(_0x33d579, _0x4c0616);
 this._pendingSessions["set"](_0x33d579, _0xadc6d5);
 try {
 return await _0xadc6d5;
 } finally {
 this._pendingSessions["delete"](_0x33d579);
 }
 }
 async _createSession(_0x5e8f0a, _0x4183b7) {
 let _0x3b121a = await this._resolveSessionIdentity(_0x5e8f0a, _0x4183b7),
 _0x10d8e1 = this._getSocketChannel(_0x3b121a.target["endpoint"]);
 this._tryEnsureSocket(_0x10d8e1);
 let _0x5330c2 = this._injector["createInstance"](
 ve,
 _0x3b121a,
 _0x10d8e1.socket$["asObservable"](),
 );
 return (
 this._sessions["set"](_0x5e8f0a, _0x5330c2),
 this._sessionChannels["set"](_0x5e8f0a, _0x10d8e1.endpointKey),
 _0x5330c2
 );
 }
 closeSession(_0x527adb) {
 let _0x3ef5e2 = this._sessions["get"](_0x527adb),
 _0x1355b4 = this._sessionChannels["get"](_0x527adb);
 if (
 (_0x3ef5e2 &&
 (this._sessions["delete"](_0x527adb),
 this._sessionChannels["delete"](_0x527adb),
 _0x3ef5e2.close()),
 _0x1355b4 && !this._hasSessionsForEndpoint(_0x1355b4))
 ) {
 var _0x43b597;
 let _0x38c4b7 = this._socketChannels["get"](_0x1355b4);
 _0x38c4b7 == null ||
 (_0x43b597 = _0x38c4b7.socket$["getValue"]()) == null ||
 _0x43b597.close();
 }
 }
 reconnect() {
 (this._socketChannels["size"]
 ? [...this._socketChannels["values"]()]
 : [this._getSocketChannel(undefined)]
 ).forEach((_0x518183) => {
 ((_0x518183.retryCount = 0),
 this._clearRetryConnectingTimer(_0x518183),
 this._tryReconnect(_0x518183));
 });
 }
 _clearRetryConnectingTimer(_0x1ac458) {
 _0x1ac458.retryConnectingTimer != null &&
 (clearTimeout(_0x1ac458.retryConnectingTimer),
 (_0x1ac458.retryConnectingTimer = null));
 }
 async _createSocket(_0xbf668d) {
 let _0x511d60 = this._configService["getConfig"](m),
 _0x259f51 =
 _0xbf668d.endpoint ??
 (_0x511d60 == null ? undefined : _0x511d60.collabWebSocketUrl) ??
 "ws://127.0.0.1:8000/universer-api/comb/connect",
 _0x394bf3 = await this._socketService["createSocket"](_0x259f51);
 return ((_0xbf668d.candidateSocket = _0x394bf3), _0x394bf3);
 }
 async _tryEnsureSocket(_0x5e0ed6) {
 try {
 let _0x60049a =
 _0x5e0ed6.socket$["getValue"]() ??
 _0x5e0ed6.candidateSocket ??
 (await this._createSocket(_0x5e0ed6));
 if (_0x60049a) {
 var _0x42a908;
 let _0x541e50 = _0x60049a.send;
 ((_0x60049a.send = (_0x4fa49a) => (
 _0x4fa49a.cmd !== a.CombCmd["LEAVE"] &&
 this._rescheduleHeartbeat(_0x5e0ed6),
 _0x541e50.apply(_0x60049a, [_0x4fa49a])
 )),
 (_0x42a908 = _0x5e0ed6.socketMessageSubscription) == null ||
 _0x42a908.unsubscribe(),
 (_0x5e0ed6.socketMessageSubscription = null),
 (_0x5e0ed6.socketMessageSubscription = _0x60049a.message$[
 "subscribe"
 ]((_0xc4502c) => this._onMessage(_0x5e0ed6, _0x60049a, _0xc4502c))),
 _0x60049a.error$["pipe"]((0, s.take)(1)).subscribe((_0x1bcfcb) =>
 this._logService["error"](
 "[CollaborationSessionService]:\x20socket\x20error",
 _0x1bcfcb,
 ),
 ),
 _0x60049a.open$["pipe"]((0, s.take)(1)).subscribe(() => {
 this._onConnectionOpen(_0x5e0ed6, _0x60049a);
 }),
 _0x60049a.close$["pipe"]((0, s.take)(1)).subscribe((_0x537d13) => {
 (this._logService["debug"](
 "[CollaborationSessionService]",
 "socket close",
 _0x537d13,
 ),
 this._onConnectionFailed(_0x5e0ed6));
 }));
 }
 } catch (_0x45c319) {
 (this._logService["error"](_0x45c319),
 this._onConnectionFailed(_0x5e0ed6));
 }
 }
 _onConnectionOpen(_0x18c2b0, _0x497f39) {
 (this._logService["debug"]("[CollaborationSessionService]", "socket open."),
 _0x497f39.send({ cmd: a.CombCmd["HELLO"] }),
 this._rescheduleHeartbeat(_0x18c2b0));
 }
 _onOffline(_0x23c8c4) {
 ((_0x23c8c4.socketReady = false),
 (_0x23c8c4.candidateSocket = null),
 this._status$["next"](2),
 _0x23c8c4.socket$["next"](null),
 this._clearTimeoutTimer(_0x23c8c4),
 this._clearHeartbeatTimer(_0x23c8c4));
 }
 _onConnectionFailed(_0x30a1cd) {
 (this._onOffline(_0x30a1cd),
 this._hasSessionsForEndpoint(_0x30a1cd.endpointKey) &&
 (_0x30a1cd.retryCount <
 (this._configService["getConfig"]("RETRY_CONNECTING_MAX_COUNT") ?? 3)
 ? (this._collaborationUIEventService["emitEvent"]({
 id: "SOCKET_FAILED_RETRY",
 }),
 this._tryReconnect(_0x30a1cd))
 : this._collaborationUIEventService["emitEvent"]({
 id: "SOCKET_FAILED",
 })));
 }
 _tryReconnect(_0x2a1404) {
 let _0x48d734 = _0x2a1404.retryCount,
 _0x5cb35e = this._configService["getConfig"](m),
 _0x1983ae =
 _0x48d734 === 0
 ? 0
 : ((_0x5cb35e == null
 ? undefined
 : _0x5cb35e.retryConnectingInterval) ?? 20000) *
 2 ** _0x48d734;
 ((_0x2a1404.retryConnectingTimer = setTimeout(() => {
 (clearTimeout(_0x2a1404.retryConnectingTimer),
 (_0x2a1404.retryConnectingTimer = null),
 this._tryEnsureSocket(_0x2a1404));
 }, _0x1983ae)),
 (_0x2a1404.retryCount += 1));
 }
 async _resolveSessionIdentity(_0x83c335, _0xdc2466) {
 return Qe(
 _0x83c335,
 _0xdc2466,
 await this._adapter["resolveUnit"]({
 unitId: _0x83c335,
 unitType: _0xdc2466,
 }),
 );
 }
 _onMessage(_0x2cf2e0, _0x2233a9, _0x1c5e85) {
 let { cmd: _0x151084 } = _0x1c5e85;
 (_0x151084 === a.CombCmd["HELLO"] &&
 !_0x2cf2e0.socketReady &&
 ((_0x2233a9.memberID = _0x1c5e85.data["memberID"]),
 _0x2cf2e0.socket$["next"](_0x2233a9),
 this._status$["next"](3),
 (_0x2cf2e0.socketReady = true),
 (_0x2cf2e0.candidateSocket = null)),
 _0x151084 === a.CombCmd["HEARTBEAT"] &&
 this._clearTimeoutTimer(_0x2cf2e0),
 this._rescheduleHeartbeat(_0x2cf2e0));
 }
 _hasSessionsForEndpoint(_0x9e707f) {
 return [...this._sessionChannels["values"]()].some(
 (_0x432f48) => _0x432f48 === _0x9e707f,
 );
 }
 _getSocketChannel(_0x519b17) {
 let _0x4244ff = _0x519b17 ?? "",
 _0xe56148 = this._socketChannels["get"](_0x4244ff);
 if (_0xe56148) return _0xe56148;
 let _0xef7a3e = {
 endpointKey: _0x4244ff,
 endpoint: _0x519b17,
 socket$: new i.BehaviorSubject(undefined),
 candidateSocket: null,
 socketReady: false,
 socketMessageSubscription: null,
 retryConnectingTimer: null,
 retryCount: 0,
 sendHeartbeatTimer: null,
 timeoutTimer: null,
 };
 return (this._socketChannels["set"](_0x4244ff, _0xef7a3e), _0xef7a3e);
 }
 _rescheduleHeartbeat(_0x5efbe1) {
 (this._clearHeartbeatTimer(_0x5efbe1),
 (_0x5efbe1.sendHeartbeatTimer = setTimeout(
 () => this._sendHeartbeat(_0x5efbe1),
 this._configService["getConfig"]("HEARTBEAT_INTERVAL") ?? 30000,
 )));
 }
 _sendHeartbeat(_0x5a1c16) {
 (_0x5a1c16.socket$["getValue"]().send({ cmd: a.CombCmd["HEARTBEAT"] }),
 this._waitForHeartbeatResponse(_0x5a1c16));
 }
 _waitForHeartbeatResponse(_0x5c93c9) {
 _0x5c93c9.timeoutTimer = setTimeout(
 () => this._onConnectionFailed(_0x5c93c9),
 this._configService["getConfig"]("HEARTBEAT_TIMEOUT") ?? 20000,
 );
 }
 _clearHeartbeatTimer(_0x3cdddb) {
 _0x3cdddb.sendHeartbeatTimer != null &&
 (clearTimeout(_0x3cdddb.sendHeartbeatTimer),
 (_0x3cdddb.sendHeartbeatTimer = null));
 }
 _clearTimeoutTimer(_0x10c41c) {
 _0x10c41c.timeoutTimer != null &&
 (clearTimeout(_0x10c41c.timeoutTimer), (_0x10c41c.timeoutTimer = null));
 }
};
V = y(
 [
 v(0, (0, t.Inject)(t.Injector)),
 v(1, t.ILogService),
 v(2, t.IConfigService),
 v(3, qe),
 v(4, (0, t.Inject)(_)),
 v(5, Xe),
 v(6, (0, t.Optional)(We)),
 ],
 V,
);
let H = class extends t.RxDisposable {
 constructor(_0x45cffd, _0x3065e2, _0x5498eb, _0x3f5e10) {
 var _0x31179d;
 (super(),
 (this._injector = _0x45cffd),
 (this._collabSessionService = _0x3065e2),
 (this._configService = _0x5498eb),
 (this._univerInstanceService = _0x3f5e10),
 g(this, "_entities", new Map()),
 g(this, "_entityInit$", new i["Subject"]()),
 g(this, "entityInit$", this._entityInit$["asObservable"]()),
 ((_0x31179d = this._configService["getConfig"](
 "collaboration-client.config",
 )) == null
 ? undefined
 : _0x31179d.enableCollaboration) !== false && this._init());
 }
 dispose() {
 (super.dispose(),
 this._entities["forEach"]((_0x11a637) => _0x11a637.dispose()),
 this._entities["clear"]());
 }
 getCollabEntity(_0x88d8db) {
 return this._entities["get"](_0x88d8db) ?? null;
 }
 getCollabEntity$(_0x56c19d) {
 let _0x18195d = this.getCollabEntity(_0x56c19d);
 return _0x18195d
 ? (0, i.of)(_0x18195d)
 : this._entityInit$["pipe"](
 (0, s.filter)((_0x7f676b) => _0x7f676b.unitID === _0x56c19d),
 );
 }
 readyForCollab(_0x2b738d) {
 return (0, i.firstValueFrom)(
 this.getCollabEntity$(_0x2b738d).pipe((0, s.map)(() => undefined)),
 );
 }
 _init() {
 (this._univerInstanceService["getTypeOfUnitAdded$"](
 t.UniverInstanceType["UNIVER_SHEET"],
 )
 .pipe((0, i.takeUntil)(this.dispose$), (0, s.delay)(16))
 .subscribe(async (_0x2eb4e5) => {
 let _0x5b8932 = _0x2eb4e5.unit["getUnitId"](),
 _0x3a1f8a = await this._startCollaboration(
 _0x5b8932,
 t.UniverInstanceType["UNIVER_SHEET"],
 );
 this._entities["set"](_0x5b8932, _0x3a1f8a);
 }),
 this._univerInstanceService["getTypeOfUnitAdded$"](
 t.UniverInstanceType["UNIVER_DOC"],
 )
 .pipe((0, i.takeUntil)(this.dispose$), (0, s.delay)(16))
 .pipe(
 (0, s.filter)(
 (_0x1d0e65) => !_0x1d0e65.unit["getUnitId"]().startsWith("__"),
 ),
 )
 .subscribe(async (_0x5d0a26) => {
 let _0x4b8bf1 = _0x5d0a26.unit["getUnitId"](),
 _0xbf2d86 = await this._startCollaboration(
 _0x4b8bf1,
 t.UniverInstanceType["UNIVER_DOC"],
 );
 this._entities["set"](_0x4b8bf1, _0xbf2d86);
 }),
 this._univerInstanceService["getTypeOfUnitAdded$"](
 t.UniverInstanceType["UNIVER_SLIDE"],
 )
 .pipe((0, i.takeUntil)(this.dispose$), (0, s.delay)(16))
 .subscribe(async (_0x48df74) => {
 let _0xe63e5 = _0x48df74.unit["getUnitId"](),
 _0x4210fd = await this._startCollaboration(
 _0xe63e5,
 t.UniverInstanceType["UNIVER_SLIDE"],
 );
 this._entities["set"](_0xe63e5, _0x4210fd);
 }),
 this._univerInstanceService["getTypeOfUnitAdded$"](
 t.UniverInstanceType["UNIVER_BOARD"],
 )
 .pipe((0, i.takeUntil)(this.dispose$), (0, s.delay)(16))
 .subscribe(async (_0x51fa3f) => {
 let _0xe17730 = _0x51fa3f.unit["getUnitId"](),
 _0x1bbd9d = await this._startCollaboration(
 _0xe17730,
 t.UniverInstanceType["UNIVER_BOARD"],
 );
 this._entities["set"](_0xe17730, _0x1bbd9d);
 }),
 this._univerInstanceService["getTypeOfUnitAdded$"](
 t.UniverInstanceType["UNIVER_BASE"],
 )
 .pipe((0, i.takeUntil)(this.dispose$), (0, s.delay)(16))
 .subscribe(async (_0x57cd07) => {
 let _0x5e73a1 = _0x57cd07.unit["getUnitId"](),
 _0x5b87f5 = await this._startCollaboration(
 _0x5e73a1,
 t.UniverInstanceType["UNIVER_BASE"],
 );
 this._entities["set"](_0x5e73a1, _0x5b87f5);
 }),
 this._univerInstanceService["getTypeOfUnitAdded$"](
 t.UniverInstanceType["UNIVER_PDF"],
 )
 .pipe((0, i.takeUntil)(this.dispose$), (0, s.delay)(16))
 .subscribe(async (_0x2b251a) => {
 let _0x398946 = _0x2b251a.unit["getUnitId"](),
 _0x1e2d1b = await this._startCollaboration(
 _0x398946,
 t.UniverInstanceType["UNIVER_PDF"],
 );
 this._entities["set"](_0x398946, _0x1e2d1b);
 }),
 (0, i.merge)(
 this._univerInstanceService["getTypeOfUnitDisposed$"](
 t.UniverInstanceType["UNIVER_SHEET"],
 ),
 this._univerInstanceService["getTypeOfUnitDisposed$"](
 t.UniverInstanceType["UNIVER_DOC"],
 ),
 this._univerInstanceService["getTypeOfUnitDisposed$"](
 t.UniverInstanceType["UNIVER_SLIDE"],
 ),
 this._univerInstanceService["getTypeOfUnitDisposed$"](
 t.UniverInstanceType["UNIVER_BOARD"],
 ),
 this._univerInstanceService["getTypeOfUnitDisposed$"](
 t.UniverInstanceType["UNIVER_BASE"],
 ),
 this._univerInstanceService["getTypeOfUnitDisposed$"](
 t.UniverInstanceType["UNIVER_PDF"],
 ),
 )
 .pipe((0, i.takeUntil)(this.dispose$))
 .subscribe((_0xdfd2fe) => {
 let _0x1dbd7c = _0xdfd2fe.getUnitId(),
 _0x1e9f76 = this._entities["get"](_0x1dbd7c);
 _0x1e9f76 &&
 (_0x1e9f76.dispose(), this._entities["delete"](_0x1dbd7c));
 }));
 }
 async _startCollaboration(_0x4b957d, _0x2492d1) {
 let _0x8d972c =
 await this._collabSessionService["requireSession"](_0x4b957d),
 _0x2eaa4e = this._injector["createInstance"](
 this._getCtorByUniverInstanceType(_0x2492d1),
 _0x4b957d,
 _0x2492d1,
 _0x8d972c,
 );
 return (
 await _0x2eaa4e.init(),
 this._entityInit$["next"](_0x2eaa4e),
 _0x2eaa4e
 );
 }
 _getCtorByUniverInstanceType(_0x1c2f15) {
 switch (_0x1c2f15) {
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
 throw Error(
 "[CollaborationController]: invalid univer type: " + _0x1c2f15,
 );
 }
 }
};
H = y(
 [
 v(0, (0, t.Inject)(t.Injector)),
 v(1, (0, t.Inject)(V)),
 v(2, t.IConfigService),
 v(3, t.IUniverInstanceService),
 ],
 H,
);
var $e = "@univerjs-pro/collaboration-client",
 et = "1.0.0-insiders.20260907-70fc579";
let tt = class extends t.Disposable {
 constructor(_0x573be1, _0x2e5e14) {
 (super(),
 (this._univerInstanceService = _0x573be1),
 (this._configService = _0x2e5e14),
 this._init());
 }
 _init() {
 this.disposeWithMe(
 this._univerInstanceService["focused$"].subscribe(() => {
 let _0x483cc6 = this._univerInstanceService["getFocusedUnit"](),
 _0x33a109 =
 this._configService["getConfig"]("DEFAULT_FILE_NAME") ?? "Univer";
 (_0x483cc6 instanceof t.Workbook && (_0x33a109 = _0x483cc6.name),
 (document.title = _0x33a109));
 }),
 );
 }
};
tt = y([v(0, t.IUniverInstanceService), v(1, t.IConfigService)], tt);
const nt = (0, t.createIdentifier)("base-ui.attachment-io.service");
let U = class {
 constructor(_0x2a5fd2, _0x14f6a4, _0x312091) {
 ((this._httpService = _0x2a5fd2),
 (this._configService = _0x14f6a4),
 (this._univerInstanceService = _0x312091));
 }
 getUploadOptions() {
 return this._getConfig().attachment ?? {};
 }
 async saveAttachment(_0x48095f) {
 let _0x2aa721 = this.getUploadOptions();
 if ((rt(_0x48095f, _0x2aa721), _0x2aa721.upload))
 return _0x2aa721.upload(_0x48095f);
 let _0x56ace0 = await this._upload(_0x48095f);
 return {
 id: _0x56ace0,
 name: _0x48095f.name,
 mimeType: _0x48095f.type,
 size: _0x48095f.size,
 sourceType: t.ImageSourceType["UUID"],
 source: _0x56ace0,
 };
 }
 async getAttachmentUrl(_0x475512, _0xbece93) {
 if (_0xbece93 !== t.ImageSourceType["UUID"]) return _0x475512;
 let _0x551d38 = (
 await this._httpService["get"](
 this._getSignURL().replace("{fileID}", _0x475512),
 )
 ).body;
 if (_0x551d38.error && _0x551d38.error["code"] !== a.ErrorCode["OK"])
 throw _0x551d38.error;
 if (!_0x551d38.url)
 throw Error(
 "[CollaborationAttachmentIoService]: failed to resolve attachment URL.",
 );
 return (0, t.resolveWithBasePath)(
 _0x551d38.url,
 this._getDownloadEndpointURL(),
 );
 }
 async _upload(_0x2439bc) {
 let _0xff8d08 = this._univerInstanceService["getFocusedUnit"](),
 _0x4a5e9b = _0xff8d08 == null ? undefined : _0xff8d08.getUnitId();
 if (!_0x4a5e9b)
 throw Error("[CollaborationAttachmentIoService]: unitId is not found.");
 let _0x14a941 = new FormData();
 _0x14a941.append("file", _0x2439bc);
 let _0xb181e2 =
 this._getUploadFileURL() +
 "?size=" +
 _0x2439bc.size["toString"]() +
 "&source=" +
 a.FileSource["UnitEmbedded"] +
 "&assign=" +
 encodeURIComponent(_0x4a5e9b),
 _0x8b883 = (
 await this._httpService["post"](_0xb181e2, { body: _0x14a941 })
 ).body["FileId"];
 if (typeof _0x8b883 != "string" || !_0x8b883)
 throw Error(
 "[CollaborationAttachmentIoService]: failed to upload attachment.",
 );
 return _0x8b883;
 }
 _getUploadFileURL() {
 return (
 this._getConfig().uploadFileServerUrl ??
 "/universer-api/stream/file/upload"
 );
 }
 _getSignURL() {
 return (
 this._getConfig().signUrlServerUrl ??
 "/universer-api/file/{fileID}/sign-url"
 );
 }
 _getDownloadEndpointURL() {
 let _0xbb11db = this._getConfig();
 return _0xbb11db.downloadEndpointUrl
 ? _0xbb11db.downloadEndpointUrl
 : typeof location < "u"
 ? location.orig in : (_0xbb11db.uploadFileServerUrl ?? "");
 }
 _getConfig() {
 return (
 this._configService["getConfig"]("collaboration-client.config") ?? {}
 );
 }
};
U = y(
 [
 v(0, (0, t.Inject)(l.HTTPService)),
 v(1, (0, t.Inject)(t.IConfigService)),
 v(2, (0, t.Inject)(t.IUniverInstanceService)),
 ],
 U,
);
function rt(_0x42a5b4, _0x11ee66) {
 var _0x525ece;
 if (_0x11ee66.maxSize != null && _0x42a5b4.size > _0x11ee66.maxSize)
 throw Error(
 "[CollaborationAttachmentIoService]: attachment exceeds max size.",
 );
 if (
 (_0x525ece = _0x11ee66.accept) != null &&
 _0x525ece.length &&
 !_0x11ee66.accept["some"](
 (_0x144322) =>
 _0x42a5b4.type === _0x144322 ||
 _0x42a5b4.name["endsWith"](_0x144322) ||
 (_0x144322.endsWith("/*") &&
 _0x42a5b4.type["startsWith"](_0x144322.slice(0, -1))),
 )
 )
 throw Error(
 "[CollaborationAttachmentIoService]: attachment type is not accepted.",
 );
}
let W = class {
 constructor(_0x5def92, _0x4b7761, _0x154c6e) {
 ((this._configService = _0x5def92),
 (this._httpService = _0x4b7761),
 (this.localeService = _0x154c6e),
 this.init());
 }
 init() {
 this._httpService["registerHTTPInterceptor"]({
 priority: 1,
 interceptor: (_0x219118, _0x17a2a6) =>
 _0x17a2a6(_0x219118).pipe(
 (0, i.concatMap)(async (_0x24d132) => {
 let _0x282b8e = _0x24d132;
 if (_0x282b8e.status === 401) {
 if (typeof window > "u")
 throw Error(
 "[AuthServerService]:\x20you\x20should\x20provide\x20authentication\x20info\x20on\x20Node.js.",
 );
 if (
 window.confirm(
 this.localeService["t"](
 "collaboration-client.auth.needGotoLoginAlert",
 ),
 )
 ) {
 let _0x4cfd27 = window.encodeURIComponent(
 window.location["href"],
 );
 window.location["href"] =
 this._getLoginPath() + "?url=" + _0x4cfd27;
 }
 }
 return _0x282b8e;
 }),
 ),
 });
 }
 _getLoginPath() {
 let _0x178760 = this._configService["getConfig"](m);
 return (
 (_0x178760 == null ? undefined : _0x178760.loginUrlKey) ??
 "/universer-api/oidc/authpage"
 );
 }
};
W = y(
 [
 v(0, t.IConfigService),
 v(1, (0, t.Inject)(l.HTTPService)),
 v(2, (0, t.Inject)(t.LocaleService)),
 ],
 W,
);
let G = class extends t.Disposable {
 constructor(_0xadea77, _0x5fd1f2) {
 (super(),
 (this._HTTPService = _0xadea77),
 (this._configService = _0x5fd1f2),
 g(this, "_cfgEnableObjInherit", false),
 this._initMergeInterceptor());
 }
 _initMergeInterceptor() {
 let _0x163527 = this;
 this.disposeWithMe(
 this._HTTPService["registerHTTPInterceptor"]({
 priority: 999,
 interceptor: (0, l.MergeInterceptorFactory)(
 {
 isMatch(_0x5c37d6) {
 var _0x468b3e;
 if (
 _0x5c37d6.method === "POST" &&
 (_0x468b3e = _0x5c37d6.requestParams) != null &&
 _0x468b3e.body
 ) {
 let { objectID: _0x1b8625, objectType: _0x457296 } =
 _0x5c37d6.requestParams["body"] || {};
 if (!_0x1b8625 || _0x457296 === undefined) return false;
 let _0x2b27b5 =
 _0x163527._getAPIPrefixPath() +
 "/" +
 _0x457296 +
 "/object/" +
 _0x1b8625 +
 "/allowed";
 if (_0x5c37d6.url === _0x2b27b5) return true;
 }
 return false;
 },
 getParamsFromRequest(_0x1e57e1) {
 var _0x49e65e;
 return (_0x49e65e = _0x1e57e1.requestParams) == null
 ? undefined
 : _0x49e65e.body;
 },
 mergeParamsToRequest(_0xab9819, _0x37e186) {
 let _0x50e5e1 =
 _0x163527._getAPIPrefixPath() + "/-/object/-/batch_allowed",
 _0x95c57 = _0xab9819.reduce((_0x422036, _0x10c90c) => {
 let {
 unitID: _0x1c74da,
 objectID: _0x510949,
 objectType: _0x4c2252,
 actions: _0x44d4da,
 } = _0x10c90c;
 return (
 _0x422036[_0x1c74da] || (_0x422036[_0x1c74da] = {}),
 _0x422036[_0x1c74da][_0x510949] ||
 (_0x422036[_0x1c74da][_0x510949] = {
 objectID: _0x510949,
 objectType: _0x4c2252,
 actions: [],
 }),
 _0x422036[_0x1c74da][_0x510949].actions["push"](
 ..._0x44d4da,
 ),
 _0x422036
 );
 }, {}),
 _0x11c44d = [];
 for (let _0x297d05 in _0x95c57)
 for (let _0x5d8f93 in _0x95c57[_0x297d05]) {
 let { actions: _0x1e7956, objectType: _0x1ec640 } =
 _0x95c57[_0x297d05][_0x5d8f93],
 _0x26873c = [...new Set(_0x1e7956)];
 _0x11c44d.push({
 unitID: _0x297d05,
 objectID: _0x5d8f93,
 objectType: _0x1ec640,
 actions: _0x26873c,
 });
 }
 return new l["HTTPRequest"]("POST", _0x50e5e1, {
 headers: _0x37e186.headers,
 withCredentials: _0x37e186.withCredentials,
 responseType: _0x37e186.responseType,
 body: { requests: _0x11c44d },
 });
 },
 },
 {
 distributeResult(_0x5d592e, _0x56a8f8) {
 let { objectActions: _0x3d8798 } = _0x5d592e;
 return _0x56a8f8.map((_0x4afb8d) => {
 let {
 unitID: _0x50792e,
 objectID: _0x1e8f4d,
 actions: _0x22410b,
 } = _0x4afb8d,
 _0x40654f = _0x3d8798.find(
 (_0x5273da) =>
 _0x5273da.unitID === _0x50792e &&
 _0x5273da.objectID === _0x1e8f4d,
 );
 return {
 config: _0x4afb8d,
 result: {
 actions: _0x22410b
 .map((_0x8366ef) =>
 _0x40654f == null
 ? undefined
 : _0x40654f.actions["find"](
 (_0x487919) => _0x487919.action === _0x8366ef,
 ),
 )
 .filter((_0x257ca9) => !!_0x257ca9),
 error: _0x5d592e.error,
 },
 };
 });
 },
 },
 ),
 }),
 );
 }
 _getAPIPrefixPath() {
 let _0x22b54d = this._configService["getConfig"](m);
 return (
 (_0x22b54d == null ? undefined : _0x22b54d.authzUrl) ??
 "/universer-api/authz"
 );
 }
 async create(_0x56fc0e) {
 let _0x4f5bb5 =
 this._getAPIPrefixPath() + "/" + _0x56fc0e.objectType + "/object";
 return (
 (await this._HTTPService["post"](_0x4f5bb5, { body: _0x56fc0e })).body[
 "objectID"
 ] || ""
 );
 }
 async list(_0x4b26d3) {
 let _0x142cc8 = this._getAPIPrefixPath() + "/-/object/list";
 return (await this._HTTPService["post"](_0x142cc8, { body: _0x4b26d3 }))
 .body["objects"];
 }
 async update(_0x3f8a02) {
 var _0x3f102e;
 let _0x160c96 =
 this._getAPIPrefixPath() +
 "/" +
 _0x3f8a02.objectType +
 "/object/" +
 _0x3f8a02.objectID,
 _0x5166ef = await this._HTTPService["put"](_0x160c96, {
 body: _0x3f8a02,
 });
 if (
 (_0x5166ef == null ||
 (_0x3f102e = _0x5166ef.body) == null ||
 (_0x3f102e = _0x3f102e.error) == null
 ? undefined
 : _0x3f102e.code) !== 1
 )
 throw Error("Failed to update permission point");
 }
 async allowed(_0x2147ea) {
 let _0x3c6f28 =
 this._getAPIPrefixPath() +
 "/" +
 _0x2147ea.objectType +
 "/object/" +
 _0x2147ea.objectID +
 "/allowed";
 return (await this._HTTPService["post"](_0x3c6f28, { body: _0x2147ea }))
 .body["actions"];
 }
 async batchAllowed(_0x2d0add) {
 let _0x388c6f = this._getAPIPrefixPath() + "/-/object/-/batch_allowed";
 return (
 await this._HTTPService["post"](_0x388c6f, {
 body: { requests: _0x2d0add },
 })
 ).body["objectActions"];
 }
 async listRoles(_0x56cd19) {
 let _0x5b4794 =
 this._getAPIPrefixPath() + "/" + _0x56cd19.objectType + "/role",
 _0x440b9a = await this._HTTPService["post"](_0x5b4794, {
 body: _0x56cd19,
 });
 return {
 roles: _0x440b9a.body["roles"],
 actions: _0x440b9a.body["actions"],
 };
 }
 async deleteCollaborator(_0xee8533) {
 let _0x27057b = this._getAPIPrefixPath() + "/collaborator";
 await this._HTTPService["delete"](_0x27057b, {
 params: {
 collaboratorID: _0xee8533.collaboratorID,
 objectID: _0xee8533.objectID,
 unitID: _0xee8533.unitID,
 },
 });
 }
 async updateCollaborator(_0x236b8d) {
 let _0x1c952b = this._getAPIPrefixPath() + "/collaborator";
 await this._HTTPService["patch"](_0x1c952b, { body: _0x236b8d });
 }
 async createCollaborator(_0x413f23) {
 let _0x2dd285 = this._getAPIPrefixPath() + "/collaborator";
 await this._HTTPService["post"](_0x2dd285, { body: _0x413f23 });
 }
 async listCollaborators(_0x3ac4c2) {
 let _0xb8fbb8 = this._getAPIPrefixPath() + "/collaborator",
 _0x325122 = await this._HTTPService["get"](_0xb8fbb8, {
 params: { objectID: _0x3ac4c2.objectID, unitID: _0x3ac4c2.unitID },
 });
 return (
 this.setCfgEnableObjInherit(
 _0x325122.body["cfgEnableObjInherit"] ?? false,
 ),
 _0x325122.body["collaborators"]
 );
 }
 async putCollaborators(_0x174596) {
 let _0x14a7de = this._getAPIPrefixPath() + "/collaborator";
 await this._HTTPService["put"](_0x14a7de, { body: _0x174596 });
 }
 setCfgEnableObjInherit(_0x44538f) {
 this._cfgEnableObjInherit = _0x44538f;
 }
 getCfgEnableObjInherit() {
 return this._cfgEnableObjInherit;
 }
};
G = y(
 [v(0, (0, t.Inject)(l.HTTPService)), v(1, (0, t.Inject)(t.IConfigService))],
 G,
);
function it(_0x54407f) {
 let _0x15f171 = atob(_0x54407f),
 _0x425f7d = new Uint8Array(_0x15f171.length);
 for (let _0x2bb9ef = 0; _0x2bb9ef < _0x15f171.length; _0x2bb9ef++)
 _0x425f7d[_0x2bb9ef] = _0x15f171.charCodeAt(_0x2bb9ef);
 return _0x425f7d;
}
function at(_0x2ed1a4) {
 let _0x2bb012 = "";
 for (let _0x47f015 = 0; _0x47f015 < _0x2ed1a4.length; _0x47f015++)
 _0x2bb012 += String.fromCharCode(_0x2ed1a4[_0x47f015]);
 return btoa(_0x2bb012);
}
function ot(_0x153c4d, _0x67ce13) {
 let _0x3cd12c = it(_0x67ce13),
 _0x1ba6c7 = (0, f.randomBytes)(16);
 return at(
 (0, f.concatBytes)(
 _0x1ba6c7,
 (0, d.cbc)(_0x3cd12c, _0x1ba6c7).encrypt((0, f.utf8ToBytes)(_0x153c4d)),
 ),
 );
}
function st() {
 let _0x496f2c = (0, u.getGlobalObject)().__Key__;
 if (typeof window < "u" && window.location !== undefined && _0x496f2c) {
 let _0x223c4c = {
 time: Math.floor(Date.now() / 1000),
 domain: location.hostname,
 };
 return ot(JSON.stringify(_0x223c4c), _0x496f2c);
 }
}
let K = class {
 constructor(_0xd0928e) {
 ((this._httpService = _0xd0928e), this._initRequestHeader());
 }
 _initRequestHeader() {
 this._httpService["registerHTTPInterceptor"]({
 interceptor: (_0x39dfa1, _0x1ef84d) => {
 let _0x2313fb = st();
 return (
 _0x2313fb && _0x39dfa1.headers["set"]("x-univer-host", _0x2313fb),
 _0x1ef84d(_0x39dfa1)
 );
 },
 });
 }
};
K = y([v(0, (0, t.Inject)(l.HTTPService))], K);
let q = class extends t.RxDisposable {
 constructor(_0x361bbb, _0x402ef9, _0x5de366) {
 (super(),
 (this._logService = _0x361bbb),
 (this._snapshotService = _0x402ef9),
 (this._localCacheService = _0x5de366),
 g(this, "_unitInfo$", new i["BehaviorSubject"](null)),
 g(this, "_unitLoaded$", new i["Subject"]()),
 g(this, "unitInfo$", this._unitInfo$["asObservable"]()),
 g(this, "unitLoaded$", this._unitLoaded$["asObservable"]()));
 }
 dispose() {
 (super.dispose(),
 this._unitLoaded$["complete"](),
 this._unitInfo$["complete"]());
 }
 async loadUnitOfRevision(_0x11e9e1, _0x2e58cb, _0x22c469, _0x5369b6) {
 this._unitInfo$["next"]({
 unitId: _0x11e9e1,
 type: _0x2e58cb,
 subUnitId: _0x5369b6,
 });
 let _0x5ec983 = null;
 switch (_0x2e58cb) {
 case t.UniverInstanceType["UNIVER_SHEET"]:
 _0x5ec983 = await this._snapshotService["loadSheet"](
 _0x11e9e1,
 _0x22c469,
 undefined,
 { initialSubUnitId: _0x5369b6 },
 );
 break;
 case t.UniverInstanceType["UNIVER_DOC"]:
 _0x5ec983 = await this._snapshotService["loadDoc"](
 _0x11e9e1,
 _0x22c469,
 );
 break;
 case t.UniverInstanceType["UNIVER_SLIDE"]:
 _0x5ec983 = await this._snapshotService["loadSlide"](
 _0x11e9e1,
 _0x22c469,
 );
 break;
 case t.UniverInstanceType["UNIVER_BOARD"]:
 _0x5ec983 = await this._snapshotService["loadBoard"](
 _0x11e9e1,
 _0x22c469,
 );
 break;
 case t.UniverInstanceType["UNIVER_BASE"]:
 _0x5ec983 = await this._snapshotService["loadBase"](
 _0x11e9e1,
 _0x22c469,
 );
 break;
 case t.UniverInstanceType["UNIVER_PDF"]:
 _0x5ec983 = await this._snapshotService["loadPdf"](
 _0x11e9e1,
 _0x22c469,
 );
 break;
 default:
 this._logService["error"](
 "[DataLoaderService]",
 "Unknown\x20type.\x20Will\x20not\x20load\x20files\x20from\x20remote\x20address.",
 );
 break;
 }
 return (_0x5ec983 && this._unitLoaded$["next"](_0x5ec983), _0x5ec983);
 }
 async loadUnit(_0xd64a15, _0x3d1d95, _0x48e4b1) {
 var _0x18b082;
 this._unitInfo$["next"]({
 unitId: _0xd64a15,
 type: _0x3d1d95,
 subUnitId: _0x48e4b1,
 });
 let _0x15dd9f = 0,
 _0x507ce7 = await ((_0x18b082 = this._localCacheService) == null
 ? undefined
 : _0x18b082.loadOfflineData(_0xd64a15));
 return (
 _0x507ce7 &&
 (_0x507ce7.awaitingChangeset || _0x507ce7.mutations["length"] !== 0) &&
 (_0x15dd9f = _0x507ce7.rev),
 _0x15dd9f === 0 &&
 this._logService["debug"](
 "[DataLoaderService]",
 "fetching the latest document from the server.",
 ),
 this.loadUnitOfRevision(_0xd64a15, _0x3d1d95, _0x15dd9f, _0x48e4b1)
 );
 }
};
q = y(
 [
 v(0, t.ILogService),
 v(1, (0, t.Inject)(e.SnapshotService)),
 v(2, (0, t.Optional)(x)),
 ],
 q,
);
let J = class {
 constructor(_0x39c4c6, _0x181125, _0x4ea093) {
 ((this._httpService = _0x39c4c6),
 (this._configService = _0x181125),
 (this._univerInstanceService = _0x4ea093),
 g(this, "_waitCount", 0),
 g(this, "_change$", new i["Subject"]()),
 g(this, "change$", this._change$),
 g(this, "_imageSourceCache", new Map()));
 }
 setWaitCount(_0x20d8bc) {
 ((this._waitCount = _0x20d8bc), this._change$["next"](_0x20d8bc));
 }
 getImageSourceCache(_0x43fba4, _0x298d3e) {
 if (_0x298d3e === t.ImageSourceType["BASE64"]) {
 let _0x235df8 = new Image();
 return ((_0x235df8.src = _0x43fba4), _0x235df8);
 }
 return this._imageSourceCache["get"](_0x43fba4);
 }
 addImageSourceCache(_0x38327d, _0x40810d, _0x3297be) {
 _0x40810d !== t.ImageSourceType["BASE64"] &&
 _0x3297be != null &&
 this._imageSourceCache["set"](_0x38327d, _0x3297be);
 }
 async getImage(_0xb5db5a) {
 try {
 let _0x5dd0b0 = this._replaceFileID(this._getSignURL(), "" + _0xb5db5a),
 _0x3db42a = (await this._httpService["get"](_0x5dd0b0)).body;
 if (_0x3db42a.error && _0x3db42a.error["code"] === a.ErrorCode["OK"]) {
 let _0x56c008 = (0, t.resolveWithBasePath)(
 _0x3db42a.url,
 this._getDownloadEndpointURL(),
 );
 return Promise.resolve(_0x56c008);
 }
 return Promise.reject(_0x3db42a.error);
 } catch (_0x2626e3) {
 return Promise.reject(_0x2626e3);
 }
 }
 async saveImage(_0x1005c2) {
 let _0x4bd1a3 = "";
 if (!p.DRAWING_IMAGE_ALLOW_IMAGE_LIST["includes"](_0x1005c2.type))
 return (
 this._decreaseWaiting(),
 Promise.reject(Error(t.ImageUploadStatusType["ERROR_IMAGE_TYPE"]))
 );
 if (_0x1005c2.size > (0, p.getDrawingImageAllowSize)())
 return (
 this._decreaseWaiting(),
 Promise.reject(Error(t.ImageUploadStatusType["ERROR_EXCEED_SIZE"]))
 );
 try {
 let _0x14d5c1 = new FormData();
 _0x14d5c1.append("file", _0x1005c2);
 let _0x32819a = this._univerInstanceService["getFocusedUnit"](),
 _0x4e393a = _0x32819a == null ? undefined : _0x32819a.getUnitId();
 if (!_0x4e393a) throw Error("unitId is not found");
 let _0x57f3ba =
 this._getUploadFileURL() +
 "?size=" +
 _0x1005c2.size["toString"]() +
 "&source=" +
 a.FileSource["UnitEmbedded"] +
 "&assign=" +
 encodeURIComponent(_0x4e393a),
 _0x4fead7 = { body: _0x14d5c1 },
 _0x547164 = (await this._httpService["post"](_0x57f3ba, _0x4fead7))
 .body;
 if (typeof _0x547164.FileId != "string")
 return (
 this._decreaseWaiting(),
 Promise.reject(Error(t.ImageUploadStatusType["ERROR_IMAGE"]))
 );
 _0x4bd1a3 = _0x547164.FileId;
 } catch {
 return (
 this._decreaseWaiting(),
 Promise.reject(Error(t.ImageUploadStatusType["ERROR_IMAGE"]))
 );
 }
 return new Promise((_0x4145b5, _0x3ad39a) => {
 let _0x25bf60 = new FileReader();
 (_0x25bf60.readAsDataURL(_0x1005c2),
 (_0x25bf60.onload = (_0x39fae5) => {
 var _0x280649;
 let _0x4e51d7 =
 (_0x280649 = _0x39fae5.target) == null
 ? undefined
 : _0x280649.result;
 if (_0x4e51d7 == null) {
 (this._decreaseWaiting(),
 _0x3ad39a(Error(t.ImageUploadStatusType["ERROR_IMAGE"])));
 return;
 }
 (_0x4145b5({
 imageId: (0, t.generateRandomId)(6),
 imageSourceType: t.ImageSourceType["UUID"],
 source: _0x4bd1a3,
 base64Cache: _0x4e51d7,
 status: t.ImageUploadStatusType["SUCCUSS"],
 }),
 this._decreaseWaiting());
 }));
 });
 }
 _getUploadFileURL() {
 let _0x429e9f = this._configService["getConfig"](m);
 return (
 (_0x429e9f == null ? undefined : _0x429e9f.uploadFileServerUrl) ??
 "/universer-api/stream/file/upload"
 );
 }
 _getSignURL() {
 let _0x20abf1 = this._configService["getConfig"](m);
 return (
 (_0x20abf1 == null ? undefined : _0x20abf1.signUrlServerUrl) ??
 "/universer-api/file/{fileID}/sign-url"
 );
 }
 _getDownloadEndpointURL() {
 let _0x5f56f4 = this._configService["getConfig"](m);
 return (
 (_0x5f56f4 == null ? undefined : _0x5f56f4.downloadEndpointUrl) ??
 location.orig in );
 }
 _replaceFileID(_0x3e7835, _0x137cdc) {
 return _0x3e7835.replace("{fileID}", _0x137cdc);
 }
 _decreaseWaiting() {
 (--this._waitCount, this._change$["next"](this._waitCount));
 }
};
J = y(
 [
 v(0, (0, t.Inject)(l.HTTPService)),
 v(1, t.IConfigService),
 v(2, (0, t.Inject)(t.IUniverInstanceService)),
 ],
 J,
);
let Y = class {
 constructor(_0x191f7e, _0x4310d6) {
 ((this._configService = _0x191f7e), (this._HTTPService = _0x4310d6));
 }
 _getAPIPrefixPath() {
 let _0x487d2f = this._configService["getConfig"](m);
 return (
 (_0x487d2f == null ? undefined : _0x487d2f.authzUrl) ??
 "/universer-api/authz"
 );
 }
 async list(_0x55671c) {
 let _0x5163a1 = this._getAPIPrefixPath() + "/collaborator";
 return {
 list: [
 {
 title: "People",
 mentions: (
 await this._HTTPService["get"](_0x5163a1, {
 params: { objectID: _0x55671c.unitId, unitID: _0x55671c.unitId },
 })
 ).body["collaborators"].map((_0x2ea53e) => ({
 objectId: _0x2ea53e.id,
 name: _0x2ea53e.subject["name"],
 metadata: { icon: _0x2ea53e.subject["avatar"] },
 label: _0x2ea53e.subject["name"],
 objectType: t.MentionType["PERSON"],
 })),
 metadata: {},
 type: t.MentionType["PERSON"],
 },
 ],
 };
 }
};
Y = y(
 [v(0, (0, t.Inject)(t.IConfigService)), v(1, (0, t.Inject)(l.HTTPService))],
 Y,
);
let X = class extends t.RxDisposable {
 constructor(
 _0x12ec3e,
 _0x49c88f,
 _0x1f7487,
 _0x185ca4,
 _0x58f446,
 _0x56ae12,
 ) {
 (super(),
 (this._injector = _0x12ec3e),
 (this._univerInstanceService = _0x49c88f),
 (this._permissionService = _0x1f7487),
 (this._authzIoService = _0x185ca4),
 (this._collaborationSessionService = _0x58f446),
 (this._collaborationUIEventService = _0x56ae12),
 this._initUnitPermissionChange(),
 this._initCloseConn());
 }
 _initCloseConn() {
 let _0x4c83ce = async (_0x45a480, _0x5b0396) => {
 (
 await this._collaborationSessionService["requireSession"](_0x45a480)
 ).event$["pipe"](
 (0, s.filter)(
 (_0x1005df) =>
 _0x1005df.eventID === e.CollaborationEvent["SHOULD_CLOSE_CONN"],
 ),
 (0, s.takeUntil)(this.dispose$),
 ).subscribe((_0x5e386b) => {
 let { reason: _0x27221e } = _0x5e386b.data;
 this._collaborationUIEventService["emitEvent"]({
 id: "CLOSE_ROOM",
 data: _0x27221e,
 });
 let _0x45fa43 = lt(_0x5b0396);
 (_0x45fa43 != null &&
 this._updateUnitPermissionPoint(
 _0x45a480,
 _0x45fa43,
 a.UnitAction["Edit"],
 false,
 ),
 this._collaborationSessionService["closeSession"](_0x45a480));
 });
 };
 ct(this._univerInstanceService)
 .pipe(
 (0, s.filter)(
 ({ unitId: _0x5a9bf7 }) => !(0, t.isInternalEditorID)(_0x5a9bf7),
 ),
 (0, s.takeUntil)(this.dispose$),
 )
 .subscribe(({ type: _0x12ce1a, unitId: _0x368f18 }) => {
 _0x4c83ce(_0x368f18, _0x12ce1a);
 });
 }
 _initUnitPermissionChange() {
 let _0x211882 = async (_0x1dcc54, _0x28240e) => {
 let _0x21b918 =
 await this._collaborationSessionService["requireSession"](_0x1dcc54);
 if (_0x28240e === t.UniverInstanceType["UNIVER_SHEET"]) {
 let _0x8bb443 = this._injector["get"](r.SheetPermissionInitController);
 (await _0x8bb443.initWorkbookPermissionChange(_0x1dcc54),
 _0x21b918.event$["pipe"](
 (0, s.filter)(
 (_0xd94d58) =>
 _0xd94d58.eventID ===
 e.CollaborationEvent["UPDATE_PERMISSION_OBJ"],
 ),
 (0, s.takeUntil)(this.dispose$),
 ).subscribe((_0x30cade) => {
 let { objectId: _0x36f15f } = _0x30cade.data;
 _0x36f15f === _0x1dcc54
 ? _0x8bb443.initWorkbookPermissionChange(_0x1dcc54)
 : _0x8bb443.refreshPermission(_0x1dcc54, _0x36f15f);
 }));
 return;
 }
 (await this._refreshUnitPermission(_0x1dcc54, _0x28240e),
 _0x21b918.event$["pipe"](
 (0, s.filter)(
 (_0x5ad371) =>
 _0x5ad371.eventID ===
 e.CollaborationEvent["UPDATE_PERMISSION_OBJ"],
 ),
 (0, s.takeUntil)(this.dispose$),
 ).subscribe((_0x54d923) => {
 let { objectId: _0x1a675e } = _0x54d923.data;
 _0x1a675e === _0x1dcc54 &&
 this._refreshUnitPermission(_0x1dcc54, _0x28240e);
 }));
 };
 ct(this._univerInstanceService)
 .pipe(
 (0, s.filter)(
 ({ unitId: _0x67380d }) => !(0, t.isInternalEditorID)(_0x67380d),
 ),
 (0, s.takeUntil)(this.dispose$),
 )
 .subscribe(({ type: _0x3df5d5, unitId: _0xe51470 }) => {
 _0x211882(_0xe51470, _0x3df5d5);
 });
 }
 async _refreshUnitPermission(_0x250c02, _0x1b61d4) {
 let _0x17ab4e = lt(_0x1b61d4);
 if (_0x17ab4e == null) return;
 let _0x50154e = this._getUnitPermissionPoints(_0x250c02, _0x17ab4e);
 _0x50154e.length &&
 (
 await this._authzIoService["allowed"]({
 objectID: _0x250c02,
 objectType: _0x17ab4e,
 unitID: _0x250c02,
 actions: _0x50154e.map(({ action: _0xb69630 }) => _0xb69630),
 })
 ).forEach((_0x280947) => {
 let _0x4fac4c = _0x280947.action,
 _0xcc3181 = _0x280947.allowed;
 _0x4fac4c != null &&
 _0xcc3181 != null &&
 _0x50154e
 .filter((_0x28a3e5) => _0x28a3e5.action === _0x4fac4c)
 .forEach((_0x2d45bc) =>
 this._permissionService["updatePermissionPoint"](
 _0x2d45bc.id,
 _0xcc3181,
 ),
 );
 });
 }
 _getUnitPermissionPoints(_0x4598da, _0x4e267b) {
 let _0x46e759 = [];
 return (
 this._permissionService["getAllPermissionPoint"]().forEach(
 (_0x2adc6c, _0x5b6fcc) => {
 _0x2adc6c
 .subscribe((_0xfce53e) => {
 _0xfce53e.type === _0x4e267b &&
 "unitId" in _0xfce53e &&
 _0xfce53e.unitId === _0x4598da &&
 (!("objectId" in _0xfce53e) ||
 _0xfce53e.objectId === _0x4598da) &&
 _0x46e759.push({ id: _0x5b6fcc, action: _0xfce53e.subType });
 })
 .unsubscribe();
 },
 ),
 _0x46e759
 );
 }
 _updateUnitPermissionPoint(_0x4dbe3c, _0x425580, _0x5aa2b6, _0x49e8ab) {
 this._permissionService["getAllPermissionPoint"]().forEach(
 (_0xbb6c09, _0xed432b) => {
 let _0x9d9f86 = false;
 (_0xbb6c09
 .subscribe((_0x539333) => {
 _0x9d9f86 =
 _0x539333.type === _0x425580 &&
 _0x539333.subType === _0x5aa2b6 &&
 "unitId" in _0x539333 &&
 _0x539333.unitId === _0x4dbe3c &&
 (!("objectId" in _0x539333) || _0x539333.objectId === _0x4dbe3c);
 })
 .unsubscribe(),
 _0x9d9f86 &&
 this._permissionService["updatePermissionPoint"](
 _0xed432b,
 _0x49e8ab,
 ));
 },
 );
 }
};
X = y(
 [
 v(0, (0, t.Inject)(t.Injector)),
 v(1, t.IUniverInstanceService),
 v(2, t.IPermissionService),
 v(3, t.IAuthzIoService),
 v(4, (0, t.Inject)(V)),
 v(5, (0, t.Inject)(_)),
 ],
 X,
);
function ct(_0x1153ff) {
 return (0, i.merge)(
 ...[
 t.UniverInstanceType["UNIVER_SHEET"],
 t.UniverInstanceType["UNIVER_DOC"],
 t.UniverInstanceType["UNIVER_SLIDE"],
 t.UniverInstanceType["UNIVER_BOARD"],
 t.UniverInstanceType["UNIVER_BASE"],
 ].map((_0x38d01e) =>
 _0x1153ff
 .getTypeOfUnitAdded$(_0x38d01e)
 .pipe(
 (0, s.map)((_0x21ce04) => ({
 type: _0x38d01e,
 unitId: _0x21ce04.unit["getUnitId"](),
 })),
 ),
 ),
 );
}
function lt(_0x3fc811) {
 switch (_0x3fc811) {
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
 constructor(_0x26b4fd, _0x4292cb) {
 ((this._configService = _0x26b4fd), (this._httpService = _0x4292cb));
 }
 async getUnitOnRev(_0x551b02, _0x558236) {
 var _0x544a96;
 let {
 unitID: _0x5411f9,
 type: _0x153b06,
 revision: _0x5f02cd = 0,
 } = _0x558236,
 _0x493421 =
 this.getSnapshotAPIPath() +
 "/" +
 _0x153b06 +
 "/unit/" +
 _0x5411f9 +
 "/rev/" +
 _0x5f02cd,
 _0x33693f = (await this._httpService["get"](_0x493421)).body,
 _0x2d436e =
 (_0x544a96 = _0x33693f.snapshot) == null
 ? undefined
 : _0x544a96.workbook;
 if (_0x2d436e) {
 let _0x1138f6 = _0x2d436e == null ? undefined : _0x2d436e.originalMeta;
 ((_0x2d436e.originalMeta = e.textEncoder["encode"](
 (0, e.b64DecodeUnicode)(_0x1138f6),
 )),
 Object.entries(_0x2d436e.sheets).forEach(([, _0x190938]) => {
 let _0x484521 = _0x190938.originalMeta;
 _0x190938.originalMeta = e.textEncoder["encode"](
 (0, e.b64DecodeUnicode)(_0x484521),
 );
 }));
 }
 return _0x33693f;
 }
 async getSheetBlock(_0x21d03a, _0x597c0e) {
 let { unitID: _0x507467, type: _0x2ee6de, blockID: _0x3aab15 } = _0x597c0e,
 _0x2bef0f =
 this._getAPIPrefix() +
 "/" +
 _0x2ee6de +
 "/unit/" +
 _0x507467 +
 "/block/" +
 _0x3aab15;
 return (await this._httpService["get"](_0x2bef0f)).body;
 }
 async getDeserializedSheetBlock(_0x1ad107, _0x1799ce) {
 let { unitID: _0x15fb5c, type: _0x534085, blockID: _0x31a6e5 } = _0x1799ce,
 _0x5ee454 =
 this._getAPIPrefix() +
 "/block/" +
 _0x534085 +
 "/unit/" +
 _0x15fb5c +
 "/block/" +
 _0x31a6e5;
 return (await this._httpService["get"](_0x5ee454)).body;
 }
 async fetchMissingChangesets(_0x57221f, _0x5d478a) {
 let {
 unitID: _0x1c418f,
 type: _0x13ec2a,
 from: _0x2d5bd9,
 to: _0x17865e,
 } = _0x5d478a,
 _0x2e8cf0 =
 this._getAPIPrefix() +
 "/" +
 _0x13ec2a +
 "/unit/" +
 _0x1c418f +
 "/fetchmissing?from=" +
 _0x2d5bd9 +
 "&to=" +
 _0x17865e;
 return (await this._httpService["get"](_0x2e8cf0)).body;
 }
 getSnapshotAPIPath() {
 return (
 this._configService["getConfig"]("SNAPSHOT_URL_KEY") ??
 this._getAPIPrefix()
 );
 }
 _getAPIPrefix() {
 let _0x54ce04 = this._configService["getConfig"](m);
 return (
 (_0x54ce04 == null ? undefined : _0x54ce04.snapshotServerUrl) ??
 "/universer-api/snapshot"
 );
 }
 async getResourcesRequest(_0x1c5271, _0x159504) {
 let _0x69b09f =
 "/universer-api/snapshot/" +
 _0x159504.type +
 "/unit/" +
 _0x159504.unitID +
 "/resources";
 return (
 await this._httpService["get"](_0x69b09f, {
 params: { resourceId: JSON.stringify(_0x159504.resourceIDs) },
 })
 ).body;
 }
 saveSnapshot() {
 throw Error(
 "This\x20method\x20should\x20not\x20be\x20called\x20on\x20the\x20client\x20side!",
 );
 }
 updateSnapshot() {
 throw Error("This method should not be called on the client side!");
 }
 saveSheetBlock() {
 throw Error("This method should not be called on the client side!");
 }
 saveChangeset() {
 throw Error(
 "This\x20method\x20should\x20not\x20be\x20called\x20on\x20the\x20client\x20side!",
 );
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
 constructor(
 _0x47621e,
 _0x28e114,
 _0x5b1669,
 _0x413ac8,
 _0x1dbf85,
 _0x5388c6,
 ) {
 (super(_0x47621e, _0x28e114, _0x5b1669, _0x413ac8),
 (this._transformService = _0x1dbf85),
 (this._logService = _0x5388c6));
 }
 transformUndoRedo(_0x566d18, _0x3afc63) {
 let _0xbaa828 = this._getUndoStack(_0x566d18);
 if (_0xbaa828)
 try {
 let _0x3c2439 = this._transformStack(_0xbaa828, _0x3afc63);
 this._substituteUndoStack(_0x566d18, _0x3c2439);
 } catch (_0x5841db) {
 (this._logService["error"]("[CollaborationUndoRedoService]", _0x5841db),
 this._clearUndo(_0x566d18));
 }
 let _0x3e12dd = this._getRedoStack(_0x566d18);
 if (_0x3e12dd)
 try {
 let _0x2aa379 = this._transformStack(_0x3e12dd, _0x3afc63);
 this._substituteRedoStack(_0x566d18, _0x2aa379);
 } catch (_0x33cc75) {
 (this._logService["error"](_0x33cc75), this._clearRedo(_0x566d18));
 }
 }
 _clearUndo(_0x16aed2) {
 let _0x5c4dc8 = this._getUndoStack(_0x16aed2);
 _0x5c4dc8 && ((_0x5c4dc8.length = 0), this._updateStatus());
 }
 _clearRedo(_0x57662b) {
 let _0x245580 = this._getRedoStack(_0x57662b);
 _0x245580 && ((_0x245580.length = 0), this._updateStatus());
 }
 _substituteUndoStack(_0x253c98, _0x56f9f8) {
 (this._undoStacks["set"](_0x253c98, _0x56f9f8), this._updateStatus());
 }
 _substituteRedoStack(_0x22b5e7, _0x446766) {
 (this._redoStacks["set"](_0x22b5e7, _0x446766), this._updateStatus());
 }
 _transformStack(_0x1680d1, _0x4dae40) {
 let _0x3b83db = [],
 _0x180b76 = _0x4dae40,
 _0x424ac8 = _0x4dae40;
 for (let _0x37bf00 = _0x1680d1.length - 1; _0x37bf00 >= 0; _0x37bf00--) {
 let {
 unitID: _0x4ae783,
 undoMutations: _0x52516a,
 redoMutations: _0x5ab0c3,
 } = _0x1680d1[_0x37bf00],
 _0x356718 = this._transformService["transformMutationsWithChangeset"](
 _0x180b76,
 _0x52516a,
 ),
 _0x3816fa = this._transformService["transformMutationsWithChangeset"](
 _0x424ac8,
 _0x5ab0c3,
 );
 if (
 (0, e.isTransformMutationsWithChangesetFailure)(_0x356718) ||
 (0, e.isTransformMutationsWithChangesetFailure)(_0x3816fa)
 ) {
 this._logService["error"](
 "[CollaborationUndoRedoService]",
 "transformStack failed!",
 _0x356718,
 _0x3816fa,
 );
 break;
 }
 ((_0x180b76 = _0x356718.c1Prime),
 (_0x424ac8 = _0x3816fa.c1Prime),
 _0x3b83db.push({
 unitID: _0x4ae783,
 undoMutations: _0x356718.m2Prime,
 redoMutations: _0x3816fa.m2Prime,
 }));
 }
 return _0x3b83db.reverse();
 }
};
Q = y(
 [
 v(0, t.IUniverInstanceService),
 v(1, t.ICommandService),
 v(2, t.IContextService),
 v(3, t.IConfigService),
 v(4, e.ITransformService),
 v(5, t.ILogService),
 ],
 Q,
);
let $ = class extends t.Plug in {
 constructor(_0x389347 = ee, _0x8acb9, _0x8659ce, _0x2771d2) {
 (super(),
 (this._config = _0x389347),
 (this._logService = _0x8acb9),
 (this._injector = _0x8659ce),
 (this._configService = _0x2771d2));
 let { ..._0x43c338 } = (0, t.merge)({}, ee, this._config);
 if (!_0x43c338.socketService)
 throw Error(
 "[UniverCollaborationClientPlugin]: you must provide a socketService implementation in config!",
 );
 ((this._config = _0x43c338),
 this._configService["setConfig"](m, _0x43c338));
 }
 onStarting() {
 (this._registerDependencies(), this._initDependencies());
 }
 _registerDependencies() {
 var _0x456ab1, _0x2b56b1;
 this._injector["has"](t.IUndoRedoService) &&
 this._logService["error"](
 "[UniverCollaborationClientPlugin]",
 'you should override "IUndoRedoService" provided in "core" package!',
 );
 let _0x536500 = (0, t.mergeOverrideWithDependencies)(
 [
 [t.IUndoRedoService, { useClass: Q }],
 [Xe, { useValue: Ze() }],
 [V],
 [b],
 [S],
 [W],
 [K],
 [ae],
 [X],
 [_],
 [q],
 [qe, { useClass: this._config["socketService"] }],
 [e.ISnapshotServerService, { useClass: Z }],
 [t.IAuthzIoService, { useClass: G }],
 [t.IImageIoService, { useClass: J }],
 [nt, { useClass: U }],
 [t.IMentionIOService, { useClass: Y }],
 [H],
 [tt],
 ],
 (_0x456ab1 = this._config) == null ? undefined : _0x456ab1.override,
 );
 if (!(
 (_0x2b56b1 = this._config) != null &&
 _0x2b56b1.enableSingleActiveInstanceLock
 )) {
 let _0x3ea28b = _0x536500.findIndex(([_0x594b33]) => _0x594b33 === C);
 _0x3ea28b !== -1 && _0x536500.splice(_0x3ea28b, 1);
 }
 (0, t.registerDependencies)(this._injector, _0x536500);
 }
 _initDependencies() {
 var _0x128e00, _0x6e87b4;
 if (
 (this._injector["get"](l.HTTPService).registerHTTPInterceptor({
 priority: 20,
 interceptor: (0, l.ThresholdInterceptorFactory)({ maxParallel: 6 }),
 }),
 !((_0x128e00 = this._config) != null && _0x128e00.enableOfflineEditing))
 ) {
 var _0x20b9dd;
 (_0x20b9dd = this._injector["get"](x, t.Quantity["OPTIONAL"])) == null ||
 _0x20b9dd.disableLocalCache();
 }
 ((_0x6e87b4 = this._config) != null &&
 _0x6e87b4.enableAuthServer &&
 (0, t.touchDependencies)(this._injector, [[W]]),
 (0, t.touchDependencies)(this._injector, [[K], [H], [X]]));
 }
};
(g($, "pluginName", "UNIVER_COLLABORATION_CLIENT_PLUGIN"),
 g($, "packageName", $e),
 g($, "version", et),
 ($ = y(
 [
 (0, t.DependentOn)(
 u.UniverLicensePlugin,
 l.UniverNetworkPlugin,
 e.UniverCollaborationPlugin,
 ),
 v(1, t.ILogService),
 v(2, (0, t.Inject)(t.Injector)),
 v(3, t.IConfigService),
 ],
 $,
 )),
 Object.defineProperty(exports, "AuthzIoHttpService", {
 enumerable: true,
 get: function () {
 return G;
 },
 }),
 Object.defineProperty(exports, "AwaitingState", {
 enumerable: true,
 get: function () {
 return k;
 },
 }),
 Object.defineProperty(exports, "AwaitingWithPendingState", {
 enumerable: true,
 get: function () {
 return A;
 },
 }),
 Object.defineProperty(exports, "BaseCollaborationEntity", {
 enumerable: true,
 get: function () {
 return I;
 },
 }),
 Object.defineProperty(exports, "BoardCollaborationEntity", {
 enumerable: true,
 get: function () {
 return z;
 },
 }),
 (exports.COLLABORATION_CLIENT_PLUGIN_CONFIG_KEY = m),
 Object.defineProperty(exports, "CollaborationAttachmentIoService", {
 enumerable: true,
 get: function () {
 return U;
 },
 }),
 Object.defineProperty(exports, "CollaborationController", {
 enumerable: true,
 get: function () {
 return H;
 },
 }),
 Object.defineProperty(exports, "CollaborationEntity", {
 enumerable: true,
 get: function () {
 return P;
 },
 }),
 Object.defineProperty(exports, "CollaborationImageIoService", {
 enumerable: true,
 get: function () {
 return J;
 },
 }),
 Object.defineProperty(exports, "CollaborationSession", {
 enumerable: true,
 get: function () {
 return ve;
 },
 }),
 Object.defineProperty(exports, "CollaborationSessionService", {
 enumerable: true,
 get: function () {
 return V;
 },
 }),
 Object.defineProperty(exports, "CollaborationSocketService", {
 enumerable: true,
 get: function () {
 return Ye;
 },
 }),
 (exports.CollaborationStatus = Be),
 (exports.CollaborationUIEventId = ie),
 (exports.CollaborationUIEventService = _),
 Object.defineProperty(exports, "CollaborativeUndoRedoService", {
 enumerable: true,
 get: function () {
 return Q;
 },
 }),
 (exports.CommentService = ae),
 Object.defineProperty(exports, "ConflictState", {
 enumerable: true,
 get: function () {
 return j;
 },
 }),
 (exports.DEFAULT_COLLAB_WEB_SOCKET_URL =
 "ws://127.0.0.1:8000/universer-api/comb/connect"),
 (exports.DEFAULT_REMOTE_UNISCRIPT_EXECUTION_ENDPOINT =
 "/universer-api/uniscript"),
 (exports.DEFAULT_WS_SESSION_TICKET_URL =
 "/universer-api/user/session-ticket"),
 Object.defineProperty(exports, "DataLoaderService", {
 enumerable: true,
 get: function () {
 return q;
 },
 }),
 Object.defineProperty(exports, "DocCollaborationEntity", {
 enumerable: true,
 get: function () {
 return F;
 },
 }),
 Object.defineProperty(exports, "FetchingMissState", {
 enumerable: true,
 get: function () {
 return N;
 },
 }),
 (exports.HEARTBEAT_INTERVAL_KEY = "HEARTBEAT_INTERVAL"),
 (exports.HEARTBEAT_TIMEOUT_KEY = "HEARTBEAT_TIMEOUT"),
 (exports.IAttachmentIoService = nt),
 (exports.ICollaborationClientAdapterService = Xe),
 (exports.ICollaborationSocketService = qe),
 (exports.ILocalCacheService = x),
 (exports.INetworkConditionService = We),
 (exports.ISingleActiveUnitService = C),
 (exports.LOCAL_CACHE_INTERVAL = 1000),
 (exports.LOCAL_CACHE_INTERVAL_KEY = "LOCAL_CACHE_INTERVAL"),
 Object.defineProperty(exports, "MemberService", {
 enumerable: true,
 get: function () {
 return b;
 },
 }),
 Object.defineProperty(exports, "MentionIoHttpService", {
 enumerable: true,
 get: function () {
 return Y;
 },
 }),
 Object.defineProperty(exports, "OfflineState", {
 enumerable: true,
 get: function () {
 return M;
 },
 }),
 Object.defineProperty(exports, "PdfCollaborationEntity", {
 enumerable: true,
 get: function () {
 return B;
 },
 }),
 Object.defineProperty(exports, "PendingState", {
 enumerable: true,
 get: function () {
 return O;
 },
 }),
 (exports.REMOTE_UNISCRIPT_EXECUTION_ENDPOINT_KEY =
 "REMOTE_UNISCRIPT_EXECUTION_ENDPOINT"),
 (exports.RETRY_CONNECTING_MAX_COUNT_KEY = "RETRY_CONNECTING_MAX_COUNT"),
 (exports.SessionStatus = ge),
 Object.defineProperty(exports, "SheetCollaborationEntity", {
 enumerable: true,
 get: function () {
 return L;
 },
 }),
 Object.defineProperty(exports, "SheetTransformSelectionsService", {
 enumerable: true,
 get: function () {
 return S;
 },
 }),
 Object.defineProperty(exports, "SlideCollaborationEntity", {
 enumerable: true,
 get: function () {
 return R;
 },
 }),
 Object.defineProperty(exports, "SnapshotServerOverHTTPService", {
 enumerable: true,
 get: function () {
 return Z;
 },
 }),
 Object.defineProperty(exports, "SyncedState", {
 enumerable: true,
 get: function () {
 return D;
 },
 }),
 (exports.UnitStatus = xe),
 Object.defineProperty(exports, "UniverCollaborationClientPlugin", {
 enumerable: true,
 get: function () {
 return $;
 },
 }),
 (exports.createUniverCollaborationAdapter = Ze),
 (exports.deserializeToCombResponse = Ge),
 (exports.getLocalCacheKey = ye),
 (exports.serializeCombRequest = Ke));
