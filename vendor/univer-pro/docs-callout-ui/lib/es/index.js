import {
  DEFAULT_CALLOUT_CONFIG as _0x1049ae,
  DOCS_CALLOUT_BACKGROUND_COLOR_TOKEN as _0x272963,
  DOCS_CALLOUT_BORDER_COLOR_TOKEN as _0x5236c9,
  DOCS_CALLOUT_PLUGIN as _0x337389,
  DocsCalloutCancelEmptyParagraphCommand as _0x51dfc2,
  DocsCalloutConsumeBoundaryDeleteCommand as _0xd95ccc,
  DocsCalloutDeleteCommand as _0x507501,
  DocsCalloutInsertBelowCommand as _0x1c3378,
  DocsCalloutInsertCommand as _0x4b620f,
  DocsCalloutModel as _0x64bb64,
  DocsCalloutResetColorsCommand as _0x19b198,
  DocsCalloutSetTextColorCommand as _0x42d31e,
  DocsCalloutUnwrapCommand as _0x2ce202,
  DocsCalloutUpdateCommand as _0x3e8bc1,
  RemoveDocsCalloutConfigMutation as _0xc4bd84,
  SetDocsCalloutConfigMutation as _0x46c8f0,
  UniverDocsCalloutPlugin as _0x5e2a50,
  buildCancelEmptyCalloutParagraphActions as _0x3946dd,
  isCalloutBoundaryDelete as _0x59b456,
  normalizeDocsCalloutConfig as _0x4523ad,
  normalizeDocsCalloutMetadataResource as _0x305830,
} from "@univerjs-pro/docs-callout";
import {
  DOC_CONTENT_INSERT_MENU_ID as _0xc07510,
  DOC_PARAGRAPH_T_EDIT_MENU_ID as _0x7d754a,
  DOC_PARAGRAPH_T_INSERT_BELOW_MENU_ID as _0x28a73a,
  DOC_PARAGRAPH_T_INSERT_MENU_ID as _0x48491d,
  DeleteCurrentParagraphCommand as _0x2654ad,
  DeleteLeftCommand as _0x2a1813,
  DeleteRightCommand as _0x571b8a,
  DocAutoFormatService as _0x2fa442,
  DocCanvasPopManagerService as _0x42fa22,
  EMPTY_PARAGRAPH_MENU_ID as _0x56d682,
  FLOAT_TEXT_STYLE_MENU_ID as _0x4a3398,
  FLOAT_TOOLBAR_MENU_POSITION as _0x5ed830,
  IDocClipboardPasteAdapterService as _0x4d369c,
  IDocClipboardService as _0x3fe39d,
  INSERT_BELLOW_MENU_ID as _0x3e8d46,
  UniverDocsUIPlugin as _0x18d2cd,
  disableMenuWhenHeaderFooterEditing as _0xedfdef,
  hideMenuWhenSelectionInBlockRange as _0x44d6e6,
} from "@univerjs/docs-ui";
import {
  ComponentManager as _0x5a74ed,
  ContextMenuGroup as _0x23d684,
  ContextMenuPosition as _0x27cf51,
  EMOJI_PICKER_COMPONENT as _0x3231a6,
  IMenuManagerService as _0x5abfaa,
  IconManager as _0xb02ed8,
  MenuItemType as _0x40e373,
  MenuManagerPosition as _0x1d1015,
  RibbonInsertGroup as _0x3e0e51,
  RibbonPosition as _0x3f06ae,
  ToolbarButton as _0x5f0d61,
  getMenuHiddenObservable as _0x51e1e8,
  useDependency as _0x36ad2e,
  useObservable as _0x4d496e,
} from "@univerjs/ui";
import {
  ColorKit as _0x7c7d23,
  CommandType as _0x48cc92,
  DashStyleType as _0x1d27b0,
  DependentOn as _0x4a65e6,
  Disposable as _0x469757,
  DocumentBlockRangeType as _0x12e2cd,
  ICommandService as _0x17e04a,
  IConfigService as _0x165d85,
  IPermissionService as _0x44a125,
  Inject as _0x2de359,
  Injector as _0x317e99,
  LocaleService as _0x155dcd,
  Plugin as _0x3ebfb4,
  ThemeService as _0x10bfa3,
  UniverInstanceType as _0x2305b4,
  merge as _0x27220a,
} from "@univerjs/core";
import { combineLatest as _0xd3d4f3, map as _0x4f4bc5 } from "rxjs";
import { UniverLicensePlugin as _0x8b08bf } from "@univerjs-pro/license";
import {
  DocSkeletonManagerService as _0x5b2667,
  UniverDocsPlugin as _0x3dcddf,
  canEditDocumentTargets as _0x3fff3f,
  getDocumentEntityParentPermissionObjectIds as _0x4cab86,
  getDocumentEntityPermissionObjectId as _0x58f539,
} from "@univerjs/docs";
import {
  CURSOR_TYPE as _0x21824b,
  ComponentExtension as _0x282bb4,
  DOCS_EXTENSION_TYPE as _0x83e047,
  Documents as _0xa5caa9,
  IRenderManagerService as _0x25d88f,
  UniverRenderEnginePlugin as _0x16d427,
} from "@univerjs/engine-render";
import {
  CalloutIcon as _0xa2b0e3,
  LineNoneIcon as _0x5720c0,
  PaintIcon as _0x134b04,
  TextIcon as _0x4e31c8,
} from "@univerjs/icons";
import { useState as _0x54fffb } from "react";
import { jsx as _0x3bc486, jsxs as _0x36290a } from "react/jsx-runtime";
import { documentSkeletonLineIterator as _0x28232a } from "@univerjs-pro/docs-column";
function z(_0x1ee777) {
  return {
    id: _0x4b620f.id,
    type: _0x40e373.BUTTON,
    icon: "CalloutIcon",
    title: "docs-callout-ui.menu.callout",
    tooltip: "docs-callout-ui.menu.callout",
    hidden$: _0x51e1e8(_0x1ee777, _0x2305b4.UNIVER_DOC),
    disabled$: _0xedfdef(_0x1ee777),
  };
}
function Qe(_0x47098f) {
  return {
    ...z(_0x47098f),
    hidden$: _0xd3d4f3([
      _0x51e1e8(_0x47098f, _0x2305b4.UNIVER_DOC),
      _0x44d6e6(_0x47098f),
    ]).pipe(_0x4f4bc5(([_0x2580c0, _0x2ff810]) => _0x2580c0 || _0x2ff810)),
  };
}
function B(_0x29c4c4) {
  return {
    id: _0x1c3378.id,
    type: _0x40e373.BUTTON,
    icon: "CalloutIcon",
    title: "docs-callout-ui.menu.callout",
    hidden$: _0x51e1e8(_0x29c4c4, _0x2305b4.UNIVER_DOC),
    disabled$: _0xedfdef(_0x29c4c4),
  };
}
const $e = {
    [_0x3e0e51.MEDIA]: { [_0x4b620f.id]: { order: 5, menuItemFactory: z } },
  },
  et = {
    [_0x1d1015.RIBBON]: { [_0x3f06ae.INSERT]: $e },
    [_0x5ed830]: {
      [_0x4a3398]: { [_0x4b620f.id]: { order: 11, menuItemFactory: Qe } },
    },
  },
  tt = {
    ...$e,
    [_0x4a3398]: { [_0x4b620f.id]: { order: 11, menuItemFactory: Qe } },
    [_0x27cf51.PARAGRAPH]: {
      [_0x23d684.LAYOUT]: {
        [_0x3e8d46]: { [_0x1c3378.id]: { order: 5, menuItemFactory: B } },
      },
      [_0xc07510]: {
        [_0x23d684.LAYOUT]: {
          [_0x1c3378.id]: { order: 5, menuItemFactory: B },
        },
      },
      [_0x56d682]: {
        [_0x23d684.LAYOUT]: {
          [_0x4b620f.id]: { order: 5, menuItemFactory: z },
        },
      },
      [_0x48491d]: {
        quickBottom: { [_0x4b620f.id]: { order: 4, menuItemFactory: z } },
      },
      [_0x7d754a]: {
        quickBottom: { [_0x4b620f.id]: { order: 5, menuItemFactory: z } },
      },
      [_0x28a73a]: {
        quickBottom: { [_0x1c3378.id]: { order: 4, menuItemFactory: B } },
      },
    },
  };
