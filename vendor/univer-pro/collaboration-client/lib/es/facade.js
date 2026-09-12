import {
  CollaborationController as _0xad7da8,
  CollaborationStatus as _0x26b74f,
  DataLoaderService as _0x16d65f,
  MemberService as _0x1bf172,
} from "@univerjs-pro/collaboration-client";
import {
  FBase as _0x304257,
  FEnum as _0x3ea438,
  FEventName as _0x152533,
  FUniver as _0x195852,
} from "@univerjs/core/facade";
import {
  DisposableCollection as _0x335cf7,
  IUniverInstanceService as _0xef44c9,
  Inject as _0x293fa8,
  Injector as _0x5b1dc8,
  toDisposable as _0x34e412,
} from "@univerjs/core";
import { SnapshotService as _0x3b8030 } from "@univerjs-pro/collaboration";
import { switchMap as _0x49e8c6 } from "rxjs";
var h = class extends _0x3ea438 {
  get CollaborationStatus() {
    return _0x26b74f;
  }
};
_0x3ea438.extend(h);
var g = class extends _0x152533 {
  get CollaborationStatusChanged() {
    return "CollaborationStatusChanged";
  }
};
_0x152533.extend(g);
function _(_0x4fcfe3, _0x36cc4b) {
  return function (_0x3f4562, _0x1091c7) {
    _0x36cc4b(_0x3f4562, _0x1091c7, _0x4fcfe3);
  };
}
function v(_0xa228e7, _0xb3c953, _0x4b00d7, _0x2d192b) {
  var _0x1ce2f6 = arguments.length,
    _0xb6255b =
      _0x1ce2f6 < 3
        ? _0xb3c953
        : _0x2d192b === null
          ? (_0x2d192b = Object.getOwnPropertyDescriptor(_0xb3c953, _0x4b00d7))
          : _0x2d192b,
    _0x2714de;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0xb6255b = Reflect.decorate(_0xa228e7, _0xb3c953, _0x4b00d7, _0x2d192b);
  else {
    for (var _0x24ed5 = _0xa228e7.length - 1; _0x24ed5 >= 0; _0x24ed5--)
      (_0x2714de = _0xa228e7[_0x24ed5]) &&
        (_0xb6255b =
          (_0x1ce2f6 < 3
            ? _0x2714de(_0xb6255b)
            : _0x1ce2f6 > 3
              ? _0x2714de(_0xb3c953, _0x4b00d7, _0xb6255b)
              : _0x2714de(_0xb3c953, _0x4b00d7)) || _0xb6255b);
  }
  return (
    _0x1ce2f6 > 3 &&
      _0xb6255b &&
      Object.defineProperty(_0xb3c953, _0x4b00d7, _0xb6255b),
    _0xb6255b
  );
}
let y = class extends _0x304257 {
  constructor(_0xe8e0d1, _0x48718f, _0x194d2c, _0x4aab8c, _0x175a09) {
    (super(),
      (this._handler = _0xe8e0d1),
      (this._injector = _0x48718f),
      (this._univerInstanceService = _0x194d2c),
      (this._snapshotService = _0x4aab8c),
      (this._collaborationController = _0x175a09));
  }
  async loadSheetAsync(_0x3ec4cd, _0x2222ae) {
    return (await this._snapshotService["loadSheet"](_0x3ec4cd, 0, _0x2222ae))
      ? (await this._collaborationController["readyForCollab"](_0x3ec4cd),
        this._handler["getWorkbook"](_0x3ec4cd))
      : null;
  }
  async loadDocAsync(_0x4e6b2b, _0x5eedf0) {
    return (await this._snapshotService["loadDoc"](_0x4e6b2b, 0, _0x5eedf0))
      ? (await this._collaborationController["readyForCollab"](_0x4e6b2b),
        this._handler["getDocument"](_0x4e6b2b))
      : null;
  }
  async loadBaseAsync(_0xa7f376, _0x37288b) {
    return (await this._snapshotService["loadBase"](_0xa7f376, 0, _0x37288b))
      ? (await this._collaborationController["readyForCollab"](_0xa7f376),
        this._handler["getBase"](_0xa7f376))
      : null;
  }
  async loadSlideAsync(_0x492f81, _0xe7e9b9) {
    return (await this._snapshotService["loadSlide"](_0x492f81, 0, _0xe7e9b9))
      ? (await this._collaborationController["readyForCollab"](_0x492f81),
        this._handler["getPresentation"](_0x492f81))
      : null;
  }
  async loadBoardAsync(_0x46aa4d, _0x5b77b6) {
    return (await this._snapshotService["loadBoard"](_0x46aa4d, 0, _0x5b77b6))
      ? (await this._collaborationController["readyForCollab"](_0x46aa4d),
        this._handler["getBoard"](_0x46aa4d))
      : null;
  }
  async loadPdfAsync(_0x23fa1c, _0x3ae5e2) {
    return (await this._snapshotService["loadPdf"](_0x23fa1c, 0, _0x3ae5e2))
      ? (await this._collaborationController["readyForCollab"](_0x23fa1c),
        this._handler["getPdf"](_0x23fa1c))
      : null;
  }
  subscribeCollaborators(_0x59adc1, _0x330540) {
    return _0x34e412(
      this._injector["get"](_0x1bf172)
        .waitForRoom$(_0x59adc1)
        .pipe(_0x49e8c6((_0x34d6ae) => _0x34d6ae.members$))
        .subscribe((_0x4059fd) => _0x330540(Array.from(_0x4059fd.values()))),
    );
  }
  getCollaborationStatus(_0x2f1194) {
    let _0x377420 = this._resolveUnitId(_0x2f1194);
    if (!_0x377420) return _0x26b74f.NOT_COLLAB;
    let _0x54e4c1 = this._collaborationController["getCollabEntity"](_0x377420);
    return (
      (_0x54e4c1 == null ? undefined : _0x54e4c1.state["status"]) ??
      _0x26b74f.NOT_COLLAB
    );
  }
  flush(_0x300269, _0x1e81f1 = {}) {
    let _0x26bd06 = this._resolveUnitId(_0x300269);
    if (!_0x26bd06)
      return Promise.reject(
        Error(
          "[FCollaboration]: Cannot flush because no unit is focused or specified.",
        ),
      );
    let _0xe40812 = this._collaborationController["getCollabEntity"](_0x26bd06);
    if (!_0xe40812)
      return Promise.reject(
        Error(
          '[FCollaboration]: Unit "' +
            _0x26bd06 +
            '" is not in collaboration mode.',
        ),
      );
    let _0x21e322 = _0xe40812.state["status"];
    if (_0x21e322 === _0x26b74f.SYNCED) return Promise.resolve();
    let _0x1ae54d = b(_0x26bd06, _0x21e322);
    if (_0x1ae54d) return Promise.reject(_0x1ae54d);
    let _0x42533e = _0x1e81f1.timeout ?? 30000;
    return new Promise((_0x4ed1c8, _0x2b5958) => {
      let _0x565e97 = false,
        _0x5beea5 = null,
        _0x514389 = setTimeout(() => {
          ((_0x565e97 = true),
            _0x5beea5 == null || _0x5beea5.unsubscribe(),
            _0x2b5958(
              Error(
                '[FCollaboration]: Timed out flushing unit "' +
                  _0x26bd06 +
                  "\x22\x20after\x20" +
                  _0x42533e +
                  "ms.",
              ),
            ));
        }, _0x42533e),
        _0xca8a06 = () => {
          ((_0x565e97 = true),
            clearTimeout(_0x514389),
            _0x5beea5 == null || _0x5beea5.unsubscribe());
        };
      _0x5beea5 = _0xe40812.status$["subscribe"]((_0x1dc32a) => {
        if (_0x565e97) return;
        if (_0x1dc32a === _0x26b74f.SYNCED) {
          (_0xca8a06(), _0x4ed1c8());
          return;
        }
        let _0x2bbf3c = b(_0x26bd06, _0x1dc32a);
        _0x2bbf3c && (_0xca8a06(), _0x2b5958(_0x2bbf3c));
      });
    });
  }
  _resolveUnitId(_0x57f0b8) {
    var _0x7747c7;
    return (
      _0x57f0b8 ||
      ((_0x7747c7 = this._univerInstanceService["getFocusedUnit"]()) == null
        ? undefined
        : _0x7747c7.getUnitId())
    );
  }
};
y = v(
  [
    _(1, _0x293fa8(_0x5b1dc8)),
    _(2, _0xef44c9),
    _(3, _0x293fa8(_0x3b8030)),
    _(4, _0x293fa8(_0xad7da8)),
  ],
  y,
);
function b(_0x263b3b, _0x138e97) {
  return _0x138e97 === _0x26b74f.CONFLICT || _0x138e97 === _0x26b74f.NOT_COLLAB
    ? Error(
        '[FCollaboration]: Cannot flush unit "' +
          _0x263b3b +
          "\x22\x20while\x20collaboration\x20status\x20is\x20" +
          _0x138e97 +
          ".",
      )
    : null;
}
var x = class extends _0x195852 {
  _initialize(_0x4b6601) {
    let _0x23cda8 = _0x4b6601.get(_0xad7da8);
    this.disposeWithMe(
      this.registerEventHandler(
        this.Event["CollaborationStatusChanged"],
        () => {
          let _0x50664c = new _0x335cf7(),
            _0x1a4682 = _0x23cda8.entityInit$["subscribe"]((_0x4f90d7) => {
              let _0x2d26b7 = _0x4f90d7.status$["subscribe"]((_0x2f5687) => {
                let _0x1d292a = { unitId: _0x4f90d7.unitID, status: _0x2f5687 };
                this.fireEvent(
                  this.Event["CollaborationStatusChanged"],
                  _0x1d292a,
                );
              });
              _0x50664c.add(_0x34e412(_0x2d26b7));
            });
          return (_0x50664c.add(_0x34e412(_0x1a4682)), _0x50664c);
        },
      ),
    );
  }
  getCollaboration() {
    return this._injector["createInstance"](y, {
      getWorkbook: (_0x5575b4) => this.getWorkbook(_0x5575b4),
      getDocument: (_0x4cb99f) => this.getDocument(_0x4cb99f),
      getPresentation: (_0x465f5) => this.getPresentation(_0x465f5),
      getBase: (_0x31095b) => this.getBase(_0x31095b),
      getBoard: (_0x406200) => this.getBoard(_0x406200),
      getPdf: (_0x139f14) => this.getPdf(_0x139f14),
    });
  }
  loadServerUnit(_0x2bd09b, _0xed3a9, _0x13ef5f) {
    return this._injector["get"](_0x16d65f).loadUnit(
      _0x2bd09b,
      _0xed3a9,
      _0x13ef5f,
    );
  }
  loadServerUnitOfRevision(_0x30f530, _0x378106, _0x4fea5d) {
    return this._injector["get"](_0x16d65f).loadUnitOfRevision(
      _0x30f530,
      _0x378106,
      _0x4fea5d,
    );
  }
};
_0x195852.extend(x);
export { y as FCollaboration };
