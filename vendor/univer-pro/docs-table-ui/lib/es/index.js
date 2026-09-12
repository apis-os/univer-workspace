import {
  DOCS_TABLE_PLUGIN as _0xb8f363,
  DocsTableBorderPreset as _0x587011,
  DocsTableDeleteColumnsCommand as _0x428cf0,
  DocsTableDeleteRowsCommand as _0x25a727,
  DocsTableDeleteTableCommand as _0x5160ba,
  DocsTableInsertColumnsCommand as _0x28a0a7,
  DocsTableInsertRowsCommand as _0x8fd096,
  DocsTableInsertTableCommand as _0x2a0902,
  DocsTableInsertTablePosition as _0x11820b,
  DocsTableInsertTitleRowCommand as _0x10af40,
  DocsTableMergeCellsCommand as _0x16dfd9,
  DocsTableMoveColumnsCommand as _0xb55a4d,
  DocsTableMoveRowsCommand as _0x1e814e,
  DocsTableMoveTableCommand as _0x372724,
  DocsTableResizeColumnCommand as _0x3a0da1,
  DocsTableResizeRowCommand as _0x247fe1,
  DocsTableSelectionKind as _0x4f4538,
  DocsTableSelectionService as _0x14b58d,
  DocsTableSelectionSource as _0x39467c,
  DocsTableSetHeaderRowCountCommand as _0x26dc45,
  DocsTableSetTableBackgroundCommand as _0x24b483,
  DocsTableSetTableBorderColorCommand as _0x565736,
  DocsTableSetTableBorderCommand as _0xd71e8,
  DocsTableSetTableBorderStyleCommand as _0xf9898c,
  DocsTableSetTableBorderWidthCommand as _0x26e174,
  DocsTableSetTableVerticalAlignCommand as _0x33bf3f,
  DocsTableSortDirection as _0x5c49d0,
  DocsTableSortTableCommand as _0x48cf43,
  DocsTableUnmergeCellsCommand as _0x22c3e0,
  UniverDocsTablePlugin as _0x422753,
  canMergeCells as _0x2e62f0,
  canUnmergeCells as _0x5f3639,
  getTableRangeById as _0x556668,
} from "@univerjs-pro/docs-table";
import {
  AlignMenuItemFactory as _0x357a43,
  AlignOperationCommand as _0x16c61,
  BackgroundColorSelectorMenuItemFactory as _0x2d3614,
  BoldMenuItemFactory as _0x17b4fd,
  BulletListCommand as _0x37de97,
  CheckListCommand as _0x5a9297,
  DOC_CONTENT_INSERT_MENU_ID as _0x4daf73,
  DOC_PARAGRAPH_T_INSERT_BELOW_MENU_ID as _0x27a7fd,
  DOC_PARAGRAPH_T_INSERT_MENU_ID as _0x4f8a09,
  DOC_TABLE_BLOCK_MENU_ID as _0x2cb801,
  DeleteLeftCommand as _0x2ff38c,
  DocCanvasPopManagerService as _0x425bcd,
  DocCreateTableOperation as _0x2f2da0,
  DocEventManagerService as _0x387a93,
  DocFloatMenuService as _0x1e0851,
  DocParagraphMenuService as _0x37b4ad,
  DocSelectAllCommand as _0x284362,
  DocSelectionRenderService as _0x3e0c9d,
  EMPTY_PARAGRAPH_MENU_ID as _0x528bc9,
  FloatTextStyleMenuItemFactory as _0x271da4,
  FontFamilySelectorMenuItemFactory as _0x4f97e3,
  FontSizeSelectorMenuItemFactory as _0x3acac3,
  INSERT_BELLOW_MENU_ID as _0x314d4f,
  ItalicMenuItemFactory as _0x1acd34,
  OrderListCommand as _0x56e8c1,
  ParagraphMenuInsertBelowSubmenuItemFactory as _0x555f2c,
  SetDocZoomRatioOperation as _0x2ed827,
  SetInlineFormatBoldCommand as _0x3d59b0,
  SetInlineFormatFontFamilyCommand as _0x1c3b45,
  SetInlineFormatFontSizeCommand as _0x55d658,
  SetInlineFormatItalicCommand as _0x1e034a,
  SetInlineFormatStrikethroughCommand as _0x3e34ad,
  SetInlineFormatTextBackgroundColorCommand as _0x938c3a,
  SetInlineFormatTextColorCommand as _0x4f6ec4,
  SetInlineFormatUnderlineCommand as _0x436ecd,
  SetParagraphNamedStyleCommand as _0xc7fde1,
  StrikeThroughMenuItemFactory as _0x5dda8b,
  TextColorSelectorMenuItemFactory as _0xf85015,
  UnderlineMenuItemFactory as _0x42ea82,
  UniverDocsUIPlugin as _0xf10a4,
} from "@univerjs/docs-ui";
import {
  COLOR_PICKER_COMPONENT as _0x432568,
  ComponentManager as _0x9ed24c,
  ContextMenuGroup as _0x20d881,
  ContextMenuPosition as _0x47a65f,
  IContextMenuService as _0x49ff90,
  IMenuManagerService as _0x36628e,
  IShortcutService as _0x26ecb8,
  IconManager as _0x4f9de7,
  KeyCode as _0x3a3e97,
  MenuItemType as _0x4590f8,
  MenuManagerPosition as _0x1ed921,
  MetaKeys as _0x12016b,
  RibbonInsertGroup as _0x55035c,
  RibbonPosition as _0x1ca476,
  ToolbarButton as _0x553e0f,
  ToolbarItem as _0x486174,
  getMenuHiddenObservable as _0x43f8e2,
  useDependency as _0xe42fa4,
  useObservable as _0x1e9e9e,
} from "@univerjs/ui";
import {
  ColorKit as _0x31d6b9,
  CommandType as _0x4cecd5,
  DEFAULT_STYLES as _0x5eb61b,
  DOC_RANGE_TYPE as _0x235311,
  DashStyleType as _0x4bc179,
  DependentOn as _0xd04164,
  Disposable as _0xc3c4df,
  DocumentBlockType as _0x6aaaa4,
  DocumentFlavor as _0x5004a1,
  EDITOR_ACTIVATED as _0x6ba6e6,
  FOCUSING_DOC as _0x27ea1d,
  FOCUSING_UNIVER_EDITOR as _0x4ce4d2,
  HorizontalAlign as _0x2926f3,
  ICommandService as _0x3eaaf9,
  IConfigService as _0x34047a,
  IPermissionService as _0x431dbc,
  IUniverInstanceService as _0x373426,
  Inject as _0x76478b,
  Injector as _0x49243a,
  LocaleService as _0x125639,
  NamedStyleType as _0xe41862,
  Plugin as _0x37fb27,
  PresetListType as _0x8d611,
  ThemeService as _0x35da76,
  UniverInstanceType as _0x3e7115,
  VerticalAlignmentType as _0x53eb1d,
  merge as _0x93dcd0,
  toDisposable as _0x39b98c,
} from "@univerjs/core";
import {
  Button as _0x339f9f,
  ColorPicker as _0x12fbd7,
  Dropdown as _0x5f5def,
  InputNumber as _0x38e6d5,
  Separator as _0x1c0eb5,
  Tooltip as _0x26d9e6,
  borderClassName as _0x273c19,
  clsx as _0x2771cb,
} from "@univerjs/design";
import { useMemo as _0x25f13f, useState as _0x40bcf3 } from "react";
import {
  BehaviorSubject as _0xe60413,
  EMPTY as _0x441036,
  Observable as _0x1a7857,
  Subject as _0x29a1ff,
  combineLatest as _0x5f288f,
  map as _0x5e4e8a,
  of as _0x4228cf,
  startWith as _0x5bb6fb,
  switchMap as _0x2ba586,
} from "rxjs";
import {
  Fragment as _0x14c436,
  jsx as _0x10d7f4,
  jsxs as _0x5b1f13,
} from "react/jsx-runtime";
import { UniverLicensePlugin as _0x10db5f } from "@univerjs-pro/license";
import {
  DocSelectionManagerService as _0x12b354,
  DocSkeletonManagerService as _0x432c98,
  UniverDocsPlugin as _0x51c79e,
  canEditDocumentTargets as _0xb83fc1,
  getDocumentEntityParentPermissionObjectIds as _0x3d0592,
  getDocumentEntityPermissionObjectId as _0x525d11,
} from "@univerjs/docs";
import {
  CURSOR_TYPE as _0x43cf02,
  DocumentSkeletonPageType as _0x4718ca,
  IRenderManagerService as _0x268a18,
  UniverRenderEnginePlugin as _0x39358b,
  Vector2 as _0x2063d6,
  getTableIdAndSliceIndex as _0x51cfa2,
  setDocsTableRenderViewportProvider as _0x596e12,
} from "@univerjs/engine-render";
import {
  AlignBottomIcon as _0x4d9b35,
  AlignTextBothIcon as _0x405484,
  AlignTopIcon as _0x32a9fb,
  AllBorderIcon as _0x24253b,
  BoldIcon as _0x5e6e8d,
  CalendarIcon as _0x34e2fa,
  CancelMergeIcon as _0x295574,
  DeleteColumnDoubleIcon as _0x191cb9,
  DeleteRowDoubleIcon as _0x5d9e28,
  DownBorderDoubleIcon as _0x9e67b6,
  FontColorDoubleIcon as _0xc9e584,
  HorizontalBorderDoubleIcon as _0x654c23,
  HorizontallyIcon as _0x3e4c30,
  InnerBorderDoubleIcon as _0x261f98,
  ItalicIcon as _0x33a5ab,
  LeftBorderDoubleIcon as _0x8b0a76,
  LeftJustifyingIcon as _0x211bdc,
  MergeAllIcon as _0x3a574d,
  MoreDownIcon as _0x5aa664,
  NoBorderIcon as _0x56bd87,
  NoColorDoubleIcon as _0x454523,
  NumberIcon as _0xe9a45e,
  OuterBorderDoubleIcon as _0x4d1d81,
  PaintBucketDoubleIcon as _0x42c420,
  RightBorderDoubleIcon as _0x3f14ee,
  RightJustifyingIcon as _0x5e3cea,
  StrikethroughIcon as _0xc5cdc4,
  TableBorderStyleDashedIcon as _0x5d205e,
  TableBorderStyleDottedIcon as _0x255810,
  TableBorderStyleIcon as _0x2d15b0,
  TableBorderStyleSolidIcon as _0x43377d,
  TableBorderWidthIcon as _0x33edb7,
  TableIcon as _0x59c20c,
  TextIcon as _0x5a670c,
  UnderlineIcon as _0x42b1fc,
  UpBorderDoubleIcon as _0x47d9e7,
  VerticalBorderDoubleIcon as _0x5e2df2,
  VerticalCenterIcon as _0xdde3f0,
} from "@univerjs/icons";
import { documentSkeletonTableIterator as _0x43738a } from "@univerjs-pro/docs-column";
function Yn(_0x47a652, _0x57a1f4) {
  return _0x47a652 + ":" + _0x57a1f4;
}
function Xn(_0x23a91a) {
  if (!_0x23a91a) return null;
  let _0x31769f = Number(_0x23a91a.rowCount),
    _0x389dc7 = Number(_0x23a91a.colCount);
  if (Qn(_0x31769f, _0x389dc7))
    return { colCount: _0x389dc7, rowCount: _0x31769f };
  if (_0x23a91a.value == null) return null;
  let [_0x51c09d, _0x1b8ed8] = String(_0x23a91a.value)
    .split(":")
    .map((_0x5f255a) => Number(_0x5f255a));
  return Qn(_0x51c09d, _0x1b8ed8)
    ? { colCount: _0x1b8ed8, rowCount: _0x51c09d }
    : null;
}
function Zn(_0x1627fc) {
  let _0x17692a = Number(_0x1627fc);
  return Number.isFinite(_0x17692a)
    ? Math.min(20, Math.max(1, Math.trunc(_0x17692a)))
    : 1;
}
function Qn(_0x2032e5, _0x3e2933) {
  let _0x16097b = Number(_0x2032e5),
    _0x551b76 = Number(_0x3e2933);
  return (
    Number.isInteger(_0x16097b) &&
    Number.isInteger(_0x551b76) &&
    _0x16097b >= 1 &&
    _0x16097b <= 20 &&
    _0x551b76 >= 1 &&
    _0x551b76 <= 20
  );
}
const z = {
    id: "docs-table-ui.operation.create-table",
    type: _0x4cecd5.COMMAND,
    handler: async (_0x1d818f, _0x36d415) => {
      let _0x43cffe = _0x1d818f.get(_0x3eaaf9),
        _0x28b369 = Xn(_0x36d415);
      return _0x28b369
        ? _0x43cffe.executeCommand(_0x2a0902.id, {
            rows: _0x28b369.rowCount,
            columns: _0x28b369.colCount,
            position: _0x11820b.Selection,
          })
        : false;
    },
  },
  $n = "doc.menu.table",
  er = "docs-table-ui.insert-table-picker",
  tr = { rowCount: 3, colCount: 5 };
