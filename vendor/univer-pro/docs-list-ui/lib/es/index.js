import {
  DOCS_LIST_MORE_BULLETS as _0x24731a,
  DOCS_LIST_PLUGIN as _0x4cbc05,
  DocsListDemoteCommand as _0x646d92,
  DocsListPromoteCommand as _0x57f52a,
  DocsListSelectionMode as _0x5f02fa,
  DocsListSetGlyphSymbolCommand as _0x4c7748,
  DocsListSetGlyphTypeCommand as _0x804a31,
  DocsListSetPrefixSuffixCommand as _0x2dd3d5,
  DocsListSetStartNumberCommand as _0x3aa8f3,
  UniverDocsListPlugin as _0x568ffc,
} from "@univerjs-pro/docs-list";
import { UniverLicensePlugin as _0x27c08f } from "@univerjs-pro/license";
import {
  DependentOn as _0x123352,
  Disposable as _0x21742f,
  ICommandService as _0x4b4ece,
  IConfigService as _0x42b59f,
  IPermissionService as _0x46555a,
  Inject as _0x414337,
  Injector as _0x193bca,
  ListGlyphType as _0x467b9a,
  LocaleService as _0xfb05e2,
  PRESET_LIST_TYPE as _0x1e47d7,
  Plugin as _0x1057e2,
  PresetListType as _0x44d382,
  UniverInstanceType as _0x36cace,
  merge as _0x28d77e,
} from "@univerjs/core";
import {
  DocSelectionManagerService as _0x15bf19,
  UniverDocsPlugin as _0x523518,
  canEditDocumentTargets as _0x5514c5,
} from "@univerjs/docs";
import {
  DocCanvasPopManagerService as _0x4f65b8,
  DocEventManagerService as _0x169b56,
  UniverDocsUIPlugin as _0x4beabb,
  getListMarkerFallbackBound as _0x53f87d,
} from "@univerjs/docs-ui";
import {
  IRenderManagerService as _0x221d60,
  UniverRenderEnginePlugin as _0x4fcf60,
} from "@univerjs/engine-render";
import {
  ComponentManager as _0x555418,
  IContextMenuService as _0x143ca2,
  useDependency as _0x4c08c1,
} from "@univerjs/ui";
import {
  Button as _0xadbd90,
  Checkbox as _0x457826,
  Input as _0x2a7f83,
  InputNumber as _0x33ec6f,
  Separator as _0x3aaf5f,
} from "@univerjs/design";
import {
  Fragment as _0x28e6d5,
  jsx as _0x6ce555,
  jsxs as _0x2a24ed,
} from "react/jsx-runtime";
import { useMemo as _0x16d5eb, useState as _0x3e8395 } from "react";
import { BehaviorSubject as _0x235790 } from "rxjs";
var j = "@univerjs-pro/docs-list-ui",
  M = "1.0.0-insiders.20260907-70fc579";
const N = {},
  P = "docs-list-ui.context-menu",
  F = [
    { label: "1", type: _0x467b9a.DECIMAL },
    { label: "A", type: _0x467b9a.UPPER_LETTER },
    { label: "a", type: _0x467b9a.LOWER_LETTER },
    { label: "I", type: _0x467b9a.UPPER_ROMAN },
    { label: "i", type: _0x467b9a.LOWER_ROMAN },
  ],
  I = ["●", "○", "■", "➢", "★"];
