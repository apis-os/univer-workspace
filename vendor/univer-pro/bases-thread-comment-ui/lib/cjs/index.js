Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/bases"),
  t = require("@univerjs-pro/bases-thread-comment"),
  n = require("@univerjs-pro/bases-ui"),
  r = require("@univerjs-pro/license"),
  i = require("@univerjs/core"),
  a = require("@univerjs/thread-comment-ui"),
  o = require("@univerjs/ui"),
  s = require("@univerjs/design"),
  c = require("@univerjs/icons"),
  l = require("react/jsx-runtime"),
  u = require("@univerjs/thread-comment"),
  d = require("rxjs"),
  f = require("@univerjs/protocol");
const p = "bases-thread-comment-ui.config",
  m = {};
var h = "@univerjs-pro/bases-thread-comment-ui",
  g = "1.0.0-insiders.20260907-70fc579";
const _ = "univer.base.thread-comment-panel",
  v = {
    id: "base.operation.open-comment-panel",
    type: i.CommandType["OPERATION"],
    handler(_0xab9008) {
      let _0x574b0e = _0xab9008.get(a.ThreadCommentPanelService);
      return (
        _0xab9008
          .get(o.ISidebarService)
          .open({
            header: { title: "bases-thread-comment-ui.openComments" },
            children: { label: _ },
            width: 320,
            onClose: () => _0x574b0e.setPanelVisible(false),
          }),
        _0x574b0e.setPanelVisible(true),
        true
      );
    },
  };
