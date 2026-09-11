Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/collaboration"),
 t = require("@univerjs-pro/collaboration-client"),
 n = require("@univerjs/core"),
 r = require("@univerjs/sheets"),
 i = require("rxjs"),
 a = require("rxjs/operators"),
 o = require("@univerjs-pro/license"),
 s = require("@univerjs/sheets-ui"),
 c = require("@univerjs/ui"),
 l = require("@univerjs/design"),
 u = require("@univerjs/icons"),
 d = require("react"),
 f = require("react/jsx-runtime");
function p(_0x156d1f) {
 "@babel/helpers - typeof";
 return (
 (p =
 typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
 ? function (_0xecf80d) {
 return typeof _0xecf80d;
 }
 : function (_0x4221e3) {
 return _0x4221e3 &&
 typeof Symbol == "function" &&
 _0x4221e3.constructor === Symbol &&
 _0x4221e3 !== Symbol.prototype
 ? "symbol"
 : typeof _0x4221e3;
 }),
 p(_0x156d1f)
 );
}
function m(_0x3629b4, _0xe73f3e) {
 if (p(_0x3629b4) != "object" || !_0x3629b4) return _0x3629b4;
 var _0x2fac88 = _0x3629b4[Symbol.toPrimitive];
 if (_0x2fac88 !== undefined) {
 var _0x32a3a6 = _0x2fac88.call(_0x3629b4, _0xe73f3e || "default");
 if (p(_0x32a3a6) != "object") return _0x32a3a6;
 throw TypeError(
 "@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.",
 );
 }
 return (_0xe73f3e === "string" ? String : Number)(_0x3629b4);
}
function h(_0x3e4a39) {
 var _0x34125c = m(_0x3e4a39, "string");
 return p(_0x34125c) == "symbol" ? _0x34125c : _0x34125c + "";
}
function g(_0x217c14, _0x3f3054, _0x3736f9) {
 return (
 (_0x3f3054 = h(_0x3f3054)) in _0x217c14
 ? Object.defineProperty(_0x217c14, _0x3f3054, {
 value: _0x3736f9,
 enumerable: true,
 configurable: true,
 writable: true,
 })
 : (_0x217c14[_0x3f3054] = _0x3736f9),
 _0x217c14
 );
}
var _ = class extends n.Disposable {
 constructor(..._0x5d9160) {
 (super(..._0x5d9160),
 g(this, "_sharedOperations", new Set()),
 g(this, "_reporters", new Set()));
 }
 registerSharedOperation(_0xd20dd) {
 return (
 this._sharedOperations["add"](_0xd20dd),
 (0, n.toDisposable)(() => this._sharedOperations["delete"](_0xd20dd))
 );
 }
 registerInitialStateReporter(_0x20dda4) {
 return (
 this._reporters["add"](_0x20dda4),
 (0, n.toDisposable)(() => this._reporters["delete"](_0x20dda4))
 );
 }
 shouldShareOperation(_0x5af8bf) {
 return this._sharedOperations["has"](_0x5af8bf);
 }
 getInitialStates(_0x559e3f) {
 return Array.from(this._reporters).map((_0x3f3cd4) => _0x3f3cd4(_0x559e3f));
 }
};
function v(_0x5a62a7, _0x4ddbee) {
 return function (_0x1ef28c, _0x1cf3bc) {
 _0x4ddbee(_0x1ef28c, _0x1cf3bc, _0x5a62a7);
 };
}
function y(_0x3cbb24, _0x5d1579, _0x10e73b, _0x396672) {
 var _0x2abaea = arguments.length,
 _0x4a999c =
 _0x2abaea < 3
 ? _0x5d1579
 : _0x396672 === null
 ? (_0x396672 = Object.getOwnPropertyDescriptor(_0x5d1579, _0x10e73b))
 : _0x396672,
 _0x294303;
 if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
 _0x4a999c = Reflect.decorate(_0x3cbb24, _0x5d1579, _0x10e73b, _0x396672);
 else {
 for (var _0x4c0668 = _0x3cbb24.length - 1; _0x4c0668 >= 0; _0x4c0668--)
 (_0x294303 = _0x3cbb24[_0x4c0668]) &&
 (_0x4a999c =
 (_0x2abaea < 3
 ? _0x294303(_0x4a999c)
 : _0x2abaea > 3
 ? _0x294303(_0x5d1579, _0x10e73b, _0x4a999c)
 : _0x294303(_0x5d1579, _0x10e73b)) || _0x4a999c);
 }
 return (
 _0x2abaea > 3 &&
 _0x4a999c &&
 Object.defineProperty(_0x5d1579, _0x10e73b, _0x4a999c),
 _0x4a999c
 );
}
let b = class extends n.RxDisposable {
 constructor(_0x39a299, _0x2350ed, _0x4aca26) {
 (super(),
 (this._univerInstanceService = _0x39a299),
 (this._injector = _0x2350ed),
 (this._collabSessionService = _0x4aca26),
 g(this, "_entities", new Map()),
 this._init());
 }
 async getLiveShareCoordinator(_0x6e7949) {
 return (
 this._entities["has"](_0x6e7949) ||
 (await this._startLiveShareCoordinator(_0x6e7949)),
 this._entities["get"](_0x6e7949)
 );
 }
 getLiveShareCoordinatorSync(_0x1b31b0) {
 return this._entities["get"](_0x1b31b0) ?? null;
 }
 _init() {
 (this._univerInstanceService["getTypeOfUnitAdded$"](
 n.UniverInstanceType["UNIVER_SHEET"],
 )
 .pipe((0, a.takeUntil)(this.dispose$))
 .subscribe(async (_0x5e17ea) => {
 let _0x275201 = _0x5e17ea.unit["getUnitId"]();
 this._entities["has"](_0x275201) ||
 this._startLiveShareCoordinator(_0x275201);
 }),
 this._univerInstanceService["getTypeOfUnitDisposed$"](
 n.UniverInstanceType["UNIVER_SHEET"],
 )
 .pipe((0, a.takeUntil)(this.dispose$))
 .subscribe((_0x4bff7d) => {
 let _0x42a1c5 = _0x4bff7d.getUnitId(),
 _0x28703c = this._entities["get"](_0x42a1c5);
 _0x28703c == null || _0x28703c.dispose();
 }));
 }
 async _startLiveShareCoordinator(_0x4d96d1) {
 let _0x1539c3 =
 await this._collabSessionService["requireSession"](_0x4d96d1),
 _0x11ceec = this._injector["createInstance"](S, _0x4d96d1, _0x1539c3);
 return (
 _0x11ceec.init(),
 this._entities["set"](_0x4d96d1, _0x11ceec),
 _0x11ceec
 );
 }
};
b = y(
 [
 v(0, n.IUniverInstanceService),
 v(1, (0, n.Inject)(n.Injector)),
 v(2, (0, n.Inject)(t.CollaborationSessionService)),
 ],
 b,
);
let x = (function (_0x591385) {
 return (
 (_0x591385.OFFLINE = "offline"),
 (_0x591385.IDLE = "idle"),
 (_0x591385.FOLLOWING = "following"),
 (_0x591385.NOT_FOLLOWING = "not-following"),
 (_0x591385.PRESENTING = "presenting"),
 _0x591385
 );
 })({}),
 S = class extends n.RxDisposable {
 get _status() {
 return this._status$["getValue"]();
 }
 constructor(_0x276580, _0x589f14, _0x5074b2, _0xb5e5fe, _0x589406) {
 (super(),
 (this._unitID = _0x276580),
 (this._collabSession = _0x589f14),
 (this._configService = _0x5074b2),
 (this._liveShareService = _0xb5e5fe),
 (this._commandService = _0x589406),
 g(this, "_status$", new i["BehaviorSubject"]("idle")),
 g(this, "status$", this._status$["asObservable"]()),
 g(this, "_init", false),
 g(this, "_commandDisposable", null),
 g(this, "_presenter", null));
 }
 dispose() {
 var _0x3f5809;
 ((_0x3f5809 = this._commandDisposable) == null || _0x3f5809.dispose(),
 this._status$["next"]("idle"),
 this._status$["complete"]());
 }
 getStatus() {
 return this._status;
 }
 init() {
 this._init ||
 ((this._init = true),
 this._collabSession["sessionStatus$"]
 .pipe((0, a.takeUntil)(this.dispose$))
 .subscribe((_0x544c69) => {
 switch (_0x544c69) {
 case t.SessionStatus["OFFLINE"]:
 this._handleOffline();
 break;
 case t.SessionStatus["ONLINE"]:
 this._handleOnline();
 break;
 default:
 }
 }),
 this._collabSession["event$"]
 .pipe((0, a.takeUntil)(this.dispose$))
 .subscribe((_0xc53182) => {
 let { eventID: _0x2a355c } = _0xc53182;
 switch (_0x2a355c) {
 case e.CollaborationEvent["LIVESHARE_NEW_HOST"]:
 this._handleNewHost(_0xc53182);
 break;
 case e.CollaborationEvent["LIVESHARE_OPERATION"]:
 this._handleOperation(_0xc53182);
 break;
 case e.CollaborationEvent["LIVESHARE_TERMINATE"]:
 this._handleTerminate();
 break;
 case e.CollaborationEvent["NEW_CHANGESETS"]:
 this._handleNewChangeSets(_0xc53182);
 break;
 default:
 }
 }));
 }
 tryStartPresenting() {
 this._collabSession["send"](
 {
 eventID: e.CollaborationEvent["LIVESHARE_REQUEST_HOST"],
 data: {
 unitID: this._unitID,
 userID: this._collabSession["getMemberID"](),
 },
 },
 this._unitID,
 );
 }
 stopPresenting() {
 this._status === "presenting" &&
 (this._status$["next"]("idle"),
 this._collabSession["send"](
 {
 eventID: e.CollaborationEvent["LIVESHARE_TERMINATE"],
 data: { unitID: this._unitID },
 },
 this._unitID,
 ));
 }
 startFollowing() {
 this._status === "not-following" &&
 (this._status$["next"]("following"), this._startFollowing());
 }
 stopFollowing() {
 this._status === "following" && this._stopFollowing();
 }
 _handleNewHost(_0x20838d) {
 let { presenter: _0x2e10d7 } = _0x20838d.data,
 _0x3cdfe = this._collabSession["getMemberID"]();
 ((this._presenter = _0x2e10d7),
 _0x2e10d7 === _0x3cdfe
 ? (this._stopFollowing(), this._startPresenting())
 : this._status !== "not-following" &&
 (this._stopPresenting(), this._startFollowing()));
 }
 _fetchOperations() {
 let _0x2bc468 = {
 eventID: e.CollaborationEvent["LIVESHARE_FETCH_OPERATIONS"],
 };
 this._collabSession["send"](_0x2bc468, this._unitID);
 }
 _handleTerminate() {
 ((this._presenter = null),
 this._status !== "presenting" && this._beIdle());
 }
 _handleNewChangeSets(_0x2176aa) {
 if (
 this._status === "following" &&
 this._presenter === _0x2176aa.data["memberID"]
 ) {
 let _0x1e8a9f = (0, e.parseProtocolChangeset)(_0x2176aa.data)
 .mutations["reverse"]()
 .find((_0x2e4d9b) => _0x2e4d9b.id === r.InsertSheetMutation["id"]);
 if (_0x1e8a9f) {
 let _0x3845af = _0x1e8a9f.params["unitId"],
 _0x78a468 = _0x1e8a9f.params["sheet"].id;
 setTimeout(() => {
 this._commandService["executeCommand"](
 r.SetWorksheetActiveOperation["id"],
 { unitId: _0x3845af, subUnitId: _0x78a468 },
 { fromCollab: true },
 );
 });
 }
 }
 }
 _startPresenting() {
 var _0x1c4f15;
 ((_0x1c4f15 = this._commandDisposable) == null || _0x1c4f15.dispose(),
 this._status$["next"]("presenting"));
 let _0x5cdf67 = new Map(),
 _0x53463a = (this._commandDisposable = new n["DisposableCollection"]());
 (_0x53463a.add(
 (0, n.toDisposable)(() => {
 (_0x5cdf67.forEach(
 ({ subject: _0x5dda2c, subscription: _0x4a4788 }) => {
 (_0x4a4788.unsubscribe(), _0x5dda2c.complete());
 },
 ),
 _0x5cdf67.clear());
 }),
 ),
 _0x53463a.add(
 this._commandService["onCommandExecuted"]((_0x4fb81e) => {
 if (
 _0x4fb81e.type !== n.CommandType["OPERATION"] ||
 !this._liveShareService["shouldShareOperation"](_0x4fb81e.id)
 )
 return;
 let { id: _0x58e7e0 } = _0x4fb81e,
 _0x1b97df;
 if (_0x5cdf67.has(_0x58e7e0))
 _0x1b97df = _0x5cdf67.get(_0x58e7e0).subject;
 else {
 _0x1b97df = new i.Subject();
 let _0x513bf2 = _0x1b97df
 .pipe(
 (0, a.throttleTime)(
 this._configService["getConfig"](
 "SAME_OPERATION_SHARE_INTERVAL",
 ) ?? 200,
 undefined,
 { trailing: true, leading: true },
 ),
 )
 .subscribe((_0x20d1ea) => {
 this._collabSession["send"](
 {
 eventID: e.CollaborationEvent["LIVESHARE_OPERATION"],
 data: {
 unitID: this._unitID,
 operations: {
 [_0x20d1ea.id]: {
 id: _0x20d1ea.id,
 params: JSON.stringify(_0x20d1ea.params),
 },
 },
 },
 },
 this._unitID,
 );
 });
 _0x5cdf67.set(_0x58e7e0, {
 subject: _0x1b97df,
 subscription: _0x513bf2,
 });
 }
 _0x1b97df.next(_0x4fb81e);
 }),
 ),
 this._liveShareService["getInitialStates"](this._unitID).forEach(
 (_0x13f231) =>
 this._collabSession["send"](
 {
 eventID: e.CollaborationEvent["LIVESHARE_OPERATION"],
 data: {
 unitID: this._unitID,
 operations: {
 [_0x13f231.id]: {
 id: _0x13f231.id,
 params: JSON.stringify(_0x13f231.params),
 },
 },
 },
 },
 this._unitID,
 ),
 ));
 }
 _stopPresenting() {
 var _0x2d77c3;
 (this._status$["next"]("idle"),
 (_0x2d77c3 = this._commandDisposable) == null || _0x2d77c3.dispose(),
 (this._commandDisposable = null));
 }
 _startFollowing() {
 var _0x11672a;
 ((_0x11672a = this._commandDisposable) == null || _0x11672a.dispose(),
 this._status$["next"]("following"));
 }
 _beIdle() {
 var _0x15d68a;
 (this._status$["next"]("idle"),
 (_0x15d68a = this._commandDisposable) == null || _0x15d68a.dispose(),
 (this._commandDisposable = null));
 }
 _stopFollowing() {
 var _0x5c5f34;
 (this._status$["next"]("not-following"),
 (_0x5c5f34 = this._commandDisposable) == null || _0x5c5f34.dispose());
 }
 _handleOperation(_0x39be7e) {
 if (
 ["presenting", "not-following", "offline"].includes(this._status) ||
 !_0x39be7e.data["presenter"] ||
 _0x39be7e.data["presenter"] === this._collabSession["getMemberID"]()
 )
 return;
 this._status === "idle" && this._startFollowing();
 let _0x17da3c = _0x39be7e.data["operations"];
 Object.values(_0x17da3c).forEach((_0x235042) => {
 this._commandService["executeCommand"](
 _0x235042.id,
 _0x235042.params ? JSON.parse(_0x235042.params) : null,
 { fromCollab: true },
 );
 });
 }
 _handleOffline() {
 var _0x34f986;
 (this._status$["next"]("offline"),
 (_0x34f986 = this._commandDisposable) == null || _0x34f986.dispose());
 }
 _handleOnline() {
 (this._status$["next"]("idle"), this._fetchOperations());
 }
 };
