import {
  BoardElementType as _0x1ddec1,
  BoardToolType as _0x1d53a2,
  IBoardElementService as _0x4f68c1,
  RemoveBoardElementsOperation as _0x29aec8,
  UniverBoardsPlugin as _0x2c7833,
  UpdateBoardElementsCommand as _0x819c09,
  getBoardPermissionValue as _0x4b0568,
  resolveBoardElementLocalTransformForParent as _0xecdbee,
} from "@univerjs-pro/boards";
import {
  DeleteBoardTableColumnsCommand as _0x2a96b7,
  DeleteBoardTableRowsCommand as _0xd7d539,
  InsertBoardTableColumnsCommand as _0x14054a,
  InsertBoardTableRowsCommand as _0x4c4da9,
  MergeBoardTableCellsCommand as _0x292149,
  MoveBoardTableColumnsCommand as _0x4f18d9,
  MoveBoardTableRowsCommand as _0x5678c5,
  RemoveBoardTableMutation as _0x4318df,
  SetBoardTableBorderPresetCommand as _0x305b49,
  SetBoardTableCellStyleCommand as _0x2ae50c,
  SetBoardTableMutation as _0x55cb2b,
  UniverBoardsTablePlugin as _0x1fb6b4,
  UnmergeBoardTableCellsCommand as _0x49c94f,
  UpdateBoardTableCommand as _0x278de5,
} from "@univerjs-pro/boards-table";
import {
  BOARDS_UI_PLUGIN_CONFIG_KEY as _0x22108f,
  BOARD_MAIN_VIEWPORT_KEY as _0x2f2fe8,
  BoardCanvasPopManagerService as _0x3e721d,
  BoardCopySelectionOperation as _0x3f0923,
  BoardCutSelectionOperation as _0x76b8e2,
  BoardDeleteSelectionOperation as _0x10df55,
  BoardImageInsertService as _0x722273,
  BoardInteractionSurfaceService as _0x5265db,
  IBoardClipboardResourceAdapterService as _0x4ae7c8,
  IBoardElementStateService as _0x2c7a66,
  IBoardUIStateService as _0x364941,
  UniverBoardsUIPlugin as _0x4a2006,
  getBoardElementRenderObjectKey as _0x517e76,
  parseBoardElementRenderObjectKey as _0x106f13,
  resolveBoardFloatingToolbarSelection as _0x5013d7,
} from "@univerjs-pro/boards-ui";
import { UniverLicensePlugin as _0x4bf397 } from "@univerjs-pro/license";
import {
  SLIDE_TABLE_CONTROL_GUTTER as _0x257ba6,
  SlideTableBorderDashEnum as _0x204d64,
  SlideTableBorderPresetEnum as _0xc6680a,
  SlideTableFillTypeEnum as _0x650736,
  SlideTableModelService as _0x5c02bb,
  SlideTablePictureFillModeEnum as _0x5cbb9f,
  SlideTableResourceService as _0x2ab092,
  SlideTableTextDirectionEnum as _0x1f8cc4,
  SlideTableVerticalAlignEnum as _0x487bfd,
  UniverSlidesTablePlugin as _0x8effc2,
  buildSlideTableCellTextDataPatch as _0x29ab7f,
  buildSlideTableTriggers as _0xbffbd9,
  canMoveSlideTableColumns as _0x18ec0e,
  canMoveSlideTableRows as _0x439788,
  collectSlideTableMergeRanges as _0x1ab83b,
  expandSlideTableRangeToMergedCells as _0xe39e09,
  hitTestSlideTableTrigger as _0x148a26,
  normalizeSlideTableCellRange as _0x11280b,
  resizeSlideTableColumnBoundary as _0x5d2fc5,
  resizeSlideTableRowBoundary as _0x1df707,
  resolveSlideTableCellTextMargins as _0x5def8b,
  resolveSlideTableRenderModel as _0x304b66,
  resolveSlideTableThemePalette as _0x20cfe6,
} from "@univerjs-pro/slides-table";
import {
  SLIDE_TABLE_CONTEXT_MENU_ACTIONS as _0x55df2e,
  SlideTableCellEditorService as _0x14d132,
  SlideTableObject as _0x510567,
  SlideTableSelectionService as _0x2ff9b6,
  TableKeyboardServiceBase as _0x5008ad,
  TableThemeGallery as _0x7bb423,
  TableToolbarDropdownInteractionGuard as _0x182e0f,
  UniverSlidesTableUIPlugin as _0x518e1c,
  buildSlideTableBackgroundColorPatch as _0x50a109,
  buildSlideTableBackgroundFillPatch as _0x3069dd,
  buildSlideTableBorderPresetPatch as _0x3ab433,
  buildSlideTableBorderStylePatch as _0x1c5b81,
  buildSlideTableClearTextPatch as _0x1fd1fe,
  buildSlideTableContextMenuCommand as _0x2c4ec6,
  buildSlideTableDeleteToolbarCommand as _0x43d6dd,
  buildSlideTableFontFamilyPatch as _0x5ad22b,
  buildSlideTableFontSizePatch as _0x1655d1,
  buildSlideTableInsertDotControlState as _0x5292d2,
  buildSlideTableKeyboardShortcutBindings as _0x2fa3a6,
  buildSlideTableMergeToolbarCommand as _0x4c1357,
  buildSlideTablePasteHtmlPatch as _0x1fa06e,
  buildSlideTablePasteTextPatch as _0x257e39,
  buildSlideTableTextAlignPatch as _0xa3d479,
  buildSlideTableTextColorPatch as _0x2789f9,
  buildSlideTableTextFillPatch as _0x303409,
  buildSlideTableTextStylePatch as _0x3ad2db,
  ensureOption as _0x5c6336,
  getSlideTableFillPreviewStyle as _0x217368,
  getSlideTableFillType as _0x3aa94f,
  getSlideTableGradientValue as _0x37419f,
  getSlideTableSelectionContext as _0x1a0758,
  gradientValueToSlideTableFill as _0x51d8e5,
  isSlideTableDocumentEditorTarget as _0x257162,
  isSlideTableEditableTarget as _0x463eac,
  isSlideTableInsertDotTrigger as _0x2b7332,
  normalizeSlideTableCellDocumentData as _0x16e31d,
  replaceSlideTableCellDocumentText as _0x33e2ab,
  resolveFirstSlideTableSelectionCell as _0xc2ed85,
  resolveNextSlideTableKeyboardCell as _0xd14eb7,
  resolveSlideTableCellEditorLayout as _0x778a5f,
  resolveSlideTableCellEditorTarget as _0x325f13,
  resolveSlideTableContextMenuActions as _0x811db5,
  resolveSlideTableDocumentHorizontalAlign as _0xb2481,
  resolveSlideTableKeyboardMovement as _0x59151e,
  resolveSlideTableMergeToolbarAction as _0x2ceb9c,
  resolveSlideTableObjectSelection as _0x2e06f0,
  resolveSlideTableSelectionValues as _0x3ac68e,
  resolveSlideTableToolbarActions as _0x18cca9,
  serializeSlideTableCellStyleAttribute as _0x24b702,
  serializeSlideTableSelectionToHtml as _0x4bdcb3,
  serializeSlideTableSelectionToText as _0x583bd2,
  toCoreVerticalAlign as _0x2e243e,
} from "@univerjs-pro/slides-table-ui";
import {
  EditorUIService as _0x5af965,
  IEditorUIService as _0x43818d,
  UniverSlidesUIPlugin as _0x36fdfe,
  stripEditorUIDocumentData as _0x555c6f,
} from "@univerjs-pro/slides-ui";
import {
  BooleanNumber as _0x21bbc4,
  CommandType as _0x3677a1,
  DependentOn as _0x18cca3,
  Disposable as _0xdc142c,
  DisposableCollection as _0x59e9e2,
  HorizontalAlign as _0x3be47e,
  ICommandService as _0x2014c6,
  IConfigService as _0x14eecd,
  IContextService as _0x104e63,
  IImageIoService as _0x311bb3,
  IPermissionService as _0x572f42,
  IUniverInstanceService as _0x498479,
  Inject as _0xe67e5f,
  Injector as _0xa0968,
  LocaleService as _0x534bdd,
  Plugin as _0x1abc02,
  RxDisposable as _0x482797,
  ThemeService as _0x55d498,
  Tools as _0x14f5d5,
  UniverInstanceType as _0x26c2da,
  VerticalAlign as _0x2e4792,
  generateRandomId as _0x463bd1,
  merge as _0x4d986a,
  toDisposable as _0x192ad5,
  touchDependencies as _0x2a6a0d,
} from "@univerjs/core";
import {
  CURSOR_TYPE as _0x267310,
  IRenderManagerService as _0x55c9b0,
  UniverRenderEnginePlugin as _0x43d2c0,
  Vector2 as _0x7da94b,
} from "@univerjs/engine-render";
import {
  ComponentManager as _0x3503d9,
  ContextMenuGroup as _0x5d8107,
  FONT_SIZE_LIST as _0x4a175c,
  FontFamilyDropdown as _0x240022,
  IContextMenuService as _0xe0190f,
  ILayoutService as _0x386020,
  IMenuManagerService as _0x14fb30,
  IShortcutService as _0x51fdbb,
  KeyCode as _0x235e47,
  MenuItemType as _0x348e6d,
  MenuManagerPosition as _0x44576c,
  MetaKeys as _0x5738cc,
  useDependency as _0x25c300,
  useObservable as _0x48d232,
} from "@univerjs/ui";
import {
  FillStyleTabsEditor as _0xff55ee,
  keepFloatingToolbarPanelInteraction as _0x1b814e,
} from "@univerjs-pro/shape-editor-ui";
import {
  Button as _0x2d9c95,
  ColorPicker as _0x2e721e,
  Dropdown as _0x94a256,
  InputNumber as _0x508197,
  Select as _0x3a5cd0,
  Separator as _0x41bda1,
  Tooltip as _0x4fae4b,
  borderClassName as _0x296a28,
  clsx as _0x1eb20a,
} from "@univerjs/design";
import {
  AlignBottomIcon as _0x1260ae,
  AlignTextBothIcon as _0x1b237a,
  AlignTopIcon as _0x459d45,
  AllBorderIcon as _0x40a5a0,
  BoldIcon as _0x47318f,
  CancelMergeIcon as _0x1d1d53,
  DeleteIcon as _0x44d476,
  DownBorderDoubleIcon as _0x333796,
  FontColorDoubleIcon as _0x2e73d2,
  HorizontalBorderDoubleIcon as _0x35e433,
  HorizontallyIcon as _0x3bdd54,
  InnerBorderDoubleIcon as _0xb4b338,
  ItalicIcon as _0x5903ef,
  LeftBorderDoubleIcon as _0x5aa457,
  LeftJustifyingIcon as _0x44ba6b,
  MergeAllIcon as _0x9296b6,
  MoreDownIcon as _0x325ed1,
  NoBorderIcon as _0x183b1a,
  OuterBorderDoubleIcon as _0x55f75d,
  PaintBucketDoubleIcon as _0x201724,
  PaintIcon as _0x5a922a,
  RightBorderDoubleIcon as _0x5a8186,
  RightJustifyingIcon as _0x294aa5,
  ShapeBackgroundColorDoubleIcon as _0x2d7af1,
  StrikethroughIcon as _0x5853f1,
  TextIcon as _0x30e8ff,
  UnderlineIcon as _0x1dabd9,
  UpBorderDoubleIcon as _0x21d3b6,
  VerticalBorderDoubleIcon as _0x499e41,
  VerticalCenterIcon as _0x3445f7,
} from "@univerjs/icons";
import {
  useCallback as _0x356ae7,
  useMemo as _0x556c3a,
  useRef as _0x5767e6,
  useState as _0x370d7b,
} from "react";
import { getImageSize as _0x50e2d5 } from "@univerjs/drawing";
import {
  Fragment as _0x199b72,
  jsx as _0x2a4e26,
  jsxs as _0x45f717,
} from "react/jsx-runtime";
import {
  extractClipboardHtmlImageFiles as _0x1f81d8,
  extractClipboardImageFiles as _0x37dfdf,
  extractClipboardTextImageFile as _0x4ae759,
  isClipboardTextImage as _0x437ef2,
  normalizeClipboardImageFile as _0xb0bb5c,
} from "@univerjs/drawing-ui";
import { UnitAction as _0x1c5620 } from "@univerjs/protocol";
import {
  convertPlainTextTableToHtml as _0x931ccb,
  parseHtmlTableClipboard as _0x50fb60,
} from "@univerjs-pro/docs-table";
import {
  convertBodyToHtml as _0x2d5b4f,
  convertClipboardHtmlToDocumentData as _0x2f7c41,
  removeClipboardHtmlImages as _0x603996,
} from "@univerjs/docs-ui";
var pr = "@univerjs-pro/boards-table-ui",
  mr = "1.0.0-insiders.20260907-70fc579";
const hr = {
  insertRows: _0x4c4da9.id,
  insertColumns: _0x14054a.id,
  deleteRows: _0xd7d539.id,
  deleteColumns: _0x2a96b7.id,
  mergeCells: _0x292149.id,
  unmergeCells: _0x49c94f.id,
  updateTable: _0x278de5.id,
};
function gr(_0xe2cbbd, _0x1d9eed) {
  return _0x811db5(_0xe2cbbd, _0x1d9eed, hr);
}
function _r(_0x1271b2, _0x3ce05e, _0x3acbe2) {
  return _0x2c4ec6(_0x1271b2, _0x3ce05e, _0x3acbe2, hr);
}
const vr = K(
    "board-table.operation.insert-row-above",
    _0x55df2e.InsertRowAbove,
  ),
  yr = K("board-table.operation.insert-row-below", _0x55df2e.InsertRowBelow),
  br = K(
    "board-table.operation.insert-column-left",
    _0x55df2e.InsertColumnLeft,
  ),
  xr = K(
    "board-table.operation.insert-column-right",
    _0x55df2e.InsertColumnRight,
  ),
  Sr = K("board-table.operation.delete-rows", _0x55df2e.DeleteRows),
  Cr = K("board-table.operation.delete-columns", _0x55df2e.DeleteColumns),
  wr = K("board-table.operation.merge-cells", _0x55df2e.MergeCells),
  Tr = K("board-table.operation.unmerge-cells", _0x55df2e.UnmergeCells),
  Er = K("board-table.operation.distribute-rows", _0x55df2e.DistributeRows),
  Dr = K(
    "board-table.operation.distribute-columns",
    _0x55df2e.DistributeColumns,
  ),
  Or = [
    { title: "boards-table-ui.contextMenu.resetColor" },
    { title: "white", color: "white" },
    { title: "gray.100", color: "gray.100" },
    { title: "primary.100", color: "primary.100" },
    { title: "blue.100", color: "blue.100" },
    { title: "green.100", color: "green.100" },
    { title: "yellow.100", color: "yellow.100" },
    { title: "red.100", color: "red.100" },
  ],
  kr = [
    { title: "boards-table-ui.contextMenu.resetColor" },
    { title: "gray.900", color: "gray.900" },
    { title: "gray.500", color: "gray.500" },
    { title: "red.600", color: "red.600" },
    { title: "orange.600", color: "orange.600" },
    { title: "yellow.700", color: "yellow.700" },
    { title: "green.600", color: "green.600" },
    { title: "blue.600", color: "blue.600" },
    { title: "purple.600", color: "purple.600" },
  ],
  Ar = Jr("board-table.operation.border-all", _0xc6680a.All),
  jr = Jr("board-table.operation.border-outer", _0xc6680a.Outer),
  Mr = Jr("board-table.operation.border-inner", _0xc6680a.Inner),
  Nr = Jr("board-table.operation.border-none", _0xc6680a.None),
  Pr = Yr("board-table.operation.align-left", {
    axis: "horizontal",
    value: _0x3be47e.LEFT,
  }),
  Fr = Yr("board-table.operation.align-center", {
    axis: "horizontal",
    value: _0x3be47e.CENTER,
  }),
  Ir = Yr("board-table.operation.align-right", {
    axis: "horizontal",
    value: _0x3be47e.RIGHT,
  }),
  Lr = Yr("board-table.operation.align-top", {
    axis: "vertical",
    value: _0x2e4792.TOP,
  }),
  Rr = Yr("board-table.operation.align-middle", {
    axis: "vertical",
    value: _0x2e4792.MIDDLE,
  }),
  zr = Yr("board-table.operation.align-bottom", {
    axis: "vertical",
    value: _0x2e4792.BOTTOM,
  }),
  Br = Or.map((_0x2c9061, _0x34d564) =>
    Xr("board-table.operation.background-color-" + _0x34d564, _0x2c9061),
  ),
  Vr = kr.map((_0x239d0d, _0x10489d) =>
    Zr("board-table.operation.text-color-" + _0x10489d, _0x239d0d),
  ),
  Hr = qr("board-table.operation.copy-table", _0x3f0923.id),
  Ur = qr("board-table.operation.cut-table", _0x76b8e2.id),
  Wr = {
    id: "board-table.operation.delete-table",
    type: _0x3677a1.OPERATION,
    async handler(_0xf7f661) {
      let _0x160a52 = _0xf7f661.get(_0x2ff9b6),
        _0x1cf99b = _0x160a52.getSelection();
      if (!_0x1cf99b)
        return _0xf7f661.get(_0x2014c6).executeCommand(_0x10df55.id);
      let _0x39a599 = await _0xf7f661
        .get(_0x2014c6)
        .executeCommand(_0x29aec8.id, {
          unitId: _0x1cf99b.unitId,
          subUnitId: _0x1cf99b.subUnitId,
          elementIds: [_0x1cf99b.elementId],
        });
      return (_0x39a599 && _0x160a52.clear(), _0x39a599);
    },
  },
  Gr = [
    vr,
    yr,
    br,
    xr,
    Sr,
    Cr,
    wr,
    Tr,
    Er,
    Dr,
    Hr,
    Ur,
    Wr,
    Ar,
    jr,
    Mr,
    Nr,
    Pr,
    Fr,
    Ir,
    Lr,
    Rr,
    zr,
    ...Br,
    ...Vr,
  ];
function Kr(_0x42cf62, _0x24b973) {
  var _0x599c64;
  let _0x3159bf = ti(_0x42cf62);
  return _0x3159bf
    ? (((_0x599c64 = gr(_0x3159bf.table, _0x3159bf.selection).find(
        (_0x546de0) => _0x546de0.id === _0x24b973,
      )) == null
        ? undefined
        : _0x599c64.enabled) ?? false)
    : false;
}
function K(_0x3bbb2e, _0xba4dc2) {
  return {
    id: _0x3bbb2e,
    type: _0x3677a1.OPERATION,
    handler(_0x40301, _0x42df72) {
      let _0x2fc9f0 = ti(
        _0x40301,
        _0x42df72 == null ? undefined : _0x42df72.selection,
      );
      if (!_0x2fc9f0) return false;
      let _0x471bdb = _r(_0x2fc9f0.table, _0x2fc9f0.selection, _0xba4dc2);
      return _0x471bdb
        ? _0x40301
            .get(_0x2014c6)
            .executeCommand(_0x471bdb.commandId, _0x471bdb.params)
        : false;
    },
  };
}
function qr(_0x5418e7, _0x1ad859) {
  return {
    id: _0x5418e7,
    type: _0x3677a1.OPERATION,
    handler(_0x2565e9) {
      return _0x2565e9.get(_0x2014c6).executeCommand(_0x1ad859);
    },
  };
}
function Jr(_0x41fc4b, _0x4ff2c1) {
  return Qr(_0x41fc4b, (_0x102bbc, _0x4c2ca1) =>
    _0x3ab433(_0x102bbc, _0x4c2ca1, _0x4ff2c1),
  );
}
function Yr(_0x4d0095, _0x2aa6c3) {
  return Qr(_0x4d0095, (_0x3e0bf3, _0x470a41) =>
    _0xa3d479(_0x3e0bf3, _0x470a41, _0x2aa6c3),
  );
}
function Xr(_0x31f39a, _0x139d95) {
  return {
    ...Qr(_0x31f39a, (_0x1e6d79, _0x4c97c3, _0x428e85) =>
      _0x50a109(_0x1e6d79, _0x4c97c3, $r(_0x428e85, _0x139d95.color)),
    ),
    title: _0x139d95.title,
  };
}
function Zr(_0x19b3fc, _0x136fd9) {
  return {
    ...Qr(_0x19b3fc, (_0x6bf112, _0x2c45cd, _0x30eb79) =>
      _0x2789f9(_0x6bf112, _0x2c45cd, $r(_0x30eb79, _0x136fd9.color)),
    ),
    title: _0x136fd9.title,
  };
}
function Qr(_0x1cdf94, _0x10f331) {
  return {
    id: _0x1cdf94,
    type: _0x3677a1.OPERATION,
    handler(_0x37e9e6) {
      let _0x2d0add = ei(_0x37e9e6);
      return _0x2d0add
        ? _0x37e9e6
            .get(_0x2014c6)
            .executeCommand(_0x278de5.id, {
              unitId: _0x2d0add.unitId,
              tableId: _0x2d0add.tableId,
              patch: _0x10f331(_0x2d0add.table, _0x2d0add.range, _0x37e9e6),
            })
        : false;
    },
  };
}
function $r(_0x27aafa, _0x51b4f6) {
  if (!_0x51b4f6) return;
  let _0x5b8953 = _0x27aafa.get(_0x55d498);
  return _0x5b8953.isValidThemeColor(_0x51b4f6)
    ? _0x5b8953.getColorFromTheme(_0x51b4f6)
    : _0x51b4f6;
}
function ei(_0xfe8209) {
  let _0x4184d2 = _0x1a0758(_0xfe8209.get(_0x2ff9b6).getSelection());
  if (!_0x4184d2) return null;
  let _0x4b23ec = _0xfe8209
    .get(_0x2ab092)
    .getTable(_0x4184d2.unitId, _0x4184d2.tableId);
  return _0x4b23ec ? { ..._0x4184d2, table: _0x4b23ec } : null;
}
function ti(_0x164af0, _0x50e4d3) {
  let _0x23874b = _0x50e4d3 ?? _0x164af0.get(_0x2ff9b6).getSelection(),
    _0x47b08a = _0x23874b == null ? undefined : _0x23874b.ranges[0];
  return !_0x23874b || !_0x47b08a
    ? null
    : {
        selection: _0x23874b,
        table: _0x164af0
          .get(_0x2ab092)
          .getTable(_0x23874b.unitId, _0x23874b.tableId),
      };
}
function q(_0x570882, _0x1830bc) {
  return function (_0xe545ac, _0xd43cd4) {
    _0x1830bc(_0xe545ac, _0xd43cd4, _0x570882);
  };
}
function ni(_0x178fde, _0x3f4c97, _0x3ce407, _0x585f7b) {
  var _0xab298a = arguments.length,
    _0x4b8a4f =
      _0xab298a < 3
        ? _0x3f4c97
        : _0x585f7b === null
          ? (_0x585f7b = Object.getOwnPropertyDescriptor(_0x3f4c97, _0x3ce407))
          : _0x585f7b,
    _0x584140;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x4b8a4f = Reflect.decorate(_0x178fde, _0x3f4c97, _0x3ce407, _0x585f7b);
  else {
    for (var _0x4d8bbc = _0x178fde.length - 1; _0x4d8bbc >= 0; _0x4d8bbc--)
      (_0x584140 = _0x178fde[_0x4d8bbc]) &&
        (_0x4b8a4f =
          (_0xab298a < 3
            ? _0x584140(_0x4b8a4f)
            : _0xab298a > 3
              ? _0x584140(_0x3f4c97, _0x3ce407, _0x4b8a4f)
              : _0x584140(_0x3f4c97, _0x3ce407)) || _0x4b8a4f);
  }
  return (
    _0xab298a > 3 &&
      _0x4b8a4f &&
      Object.defineProperty(_0x3f4c97, _0x3ce407, _0x4b8a4f),
    _0x4b8a4f
  );
}
const ri = "FOCUSING_BOARD_TABLE";
let ii = class extends _0x5008ad {
  constructor(_0x5e8692) {
    (super(), (this._contextService = _0x5e8692));
  }
  setFocused(_0x1111a6) {
    this._contextService["setContextValue"](ri, _0x1111a6);
  }
  canHandleNativeInput(_0x5ea22b, _0x205100) {
    return this._contextService["getContextValue"]("FOCUSING_BOARD_TABLE")
      ? _0x205100 != null &&
        _0x205100.allowDocsEditor &&
        _0x257162(_0x5ea22b.target)
        ? true
        : !_0x463eac(_0x5ea22b.target)
      : false;
  }
};
ii = ni([q(0, _0x104e63)], ii);
let ai = class extends _0xdc142c {
  constructor(_0x142c39, _0x59e660) {
    (super(),
      (this.renderContext = _0x142c39),
      (this.keyboardService = _0x59e660));
  }
};
ai = ni([q(1, _0xe67e5f(ii))], ai);
const oi = {
  id: "board-table.operation.keyboard",
  type: _0x3677a1.OPERATION,
  handler: (_0x270cc7, _0x581599, _0x25805b) => {
    if (!(_0x581599 != null && _0x581599.action)) return false;
    let _0x3a07e0 = si(_0x270cc7, _0x25805b);
    return (
      (_0x3a07e0 == null
        ? undefined
        : _0x3a07e0.keyboardService["handle"](_0x581599.action)) ?? false
    );
  },
};
function si(_0x49bebd, _0x5eac65) {
  var _0x31ff29, _0x1d95aa;
  let _0x4e814b =
    typeof (_0x5eac65 == null ? undefined : _0x5eac65.unitId) == "string"
      ? _0x5eac65.unitId
      : (_0x31ff29 = _0x49bebd
            .get(_0x498479)
            .getCurrentUnitOfType(_0x26c2da.UNIVER_BOARD)) == null
        ? undefined
        : _0x31ff29.getUnitId();
  return _0x4e814b
    ? (((_0x1d95aa = _0x49bebd.get(_0x55c9b0).getRenderUnitById(_0x4e814b)) ==
      null
        ? undefined
        : _0x1d95aa.with(ai)) ?? null)
    : null;
}
const ci = [oi],
  li = _0x2fa3a6({
    "arrow-left": _0x235e47.ARROW_LEFT,
    "arrow-right": _0x235e47.ARROW_RIGHT,
    "arrow-up": _0x235e47.ARROW_UP,
    "arrow-down": _0x235e47.ARROW_DOWN,
    "shift-arrow-left": _0x235e47.ARROW_LEFT | _0x5738cc.SHIFT,
    "shift-arrow-right": _0x235e47.ARROW_RIGHT | _0x5738cc.SHIFT,
    "shift-arrow-up": _0x235e47.ARROW_UP | _0x5738cc.SHIFT,
    "shift-arrow-down": _0x235e47.ARROW_DOWN | _0x5738cc.SHIFT,
    tab: _0x235e47.TAB,
    "shift-tab": _0x235e47.TAB | _0x5738cc.SHIFT,
    enter: _0x235e47.ENTER,
    f2: _0x235e47.F2,
    delete: _0x235e47.DELETE,
    backspace: _0x235e47.BACKSPACE,
  }).map(({ binding: _0x3c852a, action: _0x224507 }) =>
    ui(_0x3c852a, _0x224507),
  );
function ui(_0x476159, _0x1a031d) {
  return {
    id: oi.id,
    binding: _0x476159,
    priority: 130,
    preconditions: di,
    staticParameters: { action: _0x1a031d },
  };
}
function di(_0x3c225b) {
  return !!_0x3c225b.getContextValue(ri);
}
const fi = {};
function pi(_0x23b234) {
  return _0x18cca9(_0x23b234, {
    mergeCells: _0x292149.id,
    unmergeCells: _0x49c94f.id,
    setCellStyle: _0x2ae50c.id,
    setBorderPreset: _0x305b49.id,
  });
}
function mi(_0x2ed2a2, _0x1715c7) {
  return {
    actions: pi(_0x1715c7),
    mergeState: _0x2ceb9c(_0x2ed2a2, _0x1715c7),
    values: _0x3ac68e(
      _0x2ed2a2,
      _0x1715c7 == null ? undefined : _0x1715c7.ranges[0],
    ),
  };
}
function hi(_0x3a6ae5, _0x16ba34) {
  return _0x3a6ae5 &&
    (_0x16ba34 == null ? undefined : _0x16ba34.action) === "unmerge"
    ? {
        commandId: _0x49c94f.id,
        params: {
          unitId: _0x3a6ae5.unitId,
          tableId: _0x3a6ae5.tableId,
          row: _0x16ba34.range["startRow"],
          column: _0x16ba34.range["startColumn"],
        },
      }
    : _0x4c1357(_0x3a6ae5, _0x16ba34, {
        mergeCells: _0x292149.id,
        unmergeCells: _0x49c94f.id,
      });
}
function gi(_0xef984d, _0x283583) {
  return _0x43d6dd(_0xef984d, _0x283583, {
    deleteRows: _0xd7d539.id,
    deleteColumns: _0x2a96b7.id,
  });
}
const _i = _0x4a175c.map((_0x3254ec) => ({
    label: _0x3254ec.label,
    value: String(_0x3254ec.value),
  })),
  vi =
    "\n univer-flex univer-h-6 univer-min-w-9 univer-items-center univer-justify-center univer-gap-1\n univer-rounded-md univer-border-none univer-bg-transparent univer-px-1.5 univer-text-sm\n univer-text-gray-700 univer-transition-colors\n hover:univer-bg-gray-100\n dark:!univer-text-gray-100\n dark:hover:!univer-bg-gray-700\n",
  yi =
    "univer-bg-gray-100 univer-text-primary-600 dark:!univer-bg-gray-700 dark:!univer-text-primary-300",
  bi = [0, 1, 2, 3, 4, 6],
  xi = [
    {
      labelKey: "boards-table-ui.editorToolbar.borderStyleSolid",
      value: _0x204d64.Solid,
    },
    {
      labelKey: "boards-table-ui.editorToolbar.borderStyleDash",
      value: _0x204d64.Dash,
    },
    {
      labelKey: "boards-table-ui.editorToolbar.borderStyleDot",
      value: _0x204d64.Dot,
    },
    {
      labelKey: "boards-table-ui.editorToolbar.borderStyleDashDot",
      value: _0x204d64.DashDot,
    },
    {
      labelKey: "boards-table-ui.editorToolbar.noBorder",
      value: _0x204d64.None,
    },
  ],
  Si = [
    {
      labelKey: "boards-table-ui.editorToolbar.borderPresetAll",
      preset: _0xc6680a.All,
    },
    {
      labelKey: "boards-table-ui.editorToolbar.borderPresetInner",
      preset: _0xc6680a.Inner,
    },
    {
      labelKey: "boards-table-ui.editorToolbar.borderPresetOuter",
      preset: _0xc6680a.Outer,
    },
    {
      labelKey: "boards-table-ui.editorToolbar.borderPresetTop",
      preset: _0xc6680a.Top,
    },
    {
      labelKey: "boards-table-ui.editorToolbar.borderPresetBottom",
      preset: _0xc6680a.Bottom,
    },
    {
      labelKey: "boards-table-ui.editorToolbar.borderPresetLeft",
      preset: _0xc6680a.Left,
    },
    {
      labelKey: "boards-table-ui.editorToolbar.borderPresetRight",
      preset: _0xc6680a.Right,
    },
    {
      labelKey: "boards-table-ui.editorToolbar.borderPresetInnerHorizontal",
      preset: _0xc6680a.InnerHorizontal,
    },
    {
      labelKey: "boards-table-ui.editorToolbar.borderPresetInnerVertical",
      preset: _0xc6680a.InnerVertical,
    },
    {
      labelKey: "boards-table-ui.editorToolbar.noBorder",
      preset: _0xc6680a.None,
    },
  ],
  Ci = {
    [_0xc6680a.All]: _0x40a5a0,
    [_0xc6680a.Inner]: _0xb4b338,
    [_0xc6680a.Outer]: _0x55f75d,
    [_0xc6680a.Top]: _0x21d3b6,
    [_0xc6680a.Bottom]: _0x333796,
    [_0xc6680a.Left]: _0x5aa457,
    [_0xc6680a.Right]: _0x5a8186,
    [_0xc6680a.InnerHorizontal]: _0x35e433,
    [_0xc6680a.InnerVertical]: _0x499e41,
    [_0xc6680a.None]: _0x183b1a,
  },
  wi = { colorChannel1: "#9ca3af" },
  Ti =
    "\x0a\x20\x20\x20\x20univer-rounded-lg\x20univer-bg-gray-0\x20univer-shadow-lg\x20dark:!univer-bg-gray-900\x0a";