function nr(_0x908aac) {
  return {
    id: $n,
    commandId: z.id,
    selectionsCommandId: z.id,
    params: tr,
    type: _0x4590f8.SUBITEMS,
    icon: "TableIcon",
    tooltip: "docs-table-ui.table.main",
    slot: true,
    hidden$: ar(_0x908aac),
    selections: [{ label: { name: er, hoverable: false, selectable: false } }],
  };
}
function rr(_0x218eae) {
  return {
    id: z.id,
    commandId: z.id,
    selectionsCommandId: z.id,
    params: tr,
    type: _0x4590f8.BUTTON_SELECTOR,
    icon: "TableIcon",
    title: "docs-table-ui.insertTable",
    hidden$: ar(_0x218eae),
    selections: [{ label: { name: er, hoverable: false, selectable: false } }],
  };
}
function ir(_0x5de9b6) {
  return {
    id: z.id,
    commandId: z.id,
    selectionsCommandId: z.id,
    params: tr,
    type: _0x4590f8.BUTTON_SELECTOR,
    icon: "TableIcon",
    title: "docs-table-ui.insertTable",
    hidden$: ar(_0x5de9b6),
    selections: [{ label: { name: er, hoverable: false, selectable: false } }],
  };
}
function ar(_0x3ef073) {
  let _0x1ea640 = _0x43f8e2(_0x3ef073, _0x3e7115.UNIVER_DOC, undefined),
    _0x5e78c6 = or(_0x3ef073);
  return _0x5e78c6
    ? _0x5f288f([
        _0x1ea640,
        _0x5e78c6.selectionChange$["pipe"](
          _0x5bb6fb(_0x5e78c6.getCurrentSelection()),
          _0x5e4e8a((_0x128c8e) => !!(_0x128c8e != null && _0x128c8e.tableId)),
        ),
      ]).pipe(_0x5e4e8a(([_0x179b43, _0x4f9b1c]) => _0x179b43 || _0x4f9b1c))
    : _0x1ea640;
}
function or(_0x5a89a6) {
  try {
    let _0x40a101 = _0x5a89a6.get(_0x14b58d);
    if (
      _0x40a101 &&
      typeof _0x40a101.getCurrentSelection == "function" &&
      _0x40a101.selectionChange$
    )
      return _0x40a101;
  } catch {
    return null;
  }
  return null;
}
function sr(_0x361a8c) {
  let _0x1da3b = _0xe42fa4(_0x125639),
    _0x48c799 = _0x1e9e9e(_0x1da3b.direction$, "ltr"),
    [_0x419335, _0x5bb7c4] = _0x40bcf3({ colCount: 5, rowCount: 3 }),
    [_0x2533b5, _0x418861] = _0x40bcf3(3),
    [_0x1fb067, _0x2ddbf6] = _0x40bcf3(5),
    _0x489d3e = (_0x54a3ff) => {
      var _0x3ea19e;
      (_0x3ea19e = _0x361a8c.onChange) == null ||
        _0x3ea19e.call(_0x361a8c, Yn(_0x54a3ff.rowCount, _0x54a3ff.colCount));
    };
  return _0x5b1f13("section", {
    className:
      "univer-box-border univer-w-[300px] univer-rounded-lg univer-bg-gray-0 univer-p-2 univer-text-gray-900 dark:!univer-bg-gray-800 dark:!univer-text-gray-0",
    "data-u-comp": er,
    dir: _0x48c799,
    onClick: (_0x313c5e) => _0x313c5e.stopPropagation(),
    onMouseDown: (_0x574602) => _0x574602.stopPropagation(),
    children: [
      _0x10d7f4("div", {
        className:
          "univer-grid univer-grid-cols-[repeat(14,minmax(0,1fr))] univer-gap-0.5",
        children: Array.from({ length: 10 }).map((_0x1de15a, _0x177f8c) =>
          Array.from({ length: 14 }).map((_0x2d3f86, _0x5619ca) => {
            let _0x4046a8 = _0x177f8c + 1,
              _0x5ae342 = _0x5619ca + 1,
              _0x599c89 =
                _0x4046a8 <= _0x419335.rowCount &&
                _0x5ae342 <= _0x419335.colCount;
            return _0x10d7f4(
              "button",
              {
                type: "button",
                "aria-label":
                  _0x1da3b.t("docs-table-ui.insertTableSize") +
                  "\x20" +
                  _0x5ae342 +
                  " x " +
                  _0x4046a8,
                className: _0x2771cb(
                  "univer-size-4 univer-cursor-pointer univer-rounded-sm univer-border univer-border-solid univer-p-0 univer-transition-colors",
                  _0x599c89
                    ? "univer-border-primary-500 univer-bg-primary-100 hover:univer-bg-primary-200"
                    : "univer-border-gray-200 univer-bg-gray-50 hover:univer-border-primary-300 hover:univer-bg-primary-50",
                ),
                onClick: () =>
                  _0x489d3e({ colCount: _0x5ae342, rowCount: _0x4046a8 }),
                onMouseEnter: () =>
                  _0x5bb7c4({ colCount: _0x5ae342, rowCount: _0x4046a8 }),
              },
              _0x4046a8 + ":" + _0x5ae342,
            );
          }),
        ),
      }),
      _0x5b1f13("div", {
        dir: "ltr",
        className:
          "univer-mt-2 univer-text-center univer-text-sm univer-font-medium",
        children: [_0x419335.colCount, " × ", _0x419335.rowCount],
      }),
      _0x5b1f13("div", {
        className:
          "univer-mt-2 univer-border-0 univer-border-t univer-border-solid univer-border-gray-200 univer-pt-3",
        children: [
          _0x10d7f4("div", {
            className: "univer-mb-2 univer-text-xs univer-text-gray-500",
            children: _0x1da3b.t("docs-table-ui.customTableSize"),
          }),
          _0x5b1f13("div", {
            className: "univer-grid univer-grid-cols-2 univer-gap-2",
            children: [
              _0x5b1f13("label", {
                className:
                  "univer-grid univer-gap-1 univer-text-xs univer-text-gray-500",
                children: [
                  _0x10d7f4("span", {
                    children: _0x1da3b.t("docs-table-ui.tableRows"),
                  }),
                  _0x10d7f4(_0x38e6d5, {
                    className: "univer-w-full",
                    min: 1,
                    max: 20,
                    precision: 0,
                    value: _0x2533b5,
                    onChange: (_0x35d843) => _0x418861(Zn(_0x35d843)),
                  }),
                ],
              }),
              _0x5b1f13("label", {
                className:
                  "univer-grid univer-gap-1 univer-text-xs univer-text-gray-500",
                children: [
                  _0x10d7f4("span", {
                    children: _0x1da3b.t("docs-table-ui.tableColumns"),
                  }),
                  _0x10d7f4(_0x38e6d5, {
                    className: "univer-w-full",
                    min: 1,
                    max: 20,
                    precision: 0,
                    value: _0x1fb067,
                    onChange: (_0x204887) => _0x2ddbf6(Zn(_0x204887)),
                  }),
                ],
              }),
              _0x10d7f4(_0x339f9f, {
                className: "univer-col-span-2 univer-w-full",
                variant: "primary",
                onClick: () =>
                  _0x489d3e({ colCount: _0x1fb067, rowCount: _0x2533b5 }),
                children: _0x1da3b.t("docs-table-ui.insert"),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const cr = "docs-table-ui.menu.insert",
  lr = "docs-table-ui.menu.delete",
  ur = "docs-table-ui.menu.border",
  dr = "doc.menu.table-insert",
  fr = "doc.menu.table-delete",
  pr = "doc.operation.show-hyper-link-edit-popup",
  mr = "docs.operation.start-add-comment",
  hr = {
    all: "AllBorderIcon",
    bottom: "DownBorderDoubleIcon",
    inner: "InnerBorderDoubleIcon",
    innerHorizontal: "HorizontalBorderDoubleIcon",
    innerVertical: "VerticalBorderDoubleIcon",
    left: "LeftBorderDoubleIcon",
    none: "NoBorderIcon",
    outer: "OuterBorderDoubleIcon",
    right: "RightBorderDoubleIcon",
    top: "UpBorderDoubleIcon",
  };
function gr() {
  return { id: cr, type: _0x4590f8.SUBITEMS, title: "docs-table-ui.insert" };
}
function _r(_0x1fa616) {
  return {
    id: lr,
    type: _0x4590f8.SUBITEMS,
    title: "docs-table-ui.delete",
    hidden$: _0x1fa616 ? $r(_0x1fa616) : undefined,
  };
}
function vr(_0x30911e) {
  return {
    id: ur,
    type: _0x4590f8.SUBITEMS,
    title: "docs-table-ui.borders",
    icon: hr.all,
    hidden$: _0x30911e ? $r(_0x30911e) : undefined,
  };
}
function yr() {
  return Zr(dr, "docs-table-ui.table.insert");
}
function br() {
  return Zr(fr, "docs-table-ui.table.delete");
}
function xr() {
  return Qr(pr);
}
function Sr() {
  return Qr(mr);
}
function Cr(_0x4242fa) {
  return {
    ...B(_0x2ff38c.id, "docs-table-ui.clearContent", undefined, _0x4242fa),
    id: _0x2ff38c.id,
    icon: "ClearFormatDoubleIcon",
  };
}
function wr(_0x4f2bec) {
  return {
    ...B(
      _0x8fd096.id,
      "docs-table-ui.insertRowAbove",
      { position: "above" },
      _0x4f2bec,
    ),
    icon: "InsertRowAboveDoubleIcon",
  };
}
function Tr(_0x2f33d9) {
  return {
    ...B(
      _0x8fd096.id,
      "docs-table-ui.insertRowBelow",
      { position: "below" },
      _0x2f33d9,
    ),
    icon: "InsertRowBelowDoubleIcon",
  };
}
function Er(_0x37ded8) {
  return {
    ...B(
      _0x28a0a7.id,
      "docs-table-ui.insertColumnLeft",
      { position: "left" },
      _0x37ded8,
    ),
    icon: "LeftInsertColumnDoubleIcon",
  };
}
function Dr(_0x3bf206) {
  return {
    ...B(
      _0x28a0a7.id,
      "docs-table-ui.insertColumnRight",
      { position: "right" },
      _0x3bf206,
    ),
    icon: "RightInsertColumnDoubleIcon",
  };
}
function Or(_0x307def) {
  return B(_0x25a727.id, "docs-table-ui.deleteRow", Yr(_0x307def), _0x307def);
}
function kr(_0x1f7ed0) {
  return B(
    _0x428cf0.id,
    "docs-table-ui.deleteColumn",
    Yr(_0x1f7ed0),
    _0x1f7ed0,
  );
}
function Ar(_0x4cb7a2) {
  return B(_0x5160ba.id, "docs-table-ui.deleteTable", Yr(_0x4cb7a2), _0x4cb7a2);
}
function jr(_0x4d756a) {
  return B(
    _0x16dfd9.id,
    "docs-table-ui.mergeCells",
    undefined,
    _0x4d756a,
    _0x4d756a ? ni(_0x4d756a) : undefined,
  );
}
function Mr(_0x1c730b) {
  return B(
    _0x22c3e0.id,
    "docs-table-ui.unmergeCells",
    undefined,
    _0x1c730b,
    _0x1c730b ? ri(_0x1c730b) : undefined,
  );
}
function Nr(_0x190bf7) {
  return B(
    _0x10af40.id,
    "docs-table-ui.insertTitleRow",
    undefined,
    _0x190bf7,
    undefined,
    _0x190bf7 ? ei(_0x190bf7) : undefined,
  );
}
function Pr(_0x129ffc) {
  return B(
    _0x26dc45.id,
    "docs-table-ui.pinHeaderRows",
    undefined,
    _0x129ffc,
    undefined,
    _0x129ffc ? ei(_0x129ffc) : undefined,
  );
}
function Fr(_0x18e4f0) {
  return V("docs-table-ui.borderAll", _0x587011.All, _0x18e4f0);
}
function Ir(_0x15b864) {
  return V("docs-table-ui.borderBottom", _0x587011.Bottom, _0x15b864);
}
function Lr(_0x2807e0) {
  return V("docs-table-ui.borderInner", _0x587011.Inner, _0x2807e0);
}
function Rr(_0x48e475) {
  return V(
    "docs-table-ui.borderInnerHorizontal",
    _0x587011.InnerHorizontal,
    _0x48e475,
  );
}
function zr(_0x328cd9) {
  return V(
    "docs-table-ui.borderInnerVertical",
    _0x587011.InnerVertical,
    _0x328cd9,
  );
}
function Br(_0x5bd690) {
  return V("docs-table-ui.borderLeft", _0x587011.Left, _0x5bd690);
}
function Vr(_0x4efa1f) {
  return V("docs-table-ui.borderOuter", _0x587011.Outer, _0x4efa1f);
}
function Hr(_0x1c94db) {
  return V("docs-table-ui.borderNone", _0x587011.None, _0x1c94db);
}
function Ur(_0x4ce99e) {
  return V("docs-table-ui.borderRight", _0x587011.Right, _0x4ce99e);
}
function Wr(_0x208046) {
  return V("docs-table-ui.borderTop", _0x587011.Top, _0x208046);
}
function Gr(_0x2bf5ba) {
  return Xr({
    accessor: _0x2bf5ba,
    commandId: _0x24b483.id,
    defaultColor: _0x5eb61b.bg["rgb"],
    icon: "PaintBucketDoubleIcon",
    tooltip: "docs-table-ui.tableBackgroundColor",
  });
}
function Kr(_0x230a37) {
  return Xr({
    accessor: _0x230a37,
    commandId: _0x565736.id,
    defaultColor: "#1f1f1f",
    icon: "PaintBucketDoubleIcon",
    tooltip: "docs-table-ui.borderColor",
  });
}
function qr(_0x30e77e) {
  return {
    id: _0x26e174.id,
    type: _0x4590f8.SELECTOR,
    icon: "TableBorderWidthIcon",
    tooltip: "docs-table-ui.borderWidth",
    selections: [0, 0.5, 0.75, 1, 1.5, 2.25, 3, 4.5, 6].map((_0x451ef5) => ({
      value: _0x451ef5,
      label: _0x451ef5 + "pt",
    })),
    value$: _0x4228cf(1),
    hidden$: _0x30e77e ? $r(_0x30e77e) : undefined,
  };
}
function Jr(_0x2ecb23) {
  return {
    id: _0xf9898c.id,
    type: _0x4590f8.SELECTOR,
    icon: "TableBorderStyleIcon",
    tooltip: "docs-table-ui.borderStyle",
    selections: [
      {
        value: "solid",
        label: "docs-table-ui.borderStyleSolid",
        icon: "TableBorderStyleSolidIcon",
      },
      {
        value: "dot",
        label: "docs-table-ui.borderStyleDotted",
        icon: "TableBorderStyleDottedIcon",
      },
      {
        value: "dash",
        label: "docs-table-ui.borderStyleDashed",
        icon: "TableBorderStyleDashedIcon",
      },
    ],
    value$: _0x4228cf("solid"),
    hidden$: _0x2ecb23 ? $r(_0x2ecb23) : undefined,
  };
}
function B(_0x1941a2, _0xf15132, _0x616b61, _0x2a329c, _0x2effdc, _0x3aca3d) {
  return {
    id: _0x1941a2 + "." + _0xf15132.split(".").pop(),
    commandId: _0x1941a2,
    type: _0x4590f8.BUTTON,
    title: _0xf15132,
    params: _0x616b61,
    hidden$: _0x3aca3d ?? (_0x2a329c ? $r(_0x2a329c) : undefined),
    disabled$: _0x2effdc,
  };
}
function Yr(_0x4ca716) {
  if (!_0x4ca716) return;
  let _0x2ff9ad = _0x4ca716.get(_0x14b58d);
  return () => {
    let _0x167f5c = _0x2ff9ad.getCurrentSelection();
    return _0x167f5c ? { ..._0x167f5c } : undefined;
  };
}
function V(_0xe6cb7c, _0x3ec208, _0x40624e) {
  return {
    ...B(_0xd71e8.id, _0xe6cb7c, { preset: _0x3ec208 }, _0x40624e),
    icon: hr[_0x3ec208],
  };
}
function Xr(_0x571984) {
  let _0x322282 = _0x571984.defaultColor || "#1f1f1f";
  return {
    id: _0x571984.commandId,
    tooltip: _0x571984.tooltip,
    type: _0x4590f8.BUTTON_SELECTOR,
    icon: _0x571984.icon,
    selections: [
      {
        label: { name: _0x432568, hoverable: false, selectable: false },
        value$: _0x4228cf(_0x322282),
      },
    ],
    value$: _0x571984.accessor
      ? new _0x1a7857((_0x21d6c6) => {
          let _0x236e38 = _0x571984.accessor["get"](_0x373426).focused$[
            "subscribe"
          ](() => _0x21d6c6.next(_0x322282));
          return (_0x21d6c6.next(_0x322282), () => _0x236e38.unsubscribe());
        })
      : _0x4228cf(_0x322282),
    hidden$: _0x571984.accessor ? $r(_0x571984.accessor) : undefined,
  };
}
function Zr(_0x3a002a, _0x497111) {
  return {
    id: _0x3a002a,
    type: _0x4590f8.SUBITEMS,
    title: _0x497111,
    hidden$: _0x4228cf(true),
  };
}
function Qr(_0xd79f15, _0x26bcb0) {
  return {
    id: _0xd79f15,
    commandId: _0xd79f15,
    type: _0x4590f8.BUTTON,
    title: _0x26bcb0,
    hidden$: _0x4228cf(true),
  };
}
function $r(_0x5841f0) {
  let _0x458bd5 = ii(_0x5841f0);
  return _0x5f288f([
    _0x43f8e2(_0x5841f0, _0x3e7115.UNIVER_DOC),
    _0x458bd5.pipe(
      _0x5e4e8a((_0xdcd9f4) => !(_0xdcd9f4 != null && _0xdcd9f4.tableId)),
    ),
  ]).pipe(_0x5e4e8a(([_0x15da6a, _0xafb562]) => _0x15da6a || _0xafb562));
}
function ei(_0x28bc53) {
  return _0x5f288f([$r(_0x28bc53), ti(_0x28bc53)]).pipe(
    _0x5e4e8a(([_0x523ee6, _0x39c89d]) => _0x523ee6 || _0x39c89d),
  );
}
function ti(_0x201ca8) {
  let _0x4e52df = _0x201ca8.get(_0x373426);
  return new _0x1a7857((_0x36dc25) => {
    let _0x1d8dfd = (_0xe48b51) => {
        var _0x3450b7;
        let _0x427a6a = _0xe48b51
            ? _0x4e52df.getUnit(_0xe48b51, _0x3e7115.UNIVER_DOC)
            : _0x4e52df.getCurrentUnitOfType(_0x3e7115.UNIVER_DOC),
          _0x2502bb =
            _0x427a6a == null ||
            (_0x3450b7 = _0x427a6a.getSnapshot()) == null ||
            (_0x3450b7 = _0x3450b7.documentStyle) == null
              ? undefined
              : _0x3450b7.documentFlavor;
        _0x36dc25.next(_0x2502bb !== _0x5004a1.TRADITIONAL);
      },
      _0x4c53c5 = _0x4e52df.focused$["subscribe"]((_0x4282a6) =>
        _0x1d8dfd(_0x4282a6 ?? null),
      );
    return (_0x1d8dfd(), () => _0x4c53c5.unsubscribe());
  });
}
function ni(_0x224e8d) {
  let _0x4aef8e = _0x224e8d.get(_0x373426),
    _0x1ac01f = _0x224e8d.get(_0x14b58d);
  return ii(_0x224e8d).pipe(
    _0x5e4e8a((_0x5138f9) => {
      let _0x172d18 = _0x4aef8e.getCurrentUnitOfType(_0x3e7115.UNIVER_DOC),
        _0x5a5599 =
          _0x5138f9 != null && _0x5138f9.tableId
            ? _0x5138f9
            : _0x1ac01f.getStableTableSelection();
      return (
        !_0x172d18 ||
        !(_0x5a5599 != null && _0x5a5599.tableId) ||
        !_0x2e62f0(_0x172d18.getSnapshot(), _0x5a5599.tableId, _0x5a5599)
      );
    }),
  );
}
function ri(_0x59e283) {
  let _0xa2d521 = _0x59e283.get(_0x373426),
    _0x4bd69a = _0x59e283.get(_0x14b58d);
  return ii(_0x59e283).pipe(
    _0x5e4e8a((_0x2ea9f1) => {
      let _0x3000f9 = _0xa2d521.getCurrentUnitOfType(_0x3e7115.UNIVER_DOC),
        _0x1d938e =
          _0x2ea9f1 != null && _0x2ea9f1.tableId
            ? _0x2ea9f1
            : _0x4bd69a.getStableTableSelection();
      return (
        !_0x3000f9 ||
        !(_0x1d938e != null && _0x1d938e.tableId) ||
        !_0x5f3639(_0x3000f9.getSnapshot(), _0x1d938e.tableId, _0x1d938e)
      );
    }),
  );
}
function ii(_0x450bf9) {
  let _0xb33e86 = _0x450bf9.get(_0x14b58d);
  return _0xb33e86.selectionChange$["pipe"](
    _0x5bb6fb(_0xb33e86.getCurrentSelection()),
  );
}
const ai = { [_0x55035c.MEDIA]: { [$n]: { order: 2, menuItemFactory: nr } } },
  oi = {
    [_0x1ed921.RIBBON]: {
      [_0x1ca476.INSERT]: ai,
      [_0x1ca476.START]: {
        "ribbon.start.docs-table-style": {
          order: 20,
          [_0x24b483.id]: { order: 0, menuItemFactory: Gr },
          [_0x565736.id]: { order: 1, menuItemFactory: Kr },
          [_0x26e174.id]: { order: 2, menuItemFactory: qr },
          [_0xf9898c.id]: { order: 3, menuItemFactory: Jr },
        },
      },
    },
  },
  si = {
    ...ai,
    [_0x47a65f.PARAGRAPH]: {
      [_0x20d881.LAYOUT]: {
        [_0x314d4f]: { [_0x2f2da0.id]: { order: 4, menuItemFactory: rr } },
      },
      [_0x528bc9]: {
        [_0x20d881.LAYOUT]: {
          [_0x2f2da0.id]: { order: 4, menuItemFactory: rr },
        },
      },
      [_0x4daf73]: {
        "docs-table-ui.menu.cell-style-context-group": {
          order: -1,
          tiny: true,
          [_0x24b483.id]: { order: 0, menuItemFactory: Gr },
          [_0x565736.id]: { order: 1, menuItemFactory: Kr },
          [_0x26e174.id]: { order: 2, menuItemFactory: qr },
          [_0xf9898c.id]: { order: 3, menuItemFactory: Jr },
        },
        [_0x20d881.LAYOUT]: {
          [_0x2f2da0.id]: { order: 4, menuItemFactory: rr },
          [ur]: {
            order: 8,
            menuItemFactory: vr,
            "docs-table-ui.menu.border-all": { order: 0, menuItemFactory: Fr },
            "docs-table-ui.menu.border-inner": {
              order: 1,
              menuItemFactory: Lr,
            },
            "docs-table-ui.menu.border-outer": {
              order: 2,
              menuItemFactory: Vr,
            },
            "docs-table-ui.menu.border-top": { order: 3, menuItemFactory: Wr },
            "docs-table-ui.menu.border-bottom": {
              order: 4,
              menuItemFactory: Ir,
            },
            "docs-table-ui.menu.border-left": { order: 5, menuItemFactory: Br },
            "docs-table-ui.menu.border-right": {
              order: 6,
              menuItemFactory: Ur,
            },
            "docs-table-ui.menu.border-inner-horizontal": {
              order: 7,
              menuItemFactory: Rr,
            },
            "docs-table-ui.menu.border-inner-vertical": {
              order: 8,
              menuItemFactory: zr,
            },
            "docs-table-ui.menu.border-none": { order: 9, menuItemFactory: Hr },
          },
        },
      },
      [_0x4f8a09]: {
        insert: { [_0x2f2da0.id]: { order: 0, menuItemFactory: ir } },
      },
      [_0x27a7fd]: {
        insert: {
          [_0x2f2da0.id + ".below"]: { order: 0, menuItemFactory: rr },
        },
      },
      [_0x2cb801]: {
        [_0x20d881.LAYOUT]: {
          [_0x314d4f]: { order: 0, menuItemFactory: _0x555f2c },
        },
      },
    },
    [_0x47a65f.MAIN_AREA]: {
      [_0x20d881.DATA]: {
        [pr]: { order: 0, menuItemFactory: xr },
        [mr]: { order: 1, menuItemFactory: Sr },
      },
      [_0x20d881.FORMAT]: { [_0x2ff38c.id]: { order: 0, menuItemFactory: Cr } },
      [_0x20d881.LAYOUT]: {
        [dr]: { order: 1, menuItemFactory: yr },
        [fr]: { order: 2, menuItemFactory: br },
        [cr]: {
          order: 20,
          menuItemFactory: gr,
          "docs-table-ui.menu.insert-row-above": {
            order: 0,
            menuItemFactory: wr,
          },
          "docs-table-ui.menu.insert-row-below": {
            order: 1,
            menuItemFactory: Tr,
          },
          "docs-table-ui.menu.insert-column-left": {
            order: 2,
            menuItemFactory: Er,
          },
          "docs-table-ui.menu.insert-column-right": {
            order: 3,
            menuItemFactory: Dr,
          },
        },
        [lr]: {
          order: 30,
          menuItemFactory: _r,
          "docs-table-ui.menu.delete-rows": { order: 0, menuItemFactory: Or },
          "docs-table-ui.menu.delete-columns": {
            order: 1,
            menuItemFactory: kr,
          },
          "docs-table-ui.menu.delete-table": { order: 2, menuItemFactory: Ar },
        },
        "docs-table-ui.menu.merge-cells": { order: 40, menuItemFactory: jr },
        "docs-table-ui.menu.unmerge-cells": { order: 41, menuItemFactory: Mr },
      },
      [_0x20d881.OTHERS]: {
        "docs-table-ui.menu.insert-title-row": {
          order: 0,
          menuItemFactory: Nr,
        },
        "docs-table-ui.menu.pin-header": { order: 1, menuItemFactory: Pr },
      },
    },
  };
var ci = "@univerjs-pro/docs-table-ui",
  li = "1.0.0-insiders.20260907-70fc579";
const ui = {},
  di = "docs-table-ui.border-panel",
  fi = { colorChannel1: "#9ca3af" },
  pi = {
    all: _0x24253b,
    bottom: _0x9e67b6,
    inner: _0x261f98,
    innerHorizontal: _0x654c23,
    innerVertical: _0x5e2df2,
    left: _0x8b0a76,
    none: _0x56bd87,
    outer: _0x4d1d81,
    right: _0x3f14ee,
    top: _0x47d9e7,
  },
  mi = [
    { label: "docs-table-ui.borderAll", preset: _0x587011.All },
    { label: "docs-table-ui.borderInner", preset: _0x587011.Inner },
    { label: "docs-table-ui.borderOuter", preset: _0x587011.Outer },
    { label: "docs-table-ui.borderNone", preset: _0x587011.None },
  ];
function hi(_0x2d71b8) {
  var _0x267ee8;
  let _0x225f8a =
      (_0x267ee8 = _0x2d71b8.popup) == null ? undefined : _0x267ee8.extraProps,
    _0x5e440e = (_0x225f8a == null ? undefined : _0x225f8a.presets) ?? mi,
    _0x4ee1c5 = _0x225f8a == null ? undefined : _0x225f8a.onSelect,
    _0x5abf8d = _0xe42fa4(_0x125639);
  return _0x10d7f4("section", {
    className:
      "univer-box-border univer-grid univer-grid-cols-5 univer-gap-1 univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-2 univer-text-primary-600 univer-shadow-lg",
    "data-u-comp": di,
    children: _0x5e440e.map(({ label: _0x6e6d4f, preset: _0xb15eb1 }) => {
      let _0x69cea2 = pi[_0xb15eb1],
        _0x4d523b = _0x5abf8d.t(_0x6e6d4f);
      return _0x10d7f4(
        _0x339f9f,
        {
          size: "icon",
          variant: "ghost",
          type: "button",
          "aria-label": _0x4d523b,
          title: _0x4d523b,
          onClick: (_0x30ab74) => {
            (_0x30ab74.preventDefault(),
              _0x4ee1c5 == null || _0x4ee1c5(_0xb15eb1));
          },
          children: _0x10d7f4(_0x69cea2, {
            className: "univer-size-4 univer-text-base univer-text-current",
            extend: fi,
          }),
        },
        _0xb15eb1,
      );
    }),
  });
}
const gi = "docs-table-ui.column-type-panel",
  _i = [
    "docs-table-ui.columnTypeText",
    "docs-table-ui.columnTypeNumber",
    "docs-table-ui.columnTypeDate",
    "docs-table-ui.columnTypeCheckbox",
    "docs-table-ui.columnTypeDropdown",
  ];
function vi() {
  let _0x15d847 = _0xe42fa4(_0x125639);
  return _0x10d7f4("section", {
    "data-u-comp": gi,
    children: _i.map((_0x2def67) =>
      _0x10d7f4(
        _0x339f9f,
        {
          type: "button",
          "aria-label": _0x15d847.t(_0x2def67),
          children: _0x15d847.t(_0x2def67),
        },
        _0x2def67,
      ),
    ),
  });
}
const yi = { icon: "TextTypeIcon", value: _0xe41862.NORMAL_TEXT },
  bi = {
    [_0x8d611.ORDER_LIST]: "OrderIcon",
    [_0x8d611.ORDER_LIST_1]: "OrderIcon",
    [_0x8d611.ORDER_LIST_2]: "OrderIcon",
    [_0x8d611.ORDER_LIST_3]: "OrderIcon",
    [_0x8d611.ORDER_LIST_4]: "OrderIcon",
    [_0x8d611.ORDER_LIST_5]: "OrderIcon",
    [_0x8d611.ORDER_LIST_QUICK_2]: "OrderIcon",
    [_0x8d611.ORDER_LIST_QUICK_3]: "OrderIcon",
    [_0x8d611.ORDER_LIST_QUICK_4]: "OrderIcon",
    [_0x8d611.ORDER_LIST_QUICK_5]: "OrderIcon",
    [_0x8d611.ORDER_LIST_QUICK_6]: "OrderIcon",
    [_0x8d611.BULLET_LIST]: "UnorderIcon",
    [_0x8d611.BULLET_LIST_1]: "UnorderIcon",
    [_0x8d611.BULLET_LIST_2]: "UnorderIcon",
    [_0x8d611.BULLET_LIST_3]: "UnorderIcon",
    [_0x8d611.BULLET_LIST_4]: "UnorderIcon",
    [_0x8d611.BULLET_LIST_5]: "UnorderIcon",
    [_0x8d611.CHECK_LIST]: "TodoListDoubleIcon",
    [_0x8d611.CHECK_LIST_CHECKED]: "TodoListDoubleIcon",
  },
  xi = {
    [_0xe41862.NORMAL_TEXT]: "TextTypeIcon",
    [_0xe41862.HEADING_1]: "H1Icon",
    [_0xe41862.HEADING_2]: "H2Icon",
    [_0xe41862.HEADING_3]: "H3Icon",
    [_0xe41862.HEADING_4]: "H4Icon",
    [_0xe41862.HEADING_5]: "H5Icon",
    [_0xe41862.TITLE]: "TitleTypeIcon",
    [_0xe41862.SUBTITLE]: "SubtitleTypeIcon",
    [_0xe41862.NAMED_STYLE_TYPE_UNSPECIFIED]: "TextTypeIcon",
  };
function Si(_0x59bf2e, _0x208c01) {
  var _0x3221b2;
  let _0x2c0d59 = Ti(_0x59bf2e, _0x208c01);
  if (!_0x2c0d59) return yi;
  let _0xd86611 = Oi(_0x2c0d59);
  return {
    icon: ki(
      _0xd86611,
      (_0x3221b2 = _0x2c0d59.paragraphStyle) == null
        ? undefined
        : _0x3221b2.namedStyleType,
    ),
    value: _0xd86611,
  };
}
function Ci(_0x5017ba, _0x506d2c) {
  if (!_0x5017ba || !(_0x506d2c != null && _0x506d2c.tableId)) return [];
  let _0x5a5f7d = _0x556668(_0x5017ba, _0x506d2c.tableId);
  if (!_0x5a5f7d) return [];
  let _0x42e30d = Math.min(_0x506d2c.startRow, _0x506d2c.endRow),
    _0x43f1f6 = Math.max(_0x506d2c.startRow, _0x506d2c.endRow),
    _0x425d09 = Math.min(_0x506d2c.startColumn, _0x506d2c.endColumn),
    _0x16b05e = Math.max(_0x506d2c.startColumn, _0x506d2c.endColumn),
    _0x4edaf0 = new Set(),
    _0x5a3415 = [];
  for (let _0x1505fa = _0x42e30d; _0x1505fa <= _0x43f1f6; _0x1505fa++)
    for (let _0x4b29b6 = _0x425d09; _0x4b29b6 <= _0x16b05e; _0x4b29b6++) {
      var _0x394d4b;
      let _0x1a1982 =
        (_0x394d4b = _0x5a5f7d.rows[_0x1505fa]) == null
          ? undefined
          : _0x394d4b.cells[_0x4b29b6];
      if (!_0x1a1982) continue;
      let _0x42fdcf = _0x1a1982.startOffset + 1,
        _0x3db182 = Math.max(_0x42fdcf, _0x1a1982.endOffset - 1),
        _0x5081e1 = _0x42fdcf + ":" + _0x3db182;
      _0x4edaf0.has(_0x5081e1) ||
        (_0x4edaf0.add(_0x5081e1),
        _0x5a3415.push({
          collapsed: _0x42fdcf === _0x3db182,
          endOffset: _0x3db182,
          segmentId: _0x506d2c.segmentId ?? "",
          startOffset: _0x42fdcf,
        }));
    }
  return _0x5a3415.sort(
    (_0x2eb902, _0x3d9db5) =>
      _0x2eb902.startOffset - _0x3d9db5.startOffset ||
      _0x2eb902.endOffset - _0x3d9db5.endOffset,
  );
}
function wi(_0x2be41d, _0x8493db) {
  let _0x468244 = Di(_0x2be41d, _0x8493db);
  if (!_0x468244) return [];
  let _0x2360e9 = _0x468244.startOffset + 1,
    _0x10956e = Math.max(_0x2360e9, _0x468244.endOffset - 1);
  return [
    {
      collapsed: _0x2360e9 === _0x10956e,
      endOffset: _0x10956e,
      segmentId: (_0x8493db == null ? undefined : _0x8493db.segmentId) ?? "",
      startOffset: _0x2360e9,
    },
  ];
}
function Ti(_0x1a9b32, _0x17e09c) {
  var _0x36b419;
  if (!_0x1a9b32 || !(_0x17e09c != null && _0x17e09c.tableId)) return null;
  let _0x8292c =
      (_0x36b419 = _0x1a9b32.body) == null ? undefined : _0x36b419.paragraphs,
    _0x5bb387 = Di(_0x1a9b32, _0x17e09c);
  return !_0x5bb387 || !(_0x8292c != null && _0x8292c.length)
    ? null
    : Ei(_0x8292c, _0x5bb387.startOffset + 1);
}
function Ei(_0x2e973a, _0x2ec53f) {
  let _0x418233 = -1;
  for (let _0xb3d19a of _0x2e973a) {
    if (_0x2ec53f > _0x418233 && _0x2ec53f <= _0xb3d19a.startIndex)
      return _0xb3d19a;
    _0x418233 = _0xb3d19a.startIndex;
  }
  return null;
}
function Di(_0x4ee722, _0x14b6dc) {
  var _0x3d7da6;
  if (!_0x4ee722 || !(_0x14b6dc != null && _0x14b6dc.tableId)) return null;
  let _0x5d95ac = _0x556668(_0x4ee722, _0x14b6dc.tableId),
    _0x524c25 = Math.min(_0x14b6dc.startRow, _0x14b6dc.endRow),
    _0x40dba7 = Math.min(_0x14b6dc.startColumn, _0x14b6dc.endColumn);
  return (
    (_0x5d95ac == null || (_0x3d7da6 = _0x5d95ac.rows[_0x524c25]) == null
      ? undefined
      : _0x3d7da6.cells[_0x40dba7]) ?? null
  );
}
function Oi(_0x99ff5f) {
  var _0x23997c, _0xf62667;
  let _0x31e46f =
    (_0x23997c = _0x99ff5f.bullet) == null ? undefined : _0x23997c.listType;
  return _0x31e46f != null && _0x31e46f.startsWith(_0x8d611.ORDER_LIST)
    ? _0x8d611.ORDER_LIST
    : _0x31e46f != null && _0x31e46f.startsWith(_0x8d611.BULLET_LIST)
      ? _0x8d611.BULLET_LIST
      : _0x31e46f === _0x8d611.CHECK_LIST ||
          _0x31e46f === _0x8d611.CHECK_LIST_CHECKED
        ? _0x8d611.CHECK_LIST
        : (((_0xf62667 = _0x99ff5f.paragraphStyle) == null
            ? undefined
            : _0xf62667.namedStyleType) ?? _0xe41862.NORMAL_TEXT);
}
function ki(_0x4ef144, _0x3d177f) {
  return typeof _0x4ef144 == "string"
    ? (bi[_0x4ef144] ?? yi.icon)
    : (xi[_0x4ef144] ?? xi[_0x3d177f ?? _0xe41862.NORMAL_TEXT] ?? yi.icon);
}
function H(_0x383b7d) {
  return {
    id: _0x383b7d.id,
    type: _0x4cecd5.COMMAND,
    handler: async (_0x273796, _0x3e592a) => {
      let _0x3dda1b = _0x383b7d.mapParams
        ? _0x383b7d.mapParams(_0x3e592a)
        : _0x3e592a;
      return Bi(_0x273796, _0x383b7d.targetCommandId, _0x3dda1b);
    },
  };
}
const Ai = {
    id: "docs-table-ui.command.floating-text-style",
    type: _0x4cecd5.COMMAND,
    handler: async (_0x578497, _0x1a3e26) => {
      if (!_0x1a3e26) return false;
      let { value: _0x21d768 } = _0x1a3e26;
      if (typeof _0x21d768 == "number")
        return Bi(_0x578497, _0xc7fde1.id, { value: _0x21d768 }, "top-left");
      switch (_0x21d768) {
        case _0x8d611.ORDER_LIST:
          return Bi(_0x578497, _0x56e8c1.id, { value: _0x21d768 }, "top-left");
        case _0x8d611.BULLET_LIST:
          return Bi(_0x578497, _0x37de97.id, { value: _0x21d768 }, "top-left");
        case _0x8d611.CHECK_LIST:
          return Bi(_0x578497, _0x5a9297.id, { value: _0x21d768 }, "top-left");
        default:
          return false;
      }
    },
  },
  ji = H({
    id: "docs-table-ui.command.floating-bold",
    targetCommandId: _0x3d59b0.id,
  }),
  Mi = H({
    id: "docs-table-ui.command.floating-italic",
    targetCommandId: _0x1e034a.id,
  }),
  Ni = H({
    id: "docs-table-ui.command.floating-underline",
    targetCommandId: _0x436ecd.id,
  }),
  Pi = H({
    id: "docs-table-ui.command.floating-strike-through",
    targetCommandId: _0x3e34ad.id,
  }),
  Fi = H({
    id: "docs-table-ui.command.floating-font-family",
    targetCommandId: _0x1c3b45.id,
  }),
  Ii = H({
    id: "docs-table-ui.command.floating-font-size",
    targetCommandId: _0x55d658.id,
  }),
  Li = H({
    id: "docs-table-ui.command.floating-align",
    targetCommandId: _0x16c61.id,
    mapParams: (_0x3d8a06) => ({
      alignType: _0x3d8a06 == null ? undefined : _0x3d8a06.value,
    }),
  }),
  Ri = H({
    id: "docs-table-ui.command.floating-text-color",
    targetCommandId: _0x4f6ec4.id,
  }),
  zi = H({
    id: "docs-table-ui.command.floating-text-background-color",
    targetCommandId: _0x938c3a.id,
  });
async function Bi(_0xee2bab, _0xca363c, _0x32f036, _0x38c8f5 = "selection") {
  var _0x446f4b;
  let _0x28e4c1 = _0xee2bab.get(_0x3eaaf9),
    _0x38fa52 = _0xee2bab.get(_0x14b58d),
    _0x54b1a2 = _0xee2bab.get(_0x373426),
    _0x5e7e29 = _0xee2bab.get(_0x12b354),
    _0xcb5329 = _0x54b1a2.getCurrentUnitOfType(_0x3e7115.UNIVER_DOC),
    _0x26c6c8 = _0x38fa52.getStableTableSelection();
  if (!_0xcb5329 || !(_0x26c6c8 != null && _0x26c6c8.tableId))
    return _0x28e4c1.executeCommand(_0xca363c, _0x32f036);
  let _0x5b3032 = _0xcb5329.getSnapshot(),
    _0x8b1ab8 =
      _0x38c8f5 === "top-left"
        ? wi(_0x5b3032, _0x26c6c8)
        : Ci(_0x5b3032, _0x26c6c8);
  if (!_0x8b1ab8.length) return false;
  let _0x25fb06 = _0xcb5329.getUnitId(),
    _0x4eb299 = [...(_0x5e7e29.getDocRanges() ?? [])];
  (_0x446f4b = _0x5e7e29.replaceDocRanges) == null ||
    _0x446f4b.call(
      _0x5e7e29,
      _0x8b1ab8,
      { unitId: _0x25fb06, subUnitId: _0x25fb06 },
      false,
    );
  try {
    return await _0x28e4c1.executeCommand(_0xca363c, _0x32f036);
  } finally {
    var _0xfcb108;
    (_0xfcb108 = _0x5e7e29.replaceDocRanges) == null ||
      _0xfcb108.call(
        _0x5e7e29,
        _0x4eb299,
        { unitId: _0x25fb06, subUnitId: _0x25fb06 },
        false,
      );
  }
}
function Vi(_0x18f0f0) {
  "@babel/helpers - typeof";
  return (
    (Vi =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x3c280b) {
            return typeof _0x3c280b;
          }
        : function (_0x1a329d) {
            return _0x1a329d &&
              typeof Symbol == "function" &&
              _0x1a329d.constructor === Symbol &&
              _0x1a329d !== Symbol.prototype
              ? "symbol"
              : typeof _0x1a329d;
          }),
    Vi(_0x18f0f0)
  );
}
function Hi(_0x4a530e, _0x5a72b3) {
  if (Vi(_0x4a530e) != "object" || !_0x4a530e) return _0x4a530e;
  var _0x172368 = _0x4a530e[Symbol.toPrimitive];
  if (_0x172368 !== undefined) {
    var _0x1e4add = _0x172368.call(_0x4a530e, _0x5a72b3 || "default");
    if (Vi(_0x1e4add) != "object") return _0x1e4add;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x5a72b3 === "string" ? String : Number)(_0x4a530e);
}
function Ui(_0x349638) {
  var _0x86eca2 = Hi(_0x349638, "string");
  return Vi(_0x86eca2) == "symbol" ? _0x86eca2 : _0x86eca2 + "";
}
function U(_0x1e5c38, _0xf867ff, _0x402be6) {
  return (
    (_0xf867ff = Ui(_0xf867ff)) in _0x1e5c38
      ? Object.defineProperty(_0x1e5c38, _0xf867ff, {
          value: _0x402be6,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x1e5c38[_0xf867ff] = _0x402be6),
    _0x1e5c38
  );
}
const Wi = {
  unitId: "",
  visible: false,
  tableId: "",
  selectionKind: _0x4f4538.Range,
  selection: null,
  anchorRect: null,
  selectionRect: null,
  mergeAction: null,
  showDeleteAction: false,
  hoverActive: false,
  deleteTarget: null,
  deleteHoverActive: false,
  topLeftCell: null,
  verticalAlign: null,
  typeIcon: undefined,
  typeValue: undefined,
};
var Gi = class extends _0xc3c4df {
  constructor(..._0xd0bf54) {
    (super(..._0xd0bf54),
      U(this, "_state", Wi),
      U(this, "state$", new _0xe60413(Wi)));
  }
  getState() {
    return this._state;
  }
  setState(_0x56a623) {
    this._updateState(_0x56a623);
  }
  show(_0x2d539e = {}) {
    this._updateState({ visible: true, ..._0x2d539e });
  }
  hide() {
    this._updateState({ ...Wi, visible: false });
  }
  reset() {
    ((this._state = Wi), this.state$["next"](this._state));
  }
  setDeleteHoverActive(_0x52740d) {
    this._updateState({ deleteHoverActive: _0x52740d });
  }
  setDeleteHover(_0x113785) {
    this.setDeleteHoverActive(_0x113785);
  }
  setHoverActive(_0x1956e7) {
    this._updateState({ hoverActive: _0x1956e7 });
  }
  dispose() {
    (this.state$["complete"](), super.dispose());
  }
  _updateState(_0x2acec2) {
    ((this._state = { ...this._state, ..._0x2acec2 }),
      this.state$["next"](this._state));
  }
};
function Ki({ items: _0x45938a }) {
  return _0x10d7f4("div", {
    className:
      "univer-flex univer-h-7 univer-flex-nowrap univer-items-center univer-gap-1 univer-px-1",
    children: _0x45938a.map((_0x1cac26) =>
      _0x10d7f4(_0x486174, { ..._0x1cac26 }, _0x1cac26.id),
    ),
  });
}
function qi({ items: _0x14f6ab, children: _0x6f0ef8 }) {
  return _0x5b1f13("div", {
    className:
      "univer-flex univer-h-7 univer-flex-nowrap univer-items-center univer-gap-1 univer-px-1",
    children: [
      _0x14f6ab == null
        ? undefined
        : _0x14f6ab.map((_0x147135) =>
            _0x10d7f4(_0x486174, { ..._0x147135 }, _0x147135.id),
          ),
      _0x6f0ef8,
    ],
  });
}
const Ji = [0, 0.5, 0.75, 1, 1.5, 2.25, 3, 4.5, 6],
  Yi = [
    {
      value: "solid",
      label: "docs-table-ui.borderStyleSolid",
      icon: _0x43377d,
    },
    { value: "dot", label: "docs-table-ui.borderStyleDotted", icon: _0x255810 },
    {
      value: "dash",
      label: "docs-table-ui.borderStyleDashed",
      icon: _0x5d205e,
    },
  ],
  Xi = [
    { label: "docs-table-ui.borderAll", preset: _0x587011.All },
    { label: "docs-table-ui.borderInner", preset: _0x587011.Inner },
    { label: "docs-table-ui.borderOuter", preset: _0x587011.Outer },
    { label: "docs-table-ui.borderTop", preset: _0x587011.Top },
    { label: "docs-table-ui.borderBottom", preset: _0x587011.Bottom },
    { label: "docs-table-ui.borderLeft", preset: _0x587011.Left },
    { label: "docs-table-ui.borderRight", preset: _0x587011.Right },
    {
      label: "docs-table-ui.borderInnerHorizontal",
      preset: _0x587011.InnerHorizontal,
    },
    {
      label: "docs-table-ui.borderInnerVertical",
      preset: _0x587011.InnerVertical,
    },
    { label: "docs-table-ui.borderNone", preset: _0x587011.None },
  ];
function Zi(_0x1cece9) {
  let {
    children: _0x27518d,
    disabled: _0x30d2a8,
    itemId: _0x16e1d8,
    open: _0x1fe91b,
    title: _0x5c9f43,
  } = _0x1cece9;
  return _0x10d7f4(_0x26d9e6, {
    title: _0x5c9f43,
    placement: "bottom",
    children: _0x10d7f4("span", {
      children: _0x10d7f4(_0x339f9f, {
        size: "small",
        variant: "ghost",
        type: "button",
        "data-toolbar-item": _0x16e1d8,
        "aria-label": _0x5c9f43,
        disabled: _0x30d2a8,
        className: _0x2771cb({
          "univer-bg-gray-100\x20univer-text-primary-600\x20dark:!univer-bg-gray-700\x20dark:!univer-text-primary-300":
            _0x1fe91b,
        }),
        children: _0x27518d,
      }),
    }),
  });
}
function Qi(_0x3245e0) {
  let { itemId: _0x54503c, onClick: _0x4517bb } = _0x3245e0,
    _0x5a02fc = _0xe42fa4(_0x125639);
  return _0x5b1f13(_0x339f9f, {
    size: "large",
    variant: "ghost",
    type: "button",
    "data-toolbar-item": _0x54503c,
    "aria-label": _0x5a02fc.t("docs-table-ui.toolbar.resetColor"),
    className: "univer-w-full univer-justify-start",
    onClick: (_0xc2071a) => {
      (_0xc2071a.preventDefault(), _0xc2071a.stopPropagation(), _0x4517bb());
    },
    children: [
      _0x10d7f4(_0x454523, {
        className: "univer-size-5",
        extend: { colorChannel1: "var(--univer-primary-600)" },
      }),
      _0x10d7f4("span", {
        children: _0x5a02fc.t("docs-table-ui.toolbar.resetColor"),
      }),
    ],
  });
}
function $i(_0x30c95c) {
  let {
    color: _0x37abcf,
    onChange: _0x2cc7e9,
    onReset: _0xf5107c,
    resetItemId: _0x24a81e,
  } = _0x30c95c;
  return _0x5b1f13("div", {
    className:
      "univer-overflow-hidden univer-rounded-lg univer-bg-gray-0 univer-shadow-lg dark:!univer-bg-gray-900",
    onMouseDown: (_0x14f686) => _0x14f686.stopPropagation(),
    children: [
      _0x10d7f4("div", {
        className: "univer-p-4",
        children: _0x10d7f4(_0x12fbd7, {
          value: _0x37abcf,
          onChange: _0x2cc7e9,
        }),
      }),
      _0x10d7f4(_0x1c0eb5, {}),
      _0x10d7f4(Qi, { itemId: _0x24a81e, onClick: _0xf5107c }),
    ],
  });
}
function ea(_0x72256c) {
  let {
    active: _0x54f1e3,
    children: _0x20c89d,
    disabled: _0x2660e1,
    itemId: _0x4627f0,
    label: _0x3b5a62,
    onClick: _0x4911df,
  } = _0x72256c;
  return _0x10d7f4(_0x26d9e6, {
    title: _0x3b5a62,
    placement: "bottom",
    children: _0x10d7f4(_0x339f9f, {
      size: "small",
      variant: "ghost",
      type: "button",
      "data-toolbar-item": _0x4627f0,
      "aria-label": _0x3b5a62,
      disabled: _0x2660e1,
      className: _0x2771cb({
        "univer-bg-primary-50\x20univer-text-primary-600\x20dark:!univer-bg-gray-800\x20dark:!univer-text-primary-300":
          _0x54f1e3,
      }),
      onClick: (_0x44e9b8) => {
        (_0x44e9b8.preventDefault(), _0x4911df());
      },
      children: _0x20c89d,
    }),
  });
}
function ta(_0x4ca9cb) {
  let {
    commandId: _0x30c661,
    disabled: _0x2007fe,
    icon: _0x230482,
    item: _0x14e72e,
    itemId: _0x233a42,
    label: _0x576598,
    onExecute: _0x32d8d5,
  } = _0x4ca9cb;
  return _0x10d7f4(ea, {
    active: _0x1e9e9e(
      () => _0x14e72e.activated$ ?? _0x4228cf(false),
      false,
      false,
      [_0x14e72e],
    ),
    disabled: _0x2007fe,
    itemId: _0x233a42,
    label: _0x576598,
    onClick: () => _0x32d8d5(_0x30c661),
    children: _0x230482,
  });
}
function na(_0x97135f) {
  let {
      alignItem: _0x256ac3,
      disabled: _0x363072,
      formatItems: _0x20ea5a,
      onExecuteInlineCommand: _0x13e013,
      onHorizontalAlign: _0x4035a9,
      onVerticalAlign: _0x540b88,
      verticalAlign: _0x35b56e,
    } = _0x97135f,
    _0x3507ef = _0xe42fa4(_0x125639),
    [_0x57e0e2, _0x5f5894] = _0x40bcf3(false),
    _0x3a3620 = _0x1e9e9e(
      () => _0x256ac3.value$ ?? _0x4228cf(_0x2926f3.LEFT),
      _0x2926f3.LEFT,
      false,
      [_0x256ac3],
    ),
    _0x5e26d0 = [
      {
        icon: _0x211bdc,
        itemId: "text-align-left",
        label: "docs-table-ui.toolbar.alignLeft",
        value: _0x2926f3.LEFT,
      },
      {
        icon: _0x3e4c30,
        itemId: "text-align-center",
        label: "docs-table-ui.toolbar.alignCenter",
        value: _0x2926f3.CENTER,
      },
      {
        icon: _0x5e3cea,
        itemId: "text-align-right",
        label: "docs-table-ui.toolbar.alignRight",
        value: _0x2926f3.RIGHT,
      },
      {
        icon: _0x405484,
        itemId: "text-align-justify",
        label: "docs-table-ui.toolbar.alignJustify",
        value: _0x2926f3.JUSTIFIED,
      },
    ],
    _0x2cbe9d = [
      {
        icon: _0x32a9fb,
        itemId: "vertical-align-top",
        label: "docs-table-ui.verticalAlignTop",
        value: _0x53eb1d.TOP,
      },
      {
        icon: _0xdde3f0,
        itemId: "vertical-align-middle",
        label: "docs-table-ui.verticalAlignMiddle",
        value: _0x53eb1d.CENTER,
      },
      {
        icon: _0x4d9b35,
        itemId: "vertical-align-bottom",
        label: "docs-table-ui.verticalAlignBottom",
        value: _0x53eb1d.BOTTOM,
      },
    ];
  return _0x10d7f4(_0x5f5def, {
    disabled: _0x363072,
    open: _0x57e0e2,
    onOpenChange: _0x5f5894,
    overlay: _0x5b1f13("section", {
      className: _0x2771cb(
        "univer-box-border univer-grid univer-gap-2 univer-rounded-lg univer-bg-gray-0 univer-p-2 univer-shadow-lg dark:!univer-border-gray-700 dark:!univer-bg-gray-900",
        _0x273c19,
      ),
      onMouseDown: (_0x4121cd) => _0x4121cd.stopPropagation(),
      children: [
        _0x5b1f13("div", {
          className: "univer-flex univer-items-center univer-gap-1",
          children: [
            _0x10d7f4(ta, {
              commandId: ji.id,
              disabled: _0x363072,
              icon: _0x10d7f4(_0x5e6e8d, {}),
              item: _0x20ea5a.bold,
              itemId: "floating-text-bold",
              label: _0x3507ef.t("docs-table-ui.toolbar.bold"),
              onExecute: _0x13e013,
            }),
            _0x10d7f4(ta, {
              commandId: Mi.id,
              disabled: _0x363072,
              icon: _0x10d7f4(_0x33a5ab, {}),
              item: _0x20ea5a.italic,
              itemId: "floating-text-italic",
              label: _0x3507ef.t("docs-table-ui.toolbar.italic"),
              onExecute: _0x13e013,
            }),
            _0x10d7f4(ta, {
              commandId: Ni.id,
              disabled: _0x363072,
              icon: _0x10d7f4(_0x42b1fc, {}),
              item: _0x20ea5a.underline,
              itemId: "floating-text-underline",
              label: _0x3507ef.t("docs-table-ui.toolbar.underline"),
              onExecute: _0x13e013,
            }),
            _0x10d7f4(ta, {
              commandId: Pi.id,
              disabled: _0x363072,
              icon: _0x10d7f4(_0xc5cdc4, {}),
              item: _0x20ea5a.strike,
              itemId: "floating-text-strike",
              label: _0x3507ef.t("docs-table-ui.toolbar.strikethrough"),
              onExecute: _0x13e013,
            }),
          ],
        }),
        _0x10d7f4(_0x1c0eb5, {}),
        _0x10d7f4("div", {
          className: "univer-flex univer-items-center univer-gap-1",
          children: _0x5e26d0.map(
            ({
              icon: _0x4ecb15,
              itemId: _0x4e3575,
              label: _0x1c78e0,
              value: _0x484e33,
            }) =>
              _0x10d7f4(
                ea,
                {
                  active: _0x3a3620 === _0x484e33,
                  disabled: _0x363072,
                  itemId: _0x4e3575,
                  label: _0x3507ef.t(_0x1c78e0),
                  onClick: () => _0x4035a9(_0x484e33),
                  children: _0x10d7f4(_0x4ecb15, {}),
                },
                _0x4e3575,
              ),
          ),
        }),
        _0x10d7f4(_0x1c0eb5, {}),
        _0x10d7f4("div", {
          className: "univer-flex\x20univer-items-center\x20univer-gap-1",
          children: _0x2cbe9d.map(
            ({
              icon: _0x5599b5,
              itemId: _0x1e9507,
              label: _0xddda95,
              value: _0x4d2591,
            }) =>
              _0x10d7f4(
                ea,
                {
                  active: _0x35b56e === _0x4d2591,
                  disabled: _0x363072,
                  itemId: _0x1e9507,
                  label: _0x3507ef.t(_0xddda95),
                  onClick: () => _0x540b88(_0x4d2591),
                  children: _0x10d7f4(_0x5599b5, {}),
                },
                _0x1e9507,
              ),
          ),
        }),
      ],
    }),
    children: _0x10d7f4("span", {
      children: _0x5b1f13(Zi, {
        title: _0x3507ef.t("docs-table-ui.textFormat"),
        itemId: "floating-text-format-panel",
        open: _0x57e0e2,
        disabled: _0x363072,
        children: [
          _0x10d7f4(_0x5a670c, {}),
          _0x10d7f4(_0x5aa664, { className: "univer-text-xs" }),
        ],
      }),
    }),
  });
}
function ra(_0x385238) {
  let {
      color: _0x3dcbd1,
      disabled: _0x54e68f,
      onChange: _0x56ecc2,
      onReset: _0x3f0027,
    } = _0x385238,
    _0x128d1c = _0xe42fa4(_0x125639),
    [_0x5ab410, _0x1a83ce] = _0x40bcf3(false);
  return _0x10d7f4(_0x5f5def, {
    disabled: _0x54e68f,
    open: _0x5ab410,
    onOpenChange: _0x1a83ce,
    overlay: _0x10d7f4($i, {
      color: _0x3dcbd1,
      resetItemId: "cell-background-reset",
      onChange: _0x56ecc2,
      onReset: () => {
        (_0x3f0027(), _0x1a83ce(false));
      },
    }),
    children: _0x10d7f4("span", {
      children: _0x5b1f13(Zi, {
        title: _0x128d1c.t("docs-table-ui.tableBackgroundColor"),
        itemId: "cell-background",
        open: _0x5ab410,
        disabled: _0x54e68f,
        children: [
          _0x10d7f4(_0x42c420, {
            className: "univer-fill-primary-600",
            extend: { colorChannel1: _0x3dcbd1 },
          }),
          _0x10d7f4(_0x5aa664, { className: "univer-text-xs" }),
        ],
      }),
    }),
  });
}
function ia(_0x5b0d23) {
  var _0x46776a;
  let {
      color: _0x4b9856,
      disabled: _0x4c3691,
      onChangeColor: _0x4d7076,
      onChangeStyle: _0x29bbfa,
      onChangeWidth: _0x28bbf4,
      onResetColor: _0x43e425,
      onSelectPreset: _0x52e50d,
      style: _0x209a27,
      width: _0x143dfe,
    } = _0x5b0d23,
    _0x20bc70 = _0xe42fa4(_0x125639),
    [_0x928a86, _0x52dd5c] = _0x40bcf3(false),
    _0x4321f1 = _0x1e9e9e(_0x20bc70.direction$, _0x20bc70.getDirection()),
    _0x583922 =
      ((_0x46776a = Yi.find((_0x181a03) => _0x181a03.value === _0x209a27)) ==
      null
        ? undefined
        : _0x46776a.icon) ?? _0x43377d;
  return _0x10d7f4(_0x5f5def, {
    disabled: _0x4c3691,
    open: _0x928a86,
    onOpenChange: _0x52dd5c,
    overlay: _0x5b1f13("section", {
      className: _0x2771cb(
        "univer-box-border univer-grid univer-gap-2 univer-rounded-lg univer-bg-gray-0 univer-p-2 univer-shadow-lg dark:!univer-border-gray-700 dark:!univer-bg-gray-900",
        _0x273c19,
      ),
      dir: _0x4321f1,
      onMouseDown: (_0x28d4e9) => _0x28d4e9.stopPropagation(),
      children: [
        _0x10d7f4("div", {
          className: "univer-grid univer-grid-cols-5 univer-gap-1",
          children: Xi.map(({ label: _0x354a7d, preset: _0x8df468 }) => {
            let _0x3721bb = pi[_0x8df468],
              _0x1fd17c = _0x20bc70.t(_0x354a7d);
            return _0x10d7f4(
              _0x26d9e6,
              {
                title: _0x1fd17c,
                placement: "bottom",
                children: _0x10d7f4(_0x339f9f, {
                  size: "icon",
                  variant: "ghost",
                  type: "button",
                  "aria-label": _0x1fd17c,
                  onClick: () => {
                    (_0x52e50d(_0x8df468), _0x52dd5c(false));
                  },
                  children: _0x10d7f4(_0x3721bb, {
                    className: "univer-size-4 univer-text-current",
                    extend: fi,
                  }),
                }),
              },
              _0x8df468,
            );
          }),
        }),
        _0x10d7f4(_0x1c0eb5, {}),
        _0x5b1f13("div", {
          className: "univer-flex univer-items-center univer-gap-2",
          children: [
            _0x10d7f4(_0x5f5def, {
              overlay: _0x10d7f4($i, {
                color: _0x4b9856,
                resetItemId: "border-color-reset",
                onChange: (_0x3dee84) => {
                  _0x4d7076(_0x3dee84);
                },
                onReset: _0x43e425,
              }),
              children: _0x5b1f13(_0x339f9f, {
                size: "small",
                variant: "ghost",
                type: "button",
                "aria-label": _0x20bc70.t("docs-table-ui.borderColor"),
                children: [
                  _0x10d7f4(_0x42c420, {
                    className: "univer-fill-primary-600",
                    extend: { colorChannel1: _0x4b9856 },
                  }),
                  _0x10d7f4(_0x5aa664, { className: "univer-text-xs" }),
                ],
              }),
            }),
            _0x10d7f4(_0x5f5def, {
              overlay: _0x10d7f4("div", {
                className:
                  "univer-grid\x20univer-gap-1\x20univer-rounded-lg\x20univer-bg-gray-0\x20univer-p-1.5\x20univer-shadow-lg\x20dark:!univer-bg-gray-900",
                children: Ji.map((_0x1bdb38) =>
                  _0x5b1f13(
                    _0x339f9f,
                    {
                      size: "middle",
                      variant: "ghost",
                      type: "button",
                      className: _0x2771cb("univer-min-w-16", {
                        "univer-bg-primary-50\x20univer-text-primary-600\x20dark:!univer-bg-gray-800\x20dark:!univer-text-primary-300":
                          _0x1bdb38 === _0x143dfe,
                      }),
                      onClick: () => {
                        _0x28bbf4(_0x1bdb38);
                      },
                      children: [_0x1bdb38, "pt"],
                    },
                    _0x1bdb38,
                  ),
                ),
              }),
              children: _0x5b1f13(_0x339f9f, {
                size: "small",
                variant: "ghost",
                type: "button",
                "aria-label": _0x20bc70.t("docs-table-ui.borderWidth"),
                children: [
                  _0x10d7f4(_0x33edb7, { className: "univer-text-base" }),
                  _0x5b1f13("span", {
                    className: "univer-text-xs",
                    children: [_0x143dfe, "pt"],
                  }),
                  _0x10d7f4(_0x5aa664, { className: "univer-text-xs" }),
                ],
              }),
            }),
            _0x10d7f4(_0x5f5def, {
              overlay: _0x10d7f4("div", {
                className:
                  "univer-grid\x20univer-gap-1\x20univer-rounded-lg\x20univer-bg-gray-0\x20univer-p-1.5\x20univer-shadow-lg\x20dark:!univer-bg-gray-900",
                children: Yi.map(
                  ({ icon: _0x3c50d8, label: _0x500fc2, value: _0x3768bb }) =>
                    _0x10d7f4(
                      _0x26d9e6,
                      {
                        title: _0x20bc70.t(_0x500fc2),
                        placement: "right",
                        children: _0x10d7f4(_0x339f9f, {
                          size: "middle",
                          variant: "ghost",
                          type: "button",
                          className: _0x2771cb("univer-min-w-12", {
                            "univer-bg-primary-50\x20univer-text-primary-600\x20dark:!univer-bg-gray-800\x20dark:!univer-text-primary-300":
                              _0x3768bb === _0x209a27,
                          }),
                          onClick: () => {
                            _0x29bbfa(_0x3768bb);
                          },
                          children: _0x10d7f4(_0x3c50d8, {
                            className: "univer-text-base",
                          }),
                        }),
                      },
                      _0x3768bb,
                    ),
                ),
              }),
              children: _0x5b1f13(_0x339f9f, {
                size: "small",
                variant: "ghost",
                type: "button",
                "aria-label": _0x20bc70.t("docs-table-ui.borderStyle"),
                children: [
                  _0x10d7f4(_0x583922, { className: "univer-text-base" }),
                  _0x10d7f4(_0x5aa664, { className: "univer-text-xs" }),
                ],
              }),
            }),
          ],
        }),
      ],
    }),
    children: _0x10d7f4("span", {
      children: _0x5b1f13(Zi, {
        title: _0x20bc70.t("docs-table-ui.borders"),
        itemId: "cell-border",
        open: _0x928a86,
        disabled: _0x4c3691,
        children: [
          _0x10d7f4(_0x4d1d81, {}),
          _0x10d7f4(_0x5aa664, { className: "univer-text-xs" }),
        ],
      }),
    }),
  });
}
function aa(_0x46f07a) {
  let {
      color: _0x126f4a,
      commandId: _0x13124b,
      disabled: _0x17ffc2,
      icon: _0x21bb70,
      itemId: _0x6a391b,
      onChange: _0x43381f,
      resetItemId: _0xa26fa2,
      title: _0x39cfc8,
    } = _0x46f07a,
    [_0x16abff, _0x1b5026] = _0x40bcf3(false);
  return _0x10d7f4(_0x5f5def, {
    disabled: _0x17ffc2,
    open: _0x16abff,
    onOpenChange: _0x1b5026,
    overlay: _0x10d7f4($i, {
      color: _0x126f4a,
      resetItemId: _0xa26fa2,
      onChange: (_0x58fbd2) => {
        _0x43381f(_0x13124b, _0x58fbd2);
      },
      onReset: () => {
        (_0x43381f(_0x13124b, null), _0x1b5026(false));
      },
    }),
    children: _0x10d7f4("span", {
      children: _0x5b1f13(Zi, {
        title: _0x39cfc8,
        itemId: _0x6a391b,
        open: _0x16abff,
        disabled: _0x17ffc2,
        children: [
          _0x10d7f4(_0x21bb70 === "font" ? _0xc9e584 : _0x42c420, {
            className: "univer-fill-primary-600",
            extend: { colorChannel1: _0x126f4a },
          }),
          _0x10d7f4(_0x5aa664, { className: "univer-text-xs" }),
        ],
      }),
    }),
  });
}
const oa = "docs-table-ui.floating-toolbar";
function sa(_0x4aa2c7, _0x11c6b8) {
  var _0x2347c1, _0x5cca36;
  if (!_0x4aa2c7 || !(_0x11c6b8 != null && _0x11c6b8.tableId)) return null;
  let _0x817e15 =
    (_0x2347c1 = _0x556668(_0x4aa2c7, _0x11c6b8.tableId)) == null
      ? undefined
      : _0x2347c1.tableSource;
  return (
    (_0x817e15 == null ||
    (_0x5cca36 = _0x817e15.tableRows[_0x11c6b8.startRow]) == null
      ? undefined
      : _0x5cca36.tableCells[_0x11c6b8.startColumn]) ?? null
  );
}
function ca(_0x1bc393) {
  return _0x1bc393
    ? ([
        _0x1bc393.borderTop,
        _0x1bc393.borderRight,
        _0x1bc393.borderBottom,
        _0x1bc393.borderLeft,
      ].find((_0x4d71e4) => {
        var _0x2cdc50, _0x32a50d;
        return (
          !!_0x4d71e4 &&
          ((((_0x2cdc50 = _0x4d71e4.width) == null ? undefined : _0x2cdc50.v) ??
            0) > 0 ||
            !!((_0x32a50d = _0x4d71e4.color) != null && _0x32a50d.rgb) ||
            _0x4d71e4.dashStyle != null)
        );
      }) ?? null)
    : null;
}
function la(_0x497410) {
  return _0x497410 === _0x4bc179.DOT
    ? "dot"
    : _0x497410 === _0x4bc179.DASH
      ? "dash"
      : "solid";
}
function W(_0x56495b, _0x1024f9, _0x284346) {
  return { ..._0x1024f9(_0x56495b), ..._0x284346 };
}
function G(_0x359b95, _0x4405aa, _0x40a3b2) {
  return { ..._0x359b95, commandId: _0x4405aa, disabled$: _0x40a3b2 };
}
const ua = {
  [_0xe41862.NORMAL_TEXT]: "docs-table-ui.toolbar.textStyle.normal",
  [_0xe41862.HEADING_1]: "docs-table-ui.toolbar.textStyle.heading1",
  [_0xe41862.HEADING_2]: "docs-table-ui.toolbar.textStyle.heading2",
  [_0xe41862.HEADING_3]: "docs-table-ui.toolbar.textStyle.heading3",
  [_0xe41862.HEADING_4]: "docs-table-ui.toolbar.textStyle.heading4",
  [_0xe41862.HEADING_5]: "docs-table-ui.toolbar.textStyle.heading5",
  [_0x8d611.ORDER_LIST]: "docs-table-ui.toolbar.textStyle.orderedList",
  [_0x8d611.BULLET_LIST]: "docs-table-ui.toolbar.textStyle.unorderedList",
  [_0x8d611.CHECK_LIST]: "docs-table-ui.toolbar.textStyle.checklist",
};
function da(_0xdab347) {
  let { label: _0x13508b, tooltip: _0x329499, ..._0x38368d } = _0xdab347,
    _0x51f0a7 = ua[String(_0xdab347.value)],
    _0x3edd25 =
      _0xdab347.id === _0x56e8c1.id ||
      _0xdab347.id === _0x37de97.id ||
      _0xdab347.id === _0x5a9297.id
        ? Ai.id
        : _0xdab347.id;
  return {
    ..._0x38368d,
    id: _0x3edd25,
    label: _0x51f0a7,
    ...(_0x329499 ? { tooltip: _0x51f0a7 } : {}),
  };
}
function fa(_0x197669) {
  return (
    _0x197669 &&
    (Array.isArray(_0x197669)
      ? _0x197669.map(da)
      : _0x197669.pipe(_0x5e4e8a((_0x158622) => _0x158622.map(da))))
  );
}
function pa() {
  var _0x550c9a,
    _0x40e5eb,
    _0xbd655a,
    _0x229298,
    _0x2d2b24,
    _0xd0716b,
    _0x2a5294;
  let _0x312865 = _0xe42fa4(_0x3eaaf9),
    _0x26f911 = _0xe42fa4(_0x125639),
    _0x511d94 = _0xe42fa4(_0x49243a),
    _0x487561 = _0xe42fa4(_0x373426),
    _0xbc6eb7 = _0xe42fa4(Gi),
    _0x3d329b = _0x1e9e9e(() => _0xbc6eb7.state$, _0xbc6eb7.getState(), false, [
      _0xbc6eb7,
    ]),
    _0xf873b9 =
      !!_0x3d329b.selection &&
      _0x3d329b.selection["startRow"] >= 0 &&
      _0x3d329b.selection["endRow"] >= 0 &&
      _0x3d329b.selection["startColumn"] >= 0 &&
      _0x3d329b.selection["endColumn"] >= 0,
    _0x3158f3 = _0x511d94,
    _0x4dbc6c = _0x25f13f(
      () =>
        _0xbc6eb7.state$["pipe"](
          _0x5e4e8a((_0x47643a) => !_0x47643a.selection),
        ),
      [_0xbc6eb7],
    ),
    _0x546916 = _0x25f13f(
      () =>
        _0xbc6eb7.state$["pipe"](
          _0x5e4e8a(
            (_0x6f6d00) => _0x6f6d00.typeValue ?? _0xe41862.NORMAL_TEXT,
          ),
        ),
      [_0xbc6eb7],
    ),
    _0x298627 = _0x25f13f(() => {
      let _0xdea38c = W(_0x3158f3, _0x271da4);
      return {
        ..._0xdea38c,
        commandId: Ai.id,
        disabled$: _0x4dbc6c,
        icon: _0x3d329b.typeIcon ?? "TextTypeIcon",
        selections: fa(_0xdea38c.selections),
        tooltip: "docs-table-ui.toolbar.textStyle.tooltip",
        value$: _0x546916,
      };
    }, [_0x3158f3, _0x4dbc6c, _0x546916, _0x3d329b.typeIcon]),
    _0x452dba = _0x25f13f(
      () => [
        G(W(_0x3158f3, _0x4f97e3), Fi.id, _0x4dbc6c),
        G(W(_0x3158f3, _0x3acac3), Ii.id, _0x4dbc6c),
      ],
      [_0x3158f3, _0x4dbc6c],
    ),
    _0x928ffa = _0x25f13f(
      () => ({
        align: G(W(_0x3158f3, _0x357a43), Li.id, _0x4dbc6c),
        bold: G(W(_0x3158f3, _0x17b4fd), ji.id, _0x4dbc6c),
        italic: G(W(_0x3158f3, _0x1acd34), Mi.id, _0x4dbc6c),
        strike: G(W(_0x3158f3, _0x5dda8b), Pi.id, _0x4dbc6c),
        underline: G(W(_0x3158f3, _0x42ea82), Ni.id, _0x4dbc6c),
      }),
      [_0x3158f3, _0x4dbc6c],
    ),
    _0x3eb507 = _0x25f13f(
      () => [
        G(W(_0x3158f3, _0xf85015), Ri.id, _0x4dbc6c),
        G(W(_0x3158f3, _0x2d3614), zi.id, _0x4dbc6c),
      ],
      [_0x3158f3, _0x4dbc6c],
    ),
    _0x4689a2 = _0x1e9e9e(
      () => {
        var _0x257569;
        return (
          ((_0x257569 = _0x3eb507[0]) == null ? undefined : _0x257569.value$) ??
          _0x4228cf(_0x5eb61b.cl["rgb"])
        );
      },
      _0x5eb61b.cl["rgb"],
      false,
      [_0x3eb507],
    ),
    _0x2c97a6 = _0x1e9e9e(
      () => {
        var _0x1b0490;
        return (
          ((_0x1b0490 = _0x3eb507[1]) == null ? undefined : _0x1b0490.value$) ??
          _0x4228cf(_0x5eb61b.bg["rgb"])
        );
      },
      _0x5eb61b.bg["rgb"],
      false,
      [_0x3eb507],
    ),
    _0x4a31a5 = _0x25f13f(() => {
      var _0x419967;
      return sa(
        (_0x419967 = _0x487561.getCurrentUnitOfType(_0x3e7115.UNIVER_DOC)) ==
          null
          ? undefined
          : _0x419967.getSnapshot(),
        _0x3d329b.selection,
      );
    }, [_0x3d329b.selection, _0x487561]),
    _0x20fa52 =
      (_0x4a31a5 == null || (_0x550c9a = _0x4a31a5.backgroundColor) == null
        ? undefined
        : _0x550c9a.rgb) ?? _0x5eb61b.bg["rgb"],
    _0x4c02c2 = ca(_0x4a31a5),
    _0x459a14 =
      (_0x4c02c2 == null || (_0x40e5eb = _0x4c02c2.color) == null
        ? undefined
        : _0x40e5eb.rgb) ?? "#1f1f1f",
    _0xcc262a =
      (_0x4c02c2 == null || (_0xbd655a = _0x4c02c2.width) == null
        ? undefined
        : _0xbd655a.v) ?? 1,
    _0x46234f = la(_0x4c02c2 == null ? undefined : _0x4c02c2.dashStyle),
    _0x26e622 = [
      (_0x229298 = _0x3d329b.selection) == null
        ? undefined
        : _0x229298.startRow,
      (_0x2d2b24 = _0x3d329b.selection) == null ? undefined : _0x2d2b24.endRow,
      (_0xd0716b = _0x3d329b.selection) == null
        ? undefined
        : _0xd0716b.startColumn,
      (_0x2a5294 = _0x3d329b.selection) == null
        ? undefined
        : _0x2a5294.endColumn,
      _0x20fa52,
      _0x459a14,
      _0xcc262a,
      _0x46234f,
    ].join("|"),
    _0x1cf992 = {
      backgroundColor: _0x20fa52,
      borderColor: _0x459a14,
      borderStyle: _0x46234f,
      borderWidth: _0xcc262a,
      key: _0x26e622,
    },
    [_0x18e606, _0x4d4521] = _0x40bcf3(_0x1cf992),
    _0x1f284e = _0x18e606.key === _0x26e622 ? _0x18e606 : _0x1cf992,
    _0x5877e8 = (_0x4f1411) => {
      _0x4d4521({ ..._0x1f284e, ..._0x4f1411, key: _0x26e622 });
    };
  if (!_0x3d329b.visible || !_0xf873b9) return null;
  let _0x3689fc =
      _0x3d329b.mergeAction === "unmerge"
        ? _0x26f911.t("docs-table-ui.unmergeCells")
        : _0x3d329b.mergeAction === "merge"
          ? _0x26f911.t("docs-table-ui.mergeCells")
          : null,
    _0x37ab51 =
      _0x3d329b.deleteTarget === "row"
        ? _0x26f911.t("docs-table-ui.deleteRow")
        : _0x3d329b.deleteTarget === "column"
          ? _0x26f911.t("docs-table-ui.deleteColumn")
          : null,
    _0x50e698 = () => {
      !_0x3d329b.selection ||
        !_0x3d329b.mergeAction ||
        _0x312865.executeCommand(
          _0x3d329b.mergeAction === "unmerge" ? _0x22c3e0.id : _0x16dfd9.id,
          _0x3d329b.selection,
        );
    },
    _0x1ec46f = () => {
      !_0x3d329b.selection ||
        !_0x3d329b.deleteTarget ||
        _0x312865.executeCommand(
          _0x3d329b.deleteTarget === "row" ? _0x25a727.id : _0x428cf0.id,
          _0x3d329b.selection,
        );
    },
    _0x3b964e = (_0x1b1dce) => {
      _0x3d329b.selection &&
        _0x312865.executeCommand(_0x33bf3f.id, { value: _0x1b1dce });
    },
    _0x22d908 = (_0x4747d6) => {
      _0x3d329b.selection && _0x312865.executeCommand(_0x4747d6);
    },
    _0x5870b9 = (_0x2c2f20) => {
      _0x3d329b.selection &&
        _0x312865.executeCommand(Li.id, { value: _0x2c2f20 });
    },
    _0x33edd5 = (_0x5a569d) => (
      _0x5877e8({ backgroundColor: _0x5a569d }),
      _0x312865.executeCommand(_0x24b483.id, { value: _0x5a569d })
    ),
    _0x482d81 = () => (
      _0x5877e8({ backgroundColor: _0x20fa52 }),
      _0x312865.executeCommand(_0x24b483.id, { value: null })
    ),
    _0x7c4e3e = (_0x2874db, _0x36545e) => {
      if (_0x3d329b.selection)
        return _0x312865.executeCommand(_0x2874db, { value: _0x36545e });
    };
  return _0x5b1f13("div", {
    "data-u-comp": oa,
    role: "toolbar",
    onMouseEnter: () => _0xbc6eb7.setHoverActive(true),
    onMouseLeave: () => _0xbc6eb7.setHoverActive(false),
    onMouseDown: (_0x2a3321) => {
      (_0x2a3321.stopPropagation(), _0x2a3321.preventDefault());
    },
    className: _0x2771cb(
      "univer-box-border univer-flex univer-items-center univer-rounded univer-bg-gray-0 univer-px-1 univer-py-1 univer-shadow-sm dark:!univer-border-gray-700 dark:!univer-bg-gray-900",
      _0x273c19,
    ),
    children: [
      _0x10d7f4(qi, {
        items: [_0x298627],
        children: _0x3689fc
          ? _0x10d7f4(_0x26d9e6, {
              title: _0x3689fc,
              placement: "bottom",
              children: _0x10d7f4("span", {
                children: _0x10d7f4(_0x553e0f, {
                  "data-toolbar-item": "merge-cells",
                  "aria-label": _0x3689fc,
                  onClick: _0x50e698,
                  children:
                    _0x3d329b.mergeAction === "unmerge"
                      ? _0x10d7f4(_0x295574, {})
                      : _0x10d7f4(_0x3a574d, {}),
                }),
              }),
            })
          : null,
      }),
      _0x10d7f4(_0x1c0eb5, { orientation: "vertical" }),
      _0x5b1f13(qi, {
        children: [
          _0x10d7f4(ra, {
            color: _0x1f284e.backgroundColor,
            disabled: !_0x3d329b.selection,
            onChange: _0x33edd5,
            onReset: _0x482d81,
          }),
          _0x10d7f4(ia, {
            color: _0x1f284e.borderColor,
            width: _0x1f284e.borderWidth,
            style: _0x1f284e.borderStyle,
            disabled: !_0x3d329b.selection,
            onSelectPreset: (_0x5d958e) =>
              _0x312865.executeCommand(_0xd71e8.id, { preset: _0x5d958e }),
            onChangeColor: (_0x3db70b) => (
              _0x5877e8({ borderColor: _0x3db70b }),
              _0x312865.executeCommand(_0x565736.id, { value: _0x3db70b })
            ),
            onResetColor: () => (
              _0x5877e8({ borderColor: _0x459a14 }),
              _0x312865.executeCommand(_0x565736.id, { value: null })
            ),
            onChangeWidth: (_0x362202) => (
              _0x5877e8({ borderWidth: _0x362202 }),
              _0x312865.executeCommand(_0x26e174.id, { value: _0x362202 })
            ),
            onChangeStyle: (_0xf995d4) => (
              _0x5877e8({ borderStyle: _0xf995d4 }),
              _0x312865.executeCommand(_0xf9898c.id, { value: _0xf995d4 })
            ),
          }),
        ],
      }),
      _0x10d7f4(_0x1c0eb5, { orientation: "vertical" }),
      _0x10d7f4(Ki, { items: _0x452dba }),
      _0x10d7f4(_0x1c0eb5, { orientation: "vertical" }),
      _0x10d7f4(qi, {
        children: _0x10d7f4(na, {
          alignItem: _0x928ffa.align,
          disabled: !_0x3d329b.selection,
          formatItems: {
            bold: _0x928ffa.bold,
            italic: _0x928ffa.italic,
            strike: _0x928ffa.strike,
            underline: _0x928ffa.underline,
          },
          verticalAlign: _0x3d329b.verticalAlign,
          onExecuteInlineCommand: _0x22d908,
          onHorizontalAlign: _0x5870b9,
          onVerticalAlign: _0x3b964e,
        }),
      }),
      _0x10d7f4(_0x1c0eb5, { orientation: "vertical" }),
      _0x5b1f13(qi, {
        children: [
          _0x10d7f4(aa, {
            color: _0x4689a2,
            commandId: Ri.id,
            disabled: !_0x3d329b.selection,
            icon: "font",
            itemId: "text-color",
            resetItemId: "text-color-reset",
            title: _0x26f911.t("docs-table-ui.toolbar.textColor.main"),
            onChange: _0x7c4e3e,
          }),
          _0x10d7f4(aa, {
            color: _0x2c97a6,
            commandId: zi.id,
            disabled: !_0x3d329b.selection,
            icon: "bucket",
            itemId: "text-background",
            resetItemId: "text-background-reset",
            title: _0x26f911.t("docs-table-ui.toolbar.fillColor.main"),
            onChange: _0x7c4e3e,
          }),
        ],
      }),
      _0x3d329b.showDeleteAction && _0x37ab51
        ? _0x5b1f13(_0x14c436, {
            children: [
              _0x10d7f4(_0x1c0eb5, { orientation: "vertical" }),
              _0x10d7f4("div", {
                className:
                  "univer-flex univer-h-7 univer-items-center univer-px-1",
                onMouseEnter: () => _0xbc6eb7.setDeleteHoverActive(true),
                onMouseLeave: () => _0xbc6eb7.setDeleteHoverActive(false),
                children: _0x10d7f4(_0x26d9e6, {
                  title: _0x37ab51,
                  placement: "bottom",
                  children: _0x10d7f4("span", {
                    children: _0x10d7f4(_0x553e0f, {
                      "data-toolbar-item": "delete-selection",
                      "aria-label": _0x37ab51,
                      className: _0x2771cb(
                        "hover:!univer-bg-red-50 hover:!univer-text-red-500",
                        "dark:hover:!univer-bg-red-950/40 dark:hover:!univer-text-red-400",
                      ),
                      onClick: _0x1ec46f,
                      children:
                        _0x3d329b.deleteTarget === "row"
                          ? _0x10d7f4(_0x5d9e28, {
                              extend: { colorChannel1: "currentColor" },
                            })
                          : _0x10d7f4(_0x191cb9, {
                              extend: { colorChannel1: "currentColor" },
                            }),
                    }),
                  }),
                }),
              }),
            ],
          })
        : null,
    ],
  });
}
const ma = "docs-table-ui.options-panel";
function ha() {
  let _0x56e4b9 = _0xe42fa4(_0x125639);
  return _0x10d7f4("section", {
    "data-u-comp": ma,
    children: _0x5b1f13("label", {
      children: [
        _0x10d7f4("span", {
          children: _0x56e4b9.t("docs-table-ui.tableOptions"),
        }),
        _0x10d7f4(_0x38e6d5, {
          min: 0,
          "aria-label": _0x56e4b9.t("docs-table-ui.pinHeaderRows"),
        }),
      ],
    }),
  });
}
const ga = "docs-table-ui.toolbar";
function _a() {
  let _0x5eb460 = _0xe42fa4(_0x125639);
  return _0x5b1f13("div", {
    "data-u-comp": ga,
    children: [
      _0x10d7f4(_0x339f9f, {
        size: "icon",
        type: "button",
        "aria-label": _0x5eb460.t("docs-table-ui.insertRowBelow"),
        children: "+",
      }),
      _0x10d7f4(_0x339f9f, {
        size: "icon",
        type: "button",
        "aria-label": _0x5eb460.t("docs-table-ui.insertColumnRight"),
        children: "+",
      }),
      _0x10d7f4(_0x339f9f, {
        size: "icon",
        type: "button",
        "aria-label": _0x5eb460.t("docs-table-ui.sortAscending"),
        children: "A",
      }),
    ],
  });
}
function K(_0x51ecf7, _0x4b9230) {
  return function (_0x5b041c, _0x4f4b61) {
    _0x4b9230(_0x5b041c, _0x4f4b61, _0x51ecf7);
  };
}
function va(_0x3e3b58, _0x2e1434, _0x37db1c, _0x5390ec) {
  var _0xe9e409 = arguments.length,
    _0x3eeefe =
      _0xe9e409 < 3
        ? _0x2e1434
        : _0x5390ec === null
          ? (_0x5390ec = Object.getOwnPropertyDescriptor(_0x2e1434, _0x37db1c))
          : _0x5390ec,
    _0x1829fb;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x3eeefe = Reflect.decorate(_0x3e3b58, _0x2e1434, _0x37db1c, _0x5390ec);
  else {
    for (var _0x8a63be = _0x3e3b58.length - 1; _0x8a63be >= 0; _0x8a63be--)
      (_0x1829fb = _0x3e3b58[_0x8a63be]) &&
        (_0x3eeefe =
          (_0xe9e409 < 3
            ? _0x1829fb(_0x3eeefe)
            : _0xe9e409 > 3
              ? _0x1829fb(_0x2e1434, _0x37db1c, _0x3eeefe)
              : _0x1829fb(_0x2e1434, _0x37db1c)) || _0x3eeefe);
  }
  return (
    _0xe9e409 > 3 &&
      _0x3eeefe &&
      Object.defineProperty(_0x2e1434, _0x37db1c, _0x3eeefe),
    _0x3eeefe
  );
}
let ya = class extends _0xc3c4df {
  constructor(_0x331df9, _0x4a4679) {
    (super(),
      (this._componentManager = _0x331df9),
      (this._iconManager = _0x4a4679),
      this._registerComponents(),
      this._registerIcons());
  }
  _registerComponents() {
    ([
      [di, hi],
      [gi, vi],
      [oa, pa],
      [ma, ha],
      [ga, _a],
    ].forEach(([_0x1be369, _0x43abf8]) => {
      this.disposeWithMe(
        this._componentManager["register"](_0x1be369, _0x43abf8),
      );
    }),
      this.disposeWithMe(this._componentManager["register"](er, sr)));
  }
  _registerIcons() {
    this.disposeWithMe(
      this._iconManager["register"]({
        TableIcon: _0x59c20c,
        TableBorderWidthIcon: _0x33edb7,
        TableBorderStyleIcon: _0x2d15b0,
        TableBorderStyleSolidIcon: _0x43377d,
        TableBorderStyleDottedIcon: _0x255810,
        TableBorderStyleDashedIcon: _0x5d205e,
        CalendarIcon: _0x34e2fa,
        NumberIcon: _0xe9a45e,
      }),
    );
  }
};
ya = va([K(0, _0x76478b(_0x9ed24c)), K(1, _0x76478b(_0x4f9de7))], ya);
var ba = class {
    constructor() {
      U(this, "_handlers", []);
    }
    register(_0x2a147f) {
      return (
        this._handlers["push"](_0x2a147f),
        this._sortHandlers(),
        _0x39b98c(() => {
          let _0x1c4bd3 = this._handlers["indexOf"](_0x2a147f);
          _0x1c4bd3 >= 0 && this._handlers["splice"](_0x1c4bd3, 1);
        })
      );
    }
    handleWheel(_0x44750e) {
      return this._handlers["some"]((_0x25b5f5) =>
        _0x25b5f5.handleWheel(_0x44750e),
      );
    }
    _sortHandlers() {
      this._handlers["sort"](
        (_0x3dfc11, _0x5a1b87) =>
          (_0x5a1b87.order ?? 0) - (_0x3dfc11.order ?? 0),
      );
    }
  },
  xa = class extends _0xc3c4df {
    constructor(..._0x2e0575) {
      (super(..._0x2e0575), U(this, "_states", new Map()));
    }
    getState(_0x2475cf, _0x22c6fb) {
      return this._states["get"](this._key(_0x2475cf, _0x22c6fb));
    }
    setViewport(_0x1373ff, _0x31e75c, _0xac67c2) {
      let _0x6732b7 = this._key(_0x1373ff, _0x31e75c),
        _0x53bac0 = this._states["get"](_0x6732b7),
        _0x4ea099 = {
          contentWidth: Math.max(0, _0xac67c2.contentWidth),
          isDraggingScrollbar:
            (_0x53bac0 == null ? undefined : _0x53bac0.isDraggingScrollbar) ??
            false,
          leadingInsetLeft: Math.max(0, _0xac67c2.leadingInsetLeft ?? 0),
          overflowWidthThreshold: Math.max(
            0,
            _0xac67c2.overflowWidthThreshold ?? _0xac67c2.viewportWidth,
          ),
          scrollLeft:
            (_0x53bac0 == null ? undefined : _0x53bac0.scrollLeft) ?? 0,
          trailingInsetRight: Math.max(0, _0xac67c2.trailingInsetRight ?? 0),
          viewportLeft: _0xac67c2.viewportLeft ?? 0,
          viewportWidth: Math.max(0, _0xac67c2.viewportWidth),
        };
      return (
        (_0x4ea099.scrollLeft = this._clamp(_0x4ea099.scrollLeft, _0x4ea099)),
        this._states["set"](_0x6732b7, _0x4ea099),
        _0x4ea099
      );
    }
    setScrollLeft(_0x473102, _0x1d6f59, _0x50a7ae) {
      let _0x35fa1c = this.getState(_0x473102, _0x1d6f59);
      return _0x35fa1c
        ? ((_0x35fa1c.scrollLeft = this._clamp(_0x50a7ae, _0x35fa1c)),
          _0x35fa1c.scrollLeft)
        : 0;
    }
    toContentX(_0x325396, _0x57f9ad, _0xfdebf0) {
      let _0x11ca45 = this.getState(_0x325396, _0x57f9ad);
      return (
        _0xfdebf0 -
        ((_0x11ca45 == null ? undefined : _0x11ca45.leadingInsetLeft) ?? 0) +
        ((_0x11ca45 == null ? undefined : _0x11ca45.scrollLeft) ?? 0)
      );
    }
    toViewportX(_0x33c729, _0x446709, _0x4dc24a) {
      let _0x1b4a7d = this.getState(_0x33c729, _0x446709);
      return (
        _0x4dc24a +
        ((_0x1b4a7d == null ? undefined : _0x1b4a7d.leadingInsetLeft) ?? 0) -
        ((_0x1b4a7d == null ? undefined : _0x1b4a7d.scrollLeft) ?? 0)
      );
    }
    ensureContentRangeVisible(_0xcb7a92, _0x20fd86, _0x450c34, _0x2111f6) {
      let _0x524556 = this.getState(_0xcb7a92, _0x20fd86);
      if (!_0x524556) return 0;
      let _0x2d63da = _0x524556.scrollLeft - _0x524556.leadingInsetLeft,
        _0x1f5313 = _0x2d63da + _0x524556.viewportWidth;
      return _0x450c34 < _0x2d63da
        ? this.setScrollLeft(
            _0xcb7a92,
            _0x20fd86,
            _0x450c34 + _0x524556.leadingInsetLeft,
          )
        : _0x2111f6 > _0x1f5313
          ? this.setScrollLeft(
              _0xcb7a92,
              _0x20fd86,
              _0x2111f6 + _0x524556.leadingInsetLeft - _0x524556.viewportWidth,
            )
          : _0x524556.scrollLeft;
    }
    ensureColumnRangeVisible(_0x530faa, _0x5b7f6f, _0x76f6b1, _0x7d32df) {
      return this.ensureContentRangeVisible(
        _0x530faa,
        _0x5b7f6f,
        _0x76f6b1,
        _0x7d32df,
      );
    }
    applyWheel(_0x34fb8b, _0xc7fe4d, _0x2cd533) {
      if (_0x2cd533.ctrlKey || _0x2cd533.metaKey) return false;
      let _0x53edaf = _0x2cd533.zoom && _0x2cd533.zoom > 0 ? _0x2cd533.zoom : 1,
        _0x238f65 =
          (_0x2cd533.shiftKey
            ? _0x2cd533.deltaX || _0x2cd533.deltaY
            : Math.abs(_0x2cd533.deltaX) > Math.abs(_0x2cd533.deltaY)
              ? _0x2cd533.deltaX
              : 0) / _0x53edaf;
      if (!_0x238f65) return false;
      let _0x2a110e = this.getState(_0x34fb8b, _0xc7fe4d);
      if (!_0x2a110e || !this._canScrollHorizontally(_0x2a110e)) return false;
      let _0x2f7d89 = _0x2a110e.scrollLeft;
      return (
        this.setScrollLeft(_0x34fb8b, _0xc7fe4d, _0x2f7d89 + _0x238f65),
        _0x2a110e.scrollLeft !== _0x2f7d89
      );
    }
    scrollByScrollbarTravel(_0x5d8470, _0x37df77, _0x379d84, _0x5970fc) {
      let _0x352295 = this.getState(_0x5d8470, _0x37df77);
      if (!_0x352295 || _0x5970fc <= 0)
        return (_0x352295 == null ? undefined : _0x352295.scrollLeft) ?? 0;
      let _0x429297 = this._getMaxScrollLeft(_0x352295);
      return this.setScrollLeft(
        _0x5d8470,
        _0x37df77,
        _0x352295.scrollLeft + (_0x429297 / _0x5970fc) * _0x379d84,
      );
    }
    scrollByDragEdge(_0x3b5a05, _0x4d03fe, _0x23b419, _0x371526, _0x388e11) {
      let _0x45f9fb = this.getState(_0x3b5a05, _0x4d03fe);
      if (
        !_0x45f9fb ||
        !this._canScrollHorizontally(_0x45f9fb) ||
        _0x371526 <= 0 ||
        _0x388e11 <= 0
      )
        return false;
      let _0x38b549 = _0x23b419,
        _0x60da78 = _0x45f9fb.viewportWidth - _0x23b419,
        _0x5a9a46 = 0,
        _0x41914d = 0;
      if (
        (_0x38b549 < _0x371526
          ? ((_0x5a9a46 = -1), (_0x41914d = _0x38b549))
          : _0x60da78 < _0x371526 && ((_0x5a9a46 = 1), (_0x41914d = _0x60da78)),
        !_0x5a9a46)
      )
        return false;
      let _0x47ab45 = Math.min(
          1,
          Math.max(0, (_0x371526 - _0x41914d) / _0x371526),
        ),
        _0x583aba = Math.max(1, Math.ceil(_0x47ab45 * _0x388e11)),
        _0x1e17bf = _0x45f9fb.scrollLeft;
      return (
        this.setScrollLeft(
          _0x3b5a05,
          _0x4d03fe,
          _0x1e17bf + _0x5a9a46 * _0x583aba,
        ),
        _0x45f9fb.scrollLeft !== _0x1e17bf
      );
    }
    clear(_0x5857b8, _0xba0f5a) {
      this._states["delete"](this._key(_0x5857b8, _0xba0f5a));
    }
    _clamp(_0xec4048, _0x5d11c2) {
      return Math.min(
        Math.max(0, _0xec4048),
        this._getMaxScrollLeft(_0x5d11c2),
      );
    }
    _getVirtualContentWidth(_0x35e6f0) {
      return (
        _0x35e6f0.leadingInsetLeft +
        _0x35e6f0.contentWidth +
        _0x35e6f0.trailingInsetRight
      );
    }
    _getMaxScrollLeft(_0x4f3382) {
      return this._canScrollHorizontally(_0x4f3382)
        ? Math.max(
            0,
            this._getVirtualContentWidth(_0x4f3382) - _0x4f3382.viewportWidth,
          )
        : 0;
    }
    _canScrollHorizontally(_0x5dc0bc) {
      return (
        _0x5dc0bc.contentWidth > _0x5dc0bc.overflowWidthThreshold &&
        this._getVirtualContentWidth(_0x5dc0bc) > _0x5dc0bc.viewportWidth
      );
    }
    _key(_0x59a30f, _0x19a99f) {
      return _0x59a30f + "::" + _0x19a99f;
    }
  };
const Sa = {
  [_0x587011.All]: "AllBorderIcon",
  [_0x587011.Bottom]: "DownBorderDoubleIcon",
  [_0x587011.Inner]: "InnerBorderDoubleIcon",
  [_0x587011.InnerHorizontal]: "HorizontalBorderDoubleIcon",
  [_0x587011.InnerVertical]: "VerticalBorderDoubleIcon",
  [_0x587011.Left]: "LeftBorderDoubleIcon",
  [_0x587011.None]: "NoBorderIcon",
  [_0x587011.Outer]: "OuterBorderDoubleIcon",
  [_0x587011.Right]: "RightBorderDoubleIcon",
  [_0x587011.Top]: "UpBorderDoubleIcon",
};
function Ca(_0x4dc349) {
  return Sa[_0x4dc349];
}
function wa(_0x4c0a63, _0x596cf0) {
  if (_0x4c0a63.length === 0) return null;
  let _0xc3a4fa = [..._0x4c0a63].sort(
      (_0x3e4f70, _0x1989bf) =>
        _0x3e4f70.rect["top"] - _0x1989bf.rect["top"] ||
        _0x3e4f70.paragraphStart - _0x1989bf.paragraphStart,
    ),
    _0x5950f0 = _0xc3a4fa.find(
      (_0x1a38e0) =>
        _0x596cf0.y <= (_0x1a38e0.rect["top"] + _0x1a38e0.rect["bottom"]) / 2,
    );
  if (_0x5950f0)
    return {
      targetOffset: _0x5950f0.paragraphStart,
      width: _0x5950f0.rect["right"] - _0x5950f0.rect["left"],
      x: _0x5950f0.rect["left"],
      y: _0x5950f0.rect["top"],
    };
  let _0x2a842a = _0xc3a4fa[_0xc3a4fa.length - 1];
  return {
    targetOffset: _0x2a842a.paragraphEnd + 1,
    width: _0x2a842a.rect["right"] - _0x2a842a.rect["left"],
    x: _0x2a842a.rect["left"],
    y: _0x2a842a.rect["bottom"],
  };
}
function Ta(_0x33013, _0x235678, _0x5c3535) {
  return _0x235678
    ? Math.hypot(_0x235678.x - _0x33013.x, _0x235678.y - _0x33013.y) < _0x5c3535
    : false;
}
function Ea(_0x18d5ae, _0x5441cc, _0x1d9c1c, _0x1cc6c2) {
  return {
    trigger: _0x18d5ae,
    startX: _0x5441cc,
    startY: _0x1d9c1c,
    tableRect: _0x1cc6c2,
  };
}
function Da(_0x99aca, _0x137a41, _0x31526b) {
  let _0x221d75 = _0x137a41 - _0x99aca.startX,
    _0x52f34f = _0x31526b - _0x99aca.startY;
  return {
    deltaX: _0x221d75,
    deltaY: _0x52f34f,
    rect: {
      ..._0x99aca.tableRect,
      x: _0x99aca.tableRect["x"] + _0x221d75,
      y: _0x99aca.tableRect["y"] + _0x52f34f,
    },
  };
}
const Oa = ["pointerup", "pointercancel", "mouseup", "blur"];
function ka(_0x34868f, _0x3c201c = ja()) {
  if (!_0x3c201c) return { dispose: () => undefined };
  let _0x44891a = Oa.map((_0x4314e9) => {
    let _0x28c0cd = (_0x471546) =>
      _0x34868f({ event: _0x471546, type: _0x4314e9 });
    return (
      _0x3c201c.addEventListener(_0x4314e9, _0x28c0cd, false),
      { listener: _0x28c0cd, type: _0x4314e9 }
    );
  });
  return {
    dispose: () => {
      _0x44891a.forEach(({ listener: _0x242b6b, type: _0x26de23 }) =>
        _0x3c201c.removeEventListener(_0x26de23, _0x242b6b, false),
      );
    },
  };
}
function Aa(_0xe17ec9, _0x133cae = ja()) {
  if (!_0x133cae) return { dispose: () => undefined };
  let _0x4df797 = (_0x48048e) =>
    _0xe17ec9({ event: _0x48048e, type: "pointermove" });
  return (
    _0x133cae.addEventListener("pointermove", _0x4df797, false),
    {
      dispose: () =>
        _0x133cae.removeEventListener("pointermove", _0x4df797, false),
    }
  );
}
function ja() {
  return globalThis.window === undefined ? null : globalThis.window;
}
function Ma(_0x29ca61, _0xa41e3f, _0x8180c6, _0x36aa27, _0x44a54c = 1) {
  return {
    trigger: _0x29ca61,
    startX: _0xa41e3f,
    startY: _0x8180c6,
    initialSize: _0x36aa27,
    minSize: _0x44a54c,
  };
}
function Na(_0x3b58d6, _0x32dec8, _0x4ec0bb) {
  return _0x3b58d6.trigger["kind"] === "resize-column"
    ? {
        column: _0x3b58d6.trigger["column"],
        width: Math.max(
          _0x3b58d6.minSize,
          _0x3b58d6.initialSize + _0x32dec8 - _0x3b58d6.startX,
        ),
      }
    : {
        height: Math.max(
          _0x3b58d6.minSize,
          _0x3b58d6.initialSize + _0x4ec0bb - _0x3b58d6.startY,
        ),
        row: _0x3b58d6.trigger["row"],
      };
}
function Pa(_0x214089, _0x4edb8a, _0x4564a0) {
  return _0x4564a0 ? Na(_0x214089, _0x4564a0.x, _0x4564a0.y) : _0x4edb8a;
}
function Fa(_0x3fa6ab, _0xd7f424, _0x9fd5b8) {
  if (_0xd7f424.kind === "resize-column") {
    var _0x1d0e08;
    let _0x202271 = Ia(_0x3fa6ab.columnIndices, _0xd7f424.column);
    if (_0x202271 == null || _0x202271 < 0) return null;
    let _0x5e66f7 =
        _0x9fd5b8 != null &&
        _0x9fd5b8.column === _0xd7f424.column &&
        _0x9fd5b8.width != null
          ? _0x9fd5b8.width
          : _0x3fa6ab.columnWidths[_0x202271],
      _0x2edc50 = za(_0x3fa6ab),
      _0x9c21a5 =
        _0x3fa6ab.tableRect["x"] +
        La(_0x3fa6ab.columnWidths["slice"](0, _0x202271)) +
        _0x5e66f7 -
        1 -
        (((_0x1d0e08 = _0x3fa6ab.viewport) == null
          ? undefined
          : _0x1d0e08.scrollLeft) ?? 0);
    return _0x9c21a5 < _0x2edc50.x || _0x9c21a5 > _0x2edc50.x + _0x2edc50.width
      ? null
      : {
          height: Ra(
            _0xd7f424.rect["height"],
            _0x3fa6ab.tableRect["height"],
            La(_0x3fa6ab.rowHeights),
          ),
          width: 2,
          x: _0x9c21a5,
          y: Math.max(_0x3fa6ab.tableRect["y"], _0xd7f424.rect["y"]),
        };
  }
  if (_0xd7f424.kind === "resize-row") {
    let _0x28ce11 = Ia(_0x3fa6ab.rowIndices, _0xd7f424.row);
    if (_0x28ce11 == null || _0x28ce11 < 0) return null;
    let _0x5ae80f =
        _0x9fd5b8 != null &&
        _0x9fd5b8.row === _0xd7f424.row &&
        _0x9fd5b8.height != null
          ? _0x9fd5b8.height
          : _0x3fa6ab.rowHeights[_0x28ce11],
      _0x322cc4 = Ba(_0x3fa6ab),
      _0x4a23a4 = Math.max(_0x322cc4.x, _0xd7f424.rect["x"]),
      _0x5b1783 = Math.min(
        _0x322cc4.x + _0x322cc4.width,
        _0xd7f424.rect["x"] + _0xd7f424.rect["width"],
      );
    return _0x5b1783 <= _0x4a23a4
      ? null
      : {
          height: 2,
          width: _0x5b1783 - _0x4a23a4,
          x: _0x4a23a4,
          y:
            _0x3fa6ab.tableRect["y"] +
            La(_0x3fa6ab.rowHeights["slice"](0, _0x28ce11)) +
            _0x5ae80f -
            1,
        };
  }
  return null;
}
function Ia(_0x51a86f, _0x24c379) {
  return _0x24c379 == null
    ? -1
    : _0x51a86f
      ? _0x51a86f.findIndex((_0x42070f) => _0x42070f === _0x24c379)
      : _0x24c379;
}
function La(_0xcf7b9b) {
  return _0xcf7b9b.reduce((_0x257c02, _0x505bcf) => _0x257c02 + _0x505bcf, 0);
}
function Ra(..._0x3967e9) {
  return Math.max(
    0,
    Math.min(..._0x3967e9.filter((_0x3538d5) => _0x3538d5 > 0)),
  );
}
function za(_0x4d1db3) {
  var _0x33fe96, _0x2174ae;
  return {
    ..._0x4d1db3.tableRect,
    x:
      ((_0x33fe96 = _0x4d1db3.viewport) == null
        ? undefined
        : _0x33fe96.viewportLeft) ?? _0x4d1db3.tableRect["x"],
    width:
      ((_0x2174ae = _0x4d1db3.viewport) == null
        ? undefined
        : _0x2174ae.viewportWidth) ?? _0x4d1db3.tableRect["width"],
  };
}
function Ba(_0x4584b5) {
  let _0xc48ee4 = za(_0x4584b5),
    _0x3a1b69 = _0x4584b5.viewport
      ? Math.max(_0xc48ee4.x, Va(_0x4584b5, 0))
      : _0x4584b5.tableRect["x"],
    _0x4dfa4c = _0x4584b5.viewport
      ? Math.min(
          _0xc48ee4.x + _0xc48ee4.width,
          Va(_0x4584b5, La(_0x4584b5.columnWidths)),
        )
      : _0x4584b5.tableRect["x"] + La(_0x4584b5.columnWidths);
  return {
    ..._0xc48ee4,
    x: _0x3a1b69,
    width: Math.max(0, _0x4dfa4c - _0x3a1b69),
  };
}
function Va(_0x4de25f, _0x3117f7) {
  var _0x5978a2;
  return (
    _0x4de25f.tableRect["x"] +
    _0x3117f7 -
    (((_0x5978a2 = _0x4de25f.viewport) == null
      ? undefined
      : _0x5978a2.scrollLeft) ?? 0)
  );
}
function Ha(_0x45a87b) {
  let _0x59a09d = Math.max(0, _0x45a87b.leadingInsetLeft ?? 0),
    _0x2ebbc3 = Math.max(
      0,
      _0x45a87b.overflowWidthThreshold ?? _0x45a87b.viewportWidth,
    ),
    _0x18ac2b = Math.max(0, _0x45a87b.trailingInsetRight ?? 0),
    _0xbd30d = _0x59a09d + _0x45a87b.contentWidth + _0x18ac2b;
  if (
    _0x45a87b.contentWidth <= _0x2ebbc3 ||
    _0xbd30d <= _0x45a87b.viewportWidth ||
    _0x45a87b.viewportWidth <= 0
  )
    return null;
  let _0x3f684a = _0x45a87b.zoom || 1,
    _0x189fdb = _0x45a87b.appearance ?? "idle",
    _0x1e03a8 = 10 / _0x3f684a,
    _0x383f70 = (_0x189fdb === "idle" ? 6 : 8) / _0x3f684a,
    _0x56f3ff = Math.max(0, _0xbd30d - _0x45a87b.viewportWidth),
    _0x557649 = _0x45a87b.viewportLeft ?? _0x45a87b.tableRect["x"],
    _0x3c60e2 = {
      height: _0x1e03a8,
      width: _0x45a87b.viewportWidth,
      x: _0x557649,
      y:
        _0x45a87b.tableRect["y"] +
        _0x45a87b.tableRect["height"] +
        4 / _0x3f684a,
    },
    _0x341f3d = Math.max(
      32 / _0x3f684a,
      _0x3c60e2.width * (_0x45a87b.viewportWidth / _0xbd30d),
    ),
    _0x207ef8 = Math.max(0, _0x3c60e2.width - _0x341f3d),
    _0x207963 =
      _0x56f3ff > 0
        ? Math.min(_0x56f3ff, Math.max(0, _0x45a87b.scrollLeft)) / _0x56f3ff
        : 0,
    _0x1fb7b8 = _0x3c60e2.x + _0x207ef8 * _0x207963;
  return {
    appearance: _0x189fdb,
    contentWidth: _0x45a87b.contentWidth,
    leadingInsetLeft: _0x59a09d,
    maxScrollLeft: _0x56f3ff,
    thumb: {
      height: _0x383f70,
      width: _0x341f3d,
      x: _0x1fb7b8,
      y: _0x3c60e2.y + (_0x3c60e2.height - _0x383f70) / 2,
    },
    track: _0x3c60e2,
    viewportLeft: _0x557649,
    viewportWidth: _0x45a87b.viewportWidth,
  };
}
function Ua(_0x45c754, _0x24d367, _0x170c3a) {
  return Ka(_0x45c754.thumb, _0x24d367, _0x170c3a)
    ? "thumb"
    : Ka(_0x45c754.track, _0x24d367, _0x170c3a)
      ? "track"
      : null;
}
function Wa(_0x2bb823, _0x2f1aa0, _0x1766e6, _0x363628) {
  let _0x5c1b80 = Math.min(_0x2f1aa0, _0x2bb823.track["y"]);
  return Ka(
    {
      height: _0x2bb823.track["y"] + _0x2bb823.track["height"] - _0x5c1b80,
      width: _0x2bb823.track["width"],
      x: _0x2bb823.track["x"],
      y: _0x5c1b80,
    },
    _0x1766e6,
    _0x363628,
  );
}
function Ga(_0x3bba8d, _0x17b783) {
  (_0x3bba8d.save(),
    (_0x3bba8d.fillStyle =
      _0x17b783.appearance === "active"
        ? "rgba(24, 28, 42, 0.40)"
        : _0x17b783.appearance === "hover"
          ? "rgba(24, 28, 42, 0.30)"
          : "rgba(24, 28, 42, 0.20)"),
    qa(
      _0x3bba8d,
      _0x17b783.thumb["x"],
      _0x17b783.thumb["y"],
      _0x17b783.thumb["width"],
      _0x17b783.thumb["height"],
      _0x17b783.thumb["height"] / 2,
    ),
    _0x3bba8d.fill(),
    _0x3bba8d.restore());
}
function Ka(_0x2473e4, _0x5bcb3f, _0xce02aa) {
  return (
    _0x5bcb3f >= _0x2473e4.x &&
    _0x5bcb3f <= _0x2473e4.x + _0x2473e4.width &&
    _0xce02aa >= _0x2473e4.y &&
    _0xce02aa <= _0x2473e4.y + _0x2473e4.height
  );
}
function qa(_0x3a4ad3, _0x27e3d4, _0xe61fcd, _0x2b0dd7, _0x201d8e, _0x1c8de7) {
  (_0x3a4ad3.beginPath(),
    _0x3a4ad3.roundRect
      ? _0x3a4ad3.roundRect(
          _0x27e3d4,
          _0xe61fcd,
          _0x2b0dd7,
          _0x201d8e,
          _0x1c8de7,
        )
      : _0x3a4ad3.rect(_0x27e3d4, _0xe61fcd, _0x2b0dd7, _0x201d8e));
}
function Ja(_0x3e0213, _0xccfb2b = {}) {
  return _0xccfb2b.suppressOverlay ||
    _0x3e0213.source === _0x39467c.Text ||
    (_0x3e0213.kind === _0x4f4538.Range &&
      _0x3e0213.startRow === _0x3e0213.endRow &&
      _0x3e0213.startColumn === _0x3e0213.endColumn)
    ? false
    : _0x3e0213.kind === _0x4f4538.Cell ||
        _0x3e0213.kind === _0x4f4538.Range ||
        _0x3e0213.kind === _0x4f4538.Table ||
        _0x3e0213.kind === _0x4f4538.Row ||
        _0x3e0213.kind === _0x4f4538.Column;
}
const Ya = new Set(["row-insert-dot", "column-insert-dot"]),
  Xa = new Set([
    "row-header",
    "column-header",
    "row-insert-dot",
    "column-insert-dot",
  ]);
function Za(_0xf11bf) {
  let _0x4ec98f = _0xf11bf.zoom ?? 1,
    _0x282926 = 6 / _0x4ec98f,
    _0x2c8115 = [],
    _0x600603 = io(_0xf11bf),
    _0xa66f1d = wo(
      _0xf11bf.columnWidths,
      oo(_0xf11bf, _0xf11bf.tableRect["x"]),
    ),
    _0xc204fd = wo(_0xf11bf.rowHeights, _0xf11bf.tableRect["y"]);
  return (
    _0x2c8115.push(...Qa(_0xf11bf, _0x600603, _0xc204fd, _0x4ec98f)),
    _0x2c8115.push(...$a(_0xf11bf, _0x600603, _0xa66f1d, _0x4ec98f)),
    _0x2c8115.push(...eo(_0xf11bf, _0x600603, _0xc204fd, _0x4ec98f)),
    _0x2c8115.push(...to(_0xf11bf, _0x600603, _0xa66f1d, _0x4ec98f)),
    _0xf11bf.rowHeights["forEach"]((_0x49759b, _0x5db4ed) => {
      var _0x568755;
      let _0x146be6 =
        ((_0x568755 = _0xf11bf.rowIndices) == null
          ? undefined
          : _0x568755[_0x5db4ed]) ?? _0x5db4ed;
      _0x2c8115.push(
        ...no(
          _0xf11bf,
          _0x146be6,
          _0xc204fd[_0x5db4ed] + _0x49759b - _0x282926 / 2,
          _0x282926,
        ),
      );
    }),
    _0xf11bf.columnWidths["forEach"]((_0x60f714, _0xb42f47) => {
      var _0x3006ad;
      let _0xcc74bd =
        ((_0x3006ad = _0xf11bf.columnIndices) == null
          ? undefined
          : _0x3006ad[_0xb42f47]) ?? _0xb42f47;
      _0x2c8115.push(
        ...ro(
          _0xf11bf,
          _0xcc74bd,
          _0xa66f1d[_0xb42f47] + _0x60f714 - _0x282926 / 2,
          _0x282926,
        ),
      );
    }),
    _0x2c8115
  );
}
function Qa(_0x3f97e0, _0x3374ab, _0x1c6323, _0x387056) {
  let _0x53d479 = 10 / _0x387056,
    _0x414e21 = ao(_0x3f97e0);
  return _0x3f97e0.rowHeights["map"]((_0x41dbc2, _0x12dc24) => {
    var _0x4bfbf4;
    return {
      kind: "row-header",
      tableId: _0x3f97e0.tableId,
      row:
        ((_0x4bfbf4 = _0x3f97e0.rowIndices) == null
          ? undefined
          : _0x4bfbf4[_0x12dc24]) ?? _0x12dc24,
      rect: {
        x: _0x414e21 - _0x53d479,
        y: _0x1c6323[_0x12dc24],
        width: _0x53d479,
        height: _0x41dbc2,
      },
    };
  });
}
function $a(_0x14d56d, _0x5c100c, _0x32c585, _0x1981f8) {
  let _0x17e911 = 10 / _0x1981f8;
  return _0x14d56d.columnWidths["flatMap"]((_0x36d115, _0x60f7ff) => {
    var _0x42049d;
    let _0x39a8e9 = {
      x: _0x32c585[_0x60f7ff],
      y: _0x14d56d.tableRect["y"] - _0x17e911,
      width: _0x36d115,
      height: _0x17e911,
    };
    return co(_0x5c100c, _0x39a8e9)
      ? [
          {
            kind: "column-header",
            tableId: _0x14d56d.tableId,
            column:
              ((_0x42049d = _0x14d56d.columnIndices) == null
                ? undefined
                : _0x42049d[_0x60f7ff]) ?? _0x60f7ff,
            rect: _0x39a8e9,
          },
        ]
      : [];
  });
}
function eo(_0x2e050c, _0x4558c0, _0x298b3a, _0x7fe314) {
  let _0x48e0a4 = 6 / _0x7fe314,
    _0x1bb409 = 10 / _0x7fe314,
    _0x52db7b = 4 / _0x7fe314,
    _0x3ad8fc = ao(_0x2e050c);
  return (
    _0x2e050c.rowHeights["length"] === 0
      ? []
      : [
          { position: "above", rowOffset: 0, y: _0x298b3a[0] },
          ..._0x2e050c.rowHeights["map"]((_0x33e39e, _0x396091) => ({
            position: "below",
            rowOffset: _0x396091,
            y: _0x298b3a[_0x396091] + _0x33e39e,
          })),
        ]
  ).map(({ position: _0x5f50fa, rowOffset: _0x41c365, y: _0xeccee4 }) => {
    var _0x8518cb;
    return {
      kind: "row-insert-dot",
      tableId: _0x2e050c.tableId,
      row:
        ((_0x8518cb = _0x2e050c.rowIndices) == null
          ? undefined
          : _0x8518cb[_0x41c365]) ?? _0x41c365,
      position: _0x5f50fa,
      rect: {
        x: _0x3ad8fc - _0x1bb409 - _0x48e0a4 / 2 - _0x52db7b,
        y: _0xeccee4 - _0x48e0a4 / 2,
        width: _0x48e0a4,
        height: _0x48e0a4,
      },
    };
  });
}
function to(_0x561945, _0x241745, _0x4c9460, _0x35dc97) {
  let _0x27b4c6 = 6 / _0x35dc97,
    _0x14d673 = 16 / _0x35dc97,
    _0x498aea = 4 / _0x35dc97;
  return (
    _0x561945.columnWidths["length"] === 0
      ? []
      : [
          { columnOffset: 0, position: "left", x: _0x4c9460[0] },
          ..._0x561945.columnWidths["map"]((_0x142c04, _0x293527) => ({
            columnOffset: _0x293527,
            position: "right",
            x: _0x4c9460[_0x293527] + _0x142c04,
          })),
        ]
  ).flatMap(
    ({ columnOffset: _0x3fc352, position: _0x432109, x: _0x3a4170 }) => {
      var _0x5a4bdc;
      let _0x4c1c2d = co(_0x241745, {
        x: _0x3a4170 - _0x27b4c6 / 2,
        y: _0x561945.tableRect["y"] - _0x14d673 - _0x498aea,
        width: _0x27b4c6,
        height: _0x27b4c6,
      });
      return _0x4c1c2d
        ? [
            {
              kind: "column-insert-dot",
              tableId: _0x561945.tableId,
              column:
                ((_0x5a4bdc = _0x561945.columnIndices) == null
                  ? undefined
                  : _0x5a4bdc[_0x3fc352]) ?? _0x3fc352,
              position: _0x432109,
              rect: _0x4c1c2d,
            },
          ]
        : [];
    },
  );
}
function no(_0x4dfe3a, _0x49380c, _0x42e93e, _0x325ad3) {
  let _0x5b07ea = io(_0x4dfe3a),
    _0x280836 = uo(_0x4dfe3a, _0x49380c)
      .map((_0x1c26cc) =>
        po(_0x4dfe3a, _0x1c26cc.startColumn, _0x1c26cc.endColumn),
      )
      .filter((_0x372178) => !!_0x372178)
      .sort((_0x2f61c4, _0x40b6c9) => _0x2f61c4[0] - _0x40b6c9[0]);
  return ho([_0x5b07ea.x, _0x5b07ea.x + _0x5b07ea.width], _0x280836).map(
    ([_0x225fba, _0x18ae70]) => ({
      kind: "resize-row",
      tableId: _0x4dfe3a.tableId,
      row: _0x49380c,
      rect: {
        x: _0x225fba,
        y: _0x42e93e,
        width: _0x18ae70 - _0x225fba,
        height: _0x325ad3,
      },
    }),
  );
}
function ro(_0x295722, _0x1d55c6, _0x5b4ed4, _0x244b1f) {
  if (!so(io(_0x295722), _0x5b4ed4, _0x5b4ed4 + _0x244b1f)) return [];
  let _0x907663 = fo(_0x295722, _0x1d55c6)
    .map((_0x4d53eb) => mo(_0x295722, _0x4d53eb.startRow, _0x4d53eb.endRow))
    .filter((_0x37be94) => !!_0x37be94)
    .sort((_0x10f69c, _0x3f9939) => _0x10f69c[0] - _0x3f9939[0]);
  return ho(
    [
      _0x295722.tableRect["y"],
      _0x295722.tableRect["y"] + _0x295722.tableRect["height"],
    ],
    _0x907663,
  ).map(([_0x83302, _0x586fdb]) => ({
    kind: "resize-column",
    tableId: _0x295722.tableId,
    column: _0x1d55c6,
    rect: {
      x: _0x5b4ed4,
      y: _0x83302,
      width: _0x244b1f,
      height: _0x586fdb - _0x83302,
    },
  }));
}
function io(_0x16fa7d) {
  var _0xaec3bb, _0x31ef3c;
  return {
    ..._0x16fa7d.tableRect,
    x:
      ((_0xaec3bb = _0x16fa7d.viewport) == null
        ? undefined
        : _0xaec3bb.viewportLeft) ?? _0x16fa7d.tableRect["x"],
    width:
      ((_0x31ef3c = _0x16fa7d.viewport) == null
        ? undefined
        : _0x31ef3c.viewportWidth) ?? _0x16fa7d.tableRect["width"],
  };
}
function ao(_0x560048) {
  return _0x560048.viewport
    ? oo(_0x560048, _0x560048.tableRect["x"])
    : _0x560048.tableRect["x"];
}
function oo(_0x596f3d, _0x2c596f) {
  var _0xbf7e0d;
  return (
    _0x2c596f -
    (((_0xbf7e0d = _0x596f3d.viewport) == null
      ? undefined
      : _0xbf7e0d.scrollLeft) ?? 0)
  );
}
function so(_0x575bb2, _0x1bea71, _0x160a4f) {
  return _0x160a4f >= _0x575bb2.x && _0x1bea71 <= _0x575bb2.x + _0x575bb2.width;
}
function co(_0x1c5698, _0x227773) {
  let _0x3e5fc4 = Math.max(_0x227773.x, _0x1c5698.x),
    _0x238ee = Math.min(
      _0x227773.x + _0x227773.width,
      _0x1c5698.x + _0x1c5698.width,
    );
  return _0x238ee <= _0x3e5fc4
    ? null
    : { ..._0x227773, x: _0x3e5fc4, width: _0x238ee - _0x3e5fc4 };
}
function lo(_0x297466) {
  return Ya.has(_0x297466);
}
function uo(_0x58ef11, _0x3f50b7) {
  var _0x3a972f;
  return (
    ((_0x3a972f = _0x58ef11.mergedCells) == null
      ? undefined
      : _0x3a972f.filter(
          (_0x1fe816) =>
            _0x3f50b7 >= _0x1fe816.startRow && _0x3f50b7 < _0x1fe816.endRow,
        )) ?? []
  );
}
function fo(_0x1e95b4, _0x4be62f) {
  var _0x53aa2d;
  return (
    ((_0x53aa2d = _0x1e95b4.mergedCells) == null
      ? undefined
      : _0x53aa2d.filter(
          (_0x2827cd) =>
            _0x4be62f >= _0x2827cd.startColumn &&
            _0x4be62f < _0x2827cd.endColumn,
        )) ?? []
  );
}
function po(_0x51dd94, _0x450954, _0x148fca) {
  let _0x3ea4de = yo(_0x51dd94.columnIndices, _0x450954),
    _0x16054a = yo(_0x51dd94.columnIndices, _0x148fca);
  if (_0x3ea4de < 0 || _0x16054a < 0) return null;
  let _0x103bf9 = Math.min(_0x3ea4de, _0x16054a),
    _0x46d331 = Math.max(_0x3ea4de, _0x16054a);
  return [
    oo(
      _0x51dd94,
      _0x51dd94.tableRect["x"] +
        bo(_0x51dd94.columnWidths["slice"](0, _0x103bf9)),
    ),
    oo(
      _0x51dd94,
      _0x51dd94.tableRect["x"] +
        bo(_0x51dd94.columnWidths["slice"](0, _0x46d331 + 1)),
    ),
  ];
}
function mo(_0x4fee5a, _0x5dab76, _0x5e402a) {
  let _0xd6faae = yo(_0x4fee5a.rowIndices, _0x5dab76),
    _0xfc9b42 = yo(_0x4fee5a.rowIndices, _0x5e402a);
  if (_0xd6faae < 0 || _0xfc9b42 < 0) return null;
  let _0x5c2b3e = Math.min(_0xd6faae, _0xfc9b42),
    _0x518903 = Math.max(_0xd6faae, _0xfc9b42);
  return [
    _0x4fee5a.tableRect["y"] + bo(_0x4fee5a.rowHeights["slice"](0, _0x5c2b3e)),
    _0x4fee5a.tableRect["y"] +
      bo(_0x4fee5a.rowHeights["slice"](0, _0x518903 + 1)),
  ];
}
function ho(_0x5e27b1, _0x25ca9f) {
  let _0x2248ca = [_0x5e27b1];
  return (
    _0x25ca9f.forEach(([_0x26a8bf, _0x3e1362]) => {
      _0x2248ca = _0x2248ca.flatMap(([_0x2a2064, _0x20e6ba]) => {
        let _0xdeabe8 = Math.max(_0x2a2064, Math.min(_0x20e6ba, _0x26a8bf)),
          _0x77f03d = Math.max(_0x2a2064, Math.min(_0x20e6ba, _0x3e1362));
        return _0x77f03d <= _0x2a2064 ||
          _0xdeabe8 >= _0x20e6ba ||
          _0xdeabe8 >= _0x77f03d
          ? [[_0x2a2064, _0x20e6ba]]
          : [
              [_0x2a2064, _0xdeabe8],
              [_0x77f03d, _0x20e6ba],
            ].filter(([_0x5707bf, _0x8aa279]) => _0x8aa279 > _0x5707bf);
      });
    }),
    _0x2248ca
  );
}
function go(_0x2bbb99, _0x341052, _0x4298d4) {
  return (
    [..._0x2bbb99]
      .sort((_0x1020cf, _0x471eee) => Co(_0x471eee) - Co(_0x1020cf))
      .find((_0x4dbb64) => To(_0x4dbb64.rect, _0x341052, _0x4298d4)) ?? null
  );
}
function _o(_0xbbe8b9, _0x5ce92d, _0x516f8e) {
  return (
    [..._0xbbe8b9]
      .filter((_0x4eac5e) => So(_0x4eac5e.kind))
      .sort((_0x4e58c7, _0x56db01) => Co(_0x56db01) - Co(_0x4e58c7))
      .find((_0x4e0ca7) => Eo(_0x4e0ca7.rect, _0x5ce92d, _0x516f8e, 6)) ?? null
  );
}
function vo(_0x156c87, _0x4a4307, _0x3d3488) {
  return (
    [..._0x156c87]
      .filter((_0x2a6740) => lo(_0x2a6740.kind))
      .sort((_0x5a55c0, _0x1df9eb) => Co(_0x1df9eb) - Co(_0x5a55c0))
      .find((_0x4cff13) => Eo(_0x4cff13.rect, _0x4a4307, _0x3d3488, 6)) ?? null
  );
}
function yo(_0x356a8c, _0x8a3c55) {
  return (
    (_0x356a8c == null
      ? undefined
      : _0x356a8c.findIndex((_0x480b50) => _0x480b50 === _0x8a3c55)) ??
    _0x8a3c55
  );
}
function bo(_0x274c09) {
  return _0x274c09.reduce((_0x3c2c2d, _0x4db95d) => _0x3c2c2d + _0x4db95d, 0);
}
function xo(_0x1888c8, _0x394c95, _0x337c88) {
  return _o(_0x1888c8, _0x394c95, _0x337c88) != null;
}
function So(_0x1a23d3) {
  return Xa.has(_0x1a23d3);
}
function Co(_0x56b2f5) {
  return _0x56b2f5.kind === "row-insert-dot" ||
    _0x56b2f5.kind === "column-insert-dot"
    ? 3
    : _0x56b2f5.kind === "resize-column" || _0x56b2f5.kind === "resize-row"
      ? 2
      : 0;
}
function wo(_0x3b8a4a, _0x340da0) {
  let _0xe34786 = [],
    _0x1c61f3 = _0x340da0;
  return (
    _0x3b8a4a.forEach((_0x2c6e3d) => {
      (_0xe34786.push(_0x1c61f3), (_0x1c61f3 += _0x2c6e3d));
    }),
    _0xe34786
  );
}
function To(_0x3dd435, _0x531393, _0x4be6ae) {
  return (
    _0x531393 >= _0x3dd435.x &&
    _0x531393 <= _0x3dd435.x + _0x3dd435.width &&
    _0x4be6ae >= _0x3dd435.y &&
    _0x4be6ae <= _0x3dd435.y + _0x3dd435.height
  );
}
function Eo(_0x3f05b2, _0x3935e6, _0xce5222, _0x2c7732) {
  return (
    _0x3935e6 >= _0x3f05b2.x - _0x2c7732 &&
    _0x3935e6 <= _0x3f05b2.x + _0x3f05b2.width + _0x2c7732 &&
    _0xce5222 >= _0x3f05b2.y - _0x2c7732 &&
    _0xce5222 <= _0x3f05b2.y + _0x3f05b2.height + _0x2c7732
  );
}
const Do = "viewMain",
  Oo = "#1a73e8",
  ko = -10000,
  Ao = "#dadce0",
  jo = "#3c4043",
  Mo = "#f1f3f4",
  No = "#b8bec6",
  Po = new Map();
function Fo(_0x26c8aa, _0x298a24) {
  let _0x419f1a = Po.get(_0x26c8aa);
  if (_0x419f1a != null && _0x419f1a.length)
    for (let _0x3e9d73 = _0x419f1a.length - 1; _0x3e9d73 >= 0; --_0x3e9d73) {
      let _0x275ae8 = _0x419f1a[_0x3e9d73](_0x26c8aa, _0x298a24);
      if (_0x275ae8) return _0x275ae8;
    }
}
function Io(_0x3415ba, _0x473e84) {
  let _0x36a52e = Po.get(_0x3415ba) ?? [];
  return (
    _0x36a52e.push(_0x473e84),
    Po.set(_0x3415ba, _0x36a52e),
    Po.size === 1 && _0x36a52e.length === 1 && _0x596e12(Fo),
    {
      dispose: () => {
        let _0x546e60 = Po.get(_0x3415ba);
        if (!_0x546e60) return;
        let _0x51fd0d = _0x546e60.indexOf(_0x473e84);
        (_0x51fd0d >= 0 && _0x546e60.splice(_0x51fd0d, 1),
          _0x546e60.length === 0 && Po.delete(_0x3415ba),
          Po.size === 0 && _0x596e12(null));
      },
    }
  );
}
let Lo = class extends _0xc3c4df {
  constructor(
    _0x5bffa6,
    _0x444abd,
    _0xff6ef0,
    _0x44d11a,
    _0x31c1c9,
    _0x2f8bcd,
    _0x539d1d,
    _0xec133f,
    _0x463614,
    _0x54846c,
    _0xe6601e,
    _0x37a791,
    _0x30bfbe,
    _0x195400,
    _0x5836c3,
    _0x30a0e0,
    _0x7a1df5,
  ) {
    (super(),
      (this._context = _0x5bffa6),
      (this._docSkeletonManagerService = _0x444abd),
      (this._docSelectionManagerService = _0xff6ef0),
      (this._docEventManagerService = _0x44d11a),
      (this._docParagraphMenuService = _0x31c1c9),
      (this._docCanvasPopManagerService = _0x2f8bcd),
      (this._docFloatMenuService = _0x539d1d),
      (this._docSelectionRenderService = _0xec133f),
      (this._selectionService = _0x463614),
      (this._floatingMenuService = _0x54846c),
      (this._viewportService = _0xe6601e),
      (this._localeService = _0x37a791),
      (this._themeService = _0x30bfbe),
      (this._contextMenuService = _0x195400),
      (this._commandService = _0x5836c3),
      (this._passiveWheelService = _0x30a0e0),
      (this._permissionService = _0x7a1df5),
      U(this, "_activeTable", null),
      U(this, "_hoveredTrigger", null),
      U(this, "_dragState", null),
      U(this, "_dragSourceTableId", null),
      U(this, "_dragPreview", null),
      U(this, "_moveDragState", null),
      U(this, "_moveDragSourceTableId", null),
      U(this, "_moveDragPreview", null),
      U(this, "_moveDropTarget", null),
      U(this, "_pendingHandleSelection", null),
      U(this, "_rowColumnMoveState", null),
      U(this, "_rowColumnMoveTarget", null),
      U(this, "_scrollbarDragState", null),
      U(this, "_selectionDragState", null),
      U(this, "_headerSelectionDragState", null),
      U(this, "_selection", null),
      U(this, "_selectionAutoScrollTimer", null),
      U(this, "_hoverCell", null),
      U(this, "_hoverColumn", null),
      U(this, "_hoverRow", null),
      U(this, "_borderPopover", null),
      U(this, "_borderPopoverDisposable", null),
      U(this, "_sortPopover", null),
      U(this, "_tooltip", null),
      U(this, "_lastPointerPoint", null),
      U(this, "_activeTableRefreshTimer", null),
      U(this, "_floatingMenuPopup", null),
      U(this, "_floatingMenuPopupAnchorKey", null),
      U(this, "_cursorBeforeTableInteraction", null),
      U(this, "_knownTableIds", new Set()),
      this._initTableState(),
      this._initTableLayoutRefresh(),
      this._initSelectionState(),
      this._initFloatingMenuState(),
      this._initZoomStateReset(),
      this.disposeWithMe(
        this._permissionService["permissionPointUpdate$"].subscribe(() => {
          this._canEditDocument() ||
            (this._floatingMenuService["hide"](),
            this._hideTransientTableControls());
        }),
      ),
      this._initPointerEvents(),
      this._initCanvasRender());
    let _0x594db7 = Io(this._context["unitId"], (_0x9e835e, _0x23e28c) =>
        this._getOrCreateViewportState(_0x9e835e, _0x23e28c),
      ),
      _0x29e2f8 = this._passiveWheelService["register"]({
        handleWheel: (_0xddf4f2) => this._handleEmbedPassiveWheel(_0xddf4f2),
        order: 100,
      });
    this.disposeWithMe({
      dispose: () => {
        (_0x594db7.dispose(),
          _0x29e2f8 == null || _0x29e2f8.dispose(),
          this._activeTableRefreshTimer != null &&
            (clearTimeout(this._activeTableRefreshTimer),
            (this._activeTableRefreshTimer = null)));
        for (let _0x5c68bf of this._knownTableIds)
          this._viewportService["clear"](this._context["unitId"], _0x5c68bf);
        (this._knownTableIds["clear"](),
          this._docFloatMenuService["setSuppressed"](false),
          this._hideFloatingMenuPopup());
      },
    });
  }
  _initTableState() {
    this.disposeWithMe(
      this._docEventManagerService["hoverTableRealTime$"].subscribe(
        (_0x1f0b75) => {
          if (!(
            !_0x1f0b75 &&
            (this._dragState ||
              this._moveDragState ||
              this._rowColumnMoveState ||
              this._scrollbarDragState ||
              this._selectionDragState ||
              this._headerSelectionDragState)
          )) {
            if (_0x1f0b75 && this._shouldKeepActiveTableForSelection()) {
              var _0x17a5a5;
              if (
                _0x51cfa2(_0x1f0b75.tableId).tableId !==
                ((_0x17a5a5 = this._selection) == null
                  ? undefined
                  : _0x17a5a5.tableId)
              ) {
                this._makeDirty();
                return;
              }
            }
            if (!_0x1f0b75 && this._shouldKeepActiveTableForSelection()) {
              this._makeDirty();
              return;
            }
            (!_0x1f0b75 && this._shouldKeepActiveTableForControls()) ||
              ((this._activeTable = this._lastPointerPoint
                ? this._buildActiveTableAtPoint(
                    this._lastPointerPoint["x"],
                    this._lastPointerPoint["y"],
                  )
                : _0x1f0b75
                  ? this._buildActiveTable(_0x1f0b75)
                  : null),
              this._activeTable || (this._hoveredTrigger = null),
              this._makeDirty());
          }
        },
      ),
    );
  }
  _initTableLayoutRefresh() {
    let _0x4f206d = () => this._refreshTableLayoutState();
    (this.disposeWithMe(
      this._docSkeletonManagerService["currentSkeleton$"].subscribe(_0x4f206d),
    ),
      this.disposeWithMe(
        this._docSkeletonManagerService["currentSkeleton$"]
          .pipe(
            _0x2ba586(
              (_0x2eab28) =>
                (_0x2eab28 == null ? undefined : _0x2eab28.dirty$) ?? _0x441036,
            ),
          )
          .subscribe(_0x4f206d),
      ));
  }
  _refreshTableLayoutState() {
    var _0x97651c, _0x1c0900, _0x4035bf;
    let _0x5054ea =
      (_0x97651c = this._activeTable) == null
        ? undefined
        : _0x97651c.sourceTableId;
    (this._syncViewportStatesFromSkeleton(),
      this._selectionService["emitCurrentSelection"](),
      this._refreshActiveTableForLayoutChange());
    let _0x5dde40 = this._docParagraphMenuService["activeTarget"],
      _0x148874 =
        (_0x5dde40 == null ? undefined : _0x5dde40.kind) === _0x6aaaa4.TABLE
          ? (_0x1c0900 = _0x5dde40.table) == null
            ? undefined
            : _0x1c0900.tableId
          : undefined;
    (_0x148874 &&
      ((_0x4035bf = this._context["unit"].getSnapshot().tableSource) == null
        ? undefined
        : _0x4035bf[_0x148874]) == null &&
      this._docParagraphMenuService["hideParagraphMenu"](true),
      _0x5054ea && !this._activeTable && this._hideTransientTableControls());
  }
  _initSelectionState() {
    this.disposeWithMe(
      this._selectionService["selectionChange$"].subscribe((_0x30fcce) => {
        if (
          ((this._selection = _0x30fcce),
          _0x30fcce != null && _0x30fcce.tableId)
        ) {
          (this._refreshActiveTableFromSkeleton(_0x30fcce.tableId),
            this._syncFloatingMenuFromSelection(),
            this._syncParagraphTableMenuFromActiveTable());
          return;
        }
        (this._syncFloatingMenuFromSelection(), this._makeDirty());
      }),
    );
  }
  _initFloatingMenuState() {
    this.disposeWithMe(
      this._floatingMenuService["state$"].subscribe((_0x1f9b2c) => {
        (this._docFloatMenuService["setSuppressed"](
          _0x1f9b2c.visible && _0x1f9b2c.unitId === this._context["unitId"],
        ),
          !(
            !_0x1f9b2c.tableId ||
            (!_0x1f9b2c.visible && !_0x1f9b2c.hoverActive)
          ) &&
            ((!this._activeTable ||
              this._activeTable["sourceTableId"] !== _0x1f9b2c.tableId) &&
              this._refreshActiveTableFromSkeleton(_0x1f9b2c.tableId),
            this._syncParagraphTableMenuFromActiveTable()));
      }),
    );
  }
  _initZoomStateReset() {
    this.disposeWithMe(
      this._commandService["onCommandExecuted"]((_0x6cb93f) => {
        var _0x583bfc;
        if (_0x6cb93f.id !== _0x2ed827.id) return;
        let _0xdf38e9 =
          (_0x583bfc = _0x6cb93f.params) == null ? undefined : _0x583bfc.unitId;
        (_0xdf38e9 && _0xdf38e9 !== this._context["unitId"]) ||
          this._hideTransientTableControls();
      }),
    );
  }
  _initPointerEvents() {
    let _0x51f869 = Ho(this._context);
    (this.disposeWithMe(
      Aa(({ event: _0x118b38 }) => {
        this._handleWindowPointerMove(_0x118b38);
      }),
    ),
      this.disposeWithMe(
        ka(({ event: _0x5cf724, type: _0x33b7d5 }) => {
          let _0x1ff3bd =
            this._getDocumentPointFromWindowEvent(_0x5cf724) ??
            this._lastPointerPoint;
          this._releasePointerInteraction(_0x1ff3bd, undefined, {
            commit: _0x33b7d5 === "pointerup" || _0x33b7d5 === "mouseup",
            selectCollapsedRange:
              _0x33b7d5 === "pointerup" || _0x33b7d5 === "mouseup",
          });
        }),
      ),
      this.disposeWithMe(
        _0x51f869.onPointerMove$["subscribeEvent"]({
          next: ([_0x459259, _0x2c27b2]) => {
            let _0x3897d7 = this._getDocumentPointFromPointerEvent(_0x459259);
            if (
              ((this._lastPointerPoint = _0x3897d7),
              this._selectionDragState &&
                !Go(_0x459259) &&
                ((this._selectionDragState = null),
                this._stopSelectionDragAutoScroll()),
              (this._activeTable ||= this._buildActiveTableAtPoint(
                _0x3897d7.x,
                _0x3897d7.y,
              )),
              this._moveDragState)
            ) {
              let _0x462171 = Math.hypot(
                _0x3897d7.x - this._moveDragState["startX"],
                _0x3897d7.y - this._moveDragState["startY"],
              );
              ((this._moveDragPreview =
                _0x462171 >= 4
                  ? Da(this._moveDragState, _0x3897d7.x, _0x3897d7.y)
                  : null),
                (this._moveDropTarget = this._moveDragPreview
                  ? this._getTableDropTargetAtPoint(_0x3897d7.x, _0x3897d7.y)
                  : null),
                this._setTableCursor(_0x43cf02.MOVE),
                _0x2c27b2.stopPropagation(),
                (_0x2c27b2.skipNextObservers = true),
                _0x459259.preventDefault(),
                this._makeDirty());
              return;
            }
            if (this._scrollbarDragState) {
              (this._updateScrollbarDrag(_0x3897d7.x),
                this._setTableCursor(_0x43cf02.POINTER),
                _0x2c27b2.stopPropagation(),
                (_0x2c27b2.skipNextObservers = true),
                _0x459259.preventDefault(),
                this._makeDirty());
              return;
            }
            if (this._pendingHandleSelection) {
              Ta(
                {
                  x: this._pendingHandleSelection["startX"],
                  y: this._pendingHandleSelection["startY"],
                },
                _0x3897d7,
                4,
              ) ||
                ((this._rowColumnMoveState = this._createRowColumnMoveState(
                  this._pendingHandleSelection,
                )),
                (this._rowColumnMoveTarget =
                  this._getRowColumnMoveTarget(_0x3897d7)),
                (this._pendingHandleSelection = null),
                this._setTableCursor(_0x43cf02.MOVE),
                _0x2c27b2.stopPropagation(),
                (_0x2c27b2.skipNextObservers = true),
                _0x459259.preventDefault(),
                this._makeDirty());
              return;
            }
            if (this._dragState) {
              ((this._dragPreview = Na(
                this._dragState,
                _0x3897d7.x,
                _0x3897d7.y,
              )),
                this._setResizeCursor(this._dragState["trigger"]),
                _0x2c27b2.stopPropagation(),
                (_0x2c27b2.skipNextObservers = true),
                _0x459259.preventDefault(),
                this._makeDirty());
              return;
            }
            if (this._selectionDragState) {
              if (this._updateSelectionDrag(_0x3897d7)) {
                (_0x2c27b2.stopPropagation(),
                  (_0x2c27b2.skipNextObservers = true),
                  _0x459259.preventDefault());
                return;
              }
              this._updateSelectionDragAutoScroll(_0x3897d7);
            }
            this._headerSelectionDragState &&
              (Go(_0x459259)
                ? this._updateHeaderSelectionDrag(_0x3897d7)
                : ((this._headerSelectionDragState = null),
                  this._selectionService["setNativeSelectionSuppressed"](
                    false,
                  )));
            let _0x228e34 = this._hitBorderPreset(_0x3897d7.x, _0x3897d7.y);
            if (_0x228e34) {
              (this._setTooltip({
                label: this._getBorderPresetLabel(_0x228e34.preset),
                x: _0x3897d7.x,
                y: _0x3897d7.y,
              }),
                this._setTableCursor(_0x43cf02.POINTER),
                _0x2c27b2.stopPropagation(),
                (_0x2c27b2.skipNextObservers = true),
                this._makeDirty());
              return;
            }
            if (this._hitSortOption(_0x3897d7.x, _0x3897d7.y)) {
              (this._setTooltip(null),
                this._setTableCursor(_0x43cf02.POINTER),
                _0x2c27b2.stopPropagation(),
                (_0x2c27b2.skipNextObservers = true),
                this._makeDirty());
              return;
            }
            if (this._hitScrollbar(_0x3897d7.x, _0x3897d7.y)) {
              (this._setTableCursor(_0x43cf02.POINTER),
                _0x2c27b2.stopPropagation(),
                (_0x2c27b2.skipNextObservers = true),
                this._makeDirty());
              return;
            }
            let _0x279b2b = this._hitTestHoverTrigger(_0x3897d7.x, _0x3897d7.y),
              _0x5cb852 = this._shouldPreserveFloatingHover(
                _0x3897d7.x,
                _0x3897d7.y,
              );
            if (
              (_0x5cb852 || this._updateHoverTarget(_0x3897d7.x, _0x3897d7.y),
              !_0x279b2b && _0x5cb852)
            ) {
              (_0x2c27b2.stopPropagation(),
                (_0x2c27b2.skipNextObservers = true));
              return;
            }
            if (
              (this._setHoveredTrigger(_0x279b2b),
              this._setTooltip(this._buildTriggerTooltip(_0x279b2b)),
              !_0x279b2b)
            ) {
              this._restoreTableCursor();
              return;
            }
            (_0x2c27b2.stopPropagation(),
              (_0x2c27b2.skipNextObservers = true),
              _0x279b2b.kind === "resize-column" ||
              _0x279b2b.kind === "resize-row"
                ? this._setResizeCursor(_0x279b2b)
                : this._setTableCursor(_0x43cf02.POINTER));
          },
          priority: ko,
        }),
      ),
      this.disposeWithMe(
        _0x51f869.onPointerDown$["subscribeEvent"]({
          next: ([_0x13faa6, _0x5183cd]) => {
            var _0xb03d3c;
            if (_0x13faa6.button === 2) {
              this._handleTableContextMenuPointerDown(_0x13faa6, _0x5183cd);
              return;
            }
            let _0xd2d803 = this._getDocumentPointFromPointerEvent(_0x13faa6);
            ((this._lastPointerPoint = _0xd2d803),
              (this._activeTable ||= this._buildActiveTableAtPoint(
                _0xd2d803.x,
                _0xd2d803.y,
              )));
            let _0x53fe29 = this._hitScrollbar(_0xd2d803.x, _0xd2d803.y);
            if (_0x53fe29 && this._activeTable) {
              (_0x5183cd.stopPropagation(),
                (_0x5183cd.skipNextObservers = true),
                _0x13faa6.stopPropagation(),
                _0x13faa6.preventDefault(),
                this._selectionService["setNativeSelectionSuppressed"](true),
                this._startOrJumpScrollbar(_0x53fe29, _0xd2d803.x));
              return;
            }
            let _0x48f571 = this._hitBorderPreset(_0xd2d803.x, _0xd2d803.y);
            if (_0x48f571 && this._borderPopover) {
              (_0x5183cd.stopPropagation(),
                (_0x5183cd.skipNextObservers = true),
                _0x13faa6.stopPropagation(),
                _0x13faa6.preventDefault(),
                this._applyBorderPreset(_0x48f571.preset));
              return;
            }
            let _0x51cc05 = this._hitSortOption(_0xd2d803.x, _0xd2d803.y);
            if (_0x51cc05 && this._sortPopover) {
              (_0x5183cd.stopPropagation(),
                (_0x5183cd.skipNextObservers = true),
                _0x13faa6.stopPropagation(),
                _0x13faa6.preventDefault(),
                this._selectColumn(
                  this._sortPopover["tableId"],
                  this._sortPopover["column"],
                ),
                this._commandService["executeCommand"](_0x48cf43.id, {
                  column: this._sortPopover["column"],
                  direction: _0x51cc05.direction,
                  tableId: this._sortPopover["tableId"],
                }),
                (this._sortPopover = null),
                this._makeDirty());
              return;
            }
            let _0x11c153 =
                this._hitTest(_0xd2d803.x, _0xd2d803.y) ?? this._hoveredTrigger,
              _0x3ba9d3 =
                ((_0xb03d3c = this._activeTable) == null
                  ? undefined
                  : _0xb03d3c.sourceTableId) ??
                (_0x11c153 == null ? undefined : _0x11c153.tableId);
            if (!_0x11c153) {
              let _0x363ee9 = this._buildTableMoveHitAtPoint(
                _0xd2d803.x,
                _0xd2d803.y,
              );
              _0x363ee9 &&
                ((this._activeTable = _0x363ee9.activeTable),
                (_0x11c153 = _0x363ee9.trigger),
                (_0x3ba9d3 = _0x363ee9.activeTable["sourceTableId"]));
            }
            if (!_0x11c153 || !_0x3ba9d3) {
              let _0x25953d = this._getCellAtPoint(_0xd2d803.x, _0xd2d803.y);
              _0x25953d
                ? ((this._selectionDragState = {
                    anchorColumn: _0x25953d.column,
                    anchorRow: _0x25953d.row,
                    ...(_0x25953d.segmentId
                      ? { segmentId: _0x25953d.segmentId }
                      : {}),
                    startX: _0xd2d803.x,
                    startY: _0xd2d803.y,
                    structural: false,
                    tableId: _0x25953d.tableId,
                  }),
                  this._selectionService["clearStructuralSelection"]({
                    clearNativeSelection: false,
                  }))
                : ((this._selectionDragState = null),
                  this._stopSelectionDragAutoScroll(),
                  this._selectionService["clearStructuralSelection"]({
                    clearNativeSelection: false,
                  }));
              return;
            }
            if (
              ((this._selectionDragState = null),
              this._stopSelectionDragAutoScroll(),
              _0x5183cd.stopPropagation(),
              (_0x5183cd.skipNextObservers = true),
              _0x13faa6.stopPropagation(),
              _0x13faa6.preventDefault(),
              _0x11c153.kind === "resize-column" ||
                _0x11c153.kind === "resize-row")
            ) {
              let _0x488c55 = this._getTriggerInitialSize(_0x11c153);
              if (_0x488c55 == null) return;
              (this._selectionService["setNativeSelectionSuppressed"](true),
                (this._pendingHandleSelection = null),
                this._selectionService["clearStructuralSelection"](),
                (this._dragState = Ma(
                  _0x11c153,
                  _0xd2d803.x,
                  _0xd2d803.y,
                  _0x488c55,
                )),
                (this._dragSourceTableId = _0x3ba9d3),
                (this._dragPreview = Na(
                  this._dragState,
                  _0xd2d803.x,
                  _0xd2d803.y,
                )),
                this._setResizeCursor(_0x11c153),
                this._makeDirty());
              return;
            }
            if (_0x11c153.kind === "table-select") {
              if (!this._activeTable) return;
              (this._selectionService["setNativeSelectionSuppressed"](true),
                (this._moveDragState = Ea(
                  _0x11c153,
                  _0xd2d803.x,
                  _0xd2d803.y,
                  this._activeTable["input"].tableRect,
                )),
                (this._moveDragSourceTableId = _0x3ba9d3),
                (this._moveDragPreview = null),
                (this._moveDropTarget = null),
                this._closeBorderPopover(),
                (this._sortPopover = null),
                this._setTableCursor(_0x43cf02.MOVE),
                this._makeDirty());
              return;
            }
            this._handleStructuralTriggerPointerDown(
              _0x11c153,
              _0xd2d803,
              _0x3ba9d3,
            );
          },
          priority: ko,
        }),
      ),
      this.disposeWithMe(
        _0x51f869.onPointerUp$["subscribeEvent"]({
          next: ([_0x2318ef, _0x2ac051]) => {
            let _0x9da6e8 = this._getDocumentPointFromPointerEvent(_0x2318ef);
            ((this._lastPointerPoint = _0x9da6e8),
              this._releasePointerInteraction(_0x9da6e8, _0x2ac051, {
                commit: true,
                selectCollapsedRange: true,
              }));
          },
          priority: ko,
        }),
      ),
      this.disposeWithMe(
        this._context["scene"].onMouseWheel$["subscribeEvent"]({
          next: ([_0xf7731e, _0x129198]) => {
            let _0x4867e3 = this._getDocumentPointFromPointerEvent(_0xf7731e),
              _0x5d7eb4 =
                this._activeTable ??
                this._buildActiveTableAtPoint(_0x4867e3.x, _0x4867e3.y);
            !_0x5d7eb4 ||
              !Z(Y(_0x5d7eb4.input), _0x4867e3.x, _0x4867e3.y) ||
              (this._viewportService["applyWheel"](
                this._context["unitId"],
                _0x5d7eb4.sourceTableId,
                {
                  ctrlKey: !!_0xf7731e.ctrlKey,
                  deltaX: _0xf7731e.deltaX,
                  deltaY: _0xf7731e.deltaY,
                  metaKey: !!_0xf7731e.metaKey,
                  shiftKey: !!_0xf7731e.shiftKey,
                  zoom: this._getCurrentZoom(),
                },
              ) &&
                ((this._activeTable =
                  this._refreshActiveTableViewport(_0x5d7eb4)),
                this._refreshNativeSelection(),
                _0x129198.stopPropagation(),
                (_0x129198.skipNextObservers = true),
                _0xf7731e.preventDefault(),
                this._makeDirty()));
          },
          priority: ko,
        }),
      ),
      this.disposeWithMe(
        _0x51f869.onPointerLeave$["subscribeEvent"]({
          next: () => {
            this._dragState ||
              this._moveDragState ||
              this._rowColumnMoveState ||
              this._headerSelectionDragState ||
              (this._setHoveredTrigger(null),
              this._setTooltip(null),
              this._shouldKeepActiveTableOnPointerLeave() ||
                (this._activeTable = null),
              this._resetTableCursor(),
              this._makeDirty());
          },
          priority: ko,
        }),
      ));
  }
  _handleEmbedPassiveWheel(_0x19f072) {
    if (
      _0x19f072.source === "host-scroll-sync" ||
      _0x19f072.childUnitId !== this._context["unitId"]
    )
      return false;
    let _0x48db3a = this._getDocumentPointFromWindowEvent(_0x19f072.event);
    if (!_0x48db3a) return false;
    let _0x128c9b =
      this._buildActiveTableAtPoint(_0x48db3a.x, _0x48db3a.y) ??
      this._activeTable;
    if (!_0x128c9b || !Z(Y(_0x128c9b.input), _0x48db3a.x, _0x48db3a.y))
      return false;
    let _0x12a3e9 = _0x19f072.event;
    return this._viewportService["applyWheel"](
      this._context["unitId"],
      _0x128c9b.sourceTableId,
      {
        ctrlKey: !!_0x12a3e9.ctrlKey,
        deltaX: _0x12a3e9.deltaX,
        deltaY: _0x12a3e9.deltaY,
        metaKey: !!_0x12a3e9.metaKey,
        shiftKey: !!_0x12a3e9.shiftKey,
        zoom: this._getCurrentZoom(),
      },
    )
      ? ((this._activeTable = this._refreshActiveTableViewport(_0x128c9b)),
        this._refreshNativeSelection(),
        this._makeDirty(),
        true)
      : false;
  }
  _handleWindowPointerMove(_0x65107) {
    if (
      !this._dragState &&
      !this._moveDragState &&
      !this._rowColumnMoveState &&
      !this._pendingHandleSelection &&
      !this._scrollbarDragState &&
      !this._selectionDragState &&
      !this._headerSelectionDragState
    )
      return;
    let _0x5e0197 = this._getDocumentPointFromWindowEvent(_0x65107);
    if (
      _0x5e0197 &&
      ((this._lastPointerPoint = _0x5e0197),
      !(
        this._selectionDragState &&
        (Go(_0x65107)
          ? this._updateSelectionDrag(_0x5e0197) ||
            this._updateSelectionDragAutoScroll(_0x5e0197)
          : ((this._selectionDragState = null),
            this._stopSelectionDragAutoScroll()),
        !this._dragState &&
          !this._moveDragState &&
          !this._rowColumnMoveState &&
          !this._pendingHandleSelection &&
          !this._scrollbarDragState)
      ) &&
        !(
          this._headerSelectionDragState &&
          (Go(_0x65107)
            ? this._updateHeaderSelectionDrag(_0x5e0197)
            : ((this._headerSelectionDragState = null),
              this._selectionService["setNativeSelectionSuppressed"](false)),
          !this._dragState &&
            !this._moveDragState &&
            !this._rowColumnMoveState &&
            !this._pendingHandleSelection &&
            !this._scrollbarDragState)
        ))
    ) {
      if (this._scrollbarDragState) {
        (this._updateScrollbarDrag(_0x5e0197.x), this._makeDirty());
        return;
      }
      if (this._pendingHandleSelection) {
        Ta(
          {
            x: this._pendingHandleSelection["startX"],
            y: this._pendingHandleSelection["startY"],
          },
          _0x5e0197,
          4,
        ) ||
          ((this._rowColumnMoveState = this._createRowColumnMoveState(
            this._pendingHandleSelection,
          )),
          (this._rowColumnMoveTarget = this._getRowColumnMoveTarget(_0x5e0197)),
          (this._pendingHandleSelection = null),
          this._setTableCursor(_0x43cf02.MOVE),
          this._makeDirty());
        return;
      }
      if (this._rowColumnMoveState) {
        (Go(_0x65107)
          ? ((this._rowColumnMoveTarget =
              this._getRowColumnMoveTarget(_0x5e0197)),
            this._setTableCursor(_0x43cf02.MOVE))
          : ((this._rowColumnMoveState = null),
            (this._rowColumnMoveTarget = null),
            this._restoreTableCursor()),
          this._makeDirty());
        return;
      }
      if (this._moveDragState) {
        let _0x4b4569 = Math.hypot(
          _0x5e0197.x - this._moveDragState["startX"],
          _0x5e0197.y - this._moveDragState["startY"],
        );
        ((this._moveDragPreview =
          _0x4b4569 >= 4
            ? Da(this._moveDragState, _0x5e0197.x, _0x5e0197.y)
            : null),
          (this._moveDropTarget = this._moveDragPreview
            ? this._getTableDropTargetAtPoint(_0x5e0197.x, _0x5e0197.y)
            : null),
          this._setTableCursor(_0x43cf02.MOVE),
          this._makeDirty());
        return;
      }
      this._dragState &&
        ((this._dragPreview = Na(this._dragState, _0x5e0197.x, _0x5e0197.y)),
        this._setResizeCursor(this._dragState["trigger"]),
        this._makeDirty());
    }
  }
  _getDocumentPointFromWindowEvent(_0x2d2656) {
    var _0x3724c2, _0x2085c0, _0xf8ef75;
    if (!ts(_0x2d2656)) return null;
    let _0xb10736 =
        (_0x3724c2 = this._context["engine"]) == null ||
        (_0x2085c0 = _0x3724c2.getCanvasElement) == null
          ? undefined
          : _0x2085c0.call(_0x3724c2),
      _0x4af587 =
        _0xb10736 == null ||
        (_0xf8ef75 = _0xb10736.getBoundingClientRect) == null
          ? undefined
          : _0xf8ef75.call(_0xb10736);
    return _0x4af587
      ? Uo(
          _0x2d2656.clientX - _0x4af587.left,
          _0x2d2656.clientY - _0x4af587.top,
          this._context["scene"],
        )
      : null;
  }
  _getDocumentPointFromPointerEvent(_0x4002f1) {
    return (
      this._getDocumentPointFromWindowEvent(_0x4002f1) ??
      Uo(_0x4002f1.offsetX, _0x4002f1.offsetY, this._context["scene"])
    );
  }
  _releasePointerInteraction(_0x59308b, _0x471efd, _0x25b0d0) {
    var _0x475e5e;
    let _0x7888dc = !!(
      (_0x475e5e = this._selectionDragState) != null && _0x475e5e.structural
    );
    this._selectionDragState = null;
    let _0x49b7a6 = !!this._headerSelectionDragState;
    return (
      (this._headerSelectionDragState = null),
      this._stopSelectionDragAutoScroll(),
      _0x7888dc
        ? (this._consumePointerEvent(_0x471efd), this._makeDirty(), true)
        : _0x49b7a6
          ? (this._consumePointerEvent(_0x471efd),
            this._selectionService["setNativeSelectionSuppressed"](false),
            this._makeDirty(),
            true)
          : this._scrollbarDragState
            ? (this._consumePointerEvent(_0x471efd),
              (this._scrollbarDragState = null),
              this._selectionService["setNativeSelectionSuppressed"](false),
              this._restoreTableCursor(),
              this._makeDirty(),
              true)
            : this._rowColumnMoveState || this._rowColumnMoveTarget
              ? (this._consumePointerEvent(_0x471efd),
                this._releaseRowColumnMove(_0x59308b, _0x25b0d0.commit),
                true)
              : this._moveDragState ||
                  this._moveDragSourceTableId ||
                  this._moveDragPreview ||
                  this._moveDropTarget
                ? (this._consumePointerEvent(_0x471efd),
                  this._releaseMoveDrag(_0x59308b, _0x25b0d0.commit),
                  true)
                : this._pendingHandleSelection
                  ? (this._consumePointerEvent(_0x471efd),
                    this._releaseHandleSelection(_0x59308b, _0x25b0d0.commit),
                    true)
                  : this._dragState ||
                      this._dragSourceTableId ||
                      this._dragPreview
                    ? (this._consumePointerEvent(_0x471efd),
                      this._releaseResizeDrag(_0x59308b, _0x25b0d0.commit),
                      true)
                    : false
    );
  }
  _releaseMoveDrag(_0x4b7569, _0x3f6c3c) {
    if (_0x3f6c3c && this._moveDragState && this._moveDragSourceTableId) {
      let _0x986e0e = _0x4b7569
          ? Math.hypot(
              _0x4b7569.x - this._moveDragState["startX"],
              _0x4b7569.y - this._moveDragState["startY"],
            )
          : 0,
        _0x50e7e9 =
          this._moveDragPreview ??
          (_0x4b7569 && _0x986e0e >= 4
            ? Da(this._moveDragState, _0x4b7569.x, _0x4b7569.y)
            : null),
        _0xa484b0 =
          this._moveDropTarget ??
          (_0x4b7569 && _0x50e7e9
            ? this._getTableDropTargetAtPoint(_0x4b7569.x, _0x4b7569.y)
            : null);
      _0xa484b0
        ? this._commandService["executeCommand"](_0x372724.id, {
            tableId: this._moveDragSourceTableId,
            targetOffset: _0xa484b0.targetOffset,
          })
        : !_0x50e7e9 &&
          Ta(
            {
              x: this._moveDragState["startX"],
              y: this._moveDragState["startY"],
            },
            _0x4b7569 ?? null,
            4,
          ) &&
          this._selectTable(this._moveDragSourceTableId);
    }
    ((this._moveDragState = null),
      (this._moveDragSourceTableId = null),
      (this._moveDragPreview = null),
      (this._moveDropTarget = null),
      this._selectionService["setNativeSelectionSuppressed"](false),
      this._restoreTableCursor(),
      this._makeDirty());
  }
  _hideTransientTableControls() {
    var _0x549363, _0x375a7f;
    let _0x249c22 = !!(
      this._activeTable ||
      this._hoveredTrigger ||
      this._dragState ||
      this._dragPreview ||
      this._moveDragState ||
      this._moveDragPreview ||
      this._moveDropTarget ||
      this._pendingHandleSelection ||
      this._rowColumnMoveState ||
      this._rowColumnMoveTarget ||
      this._scrollbarDragState ||
      this._selectionDragState ||
      this._headerSelectionDragState ||
      this._hoverCell ||
      this._hoverColumn != null ||
      this._hoverRow != null ||
      this._borderPopover ||
      this._sortPopover ||
      this._tooltip ||
      this._contextMenuService["visible"]
    );
    ((this._activeTable = null),
      (this._hoveredTrigger = null),
      (this._dragState = null),
      (this._dragSourceTableId = null),
      (this._dragPreview = null),
      (this._moveDragState = null),
      (this._moveDragSourceTableId = null),
      (this._moveDragPreview = null),
      (this._moveDropTarget = null),
      (this._pendingHandleSelection = null),
      (this._rowColumnMoveState = null),
      (this._rowColumnMoveTarget = null),
      (this._scrollbarDragState = null),
      (this._selectionDragState = null),
      (this._headerSelectionDragState = null),
      (this._hoverCell = null),
      (this._hoverColumn = null),
      (this._hoverRow = null),
      (this._sortPopover = null),
      (this._tooltip = null),
      (this._lastPointerPoint = null),
      this._stopSelectionDragAutoScroll(),
      (_0x549363 = this._borderPopoverDisposable) == null ||
        _0x549363.dispose(),
      (this._borderPopoverDisposable = null),
      (this._borderPopover = null),
      this._contextMenuService["hideContextMenu"](),
      this._floatingMenuService["hide"](),
      this._hideFloatingMenuPopup(),
      ((_0x375a7f = this._docParagraphMenuService["activeTarget"]) == null
        ? undefined
        : _0x375a7f.kind) === _0x6aaaa4.TABLE &&
        this._docParagraphMenuService["hideParagraphMenu"](true),
      this._selectionService["setNativeSelectionSuppressed"](false),
      this._restoreTableCursor(),
      _0x249c22 && this._makeDirty());
  }
  _releaseHandleSelection(_0x372030, _0xff8f14) {
    let _0x350d94 = this._pendingHandleSelection;
    (_0xff8f14 &&
      _0x350d94 &&
      Ta({ x: _0x350d94.startX, y: _0x350d94.startY }, _0x372030 ?? null, 4) &&
      (_0x350d94.type === "row" && _0x350d94.row != null
        ? this._selectRow(_0x350d94.tableId, _0x350d94.row)
        : _0x350d94.type === "column" &&
          _0x350d94.column != null &&
          this._selectColumn(_0x350d94.tableId, _0x350d94.column)),
      (this._pendingHandleSelection = null),
      this._selectionService["setNativeSelectionSuppressed"](false),
      this._makeDirty());
  }
  _releaseRowColumnMove(_0x5c3cdb, _0x830f29) {
    let _0x15cda5 = this._rowColumnMoveState,
      _0x1679e3 =
        this._rowColumnMoveTarget ??
        (_0x5c3cdb ? this._getRowColumnMoveTarget(_0x5c3cdb) : null);
    (_0x830f29 &&
      _0x15cda5 &&
      _0x1679e3 &&
      _0x1679e3.index !== _0x15cda5.sourceIndex &&
      (_0x15cda5.type === "row"
        ? this._commandService["executeCommand"](_0x1e814e.id, {
            count: 1,
            fromRow: _0x15cda5.sourceIndex,
            position: _0x1679e3.position === "above" ? "above" : "below",
            tableId: _0x15cda5.tableId,
            toRow: _0x1679e3.index,
          }).then((_0x37b939) => {
            _0x37b939 && this._scheduleActiveTableRefresh(_0x15cda5.tableId);
          })
        : this._commandService["executeCommand"](_0xb55a4d.id, {
            count: 1,
            fromColumn: _0x15cda5.sourceIndex,
            position: _0x1679e3.position === "left" ? "left" : "right",
            tableId: _0x15cda5.tableId,
            toColumn: _0x1679e3.index,
          }).then((_0x2902e4) => {
            _0x2902e4 && this._scheduleActiveTableRefresh(_0x15cda5.tableId);
          })),
      (this._rowColumnMoveState = null),
      (this._rowColumnMoveTarget = null),
      this._selectionService["setNativeSelectionSuppressed"](false),
      this._restoreTableCursor(),
      this._makeDirty());
  }
  _releaseResizeDrag(_0x560e8e, _0x28856a) {
    let _0x3132b9 = this._dragState
        ? Pa(this._dragState, this._dragPreview ?? null, _0x560e8e ?? null)
        : this._dragPreview,
      _0x57a224 = this._dragSourceTableId;
    (_0x28856a &&
      _0x3132b9 &&
      _0x57a224 &&
      (_0x3132b9.column != null && _0x3132b9.width != null
        ? this._executeCommandAndRefreshActiveTable(
            _0x3a0da1.id,
            {
              column: _0x3132b9.column,
              tableId: _0x57a224,
              width: _0x3132b9.width,
            },
            _0x57a224,
          )
        : _0x3132b9.row != null &&
          _0x3132b9.height != null &&
          this._executeCommandAndRefreshActiveTable(
            _0x247fe1.id,
            {
              height: _0x3132b9.height,
              row: _0x3132b9.row,
              tableId: _0x57a224,
            },
            _0x57a224,
          )),
      (this._dragState = null),
      (this._dragSourceTableId = null),
      (this._dragPreview = null),
      this._setHoveredTrigger(null),
      this._setTooltip(null),
      this._selectionService["setNativeSelectionSuppressed"](false),
      this._restoreTableCursor(),
      this._makeDirty());
  }
  _openBorderPopover(_0x53e974) {
    (this._closeBorderPopover(), (this._borderPopover = _0x53e974));
    let _0x352278 = ds().map(({ preset: _0x48c951 }) => ({
      label: this._getBorderPresetLabel(_0x48c951),
      preset: _0x48c951,
    }));
    ((this._borderPopoverDisposable = this._docCanvasPopManagerService[
      "attachPopupToRect"
    ](
      {
        bottom: _0x53e974.y,
        left: _0x53e974.x,
        right: _0x53e974.x,
        top: _0x53e974.y,
      },
      {
        componentKey: di,
        direction: "bottom-left",
        extraProps: {
          onSelect: (_0x59b606) => this._applyBorderPreset(_0x59b606),
          presets: _0x352278,
        },
        onClickOutside: () => this._closeBorderPopover(),
        onContextMenu: () => this._closeBorderPopover(),
      },
      this._context["unitId"],
    )),
      this._makeDirty());
  }
  _closeBorderPopover() {
    var _0x5ec21e;
    ((_0x5ec21e = this._borderPopoverDisposable) == null || _0x5ec21e.dispose(),
      (this._borderPopoverDisposable = null),
      (this._borderPopover = null),
      this._setTooltip(null),
      this._makeDirty());
  }
  _ensureFloatingMenuPopup(_0x163a19) {
    let _0xd7371e = ss(
      _0x163a19 ?? this._floatingMenuService["getState"]().anchorRect ?? null,
    );
    (this._floatingMenuPopup &&
      this._floatingMenuPopupAnchorKey === _0xd7371e) ||
      (this._floatingMenuPopup && this._hideFloatingMenuPopup(),
      (this._floatingMenuPopup = this._docCanvasPopManagerService[
        "attachPopupToRect"
      ](
        () =>
          this._floatingMenuService["getState"]().anchorRect ?? {
            bottom: 0,
            left: 0,
            right: 0,
            top: 0,
          },
        {
          componentKey: oa,
          direction: "top-center",
          offset: [0, 8],
          onClickOutside: () => {
            (this._floatingMenuService["hide"](),
              this._hideFloatingMenuPopup());
          },
        },
        this._context["unitId"],
      )),
      (this._floatingMenuPopupAnchorKey = _0xd7371e));
  }
  _hideFloatingMenuPopup() {
    var _0x1cef1e;
    ((_0x1cef1e = this._floatingMenuPopup) == null || _0x1cef1e.dispose(),
      (this._floatingMenuPopup = null),
      (this._floatingMenuPopupAnchorKey = null));
  }
  _applyBorderPreset(_0x17a82e) {
    let _0x152474 = this._borderPopover;
    _0x152474 &&
      (this._selectionService["setStructuralSelection"]({
        kind:
          _0x152474.startRow === _0x152474.endRow &&
          _0x152474.startColumn === _0x152474.endColumn
            ? _0x4f4538.Cell
            : _0x4f4538.Range,
        segmentId: _0x152474.segmentId,
        tableId: _0x152474.tableId,
        startRow: _0x152474.startRow,
        endRow: _0x152474.endRow,
        startColumn: _0x152474.startColumn,
        endColumn: _0x152474.endColumn,
      }),
      this._commandService["executeCommand"](_0xd71e8.id, {
        endColumn: _0x152474.endColumn,
        endRow: _0x152474.endRow,
        preset: _0x17a82e,
        startColumn: _0x152474.startColumn,
        startRow: _0x152474.startRow,
        tableId: _0x152474.tableId,
      }),
      this._closeBorderPopover());
  }
  _consumePointerEvent(_0x3e021b) {
    _0x3e021b &&
      (_0x3e021b.stopPropagation(), (_0x3e021b.skipNextObservers = true));
  }
  _handleTableContextMenuPointerDown(_0x32313b, _0x36035f) {
    var _0x30088d;
    if (_0x32313b.button !== 2) return false;
    let _0xd4fff0 = this._getDocumentPointFromPointerEvent(_0x32313b);
    ((this._lastPointerPoint = _0xd4fff0),
      (this._activeTable =
        this._buildActiveTableAtPoint(_0xd4fff0.x, _0xd4fff0.y) ??
        this._activeTable));
    let _0x4c1aa8 = this._hitTest(_0xd4fff0.x, _0xd4fff0.y),
      _0x264ff3 =
        (_0x4c1aa8 == null ? undefined : _0x4c1aa8.tableId) ??
        ((_0x30088d = this._activeTable) == null
          ? undefined
          : _0x30088d.sourceTableId),
      _0x24694f = this._selectionService["getCurrentSelection"](),
      _0x9262ea = is(_0x4c1aa8);
    if (_0x264ff3 && _0x9262ea) {
      if (!as(_0x24694f, _0x264ff3, _0x9262ea.axis, _0x9262ea.index)) {
        var _0x47e276;
        this._selectionService["setStructuralHeaderSelection"](
          _0x264ff3,
          _0x9262ea.axis,
          _0x9262ea.index,
          _0x9262ea.index,
          {
            clearNativeSelection: true,
            ...((_0x47e276 = this._activeTable) != null && _0x47e276.segmentId
              ? { segmentId: this._activeTable["segmentId"] }
              : {}),
          },
        );
      }
      return (this._openTableContextMenu(_0x32313b, _0x36035f), true);
    }
    let _0x277885 = this._getCellAtPoint(_0xd4fff0.x, _0xd4fff0.y);
    return !_0x277885 || !rs(_0x24694f, _0x277885)
      ? false
      : (this._openTableContextMenu(_0x32313b, _0x36035f), true);
  }
  _openTableContextMenu(_0x5804e8, _0x141653) {
    (this._consumePointerEvent(_0x141653),
      _0x5804e8.preventDefault(),
      this._contextMenuService["triggerContextMenu"](
        _0x5804e8,
        _0x47a65f.MAIN_AREA,
        { unitId: this._context["unitId"] },
      ));
  }
  _executeCommandAndRefreshActiveTable(_0x2fbcd4, _0x7afac1, _0x392246) {
    this._commandService["executeCommand"](_0x2fbcd4, _0x7afac1).then(
      (_0x144160) => {
        _0x144160 && this._scheduleActiveTableRefresh(_0x392246);
      },
    );
  }
  _handleStructuralTriggerPointerDown(_0x26e638, _0x5a733c, _0x877d6d) {
    if (
      _0x26e638.kind === "row-insert-dot" ||
      _0x26e638.kind === "column-insert-dot"
    )
      return (this._handleStructuralInsertTrigger(_0x26e638, _0x877d6d), true);
    if (
      (_0x26e638.kind !== "row-header" || _0x26e638.row == null) &&
      (_0x26e638.kind !== "column-header" || _0x26e638.column == null)
    )
      return false;
    if (
      (this._selectionService["setNativeSelectionSuppressed"](true),
      _0x26e638.kind === "row-header" && _0x26e638.row != null)
    ) {
      var _0x3c2e27, _0x2bb2af;
      return this._isRowHeaderInsertSeamHit(_0x26e638, _0x5a733c)
        ? (this._handleStructuralInsertTrigger(
            { ..._0x26e638, kind: "row-insert-dot" },
            _0x877d6d,
          ),
          true)
        : this._canStartHeaderReorder(_0x26e638)
          ? ((this._pendingHandleSelection = {
              row: _0x26e638.row,
              startX: _0x5a733c.x,
              startY: _0x5a733c.y,
              tableId: _0x877d6d,
              type: "row",
            }),
            true)
          : ((this._headerSelectionDragState = {
              anchorIndex: _0x26e638.row,
              currentIndex: _0x26e638.row,
              ...((_0x3c2e27 = this._activeTable) != null && _0x3c2e27.segmentId
                ? { segmentId: this._activeTable["segmentId"] }
                : {}),
              tableId: _0x877d6d,
              type: "row",
            }),
            this._selectionService["setStructuralHeaderSelection"](
              _0x877d6d,
              "row",
              _0x26e638.row,
              _0x26e638.row,
              {
                clearNativeSelection: true,
                ...((_0x2bb2af = this._activeTable) != null &&
                _0x2bb2af.segmentId
                  ? { segmentId: this._activeTable["segmentId"] }
                  : {}),
              },
            ),
            true);
    }
    if (_0x26e638.kind === "column-header" && _0x26e638.column != null) {
      var _0xb682c1, _0x12eec8;
      return this._canStartHeaderReorder(_0x26e638)
        ? ((this._pendingHandleSelection = {
            column: _0x26e638.column,
            startX: _0x5a733c.x,
            startY: _0x5a733c.y,
            tableId: _0x877d6d,
            type: "column",
          }),
          true)
        : ((this._headerSelectionDragState = {
            anchorIndex: _0x26e638.column,
            currentIndex: _0x26e638.column,
            ...((_0xb682c1 = this._activeTable) != null && _0xb682c1.segmentId
              ? { segmentId: this._activeTable["segmentId"] }
              : {}),
            tableId: _0x877d6d,
            type: "column",
          }),
          this._selectionService["setStructuralHeaderSelection"](
            _0x877d6d,
            "column",
            _0x26e638.column,
            _0x26e638.column,
            {
              clearNativeSelection: true,
              ...((_0x12eec8 = this._activeTable) != null && _0x12eec8.segmentId
                ? { segmentId: this._activeTable["segmentId"] }
                : {}),
            },
          ),
          true);
    }
    return false;
  }
  _updateHeaderSelectionDrag(_0x269bd8) {
    let _0x3fe1a8 = this._headerSelectionDragState;
    if (!_0x3fe1a8) return;
    let _0x247e83 =
      _0x3fe1a8.type === "row"
        ? this._getRowAtY(_0x269bd8.y)
        : this._getColumnAtX(_0x269bd8.x);
    _0x247e83 != null &&
      _0x247e83 !== _0x3fe1a8.currentIndex &&
      ((_0x3fe1a8.currentIndex = _0x247e83),
      this._selectionService["setStructuralHeaderSelection"](
        _0x3fe1a8.tableId,
        _0x3fe1a8.type,
        _0x3fe1a8.anchorIndex,
        _0x247e83,
        {
          clearNativeSelection: true,
          ...(_0x3fe1a8.segmentId ? { segmentId: _0x3fe1a8.segmentId } : {}),
        },
      ),
      this._makeDirty());
  }
  _handleStructuralInsertTrigger(_0x132218, _0x3eee62) {
    if (_0x132218.kind === "row-insert-dot" && _0x132218.row != null) {
      this._executeCommandAndRefreshActiveTable(
        _0x8fd096.id,
        {
          count: 1,
          position: _0x132218.position === "above" ? "above" : "below",
          row: _0x132218.row,
          tableId: _0x3eee62,
        },
        _0x3eee62,
      );
      return;
    }
    _0x132218.kind === "column-insert-dot" &&
      _0x132218.column != null &&
      this._executeCommandAndRefreshActiveTable(
        _0x28a0a7.id,
        {
          column: _0x132218.column,
          count: 1,
          position: _0x132218.position === "left" ? "left" : "right",
          tableId: _0x3eee62,
        },
        _0x3eee62,
      );
  }
  _isRowHeaderInsertSeamHit(_0x5e667e, _0x590298) {
    if (_0x5e667e.kind !== "row-header") return false;
    let _0x523528 = Math.min(
      _0x5e667e.rect["height"],
      Math.max(6 / this._getCurrentZoom(), 4 / this._getCurrentZoom()),
    );
    return (
      _0x590298.y >=
        _0x5e667e.rect["y"] + _0x5e667e.rect["height"] - _0x523528 &&
      _0x590298.y <= _0x5e667e.rect["y"] + _0x5e667e.rect["height"]
    );
  }
  _canStartHeaderReorder(_0x1506fd) {
    let _0x5e43fe = this._selection;
    return !_0x5e43fe ||
      !_0x1506fd.tableId ||
      _0x5e43fe.tableId !== _0x1506fd.tableId
      ? false
      : _0x1506fd.kind === "row-header" && _0x1506fd.row != null
        ? _0x5e43fe.kind === _0x4f4538.Row &&
          _0x5e43fe.startRow === _0x5e43fe.endRow &&
          _0x1506fd.row === _0x5e43fe.startRow
        : _0x1506fd.kind === "column-header" &&
          _0x1506fd.column != null &&
          _0x5e43fe.kind === _0x4f4538.Column &&
          _0x5e43fe.startColumn === _0x5e43fe.endColumn &&
          _0x1506fd.column === _0x5e43fe.startColumn;
  }
  _initCanvasRender() {
    this.disposeWithMe(
      this._context["scene"].afterRender$["subscribe"]((_0x51e273) => {
        var _0x1e91c2;
        if (
          !_0x51e273 ||
          (this._syncViewportStatesFromSkeleton() && this._makeDirty(),
          (_0x1e91c2 = this._selection) != null &&
            _0x1e91c2.tableId &&
            this._syncFloatingMenuFromSelection(),
          !this._activeTable)
        )
          return;
        let _0x3393a6 = _0x51e273.getContext();
        _0x3393a6 && this._draw(_0x3393a6);
      }),
    );
  }
  _buildActiveTable(_0x2614c3) {
    let _0x215d9c = this._findSkeletonTable(
      _0x2614c3.pageIndex,
      _0x2614c3.tableId,
      _0x2614c3.segmentId,
    );
    if (!_0x215d9c) return null;
    let { page: _0x1328e8, table: _0x4f416a } = _0x215d9c,
      _0x4248ae = _0x51cfa2(_0x2614c3.tableId).tableId,
      _0x4a48a5 = Ro(_0x4f416a),
      _0x3c3390 = _0x4f416a.rows["map"]((_0x979ff3) => _0x979ff3.height),
      _0x2a672e = X(_0x4a48a5),
      _0x2faf0f = this._syncViewportState(
        _0x2614c3,
        _0x4248ae,
        _0x1328e8,
        _0x4f416a,
        _0x2a672e,
      );
    return {
      pageIndex: _0x2614c3.pageIndex,
      segmentId: _0x2614c3.segmentId ?? _0x215d9c.segmentId,
      sourceTableId: _0x4248ae,
      tableSliceId: _0x2614c3.tableId,
      input: {
        columnIndices: _0x4a48a5.map((_0x422d91, _0x1b2222) => _0x1b2222),
        columnWidths: _0x4a48a5,
        mergedCells: zo(_0x4f416a),
        rowHeights: _0x3c3390,
        rowIndices: _0x4f416a.rows["map"]((_0x1366e0) => _0x1366e0.index),
        tableId: _0x4248ae,
        tableRect: {
          height: _0x2614c3.rect["bottom"] - _0x2614c3.rect["top"],
          width: _0x2a672e || _0x2614c3.rect["right"] - _0x2614c3.rect["left"],
          x: _0x2614c3.rect["left"],
          y: _0x2614c3.rect["top"],
        },
        viewport: _0x2faf0f,
        zoom: this._getCurrentZoom(),
      },
    };
  }
  _findSkeletonTable(_0x62a037, _0x98bb4e, _0x94b1f7) {
    return (
      this._collectSkeletonTables().find(
        (_0x598462) =>
          _0x598462.pageIndex === _0x62a037 &&
          _0x598462.tableId === _0x98bb4e &&
          (_0x94b1f7 == null || _0x598462.segmentId === _0x94b1f7),
      ) ?? null
    );
  }
  _collectSkeletonTables() {
    let _0x2c6f36 =
        this._docSkeletonManagerService["getSkeleton"]().getSkeletonData(),
      _0x3b55d7 = (_0x2c6f36 == null ? undefined : _0x2c6f36.pages) ?? [],
      _0x502daf = Bo(this._context["mainComponent"]);
    return _0x43738a(_0x3b55d7, {
      docsLeft: _0x502daf.docsLeft,
      docsTop: _0x502daf.docsTop,
      pageMarginTop: _0x502daf.pageMarginTop,
      resolveViewport: false,
      skeFooters: _0x2c6f36 == null ? undefined : _0x2c6f36.skeFooters,
      skeHeaders: _0x2c6f36 == null ? undefined : _0x2c6f36.skeHeaders,
      unitId: this._context["unitId"],
    }).map((_0x2d45d5) => ({
      page: _0x2d45d5.page,
      pageIndex: _0x2d45d5.pageIndex,
      rect: _0x2d45d5.tableRect,
      segmentId: _0x2d45d5.page["segmentId"] ?? "",
      table: _0x2d45d5.table,
      tableId: _0x2d45d5.tableId,
    }));
  }
  _refreshActiveTableViewport(_0x38d1a2) {
    return {
      ..._0x38d1a2,
      input: {
        ..._0x38d1a2.input,
        viewport: this._getOrCreateViewportState(
          this._context["unitId"],
          _0x38d1a2.sourceTableId,
        ),
        zoom: this._getCurrentZoom(),
      },
    };
  }
  _getOrCreateViewportState(_0x44239d, _0x10bef5) {
    let _0x4edcf1 = this._viewportService["getState"](_0x44239d, _0x10bef5);
    return _0x44239d !== this._context["unitId"] || _0x4edcf1
      ? _0x4edcf1
      : this._syncViewportStateForSourceTable(_0x10bef5);
  }
  _syncViewportStatesFromSkeleton() {
    let _0x21767f = false,
      _0x1884f1 = new Set();
    for (let _0x4f687f of this._collectSkeletonTables()) {
      let _0x19d9a5 = _0x51cfa2(_0x4f687f.tableId).tableId;
      _0x1884f1.add(_0x19d9a5);
      let _0x3c2e52 = X(Ro(_0x4f687f.table)),
        _0x2337a6 = this._viewportService["getState"](
          this._context["unitId"],
          _0x19d9a5,
        ),
        _0x32ea67 = this._syncViewportState(
          {
            pageIndex: _0x4f687f.pageIndex,
            rect: _0x4f687f.rect,
            tableId: _0x4f687f.tableId,
          },
          _0x19d9a5,
          _0x4f687f.page,
          _0x4f687f.table,
          _0x3c2e52,
        ),
        _0x1029a4 = this._activeTable;
      (_0x1029a4 &&
        _0x1029a4.sourceTableId === _0x19d9a5 &&
        _0x1029a4.tableSliceId === _0x4f687f.tableId &&
        _0x1029a4.segmentId === _0x4f687f.segmentId &&
        (this._activeTable = {
          ..._0x1029a4,
          input: {
            ..._0x1029a4.input,
            viewport: _0x32ea67,
            zoom: this._getCurrentZoom(),
          },
        }),
        (_0x21767f ||= Qo(_0x2337a6, _0x32ea67)));
    }
    for (let _0x3ee863 of this._knownTableIds)
      _0x1884f1.has(_0x3ee863) ||
        (this._viewportService["clear"](this._context["unitId"], _0x3ee863),
        (_0x21767f = true));
    return ((this._knownTableIds = _0x1884f1), _0x21767f);
  }
  _syncViewportStateForSourceTable(_0x24e63b) {
    let _0x228551 = this._findTableSliceForSource(_0x24e63b);
    if (!_0x228551) return;
    let _0x35439d = this._findSkeletonTable(
      _0x228551.pageIndex,
      _0x228551.tableId,
      _0x228551.segmentId,
    );
    if (_0x35439d)
      return this._syncViewportState(
        _0x228551,
        _0x24e63b,
        _0x35439d.page,
        _0x35439d.table,
        X(Ro(_0x35439d.table)),
      );
  }
  _syncViewportState(_0x2b9ebb, _0x272dd8, _0x99bd5f, _0x2693d1, _0x542389) {
    return this._viewportService["setViewport"](
      this._context["unitId"],
      _0x272dd8,
      this._buildViewportState(
        _0x2b9ebb,
        _0x99bd5f,
        _0x2693d1,
        _0x542389,
        this._getCurrentZoom(),
      ),
    );
  }
  _scheduleActiveTableRefresh(_0x23e605) {
    (this._activeTableRefreshTimer != null &&
      clearTimeout(this._activeTableRefreshTimer),
      this._refreshActiveTableFromSkeleton(_0x23e605),
      (this._activeTableRefreshTimer = setTimeout(() => {
        ((this._activeTableRefreshTimer = null),
          this._refreshActiveTableFromSkeleton(_0x23e605));
      }, 32)));
  }
  _refreshActiveTableForLayoutChange() {
    let _0x198558 = this._activeTable;
    if (_0x198558) {
      if (this._lastPointerPoint) {
        let _0x220867 = this._buildActiveTableAtPoint(
          this._lastPointerPoint["x"],
          this._lastPointerPoint["y"],
        );
        if (_0x220867) {
          ((this._activeTable = _0x220867), this._makeDirty());
          return;
        }
      }
      this._refreshActiveTableFromSkeleton(_0x198558.sourceTableId);
    }
  }
  _refreshActiveTableFromSkeleton(_0x291184) {
    let _0x5f3593 = this._findTableSliceForSource(_0x291184);
    if (!_0x5f3593) {
      var _0x44816a;
      ((_0x44816a = this._activeTable) == null
        ? undefined
        : _0x44816a.sourceTableId) === _0x291184 &&
        ((this._activeTable = null), this._makeDirty());
      return;
    }
    ((this._activeTable = this._buildActiveTable(_0x5f3593)),
      this._makeDirty());
  }
  _findTableSliceForSource(_0x38b1e9) {
    let _0x242248 = [];
    for (let _0x1f958a of this._collectSkeletonTables())
      _0x51cfa2(_0x1f958a.tableId).tableId === _0x38b1e9 &&
        _0x242248.push({
          pageIndex: _0x1f958a.pageIndex,
          rect: _0x1f958a.rect,
          segmentId: _0x1f958a.segmentId,
          tableId: _0x1f958a.tableId,
        });
    return (
      _0x242248.find((_0x1069a5) => {
        var _0xf5c85e;
        return (
          _0x1069a5.tableId ===
          ((_0xf5c85e = this._activeTable) == null
            ? undefined
            : _0xf5c85e.tableSliceId)
        );
      }) ??
      (this._lastPointerPoint
        ? _0x242248.find((_0x1dcc6d) =>
            this._isPointInTableControlRect(
              _0x1dcc6d,
              this._lastPointerPoint["x"],
              this._lastPointerPoint["y"],
            ),
          )
        : null) ??
      _0x242248[0] ??
      null
    );
  }
  _isSourceTableSplitAcrossPages(_0x442f74) {
    let _0x36f3e9 = 0;
    for (let _0xd94dff of this._collectSkeletonTables())
      if (
        _0x51cfa2(_0xd94dff.tableId).tableId === _0x442f74 &&
        (_0x36f3e9++, _0x36f3e9 > 1)
      )
        return true;
    return false;
  }
  _isPointInTableControlRect(_0x55c08b, _0x41363a, _0x575306) {
    let _0x409a78 = this._findSkeletonTable(
      _0x55c08b.pageIndex,
      _0x55c08b.tableId,
      _0x55c08b.segmentId,
    );
    if (!_0x409a78) return false;
    let _0x14750e = this._getCurrentZoom(),
      _0x14de77 = Ro(_0x409a78.table).reduce(
        (_0x4fec05, _0x57f15c) => _0x4fec05 + _0x57f15c,
        0,
      ),
      _0x6bd2ac = this._buildViewportState(
        _0x55c08b,
        _0x409a78.page,
        _0x409a78.table,
        _0x14de77,
        _0x14750e,
      ),
      _0x289b1d = {
        bottom: _0x55c08b.rect["bottom"],
        left: _0x6bd2ac.viewportLeft - 16 / _0x14750e,
        right: _0x6bd2ac.viewportLeft + _0x6bd2ac.viewportWidth,
        top: _0x55c08b.rect["top"] - 22 / _0x14750e,
      };
    if (
      _0x41363a >= _0x289b1d.left &&
      _0x41363a <= _0x289b1d.right &&
      _0x575306 >= _0x289b1d.top &&
      _0x575306 <= _0x289b1d.bottom
    )
      return true;
    let _0x5701a1 = Ha({
      contentWidth: _0x14de77,
      leadingInsetLeft: _0x6bd2ac.leadingInsetLeft,
      overflowWidthThreshold: _0x6bd2ac.overflowWidthThreshold,
      scrollLeft: 0,
      tableRect: {
        height: _0x55c08b.rect["bottom"] - _0x55c08b.rect["top"],
        width: _0x55c08b.rect["right"] - _0x55c08b.rect["left"],
        x: _0x55c08b.rect["left"],
        y: _0x55c08b.rect["top"],
      },
      trailingInsetRight: _0x6bd2ac.trailingInsetRight,
      viewportLeft: _0x6bd2ac.viewportLeft,
      viewportWidth: _0x6bd2ac.viewportWidth,
      zoom: _0x14750e,
    });
    return (
      !!_0x5701a1 &&
      Wa(_0x5701a1, _0x55c08b.rect["bottom"], _0x41363a, _0x575306)
    );
  }
  _buildActiveTableAtPoint(_0x593d17, _0x29f30d) {
    for (let _0x4f3e75 of this._collectSkeletonTables())
      if (
        this._isPointInTableControlRect(
          {
            pageIndex: _0x4f3e75.pageIndex,
            rect: _0x4f3e75.rect,
            segmentId: _0x4f3e75.segmentId,
            tableId: _0x4f3e75.tableId,
          },
          _0x593d17,
          _0x29f30d,
        )
      )
        return this._buildActiveTable({
          pageIndex: _0x4f3e75.pageIndex,
          rect: _0x4f3e75.rect,
          segmentId: _0x4f3e75.segmentId,
          tableId: _0x4f3e75.tableId,
        });
    return null;
  }
  _buildTableMoveHitAtPoint(_0x14788c, _0x32cad5) {
    return null;
  }
  _hitTest(_0x381723, _0x2bd985) {
    if (!this._canEditDocument() || !this._activeTable) return null;
    let _0x4e99bb = Za(this._getTriggerInput()),
      _0x3815fd = go(_0x4e99bb, _0x381723, _0x2bd985);
    return (_0x3815fd == null ? undefined : _0x3815fd.kind) ===
      "resize-column" ||
      (_0x3815fd == null ? undefined : _0x3815fd.kind) === "resize-row"
      ? _0x3815fd
      : (vo(_0x4e99bb, _0x381723, _0x2bd985) ?? _0x3815fd);
  }
  _hitTestHoverTrigger(_0xa4408f, _0x343ca2) {
    if (!this._canEditDocument() || !this._activeTable) return null;
    let _0x465ebf = Za(this._getTriggerInput()),
      _0x10d7f7 = go(_0x465ebf, _0xa4408f, _0x343ca2);
    return (_0x10d7f7 == null ? undefined : _0x10d7f7.kind) ===
      "resize-column" ||
      (_0x10d7f7 == null ? undefined : _0x10d7f7.kind) === "resize-row"
      ? _0x10d7f7
      : (_o(_0x465ebf, _0xa4408f, _0x343ca2) ?? _0x10d7f7);
  }
  _hitScrollbar(_0x24c25d, _0x4bc40c) {
    let _0x199ec1 = this._getScrollbarGeometry();
    return _0x199ec1 ? Ua(_0x199ec1, _0x24c25d, _0x4bc40c) : null;
  }
  _getScrollbarGeometry() {
    return this._buildScrollbarGeometry(this._getScrollbarAppearance());
  }
  _buildScrollbarGeometry(_0x5f4885) {
    if (!this._activeTable) return null;
    let _0x2bd381 = this._viewportService["getState"](
      this._context["unitId"],
      this._activeTable["sourceTableId"],
    );
    return _0x2bd381
      ? Ha({
          appearance: _0x5f4885,
          contentWidth: _0x2bd381.contentWidth,
          leadingInsetLeft: _0x2bd381.leadingInsetLeft,
          overflowWidthThreshold: _0x2bd381.overflowWidthThreshold,
          scrollLeft: _0x2bd381.scrollLeft,
          tableRect: Y(this._activeTable["input"]),
          trailingInsetRight: _0x2bd381.trailingInsetRight,
          viewportLeft: _0x2bd381.viewportLeft,
          viewportWidth: _0x2bd381.viewportWidth,
          zoom: this._getCurrentZoom(),
        })
      : null;
  }
  _getScrollbarAppearance() {
    if (this._scrollbarDragState) return "active";
    if (!this._lastPointerPoint) return "idle";
    let _0x49cf87 = this._buildScrollbarGeometry("idle");
    return _0x49cf87 &&
      Ua(_0x49cf87, this._lastPointerPoint["x"], this._lastPointerPoint["y"])
      ? "hover"
      : "idle";
  }
  _startOrJumpScrollbar(_0x11a14b, _0x11e95d) {
    if (!this._activeTable) return;
    let _0x57e962 = this._getScrollbarGeometry();
    if (!_0x57e962) return;
    let _0x29936b = this._activeTable["sourceTableId"],
      _0x132e67 = this._viewportService["getState"](
        this._context["unitId"],
        _0x29936b,
      );
    if (!_0x132e67) return;
    if (_0x11a14b === "thumb") {
      ((this._scrollbarDragState = {
        startScrollLeft: _0x132e67.scrollLeft,
        startX: _0x11e95d,
        tableId: _0x29936b,
        thumbTravel: Math.max(
          0,
          _0x57e962.track["width"] - _0x57e962.thumb["width"],
        ),
      }),
        this._setTableCursor(_0x43cf02.POINTER),
        this._makeDirty());
      return;
    }
    let _0x95bc72 = _0x11e95d < _0x57e962.thumb["x"] ? -1 : 1,
      _0x241fdf = _0x132e67.scrollLeft,
      _0xe4379a = this._viewportService["setScrollLeft"](
        this._context["unitId"],
        _0x29936b,
        _0x132e67.scrollLeft + _0x95bc72 * _0x132e67.viewportWidth,
      );
    ((this._activeTable = this._refreshActiveTableViewport(this._activeTable)),
      _0xe4379a !== _0x241fdf &&
        (this._refreshNativeSelection(), this._makeDirty()));
  }
  _updateScrollbarDrag(_0x48a334) {
    var _0x37610c, _0x5a9965, _0x58c3fe;
    let _0xfb33ad = this._scrollbarDragState;
    if (!_0xfb33ad) return;
    let _0x5d8da2 =
      ((_0x37610c = this._viewportService["getState"](
        this._context["unitId"],
        _0xfb33ad.tableId,
      )) == null
        ? undefined
        : _0x37610c.scrollLeft) ?? 0;
    (this._viewportService["setScrollLeft"](
      this._context["unitId"],
      _0xfb33ad.tableId,
      _0xfb33ad.startScrollLeft,
    ),
      this._viewportService["scrollByScrollbarTravel"](
        this._context["unitId"],
        _0xfb33ad.tableId,
        _0x48a334 - _0xfb33ad.startX,
        _0xfb33ad.thumbTravel,
      ),
      ((_0x5a9965 = this._activeTable) == null
        ? undefined
        : _0x5a9965.sourceTableId) === _0xfb33ad.tableId &&
        (this._activeTable = this._refreshActiveTableViewport(
          this._activeTable,
        )),
      (((_0x58c3fe = this._viewportService["getState"](
        this._context["unitId"],
        _0xfb33ad.tableId,
      )) == null
        ? undefined
        : _0x58c3fe.scrollLeft) ?? 0) !== _0x5d8da2 &&
        this._refreshNativeSelection());
  }
  _updateSelectionDrag(_0xcc1943) {
    let _0x45260f = this._selectionDragState;
    if (
      !_0x45260f ||
      (!_0x45260f.structural &&
        Math.hypot(
          _0xcc1943.x - _0x45260f.startX,
          _0xcc1943.y - _0x45260f.startY,
        ) < 4)
    )
      return false;
    let _0x4f0d5a = this._getCellAtPoint(_0xcc1943.x, _0xcc1943.y);
    if (
      !_0x4f0d5a ||
      _0x4f0d5a.tableId !== _0x45260f.tableId ||
      (!_0x45260f.structural &&
        _0x4f0d5a.row === _0x45260f.anchorRow &&
        _0x4f0d5a.column === _0x45260f.anchorColumn)
    )
      return false;
    let _0x236d1e = Math.min(_0x45260f.anchorRow, _0x4f0d5a.row),
      _0x4e82ca = Math.max(_0x45260f.anchorRow, _0x4f0d5a.row),
      _0x800445 = Math.min(_0x45260f.anchorColumn, _0x4f0d5a.column),
      _0x2e5fa1 = Math.max(_0x45260f.anchorColumn, _0x4f0d5a.column),
      _0x3a276a = !_0x45260f.structural;
    return (
      (_0x45260f.structural = true),
      _0x3a276a && this._docSelectionRenderService["cancelPointerSelection"](),
      this._selectionService["setNativeSelectionSuppressed"](true),
      this._selectionService["setStructuralSelection"](
        {
          kind:
            _0x236d1e === _0x4e82ca && _0x800445 === _0x2e5fa1
              ? _0x4f4538.Cell
              : _0x4f4538.Range,
          segmentId: _0x45260f.segmentId,
          tableId: _0x45260f.tableId,
          startRow: _0x236d1e,
          endRow: _0x4e82ca,
          startColumn: _0x800445,
          endColumn: _0x2e5fa1,
        },
        { clearNativeSelection: true, preserveOnTextSelection: true },
      ),
      this._makeDirty(),
      true
    );
  }
  _updateSelectionDragAutoScroll(_0x267c42) {
    let _0x289670 = this._selectionDragState;
    if (
      !_0x289670 ||
      ((!this._activeTable ||
        this._activeTable["sourceTableId"] !== _0x289670.tableId) &&
        (this._activeTable =
          this._buildActiveTableAtPoint(_0x267c42.x, _0x267c42.y) ??
          this._activeTable),
      !this._activeTable ||
        this._activeTable["sourceTableId"] !== _0x289670.tableId)
    )
      return false;
    let _0x1b9d5f = Y(this._activeTable["input"]);
    return _0x267c42.y < _0x1b9d5f.y ||
      _0x267c42.y > _0x1b9d5f.y + _0x1b9d5f.height ||
      !this._viewportService["scrollByDragEdge"](
        this._context["unitId"],
        _0x289670.tableId,
        _0x267c42.x - _0x1b9d5f.x,
        32 / this._getCurrentZoom(),
        24 / this._getCurrentZoom(),
      )
      ? false
      : ((this._activeTable = this._refreshActiveTableViewport(
          this._activeTable,
        )),
        this._refreshNativeSelection(),
        this._makeDirty(),
        this._scheduleSelectionDragAutoScroll(),
        true);
  }
  _scheduleSelectionDragAutoScroll() {
    this._selectionAutoScrollTimer ??= setTimeout(() => {
      ((this._selectionAutoScrollTimer = null),
        !(!this._selectionDragState || !this._lastPointerPoint) &&
          this._updateSelectionDragAutoScroll(this._lastPointerPoint));
    }, 16);
  }
  _stopSelectionDragAutoScroll() {
    this._selectionAutoScrollTimer != null &&
      (clearTimeout(this._selectionAutoScrollTimer),
      (this._selectionAutoScrollTimer = null));
  }
  _refreshNativeSelection() {
    this._docSelectionManagerService["refreshSelection"]();
  }
  _syncFloatingMenuFromSelection() {
    let _0x1f05c1 = this._selection;
    if (
      !(_0x1f05c1 != null && _0x1f05c1.tableId) ||
      !this._canEditDocument(_0x1f05c1.tableId) ||
      !ns(_0x1f05c1)
    ) {
      (this._floatingMenuService["hide"](), this._hideFloatingMenuPopup());
      return;
    }
    let _0x5b0be8 = os(_0x1f05c1)
        ? this._getStructuralFloatingMenuAnchorRect(_0x1f05c1)
        : this._getFloatingMenuAnchorRect(_0x1f05c1),
      _0x291691 = this._getFloatingMenuAnchorRect(_0x1f05c1);
    if (!_0x5b0be8 || !_0x291691) {
      (this._floatingMenuService["hide"](), this._hideFloatingMenuPopup());
      return;
    }
    let _0xfecf84 =
        _0x1f05c1.kind === _0x4f4538.Row
          ? "row"
          : _0x1f05c1.kind === _0x4f4538.Column
            ? "column"
            : null,
      _0x1162dd = this._resolveFloatingMenuTextStyle(_0x1f05c1),
      _0xe0bd4c = this._resolveFloatingMenuVerticalAlign(_0x1f05c1);
    (this._floatingMenuService["setState"]({
      anchorRect: _0x5b0be8,
      selection: {
        endColumn: _0x1f05c1.endColumn,
        endRow: _0x1f05c1.endRow,
        startColumn: _0x1f05c1.startColumn,
        startRow: _0x1f05c1.startRow,
        tableId: _0x1f05c1.tableId,
      },
      mergeAction: this._resolveFloatingMenuMergeAction(_0x1f05c1),
      selectionKind: _0x1f05c1.kind,
      selectionRect: _0x291691,
      showDeleteAction: _0xfecf84 != null,
      tableId: _0x1f05c1.tableId,
      topLeftCell: {
        column: Math.min(_0x1f05c1.startColumn, _0x1f05c1.endColumn),
        row: Math.min(_0x1f05c1.startRow, _0x1f05c1.endRow),
      },
      verticalAlign: _0xe0bd4c,
      typeIcon: _0x1162dd.icon,
      typeValue: _0x1162dd.value,
      unitId: this._context["unitId"],
      visible: true,
      deleteTarget: _0xfecf84,
    }),
      this._ensureFloatingMenuPopup(_0x5b0be8));
  }
  _canEditDocument(
    _0x29cfb0 = (() => {
      var _0x18e0fe;
      return (_0x18e0fe = this._activeTable) == null
        ? undefined
        : _0x18e0fe.sourceTableId;
    })(),
  ) {
    return _0xb83fc1(
      this._permissionService,
      this._context["unitId"],
      _0x29cfb0
        ? [
            ..._0x3d0592(this._context["unit"], "", "table", _0x29cfb0),
            _0x525d11("", "table", _0x29cfb0),
          ]
        : [],
    );
  }
  _syncParagraphTableMenuFromActiveTable() {
    let _0x50b87d = this._activeTable;
    if (!_0x50b87d) return;
    let _0x3fb5f4 = Y(_0x50b87d.input);
    this._docParagraphMenuService["showTableMenu"]({
      pageIndex: _0x50b87d.pageIndex,
      rect: {
        bottom: _0x3fb5f4.y + _0x3fb5f4.height,
        left: _0x3fb5f4.x,
        right: _0x3fb5f4.x + _0x3fb5f4.width,
        top: _0x3fb5f4.y,
      },
      tableId: _0x50b87d.sourceTableId,
    });
  }
  _setHoveredTrigger(_0xb5f735) {
    this._isSameTrigger(this._hoveredTrigger, _0xb5f735) ||
      ((this._hoveredTrigger = _0xb5f735), this._makeDirty());
  }
  _setTooltip(_0x2c2113) {
    var _0x33a568, _0x28c4c0, _0x185e49;
    (((_0x33a568 = this._tooltip) == null ? undefined : _0x33a568.label) !==
      (_0x2c2113 == null ? undefined : _0x2c2113.label) ||
      ((_0x28c4c0 = this._tooltip) == null ? undefined : _0x28c4c0.x) !==
        (_0x2c2113 == null ? undefined : _0x2c2113.x) ||
      ((_0x185e49 = this._tooltip) == null ? undefined : _0x185e49.y) !==
        (_0x2c2113 == null ? undefined : _0x2c2113.y)) &&
      ((this._tooltip = _0x2c2113), this._makeDirty());
  }
  _shouldKeepActiveTableForControls() {
    return this._shouldKeepActiveTableForFloatingMenu()
      ? true
      : !this._activeTable || !this._lastPointerPoint
        ? false
        : this._isPointWithinStructuralControlZone(
            this._lastPointerPoint["x"],
            this._lastPointerPoint["y"],
          );
  }
  _isPointInActiveControlZone(_0x470b53, _0x2a047b) {
    return this._isPointWithinStructuralControlZone(_0x470b53, _0x2a047b);
  }
  _isPointWithinStructuralControlZone(_0x2bac3a, _0x88e390) {
    var _0x200000, _0x2dcf4a;
    if (!this._activeTable) return false;
    let _0x49c9eb = this._activeTable["input"],
      _0x56c34b =
        ((_0x200000 = this._context) == null ||
        (_0x200000 = _0x200000.scene) == null ||
        (_0x2dcf4a = _0x200000.getAncestorScale) == null
          ? undefined
          : _0x2dcf4a.call(_0x200000).scaleX) ||
        _0x49c9eb.zoom ||
        1,
      _0xccd48d = Y(_0x49c9eb),
      _0x17c7bc = qo(_0x49c9eb),
      _0xd1748f = Jo(_0x49c9eb);
    if (
      Z(
        {
          x: _0x17c7bc - 16 / _0x56c34b,
          y: _0xccd48d.y - 16 / _0x56c34b,
          width: Math.max(0, _0xd1748f - _0x17c7bc) + 16 / _0x56c34b,
          height: _0xccd48d.height + 16 / _0x56c34b,
        },
        _0x2bac3a,
        _0x88e390,
      )
    )
      return true;
    let _0x56d15d = this._getScrollbarGeometry();
    return (
      !!_0x56d15d &&
      Wa(_0x56d15d, _0xccd48d.y + _0xccd48d.height, _0x2bac3a, _0x88e390)
    );
  }
  _shouldKeepActiveTableForSelection() {
    let _0x1154cb = this._selection;
    return (
      !!this._activeTable &&
      !!(_0x1154cb != null && _0x1154cb.tableId) &&
      _0x1154cb.tableId === this._activeTable["sourceTableId"] &&
      (_0x1154cb.kind === _0x4f4538.Row ||
        _0x1154cb.kind === _0x4f4538.Column ||
        _0x1154cb.kind === _0x4f4538.Table ||
        ns(_0x1154cb))
    );
  }
  _shouldKeepActiveTableForFloatingMenu() {
    if (!this._activeTable) return false;
    let _0x347e60 = this._floatingMenuService["getState"]();
    return (
      (!!(_0x347e60 != null && _0x347e60.visible) ||
        !!(_0x347e60 != null && _0x347e60.hoverActive)) &&
      !!_0x347e60.tableId &&
      _0x347e60.tableId === this._activeTable["sourceTableId"]
    );
  }
  _shouldKeepActiveTableOnPointerLeave() {
    return (
      this._shouldKeepActiveTableForSelection() ||
      this._shouldKeepActiveTableForControls()
    );
  }
  _isSameTrigger(_0x1792ee, _0x369886) {
    return (
      (_0x1792ee == null ? undefined : _0x1792ee.kind) ===
        (_0x369886 == null ? undefined : _0x369886.kind) &&
      (_0x1792ee == null ? undefined : _0x1792ee.tableId) ===
        (_0x369886 == null ? undefined : _0x369886.tableId) &&
      (_0x1792ee == null ? undefined : _0x1792ee.row) ===
        (_0x369886 == null ? undefined : _0x369886.row) &&
      (_0x1792ee == null ? undefined : _0x1792ee.column) ===
        (_0x369886 == null ? undefined : _0x369886.column) &&
      (_0x1792ee == null ? undefined : _0x1792ee.position) ===
        (_0x369886 == null ? undefined : _0x369886.position)
    );
  }
  _getTriggerInitialSize(_0x4ae145) {
    var _0x280a7c;
    if (!this._activeTable) return null;
    let { input: _0x132d3f } = this._activeTable;
    if (_0x4ae145.kind === "resize-column") {
      var _0x234b22;
      let _0x243429 =
        ((_0x234b22 = _0x132d3f.columnIndices) == null
          ? undefined
          : _0x234b22.findIndex(
              (_0x3d7752) => _0x3d7752 === _0x4ae145.column,
            )) ?? _0x4ae145.column;
      return _0x243429 == null ? null : _0x132d3f.columnWidths[_0x243429];
    }
    let _0x2be4c4 =
      ((_0x280a7c = _0x132d3f.rowIndices) == null
        ? undefined
        : _0x280a7c.findIndex((_0x8844f) => _0x8844f === _0x4ae145.row)) ??
      _0x4ae145.row;
    return _0x2be4c4 == null ? null : _0x132d3f.rowHeights[_0x2be4c4];
  }
  _selectTable(_0x269bc9) {
    var _0x523d83, _0x3a4668, _0x220dd0, _0x3c548c;
    if (!this._activeTable) return;
    let { input: _0x2d2bda } = this._activeTable;
    this._selectionService["setStructuralSelection"]({
      kind: _0x4f4538.Table,
      segmentId: this._activeTable["segmentId"],
      tableId: _0x269bc9,
      startRow:
        ((_0x523d83 = _0x2d2bda.rowIndices) == null
          ? undefined
          : _0x523d83[0]) ?? 0,
      endRow:
        ((_0x3a4668 = _0x2d2bda.rowIndices) == null
          ? undefined
          : _0x3a4668[_0x2d2bda.rowIndices["length"] - 1]) ??
        _0x2d2bda.rowHeights["length"] - 1,
      startColumn:
        ((_0x220dd0 = _0x2d2bda.columnIndices) == null
          ? undefined
          : _0x220dd0[0]) ?? 0,
      endColumn:
        ((_0x3c548c = _0x2d2bda.columnIndices) == null
          ? undefined
          : _0x3c548c[_0x2d2bda.columnIndices["length"] - 1]) ??
        _0x2d2bda.columnWidths["length"] - 1,
    });
  }
  _selectRow(_0x14674a, _0xa7481b) {
    var _0x3bd53f, _0x3572fb;
    if (!this._activeTable) return;
    let { input: _0x15e795 } = this._activeTable;
    this._selectionService["setStructuralSelection"]({
      kind: _0x4f4538.Row,
      segmentId: this._activeTable["segmentId"],
      tableId: _0x14674a,
      startRow: _0xa7481b,
      endRow: _0xa7481b,
      startColumn:
        ((_0x3bd53f = _0x15e795.columnIndices) == null
          ? undefined
          : _0x3bd53f[0]) ?? 0,
      endColumn:
        ((_0x3572fb = _0x15e795.columnIndices) == null
          ? undefined
          : _0x3572fb[_0x15e795.columnIndices["length"] - 1]) ??
        _0x15e795.columnWidths["length"] - 1,
    });
  }
  _selectColumn(_0xbac63e, _0x180500) {
    var _0x6c8445, _0x23d623;
    if (!this._activeTable) return;
    let { input: _0x45e463 } = this._activeTable;
    this._selectionService["setStructuralSelection"]({
      kind: _0x4f4538.Column,
      segmentId: this._activeTable["segmentId"],
      tableId: _0xbac63e,
      startRow:
        ((_0x6c8445 = _0x45e463.rowIndices) == null
          ? undefined
          : _0x6c8445[0]) ?? 0,
      endRow:
        ((_0x23d623 = _0x45e463.rowIndices) == null
          ? undefined
          : _0x23d623[_0x45e463.rowIndices["length"] - 1]) ??
        _0x45e463.rowHeights["length"] - 1,
      startColumn: _0x180500,
      endColumn: _0x180500,
    });
  }
  _setResizeCursor(_0x224bfa) {
    this._setTableCursor(
      _0x224bfa.kind === "resize-column" ? "ew-resize" : "ns-resize",
    );
  }
  _getTriggerInput() {
    return {
      ...this._getActiveInputWithCurrentZoom(),
      hoverCell: this._hoverCell ?? null,
      hoverColumn: this._hoverColumn ?? null,
      hoverRow: this._hoverRow ?? null,
      zoom: this._getCurrentZoom(),
    };
  }
  _getActiveInputWithCurrentZoom() {
    return { ...this._activeTable["input"], zoom: this._getCurrentZoom() };
  }
  _getCurrentZoom() {
    return this._context["scene"].getAncestorScale().scaleX || 1;
  }
  _setTableCursor(_0x471dde) {
    ((this._cursorBeforeTableInteraction ??=
      this._context["scene"].getCursor()),
      this._context["scene"].setCursor(_0x471dde));
  }
  _restoreTableCursor() {
    this._cursorBeforeTableInteraction != null &&
      (this._context["scene"].setCursor(this._cursorBeforeTableInteraction),
      (this._cursorBeforeTableInteraction = null));
  }
  _resetTableCursor() {
    ((this._cursorBeforeTableInteraction = null),
      this._context["scene"].resetCursor());
  }
  _shouldPreserveFloatingHover(_0x3e1072, _0x2b04e3) {
    return this._activeTable
      ? xo(Za(this._getTriggerInput()), _0x3e1072, _0x2b04e3) ||
        this._isPointWithinFloatingMenuHoverBridge(_0x3e1072, _0x2b04e3) ||
        (this._borderPopover &&
          Z(cs(this._borderPopover), _0x3e1072, _0x2b04e3))
        ? true
        : this._sortPopover != null &&
          Z(ls(this._sortPopover), _0x3e1072, _0x2b04e3)
      : false;
  }
  _isPointWithinFloatingMenuHoverBridge(_0x4661fe, _0x39bf03) {
    if (!this._activeTable) return false;
    let _0x2d7961 = this._floatingMenuService["getState"]();
    if (
      !(_0x2d7961 != null && _0x2d7961.visible) ||
      !_0x2d7961.anchorRect ||
      _0x2d7961.tableId !== this._activeTable["sourceTableId"]
    )
      return false;
    let _0x467b00 = this._getCurrentZoom(),
      _0x5ad061 = 16 / _0x467b00,
      _0x526b04 = Y(this._activeTable["input"]),
      _0x2896ba = qo(this._activeTable["input"]),
      _0x58a039 = Jo(this._activeTable["input"]),
      _0x34e048 = Math.min(_0x2d7961.anchorRect["left"], _0x2896ba) - _0x5ad061,
      _0x1bb4be =
        Math.max(_0x2d7961.anchorRect["right"], _0x58a039) + _0x5ad061,
      _0x3a2a68 =
        Math.min(_0x2d7961.anchorRect["top"], _0x526b04.y - 16 / _0x467b00) -
        _0x5ad061,
      _0x4bdd5e = _0x526b04.y;
    return (
      _0x4661fe >= _0x34e048 &&
      _0x4661fe <= _0x1bb4be &&
      _0x39bf03 >= _0x3a2a68 &&
      _0x39bf03 <= _0x4bdd5e
    );
  }
  _getTableDropTargetAtPoint(_0x5d9141, _0x6c8322) {
    return wa(
      Array.from(
        this._docEventManagerService["paragraphBounds"].values(),
      ).flatMap((_0x27b3b1) => {
        var _0x2c10f3;
        return (
          (_0x2c10f3 = _0x27b3b1.rects) != null && _0x2c10f3.length
            ? _0x27b3b1.rects
            : [_0x27b3b1.rect]
        ).map((_0x4a2be0) => ({
          paragraphEnd: _0x27b3b1.paragraphEnd,
          paragraphStart: _0x27b3b1.paragraphStart,
          rect: _0x4a2be0,
        }));
      }),
      { x: _0x5d9141, y: _0x6c8322 },
    );
  }
  _draw(_0x3fa81a) {
    var _0x2b43bf;
    if (!this._activeTable) return;
    if (!this._canEditDocument()) {
      (_0x3fa81a.save(),
        this._drawSelection(_0x3fa81a),
        this._drawScrollbar(_0x3fa81a),
        _0x3fa81a.restore());
      return;
    }
    let _0xeec962 = Za(this._getTriggerInput());
    (_0x3fa81a.save(), this._drawStructuralHeaderBands(_0x3fa81a));
    for (let _0x3b79e3 of _0xeec962)
      lo(_0x3b79e3.kind)
        ? this._drawInsertTrigger(_0x3fa81a, _0x3b79e3)
        : _0x3b79e3.kind === "row-header" || _0x3b79e3.kind === "column-header"
          ? this._drawStructuralHeaderTrigger(_0x3fa81a, _0x3b79e3)
          : _0x3b79e3.kind === "table-select" &&
            this._drawTableSelectTrigger(_0x3fa81a, _0x3b79e3);
    (this._drawSelection(_0x3fa81a),
      this._drawMovePreview(_0x3fa81a),
      this._drawSortPopover(_0x3fa81a),
      this._drawTooltip(_0x3fa81a));
    let _0x570f93 =
      ((_0x2b43bf = this._dragState) == null ? undefined : _0x2b43bf.trigger) ??
      this._hoveredTrigger;
    (((_0x570f93 == null ? undefined : _0x570f93.kind) === "resize-column" ||
      (_0x570f93 == null ? undefined : _0x570f93.kind) === "resize-row") &&
      this._drawResizeGuide(_0x3fa81a, _0x570f93, this._dragState ? 0.9 : 0),
      this._drawScrollbar(_0x3fa81a),
      _0x3fa81a.restore());
  }
  _drawStructuralHeaderBands(_0x43eb5a) {
    if (!this._activeTable) return;
    let _0x561a0f = this._getTriggerInput(),
      _0x33f556 = 10 / (_0x561a0f.zoom ?? 1),
      _0x5915ca = Y(_0x561a0f),
      _0x232256 = qo(_0x561a0f),
      _0x4f5173 = Jo(_0x561a0f),
      _0x2a0475 = J(
        {
          x: _0x232256,
          y: _0x561a0f.tableRect["y"] - _0x33f556,
          width: Math.max(0, _0x4f5173 - _0x232256),
          height: _0x33f556,
        },
        this._context["scene"],
      ),
      _0x196fb5 = J(
        {
          x: _0x232256 - _0x33f556,
          y: _0x561a0f.tableRect["y"],
          width: _0x33f556,
          height: _0x5915ca.height,
        },
        this._context["scene"],
      );
    (_0x43eb5a.save(),
      (_0x43eb5a.fillStyle = "#f5f6f7"),
      _0x43eb5a.fillRect(
        _0x2a0475.x,
        _0x2a0475.y,
        _0x2a0475.width,
        _0x2a0475.height,
      ),
      _0x43eb5a.fillRect(
        _0x196fb5.x,
        _0x196fb5.y,
        _0x196fb5.width,
        _0x196fb5.height,
      ),
      _0x43eb5a.restore());
  }
  _drawStructuralHeaderTrigger(_0x2245c2, _0x2dfe30) {
    let _0x411f3b = J(_0x2dfe30.rect, this._context["scene"]),
      _0x226699 = this._isSameTrigger(this._hoveredTrigger, _0x2dfe30),
      _0x12a0a4 = this._isStructuralHeaderSelected(_0x2dfe30),
      _0x4891d9 = this._isStructuralHeaderDeleteDangerActive(_0x2dfe30);
    (_0x2245c2.save(),
      (_0x2245c2.fillStyle = _0x4891d9
        ? "rgba(217, 48, 37, 0.16)"
        : _0x12a0a4
          ? "rgba(47, 102, 255, 0.18)"
          : _0x226699
            ? "#d7dbe0"
            : "#eceff1"),
      _0x2245c2.fillRect(
        _0x411f3b.x,
        _0x411f3b.y,
        _0x411f3b.width,
        _0x411f3b.height,
      ),
      _0x2245c2.restore());
  }
  _drawSelection(_0x5e62b8) {
    if (
      !this._activeTable ||
      !this._selection ||
      this._selection["tableId"] !== this._activeTable["sourceTableId"] ||
      !Ja(this._selection, {
        suppressOverlay: this._hasActivePointerInteraction(),
      })
    )
      return;
    let _0x3b71ad = this._getSelectionRect(this._selection);
    if (!_0x3b71ad) return;
    let _0x5875c9 = this._clipRectToViewport(_0x3b71ad);
    if (!_0x5875c9) return;
    let _0x33012d = J(_0x5875c9, this._context["scene"]),
      _0x4bd558 = this._getTableAccentColor();
    (_0x5e62b8.save(),
      (_0x5e62b8.fillStyle = new _0x31d6b9(_0x4bd558)
        .setAlpha(0.07)
        .toRgbString()),
      _0x5e62b8.fillRect(
        _0x33012d.x,
        _0x33012d.y,
        _0x33012d.width,
        _0x33012d.height,
      ),
      (_0x5e62b8.strokeStyle = _0x4bd558),
      (_0x5e62b8.lineWidth = 1),
      _0x5e62b8.strokeRect(
        _0x33012d.x,
        _0x33012d.y,
        _0x33012d.width,
        _0x33012d.height,
      ),
      _0x5e62b8.restore());
  }
  _hasActivePointerInteraction() {
    return (
      this._dragState != null ||
      this._moveDragState != null ||
      this._rowColumnMoveState != null ||
      this._pendingHandleSelection != null
    );
  }
  _drawMovePreview(_0x3fc4ed) {
    if (this._rowColumnMoveTarget) {
      let _0x4a3663 = this._rowColumnMoveTarget["rect"],
        _0x4ec22b = q(_0x4a3663.x, _0x4a3663.y, this._context["scene"]),
        _0x2d2ddd = q(
          _0x4a3663.x + _0x4a3663.width,
          _0x4a3663.y + _0x4a3663.height,
          this._context["scene"],
        );
      (_0x3fc4ed.save(),
        (_0x3fc4ed.strokeStyle = Oo),
        (_0x3fc4ed.lineWidth = 2),
        _0x3fc4ed.beginPath(),
        _0x3fc4ed.moveTo(_0x4ec22b.x, _0x4ec22b.y),
        _0x3fc4ed.lineTo(_0x2d2ddd.x, _0x2d2ddd.y),
        _0x3fc4ed.stroke(),
        _0x3fc4ed.restore());
      return;
    }
    if (this._moveDropTarget) {
      let _0x5b3d84 = q(
          this._moveDropTarget["x"],
          this._moveDropTarget["y"],
          this._context["scene"],
        ),
        _0x2a98e4 = q(
          this._moveDropTarget["x"] + this._moveDropTarget["width"],
          this._moveDropTarget["y"],
          this._context["scene"],
        );
      (_0x3fc4ed.save(),
        (_0x3fc4ed.strokeStyle = Oo),
        (_0x3fc4ed.lineWidth = 2),
        _0x3fc4ed.beginPath(),
        _0x3fc4ed.moveTo(_0x5b3d84.x, _0x5b3d84.y),
        _0x3fc4ed.lineTo(_0x2a98e4.x, _0x2a98e4.y),
        _0x3fc4ed.stroke(),
        (_0x3fc4ed.fillStyle = Oo),
        _0x3fc4ed.beginPath(),
        _0x3fc4ed.arc(_0x5b3d84.x, _0x5b3d84.y, 3, 0, Math.PI * 2),
        _0x3fc4ed.fill(),
        _0x3fc4ed.beginPath(),
        _0x3fc4ed.arc(_0x2a98e4.x, _0x2a98e4.y, 3, 0, Math.PI * 2),
        _0x3fc4ed.fill(),
        _0x3fc4ed.restore());
      return;
    }
    if (!this._moveDragPreview) return;
    let _0x36664e = J(this._moveDragPreview["rect"], this._context["scene"]);
    (_0x3fc4ed.save(),
      (_0x3fc4ed.fillStyle = this._getTableAccentColor()),
      (_0x3fc4ed.globalAlpha = 0.08),
      _0x3fc4ed.fillRect(
        _0x36664e.x,
        _0x36664e.y,
        _0x36664e.width,
        _0x36664e.height,
      ),
      (_0x3fc4ed.globalAlpha = 1),
      (_0x3fc4ed.strokeStyle = this._getTableAccentColor()),
      (_0x3fc4ed.lineWidth = 2),
      _0x3fc4ed.setLineDash([6, 4]),
      _0x3fc4ed.strokeRect(
        _0x36664e.x,
        _0x36664e.y,
        _0x36664e.width,
        _0x36664e.height,
      ),
      _0x3fc4ed.restore());
  }
  _drawSortPopover(_0x1ce254) {
    if (!this._sortPopover) return;
    let _0x1c412b = us(),
      _0x46d12c = J(ls(this._sortPopover), this._context["scene"]),
      _0x5d515a = _0x46d12c.height / _0x1c412b.length;
    (_0x1ce254.save(),
      (_0x1ce254.fillStyle = "#fff"),
      (_0x1ce254.strokeStyle = Ao),
      (_0x1ce254.lineWidth = 1),
      (_0x1ce254.shadowColor = "rgba(60, 64, 67, 0.18)"),
      (_0x1ce254.shadowBlur = 12),
      Zo(
        _0x1ce254,
        _0x46d12c.x,
        _0x46d12c.y,
        _0x46d12c.width,
        _0x46d12c.height,
        8,
      ),
      _0x1ce254.fill(),
      (_0x1ce254.shadowBlur = 0),
      _0x1ce254.stroke(),
      (_0x1ce254.font = "12px\x20Arial,\x20sans-serif"),
      (_0x1ce254.fillStyle = jo),
      _0x1c412b.forEach((_0xec0ea2, _0x4c33df) => {
        let _0x136191 = _0x46d12c.y + _0x4c33df * _0x5d515a;
        (this._drawSortOptionIcon(
          _0x1ce254,
          _0xec0ea2.direction,
          _0x46d12c.x + 12,
          _0x136191 + _0x5d515a / 2 - 7,
        ),
          _0x1ce254.fillText(
            this._localeService["t"](_0xec0ea2.labelKey),
            _0x46d12c.x + 36,
            _0x136191 + _0x5d515a / 2 + 4,
          ));
      }),
      _0x1ce254.restore());
  }
  _drawSortOptionIcon(_0x4e27ce, _0x51026a, _0x192aab, _0x1088b7) {
    (_0x4e27ce.save(),
      (_0x4e27ce.strokeStyle = jo),
      (_0x4e27ce.lineWidth = 1.5),
      _0x4e27ce.beginPath(),
      _0x4e27ce.moveTo(_0x192aab + 6, _0x1088b7),
      _0x4e27ce.lineTo(_0x192aab + 6, _0x1088b7 + 14),
      _0x4e27ce.moveTo(
        _0x192aab + 2,
        _0x51026a === "asc" ? _0x1088b7 + 4 : _0x1088b7 + 10,
      ),
      _0x4e27ce.lineTo(
        _0x192aab + 6,
        _0x51026a === "asc" ? _0x1088b7 : _0x1088b7 + 14,
      ),
      _0x4e27ce.lineTo(
        _0x192aab + 10,
        _0x51026a === "asc" ? _0x1088b7 + 4 : _0x1088b7 + 10,
      ),
      _0x4e27ce.stroke(),
      _0x4e27ce.restore());
  }
  _drawInsertTrigger(_0x2abe1c, _0x1cb845) {
    let _0x3f8533 = J(_0x1cb845.rect, this._context["scene"]),
      _0x40d65f = this._isSameTrigger(this._hoveredTrigger, _0x1cb845),
      _0x3fb34c = this._getInsertTriggerDocumentCenter(_0x1cb845),
      _0x2f7dd3 = _0x3fb34c
        ? q(_0x3fb34c.x, _0x3fb34c.y, this._context["scene"])
        : {
            x: _0x3f8533.x + _0x3f8533.width / 2,
            y: _0x3f8533.y + _0x3f8533.height / 2,
          },
      _0x371c2c = _0x40d65f ? 12 : 4,
      _0x326f99 = _0x371c2c / 2;
    (_0x2abe1c.save(),
      _0x40d65f && this._drawInsertTriggerGuide(_0x2abe1c, _0x1cb845),
      (_0x2abe1c.fillStyle = _0x40d65f ? "#fff" : No),
      (_0x2abe1c.strokeStyle = _0x40d65f ? this._getTableAccentColor() : No),
      (_0x2abe1c.lineWidth = _0x40d65f ? 1.5 : 1),
      _0x2abe1c.beginPath(),
      _0x2abe1c.arc(_0x2f7dd3.x, _0x2f7dd3.y, _0x326f99, 0, Math.PI * 2),
      _0x2abe1c.fill(),
      _0x40d65f && _0x2abe1c.stroke(),
      _0x40d65f &&
        this._drawInsertTriggerPlus(
          _0x2abe1c,
          _0x2f7dd3.x,
          _0x2f7dd3.y,
          _0x371c2c,
        ),
      _0x2abe1c.restore());
  }
  _drawInsertTriggerPlus(_0x8315c8, _0x17785d, _0x126cf0, _0x2b5de4) {
    let _0x6da17d = Math.round(_0x17785d),
      _0x54c6a0 = Math.round(_0x126cf0),
      _0x53dec7 = Math.max(Math.floor(_0x2b5de4 / 3), 3),
      _0x212578 = Math.max(Math.round(_0x2b5de4 / 6), 2);
    (_0x8315c8.save(),
      (_0x8315c8.fillStyle = this._getTableAccentColor()),
      _0x8315c8.fillRect(
        _0x6da17d - _0x53dec7,
        _0x54c6a0 - Math.floor(_0x212578 / 2),
        _0x53dec7 * 2,
        _0x212578,
      ),
      _0x8315c8.fillRect(
        _0x6da17d - Math.floor(_0x212578 / 2),
        _0x54c6a0 - _0x53dec7,
        _0x212578,
        _0x53dec7 * 2,
      ),
      _0x8315c8.restore());
  }
  _drawInsertTriggerGuide(_0x31effc, _0x174685) {
    if (!this._activeTable) return;
    let { input: _0x386a91 } = this._activeTable,
      _0x343773 = J(Y(_0x386a91), this._context["scene"]),
      _0x18b083 = q(
        Ko(_0x386a91),
        _0x386a91.tableRect["y"],
        this._context["scene"],
      ).x,
      _0x4b2c2b = q(
        Jo(_0x386a91),
        _0x386a91.tableRect["y"],
        this._context["scene"],
      ).x,
      _0x39d00e = this._getInsertTriggerDocumentCenter(_0x174685),
      _0x147b41 = _0x39d00e
        ? q(_0x39d00e.x, _0x39d00e.y, this._context["scene"])
        : q(
            _0x174685.rect["x"] + _0x174685.rect["width"] / 2,
            _0x174685.rect["y"] + _0x174685.rect["height"] / 2,
            this._context["scene"],
          );
    if (
      (_0x31effc.save(),
      (_0x31effc.strokeStyle = this._getTableAccentColor()),
      (_0x31effc.lineWidth = 2),
      _0x31effc.beginPath(),
      _0x174685.kind === "row-insert-dot")
    ) {
      let _0x10187c = _0x147b41.y;
      (_0x31effc.moveTo(_0x18b083, _0x10187c),
        _0x31effc.lineTo(_0x4b2c2b, _0x10187c));
    } else {
      if (_0x174685.kind === "column-insert-dot") {
        let _0x537f42 = _0x147b41.x;
        (_0x31effc.moveTo(_0x537f42, _0x343773.y),
          _0x31effc.lineTo(_0x537f42, _0x343773.y + _0x343773.height));
      }
    }
    (_0x31effc.stroke(), _0x31effc.restore());
  }
  _getTableAccentColor() {
    var _0x3be2dd;
    return (
      ((_0x3be2dd = this._themeService) == null
        ? undefined
        : _0x3be2dd.getColorFromTheme("primary.600")) ?? Oo
    );
  }
  _getInsertTriggerDocumentCenter(_0x1d5c67) {
    if (!this._activeTable) return null;
    let { input: _0x453923 } = this._activeTable;
    if (_0x1d5c67.kind === "column-insert-dot" && _0x1d5c67.column != null) {
      let _0x20794b = $o(_0x453923.columnIndices, _0x1d5c67.column);
      return _0x20794b < 0
        ? null
        : {
            x: Xo(
              _0x453923,
              X(
                _0x453923.columnWidths["slice"](
                  0,
                  _0x1d5c67.position === "left" ? _0x20794b : _0x20794b + 1,
                ),
              ),
            ),
            y: _0x1d5c67.rect["y"] + _0x1d5c67.rect["height"] / 2,
          };
    }
    if (_0x1d5c67.kind === "row-insert-dot" && _0x1d5c67.row != null) {
      let _0x2b3d56 = $o(_0x453923.rowIndices, _0x1d5c67.row);
      return _0x2b3d56 < 0
        ? null
        : {
            x: _0x1d5c67.rect["x"] + _0x1d5c67.rect["width"] / 2,
            y:
              _0x453923.tableRect["y"] +
              X(
                _0x453923.rowHeights["slice"](
                  0,
                  _0x1d5c67.position === "above" ? _0x2b3d56 : _0x2b3d56 + 1,
                ),
              ),
          };
    }
    return {
      x: _0x1d5c67.rect["x"] + _0x1d5c67.rect["width"] / 2,
      y: _0x1d5c67.rect["y"] + _0x1d5c67.rect["height"] / 2,
    };
  }
  _getInsertTriggerIconRect(_0x42bedc, _0x27fd46) {
    let _0x25e04d = this._getInsertTriggerDocumentCenter(_0x42bedc),
      _0x54eb1a = J(_0x42bedc.rect, this._context["scene"]);
    if (!_0x25e04d) return _0x54eb1a;
    let _0x4e5356 = q(_0x25e04d.x, _0x25e04d.y, this._context["scene"]),
      _0x166bb1 =
        _0x27fd46 ??
        Math.max(_0x42bedc.rect["width"], _0x42bedc.rect["height"]);
    if (_0x27fd46 != null) {
      if (_0x42bedc.kind === "column-insert-dot")
        return {
          x: _0x4e5356.x - _0x166bb1 / 2,
          y: _0x54eb1a.y,
          width: _0x166bb1,
          height: _0x166bb1,
        };
      if (_0x42bedc.kind === "row-insert-dot")
        return {
          x: _0x54eb1a.x,
          y: _0x4e5356.y - _0x166bb1 / 2,
          width: _0x166bb1,
          height: _0x166bb1,
        };
    }
    return J(
      {
        x: _0x25e04d.x - _0x166bb1 / 2,
        y: _0x25e04d.y - _0x166bb1 / 2,
        width: _0x166bb1,
        height: _0x166bb1,
      },
      this._context["scene"],
    );
  }
  _drawTableSelectTrigger(_0x2e4c9f, _0x55208c) {
    let _0x38d606 = J(_0x55208c.rect, this._context["scene"]);
    (_0x2e4c9f.save(),
      (_0x2e4c9f.fillStyle = "#fff"),
      (_0x2e4c9f.strokeStyle = Ao),
      (_0x2e4c9f.lineWidth = 1),
      Zo(
        _0x2e4c9f,
        _0x38d606.x,
        _0x38d606.y,
        _0x38d606.width,
        _0x38d606.height,
        5,
      ),
      _0x2e4c9f.fill(),
      _0x2e4c9f.stroke(),
      this._drawSixDotDragHandle(_0x2e4c9f, _0x38d606),
      _0x2e4c9f.restore());
  }
  _isStructuralHeaderSelected(_0x26fff5) {
    return !this._selection ||
      !_0x26fff5.tableId ||
      this._selection["tableId"] !== _0x26fff5.tableId
      ? false
      : _0x26fff5.kind === "row-header" && _0x26fff5.row != null
        ? this._selection["kind"] === _0x4f4538.Row &&
          _0x26fff5.row >= this._selection["startRow"] &&
          _0x26fff5.row <= this._selection["endRow"]
        : _0x26fff5.kind === "column-header" &&
          _0x26fff5.column != null &&
          this._selection["kind"] === _0x4f4538.Column &&
          _0x26fff5.column >= this._selection["startColumn"] &&
          _0x26fff5.column <= this._selection["endColumn"];
  }
  _isStructuralHeaderDeleteDangerActive(_0x45dfcd) {
    return (
      !!this._floatingMenuService["getState"]().deleteHoverActive &&
      this._isStructuralHeaderSelected(_0x45dfcd)
    );
  }
  _drawSixDotDragHandle(_0x4fa376, _0x518878) {
    let _0x117fdd = 4.6,
      _0x322e4d = _0x518878.x + _0x518878.width / 2 - 5 / 2,
      _0x26e92d = _0x518878.y + _0x518878.height / 2 - _0x117fdd;
    (_0x4fa376.save(), (_0x4fa376.fillStyle = No));
    for (let _0x3a0492 = 0; _0x3a0492 < 2; _0x3a0492++)
      for (let _0x1ffcc1 = 0; _0x1ffcc1 < 3; _0x1ffcc1++)
        (_0x4fa376.beginPath(),
          _0x4fa376.arc(
            _0x322e4d + _0x3a0492 * 5,
            _0x26e92d + _0x1ffcc1 * _0x117fdd,
            1.1,
            0,
            Math.PI * 2,
          ),
          _0x4fa376.fill());
    _0x4fa376.restore();
  }
  _drawIconHoverBg(_0x28e62e, _0x482e99, _0x9dbc50) {
    this._isSameTrigger(this._hoveredTrigger, _0x9dbc50) &&
      ((_0x28e62e.fillStyle = Mo),
      Zo(
        _0x28e62e,
        _0x482e99.x - 2,
        _0x482e99.y - 2,
        _0x482e99.width + 4,
        _0x482e99.height + 4,
        5,
      ),
      _0x28e62e.fill());
  }
  _drawScrollbar(_0x3398a8) {
    let _0x378d63 = this._getScrollbarGeometry();
    _0x378d63 && Ga(_0x3398a8, Wo(_0x378d63, this._context["scene"]));
  }
  _drawResizeGuide(_0x360357, _0x5d3ff4, _0x3772a6) {
    let _0x39ea9a = this._getResizeGuideRect(_0x5d3ff4);
    if (!_0x39ea9a) return;
    let _0x2acbf6 = J(_0x39ea9a, this._context["scene"]);
    (_0x360357.save(),
      (_0x360357.fillStyle = Oo),
      (_0x360357.globalAlpha = _0x3772a6),
      _0x360357.fillRect(
        _0x2acbf6.x,
        _0x2acbf6.y,
        _0x2acbf6.width,
        _0x2acbf6.height,
      ),
      _0x360357.restore());
  }
  _drawBorderPopover(_0x325f32) {
    if (!this._borderPopover) return;
    let _0x45455a = ds(),
      _0x599b85 = J(cs(this._borderPopover), this._context["scene"]),
      _0x2eee3e = _0x599b85.width / 5,
      _0x365595 = _0x599b85.height / 2;
    (_0x325f32.save(),
      (_0x325f32.fillStyle = "#fff"),
      (_0x325f32.strokeStyle = Ao),
      (_0x325f32.lineWidth = 1),
      (_0x325f32.shadowColor = "rgba(60,\x2064,\x2067,\x200.18)"),
      (_0x325f32.shadowBlur = 12),
      Zo(
        _0x325f32,
        _0x599b85.x,
        _0x599b85.y,
        _0x599b85.width,
        _0x599b85.height,
        8,
      ),
      _0x325f32.fill(),
      (_0x325f32.shadowBlur = 0),
      _0x325f32.stroke(),
      _0x45455a.forEach((_0x58535e, _0x5108ef) => {
        let _0x555828 = _0x5108ef % 5,
          _0x1e08ac = Math.floor(_0x5108ef / 5),
          _0xbf4a8f = _0x599b85.x + _0x555828 * _0x2eee3e,
          _0x464d5c = _0x599b85.y + _0x1e08ac * _0x365595;
        this._drawBorderPresetIcon(
          _0x325f32,
          _0x58535e.preset,
          _0x58535e.iconName,
          _0xbf4a8f,
          _0x464d5c,
          _0x2eee3e,
          _0x365595,
        );
      }),
      _0x325f32.restore());
  }
  _drawBorderPresetIcon(
    _0x5724c5,
    _0x595329,
    _0x44b12e,
    _0x4f0e48,
    _0x4330eb,
    _0x57a732,
    _0x49b50d,
  ) {
    let _0x1eff56 = this._lastPointerPoint
        ? this._hitBorderPreset(
            this._lastPointerPoint["x"],
            this._lastPointerPoint["y"],
          )
        : null,
      _0x49fe84 =
        (_0x1eff56 == null ? undefined : _0x1eff56.preset) === _0x595329,
      _0x1e68e4 = _0x4f0e48 + (_0x57a732 - 16) / 2,
      _0x5ac789 = _0x1e68e4 + 16,
      _0x207f74 = _0x4330eb + (_0x49b50d - 16) / 2,
      _0x2ffe6b = _0x207f74 + 16,
      _0x31760e = (_0x1e68e4 + _0x5ac789) / 2,
      _0x117c22 = (_0x207f74 + _0x2ffe6b) / 2;
    (_0x5724c5.save(),
      _0x49fe84 &&
        ((_0x5724c5.fillStyle = Mo),
        Zo(
          _0x5724c5,
          _0x4f0e48 + 3,
          _0x4330eb + 3,
          _0x57a732 - 6,
          _0x49b50d - 6,
          6,
        ),
        _0x5724c5.fill()),
      (_0x5724c5.strokeStyle = _0x595329 === "none" ? "#5f6368" : "#2f66ff"),
      (_0x5724c5.lineWidth = 1.35),
      (_0x5724c5.lineCap = "round"),
      (_0x5724c5.lineJoin = "round"),
      _0x5724c5.setLineDash(_0x44b12e === "NoBorderIcon" ? [2, 3] : []),
      _0x5724c5.beginPath(),
      (_0x44b12e === "AllBorderIcon" ||
        _0x44b12e === "OuterBorderDoubleIcon" ||
        _0x44b12e === "UpBorderDoubleIcon") &&
        (_0x5724c5.moveTo(_0x1e68e4, _0x207f74),
        _0x5724c5.lineTo(_0x5ac789, _0x207f74)),
      (_0x44b12e === "AllBorderIcon" ||
        _0x44b12e === "OuterBorderDoubleIcon" ||
        _0x44b12e === "DownBorderDoubleIcon") &&
        (_0x5724c5.moveTo(_0x1e68e4, _0x2ffe6b),
        _0x5724c5.lineTo(_0x5ac789, _0x2ffe6b)),
      (_0x44b12e === "AllBorderIcon" ||
        _0x44b12e === "OuterBorderDoubleIcon" ||
        _0x44b12e === "LeftBorderDoubleIcon") &&
        (_0x5724c5.moveTo(_0x1e68e4, _0x207f74),
        _0x5724c5.lineTo(_0x1e68e4, _0x2ffe6b)),
      (_0x44b12e === "AllBorderIcon" ||
        _0x44b12e === "OuterBorderDoubleIcon" ||
        _0x44b12e === "RightBorderDoubleIcon") &&
        (_0x5724c5.moveTo(_0x5ac789, _0x207f74),
        _0x5724c5.lineTo(_0x5ac789, _0x2ffe6b)),
      (_0x44b12e === "AllBorderIcon" ||
        _0x44b12e === "InnerBorderDoubleIcon" ||
        _0x44b12e === "VerticalBorderDoubleIcon") &&
        (_0x5724c5.moveTo(_0x31760e, _0x207f74),
        _0x5724c5.lineTo(_0x31760e, _0x2ffe6b)),
      (_0x44b12e === "AllBorderIcon" ||
        _0x44b12e === "InnerBorderDoubleIcon" ||
        _0x44b12e === "HorizontalBorderDoubleIcon") &&
        (_0x5724c5.moveTo(_0x1e68e4, _0x117c22),
        _0x5724c5.lineTo(_0x5ac789, _0x117c22)),
      _0x44b12e === "NoBorderIcon" &&
        _0x5724c5.rect(
          _0x1e68e4,
          _0x207f74,
          _0x5ac789 - _0x1e68e4,
          _0x2ffe6b - _0x207f74,
        ),
      _0x5724c5.stroke(),
      _0x5724c5.restore());
  }
  _drawTooltip(_0x7ad086) {
    if (!this._tooltip) return;
    let _0x44b370 = this._tooltip["label"],
      _0x2fd0ed = q(
        this._tooltip["x"],
        this._tooltip["y"],
        this._context["scene"],
      );
    (_0x7ad086.save(), (_0x7ad086.font = "12px Arial, sans-serif"));
    let _0x253a5b = _0x7ad086.measureText(_0x44b370).width + 16,
      _0x495492 = _0x2fd0ed.x - _0x253a5b / 2,
      _0xd89e7e = _0x2fd0ed.y - 28 - 12;
    ((_0x7ad086.fillStyle = "rgba(32, 33, 36, 0.94)"),
      Zo(_0x7ad086, _0x495492, _0xd89e7e, _0x253a5b, 28, 6),
      _0x7ad086.fill(),
      (_0x7ad086.fillStyle = "#fff"),
      _0x7ad086.fillText(_0x44b370, _0x495492 + 8, _0xd89e7e + 18),
      _0x7ad086.restore());
  }
  _getCellAtPoint(_0x5e76be, _0xfa07d8) {
    var _0x15a0ac, _0x273dbc, _0x50edde;
    if (
      !this._activeTable ||
      !Z(Y(this._activeTable["input"]), _0x5e76be, _0xfa07d8)
    )
      return null;
    let {
        input: _0x366d99,
        segmentId: _0x3568da,
        sourceTableId: _0x3921c0,
      } = this._activeTable,
      _0x555719 = es(
        _0x366d99.rowHeights,
        _0xfa07d8 - _0x366d99.tableRect["y"],
      ),
      _0x4a04f3 = Yo(_0x366d99, _0x5e76be);
    if (_0x4a04f3 == null) return null;
    let _0x50f0f4 = es(_0x366d99.columnWidths, _0x4a04f3);
    if (_0x555719 < 0 || _0x50f0f4 < 0) return null;
    let _0x1aacab =
        ((_0x15a0ac = _0x366d99.rowIndices) == null
          ? undefined
          : _0x15a0ac[_0x555719]) ?? _0x555719,
      _0x3ff5a9 =
        ((_0x273dbc = _0x366d99.columnIndices) == null
          ? undefined
          : _0x273dbc[_0x50f0f4]) ?? _0x50f0f4,
      _0x1fd044 =
        (_0x50edde = _0x366d99.mergedCells) == null
          ? undefined
          : _0x50edde.find(
              (_0x37b770) =>
                _0x1aacab >= _0x37b770.startRow &&
                _0x1aacab <= _0x37b770.endRow &&
                _0x3ff5a9 >= _0x37b770.startColumn &&
                _0x3ff5a9 <= _0x37b770.endColumn,
            );
    return {
      column:
        (_0x1fd044 == null ? undefined : _0x1fd044.startColumn) ?? _0x3ff5a9,
      row: (_0x1fd044 == null ? undefined : _0x1fd044.startRow) ?? _0x1aacab,
      ...(_0x3568da ? { segmentId: _0x3568da } : {}),
      tableId: _0x3921c0,
    };
  }
  _updateHoverTarget(_0x4caa8d, _0x3a6929) {
    if (!this._activeTable) {
      ((this._hoverCell = null),
        (this._hoverColumn = null),
        (this._hoverRow = null));
      return;
    }
    let _0x1d22ca = this._getTriggerInput(),
      _0x2ef423 = this._getCellAtPoint(_0x4caa8d, _0x3a6929),
      _0x558b21 = Y(_0x1d22ca),
      _0x5373c9 = qo(_0x1d22ca),
      _0x43d26a = Jo(_0x1d22ca),
      _0x4468b9 = {
        x: _0x5373c9,
        y: _0x1d22ca.tableRect["y"] - 16 / (_0x1d22ca.zoom ?? 1),
        width: Math.max(0, _0x43d26a - _0x5373c9),
        height: 16 / (_0x1d22ca.zoom ?? 1),
      },
      _0xa6ef9b = {
        x: _0x5373c9 - 16 / (_0x1d22ca.zoom ?? 1),
        y: _0x1d22ca.tableRect["y"],
        width: 16 / (_0x1d22ca.zoom ?? 1),
        height: _0x558b21.height,
      };
    ((this._hoverCell = _0x2ef423
      ? { row: _0x2ef423.row, column: _0x2ef423.column }
      : null),
      (this._hoverColumn = Z(_0x4468b9, _0x4caa8d, _0x3a6929)
        ? this._getColumnAtX(_0x4caa8d)
        : null),
      (this._hoverRow = Z(_0xa6ef9b, _0x4caa8d, _0x3a6929)
        ? this._getRowAtY(_0x3a6929)
        : null),
      !_0x2ef423 &&
        !this._hoverColumn &&
        !this._hoverRow &&
        !this._borderPopover &&
        (this._hoveredTrigger = null));
  }
  _getColumnAtX(_0x434941) {
    var _0x3ef462;
    if (!this._activeTable) return null;
    let { input: _0x23c619 } = this._activeTable,
      _0x251862 = Y(_0x23c619);
    if (_0x434941 < _0x251862.x || _0x434941 > _0x251862.x + _0x251862.width)
      return null;
    let _0x461613 = Yo(_0x23c619, _0x434941);
    if (_0x461613 == null) return null;
    let _0x1c4526 = es(_0x23c619.columnWidths, _0x461613);
    return (
      ((_0x3ef462 = _0x23c619.columnIndices) == null
        ? undefined
        : _0x3ef462[_0x1c4526]) ?? _0x1c4526
    );
  }
  _createRowColumnMoveState(_0x1a2ba2) {
    let _0x312e43 = _0x1a2ba2.type === "row" ? _0x1a2ba2.row : _0x1a2ba2.column;
    return _0x312e43 == null
      ? null
      : {
          sourceIndex: _0x312e43,
          startX: _0x1a2ba2.startX,
          startY: _0x1a2ba2.startY,
          tableId: _0x1a2ba2.tableId,
          type: _0x1a2ba2.type,
        };
  }
  _getRowColumnMoveTarget(_0x1aa467) {
    let _0x5067c7 = this._rowColumnMoveState;
    return !_0x5067c7 ||
      !this._activeTable ||
      this._activeTable["sourceTableId"] !== _0x5067c7.tableId
      ? null
      : _0x5067c7.type === "row"
        ? this._getRowMoveTargetAtY(_0x1aa467.y)
        : this._getColumnMoveTargetAtX(_0x1aa467.x);
  }
  _getRowMoveTargetAtY(_0x4b61cb) {
    var _0x54a60a;
    if (!this._activeTable) return null;
    let { input: _0x2ee576 } = this._activeTable;
    if (
      _0x4b61cb < _0x2ee576.tableRect["y"] ||
      _0x4b61cb > _0x2ee576.tableRect["y"] + _0x2ee576.tableRect["height"]
    )
      return null;
    let _0x2fd43e = es(
      _0x2ee576.rowHeights,
      _0x4b61cb - _0x2ee576.tableRect["y"],
    );
    if (_0x2fd43e < 0) return null;
    let _0x250ee5 =
        _0x2ee576.tableRect["y"] +
        X(_0x2ee576.rowHeights["slice"](0, _0x2fd43e)),
      _0x1d2953 = _0x2ee576.rowHeights[_0x2fd43e],
      _0x318234 = _0x4b61cb < _0x250ee5 + _0x1d2953 / 2 ? "above" : "below",
      _0x4ffa20 = _0x318234 === "above" ? _0x250ee5 : _0x250ee5 + _0x1d2953,
      _0x4d146b = Y(_0x2ee576);
    return {
      index:
        ((_0x54a60a = _0x2ee576.rowIndices) == null
          ? undefined
          : _0x54a60a[_0x2fd43e]) ?? _0x2fd43e,
      position: _0x318234,
      rect: { x: _0x4d146b.x, y: _0x4ffa20, width: _0x4d146b.width, height: 0 },
    };
  }
  _getColumnMoveTargetAtX(_0xeed2d4) {
    var _0x3317f2;
    if (!this._activeTable) return null;
    let { input: _0x28c2ab } = this._activeTable,
      _0x2e6a73 = Y(_0x28c2ab);
    if (_0xeed2d4 < _0x2e6a73.x || _0xeed2d4 > _0x2e6a73.x + _0x2e6a73.width)
      return null;
    let _0x3d02b6 = Yo(_0x28c2ab, _0xeed2d4);
    if (_0x3d02b6 == null) return null;
    let _0x44902b = es(_0x28c2ab.columnWidths, _0x3d02b6);
    if (_0x44902b < 0) return null;
    let _0x239a9d = Xo(
        _0x28c2ab,
        X(_0x28c2ab.columnWidths["slice"](0, _0x44902b)),
      ),
      _0x58112e = _0x28c2ab.columnWidths[_0x44902b],
      _0x51fb54 = _0xeed2d4 < _0x239a9d + _0x58112e / 2 ? "left" : "right",
      _0x2f3ed4 = _0x51fb54 === "left" ? _0x239a9d : _0x239a9d + _0x58112e;
    return {
      index:
        ((_0x3317f2 = _0x28c2ab.columnIndices) == null
          ? undefined
          : _0x3317f2[_0x44902b]) ?? _0x44902b,
      position: _0x51fb54,
      rect: {
        x: _0x2f3ed4,
        y: _0x28c2ab.tableRect["y"],
        width: 0,
        height: _0x28c2ab.tableRect["height"],
      },
    };
  }
  _getRowAtY(_0x139764) {
    var _0xe1eaf4;
    if (!this._activeTable) return null;
    let { input: _0x4c58f2 } = this._activeTable;
    if (
      _0x139764 < _0x4c58f2.tableRect["y"] ||
      _0x139764 > _0x4c58f2.tableRect["y"] + _0x4c58f2.tableRect["height"]
    )
      return null;
    let _0x2d09ba = es(
      _0x4c58f2.rowHeights,
      _0x139764 - _0x4c58f2.tableRect["y"],
    );
    return (
      ((_0xe1eaf4 = _0x4c58f2.rowIndices) == null
        ? undefined
        : _0xe1eaf4[_0x2d09ba]) ?? _0x2d09ba
    );
  }
  _hitBorderPreset(_0x1e4a73, _0x3c2072) {
    if (!this._borderPopover) return null;
    let _0x55854e = cs(this._borderPopover);
    if (!Z(_0x55854e, _0x1e4a73, _0x3c2072)) return null;
    let _0x453461 = Math.floor(
        (_0x1e4a73 - _0x55854e.x) / (_0x55854e.width / 5),
      ),
      _0xe4c676 = Math.floor(
        (_0x3c2072 - _0x55854e.y) / (_0x55854e.height / 2),
      ),
      _0x9e7b8e = ds()[_0xe4c676 * 5 + _0x453461];
    return _0x9e7b8e ? { preset: _0x9e7b8e.preset } : null;
  }
  _hitSortOption(_0x276d9d, _0x2f8384) {
    if (!this._sortPopover) return null;
    let _0x1e6b1f = ls(this._sortPopover);
    if (!Z(_0x1e6b1f, _0x276d9d, _0x2f8384)) return null;
    let _0x54ccf8 = us(),
      _0x4a6632 =
        _0x54ccf8[
          Math.floor(
            (_0x2f8384 - _0x1e6b1f.y) / (_0x1e6b1f.height / _0x54ccf8.length),
          )
        ];
    return _0x4a6632 ? { direction: _0x4a6632.direction } : null;
  }
  _buildTriggerTooltip(_0x3ad30e) {
    if (!_0x3ad30e) return null;
    let _0x8a2e4b = fs(_0x3ad30e.kind);
    return _0x8a2e4b
      ? {
          label: this._localeService["t"](_0x8a2e4b),
          x: _0x3ad30e.rect["x"] + _0x3ad30e.rect["width"] / 2,
          y: _0x3ad30e.rect["y"],
        }
      : null;
  }
  _getBorderPresetLabel(_0x2c001d) {
    let _0x263260 = ps(_0x2c001d);
    return this._localeService["t"](_0x263260);
  }
  _resolveFloatingMenuMergeAction(_0x84a6d7) {
    let _0x486777 = this._context["unit"].getSnapshot();
    return _0x5f3639(_0x486777, _0x84a6d7.tableId, _0x84a6d7)
      ? "unmerge"
      : _0x2e62f0(_0x486777, _0x84a6d7.tableId, _0x84a6d7)
        ? "merge"
        : null;
  }
  _resolveFloatingMenuTextStyle(_0x5508d3) {
    return Si(this._context["unit"].getSnapshot(), _0x5508d3);
  }
  _resolveFloatingMenuVerticalAlign(_0xa4ac71) {
    var _0x4231d8;
    let _0x170728 = this._context["unit"].getSnapshot(),
      _0x2386ac = Math.min(_0xa4ac71.startRow, _0xa4ac71.endRow),
      _0x1cb0fa = Math.min(_0xa4ac71.startColumn, _0xa4ac71.endColumn);
    return (
      ((_0x4231d8 = _0x170728.tableSource) == null ||
      (_0x4231d8 = _0x4231d8[_0xa4ac71.tableId]) == null ||
      (_0x4231d8 = _0x4231d8.tableRows) == null ||
      (_0x4231d8 = _0x4231d8[_0x2386ac]) == null ||
      (_0x4231d8 = _0x4231d8.tableCells) == null ||
      (_0x4231d8 = _0x4231d8[_0x1cb0fa]) == null
        ? undefined
        : _0x4231d8.vAlign) ?? _0x53eb1d.TOP
    );
  }
  _getFloatingMenuAnchorRect(_0x456ae1) {
    let _0x2642e2 = this._getSelectionRect(_0x456ae1),
      _0x5941eb = _0x2642e2 ? this._clipRectToViewport(_0x2642e2) : null;
    if (!_0x5941eb) return null;
    let _0x8907e = this._getFloatingMenuExtraTopGap();
    return {
      bottom: _0x5941eb.y + _0x5941eb.height - _0x8907e,
      left: _0x5941eb.x,
      right: _0x5941eb.x + _0x5941eb.width,
      top: _0x5941eb.y - _0x8907e,
    };
  }
  _getStructuralFloatingMenuAnchorRect(_0xede339) {
    let _0x413920 = this._getFloatingMenuAnchorRect(_0xede339);
    if (!_0x413920) return null;
    let _0x225fcb =
      this._getViewportTableRect().y - this._getFloatingMenuExtraTopGap();
    return {
      bottom: _0x225fcb,
      left: _0x413920.left,
      right: _0x413920.right,
      top: _0x225fcb,
    };
  }
  _getFloatingMenuExtraTopGap() {
    return 20 / this._getCurrentZoom();
  }
  _getSelectionRect(_0x40429e) {
    if (!this._activeTable) return null;
    let { input: _0x51ff80 } = this._activeTable,
      _0x3d8cbd = $o(_0x51ff80.rowIndices, _0x40429e.startRow),
      _0x42ca73 = $o(_0x51ff80.rowIndices, _0x40429e.endRow),
      _0x26f760 = $o(_0x51ff80.columnIndices, _0x40429e.startColumn),
      _0x52a44c = $o(_0x51ff80.columnIndices, _0x40429e.endColumn);
    if (_0x3d8cbd < 0 || _0x42ca73 < 0 || _0x26f760 < 0 || _0x52a44c < 0)
      return null;
    let _0x183d7d = Math.min(_0x26f760, _0x52a44c),
      _0x3ae4a5 = Math.max(_0x26f760, _0x52a44c),
      _0x128aff = Math.min(_0x3d8cbd, _0x42ca73),
      _0x51f4ff = Math.max(_0x3d8cbd, _0x42ca73);
    return {
      x: Xo(_0x51ff80, X(_0x51ff80.columnWidths["slice"](0, _0x183d7d))),
      y:
        _0x51ff80.tableRect["y"] +
        X(_0x51ff80.rowHeights["slice"](0, _0x128aff)),
      width: X(_0x51ff80.columnWidths["slice"](_0x183d7d, _0x3ae4a5 + 1)),
      height: X(_0x51ff80.rowHeights["slice"](_0x128aff, _0x51f4ff + 1)),
    };
  }
  _getResizeGuideRect(_0x1305a2) {
    return this._activeTable
      ? Fa(this._activeTable["input"], _0x1305a2, this._dragPreview ?? null)
      : null;
  }
  _clipRectToViewport(_0x4f953c) {
    if (!this._activeTable) return null;
    let _0x317b07 = this._getViewportTableRect(),
      _0x964751 = Math.max(_0x4f953c.x, _0x317b07.x),
      _0x2d4d87 = Math.min(
        _0x4f953c.x + _0x4f953c.width,
        _0x317b07.x + _0x317b07.width,
      ),
      _0x38a869 = Math.max(_0x4f953c.y, _0x317b07.y),
      _0x297dc0 = Math.min(
        _0x4f953c.y + _0x4f953c.height,
        _0x317b07.y + _0x317b07.height,
      );
    return _0x2d4d87 <= _0x964751 || _0x297dc0 <= _0x38a869
      ? null
      : {
          height: _0x297dc0 - _0x38a869,
          width: _0x2d4d87 - _0x964751,
          x: _0x964751,
          y: _0x38a869,
        };
  }
  _getViewportTableRect() {
    return Y(this._activeTable["input"]);
  }
  _buildViewportState(_0x2efb4f, _0x104e80, _0x3cb387, _0x3326bf, _0x4eb112) {
    let _0x21ee7e =
        _0x3326bf || _0x2efb4f.rect["right"] - _0x2efb4f.rect["left"],
      _0x3f4b69 = Number.isFinite(_0x104e80.pageWidth)
        ? Math.max(
            0,
            _0x104e80.pageWidth - _0x104e80.marginLeft - _0x104e80.marginRight,
          )
        : _0x21ee7e,
      _0x569aa0 = Number.isFinite(_0x104e80.pageWidth)
        ? Math.max(0, _0x3f4b69 - _0x3cb387.left)
        : _0x21ee7e,
      _0x3b3b5b = Math.min(_0x21ee7e, _0x569aa0 || _0x21ee7e);
    if (
      this._getDocumentFlavor() !== _0x5004a1.MODERN ||
      !Number.isFinite(_0x104e80.pageWidth) ||
      _0x104e80.type === _0x4718ca.CELL
    )
      return {
        contentWidth: _0x3326bf,
        leadingInsetLeft: 0,
        overflowWidthThreshold: _0x3f4b69 || _0x21ee7e,
        trailingInsetRight: 0,
        viewportLeft: _0x2efb4f.rect["left"],
        viewportWidth: _0x3b3b5b,
      };
    let { docsLeft: _0x1135e5 } = Bo(this._context["mainComponent"]),
      _0x27bd24 = 20 / (_0x4eb112 || 1),
      _0x204be6 = Vo(this._context),
      _0x2a0001 = _0x1135e5 + _0x27bd24,
      _0x404ef9 = Math.max(0, _0x104e80.pageWidth - _0x27bd24 * 2),
      _0x2afa65 = _0x204be6 ? _0x204be6.left + _0x27bd24 : _0x2a0001,
      _0x195c7e = _0x204be6
        ? Math.max(0, _0x204be6.width - _0x27bd24 * 2)
        : _0x404ef9,
      _0x5a5011 = _0x1135e5 + _0x104e80.marginLeft;
    return {
      contentWidth: _0x3326bf,
      leadingInsetLeft: Math.max(0, _0x5a5011 - _0x2afa65),
      overflowWidthThreshold: _0x3f4b69 || _0x21ee7e,
      trailingInsetRight: Math.max(0, _0x195c7e - _0x3326bf),
      viewportLeft: _0x2afa65,
      viewportWidth: _0x195c7e,
    };
  }
  _getDocumentFlavor() {
    var _0x342596, _0x560906;
    return (_0x342596 = this._context["unit"]) == null ||
      (_0x560906 = _0x342596.getSnapshot) == null ||
      (_0x560906 = _0x560906.call(_0x342596)) == null ||
      (_0x560906 = _0x560906.documentStyle) == null
      ? undefined
      : _0x560906.documentFlavor;
  }
  _makeDirty() {
    var _0x38a688;
    ((_0x38a688 = this._context["mainComponent"]) == null ||
      _0x38a688.makeDirty(true),
      this._context["scene"].makeDirty());
  }
};
Lo = va(
  [
    K(1, _0x76478b(_0x432c98)),
    K(2, _0x76478b(_0x12b354)),
    K(3, _0x76478b(_0x387a93)),
    K(4, _0x76478b(_0x37b4ad)),
    K(5, _0x76478b(_0x425bcd)),
    K(6, _0x76478b(_0x1e0851)),
    K(7, _0x76478b(_0x3e0c9d)),
    K(8, _0x76478b(_0x14b58d)),
    K(9, _0x76478b(Gi)),
    K(10, _0x76478b(xa)),
    K(11, _0x76478b(_0x125639)),
    K(12, _0x76478b(_0x35da76)),
    K(13, _0x49ff90),
    K(14, _0x3eaaf9),
    K(15, _0x76478b(ba)),
    K(16, _0x431dbc),
  ],
  Lo,
);
function Ro(_0x36edec) {
  let _0x515662 = _0x36edec.tableSource["tableColumns"] ?? [];
  if (_0x515662.length > 0)
    return _0x515662.map((_0x39065a) => _0x39065a.size["width"].v);
  let _0x5a3489 = _0x36edec.rows["reduce"](
    (_0x3ac4f7, _0x3d0065) =>
      _0x3d0065.cells["length"] > _0x3ac4f7.cells["length"]
        ? _0x3d0065
        : _0x3ac4f7,
    _0x36edec.rows[0],
  );
  return (
    (_0x5a3489 == null
      ? undefined
      : _0x5a3489.cells["map"]((_0x302f36) => _0x302f36.pageWidth)) ?? []
  );
}
function zo(_0x460ce0) {
  var _0x2c1628;
  let _0x5f1fa2 =
      ((_0x2c1628 = _0x460ce0.tableSource) == null
        ? undefined
        : _0x2c1628.tableRows) ?? [],
    _0x562180 = [];
  return (
    _0x5f1fa2.forEach((_0x1289d9, _0x42e62a) => {
      _0x1289d9.tableCells["forEach"]((_0x39d4d1, _0x5c8a5a) => {
        let _0x37d5ab = _0x39d4d1.rowSpan ?? 1,
          _0x1eb1c9 = _0x39d4d1.columnSpan ?? 1;
        (_0x37d5ab > 1 || _0x1eb1c9 > 1) &&
          _0x562180.push({
            startRow: _0x42e62a,
            endRow: _0x42e62a + _0x37d5ab - 1,
            startColumn: _0x5c8a5a,
            endColumn: _0x5c8a5a + _0x1eb1c9 - 1,
          });
      });
    }),
    _0x562180
  );
}
function Bo(_0x48ae2c) {
  var _0x32bcd8;
  let _0x25b6fb =
    _0x48ae2c == null || (_0x32bcd8 = _0x48ae2c.getOffsetConfig) == null
      ? undefined
      : _0x32bcd8.call(_0x48ae2c);
  return {
    docsLeft: (_0x25b6fb == null ? undefined : _0x25b6fb.docsLeft) ?? 0,
    docsTop: (_0x25b6fb == null ? undefined : _0x25b6fb.docsTop) ?? 0,
    pageMarginTop:
      (_0x25b6fb == null ? undefined : _0x25b6fb.pageMarginTop) ?? 0,
  };
}
function Vo(_0x41b236) {
  var _0x308391, _0x3d8063, _0x2e5cb2, _0x5dbce7, _0x4d5136;
  let _0x195da7 = _0x41b236.scene["getAncestorScale"]().scaleX || 1,
    _0x5d44d5 =
      ((_0x308391 = _0x41b236.scene["getViewport"](Do)) == null
        ? undefined
        : _0x308391.viewportScrollX) ?? 0,
    _0x284071 =
      (_0x3d8063 = _0x41b236.engine) == null ||
      (_0x2e5cb2 = _0x3d8063.getCanvasElement) == null ||
      (_0x2e5cb2 = _0x2e5cb2.call(_0x3d8063)) == null ||
      (_0x5dbce7 = _0x2e5cb2.getBoundingClientRect) == null ||
      (_0x5dbce7 = _0x5dbce7.call(_0x2e5cb2)) == null
        ? undefined
        : _0x5dbce7.width,
    _0x3bd03a =
      ((_0x4d5136 = _0x41b236.mainComponent) == null
        ? undefined
        : _0x4d5136.width) ?? _0x41b236.scene["width"],
    _0x1f7773 = (_0x284071 ?? _0x3bd03a ?? 0) / _0x195da7;
  return !_0x1f7773 || !Number.isFinite(_0x1f7773) || _0x1f7773 <= 0
    ? null
    : { left: _0x5d44d5, width: _0x1f7773 };
}
function Ho(_0x2eb656) {
  return _0x2eb656.mainComponent ?? _0x2eb656.scene;
}
function Uo(_0x33e69a, _0x3f2d08, _0x45853c) {
  let _0x1955a1 = _0x45853c.getViewport(Do);
  if (!_0x1955a1) return { x: _0x33e69a, y: _0x3f2d08 };
  let _0x51513c = _0x1955a1.transformVector2SceneCoord(
    _0x2063d6.FromArray([_0x33e69a, _0x3f2d08]),
  );
  return { x: _0x51513c.x, y: _0x51513c.y };
}
function q(_0xd64871, _0x41d1bc, _0x35ec69) {
  let { scaleX: _0x147b97, scaleY: _0x2f3aae } = _0x35ec69.getAncestorScale(),
    _0x311b14 = _0x35ec69.getViewport(Do);
  return _0x311b14
    ? {
        x: (_0xd64871 - _0x311b14.viewportScrollX) * _0x147b97,
        y: (_0x41d1bc - _0x311b14.viewportScrollY) * _0x2f3aae,
      }
    : { x: _0xd64871, y: _0x41d1bc };
}
function J(_0x20d9ec, _0x10a778) {
  let _0x2f4050 = q(_0x20d9ec.x, _0x20d9ec.y, _0x10a778),
    _0x20402b = q(
      _0x20d9ec.x + _0x20d9ec.width,
      _0x20d9ec.y + _0x20d9ec.height,
      _0x10a778,
    );
  return {
    height: _0x20402b.y - _0x2f4050.y,
    width: _0x20402b.x - _0x2f4050.x,
    x: _0x2f4050.x,
    y: _0x2f4050.y,
  };
}
function Wo(_0x4aa704, _0x5b11a2) {
  return {
    ..._0x4aa704,
    thumb: J(_0x4aa704.thumb, _0x5b11a2),
    track: J(_0x4aa704.track, _0x5b11a2),
  };
}
function Go(_0x21dafb) {
  let _0x439bc1 = _0x21dafb.buttons;
  return typeof _0x439bc1 != "number" || (_0x439bc1 & 1) == 1;
}
function Y(_0x1f6c92) {
  var _0x76c968, _0x44bc76;
  return {
    ..._0x1f6c92.tableRect,
    x:
      ((_0x76c968 = _0x1f6c92.viewport) == null
        ? undefined
        : _0x76c968.viewportLeft) ?? _0x1f6c92.tableRect["x"],
    width:
      ((_0x44bc76 = _0x1f6c92.viewport) == null
        ? undefined
        : _0x44bc76.viewportWidth) ?? _0x1f6c92.tableRect["width"],
  };
}
function Ko(_0x41047c) {
  if (!_0x41047c.viewport) return _0x41047c.tableRect["x"];
  let _0x38a181 =
    _0x41047c.viewport["viewportLeft"] ?? _0x41047c.tableRect["x"];
  return Math.max(_0x38a181, Xo(_0x41047c, 0));
}
function qo(_0xeac5ae) {
  return _0xeac5ae.viewport ? Xo(_0xeac5ae, 0) : _0xeac5ae.tableRect["x"];
}
function Jo(_0x1b9453) {
  if (!_0x1b9453.viewport)
    return _0x1b9453.tableRect["x"] + _0x1b9453.tableRect["width"];
  let _0x8c7040 =
      (_0x1b9453.viewport["viewportLeft"] ?? _0x1b9453.tableRect["x"]) +
      _0x1b9453.viewport["viewportWidth"],
    _0x621a1a = Xo(_0x1b9453, X(_0x1b9453.columnWidths));
  return Math.min(_0x8c7040, _0x621a1a);
}
function Yo(_0xb7d2f0, _0x460ddd) {
  var _0x71894d;
  let _0x31c369 =
      _0x460ddd -
      _0xb7d2f0.tableRect["x"] +
      (((_0x71894d = _0xb7d2f0.viewport) == null
        ? undefined
        : _0x71894d.scrollLeft) ?? 0),
    _0x346bb5 = X(_0xb7d2f0.columnWidths);
  return _0x31c369 < 0 || _0x31c369 > _0x346bb5 ? null : _0x31c369;
}
function Xo(_0x5bdeb4, _0x57065a) {
  var _0x3424a8;
  return (
    _0x5bdeb4.tableRect["x"] +
    _0x57065a -
    (((_0x3424a8 = _0x5bdeb4.viewport) == null
      ? undefined
      : _0x3424a8.scrollLeft) ?? 0)
  );
}
function Zo(_0xbc117, _0x441aed, _0xda0632, _0x8811ff, _0x236b08, _0xddc92d) {
  if (_0xbc117.roundRect) {
    (_0xbc117.beginPath(),
      _0xbc117.roundRect(
        _0x441aed,
        _0xda0632,
        _0x8811ff,
        _0x236b08,
        _0xddc92d,
      ));
    return;
  }
  (_0xbc117.beginPath(),
    _0xbc117.rect(_0x441aed, _0xda0632, _0x8811ff, _0x236b08));
}
function X(_0x3a4c16) {
  return _0x3a4c16.reduce((_0x9864a7, _0x676c49) => _0x9864a7 + _0x676c49, 0);
}
function Qo(_0x28fee0, _0x27b3f3) {
  return (
    !_0x28fee0 ||
    _0x28fee0.contentWidth !== _0x27b3f3.contentWidth ||
    _0x28fee0.leadingInsetLeft !== _0x27b3f3.leadingInsetLeft ||
    _0x28fee0.overflowWidthThreshold !== _0x27b3f3.overflowWidthThreshold ||
    _0x28fee0.scrollLeft !== _0x27b3f3.scrollLeft ||
    _0x28fee0.trailingInsetRight !== _0x27b3f3.trailingInsetRight ||
    _0x28fee0.viewportLeft !== _0x27b3f3.viewportLeft ||
    _0x28fee0.viewportWidth !== _0x27b3f3.viewportWidth
  );
}
function $o(_0x4b6edf, _0x13684f) {
  return _0x4b6edf
    ? _0x4b6edf.findIndex((_0x18cdd2) => _0x18cdd2 === _0x13684f)
    : _0x13684f;
}
function es(_0x2717e1, _0x212975) {
  let _0xff3bea = 0;
  for (let _0x48fb83 = 0; _0x48fb83 < _0x2717e1.length; _0x48fb83++)
    if (((_0xff3bea += _0x2717e1[_0x48fb83]), _0x212975 <= _0xff3bea))
      return _0x48fb83;
  return _0x2717e1.length - 1;
}
function Z(_0xa0ebaa, _0x4fc306, _0x385f6e) {
  return (
    _0x4fc306 >= _0xa0ebaa.x &&
    _0x4fc306 <= _0xa0ebaa.x + _0xa0ebaa.width &&
    _0x385f6e >= _0xa0ebaa.y &&
    _0x385f6e <= _0xa0ebaa.y + _0xa0ebaa.height
  );
}
function ts(_0x5662be) {
  return (
    typeof _0x5662be.clientX == "number" && typeof _0x5662be.clientY == "number"
  );
}
function ns(_0x405892) {
  return _0x405892.source === _0x39467c.Text ||
    _0x405892.kind === _0x4f4538.Text ||
    _0x405892.kind === _0x4f4538.None
    ? false
    : _0x405892.startRow >= 0 &&
        _0x405892.endRow >= 0 &&
        _0x405892.startColumn >= 0 &&
        _0x405892.endColumn >= 0;
}
function rs(_0x1038d3, _0xfd51fa) {
  return (
    !!(_0x1038d3 != null && _0x1038d3.tableId) &&
    _0x1038d3.source !== _0x39467c.Text &&
    _0x1038d3.tableId === _0xfd51fa.tableId &&
    _0xfd51fa.row >= _0x1038d3.startRow &&
    _0xfd51fa.row <= _0x1038d3.endRow &&
    _0xfd51fa.column >= _0x1038d3.startColumn &&
    _0xfd51fa.column <= _0x1038d3.endColumn
  );
}
function is(_0x1367dc) {
  return (_0x1367dc == null ? undefined : _0x1367dc.kind) === "row-header" &&
    _0x1367dc.row != null
    ? { axis: "row", index: _0x1367dc.row }
    : (_0x1367dc == null ? undefined : _0x1367dc.kind) === "column-header" &&
        _0x1367dc.column != null
      ? { axis: "column", index: _0x1367dc.column }
      : null;
}
function as(_0xc2dc37, _0x42a76e, _0x54a323, _0x3919bf) {
  return !_0xc2dc37 || _0xc2dc37.tableId !== _0x42a76e
    ? false
    : _0x54a323 === "row"
      ? (_0xc2dc37.kind === _0x4f4538.Row ||
          _0xc2dc37.kind === _0x4f4538.Table) &&
        _0x3919bf >= _0xc2dc37.startRow &&
        _0x3919bf <= _0xc2dc37.endRow
      : (_0xc2dc37.kind === _0x4f4538.Column ||
          _0xc2dc37.kind === _0x4f4538.Table) &&
        _0x3919bf >= _0xc2dc37.startColumn &&
        _0x3919bf <= _0xc2dc37.endColumn;
}
function os(_0x2906ae) {
  return (
    _0x2906ae.kind === _0x4f4538.Row ||
    _0x2906ae.kind === _0x4f4538.Column ||
    _0x2906ae.kind === _0x4f4538.Table
  );
}
function ss(_0x5ebda1) {
  return _0x5ebda1
    ? [_0x5ebda1.left, _0x5ebda1.top, _0x5ebda1.right, _0x5ebda1.bottom].join(
        ":",
      )
    : "";
}
function cs(_0x5d9370) {
  return { x: _0x5d9370.x, y: _0x5d9370.y, width: 180, height: 72 };
}
function ls(_0xbf9d75) {
  return { x: _0xbf9d75.x, y: _0xbf9d75.y, width: 148, height: 72 };
}
function us() {
  return [
    { direction: _0x5c49d0.Asc, labelKey: "docs-table-ui.sortAscending" },
    { direction: _0x5c49d0.Desc, labelKey: "docs-table-ui.sortDescending" },
  ];
}
function ds() {
  return [
    _0x587011.All,
    _0x587011.Inner,
    _0x587011.Outer,
    _0x587011.Top,
    _0x587011.Bottom,
    _0x587011.Left,
    _0x587011.Right,
    _0x587011.None,
    _0x587011.InnerHorizontal,
    _0x587011.InnerVertical,
  ].map((_0x6868c9) => ({ iconName: Ca(_0x6868c9), preset: _0x6868c9 }));
}
function fs(_0xdbc7ac) {
  return (
    {
      "column-header": "docs-table-ui.selectColumn",
      "column-insert-dot": "docs-table-ui.insertColumn",
      "row-header": "docs-table-ui.selectRow",
      "row-insert-dot": "docs-table-ui.insertRow",
      "table-select": "docs-table-ui.selectTable",
    }[_0xdbc7ac] ?? null
  );
}
function ps(_0x25eaaa) {
  return {
    all: "docs-table-ui.borderAll",
    bottom: "docs-table-ui.borderBottom",
    inner: "docs-table-ui.borderInner",
    innerHorizontal: "docs-table-ui.borderInnerHorizontal",
    innerVertical: "docs-table-ui.borderInnerVertical",
    left: "docs-table-ui.borderLeft",
    none: "docs-table-ui.borderNone",
    outer: "docs-table-ui.borderOuter",
    right: "docs-table-ui.borderRight",
    top: "docs-table-ui.borderTop",
  }[_0x25eaaa];
}
let ms = class extends _0xc3c4df {
  constructor(_0x25f084) {
    (super(),
      (this._commandService = _0x25f084),
      this.disposeWithMe(this._commandService["registerCommand"](z)));
  }
};
ms = va([K(0, _0x3eaaf9)], ms);
let hs = class extends _0xc3c4df {
  constructor(_0x5b7bab) {
    (super(),
      (this._commandService = _0x5b7bab),
      [Ai, ji, Mi, Ni, Pi, Fi, Ii, Li, Ri, zi].forEach((_0x5e0782) =>
        this.disposeWithMe(this._commandService["registerCommand"](_0x5e0782)),
      ));
  }
};
hs = va([K(0, _0x3eaaf9)], hs);
let Q = null;
const gs = {
    id: "docs-table-ui.command.select-all",
    type: _0x4cecd5.COMMAND,
    handler: async (_0x6ca0a) => {
      var _0x1c1510, _0x19d508;
      let _0x16eba7 = _0x6ca0a.get(_0x3eaaf9),
        _0xa31fd5 = _0x6ca0a.get(_0x373426),
        _0x39e559 = _0x6ca0a.get(_0x12b354),
        _0x2eb812 = _0x6ca0a.get(_0x14b58d),
        _0x23af46 =
          (_0x1c1510 = _0xa31fd5.getCurrentUnitOfType) == null
            ? undefined
            : _0x1c1510.call(_0xa31fd5, _0x3e7115.UNIVER_DOC),
        _0x16a252 = _0x23af46 == null ? undefined : _0x23af46.getSnapshot(),
        _0x1a515f = _0x23af46 == null ? undefined : _0x23af46.getUnitId();
      if (!_0x16a252 || !_0x1a515f) return ((Q = null), vs(_0x16eba7));
      bs(_0x39e559, _0x2eb812, _0x16a252);
      let _0x5285aa = _0x2eb812.getCurrentSelection();
      if (!(_0x5285aa != null && _0x5285aa.tableId))
        return ((Q = null), vs(_0x16eba7));
      let _0x21682f = _0x556668(_0x16a252, _0x5285aa.tableId);
      if (!_0x21682f) return ((Q = null), vs(_0x16eba7));
      if (_0x5285aa.source === _0x39467c.Structural)
        return (Q == null ? undefined : Q.phase) === "table" &&
          ks(_0x1a515f, _0x5285aa)
          ? ((Q = null),
            _0x2eb812.clearStructuralSelection({ clearNativeSelection: false }),
            _0x2eb812.setNativeSelectionSuppressed(false),
            _0x16eba7.executeCommand(_0x284362.id, {
              segmentId: _0x5285aa.segmentId,
              wholeDocument: true,
            }))
          : (Ds(_0x2eb812, _0x21682f, _0x5285aa.segmentId),
            (Q = {
              phase: "table",
              rangeKey: Os({
                startRow: 0,
                endRow: Math.max(_0x21682f.rowCount - 1, 0),
                startColumn: 0,
                endColumn: Math.max(_0x21682f.columnCount - 1, 0),
              }),
              tableId: _0x21682f.tableId,
              unitId: _0x1a515f,
            }),
            true);
      let _0x12cd8a =
        (_0x19d508 = _0x21682f.rows[_0x5285aa.startRow]) == null
          ? undefined
          : _0x19d508.cells[_0x5285aa.startColumn];
      if (!_0x12cd8a) return vs(_0x16eba7);
      let _0x4475e3 = ys(_0x39e559);
      if (!_0x4475e3)
        return (
          Es(
            _0x2eb812,
            _0x5285aa.tableId,
            _0x12cd8a,
            _0x5285aa.segmentId,
            _0x1a515f,
          ),
          true
        );
      let _0x469f79 = xs(_0x12cd8a, _0x5285aa.segmentId);
      if (ws(_0x4475e3, _0x469f79))
        return (
          Es(
            _0x2eb812,
            _0x5285aa.tableId,
            _0x12cd8a,
            _0x5285aa.segmentId,
            _0x1a515f,
          ),
          true
        );
      let _0x2afe7d = Ss(_0x16a252, _0x12cd8a, _0x5285aa.segmentId),
        _0x9e5395 = Cs(
          _0x2afe7d,
          _0x4475e3.startOffset ?? _0x469f79.startOffset,
        );
      return _0x9e5395
        ? ws(_0x4475e3, _0x9e5395)
          ? (_0x2afe7d.length <= 1
              ? Es(
                  _0x2eb812,
                  _0x5285aa.tableId,
                  _0x12cd8a,
                  _0x5285aa.segmentId,
                  _0x1a515f,
                )
              : ((Q = null), Ts(_0x39e559, [_0x469f79], _0x1a515f)),
            true)
          : ((Q = null), Ts(_0x39e559, [_0x9e5395], _0x1a515f), true)
        : (Ts(_0x39e559, [_0x469f79], _0x1a515f), true);
    },
  },
  _s = {
    id: gs.id,
    binding: _0x3a3e97.A | _0x12016b.CTRL_COMMAND,
    priority: 100,
    preconditions: (_0x4dd278) =>
      _0x4dd278.getContextValue(_0x4ce4d2) &&
      (_0x4dd278.getContextValue(_0x27ea1d) ||
        _0x4dd278.getContextValue(_0x6ba6e6)),
  };
function vs(_0x20e45f) {
  return _0x20e45f.executeCommand(_0x284362.id);
}
function ys(_0x35dcb4) {
  var _0x452036, _0x5a0c41;
  let _0x40b618 =
    (_0x452036 = _0x35dcb4.getDocRanges) == null
      ? undefined
      : _0x452036.call(_0x35dcb4);
  return (
    (_0x40b618 == null
      ? undefined
      : _0x40b618.find((_0x1ba7a2) => _0x1ba7a2.isActive)) ??
    ((_0x5a0c41 = _0x35dcb4.getActiveTextRange) == null
      ? undefined
      : _0x5a0c41.call(_0x35dcb4)) ??
    (_0x40b618 == null ? undefined : _0x40b618[0]) ??
    null
  );
}
function bs(_0x2d22a5, _0x5a72b6, _0x2232ea) {
  var _0x3cf4e2;
  let _0x5eb5fe = _0x5a72b6.getStructuralSelection();
  if (!(_0x5eb5fe != null && _0x5eb5fe.tableId)) return;
  let _0x2967eb = ys(_0x2d22a5),
    _0x2b2734 = _0x2967eb == null ? undefined : _0x2967eb.startOffset;
  _0x2b2734 != null &&
    (((_0x3cf4e2 = _0x2232ea.body) == null ||
    (_0x3cf4e2 = _0x3cf4e2.tables) == null
      ? undefined
      : _0x3cf4e2.some(
          (_0x34c817) =>
            _0x2b2734 > _0x34c817.startIndex && _0x2b2734 < _0x34c817.endIndex,
        )) ??
      false) &&
    ((Q = null),
    _0x5a72b6.setNativeSelectionSuppressed(false),
    _0x5a72b6.clearStructuralSelection({ clearNativeSelection: false }));
}
function xs(_0x47f8ac, _0x212913) {
  let _0x1a7de9 = _0x47f8ac.startOffset + 1,
    _0x55b6ea = Math.max(_0x1a7de9, _0x47f8ac.endOffset - 1);
  return {
    collapsed: _0x1a7de9 === _0x55b6ea,
    endOffset: _0x55b6ea,
    rangeType: _0x235311.TEXT,
    segmentId: _0x212913,
    startOffset: _0x1a7de9,
  };
}
function Ss(_0xf800bb, _0x3b4cdf, _0x408b46) {
  var _0x237b36;
  let _0x369bd0 =
      ((_0x237b36 = _0xf800bb.body) == null
        ? undefined
        : _0x237b36.dataStream) ?? "",
    _0x57bd5f = _0x3b4cdf.startOffset + 1,
    _0x2803f7 = Math.max(_0x57bd5f, _0x3b4cdf.endOffset - 1),
    _0x48014a = [],
    _0x40ee37 = _0x57bd5f;
  for (let _0x5691a3 = _0x57bd5f; _0x5691a3 <= _0x2803f7; _0x5691a3++)
    _0x369bd0[_0x5691a3] === "\x0d" &&
      (_0x48014a.push({
        collapsed: _0x40ee37 === _0x5691a3,
        endOffset: _0x5691a3,
        rangeType: _0x235311.TEXT,
        segmentId: _0x408b46,
        startOffset: _0x40ee37,
      }),
      (_0x40ee37 = _0x5691a3 + 1),
      _0x369bd0[_0x40ee37] === "\x0a" && (_0x40ee37 += 1));
  return (
    _0x48014a.length || _0x48014a.push(xs(_0x3b4cdf, _0x408b46)),
    _0x48014a
  );
}
function Cs(_0xb74d50, _0x3b36a2) {
  return (
    _0xb74d50.find((_0x71fd73) =>
      _0x71fd73.startOffset == null || _0x71fd73.endOffset == null
        ? false
        : _0x3b36a2 >= _0x71fd73.startOffset &&
          _0x3b36a2 <= _0x71fd73.endOffset,
    ) ??
    _0xb74d50[0] ??
    null
  );
}
function ws(_0x1dfaff, _0x31c097) {
  return (
    _0x1dfaff.startOffset === _0x31c097.startOffset &&
    _0x1dfaff.endOffset === _0x31c097.endOffset
  );
}
function Ts(_0x2cf249, _0xbdb53b, _0xefa5fe) {
  var _0x19d868;
  (_0x19d868 = _0x2cf249.replaceDocRanges) == null ||
    _0x19d868.call(
      _0x2cf249,
      _0xbdb53b,
      { subUnitId: _0xefa5fe, unitId: _0xefa5fe },
      false,
    );
}
function Es(_0x48c081, _0x3a38e8, _0x4b110d, _0x454eee, _0x577bbf) {
  (_0x48c081.setNativeSelectionSuppressed(true),
    _0x48c081.setStructuralSelection({
      kind: _0x4f4538.Cell,
      tableId: _0x3a38e8,
      segmentId: _0x454eee,
      startOffset: _0x4b110d.startOffset,
      endOffset: _0x4b110d.endOffset,
      startRow: _0x4b110d.row,
      endRow: _0x4b110d.row,
      startColumn: _0x4b110d.column,
      endColumn: _0x4b110d.column,
    }),
    (Q = {
      phase: "cell",
      rangeKey: Os({
        startRow: _0x4b110d.row,
        endRow: _0x4b110d.row,
        startColumn: _0x4b110d.column,
        endColumn: _0x4b110d.column,
      }),
      tableId: _0x3a38e8,
      unitId: _0x577bbf,
    }));
}
function Ds(_0x1648e6, _0x11f1c9, _0xfc68fa) {
  (_0x1648e6.setNativeSelectionSuppressed(true),
    _0x1648e6.setStructuralSelection({
      kind: _0x4f4538.Table,
      tableId: _0x11f1c9.tableId,
      segmentId: _0xfc68fa,
      startRow: 0,
      endRow: Math.max(_0x11f1c9.rowCount - 1, 0),
      startColumn: 0,
      endColumn: Math.max(_0x11f1c9.columnCount - 1, 0),
    }));
}
function Os(_0x45a68a) {
  return [
    Math.min(_0x45a68a.startRow, _0x45a68a.endRow),
    Math.max(_0x45a68a.startRow, _0x45a68a.endRow),
    Math.min(_0x45a68a.startColumn, _0x45a68a.endColumn),
    Math.max(_0x45a68a.startColumn, _0x45a68a.endColumn),
  ].join(":");
}
function ks(_0x303476, _0x4546c9) {
  return (
    (Q == null ? undefined : Q.unitId) === _0x303476 &&
    Q.tableId === _0x4546c9.tableId &&
    Q.rangeKey === Os(_0x4546c9)
  );
}
let As = class extends _0xc3c4df {
  constructor(_0x1a0f80, _0x3a34c0) {
    (super(),
      (this._commandService = _0x1a0f80),
      (this._shortcutService = _0x3a34c0),
      this.disposeWithMe(this._commandService["registerCommand"](gs)),
      this.disposeWithMe(this._shortcutService["registerShortcut"](_s)));
  }
};
As = va([K(0, _0x3eaaf9), K(1, _0x26ecb8)], As);
let js = class extends _0xc3c4df {
  constructor(_0xd6cbd6, _0x3661e3) {
    (super(),
      (this._menuManagerService = _0xd6cbd6),
      (this._selectionService = _0x3661e3),
      this._menuManagerService["mergeMenu"](si),
      this._menuManagerService["appendRootMenu"](oi),
      this.disposeWithMe(
        this._selectionService["selectionChange$"].subscribe((_0x2d7c08) => {
          (_0x2d7c08 != null &&
            _0x2d7c08.tableId &&
            this._menuManagerService["mergeMenu"](si),
            this._menuManagerService["appendRootMenu"]({}));
        }),
      ));
  }
};
js = va([K(0, _0x36628e), K(1, _0x76478b(_0x14b58d))], js);
var Ms = class extends _0xc3c4df {
  constructor(..._0x2850d2) {
    (super(..._0x2850d2),
      U(this, "_triggers", []),
      U(this, "_triggerChange$", new _0x29a1ff()),
      U(this, "triggerChange$", this._triggerChange$["asObservable"]()));
  }
  updateTriggers(_0x4f3750) {
    ((this._triggers = _0x4f3750 ? Za(_0x4f3750) : []),
      this._triggerChange$["next"](this._triggers));
  }
  getTriggers() {
    return this._triggers;
  }
  hitTest(_0x20597b, _0x1d059d) {
    return go(this._triggers, _0x20597b, _0x1d059d);
  }
  dispose() {
    (super.dispose(), this._triggerChange$["complete"]());
  }
};
let $ = class extends _0x37fb27 {
  constructor(_0x566e1b = ui, _0x4e8a71, _0x430c5d, _0x329bff) {
    (super(),
      (this._config = _0x566e1b),
      (this._injector = _0x4e8a71),
      (this._renderManagerService = _0x430c5d),
      (this._configService = _0x329bff));
    let { menu: _0x2a840c, ..._0x1724ab } = _0x93dcd0({}, ui, this._config);
    (_0x2a840c &&
      this._configService["setConfig"]("menu", _0x2a840c, { merge: true }),
      this._configService["setConfig"]("docs-table-ui.config", _0x1724ab));
  }
  onStarting() {
    (this._injector["add"]([ya]),
      this._injector["get"](ya),
      this._injector["add"]([Gi]),
      this._injector["add"]([ba]),
      this._injector["add"]([hs]),
      this._injector["add"]([As]),
      this._injector["add"]([xa]),
      this._injector["add"]([js]),
      this._injector["add"]([ms]),
      this._injector["add"]([Ms]),
      this._injector["get"](ms),
      this._injector["get"](hs),
      this._injector["get"](As),
      this._injector["get"](Ms));
  }
  onRendered() {
    (this._injector["get"](js),
      this.disposeWithMe(
        this._renderManagerService["registerRenderModule"](
          _0x3e7115.UNIVER_DOC,
          [Lo],
        ),
      ));
  }
};
(U($, "pluginName", _0xb8f363 + "_UI_PLUGIN"),
  U($, "packageName", ci),
  U($, "version", li),
  U($, "type", _0x3e7115.UNIVER_DOC),
  ($ = va(
    [
      _0xd04164(_0x10db5f, _0x51c79e, _0x39358b, _0xf10a4, _0x422753),
      K(1, _0x76478b(_0x49243a)),
      K(2, _0x268a18),
      K(3, _0x34047a),
    ],
    $,
  )));
export {
  ba as DocsTablePassiveWheelService,
  si as DocsTableUIMenuSchema,
  $ as UniverDocsTableUIPlugin,
};