function L(_0x4ecd38) {
  var _0x5d4e84;
  let _0x243d46 =
      (_0x5d4e84 = _0x4ecd38.popup) == null ? undefined : _0x5d4e84.extraProps,
    _0x13808d = _0x4c08c1(_0xfb05e2);
  return _0x2a24ed("section", {
    className:
      "univer-box-border\x20univer-w-48\x20univer-rounded-lg\x20univer-border\x20univer-border-solid\x20univer-border-gray-200\x20univer-bg-gray-0\x20univer-py-1.5\x20univer-text-xs\x20univer-shadow-lg",
    "data-u-comp": P,
    children: [
      _0x6ce555("div", {
        className:
          "univer-grid univer-grid-cols-5 univer-justify-items-center univer-gap-1 univer-px-2.5 univer-py-1",
        children: F.map((_0x41cc0d) =>
          _0x6ce555(
            _0xadbd90,
            {
              size: "small",
              type: "button",
              disabled: _0x243d46 == null ? undefined : _0x243d46.readOnly,
              onClick: () => {
                var _0x290885;
                return _0x243d46 == null ||
                  (_0x290885 = _0x243d46.onSetGlyphType) == null
                  ? undefined
                  : _0x290885.call(_0x243d46, _0x41cc0d.type);
              },
              children: _0x41cc0d.label,
            },
            _0x41cc0d.label,
          ),
        ),
      }),
      _0x6ce555(_0x3aaf5f, {}),
      _0x6ce555("div", {
        className:
          "univer-grid\x20univer-grid-cols-5\x20univer-justify-items-center\x20univer-gap-1\x20univer-px-2.5\x20univer-py-1",
        children: I.map((_0x2fa0ff) =>
          _0x6ce555(
            _0xadbd90,
            {
              size: "small",
              type: "button",
              disabled: _0x243d46 == null ? undefined : _0x243d46.readOnly,
              onClick: () => {
                var _0x574ee3;
                return _0x243d46 == null ||
                  (_0x574ee3 = _0x243d46.onSetGlyphSymbol) == null
                  ? undefined
                  : _0x574ee3.call(_0x243d46, _0x2fa0ff);
              },
              children: _0x2fa0ff,
            },
            _0x2fa0ff,
          ),
        ),
      }),
      _0x6ce555(_0x3aaf5f, {}),
      _0x6ce555(R, {
        disabled: _0x243d46 == null ? undefined : _0x243d46.readOnly,
        onClick: _0x243d46 == null ? undefined : _0x243d46.onMoreBullets,
        children: _0x13808d.t("docs-list-ui.moreBullets"),
      }),
      (_0x243d46 == null ? undefined : _0x243d46.showNumberingControls) &&
        _0x2a24ed(_0x28e6d5, {
          children: [
            _0x6ce555(R, {
              disabled: _0x243d46 == null ? undefined : _0x243d46.readOnly,
              onClick:
                _0x243d46 == null ? undefined : _0x243d46.onEditPrefixSuffix,
              children: _0x13808d.t("docs-list-ui.editPrefixSuffix"),
            }),
            _0x6ce555(R, {
              disabled: _0x243d46 == null ? undefined : _0x243d46.readOnly,
              onClick: () => {
                var _0x564a9b;
                return _0x243d46 == null ||
                  (_0x564a9b = _0x243d46.onSetStartNumber) == null
                  ? undefined
                  : _0x564a9b.call(_0x243d46, 1);
              },
              children: _0x13808d.t("docs-list-ui.restartNumbering"),
            }),
            _0x6ce555(R, {
              disabled: _0x243d46 == null ? undefined : _0x243d46.readOnly,
              onClick: _0x243d46 == null ? undefined : _0x243d46.onRestartAt,
              children: _0x13808d.t("docs-list-ui.restartAt"),
            }),
          ],
        }),
      _0x6ce555(R, {
        disabled:
          (_0x243d46 == null ? undefined : _0x243d46.readOnly) ||
          !(_0x243d46 != null && _0x243d46.canPromote),
        onClick: _0x243d46 == null ? undefined : _0x243d46.onPromote,
        children: _0x13808d.t("docs-list-ui.promote"),
      }),
      _0x6ce555(R, {
        disabled:
          (_0x243d46 == null ? undefined : _0x243d46.readOnly) ||
          !(_0x243d46 != null && _0x243d46.canDemote),
        onClick: _0x243d46 == null ? undefined : _0x243d46.onDemote,
        children: _0x13808d.t("docs-list-ui.demote"),
      }),
      _0x6ce555(_0x3aaf5f, {}),
      _0x6ce555(R, {
        onClick: _0x243d46 == null ? undefined : _0x243d46.onSelectItem,
        children: _0x13808d.t("docs-list-ui.selectListItem"),
      }),
      _0x6ce555(R, {
        onClick: _0x243d46 == null ? undefined : _0x243d46.onSelectCurrentLevel,
        children: _0x13808d.t("docs-list-ui.selectCurrentLevel"),
      }),
      _0x6ce555(R, {
        onClick: _0x243d46 == null ? undefined : _0x243d46.onSelectCurrentList,
        children: _0x13808d.t("docs-list-ui.selectCurrentList"),
      }),
    ],
  });
}
function R(_0x3565d7) {
  return _0x6ce555(_0xadbd90, {
    size: "small",
    variant: "ghost",
    type: "button",
    className: "univer-w-full univer-justify-start",
    disabled: _0x3565d7.disabled,
    onClick: (_0x3b9957) => {
      var _0x2f93a8;
      (_0x3b9957.preventDefault(),
        (_0x2f93a8 = _0x3565d7.onClick) == null || _0x2f93a8.call(_0x3565d7));
    },
    children: _0x3565d7.children,
  });
}
const z = "docs-list-ui.more-bullets-dialog";
function _e(_0x2d16fd) {
  var _0x52dbc4;
  let _0x435d92 =
      (_0x52dbc4 = _0x2d16fd.popup) == null ? undefined : _0x52dbc4.extraProps,
    _0x101bb5 = _0x4c08c1(_0xfb05e2),
    _0x388433 = _0x16d5eb(
      () =>
        _0x24731a.map((_0x5bda24, _0x11146e) => ({
          id: _0x5bda24 + "-" + _0x11146e,
          symbol: _0x5bda24,
        })),
      [],
    );
  return _0x2a24ed("section", {
    className:
      "univer-box-border\x20univer-w-[420px]\x20univer-rounded-lg\x20univer-border\x20univer-border-solid\x20univer-border-gray-200\x20univer-bg-gray-0\x20univer-p-4\x20univer-text-sm\x20univer-shadow-lg",
    "data-u-comp": z,
    children: [
      _0x2a24ed("header", {
        className:
          "univer-mb-3 univer-flex univer-items-center univer-justify-between",
        children: [
          _0x6ce555("h2", {
            className:
              "univer-m-0\x20univer-text-lg\x20univer-font-medium\x20univer-text-gray-900",
            children: _0x101bb5.t("docs-list-ui.moreBullets"),
          }),
          _0x6ce555(_0xadbd90, {
            type: "button",
            size: "icon",
            variant: "ghost",
            className: "univer-text-xl",
            onClick: _0x435d92 == null ? undefined : _0x435d92.onClose,
            "aria-label": _0x101bb5.t("docs-list-ui.close"),
            children: "×",
          }),
        ],
      }),
      _0x6ce555("div", {
        className:
          "univer-grid univer-max-h-[260px] univer-grid-cols-10 univer-gap-1 univer-overflow-y-auto univer-pr-1",
        children: _0x388433.map(({ id: _0x585ef1, symbol: _0x566984 }) =>
          _0x6ce555(
            _0xadbd90,
            {
              type: "button",
              size: "icon",
              className: "univer-text-base",
              onClick: () => {
                var _0xac87b9;
                return _0x435d92 == null ||
                  (_0xac87b9 = _0x435d92.onSelect) == null
                  ? undefined
                  : _0xac87b9.call(_0x435d92, _0x566984);
              },
              children: _0x566984,
            },
            _0x585ef1,
          ),
        ),
      }),
    ],
  });
}
const B = "docs-list-ui.prefix-suffix-dialog";
function ve(_0x9dc725) {
  var _0x351d10;
  let _0x11fa1b =
      (_0x351d10 = _0x9dc725.popup) == null ? undefined : _0x351d10.extraProps,
    _0x4b1c14 = _0x4c08c1(_0xfb05e2),
    [_0x4537c6, _0x2b0ee3] = _0x3e8395(""),
    [_0x491b1a, _0xc483d4] = _0x3e8395("."),
    [_0x527e14, _0x833fe] = _0x3e8395(true);
  return _0x2a24ed("form", {
    className:
      "univer-box-border univer-w-[456px] univer-rounded-xl univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-6 univer-text-sm univer-shadow-xl",
    onSubmit: (_0x2eb46e) => {
      var _0x8dfe01;
      (_0x2eb46e.preventDefault(),
        _0x11fa1b == null ||
          (_0x8dfe01 = _0x11fa1b.onApply) == null ||
          _0x8dfe01.call(
            _0x11fa1b,
            _0x4537c6,
            _0x491b1a,
            _0x527e14 ? _0x5f02fa.List : _0x5f02fa.Level,
          ));
    },
    children: [
      _0x6ce555("h2", {
        className:
          "univer-m-0\x20univer-mb-6\x20univer-text-3xl\x20univer-font-medium\x20univer-text-gray-900",
        children: _0x4b1c14.t("docs-list-ui.prefixAndSuffix"),
      }),
      _0x2a24ed("div", {
        className: "univer-flex univer-items-end univer-gap-4",
        children: [
          _0x2a24ed("label", {
            className:
              "univer-flex univer-w-44 univer-flex-none univer-flex-col univer-gap-2 univer-text-sm univer-font-medium univer-text-gray-700",
            children: [
              _0x6ce555("span", {
                children: _0x4b1c14.t("docs-list-ui.prefix"),
              }),
              _0x6ce555(_0x2a7f83, {
                size: "large",
                inputClass: "univer-h-16\x20univer-text-xl",
                value: _0x4537c6,
                onChange: _0x2b0ee3,
                placeholder: _0x4b1c14.t("docs-list-ui.noPrefix"),
              }),
            ],
          }),
          _0x6ce555("span", {
            className:
              "univer-w-6 univer-flex-none univer-pb-5 univer-text-center univer-text-xl univer-text-gray-700",
            children: "A",
          }),
          _0x2a24ed("label", {
            className:
              "univer-flex univer-w-44 univer-flex-none univer-flex-col univer-gap-2 univer-text-sm univer-font-medium univer-text-gray-700",
            children: [
              _0x6ce555("span", {
                children: _0x4b1c14.t("docs-list-ui.suffix"),
              }),
              _0x6ce555(_0x2a7f83, {
                size: "large",
                inputClass: "univer-h-16 univer-text-xl",
                value: _0x491b1a,
                onChange: _0xc483d4,
              }),
            ],
          }),
        ],
      }),
      _0x6ce555(_0x457826, {
        className: "univer-mt-6 univer-text-xl",
        checked: _0x527e14,
        onChange: (_0x1bc73e) => _0x833fe(!!_0x1bc73e),
        children: _0x4b1c14.t("docs-list-ui.applyToEntireList"),
      }),
      _0x2a24ed("footer", {
        className:
          "univer-mt-10 univer-flex univer-items-center univer-justify-end univer-gap-4",
        children: [
          _0x6ce555(_0xadbd90, {
            type: "button",
            variant: "default",
            onClick: _0x11fa1b == null ? undefined : _0x11fa1b.onClose,
            children: _0x4b1c14.t("docs-list-ui.cancel"),
          }),
          _0x6ce555(_0xadbd90, {
            type: "submit",
            variant: "primary",
            children: _0x4b1c14.t("docs-list-ui.ok"),
          }),
        ],
      }),
    ],
  });
}
const V = "docs-list-ui.start-number-dialog";
function ye(_0x1c4cf2) {
  var _0x1ac240;
  let _0x711b2b =
      (_0x1ac240 = _0x1c4cf2.popup) == null ? undefined : _0x1ac240.extraProps,
    _0x3773ca = _0x4c08c1(_0xfb05e2),
    [_0x5bb961, _0x318973] = _0x3e8395(1);
  return _0x2a24ed("section", {
    className:
      "univer-box-border univer-w-[260px] univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-4 univer-text-sm univer-shadow-lg",
    "data-u-comp": V,
    children: [
      _0x6ce555("h2", {
        className:
          "univer-m-0 univer-mb-3 univer-text-lg univer-font-medium univer-text-gray-900",
        children: _0x3773ca.t("docs-list-ui.restartAt"),
      }),
      _0x6ce555(_0x33ec6f, {
        className: "univer-w-full",
        min: 1,
        step: 1,
        precision: 0,
        value: _0x5bb961,
        onChange: _0x318973,
      }),
      _0x2a24ed("footer", {
        className: "univer-mt-4 univer-flex univer-justify-end univer-gap-2",
        children: [
          _0x6ce555(_0xadbd90, {
            type: "button",
            variant: "default",
            onClick: _0x711b2b == null ? undefined : _0x711b2b.onClose,
            children: _0x3773ca.t("docs-list-ui.cancel"),
          }),
          _0x6ce555(_0xadbd90, {
            type: "button",
            variant: "primary",
            onClick: () => {
              var _0xb8f1c9;
              return _0x711b2b == null ||
                (_0xb8f1c9 = _0x711b2b.onApply) == null
                ? undefined
                : _0xb8f1c9.call(_0x711b2b, Math.max(1, _0x5bb961 ?? 1));
            },
            children: _0x3773ca.t("docs-list-ui.ok"),
          }),
        ],
      }),
    ],
  });
}
function H(_0x2f4dca, _0x1ef3e6) {
  return function (_0x14f522, _0x3dacd2) {
    _0x1ef3e6(_0x14f522, _0x3dacd2, _0x2f4dca);
  };
}
function U(_0x39cc9b, _0x3f0cf6, _0x290045, _0x5cc83f) {
  var _0xd964ee = arguments.length,
    _0x4b159c =
      _0xd964ee < 3
        ? _0x3f0cf6
        : _0x5cc83f === null
          ? (_0x5cc83f = Object.getOwnPropertyDescriptor(_0x3f0cf6, _0x290045))
          : _0x5cc83f,
    _0x37d858;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x4b159c = Reflect.decorate(_0x39cc9b, _0x3f0cf6, _0x290045, _0x5cc83f);
  else {
    for (var _0x38348f = _0x39cc9b.length - 1; _0x38348f >= 0; _0x38348f--)
      (_0x37d858 = _0x39cc9b[_0x38348f]) &&
        (_0x4b159c =
          (_0xd964ee < 3
            ? _0x37d858(_0x4b159c)
            : _0xd964ee > 3
              ? _0x37d858(_0x3f0cf6, _0x290045, _0x4b159c)
              : _0x37d858(_0x3f0cf6, _0x290045)) || _0x4b159c);
  }
  return (
    _0xd964ee > 3 &&
      _0x4b159c &&
      Object.defineProperty(_0x3f0cf6, _0x290045, _0x4b159c),
    _0x4b159c
  );
}
let W = class extends _0x21742f {
  constructor(_0xb6bc95) {
    (super(), (this._componentManager = _0xb6bc95), this._registerComponents());
  }
  _registerComponents() {
    (this.disposeWithMe(this._componentManager["register"](P, L)),
      this.disposeWithMe(this._componentManager["register"](z, _e)),
      this.disposeWithMe(this._componentManager["register"](B, ve)),
      this.disposeWithMe(this._componentManager["register"](V, ye)));
  }
};
W = U([H(0, _0x414337(_0x555418))], W);
function G(_0x396570) {
  "@babel/helpers - typeof";
  return (
    (G =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x3381c5) {
            return typeof _0x3381c5;
          }
        : function (_0x1f9966) {
            return _0x1f9966 &&
              typeof Symbol == "function" &&
              _0x1f9966.constructor === Symbol &&
              _0x1f9966 !== Symbol.prototype
              ? "symbol"
              : typeof _0x1f9966;
          }),
    G(_0x396570)
  );
}
function be(_0x17b6da, _0x56c93d) {
  if (G(_0x17b6da) != "object" || !_0x17b6da) return _0x17b6da;
  var _0x226df7 = _0x17b6da[Symbol.toPrimitive];
  if (_0x226df7 !== undefined) {
    var _0x434aca = _0x226df7.call(_0x17b6da, _0x56c93d || "default");
    if (G(_0x434aca) != "object") return _0x434aca;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x56c93d === "string" ? String : Number)(_0x17b6da);
}
function xe(_0x2035be) {
  var _0x5d0065 = be(_0x2035be, "string");
  return G(_0x5d0065) == "symbol" ? _0x5d0065 : _0x5d0065 + "";
}
function K(_0x72541d, _0x2f8a36, _0x1d0b86) {
  return (
    (_0x2f8a36 = xe(_0x2f8a36)) in _0x72541d
      ? Object.defineProperty(_0x72541d, _0x2f8a36, {
          value: _0x1d0b86,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x72541d[_0x2f8a36] = _0x1d0b86),
    _0x72541d
  );
}
const q = { marker: null, anchor: null, open: false };
var J = class {
  constructor() {
    (K(this, "_menuState$", new _0x235790(q)),
      K(this, "_markerSelection$", new _0x235790(null)),
      K(this, "menuState$", this._menuState$["asObservable"]()),
      K(this, "markerSelection$", this._markerSelection$["asObservable"]()));
  }
  get menuState() {
    return this._menuState$["value"];
  }
  get markerSelection() {
    return this._markerSelection$["value"];
  }
  nextClickMode(_0x465105) {
    let _0x297420 = this.markerSelection;
    return _0x297420 &&
      this._getMarkerGroupKey(_0x297420.marker) ===
        this._getMarkerGroupKey(_0x465105)
      ? _0x5f02fa.Item
      : _0x5f02fa.Level;
  }
  contextMenuMode(_0x554466) {
    let _0x25e466 = this.markerSelection;
    return !_0x25e466 ||
      this._getMarkerListKey(_0x25e466.marker) !==
        this._getMarkerListKey(_0x554466)
      ? _0x5f02fa.Level
      : _0x25e466.mode === "list"
        ? _0x5f02fa.List
        : this._getMarkerGroupKey(_0x25e466.marker) ===
            this._getMarkerGroupKey(_0x554466)
          ? _0x25e466.mode
          : _0x5f02fa.Level;
  }
  openMenu(_0x179145, _0x34be0f) {
    this._menuState$["next"]({
      marker: _0x179145,
      anchor: _0x34be0f,
      open: true,
    });
  }
  closeMenu() {
    this._menuState$["next"](q);
  }
  setMarkerSelection(_0x2f9a92, _0x10140f) {
    this._markerSelection$["next"]({ marker: _0x2f9a92, mode: _0x10140f });
  }
  clearMarkerSelection() {
    this._markerSelection$["next"](null);
  }
  _getMarkerGroupKey(_0x52daa7) {
    return (
      (_0x52daa7.segmentId ?? "") +
      ":" +
      _0x52daa7.listId +
      ":" +
      _0x52daa7.nestingLevel
    );
  }
  _getMarkerListKey(_0x478e0a) {
    return (_0x478e0a.segmentId ?? "") + ":" + _0x478e0a.listId;
  }
};
let Y = class extends _0x21742f {
  constructor(
    _0x222a3a,
    _0x5ab969,
    _0x576db4,
    _0x348fb8,
    _0x38fbd7,
    _0x222ff0,
    _0x362f71,
    _0x435d0f,
  ) {
    (super(),
      (this._context = _0x222a3a),
      (this._commandService = _0x5ab969),
      (this._docSelectionManagerService = _0x576db4),
      (this._docEventManagerService = _0x348fb8),
      (this._docCanvasPopManagerService = _0x38fbd7),
      (this._contextMenuService = _0x222ff0),
      (this._selectionService = _0x362f71),
      (this._permissionService = _0x435d0f),
      K(this, "_menuDisposable", null),
      K(this, "_docRangesBeforeMarkerPointer", null),
      K(this, "_ignoreTextSelectionBefore", 0),
      K(this, "_openContextMenuTimer", null),
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
    let _0x1176a1 = this._context["mainComponent"] ?? this._context["scene"];
    this.disposeWithMe(
      _0x1176a1.onPointerDown$["subscribeEvent"]({
        next: ([_0x185cb3]) => {
          this._docEventManagerService["isPointerOnBullet"](
            _0x185cb3.offsetX,
            _0x185cb3.offsetY,
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
      this._docEventManagerService["clickBullets$"].subscribe((_0x5ad28c) => {
        let _0x338c92 = this._toMarkerInfo(_0x5ad28c);
        if (!Z(_0x338c92.listType)) return;
        let _0x55158d = this._selectionService["nextClickMode"](_0x338c92);
        this._selectMarker(_0x338c92, _0x55158d);
      }),
    );
  }
  _initMarkerContextMenu() {
    this.disposeWithMe(
      this._docEventManagerService["contextMenuBullets$"].subscribe(
        (_0x5ce7f3) => {
          let _0x332a3d = this._toMarkerInfo(_0x5ce7f3);
          Z(_0x332a3d.listType) &&
            this._openMarkerContextMenuFromOffset(
              _0x332a3d,
              _0x5ce7f3.x,
              _0x5ce7f3.y,
            );
        },
      ),
    );
  }
  _openMarkerContextMenuFromOffset(_0x282b2e, _0x5e7328, _0x66ed41) {
    let _0x470a9f = Ce(_0x5e7328, _0x66ed41, this._context["scene"]),
      _0x2bad71 = this._selectionService["contextMenuMode"](_0x282b2e);
    (this._selectionService["openMenu"](_0x282b2e, _0x470a9f),
      this._selectMarker(_0x282b2e, _0x2bad71),
      this._scheduleOpenContextMenu(_0x282b2e, _0x470a9f.x, _0x470a9f.y));
  }
  _scheduleOpenContextMenu(_0x51047d, _0x2324b7, _0x34f440) {
    (this._clearOpenContextMenuTimer(),
      (this._openContextMenuTimer = setTimeout(() => {
        ((this._openContextMenuTimer = null),
          this._openContextMenu(_0x51047d, _0x2324b7, _0x34f440));
      }, 0)));
  }
  _initMarkerSelectionRender() {
    (this.disposeWithMe(
      this._selectionService["markerSelection$"].subscribe(() =>
        this._makeDirty(),
      ),
    ),
      this.disposeWithMe(
        this._context["scene"].afterRender$["subscribe"]((_0x4de645) => {
          let _0x5b047d = this._selectionService["markerSelection"];
          if (!_0x4de645 || !_0x5b047d) return;
          let _0x223fd2 = _0x4de645.getContext();
          _0x223fd2 && this._drawMarkerSelection(_0x223fd2);
        }),
      ));
  }
  _initTextSelectionClear() {
    this.disposeWithMe(
      this._docSelectionManagerService["textSelection$"].subscribe(
        (_0x513774) => {
          Date.now() < this._ignoreTextSelectionBefore ||
            (this._selectionService["markerSelection"] &&
              (_0x513774.textRanges["length"] ||
                _0x513774.rectRanges["length"]) &&
              this._selectionService["clearMarkerSelection"]());
        },
      ),
    );
  }
  _openContextMenu(_0x440f9d, _0xab7cb1, _0x3768f2) {
    (this._contextMenuService["hideContextMenu"](),
      this._closeContextMenu(),
      (this._menuDisposable = this._docCanvasPopManagerService[
        "attachPopupToRect"
      ](
        {
          bottom: _0x3768f2,
          left: _0xab7cb1,
          right: _0xab7cb1,
          top: _0x3768f2,
        },
        {
          componentKey: P,
          direction: "bottom-left",
          extraProps: {
            marker: _0x440f9d,
            readOnly: !this._canEditDocument(),
            canDemote: _0x440f9d.nestingLevel < 8,
            canPromote: _0x440f9d.nestingLevel > 0,
            showNumberingControls: this._isOrderedMarker(_0x440f9d),
            onClose: () => this._closeContextMenu(),
            onDemote: () => this._executeMarkerCommand(_0x646d92.id, _0x440f9d),
            onEditPrefixSuffix: () =>
              this._openPrefixSuffixDialog(_0x440f9d, _0xab7cb1, _0x3768f2),
            onMoreBullets: () =>
              this._openMoreBulletsDialog(_0x440f9d, _0xab7cb1, _0x3768f2),
            onPromote: () =>
              this._executeMarkerCommand(_0x57f52a.id, _0x440f9d),
            onRestartAt: () =>
              this._openStartNumberDialog(_0x440f9d, _0xab7cb1, _0x3768f2),
            onSelectCurrentLevel: () =>
              this._selectMarkerAndClose(_0x440f9d, _0x5f02fa.Level),
            onSelectCurrentList: () =>
              this._selectMarkerAndClose(_0x440f9d, _0x5f02fa.List),
            onSelectItem: () =>
              this._selectMarkerAndClose(_0x440f9d, _0x5f02fa.Item),
            onSetGlyphSymbol: (_0x1f56e3) =>
              this._executeMarkerCommand(_0x4c7748.id, _0x440f9d, {
                symbol: _0x1f56e3,
              }),
            onSetGlyphType: (_0x37e37f) =>
              this._executeMarkerCommand(_0x804a31.id, _0x440f9d, {
                glyphType: _0x37e37f,
              }),
            onSetPrefixSuffix: (_0x212d5e, _0x5a0378) =>
              this._executeMarkerCommand(_0x2dd3d5.id, _0x440f9d, {
                prefix: _0x212d5e,
                suffix: _0x5a0378,
              }),
            onSetStartNumber: (_0x3f70d4) =>
              this._executeMarkerCommand(
                _0x3aa8f3.id,
                _0x440f9d,
                _0x3f70d4 === 1
                  ? { restartFromPrevious: true, startNumber: _0x3f70d4 }
                  : { startNumber: _0x3f70d4 },
              ),
          },
          onClickOutside: () => this._closeContextMenu(),
          onContextMenu: () => this._closeContextMenu(),
        },
        this._context["unitId"],
      )));
  }
  _openMoreBulletsDialog(_0x46decd, _0x292d13, _0x2c3b58) {
    (this._closeContextMenu(),
      (this._menuDisposable = this._docCanvasPopManagerService[
        "attachPopupToRect"
      ](
        this._getAnchorRect(_0x292d13, _0x2c3b58),
        {
          componentKey: z,
          direction: "bottom-left",
          extraProps: {
            onClose: () => this._closeContextMenu(),
            onSelect: (_0x4b9709) =>
              this._executeMarkerCommand(_0x4c7748.id, _0x46decd, {
                symbol: _0x4b9709,
              }),
          },
          onClickOutside: () => this._closeContextMenu(),
          onContextMenu: () => this._closeContextMenu(),
        },
        this._context["unitId"],
      )));
  }
  _openPrefixSuffixDialog(_0xf4f234, _0x1294d7, _0x359c60) {
    this._isOrderedMarker(_0xf4f234) &&
      (this._closeContextMenu(),
      (this._menuDisposable = this._docCanvasPopManagerService[
        "attachPopupToRect"
      ](
        this._getAnchorRect(_0x1294d7, _0x359c60),
        {
          componentKey: B,
          direction: "bottom-left",
          extraProps: {
            onApply: (_0x5aa103, _0x1af4e6, _0x25b0d6) =>
              this._executeMarkerCommand(_0x2dd3d5.id, _0xf4f234, {
                prefix: _0x5aa103,
                suffix: _0x1af4e6,
                mode: _0x25b0d6,
              }),
            onClose: () => this._closeContextMenu(),
          },
          onClickOutside: () => this._closeContextMenu(),
          onContextMenu: () => this._closeContextMenu(),
        },
        this._context["unitId"],
      )));
  }
  _openStartNumberDialog(_0x316714, _0x977bfd, _0x2af893) {
    (this._closeContextMenu(),
      (this._menuDisposable = this._docCanvasPopManagerService[
        "attachPopupToRect"
      ](
        this._getAnchorRect(_0x977bfd, _0x2af893),
        {
          componentKey: V,
          direction: "bottom-left",
          extraProps: {
            onApply: (_0x1d07b5) =>
              this._executeMarkerCommand(_0x3aa8f3.id, _0x316714, {
                startNumber: _0x1d07b5,
              }),
            onClose: () => this._closeContextMenu(),
          },
          onClickOutside: () => this._closeContextMenu(),
          onContextMenu: () => this._closeContextMenu(),
        },
        this._context["unitId"],
      )));
  }
  _closeContextMenu() {
    var _0x496f82;
    (this._clearOpenContextMenuTimer(),
      (_0x496f82 = this._menuDisposable) == null || _0x496f82.dispose(),
      (this._menuDisposable = null),
      this._selectionService["closeMenu"]());
  }
  _canEditDocument() {
    return _0x5514c5(this._permissionService, this._context["unitId"], []);
  }
  _clearOpenContextMenuTimer() {
    this._openContextMenuTimer != null &&
      (clearTimeout(this._openContextMenuTimer),
      (this._openContextMenuTimer = null));
  }
  _executeMarkerCommand(_0x3e203e, _0x901418, _0x43299b = {}) {
    (this._commandService["executeCommand"](_0x3e203e, {
      paragraphStartIndex: _0x901418.paragraphStartIndex,
      segmentId: _0x901418.segmentId,
      mode: this._getCommandMode(_0x901418, _0x43299b.mode),
      ..._0x43299b,
    }),
      this._closeContextMenu());
  }
  _getCommandMode(_0x82b7f7, _0x2c0fcc) {
    if (
      _0x2c0fcc === _0x5f02fa.Item ||
      _0x2c0fcc === _0x5f02fa.Level ||
      _0x2c0fcc === _0x5f02fa.List
    )
      return _0x2c0fcc;
    let _0x43e5e0 = this._selectionService["markerSelection"];
    return !_0x43e5e0 ||
      _0x43e5e0.marker["listId"] !== _0x82b7f7.listId ||
      (_0x43e5e0.marker["segmentId"] ?? "") !== (_0x82b7f7.segmentId ?? "")
      ? _0x5f02fa.Level
      : _0x43e5e0.mode;
  }
  _selectMarker(_0x49bdc8, _0x29bbf7) {
    let _0x33713f = this._docRangesBeforeMarkerPointer ?? [
      ...(this._docSelectionManagerService["getDocRanges"]() ?? []),
    ];
    ((this._ignoreTextSelectionBefore = Date.now() + 400),
      this._selectionService["setMarkerSelection"](_0x49bdc8, _0x29bbf7),
      this._makeDirty(),
      (this._docRangesBeforeMarkerPointer = null),
      _0x33713f.length &&
        queueMicrotask(() => {
          this._docSelectionManagerService["replaceDocRanges"](
            _0x33713f,
            {
              unitId: this._context["unitId"],
              subUnitId: this._context["unitId"],
            },
            false,
            { forceFocus: false },
          );
        }));
  }
  _selectMarkerAndClose(_0x2fe329, _0x2ff113) {
    (this._selectMarker(_0x2fe329, _0x2ff113), this._closeContextMenu());
  }
  _drawMarkerSelection(_0x3a3022) {
    let _0x513123 = this._getSelectedBulletBounds();
    _0x513123.length &&
      (_0x3a3022.save(),
      (_0x3a3022.fillStyle = "#8ab4f8"),
      (_0x3a3022.globalAlpha = 0.45),
      _0x513123.forEach((_0x5d0474) => {
        let _0xfb801b = this._getMarkerSelectionRect(_0x5d0474);
        _0x3a3022.fillRect(
          _0xfb801b.x,
          _0xfb801b.y,
          _0xfb801b.width,
          _0xfb801b.height,
        );
      }),
      _0x3a3022.restore());
  }
  _getMarkerSelectionRect(_0x34639a) {
    let _0x5e4616 = Se(_0x34639a.rect, this._context["scene"]),
      _0x497bdc = this._isBulletMarker(_0x34639a)
        ? _0x5e4616.height * 0.72
        : _0x5e4616.height * 1.15;
    return {
      ..._0x5e4616,
      width: Math.min(_0x5e4616.width, Math.max(8, _0x497bdc)),
    };
  }
  _isBulletMarker(_0x1c6ecb) {
    var _0x373f7b, _0xca3c18, _0x5358eb, _0x4e5805;
    let _0x3d6574 =
        (_0x373f7b = _0x1c6ecb.paragraph["bullet"]) == null
          ? undefined
          : _0x373f7b.listType,
      _0x32d2ee =
        ((_0xca3c18 = _0x1c6ecb.paragraph["bullet"]) == null
          ? undefined
          : _0xca3c18.nestingLevel) ?? 0,
      _0x26c831 =
        (_0x3d6574 &&
          (((_0x5358eb = this._context["unit"].lists) == null
            ? undefined
            : _0x5358eb[_0x3d6574]) ??
            _0x1e47d7[_0x3d6574])) ||
        null,
      _0x43a1d9 =
        _0x26c831 == null || (_0x4e5805 = _0x26c831.nestingLevel) == null
          ? undefined
          : _0x4e5805[_0x32d2ee];
    return (
      (_0x43a1d9 == null ? undefined : _0x43a1d9.glyphType) ===
        _0x467b9a.BULLET || !!(_0x43a1d9 != null && _0x43a1d9.glyphSymbol)
    );
  }
  _isOrderedMarker(_0x1b3693) {
    var _0x43bb80, _0x4290c6;
    let _0xc0d694 =
        ((_0x43bb80 = this._context["unit"].lists) == null
          ? undefined
          : _0x43bb80[_0x1b3693.listType]) ?? _0x1e47d7[_0x1b3693.listType],
      _0x45ab7b =
        _0xc0d694 == null || (_0x4290c6 = _0xc0d694.nestingLevel) == null
          ? undefined
          : _0x4290c6[_0x1b3693.nestingLevel];
    return !!(
      _0x45ab7b &&
      _0x45ab7b.glyphType !== _0x467b9a.BULLET &&
      !_0x45ab7b.glyphSymbol
    );
  }
  _getSelectedBulletBounds() {
    let _0x204527 = this._selectionService["markerSelection"];
    if (!_0x204527) return [];
    let { marker: _0x5c371a, mode: _0x540a16 } = _0x204527;
    return Z(_0x5c371a.listType)
      ? this._getSelectedFallbackBulletBounds(_0x5c371a, _0x540a16).concat(
          this._docEventManagerService["getBulletBounds"]().filter(
            (_0x34a4a6) =>
              this._isMarkerBoundSelected(_0x34a4a6, _0x5c371a, _0x540a16) &&
              !this._hasFallbackBoundForMarker(
                _0x34a4a6.paragraph["startIndex"],
                _0x34a4a6.segmentId,
              ),
          ),
        )
      : [];
  }
  _getSelectedFallbackBulletBounds(_0x389f1e, _0x329438) {
    var _0x558383;
    return (
      ((_0x558383 = this._context["unit"].getBody()) == null
        ? undefined
        : _0x558383.paragraphs) ?? []
    )
      .filter((_0x1495d8) =>
        this._isParagraphSelected(_0x1495d8, _0x389f1e, _0x329438),
      )
      .map((_0x4dd83b) => {
        let _0x43e2cf = this._docEventManagerService[
          "findParagraphBoundByIndex"
        ](_0x4dd83b.startIndex);
        return X(_0x43e2cf) ? _0x53f87d(_0x43e2cf, _0x4dd83b) : null;
      })
      .filter((_0x279cbc) => _0x279cbc != null);
  }
  _hasFallbackBoundForMarker(_0x3dffd5, _0x4aa1d5) {
    let _0xd277ac =
      this._docEventManagerService["findParagraphBoundByIndex"](_0x3dffd5);
    return X(_0xd277ac) && (_0xd277ac.segmentId ?? "") === (_0x4aa1d5 ?? "");
  }
  _isMarkerBoundSelected(_0x24e75a, _0x5d90f1, _0x2586a6) {
    return (
      this._isParagraphSelected(_0x24e75a.paragraph, _0x5d90f1, _0x2586a6) &&
      (_0x24e75a.segmentId ?? "") === (_0x5d90f1.segmentId ?? "")
    );
  }
  _isParagraphSelected(_0x43209c, _0x286109, _0x3e826a) {
    let _0xa6c2f4 = _0x43209c.bullet;
    return !_0xa6c2f4 ||
      _0xa6c2f4.listId !== _0x286109.listId ||
      !Z(_0xa6c2f4.listType)
      ? false
      : _0x3e826a === "item"
        ? _0x43209c.startIndex === _0x286109.paragraphStartIndex
        : _0x3e826a === "list" ||
          _0xa6c2f4.nestingLevel === _0x286109.nestingLevel;
  }
  _makeDirty() {
    var _0x135851;
    ((_0x135851 = this._context["mainComponent"]) == null ||
      _0x135851.makeDirty(true),
      this._context["scene"].makeDirty());
  }
  _getAnchorRect(_0x1b74b7, _0x281ecf) {
    return {
      bottom: _0x281ecf,
      left: _0x1b74b7,
      right: _0x1b74b7,
      top: _0x281ecf,
    };
  }
  _toMarkerInfo(_0x4fa608) {
    var _0x30e15f, _0x58747d, _0x32da1f;
    return {
      paragraphStartIndex: _0x4fa608.paragraph["startIndex"],
      listId:
        ((_0x30e15f = _0x4fa608.paragraph["bullet"]) == null
          ? undefined
          : _0x30e15f.listId) ?? "",
      listType:
        ((_0x58747d = _0x4fa608.paragraph["bullet"]) == null
          ? undefined
          : _0x58747d.listType) ?? "",
      nestingLevel:
        ((_0x32da1f = _0x4fa608.paragraph["bullet"]) == null
          ? undefined
          : _0x32da1f.nestingLevel) ?? 0,
      segmentId: _0x4fa608.segmentId,
    };
  }
};
Y = U(
  [
    H(1, _0x4b4ece),
    H(2, _0x414337(_0x15bf19)),
    H(3, _0x414337(_0x169b56)),
    H(4, _0x414337(_0x4f65b8)),
    H(5, _0x143ca2),
    H(6, _0x414337(J)),
    H(7, _0x46555a),
  ],
  Y,
);
function X(_0x9fe0df) {
  return !!(
    _0x9fe0df &&
    typeof _0x9fe0df == "object" &&
    "tableId" in _0x9fe0df
  );
}
function Z(_0x59547f) {
  return (
    _0x59547f !== _0x44d382.CHECK_LIST &&
    _0x59547f !== _0x44d382.CHECK_LIST_CHECKED
  );
}
function Se(_0x4807dc, _0x579298) {
  let _0x29fcfd = Q(_0x4807dc.left, _0x4807dc.top, _0x579298),
    _0x434d7d = Q(_0x4807dc.right, _0x4807dc.bottom, _0x579298);
  return {
    height: _0x434d7d.y - _0x29fcfd.y,
    width: _0x434d7d.x - _0x29fcfd.x,
    x: _0x29fcfd.x,
    y: _0x29fcfd.y,
  };
}
function Q(_0x197c3b, _0x519579, _0x262b34) {
  let { scaleX: _0x4a07b5, scaleY: _0x3c9848 } = _0x262b34.getAncestorScale(),
    _0x4df50b = _0x262b34.getViewport("viewMain");
  return _0x4df50b
    ? {
        x: (_0x197c3b - _0x4df50b.viewportScrollX) * _0x4a07b5,
        y: (_0x519579 - _0x4df50b.viewportScrollY) * _0x3c9848,
      }
    : { x: _0x197c3b, y: _0x519579 };
}
function Ce(_0x400cf8, _0x4ca095, _0x239ed0) {
  let { scaleX: _0x34e280, scaleY: _0x39a043 } = _0x239ed0.getAncestorScale(),
    _0x31a47a = _0x239ed0.getViewport("viewMain");
  return _0x31a47a
    ? {
        x: _0x400cf8 / _0x34e280 + _0x31a47a.viewportScrollX,
        y: _0x4ca095 / _0x39a043 + _0x31a47a.viewportScrollY,
      }
    : { x: _0x400cf8, y: _0x4ca095 };
}
let $ = class extends _0x1057e2 {
  constructor(_0x14e992 = N, _0x4c9db9, _0x4bd148, _0x2696f6) {
    (super(),
      (this._config = _0x14e992),
      (this._injector = _0x4c9db9),
      (this._renderManagerService = _0x4bd148),
      (this._configService = _0x2696f6));
    let { menu: _0x43649b, ..._0x3a620e } = _0x28d77e({}, N, this._config);
    (_0x43649b &&
      this._configService["setConfig"]("menu", _0x43649b, { merge: true }),
      this._configService["setConfig"]("docs-list-ui.config", _0x3a620e));
  }
  onStarting() {
    (this._injector["add"]([W]),
      this._injector["add"]([J]),
      this._injector["get"](J),
      this._injector["get"](W));
  }
  onRendered() {
    this.disposeWithMe(
      this._renderManagerService["registerRenderModule"](_0x36cace.UNIVER_DOC, [
        Y,
      ]),
    );
  }
};
(K($, "pluginName", _0x4cbc05 + "_UI_PLUGIN"),
  K($, "packageName", j),
  K($, "version", M),
  K($, "type", _0x36cace.UNIVER_DOC),
  ($ = U(
    [
      _0x123352(_0x27c08f, _0x523518, _0x4fcf60, _0x4beabb, _0x568ffc),
      H(1, _0x414337(_0x193bca)),
      H(2, _0x221d60),
      H(3, _0x42b59f),
    ],
    $,
  )));
export { $ as UniverDocsListUIPlugin };