function Ei(_0x5420a5) {
  let _0x23618d = _0x25c300(_0x534bdd);
  return _0x2a4e26(_0x182e0f, {
    onOpenChange: _0x5420a5.onOpenChange,
    children: ({
      handleOpenChange: _0x196a3f,
      markInternalInteraction: _0x989912,
    }) =>
      _0x2a4e26(_0x94a256, {
        open: _0x5420a5.open,
        onOpenChange: _0x196a3f,
        overlay: _0x2a4e26("section", {
          className: _0x1eb20a(Ti, _0x296a28),
          "data-u-comp": "board-table-floating-toolbar-popup",
          onMouseDown: (_0x3b91d2) => {
            (_0x989912(), _0x1b814e(_0x3b91d2));
          },
          onPointerDown: (_0x4c26d9) => {
            (_0x989912(), _0x1b814e(_0x4c26d9));
          },
          children: _0x5420a5.children,
        }),
        children: _0x2a4e26("span", {
          children: _0x2a4e26(_0x4fae4b, {
            title: _0x23618d.t("boards-table-ui.editorToolbar.tableTheme"),
            placement: "bottom",
            children: _0x45f717(_0x2d9c95, {
              size: "small",
              variant: "ghost",
              "data-toolbar-item": "table-theme",
              "aria-expanded": _0x5420a5.open,
              "aria-label": _0x23618d.t(
                "boards-table-ui.editorToolbar.tableTheme",
              ),
              title: _0x23618d.t("boards-table-ui.editorToolbar.tableTheme"),
              onMouseDown: _0x1b814e,
              onPointerDown: _0x1b814e,
              className: _0x1eb20a(vi, { [yi]: _0x5420a5.open }),
              children: [
                _0x2a4e26(_0x5a922a, {}),
                _0x2a4e26(_0x325ed1, { className: "univer-text-xs" }),
              ],
            }),
          }),
        }),
      }),
  });
}
function Di(_0x5de185) {
  return _0x2a4e26("div", {
    className:
      "univer-flex univer-h-7 univer-flex-nowrap univer-items-center univer-gap-1 univer-px-1",
    children: _0x5de185.children,
  });
}
function Oi(_0x341768) {
  return _0x2a4e26(_0x4fae4b, {
    title: _0x341768.title,
    placement: "bottom",
    children: _0x2a4e26("span", {
      children: _0x2a4e26(_0x2d9c95, {
        size: "small",
        variant: "ghost",
        "data-toolbar-item": _0x341768["data-toolbar-item"],
        "aria-label": _0x341768.title,
        title: _0x341768.title,
        className:
          "univer-flex\x20univer-size-7\x20univer-items-center\x20univer-justify-center\x20univer-rounded-md\x20univer-border-none\x20univer-bg-transparent\x20univer-p-0\x20univer-text-gray-700\x20univer-transition-colors\x20hover:univer-bg-gray-100\x20dark:!univer-text-gray-100\x20dark:hover:!univer-bg-gray-700",
        onClick: (_0x3a92d2) => {
          (_0x3a92d2.preventDefault(), _0x341768.onClick());
        },
        onMouseDown: _0x1b814e,
        onPointerDown: _0x1b814e,
        children: _0x341768.children,
      }),
    }),
  });
}
function ki(_0x1a7f52) {
  let [_0x4be401, _0x321b48] = _0x370d7b(false),
    _0x506e80 = _0x1a7f52.open ?? _0x4be401;
  return _0x2a4e26(_0x182e0f, {
    onOpenChange: _0x1a7f52.onOpenChange ?? _0x321b48,
    children: ({
      handleOpenChange: _0x1195d8,
      markInternalInteraction: _0x190236,
    }) =>
      _0x2a4e26(_0x94a256, {
        open: _0x506e80,
        onOpenChange: _0x1195d8,
        overlay: _0x2a4e26("div", {
          className: _0x1eb20a(Ti, "univer-p-3", _0x296a28),
          "data-u-comp": "board-table-floating-toolbar-popup",
          onMouseDown: (_0x2c4829) => {
            (_0x190236(), _0x1b814e(_0x2c4829));
          },
          onPointerDown: (_0x385dbc) => {
            (_0x190236(), _0x1b814e(_0x385dbc));
          },
          children: _0x2a4e26(_0x2e721e, {
            value: _0x1a7f52.color,
            onChange: _0x1a7f52.onChange,
          }),
        }),
        children: _0x2a4e26("span", {
          children: _0x2a4e26(_0x4fae4b, {
            title: _0x1a7f52.title,
            placement: "bottom",
            children: _0x45f717(_0x2d9c95, {
              size: "small",
              variant: "ghost",
              "data-toolbar-item": _0x1a7f52["data-toolbar-item"],
              "aria-expanded": _0x506e80,
              "aria-label": _0x1a7f52.title,
              className: _0x1eb20a(vi, { [yi]: _0x506e80 }),
              onMouseDown: _0x1b814e,
              onPointerDown: _0x1b814e,
              children: [
                _0x1a7f52.children,
                _0x2a4e26("span", {
                  className:
                    "univer-h-3\x20univer-w-3\x20univer-rounded-sm\x20univer-border\x20univer-border-solid\x20univer-border-gray-300\x20dark:!univer-border-gray-600",
                  style: { backgroundColor: _0x1a7f52.color },
                }),
                _0x2a4e26(_0x325ed1, { className: "univer-text-xs" }),
              ],
            }),
          }),
        }),
      }),
  });
}
function Ai(_0x3c484c) {
  return _0x2a4e26(_0x182e0f, {
    onOpenChange: _0x3c484c.onOpenChange,
    children: ({
      handleOpenChange: _0x2a93b2,
      markInternalInteraction: _0x3dcc30,
    }) =>
      _0x2a4e26(_0x94a256, {
        open: _0x3c484c.open,
        onOpenChange: _0x2a93b2,
        overlay: _0x2a4e26("div", {
          className: _0x1eb20a(Ti, "univer-p-3", _0x296a28),
          "data-u-comp": "board-table-floating-toolbar-popup",
          onMouseDown: (_0x308200) => {
            (_0x3dcc30(), _0x1b814e(_0x308200));
          },
          onPointerDown: (_0x547935) => {
            (_0x3dcc30(), _0x1b814e(_0x547935));
          },
          children: _0x2a4e26(_0x2e721e, {
            value: _0x3c484c.color,
            onChange: _0x3c484c.onChange,
          }),
        }),
        children: _0x2a4e26("span", {
          children: _0x2a4e26(_0x4fae4b, {
            title: _0x3c484c.title,
            placement: "bottom",
            children: _0x45f717(_0x2d9c95, {
              size: "small",
              variant: "ghost",
              "data-toolbar-item": _0x3c484c["data-toolbar-item"],
              "aria-expanded": _0x3c484c.open,
              "aria-label": _0x3c484c.title,
              className: _0x1eb20a(vi, { [yi]: _0x3c484c.open }),
              onMouseDown: _0x1b814e,
              onPointerDown: _0x1b814e,
              children: [
                _0x3c484c.icon === "font"
                  ? _0x2a4e26(_0x2e73d2, {
                      className: "univer-fill-primary-600",
                      extend: { colorChannel1: _0x3c484c.color },
                    })
                  : _0x2a4e26(_0x201724, {
                      className: "univer-fill-primary-600",
                      extend: { colorChannel1: _0x3c484c.color },
                    }),
                _0x2a4e26(_0x325ed1, { className: "univer-text-xs" }),
              ],
            }),
          }),
        }),
      }),
  });
}
function ji(_0x5c8ce9) {
  let _0x117cc0 = _0x25c300(_0x534bdd),
    _0x2cb0a9 =
      xi.find((_0x277048) => _0x277048.value === _0x5c8ce9.dash) ?? xi[0];
  return _0x2a4e26(_0x182e0f, {
    onOpenChange: _0x5c8ce9.onOpenChange,
    children: ({
      handleOpenChange: _0x46efc8,
      markInternalInteraction: _0x464b70,
    }) =>
      _0x2a4e26(_0x94a256, {
        open: _0x5c8ce9.open,
        onOpenChange: _0x46efc8,
        overlay: _0x45f717("section", {
          className: _0x1eb20a(
            Ti,
            "univer-grid\x20univer-gap-2\x20univer-p-2",
            _0x296a28,
          ),
          "data-u-comp": "board-table-floating-toolbar-popup",
          onMouseDown: (_0x594da5) => {
            (_0x464b70(), _0x1b814e(_0x594da5));
          },
          onPointerDown: (_0x5ec0fa) => {
            (_0x464b70(), _0x1b814e(_0x5ec0fa));
          },
          children: [
            _0x2a4e26("div", {
              className: "univer-grid univer-grid-cols-5 univer-gap-1",
              children: _0x5c8ce9.presets["map"](
                ({ labelKey: _0x14bca1, preset: _0x18e686 }) => {
                  let _0x217ca9 = Ci[_0x18e686];
                  return _0x2a4e26(
                    _0x4fae4b,
                    {
                      title: _0x117cc0.t(_0x14bca1),
                      placement: "bottom",
                      children: _0x2a4e26(_0x2d9c95, {
                        size: "small",
                        variant: "ghost",
                        "aria-label": _0x117cc0.t(_0x14bca1),
                        className:
                          "univer-flex univer-size-7 univer-items-center univer-justify-center univer-rounded univer-border-none univer-bg-transparent univer-p-0 univer-text-primary-600 hover:univer-bg-gray-100 dark:hover:!univer-bg-gray-800",
                        onClick: () => {
                          (_0x5c8ce9.onSelectPreset(_0x18e686),
                            _0x5c8ce9.onOpenChange(false));
                        },
                        onMouseDown: _0x1b814e,
                        onPointerDown: _0x1b814e,
                        children: _0x2a4e26(_0x217ca9, {
                          className: "univer-size-4 univer-text-current",
                          extend: wi,
                        }),
                      }),
                    },
                    _0x18e686,
                  );
                },
              ),
            }),
            _0x2a4e26(_0x41bda1, {}),
            _0x45f717("div", {
              className: "univer-flex univer-items-center univer-gap-2",
              children: [
                _0x2a4e26(ki, {
                  "data-toolbar-item": "border-color",
                  title: _0x117cc0.t(
                    "boards-table-ui.editorToolbar.tableBorderColor",
                  ),
                  color: _0x5c8ce9.color,
                  onChange: _0x5c8ce9.onChangeColor,
                  children: _0x2a4e26(_0x201724, {
                    extend: { colorChannel1: _0x5c8ce9.color },
                  }),
                }),
                _0x2a4e26(Mi, {
                  title: _0x117cc0.t(
                    "boards-table-ui.editorToolbar.borderWidth",
                  ),
                  value: String(_0x5c8ce9.width),
                  options: bi.map((_0x225a4b) => ({
                    label:
                      _0x225a4b === 0
                        ? _0x117cc0.t("boards-table-ui.editorToolbar.noBorder")
                        : _0x225a4b + "px",
                    value: String(_0x225a4b),
                    icon: _0x2a4e26("span", {
                      className:
                        "univer-block univer-w-5 univer-rounded-full univer-bg-current",
                      style: { height: Math.max(1, _0x225a4b || 1) },
                    }),
                  })),
                  onChange: (_0x8fc1eb) =>
                    _0x5c8ce9.onChangeWidth(Number(_0x8fc1eb)),
                  children: _0x45f717("span", {
                    className: "univer-text-xs",
                    children: [_0x5c8ce9.width, "px"],
                  }),
                }),
                _0x2a4e26(Mi, {
                  title: _0x117cc0.t(
                    "boards-table-ui.editorToolbar.borderStyle",
                  ),
                  value: _0x5c8ce9.dash,
                  options: xi.map((_0x3b9e43) => ({
                    label: _0x117cc0.t(_0x3b9e43.labelKey),
                    value: _0x3b9e43.value,
                    icon: _0x2a4e26(Ii, { dash: _0x3b9e43.value }),
                  })),
                  onChange: _0x5c8ce9.onChangeDash,
                  children: _0x2cb0a9
                    ? _0x2a4e26(Ii, { dash: _0x2cb0a9.value })
                    : _0x2a4e26(_0x40a5a0, {}),
                }),
              ],
            }),
          ],
        }),
        children: _0x2a4e26("span", {
          children: _0x2a4e26(_0x4fae4b, {
            title: _0x117cc0.t("boards-table-ui.editorToolbar.border"),
            placement: "bottom",
            children: _0x45f717(_0x2d9c95, {
              size: "small",
              variant: "ghost",
              "data-toolbar-item": _0x5c8ce9["data-toolbar-item"],
              "aria-expanded": _0x5c8ce9.open,
              "aria-label": _0x117cc0.t("boards-table-ui.editorToolbar.border"),
              title: _0x117cc0.t("boards-table-ui.editorToolbar.border"),
              onMouseDown: _0x1b814e,
              onPointerDown: _0x1b814e,
              className: _0x1eb20a(vi, { [yi]: _0x5c8ce9.open }),
              children: [
                _0x2a4e26(_0x40a5a0, {}),
                _0x2a4e26(_0x325ed1, { className: "univer-text-xs" }),
              ],
            }),
          }),
        }),
      }),
  });
}
function Mi(_0x3c7ba3) {
  let [_0x49f568, _0x21dd56] = _0x370d7b(false),
    _0x43bb53 =
      _0x3c7ba3.options["find"](
        (_0x50ba20) => _0x50ba20.value === _0x3c7ba3.value,
      ) ?? _0x3c7ba3.options[0];
  return _0x43bb53
    ? _0x2a4e26(_0x182e0f, {
        onOpenChange: _0x21dd56,
        children: ({
          handleOpenChange: _0x37aaa2,
          markInternalInteraction: _0x3ac093,
        }) =>
          _0x2a4e26(_0x94a256, {
            open: _0x49f568,
            onOpenChange: _0x37aaa2,
            overlay: _0x2a4e26("div", {
              className: _0x1eb20a(Ti, "univer-min-w-32 univer-p-1", _0x296a28),
              "data-u-comp": "board-table-floating-toolbar-popup",
              onMouseDown: (_0x50567a) => {
                (_0x3ac093(), _0x1b814e(_0x50567a));
              },
              onPointerDown: (_0x167acd) => {
                (_0x3ac093(), _0x1b814e(_0x167acd));
              },
              children: _0x3c7ba3.options["map"]((_0x370256) =>
                _0x45f717(
                  _0x2d9c95,
                  {
                    size: "small",
                    variant: "ghost",
                    onClick: () => {
                      (_0x3c7ba3.onChange(_0x370256.value), _0x21dd56(false));
                    },
                    onMouseDown: _0x1b814e,
                    onPointerDown: _0x1b814e,
                    className: _0x1eb20a(
                      "univer-flex\x20univer-h-8\x20univer-w-full\x20univer-items-center\x20univer-gap-2\x20univer-rounded-md\x20univer-border-none\x20univer-bg-transparent\x20univer-px-2\x20univer-text-left\x20univer-text-sm\x20univer-text-gray-700\x20univer-transition-colors\x20hover:univer-bg-gray-100\x20dark:!univer-text-gray-100\x20dark:hover:!univer-bg-gray-800",
                      {
                        "univer-bg-primary-50\x20univer-text-primary-600\x20dark:!univer-bg-gray-800\x20dark:!univer-text-primary-300":
                          _0x370256.value === _0x3c7ba3.value,
                      },
                    ),
                    children: [
                      _0x2a4e26("span", {
                        className:
                          "univer-flex\x20univer-size-4\x20univer-items-center\x20univer-justify-center",
                        children: _0x370256.icon,
                      }),
                      _0x2a4e26("span", {
                        className: "univer-flex-1",
                        children: _0x370256.label,
                      }),
                    ],
                  },
                  _0x370256.value,
                ),
              ),
            }),
            children: _0x2a4e26("span", {
              children: _0x2a4e26(_0x4fae4b, {
                title: _0x3c7ba3.title,
                placement: "bottom",
                children: _0x45f717(_0x2d9c95, {
                  size: "small",
                  variant: "ghost",
                  "aria-expanded": _0x49f568,
                  "aria-label": _0x3c7ba3.title,
                  title: _0x3c7ba3.title,
                  onMouseDown: _0x1b814e,
                  onPointerDown: _0x1b814e,
                  className: _0x1eb20a(vi, { [yi]: _0x49f568 }),
                  children: [
                    _0x3c7ba3.children ?? _0x43bb53.icon,
                    _0x2a4e26(_0x325ed1, { className: "univer-text-xs" }),
                  ],
                }),
              }),
            }),
          }),
      })
    : null;
}
function Ni(_0x47438f) {
  let _0x414d42 = _0x25c300(_0x534bdd);
  return _0x2a4e26(_0x182e0f, {
    onOpenChange: _0x47438f.onOpenChange,
    children: ({
      handleOpenChange: _0x3f3224,
      markInternalInteraction: _0x4e3001,
    }) =>
      _0x2a4e26(_0x94a256, {
        open: _0x47438f.open,
        onOpenChange: _0x3f3224,
        overlay: _0x45f717("section", {
          className: _0x1eb20a(
            Ti,
            "univer-grid\x20univer-gap-2\x20univer-p-2",
            _0x296a28,
          ),
          "data-u-comp": "board-table-floating-toolbar-popup",
          onMouseDown: (_0xdf4013) => {
            (_0x4e3001(), _0x1b814e(_0xdf4013));
          },
          onPointerDown: (_0x22a4f1) => {
            (_0x4e3001(), _0x1b814e(_0x22a4f1));
          },
          children: [
            _0x45f717("div", {
              className: "univer-flex\x20univer-items-center\x20univer-gap-2",
              children: [
                _0x2a4e26(Pi, {
                  active: _0x47438f.values["bold"],
                  title: _0x414d42.t("boards-table-ui.editorToolbar.bold"),
                  onClick: () =>
                    _0x47438f.onToggleStyle({
                      bl: _0x47438f.values["bold"]
                        ? _0x21bbc4.FALSE
                        : _0x21bbc4.TRUE,
                    }),
                  children: _0x2a4e26(_0x47318f, {}),
                }),
                _0x2a4e26(Pi, {
                  active: _0x47438f.values["italic"],
                  title: _0x414d42.t("boards-table-ui.editorToolbar.italic"),
                  onClick: () =>
                    _0x47438f.onToggleStyle({
                      it: _0x47438f.values["italic"]
                        ? _0x21bbc4.FALSE
                        : _0x21bbc4.TRUE,
                    }),
                  children: _0x2a4e26(_0x5903ef, {}),
                }),
                _0x2a4e26(Pi, {
                  active: _0x47438f.values["underline"],
                  title: _0x414d42.t("boards-table-ui.editorToolbar.underline"),
                  onClick: () =>
                    _0x47438f.onToggleStyle({
                      ul: {
                        s: _0x47438f.values["underline"]
                          ? _0x21bbc4.FALSE
                          : _0x21bbc4.TRUE,
                      },
                    }),
                  children: _0x2a4e26(_0x1dabd9, {}),
                }),
                _0x2a4e26(Pi, {
                  active: _0x47438f.values["strike"],
                  title: _0x414d42.t(
                    "boards-table-ui.editorToolbar.strikethrough",
                  ),
                  onClick: () =>
                    _0x47438f.onToggleStyle({
                      st: {
                        s: _0x47438f.values["strike"]
                          ? _0x21bbc4.FALSE
                          : _0x21bbc4.TRUE,
                      },
                    }),
                  children: _0x2a4e26(_0x5853f1, {}),
                }),
              ],
            }),
            _0x2a4e26(_0x41bda1, {}),
            _0x45f717("div", {
              className: "univer-flex\x20univer-items-center\x20univer-gap-2",
              children: [
                _0x2a4e26("span", {
                  className: "univer-sr-only",
                  children: _0x414d42.t(
                    "boards-table-ui.editorToolbar.horizontalAlign",
                  ),
                }),
                _0x47438f.horizontalAlignOptions["map"]((_0x4024ff) =>
                  _0x2a4e26(
                    Pi,
                    {
                      active:
                        _0x47438f.values["horizontalAlign"] === _0x4024ff.value,
                      title: _0x414d42.t(_0x4024ff.labelKey),
                      onClick: () =>
                        _0x47438f.onHorizontalAlign(_0x4024ff.value),
                      children: _0x4024ff.icon,
                    },
                    _0x4024ff.value,
                  ),
                ),
              ],
            }),
            _0x2a4e26(_0x41bda1, {}),
            _0x45f717("div", {
              className: "univer-flex univer-items-center univer-gap-2",
              children: [
                _0x2a4e26("span", {
                  className: "univer-sr-only",
                  children: _0x414d42.t(
                    "boards-table-ui.editorToolbar.verticalAlign",
                  ),
                }),
                _0x47438f.verticalAlignOptions["map"]((_0xc4d06b) =>
                  _0x2a4e26(
                    Pi,
                    {
                      active:
                        _0x47438f.values["verticalAlign"] === _0xc4d06b.value,
                      title: _0x414d42.t(_0xc4d06b.labelKey),
                      onClick: () => _0x47438f.onVerticalAlign(_0xc4d06b.value),
                      children: _0xc4d06b.icon,
                    },
                    _0xc4d06b.value,
                  ),
                ),
              ],
            }),
          ],
        }),
        children: _0x2a4e26("span", {
          children: _0x2a4e26(_0x4fae4b, {
            title: _0x414d42.t("boards-table-ui.editorToolbar.textFormat"),
            placement: "bottom",
            children: _0x45f717(_0x2d9c95, {
              size: "small",
              variant: "ghost",
              "data-toolbar-item": _0x47438f["data-toolbar-item"],
              "aria-expanded": _0x47438f.open,
              "aria-label": _0x414d42.t(
                "boards-table-ui.editorToolbar.textFormat",
              ),
              className: _0x1eb20a(vi, { [yi]: _0x47438f.open }),
              onMouseDown: _0x1b814e,
              onPointerDown: _0x1b814e,
              children: [
                _0x2a4e26(_0x30e8ff, {}),
                _0x2a4e26(_0x325ed1, { className: "univer-text-xs" }),
              ],
            }),
          }),
        }),
      }),
  });
}
function Pi(_0x36140c) {
  return _0x2a4e26(_0x4fae4b, {
    title: _0x36140c.title,
    placement: "bottom",
    children: _0x2a4e26(_0x2d9c95, {
      size: "small",
      variant: "ghost",
      "aria-label": _0x36140c.title,
      className: _0x1eb20a(
        "univer-flex univer-size-7 univer-items-center univer-justify-center univer-rounded-md univer-border-none univer-bg-transparent univer-p-0 univer-text-gray-700 univer-transition-colors hover:univer-bg-gray-100 dark:!univer-text-gray-100 dark:hover:!univer-bg-gray-800",
        {
          "univer-bg-primary-50\x20univer-text-primary-600\x20dark:!univer-bg-gray-800\x20dark:!univer-text-primary-300":
            _0x36140c.active,
        },
      ),
      onClick: (_0x376df7) => {
        (_0x376df7.preventDefault(), _0x36140c.onClick());
      },
      onMouseDown: _0x1b814e,
      onPointerDown: _0x1b814e,
      children: _0x36140c.children,
    }),
  });
}
function Fi(_0xe2f84e) {
  return _0x2a4e26(_0x4fae4b, {
    title: _0xe2f84e.title,
    placement: "bottom",
    children: _0x2a4e26("span", {
      "data-toolbar-item": _0xe2f84e["data-toolbar-item"],
      onMouseDown: _0x1b814e,
      onPointerDown: _0x1b814e,
      children: _0x2a4e26(_0x3a5cd0, {
        borderless: true,
        className: _0x1eb20a(
          "!univer-h-6 !univer-min-w-0 !univer-rounded-md !univer-border-transparent !univer-bg-transparent !univer-px-1.5",
          _0xe2f84e.widthClassName,
        ),
        value: _0xe2f84e.value,
        options: _0xe2f84e.options,
        onChange: _0xe2f84e.onChange,
      }),
    }),
  });
}
function Ii(_0x4d151d) {
  let _0x571b37 = _0x25c300(_0x534bdd),
    _0x3c6a75 =
      _0x4d151d.dash === "dot"
        ? "1 3"
        : _0x4d151d.dash === "dash"
          ? "4 3"
          : _0x4d151d.dash === "dashDot"
            ? "4 2 1 2"
            : undefined;
  return _0x4d151d.dash === "none"
    ? _0x2a4e26("span", {
        className: "univer-text-xs",
        children: _0x571b37.t("boards-table-ui.editorToolbar.none"),
      })
    : _0x2a4e26("svg", {
        width: "24",
        height: "12",
        viewBox: "0 0 24 12",
        "aria-hidden": "true",
        children: _0x2a4e26("line", {
          x1: "2",
          y1: "6",
          x2: "22",
          y2: "6",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeDasharray: _0x3c6a75,
        }),
      });
}
const Li = {
  none: "none",
  solid: "solid",
  gradient: "gradient",
  picture: "picture",
};
function Ri(_0x50ccaf) {
  var _0x3a1320;
  let {
      children: _0x1293d7,
      color: _0x658f11,
      gradientValue: _0x142cc5,
      previewStyle: _0x3a7a88,
      showPreview: _0x367037 = true,
      tableFill: _0x2723ee,
      open: _0x4027ad,
      value: _0x4d9355,
      onOpenChange: _0x426be1,
      onTableFillChange: _0x473b62,
    } = _0x50ccaf,
    _0x3e918f = _0x25c300(_0x534bdd),
    _0x12b5e8 = {
      noFill: _0x3e918f.t("boards-table-ui.shapePanel.fill.noFill"),
      solidFill: _0x3e918f.t("boards-table-ui.shapePanel.fill.solidFill"),
      gradientFill: _0x3e918f.t("boards-table-ui.shapePanel.fill.gradientFill"),
      pictureFill: _0x3e918f.t("boards-table-ui.shapePanel.fill.pictureFill"),
      color: _0x3e918f.t("boards-table-ui.shapePanel.fill.color"),
      transparency: _0x3e918f.t("boards-table-ui.shapePanel.fill.transparency"),
      pictureSource: _0x3e918f.t(
        "boards-table-ui.shapePanel.fill.picture.source",
      ),
      pictureInsert: _0x3e918f.t(
        "boards-table-ui.shapePanel.fill.picture.insert",
      ),
    },
    _0x50decb =
      (_0x2723ee == null || (_0x3a1320 = _0x2723ee.picture) == null
        ? undefined
        : _0x3a1320.opacity) ??
      (_0x2723ee == null ? undefined : _0x2723ee.alpha) ??
      1;
  return _0x2a4e26(_0x182e0f, {
    onOpenChange: _0x426be1,
    children: ({
      handleOpenChange: _0x2ae02d,
      markInternalInteraction: _0x3bb42d,
    }) =>
      _0x2a4e26(_0x94a256, {
        overlay: _0x2a4e26("div", {
          className: _0x1eb20a(
            "\n univer-rounded-lg univer-bg-gray-0 univer-shadow-lg dark:!univer-bg-gray-900\n",
            "univer-w-[280px] univer-p-3",
            _0x296a28,
          ),
          "data-u-comp": "board-table-floating-toolbar-popup",
          onMouseDown: (_0x49ad56) => {
            (_0x3bb42d(), _0x1b814e(_0x49ad56));
          },
          onPointerDown: (_0x5e853d) => {
            (_0x3bb42d(), _0x1b814e(_0x5e853d));
          },
          children: _0x2a4e26(_0xff55ee, {
            compact: true,
            direction: _0x3e918f.getDirection(),
            keepColorPickerOpenOnChange: true,
            value: _0x4d9355,
            typeValues: Li,
            color: _0x658f11,
            transparency: Math.round((1 - _0x50decb) * 100),
            gradientValue: _0x142cc5,
            labels: _0x12b5e8,
            tabLabels: _0x12b5e8,
            onChange: (_0x127f87) => {
              if (_0x127f87 === "none")
                _0x473b62({
                  ..._0x2723ee,
                  type: _0x650736.None,
                  gradient: undefined,
                  picture: undefined,
                });
              else {
                if (_0x127f87 === "solid")
                  _0x473b62({
                    ..._0x2723ee,
                    type: _0x650736.Solid,
                    color: _0x658f11,
                    alpha: _0x50decb,
                    gradient: undefined,
                    picture: undefined,
                  });
                else {
                  if (_0x127f87 === "gradient") _0x473b62(_0x51d8e5(_0x142cc5));
                  else {
                    if (_0x127f87 === "picture") {
                      var _0x3b9415;
                      _0x473b62({
                        ..._0x2723ee,
                        type: _0x650736.Picture,
                        color: _0x658f11,
                        alpha: _0x50decb,
                        gradient: undefined,
                        picture: {
                          ...(_0x2723ee == null
                            ? undefined
                            : _0x2723ee.picture),
                          opacity: _0x50decb,
                          mode:
                            (_0x2723ee == null ||
                            (_0x3b9415 = _0x2723ee.picture) == null
                              ? undefined
                              : _0x3b9415.mode) ?? _0x5cbb9f.Stretch,
                        },
                      });
                    }
                  }
                }
              }
            },
            onColorChange: (_0x35734a) => {
              _0x473b62({
                ..._0x2723ee,
                type: _0x650736.Solid,
                color: _0x35734a,
                alpha: _0x50decb,
                gradient: undefined,
                picture: undefined,
              });
            },
            onTransparencyChange: (_0x9603dc) => {
              let _0x2e418e =
                (100 - Math.max(0, Math.min(100, _0x9603dc))) / 100;
              if (_0x4d9355 === "picture") {
                var _0xaf870b;
                _0x473b62({
                  ..._0x2723ee,
                  type: _0x650736.Picture,
                  picture: {
                    ...(_0x2723ee == null ? undefined : _0x2723ee.picture),
                    opacity: _0x2e418e,
                    mode:
                      (_0x2723ee == null ||
                      (_0xaf870b = _0x2723ee.picture) == null
                        ? undefined
                        : _0xaf870b.mode) ?? _0x5cbb9f.Stretch,
                  },
                });
                return;
              }
              _0x473b62({
                ..._0x2723ee,
                type: _0x650736.Solid,
                color: _0x658f11,
                alpha: _0x2e418e,
                gradient: undefined,
                picture: undefined,
              });
            },
            onGradientChange: (_0x20edeb) => {
              _0x473b62(_0x51d8e5(_0x20edeb));
            },
            pictureFillEditor: _0x2a4e26(zi, {
              fill: _0x2723ee,
              labels: _0x12b5e8,
              onChange: _0x473b62,
            }),
          }),
        }),
        open: _0x4027ad,
        onOpenChange: _0x2ae02d,
        children: _0x2a4e26("span", {
          children: _0x2a4e26(_0x4fae4b, {
            title: _0x3e918f.t(
              "boards-table-ui.editorToolbar.tableBackgroundColor",
            ),
            placement: "bottom",
            children: _0x45f717(_0x2d9c95, {
              size: "small",
              variant: "ghost",
              "aria-expanded": _0x4027ad,
              "aria-label": _0x3e918f.t(
                "boards-table-ui.editorToolbar.tableBackgroundColor",
              ),
              className: _0x1eb20a(vi, { [yi]: _0x4027ad }),
              "data-toolbar-item": _0x50ccaf["data-toolbar-item"],
              title: _0x3e918f.t(
                "boards-table-ui.editorToolbar.tableBackgroundColor",
              ),
              onMouseDown: _0x1b814e,
              onPointerDown: _0x1b814e,
              children: [
                _0x1293d7,
                _0x367037
                  ? _0x2a4e26("span", {
                      className:
                        "univer-h-3 univer-w-3 univer-rounded-sm univer-border univer-border-solid univer-border-gray-300 dark:!univer-border-gray-600",
                      style: _0x3a7a88,
                    })
                  : null,
                _0x2a4e26(_0x325ed1, { className: "univer-text-xs" }),
              ],
            }),
          }),
        }),
      }),
  });
}
function zi(_0x254521) {
  let { fill: _0xf748d9, labels: _0xbe91ed, onChange: _0x1fd972 } = _0x254521,
    _0x23f4d8 = _0x25c300(_0x311bb3),
    _0x51d7fa = _0x5767e6(null),
    _0x2137af = _0xf748d9 == null ? undefined : _0xf748d9.picture,
    _0x25b602 =
      (_0x2137af == null ? undefined : _0x2137af.opacity) ??
      (_0xf748d9 == null ? undefined : _0xf748d9.alpha) ??
      1,
    _0x6c6ea6 =
      _0x2137af != null &&
      _0x2137af.source &&
      /^(?:data:|https?:)/["test"](_0x2137af.source)
        ? _0x2137af.source
        : undefined;
  return _0x45f717("div", {
    className: "univer-flex univer-flex-col univer-gap-2",
    children: [
      _0x45f717("div", {
        className:
          "univer-flex\x20univer-items-center\x20univer-justify-between\x20univer-gap-3",
        children: [
          _0x2a4e26("span", {
            className:
              "univer-shrink-0 univer-text-xs univer-text-gray-600 dark:!univer-text-gray-200",
            children: _0xbe91ed.pictureSource,
          }),
          _0x2a4e26("input", {
            ref: _0x51d7fa,
            type: "file",
            accept: "image/*",
            className: "univer-hidden",
            onChange: async (_0x5d8f8d) => {
              var _0x170e0d;
              let _0x11e8a8 =
                (_0x170e0d = _0x5d8f8d.target["files"]) == null
                  ? undefined
                  : _0x170e0d[0];
              if (!_0x11e8a8) return;
              _0x5d8f8d.target["value"] = "";
              let _0xe6ed10 = await _0x23f4d8.saveImage(_0x11e8a8);
              if (_0xe6ed10 == null) return;
              let {
                imageSourceType: _0x3f0f19,
                source: _0x2ccd63,
                base64Cache: _0x3b10a0,
              } = _0xe6ed10;
              if (_0x3b10a0) {
                let { image: _0x3f7394 } = await _0x50e2d5(_0x3b10a0);
                _0x23f4d8.addImageSourceCache(_0x2ccd63, _0x3f0f19, _0x3f7394);
              }
              _0x1fd972({
                ..._0xf748d9,
                type: _0x650736.Picture,
                gradient: undefined,
                picture: {
                  ..._0x2137af,
                  source: _0x2ccd63,
                  sourceType: _0x3f0f19,
                  opacity: _0x25b602,
                  mode:
                    (_0x2137af == null ? undefined : _0x2137af.mode) ??
                    _0x5cbb9f.Stretch,
                },
              });
            },
          }),
          _0x2a4e26(_0x2d9c95, {
            size: "small",
            variant: "ghost",
            onClick: () => {
              var _0x2b5ada;
              return (_0x2b5ada = _0x51d7fa.current) == null
                ? undefined
                : _0x2b5ada.click();
            },
            className:
              "univer-rounded\x20univer-px-2\x20univer-py-1\x20univer-text-xs\x20univer-transition-colors\x20hover:univer-bg-gray-100\x20dark:hover:!univer-bg-gray-700",
            children: _0xbe91ed.pictureInsert,
          }),
        ],
      }),
      _0x6c6ea6 &&
        _0x2a4e26("img", {
          src: _0x6c6ea6,
          alt: "",
          className:
            "univer-h-14 univer-w-full univer-rounded univer-object-cover",
        }),
      _0x2a4e26(Bi, {
        label: _0xbe91ed.transparency,
        opacity: _0x25b602,
        onChange: (_0x576e10) =>
          _0x1fd972({
            ..._0xf748d9,
            picture: {
              ..._0x2137af,
              opacity: _0x576e10,
              mode:
                (_0x2137af == null ? undefined : _0x2137af.mode) ??
                _0x5cbb9f.Stretch,
            },
          }),
      }),
    ],
  });
}
function Bi(_0x28a3ff) {
  return _0x45f717("div", {
    className:
      "univer-flex\x20univer-items-center\x20univer-justify-between\x20univer-gap-3",
    children: [
      _0x2a4e26("span", {
        className:
          "univer-shrink-0 univer-text-xs univer-text-gray-600 dark:!univer-text-gray-200",
        children: _0x28a3ff.label,
      }),
      _0x2a4e26("div", {
        className: "univer-w-20",
        children: _0x2a4e26(_0x508197, {
          className: "univer-w-full",
          value: Math.round((1 - _0x28a3ff.opacity) * 100),
          min: 0,
          max: 100,
          step: 10,
          formatter: (_0x54e85c) => _0x54e85c + "%",
          parser: (_0x590cf6) =>
            (_0x590cf6 == null ? undefined : _0x590cf6.replace("%", "")) || "",
          onChange: (_0x32b700) => {
            let _0x229b68 = Math.max(0, Math.min(100, _0x32b700 ?? 0));
            _0x28a3ff.onChange((100 - _0x229b68) / 100);
          },
        }),
      }),
    ],
  });
}
const Vi = "board.table.floating-toolbar";
function Hi(_0x275436, _0x2389d7, _0x4551bd) {
  if (
    !(_0x275436 != null && _0x275436.unitId) ||
    !_0x275436.subUnitId ||
    !_0x275436.elementId ||
    !_0x275436.tableId
  )
    return null;
  let _0x820912 =
    !!_0x2389d7 &&
    _0x2389d7.unitId === _0x275436.unitId &&
    _0x2389d7.subUnitId === _0x275436.subUnitId &&
    _0x2389d7.elementId === _0x275436.elementId &&
    _0x2389d7.tableId === _0x275436.tableId;
  return _0x820912 && _0x2389d7.kind === "text"
    ? null
    : _0x820912 && _0x2389d7.ranges["length"]
      ? _0x2389d7
      : _0x4551bd
        ? {
            unitId: _0x275436.unitId,
            subUnitId: _0x275436.subUnitId,
            elementId: _0x275436.elementId,
            tableId: _0x275436.tableId,
            kind: "table",
            ranges: [
              {
                startRow: 0,
                endRow: Math.max(0, _0x4551bd.rows["length"] - 1),
                startColumn: 0,
                endColumn: Math.max(0, _0x4551bd.columns["length"] - 1),
              },
            ],
          }
        : null;
}
function Ui(_0x431649) {
  var _0x3662b3;
  let _0x397068 = _0x25c300(_0x2014c6),
    _0x4f2a41 = _0x25c300(_0x534bdd),
    _0x4e8eb3 = _0x48d232(_0x4f2a41.direction$, _0x4f2a41.getDirection()),
    _0x20ba4c = _0x25c300(_0x2ff9b6),
    _0x2d4d40 = _0x25c300(_0x2ab092),
    _0x1c1b35 = _0x25c300(_0x55d498),
    _0x24de23 = _0x25c300(_0x5c02bb),
    _0x188276 = _0x48d232(_0x20ba4c.selection$);
  _0x48d232(_0x24de23.tableChange$);
  let [_0x27a651, _0x4217aa] = _0x370d7b({ selectionKey: null, value: null }),
    _0x1ce057 =
      ((_0x3662b3 = _0x431649.popup) == null
        ? undefined
        : _0x3662b3.extraProps) ?? _0x431649,
    _0x1f8605 =
      _0x1ce057.unitId && _0x1ce057.tableId
        ? _0x2d4d40.getTable(_0x1ce057.unitId, _0x1ce057.tableId)
        : null,
    _0x9129b1 = Hi(_0x1ce057, _0x188276, _0x1f8605),
    _0x126c9e = _0x9129b1
      ? [
          _0x9129b1.unitId,
          _0x9129b1.subUnitId,
          _0x9129b1.elementId,
          _0x9129b1.tableId,
          ...Object.values(_0x9129b1.ranges[0] ?? {}),
        ].join("|")
      : null,
    _0x2b12ce = _0x27a651.selectionKey === _0x126c9e ? _0x27a651.value : null,
    _0x33a460 = mi(_0x1f8605, _0x9129b1),
    _0x2f88f0 = _0x33a460.values,
    _0x126ef9 = _0x356ae7(
      (_0x236992) => {
        if (!_0x9129b1) return;
        let _0x284331 = _0x9129b1.ranges[0],
          _0x54c7cf = _0x2d4d40.getTable(_0x9129b1.unitId, _0x9129b1.tableId);
        !_0x284331 ||
          !_0x54c7cf ||
          _0x397068.executeCommand(_0x278de5.id, {
            unitId: _0x9129b1.unitId,
            tableId: _0x9129b1.tableId,
            patch: _0x236992(_0x54c7cf, _0x284331),
          });
      },
      [_0x397068, _0x2d4d40, _0x9129b1],
    ),
    _0x4560b1 = _0x356ae7(
      (_0x37a0e0) => {
        _0x9129b1 &&
          _0x397068.executeCommand(_0x278de5.id, {
            unitId: _0x9129b1.unitId,
            tableId: _0x9129b1.tableId,
            patch: { styleId: _0x37a0e0 },
          });
      },
      [_0x397068, _0x9129b1],
    ),
    _0x25a76e = _0x356ae7(
      (_0x45294a) => {
        _0x9129b1 &&
          _0x397068.executeCommand(_0x278de5.id, {
            unitId: _0x9129b1.unitId,
            tableId: _0x9129b1.tableId,
            patch: { options: _0x45294a },
          });
      },
      [_0x397068, _0x9129b1],
    ),
    _0x21e955 = _0x356ae7(
      (_0x21d4c0, _0x4723ba) => {
        _0x4217aa({
          selectionKey: _0x126c9e,
          value: _0x4723ba ? _0x21d4c0 : null,
        });
      },
      [_0x126c9e],
    ),
    _0x104c22 = _0x556c3a(
      () => _0x20cfe6((_0x2b5730) => _0x1c1b35.getColorFromTheme(_0x2b5730)),
      [_0x1c1b35],
    );
  if (!_0x9129b1 || !_0x1f8605) return null;
  let _0x2aae09 = _0x33a460.mergeState,
    _0x3261c4 = gi(_0x1f8605, _0x9129b1),
    _0x2f046d =
      (_0x3261c4 == null ? undefined : _0x3261c4.kind) === "row"
        ? _0x4f2a41.t("boards-table-ui.contextMenu.deleteRow")
        : (_0x3261c4 == null ? undefined : _0x3261c4.kind) === "column"
          ? _0x4f2a41.t("boards-table-ui.contextMenu.deleteColumn")
          : null,
    _0x5a91e8 = () => {
      _0x3261c4 &&
        _0x397068.executeCommand(_0x3261c4.commandId, _0x3261c4.params);
    },
    _0x1a7fd6 =
      (_0x2aae09 == null ? undefined : _0x2aae09.action) === "unmerge"
        ? _0x4f2a41.t("boards-table-ui.editorToolbar.unmergeCells")
        : (_0x2aae09 == null ? undefined : _0x2aae09.action) === "merge"
          ? _0x4f2a41.t("boards-table-ui.editorToolbar.mergeCells")
          : null,
    _0x18c910 = () => {
      let _0x324312 = hi(_0x9129b1, _0x2aae09 ?? null);
      _0x324312 &&
        _0x397068.executeCommand(_0x324312.commandId, _0x324312.params);
    },
    _0x3edd8d = [
      {
        labelKey: "boards-table-ui.editorToolbar.alignLeft",
        value: _0x3be47e.LEFT,
        icon: _0x2a4e26(_0x44ba6b, {}),
      },
      {
        labelKey: "boards-table-ui.editorToolbar.alignCenter",
        value: _0x3be47e.CENTER,
        icon: _0x2a4e26(_0x3bdd54, {}),
      },
      {
        labelKey: "boards-table-ui.editorToolbar.alignRight",
        value: _0x3be47e.RIGHT,
        icon: _0x2a4e26(_0x294aa5, {}),
      },
      {
        labelKey: "boards-table-ui.editorToolbar.alignJustify",
        value: _0x3be47e.JUSTIFIED,
        icon: _0x2a4e26(_0x1b237a, {}),
      },
    ],
    _0x1ade82 = [
      {
        labelKey: "boards-table-ui.editorToolbar.alignTop",
        value: _0x2e4792.TOP,
        icon: _0x2a4e26(_0x459d45, {}),
      },
      {
        labelKey: "boards-table-ui.editorToolbar.alignMiddle",
        value: _0x2e4792.MIDDLE,
        icon: _0x2a4e26(_0x3445f7, {}),
      },
      {
        labelKey: "boards-table-ui.editorToolbar.alignBottom",
        value: _0x2e4792.BOTTOM,
        icon: _0x2a4e26(_0x1260ae, {}),
      },
    ];
  return _0x45f717("div", {
    className: _0x1eb20a(
      "univer-box-border univer-flex univer-max-w-[760px] univer-flex-nowrap univer-items-center univer-rounded univer-bg-gray-0 univer-px-1 univer-py-1 univer-shadow-sm dark:!univer-border-gray-700 dark:!univer-bg-gray-900",
      _0x296a28,
    ),
    "data-u-comp": "board-table-floating-toolbar",
    dir: _0x4e8eb3,
    role: "toolbar",
    style: { direction: _0x4e8eb3 },
    onMouseDownCapture: () => _0x20ba4c.markTableInternalInteraction(),
    onPointerDownCapture: () => _0x20ba4c.markTableInternalInteraction(),
    onMouseDown: _0x1b814e,
    onPointerDown: _0x1b814e,
    children: [
      _0x3261c4 && _0x2f046d
        ? _0x45f717(_0x199b72, {
            children: [
              _0x2a4e26(Di, {
                children: _0x2a4e26(Oi, {
                  "data-toolbar-item":
                    _0x3261c4.kind === "row" ? "delete-row" : "delete-column",
                  title: _0x2f046d,
                  onClick: _0x5a91e8,
                  children: _0x2a4e26(_0x44d476, {}),
                }),
              }),
              _0x2a4e26(_0x41bda1, { orientation: "vertical" }),
            ],
          })
        : null,
      _0x1a7fd6
        ? _0x45f717(_0x199b72, {
            children: [
              _0x2a4e26(Di, {
                children: _0x2a4e26(Oi, {
                  "data-toolbar-item": "merge-cells",
                  title: _0x1a7fd6,
                  onClick: _0x18c910,
                  children:
                    (_0x2aae09 == null ? undefined : _0x2aae09.action) ===
                    "unmerge"
                      ? _0x2a4e26(_0x1d1d53, {})
                      : _0x2a4e26(_0x9296b6, {}),
                }),
              }),
              _0x2a4e26(_0x41bda1, { orientation: "vertical" }),
            ],
          })
        : null,
      _0x45f717(Di, {
        children: [
          _0x2a4e26(Ri, {
            "data-toolbar-item": "background",
            color: _0x2f88f0.backgroundColor,
            value: _0x3aa94f(_0x2f88f0.backgroundFill),
            gradientValue: _0x37419f(
              _0x2f88f0.backgroundFill,
              _0x2f88f0.backgroundColor,
            ),
            previewStyle: _0x217368(
              _0x2f88f0.backgroundFill,
              _0x2f88f0.backgroundColor,
            ),
            showPreview: false,
            tableFill: _0x2f88f0.backgroundFill,
            open: _0x2b12ce === "background",
            onOpenChange: (_0x11d12b) => _0x21e955("background", _0x11d12b),
            onTableFillChange: (_0x54a27e) =>
              _0x126ef9((_0x585cda, _0x511036) =>
                _0x3069dd(_0x585cda, _0x511036, _0x54a27e),
              ),
            children: _0x2a4e26(_0x2d7af1, {
              extend: { colorChannel1: _0x2f88f0.backgroundColor },
            }),
          }),
          _0x2a4e26(ji, {
            "data-toolbar-item": "border",
            color: _0x2f88f0.borderColor,
            width: _0x2f88f0.borderWidth,
            dash: _0x2f88f0.borderDash,
            presets: Si,
            open: _0x2b12ce === "border",
            onOpenChange: (_0x1e2b32) => _0x21e955("border", _0x1e2b32),
            onSelectPreset: (_0x77b7fa) =>
              _0x126ef9((_0x4b60cf, _0x270ede) =>
                _0x3ab433(_0x4b60cf, _0x270ede, _0x77b7fa),
              ),
            onChangeColor: (_0x248a3d) =>
              _0x126ef9((_0xc48fad, _0x446530) =>
                _0x1c5b81(_0xc48fad, _0x446530, { color: _0x248a3d }),
              ),
            onChangeWidth: (_0x43416d) =>
              _0x126ef9((_0x49fee5, _0x443667) =>
                _0x1c5b81(_0x49fee5, _0x443667, {
                  width: _0x43416d,
                  dash: _0x43416d === 0 ? _0x204d64.None : undefined,
                }),
              ),
            onChangeDash: (_0x38a366) =>
              _0x126ef9((_0x5a468b, _0x1eaeb0) =>
                _0x1c5b81(_0x5a468b, _0x1eaeb0, { dash: _0x38a366 }),
              ),
          }),
        ],
      }),
      _0x2a4e26(_0x41bda1, { orientation: "vertical" }),
      _0x45f717(Di, {
        children: [
          _0x2a4e26("span", {
            "data-toolbar-item": "font-family",
            onMouseDown: _0x1b814e,
            onPointerDown: _0x1b814e,
            children: _0x2a4e26(_0x240022, {
              ariaLabel: _0x4f2a41.t(
                "boards-table-ui.editorToolbar.fontFamily",
              ),
              className: "univer-w-28",
              inputClassName: "univer-w-auto",
              title: _0x2f88f0.fontFamily,
              value: _0x2f88f0.fontFamily,
              onChange: (_0x3e9990) =>
                _0x126ef9((_0x3d5e9b, _0x2b29fc) =>
                  _0x5ad22b(_0x3d5e9b, _0x2b29fc, _0x3e9990),
                ),
              onMouseDown: _0x1b814e,
              onPointerDown: _0x1b814e,
            }),
          }),
          _0x2a4e26(Fi, {
            "data-toolbar-item": "font-size",
            title: _0x4f2a41.t("boards-table-ui.editorToolbar.fontSize"),
            widthClassName: "univer-w-14",
            value: String(_0x2f88f0.fontSize),
            options: _0x5c6336(_i, String(_0x2f88f0.fontSize)),
            onChange: (_0x117f69) => {
              let _0x5caddf = Number(_0x117f69);
              Number.isNaN(_0x5caddf) ||
                _0x126ef9((_0x26dc74, _0x54b1b1) =>
                  _0x1655d1(_0x26dc74, _0x54b1b1, _0x5caddf),
                );
            },
          }),
          _0x2a4e26(Ni, {
            "data-toolbar-item": "text-format",
            open: _0x2b12ce === "textFormat",
            values: _0x2f88f0,
            horizontalAlignOptions: _0x3edd8d,
            verticalAlignOptions: _0x1ade82,
            onOpenChange: (_0x20c47f) => _0x21e955("textFormat", _0x20c47f),
            onToggleStyle: (_0xaef3be) =>
              _0x126ef9((_0x4eb651, _0xd3333d) =>
                _0x3ad2db(_0x4eb651, _0xd3333d, _0xaef3be),
              ),
            onHorizontalAlign: (_0x8b872d) =>
              _0x126ef9((_0x104df8, _0x2dd760) =>
                _0xa3d479(_0x104df8, _0x2dd760, {
                  axis: "horizontal",
                  value: _0x8b872d,
                }),
              ),
            onVerticalAlign: (_0x51e0d3) =>
              _0x126ef9((_0x25f63c, _0x39851d) =>
                _0xa3d479(_0x25f63c, _0x39851d, {
                  axis: "vertical",
                  value: _0x51e0d3,
                }),
              ),
          }),
        ],
      }),
      _0x2a4e26(_0x41bda1, { orientation: "vertical" }),
      _0x45f717(Di, {
        children: [
          _0x2a4e26(Ai, {
            "data-toolbar-item": "text-color",
            title: _0x4f2a41.t("boards-table-ui.editorToolbar.textColor"),
            color: _0x2f88f0.textColor,
            icon: "font",
            open: _0x2b12ce === "textColor",
            onOpenChange: (_0x5e669a) => _0x21e955("textColor", _0x5e669a),
            onChange: (_0x2d7f80) =>
              _0x126ef9((_0x20ceb8, _0x97cc89) =>
                _0x303409(_0x20ceb8, _0x97cc89, {
                  type: "solid",
                  color: _0x2d7f80,
                  opacity: 1,
                }),
              ),
          }),
          _0x2a4e26(Ai, {
            "data-toolbar-item": "text-background",
            title: _0x4f2a41.t(
              "boards-table-ui.editorToolbar.textBackgroundColor",
            ),
            color: _0x2f88f0.textBackgroundColor,
            icon: "bucket",
            open: _0x2b12ce === "textBackground",
            onOpenChange: (_0x2d148a) => _0x21e955("textBackground", _0x2d148a),
            onChange: (_0x5958cc) =>
              _0x126ef9((_0x47d58c, _0x2f919d) =>
                _0x3ad2db(_0x47d58c, _0x2f919d, { bg: { rgb: _0x5958cc } }),
              ),
          }),
        ],
      }),
      _0x2a4e26(_0x41bda1, { orientation: "vertical" }),
      _0x2a4e26(Di, {
        children: _0x2a4e26(Ei, {
          open: _0x2b12ce === "theme",
          onOpenChange: (_0x2b0e66) => _0x21e955("theme", _0x2b0e66),
          children: _0x2a4e26(_0x7bb423, {
            currentStyleId: _0x1f8605.styleId,
            currentOptions: _0x1f8605.options ?? {},
            direction: _0x4e8eb3,
            palette: _0x104c22,
            onApplyTheme: (_0x227367) => {
              (_0x4560b1(_0x227367), _0x21e955("theme", false));
            },
            onChangeOptions: _0x25a76e,
          }),
        }),
      }),
      _0x2a4e26(_0x41bda1, { orientation: "vertical" }),
      _0x2a4e26(Di, {
        children: _0x2a4e26(Oi, {
          "data-toolbar-item": "delete-table",
          title: _0x4f2a41.t("boards-table-ui.contextMenu.deleteTable"),
          onClick: () => _0x397068.executeCommand(Wr.id),
          children: _0x2a4e26(_0x44d476, {}),
        }),
      }),
    ],
  });
}
function Wi(_0xf86795) {
  "@babel/helpers - typeof";
  return (
    (Wi =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x29ef87) {
            return typeof _0x29ef87;
          }
        : function (_0x191f7c) {
            return _0x191f7c &&
              typeof Symbol == "function" &&
              _0x191f7c.constructor === Symbol &&
              _0x191f7c !== Symbol.prototype
              ? "symbol"
              : typeof _0x191f7c;
          }),
    Wi(_0xf86795)
  );
}
function Gi(_0x7d9378, _0x287540) {
  if (Wi(_0x7d9378) != "object" || !_0x7d9378) return _0x7d9378;
  var _0x25b6fd = _0x7d9378[Symbol.toPrimitive];
  if (_0x25b6fd !== undefined) {
    var _0x547cec = _0x25b6fd.call(_0x7d9378, _0x287540 || "default");
    if (Wi(_0x547cec) != "object") return _0x547cec;
    throw TypeError(
      "@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.",
    );
  }
  return (_0x287540 === "string" ? String : Number)(_0x7d9378);
}
function Ki(_0x40a6c8) {
  var _0x3b1d4a = Gi(_0x40a6c8, "string");
  return Wi(_0x3b1d4a) == "symbol" ? _0x3b1d4a : _0x3b1d4a + "";
}
function J(_0x2c8e77, _0x5a5f53, _0x4610a1) {
  return (
    (_0x5a5f53 = Ki(_0x5a5f53)) in _0x2c8e77
      ? Object.defineProperty(_0x2c8e77, _0x5a5f53, {
          value: _0x4610a1,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x2c8e77[_0x5a5f53] = _0x4610a1),
    _0x2c8e77
  );
}
const qi = _0x257ba6 + 18;
let Ji = class extends _0x482797 {
  constructor(
    _0x4eefa5,
    _0x477e3d,
    _0x210b5d,
    _0x25f9fc,
    _0x57f521,
    _0x427e78,
    _0x28c083,
  ) {
    (super(),
      (this._renderContext = _0x4eefa5),
      (this._boardCanvasPopManagerService = _0x477e3d),
      (this._boardElementService = _0x210b5d),
      (this._slideTableSelectionService = _0x25f9fc),
      (this._elementStateService = _0x57f521),
      (this._slideTableResourceService = _0x427e78),
      (this._interactionSurfaceService = _0x28c083),
      J(this, "_popupDisposable", null),
      J(this, "_popupSelectionKey", null),
      J(this, "_eventDisposables", new _0x59e9e2()),
      this.disposeWithMe(this._eventDisposables),
      this._init());
  }
  dispose() {
    (this._clearPopup(), super.dispose());
  }
  _init() {
    let _0x22af45 = this._renderContext["scene"].getTransformerByCreate();
    (this._subscribe(_0x22af45.createControl$, () =>
      this._showPopupForSelection(),
    ),
      this._subscribe(_0x22af45.clearControl$, () =>
        this._clearPopupIfSelectionChanged(),
      ),
      this._subscribe(_0x22af45.changeStart$, () => this._clearPopup()),
      this._subscribe(_0x22af45.changeEnd$, () =>
        setTimeout(() => this._showPopupForSelection(), 0),
      ),
      this._subscribe(this._slideTableSelectionService["selection$"], () =>
        setTimeout(() => this._showPopupForSelection(), 0),
      ),
      this._subscribe(this._elementStateService["state$"], () =>
        setTimeout(() => this._showPopupForSelection(), 0),
      ),
      this._subscribe(
        this._interactionSurfaceService["interactionSurfaceActive$"],
        () => {
          if (this._interactionSurfaceService["isInteractionSurfaceActive"]) {
            this._clearPopup();
            return;
          }
          setTimeout(() => this._showPopupForSelection(), 0);
        },
      ));
  }
  _subscribe(_0x1f4833, _0x356a58) {
    let _0x51c8d8 = _0x1f4833.subscribe(_0x356a58);
    this._eventDisposables["add"](
      _0x192ad5(() => {
        var _0x19c0ed, _0x57f498;
        ((_0x19c0ed = _0x51c8d8.unsubscribe) == null ||
          _0x19c0ed.call(_0x51c8d8),
          (_0x57f498 = _0x51c8d8.dispose) == null || _0x57f498.call(_0x51c8d8));
      }),
    );
  }
  _clearPopup() {
    var _0x3d2251;
    ((_0x3d2251 = this._popupDisposable) == null || _0x3d2251.dispose(),
      (this._popupDisposable = null),
      (this._popupSelectionKey = null));
  }
  _clearPopupIfSelectionChanged() {
    setTimeout(() => {
      this._isPopupSelectionStillActive() || this._clearPopup();
    }, 0);
  }
  _isPopupSelectionStillActive() {
    let _0x285518 = this._elementStateService["getSnapshot"]();
    return !_0x285518.context || !_0x285518.selectedIds["length"]
      ? false
      : this._popupSelectionKey ===
          this._buildPopupSelectionKey(
            _0x285518.context["unitId"],
            _0x285518.context["subUnitId"],
            _0x285518.selectedIds,
          );
  }
  _buildPopupSelectionKey(_0x4a8d76, _0x152a36, _0x42cfdb) {
    return _0x4a8d76 + ":" + _0x152a36 + ":" + _0x42cfdb.join(",");
  }
  _showPopupForSelection() {
    var _0xf9e4cc;
    if (this._interactionSurfaceService["isInteractionSurfaceActive"]) {
      this._clearPopup();
      return;
    }
    let _0x532292 = this._elementStateService["getSnapshot"]();
    if (_0x532292.isTransforming) {
      this._clearPopup();
      return;
    }
    let _0x5acbac = this._renderContext["scene"]
      .getTransformerByCreate()
      .getSelectedObjectMap();
    if (!_0x5acbac.size) {
      if (
        this._showPopupForTableSelection() ||
        this._isPopupSelectionStillActive()
      )
        return;
      this._clearPopup();
      return;
    }
    if (
      _0x5013d7({
        context: _0x532292.context,
        selectedIds: _0x532292.selectedIds,
        getElementById: (_0x4228c6, _0x111971, _0x3e0277) =>
          this._boardElementService["getElementById"](
            _0x4228c6,
            _0x111971,
            _0x3e0277,
          ),
      }).owner !== "table"
    ) {
      this._clearPopup();
      return;
    }
    let _0x57caa2 = Array.from(_0x5acbac.values())
      .map((_0x35b154) => this._resolveSelectedEntry(_0x35b154))
      .filter((_0x33c9db) => !!_0x33c9db)
      .filter(
        (_0x5b9b57) =>
          _0x5b9b57.elementData["element"].type === _0x1ddec1.Table,
      );
    if (!_0x57caa2.length) {
      this._clearPopup();
      return;
    }
    let _0x13ca9a =
      _0x57caa2.find(
        (_0x29d907) =>
          _0x29d907.elementData["elementId"] === _0x532292.focusedId,
      ) ?? _0x57caa2[0];
    if (!_0x13ca9a) {
      this._clearPopup();
      return;
    }
    let _0x7bb904 = this._buildPopupSelectionKey(
      _0x13ca9a.elementData["unitId"],
      _0x13ca9a.elementData["subUnitId"],
      ((_0xf9e4cc = _0x532292.context) == null
        ? undefined
        : _0xf9e4cc.unitId) === _0x13ca9a.elementData["unitId"] &&
        _0x532292.context["subUnitId"] === _0x13ca9a.elementData["subUnitId"] &&
        _0x532292.selectedIds["length"]
        ? _0x532292.selectedIds
        : [_0x13ca9a.elementData["elementId"]],
    );
    (this._popupDisposable && this._popupSelectionKey === _0x7bb904) ||
      (this._clearPopup(),
      (this._popupDisposable = this.disposeWithMe(
        this._boardCanvasPopManagerService["attachPopupToObject"](
          _0x13ca9a.elementData["unitId"],
          _0x13ca9a.elementData["subUnitId"],
          _0x13ca9a.object,
          {
            componentKey: Vi,
            direction: "top-center",
            offset: [0, qi],
            anchorBoundResolver: this._resolveSelectionAnchorBoundResolver(
              _0x13ca9a.elementData,
            ),
            extraProps: {
              unitId: _0x13ca9a.elementData["unitId"],
              subUnitId: _0x13ca9a.elementData["subUnitId"],
              elementId: _0x13ca9a.elementData["elementId"],
              tableId: _0x13ca9a.elementData["element"].tableId,
            },
          },
        ),
      )),
      (this._popupSelectionKey = _0x7bb904));
  }
  _showPopupForTableSelection() {
    let _0x8ffbec = this._slideTableSelectionService["getSelection"]();
    if (!_0x8ffbec || _0x8ffbec.kind === "text" || !_0x8ffbec.ranges["length"])
      return false;
    let _0xd29933 = this._resolveTableSelectionObject(
      _0x8ffbec.unitId,
      _0x8ffbec.elementId,
    );
    if (!_0xd29933) return false;
    let _0x38fcd7 = this._boardElementService["getElementById"](
      _0x8ffbec.unitId,
      _0x8ffbec.subUnitId,
      _0x8ffbec.elementId,
    );
    if (
      !_0x38fcd7 ||
      _0x38fcd7.element["type"] !== _0x1ddec1.Table ||
      _0x38fcd7.element["tableId"] !== _0x8ffbec.tableId
    )
      return false;
    let _0x47b17f = _0x38fcd7,
      _0x4746dc =
        this._buildPopupSelectionKey(_0x8ffbec.unitId, _0x8ffbec.subUnitId, [
          _0x8ffbec.elementId,
        ]) + this._buildTableSelectionRangeKey(_0x8ffbec);
    return this._popupDisposable && this._popupSelectionKey === _0x4746dc
      ? true
      : (this._clearPopup(),
        (this._popupDisposable = this.disposeWithMe(
          this._boardCanvasPopManagerService["attachPopupToObject"](
            _0x8ffbec.unitId,
            _0x8ffbec.subUnitId,
            _0xd29933,
            {
              componentKey: Vi,
              direction: "top-center",
              offset: [0, qi],
              anchorBoundResolver:
                this._resolveSelectionAnchorBoundResolver(_0x47b17f),
              extraProps: {
                unitId: _0x8ffbec.unitId,
                subUnitId: _0x8ffbec.subUnitId,
                elementId: _0x8ffbec.elementId,
                tableId: _0x8ffbec.tableId,
              },
            },
          ),
        )),
        (this._popupSelectionKey = _0x4746dc),
        true);
  }
  _buildTableSelectionRangeKey(_0x185013) {
    let _0x327edc = _0x185013.ranges[0];
    return _0x327edc
      ? ":table-selection:" +
          _0x185013.kind +
          ":" +
          _0x327edc.startRow +
          ":" +
          _0x327edc.endRow +
          ":" +
          _0x327edc.startColumn +
          ":" +
          _0x327edc.endColumn
      : ":table-selection:" + _0x185013.kind + ":empty";
  }
  _resolveSelectionAnchorBoundResolver(_0x3f1c59) {
    let _0x4b2d74 = this._slideTableSelectionService["getSelection"]();
    if (
      !Yi(_0x4b2d74, _0x3f1c59) ||
      (_0x4b2d74.kind !== "row" && _0x4b2d74.kind !== "column")
    )
      return;
    let _0x1291cd = this._slideTableResourceService["getTable"](
        _0x4b2d74.unitId,
        _0x4b2d74.tableId,
      ),
      _0x4dd11a = _0x4b2d74.ranges[0];
    if (!(!_0x1291cd || !_0x4dd11a))
      return (_0x487c3) => {
        let _0x3fd0d0 = _0x11280b(_0x4dd11a),
          _0x2b649c = Xi(
            _0x1291cd.columns["map"]((_0x4c50f2) => _0x4c50f2.width),
            _0x487c3.width,
            _0x3fd0d0.startColumn,
            _0x3fd0d0.endColumn,
          ),
          _0x30c335 = Xi(
            _0x1291cd.rows["map"]((_0x2c70e9) => _0x2c70e9.height ?? 24),
            _0x487c3.height,
            _0x3fd0d0.startRow,
            _0x3fd0d0.endRow,
          );
        return {
          left: _0x487c3.left + _0x2b649c.start,
          right: _0x487c3.left + _0x2b649c.start + _0x2b649c.size,
          top: _0x487c3.top + _0x30c335.start,
          bottom: _0x487c3.top + _0x30c335.start + _0x30c335.size,
        };
      };
  }
  _resolveTableSelectionObject(_0x368952, _0x40018b) {
    var _0x40cba1, _0x7c763e;
    let _0x3311a4 = this._renderContext["scene"],
      _0x4b263f = _0x517e76(_0x368952, _0x40018b);
    return (
      ((_0x40cba1 = _0x3311a4.getObjectIncludeInGroup) == null
        ? undefined
        : _0x40cba1.call(_0x3311a4, _0x4b263f)) ??
      ((_0x7c763e = _0x3311a4.getObject) == null
        ? undefined
        : _0x7c763e.call(_0x3311a4, _0x4b263f)) ??
      null
    );
  }
  _resolveSelectedEntry(_0x3757b2) {
    var _0x4aa0b0;
    if (!_0x3757b2) return null;
    let _0x4eddbd = _0x106f13(_0x3757b2.oKey);
    if (!_0x4eddbd) return null;
    let _0x13a8b5 = this._elementStateService["getSnapshot"](),
      _0x3614dc =
        ((_0x4aa0b0 = _0x13a8b5.context) == null
          ? undefined
          : _0x4aa0b0.unitId) === _0x4eddbd.unitId
          ? _0x13a8b5.context["subUnitId"]
          : undefined;
    if (!_0x3614dc) return null;
    let _0xa1a959 = this._boardElementService["getElementById"](
      _0x4eddbd.unitId,
      _0x3614dc,
      _0x4eddbd.elementId,
    );
    return !_0xa1a959 || _0xa1a959.element["type"] !== _0x1ddec1.Table
      ? null
      : { object: _0x3757b2, elementData: _0xa1a959 };
  }
};
Ji = ni(
  [
    q(1, _0xe67e5f(_0x3e721d)),
    q(2, _0xe67e5f(_0x4f68c1)),
    q(3, _0xe67e5f(_0x2ff9b6)),
    q(4, _0xe67e5f(_0x2c7a66)),
    q(5, _0xe67e5f(_0x2ab092)),
    q(6, _0xe67e5f(_0x5265db)),
  ],
  Ji,
);
function Yi(_0x34885e, _0x3f786e) {
  return (
    !!_0x34885e &&
    _0x34885e.unitId === _0x3f786e.unitId &&
    _0x34885e.subUnitId === _0x3f786e.subUnitId &&
    _0x34885e.elementId === _0x3f786e.elementId &&
    _0x34885e.tableId === _0x3f786e.element["tableId"] &&
    !!_0x34885e.ranges["length"]
  );
}
function Xi(_0x1f76a9, _0x8a3d12, _0x4544bb, _0x298f29) {
  let _0xbd8d37 = _0x1f76a9.reduce(
    (_0x4230b0, _0x2930a2) => _0x4230b0 + _0x2930a2,
    0,
  );
  if (_0xbd8d37 <= 0 || _0x1f76a9.length === 0)
    return { start: 0, size: _0x8a3d12 };
  let _0x408f41 = Math.max(0, Math.min(_0x4544bb, _0x1f76a9.length - 1)),
    _0x36d20e = Math.max(_0x408f41, Math.min(_0x298f29, _0x1f76a9.length - 1)),
    _0x2fb31c = _0x1f76a9
      .slice(0, _0x408f41)
      .reduce((_0x4ed473, _0x17ea9c) => _0x4ed473 + _0x17ea9c, 0),
    _0x411a4f = _0x1f76a9
      .slice(_0x408f41, _0x36d20e + 1)
      .reduce((_0x456ccb, _0x49dffe) => _0x456ccb + _0x49dffe, 0);
  return {
    start: (_0x2fb31c / _0xbd8d37) * _0x8a3d12,
    size: (_0x411a4f / _0xbd8d37) * _0x8a3d12,
  };
}
var Zi = class extends _0x510567 {
  constructor(_0x418d15, _0xfcf7b) {
    (super(_0x418d15, { ..._0xfcf7b, controlButtonMode: "table-handle" }),
      J(this, "_element", undefined),
      (this._element = _0xfcf7b.element));
  }
  updateElement(_0xc6a192) {
    ((this._element = _0xc6a192), this.makeDirty(true));
  }
  getElement() {
    return this._element;
  }
};
let Qi = class extends _0x482797 {
  constructor(_0x74277, _0x179a73, _0x518a3d, _0x360a49, _0x4f614a) {
    (super(),
      (this._renderContext = _0x74277),
      (this._instanceService = _0x179a73),
      (this._boardElementService = _0x518a3d),
      (this._slideTableModelService = _0x360a49),
      (this._slideTableResourceService = _0x4f614a),
      this._init());
  }
  _init() {
    (this.disposeWithMe(
      _0x192ad5(
        this._slideTableModelService["tableChange$"].subscribe((_0x5308b3) => {
          _0x5308b3.unitId === this._renderContext["unitId"] &&
            this._syncTableObjects(_0x5308b3.tableId);
        }),
      ),
    ),
      this.disposeWithMe(
        _0x192ad5(
          this._slideTableModelService["tableRemoval$"].subscribe(
            (_0x3c93e4) => {
              _0x3c93e4.unitId === this._renderContext["unitId"] &&
                this._syncTableObjects(_0x3c93e4.tableId);
            },
          ),
        ),
      ));
  }
  _syncTableObjects(_0x38cd9b) {
    let { unitId: _0x5345d3 } = this._renderContext,
      _0x385c5c = this._instanceService["getUnit"](
        _0x5345d3,
        _0x26c2da.UNIVER_BOARD,
      );
    if (!_0x385c5c) return;
    let _0x40a8c1 = _0x385c5c.getActivePageId(),
      _0x58fe68 = this._boardElementService["getElementData"](
        _0x5345d3,
        _0x40a8c1,
      ),
      _0x105e0c =
        this._slideTableModelService["getTable"](_0x5345d3, _0x38cd9b) ?? null,
      _0x480249 = this._slideTableResourceService["getThemes"](_0x5345d3),
      _0x4e3d1b = false;
    if (
      (Object.values(_0x58fe68).forEach((_0x171fef) => {
        if (!$i(_0x171fef) || _0x171fef.element["tableId"] !== _0x38cd9b)
          return;
        let _0x15eaba = this._getBoardTableObject(
          _0x517e76(_0x5345d3, _0x171fef.elementId),
        );
        _0x15eaba &&
          (_0x15eaba.updateElement(_0x171fef.element),
          _0x15eaba.setTableThemes(_0x480249),
          _0x15eaba.setTable(_0x105e0c),
          (_0x4e3d1b = true));
      }),
      _0x4e3d1b)
    ) {
      var _0x31dea8, _0x3de33d;
      (_0x31dea8 = (_0x3de33d = this._renderContext["scene"]).makeDirty) ==
        null || _0x31dea8.call(_0x3de33d, true);
    }
  }
  _getBoardTableObject(_0x245ced) {
    var _0x20924c, _0x40c7ee;
    let _0x1ffc01 = this._renderContext["scene"],
      _0x244ff3 =
        ((_0x20924c = _0x1ffc01.getObjectIncludeInGroup) == null
          ? undefined
          : _0x20924c.call(_0x1ffc01, _0x245ced)) ??
        ((_0x40c7ee = _0x1ffc01.getObject) == null
          ? undefined
          : _0x40c7ee.call(_0x1ffc01, _0x245ced));
    return _0x244ff3 instanceof Zi ? _0x244ff3 : null;
  }
};
Qi = ni(
  [
    q(1, _0x498479),
    q(2, _0x4f68c1),
    q(3, _0xe67e5f(_0x5c02bb)),
    q(4, _0xe67e5f(_0x2ab092)),
  ],
  Qi,
);
function $i(_0x5646a6) {
  return _0x5646a6.element["type"] === _0x1ddec1.Table;
}
var ea = class extends _0x14d132 {
  getEditing() {
    return this.getSession();
  }
  subscribe(_0x3eb4c7) {
    return super.subscribe(_0x3eb4c7);
  }
};
function ta(_0x5080ea) {
  return _0x5080ea.altKey ||
    _0x5080ea.ctrlKey ||
    _0x5080ea.metaKey ||
    _0x5080ea.key !== "Tab"
    ? null
    : _0x5080ea.shiftKey
      ? "tab-backward"
      : "tab-forward";
}
function na(_0x51059d, _0x1c6f66) {
  var _0x37a3f8, _0x54fc07;
  if (!_0x51059d) return null;
  let _0x1cad44 =
    ((_0x37a3f8 = (_0x54fc07 = _0x1c6f66.scene).getAncestorScale) == null
      ? undefined
      : _0x37a3f8.call(_0x54fc07)) ?? {};
  return {
    ..._0x778a5f({
      rect: _0x51059d.rect,
      tableTransform: _0x51059d.tableTransform,
      scale: {
        scaleX: aa(_0x1cad44.scaleX, 1),
        scaleY: aa(_0x1cad44.scaleY, 1),
      },
      scenePointToViewportPoint: (_0x3d034b) => ia(_0x3d034b, _0x1c6f66),
    }),
    ...(_0x51059d.horizontalAlign === undefined
      ? {}
      : { horizontalAlign: _0x51059d.horizontalAlign }),
    ...(_0x51059d.verticalAlign === undefined
      ? {}
      : { verticalAlign: _0x51059d.verticalAlign }),
    ...(_0x51059d.isHorizontal === undefined
      ? {}
      : { isHorizontal: _0x51059d.isHorizontal }),
  };
}
function ra(_0x3eb9a7, _0x3bff0a) {
  var _0x4b7184, _0x438444;
  let _0x33f473 =
    _0x3eb9a7 == null || (_0x4b7184 = _0x3eb9a7.getBoundingClientRect) == null
      ? undefined
      : _0x4b7184.call(_0x3eb9a7);
  if (!_0x33f473) return;
  let _0x265a6a =
      _0x3bff0a == null || (_0x438444 = _0x3bff0a.getBoundingClientRect) == null
        ? undefined
        : _0x438444.call(_0x3bff0a),
    _0x11a1e8 = _0x265a6a
      ? _0x265a6a.left +
        ((_0x3bff0a == null ? undefined : _0x3bff0a.clientLeft) ?? 0) -
        ((_0x3bff0a == null ? undefined : _0x3bff0a.scrollLeft) ?? 0)
      : 0,
    _0x2b451b = _0x265a6a
      ? _0x265a6a.top +
        ((_0x3bff0a == null ? undefined : _0x3bff0a.clientTop) ?? 0) -
        ((_0x3bff0a == null ? undefined : _0x3bff0a.scrollTop) ?? 0)
      : 0;
  return { left: _0x33f473.left - _0x11a1e8, top: _0x33f473.top - _0x2b451b };
}
function ia(_0x20b8f5, _0x5b7665) {
  var _0x57f8a0, _0x454d74, _0x2b94ff, _0x47a05f, _0xcdb908;
  let _0x1f4548 =
      (_0x57f8a0 = (_0x454d74 = _0x5b7665.scene).getViewport) == null ||
      (_0x57f8a0 = _0x57f8a0.call(_0x454d74, _0x2f2fe8)) == null ||
      (_0x2b94ff = _0x57f8a0.getAbsoluteVector) == null
        ? undefined
        : _0x2b94ff.call(_0x57f8a0, new _0x7da94b(_0x20b8f5.x, _0x20b8f5.y)),
    _0x1b576c = _0x5b7665.canvasOffset ?? { left: 0, top: 0 };
  if (_0x1f4548)
    return { x: _0x1b576c.left + _0x1f4548.x, y: _0x1b576c.top + _0x1f4548.y };
  let _0x55ed99 =
      ((_0x47a05f = (_0xcdb908 = _0x5b7665.scene).getAncestorScale) == null
        ? undefined
        : _0x47a05f.call(_0xcdb908)) ?? {},
    _0x2e89fe = aa(_0x5b7665.canvasScale, 1),
    _0x3cabbf = aa(_0x55ed99.scaleX, 1) * _0x2e89fe,
    _0x4b6884 = aa(_0x55ed99.scaleY, 1) * _0x2e89fe;
  return {
    x: _0x1b576c.left + _0x20b8f5.x * _0x3cabbf,
    y: _0x1b576c.top + _0x20b8f5.y * _0x4b6884,
  };
}
function aa(_0x5e8dd1, _0x575171) {
  return typeof _0x5e8dd1 == "number" &&
    Number.isFinite(_0x5e8dd1) &&
    _0x5e8dd1 > 0
    ? _0x5e8dd1
    : _0x575171;
}
let oa = class extends _0x482797 {
  constructor(
    _0x592beb,
    _0x229e52,
    _0x2d241c,
    _0x1b3658,
    _0x33f322,
    _0x598025,
    _0x1e371b,
    _0x1486e6,
    _0x4cb6bd,
    _0x5d80c1,
    _0x2e9c53,
    _0x502bbf,
    _0x392605,
    _0x48f7a4,
    _0x1edb17,
    _0x19e557,
  ) {
    (super(),
      (this._renderContext = _0x592beb),
      (this._instanceService = _0x229e52),
      (this._boardElementService = _0x2d241c),
      (this._slideTableSelectionService = _0x1b3658),
      (this._contextMenuService = _0x33f322),
      (this._keyboardService = _0x598025),
      (this._cellEditorBridgeService = _0x1e371b),
      (this._commandService = _0x1486e6),
      (this._contextService = _0x4cb6bd),
      (this._slideTableResourceService = _0x5d80c1),
      (this._boardElementStateService = _0x2e9c53),
      (this._boardUIStateService = _0x502bbf),
      (this._editorUIService = _0x392605),
      (this._layoutService = _0x48f7a4),
      (this._permissionService = _0x1edb17),
      (this._boardImageInsertService = _0x19e557),
      J(this, "_attachScheduled", false),
      J(this, "_objectPointerDisposables", null),
      J(this, "_resizeState", null),
      J(this, "_rangeDragState", null),
      J(this, "_headerDragState", null),
      J(this, "_pendingHeaderMoveState", null),
      J(this, "_rowColumnMoveState", null),
      J(this, "_rowColumnMoveTarget", null),
      J(this, "_tableHandleMoveState", null),
      J(this, "_pendingStage1BodyState", null),
      J(this, "_tableActivationStage", null),
      J(this, "_activeTableContext", null),
      J(this, "_resizeHoverActive", false),
      J(this, "_areTransformerControlsHiddenForTableMove", false),
      J(this, "_areTransformerControlsHiddenForTableStructuralHover", false),
      J(this, "_tableStructuralHoverTransformerObject", null),
      J(this, "_handleClipboardCopy", (_0x5f1fdd) => {
        let _0xdec2bc = this._resolveTableClipboardTarget(_0x5f1fdd);
        !_0xdec2bc ||
          !_0x5f1fdd.clipboardData ||
          !this._canCopyTable(_0xdec2bc.selection) ||
          (_0x5f1fdd.clipboardData["setData"](
            "text/plain",
            _0x583bd2(_0xdec2bc.table, _0xdec2bc.selection),
          ),
          _0x5f1fdd.clipboardData["setData"](
            "text/html",
            _0x4bdcb3(_0xdec2bc.table, _0xdec2bc.selection),
          ),
          _0x5f1fdd.preventDefault(),
          _0x5f1fdd.stopPropagation());
      }),
      J(this, "_handleClipboardCut", async (_0x300258) => {
        let _0x58c4ba = this._resolveTableClipboardTarget(_0x300258);
        if (
          !_0x58c4ba ||
          !_0x300258.clipboardData ||
          !this._canCopyTable(_0x58c4ba.selection)
        )
          return;
        let _0x121a4d = _0x1fd1fe(_0x58c4ba.table, _0x58c4ba.selection);
        _0x121a4d &&
          (_0x300258.clipboardData["setData"](
            "text/plain",
            _0x583bd2(_0x58c4ba.table, _0x58c4ba.selection),
          ),
          _0x300258.clipboardData["setData"](
            "text/html",
            _0x4bdcb3(_0x58c4ba.table, _0x58c4ba.selection),
          ),
          _0x300258.preventDefault(),
          _0x300258.stopPropagation(),
          await this._commitClipboardPatch(_0x58c4ba, _0x121a4d));
      }),
      J(this, "_handleClipboardPaste", async (_0x236574) => {
        let _0x15b070 = this._resolveTableClipboardTarget(_0x236574);
        if (!_0x15b070 || !_0x236574.clipboardData) return;
        let _0x3a0ff6 = _0x236574.clipboardData["getData"]("text/html"),
          _0x4fa87c = _0x236574.clipboardData["getData"]("text/plain"),
          _0x3a4de0 = _0x437ef2(_0x4fa87c) ? await _0x4ae759(_0x4fa87c) : null,
          _0x16817a = _0x3a4de0
            ? null
            : ((_0x3a0ff6
                ? _0x1fa06e(_0x15b070.table, _0x15b070.selection, _0x3a0ff6)
                : null) ??
              _0x257e39(_0x15b070.table, _0x15b070.selection, _0x4fa87c)),
          _0x13f81c = _0x3a4de0
            ? [_0x3a4de0]
            : await xa(_0x236574.clipboardData, _0x3a0ff6);
        (!_0x16817a && _0x13f81c.length === 0) ||
          (_0x236574.preventDefault(),
          _0x236574.stopPropagation(),
          !(
            _0x16817a &&
            !(await this._commitClipboardPatch(_0x15b070, _0x16817a))
          ) && (await this._insertClipboardImages(_0x13f81c, +!!_0x16817a)));
      }),
      this._init());
  }
  dispose() {
    (this._resetTableInteraction(), super.dispose());
  }
  _init() {
    (document.addEventListener("copy", this._handleClipboardCopy, true),
      document.addEventListener("cut", this._handleClipboardCut, true),
      document.addEventListener("paste", this._handleClipboardPaste, true),
      this.disposeWithMe(
        _0x192ad5(() => {
          (document.removeEventListener(
            "copy",
            this._handleClipboardCopy,
            true,
          ),
            document.removeEventListener("cut", this._handleClipboardCut, true),
            document.removeEventListener(
              "paste",
              this._handleClipboardPaste,
              true,
            ));
        }),
      ),
      this._initScenePointerEvents(),
      this.disposeWithMe(
        this._keyboardService["setHandler"]((_0x3ad859) =>
          this._handleKeyboardAction(_0x3ad859),
        ),
      ),
      this.disposeWithMe(
        this._keyboardService["setInputHandler"]((_0x15720b) =>
          this._handleKeyboardInput(_0x15720b),
        ),
      ),
      this.disposeWithMe(
        _0x192ad5(
          this._slideTableSelectionService["selection$"].subscribe(
            (_0x36547d) => {
              (this._syncSelection(_0x36547d),
                _0x36547d && this._syncActivationStageFromSelection(_0x36547d),
                this._keyboardService["setFocused"](
                  !!_0x36547d && _0x36547d.kind !== "text",
                ));
            },
          ),
        ),
      ));
    let _0x138cb6 = this._instanceService["getUnit"](
      this._renderContext["unitId"],
      _0x26c2da.UNIVER_BOARD,
    );
    _0x138cb6 &&
      (this.disposeWithMe(
        _0x192ad5(() => {
          var _0x4d89bd;
          return (_0x4d89bd = this._objectPointerDisposables) == null
            ? undefined
            : _0x4d89bd.dispose();
        }),
      ),
      this._attachObjectPointerEvents(_0x138cb6),
      this._subscribeBoardElementChanges(_0x138cb6),
      this._subscribeBoardElementStateChanges(_0x138cb6),
      this.disposeWithMe(
        _0x192ad5(
          this._boardUIStateService["state$"].subscribe((_0x3ca76d) => {
            _0x3ca76d.interactionMode === "viewing" &&
              this._resetTableInteraction();
          }),
        ),
      ));
  }
  _initScenePointerEvents() {
    var _0xa9ea5f, _0x2d7ad8, _0x1c5ae2, _0x53b46d;
    let _0x40e28b = this._renderContext["scene"],
      _0x143050 =
        (_0xa9ea5f = _0x40e28b.onPointerDown$) == null
          ? undefined
          : _0xa9ea5f.subscribeEvent((_0x1c2bb5, _0x436b97) => {
              this._handleScenePointerDown(_0x1c2bb5, _0x436b97);
            });
    _0x143050 && this.disposeWithMe(_0x192ad5(() => fa(_0x143050)));
    let _0xfa9505 =
      (_0x2d7ad8 = _0x40e28b.onPointerMove$) == null
        ? undefined
        : _0x2d7ad8.subscribeEvent((_0x1cd157) => {
            (this._handlePendingStage1BodyPointerMove(_0x1cd157),
              this._handleTableHandleMovePointerMove(_0x1cd157),
              this._handleRowColumnMovePointerMove(_0x1cd157),
              this._handleHeaderDragPointerMove(_0x1cd157),
              this._handleResizeCursorHover(_0x1cd157),
              this._handleControlHoverPointerMove(_0x1cd157),
              this._handleResizePointerMove(_0x1cd157),
              this._handleRangeDragPointerMove(_0x1cd157));
          });
    _0xfa9505 && this.disposeWithMe(_0x192ad5(() => fa(_0xfa9505)));
    let _0xaa2aa8 =
      (_0x1c5ae2 = _0x40e28b.onPointerUp$) == null
        ? undefined
        : _0x1c5ae2.subscribeEvent((_0xb59675) => {
            (this._finishTableHandleMove(_0xb59675),
              this._finishPendingStage1Body({ focusCell: true }),
              this._finishRowColumnMove({ commit: true }),
              this._handleResizePointerUp(_0xb59675),
              this._finishRangeDrag(),
              this._finishHeaderDrag());
          });
    _0xaa2aa8 && this.disposeWithMe(_0x192ad5(() => fa(_0xaa2aa8)));
    let _0x58eed0 =
      (_0x53b46d = _0x40e28b.onPointerCancel$) == null
        ? undefined
        : _0x53b46d.subscribeEvent(() => {
            (this._finishPendingStage1Body({ focusCell: false }),
              this._cancelTableHandleMove(),
              this._finishRowColumnMove({ commit: false }),
              this._cancelResizePreview(),
              this._resetResizeCursor(),
              this._finishRangeDrag(),
              this._finishHeaderDrag());
          });
    _0x58eed0 && this.disposeWithMe(_0x192ad5(() => fa(_0x58eed0)));
  }
  _handleScenePointerDown(_0x54e017, _0xa14a46) {
    if (this._boardUIStateService["getState"]().interactionMode === "viewing")
      return;
    let _0x391460 = _0x54e017.button ?? 0;
    if ((_0x391460 !== 0 && _0x391460 !== 2) || this._isTableTextEditing())
      return;
    this._tableActivationStage &&
      !this._isActiveTablePointerDown(_0x54e017) &&
      this._resetTableInteraction();
    let _0x57f095 = this._instanceService["getUnit"](
      this._renderContext["unitId"],
      _0x26c2da.UNIVER_BOARD,
    );
    if (!_0x57f095) return;
    let _0x1bbc34 = _0x57f095.getUnitId(),
      _0x43a247 = _0x57f095.getActivePageId(),
      _0x3105b8 = this._boardElementService["getElementData"](
        _0x1bbc34,
        _0x43a247,
      ),
      _0x1d802a = this._getBoardPointVectorFromEvent(_0x54e017);
    for (let _0x2555cf of Object.values(_0x3105b8)) {
      var _0x5cca5a, _0x4824e8;
      if (!sa(_0x2555cf)) continue;
      let _0x3af28e = this._getBoardTableObject(
          _0x517e76(_0x1bbc34, _0x2555cf.elementId),
        ),
        _0xc231f5 = _0x3af28e == null ? undefined : _0x3af28e.getTable(),
        _0x1a1708 =
          _0x3af28e == null
            ? undefined
            : _0x3af28e.hitTestStructuralTriggerAtScenePoint(_0x1d802a);
      if (_0x3af28e && _0xc231f5 && _0x391460 === 0 && _0x2b7332(_0x1a1708)) {
        if (
          this._handleStructuralInsertTrigger(
            _0x1bbc34,
            _0x2555cf,
            _0x3af28e,
            _0x1a1708,
            _0x1d802a,
          )
        ) {
          var _0xdd36a1, _0x1ad9dd;
          ((_0xdd36a1 = _0x54e017.preventDefault) == null ||
            _0xdd36a1.call(_0x54e017),
            (_0x1ad9dd = _0x54e017.stopPropagation) == null ||
              _0x1ad9dd.call(_0x54e017),
            Y(_0xa14a46),
            this._makeSceneDirty());
        }
        return;
      }
      let _0xb4ec73 =
        _0x3af28e == null
          ? undefined
          : _0x3af28e.hitTestControlAtScenePoint(_0x1d802a);
      if (!_0x3af28e || !_0xc231f5 || (!_0xb4ec73 && !_0x1a1708)) continue;
      if (!this._isTableReadyForCellInteraction(_0x57f095, _0x2555cf)) return;
      let _0x4fadc2 = null;
      if (
        (this._slideTableSelectionService["markTableInternalInteraction"](),
        (_0x1a1708 == null ? undefined : _0x1a1708.kind) === "row-header" &&
          _0x1a1708.row !== undefined)
      ) {
        let _0x47fff0 = this._getSelectedHeaderRange(
          _0x2555cf,
          "row",
          _0x1a1708.row,
        );
        if (_0x391460 === 0 && _0x47fff0) {
          var _0x663e94, _0x291792;
          (this._startPendingHeaderMove({
            kind: "row",
            unitId: _0x1bbc34,
            subUnitId: _0x43a247,
            elementId: _0x2555cf.elementId,
            tableId: _0x2555cf.element["tableId"],
            object: _0x3af28e,
            table: _0xc231f5,
            start: _0x47fff0.start,
            end: _0x47fff0.end,
            startPoint: _0x1d802a,
          }),
            (_0x663e94 = _0x54e017.preventDefault) == null ||
              _0x663e94.call(_0x54e017),
            (_0x291792 = _0x54e017.stopPropagation) == null ||
              _0x291792.call(_0x54e017),
            Y(_0xa14a46));
          return;
        }
        let _0x52bddc = _0xe39e09(_0xc231f5, {
          startRow: _0x1a1708.row,
          endRow: _0x1a1708.row,
          startColumn: 0,
          endColumn: Math.max(0, _0xc231f5.columns["length"] - 1),
        });
        ((_0x4fadc2 = this._slideTableSelectionService["selectRows"]({
          unitId: _0x1bbc34,
          subUnitId: _0x43a247,
          elementId: _0x2555cf.elementId,
          tableId: _0x2555cf.element["tableId"],
          startRow: _0x52bddc.startRow,
          endRow: _0x52bddc.endRow,
          columnCount: _0xc231f5.columns["length"],
        })),
          _0x391460 === 0 &&
            (this._headerDragState = {
              kind: "row",
              anchor: _0x1a1708.row,
              object: _0x3af28e,
              selection: _0x4fadc2,
              table: _0xc231f5,
            }));
      } else {
        if (
          (_0x1a1708 == null ? undefined : _0x1a1708.kind) ===
            "column-header" &&
          _0x1a1708.column !== undefined
        ) {
          let _0x326624 = this._getSelectedHeaderRange(
            _0x2555cf,
            "column",
            _0x1a1708.column,
          );
          if (_0x391460 === 0 && _0x326624) {
            var _0x47aa95, _0x132211;
            (this._startPendingHeaderMove({
              kind: "column",
              unitId: _0x1bbc34,
              subUnitId: _0x43a247,
              elementId: _0x2555cf.elementId,
              tableId: _0x2555cf.element["tableId"],
              object: _0x3af28e,
              table: _0xc231f5,
              start: _0x326624.start,
              end: _0x326624.end,
              startPoint: _0x1d802a,
            }),
              (_0x47aa95 = _0x54e017.preventDefault) == null ||
                _0x47aa95.call(_0x54e017),
              (_0x132211 = _0x54e017.stopPropagation) == null ||
                _0x132211.call(_0x54e017),
              Y(_0xa14a46));
            return;
          }
          let _0x55775e = _0xe39e09(_0xc231f5, {
            startRow: 0,
            endRow: Math.max(0, _0xc231f5.rows["length"] - 1),
            startColumn: _0x1a1708.column,
            endColumn: _0x1a1708.column,
          });
          ((_0x4fadc2 = this._slideTableSelectionService["selectColumns"]({
            unitId: _0x1bbc34,
            subUnitId: _0x43a247,
            elementId: _0x2555cf.elementId,
            tableId: _0x2555cf.element["tableId"],
            startColumn: _0x55775e.startColumn,
            endColumn: _0x55775e.endColumn,
            rowCount: _0xc231f5.rows["length"],
          })),
            _0x391460 === 0 &&
              (this._headerDragState = {
                kind: "column",
                anchor: _0x1a1708.column,
                object: _0x3af28e,
                selection: _0x4fadc2,
                table: _0xc231f5,
              }));
        } else
          (_0xb4ec73 == null ? undefined : _0xb4ec73.kind) === "table-handle" &&
            ((_0x4fadc2 = this._slideTableSelectionService["selectTable"]({
              unitId: _0x1bbc34,
              subUnitId: _0x43a247,
              elementId: _0x2555cf.elementId,
              tableId: _0x2555cf.element["tableId"],
              rowCount: _0xc231f5.rows["length"],
              columnCount: _0xc231f5.columns["length"],
            })),
            this._boardElementStateService["selectElements"](
              { unitId: _0x1bbc34, subUnitId: _0x43a247 },
              [_0x2555cf.elementId],
              _0x2555cf.elementId,
            ),
            _0x391460 === 0 &&
              this._startTableHandleMove(
                _0x1bbc34,
                _0x43a247,
                _0x3105b8,
                _0x2555cf,
                _0x3af28e,
                _0x54e017,
              ));
      }
      if (_0x4fadc2) {
        ((_0xb4ec73 == null ? undefined : _0xb4ec73.kind) !== "table-handle" &&
          this._beginTableInternalInteraction(_0x3af28e),
          _0x3af28e.setTableSelection(_0x2e06f0(_0x4fadc2)),
          _0x391460 === 2 && this._openContextMenu(_0x54e017),
          (_0x5cca5a = _0x54e017.preventDefault) == null ||
            _0x5cca5a.call(_0x54e017),
          (_0x4824e8 = _0x54e017.stopPropagation) == null ||
            _0x4824e8.call(_0x54e017),
          Y(_0xa14a46),
          this._makeSceneDirty());
        return;
      }
    }
  }
  _handleStructuralInsertTrigger(
    _0x597f5a,
    _0x24b83d,
    _0x55b0bb,
    _0x2119c5,
    _0xed537b,
  ) {
    let _0x21cc15 = _a(_0x2119c5),
      _0x13589d = false;
    if (_0x2119c5.kind === "row-insert-dot" && _0x21cc15 !== null) {
      let _0x2f3305 = this._slideTableResourceService["getTable"](
        _0x597f5a,
        _0x24b83d.element["tableId"],
      );
      _0x13589d = !!this._commandService["executeCommand"](_0x4c4da9.id, {
        unitId: _0x597f5a,
        subUnitId: _0x24b83d.subUnitId,
        elementId: _0x24b83d.elementId,
        tableId: _0x24b83d.element["tableId"],
        rowIndex: _0x21cc15,
        count: 1,
        height: ha(_0x2f3305, _0x21cc15),
      });
    } else {
      if (_0x2119c5.kind === "column-insert-dot" && _0x21cc15 !== null) {
        let _0xe3e671 = this._slideTableResourceService["getTable"](
          _0x597f5a,
          _0x24b83d.element["tableId"],
        );
        _0x13589d = !!this._commandService["executeCommand"](_0x14054a.id, {
          unitId: _0x597f5a,
          subUnitId: _0x24b83d.subUnitId,
          elementId: _0x24b83d.elementId,
          tableId: _0x24b83d.element["tableId"],
          columnIndex: _0x21cc15,
          count: 1,
          width: ga(_0xe3e671, _0x21cc15),
        });
      }
    }
    if (_0x13589d) {
      let _0x2308b0 = _0x55b0bb.hitTestStructuralTriggerAtScenePoint(_0xed537b),
        _0x306ce0 = _0x5292d2(_0x2b7332(_0x2308b0) ? _0x2308b0 : _0x2119c5);
      (_0x55b0bb.setTableControlState(_0x306ce0),
        _0x55b0bb.setTableControlHover(null),
        _0x55b0bb.setTableCellHover(null));
    }
    return _0x13589d;
  }
  _handleControlHoverPointerMove(_0x5ac00c) {
    if (
      this._resizeState ||
      this._rangeDragState ||
      this._headerDragState ||
      this._pendingHeaderMoveState ||
      this._rowColumnMoveState ||
      this._tableHandleMoveState
    )
      return;
    if (this._isTableTextEditing()) {
      this._clearTableControlHover();
      return;
    }
    let _0x3911a5 = this._instanceService["getUnit"](
      this._renderContext["unitId"],
      _0x26c2da.UNIVER_BOARD,
    );
    if (!_0x3911a5) return;
    let _0x5c0ccc = _0x3911a5.getUnitId(),
      _0x4aec7b = _0x3911a5.getActivePageId(),
      _0x574a2f = this._boardElementService["getElementData"](
        _0x5c0ccc,
        _0x4aec7b,
      ),
      _0x1743be = this._getBoardPointVectorFromEvent(_0x5ac00c),
      _0x174b10 = false,
      _0x327a79 = null;
    (Object.values(_0x574a2f).forEach((_0x297618) => {
      if (!sa(_0x297618)) return;
      let _0x1d9a9b = this._getBoardTableObject(
        _0x517e76(_0x5c0ccc, _0x297618.elementId),
      );
      if (!_0x1d9a9b) return;
      let _0x303513 = _0x1d9a9b.hitTestStructuralTriggerAtScenePoint(_0x1743be),
        _0x26857e = _0x2b7332(_0x303513) ? _0x303513 : null;
      if (
        !this._isTableReadyForCellInteraction(_0x3911a5, _0x297618) &&
        !_0x26857e
      ) {
        let _0x4657e0 = _0x1d9a9b.setTableControlHover(null),
          _0x16c6fc = _0x1d9a9b.setTableControlState(null),
          _0x17ad64 = _0x1d9a9b.setTableCellHover(null);
        _0x174b10 = _0x4657e0 || _0x16c6fc || _0x17ad64 || _0x174b10;
        return;
      }
      let _0x584d32 = _0x1d9a9b.hitTestControlAtScenePoint(_0x1743be),
        _0x1f562e = !!_0x584d32 || !!_0x303513,
        _0x38d2f8 = this._buildStructuralControlState(_0x303513);
      if (
        _0x26857e &&
        !this._isTableReadyForCellInteraction(_0x3911a5, _0x297618)
      ) {
        let _0x2cbe4c = _0x1d9a9b.setTableControlHover(null),
          _0x51174d = _0x1d9a9b.setTableControlState(_0x38d2f8),
          _0x1c8ef1 = _0x1d9a9b.setTableCellHover(null);
        _0x174b10 = _0x2cbe4c || _0x51174d || _0x1c8ef1 || _0x174b10;
        return;
      }
      _0x38d2f8 &&
        !this._isActiveTableContext(_0x3911a5, _0x297618) &&
        this._isSelectedTableElement(_0x3911a5, _0x297618) &&
        (_0x327a79 = _0x1d9a9b);
      let _0x3a026b = _0x1d9a9b.setTableControlHover(
          _0x584d32
            ? {
                kind: _0x584d32.kind,
                row: _0x584d32.row ?? null,
                column: _0x584d32.column ?? null,
              }
            : null,
        ),
        _0x625d45 = _0x1d9a9b.setTableControlState(_0x38d2f8),
        _0x40227a = this._updateTableCellHover(
          _0x5c0ccc,
          _0x4aec7b,
          _0x297618,
          _0x1d9a9b,
          _0x1743be,
          _0x1f562e,
        );
      _0x174b10 = _0x3a026b || _0x625d45 || _0x40227a || _0x174b10;
    }),
      (_0x174b10 =
        this._setTransformerControlsHiddenForTableStructuralHover(_0x327a79) ||
        _0x174b10),
      _0x174b10 && this._makeSceneDirty());
  }
  _updateTableCellHover(
    _0x23fef6,
    _0x137a8f,
    _0x264f52,
    _0x2abab6,
    _0x4bdcfe,
    _0x25fce6,
  ) {
    if (
      _0x25fce6 ||
      !this._isTableActiveForCellHover(_0x23fef6, _0x137a8f, _0x264f52)
    )
      return _0x2abab6.setTableCellHover(null);
    let _0x3a3557 = _0x2abab6.hitTestCellAtScenePoint(_0x4bdcfe);
    return _0x2abab6.setTableCellHover(
      (_0x3a3557 == null ? undefined : _0x3a3557.kind) === "cell"
        ? { row: _0x3a3557.row, column: _0x3a3557.column }
        : null,
    );
  }
  _clearTableControlHover() {
    let _0x499ee2 = this._instanceService["getUnit"](
      this._renderContext["unitId"],
      _0x26c2da.UNIVER_BOARD,
    );
    if (!_0x499ee2) {
      this._setTransformerControlsHiddenForTableStructuralHover(null);
      return;
    }
    let _0x4a60cd = _0x499ee2.getUnitId(),
      _0x1b168f = _0x499ee2.getActivePageId(),
      _0x40b37b = this._boardElementService["getElementData"](
        _0x4a60cd,
        _0x1b168f,
      ),
      _0x1c9378 = false;
    (Object.values(_0x40b37b).forEach((_0x4fc85b) => {
      if (!sa(_0x4fc85b)) return;
      let _0xb9a375 = this._getBoardTableObject(
        _0x517e76(_0x4a60cd, _0x4fc85b.elementId),
      );
      if (!_0xb9a375) return;
      let _0x3eafcd = _0xb9a375.setTableControlHover(null),
        _0x182488 = _0xb9a375.setTableControlState(null),
        _0x19fcec = _0xb9a375.setTableCellHover(null);
      _0x1c9378 = _0x3eafcd || _0x182488 || _0x19fcec || _0x1c9378;
    }),
      (_0x1c9378 =
        this._setTransformerControlsHiddenForTableStructuralHover(null) ||
        _0x1c9378),
      _0x1c9378 && this._makeSceneDirty());
  }
  _isTableActiveForCellHover(_0x5368d6, _0x364537, _0x2e672d) {
    return (
      !!this._tableActivationStage &&
      !!this._activeTableContext &&
      this._activeTableContext["unitId"] === _0x5368d6 &&
      this._activeTableContext["subUnitId"] === _0x364537 &&
      this._activeTableContext["elementId"] === _0x2e672d.elementId &&
      this._activeTableContext["tableId"] === _0x2e672d.element["tableId"]
    );
  }
  _syncActivationStageFromSelection(_0x5c6011) {
    if (
      _0x5c6011.unitId === this._renderContext["unitId"] &&
      ((this._tableActivationStage = _0x5c6011.ranges["length"]
        ? "cell"
        : "table"),
      (this._activeTableContext = {
        unitId: _0x5c6011.unitId,
        subUnitId: _0x5c6011.subUnitId,
        elementId: _0x5c6011.elementId,
        tableId: _0x5c6011.tableId,
      }),
      _0x5c6011.ranges["length"])
    ) {
      let _0x5be8fb = this._getBoardTableObject(
        _0x517e76(_0x5c6011.unitId, _0x5c6011.elementId),
      );
      if (_0x5be8fb) {
        var _0x2cf907, _0x5bb398;
        (_0x2cf907 = (_0x5bb398 = this._renderContext["scene"])
          .getTransformer) == null ||
          (_0x2cf907 = _0x2cf907.call(_0x5bb398)) == null ||
          _0x2cf907.detachFrom(_0x5be8fb);
      }
    }
  }
  _subscribeBoardElementStateChanges(_0x1a951f) {
    let _0x173655 = this._boardElementStateService["state$"];
    if (!_0x173655) return;
    let _0x528e83 = _0x173655.subscribe((_0x3cecee) => {
      this._handleBoardElementStateChange(_0x3cecee);
    });
    this.disposeWithMe(_0x192ad5(() => _0x528e83.unsubscribe()));
  }
  _handleBoardElementStateChange(_0x212de0) {
    var _0x262f0a;
    let _0x300c3c = this._slideTableSelectionService["getSelection"](),
      _0x415b22 = _0x300c3c
        ? {
            unitId: _0x300c3c.unitId,
            subUnitId: _0x300c3c.subUnitId,
            elementId: _0x300c3c.elementId,
            tableId: _0x300c3c.tableId,
          }
        : this._activeTableContext;
    if (!_0x415b22 || !this._tableActivationStage) return;
    let _0x154a37 =
      ((_0x262f0a = _0x212de0.context) == null
        ? undefined
        : _0x262f0a.unitId) === _0x415b22.unitId &&
      _0x212de0.context["subUnitId"] === _0x415b22.subUnitId &&
      _0x212de0.selectedIds["includes"](_0x415b22.elementId);
    if (
      _0x154a37 ||
      this._slideTableSelectionService["isTableInternalInteractionActive"]()
    ) {
      !_0x154a37 &&
        _0x212de0.selectedIds["length"] > 0 &&
        this._resetTableInteraction();
      return;
    }
    this._resetTableInteraction();
  }
  _isActiveTablePointerDown(_0x5406e0) {
    let _0x441d8b = this._activeTableContext;
    if (!_0x441d8b) return false;
    let _0x583c47 = this._getBoardTableObject(
      _0x517e76(_0x441d8b.unitId, _0x441d8b.elementId),
    );
    if (!_0x583c47) return false;
    let _0x582d97 = this._getBoardPointVectorFromEvent(_0x5406e0);
    return (
      _0x583c47.isHit(_0x582d97) ||
      va(_0x583c47, _0x582d97) ||
      !!_0x583c47.hitTestCellAtScenePoint(_0x582d97) ||
      !!_0x583c47.hitTestControlAtScenePoint(_0x582d97) ||
      !!_0x583c47.hitTestStructuralTriggerAtScenePoint(_0x582d97) ||
      !!_0x583c47.hitTestFloatingStructuralTriggerAtScenePoint(_0x582d97)
    );
  }
  _resetTableInteraction() {
    let _0x468bb7 = this._slideTableSelectionService["getSelection"](),
      _0x2f87bc = [
        _0x468bb7
          ? {
              unitId: _0x468bb7.unitId,
              subUnitId: _0x468bb7.subUnitId,
              elementId: _0x468bb7.elementId,
            }
          : null,
        this._activeTableContext
          ? {
              unitId: this._activeTableContext["unitId"],
              subUnitId: this._activeTableContext["subUnitId"],
              elementId: this._activeTableContext["elementId"],
            }
          : null,
      ].filter((_0xe90333) => !!_0xe90333),
      _0x26687 = _0x2f87bc.filter(
        (_0x4acd44, _0xeef209) =>
          _0x2f87bc.findIndex(
            (_0x4f53cb) =>
              _0x4f53cb.unitId === _0x4acd44.unitId &&
              _0x4f53cb.subUnitId === _0x4acd44.subUnitId &&
              _0x4f53cb.elementId === _0x4acd44.elementId,
          ) === _0xeef209,
      );
    (this._cancelActiveEditor(),
      this._finishRangeDrag(),
      this._finishHeaderDrag(),
      this._finishPendingStage1Body({ focusCell: false }),
      this._cancelTableHandleMove(),
      this._finishRowColumnMove({ commit: false }),
      this._cancelResizePreview(),
      (this._pendingHeaderMoveState = null),
      (this._tableActivationStage = null),
      (this._activeTableContext = null),
      this._resetResizeCursor(),
      this._setTransformerControlsHiddenForTableStructuralHover(null),
      _0x26687.forEach((_0x2cfdf0) => {
        let _0x36e6a5 = this._getBoardTableObject(
          _0x517e76(_0x2cfdf0.unitId, _0x2cfdf0.elementId),
        );
        (_0x36e6a5 == null || _0x36e6a5.setEditingCell(null),
          _0x36e6a5 == null || _0x36e6a5.setPreviewTable(null),
          _0x36e6a5 == null || _0x36e6a5.setTableSelection(null),
          _0x36e6a5 == null || _0x36e6a5.setTableCellHover(null),
          _0x36e6a5 == null || _0x36e6a5.setTableControlState(null),
          _0x36e6a5 == null || _0x36e6a5.setTableControlHover(null));
      }),
      this._slideTableSelectionService["clear"](),
      this._keyboardService["setFocused"](false),
      this._makeSceneDirty());
  }
  _buildStructuralControlState(_0x35652f) {
    if (
      !_0x35652f ||
      (_0x35652f.kind !== "row-header" &&
        _0x35652f.kind !== "column-header" &&
        _0x35652f.kind !== "row-insert-dot" &&
        _0x35652f.kind !== "column-insert-dot")
    )
      return null;
    let _0x25fd7d = _a(_0x35652f);
    return {
      visible: true,
      hoveredTrigger: _0x35652f,
      insertGuide:
        _0x35652f.kind === "row-insert-dot" && _0x25fd7d !== null
          ? { kind: "row", index: _0x25fd7d }
          : _0x35652f.kind === "column-insert-dot" && _0x25fd7d !== null
            ? { kind: "column", index: _0x25fd7d }
            : null,
    };
  }
  _handleHeaderDragPointerMove(_0x349f47) {
    let _0x250f53 = this._headerDragState;
    if (!_0x250f53) return;
    if (
      "buttons" in _0x349f47 &&
      _0x349f47.buttons !== undefined &&
      (_0x349f47.buttons & 1) != 1
    ) {
      this._finishHeaderDrag();
      return;
    }
    let _0x475c6d = _0x250f53.object[
      "hitTestFloatingStructuralTriggerAtScenePoint"
    ](this._getBoardPointVectorFromEvent(_0x349f47));
    if (!_0x475c6d) return;
    let _0x429522 = null;
    if (
      _0x250f53.kind === "row" &&
      _0x475c6d.kind === "row-header" &&
      _0x475c6d.row !== undefined
    ) {
      let _0x172c09 = _0xe39e09(_0x250f53.table, {
        startRow: _0x250f53.anchor,
        endRow: _0x475c6d.row,
        startColumn: 0,
        endColumn: Math.max(0, _0x250f53.table["columns"].length - 1),
      });
      _0x429522 = this._slideTableSelectionService["selectRows"]({
        unitId: _0x250f53.selection["unitId"],
        subUnitId: _0x250f53.selection["subUnitId"],
        elementId: _0x250f53.selection["elementId"],
        tableId: _0x250f53.selection["tableId"],
        startRow: _0x172c09.startRow,
        endRow: _0x172c09.endRow,
        columnCount: _0x250f53.table["columns"].length,
      });
    } else {
      if (
        _0x250f53.kind === "column" &&
        _0x475c6d.kind === "column-header" &&
        _0x475c6d.column !== undefined
      ) {
        let _0x44c4fa = _0xe39e09(_0x250f53.table, {
          startRow: 0,
          endRow: Math.max(0, _0x250f53.table["rows"].length - 1),
          startColumn: _0x250f53.anchor,
          endColumn: _0x475c6d.column,
        });
        _0x429522 = this._slideTableSelectionService["selectColumns"]({
          unitId: _0x250f53.selection["unitId"],
          subUnitId: _0x250f53.selection["subUnitId"],
          elementId: _0x250f53.selection["elementId"],
          tableId: _0x250f53.selection["tableId"],
          startColumn: _0x44c4fa.startColumn,
          endColumn: _0x44c4fa.endColumn,
          rowCount: _0x250f53.table["rows"].length,
        });
      }
    }
    _0x429522 &&
      ((_0x250f53.selection = _0x429522),
      _0x250f53.object["setTableSelection"](_0x2e06f0(_0x429522)),
      this._makeSceneDirty());
  }
  _finishHeaderDrag() {
    this._headerDragState = null;
  }
  _getSelectedHeaderRange(_0x5974f8, _0x3ab5db, _0x10f325) {
    let _0x1bdda5 = this._slideTableSelectionService["getSelection"]();
    if (
      !_0x1bdda5 ||
      _0x1bdda5.kind !== _0x3ab5db ||
      _0x1bdda5.unitId !== this._renderContext["unitId"] ||
      _0x1bdda5.elementId !== _0x5974f8.elementId ||
      _0x1bdda5.tableId !== _0x5974f8.element["tableId"]
    )
      return null;
    for (let _0x163548 of _0x1bdda5.ranges) {
      let _0x17bdac =
          _0x3ab5db === "row"
            ? Math.min(_0x163548.startRow, _0x163548.endRow)
            : Math.min(_0x163548.startColumn, _0x163548.endColumn),
        _0xc60b00 =
          _0x3ab5db === "row"
            ? Math.max(_0x163548.startRow, _0x163548.endRow)
            : Math.max(_0x163548.startColumn, _0x163548.endColumn);
      if (_0x10f325 >= _0x17bdac && _0x10f325 <= _0xc60b00)
        return { start: _0x17bdac, end: _0xc60b00 };
    }
    return null;
  }
  _startPendingHeaderMove(_0x2040a3) {
    (this._finishRowColumnMove({ commit: false }),
      (this._pendingHeaderMoveState = _0x2040a3),
      _0x2040a3.object["setTableControlState"]({
        visible: true,
        selectedStructuralRange: {
          kind: _0x2040a3.kind,
          start: _0x2040a3.start,
          end: _0x2040a3.end,
        },
      }),
      this._makeSceneDirty());
  }
  _handleRowColumnMovePointerMove(_0x286b7c) {
    let _0x42c773 = this._rowColumnMoveState ?? this._pendingHeaderMoveState;
    if (!_0x42c773) return;
    if (
      "buttons" in _0x286b7c &&
      _0x286b7c.buttons !== undefined &&
      (_0x286b7c.buttons & 1) != 1
    ) {
      this._finishRowColumnMove({ commit: false });
      return;
    }
    let _0x4f2f18 = this._getBoardPointVectorFromEvent(
      _0x286b7c,
      _0x42c773.startPoint,
    );
    if (!this._rowColumnMoveState) {
      let _0x411afd =
          _0x4f2f18.x - this._pendingHeaderMoveState["startPoint"].x,
        _0x286e83 = _0x4f2f18.y - this._pendingHeaderMoveState["startPoint"].y;
      if (Math.hypot(_0x411afd, _0x286e83) < 8) return;
      ((this._rowColumnMoveState = { ...this._pendingHeaderMoveState }),
        (this._pendingHeaderMoveState = null));
    }
    let _0x23f19d = this._rowColumnMoveState;
    if (!_0x23f19d) return;
    let _0x3fb51d = this._resolveRowColumnMoveTarget(
        _0x23f19d.table,
        _0x23f19d.object,
        _0x23f19d.kind,
        _0x4f2f18,
      ),
      _0x3f4d3e =
        !!_0x3fb51d &&
        (_0x3fb51d.kind === "row"
          ? _0x439788(
              _0x23f19d.table,
              { startRow: _0x23f19d.start, endRow: _0x23f19d.end },
              { row: _0x3fb51d.targetRow, position: _0x3fb51d.position },
            )
          : _0x18ec0e(
              _0x23f19d.table,
              { startColumn: _0x23f19d.start, endColumn: _0x23f19d.end },
              { column: _0x3fb51d.targetColumn, position: _0x3fb51d.position },
            ));
    ((this._rowColumnMoveTarget = _0x3f4d3e ? _0x3fb51d : null),
      _0x23f19d.object["setTableControlState"](
        _0x3f4d3e && _0x3fb51d
          ? {
              visible: true,
              selectedStructuralRange: {
                kind: _0x23f19d.kind,
                start: _0x23f19d.start,
                end: _0x23f19d.end,
              },
              reorderGuide: {
                kind: _0x3fb51d.kind,
                index: _0x3fb51d.guideIndex,
              },
            }
          : {
              visible: true,
              selectedStructuralRange: {
                kind: _0x23f19d.kind,
                start: _0x23f19d.start,
                end: _0x23f19d.end,
              },
            },
      ),
      this._makeSceneDirty());
  }
  _finishRowColumnMove(_0x58d085) {
    let _0x59e87e = this._rowColumnMoveState,
      _0x82b785 = this._rowColumnMoveTarget,
      _0x508883 = this._pendingHeaderMoveState;
    _0x58d085.commit &&
      _0x59e87e &&
      _0x82b785 &&
      this._commandService &&
      (_0x59e87e.kind === "row" && _0x82b785.kind === "row"
        ? this._commandService["executeCommand"](_0x5678c5.id, {
            unitId: _0x59e87e.unitId,
            tableId: _0x59e87e.tableId,
            startRow: _0x59e87e.start,
            endRow: _0x59e87e.end,
            targetRow: _0x82b785.targetRow,
            position: _0x82b785.position,
          })
        : _0x59e87e.kind === "column" &&
          _0x82b785.kind === "column" &&
          this._commandService["executeCommand"](_0x4f18d9.id, {
            unitId: _0x59e87e.unitId,
            tableId: _0x59e87e.tableId,
            startColumn: _0x59e87e.start,
            endColumn: _0x59e87e.end,
            targetColumn: _0x82b785.targetColumn,
            position: _0x82b785.position,
          }));
    let _0x119781 =
      (_0x59e87e == null ? undefined : _0x59e87e.object) ??
      (_0x508883 == null ? undefined : _0x508883.object);
    ((this._pendingHeaderMoveState = null),
      (this._rowColumnMoveState = null),
      (this._rowColumnMoveTarget = null),
      _0x119781 &&
        (_0x119781.setTableControlState(null), this._makeSceneDirty()));
  }
  _resolveRowColumnMoveTarget(_0x1e3a15, _0x489f06, _0x116f10, _0x5b7931) {
    let _0x363951 = this._resolveObjectPoint(
        _0x489f06,
        _0x5b7931.x,
        _0x5b7931.y,
      ),
      _0x53890d =
        _0x116f10 === "row"
          ? pa(
              _0x1e3a15.rows["map"]((_0x4f5147) => _0x4f5147.height ?? 24),
              _0x489f06.height,
            )
          : pa(
              _0x1e3a15.columns["map"]((_0x3dd3b2) => _0x3dd3b2.width),
              _0x489f06.width,
            );
    if (_0x53890d.length === 0) return null;
    let _0xecf714 = ma(
        _0x53890d,
        _0x116f10 === "row" ? _0x363951.y : _0x363951.x,
      ),
      _0x18ab72 =
        _0xecf714 <= 0
          ? 0
          : _0xecf714 >= _0x53890d.length
            ? _0x53890d.length - 1
            : _0xecf714,
      _0x2ad446 =
        _0xecf714 <= 0
          ? "before"
          : _0xecf714 >= _0x53890d.length
            ? "after"
            : "before";
    return _0x116f10 === "row"
      ? {
          kind: _0x116f10,
          targetRow: _0x18ab72,
          position: _0x2ad446,
          guideIndex: _0xecf714,
        }
      : {
          kind: _0x116f10,
          targetColumn: _0x18ab72,
          position: _0x2ad446,
          guideIndex: _0xecf714,
        };
  }
  _startTableHandleMove(
    _0x265678,
    _0x2015c3,
    _0x4d3acf,
    _0x4bcb19,
    _0x55390b,
    _0x528bf0,
  ) {
    let _0x2a6d8e = _0x4bcb19.transform ?? _0x4bcb19.element["transform"];
    this._tableHandleMoveState = {
      unitId: _0x265678,
      subUnitId: _0x2015c3,
      elementId: _0x4bcb19.elementId,
      object: _0x55390b,
      element: _0x4bcb19.element,
      elementData: _0x4d3acf,
      startPointer: {
        ...this._getBoardPointFromEvent(_0x528bf0, {
          x: _0x55390b.left,
          y: _0x55390b.top,
        }),
      },
      startTransform: {
        ...ya(_0x2a6d8e),
        left: _0x55390b.left,
        top: _0x55390b.top,
        width: _0x55390b.width,
        height: _0x55390b.height,
      },
      moved: false,
    };
  }
  _handleTableHandleMovePointerMove(_0x40bd11) {
    let _0x58146a = this._tableHandleMoveState;
    if (!_0x58146a) return;
    if (
      "buttons" in _0x40bd11 &&
      _0x40bd11.buttons !== undefined &&
      (_0x40bd11.buttons & 1) != 1
    ) {
      this._finishTableHandleMove(_0x40bd11);
      return;
    }
    let _0x3f9ece = this._buildTableHandleMoveTransform(_0x58146a, _0x40bd11);
    if (!_0x3f9ece) return;
    let _0x4a2a06 = _0x3f9ece.left - _0x58146a.startTransform["left"],
      _0xe9b519 = _0x3f9ece.top - _0x58146a.startTransform["top"];
    (!_0x58146a.moved && Math.hypot(_0x4a2a06, _0xe9b519) < 8) ||
      (_0x58146a.moved ||
        ((_0x58146a.moved = true), this._beginTableHandleTransform()),
      this._applyTableHandleMovePreview(_0x58146a, _0x3f9ece));
  }
  async _finishTableHandleMove(_0x10ce5d) {
    let _0x11afcf = this._tableHandleMoveState;
    if (!_0x11afcf) return;
    this._tableHandleMoveState = null;
    let _0x81643f = _0x11afcf.moved
      ? this._buildTableHandleMoveTransform(_0x11afcf, _0x10ce5d)
      : null;
    if (!_0x81643f || !_0x11afcf.moved) {
      (this._restoreTableHandleMovePreview(_0x11afcf),
        this._finishTableHandleTransform());
      return;
    }
    this._applyTableHandleMovePreview(_0x11afcf, _0x81643f);
    let _0x554848 = {
        ..._0x81643f,
        left: _0x11afcf.object["left"],
        top: _0x11afcf.object["top"],
        width: _0x11afcf.object["width"],
        height: _0x11afcf.object["height"],
      },
      _0x4d2798 = this._resolveTableHandleMoveLocalTransform(
        _0x11afcf,
        _0x554848,
      );
    try {
      (await this._commandService["executeCommand"](_0x819c09.id, {
        unitId: _0x11afcf.unitId,
        subUnitId: _0x11afcf.subUnitId,
        updates: [
          {
            elementId: _0x11afcf.elementId,
            element: {
              ..._0x11afcf.element,
              transform: { ..._0x11afcf.element["transform"], ..._0x4d2798 },
            },
            transform: _0x4d2798,
          },
        ],
      }),
        this._makeSceneDirty());
    } finally {
      this._finishTableHandleTransform();
    }
  }
  _cancelTableHandleMove() {
    let _0x231580 = this._tableHandleMoveState;
    _0x231580 &&
      ((this._tableHandleMoveState = null),
      this._restoreTableHandleMovePreview(_0x231580),
      this._finishTableHandleTransform());
  }
  _beginTableHandleTransform() {
    var _0x3612bc, _0x525a43, _0x188354, _0x11cb43;
    if (
      (this._boardElementStateService["setTransforming"](true),
      this._areTransformerControlsHiddenForTableMove)
    )
      return;
    let _0x4453d4 =
      (_0x3612bc = (_0x525a43 = this._renderContext["scene"]).getTransformer) ==
      null
        ? undefined
        : _0x3612bc.call(_0x525a43);
    (_0x4453d4 == null ||
      (_0x188354 = _0x4453d4._hideControl) == null ||
      _0x188354.call(_0x4453d4),
      _0x4453d4 == null ||
        (_0x11cb43 = _0x4453d4.clearControls) == null ||
        _0x11cb43.call(_0x4453d4),
      (this._areTransformerControlsHiddenForTableMove = true));
  }
  _finishTableHandleTransform() {
    var _0x19ec17, _0x453099, _0xd30bd7;
    (this._boardElementStateService["setTransforming"](false),
      this._areTransformerControlsHiddenForTableMove &&
        ((this._areTransformerControlsHiddenForTableMove = false),
        (_0x19ec17 = (_0x453099 = this._renderContext["scene"])
          .getTransformer) == null ||
          (_0x19ec17 = _0x19ec17.call(_0x453099)) == null ||
          (_0xd30bd7 = _0x19ec17.refreshControls) == null ||
          _0xd30bd7.call(_0x19ec17)));
  }
  _setTransformerControlsHiddenForTableStructuralHover(_0x3786ca) {
    var _0x166075, _0x57f4ed;
    let _0x59cdd9 = this._tableStructuralHoverTransformerObject;
    if (
      _0x59cdd9 === _0x3786ca &&
      this._areTransformerControlsHiddenForTableStructuralHover === !!_0x3786ca
    )
      return false;
    let _0x278e62 =
      (_0x166075 = (_0x57f4ed = this._renderContext["scene"]).getTransformer) ==
      null
        ? undefined
        : _0x166075.call(_0x57f4ed);
    if (_0x59cdd9 && _0x59cdd9 !== _0x3786ca) {
      var _0x300671, _0x3088c6;
      (_0x278e62 == null ||
        (_0x300671 = _0x278e62.attachTo) == null ||
        _0x300671.call(_0x278e62, _0x59cdd9),
        _0x278e62 == null ||
          (_0x3088c6 = _0x278e62.setSelectedControl) == null ||
          _0x3088c6.call(_0x278e62, _0x59cdd9));
    }
    if (
      ((this._tableStructuralHoverTransformerObject = _0x3786ca), _0x3786ca)
    ) {
      var _0x7ba59c, _0x223020, _0x3f0ff6;
      ((this._areTransformerControlsHiddenForTableStructuralHover = true),
        _0x278e62 == null ||
          (_0x7ba59c = _0x278e62.detachFrom) == null ||
          _0x7ba59c.call(_0x278e62, _0x3786ca),
        _0x278e62 == null ||
          (_0x223020 = _0x278e62._hideControl) == null ||
          _0x223020.call(_0x278e62),
        _0x278e62 == null ||
          (_0x3f0ff6 = _0x278e62.clearControls) == null ||
          _0x3f0ff6.call(_0x278e62));
    } else {
      var _0xf6d0e2;
      ((this._areTransformerControlsHiddenForTableStructuralHover = false),
        _0x278e62 == null ||
          (_0xf6d0e2 = _0x278e62.refreshControls) == null ||
          _0xf6d0e2.call(_0x278e62));
    }
    return true;
  }
  _buildTableHandleMoveTransform(_0x723e39, _0x5c5175) {
    let { x: _0x289b63, y: _0xeff6e0 } = this._getBoardPointFromEvent(
        _0x5c5175,
        _0x723e39.startPointer,
      ),
      _0x5932e3 = _0x289b63 - _0x723e39.startPointer["x"],
      _0x3e29ec = _0xeff6e0 - _0x723e39.startPointer["y"];
    return !Number.isFinite(_0x5932e3) || !Number.isFinite(_0x3e29ec)
      ? null
      : {
          ..._0x723e39.startTransform,
          left: _0x723e39.startTransform["left"] + _0x5932e3,
          top: _0x723e39.startTransform["top"] + _0x3e29ec,
        };
  }
  _applyTableHandleMovePreview(_0x200151, _0x59291c) {
    var _0x4feaab, _0x2e28ce, _0x540331;
    (_0x200151.object["transformByState"]({
      left: _0x59291c.left,
      top: _0x59291c.top,
      width: _0x59291c.width,
      height: _0x59291c.height,
      angle: _0x59291c.rotation ?? 0,
      flipX: _0x59291c.flipX,
      flipY: _0x59291c.flipY,
    }),
      (_0x4feaab = (_0x2e28ce = this._renderContext["scene"]).getTransformer) ==
        null ||
        (_0x4feaab = _0x4feaab.call(_0x2e28ce)) == null ||
        (_0x540331 = _0x4feaab.changeNotification) == null ||
        _0x540331.call(_0x4feaab),
      this._makeSceneDirty());
  }
  _restoreTableHandleMovePreview(_0x5ec6c8) {
    this._applyTableHandleMovePreview(_0x5ec6c8, _0x5ec6c8.startTransform);
  }
  _resolveTableHandleMoveLocalTransform(_0x260ef2, _0x52b199) {
    let _0x11419d = _0x260ef2.element["parentId"],
      _0x44bb39 = ya(
        _0xecdbee(_0x260ef2.elementData, {
          parentId: _0x11419d,
          worldTransform: _0x52b199,
        }),
      );
    return (
      _0x260ef2.startTransform["rotation"] === undefined &&
        delete _0x44bb39.rotation,
      _0x260ef2.startTransform["flipX"] === undefined && delete _0x44bb39.flipX,
      _0x260ef2.startTransform["flipY"] === undefined && delete _0x44bb39.flipY,
      _0x44bb39
    );
  }
  _syncSelection(_0x2e33b2) {
    let { unitId: _0x124eee } = this._renderContext,
      _0x7cf5c7 = this._instanceService["getUnit"](
        _0x124eee,
        _0x26c2da.UNIVER_BOARD,
      );
    if (!_0x7cf5c7) return;
    let _0x37c2ad = _0x7cf5c7.getActivePageId(),
      _0x348539 = this._boardElementService["getElementData"](
        _0x124eee,
        _0x37c2ad,
      ),
      _0x1ee5a = false;
    (Object.values(_0x348539).forEach((_0x419dfd) => {
      if (!sa(_0x419dfd)) return;
      let _0x450d2b = this._getBoardTableObject(
        _0x517e76(_0x124eee, _0x419dfd.elementId),
      );
      if (!_0x450d2b) return;
      let _0x23c372 = _0x2e06f0(_0x2e33b2);
      if (!(
        _0x2e33b2 &&
        _0x23c372 &&
        _0x2e33b2.unitId === _0x124eee &&
        _0x2e33b2.subUnitId === _0x37c2ad &&
        _0x2e33b2.elementId === _0x419dfd.elementId &&
        _0x2e33b2.tableId === _0x419dfd.element["tableId"]
      )) {
        (_0x450d2b.setTableSelection(null), (_0x1ee5a = true));
        return;
      }
      (_0x450d2b.setTableSelection(_0x23c372), (_0x1ee5a = true));
    }),
      _0x1ee5a && this._makeSceneDirty());
  }
  _getBoardTableObject(_0x25db1c) {
    var _0x5aacf6, _0x4fec05;
    let _0x583032 = this._renderContext["scene"],
      _0xf20503 =
        ((_0x5aacf6 = _0x583032.getObjectIncludeInGroup) == null
          ? undefined
          : _0x5aacf6.call(_0x583032, _0x25db1c)) ??
        ((_0x4fec05 = _0x583032.getObject) == null
          ? undefined
          : _0x4fec05.call(_0x583032, _0x25db1c));
    return _0xf20503 instanceof Zi ? _0xf20503 : null;
  }
  _makeSceneDirty() {
    var _0x1afa80, _0x4a080f;
    (_0x1afa80 = (_0x4a080f = this._renderContext["scene"]).makeDirty) ==
      null || _0x1afa80.call(_0x4a080f, true);
  }
  _subscribeBoardElementChanges(_0x3fbabf) {
    let _0x5c29e3 = this._boardElementService,
      _0x15e30b = (_0x111118) => {
        if (!_0x111118) return;
        let _0x2699ce = _0x111118.subscribe((_0x201f5c) => {
          _0x201f5c.some(
            (_0x534643) => _0x534643.unitId === this._renderContext["unitId"],
          ) && this._scheduleAttachObjectPointerEvents(_0x3fbabf);
        });
        this.disposeWithMe(_0x192ad5(() => _0x2699ce.unsubscribe()));
      };
    (_0x15e30b(_0x5c29e3.elementAdd$),
      _0x15e30b(_0x5c29e3.elementUpdate$),
      _0x15e30b(_0x5c29e3.elementRemove$));
  }
  _scheduleAttachObjectPointerEvents(_0xadf642) {
    this._attachScheduled ||
      ((this._attachScheduled = true),
      Promise.resolve().then(() => {
        ((this._attachScheduled = false),
          this._attachObjectPointerEvents(_0xadf642));
      }));
  }
  _attachObjectPointerEvents(_0x302c44) {
    var _0x52a843;
    let { unitId: _0x530dea } = this._renderContext,
      _0xb33ca8 = _0x302c44.getActivePageId(),
      _0x282dec = this._boardElementService["getElementData"](
        _0x530dea,
        _0xb33ca8,
      ),
      _0x42af2b = new _0x59e9e2();
    ((_0x52a843 = this._objectPointerDisposables) == null ||
      _0x52a843.dispose(),
      (this._objectPointerDisposables = _0x42af2b),
      Object.values(_0x282dec).forEach((_0x2283cf) => {
        if (!sa(_0x2283cf)) return;
        let _0x5dc19b = this._getBoardTableObject(
          _0x517e76(_0x530dea, _0x2283cf.elementId),
        );
        _0x5dc19b &&
          (_0x42af2b.add(
            _0x5dc19b.onPointerDown$["subscribeEvent"]({
              priority: -2,
              next: ([_0x22961e, _0x40658f]) => {
                this._boardUIStateService["getState"]().interactionMode !==
                  "viewing" &&
                  this._handleTablePointerDown(
                    _0x302c44,
                    _0x2283cf,
                    _0x5dc19b,
                    _0x22961e,
                    _0x40658f,
                  );
              },
            }),
          ),
          _0x42af2b.add(
            _0x5dc19b.onDblclick$["subscribeEvent"]({
              priority: -2,
              next: ([_0x304964, _0x19b42e]) => {
                this._boardUIStateService["getState"]().interactionMode !==
                  "viewing" &&
                  this._handleTableDoubleClick(
                    _0x302c44,
                    _0x2283cf,
                    _0x5dc19b,
                    _0x304964,
                    _0x19b42e,
                  );
              },
            }),
          ));
      }));
  }
  _handleTablePointerDown(
    _0x525c85,
    _0x42f6b3,
    _0x4c3779,
    _0x671aa9,
    _0x20f9cf,
  ) {
    var _0x2de3c0, _0x127264;
    let _0x12957d = _0x671aa9.button ?? 0;
    if (
      (_0x12957d !== 0 && _0x12957d !== 2) ||
      (_0x12957d === 0 &&
        this._handleCellEditorPointerDown(
          _0x525c85,
          _0x42f6b3,
          _0x4c3779,
          _0x671aa9,
          _0x20f9cf,
        )) ||
      (_0x12957d === 0 && this._isTableTextEditing())
    )
      return;
    let _0xffdcb5 = this._getBoardPointVectorFromEvent(_0x671aa9),
      _0x2d451 = _0x4c3779.hitTestStructuralTriggerAtScenePoint(_0xffdcb5);
    if (_0x12957d === 0 && _0x2b7332(_0x2d451)) {
      if (
        this._handleStructuralInsertTrigger(
          _0x525c85.getUnitId(),
          _0x42f6b3,
          _0x4c3779,
          _0x2d451,
          _0xffdcb5,
        )
      ) {
        var _0x41a1c4, _0x2533cd;
        ((_0x41a1c4 = _0x671aa9.preventDefault) == null ||
          _0x41a1c4.call(_0x671aa9),
          (_0x2533cd = _0x671aa9.stopPropagation) == null ||
            _0x2533cd.call(_0x671aa9),
          Y(_0x20f9cf),
          this._makeSceneDirty());
      }
      return;
    }
    if (
      _0x12957d === 0 &&
      this._startResizeIfHit(_0x525c85, _0x42f6b3, _0x4c3779, _0x671aa9)
    ) {
      Y(_0x20f9cf);
      return;
    }
    if (
      _0x12957d === 0 &&
      !this._isTableReadyForCellInteraction(_0x525c85, _0x42f6b3)
    ) {
      this._activateTableStage(
        _0x525c85,
        _0x42f6b3,
        _0x4c3779,
        _0x671aa9,
        _0x20f9cf,
      );
      return;
    }
    if (_0x12957d === 0 && this._tableActivationStage === "table") {
      this._startPendingStage1Body(
        _0x525c85,
        _0x42f6b3,
        _0x4c3779,
        _0x671aa9,
        _0x20f9cf,
      );
      return;
    }
    if (
      _0x12957d === 2 &&
      !this._isTableReadyForCellInteraction(_0x525c85, _0x42f6b3)
    )
      return;
    let _0x2346c4 = this._selectCellFromTableEvent(
      _0x525c85,
      _0x42f6b3,
      _0x4c3779,
      _0x671aa9,
    );
    if (_0x2346c4) {
      if (_0x12957d === 0) {
        var _0x36bc96, _0x28224b;
        (_0x36bc96 = (_0x28224b = this._contextMenuService).hideContextMenu) ==
          null || _0x36bc96.call(_0x28224b);
      }
      if (
        ((_0x2de3c0 = _0x671aa9.preventDefault) == null ||
          _0x2de3c0.call(_0x671aa9),
        (_0x127264 = _0x671aa9.stopPropagation) == null ||
          _0x127264.call(_0x671aa9),
        Y(_0x20f9cf),
        this._beginTableInternalInteraction(_0x4c3779),
        this._enterCellStage(_0x525c85, _0x42f6b3),
        _0x12957d === 0)
      ) {
        let _0x33d647 =
          _0x2346c4.focus ?? _0x2346c4.anchor ?? _0xc2ed85(_0x2346c4);
        _0x33d647 &&
          (this._rangeDragState = {
            selection: _0x2346c4,
            object: _0x4c3779,
            anchor: _0x33d647,
            startPoint: this._getBoardPointFromEvent(_0x671aa9),
            activated: false,
          });
      }
      _0x12957d === 2 && this._openContextMenu(_0x671aa9);
    }
  }
  _handleCellEditorPointerDown(
    _0x3a20fb,
    _0x2160c5,
    _0x4d016e,
    _0xafafb0,
    _0x23a372,
  ) {
    var _0x5e8b02, _0xf43820;
    let _0x4bcca7 = this._getActiveEditingSession();
    if (
      !_0x4bcca7 ||
      _0x4bcca7.unitId !== _0x3a20fb.getUnitId() ||
      _0x4bcca7.subUnitId !== _0x3a20fb.getActivePageId() ||
      _0x4bcca7.elementId !== _0x2160c5.elementId ||
      _0x4bcca7.tableId !== _0x2160c5.element["tableId"]
    )
      return false;
    let _0x1dc20a = this._buildCellSelectionFromTableEvent(
        _0x3a20fb,
        _0x2160c5,
        _0x4d016e,
        _0xafafb0,
      ),
      _0x557fa8 =
        (_0x1dc20a == null ? undefined : _0x1dc20a.focus) ??
        (_0x1dc20a == null ? undefined : _0x1dc20a.anchor) ??
        (_0x1dc20a ? _0xc2ed85(_0x1dc20a) : null);
    if (!_0x1dc20a || !_0x557fa8) return false;
    if (
      ((_0x5e8b02 = _0xafafb0.preventDefault) == null ||
        _0x5e8b02.call(_0xafafb0),
      (_0xf43820 = _0xafafb0.stopPropagation) == null ||
        _0xf43820.call(_0xafafb0),
      Y(_0x23a372),
      _0x557fa8.row === _0x4bcca7.row && _0x557fa8.column === _0x4bcca7.column)
    )
      return true;
    this._completeActiveEditor(_0x4bcca7.documentData);
    let _0x49b8ca =
      this._slideTableResourceService["getTable"](
        _0x1dc20a.unitId,
        _0x1dc20a.tableId,
      ) ?? _0x4d016e.getTable();
    return (
      _0x49b8ca &&
        this._openCellEditor({
          selection: _0x1dc20a,
          object: _0x4d016e,
          table: _0x49b8ca,
        }),
      true
    );
  }
  _isTableReadyForCellInteraction(_0x5d222c, _0x462faa) {
    return this._isActiveTableContext(_0x5d222c, _0x462faa)
      ? true
      : this._isSelectedTableElement(_0x5d222c, _0x462faa);
  }
  _isActiveTableContext(_0x467457, _0x444e59) {
    return (
      !!this._tableActivationStage &&
      !!this._activeTableContext &&
      this._activeTableContext["unitId"] === _0x467457.getUnitId() &&
      this._activeTableContext["subUnitId"] === _0x467457.getActivePageId() &&
      this._activeTableContext["elementId"] === _0x444e59.elementId &&
      this._activeTableContext["tableId"] === _0x444e59.element["tableId"]
    );
  }
  _isSelectedTableElement(_0x38703e, _0x16408b) {
    var _0x56220e;
    let _0xbef664 = this._boardElementStateService["getSnapshot"]();
    return (
      (_0xbef664 == null || (_0x56220e = _0xbef664.context) == null
        ? undefined
        : _0x56220e.unitId) === _0x38703e.getUnitId() &&
      _0xbef664.context["subUnitId"] === _0x38703e.getActivePageId() &&
      _0xbef664.selectedIds["includes"](_0x16408b.elementId)
    );
  }
  _activateTableStage(_0x259c1d, _0x20c735, _0x5e7310, _0x50160b, _0x88d26a) {
    var _0x361ad0, _0x13cf3d;
    let _0x2db100 = _0x259c1d.getUnitId(),
      _0x2fb209 = _0x259c1d.getActivePageId();
    ((this._tableActivationStage = "table"),
      (this._activeTableContext = {
        unitId: _0x2db100,
        subUnitId: _0x2fb209,
        elementId: _0x20c735.elementId,
        tableId: _0x20c735.element["tableId"],
      }),
      this._slideTableSelectionService["clear"](),
      this._boardElementStateService["selectElements"](
        { unitId: _0x2db100, subUnitId: _0x2fb209 },
        [_0x20c735.elementId],
        _0x20c735.elementId,
      ),
      _0x5e7310.setTableSelection({ ranges: [] }),
      (_0x361ad0 = _0x50160b.preventDefault) == null ||
        _0x361ad0.call(_0x50160b),
      (_0x13cf3d = _0x50160b.stopPropagation) == null ||
        _0x13cf3d.call(_0x50160b),
      Y(_0x88d26a),
      this._makeSceneDirty());
  }
  _startPendingStage1Body(
    _0xe40947,
    _0x1f50ba,
    _0x1799c1,
    _0x138811,
    _0x133afc,
  ) {
    var _0x15c168, _0x41e681;
    let _0x24e587 = _0xe40947.getUnitId(),
      _0x10ee02 = _0xe40947.getActivePageId(),
      _0x2a69b2 = this._boardElementService["getElementData"](
        _0x24e587,
        _0x10ee02,
      ),
      _0x1a4450 = this._buildCellSelectionFromTableEvent(
        _0xe40947,
        _0x1f50ba,
        _0x1799c1,
        _0x138811,
      );
    _0x1a4450 &&
      ((this._pendingStage1BodyState = {
        unitId: _0x24e587,
        subUnitId: _0x10ee02,
        elementData: _0x2a69b2,
        elementDataItem: _0x1f50ba,
        object: _0x1799c1,
        startEvent: _0x138811,
        startPoint: {
          ...this._getBoardPointFromEvent(_0x138811, {
            x: _0x1799c1.left,
            y: _0x1799c1.top,
          }),
        },
        pendingSelection: _0x1a4450,
      }),
      (_0x15c168 = _0x138811.preventDefault) == null ||
        _0x15c168.call(_0x138811),
      (_0x41e681 = _0x138811.stopPropagation) == null ||
        _0x41e681.call(_0x138811),
      Y(_0x133afc));
  }
  _handlePendingStage1BodyPointerMove(_0x31a694) {
    let _0x4afed3 = this._pendingStage1BodyState;
    if (!_0x4afed3) return;
    if (
      "buttons" in _0x31a694 &&
      _0x31a694.buttons !== undefined &&
      (_0x31a694.buttons & 1) != 1
    ) {
      this._finishPendingStage1Body({ focusCell: true });
      return;
    }
    let { x: _0x4034f3, y: _0x347f6b } = this._getBoardPointFromEvent(
        _0x31a694,
        _0x4afed3.startPoint,
      ),
      _0x23299e = _0x4034f3 - _0x4afed3.startPoint["x"],
      _0x29de77 = _0x347f6b - _0x4afed3.startPoint["y"];
    Math.hypot(_0x23299e, _0x29de77) < 8 ||
      ((this._pendingStage1BodyState = null),
      this._startTableHandleMove(
        _0x4afed3.unitId,
        _0x4afed3.subUnitId,
        _0x4afed3.elementData,
        _0x4afed3.elementDataItem,
        _0x4afed3.object,
        _0x4afed3.startEvent,
      ),
      this._handleTableHandleMovePointerMove(_0x31a694));
  }
  _finishPendingStage1Body(_0x30382a) {
    let _0x536773 = this._pendingStage1BodyState;
    if (
      !_0x536773 ||
      ((this._pendingStage1BodyState = null), !_0x30382a.focusCell)
    )
      return;
    let _0x17719a =
      _0x536773.pendingSelection["focus"] ??
      _0x536773.pendingSelection["anchor"] ??
      _0xc2ed85(_0x536773.pendingSelection);
    if (!_0x17719a) return;
    (this._slideTableSelectionService["markTableInternalInteraction"](),
      this._beginTableInternalInteraction(_0x536773.object));
    let _0xc81d1e = this._slideTableSelectionService["selectCell"]({
      unitId: _0x536773.pendingSelection["unitId"],
      subUnitId: _0x536773.pendingSelection["subUnitId"],
      elementId: _0x536773.pendingSelection["elementId"],
      tableId: _0x536773.pendingSelection["tableId"],
      row: _0x17719a.row,
      column: _0x17719a.column,
    });
    (this._enterCellStageFromSelection(_0xc81d1e),
      _0x536773.object["setTableSelection"](_0x2e06f0(_0xc81d1e)),
      this._makeSceneDirty());
  }
  _enterCellStage(_0x4769b7, _0xb42be1) {
    ((this._tableActivationStage = "cell"),
      (this._activeTableContext = {
        unitId: _0x4769b7.getUnitId(),
        subUnitId: _0x4769b7.getActivePageId(),
        elementId: _0xb42be1.elementId,
        tableId: _0xb42be1.element["tableId"],
      }));
  }
  _enterCellStageFromSelection(_0x27a1f) {
    ((this._tableActivationStage = "cell"),
      (this._activeTableContext = {
        unitId: _0x27a1f.unitId,
        subUnitId: _0x27a1f.subUnitId,
        elementId: _0x27a1f.elementId,
        tableId: _0x27a1f.tableId,
      }));
  }
  _startResizeIfHit(_0x52a96b, _0x3e1e39, _0x1a8da5, _0x2a62bb) {
    var _0x14de94, _0xf41ea8, _0xeedbc7, _0x5a34a1;
    if (this._isTableTextEditing()) return false;
    let _0x339b68 = _0x1a8da5.getTable();
    if (!_0x339b68) return false;
    let _0x3c6260 = this._getBoardPointFromEvent(_0x2a62bb),
      _0x3fcdb1 = this._resolveObjectPoint(_0x1a8da5, _0x3c6260.x, _0x3c6260.y),
      _0x246fdf = this._resolveResizeTrigger(
        _0x339b68,
        _0x1a8da5,
        _0x3fcdb1.x,
        _0x3fcdb1.y,
      );
    if (!_0x246fdf) return false;
    let _0x4f623c = ca(_0x339b68, _0x1a8da5),
      _0x395990 = _0x52a96b.getUnitId();
    return (
      (this._resizeState = {
        unitId: _0x395990,
        subUnitId: _0x52a96b.getActivePageId(),
        elementId: _0x3e1e39.elementId,
        tableId: _0x3e1e39.element["tableId"],
        object: _0x1a8da5,
        table: _0x339b68,
        trigger: _0x246fdf,
        startPoint: _0x3fcdb1,
        startSize:
          _0x246fdf.kind === "resize-row"
            ? (((_0x14de94 = _0x339b68.rows[_0x246fdf.row ?? 0]) == null
                ? undefined
                : _0x14de94.height) ?? 24)
            : (((_0xf41ea8 = _0x339b68.columns[_0x246fdf.column ?? 0]) == null
                ? undefined
                : _0xf41ea8.width) ?? 96),
        scaleX: _0x4f623c.scaleX,
        scaleY: _0x4f623c.scaleY,
      }),
      (_0xeedbc7 = _0x2a62bb.preventDefault) == null ||
        _0xeedbc7.call(_0x2a62bb),
      (_0x5a34a1 = _0x2a62bb.stopPropagation) == null ||
        _0x5a34a1.call(_0x2a62bb),
      this._setResizeCursor(_0x246fdf.kind),
      true
    );
  }
  _handleResizeCursorHover(_0x42fe41) {
    if (this._resizeState) return;
    if (this._isTableTextEditing()) {
      this._resetResizeCursor();
      return;
    }
    if (
      this._rangeDragState ||
      this._headerDragState ||
      this._pendingHeaderMoveState ||
      this._rowColumnMoveState ||
      this._tableHandleMoveState
    ) {
      this._resetResizeCursor();
      return;
    }
    let _0x283a4d = this._instanceService["getUnit"](
      this._renderContext["unitId"],
      _0x26c2da.UNIVER_BOARD,
    );
    if (!_0x283a4d) {
      this._resetResizeCursor();
      return;
    }
    let _0x36f94c = _0x283a4d.getUnitId(),
      _0x16cf9e = _0x283a4d.getActivePageId(),
      _0x6f3e37 = this._boardElementService["getElementData"](
        _0x36f94c,
        _0x16cf9e,
      ),
      _0x2e6039 = this._getBoardPointFromEvent(_0x42fe41);
    for (let _0x1fb9d5 of Object.values(_0x6f3e37)) {
      if (!sa(_0x1fb9d5)) continue;
      let _0x32b0e6 = this._getBoardTableObject(
          _0x517e76(_0x36f94c, _0x1fb9d5.elementId),
        ),
        _0x2ba842 = _0x32b0e6 == null ? undefined : _0x32b0e6.getTable();
      if (
        !_0x32b0e6 ||
        !_0x2ba842 ||
        !this._isTableActiveForResizeHover(_0x36f94c, _0x16cf9e, _0x1fb9d5)
      )
        continue;
      let _0x30a1ca = this._resolveObjectPoint(
          _0x32b0e6,
          _0x2e6039.x,
          _0x2e6039.y,
        ),
        _0x646e82 = this._resolveResizeTrigger(
          _0x2ba842,
          _0x32b0e6,
          _0x30a1ca.x,
          _0x30a1ca.y,
        );
      if (_0x646e82) {
        this._setResizeCursor(_0x646e82.kind);
        return;
      }
    }
    this._resetResizeCursor();
  }
  _isTableTextEditing() {
    return !!this._getActiveEditingSession();
  }
  _getActiveEditingSession() {
    let _0x2c1092 = this._editorUIService["getSession"]();
    return _0x2c1092 != null && _0x2c1092.context
      ? {
          ..._0x2c1092.context,
          documentData: _0x2c1092.documentData,
          measurement: _0x2c1092.measurement,
        }
      : (this._cellEditorBridgeService["getEditing"]() ?? null);
  }
  _completeActiveEditor(_0x32ccd8) {
    let _0x36b913 = this._editorUIService["getSession"]();
    if (_0x36b913 != null && _0x36b913.context) {
      this._editorUIService["complete"](
        _0x32ccd8 ?? _0x36b913.documentData,
        _0x36b913.measurement,
        _0x36b913.sessionId,
      );
      return;
    }
    this._cellEditorBridgeService["complete"](_0x32ccd8);
  }
  _cancelActiveEditor() {
    let _0x5df3fd = this._editorUIService["getSession"]();
    if (_0x5df3fd != null && _0x5df3fd.context) {
      this._editorUIService["cancel"](_0x5df3fd.sessionId);
      return;
    }
    this._cellEditorBridgeService["cancel"]();
  }
  _isTableActiveForResizeHover(_0x39ead7, _0x6c2005, _0x4ce379) {
    let _0x524cd5 = this._slideTableSelectionService["getSelection"]();
    return _0x524cd5 &&
      _0x524cd5.unitId === _0x39ead7 &&
      _0x524cd5.subUnitId === _0x6c2005 &&
      _0x524cd5.elementId === _0x4ce379.elementId &&
      _0x524cd5.tableId === _0x4ce379.element["tableId"]
      ? true
      : !!this._activeTableContext &&
          this._activeTableContext["unitId"] === _0x39ead7 &&
          this._activeTableContext["subUnitId"] === _0x6c2005 &&
          this._activeTableContext["elementId"] === _0x4ce379.elementId &&
          this._activeTableContext["tableId"] === _0x4ce379.element["tableId"];
  }
  _resolveResizeTrigger(_0x2f7e08, _0x4bda06, _0x590c38, _0x18de3e) {
    let _0x2a4053 = ca(_0x2f7e08, _0x4bda06),
      _0x555652 = _0x148a26(
        _0xbffbd9({
          tableId: _0x2f7e08.id,
          tableWidth: _0x4bda06.width,
          tableHeight: _0x4bda06.height,
          rowHeights: _0x2f7e08.rows["map"](
            (_0x5abae5) => (_0x5abae5.height ?? 24) * _0x2a4053.scaleY,
          ),
          columnWidths: _0x2f7e08.columns["map"](
            (_0x3877cc) => _0x3877cc.width * _0x2a4053.scaleX,
          ),
          mergedCells: _0x1ab83b(_0x2f7e08),
        }),
        _0x590c38,
        _0x18de3e,
      );
    return (_0x555652 == null ? undefined : _0x555652.kind) === "resize-row" ||
      (_0x555652 == null ? undefined : _0x555652.kind) === "resize-column"
      ? _0x555652
      : null;
  }
  _handleResizePointerMove(_0xf70498) {
    let _0x1b250c = this._resizeState;
    if (!_0x1b250c) return;
    if (
      "buttons" in _0xf70498 &&
      _0xf70498.buttons !== undefined &&
      (_0xf70498.buttons & 1) != 1
    ) {
      this._handleResizePointerUp(_0xf70498);
      return;
    }
    let _0xa9a9d8 = this._buildResizeTable(_0x1b250c, _0xf70498);
    _0xa9a9d8 &&
      (this._setResizeCursor(_0x1b250c.trigger["kind"]),
      _0x1b250c.object["setPreviewTable"](_0xa9a9d8),
      this._makeSceneDirty());
  }
  _handleRangeDragPointerMove(_0x50ede6) {
    let _0x1c4cb6 = this._rangeDragState;
    if (!_0x1c4cb6 || this._resizeState) return;
    if (
      "buttons" in _0x50ede6 &&
      _0x50ede6.buttons !== undefined &&
      (_0x50ede6.buttons & 1) != 1
    ) {
      this._finishRangeDrag();
      return;
    }
    let _0x52205c = this._getBoardPointVectorFromEvent(
      _0x50ede6,
      _0x1c4cb6.startPoint,
    );
    if (!_0x1c4cb6.activated) {
      let _0x3aa777 = _0x52205c.x - _0x1c4cb6.startPoint["x"],
        _0x137c04 = _0x52205c.y - _0x1c4cb6.startPoint["y"];
      if (Math.hypot(_0x3aa777, _0x137c04) < 8) return;
      _0x1c4cb6.activated = true;
    }
    let _0x1d2f00 = _0x1c4cb6.object["hitTestCellAtScenePoint"](_0x52205c);
    if (!_0x1d2f00 || _0x1d2f00.kind !== "cell") return;
    let _0x18f410 = _0x1c4cb6.object["getTable"]();
    if (!_0x18f410) return;
    let _0x23c10d = _0xe39e09(_0x18f410, {
        startRow: _0x1c4cb6.anchor["row"],
        startColumn: _0x1c4cb6.anchor["column"],
        endRow: _0x1d2f00.row,
        endColumn: _0x1d2f00.column,
      }),
      _0x2f4c94 = this._slideTableSelectionService["selectRange"]({
        unitId: _0x1c4cb6.selection["unitId"],
        subUnitId: _0x1c4cb6.selection["subUnitId"],
        elementId: _0x1c4cb6.selection["elementId"],
        tableId: _0x1c4cb6.selection["tableId"],
        ..._0x23c10d,
      });
    (_0x1c4cb6.object["setTableSelection"](_0x2e06f0(_0x2f4c94)),
      this._makeSceneDirty());
  }
  _finishRangeDrag() {
    this._rangeDragState = null;
  }
  _handleResizePointerUp(_0x4fd445) {
    let _0x35f68f = this._resizeState;
    if (!_0x35f68f) return;
    ((this._resizeState = null),
      _0x35f68f.object["setPreviewTable"](null),
      this._resetResizeCursor());
    let _0x2c8f31 = this._resolveResizeSize(_0x35f68f, _0x4fd445);
    if (_0x2c8f31 === null || _0x2c8f31 === _0x35f68f.startSize) {
      this._makeSceneDirty();
      return;
    }
    let _0x492f99 = this._buildResizeTable(_0x35f68f, _0x4fd445);
    if (!_0x492f99 || _0x492f99.rev === _0x35f68f.table["rev"]) {
      this._makeSceneDirty();
      return;
    }
    (this._commandService["executeCommand"](
      _0x278de5.id,
      _0x35f68f.trigger["kind"] === "resize-row"
        ? {
            unitId: _0x35f68f.unitId,
            tableId: _0x35f68f.tableId,
            patch: { rows: _0x492f99.rows },
          }
        : {
            unitId: _0x35f68f.unitId,
            tableId: _0x35f68f.tableId,
            patch: { columns: _0x492f99.columns },
          },
    ),
      this._makeSceneDirty());
  }
  _cancelResizePreview() {
    let _0x4352b7 = this._resizeState;
    _0x4352b7 &&
      ((this._resizeState = null),
      _0x4352b7.object["setPreviewTable"](null),
      this._resetResizeCursor(),
      this._makeSceneDirty());
  }
  _setResizeCursor(_0x5f4e6b) {
    var _0x3f46c9;
    this._resizeHoverActive = true;
    let _0x139451 = this._renderContext["scene"];
    (_0x3f46c9 = _0x139451.setCursor) == null ||
      _0x3f46c9.call(
        _0x139451,
        _0x5f4e6b === "resize-column"
          ? _0x267310.COLUMN_RESIZE
          : _0x267310.ROW_RESIZE,
      );
  }
  _resetResizeCursor() {
    var _0x1fd7ea;
    if (!this._resizeHoverActive) return;
    this._resizeHoverActive = false;
    let _0x2089e3 = this._renderContext["scene"];
    (_0x1fd7ea = _0x2089e3.resetCursor) == null || _0x1fd7ea.call(_0x2089e3);
  }
  _buildResizeTable(_0x463c7a, _0xad2023) {
    let _0x4e5bbd = this._resolveResizeDelta(_0x463c7a, _0xad2023);
    if (_0x4e5bbd === null) return null;
    if (_0x463c7a.trigger["kind"] === "resize-row") {
      let _0x4085d0 = _0x463c7a.trigger["row"] ?? 0;
      return _0x1df707(_0x463c7a.table, _0x4085d0, _0x4e5bbd, 12);
    }
    let _0xce8dfe = _0x463c7a.trigger["column"] ?? 0;
    return _0x5d2fc5(_0x463c7a.table, _0xce8dfe, _0x4e5bbd, 12);
  }
  _resolveResizeSize(_0x567443, _0x443329) {
    let _0x12ca94 = this._resolveResizeDelta(_0x567443, _0x443329);
    return _0x12ca94 === null
      ? null
      : Math.round(_0x567443.startSize + _0x12ca94);
  }
  _resolveResizeDelta(_0xe7a49a, _0x4a246e) {
    let _0x4cc413 = this._getBoardPointFromEvent(
        _0x4a246e,
        _0xe7a49a.startPoint,
      ),
      _0x15aa11 = this._resolveObjectPoint(
        _0xe7a49a.object,
        _0x4cc413.x,
        _0x4cc413.y,
      ),
      _0x2bfd8a =
        _0xe7a49a.trigger["kind"] === "resize-row"
          ? (_0x15aa11.y - _0xe7a49a.startPoint["y"]) / _0xe7a49a.scaleY
          : (_0x15aa11.x - _0xe7a49a.startPoint["x"]) / _0xe7a49a.scaleX;
    return Number.isFinite(_0x2bfd8a) ? _0x2bfd8a : null;
  }
  _getBoardPointVectorFromEvent(_0x22b9c9, _0xe6eb11) {
    let _0x5ccce7 = this._getBoardPointFromEvent(_0x22b9c9, _0xe6eb11);
    return _0x7da94b.FromArray([_0x5ccce7.x, _0x5ccce7.y]);
  }
  _getBoardPointFromEvent(_0x467600, _0x10e571 = { x: 0, y: 0 }) {
    let _0xda99fe = Number.isFinite(_0x467600.offsetX)
        ? _0x467600.offsetX
        : _0x10e571.x,
      _0x1adddf = Number.isFinite(_0x467600.offsetY)
        ? _0x467600.offsetY
        : _0x10e571.y,
      _0x19dfda = this._boardUIStateService["getState"](),
      _0x485b5c = (_0x19dfda == null
        ? undefined
        : _0x19dfda.viewportPanOffset) ?? { x: 0, y: 0 },
      _0xfdf305 =
        Number.isFinite(_0x19dfda == null ? undefined : _0x19dfda.zoomRatio) &&
        ((_0x19dfda == null ? undefined : _0x19dfda.zoomRatio) ?? 0) > 0
          ? _0x19dfda.zoomRatio
          : 1;
    return {
      x: (_0xda99fe - _0x485b5c.x) / _0xfdf305,
      y: (_0x1adddf - _0x485b5c.y) / _0xfdf305,
    };
  }
  _resolveObjectPoint(_0x137894, _0xe66f52, _0x148cb5) {
    let _0x22a9c5 = _0x137894.getInverseCoord(
      _0x7da94b.FromArray([_0xe66f52, _0x148cb5]),
    );
    return {
      x: _0x22a9c5.x + _0x137894.width / 2,
      y: _0x22a9c5.y + _0x137894.height / 2,
    };
  }
  _handleTableDoubleClick(
    _0x482d34,
    _0x42b77f,
    _0x137b46,
    _0x1d6e3,
    _0xcb43da,
  ) {
    var _0x5c4809, _0x39e818;
    if (
      (_0x1d6e3.button ?? 0) !== 0 ||
      !this._isTableReadyForCellInteraction(_0x482d34, _0x42b77f)
    )
      return;
    let _0x3124b2 = this._selectCellFromTableEvent(
        _0x482d34,
        _0x42b77f,
        _0x137b46,
        _0x1d6e3,
      ),
      _0x29ddf3 = _0x137b46.getTable();
    !_0x3124b2 ||
      !_0x29ddf3 ||
      ((_0x5c4809 = _0x1d6e3.preventDefault) == null ||
        _0x5c4809.call(_0x1d6e3),
      (_0x39e818 = _0x1d6e3.stopPropagation) == null ||
        _0x39e818.call(_0x1d6e3),
      Y(_0xcb43da),
      this._openCellEditor({
        selection: _0x3124b2,
        object: _0x137b46,
        table: _0x29ddf3,
      }));
  }
  _selectCellFromTableEvent(_0x234b5e, _0x37445d, _0x2e02b4, _0xfc3672) {
    let _0x483ca0 = this._buildCellSelectionFromTableEvent(
        _0x234b5e,
        _0x37445d,
        _0x2e02b4,
        _0xfc3672,
      ),
      _0x585520 =
        (_0x483ca0 == null ? undefined : _0x483ca0.focus) ??
        (_0x483ca0 == null ? undefined : _0x483ca0.anchor) ??
        (_0x483ca0 ? _0xc2ed85(_0x483ca0) : null);
    return !_0x483ca0 || !_0x585520
      ? null
      : (this._slideTableSelectionService["markTableInternalInteraction"](),
        this._slideTableSelectionService["selectCell"]({
          unitId: _0x483ca0.unitId,
          subUnitId: _0x483ca0.subUnitId,
          elementId: _0x483ca0.elementId,
          tableId: _0x483ca0.tableId,
          row: _0x585520.row,
          column: _0x585520.column,
        }));
  }
  _buildCellSelectionFromTableEvent(
    _0xec7850,
    _0x45e8e6,
    _0x333cd9,
    _0x4b0282,
  ) {
    let _0x163f5a = _0x333cd9.hitTestCellAtScenePoint(
      this._getBoardPointVectorFromEvent(_0x4b0282),
    );
    if (!_0x163f5a || _0x163f5a.kind !== "cell") return null;
    let _0x155b3b = _0xec7850.getUnitId(),
      _0x4d2d05 = _0xec7850.getActivePageId(),
      _0x2e427d = { row: _0x163f5a.row, column: _0x163f5a.column };
    return {
      unitId: _0x155b3b,
      subUnitId: _0x4d2d05,
      elementId: _0x45e8e6.elementId,
      tableId: _0x45e8e6.element["tableId"],
      kind: "cell",
      anchor: _0x2e427d,
      focus: _0x2e427d,
      ranges: [
        {
          startRow: _0x163f5a.row,
          endRow: _0x163f5a.row,
          startColumn: _0x163f5a.column,
          endColumn: _0x163f5a.column,
        },
      ],
    };
  }
  _beginTableInternalInteraction(_0x26985d) {
    var _0x33ac86, _0x397d1a;
    (this._boardElementStateService["clearSelection"](),
      (_0x33ac86 = (_0x397d1a = this._renderContext["scene"]).getTransformer) ==
        null ||
        (_0x33ac86 = _0x33ac86.call(_0x397d1a)) == null ||
        _0x33ac86.detachFrom(_0x26985d));
  }
  _handleKeyboardAction(_0x2625b6) {
    let _0x590fa4 = this._getActiveEditingSession();
    if (_0x590fa4)
      return this._handleEditingKeyboardAction(_0x2625b6, _0x590fa4);
    let _0x17cdd9 = this._resolveActiveKeyboardTarget();
    if (!_0x17cdd9) return false;
    if (_0x2625b6 === "edit-cell") return this._openCellEditor(_0x17cdd9);
    if (_0x2625b6 === "clear-cells")
      return this._clearSelectedCellContents(_0x17cdd9);
    let _0xf5518a = _0x59151e(_0x2625b6);
    if (!_0xf5518a) return false;
    let {
        selection: _0x4b17d5,
        table: _0x3b2c4a,
        object: _0x26d31e,
      } = _0x17cdd9,
      _0x4ec7f8 = _0x4b17d5.focus ?? _0x4b17d5.anchor ?? _0xc2ed85(_0x4b17d5);
    if (!_0x4ec7f8) return false;
    let _0x10a646 = _0xd14eb7(
      _0x4ec7f8,
      _0xf5518a,
      _0x3b2c4a.rows["length"],
      _0x3b2c4a.columns["length"],
    );
    if (_0xf5518a.extend) {
      let _0x4bf389 = _0x4b17d5.anchor ?? _0x4ec7f8,
        _0x22f8c3 = _0xe39e09(_0x3b2c4a, {
          startRow: _0x4bf389.row,
          startColumn: _0x4bf389.column,
          endRow: _0x10a646.row,
          endColumn: _0x10a646.column,
        }),
        _0x48deba = this._slideTableSelectionService["selectRange"]({
          unitId: _0x4b17d5.unitId,
          subUnitId: _0x4b17d5.subUnitId,
          elementId: _0x4b17d5.elementId,
          tableId: _0x4b17d5.tableId,
          ..._0x22f8c3,
        });
      _0x26d31e.setTableSelection(_0x2e06f0(_0x48deba));
    } else {
      let _0x48223d = this._slideTableSelectionService["selectCell"]({
        unitId: _0x4b17d5.unitId,
        subUnitId: _0x4b17d5.subUnitId,
        elementId: _0x4b17d5.elementId,
        tableId: _0x4b17d5.tableId,
        row: _0x10a646.row,
        column: _0x10a646.column,
      });
      _0x26d31e.setTableSelection(_0x2e06f0(_0x48223d));
    }
    return (this._makeSceneDirty(), true);
  }
  _handleEditingKeyboardAction(_0x50e1c2, _0x3f12ba) {
    let _0x1568ee =
      _0x50e1c2 === "tab-forward" || _0x50e1c2 === "tab-backward"
        ? _0x59151e(_0x50e1c2)
        : null;
    if (!_0x1568ee) return false;
    let _0xf809a9 = this._getBoardTableObject(
        _0x517e76(_0x3f12ba.unitId, _0x3f12ba.elementId),
      ),
      _0x403332 =
        this._slideTableResourceService["getTable"](
          _0x3f12ba.unitId,
          _0x3f12ba.tableId,
        ) ?? (_0xf809a9 == null ? undefined : _0xf809a9.getTable());
    if (!_0xf809a9 || !_0x403332) return false;
    let _0x3bf62c = _0xd14eb7(
      { row: _0x3f12ba.row, column: _0x3f12ba.column },
      _0x1568ee,
      _0x403332.rows["length"],
      _0x403332.columns["length"],
    );
    if (
      _0x3bf62c.row === _0x3f12ba.row &&
      _0x3bf62c.column === _0x3f12ba.column
    )
      return false;
    this._completeActiveEditor(_0x3f12ba.documentData);
    let _0x48bb3b = this._slideTableSelectionService["selectCell"]({
      unitId: _0x3f12ba.unitId,
      subUnitId: _0x3f12ba.subUnitId,
      elementId: _0x3f12ba.elementId,
      tableId: _0x3f12ba.tableId,
      row: _0x3bf62c.row,
      column: _0x3bf62c.column,
    });
    return (
      _0xf809a9.setTableSelection(_0x2e06f0(_0x48bb3b)),
      (this._tableActivationStage = "cell"),
      (this._activeTableContext = {
        unitId: _0x3f12ba.unitId,
        subUnitId: _0x3f12ba.subUnitId,
        elementId: _0x3f12ba.elementId,
        tableId: _0x3f12ba.tableId,
      }),
      this._keyboardService["setFocused"](true),
      this._makeSceneDirty(),
      true
    );
  }
  _resolveTableClipboardTarget(_0x5b35d6) {
    if (
      _0x5b35d6.defaultPrevented ||
      !this._contextService["getContextValue"]("FOCUSING_BOARD_TABLE") ||
      this._getActiveEditingSession()
    )
      return null;
    let _0x32f3ad = this._resolveActiveKeyboardTarget();
    return (_0x32f3ad == null ? undefined : _0x32f3ad.selection["unitId"]) ===
      this._renderContext["unitId"]
      ? _0x32f3ad
      : null;
  }
  _canCopyTable(_0x1beb6f) {
    return _0x4b0568(
      this._permissionService,
      _0x1beb6f.unitId,
      _0x1beb6f.unitId,
      _0x1c5620.Copy,
    );
  }
  async _commitClipboardPatch(_0x2795de, _0x51aed2) {
    return (await this._commandService["executeCommand"](_0x278de5.id, {
      unitId: _0x2795de.selection["unitId"],
      tableId: _0x2795de.selection["tableId"],
      patch: _0x51aed2,
    }))
      ? (_0x2795de.object["setTableSelection"](_0x2e06f0(_0x2795de.selection)),
        this._keyboardService["setFocused"](true),
        this._makeSceneDirty(),
        true)
      : false;
  }
  async _insertClipboardImages(_0x39d97a, _0x8680f0 = 0) {
    for (let _0x25af55 = 0; _0x25af55 < _0x39d97a.length; _0x25af55++) {
      let _0x3c9676 = _0x39d97a[_0x25af55],
        _0x32cd40 = await _0xb0bb5c(_0x3c9676);
      if (_0x32cd40) {
        let _0xc80d88 = (_0x8680f0 + _0x25af55) * 32;
        _0xc80d88 === 0
          ? await this._boardImageInsertService["insertImage"](_0x32cd40)
          : await this._boardImageInsertService["insertImage"](_0x32cd40, {
              offset: { x: _0xc80d88, y: _0xc80d88 },
            });
      }
    }
  }
  _handleKeyboardInput(_0x344512) {
    return _0x344512.kind === "composition-start"
      ? this._openActiveCellEditor()
      : this._getActiveEditingSession() || !_0x344512.text
        ? false
        : this._openActiveCellEditor({ initialText: _0x344512.text });
  }
  _clearSelectedCellContents(_0x1ecfcb) {
    let _0x291783 = _0x1fd1fe(_0x1ecfcb.table, _0x1ecfcb.selection);
    return (
      _0x291783 &&
        this._commandService["executeCommand"](_0x278de5.id, {
          unitId: _0x1ecfcb.selection["unitId"],
          tableId: _0x1ecfcb.selection["tableId"],
          patch: _0x291783,
        }),
      _0x1ecfcb.object["setTableSelection"](_0x2e06f0(_0x1ecfcb.selection)),
      this._makeSceneDirty(),
      true
    );
  }
  _openActiveCellEditor(_0x42b11d) {
    let _0x3763b7 = this._resolveActiveKeyboardTarget();
    return _0x3763b7 ? this._openCellEditor(_0x3763b7, _0x42b11d) : false;
  }
  _openCellEditor(_0xca9a5e, _0x409112) {
    var _0x5016ab, _0x455de5, _0x13d8bd, _0x518771;
    let _0x4a3b3b = _0x325f13({
      table: _0xca9a5e.table,
      selection: _0xca9a5e.selection,
      tableWidth: _0xca9a5e.object["width"],
      tableHeight: _0xca9a5e.object["height"],
    });
    if (!_0x4a3b3b) return false;
    let _0x2562c1 =
        _0xca9a5e.object["getCellTextRect"](
          _0x4a3b3b.row,
          _0x4a3b3b.column,
          _0xca9a5e.object["width"],
          _0xca9a5e.object["height"],
        ) ?? _0x4a3b3b.rect,
      _0x343768 =
        (_0x409112 == null ? undefined : _0x409112.initialText) === undefined
          ? _0x4a3b3b.documentData
          : _0x33e2ab(_0x4a3b3b.documentData, _0x409112.initialText),
      _0x2ed894 = {
        unitId: _0xca9a5e.selection["unitId"],
        subUnitId: _0xca9a5e.selection["subUnitId"] ?? "",
        elementId: _0xca9a5e.selection["elementId"],
        tableId: _0xca9a5e.selection["tableId"],
        row: _0x4a3b3b.row,
        column: _0x4a3b3b.column,
        rect: _0x2562c1,
        horizontalAlign: _0xb2481(_0x4a3b3b.documentData) ?? _0x3be47e.LEFT,
        verticalAlign:
          _0x2e243e(
            (_0x5016ab = _0x4a3b3b.cellStyle) == null
              ? undefined
              : _0x5016ab.verticalAlign,
          ) ??
          ((_0x455de5 = _0x4a3b3b.documentData["documentStyle"]) == null ||
          (_0x455de5 = _0x455de5.renderConfig) == null
            ? undefined
            : _0x455de5.verticalAlign),
        isHorizontal:
          ((_0x13d8bd = _0x4a3b3b.cellStyle) == null
            ? undefined
            : _0x13d8bd.textDirection) !== _0x1f8cc4.Vertical &&
          ((_0x518771 = _0x4a3b3b.cellStyle) == null
            ? undefined
            : _0x518771.textDirection) !== _0x1f8cc4.Vertical270,
        tableTransform: {
          left: _0xca9a5e.object["left"],
          top: _0xca9a5e.object["top"],
          width: _0xca9a5e.object["width"],
          height: _0xca9a5e.object["height"],
          angle: _0xca9a5e.object["angle"] ?? 0,
          flipX: _0xca9a5e.object["flipX"],
          flipY: _0xca9a5e.object["flipY"],
        },
        documentData: _0x343768,
      },
      _0x5cec32 = this._resolveEditorUILayout(_0x2ed894);
    if (!_0x5cec32) return false;
    let _0x32d9da = this._editorUIService["getSession"]();
    _0x32d9da != null && _0x32d9da.context
      ? this._editorUIService["complete"](
          _0x32d9da.documentData,
          _0x32d9da.measurement,
          _0x32d9da.sessionId,
        )
      : (this._cellEditorBridgeService["complete"](),
        this._editorUIService["complete"]());
    let _0x8e72f2 = this._slideTableSelectionService["enterTextMode"]({
      unitId: _0xca9a5e.selection["unitId"],
      subUnitId: _0xca9a5e.selection["subUnitId"] ?? "",
      elementId: _0xca9a5e.selection["elementId"],
      tableId: _0xca9a5e.selection["tableId"],
      row: _0x4a3b3b.row,
      column: _0x4a3b3b.column,
    });
    return (
      _0xca9a5e.object["setEditingCell"]({
        row: _0x4a3b3b.row,
        column: _0x4a3b3b.column,
      }),
      _0xca9a5e.object["setTableSelection"](_0x2e06f0(_0x8e72f2)),
      this._keyboardService["setFocused"](false),
      this._editorUIService["open"]({
        editorId: "BOARD_TABLE_EDITOR_UNIT_ID",
        documentData: _0x343768,
        layout: _0x5cec32,
        context: _0x2ed894,
        appearance: "table-cell",
        autoFocus: true,
        hideFloatingToolbarAlignment: true,
        isSingle: false,
        onChange: (_0x369bfe, _0x2bf73d, _0x4e37a7) => {
          _0x2bf73d &&
            this._autoGrowCellEditorRowHeight(_0xca9a5e.object, {
              ..._0x2bf73d,
              documentData: _0x369bfe,
              measurement: _0x4e37a7,
            });
        },
        onComplete: (_0x2e79d3, _0xddb1ec, _0x5553f7) => {
          _0xddb1ec &&
            this._commitCellDocument(_0xca9a5e.object, {
              ..._0xddb1ec,
              documentData: _0x2e79d3,
              measurement: _0x5553f7,
            });
        },
        onCancel: () => {
          this._finishCellEditing(_0xca9a5e.object);
        },
        onKeyDown: (_0x1aad1e) => {
          let _0x174041 = ta(_0x1aad1e);
          return _0x174041
            ? (_0x1aad1e.preventDefault(),
              _0x1aad1e.stopPropagation(),
              Promise.resolve(this._keyboardService["handle"](_0x174041)),
              true)
            : false;
        },
      }),
      this._makeSceneDirty(),
      true
    );
  }
  _resolveEditorUILayout(_0x5d1e31) {
    var _0x467f06, _0x544c7d;
    return na(_0x5d1e31, {
      canvasOffset: ra(
        (_0x467f06 = this._renderContext["engine"]) == null ||
          (_0x544c7d = _0x467f06.getCanvasElement) == null
          ? undefined
          : _0x544c7d.call(_0x467f06),
        this._layoutService["getContentElement"](),
      ),
      scene: this._renderContext["scene"],
    });
  }
  _commitCellDocument(_0x668ef6, _0x108c71) {
    var _0x282425;
    let _0x411efe =
      this._slideTableResourceService["getTable"](
        _0x108c71.unitId,
        _0x108c71.tableId,
      ) ?? _0x668ef6.getTable();
    if (!_0x411efe) {
      this._finishCellEditing(_0x668ef6);
      return;
    }
    let _0x3cb33e =
        "BOARD_TABLE_CELL_EDITOR_" +
        _0x411efe.id +
        "_" +
        _0x108c71.row +
        "_" +
        _0x108c71.column,
      _0x3ee707 = _0x16e31d(_0x555c6f(_0x108c71.documentData), _0x3cb33e),
      _0x5d6a19 = _0x29ab7f(
        _0x411efe,
        _0x108c71.row,
        _0x108c71.column,
        _0x3ee707,
        {
          verticalAlign: da(
            (_0x282425 = _0x3ee707.documentStyle) == null ||
              (_0x282425 = _0x282425.renderConfig) == null
              ? undefined
              : _0x282425.verticalAlign,
          ),
        },
      );
    if (!_0x5d6a19) {
      this._finishCellEditing(_0x668ef6);
      return;
    }
    let _0x98f677 = _0x5d6a19.rows,
      _0x3e2621 = la(_0x411efe, _0x98f677, _0x668ef6, _0x108c71);
    (this._commandService["executeCommand"](_0x278de5.id, {
      unitId: _0x108c71.unitId,
      tableId: _0x108c71.tableId,
      patch: { rows: _0x98f677 },
    }),
      _0x3e2621 > 0 &&
        this._growBoardTableElementHeight(_0x668ef6, _0x108c71, _0x3e2621),
      this._finishCellEditing(_0x668ef6));
  }
  _autoGrowCellEditorRowHeight(_0x2c7fcc, _0x4857c1) {
    if (!_0x4857c1.measurement) return;
    let _0x49e226 =
      this._slideTableResourceService["getTable"](
        _0x4857c1.unitId,
        _0x4857c1.tableId,
      ) ?? _0x2c7fcc.getTable();
    if (!_0x49e226) return;
    let _0xfd7f17 = _0x49e226.rows["map"]((_0x8cfbaf) => ({ ..._0x8cfbaf })),
      _0x4b644a = la(_0x49e226, _0xfd7f17, _0x2c7fcc, _0x4857c1);
    _0x4b644a <= 0 ||
      (this._commandService["executeCommand"](_0x278de5.id, {
        unitId: _0x4857c1.unitId,
        tableId: _0x4857c1.tableId,
        patch: { rows: _0xfd7f17 },
      }),
      _0x2c7fcc.setPreviewTable({ ..._0x49e226, rows: _0xfd7f17 }),
      this._growBoardTableElementHeight(_0x2c7fcc, _0x4857c1, _0x4b644a),
      this._makeSceneDirty());
  }
  _growBoardTableElementHeight(_0x2e8e43, _0x42781b, _0x4980c8) {
    if (_0x4980c8 <= 0) return;
    let _0x36d6f8 = _0x2e8e43.getElement(),
      _0x1a5e08 = {
        ..._0x36d6f8.transform,
        height:
          X(
            _0x36d6f8.transform["height"] ?? _0x2e8e43.height,
            _0x2e8e43.height,
          ) + _0x4980c8,
      };
    this._commandService["executeCommand"](_0x819c09.id, {
      unitId: _0x42781b.unitId,
      subUnitId: _0x42781b.subUnitId,
      updates: [
        {
          elementId: _0x42781b.elementId,
          element: { ..._0x36d6f8, transform: _0x1a5e08 },
          transform: _0x1a5e08,
        },
      ],
    });
  }
  _finishCellEditing(_0x4db8f6) {
    (this._slideTableSelectionService["clear"](),
      this._keyboardService["setFocused"](false),
      _0x4db8f6.setEditingCell(null),
      _0x4db8f6.setTableSelection(null),
      _0x4db8f6.setTableControlHover(null),
      _0x4db8f6.setPreviewTable(null),
      this._makeSceneDirty());
  }
  _resolveActiveKeyboardTarget() {
    if (this._boardUIStateService["getState"]().interactionMode === "viewing")
      return null;
    let _0x23e585 = this._slideTableSelectionService["getSelection"]();
    if (!_0x23e585 || _0x23e585.kind === "text") return null;
    let _0x4427a2 = this._getBoardTableObject(
        _0x517e76(_0x23e585.unitId, _0x23e585.elementId),
      ),
      _0x4b4ede =
        this._slideTableResourceService["getTable"](
          _0x23e585.unitId,
          _0x23e585.tableId,
        ) ?? (_0x4427a2 == null ? undefined : _0x4427a2.getTable());
    return !_0x4427a2 || !_0x4b4ede
      ? null
      : { selection: _0x23e585, object: _0x4427a2, table: _0x4b4ede };
  }
  _openContextMenu(_0x234cc2) {
    var _0x410a2f, _0x296b47, _0x36d266, _0x37fb88;
    (_0x410a2f = (_0x296b47 = this._contextMenuService).hideContextMenu) ==
      null || _0x410a2f.call(_0x296b47);
    let _0x317a5c = this._createContextMenuEvent(_0x234cc2);
    ((_0x36d266 = _0x317a5c.preventDefault) == null ||
      _0x36d266.call(_0x317a5c),
      (_0x37fb88 = _0x317a5c.stopPropagation) == null ||
        _0x37fb88.call(_0x317a5c),
      this._contextMenuService["triggerContextMenu"](
        _0x317a5c,
        "board.table.contextMenu.cell",
      ));
  }
  _createContextMenuEvent(_0x1ce2a9) {
    var _0x2f7a1d, _0x165669, _0x37fb2e;
    let _0x5cef9b = _0x1ce2a9;
    if (
      Number.isFinite(_0x5cef9b.clientX) &&
      Number.isFinite(_0x5cef9b.clientY)
    )
      return {
        ..._0x5cef9b,
        clientX: _0x5cef9b.clientX,
        clientY: _0x5cef9b.clientY,
        preventDefault: () => {
          var _0xc0188a;
          return (_0xc0188a = _0x5cef9b.preventDefault) == null
            ? undefined
            : _0xc0188a.call(_0x5cef9b);
        },
        stopPropagation: () => {
          var _0x454689;
          return (_0x454689 = _0x5cef9b.stopPropagation) == null
            ? undefined
            : _0x454689.call(_0x5cef9b);
        },
      };
    let _0x2253a9 =
        (_0x2f7a1d = this._renderContext["engine"]) == null ||
        (_0x165669 = _0x2f7a1d.getCanvasElement) == null ||
        (_0x165669 = _0x165669.call(_0x2f7a1d)) == null ||
        (_0x37fb2e = _0x165669.getBoundingClientRect) == null
          ? undefined
          : _0x37fb2e.call(_0x165669),
      _0x5671a6 =
        ((_0x2253a9 == null ? undefined : _0x2253a9.left) ?? 0) +
        (_0x1ce2a9.offsetX ?? 0),
      _0x5e9247 =
        ((_0x2253a9 == null ? undefined : _0x2253a9.top) ?? 0) +
        (_0x1ce2a9.offsetY ?? 0);
    return {
      ..._0x5cef9b,
      clientX: _0x5671a6,
      clientY: _0x5e9247,
      preventDefault: () => {
        var _0xafbcdc;
        return (_0xafbcdc = _0x5cef9b.preventDefault) == null
          ? undefined
          : _0xafbcdc.call(_0x5cef9b);
      },
      stopPropagation: () => {
        var _0x55dec5;
        return (_0x55dec5 = _0x5cef9b.stopPropagation) == null
          ? undefined
          : _0x55dec5.call(_0x5cef9b);
      },
    };
  }
};
oa = ni(
  [
    q(1, _0x498479),
    q(2, _0x4f68c1),
    q(3, _0xe67e5f(_0x2ff9b6)),
    q(4, _0xe0190f),
    q(5, _0xe67e5f(ii)),
    q(6, _0xe67e5f(ea)),
    q(7, _0x2014c6),
    q(8, _0x104e63),
    q(9, _0xe67e5f(_0x2ab092)),
    q(10, _0x2c7a66),
    q(11, _0x364941),
    q(12, _0x43818d),
    q(13, _0x386020),
    q(14, _0x572f42),
    q(15, _0xe67e5f(_0x722273)),
  ],
  oa,
);
function sa(_0x523c45) {
  return _0x523c45.element["type"] === _0x1ddec1.Table;
}
function ca(_0x344428, _0x4ad54e) {
  let _0x4bd9e7 = _0x304b66(_0x344428);
  return {
    scaleX: X(_0x4ad54e.width / _0x4bd9e7.width, 1),
    scaleY: X(_0x4ad54e.height / _0x4bd9e7.height, 1),
  };
}
function la(_0x5e3a2c, _0x31b71d, _0x1f648d, _0x58bd75) {
  let _0x63e211 = _0x58bd75.measurement;
  if (!_0x63e211) return 0;
  let _0xd58f = _0x304b66(_0x5e3a2c),
    _0x3ae002 = _0xd58f.cells["find"](
      (_0x2e12c7) =>
        !_0x2e12c7.hidden &&
        _0x2e12c7.row === _0x58bd75.row &&
        _0x2e12c7.column === _0x58bd75.column,
    );
  if (!_0x3ae002) return 0;
  let _0x5bbca6 = ua(_0x3ae002, _0xd58f.height, _0x1f648d.height),
    _0xee7e2f = X(_0x63e211.contentHeight, _0x5bbca6),
    _0x23ba72 = Math.ceil(_0xee7e2f - _0x5bbca6);
  if (_0x23ba72 <= 0) return 0;
  let _0x1b5cc8 = _0x23ba72 * X(_0xd58f.height / _0x1f648d.height, 1),
    _0xaa3dde = _0x31b71d[_0x3ae002.row + _0x3ae002.rowSpan - 1];
  return _0xaa3dde
    ? ((_0xaa3dde.height = X(_0xaa3dde.height ?? 24, 24) + _0x1b5cc8),
      _0x23ba72)
    : 0;
}
function ua(_0x1f5789, _0x21aaf0, _0x5c58dd) {
  let _0x429661 = _0x5def8b(_0x1f5789.style["margins"]),
    _0x4e04c9 = X(_0x5c58dd / _0x21aaf0, 1);
  return Math.max(
    1,
    _0x1f5789.bounds["height"] * _0x4e04c9 - _0x429661.top - _0x429661.bottom,
  );
}
function da(_0x1ca76f) {
  if (_0x1ca76f === _0x2e4792.MIDDLE) return _0x487bfd.Middle;
  if (_0x1ca76f === _0x2e4792.BOTTOM) return _0x487bfd.Bottom;
  if (_0x1ca76f === _0x2e4792.TOP) return _0x487bfd.Top;
}
function fa(_0x7e535e) {
  var _0x29474f, _0x6754bb;
  ((_0x29474f = _0x7e535e.dispose) == null || _0x29474f.call(_0x7e535e),
    (_0x6754bb = _0x7e535e.unsubscribe) == null || _0x6754bb.call(_0x7e535e));
}
function pa(_0x10fabf, _0x300a61) {
  let _0x5d7684 = X(_0x300a61, 1),
    _0x9d8eb9 = _0x10fabf.map((_0x2daed3) => X(_0x2daed3, 1)),
    _0x2a343e = _0x9d8eb9.reduce(
      (_0x415a3c, _0x345a08) => _0x415a3c + _0x345a08,
      0,
    );
  return _0x9d8eb9.map((_0x1fba2f) => (_0x1fba2f / _0x2a343e) * _0x5d7684);
}
function ma(_0x424de3, _0x5e302c) {
  let _0x2607ab = 0,
    _0x94c801 = { index: 0, distance: Math.abs(_0x5e302c) };
  for (let _0x37b401 = 0; _0x37b401 < _0x424de3.length; _0x37b401 += 1) {
    _0x2607ab += _0x424de3[_0x37b401];
    let _0x287a96 = Math.abs(_0x5e302c - _0x2607ab);
    _0x287a96 < _0x94c801.distance &&
      (_0x94c801 = { index: _0x37b401 + 1, distance: _0x287a96 });
  }
  return _0x94c801.index;
}
function Y(_0x1180f7) {
  _0x1180f7 &&
    (_0x1180f7.stopPropagation(), (_0x1180f7.skipNextObservers = true));
}
function ha(_0x2025eb, _0x3d9935) {
  var _0x127281, _0x566992;
  if (_0x2025eb)
    return (
      ((_0x127281 = _0x2025eb.rows[_0x3d9935 - 1]) == null
        ? undefined
        : _0x127281.height) ??
      ((_0x566992 = _0x2025eb.rows[_0x3d9935]) == null
        ? undefined
        : _0x566992.height)
    );
}
function ga(_0x35dfd4, _0x4ed014) {
  var _0x2663c3, _0x586802;
  if (_0x35dfd4)
    return (
      ((_0x2663c3 = _0x35dfd4.columns[_0x4ed014 - 1]) == null
        ? undefined
        : _0x2663c3.width) ??
      ((_0x586802 = _0x35dfd4.columns[_0x4ed014]) == null
        ? undefined
        : _0x586802.width)
    );
}
function _a(_0x12dba8) {
  if (
    typeof _0x12dba8.insertIndex == "number" &&
    Number.isInteger(_0x12dba8.insertIndex)
  )
    return _0x12dba8.insertIndex;
  let _0x20957f =
    _0x12dba8.kind === "row-insert-dot" ? _0x12dba8.row : _0x12dba8.column;
  return typeof _0x20957f == "number" && Number.isInteger(_0x20957f)
    ? _0x20957f + 1
    : null;
}
function va(_0x53ebfb, _0x28e144) {
  let _0x54d80f = _0x53ebfb.getInverseCoord(_0x28e144),
    _0x244f83 = _0x54d80f.x + _0x53ebfb.width / 2,
    _0x1394c4 = _0x54d80f.y + _0x53ebfb.height / 2;
  return (
    _0x244f83 >= -32 &&
    _0x244f83 <= _0x53ebfb.width + 32 &&
    _0x1394c4 >= -32 &&
    _0x1394c4 <= _0x53ebfb.height + 32
  );
}
function ya(_0x12f93d) {
  let _0x2df0e2 = {
    left: _0x12f93d.left ?? 0,
    top: _0x12f93d.top ?? 0,
    width: _0x12f93d.width ?? 0,
    height: _0x12f93d.height ?? 0,
  };
  return (
    _0x12f93d.rotation !== undefined &&
      (_0x2df0e2.rotation = _0x12f93d.rotation),
    _0x12f93d.flipX !== undefined && (_0x2df0e2.flipX = _0x12f93d.flipX),
    _0x12f93d.flipY !== undefined && (_0x2df0e2.flipY = _0x12f93d.flipY),
    _0x2df0e2
  );
}
function X(_0x296ff9, _0x2d923d) {
  return Number.isFinite(_0x296ff9) && _0x296ff9 > 0 ? _0x296ff9 : _0x2d923d;
}
function ba(_0x1a65ad) {
  return (
    new DOMParser()
      .parseFromString(_0x1a65ad, "text/html")
      .querySelector("img") !== null
  );
}
async function xa(_0xb801dd, _0x4880a8) {
  let _0x5ea623 = _0x37dfdf(_0xb801dd);
  return _0x4880a8
    ? ba(_0x4880a8)
      ? _0x5ea623.length > 0
        ? _0x5ea623
        : _0x1f81d8(_0x4880a8)
      : []
    : _0x5ea623;
}
let Sa = class extends _0xdc142c {
  constructor(_0xfdaf06) {
    (super(), (this._componentManager = _0xfdaf06), this._registerComponents());
  }
  _registerComponents() {
    this.disposeWithMe(this._componentManager["register"](Vi, Ui));
  }
};
Sa = ni([q(0, _0xe67e5f(_0x3503d9))], Sa);
function Ca() {
  return La("board-table.menu.insert", "boards-table-ui.contextMenu.insert");
}
function wa() {
  return La("board-table.menu.delete", "boards-table-ui.contextMenu.delete");
}
function Ta() {
  return La(
    "board-table.menu.distribute",
    "boards-table-ui.contextMenu.distribute",
  );
}
function Ea(_0x28120c) {
  return Q(
    vr.id,
    "boards-table-ui.contextMenu.insertRowAbove",
    Z(_0x28120c, _0x55df2e.InsertRowAbove),
    _0x28120c,
  );
}
function Da(_0x4ebb36) {
  return Q(
    yr.id,
    "boards-table-ui.contextMenu.insertRowBelow",
    Z(_0x4ebb36, _0x55df2e.InsertRowBelow),
    _0x4ebb36,
  );
}
function Oa(_0x274898) {
  return Q(
    br.id,
    "boards-table-ui.contextMenu.insertColumnLeft",
    Z(_0x274898, _0x55df2e.InsertColumnLeft),
    _0x274898,
  );
}
function ka(_0x63bef4) {
  return Q(
    xr.id,
    "boards-table-ui.contextMenu.insertColumnRight",
    Z(_0x63bef4, _0x55df2e.InsertColumnRight),
    _0x63bef4,
  );
}
function Aa(_0x3c6434) {
  return Q(
    Sr.id,
    "boards-table-ui.contextMenu.deleteRow",
    Z(_0x3c6434, _0x55df2e.DeleteRows),
    _0x3c6434,
  );
}
function ja(_0x135804) {
  return Q(
    Cr.id,
    "boards-table-ui.contextMenu.deleteColumn",
    Z(_0x135804, _0x55df2e.DeleteColumns),
    _0x135804,
  );
}
function Ma() {
  return Q(Wr.id, "boards-table-ui.contextMenu.deleteTable", false);
}
function Na(_0x21a293) {
  return Q(
    wr.id,
    "boards-table-ui.editorToolbar.mergeCells",
    Z(_0x21a293, _0x55df2e.MergeCells),
    _0x21a293,
  );
}
function Pa(_0x4ac6b7) {
  return Q(
    Tr.id,
    "boards-table-ui.editorToolbar.unmergeCells",
    Z(_0x4ac6b7, _0x55df2e.UnmergeCells),
    _0x4ac6b7,
  );
}
function Fa(_0x577911) {
  return Q(
    Er.id,
    "boards-table-ui.contextMenu.distributeRows",
    Z(_0x577911, _0x55df2e.DistributeRows),
    _0x577911,
  );
}
function Ia(_0x48db08) {
  return Q(
    Dr.id,
    "boards-table-ui.contextMenu.distributeColumns",
    Z(_0x48db08, _0x55df2e.DistributeColumns),
    _0x48db08,
  );
}
function Z(_0x53ccee, _0x2acde6) {
  return !_0x53ccee || !Kr(_0x53ccee, _0x2acde6);
}
function La(_0x3a2a53, _0x2c0f5f) {
  return { id: _0x3a2a53, type: _0x348e6d.SUBITEMS, title: _0x2c0f5f };
}
function Q(_0x4714ce, _0x44ec5f, _0x473363, _0x4c163c) {
  let _0x12248e =
    _0x4c163c == null ? undefined : _0x4c163c.get(_0x2ff9b6).getSelection();
  return {
    id: _0x4714ce,
    type: _0x348e6d.BUTTON,
    title: _0x44ec5f,
    disabled$: Ra(_0x473363),
    ...(_0x12248e ? { params: { selection: _0x12248e } } : {}),
  };
}
function Ra(_0x105ff5) {
  return {
    subscribe(_0x316bbb) {
      if (typeof _0x316bbb == "function") _0x316bbb(_0x105ff5);
      else {
        var _0xa0018f;
        (_0xa0018f = _0x316bbb.next) == null ||
          _0xa0018f.call(_0x316bbb, _0x105ff5);
      }
      return { unsubscribe: () => {} };
    },
  };
}
const za = {
  [_0x44576c.CONTEXT_MENU]: {
    "board.table.contextMenu.cell": {
      order: 20,
      [_0x5d8107.LAYOUT]: {
        order: 0,
        "board-table.menu.insert": {
          order: 0,
          menuItemFactory: Ca,
          [vr.id]: { order: 0, menuItemFactory: Ea },
          [yr.id]: { order: 1, menuItemFactory: Da },
          [br.id]: { order: 2, menuItemFactory: Oa },
          [xr.id]: { order: 3, menuItemFactory: ka },
        },
        "board-table.menu.delete": {
          order: 1,
          menuItemFactory: wa,
          [Sr.id]: { order: 0, menuItemFactory: Aa },
          [Cr.id]: { order: 1, menuItemFactory: ja },
        },
        [wr.id]: { order: 2, menuItemFactory: Na },
        [Tr.id]: { order: 3, menuItemFactory: Pa },
        "board-table.menu.distribute": {
          order: 4,
          menuItemFactory: Ta,
          [Er.id]: { order: 0, menuItemFactory: Fa },
          [Dr.id]: { order: 1, menuItemFactory: Ia },
        },
      },
      [_0x5d8107.OTHERS]: {
        order: 1,
        [Wr.id]: { order: 0, menuItemFactory: Ma },
      },
    },
  },
};
function Ba(_0x54d9d0) {
  let _0x23abd1 = _0x54d9d0;
  return (_0x23abd1 == null ? undefined : _0x23abd1.type) !== _0x1ddec1.Table ||
    typeof _0x23abd1.tableId != "string"
    ? null
    : _0x23abd1;
}
function Va(_0x2282ba, _0x2e8538, _0x43dafe, _0x5015d8) {
  return {
    name: "table",
    createObject: ({
      unitId: _0x580ce6,
      elementDataItem: _0xaa5fa9,
      key: _0x55857e,
      bounds: _0x4d17e0,
      zIndex: _0x2c06b2,
    }) => {
      let _0x106611 = Ba(_0xaa5fa9.element);
      if (!_0x106611) return null;
      let _0x34e63b = _0x2282ba.getTable(_0x580ce6, _0x106611.tableId);
      return new Zi(_0x55857e, {
        ..._0x4d17e0,
        element: _0x106611,
        localeService: _0x2e8538,
        tableThemePalette: _0x43dafe,
        tableThemes: _0x2282ba.getThemes(_0x580ce6),
        themeService: _0x5015d8,
        table: _0x34e63b,
        zIndex: _0x2c06b2,
        evented: true,
      });
    },
    syncObject: (
      _0x21e552,
      {
        unitId: _0x978261,
        elementDataItem: _0x4d79b8,
        bounds: _0x2177d6,
        zIndex: _0x4ffb28,
        preserveTransform: _0xe50c35,
      },
    ) => {
      if (!(_0x21e552 instanceof Zi)) return false;
      let _0x268cfd = Ba(_0x4d79b8.element);
      return _0x268cfd
        ? (_0xe50c35 || _0x21e552.transformByState(_0x2177d6),
          _0x4ffb28 !== undefined &&
            _0x21e552.zIndex !== _0x4ffb28 &&
            (_0x21e552.zIndex = _0x4ffb28),
          _0x21e552.updateElement(_0x268cfd),
          _0x21e552.setLocaleService(_0x2e8538),
          _0x21e552.setTableThemePalette(_0x43dafe),
          _0x21e552.setTableThemes(_0x2282ba.getThemes(_0x978261)),
          _0x21e552.setTable(_0x2282ba.getTable(_0x978261, _0x268cfd.tableId)),
          _0x21e552.makeDirty(true),
          true)
        : false;
    },
  };
}
let Ha = class {
  constructor(_0x6c01e) {
    ((this._resourceService = _0x6c01e), J(this, "key", "board-table"));
  }
  collect(_0x3d4993) {
    let _0x3a368b = {},
      _0x1a329e = {};
    return (
      _0x3d4993.elements["forEach"]((_0x194bb7) => {
        if (!Ua(_0x194bb7)) return;
        let _0x18a11d = this._resourceService["getTable"](
          _0x3d4993.unitId,
          _0x194bb7.tableId,
        );
        if (!_0x18a11d) return;
        _0x3a368b[_0x194bb7.id] = _0x14f5d5.deepClone(_0x18a11d);
        let _0x3c33d6 = _0x18a11d.themeId
          ? this._resourceService["getTheme"](
              _0x3d4993.unitId,
              _0x18a11d.themeId,
            )
          : undefined;
        _0x3c33d6 && (_0x1a329e[_0x3c33d6.id] = _0x14f5d5.deepClone(_0x3c33d6));
      }),
      Object.keys(_0x3a368b).length > 0
        ? { tablesByElementId: _0x3a368b, themes: _0x1a329e }
        : null
    );
  }
  serialize(_0x347cb7) {
    let _0x9fdd46 = _0x347cb7.elements["filter"](Ua)
      .map((_0xd1a037) =>
        this._resourceService["getTable"](_0x347cb7.unitId, _0xd1a037.tableId),
      )
      .filter((_0x20eada) => _0x20eada !== undefined);
    return _0x9fdd46.length > 0
      ? {
          html: _0x9fdd46.map(Xa).join("<br>"),
          plainText: _0x9fdd46.map(Ya).join("\x0a"),
        }
      : null;
  }
  parseExternalHtml(_0x43cdaa) {
    let _0xf59e0a = Ga(_0x43cdaa.html);
    if (!_0xf59e0a) return null;
    let _0x56e948 = _0x463bd1(6),
      _0x52fa37 = Ka(_0xf59e0a),
      _0x265fc2 = _0x52fa37.columns["reduce"](
        (_0x26f02f, _0x47e01e) => _0x26f02f + _0x47e01e.width,
        0,
      ),
      _0x375bd3 = _0x52fa37.rows["reduce"](
        (_0x3bfb73, _0x2a3535) => _0x3bfb73 + (_0x2a3535.height ?? 28),
        0,
      );
    return {
      elements: [
        {
          id: _0x56e948,
          type: _0x1ddec1.Table,
          tableId: _0x52fa37.id,
          transform: {
            left: Math.round(_0x43cdaa.point["x"] - _0x265fc2 / 2),
            top: Math.round(_0x43cdaa.point["y"] - _0x375bd3 / 2),
            width: _0x265fc2,
            height: _0x375bd3,
            rotation: 0,
          },
        },
      ],
      resources: {
        [this.key]: {
          tablesByElementId: { [_0x56e948]: _0x52fa37 },
          themes: {},
        },
      },
    };
  }
  parseExternalPlainText(_0x97c80c) {
    let _0x22c3b7 = _0x931ccb(_0x97c80c.text);
    return _0x22c3b7
      ? this.parseExternalHtml({ ..._0x97c80c, html: _0x22c3b7 })
      : null;
  }
  preparePaste(_0x4c8f43) {
    if (!Wa(_0x4c8f43.payload)) return null;
    let _0xdd014f = _0x4c8f43.payload,
      _0xcc1ac9 = new Map();
    _0x4c8f43.elementIdMap["forEach"]((_0x4c1856, _0x29137b) =>
      _0xcc1ac9.set(_0x4c1856, _0x29137b),
    );
    let _0x2e42c8 = [],
      _0x46bcc1 = _0x4c8f43.elements["map"]((_0x48f563) => {
        if (!Ua(_0x48f563)) return _0x48f563;
        let _0x4ed8bf = _0xcc1ac9.get(_0x48f563.id),
          _0xccf588 = _0x4ed8bf
            ? _0xdd014f.tablesByElementId[_0x4ed8bf]
            : undefined;
        if (!_0xccf588) return _0x48f563;
        let _0x21968f = _0x463bd1(6),
          _0x11a3e1 = _0xccf588.themeId
            ? _0xdd014f.themes[_0xccf588.themeId]
            : undefined,
          _0x3de77b = _0x11a3e1
            ? { ..._0x14f5d5.deepClone(_0x11a3e1), id: _0x463bd1(6) }
            : undefined,
          _0x6afcfa = {
            ..._0x14f5d5.deepClone(_0xccf588),
            id: _0x21968f,
            themeId: _0x3de77b == null ? undefined : _0x3de77b.id,
          };
        return (
          _0x2e42c8.push({ table: _0x6afcfa, theme: _0x3de77b }),
          { ..._0x48f563, tableId: _0x21968f }
        );
      });
    return _0x2e42c8.length === 0
      ? null
      : {
          elements: _0x46bcc1,
          redoMutations: _0x2e42c8.map(
            ({ table: _0x44050b, theme: _0x13e548 }) => ({
              id: _0x55cb2b.id,
              params: {
                unitId: _0x4c8f43.targetUnitId,
                table: _0x44050b,
                theme: _0x13e548,
              },
            }),
          ),
          undoMutations: [..._0x2e42c8]
            .reverse()
            .map(({ table: _0x54f57e }) => ({
              id: _0x4318df.id,
              params: { unitId: _0x4c8f43.targetUnitId, tableId: _0x54f57e.id },
            })),
        };
  }
};
Ha = ni([q(0, _0xe67e5f(_0x2ab092))], Ha);
function Ua(_0x4dd827) {
  return _0x4dd827.type === _0x1ddec1.Table;
}
function Wa(_0x40eb45) {
  return !_0x40eb45 || typeof _0x40eb45 != "object"
    ? false
    : "tablesByElementId" in _0x40eb45 &&
        !!_0x40eb45.tablesByElementId &&
        typeof _0x40eb45.tablesByElementId == "object" &&
        "themes" in _0x40eb45 &&
        !!_0x40eb45.themes &&
        typeof _0x40eb45.themes == "object";
}
function Ga(_0x4f7ede) {
  let _0x33e21b = new DOMParser().parseFromString(_0x4f7ede, "text/html"),
    _0x5a28a0 = _0x33e21b.querySelectorAll("table");
  if (
    _0x5a28a0.length !== 1 ||
    (_0x5a28a0[0].remove(),
    (_0x33e21b.body["textContent"] ?? "").trim() ||
      _0x33e21b.body["querySelector"]("img"))
  )
    return null;
  let _0x2cff54 = _0x50fb60(_0x4f7ede);
  return _0x2cff54.rows["length"] > 0 && _0x2cff54.columnWidths["length"] > 0
    ? _0x2cff54
    : null;
}
function Ka(_0x9de94c) {
  let _0x2fbf56 = {
    id: _0x463bd1(6),
    rev: 0,
    options: {},
    columns: _0x9de94c.columnWidths["map"]((_0x245528) => ({
      width: eo(_0x245528 ?? 100, 24, 320),
    })),
    rows: _0x9de94c.rows["map"]((_0x249ab9) => ({
      height: eo(_0x249ab9.height ?? 28, 20, 180),
      cells: _0x249ab9.cells["map"]((_0x23bc8b) => qa(_0x23bc8b)),
    })),
  };
  return (
    _0x9de94c.rows["forEach"]((_0x5bff5d, _0x321859) => {
      _0x5bff5d.cells["forEach"]((_0x59853f, _0x4ef8ec) => {
        if (_0x59853f) {
          for (let _0x316205 = 0; _0x316205 < _0x59853f.rowSpan; _0x316205 += 1)
            for (
              let _0x22c5b3 = 0;
              _0x22c5b3 < _0x59853f.colSpan;
              _0x22c5b3 += 1
            ) {
              var _0x56bb04;
              if (_0x316205 === 0 && _0x22c5b3 === 0) continue;
              let _0x1676eb =
                (_0x56bb04 = _0x2fbf56.rows[_0x321859 + _0x316205]) == null
                  ? undefined
                  : _0x56bb04.cells[_0x4ef8ec + _0x22c5b3];
              _0x1676eb &&
                ((_0x1676eb.hMerge = _0x22c5b3 > 0),
                (_0x1676eb.vMerge = _0x316205 > 0));
            }
        }
      });
    }),
    _0x2fbf56
  );
}
function qa(_0x379a70) {
  if (!_0x379a70) return {};
  let _0x21bbd9 = Ja(_0x603996(_0x379a70.html)) ?? Ja($a(_0x379a70.text)),
    _0x3b5b77 =
      _0x379a70.borderColor || _0x379a70.borderWidth
        ? {
            color: _0x379a70.borderColor,
            width: _0x379a70.borderWidth,
            dash: _0x204d64.Solid,
          }
        : undefined;
  return {
    textData: _0x21bbd9 ?? undefined,
    rowSpan: _0x379a70.rowSpan > 1 ? _0x379a70.rowSpan : undefined,
    columnSpan: _0x379a70.colSpan > 1 ? _0x379a70.colSpan : undefined,
    style:
      _0x379a70.backgroundColor || _0x3b5b77
        ? {
            fill: _0x379a70.backgroundColor
              ? { type: _0x650736.Solid, color: _0x379a70.backgroundColor }
              : undefined,
            borders: _0x3b5b77
              ? {
                  top: _0x3b5b77,
                  right: _0x3b5b77,
                  bottom: _0x3b5b77,
                  left: _0x3b5b77,
                }
              : undefined,
          }
        : undefined,
  };
}
function Ja(_0x345f6e) {
  try {
    var _0x448c1c;
    let _0x5a0dc4 = _0x2f7c41(_0x345f6e, _0x463bd1(6));
    return (_0x448c1c = _0x5a0dc4.body) != null && _0x448c1c.dataStream
      ? {
          ..._0x5a0dc4,
          id: _0x5a0dc4.id || _0x463bd1(6),
          body: _0x5a0dc4.body,
          documentStyle: _0x5a0dc4.documentStyle ?? {},
        }
      : null;
  } catch {
    return null;
  }
}
function Ya(_0x5d55dc) {
  return _0x5d55dc.rows["map"]((_0x427523) =>
    _0x427523.cells["map"]((_0x4bf90b) =>
      _0x4bf90b.hMerge || _0x4bf90b.vMerge
        ? ""
        : _0x4bf90b.textData
          ? Za(_0x4bf90b.textData).replace(/[\t\r\n]+/g, "\x20")
          : "",
    ).join("\x09"),
  ).join("\x0a");
}
function Xa(_0x154bf3) {
  return (
    "<table><colgroup>" +
    _0x154bf3.columns["map"](
      (_0x515147) => '<col style="width: ' + _0x515147.width + 'px">',
    ).join("") +
    "</colgroup><tbody>" +
    _0x154bf3.rows["map"]((_0x1ae026) => {
      let _0x30e39d = _0x1ae026.cells["map"]((_0x1eb738) => {
        if (_0x1eb738.hMerge || _0x1eb738.vMerge) return "";
        let _0xb7dba1 = [
            _0x1eb738.rowSpan && _0x1eb738.rowSpan > 1
              ? "rowspan=\x22" + _0x1eb738.rowSpan + "\x22"
              : "",
            _0x1eb738.columnSpan && _0x1eb738.columnSpan > 1
              ? "colspan=\x22" + _0x1eb738.columnSpan + "\x22"
              : "",
            _0x24b702(_0x1eb738),
          ]
            .filter(Boolean)
            .join("\x20"),
          _0x512bfa = _0x1eb738.textData ? Qa(_0x1eb738.textData) : "";
        return (
          "<td" +
          (_0xb7dba1 ? "\x20" + _0xb7dba1 : "") +
          ">" +
          _0x512bfa +
          "</td>"
        );
      }).join("");
      return (
        "<tr" +
        (_0x1ae026.height
          ? "\x20style=\x22height:\x20" + _0x1ae026.height + 'px"'
          : "") +
        ">" +
        _0x30e39d +
        "</tr>"
      );
    }).join("") +
    "</tbody></table>"
  );
}
function Za(_0x131653) {
  var _0x599b2b;
  return (
    ((_0x599b2b = _0x131653.body) == null ? undefined : _0x599b2b.dataStream) ??
    ""
  )
    .replace(/\r\n$/, "")
    .replace(/\r/g, "\x0a");
}
function Qa(_0x14adf7) {
  try {
    return _0x2d5b4f(_0x14f5d5.deepClone(_0x14adf7));
  } catch {
    return "";
  }
}
function $a(_0x3dd2a5) {
  return _0x3dd2a5
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function eo(_0x2e2ddd, _0x5e7795, _0x579cab) {
  return Math.min(_0x579cab, Math.max(_0x5e7795, _0x2e2ddd));
}
var to;
const no = [ai];
let $ = (to = class extends _0x1abc02 {
  constructor(
    _0xf1fd1b = fi,
    _0x420929,
    _0x308e88,
    _0x2e6d5c,
    _0x11c1fd,
    _0x56c722,
    _0x5be0d1,
    _0xb1ea0c,
    _0x1975b6,
  ) {
    (super(),
      (this._config = _0xf1fd1b),
      (this._injector = _0x420929),
      (this._configService = _0x308e88),
      (this._renderManagerService = _0x2e6d5c),
      (this._localeService = _0x11c1fd),
      (this._themeService = _0x56c722),
      (this._commandService = _0x5be0d1),
      (this._menuManagerService = _0xb1ea0c),
      (this._shortcutService = _0x1975b6),
      J(this, "_adapter", null));
    let { ..._0x1cc0cc } = _0x4d986a({}, fi, this._config);
    this._configService["setConfig"]("boards-table-ui.config", _0x1cc0cc);
  }
  onStarting() {
    (_0x4a2006.registerRuntimeScopedDependencies(
      this._injector,
      to.scopedDependencies,
    ),
      this._injector["has"](_0x2ff9b6) || this._injector["add"]([_0x2ff9b6]),
      this._injector["add"]([ii]),
      this._injector["add"]([ea]),
      this._injector["add"]([Ha]),
      this._injector["add"]([Sa]),
      this._injector["has"](_0x43818d) ||
        this._injector["add"]([_0x43818d, { useClass: _0x5af965 }]),
      _0x2a6a0d(this._injector, [[_0x2ff9b6]]),
      _0x2a6a0d(this._injector, [[ii]]),
      _0x2a6a0d(this._injector, [[ea]]),
      _0x2a6a0d(this._injector, [[Ha]]),
      _0x2a6a0d(this._injector, [[_0x43818d]]),
      this.disposeWithMe(this._injector["get"](Sa)),
      this.disposeWithMe(
        this._injector["get"](_0x4ae7c8).registerAdapter(
          this._injector["get"](Ha),
        ),
      ));
    let _0x1e21c3 = Va(
      this._injector["get"](_0x2ab092),
      this._localeService,
      _0x20cfe6((_0x4270ed) =>
        this._themeService["getColorFromTheme"](_0x4270ed),
      ),
      this._themeService,
    );
    ((this._adapter = _0x1e21c3),
      this._appendRenderAdapter(_0x1e21c3),
      [...Gr, ...ci].forEach((_0x4537d6) => {
        this.disposeWithMe(this._commandService["registerCommand"](_0x4537d6));
      }),
      li.forEach((_0x1bdd3e) => {
        this.disposeWithMe(
          this._shortcutService["registerShortcut"](_0x1bdd3e),
        );
      }),
      this.disposeWithMe(
        _0x192ad5(() => {
          (this._removeRenderAdapter(_0x1e21c3), (this._adapter = null));
        }),
      ));
  }
  onReady() {
    (this._menuManagerService["mergeMenu"](za),
      this.disposeWithMe(
        this._renderManagerService["registerRenderModule"](
          _0x26c2da.UNIVER_BOARD,
          no,
        ),
      ),
      this.disposeWithMe(
        this._renderManagerService["registerRenderModule"](
          _0x26c2da.UNIVER_BOARD,
          Qi,
        ),
      ),
      this.disposeWithMe(
        this._renderManagerService["registerRenderModule"](
          _0x26c2da.UNIVER_BOARD,
          oa,
        ),
      ),
      this.disposeWithMe(
        this._renderManagerService["registerRenderModule"](
          _0x26c2da.UNIVER_BOARD,
          Ji,
        ),
      ));
  }
  _appendRenderAdapter(_0x4e62fc) {
    var _0x5a8ba6, _0x1ab409;
    let _0x54ad3e = this._getBoardsUIConfig(),
      _0x93043b = _0x54ad3e.additionalRenderAdapters ?? [];
    _0x93043b.includes(_0x4e62fc) ||
      this._configService["setConfig"](_0x22108f, {
        ..._0x54ad3e,
        additionalRenderAdapters: [..._0x93043b, _0x4e62fc],
        toolbar: {
          ..._0x54ad3e.toolbar,
          tools: {
            ...((_0x5a8ba6 = _0x54ad3e.toolbar) == null
              ? undefined
              : _0x5a8ba6.tools),
            [_0x1d53a2.Table]: ro(
              (_0x1ab409 = _0x54ad3e.toolbar) == null ||
                (_0x1ab409 = _0x1ab409.tools) == null
                ? undefined
                : _0x1ab409[_0x1d53a2.Table],
            ),
          },
        },
      });
  }
  _removeRenderAdapter(_0x53bdc6) {
    var _0x4ea28f;
    let _0x307d66 = this._getBoardsUIConfig(),
      _0x257856 =
        (_0x4ea28f = _0x307d66.additionalRenderAdapters) == null
          ? undefined
          : _0x4ea28f.filter((_0x28f2fb) => _0x28f2fb !== _0x53bdc6);
    this._configService["setConfig"](_0x22108f, {
      ..._0x307d66,
      additionalRenderAdapters: _0x257856,
    });
  }
  _getBoardsUIConfig() {
    return this._configService["getConfig"](_0x22108f) ?? {};
  }
});
(J($, "pluginName", "UNIVER_BOARDS_TABLE_UI_PLUGIN"),
  J($, "packageName", pr),
  J($, "version", mr),
  J($, "type", _0x26c2da.UNIVER_BOARD),
  J($, "scopedDependencies", [
    [_0x2ff9b6],
    [ii],
    [ea],
    [_0x43818d, { useClass: _0x5af965 }],
  ]),
  ($ = to =
    ni(
      [
        _0x18cca3(
          _0x4bf397,
          _0x43d2c0,
          _0x8effc2,
          _0x2c7833,
          _0x1fb6b4,
          _0x36fdfe,
          _0x4a2006,
          _0x518e1c,
        ),
        q(1, _0xe67e5f(_0xa0968)),
        q(2, _0x14eecd),
        q(3, _0x55c9b0),
        q(4, _0xe67e5f(_0x534bdd)),
        q(5, _0xe67e5f(_0x55d498)),
        q(6, _0x2014c6),
        q(7, _0x14fb30),
        q(8, _0x51fdbb),
      ],
      $,
    )));
function ro(_0x3e7dc2) {
  return _0x3e7dc2 === false
    ? false
    : typeof _0x3e7dc2 != "object" || {
        ..._0x3e7dc2,
        enabled: _0x3e7dc2.enabled ?? true,
      };
}
export { $ as UniverBoardsTableUIPlugin };
