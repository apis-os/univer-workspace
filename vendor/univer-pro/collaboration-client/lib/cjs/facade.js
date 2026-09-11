Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/collaboration-client"),
  t = require("@univerjs/core/facade"),
  n = require("@univerjs/core"),
  r = require("@univerjs-pro/collaboration"),
  i = require("rxjs");
var a = class extends t.FEnum {
  get CollaborationStatus() {
    return e.CollaborationStatus;
  }
};
t.FEnum["extend"](a);
var o = class extends t.FEventName {
  get CollaborationStatusChanged() {
    return "CollaborationStatusChanged";
  }
};
t.FEventName["extend"](o);
function s(_0x419dd9, _0x5a8a95) {
  return function (_0x13a33a, _0x1b87d6) {
    _0x5a8a95(_0x13a33a, _0x1b87d6, _0x419dd9);
  };
}
function c(_0x51089b, _0x36b774, _0x3251e0, _0x13450c) {
  var _0x5bbb9a = arguments.length,
    _0x10ea36 =
      _0x5bbb9a < 3
        ? _0x36b774
        : _0x13450c === null
          ? (_0x13450c = Object.getOwnPropertyDescriptor(_0x36b774, _0x3251e0))
          : _0x13450c,
    _0x3e0fb5;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x10ea36 = Reflect.decorate(_0x51089b, _0x36b774, _0x3251e0, _0x13450c);
  else {
    for (var _0x261cb3 = _0x51089b.length - 1; _0x261cb3 >= 0; _0x261cb3--)
      (_0x3e0fb5 = _0x51089b[_0x261cb3]) &&
        (_0x10ea36 =
          (_0x5bbb9a < 3
            ? _0x3e0fb5(_0x10ea36)
            : _0x5bbb9a > 3
              ? _0x3e0fb5(_0x36b774, _0x3251e0, _0x10ea36)
              : _0x3e0fb5(_0x36b774, _0x3251e0)) || _0x10ea36);
  }
  return (
    _0x5bbb9a > 3 &&
      _0x10ea36 &&
      Object.defineProperty(_0x36b774, _0x3251e0, _0x10ea36),
    _0x10ea36
  );
}
let l = class extends t.FBase {
  constructor(_0x5a14da, _0x1bd829, _0x2c9975, _0x1c7ac7, _0x34e8c9) {
    (super(),
      (this._handler = _0x5a14da),
      (this._injector = _0x1bd829),
      (this._univerInstanceService = _0x2c9975),
      (this._snapshotService = _0x1c7ac7),
      (this._collaborationController = _0x34e8c9));
  }
  async loadSheetAsync(_0x1bd23d, _0x542f7b) {
    return (await this._snapshotService["loadSheet"](_0x1bd23d, 0, _0x542f7b))
      ? (await this._collaborationController["readyForCollab"](_0x1bd23d),
        this._handler["getWorkbook"](_0x1bd23d))
      : null;
  }
  async loadDocAsync(_0xc27e4d, _0x3151c4) {
    return (await this._snapshotService["loadDoc"](_0xc27e4d, 0, _0x3151c4))
      ? (await this._collaborationController["readyForCollab"](_0xc27e4d),
        this._handler["getDocument"](_0xc27e4d))
      : null;
  }
  async loadBaseAsync(_0x228afd, _0x3628a9) {
    return (await this._snapshotService["loadBase"](_0x228afd, 0, _0x3628a9))
      ? (await this._collaborationController["readyForCollab"](_0x228afd),
        this._handler["getBase"](_0x228afd))
      : null;
  }
  async loadSlideAsync(_0x9e33b3, _0x16fcdc) {
    return (await this._snapshotService["loadSlide"](_0x9e33b3, 0, _0x16fcdc))
      ? (await this._collaborationController["readyForCollab"](_0x9e33b3),
        this._handler["getPresentation"](_0x9e33b3))
      : null;
  }
  async loadBoardAsync(_0x1d2ee8, _0x36700d) {
    return (await this._snapshotService["loadBoard"](_0x1d2ee8, 0, _0x36700d))
      ? (await this._collaborationController["readyForCollab"](_0x1d2ee8),
        this._handler["getBoard"](_0x1d2ee8))
      : null;
  }
  async loadPdfAsync(_0x4e1971, _0x3b9186) {
    return (await this._snapshotService["loadPdf"](_0x4e1971, 0, _0x3b9186))
      ? (await this._collaborationController["readyForCollab"](_0x4e1971),
        this._handler["getPdf"](_0x4e1971))
      : null;
  }
  subscribeCollaborators(_0x4bdbe8, _0xc435ab) {
    return (0, n.toDisposable)(
      this._injector["get"](e.MemberService)
        .waitForRoom$(_0x4bdbe8)
        .pipe((0, i.switchMap)((_0x30d063) => _0x30d063.members$))
        .subscribe((_0x3246bc) => _0xc435ab(Array.from(_0x3246bc.values()))),
    );
  }
  getCollaborationStatus(_0xa11244) {
    let _0x3ed0f1 = this._resolveUnitId(_0xa11244);
    if (!_0x3ed0f1) return e.CollaborationStatus["NOT_COLLAB"];
    let _0x557ba2 = this._collaborationController["getCollabEntity"](_0x3ed0f1);
    return (
      (_0x557ba2 == null ? undefined : _0x557ba2.state["status"]) ??
      e.CollaborationStatus["NOT_COLLAB"]
    );
  }
  flush(_0x4b4240, _0x450192 = {}) {
    let _0xeedb5a = this._resolveUnitId(_0x4b4240);
    if (!_0xeedb5a)
      return Promise.reject(
        Error(
          "[FCollaboration]: Cannot flush because no unit is focused or specified.",
        ),
      );
    let _0x5341c7 = this._collaborationController["getCollabEntity"](_0xeedb5a);
    if (!_0x5341c7)
      return Promise.reject(
        Error(
          "[FCollaboration]:\x20Unit\x20\x22" +
            _0xeedb5a +
            '" is not in collaboration mode.',
        ),
      );
    let _0x340b5b = _0x5341c7.state["status"];
    if (_0x340b5b === e.CollaborationStatus["SYNCED"]) return Promise.resolve();
    let _0x58a724 = u(_0xeedb5a, _0x340b5b);
    if (_0x58a724) return Promise.reject(_0x58a724);
    let _0x4fee79 = _0x450192.timeout ?? 30000;
    return new Promise((_0x399496, _0x4efc98) => {
      let _0x4fd3ad = false,
        _0x4915bc = null,
        _0x33117a = setTimeout(() => {
          ((_0x4fd3ad = true),
            _0x4915bc == null || _0x4915bc.unsubscribe(),
            _0x4efc98(
              Error(
                '[FCollaboration]: Timed out flushing unit "' +
                  _0xeedb5a +
                  "\x22\x20after\x20" +
                  _0x4fee79 +
                  "ms.",
              ),
            ));
        }, _0x4fee79),
        _0xbe6925 = () => {
          ((_0x4fd3ad = true),
            clearTimeout(_0x33117a),
            _0x4915bc == null || _0x4915bc.unsubscribe());
        };
      _0x4915bc = _0x5341c7.status$["subscribe"]((_0x21edeb) => {
        if (_0x4fd3ad) return;
        if (_0x21edeb === e.CollaborationStatus["SYNCED"]) {
          (_0xbe6925(), _0x399496());
          return;
        }
        let _0x76dd2b = u(_0xeedb5a, _0x21edeb);
        _0x76dd2b && (_0xbe6925(), _0x4efc98(_0x76dd2b));
      });
    });
  }
  _resolveUnitId(_0x2a002c) {
    var _0x5bbd25;
    return (
      _0x2a002c ||
      ((_0x5bbd25 = this._univerInstanceService["getFocusedUnit"]()) == null
        ? undefined
        : _0x5bbd25.getUnitId())
    );
  }
};
l = c(
  [
    s(1, (0, n.Inject)(n.Injector)),
    s(2, n.IUniverInstanceService),
    s(3, (0, n.Inject)(r.SnapshotService)),
    s(4, (0, n.Inject)(e.CollaborationController)),
  ],
  l,
);
function u(_0x50ccd2, _0x34a9cf) {
  return _0x34a9cf === e.CollaborationStatus["CONFLICT"] ||
    _0x34a9cf === e.CollaborationStatus["NOT_COLLAB"]
    ? Error(
        "[FCollaboration]:\x20Cannot\x20flush\x20unit\x20\x22" +
          _0x50ccd2 +
          '" while collaboration status is ' +
          _0x34a9cf +
          ".",
      )
    : null;
}
var d = class extends t.FUniver {
  _initialize(_0x478b2a) {
    let _0x3035ba = _0x478b2a.get(e.CollaborationController);
    this.disposeWithMe(
      this.registerEventHandler(
        this.Event["CollaborationStatusChanged"],
        () => {
          let _0x424003 = new n["DisposableCollection"](),
            _0xe32526 = _0x3035ba.entityInit$["subscribe"]((_0x33a0ac) => {
              let _0x3a0d0c = _0x33a0ac.status$["subscribe"]((_0x1ae476) => {
                let _0x569483 = { unitId: _0x33a0ac.unitID, status: _0x1ae476 };
                this.fireEvent(
                  this.Event["CollaborationStatusChanged"],
                  _0x569483,
                );
              });
              _0x424003.add((0, n.toDisposable)(_0x3a0d0c));
            });
          return (_0x424003.add((0, n.toDisposable)(_0xe32526)), _0x424003);
        },
      ),
    );
  }
  getCollaboration() {
    return this._injector["createInstance"](l, {
      getWorkbook: (_0x1eb9ea) => this.getWorkbook(_0x1eb9ea),
      getDocument: (_0x3aa079) => this.getDocument(_0x3aa079),
      getPresentation: (_0x15ee2c) => this.getPresentation(_0x15ee2c),
      getBase: (_0x350f8e) => this.getBase(_0x350f8e),
      getBoard: (_0x2129c9) => this.getBoard(_0x2129c9),
      getPdf: (_0x4603de) => this.getPdf(_0x4603de),
    });
  }
  loadServerUnit(_0x5c7571, _0x7980ac, _0x4e8c1f) {
    return this._injector["get"](e.DataLoaderService).loadUnit(
      _0x5c7571,
      _0x7980ac,
      _0x4e8c1f,
    );
  }
  loadServerUnitOfRevision(_0x2235cd, _0x32efab, _0x5111fa) {
    return this._injector["get"](e.DataLoaderService).loadUnitOfRevision(
      _0x2235cd,
      _0x32efab,
      _0x5111fa,
    );
  }
};
(t.FUniver["extend"](d),
  Object.defineProperty(exports, "FCollaboration", {
    enumerable: true,
    get: function () {
      return l;
    },
  }));
