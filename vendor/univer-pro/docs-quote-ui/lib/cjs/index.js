Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/docs-quote"),
  t = require("@univerjs/docs-ui"),
  n = require("@univerjs/ui"),
  r = require("@univerjs/core"),
  i = require("rxjs"),
  a = require("@univerjs-pro/license"),
  o = require("@univerjs/docs"),
  s = require("@univerjs/engine-render"),
  c = require("@univerjs/icons"),
  l = require("react"),
  u = require("react/jsx-runtime"),
  d = require("@univerjs-pro/docs-column");
function f(_0x1869a7) {
  return {
    id: e.DocsQuoteInsertCommand["id"],
    type: n.MenuItemType["BUTTON"],
    icon: "QuoteIcon",
    title: "docs-quote-ui.menu.quote",
    tooltip: "docs-quote-ui.menu.quote",
    hidden$: (0, n.getMenuHiddenObservable)(
      _0x1869a7,
      r.UniverInstanceType["UNIVER_DOC"],
    ),
    disabled$: (0, t.disableMenuWhenHeaderFooterEditing)(_0x1869a7),
  };
}
function p(_0x2fe0b4) {
  return {
    ...f(_0x2fe0b4),
    hidden$: (0, i.combineLatest)([
      (0, n.getMenuHiddenObservable)(
        _0x2fe0b4,
        r.UniverInstanceType["UNIVER_DOC"],
      ),
      (0, t.hideMenuWhenSelectionInBlockRange)(_0x2fe0b4),
    ]).pipe((0, i.map)(([_0x410260, _0x482a23]) => _0x410260 || _0x482a23)),
  };
}
function m(_0x5817ed) {
  return {
    id: e.DocsQuoteInsertBelowCommand["id"],
    type: n.MenuItemType["BUTTON"],
    icon: "QuoteIcon",
    title: "docs-quote-ui.menu.quote",
    hidden$: (0, n.getMenuHiddenObservable)(
      _0x5817ed,
      r.UniverInstanceType["UNIVER_DOC"],
    ),
    disabled$: (0, t.disableMenuWhenHeaderFooterEditing)(_0x5817ed),
  };
}
const h = {
    [n.RibbonInsertGroup["MEDIA"]]: {
      [e.DocsQuoteInsertCommand["id"]]: { order: 6, menuItemFactory: f },
    },
  },
  g = {
    [n.MenuManagerPosition["RIBBON"]]: { [n.RibbonPosition["INSERT"]]: h },
    [t.FLOAT_TOOLBAR_MENU_POSITION]: {
      [t.FLOAT_TEXT_STYLE_MENU_ID]: {
        [e.DocsQuoteInsertCommand["id"]]: { order: 10, menuItemFactory: p },
      },
    },
  },
  _ = {
    ...h,
    [t.FLOAT_TEXT_STYLE_MENU_ID]: {
      [e.DocsQuoteInsertCommand["id"]]: { order: 10, menuItemFactory: p },
    },
    [n.ContextMenuPosition["PARAGRAPH"]]: {
      [n.ContextMenuGroup["LAYOUT"]]: {
        [t.INSERT_BELLOW_MENU_ID]: {
          [e.DocsQuoteInsertBelowCommand["id"]]: {
            order: 6,
            menuItemFactory: m,
          },
        },
      },
      [t.DOC_CONTENT_INSERT_MENU_ID]: {
        [n.ContextMenuGroup["LAYOUT"]]: {
          [e.DocsQuoteInsertBelowCommand["id"]]: {
            order: 6,
            menuItemFactory: m,
          },
        },
      },
      [t.EMPTY_PARAGRAPH_MENU_ID]: {
        [n.ContextMenuGroup["LAYOUT"]]: {
          [e.DocsQuoteInsertCommand["id"]]: { order: 6, menuItemFactory: f },
        },
      },
      [t.DOC_PARAGRAPH_T_INSERT_MENU_ID]: {
        quickBottom: {
          [e.DocsQuoteInsertCommand["id"]]: { order: 3, menuItemFactory: f },
        },
      },
      [t.DOC_PARAGRAPH_T_EDIT_MENU_ID]: {
        quickBottom: {
          [e.DocsQuoteInsertCommand["id"]]: { order: 4, menuItemFactory: f },
        },
      },
      [t.DOC_PARAGRAPH_T_INSERT_BELOW_MENU_ID]: {
        quickBottom: {
          [e.DocsQuoteInsertBelowCommand["id"]]: {
            order: 3,
            menuItemFactory: m,
          },
        },
      },
    },
  };
