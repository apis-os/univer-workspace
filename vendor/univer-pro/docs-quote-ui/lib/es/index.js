import {
  DOCS_QUOTE_LINE_COLOR_TOKEN as _0x37e1e1,
  DOCS_QUOTE_LINE_WIDTH as _0xe8970c,
  DOCS_QUOTE_PLUGIN as _0x35d6f8,
  DocsQuoteCancelEmptyParagraphCommand as _0x4cc518,
  DocsQuoteExitCommand as _0x57713c,
  DocsQuoteInsertBelowCommand as _0x515bf1,
  DocsQuoteInsertCommand as _0x5a054b,
  DocsQuoteRemoveCommand as _0x20c58f,
  DocsQuoteUnwrapCommand as _0x451665,
  DocsQuoteUpdateStyleCommand as _0x4aa51e,
  UniverDocsQuotePlugin as _0x1d2a20,
  buildCancelEmptyQuoteParagraphActions as _0x129be7,
  buildExitQuoteActions as _0x27dc34,
} from "@univerjs-pro/docs-quote";
import {
  DOC_CONTENT_INSERT_MENU_ID as _0xa73656,
  DOC_PARAGRAPH_T_EDIT_MENU_ID as _0x446a8d,
  DOC_PARAGRAPH_T_INSERT_BELOW_MENU_ID as _0x443428,
  DOC_PARAGRAPH_T_INSERT_MENU_ID as _0x12d1b1,
  DeleteCurrentParagraphCommand as _0xd5fd84,
  DeleteLeftCommand as _0x5d0fba,
  DeleteRightCommand as _0x402273,
  DocAutoFormatService as _0x56848b,
  DocCanvasPopManagerService as _0x2e136e,
  EMPTY_PARAGRAPH_MENU_ID as _0x1b79bd,
  EnterCommand as _0x1365fb,
  FLOAT_TEXT_STYLE_MENU_ID as _0x52df18,
  FLOAT_TOOLBAR_MENU_POSITION as _0x388ee0,
  INSERT_BELLOW_MENU_ID as _0x422fd9,
  UniverDocsUIPlugin as _0xb86d1c,
  disableMenuWhenHeaderFooterEditing as _0x1b3575,
  hideMenuWhenSelectionInBlockRange as _0x54ad37,
} from "@univerjs/docs-ui";
import {
  COLOR_PICKER_COMPONENT as _0x209fbf,
  ComponentManager as _0x1d255d,
  ContextMenuGroup as _0x13e2cb,
  ContextMenuPosition as _0x11cb9a,
  IMenuManagerService as _0x4aed22,
  IconManager as _0x25576a,
  MenuItemType as _0x1071bb,
  MenuManagerPosition as _0x5d7681,
  RibbonInsertGroup as _0x73bcaa,
  RibbonPosition as _0x1e1303,
  ToolbarButton as _0x30cb03,
  getMenuHiddenObservable as _0x1765df,
  useDependency as _0x369f3b,
} from "@univerjs/ui";
import {
  CommandType as _0x5aecff,
  DEFAULT_STYLES as _0xa8a6fe,
  DependentOn as _0x26cb6a,
  Disposable as _0xfa3a60,
  DocumentBlockRangeType as _0x3e8ebd,
  ICommandService as _0x191487,
  IConfigService as _0x559fba,
  IPermissionService as _0x3fb512,
  Inject as _0x166543,
  Injector as _0x13e12d,
  LocaleService as _0x1c69da,
  Plugin as _0x35523c,
  ThemeService as _0x34e8c8,
  UniverInstanceType as _0x38e9e7,
  merge as _0x78a27a,
} from "@univerjs/core";
import { combineLatest as _0xfc69f2, map as _0x38bca7 } from "rxjs";
import { UniverLicensePlugin as _0x332498 } from "@univerjs-pro/license";
import {
  DocSkeletonManagerService as _0x52eb1b,
  UniverDocsPlugin as _0x5b60c0,
  canEditDocumentTargets as _0x5234d4,
  getDocumentEntityParentPermissionObjectIds as _0x2efc27,
  getDocumentEntityPermissionObjectId as _0x3acc0e,
} from "@univerjs/docs";
import {
  Documents as _0xfbebad,
  IRenderManagerService as _0x5051ee,
  UniverRenderEnginePlugin as _0x38e1fb,
} from "@univerjs/engine-render";
import {
  FontColorDoubleIcon as _0x904085,
  LeftBorderDoubleIcon as _0x7c2c3f,
  QuoteIcon as _0x1196cf,
  TextIcon as _0x5425c6,
} from "@univerjs/icons";
import { useState as _0x1a7269 } from "react";
import { jsx as _0x46e0f0, jsxs as _0x4e81a0 } from "react/jsx-runtime";
import { documentSkeletonLineIterator as _0x3c4f2f } from "@univerjs-pro/docs-column";
function L(_0x2d53b6) {
  return {
    id: _0x5a054b.id,
    type: _0x1071bb.BUTTON,
    icon: "QuoteIcon",
    title: "docs-quote-ui.menu.quote",
    tooltip: "docs-quote-ui.menu.quote",
    hidden$: _0x1765df(_0x2d53b6, _0x38e9e7.UNIVER_DOC),
    disabled$: _0x1b3575(_0x2d53b6),
  };
}
function R(_0x304949) {
  return {
    ...L(_0x304949),
    hidden$: _0xfc69f2([
      _0x1765df(_0x304949, _0x38e9e7.UNIVER_DOC),
      _0x54ad37(_0x304949),
    ]).pipe(_0x38bca7(([_0x4e5315, _0x14768a]) => _0x4e5315 || _0x14768a)),
  };
}
function z(_0x4dd67e) {
  return {
    id: _0x515bf1.id,
    type: _0x1071bb.BUTTON,
    icon: "QuoteIcon",
    title: "docs-quote-ui.menu.quote",
    hidden$: _0x1765df(_0x4dd67e, _0x38e9e7.UNIVER_DOC),
    disabled$: _0x1b3575(_0x4dd67e),
  };
}
const B = {
    [_0x73bcaa.MEDIA]: { [_0x5a054b.id]: { order: 6, menuItemFactory: L } },
  },
  Be = {
    [_0x5d7681.RIBBON]: { [_0x1e1303.INSERT]: B },
    [_0x388ee0]: {
      [_0x52df18]: { [_0x5a054b.id]: { order: 10, menuItemFactory: R } },
    },
  },
  V = {
    ...B,
    [_0x52df18]: { [_0x5a054b.id]: { order: 10, menuItemFactory: R } },
    [_0x11cb9a.PARAGRAPH]: {
      [_0x13e2cb.LAYOUT]: {
        [_0x422fd9]: { [_0x515bf1.id]: { order: 6, menuItemFactory: z } },
      },
      [_0xa73656]: {
        [_0x13e2cb.LAYOUT]: {
          [_0x515bf1.id]: { order: 6, menuItemFactory: z },
        },
      },
      [_0x1b79bd]: {
        [_0x13e2cb.LAYOUT]: {
          [_0x5a054b.id]: { order: 6, menuItemFactory: L },
        },
      },
      [_0x12d1b1]: {
        quickBottom: { [_0x5a054b.id]: { order: 3, menuItemFactory: L } },
      },
      [_0x446a8d]: {
        quickBottom: { [_0x5a054b.id]: { order: 4, menuItemFactory: L } },
      },
      [_0x443428]: {
        quickBottom: { [_0x515bf1.id]: { order: 3, menuItemFactory: z } },
      },
    },
  };
