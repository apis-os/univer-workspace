Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/docs-list"),
  t = require("@univerjs-pro/license"),
  n = require("@univerjs/core"),
  r = require("@univerjs/docs"),
  i = require("@univerjs/docs-ui"),
  a = require("@univerjs/engine-render"),
  o = require("@univerjs/ui"),
  s = require("@univerjs/design"),
  c = require("react/jsx-runtime"),
  l = require("react"),
  u = require("rxjs");
var d = "@univerjs-pro/docs-list-ui",
  f = "1.0.0-insiders.20260907-70fc579";
const p = {},
  m = "docs-list-ui.context-menu",
  h = [
    { label: "1", type: n.ListGlyphType["DECIMAL"] },
    { label: "A", type: n.ListGlyphType["UPPER_LETTER"] },
    { label: "a", type: n.ListGlyphType["LOWER_LETTER"] },
    { label: "I", type: n.ListGlyphType["UPPER_ROMAN"] },
    { label: "i", type: n.ListGlyphType["LOWER_ROMAN"] },
  ],
  g = ["●", "○", "■", "➢", "★"];
function _(_0x3dbd42) {
  var _0x2c7f87;
  let _0x36b75a =
      (_0x2c7f87 = _0x3dbd42.popup) == null ? undefined : _0x2c7f87.extraProps,
    _0x29f9dc = (0, o.useDependency)(n.LocaleService);
  return (0, c.jsxs)("section", {
    className:
      "univer-box-border\x20univer-w-48\x20univer-rounded-lg\x20univer-border\x20univer-border-solid\x20univer-border-gray-200\x20univer-bg-gray-0\x20univer-py-1.5\x20univer-text-xs\x20univer-shadow-lg",
    "data-u-comp": m,
    children: [
      (0, c.jsx)("div", {
        className:
          "univer-grid univer-grid-cols-5 univer-justify-items-center univer-gap-1 univer-px-2.5 univer-py-1",
        children: h.map((_0x2cb17e) =>
          (0, c.jsx)(
            s.Button,
            {
              size: "small",
              type: "button",
              disabled: _0x36b75a == null ? undefined : _0x36b75a.readOnly,
              onClick: () => {
                var _0x55dfb9;
                return _0x36b75a == null ||
                  (_0x55dfb9 = _0x36b75a.onSetGlyphType) == null
                  ? undefined
                  : _0x55dfb9.call(_0x36b75a, _0x2cb17e.type);
              },
              children: _0x2cb17e.label,
            },
            _0x2cb17e.label,
          ),
        ),
      }),
      (0, c.jsx)(s.Separator, {}),
      (0, c.jsx)("div", {
        className:
          "univer-grid univer-grid-cols-5 univer-justify-items-center univer-gap-1 univer-px-2.5 univer-py-1",
        children: g.map((_0x2220e1) =>
          (0, c.jsx)(
            s.Button,
            {
              size: "small",
              type: "button",
              disabled: _0x36b75a == null ? undefined : _0x36b75a.readOnly,
              onClick: () => {
                var _0x102f63;
                return _0x36b75a == null ||
                  (_0x102f63 = _0x36b75a.onSetGlyphSymbol) == null
                  ? undefined
                  : _0x102f63.call(_0x36b75a, _0x2220e1);
              },
              children: _0x2220e1,
            },
            _0x2220e1,
          ),
        ),
      }),
      (0, c.jsx)(s.Separator, {}),
      (0, c.jsx)(v, {
        disabled: _0x36b75a == null ? undefined : _0x36b75a.readOnly,
        onClick: _0x36b75a == null ? undefined : _0x36b75a.onMoreBullets,
        children: _0x29f9dc.t("docs-list-ui.moreBullets"),
      }),
      (_0x36b75a == null ? undefined : _0x36b75a.showNumberingControls) &&
        (0, c.jsxs)(c.Fragment, {
          children: [
            (0, c.jsx)(v, {
              disabled: _0x36b75a == null ? undefined : _0x36b75a.readOnly,
              onClick:
                _0x36b75a == null ? undefined : _0x36b75a.onEditPrefixSuffix,
              children: _0x29f9dc.t("docs-list-ui.editPrefixSuffix"),
            }),
            (0, c.jsx)(v, {
              disabled: _0x36b75a == null ? undefined : _0x36b75a.readOnly,
              onClick: () => {
                var _0x5d78e8;
                return _0x36b75a == null ||
                  (_0x5d78e8 = _0x36b75a.onSetStartNumber) == null
                  ? undefined
                  : _0x5d78e8.call(_0x36b75a, 1);
              },
              children: _0x29f9dc.t("docs-list-ui.restartNumbering"),
            }),
            (0, c.jsx)(v, {
              disabled: _0x36b75a == null ? undefined : _0x36b75a.readOnly,
              onClick: _0x36b75a == null ? undefined : _0x36b75a.onRestartAt,
              children: _0x29f9dc.t("docs-list-ui.restartAt"),
            }),
          ],
        }),
      (0, c.jsx)(v, {
        disabled:
          (_0x36b75a == null ? undefined : _0x36b75a.readOnly) ||
          !(_0x36b75a != null && _0x36b75a.canPromote),
        onClick: _0x36b75a == null ? undefined : _0x36b75a.onPromote,
        children: _0x29f9dc.t("docs-list-ui.promote"),
      }),
      (0, c.jsx)(v, {
        disabled:
          (_0x36b75a == null ? undefined : _0x36b75a.readOnly) ||
          !(_0x36b75a != null && _0x36b75a.canDemote),
        onClick: _0x36b75a == null ? undefined : _0x36b75a.onDemote,
        children: _0x29f9dc.t("docs-list-ui.demote"),
      }),
      (0, c.jsx)(s.Separator, {}),
      (0, c.jsx)(v, {
        onClick: _0x36b75a == null ? undefined : _0x36b75a.onSelectItem,
        children: _0x29f9dc.t("docs-list-ui.selectListItem"),
      }),
      (0, c.jsx)(v, {
        onClick: _0x36b75a == null ? undefined : _0x36b75a.onSelectCurrentLevel,
        children: _0x29f9dc.t("docs-list-ui.selectCurrentLevel"),
      }),
      (0, c.jsx)(v, {
        onClick: _0x36b75a == null ? undefined : _0x36b75a.onSelectCurrentList,
        children: _0x29f9dc.t("docs-list-ui.selectCurrentList"),
      }),
    ],
  });
}
function v(_0x484863) {
  return (0, c.jsx)(s.Button, {
    size: "small",
    variant: "ghost",
    type: "button",
    className: "univer-w-full\x20univer-justify-start",
    disabled: _0x484863.disabled,
    onClick: (_0x8798f) => {
      var _0x5a1af0;
      (_0x8798f.preventDefault(),
        (_0x5a1af0 = _0x484863.onClick) == null || _0x5a1af0.call(_0x484863));
    },
    children: _0x484863.children,
  });
}
const y = "docs-list-ui.more-bullets-dialog";
function b(_0x2f179c) {
  var _0x4eeb51;
  let _0x13c087 =
      (_0x4eeb51 = _0x2f179c.popup) == null ? undefined : _0x4eeb51.extraProps,
    _0x3efb80 = (0, o.useDependency)(n.LocaleService),
    _0x4644e2 = (0, l.useMemo)(
      () =>
        e.DOCS_LIST_MORE_BULLETS["map"]((_0x56b453, _0x36a033) => ({
          id: _0x56b453 + "-" + _0x36a033,
          symbol: _0x56b453,
        })),
      [],
    );
  return (0, c.jsxs)("section", {
    className:
      "univer-box-border univer-w-[420px] univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-4 univer-text-sm univer-shadow-lg",
    "data-u-comp": y,
    children: [
      (0, c.jsxs)("header", {
        className:
          "univer-mb-3 univer-flex univer-items-center univer-justify-between",
        children: [
          (0, c.jsx)("h2", {
            className:
              "univer-m-0 univer-text-lg univer-font-medium univer-text-gray-900",
            children: _0x3efb80.t("docs-list-ui.moreBullets"),
          }),
          (0, c.jsx)(s.Button, {
            type: "button",
            size: "icon",
            variant: "ghost",
            className: "univer-text-xl",
            onClick: _0x13c087 == null ? undefined : _0x13c087.onClose,
            "aria-label": _0x3efb80.t("docs-list-ui.close"),
            children: "×",
          }),
        ],
      }),
      (0, c.jsx)("div", {
        className:
          "univer-grid univer-max-h-[260px] univer-grid-cols-10 univer-gap-1 univer-overflow-y-auto univer-pr-1",
        children: _0x4644e2.map(({ id: _0x584e7d, symbol: _0x5bf020 }) =>
          (0, c.jsx)(
            s.Button,
            {
              type: "button",
              size: "icon",
              className: "univer-text-base",
              onClick: () => {
                var _0x467c1e;
                return _0x13c087 == null ||
                  (_0x467c1e = _0x13c087.onSelect) == null
                  ? undefined
                  : _0x467c1e.call(_0x13c087, _0x5bf020);
              },
              children: _0x5bf020,
            },
            _0x584e7d,
          ),
        ),
      }),
    ],
  });
}
const x = "docs-list-ui.prefix-suffix-dialog";
function S(_0x42ab6b) {
  var _0x94fb03;
  let _0x1b17d3 =
      (_0x94fb03 = _0x42ab6b.popup) == null ? undefined : _0x94fb03.extraProps,
    _0x5de18f = (0, o.useDependency)(n.LocaleService),
    [_0x3ccc9d, _0x5639a] = (0, l.useState)(""),
    [_0x37e912, _0x4879f1] = (0, l.useState)("."),
    [_0x5917d0, _0x35da70] = (0, l.useState)(true);
  return (0, c.jsxs)("form", {
    className:
      "univer-box-border univer-w-[456px] univer-rounded-xl univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-6 univer-text-sm univer-shadow-xl",
    onSubmit: (_0x865184) => {
      var _0x7ba49d;
      (_0x865184.preventDefault(),
        _0x1b17d3 == null ||
          (_0x7ba49d = _0x1b17d3.onApply) == null ||
          _0x7ba49d.call(
            _0x1b17d3,
            _0x3ccc9d,
            _0x37e912,
            _0x5917d0
              ? e.DocsListSelectionMode["List"]
              : e.DocsListSelectionMode["Level"],
          ));
    },
    children: [
      (0, c.jsx)("h2", {
        className:
          "univer-m-0 univer-mb-6 univer-text-3xl univer-font-medium univer-text-gray-900",
        children: _0x5de18f.t("docs-list-ui.prefixAndSuffix"),
      }),
      (0, c.jsxs)("div", {
        className: "univer-flex univer-items-end univer-gap-4",
        children: [
          (0, c.jsxs)("label", {
            className:
              "univer-flex univer-w-44 univer-flex-none univer-flex-col univer-gap-2 univer-text-sm univer-font-medium univer-text-gray-700",
            children: [
              (0, c.jsx)("span", {
                children: _0x5de18f.t("docs-list-ui.prefix"),
              }),
              (0, c.jsx)(s.Input, {
                size: "large",
                inputClass: "univer-h-16\x20univer-text-xl",
                value: _0x3ccc9d,
                onChange: _0x5639a,
                placeholder: _0x5de18f.t("docs-list-ui.noPrefix"),
              }),
            ],
          }),
          (0, c.jsx)("span", {
            className:
              "univer-w-6 univer-flex-none univer-pb-5 univer-text-center univer-text-xl univer-text-gray-700",
            children: "A",
          }),
          (0, c.jsxs)("label", {
            className:
              "univer-flex univer-w-44 univer-flex-none univer-flex-col univer-gap-2 univer-text-sm univer-font-medium univer-text-gray-700",
            children: [
              (0, c.jsx)("span", {
                children: _0x5de18f.t("docs-list-ui.suffix"),
              }),
              (0, c.jsx)(s.Input, {
                size: "large",
                inputClass: "univer-h-16 univer-text-xl",
                value: _0x37e912,
                onChange: _0x4879f1,
              }),
            ],
          }),
        ],
      }),
      (0, c.jsx)(s.Checkbox, {
        className: "univer-mt-6 univer-text-xl",
        checked: _0x5917d0,
        onChange: (_0x56e66d) => _0x35da70(!!_0x56e66d),
        children: _0x5de18f.t("docs-list-ui.applyToEntireList"),
      }),
      (0, c.jsxs)("footer", {
        className:
          "univer-mt-10 univer-flex univer-items-center univer-justify-end univer-gap-4",
        children: [
          (0, c.jsx)(s.Button, {
            type: "button",
            variant: "default",
            onClick: _0x1b17d3 == null ? undefined : _0x1b17d3.onClose,
            children: _0x5de18f.t("docs-list-ui.cancel"),
          }),
          (0, c.jsx)(s.Button, {
            type: "submit",
            variant: "primary",
            children: _0x5de18f.t("docs-list-ui.ok"),
          }),
        ],
      }),
    ],
  });
}
const C = "docs-list-ui.start-number-dialog";
function w(_0x3bf620) {
  var _0x5a71b2;
  let _0x2f2fbe =
      (_0x5a71b2 = _0x3bf620.popup) == null ? undefined : _0x5a71b2.extraProps,
    _0x5e0f74 = (0, o.useDependency)(n.LocaleService),
    [_0x37e783, _0x29c9ac] = (0, l.useState)(1);
  return (0, c.jsxs)("section", {
    className:
      "univer-box-border univer-w-[260px] univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-4 univer-text-sm univer-shadow-lg",
    "data-u-comp": C,
    children: [
      (0, c.jsx)("h2", {
        className:
          "univer-m-0 univer-mb-3 univer-text-lg univer-font-medium univer-text-gray-900",
        children: _0x5e0f74.t("docs-list-ui.restartAt"),
      }),
      (0, c.jsx)(s.InputNumber, {
        className: "univer-w-full",
        min: 1,
        step: 1,
        precision: 0,
        value: _0x37e783,
        onChange: _0x29c9ac,
      }),
      (0, c.jsxs)("footer", {
        className: "univer-mt-4 univer-flex univer-justify-end univer-gap-2",
        children: [
          (0, c.jsx)(s.Button, {
            type: "button",
            variant: "default",
            onClick: _0x2f2fbe == null ? undefined : _0x2f2fbe.onClose,
            children: _0x5e0f74.t("docs-list-ui.cancel"),
          }),
          (0, c.jsx)(s.Button, {
            type: "button",
            variant: "primary",
            onClick: () => {
              var _0x39aba1;
              return _0x2f2fbe == null ||
                (_0x39aba1 = _0x2f2fbe.onApply) == null
                ? undefined
                : _0x39aba1.call(_0x2f2fbe, Math.max(1, _0x37e783 ?? 1));
            },
            children: _0x5e0f74.t("docs-list-ui.ok"),
          }),
        ],
      }),
    ],
  });
}
function T(_0x544bed, _0x49c390) {
  return function (_0x2dd2fd, _0x39cf8e) {
    _0x49c390(_0x2dd2fd, _0x39cf8e, _0x544bed);
  };
}
function E(_0x260200, _0x2089af, _0x360ccc, _0x41091c) {
  var _0x56d5c7 = arguments.length,
    _0x19a462 =
      _0x56d5c7 < 3
        ? _0x2089af
        : _0x41091c === null
          ? (_0x41091c = Object.getOwnPropertyDescriptor(_0x2089af, _0x360ccc))
          : _0x41091c,
    _0x242c33;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x19a462 = Reflect.decorate(_0x260200, _0x2089af, _0x360ccc, _0x41091c);
  else {
    for (var _0x38e38a = _0x260200.length - 1; _0x38e38a >= 0; _0x38e38a--)
      (_0x242c33 = _0x260200[_0x38e38a]) &&
        (_0x19a462 =
          (_0x56d5c7 < 3
            ? _0x242c33(_0x19a462)
            : _0x56d5c7 > 3
              ? _0x242c33(_0x2089af, _0x360ccc, _0x19a462)
              : _0x242c33(_0x2089af, _0x360ccc)) || _0x19a462);
  }
  return (
    _0x56d5c7 > 3 &&
      _0x19a462 &&
      Object.defineProperty(_0x2089af, _0x360ccc, _0x19a462),
    _0x19a462
  );
}
let D = class extends n.Disposable {
  constructor(_0x3e763c) {
    (super(), (this._componentManager = _0x3e763c), this._registerComponents());
  }
  _registerComponents() {
    (this.disposeWithMe(this._componentManager["register"](m, _)),
      this.disposeWithMe(this._componentManager["register"](y, b)),
      this.disposeWithMe(this._componentManager["register"](x, S)),
      this.disposeWithMe(this._componentManager["register"](C, w)));
  }
};
D = E([T(0, (0, n.Inject)(o.ComponentManager))], D);
function O(_0x1ac6d5) {
  "@babel/helpers - typeof";
  return (
    (O =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x4c0441) {
            return typeof _0x4c0441;
          }
        : function (_0x3b2e14) {
            return _0x3b2e14 &&
              typeof Symbol == "function" &&
              _0x3b2e14.constructor === Symbol &&
              _0x3b2e14 !== Symbol.prototype
              ? "symbol"
              : typeof _0x3b2e14;
          }),
    O(_0x1ac6d5)
  );
}
function k(_0x1daf9a, _0x22ac23) {
  if (O(_0x1daf9a) != "object" || !_0x1daf9a) return _0x1daf9a;
  var _0x1ab6b5 = _0x1daf9a[Symbol.toPrimitive];
  if (_0x1ab6b5 !== undefined) {
    var _0x543af5 = _0x1ab6b5.call(_0x1daf9a, _0x22ac23 || "default");
    if (O(_0x543af5) != "object") return _0x543af5;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x22ac23 === "string" ? String : Number)(_0x1daf9a);
}
function A(_0x46e960) {
  var _0x1bfcce = k(_0x46e960, "string");
  return O(_0x1bfcce) == "symbol" ? _0x1bfcce : _0x1bfcce + "";
}
function j(_0xadc011, _0x28e34a, _0x12e357) {
  return (
    (_0x28e34a = A(_0x28e34a)) in _0xadc011
      ? Object.defineProperty(_0xadc011, _0x28e34a, {
          value: _0x12e357,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0xadc011[_0x28e34a] = _0x12e357),
    _0xadc011
  );
}
const M = { marker: null, anchor: null, open: false };
var N = class {
  constructor() {
    (j(this, "_menuState$", new u["BehaviorSubject"](M)),
      j(this, "_markerSelection$", new u["BehaviorSubject"](null)),
      j(this, "menuState$", this._menuState$["asObservable"]()),
      j(this, "markerSelection$", this._markerSelection$["asObservable"]()));
  }
  get menuState() {
    return this._menuState$["value"];
  }
  get markerSelection() {
    return this._markerSelection$["value"];
  }
  nextClickMode(_0x440b0a) {
    let _0x1edb30 = this.markerSelection;
    return _0x1edb30 &&
      this._getMarkerGroupKey(_0x1edb30.marker) ===
        this._getMarkerGroupKey(_0x440b0a)
      ? e.DocsListSelectionMode["Item"]
      : e.DocsListSelectionMode["Level"];
  }
  contextMenuMode(_0x21bf96) {
    let _0xe60891 = this.markerSelection;
    return !_0xe60891 ||
      this._getMarkerListKey(_0xe60891.marker) !==
        this._getMarkerListKey(_0x21bf96)
      ? e.DocsListSelectionMode["Level"]
      : _0xe60891.mode === "list"
        ? e.DocsListSelectionMode["List"]
        : this._getMarkerGroupKey(_0xe60891.marker) ===
            this._getMarkerGroupKey(_0x21bf96)
          ? _0xe60891.mode
          : e.DocsListSelectionMode["Level"];
  }
  openMenu(_0x5a217a, _0x46674f) {
    this._menuState$["next"]({
      marker: _0x5a217a,
      anchor: _0x46674f,
      open: true,
    });
  }
  closeMenu() {
    this._menuState$["next"](M);
  }
  setMarkerSelection(_0x111868, _0x9c67c2) {
    this._markerSelection$["next"]({ marker: _0x111868, mode: _0x9c67c2 });
  }
  clearMarkerSelection() {
    this._markerSelection$["next"](null);
  }
  _getMarkerGroupKey(_0x55ec57) {
    return (
      (_0x55ec57.segmentId ?? "") +
      ":" +
      _0x55ec57.listId +
      ":" +
      _0x55ec57.nestingLevel
    );
  }
  _getMarkerListKey(_0x4ca121) {
    return (_0x4ca121.segmentId ?? "") + ":" + _0x4ca121.listId;
  }
};
let P = class extends n.Disposable {
  constructor(
    _0x348243,
    _0x4eb6b9,
    _0x69d30d,
    _0x14471c,
    _0x15471d,
    _0x10aa43,
    _0x3676cc,
    _0x18d4e5,
  ) {
    (super(),
      (this._context = _0x348243),
      (this._commandService = _0x4eb6b9),
      (this._docSelectionManagerService = _0x69d30d),
      (this._docEventManagerService = _0x14471c),
      (this._docCanvasPopManagerService = _0x15471d),
      (this._contextMenuService = _0x10aa43),
      (this._selectionService = _0x3676cc),
      (this._permissionService = _0x18d4e5),
      j(this, "_menuDisposable", null),
      j(this, "_docRangesBeforeMarkerPointer", null),
      j(this, "_ignoreTextSelectionBefore", 0),
      j(this, "_openContextMenuTimer", null),
      this._initMarkerPointerSelectionPreserve(),
      this._initMarkerClick(),
      this._initMarkerContextMenu(),
      this._initMarkerSelectionRender(),
      this._initTextSelectionClear(),
      this.disposeWithMe(
        this._permissionService["permissionPointUpdate$"].subscribe(() =>
          this._closeContextMenu(),
        ),
      ));
  }
  _initMarkerPointerSelectionPreserve() {
    let _0x29115c = this._context["mainComponent"] ?? this._context["scene"];
    this.disposeWithMe(
      _0x29115c.onPointerDown$["subscribeEvent"]({
        next: ([_0xacf3f9]) => {
          this._docEventManagerService["isPointerOnBullet"](
            _0xacf3f9.offsetX,
            _0xacf3f9.offsetY,
          )
            ? (this._docRangesBeforeMarkerPointer = [
                ...(this._docSelectionManagerService["getDocRanges"]() ?? []),
              ])
            : (this._docRangesBeforeMarkerPointer = null);
        },
        priority: -12000,
      }),
    );
  }
  _initMarkerClick() {
    this.disposeWithMe(
      this._docEventManagerService["clickBullets$"].subscribe((_0x35e0c5) => {
        let _0x41e284 = this._toMarkerInfo(_0x35e0c5);
        if (!I(_0x41e284.listType)) return;
        let _0x39ae75 = this._selectionService["nextClickMode"](_0x41e284);
        this._selectMarker(_0x41e284, _0x39ae75);
      }),
    );
  }
  _initMarkerContextMenu() {
    this.disposeWithMe(
      this._docEventManagerService["contextMenuBullets$"].subscribe(
        (_0x4af6b2) => {
          let _0xf9b05 = this._toMarkerInfo(_0x4af6b2);
          I(_0xf9b05.listType) &&
            this._openMarkerContextMenuFromOffset(
              _0xf9b05,
              _0x4af6b2.x,
              _0x4af6b2.y,
            );
        },
      ),
    );
  }
  _openMarkerContextMenuFromOffset(_0xfd7563, _0x262ada, _0x21e928) {
    let _0x260518 = z(_0x262ada, _0x21e928, this._context["scene"]),
      _0x11c18a = this._selectionService["contextMenuMode"](_0xfd7563);
    (this._selectionService["openMenu"](_0xfd7563, _0x260518),
      this._selectMarker(_0xfd7563, _0x11c18a),
      this._scheduleOpenContextMenu(_0xfd7563, _0x260518.x, _0x260518.y));
  }
  _scheduleOpenContextMenu(_0x2b3d04, _0x1458ba, _0x2502bb) {
    (this._clearOpenContextMenuTimer(),
      (this._openContextMenuTimer = setTimeout(() => {
        ((this._openContextMenuTimer = null),
          this._openContextMenu(_0x2b3d04, _0x1458ba, _0x2502bb));
      }, 0)));
  }
  _initMarkerSelectionRender() {
    (this.disposeWithMe(
      this._selectionService["markerSelection$"].subscribe(() =>
        this._makeDirty(),
      ),
    ),
      this.disposeWithMe(
        this._context["scene"].afterRender$["subscribe"]((_0x59c2cb) => {
          let _0x2238af = this._selectionService["markerSelection"];
          if (!_0x59c2cb || !_0x2238af) return;
          let _0x11f4a4 = _0x59c2cb.getContext();
          _0x11f4a4 && this._drawMarkerSelection(_0x11f4a4);
        }),
      ));
  }
  _initTextSelectionClear() {
    this.disposeWithMe(
      this._docSelectionManagerService["textSelection$"].subscribe(
        (_0x1ba4d1) => {
          Date.now() < this._ignoreTextSelectionBefore ||
            (this._selectionService["markerSelection"] &&
              (_0x1ba4d1.textRanges["length"] ||
                _0x1ba4d1.rectRanges["length"]) &&
              this._selectionService["clearMarkerSelection"]());
        },
      ),
    );
  }
  _openContextMenu(_0x1050d0, _0x1c65cd, _0x4468bb) {
    (this._contextMenuService["hideContextMenu"](),
      this._closeContextMenu(),
      (this._menuDisposable = this._docCanvasPopManagerService[
        "attachPopupToRect"
      ](
        {
          bottom: _0x4468bb,
          left: _0x1c65cd,
          right: _0x1c65cd,
          top: _0x4468bb,
        },
        {
          componentKey: m,
          direction: "bottom-left",
          extraProps: {
            marker: _0x1050d0,
            readOnly: !this._canEditDocument(),
            canDemote: _0x1050d0.nestingLevel < 8,
            canPromote: _0x1050d0.nestingLevel > 0,
            showNumberingControls: this._isOrderedMarker(_0x1050d0),
            onClose: () => this._closeContextMenu(),
            onDemote: () =>
              this._executeMarkerCommand(
                e.DocsListDemoteCommand["id"],
                _0x1050d0,
              ),
            onEditPrefixSuffix: () =>
              this._openPrefixSuffixDialog(_0x1050d0, _0x1c65cd, _0x4468bb),
            onMoreBullets: () =>
              this._openMoreBulletsDialog(_0x1050d0, _0x1c65cd, _0x4468bb),
            onPromote: () =>
              this._executeMarkerCommand(
                e.DocsListPromoteCommand["id"],
                _0x1050d0,
              ),
            onRestartAt: () =>
              this._openStartNumberDialog(_0x1050d0, _0x1c65cd, _0x4468bb),
            onSelectCurrentLevel: () =>
              this._selectMarkerAndClose(
                _0x1050d0,
                e.DocsListSelectionMode["Level"],
              ),
            onSelectCurrentList: () =>
              this._selectMarkerAndClose(
                _0x1050d0,
                e.DocsListSelectionMode["List"],
              ),
            onSelectItem: () =>
              this._selectMarkerAndClose(
                _0x1050d0,
                e.DocsListSelectionMode["Item"],
              ),
            onSetGlyphSymbol: (_0x4a14e8) =>
              this._executeMarkerCommand(
                e.DocsListSetGlyphSymbolCommand["id"],
                _0x1050d0,
                { symbol: _0x4a14e8 },
              ),
            onSetGlyphType: (_0x45d051) =>
              this._executeMarkerCommand(
                e.DocsListSetGlyphTypeCommand["id"],
                _0x1050d0,
                { glyphType: _0x45d051 },
              ),
            onSetPrefixSuffix: (_0x539641, _0x402252) =>
              this._executeMarkerCommand(
                e.DocsListSetPrefixSuffixCommand["id"],
                _0x1050d0,
                { prefix: _0x539641, suffix: _0x402252 },
              ),
            onSetStartNumber: (_0x182a0f) =>
              this._executeMarkerCommand(
                e.DocsListSetStartNumberCommand["id"],
                _0x1050d0,
                _0x182a0f === 1
                  ? { restartFromPrevious: true, startNumber: _0x182a0f }
                  : { startNumber: _0x182a0f },
              ),
          },
          onClickOutside: () => this._closeContextMenu(),
          onContextMenu: () => this._closeContextMenu(),
        },
        this._context["unitId"],
      )));
  }
  _openMoreBulletsDialog(_0x590ec9, _0x13a333, _0x436310) {
    (this._closeContextMenu(),
      (this._menuDisposable = this._docCanvasPopManagerService[
        "attachPopupToRect"
      ](
        this._getAnchorRect(_0x13a333, _0x436310),
        {
          componentKey: y,
          direction: "bottom-left",
          extraProps: {
            onClose: () => this._closeContextMenu(),
            onSelect: (_0x1c02ca) =>
              this._executeMarkerCommand(
                e.DocsListSetGlyphSymbolCommand["id"],
                _0x590ec9,
                { symbol: _0x1c02ca },
              ),
          },
          onClickOutside: () => this._closeContextMenu(),
          onContextMenu: () => this._closeContextMenu(),
        },
        this._context["unitId"],
      )));
  }
  _openPrefixSuffixDialog(_0x33a865, _0x413b46, _0x1eff2b) {
    this._isOrderedMarker(_0x33a865) &&
      (this._closeContextMenu(),
      (this._menuDisposable = this._docCanvasPopManagerService[
        "attachPopupToRect"
      ](
        this._getAnchorRect(_0x413b46, _0x1eff2b),
        {
          componentKey: x,
          direction: "bottom-left",
          extraProps: {
            onApply: (_0x1fa471, _0x34130a, _0x424e9f) =>
              this._executeMarkerCommand(
                e.DocsListSetPrefixSuffixCommand["id"],
                _0x33a865,
                { prefix: _0x1fa471, suffix: _0x34130a, mode: _0x424e9f },
              ),
            onClose: () => this._closeContextMenu(),
          },
          onClickOutside: () => this._closeContextMenu(),
          onContextMenu: () => this._closeContextMenu(),
        },
        this._context["unitId"],
      )));
  }
  _openStartNumberDialog(_0x36723b, _0x51edef, _0x2543d8) {
    (this._closeContextMenu(),
      (this._menuDisposable = this._docCanvasPopManagerService[
        "attachPopupToRect"
      ](
        this._getAnchorRect(_0x51edef, _0x2543d8),
        {
          componentKey: C,
          direction: "bottom-left",
          extraProps: {
            onApply: (_0x43e6f5) =>
              this._executeMarkerCommand(
                e.DocsListSetStartNumberCommand["id"],
                _0x36723b,
                { startNumber: _0x43e6f5 },
              ),
            onClose: () => this._closeContextMenu(),
          },
          onClickOutside: () => this._closeContextMenu(),
          onContextMenu: () => this._closeContextMenu(),
        },
        this._context["unitId"],
      )));
  }
  _closeContextMenu() {
    var _0x278df6;
    (this._clearOpenContextMenuTimer(),
      (_0x278df6 = this._menuDisposable) == null || _0x278df6.dispose(),
      (this._menuDisposable = null),
      this._selectionService["closeMenu"]());
  }
  _canEditDocument() {
    return (0, r.canEditDocumentTargets)(
      this._permissionService,
      this._context["unitId"],
      [],
    );
  }
  _clearOpenContextMenuTimer() {
    this._openContextMenuTimer != null &&
      (clearTimeout(this._openContextMenuTimer),
      (this._openContextMenuTimer = null));
  }
  _executeMarkerCommand(_0x12f4c9, _0x1cf67b, _0x4303d4 = {}) {
    (this._commandService["executeCommand"](_0x12f4c9, {
      paragraphStartIndex: _0x1cf67b.paragraphStartIndex,
      segmentId: _0x1cf67b.segmentId,
      mode: this._getCommandMode(_0x1cf67b, _0x4303d4.mode),
      ..._0x4303d4,
    }),
      this._closeContextMenu());
  }
  _getCommandMode(_0x262292, _0x516356) {
    if (
      _0x516356 === e.DocsListSelectionMode["Item"] ||
      _0x516356 === e.DocsListSelectionMode["Level"] ||
      _0x516356 === e.DocsListSelectionMode["List"]
    )
      return _0x516356;
    let _0x59b784 = this._selectionService["markerSelection"];
    return !_0x59b784 ||
      _0x59b784.marker["listId"] !== _0x262292.listId ||
      (_0x59b784.marker["segmentId"] ?? "") !== (_0x262292.segmentId ?? "")
      ? e.DocsListSelectionMode["Level"]
      : _0x59b784.mode;
  }
  _selectMarker(_0xc5df39, _0x208443) {
    let _0x2c9a0c = this._docRangesBeforeMarkerPointer ?? [
      ...(this._docSelectionManagerService["getDocRanges"]() ?? []),
    ];
    ((this._ignoreTextSelectionBefore = Date.now() + 400),
      this._selectionService["setMarkerSelection"](_0xc5df39, _0x208443),
      this._makeDirty(),
      (this._docRangesBeforeMarkerPointer = null),
      _0x2c9a0c.length &&
        queueMicrotask(() => {
          this._docSelectionManagerService["replaceDocRanges"](
            _0x2c9a0c,
            {
              unitId: this._context["unitId"],
              subUnitId: this._context["unitId"],
            },
            false,
            { forceFocus: false },
          );
        }));
  }
  _selectMarkerAndClose(_0x17a0ff, _0x1a029c) {
    (this._selectMarker(_0x17a0ff, _0x1a029c), this._closeContextMenu());
  }
  _drawMarkerSelection(_0x17aef8) {
    let _0x3a93b7 = this._getSelectedBulletBounds();
    _0x3a93b7.length &&
      (_0x17aef8.save(),
      (_0x17aef8.fillStyle = "#8ab4f8"),
      (_0x17aef8.globalAlpha = 0.45),
      _0x3a93b7.forEach((_0x2f4fb1) => {
        let _0x5f0372 = this._getMarkerSelectionRect(_0x2f4fb1);
        _0x17aef8.fillRect(
          _0x5f0372.x,
          _0x5f0372.y,
          _0x5f0372.width,
          _0x5f0372.height,
        );
      }),
      _0x17aef8.restore());
  }
  _getMarkerSelectionRect(_0x240bcf) {
    let _0x25c7fb = L(_0x240bcf.rect, this._context["scene"]),
      _0x26fae3 = this._isBulletMarker(_0x240bcf)
        ? _0x25c7fb.height * 0.72
        : _0x25c7fb.height * 1.15;
    return {
      ..._0x25c7fb,
      width: Math.min(_0x25c7fb.width, Math.max(8, _0x26fae3)),
    };
  }
  _isBulletMarker(_0x2f0391) {
    var _0x386df6, _0x1e2b2c, _0x4ad031, _0x3ce806;
    let _0x5d6af4 =
        (_0x386df6 = _0x2f0391.paragraph["bullet"]) == null
          ? undefined
          : _0x386df6.listType,
      _0x56aeed =
        ((_0x1e2b2c = _0x2f0391.paragraph["bullet"]) == null
          ? undefined
          : _0x1e2b2c.nestingLevel) ?? 0,
      _0x39ba2b =
        (_0x5d6af4 &&
          (((_0x4ad031 = this._context["unit"].lists) == null
            ? undefined
            : _0x4ad031[_0x5d6af4]) ??
            n.PRESET_LIST_TYPE[_0x5d6af4])) ||
        null,
      _0x4a4022 =
        _0x39ba2b == null || (_0x3ce806 = _0x39ba2b.nestingLevel) == null
          ? undefined
          : _0x3ce806[_0x56aeed];
    return (
      (_0x4a4022 == null ? undefined : _0x4a4022.glyphType) ===
        n.ListGlyphType["BULLET"] ||
      !!(_0x4a4022 != null && _0x4a4022.glyphSymbol)
    );
  }
  _isOrderedMarker(_0x52660f) {
    var _0x40ec37, _0x319557;
    let _0x38826e =
        ((_0x40ec37 = this._context["unit"].lists) == null
          ? undefined
          : _0x40ec37[_0x52660f.listType]) ??
        n.PRESET_LIST_TYPE[_0x52660f.listType],
      _0x41b3ab =
        _0x38826e == null || (_0x319557 = _0x38826e.nestingLevel) == null
          ? undefined
          : _0x319557[_0x52660f.nestingLevel];
    return !!(
      _0x41b3ab &&
      _0x41b3ab.glyphType !== n.ListGlyphType["BULLET"] &&
      !_0x41b3ab.glyphSymbol
    );
  }
  _getSelectedBulletBounds() {
    let _0x54ac2d = this._selectionService["markerSelection"];
    if (!_0x54ac2d) return [];
    let { marker: _0x1bcb35, mode: _0x481246 } = _0x54ac2d;
    return I(_0x1bcb35.listType)
      ? this._getSelectedFallbackBulletBounds(_0x1bcb35, _0x481246).concat(
          this._docEventManagerService["getBulletBounds"]().filter(
            (_0x3fccfd) =>
              this._isMarkerBoundSelected(_0x3fccfd, _0x1bcb35, _0x481246) &&
              !this._hasFallbackBoundForMarker(
                _0x3fccfd.paragraph["startIndex"],
                _0x3fccfd.segmentId,
              ),
          ),
        )
      : [];
  }
  _getSelectedFallbackBulletBounds(_0x5dd3a8, _0x59c834) {
    var _0x294b1e;
    return (
      ((_0x294b1e = this._context["unit"].getBody()) == null
        ? undefined
        : _0x294b1e.paragraphs) ?? []
    )
      .filter((_0x5a7668) =>
        this._isParagraphSelected(_0x5a7668, _0x5dd3a8, _0x59c834),
      )
      .map((_0x5c2ca1) => {
        let _0xa3294f = this._docEventManagerService[
          "findParagraphBoundByIndex"
        ](_0x5c2ca1.startIndex);
        return F(_0xa3294f)
          ? (0, i.getListMarkerFallbackBound)(_0xa3294f, _0x5c2ca1)
          : null;
      })
      .filter((_0x422c89) => _0x422c89 != null);
  }
  _hasFallbackBoundForMarker(_0x2ac28d, _0x1ee713) {
    let _0x1c6d2d =
      this._docEventManagerService["findParagraphBoundByIndex"](_0x2ac28d);
    return F(_0x1c6d2d) && (_0x1c6d2d.segmentId ?? "") === (_0x1ee713 ?? "");
  }
  _isMarkerBoundSelected(_0x5a5418, _0x4c4092, _0x1772d3) {
    return (
      this._isParagraphSelected(_0x5a5418.paragraph, _0x4c4092, _0x1772d3) &&
      (_0x5a5418.segmentId ?? "") === (_0x4c4092.segmentId ?? "")
    );
  }
  _isParagraphSelected(_0x3c8620, _0x482e71, _0x35b285) {
    let _0xdbb0c0 = _0x3c8620.bullet;
    return !_0xdbb0c0 ||
      _0xdbb0c0.listId !== _0x482e71.listId ||
      !I(_0xdbb0c0.listType)
      ? false
      : _0x35b285 === "item"
        ? _0x3c8620.startIndex === _0x482e71.paragraphStartIndex
        : _0x35b285 === "list" ||
          _0xdbb0c0.nestingLevel === _0x482e71.nestingLevel;
  }
  _makeDirty() {
    var _0x3f5116;
    ((_0x3f5116 = this._context["mainComponent"]) == null ||
      _0x3f5116.makeDirty(true),
      this._context["scene"].makeDirty());
  }
  _getAnchorRect(_0x52f8b5, _0x3e7d90) {
    return {
      bottom: _0x3e7d90,
      left: _0x52f8b5,
      right: _0x52f8b5,
      top: _0x3e7d90,
    };
  }
  _toMarkerInfo(_0x2cb8b1) {
    var _0x750ea3, _0xdd4588, _0x42b4ad;
    return {
      paragraphStartIndex: _0x2cb8b1.paragraph["startIndex"],
      listId:
        ((_0x750ea3 = _0x2cb8b1.paragraph["bullet"]) == null
          ? undefined
          : _0x750ea3.listId) ?? "",
      listType:
        ((_0xdd4588 = _0x2cb8b1.paragraph["bullet"]) == null
          ? undefined
          : _0xdd4588.listType) ?? "",
      nestingLevel:
        ((_0x42b4ad = _0x2cb8b1.paragraph["bullet"]) == null
          ? undefined
          : _0x42b4ad.nestingLevel) ?? 0,
      segmentId: _0x2cb8b1.segmentId,
    };
  }
};
P = E(
  [
    T(1, n.ICommandService),
    T(2, (0, n.Inject)(r.DocSelectionManagerService)),
    T(3, (0, n.Inject)(i.DocEventManagerService)),
    T(4, (0, n.Inject)(i.DocCanvasPopManagerService)),
    T(5, o.IContextMenuService),
    T(6, (0, n.Inject)(N)),
    T(7, n.IPermissionService),
  ],
  P,
);
function F(_0x48e5e7) {
  return !!(
    _0x48e5e7 &&
    typeof _0x48e5e7 == "object" &&
    "tableId" in _0x48e5e7
  );
}
function I(_0x5db42e) {
  return (
    _0x5db42e !== n.PresetListType["CHECK_LIST"] &&
    _0x5db42e !== n.PresetListType["CHECK_LIST_CHECKED"]
  );
}
function L(_0x164166, _0x4f436e) {
  let _0x3dbeb0 = R(_0x164166.left, _0x164166.top, _0x4f436e),
    _0x130da5 = R(_0x164166.right, _0x164166.bottom, _0x4f436e);
  return {
    height: _0x130da5.y - _0x3dbeb0.y,
    width: _0x130da5.x - _0x3dbeb0.x,
    x: _0x3dbeb0.x,
    y: _0x3dbeb0.y,
  };
}
function R(_0x60a8b0, _0x1e163d, _0x30a244) {
  let { scaleX: _0xc0f114, scaleY: _0x5559ac } = _0x30a244.getAncestorScale(),
    _0x40e260 = _0x30a244.getViewport("viewMain");
  return _0x40e260
    ? {
        x: (_0x60a8b0 - _0x40e260.viewportScrollX) * _0xc0f114,
        y: (_0x1e163d - _0x40e260.viewportScrollY) * _0x5559ac,
      }
    : { x: _0x60a8b0, y: _0x1e163d };
}
function z(_0x32c711, _0xb8b623, _0x364347) {
  let { scaleX: _0x170e5b, scaleY: _0x2a70a8 } = _0x364347.getAncestorScale(),
    _0x224288 = _0x364347.getViewport("viewMain");
  return _0x224288
    ? {
        x: _0x32c711 / _0x170e5b + _0x224288.viewportScrollX,
        y: _0xb8b623 / _0x2a70a8 + _0x224288.viewportScrollY,
      }
    : { x: _0x32c711, y: _0xb8b623 };
}
let B = class extends n.Plugin {
  constructor(_0x42d665 = p, _0x1b4c81, _0x4f588d, _0x29dbfa) {
    (super(),
      (this._config = _0x42d665),
      (this._injector = _0x1b4c81),
      (this._renderManagerService = _0x4f588d),
      (this._configService = _0x29dbfa));
    let { menu: _0x52be83, ..._0x26cfce } = (0, n.merge)({}, p, this._config);
    (_0x52be83 &&
      this._configService["setConfig"]("menu", _0x52be83, { merge: true }),
      this._configService["setConfig"]("docs-list-ui.config", _0x26cfce));
  }
  onStarting() {
    (this._injector["add"]([D]),
      this._injector["add"]([N]),
      this._injector["get"](N),
      this._injector["get"](D));
  }
  onRendered() {
    this.disposeWithMe(
      this._renderManagerService["registerRenderModule"](
        n.UniverInstanceType["UNIVER_DOC"],
        [P],
      ),
    );
  }
};
(j(B, "pluginName", e.DOCS_LIST_PLUGIN + "_UI_PLUGIN"),
  j(B, "packageName", d),
  j(B, "version", f),
  j(B, "type", n.UniverInstanceType["UNIVER_DOC"]),
  (B = E(
    [
      (0, n.DependentOn)(
        t.UniverLicensePlugin,
        r.UniverDocsPlugin,
        a.UniverRenderEnginePlugin,
        i.UniverDocsUIPlugin,
        e.UniverDocsListPlugin,
      ),
      T(1, (0, n.Inject)(n.Injector)),
      T(2, a.IRenderManagerService),
      T(3, n.IConfigService),
    ],
    B,
  )),
  Object.defineProperty(exports, "UniverDocsListUIPlugin", {
    enumerable: true,
    get: function () {
      return B;
    },
  }));