var nt = "@univerjs-pro/docs-callout-ui",
  rt = "1.0.0-insiders.20260907-70fc579";
const it = {};
function V(_0xf4f923, _0x2d5d01) {
  return function (_0x302c6f, _0x52a834) {
    _0x2d5d01(_0x302c6f, _0x52a834, _0xf4f923);
  };
}
function H(_0x5b25da, _0x4a46f0, _0x389f74, _0x25177d) {
  var _0x53c627 = arguments.length,
    _0xdc0f42 =
      _0x53c627 < 3
        ? _0x4a46f0
        : _0x25177d === null
          ? (_0x25177d = Object.getOwnPropertyDescriptor(_0x4a46f0, _0x389f74))
          : _0x25177d,
    _0x3926dd;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0xdc0f42 = Reflect.decorate(_0x5b25da, _0x4a46f0, _0x389f74, _0x25177d);
  else {
    for (var _0x11c23d = _0x5b25da.length - 1; _0x11c23d >= 0; _0x11c23d--)
      (_0x3926dd = _0x5b25da[_0x11c23d]) &&
        (_0xdc0f42 =
          (_0x53c627 < 3
            ? _0x3926dd(_0xdc0f42)
            : _0x53c627 > 3
              ? _0x3926dd(_0x4a46f0, _0x389f74, _0xdc0f42)
              : _0x3926dd(_0x4a46f0, _0x389f74)) || _0xdc0f42);
  }
  return (
    _0x53c627 > 3 &&
      _0xdc0f42 &&
      Object.defineProperty(_0x4a46f0, _0x389f74, _0xdc0f42),
    _0xdc0f42
  );
}
let U = class extends _0x469757 {
  constructor(_0x43ea22, _0x1bf716, _0xd9f35b) {
    (super(),
      (this._clipboardService = _0x43ea22),
      (this._pasteAdapterService = _0x1bf716),
      (this._model = _0xd9f35b),
      this.disposeWithMe(
        this._clipboardService["addClipboardHook"]({
          onCopyDocData: (_0x28658f, _0x2cb82e) =>
            this._appendConfig(_0x28658f, _0x2cb82e.sourceDocuments),
        }),
      ),
      this.disposeWithMe(
        this._pasteAdapterService["registerAdapter"]({
          getPasteMutationInfos: (_0x264a30) =>
            this._getPasteMutationInfos(_0x264a30),
        }),
      ));
  }
  _appendConfig(_0x2779e6, _0x2eeb4d) {
    let _0x489172 = {};
    return (
      _0x2eeb4d.forEach((_0x22a11d) => {
        var _0x88a5e8;
        (_0x88a5e8 = _0x22a11d.body) == null ||
          (_0x88a5e8 = _0x88a5e8.blockRanges) == null ||
          _0x88a5e8.forEach((_0x2b8963) => {
            if (_0x2b8963.blockType !== _0x12e2cd.CALLOUT) return;
            let _0x14de89 = this._model["getCalloutConfig"](
              _0x22a11d.id,
              _0x2b8963.blockId,
            );
            _0x14de89 && (_0x489172[_0x2b8963.blockId] = _0x4523ad(_0x14de89));
          });
      }),
      Object.keys(_0x489172).length === 0
        ? _0x2779e6
        : {
            ..._0x2779e6,
            resources: [
              ...(_0x2779e6.resources ?? []).filter(
                (_0x3ded53) => _0x3ded53.name !== _0x337389,
              ),
              {
                name: _0x337389,
                data: JSON.stringify({ callouts: _0x489172 }),
              },
            ],
          }
    );
  }
  _getPasteMutationInfos(_0x1a4b57) {
    var _0x4297b1;
    let _0x24b19e =
        (_0x4297b1 = _0x1a4b57.doc["resources"]) == null
          ? undefined
          : _0x4297b1.find((_0xea9103) => _0xea9103.name === _0x337389),
      _0x45abbd = _0x24b19e ? at(_0x24b19e.data).callouts : {},
      _0x2980f0 = [],
      _0x59b714 = [];
    return (
      _0x1a4b57.blockRangeMappings["forEach"](
        ({ sourceBlockRange: _0x2a4f63, targetBlockRange: _0x585597 }) => {
          if (_0x2a4f63.blockType !== _0x12e2cd.CALLOUT) return;
          let _0x4030d4 = _0x45abbd[_0x2a4f63.blockId];
          _0x4030d4 &&
            (_0x2980f0.push({
              id: _0x46c8f0.id,
              params: {
                unitId: _0x1a4b57.unitId,
                blockId: _0x585597.blockId,
                config: _0x4030d4,
              },
            }),
            _0x59b714.push({
              id: _0xc4bd84.id,
              params: { unitId: _0x1a4b57.unitId, blockId: _0x585597.blockId },
            }));
        },
      ),
      { redoMutations: _0x2980f0, undoMutations: _0x59b714 }
    );
  }
};
U = H(
  [
    V(0, _0x2de359(_0x3fe39d)),
    V(1, _0x2de359(_0x4d369c)),
    V(2, _0x2de359(_0x64bb64)),
  ],
  U,
);
function at(_0x58a94e) {
  try {
    return _0x305830(JSON.parse(_0x58a94e));
  } catch {
    return { callouts: {} };
  }
}
const W = "docs-callout-ui.floating-toolbar",
  ot = [
    "red.500",
    "orange.400",
    "green.400",
    "blue.500",
    "primary.500",
    "purple.500",
    "pink.500",
  ];