var Ve = "@univerjs-pro/docs-quote-ui",
  He = "1.0.0-insiders.20260907-70fc579";
const H = {},
  U = "docs-quote-ui.floating-toolbar";
function Ue(_0x37aee2) {
  let {
      blockId: _0x503a44,
      lineColor: _0x2821f7,
      textColor: _0xd53588,
      unitId: _0x1a3d53,
    } = _0x37aee2.popup["extraProps"],
    _0x5c68a2 = _0x369f3b(_0x191487),
    _0x12d9e7 = _0x369f3b(_0x1c69da),
    _0x52b2ba = _0x369f3b(_0x1d255d).get(_0x209fbf),
    [_0x40714b, _0x615436] = _0x1a7269(_0x2821f7),
    [_0x43a032, _0x1b3f1d] = _0x1a7269(_0xd53588),
    [_0x52c8fb, _0x3737b6] = _0x1a7269(null),
    _0x2ef182 = (_0x3cbb1f) =>
      _0x3737b6((_0x1c33c5) => (_0x1c33c5 === _0x3cbb1f ? null : _0x3cbb1f)),
    _0x5c7edb = async (_0x457ad4) => {
      let _0x2c7dc3 = await _0x5c68a2.executeCommand(_0x4aa51e.id, {
        ..._0x457ad4,
        blockId: _0x503a44,
        unitId: _0x1a3d53,
      });
      return (
        _0x2c7dc3 &&
          _0x457ad4.lineColor != null &&
          _0x615436(_0x457ad4.lineColor),
        _0x2c7dc3 &&
          _0x457ad4.textColor != null &&
          _0x1b3f1d(_0x457ad4.textColor),
        _0x2c7dc3
      );
    },
    _0x537533 = _0x12d9e7.t("docs-quote-ui.toolbar.lineColor"),
    _0x2477d1 = _0x12d9e7.t("docs-quote-ui.toolbar.textColor"),
    _0x59262e = _0x12d9e7.t("docs-quote-ui.toolbar.convertToParagraph");
  return _0x4e81a0("div", {
    "data-u-comp": U,
    role: "toolbar",
    className:
      "univer-relative univer-flex univer-items-center univer-gap-1 univer-rounded-md univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-1 univer-shadow-sm dark:!univer-border-gray-700 dark:!univer-bg-gray-900",
    onMouseDown: (_0x188ecc) => _0x188ecc.stopPropagation(),
    children: [
      _0x46e0f0(_0x30cb03, {
        active: _0x52c8fb === "line",
        "aria-label": _0x537533,
        onClick: () => _0x2ef182("line"),
        children: _0x46e0f0(_0x7c2c3f, {
          extend: { colorChannel1: _0x40714b },
        }),
      }),
      _0x46e0f0(_0x30cb03, {
        active: _0x52c8fb === "text",
        "aria-label": _0x2477d1,
        onClick: () => _0x2ef182("text"),
        children: _0x46e0f0(_0x904085, {
          extend: { colorChannel1: _0x43a032 },
        }),
      }),
      _0x46e0f0(_0x30cb03, {
        "aria-label": _0x59262e,
        onClick: () =>
          _0x5c68a2.executeCommand(_0x451665.id, {
            blockId: _0x503a44,
            unitId: _0x1a3d53,
          }),
        children: _0x46e0f0(_0x5425c6, {}),
      }),
      _0x52c8fb && _0x52b2ba
        ? _0x46e0f0("div", {
            className:
              "univer-absolute univer-left-0 univer-top-full univer-z-10 univer-mt-1 univer-rounded-lg univer-bg-gray-0 univer-p-4 univer-shadow-lg dark:!univer-bg-gray-900",
            children: _0x46e0f0(_0x52b2ba, {
              value: _0x52c8fb === "line" ? _0x40714b : _0x43a032,
              onChange: (_0x43111b) =>
                _0x5c7edb(
                  _0x52c8fb === "line"
                    ? { lineColor: _0x43111b }
                    : { textColor: _0x43111b },
                ),
            }),
          })
        : null,
    ],
  });
}
function W(_0x58ec29, _0x5d287f) {
  return function (_0x31fc5c, _0x1cf643) {
    _0x5d287f(_0x31fc5c, _0x1cf643, _0x58ec29);
  };
}
function G(_0x2672f5, _0x43b89d, _0x23ddbc, _0x1ee40b) {
  var _0x221feb = arguments.length,
    _0x4137a4 =
      _0x221feb < 3
        ? _0x43b89d
        : _0x1ee40b === null
          ? (_0x1ee40b = Object.getOwnPropertyDescriptor(_0x43b89d, _0x23ddbc))
          : _0x1ee40b,
    _0x1bc126;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x4137a4 = Reflect.decorate(_0x2672f5, _0x43b89d, _0x23ddbc, _0x1ee40b);
  else {
    for (var _0x2abd35 = _0x2672f5.length - 1; _0x2abd35 >= 0; _0x2abd35--)
      (_0x1bc126 = _0x2672f5[_0x2abd35]) &&
        (_0x4137a4 =
          (_0x221feb < 3
            ? _0x1bc126(_0x4137a4)
            : _0x221feb > 3
              ? _0x1bc126(_0x43b89d, _0x23ddbc, _0x4137a4)
              : _0x1bc126(_0x43b89d, _0x23ddbc)) || _0x4137a4);
  }
  return (
    _0x221feb > 3 &&
      _0x4137a4 &&
      Object.defineProperty(_0x43b89d, _0x23ddbc, _0x4137a4),
    _0x4137a4
  );
}
let K = class extends _0xfa3a60 {
  constructor(_0x2c71f0, _0x5f3a1a) {
    (super(),
      (this._componentManager = _0x2c71f0),
      (this._iconManager = _0x5f3a1a),
      this._registerIcons(),
      this._registerComponents());
  }
  _registerIcons() {
    this.disposeWithMe(this._iconManager["register"]({ QuoteIcon: _0x1196cf }));
  }
  _registerComponents() {
    this.disposeWithMe(this._componentManager["register"](U, Ue));
  }
};
K = G([W(0, _0x166543(_0x1d255d)), W(1, _0x166543(_0x25576a))], K);
function We(_0x37d070, _0x29e700, _0x468d11, _0x5b285b) {
  let _0x5d7773 = [];
  return (
    _0x37d070.forEach((_0x3ba3d8) => {
      let _0x2554b0 = _0x29e700.filter(
        (_0x3e8271) =>
          _0x3e8271.pageIndex >= 0 &&
          _0x3e8271.ed >= _0x3ba3d8.startIndex &&
          _0x3e8271.st <= _0x3ba3d8.endIndex,
      );
      Array.from(
        new Set(_0x2554b0.map((_0x55033f) => _0x55033f.pageIndex)),
      ).forEach((_0x3557c9) => {
        let _0x131dc8 = _0x2554b0.filter(
          (_0x256300) => _0x256300.pageIndex === _0x3557c9,
        );
        Array.from(
          new Set(_0x131dc8.map((_0x390b33) => _0x390b33.layoutFragment)),
        ).forEach((_0x20a4cc) => {
          let _0x3420b5 = _0x131dc8.filter(
              (_0x195a7) => _0x195a7.layoutFragment === _0x20a4cc,
            ),
            _0x4601ba = Math.min(
              ..._0x3420b5.map(
                (_0x237f7a) => _0x237f7a.top + (_0x237f7a.marginTop ?? 0),
              ),
            ),
            _0x5d4a5f = Math.max(
              ..._0x3420b5.map(
                (_0x45eee6) =>
                  _0x45eee6.top +
                  _0x45eee6.height -
                  (_0x45eee6.marginBottom ?? 0),
              ),
            ),
            _0x3fa56c = Math.min(
              ..._0x3420b5.map((_0x518ccb) => _0x518ccb.left),
            ),
            _0x4411f3 = Math.max(
              ..._0x3420b5.map((_0x156a86) => _0x156a86.left + _0x156a86.width),
            ),
            _0x196406 = Ge(_0x3420b5);
          _0x5d7773.push({
            blockId: _0x3ba3d8.blockId,
            ..._0x196406,
            pageIndex: _0x3557c9,
            lineX: _0x3fa56c + _0x5b285b,
            left: _0x3fa56c,
            width: _0x4411f3 - _0x3fa56c,
            top: _0x4601ba - _0x468d11,
            height: _0x5d4a5f - _0x4601ba + _0x468d11 * 2,
          });
        });
      });
    }),
    _0x5d7773
  );
}
function Ge(_0x287a12) {
  let _0x5a0459 = _0x287a12
      .map((_0x1e95ee) => _0x1e95ee.clipLeft)
      .filter((_0x2b5118) => _0x2b5118 != null),
    _0x471fbb = _0x287a12
      .map((_0x517043) => _0x517043.clipRight)
      .filter((_0x379a8c) => _0x379a8c != null);
  if (!_0x5a0459.length || !_0x471fbb.length) return {};
  let _0x488ec7 = Math.max(..._0x5a0459),
    _0x41b781 = Math.min(..._0x471fbb);
  return _0x41b781 > _0x488ec7
    ? { clipLeft: _0x488ec7, clipRight: _0x41b781 }
    : {};
}
function q(_0x55237d) {
  "@babel/helpers - typeof";
  return (
    (q =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x13de3f) {
            return typeof _0x13de3f;
          }
        : function (_0xb9ca55) {
            return _0xb9ca55 &&
              typeof Symbol == "function" &&
              _0xb9ca55.constructor === Symbol &&
              _0xb9ca55 !== Symbol.prototype
              ? "symbol"
              : typeof _0xb9ca55;
          }),
    q(_0x55237d)
  );
}
function Ke(_0x345795, _0x430acc) {
  if (q(_0x345795) != "object" || !_0x345795) return _0x345795;
  var _0x4d74f7 = _0x345795[Symbol.toPrimitive];
  if (_0x4d74f7 !== undefined) {
    var _0xa3cd28 = _0x4d74f7.call(_0x345795, _0x430acc || "default");
    if (q(_0xa3cd28) != "object") return _0xa3cd28;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x430acc === "string" ? String : Number)(_0x345795);
}
function J(_0x1a8b66) {
  var _0x2bea1a = Ke(_0x1a8b66, "string");
  return q(_0x2bea1a) == "symbol" ? _0x2bea1a : _0x2bea1a + "";
}
function Y(_0xca9859, _0x147af3, _0x54a7ff) {
  return (
    (_0x147af3 = J(_0x147af3)) in _0xca9859
      ? Object.defineProperty(_0xca9859, _0x147af3, {
          value: _0x54a7ff,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0xca9859[_0x147af3] = _0x54a7ff),
    _0xca9859
  );
}
let X = class extends _0xfa3a60 {
  constructor(_0x47a6eb, _0x97fea5, _0x4219ce, _0x522111, _0x14e431) {
    (super(),
      (this._context = _0x47a6eb),
      (this._docSkeletonManagerService = _0x97fea5),
      (this._docCanvasPopManagerService = _0x4219ce),
      (this._themeService = _0x522111),
      (this._permissionService = _0x14e431),
      Y(this, "_hitRects", []),
      Y(this, "_toolbarPopoverDisposable", null),
      this._initRender(),
      this._initPointer(),
      this.disposeWithMe(
        this._permissionService["permissionPointUpdate$"].subscribe(() =>
          this._closeToolbarPopover(),
        ),
      ));
  }
  _initPointer() {
    let _0x20fe64 = this._context["scene"];
    this.disposeWithMe(
      _0x20fe64.onPointerDown$["subscribeEvent"]({
        next: ([_0x494afa]) => {
          if (_0x494afa.button === 2) return;
          let _0xdefb74 = Ze(
              _0x494afa.offsetX,
              _0x494afa.offsetY,
              this._context["scene"],
            ),
            _0x2142d3 = this._hitRects["find"](
              (_0x2ad326) =>
                _0xdefb74.x >= _0x2ad326.left &&
                _0xdefb74.x <= _0x2ad326.right &&
                _0xdefb74.y >= _0x2ad326.top &&
                _0xdefb74.y <= _0x2ad326.bottom,
            );
          if (!_0x2142d3) {
            this._closeToolbarPopover();
            return;
          }
          this._openToolbarPopover(_0x2142d3);
        },
        priority: -11000,
      }),
    );
  }
  _initRender() {
    let _0x4409c3 = this._context["mainComponent"];
    _0x4409c3 instanceof _0xfbebad &&
      this.disposeWithMe(
        _0x4409c3.pageRender$["subscribe"]((_0xddcca0) =>
          this._drawPage(_0xddcca0),
        ),
      );
  }
  _drawPage(_0x52910d) {
    var _0x20a5ab;
    let _0x18efed =
      ((_0x20a5ab = this._context["unit"].getBody()) == null ||
      (_0x20a5ab = _0x20a5ab.blockRanges) == null
        ? undefined
        : _0x20a5ab.filter(
            (_0x30eb6a) => _0x30eb6a.blockType === _0x3e8ebd.QUOTE,
          )) ?? [];
    if (!_0x18efed.length) {
      this._hitRects = [];
      return;
    }
    let _0x5be63c =
        this._docSkeletonManagerService["getSkeleton"]().getSkeletonData(),
      _0x591d06 = (_0x5be63c == null ? undefined : _0x5be63c.pages) ?? [],
      _0x3fe9e9 = _0x591d06.indexOf(_0x52910d.page);
    if (_0x3fe9e9 < 0) return;
    let _0xa15257 = We(
        _0x18efed,
        this._collectLines(_0x591d06, _0x18efed),
        4,
        0,
      ),
      _0x19bdaf = Z(this._context["mainComponent"]);
    (_0x3fe9e9 === 0 && (this._hitRects = []),
      _0xa15257
        .filter((_0x22d038) => _0x22d038.pageIndex === _0x3fe9e9)
        .forEach((_0x265c9c) => {
          let _0x2e62ac = this._getQuoteLineColor(_0x265c9c.blockId);
          (Je(_0x52910d.ctx, _0x265c9c, () =>
            Xe(
              _0x52910d.ctx,
              _0x265c9c.lineX,
              _0x265c9c.top,
              _0x265c9c.height,
              _0x2e62ac,
            ),
          ),
            this._hitRects["push"]({
              blockId: _0x265c9c.blockId,
              bottom: _0x265c9c.top + _0x265c9c.height + _0x19bdaf.docsTop,
              left: _0x265c9c.left + _0x19bdaf.docsLeft,
              right: _0x265c9c.left + _0x265c9c.width + _0x19bdaf.docsLeft,
              top: _0x265c9c.top + _0x19bdaf.docsTop,
            }));
        }));
  }
  _collectLines(_0xbf2637, _0x566ca5) {
    let _0x172c4c = [],
      _0x2236d2 = this._getQuoteParagraphOwners(_0x566ca5),
      _0x4c52af = Z(this._context["mainComponent"]);
    return (
      _0x3c4f2f(
        _0xbf2637,
        {
          docsLeft: _0x4c52af.docsLeft,
          pageMarginTop: _0x4c52af.pageMarginTop,
          unitId: this._context["unitId"],
        },
        (_0x3e1c25) => {
          let _0x22df05 = _0x2236d2.get(_0x3e1c25.line["paragraphIndex"]);
          if (_0x22df05) {
            if (_0x3e1c25.clipLeft != null && _0x3e1c25.clipRight != null) {
              let _0x4be19f = _0x3e1c25.pageLeft + _0x3e1c25.column["left"],
                _0x1817b5 = _0x4be19f + _0x3e1c25.column["width"];
              if (
                Math.min(_0x1817b5, _0x3e1c25.clipRight) <=
                Math.max(_0x4be19f, _0x3e1c25.clipLeft)
              )
                return;
            }
            _0x172c4c.push(qe(_0x3e1c25, _0x22df05));
          }
        },
      ),
      _0x172c4c
    );
  }
  _getQuoteParagraphOwners(_0x5e3105) {
    var _0x10c7a3;
    let _0x428225 = new Map(),
      _0x5066cc =
        ((_0x10c7a3 = this._context["unit"].getBody()) == null
          ? undefined
          : _0x10c7a3.paragraphs) ?? [];
    return (
      _0x5e3105.forEach((_0x403cc8) => {
        _0x5066cc.forEach((_0x451451) => {
          _0x451451.startIndex > _0x403cc8.startIndex &&
            _0x451451.startIndex < _0x403cc8.endIndex &&
            _0x428225.set(_0x451451.startIndex, _0x403cc8);
        });
      }),
      _0x428225
    );
  }
  _getQuoteLineColor(_0x3e370) {
    var _0x2c53b2, _0x311d54, _0x41449f;
    let _0x52e1ef = this._context["unit"].getBody(),
      _0x182f29 =
        _0x52e1ef == null || (_0x2c53b2 = _0x52e1ef.blockRanges) == null
          ? undefined
          : _0x2c53b2.find(
              (_0x12e0b9) =>
                _0x12e0b9.blockId === _0x3e370 &&
                _0x12e0b9.blockType === _0x3e8ebd.QUOTE,
            ),
      _0x4747c7 =
        _0x52e1ef == null || (_0x311d54 = _0x52e1ef.paragraphs) == null
          ? undefined
          : _0x311d54.find(
              (_0x40155b) =>
                _0x182f29 &&
                _0x40155b.startIndex > _0x182f29.startIndex &&
                _0x40155b.startIndex < _0x182f29.endIndex,
            );
    return (
      (_0x4747c7 == null ||
      (_0x41449f = _0x4747c7.paragraphStyle) == null ||
      (_0x41449f = _0x41449f.borderLeft) == null
        ? undefined
        : _0x41449f.color["rgb"]) ??
      this._themeService["getColorFromTheme"](_0x37e1e1)
    );
  }
  _openToolbarPopover(_0x4103e0) {
    (this._closeToolbarPopover(),
      this._canEditBlock(_0x4103e0.blockId) &&
        (this._toolbarPopoverDisposable = this._docCanvasPopManagerService[
          "attachPopupToRect"
        ](
          _0x4103e0,
          {
            componentKey: U,
            direction: "top-center",
            offset: [0, 8],
            extraProps: {
              blockId: _0x4103e0.blockId,
              lineColor: this._getQuoteLineColor(_0x4103e0.blockId),
              textColor: this._getQuoteTextColor(_0x4103e0.blockId),
              unitId: this._context["unitId"],
            },
            onClickOutside: () => this._closeToolbarPopover(),
            onContextMenu: () => this._closeToolbarPopover(),
            zIndex: 101,
          },
          this._context["unitId"],
        )));
  }
  _closeToolbarPopover() {
    var _0x6e7ef7;
    ((_0x6e7ef7 = this._toolbarPopoverDisposable) == null ||
      _0x6e7ef7.dispose(),
      (this._toolbarPopoverDisposable = null));
  }
  _canEditBlock(_0x5011f9) {
    return _0x5234d4(this._permissionService, this._context["unitId"], [
      ..._0x2efc27(this._context["unit"], "", "custom-block", _0x5011f9),
      _0x3acc0e("", "custom-block", _0x5011f9),
    ]);
  }
  _getQuoteTextColor(_0x26798b) {
    var _0x1a2876, _0x50c2bb;
    let _0x328df4 = this._context["unit"].getBody(),
      _0x33a4ed =
        _0x328df4 == null || (_0x1a2876 = _0x328df4.blockRanges) == null
          ? undefined
          : _0x1a2876.find(
              (_0x19f0ba) =>
                _0x19f0ba.blockId === _0x26798b &&
                _0x19f0ba.blockType === _0x3e8ebd.QUOTE,
            );
    return _0x33a4ed
      ? ((_0x328df4 == null ||
        (_0x50c2bb = _0x328df4.textRuns) == null ||
        (_0x50c2bb = _0x50c2bb.find(
          (_0x203b1b) =>
            _0x203b1b.ed > _0x33a4ed.startIndex + 1 &&
            _0x203b1b.st < _0x33a4ed.endIndex,
        )) == null ||
        (_0x50c2bb = _0x50c2bb.ts) == null ||
        (_0x50c2bb = _0x50c2bb.cl) == null
          ? undefined
          : _0x50c2bb.rgb) ?? _0xa8a6fe.cl["rgb"])
      : _0xa8a6fe.cl["rgb"];
  }
};
X = G(
  [
    W(1, _0x166543(_0x52eb1b)),
    W(2, _0x166543(_0x2e136e)),
    W(3, _0x166543(_0x34e8c8)),
    W(4, _0x3fb512),
  ],
  X,
);
function qe(_0x4717f8, _0x2ed5ee, _0x13d587) {
  let {
    column: _0x825bda,
    line: _0x25f291,
    pageIndex: _0x1ee335,
    pageLeft: _0x1840b5,
    sectionTop: _0x30aac0,
  } = _0x4717f8;
  return {
    layoutFragment: _0x825bda,
    st: _0x2ed5ee.startIndex,
    ed: _0x2ed5ee.endIndex,
    left: _0x1840b5 + _0x825bda.left,
    top: _0x30aac0 + _0x25f291.top,
    width: _0x4717f8.lineWidth,
    clipLeft:
      _0x4717f8.clipLeft ??
      (_0x13d587 == null ? undefined : _0x13d587.clipLeft),
    clipRight:
      _0x4717f8.clipRight ??
      (_0x13d587 == null ? undefined : _0x13d587.clipRight),
    height: _0x25f291.lineHeight,
    marginBottom: _0x25f291.marginBottom,
    marginTop: _0x25f291.marginTop,
    pageIndex: _0x1ee335,
  };
}
function Je(_0x304b1f, _0x114ecd, _0x5ad11e) {
  if (
    _0x114ecd.clipLeft == null ||
    _0x114ecd.clipRight == null ||
    _0x114ecd.clipRight <= _0x114ecd.clipLeft
  )
    return _0x5ad11e();
  (_0x304b1f.save(),
    _0x304b1f.beginPath(),
    _0x304b1f.rectByPrecision(
      _0x114ecd.clipLeft,
      -100000,
      _0x114ecd.clipRight - _0x114ecd.clipLeft,
      200000,
    ),
    _0x304b1f.closePath(),
    _0x304b1f.clip());
  let _0x44fcd4 = _0x5ad11e();
  return (_0x304b1f.restore(), _0x44fcd4);
}
function Z(_0x1c917f) {
  if (!Ye(_0x1c917f)) return { docsLeft: 0, docsTop: 0, pageMarginTop: 0 };
  let _0x334525 = _0x1c917f.getOffsetConfig();
  return {
    docsLeft: (_0x334525 == null ? undefined : _0x334525.docsLeft) ?? 0,
    docsTop: (_0x334525 == null ? undefined : _0x334525.docsTop) ?? 0,
    pageMarginTop:
      (_0x334525 == null ? undefined : _0x334525.pageMarginTop) ?? 0,
  };
}
function Ye(_0x2a5a3c) {
  return (
    typeof _0x2a5a3c == "object" &&
    !!_0x2a5a3c &&
    "getOffsetConfig" in _0x2a5a3c &&
    typeof _0x2a5a3c.getOffsetConfig == "function"
  );
}
function Xe(_0x4debec, _0xe3c941, _0x38aacf, _0x2c4efd, _0x27d15b) {
  (_0x4debec.save(),
    _0x4debec.beginPath(),
    (_0x4debec.strokeStyle = _0x27d15b),
    (_0x4debec.lineCap = "round"),
    (_0x4debec.lineWidth = _0xe8970c),
    _0x4debec.moveTo(_0xe3c941, _0x38aacf),
    _0x4debec.lineTo(_0xe3c941, _0x38aacf + _0x2c4efd),
    _0x4debec.stroke(),
    _0x4debec.restore());
}
function Ze(_0x3b8aa0, _0x15aeac, _0x59a770) {
  let { scaleX: _0x535db9, scaleY: _0x20d0ad } = _0x59a770.getAncestorScale(),
    _0x31487d = _0x59a770.getViewport("viewMain");
  return _0x31487d
    ? {
        x: _0x3b8aa0 / _0x535db9 + _0x31487d.viewportScrollX,
        y: _0x15aeac / _0x20d0ad + _0x31487d.viewportScrollY,
      }
    : { x: _0x3b8aa0, y: _0x15aeac };
}
const Qe = {
  id: _0xd5fd84.id,
  name: "docs-quote.command.delete-current-paragraph",
  type: _0x5aecff.COMMAND,
  multi: true,
  priority: 100,
  handler: async (_0x2ea930, _0x50c7b7) => {
    var _0x35aa1b;
    return (_0x50c7b7 == null || (_0x35aa1b = _0x50c7b7.blockRange) == null
      ? undefined
      : _0x35aa1b.blockType) === _0x3e8ebd.QUOTE
      ? (await _0x2ea930
          .get(_0x191487)
          .executeCommand(_0x20c58f.id, {
            unitId: _0x50c7b7.unitId,
            blockId: _0x50c7b7.blockRange["blockId"],
          }),
        true)
      : false;
  },
};
let Q = class extends _0xfa3a60 {
  constructor(_0x4f775d, _0x359e4f, _0x58cbe2) {
    (super(),
      (this._docAutoFormatService = _0x4f775d),
      (this._menuManagerService = _0x359e4f),
      (this._commandService = _0x58cbe2),
      this._menuManagerService["mergeMenu"](V),
      this._menuManagerService["appendRootMenu"](Be),
      this._initExitQuoteAutoFormat(),
      this._initCancelEmptyQuoteParagraphAutoFormat(),
      this.disposeWithMe(this._commandService["registerMultipleCommand"](Qe)));
  }
  _initExitQuoteAutoFormat() {
    this.disposeWithMe(
      this._docAutoFormatService["registerAutoFormat"]({
        id: _0x1365fb.id,
        match: (_0x482f02) =>
          _0x482f02.selection["collapsed"]
            ? _0x27dc34({
                cursorOffset: _0x482f02.selection["startOffset"],
                documentData: _0x482f02.unit["getSnapshot"](),
              }) != null
            : false,
        getMutations: (_0x2606ec) => [
          {
            id: _0x57713c.id,
            params: { cursorOffset: _0x2606ec.selection["startOffset"] },
          },
        ],
        priority: 100,
      }),
    );
  }
  _initCancelEmptyQuoteParagraphAutoFormat() {
    [_0x5d0fba.id, _0x402273.id].forEach((_0x17d21b) => {
      this.disposeWithMe(
        this._docAutoFormatService["registerAutoFormat"]({
          id: _0x17d21b,
          match: (_0x54f7a5) =>
            _0x54f7a5.selection["collapsed"]
              ? _0x129be7({
                  cursorOffset: _0x54f7a5.selection["startOffset"],
                  documentData: _0x54f7a5.unit["getSnapshot"](),
                }) != null
              : false,
          getMutations: (_0x5bdde3) => [
            {
              id: _0x4cc518.id,
              params: { cursorOffset: _0x5bdde3.selection["startOffset"] },
            },
          ],
          priority: 100,
        }),
      );
    });
  }
};
Q = G([W(0, _0x166543(_0x56848b)), W(1, _0x4aed22), W(2, _0x191487)], Q);
let $ = class extends _0x35523c {
  constructor(_0x2eb6dd = H, _0x1f8a76, _0x5d9dae, _0x288349) {
    (super(),
      (this._config = _0x2eb6dd),
      (this._injector = _0x1f8a76),
      (this._renderManagerService = _0x5d9dae),
      (this._configService = _0x288349));
    let { menu: _0x116b24, ..._0xee91b7 } = _0x78a27a({}, H, this._config);
    (_0x116b24 &&
      this._configService["setConfig"]("menu", _0x116b24, { merge: true }),
      this._configService["setConfig"]("docs-quote-ui.config", _0xee91b7));
  }
  onStarting() {
    (this._injector["add"]([K]),
      this._injector["get"](K),
      this._injector["add"]([Q]),
      this._injector["get"](Q));
  }
  onRendered() {
    this.disposeWithMe(
      this._renderManagerService["registerRenderModule"](_0x38e9e7.UNIVER_DOC, [
        X,
      ]),
    );
  }
};
(Y($, "pluginName", _0x35d6f8 + "_UI_PLUGIN"),
  Y($, "packageName", Ve),
  Y($, "version", He),
  Y($, "type", _0x38e9e7.UNIVER_DOC),
  ($ = G(
    [
      _0x26cb6a(_0x332498, _0x5b60c0, _0x38e1fb, _0xb86d1c, _0x1d2a20),
      W(1, _0x166543(_0x13e12d)),
      W(2, _0x5051ee),
      W(3, _0x559fba),
    ],
    $,
  )));
export { V as DocsQuoteUIMenuSchema, $ as UniverDocsQuoteUIPlugin };
