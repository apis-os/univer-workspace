import { UniverLicensePlugin as _0x186520 } from "@univerjs-pro/license";
import {
  ISlideDrawingService as _0x10d183,
  PageElementTypeEnum as _0x17964d,
  ReorderSlideElementsCommand as _0x1b7a69,
  UniverSlidesPlugin as _0x2c3996,
  UpdateSlideDrawingCommand as _0x45bfed,
  getSlidePermissionValue as _0x100a32,
  normalizeSlideDocumentDataStream as _0x5832e3,
  slideDocumentDataToPlainText as _0x591349,
} from "@univerjs-pro/slides";
import {
  DEFAULT_SLIDE_TABLE_THEME_PRESETS as _0x5c378e,
  DeleteSlideTableColumnsCommand as _0x242f72,
  DeleteSlideTableRowsCommand as _0x4e3296,
  InsertSlideTableColumnsCommand as _0x36f341,
  InsertSlideTableRowsCommand as _0x84e104,
  MergeSlideTableCellsCommand as _0x55f8de,
  MoveSlideTableColumnsCommand as _0x345591,
  MoveSlideTableRowsCommand as _0x45f5f0,
  RemoveSlideTableCommand as _0x1289f7,
  RemoveSlideTableMutation as _0x26dabf,
  SLIDE_TABLE_CONTROL_GUTTER as _0x326313,
  SetSlideTableMutation as _0x57af51,
  SlideTableBorderDashEnum as _0x32edb5,
  SlideTableBorderPresetEnum as _0xfc89dc,
  SlideTableFillTypeEnum as _0x44feb0,
  SlideTableModelService as _0x1699a1,
  SlideTablePictureFillModeEnum as _0x3f481,
  SlideTableResourceService as _0x4fffa3,
  SlideTableTextDirectionEnum as _0x4868bf,
  SlideTableVerticalAlignEnum as _0x5b0766,
  UniverSlidesTablePlugin as _0x258940,
  UnmergeSlideTableCellsCommand as _0x35bd09,
  UpdateSlideTableCommand as _0x3f8728,
  buildBorderPresetPatch as _0x4f3ef2,
  buildDefaultSlideTableThemes as _0x1a9ae0,
  buildSlideTableCellTextDataPatch as _0x5bb6b9,
  buildSlideTableControls as _0x4d8b1c,
  buildSlideTableTriggers as _0xd3ba77,
  canMoveSlideTableColumns as _0x1d7e67,
  canMoveSlideTableRows as _0x51e9ad,
  collectSlideTableMergeRanges as _0x2d2ec6,
  expandSlideTableRangeToMergedCells as _0x2f16a1,
  findSlideTableMergeRange as _0x2e284b,
  freezeSlideTableTheme as _0x51a5cc,
  getDefaultSlideTableBorder as _0x220a46,
  hitTestSlideTableControl as _0x12cba6,
  hitTestSlideTableFloatingControl as _0x5c18d4,
  hitTestSlideTableTrigger as _0x9c554a,
  isPointInRect as _0x448c2d,
  isSlideTableMultiCellRange as _0x2dc3c6,
  iterateSelectedSlideTableCells as _0x2638e7,
  mergeSlideTableCellStyle as _0x52c7f0,
  mergeSlideTableCells as _0x4981c2,
  normalizeSlideTableCellRange as _0x3fbad0,
  resolveSlideTableCellBoundaryBorder as _0x1780d9,
  resolveSlideTableCellRect as _0x305cb8,
  resolveSlideTableCellTextMargins as _0xaa2b68,
  resolveSlideTableRenderModel as _0x509c52,
  resolveSlideTableThemePalette as _0x54aa8e,
  unmergeSlideTableCells as _0xb7f424,
} from "@univerjs-pro/slides-table";
import {
  IEditorUIService as _0x49ec4c,
  ISlideAlignmentGuideService as _0x2121dd,
  ISlideClipboardResourceAdapterService as _0x56a715,
  ISlideDrawingStateService as _0x4127e0,
  ISlideEmbedFloatingActiveService as _0xe3afd5,
  ISlideEmbedFocusOwnerService as _0x30bdac,
  ISlideEmbedMountService as _0x10a47e,
  ISlideTransformerVisibilityService as _0x27b3e3,
  SLIDES_UI_PLUGIN_CONFIG_KEY as _0x29a240,
  SLIDE_MAIN_VIEWPORT_KEY as _0x31da2f,
  SlideHitTestService as _0x5d6542,
  SlideInsertService as _0x56841d,
  UniverSlidesUIPlugin as _0x542970,
  buildDrawingOKey as _0x4b5215,
  stripEditorUIDocumentData as _0x955b98,
  withSlideEditPermission as _0x8eb4f2,
} from "@univerjs-pro/slides-ui";
import {
  ArrangeTypeEnum as _0x544607,
  BooleanNumber as _0x44fc22,
  ColorKit as _0x1f520c,
  CommandType as _0x1d6b9a,
  DEFAULT_STYLES as _0x35b3dd,
  DependentOn as _0x31b9be,
  Disposable as _0x3eba9a,
  DocumentDataModel as _0x2d779f,
  DocumentFlavor as _0x5ce310,
  EDITOR_ACTIVATED as _0x285afb,
  FOCUSING_COMMON_DRAWINGS as _0x10cc12,
  FOCUSING_SLIDE as _0x7a5c4e,
  HorizontalAlign as _0x582ddb,
  ICommandService as _0x59c1bd,
  IConfigService as _0x34ee95,
  IContextService as _0xab580a,
  IImageIoService as _0x5c2e21,
  IPermissionService as _0x4f9b52,
  IUniverInstanceService as _0x3c4413,
  Inject as _0x487340,
  Injector as _0x2b45a4,
  LocaleService as _0x3e56ef,
  Optional as _0x3664f1,
  Plugin as _0x496a83,
  PresetListType as _0x2dcdea,
  RxDisposable as _0x184458,
  ThemeService as _0xd94a7b,
  Tools as _0x16106d,
  UniverInstanceType as _0x24887c,
  VerticalAlign as _0x1ba0d9,
  WrapStrategy as _0x1931d3,
  createParagraphId as _0x1d2f62,
  generateRandomId as _0x1a424d,
  merge as _0x3d7a71,
  toDisposable as _0xdc718a,
  touchDependencies as _0x924350,
} from "@univerjs/core";
import {
  CURSOR_TYPE as _0x32f3a4,
  DocumentSkeleton as _0x4dc047,
  DocumentViewModel as _0x4f628b,
  Documents as _0x1e8497,
  IRenderManagerService as _0x480a87,
  RENDER_CLASS_TYPE as _0x1d7918,
  Rect as _0x1cf7dc,
  Transform as _0x2c7c4,
  UniverRenderEnginePlugin as _0x14a204,
  VERTICAL_ROTATE_ANGLE as _0x593b52,
  Vector2 as _0x25842b,
  pxToNum as _0x50039e,
} from "@univerjs/engine-render";
import {
  BuiltInUIPart as _0x1e346c,
  ComponentManager as _0x32a693,
  ContextMenuGroup as _0x38a8c2,
  FONT_SIZE_LIST as _0x499089,
  FontFamilyDropdown as _0x321b51,
  IContextMenuService as _0x20bea0,
  IMenuManagerService as _0x5c187f,
  IRibbonService as _0x265eed,
  IShortcutService as _0x379dfd,
  IUIPartsService as _0x48a105,
  IconManager as _0x159a82,
  KeyCode as _0x383038,
  MenuItemType as _0x21e33e,
  MenuManagerPosition as _0x5f58d9,
  MetaKeys as _0x4181d5,
  connectInjector as _0x162409,
  useDependency as _0x22a685,
  useObservable as _0x4b666e,
} from "@univerjs/ui";
import {
  BehaviorSubject as _0x274664,
  combineLatest as _0x54a368,
  map as _0xdcbb46,
  merge as _0x31905f,
  of as _0x5bae09,
  startWith as _0x1152d4,
} from "rxjs";
import {
  AdjustHeightDoubleIcon as _0xd8c0a3,
  AdjustWidthDoubleIcon as _0x11cbe0,
  AlignBottomIcon as _0x926af6,
  AlignTextBothIcon as _0x46c6a9,
  AlignTopIcon as _0x34b6aa,
  AllBorderIcon as _0x23a34e,
  BoldIcon as _0xd17514,
  CancelMergeIcon as _0x39cb4d,
  CheckMarkIcon as _0x5ad943,
  DeleteColumnDoubleIcon as _0x9333b7,
  DeleteIcon as _0x51d027,
  DeleteRowDoubleIcon as _0x390b1d,
  DownBorderDoubleIcon as _0x402c0f,
  FontColorDoubleIcon as _0x43556b,
  FontSizeIncreaseIcon as _0x550def,
  FontSizeReduceIcon as _0x58afd0,
  HorizontalBorderDoubleIcon as _0x121f50,
  HorizontallyIcon as _0x35743f,
  InnerBorderDoubleIcon as _0x4dcc59,
  InsertRowAboveDoubleIcon as _0x32f25a,
  InsertRowBelowDoubleIcon as _0x56febc,
  ItalicIcon as _0x5cc895,
  LeftBorderDoubleIcon as _0x3b1d66,
  LeftInsertColumnDoubleIcon as _0x1ea7ec,
  LeftJustifyingIcon as _0x4a868b,
  MergeAllIcon as _0x84941e,
  MoreDownIcon as _0xc7f52a,
  NoBorderIcon as _0x1a6842,
  OrderIcon as _0x3b24a7,
  OuterBorderDoubleIcon as _0x1e8c11,
  PaintBucketDoubleIcon as _0x25a17b,
  PaintIcon as _0x2598c6,
  RightBorderDoubleIcon as _0x5ce49a,
  RightInsertColumnDoubleIcon as _0x29a488,
  RightJustifyingIcon as _0x5ec192,
  ShapeBackgroundColorDoubleIcon as _0x2b60fd,
  StrikethroughIcon as _0xf878ab,
  TextIcon as _0x35af64,
  UnderlineIcon as _0x56cbcc,
  UnorderIcon as _0x247fee,
  UpBorderDoubleIcon as _0x2022e9,
  VerticalBorderDoubleIcon as _0xaa10a7,
  VerticalCenterIcon as _0x3780d1,
} from "@univerjs/icons";
import {
  FillStyleTabsEditor as _0x31209d,
  keepFloatingToolbarPanelInteraction as _0x534f0e,
} from "@univerjs-pro/shape-editor-ui";
import {
  Button as _0x292281,
  Checkbox as _0x4682a5,
  ColorPicker as _0x53292c,
  Dropdown as _0x63bf71,
  InputNumber as _0x20e7bb,
  Select as _0x1c5e22,
  Separator as _0x3e9729,
  Tooltip as _0x41fff0,
  borderClassName as _0x470cce,
  clsx as _0x2a7ac1,
} from "@univerjs/design";
import {
  BulletListTypePicker as _0x20e38c,
  OrderListTypePicker as _0x3c9466,
  convertBodyToHtml as _0xf5e5a8,
  convertClipboardHtmlToDocumentData as _0x3d021c,
  removeClipboardHtmlImages as _0x4e5821,
} from "@univerjs/docs-ui";
import {
  useCallback as _0x3856d9,
  useEffect as _0x52562f,
  useMemo as _0x47b680,
  useRef as _0x5b71ae,
  useState as _0x1498db,
} from "react";
import { getImageSize as _0x5b34f3 } from "@univerjs/drawing";
import {
  Fragment as _0x536f29,
  jsx as _0x62bf85,
  jsxs as _0x4f34d5,
} from "react/jsx-runtime";
import {
  extractClipboardHtmlImageFiles as _0x3c08cd,
  extractClipboardImageFiles as _0x5eb277,
  extractClipboardTextImageFile as _0x3ea920,
  isClipboardTextImage as _0x13ea6f,
  normalizeClipboardImageFile as _0x39921d,
} from "@univerjs/drawing-ui";
import { UnitAction as _0x46d205 } from "@univerjs/protocol";
import { parseHtmlTableClipboard as _0x151eb4 } from "@univerjs-pro/docs-table";
const vr = "slides-table-ui.config",
  yr = { floatingToolbar: false };
var br = "@univerjs-pro/slides-table-ui",
  xr = "1.0.0-insiders.20260907-70fc579";
function Sr(_0x2ef0e6) {
  "@babel/helpers - typeof";
  return (
    (Sr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x430f2d) {
            return typeof _0x430f2d;
          }
        : function (_0x363fd7) {
            return _0x363fd7 &&
              typeof Symbol == "function" &&
              _0x363fd7.constructor === Symbol &&
              _0x363fd7 !== Symbol.prototype
              ? "symbol"
              : typeof _0x363fd7;
          }),
    Sr(_0x2ef0e6)
  );
}
function Cr(_0x3970c8, _0x420422) {
  if (Sr(_0x3970c8) != "object" || !_0x3970c8) return _0x3970c8;
  var _0x38a18e = _0x3970c8[Symbol.toPrimitive];
  if (_0x38a18e !== undefined) {
    var _0x44e12a = _0x38a18e.call(_0x3970c8, _0x420422 || "default");
    if (Sr(_0x44e12a) != "object") return _0x44e12a;
    throw TypeError(
      "@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.",
    );
  }
  return (_0x420422 === "string" ? String : Number)(_0x3970c8);
}
function wr(_0xe6e4ce) {
  var _0x46f0fc = Cr(_0xe6e4ce, "string");
  return Sr(_0x46f0fc) == "symbol" ? _0x46f0fc : _0x46f0fc + "";
}
function W(_0x481947, _0x2cc666, _0x2334a5) {
  return (
    (_0x2cc666 = wr(_0x2cc666)) in _0x481947
      ? Object.defineProperty(_0x481947, _0x2cc666, {
          value: _0x2334a5,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x481947[_0x2cc666] = _0x2334a5),
    _0x481947
  );
}
var G = class extends _0x3eba9a {
  constructor(..._0x4c6df9) {
    (super(..._0x4c6df9),
      W(this, "_selection$", new _0x274664(null)),
      W(this, "selection$", this._selection$["asObservable"]()),
      W(this, "_selection", null),
      W(this, "_tableInternalInteractionUntil", 0));
  }
  markTableInternalInteraction(_0x32fda9 = 500, _0xe0a8d6 = Date.now()) {
    this._tableInternalInteractionUntil = Math.max(
      this._tableInternalInteractionUntil,
      _0xe0a8d6 + _0x32fda9,
    );
  }
  isTableInternalInteractionActive(_0x56fe3d = Date.now()) {
    return _0x56fe3d <= this._tableInternalInteractionUntil;
  }
  getSelection() {
    return this._selection ? K(this._selection) : null;
  }
  clear() {
    ((this._selection = null), this._selection$["next"](null));
  }
  selectCell(_0x4f80d0) {
    let _0x10648a = this._buildSelection(
      _0x4f80d0,
      "cell",
      {
        startRow: _0x4f80d0.row,
        endRow: _0x4f80d0.row,
        startColumn: _0x4f80d0.column,
        endColumn: _0x4f80d0.column,
      },
      { row: _0x4f80d0.row, column: _0x4f80d0.column },
      { row: _0x4f80d0.row, column: _0x4f80d0.column },
    );
    return (
      (this._selection = _0x10648a),
      this._selection$["next"](K(_0x10648a)),
      K(_0x10648a)
    );
  }
  selectRange(_0x58a962) {
    let _0x3cf541 = Tr(_0x58a962),
      _0x4b6d3b = this._buildSelection(
        _0x58a962,
        "range",
        _0x3cf541,
        { row: _0x3cf541.startRow, column: _0x3cf541.startColumn },
        { row: _0x3cf541.endRow, column: _0x3cf541.endColumn },
      );
    return (
      (this._selection = _0x4b6d3b),
      this._selection$["next"](K(_0x4b6d3b)),
      K(_0x4b6d3b)
    );
  }
  selectRows(_0x30ee55) {
    let _0x3a0592 = Math.min(_0x30ee55.startRow, _0x30ee55.endRow),
      _0x262ada = Math.max(_0x30ee55.startRow, _0x30ee55.endRow),
      _0x4f2df6 = this._buildSelection(_0x30ee55, "row", {
        startRow: _0x3a0592,
        endRow: _0x262ada,
        startColumn: 0,
        endColumn: Math.max(0, _0x30ee55.columnCount - 1),
      });
    return (
      (this._selection = _0x4f2df6),
      this._selection$["next"](K(_0x4f2df6)),
      K(_0x4f2df6)
    );
  }
  selectColumns(_0x4c6096) {
    let _0x300514 = Math.min(_0x4c6096.startColumn, _0x4c6096.endColumn),
      _0x366563 = Math.max(_0x4c6096.startColumn, _0x4c6096.endColumn),
      _0x532a95 = this._buildSelection(_0x4c6096, "column", {
        startRow: 0,
        endRow: Math.max(0, _0x4c6096.rowCount - 1),
        startColumn: _0x300514,
        endColumn: _0x366563,
      });
    return (
      (this._selection = _0x532a95),
      this._selection$["next"](K(_0x532a95)),
      K(_0x532a95)
    );
  }
  selectTable(_0x3ef306) {
    let _0x2e9c16 = this._buildSelection(_0x3ef306, "table", {
      startRow: 0,
      endRow: Math.max(0, _0x3ef306.rowCount - 1),
      startColumn: 0,
      endColumn: Math.max(0, _0x3ef306.columnCount - 1),
    });
    return (
      (this._selection = _0x2e9c16),
      this._selection$["next"](K(_0x2e9c16)),
      K(_0x2e9c16)
    );
  }
  enterTextMode(_0x372ea7) {
    let _0x38361f = this._buildSelection(
      _0x372ea7,
      "text",
      {
        startRow: _0x372ea7.row,
        endRow: _0x372ea7.row,
        startColumn: _0x372ea7.column,
        endColumn: _0x372ea7.column,
      },
      { row: _0x372ea7.row, column: _0x372ea7.column },
      { row: _0x372ea7.row, column: _0x372ea7.column },
    );
    return (
      (this._selection = _0x38361f),
      this._selection$["next"](K(_0x38361f)),
      K(_0x38361f)
    );
  }
  dispose() {
    ((this._tableInternalInteractionUntil = 0),
      this._selection$["complete"](),
      super.dispose());
  }
  _buildSelection(_0x9c0f6f, _0x453194, _0x34be11, _0x36108c, _0x4fa437) {
    let _0x4f0c09 = {
      unitId: _0x9c0f6f.unitId,
      subUnitId: _0x9c0f6f.subUnitId,
      elementId: _0x9c0f6f.elementId,
      tableId: _0x9c0f6f.tableId,
      kind: _0x453194,
      ranges: [_0x34be11],
    };
    return (
      _0x36108c && (_0x4f0c09.anchor = _0x36108c),
      _0x4fa437 && (_0x4f0c09.focus = _0x4fa437),
      _0x4f0c09
    );
  }
};
function Tr(_0x43bed7) {
  return {
    startRow: Math.min(_0x43bed7.startRow, _0x43bed7.endRow),
    endRow: Math.max(_0x43bed7.startRow, _0x43bed7.endRow),
    startColumn: Math.min(_0x43bed7.startColumn, _0x43bed7.endColumn),
    endColumn: Math.max(_0x43bed7.startColumn, _0x43bed7.endColumn),
  };
}
function K(_0x1db6ec) {
  let _0x3869ec = {
    ..._0x1db6ec,
    ranges: _0x1db6ec.ranges["map"]((_0x7b1b61) => ({ ..._0x7b1b61 })),
  };
  return (
    _0x1db6ec.anchor && (_0x3869ec.anchor = { ..._0x1db6ec.anchor }),
    _0x1db6ec.focus && (_0x3869ec.focus = { ..._0x1db6ec.focus }),
    _0x3869ec
  );
}
const q = {
  InsertRowAbove: "insert-row-above",
  InsertRowBelow: "insert-row-below",
  InsertColumnLeft: "insert-column-left",
  InsertColumnRight: "insert-column-right",
  DeleteRows: "delete-rows",
  DeleteColumns: "delete-columns",
  MergeCells: "merge-cells",
  UnmergeCells: "unmerge-cells",
  DistributeRows: "distribute-rows",
  DistributeColumns: "distribute-columns",
};
function J(_0x2c623c) {
  let _0x4359c0 = _0x2c623c == null ? undefined : _0x2c623c.ranges[0];
  return !_0x2c623c || !_0x4359c0
    ? null
    : {
        unitId: _0x2c623c.unitId,
        subUnitId: _0x2c623c.subUnitId,
        elementId: _0x2c623c.elementId,
        tableId: _0x2c623c.tableId,
        range: _0x3fbad0(_0x4359c0),
      };
}
function Er(_0x43a92f, _0x26a485, _0x27d52b) {
  let _0x8f3fef = !!J(_0x26a485);
  return [
    qr(q.InsertRowAbove, _0x27d52b.insertRows, _0x8f3fef),
    qr(q.InsertRowBelow, _0x27d52b.insertRows, _0x8f3fef),
    qr(q.InsertColumnLeft, _0x27d52b.insertColumns, _0x8f3fef),
    qr(q.InsertColumnRight, _0x27d52b.insertColumns, _0x8f3fef),
    qr(q.DeleteRows, _0x27d52b.deleteRows, Ur(_0x43a92f, _0x26a485)),
    qr(q.DeleteColumns, _0x27d52b.deleteColumns, Wr(_0x43a92f, _0x26a485)),
    qr(q.MergeCells, _0x27d52b.mergeCells, Vr(_0x26a485, _0x43a92f)),
    qr(q.UnmergeCells, _0x27d52b.unmergeCells, Hr(_0x43a92f, _0x26a485)),
    qr(q.DistributeRows, _0x27d52b.updateTable, Gr(_0x43a92f, _0x26a485)),
    qr(q.DistributeColumns, _0x27d52b.updateTable, Kr(_0x43a92f, _0x26a485)),
  ];
}
function Dr(_0x26d560, _0x4d8e17, _0x589f53, _0x2a1afd) {
  let _0x2e1e2d = J(_0x4d8e17);
  if (!_0x2e1e2d || !_0x4d8e17) return null;
  let {
    unitId: _0x38eb92,
    subUnitId: _0xab4dee,
    elementId: _0x6454c0,
    tableId: _0x52db79,
    range: _0x1cacb,
  } = _0x2e1e2d;
  switch (_0x589f53) {
    case q.InsertRowAbove:
      return {
        commandId: _0x2a1afd.insertRows,
        params: {
          unitId: _0x38eb92,
          subUnitId: _0xab4dee,
          elementId: _0x6454c0,
          tableId: _0x52db79,
          rowIndex: _0x1cacb.startRow,
          count: Yr(_0x1cacb),
        },
      };
    case q.InsertRowBelow:
      return {
        commandId: _0x2a1afd.insertRows,
        params: {
          unitId: _0x38eb92,
          subUnitId: _0xab4dee,
          elementId: _0x6454c0,
          tableId: _0x52db79,
          rowIndex: _0x1cacb.endRow + 1,
          count: Yr(_0x1cacb),
        },
      };
    case q.InsertColumnLeft:
      return {
        commandId: _0x2a1afd.insertColumns,
        params: {
          unitId: _0x38eb92,
          subUnitId: _0xab4dee,
          elementId: _0x6454c0,
          tableId: _0x52db79,
          columnIndex: _0x1cacb.startColumn,
          count: Xr(_0x1cacb),
        },
      };
    case q.InsertColumnRight:
      return {
        commandId: _0x2a1afd.insertColumns,
        params: {
          unitId: _0x38eb92,
          subUnitId: _0xab4dee,
          elementId: _0x6454c0,
          tableId: _0x52db79,
          columnIndex: _0x1cacb.endColumn + 1,
          count: Xr(_0x1cacb),
        },
      };
    case q.DeleteRows:
      return Ur(_0x26d560, _0x4d8e17)
        ? {
            commandId: _0x2a1afd.deleteRows,
            params: {
              unitId: _0x38eb92,
              tableId: _0x52db79,
              startRow: _0x1cacb.startRow,
              endRow: _0x1cacb.endRow,
            },
          }
        : null;
    case q.DeleteColumns:
      return Wr(_0x26d560, _0x4d8e17)
        ? {
            commandId: _0x2a1afd.deleteColumns,
            params: {
              unitId: _0x38eb92,
              tableId: _0x52db79,
              startColumn: _0x1cacb.startColumn,
              endColumn: _0x1cacb.endColumn,
            },
          }
        : null;
    case q.MergeCells:
      return Vr(_0x4d8e17, _0x26d560)
        ? {
            commandId: _0x2a1afd.mergeCells,
            params: { unitId: _0x38eb92, tableId: _0x52db79, range: _0x1cacb },
          }
        : null;
    case q.UnmergeCells:
      return Hr(_0x26d560, _0x4d8e17)
        ? {
            commandId: _0x2a1afd.unmergeCells,
            params: { unitId: _0x38eb92, tableId: _0x52db79, range: _0x1cacb },
          }
        : null;
    case q.DistributeRows:
      return Jr(
        _0x26d560,
        _0x4d8e17,
        _0x2a1afd.updateTable,
        _0x38eb92,
        _0x52db79,
        _0x1cacb,
        "row",
      );
    case q.DistributeColumns:
      return Jr(
        _0x26d560,
        _0x4d8e17,
        _0x2a1afd.updateTable,
        _0x38eb92,
        _0x52db79,
        _0x1cacb,
        "column",
      );
  }
}
function Or(_0x1e56cb, _0x218e59, _0x180957) {
  let _0x18449d = _0x180957
    ? _0x3fbad0(_0x180957)
    : {
        startRow: 0,
        endRow: _0x1e56cb.rows["length"] - 1,
        startColumn: 0,
        endColumn: _0x1e56cb.columns["length"] - 1,
      };
  if (_0x218e59 === "row") {
    let _0x45383d = _0x16106d.deepClone(_0x1e56cb.rows),
      _0x5790b5 = Math.max(
        0,
        Math.min(_0x18449d.startRow, _0x45383d.length - 1),
      ),
      _0x2d66bc = Math.max(
        _0x5790b5,
        Math.min(_0x18449d.endRow, _0x45383d.length - 1),
      ),
      _0x159da5 = _0x45383d.slice(_0x5790b5, _0x2d66bc + 1),
      _0x4e3213 =
        _0x159da5.reduce(
          (_0x311092, _0x1c5920) => _0x311092 + (_0x1c5920.height ?? 24),
          0,
        ) / Math.max(1, _0x159da5.length);
    for (let _0x3a98c0 = _0x5790b5; _0x3a98c0 <= _0x2d66bc; _0x3a98c0 += 1)
      _0x45383d[_0x3a98c0].height = _0x4e3213;
    return { rows: _0x45383d };
  }
  let _0x220b80 = _0x16106d.deepClone(_0x1e56cb.columns),
    _0x59cc51 = Math.max(
      0,
      Math.min(_0x18449d.startColumn, _0x220b80.length - 1),
    ),
    _0x19a687 = Math.max(
      _0x59cc51,
      Math.min(_0x18449d.endColumn, _0x220b80.length - 1),
    ),
    _0x4d9f1a = _0x220b80.slice(_0x59cc51, _0x19a687 + 1),
    _0x45b6b0 =
      _0x4d9f1a.reduce(
        (_0x3097c7, _0x3345e7) => _0x3097c7 + _0x3345e7.width,
        0,
      ) / Math.max(1, _0x4d9f1a.length);
  for (let _0x3f01e4 = _0x59cc51; _0x3f01e4 <= _0x19a687; _0x3f01e4 += 1)
    _0x220b80[_0x3f01e4].width = _0x45b6b0;
  return { columns: _0x220b80 };
}
function kr(_0x53ab08, _0x15c8b2, _0x322239) {
  let _0xecdb72 = _0x16106d.deepClone(_0x53ab08.rows);
  return (
    _0x2638e7(
      _0xecdb72,
      _0x3fbad0(_0x15c8b2),
      (_0x4065fc, _0x3a07d1, _0x51c981) => {
        if (_0x322239.axis === "vertical") {
          _0x4065fc.style = _0x52c7f0(_0x4065fc.style, {
            verticalAlign: ai(_0x322239.value),
          });
          return;
        }
        let _0x2d52b0 =
          "SLIDE_TABLE_CELL_" +
          _0x53ab08.id +
          "_" +
          _0x3a07d1 +
          "_" +
          _0x51c981;
        _0x4065fc.textData = Zr(_0x4065fc.textData, _0x322239.value, _0x2d52b0);
      },
    ),
    { rows: _0xecdb72 }
  );
}
function Ar(_0x2df7fb, _0x1f28ad, _0x18c2c9) {
  let _0x1f9c4c = _0x16106d.deepClone(_0x2df7fb.rows);
  return (
    _0x2638e7(
      _0x1f9c4c,
      _0x3fbad0(_0x1f28ad),
      (_0x5018c2, _0x43c88b, _0x1df35c) => {
        var _0x3f4385;
        let _0x201a41 =
            "SLIDE_TABLE_CELL_" +
            _0x2df7fb.id +
            "_" +
            _0x43c88b +
            "_" +
            _0x1df35c,
          _0x440b15 = _0x16106d.deepClone(_0x5018c2.textData ?? ri(_0x201a41)),
          _0x29ddde = _0x440b15.body ?? {
            dataStream: "\x0d\x0a",
            paragraphs: [ii()],
            textRuns: [],
          },
          _0x175e6f = _0x1a424d(6);
        _0x5018c2.textData = {
          ..._0x440b15,
          id: _0x440b15.id ?? _0x201a41,
          body: {
            ..._0x29ddde,
            paragraphs: ((_0x3f4385 = _0x29ddde.paragraphs) != null &&
            _0x3f4385.length
              ? _0x29ddde.paragraphs
              : [ii()]
            ).map((_0x36e106) => {
              var _0x3589f3, _0x3f4eb6;
              if (_0x18c2c9 === null) {
                let _0x2381a4 = { ..._0x36e106 };
                return (delete _0x2381a4.bullet, _0x2381a4);
              }
              return {
                ..._0x36e106,
                bullet: {
                  nestingLevel:
                    ((_0x3589f3 = _0x36e106.bullet) == null
                      ? undefined
                      : _0x3589f3.nestingLevel) ?? 0,
                  textStyle:
                    ((_0x3f4eb6 = _0x36e106.bullet) == null
                      ? undefined
                      : _0x3f4eb6.listType) === _0x18c2c9
                      ? _0x36e106.bullet["textStyle"]
                      : { fs: 20 },
                  listId: _0x175e6f,
                  listType: _0x18c2c9,
                },
              };
            }),
          },
        };
      },
    ),
    { rows: _0x1f9c4c }
  );
}
function jr(_0x44c082, _0x60f66b, _0x4e20d2) {
  if (!_0x44c082 || !_0x60f66b) return { active: false, mixed: false };
  let _0x2b57bb = _0x3fbad0(_0x60f66b),
    _0x3cc36b = [];
  for (
    let _0x354d59 = _0x2b57bb.startRow;
    _0x354d59 <= _0x2b57bb.endRow;
    _0x354d59 += 1
  )
    for (
      let _0x104300 = _0x2b57bb.startColumn;
      _0x104300 <= _0x2b57bb.endColumn;
      _0x104300 += 1
    ) {
      var _0x4f3e1d;
      let _0xae3454 =
        ((_0x4f3e1d = _0x44c082.rows[_0x354d59]) == null ||
        (_0x4f3e1d = _0x4f3e1d.cells[_0x104300]) == null ||
        (_0x4f3e1d = _0x4f3e1d.textData) == null ||
        (_0x4f3e1d = _0x4f3e1d.body) == null
          ? undefined
          : _0x4f3e1d.paragraphs) ?? [];
      _0x3cc36b.push(
        ...(_0xae3454.length
          ? _0xae3454.map((_0xb2a621) => {
              var _0x2f5275;
              let _0x5ea860 =
                (_0x2f5275 = _0xb2a621.bullet) == null
                  ? undefined
                  : _0x2f5275.listType;
              return Mr(_0x5ea860) ? _0x5ea860 : undefined;
            })
          : [undefined]),
      );
    }
  let _0x43d3d2 = _0x3cc36b.filter(
      (_0x5f14cb) => !!(_0x5f14cb != null && _0x5f14cb.startsWith(_0x4e20d2)),
    ),
    _0x4686e8 = _0x3cc36b.length > 0 && _0x43d3d2.length === _0x3cc36b.length;
  return {
    active: _0x4686e8,
    mixed: _0x43d3d2.length > 0 && !_0x4686e8,
    value:
      _0x4686e8 && _0x43d3d2.every((_0xbaf047) => _0xbaf047 === _0x43d3d2[0])
        ? _0x43d3d2[0]
        : undefined,
  };
}
function Mr(_0xd5a1f6) {
  return (
    _0xd5a1f6 !== undefined &&
    Object.values(_0x2dcdea).some((_0xc5289c) => _0xc5289c === _0xd5a1f6)
  );
}
function Nr(_0x363d10, _0x49b49e, _0x385fe4) {
  return Pr(
    _0x363d10,
    _0x49b49e,
    _0x385fe4
      ? { type: _0x44feb0.Solid, color: _0x385fe4, alpha: 1 }
      : undefined,
  );
}
function Pr(_0x761322, _0x2186bc, _0xf497b9) {
  let _0xd28b6f = _0x16106d.deepClone(_0x761322.rows);
  return (
    _0x2638e7(_0xd28b6f, _0x3fbad0(_0x2186bc), (_0x5c5ec4) => {
      _0x5c5ec4.style = _0x52c7f0(_0x5c5ec4.style, { fill: _0xf497b9 });
    }),
    { rows: _0xd28b6f }
  );
}
function Fr(_0x5cefd1, _0xa5b920, _0x9eac81) {
  return Ir(
    _0x5cefd1,
    _0xa5b920,
    _0x9eac81 ? { type: "solid", color: _0x9eac81, opacity: 1 } : undefined,
  );
}
function Ir(_0x175ec7, _0x27c62b, _0x339723) {
  let _0x25f523 = _0x16106d.deepClone(_0x175ec7.rows);
  return (
    _0x2638e7(
      _0x25f523,
      _0x3fbad0(_0x27c62b),
      (_0x17fb55, _0x14d608, _0x1f79cd) => {
        let _0x5d5a24 =
          "SLIDE_TABLE_CELL_" +
          _0x175ec7.id +
          "_" +
          _0x14d608 +
          "_" +
          _0x1f79cd;
        _0x17fb55.textData = Qr(_0x17fb55.textData, _0x339723, _0x5d5a24);
      },
    ),
    { rows: _0x25f523 }
  );
}
function Lr(_0x269695, _0x4a7826, _0x3b3507) {
  let _0x107b9e = _0x16106d.deepClone(_0x269695.rows);
  return (
    _0x2638e7(_0x107b9e, _0x3fbad0(_0x4a7826), (_0x2ede12) => {
      var _0x1ea864;
      let _0x1dd431 =
          ((_0x1ea864 = _0x2ede12.style) == null
            ? undefined
            : _0x1ea864.borders) ?? {},
        _0x45a0dd = (_0x6dd99b) => ({
          ..._0x220a46(),
          ..._0x6dd99b,
          ..._0x3b3507,
        });
      _0x2ede12.style = _0x52c7f0(_0x2ede12.style, {
        borders: {
          top: _0x45a0dd(_0x1dd431.top),
          right: _0x45a0dd(_0x1dd431.right),
          bottom: _0x45a0dd(_0x1dd431.bottom),
          left: _0x45a0dd(_0x1dd431.left),
        },
      });
    }),
    { rows: _0x107b9e }
  );
}
function Rr(_0x5ee452, _0x43f47b, _0x49d074, _0xdc55ae) {
  return {
    rows: _0x4f3ef2(
      _0x16106d.deepClone(_0x5ee452.rows),
      _0x43f47b,
      _0x49d074,
      _0xdc55ae,
    ).rows,
  };
}
function zr(_0x458ea1, _0x3e78b4, _0xe43773) {
  return ti(_0x458ea1, _0x3e78b4, { ff: _0xe43773 });
}
function Br(_0x5e9a6c, _0x3541ad, _0x2d6b0f) {
  return ti(_0x5e9a6c, _0x3541ad, { fs: _0x2d6b0f });
}
function Vr(_0xc1404, _0x3332f8) {
  let _0x2b2ceb = J(_0xc1404);
  return (
    !!_0x2b2ceb &&
    _0x2dc3c6(_0x2b2ceb.range) &&
    (!_0x3332f8 || !Hr(_0x3332f8, _0xc1404))
  );
}
function Hr(_0x5d1432, _0x303ac8) {
  let _0x37209b = J(_0x303ac8);
  if (!_0x37209b || !_0x5d1432) return false;
  let _0x48f539 = _0x3fbad0(_0x37209b.range);
  for (
    let _0xd0f88e = _0x48f539.startRow;
    _0xd0f88e <= _0x48f539.endRow;
    _0xd0f88e += 1
  )
    for (
      let _0x453cbf = _0x48f539.startColumn;
      _0x453cbf <= _0x48f539.endColumn;
      _0x453cbf += 1
    ) {
      let _0x2d8828 = _0x2e284b(_0x5d1432, _0xd0f88e, _0x453cbf);
      if (_0x2d8828 && _0x2dc3c6(_0x2d8828)) return true;
    }
  return false;
}
function Ur(_0x3c5128, _0x2996d2) {
  let _0x4925b0 = J(_0x2996d2);
  return !_0x4925b0 || !_0x3c5128
    ? false
    : _0x3c5128.rows["length"] >
        _0x4925b0.range["endRow"] - _0x4925b0.range["startRow"] + 1;
}
function Wr(_0x465626, _0x752ade) {
  let _0x13b97a = J(_0x752ade);
  return !_0x13b97a || !_0x465626
    ? false
    : _0x465626.columns["length"] >
        _0x13b97a.range["endColumn"] - _0x13b97a.range["startColumn"] + 1;
}
function Gr(_0x56acde, _0x231d67) {
  let _0x3e6f54 = J(_0x231d67);
  return !_0x3e6f54 || !_0x56acde
    ? false
    : _0x3e6f54.range["endRow"] - _0x3e6f54.range["startRow"] + 1 > 1;
}
function Kr(_0x120663, _0x2b47ff) {
  let _0x403806 = J(_0x2b47ff);
  return !_0x403806 || !_0x120663
    ? false
    : _0x403806.range["endColumn"] - _0x403806.range["startColumn"] + 1 > 1;
}
function qr(_0x1e069c, _0x5340b7, _0x1fb27e) {
  return { id: _0x1e069c, commandId: _0x5340b7, enabled: _0x1fb27e };
}
function Jr(
  _0x3aca23,
  _0xb5fce9,
  _0x2c30c1,
  _0xdabab6,
  _0x14da3f,
  _0x12acc2,
  _0x493b1f,
) {
  return !_0x3aca23 ||
    !(_0x493b1f === "row" ? Gr(_0x3aca23, _0xb5fce9) : Kr(_0x3aca23, _0xb5fce9))
    ? null
    : {
        commandId: _0x2c30c1,
        params: {
          unitId: _0xdabab6,
          tableId: _0x14da3f,
          patch: Or(_0x3aca23, _0x493b1f, _0x12acc2),
        },
      };
}
function Yr(_0x4018c3) {
  return _0x4018c3.endRow - _0x4018c3.startRow + 1;
}
function Xr(_0x15af71) {
  return _0x15af71.endColumn - _0x15af71.startColumn + 1;
}
function Zr(_0x4ef58e, _0x4ad261, _0x36484f) {
  var _0x589a4b;
  let _0x4b02a0 = _0x16106d.deepClone(_0x4ef58e ?? ri(_0x36484f)),
    _0x46bc8d = _0x4b02a0.body ?? {
      dataStream: "\x0d\x0a",
      paragraphs: [ii()],
      textRuns: [],
    },
    _0x582fce =
      (_0x589a4b = _0x46bc8d.paragraphs) != null && _0x589a4b.length
        ? _0x46bc8d.paragraphs
        : [ii()],
    _0x9f86d5 = _0x4b02a0.documentStyle ?? {};
  return {
    ..._0x4b02a0,
    id: _0x4b02a0.id ?? _0x36484f,
    body: {
      ..._0x46bc8d,
      dataStream: _0x46bc8d.dataStream ?? "\x0d\x0a",
      paragraphs: _0x582fce.map((_0x33754a) => ({
        ..._0x33754a,
        paragraphStyle: {
          ..._0x33754a.paragraphStyle,
          horizontalAlign: _0x4ad261,
        },
      })),
    },
    documentStyle: {
      ..._0x9f86d5,
      renderConfig: { ..._0x9f86d5.renderConfig, horizontalAlign: _0x4ad261 },
    },
  };
}
function Qr(_0x1280c5, _0x51c918, _0xa3edd4) {
  var _0x31679f, _0x59cfc7;
  let _0x2fb853 = _0x16106d.deepClone(_0x1280c5 ?? ri(_0xa3edd4)),
    _0x53c82e = _0x2fb853.body ?? {
      dataStream: "\x0d\x0a",
      paragraphs: [ii()],
      textRuns: [],
    },
    _0x599460 = _0x53c82e.dataStream ?? "\x0d\x0a",
    _0x504307 = Math.max(0, _0x599460.length - 2),
    _0x3a7e45 = ei(_0x51c918),
    _0x3d2976 = $r(
      {
        ...((_0x31679f = _0x2fb853.documentStyle) == null
          ? undefined
          : _0x31679f.textStyle),
      },
      _0x51c918,
      _0x3a7e45,
    ),
    _0x2aec02 = (_0x53c82e.textRuns ?? []).map((_0x4ed0df) => {
      let _0x8574ba = $r({ ..._0x4ed0df.ts }, _0x51c918, _0x3a7e45);
      return { ..._0x4ed0df, ts: _0x8574ba };
    });
  return (
    _0x51c918 &&
      _0x504307 > 0 &&
      _0x2aec02.length === 0 &&
      _0x2aec02.push({
        st: 0,
        ed: _0x504307,
        ts: {
          ...(_0x3a7e45 ? { cl: { rgb: _0x3a7e45 } } : {}),
          textFill: _0x51c918,
        },
      }),
    {
      ..._0x2fb853,
      id: _0x2fb853.id ?? _0xa3edd4,
      body: {
        ..._0x53c82e,
        dataStream: _0x599460,
        paragraphs:
          (_0x59cfc7 = _0x53c82e.paragraphs) != null && _0x59cfc7.length
            ? _0x53c82e.paragraphs
            : [ii()],
        textRuns: _0x2aec02,
      },
      documentStyle: { ..._0x2fb853.documentStyle, textStyle: _0x3d2976 },
    }
  );
}
function $r(_0x39d409, _0x558e35, _0xa84d1c) {
  return (
    _0x558e35 ? (_0x39d409.textFill = _0x558e35) : delete _0x39d409.textFill,
    _0xa84d1c ? (_0x39d409.cl = { rgb: _0xa84d1c }) : delete _0x39d409.cl,
    _0x39d409
  );
}
function ei(_0x46cae5) {
  if (!_0x46cae5 || _0x46cae5.type === "none")
    return (_0x46cae5 == null ? undefined : _0x46cae5.type) === "none"
      ? "rgba(0, 0, 0, 0)"
      : undefined;
  if (_0x46cae5.type === "gradient") {
    var _0x279f24;
    return (
      ((_0x279f24 = _0x46cae5.gradient) == null ||
      (_0x279f24 = _0x279f24.stops) == null ||
      (_0x279f24 = _0x279f24[0]) == null
        ? undefined
        : _0x279f24.color) ?? _0x46cae5.color
    );
  }
  return _0x46cae5.color;
}
function ti(_0x271841, _0x2fa514, _0x273fcb) {
  let _0xe73cf3 = _0x16106d.deepClone(_0x271841.rows);
  return (
    _0x2638e7(
      _0xe73cf3,
      _0x3fbad0(_0x2fa514),
      (_0x795a64, _0x2ae4b8, _0x524e26) => {
        let _0x3fb74e =
          "SLIDE_TABLE_CELL_" +
          _0x271841.id +
          "_" +
          _0x2ae4b8 +
          "_" +
          _0x524e26;
        _0x795a64.textData = ni(_0x795a64.textData, _0x273fcb, _0x3fb74e);
      },
    ),
    { rows: _0xe73cf3 }
  );
}
function ni(_0x119cb1, _0x2d8aa0, _0x4c710c) {
  var _0x2b75ab, _0x3e2045;
  let _0x2d8eb8 = _0x16106d.deepClone(_0x119cb1 ?? ri(_0x4c710c)),
    _0x1eb7a2 = _0x2d8eb8.body ?? {
      dataStream: "\x0d\x0a",
      paragraphs: [ii()],
      textRuns: [],
    },
    _0x59ebac = _0x1eb7a2.dataStream ?? "\x0d\x0a",
    _0x423b59 = Math.max(0, _0x59ebac.length - 2),
    _0x2b437b = (_0x1eb7a2.textRuns ?? []).map((_0x44eff5) => ({
      ..._0x44eff5,
      ts: { ..._0x44eff5.ts, ..._0x2d8aa0 },
    }));
  return (
    _0x423b59 > 0 &&
      _0x2b437b.length === 0 &&
      _0x2b437b.push({ st: 0, ed: _0x423b59, ts: _0x2d8aa0 }),
    {
      ..._0x2d8eb8,
      id: _0x2d8eb8.id ?? _0x4c710c,
      body: {
        ..._0x1eb7a2,
        dataStream: _0x59ebac,
        paragraphs:
          (_0x2b75ab = _0x1eb7a2.paragraphs) != null && _0x2b75ab.length
            ? _0x1eb7a2.paragraphs
            : [ii()],
        textRuns: _0x2b437b,
      },
      documentStyle: {
        ..._0x2d8eb8.documentStyle,
        textStyle: {
          ...((_0x3e2045 = _0x2d8eb8.documentStyle) == null
            ? undefined
            : _0x3e2045.textStyle),
          ..._0x2d8aa0,
        },
      },
    }
  );
}
function ri(_0x20dfb2) {
  return {
    id: _0x20dfb2,
    body: { dataStream: "\x0d\x0a", paragraphs: [ii()], textRuns: [] },
    documentStyle: {},
  };
}
function ii() {
  return { startIndex: 0, paragraphId: _0x1d2f62(new Set()) };
}
function ai(_0x24e6e8) {
  return _0x24e6e8 === _0x1ba0d9.MIDDLE
    ? _0x5b0766.Middle
    : _0x24e6e8 === _0x1ba0d9.BOTTOM
      ? _0x5b0766.Bottom
      : _0x5b0766.Top;
}
const oi = {
    insertRows: _0x84e104.id,
    insertColumns: _0x36f341.id,
    deleteRows: _0x4e3296.id,
    deleteColumns: _0x242f72.id,
    mergeCells: _0x55f8de.id,
    unmergeCells: _0x35bd09.id,
    updateTable: _0x3f8728.id,
  },
  si = [
    { title: "slides-table-ui.contextMenu.resetColor" },
    { title: "white", color: "white" },
    { title: "gray.100", color: "gray.100" },
    { title: "primary.100", color: "primary.100" },
    { title: "blue.100", color: "blue.100" },
    { title: "green.100", color: "green.100" },
    { title: "yellow.100", color: "yellow.100" },
    { title: "red.100", color: "red.100" },
  ],
  ci = [
    { title: "slides-table-ui.contextMenu.resetColor" },
    { title: "gray.900", color: "gray.900" },
    { title: "gray.500", color: "gray.500" },
    { title: "red.600", color: "red.600" },
    { title: "orange.600", color: "orange.600" },
    { title: "yellow.700", color: "yellow.700" },
    { title: "green.600", color: "green.600" },
    { title: "blue.600", color: "blue.600" },
    { title: "purple.600", color: "purple.600" },
  ],
  li = Hi("slide.operation.slide-table-insert-row-above", q.InsertRowAbove),
  ui = Hi("slide.operation.slide-table-insert-row-below", q.InsertRowBelow),
  di = Hi("slide.operation.slide-table-insert-column-left", q.InsertColumnLeft),
  fi = Hi(
    "slide.operation.slide-table-insert-column-right",
    q.InsertColumnRight,
  ),
  pi = Hi("slide.operation.slide-table-delete-rows", q.DeleteRows),
  mi = Hi("slide.operation.slide-table-delete-columns", q.DeleteColumns),
  hi = Hi("slide.operation.slide-table-merge-cells", q.MergeCells),
  gi = Hi("slide.operation.slide-table-unmerge-cells", q.UnmergeCells),
  _i = Hi("slide.operation.slide-table-distribute-rows", q.DistributeRows),
  vi = Hi(
    "slide.operation.slide-table-distribute-columns",
    q.DistributeColumns,
  ),
  yi = {
    id: "slide.operation.slide-table-copy-table",
    type: _0x1d6b9a.OPERATION,
    handler: (_0x35dab6) =>
      _0x35dab6.get(_0x59c1bd).executeCommand("slide.operation.copy-selection"),
  },
  bi = {
    id: "slide.operation.slide-table-cut-table",
    type: _0x1d6b9a.OPERATION,
    handler: (_0x212474) =>
      _0x212474.get(_0x59c1bd).executeCommand("slide.operation.cut-selection"),
  },
  xi = {
    id: "slide.operation.slide-table-delete-table",
    type: _0x1d6b9a.OPERATION,
    handler: (_0x3ecde5) => {
      let _0xf12a13 = _0x3ecde5.get(_0x59c1bd),
        _0x1f43ba = _0x3ecde5.get(_0x10d183),
        _0x128ec4 = _0x3ecde5.get(_0x4127e0),
        _0x528a1e = _0x3ecde5.get(G),
        _0x5197fe = _0x528a1e.getSelection(),
        _0x2d53ff = J(_0x5197fe),
        _0x5061a0 =
          _0x5197fe && _0x2d53ff
            ? {
                unitId: _0x2d53ff.unitId,
                subUnitId: _0x5197fe.subUnitId,
                tableId: _0x2d53ff.tableId,
                elementId: _0x2d53ff.elementId,
              }
            : null;
      if (!_0x5061a0) {
        let _0x469bc3 = _0x128ec4.getSnapshot(),
          _0x58272e =
            _0x469bc3.selectedIds["length"] === 1
              ? _0x469bc3.selectedIds[0]
              : undefined,
          _0x46d2c5 =
            _0x469bc3.context && _0x58272e
              ? _0x1f43ba.getDrawingByParam({
                  ..._0x469bc3.context,
                  drawingId: _0x58272e,
                })
              : null;
        _0x469bc3.context &&
          _0x58272e &&
          (_0x46d2c5 == null ? undefined : _0x46d2c5.element["type"]) ===
            _0x17964d.Table &&
          (_0x5061a0 = {
            unitId: _0x469bc3.context["unitId"],
            subUnitId: _0x469bc3.context["subUnitId"],
            tableId: _0x46d2c5.element["tableId"],
            elementId: _0x58272e,
          });
      }
      if (!_0x5061a0) return false;
      let _0x42f621 = _0xf12a13.syncExecuteCommand(_0x1289f7.id, _0x5061a0);
      return (
        _0x42f621 && (_0x528a1e.clear(), _0x128ec4.clearSelection()),
        _0x42f621
      );
    },
  };
function Si(_0x153dc5, _0x332979) {
  return {
    id: _0x153dc5,
    type: _0x1d6b9a.OPERATION,
    handler: (_0x290638) => {
      let _0x40635e = _0x290638.get(_0x10d183),
        _0x210ab9 = _0x290638.get(_0x4127e0).getSnapshot(),
        _0x291af0 =
          _0x210ab9.selectedIds["length"] === 1
            ? _0x210ab9.selectedIds[0]
            : undefined;
      if (!_0x210ab9.context || !_0x291af0) return false;
      let _0x3b0f28 = _0x40635e.getDrawingByParam({
        ..._0x210ab9.context,
        drawingId: _0x291af0,
      });
      if (
        (_0x3b0f28 == null ? undefined : _0x3b0f28.element["type"]) !==
        _0x17964d.Table
      )
        return false;
      let _0x3e5674 = _0x40635e.getDrawingOrder(
          _0x210ab9.context["unitId"],
          _0x210ab9.context["subUnitId"],
        ),
        _0x38ff2a = _0x3e5674.indexOf(_0x291af0);
      if (_0x38ff2a < 0) return false;
      let _0x3acdc0 = [..._0x3e5674];
      if (_0x332979 === _0x544607.forward && _0x38ff2a < _0x3acdc0.length - 1)
        [_0x3acdc0[_0x38ff2a], _0x3acdc0[_0x38ff2a + 1]] = [
          _0x3acdc0[_0x38ff2a + 1],
          _0x3acdc0[_0x38ff2a],
        ];
      else {
        if (_0x332979 === _0x544607.backward && _0x38ff2a > 0)
          [_0x3acdc0[_0x38ff2a], _0x3acdc0[_0x38ff2a - 1]] = [
            _0x3acdc0[_0x38ff2a - 1],
            _0x3acdc0[_0x38ff2a],
          ];
        else {
          if (_0x332979 === _0x544607.front && _0x38ff2a < _0x3acdc0.length - 1)
            (_0x3acdc0.splice(_0x38ff2a, 1), _0x3acdc0.push(_0x291af0));
          else {
            if (_0x332979 === _0x544607.back && _0x38ff2a > 0)
              (_0x3acdc0.splice(_0x38ff2a, 1), _0x3acdc0.unshift(_0x291af0));
            else return false;
          }
        }
      }
      return _0x290638
        .get(_0x59c1bd)
        .executeCommand(_0x1b7a69.id, {
          unitId: _0x210ab9.context["unitId"],
          subUnitId: _0x210ab9.context["subUnitId"],
          drawingIds: _0x3acdc0,
        });
    },
  };
}
const Ci = Si("slide-table.operation.arrange-forward", _0x544607.forward),
  wi = Si("slide-table.operation.arrange-backward", _0x544607.backward),
  Ti = Si("slide-table.operation.arrange-front", _0x544607.front),
  Ei = Si("slide-table.operation.arrange-back", _0x544607.back),
  Di = Ui("slide-table.operation.border-all", _0xfc89dc.All),
  Oi = Ui("slide-table.operation.border-outer", _0xfc89dc.Outer),
  ki = Ui("slide-table.operation.border-inner", _0xfc89dc.Inner),
  Ai = Ui("slide-table.operation.border-none", _0xfc89dc.None),
  ji = Wi("slide-table.operation.align-left", {
    axis: "horizontal",
    value: _0x582ddb.LEFT,
  }),
  Mi = Wi("slide-table.operation.align-center", {
    axis: "horizontal",
    value: _0x582ddb.CENTER,
  }),
  Ni = Wi("slide-table.operation.align-right", {
    axis: "horizontal",
    value: _0x582ddb.RIGHT,
  }),
  Pi = Wi("slide-table.operation.align-top", {
    axis: "vertical",
    value: _0x1ba0d9.TOP,
  }),
  Fi = Wi("slide-table.operation.align-middle", {
    axis: "vertical",
    value: _0x1ba0d9.MIDDLE,
  }),
  Ii = Wi("slide-table.operation.align-bottom", {
    axis: "vertical",
    value: _0x1ba0d9.BOTTOM,
  }),
  Li = si.map((_0x12aa71, _0x7a5a93) =>
    Gi("slide-table.operation.background-color-" + _0x7a5a93, _0x12aa71),
  ),
  Ri = ci.map((_0x3e15ac, _0x2ac96d) =>
    Ki("slide-table.operation.text-color-" + _0x2ac96d, _0x3e15ac),
  ),
  zi = [
    li,
    ui,
    di,
    fi,
    pi,
    mi,
    hi,
    gi,
    _i,
    vi,
    yi,
    bi,
    xi,
    Ci,
    wi,
    Ti,
    Ei,
    Di,
    Oi,
    ki,
    Ai,
    ji,
    Mi,
    Ni,
    Pi,
    Fi,
    Ii,
    ...Li,
    ...Ri,
  ];
function Bi(_0x106964) {
  return J(_0x106964.getSelection());
}
function Vi(_0x9ba075, _0x134474, _0x3dc9c9) {
  return Dr(_0x9ba075, _0x134474, _0x3dc9c9, oi);
}
function Hi(_0x48cd6c, _0xd6ba9e) {
  return {
    id: _0x48cd6c,
    type: _0x1d6b9a.OPERATION,
    handler(_0x225577) {
      let _0x3cc2c9 = _0x225577.get(G).getSelection(),
        _0x478737 = J(_0x3cc2c9);
      if (!_0x478737) return false;
      let _0x5d5c05 = Vi(
        _0x225577.get(_0x4fffa3).getTable(_0x478737.unitId, _0x478737.tableId),
        _0x3cc2c9,
        _0xd6ba9e,
      );
      return _0x5d5c05
        ? _0x225577
            .get(_0x59c1bd)
            .executeCommand(_0x5d5c05.commandId, _0x5d5c05.params)
        : false;
    },
  };
}
function Ui(_0x56d5ac, _0x1c31d8) {
  return {
    id: _0x56d5ac,
    type: _0x1d6b9a.OPERATION,
    handler: (_0x5c89c6) => {
      let _0x5d8058 = Bi(_0x5c89c6.get(G));
      if (!_0x5d8058) return false;
      let _0x5c9e1f = _0x5c89c6
        .get(_0x4fffa3)
        .getTable(_0x5d8058.unitId, _0x5d8058.tableId);
      return _0x5c9e1f
        ? _0x5c89c6
            .get(_0x59c1bd)
            .executeCommand(_0x3f8728.id, {
              unitId: _0x5d8058.unitId,
              tableId: _0x5d8058.tableId,
              patch: Rr(_0x5c9e1f, _0x5d8058.range, _0x1c31d8),
            })
        : false;
    },
  };
}
function Wi(_0x126a53, _0x1a273d) {
  return {
    id: _0x126a53,
    type: _0x1d6b9a.OPERATION,
    handler: (_0x33e8ec) => {
      let _0x4312c5 = Bi(_0x33e8ec.get(G));
      if (!_0x4312c5) return false;
      let _0x5af323 = _0x33e8ec
        .get(_0x4fffa3)
        .getTable(_0x4312c5.unitId, _0x4312c5.tableId);
      return _0x5af323
        ? _0x33e8ec
            .get(_0x59c1bd)
            .executeCommand(_0x3f8728.id, {
              unitId: _0x4312c5.unitId,
              tableId: _0x4312c5.tableId,
              patch: kr(_0x5af323, _0x4312c5.range, _0x1a273d),
            })
        : false;
    },
  };
}
function Gi(_0x4cca83, _0x151530) {
  return {
    id: _0x4cca83,
    title: _0x151530.title,
    type: _0x1d6b9a.OPERATION,
    handler: (_0x3d9fa3) => {
      let _0x1ca60d = Bi(_0x3d9fa3.get(G));
      if (!_0x1ca60d) return false;
      let _0x40ee3e = _0x3d9fa3
        .get(_0x4fffa3)
        .getTable(_0x1ca60d.unitId, _0x1ca60d.tableId);
      return _0x40ee3e
        ? _0x3d9fa3
            .get(_0x59c1bd)
            .executeCommand(_0x3f8728.id, {
              unitId: _0x1ca60d.unitId,
              tableId: _0x1ca60d.tableId,
              patch: Nr(
                _0x40ee3e,
                _0x1ca60d.range,
                qi(_0x3d9fa3, _0x151530.color),
              ),
            })
        : false;
    },
  };
}
function Ki(_0x2dd7e9, _0x1e8ee3) {
  return {
    id: _0x2dd7e9,
    title: _0x1e8ee3.title,
    type: _0x1d6b9a.OPERATION,
    handler: (_0xebe63d) => {
      let _0x11c544 = Bi(_0xebe63d.get(G));
      if (!_0x11c544) return false;
      let _0x543ec1 = _0xebe63d
        .get(_0x4fffa3)
        .getTable(_0x11c544.unitId, _0x11c544.tableId);
      return _0x543ec1
        ? _0xebe63d
            .get(_0x59c1bd)
            .executeCommand(_0x3f8728.id, {
              unitId: _0x11c544.unitId,
              tableId: _0x11c544.tableId,
              patch: Fr(
                _0x543ec1,
                _0x11c544.range,
                qi(_0xebe63d, _0x1e8ee3.color),
              ),
            })
        : false;
    },
  };
}
function qi(_0x41d006, _0x521e8d) {
  if (!_0x521e8d) return;
  let _0x26da4d = _0x41d006.get(_0xd94a7b);
  return _0x26da4d.isValidThemeColor(_0x521e8d)
    ? _0x26da4d.getColorFromTheme(_0x521e8d)
    : _0x521e8d;
}
function Ji(_0xd13217) {
  let _0x311985 = _0xd13217.get(G).getSelection(),
    _0x25b67c = J(_0x311985);
  return Vr(
    _0x311985,
    _0x25b67c
      ? _0xd13217.get(_0x4fffa3).getTable(_0x25b67c.unitId, _0x25b67c.tableId)
      : null,
  );
}
function Yi(_0x27e018) {
  let _0x5476dc = _0x27e018.get(G).getSelection(),
    _0x46f332 = J(_0x5476dc);
  return Hr(
    _0x46f332
      ? _0x27e018.get(_0x4fffa3).getTable(_0x46f332.unitId, _0x46f332.tableId)
      : null,
    _0x5476dc,
  );
}
function Xi(_0x17f58b) {
  let _0x265bc7 = _0x17f58b.get(G).getSelection(),
    _0x3fc638 = J(_0x265bc7);
  return Ur(
    _0x3fc638
      ? _0x17f58b.get(_0x4fffa3).getTable(_0x3fc638.unitId, _0x3fc638.tableId)
      : null,
    _0x265bc7,
  );
}
function Zi(_0x2dc8ef) {
  let _0x39e0cf = _0x2dc8ef.get(G).getSelection(),
    _0x2537f0 = J(_0x39e0cf);
  return Wr(
    _0x2537f0
      ? _0x2dc8ef.get(_0x4fffa3).getTable(_0x2537f0.unitId, _0x2537f0.tableId)
      : null,
    _0x39e0cf,
  );
}
function Qi(_0x277937) {
  let _0x20040e = _0x277937.get(G).getSelection(),
    _0x390bb5 = J(_0x20040e);
  return Gr(
    _0x390bb5
      ? _0x277937.get(_0x4fffa3).getTable(_0x390bb5.unitId, _0x390bb5.tableId)
      : null,
    _0x20040e,
  );
}
function $i(_0x2de932) {
  let _0x123ebf = _0x2de932.get(G).getSelection(),
    _0x1836d4 = J(_0x123ebf);
  return Kr(
    _0x1836d4
      ? _0x2de932.get(_0x4fffa3).getTable(_0x1836d4.unitId, _0x1836d4.tableId)
      : null,
    _0x123ebf,
  );
}
function ea(_0xe91a37) {
  return (
    _0xe91a37.key["length"] === 1 &&
    !_0xe91a37.altKey &&
    !_0xe91a37.ctrlKey &&
    !_0xe91a37.metaKey
  );
}
function ta(_0x58903a) {
  return _0x58903a === "insertText" || _0x58903a === "insertCompositionText";
}
function na(_0x4f6916) {
  if (typeof HTMLElement > "u" || !(_0x4f6916 instanceof HTMLElement))
    return false;
  let _0x214e12 = _0x4f6916.tagName["toLowerCase"]();
  return (
    _0x214e12 === "input" ||
    _0x214e12 === "textarea" ||
    _0x214e12 === "select" ||
    ia(_0x4f6916)
  );
}
function ra(_0x2fa58c) {
  return typeof HTMLElement > "u" ||
    !(_0x2fa58c instanceof HTMLElement) ||
    !ia(_0x2fa58c)
    ? false
    : _0x2fa58c.dataset["uComp"] === "editor" ||
        _0x2fa58c.id["startsWith"]("__editor_");
}
function ia(_0x12d9f3) {
  return (
    _0x12d9f3.isContentEditable ||
    _0x12d9f3.getAttribute("contenteditable") === "true"
  );
}
var aa = class extends _0x3eba9a {
  constructor() {
    (super(),
      W(this, "_handler", null),
      W(this, "_inputHandler", null),
      this._initNativeInputListeners());
  }
  setHandler(_0x3c303b) {
    return (
      (this._handler = _0x3c303b),
      _0xdc718a(() => {
        this._handler === _0x3c303b && (this._handler = null);
      })
    );
  }
  setInputHandler(_0xf13cfb) {
    return (
      (this._inputHandler = _0xf13cfb),
      _0xdc718a(() => {
        this._inputHandler === _0xf13cfb && (this._inputHandler = null);
      })
    );
  }
  handle(_0x1e93c3) {
    var _0x444422;
    return (
      ((_0x444422 = this._handler) == null
        ? undefined
        : _0x444422.call(this, _0x1e93c3)) ?? false
    );
  }
  handleInput(_0x459131) {
    var _0x4816a2;
    return (
      ((_0x4816a2 = this._inputHandler) == null
        ? undefined
        : _0x4816a2.call(this, _0x459131)) ?? false
    );
  }
  _initNativeInputListeners() {
    if (typeof document > "u") return;
    let _0x58d3fb = (_0x274ca6) => {
        !this.canHandleNativeInput(_0x274ca6) ||
          _0x274ca6.isComposing ||
          !ea(_0x274ca6) ||
          (this.handleInput({ kind: "text", text: _0x274ca6.key }) &&
            (_0x274ca6.preventDefault(), _0x274ca6.stopPropagation()));
      },
      _0x48f240 = (_0x2b7420) => {
        !this.canHandleNativeInput(_0x2b7420) ||
          !_0x2b7420.data ||
          !ta(_0x2b7420.inputType) ||
          (this.handleInput({ kind: "text", text: _0x2b7420.data }) &&
            (_0x2b7420.preventDefault(), _0x2b7420.stopPropagation()));
      },
      _0x2b5671 = (_0x98737a) => {
        this.canHandleNativeInput(_0x98737a, { allowDocsEditor: true }) &&
          this.handleInput({ kind: "composition-start" });
      },
      _0x2239dd = (_0x2d4126) => {
        !this.canHandleNativeInput(_0x2d4126) ||
          !_0x2d4126.data ||
          (this.handleInput({ kind: "composition", text: _0x2d4126.data }) &&
            (_0x2d4126.preventDefault(), _0x2d4126.stopPropagation()));
      };
    (document.addEventListener("keydown", _0x58d3fb, true),
      document.addEventListener("beforeinput", _0x48f240, true),
      document.addEventListener("compositionstart", _0x2b5671, true),
      document.addEventListener("compositionend", _0x2239dd, true),
      this.disposeWithMe(
        _0xdc718a(() => {
          (document.removeEventListener("keydown", _0x58d3fb, true),
            document.removeEventListener("beforeinput", _0x48f240, true),
            document.removeEventListener("compositionstart", _0x2b5671, true),
            document.removeEventListener("compositionend", _0x2239dd, true));
        }),
      ));
  }
};
function Y(_0x284b6b, _0x1903e7) {
  return function (_0x21ada7, _0x5b6f21) {
    _0x1903e7(_0x21ada7, _0x5b6f21, _0x284b6b);
  };
}
function oa(_0x49010c, _0x22679d, _0x4264c7, _0x7933b6) {
  var _0x1d460b = arguments.length,
    _0xce25f6 =
      _0x1d460b < 3
        ? _0x22679d
        : _0x7933b6 === null
          ? (_0x7933b6 = Object.getOwnPropertyDescriptor(_0x22679d, _0x4264c7))
          : _0x7933b6,
    _0x5317a4;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0xce25f6 = Reflect.decorate(_0x49010c, _0x22679d, _0x4264c7, _0x7933b6);
  else {
    for (var _0x4c6d56 = _0x49010c.length - 1; _0x4c6d56 >= 0; _0x4c6d56--)
      (_0x5317a4 = _0x49010c[_0x4c6d56]) &&
        (_0xce25f6 =
          (_0x1d460b < 3
            ? _0x5317a4(_0xce25f6)
            : _0x1d460b > 3
              ? _0x5317a4(_0x22679d, _0x4264c7, _0xce25f6)
              : _0x5317a4(_0x22679d, _0x4264c7)) || _0xce25f6);
  }
  return (
    _0x1d460b > 3 &&
      _0xce25f6 &&
      Object.defineProperty(_0x22679d, _0x4264c7, _0xce25f6),
    _0xce25f6
  );
}
let sa = class extends aa {
  constructor(_0xee6c92) {
    (super(), (this._contextService = _0xee6c92));
  }
  canHandleNativeInput(_0x27ebad, _0x2d882a) {
    return !this._contextService["getContextValue"](_0x7a5c4e) ||
      !this._contextService["getContextValue"]("FOCUSING_SLIDE_TABLE")
      ? false
      : _0x2d882a != null && _0x2d882a.allowDocsEditor && ra(_0x27ebad.target)
        ? true
        : !na(_0x27ebad.target);
  }
};
sa = oa([Y(0, _0xab580a)], sa);
const ca = [
  { key: "arrow-left", action: "move-left" },
  { key: "arrow-right", action: "move-right" },
  { key: "arrow-up", action: "move-up" },
  { key: "arrow-down", action: "move-down" },
  { key: "shift-arrow-left", action: "extend-left" },
  { key: "shift-arrow-right", action: "extend-right" },
  { key: "shift-arrow-up", action: "extend-up" },
  { key: "shift-arrow-down", action: "extend-down" },
  { key: "tab", action: "tab-forward" },
  { key: "shift-tab", action: "tab-backward" },
  { key: "enter", action: "edit-cell" },
  { key: "f2", action: "edit-cell" },
  { key: "delete", action: "clear-cells" },
  { key: "backspace", action: "clear-cells" },
];
function la(_0x2b0ced) {
  return ca.map((_0x31ebca) => ({
    action: _0x31ebca.action,
    binding: _0x2b0ced[_0x31ebca.key],
  }));
}
function ua(_0x1d5fe0) {
  switch (_0x1d5fe0) {
    case "move-left":
      return { rowDelta: 0, columnDelta: -1, extend: false };
    case "move-right":
      return { rowDelta: 0, columnDelta: 1, extend: false };
    case "move-up":
      return { rowDelta: -1, columnDelta: 0, extend: false };
    case "move-down":
      return { rowDelta: 1, columnDelta: 0, extend: false };
    case "extend-left":
      return { rowDelta: 0, columnDelta: -1, extend: true };
    case "extend-right":
      return { rowDelta: 0, columnDelta: 1, extend: true };
    case "extend-up":
      return { rowDelta: -1, columnDelta: 0, extend: true };
    case "extend-down":
      return { rowDelta: 1, columnDelta: 0, extend: true };
    case "tab-forward":
      return { rowDelta: 0, columnDelta: 1, extend: false, wrap: true };
    case "tab-backward":
      return { rowDelta: 0, columnDelta: -1, extend: false, wrap: true };
    default:
      return null;
  }
}
function da(_0x532226, _0x44adf7, _0x31be36, _0x24731e) {
  return _0x44adf7.wrap
    ? pa(_0x532226, _0x44adf7, _0x31be36, _0x24731e)
    : {
        row: Math.min(
          Math.max(0, _0x532226.row + _0x44adf7.rowDelta),
          Math.max(0, _0x31be36 - 1),
        ),
        column: Math.min(
          Math.max(0, _0x532226.column + _0x44adf7.columnDelta),
          Math.max(0, _0x24731e - 1),
        ),
      };
}
function fa(_0x6a92a1, _0x586725, _0xca16f3) {
  let _0x2bcf93 = Math.max(1, _0x586725),
    _0x3b9c4c = Math.max(1, _0xca16f3),
    _0x59376a = _0x6a92a1.row * _0x3b9c4c + _0x6a92a1.column,
    _0x16c6c7 = _0x2bcf93 * _0x3b9c4c - 1,
    _0x4ddedc = Math.min(_0x16c6c7, Math.max(0, _0x59376a));
  return {
    row: Math.floor(_0x4ddedc / _0x3b9c4c),
    column: _0x4ddedc % _0x3b9c4c,
  };
}
function pa(_0x44f3e1, _0x3a890a, _0x1d3f0b, _0x4a8b4f) {
  let _0x1ba1ac = Math.max(1, _0x1d3f0b),
    _0xd4086 = Math.max(1, _0x4a8b4f);
  if (_0x3a890a.columnDelta !== 0 && _0x3a890a.rowDelta === 0) {
    let _0x2b8ad9 = _0x1ba1ac * _0xd4086,
      _0x35b092 = fa(_0x44f3e1, _0x1ba1ac, _0xd4086),
      _0x1a0481 = ma(
        _0x35b092.row * _0xd4086 + _0x35b092.column + _0x3a890a.columnDelta,
        _0x2b8ad9,
      );
    return {
      row: Math.floor(_0x1a0481 / _0xd4086),
      column: _0x1a0481 % _0xd4086,
    };
  }
  return {
    row: ma(_0x44f3e1.row + _0x3a890a.rowDelta, _0x1ba1ac),
    column: ma(_0x44f3e1.column + _0x3a890a.columnDelta, _0xd4086),
  };
}
function ma(_0x3b20da, _0x19eb44) {
  return ((_0x3b20da % _0x19eb44) + _0x19eb44) % _0x19eb44;
}
const ha = {
    id: "slide-table.operation.keyboard",
    type: _0x1d6b9a.OPERATION,
    handler: (_0x195a69, _0x5a1600) =>
      _0x5a1600 != null && _0x5a1600.action
        ? _0x195a69.get(sa).handle(_0x5a1600.action)
        : false,
  },
  ga = [ha],
  _a = la({
    "arrow-left": _0x383038.ARROW_LEFT,
    "arrow-right": _0x383038.ARROW_RIGHT,
    "arrow-up": _0x383038.ARROW_UP,
    "arrow-down": _0x383038.ARROW_DOWN,
    "shift-arrow-left": _0x383038.ARROW_LEFT | _0x4181d5.SHIFT,
    "shift-arrow-right": _0x383038.ARROW_RIGHT | _0x4181d5.SHIFT,
    "shift-arrow-up": _0x383038.ARROW_UP | _0x4181d5.SHIFT,
    "shift-arrow-down": _0x383038.ARROW_DOWN | _0x4181d5.SHIFT,
    tab: _0x383038.TAB,
    "shift-tab": _0x383038.TAB | _0x4181d5.SHIFT,
    enter: _0x383038.ENTER,
    f2: _0x383038.F2,
    delete: _0x383038.DELETE,
    backspace: _0x383038.BACKSPACE,
  }).map(({ binding: _0xb98147, action: _0x4aa7a5 }) =>
    ya(_0xb98147, _0x4aa7a5),
  ),
  va = [_0x383038.DELETE, _0x383038.BACKSPACE].map((_0x22ffe7) => ({
    id: xi.id,
    binding: _0x22ffe7,
    priority: 130,
    preconditions: xa,
  }));
function ya(_0x570685, _0x346864) {
  return {
    id: ha.id,
    binding: _0x570685,
    priority: 130,
    preconditions: ba,
    staticParameters: { action: _0x346864 },
  };
}
function ba(_0x226852) {
  return !!(
    _0x226852.getContextValue(_0x7a5c4e) &&
    _0x226852.getContextValue("FOCUSING_SLIDE_TABLE")
  );
}
function xa(_0x58728a) {
  return !!(
    _0x58728a.getContextValue(_0x7a5c4e) &&
    _0x58728a.getContextValue(_0x10cc12) &&
    _0x58728a.getContextValue("FOCUSING_SLIDE_TABLE_OBJECT") &&
    !_0x58728a.getContextValue(_0x285afb)
  );
}
let Sa = class extends _0x3eba9a {
  constructor(_0x24cb86) {
    (super(),
      W(this, "_enabled$", undefined),
      W(this, "_fallbackVisible$", new _0x274664(false)),
      W(this, "_fallbackVisibleSources", new Set()),
      W(this, "enabled$", undefined),
      W(this, "visible$", undefined));
    let _0x139582 = _0x24cb86.getConfig(vr);
    ((this._enabled$ = new _0x274664(
      (_0x139582 == null ? undefined : _0x139582.floatingToolbar) ?? false,
    )),
      (this.enabled$ = this._enabled$["asObservable"]()),
      (this.visible$ = _0x54a368([this._enabled$, this._fallbackVisible$]).pipe(
        _0xdcbb46(([_0x5095b5, _0x2eef6d]) => _0x5095b5 || _0x2eef6d),
      )));
  }
  getEnabled() {
    return this._enabled$["getValue"]();
  }
  setEnabled(_0x19eaa9) {
    this.getEnabled() !== _0x19eaa9 && this._enabled$["next"](_0x19eaa9);
  }
  getVisible() {
    return this.getEnabled() || this._fallbackVisible$["getValue"]();
  }
  setFallbackVisible(_0x248328, _0x4267bc = "default") {
    _0x248328
      ? this._fallbackVisibleSources["add"](_0x4267bc)
      : this._fallbackVisibleSources["delete"](_0x4267bc);
    let _0x20bfa8 = this._fallbackVisibleSources["size"] > 0;
    this._fallbackVisible$["getValue"]() !== _0x20bfa8 &&
      this._fallbackVisible$["next"](_0x20bfa8);
  }
  toggle() {
    this.setEnabled(!this.getEnabled());
  }
  dispose() {
    (this._enabled$["complete"](),
      this._fallbackVisibleSources["clear"](),
      this._fallbackVisible$["complete"](),
      super.dispose());
  }
};
Sa = oa([Y(0, _0x34ee95)], Sa);
const Ca = {
    id: "slides-table-ui.operation.toggle-floating-toolbar",
    type: _0x1d6b9a.OPERATION,
    handler: (_0xb5742c) => (_0xb5742c.get(Sa).toggle(), true),
  },
  wa = "#FFFFFF",
  Ta = "#111827",
  Ea = [
    "backgroundColor",
    "backgroundFill",
    "borderColor",
    "borderDash",
    "borderWidth",
    "bold",
    "fontFamily",
    "fontSize",
    "horizontalAlign",
    "italic",
    "strike",
    "textBackgroundColor",
    "textColor",
    "textFill",
    "underline",
    "verticalAlign",
  ];
function Da() {
  return {
    backgroundColor: wa,
    backgroundFill: { type: _0x44feb0.Solid, color: wa, alpha: 1 },
    borderColor: "#1F1F1F",
    borderDash: _0x32edb5.Solid,
    borderWidth: 1,
    bold: false,
    fontFamily: _0x35b3dd.ff,
    fontSize: _0x35b3dd.fs,
    horizontalAlign: _0x582ddb.LEFT,
    italic: false,
    strike: false,
    textBackgroundColor: _0x35b3dd.bg["rgb"],
    textColor: Ta,
    textFill: { type: "solid", color: Ta, opacity: 1 },
    underline: false,
    verticalAlign: _0x1ba0d9.MIDDLE,
    mixed: {},
  };
}
function Oa(_0x48fd7f, _0x432ea3) {
  let _0x5d2892 = Da();
  if (!_0x48fd7f || !_0x432ea3) return _0x5d2892;
  let _0xca1831 = Math.min(_0x432ea3.startRow, _0x432ea3.endRow),
    _0x36322c = Math.max(_0x432ea3.startRow, _0x432ea3.endRow),
    _0x8f68cb = Math.min(_0x432ea3.startColumn, _0x432ea3.endColumn),
    _0x4f8f4a = Math.max(_0x432ea3.startColumn, _0x432ea3.endColumn),
    _0xe9e0ba = ka(_0x48fd7f, _0xca1831, _0x8f68cb, _0x5d2892);
  for (let _0x52793c = _0xca1831; _0x52793c <= _0x36322c; _0x52793c++)
    for (let _0x48f2b2 = _0x8f68cb; _0x48f2b2 <= _0x4f8f4a; _0x48f2b2++) {
      let _0x3412a2 = ka(_0x48fd7f, _0x52793c, _0x48f2b2, _0x5d2892);
      for (let _0x4ae2a6 of Ea)
        Na(_0xe9e0ba[_0x4ae2a6], _0x3412a2[_0x4ae2a6]) ||
          (_0xe9e0ba.mixed[_0x4ae2a6] = true);
    }
  return _0xe9e0ba;
}
function ka(_0x1d4709, _0x388a8a, _0x50523b, _0x6fb535) {
  var _0x5c93a1;
  let _0x2c016c =
    (_0x5c93a1 = _0x1d4709.rows[_0x388a8a]) == null
      ? undefined
      : _0x5c93a1.cells[_0x50523b];
  return {
    ...Aa(_0x2c016c, _0x6fb535),
    ...Ma(_0x2c016c == null ? undefined : _0x2c016c.textData, _0x6fb535),
    mixed: {},
  };
}
function Aa(_0x1df6ce, _0x6ff104) {
  let _0x1d7bbd = _0x1df6ce == null ? undefined : _0x1df6ce.style,
    _0x558b5b = ja(_0x1d7bbd == null ? undefined : _0x1d7bbd.borders);
  return {
    backgroundColor: La(
      _0x1d7bbd == null ? undefined : _0x1d7bbd.fill,
      _0x6ff104.backgroundColor,
    ),
    backgroundFill:
      (_0x1d7bbd == null ? undefined : _0x1d7bbd.fill) ??
      _0x6ff104.backgroundFill,
    borderColor:
      (_0x558b5b == null ? undefined : _0x558b5b.color) ??
      _0x6ff104.borderColor,
    borderDash:
      (_0x558b5b == null ? undefined : _0x558b5b.dash) ?? _0x6ff104.borderDash,
    borderWidth:
      (_0x558b5b == null ? undefined : _0x558b5b.width) ??
      _0x6ff104.borderWidth,
    verticalAlign:
      za(_0x1d7bbd == null ? undefined : _0x1d7bbd.verticalAlign) ??
      _0x6ff104.verticalAlign,
  };
}
function ja(_0x3bbca1) {
  return (
    (_0x3bbca1 == null ? undefined : _0x3bbca1.top) ??
    (_0x3bbca1 == null ? undefined : _0x3bbca1.left) ??
    (_0x3bbca1 == null ? undefined : _0x3bbca1.right) ??
    (_0x3bbca1 == null ? undefined : _0x3bbca1.bottom)
  );
}
function Ma(_0x26c171, _0x269efd) {
  let _0x5ac32b = Pa(_0x26c171);
  return {
    bold: _0x5ac32b.bold ?? _0x269efd.bold,
    fontFamily: _0x5ac32b.fontFamily ?? _0x269efd.fontFamily,
    fontSize: _0x5ac32b.fontSize ?? _0x269efd.fontSize,
    horizontalAlign: Fa(_0x26c171) ?? _0x269efd.horizontalAlign,
    italic: _0x5ac32b.italic ?? _0x269efd.italic,
    strike: _0x5ac32b.strike ?? _0x269efd.strike,
    textBackgroundColor:
      _0x5ac32b.textBackgroundColor ?? _0x269efd.textBackgroundColor,
    textColor:
      _0x5ac32b.textColor ?? Ra(_0x5ac32b.textFill, _0x269efd.textColor),
    textFill: _0x5ac32b.textFill ?? _0x269efd.textFill,
    underline: _0x5ac32b.underline ?? _0x269efd.underline,
  };
}
function Na(_0x2e967, _0x2edefc) {
  return typeof _0x2e967 == "object" || typeof _0x2edefc == "object"
    ? JSON.stringify(_0x2e967) === JSON.stringify(_0x2edefc)
    : _0x2e967 === _0x2edefc;
}
function Pa(_0x4492cb) {
  var _0x47cd43, _0x4ee3af, _0x5b42d6, _0x33f423, _0x24ee46, _0x14efaf;
  let _0x28c855 =
      _0x4492cb == null || (_0x47cd43 = _0x4492cb.documentStyle) == null
        ? undefined
        : _0x47cd43.textStyle,
    _0x534602 =
      _0x4492cb == null ||
      (_0x4ee3af = _0x4492cb.body) == null ||
      (_0x4ee3af = _0x4ee3af.textRuns) == null ||
      (_0x4ee3af = _0x4ee3af.find((_0x7a829c) => _0x7a829c.ts)) == null
        ? undefined
        : _0x4ee3af.ts,
    _0xebfe1b = { ..._0x28c855, ..._0x534602 };
  return {
    bold: _0xebfe1b.bl === _0x44fc22.TRUE,
    fontFamily: typeof _0xebfe1b.ff == "string" ? _0xebfe1b.ff : undefined,
    fontSize: typeof _0xebfe1b.fs == "number" ? _0xebfe1b.fs : undefined,
    italic: _0xebfe1b.it === _0x44fc22.TRUE,
    strike:
      ((_0x5b42d6 = _0xebfe1b.st) == null ? undefined : _0x5b42d6.s) ===
      _0x44fc22.TRUE,
    textBackgroundColor:
      typeof ((_0x33f423 = _0xebfe1b.bg) == null ? undefined : _0x33f423.rgb) ==
      "string"
        ? _0xebfe1b.bg["rgb"]
        : undefined,
    textColor:
      ((_0x24ee46 = _0xebfe1b.cl) == null ? undefined : _0x24ee46.rgb) ??
      Ra(_0xebfe1b.textFill, undefined),
    textFill: _0xebfe1b.textFill,
    underline:
      ((_0x14efaf = _0xebfe1b.ul) == null ? undefined : _0x14efaf.s) ===
      _0x44fc22.TRUE,
  };
}
function Fa(_0x527403) {
  var _0x57bdb7, _0x1e920a;
  let _0x452fd7 =
    _0x527403 == null ||
    (_0x57bdb7 = _0x527403.documentStyle) == null ||
    (_0x57bdb7 = _0x57bdb7.renderConfig) == null
      ? undefined
      : _0x57bdb7.horizontalAlign;
  return _0x452fd7 === undefined
    ? _0x527403 == null ||
      (_0x1e920a = _0x527403.body) == null ||
      (_0x1e920a = _0x1e920a.paragraphs) == null ||
      (_0x1e920a = _0x1e920a.find((_0x445d59) => {
        var _0x2a6c4c;
        return (
          ((_0x2a6c4c = _0x445d59.paragraphStyle) == null
            ? undefined
            : _0x2a6c4c.horizontalAlign) !== undefined
        );
      })) == null ||
      (_0x1e920a = _0x1e920a.paragraphStyle) == null
      ? undefined
      : _0x1e920a.horizontalAlign
    : _0x452fd7;
}
function Ia(_0x465121) {
  var _0x43025f, _0x3e36b1;
  return !_0x465121 || _0x465121.type === _0x44feb0.None
    ? "none"
    : _0x465121.type === _0x44feb0.Picture ||
        ((_0x43025f = _0x465121.picture) != null && _0x43025f.source) ||
        _0x465121.picture
      ? "picture"
      : _0x465121.type === _0x44feb0.Gradient ||
          ((_0x3e36b1 = _0x465121.gradient) != null &&
            (_0x3e36b1 = _0x3e36b1.stops) != null &&
            _0x3e36b1.length)
        ? "gradient"
        : "solid";
}
function La(_0x3264fa, _0xeaf1ea) {
  var _0x4cc3c1;
  return (_0x3264fa == null ? undefined : _0x3264fa.type) === _0x44feb0.None
    ? _0xeaf1ea
    : ((_0x3264fa == null ||
      (_0x4cc3c1 = _0x3264fa.gradient) == null ||
      (_0x4cc3c1 = _0x4cc3c1.stops) == null ||
      (_0x4cc3c1 = _0x4cc3c1[0]) == null
        ? undefined
        : _0x4cc3c1.color) ??
        (_0x3264fa == null ? undefined : _0x3264fa.color) ??
        _0xeaf1ea);
}
function Ra(_0x52fcb9, _0x39a8b0) {
  var _0x17e2a4;
  return (_0x52fcb9 == null ? undefined : _0x52fcb9.type) === "none"
    ? "rgba(0, 0, 0, 0)"
    : ((_0x52fcb9 == null ||
      (_0x17e2a4 = _0x52fcb9.gradient) == null ||
      (_0x17e2a4 = _0x17e2a4.stops) == null ||
      (_0x17e2a4 = _0x17e2a4[0]) == null
        ? undefined
        : _0x17e2a4.color) ??
        (_0x52fcb9 == null ? undefined : _0x52fcb9.color) ??
        _0x39a8b0 ??
        "#111827");
}
function za(_0x32b74b) {
  if (_0x32b74b === _0x5b0766.Top) return _0x1ba0d9.TOP;
  if (_0x32b74b === _0x5b0766.Bottom) return _0x1ba0d9.BOTTOM;
  if (_0x32b74b === _0x5b0766.Middle) return _0x1ba0d9.MIDDLE;
}
function Ba(_0x4cd169, _0x3f1af6) {
  var _0x499457, _0x380a09, _0x36edff;
  return {
    type:
      (_0x4cd169 == null || (_0x499457 = _0x4cd169.gradient) == null
        ? undefined
        : _0x499457.type) ?? "linear",
    angle:
      (_0x4cd169 == null || (_0x380a09 = _0x4cd169.gradient) == null
        ? undefined
        : _0x380a09.angle) ?? 0,
    stops:
      _0x4cd169 != null &&
      (_0x36edff = _0x4cd169.gradient) != null &&
      (_0x36edff = _0x36edff.stops) != null &&
      _0x36edff.length
        ? _0x4cd169.gradient["stops"].map((_0x5c6c5a) => ({
            color: _0x5c6c5a.color,
            offset: _0x5c6c5a.offset,
            opacity: _0x5c6c5a.opacity,
          }))
        : [
            {
              color:
                (_0x4cd169 == null ? undefined : _0x4cd169.color) ?? _0x3f1af6,
              offset: 0,
              opacity: (_0x4cd169 == null ? undefined : _0x4cd169.alpha) ?? 1,
            },
            { color: "#000000", offset: 100, opacity: 1 },
          ],
  };
}
function Va(_0x25bd10) {
  let _0x1bd2db = _0x25bd10.stops[0];
  return {
    type: _0x44feb0.Gradient,
    color: (_0x1bd2db == null ? undefined : _0x1bd2db.color) ?? "#FFFFFF",
    alpha: (_0x1bd2db == null ? undefined : _0x1bd2db.opacity) ?? 1,
    picture: undefined,
    gradient: {
      type: _0x25bd10.type,
      angle: _0x25bd10.angle,
      stops: _0x25bd10.stops["map"]((_0x1c4966) => ({
        color: _0x1c4966.color,
        offset: _0x1c4966.offset,
        opacity: _0x1c4966.opacity,
      })),
    },
  };
}
function Ha(_0x352900, _0x1502eb) {
  var _0x1d8c1c, _0x410601;
  if ((_0x352900 == null ? undefined : _0x352900.type) === "none")
    return {
      backgroundColor: "transparent",
      backgroundImage:
        "linear-gradient(135deg, transparent 45%, #ef4444 45%, #ef4444 55%, transparent 55%)",
    };
  let _0x26642a =
    _0x352900 == null || (_0x1d8c1c = _0x352900.picture) == null
      ? undefined
      : _0x1d8c1c.source;
  return _0x26642a && /^(?:data:|https?:)/["test"](_0x26642a)
    ? {
        backgroundImage: 'url("' + _0x26642a + "\x22)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }
    : _0x352900 != null &&
        (_0x410601 = _0x352900.gradient) != null &&
        (_0x410601 = _0x410601.stops) != null &&
        _0x410601.length
      ? { backgroundImage: Ua(Ba(_0x352900, _0x1502eb)) }
      : {
          backgroundColor:
            (_0x352900 == null ? undefined : _0x352900.color) ?? _0x1502eb,
        };
}
function Ua(_0x393d31) {
  let _0x27fcee = _0x393d31.stops["map"](
    (_0x44ff0a) =>
      Wa(_0x44ff0a.color, _0x44ff0a.opacity ?? 1) +
      "\x20" +
      _0x44ff0a.offset +
      "%",
  ).join(",\x20");
  return _0x393d31.type === "radial" || _0x393d31.type === "diamond"
    ? "radial-gradient(circle,\x20" + _0x27fcee + ")"
    : "linear-gradient(" +
        (((_0x393d31.angle ?? 0) + 90) % 360) +
        "deg, " +
        _0x27fcee +
        ")";
}
function Wa(_0x153330, _0x25fd90) {
  if (_0x25fd90 >= 1) return _0x153330;
  let _0xe7d13c = new _0x1f520c(_0x153330);
  return _0xe7d13c.isValid
    ? _0xe7d13c.setAlpha(_0x25fd90).toRgbString()
    : _0x153330;
}
function Ga(_0x5c1fd3, _0x4065cc) {
  return _0x5c1fd3.some((_0x4b4986) => _0x4b4986.value === _0x4065cc)
    ? _0x5c1fd3
    : [{ label: _0x4065cc, value: _0x4065cc }, ..._0x5c1fd3];
}
const Ka = {
  MergeCells: "merge-cells",
  UnmergeCells: "unmerge-cells",
  SetCellStyle: "set-cell-style",
  SetBorderPreset: "set-border-preset",
};
function qa(_0x584558, _0x3e9e9b) {
  return [
    {
      id: Ka.MergeCells,
      commandId: _0x3e9e9b.mergeCells,
      enabled: ro(_0x584558),
    },
    {
      id: Ka.UnmergeCells,
      commandId: _0x3e9e9b.unmergeCells,
      enabled: no(_0x584558),
    },
    {
      id: Ka.SetCellStyle,
      commandId: _0x3e9e9b.setCellStyle,
      enabled: no(_0x584558),
    },
    {
      id: Ka.SetBorderPreset,
      commandId: _0x3e9e9b.setBorderPreset,
      enabled: no(_0x584558),
    },
  ];
}
function Ja(_0x2649d5) {
  let _0xf85c89 = io(_0x2649d5);
  return !_0x2649d5 || !_0xf85c89
    ? null
    : {
        unitId: _0x2649d5.unitId,
        tableId: _0x2649d5.tableId,
        range: _0xf85c89,
      };
}
function Ya(_0x47be1f) {
  let _0x1dea96 = io(_0x47be1f);
  return !_0x47be1f || !_0x1dea96
    ? null
    : {
        unitId: _0x47be1f.unitId,
        tableId: _0x47be1f.tableId,
        range: _0x1dea96,
      };
}
function Xa(_0x38fffe, _0x25baf9, _0x5e29e9) {
  if (!_0x38fffe || !_0x25baf9) return null;
  if (_0x25baf9.action === "unmerge") {
    let _0x25ca20 = Ya({
      ..._0x38fffe,
      ranges: [_0x25baf9.range],
      anchor: {
        row: _0x25baf9.range["startRow"],
        column: _0x25baf9.range["startColumn"],
      },
      focus: {
        row: _0x25baf9.range["startRow"],
        column: _0x25baf9.range["startColumn"],
      },
    });
    return _0x25ca20
      ? { commandId: _0x5e29e9.unmergeCells, params: _0x25ca20 }
      : null;
  }
  let _0x85fafa = Ja({ ..._0x38fffe, ranges: [_0x25baf9.range] });
  return _0x85fafa
    ? { commandId: _0x5e29e9.mergeCells, params: _0x85fafa }
    : null;
}
function Za(_0x3d20fd, _0x1ba238, _0x447eb1) {
  let _0x167b39 = io(_0x1ba238);
  return !_0x1ba238 || !_0x167b39 || !_0x3d20fd
    ? null
    : _0x1ba238.kind === "row"
      ? _0x3d20fd.rows["length"] <= _0x167b39.endRow - _0x167b39.startRow + 1
        ? null
        : {
            commandId: _0x447eb1.deleteRows,
            params: {
              unitId: _0x1ba238.unitId,
              tableId: _0x1ba238.tableId,
              startRow: _0x167b39.startRow,
              endRow: _0x167b39.endRow,
            },
            kind: "row",
          }
      : _0x1ba238.kind === "column"
        ? _0x3d20fd.columns["length"] <=
          _0x167b39.endColumn - _0x167b39.startColumn + 1
          ? null
          : {
              commandId: _0x447eb1.deleteColumns,
              params: {
                unitId: _0x1ba238.unitId,
                tableId: _0x1ba238.tableId,
                startColumn: _0x167b39.startColumn,
                endColumn: _0x167b39.endColumn,
              },
              kind: "column",
            }
        : null;
}
function Qa(_0x15213, _0x554e42) {
  let _0x1287d4 = io(_0x15213);
  return !_0x15213 || !_0x1287d4
    ? null
    : {
        unitId: _0x15213.unitId,
        tableId: _0x15213.tableId,
        range: _0x1287d4,
        style: _0x554e42,
      };
}
function $a(_0x183dcb, _0x5b6750, _0x567fe1) {
  let _0x47e4ee = io(_0x183dcb);
  return !_0x183dcb || !_0x47e4ee
    ? null
    : {
        unitId: _0x183dcb.unitId,
        tableId: _0x183dcb.tableId,
        range: _0x47e4ee,
        preset: _0x5b6750,
        ...(_0x567fe1 ? { border: _0x567fe1 } : {}),
      };
}
function eo(_0x32aee4, _0x185cd8) {
  let _0x4b51b7 = io(_0x185cd8);
  if (!_0x4b51b7) return null;
  let _0x164a50 = _0x32aee4 ? to(_0x32aee4, _0x4b51b7) : null;
  return _0x164a50
    ? { action: "unmerge", range: _0x164a50 }
    : _0x2dc3c6(_0x4b51b7)
      ? { action: "merge", range: _0x4b51b7 }
      : null;
}
function to(_0x558890, _0xf6e74b) {
  let _0x43b720 = _0x3fbad0(_0xf6e74b);
  for (
    let _0x3981e = _0x43b720.startRow;
    _0x3981e <= _0x43b720.endRow;
    _0x3981e += 1
  )
    for (
      let _0x62bc37 = _0x43b720.startColumn;
      _0x62bc37 <= _0x43b720.endColumn;
      _0x62bc37 += 1
    ) {
      let _0x245083 = _0x2e284b(_0x558890, _0x3981e, _0x62bc37);
      if (_0x245083 && _0x2dc3c6(_0x245083)) return _0x245083;
    }
  return null;
}
function no(_0x288e8f) {
  return !!io(_0x288e8f);
}
function ro(_0x4d3685) {
  let _0x5f2a20 = io(_0x4d3685);
  return _0x5f2a20
    ? _0x5f2a20.startRow !== _0x5f2a20.endRow ||
        _0x5f2a20.startColumn !== _0x5f2a20.endColumn
    : false;
}
function io(_0x487486) {
  return (_0x487486 == null ? undefined : _0x487486.ranges[0]) ?? null;
}
function ao(_0x3fc715) {
  return qa(_0x3fc715, {
    mergeCells: _0x55f8de.id,
    unmergeCells: _0x35bd09.id,
    setCellStyle: _0x3f8728.id,
    setBorderPreset: _0x3f8728.id,
  });
}
function oo(_0x4685b9, _0x13cbcc) {
  return {
    actions: ao(_0x13cbcc),
    mergeState: eo(_0x4685b9, _0x13cbcc),
    values: Oa(_0x4685b9, _0x13cbcc == null ? undefined : _0x13cbcc.ranges[0]),
  };
}
function so(_0x5c680c, _0xf6a0ea, _0x7249e1) {
  return !_0x5c680c || !_0xf6a0ea || !_0x7249e1
    ? null
    : Xa(
        _0x5c680c,
        { action: _0xf6a0ea, range: _0x7249e1 },
        { mergeCells: _0x55f8de.id, unmergeCells: _0x35bd09.id },
      );
}
function co(_0x43d5ab, _0x547915) {
  return Za(_0x43d5ab, _0x547915, {
    deleteRows: _0x4e3296.id,
    deleteColumns: _0x242f72.id,
  });
}
function lo(_0x403118) {
  let _0x5d5650 = _0x5b71ae(false),
    _0x53a945 = _0x5b71ae(null),
    _0x4c8c98 = _0x22a685(G);
  return (
    _0x52562f(
      () => () => {
        _0x53a945.current && clearTimeout(_0x53a945.current);
      },
      [],
    ),
    _0x403118.children({
      handleOpenChange: (_0x13f0dd) => {
        (!_0x13f0dd && _0x5d5650.current) || _0x403118.onOpenChange(_0x13f0dd);
      },
      markInternalInteraction: () => {
        (_0x4c8c98.markTableInternalInteraction(),
          (_0x5d5650.current = true),
          _0x53a945.current && clearTimeout(_0x53a945.current),
          (_0x53a945.current = setTimeout(() => {
            ((_0x5d5650.current = false), (_0x53a945.current = null));
          }, 500)));
      },
    })
  );
}
const uo = {
  none: "none",
  solid: "solid",
  gradient: "gradient",
  picture: "picture",
};
function fo(_0x222de8) {
  var _0x4396ea, _0x31f4af;
  let {
      children: _0x2c1f6e,
      color: _0x3c78a7,
      gradientValue: _0x1f85ce,
      previewStyle: _0x12b3a9,
      showPreview: _0x7b4f84 = true,
      tableFill: _0x256f32,
      textFill: _0x322474,
      open: _0x20cb10,
      value: _0x3780ce,
      onOpenChange: _0xd31a2,
      onTableFillChange: _0x323fb5,
      onTextFillChange: _0x333524,
    } = _0x222de8,
    _0x1fd211 = _0x22a685(_0x3e56ef),
    _0x3a1415 = {
      noFill: _0x1fd211.t("slides-table-ui.shapePanel.fill.noFill"),
      solidFill: _0x1fd211.t("slides-table-ui.shapePanel.fill.solidFill"),
      gradientFill: _0x1fd211.t("slides-table-ui.shapePanel.fill.gradientFill"),
      pictureFill: _0x1fd211.t("slides-table-ui.shapePanel.fill.pictureFill"),
      color: _0x1fd211.t("slides-table-ui.shapePanel.fill.color"),
      transparency: _0x1fd211.t("slides-table-ui.shapePanel.fill.transparency"),
      pictureSource: _0x1fd211.t(
        "slides-table-ui.shapePanel.fill.picture.source",
      ),
      pictureInsert: _0x1fd211.t(
        "slides-table-ui.shapePanel.fill.picture.insert",
      ),
    },
    _0x2d4a5e =
      (_0x256f32 == null || (_0x4396ea = _0x256f32.picture) == null
        ? undefined
        : _0x4396ea.opacity) ??
      (_0x256f32 == null ? undefined : _0x256f32.alpha) ??
      (_0x322474 == null || (_0x31f4af = _0x322474.picture) == null
        ? undefined
        : _0x31f4af.opacity) ??
      (_0x322474 == null ? undefined : _0x322474.opacity) ??
      1,
    _0x24ffeb = (_0xade057) =>
      _0x323fb5 == null ? undefined : _0x323fb5(_0xade057),
    _0x1137a6 = (_0xb23c8d) =>
      _0x333524 == null ? undefined : _0x333524(_0xb23c8d);
  return _0x62bf85(lo, {
    onOpenChange: _0xd31a2,
    children: ({
      handleOpenChange: _0x7aaa49,
      markInternalInteraction: _0x1e33a0,
    }) =>
      _0x62bf85(_0x63bf71, {
        overlay: _0x62bf85("div", {
          className: _0x2a7ac1(
            "\n univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-shadow-lg\n dark:!univer-border-gray-700 dark:!univer-bg-gray-900\n",
            "univer-w-[280px]\x20univer-p-3",
            _0x470cce,
          ),
          "data-u-comp": "slide-table-floating-toolbar-popup",
          onMouseDown: (_0x10c1e0) => {
            (_0x1e33a0(), _0x534f0e(_0x10c1e0));
          },
          onPointerDown: (_0x288c1a) => {
            (_0x1e33a0(), _0x534f0e(_0x288c1a));
          },
          children: _0x62bf85(_0x31209d, {
            compact: true,
            direction: _0x1fd211.getDirection(),
            keepColorPickerOpenOnChange: true,
            value: _0x3780ce,
            typeValues: uo,
            color: _0x3c78a7,
            transparency: Math.round((1 - _0x2d4a5e) * 100),
            gradientValue: _0x1f85ce,
            labels: _0x3a1415,
            tabLabels: _0x3a1415,
            onChange: (_0x4189b9) => {
              if (_0x4189b9 === "none")
                (_0x24ffeb({
                  ..._0x256f32,
                  type: _0x44feb0.None,
                  gradient: undefined,
                  picture: undefined,
                }),
                  _0x1137a6({ ..._0x322474, type: "none" }));
              else {
                if (_0x4189b9 === "solid")
                  (_0x24ffeb({
                    ..._0x256f32,
                    type: _0x44feb0.Solid,
                    color: _0x3c78a7,
                    alpha: _0x2d4a5e,
                    gradient: undefined,
                    picture: undefined,
                  }),
                    _0x1137a6({
                      ..._0x322474,
                      type: "solid",
                      color: _0x3c78a7,
                      opacity: _0x2d4a5e,
                    }));
                else {
                  if (_0x4189b9 === "gradient")
                    (_0x24ffeb(Va(_0x1f85ce)), _0x1137a6(go(_0x1f85ce)));
                  else {
                    if (_0x4189b9 === "picture") {
                      var _0x3bc4b2, _0x3fe08e;
                      (_0x24ffeb({
                        ..._0x256f32,
                        type: _0x44feb0.Picture,
                        color: _0x3c78a7,
                        alpha: _0x2d4a5e,
                        gradient: undefined,
                        picture: {
                          ...(_0x256f32 == null
                            ? undefined
                            : _0x256f32.picture),
                          opacity: _0x2d4a5e,
                          mode:
                            (_0x256f32 == null ||
                            (_0x3bc4b2 = _0x256f32.picture) == null
                              ? undefined
                              : _0x3bc4b2.mode) ?? _0x3f481.Stretch,
                        },
                      }),
                        _0x1137a6({
                          ..._0x322474,
                          type: "picture",
                          color: _0x3c78a7,
                          opacity: _0x2d4a5e,
                          picture: {
                            ...(_0x322474 == null
                              ? undefined
                              : _0x322474.picture),
                            opacity: _0x2d4a5e,
                            mode:
                              (_0x322474 == null ||
                              (_0x3fe08e = _0x322474.picture) == null
                                ? undefined
                                : _0x3fe08e.mode) ?? _0x3f481.Stretch,
                          },
                        }));
                    }
                  }
                }
              }
            },
            onColorChange: (_0xc4f35e) => {
              (_0x24ffeb({
                ..._0x256f32,
                type: _0x44feb0.Solid,
                color: _0xc4f35e,
                alpha: _0x2d4a5e,
                gradient: undefined,
                picture: undefined,
              }),
                _0x1137a6({
                  ..._0x322474,
                  type: "solid",
                  color: _0xc4f35e,
                  opacity: _0x2d4a5e,
                }));
            },
            onTransparencyChange: (_0x385219) => {
              let _0x48eb5a =
                (100 - Math.max(0, Math.min(100, _0x385219))) / 100;
              if (_0x3780ce === "picture") {
                var _0x483368, _0xb366eb;
                (_0x24ffeb({
                  ..._0x256f32,
                  type: _0x44feb0.Picture,
                  picture: {
                    ...(_0x256f32 == null ? undefined : _0x256f32.picture),
                    opacity: _0x48eb5a,
                    mode:
                      (_0x256f32 == null ||
                      (_0x483368 = _0x256f32.picture) == null
                        ? undefined
                        : _0x483368.mode) ?? _0x3f481.Stretch,
                  },
                }),
                  _0x1137a6({
                    ..._0x322474,
                    type: "picture",
                    picture: {
                      ...(_0x322474 == null ? undefined : _0x322474.picture),
                      opacity: _0x48eb5a,
                      mode:
                        (_0x322474 == null ||
                        (_0xb366eb = _0x322474.picture) == null
                          ? undefined
                          : _0xb366eb.mode) ?? "stretch",
                    },
                  }));
                return;
              }
              (_0x24ffeb({
                ..._0x256f32,
                type: _0x44feb0.Solid,
                color: _0x3c78a7,
                alpha: _0x48eb5a,
                gradient: undefined,
                picture: undefined,
              }),
                _0x1137a6({
                  ..._0x322474,
                  type: "solid",
                  color: _0x3c78a7,
                  opacity: _0x48eb5a,
                }));
            },
            onGradientChange: (_0x329c7b) => {
              (_0x24ffeb(Va(_0x329c7b)), _0x1137a6(go(_0x329c7b)));
            },
            pictureFillEditor: _0x323fb5
              ? _0x62bf85(po, {
                  fill: _0x256f32,
                  labels: _0x3a1415,
                  onChange: _0x24ffeb,
                })
              : _0x62bf85(mo, {
                  fallbackColor: _0x3c78a7,
                  fill: _0x322474,
                  labels: _0x3a1415,
                  onChange: _0x1137a6,
                }),
          }),
        }),
        open: _0x20cb10,
        onOpenChange: _0x7aaa49,
        children: _0x62bf85("span", {
          children: _0x62bf85(_0x41fff0, {
            title:
              _0x222de8.label ??
              _0x1fd211.t("slides-table-ui.editorToolbar.tableBackgroundColor"),
            placement: "bottom",
            children: _0x4f34d5(_0x292281, {
              size: "small",
              variant: "ghost",
              "aria-expanded": _0x20cb10,
              "aria-label":
                _0x222de8.label ??
                _0x1fd211.t(
                  "slides-table-ui.editorToolbar.tableBackgroundColor",
                ),
              className: _0x2a7ac1({
                "univer-bg-gray-100\x20univer-text-primary-600\x20dark:!univer-bg-gray-700\x20dark:!univer-text-primary-300":
                  _0x20cb10,
              }),
              title:
                _0x222de8.label ??
                _0x1fd211.t(
                  "slides-table-ui.editorToolbar.tableBackgroundColor",
                ),
              type: "button",
              onMouseDown: _0x534f0e,
              onPointerDown: _0x534f0e,
              children: [
                _0x222de8.mixed
                  ? _0x62bf85("span", { "aria-hidden": "true", children: "—" })
                  : _0x2c1f6e,
                _0x222de8.label &&
                  _0x62bf85("span", {
                    className:
                      "univer-min-w-0 univer-flex-1 univer-truncate univer-text-left rtl:univer-text-right",
                    children: _0x222de8.label,
                  }),
                _0x7b4f84 && !_0x222de8.mixed
                  ? _0x62bf85("span", {
                      className:
                        "univer-h-3 univer-w-3 univer-rounded-sm univer-border univer-border-solid univer-border-gray-300 dark:!univer-border-gray-600",
                      style: _0x12b3a9,
                    })
                  : null,
                _0x62bf85(_0xc7f52a, { className: "univer-text-xs" }),
              ],
            }),
          }),
        }),
      }),
  });
}
function po(_0x40f965) {
  let { fill: _0x217597, labels: _0x3ff916, onChange: _0x4104fb } = _0x40f965,
    _0x3c36e6 = _0x22a685(_0x5c2e21),
    _0x88822 = _0x5b71ae(null),
    _0x486bda = _0x217597 == null ? undefined : _0x217597.picture,
    _0x1cc7a5 =
      (_0x486bda == null ? undefined : _0x486bda.opacity) ??
      (_0x217597 == null ? undefined : _0x217597.alpha) ??
      1,
    _0x45e6e3 =
      _0x486bda != null &&
      _0x486bda.source &&
      /^(?:data:|https?:)/["test"](_0x486bda.source)
        ? _0x486bda.source
        : undefined;
  return _0x4f34d5("div", {
    className: "univer-flex univer-flex-col univer-gap-2",
    children: [
      _0x4f34d5("div", {
        className:
          "univer-flex univer-items-center univer-justify-between univer-gap-3",
        children: [
          _0x62bf85("span", {
            className:
              "univer-shrink-0 univer-text-xs univer-text-gray-600 dark:!univer-text-gray-200",
            children: _0x3ff916.pictureSource,
          }),
          _0x62bf85("input", {
            ref: _0x88822,
            type: "file",
            accept: "image/*",
            className: "univer-hidden",
            onChange: async (_0x176c96) => {
              var _0x2098b1;
              let _0x5455c1 =
                (_0x2098b1 = _0x176c96.target["files"]) == null
                  ? undefined
                  : _0x2098b1[0];
              if (!_0x5455c1) return;
              _0x176c96.target["value"] = "";
              let _0x4ff63f = await _0x3c36e6.saveImage(_0x5455c1);
              if (_0x4ff63f == null) return;
              let {
                imageSourceType: _0x1f75ac,
                source: _0x556fc2,
                base64Cache: _0x4a22e7,
              } = _0x4ff63f;
              if (_0x4a22e7) {
                let { image: _0x38972c } = await _0x5b34f3(_0x4a22e7);
                _0x3c36e6.addImageSourceCache(_0x556fc2, _0x1f75ac, _0x38972c);
              }
              _0x4104fb({
                ..._0x217597,
                type: _0x44feb0.Picture,
                gradient: undefined,
                picture: {
                  ..._0x486bda,
                  source: _0x556fc2,
                  sourceType: _0x1f75ac,
                  opacity: _0x1cc7a5,
                  mode:
                    (_0x486bda == null ? undefined : _0x486bda.mode) ??
                    _0x3f481.Stretch,
                },
              });
            },
          }),
          _0x62bf85(_0x292281, {
            size: "small",
            type: "button",
            onClick: () => {
              var _0x5d9e8a;
              return (_0x5d9e8a = _0x88822.current) == null
                ? undefined
                : _0x5d9e8a.click();
            },
            children: _0x3ff916.pictureInsert,
          }),
        ],
      }),
      _0x45e6e3 &&
        _0x62bf85("img", {
          src: _0x45e6e3,
          alt: "",
          className:
            "univer-h-14\x20univer-w-full\x20univer-rounded\x20univer-object-cover",
        }),
      _0x62bf85(ho, {
        label: _0x3ff916.transparency,
        opacity: _0x1cc7a5,
        onChange: (_0x289eea) =>
          _0x4104fb({
            ..._0x217597,
            picture: {
              ..._0x486bda,
              opacity: _0x289eea,
              mode:
                (_0x486bda == null ? undefined : _0x486bda.mode) ??
                _0x3f481.Stretch,
            },
          }),
      }),
    ],
  });
}
function mo(_0xf73dbb) {
  let {
      fallbackColor: _0x2957ad,
      fill: _0xdc77a9,
      labels: _0x3b74b0,
      onChange: _0xc583c5,
    } = _0xf73dbb,
    _0x46ed9e = _0x22a685(_0x5c2e21),
    _0x3d5447 = _0x5b71ae(null),
    _0x1bc44f = _0xdc77a9 == null ? undefined : _0xdc77a9.picture,
    _0xd6c55c =
      (_0x1bc44f == null ? undefined : _0x1bc44f.opacity) ??
      (_0xdc77a9 == null ? undefined : _0xdc77a9.opacity) ??
      1,
    _0x26d0cf =
      _0x1bc44f != null &&
      _0x1bc44f.source &&
      /^(?:data:|https?:)/["test"](_0x1bc44f.source)
        ? _0x1bc44f.source
        : undefined;
  return _0x4f34d5("div", {
    className: "univer-flex univer-flex-col univer-gap-2",
    children: [
      _0x4f34d5("div", {
        className:
          "univer-flex univer-items-center univer-justify-between univer-gap-3",
        children: [
          _0x62bf85("span", {
            className:
              "univer-shrink-0\x20univer-text-xs\x20univer-text-gray-600\x20dark:!univer-text-gray-200",
            children: _0x3b74b0.pictureSource,
          }),
          _0x62bf85("input", {
            ref: _0x3d5447,
            type: "file",
            accept: "image/*",
            className: "univer-hidden",
            onChange: async (_0x37326f) => {
              var _0x283248;
              let _0x4e0c06 =
                (_0x283248 = _0x37326f.target["files"]) == null
                  ? undefined
                  : _0x283248[0];
              if (!_0x4e0c06) return;
              _0x37326f.target["value"] = "";
              let _0x2c25de = await _0x46ed9e.saveImage(_0x4e0c06);
              if (_0x2c25de == null) return;
              let {
                imageSourceType: _0x5b16cf,
                source: _0x34ff11,
                base64Cache: _0xfd93d,
              } = _0x2c25de;
              _0xc583c5({
                ..._0xdc77a9,
                type: "picture",
                color:
                  (_0xdc77a9 == null ? undefined : _0xdc77a9.color) ??
                  _0x2957ad,
                picture: {
                  ..._0x1bc44f,
                  source: _0xfd93d || _0x34ff11,
                  sourceType: _0x5b16cf,
                  opacity: _0xd6c55c,
                  mode:
                    (_0x1bc44f == null ? undefined : _0x1bc44f.mode) ??
                    "stretch",
                },
              });
            },
          }),
          _0x62bf85(_0x292281, {
            size: "small",
            type: "button",
            onClick: () => {
              var _0x5ddad4;
              return (_0x5ddad4 = _0x3d5447.current) == null
                ? undefined
                : _0x5ddad4.click();
            },
            children: _0x3b74b0.pictureInsert,
          }),
        ],
      }),
      _0x26d0cf &&
        _0x62bf85("img", {
          src: _0x26d0cf,
          alt: "",
          className:
            "univer-h-14 univer-w-full univer-rounded univer-object-cover",
        }),
      _0x62bf85(ho, {
        label: _0x3b74b0.transparency,
        opacity: _0xd6c55c,
        onChange: (_0x568551) =>
          _0xc583c5({
            ..._0xdc77a9,
            type: "picture",
            color:
              (_0xdc77a9 == null ? undefined : _0xdc77a9.color) ?? _0x2957ad,
            picture: {
              ..._0x1bc44f,
              opacity: _0x568551,
              mode:
                (_0x1bc44f == null ? undefined : _0x1bc44f.mode) ?? "stretch",
            },
          }),
      }),
    ],
  });
}
function ho(_0x16df93) {
  return _0x4f34d5("div", {
    className:
      "univer-flex univer-items-center univer-justify-between univer-gap-3",
    children: [
      _0x62bf85("span", {
        className:
          "univer-shrink-0 univer-text-xs univer-text-gray-600 dark:!univer-text-gray-200",
        children: _0x16df93.label,
      }),
      _0x62bf85("div", {
        className: "univer-w-20",
        children: _0x62bf85(_0x20e7bb, {
          className: "univer-w-full",
          value: Math.round((1 - _0x16df93.opacity) * 100),
          min: 0,
          max: 100,
          step: 10,
          formatter: (_0xe62d7b) => _0xe62d7b + "%",
          parser: (_0x43c2e3) =>
            (_0x43c2e3 == null ? undefined : _0x43c2e3.replace("%", "")) || "",
          onChange: (_0x25f68b) => {
            let _0xeacb91 = Math.max(0, Math.min(100, _0x25f68b ?? 0));
            _0x16df93.onChange((100 - _0xeacb91) / 100);
          },
        }),
      }),
    ],
  });
}
function go(_0x56d158) {
  var _0x37739c;
  return {
    type: "gradient",
    color:
      ((_0x37739c = _0x56d158.stops[0]) == null
        ? undefined
        : _0x37739c.color) ?? "#111827",
    gradient: {
      type: _0x56d158.type,
      angle: _0x56d158.angle,
      stops: _0x56d158.stops["map"]((_0x32f39) => ({
        offset: _0x32f39.offset,
        color: _0x32f39.color,
        opacity: _0x32f39.opacity,
      })),
    },
  };
}
const _o = _0x499089.map((_0x475ee7) => ({
    label: _0x475ee7.label,
    value: String(_0x475ee7.value),
  })),
  vo = [0, 1, 2, 3, 4, 6],
  yo = [
    {
      labelKey: "slides-table-ui.editorToolbar.borderStyleSolid",
      value: _0x32edb5.Solid,
    },
    {
      labelKey: "slides-table-ui.editorToolbar.borderStyleDash",
      value: _0x32edb5.Dash,
    },
    {
      labelKey: "slides-table-ui.editorToolbar.borderStyleDot",
      value: _0x32edb5.Dot,
    },
    {
      labelKey: "slides-table-ui.editorToolbar.borderStyleDashDot",
      value: _0x32edb5.DashDot,
    },
    {
      labelKey: "slides-table-ui.editorToolbar.noBorder",
      value: _0x32edb5.None,
    },
  ],
  bo = [
    {
      labelKey: "slides-table-ui.editorToolbar.borderPresetAll",
      preset: _0xfc89dc.All,
    },
    {
      labelKey: "slides-table-ui.editorToolbar.borderPresetInner",
      preset: _0xfc89dc.Inner,
    },
    {
      labelKey: "slides-table-ui.editorToolbar.borderPresetOuter",
      preset: _0xfc89dc.Outer,
    },
    {
      labelKey: "slides-table-ui.editorToolbar.borderPresetTop",
      preset: _0xfc89dc.Top,
    },
    {
      labelKey: "slides-table-ui.editorToolbar.borderPresetBottom",
      preset: _0xfc89dc.Bottom,
    },
    {
      labelKey: "slides-table-ui.editorToolbar.borderPresetLeft",
      preset: _0xfc89dc.Left,
    },
    {
      labelKey: "slides-table-ui.editorToolbar.borderPresetRight",
      preset: _0xfc89dc.Right,
    },
    {
      labelKey: "slides-table-ui.editorToolbar.borderPresetInnerHorizontal",
      preset: _0xfc89dc.InnerHorizontal,
    },
    {
      labelKey: "slides-table-ui.editorToolbar.borderPresetInnerVertical",
      preset: _0xfc89dc.InnerVertical,
    },
    {
      labelKey: "slides-table-ui.editorToolbar.noBorder",
      preset: _0xfc89dc.None,
    },
  ],
  xo = {
    [_0xfc89dc.All]: _0x23a34e,
    [_0xfc89dc.Inner]: _0x4dcc59,
    [_0xfc89dc.Outer]: _0x1e8c11,
    [_0xfc89dc.Top]: _0x2022e9,
    [_0xfc89dc.Bottom]: _0x402c0f,
    [_0xfc89dc.Left]: _0x3b1d66,
    [_0xfc89dc.Right]: _0x5ce49a,
    [_0xfc89dc.InnerHorizontal]: _0x121f50,
    [_0xfc89dc.InnerVertical]: _0xaa10a7,
    [_0xfc89dc.None]: _0x1a6842,
  },
  So = { colorChannel1: "#9ca3af" },
  Co =
    "\x0a\x20\x20\x20\x20univer-rounded-lg\x20univer-border\x20univer-border-solid\x20univer-border-gray-200\x20univer-bg-gray-0\x20univer-shadow-lg\x0a\x20\x20\x20\x20dark:!univer-border-gray-700\x20dark:!univer-bg-gray-900\x0a";
function wo(_0x3d8547) {
  return _0x62bf85("div", {
    className:
      "univer-flex univer-h-7 univer-flex-nowrap univer-items-center univer-gap-1 univer-px-1",
    children: _0x3d8547.children,
  });
}
function To(_0x207dac) {
  return _0x62bf85(_0x41fff0, {
    title: _0x207dac.title,
    placement: "bottom",
    children: _0x62bf85("span", {
      children: _0x62bf85(_0x292281, {
        size: "small",
        variant: "ghost",
        type: "button",
        "data-toolbar-item": _0x207dac["data-toolbar-item"],
        "aria-label": _0x207dac.title,
        title: _0x207dac.title,
        onClick: (_0x373cfd) => {
          (_0x373cfd.preventDefault(), _0x207dac.onClick());
        },
        onMouseDown: _0x534f0e,
        onPointerDown: _0x534f0e,
        children: _0x207dac.children,
      }),
    }),
  });
}
function Eo(_0x366ed) {
  return _0x62bf85(_0x41fff0, {
    title: _0x366ed.title,
    placement: "bottom",
    children: _0x62bf85(_0x292281, {
      size: "small",
      variant: "ghost",
      type: "button",
      "aria-label": _0x366ed.title,
      className: _0x2a7ac1({
        "univer-bg-primary-50\x20univer-text-primary-600\x20dark:!univer-bg-gray-800\x20dark:!univer-text-primary-300":
          _0x366ed.active,
      }),
      onClick: (_0x259642) => {
        (_0x259642.preventDefault(), _0x366ed.onClick());
      },
      onMouseDown: _0x534f0e,
      onPointerDown: _0x534f0e,
      children: _0x366ed.children,
    }),
  });
}
function Do(_0x3ca120) {
  let _0x428b49 = _0x22a685(_0x3e56ef);
  return _0x62bf85(lo, {
    onOpenChange: _0x3ca120.onOpenChange,
    children: ({
      handleOpenChange: _0x8c3ebc,
      markInternalInteraction: _0x534cfc,
    }) =>
      _0x62bf85(_0x63bf71, {
        open: _0x3ca120.open,
        onOpenChange: _0x8c3ebc,
        overlay: _0x4f34d5("section", {
          className: _0x2a7ac1(
            Co,
            "univer-grid univer-gap-2 univer-p-2",
            _0x470cce,
          ),
          "data-u-comp": "slide-table-floating-toolbar-popup",
          onMouseDown: (_0x398c62) => {
            (_0x534cfc(), _0x534f0e(_0x398c62));
          },
          onPointerDown: (_0x4b7c7b) => {
            (_0x534cfc(), _0x534f0e(_0x4b7c7b));
          },
          children: [
            _0x4f34d5("div", {
              className: "univer-flex\x20univer-items-center\x20univer-gap-2",
              children: [
                _0x62bf85(Eo, {
                  active:
                    !_0x3ca120.values["mixed"].bold && _0x3ca120.values["bold"],
                  title: _0x428b49.t("slides-table-ui.editorToolbar.bold"),
                  onClick: () =>
                    _0x3ca120.onToggleStyle({
                      bl:
                        _0x3ca120.values["mixed"].bold ||
                        !_0x3ca120.values["bold"]
                          ? _0x44fc22.TRUE
                          : _0x44fc22.FALSE,
                    }),
                  children: _0x62bf85(_0xd17514, {}),
                }),
                _0x62bf85(Eo, {
                  active:
                    !_0x3ca120.values["mixed"].italic &&
                    _0x3ca120.values["italic"],
                  title: _0x428b49.t("slides-table-ui.editorToolbar.italic"),
                  onClick: () =>
                    _0x3ca120.onToggleStyle({
                      it:
                        _0x3ca120.values["mixed"].italic ||
                        !_0x3ca120.values["italic"]
                          ? _0x44fc22.TRUE
                          : _0x44fc22.FALSE,
                    }),
                  children: _0x62bf85(_0x5cc895, {}),
                }),
                _0x62bf85(Eo, {
                  active:
                    !_0x3ca120.values["mixed"].underline &&
                    _0x3ca120.values["underline"],
                  title: _0x428b49.t("slides-table-ui.editorToolbar.underline"),
                  onClick: () =>
                    _0x3ca120.onToggleStyle({
                      ul: {
                        s:
                          _0x3ca120.values["mixed"].underline ||
                          !_0x3ca120.values["underline"]
                            ? _0x44fc22.TRUE
                            : _0x44fc22.FALSE,
                      },
                    }),
                  children: _0x62bf85(_0x56cbcc, {}),
                }),
                _0x62bf85(Eo, {
                  active:
                    !_0x3ca120.values["mixed"].strike &&
                    _0x3ca120.values["strike"],
                  title: _0x428b49.t(
                    "slides-table-ui.editorToolbar.strikethrough",
                  ),
                  onClick: () =>
                    _0x3ca120.onToggleStyle({
                      st: {
                        s:
                          _0x3ca120.values["mixed"].strike ||
                          !_0x3ca120.values["strike"]
                            ? _0x44fc22.TRUE
                            : _0x44fc22.FALSE,
                      },
                    }),
                  children: _0x62bf85(_0xf878ab, {}),
                }),
              ],
            }),
            _0x62bf85(_0x3e9729, {}),
            _0x62bf85("div", {
              className: "univer-flex\x20univer-items-center\x20univer-gap-2",
              children: _0x3ca120.horizontalAlignOptions["map"]((_0x11d0fe) =>
                _0x62bf85(
                  Eo,
                  {
                    active:
                      !_0x3ca120.values["mixed"].horizontalAlign &&
                      _0x3ca120.values["horizontalAlign"] === _0x11d0fe.value,
                    title: _0x428b49.t(_0x11d0fe.labelKey),
                    onClick: () => _0x3ca120.onHorizontalAlign(_0x11d0fe.value),
                    children: _0x11d0fe.icon,
                  },
                  _0x11d0fe.value,
                ),
              ),
            }),
            _0x62bf85(_0x3e9729, {}),
            _0x62bf85("div", {
              className: "univer-flex univer-items-center univer-gap-2",
              children: _0x3ca120.verticalAlignOptions["map"]((_0x89c12) =>
                _0x62bf85(
                  Eo,
                  {
                    active:
                      !_0x3ca120.values["mixed"].verticalAlign &&
                      _0x3ca120.values["verticalAlign"] === _0x89c12.value,
                    title: _0x428b49.t(_0x89c12.labelKey),
                    onClick: () => _0x3ca120.onVerticalAlign(_0x89c12.value),
                    children: _0x89c12.icon,
                  },
                  _0x89c12.value,
                ),
              ),
            }),
          ],
        }),
        children: _0x62bf85("span", {
          children: _0x62bf85(_0x41fff0, {
            title: _0x428b49.t("slides-table-ui.editorToolbar.textFormat"),
            placement: "bottom",
            children: _0x4f34d5(_0x292281, {
              size: "small",
              variant: "ghost",
              type: "button",
              "aria-expanded": _0x3ca120.open,
              "aria-label": _0x428b49.t(
                "slides-table-ui.editorToolbar.textFormat",
              ),
              className: _0x2a7ac1({
                "univer-bg-gray-100\x20univer-text-primary-600\x20dark:!univer-bg-gray-700\x20dark:!univer-text-primary-300":
                  _0x3ca120.open,
              }),
              onMouseDown: _0x534f0e,
              onPointerDown: _0x534f0e,
              children: [
                _0x62bf85(_0x35af64, {}),
                _0x62bf85(_0xc7f52a, { className: "univer-text-xs" }),
              ],
            }),
          }),
        }),
      }),
  });
}
function Oo(_0x4a6e4d) {
  let _0x369648 = _0x22a685(_0x3e56ef);
  return _0x62bf85(lo, {
    onOpenChange: _0x4a6e4d.onOpenChange,
    children: ({
      handleOpenChange: _0x23682f,
      markInternalInteraction: _0xa80d73,
    }) =>
      _0x62bf85(_0x63bf71, {
        open: _0x4a6e4d.open,
        onOpenChange: _0x23682f,
        overlay: _0x62bf85("section", {
          className: _0x2a7ac1(Co, _0x470cce),
          "data-u-comp": "slide-table-floating-toolbar-popup",
          onMouseDown: (_0x307cd2) => {
            (_0xa80d73(), _0x534f0e(_0x307cd2));
          },
          onPointerDown: (_0x185f47) => {
            (_0xa80d73(), _0x534f0e(_0x185f47));
          },
          children: _0x4a6e4d.children,
        }),
        children: _0x62bf85("span", {
          className: _0x2a7ac1({
            "[&>span]:univer-h-full\x20[&>span]:univer-w-full\x20[[data-u-comp=\x27ribbon-grid-toolbar\x27]_&]:univer-h-full\x20[[data-u-comp=\x27ribbon-grid-toolbar\x27]_&]:univer-w-full":
              _0x4a6e4d.ribbon,
          }),
          children: _0x62bf85(_0x41fff0, {
            title:
              _0x4a6e4d.label ??
              _0x369648.t("slides-table-ui.editorToolbar.tableTheme"),
            placement: "bottom",
            children: _0x4f34d5(_0x292281, {
              size: "small",
              variant: "ghost",
              type: "button",
              "data-toolbar-item": "table-theme",
              "aria-expanded": _0x4a6e4d.open,
              "aria-label":
                _0x4a6e4d.label ??
                _0x369648.t("slides-table-ui.editorToolbar.tableTheme"),
              title:
                _0x4a6e4d.label ??
                _0x369648.t("slides-table-ui.editorToolbar.tableTheme"),
              className: _0x2a7ac1({
                "[[data-u-comp=\x27ribbon-grid-toolbar\x27]_&]:univer-h-full\x20[[data-u-comp=\x27ribbon-grid-toolbar\x27]_&]:univer-w-full\x20[[data-u-comp=\x27ribbon-grid-toolbar\x27]_&]:univer-min-w-28\x20[[data-u-comp=\x27ribbon-grid-toolbar\x27]_&]:univer-flex-col\x20[[data-u-comp=\x27ribbon-grid-toolbar\x27]_&]:univer-gap-1\x20[[data-u-comp=\x27ribbon-grid-toolbar\x27]_&]:univer-px-1.5\x20[[data-u-comp=\x27ribbon-grid-toolbar\x27]_&]:univer-py-1":
                  _0x4a6e4d.ribbon,
                "univer-bg-gray-100\x20univer-text-primary-600\x20dark:!univer-bg-gray-700\x20dark:!univer-text-primary-300":
                  _0x4a6e4d.open,
              }),
              onMouseDown: _0x534f0e,
              onPointerDown: _0x534f0e,
              children: [
                _0x62bf85("span", {
                  className: _0x2a7ac1(
                    "univer-flex univer-items-center univer-justify-center",
                    {
                      "[[data-u-comp=\x27ribbon-grid-toolbar\x27]_&]:univer-text-3xl":
                        _0x4a6e4d.ribbon,
                    },
                  ),
                  children: _0x4a6e4d.icon ?? _0x62bf85(_0x25a17b, {}),
                }),
                _0x4f34d5("span", {
                  className: _0x2a7ac1(
                    "univer-flex univer-min-w-0 univer-items-center univer-gap-0.5",
                    {
                      "[[data-u-comp=\x27ribbon-grid-toolbar\x27]_&]:univer-w-full\x20[[data-u-comp=\x27ribbon-grid-toolbar\x27]_&]:univer-justify-center":
                        _0x4a6e4d.ribbon,
                    },
                  ),
                  children: [
                    _0x4a6e4d.label &&
                      _0x62bf85("span", {
                        className: _0x2a7ac1(
                          "univer-min-w-0\x20univer-flex-1\x20univer-truncate\x20univer-text-left\x20rtl:univer-text-right",
                          {
                            "[[data-u-comp=\x27ribbon-grid-toolbar\x27]_&]:univer-flex-none\x20[[data-u-comp=\x27ribbon-grid-toolbar\x27]_&]:univer-text-xs":
                              _0x4a6e4d.ribbon,
                          },
                        ),
                        children: _0x4a6e4d.label,
                      }),
                    _0x62bf85(_0xc7f52a, { className: "univer-text-xs" }),
                  ],
                }),
              ],
            }),
          }),
        }),
      }),
  });
}
function ko(_0x159a02) {
  let _0x10eaa2 = _0x22a685(_0x3e56ef),
    _0x2a43d9 =
      yo.find((_0x298b82) => _0x298b82.value === _0x159a02.dash) ?? yo[0];
  return _0x62bf85(lo, {
    onOpenChange: _0x159a02.onOpenChange,
    children: ({
      handleOpenChange: _0x1bba3e,
      markInternalInteraction: _0x572b28,
    }) =>
      _0x62bf85(_0x63bf71, {
        open: _0x159a02.open,
        onOpenChange: _0x1bba3e,
        overlay: _0x4f34d5("section", {
          className: _0x2a7ac1(
            Co,
            "univer-grid univer-gap-2 univer-p-2",
            _0x470cce,
          ),
          "data-u-comp": "slide-table-floating-toolbar-popup",
          dir: _0x159a02.direction,
          onMouseDown: (_0x406535) => {
            (_0x572b28(), _0x534f0e(_0x406535));
          },
          onPointerDown: (_0x3738b3) => {
            (_0x572b28(), _0x534f0e(_0x3738b3));
          },
          children: [
            _0x62bf85("div", {
              className: "univer-grid univer-grid-cols-5 univer-gap-1",
              children: _0x159a02.presets["map"](
                ({ labelKey: _0x1561f4, preset: _0x302185 }) => {
                  let _0x544250 = xo[_0x302185];
                  return _0x62bf85(
                    _0x41fff0,
                    {
                      title: _0x10eaa2.t(_0x1561f4),
                      placement: "bottom",
                      children: _0x62bf85(_0x292281, {
                        size: "icon",
                        variant: "ghost",
                        type: "button",
                        "aria-label": _0x10eaa2.t(_0x1561f4),
                        onClick: () => {
                          (_0x159a02.onSelectPreset(_0x302185),
                            _0x159a02.onOpenChange(false));
                        },
                        onMouseDown: _0x534f0e,
                        onPointerDown: _0x534f0e,
                        children: _0x62bf85(_0x544250, {
                          className: "univer-size-4 univer-text-current",
                          extend: So,
                        }),
                      }),
                    },
                    _0x302185,
                  );
                },
              ),
            }),
            _0x62bf85(_0x3e9729, {}),
            _0x4f34d5("div", {
              className: "univer-flex\x20univer-items-center\x20univer-gap-2",
              children: [
                _0x62bf85(Ao, {
                  title: _0x10eaa2.t(
                    "slides-table-ui.editorToolbar.tableBorderColor",
                  ),
                  direction: _0x159a02.direction,
                  color: _0x159a02.color,
                  onChange: _0x159a02.onChangeColor,
                  children: _0x62bf85(_0x25a17b, {
                    extend: { colorChannel1: _0x159a02.color },
                  }),
                }),
                _0x62bf85(Mo, {
                  title: _0x10eaa2.t(
                    "slides-table-ui.editorToolbar.borderWidth",
                  ),
                  direction: _0x159a02.direction,
                  value: String(_0x159a02.width),
                  options: vo.map((_0x2f4250) => ({
                    label:
                      _0x2f4250 === 0
                        ? _0x10eaa2.t("slides-table-ui.editorToolbar.noBorder")
                        : _0x2f4250 + "px",
                    value: String(_0x2f4250),
                    icon: _0x62bf85("span", {
                      className:
                        "univer-block univer-w-5 univer-rounded-full univer-bg-current",
                      style: { height: Math.max(1, _0x2f4250 || 1) },
                    }),
                  })),
                  onChange: (_0xdd0b4b) =>
                    _0x159a02.onChangeWidth(Number(_0xdd0b4b)),
                  children: _0x4f34d5("span", {
                    className: "univer-text-xs",
                    children: [_0x159a02.width, "px"],
                  }),
                }),
                _0x62bf85(Mo, {
                  title: _0x10eaa2.t(
                    "slides-table-ui.editorToolbar.borderStyle",
                  ),
                  direction: _0x159a02.direction,
                  value: _0x159a02.dash,
                  options: yo.map((_0x314e8c) => ({
                    label: _0x10eaa2.t(_0x314e8c.labelKey),
                    value: _0x314e8c.value,
                    icon: _0x62bf85(Po, { dash: _0x314e8c.value }),
                  })),
                  onChange: _0x159a02.onChangeDash,
                  children: _0x2a43d9
                    ? _0x62bf85(Po, { dash: _0x2a43d9.value })
                    : _0x62bf85(_0x23a34e, {}),
                }),
              ],
            }),
          ],
        }),
        children: _0x62bf85("span", {
          children: _0x62bf85(_0x41fff0, {
            title:
              _0x159a02.label ??
              _0x10eaa2.t("slides-table-ui.editorToolbar.border"),
            placement: "bottom",
            children: _0x4f34d5(_0x292281, {
              size: "small",
              variant: "ghost",
              type: "button",
              "aria-expanded": _0x159a02.open,
              "aria-label":
                _0x159a02.label ??
                _0x10eaa2.t("slides-table-ui.editorToolbar.border"),
              title:
                _0x159a02.label ??
                _0x10eaa2.t("slides-table-ui.editorToolbar.border"),
              className: _0x2a7ac1({
                "univer-bg-gray-100\x20univer-text-primary-600\x20dark:!univer-bg-gray-700\x20dark:!univer-text-primary-300":
                  _0x159a02.open,
              }),
              onMouseDown: _0x534f0e,
              onPointerDown: _0x534f0e,
              children: [
                _0x159a02.mixed
                  ? _0x62bf85("span", { "aria-hidden": "true", children: "—" })
                  : _0x62bf85(_0x23a34e, {}),
                _0x159a02.label &&
                  _0x62bf85("span", {
                    className:
                      "univer-min-w-0\x20univer-flex-1\x20univer-truncate\x20univer-text-left\x20rtl:univer-text-right",
                    children: _0x159a02.label,
                  }),
                _0x62bf85(_0xc7f52a, { className: "univer-text-xs" }),
              ],
            }),
          }),
        }),
      }),
  });
}
function Ao(_0x4fb7a3) {
  let {
      children: _0x259cdd,
      color: _0x2c8749,
      onChange: _0x3928bd,
    } = _0x4fb7a3,
    [_0x273fdd, _0x838650] = _0x1498db(false),
    _0xb4ae38 = _0x4fb7a3.open ?? _0x273fdd;
  return _0x62bf85(lo, {
    onOpenChange: _0x4fb7a3.onOpenChange ?? _0x838650,
    children: ({
      handleOpenChange: _0x5b5113,
      markInternalInteraction: _0x1007f6,
    }) =>
      _0x62bf85(_0x63bf71, {
        overlay: _0x62bf85("div", {
          className: _0x2a7ac1(Co, "univer-p-3", _0x470cce),
          "data-u-comp": "slide-table-floating-toolbar-popup",
          dir: _0x4fb7a3.direction,
          onMouseDown: (_0x4a5170) => {
            (_0x1007f6(), _0x534f0e(_0x4a5170));
          },
          onPointerDown: (_0x11f9ca) => {
            (_0x1007f6(), _0x534f0e(_0x11f9ca));
          },
          children: _0x62bf85(_0x53292c, {
            value: _0x2c8749,
            onChange: _0x3928bd,
          }),
        }),
        open: _0xb4ae38,
        onOpenChange: _0x5b5113,
        children: _0x62bf85("span", {
          children: _0x62bf85(_0x41fff0, {
            title: _0x4fb7a3.title,
            placement: "bottom",
            children: _0x4f34d5(_0x292281, {
              size: "small",
              variant: "ghost",
              "aria-expanded": _0xb4ae38,
              "aria-label": _0x4fb7a3.title,
              className: _0x2a7ac1({
                "univer-bg-gray-100\x20univer-text-primary-600\x20dark:!univer-bg-gray-700\x20dark:!univer-text-primary-300":
                  _0xb4ae38,
              }),
              title: _0x4fb7a3.title,
              type: "button",
              onMouseDown: _0x534f0e,
              onPointerDown: _0x534f0e,
              children: [
                _0x259cdd,
                _0x62bf85("span", {
                  className:
                    "univer-h-3 univer-w-3 univer-rounded-sm univer-border univer-border-solid univer-border-gray-300 dark:!univer-border-gray-600",
                  style: { backgroundColor: _0x2c8749 },
                }),
                _0x62bf85(_0xc7f52a, { className: "univer-text-xs" }),
              ],
            }),
          }),
        }),
      }),
  });
}
function jo(_0x3d4571) {
  return _0x62bf85(lo, {
    onOpenChange: _0x3d4571.onOpenChange,
    children: ({
      handleOpenChange: _0x5c1985,
      markInternalInteraction: _0x406e94,
    }) =>
      _0x62bf85(_0x63bf71, {
        open: _0x3d4571.open,
        onOpenChange: _0x5c1985,
        overlay: _0x62bf85("div", {
          className: _0x2a7ac1(Co, "univer-p-3", _0x470cce),
          "data-u-comp": "slide-table-floating-toolbar-popup",
          onMouseDown: (_0x8e0e94) => {
            (_0x406e94(), _0x534f0e(_0x8e0e94));
          },
          onPointerDown: (_0x232e96) => {
            (_0x406e94(), _0x534f0e(_0x232e96));
          },
          children: _0x62bf85(_0x53292c, {
            value: _0x3d4571.color,
            onChange: _0x3d4571.onChange,
          }),
        }),
        children: _0x62bf85("span", {
          children: _0x62bf85(_0x41fff0, {
            title: _0x3d4571.title,
            placement: "bottom",
            children: _0x4f34d5(_0x292281, {
              size: "small",
              variant: "ghost",
              type: "button",
              "data-toolbar-item": _0x3d4571["data-toolbar-item"],
              "aria-expanded": _0x3d4571.open,
              "aria-label": _0x3d4571.title,
              className: _0x2a7ac1({
                "univer-bg-gray-100\x20dark:!univer-bg-gray-700":
                  _0x3d4571.open,
              }),
              onMouseDown: _0x534f0e,
              onPointerDown: _0x534f0e,
              children: [
                _0x3d4571.mixed
                  ? _0x62bf85("span", { "aria-hidden": "true", children: "—" })
                  : _0x3d4571.icon === "font"
                    ? _0x62bf85(_0x43556b, {
                        className: "univer-fill-primary-600",
                        extend: { colorChannel1: _0x3d4571.color },
                      })
                    : _0x62bf85(_0x25a17b, {
                        className: "univer-fill-primary-600",
                        extend: { colorChannel1: "var(--univer-primary-600)" },
                      }),
                _0x62bf85(_0xc7f52a, { className: "univer-text-xs" }),
              ],
            }),
          }),
        }),
      }),
  });
}
function Mo(_0x2e9906) {
  let {
      children: _0x4973c3,
      direction: _0x2fed9c,
      title: _0x456515,
      value: _0x5f4ec1,
      open: _0x3c737a,
      options: _0x403e19,
      onChange: _0x19de9f,
      onOpenChange: _0x4ccba6,
    } = _0x2e9906,
    [_0x21da63, _0x1fcfe3] = _0x1498db(false),
    _0xfaf750 = _0x3c737a ?? _0x21da63,
    _0x1e890d = _0x4ccba6 ?? _0x1fcfe3,
    _0x4e0621 =
      _0x403e19.find((_0x41e08b) => _0x41e08b.value === _0x5f4ec1) ??
      _0x403e19[0];
  return _0x4e0621
    ? _0x62bf85(lo, {
        onOpenChange: _0x1e890d,
        children: ({
          handleOpenChange: _0x125e10,
          markInternalInteraction: _0xdeba4b,
        }) =>
          _0x62bf85(_0x63bf71, {
            open: _0xfaf750,
            onOpenChange: _0x125e10,
            overlay: _0x62bf85("div", {
              className: _0x2a7ac1(Co, "univer-min-w-32 univer-p-1", _0x470cce),
              dir: _0x2fed9c,
              onMouseDown: (_0x5f9d82) => {
                (_0xdeba4b(), _0x534f0e(_0x5f9d82));
              },
              onPointerDown: (_0xfac450) => {
                (_0xdeba4b(), _0x534f0e(_0xfac450));
              },
              children: _0x403e19.map((_0x17bc2a) =>
                _0x4f34d5(
                  _0x292281,
                  {
                    size: "middle",
                    variant: "ghost",
                    type: "button",
                    onClick: () => {
                      (_0x19de9f(_0x17bc2a.value), _0x1e890d(false));
                    },
                    onMouseDown: _0x534f0e,
                    onPointerDown: _0x534f0e,
                    className: _0x2a7ac1(
                      "univer-w-full univer-justify-start rtl:univer-justify-end",
                      {
                        "univer-bg-primary-50\x20univer-text-primary-600\x20dark:!univer-bg-gray-800\x20dark:!univer-text-primary-300":
                          _0x17bc2a.value === _0x5f4ec1,
                      },
                    ),
                    children: [
                      _0x62bf85("span", {
                        className:
                          "univer-flex univer-size-4 univer-items-center univer-justify-center",
                        children: _0x17bc2a.icon,
                      }),
                      _0x62bf85("span", {
                        className: "univer-flex-1",
                        children: _0x17bc2a.label,
                      }),
                    ],
                  },
                  _0x17bc2a.value,
                ),
              ),
            }),
            children: _0x62bf85("span", {
              children: _0x62bf85(_0x41fff0, {
                title: _0x456515,
                placement: "bottom",
                children: _0x4f34d5(_0x292281, {
                  size: "small",
                  variant: "ghost",
                  type: "button",
                  "aria-expanded": _0xfaf750,
                  "aria-label": _0x456515,
                  title: _0x456515,
                  className: _0x2a7ac1({
                    "univer-bg-gray-100\x20univer-text-primary-600\x20dark:!univer-bg-gray-700\x20dark:!univer-text-primary-300":
                      _0xfaf750,
                  }),
                  onMouseDown: _0x534f0e,
                  onPointerDown: _0x534f0e,
                  children: [
                    _0x4973c3 ?? _0x4e0621.icon,
                    _0x62bf85(_0xc7f52a, { className: "univer-text-xs" }),
                  ],
                }),
              }),
            }),
          }),
      })
    : null;
}
function No(_0x53484b) {
  return _0x62bf85(_0x41fff0, {
    title: _0x53484b.title,
    placement: "bottom",
    children: _0x62bf85("span", {
      onMouseDown: _0x534f0e,
      onPointerDown: _0x534f0e,
      children: _0x62bf85(_0x1c5e22, {
        borderless: true,
        className: _0x2a7ac1(
          "!univer-h-6\x20!univer-min-w-0\x20!univer-rounded-md\x20!univer-border-transparent\x20!univer-bg-transparent\x20!univer-px-1.5",
          _0x53484b.widthClassName,
        ),
        value: _0x53484b.value,
        options: _0x53484b.options,
        onChange: _0x53484b.onChange,
      }),
    }),
  });
}
function Po(_0x5d655f) {
  let _0x359d99 = _0x22a685(_0x3e56ef),
    _0x21a0ac =
      _0x5d655f.dash === "dot"
        ? "1 3"
        : _0x5d655f.dash === "dash"
          ? "4\x203"
          : _0x5d655f.dash === "dashDot"
            ? "4\x202\x201\x202"
            : undefined;
  return _0x5d655f.dash === "none"
    ? _0x62bf85("span", {
        className: "univer-text-xs",
        children: _0x359d99.t("slides-table-ui.editorToolbar.none"),
      })
    : _0x62bf85("svg", {
        "aria-hidden": "true",
        height: "16",
        viewBox: "0\x200\x2024\x2016",
        width: "24",
        children: _0x62bf85("path", {
          d: "M3 8H21",
          stroke: "currentColor",
          strokeDasharray: _0x21a0ac,
          strokeLinecap: "round",
          strokeWidth: "2",
        }),
      });
}
const Fo = ["bestMatch", "light", "medium", "minimal"],
  Io = {
    bestMatch: "slides-table-ui.editorToolbar.bestMatch",
    light: "slides-table-ui.editorToolbar.light",
    medium: "slides-table-ui.editorToolbar.medium",
    minimal: "slides-table-ui.editorToolbar.minimal",
  },
  Lo = [
    { key: "firstRow", labelKey: "slides-table-ui.editorToolbar.headerRow" },
    { key: "lastRow", labelKey: "slides-table-ui.editorToolbar.footerRow" },
    { key: "bandRow", labelKey: "slides-table-ui.editorToolbar.bandedRows" },
    { key: "firstCol", labelKey: "slides-table-ui.editorToolbar.firstColumn" },
    { key: "lastCol", labelKey: "slides-table-ui.editorToolbar.lastColumn" },
    { key: "bandCol", labelKey: "slides-table-ui.editorToolbar.bandedColumns" },
  ];
function Ro(_0x155ea4) {
  let {
      currentOptions: _0x2d16aa,
      currentStyleId: _0x3a77a1,
      direction: _0x24282f = "ltr",
      palette: _0x180876,
      showOptions: _0x2659e9 = true,
      showThemes: _0x3b402d = true,
      onApplyTheme: _0x267720,
      onChangeOptions: _0x6ea43e,
    } = _0x155ea4,
    _0x465e52 = _0x22a685(_0x3e56ef),
    _0x363249 = _0x1a9ae0(_0x180876),
    _0x2f3fc5 = (_0x253ef0) => {
      _0x6ea43e({ ..._0x2d16aa, [_0x253ef0]: !_0x2d16aa[_0x253ef0] });
    };
  return _0x4f34d5("div", {
    className:
      "univer-flex\x20univer-max-h-[420px]\x20univer-w-[420px]\x20univer-flex-col\x20univer-text-gray-900\x20dark:!univer-text-gray-100",
    "data-u-comp": "slide-table-theme-gallery",
    dir: _0x24282f,
    style: { direction: _0x24282f },
    children: [
      _0x2659e9 &&
        _0x4f34d5("div", {
          className:
            "univer-sticky univer-top-0 univer-z-10 univer-bg-gray-0 univer-p-2 dark:!univer-bg-gray-900",
          children: [
            _0x4f34d5("div", {
              className:
                "univer-mb-2 univer-flex univer-items-center univer-justify-between",
              children: [
                _0x62bf85("div", {
                  className: "univer-text-sm\x20univer-font-medium",
                  children: _0x465e52.t(
                    "slides-table-ui.editorToolbar.tableTheme",
                  ),
                }),
                _0x62bf85("div", {
                  className:
                    "univer-text-xs\x20univer-text-gray-500\x20dark:!univer-text-gray-400",
                  children: _0x465e52.t(
                    "slides-table-ui.editorToolbar.tableLook",
                  ),
                }),
              ],
            }),
            _0x62bf85("div", {
              className: "univer-grid\x20univer-grid-cols-3\x20univer-gap-1",
              children: Lo.map((_0x17d936) =>
                _0x62bf85(
                  zo,
                  {
                    active: !!_0x2d16aa[_0x17d936.key],
                    label: _0x465e52.t(_0x17d936.labelKey),
                    onClick: () => _0x2f3fc5(_0x17d936.key),
                  },
                  _0x17d936.key,
                ),
              ),
            }),
          ],
        }),
      _0x3b402d &&
        _0x62bf85("div", {
          className: "univer-overflow-y-auto univer-p-2 univer-pt-1",
          children: Fo.map((_0x2910bd) => {
            let _0x2890e9 = _0x5c378e.filter(
              (_0x197fa6) => _0x197fa6.group === _0x2910bd,
            );
            return _0x2890e9.length
              ? _0x4f34d5(
                  "div",
                  {
                    className: "univer-mb-3 last:univer-mb-0",
                    children: [
                      _0x62bf85("div", {
                        className:
                          "univer-mb-1 univer-text-xs univer-font-medium univer-text-gray-500 dark:!univer-text-gray-400",
                        children: _0x465e52.t(Io[_0x2910bd]),
                      }),
                      _0x62bf85("div", {
                        className:
                          "univer-grid univer-grid-cols-4 univer-gap-2",
                        children: _0x2890e9.map((_0x52305b, _0x532fe0) => {
                          if (!_0x363249[_0x52305b.id]) return null;
                          let _0x5f1eb4 = _0x2d16aa,
                            _0x35a50d = _0x3a77a1 === _0x52305b.id,
                            _0x4e8b8d =
                              _0x465e52.t(Io[_0x2910bd]) +
                              "\x20" +
                              (_0x532fe0 + 1);
                          return _0x4f34d5(
                            "button",
                            {
                              type: "button",
                              "aria-label": _0x4e8b8d,
                              title: _0x4e8b8d,
                              className: _0x2a7ac1(
                                "univer-relative\x20univer-rounded-md\x20univer-border\x20univer-border-solid\x20univer-border-transparent\x20univer-bg-transparent\x20univer-p-1\x20univer-transition-colors\x20hover:univer-border-primary-300\x20hover:univer-bg-primary-50\x20dark:hover:!univer-bg-gray-800",
                                {
                                  "univer-border-primary-600\x20univer-bg-primary-50\x20univer-shadow-sm\x20dark:!univer-bg-gray-800":
                                    _0x35a50d,
                                },
                              ),
                              onClick: () => _0x267720(_0x52305b.id),
                              children: [
                                _0x35a50d &&
                                  _0x62bf85("span", {
                                    className:
                                      "univer-absolute univer-right-0.5 univer-top-0.5 univer-flex univer-size-4 univer-items-center univer-justify-center univer-rounded-full univer-bg-primary-600 univer-text-gray-0 univer-shadow-sm rtl:univer-left-0.5 rtl:univer-right-auto",
                                    children: _0x62bf85(_0x5ad943, {
                                      className: "univer-size-3",
                                    }),
                                  }),
                                _0x62bf85(Bo, {
                                  styleId: _0x52305b.id,
                                  options: _0x5f1eb4,
                                  direction: _0x24282f,
                                  palette: _0x180876,
                                }),
                              ],
                            },
                            _0x52305b.id,
                          );
                        }),
                      }),
                    ],
                  },
                  _0x2910bd,
                )
              : null;
          }),
        }),
    ],
  });
}
function zo(_0xd7c4e) {
  return _0x62bf85("div", {
    "aria-pressed": _0xd7c4e.active,
    role: "button",
    tabIndex: 0,
    className: _0x2a7ac1(
      "univer-flex univer-cursor-pointer univer-items-center univer-rounded-md univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-px-2 univer-py-1.5 univer-text-xs univer-transition-colors hover:univer-border-primary-300 hover:univer-bg-primary-50 focus-visible:univer-outline focus-visible:univer-outline-2 focus-visible:univer-outline-offset-1 focus-visible:univer-outline-primary-500 dark:!univer-border-gray-700 dark:!univer-bg-gray-900 dark:hover:!univer-bg-gray-800",
      {
        "univer-border-primary-600\x20univer-bg-primary-50\x20univer-text-primary-600\x20dark:!univer-border-primary-500\x20dark:!univer-bg-gray-800\x20dark:!univer-text-primary-300":
          _0xd7c4e.active,
      },
    ),
    onClick: _0xd7c4e.onClick,
    onKeyDown: (_0x53b8ba) => {
      (_0x53b8ba.key === "Enter" || _0x53b8ba.key === "\x20") &&
        (_0x53b8ba.preventDefault(), _0xd7c4e.onClick());
    },
    children: _0x62bf85(_0x4682a5, {
      checked: _0xd7c4e.active,
      className:
        "univer-pointer-events-none univer-w-full univer-min-w-0 univer-text-xs",
      contentClassName: _0x2a7ac1(
        "univer-truncate",
        _0xd7c4e.active &&
          "!univer-text-primary-600 dark:!univer-text-primary-300",
      ),
      onChange: () => undefined,
      children: _0xd7c4e.label,
    }),
  });
}
function Bo(_0x16f117) {
  return _0x62bf85("span", {
    className:
      "univer-grid univer-h-11 univer-w-20 univer-grid-cols-5 univer-overflow-hidden univer-rounded-sm",
    children: _0x509c52(
      {
        id: "theme-preview",
        rev: 0,
        styleId: _0x16f117.styleId,
        options: _0x16f117.options,
        columns: Array.from({ length: 5 }, () => ({ width: 1 })),
        rows: Array.from({ length: 4 }, () => ({
          height: 1,
          cells: Array.from({ length: 5 }, () => ({})),
        })),
      },
      { themes: _0x1a9ae0(_0x16f117.palette) },
    ).cells["map"]((_0x560253) => {
      var _0x3ba3f6,
        _0x3fc74f,
        _0x17db73,
        _0x46655d,
        _0x41c5aa,
        _0xcfd8ae,
        _0x5c4627,
        _0x425a8c,
        _0x11bbf0,
        _0x1fbe51;
      let _0x50f2f5 =
          ((_0x3ba3f6 = _0x560253.style["borders"]) == null
            ? undefined
            : _0x3ba3f6.right) ??
          ((_0x3fc74f = _0x560253.style["borders"]) == null
            ? undefined
            : _0x3fc74f.bottom) ??
          ((_0x17db73 = _0x560253.style["borders"]) == null
            ? undefined
            : _0x17db73.top) ??
          ((_0x46655d = _0x560253.style["borders"]) == null
            ? undefined
            : _0x46655d.left),
        _0x3e904 =
          (_0x41c5aa = _0x560253.style["borders"]) == null
            ? undefined
            : _0x41c5aa.top,
        _0x161818 =
          (_0xcfd8ae = _0x560253.style["borders"]) == null
            ? undefined
            : _0xcfd8ae.right,
        _0x1b34e9 =
          (_0x5c4627 = _0x560253.style["borders"]) == null
            ? undefined
            : _0x5c4627.bottom,
        _0x37b861 =
          (_0x425a8c = _0x560253.style["borders"]) == null
            ? undefined
            : _0x425a8c.left,
        _0x2bb3b1 = _0x16f117.direction === "rtl";
      return _0x62bf85(
        "span",
        {
          style: {
            background:
              ((_0x11bbf0 = _0x560253.style["fill"]) == null
                ? undefined
                : _0x11bbf0.type) === _0x44feb0.None
                ? "transparent"
                : (((_0x1fbe51 = _0x560253.style["fill"]) == null
                    ? undefined
                    : _0x1fbe51.color) ?? "transparent"),
            borderTop:
              _0x560253.row === 0
                ? "1px solid " +
                  ((_0x3e904 == null ? undefined : _0x3e904.color) ??
                    (_0x50f2f5 == null ? undefined : _0x50f2f5.color) ??
                    "transparent")
                : undefined,
            borderRight: _0x2bb3b1
              ? _0x560253.column === 0
                ? "1px\x20solid\x20" +
                  ((_0x37b861 == null ? undefined : _0x37b861.color) ??
                    (_0x50f2f5 == null ? undefined : _0x50f2f5.color) ??
                    "transparent")
                : undefined
              : "1px solid " +
                ((_0x161818 == null ? undefined : _0x161818.color) ??
                  (_0x50f2f5 == null ? undefined : _0x50f2f5.color) ??
                  "transparent"),
            borderBottom:
              "1px solid " +
              ((_0x1b34e9 == null ? undefined : _0x1b34e9.color) ??
                (_0x50f2f5 == null ? undefined : _0x50f2f5.color) ??
                "transparent"),
            borderLeft: _0x2bb3b1
              ? "1px solid " +
                ((_0x161818 == null ? undefined : _0x161818.color) ??
                  (_0x50f2f5 == null ? undefined : _0x50f2f5.color) ??
                  "transparent")
              : _0x560253.column === 0
                ? "1px solid " +
                  ((_0x37b861 == null ? undefined : _0x37b861.color) ??
                    (_0x50f2f5 == null ? undefined : _0x50f2f5.color) ??
                    "transparent")
                : undefined,
          },
        },
        _0x560253.row + ":" + _0x560253.column,
      );
    }),
  });
}
const Vo = "slides-table-ui.table-design.styles-control",
  Ho = "slides-table-ui.table-design.cell-style-control",
  Uo = "slides-table-ui.table-design.text-control";
function Wo(_0x235f22) {
  return _0x235f22.element["type"] === _0x17964d.Table;
}
function Go() {
  let _0x1a0c2f = _0x22a685(_0x34ee95),
    _0x22a90e = _0x22a685(_0x10d183),
    _0xd4ebd5 = _0x22a685(_0x4127e0),
    _0x584217 = _0x22a685(_0x1699a1),
    _0x1ae107 = _0x22a685(_0x4fffa3),
    _0x33d186 = _0x22a685(G),
    _0x508494 = () => {
      var _0x400d61;
      let _0x3bfadf = _0xd4ebd5.getSnapshot(),
        _0x216ee5 = _0x3bfadf.context;
      if (!_0x216ee5 || _0x3bfadf.selectedIds["length"] !== 1) return null;
      let _0x4d4825 = _0x22a90e.getDrawingByParam({
        unitId: _0x216ee5.unitId,
        subUnitId: _0x216ee5.subUnitId,
        drawingId: _0x3bfadf.selectedIds[0],
      });
      if (!_0x4d4825 || !Wo(_0x4d4825)) return null;
      let _0x520228 = _0x1ae107.getTable(
        _0x4d4825.unitId,
        _0x4d4825.element["tableId"],
      );
      if (!_0x520228) return null;
      let _0x161f77 = _0x33d186.getSelection(),
        _0x363eda =
          (_0x161f77 == null ? undefined : _0x161f77.unitId) ===
            _0x4d4825.unitId &&
          _0x161f77.subUnitId === _0x4d4825.subUnitId &&
          _0x161f77.elementId === _0x4d4825.drawingId &&
          _0x161f77.tableId === _0x4d4825.element["tableId"]
            ? _0x161f77
            : null,
        _0x3ea924 = _0x1a0c2f.getConfig(_0x29a240);
      return {
        drawing: _0x4d4825,
        editable:
          (_0x3ea924 == null || (_0x400d61 = _0x3ea924.editor) == null
            ? undefined
            : _0x400d61.enabled) !== false,
        selection: _0x363eda,
        table: _0x520228,
      };
    };
  return _0x4b666e(
    () =>
      _0x31905f(
        _0xd4ebd5.state$,
        _0x33d186.selection$,
        _0x584217.tableChange$,
      ).pipe(_0x1152d4(undefined), _0xdcbb46(_0x508494)),
    _0x508494(),
    false,
    [_0x22a90e, _0xd4ebd5, _0x584217, _0x1ae107, _0x33d186],
  );
}
function Ko(_0x1a04d6) {
  let _0x3f1f5c = _0x22a685(G);
  return _0x62bf85("fieldset", {
    disabled: _0x1a04d6.disabled,
    className:
      "univer-m-0 univer-flex univer-h-full univer-items-center univer-gap-1 univer-border-none univer-p-0 disabled:univer-cursor-not-allowed disabled:univer-opacity-50",
    onMouseDownCapture: () => _0x3f1f5c.markTableInternalInteraction(),
    onPointerDownCapture: () => _0x3f1f5c.markTableInternalInteraction(),
    onMouseDown: _0x534f0e,
    onPointerDown: _0x534f0e,
    children: _0x1a04d6.children,
  });
}
function qo() {
  var _0x414491;
  let _0xc6bb6 = _0x22a685(_0x59c1bd),
    _0x3f08a8 = _0x22a685(_0x3e56ef),
    _0x35f2ce = _0x22a685(_0xd94a7b),
    _0x259f70 = Go(),
    [_0x4b8807, _0x11e819] = _0x1498db(false),
    _0x5c7205 = _0x47b680(
      () => _0x54aa8e((_0x594508) => _0x35f2ce.getColorFromTheme(_0x594508)),
      [_0x35f2ce],
    ),
    _0x12918e =
      !(_0x259f70 != null && _0x259f70.editable) ||
      ((_0x414491 = _0x259f70.selection) == null
        ? undefined
        : _0x414491.kind) === "text",
    _0x46d02e = (_0x23560c) => {
      !_0x259f70 ||
        _0x12918e ||
        _0xc6bb6.executeCommand(_0x3f8728.id, {
          unitId: _0x259f70.drawing["unitId"],
          tableId: _0x259f70.table["id"],
          patch: { styleId: _0x23560c },
        });
    };
  return _0x62bf85(Ko, {
    disabled: _0x12918e,
    children: _0x62bf85(Oo, {
      icon: _0x62bf85(_0x2598c6, {
        className: "[[data-u-comp='ribbon-grid-toolbar']_&]:!univer-size-8",
      }),
      label: _0x3f08a8.t("slides-table-ui.editorToolbar.tableTheme"),
      ribbon: true,
      open: _0x4b8807,
      onOpenChange: _0x11e819,
      children: _0x259f70
        ? _0x62bf85(Ro, {
            currentStyleId: _0x259f70.table["styleId"],
            currentOptions: _0x259f70.table["options"] ?? {},
            direction: _0x3f08a8.getDirection(),
            palette: _0x5c7205,
            onApplyTheme: (_0x309590) => {
              (_0x46d02e(_0x309590), _0x11e819(false));
            },
            onChangeOptions: (_0x1fe501) => {
              !_0x259f70 ||
                _0x12918e ||
                _0xc6bb6.executeCommand(_0x3f8728.id, {
                  unitId: _0x259f70.drawing["unitId"],
                  tableId: _0x259f70.table["id"],
                  patch: { options: _0x1fe501 },
                });
            },
          })
        : null,
    }),
  });
}
function Jo(_0x52c392) {
  let _0x4d8210 = _0x22a685(_0x59c1bd),
    _0xdb7c94 = _0x22a685(_0x4fffa3);
  return (_0x5ebe69) => {
    var _0x51e9c4;
    let _0x28013d =
      _0x52c392 == null || (_0x51e9c4 = _0x52c392.selection) == null
        ? undefined
        : _0x51e9c4.ranges[0];
    if (!_0x52c392 || !_0x28013d) return;
    let _0x51d92f = _0xdb7c94.getTable(
      _0x52c392.drawing["unitId"],
      _0x52c392.table["id"],
    );
    _0x51d92f &&
      _0x4d8210.executeCommand(_0x3f8728.id, {
        unitId: _0x52c392.drawing["unitId"],
        tableId: _0x52c392.table["id"],
        patch: _0x5ebe69(_0x51d92f, _0x28013d),
      });
  };
}
function Yo() {
  let _0x27e6b8 = _0x22a685(_0x3e56ef),
    _0x2cab4f = _0x4b666e(_0x27e6b8.direction$, _0x27e6b8.getDirection()),
    _0x117fc5 = Go(),
    _0x22698e = Jo(_0x117fc5),
    [_0x500389, _0x2985a] = _0x1498db(null),
    _0x10dccd = oo(
      _0x117fc5 == null ? undefined : _0x117fc5.table,
      (_0x117fc5 == null ? undefined : _0x117fc5.selection) ?? null,
    ).values;
  return _0x62bf85(Ko, {
    disabled:
      !(_0x117fc5 != null && _0x117fc5.editable) ||
      !_0x117fc5.selection ||
      _0x117fc5.selection["kind"] === "text",
    children: _0x4f34d5("div", {
      className:
        "univer-flex univer-h-full univer-w-full univer-items-center univer-gap-2 [[data-u-comp='ribbon-grid-toolbar']_&]:univer-grid [[data-u-comp='ribbon-grid-toolbar']_&]:univer-grid-rows-2 [[data-u-comp='ribbon-grid-toolbar']_&]:univer-content-center [[data-u-comp='ribbon-grid-toolbar']_&]:univer-justify-items-stretch [[data-u-comp='ribbon-grid-toolbar']_&]:univer-gap-y-2",
      children: [
        _0x62bf85(fo, {
          color: _0x10dccd.backgroundColor,
          value: Ia(_0x10dccd.backgroundFill),
          gradientValue: Ba(
            _0x10dccd.backgroundFill,
            _0x10dccd.backgroundColor,
          ),
          previewStyle: Ha(_0x10dccd.backgroundFill, _0x10dccd.backgroundColor),
          showPreview: false,
          tableFill: _0x10dccd.backgroundFill,
          mixed: !!_0x10dccd.mixed["backgroundFill"],
          open: _0x500389 === "background",
          onOpenChange: (_0x29f352) =>
            _0x2985a(_0x29f352 ? "background" : null),
          onTableFillChange: (_0x5cccfd) =>
            _0x22698e((_0x8faff6, _0x456ac4) =>
              Pr(_0x8faff6, _0x456ac4, _0x5cccfd),
            ),
          children: _0x62bf85(_0x2b60fd, {
            extend: { colorChannel1: _0x10dccd.backgroundColor },
          }),
        }),
        _0x62bf85(ko, {
          direction: _0x2cab4f,
          color: _0x10dccd.borderColor,
          width: _0x10dccd.borderWidth,
          dash: _0x10dccd.borderDash ?? _0x32edb5.Solid,
          presets: bo,
          open: _0x500389 === "border",
          mixed: !!(
            _0x10dccd.mixed["borderColor"] ||
            _0x10dccd.mixed["borderWidth"] ||
            _0x10dccd.mixed["borderDash"]
          ),
          onOpenChange: (_0x17452e) => _0x2985a(_0x17452e ? "border" : null),
          onSelectPreset: (_0x5aa5db) =>
            _0x22698e((_0x520cb9, _0x2ff2c9) =>
              Rr(_0x520cb9, _0x2ff2c9, _0x5aa5db),
            ),
          onChangeColor: (_0x6807c6) =>
            _0x22698e((_0x35b2ed, _0x1bf0b5) =>
              Lr(_0x35b2ed, _0x1bf0b5, { color: _0x6807c6 }),
            ),
          onChangeWidth: (_0x16055e) =>
            _0x22698e((_0x27cd70, _0x38df5f) =>
              Lr(_0x27cd70, _0x38df5f, {
                width: _0x16055e,
                dash: _0x16055e === 0 ? _0x32edb5.None : undefined,
              }),
            ),
          onChangeDash: (_0x31e7b7) =>
            _0x22698e((_0x5d8d38, _0x462571) =>
              Lr(_0x5d8d38, _0x462571, { dash: _0x31e7b7 }),
            ),
        }),
      ],
    }),
  });
}
function Xo(_0x274b9b) {
  return _0x62bf85(_0x41fff0, {
    title: _0x274b9b.title,
    placement: "bottom",
    children: _0x62bf85("button", {
      type: "button",
      "aria-label": _0x274b9b.title,
      "aria-pressed": _0x274b9b.mixed ? "mixed" : _0x274b9b.active,
      onClick: _0x274b9b.onClick,
      onMouseDown: (_0x161ef9) => _0x161ef9.preventDefault(),
      className: _0x2a7ac1(
        "univer-flex\x20univer-size-6\x20univer-items-center\x20univer-justify-center\x20univer-rounded-md\x20univer-border-0\x20univer-bg-transparent\x20univer-p-0\x20univer-text-sm\x20univer-text-gray-700\x20univer-transition-colors\x20hover:univer-bg-gray-100\x20hover:univer-text-primary-600\x20dark:!univer-text-gray-100\x20dark:hover:!univer-bg-gray-700",
        (_0x274b9b.active || _0x274b9b.mixed) &&
          "univer-bg-primary-50 univer-text-primary-600 dark:!univer-bg-gray-700 dark:!univer-text-primary-300",
      ),
      children: _0x274b9b.children,
    }),
  });
}
function Zo(_0x28c017) {
  let [_0xef8860, _0x224c65] = _0x1498db(false),
    _0x27fdba =
      _0x28c017.options["find"](
        (_0x3e75ee) => _0x3e75ee.value === _0x28c017.value,
      ) ?? _0x28c017.options[0];
  return _0x62bf85(_0x63bf71, {
    open: _0xef8860,
    onOpenChange: _0x224c65,
    side: "bottom",
    avoidCollisions: true,
    overlay: _0x62bf85("div", {
      className:
        "univer-flex univer-flex-col univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-white univer-p-1 univer-shadow-lg dark:!univer-border-gray-700 dark:!univer-bg-gray-900",
      children: _0x28c017.options["map"]((_0x328539) =>
        _0x4f34d5(
          "button",
          {
            type: "button",
            "aria-label": _0x328539.label,
            "aria-pressed": _0x328539.value === _0x28c017.value,
            className: _0x2a7ac1(
              "univer-flex univer-h-8 univer-w-32 univer-items-center univer-justify-start univer-gap-2 univer-rounded-md univer-border-0 univer-bg-transparent univer-px-2 univer-text-sm univer-text-gray-700 hover:univer-bg-gray-100 dark:!univer-text-gray-100 dark:hover:!univer-bg-gray-700",
              _0x328539.value === _0x28c017.value &&
                "univer-bg-primary-50 univer-text-primary-600 dark:!univer-bg-gray-700 dark:!univer-text-primary-300",
            ),
            onClick: () => {
              (_0x28c017.onChange(_0x328539.value), _0x224c65(false));
            },
            onMouseDown: (_0x3b6b65) => _0x3b6b65.preventDefault(),
            children: [
              _0x62bf85("span", {
                className:
                  "univer-flex univer-size-5 univer-items-center univer-justify-center univer-text-lg",
                children: _0x328539.icon,
              }),
              _0x62bf85("span", { children: _0x328539.label }),
            ],
          },
          _0x328539.value,
        ),
      ),
    }),
    children: _0x62bf85("span", {
      children: _0x62bf85(_0x41fff0, {
        title: _0x27fdba == null ? undefined : _0x27fdba.label,
        placement: "bottom",
        children: _0x4f34d5("button", {
          type: "button",
          "aria-expanded": _0xef8860,
          "aria-label": _0x27fdba == null ? undefined : _0x27fdba.label,
          className: _0x2a7ac1(
            "univer-flex univer-h-6 univer-w-10 univer-items-center univer-justify-center univer-gap-0.5 univer-rounded-md univer-border-0 univer-bg-transparent univer-p-0 univer-text-lg univer-text-gray-700 hover:univer-bg-gray-100 dark:!univer-text-gray-100 dark:hover:!univer-bg-gray-700",
            (_0xef8860 || _0x28c017.mixed) &&
              "univer-bg-primary-50 univer-text-primary-600 dark:!univer-bg-gray-700 dark:!univer-text-primary-300",
          ),
          onMouseDown: (_0x6e56ea) => _0x6e56ea.preventDefault(),
          children: [
            _0x28c017.mixed
              ? _0x62bf85("span", { "aria-hidden": "true", children: "—" })
              : _0x27fdba == null
                ? undefined
                : _0x27fdba.icon,
            _0x62bf85(_0xc7f52a, { className: "univer-text-xs" }),
          ],
        }),
      }),
    }),
  });
}
function Qo(_0x371cec) {
  let [_0x490bb0, _0x2fcfb1] = _0x1498db(false);
  return _0x4f34d5("div", {
    className: "univer-flex univer-h-6 univer-w-10 univer-items-center",
    children: [
      _0x62bf85(Xo, {
        active: _0x371cec.active,
        mixed: _0x371cec.mixed,
        title: _0x371cec.title,
        onClick: _0x371cec.onToggle,
        children: _0x371cec.icon,
      }),
      _0x62bf85(_0x63bf71, {
        open: _0x490bb0,
        onOpenChange: _0x2fcfb1,
        side: "bottom",
        avoidCollisions: true,
        overlay: _0x371cec.picker(() => _0x2fcfb1(false)),
        children: _0x62bf85("button", {
          type: "button",
          "aria-expanded": _0x490bb0,
          "aria-label": _0x371cec.title,
          className: _0x2a7ac1(
            "univer-flex univer-h-6 univer-w-4 univer-items-center univer-justify-center univer-rounded-md univer-border-0 univer-bg-transparent univer-p-0 univer-text-xs univer-text-gray-700 hover:univer-bg-gray-100 dark:!univer-text-gray-100 dark:hover:!univer-bg-gray-700",
            _0x490bb0 &&
              "univer-bg-primary-50 univer-text-primary-600 dark:!univer-bg-gray-700 dark:!univer-text-primary-300",
          ),
          onMouseDown: (_0x284edd) => _0x284edd.preventDefault(),
          children: _0x62bf85(_0xc7f52a, {}),
        }),
      }),
    ],
  });
}
function $o(_0x46c731, _0x1bb0c3) {
  let _0x4b3e63 = _0x499089.map((_0x5d889c) => _0x5d889c.value);
  return _0x1bb0c3 > 0
    ? (_0x4b3e63.find((_0x2211a5) => _0x2211a5 > _0x46c731) ??
        _0x4b3e63[_0x4b3e63.length - 1] ??
        _0x46c731)
    : ([..._0x4b3e63].reverse().find((_0x16c834) => _0x16c834 < _0x46c731) ??
        _0x4b3e63[0] ??
        _0x46c731);
}
function es() {
  var _0x49358e;
  let _0x41dda1 = _0x22a685(_0x3e56ef),
    _0x183e3a = Go(),
    _0x71f8f3 = Jo(_0x183e3a),
    [_0x35642d, _0x5394e3] = _0x1498db(null),
    _0x3b0cb3 = oo(
      _0x183e3a == null ? undefined : _0x183e3a.table,
      (_0x183e3a == null ? undefined : _0x183e3a.selection) ?? null,
    ).values,
    _0xc09786 =
      !(_0x183e3a != null && _0x183e3a.editable) || !_0x183e3a.selection,
    _0x4db6e5 = [
      {
        label: _0x41dda1.t("slides-table-ui.editorToolbar.alignLeft"),
        value: _0x582ddb.LEFT,
        icon: _0x62bf85(_0x4a868b, {}),
      },
      {
        label: _0x41dda1.t("slides-table-ui.editorToolbar.alignCenter"),
        value: _0x582ddb.CENTER,
        icon: _0x62bf85(_0x35743f, {}),
      },
      {
        label: _0x41dda1.t("slides-table-ui.editorToolbar.alignRight"),
        value: _0x582ddb.RIGHT,
        icon: _0x62bf85(_0x5ec192, {}),
      },
      {
        label: _0x41dda1.t("slides-table-ui.editorToolbar.alignJustify"),
        value: _0x582ddb.JUSTIFIED,
        icon: _0x62bf85(_0x46c6a9, {}),
      },
    ],
    _0x500d91 = [
      {
        label: _0x41dda1.t("slides-table-ui.editorToolbar.alignTop"),
        value: _0x1ba0d9.TOP,
        icon: _0x62bf85(_0x34b6aa, {}),
      },
      {
        label: _0x41dda1.t("slides-table-ui.editorToolbar.alignMiddle"),
        value: _0x1ba0d9.MIDDLE,
        icon: _0x62bf85(_0x3780d1, {}),
      },
      {
        label: _0x41dda1.t("slides-table-ui.editorToolbar.alignBottom"),
        value: _0x1ba0d9.BOTTOM,
        icon: _0x62bf85(_0x926af6, {}),
      },
    ],
    _0x1ee024 =
      _0x183e3a == null || (_0x49358e = _0x183e3a.selection) == null
        ? undefined
        : _0x49358e.ranges[0],
    _0x404458 = jr(
      _0x183e3a == null ? undefined : _0x183e3a.table,
      _0x1ee024,
      _0x2dcdea.ORDER_LIST,
    ),
    _0x3eeddf = jr(
      _0x183e3a == null ? undefined : _0x183e3a.table,
      _0x1ee024,
      _0x2dcdea.BULLET_LIST,
    ),
    _0x3df262 = [
      {
        key: "bold",
        title: _0x41dda1.t("slides-table-ui.editorToolbar.bold"),
        active: _0x3b0cb3.bold,
        mixed: !!_0x3b0cb3.mixed["bold"],
        icon: _0x62bf85(_0xd17514, {}),
        patch: {
          bl:
            _0x3b0cb3.mixed["bold"] || !_0x3b0cb3.bold
              ? _0x44fc22.TRUE
              : _0x44fc22.FALSE,
        },
      },
      {
        key: "italic",
        title: _0x41dda1.t("slides-table-ui.editorToolbar.italic"),
        active: _0x3b0cb3.italic,
        mixed: !!_0x3b0cb3.mixed["italic"],
        icon: _0x62bf85(_0x5cc895, {}),
        patch: {
          it:
            _0x3b0cb3.mixed["italic"] || !_0x3b0cb3.italic
              ? _0x44fc22.TRUE
              : _0x44fc22.FALSE,
        },
      },
      {
        key: "underline",
        title: _0x41dda1.t("slides-table-ui.editorToolbar.underline"),
        active: _0x3b0cb3.underline,
        mixed: !!_0x3b0cb3.mixed["underline"],
        icon: _0x62bf85(_0x56cbcc, {}),
        patch: {
          ul: {
            s:
              _0x3b0cb3.mixed["underline"] || !_0x3b0cb3.underline
                ? _0x44fc22.TRUE
                : _0x44fc22.FALSE,
          },
        },
      },
      {
        key: "strikethrough",
        title: _0x41dda1.t("slides-table-ui.editorToolbar.strikethrough"),
        active: _0x3b0cb3.strike,
        mixed: !!_0x3b0cb3.mixed["strike"],
        icon: _0x62bf85(_0xf878ab, {}),
        patch: {
          st: {
            s:
              _0x3b0cb3.mixed["strike"] || !_0x3b0cb3.strike
                ? _0x44fc22.TRUE
                : _0x44fc22.FALSE,
          },
        },
      },
    ];
  return _0x62bf85(Ko, {
    disabled: _0xc09786,
    children: _0x4f34d5("div", {
      className:
        "univer-flex univer-h-full univer-w-full univer-items-center univer-gap-2",
      children: [
        _0x4f34d5("div", {
          className:
            "univer-flex\x20univer-items-center\x20univer-gap-1\x20[[data-u-comp=\x27ribbon-grid-toolbar\x27]_&]:univer-grid\x20[[data-u-comp=\x27ribbon-grid-toolbar\x27]_&]:univer-w-[120px]\x20[[data-u-comp=\x27ribbon-grid-toolbar\x27]_&]:univer-grid-rows-2\x20[[data-u-comp=\x27ribbon-grid-toolbar\x27]_&]:univer-gap-y-2",
          children: [
            _0x62bf85(_0x321b51, {
              ariaLabel: _0x41dda1.t(
                "slides-table-ui.editorToolbar.fontFamily",
              ),
              className:
                "!univer-h-6\x20univer-w-[120px]\x20[[data-u-comp=\x27ribbon-grid-toolbar\x27]_&]:univer-w-full",
              inputClassName: "univer-w-auto",
              value: _0x3b0cb3.mixed["fontFamily"] ? "" : _0x3b0cb3.fontFamily,
              onChange: (_0x7eceec) =>
                _0x71f8f3((_0x8b93e, _0x545c96) =>
                  zr(_0x8b93e, _0x545c96, _0x7eceec),
                ),
            }),
            _0x4f34d5("div", {
              className: "univer-flex\x20univer-items-center\x20univer-gap-1",
              children: [
                _0x62bf85(No, {
                  title: _0x41dda1.t("slides-table-ui.editorToolbar.fontSize"),
                  widthClassName: "univer-w-14",
                  value: _0x3b0cb3.mixed["fontSize"]
                    ? ""
                    : String(_0x3b0cb3.fontSize),
                  options: _0x3b0cb3.mixed["fontSize"]
                    ? [{ label: "—", value: "" }, ..._o]
                    : Ga(_o, String(_0x3b0cb3.fontSize)),
                  onChange: (_0x5de265) => {
                    let _0x3e8b3e = Number(_0x5de265);
                    _0x5de265 &&
                      !Number.isNaN(_0x3e8b3e) &&
                      _0x71f8f3((_0x355f58, _0x5dc162) =>
                        Br(_0x355f58, _0x5dc162, _0x3e8b3e),
                      );
                  },
                }),
                _0x62bf85(Xo, {
                  title: _0x41dda1.t(
                    "slides-table-ui.editorToolbar.increaseFontSize",
                  ),
                  onClick: () =>
                    _0x71f8f3((_0x14aa44, _0x525e46) =>
                      Br(_0x14aa44, _0x525e46, $o(_0x3b0cb3.fontSize, 1)),
                    ),
                  children: _0x62bf85(_0x550def, {}),
                }),
                _0x62bf85(Xo, {
                  title: _0x41dda1.t(
                    "slides-table-ui.editorToolbar.decreaseFontSize",
                  ),
                  onClick: () =>
                    _0x71f8f3((_0x2f7f40, _0x51e2fd) =>
                      Br(_0x2f7f40, _0x51e2fd, $o(_0x3b0cb3.fontSize, -1)),
                    ),
                  children: _0x62bf85(_0x58afd0, {}),
                }),
              ],
            }),
          ],
        }),
        _0x62bf85("div", {
          className:
            "univer-flex univer-items-center univer-gap-1 [[data-u-comp='ribbon-grid-toolbar']_&]:univer-grid [[data-u-comp='ribbon-grid-toolbar']_&]:univer-grid-cols-2 [[data-u-comp='ribbon-grid-toolbar']_&]:univer-grid-rows-2",
          children: _0x3df262.map((_0x2d561d) =>
            _0x62bf85(
              Xo,
              {
                title: _0x2d561d.title,
                active: _0x2d561d.active,
                mixed: _0x2d561d.mixed,
                onClick: () =>
                  _0x71f8f3((_0x6088be, _0x54e690) =>
                    ti(_0x6088be, _0x54e690, _0x2d561d.patch),
                  ),
                children: _0x2d561d.icon,
              },
              _0x2d561d.key,
            ),
          ),
        }),
        _0x4f34d5("div", {
          className:
            "univer-flex univer-items-center univer-gap-1 [[data-u-comp='ribbon-grid-toolbar']_&]:univer-grid [[data-u-comp='ribbon-grid-toolbar']_&]:univer-w-11 [[data-u-comp='ribbon-grid-toolbar']_&]:univer-grid-rows-2 [[data-u-comp='ribbon-grid-toolbar']_&]:univer-gap-y-2",
          children: [
            _0x62bf85(jo, {
              "data-toolbar-item": "ribbon-text-color",
              title: _0x41dda1.t("slides-table-ui.editorToolbar.textColor"),
              color: _0x3b0cb3.textColor,
              mixed: !!(
                _0x3b0cb3.mixed["textColor"] || _0x3b0cb3.mixed["textFill"]
              ),
              icon: "font",
              open: _0x35642d === "textColor",
              onOpenChange: (_0xb1fabc) =>
                _0x5394e3(_0xb1fabc ? "textColor" : null),
              onChange: (_0xd27bc2) =>
                _0x71f8f3((_0x1b9ec8, _0x5b656c) =>
                  Ir(_0x1b9ec8, _0x5b656c, {
                    type: "solid",
                    color: _0xd27bc2,
                    opacity: 1,
                  }),
                ),
            }),
            _0x62bf85(jo, {
              "data-toolbar-item": "ribbon-text-background",
              title: _0x41dda1.t(
                "slides-table-ui.editorToolbar.textBackgroundColor",
              ),
              color: _0x3b0cb3.textBackgroundColor,
              mixed: !!_0x3b0cb3.mixed["textBackgroundColor"],
              icon: "bucket",
              open: _0x35642d === "textBackground",
              onOpenChange: (_0x2a7891) =>
                _0x5394e3(_0x2a7891 ? "textBackground" : null),
              onChange: (_0x111a80) =>
                _0x71f8f3((_0x39c52a, _0x54376b) =>
                  ti(_0x39c52a, _0x54376b, { bg: { rgb: _0x111a80 } }),
                ),
            }),
          ],
        }),
        _0x4f34d5("div", {
          className:
            "univer-flex univer-items-center univer-gap-2 [[data-u-comp='ribbon-grid-toolbar']_&]:univer-grid [[data-u-comp='ribbon-grid-toolbar']_&]:univer-grid-cols-2 [[data-u-comp='ribbon-grid-toolbar']_&]:univer-grid-rows-2 [[data-u-comp='ribbon-grid-toolbar']_&]:univer-gap-x-2 [[data-u-comp='ribbon-grid-toolbar']_&]:univer-gap-y-2",
          children: [
            _0x62bf85(Zo, {
              options: _0x4db6e5,
              value: _0x3b0cb3.horizontalAlign,
              mixed: !!_0x3b0cb3.mixed["horizontalAlign"],
              onChange: (_0x26aeaf) =>
                _0x71f8f3((_0x1d451c, _0x28018f) =>
                  kr(_0x1d451c, _0x28018f, {
                    axis: "horizontal",
                    value: _0x26aeaf,
                  }),
                ),
            }),
            _0x62bf85(Qo, {
              title: _0x41dda1.t("slides-table-ui.editorToolbar.orderedList"),
              icon: _0x62bf85(_0x3b24a7, {}),
              active: _0x404458.active,
              mixed: _0x404458.mixed,
              onToggle: () =>
                _0x71f8f3((_0x8fcf2c, _0x560eb1) =>
                  Ar(
                    _0x8fcf2c,
                    _0x560eb1,
                    _0x404458.active ? null : _0x2dcdea.ORDER_LIST,
                  ),
                ),
              picker: (_0x3ff6e9) =>
                _0x62bf85(_0x3c9466, {
                  value: _0x404458.value,
                  onChange: (_0x22aba3) => {
                    _0x22aba3 &&
                      (_0x71f8f3((_0x885456, _0x14fc37) =>
                        Ar(_0x885456, _0x14fc37, _0x22aba3),
                      ),
                      _0x3ff6e9());
                  },
                }),
            }),
            _0x62bf85(Zo, {
              options: _0x500d91,
              value: _0x3b0cb3.verticalAlign,
              mixed: !!_0x3b0cb3.mixed["verticalAlign"],
              onChange: (_0x245fa4) =>
                _0x71f8f3((_0x521dda, _0x696065) =>
                  kr(_0x521dda, _0x696065, {
                    axis: "vertical",
                    value: _0x245fa4,
                  }),
                ),
            }),
            _0x62bf85(Qo, {
              title: _0x41dda1.t("slides-table-ui.editorToolbar.bulletList"),
              icon: _0x62bf85(_0x247fee, {}),
              active: _0x3eeddf.active,
              mixed: _0x3eeddf.mixed,
              onToggle: () =>
                _0x71f8f3((_0x5240c1, _0x12dfe8) =>
                  Ar(
                    _0x5240c1,
                    _0x12dfe8,
                    _0x3eeddf.active ? null : _0x2dcdea.BULLET_LIST,
                  ),
                ),
              picker: (_0xbd8fd5) =>
                _0x62bf85(_0x20e38c, {
                  value: _0x3eeddf.value,
                  onChange: (_0x56c313) => {
                    _0x56c313 &&
                      (_0x71f8f3((_0x4e4aa0, _0x493def) =>
                        Ar(_0x4e4aa0, _0x493def, _0x56c313),
                      ),
                      _0xbd8fd5());
                  },
                }),
            }),
          ],
        }),
      ],
    }),
  });
}
let ts = class extends _0x3eba9a {
  constructor(_0x285c9d, _0x54fae7) {
    (super(),
      (this._componentManager = _0x285c9d),
      (this._iconManager = _0x54fae7),
      this._registerIcons(),
      this._registerComponents());
  }
  _registerIcons() {
    this.disposeWithMe(
      this._iconManager["register"]({
        AdjustHeightDoubleIcon: _0xd8c0a3,
        AdjustWidthDoubleIcon: _0x11cbe0,
        CancelMergeIcon: _0x39cb4d,
        DeleteColumnDoubleIcon: _0x9333b7,
        DeleteRowDoubleIcon: _0x390b1d,
        InsertRowAboveDoubleIcon: _0x32f25a,
        InsertRowBelowDoubleIcon: _0x56febc,
        LeftInsertColumnDoubleIcon: _0x1ea7ec,
        MergeAllIcon: _0x84941e,
        RightInsertColumnDoubleIcon: _0x29a488,
      }),
    );
  }
  _registerComponents() {
    (this.disposeWithMe(this._componentManager["register"](Vo, qo)),
      this.disposeWithMe(this._componentManager["register"](Ho, Yo)),
      this.disposeWithMe(this._componentManager["register"](Uo, es)));
  }
};
ts = oa([Y(0, _0x487340(_0x32a693)), Y(1, _0x487340(_0x159a82))], ts);
const ns = "slides-table-ui.ribbon.tableDesign",
  rs = "slides-table-ui.ribbon.styles-control",
  is = "slides-table-ui.ribbon.cell-style-control",
  as = "slides-table-ui.ribbon.text-control";
function os(_0x4f2649, _0x2a288f) {
  return {
    id: _0x4f2649,
    type: _0x21e33e.BUTTON,
    label: { name: _0x2a288f, hoverable: false, selectable: false },
  };
}
function ss() {
  return os(rs, Vo);
}
function cs() {
  return os(is, Ho);
}
function ls() {
  return os(as, Uo);
}
function us(_0x24af2b) {
  var _0x2d43d2;
  let _0x414b8c = _0x24af2b.get(Sa),
    _0x2049a7 =
      ((_0x2d43d2 = _0x24af2b.get(_0x34ee95).getConfig(_0x29a240)) == null ||
      (_0x2d43d2 = _0x2d43d2.editor) == null
        ? undefined
        : _0x2d43d2.enabled) !== false;
  return {
    id: Ca.id,
    type: _0x21e33e.BUTTON,
    icon: "ShowToolbarIcon",
    title: "slides-table-ui.ribbon.floatingToolbar",
    tooltip: "slides-table-ui.ribbon.floatingToolbar",
    activated$: _0x414b8c.enabled$,
    disabled$: _0x2049a7 ? undefined : _0x5bae09(true),
  };
}
const ds = {
  forward: {
    id: Ci.id,
    icon: "MoveUpIcon",
    title: "slides-table-ui.ribbon.arrangeForward",
  },
  backward: {
    id: wi.id,
    icon: "MoveDownIcon",
    title: "slides-table-ui.ribbon.arrangeBackward",
  },
  front: {
    id: Ti.id,
    icon: "TopmostIcon",
    title: "slides-table-ui.ribbon.bringToFront",
  },
  back: {
    id: Ei.id,
    icon: "BottomIcon",
    title: "slides-table-ui.ribbon.sendToBack",
  },
};
function fs(_0x5b8cee, _0x244018) {
  let _0x1e754f = _0x5b8cee.get(_0x34ee95),
    _0x9c782d = _0x5b8cee.get(_0x10d183),
    _0x72ad7 = _0x5b8cee.get(_0x4127e0),
    _0xea9877 = _0x5b8cee.get(G);
  return _0x54a368([
    _0x72ad7.state$,
    _0x9c782d.order$["pipe"](_0x1152d4(undefined)),
    _0xea9877.selection$["pipe"](_0x1152d4(null)),
  ]).pipe(
    _0xdcbb46(([_0x591e01, , _0x2bf1e4]) => {
      var _0x1d30b7;
      if (
        ((_0x1d30b7 = _0x1e754f.getConfig(_0x29a240)) == null ||
        (_0x1d30b7 = _0x1d30b7.editor) == null
          ? undefined
          : _0x1d30b7.enabled) === false ||
        (_0x2bf1e4 == null ? undefined : _0x2bf1e4.kind) === "text"
      )
        return true;
      let _0x1877ac = _0x591e01.context;
      if (!_0x1877ac || _0x591e01.selectedIds["length"] !== 1) return true;
      let _0x2d57ca = _0x591e01.selectedIds[0],
        _0x6b85ff = _0x9c782d.getDrawingByParam({
          unitId: _0x1877ac.unitId,
          subUnitId: _0x1877ac.subUnitId,
          drawingId: _0x2d57ca,
        });
      if (
        (_0x6b85ff == null ? undefined : _0x6b85ff.element["type"]) !==
        _0x17964d.Table
      )
        return true;
      let _0x303cd0 = _0x9c782d.getDrawingOrder(
          _0x1877ac.unitId,
          _0x1877ac.subUnitId,
        ),
        _0x5a99ce = _0x303cd0.indexOf(_0x2d57ca);
      return (
        _0x5a99ce < 0 ||
        (_0x244018 === "forward" || _0x244018 === "front"
          ? _0x5a99ce === _0x303cd0.length - 1
          : _0x5a99ce === 0)
      );
    }),
  );
}
function ps(_0x56b759, _0x266cd4) {
  let _0x2dfeff = ds[_0x266cd4];
  return {
    id: _0x2dfeff.id,
    type: _0x21e33e.BUTTON,
    icon: _0x2dfeff.icon,
    title: _0x2dfeff.title,
    tooltip: _0x2dfeff.title,
    disabled$: fs(_0x56b759, _0x266cd4),
  };
}
const ms = (_0x15308e) => ps(_0x15308e, "forward"),
  hs = (_0x50b8c5) => ps(_0x50b8c5, "backward"),
  gs = (_0x18c694) => ps(_0x18c694, "front"),
  _s = (_0x26c53e) => ps(_0x26c53e, "back");
function X(_0x57f9d5, _0x392f6b) {
  let _0x1ba0d8 = _0x57f9d5.get(_0x34ee95),
    _0x4c2f6e = _0x57f9d5.get(_0x1699a1);
  return _0x54a368([
    _0x57f9d5.get(G).selection$,
    _0x4c2f6e.tableChange$["pipe"](_0x1152d4(undefined)),
  ]).pipe(
    _0xdcbb46(([_0x29002c]) => {
      var _0x385cc0;
      return (
        ((_0x385cc0 = _0x1ba0d8.getConfig(_0x29a240)) == null ||
        (_0x385cc0 = _0x385cc0.editor) == null
          ? undefined
          : _0x385cc0.enabled) === false ||
        (_0x29002c == null ? undefined : _0x29002c.kind) === "text" ||
        !_0x392f6b(_0x57f9d5)
      );
    }),
  );
}
const vs = "slide-table.menu.insert",
  ys = "slide-table.menu.delete",
  bs = "slide-table.menu.distribute";
function xs(_0x22035f) {
  return {
    id: vs,
    type: _0x21e33e.SUBITEMS,
    title: "slides-table-ui.contextMenu.insert",
    hidden$: Ss(_0x22035f),
  };
}
function Ss(_0x131d0b) {
  if (!_0x131d0b) return _0x5bae09(true);
  let _0x3cf61d = _0x131d0b.get(G),
    _0x48bf7f = _0x131d0b.get(_0x4fffa3);
  return _0x3cf61d.selection$["pipe"](
    _0xdcbb46((_0x14eca4) => {
      let _0x311bd5 = J(_0x14eca4);
      return (
        !_0x311bd5 || !_0x48bf7f.getTable(_0x311bd5.unitId, _0x311bd5.tableId)
      );
    }),
  );
}
function Cs() {
  return {
    id: ys,
    type: _0x21e33e.SUBITEMS,
    icon: "DeleteIcon",
    title: "slides-table-ui.contextMenu.delete",
    tooltip: "slides-table-ui.contextMenu.delete",
  };
}
function ws(_0x5508ba) {
  let _0xe68e26 = _0x54a368([X(_0x5508ba, Xi), X(_0x5508ba, Zi)]).pipe(
    _0xdcbb46(([_0x19244c, _0x37d85d]) => [
      {
        id: pi.id,
        value: pi.id,
        icon: "DeleteRowDoubleIcon",
        label: {
          name: "slides-table-ui.contextMenu.deleteRow",
          selectable: false,
        },
        params: {},
        disabled: _0x19244c,
      },
      {
        id: mi.id,
        value: mi.id,
        icon: "DeleteColumnDoubleIcon",
        label: {
          name: "slides-table-ui.contextMenu.deleteColumn",
          selectable: false,
        },
        params: {},
        disabled: _0x37d85d,
      },
    ]),
  );
  return { ...Cs(), selections: _0xe68e26 };
}
function Ts() {
  return {
    id: bs,
    type: _0x21e33e.SUBITEMS,
    icon: "AdjustHeightDoubleIcon",
    title: "slides-table-ui.contextMenu.distribute",
  };
}
function Es(_0x4d1868) {
  var _0x152d73;
  let _0x20cd17 =
      ((_0x152d73 = _0x4d1868.get(_0x34ee95).getConfig(_0x29a240)) == null ||
      (_0x152d73 = _0x152d73.editor) == null
        ? undefined
        : _0x152d73.enabled) === false,
    _0x502dc0 = _0x4d1868.get(G).selection$["pipe"](
      _0x1152d4(null),
      _0xdcbb46(
        (_0x2b279b) =>
          _0x20cd17 ||
          (_0x2b279b == null ? undefined : _0x2b279b.kind) === "text",
      ),
    );
  return {
    id: xi.id,
    type: _0x21e33e.BUTTON,
    icon: "DeleteIcon",
    title: "slides-table-ui.contextMenu.deleteTable",
    tooltip: "slides-table-ui.contextMenu.deleteTable",
    disabled$: _0x502dc0,
  };
}
function Ds(_0x53cf84) {
  return {
    id: li.id,
    type: _0x21e33e.BUTTON,
    icon: "InsertRowAboveDoubleIcon",
    title: "slides-table-ui.contextMenu.insertRowAbove",
    tooltip: "slides-table-ui.contextMenu.insertRowAbove",
    disabled$: _0x53cf84 ? X(_0x53cf84, Ls) : undefined,
  };
}
function Os(_0x5798e0) {
  return {
    id: ui.id,
    type: _0x21e33e.BUTTON,
    icon: "InsertRowBelowDoubleIcon",
    title: "slides-table-ui.contextMenu.insertRowBelow",
    tooltip: "slides-table-ui.contextMenu.insertRowBelow",
    disabled$: _0x5798e0 ? X(_0x5798e0, Ls) : undefined,
  };
}
function ks(_0x4347ef) {
  return {
    id: di.id,
    type: _0x21e33e.BUTTON,
    icon: "LeftInsertColumnDoubleIcon",
    title: "slides-table-ui.contextMenu.insertColumnLeft",
    tooltip: "slides-table-ui.contextMenu.insertColumnLeft",
    disabled$: _0x4347ef ? X(_0x4347ef, Ls) : undefined,
  };
}
function As(_0x5a9202) {
  return {
    id: fi.id,
    type: _0x21e33e.BUTTON,
    icon: "RightInsertColumnDoubleIcon",
    title: "slides-table-ui.contextMenu.insertColumnRight",
    tooltip: "slides-table-ui.contextMenu.insertColumnRight",
    disabled$: _0x5a9202 ? X(_0x5a9202, Ls) : undefined,
  };
}
function js(_0x49ebc3) {
  return {
    id: pi.id,
    type: _0x21e33e.BUTTON,
    icon: "DeleteRowDoubleIcon",
    title: "slides-table-ui.contextMenu.deleteRow",
    tooltip: "slides-table-ui.contextMenu.deleteRow",
    disabled$: _0x49ebc3 ? X(_0x49ebc3, Xi) : undefined,
  };
}
function Ms(_0x127ec2) {
  return {
    id: mi.id,
    type: _0x21e33e.BUTTON,
    icon: "DeleteColumnDoubleIcon",
    title: "slides-table-ui.contextMenu.deleteColumn",
    tooltip: "slides-table-ui.contextMenu.deleteColumn",
    disabled$: _0x127ec2 ? X(_0x127ec2, Zi) : undefined,
  };
}
function Ns(_0x12147d) {
  return {
    id: hi.id,
    type: _0x21e33e.BUTTON,
    icon: "MergeAllIcon",
    title: "slides-table-ui.editorToolbar.mergeCells",
    tooltip: "slides-table-ui.editorToolbar.mergeCells",
    disabled$: _0x12147d ? X(_0x12147d, Ji) : undefined,
  };
}
function Ps(_0x229e6e) {
  return {
    id: gi.id,
    type: _0x21e33e.BUTTON,
    icon: "CancelMergeIcon",
    title: "slides-table-ui.editorToolbar.unmergeCells",
    tooltip: "slides-table-ui.editorToolbar.unmergeCells",
    disabled$: _0x229e6e ? X(_0x229e6e, Yi) : undefined,
  };
}
function Fs(_0x4ee95b) {
  return {
    id: _i.id,
    type: _0x21e33e.BUTTON,
    icon: "AdjustHeightDoubleIcon",
    title: "slides-table-ui.contextMenu.distributeRows",
    tooltip: "slides-table-ui.contextMenu.distributeRows",
    disabled$: _0x4ee95b ? X(_0x4ee95b, Qi) : undefined,
  };
}
function Is(_0xd8e54e) {
  return {
    id: vi.id,
    type: _0x21e33e.BUTTON,
    icon: "AdjustWidthDoubleIcon",
    title: "slides-table-ui.contextMenu.distributeColumns",
    tooltip: "slides-table-ui.contextMenu.distributeColumns",
    disabled$: _0xd8e54e ? X(_0xd8e54e, $i) : undefined,
  };
}
function Ls(_0x4dfaf4) {
  let _0x19d17b = _0x4dfaf4.get(G).getSelection();
  return (
    !!_0x19d17b && _0x19d17b.kind !== "text" && _0x19d17b.ranges["length"] > 0
  );
}
const Rs = {
    [_0x5f58d9.CONTEXT_MENU]: {
      "slide-table.contextMenu.cell": {
        order: 23,
        [_0x38a8c2.LAYOUT]: {
          order: 0,
          [vs]: {
            order: 0,
            menuItemFactory: _0x8eb4f2(xs),
            "slide-table.menu.insert-row-above": {
              order: 0,
              menuItemFactory: _0x8eb4f2(Ds),
            },
            "slide-table.menu.insert-row-below": {
              order: 1,
              menuItemFactory: _0x8eb4f2(Os),
            },
            "slide-table.menu.insert-column-left": {
              order: 2,
              menuItemFactory: _0x8eb4f2(ks),
            },
            "slide-table.menu.insert-column-right": {
              order: 3,
              menuItemFactory: _0x8eb4f2(As),
            },
          },
          [ys]: {
            order: 1,
            menuItemFactory: _0x8eb4f2(Cs),
            "slide-table.menu.delete-rows": {
              order: 0,
              menuItemFactory: _0x8eb4f2(js),
            },
            "slide-table.menu.delete-columns": {
              order: 1,
              menuItemFactory: _0x8eb4f2(Ms),
            },
          },
          "slide-table.menu.merge-cells": {
            order: 2,
            menuItemFactory: _0x8eb4f2(Ns),
          },
          "slide-table.menu.unmerge-cells": {
            order: 3,
            menuItemFactory: _0x8eb4f2(Ps),
          },
          [bs]: {
            order: 4,
            menuItemFactory: _0x8eb4f2(Ts),
            "slide-table.menu.distribute-rows": {
              order: 0,
              menuItemFactory: _0x8eb4f2(Fs),
            },
            "slide-table.menu.distribute-columns": {
              order: 1,
              menuItemFactory: _0x8eb4f2(Is),
            },
          },
        },
        [_0x38a8c2.OTHERS]: {
          order: 1,
          [xi.id]: { order: 0, menuItemFactory: _0x8eb4f2(Es) },
        },
      },
    },
  },
  zs = {
    [_0x5f58d9.RIBBON]: {
      [ns]: {
        order: 101,
        contextual: true,
        "slides-table-ui.ribbon.styles": {
          order: 0,
          [rs]: {
            order: 0,
            gridLayout: {
              row: 1,
              column: 1,
              rowSpan: 2,
              columnSpan: 2,
              width: 112,
            },
            menuItemFactory: _0x8eb4f2(ss),
          },
        },
        "slides-table-ui.ribbon.cellStyle": {
          order: 1,
          [is]: {
            order: 0,
            gridLayout: { row: 1, column: 1, rowSpan: 2, width: 56 },
            menuItemFactory: _0x8eb4f2(cs),
          },
        },
        "slides-table-ui.ribbon.text": {
          order: 2,
          [as]: {
            order: 0,
            gridLayout: { row: 1, column: 1, rowSpan: 2, width: 344 },
            menuItemFactory: _0x8eb4f2(ls),
          },
        },
        "slides-table-ui.ribbon.layout": {
          order: 3,
          "slide-table.ribbon.insert-row-above": {
            order: 0,
            gridLayout: { row: 1, column: 1 },
            menuItemFactory: _0x8eb4f2(Ds),
          },
          "slide-table.ribbon.insert-row-below": {
            order: 1,
            gridLayout: { row: 2, column: 1 },
            menuItemFactory: _0x8eb4f2(Os),
          },
          "slide-table.ribbon.insert-column-left": {
            order: 2,
            gridLayout: { row: 1, column: 2 },
            menuItemFactory: _0x8eb4f2(ks),
          },
          "slide-table.ribbon.insert-column-right": {
            order: 3,
            gridLayout: { row: 2, column: 2 },
            menuItemFactory: _0x8eb4f2(As),
          },
          "slide-table.ribbon.merge-cells": {
            order: 4,
            gridLayout: { row: 1, column: 3 },
            menuItemFactory: _0x8eb4f2(Ns),
          },
          "slide-table.ribbon.unmerge-cells": {
            order: 5,
            gridLayout: { row: 2, column: 3 },
            menuItemFactory: _0x8eb4f2(Ps),
          },
          "slide-table.ribbon.distribute-rows": {
            order: 6,
            gridLayout: { row: 1, column: 4 },
            menuItemFactory: _0x8eb4f2(Fs),
          },
          "slide-table.ribbon.distribute-columns": {
            order: 7,
            gridLayout: { row: 2, column: 4 },
            menuItemFactory: _0x8eb4f2(Is),
          },
        },
        "slides-table-ui.ribbon.arrange": {
          order: 4,
          "slide-table.ribbon.arrange-forward": {
            order: 0,
            gridLayout: { row: 1, column: 1 },
            menuItemFactory: _0x8eb4f2(ms),
          },
          "slide-table.ribbon.arrange-backward": {
            order: 1,
            gridLayout: { row: 2, column: 1 },
            menuItemFactory: _0x8eb4f2(hs),
          },
          "slide-table.ribbon.arrange-front": {
            order: 2,
            gridLayout: { row: 1, column: 2 },
            menuItemFactory: _0x8eb4f2(gs),
          },
          "slide-table.ribbon.arrange-back": {
            order: 3,
            gridLayout: { row: 2, column: 2 },
            menuItemFactory: _0x8eb4f2(_s),
          },
        },
        "slides-table-ui.ribbon.panel": {
          order: 5,
          [ys]: {
            order: 0,
            gridLayout: { row: 1, column: 1, showLabel: true },
            menuItemFactory: _0x8eb4f2(ws),
            [xi.id]: { order: 0, menuItemFactory: _0x8eb4f2(Es) },
          },
          [Ca.id]: {
            order: 1,
            gridLayout: { row: 2, column: 1, showLabel: true },
            menuItemFactory: us,
          },
        },
      },
    },
  },
  Bs = "slides-table-ui.contextual-ribbon";
let Vs = class extends _0x3eba9a {
  constructor(
    _0x153504,
    _0x20b58a,
    _0x46d1fd,
    _0x543000,
    _0x1131a8,
    _0x3eba01,
    _0x3c6a6b,
    _0x1e245a,
  ) {
    (super(),
      (this._menuManagerService = _0x153504),
      (this._ribbonService = _0x20b58a),
      (this._slideDrawingStateService = _0x46d1fd),
      (this._slideDrawingService = _0x543000),
      (this._floatingToolbarService = _0x1131a8),
      (this._embedFocusOwnerService = _0x3eba01),
      (this._embedFloatingActiveService = _0x3c6a6b),
      (this._embedMountService = _0x1e245a),
      W(this, "_tableDesignVisible", false),
      this._menuManagerService["mergeMenu"](zs),
      this._listenSelection());
  }
  dispose() {
    (this._floatingToolbarService["setFallbackVisible"](false, Bs),
      this._hideTableDesignTab(),
      super.dispose());
  }
  _listenSelection() {
    this.disposeWithMe(
      _0xdc718a(
        this._slideDrawingStateService["state$"].subscribe((_0x3a4dd8) => {
          var _0x310c37;
          if (
            !this._isSingleTableSelection(_0x3a4dd8) ||
            this._isActiveFloatingEmbedHostSelection(_0x3a4dd8)
          ) {
            (this._floatingToolbarService["setFallbackVisible"](false, Bs),
              this._hideTableDesignTab());
            return;
          }
          let _0x58de79 =
            (_0x310c37 = _0x3a4dd8.context) == null
              ? undefined
              : _0x310c37.unitId;
          if (_0x58de79 && this._isIsolatedEmbedChildSelection(_0x58de79)) {
            (this._floatingToolbarService["setFallbackVisible"](true, Bs),
              this._hideTableDesignTab());
            return;
          }
          (this._floatingToolbarService["setFallbackVisible"](false, Bs),
            this._tableDesignVisible ||
              ((this._tableDesignVisible = true),
              this._ribbonService["showContextualTab"](ns, {
                activate: true,
              })));
        }),
      ),
    );
  }
  _isSingleTableSelection(_0x19a9cd) {
    var _0x31b43e;
    let _0x36e01b = _0x19a9cd.context;
    return !_0x36e01b || _0x19a9cd.selectedIds["length"] !== 1
      ? false
      : ((_0x31b43e = this._slideDrawingService["getDrawingByParam"]({
          unitId: _0x36e01b.unitId,
          subUnitId: _0x36e01b.subUnitId,
          drawingId: _0x19a9cd.selectedIds[0],
        })) == null
          ? undefined
          : _0x31b43e.element["type"]) === _0x17964d.Table;
  }
  _isNonFullscreenFloatingEmbedChildSelection(_0x128aad) {
    var _0x565ec8, _0x47211b;
    let _0x4932ff =
        (_0x565ec8 = this._embedFocusOwnerService) == null
          ? undefined
          : _0x565ec8.getFocusOwner(),
      _0x429297 =
        (_0x47211b = this._embedFloatingActiveService) == null
          ? undefined
          : _0x47211b.getActive();
    return (
      (_0x4932ff == null ? undefined : _0x4932ff.childUnitId) === _0x128aad &&
      (_0x429297 == null ? undefined : _0x429297.childUnitId) === _0x128aad &&
      _0x429297.stage === "stage2"
    );
  }
  _isIsolatedEmbedChildSelection(_0x484cab) {
    var _0x4fb312;
    return this._isNonFullscreenFloatingEmbedChildSelection(_0x484cab)
      ? true
      : (((_0x4fb312 = this._embedMountService) == null
          ? undefined
          : _0x4fb312
              .listSessions()
              .some(
                (_0x42c1c7) =>
                  _0x42c1c7.childUnitId === _0x484cab &&
                  _0x42c1c7.layout !== "tab-peer",
              )) ?? false);
  }
  _isActiveFloatingEmbedHostSelection(_0x402e0c) {
    var _0x1a80aa, _0x4cfada, _0x4b9d40, _0xcd325d;
    let _0x401a96 =
      (_0x1a80aa = this._embedFloatingActiveService) == null
        ? undefined
        : _0x1a80aa.getActive();
    if (
      !_0x401a96 ||
      _0x401a96.stage === "inactive" ||
      ((_0x4cfada = _0x402e0c.context) == null
        ? undefined
        : _0x4cfada.unitId) !== _0x401a96.hostUnitId ||
      _0x402e0c.selectedIds["length"] !== 1
    )
      return false;
    let _0x1b3298 =
        (_0x4b9d40 = this._embedMountService) == null
          ? undefined
          : _0x4b9d40
              .listSessions()
              .find(
                (_0x11687a) =>
                  _0x11687a.hostUnitId === _0x401a96.hostUnitId &&
                  _0x11687a.embedId === _0x401a96.embedId &&
                  _0x11687a.childUnitId === _0x401a96.childUnitId,
              ),
      _0x2cd5d2 =
        _0x1b3298 == null || (_0xcd325d = _0x1b3298.context) == null
          ? undefined
          : _0xcd325d.descriptor["hostAnchorId"];
    return !!_0x2cd5d2 && _0x402e0c.selectedIds[0] === _0x2cd5d2;
  }
  _hideTableDesignTab() {
    this._tableDesignVisible &&
      ((this._tableDesignVisible = false),
      this._ribbonService["hideContextualTab"](ns),
      this._ribbonService["setCollapsedIds"]([]));
  }
};
Vs = oa(
  [
    Y(0, _0x5c187f),
    Y(1, _0x265eed),
    Y(2, _0x487340(_0x4127e0)),
    Y(3, _0x487340(_0x10d183)),
    Y(4, _0x487340(Sa)),
    Y(5, _0x3664f1(_0x30bdac)),
    Y(6, _0x3664f1(_0xe3afd5)),
    Y(7, _0x3664f1(_0x10a47e)),
  ],
  Vs,
);
function Hs(_0x28c676) {
  var _0x541986;
  let {
      selection: _0x2fbce2,
      table: _0x17b727,
      tableHeight: _0x2d5d9c,
      tableWidth: _0x326baa,
    } = _0x28c676,
    _0x3bc8b9 = _0x2fbce2 == null ? undefined : _0x2fbce2.ranges[0];
  if (!_0x2fbce2 || !_0x17b727 || !_0x3bc8b9) return null;
  let _0x19d334 = _0x2fbce2.focus ?? _0x2fbce2.anchor ?? tc(_0x3bc8b9);
  if (!_0x19d334) return null;
  let _0x2e62f6 = _0x509c52(_0x17b727),
    _0x31e409 =
      _0x2e62f6.cells["find"](
        (_0x28f328) =>
          !_0x28f328.hidden &&
          _0x28f328.row === _0x19d334.row &&
          _0x28f328.column === _0x19d334.column,
      ) ??
      _0x2e62f6.cells["find"](
        (_0x23461b) =>
          !_0x23461b.hidden &&
          _0x19d334.row >= _0x23461b.row &&
          _0x19d334.row < _0x23461b.row + _0x23461b.rowSpan &&
          _0x19d334.column >= _0x23461b.column &&
          _0x19d334.column < _0x23461b.column + _0x23461b.columnSpan,
      );
  if (!_0x31e409) return null;
  let _0x488613 = ic(_0x326baa / _0x2e62f6.width, 1),
    _0x3ad5a7 = ic(_0x2d5d9c / _0x2e62f6.height, 1),
    _0x1e4e42 =
      (_0x541986 = _0x17b727.rows[_0x31e409.row]) == null
        ? undefined
        : _0x541986.cells[_0x31e409.column];
  return {
    row: _0x31e409.row,
    column: _0x31e409.column,
    cellStyle: _0x31e409.style,
    rect: nc(
      {
        left: _0x31e409.bounds["left"] * _0x488613,
        top: _0x31e409.bounds["top"] * _0x3ad5a7,
        width: _0x31e409.bounds["width"] * _0x488613,
        height: _0x31e409.bounds["height"] * _0x3ad5a7,
      },
      _0x31e409.style["margins"],
    ),
    documentData: qs(
      _0x1e4e42 == null ? undefined : _0x1e4e42.textData,
      ec(_0x17b727.id, _0x31e409.row, _0x31e409.column),
    ),
  };
}
function Us(_0x1716fc, _0x466416, _0x3e4fbf, _0xcb7fc1 = "") {
  return qs(
    {
      id: ec(_0x1716fc, _0x466416, _0x3e4fbf),
      body: {
        dataStream: _0xcb7fc1 + "\x0d\x0a",
        paragraphs: [$s()],
        textRuns: [],
      },
      documentStyle: {},
    },
    ec(_0x1716fc, _0x466416, _0x3e4fbf),
  );
}
function Ws(_0xdec47b, _0x2fff98) {
  var _0x297ab5;
  let _0x23d831 =
      _0x2fff98.replace(/\r\n/g, "\x0d").replace(/\n/g, "\x0d") + "\x0d\x0a",
    _0x3ea06c = Math.max(0, _0x23d831.length - 2),
    _0x37a1b2 =
      (_0x297ab5 = _0xdec47b.body) == null ||
      (_0x297ab5 = _0x297ab5.textRuns) == null ||
      (_0x297ab5 = _0x297ab5.find((_0x24d26c) => _0x24d26c.ts)) == null
        ? undefined
        : _0x297ab5.ts;
  return qs(
    {
      ..._0x16106d.deepClone(_0xdec47b),
      body: {
        ..._0xdec47b.body,
        dataStream: _0x23d831,
        paragraphs: Ys(_0x23d831),
        textRuns:
          _0x37a1b2 && _0x3ea06c > 0
            ? [{ st: 0, ed: _0x3ea06c, ts: { ..._0x37a1b2 } }]
            : [],
      },
    },
    _0xdec47b.id ?? "SLIDE_TABLE_CELL",
  );
}
function Gs(_0x365618) {
  var _0x40ed41, _0x67b25a;
  let {
      rect: _0xca1a53,
      scenePointToViewportPoint: _0x5204d5,
      tableTransform: _0x4234b3,
    } = _0x365618,
    _0xabf94b = rc(_0x4234b3.left, 0),
    _0x590965 = rc(_0x4234b3.top, 0),
    _0x266b0e = ic(_0x4234b3.width, 1),
    _0x5d572d = ic(_0x4234b3.height, 1),
    _0x5661ad = ic(_0xca1a53.width, 1),
    _0x5c232e = ic(_0xca1a53.height, 1),
    _0x29a5fb = _0xca1a53.left + _0x5661ad / 2 - _0x266b0e / 2,
    _0x39b424 = _0xca1a53.top + _0x5c232e / 2 - _0x5d572d / 2,
    _0x182bf8 = (rc(_0x4234b3.angle, 0) * Math.PI) / 180,
    _0x1fbb17 =
      _0x29a5fb * Math.cos(_0x182bf8) - _0x39b424 * Math.sin(_0x182bf8),
    _0x4e6a0d =
      _0x29a5fb * Math.sin(_0x182bf8) + _0x39b424 * Math.cos(_0x182bf8),
    _0x37600a = _0x5204d5({
      x: _0xabf94b + _0x266b0e / 2 + _0x1fbb17,
      y: _0x590965 + _0x5d572d / 2 + _0x4e6a0d,
    });
  return {
    rect: {
      left: _0x37600a.x - _0x5661ad / 2,
      top: _0x37600a.y - _0x5c232e / 2,
      width: _0x5661ad,
      height: _0x5c232e,
    },
    scale: {
      scaleX: ic(
        (_0x40ed41 = _0x365618.scale) == null ? undefined : _0x40ed41.scaleX,
        1,
      ),
      scaleY: ic(
        (_0x67b25a = _0x365618.scale) == null ? undefined : _0x67b25a.scaleY,
        1,
      ),
    },
    transform: { angle: 0, flipX: false, flipY: _0x4234b3.flipY },
  };
}
function Ks(_0x4c4dc3, _0x474bdd, _0x56a119) {
  return _0x4c4dc3
    ? {
        commandId: _0x56a119,
        params: {
          unitId: _0x4c4dc3.unitId,
          tableId: _0x4c4dc3.tableId,
          row: _0x4c4dc3.row,
          column: _0x4c4dc3.column,
          textData: _0x474bdd,
        },
      }
    : null;
}
function qs(_0x44de11, _0x3ca6f0) {
  var _0x5d1f50, _0x3fae54, _0x257b02, _0xa37e6e, _0x247790;
  let _0x3dc4b2 = _0x16106d.deepClone(
      _0x44de11 ?? {
        id: _0x3ca6f0,
        body: { dataStream: "\x0d\x0a", paragraphs: [$s()], textRuns: [] },
        documentStyle: {},
      },
    ),
    _0x182d24 = Js(
      (_0x5d1f50 = _0x3dc4b2.body) == null ? undefined : _0x5d1f50.dataStream,
    ),
    _0x48c418 =
      (_0x3fae54 = _0x3dc4b2.documentStyle) == null ||
      (_0x3fae54 = _0x3fae54.renderConfig) == null
        ? undefined
        : _0x3fae54.horizontalAlign,
    _0x5edc76 = {
      ..._0x3dc4b2.body,
      dataStream: _0x182d24,
      paragraphs: Xs(
        Qs(
          (_0x257b02 = _0x3dc4b2.body) != null &&
            (_0x257b02 = _0x257b02.paragraphs) != null &&
            _0x257b02.length
            ? _0x3dc4b2.body["paragraphs"]
            : Ys(_0x182d24),
        ),
        _0x48c418,
      ),
      textRuns: Zs(
        ((_0xa37e6e = _0x3dc4b2.body) == null
          ? undefined
          : _0xa37e6e.textRuns) ?? [],
      ),
    },
    _0xdbe6d1 = _0x3dc4b2.documentStyle ? { ..._0x3dc4b2.documentStyle } : {};
  return (
    (_0x247790 = _0xdbe6d1.textStyle) != null &&
      _0x247790.bg &&
      ((_0xdbe6d1.textStyle = { ..._0xdbe6d1.textStyle }),
      delete _0xdbe6d1.textStyle["bg"]),
    {
      ..._0x3dc4b2,
      id: _0x3dc4b2.id ?? _0x3ca6f0,
      body: _0x5edc76,
      documentStyle: { ..._0xdbe6d1, documentFlavor: _0x5ce310.UNSPECIFIED },
    }
  );
}
function Js(_0x27084a) {
  if (!_0x27084a) return "\x0d\x0a";
  let _0x3ddf50 = _0x27084a.replace(/\r\n/g, "\x0d").replace(/\n/g, "\x0d");
  return _0x3ddf50.endsWith("\x0d")
    ? _0x3ddf50 + "\x0a"
    : _0x3ddf50 + "\x0d\x0a";
}
function Ys(_0x42e3cb) {
  let _0x17e9e5 = Math.max(1, _0x42e3cb.split("\x0d").length - 1),
    _0x2fefb9 = 0;
  return Array.from({ length: _0x17e9e5 }, () => {
    let _0x971712 = $s(_0x2fefb9),
      _0x28309c = _0x42e3cb.indexOf("\x0d", _0x2fefb9);
    return (
      (_0x2fefb9 = _0x28309c >= 0 ? _0x28309c + 1 : _0x42e3cb.length),
      _0x971712
    );
  });
}
function Xs(_0x15996e, _0x53738a) {
  return _0x53738a === undefined
    ? _0x15996e
    : _0x15996e.map((_0x5b4708) => ({
        ..._0x5b4708,
        paragraphStyle: {
          ..._0x5b4708.paragraphStyle,
          horizontalAlign: _0x53738a,
        },
      }));
}
function Zs(_0x1a3d91) {
  return _0x1a3d91.map((_0x129870) => {
    var _0x212d20;
    if (!((_0x212d20 = _0x129870.ts) != null && _0x212d20.bg)) return _0x129870;
    let _0x465ee9 = { ..._0x129870.ts };
    return (delete _0x465ee9.bg, { ..._0x129870, ts: _0x465ee9 });
  });
}
function Qs(_0x3a47fb) {
  return _0x3a47fb != null && _0x3a47fb.length
    ? _0x3a47fb.map((_0xcef22c, _0x4117c7) => ({
        ..._0xcef22c,
        startIndex:
          typeof _0xcef22c.startIndex == "number"
            ? _0xcef22c.startIndex
            : _0x4117c7,
        paragraphId: _0xcef22c.paragraphId ?? _0x1d2f62(new Set()),
      }))
    : [$s()];
}
function $s(_0x245ba7 = 0) {
  return { startIndex: _0x245ba7, paragraphId: _0x1d2f62(new Set()) };
}
function ec(_0x5c5c00, _0x31999d, _0x292137) {
  return "SLIDE_TABLE_CELL_" + _0x5c5c00 + "_" + _0x31999d + "_" + _0x292137;
}
function tc(_0x5a330f) {
  let _0x470a0b = _0x3fbad0(_0x5a330f);
  return { row: _0x470a0b.startRow, column: _0x470a0b.startColumn };
}
function nc(_0x3666a2, _0x4b0c66) {
  let _0x341dbb = rc(_0x4b0c66 == null ? undefined : _0x4b0c66.left, 4),
    _0x307da6 = rc(_0x4b0c66 == null ? undefined : _0x4b0c66.right, 4),
    _0x1d175f = rc(_0x4b0c66 == null ? undefined : _0x4b0c66.top, 4),
    _0x99ecfb = rc(_0x4b0c66 == null ? undefined : _0x4b0c66.bottom, 4);
  return {
    left: _0x3666a2.left + _0x341dbb,
    top: _0x3666a2.top + _0x1d175f,
    width: Math.max(1, _0x3666a2.width - _0x341dbb - _0x307da6),
    height: Math.max(1, _0x3666a2.height - _0x1d175f - _0x99ecfb),
  };
}
function rc(_0x577d24, _0x25a934) {
  return typeof _0x577d24 == "number" && Number.isFinite(_0x577d24)
    ? _0x577d24
    : _0x25a934;
}
function ic(_0x56e85e, _0x56d34b) {
  let _0x5ef36a = rc(_0x56e85e, _0x56d34b);
  return _0x5ef36a > 0 ? _0x5ef36a : Math.max(1, _0x56d34b);
}
function ac(_0x1ed445, _0x4995de) {
  let _0x332a40 = fc(_0x1ed445, _0x4995de);
  if (!_0x1ed445 || !_0x332a40) return "";
  let _0x389afa = [];
  for (
    let _0x586f78 = _0x332a40.startRow;
    _0x586f78 <= _0x332a40.endRow;
    _0x586f78 += 1
  ) {
    let _0x531bc8 = [];
    for (
      let _0x4c040f = _0x332a40.startColumn;
      _0x4c040f <= _0x332a40.endColumn;
      _0x4c040f += 1
    ) {
      var _0x3281cb;
      let _0x4d6d60 =
        (_0x3281cb = _0x1ed445.rows[_0x586f78]) == null
          ? undefined
          : _0x3281cb.cells[_0x4c040f];
      if (
        (_0x4d6d60 != null && _0x4d6d60.hMerge) ||
        (_0x4d6d60 != null && _0x4d6d60.vMerge)
      ) {
        _0x531bc8.push("");
        continue;
      }
      _0x531bc8.push(
        gc(dc(_0x4d6d60 == null ? undefined : _0x4d6d60.textData)),
      );
    }
    _0x389afa.push(_0x531bc8.join("\x09"));
  }
  return _0x389afa.join("\x0a");
}
function oc(_0x3962dc, _0x3f6f54) {
  let _0x1084cc = fc(_0x3962dc, _0x3f6f54);
  if (!_0x3962dc || !_0x1084cc) return "";
  let _0x45e96b = _0x3962dc.columns["slice"](
      _0x1084cc.startColumn,
      _0x1084cc.endColumn + 1,
    )
      .map((_0x2ff77f) => '<col style="width: ' + _0x2ff77f.width + 'px">')
      .join(""),
    _0x3aa791 = [];
  for (
    let _0x2a6596 = _0x1084cc.startRow;
    _0x2a6596 <= _0x1084cc.endRow;
    _0x2a6596 += 1
  ) {
    let _0x49aed9 = _0x3962dc.rows[_0x2a6596];
    if (!_0x49aed9) continue;
    let _0x1a7652 = [];
    for (
      let _0x13fecc = _0x1084cc.startColumn;
      _0x13fecc <= _0x1084cc.endColumn;
      _0x13fecc += 1
    ) {
      let _0x26fd4c = _0x49aed9.cells[_0x13fecc];
      if (!_0x26fd4c || _0x26fd4c.hMerge || _0x26fd4c.vMerge) continue;
      let _0x249322 = Math.min(
          _0x26fd4c.rowSpan ?? 1,
          _0x1084cc.endRow - _0x2a6596 + 1,
        ),
        _0x47bcf5 = Math.min(
          _0x26fd4c.columnSpan ?? 1,
          _0x1084cc.endColumn - _0x13fecc + 1,
        ),
        _0x24fcd7 = [
          _0x249322 > 1 ? 'rowspan="' + _0x249322 + "\x22" : "",
          _0x47bcf5 > 1 ? 'colspan="' + _0x47bcf5 + "\x22" : "",
          sc(_0x26fd4c),
        ]
          .filter(Boolean)
          .join("\x20"),
        _0x1fde11 = _0x26fd4c.textData
          ? _0xf5e5a8(_0x16106d.deepClone(_0x26fd4c.textData))
          : "";
      _0x1a7652.push(
        "<td" +
          (_0x24fcd7 ? "\x20" + _0x24fcd7 : "") +
          ">" +
          _0x1fde11 +
          "</td>",
      );
    }
    _0x3aa791.push(
      "<tr" +
        (_0x49aed9.height
          ? ' style="height: ' + _0x49aed9.height + 'px"'
          : "") +
        ">" +
        _0x1a7652.join("") +
        "</tr>",
    );
  }
  return (
    "<table><colgroup>" +
    _0x45e96b +
    "</colgroup><tbody>" +
    _0x3aa791.join("") +
    "</tbody></table>"
  );
}
function sc(_0x231392) {
  var _0x16f0e3, _0x571835;
  let _0x11930c = [];
  ((_0x16f0e3 = _0x231392.style) == null || (_0x16f0e3 = _0x16f0e3.fill) == null
    ? undefined
    : _0x16f0e3.type) === _0x44feb0.Solid &&
    _0x231392.style["fill"].color &&
    _0x11930c.push("background-color:\x20" + _0x231392.style["fill"].color);
  let _0x32e9e6 =
    (_0x571835 = _0x231392.style) == null ? undefined : _0x571835.borders;
  return (
    _0x32e9e6 &&
      ["top", "right", "bottom", "left"].forEach((_0x3e9f32) => {
        let _0x266a3b = _0x32e9e6[_0x3e9f32];
        _0x266a3b != null &&
          _0x266a3b.color &&
          _0x266a3b.width !== undefined &&
          _0x11930c.push(
            "border-" +
              _0x3e9f32 +
              ":\x20" +
              _0x266a3b.width +
              "px\x20solid\x20" +
              _0x266a3b.color,
          );
      }),
    _0x11930c.length > 0 ? 'style="' + yc(_0x11930c.join(";\x20")) + "\x22" : ""
  );
}
function cc(_0x1a4fde, _0x14b911, _0x26315a) {
  if (!_0x1a4fde || !_0x14b911 || _0x26315a.length === 0) return null;
  let _0x12c3cb = mc(_0x1a4fde, _0x14b911);
  if (!_0x12c3cb) return null;
  let _0x5b13a7 = hc(_0x26315a);
  if (_0x5b13a7.length === 0) return null;
  let _0x224643 = _0x16106d.deepClone(_0x1a4fde.rows),
    _0x5c8e12 = false;
  return (
    _0x5b13a7.forEach((_0x4650d3, _0x58985d) => {
      let _0x4f33b0 = _0x12c3cb.row + _0x58985d;
      _0x4f33b0 < 0 ||
        _0x4f33b0 >= _0x224643.length ||
        _0x4650d3.forEach((_0x1a447b, _0x37ca5b) => {
          let _0x11dcc8 = _0x12c3cb.column + _0x37ca5b;
          if (_0x11dcc8 < 0 || _0x11dcc8 >= _0x1a4fde.columns["length"]) return;
          let _0x27ea37 = _0x224643[_0x4f33b0],
            _0x46b27f =
              _0x27ea37 == null ? undefined : _0x27ea37.cells[_0x11dcc8];
          !_0x27ea37 ||
            !_0x46b27f ||
            _0x46b27f.hMerge ||
            _0x46b27f.vMerge ||
            ((_0x27ea37.cells[_0x11dcc8] = {
              ..._0x46b27f,
              textData: _0x46b27f.textData
                ? Ws(_0x46b27f.textData, _0x1a447b)
                : Us(_0x1a4fde.id, _0x4f33b0, _0x11dcc8, _0x1a447b),
            }),
            (_0x5c8e12 = true));
        });
    }),
    _0x5c8e12 ? { rows: _0x224643 } : null
  );
}
function lc(_0x3089ae, _0x184fdf, _0x690558) {
  if (!_0x3089ae || !_0x184fdf || !_0x690558) return null;
  let _0x46eeec = mc(_0x3089ae, _0x184fdf);
  if (!_0x46eeec) return null;
  let _0x34f66e = _0x151eb4(_0x690558),
    _0x3e3a24 =
      _0x34f66e.rows["length"] > 0
        ? _0x34f66e.rows["map"]((_0x429aaf) => _0x429aaf.cells)
        : [[{ html: _0x690558, text: "", rowSpan: 1, colSpan: 1 }]];
  if (
    !_0x3e3a24.some((_0x10269c) =>
      _0x10269c.some((_0x3cd56c) => _0x3cd56c !== null),
    )
  )
    return null;
  let _0x441914 = Math.max(
      1,
      ..._0x3e3a24.map((_0x103242) => _0x103242.length),
    ),
    _0x5e229e = {
      startRow: _0x46eeec.row,
      endRow: Math.min(
        _0x3089ae.rows["length"] - 1,
        _0x46eeec.row + _0x3e3a24.length - 1,
      ),
      startColumn: _0x46eeec.column,
      endColumn: Math.min(
        _0x3089ae.columns["length"] - 1,
        _0x46eeec.column + _0x441914 - 1,
      ),
    },
    _0x20f0a1 = _0x2d2ec6(_0x3089ae)
      .filter((_0x2ac324) => bc(_0x2ac324, _0x5e229e))
      .reduce(
        (_0x4ffc00, _0x5ac24f) =>
          _0xb7f424(_0x4ffc00, _0x5ac24f.startRow, _0x5ac24f.startColumn),
        _0x16106d.deepClone(_0x3089ae),
      ),
    _0x158090 = [],
    _0x3c5c98 = false;
  return (
    _0x3e3a24.forEach((_0x279db0, _0x445d9b) => {
      _0x279db0.forEach((_0x5511a9, _0x26bbe3) => {
        var _0x2b8663;
        let _0xbfae15 = _0x46eeec.row + _0x445d9b,
          _0x4660ae = _0x46eeec.column + _0x26bbe3,
          _0x396bc4 =
            (_0x2b8663 = _0x20f0a1.rows[_0xbfae15]) == null
              ? undefined
              : _0x2b8663.cells[_0x4660ae];
        if (!_0x5511a9 || !_0x396bc4) return;
        let _0x4c541b =
          _c(_0x4e5821(_0x5511a9.html)) ??
          Us(_0x3089ae.id, _0xbfae15, _0x4660ae, _0x5511a9.text);
        _0x20f0a1.rows[_0xbfae15].cells[_0x4660ae] = {
          ..._0x396bc4,
          textData: qs(
            _0x4c541b,
            _0x3089ae.id + "-" + _0xbfae15 + "-" + _0x4660ae,
          ),
          style: vc(_0x396bc4.style, _0x5511a9),
        };
        let _0x206382 = Math.min(
            _0x5511a9.rowSpan,
            _0x3089ae.rows["length"] - _0xbfae15,
          ),
          _0x3ad203 = Math.min(
            _0x5511a9.colSpan,
            _0x3089ae.columns["length"] - _0x4660ae,
          );
        ((_0x206382 > 1 || _0x3ad203 > 1) &&
          _0x158090.push({
            startRow: _0xbfae15,
            endRow: _0xbfae15 + _0x206382 - 1,
            startColumn: _0x4660ae,
            endColumn: _0x4660ae + _0x3ad203 - 1,
          }),
          (_0x3c5c98 = true));
      });
    }),
    _0x158090.forEach((_0x2c7c5b) => {
      _0x20f0a1 = _0x4981c2(_0x20f0a1, _0x2c7c5b);
    }),
    _0x3c5c98 ? { rows: _0x20f0a1.rows } : null
  );
}
function uc(_0x1267a6, _0x594c00) {
  let _0x1bd791 = pc(_0x1267a6, _0x594c00);
  if (!_0x1267a6 || _0x1bd791.length === 0) return null;
  let _0x30d218 = _0x16106d.deepClone(_0x1267a6.rows),
    _0x24f539 = false;
  return (
    _0x1bd791.forEach((_0x55842e) => {
      for (
        let _0x35b0e7 = _0x55842e.startRow;
        _0x35b0e7 <= _0x55842e.endRow;
        _0x35b0e7 += 1
      ) {
        let _0x57492b = _0x30d218[_0x35b0e7];
        if (_0x57492b)
          for (
            let _0x465405 = _0x55842e.startColumn;
            _0x465405 <= _0x55842e.endColumn;
            _0x465405 += 1
          ) {
            let _0x53efa0 = _0x57492b.cells[_0x465405];
            if (!(_0x53efa0 != null && _0x53efa0.textData)) continue;
            let _0x2b4db1 = { ..._0x53efa0 };
            (delete _0x2b4db1.textData,
              (_0x57492b.cells[_0x465405] = _0x2b4db1),
              (_0x24f539 = true));
          }
      }
    }),
    _0x24f539 ? { rows: _0x30d218 } : null
  );
}
function dc(_0x1c26d7) {
  var _0x5dea40;
  let _0x2b5ac3 =
    _0x1c26d7 == null || (_0x5dea40 = _0x1c26d7.body) == null
      ? undefined
      : _0x5dea40.dataStream;
  return _0x2b5ac3
    ? _0x2b5ac3
        .replace(/\r\n/g, "\x0a")
        .replace(/\r/g, "\x0a")
        .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "")
        .replace(/\n+$/g, "")
    : "";
}
function fc(_0x578d29, _0x31eef9) {
  return pc(_0x578d29, _0x31eef9)[0] ?? null;
}
function pc(_0x5051aa, _0x1eca16) {
  if (!_0x5051aa || !(_0x1eca16 != null && _0x1eca16.ranges["length"]))
    return [];
  let _0x387ab7 = _0x5051aa.rows["length"] - 1,
    _0x37c38a = _0x5051aa.columns["length"] - 1;
  return _0x387ab7 < 0 || _0x37c38a < 0
    ? []
    : _0x1eca16.ranges["map"]((_0xb288a4) => {
        let _0x5a52b1 = _0x3fbad0(_0xb288a4);
        return {
          startRow: Math.max(0, Math.min(_0x5a52b1.startRow, _0x387ab7)),
          endRow: Math.max(0, Math.min(_0x5a52b1.endRow, _0x387ab7)),
          startColumn: Math.max(0, Math.min(_0x5a52b1.startColumn, _0x37c38a)),
          endColumn: Math.max(0, Math.min(_0x5a52b1.endColumn, _0x37c38a)),
        };
      });
}
function mc(_0x3d80c4, _0x352093) {
  let _0x48a0c4 = fc(_0x3d80c4, _0x352093);
  if (!_0x48a0c4) return null;
  let _0x468705 = _0x352093.focus ?? _0x352093.anchor;
  return _0x468705
    ? {
        row: Math.max(
          _0x48a0c4.startRow,
          Math.min(_0x468705.row, _0x48a0c4.endRow),
        ),
        column: Math.max(
          _0x48a0c4.startColumn,
          Math.min(_0x468705.column, _0x48a0c4.endColumn),
        ),
      }
    : { row: _0x48a0c4.startRow, column: _0x48a0c4.startColumn };
}
function hc(_0x3b3aa5) {
  let _0xa2222e = _0x3b3aa5
    .replace(/\r\n/g, "\x0a")
    .replace(/\r/g, "\x0a")
    .replace(/\n$/g, "");
  return _0xa2222e
    ? _0xa2222e.split("\x0a").map((_0xc9f291) => _0xc9f291.split("\x09"))
    : [];
}
function gc(_0x4d4ee7) {
  return _0x4d4ee7.replace(/\t/g, "\x20").replace(/\n/g, "\x20");
}
function _c(_0x4d5184) {
  try {
    var _0x170159;
    let _0x5bae27 = _0x3d021c(_0x4d5184);
    return (_0x170159 = _0x5bae27.body) != null && _0x170159.dataStream
      ? {
          ..._0x5bae27,
          id: _0x5bae27.id || _0x1a424d(6),
          body: _0x5bae27.body,
          documentStyle: _0x5bae27.documentStyle ?? {},
        }
      : null;
  } catch {
    return null;
  }
}
function vc(_0x2c82e7, _0x30a721) {
  let _0x2e6afa =
    _0x30a721.borderColor || _0x30a721.borderWidth
      ? {
          color: _0x30a721.borderColor,
          width: _0x30a721.borderWidth,
          dash: _0x32edb5.Solid,
        }
      : undefined;
  return !_0x30a721.backgroundColor && !_0x2e6afa
    ? _0x2c82e7
    : {
        ..._0x2c82e7,
        fill: _0x30a721.backgroundColor
          ? { type: _0x44feb0.Solid, color: _0x30a721.backgroundColor }
          : _0x2c82e7 == null
            ? undefined
            : _0x2c82e7.fill,
        borders: _0x2e6afa
          ? {
              top: _0x2e6afa,
              right: _0x2e6afa,
              bottom: _0x2e6afa,
              left: _0x2e6afa,
            }
          : _0x2c82e7 == null
            ? undefined
            : _0x2c82e7.borders,
      };
}
function yc(_0x4c4b8f) {
  return _0x4c4b8f
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function bc(_0x23f0f2, _0x182a18) {
  return (
    _0x23f0f2.startRow <= _0x182a18.endRow &&
    _0x23f0f2.endRow >= _0x182a18.startRow &&
    _0x23f0f2.startColumn <= _0x182a18.endColumn &&
    _0x23f0f2.endColumn >= _0x182a18.startColumn
  );
}
function xc(_0x50d70c, _0x11d63f, _0x28ac0d) {
  if (
    _0x11d63f < 0 ||
    _0x28ac0d < 0 ||
    _0x11d63f > _0x50d70c.width ||
    _0x28ac0d > _0x50d70c.height
  )
    return null;
  let _0x247345 = _0x50d70c.cells["find"](
    (_0x5783e9) => !_0x5783e9.hidden && Sc(_0x5783e9, _0x11d63f, _0x28ac0d),
  );
  return _0x247345
    ? { kind: "cell", row: _0x247345.row, column: _0x247345.column }
    : null;
}
function Sc(_0x3ec282, _0x27f5af, _0xecea0d) {
  return (
    _0x27f5af >= _0x3ec282.bounds["left"] &&
    _0x27f5af <= _0x3ec282.bounds["left"] + _0x3ec282.bounds["width"] &&
    _0xecea0d >= _0x3ec282.bounds["top"] &&
    _0xecea0d <= _0x3ec282.bounds["top"] + _0x3ec282.bounds["height"]
  );
}
function Cc(_0x4af49e) {
  return (
    ((_0x4af49e == null ? undefined : _0x4af49e.kind) === "row-insert-dot" &&
      _0x4af49e.row !== undefined) ||
    ((_0x4af49e == null ? undefined : _0x4af49e.kind) === "column-insert-dot" &&
      _0x4af49e.column !== undefined)
  );
}
function wc(_0xa46192) {
  return _0xa46192.kind === "row-insert-dot"
    ? {
        visible: true,
        hoveredTrigger: _0xa46192,
        insertGuide: { kind: "row", index: _0xa46192.row + 1 },
      }
    : {
        visible: true,
        hoveredTrigger: _0xa46192,
        insertGuide: { kind: "column", index: _0xa46192.column + 1 },
      };
}
const Tc = "SLIDE_TABLE_EDITOR_UNIT_ID",
  Ec = -10000;
function Dc(_0x1e8a83) {
  if (
    typeof _0x1e8a83.insertIndex == "number" &&
    Number.isInteger(_0x1e8a83.insertIndex)
  )
    return _0x1e8a83.insertIndex;
  let _0x4a83f2 =
    _0x1e8a83.kind === "row-insert-dot" ? _0x1e8a83.row : _0x1e8a83.column;
  return typeof _0x4a83f2 == "number" && Number.isInteger(_0x4a83f2)
    ? _0x4a83f2 + 1
    : null;
}
function Oc(
  _0x89f3ba,
  _0x430159,
  _0x3c0869,
  _0x173204,
  _0x2ed957,
  _0x1fa835 = 6,
) {
  if (
    _0x173204 < 0 ||
    _0x2ed957 < 0 ||
    _0x173204 > _0x430159 ||
    _0x2ed957 > _0x3c0869
  )
    return null;
  let _0x382764 = Ic(
      _0x89f3ba.columns["map"]((_0x47b7fa) => _0x47b7fa.width),
      _0x430159,
    ),
    _0x258372 = Ic(
      _0x89f3ba.rows["map"]((_0x2bf864) => _0x2bf864.height ?? 24),
      _0x3c0869,
    ),
    _0x11e7f9 = zc(_0x382764, _0x173204, _0x1fa835),
    _0x21f6c4 = zc(_0x258372, _0x2ed957, _0x1fa835);
  return !_0x11e7f9 && !_0x21f6c4
    ? null
    : _0x11e7f9 && (!_0x21f6c4 || _0x11e7f9.distance <= _0x21f6c4.distance)
      ? { axis: "column", boundaryIndex: _0x11e7f9.boundaryIndex }
      : { axis: "row", boundaryIndex: _0x21f6c4.boundaryIndex };
}
function kc(_0x2dd553, _0x58d5a6, _0x2c5757, _0x370ed1) {
  let _0x20bd5c = _0x16106d.deepClone(_0x2dd553),
    _0x551e41 = Math.max(1, _0x370ed1.minSize ?? 12);
  if (_0x370ed1.axis === "column")
    _0x20bd5c.columns = Bc(
      Ic(
        _0x2dd553.columns["map"]((_0x321134) => _0x321134.width),
        _0x58d5a6,
      ),
      _0x370ed1.boundaryIndex,
      _0x370ed1.delta,
      _0x551e41,
    ).map((_0xca91ab) => ({ width: _0xca91ab }));
  else {
    let _0xb40236 = Bc(
      Ic(
        _0x2dd553.rows["map"]((_0x29d11b) => _0x29d11b.height ?? 24),
        _0x2c5757,
      ),
      _0x370ed1.boundaryIndex,
      _0x370ed1.delta,
      _0x551e41,
    );
    _0x20bd5c.rows = _0x20bd5c.rows["map"]((_0x398eb2, _0x3ee4d0) => ({
      ..._0x398eb2,
      height: _0xb40236[_0x3ee4d0] ?? _0x398eb2.height ?? 24,
    }));
  }
  return _0x20bd5c;
}
let Ac = class extends _0x184458 {
  constructor(
    _0x348377,
    _0x271cfa,
    _0x400858,
    _0x74a6e,
    _0xf428e1,
    _0x37ccde,
    _0x4c23c5,
    _0x3a57e6,
    _0x74ada3,
    _0x5f543a,
    _0x3b09b3,
    _0x47f8ef,
    _0x4edbbd,
    _0xfbd5a8,
    _0x5a3ee4,
    _0x4a73ab,
  ) {
    (super(),
      (this._renderContext = _0x348377),
      (this._hitTestService = _0x271cfa),
      (this._tableResourceService = _0x400858),
      (this._tableSelectionService = _0x74a6e),
      (this._editorUIService = _0xf428e1),
      (this._drawingStateService = _0x37ccde),
      (this._contextMenuService = _0x4c23c5),
      (this._commandService = _0x3a57e6),
      (this._keyboardService = _0x74ada3),
      (this._contextService = _0x5f543a),
      (this._univerInstanceService = _0x3b09b3),
      (this._slideDrawingService = _0x47f8ef),
      (this._transformerVisibilityService = _0x4edbbd),
      (this._permissionService = _0xfbd5a8),
      (this._alignmentGuideService = _0x5a3ee4),
      (this._slideInsertService = _0x4a73ab),
      W(this, "_editorDisposable", null),
      W(this, "_resizeDragContext", null),
      W(this, "_rangeDragContext", null),
      W(this, "_rangeDragWindowCleanup", null),
      W(this, "_tableMoveDragContext", null),
      W(this, "_editorSessionId", 0),
      W(this, "_activeEditorContextKey", null),
      W(this, "_lastActiveTableContext", null),
      W(this, "_tableActivationStage", null),
      W(this, "_pendingStage1TableDragContext", null),
      W(this, "_hoveredTrigger", null),
      W(this, "_headerSelectionDragState", null),
      W(this, "_pendingHeaderSelection", null),
      W(this, "_rowColumnMoveState", null),
      W(this, "_rowColumnMoveTarget", null),
      W(this, "_headerSelectionDragCleanup", null),
      W(this, "_resizeHoverActive", false),
      W(this, "_ownsStructuralCursor", false),
      W(this, "_resizeWireScheduled", false),
      W(this, "_editorLayoutSyncScheduled", false),
      W(this, "_structuralInsertHoverObject", null),
      W(this, "_wiredResizeObjectRefs", new Map()),
      W(this, "_handleClipboardCopy", (_0x37ecb0) => {
        let _0x2d2a0f = this._resolveTableClipboardTarget(_0x37ecb0);
        !_0x2d2a0f ||
          !_0x37ecb0.clipboardData ||
          !this._canCopyTable(_0x2d2a0f.selection) ||
          (_0x37ecb0.clipboardData["setData"](
            "text/plain",
            ac(_0x2d2a0f.table, _0x2d2a0f.selection),
          ),
          _0x37ecb0.clipboardData["setData"](
            "text/html",
            oc(_0x2d2a0f.table, _0x2d2a0f.selection),
          ),
          _0x37ecb0.preventDefault(),
          _0x37ecb0.stopPropagation());
      }),
      W(this, "_handleClipboardCut", async (_0xf7fcb0) => {
        let _0x2bfb7a = this._resolveTableClipboardTarget(_0xf7fcb0);
        if (
          !_0x2bfb7a ||
          !_0xf7fcb0.clipboardData ||
          !this._canCopyTable(_0x2bfb7a.selection)
        )
          return;
        let _0x429b60 = uc(_0x2bfb7a.table, _0x2bfb7a.selection);
        _0x429b60 &&
          (_0xf7fcb0.clipboardData["setData"](
            "text/plain",
            ac(_0x2bfb7a.table, _0x2bfb7a.selection),
          ),
          _0xf7fcb0.clipboardData["setData"](
            "text/html",
            oc(_0x2bfb7a.table, _0x2bfb7a.selection),
          ),
          _0xf7fcb0.preventDefault(),
          _0xf7fcb0.stopPropagation(),
          await this._commitClipboardPatch(_0x2bfb7a, _0x429b60));
      }),
      W(this, "_handleClipboardPaste", async (_0x3b13c0) => {
        let _0x54ea54 = this._resolveTableClipboardTarget(_0x3b13c0);
        if (!_0x54ea54 || !_0x3b13c0.clipboardData) return;
        let _0x351cad = _0x3b13c0.clipboardData["getData"]("text/html"),
          _0x4b16ca = _0x3b13c0.clipboardData["getData"]("text/plain"),
          _0x1a17a2 = _0x13ea6f(_0x4b16ca) ? await _0x3ea920(_0x4b16ca) : null,
          _0x224f7f = _0x1a17a2
            ? null
            : ((_0x351cad
                ? lc(_0x54ea54.table, _0x54ea54.selection, _0x351cad)
                : null) ?? cc(_0x54ea54.table, _0x54ea54.selection, _0x4b16ca)),
          _0x290d5b = _0x1a17a2
            ? [_0x1a17a2]
            : await al(_0x3b13c0.clipboardData, _0x351cad);
        (!_0x224f7f && _0x290d5b.length === 0) ||
          (_0x3b13c0.preventDefault(),
          _0x3b13c0.stopPropagation(),
          !(
            _0x224f7f &&
            !(await this._commitClipboardPatch(_0x54ea54, _0x224f7f))
          ) && (await this._insertClipboardImages(_0x290d5b, +!!_0x224f7f)));
      }),
      this._init());
  }
  dispose() {
    ((this._editorLayoutSyncScheduled = false),
      this._resetTableInteraction(),
      super.dispose());
  }
  _init() {
    var _0x47fbbe, _0x40250f;
    (document.addEventListener("copy", this._handleClipboardCopy, true),
      document.addEventListener("cut", this._handleClipboardCut, true),
      document.addEventListener("paste", this._handleClipboardPaste, true),
      this.disposeWithMe(
        _0xdc718a(() => {
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
      this.disposeWithMe(
        this._keyboardService["setHandler"]((_0x588934) =>
          this._handleKeyboardAction(_0x588934),
        ),
      ),
      this.disposeWithMe(
        this._keyboardService["setInputHandler"]((_0x35a289) =>
          this._handleKeyboardInput(_0x35a289),
        ),
      ));
    let _0x1042b2 =
      (_0x47fbbe = (_0x40250f = this._transformerVisibilityService)
        .registerGuard) == null
        ? undefined
        : _0x47fbbe.call(_0x40250f, (_0x1e65df) =>
            this._shouldShowTransformerForDrawing(_0x1e65df),
          );
    (_0x1042b2 && this.disposeWithMe(_0x1042b2),
      this.disposeWithMe(
        this._keyboardService["setHandler"]((_0x436643) =>
          this._handleKeyboardAction(_0x436643),
        ),
      ),
      this.disposeWithMe(
        this._renderContext["scene"].onDblclick$["subscribeEvent"](
          (_0x3c30f5) => {
            this._handleSceneDoubleClick(_0x3c30f5);
          },
        ),
      ),
      this.disposeWithMe(
        this._renderContext["engine"].onTransformChange$["subscribeEvent"](
          () => {
            this._scheduleActiveEditorLayoutSync();
          },
        ),
      ));
    let _0x158ba3 = this._drawingStateService["state$"];
    if (_0x158ba3) {
      let _0x1b6a21 = _0x158ba3.subscribe((_0x2b91e7) => {
        var _0x1f615f;
        this._syncActiveTableFromDrawingState(_0x2b91e7);
        let _0x4e94b2 = this._tableSelectionService["getSelection"]();
        if (!_0x4e94b2) {
          var _0x431c3, _0x4bdf4a;
          let _0x184df8 =
            ((_0x431c3 = (_0x4bdf4a = this._tableSelectionService)
              .isTableInternalInteractionActive) == null
              ? undefined
              : _0x431c3.call(_0x4bdf4a)) ?? false;
          this._lastActiveTableContext &&
            this._tableActivationStage &&
            !this._isLastActiveTableSelected(_0x2b91e7) &&
            !_0x184df8 &&
            this._resetTableInteraction();
          return;
        }
        if (!(
          ((_0x1f615f = _0x2b91e7.context) == null
            ? undefined
            : _0x1f615f.unitId) === _0x4e94b2.unitId &&
          _0x2b91e7.context["subUnitId"] === _0x4e94b2.subUnitId &&
          _0x2b91e7.selectedIds["includes"](_0x4e94b2.elementId)
        )) {
          if (
            !this._isExternalDrawingSelection(_0x2b91e7, _0x4e94b2) &&
            this._isTableInteractionInProgress(_0x4e94b2)
          )
            return;
          this._resetTableInteraction();
        }
      });
      this.disposeWithMe({ dispose: () => _0x1b6a21.unsubscribe() });
    }
    (this._initResizeInteraction(), this._initPointerDownContextMenu());
  }
  _scheduleActiveEditorLayoutSync() {
    this._editorLayoutSyncScheduled ||
      ((this._editorLayoutSyncScheduled = true),
      Promise.resolve().then(() => {
        this._editorLayoutSyncScheduled &&
          ((this._editorLayoutSyncScheduled = false),
          this._syncActiveEditorLayout());
      }));
  }
  _syncActiveEditorLayout() {
    let _0xefb970 = this._editorUIService["getSession"](),
      _0x2e5fca = _0xefb970 == null ? undefined : _0xefb970.context;
    if (!_0xefb970 || !_0x2e5fca || !this._isCurrentEditorSession(_0x2e5fca))
      return;
    let _0x225c3e = this._resolveTableObjectFromContext(_0x2e5fca);
    if (!_0x225c3e) return;
    let { object: _0x69d5d1, table: _0x4c59e4 } = _0x225c3e,
      _0x1d721b = _0x509c52(_0x4c59e4),
      _0xfa270d = _0x1d721b.cells["find"](
        (_0x1afe20) =>
          _0x1afe20.row === _0x2e5fca.row &&
          _0x1afe20.column === _0x2e5fca.column &&
          !_0x1afe20.hidden,
      );
    if (!_0xfa270d) return;
    let _0x4cdf50 = this._resolveEditorLayout(
      _0x69d5d1,
      _0x1d721b,
      _0xfa270d,
      _0xefb970.documentData,
    );
    _0x4cdf50 && this._editorUIService["update"]({ layout: _0x4cdf50 });
  }
  _syncActiveTableFromDrawingState(_0x15a38f) {
    if (!_0x15a38f.context || _0x15a38f.selectedIds["length"] !== 1) return;
    let [_0x31a540] = _0x15a38f.selectedIds,
      _0x84edfa = this._renderContext["scene"].getObject(
        _0x4b5215(
          _0x15a38f.context["unitId"],
          _0x15a38f.context["subUnitId"],
          _0x31a540,
        ),
      );
    if (!_0x84edfa) return;
    let _0xfb9606 = this._resolveSelectedTableDrawing(
      _0x15a38f.context["unitId"],
      _0x15a38f.context["subUnitId"],
      _0x31a540,
    );
    if (!_0xfb9606 || _0xfb9606.element["type"] !== _0x17964d.Table) return;
    let _0x342571 = this._tableSelectionService["getSelection"]();
    if (
      (_0x342571 == null ? undefined : _0x342571.unitId) === _0xfb9606.unitId &&
      _0x342571.subUnitId === _0xfb9606.subUnitId &&
      _0x342571.elementId === _0xfb9606.drawingId
    ) {
      (this._syncTableSelectionToObject(_0xfb9606, _0x84edfa, _0x342571),
        this._syncActivationStageFromSelection(_0x342571));
      return;
    }
    ((_0x342571 == null ? undefined : _0x342571.kind) === "table" &&
      this._tableSelectionService["clear"](),
      (this._lastActiveTableContext = {
        unitId: _0xfb9606.unitId,
        subUnitId: _0xfb9606.subUnitId,
        elementId: _0xfb9606.drawingId,
      }),
      this._activateTableObject(_0x84edfa));
  }
  _isLastActiveTableSelected(_0x56d6b1) {
    var _0x3922aa;
    let _0x31b698 = this._lastActiveTableContext;
    return (
      !!_0x31b698 &&
      ((_0x3922aa = _0x56d6b1.context) == null
        ? undefined
        : _0x3922aa.unitId) === _0x31b698.unitId &&
      _0x56d6b1.context["subUnitId"] === _0x31b698.subUnitId &&
      _0x56d6b1.selectedIds["includes"](_0x31b698.elementId)
    );
  }
  _isExternalDrawingSelection(_0x5d50e8, _0x5565b2) {
    if (_0x5d50e8.selectedIds["length"] === 0) return true;
    if (!_0x5d50e8.context) return false;
    let _0x2fd42f = this._renderContext["scene"].getObject(
      _0x4b5215(_0x5565b2.unitId, _0x5565b2.subUnitId, _0x5565b2.elementId),
    );
    return _0x5d50e8.selectedIds["some"]((_0x4f3ff4) => {
      if (_0x4f3ff4 === _0x5565b2.elementId) return false;
      let _0x169ca9 = this._renderContext["scene"].getObject(
        _0x4b5215(
          _0x5d50e8.context["unitId"],
          _0x5d50e8.context["subUnitId"],
          _0x4f3ff4,
        ),
      );
      return !!_0x169ca9 && _0x169ca9 !== _0x2fd42f;
    });
  }
  _resolveSelectedTableDrawing(_0x136284, _0x5c0c9d, _0x175654) {
    var _0x4bb01d, _0x4466e2;
    let _0xc25c3b =
      (_0x4bb01d = this._hitTestService) == null
        ? undefined
        : _0x4bb01d.getOrderedTopLevelDrawings;
    return (
      (_0xc25c3b == null ||
      (_0x4466e2 = _0xc25c3b.call(this._hitTestService)) == null
        ? undefined
        : _0x4466e2.find(
            (_0x22f91e) =>
              _0x22f91e.unitId === _0x136284 &&
              _0x22f91e.subUnitId === _0x5c0c9d &&
              _0x22f91e.drawingId === _0x175654,
          )) ?? null
    );
  }
  _resolveInsertDotAtScenePoint(_0x21158d) {
    var _0x12a215;
    let _0x440661 =
        (_0x12a215 = this._hitTestService) == null
          ? undefined
          : _0x12a215.getOrderedTopLevelDrawings,
      _0x439a70 =
        (_0x440661 == null
          ? undefined
          : _0x440661.call(this._hitTestService)) ?? [],
      _0x44ec0f = new _0x25842b(_0x21158d.x, _0x21158d.y);
    for (let _0x3016d2 = _0x439a70.length - 1; _0x3016d2 >= 0; _0x3016d2--) {
      let _0x5ae38e = _0x439a70[_0x3016d2];
      if (
        !_0x5ae38e ||
        _0x5ae38e.unitId !== this._renderContext["unitId"] ||
        _0x5ae38e.element["type"] !== _0x17964d.Table ||
        _0x5ae38e.groupId ||
        !this._tableResourceService["getTable"](
          _0x5ae38e.unitId,
          _0x5ae38e.element["tableId"],
        )
      )
        continue;
      let _0x297566 = this._renderContext["scene"].getObject(
        _0x4b5215(_0x5ae38e.unitId, _0x5ae38e.subUnitId, _0x5ae38e.drawingId),
      );
      if (!_0x297566 || _0x297566.isInGroup) continue;
      let _0x44b71a = this._resolveInsertDotTriggerForObject(
        _0x297566,
        _0x44ec0f,
      );
      if (_0x44b71a)
        return { drawing: _0x5ae38e, object: _0x297566, trigger: _0x44b71a };
    }
    return null;
  }
  _resolveInsertDotTriggerForObject(_0x4fd772, _0x151e22) {
    var _0x265b93;
    let _0x5aace2 =
      (_0x265b93 = _0x4fd772.hitTestStructuralTriggerAtScenePoint) == null
        ? undefined
        : _0x265b93.call(_0x4fd772, _0x151e22);
    return Cc(_0x5aace2) ? _0x5aace2 : null;
  }
  _initPointerDownContextMenu() {
    let _0x459ef5 = this._renderContext["scene"];
    _0x459ef5.onPointerDown$ &&
      this.disposeWithMe(
        _0x459ef5.onPointerDown$["subscribeEvent"]({
          priority: Ec,
          next: ([_0x215372, _0x3bd5cd]) => {
            this._handleActiveTableControlPointerDown(_0x215372, _0x3bd5cd);
          },
        }),
      );
    let _0x282872 = this._hitTestService["onPointerDown$"];
    if (!_0x282872) return;
    let _0x42c605 = _0x282872.subscribe((_0x41a707) =>
      this._handleHitTestPointerDown(_0x41a707),
    );
    this.disposeWithMe({ dispose: () => _0x42c605.unsubscribe() });
  }
  _handleActiveTableControlPointerDown(_0x4235ae, _0x2ebc46) {
    let _0x4299c2 = _0x4235ae.button ?? 0;
    if (_0x4299c2 !== 0 && _0x4299c2 !== 2) return false;
    let _0x44072e = this._resolvePointerViewportPoint(_0x4235ae),
      _0x22525b = this._resolveScenePoint(_0x44072e.x, _0x44072e.y);
    if (_0x4299c2 === 0 && !this._isTableTextEditing()) {
      let _0x1673c4 = this._resolveInsertDotAtScenePoint(_0x22525b);
      if (_0x1673c4) {
        var _0x461dfb, _0x1e6a61;
        return (
          _0x2ebc46.stopPropagation(),
          (_0x2ebc46.skipNextObservers = true),
          (_0x461dfb = _0x4235ae.stopPropagation) == null ||
            _0x461dfb.call(_0x4235ae),
          (_0x1e6a61 = _0x4235ae.preventDefault) == null ||
            _0x1e6a61.call(_0x4235ae),
          this._hideContextMenu(),
          this._editorUIService["complete"](),
          (this._lastActiveTableContext = {
            unitId: _0x1673c4.drawing["unitId"],
            subUnitId: _0x1673c4.drawing["subUnitId"],
            elementId: _0x1673c4.drawing["drawingId"],
          }),
          this._handleStructuralInsertTrigger(
            _0x1673c4.drawing,
            _0x1673c4.object,
            _0x1673c4.trigger,
            _0x22525b,
          ),
          true
        );
      }
    }
    let _0x1ee4cf = this._resolveActiveTableObject();
    if (!_0x1ee4cf || _0x1ee4cf.drawing["element"].type !== _0x17964d.Table)
      return false;
    let { drawing: _0x36086f, object: _0xf6edc7 } = _0x1ee4cf,
      _0x40c490 = _0x4b5215(
        _0x36086f.unitId,
        _0x36086f.subUnitId,
        _0x36086f.drawingId,
      ),
      _0x52e21f = this._resolveTableControlHit(
        _0x36086f,
        _0xf6edc7,
        _0x22525b.x,
        _0x22525b.y,
      ),
      _0x31a6ed = _0x52e21f
        ? null
        : this._resolveCellHit(_0x36086f, _0x40c490, _0x22525b.x, _0x22525b.y);
    if (!_0x52e21f && !_0x31a6ed) return false;
    if (!this._isTableDrawingActive(_0x36086f)) {
      var _0x2380b0, _0x3b8854;
      return (
        this._drawingStateService["selectDrawings"](
          { unitId: _0x36086f.unitId, subUnitId: _0x36086f.subUnitId },
          [_0x36086f.drawingId],
          _0x36086f.drawingId,
        ),
        _0x2ebc46.stopPropagation(),
        (_0x2ebc46.skipNextObservers = true),
        (_0x2380b0 = _0x4235ae.stopPropagation) == null ||
          _0x2380b0.call(_0x4235ae),
        (_0x3b8854 = _0x4235ae.preventDefault) == null ||
          _0x3b8854.call(_0x4235ae),
        this._hideContextMenu(),
        this._editorUIService["complete"](),
        (this._lastActiveTableContext = {
          unitId: _0x36086f.unitId,
          subUnitId: _0x36086f.subUnitId,
          elementId: _0x36086f.drawingId,
        }),
        this._activateTableObject(_0xf6edc7),
        true
      );
    }
    return (
      this._handleTablePointerDown(
        _0x36086f,
        _0x40c490,
        _0xf6edc7,
        this._createViewportPointerEvent(_0x4235ae, _0x44072e),
        _0x2ebc46,
        _0x52e21f,
      ),
      true
    );
  }
  _handleHitTestPointerDown(_0x2d7499) {
    let _0x3a0a62 = _0x2d7499.nativeEvent["button"] ?? 0;
    if (_0x3a0a62 !== 0 && _0x3a0a62 !== 2) return;
    let _0x28083c = _0x2d7499.nativeEvent;
    (_0x28083c.offsetX === undefined && (_0x28083c.offsetX = _0x2d7499.offsetX),
      _0x28083c.offsetY === undefined &&
        (_0x28083c.offsetY = _0x2d7499.offsetY));
    let _0x20e097 = this._renderContext["scene"].getObject(_0x2d7499.oKey);
    _0x20e097 &&
      (_0x3a0a62 !== 2 ||
        _0x2d7499.drawing["element"].type !== _0x17964d.Table ||
        this._isTableTextEditing() ||
        this._handleCellContextMenuPointerDown(
          _0x2d7499.drawing,
          _0x2d7499.oKey,
          _0x20e097,
          _0x28083c,
          {
            stopPropagation: () => {
              var _0xbdd278;
              return (_0xbdd278 = _0x28083c.stopPropagation) == null
                ? undefined
                : _0xbdd278.call(_0x28083c);
            },
            skipNextObservers: false,
          },
        ));
  }
  _initResizeInteraction() {
    let _0x415ad1 = this._renderContext["scene"];
    if (
      (_0x415ad1.onPointerMove$ &&
        this.disposeWithMe(
          _0x415ad1.onPointerMove$["subscribeEvent"]({
            priority: Ec,
            next: ([_0xda0a3b]) => {
              (this._handleResizeHover(_0xda0a3b),
                this._updateTableControlHover(_0xda0a3b));
            },
          }),
        ),
      _0x415ad1.addObject$)
    ) {
      let _0x5ab303 = _0x415ad1.addObject$["subscribe"](() =>
        this._scheduleWireResizeObjects(),
      );
      this.disposeWithMe({ dispose: () => _0x5ab303.unsubscribe() });
    }
    this._scheduleWireResizeObjects();
  }
  _scheduleWireResizeObjects() {
    this._resizeWireScheduled ||
      ((this._resizeWireScheduled = true),
      Promise.resolve().then(() => {
        ((this._resizeWireScheduled = false), this._wireResizeObjects());
      }));
  }
  _wireResizeObjects() {
    let _0x5025eb = this._hitTestService["getOrderedTopLevelDrawings"];
    (
      (_0x5025eb == null ? undefined : _0x5025eb.call(this._hitTestService)) ??
      []
    ).forEach((_0x2db373) => {
      if (_0x2db373.element["type"] !== _0x17964d.Table) return;
      let _0x561d70 = _0x4b5215(
          _0x2db373.unitId,
          _0x2db373.subUnitId,
          _0x2db373.drawingId,
        ),
        _0x1ad2cc = this._renderContext["scene"].getObject(_0x561d70);
      if (
        !_0x1ad2cc ||
        _0x1ad2cc.isInGroup ||
        (this._syncTableSelectionToObject(_0x2db373, _0x1ad2cc),
        this._wiredResizeObjectRefs["get"](_0x561d70) === _0x1ad2cc)
      )
        return;
      let _0x1b51f2 = _0x1ad2cc.onPointerDown$["subscribeEvent"]({
        priority: Ec,
        next: ([_0x54237e, _0x391f2e]) => {
          this._handleTablePointerDown(
            _0x2db373,
            _0x561d70,
            _0x1ad2cc,
            _0x54237e,
            _0x391f2e,
          );
        },
      });
      (this.disposeWithMe(_0x1b51f2),
        this._wiredResizeObjectRefs["set"](_0x561d70, _0x1ad2cc));
    });
  }
  _handleSceneDoubleClick(_0x2a506d) {
    let _0x1f06ba = this._hitTestService["hitTest"](
      _0x2a506d.offsetX,
      _0x2a506d.offsetY,
    );
    if (!_0x1f06ba) return;
    let _0x51df50 = this._resolveScenePoint(
      _0x2a506d.offsetX,
      _0x2a506d.offsetY,
    );
    this._handleDoubleClick({
      drawing: _0x1f06ba.drawing,
      oKey: _0x1f06ba.oKey,
      offsetX: _0x51df50.x,
      offsetY: _0x51df50.y,
      nativeEvent: _0x2a506d,
    });
  }
  _resolveScenePoint(_0x1676f2, _0x574c55) {
    var _0x3b5de4, _0xf4a77c, _0x5badcd;
    let _0x26e6b8 = new _0x25842b(_0x1676f2, _0x574c55),
      _0x509bf3 = this._renderContext["scene"],
      _0xcd7ac6 =
        ((_0x3b5de4 = _0x509bf3.getActiveViewportByCoord) == null
          ? undefined
          : _0x3b5de4.call(_0x509bf3, _0x26e6b8)) ??
        ((_0xf4a77c = _0x509bf3.getViewports) == null
          ? undefined
          : _0xf4a77c.call(_0x509bf3)[0]),
      _0x4f1c7b =
        (_0xcd7ac6 == null ||
        (_0x5badcd = _0xcd7ac6.transformVector2SceneCoord) == null
          ? undefined
          : _0x5badcd.call(_0xcd7ac6, _0x26e6b8)) ?? _0x26e6b8;
    return { x: _0x4f1c7b.x, y: _0x4f1c7b.y };
  }
  _handleResizeHover(_0x11c6f9) {
    if (this._resizeDragContext) return;
    if (this._isTableTextEditing()) {
      this._resetResizeCursor();
      return;
    }
    let _0x4bf6fb = this._hitTestService["hitTest"](
      _0x11c6f9.offsetX,
      _0x11c6f9.offsetY,
    );
    if (!_0x4bf6fb || _0x4bf6fb.drawing["element"].type !== _0x17964d.Table) {
      this._resetResizeCursor();
      return;
    }
    if (!this._isTableDrawingActive(_0x4bf6fb.drawing)) {
      this._resetResizeCursor();
      return;
    }
    let _0x190ca6 = this._renderContext["scene"].getObject(_0x4bf6fb.oKey);
    if (!_0x190ca6) {
      this._resetResizeCursor();
      return;
    }
    let _0x1a131c = this._resolveScenePoint(
        _0x11c6f9.offsetX,
        _0x11c6f9.offsetY,
      ),
      _0xc0d765 = this._resolveResizeHit(
        _0x4bf6fb.drawing,
        _0x190ca6,
        _0x1a131c.x,
        _0x1a131c.y,
      );
    if (!_0xc0d765) {
      this._resetResizeCursor();
      return;
    }
    this._setResizeCursor(_0xc0d765.handle["axis"]);
  }
  _handleTablePointerDown(
    _0x753528,
    _0x584f23,
    _0x44c6c5,
    _0x1ca226,
    _0x526735,
    _0x4aa2d2,
  ) {
    var _0xab0d48, _0x295b17;
    let _0x26267b = _0x1ca226.button ?? 0;
    if (
      this._handleTableControlPointerDown(
        _0x753528,
        _0x584f23,
        _0x44c6c5,
        _0x1ca226,
        _0x526735,
        _0x4aa2d2,
      ) ||
      this._handleTextEditingCellPointerDown(
        _0x753528,
        _0x584f23,
        _0x44c6c5,
        _0x1ca226,
        _0x526735,
      ) ||
      (_0x26267b === 2 &&
        this._handleCellContextMenuPointerDown(
          _0x753528,
          _0x584f23,
          _0x44c6c5,
          _0x1ca226,
          _0x526735,
        )) ||
      this._handleResizePointerDown(
        _0x753528,
        _0x584f23,
        _0x44c6c5,
        _0x1ca226,
        _0x526735,
      ) ||
      _0x26267b !== 0 ||
      this._isTableTextEditing() ||
      !this._isTableDrawingActive(_0x753528)
    )
      return;
    let _0x4eaf3f = this._resolveScenePoint(
        _0x1ca226.offsetX,
        _0x1ca226.offsetY,
      ),
      _0x421d20 = this._resolveCellHit(
        _0x753528,
        _0x584f23,
        _0x4eaf3f.x,
        _0x4eaf3f.y,
      );
    if (_0x421d20) {
      if (this._tableActivationStage === "table") {
        this._startStage1TableBodyPointer(
          _0x753528,
          _0x44c6c5,
          _0x1ca226,
          _0x526735,
          _0x421d20,
        );
        return;
      }
      (_0x526735.stopPropagation(),
        (_0x526735.skipNextObservers = true),
        (_0xab0d48 = _0x1ca226.stopPropagation) == null ||
          _0xab0d48.call(_0x1ca226),
        (_0x295b17 = _0x1ca226.preventDefault) == null ||
          _0x295b17.call(_0x1ca226),
        this._hideContextMenu(),
        this._editorUIService["complete"](),
        this._selectResolvedCell(_0x753528, _0x44c6c5, _0x421d20),
        (this._rangeDragContext = {
          drawing: _0x753528,
          objectKey: _0x584f23,
          object: _0x44c6c5,
          table: _0x421d20.table,
          anchor: { row: _0x421d20.row, column: _0x421d20.column },
          current: { row: _0x421d20.row, column: _0x421d20.column },
        }),
        this._bindRangeDragWindowEvents());
    }
  }
  _handleTextEditingCellPointerDown(
    _0x405b1c,
    _0x44b1bc,
    _0x2ec6f2,
    _0x2fa583,
    _0x99c47c,
  ) {
    var _0x160f52, _0x2f3698;
    if (
      (_0x2fa583.button ?? 0) !== 0 ||
      !this._isTableTextEditing() ||
      !this._isTableDrawingActive(_0x405b1c) ||
      _0x405b1c.element["type"] !== _0x17964d.Table
    )
      return false;
    let _0x2083b2 = this._resolveScenePoint(
        _0x2fa583.offsetX,
        _0x2fa583.offsetY,
      ),
      _0x4038c5 = this._resolveCellHit(
        _0x405b1c,
        _0x44b1bc,
        _0x2083b2.x,
        _0x2083b2.y,
      );
    if (!_0x4038c5) return false;
    (_0x99c47c.stopPropagation(),
      (_0x99c47c.skipNextObservers = true),
      this._hideContextMenu());
    let _0x3d09cd = this._tableSelectionService["getSelection"]();
    return (_0x3d09cd == null ? undefined : _0x3d09cd.kind) === "text" &&
      ((_0x160f52 = _0x3d09cd.focus) == null ? undefined : _0x160f52.row) ===
        _0x4038c5.row &&
      _0x3d09cd.focus["column"] === _0x4038c5.column
      ? true
      : ((_0x2f3698 = _0x2ec6f2.setEditingCell) == null ||
          _0x2f3698.call(_0x2ec6f2, null),
        this._openCellEditor(_0x405b1c, _0x4038c5, { handoffCurrent: true }),
        true);
  }
  _handleTableControlPointerDown(
    _0x298779,
    _0x24778d,
    _0x457502,
    _0x1b5367,
    _0x1350d3,
    _0x2c0eef,
  ) {
    var _0x3906ff, _0x2642b4;
    if (
      (_0x1b5367.button ?? 0) !== 0 ||
      this._isTableTextEditing() ||
      _0x298779.element["type"] !== _0x17964d.Table
    )
      return false;
    let _0x119132 = this._resolvePointerScenePoint(_0x1b5367),
      _0x141a45 =
        _0x2c0eef ??
        this._resolveTableControlHit(
          _0x298779,
          _0x457502,
          _0x119132.x,
          _0x119132.y,
        );
    if (!_0x141a45) return false;
    if (Cc(_0x141a45)) {
      var _0x21ea4d, _0x40d281;
      return (
        _0x1350d3.stopPropagation(),
        (_0x1350d3.skipNextObservers = true),
        (_0x21ea4d = _0x1b5367.stopPropagation) == null ||
          _0x21ea4d.call(_0x1b5367),
        (_0x40d281 = _0x1b5367.preventDefault) == null ||
          _0x40d281.call(_0x1b5367),
        this._hideContextMenu(),
        this._editorUIService["complete"](),
        (this._lastActiveTableContext = {
          unitId: _0x298779.unitId,
          subUnitId: _0x298779.subUnitId,
          elementId: _0x298779.drawingId,
        }),
        this._handleStructuralInsertTrigger(
          _0x298779,
          _0x457502,
          _0x141a45,
          _0x119132,
        )
      );
    }
    return this._isTableDrawingActive(_0x298779)
      ? (_0x1350d3.stopPropagation(),
        (_0x1350d3.skipNextObservers = true),
        (_0x3906ff = _0x1b5367.stopPropagation) == null ||
          _0x3906ff.call(_0x1b5367),
        (_0x2642b4 = _0x1b5367.preventDefault) == null ||
          _0x2642b4.call(_0x1b5367),
        this._hideContextMenu(),
        this._editorUIService["complete"](),
        _0x141a45.kind === "row-header" || _0x141a45.kind === "column-header"
          ? (this._handleStructuralHeaderPointerDown(
              _0x298779,
              _0x457502,
              _0x141a45,
              _0x119132,
            ),
            true)
          : _0x141a45.kind === "table-handle"
            ? (this._startTableMoveDrag(_0x298779, _0x457502, _0x1b5367), true)
            : false)
      : false;
  }
  _handleCellContextMenuPointerDown(
    _0x4f0f58,
    _0x3e4635,
    _0x4e2abb,
    _0x49b8a9,
    _0x442bf1,
  ) {
    if (
      !this._isTableDrawingActive(_0x4f0f58) ||
      _0x4f0f58.element["type"] !== _0x17964d.Table
    )
      return false;
    let _0x1884c5 = this._resolvePointerScenePoint(_0x49b8a9),
      _0x495db9 = this._resolveCellHit(
        _0x4f0f58,
        _0x3e4635,
        _0x1884c5.x,
        _0x1884c5.y,
      );
    return _0x495db9
      ? (_0x442bf1.stopPropagation(),
        (_0x442bf1.skipNextObservers = true),
        this._hideContextMenu(),
        this._editorUIService["complete"](),
        this._selectResolvedCell(_0x4f0f58, _0x4e2abb, _0x495db9),
        this._openContextMenu(_0x49b8a9, "slide-table.contextMenu.cell"),
        true)
      : false;
  }
  _handleResizePointerDown(
    _0x21148f,
    _0x481695,
    _0x8543ce,
    _0x451b73,
    _0x25cd5b,
  ) {
    var _0x4fa38c, _0x2f9d4b;
    if (
      (_0x451b73.button ?? 0) !== 0 ||
      this._isTableTextEditing() ||
      !this._isTableDrawingActive(_0x21148f)
    )
      return false;
    let _0x16a902 = this._resolveScenePoint(
        _0x451b73.offsetX,
        _0x451b73.offsetY,
      ),
      _0x42ed8a = this._resolveResizeHit(
        _0x21148f,
        _0x8543ce,
        _0x16a902.x,
        _0x16a902.y,
      );
    if (!_0x42ed8a || _0x21148f.element["type"] !== _0x17964d.Table)
      return false;
    (_0x25cd5b.stopPropagation(),
      (_0x25cd5b.skipNextObservers = true),
      this._hideContextMenu(),
      this._editorUIService["complete"](),
      this._tableSelectionService["clear"](),
      (_0x4fa38c = _0x8543ce.setTableSelection) == null ||
        _0x4fa38c.call(_0x8543ce, null),
      (this._resizeDragContext = {
        unitId: _0x21148f.unitId,
        tableId: _0x21148f.element["tableId"],
        object: _0x8543ce,
        table: _0x42ed8a.table,
        handle: _0x42ed8a.handle,
        startPoint: _0x42ed8a.point,
        pendingTable: _0x42ed8a.table,
      }),
      this._setResizeCursor(_0x42ed8a.handle["axis"]));
    let _0x2a9874 = this._renderContext["scene"];
    (_0x2f9d4b = _0x2a9874.disableObjectsEvent) == null ||
      _0x2f9d4b.call(_0x2a9874);
    let _0x24c135 = _0x2a9874.onPointerMove$["subscribeEvent"]((_0x22f966) =>
        this._updateResizeDrag(_0x22f966),
      ),
      _0x4624a9 = _0x2a9874.onPointerUp$["subscribeEvent"]((_0x309713) => {
        var _0x1de862;
        (_0x24c135 == null || _0x24c135.unsubscribe(),
          _0x4624a9 == null || _0x4624a9.unsubscribe(),
          (_0x1de862 = _0x2a9874.enableObjectsEvent) == null ||
            _0x1de862.call(_0x2a9874),
          this._finishResizeDrag(_0x309713));
      });
    return (
      this.disposeWithMe({ dispose: () => _0x24c135.unsubscribe() }),
      this.disposeWithMe({ dispose: () => _0x4624a9.unsubscribe() }),
      true
    );
  }
  _resolveResizeHit(_0xcb6f96, _0x859488, _0xfa5569, _0x55f494) {
    if (
      _0xcb6f96.unitId !== this._renderContext["unitId"] ||
      _0xcb6f96.element["type"] !== _0x17964d.Table ||
      !this._isTableDrawingActive(_0xcb6f96) ||
      _0xcb6f96.groupId ||
      _0x859488.isInGroup
    )
      return null;
    let _0x53499f = this._tableResourceService["getTable"](
      _0xcb6f96.unitId,
      _0xcb6f96.element["tableId"],
    );
    if (!_0x53499f) return null;
    let _0x3570f8 = this._resolveObjectPoint(_0x859488, _0xfa5569, _0x55f494),
      _0x379cf2 = Oc(
        _0x53499f,
        _0x859488.width,
        _0x859488.height,
        _0x3570f8.x,
        _0x3570f8.y,
        6,
      );
    return _0x379cf2
      ? { table: _0x53499f, handle: _0x379cf2, point: _0x3570f8 }
      : null;
  }
  _resolveObjectPoint(_0x27a9ab, _0x2295c6, _0x3e5f26) {
    let _0x1eacd5 = _0x27a9ab.getInverseCoord(
      new _0x25842b(_0x2295c6, _0x3e5f26),
    );
    return {
      x: _0x1eacd5.x + _0x27a9ab.width / 2,
      y: _0x1eacd5.y + _0x27a9ab.height / 2,
    };
  }
  _resolveTableControlHit(_0x10785b, _0x5bc955, _0x1e7c7e, _0xe3ffe9) {
    if (_0x10785b.element["type"] !== _0x17964d.Table) return null;
    let _0x2c36fb = this._tableResourceService["getTable"](
      _0x10785b.unitId,
      _0x10785b.element["tableId"],
    );
    if (!_0x2c36fb) return null;
    let _0xa19d42 = this._resolveObjectPoint(_0x5bc955, _0x1e7c7e, _0xe3ffe9),
      _0x6be5af = this._resolveTableTriggerHit(
        _0x2c36fb,
        _0x5bc955,
        _0xa19d42.x,
        _0xa19d42.y,
      );
    return _0x6be5af &&
      (_0x6be5af.kind === "table-handle" ||
        _0x6be5af.kind === "row-header" ||
        _0x6be5af.kind === "column-header" ||
        _0x6be5af.kind === "row-insert-dot" ||
        _0x6be5af.kind === "column-insert-dot")
      ? _0x6be5af
      : _0x12cba6(
          _0x4d8b1c(
            _0x509c52(_0x2c36fb),
            _0x5bc955.width,
            _0x5bc955.height,
          ).filter((_0x347ac0) => _0x347ac0.kind === "table-handle"),
          _0xa19d42.x,
          _0xa19d42.y,
        );
  }
  _updateTableControlHover(_0x5f1572) {
    if (this._isTableTextEditing()) {
      this._clearTableControlHover();
      return;
    }
    let _0x55a635 = this._resolvePointerScenePoint(_0x5f1572),
      _0x5a8046 = this._resolveInsertDotAtScenePoint(_0x55a635);
    if (_0x5a8046) {
      (this._clearStructuralInsertHoverObject(_0x5a8046.object),
        (this._structuralInsertHoverObject = _0x5a8046.object),
        this._updateStructuralControlHover(_0x5a8046.object, _0x5a8046.trigger),
        this._setTableControlHover(_0x5a8046.object, null),
        this._setTableCellHover(_0x5a8046.object, null));
      return;
    }
    let _0x4db638 = this._resolveActiveTableObject();
    if (!_0x4db638) {
      this._clearTableControlHover();
      return;
    }
    this._clearStructuralInsertHoverObject(_0x4db638.object);
    let _0x91237 = this._resolveTableControlHit(
        _0x4db638.drawing,
        _0x4db638.object,
        _0x55a635.x,
        _0x55a635.y,
      ),
      _0x24383b =
        _0x91237 &&
        (_0x91237.kind === "row-header" ||
          _0x91237.kind === "column-header" ||
          _0x91237.kind === "row-insert-dot" ||
          _0x91237.kind === "column-insert-dot")
          ? _0x91237
          : null;
    (this._updateStructuralControlHover(_0x4db638.object, _0x24383b),
      this._setTableControlHover(
        _0x4db638.object,
        (_0x91237 == null ? undefined : _0x91237.kind) === "table-handle"
          ? { kind: "table-handle" }
          : null,
      ),
      this._updateCellHover(
        _0x4db638.drawing,
        _0x4db638.object,
        _0x55a635.x,
        _0x55a635.y,
        !!_0x91237,
      ));
  }
  _clearTableControlHover() {
    this._setStructuralCursor(false);
    let _0x2023df = this._resolveActiveTableObject();
    (this._clearStructuralInsertHoverObject(
      (_0x2023df == null ? undefined : _0x2023df.object) ?? null,
    ),
      _0x2023df &&
        ((this._hoveredTrigger = null),
        this._setTableControlState(_0x2023df.object, null),
        this._setTableControlHover(_0x2023df.object, null),
        this._setTableCellHover(_0x2023df.object, null)));
  }
  _clearStructuralInsertHoverObject(_0x7bdf1a = null) {
    let _0x497456 = this._structuralInsertHoverObject;
    _0x497456 &&
      ((this._structuralInsertHoverObject = null),
      _0x497456 !== _0x7bdf1a &&
        ((this._hoveredTrigger = null),
        this._setTableControlState(_0x497456, null),
        this._setTableControlHover(_0x497456, null),
        this._setTableCellHover(_0x497456, null)));
  }
  _setTableControlHover(_0x32db2c, _0x44ab1c) {
    var _0x524b26;
    if (
      (_0x524b26 = _0x32db2c.setTableControlHover) != null &&
      _0x524b26.call(_0x32db2c, _0x44ab1c)
    ) {
      var _0x4a2030, _0x5b7ee3;
      (_0x4a2030 = (_0x5b7ee3 = this._renderContext["scene"]).makeDirty) ==
        null || _0x4a2030.call(_0x5b7ee3, true);
    }
  }
  _updateCellHover(_0xa81de, _0x2c484e, _0x28c3a9, _0x3d1f09, _0x6ce0d5) {
    if (_0x6ce0d5 || !this._tableActivationStage) {
      this._setTableCellHover(_0x2c484e, null);
      return;
    }
    let _0x1c62c6 = this._resolveCellHit(
      _0xa81de,
      _0x4b5215(_0xa81de.unitId, _0xa81de.subUnitId, _0xa81de.drawingId),
      _0x28c3a9,
      _0x3d1f09,
    );
    this._setTableCellHover(
      (_0x1c62c6 == null ? undefined : _0x1c62c6.object) ?? _0x2c484e,
      _0x1c62c6
        ? { row: _0x1c62c6.cell["row"], column: _0x1c62c6.cell["column"] }
        : null,
    );
  }
  _setTableCellHover(_0x54919a, _0xe9b2) {
    var _0x2299ce;
    if (
      (_0x2299ce = _0x54919a.setTableCellHover) != null &&
      _0x2299ce.call(_0x54919a, _0xe9b2)
    ) {
      var _0xc2778e, _0x455d0e;
      (_0xc2778e = (_0x455d0e = this._renderContext["scene"]).makeDirty) ==
        null || _0xc2778e.call(_0x455d0e, true);
    }
  }
  _buildActiveTableTriggers(_0x6194fd, _0x290d33) {
    var _0x367c81, _0x362039;
    let _0x49c689 = _0x509c52(_0x6194fd),
      _0x13be95 =
        (_0x367c81 = (_0x362039 = this._renderContext["scene"])
          .getAncestorScale) == null
          ? undefined
          : _0x367c81.call(_0x362039),
      _0x131d71 = Z(
        (_0x13be95 == null ? undefined : _0x13be95.scaleX) ??
          (_0x13be95 == null ? undefined : _0x13be95.scaleY),
        1,
      );
    return _0xd3ba77({
      tableId: _0x6194fd.id,
      tableWidth: _0x290d33.width,
      tableHeight: _0x290d33.height,
      rowHeights: Ic(
        _0x6194fd.rows["map"]((_0x251b12) => _0x251b12.height ?? 24),
        _0x290d33.height,
      ),
      columnWidths: Ic(
        _0x6194fd.columns["map"]((_0x304726) => _0x304726.width),
        _0x290d33.width,
      ),
      mergedCells: _0x49c689.cells["filter"](
        (_0xb2723a) =>
          !_0xb2723a.hidden &&
          (_0xb2723a.rowSpan > 1 || _0xb2723a.columnSpan > 1),
      ).map((_0x28e3ca) => ({
        startRow: _0x28e3ca.row,
        endRow: _0x28e3ca.row + _0x28e3ca.rowSpan - 1,
        startColumn: _0x28e3ca.column,
        endColumn: _0x28e3ca.column + _0x28e3ca.columnSpan - 1,
      })),
      zoom: _0x131d71,
    });
  }
  _resolveTableTriggerHit(_0x1934e7, _0x121470, _0x1a1514, _0x560cfd) {
    return _0x9c554a(
      this._buildActiveTableTriggers(_0x1934e7, _0x121470),
      _0x1a1514,
      _0x560cfd,
    );
  }
  _updateStructuralControlHover(_0x3058cf, _0x10e60c) {
    let _0x84dcc1 =
      _0x10e60c &&
      (_0x10e60c.kind === "row-header" ||
        _0x10e60c.kind === "column-header" ||
        _0x10e60c.kind === "row-insert-dot" ||
        _0x10e60c.kind === "column-insert-dot")
        ? _0x10e60c
        : null;
    this._hoveredTrigger = _0x84dcc1;
    let _0x324c5a = _0x84dcc1 ? Dc(_0x84dcc1) : null,
      _0x1a02d7 =
        (_0x84dcc1 == null ? undefined : _0x84dcc1.kind) === "row-insert-dot" &&
        _0x324c5a !== null
          ? { kind: "row", index: _0x324c5a }
          : (_0x84dcc1 == null ? undefined : _0x84dcc1.kind) ===
                "column-insert-dot" && _0x324c5a !== null
            ? { kind: "column", index: _0x324c5a }
            : null,
      _0x277edf = this._headerSelectionDragState
        ? {
            kind: this._headerSelectionDragState["kind"],
            start: Math.min(
              this._headerSelectionDragState["anchor"],
              this._headerSelectionDragState["current"],
            ),
            end: Math.max(
              this._headerSelectionDragState["anchor"],
              this._headerSelectionDragState["current"],
            ),
          }
        : null,
      _0x53be1c = this._rowColumnMoveTarget
        ? {
            kind: this._rowColumnMoveTarget["kind"],
            index: this._rowColumnMoveTarget["guideIndex"],
          }
        : null,
      _0x225767 = !!_0x84dcc1 || !!_0x277edf || !!_0x1a02d7 || !!_0x53be1c;
    (this._setTableControlState(
      _0x3058cf,
      _0x225767
        ? {
            visible: true,
            hoveredTrigger: _0x84dcc1,
            selectedStructuralRange: _0x277edf,
            insertGuide: _0x1a02d7,
            reorderGuide: _0x53be1c,
          }
        : null,
    ),
      this._setStructuralCursor(!!_0x84dcc1));
  }
  _setStructuralCursor(_0x1b9350) {
    let _0x389fae = this._renderContext["scene"];
    if (_0x1b9350) {
      ((this._ownsStructuralCursor = true),
        _0x389fae.setCursor(_0x32f3a4.POINTER));
      return;
    }
    this._ownsStructuralCursor &&
      ((this._ownsStructuralCursor = false),
      !this._resizeHoverActive &&
        _0x389fae.getCursor() === _0x32f3a4.POINTER &&
        _0x389fae.resetCursor());
  }
  _setTableControlState(_0x55361c, _0x133eb5) {
    var _0x5de053;
    if (
      (_0x5de053 = _0x55361c.setTableControlState) != null &&
      _0x5de053.call(_0x55361c, _0x133eb5)
    ) {
      var _0x9d1573, _0x64346;
      (_0x9d1573 = (_0x64346 = this._renderContext["scene"]).makeDirty) ==
        null || _0x9d1573.call(_0x64346, true);
    }
  }
  _handleStructuralHeaderPointerDown(
    _0x117706,
    _0x32b6ec,
    _0x512e16,
    _0x594203,
  ) {
    var _0xe88862;
    if (
      (this._finishHeaderSelectionDrag(),
      _0x512e16.kind === "row-header" && _0x512e16.row !== undefined)
    ) {
      let _0x2e05ac = this._getSelectedHeaderRange(
        _0x117706,
        "row",
        _0x512e16.row,
      );
      _0x2e05ac
        ? (this._pendingHeaderSelection = {
            drawing: _0x117706,
            object: _0x32b6ec,
            kind: "row",
            start: _0x2e05ac.start,
            end: _0x2e05ac.end,
            startPoint: _0x594203,
          })
        : (this._selectRows(_0x117706, _0x32b6ec, _0x512e16.row, _0x512e16.row),
          (this._headerSelectionDragState = {
            drawing: _0x117706,
            object: _0x32b6ec,
            kind: "row",
            anchor: _0x512e16.row,
            current: _0x512e16.row,
          }));
    } else {
      if (
        _0x512e16.kind === "column-header" &&
        _0x512e16.column !== undefined
      ) {
        let _0x44b8c0 = this._getSelectedHeaderRange(
          _0x117706,
          "column",
          _0x512e16.column,
        );
        _0x44b8c0
          ? (this._pendingHeaderSelection = {
              drawing: _0x117706,
              object: _0x32b6ec,
              kind: "column",
              start: _0x44b8c0.start,
              end: _0x44b8c0.end,
              startPoint: _0x594203,
            })
          : (this._selectColumns(
              _0x117706,
              _0x32b6ec,
              _0x512e16.column,
              _0x512e16.column,
            ),
            (this._headerSelectionDragState = {
              drawing: _0x117706,
              object: _0x32b6ec,
              kind: "column",
              anchor: _0x512e16.column,
              current: _0x512e16.column,
            }));
      } else return;
    }
    this._setTableControlState(_0x32b6ec, {
      visible: true,
      hoveredTrigger: _0x512e16,
      selectedStructuralRange: this._headerSelectionDragState
        ? {
            kind: this._headerSelectionDragState["kind"],
            start: this._headerSelectionDragState["anchor"],
            end: this._headerSelectionDragState["current"],
          }
        : this._pendingHeaderSelection
          ? {
              kind: this._pendingHeaderSelection["kind"],
              start: this._pendingHeaderSelection["start"],
              end: this._pendingHeaderSelection["end"],
            }
          : null,
    });
    let _0x3f146b = this._renderContext["scene"];
    if (!_0x3f146b.onPointerMove$ || !_0x3f146b.onPointerUp$) return;
    (_0xe88862 = _0x3f146b.disableObjectsEvent) == null ||
      _0xe88862.call(_0x3f146b);
    let _0x59af7c = _0x3f146b.onPointerMove$["subscribeEvent"]((_0x40977c) =>
        this._updateHeaderSelectionDrag(_0x40977c),
      ),
      _0x1abab1 = _0x3f146b.onPointerUp$["subscribeEvent"](() =>
        this._finishHeaderSelectionDrag(_0x32b6ec),
      );
    ((this._headerSelectionDragCleanup = () => {
      var _0x1de3e5;
      (_0x59af7c == null || _0x59af7c.unsubscribe(),
        _0x1abab1 == null || _0x1abab1.unsubscribe(),
        (_0x1de3e5 = _0x3f146b.enableObjectsEvent) == null ||
          _0x1de3e5.call(_0x3f146b));
    }),
      this.disposeWithMe({ dispose: () => _0x59af7c.unsubscribe() }),
      this.disposeWithMe({ dispose: () => _0x1abab1.unsubscribe() }));
  }
  _finishHeaderSelectionDrag(_0x36af84, _0x442b1f) {
    var _0x3a902f, _0x290e14, _0x22709a;
    let _0x41f53e = this._headerSelectionDragCleanup;
    ((this._headerSelectionDragCleanup = null),
      _0x41f53e == null || _0x41f53e());
    let _0x4e0ee2 =
      _0x36af84 ??
      ((_0x3a902f = this._rowColumnMoveState) == null
        ? undefined
        : _0x3a902f.object) ??
      ((_0x290e14 = this._pendingHeaderSelection) == null
        ? undefined
        : _0x290e14.object) ??
      ((_0x22709a = this._headerSelectionDragState) == null
        ? undefined
        : _0x22709a.object);
    ((_0x442b1f == null ? undefined : _0x442b1f.commitMove) !== false &&
      this._executeRowColumnMove(),
      (this._headerSelectionDragState = null),
      (this._pendingHeaderSelection = null),
      (this._rowColumnMoveState = null),
      (this._rowColumnMoveTarget = null),
      _0x4e0ee2 &&
        this._updateStructuralControlHover(_0x4e0ee2, this._hoveredTrigger));
  }
  _updateHeaderSelectionDrag(_0x417d79) {
    let _0x1592f6 = this._pendingHeaderSelection,
      _0x5bb45f = this._rowColumnMoveState;
    if (_0x1592f6 || _0x5bb45f) {
      this._updateRowColumnMoveDrag(_0x417d79);
      return;
    }
    let _0x1307c7 = this._headerSelectionDragState;
    if (!_0x1307c7 || _0x1307c7.drawing["element"].type !== _0x17964d.Table)
      return;
    if (
      "buttons" in _0x417d79 &&
      _0x417d79.buttons !== undefined &&
      (_0x417d79.buttons & 1) != 1
    ) {
      this._finishHeaderSelectionDrag(_0x1307c7.object);
      return;
    }
    let _0x4df336 = this._tableResourceService["getTable"](
      _0x1307c7.drawing["unitId"],
      _0x1307c7.drawing["element"].tableId,
    );
    if (!_0x4df336) return;
    let _0x50121f = this._resolvePointerScenePoint(_0x417d79),
      _0x46a6d1 = this._resolveObjectPoint(
        _0x1307c7.object,
        _0x50121f.x,
        _0x50121f.y,
      ),
      _0x324c43 = _0x5c18d4(
        this._buildActiveTableTriggers(_0x4df336, _0x1307c7.object),
        _0x46a6d1.x,
        _0x46a6d1.y,
      );
    if (_0x324c43) {
      if (
        _0x1307c7.kind === "row" &&
        _0x324c43.kind === "row-header" &&
        _0x324c43.row !== undefined
      )
        ((_0x1307c7.current = _0x324c43.row),
          this._selectRows(
            _0x1307c7.drawing,
            _0x1307c7.object,
            _0x1307c7.anchor,
            _0x324c43.row,
          ));
      else {
        if (
          _0x1307c7.kind === "column" &&
          _0x324c43.kind === "column-header" &&
          _0x324c43.column !== undefined
        )
          ((_0x1307c7.current = _0x324c43.column),
            this._selectColumns(
              _0x1307c7.drawing,
              _0x1307c7.object,
              _0x1307c7.anchor,
              _0x324c43.column,
            ));
        else return;
      }
      this._setTableControlState(_0x1307c7.object, {
        visible: true,
        hoveredTrigger: _0x324c43,
        selectedStructuralRange: {
          kind: _0x1307c7.kind,
          start: Math.min(_0x1307c7.anchor, _0x1307c7.current),
          end: Math.max(_0x1307c7.anchor, _0x1307c7.current),
        },
      });
    }
  }
  _updateRowColumnMoveDrag(_0x41dd42) {
    let _0x145213 = this._pendingHeaderSelection,
      _0x15dcd2 = this._rowColumnMoveState,
      _0x312239 = _0x15dcd2 ?? _0x145213;
    if (!_0x312239 || _0x312239.drawing["element"].type !== _0x17964d.Table)
      return;
    if (
      "buttons" in _0x41dd42 &&
      _0x41dd42.buttons !== undefined &&
      (_0x41dd42.buttons & 1) != 1
    ) {
      this._finishHeaderSelectionDrag(_0x312239.object, { commitMove: false });
      return;
    }
    let _0x913bd0 = this._resolvePointerScenePoint(_0x41dd42);
    if (!_0x15dcd2 && _0x145213) {
      let _0x17b395 = _0x913bd0.x - _0x145213.startPoint["x"],
        _0x1d6330 = _0x913bd0.y - _0x145213.startPoint["y"];
      if (Math.hypot(_0x17b395, _0x1d6330) < 8) return;
      ((this._rowColumnMoveState = {
        drawing: _0x145213.drawing,
        object: _0x145213.object,
        kind: _0x145213.kind,
        start: _0x145213.start,
        end: _0x145213.end,
      }),
        (this._pendingHeaderSelection = null));
    }
    let _0x2c0b93 = this._rowColumnMoveState;
    if (!_0x2c0b93 || _0x2c0b93.drawing["element"].type !== _0x17964d.Table)
      return;
    let _0x306f37 = this._tableResourceService["getTable"](
      _0x2c0b93.drawing["unitId"],
      _0x2c0b93.drawing["element"].tableId,
    );
    if (!_0x306f37) {
      ((this._rowColumnMoveTarget = null),
        this._setTableControlState(_0x2c0b93.object, null));
      return;
    }
    let _0x5e4a69 = this._resolveRowColumnMoveTarget(
        _0x306f37,
        _0x2c0b93.object,
        _0x2c0b93.kind,
        _0x913bd0,
      ),
      _0x3731dd =
        !!_0x5e4a69 &&
        (_0x5e4a69.kind === "row"
          ? _0x51e9ad(
              _0x306f37,
              { startRow: _0x2c0b93.start, endRow: _0x2c0b93.end },
              { row: _0x5e4a69.targetRow, position: _0x5e4a69.position },
            )
          : _0x1d7e67(
              _0x306f37,
              { startColumn: _0x2c0b93.start, endColumn: _0x2c0b93.end },
              { column: _0x5e4a69.targetColumn, position: _0x5e4a69.position },
            ));
    ((this._rowColumnMoveTarget = _0x3731dd ? _0x5e4a69 : null),
      this._setTableControlState(
        _0x2c0b93.object,
        _0x3731dd && _0x5e4a69
          ? {
              visible: true,
              selectedStructuralRange: {
                kind: _0x2c0b93.kind,
                start: _0x2c0b93.start,
                end: _0x2c0b93.end,
              },
              reorderGuide: {
                kind: _0x5e4a69.kind,
                index: _0x5e4a69.guideIndex,
              },
            }
          : null,
      ));
  }
  _executeRowColumnMove() {
    let _0x5ee990 = this._rowColumnMoveState,
      _0x4f89e = this._rowColumnMoveTarget;
    !_0x5ee990 ||
      !_0x4f89e ||
      _0x5ee990.drawing["element"].type !== _0x17964d.Table ||
      (_0x5ee990.kind === "row" && _0x4f89e.kind === "row"
        ? this._commandService["executeCommand"](_0x45f5f0.id, {
            unitId: _0x5ee990.drawing["unitId"],
            tableId: _0x5ee990.drawing["element"].tableId,
            startRow: _0x5ee990.start,
            endRow: _0x5ee990.end,
            targetRow: _0x4f89e.targetRow,
            position: _0x4f89e.position,
          })
        : _0x5ee990.kind === "column" &&
          _0x4f89e.kind === "column" &&
          this._commandService["executeCommand"](_0x345591.id, {
            unitId: _0x5ee990.drawing["unitId"],
            tableId: _0x5ee990.drawing["element"].tableId,
            startColumn: _0x5ee990.start,
            endColumn: _0x5ee990.end,
            targetColumn: _0x4f89e.targetColumn,
            position: _0x4f89e.position,
          }));
  }
  _getSelectedHeaderRange(_0x3306c2, _0x1f6551, _0x548a19) {
    if (_0x3306c2.element["type"] !== _0x17964d.Table) return null;
    let _0x193c6b = this._tableSelectionService["getSelection"]();
    if (
      !_0x193c6b ||
      _0x193c6b.kind !== _0x1f6551 ||
      _0x193c6b.unitId !== _0x3306c2.unitId ||
      _0x193c6b.subUnitId !== _0x3306c2.subUnitId ||
      _0x193c6b.elementId !== _0x3306c2.drawingId ||
      _0x193c6b.tableId !== _0x3306c2.element["tableId"]
    )
      return null;
    for (let _0x58c9ad of _0x193c6b.ranges) {
      let _0xa7a79e =
          _0x1f6551 === "row"
            ? Math.min(_0x58c9ad.startRow, _0x58c9ad.endRow)
            : Math.min(_0x58c9ad.startColumn, _0x58c9ad.endColumn),
        _0x14d01d =
          _0x1f6551 === "row"
            ? Math.max(_0x58c9ad.startRow, _0x58c9ad.endRow)
            : Math.max(_0x58c9ad.startColumn, _0x58c9ad.endColumn);
      if (_0x548a19 >= _0xa7a79e && _0x548a19 <= _0x14d01d)
        return { start: _0xa7a79e, end: _0x14d01d };
    }
    return null;
  }
  _resolveRowColumnMoveTarget(_0x58633e, _0x569800, _0x3b8dd6, _0x22aa6d) {
    let _0x3ee145 = this._resolveObjectPoint(
        _0x569800,
        _0x22aa6d.x,
        _0x22aa6d.y,
      ),
      _0x138847 =
        _0x3b8dd6 === "row"
          ? Ic(
              _0x58633e.rows["map"]((_0x1e2841) => _0x1e2841.height ?? 24),
              _0x569800.height,
            )
          : Ic(
              _0x58633e.columns["map"]((_0x59db5e) => _0x59db5e.width),
              _0x569800.width,
            );
    if (_0x138847.length === 0) return null;
    let _0xbb1a76 = Lc(
        _0x138847,
        _0x3b8dd6 === "row" ? _0x3ee145.y : _0x3ee145.x,
      ),
      _0x4b6be6 =
        _0xbb1a76 <= 0
          ? 0
          : _0xbb1a76 >= _0x138847.length
            ? _0x138847.length - 1
            : _0xbb1a76,
      _0x3a48fc =
        _0xbb1a76 <= 0
          ? "before"
          : _0xbb1a76 >= _0x138847.length
            ? "after"
            : "before";
    return _0x3b8dd6 === "row"
      ? {
          kind: _0x3b8dd6,
          targetRow: _0x4b6be6,
          position: _0x3a48fc,
          guideIndex: _0xbb1a76,
        }
      : {
          kind: _0x3b8dd6,
          targetColumn: _0x4b6be6,
          position: _0x3a48fc,
          guideIndex: _0xbb1a76,
        };
  }
  _handleStructuralInsertTrigger(_0x29b570, _0x4aa9ce, _0x2df2df, _0x3b23bd) {
    var _0x162ab8;
    if (_0x29b570.element["type"] !== _0x17964d.Table) return false;
    let _0x10f5d5 = Dc(_0x2df2df),
      _0x2e0fbf = false;
    if (
      (_0x2df2df.kind === "row-insert-dot" && _0x10f5d5 !== null
        ? (_0x2e0fbf = !!this._commandService["executeCommand"](_0x84e104.id, {
            unitId: _0x29b570.unitId,
            subUnitId: _0x29b570.subUnitId,
            elementId: _0x29b570.drawingId,
            tableId: _0x29b570.element["tableId"],
            rowIndex: _0x10f5d5,
            count: 1,
          }))
        : _0x2df2df.kind === "column-insert-dot" &&
          _0x10f5d5 !== null &&
          (_0x2e0fbf = !!this._commandService["executeCommand"](_0x36f341.id, {
            unitId: _0x29b570.unitId,
            subUnitId: _0x29b570.subUnitId,
            elementId: _0x29b570.drawingId,
            tableId: _0x29b570.element["tableId"],
            columnIndex: _0x10f5d5,
            count: 1,
          })),
      !_0x2e0fbf)
    )
      return false;
    let _0x5b636a = this._tableResourceService["getTable"](
      _0x29b570.unitId,
      _0x29b570.element["tableId"],
    );
    (_0x162ab8 = _0x4aa9ce.setTable) == null ||
      _0x162ab8.call(_0x4aa9ce, _0x5b636a);
    let _0x56f845 = wc(
      (_0x3b23bd
        ? this._resolveInsertDotTriggerForObject(
            _0x4aa9ce,
            new _0x25842b(_0x3b23bd.x, _0x3b23bd.y),
          )
        : null) ?? _0x2df2df,
    );
    return (
      (this._structuralInsertHoverObject = _0x4aa9ce),
      this._setTableControlState(_0x4aa9ce, _0x56f845),
      this._setTableControlHover(_0x4aa9ce, null),
      this._setTableCellHover(_0x4aa9ce, null),
      true
    );
  }
  _resolveActiveTableObject() {
    var _0x302f9e, _0x240839;
    let _0x501c9e =
        (_0x302f9e = (_0x240839 = this._drawingStateService).getSnapshot) ==
        null
          ? undefined
          : _0x302f9e.call(_0x240839),
      _0x345154 = this._tableSelectionService["getSelection"](),
      _0x2c27a9 =
        (_0x501c9e == null ? undefined : _0x501c9e.context) ??
        (_0x345154
          ? { unitId: _0x345154.unitId, subUnitId: _0x345154.subUnitId }
          : null),
      _0x1ca74e =
        (_0x501c9e == null ? undefined : _0x501c9e.selectedIds["length"]) === 1
          ? _0x501c9e.selectedIds[0]
          : _0x345154 == null
            ? undefined
            : _0x345154.elementId;
    return !_0x2c27a9 || !_0x1ca74e
      ? this._resolveTableObjectFromContext(this._lastActiveTableContext)
      : (this._resolveTableObjectFromContext({
          ..._0x2c27a9,
          elementId: _0x1ca74e,
        }) ??
          this._resolveTableObjectFromContext(this._lastActiveTableContext));
  }
  _resolveTableObjectFromContext(_0x820002) {
    if (!_0x820002) return null;
    let _0x2ad77c = this._resolveSelectedTableDrawing(
      _0x820002.unitId,
      _0x820002.subUnitId,
      _0x820002.elementId,
    );
    if (!_0x2ad77c || _0x2ad77c.element["type"] !== _0x17964d.Table)
      return null;
    let _0x1d54f8 = this._tableResourceService["getTable"](
      _0x2ad77c.unitId,
      _0x2ad77c.element["tableId"],
    );
    if (!_0x1d54f8) return null;
    let _0x41729e = this._renderContext["scene"].getObject(
      _0x4b5215(_0x820002.unitId, _0x820002.subUnitId, _0x820002.elementId),
    );
    return _0x41729e
      ? { drawing: _0x2ad77c, object: _0x41729e, table: _0x1d54f8 }
      : null;
  }
  _openContextMenu(_0x59683e, _0x61c944) {
    var _0x593e32;
    let _0x1440d6 = this._createContextMenuEvent(_0x59683e);
    ((_0x593e32 = _0x1440d6.preventDefault) == null ||
      _0x593e32.call(_0x1440d6),
      this._contextMenuService["triggerContextMenu"](_0x1440d6, _0x61c944));
  }
  _createContextMenuEvent(_0x5979e1) {
    var _0xf488c9, _0xabefe7, _0x442113;
    let _0x2d219e = _0x5979e1;
    if (Xc(_0x2d219e.clientX) && Xc(_0x2d219e.clientY))
      return {
        ..._0x2d219e,
        clientX: _0x2d219e.clientX,
        clientY: _0x2d219e.clientY,
        preventDefault: () => {
          var _0x17ac3c;
          return (_0x17ac3c = _0x2d219e.preventDefault) == null
            ? undefined
            : _0x17ac3c.call(_0x2d219e);
        },
        stopPropagation: () => {
          var _0x58df0f;
          return (_0x58df0f = _0x2d219e.stopPropagation) == null
            ? undefined
            : _0x58df0f.call(_0x2d219e);
        },
      };
    let _0x2d2cbe =
        (_0xf488c9 = this._renderContext["engine"]) == null ||
        (_0xabefe7 = _0xf488c9.getCanvasElement) == null ||
        (_0xabefe7 = _0xabefe7.call(_0xf488c9)) == null ||
        (_0x442113 = _0xabefe7.getBoundingClientRect) == null
          ? undefined
          : _0x442113.call(_0xabefe7),
      _0x3e74e3 =
        ((_0x2d2cbe == null ? undefined : _0x2d2cbe.left) ?? 0) +
        (_0x5979e1.offsetX ?? 0),
      _0x5698c1 =
        ((_0x2d2cbe == null ? undefined : _0x2d2cbe.top) ?? 0) +
        (_0x5979e1.offsetY ?? 0);
    return {
      ..._0x2d219e,
      clientX: _0x3e74e3,
      clientY: _0x5698c1,
      preventDefault: () => {
        var _0xca3b76;
        return (_0xca3b76 = _0x2d219e.preventDefault) == null
          ? undefined
          : _0xca3b76.call(_0x2d219e);
      },
      stopPropagation: () => {
        var _0x249ce9;
        return (_0x249ce9 = _0x2d219e.stopPropagation) == null
          ? undefined
          : _0x249ce9.call(_0x2d219e);
      },
    };
  }
  _hideContextMenu() {
    var _0x2a8351, _0x26d5bb;
    (_0x2a8351 = this._contextMenuService) == null ||
      (_0x26d5bb = _0x2a8351.hideContextMenu) == null ||
      _0x26d5bb.call(_0x2a8351);
  }
  _startStage1TableBodyPointer(
    _0x56e398,
    _0xd93565,
    _0x434ebe,
    _0x577319,
    _0x4c2f30,
  ) {
    var _0x308a3d, _0x313843;
    (this._finishPendingStage1TableDrag({ focusCell: false }),
      _0x577319.stopPropagation(),
      (_0x577319.skipNextObservers = true),
      (_0x308a3d = _0x434ebe.stopPropagation) == null ||
        _0x308a3d.call(_0x434ebe),
      (_0x313843 = _0x434ebe.preventDefault) == null ||
        _0x313843.call(_0x434ebe),
      this._hideContextMenu(),
      this._editorUIService["complete"]());
    let _0x236ae8 = this._renderContext["scene"],
      _0x955917 = null,
      _0x2a2765 = null,
      _0x40a95c = typeof window > "u" ? null : window,
      _0x25c8b7 = () => {
        (_0x955917 == null || _0x955917.unsubscribe(),
          _0x2a2765 == null || _0x2a2765.unsubscribe(),
          _0x40a95c == null ||
            _0x40a95c.removeEventListener("pointerup", _0x9a434f));
      },
      _0x1146b8 = (_0x37d521) => this._updatePendingStage1TableDrag(_0x37d521),
      _0x9a434f = () => this._finishPendingStage1TableDrag({ focusCell: true });
    ((this._pendingStage1TableDragContext = {
      drawing: _0x56e398,
      object: _0xd93565,
      resolved: _0x4c2f30,
      startEvent: _0x434ebe,
      startPoint: this._resolvePointerScenePoint(_0x434ebe),
      cleanup: _0x25c8b7,
    }),
      (_0x955917 = _0x236ae8.onPointerMove$["subscribeEvent"](_0x1146b8)),
      (_0x2a2765 = _0x236ae8.onPointerUp$["subscribeEvent"](_0x9a434f)),
      _0x40a95c == null ||
        _0x40a95c.addEventListener("pointerup", _0x9a434f, { once: true }),
      this.disposeWithMe({ dispose: _0x25c8b7 }));
  }
  _updatePendingStage1TableDrag(_0x5f360d) {
    let _0x3892b2 = this._pendingStage1TableDragContext;
    if (!_0x3892b2) return;
    if (
      "buttons" in _0x5f360d &&
      _0x5f360d.buttons !== undefined &&
      (_0x5f360d.buttons & 1) != 1
    ) {
      this._finishPendingStage1TableDrag({ focusCell: true });
      return;
    }
    let _0x313aba = this._resolvePointerScenePoint(_0x5f360d),
      _0x5d510c = _0x313aba.x - _0x3892b2.startPoint["x"],
      _0x3ab232 = _0x313aba.y - _0x3892b2.startPoint["y"];
    Math.hypot(_0x5d510c, _0x3ab232) < 8 ||
      (this._finishPendingStage1TableDrag({ focusCell: false }),
      this._startTableMoveDrag(
        _0x3892b2.drawing,
        _0x3892b2.object,
        _0x3892b2.startEvent,
      ),
      this._updateTableMoveDrag(_0x5f360d));
  }
  _finishPendingStage1TableDrag(_0x448783) {
    let _0x4eec0e = this._pendingStage1TableDragContext;
    _0x4eec0e &&
      ((this._pendingStage1TableDragContext = null),
      _0x4eec0e.cleanup(),
      _0x448783.focusCell &&
        this._selectResolvedCell(
          _0x4eec0e.drawing,
          _0x4eec0e.object,
          _0x4eec0e.resolved,
        ));
  }
  _startTableMoveDrag(_0x448ee3, _0x42dc71, _0x335396) {
    var _0x105b40;
    let _0x50a0b2 = this._resolvePointerScenePoint(_0x335396),
      _0x621e33 = Nc(this._resolveCurrentTableDrawing(_0x448ee3), _0x42dc71);
    ((this._tableMoveDragContext = {
      drawing: _0x448ee3,
      object: _0x42dc71,
      activationStage: this._tableActivationStage,
      startEvent: _0x335396,
      startPoint: _0x50a0b2,
      lastPoint: _0x50a0b2,
      startObjectLeft: _0x42dc71.left,
      startObjectTop: _0x42dc71.top,
      startTransform: _0x621e33,
      moved: false,
      clickFallbackTimer: null,
    }),
      this._alignmentGuideService["start"](
        this._renderContext["unitId"],
        new Map([[_0x42dc71.oKey, _0x42dc71]]),
      ));
    let _0x14cd50 = this._renderContext["scene"];
    (_0x105b40 = _0x14cd50.disableObjectsEvent) == null ||
      _0x105b40.call(_0x14cd50);
    let _0x5e1388 = false,
      _0x290008 = null,
      _0x27ef2a = null,
      _0x20e916 = typeof window > "u" ? null : window,
      _0x34f939 = (_0xc2b3f) => {
        var _0x47139d;
        _0x5e1388 ||
          ((_0x5e1388 = true),
          _0x290008 == null || _0x290008.unsubscribe(),
          _0x27ef2a == null || _0x27ef2a.unsubscribe(),
          _0x20e916 == null ||
            _0x20e916.removeEventListener("pointerup", _0x34f939),
          (_0x47139d = _0x14cd50.enableObjectsEvent) == null ||
            _0x47139d.call(_0x14cd50),
          this._finishTableMoveDrag(_0xc2b3f));
      };
    ((_0x290008 = _0x14cd50.onPointerMove$["subscribeEvent"]((_0x323644) =>
      this._updateTableMoveDrag(_0x323644),
    )),
      (_0x27ef2a = _0x14cd50.onPointerUp$["subscribeEvent"](_0x34f939)),
      _0x20e916 == null ||
        _0x20e916.addEventListener("pointerup", _0x34f939, { once: true }),
      (this._tableMoveDragContext["clickFallbackTimer"] = setTimeout(
        _0x34f939,
        180,
      )),
      this.disposeWithMe({
        dispose: () =>
          _0x290008 == null ? undefined : _0x290008.unsubscribe(),
      }),
      this.disposeWithMe({
        dispose: () =>
          _0x27ef2a == null ? undefined : _0x27ef2a.unsubscribe(),
      }),
      this.disposeWithMe({
        dispose: () =>
          _0x20e916 == null
            ? undefined
            : _0x20e916.removeEventListener("pointerup", _0x34f939),
      }));
  }
  _resolveCurrentTableDrawing(_0x524656) {
    return (
      this._slideDrawingService["getDrawingByParam"]({
        unitId: _0x524656.unitId,
        subUnitId: _0x524656.subUnitId,
        drawingId: _0x524656.drawingId,
      }) ?? _0x524656
    );
  }
  _updateTableMoveDrag(_0x55858d) {
    var _0x18f8b6, _0x3d6420;
    let _0x5a5ab4 = this._tableMoveDragContext;
    if (!_0x5a5ab4) return;
    let _0x185b43 = this._resolvePointerScenePoint(_0x55858d),
      _0x594124 = _0x185b43.x - _0x5a5ab4.startPoint["x"],
      _0x4a5c80 = _0x185b43.y - _0x5a5ab4.startPoint["y"];
    if (!_0x5a5ab4.moved && Math.hypot(_0x594124, _0x4a5c80) < 8) return;
    _0x5a5ab4.moved ||
      ((_0x5a5ab4.clickFallbackTimer &&=
        (clearTimeout(_0x5a5ab4.clickFallbackTimer), null)),
      this._hideContextMenu());
    let _0x2fb59c = _0x185b43.x - _0x5a5ab4.lastPoint["x"],
      _0x4ca0c7 = _0x185b43.y - _0x5a5ab4.lastPoint["y"],
      _0x22dce4 = _0x5a5ab4.object;
    ((_0x22dce4.left += _0x2fb59c),
      (_0x22dce4.top += _0x4ca0c7),
      _0x22dce4.makeDirty(true),
      _0x5a5ab4.activationStage === "table" &&
        this._syncTableMoveTransformerControls(_0x5a5ab4.object),
      (_0x5a5ab4.moved = true),
      (_0x5a5ab4.lastPoint = _0x185b43),
      this._alignmentGuideService["move"](
        this._renderContext["unitId"],
        new Map([[_0x5a5ab4.object["oKey"], _0x5a5ab4.object]]),
      ),
      this._slideDrawingService["refreshTransformNotification"]([
        {
          ...this._resolveCurrentTableDrawing(_0x5a5ab4.drawing),
          transform: {
            ..._0x5a5ab4.startTransform,
            left:
              (_0x5a5ab4.startTransform["left"] ?? 0) +
              _0x22dce4.left -
              _0x5a5ab4.startObjectLeft,
            top:
              (_0x5a5ab4.startTransform["top"] ?? 0) +
              _0x22dce4.top -
              _0x5a5ab4.startObjectTop,
          },
        },
      ]),
      (_0x18f8b6 = (_0x3d6420 = this._renderContext["scene"]).makeDirty) ==
        null || _0x18f8b6.call(_0x3d6420, true));
  }
  _syncTableMoveTransformerControls(_0x27f087) {
    var _0x415519, _0x5b97ee, _0x7243a6, _0x587875;
    let _0x4570e5 =
      (_0x415519 = (_0x5b97ee = this._renderContext["scene"]).getTransformer) ==
      null
        ? undefined
        : _0x415519.call(_0x5b97ee);
    if (!_0x4570e5 || _0x27f087.isInGroup) return;
    let _0x521b93 = _0x4570e5,
      _0x336059 =
        (_0x7243a6 = _0x521b93.getSelectedObjectMap) == null
          ? undefined
          : _0x7243a6.call(_0x521b93);
    if (_0x336059 && !_0x336059.has(_0x27f087.oKey)) {
      var _0x5225d4;
      (_0x5225d4 = _0x521b93.setSelectedControl) == null ||
        _0x5225d4.call(_0x521b93, _0x27f087);
    }
    (_0x587875 = _0x521b93.updateControl) == null || _0x587875.call(_0x521b93);
  }
  _finishTableMoveDrag(_0x5b26d1) {
    _0x5b26d1 && this._updateTableMoveDrag(_0x5b26d1);
    let _0x4ebd67 = this._tableMoveDragContext;
    if (!_0x4ebd67) return;
    if (
      ((this._tableMoveDragContext = null),
      (_0x4ebd67.clickFallbackTimer &&=
        (clearTimeout(_0x4ebd67.clickFallbackTimer), null)),
      !_0x4ebd67.moved)
    ) {
      (this._alignmentGuideService["end"](
        this._renderContext["unitId"],
        new Map([[_0x4ebd67.object["oKey"], _0x4ebd67.object]]),
      ),
        this._selectTable(_0x4ebd67.drawing, _0x4ebd67.object));
      return;
    }
    let _0x20a94c = _0x4ebd67.startTransform["left"] ?? 0,
      _0x4b472d = _0x4ebd67.startTransform["top"] ?? 0,
      _0x523342 = _0x4ebd67.object,
      _0x57a329 = _0x523342.left - _0x4ebd67.startObjectLeft,
      _0x2a836e = _0x523342.top - _0x4ebd67.startObjectTop;
    this._alignmentGuideService["end"](
      this._renderContext["unitId"],
      new Map([[_0x4ebd67.object["oKey"], _0x4ebd67.object]]),
    );
    let _0x4f0114 = this._resolveCurrentTableDrawing(_0x4ebd67.drawing),
      _0x57d4ea = {
        ..._0x4ebd67.startTransform,
        left: _0x20a94c + _0x57a329,
        top: _0x4b472d + _0x2a836e,
      };
    this._commandService["executeCommand"](_0x45bfed.id, {
      patches: [
        {
          unitId: _0x4ebd67.drawing["unitId"],
          subUnitId: _0x4ebd67.drawing["subUnitId"],
          drawingId: _0x4ebd67.drawing["drawingId"],
          element: {
            ..._0x4f0114.element,
            transform: {
              ..._0x4f0114.element["transform"],
              left: _0x57d4ea.left,
              top: _0x57d4ea.top,
            },
          },
          transform: _0x57d4ea,
        },
      ],
    });
  }
  _resolvePointerScenePoint(_0x3c5268, _0x1fd82b) {
    let _0x2764ba = _0x3c5268;
    if (
      _0x1fd82b != null &&
      _0x1fd82b.preferOffset &&
      Xc(_0x2764ba.offsetX) &&
      Xc(_0x2764ba.offsetY)
    )
      return this._resolveScenePoint(_0x2764ba.offsetX, _0x2764ba.offsetY);
    if (Xc(_0x2764ba.clientX) && Xc(_0x2764ba.clientY)) {
      var _0x9074ee, _0x2df938, _0x57a87b;
      let _0x363087 =
        (_0x9074ee = this._renderContext["engine"]) == null ||
        (_0x2df938 = _0x9074ee.getCanvasElement) == null ||
        (_0x2df938 = _0x2df938.call(_0x9074ee)) == null ||
        (_0x57a87b = _0x2df938.getBoundingClientRect) == null
          ? undefined
          : _0x57a87b.call(_0x2df938);
      if (_0x363087)
        return this._resolveScenePoint(
          _0x2764ba.clientX - _0x363087.left,
          _0x2764ba.clientY - _0x363087.top,
        );
    }
    return this._resolveScenePoint(
      _0x2764ba.offsetX ?? 0,
      _0x2764ba.offsetY ?? 0,
    );
  }
  _resolvePointerViewportPoint(_0x7e043d) {
    let _0x5a2651 = _0x7e043d;
    if (Xc(_0x5a2651.clientX) && Xc(_0x5a2651.clientY)) {
      var _0x45e34a, _0x19102d, _0x51eeb6;
      let _0x5dee1c =
        (_0x45e34a = this._renderContext["engine"]) == null ||
        (_0x19102d = _0x45e34a.getCanvasElement) == null ||
        (_0x19102d = _0x19102d.call(_0x45e34a)) == null ||
        (_0x51eeb6 = _0x19102d.getBoundingClientRect) == null
          ? undefined
          : _0x51eeb6.call(_0x19102d);
      return {
        x:
          _0x5a2651.clientX -
          ((_0x5dee1c == null ? undefined : _0x5dee1c.left) ?? 0),
        y:
          _0x5a2651.clientY -
          ((_0x5dee1c == null ? undefined : _0x5dee1c.top) ?? 0),
      };
    }
    return { x: _0x5a2651.offsetX ?? 0, y: _0x5a2651.offsetY ?? 0 };
  }
  _createViewportPointerEvent(_0x199b73, _0x559564) {
    let _0x11b27a = _0x199b73;
    return {
      ..._0x11b27a,
      button: _0x11b27a.button,
      buttons: _0x11b27a.buttons,
      offsetX: _0x559564.x,
      offsetY: _0x559564.y,
      clientX: undefined,
      clientY: undefined,
      preventDefault: () => {
        var _0x2dc052;
        return (_0x2dc052 = _0x11b27a.preventDefault) == null
          ? undefined
          : _0x2dc052.call(_0x11b27a);
      },
      stopPropagation: () => {
        var _0x188c13;
        return (_0x188c13 = _0x11b27a.stopPropagation) == null
          ? undefined
          : _0x188c13.call(_0x11b27a);
      },
    };
  }
  _updateResizeDrag(_0x151149) {
    var _0x229931, _0x4a3dd9, _0x5857a6, _0x328c6c;
    let _0xebef57 = this._resizeDragContext;
    if (!_0xebef57) return;
    let _0x8022cd = this._resolveScenePoint(
        _0x151149.offsetX,
        _0x151149.offsetY,
      ),
      _0x120d36 = this._resolveObjectPoint(
        _0xebef57.object,
        _0x8022cd.x,
        _0x8022cd.y,
      ),
      _0x31dd68 =
        _0xebef57.handle["axis"] === "column"
          ? _0x120d36.x - _0xebef57.startPoint["x"]
          : _0x120d36.y - _0xebef57.startPoint["y"],
      _0x91b034 = kc(
        _0xebef57.table,
        _0xebef57.object["width"],
        _0xebef57.object["height"],
        { ..._0xebef57.handle, delta: _0x31dd68, minSize: 12 },
      );
    ((_0xebef57.pendingTable = _0x91b034),
      (_0x229931 = (_0x4a3dd9 = _0xebef57.object).setPreviewTable) == null ||
        _0x229931.call(_0x4a3dd9, _0x91b034),
      this._setResizeCursor(_0xebef57.handle["axis"]),
      (_0x5857a6 = (_0x328c6c = this._renderContext["scene"]).makeDirty) ==
        null || _0x5857a6.call(_0x328c6c, true));
  }
  _finishResizeDrag(_0x1db6a0) {
    var _0x1963fb, _0x537927;
    let _0x5af3e3 = this._resizeDragContext;
    if (!_0x5af3e3) return;
    this._updateResizeDrag(_0x1db6a0);
    let _0x63080 = _0x5af3e3.pendingTable;
    ((_0x1963fb = (_0x537927 = _0x5af3e3.object).setPreviewTable) == null ||
      _0x1963fb.call(_0x537927, null),
      (this._resizeDragContext = null),
      this._resetResizeCursor(),
      Vc(_0x5af3e3.table, _0x63080, _0x5af3e3.handle["axis"]) &&
        this._commandService["executeCommand"](_0x3f8728.id, {
          unitId: _0x5af3e3.unitId,
          tableId: _0x5af3e3.tableId,
          patch:
            _0x5af3e3.handle["axis"] === "column"
              ? { columns: _0x63080.columns }
              : { rows: _0x63080.rows },
        }));
  }
  _setResizeCursor(_0x4ac76f) {
    ((this._resizeHoverActive = true),
      this._renderContext["scene"].setCursor(
        _0x4ac76f === "column" ? _0x32f3a4.COLUMN_RESIZE : _0x32f3a4.ROW_RESIZE,
      ));
  }
  _resetResizeCursor() {
    this._resizeHoverActive &&
      ((this._resizeHoverActive = false),
      this._renderContext["scene"].resetCursor());
  }
  _isTableTextEditing() {
    var _0x40e26c;
    return (
      ((_0x40e26c = this._tableSelectionService["getSelection"]()) == null
        ? undefined
        : _0x40e26c.kind) === "text"
    );
  }
  _isTableDrawingActive(_0x29484f) {
    var _0x3b2d91, _0x5b0304, _0x583cd2, _0x1359eb, _0x113998;
    let _0x33da75 =
      (_0x3b2d91 = this._tableSelectionService) == null ||
      (_0x5b0304 = _0x3b2d91.getSelection) == null
        ? undefined
        : _0x5b0304.call(_0x3b2d91);
    if (
      (_0x33da75 == null ? undefined : _0x33da75.kind) === "text" &&
      _0x33da75.unitId === _0x29484f.unitId &&
      _0x33da75.subUnitId === _0x29484f.subUnitId &&
      _0x33da75.elementId === _0x29484f.drawingId &&
      _0x29484f.element["type"] === _0x17964d.Table &&
      _0x33da75.tableId === _0x29484f.element["tableId"]
    )
      return true;
    let _0x3d09b9 =
      (_0x583cd2 = this._drawingStateService) == null ||
      (_0x1359eb = _0x583cd2.getSnapshot) == null
        ? undefined
        : _0x1359eb.call(_0x583cd2);
    return (
      !_0x3d09b9 ||
      (((_0x113998 = _0x3d09b9.context) == null
        ? undefined
        : _0x113998.unitId) === _0x29484f.unitId &&
        _0x3d09b9.context["subUnitId"] === _0x29484f.subUnitId &&
        _0x3d09b9.selectedIds["includes"](_0x29484f.drawingId))
    );
  }
  _isTableInteractionInProgress(_0x3f2ece) {
    var _0x474473, _0x36cb3d;
    let _0x2b9e0d = (_0x41191f) =>
        _0x41191f
          ? _0x41191f.drawing
            ? _0x41191f.drawing["unitId"] === _0x3f2ece.unitId &&
              _0x41191f.drawing["subUnitId"] === _0x3f2ece.subUnitId &&
              _0x41191f.drawing["drawingId"] === _0x3f2ece.elementId
            : _0x41191f.unitId === _0x3f2ece.unitId &&
              _0x41191f.tableId === _0x3f2ece.tableId
          : false,
      _0x1bb892 =
        ((_0x474473 = (_0x36cb3d = this._tableSelectionService)
          .isTableInternalInteractionActive) == null
          ? undefined
          : _0x474473.call(_0x36cb3d)) ?? false;
    return (
      _0x3f2ece.kind === "text" ||
      _0x1bb892 ||
      _0x2b9e0d(this._rangeDragContext) ||
      _0x2b9e0d(this._pendingStage1TableDragContext) ||
      _0x2b9e0d(this._tableMoveDragContext) ||
      _0x2b9e0d(this._resizeDragContext) ||
      _0x2b9e0d(this._pendingHeaderSelection) ||
      _0x2b9e0d(this._rowColumnMoveState)
    );
  }
  _selectResolvedCell(_0x577db4, _0x2e62a6, _0x477c8d) {
    var _0x1aa472, _0x3610ce, _0x59574c;
    if (_0x577db4.element["type"] !== _0x17964d.Table) return;
    this._enterCellStage();
    let _0x47b91a = this._tableSelectionService["selectCell"]({
      unitId: _0x577db4.unitId,
      subUnitId: _0x577db4.subUnitId,
      elementId: _0x577db4.drawingId,
      tableId: _0x577db4.element["tableId"],
      row: _0x477c8d.row,
      column: _0x477c8d.column,
    });
    ((_0x1aa472 = _0x2e62a6.setTableSelection) == null ||
      _0x1aa472.call(_0x2e62a6, {
        kind: Q(_0x47b91a.kind),
        ranges: _0x47b91a.ranges,
        active: { row: _0x477c8d.row, column: _0x477c8d.column },
      }),
      this._setTableKeyboardFocus(true),
      (_0x3610ce = (_0x59574c = this._renderContext["scene"]).makeDirty) ==
        null || _0x3610ce.call(_0x59574c, true));
  }
  _syncTableSelectionToObject(
    _0x411136,
    _0x55cfe1,
    _0x1ff005 = this._tableSelectionService["getSelection"](),
  ) {
    var _0x32339c, _0xf228c9;
    if (
      !_0x1ff005 ||
      _0x411136.element["type"] !== _0x17964d.Table ||
      _0x1ff005.unitId !== _0x411136.unitId ||
      _0x1ff005.subUnitId !== _0x411136.subUnitId ||
      _0x1ff005.elementId !== _0x411136.drawingId ||
      _0x1ff005.tableId !== _0x411136.element["tableId"]
    )
      return;
    let _0xe6c98e = _0x1ff005.focus ?? _0x1ff005.anchor ?? Fc(_0x1ff005.ranges);
    ((_0x32339c = _0x55cfe1.setTableSelection) == null ||
      _0x32339c.call(_0x55cfe1, {
        kind: Q(_0x1ff005.kind),
        ranges: _0x1ff005.ranges,
        active: _0xe6c98e,
      }),
      (_0xf228c9 = _0x55cfe1.setEditingCell) == null ||
        _0xf228c9.call(
          _0x55cfe1,
          _0x1ff005.kind === "text" ? (_0xe6c98e ?? null) : null,
        ));
  }
  _selectRows(_0x5b52e8, _0xde745f, _0x4c09cc, _0x203341) {
    var _0x2b3a02, _0x59964b, _0x7522f7;
    if (_0x5b52e8.element["type"] !== _0x17964d.Table) return;
    let _0x39233a = this._tableResourceService["getTable"](
      _0x5b52e8.unitId,
      _0x5b52e8.element["tableId"],
    );
    if (!_0x39233a) return;
    this._enterCellStage();
    let _0x1cdf3e = _0x2f16a1(_0x39233a, {
        startRow: _0x4c09cc,
        endRow: _0x203341,
        startColumn: 0,
        endColumn: Math.max(0, _0x39233a.columns["length"] - 1),
      }),
      _0x2a8b6d = this._tableSelectionService["selectRows"]({
        unitId: _0x5b52e8.unitId,
        subUnitId: _0x5b52e8.subUnitId,
        elementId: _0x5b52e8.drawingId,
        tableId: _0x5b52e8.element["tableId"],
        startRow: _0x1cdf3e.startRow,
        endRow: _0x1cdf3e.endRow,
        columnCount: _0x39233a.columns["length"],
      });
    ((_0x2b3a02 = _0xde745f.setTableSelection) == null ||
      _0x2b3a02.call(_0xde745f, {
        kind: Q(_0x2a8b6d.kind),
        ranges: _0x2a8b6d.ranges,
      }),
      this._setTableKeyboardFocus(true),
      (_0x59964b = (_0x7522f7 = this._renderContext["scene"]).makeDirty) ==
        null || _0x59964b.call(_0x7522f7, true));
  }
  _selectColumns(_0x2453d6, _0x51a106, _0x2bcb1a, _0x1b8646) {
    var _0x579587, _0x48c341, _0x4e2336;
    if (_0x2453d6.element["type"] !== _0x17964d.Table) return;
    let _0x494c9a = this._tableResourceService["getTable"](
      _0x2453d6.unitId,
      _0x2453d6.element["tableId"],
    );
    if (!_0x494c9a) return;
    this._enterCellStage();
    let _0x4f8c87 = _0x2f16a1(_0x494c9a, {
        startRow: 0,
        endRow: Math.max(0, _0x494c9a.rows["length"] - 1),
        startColumn: _0x2bcb1a,
        endColumn: _0x1b8646,
      }),
      _0x142df0 = this._tableSelectionService["selectColumns"]({
        unitId: _0x2453d6.unitId,
        subUnitId: _0x2453d6.subUnitId,
        elementId: _0x2453d6.drawingId,
        tableId: _0x2453d6.element["tableId"],
        startColumn: _0x4f8c87.startColumn,
        endColumn: _0x4f8c87.endColumn,
        rowCount: _0x494c9a.rows["length"],
      });
    ((_0x579587 = _0x51a106.setTableSelection) == null ||
      _0x579587.call(_0x51a106, {
        kind: Q(_0x142df0.kind),
        ranges: _0x142df0.ranges,
      }),
      this._setTableKeyboardFocus(true),
      (_0x48c341 = (_0x4e2336 = this._renderContext["scene"]).makeDirty) ==
        null || _0x48c341.call(_0x4e2336, true));
  }
  _selectTable(_0x2e2c5c, _0x14b20b) {
    var _0x30a643, _0x203659, _0x592041;
    if (_0x2e2c5c.element["type"] !== _0x17964d.Table) return;
    let _0xf25a3c = this._tableResourceService["getTable"](
      _0x2e2c5c.unitId,
      _0x2e2c5c.element["tableId"],
    );
    if (!_0xf25a3c) return;
    this._enterCellStage();
    let _0x29bd86 = this._tableSelectionService["selectTable"]({
      unitId: _0x2e2c5c.unitId,
      subUnitId: _0x2e2c5c.subUnitId,
      elementId: _0x2e2c5c.drawingId,
      tableId: _0x2e2c5c.element["tableId"],
      rowCount: _0xf25a3c.rows["length"],
      columnCount: _0xf25a3c.columns["length"],
    });
    ((_0x30a643 = _0x14b20b.setTableSelection) == null ||
      _0x30a643.call(_0x14b20b, {
        kind: Q(_0x29bd86.kind),
        ranges: _0x29bd86.ranges,
      }),
      this._setTableKeyboardFocus(true),
      (_0x203659 = (_0x592041 = this._renderContext["scene"]).makeDirty) ==
        null || _0x203659.call(_0x592041, true));
  }
  _activateTableObject(_0x341cbd) {
    var _0x3adf66, _0xeb9198, _0x29beb7;
    ((this._tableActivationStage = "table"),
      (_0x3adf66 = _0x341cbd.setTableSelection) == null ||
        _0x3adf66.call(_0x341cbd, { ranges: [] }),
      this._setTableKeyboardFocus(false),
      this._setTableObjectKeyboardFocus(true),
      (_0xeb9198 = (_0x29beb7 = this._renderContext["scene"]).makeDirty) ==
        null || _0xeb9198.call(_0x29beb7, true));
  }
  _enterCellStage() {
    (this._tableActivationStage !== "cell" &&
      (this._tableActivationStage = "cell"),
      this._setTableObjectKeyboardFocus(false),
      this._hideTableTransformerControls());
  }
  _syncActivationStageFromSelection(_0x1b858d) {
    var _0x1cc1c9;
    let _0x78708b = !!(
      (_0x1cc1c9 = _0x1b858d.ranges) != null && _0x1cc1c9.length
    );
    ((this._tableActivationStage = _0x78708b ? "cell" : "table"),
      this._setTableKeyboardFocus(_0x78708b && _0x1b858d.kind !== "text"),
      this._setTableObjectKeyboardFocus(!_0x78708b),
      _0x78708b && this._hideTableTransformerControls());
  }
  _shouldShowTransformerForDrawing(_0x41fc4c) {
    var _0x5e33ee, _0xbfe3d5;
    if (_0x41fc4c.element["type"] !== _0x17964d.Table) return true;
    let _0x4b64d6 = this._tableSelectionService["getSelection"]();
    return !(
      (_0x4b64d6 &&
        _0x4b64d6.unitId === _0x41fc4c.unitId &&
        _0x4b64d6.subUnitId === _0x41fc4c.subUnitId &&
        _0x4b64d6.elementId === _0x41fc4c.drawingId &&
        (_0x4b64d6.kind === "text" ||
          ((_0x5e33ee = _0x4b64d6.ranges) != null && _0x5e33ee.length))) ||
      (((_0xbfe3d5 = this._lastActiveTableContext) == null
        ? undefined
        : _0xbfe3d5.unitId) === _0x41fc4c.unitId &&
        this._lastActiveTableContext["subUnitId"] === _0x41fc4c.subUnitId &&
        this._lastActiveTableContext["elementId"] === _0x41fc4c.drawingId &&
        this._tableActivationStage === "cell")
    );
  }
  _hideTableTransformerControls() {
    var _0x5f4896, _0x4ad27e, _0x317598, _0x5dc5c3, _0x1f329a;
    let _0x1036f5 =
      (_0x5f4896 = (_0x4ad27e = this._renderContext["scene"]).getTransformer) ==
      null
        ? undefined
        : _0x5f4896.call(_0x4ad27e);
    (_0x1036f5 == null ||
      (_0x317598 = _0x1036f5.clearSelectedObjects) == null ||
      _0x317598.call(_0x1036f5),
      (_0x5dc5c3 = (_0x1f329a = this._renderContext["scene"]).makeDirty) ==
        null || _0x5dc5c3.call(_0x1f329a, true));
  }
  _handleKeyboardAction(_0x337f66) {
    var _0x523145, _0x10dc4b;
    if (this._isTableTextEditing()) {
      let _0x104cfd = this._editorUIService["getSession"](),
        _0xcb3a78 = Mc(_0x337f66);
      return !_0x104cfd || !_0xcb3a78
        ? false
        : this._handleCellEditorKeyDown(
            _0xcb3a78,
            _0x104cfd.context,
            this._editorSessionId,
          );
    }
    if (_0x337f66 === "edit-cell") return this._openSelectionEditor();
    let _0x573036 = this._resolveActiveSelectionForKeyboard();
    if (!_0x573036 || _0x573036.drawing["element"].type !== _0x17964d.Table)
      return false;
    if (_0x337f66 === "clear-cells")
      return this._clearSelectedCellContents(_0x573036);
    let _0x51e08b = ua(_0x337f66);
    if (!_0x51e08b) return false;
    if (_0x51e08b.extend) {
      var _0x1738f1, _0x33a234;
      let _0x4ecdf9 = _0x573036.selection["anchor"] ?? _0x573036.focus,
        _0x182edd = da(
          _0x573036.focus,
          _0x51e08b,
          _0x573036.table["rows"].length,
          _0x573036.table["columns"].length,
        ),
        _0x458b15 = _0x2f16a1(_0x573036.table, {
          startRow: _0x4ecdf9.row,
          startColumn: _0x4ecdf9.column,
          endRow: _0x182edd.row,
          endColumn: _0x182edd.column,
        }),
        _0x3077bc = this._tableSelectionService["selectRange"]({
          unitId: _0x573036.drawing["unitId"],
          subUnitId: _0x573036.drawing["subUnitId"],
          elementId: _0x573036.drawing["drawingId"],
          tableId: _0x573036.drawing["element"].tableId,
          ..._0x458b15,
        });
      (_0x1738f1 = (_0x33a234 = _0x573036.object).setTableSelection) == null ||
        _0x1738f1.call(_0x33a234, {
          kind: Q(_0x3077bc.kind),
          ranges: _0x3077bc.ranges,
          active: _0x182edd,
        });
    } else {
      var _0x2ba47a, _0x36e0c0;
      let _0x51e122 = da(
          _0x573036.focus,
          _0x51e08b,
          _0x573036.table["rows"].length,
          _0x573036.table["columns"].length,
        ),
        _0x547426 = this._tableSelectionService["selectCell"]({
          unitId: _0x573036.drawing["unitId"],
          subUnitId: _0x573036.drawing["subUnitId"],
          elementId: _0x573036.drawing["drawingId"],
          tableId: _0x573036.drawing["element"].tableId,
          row: _0x51e122.row,
          column: _0x51e122.column,
        });
      (_0x2ba47a = (_0x36e0c0 = _0x573036.object).setTableSelection) == null ||
        _0x2ba47a.call(_0x36e0c0, {
          kind: Q(_0x547426.kind),
          ranges: _0x547426.ranges,
          active: _0x51e122,
        });
    }
    return (
      this._setTableKeyboardFocus(true),
      (_0x523145 = (_0x10dc4b = this._renderContext["scene"]).makeDirty) ==
        null || _0x523145.call(_0x10dc4b, true),
      true
    );
  }
  _resolveTableClipboardTarget(_0x5c7f0d) {
    if (
      _0x5c7f0d.defaultPrevented ||
      !this._contextService["getContextValue"]("FOCUSING_SLIDE_TABLE") ||
      this._isTableTextEditing()
    )
      return null;
    let _0x1a760f = this._resolveActiveSelectionForKeyboard();
    return (_0x1a760f == null ? undefined : _0x1a760f.selection["unitId"]) ===
      this._renderContext["unitId"]
      ? _0x1a760f
      : null;
  }
  _canCopyTable(_0x35e676) {
    return _0x100a32(
      this._permissionService,
      _0x35e676.unitId,
      _0x35e676.unitId,
      _0x46d205.Copy,
    );
  }
  async _commitClipboardPatch(_0x295114, _0x2ccdcd) {
    var _0x228b75, _0x100fe1, _0x33ca9f, _0xc811ec;
    return (await this._commandService["executeCommand"](_0x3f8728.id, {
      unitId: _0x295114.selection["unitId"],
      tableId: _0x295114.selection["tableId"],
      patch: _0x2ccdcd,
    }))
      ? ((_0x228b75 = (_0x100fe1 = _0x295114.object).setTableSelection) ==
          null ||
          _0x228b75.call(_0x100fe1, {
            kind: Q(_0x295114.selection["kind"]),
            ranges: _0x295114.selection["ranges"],
            active: _0x295114.selection["focus"],
          }),
        this._setTableKeyboardFocus(true),
        (_0x33ca9f = (_0xc811ec = this._renderContext["scene"]).makeDirty) ==
          null || _0x33ca9f.call(_0xc811ec, true),
        true)
      : false;
  }
  async _insertClipboardImages(_0xf0c515, _0x45a7c0 = 0) {
    for (let _0x347457 = 0; _0x347457 < _0xf0c515.length; _0x347457++) {
      let _0x4fee14 = _0xf0c515[_0x347457],
        _0xd1400 = await _0x39921d(_0x4fee14);
      if (_0xd1400) {
        let _0x2ad927 = (_0x45a7c0 + _0x347457) * 32;
        _0x2ad927 === 0
          ? await this._slideInsertService["insertImage"](_0xd1400)
          : await this._slideInsertService["insertImage"](_0xd1400, {
              offset: { x: _0x2ad927, y: _0x2ad927 },
            });
      }
    }
  }
  _handleKeyboardInput(_0x59da63) {
    return _0x59da63.kind === "composition-start"
      ? this._openSelectionEditor()
      : this._isTableTextEditing() || !_0x59da63.text
        ? false
        : this._openSelectionEditor({ initialText: _0x59da63.text });
  }
  _clearSelectedCellContents(_0x1fa2c5) {
    var _0x3615b4, _0x2898fc, _0x4eaa24, _0x29877b;
    let _0x508dac = uc(_0x1fa2c5.table, _0x1fa2c5.selection);
    return (
      _0x508dac &&
        this._commandService["executeCommand"](_0x3f8728.id, {
          unitId: _0x1fa2c5.selection["unitId"],
          tableId: _0x1fa2c5.selection["tableId"],
          patch: _0x508dac,
        }),
      (_0x3615b4 = (_0x2898fc = _0x1fa2c5.object).setTableSelection) == null ||
        _0x3615b4.call(_0x2898fc, {
          kind: Q(_0x1fa2c5.selection["kind"]),
          ranges: _0x1fa2c5.selection["ranges"],
          active: _0x1fa2c5.selection["focus"],
        }),
      this._setTableKeyboardFocus(true),
      (_0x4eaa24 = (_0x29877b = this._renderContext["scene"]).makeDirty) ==
        null || _0x4eaa24.call(_0x29877b, true),
      true
    );
  }
  _openSelectionEditor(_0x3ca51b) {
    let _0x197abf = this._resolveActiveSelectionForKeyboard();
    if (!_0x197abf || _0x197abf.drawing["element"].type !== _0x17964d.Table)
      return false;
    let _0x5e0aec = _0x509c52(_0x197abf.table),
      _0x34b0ca =
        _0x5e0aec.cells["find"](
          (_0x60cd5) =>
            _0x60cd5.row === _0x197abf.focus["row"] &&
            _0x60cd5.column === _0x197abf.focus["column"] &&
            !_0x60cd5.hidden,
        ) ??
        _0x5e0aec.cells["find"](
          (_0x3c7723) =>
            !_0x3c7723.hidden &&
            _0x197abf.focus["row"] >= _0x3c7723.row &&
            _0x197abf.focus["row"] < _0x3c7723.row + _0x3c7723.rowSpan &&
            _0x197abf.focus["column"] >= _0x3c7723.column &&
            _0x197abf.focus["column"] < _0x3c7723.column + _0x3c7723.columnSpan,
        );
    return _0x34b0ca
      ? (this._openCellEditor(
          _0x197abf.drawing,
          {
            table: _0x197abf.table,
            model: _0x5e0aec,
            cell: _0x34b0ca,
            row: _0x34b0ca.row,
            column: _0x34b0ca.column,
            object: _0x197abf.object,
          },
          _0x3ca51b,
        ),
        true)
      : false;
  }
  _resolveActiveSelectionForKeyboard() {
    let _0x114ec8 = this._tableSelectionService["getSelection"](),
      _0x1a1360 = _0x114ec8 == null ? undefined : _0x114ec8.ranges[0];
    if (!_0x114ec8 || !_0x1a1360 || _0x114ec8.kind === "text") return null;
    let _0x3a6835 = this._resolveSelectedTableDrawing(
      _0x114ec8.unitId,
      _0x114ec8.subUnitId,
      _0x114ec8.elementId,
    );
    if (
      !_0x3a6835 ||
      _0x3a6835.element["type"] !== _0x17964d.Table ||
      !this._isTableDrawingActive(_0x3a6835)
    )
      return null;
    let _0x381af6 = this._tableResourceService["getTable"](
        _0x114ec8.unitId,
        _0x114ec8.tableId,
      ),
      _0x781684 = this._renderContext["scene"].getObject(
        _0x4b5215(_0x114ec8.unitId, _0x114ec8.subUnitId, _0x114ec8.elementId),
      );
    return !_0x381af6 || !_0x781684
      ? null
      : {
          drawing: _0x3a6835,
          object: _0x781684,
          table: _0x381af6,
          selection: _0x114ec8,
          focus: fa(
            _0x114ec8.focus ?? {
              row: Math.min(_0x1a1360.startRow, _0x1a1360.endRow),
              column: Math.min(_0x1a1360.startColumn, _0x1a1360.endColumn),
            },
            _0x381af6.rows["length"],
            _0x381af6.columns["length"],
          ),
        };
  }
  _setTableKeyboardFocus(_0x3c293a) {
    this._contextService["setContextValue"]("FOCUSING_SLIDE_TABLE", _0x3c293a);
  }
  _setTableObjectKeyboardFocus(_0x381271) {
    this._contextService["setContextValue"](
      "FOCUSING_SLIDE_TABLE_OBJECT",
      _0x381271,
    );
  }
  _updateRangeDrag(_0x1185cc) {
    let _0x29bd2f = this._rangeDragContext;
    if (!_0x29bd2f || _0x29bd2f.drawing["element"].type !== _0x17964d.Table)
      return;
    if (
      "buttons" in _0x1185cc &&
      _0x1185cc.buttons !== undefined &&
      (_0x1185cc.buttons & 1) != 1
    ) {
      this._finishRangeDrag();
      return;
    }
    let _0x2ca2df = this._resolvePointerScenePoint(_0x1185cc),
      _0x5550f4 = this._resolveCellHit(
        _0x29bd2f.drawing,
        _0x29bd2f.objectKey,
        _0x2ca2df.x,
        _0x2ca2df.y,
      );
    _0x5550f4 &&
      this._applyRangeDragSelection(_0x29bd2f, {
        row: _0x5550f4.row,
        column: _0x5550f4.column,
      });
  }
  _applyRangeDragSelection(_0x41ddcc, _0x5569ca) {
    var _0x5e1b28, _0x2da838, _0x11d6e4, _0x1cf5f2, _0x4d8838;
    if (
      _0x41ddcc.drawing["element"].type !== _0x17964d.Table ||
      (_0x41ddcc.current["row"] === _0x5569ca.row &&
        _0x41ddcc.current["column"] === _0x5569ca.column &&
        ((_0x5e1b28 = this._tableSelectionService["getSelection"]()) == null
          ? undefined
          : _0x5e1b28.kind) === "range")
    )
      return;
    _0x41ddcc.current = _0x5569ca;
    let _0x425692 = _0x2f16a1(_0x41ddcc.table, {
        startRow: _0x41ddcc.anchor["row"],
        startColumn: _0x41ddcc.anchor["column"],
        endRow: _0x5569ca.row,
        endColumn: _0x5569ca.column,
      }),
      _0xb6a264 = this._tableSelectionService["selectRange"]({
        unitId: _0x41ddcc.drawing["unitId"],
        subUnitId: _0x41ddcc.drawing["subUnitId"],
        elementId: _0x41ddcc.drawing["drawingId"],
        tableId: _0x41ddcc.drawing["element"].tableId,
        ..._0x425692,
      });
    ((_0x2da838 = (_0x11d6e4 = _0x41ddcc.object).setTableSelection) == null ||
      _0x2da838.call(_0x11d6e4, {
        kind: Q(_0xb6a264.kind),
        ranges: _0xb6a264.ranges,
        active: _0x5569ca,
      }),
      this._setTableKeyboardFocus(true),
      (_0x1cf5f2 = (_0x4d8838 = this._renderContext["scene"]).makeDirty) ==
        null || _0x1cf5f2.call(_0x4d8838, true));
  }
  _resetTableInteraction() {
    var _0x10ba6a,
      _0x57d3ec,
      _0x53f7a9,
      _0x7f4881,
      _0x219bcb,
      _0x32489d,
      _0x5cb7c9;
    let _0x3bed34 = this._tableSelectionService["getSelection"](),
      _0x2695e7 = [
        _0x3bed34
          ? {
              unitId: _0x3bed34.unitId,
              subUnitId: _0x3bed34.subUnitId,
              elementId: _0x3bed34.elementId,
            }
          : null,
        this._lastActiveTableContext,
      ].filter((_0x1bda78) => !!_0x1bda78),
      _0x66705d = _0x2695e7.filter(
        (_0xa352e7, _0x333610) =>
          _0x2695e7.findIndex(
            (_0x4fa823) =>
              _0x4fa823.unitId === _0xa352e7.unitId &&
              _0x4fa823.subUnitId === _0xa352e7.subUnitId &&
              _0x4fa823.elementId === _0xa352e7.elementId,
          ) === _0x333610,
      );
    ((_0x10ba6a = this._editorDisposable) == null || _0x10ba6a.dispose(),
      (this._editorDisposable = null),
      (this._editorSessionId += 1),
      (this._activeEditorContextKey = null),
      this._finishRangeDrag(),
      (this._rangeDragContext = null),
      this._finishPendingStage1TableDrag({ focusCell: false }),
      (this._hoveredTrigger = null),
      this._finishHeaderSelectionDrag(undefined, { commitMove: false }),
      (this._tableActivationStage = null),
      (this._lastActiveTableContext = null),
      (_0x57d3ec = this._tableMoveDragContext) != null &&
        _0x57d3ec.clickFallbackTimer &&
        clearTimeout(this._tableMoveDragContext["clickFallbackTimer"]),
      this._tableMoveDragContext &&
        this._alignmentGuideService["end"](
          this._renderContext["unitId"],
          new Map([
            [
              this._tableMoveDragContext["object"].oKey,
              this._tableMoveDragContext["object"],
            ],
          ]),
        ),
      (this._tableMoveDragContext = null),
      (_0x53f7a9 = this._resizeDragContext) == null ||
        (_0x219bcb = (_0x7f4881 = _0x53f7a9.object).setPreviewTable) == null ||
        _0x219bcb.call(_0x7f4881, null),
      (this._resizeDragContext = null),
      this._resetResizeCursor(),
      this._setStructuralCursor(false),
      this._setTableKeyboardFocus(false),
      this._setTableObjectKeyboardFocus(false),
      _0x66705d.forEach((_0x23d4c2) => {
        var _0x89b2aa, _0x317980, _0x2d48c6, _0x32d115, _0x26a4a8, _0x582f1f;
        let _0x27599d = this._renderContext["scene"].getObject(
          _0x4b5215(_0x23d4c2.unitId, _0x23d4c2.subUnitId, _0x23d4c2.elementId),
        );
        (_0x27599d == null ||
          (_0x89b2aa = _0x27599d.setEditingCell) == null ||
          _0x89b2aa.call(_0x27599d, null),
          _0x27599d == null ||
            (_0x317980 = _0x27599d.setPreviewTable) == null ||
            _0x317980.call(_0x27599d, null),
          _0x27599d == null ||
            (_0x2d48c6 = _0x27599d.setTableSelection) == null ||
            _0x2d48c6.call(_0x27599d, null),
          _0x27599d == null ||
            (_0x32d115 = _0x27599d.setTableCellHover) == null ||
            _0x32d115.call(_0x27599d, null),
          _0x27599d == null ||
            (_0x26a4a8 = _0x27599d.setTableControlState) == null ||
            _0x26a4a8.call(_0x27599d, null),
          _0x27599d == null ||
            (_0x582f1f = _0x27599d.setTableControlHover) == null ||
            _0x582f1f.call(_0x27599d, null));
      }),
      this._tableSelectionService["clear"](),
      (_0x32489d = (_0x5cb7c9 = this._renderContext["scene"]).makeDirty) ==
        null || _0x32489d.call(_0x5cb7c9, true));
  }
  _handleDoubleClick(_0x656d5e) {
    if (
      _0x656d5e.drawing["unitId"] !== this._renderContext["unitId"] ||
      _0x656d5e.drawing["element"].type !== _0x17964d.Table ||
      !this._isTableDrawingActive(_0x656d5e.drawing)
    )
      return;
    let _0x28dd5e = this._resolveCellHit(
      _0x656d5e.drawing,
      _0x656d5e.oKey,
      _0x656d5e.offsetX,
      _0x656d5e.offsetY,
    );
    _0x28dd5e && this._openCellEditor(_0x656d5e.drawing, _0x28dd5e);
  }
  _openCellEditor(_0x2ad66f, _0x22c095, _0x516de4) {
    var _0x2097b2, _0x47e418, _0x52c013, _0x1459aa;
    if (_0x2ad66f.element["type"] !== _0x17964d.Table) return;
    let _0x5cdd64 = _0x2ad66f.element,
      _0x3d5ff5 = {
        unitId: _0x2ad66f.unitId,
        subUnitId: _0x2ad66f.subUnitId,
        elementId: _0x2ad66f.drawingId,
        tableId: _0x5cdd64.tableId,
        row: _0x22c095.row,
        column: _0x22c095.column,
        drawingTransform: _0x2ad66f.transform,
      },
      _0x52ae37 =
        (_0x516de4 == null ? undefined : _0x516de4.initialText) === undefined
          ? this._resolveCellDocumentData(
              _0x22c095.table,
              _0x22c095.row,
              _0x22c095.column,
            )
          : Ws(
              this._resolveCellDocumentData(
                _0x22c095.table,
                _0x22c095.row,
                _0x22c095.column,
              ),
              _0x516de4.initialText,
            ),
      _0x300733 = this._resolveEditorLayout(
        _0x22c095.object,
        _0x22c095.model,
        _0x22c095.cell,
        _0x52ae37,
      );
    if (!_0x300733) return;
    this._enterCellStage();
    let _0x2eee4a = Hc(_0x3d5ff5);
    this._hideContextMenu();
    let _0x535787 = (this._editorSessionId ?? 0) + 1;
    if (
      ((this._editorSessionId = _0x535787),
      (this._activeEditorContextKey = _0x2eee4a),
      _0x516de4 != null && _0x516de4.handoffCurrent)
    ) {
      var _0x5d33c4, _0x5e3795;
      let _0x491537 =
        (_0x5d33c4 = (_0x5e3795 = this._editorUIService).getSession) == null
          ? undefined
          : _0x5d33c4.call(_0x5e3795);
      this._editorUIService["complete"](
        _0x491537 == null ? undefined : _0x491537.documentData,
        _0x491537 == null ? undefined : _0x491537.measurement,
        _0x491537 == null ? undefined : _0x491537.sessionId,
      );
    } else this._editorUIService["complete"]();
    (_0x2097b2 = (_0x47e418 = _0x22c095.object).setEditingCell) == null ||
      _0x2097b2.call(_0x47e418, {
        row: _0x22c095.cell["row"],
        column: _0x22c095.cell["column"],
      });
    let _0x568a4e = this._tableSelectionService["enterTextMode"](_0x3d5ff5);
    ((_0x52c013 = (_0x1459aa = _0x22c095.object).setTableSelection) == null ||
      _0x52c013.call(_0x1459aa, {
        kind: Q(_0x568a4e.kind),
        ranges: _0x568a4e.ranges,
        active: { row: _0x22c095.row, column: _0x22c095.column },
      }),
      this._makeSceneDirty(),
      this._setTableKeyboardFocus(false),
      (this._editorDisposable = this._editorUIService["open"]({
        editorId: Tc,
        documentData: _0x52ae37,
        layout: _0x300733,
        context: _0x3d5ff5,
        appearance: "table-cell",
        autoFocus: true,
        hideFloatingToolbarAlignment: true,
        cellFillColor: Jc(_0x22c095.table, _0x22c095.cell),
        isSingle: false,
        onCellFillColorChange: (_0x519aed, _0x3ff532) => {
          this._commitCellStyle(_0x3ff532, { fill: qc(_0x519aed) });
        },
        onChange: (_0x383a35, _0x1a8bbc, _0x3e91ab) => {
          this._autoGrowCellEditorRowHeight(_0x1a8bbc, _0x3e91ab, _0x535787);
        },
        onComplete: (_0x31802b, _0xe3d7b4, _0x24b332) => {
          this._commitCellDocument(_0x31802b, _0xe3d7b4, _0x24b332, _0x535787);
        },
        onCancel: (_0x3683d7) => {
          this._finishCellEditing(_0x3683d7, _0x535787);
        },
        onPointerDown: (_0x103aad, _0x2fb62b) =>
          this._handleCellEditorPointerDown(_0x103aad, _0x2fb62b, _0x535787),
        onKeyDown: (_0x1bb1c1, _0x115ea9) =>
          this._handleCellEditorKeyDown(_0x1bb1c1, _0x115ea9, _0x535787),
      })));
  }
  _handleCellEditorPointerDown(_0x796f86, _0x1aff94, _0x4b559e) {
    var _0x258e8e;
    if (!_0x1aff94 || !this._isCurrentEditorSession(_0x1aff94, _0x4b559e))
      return false;
    let _0x4cf344 = this._tableResourceService["getTable"](
        _0x1aff94.unitId,
        _0x1aff94.tableId,
      ),
      _0x3dea38 = this._resolveSelectedTableDrawing(
        _0x1aff94.unitId,
        _0x1aff94.subUnitId,
        _0x1aff94.elementId,
      );
    if (
      !_0x4cf344 ||
      !_0x3dea38 ||
      _0x3dea38.element["type"] !== _0x17964d.Table
    )
      return false;
    let _0x5f318e = _0x4b5215(
        _0x1aff94.unitId,
        _0x1aff94.subUnitId,
        _0x1aff94.elementId,
      ),
      _0x27d8cb = this._renderContext["scene"].getObject(_0x5f318e);
    if (!_0x27d8cb) return false;
    let _0x4de515 = this._resolvePointerScenePoint(_0x796f86),
      _0x2ee49e = this._resolveCellHit(
        _0x3dea38,
        _0x5f318e,
        _0x4de515.x,
        _0x4de515.y,
      );
    return !_0x2ee49e ||
      (_0x2ee49e.row === _0x1aff94.row && _0x2ee49e.column === _0x1aff94.column)
      ? false
      : ((_0x258e8e = _0x796f86.stopTextSelectionDrag) == null ||
          _0x258e8e.call(_0x796f86),
        this._openCellEditor(
          _0x3dea38,
          {
            table: _0x4cf344,
            model: _0x2ee49e.model,
            cell: _0x2ee49e.cell,
            row: _0x2ee49e.row,
            column: _0x2ee49e.column,
            object: _0x27d8cb,
          },
          { handoffCurrent: true },
        ),
        true);
  }
  _handleCellEditorKeyDown(_0x16ba97, _0x21823e, _0x5b2cad) {
    var _0x2004bf;
    if (!_0x21823e || !this._isCurrentEditorSession(_0x21823e, _0x5b2cad))
      return false;
    let _0x2429ee = jc(_0x16ba97);
    if (!_0x2429ee) return false;
    let _0x197c2d = this._tableResourceService["getTable"](
        _0x21823e.unitId,
        _0x21823e.tableId,
      ),
      _0x4f5602 = this._resolveSelectedTableDrawing(
        _0x21823e.unitId,
        _0x21823e.subUnitId,
        _0x21823e.elementId,
      );
    if (
      !_0x197c2d ||
      !_0x4f5602 ||
      _0x4f5602.element["type"] !== _0x17964d.Table
    )
      return false;
    let _0x48e821 = da(
      { row: _0x21823e.row, column: _0x21823e.column },
      {
        rowDelta: _0x2429ee.rowDelta,
        columnDelta: _0x2429ee.columnDelta,
        wrap: _0x2429ee.wrap,
      },
      _0x197c2d.rows["length"],
      _0x197c2d.columns["length"],
    );
    if (
      _0x48e821.row === _0x21823e.row &&
      _0x48e821.column === _0x21823e.column
    )
      return false;
    let _0xe95083 = _0x4b5215(
        _0x21823e.unitId,
        _0x21823e.subUnitId,
        _0x21823e.elementId,
      ),
      _0x31b330 = this._renderContext["scene"].getObject(_0xe95083);
    if (!_0x31b330) return false;
    let _0x335915 = _0x509c52(_0x197c2d),
      _0x467634 =
        _0x335915.cells["find"](
          (_0x4ab5b1) =>
            _0x4ab5b1.row === _0x48e821.row &&
            _0x4ab5b1.column === _0x48e821.column &&
            !_0x4ab5b1.hidden,
        ) ??
        _0x335915.cells["find"](
          (_0x46f43f) =>
            !_0x46f43f.hidden &&
            _0x48e821.row >= _0x46f43f.row &&
            _0x48e821.row < _0x46f43f.row + _0x46f43f.rowSpan &&
            _0x48e821.column >= _0x46f43f.column &&
            _0x48e821.column < _0x46f43f.column + _0x46f43f.columnSpan,
        );
    if (!_0x467634) return false;
    let _0x1d3a14 = this._editorUIService["getSession"]();
    if (!_0x1d3a14) return false;
    (_0x16ba97.preventDefault(),
      _0x16ba97.stopPropagation(),
      this._editorUIService["complete"](
        _0x1d3a14.documentData,
        _0x1d3a14.measurement,
        _0x1d3a14.sessionId,
      ));
    let _0x2f1104 = this._tableSelectionService["selectCell"]({
      unitId: _0x4f5602.unitId,
      subUnitId: _0x4f5602.subUnitId,
      elementId: _0x4f5602.drawingId,
      tableId: _0x4f5602.element["tableId"],
      row: _0x467634.row,
      column: _0x467634.column,
    });
    return (
      (_0x2004bf = _0x31b330.setTableSelection) == null ||
        _0x2004bf.call(_0x31b330, {
          kind: Q(_0x2f1104.kind),
          ranges: _0x2f1104.ranges,
          active: { row: _0x467634.row, column: _0x467634.column },
        }),
      this._enterCellStage(),
      this._setTableKeyboardFocus(true),
      this._makeSceneDirty(),
      true
    );
  }
  _resolveCellHit(_0x55a3e7, _0x213541, _0x29e1f3, _0x3d52eb) {
    if (_0x55a3e7.element["type"] !== _0x17964d.Table || _0x55a3e7.groupId)
      return null;
    let _0x796df6 = this._tableResourceService["getTable"](
      _0x55a3e7.unitId,
      _0x55a3e7.element["tableId"],
    );
    if (!_0x796df6) return null;
    let _0x2102d8 = this._renderContext["scene"].getObject(_0x213541);
    if (!_0x2102d8 || _0x2102d8.isInGroup) return null;
    let _0x468c7b = _0x509c52(_0x796df6),
      _0x5b8fe0 = this._resolveTablePoint(
        _0x2102d8,
        _0x468c7b,
        _0x29e1f3,
        _0x3d52eb,
      ),
      _0x530257 = xc(_0x468c7b, _0x5b8fe0.x, _0x5b8fe0.y);
    if (!_0x530257) return null;
    let _0x3137e2 = _0x468c7b.cells["find"](
      (_0x26d4e9) =>
        _0x26d4e9.row === _0x530257.row &&
        _0x26d4e9.column === _0x530257.column &&
        !_0x26d4e9.hidden,
    );
    return _0x3137e2
      ? {
          table: _0x796df6,
          model: _0x468c7b,
          cell: _0x3137e2,
          row: _0x530257.row,
          column: _0x530257.column,
          object: _0x2102d8,
        }
      : null;
  }
  _resolveTablePoint(_0x2d5986, _0x31ec71, _0x490c78, _0x21d197) {
    let _0x881d06 = _0x2d5986.getInverseCoord(
        new _0x25842b(_0x490c78, _0x21d197),
      ),
      _0x2bf3eb = _0x881d06.x + _0x2d5986.width / 2,
      _0xc775 = _0x881d06.y + _0x2d5986.height / 2,
      _0x39b3f3 = Z(_0x31ec71.width / _0x2d5986.width, 1),
      _0x536566 = Z(_0x31ec71.height / _0x2d5986.height, 1);
    return { x: _0x2bf3eb * _0x39b3f3, y: _0xc775 * _0x536566 };
  }
  _resolveEditorLayout(_0x406936, _0x47a25b, _0x5de720, _0x2eb157) {
    var _0x5ca086, _0x57f8df;
    if (!this._renderContext["engine"].getCanvasElement()) return null;
    let _0x1f03f1 = this._renderContext["scene"].getAncestorScale(),
      _0x419a58 = Z(_0x1f03f1.scaleX, 1),
      _0x1da1f4 = Z(_0x1f03f1.scaleY, 1),
      _0x3bf8a7 = Gs({
        rect:
          ((_0x5ca086 = _0x406936.getCellTextRect) == null
            ? undefined
            : _0x5ca086.call(
                _0x406936,
                _0x5de720.row,
                _0x5de720.column,
                _0x406936.width,
                _0x406936.height,
              )) ??
          _0x305cb8({
            cell: _0x5de720,
            tableWidth: _0x47a25b.width,
            tableHeight: _0x47a25b.height,
            targetWidth: _0x406936.width,
            targetHeight: _0x406936.height,
            includeMargins: true,
          }),
        tableTransform: {
          left: _0x406936.left,
          top: _0x406936.top,
          width: _0x406936.width,
          height: _0x406936.height,
          angle: _0x406936.angle,
          flipX: _0x406936.flipX,
          flipY: _0x406936.flipY,
        },
        scale: { scaleX: _0x419a58, scaleY: _0x1da1f4 },
        scenePointToViewportPoint: (_0x137359) =>
          this._resolveScenePointToEditorPoint(_0x137359),
      }),
      _0x2dfb1e = _0x5de720.style["textDirection"],
      _0x1d0e41 =
        (_0x57f8df = _0x2eb157.documentStyle) == null
          ? undefined
          : _0x57f8df.renderConfig;
    return {
      ..._0x3bf8a7,
      horizontalAlign:
        _0x1d0e41 == null ? undefined : _0x1d0e41.horizontalAlign,
      isHorizontal: _0x2dfb1e !== "vertical" && _0x2dfb1e !== "vertical270",
      verticalAlign:
        Uc(_0x5de720.style["verticalAlign"]) ??
        (_0x1d0e41 == null ? undefined : _0x1d0e41.verticalAlign),
    };
  }
  _resolveScenePointToEditorPoint(_0x3ad99e) {
    var _0x4e7c08, _0x54f3a4, _0x501e6d;
    let _0x11ad28 = this._renderContext["scene"],
      _0x54a988 =
        (_0x4e7c08 = _0x11ad28.getViewports) == null
          ? undefined
          : _0x4e7c08.call(_0x11ad28)[0],
      _0x2ae44a =
        _0x54a988 == null || (_0x54f3a4 = _0x54a988.getAbsoluteVector) == null
          ? undefined
          : _0x54f3a4.call(_0x54a988, new _0x25842b(_0x3ad99e.x, _0x3ad99e.y));
    if (_0x2ae44a) return { x: _0x2ae44a.x, y: _0x2ae44a.y };
    let _0x77113a = this._renderContext["engine"].getCanvasElement(),
      _0x40bd43 = (_0x77113a == null ||
      (_0x501e6d = _0x77113a.getBoundingClientRect) == null
        ? undefined
        : _0x501e6d.call(_0x77113a)) ?? { left: 0, top: 0 },
      _0x120529 = _0x11ad28.getAncestorScale(),
      _0xb55cc9 = Z(_0x120529.scaleX, 1),
      _0x539929 = Z(_0x120529.scaleY, 1);
    return {
      x: _0x40bd43.left + _0x3ad99e.x * _0xb55cc9,
      y: _0x40bd43.top + _0x3ad99e.y * _0x539929,
    };
  }
  _resolveCellDocumentData(_0x214209, _0x3b9189, _0x494c37) {
    var _0x110121;
    let _0xde395 = Tc + "_" + _0x214209.id + "_" + _0x3b9189 + "_" + _0x494c37;
    return qs(
      ((_0x110121 = _0x214209.rows[_0x3b9189]) == null ||
      (_0x110121 = _0x110121.cells[_0x494c37]) == null
        ? undefined
        : _0x110121.textData) || {
        id: _0xde395,
        body: { dataStream: "\x0d\x0a" },
        documentStyle: {},
      },
      _0xde395,
    );
  }
  _commitCellDocument(_0x3fb881, _0x3e928d, _0x3fc245, _0x43a214) {
    var _0x5e48e1;
    if (!_0x3e928d) return;
    let _0x419f17 = this._tableResourceService["getTable"](
      _0x3e928d.unitId,
      _0x3e928d.tableId,
    );
    if (!_0x419f17) {
      this._isCurrentEditorSession(_0x3e928d, _0x43a214) &&
        this._tableSelectionService["clear"]();
      return;
    }
    let _0x44baa1 =
        Tc + "_" + _0x419f17.id + "_" + _0x3e928d.row + "_" + _0x3e928d.column,
      _0x4f42ba = qs(_0x955b98(_0x3fb881), _0x44baa1),
      _0x4b4d4a = Wc(
        (_0x5e48e1 = _0x4f42ba.documentStyle) == null ||
          (_0x5e48e1 = _0x5e48e1.renderConfig) == null
          ? undefined
          : _0x5e48e1.verticalAlign,
      ),
      _0x193d1d = _0x5bb6b9(
        _0x419f17,
        _0x3e928d.row,
        _0x3e928d.column,
        _0x4f42ba,
        { verticalAlign: _0x4b4d4a },
      );
    if (!_0x193d1d) {
      this._isCurrentEditorSession(_0x3e928d, _0x43a214) &&
        this._tableSelectionService["clear"]();
      return;
    }
    let _0xec2878 = _0x193d1d.rows,
      _0x165b1f = this._applyAutoGrowRowHeight(
        _0x419f17,
        _0xec2878,
        _0x3e928d,
        _0x3fc245,
      );
    (this._commandService["executeCommand"](_0x3f8728.id, {
      unitId: _0x3e928d.unitId,
      tableId: _0x3e928d.tableId,
      patch: { rows: _0xec2878 },
    }),
      _0x165b1f > 0 && this._growTableDrawingHeight(_0x3e928d, _0x165b1f),
      this._finishCellEditing(_0x3e928d, _0x43a214));
  }
  _autoGrowCellEditorRowHeight(_0x1f1637, _0x33d5be, _0x351be7) {
    var _0x23cf39;
    if (!_0x1f1637 || !this._isCurrentEditorSession(_0x1f1637, _0x351be7))
      return;
    let _0x42b314 = this._tableResourceService["getTable"](
      _0x1f1637.unitId,
      _0x1f1637.tableId,
    );
    if (!_0x42b314) return;
    let _0x4145ba = _0x16106d.deepClone(_0x42b314.rows),
      _0x4a46fa = this._applyAutoGrowRowHeight(
        _0x42b314,
        _0x4145ba,
        _0x1f1637,
        _0x33d5be,
      );
    if (_0x4a46fa <= 0) return;
    this._commandService["executeCommand"](_0x3f8728.id, {
      unitId: _0x1f1637.unitId,
      tableId: _0x1f1637.tableId,
      patch: { rows: _0x4145ba },
    });
    let _0x3c44fb = this._renderContext["scene"].getObject(
      _0x4b5215(_0x1f1637.unitId, _0x1f1637.subUnitId, _0x1f1637.elementId),
    );
    (_0x3c44fb == null ||
      (_0x23cf39 = _0x3c44fb.setPreviewTable) == null ||
      _0x23cf39.call(_0x3c44fb, { ..._0x42b314, rows: _0x4145ba }),
      this._growTableDrawingHeight(_0x1f1637, _0x4a46fa),
      this._makeSceneDirty());
  }
  _handleCellEditorPointerMove(_0x3701b4, _0x465321, _0x3f35dc) {}
  _handoffCellEditorToRangeSelection(
    _0x1da0cf,
    _0x3606a3,
    _0x92623b,
    _0x136d4e,
    _0x25c3f0,
    _0x3cc30d,
    _0x58f158,
    _0x5584bf,
  ) {
    var _0x234cde;
    let _0xf33a08 = this._editorUIService["getSession"]();
    !_0xf33a08 ||
      !this._isCurrentEditorSession(_0xf33a08.context, _0x92623b) ||
      ((_0x234cde = _0x1da0cf.stopTextSelectionDrag) == null ||
        _0x234cde.call(_0x1da0cf),
      this._editorUIService["complete"](
        _0xf33a08.documentData,
        _0xf33a08.measurement,
      ),
      (this._rangeDragContext = {
        drawing: _0x136d4e,
        objectKey: _0x25c3f0,
        object: _0x3cc30d,
        table: _0x58f158,
        anchor: { row: _0x3606a3.row, column: _0x3606a3.column },
        current: { row: _0x3606a3.row, column: _0x3606a3.column },
      }),
      this._bindRangeDragWindowEvents(),
      this._applyRangeDragSelection(this._rangeDragContext, {
        row: _0x5584bf.row,
        column: _0x5584bf.column,
      }));
  }
  _bindRangeDragWindowEvents() {
    if (this._rangeDragWindowCleanup || typeof window > "u") return;
    let _0x3fa814 = (_0x13b1f3) => {
        this._updateRangeDrag({
          buttons: _0x13b1f3.buttons,
          clientX: _0x13b1f3.clientX,
          clientY: _0x13b1f3.clientY,
        });
      },
      _0x381510 = () => {
        this._finishRangeDrag();
      };
    (window.addEventListener("pointermove", _0x3fa814),
      window.addEventListener("pointerup", _0x381510),
      (this._rangeDragWindowCleanup = () => {
        (window.removeEventListener("pointermove", _0x3fa814),
          window.removeEventListener("pointerup", _0x381510),
          (this._rangeDragWindowCleanup = null));
      }));
  }
  _finishRangeDrag() {
    let _0x3198bb = this._rangeDragWindowCleanup;
    (_0x3198bb && _0x3198bb(), (this._rangeDragContext = null));
  }
  _handleCellEditorPointerUp(_0x18008e, _0x5eb96a) {
    var _0x279e91;
    _0x18008e &&
      ((_0x279e91 = this._rangeDragContext) == null
        ? undefined
        : _0x279e91.drawing["unitId"]) === _0x18008e.unitId &&
      this._rangeDragContext["drawing"].drawingId === _0x18008e.elementId &&
      this._finishRangeDrag();
  }
  _applyAutoGrowRowHeight(_0x2a28ec, _0xb438fa, _0x2367c4, _0x260566) {
    if (!_0x260566) return 0;
    let _0x3c57b3 = this._renderContext["scene"].getObject(
      _0x4b5215(_0x2367c4.unitId, _0x2367c4.subUnitId, _0x2367c4.elementId),
    );
    if (!_0x3c57b3) return 0;
    let _0x2be1da = _0x509c52(_0x2a28ec),
      _0x5ec2d2 = _0x2be1da.cells["find"](
        (_0x289e31) =>
          _0x289e31.row === _0x2367c4.row &&
          _0x289e31.column === _0x2367c4.column &&
          !_0x289e31.hidden,
      );
    if (!_0x5ec2d2) return 0;
    let _0x45ccfc = Z(_0x3c57b3.height, _0x2be1da.height),
      _0x101fc5 = Rc(_0x5ec2d2, _0x2be1da, _0x45ccfc),
      _0x251972 = Z(_0x260566.contentHeight, _0x101fc5),
      _0x54d123 = Math.ceil(_0x251972 - _0x101fc5);
    if (_0x54d123 <= 0) return 0;
    let _0x2558f7 = _0x54d123 * (Z(_0x2be1da.height, _0x45ccfc) / _0x45ccfc),
      _0x58bf99 =
        _0xb438fa[
          Math.min(
            _0xb438fa.length - 1,
            _0x5ec2d2.row + Math.max(1, _0x5ec2d2.rowSpan) - 1,
          )
        ];
    return _0x58bf99
      ? ((_0x58bf99.height = Z(_0x58bf99.height, 24) + _0x2558f7), _0x54d123)
      : 0;
  }
  _growTableDrawingHeight(_0x423aec, _0x1bbdb1) {
    let _0x32a72c = _0x423aec.drawingTransform;
    if (!_0x32a72c) return;
    let _0x1df5fa = this._renderContext["scene"].getObject(
        _0x4b5215(_0x423aec.unitId, _0x423aec.subUnitId, _0x423aec.elementId),
      ),
      _0x42cd87 = Math.max(
        Z(_0x32a72c.height, 0),
        Z(_0x1df5fa == null ? undefined : _0x1df5fa.height, 0),
      ),
      _0x4b2cd7 = { ..._0x32a72c, height: _0x42cd87 + _0x1bbdb1 };
    ((_0x423aec.drawingTransform = _0x4b2cd7),
      this._commandService["executeCommand"](_0x45bfed.id, {
        patches: [
          {
            unitId: _0x423aec.unitId,
            subUnitId: _0x423aec.subUnitId,
            drawingId: _0x423aec.elementId,
            transform: _0x4b2cd7,
          },
        ],
      }));
  }
  _commitCellStyle(_0x571d2d, _0x1b269b) {
    if (!_0x571d2d) return;
    let _0x346bbc = this._tableResourceService["getTable"](
      _0x571d2d.unitId,
      _0x571d2d.tableId,
    );
    if (!_0x346bbc) {
      this._tableSelectionService["clear"]();
      return;
    }
    let _0x41604f = _0x16106d.deepClone(_0x346bbc.rows),
      _0x590fe1 = _0x41604f[_0x571d2d.row],
      _0x14ec49 =
        _0x590fe1 == null ? undefined : _0x590fe1.cells[_0x571d2d.column];
    !_0x590fe1 ||
      !_0x14ec49 ||
      ((_0x590fe1.cells[_0x571d2d.column] = {
        ..._0x14ec49,
        style: Gc(_0x14ec49.style, _0x1b269b),
      }),
      this._commandService["executeCommand"](_0x3f8728.id, {
        unitId: _0x571d2d.unitId,
        tableId: _0x571d2d.tableId,
        patch: { rows: _0x41604f },
      }));
  }
  _finishCellEditing(_0x3a864c, _0x41a8cd) {
    var _0xc80480, _0x27f0d8, _0x2b9cb0, _0x3954fc;
    if (
      !this._isCurrentEditorSession(_0x3a864c, _0x41a8cd) ||
      (this._tableSelectionService["clear"](),
      (this._editorDisposable = null),
      (this._activeEditorContextKey = null),
      this._setTableKeyboardFocus(false),
      !_0x3a864c)
    )
      return;
    this._univerInstanceService["focusUnit"](_0x3a864c.unitId);
    let _0x3b6ebc = this._renderContext["scene"].getObject(
      _0x4b5215(_0x3a864c.unitId, _0x3a864c.subUnitId, _0x3a864c.elementId),
    );
    (_0x3b6ebc == null ||
      (_0xc80480 = _0x3b6ebc.setEditingCell) == null ||
      _0xc80480.call(_0x3b6ebc, null),
      _0x3b6ebc == null ||
        (_0x27f0d8 = _0x3b6ebc.setTableSelection) == null ||
        _0x27f0d8.call(_0x3b6ebc, null),
      _0x3b6ebc == null ||
        (_0x2b9cb0 = _0x3b6ebc.setTableControlHover) == null ||
        _0x2b9cb0.call(_0x3b6ebc, null),
      _0x3b6ebc == null ||
        (_0x3954fc = _0x3b6ebc.setPreviewTable) == null ||
        _0x3954fc.call(_0x3b6ebc, null),
      this._restoreTableDrawingSelection(_0x3a864c),
      this._makeSceneDirty());
  }
  _isCurrentEditorSession(_0x14758c, _0x2f2780) {
    return _0x14758c
      ? _0x2f2780 !== undefined && _0x2f2780 !== this._editorSessionId
        ? false
        : this._activeEditorContextKey === Hc(_0x14758c)
      : _0x2f2780 === undefined || _0x2f2780 === this._editorSessionId;
  }
  _restoreTableDrawingSelection(_0x427394) {
    var _0x5ccb35;
    this._drawingStateService["selectDrawings"](
      { unitId: _0x427394.unitId, subUnitId: _0x427394.subUnitId },
      [_0x427394.elementId],
      _0x427394.elementId,
    );
    let _0x170d71 = this._renderContext["scene"].getTransformer(),
      _0x4008fc = this._renderContext["scene"].getObject(
        _0x4b5215(_0x427394.unitId, _0x427394.subUnitId, _0x427394.elementId),
      );
    !_0x170d71 ||
      !_0x4008fc ||
      _0x4008fc.isInGroup ||
      (_0x5ccb35 = _0x170d71.setSelectedControl) == null ||
      _0x5ccb35.call(_0x170d71, _0x4008fc);
  }
  _makeSceneDirty() {
    var _0x54cdb1, _0x5db35f;
    (_0x54cdb1 = (_0x5db35f = this._renderContext["scene"]).makeDirty) ==
      null || _0x54cdb1.call(_0x5db35f, true);
  }
};
Ac = oa(
  [
    Y(1, _0x487340(_0x5d6542)),
    Y(2, _0x487340(_0x4fffa3)),
    Y(3, _0x487340(G)),
    Y(4, _0x49ec4c),
    Y(5, _0x487340(_0x4127e0)),
    Y(6, _0x20bea0),
    Y(7, _0x59c1bd),
    Y(8, _0x487340(sa)),
    Y(9, _0xab580a),
    Y(10, _0x3c4413),
    Y(11, _0x487340(_0x10d183)),
    Y(12, _0x27b3e3),
    Y(13, _0x4f9b52),
    Y(14, _0x2121dd),
    Y(15, _0x487340(_0x56841d)),
  ],
  Ac,
);
function jc(_0x2d3335) {
  if (_0x2d3335.altKey || _0x2d3335.ctrlKey || _0x2d3335.metaKey) return null;
  switch (_0x2d3335.key) {
    case "Tab":
      return {
        rowDelta: 0,
        columnDelta: _0x2d3335.shiftKey ? -1 : 1,
        wrap: true,
      };
    default:
      return null;
  }
}
function Mc(_0x23b9e3) {
  let _0x166450 = { preventDefault: () => {}, stopPropagation: () => {} };
  switch (_0x23b9e3) {
    case "move-left":
    case "extend-left":
      return { ..._0x166450, key: "ArrowLeft" };
    case "move-right":
    case "extend-right":
      return { ..._0x166450, key: "ArrowRight" };
    case "move-up":
    case "extend-up":
      return { ..._0x166450, key: "ArrowUp" };
    case "move-down":
    case "extend-down":
      return { ..._0x166450, key: "ArrowDown" };
    case "tab-forward":
      return { ..._0x166450, key: "Tab" };
    case "tab-backward":
      return { ..._0x166450, key: "Tab", shiftKey: true };
    case "edit-cell":
      return { ..._0x166450, key: "Enter" };
    default:
      return null;
  }
}
function Nc(_0x3f298e, _0x58d440) {
  let _0x4c49f4 = _0x3f298e.element["transform"],
    _0x402c4e = _0x3f298e.transform;
  return {
    left:
      _0x4c49f4.left ?? (_0x402c4e == null ? undefined : _0x402c4e.left) ?? 0,
    top: _0x4c49f4.top ?? (_0x402c4e == null ? undefined : _0x402c4e.top) ?? 0,
    width:
      _0x4c49f4.width ??
      (_0x402c4e == null ? undefined : _0x402c4e.width) ??
      (_0x58d440 == null ? undefined : _0x58d440.width),
    height:
      _0x4c49f4.height ??
      (_0x402c4e == null ? undefined : _0x402c4e.height) ??
      (_0x58d440 == null ? undefined : _0x58d440.height),
    angle:
      _0x4c49f4.rotation ??
      (_0x402c4e == null ? undefined : _0x402c4e.angle) ??
      0,
    flipX: _0x4c49f4.flipX ?? (_0x402c4e == null ? undefined : _0x402c4e.flipX),
    flipY: _0x4c49f4.flipY ?? (_0x402c4e == null ? undefined : _0x402c4e.flipY),
  };
}
function Pc(_0x4bcf5a, _0x21bd9c = 0) {
  return typeof _0x4bcf5a == "number" && Number.isFinite(_0x4bcf5a)
    ? _0x4bcf5a
    : _0x21bd9c;
}
function Z(_0x56dccc, _0x4100ad) {
  let _0x4d561a = Pc(_0x56dccc, _0x4100ad);
  return _0x4d561a > 0 ? _0x4d561a : _0x4100ad;
}
function Q(_0x55da4a) {
  return _0x55da4a === "none" ? undefined : _0x55da4a;
}
function Fc(_0x29f138) {
  let _0x2d8f33 = _0x29f138[0];
  if (_0x2d8f33)
    return {
      row: Math.min(_0x2d8f33.startRow, _0x2d8f33.endRow),
      column: Math.min(_0x2d8f33.startColumn, _0x2d8f33.endColumn),
    };
}
function Ic(_0x35226e, _0x222ffc) {
  let _0xa3be39 = Z(_0x222ffc, 1),
    _0x531ebf = _0x35226e.map((_0x592890) => Z(_0x592890, 1)),
    _0x48ecd8 = _0x531ebf.reduce(
      (_0xc6d114, _0x5bb553) => _0xc6d114 + _0x5bb553,
      0,
    );
  return _0x531ebf.map((_0x2baa4d) => (_0x2baa4d / _0x48ecd8) * _0xa3be39);
}
function Lc(_0x1730a8, _0x4cde1e) {
  let _0xfced30 = 0,
    _0x16dbec = { index: 0, distance: Math.abs(_0x4cde1e) };
  for (let _0x58fc17 = 0; _0x58fc17 < _0x1730a8.length; _0x58fc17 += 1) {
    _0xfced30 += _0x1730a8[_0x58fc17];
    let _0x3c7cac = Math.abs(_0x4cde1e - _0xfced30);
    _0x3c7cac < _0x16dbec.distance &&
      (_0x16dbec = { index: _0x58fc17 + 1, distance: _0x3c7cac });
  }
  return _0x16dbec.index;
}
function Rc(_0x209333, _0x42ff48, _0x14b4f0) {
  let _0x54e38b = Z(_0x14b4f0 / _0x42ff48.height, 1),
    _0x347299 = _0xaa2b68(_0x209333.style["margins"]),
    _0x384747 = _0x347299.top,
    _0x410208 = _0x347299.bottom;
  return Math.max(
    1,
    _0x209333.bounds["height"] * _0x54e38b - _0x384747 - _0x410208,
  );
}
function zc(_0xbea94, _0x63175, _0x3e0018) {
  let _0x199201 = 0,
    _0x11da9e = null;
  for (let _0x2ab2e9 = 0; _0x2ab2e9 < _0xbea94.length - 1; _0x2ab2e9 += 1) {
    _0x199201 += _0xbea94[_0x2ab2e9];
    let _0x3c20a9 = Math.abs(_0x63175 - _0x199201);
    _0x3c20a9 > _0x3e0018 ||
      ((!_0x11da9e || _0x3c20a9 < _0x11da9e.distance) &&
        (_0x11da9e = { boundaryIndex: _0x2ab2e9 + 1, distance: _0x3c20a9 }));
  }
  return _0x11da9e;
}
function Bc(_0x19f3a6, _0x31481d, _0x566243, _0x429cac) {
  let _0x264e5f = _0x31481d - 1,
    _0x47f415 = _0x31481d;
  if (_0x264e5f < 0 || _0x47f415 >= _0x19f3a6.length) return _0x19f3a6;
  let _0xb1ff5f = _0x19f3a6[_0x264e5f],
    _0x46de8b = _0x19f3a6[_0x47f415],
    _0x370ba5 = _0x429cac - _0xb1ff5f,
    _0x2f50e2 = _0x46de8b - _0x429cac,
    _0x4948c4 = Math.min(Math.max(_0x566243, _0x370ba5), _0x2f50e2),
    _0x4b9466 = _0x19f3a6.slice();
  return (
    (_0x4b9466[_0x264e5f] = _0xb1ff5f + _0x4948c4),
    (_0x4b9466[_0x47f415] = _0x46de8b - _0x4948c4),
    _0x4b9466
  );
}
function Vc(_0x2daccf, _0x56c8e5, _0x27b4ef) {
  return _0x27b4ef === "column"
    ? _0x2daccf.columns["some"]((_0x248537, _0x2b3810) => {
        var _0x57435b;
        return (
          _0x248537.width !==
          ((_0x57435b = _0x56c8e5.columns[_0x2b3810]) == null
            ? undefined
            : _0x57435b.width)
        );
      })
    : _0x2daccf.rows["some"]((_0x5b4349, _0x3ca58c) => {
        var _0x34481e;
        return (
          (_0x5b4349.height ?? 24) !==
          (((_0x34481e = _0x56c8e5.rows[_0x3ca58c]) == null
            ? undefined
            : _0x34481e.height) ?? 24)
        );
      });
}
function Hc(_0x301e46) {
  return (
    _0x301e46.unitId +
    ":" +
    _0x301e46.subUnitId +
    ":" +
    _0x301e46.elementId +
    ":" +
    _0x301e46.tableId +
    ":" +
    _0x301e46.row +
    ":" +
    _0x301e46.column
  );
}
function Uc(_0x41f6c0) {
  if (_0x41f6c0 === "middle") return _0x1ba0d9.MIDDLE;
  if (_0x41f6c0 === "bottom") return _0x1ba0d9.BOTTOM;
  if (_0x41f6c0 === "top") return _0x1ba0d9.TOP;
}
function Wc(_0x505d74) {
  if (_0x505d74 === _0x1ba0d9.MIDDLE) return _0x5b0766.Middle;
  if (_0x505d74 === _0x1ba0d9.BOTTOM) return _0x5b0766.Bottom;
  if (_0x505d74 === _0x1ba0d9.TOP) return _0x5b0766.Top;
}
function Gc(_0x38af44, _0x1d2dc3) {
  return {
    ..._0x38af44,
    ..._0x1d2dc3,
    ...(_0x1d2dc3.fill
      ? {
          fill: {
            ...(_0x38af44 == null ? undefined : _0x38af44.fill),
            ..._0x1d2dc3.fill,
          },
        }
      : {}),
    ...(_0x1d2dc3.borders
      ? {
          borders: {
            ...(_0x38af44 == null ? undefined : _0x38af44.borders),
            ..._0x1d2dc3.borders,
          },
        }
      : {}),
    ...(_0x1d2dc3.margins
      ? {
          margins: {
            ...(_0x38af44 == null ? undefined : _0x38af44.margins),
            ..._0x1d2dc3.margins,
          },
        }
      : {}),
  };
}
function Kc(_0x58229d) {
  if ((_0x58229d == null ? undefined : _0x58229d.type) === "none")
    return "transparent";
  let _0x3cc35e = _0x58229d == null ? undefined : _0x58229d.color;
  if (!_0x3cc35e) return;
  let _0x445b27 = Zc(_0x3cc35e);
  if (_0x445b27) {
    let _0x1ea47c = tl(_0x445b27.a) ?? 1;
    return (
      "rgba(" +
      _0x445b27.r +
      ",\x20" +
      _0x445b27.g +
      ",\x20" +
      _0x445b27.b +
      ",\x20" +
      rl(_0x1ea47c) +
      ")"
    );
  }
  let _0x54cb99 = Qc(_0x3cc35e);
  if (!_0x54cb99) return _0x3cc35e;
  let _0x4a8051 = tl(_0x58229d.alpha) ?? 1;
  return (
    "rgba(" +
    _0x54cb99.r +
    ",\x20" +
    _0x54cb99.g +
    ",\x20" +
    _0x54cb99.b +
    ",\x20" +
    rl(_0x4a8051) +
    ")"
  );
}
function qc(_0x37fb50) {
  let _0x310585 = Zc(_0x37fb50);
  if (_0x310585)
    return {
      color: $c(_0x310585.r, _0x310585.g, _0x310585.b),
      alpha: tl(_0x310585.a) ?? 1,
    };
  let _0x154400 = Qc(_0x37fb50);
  return _0x154400
    ? { color: $c(_0x154400.r, _0x154400.g, _0x154400.b) }
    : { color: _0x37fb50 };
}
function Jc(_0x43ce4f, _0x38ddb4) {
  return Kc(_0x38ddb4.style["fill"]) ?? Yc(_0x43ce4f, _0x38ddb4.row);
}
function Yc(_0xe26467, _0x574287) {
  return _0xe26467.options["firstRow"] && _0x574287 === 0
    ? "#E8F1FF"
    : _0xe26467.options["bandRow"] && _0x574287 % 2 == 0
      ? "#F7FAFF"
      : "#FFFFFF";
}
function Xc(_0xe519b0) {
  return typeof _0xe519b0 == "number" && Number.isFinite(_0xe519b0);
}
function Zc(_0x4e6038) {
  let _0x5ebb18 =
    /^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*(\d+(?:\.\d+)?|\.\d+))?\s*\)$/i.exec(
      _0x4e6038.trim(),
    );
  if (_0x5ebb18)
    return {
      r: el(Number.parseInt(_0x5ebb18[1], 10)),
      g: el(Number.parseInt(_0x5ebb18[2], 10)),
      b: el(Number.parseInt(_0x5ebb18[3], 10)),
      a: _0x5ebb18[4] === undefined ? 1 : Number.parseFloat(_0x5ebb18[4]),
    };
}
function Qc(_0xcfd126) {
  let _0x5ce28b = _0xcfd126.trim(),
    _0x2b7909 = /^#([0-9a-f]{3})$/i.exec(_0x5ce28b);
  if (_0x2b7909) {
    let [_0x1cb3eb, _0x542773, _0x1e50cc] = _0x2b7909[1]
      .split("")
      .map((_0x102fb4) => Number.parseInt("" + _0x102fb4 + _0x102fb4, 16));
    return { r: _0x1cb3eb, g: _0x542773, b: _0x1e50cc };
  }
  let _0x24068f = /^#([0-9a-f]{6})$/i.exec(_0x5ce28b);
  if (_0x24068f)
    return {
      r: Number.parseInt(_0x24068f[1].slice(0, 2), 16),
      g: Number.parseInt(_0x24068f[1].slice(2, 4), 16),
      b: Number.parseInt(_0x24068f[1].slice(4, 6), 16),
    };
}
function $c(_0x4187a6, _0x3e67f9, _0x1681d5) {
  return (
    "#" +
    [_0x4187a6, _0x3e67f9, _0x1681d5]
      .map((_0x1134c5) => el(_0x1134c5).toString(16).padStart(2, "0"))
      .join("")
  ).toUpperCase();
}
function el(_0x1b540f) {
  return Number.isFinite(_0x1b540f)
    ? Math.min(255, Math.max(0, Math.round(_0x1b540f)))
    : 0;
}
function tl(_0xf04fa0) {
  if (!(typeof _0xf04fa0 != "number" || !Number.isFinite(_0xf04fa0)))
    return nl(
      _0xf04fa0 <= 1
        ? _0xf04fa0
        : _0xf04fa0 <= 100
          ? _0xf04fa0 / 100
          : _0xf04fa0 / 100000,
    );
}
function nl(_0x26fcda) {
  return Math.min(1, Math.max(0, _0x26fcda));
}
function rl(_0x213634) {
  return Number(_0x213634.toFixed(4)).toString();
}
function il(_0x47784a) {
  return (
    new DOMParser()
      .parseFromString(_0x47784a, "text/html")
      .querySelector("img") !== null
  );
}
async function al(_0x40b4ce, _0x7d8d65) {
  let _0xbe585a = _0x5eb277(_0x40b4ce);
  return _0x7d8d65
    ? il(_0x7d8d65)
      ? _0xbe585a.length > 0
        ? _0xbe585a
        : _0x3c08cd(_0x7d8d65)
      : []
    : _0xbe585a;
}
function ol(_0x594410) {
  return _0x594410.type === _0x17964d.Table;
}
let sl = class {
  constructor(_0x7ec7e7) {
    ((this._resourceService = _0x7ec7e7), W(this, "key", "slide-table"));
  }
  collect(_0x13ae22) {
    let _0x271c79 = {},
      _0x1f546b = {},
      _0x2b7451 = {};
    return (
      _0x13ae22.elements["forEach"]((_0x52e3d6) => {
        if (!ol(_0x52e3d6)) return;
        let _0x28fd09 = this._resourceService["getTable"](
          _0x13ae22.unitId,
          _0x52e3d6.tableId,
        );
        if (
          _0x28fd09 &&
          ((_0x271c79[_0x28fd09.id] = _0x16106d.deepClone(_0x28fd09)),
          (_0x2b7451[_0x52e3d6.id] = _0x28fd09.id),
          _0x28fd09.themeId)
        ) {
          let _0x1e59e2 = this._resourceService["getTheme"](
            _0x13ae22.unitId,
            _0x28fd09.themeId,
          );
          _0x1e59e2 &&
            (_0x1f546b[_0x1e59e2.id] = _0x16106d.deepClone(_0x1e59e2));
        }
      }),
      Object.keys(_0x271c79).length === 0
        ? null
        : {
            tables: _0x271c79,
            themes: _0x1f546b,
            tableIdByElementId: _0x2b7451,
          }
    );
  }
  serialize(_0x278dea) {
    let _0xb9cd29 = _0x278dea.elements["filter"](ol)
      .map((_0x21721d) =>
        this._resourceService["getTable"](_0x278dea.unitId, _0x21721d.tableId),
      )
      .filter((_0x1ed22c) => _0x1ed22c !== undefined);
    return _0xb9cd29.length > 0
      ? {
          html: _0xb9cd29.map(dl).join("<br>"),
          plainText: _0xb9cd29.map(ul).join("\x0a"),
        }
      : null;
  }
  preparePaste(_0x42f819) {
    if (!cl(_0x42f819.payload)) return null;
    let _0x5a3ab3 = _0x42f819.payload,
      _0xa720bb = new Map();
    _0x42f819.elementIdMap["forEach"]((_0x360e7d, _0x3b9959) =>
      _0xa720bb.set(_0x360e7d, _0x3b9959),
    );
    let _0xddd8e3 = new Map(),
      _0x3d9aa2 = new Map(),
      _0x226f60 = _0x42f819.elements["map"]((_0x2b8893) => {
        if (!ol(_0x2b8893)) return _0x2b8893;
        let _0x76bc5 = _0xa720bb.get(_0x2b8893.id),
          _0x1955b4 = _0x76bc5
            ? _0x5a3ab3.tableIdByElementId[_0x76bc5]
            : undefined;
        if (!_0x1955b4 || !_0x5a3ab3.tables[_0x1955b4]) return _0x2b8893;
        let _0x375e59 = _0xddd8e3.get(_0x1955b4);
        return (
          _0x375e59 ||
            ((_0x375e59 = _0x1a424d(6)), _0xddd8e3.set(_0x1955b4, _0x375e59)),
          { ..._0x2b8893, tableId: _0x375e59 }
        );
      }),
      _0x837e0c = [];
    return (
      _0xddd8e3.forEach((_0x5e02da, _0x47db01) => {
        let _0x12cf93 = _0x5a3ab3.tables[_0x47db01];
        if (!_0x12cf93) return;
        let _0x486f91 = _0x16106d.deepClone(_0x12cf93);
        _0x486f91.id = _0x5e02da;
        let _0x503a52;
        if (_0x12cf93.themeId) {
          let _0x2beb66 = _0x5a3ab3.themes[_0x12cf93.themeId];
          if (_0x2beb66) {
            let _0x3b3d29 = _0x3d9aa2.get(_0x2beb66.id);
            (_0x3b3d29 ||
              ((_0x3b3d29 = _0x51a5cc(_0x1a424d(6), _0x2beb66).id),
              _0x3d9aa2.set(_0x2beb66.id, _0x3b3d29)),
              (_0x503a52 = {
                ..._0x16106d.deepClone(_0x2beb66),
                id: _0x3b3d29,
              }),
              (_0x486f91.themeId = _0x3b3d29));
          } else delete _0x486f91.themeId;
        }
        _0x837e0c.push({ table: _0x486f91, theme: _0x503a52 });
      }),
      _0x837e0c.length === 0
        ? null
        : {
            elements: _0x226f60,
            redoMutations: _0x837e0c.map(
              ({ table: _0x30942b, theme: _0x11d1e6 }) => ({
                id: _0x57af51.id,
                params: {
                  unitId: _0x42f819.targetUnitId,
                  table: _0x30942b,
                  theme: _0x11d1e6,
                },
              }),
            ),
            undoMutations: [..._0x837e0c]
              .reverse()
              .map(({ table: _0x29d2a8 }) => ({
                id: _0x26dabf.id,
                params: {
                  unitId: _0x42f819.targetUnitId,
                  tableId: _0x29d2a8.id,
                },
              })),
          }
    );
  }
};
sl = oa([Y(0, _0x487340(_0x4fffa3))], sl);
function cl(_0x356750) {
  return !_0x356750 || typeof _0x356750 != "object"
    ? false
    : "tables" in _0x356750 &&
        ll(_0x356750.tables) &&
        "themes" in _0x356750 &&
        ll(_0x356750.themes) &&
        "tableIdByElementId" in _0x356750 &&
        ll(_0x356750.tableIdByElementId);
}
function ll(_0x210300) {
  return (
    typeof _0x210300 == "object" && !!_0x210300 && !Array.isArray(_0x210300)
  );
}
function ul(_0x315ebe) {
  return _0x315ebe.rows["map"]((_0x393006) =>
    _0x393006.cells["map"]((_0x5baacf) =>
      _0x5baacf.hMerge || _0x5baacf.vMerge
        ? ""
        : _0x5baacf.textData
          ? _0x591349(_0x5baacf.textData).replace(/[\t\r\n]+/g, "\x20")
          : "",
    ).join("\x09"),
  ).join("\x0a");
}
function dl(_0x393f93) {
  return (
    "<table><colgroup>" +
    _0x393f93.columns["map"](
      (_0x26c49c) => '<col style="width: ' + _0x26c49c.width + 'px">',
    ).join("") +
    "</colgroup><tbody>" +
    _0x393f93.rows["map"]((_0x410dc8) => {
      let _0x392db0 = _0x410dc8.cells["map"]((_0x5c8145) => {
        if (_0x5c8145.hMerge || _0x5c8145.vMerge) return "";
        let _0xc6ec12 = [
            _0x5c8145.rowSpan && _0x5c8145.rowSpan > 1
              ? 'rowspan="' + _0x5c8145.rowSpan + "\x22"
              : "",
            _0x5c8145.columnSpan && _0x5c8145.columnSpan > 1
              ? "colspan=\x22" + _0x5c8145.columnSpan + "\x22"
              : "",
            sc(_0x5c8145),
          ]
            .filter(Boolean)
            .join("\x20"),
          _0x10c9dc = _0x5c8145.textData
            ? _0xf5e5a8(_0x16106d.deepClone(_0x5c8145.textData))
            : "";
        return (
          "<td" +
          (_0xc6ec12 ? "\x20" + _0xc6ec12 : "") +
          ">" +
          _0x10c9dc +
          "</td>"
        );
      }).join("");
      return (
        "<tr" +
        (_0x410dc8.height
          ? ' style="height: ' + _0x410dc8.height + "px\x22"
          : "") +
        ">" +
        _0x392db0 +
        "</tr>"
      );
    }).join("") +
    "</tbody></table>"
  );
}
function fl(_0x12565d, _0x2bbbb4, _0x21c064) {
  let _0x47e577 = _0x2bbbb4.flatMap((_0x483352) =>
      _0x483352 ? [_0x483352.subscribeEvent(_0x12565d)] : [],
    ),
    _0x6ce89f =
      _0x21c064 && typeof ResizeObserver < "u"
        ? new ResizeObserver(_0x12565d)
        : null;
  return (
    _0x21c064 && (_0x6ce89f == null || _0x6ce89f.observe(_0x21c064)),
    () => {
      (_0x47e577.forEach((_0x1e554b) => _0x1e554b.unsubscribe()),
        _0x6ce89f == null || _0x6ce89f.disconnect());
    }
  );
}
function pl(_0x3c6049) {
  let _0x276b18 = ml(_0x3c6049.object, _0x3c6049.table, _0x3c6049.selection),
    _0x2c10f9 = _0x3c6049.scale["scaleX"] * _0x3c6049.canvasScale,
    _0x1c306f = _0x3c6049.scale["scaleY"] * _0x3c6049.canvasScale,
    _0x17c346 =
      _0x3c6049.canvasRect["left"] +
      (_0x276b18.centerX - _0x3c6049.scroll["x"]) * _0x2c10f9,
    _0x295e6a =
      _0x3c6049.canvasRect["top"] +
      (_0x276b18.top - _0x3c6049.scroll["y"] - _0x326313) * _0x1c306f -
      42 -
      5,
    _0x240d3b = Math.max(352, _0x3c6049.viewportWidth - 340 - 12);
  return {
    left: Math.min(Math.max(352, _0x17c346), _0x240d3b),
    top: Math.max(12, _0x295e6a),
  };
}
function ml(_0x878558, _0x3928cd, _0x5ab908) {
  if (!_0x3928cd || (_0x5ab908.kind !== "row" && _0x5ab908.kind !== "column"))
    return {
      centerX: _0x878558.left + _0x878558.width / 2,
      top: _0x878558.top,
    };
  let _0x3f70a5 = _0x5ab908.ranges[0];
  if (!_0x3f70a5)
    return {
      centerX: _0x878558.left + _0x878558.width / 2,
      top: _0x878558.top,
    };
  let _0x1864bf = _0x3fbad0(_0x3f70a5),
    _0x4635d5 = hl(
      _0x3928cd.columns["map"]((_0x5b42e0) => _0x5b42e0.width),
      _0x878558.width,
      _0x1864bf.startColumn,
      _0x1864bf.endColumn,
    ),
    _0x4067e4 = hl(
      _0x3928cd.rows["map"]((_0x502eb8) => _0x502eb8.height ?? 24),
      _0x878558.height,
      _0x1864bf.startRow,
      _0x1864bf.endRow,
    );
  return {
    centerX: _0x878558.left + _0x4635d5.start + _0x4635d5.size / 2,
    top: _0x878558.top + _0x4067e4.start,
  };
}
function hl(_0x44b633, _0x445687, _0x5d22df, _0x5bb8f1) {
  let _0x146096 = _0x44b633.reduce(
    (_0x50e44b, _0x392b97) => _0x50e44b + _0x392b97,
    0,
  );
  if (_0x146096 <= 0 || _0x44b633.length === 0)
    return { start: 0, size: _0x445687 };
  let _0xf19037 = Math.max(0, Math.min(_0x5d22df, _0x44b633.length - 1)),
    _0x51b8b3 = Math.max(_0xf19037, Math.min(_0x5bb8f1, _0x44b633.length - 1)),
    _0x21faca = _0x44b633
      .slice(0, _0xf19037)
      .reduce((_0x571046, _0x26e41a) => _0x571046 + _0x26e41a, 0),
    _0x459536 = _0x44b633
      .slice(_0xf19037, _0x51b8b3 + 1)
      .reduce((_0x212c9c, _0x452447) => _0x212c9c + _0x452447, 0);
  return {
    start: (_0x21faca / _0x146096) * _0x445687,
    size: (_0x459536 / _0x146096) * _0x445687,
  };
}
function gl() {
  let _0x4ad692 = _0x22a685(Sa),
    _0x22d474 = _0x22a685(G),
    _0x1b4a2e = _0x22a685(_0x4fffa3),
    _0x443f71 = _0x22a685(_0x59c1bd),
    _0x1ad286 = _0x22a685(_0x480a87),
    _0x493241 = _0x22a685(_0x3e56ef),
    _0x36adbb = _0x4b666e(_0x493241.direction$, _0x493241.getDirection()),
    _0x2c0ade = _0x22a685(_0xd94a7b),
    _0x233535 = _0x22a685(_0x1699a1),
    _0x5ca55e = _0x4b666e(_0x22d474.selection$),
    _0x5a9dbe = _0x4b666e(_0x4ad692.visible$, _0x4ad692.getVisible());
  _0x4b666e(_0x233535.tableChange$);
  let [_0x5671be, _0x31fddc] = _0x1498db(null),
    [_0x40c945, _0x10bfad] = _0x1498db({ selectionKey: null, value: null }),
    _0x4f4ee9 = _0x3856d9(() => {
      _0x22d474.markTableInternalInteraction();
    }, [_0x22d474]),
    _0x36d6ac =
      !_0x5a9dbe ||
      !_0x5ca55e ||
      _0x5ca55e.kind === "text" ||
      !_0x5ca55e.ranges["length"]
        ? null
        : _0x5ca55e,
    _0x1ac783 = _0x36d6ac
      ? [
          _0x36d6ac.unitId,
          _0x36d6ac.subUnitId,
          _0x36d6ac.elementId,
          _0x36d6ac.tableId,
          ...Object.values(_0x36d6ac.ranges[0] ?? {}),
        ].join("|")
      : null,
    _0x1d1cae = _0x40c945.selectionKey === _0x1ac783 ? _0x40c945.value : null,
    _0x14575a = _0x3856d9(() => {
      var _0x5996b1, _0x196584, _0x2077ca, _0x4fd76e, _0x21ee67, _0x40fbc4;
      if (!_0x36d6ac) {
        _0x31fddc(null);
        return;
      }
      let _0x15f4af = _0x1ad286.getRenderUnitById(_0x36d6ac.unitId),
        _0x31f9ce = _0x15f4af == null ? undefined : _0x15f4af.scene,
        _0x4129d7 =
          _0x31f9ce == null || (_0x5996b1 = _0x31f9ce.getObject) == null
            ? undefined
            : _0x5996b1.call(
                _0x31f9ce,
                _0x4b5215(
                  _0x36d6ac.unitId,
                  _0x36d6ac.subUnitId,
                  _0x36d6ac.elementId,
                ),
              );
      if (!_0x31f9ce || !_0x4129d7) {
        _0x31fddc(null);
        return;
      }
      let _0x164681 =
          _0x15f4af == null ||
          (_0x196584 = _0x15f4af.engine) == null ||
          (_0x2077ca = _0x196584.getCanvasElement) == null
            ? undefined
            : _0x2077ca.call(_0x196584),
        _0x2e5281 = (_0x164681 == null ||
        (_0x4fd76e = _0x164681.getBoundingClientRect) == null
          ? undefined
          : _0x4fd76e.call(_0x164681)) ?? { left: 0, top: 0, width: 0 },
        _0x113a63 = _0x50039e(
          (_0x164681 == null ? undefined : _0x164681.style["width"]) ?? "",
        ),
        _0x307da9 = _0x113a63 > 0 ? _0x2e5281.width / _0x113a63 : 1,
        _0x1a8562 = ((_0x21ee67 = _0x31f9ce.getAncestorScale) == null
          ? undefined
          : _0x21ee67.call(_0x31f9ce)) ?? { scaleX: 1, scaleY: 1 },
        _0x2b6b90 =
          (_0x40fbc4 = _0x31f9ce.getViewport) == null
            ? undefined
            : _0x40fbc4.call(_0x31f9ce, _0x31da2f),
        _0x2c9e87 = _0x1b4a2e.getTable(_0x36d6ac.unitId, _0x36d6ac.tableId);
      _0x31fddc(
        pl({
          canvasRect: _0x2e5281,
          canvasScale: _0x307da9,
          object: _0x4129d7,
          scale: _0x1a8562,
          scroll: {
            x: (_0x2b6b90 == null ? undefined : _0x2b6b90.viewportScrollX) ?? 0,
            y: (_0x2b6b90 == null ? undefined : _0x2b6b90.viewportScrollY) ?? 0,
          },
          selection: _0x36d6ac,
          table: _0x2c9e87,
          viewportWidth: window.innerWidth,
        }),
      );
    }, [_0x1ad286, _0x1b4a2e, _0x36d6ac]);
  _0x52562f(() => {
    var _0x3219e3;
    let _0x4d387b = requestAnimationFrame(_0x14575a);
    if (!_0x36d6ac) return () => cancelAnimationFrame(_0x4d387b);
    let _0x5d41b6 = _0x1ad286.getRenderUnitById(_0x36d6ac.unitId),
      _0x26ed9f = _0x5d41b6 == null ? undefined : _0x5d41b6.scene,
      _0x5d367d =
        _0x26ed9f == null
          ? undefined
          : _0x26ed9f.getObject(
              _0x4b5215(
                _0x36d6ac.unitId,
                _0x36d6ac.subUnitId,
                _0x36d6ac.elementId,
              ),
            ),
      _0x3537f8 = fl(
        _0x14575a,
        [
          _0x5d41b6 == null
            ? undefined
            : _0x5d41b6.engine["onTransformChange$"],
          _0x26ed9f == null ? undefined : _0x26ed9f.onTransformChange$,
          _0x5d367d == null ? undefined : _0x5d367d.onTransformChange$,
          _0x26ed9f == null ||
          (_0x3219e3 = _0x26ed9f.getViewport(_0x31da2f)) == null
            ? undefined
            : _0x3219e3.onScrollAfter$,
        ],
        _0x5d41b6 == null ? undefined : _0x5d41b6.engine["getCanvasElement"](),
      );
    return (
      window.addEventListener("resize", _0x14575a),
      () => {
        (cancelAnimationFrame(_0x4d387b),
          _0x3537f8(),
          window.removeEventListener("resize", _0x14575a));
      }
    );
  }, [_0x14575a, _0x1ad286, _0x36d6ac]);
  let _0x2b3266 = _0x36d6ac
      ? _0x1b4a2e.getTable(_0x36d6ac.unitId, _0x36d6ac.tableId)
      : null,
    _0x35c937 = oo(_0x2b3266, _0x36d6ac),
    _0x382efa = _0x35c937.values,
    _0x1d5bfd = _0x3856d9(
      (_0x1d3e7e) => {
        if (!_0x36d6ac) return;
        let _0x5eabfc = _0x36d6ac.ranges[0],
          _0x58ff75 = _0x1b4a2e.getTable(_0x36d6ac.unitId, _0x36d6ac.tableId);
        !_0x5eabfc ||
          !_0x58ff75 ||
          _0x443f71.executeCommand(_0x3f8728.id, {
            unitId: _0x36d6ac.unitId,
            tableId: _0x36d6ac.tableId,
            patch: _0x1d3e7e(_0x58ff75, _0x5eabfc),
          });
      },
      [_0x443f71, _0x1b4a2e, _0x36d6ac],
    ),
    _0x859c42 = _0x3856d9(
      (_0x47cb04) => {
        _0x36d6ac &&
          _0x443f71.executeCommand(_0x3f8728.id, {
            unitId: _0x36d6ac.unitId,
            tableId: _0x36d6ac.tableId,
            patch: { styleId: _0x47cb04 },
          });
      },
      [_0x443f71, _0x36d6ac],
    ),
    _0x21f60b = _0x3856d9(
      (_0x13e931) => {
        _0x36d6ac &&
          _0x443f71.executeCommand(_0x3f8728.id, {
            unitId: _0x36d6ac.unitId,
            tableId: _0x36d6ac.tableId,
            patch: { options: _0x13e931 },
          });
      },
      [_0x443f71, _0x36d6ac],
    ),
    _0x29108e = _0x3856d9(
      (_0x45656a, _0x2e09a9) => {
        _0x10bfad({
          selectionKey: _0x1ac783,
          value: _0x2e09a9 ? _0x45656a : null,
        });
      },
      [_0x1ac783],
    ),
    _0xcb5924 = _0x47b680(
      () => _0x54aa8e((_0xa9ac5c) => _0x2c0ade.getColorFromTheme(_0xa9ac5c)),
      [_0x2c0ade],
    );
  if (!_0x36d6ac || !_0x5671be || !_0x2b3266) return null;
  let _0x2396a8 = {
      left: _0x5671be.left,
      top: _0x5671be.top,
      width: "max-content",
      maxWidth: "min(760px, calc(100vw - 24px))",
      minHeight: 42,
      transform: "translateX(-50%)",
      zIndex: 10050,
    },
    _0x20f8e4 = [
      {
        labelKey: "slides-table-ui.editorToolbar.alignLeft",
        value: _0x582ddb.LEFT,
        icon: _0x62bf85(_0x4a868b, {}),
      },
      {
        labelKey: "slides-table-ui.editorToolbar.alignCenter",
        value: _0x582ddb.CENTER,
        icon: _0x62bf85(_0x35743f, {}),
      },
      {
        labelKey: "slides-table-ui.editorToolbar.alignRight",
        value: _0x582ddb.RIGHT,
        icon: _0x62bf85(_0x5ec192, {}),
      },
      {
        labelKey: "slides-table-ui.editorToolbar.alignJustify",
        value: _0x582ddb.JUSTIFIED,
        icon: _0x62bf85(_0x46c6a9, {}),
      },
    ],
    _0x456e29 = [
      {
        labelKey: "slides-table-ui.editorToolbar.alignTop",
        value: _0x1ba0d9.TOP,
        icon: _0x62bf85(_0x34b6aa, {}),
      },
      {
        labelKey: "slides-table-ui.editorToolbar.alignMiddle",
        value: _0x1ba0d9.MIDDLE,
        icon: _0x62bf85(_0x3780d1, {}),
      },
      {
        labelKey: "slides-table-ui.editorToolbar.alignBottom",
        value: _0x1ba0d9.BOTTOM,
        icon: _0x62bf85(_0x926af6, {}),
      },
    ],
    _0x16e425 = _0x36d6ac.ranges[0],
    _0x1f0717 = _0x35c937.mergeState,
    _0x2bdf1b = co(_0x2b3266, _0x36d6ac),
    _0x187789 =
      (_0x2bdf1b == null ? undefined : _0x2bdf1b.kind) === "row"
        ? _0x493241.t("slides-table-ui.contextMenu.deleteRow")
        : (_0x2bdf1b == null ? undefined : _0x2bdf1b.kind) === "column"
          ? _0x493241.t("slides-table-ui.contextMenu.deleteColumn")
          : null,
    _0x18a7e3 = () => {
      _0x2bdf1b &&
        _0x443f71.executeCommand(_0x2bdf1b.commandId, _0x2bdf1b.params);
    },
    _0x158096 =
      (_0x1f0717 == null ? undefined : _0x1f0717.action) === "unmerge"
        ? _0x493241.t("slides-table-ui.editorToolbar.unmergeCells")
        : (_0x1f0717 == null ? undefined : _0x1f0717.action) === "merge"
          ? _0x493241.t("slides-table-ui.editorToolbar.mergeCells")
          : null,
    _0x4e761d = () => {
      let _0x28781d = so(
        _0x36d6ac,
        (_0x1f0717 == null ? undefined : _0x1f0717.action) ?? null,
        (_0x1f0717 == null ? undefined : _0x1f0717.range) ?? _0x16e425 ?? null,
      );
      _0x28781d &&
        _0x443f71.executeCommand(_0x28781d.commandId, _0x28781d.params);
    };
  return _0x4f34d5("div", {
    "data-u-comp": "slide-table-floating-toolbar",
    role: "toolbar",
    className: _0x2a7ac1(
      "univer-fixed\x20univer-box-border\x20univer-flex\x20univer-max-w-[760px]\x20univer-flex-nowrap\x20univer-items-center\x20univer-rounded\x20univer-bg-gray-0\x20univer-px-1\x20univer-py-1\x20univer-shadow-sm\x20dark:!univer-border-gray-700\x20dark:!univer-bg-gray-900",
      _0x470cce,
    ),
    dir: _0x36adbb,
    style: { ..._0x2396a8, direction: _0x36adbb },
    onMouseDownCapture: _0x4f4ee9,
    onPointerDownCapture: _0x4f4ee9,
    onMouseDown: _0x534f0e,
    onPointerDown: _0x534f0e,
    children: [
      _0x2bdf1b && _0x187789
        ? _0x4f34d5(_0x536f29, {
            children: [
              _0x62bf85(wo, {
                children: _0x62bf85(To, {
                  "data-toolbar-item":
                    _0x2bdf1b.kind === "row" ? "delete-row" : "delete-column",
                  title: _0x187789,
                  onClick: _0x18a7e3,
                  children: _0x62bf85(_0x51d027, {}),
                }),
              }),
              _0x62bf85(_0x3e9729, { orientation: "vertical" }),
            ],
          })
        : null,
      _0x158096
        ? _0x4f34d5(_0x536f29, {
            children: [
              _0x62bf85(wo, {
                children: _0x62bf85(To, {
                  "data-toolbar-item": "merge-cells",
                  title: _0x158096,
                  onClick: _0x4e761d,
                  children:
                    (_0x1f0717 == null ? undefined : _0x1f0717.action) ===
                    "unmerge"
                      ? _0x62bf85(_0x39cb4d, {})
                      : _0x62bf85(_0x84941e, {}),
                }),
              }),
              _0x62bf85(_0x3e9729, { orientation: "vertical" }),
            ],
          })
        : null,
      _0x4f34d5(wo, {
        children: [
          _0x62bf85(fo, {
            color: _0x382efa.backgroundColor,
            value: Ia(_0x382efa.backgroundFill),
            gradientValue: Ba(
              _0x382efa.backgroundFill,
              _0x382efa.backgroundColor,
            ),
            previewStyle: Ha(
              _0x382efa.backgroundFill,
              _0x382efa.backgroundColor,
            ),
            showPreview: false,
            tableFill: _0x382efa.backgroundFill,
            mixed: !!_0x382efa.mixed["backgroundFill"],
            open: _0x1d1cae === "background",
            onOpenChange: (_0x302f41) => _0x29108e("background", _0x302f41),
            onTableFillChange: (_0x1c70ff) =>
              _0x1d5bfd((_0x5e018c, _0x442ef3) =>
                Pr(_0x5e018c, _0x442ef3, _0x1c70ff),
              ),
            children: _0x62bf85(_0x2b60fd, {
              extend: { colorChannel1: _0x382efa.backgroundColor },
            }),
          }),
          _0x62bf85(ko, {
            direction: _0x36adbb,
            color: _0x382efa.borderColor,
            width: _0x382efa.borderWidth,
            dash: _0x382efa.borderDash,
            presets: bo,
            open: _0x1d1cae === "border",
            mixed: !!(
              _0x382efa.mixed["borderColor"] ||
              _0x382efa.mixed["borderWidth"] ||
              _0x382efa.mixed["borderDash"]
            ),
            onOpenChange: (_0x15f085) => _0x29108e("border", _0x15f085),
            onSelectPreset: (_0xc4d6dc) =>
              _0x1d5bfd((_0x3f2bd1, _0xd72868) =>
                Rr(_0x3f2bd1, _0xd72868, _0xc4d6dc),
              ),
            onChangeColor: (_0x5cdac5) =>
              _0x1d5bfd((_0xc20fcc, _0x17465d) =>
                Lr(_0xc20fcc, _0x17465d, { color: _0x5cdac5 }),
              ),
            onChangeWidth: (_0x42cf9b) =>
              _0x1d5bfd((_0x2fb82c, _0xa5354) =>
                Lr(_0x2fb82c, _0xa5354, {
                  width: _0x42cf9b,
                  dash: _0x42cf9b === 0 ? _0x32edb5.None : undefined,
                }),
              ),
            onChangeDash: (_0x4e4410) =>
              _0x1d5bfd((_0x40abc3, _0x585f76) =>
                Lr(_0x40abc3, _0x585f76, { dash: _0x4e4410 }),
              ),
          }),
        ],
      }),
      _0x62bf85(_0x3e9729, { orientation: "vertical" }),
      _0x4f34d5(wo, {
        children: [
          _0x62bf85(_0x321b51, {
            ariaLabel: _0x493241.t("slides-table-ui.editorToolbar.fontFamily"),
            className: "univer-w-28",
            inputClassName: "univer-w-auto",
            value: _0x382efa.mixed["fontFamily"] ? "" : _0x382efa.fontFamily,
            onChange: (_0x4a91f2) =>
              _0x1d5bfd((_0x111d3b, _0x29d5fc) =>
                zr(_0x111d3b, _0x29d5fc, _0x4a91f2),
              ),
            onMouseDown: _0x534f0e,
            onPointerDown: _0x534f0e,
          }),
          _0x62bf85(No, {
            title: _0x493241.t("slides-table-ui.editorToolbar.fontSize"),
            widthClassName: "univer-w-14",
            value: _0x382efa.mixed["fontSize"]
              ? ""
              : String(_0x382efa.fontSize),
            options: _0x382efa.mixed["fontSize"]
              ? [{ label: "—", value: "" }, ..._o]
              : Ga(_o, String(_0x382efa.fontSize)),
            onChange: (_0x26ad69) => {
              let _0x4b7993 = Number(_0x26ad69);
              _0x26ad69 &&
                !Number.isNaN(_0x4b7993) &&
                _0x1d5bfd((_0x49a52f, _0x3ffcc5) =>
                  Br(_0x49a52f, _0x3ffcc5, _0x4b7993),
                );
            },
          }),
          _0x62bf85(Do, {
            open: _0x1d1cae === "textFormat",
            values: _0x382efa,
            horizontalAlignOptions: _0x20f8e4,
            verticalAlignOptions: _0x456e29,
            onOpenChange: (_0xc6229d) => _0x29108e("textFormat", _0xc6229d),
            onToggleStyle: (_0x730730) =>
              _0x1d5bfd((_0x2da316, _0x5d693b) =>
                ti(_0x2da316, _0x5d693b, _0x730730),
              ),
            onHorizontalAlign: (_0x2b49ec) =>
              _0x1d5bfd((_0x1a894d, _0x113950) =>
                kr(_0x1a894d, _0x113950, {
                  axis: "horizontal",
                  value: _0x2b49ec,
                }),
              ),
            onVerticalAlign: (_0x40e01e) =>
              _0x1d5bfd((_0x2fe593, _0x54cafa) =>
                kr(_0x2fe593, _0x54cafa, {
                  axis: "vertical",
                  value: _0x40e01e,
                }),
              ),
          }),
        ],
      }),
      _0x62bf85(_0x3e9729, { orientation: "vertical" }),
      _0x4f34d5(wo, {
        children: [
          _0x62bf85(jo, {
            "data-toolbar-item": "text-color",
            title: _0x493241.t("slides-table-ui.editorToolbar.textColor"),
            color: _0x382efa.textColor,
            mixed: !!(
              _0x382efa.mixed["textColor"] || _0x382efa.mixed["textFill"]
            ),
            icon: "font",
            open: _0x1d1cae === "textColor",
            onOpenChange: (_0x55a9fe) => _0x29108e("textColor", _0x55a9fe),
            onChange: (_0x1aa6a1) =>
              _0x1d5bfd((_0x41b31f, _0x5408bc) =>
                Ir(_0x41b31f, _0x5408bc, {
                  type: "solid",
                  color: _0x1aa6a1,
                  opacity: 1,
                }),
              ),
          }),
          _0x62bf85(jo, {
            "data-toolbar-item": "text-background",
            title: _0x493241.t(
              "slides-table-ui.editorToolbar.textBackgroundColor",
            ),
            color: _0x382efa.textBackgroundColor,
            mixed: !!_0x382efa.mixed["textBackgroundColor"],
            icon: "bucket",
            open: _0x1d1cae === "textBackground",
            onOpenChange: (_0x3d7882) => _0x29108e("textBackground", _0x3d7882),
            onChange: (_0xb69c62) =>
              _0x1d5bfd((_0x37329d, _0x1e8697) =>
                ti(_0x37329d, _0x1e8697, { bg: { rgb: _0xb69c62 } }),
              ),
          }),
        ],
      }),
      _0x62bf85(_0x3e9729, { orientation: "vertical" }),
      _0x62bf85(wo, {
        children: _0x62bf85(Oo, {
          open: _0x1d1cae === "theme",
          onOpenChange: (_0x3c4643) => _0x29108e("theme", _0x3c4643),
          children: _0x62bf85(Ro, {
            currentStyleId: _0x2b3266.styleId,
            currentOptions: _0x2b3266.options ?? {},
            direction: _0x36adbb,
            palette: _0xcb5924,
            onApplyTheme: (_0x255312) => {
              (_0x859c42(_0x255312), _0x29108e("theme", false));
            },
            onChangeOptions: _0x21f60b,
          }),
        }),
      }),
      _0x62bf85(_0x3e9729, { orientation: "vertical" }),
      _0x62bf85(wo, {
        children: _0x62bf85(To, {
          "data-toolbar-item": "delete-table",
          title: _0x493241.t("slides-table-ui.contextMenu.deleteTable"),
          onClick: () => _0x443f71.executeCommand(xi.id),
          children: _0x62bf85(_0x51d027, {}),
        }),
      }),
    ],
  });
}
let _l = class extends _0x496a83 {
  constructor(
    _0x29ed9c = yr,
    _0x3d03e9,
    _0x593f92,
    _0x11bba3,
    _0x2ba767,
    _0x22fad1,
    _0x577d5d,
    _0x59a201,
  ) {
    (super(),
      (this._config = _0x29ed9c),
      (this._injector = _0x3d03e9),
      (this._configService = _0x593f92),
      (this._renderManagerService = _0x11bba3),
      (this._commandService = _0x2ba767),
      (this._menuManagerService = _0x22fad1),
      (this._shortcutService = _0x577d5d),
      (this._uiPartsService = _0x59a201));
    let { ..._0x362147 } = _0x3d7a71({}, yr, this._config);
    (this._configService["setConfig"](vr, _0x362147),
      this._initCommands(),
      this._initShortcuts());
  }
  onStarting() {
    let _0x27a496 = this._injector;
    (_0x27a496.has(Sa) || _0x27a496.add([Sa]),
      _0x27a496.add([ts]),
      _0x27a496.add([Vs]),
      _0x27a496.has(G) || _0x27a496.add([G]),
      _0x27a496.has(sa) || _0x27a496.add([sa]),
      _0x27a496.has(sl) || _0x27a496.add([sl]),
      _0x924350(_0x27a496, [[ts], [G], [sa], [Sa], [sl]]),
      this.disposeWithMe(
        _0x27a496.get(_0x56a715).registerAdapter(_0x27a496.get(sl)),
      ));
  }
  onReady() {
    (this._menuManagerService["mergeMenu"](Rs),
      this._injector["get"](Vs),
      this.disposeWithMe(
        this._renderManagerService["registerRenderModule"](
          _0x24887c.UNIVER_SLIDE,
          Ac,
        ),
      ),
      this.disposeWithMe(
        this._uiPartsService["registerComponent"](_0x1e346c.CONTENT, () =>
          _0x162409(gl, this._injector),
        ),
      ));
  }
  _initCommands() {
    [...zi, ...ga, Ca].forEach((_0x516c8b) => {
      this.disposeWithMe(this._commandService["registerCommand"](_0x516c8b));
    });
  }
  _initShortcuts() {
    [..._a, ...va].forEach((_0x14328e) => {
      this.disposeWithMe(this._shortcutService["registerShortcut"](_0x14328e));
    });
  }
};
(W(_l, "type", _0x24887c.UNIVER_SLIDE),
  W(_l, "pluginName", "UniverSlidesTableUIPlugin"),
  W(_l, "packageName", br),
  W(_l, "version", xr),
  (_l = oa(
    [
      _0x31b9be(_0x186520, _0x14a204, _0x258940, _0x2c3996, _0x542970),
      Y(1, _0x487340(_0x2b45a4)),
      Y(2, _0x34ee95),
      Y(3, _0x480a87),
      Y(4, _0x59c1bd),
      Y(5, _0x5c187f),
      Y(6, _0x379dfd),
      Y(7, _0x48a105),
    ],
    _l,
  )));
function vl(_0x19f0b6) {
  return _0x19f0b6 === true || _0x19f0b6 === 1;
}
function yl(_0x1a199f) {
  return (
    typeof (_0x1a199f == null ? undefined : _0x1a199f.content) == "string" &&
    _0x1a199f.content["trim"]().length > 0
  );
}
function bl(_0x31ef2a, _0x24ff59) {
  let _0x2da0b0 = _0x31ef2a == null ? undefined : _0x31ef2a.bBox,
    _0x120397 =
      (_0x2da0b0 == null ? undefined : _0x2da0b0.aba) ||
      (_0x2da0b0 == null ? undefined : _0x2da0b0.ba) ||
      _0x24ff59.asc ||
      0,
    _0xd29b93 =
      (_0x2da0b0 == null ? undefined : _0x2da0b0.abd) ||
      (_0x2da0b0 == null ? undefined : _0x2da0b0.bd) ||
      _0x24ff59.dsc ||
      0;
  return _0x120397 === 0 && _0xd29b93 === 0
    ? null
    : { ascent: _0x120397, descent: _0xd29b93 };
}
function xl(_0x185a3b, _0x438b12, _0x123796) {
  var _0x1508a6;
  if (_0x123796 === undefined || _0x123796 === _0x1ba0d9.UNSPECIFIED) return 0;
  let _0xc00cda = _0x185a3b.getSkeletonData();
  if (!(
    _0xc00cda != null &&
    (_0x1508a6 = _0xc00cda.pages) != null &&
    _0x1508a6.length
  ))
    return 0;
  let _0x280d5c = 1 / 0,
    _0x4a7bda = -1 / 0,
    _0x30f5cc = 0;
  for (let _0x2967c3 of _0xc00cda.pages) {
    let _0x21050e = _0x2967c3.marginTop ?? 0;
    for (let _0x493d34 of _0x2967c3.sections ?? []) {
      let _0xe5e227 = _0x493d34.top ?? 0;
      for (let _0x311252 of _0x493d34.columns ?? [])
        for (let _0x4d8ce3 of _0x311252.lines ?? []) {
          let _0x39f655 =
            _0x30f5cc +
            _0x21050e +
            _0xe5e227 +
            (_0x4d8ce3.top ?? 0) +
            (_0x4d8ce3.marginTop ?? 0) +
            (_0x4d8ce3.paddingTop ?? 0) +
            (_0x4d8ce3.asc ?? 0);
          for (let _0x59f06d of _0x4d8ce3.divides ?? [])
            for (let _0x4fa7bd of _0x59f06d.glyphGroup ?? []) {
              if (!yl(_0x4fa7bd)) continue;
              let _0x411d39 = bl(_0x4fa7bd, _0x4d8ce3);
              _0x411d39 &&
                ((_0x280d5c = Math.min(
                  _0x280d5c,
                  _0x39f655 - _0x411d39.ascent,
                )),
                (_0x4a7bda = Math.max(
                  _0x4a7bda,
                  _0x39f655 + _0x411d39.descent,
                )));
            }
        }
    }
    let _0x190cee = Number.isFinite(_0x2967c3.pageHeight)
      ? _0x2967c3.pageHeight
      : _0x2967c3.height;
    _0x30f5cc += _0x190cee ?? 0;
  }
  return !Number.isFinite(_0x280d5c) || !Number.isFinite(_0x4a7bda)
    ? 0
    : _0x123796 === _0x1ba0d9.BOTTOM
      ? _0x438b12 - _0x4a7bda
      : _0x123796 === _0x1ba0d9.MIDDLE
        ? _0x438b12 / 2 - (_0x280d5c + _0x4a7bda) / 2
        : _0x123796 === _0x1ba0d9.TOP
          ? -_0x280d5c
          : 0;
}
function Sl(_0x55c85b, _0x586c63) {
  let _0x538f6b = _0x16106d.deepClone(_0x55c85b),
    _0x29ac9d = _0x538f6b.documentStyle ?? {},
    _0x25bd4a = { ..._0x29ac9d.renderConfig };
  if (_0x586c63.horizontalAlign !== undefined) {
    _0x25bd4a.horizontalAlign = _0x586c63.horizontalAlign;
    let _0x4f8d87 = _0x538f6b.body,
      _0x214770 = _0x4f8d87 == null ? undefined : _0x4f8d87.paragraphs;
    _0x214770 &&
      (_0x4f8d87.paragraphs = _0x214770.map((_0x80a2dc) => {
        var _0x267af0;
        return ((_0x267af0 = _0x80a2dc.paragraphStyle) == null
          ? undefined
          : _0x267af0.horizontalAlign) === undefined
          ? {
              ..._0x80a2dc,
              paragraphStyle: {
                ..._0x80a2dc.paragraphStyle,
                horizontalAlign: _0x586c63.horizontalAlign,
              },
            }
          : _0x80a2dc;
      }));
  }
  return (
    _0x586c63.verticalAlign !== undefined &&
      (_0x25bd4a.verticalAlign = _0x586c63.verticalAlign),
    (_0x538f6b.documentStyle = {
      ..._0x29ac9d,
      renderConfig: Object.keys(_0x25bd4a).length > 0 ? _0x25bd4a : undefined,
    }),
    _0x538f6b
  );
}
function Cl(_0x1bcc1d) {
  let _0x9aed15 = _0x1bcc1d.body,
    _0x25ca16 = _0x9aed15 == null ? undefined : _0x9aed15.paragraphs,
    _0x378096 = _0x9aed15 == null ? undefined : _0x9aed15.dataStream;
  if (!_0x9aed15 || !_0x378096) return;
  let _0x3fb114 = [];
  for (let _0x16154e = 0; _0x16154e < _0x378096.length; _0x16154e++)
    _0x378096[_0x16154e] === "\x0d" && _0x3fb114.push(_0x16154e);
  let _0x33e6de = new Set(
    (_0x25ca16 ?? [])
      .map((_0x2334ab) => _0x2334ab.paragraphId)
      .filter((_0x405f02) => !!_0x405f02),
  );
  _0x9aed15.paragraphs = _0x3fb114.map((_0x4b99b0, _0x41b51f) => {
    var _0xc37ec;
    return {
      ...(_0x25ca16 == null ? undefined : _0x25ca16[_0x41b51f]),
      startIndex: _0x4b99b0,
      paragraphId:
        (_0x25ca16 == null || (_0xc37ec = _0x25ca16[_0x41b51f]) == null
          ? undefined
          : _0xc37ec.paragraphId) ?? _0x1d2f62(_0x33e6de),
    };
  });
}
function wl(_0x5c4863, _0x2ca522) {
  var _0x525410, _0x3cbe9c;
  let _0x3a017c =
      (_0x525410 = _0x5c4863.documentStyle) == null
        ? undefined
        : _0x525410.renderConfig,
    _0x3d26fb = Sl(_0x5c4863, {
      horizontalAlign:
        _0x2ca522.horizontalAlign ??
        (_0x3a017c == null ? undefined : _0x3a017c.horizontalAlign),
      verticalAlign: _0x2ca522.verticalAlign,
    });
  Cl(_0x3d26fb);
  let _0x389644 = _0x3d26fb.documentStyle ?? {},
    _0x28f3c1 = _0x2ca522.isHorizontal !== false,
    _0x1a3751 = {
      ..._0x389644.renderConfig,
      wrapStrategy:
        _0x2ca522.wrapStrategy ??
        ((_0x3cbe9c = _0x389644.renderConfig) == null
          ? undefined
          : _0x3cbe9c.wrapStrategy) ??
        _0x1931d3.WRAP,
    };
  return (
    delete _0x1a3751.horizontalAlign,
    _0x28f3c1
      ? (delete _0x1a3751.centerAngle, delete _0x1a3751.vertexAngle)
      : ((_0x1a3751.centerAngle = _0x593b52),
        (_0x1a3751.vertexAngle = _0x593b52)),
    (_0x3d26fb.documentStyle = {
      ..._0x389644,
      documentFlavor: _0x5ce310.UNSPECIFIED,
      marginTop: 0,
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
      pageSize: {
        width: _0x28f3c1 ? _0x2ca522.width : _0x2ca522.height,
        height: 1 / 0,
      },
      renderConfig: _0x1a3751,
    }),
    _0x3d26fb
  );
}
function Tl(_0x1ab086) {
  var _0x12ba4f;
  let {
      documentData: _0x2c20e1,
      id: _0x5a045a = "slide-table-document-renderer",
      isHorizontal: _0x18e0f6,
      localeService: _0x29392c,
      horizontalAlign: _0x1c1e87,
      verticalAlign: _0x14cedf,
      size: _0x47184e,
    } = _0x1ab086,
    _0x257882 = { width: _0x47184e.width, height: _0x47184e.height },
    _0x114b09 =
      (_0x12ba4f = _0x2c20e1.documentStyle) == null
        ? undefined
        : _0x12ba4f.renderConfig,
    _0x56930b =
      _0x14cedf ?? (_0x114b09 == null ? undefined : _0x114b09.verticalAlign),
    _0x387d5b = vl(
      _0x1ab086.shapeTextOpticalVerticalAlign ??
        (_0x114b09 == null
          ? undefined
          : _0x114b09.shapeTextOpticalVerticalAlign),
    ),
    _0x49820c = new _0x2d779f(
      wl(_0x2c20e1, {
        width: _0x257882.width,
        height: _0x257882.height,
        verticalAlign: _0x387d5b ? _0x1ba0d9.TOP : _0x56930b,
        horizontalAlign: _0x1c1e87,
        isHorizontal: _0x18e0f6,
        wrapStrategy: _0x1ab086.wrapStrategy,
      }),
    ),
    _0xd9bf0e = new _0x4f628b(_0x49820c),
    _0x2f3c9d = _0x4dc047.create(_0xd9bf0e, _0x29392c);
  _0x2f3c9d.calculate();
  let _0x471671 = _0x2f3c9d.getActualSize().actualHeight,
    _0x58dd67 = Math.max(_0x257882.height, _0x471671),
    _0x36a95b = 0;
  (!_0x387d5b &&
    _0x471671 < _0x257882.height &&
    (_0x56930b === _0x1ba0d9.MIDDLE
      ? (_0x36a95b = (_0x257882.height - _0x471671) / 2)
      : _0x56930b === _0x1ba0d9.BOTTOM &&
        (_0x36a95b = _0x257882.height - _0x471671)),
    _0x49820c.updateDocumentStyle({
      pageSize: {
        width: _0x18e0f6 === false ? _0x257882.height : _0x257882.width,
        height: _0x58dd67,
      },
    }),
    _0x49820c.updateDocumentDataMargin({ t: _0x36a95b }),
    _0x2f3c9d.calculate());
  let _0x5b122f = new _0x1e8497(_0x5a045a, _0x2f3c9d, {
    pageMarginLeft: 0,
    pageMarginTop: 0,
  });
  _0x5b122f.resize(_0x257882.width, _0x58dd67);
  let _0x3b838e = _0x387d5b ? xl(_0x2f3c9d, _0x257882.height, _0x56930b) : 0;
  return {
    documents: _0x5b122f,
    skeleton: _0x2f3c9d,
    docViewModel: _0xd9bf0e,
    docModel: _0x49820c,
    width: _0x257882.width,
    minHeight: _0x257882.height,
    actualHeight: _0x471671,
    contentHeight: _0x58dd67,
    marginTop: _0x36a95b,
    opticalVerticalOffset: _0x3b838e,
    dispose: () => {
      (_0x5b122f.dispose(),
        _0x2f3c9d.dispose(),
        _0xd9bf0e.dispose(),
        _0x49820c.dispose());
    },
  };
}
function El(_0x5acef2, _0x4e7259) {
  if (_0x4e7259 !== undefined) return { top: 0, height: _0x4e7259 };
  let _0x8dca6e =
    _0x5acef2.actualHeight > _0x5acef2.minHeight &&
    _0x5acef2.opticalVerticalOffset < 0
      ? _0x5acef2.opticalVerticalOffset
      : 0;
  return { top: _0x8dca6e, height: _0x5acef2.contentHeight - _0x8dca6e };
}
function Dl(_0x3ceb5d, _0xe1d323, _0x53a7ae, _0x31efe6, _0x35d857, _0x1d8778) {
  if (
    (_0x3ceb5d.save(),
    _0x3ceb5d.translateWithPrecision(_0x53a7ae, _0x31efe6),
    _0x35d857)
  ) {
    let _0x4ffe3a = El(_0xe1d323, _0x1d8778);
    (_0x3ceb5d.beginPath(),
      _0x3ceb5d.rect(0, _0x4ffe3a.top, _0xe1d323.width, _0x4ffe3a.height),
      _0x3ceb5d.clip());
  }
  (_0xe1d323.opticalVerticalOffset &&
    _0x3ceb5d.translateWithPrecision(0, _0xe1d323.opticalVerticalOffset),
    _0xe1d323.documents["draw"](_0x3ceb5d),
    _0x3ceb5d.restore());
}
function Ol(_0xec0f07) {
  try {
    return JSON.stringify(_0xec0f07);
  } catch {
    return String(_0xec0f07);
  }
}
function kl(_0x2a92ac) {
  let _0x2d1460 = _0x2a92ac;
  return typeof _0x2d1460.getCurrentLocale == "function"
    ? _0x2d1460.getCurrentLocale()
    : "";
}
function Al(_0x1f6e5, _0x45d34b, _0x251a22) {
  var _0x26ed3d;
  let _0x1e3b6f =
    (_0x26ed3d = _0x45d34b.documentStyle) == null
      ? undefined
      : _0x26ed3d.renderConfig;
  return Ol({
    cacheKey: _0x1f6e5.cacheKey,
    key: _0x1f6e5.key,
    text: _0x1f6e5.text,
    documentData: _0x1f6e5.cacheKey === undefined ? _0x45d34b : undefined,
    left: _0x1f6e5.left,
    top: _0x1f6e5.top,
    width: _0x1f6e5.width,
    height: _0x1f6e5.height,
    horizontalAlign:
      _0x1f6e5.horizontalAlign ??
      (_0x1e3b6f == null ? undefined : _0x1e3b6f.horizontalAlign),
    verticalAlign:
      _0x1f6e5.verticalAlign ??
      (_0x1e3b6f == null ? undefined : _0x1e3b6f.verticalAlign),
    isHorizontal: _0x1f6e5.isHorizontal,
    wrapStrategy: _0x1f6e5.wrapStrategy,
    clip: _0x1f6e5.clip,
    viewportHeight: _0x1f6e5.viewportHeight,
    shapeTextOpticalVerticalAlign:
      _0x1f6e5.shapeTextOpticalVerticalAlign ??
      (_0x1e3b6f == null ? undefined : _0x1e3b6f.shapeTextOpticalVerticalAlign),
    locale: kl(_0x251a22),
  });
}
function jl(_0x4c3ce1, _0x34dd6b) {
  var _0x1bf671;
  if (_0x4c3ce1.clip !== undefined) return _0x4c3ce1.clip;
  let _0x2afc24 =
    (_0x1bf671 = _0x34dd6b.documentStyle) == null
      ? undefined
      : _0x1bf671.renderConfig;
  return (
    (_0x4c3ce1.wrapStrategy ??
      (_0x2afc24 == null ? undefined : _0x2afc24.wrapStrategy)) !==
    _0x1931d3.OVERFLOW
  );
}
function Ml(_0x1e30fa) {
  var _0x37c3a1;
  (_0x1e30fa == null ||
    (_0x37c3a1 = _0x1e30fa.resources) == null ||
    _0x37c3a1.dispose(),
    _0x1e30fa &&
      ((_0x1e30fa.signature = undefined), (_0x1e30fa.resources = undefined)));
}
function Nl(_0x4a8471, _0x1f2128, _0x20eb92) {
  var _0xb2eecc;
  let {
    documentData: _0x1879ec,
    height: _0x5601be,
    horizontalAlign: _0x3f01cb,
    isHorizontal: _0x51f3bf,
    key: _0x3eeb88,
    left: _0x10af28,
    localeService: _0x45a516,
    text: _0x1d0f93,
    top: _0x178eef,
    verticalAlign: _0x20a67d,
    width: _0x2d5e73,
  } = _0x1f2128;
  if (
    !_0x45a516 ||
    _0x2d5e73 <= 0 ||
    _0x5601be <= 0 ||
    (!_0x1879ec && !_0x1d0f93)
  )
    return false;
  let _0x27f818 = _0x5832e3(_0x1879ec ?? Us(_0x3eeb88, 0, 0, _0x1d0f93 ?? "")),
    _0x1bdf6c =
      (_0xb2eecc = _0x27f818.documentStyle) == null
        ? undefined
        : _0xb2eecc.renderConfig,
    _0x2ce7da =
      _0x3f01cb ?? (_0x1bdf6c == null ? undefined : _0x1bdf6c.horizontalAlign),
    _0x573aa0 =
      _0x20a67d ?? (_0x1bdf6c == null ? undefined : _0x1bdf6c.verticalAlign),
    _0x33994f = _0x20eb92 ? Al(_0x1f2128, _0x27f818, _0x45a516) : undefined,
    _0x15b18a = jl(_0x1f2128, _0x27f818);
  if (
    _0x20eb92 != null &&
    _0x20eb92.resources &&
    _0x20eb92.signature === _0x33994f
  )
    return (
      Dl(
        _0x4a8471,
        _0x20eb92.resources,
        _0x10af28,
        _0x178eef,
        _0x15b18a,
        _0x1f2128.viewportHeight,
      ),
      true
    );
  _0x20eb92 != null && _0x20eb92.resources && Ml(_0x20eb92);
  let _0xf435f3 = Tl({
    id: "slide-table-text-" + _0x3eeb88,
    documentData: _0x27f818,
    size: { width: _0x2d5e73, height: _0x5601be },
    localeService: _0x45a516,
    horizontalAlign: _0x2ce7da,
    verticalAlign: _0x573aa0,
    isHorizontal: _0x51f3bf,
    wrapStrategy: _0x1f2128.wrapStrategy,
    shapeTextOpticalVerticalAlign:
      _0x1f2128.shapeTextOpticalVerticalAlign ??
      (_0x1bdf6c == null ? undefined : _0x1bdf6c.shapeTextOpticalVerticalAlign),
  });
  return (
    Dl(
      _0x4a8471,
      _0xf435f3,
      _0x10af28,
      _0x178eef,
      _0x15b18a,
      _0x1f2128.viewportHeight,
    ),
    _0x20eb92
      ? ((_0x20eb92.signature = _0x33994f), (_0x20eb92.resources = _0xf435f3))
      : _0xf435f3.dispose(),
    true
  );
}
const Pl = "#7f8ea3",
  Fl = "#c7d2e3",
  Il = "#ffffff",
  Ll = "#1a73e8",
  Rl = "#ffffff",
  zl = "#e8f1ff",
  Bl = "#9fb2cc",
  Vl = "#3f8cff",
  Hl = "#5f6368",
  Ul = "#ffffff";
function Wl(_0x1f2663, _0x10359c) {
  let _0x412f9e = _0x1f2663.row + Math.max(1, _0x1f2663.rowSpan) - 1,
    _0x3693cf = _0x1f2663.column + Math.max(1, _0x1f2663.columnSpan) - 1;
  return _0x10359c.some((_0x1d8bb7) => {
    let _0x353c23 = Math.min(_0x1d8bb7.startRow, _0x1d8bb7.endRow),
      _0x390738 = Math.max(_0x1d8bb7.startRow, _0x1d8bb7.endRow),
      _0x5c2da0 = Math.min(_0x1d8bb7.startColumn, _0x1d8bb7.endColumn),
      _0x19dfc4 = Math.max(_0x1d8bb7.startColumn, _0x1d8bb7.endColumn);
    return (
      _0x1f2663.row <= _0x390738 &&
      _0x412f9e >= _0x353c23 &&
      _0x1f2663.column <= _0x19dfc4 &&
      _0x3693cf >= _0x5c2da0
    );
  });
}
var Gl = class extends _0x1cf7dc {
  constructor(_0x4c8671, _0x29e21f) {
    (super(_0x4c8671, {
      ..._0x29e21f,
      fill: Il,
      stroke: Pl,
      strokeWidth: 1,
      evented: true,
    }),
      W(this, "isDrawingObject", true),
      W(this, "_controlButtonMode", undefined),
      W(this, "_table", undefined),
      W(this, "_previewTable", null),
      W(this, "_selection", null),
      W(this, "_cellHover", null),
      W(this, "_editingCell", null),
      W(this, "_controlHover", null),
      W(this, "_controlState", null),
      W(this, "_localeService", undefined),
      W(this, "_tableThemePalette", undefined),
      W(this, "_tableThemes", undefined),
      W(this, "_themeService", undefined),
      W(this, "_renderModelCache", null),
      W(this, "_visibleCellCache", null),
      W(this, "_textRenderCaches", new Map()),
      (this._controlButtonMode = _0x29e21f.controlButtonMode ?? "all"),
      (this._table = _0x29e21f.table ?? null),
      (this._localeService = _0x29e21f.localeService),
      (this._tableThemePalette = _0x29e21f.tableThemePalette),
      (this._tableThemes = _0x29e21f.tableThemes),
      (this._themeService = _0x29e21f.themeService));
  }
  setTable(_0x4e93d6) {
    ((this._table = _0x4e93d6 ?? null), this.makeDirty(true));
  }
  setTableThemes(_0x1738e2) {
    ((this._tableThemes = _0x1738e2), this.makeDirty(true));
  }
  getTable() {
    return this._table;
  }
  setPreviewTable(_0x251f29) {
    ((this._previewTable = _0x251f29), this.makeDirty(true));
  }
  setLocaleService(_0x3429ca) {
    this._localeService !== _0x3429ca &&
      ((this._localeService = _0x3429ca),
      this._disposeTextRenderCaches(),
      this.makeDirty(true));
  }
  setTableThemePalette(_0x5d54fa) {
    ((this._tableThemePalette = _0x5d54fa), this.makeDirty(true));
  }
  setTableSelection(_0x4d9e2c) {
    ((this._selection = _0x4d9e2c
      ? {
          kind: _0x4d9e2c.kind,
          ranges: _0x4d9e2c.ranges["map"]((_0x2f2f9c) => ({ ..._0x2f2f9c })),
          active: _0x4d9e2c.active ? { ..._0x4d9e2c.active } : undefined,
        }
      : null),
      _0x4d9e2c || ((this._cellHover = null), (this._controlState = null)),
      this.makeDirty(true));
  }
  getTableSelection() {
    return this._selection
      ? {
          kind: this._selection["kind"],
          ranges: this._selection["ranges"].map((_0x259cb7) => ({
            ..._0x259cb7,
          })),
          active: this._selection["active"]
            ? { ...this._selection["active"] }
            : undefined,
        }
      : null;
  }
  setEditingCell(_0x2747fe) {
    var _0x4ce22a, _0x42f561;
    let _0x4e2b05 = (_0x2747fe == null ? undefined : _0x2747fe.row) ?? null,
      _0x2d64aa = (_0x2747fe == null ? undefined : _0x2747fe.column) ?? null,
      _0x5da868 =
        ((_0x4ce22a = this._editingCell) == null ? undefined : _0x4ce22a.row) ??
        null,
      _0x359e57 =
        ((_0x42f561 = this._editingCell) == null
          ? undefined
          : _0x42f561.column) ?? null;
    (_0x4e2b05 !== _0x5da868 || _0x2d64aa !== _0x359e57) &&
      ((this._editingCell = _0x2747fe
        ? { row: _0x2747fe.row, column: _0x2747fe.column }
        : null),
      this.makeDirty(true));
  }
  getEditingCell() {
    return this._editingCell ? { ...this._editingCell } : null;
  }
  setTableControlHover(_0x27ab5c) {
    var _0x5951ff, _0xc02b20, _0x12da0e;
    let _0x1d5df6 = (_0x27ab5c == null ? undefined : _0x27ab5c.kind) ?? null,
      _0x39b029 = (_0x27ab5c == null ? undefined : _0x27ab5c.row) ?? null,
      _0xf8108 = (_0x27ab5c == null ? undefined : _0x27ab5c.column) ?? null,
      _0xfca74c =
        ((_0x5951ff = this._controlHover) == null
          ? undefined
          : _0x5951ff.kind) ?? null,
      _0xb2efc6 =
        ((_0xc02b20 = this._controlHover) == null
          ? undefined
          : _0xc02b20.row) ?? null,
      _0x404fdd =
        ((_0x12da0e = this._controlHover) == null
          ? undefined
          : _0x12da0e.column) ?? null;
    return _0x1d5df6 === _0xfca74c &&
      _0x39b029 === _0xb2efc6 &&
      _0xf8108 === _0x404fdd
      ? false
      : ((this._controlHover =
          _0x1d5df6 === null && _0x39b029 === null && _0xf8108 === null
            ? null
            : {
                kind: _0x27ab5c == null ? undefined : _0x27ab5c.kind,
                row: _0x39b029,
                column: _0xf8108,
              }),
        this.makeDirty(true),
        true);
  }
  setTableCellHover(_0x503608) {
    var _0x49841c, _0x4ed53e;
    let _0xc4b048 =
        ((_0x49841c = this._cellHover) == null ? undefined : _0x49841c.row) ??
        null,
      _0x55b6fa =
        ((_0x4ed53e = this._cellHover) == null
          ? undefined
          : _0x4ed53e.column) ?? null,
      _0xb988fa = (_0x503608 == null ? undefined : _0x503608.row) ?? null,
      _0x152312 = (_0x503608 == null ? undefined : _0x503608.column) ?? null;
    return _0xc4b048 === _0xb988fa && _0x55b6fa === _0x152312
      ? false
      : ((this._cellHover = _0x503608
          ? { row: _0x503608.row, column: _0x503608.column }
          : null),
        this.makeDirty(true),
        true);
  }
  setTableControlState(_0x232061) {
    let _0x5acf55 = _u(_0x232061);
    return vu(this._controlState, _0x5acf55)
      ? false
      : ((this._controlState = _0x5acf55), this.makeDirty(true), true);
  }
  getInverseCoord(_0x3887cf) {
    let _0x498410 = this.getRealBound(),
      _0x57e31c = _0x498410.left + _0x498410.width / 2,
      _0x4ed340 = _0x498410.top + _0x498410.height / 2,
      _0x12732c = this.transform["getMatrix"](),
      _0x1d7c47 = new _0x2c7c4([
        _0x12732c[0],
        _0x12732c[1],
        _0x12732c[2],
        _0x12732c[3],
        _0x57e31c,
        _0x4ed340,
      ]),
      _0x4d2add = this.getParent();
    return (
      this.isInGroup &&
      (_0x4d2add == null ? undefined : _0x4d2add.classType) === _0x1d7918.GROUP
        ? _0x4d2add.ancestorTransform["multiply"](_0x1d7c47)
        : _0x1d7c47
    )
      .invert()
      .applyPoint(_0x3887cf);
  }
  isHit(_0x109b59) {
    let _0x5538c3 = this.getInverseCoord(_0x109b59),
      _0x1c0fab = this.width / 2,
      _0x2f3f9d = this.height / 2;
    return (
      (_0x5538c3.x >= -_0x1c0fab - this.strokeWidth / 2 &&
        _0x5538c3.x <= _0x1c0fab + this.strokeWidth / 2 &&
        _0x5538c3.y >= -_0x2f3f9d - this.strokeWidth / 2 &&
        _0x5538c3.y <= _0x2f3f9d + this.strokeWidth / 2) ||
      this._isActiveOuterChromeHit(_0x5538c3)
    );
  }
  getCellTextRect(
    _0xe8d02c,
    _0x16feb3,
    _0xb71e46 = this.width,
    _0x3dcfaf = this.height,
  ) {
    var _0x3c01ac;
    let _0x512488 = this._getRenderTable();
    if (!_0x512488) return null;
    let _0x5e5130 = this._resolveRenderModel(_0x512488),
      _0x5de4ef =
        (_0x3c01ac =
          this._resolveVisibleCellCache(_0x5e5130).cellByOrigin[_0xe8d02c]) ==
        null
          ? undefined
          : _0x3c01ac[_0x16feb3];
    return _0x5de4ef ? mu(_0x5de4ef, _0x5e5130, _0xb71e46, _0x3dcfaf) : null;
  }
  dispose() {
    (this._disposeTextRenderCaches(), super.dispose());
  }
  _resolveVisibleCellCache(_0x5c8e3f) {
    var _0x347184;
    if (
      ((_0x347184 = this._visibleCellCache) == null
        ? undefined
        : _0x347184.model) === _0x5c8e3f
    )
      return this._visibleCellCache;
    let _0x152107 = _0x5c8e3f.cells["filter"]((_0x3c01fe) => !_0x3c01fe.hidden),
      _0x26487a = [],
      _0x11f05a = [];
    return (
      _0x152107.forEach((_0x40fc31) => {
        (_0x11f05a[_0x40fc31.row] ??= [])[_0x40fc31.column] = _0x40fc31;
        let _0x55e111 = _0x40fc31.row + Math.max(1, _0x40fc31.rowSpan),
          _0x4d1bde = _0x40fc31.column + Math.max(1, _0x40fc31.columnSpan);
        for (
          let _0x194547 = _0x40fc31.row;
          _0x194547 < _0x55e111;
          _0x194547 += 1
        ) {
          let _0xa1df9f = (_0x26487a[_0x194547] ??= []);
          for (
            let _0xf79475 = _0x40fc31.column;
            _0xf79475 < _0x4d1bde;
            _0xf79475 += 1
          )
            _0xa1df9f[_0xf79475] = _0x40fc31;
        }
      }),
      (this._visibleCellCache = {
        cells: _0x152107,
        cellAtPosition: _0x26487a,
        cellByOrigin: _0x11f05a,
        model: _0x5c8e3f,
      }),
      this._visibleCellCache
    );
  }
  hitTestCellAtScenePoint(
    _0x1256be,
    _0x146198 = this.width,
    _0x46f202 = this.height,
  ) {
    let _0x654ba1 = this._getRenderTable();
    if (!_0x654ba1) return null;
    let _0x4acf85 = this._resolveRenderModel(_0x654ba1),
      _0x2756c1 = this.getInverseCoord(_0x1256be);
    return xc(
      _0x4acf85,
      (_0x2756c1.x + _0x146198 / 2) * $(_0x4acf85.width / _0x146198, 1),
      (_0x2756c1.y + _0x46f202 / 2) * $(_0x4acf85.height / _0x46f202, 1),
    );
  }
  hitTestControlAtScenePoint(
    _0xbbe0c7,
    _0x3ef7ce = this.width,
    _0x36d3f2 = this.height,
  ) {
    let _0x54c1fa = this._getRenderTable();
    if (!_0x54c1fa) return null;
    let _0x4f2d0e = this._resolveRenderModel(_0x54c1fa),
      _0x336492 = this.getInverseCoord(_0xbbe0c7);
    return _0x12cba6(
      this._buildControlButtons(_0x4f2d0e, _0x3ef7ce, _0x36d3f2, {
        showAll: true,
      }),
      _0x336492.x + _0x3ef7ce / 2,
      _0x336492.y + _0x36d3f2 / 2,
    );
  }
  hitTestStructuralTriggerAtScenePoint(
    _0x1536a5,
    _0x11d3cc = this.width,
    _0x9dc6fa = this.height,
  ) {
    let _0x2ffb90 = this._getRenderTable();
    if (!_0x2ffb90) return null;
    let _0x3cd333 = this._resolveRenderModel(_0x2ffb90),
      _0x18bf56 = this.getInverseCoord(_0x1536a5);
    return _0x9c554a(
      this._buildStructuralTriggers(
        _0x3cd333,
        _0x11d3cc,
        _0x9dc6fa,
        Kl(_0x2ffb90, _0x11d3cc),
        ql(_0x2ffb90, _0x9dc6fa),
      ),
      _0x18bf56.x + _0x11d3cc / 2,
      _0x18bf56.y + _0x9dc6fa / 2,
    );
  }
  hitTestFloatingStructuralTriggerAtScenePoint(
    _0x48c288,
    _0x7d6ddf = this.width,
    _0x2b568a = this.height,
  ) {
    let _0x3acf07 = this._getRenderTable();
    if (!_0x3acf07) return null;
    let _0x1095ba = this._resolveRenderModel(_0x3acf07),
      _0x399e80 = this.getInverseCoord(_0x48c288);
    return _0x5c18d4(
      this._buildStructuralTriggers(
        _0x1095ba,
        _0x7d6ddf,
        _0x2b568a,
        Kl(_0x3acf07, _0x7d6ddf),
        ql(_0x3acf07, _0x2b568a),
      ),
      _0x399e80.x + _0x7d6ddf / 2,
      _0x399e80.y + _0x2b568a / 2,
    );
  }
  render(_0x28b8a2, _0x2fb35d) {
    if (!this.visible) return (this.makeDirty(false), this);
    let _0xffe0c3 = this.getRealBound();
    if (this.isRender(_0x2fb35d)) {
      let {
        top: _0x3451dc,
        left: _0x168aea,
        bottom: _0x3f7594,
        right: _0x1a44fb,
      } = _0x2fb35d.viewBound;
      if (
        _0xffe0c3.left + _0xffe0c3.width + this.strokeWidth < _0x168aea ||
        _0x1a44fb < _0xffe0c3.left - this.strokeWidth ||
        _0xffe0c3.top + _0xffe0c3.height + this.strokeWidth < _0x3451dc ||
        _0x3f7594 < _0xffe0c3.top - this.strokeWidth
      )
        return this;
    }
    let _0x20821c = this.transform["getMatrix"](),
      _0x4c5e54 = _0xffe0c3.left + _0xffe0c3.width / 2,
      _0x3ca5dd = _0xffe0c3.top + _0xffe0c3.height / 2;
    return (
      _0x28b8a2.save(),
      _0x28b8a2.transform(
        _0x20821c[0],
        _0x20821c[1],
        _0x20821c[2],
        _0x20821c[3],
        _0x4c5e54,
        _0x3ca5dd,
      ),
      this._draw(_0x28b8a2, _0x2fb35d, _0xffe0c3.width, _0xffe0c3.height),
      _0x28b8a2.restore(),
      this.makeDirty(false),
      this
    );
  }
  _draw(_0x206656, _0x5126ff, _0x259d77, _0x27eeb9) {
    let _0x4ccc5d = _0x259d77 ?? this.width,
      _0x2ff90a = _0x27eeb9 ?? this.height,
      _0x17f2ba = this._getRenderTable(),
      _0xa4740c = _0x17f2ba ? this._resolveRenderModel(_0x17f2ba) : null,
      _0x203af0 = Kl(_0x17f2ba, _0x4ccc5d),
      _0x53a87c = ql(_0x17f2ba, _0x2ff90a),
      _0x482df5 = Zl(_0x17f2ba),
      _0x1aaa17 = Ql(_0x17f2ba);
    (_0x206656.save(),
      _0x206656.beginPath(),
      au(
        _0x206656,
        -_0x4ccc5d / 2,
        -_0x2ff90a / 2,
        _0x4ccc5d,
        _0x2ff90a,
        (_0x482df5 == null ? undefined : _0x482df5.borderRadius) ?? 0,
      ),
      _0x206656.clip(),
      _0xa4740c
        ? (this._drawCellFills(_0x206656, _0xa4740c, _0x4ccc5d, _0x2ff90a),
          this._drawCellTexts(
            _0x206656,
            _0x17f2ba,
            _0xa4740c,
            _0x4ccc5d,
            _0x2ff90a,
          ),
          this._drawCellBorders(_0x206656, _0xa4740c, _0x4ccc5d, _0x2ff90a),
          this._drawSelection(_0x206656, _0xa4740c, _0x4ccc5d, _0x2ff90a),
          this._drawCellHover(_0x206656, _0xa4740c, _0x4ccc5d, _0x2ff90a))
        : (this._drawRowFills(_0x206656, null, _0x53a87c, _0x4ccc5d, _0x2ff90a),
          this._drawGrid(
            _0x206656,
            _0x203af0,
            _0x53a87c,
            _0x4ccc5d,
            _0x2ff90a,
          )),
      _0x206656.restore(),
      _0x482df5 && ru(_0x206656, _0x4ccc5d, _0x2ff90a, _0x482df5),
      _0x1aaa17 &&
        iu(_0x206656, _0x4ccc5d, _0x2ff90a, _0x203af0, _0x53a87c, _0x1aaa17),
      _0xa4740c &&
        (this._drawStructuralHeaders(
          _0x206656,
          _0x4ccc5d,
          _0x2ff90a,
          _0x203af0,
          _0x53a87c,
        ),
        this._drawInsertDots(
          _0x206656,
          _0xa4740c,
          _0x4ccc5d,
          _0x2ff90a,
          _0x203af0,
          _0x53a87c,
        ),
        this._drawInsertGuide(
          _0x206656,
          _0x4ccc5d,
          _0x2ff90a,
          _0x203af0,
          _0x53a87c,
        ),
        this._drawReorderGuide(
          _0x206656,
          _0x4ccc5d,
          _0x2ff90a,
          _0x203af0,
          _0x53a87c,
        ),
        this._drawTableHandle(_0x206656, _0xa4740c, _0x4ccc5d, _0x2ff90a),
        this._drawControls(_0x206656, _0xa4740c, _0x4ccc5d, _0x2ff90a)));
  }
  _getRenderTable() {
    return this._previewTable ?? this._table;
  }
  _resolveRenderModel(_0x3d4cdc) {
    let _0x1d2872 = this._renderModelCache;
    if (
      (_0x1d2872 == null ? undefined : _0x1d2872.table) === _0x3d4cdc &&
      _0x1d2872.revision === _0x3d4cdc.rev &&
      _0x1d2872.palette === this._tableThemePalette &&
      _0x1d2872.themes === this._tableThemes
    )
      return _0x1d2872.model;
    let _0xb21e2f = _0x509c52(_0x3d4cdc, {
      themes: { ..._0x1a9ae0(this._tableThemePalette), ...this._tableThemes },
    });
    return (
      (this._renderModelCache = {
        model: _0xb21e2f,
        palette: this._tableThemePalette,
        revision: _0x3d4cdc.rev,
        table: _0x3d4cdc,
        themes: this._tableThemes,
      }),
      _0xb21e2f
    );
  }
  _drawRowFills(_0x582772, _0x17f060, _0x79e17e, _0x948b8e, _0x1ce746) {
    let _0x41869d = -_0x1ce746 / 2;
    _0x79e17e.forEach((_0x27f805, _0x2e770a) => {
      (_0x582772.beginPath(),
        _0x582772.rect(-_0x948b8e / 2, _0x41869d, _0x948b8e, _0x27f805),
        (_0x582772.fillStyle = ou(_0x17f060, _0x2e770a)),
        _0x582772.fill(),
        (_0x41869d += _0x27f805));
    });
  }
  _drawCellFills(_0x38e221, _0x28705f, _0x3b8302, _0x1f1535) {
    let _0xe0294c = this._getRenderTable(),
      _0x12c50f = $(_0x3b8302 / _0x28705f.width, 1),
      _0x422203 = $(_0x1f1535 / _0x28705f.height, 1);
    _0x28705f.cells["forEach"]((_0x53d819) => {
      if (_0x53d819.hidden) return;
      let _0x2e686e = -_0x3b8302 / 2 + _0x53d819.bounds["left"] * _0x12c50f,
        _0x2cee9a = -_0x1f1535 / 2 + _0x53d819.bounds["top"] * _0x422203,
        _0x741387 = _0x53d819.bounds["width"] * _0x12c50f,
        _0x5c7540 = _0x53d819.bounds["height"] * _0x422203,
        _0x55383e = _0x53d819.style["fill"]
          ? su(_0x53d819.style["fill"])
          : ou(_0xe0294c, _0x53d819.row);
      _0x55383e &&
        (_0x38e221.beginPath(),
        _0x38e221.rect(_0x2e686e, _0x2cee9a, _0x741387, _0x5c7540),
        (_0x38e221.fillStyle = _0x55383e),
        _0x38e221.fill());
    });
  }
  _drawCellTexts(_0xbcafea, _0x3db099, _0x5e5731, _0x1fecfe, _0x16de15) {
    _0x5e5731.cells["forEach"]((_0x96a8f4) => {
      var _0x160e49, _0x16ecd6;
      if (
        _0x96a8f4.hidden ||
        this._isEditingCell(_0x96a8f4.row, _0x96a8f4.column)
      )
        return;
      let _0x168459 = mu(_0x96a8f4, _0x5e5731, _0x1fecfe, _0x16de15),
        _0x241f1c =
          (_0x160e49 = _0x3db099.rows[_0x96a8f4.row]) == null ||
          (_0x160e49 = _0x160e49.cells[_0x96a8f4.column]) == null
            ? undefined
            : _0x160e49.textData;
      !_0x241f1c ||
        !this._localeService ||
        Nl(
          _0xbcafea,
          {
            key: this.oKey + "-cell-" + _0x96a8f4.row + "-" + _0x96a8f4.column,
            documentData: _0x241f1c,
            left: -_0x1fecfe / 2 + _0x168459.left,
            top: -_0x16de15 / 2 + _0x168459.top,
            width: _0x168459.width,
            height: _0x168459.height,
            localeService: this._localeService,
            horizontalAlign: Fa(_0x241f1c),
            verticalAlign:
              za(_0x96a8f4.style["verticalAlign"]) ??
              ((_0x16ecd6 = _0x241f1c.documentStyle) == null ||
              (_0x16ecd6 = _0x16ecd6.renderConfig) == null
                ? undefined
                : _0x16ecd6.verticalAlign),
            isHorizontal:
              _0x96a8f4.style["textDirection"] !== _0x4868bf.Vertical &&
              _0x96a8f4.style["textDirection"] !== _0x4868bf.Vertical270,
            wrapStrategy: _0x1931d3.WRAP,
            clip: true,
            cacheKey: _0x3db099.rev,
            viewportHeight: _0x168459.height,
          },
          this._getTextRenderCache(_0x96a8f4.row, _0x96a8f4.column),
        );
    });
  }
  _isEditingCell(_0x40eca8, _0x5eee7d) {
    var _0x809812;
    return (
      ((_0x809812 = this._editingCell) == null ? undefined : _0x809812.row) ===
        _0x40eca8 && this._editingCell["column"] === _0x5eee7d
    );
  }
  _getTextRenderCache(_0x11b775, _0x1739ec) {
    let _0x230299 = _0x11b775 + ":" + _0x1739ec,
      _0x7a820f = this._textRenderCaches["get"](_0x230299);
    if (_0x7a820f) return _0x7a820f;
    let _0x53aa30 = {};
    return (this._textRenderCaches["set"](_0x230299, _0x53aa30), _0x53aa30);
  }
  _disposeTextRenderCaches() {
    (this._textRenderCaches["forEach"]((_0x17601b) => Ml(_0x17601b)),
      this._textRenderCaches["clear"]());
  }
  _drawCellBorders(_0x4cb932, _0x41f2d6, _0x10383b, _0x53974b) {
    let _0x3b9fc0 = $(_0x10383b / _0x41f2d6.width, 1),
      _0x5cbed6 = $(_0x53974b / _0x41f2d6.height, 1),
      { cells: _0x72af5, cellAtPosition: _0x598ab2 } =
        this._resolveVisibleCellCache(_0x41f2d6);
    _0x72af5.forEach((_0x373d86) => {
      var _0x51a8d0, _0x585ea4, _0x25dc93, _0x245554;
      let _0x271e9e = -_0x10383b / 2 + _0x373d86.bounds["left"] * _0x3b9fc0,
        _0x1ef7d1 = -_0x53974b / 2 + _0x373d86.bounds["top"] * _0x5cbed6,
        _0x13da1b = _0x271e9e + _0x373d86.bounds["width"] * _0x3b9fc0,
        _0x6920ae = _0x1ef7d1 + _0x373d86.bounds["height"] * _0x5cbed6,
        _0x54e68f = _0x373d86.style["borders"],
        _0x40f38a =
          (_0x51a8d0 = _0x598ab2[_0x373d86.row]) == null
            ? undefined
            : _0x51a8d0[_0x373d86.column + _0x373d86.columnSpan],
        _0x3f0eb8 =
          (_0x585ea4 = _0x598ab2[_0x373d86.row + _0x373d86.rowSpan]) == null
            ? undefined
            : _0x585ea4[_0x373d86.column],
        _0x467d8a = _0x54e68f == null ? undefined : _0x54e68f.top,
        _0x4ab415 = _0x1780d9(
          _0x54e68f == null ? undefined : _0x54e68f.right,
          _0x40f38a == null || (_0x25dc93 = _0x40f38a.style["borders"]) == null
            ? undefined
            : _0x25dc93.left,
        ),
        _0xf4ff4 = _0x1780d9(
          _0x54e68f == null ? undefined : _0x54e68f.bottom,
          _0x3f0eb8 == null || (_0x245554 = _0x3f0eb8.style["borders"]) == null
            ? undefined
            : _0x245554.top,
        ),
        _0x5a1949 = _0x54e68f == null ? undefined : _0x54e68f.left;
      if (_0x373d86.row === 0) {
        let _0x5a2716 = _0x1ef7d1 + lu(_0x467d8a);
        cu(_0x4cb932, _0x467d8a, _0x271e9e, _0x5a2716, _0x13da1b, _0x5a2716);
      }
      {
        let _0x13bda4 = _0x40f38a ? _0x13da1b : _0x13da1b - lu(_0x4ab415);
        cu(_0x4cb932, _0x4ab415, _0x13bda4, _0x1ef7d1, _0x13bda4, _0x6920ae);
      }
      {
        let _0x532405 = _0x3f0eb8 ? _0x6920ae : _0x6920ae - lu(_0xf4ff4);
        cu(_0x4cb932, _0xf4ff4, _0x271e9e, _0x532405, _0x13da1b, _0x532405);
      }
      if (_0x373d86.column === 0) {
        let _0x5ed31e = _0x271e9e + lu(_0x5a1949);
        cu(_0x4cb932, _0x5a1949, _0x5ed31e, _0x1ef7d1, _0x5ed31e, _0x6920ae);
      }
    });
  }
  _drawGrid(_0x3c5540, _0x68703a, _0x582110, _0x17824c, _0xc1e3db) {
    let _0x4b2b5b = -_0x17824c / 2,
      _0x3ca8dc = -_0xc1e3db / 2,
      _0x3d1aab = _0x17824c / 2,
      _0x52c0f6 = _0xc1e3db / 2;
    (_0x3c5540.beginPath(),
      _0x3c5540.setLineDash([]),
      (_0x3c5540.strokeStyle = Fl),
      (_0x3c5540.lineWidth = 1));
    let _0x226874 = _0x4b2b5b;
    _0x68703a.slice(0, -1).forEach((_0x13d176) => {
      ((_0x226874 += _0x13d176),
        _0x3c5540.moveTo(_0x226874, _0x3ca8dc),
        _0x3c5540.lineTo(_0x226874, _0x52c0f6));
    });
    let _0x384551 = _0x3ca8dc;
    (_0x582110.slice(0, -1).forEach((_0x42a42c) => {
      ((_0x384551 += _0x42a42c),
        _0x3c5540.moveTo(_0x4b2b5b, _0x384551),
        _0x3c5540.lineTo(_0x3d1aab, _0x384551));
    }),
      _0x3c5540.stroke(),
      this._drawTableOutline(
        _0x3c5540,
        _0x4b2b5b,
        _0x3ca8dc,
        _0x17824c,
        _0xc1e3db,
      ));
  }
  _drawTableOutline(_0x34bd71, _0x1ca3f4, _0x4874ee, _0x4b2347, _0x119838) {
    (_0x34bd71.beginPath(),
      (_0x34bd71.strokeStyle = Pl),
      (_0x34bd71.lineWidth = 1.5),
      _0x34bd71.rect(_0x1ca3f4, _0x4874ee, _0x4b2347, _0x119838),
      _0x34bd71.stroke());
  }
  _drawSelection(_0x50fc21, _0x379ba6, _0x21d6b5, _0x476dcc) {
    var _0x3b673e, _0x168ee2;
    if (
      !((_0x3b673e = this._selection) != null && _0x3b673e.ranges["length"]) ||
      this._selection["kind"] === "text"
    )
      return;
    let _0x24d206 =
        ((_0x168ee2 = this._themeService) == null
          ? undefined
          : _0x168ee2.getColorFromTheme("primary.600")) ?? "#409cff",
      _0x1219d1 = new _0x1f520c(_0x24d206).setAlpha(0.07).toRgbString(),
      _0x3e36c8 = $(_0x21d6b5 / _0x379ba6.width, 1),
      _0x429c3b = $(_0x476dcc / _0x379ba6.height, 1);
    if (this._selection["kind"] === "table") {
      (_0x50fc21.beginPath(),
        _0x50fc21.rect(-_0x21d6b5 / 2, -_0x476dcc / 2, _0x21d6b5, _0x476dcc),
        (_0x50fc21.fillStyle = _0x1219d1),
        _0x50fc21.fill(),
        fu(
          _0x50fc21,
          -_0x21d6b5 / 2,
          -_0x476dcc / 2,
          _0x21d6b5,
          _0x476dcc,
          _0x24d206,
          _0x21d6b5,
          _0x476dcc,
        ));
      return;
    }
    let _0x8b39cd = _0x379ba6.cells["filter"]((_0x2261b8) => !_0x2261b8.hidden);
    (_0x8b39cd
      .filter((_0x13959e) => {
        var _0x44dbd1;
        return Wl(
          _0x13959e,
          ((_0x44dbd1 = this._selection) == null
            ? undefined
            : _0x44dbd1.ranges) ?? [],
        );
      })
      .forEach((_0x528ae6) => {
        (_0x50fc21.beginPath(),
          _0x50fc21.rect(
            -_0x21d6b5 / 2 + _0x528ae6.bounds["left"] * _0x3e36c8,
            -_0x476dcc / 2 + _0x528ae6.bounds["top"] * _0x429c3b,
            _0x528ae6.bounds["width"] * _0x3e36c8,
            _0x528ae6.bounds["height"] * _0x429c3b,
          ),
          (_0x50fc21.fillStyle = _0x1219d1),
          _0x50fc21.fill());
      }),
      this._selection["ranges"].forEach((_0x41cfa0) => {
        let _0x4beb53 = _0x8b39cd.filter((_0x1493f3) =>
          Wl(_0x1493f3, [_0x41cfa0]),
        );
        if (!_0x4beb53.length) return;
        let _0x4443c4 =
            -_0x21d6b5 / 2 +
            Math.min(
              ..._0x4beb53.map((_0x3f85e7) => _0x3f85e7.bounds["left"]),
            ) *
              _0x3e36c8,
          _0xdf6865 =
            -_0x476dcc / 2 +
            Math.min(..._0x4beb53.map((_0x38222b) => _0x38222b.bounds["top"])) *
              _0x429c3b,
          _0x445fa8 =
            -_0x21d6b5 / 2 +
            Math.max(
              ..._0x4beb53.map(
                (_0x46ff0d) =>
                  _0x46ff0d.bounds["left"] + _0x46ff0d.bounds["width"],
              ),
            ) *
              _0x3e36c8,
          _0x1973dd =
            -_0x476dcc / 2 +
            Math.max(
              ..._0x4beb53.map(
                (_0x31bec5) =>
                  _0x31bec5.bounds["top"] + _0x31bec5.bounds["height"],
              ),
            ) *
              _0x429c3b;
        fu(
          _0x50fc21,
          _0x4443c4,
          _0xdf6865,
          _0x445fa8 - _0x4443c4,
          _0x1973dd - _0xdf6865,
          _0x24d206,
          _0x21d6b5,
          _0x476dcc,
        );
      }));
  }
  _drawCellHover(_0x4b6804, _0x432422, _0xa27d82, _0x5b213e) {
    var _0x387d79;
    if (!this._cellHover) return;
    let _0x97f0fa =
      (_0x387d79 =
        this._resolveVisibleCellCache(_0x432422).cellAtPosition[
          this._cellHover["row"]
        ]) == null
        ? undefined
        : _0x387d79[this._cellHover["column"]];
    if (!_0x97f0fa) return;
    let _0x41f3f3 = $(_0xa27d82 / _0x432422.width, 1),
      _0xb91602 = $(_0x5b213e / _0x432422.height, 1);
    (_0x4b6804.beginPath(),
      _0x4b6804.rect(
        -_0xa27d82 / 2 + _0x97f0fa.bounds["left"] * _0x41f3f3,
        -_0x5b213e / 2 + _0x97f0fa.bounds["top"] * _0xb91602,
        _0x97f0fa.bounds["width"] * _0x41f3f3,
        _0x97f0fa.bounds["height"] * _0xb91602,
      ),
      (_0x4b6804.strokeStyle = "rgba(64,\x20156,\x20255,\x200.42)"),
      (_0x4b6804.lineWidth = 1),
      _0x4b6804.stroke());
  }
  _drawControls(_0x2a5076, _0x54fc54, _0x4b6890, _0x4f22e3) {
    this._shouldDrawControls() &&
      this._buildControlButtons(_0x54fc54, _0x4b6890, _0x4f22e3, {
        showAll: true,
      })
        .filter((_0x134a8d) => _0x134a8d.kind !== "table-handle")
        .forEach((_0x44b035) => {
          let _0x261d3c = -_0x4b6890 / 2 + _0x44b035.rect["x"],
            _0x4b055a = -_0x4f22e3 / 2 + _0x44b035.rect["y"],
            _0x64e08c = this._isControlHovered(_0x44b035),
            _0x4fa381 = this._isControlSelected(_0x44b035);
          (_0x2a5076.beginPath(),
            _0x2a5076.rect(
              _0x261d3c,
              _0x4b055a,
              _0x44b035.rect["width"],
              _0x44b035.rect["height"],
            ),
            (_0x2a5076.fillStyle = _0x4fa381 ? "#d8e8ff" : _0x64e08c ? zl : Rl),
            _0x2a5076.fill(),
            (_0x2a5076.strokeStyle = _0x64e08c || _0x4fa381 ? Vl : Bl),
            (_0x2a5076.lineWidth = 1),
            _0x2a5076.stroke());
        });
  }
  _drawStructuralHeaders(
    _0x1304d0,
    _0x15e2c8,
    _0x1d165c,
    _0xd85a7a,
    _0x37231c,
  ) {
    if (!this._shouldDrawStructuralHeaders()) return;
    let _0x49d2f7 = $l(this._getRenderTable());
    if (_0x49d2f7.rows) {
      let _0x3c9faf = -_0x1d165c / 2;
      _0x37231c.forEach((_0x657c9f, _0x11cf9b) => {
        (this._drawStructuralHeaderRect(_0x1304d0, {
          kind: "row",
          index: _0x11cf9b,
          x: -_0x15e2c8 / 2 - 10,
          y: _0x3c9faf,
          width: 10,
          height: _0x657c9f,
        }),
          (_0x3c9faf += _0x657c9f));
      });
    }
    if (_0x49d2f7.columns) {
      let _0x2ebf66 = -_0x15e2c8 / 2;
      _0xd85a7a.forEach((_0x52e13f, _0x16ca37) => {
        (this._drawStructuralHeaderRect(_0x1304d0, {
          kind: "column",
          index: _0x16ca37,
          x: _0x2ebf66,
          y: -_0x1d165c / 2 - 10,
          width: _0x52e13f,
          height: 10,
        }),
          (_0x2ebf66 += _0x52e13f));
      });
    }
  }
  _drawStructuralHeaderRect(_0x26cb2b, _0x40b5f6) {
    (_0x26cb2b.beginPath(),
      _0x26cb2b.rect(
        _0x40b5f6.x,
        _0x40b5f6.y,
        _0x40b5f6.width,
        _0x40b5f6.height,
      ),
      (_0x26cb2b.fillStyle = this._isStructuralRangeSelected(
        _0x40b5f6.kind,
        _0x40b5f6.index,
      )
        ? "#1a73e8"
        : this._isStructuralHeaderHovered(_0x40b5f6.kind, _0x40b5f6.index)
          ? "#d2e3fc"
          : "#f1f3f4"),
      _0x26cb2b.fill());
  }
  _drawInsertDots(
    _0x5d59d2,
    _0x4b3eb2,
    _0x55398f,
    _0x507a7f,
    _0x6dc630,
    _0x47ad4e,
  ) {
    if (!this._shouldDrawInsertDots()) return;
    let _0x18962f = this._getStructuralControlZoom();
    this._buildStructuralTriggers(
      _0x4b3eb2,
      _0x55398f,
      _0x507a7f,
      _0x6dc630,
      _0x47ad4e,
    )
      .filter(
        (_0x65b8d2) =>
          _0x65b8d2.kind === "row-insert-dot" ||
          _0x65b8d2.kind === "column-insert-dot",
      )
      .forEach((_0x2ac1e6) => {
        let _0x30ed24 =
            -_0x55398f / 2 + _0x2ac1e6.rect["x"] + _0x2ac1e6.rect["width"] / 2,
          _0x21fe33 =
            -_0x507a7f / 2 + _0x2ac1e6.rect["y"] + _0x2ac1e6.rect["height"] / 2,
          _0xd8bd80 = this._isHoveredStructuralTrigger(_0x2ac1e6),
          _0x18b236 = _0xd8bd80
            ? Math.min(_0x2ac1e6.rect["width"], _0x2ac1e6.rect["height"]) / 2
            : 2 / _0x18962f;
        if (
          (_0x5d59d2.beginPath(),
          _0x5d59d2.arc(_0x30ed24, _0x21fe33, _0x18b236, 0, Math.PI * 2),
          (_0x5d59d2.fillStyle = _0xd8bd80 ? Ll : "rgba(95, 99, 104, 0.45)"),
          _0x5d59d2.fill(),
          !_0xd8bd80)
        )
          return;
        (_0x5d59d2.beginPath(),
          (_0x5d59d2.strokeStyle = Ul),
          (_0x5d59d2.lineWidth = 1.5 / _0x18962f));
        let _0x1e172b = 3 / _0x18962f;
        (_0x5d59d2.moveTo(_0x30ed24 - _0x1e172b, _0x21fe33),
          _0x5d59d2.lineTo(_0x30ed24 + _0x1e172b, _0x21fe33),
          _0x5d59d2.moveTo(_0x30ed24, _0x21fe33 - _0x1e172b),
          _0x5d59d2.lineTo(_0x30ed24, _0x21fe33 + _0x1e172b),
          _0x5d59d2.stroke());
      });
  }
  _drawInsertGuide(_0x211cac, _0x291e49, _0x2a745a, _0x1021cb, _0x29fe08) {
    var _0x59917d;
    !((_0x59917d = this._controlState) != null && _0x59917d.visible) ||
      !this._controlState["insertGuide"] ||
      (nu(this._controlState["insertGuide"], $l(this._getRenderTable())) &&
        this._drawGuideLine(
          _0x211cac,
          this._controlState["insertGuide"],
          _0x291e49,
          _0x2a745a,
          _0x1021cb,
          _0x29fe08,
        ));
  }
  _drawReorderGuide(_0x47c971, _0x22cd5e, _0x3b41b4, _0x289174, _0x4888d5) {
    var _0x9d2f0b;
    !((_0x9d2f0b = this._controlState) != null && _0x9d2f0b.visible) ||
      !this._controlState["reorderGuide"] ||
      (nu(this._controlState["reorderGuide"], $l(this._getRenderTable())) &&
        this._drawGuideLine(
          _0x47c971,
          this._controlState["reorderGuide"],
          _0x22cd5e,
          _0x3b41b4,
          _0x289174,
          _0x4888d5,
        ));
  }
  _drawGuideLine(
    _0x4bec73,
    _0x3e82a0,
    _0x183700,
    _0x5a5a52,
    _0x31b5b8,
    _0x48c036,
  ) {
    let _0x28958e = -_0x183700 / 2,
      _0x34a68b = -_0x5a5a52 / 2;
    if (
      (_0x4bec73.beginPath(),
      _0x4bec73.setLineDash([]),
      (_0x4bec73.strokeStyle = Ll),
      (_0x4bec73.lineWidth = 2),
      _0x3e82a0.kind === "row")
    ) {
      let _0x3b1057 = _0x34a68b + du(_0x48c036, _0x3e82a0.index);
      (_0x4bec73.moveTo(_0x28958e, _0x3b1057),
        _0x4bec73.lineTo(_0x28958e + _0x183700, _0x3b1057));
    } else {
      let _0x4c5577 = _0x28958e + du(_0x31b5b8, _0x3e82a0.index);
      (_0x4bec73.moveTo(_0x4c5577, _0x34a68b),
        _0x4bec73.lineTo(_0x4c5577, _0x34a68b + _0x5a5a52));
    }
    _0x4bec73.stroke();
  }
  _drawTableHandle(_0x146d5c, _0x6d692d, _0x391f71, _0x48eb47) {
    var _0x226aac;
    if (!this._selection) return;
    let _0x5bdb2b = this._buildControlButtons(
      _0x6d692d,
      _0x391f71,
      _0x48eb47,
    ).find((_0x403b38) => _0x403b38.kind === "table-handle");
    if (!_0x5bdb2b) return;
    let { rect: _0x59753e } = _0x5bdb2b,
      _0x298ece = -_0x391f71 / 2 + _0x59753e.x,
      _0x39c9b6 = -_0x48eb47 / 2 + _0x59753e.y,
      _0x5092dd =
        ((_0x226aac = this._controlHover) == null
          ? undefined
          : _0x226aac.kind) === "table-handle";
    (gu(
      _0x146d5c,
      _0x298ece,
      _0x39c9b6,
      _0x59753e.width,
      _0x59753e.height,
      _0x5092dd,
    ),
      hu(
        _0x146d5c,
        _0x298ece,
        _0x39c9b6,
        _0x59753e.width,
        _0x59753e.height,
        _0x5092dd ? Ul : Hl,
      ));
  }
  _shouldDrawControls() {
    var _0x1f5196, _0xa85bec;
    return (
      !!((_0x1f5196 = this._selection) != null && _0x1f5196.ranges["length"]) ||
      !!this._controlHover ||
      !!((_0xa85bec = this._controlState) != null && _0xa85bec.visible)
    );
  }
  _shouldDrawStructuralHeaders() {
    var _0x27e87c, _0x5a97c0, _0x2d01f6;
    return (
      !!this._selection ||
      !!((_0x27e87c = this._controlState) != null && _0x27e87c.visible) ||
      !!(
        (_0x5a97c0 = this._controlState) != null && _0x5a97c0.hoveredTrigger
      ) ||
      !!(
        (_0x2d01f6 = this._controlState) != null &&
        _0x2d01f6.selectedStructuralRange
      )
    );
  }
  _shouldDrawInsertDots() {
    var _0x524917;
    return (
      !!this._selection ||
      !!((_0x524917 = this._controlState) != null && _0x524917.visible)
    );
  }
  _isActiveOuterChromeHit(_0x3db693) {
    var _0x8c234d;
    if (
      !this._selection &&
      !((_0x8c234d = this._controlState) != null && _0x8c234d.visible)
    )
      return false;
    let _0x48384e = this.width,
      _0xd363dd = this.height,
      _0x48d559 = this._getRenderTable();
    if (!_0x48d559) return false;
    let _0x401930 = {
        x: _0x3db693.x + _0x48384e / 2,
        y: _0x3db693.y + _0xd363dd / 2,
      },
      _0x45a7bb = this._resolveRenderModel(_0x48d559),
      _0x3d485b = this._buildStructuralTriggers(
        _0x45a7bb,
        _0x48384e,
        _0xd363dd,
        Kl(_0x48d559, _0x48384e),
        ql(_0x48d559, _0xd363dd),
      ),
      _0xf88e1a = _0x9c554a(_0x3d485b, _0x401930.x, _0x401930.y);
    return (_0xf88e1a && yu(_0xf88e1a)) ||
      _0x3d485b.some((_0x4ec2c4) =>
        this._isPointInStructuralTriggerEnvelope(
          _0x4ec2c4,
          _0x401930.x,
          _0x401930.y,
        ),
      )
      ? true
      : !!_0x12cba6(
          this._buildControlButtons(_0x45a7bb, _0x48384e, _0xd363dd).filter(
            (_0x392e47) => _0x392e47.kind === "table-handle",
          ),
          _0x401930.x,
          _0x401930.y,
        );
  }
  _buildControlButtons(_0x9725f2, _0x238d04, _0xe2b73f, _0x40f8b5) {
    let _0x1ce124 = $l(this._getRenderTable()),
      _0x33edad = _0x4d8b1c(_0x9725f2, _0x238d04, _0xe2b73f, _0x40f8b5).filter(
        (_0x391194) => eu(_0x391194, _0x1ce124),
      );
    return this._controlButtonMode === "all"
      ? _0x33edad
      : _0x33edad.filter((_0x479af6) => _0x479af6.kind === "table-handle");
  }
  _isPointInStructuralTriggerEnvelope(_0x9bd6eb, _0x591d32, _0x4bc253) {
    return yu(_0x9bd6eb)
      ? _0x448c2d(_0x591d32, _0x4bc253, _0x9bd6eb.rect)
      : false;
  }
  _isControlHovered(_0x19e42c) {
    return !this._controlHover || _0x19e42c.kind !== this._controlHover["kind"]
      ? false
      : _0x19e42c.kind === "row-select"
        ? _0x19e42c.row === this._controlHover["row"]
        : _0x19e42c.kind !== "column-select" ||
          _0x19e42c.column === this._controlHover["column"];
  }
  _isControlSelected(_0x2c45de) {
    return this._selection
      ? _0x2c45de.kind === "table-handle"
        ? this._selection["kind"] === "table"
        : _0x2c45de.kind === "row-select"
          ? this._selection["kind"] === "row" &&
            _0x2c45de.row !== undefined &&
            this._selection["ranges"].some(
              (_0x137365) =>
                _0x2c45de.row >=
                  Math.min(_0x137365.startRow, _0x137365.endRow) &&
                _0x2c45de.row <= Math.max(_0x137365.startRow, _0x137365.endRow),
            )
          : _0x2c45de.kind === "column-select" &&
            this._selection["kind"] === "column" &&
            _0x2c45de.column !== undefined &&
            this._selection["ranges"].some(
              (_0x59154c) =>
                _0x2c45de.column >=
                  Math.min(_0x59154c.startColumn, _0x59154c.endColumn) &&
                _0x2c45de.column <=
                  Math.max(_0x59154c.startColumn, _0x59154c.endColumn),
            )
      : false;
  }
  _isStructuralHeaderHovered(_0x596632, _0x349294) {
    var _0x1e95c6;
    let _0x46f2a1 =
      (_0x1e95c6 = this._controlState) == null
        ? undefined
        : _0x1e95c6.hoveredTrigger;
    return _0x596632 === "row"
      ? (_0x46f2a1 == null ? undefined : _0x46f2a1.kind) === "row-header" &&
          _0x46f2a1.row === _0x349294
      : (_0x46f2a1 == null ? undefined : _0x46f2a1.kind) === "column-header" &&
          _0x46f2a1.column === _0x349294;
  }
  _isHoveredStructuralTrigger(_0x1bde8a) {
    var _0x3f5a80;
    let _0xe6bf77 =
      (_0x3f5a80 = this._controlState) == null
        ? undefined
        : _0x3f5a80.hoveredTrigger;
    return !_0xe6bf77 || _0xe6bf77.kind !== _0x1bde8a.kind
      ? false
      : _0x1bde8a.kind === "row-header" || _0x1bde8a.kind === "row-insert-dot"
        ? _0xe6bf77.row !== undefined && _0xe6bf77.row === _0x1bde8a.row
        : _0x1bde8a.kind === "column-header" ||
            _0x1bde8a.kind === "column-insert-dot"
          ? _0xe6bf77.column !== undefined &&
            _0xe6bf77.column === _0x1bde8a.column
          : false;
  }
  _isStructuralRangeSelected(_0x563e2a, _0xd265e9) {
    var _0x390078;
    let _0x90b090 =
      (_0x390078 = this._controlState) == null
        ? undefined
        : _0x390078.selectedStructuralRange;
    return !_0x90b090 || _0x90b090.kind !== _0x563e2a
      ? false
      : _0xd265e9 >= Math.min(_0x90b090.start, _0x90b090.end) &&
          _0xd265e9 <= Math.max(_0x90b090.start, _0x90b090.end);
  }
  _buildStructuralTriggers(
    _0x126435,
    _0x571d62,
    _0x1da209,
    _0x209d40,
    _0x8212ef,
  ) {
    var _0x397e38;
    let _0x2e3a9e = $l(this._getRenderTable());
    return _0xd3ba77({
      tableId:
        (_0x397e38 = this._getRenderTable()) == null ? undefined : _0x397e38.id,
      tableWidth: _0x571d62,
      tableHeight: _0x1da209,
      rowHeights: _0x8212ef,
      columnWidths: _0x209d40,
      mergedCells: _0x126435.cells["filter"](
        (_0xf07ec7) =>
          !_0xf07ec7.hidden &&
          (_0xf07ec7.rowSpan > 1 || _0xf07ec7.columnSpan > 1),
      ).map((_0x153525) => ({
        startRow: _0x153525.row,
        endRow: _0x153525.row + _0x153525.rowSpan - 1,
        startColumn: _0x153525.column,
        endColumn: _0x153525.column + _0x153525.columnSpan - 1,
      })),
      zoom: this._getStructuralControlZoom(),
    }).filter((_0x4710ad) => tu(_0x4710ad, _0x2e3a9e));
  }
  _getStructuralControlZoom() {
    var _0xcf4f89, _0x35d300;
    let _0x348861 =
      (_0xcf4f89 = this.getScene()) == null ||
      (_0x35d300 = _0xcf4f89.getAncestorScale) == null
        ? undefined
        : _0x35d300.call(_0xcf4f89);
    return $(
      (_0x348861 == null ? undefined : _0x348861.scaleX) ??
        (_0x348861 == null ? undefined : _0x348861.scaleY),
      1,
    );
  }
};
function Kl(_0x3fb96b, _0x127610) {
  let _0x3b1df3 =
    _0x3fb96b == null
      ? undefined
      : _0x3fb96b.columns["map"]((_0x1e2882) => _0x1e2882.width).filter(
          (_0x36a7b8) => _0x36a7b8 > 0,
        );
  return Jl(
    _0x3b1df3 != null && _0x3b1df3.length ? _0x3b1df3 : [1, 1, 1],
    _0x127610,
  );
}
function ql(_0xd347f0, _0x401031) {
  let _0xad2e47 =
    _0xd347f0 == null
      ? undefined
      : _0xd347f0.rows["map"]((_0x4226a6) => _0x4226a6.height ?? 24).filter(
          (_0x208088) => _0x208088 > 0,
        );
  return Jl(
    _0xad2e47 != null && _0xad2e47.length ? _0xad2e47 : [1, 1, 1],
    _0x401031,
  );
}
function Jl(_0x1c1155, _0x116302) {
  let _0x401a23 = _0x1c1155.reduce(
    (_0x590ee6, _0x3866a8) => _0x590ee6 + _0x3866a8,
    0,
  );
  return _0x401a23 <= 0
    ? [_0x116302]
    : _0x1c1155.map((_0x543c18) => (_0x543c18 / _0x401a23) * _0x116302);
}
function Yl(_0x2fc078, _0x32108c = 0) {
  return typeof _0x2fc078 == "number" && Number.isFinite(_0x2fc078)
    ? _0x2fc078
    : _0x32108c;
}
function $(_0x597735, _0x3ece43) {
  let _0x4d8103 = Yl(_0x597735, _0x3ece43);
  return _0x4d8103 > 0 ? _0x4d8103 : _0x3ece43;
}
function Xl(_0x1fb65d) {
  return _0x1fb65d && typeof _0x1fb65d == "object" ? _0x1fb65d : null;
}
function Zl(_0x33c009) {
  let _0x45caca = Xl(_0x33c009 == null ? undefined : _0x33c009.custom);
  if (!_0x45caca) return null;
  let _0x761d3e = Yl(_0x45caca.outerBorderRadius, 0);
  return _0x761d3e > 0 ||
    typeof _0x45caca.outerBorderWidth == "number" ||
    typeof _0x45caca.outerBorderColor == "string"
    ? {
        borderRadius: Math.max(0, _0x761d3e),
        borderWidth: $(_0x45caca.outerBorderWidth, 1.5),
        borderColor:
          typeof _0x45caca.outerBorderColor == "string"
            ? _0x45caca.outerBorderColor
            : Pl,
      }
    : null;
}
function Ql(_0xc87335) {
  let _0xcc67f0 = Xl(_0xc87335 == null ? undefined : _0xc87335.custom);
  if (!_0xcc67f0) return null;
  let _0x2f2729 = Xl(_0xcc67f0.sequenceFrame);
  return _0x2f2729
    ? {
        titleRow: Math.max(0, Math.floor(Yl(_0x2f2729.titleRow, 0))),
        titleColumn: Math.max(0, Math.floor(Yl(_0x2f2729.titleColumn, 0))),
        notchWidth: $(_0x2f2729.notchWidth, 24),
        borderWidth: $(_0xcc67f0.outerBorderWidth, 1.5),
        borderColor:
          typeof _0xcc67f0.outerBorderColor == "string"
            ? _0xcc67f0.outerBorderColor
            : Pl,
      }
    : null;
}
function $l(_0xa52217) {
  let _0x2cb1b8 = Xl(_0xa52217 == null ? undefined : _0xa52217.custom);
  if (!_0x2cb1b8) return { rows: true, columns: true };
  let _0x13d3a1 = Xl(_0x2cb1b8.structuralControls);
  return _0x13d3a1
    ? { rows: _0x13d3a1.rows !== false, columns: _0x13d3a1.columns !== false }
    : { rows: true, columns: true };
}
function eu(_0x5d5091, _0x2c8fbf) {
  return _0x5d5091.kind === "row-select"
    ? _0x2c8fbf.rows
    : _0x5d5091.kind !== "column-select" || _0x2c8fbf.columns;
}
function tu(_0x3847a8, _0x32305a) {
  return _0x3847a8.kind === "row-header" ||
    _0x3847a8.kind === "row-insert-dot" ||
    _0x3847a8.kind === "resize-row"
    ? _0x32305a.rows
    : _0x3847a8.kind === "column-header" ||
        _0x3847a8.kind === "column-insert-dot" ||
        _0x3847a8.kind === "resize-column"
      ? _0x32305a.columns
      : true;
}
function nu(_0x47bda0, _0x157d79) {
  return _0x47bda0.kind === "row" ? _0x157d79.rows : _0x157d79.columns;
}
function ru(_0x453749, _0x1b4d2c, _0x5f16ff, _0x5bb6d3) {
  (_0x453749.beginPath(),
    au(
      _0x453749,
      -_0x1b4d2c / 2,
      -_0x5f16ff / 2,
      _0x1b4d2c,
      _0x5f16ff,
      _0x5bb6d3.borderRadius,
    ),
    _0x453749.setLineDash([]),
    (_0x453749.strokeStyle = _0x5bb6d3.borderColor),
    (_0x453749.lineWidth = _0x5bb6d3.borderWidth),
    _0x453749.stroke());
}
function iu(_0x5c5823, _0x3ec219, _0x5ccd18, _0x5c4327, _0x5d9166, _0x125a5e) {
  let _0x453987 = -_0x3ec219 / 2 + du(_0x5c4327, _0x125a5e.titleColumn),
    _0x177aaa = -_0x5ccd18 / 2 + du(_0x5d9166, _0x125a5e.titleRow),
    _0x3e0665 = _0x5c4327[_0x125a5e.titleColumn],
    _0x4d9d33 = _0x5d9166[_0x125a5e.titleRow];
  if (!_0x3e0665 || !_0x4d9d33) return;
  let _0x32be51 = _0x453987 + _0x3e0665,
    _0xd5cd0f = _0x177aaa + _0x4d9d33,
    _0x4253a9 = Math.min(
      _0x125a5e.notchWidth,
      Math.max(0, _0x3e0665 - 1),
      Math.max(0, _0x4d9d33 - 1),
    );
  (_0x5c5823.beginPath(),
    _0x5c5823.setLineDash([]),
    (_0x5c5823.strokeStyle = _0x125a5e.borderColor),
    (_0x5c5823.lineWidth = _0x125a5e.borderWidth),
    _0x5c5823.moveTo(_0x453987, _0x177aaa),
    _0x5c5823.lineTo(_0x32be51, _0x177aaa),
    _0x5c5823.lineTo(_0x32be51, _0xd5cd0f - _0x4253a9),
    _0x5c5823.lineTo(_0x32be51 - _0x4253a9, _0xd5cd0f),
    _0x5c5823.lineTo(_0x453987, _0xd5cd0f),
    _0x5c5823.lineTo(_0x453987, _0x177aaa),
    _0x5c5823.stroke());
}
function au(_0x6b9712, _0x4179fe, _0x1cc8e5, _0x105cb3, _0x5ec12a, _0x42d773) {
  let _0x3d712d = _0x4179fe + _0x105cb3,
    _0x4a362c = _0x1cc8e5 + _0x5ec12a,
    _0x3506fe = Math.min(Math.max(0, _0x42d773), _0x105cb3 / 2, _0x5ec12a / 2);
  if (_0x3506fe <= 0) {
    _0x6b9712.rect(_0x4179fe, _0x1cc8e5, _0x105cb3, _0x5ec12a);
    return;
  }
  (_0x6b9712.moveTo(_0x4179fe + _0x3506fe, _0x1cc8e5),
    _0x6b9712.lineTo(_0x3d712d - _0x3506fe, _0x1cc8e5),
    _0x6b9712.quadraticCurveTo(
      _0x3d712d,
      _0x1cc8e5,
      _0x3d712d,
      _0x1cc8e5 + _0x3506fe,
    ),
    _0x6b9712.lineTo(_0x3d712d, _0x4a362c - _0x3506fe),
    _0x6b9712.quadraticCurveTo(
      _0x3d712d,
      _0x4a362c,
      _0x3d712d - _0x3506fe,
      _0x4a362c,
    ),
    _0x6b9712.lineTo(_0x4179fe + _0x3506fe, _0x4a362c),
    _0x6b9712.quadraticCurveTo(
      _0x4179fe,
      _0x4a362c,
      _0x4179fe,
      _0x4a362c - _0x3506fe,
    ),
    _0x6b9712.lineTo(_0x4179fe, _0x1cc8e5 + _0x3506fe),
    _0x6b9712.quadraticCurveTo(
      _0x4179fe,
      _0x1cc8e5,
      _0x4179fe + _0x3506fe,
      _0x1cc8e5,
    ));
}
function ou(_0x5328f5, _0x11ea8d) {
  return _0x5328f5 != null && _0x5328f5.options["firstRow"] && _0x11ea8d === 0
    ? "#e8f1ff"
    : _0x5328f5 != null && _0x5328f5.options["bandRow"] && _0x11ea8d % 2 == 1
      ? "#f7faff"
      : Il;
}
function su(_0x5a5d5e) {
  return _0x5a5d5e.type === _0x44feb0.None ? null : (_0x5a5d5e.color ?? Il);
}
function cu(_0x1293d0, _0x597e2f, _0x2ac5fe, _0x44e011, _0x446eaf, _0x420940) {
  !_0x597e2f ||
    _0x597e2f.dash === "none" ||
    (_0x1293d0.beginPath(),
    _0x1293d0.setLineDash(uu(_0x597e2f.dash)),
    (_0x1293d0.strokeStyle = _0x597e2f.color || Fl),
    (_0x1293d0.lineWidth = $(_0x597e2f.width, 1)),
    _0x1293d0.moveTo(_0x2ac5fe, _0x44e011),
    _0x1293d0.lineTo(_0x446eaf, _0x420940),
    _0x1293d0.stroke(),
    _0x1293d0.setLineDash([]));
}
function lu(_0x239c60) {
  return !_0x239c60 || _0x239c60.dash === "none"
    ? 0
    : $(_0x239c60.width, 1) / 2;
}
function uu(_0x317433) {
  return _0x317433 === "dash"
    ? [6, 3]
    : _0x317433 === "dot"
      ? [1, 3]
      : _0x317433 === "dashDot"
        ? [6, 3, 1, 3]
        : [];
}
function du(_0x5a787c, _0x2cfa7b) {
  let _0x40ccc9 = Math.min(_0x5a787c.length, Math.max(0, _0x2cfa7b));
  return _0x5a787c
    .slice(0, _0x40ccc9)
    .reduce((_0x116bf8, _0x56e904) => _0x116bf8 + _0x56e904, 0);
}
function fu(
  _0x21a93f,
  _0x2d8a2e,
  _0x10298,
  _0x25b34f,
  _0x4b8b75,
  _0x3ddd85,
  _0x298c9e,
  _0x358dc8,
) {
  let _0x27cad0 = 0.5,
    _0x31784f = Math.max(_0x2d8a2e, -_0x298c9e / 2 + _0x27cad0),
    _0x18d747 = Math.max(_0x10298, -_0x358dc8 / 2 + _0x27cad0),
    _0x4b1f51 = Math.min(_0x2d8a2e + _0x25b34f, _0x298c9e / 2 - _0x27cad0),
    _0x255710 = Math.min(_0x10298 + _0x4b8b75, _0x358dc8 / 2 - _0x27cad0);
  _0x4b1f51 <= _0x31784f ||
    _0x255710 <= _0x18d747 ||
    (_0x21a93f.beginPath(),
    _0x21a93f.setLineDash([]),
    _0x21a93f.rect(
      _0x31784f,
      _0x18d747,
      _0x4b1f51 - _0x31784f,
      _0x255710 - _0x18d747,
    ),
    (_0x21a93f.strokeStyle = _0x3ddd85),
    (_0x21a93f.lineWidth = 1),
    _0x21a93f.stroke());
}
function pu(_0x1b89b2, _0x4a3277) {
  let {
    bottom: _0x308cc0,
    left: _0x2202b4,
    right: _0x5bc217,
    top: _0x1b1f39,
  } = _0xaa2b68(_0x4a3277);
  return {
    left: _0x1b89b2.left + _0x2202b4,
    top: _0x1b89b2.top + _0x1b1f39,
    width: Math.max(1, _0x1b89b2.width - _0x2202b4 - _0x5bc217),
    height: Math.max(1, _0x1b89b2.height - _0x1b1f39 - _0x308cc0),
  };
}
function mu(_0x3eade0, _0x4e68f3, _0x56d747, _0x4ddeb1) {
  let _0x1c2233 = $(_0x56d747 / _0x4e68f3.width, 1),
    _0x556d2a = $(_0x4ddeb1 / _0x4e68f3.height, 1);
  return {
    ...pu(
      {
        left: _0x3eade0.bounds["left"] * _0x1c2233,
        top: _0x3eade0.bounds["top"] * _0x556d2a,
        width: _0x3eade0.bounds["width"] * _0x1c2233,
        height: _0x3eade0.bounds["height"] * _0x556d2a,
      },
      _0x3eade0.style["margins"],
    ),
    row: _0x3eade0.row,
    column: _0x3eade0.column,
  };
}
function hu(
  _0x5b5051,
  _0x537083,
  _0x5ce3b5,
  _0xbcc6f7,
  _0x4e4dab,
  _0x135673 = Hl,
) {
  let _0x153216 = _0x537083 + _0xbcc6f7 / 2 - 3,
    _0x47e45a = _0x5ce3b5 + _0x4e4dab / 2 - 3;
  _0x5b5051.fillStyle = _0x135673;
  for (let _0x2c9177 = 0; _0x2c9177 < 2; _0x2c9177 += 1)
    for (let _0x490189 = 0; _0x490189 < 2; _0x490189 += 1)
      (_0x5b5051.beginPath(),
        _0x5b5051.arc(
          _0x153216 + _0x490189 * 6,
          _0x47e45a + _0x2c9177 * 6,
          1.5,
          0,
          Math.PI * 2,
        ),
        _0x5b5051.fill());
}
function gu(
  _0xed62d2,
  _0x3a47f3,
  _0x243348,
  _0x11052b,
  _0x9f1133,
  _0x1c8b26 = false,
) {
  var _0x5a25d9;
  (_0xed62d2.save(),
    (_0xed62d2.shadowColor = _0x1c8b26
      ? "rgba(26, 115, 232, 0.22)"
      : "rgba(60, 64, 67, 0.16)"),
    (_0xed62d2.shadowBlur = _0x1c8b26 ? 10 : 8),
    (_0xed62d2.shadowOffsetY = 2),
    _0xed62d2.beginPath(),
    (_0x5a25d9 = _0xed62d2.roundRect) == null ||
      _0x5a25d9.call(_0xed62d2, _0x3a47f3, _0x243348, _0x11052b, _0x9f1133, 6),
    _0xed62d2.roundRect ||
      _0xed62d2.rect(_0x3a47f3, _0x243348, _0x11052b, _0x9f1133),
    (_0xed62d2.fillStyle = _0x1c8b26 ? zl : Rl),
    _0xed62d2.fill(),
    (_0xed62d2.shadowBlur = 0),
    (_0xed62d2.shadowOffsetY = 0),
    (_0xed62d2.strokeStyle = _0x1c8b26 ? Vl : Bl),
    (_0xed62d2.lineWidth = 1),
    _0xed62d2.stroke(),
    _0xed62d2.restore());
}
function _u(_0x3dc63b) {
  return _0x3dc63b
    ? {
        visible: _0x3dc63b.visible,
        hoveredTrigger: _0x3dc63b.hoveredTrigger
          ? {
              ..._0x3dc63b.hoveredTrigger,
              rect: { ..._0x3dc63b.hoveredTrigger["rect"] },
            }
          : null,
        selectedStructuralRange: _0x3dc63b.selectedStructuralRange
          ? { ..._0x3dc63b.selectedStructuralRange }
          : null,
        insertGuide: _0x3dc63b.insertGuide
          ? { ..._0x3dc63b.insertGuide }
          : null,
        reorderGuide: _0x3dc63b.reorderGuide
          ? { ..._0x3dc63b.reorderGuide }
          : null,
      }
    : null;
}
function vu(_0x3861e4, _0x4a6563) {
  return JSON.stringify(_0x3861e4) === JSON.stringify(_0x4a6563);
}
function yu(_0x277fec) {
  return (
    _0x277fec.kind === "row-header" ||
    _0x277fec.kind === "column-header" ||
    _0x277fec.kind === "row-insert-dot" ||
    _0x277fec.kind === "column-insert-dot"
  );
}
var bu = class extends _0x3eba9a {
  constructor(..._0x56e683) {
    (super(..._0x56e683),
      W(this, "_session$", new _0x274664(null)),
      W(this, "session$", this._session$["asObservable"]()));
  }
  open(_0x10b0ec) {
    let _0x43fd1e = xu(_0x10b0ec);
    return (
      this._session$["next"](_0x43fd1e),
      _0xdc718a(() => {
        this._session$["getValue"]() === _0x43fd1e && this.close();
      })
    );
  }
  update(_0x5d3756) {
    var _0x73a743;
    let _0x55ba56 = this._session$["getValue"]();
    if (!_0x55ba56) return;
    let _0x289971 = xu({
      ..._0x55ba56,
      ..._0x5d3756,
      documentData: _0x5d3756.documentData ?? _0x55ba56.documentData,
      measurement: _0x5d3756.measurement ?? _0x55ba56.measurement,
      rect: _0x5d3756.rect ?? _0x55ba56.rect,
      tableTransform: _0x5d3756.tableTransform ?? _0x55ba56.tableTransform,
    });
    (this._session$["next"](_0x289971),
      (_0x73a743 = _0x55ba56.onChange) == null ||
        _0x73a743.call(_0x55ba56, xu(_0x289971)));
  }
  complete(_0x5638da) {
    var _0x3ce323;
    let _0xed1245 = this._session$["getValue"]();
    if (!_0xed1245) return;
    let _0x57ed27 = xu({
      ..._0xed1245,
      documentData: _0x5638da ?? _0xed1245.documentData,
    });
    ((_0x3ce323 = _0xed1245.onComplete) == null ||
      _0x3ce323.call(_0xed1245, _0x57ed27),
      this.close());
  }
  cancel() {
    var _0x1f0aff;
    let _0x1b56d3 = this._session$["getValue"]();
    _0x1b56d3 &&
      ((_0x1f0aff = _0x1b56d3.onCancel) == null ||
        _0x1f0aff.call(_0x1b56d3, xu(_0x1b56d3)),
      this.close());
  }
  close() {
    this._session$["next"](null);
  }
  getSession() {
    let _0x30b837 = this._session$["getValue"]();
    return _0x30b837 ? xu(_0x30b837) : null;
  }
  subscribe(_0x98488d) {
    let _0x350310 = this.session$["subscribe"]((_0xf5e561) => {
      _0x98488d(_0xf5e561 ? xu(_0xf5e561) : null);
    });
    return _0xdc718a(() => _0x350310.unsubscribe());
  }
  dispose() {
    (this.close(), this._session$["complete"](), super.dispose());
  }
};
function xu(_0x197887) {
  return {
    ..._0x197887,
    measurement: _0x197887.measurement
      ? { ..._0x197887.measurement }
      : undefined,
    rect: { ..._0x197887.rect },
    tableTransform: { ..._0x197887.tableTransform },
    documentData: _0x16106d.deepClone(_0x197887.documentData),
  };
}
function Su(_0x57335e) {
  return !_0x57335e || _0x57335e.kind === "none" || !_0x57335e.ranges["length"]
    ? null
    : {
        kind: _0x57335e.kind,
        ranges: _0x57335e.ranges["map"]((_0x40dd02) => ({ ..._0x40dd02 })),
        active:
          _0x57335e.focus ??
          _0x57335e.anchor ??
          (wu(_0x57335e.kind) ? Cu(_0x57335e) : undefined),
      };
}
function Cu(_0x141633) {
  let _0x3994e4 = _0x141633.ranges[0];
  if (_0x3994e4)
    return {
      row: Math.min(_0x3994e4.startRow, _0x3994e4.endRow),
      column: Math.min(_0x3994e4.startColumn, _0x3994e4.endColumn),
    };
}
function wu(_0x70667c) {
  return _0x70667c === "cell" || _0x70667c === "range" || _0x70667c === "text";
}
export {
  vr as SLIDES_TABLE_UI_PLUGIN_CONFIG_KEY,
  q as SLIDE_TABLE_CONTEXT_MENU_ACTIONS,
  wa as SLIDE_TABLE_DEFAULT_BACKGROUND_COLOR,
  ca as SLIDE_TABLE_KEYBOARD_SHORTCUT_DESCRIPTORS,
  Ka as SLIDE_TABLE_TOOLBAR_ACTIONS,
  bu as SlideTableCellEditorService,
  Gl as SlideTableObject,
  G as SlideTableSelectionService,
  aa as TableKeyboardServiceBase,
  Ro as TableThemeGallery,
  lo as TableToolbarDropdownInteractionGuard,
  _l as UniverSlidesTableUIPlugin,
  Nr as buildSlideTableBackgroundColorPatch,
  Pr as buildSlideTableBackgroundFillPatch,
  $a as buildSlideTableBorderPresetCommandParams,
  Rr as buildSlideTableBorderPresetPatch,
  Lr as buildSlideTableBorderStylePatch,
  Ks as buildSlideTableCellEditorCommitCommand,
  Qa as buildSlideTableCellStyleCommandParams,
  uc as buildSlideTableClearTextPatch,
  Dr as buildSlideTableContextMenuCommand,
  Za as buildSlideTableDeleteToolbarCommand,
  zr as buildSlideTableFontFamilyPatch,
  Br as buildSlideTableFontSizePatch,
  wc as buildSlideTableInsertDotControlState,
  la as buildSlideTableKeyboardShortcutBindings,
  Ja as buildSlideTableMergeCellsCommandParams,
  Xa as buildSlideTableMergeToolbarCommand,
  lc as buildSlideTablePasteHtmlPatch,
  cc as buildSlideTablePasteTextPatch,
  kr as buildSlideTableTextAlignPatch,
  Fr as buildSlideTableTextColorPatch,
  Ir as buildSlideTableTextFillPatch,
  ti as buildSlideTableTextStylePatch,
  Ya as buildSlideTableUnmergeCellsCommandParams,
  yr as defaultPluginConfig,
  Ga as ensureOption,
  Ha as getSlideTableFillPreviewStyle,
  Ia as getSlideTableFillType,
  Ba as getSlideTableGradientValue,
  J as getSlideTableSelectionContext,
  Va as gradientValueToSlideTableFill,
  ra as isSlideTableDocumentEditorTarget,
  na as isSlideTableEditableTarget,
  Cc as isSlideTableInsertDotTrigger,
  qs as normalizeSlideTableCellDocumentData,
  Ws as replaceSlideTableCellDocumentText,
  Cu as resolveFirstSlideTableSelectionCell,
  da as resolveNextSlideTableKeyboardCell,
  Gs as resolveSlideTableCellEditorLayout,
  Hs as resolveSlideTableCellEditorTarget,
  Er as resolveSlideTableContextMenuActions,
  Fa as resolveSlideTableDocumentHorizontalAlign,
  ua as resolveSlideTableKeyboardMovement,
  eo as resolveSlideTableMergeToolbarAction,
  Su as resolveSlideTableObjectSelection,
  Oa as resolveSlideTableSelectionValues,
  qa as resolveSlideTableToolbarActions,
  sc as serializeSlideTableCellStyleAttribute,
  oc as serializeSlideTableSelectionToHtml,
  ac as serializeSlideTableSelectionToText,
  za as toCoreVerticalAlign,
};
