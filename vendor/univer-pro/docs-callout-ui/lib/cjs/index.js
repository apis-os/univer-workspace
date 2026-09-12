Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/docs-callout"),
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
function f(_0xc5caa7) {
  return {
    id: e.DocsCalloutInsertCommand["id"],
    type: n.MenuItemType["BUTTON"],
    icon: "CalloutIcon",
    title: "docs-callout-ui.menu.callout",
    tooltip: "docs-callout-ui.menu.callout",
    hidden$: (0, n.getMenuHiddenObservable)(
      _0xc5caa7,
      r.UniverInstanceType["UNIVER_DOC"],
    ),
    disabled$: (0, t.disableMenuWhenHeaderFooterEditing)(_0xc5caa7),
  };
}
function p(_0x7c20dd) {
  return {
    ...f(_0x7c20dd),
    hidden$: (0, i.combineLatest)([
      (0, n.getMenuHiddenObservable)(
        _0x7c20dd,
        r.UniverInstanceType["UNIVER_DOC"],
      ),
      (0, t.hideMenuWhenSelectionInBlockRange)(_0x7c20dd),
    ]).pipe((0, i.map)(([_0x4fd0d5, _0x5e7a73]) => _0x4fd0d5 || _0x5e7a73)),
  };
}
function m(_0x4a01de) {
  return {
    id: e.DocsCalloutInsertBelowCommand["id"],
    type: n.MenuItemType["BUTTON"],
    icon: "CalloutIcon",
    title: "docs-callout-ui.menu.callout",
    hidden$: (0, n.getMenuHiddenObservable)(
      _0x4a01de,
      r.UniverInstanceType["UNIVER_DOC"],
    ),
    disabled$: (0, t.disableMenuWhenHeaderFooterEditing)(_0x4a01de),
  };
}
const h = {
    [n.RibbonInsertGroup["MEDIA"]]: {
      [e.DocsCalloutInsertCommand["id"]]: { order: 5, menuItemFactory: f },
    },
  },
  g = {
    [n.MenuManagerPosition["RIBBON"]]: { [n.RibbonPosition["INSERT"]]: h },
    [t.FLOAT_TOOLBAR_MENU_POSITION]: {
      [t.FLOAT_TEXT_STYLE_MENU_ID]: {
        [e.DocsCalloutInsertCommand["id"]]: { order: 11, menuItemFactory: p },
      },
    },
  },
  _ = {
    ...h,
    [t.FLOAT_TEXT_STYLE_MENU_ID]: {
      [e.DocsCalloutInsertCommand["id"]]: { order: 11, menuItemFactory: p },
    },
    [n.ContextMenuPosition["PARAGRAPH"]]: {
      [n.ContextMenuGroup["LAYOUT"]]: {
        [t.INSERT_BELLOW_MENU_ID]: {
          [e.DocsCalloutInsertBelowCommand["id"]]: {
            order: 5,
            menuItemFactory: m,
          },
        },
      },
      [t.DOC_CONTENT_INSERT_MENU_ID]: {
        [n.ContextMenuGroup["LAYOUT"]]: {
          [e.DocsCalloutInsertBelowCommand["id"]]: {
            order: 5,
            menuItemFactory: m,
          },
        },
      },
      [t.EMPTY_PARAGRAPH_MENU_ID]: {
        [n.ContextMenuGroup["LAYOUT"]]: {
          [e.DocsCalloutInsertCommand["id"]]: { order: 5, menuItemFactory: f },
        },
      },
      [t.DOC_PARAGRAPH_T_INSERT_MENU_ID]: {
        quickBottom: {
          [e.DocsCalloutInsertCommand["id"]]: { order: 4, menuItemFactory: f },
        },
      },
      [t.DOC_PARAGRAPH_T_EDIT_MENU_ID]: {
        quickBottom: {
          [e.DocsCalloutInsertCommand["id"]]: { order: 5, menuItemFactory: f },
        },
      },
      [t.DOC_PARAGRAPH_T_INSERT_BELOW_MENU_ID]: {
        quickBottom: {
          [e.DocsCalloutInsertBelowCommand["id"]]: {
            order: 4,
            menuItemFactory: m,
          },
        },
      },
    },
  };
var v = "@univerjs-pro/docs-callout-ui",
  y = "1.0.0-insiders.20260907-70fc579";
const b = {};
function x(_0x384dce, _0x5544d5) {
  return function (_0x45c281, _0x350f3d) {
    _0x5544d5(_0x45c281, _0x350f3d, _0x384dce);
  };
}
function S(_0x47d0c8, _0x9a2228, _0x1dd7d1, _0x3385dc) {
  var _0x2d0314 = arguments.length,
    _0x7b8178 =
      _0x2d0314 < 3
        ? _0x9a2228
        : _0x3385dc === null
          ? (_0x3385dc = Object.getOwnPropertyDescriptor(_0x9a2228, _0x1dd7d1))
          : _0x3385dc,
    _0x5a8fb8;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x7b8178 = Reflect.decorate(_0x47d0c8, _0x9a2228, _0x1dd7d1, _0x3385dc);
  else {
    for (var _0x13ef29 = _0x47d0c8.length - 1; _0x13ef29 >= 0; _0x13ef29--)
      (_0x5a8fb8 = _0x47d0c8[_0x13ef29]) &&
        (_0x7b8178 =
          (_0x2d0314 < 3
            ? _0x5a8fb8(_0x7b8178)
            : _0x2d0314 > 3
              ? _0x5a8fb8(_0x9a2228, _0x1dd7d1, _0x7b8178)
              : _0x5a8fb8(_0x9a2228, _0x1dd7d1)) || _0x7b8178);
  }
  return (
    _0x2d0314 > 3 &&
      _0x7b8178 &&
      Object.defineProperty(_0x9a2228, _0x1dd7d1, _0x7b8178),
    _0x7b8178
  );
}
let C = class extends r.Disposable {
  constructor(_0x5d58dc, _0xfeed93, _0x413590) {
    (super(),
      (this._clipboardService = _0x5d58dc),
      (this._pasteAdapterService = _0xfeed93),
      (this._model = _0x413590),
      this.disposeWithMe(
        this._clipboardService["addClipboardHook"]({
          onCopyDocData: (_0x2b4dff, _0x2125ff) =>
            this._appendConfig(_0x2b4dff, _0x2125ff.sourceDocuments),
        }),
      ),
      this.disposeWithMe(
        this._pasteAdapterService["registerAdapter"]({
          getPasteMutationInfos: (_0x59694b) =>
            this._getPasteMutationInfos(_0x59694b),
        }),
      ));
  }
  _appendConfig(_0x32b56f, _0x1270be) {
    let _0x382bcc = {};
    return (
      _0x1270be.forEach((_0x5f4106) => {
        var _0x53176a;
        (_0x53176a = _0x5f4106.body) == null ||
          (_0x53176a = _0x53176a.blockRanges) == null ||
          _0x53176a.forEach((_0x57d4fc) => {
            if (_0x57d4fc.blockType !== r.DocumentBlockRangeType["CALLOUT"])
              return;
            let _0x2a32bc = this._model["getCalloutConfig"](
              _0x5f4106.id,
              _0x57d4fc.blockId,
            );
            _0x2a32bc &&
              (_0x382bcc[_0x57d4fc.blockId] = (0, e.normalizeDocsCalloutConfig)(
                _0x2a32bc,
              ));
          });
      }),
      Object.keys(_0x382bcc).length === 0
        ? _0x32b56f
        : {
            ..._0x32b56f,
            resources: [
              ...(_0x32b56f.resources ?? []).filter(
                (_0x1dc403) => _0x1dc403.name !== e.DOCS_CALLOUT_PLUGIN,
              ),
              {
                name: e.DOCS_CALLOUT_PLUGIN,
                data: JSON.stringify({ callouts: _0x382bcc }),
              },
            ],
          }
    );
  }
  _getPasteMutationInfos(_0x11fa93) {
    var _0x3de5d4;
    let _0x3e2cd1 =
        (_0x3de5d4 = _0x11fa93.doc["resources"]) == null
          ? undefined
          : _0x3de5d4.find(
              (_0x4a11e1) => _0x4a11e1.name === e.DOCS_CALLOUT_PLUGIN,
            ),
      _0x5334ba = _0x3e2cd1 ? w(_0x3e2cd1.data).callouts : {},
      _0x18ff5f = [],
      _0x2ac981 = [];
    return (
      _0x11fa93.blockRangeMappings["forEach"](
        ({ sourceBlockRange: _0x55948f, targetBlockRange: _0x44bd32 }) => {
          if (_0x55948f.blockType !== r.DocumentBlockRangeType["CALLOUT"])
            return;
          let _0x49e3be = _0x5334ba[_0x55948f.blockId];
          _0x49e3be &&
            (_0x18ff5f.push({
              id: e.SetDocsCalloutConfigMutation["id"],
              params: {
                unitId: _0x11fa93.unitId,
                blockId: _0x44bd32.blockId,
                config: _0x49e3be,
              },
            }),
            _0x2ac981.push({
              id: e.RemoveDocsCalloutConfigMutation["id"],
              params: { unitId: _0x11fa93.unitId, blockId: _0x44bd32.blockId },
            }));
        },
      ),
      { redoMutations: _0x18ff5f, undoMutations: _0x2ac981 }
    );
  }
};
C = S(
  [
    x(0, (0, r.Inject)(t.IDocClipboardService)),
    x(1, (0, r.Inject)(t.IDocClipboardPasteAdapterService)),
    x(2, (0, r.Inject)(e.DocsCalloutModel)),
  ],
  C,
);
function w(_0x2ecca7) {
  try {
    return (0, e.normalizeDocsCalloutMetadataResource)(JSON.parse(_0x2ecca7));
  } catch {
    return { callouts: {} };
  }
}
const T = "docs-callout-ui.floating-toolbar",
  E = [
    "red.500",
    "orange.400",
    "green.400",
    "blue.500",
    "primary.500",
    "purple.500",
    "pink.500",
  ];