function st(_0x1de00c) {
  let {
      blockId: _0x23f333,
      config: _0x11342d,
      textColor: _0x48f2dd,
      unitId: _0x1460f9,
    } = _0x1de00c.popup["extraProps"],
    _0x158027 = _0x36ad2e(_0x17e04a),
    _0x20bf7e = _0x36ad2e(_0x155dcd),
    _0x12cfef = _0x36ad2e(_0x10bfa3),
    _0x91345a = _0x4d496e(
      () => _0x12cfef.currentTheme$,
      _0x12cfef.getCurrentTheme(),
      false,
      [_0x12cfef],
    ),
    [_0x21feb4, _0x1e10e1] = _0x54fffb(_0x11342d),
    [_0x44f193, _0x4b71a2] = _0x54fffb(_0x48f2dd),
    [_0x1a2af3, _0x358208] = _0x54fffb(false),
    _0x3cc069 = _0x12cfef.getColorFromTheme(_0x272963),
    _0x37980a = _0x12cfef.getColorFromTheme(_0x5236c9),
    _0x46d010 = _0x21feb4.backgroundColor || _0x3cc069,
    _0x488b41 = _0x21feb4.borderColor || _0x37980a,
    _0x5c1411 = [_0x3cc069, ...ct(_0x91345a, _0x12cfef)],
    _0x4f2a06 = ot.map((_0x2dfa04) => _0x12cfef.getColorFromTheme(_0x2dfa04)),
    _0x5266a4 = async (_0x48fa39) => {
      let _0x3be171 = await _0x158027.executeCommand(_0x3e8bc1.id, {
        blockId: _0x23f333,
        config: _0x48fa39,
        unitId: _0x1460f9,
      });
      return (
        _0x3be171 && _0x1e10e1((_0x16512f) => ({ ..._0x16512f, ..._0x48fa39 })),
        _0x3be171
      );
    },
    _0x3af076 = async (_0x544c5e) => {
      let _0x116519 = await _0x158027.executeCommand(_0x42d31e.id, {
        blockId: _0x23f333,
        unitId: _0x1460f9,
        value: _0x544c5e,
      });
      return (_0x116519 && _0x4b71a2(_0x544c5e ?? undefined), _0x116519);
    },
    _0x10172a = async () => {
      let _0x1d1631 = await _0x158027.executeCommand(_0x19b198.id, {
        blockId: _0x23f333,
        unitId: _0x1460f9,
      });
      return (
        _0x1d1631 &&
          (_0x1e10e1((_0x67f2d4) => ({
            ..._0x67f2d4,
            backgroundColor: "",
            borderColor: "",
            borderOpacity: _0x1049ae.borderOpacity,
            borderStyle: _0x1049ae.borderStyle,
            borderWidth: _0x1049ae.borderWidth,
          })),
          _0x4b71a2(undefined)),
        _0x1d1631
      );
    },
    _0x5941e5 = _0x20bf7e.t("docs-callout-ui.menu.callout"),
    _0x17e886 = _0x20bf7e.t("docs-callout-ui.toolbar.backgroundColor"),
    _0x1f55ff = _0x20bf7e.t("docs-callout-ui.toolbar.border"),
    _0x14f675 = _0x20bf7e.t("docs-callout-ui.toolbar.textColor"),
    _0x20b9ab = _0x20bf7e.t("docs-callout-ui.toolbar.convertToParagraph"),
    _0x1e9763 = _0x20bf7e.t("docs-callout-ui.toolbar.resetColor"),
    _0x29a3dd = (_0x3f2a76) => _0x3f2a76.stopPropagation();
  return _0x36290a("div", {
    "data-u-comp": W,
    role: "toolbar",
    className:
      "univer-relative univer-flex univer-items-center univer-gap-1 univer-rounded-md univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-1 univer-shadow-sm dark:!univer-border-gray-700 dark:!univer-bg-gray-900",
    onMouseDown: _0x29a3dd,
    children: [
      _0x3bc486(_0x5f0d61, {
        active: _0x1a2af3,
        "aria-label": _0x5941e5,
        onClick: () => _0x358208((_0x3a4252) => !_0x3a4252),
        children: _0x3bc486(_0x134b04, { className: "univer-text-xl" }),
      }),
      _0x3bc486(_0x5f0d61, {
        "aria-label": _0x20b9ab,
        onClick: () =>
          _0x158027.executeCommand(_0x2ce202.id, {
            blockId: _0x23f333,
            unitId: _0x1460f9,
          }),
        children: _0x3bc486(_0x4e31c8, {}),
      }),
      _0x1a2af3
        ? _0x3bc486("div", {
            "data-u-comp": "docs-callout-color-panel",
            className:
              "univer-absolute univer-left-1 univer-top-full univer-z-10 univer-w-[296px] univer-rounded-lg univer-bg-gray-0 univer-p-3 univer-shadow-lg dark:!univer-bg-gray-900",
            onPointerDown: _0x29a3dd,
            onMouseDown: _0x29a3dd,
            onClick: _0x29a3dd,
            children: _0x36290a("div", {
              className: "univer-flex univer-flex-col univer-gap-4",
              children: [
                _0x36290a(G, {
                  title: _0x14f675,
                  children: [
                    _0x3bc486(K, {
                      label: _0x1e9763,
                      selected: _0x44f193 == null,
                      onClick: () => _0x3af076(null),
                    }),
                    _0x4f2a06.map((_0x47a09d) =>
                      _0x3bc486(
                        K,
                        {
                          color: _0x47a09d,
                          label: _0x14f675,
                          selected:
                            _0x44f193 != null && q(_0x44f193, _0x47a09d),
                          variant: "text",
                          onClick: () => _0x3af076(_0x47a09d),
                        },
                        "text-" + _0x47a09d,
                      ),
                    ),
                  ],
                }),
                _0x36290a(G, {
                  title: _0x1f55ff,
                  children: [
                    _0x3bc486(K, {
                      label: _0x20bf7e.t("docs-callout-ui.toolbar.borderNone"),
                      selected: _0x21feb4.borderWidth === 0,
                      onClick: () => _0x5266a4({ borderWidth: 0 }),
                    }),
                    _0x3bc486(K, {
                      color: _0x37980a,
                      label: _0x1f55ff,
                      selected:
                        _0x21feb4.borderWidth > 0 && q(_0x488b41, _0x37980a),
                      onClick: () =>
                        _0x5266a4({
                          borderColor: "",
                          borderOpacity: _0x1049ae.borderOpacity,
                          borderWidth:
                            _0x21feb4.borderWidth || _0x1049ae.borderWidth,
                        }),
                    }),
                    _0x4f2a06
                      .slice(0, 6)
                      .map((_0xa0cc01) =>
                        _0x3bc486(
                          K,
                          {
                            color: _0xa0cc01,
                            label: _0x1f55ff,
                            selected:
                              _0x21feb4.borderWidth > 0 &&
                              q(_0x488b41, _0xa0cc01),
                            onClick: () =>
                              _0x5266a4({
                                borderColor: _0xa0cc01,
                                borderOpacity: _0x1049ae.borderOpacity,
                                borderWidth:
                                  _0x21feb4.borderWidth ||
                                  _0x1049ae.borderWidth,
                              }),
                          },
                          _0xa0cc01,
                        ),
                      ),
                  ],
                }),
                _0x3bc486(G, {
                  title: _0x17e886,
                  children: _0x5c1411.map((_0x2ee71a, _0x2fbd49) =>
                    _0x3bc486(
                      K,
                      {
                        color: _0x2ee71a,
                        label: _0x17e886,
                        selected: q(_0x46d010, _0x2ee71a),
                        onClick: () =>
                          _0x5266a4({
                            backgroundColor: _0x2fbd49 === 0 ? "" : _0x2ee71a,
                          }),
                      },
                      "background-" + _0x2ee71a,
                    ),
                  ),
                }),
                _0x3bc486(_0x5f0d61, {
                  noIcon: true,
                  className:
                    "!univer-h-8 !univer-w-full !univer-rounded-md !univer-border !univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-px-3 univer-text-sm univer-text-gray-700 hover:univer-bg-gray-100 dark:!univer-border-gray-700 dark:!univer-bg-gray-900 dark:!univer-text-gray-100 dark:hover:!univer-bg-gray-800",
                  onClick: _0x10172a,
                  children: _0x1e9763,
                }),
              ],
            }),
          })
        : null,
    ],
  });
}
function G(_0x1c2a0f) {
  return _0x36290a("section", {
    className: "univer-flex\x20univer-flex-col\x20univer-gap-2",
    children: [
      _0x3bc486("span", {
        className:
          "univer-text-sm univer-font-medium univer-text-gray-800 dark:!univer-text-gray-100",
        children: _0x1c2a0f.title,
      }),
      _0x3bc486("div", {
        className: "univer-grid univer-grid-cols-8 univer-gap-2",
        children: _0x1c2a0f.children,
      }),
    ],
  });
}
function K(_0x1d60d5) {
  let {
      color: _0x49af27,
      label: _0xcfd884,
      onClick: _0x2c4e70,
      selected: _0x33bbfe,
      variant: _0x39733d = "fill",
    } = _0x1d60d5,
    _0x1f1838 = _0x33bbfe
      ? "univer-ring-2 univer-ring-primary-600 univer-ring-offset-1 dark:!univer-ring-offset-gray-900"
      : "";
  return _0x3bc486(_0x5f0d61, {
    "aria-label": _0x49af27 ? _0xcfd884 + ":\x20" + _0x49af27 : _0xcfd884,
    onClick: _0x2c4e70,
    className:
      "\n !univer-size-7 univer-rounded univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0\n univer-text-base univer-transition-shadow\n hover:univer-ring-1 hover:univer-ring-primary-400\n dark:!univer-border-gray-700 dark:!univer-bg-gray-900\n " +
      _0x1f1838 +
      "\n ",
    style:
      _0x39733d === "fill" && _0x49af27
        ? { backgroundColor: _0x49af27 }
        : { color: _0x49af27 },
    children:
      _0x39733d === "text" ? "A" : _0x49af27 ? null : _0x3bc486(_0x5720c0, {}),
  });
}
function ct(_0x4329d7, _0x289b97) {
  return Object.values(_0x4329d7.highlight["background"])
    .slice(0, 15)
    .map(({ alpha: _0x3bc5f1, color: _0x3361a5 }) =>
      new _0x7c7d23(_0x289b97.getColorFromTheme(_0x3361a5) ?? _0x3361a5)
        .setAlpha(_0x3bc5f1)
        .toRgbString(),
    );
}
function q(_0x491726, _0x48c1cc) {
  return _0x491726.toUpperCase() === _0x48c1cc.toUpperCase();
}
let J = class extends _0x469757 {
  constructor(_0x28796c, _0x3602ee) {
    (super(),
      (this._componentManager = _0x28796c),
      (this._iconManager = _0x3602ee),
      this._registerIcons(),
      this._registerComponents());
  }
  _registerIcons() {
    this.disposeWithMe(
      this._iconManager["register"]({ CalloutIcon: _0xa2b0e3 }),
    );
  }
  _registerComponents() {
    this.disposeWithMe(this._componentManager["register"](W, st));
  }
};
J = H([V(0, _0x2de359(_0x5a74ed)), V(1, _0x2de359(_0xb02ed8))], J);
function lt(_0x1ec06e, _0x49ebad, _0x953d98) {
  (_0x1ec06e.save(),
    ft(_0x1ec06e, _0x49ebad, _0x953d98.borderRadius),
    (_0x1ec06e.fillStyle = _0x953d98.backgroundColor),
    (_0x1ec06e.globalAlpha = 0.45),
    _0x1ec06e.fill(),
    _0x1ec06e.restore());
}
function ut(_0x445084, _0x11f4ee, _0x1c15c6) {
  _0x1c15c6.borderWidth <= 0 ||
    (_0x445084.save(),
    ft(_0x445084, _0x11f4ee, _0x1c15c6.borderRadius),
    (_0x445084.strokeStyle = _0x1c15c6.borderColor),
    (_0x445084.lineWidth = _0x1c15c6.borderWidth),
    _0x445084.setLineDash(
      _0x1c15c6.borderStyle === _0x1d27b0.DOT
        ? [_0x1c15c6.borderWidth, _0x1c15c6.borderWidth * 2]
        : _0x1c15c6.borderStyle === _0x1d27b0.DASH
          ? [_0x1c15c6.borderWidth * 4, _0x1c15c6.borderWidth * 2]
          : [],
    ),
    (_0x445084.globalAlpha = _0x1c15c6.borderOpacity),
    _0x445084.stroke(),
    _0x445084.restore());
}
function dt(_0x52046f, _0x1a9d09, _0x2d6acb) {
  if (
    _0x1a9d09.clipLeft == null ||
    _0x1a9d09.clipRight == null ||
    _0x1a9d09.clipRight <= _0x1a9d09.clipLeft
  )
    return _0x2d6acb();
  (_0x52046f.save(),
    _0x52046f.beginPath(),
    _0x52046f.rectByPrecision(
      _0x1a9d09.clipLeft,
      -100000,
      _0x1a9d09.clipRight - _0x1a9d09.clipLeft,
      200000,
    ),
    _0x52046f.closePath(),
    _0x52046f.clip());
  let _0x5a7eda = _0x2d6acb();
  return (_0x52046f.restore(), _0x5a7eda);
}
function ft(_0x1ffdf3, _0x4f6ff8, _0x342317) {
  let {
      height: _0xa79c95,
      left: _0x391ba3,
      top: _0xa58933,
      width: _0x4ec7bc,
    } = _0x4f6ff8,
    _0x995e26 = Math.min(_0x342317, _0x4ec7bc / 2, _0xa79c95 / 2);
  (_0x1ffdf3.beginPath(),
    _0x1ffdf3.moveTo(_0x391ba3 + _0x995e26, _0xa58933),
    _0x1ffdf3.lineTo(_0x391ba3 + _0x4ec7bc - _0x995e26, _0xa58933),
    _0x1ffdf3.quadraticCurveTo(
      _0x391ba3 + _0x4ec7bc,
      _0xa58933,
      _0x391ba3 + _0x4ec7bc,
      _0xa58933 + _0x995e26,
    ),
    _0x1ffdf3.lineTo(_0x391ba3 + _0x4ec7bc, _0xa58933 + _0xa79c95 - _0x995e26),
    _0x1ffdf3.quadraticCurveTo(
      _0x391ba3 + _0x4ec7bc,
      _0xa58933 + _0xa79c95,
      _0x391ba3 + _0x4ec7bc - _0x995e26,
      _0xa58933 + _0xa79c95,
    ),
    _0x1ffdf3.lineTo(_0x391ba3 + _0x995e26, _0xa58933 + _0xa79c95),
    _0x1ffdf3.quadraticCurveTo(
      _0x391ba3,
      _0xa58933 + _0xa79c95,
      _0x391ba3,
      _0xa58933 + _0xa79c95 - _0x995e26,
    ),
    _0x1ffdf3.lineTo(_0x391ba3, _0xa58933 + _0x995e26),
    _0x1ffdf3.quadraticCurveTo(
      _0x391ba3,
      _0xa58933,
      _0x391ba3 + _0x995e26,
      _0xa58933,
    ),
    _0x1ffdf3.closePath());
}
function Y(_0x5603a0) {
  "@babel/helpers - typeof";
  return (
    (Y =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x25993c) {
            return typeof _0x25993c;
          }
        : function (_0x4857c5) {
            return _0x4857c5 &&
              typeof Symbol == "function" &&
              _0x4857c5.constructor === Symbol &&
              _0x4857c5 !== Symbol.prototype
              ? "symbol"
              : typeof _0x4857c5;
          }),
    Y(_0x5603a0)
  );
}
function pt(_0x3c68df, _0x253329) {
  if (Y(_0x3c68df) != "object" || !_0x3c68df) return _0x3c68df;
  var _0x297063 = _0x3c68df[Symbol.toPrimitive];
  if (_0x297063 !== undefined) {
    var _0x4af449 = _0x297063.call(_0x3c68df, _0x253329 || "default");
    if (Y(_0x4af449) != "object") return _0x4af449;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x253329 === "string" ? String : Number)(_0x3c68df);
}
function mt(_0x218c5b) {
  var _0x827ab5 = pt(_0x218c5b, "string");
  return Y(_0x827ab5) == "symbol" ? _0x827ab5 : _0x827ab5 + "";
}
function X(_0x2f17a0, _0x3e865e, _0x27b114) {
  return (
    (_0x3e865e = mt(_0x3e865e)) in _0x2f17a0
      ? Object.defineProperty(_0x2f17a0, _0x3e865e, {
          value: _0x27b114,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x2f17a0[_0x3e865e] = _0x27b114),
    _0x2f17a0
  );
}
var ht = class extends _0x282bb4 {
  constructor(_0x26b99e) {
    (super(),
      (this._state = _0x26b99e),
      X(this, "uKey", "DocsCalloutBackgroundExtension"),
      X(this, "type", _0x83e047.BACKGROUND),
      X(this, "_fragments", []),
      X(this, "_fragmentsByLine", new Map()),
      X(this, "_paintedRects", new Set()));
  }
  getFragments() {
    return this._fragments;
  }
  clearCache() {
    ((this._fragments = this._state["getFragments"]()),
      this._fragmentsByLine["clear"](),
      this._paintedRects["clear"](),
      this._fragments["forEach"]((_0x9822bd) => {
        let { triggerLine: _0x561cc1 } = _0x9822bd.rect;
        if (!_0x561cc1) return;
        let _0x14095e = this._fragmentsByLine["get"](_0x561cc1) ?? [];
        (_0x14095e.push(_0x9822bd),
          this._fragmentsByLine["set"](_0x561cc1, _0x14095e));
      }));
  }
  draw(_0x4601c8, _0x4d7f59, _0x545319) {
    var _0x3e20ff, _0x31548e;
    let _0x3c5b1d =
      (_0x3e20ff = _0x545319.parent) == null ? undefined : _0x3e20ff.parent;
    _0x3c5b1d &&
      ((_0x31548e = this._fragmentsByLine["get"](_0x3c5b1d)) == null ||
        _0x31548e.forEach((_0x178627) => {
          this._paintedRects["has"](_0x178627.rect) ||
            (this._paintedRects["add"](_0x178627.rect),
            dt(_0x4601c8, _0x178627.rect, () => {
              lt(_0x4601c8, _0x178627.rect, _0x178627.config);
            }));
        }));
  }
};
function gt(_0x48da37, _0x567872, _0x598a44, _0x2a60da = _0x598a44) {
  let _0x358dcc = [];
  return (
    _0x48da37.forEach((_0x28e49b) => {
      let _0x16402f = _0x567872.filter(
        (_0x4c728e) =>
          _0x4c728e.pageIndex >= 0 &&
          _0x4c728e.ed >= _0x28e49b.startIndex &&
          _0x4c728e.st <= _0x28e49b.endIndex,
      );
      Array.from(
        new Set(_0x16402f.map((_0x1dcc8f) => _0x1dcc8f.pageIndex)),
      ).forEach((_0x2c2f08) => {
        let _0x14fdaa = _0x16402f.filter(
          (_0x58c134) => _0x58c134.pageIndex === _0x2c2f08,
        );
        Array.from(
          new Set(_0x14fdaa.map((_0x327240) => _0x327240.layoutFragment)),
        ).forEach((_0x4cb82e) => {
          let _0x2a9993 = _0x14fdaa.filter(
              (_0x481124) => _0x481124.layoutFragment === _0x4cb82e,
            ),
            _0x58c159 = Math.min(..._0x2a9993.map(_t)) - _0x2a60da,
            _0x1c1f8b = Math.max(..._0x2a9993.map(vt)) + _0x2a60da,
            _0x587532 = Math.min(..._0x2a9993.map(Z)) - _0x598a44,
            _0x4feb92 = Math.max(..._0x2a9993.map(bt)) + _0x598a44,
            _0x5444cd = yt(_0x2a9993),
            _0x4a3549 = _0x2a9993.reduce((_0xb6cba9, _0x58211b) =>
              Z(_0x58211b) < Z(_0xb6cba9) ? _0x58211b : _0xb6cba9,
            );
          _0x358dcc.push({
            blockId: _0x28e49b.blockId,
            ..._0x5444cd,
            pageIndex: _0x2c2f08,
            left: _0x58c159,
            top: _0x587532,
            width: _0x1c1f8b - _0x58c159,
            height: _0x4feb92 - _0x587532,
            firstLineTop: Z(_0x4a3549),
            ...(_0x4a3549.skeletonLine
              ? { triggerLine: _0x4a3549.skeletonLine }
              : {}),
          });
        });
      });
    }),
    _0x358dcc
  );
}
function _t(_0x4c531f) {
  return _0x4c531f.visualLeft ?? _0x4c531f.left;
}
function vt(_0x36de6e) {
  return (
    (_0x36de6e.visualLeft ?? _0x36de6e.left) +
    (_0x36de6e.visualWidth ?? _0x36de6e.width)
  );
}
function yt(_0x5ae343) {
  let _0x3c861d = _0x5ae343
      .map((_0x40124c) => _0x40124c.clipLeft)
      .filter((_0x27104e) => _0x27104e != null),
    _0x135c93 = _0x5ae343
      .map((_0x2fa775) => _0x2fa775.clipRight)
      .filter((_0x2e8941) => _0x2e8941 != null);
  if (!_0x3c861d.length || !_0x135c93.length) return {};
  let _0x390832 = Math.max(..._0x3c861d),
    _0x17f450 = Math.min(..._0x135c93);
  return _0x17f450 > _0x390832
    ? { clipLeft: _0x390832, clipRight: _0x17f450 }
    : {};
}
function Z(_0x1f44c6) {
  return (
    _0x1f44c6.top + (_0x1f44c6.marginTop ?? 0) + (_0x1f44c6.paddingTop ?? 0)
  );
}
function bt(_0x3464eb) {
  return _0x3464eb.contentHeight == null
    ? _0x3464eb.top +
        _0x3464eb.height -
        (_0x3464eb.marginBottom ?? 0) -
        (_0x3464eb.paddingBottom ?? 0)
    : Z(_0x3464eb) + _0x3464eb.contentHeight;
}
const xt = -11000;
let St = class extends _0x469757 {
  constructor(
    _0x1fa4c2,
    _0x5c1a3c,
    _0x1a8581,
    _0x2deeb8,
    _0x184b7a,
    _0x10a34b,
    _0x309abe,
  ) {
    (super(),
      (this._context = _0x1fa4c2),
      (this._docSkeletonManagerService = _0x5c1a3c),
      (this._docsCalloutModel = _0x1a8581),
      (this._docCanvasPopManagerService = _0x2deeb8),
      (this._commandService = _0x184b7a),
      (this._themeService = _0x10a34b),
      (this._permissionService = _0x309abe),
      X(this, "_iconHitRects", []),
      X(this, "_blockHitRects", []),
      X(this, "_emojiPopoverDisposable", null),
      X(this, "_toolbarPopoverDisposable", null),
      X(this, "_activeEmojiBlockId", null),
      X(this, "_cursorBeforeIconHover", null),
      this._initRender(),
      this._initPointer(),
      this.disposeWithMe(
        this._docsCalloutModel["change$"].subscribe(({ unitId: _0x1ec603 }) => {
          _0x1ec603 === this._context["unitId"] && this._makeDirty();
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
    let _0x8ffdb8 = this._context["mainComponent"];
    if (!(_0x8ffdb8 instanceof _0xa5caa9)) return;
    let _0x15b23b = new ht({
      getFragments: () => this._collectRenderFragments(),
    });
    this.disposeWithMe(_0x8ffdb8.register(_0x15b23b));
    let _0x333451 = _0x8ffdb8.pageRender$["subscribe"]((_0x425751) => {
      this._drawPage(_0x425751, _0x15b23b.getFragments());
    });
    this.disposeWithMe({ dispose: () => _0x333451.unsubscribe() });
  }
  _initPointer() {
    let _0x4daa40 = this._context["mainComponent"] ?? this._context["scene"];
    (this.disposeWithMe(
      _0x4daa40.onPointerMove$["subscribeEvent"]({
        next: ([_0x46de9d]) => {
          let _0x1446a1 = Dt(
              _0x46de9d.offsetX,
              _0x46de9d.offsetY,
              this._context["scene"],
            ),
            _0x28df90 = this._hitIcon(_0x1446a1.x, _0x1446a1.y);
          _0x28df90 && this._canEditBlock(_0x28df90.blockId)
            ? this._setPointerCursor()
            : this._restorePointerCursor();
        },
        priority: xt,
      }),
    ),
      this.disposeWithMe(
        _0x4daa40.onPointerLeave$["subscribeEvent"](() => {
          this._restorePointerCursor();
        }),
      ),
      this.disposeWithMe(
        _0x4daa40.onPointerDown$["subscribeEvent"]({
          next: ([_0xade93a, _0x20fbf2]) => {
            var _0x590a14, _0x4fdec4, _0x564c32;
            if (_0xade93a.button === 2) return;
            let _0x373e69 = Dt(
                _0xade93a.offsetX,
                _0xade93a.offsetY,
                this._context["scene"],
              ),
              _0x3280a8 = this._hitIcon(_0x373e69.x, _0x373e69.y);
            if (!_0x3280a8) {
              this._closeEmojiPopover();
              let _0x558aac = this._hitBlock(_0x373e69.x, _0x373e69.y);
              _0x558aac
                ? this._openToolbarPopover(_0x558aac)
                : this._closeToolbarPopover();
              return;
            }
            (this._closeToolbarPopover(),
              _0x20fbf2 == null ||
                (_0x590a14 = _0x20fbf2.stopPropagation) == null ||
                _0x590a14.call(_0x20fbf2),
              _0x20fbf2 && (_0x20fbf2.skipNextObservers = true),
              (_0x4fdec4 = _0xade93a.stopPropagation) == null ||
                _0x4fdec4.call(_0xade93a),
              (_0x564c32 = _0xade93a.preventDefault) == null ||
                _0x564c32.call(_0xade93a),
              this._openEmojiPopover(_0x3280a8));
          },
          priority: xt,
        }),
      ));
  }
  _drawPage(_0x5ab361, _0xe7ac9) {
    if (!_0xe7ac9.length) {
      ((this._iconHitRects = []), (this._blockHitRects = []));
      return;
    }
    let _0x3cfd92 =
        this._docSkeletonManagerService["getSkeleton"]().getSkeletonData(),
      _0x330ac1 = (
        (_0x3cfd92 == null ? undefined : _0x3cfd92.pages) ?? []
      ).indexOf(_0x5ab361.page);
    if (_0x330ac1 < 0) return;
    _0x330ac1 === 0 && ((this._iconHitRects = []), (this._blockHitRects = []));
    let _0x587e85 = wt(this._context["mainComponent"]);
    _0xe7ac9
      .filter((_0x2182ea) => _0x2182ea.rect["pageIndex"] === _0x330ac1)
      .forEach(({ config: _0x301999, rect: _0x4404b0 }) => {
        let _0x546691 = Et(
          {
            blockId: _0x4404b0.blockId,
            bottom: _0x4404b0.top + _0x4404b0.height + _0x587e85.docsTop,
            left: _0x4404b0.left + _0x587e85.docsLeft,
            right: _0x4404b0.left + _0x4404b0.width + _0x587e85.docsLeft,
            top: _0x4404b0.top + _0x587e85.docsTop,
          },
          _0x4404b0,
          _0x587e85.docsLeft,
        );
        _0x546691 && this._blockHitRects["push"](_0x546691);
        let _0x447674 = dt(_0x5ab361.ctx, _0x4404b0, () => {
          if ((ut(_0x5ab361.ctx, _0x4404b0, _0x301999), !_0x301999.showIcon))
            return null;
          (_0x5ab361.ctx["save"](),
            (_0x5ab361.ctx["font"] = _0x301999.iconSize + "px sans-serif"),
            (_0x5ab361.ctx["textBaseline"] = "top"),
            (_0x5ab361.ctx["fillStyle"] =
              this._themeService["getColorFromTheme"]("gray.900")));
          let _0x32c760 = _0x4404b0.left + _0x301999.paddingLeft,
            _0x59243a = _0x4404b0.firstLineTop + -3,
            _0xb62280 = Math.max(
              _0x5ab361.ctx["measureText"](_0x301999.icon).width,
              _0x301999.iconSize,
            );
          return (
            _0x5ab361.ctx["fillText"](_0x301999.icon, _0x32c760, _0x59243a),
            _0x5ab361.ctx["restore"](),
            {
              bottom: _0x59243a + _0x301999.iconSize,
              left: _0x32c760,
              right: _0x32c760 + _0xb62280,
              top: _0x59243a,
            }
          );
        });
        if (!_0x447674) return;
        let _0x574fe8 = Et(
          {
            blockId: _0x4404b0.blockId,
            bottom: _0x447674.bottom + _0x587e85.docsTop,
            left: _0x447674.left + _0x587e85.docsLeft,
            right: _0x447674.right + _0x587e85.docsLeft,
            top: _0x447674.top + _0x587e85.docsTop,
          },
          _0x4404b0,
          _0x587e85.docsLeft,
        );
        _0x574fe8 && this._iconHitRects["push"](_0x574fe8);
      });
  }
  _collectRenderFragments() {
    var _0x4c7365;
    let _0x53aeeb = this._context["unit"].getBody(),
      _0x4e9160 =
        (_0x53aeeb == null || (_0x4c7365 = _0x53aeeb.blockRanges) == null
          ? undefined
          : _0x4c7365.filter(
              (_0x205895) => _0x205895.blockType === _0x12e2cd.CALLOUT,
            )) ?? [];
    if (!_0x4e9160.length) return [];
    let _0x574917 =
        this._docSkeletonManagerService["getSkeleton"]().getSkeletonData(),
      _0x3a5237 = (_0x574917 == null ? undefined : _0x574917.pages) ?? [],
      _0xa567c4 = gt(
        _0x4e9160,
        this._collectLines(_0x3a5237, _0x4e9160),
        10,
        0,
      ),
      _0x45e648 = this._themeService["getColorFromTheme"](_0x272963),
      _0xa97d0b = this._themeService["getColorFromTheme"](_0x5236c9);
    return _0xa567c4.map((_0x4ac993) => {
      let _0x539f80 = _0x4523ad(
        this._docsCalloutModel["getCalloutConfig"](
          this._context["unitId"],
          _0x4ac993.blockId,
        ),
      );
      return {
        config: {
          ..._0x539f80,
          backgroundColor: _0x539f80.backgroundColor || _0x45e648,
          borderColor: _0x539f80.borderColor || _0xa97d0b,
        },
        rect: _0x4ac993,
      };
    });
  }
  _collectLines(_0x29d797, _0x15b1da) {
    let _0x157355 = wt(this._context["mainComponent"]),
      _0x59d9a4 = [],
      _0x3e4a23 = this._getCalloutParagraphOwners(_0x15b1da);
    return (
      _0x28232a(
        _0x29d797,
        {
          docsLeft: _0x157355.docsLeft,
          pageMarginTop: _0x157355.pageMarginTop,
          tableCellInsetX: 6,
          unitId: this._context["unitId"],
        },
        (_0x487c59) => {
          let _0x4bedee = _0x3e4a23.get(_0x487c59.line["paragraphIndex"]);
          _0x4bedee && _0x59d9a4.push(Ct(_0x487c59, _0x4bedee));
        },
      ),
      _0x59d9a4
    );
  }
  _getCalloutParagraphOwners(_0x1cdb59) {
    var _0xbffde0;
    let _0x218024 = new Map(),
      _0x158931 =
        ((_0xbffde0 = this._context["unit"].getBody()) == null
          ? undefined
          : _0xbffde0.paragraphs) ?? [];
    return (
      _0x1cdb59.forEach((_0x1f20d6) => {
        _0x158931.forEach((_0x317926) => {
          _0x317926.startIndex > _0x1f20d6.startIndex &&
            _0x317926.startIndex < _0x1f20d6.endIndex &&
            _0x218024.set(_0x317926.startIndex, _0x1f20d6);
        });
      }),
      _0x218024
    );
  }
  _makeDirty() {
    var _0xc5c022;
    ((_0xc5c022 = this._context["mainComponent"]) == null ||
      _0xc5c022.makeDirty(true),
      this._context["scene"].makeDirty());
  }
  _hitIcon(_0x3f83e5, _0x193f7a) {
    return (
      this._iconHitRects["find"](
        (_0x510b1e) =>
          _0x3f83e5 >= _0x510b1e.left &&
          _0x3f83e5 <= _0x510b1e.right &&
          _0x193f7a >= _0x510b1e.top &&
          _0x193f7a <= _0x510b1e.bottom,
      ) ?? null
    );
  }
  _hitBlock(_0x2d2bd3, _0xc903d8) {
    return (
      this._blockHitRects["find"](
        (_0x1e9d99) =>
          _0x2d2bd3 >= _0x1e9d99.left &&
          _0x2d2bd3 <= _0x1e9d99.right &&
          _0xc903d8 >= _0x1e9d99.top &&
          _0xc903d8 <= _0x1e9d99.bottom,
      ) ?? null
    );
  }
  _openToolbarPopover(_0x20c939) {
    if ((this._closeToolbarPopover(), !this._canEditBlock(_0x20c939.blockId)))
      return;
    let _0x2b7dbb = _0x4523ad(
      this._docsCalloutModel["getCalloutConfig"](
        this._context["unitId"],
        _0x20c939.blockId,
      ),
    );
    this._toolbarPopoverDisposable = this._docCanvasPopManagerService[
      "attachPopupToRect"
    ](
      _0x20c939,
      {
        componentKey: W,
        direction: "top-center",
        offset: [0, 8],
        extraProps: {
          blockId: _0x20c939.blockId,
          config: _0x2b7dbb,
          textColor: Ot(
            this._context["unit"].getBody(),
            _0x20c939.blockId,
            _0x12e2cd.CALLOUT,
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
    var _0x12a3f0;
    ((_0x12a3f0 = this._toolbarPopoverDisposable) == null ||
      _0x12a3f0.dispose(),
      (this._toolbarPopoverDisposable = null));
  }
  _openEmojiPopover(_0x2c51f6) {
    if ((this._closeEmojiPopover(), !this._canEditBlock(_0x2c51f6.blockId)))
      return;
    this._activeEmojiBlockId = _0x2c51f6.blockId;
    let _0x513737 = _0x4523ad(
      this._docsCalloutModel["getCalloutConfig"](
        this._context["unitId"],
        _0x2c51f6.blockId,
      ),
    );
    this._emojiPopoverDisposable = this._docCanvasPopManagerService[
      "attachPopupToRect"
    ](
      _0x2c51f6,
      {
        componentKey: _0x3231a6,
        direction: "bottom-left",
        extraProps: {
          activeEmoji: _0x513737.icon,
          onSelect: (_0x2fca8b, _0x51e7c6) => {
            let _0x3b1deb = this._activeEmojiBlockId;
            _0x3b1deb &&
              (this._commandService["executeCommand"](_0x3e8bc1.id, {
                blockId: _0x3b1deb,
                config: { icon: _0x2fca8b },
              }),
              (_0x51e7c6 != null && _0x51e7c6.keepOpen) ||
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
    var _0x3221b4;
    ((_0x3221b4 = this._emojiPopoverDisposable) == null || _0x3221b4.dispose(),
      (this._emojiPopoverDisposable = null),
      (this._activeEmojiBlockId = null));
  }
  _canEditBlock(_0xf3b2d4) {
    return _0x3fff3f(this._permissionService, this._context["unitId"], [
      ..._0x4cab86(this._context["unit"], "", "custom-block", _0xf3b2d4),
      _0x58f539("", "custom-block", _0xf3b2d4),
    ]);
  }
  _setPointerCursor() {
    ((this._cursorBeforeIconHover ??= this._context["scene"].getCursor()),
      this._context["scene"].setCursor(_0x21824b.POINTER));
  }
  _restorePointerCursor() {
    this._cursorBeforeIconHover != null &&
      (this._context["scene"].setCursor(this._cursorBeforeIconHover),
      (this._cursorBeforeIconHover = null));
  }
};
St = H(
  [
    V(1, _0x2de359(_0x5b2667)),
    V(2, _0x2de359(_0x64bb64)),
    V(3, _0x2de359(_0x42fa22)),
    V(4, _0x17e04a),
    V(5, _0x2de359(_0x10bfa3)),
    V(6, _0x44a125),
  ],
  St,
);
function Ct(_0x3921d5, _0xc9b170) {
  let {
    column: _0x26a9fa,
    line: _0x2af47a,
    pageIndex: _0x5e4b0c,
    pageLeft: _0x1c753e,
    sectionTop: _0x270d05,
  } = _0x3921d5;
  return {
    layoutFragment: _0x26a9fa,
    skeletonLine: _0x2af47a,
    st: _0xc9b170.startIndex,
    ed: _0xc9b170.endIndex,
    left: _0x1c753e + _0x26a9fa.left,
    top: _0x270d05 + _0x2af47a.top,
    width: _0x26a9fa.width,
    clipLeft: _0x3921d5.clipLeft,
    clipRight: _0x3921d5.clipRight,
    visualLeft: _0x3921d5.visualLeft,
    visualWidth: _0x3921d5.visualWidth,
    height: _0x2af47a.lineHeight,
    contentHeight: _0x2af47a.contentHeight,
    marginBottom: _0x2af47a.marginBottom,
    marginTop: _0x2af47a.marginTop,
    paddingBottom: _0x2af47a.paddingBottom,
    paddingTop: _0x2af47a.paddingTop,
    pageIndex: _0x5e4b0c,
  };
}
function wt(_0x22b6df) {
  if (!Tt(_0x22b6df)) return { docsLeft: 0, docsTop: 0, pageMarginTop: 0 };
  let _0x1f2734 = _0x22b6df.getOffsetConfig();
  return {
    docsLeft: (_0x1f2734 == null ? undefined : _0x1f2734.docsLeft) ?? 0,
    docsTop: (_0x1f2734 == null ? undefined : _0x1f2734.docsTop) ?? 0,
    pageMarginTop:
      (_0x1f2734 == null ? undefined : _0x1f2734.pageMarginTop) ?? 0,
  };
}
function Tt(_0xf74770) {
  return (
    typeof _0xf74770 == "object" &&
    !!_0xf74770 &&
    "getOffsetConfig" in _0xf74770 &&
    typeof _0xf74770.getOffsetConfig == "function"
  );
}
function Et(_0x24b32a, _0x5d35b3, _0x2d915a) {
  if (_0x5d35b3.clipLeft == null || _0x5d35b3.clipRight == null)
    return _0x24b32a;
  let _0x47cb55 = Math.max(_0x24b32a.left, _0x5d35b3.clipLeft + _0x2d915a),
    _0x274ba4 = Math.min(_0x24b32a.right, _0x5d35b3.clipRight + _0x2d915a);
  return _0x274ba4 > _0x47cb55
    ? { ..._0x24b32a, left: _0x47cb55, right: _0x274ba4 }
    : null;
}
function Dt(_0x5160a3, _0xe9718d, _0x534439) {
  let { scaleX: _0xe53dc2, scaleY: _0x37b352 } = _0x534439.getAncestorScale(),
    _0x44ac12 = _0x534439.getViewport("viewMain");
  return _0x44ac12
    ? {
        x: _0x5160a3 / _0xe53dc2 + _0x44ac12.viewportScrollX,
        y: _0xe9718d / _0x37b352 + _0x44ac12.viewportScrollY,
      }
    : { x: _0x5160a3, y: _0xe9718d };
}
function Ot(_0x1488cc, _0x121c88, _0x544182) {
  var _0x3bef1d, _0xecee5;
  let _0x5aedc3 =
    _0x1488cc == null || (_0x3bef1d = _0x1488cc.blockRanges) == null
      ? undefined
      : _0x3bef1d.find(
          (_0x835fbb) =>
            _0x835fbb.blockId === _0x121c88 &&
            _0x835fbb.blockType === _0x544182,
        );
  if (_0x5aedc3)
    return (
      (_0x1488cc == null ||
      (_0xecee5 = _0x1488cc.textRuns) == null ||
      (_0xecee5 = _0xecee5.find(
        (_0x357250) =>
          _0x357250.ed > _0x5aedc3.startIndex + 1 &&
          _0x357250.st < _0x5aedc3.endIndex,
      )) == null ||
      (_0xecee5 = _0xecee5.ts) == null ||
      (_0xecee5 = _0xecee5.cl) == null
        ? undefined
        : _0xecee5.rgb) ?? undefined
    );
}
const kt = {
  id: _0x2654ad.id,
  name: "docs-callout.command.delete-current-paragraph",
  type: _0x48cc92.COMMAND,
  multi: true,
  priority: 100,
  handler: async (_0x3628c1, _0x4601bb) => {
    var _0x3f8a86;
    return (_0x4601bb == null || (_0x3f8a86 = _0x4601bb.blockRange) == null
      ? undefined
      : _0x3f8a86.blockType) === _0x12e2cd.CALLOUT
      ? (await _0x3628c1
          .get(_0x17e04a)
          .executeCommand(_0x507501.id, {
            unitId: _0x4601bb.unitId,
            blockId: _0x4601bb.blockRange["blockId"],
          }),
        true)
      : false;
  },
};
let Q = class extends _0x469757 {
  constructor(_0x4098cd, _0x5c493c, _0x4eef43) {
    (super(),
      (this._docAutoFormatService = _0x4098cd),
      (this._menuManagerService = _0x5c493c),
      (this._commandService = _0x4eef43),
      this._menuManagerService["mergeMenu"](tt),
      this._menuManagerService["appendRootMenu"](et),
      this._initBoundaryDeleteGuard(),
      this._initCancelEmptyCalloutParagraphAutoFormat(),
      this.disposeWithMe(this._commandService["registerMultipleCommand"](kt)));
  }
  _initBoundaryDeleteGuard() {
    [
      { id: _0x2a1813.id, direction: "left" },
      { id: _0x571b8a.id, direction: "right" },
    ].forEach(({ id: _0x1366d3, direction: _0x9836f }) => {
      this.disposeWithMe(
        this._docAutoFormatService["registerAutoFormat"]({
          id: _0x1366d3,
          match: (_0x402335) =>
            _0x402335.selection["collapsed"]
              ? _0x59b456({
                  cursorOffset: _0x402335.selection["startOffset"],
                  direction: _0x9836f,
                  documentData: _0x402335.unit["getSnapshot"](),
                })
              : false,
          getMutations: () => [{ id: _0xd95ccc.id }],
          priority: 50,
        }),
      );
    });
  }
  _initCancelEmptyCalloutParagraphAutoFormat() {
    [_0x2a1813.id, _0x571b8a.id].forEach((_0xf3676b) => {
      this.disposeWithMe(
        this._docAutoFormatService["registerAutoFormat"]({
          id: _0xf3676b,
          match: (_0x101f8b) =>
            _0x101f8b.selection["collapsed"]
              ? _0x3946dd({
                  cursorOffset: _0x101f8b.selection["startOffset"],
                  documentData: _0x101f8b.unit["getSnapshot"](),
                }) != null
              : false,
          getMutations: (_0x4b8968) => [
            {
              id: _0x51dfc2.id,
              params: { cursorOffset: _0x4b8968.selection["startOffset"] },
            },
          ],
          priority: 100,
        }),
      );
    });
  }
};
Q = H([V(0, _0x2de359(_0x2fa442)), V(1, _0x5abfaa), V(2, _0x17e04a)], Q);
let $ = class extends _0x3ebfb4 {
  constructor(_0xe71553 = it, _0x4d351a, _0x1e4d02, _0x5e8d10) {
    (super(),
      (this._config = _0xe71553),
      (this._injector = _0x4d351a),
      (this._renderManagerService = _0x1e4d02),
      (this._configService = _0x5e8d10));
    let { menu: _0x46cb8c, ..._0x42bf51 } = _0x27220a({}, it, this._config);
    (_0x46cb8c &&
      this._configService["setConfig"]("menu", _0x46cb8c, { merge: true }),
      this._configService["setConfig"]("docs-callout-ui.config", _0x42bf51));
  }
  onRendered() {
    (this._injector["get"](Q),
      this.disposeWithMe(
        this._renderManagerService["registerRenderModule"](
          _0x2305b4.UNIVER_DOC,
          [St],
        ),
      ));
  }
  onStarting() {
    (this._injector["add"]([J]),
      this._injector["add"]([U]),
      this._injector["get"](J),
      this._injector["get"](U),
      this._injector["add"]([Q]));
  }
};
(X($, "pluginName", _0x337389 + "_UI_PLUGIN"),
  X($, "packageName", nt),
  X($, "version", rt),
  X($, "type", _0x2305b4.UNIVER_DOC),
  ($ = H(
    [
      _0x4a65e6(_0x8b08bf, _0x3dcddf, _0x16d427, _0x18d2cd, _0x5e2a50),
      V(1, _0x2de359(_0x317e99)),
      V(2, _0x25d88f),
      V(3, _0x165d85),
    ],
    $,
  )));
export { tt as DocsCalloutUIMenuSchema, $ as UniverDocsCalloutUIPlugin };