function y() {
  let _0x35fc58 = (0, o.useDependency)(i.ICommandService),
    _0x3b5547 = (0, o.useDependency)(i.LocaleService).t(
      "bases-thread-comment-ui.openComments",
    );
  return (0, l.jsx)(s.Tooltip, {
    title: _0x3b5547,
    placement: "top",
    children: (0, l.jsx)(s.Button, {
      "aria-label": _0x3b5547,
      className: "univer-size-8 univer-p-0",
      type: "button",
      variant: "text",
      onClick: () => _0x35fc58.executeCommand(v.id),
      children: (0, l.jsx)(c.CommentIcon, {}),
    }),
  });
}
function b() {
  let _0x547665 = (0, o.useDependency)(i.IUniverInstanceService),
    _0x54d470 = (0, o.useDependency)(n.IBaseUIStateService),
    _0xe544d = (0, o.useDependency)(a.ThreadCommentDraftService),
    _0x4ae25f = (0, o.useDependency)(i.UserManagerService),
    _0x2cdcda = _0x547665.getCurrentUnitOfType(
      i.UniverInstanceType["UNIVER_BASE"],
    ),
    _0x4deb52 = (0, o.useObservable)(_0xe544d.draft$, _0xe544d.draft),
    _0x3cc81f = _0x54d470.state$["pipe"](
      (0, d.map)((_0x39cc92) => _0x39cc92.activeTableId),
    ),
    _0x318978 =
      _0x4deb52 &&
      _0x4deb52.unitId ===
        (_0x2cdcda == null ? undefined : _0x2cdcda.getUnitId())
        ? {
            id: "",
            threadId: "",
            unitId: _0x4deb52.unitId,
            subUnitId: _0x4deb52.subUnitId,
            ref: (0, u.serializeThreadCommentAnchor)(_0x4deb52.anchor),
            dT: "",
            personId: _0x4ae25f.getCurrentUser().userID,
            text: { dataStream: "\x0d\x0a" },
          }
        : null;
  return _0x2cdcda instanceof i.BaseDataModel
    ? (0, l.jsx)(a.ThreadCommentPanel, {
        unitId: _0x2cdcda.getUnitId(),
        subUnitId$: _0x3cc81f,
        type: i.UniverInstanceType["UNIVER_BASE"],
        onAdd: () => undefined,
        disableAdd: true,
        getSubUnitName: (_0x283699) => {
          var _0x44af1e;
          return (
            ((_0x44af1e = _0x2cdcda.getSnapshot().tables[_0x283699]) == null
              ? undefined
              : _0x44af1e.name) ?? _0x283699
          );
        },
        tempComment: _0x318978,
        onTempCommentClose: () => _0xe544d.cancel(),
        formatRef: (_0x55ac99) => x(_0x55ac99.ref, _0x2cdcda),
      })
    : null;
}
function x(_0x186b47, _0x322775) {
  let _0x342974 = (0, u.deserializeThreadCommentAnchor)(_0x186b47);
  if (
    (_0x342974 == null ? undefined : _0x342974.kind) !==
    u.ThreadCommentAnchorKind["BASE_RECORD"]
  )
    return _0x186b47;
  let _0x5a82d1 = _0x322775.getSnapshot().tables[_0x342974.tableId],
    _0x451563 =
      _0x5a82d1 == null
        ? undefined
        : _0x5a82d1.fields[_0x5a82d1.primaryFieldId],
    _0x1762ab =
      _0x5a82d1 == null ? undefined : _0x5a82d1.records[_0x342974.recordId],
    _0x45de27 = _0x451563
      ? ((_0x1762ab == null ? undefined : _0x1762ab.values[_0x451563.id]) ??
        _0x451563.defaultValue)
      : null;
  return (
    (_0x45de27 == null ? "" : String(_0x45de27).trim()) ||
    "#" + _0x342974.recordId
  );
}
function S(_0x455742, _0x24bc8a) {
  return function (_0x424096, _0x4f79be) {
    _0x24bc8a(_0x424096, _0x4f79be, _0x455742);
  };
}
function C(_0x4003bb, _0x1ab458, _0x57b1e1, _0x3885b3) {
  var _0x58e609 = arguments.length,
    _0x23c006 =
      _0x58e609 < 3
        ? _0x1ab458
        : _0x3885b3 === null
          ? (_0x3885b3 = Object.getOwnPropertyDescriptor(_0x1ab458, _0x57b1e1))
          : _0x3885b3,
    _0x23a8fc;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x23c006 = Reflect.decorate(_0x4003bb, _0x1ab458, _0x57b1e1, _0x3885b3);
  else {
    for (var _0x5c4c30 = _0x4003bb.length - 1; _0x5c4c30 >= 0; _0x5c4c30--)
      (_0x23a8fc = _0x4003bb[_0x5c4c30]) &&
        (_0x23c006 =
          (_0x58e609 < 3
            ? _0x23a8fc(_0x23c006)
            : _0x58e609 > 3
              ? _0x23a8fc(_0x1ab458, _0x57b1e1, _0x23c006)
              : _0x23a8fc(_0x1ab458, _0x57b1e1)) || _0x23c006);
  }
  return (
    _0x58e609 > 3 &&
      _0x23c006 &&
      Object.defineProperty(_0x1ab458, _0x57b1e1, _0x23c006),
    _0x23c006
  );
}
let w = class extends i.Disposable {
  constructor(_0x27e758) {
    (super(), (this._componentManager = _0x27e758), this._registerComponents());
  }
  _registerComponents() {
    (this.disposeWithMe(this._componentManager["register"](_, b)),
      this.disposeWithMe(
        this._componentManager["register"](
          n.BASE_TOOLBAR_BEFORE_EXTRA_ACTIONS,
          y,
        ),
      ));
  }
};
w = C([S(0, (0, i.Inject)(o.ComponentManager))], w);
function T(_0x436aaf, _0x154e70) {
  (_0x436aaf.open({
    header: { title: "bases-thread-comment-ui.addComment" },
    children: { label: _ },
    width: 320,
    onClose: () => _0x154e70.setPanelVisible(false),
  }),
    _0x154e70.setPanelVisible(true));
}
let E = class extends i.Disposable {
  constructor(
    _0x4fb822,
    _0x403712,
    _0x314035,
    _0x5b6454,
    _0x512599,
    _0xe73203,
    _0x28cf83,
  ) {
    (super(),
      this.disposeWithMe(_0x4fb822.registerCommand(v)),
      this.disposeWithMe(
        _0x403712.register({
          id: "base-record-comment",
          label: "bases-thread-comment-ui.addComment",
          changed$: (0, d.merge)(
            _0x314035.commentUpdate$,
            _0x512599.activeCommentId$,
            _0x512599.hoveredCommentId$,
          ),
          getBadgeCounts: ({ unitId: _0x129cf4, tableId: _0x2b0a17 }) => {
            let _0x5bc171 = new Map();
            return (
              _0x314035
                .query({
                  unitIds: [_0x129cf4],
                  subUnitIds: [_0x2b0a17],
                  anchorKinds: [u.ThreadCommentAnchorKind["BASE_RECORD"]],
                  resolved: false,
                })
                .forEach(({ root: _0x38bcda }) => {
                  let _0x5a8ace = (0, u.deserializeThreadCommentAnchor)(
                    _0x38bcda.ref,
                  );
                  (_0x5a8ace == null ? undefined : _0x5a8ace.kind) ===
                    u.ThreadCommentAnchorKind["BASE_RECORD"] &&
                    _0x5a8ace.tableId === _0x2b0a17 &&
                    _0x5bc171.set(
                      _0x5a8ace.recordId,
                      (_0x5bc171.get(_0x5a8ace.recordId) ?? 0) + 1,
                    );
                }),
              _0x5bc171
            );
          },
          getFocusedRecordId: ({ unitId: _0x1f047b, tableId: _0x344905 }) => {
            for (let _0x37e6cd of [
              _0x512599.hoveredCommentId,
              _0x512599.activeCommentId,
            ]) {
              if (
                (_0x37e6cd == null ? undefined : _0x37e6cd.unitId) !==
                  _0x1f047b ||
                _0x37e6cd.subUnitId !== _0x344905
              )
                continue;
              let _0x16e748 = _0x314035.getComment(
                  _0x1f047b,
                  _0x344905,
                  _0x37e6cd.commentId,
                ),
                _0x3262d7 =
                  _0x16e748 &&
                  (0, u.deserializeThreadCommentAnchor)(_0x16e748.ref);
              if (
                (_0x3262d7 == null ? undefined : _0x3262d7.kind) ===
                  u.ThreadCommentAnchorKind["BASE_RECORD"] &&
                _0x3262d7.tableId === _0x344905
              )
                return _0x3262d7.recordId;
            }
          },
          execute: ({
            unitId: _0x539e00,
            tableId: _0x569e7f,
            recordId: _0x297ef6,
            trigger: _0x25e648,
          }) => {
            var _0x558434;
            let _0x212232 = _0x314035
                .query({
                  unitIds: [_0x539e00],
                  subUnitIds: [_0x569e7f],
                  anchorKinds: [u.ThreadCommentAnchorKind["BASE_RECORD"]],
                  resolved: false,
                })
                .filter(({ root: _0x249662 }) => {
                  let _0x3701c5 = (0, u.deserializeThreadCommentAnchor)(
                    _0x249662.ref,
                  );
                  return (
                    (_0x3701c5 == null ? undefined : _0x3701c5.kind) ===
                      u.ThreadCommentAnchorKind["BASE_RECORD"] &&
                    _0x3701c5.tableId === _0x569e7f &&
                    _0x3701c5.recordId === _0x297ef6
                  );
                }),
              _0x38ed05 =
                (_0x558434 = _0x212232[_0x212232.length - 1]) == null
                  ? undefined
                  : _0x558434.root;
            if (_0x25e648 === "badge" && _0x38ed05)
              (_0x5b6454.cancel(),
                _0x512599.setActiveComment({
                  unitId: _0x539e00,
                  subUnitId: _0x569e7f,
                  commentId: _0x38ed05.id,
                }));
            else {
              if (
                !(0, e.getBasePermissionValue)(
                  _0xe73203,
                  _0x539e00,
                  _0x539e00,
                  f.UnitAction["Comment"],
                )
              )
                return;
              (_0x512599.setActiveComment(undefined),
                _0x5b6454.place({
                  unitId: _0x539e00,
                  subUnitId: _0x569e7f,
                  anchor: {
                    kind: u.ThreadCommentAnchorKind["BASE_RECORD"],
                    tableId: _0x569e7f,
                    recordId: _0x297ef6,
                  },
                }));
            }
            T(_0x28cf83, _0x512599);
          },
        }),
      ));
  }
};
E = C(
  [
    S(0, i.ICommandService),
    S(1, n.IBaseRecordActionService),
    S(2, (0, i.Inject)(u.ThreadCommentModel)),
    S(3, (0, i.Inject)(a.ThreadCommentDraftService)),
    S(4, (0, i.Inject)(a.ThreadCommentPanelService)),
    S(5, i.IPermissionService),
    S(6, o.ISidebarService),
  ],
  E,
);
function D(_0x393ffc) {
  "@babel/helpers - typeof";
  return (
    (D =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x5ca10b) {
            return typeof _0x5ca10b;
          }
        : function (_0xc49b95) {
            return _0xc49b95 &&
              typeof Symbol == "function" &&
              _0xc49b95.constructor === Symbol &&
              _0xc49b95 !== Symbol.prototype
              ? "symbol"
              : typeof _0xc49b95;
          }),
    D(_0x393ffc)
  );
}
function O(_0x42955f, _0x24819a) {
  if (D(_0x42955f) != "object" || !_0x42955f) return _0x42955f;
  var _0x3a1ba4 = _0x42955f[Symbol.toPrimitive];
  if (_0x3a1ba4 !== undefined) {
    var _0x19d5d4 = _0x3a1ba4.call(_0x42955f, _0x24819a || "default");
    if (D(_0x19d5d4) != "object") return _0x19d5d4;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x24819a === "string" ? String : Number)(_0x42955f);
}
function k(_0x7b1842) {
  var _0x63b953 = O(_0x7b1842, "string");
  return D(_0x63b953) == "symbol" ? _0x63b953 : _0x63b953 + "";
}
function A(_0x3c289b, _0x2fc445, _0x12ff95) {
  return (
    (_0x2fc445 = k(_0x2fc445)) in _0x3c289b
      ? Object.defineProperty(_0x3c289b, _0x2fc445, {
          value: _0x12ff95,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x3c289b[_0x2fc445] = _0x12ff95),
    _0x3c289b
  );
}
const j = [[w], [E]];
let M = class extends i.Plugin {
  constructor(_0x2f4a59 = m, _0x224ebe, _0x4b34cf) {
    (super(),
      (this._config = _0x2f4a59),
      (this._injector = _0x224ebe),
      (this._configService = _0x4b34cf));
    let { ..._0x29f75b } = (0, i.merge)({}, m, this._config);
    this._configService["setConfig"](p, _0x29f75b);
  }
  onStarting() {
    (j.forEach((_0x5d763d) => {
      this._injector["add"](_0x5d763d);
    }),
      this._injector["get"](w));
  }
  onReady() {
    this._injector["get"](E);
  }
};
(A(M, "pluginName", "UNIVER_BASES_THREAD_COMMENT_UI_PLUGIN"),
  A(M, "packageName", h),
  A(M, "version", g),
  A(M, "type", i.UniverInstanceType["UNIVER_BASE"]),
  (M = C(
    [
      (0, i.DependentOn)(
        e.UniverBasesPlugin,
        t.UniverBasesThreadCommentPlugin,
        n.UniverBasesUIPlugin,
        r.UniverLicensePlugin,
        a.UniverThreadCommentUIPlugin,
      ),
      S(1, (0, i.Inject)(i.Injector)),
      S(2, i.IConfigService),
    ],
    M,
  )),
  (exports.BASES_THREAD_COMMENT_UI_PLUGIN_CONFIG_KEY = p),
  Object.defineProperty(exports, "UniverBasesThreadCommentUIPlugin", {
    enumerable: true,
    get: function () {
      return M;
    },
  }));