function D(_0x127f58) {
  let {
      blockId: _0x3bb20d,
      config: _0x358d92,
      textColor: _0x41b393,
      unitId: _0x25cc8a,
    } = _0x127f58.popup["extraProps"],
    _0x33b8a4 = (0, n.useDependency)(r.ICommandService),
    _0xa0f8af = (0, n.useDependency)(r.LocaleService),
    _0x546d4b = (0, n.useDependency)(r.ThemeService),
    _0x1b6107 = (0, n.useObservable)(
      () => _0x546d4b.currentTheme$,
      _0x546d4b.getCurrentTheme(),
      false,
      [_0x546d4b],
    ),
    [_0x182c8d, _0x400d4c] = (0, l.useState)(_0x358d92),
    [_0x266f82, _0x37e02a] = (0, l.useState)(_0x41b393),
    [_0x5819e1, _0x3de793] = (0, l.useState)(false),
    _0x5ed5f7 = _0x546d4b.getColorFromTheme(
      e.DOCS_CALLOUT_BACKGROUND_COLOR_TOKEN,
    ),
    _0x232a5d = _0x546d4b.getColorFromTheme(e.DOCS_CALLOUT_BORDER_COLOR_TOKEN),
    _0x5595a3 = _0x182c8d.backgroundColor || _0x5ed5f7,
    _0x54cd25 = _0x182c8d.borderColor || _0x232a5d,
    _0x2ed131 = [_0x5ed5f7, ...ee(_0x1b6107, _0x546d4b)],
    _0x3d09af = E.map((_0x4ed854) => _0x546d4b.getColorFromTheme(_0x4ed854)),
    _0x12981c = async (_0x5a3e3e) => {
      let _0x2ca75a = await _0x33b8a4.executeCommand(
        e.DocsCalloutUpdateCommand["id"],
        { blockId: _0x3bb20d, config: _0x5a3e3e, unitId: _0x25cc8a },
      );
      return (
        _0x2ca75a && _0x400d4c((_0x32b062) => ({ ..._0x32b062, ..._0x5a3e3e })),
        _0x2ca75a
      );
    },
    _0x1c1444 = async (_0x452d43) => {
      let _0x19f79b = await _0x33b8a4.executeCommand(
        e.DocsCalloutSetTextColorCommand["id"],
        { blockId: _0x3bb20d, unitId: _0x25cc8a, value: _0x452d43 },
      );
      return (_0x19f79b && _0x37e02a(_0x452d43 ?? undefined), _0x19f79b);
    },
    _0x45265e = async () => {
      let _0x1b3b5f = await _0x33b8a4.executeCommand(
        e.DocsCalloutResetColorsCommand["id"],
        { blockId: _0x3bb20d, unitId: _0x25cc8a },
      );
      return (
        _0x1b3b5f &&
          (_0x400d4c((_0x1f23f6) => ({
            ..._0x1f23f6,
            backgroundColor: "",
            borderColor: "",
            borderOpacity: e.DEFAULT_CALLOUT_CONFIG["borderOpacity"],
            borderStyle: e.DEFAULT_CALLOUT_CONFIG["borderStyle"],
            borderWidth: e.DEFAULT_CALLOUT_CONFIG["borderWidth"],
          })),
          _0x37e02a(undefined)),
        _0x1b3b5f
      );
    },
    _0x2d95eb = _0xa0f8af.t("docs-callout-ui.menu.callout"),
    _0x28f816 = _0xa0f8af.t("docs-callout-ui.toolbar.backgroundColor"),
    _0x3ed33b = _0xa0f8af.t("docs-callout-ui.toolbar.border"),
    _0x4f33b2 = _0xa0f8af.t("docs-callout-ui.toolbar.textColor"),
    _0x5db201 = _0xa0f8af.t("docs-callout-ui.toolbar.convertToParagraph"),
    _0x4a3cf6 = _0xa0f8af.t("docs-callout-ui.toolbar.resetColor"),
    _0x3f06de = (_0x1515f6) => _0x1515f6.stopPropagation();
  return (0, u.jsxs)("div", {
    "data-u-comp": T,
    role: "toolbar",
    className:
      "univer-relative univer-flex univer-items-center univer-gap-1 univer-rounded-md univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-1 univer-shadow-sm dark:!univer-border-gray-700 dark:!univer-bg-gray-900",
    onMouseDown: _0x3f06de,
    children: [
      (0, u.jsx)(n.ToolbarButton, {
        active: _0x5819e1,
        "aria-label": _0x2d95eb,
        onClick: () => _0x3de793((_0x3525b) => !_0x3525b),
        children: (0, u.jsx)(c.PaintIcon, { className: "univer-text-xl" }),
      }),
      (0, u.jsx)(n.ToolbarButton, {
        "aria-label": _0x5db201,
        onClick: () =>
          _0x33b8a4.executeCommand(e.DocsCalloutUnwrapCommand["id"], {
            blockId: _0x3bb20d,
            unitId: _0x25cc8a,
          }),
        children: (0, u.jsx)(c.TextIcon, {}),
      }),
      _0x5819e1
        ? (0, u.jsx)("div", {
            "data-u-comp": "docs-callout-color-panel",
            className:
              "univer-absolute\x20univer-left-1\x20univer-top-full\x20univer-z-10\x20univer-w-[296px]\x20univer-rounded-lg\x20univer-bg-gray-0\x20univer-p-3\x20univer-shadow-lg\x20dark:!univer-bg-gray-900",
            onPointerDown: _0x3f06de,
            onMouseDown: _0x3f06de,
            onClick: _0x3f06de,
            children: (0, u.jsxs)("div", {
              className: "univer-flex univer-flex-col univer-gap-4",
              children: [
                (0, u.jsxs)(O, {
                  title: _0x4f33b2,
                  children: [
                    (0, u.jsx)(k, {
                      label: _0x4a3cf6,
                      selected: _0x266f82 == null,
                      onClick: () => _0x1c1444(null),
                    }),
                    _0x3d09af.map((_0x2e0278) =>
                      (0, u.jsx)(
                        k,
                        {
                          color: _0x2e0278,
                          label: _0x4f33b2,
                          selected:
                            _0x266f82 != null && A(_0x266f82, _0x2e0278),
                          variant: "text",
                          onClick: () => _0x1c1444(_0x2e0278),
                        },
                        "text-" + _0x2e0278,
                      ),
                    ),
                  ],
                }),
                (0, u.jsxs)(O, {
                  title: _0x3ed33b,
                  children: [
                    (0, u.jsx)(k, {
                      label: _0xa0f8af.t("docs-callout-ui.toolbar.borderNone"),
                      selected: _0x182c8d.borderWidth === 0,
                      onClick: () => _0x12981c({ borderWidth: 0 }),
                    }),
                    (0, u.jsx)(k, {
                      color: _0x232a5d,
                      label: _0x3ed33b,
                      selected:
                        _0x182c8d.borderWidth > 0 && A(_0x54cd25, _0x232a5d),
                      onClick: () =>
                        _0x12981c({
                          borderColor: "",
                          borderOpacity:
                            e.DEFAULT_CALLOUT_CONFIG["borderOpacity"],
                          borderWidth:
                            _0x182c8d.borderWidth ||
                            e.DEFAULT_CALLOUT_CONFIG["borderWidth"],
                        }),
                    }),
                    _0x3d09af
                      .slice(0, 6)
                      .map((_0x35941b) =>
                        (0, u.jsx)(
                          k,
                          {
                            color: _0x35941b,
                            label: _0x3ed33b,
                            selected:
                              _0x182c8d.borderWidth > 0 &&
                              A(_0x54cd25, _0x35941b),
                            onClick: () =>
                              _0x12981c({
                                borderColor: _0x35941b,
                                borderOpacity:
                                  e.DEFAULT_CALLOUT_CONFIG["borderOpacity"],
                                borderWidth:
                                  _0x182c8d.borderWidth ||
                                  e.DEFAULT_CALLOUT_CONFIG["borderWidth"],
                              }),
                          },
                          _0x35941b,
                        ),
                      ),
                  ],
                }),
                (0, u.jsx)(O, {
                  title: _0x28f816,
                  children: _0x2ed131.map((_0xb1069b, _0xa23d1c) =>
                    (0, u.jsx)(
                      k,
                      {
                        color: _0xb1069b,
                        label: _0x28f816,
                        selected: A(_0x5595a3, _0xb1069b),
                        onClick: () =>
                          _0x12981c({
                            backgroundColor: _0xa23d1c === 0 ? "" : _0xb1069b,
                          }),
                      },
                      "background-" + _0xb1069b,
                    ),
                  ),
                }),
                (0, u.jsx)(n.ToolbarButton, {
                  noIcon: true,
                  className:
                    "!univer-h-8 !univer-w-full !univer-rounded-md !univer-border !univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-px-3 univer-text-sm univer-text-gray-700 hover:univer-bg-gray-100 dark:!univer-border-gray-700 dark:!univer-bg-gray-900 dark:!univer-text-gray-100 dark:hover:!univer-bg-gray-800",
                  onClick: _0x45265e,
                  children: _0x4a3cf6,
                }),
              ],
            }),
          })
        : null,
    ],
  });
}
function O(_0x2f1ee5) {
  return (0, u.jsxs)("section", {
    className: "univer-flex univer-flex-col univer-gap-2",
    children: [
      (0, u.jsx)("span", {
        className:
          "univer-text-sm\x20univer-font-medium\x20univer-text-gray-800\x20dark:!univer-text-gray-100",
        children: _0x2f1ee5.title,
      }),
      (0, u.jsx)("div", {
        className: "univer-grid univer-grid-cols-8 univer-gap-2",
        children: _0x2f1ee5.children,
      }),
    ],
  });
}
function k(_0x3c8be4) {
  let {
      color: _0x2b5dc6,
      label: _0x59c27b,
      onClick: _0x14085b,
      selected: _0x19e0e9,
      variant: _0x444ae6 = "fill",
    } = _0x3c8be4,
    _0x19eaf3 = _0x19e0e9
      ? "univer-ring-2\x20univer-ring-primary-600\x20univer-ring-offset-1\x20dark:!univer-ring-offset-gray-900"
      : "";
  return (0, u.jsx)(n.ToolbarButton, {
    "aria-label": _0x2b5dc6 ? _0x59c27b + ":\x20" + _0x2b5dc6 : _0x59c27b,
    onClick: _0x14085b,
    className:
      "\n !univer-size-7 univer-rounded univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0\n univer-text-base univer-transition-shadow\n hover:univer-ring-1 hover:univer-ring-primary-400\n dark:!univer-border-gray-700 dark:!univer-bg-gray-900\n " +
      _0x19eaf3 +
      "\n ",
    style:
      _0x444ae6 === "fill" && _0x2b5dc6
        ? { backgroundColor: _0x2b5dc6 }
        : { color: _0x2b5dc6 },
    children:
      _0x444ae6 === "text"
        ? "A"
        : _0x2b5dc6
          ? null
          : (0, u.jsx)(c.LineNoneIcon, {}),
  });
}
function ee(_0x23d098, _0x45ab47) {
  return Object.values(_0x23d098.highlight["background"])
    .slice(0, 15)
    .map(({ alpha: _0x5435d5, color: _0x40c97a }) =>
      new r["ColorKit"](_0x45ab47.getColorFromTheme(_0x40c97a) ?? _0x40c97a)
        .setAlpha(_0x5435d5)
        .toRgbString(),
    );
}
function A(_0x117052, _0x800a70) {
  return _0x117052.toUpperCase() === _0x800a70.toUpperCase();
}
let j = class extends r.Disposable {
  constructor(_0x94979e, _0x4b3154) {
    (super(),
      (this._componentManager = _0x94979e),
      (this._iconManager = _0x4b3154),
      this._registerIcons(),
      this._registerComponents());
  }
  _registerIcons() {
    this.disposeWithMe(
      this._iconManager["register"]({ CalloutIcon: c.CalloutIcon }),
    );
  }
  _registerComponents() {
    this.disposeWithMe(this._componentManager["register"](T, D));
  }
};
j = S(
  [x(0, (0, r.Inject)(n.ComponentManager)), x(1, (0, r.Inject)(n.IconManager))],
  j,
);
function M(_0x56fdbc, _0x49784a, _0x1ef6b7) {
  (_0x56fdbc.save(),
    F(_0x56fdbc, _0x49784a, _0x1ef6b7.borderRadius),
    (_0x56fdbc.fillStyle = _0x1ef6b7.backgroundColor),
    (_0x56fdbc.globalAlpha = 0.45),
    _0x56fdbc.fill(),
    _0x56fdbc.restore());
}
function N(_0x420950, _0x15521d, _0x3a4f3a) {
  _0x3a4f3a.borderWidth <= 0 ||
    (_0x420950.save(),
    F(_0x420950, _0x15521d, _0x3a4f3a.borderRadius),
    (_0x420950.strokeStyle = _0x3a4f3a.borderColor),
    (_0x420950.lineWidth = _0x3a4f3a.borderWidth),
    _0x420950.setLineDash(
      _0x3a4f3a.borderStyle === r.DashStyleType["DOT"]
        ? [_0x3a4f3a.borderWidth, _0x3a4f3a.borderWidth * 2]
        : _0x3a4f3a.borderStyle === r.DashStyleType["DASH"]
          ? [_0x3a4f3a.borderWidth * 4, _0x3a4f3a.borderWidth * 2]
          : [],
    ),
    (_0x420950.globalAlpha = _0x3a4f3a.borderOpacity),
    _0x420950.stroke(),
    _0x420950.restore());
}
function P(_0x568d59, _0x27757c, _0x308fd8) {
  if (
    _0x27757c.clipLeft == null ||
    _0x27757c.clipRight == null ||
    _0x27757c.clipRight <= _0x27757c.clipLeft
  )
    return _0x308fd8();
  (_0x568d59.save(),
    _0x568d59.beginPath(),
    _0x568d59.rectByPrecision(
      _0x27757c.clipLeft,
      -100000,
      _0x27757c.clipRight - _0x27757c.clipLeft,
      200000,
    ),
    _0x568d59.closePath(),
    _0x568d59.clip());
  let _0x341705 = _0x308fd8();
  return (_0x568d59.restore(), _0x341705);
}
function F(_0x4bd59a, _0x13c6f2, _0x152081) {
  let {
      height: _0x3b2952,
      left: _0x34c6dc,
      top: _0x18ae5e,
      width: _0x3f019f,
    } = _0x13c6f2,
    _0x2dd5f6 = Math.min(_0x152081, _0x3f019f / 2, _0x3b2952 / 2);
  (_0x4bd59a.beginPath(),
    _0x4bd59a.moveTo(_0x34c6dc + _0x2dd5f6, _0x18ae5e),
    _0x4bd59a.lineTo(_0x34c6dc + _0x3f019f - _0x2dd5f6, _0x18ae5e),
    _0x4bd59a.quadraticCurveTo(
      _0x34c6dc + _0x3f019f,
      _0x18ae5e,
      _0x34c6dc + _0x3f019f,
      _0x18ae5e + _0x2dd5f6,
    ),
    _0x4bd59a.lineTo(_0x34c6dc + _0x3f019f, _0x18ae5e + _0x3b2952 - _0x2dd5f6),
    _0x4bd59a.quadraticCurveTo(
      _0x34c6dc + _0x3f019f,
      _0x18ae5e + _0x3b2952,
      _0x34c6dc + _0x3f019f - _0x2dd5f6,
      _0x18ae5e + _0x3b2952,
    ),
    _0x4bd59a.lineTo(_0x34c6dc + _0x2dd5f6, _0x18ae5e + _0x3b2952),
    _0x4bd59a.quadraticCurveTo(
      _0x34c6dc,
      _0x18ae5e + _0x3b2952,
      _0x34c6dc,
      _0x18ae5e + _0x3b2952 - _0x2dd5f6,
    ),
    _0x4bd59a.lineTo(_0x34c6dc, _0x18ae5e + _0x2dd5f6),
    _0x4bd59a.quadraticCurveTo(
      _0x34c6dc,
      _0x18ae5e,
      _0x34c6dc + _0x2dd5f6,
      _0x18ae5e,
    ),
    _0x4bd59a.closePath());
}
function I(_0x2596fb) {
  "@babel/helpers - typeof";
  return (
    (I =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x43dd8a) {
            return typeof _0x43dd8a;
          }
        : function (_0x337770) {
            return _0x337770 &&
              typeof Symbol == "function" &&
              _0x337770.constructor === Symbol &&
              _0x337770 !== Symbol.prototype
              ? "symbol"
              : typeof _0x337770;
          }),
    I(_0x2596fb)
  );
}
function L(_0x2eef91, _0x303d1a) {
  if (I(_0x2eef91) != "object" || !_0x2eef91) return _0x2eef91;
  var _0x4eec07 = _0x2eef91[Symbol.toPrimitive];
  if (_0x4eec07 !== undefined) {
    var _0x2d884d = _0x4eec07.call(_0x2eef91, _0x303d1a || "default");
    if (I(_0x2d884d) != "object") return _0x2d884d;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x303d1a === "string" ? String : Number)(_0x2eef91);
}
function R(_0x5514d8) {
  var _0x51f7bf = L(_0x5514d8, "string");
  return I(_0x51f7bf) == "symbol" ? _0x51f7bf : _0x51f7bf + "";
}
function z(_0x6f5c5f, _0x3d942d, _0x40c299) {
  return (
    (_0x3d942d = R(_0x3d942d)) in _0x6f5c5f
      ? Object.defineProperty(_0x6f5c5f, _0x3d942d, {
          value: _0x40c299,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x6f5c5f[_0x3d942d] = _0x40c299),
    _0x6f5c5f
  );
}
var B = class extends s.ComponentExtension {
  constructor(_0x2d6da0) {
    (super(),
      (this._state = _0x2d6da0),
      z(this, "uKey", "DocsCalloutBackgroundExtension"),
      z(this, "type", s.DOCS_EXTENSION_TYPE["BACKGROUND"]),
      z(this, "_fragments", []),
      z(this, "_fragmentsByLine", new Map()),
      z(this, "_paintedRects", new Set()));
  }
  getFragments() {
    return this._fragments;
  }
  clearCache() {
    ((this._fragments = this._state["getFragments"]()),
      this._fragmentsByLine["clear"](),
      this._paintedRects["clear"](),
      this._fragments["forEach"]((_0x5a8575) => {
        let { triggerLine: _0x4eab97 } = _0x5a8575.rect;
        if (!_0x4eab97) return;
        let _0x1c3e0e = this._fragmentsByLine["get"](_0x4eab97) ?? [];
        (_0x1c3e0e.push(_0x5a8575),
          this._fragmentsByLine["set"](_0x4eab97, _0x1c3e0e));
      }));
  }
  draw(_0xecf424, _0x1b1969, _0x49b31b) {
    var _0x2b1233, _0x545a32;
    let _0x16938d =
      (_0x2b1233 = _0x49b31b.parent) == null ? undefined : _0x2b1233.parent;
    _0x16938d &&
      ((_0x545a32 = this._fragmentsByLine["get"](_0x16938d)) == null ||
        _0x545a32.forEach((_0x27e5e9) => {
          this._paintedRects["has"](_0x27e5e9.rect) ||
            (this._paintedRects["add"](_0x27e5e9.rect),
            P(_0xecf424, _0x27e5e9.rect, () => {
              M(_0xecf424, _0x27e5e9.rect, _0x27e5e9.config);
            }));
        }));
  }
};
function V(_0x26c4a1, _0x3f1c15, _0x5b0484, _0x998a7a = _0x5b0484) {
  let _0x38ea6d = [];
  return (
    _0x26c4a1.forEach((_0x50c4c0) => {
      let _0x5cc80a = _0x3f1c15.filter(
        (_0x488451) =>
          _0x488451.pageIndex >= 0 &&
          _0x488451.ed >= _0x50c4c0.startIndex &&
          _0x488451.st <= _0x50c4c0.endIndex,
      );
      Array.from(
        new Set(_0x5cc80a.map((_0x5a0256) => _0x5a0256.pageIndex)),
      ).forEach((_0x4ee431) => {
        let _0x12b93f = _0x5cc80a.filter(
          (_0x2abc7c) => _0x2abc7c.pageIndex === _0x4ee431,
        );
        Array.from(
          new Set(_0x12b93f.map((_0x46e3a8) => _0x46e3a8.layoutFragment)),
        ).forEach((_0x307982) => {
          let _0x39091d = _0x12b93f.filter(
              (_0x35352c) => _0x35352c.layoutFragment === _0x307982,
            ),
            _0xc866d8 = Math.min(..._0x39091d.map(H)) - _0x998a7a,
            _0x4475bd = Math.max(..._0x39091d.map(U)) + _0x998a7a,
            _0x31ef3f = Math.min(..._0x39091d.map(G)) - _0x5b0484,
            _0x17c1ca = Math.max(..._0x39091d.map(K)) + _0x5b0484,
            _0x1f4455 = W(_0x39091d),
            _0x38482d = _0x39091d.reduce((_0x45da33, _0x5dba78) =>
              G(_0x5dba78) < G(_0x45da33) ? _0x5dba78 : _0x45da33,
            );
          _0x38ea6d.push({
            blockId: _0x50c4c0.blockId,
            ..._0x1f4455,
            pageIndex: _0x4ee431,
            left: _0xc866d8,
            top: _0x31ef3f,
            width: _0x4475bd - _0xc866d8,
            height: _0x17c1ca - _0x31ef3f,
            firstLineTop: G(_0x38482d),
            ...(_0x38482d.skeletonLine
              ? { triggerLine: _0x38482d.skeletonLine }
              : {}),
          });
        });
      });
    }),
    _0x38ea6d
  );
}
function H(_0x39c662) {
  return _0x39c662.visualLeft ?? _0x39c662.left;
}
function U(_0x1ecf6b) {
  return (
    (_0x1ecf6b.visualLeft ?? _0x1ecf6b.left) +
    (_0x1ecf6b.visualWidth ?? _0x1ecf6b.width)
  );
}
function W(_0x53391a) {
  let _0x12428e = _0x53391a
      .map((_0x3dbae4) => _0x3dbae4.clipLeft)
      .filter((_0x5820d2) => _0x5820d2 != null),
    _0x46ca10 = _0x53391a
      .map((_0xe2100d) => _0xe2100d.clipRight)
      .filter((_0x398de6) => _0x398de6 != null);
  if (!_0x12428e.length || !_0x46ca10.length) return {};
  let _0x497fc9 = Math.max(..._0x12428e),
    _0x19aa63 = Math.min(..._0x46ca10);
  return _0x19aa63 > _0x497fc9
    ? { clipLeft: _0x497fc9, clipRight: _0x19aa63 }
    : {};
}
function G(_0x37e640) {
  return (
    _0x37e640.top + (_0x37e640.marginTop ?? 0) + (_0x37e640.paddingTop ?? 0)
  );
}
function K(_0x21f12f) {
  return _0x21f12f.contentHeight == null
    ? _0x21f12f.top +
        _0x21f12f.height -
        (_0x21f12f.marginBottom ?? 0) -
        (_0x21f12f.paddingBottom ?? 0)
    : G(_0x21f12f) + _0x21f12f.contentHeight;
}
const q = -11000;
let J = class extends r.Disposable {
  constructor(
    _0x2415ed,
    _0x52a674,
    _0x41face,
    _0xaeb68f,
    _0x420344,
    _0x5ec59a,
    _0x55471a,
  ) {
    (super(),
      (this._context = _0x2415ed),
      (this._docSkeletonManagerService = _0x52a674),
      (this._docsCalloutModel = _0x41face),
      (this._docCanvasPopManagerService = _0xaeb68f),
      (this._commandService = _0x420344),
      (this._themeService = _0x5ec59a),
      (this._permissionService = _0x55471a),
      z(this, "_iconHitRects", []),
      z(this, "_blockHitRects", []),
      z(this, "_emojiPopoverDisposable", null),
      z(this, "_toolbarPopoverDisposable", null),
      z(this, "_activeEmojiBlockId", null),
      z(this, "_cursorBeforeIconHover", null),
      this._initRender(),
      this._initPointer(),
      this.disposeWithMe(
        this._docsCalloutModel["change$"].subscribe(({ unitId: _0x27e290 }) => {
          _0x27e290 === this._context["unitId"] && this._makeDirty();
        }),
      ),
      this.disposeWithMe(
        this._permissionService["permissionPointUpdate$"].subscribe(() => {
          (this._closeEmojiPopover(),
            this._closeToolbarPopover(),
            this._restorePointerCursor());
        }),
      ));
  }
  _initRender() {
    let _0xcf507a = this._context["mainComponent"];
    if (!(_0xcf507a instanceof s.Documents)) return;
    let _0x32bd8f = new B({
      getFragments: () => this._collectRenderFragments(),
    });
    this.disposeWithMe(_0xcf507a.register(_0x32bd8f));
    let _0x442065 = _0xcf507a.pageRender$["subscribe"]((_0x4c0620) => {
      this._drawPage(_0x4c0620, _0x32bd8f.getFragments());
    });
    this.disposeWithMe({ dispose: () => _0x442065.unsubscribe() });
  }
  _initPointer() {
    let _0x4c39cf = this._context["mainComponent"] ?? this._context["scene"];
    (this.disposeWithMe(
      _0x4c39cf.onPointerMove$["subscribeEvent"]({
        next: ([_0x120796]) => {
          let _0x4e3617 = Z(
              _0x120796.offsetX,
              _0x120796.offsetY,
              this._context["scene"],
            ),
            _0x418de4 = this._hitIcon(_0x4e3617.x, _0x4e3617.y);
          _0x418de4 && this._canEditBlock(_0x418de4.blockId)
            ? this._setPointerCursor()
            : this._restorePointerCursor();
        },
        priority: q,
      }),
    ),
      this.disposeWithMe(
        _0x4c39cf.onPointerLeave$["subscribeEvent"](() => {
          this._restorePointerCursor();
        }),
      ),
      this.disposeWithMe(
        _0x4c39cf.onPointerDown$["subscribeEvent"]({
          next: ([_0x5aded0, _0x187673]) => {
            var _0x34f6c9, _0x489995, _0x4e3d7d;
            if (_0x5aded0.button === 2) return;
            let _0x55b50b = Z(
                _0x5aded0.offsetX,
                _0x5aded0.offsetY,
                this._context["scene"],
              ),
              _0x373d99 = this._hitIcon(_0x55b50b.x, _0x55b50b.y);
            if (!_0x373d99) {
              this._closeEmojiPopover();
              let _0x22fc5d = this._hitBlock(_0x55b50b.x, _0x55b50b.y);
              _0x22fc5d
                ? this._openToolbarPopover(_0x22fc5d)
                : this._closeToolbarPopover();
              return;
            }
            (this._closeToolbarPopover(),
              _0x187673 == null ||
                (_0x34f6c9 = _0x187673.stopPropagation) == null ||
                _0x34f6c9.call(_0x187673),
              _0x187673 && (_0x187673.skipNextObservers = true),
              (_0x489995 = _0x5aded0.stopPropagation) == null ||
                _0x489995.call(_0x5aded0),
              (_0x4e3d7d = _0x5aded0.preventDefault) == null ||
                _0x4e3d7d.call(_0x5aded0),
              this._openEmojiPopover(_0x373d99));
          },
          priority: q,
        }),
      ));
  }
  _drawPage(_0xf3a0d3, _0x1490ab) {
    if (!_0x1490ab.length) {
      ((this._iconHitRects = []), (this._blockHitRects = []));
      return;
    }
    let _0x755961 =
        this._docSkeletonManagerService["getSkeleton"]().getSkeletonData(),
      _0x21ab3f = (
        (_0x755961 == null ? undefined : _0x755961.pages) ?? []
      ).indexOf(_0xf3a0d3.page);
    if (_0x21ab3f < 0) return;
    _0x21ab3f === 0 && ((this._iconHitRects = []), (this._blockHitRects = []));
    let _0x459de6 = Y(this._context["mainComponent"]);
    _0x1490ab
      .filter((_0x197691) => _0x197691.rect["pageIndex"] === _0x21ab3f)
      .forEach(({ config: _0x59db00, rect: _0x5da83c }) => {
        let _0x227613 = X(
          {
            blockId: _0x5da83c.blockId,
            bottom: _0x5da83c.top + _0x5da83c.height + _0x459de6.docsTop,
            left: _0x5da83c.left + _0x459de6.docsLeft,
            right: _0x5da83c.left + _0x5da83c.width + _0x459de6.docsLeft,
            top: _0x5da83c.top + _0x459de6.docsTop,
          },
          _0x5da83c,
          _0x459de6.docsLeft,
        );
        _0x227613 && this._blockHitRects["push"](_0x227613);
        let _0x170a35 = P(_0xf3a0d3.ctx, _0x5da83c, () => {
          if ((N(_0xf3a0d3.ctx, _0x5da83c, _0x59db00), !_0x59db00.showIcon))
            return null;
          (_0xf3a0d3.ctx["save"](),
            (_0xf3a0d3.ctx["font"] = _0x59db00.iconSize + "px\x20sans-serif"),
            (_0xf3a0d3.ctx["textBaseline"] = "top"),
            (_0xf3a0d3.ctx["fillStyle"] =
              this._themeService["getColorFromTheme"]("gray.900")));
          let _0x2505c4 = _0x5da83c.left + _0x59db00.paddingLeft,
            _0x178b84 = _0x5da83c.firstLineTop + -3,
            _0x2f23db = Math.max(
              _0xf3a0d3.ctx["measureText"](_0x59db00.icon).width,
              _0x59db00.iconSize,
            );
          return (
            _0xf3a0d3.ctx["fillText"](_0x59db00.icon, _0x2505c4, _0x178b84),
            _0xf3a0d3.ctx["restore"](),
            {
              bottom: _0x178b84 + _0x59db00.iconSize,
              left: _0x2505c4,
              right: _0x2505c4 + _0x2f23db,
              top: _0x178b84,
            }
          );
        });
        if (!_0x170a35) return;
        let _0x2acce1 = X(
          {
            blockId: _0x5da83c.blockId,
            bottom: _0x170a35.bottom + _0x459de6.docsTop,
            left: _0x170a35.left + _0x459de6.docsLeft,
            right: _0x170a35.right + _0x459de6.docsLeft,
            top: _0x170a35.top + _0x459de6.docsTop,
          },
          _0x5da83c,
          _0x459de6.docsLeft,
        );
        _0x2acce1 && this._iconHitRects["push"](_0x2acce1);
      });
  }
  _collectRenderFragments() {
    var _0x1d50e0;
    let _0x1608a9 = this._context["unit"].getBody(),
      _0x2a7e26 =
        (_0x1608a9 == null || (_0x1d50e0 = _0x1608a9.blockRanges) == null
          ? undefined
          : _0x1d50e0.filter(
              (_0x5c5a60) =>
                _0x5c5a60.blockType === r.DocumentBlockRangeType["CALLOUT"],
            )) ?? [];
    if (!_0x2a7e26.length) return [];
    let _0x38552c =
        this._docSkeletonManagerService["getSkeleton"]().getSkeletonData(),
      _0x39b9d4 = (_0x38552c == null ? undefined : _0x38552c.pages) ?? [],
      _0x5241f6 = V(_0x2a7e26, this._collectLines(_0x39b9d4, _0x2a7e26), 10, 0),
      _0x48b7fe = this._themeService["getColorFromTheme"](
        e.DOCS_CALLOUT_BACKGROUND_COLOR_TOKEN,
      ),
      _0x57359c = this._themeService["getColorFromTheme"](
        e.DOCS_CALLOUT_BORDER_COLOR_TOKEN,
      );
    return _0x5241f6.map((_0x2b5b82) => {
      let _0x3f5203 = (0, e.normalizeDocsCalloutConfig)(
        this._docsCalloutModel["getCalloutConfig"](
          this._context["unitId"],
          _0x2b5b82.blockId,
        ),
      );
      return {
        config: {
          ..._0x3f5203,
          backgroundColor: _0x3f5203.backgroundColor || _0x48b7fe,
          borderColor: _0x3f5203.borderColor || _0x57359c,
        },
        rect: _0x2b5b82,
      };
    });
  }
  _collectLines(_0x11554b, _0x48a60c) {
    let _0x4a835d = Y(this._context["mainComponent"]),
      _0x49296b = [],
      _0x3ec0ca = this._getCalloutParagraphOwners(_0x48a60c);
    return (
      (0, d.documentSkeletonLineIterator)(
        _0x11554b,
        {
          docsLeft: _0x4a835d.docsLeft,
          pageMarginTop: _0x4a835d.pageMarginTop,
          tableCellInsetX: 6,
          unitId: this._context["unitId"],
        },
        (_0x168c7e) => {
          let _0x4225f5 = _0x3ec0ca.get(_0x168c7e.line["paragraphIndex"]);
          _0x4225f5 && _0x49296b.push(te(_0x168c7e, _0x4225f5));
        },
      ),
      _0x49296b
    );
  }
  _getCalloutParagraphOwners(_0xe33ff0) {
    var _0x565440;
    let _0x18c4e1 = new Map(),
      _0x8b785f =
        ((_0x565440 = this._context["unit"].getBody()) == null
          ? undefined
          : _0x565440.paragraphs) ?? [];
    return (
      _0xe33ff0.forEach((_0x4a68c5) => {
        _0x8b785f.forEach((_0x139f18) => {
          _0x139f18.startIndex > _0x4a68c5.startIndex &&
            _0x139f18.startIndex < _0x4a68c5.endIndex &&
            _0x18c4e1.set(_0x139f18.startIndex, _0x4a68c5);
        });
      }),
      _0x18c4e1
    );
  }
  _makeDirty() {
    var _0x1bcad8;
    ((_0x1bcad8 = this._context["mainComponent"]) == null ||
      _0x1bcad8.makeDirty(true),
      this._context["scene"].makeDirty());
  }
  _hitIcon(_0x31bdad, _0x3a3b32) {
    return (
      this._iconHitRects["find"](
        (_0x1cfaad) =>
          _0x31bdad >= _0x1cfaad.left &&
          _0x31bdad <= _0x1cfaad.right &&
          _0x3a3b32 >= _0x1cfaad.top &&
          _0x3a3b32 <= _0x1cfaad.bottom,
      ) ?? null
    );
  }
  _hitBlock(_0x5a4759, _0x3eb3f1) {
    return (
      this._blockHitRects["find"](
        (_0x1e0a04) =>
          _0x5a4759 >= _0x1e0a04.left &&
          _0x5a4759 <= _0x1e0a04.right &&
          _0x3eb3f1 >= _0x1e0a04.top &&
          _0x3eb3f1 <= _0x1e0a04.bottom,
      ) ?? null
    );
  }
  _openToolbarPopover(_0x366340) {
    if ((this._closeToolbarPopover(), !this._canEditBlock(_0x366340.blockId)))
      return;
    let _0x375ebd = (0, e.normalizeDocsCalloutConfig)(
      this._docsCalloutModel["getCalloutConfig"](
        this._context["unitId"],
        _0x366340.blockId,
      ),
    );
    this._toolbarPopoverDisposable = this._docCanvasPopManagerService[
      "attachPopupToRect"
    ](
      _0x366340,
      {
        componentKey: T,
        direction: "top-center",
        offset: [0, 8],
        extraProps: {
          blockId: _0x366340.blockId,
          config: _0x375ebd,
          textColor: re(
            this._context["unit"].getBody(),
            _0x366340.blockId,
            r.DocumentBlockRangeType["CALLOUT"],
          ),
          unitId: this._context["unitId"],
        },
        onClickOutside: () => this._closeToolbarPopover(),
        onContextMenu: () => this._closeToolbarPopover(),
        zIndex: 101,
      },
      this._context["unitId"],
    );
  }
  _closeToolbarPopover() {
    var _0xfb069e;
    ((_0xfb069e = this._toolbarPopoverDisposable) == null ||
      _0xfb069e.dispose(),
      (this._toolbarPopoverDisposable = null));
  }
  _openEmojiPopover(_0x3c8c15) {
    if ((this._closeEmojiPopover(), !this._canEditBlock(_0x3c8c15.blockId)))
      return;
    this._activeEmojiBlockId = _0x3c8c15.blockId;
    let _0x547cc8 = (0, e.normalizeDocsCalloutConfig)(
      this._docsCalloutModel["getCalloutConfig"](
        this._context["unitId"],
        _0x3c8c15.blockId,
      ),
    );
    this._emojiPopoverDisposable = this._docCanvasPopManagerService[
      "attachPopupToRect"
    ](
      _0x3c8c15,
      {
        componentKey: n.EMOJI_PICKER_COMPONENT,
        direction: "bottom-left",
        extraProps: {
          activeEmoji: _0x547cc8.icon,
          onSelect: (_0x1aec24, _0x1bdb04) => {
            let _0xaf308a = this._activeEmojiBlockId;
            _0xaf308a &&
              (this._commandService["executeCommand"](
                e.DocsCalloutUpdateCommand["id"],
                { blockId: _0xaf308a, config: { icon: _0x1aec24 } },
              ),
              (_0x1bdb04 != null && _0x1bdb04.keepOpen) ||
                this._closeEmojiPopover());
          },
        },
        onClickOutside: () => this._closeEmojiPopover(),
        onContextMenu: () => this._closeEmojiPopover(),
        zIndex: 102,
      },
      this._context["unitId"],
    );
  }
  _closeEmojiPopover() {
    var _0x1970e;
    ((_0x1970e = this._emojiPopoverDisposable) == null || _0x1970e.dispose(),
      (this._emojiPopoverDisposable = null),
      (this._activeEmojiBlockId = null));
  }
  _canEditBlock(_0x8894cf) {
    return (0, o.canEditDocumentTargets)(
      this._permissionService,
      this._context["unitId"],
      [
        ...(0, o.getDocumentEntityParentPermissionObjectIds)(
          this._context["unit"],
          "",
          "custom-block",
          _0x8894cf,
        ),
        (0, o.getDocumentEntityPermissionObjectId)(
          "",
          "custom-block",
          _0x8894cf,
        ),
      ],
    );
  }
  _setPointerCursor() {
    ((this._cursorBeforeIconHover ??= this._context["scene"].getCursor()),
      this._context["scene"].setCursor(s.CURSOR_TYPE["POINTER"]));
  }
  _restorePointerCursor() {
    this._cursorBeforeIconHover != null &&
      (this._context["scene"].setCursor(this._cursorBeforeIconHover),
      (this._cursorBeforeIconHover = null));
  }
};
J = S(
  [
    x(1, (0, r.Inject)(o.DocSkeletonManagerService)),
    x(2, (0, r.Inject)(e.DocsCalloutModel)),
    x(3, (0, r.Inject)(t.DocCanvasPopManagerService)),
    x(4, r.ICommandService),
    x(5, (0, r.Inject)(r.ThemeService)),
    x(6, r.IPermissionService),
  ],
  J,
);
function te(_0x1d7593, _0x5aebac) {
  let {
    column: _0x5721ed,
    line: _0x17f8de,
    pageIndex: _0x495aa1,
    pageLeft: _0x1f7ab1,
    sectionTop: _0xf60867,
  } = _0x1d7593;
  return {
    layoutFragment: _0x5721ed,
    skeletonLine: _0x17f8de,
    st: _0x5aebac.startIndex,
    ed: _0x5aebac.endIndex,
    left: _0x1f7ab1 + _0x5721ed.left,
    top: _0xf60867 + _0x17f8de.top,
    width: _0x5721ed.width,
    clipLeft: _0x1d7593.clipLeft,
    clipRight: _0x1d7593.clipRight,
    visualLeft: _0x1d7593.visualLeft,
    visualWidth: _0x1d7593.visualWidth,
    height: _0x17f8de.lineHeight,
    contentHeight: _0x17f8de.contentHeight,
    marginBottom: _0x17f8de.marginBottom,
    marginTop: _0x17f8de.marginTop,
    paddingBottom: _0x17f8de.paddingBottom,
    paddingTop: _0x17f8de.paddingTop,
    pageIndex: _0x495aa1,
  };
}
function Y(_0x16adb8) {
  if (!ne(_0x16adb8)) return { docsLeft: 0, docsTop: 0, pageMarginTop: 0 };
  let _0x38abc6 = _0x16adb8.getOffsetConfig();
  return {
    docsLeft: (_0x38abc6 == null ? undefined : _0x38abc6.docsLeft) ?? 0,
    docsTop: (_0x38abc6 == null ? undefined : _0x38abc6.docsTop) ?? 0,
    pageMarginTop:
      (_0x38abc6 == null ? undefined : _0x38abc6.pageMarginTop) ?? 0,
  };
}
function ne(_0x5378d0) {
  return (
    typeof _0x5378d0 == "object" &&
    !!_0x5378d0 &&
    "getOffsetConfig" in _0x5378d0 &&
    typeof _0x5378d0.getOffsetConfig == "function"
  );
}
function X(_0x20e646, _0x4f9183, _0x1ea9f9) {
  if (_0x4f9183.clipLeft == null || _0x4f9183.clipRight == null)
    return _0x20e646;
  let _0x1af2ce = Math.max(_0x20e646.left, _0x4f9183.clipLeft + _0x1ea9f9),
    _0x5646b8 = Math.min(_0x20e646.right, _0x4f9183.clipRight + _0x1ea9f9);
  return _0x5646b8 > _0x1af2ce
    ? { ..._0x20e646, left: _0x1af2ce, right: _0x5646b8 }
    : null;
}
function Z(_0x2a47f0, _0x2a0cd8, _0x3d3c74) {
  let { scaleX: _0x4f0458, scaleY: _0x20e20d } = _0x3d3c74.getAncestorScale(),
    _0x16166e = _0x3d3c74.getViewport("viewMain");
  return _0x16166e
    ? {
        x: _0x2a47f0 / _0x4f0458 + _0x16166e.viewportScrollX,
        y: _0x2a0cd8 / _0x20e20d + _0x16166e.viewportScrollY,
      }
    : { x: _0x2a47f0, y: _0x2a0cd8 };
}
function re(_0x2e2a28, _0x5cc971, _0x2df2d5) {
  var _0x532241, _0x5b5390;
  let _0x17f5ef =
    _0x2e2a28 == null || (_0x532241 = _0x2e2a28.blockRanges) == null
      ? undefined
      : _0x532241.find(
          (_0x314afa) =>
            _0x314afa.blockId === _0x5cc971 &&
            _0x314afa.blockType === _0x2df2d5,
        );
  if (_0x17f5ef)
    return (
      (_0x2e2a28 == null ||
      (_0x5b5390 = _0x2e2a28.textRuns) == null ||
      (_0x5b5390 = _0x5b5390.find(
        (_0x3d083a) =>
          _0x3d083a.ed > _0x17f5ef.startIndex + 1 &&
          _0x3d083a.st < _0x17f5ef.endIndex,
      )) == null ||
      (_0x5b5390 = _0x5b5390.ts) == null ||
      (_0x5b5390 = _0x5b5390.cl) == null
        ? undefined
        : _0x5b5390.rgb) ?? undefined
    );
}
const ie = {
  id: t.DeleteCurrentParagraphCommand["id"],
  name: "docs-callout.command.delete-current-paragraph",
  type: r.CommandType["COMMAND"],
  multi: true,
  priority: 100,
  handler: async (_0x1c0990, _0x361103) => {
    var _0x1a2987;
    return (_0x361103 == null || (_0x1a2987 = _0x361103.blockRange) == null
      ? undefined
      : _0x1a2987.blockType) === r.DocumentBlockRangeType["CALLOUT"]
      ? (await _0x1c0990
          .get(r.ICommandService)
          .executeCommand(e.DocsCalloutDeleteCommand["id"], {
            unitId: _0x361103.unitId,
            blockId: _0x361103.blockRange["blockId"],
          }),
        true)
      : false;
  },
};
let Q = class extends r.Disposable {
  constructor(_0x257880, _0x2e50f1, _0x55cc8f) {
    (super(),
      (this._docAutoFormatService = _0x257880),
      (this._menuManagerService = _0x2e50f1),
      (this._commandService = _0x55cc8f),
      this._menuManagerService["mergeMenu"](_),
      this._menuManagerService["appendRootMenu"](g),
      this._initBoundaryDeleteGuard(),
      this._initCancelEmptyCalloutParagraphAutoFormat(),
      this.disposeWithMe(this._commandService["registerMultipleCommand"](ie)));
  }
  _initBoundaryDeleteGuard() {
    [
      { id: t.DeleteLeftCommand["id"], direction: "left" },
      { id: t.DeleteRightCommand["id"], direction: "right" },
    ].forEach(({ id: _0x1b4b68, direction: _0x4c44ee }) => {
      this.disposeWithMe(
        this._docAutoFormatService["registerAutoFormat"]({
          id: _0x1b4b68,
          match: (_0x344ea0) =>
            _0x344ea0.selection["collapsed"]
              ? (0, e.isCalloutBoundaryDelete)({
                  cursorOffset: _0x344ea0.selection["startOffset"],
                  direction: _0x4c44ee,
                  documentData: _0x344ea0.unit["getSnapshot"](),
                })
              : false,
          getMutations: () => [
            { id: e.DocsCalloutConsumeBoundaryDeleteCommand["id"] },
          ],
          priority: 50,
        }),
      );
    });
  }
  _initCancelEmptyCalloutParagraphAutoFormat() {
    [t.DeleteLeftCommand["id"], t.DeleteRightCommand["id"]].forEach(
      (_0x426e19) => {
        this.disposeWithMe(
          this._docAutoFormatService["registerAutoFormat"]({
            id: _0x426e19,
            match: (_0x42ceb2) =>
              _0x42ceb2.selection["collapsed"]
                ? (0, e.buildCancelEmptyCalloutParagraphActions)({
                    cursorOffset: _0x42ceb2.selection["startOffset"],
                    documentData: _0x42ceb2.unit["getSnapshot"](),
                  }) != null
                : false,
            getMutations: (_0x2452fd) => [
              {
                id: e.DocsCalloutCancelEmptyParagraphCommand["id"],
                params: { cursorOffset: _0x2452fd.selection["startOffset"] },
              },
            ],
            priority: 100,
          }),
        );
      },
    );
  }
};
Q = S(
  [
    x(0, (0, r.Inject)(t.DocAutoFormatService)),
    x(1, n.IMenuManagerService),
    x(2, r.ICommandService),
  ],
  Q,
);
let $ = class extends r.Plugin {
  constructor(_0x17e26b = b, _0xad5be3, _0xd8ec46, _0x539db3) {
    (super(),
      (this._config = _0x17e26b),
      (this._injector = _0xad5be3),
      (this._renderManagerService = _0xd8ec46),
      (this._configService = _0x539db3));
    let { menu: _0x551631, ..._0x1069e6 } = (0, r.merge)({}, b, this._config);
    (_0x551631 &&
      this._configService["setConfig"]("menu", _0x551631, { merge: true }),
      this._configService["setConfig"]("docs-callout-ui.config", _0x1069e6));
  }
  onRendered() {
    (this._injector["get"](Q),
      this.disposeWithMe(
        this._renderManagerService["registerRenderModule"](
          r.UniverInstanceType["UNIVER_DOC"],
          [J],
        ),
      ));
  }
  onStarting() {
    (this._injector["add"]([j]),
      this._injector["add"]([C]),
      this._injector["get"](j),
      this._injector["get"](C),
      this._injector["add"]([Q]));
  }
};
(z($, "pluginName", e.DOCS_CALLOUT_PLUGIN + "_UI_PLUGIN"),
  z($, "packageName", v),
  z($, "version", y),
  z($, "type", r.UniverInstanceType["UNIVER_DOC"]),
  ($ = S(
    [
      (0, r.DependentOn)(
        a.UniverLicensePlugin,
        o.UniverDocsPlugin,
        s.UniverRenderEnginePlugin,
        t.UniverDocsUIPlugin,
        e.UniverDocsCalloutPlugin,
      ),
      x(1, (0, r.Inject)(r.Injector)),
      x(2, s.IRenderManagerService),
      x(3, r.IConfigService),
    ],
    $,
  )),
  (exports.DocsCalloutUIMenuSchema = _),
  Object.defineProperty(exports, "UniverDocsCalloutUIPlugin", {
    enumerable: true,
    get: function () {
      return $;
    },
  }));