S = y(
 [v(2, n.IConfigService), v(3, (0, n.Inject)(_)), v(4, n.ICommandService)],
 S,
);
var C = "@univerjs-pro/live-share",
 w = "1.0.0-insiders.20260907-70fc579";
const T = {};
let E = class extends n.Disposable {
 constructor(_0x4a8a83) {
 (super(), (this._liveShareService = _0x4a8a83), this._init());
 }
 _init() {
 [
 s.SetZoomRatioOperation["id"],
 s.SetScrollOperation["id"],
 r.SetWorksheetActiveOperation["id"],
 ].forEach((_0x359777) => {
 this.disposeWithMe(
 this._liveShareService["registerSharedOperation"](_0x359777),
 );
 });
 }
};
E = y([v(0, (0, n.Inject)(_))], E);
function D() {
 let _0x420929 = (0, c.useDependency)(b),
 _0x39db8e = (0, c.useDependency)(n.IUniverInstanceService),
 _0x25a945 = (0, c.useObservable)(
 () =>
 _0x39db8e.getCurrentTypeOfUnit$(n.UniverInstanceType["UNIVER_SHEET"]),
 undefined,
 false,
 [],
 ),
 _0xc63ba8 = (0, c.useObservable)(
 (0, d.useMemo)(
 () =>
 _0x25a945
 ? (0, i.defer)(() =>
 (0, i.from)(
 _0x420929.getLiveShareCoordinator(_0x25a945.getUnitId()),
 ),
 )
 : (0, i.of)(null),
 [_0x25a945, _0x420929],
 ),
 null,
 ),
 _0x17c476 = (0, c.useObservable)(
 _0xc63ba8 ? () => _0xc63ba8.status$ : null,
 "idle",
 false,
 [_0xc63ba8],
 );
 return _0xc63ba8
 ? (0, f.jsx)(l.Dropdown, {
 align: "end",
 disabled: _0x17c476 === "offline",
 className:
 "univer-box-border univer-min-w-60 univer-bg-gray-900 univer-px-4 univer-py-3 univer-text-gray-900 dark:!univer-bg-gray-0 dark:!univer-text-gray-0",
 overlay: (0, f.jsx)(O, { status: _0x17c476, coordinator: _0xc63ba8 }),
 children: (0, f.jsx)(l.Button, {
 size: "icon",
 variant: "text",
 disabled: _0x17c476 === "offline",
 type: "button",
 children: (0, f.jsx)(u.LiveShareIcon, {}),
 }),
 })
 : null;
}
function O(_0x4bcf98) {
 let { status: _0x35473f, coordinator: _0x4e5fff } = _0x4bcf98;
 switch (_0x35473f) {
 case "idle":
 return (0, f.jsx)(k, { coordinator: _0x4e5fff });
 case "following":
 return (0, f.jsx)(A, { coordinator: _0x4e5fff });
 case "not-following":
 return (0, f.jsx)(j, { coordinator: _0x4e5fff });
 case "offline":
 return (0, f.jsx)(N, {});
 case "presenting":
 return (0, f.jsx)(M, { coordinator: _0x4e5fff });
 default:
 return null;
 }
}
function k(_0x243276) {
 let { coordinator: _0x424ed1 } = _0x243276;
 return (0, f.jsxs)(f.Fragment, {
 children: [
 (0, f.jsx)("div", {
 className: "univer-mb-3\x20univer-w-full\x20univer-text-sm",
 children: "Present\x20this\x20document",
 }),
 (0, f.jsx)(l.Button, {
 onClick: () => _0x424ed1.tryStartPresenting(),
 children: "Start",
 }),
 ],
 });
}
function A(_0x2d2b9b) {
 let { coordinator: _0xa1fb81 } = _0x2d2b9b;
 return (0, f.jsxs)(f.Fragment, {
 children: [
 (0, f.jsx)("div", {
 className: "univer-mb-3 univer-w-full univer-text-sm",
 children: "You're following the presenter",
 }),
 (0, f.jsx)(l.Button, {
 onClick: () => _0xa1fb81.stopFollowing(),
 children: "Stop following",
 }),
 ],
 });
}
function j(_0x5848cc) {
 let { coordinator: _0x5cbdeb } = _0x5848cc;
 return (0, f.jsxs)(f.Fragment, {
 children: [
 (0, f.jsx)("div", {
 className: "univer-mb-3\x20univer-w-full\x20univer-text-sm",
 children: "You're not following the presenter",
 }),
 (0, f.jsx)(l.Button, {
 variant: "text",
 onClick: () => _0x5cbdeb.startFollowing(),
 children: "Start following",
 }),
 ],
 });
}
function M(_0x306dbb) {
 let { coordinator: _0x30a2ce } = _0x306dbb;
 return (0, f.jsxs)(f.Fragment, {
 children: [
 (0, f.jsx)("div", {
 className: "univer-mb-3 univer-w-full univer-text-sm",
 children: "You're presenting the document",
 }),
 (0, f.jsx)(l.Button, {
 variant: "default",
 onClick: () => _0x30a2ce.stopPresenting(),
 children: "Stop presenting",
 }),
 ],
 });
}
function N() {
 return (0, f.jsx)(f.Fragment, { children: "You'are offline." });
}
let P = class extends n.Disposable {
 constructor(_0x3d8356, _0x55bb4c) {
 (super(),
 (this._injector = _0x3d8356),
 (this._uiPartsService = _0x55bb4c),
 this._mountLiveShare());
 }
 _mountLiveShare() {
 this.disposeWithMe(
 this._uiPartsService["registerComponent"](
 c.BuiltInUIPart["HEADER_MENU"],
 () => (0, c.connectInjector)(D, this._injector),
 ),
 );
 }
};
P = y([v(0, (0, n.Inject)(n.Injector)), v(1, c.IUIPartsService)], P);
let F = class extends n.Plug in {
 constructor(_0x5cd02d = T, _0x14e972, _0x907efe) {
 (super(),
 (this._config = _0x5cd02d),
 (this._injector = _0x14e972),
 (this._configService = _0x907efe));
 let { ..._0x5b0363 } = (0, n.merge)({}, T, this._config);
 this._configService["setConfig"]("live-share.config", _0x5b0363);
 }
 onStarting() {
 ((0, n.registerDependencies)(
 this._injector,
 (0, n.mergeOverrideWithDependencies)(
 [[_], [b], [E], [P]],
 this._config["override"],
 ),
 ),
 (0, n.touchDependencies)(this._injector, [[E]]));
 }
 onRendered() {
 (0, n.touchDependencies)(this._injector, [[P]]);
 }
};
(g(F, "type", n.UniverInstanceType["UNIVER_UNKNOWN"]),
 g(F, "pluginName", "UNIVER_LIVE_SHARE_PLUGIN"),
 g(F, "packageName", C),
 g(F, "version", w),
 (F = y(
 [
 (0, n.DependentOn)(
 o.UniverLicensePlugin,
 t.UniverCollaborationClientPlugin,
 ),
 v(1, (0, n.Inject)(n.Injector)),
 v(2, n.IConfigService),
 ],
 F,
 )),
 Object.defineProperty(exports, "LiveShareController", {
 enumerable: true,
 get: function () {
 return b;
 },
 }),
 (exports.LiveShareStatus = x),
 Object.defineProperty(exports, "UniverLiveSharePlugin", {
 enumerable: true,
 get: function () {
 return F;
 },
 }));