var v = "@univerjs-pro/docs-quote-ui",
  y = "1.0.0-insiders.20260907-70fc579";
const b = {},
  x = "docs-quote-ui.floating-toolbar";
function S(_0x50eb5b) {
  let {
      blockId: _0x390f9a,
      lineColor: _0x5eef52,
      textColor: _0x5a0856,
      unitId: _0xf3c174,
    } = _0x50eb5b.popup["extraProps"],
    _0x40e675 = (0, n.useDependency)(r.ICommandService),
    _0x3a8736 = (0, n.useDependency)(r.LocaleService),
    _0x36a471 = (0, n.useDependency)(n.ComponentManager).get(
      n.COLOR_PICKER_COMPONENT,
    ),
    [_0xe815d2, _0x1ec85e] = (0, l.useState)(_0x5eef52),
    [_0x2b9fc1, _0x5606a7] = (0, l.useState)(_0x5a0856),
    [_0x931a13, _0x383a8a] = (0, l.useState)(null),
    _0x322f3d = (_0x1ef0b2) =>
      _0x383a8a((_0x4f34e8) => (_0x4f34e8 === _0x1ef0b2 ? null : _0x1ef0b2)),
    _0x4f8f76 = async (_0xe871ef) => {
      let _0x3b2bc7 = await _0x40e675.executeCommand(
        e.DocsQuoteUpdateStyleCommand["id"],
        { ..._0xe871ef, blockId: _0x390f9a, unitId: _0xf3c174 },
      );
      return (
        _0x3b2bc7 &&
          _0xe871ef.lineColor != null &&
          _0x1ec85e(_0xe871ef.lineColor),
        _0x3b2bc7 &&
          _0xe871ef.textColor != null &&
          _0x5606a7(_0xe871ef.textColor),
        _0x3b2bc7
      );
    },
    _0x3d304b = _0x3a8736.t("docs-quote-ui.toolbar.lineColor"),
    _0x273a60 = _0x3a8736.t("docs-quote-ui.toolbar.textColor"),
    _0x57836d = _0x3a8736.t("docs-quote-ui.toolbar.convertToParagraph");
  return (0, u.jsxs)("div", {
    "data-u-comp": x,
    role: "toolbar",
    className:
      "univer-relative univer-flex univer-items-center univer-gap-1 univer-rounded-md univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-1 univer-shadow-sm dark:!univer-border-gray-700 dark:!univer-bg-gray-900",
    onMouseDown: (_0x4d2a69) => _0x4d2a69.stopPropagation(),
    children: [
      (0, u.jsx)(n.ToolbarButton, {
        active: _0x931a13 === "line",
        "aria-label": _0x3d304b,
        onClick: () => _0x322f3d("line"),
        children: (0, u.jsx)(c.LeftBorderDoubleIcon, {
          extend: { colorChannel1: _0xe815d2 },
        }),
      }),
      (0, u.jsx)(n.ToolbarButton, {
        active: _0x931a13 === "text",
        "aria-label": _0x273a60,
        onClick: () => _0x322f3d("text"),
        children: (0, u.jsx)(c.FontColorDoubleIcon, {
          extend: { colorChannel1: _0x2b9fc1 },
        }),
      }),
      (0, u.jsx)(n.ToolbarButton, {
        "aria-label": _0x57836d,
        onClick: () =>
          _0x40e675.executeCommand(e.DocsQuoteUnwrapCommand["id"], {
            blockId: _0x390f9a,
            unitId: _0xf3c174,
          }),
        children: (0, u.jsx)(c.TextIcon, {}),
      }),
      _0x931a13 && _0x36a471
        ? (0, u.jsx)("div", {
            className:
              "univer-absolute univer-left-0 univer-top-full univer-z-10 univer-mt-1 univer-rounded-lg univer-bg-gray-0 univer-p-4 univer-shadow-lg dark:!univer-bg-gray-900",
            children: (0, u.jsx)(_0x36a471, {
              value: _0x931a13 === "line" ? _0xe815d2 : _0x2b9fc1,
              onChange: (_0x47c2ab) =>
                _0x4f8f76(
                  _0x931a13 === "line"
                    ? { lineColor: _0x47c2ab }
                    : { textColor: _0x47c2ab },
                ),
            }),
          })
        : null,
    ],
  });
}
function C(_0x2f285d, _0x31e82a) {
  return function (_0x412546, _0x2899aa) {
    _0x31e82a(_0x412546, _0x2899aa, _0x2f285d);
  };
}
function w(_0x18160b, _0x4c07c5, _0x36c5ed, _0x17a7ec) {
  var _0x38f7be = arguments.length,
    _0x48b276 =
      _0x38f7be < 3
        ? _0x4c07c5
        : _0x17a7ec === null
          ? (_0x17a7ec = Object.getOwnPropertyDescriptor(_0x4c07c5, _0x36c5ed))
          : _0x17a7ec,
    _0x650ea3;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x48b276 = Reflect.decorate(_0x18160b, _0x4c07c5, _0x36c5ed, _0x17a7ec);
  else {
    for (var _0x3cd327 = _0x18160b.length - 1; _0x3cd327 >= 0; _0x3cd327--)
      (_0x650ea3 = _0x18160b[_0x3cd327]) &&
        (_0x48b276 =
          (_0x38f7be < 3
            ? _0x650ea3(_0x48b276)
            : _0x38f7be > 3
              ? _0x650ea3(_0x4c07c5, _0x36c5ed, _0x48b276)
              : _0x650ea3(_0x4c07c5, _0x36c5ed)) || _0x48b276);
  }
  return (
    _0x38f7be > 3 &&
      _0x48b276 &&
      Object.defineProperty(_0x4c07c5, _0x36c5ed, _0x48b276),
    _0x48b276
  );
}
let T = class extends r.Disposable {
  constructor(_0x4b13d4, _0x486459) {
    (super(),
      (this._componentManager = _0x4b13d4),
      (this._iconManager = _0x486459),
      this._registerIcons(),
      this._registerComponents());
  }
  _registerIcons() {
    this.disposeWithMe(
      this._iconManager["register"]({ QuoteIcon: c.QuoteIcon }),
    );
  }
  _registerComponents() {
    this.disposeWithMe(this._componentManager["register"](x, S));
  }
};
T = w(
  [C(0, (0, r.Inject)(n.ComponentManager)), C(1, (0, r.Inject)(n.IconManager))],
  T,
);
function E(_0x40dd19, _0x222a0a, _0x49d2ea, _0x9d6e91) {
  let _0x385a66 = [];
  return (
    _0x40dd19.forEach((_0x4b2cc8) => {
      let _0x20e12f = _0x222a0a.filter(
        (_0x5d8527) =>
          _0x5d8527.pageIndex >= 0 &&
          _0x5d8527.ed >= _0x4b2cc8.startIndex &&
          _0x5d8527.st <= _0x4b2cc8.endIndex,
      );
      Array.from(
        new Set(_0x20e12f.map((_0x200efa) => _0x200efa.pageIndex)),
      ).forEach((_0x5c0a2f) => {
        let _0xcc0ab5 = _0x20e12f.filter(
          (_0x57f8b8) => _0x57f8b8.pageIndex === _0x5c0a2f,
        );
        Array.from(
          new Set(_0xcc0ab5.map((_0x3ba56b) => _0x3ba56b.layoutFragment)),
        ).forEach((_0x5bfad4) => {
          let _0x20e2ad = _0xcc0ab5.filter(
              (_0x39d990) => _0x39d990.layoutFragment === _0x5bfad4,
            ),
            _0x1b10f6 = Math.min(
              ..._0x20e2ad.map(
                (_0x1c4f85) => _0x1c4f85.top + (_0x1c4f85.marginTop ?? 0),
              ),
            ),
            _0x55f2d3 = Math.max(
              ..._0x20e2ad.map(
                (_0x12053d) =>
                  _0x12053d.top +
                  _0x12053d.height -
                  (_0x12053d.marginBottom ?? 0),
              ),
            ),
            _0x52cc0a = Math.min(
              ..._0x20e2ad.map((_0x31c699) => _0x31c699.left),
            ),
            _0x1a5097 = Math.max(
              ..._0x20e2ad.map((_0x287d24) => _0x287d24.left + _0x287d24.width),
            ),
            _0x462366 = D(_0x20e2ad);
          _0x385a66.push({
            blockId: _0x4b2cc8.blockId,
            ..._0x462366,
            pageIndex: _0x5c0a2f,
            lineX: _0x52cc0a + _0x9d6e91,
            left: _0x52cc0a,
            width: _0x1a5097 - _0x52cc0a,
            top: _0x1b10f6 - _0x49d2ea,
            height: _0x55f2d3 - _0x1b10f6 + _0x49d2ea * 2,
          });
        });
      });
    }),
    _0x385a66
  );
}
function D(_0x1f27db) {
  let _0x36e17a = _0x1f27db
      .map((_0xed64e3) => _0xed64e3.clipLeft)
      .filter((_0x310d5f) => _0x310d5f != null),
    _0x3c9cd6 = _0x1f27db
      .map((_0x2da69e) => _0x2da69e.clipRight)
      .filter((_0x1869fd) => _0x1869fd != null);
  if (!_0x36e17a.length || !_0x3c9cd6.length) return {};
  let _0x1d42ec = Math.max(..._0x36e17a),
    _0x5dc093 = Math.min(..._0x3c9cd6);
  return _0x5dc093 > _0x1d42ec
    ? { clipLeft: _0x1d42ec, clipRight: _0x5dc093 }
    : {};
}
function O(_0x57a3bb) {
  "@babel/helpers - typeof";
  return (
    (O =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x6af334) {
            return typeof _0x6af334;
          }
        : function (_0x219e9e) {
            return _0x219e9e &&
              typeof Symbol == "function" &&
              _0x219e9e.constructor === Symbol &&
              _0x219e9e !== Symbol.prototype
              ? "symbol"
              : typeof _0x219e9e;
          }),
    O(_0x57a3bb)
  );
}
function k(_0x3dc075, _0x2e79cc) {
  if (O(_0x3dc075) != "object" || !_0x3dc075) return _0x3dc075;
  var _0x4e8169 = _0x3dc075[Symbol.toPrimitive];
  if (_0x4e8169 !== undefined) {
    var _0x33bed9 = _0x4e8169.call(_0x3dc075, _0x2e79cc || "default");
    if (O(_0x33bed9) != "object") return _0x33bed9;
    throw TypeError(
      "@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.",
    );
  }
  return (_0x2e79cc === "string" ? String : Number)(_0x3dc075);
}
function A(_0x59874c) {
  var _0x595238 = k(_0x59874c, "string");
  return O(_0x595238) == "symbol" ? _0x595238 : _0x595238 + "";
}
function j(_0x335f45, _0x43eb7d, _0x3ed8e5) {
  return (
    (_0x43eb7d = A(_0x43eb7d)) in _0x335f45
      ? Object.defineProperty(_0x335f45, _0x43eb7d, {
          value: _0x3ed8e5,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x335f45[_0x43eb7d] = _0x3ed8e5),
    _0x335f45
  );
}
let M = class extends r.Disposable {
  constructor(_0x5c871d, _0x1366e4, _0x2a0951, _0x4d41ee, _0x42c036) {
    (super(),
      (this._context = _0x5c871d),
      (this._docSkeletonManagerService = _0x1366e4),
      (this._docCanvasPopManagerService = _0x2a0951),
      (this._themeService = _0x4d41ee),
      (this._permissionService = _0x42c036),
      j(this, "_hitRects", []),
      j(this, "_toolbarPopoverDisposable", null),
      this._initRender(),
      this._initPointer(),
      this.disposeWithMe(
        this._permissionService["permissionPointUpdate$"].subscribe(() =>
          this._closeToolbarPopover(),
        ),
      ));
  }
  _initPointer() {
    let _0x2f6960 = this._context["scene"];
    this.disposeWithMe(
      _0x2f6960.onPointerDown$["subscribeEvent"]({
        next: ([_0x58d625]) => {
          if (_0x58d625.button === 2) return;
          let _0xc7ee13 = R(
              _0x58d625.offsetX,
              _0x58d625.offsetY,
              this._context["scene"],
            ),
            _0x4c5c77 = this._hitRects["find"](
              (_0x5059fe) =>
                _0xc7ee13.x >= _0x5059fe.left &&
                _0xc7ee13.x <= _0x5059fe.right &&
                _0xc7ee13.y >= _0x5059fe.top &&
                _0xc7ee13.y <= _0x5059fe.bottom,
            );
          if (!_0x4c5c77) {
            this._closeToolbarPopover();
            return;
          }
          this._openToolbarPopover(_0x4c5c77);
        },
        priority: -11000,
      }),
    );
  }
  _initRender() {
    let _0x9586cc = this._context["mainComponent"];
    _0x9586cc instanceof s.Documents &&
      this.disposeWithMe(
        _0x9586cc.pageRender$["subscribe"]((_0x136f12) =>
          this._drawPage(_0x136f12),
        ),
      );
  }
  _drawPage(_0x5ef969) {
    var _0x36ad19;
    let _0x34e176 =
      ((_0x36ad19 = this._context["unit"].getBody()) == null ||
      (_0x36ad19 = _0x36ad19.blockRanges) == null
        ? undefined
        : _0x36ad19.filter(
            (_0x396e2d) =>
              _0x396e2d.blockType === r.DocumentBlockRangeType["QUOTE"],
          )) ?? [];
    if (!_0x34e176.length) {
      this._hitRects = [];
      return;
    }
    let _0x14d515 =
        this._docSkeletonManagerService["getSkeleton"]().getSkeletonData(),
      _0x1663c1 = (_0x14d515 == null ? undefined : _0x14d515.pages) ?? [],
      _0x25f968 = _0x1663c1.indexOf(_0x5ef969.page);
    if (_0x25f968 < 0) return;
    let _0x495034 = E(
        _0x34e176,
        this._collectLines(_0x1663c1, _0x34e176),
        4,
        0,
      ),
      _0x5a6c5f = F(this._context["mainComponent"]);
    (_0x25f968 === 0 && (this._hitRects = []),
      _0x495034
        .filter((_0x219992) => _0x219992.pageIndex === _0x25f968)
        .forEach((_0x2bc786) => {
          let _0x542759 = this._getQuoteLineColor(_0x2bc786.blockId);
          (P(_0x5ef969.ctx, _0x2bc786, () =>
            L(
              _0x5ef969.ctx,
              _0x2bc786.lineX,
              _0x2bc786.top,
              _0x2bc786.height,
              _0x542759,
            ),
          ),
            this._hitRects["push"]({
              blockId: _0x2bc786.blockId,
              bottom: _0x2bc786.top + _0x2bc786.height + _0x5a6c5f.docsTop,
              left: _0x2bc786.left + _0x5a6c5f.docsLeft,
              right: _0x2bc786.left + _0x2bc786.width + _0x5a6c5f.docsLeft,
              top: _0x2bc786.top + _0x5a6c5f.docsTop,
            }));
        }));
  }
  _collectLines(_0x3dbc10, _0x45248a) {
    let _0x480142 = [],
      _0x2bf6ff = this._getQuoteParagraphOwners(_0x45248a),
      _0x6680df = F(this._context["mainComponent"]);
    return (
      (0, d.documentSkeletonLineIterator)(
        _0x3dbc10,
        {
          docsLeft: _0x6680df.docsLeft,
          pageMarginTop: _0x6680df.pageMarginTop,
          unitId: this._context["unitId"],
        },
        (_0x54a765) => {
          let _0x430d66 = _0x2bf6ff.get(_0x54a765.line["paragraphIndex"]);
          if (_0x430d66) {
            if (_0x54a765.clipLeft != null && _0x54a765.clipRight != null) {
              let _0x495349 = _0x54a765.pageLeft + _0x54a765.column["left"],
                _0x231cf7 = _0x495349 + _0x54a765.column["width"];
              if (
                Math.min(_0x231cf7, _0x54a765.clipRight) <=
                Math.max(_0x495349, _0x54a765.clipLeft)
              )
                return;
            }
            _0x480142.push(N(_0x54a765, _0x430d66));
          }
        },
      ),
      _0x480142
    );
  }
  _getQuoteParagraphOwners(_0x4ca7a4) {
    var _0x14603a;
    let _0x1faf89 = new Map(),
      _0x9be3b2 =
        ((_0x14603a = this._context["unit"].getBody()) == null
          ? undefined
          : _0x14603a.paragraphs) ?? [];
    return (
      _0x4ca7a4.forEach((_0x19d7cd) => {
        _0x9be3b2.forEach((_0x93e216) => {
          _0x93e216.startIndex > _0x19d7cd.startIndex &&
            _0x93e216.startIndex < _0x19d7cd.endIndex &&
            _0x1faf89.set(_0x93e216.startIndex, _0x19d7cd);
        });
      }),
      _0x1faf89
    );
  }
  _getQuoteLineColor(_0x55739f) {
    var _0x2b0a0b, _0x2df977, _0x154a18;
    let _0x1baef1 = this._context["unit"].getBody(),
      _0x36d3f2 =
        _0x1baef1 == null || (_0x2b0a0b = _0x1baef1.blockRanges) == null
          ? undefined
          : _0x2b0a0b.find(
              (_0x64ad0c) =>
                _0x64ad0c.blockId === _0x55739f &&
                _0x64ad0c.blockType === r.DocumentBlockRangeType["QUOTE"],
            ),
      _0x350422 =
        _0x1baef1 == null || (_0x2df977 = _0x1baef1.paragraphs) == null
          ? undefined
          : _0x2df977.find(
              (_0xb45057) =>
                _0x36d3f2 &&
                _0xb45057.startIndex > _0x36d3f2.startIndex &&
                _0xb45057.startIndex < _0x36d3f2.endIndex,
            );
    return (
      (_0x350422 == null ||
      (_0x154a18 = _0x350422.paragraphStyle) == null ||
      (_0x154a18 = _0x154a18.borderLeft) == null
        ? undefined
        : _0x154a18.color["rgb"]) ??
      this._themeService["getColorFromTheme"](e.DOCS_QUOTE_LINE_COLOR_TOKEN)
    );
  }
  _openToolbarPopover(_0x2465e0) {
    (this._closeToolbarPopover(),
      this._canEditBlock(_0x2465e0.blockId) &&
        (this._toolbarPopoverDisposable = this._docCanvasPopManagerService[
          "attachPopupToRect"
        ](
          _0x2465e0,
          {
            componentKey: x,
            direction: "top-center",
            offset: [0, 8],
            extraProps: {
              blockId: _0x2465e0.blockId,
              lineColor: this._getQuoteLineColor(_0x2465e0.blockId),
              textColor: this._getQuoteTextColor(_0x2465e0.blockId),
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
    var _0x26729a;
    ((_0x26729a = this._toolbarPopoverDisposable) == null ||
      _0x26729a.dispose(),
      (this._toolbarPopoverDisposable = null));
  }
  _canEditBlock(_0x5ca5f5) {
    return (0, o.canEditDocumentTargets)(
      this._permissionService,
      this._context["unitId"],
      [
        ...(0, o.getDocumentEntityParentPermissionObjectIds)(
          this._context["unit"],
          "",
          "custom-block",
          _0x5ca5f5,
        ),
        (0, o.getDocumentEntityPermissionObjectId)(
          "",
          "custom-block",
          _0x5ca5f5,
        ),
      ],
    );
  }
  _getQuoteTextColor(_0x464f82) {
    var _0x1865a1, _0x43e160;
    let _0x5e82c0 = this._context["unit"].getBody(),
      _0x38f66c =
        _0x5e82c0 == null || (_0x1865a1 = _0x5e82c0.blockRanges) == null
          ? undefined
          : _0x1865a1.find(
              (_0x592b67) =>
                _0x592b67.blockId === _0x464f82 &&
                _0x592b67.blockType === r.DocumentBlockRangeType["QUOTE"],
            );
    return _0x38f66c
      ? ((_0x5e82c0 == null ||
        (_0x43e160 = _0x5e82c0.textRuns) == null ||
        (_0x43e160 = _0x43e160.find(
          (_0x7ee7d0) =>
            _0x7ee7d0.ed > _0x38f66c.startIndex + 1 &&
            _0x7ee7d0.st < _0x38f66c.endIndex,
        )) == null ||
        (_0x43e160 = _0x43e160.ts) == null ||
        (_0x43e160 = _0x43e160.cl) == null
          ? undefined
          : _0x43e160.rgb) ?? r.DEFAULT_STYLES["cl"].rgb)
      : r.DEFAULT_STYLES["cl"].rgb;
  }
};
M = w(
  [
    C(1, (0, r.Inject)(o.DocSkeletonManagerService)),
    C(2, (0, r.Inject)(t.DocCanvasPopManagerService)),
    C(3, (0, r.Inject)(r.ThemeService)),
    C(4, r.IPermissionService),
  ],
  M,
);
function N(_0x47e436, _0x4e65cc, _0x9aae5b) {
  let {
    column: _0x59ef84,
    line: _0x2fe2e3,
    pageIndex: _0x334358,
    pageLeft: _0x22ec93,
    sectionTop: _0x2377a3,
  } = _0x47e436;
  return {
    layoutFragment: _0x59ef84,
    st: _0x4e65cc.startIndex,
    ed: _0x4e65cc.endIndex,
    left: _0x22ec93 + _0x59ef84.left,
    top: _0x2377a3 + _0x2fe2e3.top,
    width: _0x47e436.lineWidth,
    clipLeft:
      _0x47e436.clipLeft ??
      (_0x9aae5b == null ? undefined : _0x9aae5b.clipLeft),
    clipRight:
      _0x47e436.clipRight ??
      (_0x9aae5b == null ? undefined : _0x9aae5b.clipRight),
    height: _0x2fe2e3.lineHeight,
    marginBottom: _0x2fe2e3.marginBottom,
    marginTop: _0x2fe2e3.marginTop,
    pageIndex: _0x334358,
  };
}
function P(_0x520d4b, _0x4949c4, _0x2bed40) {
  if (
    _0x4949c4.clipLeft == null ||
    _0x4949c4.clipRight == null ||
    _0x4949c4.clipRight <= _0x4949c4.clipLeft
  )
    return _0x2bed40();
  (_0x520d4b.save(),
    _0x520d4b.beginPath(),
    _0x520d4b.rectByPrecision(
      _0x4949c4.clipLeft,
      -100000,
      _0x4949c4.clipRight - _0x4949c4.clipLeft,
      200000,
    ),
    _0x520d4b.closePath(),
    _0x520d4b.clip());
  let _0x13c159 = _0x2bed40();
  return (_0x520d4b.restore(), _0x13c159);
}
function F(_0x559e2d) {
  if (!I(_0x559e2d)) return { docsLeft: 0, docsTop: 0, pageMarginTop: 0 };
  let _0x1033ca = _0x559e2d.getOffsetConfig();
  return {
    docsLeft: (_0x1033ca == null ? undefined : _0x1033ca.docsLeft) ?? 0,
    docsTop: (_0x1033ca == null ? undefined : _0x1033ca.docsTop) ?? 0,
    pageMarginTop:
      (_0x1033ca == null ? undefined : _0x1033ca.pageMarginTop) ?? 0,
  };
}
function I(_0x125d8d) {
  return (
    typeof _0x125d8d == "object" &&
    !!_0x125d8d &&
    "getOffsetConfig" in _0x125d8d &&
    typeof _0x125d8d.getOffsetConfig == "function"
  );
}
function L(_0xd83cf5, _0x17756f, _0x3b8bd8, _0x459683, _0x2eafe9) {
  (_0xd83cf5.save(),
    _0xd83cf5.beginPath(),
    (_0xd83cf5.strokeStyle = _0x2eafe9),
    (_0xd83cf5.lineCap = "round"),
    (_0xd83cf5.lineWidth = e.DOCS_QUOTE_LINE_WIDTH),
    _0xd83cf5.moveTo(_0x17756f, _0x3b8bd8),
    _0xd83cf5.lineTo(_0x17756f, _0x3b8bd8 + _0x459683),
    _0xd83cf5.stroke(),
    _0xd83cf5.restore());
}
function R(_0x48e40a, _0x384c1c, _0x53c5e4) {
  let { scaleX: _0x33540c, scaleY: _0x37a22d } = _0x53c5e4.getAncestorScale(),
    _0x1f23a7 = _0x53c5e4.getViewport("viewMain");
  return _0x1f23a7
    ? {
        x: _0x48e40a / _0x33540c + _0x1f23a7.viewportScrollX,
        y: _0x384c1c / _0x37a22d + _0x1f23a7.viewportScrollY,
      }
    : { x: _0x48e40a, y: _0x384c1c };
}
const z = {
  id: t.DeleteCurrentParagraphCommand["id"],
  name: "docs-quote.command.delete-current-paragraph",
  type: r.CommandType["COMMAND"],
  multi: true,
  priority: 100,
  handler: async (_0x779375, _0x110232) => {
    var _0x3d344c;
    return (_0x110232 == null || (_0x3d344c = _0x110232.blockRange) == null
      ? undefined
      : _0x3d344c.blockType) === r.DocumentBlockRangeType["QUOTE"]
      ? (await _0x779375
          .get(r.ICommandService)
          .executeCommand(e.DocsQuoteRemoveCommand["id"], {
            unitId: _0x110232.unitId,
            blockId: _0x110232.blockRange["blockId"],
          }),
        true)
      : false;
  },
};
let B = class extends r.Disposable {
  constructor(_0x119cb7, _0x4abda7, _0x4b032c) {
    (super(),
      (this._docAutoFormatService = _0x119cb7),
      (this._menuManagerService = _0x4abda7),
      (this._commandService = _0x4b032c),
      this._menuManagerService["mergeMenu"](_),
      this._menuManagerService["appendRootMenu"](g),
      this._initExitQuoteAutoFormat(),
      this._initCancelEmptyQuoteParagraphAutoFormat(),
      this.disposeWithMe(this._commandService["registerMultipleCommand"](z)));
  }
  _initExitQuoteAutoFormat() {
    this.disposeWithMe(
      this._docAutoFormatService["registerAutoFormat"]({
        id: t.EnterCommand["id"],
        match: (_0x76b539) =>
          _0x76b539.selection["collapsed"]
            ? (0, e.buildExitQuoteActions)({
                cursorOffset: _0x76b539.selection["startOffset"],
                documentData: _0x76b539.unit["getSnapshot"](),
              }) != null
            : false,
        getMutations: (_0x1f10a6) => [
          {
            id: e.DocsQuoteExitCommand["id"],
            params: { cursorOffset: _0x1f10a6.selection["startOffset"] },
          },
        ],
        priority: 100,
      }),
    );
  }
  _initCancelEmptyQuoteParagraphAutoFormat() {
    [t.DeleteLeftCommand["id"], t.DeleteRightCommand["id"]].forEach(
      (_0x3cb621) => {
        this.disposeWithMe(
          this._docAutoFormatService["registerAutoFormat"]({
            id: _0x3cb621,
            match: (_0xcf1ebc) =>
              _0xcf1ebc.selection["collapsed"]
                ? (0, e.buildCancelEmptyQuoteParagraphActions)({
                    cursorOffset: _0xcf1ebc.selection["startOffset"],
                    documentData: _0xcf1ebc.unit["getSnapshot"](),
                  }) != null
                : false,
            getMutations: (_0x27ec50) => [
              {
                id: e.DocsQuoteCancelEmptyParagraphCommand["id"],
                params: { cursorOffset: _0x27ec50.selection["startOffset"] },
              },
            ],
            priority: 100,
          }),
        );
      },
    );
  }
};
B = w(
  [
    C(0, (0, r.Inject)(t.DocAutoFormatService)),
    C(1, n.IMenuManagerService),
    C(2, r.ICommandService),
  ],
  B,
);
let V = class extends r.Plugin {
  constructor(_0x229d24 = b, _0x38e48f, _0x2dfb22, _0x3234a9) {
    (super(),
      (this._config = _0x229d24),
      (this._injector = _0x38e48f),
      (this._renderManagerService = _0x2dfb22),
      (this._configService = _0x3234a9));
    let { menu: _0x35fc7f, ..._0x1f2bc5 } = (0, r.merge)({}, b, this._config);
    (_0x35fc7f &&
      this._configService["setConfig"]("menu", _0x35fc7f, { merge: true }),
      this._configService["setConfig"]("docs-quote-ui.config", _0x1f2bc5));
  }
  onStarting() {
    (this._injector["add"]([T]),
      this._injector["get"](T),
      this._injector["add"]([B]),
      this._injector["get"](B));
  }
  onRendered() {
    this.disposeWithMe(
      this._renderManagerService["registerRenderModule"](
        r.UniverInstanceType["UNIVER_DOC"],
        [M],
      ),
    );
  }
};
(j(V, "pluginName", e.DOCS_QUOTE_PLUGIN + "_UI_PLUGIN"),
  j(V, "packageName", v),
  j(V, "version", y),
  j(V, "type", r.UniverInstanceType["UNIVER_DOC"]),
  (V = w(
    [
      (0, r.DependentOn)(
        a.UniverLicensePlugin,
        o.UniverDocsPlugin,
        s.UniverRenderEnginePlugin,
        t.UniverDocsUIPlugin,
        e.UniverDocsQuotePlugin,
      ),
      C(1, (0, r.Inject)(r.Injector)),
      C(2, s.IRenderManagerService),
      C(3, r.IConfigService),
    ],
    V,
  )),
  (exports.DocsQuoteUIMenuSchema = _),
  Object.defineProperty(exports, "UniverDocsQuoteUIPlugin", {
    enumerable: true,
    get: function () {
      return V;
    },
  }));
