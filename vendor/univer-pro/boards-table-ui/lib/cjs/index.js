Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/boards"),
  t = require("@univerjs-pro/boards-table"),
  n = require("@univerjs-pro/boards-ui"),
  r = require("@univerjs-pro/license"),
  i = require("@univerjs-pro/slides-table"),
  a = require("@univerjs-pro/slides-table-ui"),
  o = require("@univerjs-pro/slides-ui"),
  s = require("@univerjs/core"),
  c = require("@univerjs/engine-render"),
  l = require("@univerjs/ui"),
  u = require("@univerjs-pro/shape-editor-ui"),
  d = require("@univerjs/design"),
  f = require("@univerjs/icons"),
  p = require("react"),
  m = require("@univerjs/drawing"),
  h = require("react/jsx-runtime"),
  g = require("@univerjs/drawing-ui"),
  _ = require("@univerjs/protocol"),
  v = require("@univerjs-pro/docs-table"),
  y = require("@univerjs/docs-ui");
var b = "@univerjs-pro/boards-table-ui",
  x = "1.0.0-insiders.20260907-70fc579";
const S = {
  insertRows: t.InsertBoardTableRowsCommand["id"],
  insertColumns: t.InsertBoardTableColumnsCommand["id"],
  deleteRows: t.DeleteBoardTableRowsCommand["id"],
  deleteColumns: t.DeleteBoardTableColumnsCommand["id"],
  mergeCells: t.MergeBoardTableCellsCommand["id"],
  unmergeCells: t.UnmergeBoardTableCellsCommand["id"],
  updateTable: t.UpdateBoardTableCommand["id"],
};
function C(_0x7e2a4d, _0x323998) {
  return (0, a.resolveSlideTableContextMenuActions)(_0x7e2a4d, _0x323998, S);
}
function w(_0x4927b5, _0x7daeb6, _0x52d567) {
  return (0, a.buildSlideTableContextMenuCommand)(
    _0x4927b5,
    _0x7daeb6,
    _0x52d567,
    S,
  );
}
const T = P(
    "board-table.operation.insert-row-above",
    a.SLIDE_TABLE_CONTEXT_MENU_ACTIONS["InsertRowAbove"],
  ),
  E = P(
    "board-table.operation.insert-row-below",
    a.SLIDE_TABLE_CONTEXT_MENU_ACTIONS["InsertRowBelow"],
  ),
  D = P(
    "board-table.operation.insert-column-left",
    a.SLIDE_TABLE_CONTEXT_MENU_ACTIONS["InsertColumnLeft"],
  ),
  O = P(
    "board-table.operation.insert-column-right",
    a.SLIDE_TABLE_CONTEXT_MENU_ACTIONS["InsertColumnRight"],
  ),
  k = P(
    "board-table.operation.delete-rows",
    a.SLIDE_TABLE_CONTEXT_MENU_ACTIONS["DeleteRows"],
  ),
  ee = P(
    "board-table.operation.delete-columns",
    a.SLIDE_TABLE_CONTEXT_MENU_ACTIONS["DeleteColumns"],
  ),
  A = P(
    "board-table.operation.merge-cells",
    a.SLIDE_TABLE_CONTEXT_MENU_ACTIONS["MergeCells"],
  ),
  j = P(
    "board-table.operation.unmerge-cells",
    a.SLIDE_TABLE_CONTEXT_MENU_ACTIONS["UnmergeCells"],
  ),
  te = P(
    "board-table.operation.distribute-rows",
    a.SLIDE_TABLE_CONTEXT_MENU_ACTIONS["DistributeRows"],
  ),
  M = P(
    "board-table.operation.distribute-columns",
    a.SLIDE_TABLE_CONTEXT_MENU_ACTIONS["DistributeColumns"],
  ),
  N = [
    { title: "boards-table-ui.contextMenu.resetColor" },
    { title: "white", color: "white" },
    { title: "gray.100", color: "gray.100" },
    { title: "primary.100", color: "primary.100" },
    { title: "blue.100", color: "blue.100" },
    { title: "green.100", color: "green.100" },
    { title: "yellow.100", color: "yellow.100" },
    { title: "red.100", color: "red.100" },
  ],
  ne = [
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
  re = xe(
    "board-table.operation.border-all",
    i.SlideTableBorderPresetEnum["All"],
  ),
  ie = xe(
    "board-table.operation.border-outer",
    i.SlideTableBorderPresetEnum["Outer"],
  ),
  ae = xe(
    "board-table.operation.border-inner",
    i.SlideTableBorderPresetEnum["Inner"],
  ),
  oe = xe(
    "board-table.operation.border-none",
    i.SlideTableBorderPresetEnum["None"],
  ),
  se = F("board-table.operation.align-left", {
    axis: "horizontal",
    value: s.HorizontalAlign["LEFT"],
  }),
  ce = F("board-table.operation.align-center", {
    axis: "horizontal",
    value: s.HorizontalAlign["CENTER"],
  }),
  le = F("board-table.operation.align-right", {
    axis: "horizontal",
    value: s.HorizontalAlign["RIGHT"],
  }),
  ue = F("board-table.operation.align-top", {
    axis: "vertical",
    value: s.VerticalAlign["TOP"],
  }),
  de = F("board-table.operation.align-middle", {
    axis: "vertical",
    value: s.VerticalAlign["MIDDLE"],
  }),
  fe = F("board-table.operation.align-bottom", {
    axis: "vertical",
    value: s.VerticalAlign["BOTTOM"],
  }),
  pe = N.map((_0x40e750, _0x9b97c) =>
    Se("board-table.operation.background-color-" + _0x9b97c, _0x40e750),
  ),
  me = ne.map((_0x469eac, _0x31287f) =>
    Ce("board-table.operation.text-color-" + _0x31287f, _0x469eac),
  ),
  he = be(
    "board-table.operation.copy-table",
    n.BoardCopySelectionOperation["id"],
  ),
  ge = be(
    "board-table.operation.cut-table",
    n.BoardCutSelectionOperation["id"],
  ),
  _e = {
    id: "board-table.operation.delete-table",
    type: s.CommandType["OPERATION"],
    async handler(_0x43d023) {
      let _0x48be13 = _0x43d023.get(a.SlideTableSelectionService),
        _0x188052 = _0x48be13.getSelection();
      if (!_0x188052)
        return _0x43d023
          .get(s.ICommandService)
          .executeCommand(n.BoardDeleteSelectionOperation["id"]);
      let _0x8e6a88 = await _0x43d023
        .get(s.ICommandService)
        .executeCommand(e.RemoveBoardElementsOperation["id"], {
          unitId: _0x188052.unitId,
          subUnitId: _0x188052.subUnitId,
          elementIds: [_0x188052.elementId],
        });
      return (_0x8e6a88 && _0x48be13.clear(), _0x8e6a88);
    },
  },
  ve = [
    T,
    E,
    D,
    O,
    k,
    ee,
    A,
    j,
    te,
    M,
    he,
    ge,
    _e,
    re,
    ie,
    ae,
    oe,
    se,
    ce,
    le,
    ue,
    de,
    fe,
    ...pe,
    ...me,
  ];
function ye(_0x3e7103, _0x2d300c) {
  var _0x18e4af;
  let _0x1b768b = De(_0x3e7103);
  return _0x1b768b
    ? (((_0x18e4af = C(_0x1b768b.table, _0x1b768b.selection).find(
        (_0x4a54f6) => _0x4a54f6.id === _0x2d300c,
      )) == null
        ? undefined
        : _0x18e4af.enabled) ?? false)
    : false;
}
function P(_0x744949, _0x42665f) {
  return {
    id: _0x744949,
    type: s.CommandType["OPERATION"],
    handler(_0x27e4f1, _0x308ccf) {
      let _0xfb8fc5 = De(
        _0x27e4f1,
        _0x308ccf == null ? undefined : _0x308ccf.selection,
      );
      if (!_0xfb8fc5) return false;
      let _0x1cd1cd = w(_0xfb8fc5.table, _0xfb8fc5.selection, _0x42665f);
      return _0x1cd1cd
        ? _0x27e4f1
            .get(s.ICommandService)
            .executeCommand(_0x1cd1cd.commandId, _0x1cd1cd.params)
        : false;
    },
  };
}
function be(_0x59b081, _0x6a0b79) {
  return {
    id: _0x59b081,
    type: s.CommandType["OPERATION"],
    handler(_0x395ee7) {
      return _0x395ee7.get(s.ICommandService).executeCommand(_0x6a0b79);
    },
  };
}
function xe(_0x4cb7fc, _0x27f09a) {
  return we(_0x4cb7fc, (_0x221ae2, _0x5ab1c4) =>
    (0, a.buildSlideTableBorderPresetPatch)(_0x221ae2, _0x5ab1c4, _0x27f09a),
  );
}
function F(_0x2ec49a, _0x58761a) {
  return we(_0x2ec49a, (_0x50b807, _0x4d7510) =>
    (0, a.buildSlideTableTextAlignPatch)(_0x50b807, _0x4d7510, _0x58761a),
  );
}
function Se(_0x9a1315, _0x42f5a6) {
  return {
    ...we(_0x9a1315, (_0x48ef0d, _0x3f1634, _0x26e595) =>
      (0, a.buildSlideTableBackgroundColorPatch)(
        _0x48ef0d,
        _0x3f1634,
        Te(_0x26e595, _0x42f5a6.color),
      ),
    ),
    title: _0x42f5a6.title,
  };
}
function Ce(_0x3a3ab5, _0x487bfb) {
  return {
    ...we(_0x3a3ab5, (_0x482a48, _0x49e57f, _0x17886b) =>
      (0, a.buildSlideTableTextColorPatch)(
        _0x482a48,
        _0x49e57f,
        Te(_0x17886b, _0x487bfb.color),
      ),
    ),
    title: _0x487bfb.title,
  };
}
function we(_0x474531, _0x35e45e) {
  return {
    id: _0x474531,
    type: s.CommandType["OPERATION"],
    handler(_0x2adf39) {
      let _0x5be50a = Ee(_0x2adf39);
      return _0x5be50a
        ? _0x2adf39
            .get(s.ICommandService)
            .executeCommand(t.UpdateBoardTableCommand["id"], {
              unitId: _0x5be50a.unitId,
              tableId: _0x5be50a.tableId,
              patch: _0x35e45e(_0x5be50a.table, _0x5be50a.range, _0x2adf39),
            })
        : false;
    },
  };
}
function Te(_0x940487, _0xe81d75) {
  if (!_0xe81d75) return;
  let _0x36c4c5 = _0x940487.get(s.ThemeService);
  return _0x36c4c5.isValidThemeColor(_0xe81d75)
    ? _0x36c4c5.getColorFromTheme(_0xe81d75)
    : _0xe81d75;
}
function Ee(_0x1ba58d) {
  let _0x4687fc = (0, a.getSlideTableSelectionContext)(
    _0x1ba58d.get(a.SlideTableSelectionService).getSelection(),
  );
  if (!_0x4687fc) return null;
  let _0x16fb3f = _0x1ba58d
    .get(i.SlideTableResourceService)
    .getTable(_0x4687fc.unitId, _0x4687fc.tableId);
  return _0x16fb3f ? { ..._0x4687fc, table: _0x16fb3f } : null;
}
function De(_0x415989, _0x73da33) {
  let _0x418047 =
      _0x73da33 ?? _0x415989.get(a.SlideTableSelectionService).getSelection(),
    _0x43f885 = _0x418047 == null ? undefined : _0x418047.ranges[0];
  return !_0x418047 || !_0x43f885
    ? null
    : {
        selection: _0x418047,
        table: _0x415989
          .get(i.SlideTableResourceService)
          .getTable(_0x418047.unitId, _0x418047.tableId),
      };
}
function I(_0x347905, _0x3718af) {
  return function (_0x46bb09, _0x210c75) {
    _0x3718af(_0x46bb09, _0x210c75, _0x347905);
  };
}
function L(_0x4c6a0c, _0x4d0a17, _0x1607e9, _0x16b85b) {
  var _0x25a415 = arguments.length,
    _0x441548 =
      _0x25a415 < 3
        ? _0x4d0a17
        : _0x16b85b === null
          ? (_0x16b85b = Object.getOwnPropertyDescriptor(_0x4d0a17, _0x1607e9))
          : _0x16b85b,
    _0x162769;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x441548 = Reflect.decorate(_0x4c6a0c, _0x4d0a17, _0x1607e9, _0x16b85b);
  else {
    for (var _0x2260ac = _0x4c6a0c.length - 1; _0x2260ac >= 0; _0x2260ac--)
      (_0x162769 = _0x4c6a0c[_0x2260ac]) &&
        (_0x441548 =
          (_0x25a415 < 3
            ? _0x162769(_0x441548)
            : _0x25a415 > 3
              ? _0x162769(_0x4d0a17, _0x1607e9, _0x441548)
              : _0x162769(_0x4d0a17, _0x1607e9)) || _0x441548);
  }
  return (
    _0x25a415 > 3 &&
      _0x441548 &&
      Object.defineProperty(_0x4d0a17, _0x1607e9, _0x441548),
    _0x441548
  );
}
const Oe = "FOCUSING_BOARD_TABLE";
let R = class extends a.TableKeyboardServiceBase {
  constructor(_0x56e4a2) {
    (super(), (this._contextService = _0x56e4a2));
  }
  setFocused(_0xf7d290) {
    this._contextService["setContextValue"](Oe, _0xf7d290);
  }
  canHandleNativeInput(_0x45779b, _0xf6d9df) {
    return this._contextService["getContextValue"]("FOCUSING_BOARD_TABLE")
      ? _0xf6d9df != null &&
        _0xf6d9df.allowDocsEditor &&
        (0, a.isSlideTableDocumentEditorTarget)(_0x45779b.target)
        ? true
        : !(0, a.isSlideTableEditableTarget)(_0x45779b.target)
      : false;
  }
};
R = L([I(0, s.IContextService)], R);
let ke = class extends s.Disposable {
  constructor(_0x2a15da, _0x44c672) {
    (super(),
      (this.renderContext = _0x2a15da),
      (this.keyboardService = _0x44c672));
  }
};
ke = L([I(1, (0, s.Inject)(R))], ke);
const Ae = {
  id: "board-table.operation.keyboard",
  type: s.CommandType["OPERATION"],
  handler: (_0x213820, _0x2ede31, _0x40e515) => {
    if (!(_0x2ede31 != null && _0x2ede31.action)) return false;
    let _0x476c2f = je(_0x213820, _0x40e515);
    return (
      (_0x476c2f == null
        ? undefined
        : _0x476c2f.keyboardService["handle"](_0x2ede31.action)) ?? false
    );
  },
};
function je(_0x44d524, _0xd2cf4f) {
  var _0x581536, _0x7f4c14;
  let _0x3ed08f =
    typeof (_0xd2cf4f == null ? undefined : _0xd2cf4f.unitId) == "string"
      ? _0xd2cf4f.unitId
      : (_0x581536 = _0x44d524
            .get(s.IUniverInstanceService)
            .getCurrentUnitOfType(s.UniverInstanceType["UNIVER_BOARD"])) == null
        ? undefined
        : _0x581536.getUnitId();
  return _0x3ed08f
    ? (((_0x7f4c14 = _0x44d524
        .get(c.IRenderManagerService)
        .getRenderUnitById(_0x3ed08f)) == null
        ? undefined
        : _0x7f4c14.with(ke)) ?? null)
    : null;
}
const Me = [Ae],
  Ne = {
    "arrow-left": l.KeyCode["ARROW_LEFT"],
    "arrow-right": l.KeyCode["ARROW_RIGHT"],
    "arrow-up": l.KeyCode["ARROW_UP"],
    "arrow-down": l.KeyCode["ARROW_DOWN"],
    "shift-arrow-left": l.KeyCode["ARROW_LEFT"] | l.MetaKeys["SHIFT"],
    "shift-arrow-right": l.KeyCode["ARROW_RIGHT"] | l.MetaKeys["SHIFT"],
    "shift-arrow-up": l.KeyCode["ARROW_UP"] | l.MetaKeys["SHIFT"],
    "shift-arrow-down": l.KeyCode["ARROW_DOWN"] | l.MetaKeys["SHIFT"],
    tab: l.KeyCode["TAB"],
    "shift-tab": l.KeyCode["TAB"] | l.MetaKeys["SHIFT"],
    enter: l.KeyCode["ENTER"],
    f2: l.KeyCode["F2"],
    delete: l.KeyCode["DELETE"],
    backspace: l.KeyCode["BACKSPACE"],
  },
  Pe = (0, a.buildSlideTableKeyboardShortcutBindings)(Ne).map(
    ({ binding: _0x584205, action: _0x5a2cc9 }) => Fe(_0x584205, _0x5a2cc9),
  );
function Fe(_0x265ac6, _0x44551e) {
  return {
    id: Ae.id,
    binding: _0x265ac6,
    priority: 130,
    preconditions: Ie,
    staticParameters: { action: _0x44551e },
  };
}
function Ie(_0x514417) {
  return !!_0x514417.getContextValue(Oe);
}
const Le = {};
function Re(_0x33d694) {
  return (0, a.resolveSlideTableToolbarActions)(_0x33d694, {
    mergeCells: t.MergeBoardTableCellsCommand["id"],
    unmergeCells: t.UnmergeBoardTableCellsCommand["id"],
    setCellStyle: t.SetBoardTableCellStyleCommand["id"],
    setBorderPreset: t.SetBoardTableBorderPresetCommand["id"],
  });
}
function ze(_0x4c8916, _0x2a54d1) {
  return {
    actions: Re(_0x2a54d1),
    mergeState: (0, a.resolveSlideTableMergeToolbarAction)(
      _0x4c8916,
      _0x2a54d1,
    ),
    values: (0, a.resolveSlideTableSelectionValues)(
      _0x4c8916,
      _0x2a54d1 == null ? undefined : _0x2a54d1.ranges[0],
    ),
  };
}
function Be(_0x100499, _0x429462) {
  return _0x100499 &&
    (_0x429462 == null ? undefined : _0x429462.action) === "unmerge"
    ? {
        commandId: t.UnmergeBoardTableCellsCommand["id"],
        params: {
          unitId: _0x100499.unitId,
          tableId: _0x100499.tableId,
          row: _0x429462.range["startRow"],
          column: _0x429462.range["startColumn"],
        },
      }
    : (0, a.buildSlideTableMergeToolbarCommand)(_0x100499, _0x429462, {
        mergeCells: t.MergeBoardTableCellsCommand["id"],
        unmergeCells: t.UnmergeBoardTableCellsCommand["id"],
      });
}
function Ve(_0x5494b3, _0x36377b) {
  return (0, a.buildSlideTableDeleteToolbarCommand)(_0x5494b3, _0x36377b, {
    deleteRows: t.DeleteBoardTableRowsCommand["id"],
    deleteColumns: t.DeleteBoardTableColumnsCommand["id"],
  });
}
const He = l.FONT_SIZE_LIST["map"]((_0x4007a4) => ({
    label: _0x4007a4.label,
    value: String(_0x4007a4.value),
  })),
  z =
    "\n univer-flex univer-h-6 univer-min-w-9 univer-items-center univer-justify-center univer-gap-1\n univer-rounded-md univer-border-none univer-bg-transparent univer-px-1.5 univer-text-sm\n univer-text-gray-700 univer-transition-colors\n hover:univer-bg-gray-100\n dark:!univer-text-gray-100\n dark:hover:!univer-bg-gray-700\n",
  B =
    "univer-bg-gray-100 univer-text-primary-600 dark:!univer-bg-gray-700 dark:!univer-text-primary-300",
  Ue = [0, 1, 2, 3, 4, 6],
  We = [
    {
      labelKey: "boards-table-ui.editorToolbar.borderStyleSolid",
      value: i.SlideTableBorderDashEnum["Solid"],
    },
    {
      labelKey: "boards-table-ui.editorToolbar.borderStyleDash",
      value: i.SlideTableBorderDashEnum["Dash"],
    },
    {
      labelKey: "boards-table-ui.editorToolbar.borderStyleDot",
      value: i.SlideTableBorderDashEnum["Dot"],
    },
    {
      labelKey: "boards-table-ui.editorToolbar.borderStyleDashDot",
      value: i.SlideTableBorderDashEnum["DashDot"],
    },
    {
      labelKey: "boards-table-ui.editorToolbar.noBorder",
      value: i.SlideTableBorderDashEnum["None"],
    },
  ],
  Ge = [
    {
      labelKey: "boards-table-ui.editorToolbar.borderPresetAll",
      preset: i.SlideTableBorderPresetEnum["All"],
    },
    {
      labelKey: "boards-table-ui.editorToolbar.borderPresetInner",
      preset: i.SlideTableBorderPresetEnum["Inner"],
    },
    {
      labelKey: "boards-table-ui.editorToolbar.borderPresetOuter",
      preset: i.SlideTableBorderPresetEnum["Outer"],
    },
    {
      labelKey: "boards-table-ui.editorToolbar.borderPresetTop",
      preset: i.SlideTableBorderPresetEnum["Top"],
    },
    {
      labelKey: "boards-table-ui.editorToolbar.borderPresetBottom",
      preset: i.SlideTableBorderPresetEnum["Bottom"],
    },
    {
      labelKey: "boards-table-ui.editorToolbar.borderPresetLeft",
      preset: i.SlideTableBorderPresetEnum["Left"],
    },
    {
      labelKey: "boards-table-ui.editorToolbar.borderPresetRight",
      preset: i.SlideTableBorderPresetEnum["Right"],
    },
    {
      labelKey: "boards-table-ui.editorToolbar.borderPresetInnerHorizontal",
      preset: i.SlideTableBorderPresetEnum["InnerHorizontal"],
    },
    {
      labelKey: "boards-table-ui.editorToolbar.borderPresetInnerVertical",
      preset: i.SlideTableBorderPresetEnum["InnerVertical"],
    },
    {
      labelKey: "boards-table-ui.editorToolbar.noBorder",
      preset: i.SlideTableBorderPresetEnum["None"],
    },
  ],
  Ke = {
    [i.SlideTableBorderPresetEnum["All"]]: f.AllBorderIcon,
    [i.SlideTableBorderPresetEnum["Inner"]]: f.InnerBorderDoubleIcon,
    [i.SlideTableBorderPresetEnum["Outer"]]: f.OuterBorderDoubleIcon,
    [i.SlideTableBorderPresetEnum["Top"]]: f.UpBorderDoubleIcon,
    [i.SlideTableBorderPresetEnum["Bottom"]]: f.DownBorderDoubleIcon,
    [i.SlideTableBorderPresetEnum["Left"]]: f.LeftBorderDoubleIcon,
    [i.SlideTableBorderPresetEnum["Right"]]: f.RightBorderDoubleIcon,
    [i.SlideTableBorderPresetEnum["InnerHorizontal"]]:
      f.HorizontalBorderDoubleIcon,
    [i.SlideTableBorderPresetEnum["InnerVertical"]]: f.VerticalBorderDoubleIcon,
    [i.SlideTableBorderPresetEnum["None"]]: f.NoBorderIcon,
  },
  qe = { colorChannel1: "#9ca3af" },
  V =
    "\n univer-rounded-lg univer-bg-gray-0 univer-shadow-lg dark:!univer-bg-gray-900\n";
function Je(_0x3077fc) {
  let _0x4a1954 = (0, l.useDependency)(s.LocaleService);
  return (0, h.jsx)(a.TableToolbarDropdownInteractionGuard, {
    onOpenChange: _0x3077fc.onOpenChange,
    children: ({
      handleOpenChange: _0x132fcf,
      markInternalInteraction: _0x31ab27,
    }) =>
      (0, h.jsx)(d.Dropdown, {
        open: _0x3077fc.open,
        onOpenChange: _0x132fcf,
        overlay: (0, h.jsx)("section", {
          className: (0, d.clsx)(V, d.borderClassName),
          "data-u-comp": "board-table-floating-toolbar-popup",
          onMouseDown: (_0x490929) => {
            (_0x31ab27(),
              (0, u.keepFloatingToolbarPanelInteraction)(_0x490929));
          },
          onPointerDown: (_0x11430f) => {
            (_0x31ab27(),
              (0, u.keepFloatingToolbarPanelInteraction)(_0x11430f));
          },
          children: _0x3077fc.children,
        }),
        children: (0, h.jsx)("span", {
          children: (0, h.jsx)(d.Tooltip, {
            title: _0x4a1954.t("boards-table-ui.editorToolbar.tableTheme"),
            placement: "bottom",
            children: (0, h.jsxs)(d.Button, {
              size: "small",
              variant: "ghost",
              "data-toolbar-item": "table-theme",
              "aria-expanded": _0x3077fc.open,
              "aria-label": _0x4a1954.t(
                "boards-table-ui.editorToolbar.tableTheme",
              ),
              title: _0x4a1954.t("boards-table-ui.editorToolbar.tableTheme"),
              onMouseDown: u.keepFloatingToolbarPanelInteraction,
              onPointerDown: u.keepFloatingToolbarPanelInteraction,
              className: (0, d.clsx)(z, { [B]: _0x3077fc.open }),
              children: [
                (0, h.jsx)(f.PaintIcon, {}),
                (0, h.jsx)(f.MoreDownIcon, { className: "univer-text-xs" }),
              ],
            }),
          }),
        }),
      }),
  });
}
function H(_0xff7789) {
  return (0, h.jsx)("div", {
    className:
      "univer-flex univer-h-7 univer-flex-nowrap univer-items-center univer-gap-1 univer-px-1",
    children: _0xff7789.children,
  });
}
function Ye(_0x2519cf) {
  return (0, h.jsx)(d.Tooltip, {
    title: _0x2519cf.title,
    placement: "bottom",
    children: (0, h.jsx)("span", {
      children: (0, h.jsx)(d.Button, {
        size: "small",
        variant: "ghost",
        "data-toolbar-item": _0x2519cf["data-toolbar-item"],
        "aria-label": _0x2519cf.title,
        title: _0x2519cf.title,
        className:
          "univer-flex univer-size-7 univer-items-center univer-justify-center univer-rounded-md univer-border-none univer-bg-transparent univer-p-0 univer-text-gray-700 univer-transition-colors hover:univer-bg-gray-100 dark:!univer-text-gray-100 dark:hover:!univer-bg-gray-700",
        onClick: (_0x288bfd) => {
          (_0x288bfd.preventDefault(), _0x2519cf.onClick());
        },
        onMouseDown: u.keepFloatingToolbarPanelInteraction,
        onPointerDown: u.keepFloatingToolbarPanelInteraction,
        children: _0x2519cf.children,
      }),
    }),
  });
}
function Xe(_0x5e7623) {
  let [_0x136706, _0xc7a20] = (0, p.useState)(false),
    _0x351f8c = _0x5e7623.open ?? _0x136706;
  return (0, h.jsx)(a.TableToolbarDropdownInteractionGuard, {
    onOpenChange: _0x5e7623.onOpenChange ?? _0xc7a20,
    children: ({
      handleOpenChange: _0x201f0e,
      markInternalInteraction: _0x1e7a8a,
    }) =>
      (0, h.jsx)(d.Dropdown, {
        open: _0x351f8c,
        onOpenChange: _0x201f0e,
        overlay: (0, h.jsx)("div", {
          className: (0, d.clsx)(V, "univer-p-3", d.borderClassName),
          "data-u-comp": "board-table-floating-toolbar-popup",
          onMouseDown: (_0xa5c1db) => {
            (_0x1e7a8a(),
              (0, u.keepFloatingToolbarPanelInteraction)(_0xa5c1db));
          },
          onPointerDown: (_0x3b4271) => {
            (_0x1e7a8a(),
              (0, u.keepFloatingToolbarPanelInteraction)(_0x3b4271));
          },
          children: (0, h.jsx)(d.ColorPicker, {
            value: _0x5e7623.color,
            onChange: _0x5e7623.onChange,
          }),
        }),
        children: (0, h.jsx)("span", {
          children: (0, h.jsx)(d.Tooltip, {
            title: _0x5e7623.title,
            placement: "bottom",
            children: (0, h.jsxs)(d.Button, {
              size: "small",
              variant: "ghost",
              "data-toolbar-item": _0x5e7623["data-toolbar-item"],
              "aria-expanded": _0x351f8c,
              "aria-label": _0x5e7623.title,
              className: (0, d.clsx)(z, { [B]: _0x351f8c }),
              onMouseDown: u.keepFloatingToolbarPanelInteraction,
              onPointerDown: u.keepFloatingToolbarPanelInteraction,
              children: [
                _0x5e7623.children,
                (0, h.jsx)("span", {
                  className:
                    "univer-h-3 univer-w-3 univer-rounded-sm univer-border univer-border-solid univer-border-gray-300 dark:!univer-border-gray-600",
                  style: { backgroundColor: _0x5e7623.color },
                }),
                (0, h.jsx)(f.MoreDownIcon, { className: "univer-text-xs" }),
              ],
            }),
          }),
        }),
      }),
  });
}
function Ze(_0x4238e1) {
  return (0, h.jsx)(a.TableToolbarDropdownInteractionGuard, {
    onOpenChange: _0x4238e1.onOpenChange,
    children: ({
      handleOpenChange: _0x3f799f,
      markInternalInteraction: _0x20f4ab,
    }) =>
      (0, h.jsx)(d.Dropdown, {
        open: _0x4238e1.open,
        onOpenChange: _0x3f799f,
        overlay: (0, h.jsx)("div", {
          className: (0, d.clsx)(V, "univer-p-3", d.borderClassName),
          "data-u-comp": "board-table-floating-toolbar-popup",
          onMouseDown: (_0x59add2) => {
            (_0x20f4ab(),
              (0, u.keepFloatingToolbarPanelInteraction)(_0x59add2));
          },
          onPointerDown: (_0x126ae6) => {
            (_0x20f4ab(),
              (0, u.keepFloatingToolbarPanelInteraction)(_0x126ae6));
          },
          children: (0, h.jsx)(d.ColorPicker, {
            value: _0x4238e1.color,
            onChange: _0x4238e1.onChange,
          }),
        }),
        children: (0, h.jsx)("span", {
          children: (0, h.jsx)(d.Tooltip, {
            title: _0x4238e1.title,
            placement: "bottom",
            children: (0, h.jsxs)(d.Button, {
              size: "small",
              variant: "ghost",
              "data-toolbar-item": _0x4238e1["data-toolbar-item"],
              "aria-expanded": _0x4238e1.open,
              "aria-label": _0x4238e1.title,
              className: (0, d.clsx)(z, { [B]: _0x4238e1.open }),
              onMouseDown: u.keepFloatingToolbarPanelInteraction,
              onPointerDown: u.keepFloatingToolbarPanelInteraction,
              children: [
                _0x4238e1.icon === "font"
                  ? (0, h.jsx)(f.FontColorDoubleIcon, {
                      className: "univer-fill-primary-600",
                      extend: { colorChannel1: _0x4238e1.color },
                    })
                  : (0, h.jsx)(f.PaintBucketDoubleIcon, {
                      className: "univer-fill-primary-600",
                      extend: { colorChannel1: _0x4238e1.color },
                    }),
                (0, h.jsx)(f.MoreDownIcon, { className: "univer-text-xs" }),
              ],
            }),
          }),
        }),
      }),
  });
}
function Qe(_0x2ed6c5) {
  let _0x158e45 = (0, l.useDependency)(s.LocaleService),
    _0x4e199d =
      We.find((_0x4a15e3) => _0x4a15e3.value === _0x2ed6c5.dash) ?? We[0];
  return (0, h.jsx)(a.TableToolbarDropdownInteractionGuard, {
    onOpenChange: _0x2ed6c5.onOpenChange,
    children: ({
      handleOpenChange: _0x330c3d,
      markInternalInteraction: _0x2cca27,
    }) =>
      (0, h.jsx)(d.Dropdown, {
        open: _0x2ed6c5.open,
        onOpenChange: _0x330c3d,
        overlay: (0, h.jsxs)("section", {
          className: (0, d.clsx)(
            V,
            "univer-grid univer-gap-2 univer-p-2",
            d.borderClassName,
          ),
          "data-u-comp": "board-table-floating-toolbar-popup",
          onMouseDown: (_0x40658e) => {
            (_0x2cca27(),
              (0, u.keepFloatingToolbarPanelInteraction)(_0x40658e));
          },
          onPointerDown: (_0x33dd58) => {
            (_0x2cca27(),
              (0, u.keepFloatingToolbarPanelInteraction)(_0x33dd58));
          },
          children: [
            (0, h.jsx)("div", {
              className: "univer-grid univer-grid-cols-5 univer-gap-1",
              children: _0x2ed6c5.presets["map"](
                ({ labelKey: _0x4b21b0, preset: _0x14cacf }) => {
                  let _0x10a408 = Ke[_0x14cacf];
                  return (0, h.jsx)(
                    d.Tooltip,
                    {
                      title: _0x158e45.t(_0x4b21b0),
                      placement: "bottom",
                      children: (0, h.jsx)(d.Button, {
                        size: "small",
                        variant: "ghost",
                        "aria-label": _0x158e45.t(_0x4b21b0),
                        className:
                          "univer-flex univer-size-7 univer-items-center univer-justify-center univer-rounded univer-border-none univer-bg-transparent univer-p-0 univer-text-primary-600 hover:univer-bg-gray-100 dark:hover:!univer-bg-gray-800",
                        onClick: () => {
                          (_0x2ed6c5.onSelectPreset(_0x14cacf),
                            _0x2ed6c5.onOpenChange(false));
                        },
                        onMouseDown: u.keepFloatingToolbarPanelInteraction,
                        onPointerDown: u.keepFloatingToolbarPanelInteraction,
                        children: (0, h.jsx)(_0x10a408, {
                          className: "univer-size-4\x20univer-text-current",
                          extend: qe,
                        }),
                      }),
                    },
                    _0x14cacf,
                  );
                },
              ),
            }),
            (0, h.jsx)(d.Separator, {}),
            (0, h.jsxs)("div", {
              className: "univer-flex univer-items-center univer-gap-2",
              children: [
                (0, h.jsx)(Xe, {
                  "data-toolbar-item": "border-color",
                  title: _0x158e45.t(
                    "boards-table-ui.editorToolbar.tableBorderColor",
                  ),
                  color: _0x2ed6c5.color,
                  onChange: _0x2ed6c5.onChangeColor,
                  children: (0, h.jsx)(f.PaintBucketDoubleIcon, {
                    extend: { colorChannel1: _0x2ed6c5.color },
                  }),
                }),
                (0, h.jsx)($e, {
                  title: _0x158e45.t(
                    "boards-table-ui.editorToolbar.borderWidth",
                  ),
                  value: String(_0x2ed6c5.width),
                  options: Ue.map((_0x29d030) => ({
                    label:
                      _0x29d030 === 0
                        ? _0x158e45.t("boards-table-ui.editorToolbar.noBorder")
                        : _0x29d030 + "px",
                    value: String(_0x29d030),
                    icon: (0, h.jsx)("span", {
                      className:
                        "univer-block univer-w-5 univer-rounded-full univer-bg-current",
                      style: { height: Math.max(1, _0x29d030 || 1) },
                    }),
                  })),
                  onChange: (_0x592d3f) =>
                    _0x2ed6c5.onChangeWidth(Number(_0x592d3f)),
                  children: (0, h.jsxs)("span", {
                    className: "univer-text-xs",
                    children: [_0x2ed6c5.width, "px"],
                  }),
                }),
                (0, h.jsx)($e, {
                  title: _0x158e45.t(
                    "boards-table-ui.editorToolbar.borderStyle",
                  ),
                  value: _0x2ed6c5.dash,
                  options: We.map((_0x22648d) => ({
                    label: _0x158e45.t(_0x22648d.labelKey),
                    value: _0x22648d.value,
                    icon: (0, h.jsx)(nt, { dash: _0x22648d.value }),
                  })),
                  onChange: _0x2ed6c5.onChangeDash,
                  children: _0x4e199d
                    ? (0, h.jsx)(nt, { dash: _0x4e199d.value })
                    : (0, h.jsx)(f.AllBorderIcon, {}),
                }),
              ],
            }),
          ],
        }),
        children: (0, h.jsx)("span", {
          children: (0, h.jsx)(d.Tooltip, {
            title: _0x158e45.t("boards-table-ui.editorToolbar.border"),
            placement: "bottom",
            children: (0, h.jsxs)(d.Button, {
              size: "small",
              variant: "ghost",
              "data-toolbar-item": _0x2ed6c5["data-toolbar-item"],
              "aria-expanded": _0x2ed6c5.open,
              "aria-label": _0x158e45.t("boards-table-ui.editorToolbar.border"),
              title: _0x158e45.t("boards-table-ui.editorToolbar.border"),
              onMouseDown: u.keepFloatingToolbarPanelInteraction,
              onPointerDown: u.keepFloatingToolbarPanelInteraction,
              className: (0, d.clsx)(z, { [B]: _0x2ed6c5.open }),
              children: [
                (0, h.jsx)(f.AllBorderIcon, {}),
                (0, h.jsx)(f.MoreDownIcon, { className: "univer-text-xs" }),
              ],
            }),
          }),
        }),
      }),
  });
}
function $e(_0x4156ba) {
  let [_0xdd8cfd, _0x31b372] = (0, p.useState)(false),
    _0x4d26e3 =
      _0x4156ba.options["find"](
        (_0x2a4c71) => _0x2a4c71.value === _0x4156ba.value,
      ) ?? _0x4156ba.options[0];
  return _0x4d26e3
    ? (0, h.jsx)(a.TableToolbarDropdownInteractionGuard, {
        onOpenChange: _0x31b372,
        children: ({
          handleOpenChange: _0x500e10,
          markInternalInteraction: _0x4cef70,
        }) =>
          (0, h.jsx)(d.Dropdown, {
            open: _0xdd8cfd,
            onOpenChange: _0x500e10,
            overlay: (0, h.jsx)("div", {
              className: (0, d.clsx)(
                V,
                "univer-min-w-32 univer-p-1",
                d.borderClassName,
              ),
              "data-u-comp": "board-table-floating-toolbar-popup",
              onMouseDown: (_0x58150c) => {
                (_0x4cef70(),
                  (0, u.keepFloatingToolbarPanelInteraction)(_0x58150c));
              },
              onPointerDown: (_0x39de40) => {
                (_0x4cef70(),
                  (0, u.keepFloatingToolbarPanelInteraction)(_0x39de40));
              },
              children: _0x4156ba.options["map"]((_0x62f14e) =>
                (0, h.jsxs)(
                  d.Button,
                  {
                    size: "small",
                    variant: "ghost",
                    onClick: () => {
                      (_0x4156ba.onChange(_0x62f14e.value), _0x31b372(false));
                    },
                    onMouseDown: u.keepFloatingToolbarPanelInteraction,
                    onPointerDown: u.keepFloatingToolbarPanelInteraction,
                    className: (0, d.clsx)(
                      "univer-flex univer-h-8 univer-w-full univer-items-center univer-gap-2 univer-rounded-md univer-border-none univer-bg-transparent univer-px-2 univer-text-left univer-text-sm univer-text-gray-700 univer-transition-colors hover:univer-bg-gray-100 dark:!univer-text-gray-100 dark:hover:!univer-bg-gray-800",
                      {
                        "univer-bg-primary-50\x20univer-text-primary-600\x20dark:!univer-bg-gray-800\x20dark:!univer-text-primary-300":
                          _0x62f14e.value === _0x4156ba.value,
                      },
                    ),
                    children: [
                      (0, h.jsx)("span", {
                        className:
                          "univer-flex univer-size-4 univer-items-center univer-justify-center",
                        children: _0x62f14e.icon,
                      }),
                      (0, h.jsx)("span", {
                        className: "univer-flex-1",
                        children: _0x62f14e.label,
                      }),
                    ],
                  },
                  _0x62f14e.value,
                ),
              ),
            }),
            children: (0, h.jsx)("span", {
              children: (0, h.jsx)(d.Tooltip, {
                title: _0x4156ba.title,
                placement: "bottom",
                children: (0, h.jsxs)(d.Button, {
                  size: "small",
                  variant: "ghost",
                  "aria-expanded": _0xdd8cfd,
                  "aria-label": _0x4156ba.title,
                  title: _0x4156ba.title,
                  onMouseDown: u.keepFloatingToolbarPanelInteraction,
                  onPointerDown: u.keepFloatingToolbarPanelInteraction,
                  className: (0, d.clsx)(z, { [B]: _0xdd8cfd }),
                  children: [
                    _0x4156ba.children ?? _0x4d26e3.icon,
                    (0, h.jsx)(f.MoreDownIcon, { className: "univer-text-xs" }),
                  ],
                }),
              }),
            }),
          }),
      })
    : null;
}
function et(_0x52c70b) {
  let _0x4de0ca = (0, l.useDependency)(s.LocaleService);
  return (0, h.jsx)(a.TableToolbarDropdownInteractionGuard, {
    onOpenChange: _0x52c70b.onOpenChange,
    children: ({
      handleOpenChange: _0x2e2bec,
      markInternalInteraction: _0x48a2f1,
    }) =>
      (0, h.jsx)(d.Dropdown, {
        open: _0x52c70b.open,
        onOpenChange: _0x2e2bec,
        overlay: (0, h.jsxs)("section", {
          className: (0, d.clsx)(
            V,
            "univer-grid univer-gap-2 univer-p-2",
            d.borderClassName,
          ),
          "data-u-comp": "board-table-floating-toolbar-popup",
          onMouseDown: (_0x3fce7f) => {
            (_0x48a2f1(),
              (0, u.keepFloatingToolbarPanelInteraction)(_0x3fce7f));
          },
          onPointerDown: (_0x2f8c0a) => {
            (_0x48a2f1(),
              (0, u.keepFloatingToolbarPanelInteraction)(_0x2f8c0a));
          },
          children: [
            (0, h.jsxs)("div", {
              className: "univer-flex univer-items-center univer-gap-2",
              children: [
                (0, h.jsx)(U, {
                  active: _0x52c70b.values["bold"],
                  title: _0x4de0ca.t("boards-table-ui.editorToolbar.bold"),
                  onClick: () =>
                    _0x52c70b.onToggleStyle({
                      bl: _0x52c70b.values["bold"]
                        ? s.BooleanNumber["FALSE"]
                        : s.BooleanNumber["TRUE"],
                    }),
                  children: (0, h.jsx)(f.BoldIcon, {}),
                }),
                (0, h.jsx)(U, {
                  active: _0x52c70b.values["italic"],
                  title: _0x4de0ca.t("boards-table-ui.editorToolbar.italic"),
                  onClick: () =>
                    _0x52c70b.onToggleStyle({
                      it: _0x52c70b.values["italic"]
                        ? s.BooleanNumber["FALSE"]
                        : s.BooleanNumber["TRUE"],
                    }),
                  children: (0, h.jsx)(f.ItalicIcon, {}),
                }),
                (0, h.jsx)(U, {
                  active: _0x52c70b.values["underline"],
                  title: _0x4de0ca.t("boards-table-ui.editorToolbar.underline"),
                  onClick: () =>
                    _0x52c70b.onToggleStyle({
                      ul: {
                        s: _0x52c70b.values["underline"]
                          ? s.BooleanNumber["FALSE"]
                          : s.BooleanNumber["TRUE"],
                      },
                    }),
                  children: (0, h.jsx)(f.UnderlineIcon, {}),
                }),
                (0, h.jsx)(U, {
                  active: _0x52c70b.values["strike"],
                  title: _0x4de0ca.t(
                    "boards-table-ui.editorToolbar.strikethrough",
                  ),
                  onClick: () =>
                    _0x52c70b.onToggleStyle({
                      st: {
                        s: _0x52c70b.values["strike"]
                          ? s.BooleanNumber["FALSE"]
                          : s.BooleanNumber["TRUE"],
                      },
                    }),
                  children: (0, h.jsx)(f.StrikethroughIcon, {}),
                }),
              ],
            }),
            (0, h.jsx)(d.Separator, {}),
            (0, h.jsxs)("div", {
              className: "univer-flex\x20univer-items-center\x20univer-gap-2",
              children: [
                (0, h.jsx)("span", {
                  className: "univer-sr-only",
                  children: _0x4de0ca.t(
                    "boards-table-ui.editorToolbar.horizontalAlign",
                  ),
                }),
                _0x52c70b.horizontalAlignOptions["map"]((_0x407725) =>
                  (0, h.jsx)(
                    U,
                    {
                      active:
                        _0x52c70b.values["horizontalAlign"] === _0x407725.value,
                      title: _0x4de0ca.t(_0x407725.labelKey),
                      onClick: () =>
                        _0x52c70b.onHorizontalAlign(_0x407725.value),
                      children: _0x407725.icon,
                    },
                    _0x407725.value,
                  ),
                ),
              ],
            }),
            (0, h.jsx)(d.Separator, {}),
            (0, h.jsxs)("div", {
              className: "univer-flex univer-items-center univer-gap-2",
              children: [
                (0, h.jsx)("span", {
                  className: "univer-sr-only",
                  children: _0x4de0ca.t(
                    "boards-table-ui.editorToolbar.verticalAlign",
                  ),
                }),
                _0x52c70b.verticalAlignOptions["map"]((_0x585d92) =>
                  (0, h.jsx)(
                    U,
                    {
                      active:
                        _0x52c70b.values["verticalAlign"] === _0x585d92.value,
                      title: _0x4de0ca.t(_0x585d92.labelKey),
                      onClick: () => _0x52c70b.onVerticalAlign(_0x585d92.value),
                      children: _0x585d92.icon,
                    },
                    _0x585d92.value,
                  ),
                ),
              ],
            }),
          ],
        }),
        children: (0, h.jsx)("span", {
          children: (0, h.jsx)(d.Tooltip, {
            title: _0x4de0ca.t("boards-table-ui.editorToolbar.textFormat"),
            placement: "bottom",
            children: (0, h.jsxs)(d.Button, {
              size: "small",
              variant: "ghost",
              "data-toolbar-item": _0x52c70b["data-toolbar-item"],
              "aria-expanded": _0x52c70b.open,
              "aria-label": _0x4de0ca.t(
                "boards-table-ui.editorToolbar.textFormat",
              ),
              className: (0, d.clsx)(z, { [B]: _0x52c70b.open }),
              onMouseDown: u.keepFloatingToolbarPanelInteraction,
              onPointerDown: u.keepFloatingToolbarPanelInteraction,
              children: [
                (0, h.jsx)(f.TextIcon, {}),
                (0, h.jsx)(f.MoreDownIcon, { className: "univer-text-xs" }),
              ],
            }),
          }),
        }),
      }),
  });
}
function U(_0x4d8b92) {
  return (0, h.jsx)(d.Tooltip, {
    title: _0x4d8b92.title,
    placement: "bottom",
    children: (0, h.jsx)(d.Button, {
      size: "small",
      variant: "ghost",
      "aria-label": _0x4d8b92.title,
      className: (0, d.clsx)(
        "univer-flex\x20univer-size-7\x20univer-items-center\x20univer-justify-center\x20univer-rounded-md\x20univer-border-none\x20univer-bg-transparent\x20univer-p-0\x20univer-text-gray-700\x20univer-transition-colors\x20hover:univer-bg-gray-100\x20dark:!univer-text-gray-100\x20dark:hover:!univer-bg-gray-800",
        {
          "univer-bg-primary-50\x20univer-text-primary-600\x20dark:!univer-bg-gray-800\x20dark:!univer-text-primary-300":
            _0x4d8b92.active,
        },
      ),
      onClick: (_0x1097e5) => {
        (_0x1097e5.preventDefault(), _0x4d8b92.onClick());
      },
      onMouseDown: u.keepFloatingToolbarPanelInteraction,
      onPointerDown: u.keepFloatingToolbarPanelInteraction,
      children: _0x4d8b92.children,
    }),
  });
}
function tt(_0x5b9d4e) {
  return (0, h.jsx)(d.Tooltip, {
    title: _0x5b9d4e.title,
    placement: "bottom",
    children: (0, h.jsx)("span", {
      "data-toolbar-item": _0x5b9d4e["data-toolbar-item"],
      onMouseDown: u.keepFloatingToolbarPanelInteraction,
      onPointerDown: u.keepFloatingToolbarPanelInteraction,
      children: (0, h.jsx)(d.Select, {
        borderless: true,
        className: (0, d.clsx)(
          "!univer-h-6 !univer-min-w-0 !univer-rounded-md !univer-border-transparent !univer-bg-transparent !univer-px-1.5",
          _0x5b9d4e.widthClassName,
        ),
        value: _0x5b9d4e.value,
        options: _0x5b9d4e.options,
        onChange: _0x5b9d4e.onChange,
      }),
    }),
  });
}
function nt(_0x538ba4) {
  let _0x225953 = (0, l.useDependency)(s.LocaleService),
    _0x3d0db5 =
      _0x538ba4.dash === "dot"
        ? "1 3"
        : _0x538ba4.dash === "dash"
          ? "4 3"
          : _0x538ba4.dash === "dashDot"
            ? "4 2 1 2"
            : undefined;
  return _0x538ba4.dash === "none"
    ? (0, h.jsx)("span", {
        className: "univer-text-xs",
        children: _0x225953.t("boards-table-ui.editorToolbar.none"),
      })
    : (0, h.jsx)("svg", {
        width: "24",
        height: "12",
        viewBox: "0 0 24 12",
        "aria-hidden": "true",
        children: (0, h.jsx)("line", {
          x1: "2",
          y1: "6",
          x2: "22",
          y2: "6",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeDasharray: _0x3d0db5,
        }),
      });
}
const rt = {
  none: "none",
  solid: "solid",
  gradient: "gradient",
  picture: "picture",
};
function it(_0x1687be) {
  var _0x5e11f4;
  let {
      children: _0x563b3f,
      color: _0x31e808,
      gradientValue: _0x2b6168,
      previewStyle: _0x32f71f,
      showPreview: _0x34d742 = true,
      tableFill: _0x159603,
      open: _0x7c12ad,
      value: _0x4544dd,
      onOpenChange: _0x59c737,
      onTableFillChange: _0x478c99,
    } = _0x1687be,
    _0x4e4da3 = (0, l.useDependency)(s.LocaleService),
    _0x18aca4 = {
      noFill: _0x4e4da3.t("boards-table-ui.shapePanel.fill.noFill"),
      solidFill: _0x4e4da3.t("boards-table-ui.shapePanel.fill.solidFill"),
      gradientFill: _0x4e4da3.t("boards-table-ui.shapePanel.fill.gradientFill"),
      pictureFill: _0x4e4da3.t("boards-table-ui.shapePanel.fill.pictureFill"),
      color: _0x4e4da3.t("boards-table-ui.shapePanel.fill.color"),
      transparency: _0x4e4da3.t("boards-table-ui.shapePanel.fill.transparency"),
      pictureSource: _0x4e4da3.t(
        "boards-table-ui.shapePanel.fill.picture.source",
      ),
      pictureInsert: _0x4e4da3.t(
        "boards-table-ui.shapePanel.fill.picture.insert",
      ),
    },
    _0x383c7d =
      (_0x159603 == null || (_0x5e11f4 = _0x159603.picture) == null
        ? undefined
        : _0x5e11f4.opacity) ??
      (_0x159603 == null ? undefined : _0x159603.alpha) ??
      1;
  return (0, h.jsx)(a.TableToolbarDropdownInteractionGuard, {
    onOpenChange: _0x59c737,
    children: ({
      handleOpenChange: _0x43a2b2,
      markInternalInteraction: _0x430198,
    }) =>
      (0, h.jsx)(d.Dropdown, {
        overlay: (0, h.jsx)("div", {
          className: (0, d.clsx)(
            "\n univer-rounded-lg univer-bg-gray-0 univer-shadow-lg dark:!univer-bg-gray-900\n",
            "univer-w-[280px]\x20univer-p-3",
            d.borderClassName,
          ),
          "data-u-comp": "board-table-floating-toolbar-popup",
          onMouseDown: (_0x5eb897) => {
            (_0x430198(),
              (0, u.keepFloatingToolbarPanelInteraction)(_0x5eb897));
          },
          onPointerDown: (_0x41ff0f) => {
            (_0x430198(),
              (0, u.keepFloatingToolbarPanelInteraction)(_0x41ff0f));
          },
          children: (0, h.jsx)(u.FillStyleTabsEditor, {
            compact: true,
            direction: _0x4e4da3.getDirection(),
            keepColorPickerOpenOnChange: true,
            value: _0x4544dd,
            typeValues: rt,
            color: _0x31e808,
            transparency: Math.round((1 - _0x383c7d) * 100),
            gradientValue: _0x2b6168,
            labels: _0x18aca4,
            tabLabels: _0x18aca4,
            onChange: (_0x470b4e) => {
              if (_0x470b4e === "none")
                _0x478c99({
                  ..._0x159603,
                  type: i.SlideTableFillTypeEnum["None"],
                  gradient: undefined,
                  picture: undefined,
                });
              else {
                if (_0x470b4e === "solid")
                  _0x478c99({
                    ..._0x159603,
                    type: i.SlideTableFillTypeEnum["Solid"],
                    color: _0x31e808,
                    alpha: _0x383c7d,
                    gradient: undefined,
                    picture: undefined,
                  });
                else {
                  if (_0x470b4e === "gradient")
                    _0x478c99((0, a.gradientValueToSlideTableFill)(_0x2b6168));
                  else {
                    if (_0x470b4e === "picture") {
                      var _0x388061;
                      _0x478c99({
                        ..._0x159603,
                        type: i.SlideTableFillTypeEnum["Picture"],
                        color: _0x31e808,
                        alpha: _0x383c7d,
                        gradient: undefined,
                        picture: {
                          ...(_0x159603 == null
                            ? undefined
                            : _0x159603.picture),
                          opacity: _0x383c7d,
                          mode:
                            (_0x159603 == null ||
                            (_0x388061 = _0x159603.picture) == null
                              ? undefined
                              : _0x388061.mode) ??
                            i.SlideTablePictureFillModeEnum["Stretch"],
                        },
                      });
                    }
                  }
                }
              }
            },
            onColorChange: (_0x24f338) => {
              _0x478c99({
                ..._0x159603,
                type: i.SlideTableFillTypeEnum["Solid"],
                color: _0x24f338,
                alpha: _0x383c7d,
                gradient: undefined,
                picture: undefined,
              });
            },
            onTransparencyChange: (_0x447e32) => {
              let _0x33b30b =
                (100 - Math.max(0, Math.min(100, _0x447e32))) / 100;
              if (_0x4544dd === "picture") {
                var _0x3a12d5;
                _0x478c99({
                  ..._0x159603,
                  type: i.SlideTableFillTypeEnum["Picture"],
                  picture: {
                    ...(_0x159603 == null ? undefined : _0x159603.picture),
                    opacity: _0x33b30b,
                    mode:
                      (_0x159603 == null ||
                      (_0x3a12d5 = _0x159603.picture) == null
                        ? undefined
                        : _0x3a12d5.mode) ??
                      i.SlideTablePictureFillModeEnum["Stretch"],
                  },
                });
                return;
              }
              _0x478c99({
                ..._0x159603,
                type: i.SlideTableFillTypeEnum["Solid"],
                color: _0x31e808,
                alpha: _0x33b30b,
                gradient: undefined,
                picture: undefined,
              });
            },
            onGradientChange: (_0x36e2e1) => {
              _0x478c99((0, a.gradientValueToSlideTableFill)(_0x36e2e1));
            },
            pictureFillEditor: (0, h.jsx)(at, {
              fill: _0x159603,
              labels: _0x18aca4,
              onChange: _0x478c99,
            }),
          }),
        }),
        open: _0x7c12ad,
        onOpenChange: _0x43a2b2,
        children: (0, h.jsx)("span", {
          children: (0, h.jsx)(d.Tooltip, {
            title: _0x4e4da3.t(
              "boards-table-ui.editorToolbar.tableBackgroundColor",
            ),
            placement: "bottom",
            children: (0, h.jsxs)(d.Button, {
              size: "small",
              variant: "ghost",
              "aria-expanded": _0x7c12ad,
              "aria-label": _0x4e4da3.t(
                "boards-table-ui.editorToolbar.tableBackgroundColor",
              ),
              className: (0, d.clsx)(z, { [B]: _0x7c12ad }),
              "data-toolbar-item": _0x1687be["data-toolbar-item"],
              title: _0x4e4da3.t(
                "boards-table-ui.editorToolbar.tableBackgroundColor",
              ),
              onMouseDown: u.keepFloatingToolbarPanelInteraction,
              onPointerDown: u.keepFloatingToolbarPanelInteraction,
              children: [
                _0x563b3f,
                _0x34d742
                  ? (0, h.jsx)("span", {
                      className:
                        "univer-h-3 univer-w-3 univer-rounded-sm univer-border univer-border-solid univer-border-gray-300 dark:!univer-border-gray-600",
                      style: _0x32f71f,
                    })
                  : null,
                (0, h.jsx)(f.MoreDownIcon, { className: "univer-text-xs" }),
              ],
            }),
          }),
        }),
      }),
  });
}
function at(_0x37c86b) {
  let { fill: _0x273763, labels: _0x145df5, onChange: _0x1a8df3 } = _0x37c86b,
    _0x488d51 = (0, l.useDependency)(s.IImageIoService),
    _0xce0183 = (0, p.useRef)(null),
    _0x2be673 = _0x273763 == null ? undefined : _0x273763.picture,
    _0x32c35e =
      (_0x2be673 == null ? undefined : _0x2be673.opacity) ??
      (_0x273763 == null ? undefined : _0x273763.alpha) ??
      1,
    _0x4e0dfb =
      _0x2be673 != null &&
      _0x2be673.source &&
      /^(?:data:|https?:)/["test"](_0x2be673.source)
        ? _0x2be673.source
        : undefined;
  return (0, h.jsxs)("div", {
    className: "univer-flex univer-flex-col univer-gap-2",
    children: [
      (0, h.jsxs)("div", {
        className:
          "univer-flex univer-items-center univer-justify-between univer-gap-3",
        children: [
          (0, h.jsx)("span", {
            className:
              "univer-shrink-0\x20univer-text-xs\x20univer-text-gray-600\x20dark:!univer-text-gray-200",
            children: _0x145df5.pictureSource,
          }),
          (0, h.jsx)("input", {
            ref: _0xce0183,
            type: "file",
            accept: "image/*",
            className: "univer-hidden",
            onChange: async (_0x213d12) => {
              var _0x32ba4f;
              let _0x198b45 =
                (_0x32ba4f = _0x213d12.target["files"]) == null
                  ? undefined
                  : _0x32ba4f[0];
              if (!_0x198b45) return;
              _0x213d12.target["value"] = "";
              let _0x24bc3a = await _0x488d51.saveImage(_0x198b45);
              if (_0x24bc3a == null) return;
              let {
                imageSourceType: _0x5caa63,
                source: _0x5aeec3,
                base64Cache: _0x5da14f,
              } = _0x24bc3a;
              if (_0x5da14f) {
                let { image: _0x19c2d7 } = await (0, m.getImageSize)(_0x5da14f);
                _0x488d51.addImageSourceCache(_0x5aeec3, _0x5caa63, _0x19c2d7);
              }
              _0x1a8df3({
                ..._0x273763,
                type: i.SlideTableFillTypeEnum["Picture"],
                gradient: undefined,
                picture: {
                  ..._0x2be673,
                  source: _0x5aeec3,
                  sourceType: _0x5caa63,
                  opacity: _0x32c35e,
                  mode:
                    (_0x2be673 == null ? undefined : _0x2be673.mode) ??
                    i.SlideTablePictureFillModeEnum["Stretch"],
                },
              });
            },
          }),
          (0, h.jsx)(d.Button, {
            size: "small",
            variant: "ghost",
            onClick: () => {
              var _0x570357;
              return (_0x570357 = _0xce0183.current) == null
                ? undefined
                : _0x570357.click();
            },
            className:
              "univer-rounded univer-px-2 univer-py-1 univer-text-xs univer-transition-colors hover:univer-bg-gray-100 dark:hover:!univer-bg-gray-700",
            children: _0x145df5.pictureInsert,
          }),
        ],
      }),
      _0x4e0dfb &&
        (0, h.jsx)("img", {
          src: _0x4e0dfb,
          alt: "",
          className:
            "univer-h-14 univer-w-full univer-rounded univer-object-cover",
        }),
      (0, h.jsx)(ot, {
        label: _0x145df5.transparency,
        opacity: _0x32c35e,
        onChange: (_0x17f45c) =>
          _0x1a8df3({
            ..._0x273763,
            picture: {
              ..._0x2be673,
              opacity: _0x17f45c,
              mode:
                (_0x2be673 == null ? undefined : _0x2be673.mode) ??
                i.SlideTablePictureFillModeEnum["Stretch"],
            },
          }),
      }),
    ],
  });
}
function ot(_0x449343) {
  return (0, h.jsxs)("div", {
    className:
      "univer-flex univer-items-center univer-justify-between univer-gap-3",
    children: [
      (0, h.jsx)("span", {
        className:
          "univer-shrink-0 univer-text-xs univer-text-gray-600 dark:!univer-text-gray-200",
        children: _0x449343.label,
      }),
      (0, h.jsx)("div", {
        className: "univer-w-20",
        children: (0, h.jsx)(d.InputNumber, {
          className: "univer-w-full",
          value: Math.round((1 - _0x449343.opacity) * 100),
          min: 0,
          max: 100,
          step: 10,
          formatter: (_0x106177) => _0x106177 + "%",
          parser: (_0x2021f5) =>
            (_0x2021f5 == null ? undefined : _0x2021f5.replace("%", "")) || "",
          onChange: (_0x4ce838) => {
            let _0xc7ae7f = Math.max(0, Math.min(100, _0x4ce838 ?? 0));
            _0x449343.onChange((100 - _0xc7ae7f) / 100);
          },
        }),
      }),
    ],
  });
}
const st = "board.table.floating-toolbar";
function ct(_0x60075a, _0xeb571e, _0x4924d6) {
  if (
    !(_0x60075a != null && _0x60075a.unitId) ||
    !_0x60075a.subUnitId ||
    !_0x60075a.elementId ||
    !_0x60075a.tableId
  )
    return null;
  let _0x47b6ad =
    !!_0xeb571e &&
    _0xeb571e.unitId === _0x60075a.unitId &&
    _0xeb571e.subUnitId === _0x60075a.subUnitId &&
    _0xeb571e.elementId === _0x60075a.elementId &&
    _0xeb571e.tableId === _0x60075a.tableId;
  return _0x47b6ad && _0xeb571e.kind === "text"
    ? null
    : _0x47b6ad && _0xeb571e.ranges["length"]
      ? _0xeb571e
      : _0x4924d6
        ? {
            unitId: _0x60075a.unitId,
            subUnitId: _0x60075a.subUnitId,
            elementId: _0x60075a.elementId,
            tableId: _0x60075a.tableId,
            kind: "table",
            ranges: [
              {
                startRow: 0,
                endRow: Math.max(0, _0x4924d6.rows["length"] - 1),
                startColumn: 0,
                endColumn: Math.max(0, _0x4924d6.columns["length"] - 1),
              },
            ],
          }
        : null;
}
function lt(_0x229a5c) {
  var _0x691917;
  let _0x4992b7 = (0, l.useDependency)(s.ICommandService),
    _0x9240ce = (0, l.useDependency)(s.LocaleService),
    _0x46705f = (0, l.useObservable)(
      _0x9240ce.direction$,
      _0x9240ce.getDirection(),
    ),
    _0x218c70 = (0, l.useDependency)(a.SlideTableSelectionService),
    _0x441520 = (0, l.useDependency)(i.SlideTableResourceService),
    _0x2bd9bd = (0, l.useDependency)(s.ThemeService),
    _0x271a99 = (0, l.useDependency)(i.SlideTableModelService),
    _0x539b21 = (0, l.useObservable)(_0x218c70.selection$);
  (0, l.useObservable)(_0x271a99.tableChange$);
  let [_0x56aed4, _0x595353] = (0, p.useState)({
      selectionKey: null,
      value: null,
    }),
    _0x554245 =
      ((_0x691917 = _0x229a5c.popup) == null
        ? undefined
        : _0x691917.extraProps) ?? _0x229a5c,
    _0x43d898 =
      _0x554245.unitId && _0x554245.tableId
        ? _0x441520.getTable(_0x554245.unitId, _0x554245.tableId)
        : null,
    _0x38065b = ct(_0x554245, _0x539b21, _0x43d898),
    _0x4581bc = _0x38065b
      ? [
          _0x38065b.unitId,
          _0x38065b.subUnitId,
          _0x38065b.elementId,
          _0x38065b.tableId,
          ...Object.values(_0x38065b.ranges[0] ?? {}),
        ].join("|")
      : null,
    _0x4003d0 = _0x56aed4.selectionKey === _0x4581bc ? _0x56aed4.value : null,
    _0x5a52c6 = ze(_0x43d898, _0x38065b),
    _0x45998b = _0x5a52c6.values,
    _0x2f5ba7 = (0, p.useCallback)(
      (_0x4b059f) => {
        if (!_0x38065b) return;
        let _0x48a1fa = _0x38065b.ranges[0],
          _0x260aed = _0x441520.getTable(_0x38065b.unitId, _0x38065b.tableId);
        !_0x48a1fa ||
          !_0x260aed ||
          _0x4992b7.executeCommand(t.UpdateBoardTableCommand["id"], {
            unitId: _0x38065b.unitId,
            tableId: _0x38065b.tableId,
            patch: _0x4b059f(_0x260aed, _0x48a1fa),
          });
      },
      [_0x4992b7, _0x441520, _0x38065b],
    ),
    _0xe9cf1f = (0, p.useCallback)(
      (_0x53297d) => {
        _0x38065b &&
          _0x4992b7.executeCommand(t.UpdateBoardTableCommand["id"], {
            unitId: _0x38065b.unitId,
            tableId: _0x38065b.tableId,
            patch: { styleId: _0x53297d },
          });
      },
      [_0x4992b7, _0x38065b],
    ),
    _0x401cee = (0, p.useCallback)(
      (_0x5c5076) => {
        _0x38065b &&
          _0x4992b7.executeCommand(t.UpdateBoardTableCommand["id"], {
            unitId: _0x38065b.unitId,
            tableId: _0x38065b.tableId,
            patch: { options: _0x5c5076 },
          });
      },
      [_0x4992b7, _0x38065b],
    ),
    _0x329f9b = (0, p.useCallback)(
      (_0x4f6936, _0x6bb5e3) => {
        _0x595353({
          selectionKey: _0x4581bc,
          value: _0x6bb5e3 ? _0x4f6936 : null,
        });
      },
      [_0x4581bc],
    ),
    _0x1401e6 = (0, p.useMemo)(
      () =>
        (0, i.resolveSlideTableThemePalette)((_0x552029) =>
          _0x2bd9bd.getColorFromTheme(_0x552029),
        ),
      [_0x2bd9bd],
    );
  if (!_0x38065b || !_0x43d898) return null;
  let _0x1d8ef4 = _0x5a52c6.mergeState,
    _0x165dea = Ve(_0x43d898, _0x38065b),
    _0x516f00 =
      (_0x165dea == null ? undefined : _0x165dea.kind) === "row"
        ? _0x9240ce.t("boards-table-ui.contextMenu.deleteRow")
        : (_0x165dea == null ? undefined : _0x165dea.kind) === "column"
          ? _0x9240ce.t("boards-table-ui.contextMenu.deleteColumn")
          : null,
    _0x2f65b8 = () => {
      _0x165dea &&
        _0x4992b7.executeCommand(_0x165dea.commandId, _0x165dea.params);
    },
    _0x198056 =
      (_0x1d8ef4 == null ? undefined : _0x1d8ef4.action) === "unmerge"
        ? _0x9240ce.t("boards-table-ui.editorToolbar.unmergeCells")
        : (_0x1d8ef4 == null ? undefined : _0x1d8ef4.action) === "merge"
          ? _0x9240ce.t("boards-table-ui.editorToolbar.mergeCells")
          : null,
    _0x27b642 = () => {
      let _0x4191e2 = Be(_0x38065b, _0x1d8ef4 ?? null);
      _0x4191e2 &&
        _0x4992b7.executeCommand(_0x4191e2.commandId, _0x4191e2.params);
    },
    _0x463636 = [
      {
        labelKey: "boards-table-ui.editorToolbar.alignLeft",
        value: s.HorizontalAlign["LEFT"],
        icon: (0, h.jsx)(f.LeftJustifyingIcon, {}),
      },
      {
        labelKey: "boards-table-ui.editorToolbar.alignCenter",
        value: s.HorizontalAlign["CENTER"],
        icon: (0, h.jsx)(f.HorizontallyIcon, {}),
      },
      {
        labelKey: "boards-table-ui.editorToolbar.alignRight",
        value: s.HorizontalAlign["RIGHT"],
        icon: (0, h.jsx)(f.RightJustifyingIcon, {}),
      },
      {
        labelKey: "boards-table-ui.editorToolbar.alignJustify",
        value: s.HorizontalAlign["JUSTIFIED"],
        icon: (0, h.jsx)(f.AlignTextBothIcon, {}),
      },
    ],
    _0x43157e = [
      {
        labelKey: "boards-table-ui.editorToolbar.alignTop",
        value: s.VerticalAlign["TOP"],
        icon: (0, h.jsx)(f.AlignTopIcon, {}),
      },
      {
        labelKey: "boards-table-ui.editorToolbar.alignMiddle",
        value: s.VerticalAlign["MIDDLE"],
        icon: (0, h.jsx)(f.VerticalCenterIcon, {}),
      },
      {
        labelKey: "boards-table-ui.editorToolbar.alignBottom",
        value: s.VerticalAlign["BOTTOM"],
        icon: (0, h.jsx)(f.AlignBottomIcon, {}),
      },
    ];
  return (0, h.jsxs)("div", {
    className: (0, d.clsx)(
      "univer-box-border univer-flex univer-max-w-[760px] univer-flex-nowrap univer-items-center univer-rounded univer-bg-gray-0 univer-px-1 univer-py-1 univer-shadow-sm dark:!univer-border-gray-700 dark:!univer-bg-gray-900",
      d.borderClassName,
    ),
    "data-u-comp": "board-table-floating-toolbar",
    dir: _0x46705f,
    role: "toolbar",
    style: { direction: _0x46705f },
    onMouseDownCapture: () => _0x218c70.markTableInternalInteraction(),
    onPointerDownCapture: () => _0x218c70.markTableInternalInteraction(),
    onMouseDown: u.keepFloatingToolbarPanelInteraction,
    onPointerDown: u.keepFloatingToolbarPanelInteraction,
    children: [
      _0x165dea && _0x516f00
        ? (0, h.jsxs)(h.Fragment, {
            children: [
              (0, h.jsx)(H, {
                children: (0, h.jsx)(Ye, {
                  "data-toolbar-item":
                    _0x165dea.kind === "row" ? "delete-row" : "delete-column",
                  title: _0x516f00,
                  onClick: _0x2f65b8,
                  children: (0, h.jsx)(f.DeleteIcon, {}),
                }),
              }),
              (0, h.jsx)(d.Separator, { orientation: "vertical" }),
            ],
          })
        : null,
      _0x198056
        ? (0, h.jsxs)(h.Fragment, {
            children: [
              (0, h.jsx)(H, {
                children: (0, h.jsx)(Ye, {
                  "data-toolbar-item": "merge-cells",
                  title: _0x198056,
                  onClick: _0x27b642,
                  children:
                    (_0x1d8ef4 == null ? undefined : _0x1d8ef4.action) ===
                    "unmerge"
                      ? (0, h.jsx)(f.CancelMergeIcon, {})
                      : (0, h.jsx)(f.MergeAllIcon, {}),
                }),
              }),
              (0, h.jsx)(d.Separator, { orientation: "vertical" }),
            ],
          })
        : null,
      (0, h.jsxs)(H, {
        children: [
          (0, h.jsx)(it, {
            "data-toolbar-item": "background",
            color: _0x45998b.backgroundColor,
            value: (0, a.getSlideTableFillType)(_0x45998b.backgroundFill),
            gradientValue: (0, a.getSlideTableGradientValue)(
              _0x45998b.backgroundFill,
              _0x45998b.backgroundColor,
            ),
            previewStyle: (0, a.getSlideTableFillPreviewStyle)(
              _0x45998b.backgroundFill,
              _0x45998b.backgroundColor,
            ),
            showPreview: false,
            tableFill: _0x45998b.backgroundFill,
            open: _0x4003d0 === "background",
            onOpenChange: (_0x35bd7b) => _0x329f9b("background", _0x35bd7b),
            onTableFillChange: (_0x5991ee) =>
              _0x2f5ba7((_0x258af9, _0x497933) =>
                (0, a.buildSlideTableBackgroundFillPatch)(
                  _0x258af9,
                  _0x497933,
                  _0x5991ee,
                ),
              ),
            children: (0, h.jsx)(f.ShapeBackgroundColorDoubleIcon, {
              extend: { colorChannel1: _0x45998b.backgroundColor },
            }),
          }),
          (0, h.jsx)(Qe, {
            "data-toolbar-item": "border",
            color: _0x45998b.borderColor,
            width: _0x45998b.borderWidth,
            dash: _0x45998b.borderDash,
            presets: Ge,
            open: _0x4003d0 === "border",
            onOpenChange: (_0x160725) => _0x329f9b("border", _0x160725),
            onSelectPreset: (_0x292694) =>
              _0x2f5ba7((_0x21c826, _0x160180) =>
                (0, a.buildSlideTableBorderPresetPatch)(
                  _0x21c826,
                  _0x160180,
                  _0x292694,
                ),
              ),
            onChangeColor: (_0x2cf3a5) =>
              _0x2f5ba7((_0x4012c5, _0x380726) =>
                (0, a.buildSlideTableBorderStylePatch)(_0x4012c5, _0x380726, {
                  color: _0x2cf3a5,
                }),
              ),
            onChangeWidth: (_0x347d26) =>
              _0x2f5ba7((_0x3638c0, _0x183a5f) =>
                (0, a.buildSlideTableBorderStylePatch)(_0x3638c0, _0x183a5f, {
                  width: _0x347d26,
                  dash:
                    _0x347d26 === 0
                      ? i.SlideTableBorderDashEnum["None"]
                      : undefined,
                }),
              ),
            onChangeDash: (_0x3ac65d) =>
              _0x2f5ba7((_0x4f3393, _0x2d2a35) =>
                (0, a.buildSlideTableBorderStylePatch)(_0x4f3393, _0x2d2a35, {
                  dash: _0x3ac65d,
                }),
              ),
          }),
        ],
      }),
      (0, h.jsx)(d.Separator, { orientation: "vertical" }),
      (0, h.jsxs)(H, {
        children: [
          (0, h.jsx)("span", {
            "data-toolbar-item": "font-family",
            onMouseDown: u.keepFloatingToolbarPanelInteraction,
            onPointerDown: u.keepFloatingToolbarPanelInteraction,
            children: (0, h.jsx)(l.FontFamilyDropdown, {
              ariaLabel: _0x9240ce.t(
                "boards-table-ui.editorToolbar.fontFamily",
              ),
              className: "univer-w-28",
              inputClassName: "univer-w-auto",
              title: _0x45998b.fontFamily,
              value: _0x45998b.fontFamily,
              onChange: (_0x3f010d) =>
                _0x2f5ba7((_0x4914ea, _0x2a61f2) =>
                  (0, a.buildSlideTableFontFamilyPatch)(
                    _0x4914ea,
                    _0x2a61f2,
                    _0x3f010d,
                  ),
                ),
              onMouseDown: u.keepFloatingToolbarPanelInteraction,
              onPointerDown: u.keepFloatingToolbarPanelInteraction,
            }),
          }),
          (0, h.jsx)(tt, {
            "data-toolbar-item": "font-size",
            title: _0x9240ce.t("boards-table-ui.editorToolbar.fontSize"),
            widthClassName: "univer-w-14",
            value: String(_0x45998b.fontSize),
            options: (0, a.ensureOption)(He, String(_0x45998b.fontSize)),
            onChange: (_0xa53acd) => {
              let _0x5c59f6 = Number(_0xa53acd);
              Number.isNaN(_0x5c59f6) ||
                _0x2f5ba7((_0x1d3ec4, _0xc7c541) =>
                  (0, a.buildSlideTableFontSizePatch)(
                    _0x1d3ec4,
                    _0xc7c541,
                    _0x5c59f6,
                  ),
                );
            },
          }),
          (0, h.jsx)(et, {
            "data-toolbar-item": "text-format",
            open: _0x4003d0 === "textFormat",
            values: _0x45998b,
            horizontalAlignOptions: _0x463636,
            verticalAlignOptions: _0x43157e,
            onOpenChange: (_0x1e6511) => _0x329f9b("textFormat", _0x1e6511),
            onToggleStyle: (_0xb4844c) =>
              _0x2f5ba7((_0x49d330, _0x51ecd1) =>
                (0, a.buildSlideTableTextStylePatch)(
                  _0x49d330,
                  _0x51ecd1,
                  _0xb4844c,
                ),
              ),
            onHorizontalAlign: (_0x48a053) =>
              _0x2f5ba7((_0x2b212c, _0x46ecd2) =>
                (0, a.buildSlideTableTextAlignPatch)(_0x2b212c, _0x46ecd2, {
                  axis: "horizontal",
                  value: _0x48a053,
                }),
              ),
            onVerticalAlign: (_0x4fe1c1) =>
              _0x2f5ba7((_0xdece6, _0x7cb9) =>
                (0, a.buildSlideTableTextAlignPatch)(_0xdece6, _0x7cb9, {
                  axis: "vertical",
                  value: _0x4fe1c1,
                }),
              ),
          }),
        ],
      }),
      (0, h.jsx)(d.Separator, { orientation: "vertical" }),
      (0, h.jsxs)(H, {
        children: [
          (0, h.jsx)(Ze, {
            "data-toolbar-item": "text-color",
            title: _0x9240ce.t("boards-table-ui.editorToolbar.textColor"),
            color: _0x45998b.textColor,
            icon: "font",
            open: _0x4003d0 === "textColor",
            onOpenChange: (_0x2778f7) => _0x329f9b("textColor", _0x2778f7),
            onChange: (_0x5cd37a) =>
              _0x2f5ba7((_0x38fb06, _0x84144) =>
                (0, a.buildSlideTableTextFillPatch)(_0x38fb06, _0x84144, {
                  type: "solid",
                  color: _0x5cd37a,
                  opacity: 1,
                }),
              ),
          }),
          (0, h.jsx)(Ze, {
            "data-toolbar-item": "text-background",
            title: _0x9240ce.t(
              "boards-table-ui.editorToolbar.textBackgroundColor",
            ),
            color: _0x45998b.textBackgroundColor,
            icon: "bucket",
            open: _0x4003d0 === "textBackground",
            onOpenChange: (_0x5cb782) => _0x329f9b("textBackground", _0x5cb782),
            onChange: (_0x4fd0b7) =>
              _0x2f5ba7((_0x1d5665, _0x3e8a9d) =>
                (0, a.buildSlideTableTextStylePatch)(_0x1d5665, _0x3e8a9d, {
                  bg: { rgb: _0x4fd0b7 },
                }),
              ),
          }),
        ],
      }),
      (0, h.jsx)(d.Separator, { orientation: "vertical" }),
      (0, h.jsx)(H, {
        children: (0, h.jsx)(Je, {
          open: _0x4003d0 === "theme",
          onOpenChange: (_0x25da38) => _0x329f9b("theme", _0x25da38),
          children: (0, h.jsx)(a.TableThemeGallery, {
            currentStyleId: _0x43d898.styleId,
            currentOptions: _0x43d898.options ?? {},
            direction: _0x46705f,
            palette: _0x1401e6,
            onApplyTheme: (_0x4e682c) => {
              (_0xe9cf1f(_0x4e682c), _0x329f9b("theme", false));
            },
            onChangeOptions: _0x401cee,
          }),
        }),
      }),
      (0, h.jsx)(d.Separator, { orientation: "vertical" }),
      (0, h.jsx)(H, {
        children: (0, h.jsx)(Ye, {
          "data-toolbar-item": "delete-table",
          title: _0x9240ce.t("boards-table-ui.contextMenu.deleteTable"),
          onClick: () => _0x4992b7.executeCommand(_e.id),
          children: (0, h.jsx)(f.DeleteIcon, {}),
        }),
      }),
    ],
  });
}
function W(_0x5a17a4) {
  "@babel/helpers - typeof";
  return (
    (W =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x4c998f) {
            return typeof _0x4c998f;
          }
        : function (_0x46de25) {
            return _0x46de25 &&
              typeof Symbol == "function" &&
              _0x46de25.constructor === Symbol &&
              _0x46de25 !== Symbol.prototype
              ? "symbol"
              : typeof _0x46de25;
          }),
    W(_0x5a17a4)
  );
}
function ut(_0x430c96, _0x1967a6) {
  if (W(_0x430c96) != "object" || !_0x430c96) return _0x430c96;
  var _0x321124 = _0x430c96[Symbol.toPrimitive];
  if (_0x321124 !== undefined) {
    var _0x4c0766 = _0x321124.call(_0x430c96, _0x1967a6 || "default");
    if (W(_0x4c0766) != "object") return _0x4c0766;
    throw TypeError(
      "@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.",
    );
  }
  return (_0x1967a6 === "string" ? String : Number)(_0x430c96);
}
function dt(_0x32f630) {
  var _0x42402d = ut(_0x32f630, "string");
  return W(_0x42402d) == "symbol" ? _0x42402d : _0x42402d + "";
}
function G(_0x5c8c82, _0x556024, _0x921ee3) {
  return (
    (_0x556024 = dt(_0x556024)) in _0x5c8c82
      ? Object.defineProperty(_0x5c8c82, _0x556024, {
          value: _0x921ee3,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x5c8c82[_0x556024] = _0x921ee3),
    _0x5c8c82
  );
}
const ft = i.SLIDE_TABLE_CONTROL_GUTTER + 18;
let pt = class extends s.RxDisposable {
  constructor(
    _0x2c500a,
    _0x1ee0d9,
    _0x5ca858,
    _0x2f4e00,
    _0x323ea3,
    _0x418c41,
    _0x3b1526,
  ) {
    (super(),
      (this._renderContext = _0x2c500a),
      (this._boardCanvasPopManagerService = _0x1ee0d9),
      (this._boardElementService = _0x5ca858),
      (this._slideTableSelectionService = _0x2f4e00),
      (this._elementStateService = _0x323ea3),
      (this._slideTableResourceService = _0x418c41),
      (this._interactionSurfaceService = _0x3b1526),
      G(this, "_popupDisposable", null),
      G(this, "_popupSelectionKey", null),
      G(this, "_eventDisposables", new s["DisposableCollection"]()),
      this.disposeWithMe(this._eventDisposables),
      this._init());
  }
  dispose() {
    (this._clearPopup(), super.dispose());
  }
  _init() {
    let _0x1f6673 = this._renderContext["scene"].getTransformerByCreate();
    (this._subscribe(_0x1f6673.createControl$, () =>
      this._showPopupForSelection(),
    ),
      this._subscribe(_0x1f6673.clearControl$, () =>
        this._clearPopupIfSelectionChanged(),
      ),
      this._subscribe(_0x1f6673.changeStart$, () => this._clearPopup()),
      this._subscribe(_0x1f6673.changeEnd$, () =>
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
  _subscribe(_0x79124e, _0x1d2c89) {
    let _0x57ab3d = _0x79124e.subscribe(_0x1d2c89);
    this._eventDisposables["add"](
      (0, s.toDisposable)(() => {
        var _0x10b36a, _0x203a65;
        ((_0x10b36a = _0x57ab3d.unsubscribe) == null ||
          _0x10b36a.call(_0x57ab3d),
          (_0x203a65 = _0x57ab3d.dispose) == null || _0x203a65.call(_0x57ab3d));
      }),
    );
  }
  _clearPopup() {
    var _0x453c8b;
    ((_0x453c8b = this._popupDisposable) == null || _0x453c8b.dispose(),
      (this._popupDisposable = null),
      (this._popupSelectionKey = null));
  }
  _clearPopupIfSelectionChanged() {
    setTimeout(() => {
      this._isPopupSelectionStillActive() || this._clearPopup();
    }, 0);
  }
  _isPopupSelectionStillActive() {
    let _0x1b7faf = this._elementStateService["getSnapshot"]();
    return !_0x1b7faf.context || !_0x1b7faf.selectedIds["length"]
      ? false
      : this._popupSelectionKey ===
          this._buildPopupSelectionKey(
            _0x1b7faf.context["unitId"],
            _0x1b7faf.context["subUnitId"],
            _0x1b7faf.selectedIds,
          );
  }
  _buildPopupSelectionKey(_0x20d3c5, _0x3f448b, _0x3ad26f) {
    return _0x20d3c5 + ":" + _0x3f448b + ":" + _0x3ad26f.join(",");
  }
  _showPopupForSelection() {
    var _0x2af778;
    if (this._interactionSurfaceService["isInteractionSurfaceActive"]) {
      this._clearPopup();
      return;
    }
    let _0x134886 = this._elementStateService["getSnapshot"]();
    if (_0x134886.isTransforming) {
      this._clearPopup();
      return;
    }
    let _0x7ca0e9 = this._renderContext["scene"]
      .getTransformerByCreate()
      .getSelectedObjectMap();
    if (!_0x7ca0e9.size) {
      if (
        this._showPopupForTableSelection() ||
        this._isPopupSelectionStillActive()
      )
        return;
      this._clearPopup();
      return;
    }
    if (
      (0, n.resolveBoardFloatingToolbarSelection)({
        context: _0x134886.context,
        selectedIds: _0x134886.selectedIds,
        getElementById: (_0x3d9675, _0x4f2c8f, _0x47521c) =>
          this._boardElementService["getElementById"](
            _0x3d9675,
            _0x4f2c8f,
            _0x47521c,
          ),
      }).owner !== "table"
    ) {
      this._clearPopup();
      return;
    }
    let _0x1ac79b = Array.from(_0x7ca0e9.values())
      .map((_0x2a5ef9) => this._resolveSelectedEntry(_0x2a5ef9))
      .filter((_0x148b59) => !!_0x148b59)
      .filter(
        (_0x5a192b) =>
          _0x5a192b.elementData["element"].type === e.BoardElementType["Table"],
      );
    if (!_0x1ac79b.length) {
      this._clearPopup();
      return;
    }
    let _0x3b1d74 =
      _0x1ac79b.find(
        (_0x1106d8) =>
          _0x1106d8.elementData["elementId"] === _0x134886.focusedId,
      ) ?? _0x1ac79b[0];
    if (!_0x3b1d74) {
      this._clearPopup();
      return;
    }
    let _0x16a0c0 = this._buildPopupSelectionKey(
      _0x3b1d74.elementData["unitId"],
      _0x3b1d74.elementData["subUnitId"],
      ((_0x2af778 = _0x134886.context) == null
        ? undefined
        : _0x2af778.unitId) === _0x3b1d74.elementData["unitId"] &&
        _0x134886.context["subUnitId"] === _0x3b1d74.elementData["subUnitId"] &&
        _0x134886.selectedIds["length"]
        ? _0x134886.selectedIds
        : [_0x3b1d74.elementData["elementId"]],
    );
    (this._popupDisposable && this._popupSelectionKey === _0x16a0c0) ||
      (this._clearPopup(),
      (this._popupDisposable = this.disposeWithMe(
        this._boardCanvasPopManagerService["attachPopupToObject"](
          _0x3b1d74.elementData["unitId"],
          _0x3b1d74.elementData["subUnitId"],
          _0x3b1d74.object,
          {
            componentKey: st,
            direction: "top-center",
            offset: [0, ft],
            anchorBoundResolver: this._resolveSelectionAnchorBoundResolver(
              _0x3b1d74.elementData,
            ),
            extraProps: {
              unitId: _0x3b1d74.elementData["unitId"],
              subUnitId: _0x3b1d74.elementData["subUnitId"],
              elementId: _0x3b1d74.elementData["elementId"],
              tableId: _0x3b1d74.elementData["element"].tableId,
            },
          },
        ),
      )),
      (this._popupSelectionKey = _0x16a0c0));
  }
  _showPopupForTableSelection() {
    let _0x29b6ab = this._slideTableSelectionService["getSelection"]();
    if (!_0x29b6ab || _0x29b6ab.kind === "text" || !_0x29b6ab.ranges["length"])
      return false;
    let _0x1ee1c6 = this._resolveTableSelectionObject(
      _0x29b6ab.unitId,
      _0x29b6ab.elementId,
    );
    if (!_0x1ee1c6) return false;
    let _0x1abaa2 = this._boardElementService["getElementById"](
      _0x29b6ab.unitId,
      _0x29b6ab.subUnitId,
      _0x29b6ab.elementId,
    );
    if (
      !_0x1abaa2 ||
      _0x1abaa2.element["type"] !== e.BoardElementType["Table"] ||
      _0x1abaa2.element["tableId"] !== _0x29b6ab.tableId
    )
      return false;
    let _0x480c36 = _0x1abaa2,
      _0x804aa0 =
        this._buildPopupSelectionKey(_0x29b6ab.unitId, _0x29b6ab.subUnitId, [
          _0x29b6ab.elementId,
        ]) + this._buildTableSelectionRangeKey(_0x29b6ab);
    return this._popupDisposable && this._popupSelectionKey === _0x804aa0
      ? true
      : (this._clearPopup(),
        (this._popupDisposable = this.disposeWithMe(
          this._boardCanvasPopManagerService["attachPopupToObject"](
            _0x29b6ab.unitId,
            _0x29b6ab.subUnitId,
            _0x1ee1c6,
            {
              componentKey: st,
              direction: "top-center",
              offset: [0, ft],
              anchorBoundResolver:
                this._resolveSelectionAnchorBoundResolver(_0x480c36),
              extraProps: {
                unitId: _0x29b6ab.unitId,
                subUnitId: _0x29b6ab.subUnitId,
                elementId: _0x29b6ab.elementId,
                tableId: _0x29b6ab.tableId,
              },
            },
          ),
        )),
        (this._popupSelectionKey = _0x804aa0),
        true);
  }
  _buildTableSelectionRangeKey(_0x5c6abf) {
    let _0x4aaa39 = _0x5c6abf.ranges[0];
    return _0x4aaa39
      ? ":table-selection:" +
          _0x5c6abf.kind +
          ":" +
          _0x4aaa39.startRow +
          ":" +
          _0x4aaa39.endRow +
          ":" +
          _0x4aaa39.startColumn +
          ":" +
          _0x4aaa39.endColumn
      : ":table-selection:" + _0x5c6abf.kind + ":empty";
  }
  _resolveSelectionAnchorBoundResolver(_0x2ebd49) {
    let _0x534e51 = this._slideTableSelectionService["getSelection"]();
    if (
      !mt(_0x534e51, _0x2ebd49) ||
      (_0x534e51.kind !== "row" && _0x534e51.kind !== "column")
    )
      return;
    let _0x3f5d97 = this._slideTableResourceService["getTable"](
        _0x534e51.unitId,
        _0x534e51.tableId,
      ),
      _0x1339e7 = _0x534e51.ranges[0];
    if (!(!_0x3f5d97 || !_0x1339e7))
      return (_0x1e58e8) => {
        let _0x42c795 = (0, i.normalizeSlideTableCellRange)(_0x1339e7),
          _0x1d35a4 = ht(
            _0x3f5d97.columns["map"]((_0x39eaaf) => _0x39eaaf.width),
            _0x1e58e8.width,
            _0x42c795.startColumn,
            _0x42c795.endColumn,
          ),
          _0x332ac0 = ht(
            _0x3f5d97.rows["map"]((_0x260d46) => _0x260d46.height ?? 24),
            _0x1e58e8.height,
            _0x42c795.startRow,
            _0x42c795.endRow,
          );
        return {
          left: _0x1e58e8.left + _0x1d35a4.start,
          right: _0x1e58e8.left + _0x1d35a4.start + _0x1d35a4.size,
          top: _0x1e58e8.top + _0x332ac0.start,
          bottom: _0x1e58e8.top + _0x332ac0.start + _0x332ac0.size,
        };
      };
  }
  _resolveTableSelectionObject(_0x500f83, _0x3209fe) {
    var _0x3a32df, _0x3d7edd;
    let _0x4b1208 = this._renderContext["scene"],
      _0x259642 = (0, n.getBoardElementRenderObjectKey)(_0x500f83, _0x3209fe);
    return (
      ((_0x3a32df = _0x4b1208.getObjectIncludeInGroup) == null
        ? undefined
        : _0x3a32df.call(_0x4b1208, _0x259642)) ??
      ((_0x3d7edd = _0x4b1208.getObject) == null
        ? undefined
        : _0x3d7edd.call(_0x4b1208, _0x259642)) ??
      null
    );
  }
  _resolveSelectedEntry(_0x55294f) {
    var _0x44980b;
    if (!_0x55294f) return null;
    let _0x2e9cf7 = (0, n.parseBoardElementRenderObjectKey)(_0x55294f.oKey);
    if (!_0x2e9cf7) return null;
    let _0x5d2f1e = this._elementStateService["getSnapshot"](),
      _0xb87358 =
        ((_0x44980b = _0x5d2f1e.context) == null
          ? undefined
          : _0x44980b.unitId) === _0x2e9cf7.unitId
          ? _0x5d2f1e.context["subUnitId"]
          : undefined;
    if (!_0xb87358) return null;
    let _0x47b08e = this._boardElementService["getElementById"](
      _0x2e9cf7.unitId,
      _0xb87358,
      _0x2e9cf7.elementId,
    );
    return !_0x47b08e ||
      _0x47b08e.element["type"] !== e.BoardElementType["Table"]
      ? null
      : { object: _0x55294f, elementData: _0x47b08e };
  }
};
pt = L(
  [
    I(1, (0, s.Inject)(n.BoardCanvasPopManagerService)),
    I(2, (0, s.Inject)(e.IBoardElementService)),
    I(3, (0, s.Inject)(a.SlideTableSelectionService)),
    I(4, (0, s.Inject)(n.IBoardElementStateService)),
    I(5, (0, s.Inject)(i.SlideTableResourceService)),
    I(6, (0, s.Inject)(n.BoardInteractionSurfaceService)),
  ],
  pt,
);
function mt(_0x360008, _0x46e95d) {
  return (
    !!_0x360008 &&
    _0x360008.unitId === _0x46e95d.unitId &&
    _0x360008.subUnitId === _0x46e95d.subUnitId &&
    _0x360008.elementId === _0x46e95d.elementId &&
    _0x360008.tableId === _0x46e95d.element["tableId"] &&
    !!_0x360008.ranges["length"]
  );
}
function ht(_0x95998, _0x5add6d, _0x1c4a90, _0x31d9ae) {
  let _0x506931 = _0x95998.reduce(
    (_0x7371c3, _0x1bd98b) => _0x7371c3 + _0x1bd98b,
    0,
  );
  if (_0x506931 <= 0 || _0x95998.length === 0)
    return { start: 0, size: _0x5add6d };
  let _0x3d187b = Math.max(0, Math.min(_0x1c4a90, _0x95998.length - 1)),
    _0x2a4f8e = Math.max(_0x3d187b, Math.min(_0x31d9ae, _0x95998.length - 1)),
    _0x50aad9 = _0x95998
      .slice(0, _0x3d187b)
      .reduce((_0xe47e0e, _0x1a2881) => _0xe47e0e + _0x1a2881, 0),
    _0x1c8112 = _0x95998
      .slice(_0x3d187b, _0x2a4f8e + 1)
      .reduce((_0x2700d7, _0x453bdf) => _0x2700d7 + _0x453bdf, 0);
  return {
    start: (_0x50aad9 / _0x506931) * _0x5add6d,
    size: (_0x1c8112 / _0x506931) * _0x5add6d,
  };
}
var gt = class extends a.SlideTableObject {
  constructor(_0x1ad498, _0x25c931) {
    (super(_0x1ad498, { ..._0x25c931, controlButtonMode: "table-handle" }),
      G(this, "_element", undefined),
      (this._element = _0x25c931.element));
  }
  updateElement(_0x406a8d) {
    ((this._element = _0x406a8d), this.makeDirty(true));
  }
  getElement() {
    return this._element;
  }
};
let _t = class extends s.RxDisposable {
  constructor(_0x232cf5, _0x38c274, _0x32c720, _0x4e3383, _0x4c4758) {
    (super(),
      (this._renderContext = _0x232cf5),
      (this._instanceService = _0x38c274),
      (this._boardElementService = _0x32c720),
      (this._slideTableModelService = _0x4e3383),
      (this._slideTableResourceService = _0x4c4758),
      this._init());
  }
  _init() {
    (this.disposeWithMe(
      (0, s.toDisposable)(
        this._slideTableModelService["tableChange$"].subscribe((_0x2611fc) => {
          _0x2611fc.unitId === this._renderContext["unitId"] &&
            this._syncTableObjects(_0x2611fc.tableId);
        }),
      ),
    ),
      this.disposeWithMe(
        (0, s.toDisposable)(
          this._slideTableModelService["tableRemoval$"].subscribe(
            (_0x2fe79a) => {
              _0x2fe79a.unitId === this._renderContext["unitId"] &&
                this._syncTableObjects(_0x2fe79a.tableId);
            },
          ),
        ),
      ));
  }
  _syncTableObjects(_0x3a0a01) {
    let { unitId: _0x3d5630 } = this._renderContext,
      _0x53e9e3 = this._instanceService["getUnit"](
        _0x3d5630,
        s.UniverInstanceType["UNIVER_BOARD"],
      );
    if (!_0x53e9e3) return;
    let _0xe2051b = _0x53e9e3.getActivePageId(),
      _0x5f1bc7 = this._boardElementService["getElementData"](
        _0x3d5630,
        _0xe2051b,
      ),
      _0x195a6f =
        this._slideTableModelService["getTable"](_0x3d5630, _0x3a0a01) ?? null,
      _0x1f30af = this._slideTableResourceService["getThemes"](_0x3d5630),
      _0x5762d1 = false;
    if (
      (Object.values(_0x5f1bc7).forEach((_0x286b04) => {
        if (!vt(_0x286b04) || _0x286b04.element["tableId"] !== _0x3a0a01)
          return;
        let _0xd21b4f = this._getBoardTableObject(
          (0, n.getBoardElementRenderObjectKey)(_0x3d5630, _0x286b04.elementId),
        );
        _0xd21b4f &&
          (_0xd21b4f.updateElement(_0x286b04.element),
          _0xd21b4f.setTableThemes(_0x1f30af),
          _0xd21b4f.setTable(_0x195a6f),
          (_0x5762d1 = true));
      }),
      _0x5762d1)
    ) {
      var _0x35afa4, _0x48a067;
      (_0x35afa4 = (_0x48a067 = this._renderContext["scene"]).makeDirty) ==
        null || _0x35afa4.call(_0x48a067, true);
    }
  }
  _getBoardTableObject(_0x27b29a) {
    var _0x58c4b4, _0x1c5759;
    let _0x382510 = this._renderContext["scene"],
      _0x1ea76e =
        ((_0x58c4b4 = _0x382510.getObjectIncludeInGroup) == null
          ? undefined
          : _0x58c4b4.call(_0x382510, _0x27b29a)) ??
        ((_0x1c5759 = _0x382510.getObject) == null
          ? undefined
          : _0x1c5759.call(_0x382510, _0x27b29a));
    return _0x1ea76e instanceof gt ? _0x1ea76e : null;
  }
};
_t = L(
  [
    I(1, s.IUniverInstanceService),
    I(2, e.IBoardElementService),
    I(3, (0, s.Inject)(i.SlideTableModelService)),
    I(4, (0, s.Inject)(i.SlideTableResourceService)),
  ],
  _t,
);
function vt(_0x5595b7) {
  return _0x5595b7.element["type"] === e.BoardElementType["Table"];
}
var yt = class extends a.SlideTableCellEditorService {
  getEditing() {
    return this.getSession();
  }
  subscribe(_0x44d1a6) {
    return super.subscribe(_0x44d1a6);
  }
};
function bt(_0x7a66ca) {
  return _0x7a66ca.altKey ||
    _0x7a66ca.ctrlKey ||
    _0x7a66ca.metaKey ||
    _0x7a66ca.key !== "Tab"
    ? null
    : _0x7a66ca.shiftKey
      ? "tab-backward"
      : "tab-forward";
}
function xt(_0x51b680, _0x3ada2e) {
  var _0xb03903, _0x1f0ff3;
  if (!_0x51b680) return null;
  let _0x5ae9c2 =
    ((_0xb03903 = (_0x1f0ff3 = _0x3ada2e.scene).getAncestorScale) == null
      ? undefined
      : _0xb03903.call(_0x1f0ff3)) ?? {};
  return {
    ...(0, a.resolveSlideTableCellEditorLayout)({
      rect: _0x51b680.rect,
      tableTransform: _0x51b680.tableTransform,
      scale: { scaleX: K(_0x5ae9c2.scaleX, 1), scaleY: K(_0x5ae9c2.scaleY, 1) },
      scenePointToViewportPoint: (_0x14b243) => Ct(_0x14b243, _0x3ada2e),
    }),
    ...(_0x51b680.horizontalAlign === undefined
      ? {}
      : { horizontalAlign: _0x51b680.horizontalAlign }),
    ...(_0x51b680.verticalAlign === undefined
      ? {}
      : { verticalAlign: _0x51b680.verticalAlign }),
    ...(_0x51b680.isHorizontal === undefined
      ? {}
      : { isHorizontal: _0x51b680.isHorizontal }),
  };
}
function St(_0x348332, _0x397da4) {
  var _0x5c25af, _0x4fe7ef;
  let _0x322ce9 =
    _0x348332 == null || (_0x5c25af = _0x348332.getBoundingClientRect) == null
      ? undefined
      : _0x5c25af.call(_0x348332);
  if (!_0x322ce9) return;
  let _0x2d8d00 =
      _0x397da4 == null || (_0x4fe7ef = _0x397da4.getBoundingClientRect) == null
        ? undefined
        : _0x4fe7ef.call(_0x397da4),
    _0x3b9a11 = _0x2d8d00
      ? _0x2d8d00.left +
        ((_0x397da4 == null ? undefined : _0x397da4.clientLeft) ?? 0) -
        ((_0x397da4 == null ? undefined : _0x397da4.scrollLeft) ?? 0)
      : 0,
    _0x288432 = _0x2d8d00
      ? _0x2d8d00.top +
        ((_0x397da4 == null ? undefined : _0x397da4.clientTop) ?? 0) -
        ((_0x397da4 == null ? undefined : _0x397da4.scrollTop) ?? 0)
      : 0;
  return { left: _0x322ce9.left - _0x3b9a11, top: _0x322ce9.top - _0x288432 };
}
function Ct(_0x4cdfd3, _0x2506f5) {
  var _0x1805ba, _0x41974f, _0x5177c7, _0x405530, _0x43e699;
  let _0x29af5a =
      (_0x1805ba = (_0x41974f = _0x2506f5.scene).getViewport) == null ||
      (_0x1805ba = _0x1805ba.call(_0x41974f, n.BOARD_MAIN_VIEWPORT_KEY)) ==
        null ||
      (_0x5177c7 = _0x1805ba.getAbsoluteVector) == null
        ? undefined
        : _0x5177c7.call(_0x1805ba, new c["Vector2"](_0x4cdfd3.x, _0x4cdfd3.y)),
    _0x229520 = _0x2506f5.canvasOffset ?? { left: 0, top: 0 };
  if (_0x29af5a)
    return { x: _0x229520.left + _0x29af5a.x, y: _0x229520.top + _0x29af5a.y };
  let _0x5a3a4d =
      ((_0x405530 = (_0x43e699 = _0x2506f5.scene).getAncestorScale) == null
        ? undefined
        : _0x405530.call(_0x43e699)) ?? {},
    _0x2fbd53 = K(_0x2506f5.canvasScale, 1),
    _0xd0e201 = K(_0x5a3a4d.scaleX, 1) * _0x2fbd53,
    _0x174335 = K(_0x5a3a4d.scaleY, 1) * _0x2fbd53;
  return {
    x: _0x229520.left + _0x4cdfd3.x * _0xd0e201,
    y: _0x229520.top + _0x4cdfd3.y * _0x174335,
  };
}
function K(_0x976127, _0x226833) {
  return typeof _0x976127 == "number" &&
    Number.isFinite(_0x976127) &&
    _0x976127 > 0
    ? _0x976127
    : _0x226833;
}
let wt = class extends s.RxDisposable {
  constructor(
    _0x5e9b20,
    _0xd63927,
    _0x2c1a33,
    _0xbb2e21,
    _0x237d96,
    _0x18f53c,
    _0x27ac55,
    _0xc9c20e,
    _0x64573c,
    _0x31183e,
    _0x1c46a5,
    _0x46ba4e,
    _0x124b0c,
    _0x5555fa,
    _0x3533f8,
    _0x5ae310,
  ) {
    (super(),
      (this._renderContext = _0x5e9b20),
      (this._instanceService = _0xd63927),
      (this._boardElementService = _0x2c1a33),
      (this._slideTableSelectionService = _0xbb2e21),
      (this._contextMenuService = _0x237d96),
      (this._keyboardService = _0x18f53c),
      (this._cellEditorBridgeService = _0x27ac55),
      (this._commandService = _0xc9c20e),
      (this._contextService = _0x64573c),
      (this._slideTableResourceService = _0x31183e),
      (this._boardElementStateService = _0x1c46a5),
      (this._boardUIStateService = _0x46ba4e),
      (this._editorUIService = _0x124b0c),
      (this._layoutService = _0x5555fa),
      (this._permissionService = _0x3533f8),
      (this._boardImageInsertService = _0x5ae310),
      G(this, "_attachScheduled", false),
      G(this, "_objectPointerDisposables", null),
      G(this, "_resizeState", null),
      G(this, "_rangeDragState", null),
      G(this, "_headerDragState", null),
      G(this, "_pendingHeaderMoveState", null),
      G(this, "_rowColumnMoveState", null),
      G(this, "_rowColumnMoveTarget", null),
      G(this, "_tableHandleMoveState", null),
      G(this, "_pendingStage1BodyState", null),
      G(this, "_tableActivationStage", null),
      G(this, "_activeTableContext", null),
      G(this, "_resizeHoverActive", false),
      G(this, "_areTransformerControlsHiddenForTableMove", false),
      G(this, "_areTransformerControlsHiddenForTableStructuralHover", false),
      G(this, "_tableStructuralHoverTransformerObject", null),
      G(this, "_handleClipboardCopy", (_0xa00d90) => {
        let _0x27f1c4 = this._resolveTableClipboardTarget(_0xa00d90);
        !_0x27f1c4 ||
          !_0xa00d90.clipboardData ||
          !this._canCopyTable(_0x27f1c4.selection) ||
          (_0xa00d90.clipboardData["setData"](
            "text/plain",
            (0, a.serializeSlideTableSelectionToText)(
              _0x27f1c4.table,
              _0x27f1c4.selection,
            ),
          ),
          _0xa00d90.clipboardData["setData"](
            "text/html",
            (0, a.serializeSlideTableSelectionToHtml)(
              _0x27f1c4.table,
              _0x27f1c4.selection,
            ),
          ),
          _0xa00d90.preventDefault(),
          _0xa00d90.stopPropagation());
      }),
      G(this, "_handleClipboardCut", async (_0x438663) => {
        let _0x3e777b = this._resolveTableClipboardTarget(_0x438663);
        if (
          !_0x3e777b ||
          !_0x438663.clipboardData ||
          !this._canCopyTable(_0x3e777b.selection)
        )
          return;
        let _0x549d90 = (0, a.buildSlideTableClearTextPatch)(
          _0x3e777b.table,
          _0x3e777b.selection,
        );
        _0x549d90 &&
          (_0x438663.clipboardData["setData"](
            "text/plain",
            (0, a.serializeSlideTableSelectionToText)(
              _0x3e777b.table,
              _0x3e777b.selection,
            ),
          ),
          _0x438663.clipboardData["setData"](
            "text/html",
            (0, a.serializeSlideTableSelectionToHtml)(
              _0x3e777b.table,
              _0x3e777b.selection,
            ),
          ),
          _0x438663.preventDefault(),
          _0x438663.stopPropagation(),
          await this._commitClipboardPatch(_0x3e777b, _0x549d90));
      }),
      G(this, "_handleClipboardPaste", async (_0x28733b) => {
        let _0x3484e7 = this._resolveTableClipboardTarget(_0x28733b);
        if (!_0x3484e7 || !_0x28733b.clipboardData) return;
        let _0x597601 = _0x28733b.clipboardData["getData"]("text/html"),
          _0x55f001 = _0x28733b.clipboardData["getData"]("text/plain"),
          _0x12c4f7 = (0, g.isClipboardTextImage)(_0x55f001)
            ? await (0, g.extractClipboardTextImageFile)(_0x55f001)
            : null,
          _0x41aa76 = _0x12c4f7
            ? null
            : ((_0x597601
                ? (0, a.buildSlideTablePasteHtmlPatch)(
                    _0x3484e7.table,
                    _0x3484e7.selection,
                    _0x597601,
                  )
                : null) ??
              (0, a.buildSlideTablePasteTextPatch)(
                _0x3484e7.table,
                _0x3484e7.selection,
                _0x55f001,
              )),
          _0x30f540 = _0x12c4f7
            ? [_0x12c4f7]
            : await Rt(_0x28733b.clipboardData, _0x597601);
        (!_0x41aa76 && _0x30f540.length === 0) ||
          (_0x28733b.preventDefault(),
          _0x28733b.stopPropagation(),
          !(
            _0x41aa76 &&
            !(await this._commitClipboardPatch(_0x3484e7, _0x41aa76))
          ) && (await this._insertClipboardImages(_0x30f540, +!!_0x41aa76)));
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
        (0, s.toDisposable)(() => {
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
        this._keyboardService["setHandler"]((_0xdf2750) =>
          this._handleKeyboardAction(_0xdf2750),
        ),
      ),
      this.disposeWithMe(
        this._keyboardService["setInputHandler"]((_0x196c94) =>
          this._handleKeyboardInput(_0x196c94),
        ),
      ),
      this.disposeWithMe(
        (0, s.toDisposable)(
          this._slideTableSelectionService["selection$"].subscribe(
            (_0x212ac6) => {
              (this._syncSelection(_0x212ac6),
                _0x212ac6 && this._syncActivationStageFromSelection(_0x212ac6),
                this._keyboardService["setFocused"](
                  !!_0x212ac6 && _0x212ac6.kind !== "text",
                ));
            },
          ),
        ),
      ));
    let _0x31a478 = this._instanceService["getUnit"](
      this._renderContext["unitId"],
      s.UniverInstanceType["UNIVER_BOARD"],
    );
    _0x31a478 &&
      (this.disposeWithMe(
        (0, s.toDisposable)(() => {
          var _0x38368f;
          return (_0x38368f = this._objectPointerDisposables) == null
            ? undefined
            : _0x38368f.dispose();
        }),
      ),
      this._attachObjectPointerEvents(_0x31a478),
      this._subscribeBoardElementChanges(_0x31a478),
      this._subscribeBoardElementStateChanges(_0x31a478),
      this.disposeWithMe(
        (0, s.toDisposable)(
          this._boardUIStateService["state$"].subscribe((_0x1375c2) => {
            _0x1375c2.interactionMode === "viewing" &&
              this._resetTableInteraction();
          }),
        ),
      ));
  }
  _initScenePointerEvents() {
    var _0x97f3a7, _0x561ed0, _0x4269e6, _0x2b1160;
    let _0x22e94d = this._renderContext["scene"],
      _0x415bfd =
        (_0x97f3a7 = _0x22e94d.onPointerDown$) == null
          ? undefined
          : _0x97f3a7.subscribeEvent((_0x2e5d7e, _0x3d7cc0) => {
              this._handleScenePointerDown(_0x2e5d7e, _0x3d7cc0);
            });
    _0x415bfd && this.disposeWithMe((0, s.toDisposable)(() => kt(_0x415bfd)));
    let _0x5e8f5a =
      (_0x561ed0 = _0x22e94d.onPointerMove$) == null
        ? undefined
        : _0x561ed0.subscribeEvent((_0x3f046f) => {
            (this._handlePendingStage1BodyPointerMove(_0x3f046f),
              this._handleTableHandleMovePointerMove(_0x3f046f),
              this._handleRowColumnMovePointerMove(_0x3f046f),
              this._handleHeaderDragPointerMove(_0x3f046f),
              this._handleResizeCursorHover(_0x3f046f),
              this._handleControlHoverPointerMove(_0x3f046f),
              this._handleResizePointerMove(_0x3f046f),
              this._handleRangeDragPointerMove(_0x3f046f));
          });
    _0x5e8f5a && this.disposeWithMe((0, s.toDisposable)(() => kt(_0x5e8f5a)));
    let _0xba0c44 =
      (_0x4269e6 = _0x22e94d.onPointerUp$) == null
        ? undefined
        : _0x4269e6.subscribeEvent((_0x508f49) => {
            (this._finishTableHandleMove(_0x508f49),
              this._finishPendingStage1Body({ focusCell: true }),
              this._finishRowColumnMove({ commit: true }),
              this._handleResizePointerUp(_0x508f49),
              this._finishRangeDrag(),
              this._finishHeaderDrag());
          });
    _0xba0c44 && this.disposeWithMe((0, s.toDisposable)(() => kt(_0xba0c44)));
    let _0x3832f2 =
      (_0x2b1160 = _0x22e94d.onPointerCancel$) == null
        ? undefined
        : _0x2b1160.subscribeEvent(() => {
            (this._finishPendingStage1Body({ focusCell: false }),
              this._cancelTableHandleMove(),
              this._finishRowColumnMove({ commit: false }),
              this._cancelResizePreview(),
              this._resetResizeCursor(),
              this._finishRangeDrag(),
              this._finishHeaderDrag());
          });
    _0x3832f2 && this.disposeWithMe((0, s.toDisposable)(() => kt(_0x3832f2)));
  }
  _handleScenePointerDown(_0x208a0e, _0x4269de) {
    if (this._boardUIStateService["getState"]().interactionMode === "viewing")
      return;
    let _0x14232a = _0x208a0e.button ?? 0;
    if ((_0x14232a !== 0 && _0x14232a !== 2) || this._isTableTextEditing())
      return;
    this._tableActivationStage &&
      !this._isActiveTablePointerDown(_0x208a0e) &&
      this._resetTableInteraction();
    let _0x582c5d = this._instanceService["getUnit"](
      this._renderContext["unitId"],
      s.UniverInstanceType["UNIVER_BOARD"],
    );
    if (!_0x582c5d) return;
    let _0x3f615b = _0x582c5d.getUnitId(),
      _0x5e82f6 = _0x582c5d.getActivePageId(),
      _0x53e110 = this._boardElementService["getElementData"](
        _0x3f615b,
        _0x5e82f6,
      ),
      _0x419c11 = this._getBoardPointVectorFromEvent(_0x208a0e);
    for (let _0x508998 of Object.values(_0x53e110)) {
      var _0x4639e9, _0x309517;
      if (!q(_0x508998)) continue;
      let _0x54abef = this._getBoardTableObject(
          (0, n.getBoardElementRenderObjectKey)(_0x3f615b, _0x508998.elementId),
        ),
        _0x5604cc = _0x54abef == null ? undefined : _0x54abef.getTable(),
        _0xfc6f99 =
          _0x54abef == null
            ? undefined
            : _0x54abef.hitTestStructuralTriggerAtScenePoint(_0x419c11);
      if (
        _0x54abef &&
        _0x5604cc &&
        _0x14232a === 0 &&
        (0, a.isSlideTableInsertDotTrigger)(_0xfc6f99)
      ) {
        if (
          this._handleStructuralInsertTrigger(
            _0x3f615b,
            _0x508998,
            _0x54abef,
            _0xfc6f99,
            _0x419c11,
          )
        ) {
          var _0x558242, _0x9d176c;
          ((_0x558242 = _0x208a0e.preventDefault) == null ||
            _0x558242.call(_0x208a0e),
            (_0x9d176c = _0x208a0e.stopPropagation) == null ||
              _0x9d176c.call(_0x208a0e),
            J(_0x4269de),
            this._makeSceneDirty());
        }
        return;
      }
      let _0x4e7f6a =
        _0x54abef == null
          ? undefined
          : _0x54abef.hitTestControlAtScenePoint(_0x419c11);
      if (!_0x54abef || !_0x5604cc || (!_0x4e7f6a && !_0xfc6f99)) continue;
      if (!this._isTableReadyForCellInteraction(_0x582c5d, _0x508998)) return;
      let _0x213685 = null;
      if (
        (this._slideTableSelectionService["markTableInternalInteraction"](),
        (_0xfc6f99 == null ? undefined : _0xfc6f99.kind) === "row-header" &&
          _0xfc6f99.row !== undefined)
      ) {
        let _0x48f0c4 = this._getSelectedHeaderRange(
          _0x508998,
          "row",
          _0xfc6f99.row,
        );
        if (_0x14232a === 0 && _0x48f0c4) {
          var _0x371b4e, _0x260290;
          (this._startPendingHeaderMove({
            kind: "row",
            unitId: _0x3f615b,
            subUnitId: _0x5e82f6,
            elementId: _0x508998.elementId,
            tableId: _0x508998.element["tableId"],
            object: _0x54abef,
            table: _0x5604cc,
            start: _0x48f0c4.start,
            end: _0x48f0c4.end,
            startPoint: _0x419c11,
          }),
            (_0x371b4e = _0x208a0e.preventDefault) == null ||
              _0x371b4e.call(_0x208a0e),
            (_0x260290 = _0x208a0e.stopPropagation) == null ||
              _0x260290.call(_0x208a0e),
            J(_0x4269de));
          return;
        }
        let _0x511bed = (0, i.expandSlideTableRangeToMergedCells)(_0x5604cc, {
          startRow: _0xfc6f99.row,
          endRow: _0xfc6f99.row,
          startColumn: 0,
          endColumn: Math.max(0, _0x5604cc.columns["length"] - 1),
        });
        ((_0x213685 = this._slideTableSelectionService["selectRows"]({
          unitId: _0x3f615b,
          subUnitId: _0x5e82f6,
          elementId: _0x508998.elementId,
          tableId: _0x508998.element["tableId"],
          startRow: _0x511bed.startRow,
          endRow: _0x511bed.endRow,
          columnCount: _0x5604cc.columns["length"],
        })),
          _0x14232a === 0 &&
            (this._headerDragState = {
              kind: "row",
              anchor: _0xfc6f99.row,
              object: _0x54abef,
              selection: _0x213685,
              table: _0x5604cc,
            }));
      } else {
        if (
          (_0xfc6f99 == null ? undefined : _0xfc6f99.kind) ===
            "column-header" &&
          _0xfc6f99.column !== undefined
        ) {
          let _0x4c3cef = this._getSelectedHeaderRange(
            _0x508998,
            "column",
            _0xfc6f99.column,
          );
          if (_0x14232a === 0 && _0x4c3cef) {
            var _0x34eacf, _0x2cb1fc;
            (this._startPendingHeaderMove({
              kind: "column",
              unitId: _0x3f615b,
              subUnitId: _0x5e82f6,
              elementId: _0x508998.elementId,
              tableId: _0x508998.element["tableId"],
              object: _0x54abef,
              table: _0x5604cc,
              start: _0x4c3cef.start,
              end: _0x4c3cef.end,
              startPoint: _0x419c11,
            }),
              (_0x34eacf = _0x208a0e.preventDefault) == null ||
                _0x34eacf.call(_0x208a0e),
              (_0x2cb1fc = _0x208a0e.stopPropagation) == null ||
                _0x2cb1fc.call(_0x208a0e),
              J(_0x4269de));
            return;
          }
          let _0x4dff6e = (0, i.expandSlideTableRangeToMergedCells)(_0x5604cc, {
            startRow: 0,
            endRow: Math.max(0, _0x5604cc.rows["length"] - 1),
            startColumn: _0xfc6f99.column,
            endColumn: _0xfc6f99.column,
          });
          ((_0x213685 = this._slideTableSelectionService["selectColumns"]({
            unitId: _0x3f615b,
            subUnitId: _0x5e82f6,
            elementId: _0x508998.elementId,
            tableId: _0x508998.element["tableId"],
            startColumn: _0x4dff6e.startColumn,
            endColumn: _0x4dff6e.endColumn,
            rowCount: _0x5604cc.rows["length"],
          })),
            _0x14232a === 0 &&
              (this._headerDragState = {
                kind: "column",
                anchor: _0xfc6f99.column,
                object: _0x54abef,
                selection: _0x213685,
                table: _0x5604cc,
              }));
        } else
          (_0x4e7f6a == null ? undefined : _0x4e7f6a.kind) === "table-handle" &&
            ((_0x213685 = this._slideTableSelectionService["selectTable"]({
              unitId: _0x3f615b,
              subUnitId: _0x5e82f6,
              elementId: _0x508998.elementId,
              tableId: _0x508998.element["tableId"],
              rowCount: _0x5604cc.rows["length"],
              columnCount: _0x5604cc.columns["length"],
            })),
            this._boardElementStateService["selectElements"](
              { unitId: _0x3f615b, subUnitId: _0x5e82f6 },
              [_0x508998.elementId],
              _0x508998.elementId,
            ),
            _0x14232a === 0 &&
              this._startTableHandleMove(
                _0x3f615b,
                _0x5e82f6,
                _0x53e110,
                _0x508998,
                _0x54abef,
                _0x208a0e,
              ));
      }
      if (_0x213685) {
        ((_0x4e7f6a == null ? undefined : _0x4e7f6a.kind) !== "table-handle" &&
          this._beginTableInternalInteraction(_0x54abef),
          _0x54abef.setTableSelection(
            (0, a.resolveSlideTableObjectSelection)(_0x213685),
          ),
          _0x14232a === 2 && this._openContextMenu(_0x208a0e),
          (_0x4639e9 = _0x208a0e.preventDefault) == null ||
            _0x4639e9.call(_0x208a0e),
          (_0x309517 = _0x208a0e.stopPropagation) == null ||
            _0x309517.call(_0x208a0e),
          J(_0x4269de),
          this._makeSceneDirty());
        return;
      }
    }
  }
  _handleStructuralInsertTrigger(
    _0x3337a8,
    _0x2b2141,
    _0x1fc3c6,
    _0x430f7d,
    _0x18dea5,
  ) {
    let _0x313822 = Pt(_0x430f7d),
      _0x384dd7 = false;
    if (_0x430f7d.kind === "row-insert-dot" && _0x313822 !== null) {
      let _0x49689d = this._slideTableResourceService["getTable"](
        _0x3337a8,
        _0x2b2141.element["tableId"],
      );
      _0x384dd7 = !!this._commandService["executeCommand"](
        t.InsertBoardTableRowsCommand["id"],
        {
          unitId: _0x3337a8,
          subUnitId: _0x2b2141.subUnitId,
          elementId: _0x2b2141.elementId,
          tableId: _0x2b2141.element["tableId"],
          rowIndex: _0x313822,
          count: 1,
          height: Mt(_0x49689d, _0x313822),
        },
      );
    } else {
      if (_0x430f7d.kind === "column-insert-dot" && _0x313822 !== null) {
        let _0x2758c2 = this._slideTableResourceService["getTable"](
          _0x3337a8,
          _0x2b2141.element["tableId"],
        );
        _0x384dd7 = !!this._commandService["executeCommand"](
          t.InsertBoardTableColumnsCommand["id"],
          {
            unitId: _0x3337a8,
            subUnitId: _0x2b2141.subUnitId,
            elementId: _0x2b2141.elementId,
            tableId: _0x2b2141.element["tableId"],
            columnIndex: _0x313822,
            count: 1,
            width: Nt(_0x2758c2, _0x313822),
          },
        );
      }
    }
    if (_0x384dd7) {
      let _0x2e89a8 = _0x1fc3c6.hitTestStructuralTriggerAtScenePoint(_0x18dea5),
        _0x49c90e = (0, a.buildSlideTableInsertDotControlState)(
          (0, a.isSlideTableInsertDotTrigger)(_0x2e89a8)
            ? _0x2e89a8
            : _0x430f7d,
        );
      (_0x1fc3c6.setTableControlState(_0x49c90e),
        _0x1fc3c6.setTableControlHover(null),
        _0x1fc3c6.setTableCellHover(null));
    }
    return _0x384dd7;
  }
  _handleControlHoverPointerMove(_0x922cd6) {
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
    let _0x4e8a29 = this._instanceService["getUnit"](
      this._renderContext["unitId"],
      s.UniverInstanceType["UNIVER_BOARD"],
    );
    if (!_0x4e8a29) return;
    let _0x193b4d = _0x4e8a29.getUnitId(),
      _0x5cddaf = _0x4e8a29.getActivePageId(),
      _0x585bb6 = this._boardElementService["getElementData"](
        _0x193b4d,
        _0x5cddaf,
      ),
      _0xeb4f75 = this._getBoardPointVectorFromEvent(_0x922cd6),
      _0x3463ff = false,
      _0x4cba4a = null;
    (Object.values(_0x585bb6).forEach((_0x1903f9) => {
      if (!q(_0x1903f9)) return;
      let _0x419fc4 = this._getBoardTableObject(
        (0, n.getBoardElementRenderObjectKey)(_0x193b4d, _0x1903f9.elementId),
      );
      if (!_0x419fc4) return;
      let _0x34beb8 = _0x419fc4.hitTestStructuralTriggerAtScenePoint(_0xeb4f75),
        _0x4c8a7f = (0, a.isSlideTableInsertDotTrigger)(_0x34beb8)
          ? _0x34beb8
          : null;
      if (
        !this._isTableReadyForCellInteraction(_0x4e8a29, _0x1903f9) &&
        !_0x4c8a7f
      ) {
        let _0x23b7fd = _0x419fc4.setTableControlHover(null),
          _0x3b881a = _0x419fc4.setTableControlState(null),
          _0x103c4f = _0x419fc4.setTableCellHover(null);
        _0x3463ff = _0x23b7fd || _0x3b881a || _0x103c4f || _0x3463ff;
        return;
      }
      let _0x113388 = _0x419fc4.hitTestControlAtScenePoint(_0xeb4f75),
        _0x3d7f43 = !!_0x113388 || !!_0x34beb8,
        _0x172efa = this._buildStructuralControlState(_0x34beb8);
      if (
        _0x4c8a7f &&
        !this._isTableReadyForCellInteraction(_0x4e8a29, _0x1903f9)
      ) {
        let _0x2933c6 = _0x419fc4.setTableControlHover(null),
          _0x122afc = _0x419fc4.setTableControlState(_0x172efa),
          _0x2ddab8 = _0x419fc4.setTableCellHover(null);
        _0x3463ff = _0x2933c6 || _0x122afc || _0x2ddab8 || _0x3463ff;
        return;
      }
      _0x172efa &&
        !this._isActiveTableContext(_0x4e8a29, _0x1903f9) &&
        this._isSelectedTableElement(_0x4e8a29, _0x1903f9) &&
        (_0x4cba4a = _0x419fc4);
      let _0x39d53a = _0x419fc4.setTableControlHover(
          _0x113388
            ? {
                kind: _0x113388.kind,
                row: _0x113388.row ?? null,
                column: _0x113388.column ?? null,
              }
            : null,
        ),
        _0x5e1308 = _0x419fc4.setTableControlState(_0x172efa),
        _0x2d3bfb = this._updateTableCellHover(
          _0x193b4d,
          _0x5cddaf,
          _0x1903f9,
          _0x419fc4,
          _0xeb4f75,
          _0x3d7f43,
        );
      _0x3463ff = _0x39d53a || _0x5e1308 || _0x2d3bfb || _0x3463ff;
    }),
      (_0x3463ff =
        this._setTransformerControlsHiddenForTableStructuralHover(_0x4cba4a) ||
        _0x3463ff),
      _0x3463ff && this._makeSceneDirty());
  }
  _updateTableCellHover(
    _0x43578f,
    _0x159aed,
    _0x352a21,
    _0x4b2a46,
    _0x2f28d4,
    _0x4535b3,
  ) {
    if (
      _0x4535b3 ||
      !this._isTableActiveForCellHover(_0x43578f, _0x159aed, _0x352a21)
    )
      return _0x4b2a46.setTableCellHover(null);
    let _0x52f7c2 = _0x4b2a46.hitTestCellAtScenePoint(_0x2f28d4);
    return _0x4b2a46.setTableCellHover(
      (_0x52f7c2 == null ? undefined : _0x52f7c2.kind) === "cell"
        ? { row: _0x52f7c2.row, column: _0x52f7c2.column }
        : null,
    );
  }
  _clearTableControlHover() {
    let _0x37ac86 = this._instanceService["getUnit"](
      this._renderContext["unitId"],
      s.UniverInstanceType["UNIVER_BOARD"],
    );
    if (!_0x37ac86) {
      this._setTransformerControlsHiddenForTableStructuralHover(null);
      return;
    }
    let _0x39ff1b = _0x37ac86.getUnitId(),
      _0x32a922 = _0x37ac86.getActivePageId(),
      _0x41c000 = this._boardElementService["getElementData"](
        _0x39ff1b,
        _0x32a922,
      ),
      _0x5cb540 = false;
    (Object.values(_0x41c000).forEach((_0x22ff9e) => {
      if (!q(_0x22ff9e)) return;
      let _0x2561a2 = this._getBoardTableObject(
        (0, n.getBoardElementRenderObjectKey)(_0x39ff1b, _0x22ff9e.elementId),
      );
      if (!_0x2561a2) return;
      let _0x4d0bd1 = _0x2561a2.setTableControlHover(null),
        _0x4616f0 = _0x2561a2.setTableControlState(null),
        _0xfbd961 = _0x2561a2.setTableCellHover(null);
      _0x5cb540 = _0x4d0bd1 || _0x4616f0 || _0xfbd961 || _0x5cb540;
    }),
      (_0x5cb540 =
        this._setTransformerControlsHiddenForTableStructuralHover(null) ||
        _0x5cb540),
      _0x5cb540 && this._makeSceneDirty());
  }
  _isTableActiveForCellHover(_0x4d0e11, _0x2bb593, _0x2c955e) {
    return (
      !!this._tableActivationStage &&
      !!this._activeTableContext &&
      this._activeTableContext["unitId"] === _0x4d0e11 &&
      this._activeTableContext["subUnitId"] === _0x2bb593 &&
      this._activeTableContext["elementId"] === _0x2c955e.elementId &&
      this._activeTableContext["tableId"] === _0x2c955e.element["tableId"]
    );
  }
  _syncActivationStageFromSelection(_0x226249) {
    if (
      _0x226249.unitId === this._renderContext["unitId"] &&
      ((this._tableActivationStage = _0x226249.ranges["length"]
        ? "cell"
        : "table"),
      (this._activeTableContext = {
        unitId: _0x226249.unitId,
        subUnitId: _0x226249.subUnitId,
        elementId: _0x226249.elementId,
        tableId: _0x226249.tableId,
      }),
      _0x226249.ranges["length"])
    ) {
      let _0x43bf54 = this._getBoardTableObject(
        (0, n.getBoardElementRenderObjectKey)(
          _0x226249.unitId,
          _0x226249.elementId,
        ),
      );
      if (_0x43bf54) {
        var _0x3278eb, _0x20cd5d;
        (_0x3278eb = (_0x20cd5d = this._renderContext["scene"])
          .getTransformer) == null ||
          (_0x3278eb = _0x3278eb.call(_0x20cd5d)) == null ||
          _0x3278eb.detachFrom(_0x43bf54);
      }
    }
  }
  _subscribeBoardElementStateChanges(_0x449756) {
    let _0x1429a8 = this._boardElementStateService["state$"];
    if (!_0x1429a8) return;
    let _0x216a99 = _0x1429a8.subscribe((_0x293275) => {
      this._handleBoardElementStateChange(_0x293275);
    });
    this.disposeWithMe((0, s.toDisposable)(() => _0x216a99.unsubscribe()));
  }
  _handleBoardElementStateChange(_0x544c7e) {
    var _0x57cd63;
    let _0x4f229b = this._slideTableSelectionService["getSelection"](),
      _0x5e7c9e = _0x4f229b
        ? {
            unitId: _0x4f229b.unitId,
            subUnitId: _0x4f229b.subUnitId,
            elementId: _0x4f229b.elementId,
            tableId: _0x4f229b.tableId,
          }
        : this._activeTableContext;
    if (!_0x5e7c9e || !this._tableActivationStage) return;
    let _0x527f92 =
      ((_0x57cd63 = _0x544c7e.context) == null
        ? undefined
        : _0x57cd63.unitId) === _0x5e7c9e.unitId &&
      _0x544c7e.context["subUnitId"] === _0x5e7c9e.subUnitId &&
      _0x544c7e.selectedIds["includes"](_0x5e7c9e.elementId);
    if (
      _0x527f92 ||
      this._slideTableSelectionService["isTableInternalInteractionActive"]()
    ) {
      !_0x527f92 &&
        _0x544c7e.selectedIds["length"] > 0 &&
        this._resetTableInteraction();
      return;
    }
    this._resetTableInteraction();
  }
  _isActiveTablePointerDown(_0x47c190) {
    let _0x159bd6 = this._activeTableContext;
    if (!_0x159bd6) return false;
    let _0x1e7f40 = this._getBoardTableObject(
      (0, n.getBoardElementRenderObjectKey)(
        _0x159bd6.unitId,
        _0x159bd6.elementId,
      ),
    );
    if (!_0x1e7f40) return false;
    let _0x47000a = this._getBoardPointVectorFromEvent(_0x47c190);
    return (
      _0x1e7f40.isHit(_0x47000a) ||
      Ft(_0x1e7f40, _0x47000a) ||
      !!_0x1e7f40.hitTestCellAtScenePoint(_0x47000a) ||
      !!_0x1e7f40.hitTestControlAtScenePoint(_0x47000a) ||
      !!_0x1e7f40.hitTestStructuralTriggerAtScenePoint(_0x47000a) ||
      !!_0x1e7f40.hitTestFloatingStructuralTriggerAtScenePoint(_0x47000a)
    );
  }
  _resetTableInteraction() {
    let _0x355466 = this._slideTableSelectionService["getSelection"](),
      _0x16a516 = [
        _0x355466
          ? {
              unitId: _0x355466.unitId,
              subUnitId: _0x355466.subUnitId,
              elementId: _0x355466.elementId,
            }
          : null,
        this._activeTableContext
          ? {
              unitId: this._activeTableContext["unitId"],
              subUnitId: this._activeTableContext["subUnitId"],
              elementId: this._activeTableContext["elementId"],
            }
          : null,
      ].filter((_0x2594af) => !!_0x2594af),
      _0x446b42 = _0x16a516.filter(
        (_0x5ad1a6, _0x266ba7) =>
          _0x16a516.findIndex(
            (_0x2060c8) =>
              _0x2060c8.unitId === _0x5ad1a6.unitId &&
              _0x2060c8.subUnitId === _0x5ad1a6.subUnitId &&
              _0x2060c8.elementId === _0x5ad1a6.elementId,
          ) === _0x266ba7,
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
      _0x446b42.forEach((_0x4238b8) => {
        let _0x488f26 = this._getBoardTableObject(
          (0, n.getBoardElementRenderObjectKey)(
            _0x4238b8.unitId,
            _0x4238b8.elementId,
          ),
        );
        (_0x488f26 == null || _0x488f26.setEditingCell(null),
          _0x488f26 == null || _0x488f26.setPreviewTable(null),
          _0x488f26 == null || _0x488f26.setTableSelection(null),
          _0x488f26 == null || _0x488f26.setTableCellHover(null),
          _0x488f26 == null || _0x488f26.setTableControlState(null),
          _0x488f26 == null || _0x488f26.setTableControlHover(null));
      }),
      this._slideTableSelectionService["clear"](),
      this._keyboardService["setFocused"](false),
      this._makeSceneDirty());
  }
  _buildStructuralControlState(_0x37cd66) {
    if (
      !_0x37cd66 ||
      (_0x37cd66.kind !== "row-header" &&
        _0x37cd66.kind !== "column-header" &&
        _0x37cd66.kind !== "row-insert-dot" &&
        _0x37cd66.kind !== "column-insert-dot")
    )
      return null;
    let _0x5b97ea = Pt(_0x37cd66);
    return {
      visible: true,
      hoveredTrigger: _0x37cd66,
      insertGuide:
        _0x37cd66.kind === "row-insert-dot" && _0x5b97ea !== null
          ? { kind: "row", index: _0x5b97ea }
          : _0x37cd66.kind === "column-insert-dot" && _0x5b97ea !== null
            ? { kind: "column", index: _0x5b97ea }
            : null,
    };
  }
  _handleHeaderDragPointerMove(_0x21967c) {
    let _0x26e6ec = this._headerDragState;
    if (!_0x26e6ec) return;
    if (
      "buttons" in _0x21967c &&
      _0x21967c.buttons !== undefined &&
      (_0x21967c.buttons & 1) != 1
    ) {
      this._finishHeaderDrag();
      return;
    }
    let _0x24f77a = _0x26e6ec.object[
      "hitTestFloatingStructuralTriggerAtScenePoint"
    ](this._getBoardPointVectorFromEvent(_0x21967c));
    if (!_0x24f77a) return;
    let _0x3a1553 = null;
    if (
      _0x26e6ec.kind === "row" &&
      _0x24f77a.kind === "row-header" &&
      _0x24f77a.row !== undefined
    ) {
      let _0x396bb3 = (0, i.expandSlideTableRangeToMergedCells)(
        _0x26e6ec.table,
        {
          startRow: _0x26e6ec.anchor,
          endRow: _0x24f77a.row,
          startColumn: 0,
          endColumn: Math.max(0, _0x26e6ec.table["columns"].length - 1),
        },
      );
      _0x3a1553 = this._slideTableSelectionService["selectRows"]({
        unitId: _0x26e6ec.selection["unitId"],
        subUnitId: _0x26e6ec.selection["subUnitId"],
        elementId: _0x26e6ec.selection["elementId"],
        tableId: _0x26e6ec.selection["tableId"],
        startRow: _0x396bb3.startRow,
        endRow: _0x396bb3.endRow,
        columnCount: _0x26e6ec.table["columns"].length,
      });
    } else {
      if (
        _0x26e6ec.kind === "column" &&
        _0x24f77a.kind === "column-header" &&
        _0x24f77a.column !== undefined
      ) {
        let _0x7b70f7 = (0, i.expandSlideTableRangeToMergedCells)(
          _0x26e6ec.table,
          {
            startRow: 0,
            endRow: Math.max(0, _0x26e6ec.table["rows"].length - 1),
            startColumn: _0x26e6ec.anchor,
            endColumn: _0x24f77a.column,
          },
        );
        _0x3a1553 = this._slideTableSelectionService["selectColumns"]({
          unitId: _0x26e6ec.selection["unitId"],
          subUnitId: _0x26e6ec.selection["subUnitId"],
          elementId: _0x26e6ec.selection["elementId"],
          tableId: _0x26e6ec.selection["tableId"],
          startColumn: _0x7b70f7.startColumn,
          endColumn: _0x7b70f7.endColumn,
          rowCount: _0x26e6ec.table["rows"].length,
        });
      }
    }
    _0x3a1553 &&
      ((_0x26e6ec.selection = _0x3a1553),
      _0x26e6ec.object["setTableSelection"](
        (0, a.resolveSlideTableObjectSelection)(_0x3a1553),
      ),
      this._makeSceneDirty());
  }
  _finishHeaderDrag() {
    this._headerDragState = null;
  }
  _getSelectedHeaderRange(_0x4c0c91, _0x1636d5, _0x1266fe) {
    let _0x3e5ecd = this._slideTableSelectionService["getSelection"]();
    if (
      !_0x3e5ecd ||
      _0x3e5ecd.kind !== _0x1636d5 ||
      _0x3e5ecd.unitId !== this._renderContext["unitId"] ||
      _0x3e5ecd.elementId !== _0x4c0c91.elementId ||
      _0x3e5ecd.tableId !== _0x4c0c91.element["tableId"]
    )
      return null;
    for (let _0x42ab55 of _0x3e5ecd.ranges) {
      let _0x4cd69d =
          _0x1636d5 === "row"
            ? Math.min(_0x42ab55.startRow, _0x42ab55.endRow)
            : Math.min(_0x42ab55.startColumn, _0x42ab55.endColumn),
        _0x9c7520 =
          _0x1636d5 === "row"
            ? Math.max(_0x42ab55.startRow, _0x42ab55.endRow)
            : Math.max(_0x42ab55.startColumn, _0x42ab55.endColumn);
      if (_0x1266fe >= _0x4cd69d && _0x1266fe <= _0x9c7520)
        return { start: _0x4cd69d, end: _0x9c7520 };
    }
    return null;
  }
  _startPendingHeaderMove(_0x29ca84) {
    (this._finishRowColumnMove({ commit: false }),
      (this._pendingHeaderMoveState = _0x29ca84),
      _0x29ca84.object["setTableControlState"]({
        visible: true,
        selectedStructuralRange: {
          kind: _0x29ca84.kind,
          start: _0x29ca84.start,
          end: _0x29ca84.end,
        },
      }),
      this._makeSceneDirty());
  }
  _handleRowColumnMovePointerMove(_0x1751ea) {
    let _0x4365ef = this._rowColumnMoveState ?? this._pendingHeaderMoveState;
    if (!_0x4365ef) return;
    if (
      "buttons" in _0x1751ea &&
      _0x1751ea.buttons !== undefined &&
      (_0x1751ea.buttons & 1) != 1
    ) {
      this._finishRowColumnMove({ commit: false });
      return;
    }
    let _0x53ac9e = this._getBoardPointVectorFromEvent(
      _0x1751ea,
      _0x4365ef.startPoint,
    );
    if (!this._rowColumnMoveState) {
      let _0x374c9a =
          _0x53ac9e.x - this._pendingHeaderMoveState["startPoint"].x,
        _0x523798 = _0x53ac9e.y - this._pendingHeaderMoveState["startPoint"].y;
      if (Math.hypot(_0x374c9a, _0x523798) < 8) return;
      ((this._rowColumnMoveState = { ...this._pendingHeaderMoveState }),
        (this._pendingHeaderMoveState = null));
    }
    let _0x868823 = this._rowColumnMoveState;
    if (!_0x868823) return;
    let _0x34f601 = this._resolveRowColumnMoveTarget(
        _0x868823.table,
        _0x868823.object,
        _0x868823.kind,
        _0x53ac9e,
      ),
      _0x1ffe59 =
        !!_0x34f601 &&
        (_0x34f601.kind === "row"
          ? (0, i.canMoveSlideTableRows)(
              _0x868823.table,
              { startRow: _0x868823.start, endRow: _0x868823.end },
              { row: _0x34f601.targetRow, position: _0x34f601.position },
            )
          : (0, i.canMoveSlideTableColumns)(
              _0x868823.table,
              { startColumn: _0x868823.start, endColumn: _0x868823.end },
              { column: _0x34f601.targetColumn, position: _0x34f601.position },
            ));
    ((this._rowColumnMoveTarget = _0x1ffe59 ? _0x34f601 : null),
      _0x868823.object["setTableControlState"](
        _0x1ffe59 && _0x34f601
          ? {
              visible: true,
              selectedStructuralRange: {
                kind: _0x868823.kind,
                start: _0x868823.start,
                end: _0x868823.end,
              },
              reorderGuide: {
                kind: _0x34f601.kind,
                index: _0x34f601.guideIndex,
              },
            }
          : {
              visible: true,
              selectedStructuralRange: {
                kind: _0x868823.kind,
                start: _0x868823.start,
                end: _0x868823.end,
              },
            },
      ),
      this._makeSceneDirty());
  }
  _finishRowColumnMove(_0x288a1e) {
    let _0x413109 = this._rowColumnMoveState,
      _0x2b2d8b = this._rowColumnMoveTarget,
      _0x4aff10 = this._pendingHeaderMoveState;
    _0x288a1e.commit &&
      _0x413109 &&
      _0x2b2d8b &&
      this._commandService &&
      (_0x413109.kind === "row" && _0x2b2d8b.kind === "row"
        ? this._commandService["executeCommand"](
            t.MoveBoardTableRowsCommand["id"],
            {
              unitId: _0x413109.unitId,
              tableId: _0x413109.tableId,
              startRow: _0x413109.start,
              endRow: _0x413109.end,
              targetRow: _0x2b2d8b.targetRow,
              position: _0x2b2d8b.position,
            },
          )
        : _0x413109.kind === "column" &&
          _0x2b2d8b.kind === "column" &&
          this._commandService["executeCommand"](
            t.MoveBoardTableColumnsCommand["id"],
            {
              unitId: _0x413109.unitId,
              tableId: _0x413109.tableId,
              startColumn: _0x413109.start,
              endColumn: _0x413109.end,
              targetColumn: _0x2b2d8b.targetColumn,
              position: _0x2b2d8b.position,
            },
          ));
    let _0x4abdf7 =
      (_0x413109 == null ? undefined : _0x413109.object) ??
      (_0x4aff10 == null ? undefined : _0x4aff10.object);
    ((this._pendingHeaderMoveState = null),
      (this._rowColumnMoveState = null),
      (this._rowColumnMoveTarget = null),
      _0x4abdf7 &&
        (_0x4abdf7.setTableControlState(null), this._makeSceneDirty()));
  }
  _resolveRowColumnMoveTarget(_0x1188c4, _0x36f631, _0x19261d, _0x2a3532) {
    let _0x3704ef = this._resolveObjectPoint(
        _0x36f631,
        _0x2a3532.x,
        _0x2a3532.y,
      ),
      _0xe9b834 =
        _0x19261d === "row"
          ? At(
              _0x1188c4.rows["map"]((_0x5af818) => _0x5af818.height ?? 24),
              _0x36f631.height,
            )
          : At(
              _0x1188c4.columns["map"]((_0x133dcc) => _0x133dcc.width),
              _0x36f631.width,
            );
    if (_0xe9b834.length === 0) return null;
    let _0x1400ac = jt(
        _0xe9b834,
        _0x19261d === "row" ? _0x3704ef.y : _0x3704ef.x,
      ),
      _0x1c557e =
        _0x1400ac <= 0
          ? 0
          : _0x1400ac >= _0xe9b834.length
            ? _0xe9b834.length - 1
            : _0x1400ac,
      _0x2048b5 =
        _0x1400ac <= 0
          ? "before"
          : _0x1400ac >= _0xe9b834.length
            ? "after"
            : "before";
    return _0x19261d === "row"
      ? {
          kind: _0x19261d,
          targetRow: _0x1c557e,
          position: _0x2048b5,
          guideIndex: _0x1400ac,
        }
      : {
          kind: _0x19261d,
          targetColumn: _0x1c557e,
          position: _0x2048b5,
          guideIndex: _0x1400ac,
        };
  }
  _startTableHandleMove(
    _0x4627a6,
    _0x53aec4,
    _0x38e9da,
    _0x27d8c8,
    _0x2fc441,
    _0x3d8af1,
  ) {
    let _0x541fed = _0x27d8c8.transform ?? _0x27d8c8.element["transform"];
    this._tableHandleMoveState = {
      unitId: _0x4627a6,
      subUnitId: _0x53aec4,
      elementId: _0x27d8c8.elementId,
      object: _0x2fc441,
      element: _0x27d8c8.element,
      elementData: _0x38e9da,
      startPointer: {
        ...this._getBoardPointFromEvent(_0x3d8af1, {
          x: _0x2fc441.left,
          y: _0x2fc441.top,
        }),
      },
      startTransform: {
        ...It(_0x541fed),
        left: _0x2fc441.left,
        top: _0x2fc441.top,
        width: _0x2fc441.width,
        height: _0x2fc441.height,
      },
      moved: false,
    };
  }
  _handleTableHandleMovePointerMove(_0x2db3dc) {
    let _0x193001 = this._tableHandleMoveState;
    if (!_0x193001) return;
    if (
      "buttons" in _0x2db3dc &&
      _0x2db3dc.buttons !== undefined &&
      (_0x2db3dc.buttons & 1) != 1
    ) {
      this._finishTableHandleMove(_0x2db3dc);
      return;
    }
    let _0x4a2b0e = this._buildTableHandleMoveTransform(_0x193001, _0x2db3dc);
    if (!_0x4a2b0e) return;
    let _0x3bc8e4 = _0x4a2b0e.left - _0x193001.startTransform["left"],
      _0x5e46f4 = _0x4a2b0e.top - _0x193001.startTransform["top"];
    (!_0x193001.moved && Math.hypot(_0x3bc8e4, _0x5e46f4) < 8) ||
      (_0x193001.moved ||
        ((_0x193001.moved = true), this._beginTableHandleTransform()),
      this._applyTableHandleMovePreview(_0x193001, _0x4a2b0e));
  }
  async _finishTableHandleMove(_0x40c539) {
    let _0x5bae58 = this._tableHandleMoveState;
    if (!_0x5bae58) return;
    this._tableHandleMoveState = null;
    let _0x19b2c3 = _0x5bae58.moved
      ? this._buildTableHandleMoveTransform(_0x5bae58, _0x40c539)
      : null;
    if (!_0x19b2c3 || !_0x5bae58.moved) {
      (this._restoreTableHandleMovePreview(_0x5bae58),
        this._finishTableHandleTransform());
      return;
    }
    this._applyTableHandleMovePreview(_0x5bae58, _0x19b2c3);
    let _0x480ee7 = {
        ..._0x19b2c3,
        left: _0x5bae58.object["left"],
        top: _0x5bae58.object["top"],
        width: _0x5bae58.object["width"],
        height: _0x5bae58.object["height"],
      },
      _0x4c7ad2 = this._resolveTableHandleMoveLocalTransform(
        _0x5bae58,
        _0x480ee7,
      );
    try {
      (await this._commandService["executeCommand"](
        e.UpdateBoardElementsCommand["id"],
        {
          unitId: _0x5bae58.unitId,
          subUnitId: _0x5bae58.subUnitId,
          updates: [
            {
              elementId: _0x5bae58.elementId,
              element: {
                ..._0x5bae58.element,
                transform: { ..._0x5bae58.element["transform"], ..._0x4c7ad2 },
              },
              transform: _0x4c7ad2,
            },
          ],
        },
      ),
        this._makeSceneDirty());
    } finally {
      this._finishTableHandleTransform();
    }
  }
  _cancelTableHandleMove() {
    let _0x97cd92 = this._tableHandleMoveState;
    _0x97cd92 &&
      ((this._tableHandleMoveState = null),
      this._restoreTableHandleMovePreview(_0x97cd92),
      this._finishTableHandleTransform());
  }
  _beginTableHandleTransform() {
    var _0x5d447a, _0x1993b6, _0x3efe07, _0x2bf603;
    if (
      (this._boardElementStateService["setTransforming"](true),
      this._areTransformerControlsHiddenForTableMove)
    )
      return;
    let _0x19fcde =
      (_0x5d447a = (_0x1993b6 = this._renderContext["scene"]).getTransformer) ==
      null
        ? undefined
        : _0x5d447a.call(_0x1993b6);
    (_0x19fcde == null ||
      (_0x3efe07 = _0x19fcde._hideControl) == null ||
      _0x3efe07.call(_0x19fcde),
      _0x19fcde == null ||
        (_0x2bf603 = _0x19fcde.clearControls) == null ||
        _0x2bf603.call(_0x19fcde),
      (this._areTransformerControlsHiddenForTableMove = true));
  }
  _finishTableHandleTransform() {
    var _0x3386a3, _0xeaa22d, _0xab28f8;
    (this._boardElementStateService["setTransforming"](false),
      this._areTransformerControlsHiddenForTableMove &&
        ((this._areTransformerControlsHiddenForTableMove = false),
        (_0x3386a3 = (_0xeaa22d = this._renderContext["scene"])
          .getTransformer) == null ||
          (_0x3386a3 = _0x3386a3.call(_0xeaa22d)) == null ||
          (_0xab28f8 = _0x3386a3.refreshControls) == null ||
          _0xab28f8.call(_0x3386a3)));
  }
  _setTransformerControlsHiddenForTableStructuralHover(_0x12d545) {
    var _0x453880, _0x29532a;
    let _0x57ce1b = this._tableStructuralHoverTransformerObject;
    if (
      _0x57ce1b === _0x12d545 &&
      this._areTransformerControlsHiddenForTableStructuralHover === !!_0x12d545
    )
      return false;
    let _0x3d7494 =
      (_0x453880 = (_0x29532a = this._renderContext["scene"]).getTransformer) ==
      null
        ? undefined
        : _0x453880.call(_0x29532a);
    if (_0x57ce1b && _0x57ce1b !== _0x12d545) {
      var _0x3ec247, _0x13de56;
      (_0x3d7494 == null ||
        (_0x3ec247 = _0x3d7494.attachTo) == null ||
        _0x3ec247.call(_0x3d7494, _0x57ce1b),
        _0x3d7494 == null ||
          (_0x13de56 = _0x3d7494.setSelectedControl) == null ||
          _0x13de56.call(_0x3d7494, _0x57ce1b));
    }
    if (
      ((this._tableStructuralHoverTransformerObject = _0x12d545), _0x12d545)
    ) {
      var _0x33a722, _0x37d76a, _0x4f5885;
      ((this._areTransformerControlsHiddenForTableStructuralHover = true),
        _0x3d7494 == null ||
          (_0x33a722 = _0x3d7494.detachFrom) == null ||
          _0x33a722.call(_0x3d7494, _0x12d545),
        _0x3d7494 == null ||
          (_0x37d76a = _0x3d7494._hideControl) == null ||
          _0x37d76a.call(_0x3d7494),
        _0x3d7494 == null ||
          (_0x4f5885 = _0x3d7494.clearControls) == null ||
          _0x4f5885.call(_0x3d7494));
    } else {
      var _0x4ea36e;
      ((this._areTransformerControlsHiddenForTableStructuralHover = false),
        _0x3d7494 == null ||
          (_0x4ea36e = _0x3d7494.refreshControls) == null ||
          _0x4ea36e.call(_0x3d7494));
    }
    return true;
  }
  _buildTableHandleMoveTransform(_0x1c9849, _0x4ead2f) {
    let { x: _0x3408dd, y: _0x7ca108 } = this._getBoardPointFromEvent(
        _0x4ead2f,
        _0x1c9849.startPointer,
      ),
      _0x30fd8e = _0x3408dd - _0x1c9849.startPointer["x"],
      _0x350f09 = _0x7ca108 - _0x1c9849.startPointer["y"];
    return !Number.isFinite(_0x30fd8e) || !Number.isFinite(_0x350f09)
      ? null
      : {
          ..._0x1c9849.startTransform,
          left: _0x1c9849.startTransform["left"] + _0x30fd8e,
          top: _0x1c9849.startTransform["top"] + _0x350f09,
        };
  }
  _applyTableHandleMovePreview(_0x26c313, _0x2ea659) {
    var _0x28151e, _0x519cdd, _0x4a9d61;
    (_0x26c313.object["transformByState"]({
      left: _0x2ea659.left,
      top: _0x2ea659.top,
      width: _0x2ea659.width,
      height: _0x2ea659.height,
      angle: _0x2ea659.rotation ?? 0,
      flipX: _0x2ea659.flipX,
      flipY: _0x2ea659.flipY,
    }),
      (_0x28151e = (_0x519cdd = this._renderContext["scene"]).getTransformer) ==
        null ||
        (_0x28151e = _0x28151e.call(_0x519cdd)) == null ||
        (_0x4a9d61 = _0x28151e.changeNotification) == null ||
        _0x4a9d61.call(_0x28151e),
      this._makeSceneDirty());
  }
  _restoreTableHandleMovePreview(_0x3ca643) {
    this._applyTableHandleMovePreview(_0x3ca643, _0x3ca643.startTransform);
  }
  _resolveTableHandleMoveLocalTransform(_0x5823f0, _0x4165a5) {
    let _0x45072e = _0x5823f0.element["parentId"],
      _0x4d7fc8 = It(
        (0, e.resolveBoardElementLocalTransformForParent)(
          _0x5823f0.elementData,
          { parentId: _0x45072e, worldTransform: _0x4165a5 },
        ),
      );
    return (
      _0x5823f0.startTransform["rotation"] === undefined &&
        delete _0x4d7fc8.rotation,
      _0x5823f0.startTransform["flipX"] === undefined && delete _0x4d7fc8.flipX,
      _0x5823f0.startTransform["flipY"] === undefined && delete _0x4d7fc8.flipY,
      _0x4d7fc8
    );
  }
  _syncSelection(_0x46db44) {
    let { unitId: _0x3f4a12 } = this._renderContext,
      _0x42c10f = this._instanceService["getUnit"](
        _0x3f4a12,
        s.UniverInstanceType["UNIVER_BOARD"],
      );
    if (!_0x42c10f) return;
    let _0x1fea20 = _0x42c10f.getActivePageId(),
      _0x1112ef = this._boardElementService["getElementData"](
        _0x3f4a12,
        _0x1fea20,
      ),
      _0x57862a = false;
    (Object.values(_0x1112ef).forEach((_0x24dc6f) => {
      if (!q(_0x24dc6f)) return;
      let _0xa8de32 = this._getBoardTableObject(
        (0, n.getBoardElementRenderObjectKey)(_0x3f4a12, _0x24dc6f.elementId),
      );
      if (!_0xa8de32) return;
      let _0x588162 = (0, a.resolveSlideTableObjectSelection)(_0x46db44);
      if (!(
        _0x46db44 &&
        _0x588162 &&
        _0x46db44.unitId === _0x3f4a12 &&
        _0x46db44.subUnitId === _0x1fea20 &&
        _0x46db44.elementId === _0x24dc6f.elementId &&
        _0x46db44.tableId === _0x24dc6f.element["tableId"]
      )) {
        (_0xa8de32.setTableSelection(null), (_0x57862a = true));
        return;
      }
      (_0xa8de32.setTableSelection(_0x588162), (_0x57862a = true));
    }),
      _0x57862a && this._makeSceneDirty());
  }
  _getBoardTableObject(_0x2cbed0) {
    var _0xc7b226, _0x16fc7a;
    let _0x1b502d = this._renderContext["scene"],
      _0x5b678d =
        ((_0xc7b226 = _0x1b502d.getObjectIncludeInGroup) == null
          ? undefined
          : _0xc7b226.call(_0x1b502d, _0x2cbed0)) ??
        ((_0x16fc7a = _0x1b502d.getObject) == null
          ? undefined
          : _0x16fc7a.call(_0x1b502d, _0x2cbed0));
    return _0x5b678d instanceof gt ? _0x5b678d : null;
  }
  _makeSceneDirty() {
    var _0x4d7626, _0x337313;
    (_0x4d7626 = (_0x337313 = this._renderContext["scene"]).makeDirty) ==
      null || _0x4d7626.call(_0x337313, true);
  }
  _subscribeBoardElementChanges(_0xab376) {
    let _0x481d12 = this._boardElementService,
      _0x302d68 = (_0x2096ed) => {
        if (!_0x2096ed) return;
        let _0x1ecc29 = _0x2096ed.subscribe((_0x9c700a) => {
          _0x9c700a.some(
            (_0x2f7ffd) => _0x2f7ffd.unitId === this._renderContext["unitId"],
          ) && this._scheduleAttachObjectPointerEvents(_0xab376);
        });
        this.disposeWithMe((0, s.toDisposable)(() => _0x1ecc29.unsubscribe()));
      };
    (_0x302d68(_0x481d12.elementAdd$),
      _0x302d68(_0x481d12.elementUpdate$),
      _0x302d68(_0x481d12.elementRemove$));
  }
  _scheduleAttachObjectPointerEvents(_0x1d400b) {
    this._attachScheduled ||
      ((this._attachScheduled = true),
      Promise.resolve().then(() => {
        ((this._attachScheduled = false),
          this._attachObjectPointerEvents(_0x1d400b));
      }));
  }
  _attachObjectPointerEvents(_0x1d524e) {
    var _0x139df1;
    let { unitId: _0x3d01aa } = this._renderContext,
      _0x151368 = _0x1d524e.getActivePageId(),
      _0x5728bf = this._boardElementService["getElementData"](
        _0x3d01aa,
        _0x151368,
      ),
      _0x35bf7a = new s["DisposableCollection"]();
    ((_0x139df1 = this._objectPointerDisposables) == null ||
      _0x139df1.dispose(),
      (this._objectPointerDisposables = _0x35bf7a),
      Object.values(_0x5728bf).forEach((_0x1d3ac3) => {
        if (!q(_0x1d3ac3)) return;
        let _0x392f1e = this._getBoardTableObject(
          (0, n.getBoardElementRenderObjectKey)(_0x3d01aa, _0x1d3ac3.elementId),
        );
        _0x392f1e &&
          (_0x35bf7a.add(
            _0x392f1e.onPointerDown$["subscribeEvent"]({
              priority: -2,
              next: ([_0xd134ad, _0x3df71e]) => {
                this._boardUIStateService["getState"]().interactionMode !==
                  "viewing" &&
                  this._handleTablePointerDown(
                    _0x1d524e,
                    _0x1d3ac3,
                    _0x392f1e,
                    _0xd134ad,
                    _0x3df71e,
                  );
              },
            }),
          ),
          _0x35bf7a.add(
            _0x392f1e.onDblclick$["subscribeEvent"]({
              priority: -2,
              next: ([_0xa5bb0b, _0x4a8b1b]) => {
                this._boardUIStateService["getState"]().interactionMode !==
                  "viewing" &&
                  this._handleTableDoubleClick(
                    _0x1d524e,
                    _0x1d3ac3,
                    _0x392f1e,
                    _0xa5bb0b,
                    _0x4a8b1b,
                  );
              },
            }),
          ));
      }));
  }
  _handleTablePointerDown(
    _0x349e21,
    _0x481aa2,
    _0x4a9c31,
    _0xbefbad,
    _0x24961f,
  ) {
    var _0x1985f7, _0x379a98;
    let _0x1fd4e6 = _0xbefbad.button ?? 0;
    if (
      (_0x1fd4e6 !== 0 && _0x1fd4e6 !== 2) ||
      (_0x1fd4e6 === 0 &&
        this._handleCellEditorPointerDown(
          _0x349e21,
          _0x481aa2,
          _0x4a9c31,
          _0xbefbad,
          _0x24961f,
        )) ||
      (_0x1fd4e6 === 0 && this._isTableTextEditing())
    )
      return;
    let _0x589fce = this._getBoardPointVectorFromEvent(_0xbefbad),
      _0xee90c5 = _0x4a9c31.hitTestStructuralTriggerAtScenePoint(_0x589fce);
    if (_0x1fd4e6 === 0 && (0, a.isSlideTableInsertDotTrigger)(_0xee90c5)) {
      if (
        this._handleStructuralInsertTrigger(
          _0x349e21.getUnitId(),
          _0x481aa2,
          _0x4a9c31,
          _0xee90c5,
          _0x589fce,
        )
      ) {
        var _0x2e3738, _0x53bc64;
        ((_0x2e3738 = _0xbefbad.preventDefault) == null ||
          _0x2e3738.call(_0xbefbad),
          (_0x53bc64 = _0xbefbad.stopPropagation) == null ||
            _0x53bc64.call(_0xbefbad),
          J(_0x24961f),
          this._makeSceneDirty());
      }
      return;
    }
    if (
      _0x1fd4e6 === 0 &&
      this._startResizeIfHit(_0x349e21, _0x481aa2, _0x4a9c31, _0xbefbad)
    ) {
      J(_0x24961f);
      return;
    }
    if (
      _0x1fd4e6 === 0 &&
      !this._isTableReadyForCellInteraction(_0x349e21, _0x481aa2)
    ) {
      this._activateTableStage(
        _0x349e21,
        _0x481aa2,
        _0x4a9c31,
        _0xbefbad,
        _0x24961f,
      );
      return;
    }
    if (_0x1fd4e6 === 0 && this._tableActivationStage === "table") {
      this._startPendingStage1Body(
        _0x349e21,
        _0x481aa2,
        _0x4a9c31,
        _0xbefbad,
        _0x24961f,
      );
      return;
    }
    if (
      _0x1fd4e6 === 2 &&
      !this._isTableReadyForCellInteraction(_0x349e21, _0x481aa2)
    )
      return;
    let _0x4ac731 = this._selectCellFromTableEvent(
      _0x349e21,
      _0x481aa2,
      _0x4a9c31,
      _0xbefbad,
    );
    if (_0x4ac731) {
      if (_0x1fd4e6 === 0) {
        var _0x3d2480, _0x574c39;
        (_0x3d2480 = (_0x574c39 = this._contextMenuService).hideContextMenu) ==
          null || _0x3d2480.call(_0x574c39);
      }
      if (
        ((_0x1985f7 = _0xbefbad.preventDefault) == null ||
          _0x1985f7.call(_0xbefbad),
        (_0x379a98 = _0xbefbad.stopPropagation) == null ||
          _0x379a98.call(_0xbefbad),
        J(_0x24961f),
        this._beginTableInternalInteraction(_0x4a9c31),
        this._enterCellStage(_0x349e21, _0x481aa2),
        _0x1fd4e6 === 0)
      ) {
        let _0xaf9c2c =
          _0x4ac731.focus ??
          _0x4ac731.anchor ??
          (0, a.resolveFirstSlideTableSelectionCell)(_0x4ac731);
        _0xaf9c2c &&
          (this._rangeDragState = {
            selection: _0x4ac731,
            object: _0x4a9c31,
            anchor: _0xaf9c2c,
            startPoint: this._getBoardPointFromEvent(_0xbefbad),
            activated: false,
          });
      }
      _0x1fd4e6 === 2 && this._openContextMenu(_0xbefbad);
    }
  }
  _handleCellEditorPointerDown(
    _0x3a5629,
    _0x3ab431,
    _0x3f8b1e,
    _0x279497,
    _0x1be3e4,
  ) {
    var _0x46b3e7, _0x3acd92;
    let _0x30cc27 = this._getActiveEditingSession();
    if (
      !_0x30cc27 ||
      _0x30cc27.unitId !== _0x3a5629.getUnitId() ||
      _0x30cc27.subUnitId !== _0x3a5629.getActivePageId() ||
      _0x30cc27.elementId !== _0x3ab431.elementId ||
      _0x30cc27.tableId !== _0x3ab431.element["tableId"]
    )
      return false;
    let _0x5d8c38 = this._buildCellSelectionFromTableEvent(
        _0x3a5629,
        _0x3ab431,
        _0x3f8b1e,
        _0x279497,
      ),
      _0x4b5145 =
        (_0x5d8c38 == null ? undefined : _0x5d8c38.focus) ??
        (_0x5d8c38 == null ? undefined : _0x5d8c38.anchor) ??
        (_0x5d8c38
          ? (0, a.resolveFirstSlideTableSelectionCell)(_0x5d8c38)
          : null);
    if (!_0x5d8c38 || !_0x4b5145) return false;
    if (
      ((_0x46b3e7 = _0x279497.preventDefault) == null ||
        _0x46b3e7.call(_0x279497),
      (_0x3acd92 = _0x279497.stopPropagation) == null ||
        _0x3acd92.call(_0x279497),
      J(_0x1be3e4),
      _0x4b5145.row === _0x30cc27.row && _0x4b5145.column === _0x30cc27.column)
    )
      return true;
    this._completeActiveEditor(_0x30cc27.documentData);
    let _0x3459e7 =
      this._slideTableResourceService["getTable"](
        _0x5d8c38.unitId,
        _0x5d8c38.tableId,
      ) ?? _0x3f8b1e.getTable();
    return (
      _0x3459e7 &&
        this._openCellEditor({
          selection: _0x5d8c38,
          object: _0x3f8b1e,
          table: _0x3459e7,
        }),
      true
    );
  }
  _isTableReadyForCellInteraction(_0x54fe2a, _0x41de97) {
    return this._isActiveTableContext(_0x54fe2a, _0x41de97)
      ? true
      : this._isSelectedTableElement(_0x54fe2a, _0x41de97);
  }
  _isActiveTableContext(_0x4f3040, _0x91d6ef) {
    return (
      !!this._tableActivationStage &&
      !!this._activeTableContext &&
      this._activeTableContext["unitId"] === _0x4f3040.getUnitId() &&
      this._activeTableContext["subUnitId"] === _0x4f3040.getActivePageId() &&
      this._activeTableContext["elementId"] === _0x91d6ef.elementId &&
      this._activeTableContext["tableId"] === _0x91d6ef.element["tableId"]
    );
  }
  _isSelectedTableElement(_0x106d2e, _0x2113dd) {
    var _0xcc13f3;
    let _0xf9c2a9 = this._boardElementStateService["getSnapshot"]();
    return (
      (_0xf9c2a9 == null || (_0xcc13f3 = _0xf9c2a9.context) == null
        ? undefined
        : _0xcc13f3.unitId) === _0x106d2e.getUnitId() &&
      _0xf9c2a9.context["subUnitId"] === _0x106d2e.getActivePageId() &&
      _0xf9c2a9.selectedIds["includes"](_0x2113dd.elementId)
    );
  }
  _activateTableStage(_0x54c339, _0x28a337, _0x20face, _0x1ef351, _0x3ec7a5) {
    var _0x1490e0, _0x3377fe;
    let _0x2e6af7 = _0x54c339.getUnitId(),
      _0x236ce0 = _0x54c339.getActivePageId();
    ((this._tableActivationStage = "table"),
      (this._activeTableContext = {
        unitId: _0x2e6af7,
        subUnitId: _0x236ce0,
        elementId: _0x28a337.elementId,
        tableId: _0x28a337.element["tableId"],
      }),
      this._slideTableSelectionService["clear"](),
      this._boardElementStateService["selectElements"](
        { unitId: _0x2e6af7, subUnitId: _0x236ce0 },
        [_0x28a337.elementId],
        _0x28a337.elementId,
      ),
      _0x20face.setTableSelection({ ranges: [] }),
      (_0x1490e0 = _0x1ef351.preventDefault) == null ||
        _0x1490e0.call(_0x1ef351),
      (_0x3377fe = _0x1ef351.stopPropagation) == null ||
        _0x3377fe.call(_0x1ef351),
      J(_0x3ec7a5),
      this._makeSceneDirty());
  }
  _startPendingStage1Body(
    _0x113ad6,
    _0x17e840,
    _0x1e302c,
    _0xea83d3,
    _0x50cd93,
  ) {
    var _0x2de702, _0x262b22;
    let _0x57190f = _0x113ad6.getUnitId(),
      _0x1c16c3 = _0x113ad6.getActivePageId(),
      _0x30a5e1 = this._boardElementService["getElementData"](
        _0x57190f,
        _0x1c16c3,
      ),
      _0x1baf06 = this._buildCellSelectionFromTableEvent(
        _0x113ad6,
        _0x17e840,
        _0x1e302c,
        _0xea83d3,
      );
    _0x1baf06 &&
      ((this._pendingStage1BodyState = {
        unitId: _0x57190f,
        subUnitId: _0x1c16c3,
        elementData: _0x30a5e1,
        elementDataItem: _0x17e840,
        object: _0x1e302c,
        startEvent: _0xea83d3,
        startPoint: {
          ...this._getBoardPointFromEvent(_0xea83d3, {
            x: _0x1e302c.left,
            y: _0x1e302c.top,
          }),
        },
        pendingSelection: _0x1baf06,
      }),
      (_0x2de702 = _0xea83d3.preventDefault) == null ||
        _0x2de702.call(_0xea83d3),
      (_0x262b22 = _0xea83d3.stopPropagation) == null ||
        _0x262b22.call(_0xea83d3),
      J(_0x50cd93));
  }
  _handlePendingStage1BodyPointerMove(_0x422ca5) {
    let _0x1bad73 = this._pendingStage1BodyState;
    if (!_0x1bad73) return;
    if (
      "buttons" in _0x422ca5 &&
      _0x422ca5.buttons !== undefined &&
      (_0x422ca5.buttons & 1) != 1
    ) {
      this._finishPendingStage1Body({ focusCell: true });
      return;
    }
    let { x: _0x830e1e, y: _0x10f295 } = this._getBoardPointFromEvent(
        _0x422ca5,
        _0x1bad73.startPoint,
      ),
      _0x2fc2f3 = _0x830e1e - _0x1bad73.startPoint["x"],
      _0x2ab047 = _0x10f295 - _0x1bad73.startPoint["y"];
    Math.hypot(_0x2fc2f3, _0x2ab047) < 8 ||
      ((this._pendingStage1BodyState = null),
      this._startTableHandleMove(
        _0x1bad73.unitId,
        _0x1bad73.subUnitId,
        _0x1bad73.elementData,
        _0x1bad73.elementDataItem,
        _0x1bad73.object,
        _0x1bad73.startEvent,
      ),
      this._handleTableHandleMovePointerMove(_0x422ca5));
  }
  _finishPendingStage1Body(_0x337609) {
    let _0x2a04c0 = this._pendingStage1BodyState;
    if (
      !_0x2a04c0 ||
      ((this._pendingStage1BodyState = null), !_0x337609.focusCell)
    )
      return;
    let _0x1d01b7 =
      _0x2a04c0.pendingSelection["focus"] ??
      _0x2a04c0.pendingSelection["anchor"] ??
      (0, a.resolveFirstSlideTableSelectionCell)(_0x2a04c0.pendingSelection);
    if (!_0x1d01b7) return;
    (this._slideTableSelectionService["markTableInternalInteraction"](),
      this._beginTableInternalInteraction(_0x2a04c0.object));
    let _0x17017b = this._slideTableSelectionService["selectCell"]({
      unitId: _0x2a04c0.pendingSelection["unitId"],
      subUnitId: _0x2a04c0.pendingSelection["subUnitId"],
      elementId: _0x2a04c0.pendingSelection["elementId"],
      tableId: _0x2a04c0.pendingSelection["tableId"],
      row: _0x1d01b7.row,
      column: _0x1d01b7.column,
    });
    (this._enterCellStageFromSelection(_0x17017b),
      _0x2a04c0.object["setTableSelection"](
        (0, a.resolveSlideTableObjectSelection)(_0x17017b),
      ),
      this._makeSceneDirty());
  }
  _enterCellStage(_0x228824, _0x5ce1c7) {
    ((this._tableActivationStage = "cell"),
      (this._activeTableContext = {
        unitId: _0x228824.getUnitId(),
        subUnitId: _0x228824.getActivePageId(),
        elementId: _0x5ce1c7.elementId,
        tableId: _0x5ce1c7.element["tableId"],
      }));
  }
  _enterCellStageFromSelection(_0x334f8a) {
    ((this._tableActivationStage = "cell"),
      (this._activeTableContext = {
        unitId: _0x334f8a.unitId,
        subUnitId: _0x334f8a.subUnitId,
        elementId: _0x334f8a.elementId,
        tableId: _0x334f8a.tableId,
      }));
  }
  _startResizeIfHit(_0x4377c0, _0x414afe, _0x103776, _0x310175) {
    var _0x1230b9, _0xca1d06, _0x3857b0, _0x4327de;
    if (this._isTableTextEditing()) return false;
    let _0x30554b = _0x103776.getTable();
    if (!_0x30554b) return false;
    let _0x4e821d = this._getBoardPointFromEvent(_0x310175),
      _0x527108 = this._resolveObjectPoint(_0x103776, _0x4e821d.x, _0x4e821d.y),
      _0x8ea532 = this._resolveResizeTrigger(
        _0x30554b,
        _0x103776,
        _0x527108.x,
        _0x527108.y,
      );
    if (!_0x8ea532) return false;
    let _0x3ba891 = Tt(_0x30554b, _0x103776),
      _0x2a4d4c = _0x4377c0.getUnitId();
    return (
      (this._resizeState = {
        unitId: _0x2a4d4c,
        subUnitId: _0x4377c0.getActivePageId(),
        elementId: _0x414afe.elementId,
        tableId: _0x414afe.element["tableId"],
        object: _0x103776,
        table: _0x30554b,
        trigger: _0x8ea532,
        startPoint: _0x527108,
        startSize:
          _0x8ea532.kind === "resize-row"
            ? (((_0x1230b9 = _0x30554b.rows[_0x8ea532.row ?? 0]) == null
                ? undefined
                : _0x1230b9.height) ?? 24)
            : (((_0xca1d06 = _0x30554b.columns[_0x8ea532.column ?? 0]) == null
                ? undefined
                : _0xca1d06.width) ?? 96),
        scaleX: _0x3ba891.scaleX,
        scaleY: _0x3ba891.scaleY,
      }),
      (_0x3857b0 = _0x310175.preventDefault) == null ||
        _0x3857b0.call(_0x310175),
      (_0x4327de = _0x310175.stopPropagation) == null ||
        _0x4327de.call(_0x310175),
      this._setResizeCursor(_0x8ea532.kind),
      true
    );
  }
  _handleResizeCursorHover(_0x1a3989) {
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
    let _0x2a8de4 = this._instanceService["getUnit"](
      this._renderContext["unitId"],
      s.UniverInstanceType["UNIVER_BOARD"],
    );
    if (!_0x2a8de4) {
      this._resetResizeCursor();
      return;
    }
    let _0x527ae9 = _0x2a8de4.getUnitId(),
      _0x24884a = _0x2a8de4.getActivePageId(),
      _0x5b44bf = this._boardElementService["getElementData"](
        _0x527ae9,
        _0x24884a,
      ),
      _0x48a560 = this._getBoardPointFromEvent(_0x1a3989);
    for (let _0x59c6fe of Object.values(_0x5b44bf)) {
      if (!q(_0x59c6fe)) continue;
      let _0x4fc35a = this._getBoardTableObject(
          (0, n.getBoardElementRenderObjectKey)(_0x527ae9, _0x59c6fe.elementId),
        ),
        _0x59b179 = _0x4fc35a == null ? undefined : _0x4fc35a.getTable();
      if (
        !_0x4fc35a ||
        !_0x59b179 ||
        !this._isTableActiveForResizeHover(_0x527ae9, _0x24884a, _0x59c6fe)
      )
        continue;
      let _0x5bc1c5 = this._resolveObjectPoint(
          _0x4fc35a,
          _0x48a560.x,
          _0x48a560.y,
        ),
        _0x200449 = this._resolveResizeTrigger(
          _0x59b179,
          _0x4fc35a,
          _0x5bc1c5.x,
          _0x5bc1c5.y,
        );
      if (_0x200449) {
        this._setResizeCursor(_0x200449.kind);
        return;
      }
    }
    this._resetResizeCursor();
  }
  _isTableTextEditing() {
    return !!this._getActiveEditingSession();
  }
  _getActiveEditingSession() {
    let _0x378c40 = this._editorUIService["getSession"]();
    return _0x378c40 != null && _0x378c40.context
      ? {
          ..._0x378c40.context,
          documentData: _0x378c40.documentData,
          measurement: _0x378c40.measurement,
        }
      : (this._cellEditorBridgeService["getEditing"]() ?? null);
  }
  _completeActiveEditor(_0xdf836f) {
    let _0x163c79 = this._editorUIService["getSession"]();
    if (_0x163c79 != null && _0x163c79.context) {
      this._editorUIService["complete"](
        _0xdf836f ?? _0x163c79.documentData,
        _0x163c79.measurement,
        _0x163c79.sessionId,
      );
      return;
    }
    this._cellEditorBridgeService["complete"](_0xdf836f);
  }
  _cancelActiveEditor() {
    let _0x4e86da = this._editorUIService["getSession"]();
    if (_0x4e86da != null && _0x4e86da.context) {
      this._editorUIService["cancel"](_0x4e86da.sessionId);
      return;
    }
    this._cellEditorBridgeService["cancel"]();
  }
  _isTableActiveForResizeHover(_0x5162d9, _0x2cd5e8, _0x16cec7) {
    let _0x2713ec = this._slideTableSelectionService["getSelection"]();
    return _0x2713ec &&
      _0x2713ec.unitId === _0x5162d9 &&
      _0x2713ec.subUnitId === _0x2cd5e8 &&
      _0x2713ec.elementId === _0x16cec7.elementId &&
      _0x2713ec.tableId === _0x16cec7.element["tableId"]
      ? true
      : !!this._activeTableContext &&
          this._activeTableContext["unitId"] === _0x5162d9 &&
          this._activeTableContext["subUnitId"] === _0x2cd5e8 &&
          this._activeTableContext["elementId"] === _0x16cec7.elementId &&
          this._activeTableContext["tableId"] === _0x16cec7.element["tableId"];
  }
  _resolveResizeTrigger(_0x109075, _0x50b75c, _0x4a9abb, _0x33b2e0) {
    let _0x3dc6d7 = Tt(_0x109075, _0x50b75c),
      _0x3bcf0d = (0, i.hitTestSlideTableTrigger)(
        (0, i.buildSlideTableTriggers)({
          tableId: _0x109075.id,
          tableWidth: _0x50b75c.width,
          tableHeight: _0x50b75c.height,
          rowHeights: _0x109075.rows["map"](
            (_0x1fda8e) => (_0x1fda8e.height ?? 24) * _0x3dc6d7.scaleY,
          ),
          columnWidths: _0x109075.columns["map"](
            (_0x4d6185) => _0x4d6185.width * _0x3dc6d7.scaleX,
          ),
          mergedCells: (0, i.collectSlideTableMergeRanges)(_0x109075),
        }),
        _0x4a9abb,
        _0x33b2e0,
      );
    return (_0x3bcf0d == null ? undefined : _0x3bcf0d.kind) === "resize-row" ||
      (_0x3bcf0d == null ? undefined : _0x3bcf0d.kind) === "resize-column"
      ? _0x3bcf0d
      : null;
  }
  _handleResizePointerMove(_0x20c7f9) {
    let _0x4d9a77 = this._resizeState;
    if (!_0x4d9a77) return;
    if (
      "buttons" in _0x20c7f9 &&
      _0x20c7f9.buttons !== undefined &&
      (_0x20c7f9.buttons & 1) != 1
    ) {
      this._handleResizePointerUp(_0x20c7f9);
      return;
    }
    let _0x14cd30 = this._buildResizeTable(_0x4d9a77, _0x20c7f9);
    _0x14cd30 &&
      (this._setResizeCursor(_0x4d9a77.trigger["kind"]),
      _0x4d9a77.object["setPreviewTable"](_0x14cd30),
      this._makeSceneDirty());
  }
  _handleRangeDragPointerMove(_0x18848a) {
    let _0x129a9c = this._rangeDragState;
    if (!_0x129a9c || this._resizeState) return;
    if (
      "buttons" in _0x18848a &&
      _0x18848a.buttons !== undefined &&
      (_0x18848a.buttons & 1) != 1
    ) {
      this._finishRangeDrag();
      return;
    }
    let _0x379b9f = this._getBoardPointVectorFromEvent(
      _0x18848a,
      _0x129a9c.startPoint,
    );
    if (!_0x129a9c.activated) {
      let _0x4eb6d8 = _0x379b9f.x - _0x129a9c.startPoint["x"],
        _0x2340e5 = _0x379b9f.y - _0x129a9c.startPoint["y"];
      if (Math.hypot(_0x4eb6d8, _0x2340e5) < 8) return;
      _0x129a9c.activated = true;
    }
    let _0xf8e6b7 = _0x129a9c.object["hitTestCellAtScenePoint"](_0x379b9f);
    if (!_0xf8e6b7 || _0xf8e6b7.kind !== "cell") return;
    let _0x11f4cf = _0x129a9c.object["getTable"]();
    if (!_0x11f4cf) return;
    let _0x4f560c = (0, i.expandSlideTableRangeToMergedCells)(_0x11f4cf, {
        startRow: _0x129a9c.anchor["row"],
        startColumn: _0x129a9c.anchor["column"],
        endRow: _0xf8e6b7.row,
        endColumn: _0xf8e6b7.column,
      }),
      _0x53e403 = this._slideTableSelectionService["selectRange"]({
        unitId: _0x129a9c.selection["unitId"],
        subUnitId: _0x129a9c.selection["subUnitId"],
        elementId: _0x129a9c.selection["elementId"],
        tableId: _0x129a9c.selection["tableId"],
        ..._0x4f560c,
      });
    (_0x129a9c.object["setTableSelection"](
      (0, a.resolveSlideTableObjectSelection)(_0x53e403),
    ),
      this._makeSceneDirty());
  }
  _finishRangeDrag() {
    this._rangeDragState = null;
  }
  _handleResizePointerUp(_0x18ec95) {
    let _0xdba53a = this._resizeState;
    if (!_0xdba53a) return;
    ((this._resizeState = null),
      _0xdba53a.object["setPreviewTable"](null),
      this._resetResizeCursor());
    let _0x39d7e7 = this._resolveResizeSize(_0xdba53a, _0x18ec95);
    if (_0x39d7e7 === null || _0x39d7e7 === _0xdba53a.startSize) {
      this._makeSceneDirty();
      return;
    }
    let _0x3d2acb = this._buildResizeTable(_0xdba53a, _0x18ec95);
    if (!_0x3d2acb || _0x3d2acb.rev === _0xdba53a.table["rev"]) {
      this._makeSceneDirty();
      return;
    }
    (this._commandService["executeCommand"](
      t.UpdateBoardTableCommand["id"],
      _0xdba53a.trigger["kind"] === "resize-row"
        ? {
            unitId: _0xdba53a.unitId,
            tableId: _0xdba53a.tableId,
            patch: { rows: _0x3d2acb.rows },
          }
        : {
            unitId: _0xdba53a.unitId,
            tableId: _0xdba53a.tableId,
            patch: { columns: _0x3d2acb.columns },
          },
    ),
      this._makeSceneDirty());
  }
  _cancelResizePreview() {
    let _0x1a7f07 = this._resizeState;
    _0x1a7f07 &&
      ((this._resizeState = null),
      _0x1a7f07.object["setPreviewTable"](null),
      this._resetResizeCursor(),
      this._makeSceneDirty());
  }
  _setResizeCursor(_0x504d63) {
    var _0x16542c;
    this._resizeHoverActive = true;
    let _0x520a34 = this._renderContext["scene"];
    (_0x16542c = _0x520a34.setCursor) == null ||
      _0x16542c.call(
        _0x520a34,
        _0x504d63 === "resize-column"
          ? c.CURSOR_TYPE["COLUMN_RESIZE"]
          : c.CURSOR_TYPE["ROW_RESIZE"],
      );
  }
  _resetResizeCursor() {
    var _0x5df167;
    if (!this._resizeHoverActive) return;
    this._resizeHoverActive = false;
    let _0xf8ef03 = this._renderContext["scene"];
    (_0x5df167 = _0xf8ef03.resetCursor) == null || _0x5df167.call(_0xf8ef03);
  }
  _buildResizeTable(_0x23875c, _0x442612) {
    let _0x4e6fac = this._resolveResizeDelta(_0x23875c, _0x442612);
    if (_0x4e6fac === null) return null;
    if (_0x23875c.trigger["kind"] === "resize-row") {
      let _0x6acd5f = _0x23875c.trigger["row"] ?? 0;
      return (0, i.resizeSlideTableRowBoundary)(
        _0x23875c.table,
        _0x6acd5f,
        _0x4e6fac,
        12,
      );
    }
    let _0x46497e = _0x23875c.trigger["column"] ?? 0;
    return (0, i.resizeSlideTableColumnBoundary)(
      _0x23875c.table,
      _0x46497e,
      _0x4e6fac,
      12,
    );
  }
  _resolveResizeSize(_0x367f2f, _0x463787) {
    let _0x3f7056 = this._resolveResizeDelta(_0x367f2f, _0x463787);
    return _0x3f7056 === null
      ? null
      : Math.round(_0x367f2f.startSize + _0x3f7056);
  }
  _resolveResizeDelta(_0x233640, _0x34f31c) {
    let _0x4c020b = this._getBoardPointFromEvent(
        _0x34f31c,
        _0x233640.startPoint,
      ),
      _0x48fa02 = this._resolveObjectPoint(
        _0x233640.object,
        _0x4c020b.x,
        _0x4c020b.y,
      ),
      _0x2c3133 =
        _0x233640.trigger["kind"] === "resize-row"
          ? (_0x48fa02.y - _0x233640.startPoint["y"]) / _0x233640.scaleY
          : (_0x48fa02.x - _0x233640.startPoint["x"]) / _0x233640.scaleX;
    return Number.isFinite(_0x2c3133) ? _0x2c3133 : null;
  }
  _getBoardPointVectorFromEvent(_0x6b5d04, _0xa9370a) {
    let _0x146e27 = this._getBoardPointFromEvent(_0x6b5d04, _0xa9370a);
    return c.Vector2["FromArray"]([_0x146e27.x, _0x146e27.y]);
  }
  _getBoardPointFromEvent(_0x4ee477, _0x3aa819 = { x: 0, y: 0 }) {
    let _0x3c7849 = Number.isFinite(_0x4ee477.offsetX)
        ? _0x4ee477.offsetX
        : _0x3aa819.x,
      _0x4c6782 = Number.isFinite(_0x4ee477.offsetY)
        ? _0x4ee477.offsetY
        : _0x3aa819.y,
      _0x25f7da = this._boardUIStateService["getState"](),
      _0x551409 = (_0x25f7da == null
        ? undefined
        : _0x25f7da.viewportPanOffset) ?? { x: 0, y: 0 },
      _0x1af3f1 =
        Number.isFinite(_0x25f7da == null ? undefined : _0x25f7da.zoomRatio) &&
        ((_0x25f7da == null ? undefined : _0x25f7da.zoomRatio) ?? 0) > 0
          ? _0x25f7da.zoomRatio
          : 1;
    return {
      x: (_0x3c7849 - _0x551409.x) / _0x1af3f1,
      y: (_0x4c6782 - _0x551409.y) / _0x1af3f1,
    };
  }
  _resolveObjectPoint(_0x133a52, _0x26dd93, _0x2db732) {
    let _0x325f19 = _0x133a52.getInverseCoord(
      c.Vector2["FromArray"]([_0x26dd93, _0x2db732]),
    );
    return {
      x: _0x325f19.x + _0x133a52.width / 2,
      y: _0x325f19.y + _0x133a52.height / 2,
    };
  }
  _handleTableDoubleClick(
    _0x48fa32,
    _0x29b919,
    _0x135df4,
    _0x5d8f43,
    _0x5d7ba9,
  ) {
    var _0x36912e, _0x4cdc80;
    if (
      (_0x5d8f43.button ?? 0) !== 0 ||
      !this._isTableReadyForCellInteraction(_0x48fa32, _0x29b919)
    )
      return;
    let _0x5a3c8a = this._selectCellFromTableEvent(
        _0x48fa32,
        _0x29b919,
        _0x135df4,
        _0x5d8f43,
      ),
      _0x450740 = _0x135df4.getTable();
    !_0x5a3c8a ||
      !_0x450740 ||
      ((_0x36912e = _0x5d8f43.preventDefault) == null ||
        _0x36912e.call(_0x5d8f43),
      (_0x4cdc80 = _0x5d8f43.stopPropagation) == null ||
        _0x4cdc80.call(_0x5d8f43),
      J(_0x5d7ba9),
      this._openCellEditor({
        selection: _0x5a3c8a,
        object: _0x135df4,
        table: _0x450740,
      }));
  }
  _selectCellFromTableEvent(_0x44ec9e, _0x3459e3, _0x58d6fa, _0x118f95) {
    let _0x5085ea = this._buildCellSelectionFromTableEvent(
        _0x44ec9e,
        _0x3459e3,
        _0x58d6fa,
        _0x118f95,
      ),
      _0x346d7f =
        (_0x5085ea == null ? undefined : _0x5085ea.focus) ??
        (_0x5085ea == null ? undefined : _0x5085ea.anchor) ??
        (_0x5085ea
          ? (0, a.resolveFirstSlideTableSelectionCell)(_0x5085ea)
          : null);
    return !_0x5085ea || !_0x346d7f
      ? null
      : (this._slideTableSelectionService["markTableInternalInteraction"](),
        this._slideTableSelectionService["selectCell"]({
          unitId: _0x5085ea.unitId,
          subUnitId: _0x5085ea.subUnitId,
          elementId: _0x5085ea.elementId,
          tableId: _0x5085ea.tableId,
          row: _0x346d7f.row,
          column: _0x346d7f.column,
        }));
  }
  _buildCellSelectionFromTableEvent(
    _0x214267,
    _0x2e88c5,
    _0x2f83db,
    _0x2261fe,
  ) {
    let _0x42ce81 = _0x2f83db.hitTestCellAtScenePoint(
      this._getBoardPointVectorFromEvent(_0x2261fe),
    );
    if (!_0x42ce81 || _0x42ce81.kind !== "cell") return null;
    let _0x9cd20f = _0x214267.getUnitId(),
      _0x27189f = _0x214267.getActivePageId(),
      _0x228547 = { row: _0x42ce81.row, column: _0x42ce81.column };
    return {
      unitId: _0x9cd20f,
      subUnitId: _0x27189f,
      elementId: _0x2e88c5.elementId,
      tableId: _0x2e88c5.element["tableId"],
      kind: "cell",
      anchor: _0x228547,
      focus: _0x228547,
      ranges: [
        {
          startRow: _0x42ce81.row,
          endRow: _0x42ce81.row,
          startColumn: _0x42ce81.column,
          endColumn: _0x42ce81.column,
        },
      ],
    };
  }
  _beginTableInternalInteraction(_0x5753a3) {
    var _0x13ba0c, _0x4c3a6e;
    (this._boardElementStateService["clearSelection"](),
      (_0x13ba0c = (_0x4c3a6e = this._renderContext["scene"]).getTransformer) ==
        null ||
        (_0x13ba0c = _0x13ba0c.call(_0x4c3a6e)) == null ||
        _0x13ba0c.detachFrom(_0x5753a3));
  }
  _handleKeyboardAction(_0x25912f) {
    let _0x1700fe = this._getActiveEditingSession();
    if (_0x1700fe)
      return this._handleEditingKeyboardAction(_0x25912f, _0x1700fe);
    let _0x57e51a = this._resolveActiveKeyboardTarget();
    if (!_0x57e51a) return false;
    if (_0x25912f === "edit-cell") return this._openCellEditor(_0x57e51a);
    if (_0x25912f === "clear-cells")
      return this._clearSelectedCellContents(_0x57e51a);
    let _0x34acba = (0, a.resolveSlideTableKeyboardMovement)(_0x25912f);
    if (!_0x34acba) return false;
    let {
        selection: _0x3b5b34,
        table: _0xd6c789,
        object: _0x5e585e,
      } = _0x57e51a,
      _0x5d0ad4 =
        _0x3b5b34.focus ??
        _0x3b5b34.anchor ??
        (0, a.resolveFirstSlideTableSelectionCell)(_0x3b5b34);
    if (!_0x5d0ad4) return false;
    let _0x52fba8 = (0, a.resolveNextSlideTableKeyboardCell)(
      _0x5d0ad4,
      _0x34acba,
      _0xd6c789.rows["length"],
      _0xd6c789.columns["length"],
    );
    if (_0x34acba.extend) {
      let _0x2647fe = _0x3b5b34.anchor ?? _0x5d0ad4,
        _0x54eb30 = (0, i.expandSlideTableRangeToMergedCells)(_0xd6c789, {
          startRow: _0x2647fe.row,
          startColumn: _0x2647fe.column,
          endRow: _0x52fba8.row,
          endColumn: _0x52fba8.column,
        }),
        _0x3f1a19 = this._slideTableSelectionService["selectRange"]({
          unitId: _0x3b5b34.unitId,
          subUnitId: _0x3b5b34.subUnitId,
          elementId: _0x3b5b34.elementId,
          tableId: _0x3b5b34.tableId,
          ..._0x54eb30,
        });
      _0x5e585e.setTableSelection(
        (0, a.resolveSlideTableObjectSelection)(_0x3f1a19),
      );
    } else {
      let _0x54dd2c = this._slideTableSelectionService["selectCell"]({
        unitId: _0x3b5b34.unitId,
        subUnitId: _0x3b5b34.subUnitId,
        elementId: _0x3b5b34.elementId,
        tableId: _0x3b5b34.tableId,
        row: _0x52fba8.row,
        column: _0x52fba8.column,
      });
      _0x5e585e.setTableSelection(
        (0, a.resolveSlideTableObjectSelection)(_0x54dd2c),
      );
    }
    return (this._makeSceneDirty(), true);
  }
  _handleEditingKeyboardAction(_0x4711f4, _0x13ef16) {
    let _0x8a70a7 =
      _0x4711f4 === "tab-forward" || _0x4711f4 === "tab-backward"
        ? (0, a.resolveSlideTableKeyboardMovement)(_0x4711f4)
        : null;
    if (!_0x8a70a7) return false;
    let _0x5b6425 = this._getBoardTableObject(
        (0, n.getBoardElementRenderObjectKey)(
          _0x13ef16.unitId,
          _0x13ef16.elementId,
        ),
      ),
      _0x49d57b =
        this._slideTableResourceService["getTable"](
          _0x13ef16.unitId,
          _0x13ef16.tableId,
        ) ?? (_0x5b6425 == null ? undefined : _0x5b6425.getTable());
    if (!_0x5b6425 || !_0x49d57b) return false;
    let _0x596f79 = (0, a.resolveNextSlideTableKeyboardCell)(
      { row: _0x13ef16.row, column: _0x13ef16.column },
      _0x8a70a7,
      _0x49d57b.rows["length"],
      _0x49d57b.columns["length"],
    );
    if (
      _0x596f79.row === _0x13ef16.row &&
      _0x596f79.column === _0x13ef16.column
    )
      return false;
    this._completeActiveEditor(_0x13ef16.documentData);
    let _0x302a75 = this._slideTableSelectionService["selectCell"]({
      unitId: _0x13ef16.unitId,
      subUnitId: _0x13ef16.subUnitId,
      elementId: _0x13ef16.elementId,
      tableId: _0x13ef16.tableId,
      row: _0x596f79.row,
      column: _0x596f79.column,
    });
    return (
      _0x5b6425.setTableSelection(
        (0, a.resolveSlideTableObjectSelection)(_0x302a75),
      ),
      (this._tableActivationStage = "cell"),
      (this._activeTableContext = {
        unitId: _0x13ef16.unitId,
        subUnitId: _0x13ef16.subUnitId,
        elementId: _0x13ef16.elementId,
        tableId: _0x13ef16.tableId,
      }),
      this._keyboardService["setFocused"](true),
      this._makeSceneDirty(),
      true
    );
  }
  _resolveTableClipboardTarget(_0x2ff8c1) {
    if (
      _0x2ff8c1.defaultPrevented ||
      !this._contextService["getContextValue"]("FOCUSING_BOARD_TABLE") ||
      this._getActiveEditingSession()
    )
      return null;
    let _0x3dcb47 = this._resolveActiveKeyboardTarget();
    return (_0x3dcb47 == null ? undefined : _0x3dcb47.selection["unitId"]) ===
      this._renderContext["unitId"]
      ? _0x3dcb47
      : null;
  }
  _canCopyTable(_0x381872) {
    return (0, e.getBoardPermissionValue)(
      this._permissionService,
      _0x381872.unitId,
      _0x381872.unitId,
      _.UnitAction["Copy"],
    );
  }
  async _commitClipboardPatch(_0x526304, _0x32d3fe) {
    return (await this._commandService["executeCommand"](
      t.UpdateBoardTableCommand["id"],
      {
        unitId: _0x526304.selection["unitId"],
        tableId: _0x526304.selection["tableId"],
        patch: _0x32d3fe,
      },
    ))
      ? (_0x526304.object["setTableSelection"](
          (0, a.resolveSlideTableObjectSelection)(_0x526304.selection),
        ),
        this._keyboardService["setFocused"](true),
        this._makeSceneDirty(),
        true)
      : false;
  }
  async _insertClipboardImages(_0x17ba6e, _0x3c45f5 = 0) {
    for (let _0x41503c = 0; _0x41503c < _0x17ba6e.length; _0x41503c++) {
      let _0x8ca3d6 = _0x17ba6e[_0x41503c],
        _0x531741 = await (0, g.normalizeClipboardImageFile)(_0x8ca3d6);
      if (_0x531741) {
        let _0x4d96ef = (_0x3c45f5 + _0x41503c) * 32;
        _0x4d96ef === 0
          ? await this._boardImageInsertService["insertImage"](_0x531741)
          : await this._boardImageInsertService["insertImage"](_0x531741, {
              offset: { x: _0x4d96ef, y: _0x4d96ef },
            });
      }
    }
  }
  _handleKeyboardInput(_0x2c57e0) {
    return _0x2c57e0.kind === "composition-start"
      ? this._openActiveCellEditor()
      : this._getActiveEditingSession() || !_0x2c57e0.text
        ? false
        : this._openActiveCellEditor({ initialText: _0x2c57e0.text });
  }
  _clearSelectedCellContents(_0x2defde) {
    let _0x2e9848 = (0, a.buildSlideTableClearTextPatch)(
      _0x2defde.table,
      _0x2defde.selection,
    );
    return (
      _0x2e9848 &&
        this._commandService["executeCommand"](
          t.UpdateBoardTableCommand["id"],
          {
            unitId: _0x2defde.selection["unitId"],
            tableId: _0x2defde.selection["tableId"],
            patch: _0x2e9848,
          },
        ),
      _0x2defde.object["setTableSelection"](
        (0, a.resolveSlideTableObjectSelection)(_0x2defde.selection),
      ),
      this._makeSceneDirty(),
      true
    );
  }
  _openActiveCellEditor(_0x580e62) {
    let _0x46924b = this._resolveActiveKeyboardTarget();
    return _0x46924b ? this._openCellEditor(_0x46924b, _0x580e62) : false;
  }
  _openCellEditor(_0x57d5a0, _0x5c4d88) {
    var _0x166160, _0x3cd7e0, _0x316e73, _0x33973d;
    let _0xbd9141 = (0, a.resolveSlideTableCellEditorTarget)({
      table: _0x57d5a0.table,
      selection: _0x57d5a0.selection,
      tableWidth: _0x57d5a0.object["width"],
      tableHeight: _0x57d5a0.object["height"],
    });
    if (!_0xbd9141) return false;
    let _0x24dfec =
        _0x57d5a0.object["getCellTextRect"](
          _0xbd9141.row,
          _0xbd9141.column,
          _0x57d5a0.object["width"],
          _0x57d5a0.object["height"],
        ) ?? _0xbd9141.rect,
      _0x59ffff =
        (_0x5c4d88 == null ? undefined : _0x5c4d88.initialText) === undefined
          ? _0xbd9141.documentData
          : (0, a.replaceSlideTableCellDocumentText)(
              _0xbd9141.documentData,
              _0x5c4d88.initialText,
            ),
      _0x3c4a7a = {
        unitId: _0x57d5a0.selection["unitId"],
        subUnitId: _0x57d5a0.selection["subUnitId"] ?? "",
        elementId: _0x57d5a0.selection["elementId"],
        tableId: _0x57d5a0.selection["tableId"],
        row: _0xbd9141.row,
        column: _0xbd9141.column,
        rect: _0x24dfec,
        horizontalAlign:
          (0, a.resolveSlideTableDocumentHorizontalAlign)(
            _0xbd9141.documentData,
          ) ?? s.HorizontalAlign["LEFT"],
        verticalAlign:
          (0, a.toCoreVerticalAlign)(
            (_0x166160 = _0xbd9141.cellStyle) == null
              ? undefined
              : _0x166160.verticalAlign,
          ) ??
          ((_0x3cd7e0 = _0xbd9141.documentData["documentStyle"]) == null ||
          (_0x3cd7e0 = _0x3cd7e0.renderConfig) == null
            ? undefined
            : _0x3cd7e0.verticalAlign),
        isHorizontal:
          ((_0x316e73 = _0xbd9141.cellStyle) == null
            ? undefined
            : _0x316e73.textDirection) !==
            i.SlideTableTextDirectionEnum["Vertical"] &&
          ((_0x33973d = _0xbd9141.cellStyle) == null
            ? undefined
            : _0x33973d.textDirection) !==
            i.SlideTableTextDirectionEnum["Vertical270"],
        tableTransform: {
          left: _0x57d5a0.object["left"],
          top: _0x57d5a0.object["top"],
          width: _0x57d5a0.object["width"],
          height: _0x57d5a0.object["height"],
          angle: _0x57d5a0.object["angle"] ?? 0,
          flipX: _0x57d5a0.object["flipX"],
          flipY: _0x57d5a0.object["flipY"],
        },
        documentData: _0x59ffff,
      },
      _0x45a6aa = this._resolveEditorUILayout(_0x3c4a7a);
    if (!_0x45a6aa) return false;
    let _0xdeb5a6 = this._editorUIService["getSession"]();
    _0xdeb5a6 != null && _0xdeb5a6.context
      ? this._editorUIService["complete"](
          _0xdeb5a6.documentData,
          _0xdeb5a6.measurement,
          _0xdeb5a6.sessionId,
        )
      : (this._cellEditorBridgeService["complete"](),
        this._editorUIService["complete"]());
    let _0x40030d = this._slideTableSelectionService["enterTextMode"]({
      unitId: _0x57d5a0.selection["unitId"],
      subUnitId: _0x57d5a0.selection["subUnitId"] ?? "",
      elementId: _0x57d5a0.selection["elementId"],
      tableId: _0x57d5a0.selection["tableId"],
      row: _0xbd9141.row,
      column: _0xbd9141.column,
    });
    return (
      _0x57d5a0.object["setEditingCell"]({
        row: _0xbd9141.row,
        column: _0xbd9141.column,
      }),
      _0x57d5a0.object["setTableSelection"](
        (0, a.resolveSlideTableObjectSelection)(_0x40030d),
      ),
      this._keyboardService["setFocused"](false),
      this._editorUIService["open"]({
        editorId: "BOARD_TABLE_EDITOR_UNIT_ID",
        documentData: _0x59ffff,
        layout: _0x45a6aa,
        context: _0x3c4a7a,
        appearance: "table-cell",
        autoFocus: true,
        hideFloatingToolbarAlignment: true,
        isSingle: false,
        onChange: (_0x17ad10, _0x2fb202, _0x11d73b) => {
          _0x2fb202 &&
            this._autoGrowCellEditorRowHeight(_0x57d5a0.object, {
              ..._0x2fb202,
              documentData: _0x17ad10,
              measurement: _0x11d73b,
            });
        },
        onComplete: (_0x4045d0, _0x2b632d, _0x376d8e) => {
          _0x2b632d &&
            this._commitCellDocument(_0x57d5a0.object, {
              ..._0x2b632d,
              documentData: _0x4045d0,
              measurement: _0x376d8e,
            });
        },
        onCancel: () => {
          this._finishCellEditing(_0x57d5a0.object);
        },
        onKeyDown: (_0x33984b) => {
          let _0xc2ff55 = bt(_0x33984b);
          return _0xc2ff55
            ? (_0x33984b.preventDefault(),
              _0x33984b.stopPropagation(),
              Promise.resolve(this._keyboardService["handle"](_0xc2ff55)),
              true)
            : false;
        },
      }),
      this._makeSceneDirty(),
      true
    );
  }
  _resolveEditorUILayout(_0x498eec) {
    var _0x86b4ae, _0x6fbd87;
    return xt(_0x498eec, {
      canvasOffset: St(
        (_0x86b4ae = this._renderContext["engine"]) == null ||
          (_0x6fbd87 = _0x86b4ae.getCanvasElement) == null
          ? undefined
          : _0x6fbd87.call(_0x86b4ae),
        this._layoutService["getContentElement"](),
      ),
      scene: this._renderContext["scene"],
    });
  }
  _commitCellDocument(_0x5c7f87, _0xecccaa) {
    var _0x327e1d;
    let _0x580c95 =
      this._slideTableResourceService["getTable"](
        _0xecccaa.unitId,
        _0xecccaa.tableId,
      ) ?? _0x5c7f87.getTable();
    if (!_0x580c95) {
      this._finishCellEditing(_0x5c7f87);
      return;
    }
    let _0x58693c =
        "BOARD_TABLE_CELL_EDITOR_" +
        _0x580c95.id +
        "_" +
        _0xecccaa.row +
        "_" +
        _0xecccaa.column,
      _0x1e894e = (0, a.normalizeSlideTableCellDocumentData)(
        (0, o.stripEditorUIDocumentData)(_0xecccaa.documentData),
        _0x58693c,
      ),
      _0x11cb6c = (0, i.buildSlideTableCellTextDataPatch)(
        _0x580c95,
        _0xecccaa.row,
        _0xecccaa.column,
        _0x1e894e,
        {
          verticalAlign: Ot(
            (_0x327e1d = _0x1e894e.documentStyle) == null ||
              (_0x327e1d = _0x327e1d.renderConfig) == null
              ? undefined
              : _0x327e1d.verticalAlign,
          ),
        },
      );
    if (!_0x11cb6c) {
      this._finishCellEditing(_0x5c7f87);
      return;
    }
    let _0x58869f = _0x11cb6c.rows,
      _0x9efc29 = Et(_0x580c95, _0x58869f, _0x5c7f87, _0xecccaa);
    (this._commandService["executeCommand"](t.UpdateBoardTableCommand["id"], {
      unitId: _0xecccaa.unitId,
      tableId: _0xecccaa.tableId,
      patch: { rows: _0x58869f },
    }),
      _0x9efc29 > 0 &&
        this._growBoardTableElementHeight(_0x5c7f87, _0xecccaa, _0x9efc29),
      this._finishCellEditing(_0x5c7f87));
  }
  _autoGrowCellEditorRowHeight(_0x26e92e, _0x458a3f) {
    if (!_0x458a3f.measurement) return;
    let _0x31303f =
      this._slideTableResourceService["getTable"](
        _0x458a3f.unitId,
        _0x458a3f.tableId,
      ) ?? _0x26e92e.getTable();
    if (!_0x31303f) return;
    let _0x186ae7 = _0x31303f.rows["map"]((_0x3f5414) => ({ ..._0x3f5414 })),
      _0x2a4e4e = Et(_0x31303f, _0x186ae7, _0x26e92e, _0x458a3f);
    _0x2a4e4e <= 0 ||
      (this._commandService["executeCommand"](t.UpdateBoardTableCommand["id"], {
        unitId: _0x458a3f.unitId,
        tableId: _0x458a3f.tableId,
        patch: { rows: _0x186ae7 },
      }),
      _0x26e92e.setPreviewTable({ ..._0x31303f, rows: _0x186ae7 }),
      this._growBoardTableElementHeight(_0x26e92e, _0x458a3f, _0x2a4e4e),
      this._makeSceneDirty());
  }
  _growBoardTableElementHeight(_0x3033f0, _0x5506ba, _0xf16bda) {
    if (_0xf16bda <= 0) return;
    let _0x205c5b = _0x3033f0.getElement(),
      _0x1095a9 = {
        ..._0x205c5b.transform,
        height:
          Y(
            _0x205c5b.transform["height"] ?? _0x3033f0.height,
            _0x3033f0.height,
          ) + _0xf16bda,
      };
    this._commandService["executeCommand"](e.UpdateBoardElementsCommand["id"], {
      unitId: _0x5506ba.unitId,
      subUnitId: _0x5506ba.subUnitId,
      updates: [
        {
          elementId: _0x5506ba.elementId,
          element: { ..._0x205c5b, transform: _0x1095a9 },
          transform: _0x1095a9,
        },
      ],
    });
  }
  _finishCellEditing(_0x276f55) {
    (this._slideTableSelectionService["clear"](),
      this._keyboardService["setFocused"](false),
      _0x276f55.setEditingCell(null),
      _0x276f55.setTableSelection(null),
      _0x276f55.setTableControlHover(null),
      _0x276f55.setPreviewTable(null),
      this._makeSceneDirty());
  }
  _resolveActiveKeyboardTarget() {
    if (this._boardUIStateService["getState"]().interactionMode === "viewing")
      return null;
    let _0x5c68b9 = this._slideTableSelectionService["getSelection"]();
    if (!_0x5c68b9 || _0x5c68b9.kind === "text") return null;
    let _0x440d44 = this._getBoardTableObject(
        (0, n.getBoardElementRenderObjectKey)(
          _0x5c68b9.unitId,
          _0x5c68b9.elementId,
        ),
      ),
      _0x31f89f =
        this._slideTableResourceService["getTable"](
          _0x5c68b9.unitId,
          _0x5c68b9.tableId,
        ) ?? (_0x440d44 == null ? undefined : _0x440d44.getTable());
    return !_0x440d44 || !_0x31f89f
      ? null
      : { selection: _0x5c68b9, object: _0x440d44, table: _0x31f89f };
  }
  _openContextMenu(_0x2953f0) {
    var _0x43b5b9, _0xaa4ee6, _0x11a50b, _0x55dc15;
    (_0x43b5b9 = (_0xaa4ee6 = this._contextMenuService).hideContextMenu) ==
      null || _0x43b5b9.call(_0xaa4ee6);
    let _0x26aa44 = this._createContextMenuEvent(_0x2953f0);
    ((_0x11a50b = _0x26aa44.preventDefault) == null ||
      _0x11a50b.call(_0x26aa44),
      (_0x55dc15 = _0x26aa44.stopPropagation) == null ||
        _0x55dc15.call(_0x26aa44),
      this._contextMenuService["triggerContextMenu"](
        _0x26aa44,
        "board.table.contextMenu.cell",
      ));
  }
  _createContextMenuEvent(_0xd104e7) {
    var _0x2dfa3c, _0x25688d, _0x370e73;
    let _0x3dce22 = _0xd104e7;
    if (
      Number.isFinite(_0x3dce22.clientX) &&
      Number.isFinite(_0x3dce22.clientY)
    )
      return {
        ..._0x3dce22,
        clientX: _0x3dce22.clientX,
        clientY: _0x3dce22.clientY,
        preventDefault: () => {
          var _0x1e8633;
          return (_0x1e8633 = _0x3dce22.preventDefault) == null
            ? undefined
            : _0x1e8633.call(_0x3dce22);
        },
        stopPropagation: () => {
          var _0x2d3f60;
          return (_0x2d3f60 = _0x3dce22.stopPropagation) == null
            ? undefined
            : _0x2d3f60.call(_0x3dce22);
        },
      };
    let _0x498954 =
        (_0x2dfa3c = this._renderContext["engine"]) == null ||
        (_0x25688d = _0x2dfa3c.getCanvasElement) == null ||
        (_0x25688d = _0x25688d.call(_0x2dfa3c)) == null ||
        (_0x370e73 = _0x25688d.getBoundingClientRect) == null
          ? undefined
          : _0x370e73.call(_0x25688d),
      _0xf72a39 =
        ((_0x498954 == null ? undefined : _0x498954.left) ?? 0) +
        (_0xd104e7.offsetX ?? 0),
      _0x413862 =
        ((_0x498954 == null ? undefined : _0x498954.top) ?? 0) +
        (_0xd104e7.offsetY ?? 0);
    return {
      ..._0x3dce22,
      clientX: _0xf72a39,
      clientY: _0x413862,
      preventDefault: () => {
        var _0x10127a;
        return (_0x10127a = _0x3dce22.preventDefault) == null
          ? undefined
          : _0x10127a.call(_0x3dce22);
      },
      stopPropagation: () => {
        var _0x1ea2b1;
        return (_0x1ea2b1 = _0x3dce22.stopPropagation) == null
          ? undefined
          : _0x1ea2b1.call(_0x3dce22);
      },
    };
  }
};
wt = L(
  [
    I(1, s.IUniverInstanceService),
    I(2, e.IBoardElementService),
    I(3, (0, s.Inject)(a.SlideTableSelectionService)),
    I(4, l.IContextMenuService),
    I(5, (0, s.Inject)(R)),
    I(6, (0, s.Inject)(yt)),
    I(7, s.ICommandService),
    I(8, s.IContextService),
    I(9, (0, s.Inject)(i.SlideTableResourceService)),
    I(10, n.IBoardElementStateService),
    I(11, n.IBoardUIStateService),
    I(12, o.IEditorUIService),
    I(13, l.ILayoutService),
    I(14, s.IPermissionService),
    I(15, (0, s.Inject)(n.BoardImageInsertService)),
  ],
  wt,
);
function q(_0x3b1213) {
  return _0x3b1213.element["type"] === e.BoardElementType["Table"];
}
function Tt(_0x5e821f, _0x2b944c) {
  let _0x20ec49 = (0, i.resolveSlideTableRenderModel)(_0x5e821f);
  return {
    scaleX: Y(_0x2b944c.width / _0x20ec49.width, 1),
    scaleY: Y(_0x2b944c.height / _0x20ec49.height, 1),
  };
}
function Et(_0x33bdfc, _0x1c19b3, _0x2eabfa, _0x1b0f0c) {
  let _0x144bb8 = _0x1b0f0c.measurement;
  if (!_0x144bb8) return 0;
  let _0x2ea100 = (0, i.resolveSlideTableRenderModel)(_0x33bdfc),
    _0x38cccc = _0x2ea100.cells["find"](
      (_0x171e71) =>
        !_0x171e71.hidden &&
        _0x171e71.row === _0x1b0f0c.row &&
        _0x171e71.column === _0x1b0f0c.column,
    );
  if (!_0x38cccc) return 0;
  let _0x1148d8 = Dt(_0x38cccc, _0x2ea100.height, _0x2eabfa.height),
    _0x20b802 = Y(_0x144bb8.contentHeight, _0x1148d8),
    _0x4d85c3 = Math.ceil(_0x20b802 - _0x1148d8);
  if (_0x4d85c3 <= 0) return 0;
  let _0x2cd674 = _0x4d85c3 * Y(_0x2ea100.height / _0x2eabfa.height, 1),
    _0x410682 = _0x1c19b3[_0x38cccc.row + _0x38cccc.rowSpan - 1];
  return _0x410682
    ? ((_0x410682.height = Y(_0x410682.height ?? 24, 24) + _0x2cd674),
      _0x4d85c3)
    : 0;
}
function Dt(_0x4fb9b3, _0x602eb1, _0x3a7894) {
  let _0x287888 = (0, i.resolveSlideTableCellTextMargins)(
      _0x4fb9b3.style["margins"],
    ),
    _0x182336 = Y(_0x3a7894 / _0x602eb1, 1);
  return Math.max(
    1,
    _0x4fb9b3.bounds["height"] * _0x182336 - _0x287888.top - _0x287888.bottom,
  );
}
function Ot(_0x5cd6be) {
  if (_0x5cd6be === s.VerticalAlign["MIDDLE"])
    return i.SlideTableVerticalAlignEnum["Middle"];
  if (_0x5cd6be === s.VerticalAlign["BOTTOM"])
    return i.SlideTableVerticalAlignEnum["Bottom"];
  if (_0x5cd6be === s.VerticalAlign["TOP"])
    return i.SlideTableVerticalAlignEnum["Top"];
}
function kt(_0x1b5786) {
  var _0x39c550, _0x4b50f6;
  ((_0x39c550 = _0x1b5786.dispose) == null || _0x39c550.call(_0x1b5786),
    (_0x4b50f6 = _0x1b5786.unsubscribe) == null || _0x4b50f6.call(_0x1b5786));
}
function At(_0x5cf1fb, _0x386204) {
  let _0x55b8fe = Y(_0x386204, 1),
    _0x46edc1 = _0x5cf1fb.map((_0x13f4b5) => Y(_0x13f4b5, 1)),
    _0x134ba1 = _0x46edc1.reduce(
      (_0x2fe4c7, _0x5e13ac) => _0x2fe4c7 + _0x5e13ac,
      0,
    );
  return _0x46edc1.map((_0x171d0a) => (_0x171d0a / _0x134ba1) * _0x55b8fe);
}
function jt(_0x2d0cf2, _0xc35dcd) {
  let _0x1f0dac = 0,
    _0x477219 = { index: 0, distance: Math.abs(_0xc35dcd) };
  for (let _0x5ea4cf = 0; _0x5ea4cf < _0x2d0cf2.length; _0x5ea4cf += 1) {
    _0x1f0dac += _0x2d0cf2[_0x5ea4cf];
    let _0x4fe5fe = Math.abs(_0xc35dcd - _0x1f0dac);
    _0x4fe5fe < _0x477219.distance &&
      (_0x477219 = { index: _0x5ea4cf + 1, distance: _0x4fe5fe });
  }
  return _0x477219.index;
}
function J(_0x3c8828) {
  _0x3c8828 &&
    (_0x3c8828.stopPropagation(), (_0x3c8828.skipNextObservers = true));
}
function Mt(_0x8ad2b0, _0x58bddb) {
  var _0x187a84, _0x2c98da;
  if (_0x8ad2b0)
    return (
      ((_0x187a84 = _0x8ad2b0.rows[_0x58bddb - 1]) == null
        ? undefined
        : _0x187a84.height) ??
      ((_0x2c98da = _0x8ad2b0.rows[_0x58bddb]) == null
        ? undefined
        : _0x2c98da.height)
    );
}
function Nt(_0x3b0531, _0x11ce01) {
  var _0xa4d009, _0x9cff1a;
  if (_0x3b0531)
    return (
      ((_0xa4d009 = _0x3b0531.columns[_0x11ce01 - 1]) == null
        ? undefined
        : _0xa4d009.width) ??
      ((_0x9cff1a = _0x3b0531.columns[_0x11ce01]) == null
        ? undefined
        : _0x9cff1a.width)
    );
}
function Pt(_0x405df9) {
  if (
    typeof _0x405df9.insertIndex == "number" &&
    Number.isInteger(_0x405df9.insertIndex)
  )
    return _0x405df9.insertIndex;
  let _0x55cc4e =
    _0x405df9.kind === "row-insert-dot" ? _0x405df9.row : _0x405df9.column;
  return typeof _0x55cc4e == "number" && Number.isInteger(_0x55cc4e)
    ? _0x55cc4e + 1
    : null;
}
function Ft(_0x335e51, _0x50ba5e) {
  let _0x58c4f0 = _0x335e51.getInverseCoord(_0x50ba5e),
    _0x279a7e = _0x58c4f0.x + _0x335e51.width / 2,
    _0x7ce85b = _0x58c4f0.y + _0x335e51.height / 2;
  return (
    _0x279a7e >= -32 &&
    _0x279a7e <= _0x335e51.width + 32 &&
    _0x7ce85b >= -32 &&
    _0x7ce85b <= _0x335e51.height + 32
  );
}
function It(_0x6042b9) {
  let _0xf53bbc = {
    left: _0x6042b9.left ?? 0,
    top: _0x6042b9.top ?? 0,
    width: _0x6042b9.width ?? 0,
    height: _0x6042b9.height ?? 0,
  };
  return (
    _0x6042b9.rotation !== undefined &&
      (_0xf53bbc.rotation = _0x6042b9.rotation),
    _0x6042b9.flipX !== undefined && (_0xf53bbc.flipX = _0x6042b9.flipX),
    _0x6042b9.flipY !== undefined && (_0xf53bbc.flipY = _0x6042b9.flipY),
    _0xf53bbc
  );
}
function Y(_0x392fdc, _0x1a748d) {
  return Number.isFinite(_0x392fdc) && _0x392fdc > 0 ? _0x392fdc : _0x1a748d;
}
function Lt(_0x3e0b66) {
  return (
    new DOMParser()
      .parseFromString(_0x3e0b66, "text/html")
      .querySelector("img") !== null
  );
}
async function Rt(_0x51493f, _0x40b5b8) {
  let _0x2522d8 = (0, g.extractClipboardImageFiles)(_0x51493f);
  return _0x40b5b8
    ? Lt(_0x40b5b8)
      ? _0x2522d8.length > 0
        ? _0x2522d8
        : (0, g.extractClipboardHtmlImageFiles)(_0x40b5b8)
      : []
    : _0x2522d8;
}
let zt = class extends s.Disposable {
  constructor(_0x32cd08) {
    (super(), (this._componentManager = _0x32cd08), this._registerComponents());
  }
  _registerComponents() {
    this.disposeWithMe(this._componentManager["register"](st, lt));
  }
};
zt = L([I(0, (0, s.Inject)(l.ComponentManager))], zt);
function Bt() {
  return en("board-table.menu.insert", "boards-table-ui.contextMenu.insert");
}
function Vt() {
  return en("board-table.menu.delete", "boards-table-ui.contextMenu.delete");
}
function Ht() {
  return en(
    "board-table.menu.distribute",
    "boards-table-ui.contextMenu.distribute",
  );
}
function Ut(_0x3d83ea) {
  return Z(
    T.id,
    "boards-table-ui.contextMenu.insertRowAbove",
    X(_0x3d83ea, a.SLIDE_TABLE_CONTEXT_MENU_ACTIONS["InsertRowAbove"]),
    _0x3d83ea,
  );
}
function Wt(_0x25cb2f) {
  return Z(
    E.id,
    "boards-table-ui.contextMenu.insertRowBelow",
    X(_0x25cb2f, a.SLIDE_TABLE_CONTEXT_MENU_ACTIONS["InsertRowBelow"]),
    _0x25cb2f,
  );
}
function Gt(_0x331f5e) {
  return Z(
    D.id,
    "boards-table-ui.contextMenu.insertColumnLeft",
    X(_0x331f5e, a.SLIDE_TABLE_CONTEXT_MENU_ACTIONS["InsertColumnLeft"]),
    _0x331f5e,
  );
}
function Kt(_0x4ffe13) {
  return Z(
    O.id,
    "boards-table-ui.contextMenu.insertColumnRight",
    X(_0x4ffe13, a.SLIDE_TABLE_CONTEXT_MENU_ACTIONS["InsertColumnRight"]),
    _0x4ffe13,
  );
}
function qt(_0x321b22) {
  return Z(
    k.id,
    "boards-table-ui.contextMenu.deleteRow",
    X(_0x321b22, a.SLIDE_TABLE_CONTEXT_MENU_ACTIONS["DeleteRows"]),
    _0x321b22,
  );
}
function Jt(_0x382ea7) {
  return Z(
    ee.id,
    "boards-table-ui.contextMenu.deleteColumn",
    X(_0x382ea7, a.SLIDE_TABLE_CONTEXT_MENU_ACTIONS["DeleteColumns"]),
    _0x382ea7,
  );
}
function Yt() {
  return Z(_e.id, "boards-table-ui.contextMenu.deleteTable", false);
}
function Xt(_0x4ccd07) {
  return Z(
    A.id,
    "boards-table-ui.editorToolbar.mergeCells",
    X(_0x4ccd07, a.SLIDE_TABLE_CONTEXT_MENU_ACTIONS["MergeCells"]),
    _0x4ccd07,
  );
}
function Zt(_0xa9e23a) {
  return Z(
    j.id,
    "boards-table-ui.editorToolbar.unmergeCells",
    X(_0xa9e23a, a.SLIDE_TABLE_CONTEXT_MENU_ACTIONS["UnmergeCells"]),
    _0xa9e23a,
  );
}
function Qt(_0x2e5ac3) {
  return Z(
    te.id,
    "boards-table-ui.contextMenu.distributeRows",
    X(_0x2e5ac3, a.SLIDE_TABLE_CONTEXT_MENU_ACTIONS["DistributeRows"]),
    _0x2e5ac3,
  );
}
function $t(_0x48ed04) {
  return Z(
    M.id,
    "boards-table-ui.contextMenu.distributeColumns",
    X(_0x48ed04, a.SLIDE_TABLE_CONTEXT_MENU_ACTIONS["DistributeColumns"]),
    _0x48ed04,
  );
}
function X(_0xabffc0, _0xd5432c) {
  return !_0xabffc0 || !ye(_0xabffc0, _0xd5432c);
}
function en(_0x14b347, _0x19ccc3) {
  return { id: _0x14b347, type: l.MenuItemType["SUBITEMS"], title: _0x19ccc3 };
}
function Z(_0x2b01c8, _0x1de1db, _0x4617cb, _0x264910) {
  let _0x36fb7c =
    _0x264910 == null
      ? undefined
      : _0x264910.get(a.SlideTableSelectionService).getSelection();
  return {
    id: _0x2b01c8,
    type: l.MenuItemType["BUTTON"],
    title: _0x1de1db,
    disabled$: tn(_0x4617cb),
    ...(_0x36fb7c ? { params: { selection: _0x36fb7c } } : {}),
  };
}
function tn(_0x4c9744) {
  return {
    subscribe(_0xb88176) {
      if (typeof _0xb88176 == "function") _0xb88176(_0x4c9744);
      else {
        var _0x574c38;
        (_0x574c38 = _0xb88176.next) == null ||
          _0x574c38.call(_0xb88176, _0x4c9744);
      }
      return { unsubscribe: () => {} };
    },
  };
}
const nn = {
  [l.MenuManagerPosition["CONTEXT_MENU"]]: {
    "board.table.contextMenu.cell": {
      order: 20,
      [l.ContextMenuGroup["LAYOUT"]]: {
        order: 0,
        "board-table.menu.insert": {
          order: 0,
          menuItemFactory: Bt,
          [T.id]: { order: 0, menuItemFactory: Ut },
          [E.id]: { order: 1, menuItemFactory: Wt },
          [D.id]: { order: 2, menuItemFactory: Gt },
          [O.id]: { order: 3, menuItemFactory: Kt },
        },
        "board-table.menu.delete": {
          order: 1,
          menuItemFactory: Vt,
          [k.id]: { order: 0, menuItemFactory: qt },
          [ee.id]: { order: 1, menuItemFactory: Jt },
        },
        [A.id]: { order: 2, menuItemFactory: Xt },
        [j.id]: { order: 3, menuItemFactory: Zt },
        "board-table.menu.distribute": {
          order: 4,
          menuItemFactory: Ht,
          [te.id]: { order: 0, menuItemFactory: Qt },
          [M.id]: { order: 1, menuItemFactory: $t },
        },
      },
      [l.ContextMenuGroup["OTHERS"]]: {
        order: 1,
        [_e.id]: { order: 0, menuItemFactory: Yt },
      },
    },
  },
};
function rn(_0xf7104c) {
  let _0x527a0c = _0xf7104c;
  return (_0x527a0c == null ? undefined : _0x527a0c.type) !==
    e.BoardElementType["Table"] || typeof _0x527a0c.tableId != "string"
    ? null
    : _0x527a0c;
}
function an(_0x5d3223, _0x695bef, _0x5d2795, _0xe42bee) {
  return {
    name: "table",
    createObject: ({
      unitId: _0x98b5e2,
      elementDataItem: _0x279abc,
      key: _0x5813cb,
      bounds: _0x93b4a5,
      zIndex: _0x42d116,
    }) => {
      let _0x4c4ee5 = rn(_0x279abc.element);
      if (!_0x4c4ee5) return null;
      let _0x4b74f5 = _0x5d3223.getTable(_0x98b5e2, _0x4c4ee5.tableId);
      return new gt(_0x5813cb, {
        ..._0x93b4a5,
        element: _0x4c4ee5,
        localeService: _0x695bef,
        tableThemePalette: _0x5d2795,
        tableThemes: _0x5d3223.getThemes(_0x98b5e2),
        themeService: _0xe42bee,
        table: _0x4b74f5,
        zIndex: _0x42d116,
        evented: true,
      });
    },
    syncObject: (
      _0x2e3c4f,
      {
        unitId: _0x4f8636,
        elementDataItem: _0x72f5b4,
        bounds: _0x5daf7c,
        zIndex: _0xd5be44,
        preserveTransform: _0x382ba9,
      },
    ) => {
      if (!(_0x2e3c4f instanceof gt)) return false;
      let _0x3c7ffe = rn(_0x72f5b4.element);
      return _0x3c7ffe
        ? (_0x382ba9 || _0x2e3c4f.transformByState(_0x5daf7c),
          _0xd5be44 !== undefined &&
            _0x2e3c4f.zIndex !== _0xd5be44 &&
            (_0x2e3c4f.zIndex = _0xd5be44),
          _0x2e3c4f.updateElement(_0x3c7ffe),
          _0x2e3c4f.setLocaleService(_0x695bef),
          _0x2e3c4f.setTableThemePalette(_0x5d2795),
          _0x2e3c4f.setTableThemes(_0x5d3223.getThemes(_0x4f8636)),
          _0x2e3c4f.setTable(_0x5d3223.getTable(_0x4f8636, _0x3c7ffe.tableId)),
          _0x2e3c4f.makeDirty(true),
          true)
        : false;
    },
  };
}
let Q = class {
  constructor(_0x2008f2) {
    ((this._resourceService = _0x2008f2), G(this, "key", "board-table"));
  }
  collect(_0x2e2d84) {
    let _0x3180ca = {},
      _0x532a3b = {};
    return (
      _0x2e2d84.elements["forEach"]((_0x13f15f) => {
        if (!on(_0x13f15f)) return;
        let _0x2f9803 = this._resourceService["getTable"](
          _0x2e2d84.unitId,
          _0x13f15f.tableId,
        );
        if (!_0x2f9803) return;
        _0x3180ca[_0x13f15f.id] = s.Tools["deepClone"](_0x2f9803);
        let _0x87fa61 = _0x2f9803.themeId
          ? this._resourceService["getTheme"](
              _0x2e2d84.unitId,
              _0x2f9803.themeId,
            )
          : undefined;
        _0x87fa61 &&
          (_0x532a3b[_0x87fa61.id] = s.Tools["deepClone"](_0x87fa61));
      }),
      Object.keys(_0x3180ca).length > 0
        ? { tablesByElementId: _0x3180ca, themes: _0x532a3b }
        : null
    );
  }
  serialize(_0x265156) {
    let _0xe280e2 = _0x265156.elements["filter"](on)
      .map((_0x305c90) =>
        this._resourceService["getTable"](_0x265156.unitId, _0x305c90.tableId),
      )
      .filter((_0x11d4a3) => _0x11d4a3 !== undefined);
    return _0xe280e2.length > 0
      ? {
          html: _0xe280e2.map(pn).join("<br>"),
          plainText: _0xe280e2.map(fn).join("\x0a"),
        }
      : null;
  }
  parseExternalHtml(_0x477348) {
    let _0x3028d2 = cn(_0x477348.html);
    if (!_0x3028d2) return null;
    let _0xbed1af = (0, s.generateRandomId)(6),
      _0x997f8 = ln(_0x3028d2),
      _0x558330 = _0x997f8.columns["reduce"](
        (_0x1850cd, _0x553224) => _0x1850cd + _0x553224.width,
        0,
      ),
      _0x2d3740 = _0x997f8.rows["reduce"](
        (_0x5a5384, _0x80894a) => _0x5a5384 + (_0x80894a.height ?? 28),
        0,
      );
    return {
      elements: [
        {
          id: _0xbed1af,
          type: e.BoardElementType["Table"],
          tableId: _0x997f8.id,
          transform: {
            left: Math.round(_0x477348.point["x"] - _0x558330 / 2),
            top: Math.round(_0x477348.point["y"] - _0x2d3740 / 2),
            width: _0x558330,
            height: _0x2d3740,
            rotation: 0,
          },
        },
      ],
      resources: {
        [this.key]: {
          tablesByElementId: { [_0xbed1af]: _0x997f8 },
          themes: {},
        },
      },
    };
  }
  parseExternalPlainText(_0xafff2b) {
    let _0xfc57a7 = (0, v.convertPlainTextTableToHtml)(_0xafff2b.text);
    return _0xfc57a7
      ? this.parseExternalHtml({ ..._0xafff2b, html: _0xfc57a7 })
      : null;
  }
  preparePaste(_0x254187) {
    if (!sn(_0x254187.payload)) return null;
    let _0x377a75 = _0x254187.payload,
      _0x3f92c6 = new Map();
    _0x254187.elementIdMap["forEach"]((_0x368511, _0x41a6fa) =>
      _0x3f92c6.set(_0x368511, _0x41a6fa),
    );
    let _0x13ff6a = [],
      _0x363e0a = _0x254187.elements["map"]((_0x1da390) => {
        if (!on(_0x1da390)) return _0x1da390;
        let _0x17a998 = _0x3f92c6.get(_0x1da390.id),
          _0x32de39 = _0x17a998
            ? _0x377a75.tablesByElementId[_0x17a998]
            : undefined;
        if (!_0x32de39) return _0x1da390;
        let _0x5b941b = (0, s.generateRandomId)(6),
          _0x589bf4 = _0x32de39.themeId
            ? _0x377a75.themes[_0x32de39.themeId]
            : undefined,
          _0xa40c7 = _0x589bf4
            ? {
                ...s.Tools["deepClone"](_0x589bf4),
                id: (0, s.generateRandomId)(6),
              }
            : undefined,
          _0x1bb9b7 = {
            ...s.Tools["deepClone"](_0x32de39),
            id: _0x5b941b,
            themeId: _0xa40c7 == null ? undefined : _0xa40c7.id,
          };
        return (
          _0x13ff6a.push({ table: _0x1bb9b7, theme: _0xa40c7 }),
          { ..._0x1da390, tableId: _0x5b941b }
        );
      });
    return _0x13ff6a.length === 0
      ? null
      : {
          elements: _0x363e0a,
          redoMutations: _0x13ff6a.map(
            ({ table: _0x30de52, theme: _0x5118c6 }) => ({
              id: t.SetBoardTableMutation["id"],
              params: {
                unitId: _0x254187.targetUnitId,
                table: _0x30de52,
                theme: _0x5118c6,
              },
            }),
          ),
          undoMutations: [..._0x13ff6a]
            .reverse()
            .map(({ table: _0xa3b5f0 }) => ({
              id: t.RemoveBoardTableMutation["id"],
              params: { unitId: _0x254187.targetUnitId, tableId: _0xa3b5f0.id },
            })),
        };
  }
};
Q = L([I(0, (0, s.Inject)(i.SlideTableResourceService))], Q);
function on(_0x14008b) {
  return _0x14008b.type === e.BoardElementType["Table"];
}
function sn(_0x2cef36) {
  return !_0x2cef36 || typeof _0x2cef36 != "object"
    ? false
    : "tablesByElementId" in _0x2cef36 &&
        !!_0x2cef36.tablesByElementId &&
        typeof _0x2cef36.tablesByElementId == "object" &&
        "themes" in _0x2cef36 &&
        !!_0x2cef36.themes &&
        typeof _0x2cef36.themes == "object";
}
function cn(_0x2b6c87) {
  let _0x192a2a = new DOMParser().parseFromString(_0x2b6c87, "text/html"),
    _0x58ec42 = _0x192a2a.querySelectorAll("table");
  if (
    _0x58ec42.length !== 1 ||
    (_0x58ec42[0].remove(),
    (_0x192a2a.body["textContent"] ?? "").trim() ||
      _0x192a2a.body["querySelector"]("img"))
  )
    return null;
  let _0x1945f4 = (0, v.parseHtmlTableClipboard)(_0x2b6c87);
  return _0x1945f4.rows["length"] > 0 && _0x1945f4.columnWidths["length"] > 0
    ? _0x1945f4
    : null;
}
function ln(_0x58889b) {
  let _0x4a6f07 = {
    id: (0, s.generateRandomId)(6),
    rev: 0,
    options: {},
    columns: _0x58889b.columnWidths["map"]((_0x46f954) => ({
      width: _n(_0x46f954 ?? 100, 24, 320),
    })),
    rows: _0x58889b.rows["map"]((_0x466958) => ({
      height: _n(_0x466958.height ?? 28, 20, 180),
      cells: _0x466958.cells["map"]((_0x3396e1) => un(_0x3396e1)),
    })),
  };
  return (
    _0x58889b.rows["forEach"]((_0x2e95d5, _0x3600ee) => {
      _0x2e95d5.cells["forEach"]((_0xd6af10, _0x4a0b44) => {
        if (_0xd6af10) {
          for (let _0x3b5e99 = 0; _0x3b5e99 < _0xd6af10.rowSpan; _0x3b5e99 += 1)
            for (
              let _0x59236b = 0;
              _0x59236b < _0xd6af10.colSpan;
              _0x59236b += 1
            ) {
              var _0x1707b6;
              if (_0x3b5e99 === 0 && _0x59236b === 0) continue;
              let _0x2d17a9 =
                (_0x1707b6 = _0x4a6f07.rows[_0x3600ee + _0x3b5e99]) == null
                  ? undefined
                  : _0x1707b6.cells[_0x4a0b44 + _0x59236b];
              _0x2d17a9 &&
                ((_0x2d17a9.hMerge = _0x59236b > 0),
                (_0x2d17a9.vMerge = _0x3b5e99 > 0));
            }
        }
      });
    }),
    _0x4a6f07
  );
}
function un(_0xc73615) {
  if (!_0xc73615) return {};
  let _0x333163 =
      dn((0, y.removeClipboardHtmlImages)(_0xc73615.html)) ??
      dn(gn(_0xc73615.text)),
    _0x1369ab =
      _0xc73615.borderColor || _0xc73615.borderWidth
        ? {
            color: _0xc73615.borderColor,
            width: _0xc73615.borderWidth,
            dash: i.SlideTableBorderDashEnum["Solid"],
          }
        : undefined;
  return {
    textData: _0x333163 ?? undefined,
    rowSpan: _0xc73615.rowSpan > 1 ? _0xc73615.rowSpan : undefined,
    columnSpan: _0xc73615.colSpan > 1 ? _0xc73615.colSpan : undefined,
    style:
      _0xc73615.backgroundColor || _0x1369ab
        ? {
            fill: _0xc73615.backgroundColor
              ? {
                  type: i.SlideTableFillTypeEnum["Solid"],
                  color: _0xc73615.backgroundColor,
                }
              : undefined,
            borders: _0x1369ab
              ? {
                  top: _0x1369ab,
                  right: _0x1369ab,
                  bottom: _0x1369ab,
                  left: _0x1369ab,
                }
              : undefined,
          }
        : undefined,
  };
}
function dn(_0x396c75) {
  try {
    var _0x583256;
    let _0x2ef688 = (0, y.convertClipboardHtmlToDocumentData)(
      _0x396c75,
      (0, s.generateRandomId)(6),
    );
    return (_0x583256 = _0x2ef688.body) != null && _0x583256.dataStream
      ? {
          ..._0x2ef688,
          id: _0x2ef688.id || (0, s.generateRandomId)(6),
          body: _0x2ef688.body,
          documentStyle: _0x2ef688.documentStyle ?? {},
        }
      : null;
  } catch {
    return null;
  }
}
function fn(_0x9b3e5e) {
  return _0x9b3e5e.rows["map"]((_0x3eed5f) =>
    _0x3eed5f.cells["map"]((_0x3df62d) =>
      _0x3df62d.hMerge || _0x3df62d.vMerge
        ? ""
        : _0x3df62d.textData
          ? mn(_0x3df62d.textData).replace(/[\t\r\n]+/g, "\x20")
          : "",
    ).join("\x09"),
  ).join("\x0a");
}
function pn(_0x1ab653) {
  return (
    "<table><colgroup>" +
    _0x1ab653.columns["map"](
      (_0x37064d) => '<col style="width: ' + _0x37064d.width + 'px">',
    ).join("") +
    "</colgroup><tbody>" +
    _0x1ab653.rows["map"]((_0x7c5ecf) => {
      let _0x44210c = _0x7c5ecf.cells["map"]((_0x202781) => {
        if (_0x202781.hMerge || _0x202781.vMerge) return "";
        let _0x181c9a = [
            _0x202781.rowSpan && _0x202781.rowSpan > 1
              ? "rowspan=\x22" + _0x202781.rowSpan + "\x22"
              : "",
            _0x202781.columnSpan && _0x202781.columnSpan > 1
              ? 'colspan="' + _0x202781.columnSpan + "\x22"
              : "",
            (0, a.serializeSlideTableCellStyleAttribute)(_0x202781),
          ]
            .filter(Boolean)
            .join("\x20"),
          _0x32d069 = _0x202781.textData ? hn(_0x202781.textData) : "";
        return (
          "<td" +
          (_0x181c9a ? "\x20" + _0x181c9a : "") +
          ">" +
          _0x32d069 +
          "</td>"
        );
      }).join("");
      return (
        "<tr" +
        (_0x7c5ecf.height
          ? ' style="height: ' + _0x7c5ecf.height + "px\x22"
          : "") +
        ">" +
        _0x44210c +
        "</tr>"
      );
    }).join("") +
    "</tbody></table>"
  );
}
function mn(_0xdfa094) {
  var _0x53cf54;
  return (
    ((_0x53cf54 = _0xdfa094.body) == null ? undefined : _0x53cf54.dataStream) ??
    ""
  )
    .replace(/\r\n$/, "")
    .replace(/\r/g, "\x0a");
}
function hn(_0x257891) {
  try {
    return (0, y.convertBodyToHtml)(s.Tools["deepClone"](_0x257891));
  } catch {
    return "";
  }
}
function gn(_0x406927) {
  return _0x406927
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function _n(_0x595c21, _0x3b5a20, _0x10bcd4) {
  return Math.min(_0x10bcd4, Math.max(_0x3b5a20, _0x595c21));
}
var vn;
const yn = [ke];
let $ = (vn = class extends s.Plugin {
  constructor(
    _0x3b055c = Le,
    _0x2ac7ff,
    _0x765614,
    _0x33af90,
    _0x4d08e4,
    _0x2518b6,
    _0x135348,
    _0x34a130,
    _0x3319ac,
  ) {
    (super(),
      (this._config = _0x3b055c),
      (this._injector = _0x2ac7ff),
      (this._configService = _0x765614),
      (this._renderManagerService = _0x33af90),
      (this._localeService = _0x4d08e4),
      (this._themeService = _0x2518b6),
      (this._commandService = _0x135348),
      (this._menuManagerService = _0x34a130),
      (this._shortcutService = _0x3319ac),
      G(this, "_adapter", null));
    let { ..._0x41b40f } = (0, s.merge)({}, Le, this._config);
    this._configService["setConfig"]("boards-table-ui.config", _0x41b40f);
  }
  onStarting() {
    (n.UniverBoardsUIPlugin["registerRuntimeScopedDependencies"](
      this._injector,
      vn.scopedDependencies,
    ),
      this._injector["has"](a.SlideTableSelectionService) ||
        this._injector["add"]([a.SlideTableSelectionService]),
      this._injector["add"]([R]),
      this._injector["add"]([yt]),
      this._injector["add"]([Q]),
      this._injector["add"]([zt]),
      this._injector["has"](o.IEditorUIService) ||
        this._injector["add"]([
          o.IEditorUIService,
          { useClass: o.EditorUIService },
        ]),
      (0, s.touchDependencies)(this._injector, [
        [a.SlideTableSelectionService],
      ]),
      (0, s.touchDependencies)(this._injector, [[R]]),
      (0, s.touchDependencies)(this._injector, [[yt]]),
      (0, s.touchDependencies)(this._injector, [[Q]]),
      (0, s.touchDependencies)(this._injector, [[o.IEditorUIService]]),
      this.disposeWithMe(this._injector["get"](zt)),
      this.disposeWithMe(
        this._injector["get"](
          n.IBoardClipboardResourceAdapterService,
        ).registerAdapter(this._injector["get"](Q)),
      ));
    let _0xba6c6e = an(
      this._injector["get"](i.SlideTableResourceService),
      this._localeService,
      (0, i.resolveSlideTableThemePalette)((_0x1f0bae) =>
        this._themeService["getColorFromTheme"](_0x1f0bae),
      ),
      this._themeService,
    );
    ((this._adapter = _0xba6c6e),
      this._appendRenderAdapter(_0xba6c6e),
      [...ve, ...Me].forEach((_0x5d73b8) => {
        this.disposeWithMe(this._commandService["registerCommand"](_0x5d73b8));
      }),
      Pe.forEach((_0x280e68) => {
        this.disposeWithMe(
          this._shortcutService["registerShortcut"](_0x280e68),
        );
      }),
      this.disposeWithMe(
        (0, s.toDisposable)(() => {
          (this._removeRenderAdapter(_0xba6c6e), (this._adapter = null));
        }),
      ));
  }
  onReady() {
    (this._menuManagerService["mergeMenu"](nn),
      this.disposeWithMe(
        this._renderManagerService["registerRenderModule"](
          s.UniverInstanceType["UNIVER_BOARD"],
          yn,
        ),
      ),
      this.disposeWithMe(
        this._renderManagerService["registerRenderModule"](
          s.UniverInstanceType["UNIVER_BOARD"],
          _t,
        ),
      ),
      this.disposeWithMe(
        this._renderManagerService["registerRenderModule"](
          s.UniverInstanceType["UNIVER_BOARD"],
          wt,
        ),
      ),
      this.disposeWithMe(
        this._renderManagerService["registerRenderModule"](
          s.UniverInstanceType["UNIVER_BOARD"],
          pt,
        ),
      ));
  }
  _appendRenderAdapter(_0x4851a9) {
    var _0x8bc93f, _0x157048;
    let _0x3083ee = this._getBoardsUIConfig(),
      _0x298c76 = _0x3083ee.additionalRenderAdapters ?? [];
    _0x298c76.includes(_0x4851a9) ||
      this._configService["setConfig"](n.BOARDS_UI_PLUGIN_CONFIG_KEY, {
        ..._0x3083ee,
        additionalRenderAdapters: [..._0x298c76, _0x4851a9],
        toolbar: {
          ..._0x3083ee.toolbar,
          tools: {
            ...((_0x8bc93f = _0x3083ee.toolbar) == null
              ? undefined
              : _0x8bc93f.tools),
            [e.BoardToolType["Table"]]: bn(
              (_0x157048 = _0x3083ee.toolbar) == null ||
                (_0x157048 = _0x157048.tools) == null
                ? undefined
                : _0x157048[e.BoardToolType["Table"]],
            ),
          },
        },
      });
  }
  _removeRenderAdapter(_0x4a0f75) {
    var _0xaa450a;
    let _0x19114f = this._getBoardsUIConfig(),
      _0x2827b2 =
        (_0xaa450a = _0x19114f.additionalRenderAdapters) == null
          ? undefined
          : _0xaa450a.filter((_0x150cd1) => _0x150cd1 !== _0x4a0f75);
    this._configService["setConfig"](n.BOARDS_UI_PLUGIN_CONFIG_KEY, {
      ..._0x19114f,
      additionalRenderAdapters: _0x2827b2,
    });
  }
  _getBoardsUIConfig() {
    return (
      this._configService["getConfig"](n.BOARDS_UI_PLUGIN_CONFIG_KEY) ?? {}
    );
  }
});
(G($, "pluginName", "UNIVER_BOARDS_TABLE_UI_PLUGIN"),
  G($, "packageName", b),
  G($, "version", x),
  G($, "type", s.UniverInstanceType["UNIVER_BOARD"]),
  G($, "scopedDependencies", [
    [a.SlideTableSelectionService],
    [R],
    [yt],
    [o.IEditorUIService, { useClass: o.EditorUIService }],
  ]),
  ($ = vn =
    L(
      [
        (0, s.DependentOn)(
          r.UniverLicensePlugin,
          c.UniverRenderEnginePlugin,
          i.UniverSlidesTablePlugin,
          e.UniverBoardsPlugin,
          t.UniverBoardsTablePlugin,
          o.UniverSlidesUIPlugin,
          n.UniverBoardsUIPlugin,
          a.UniverSlidesTableUIPlugin,
        ),
        I(1, (0, s.Inject)(s.Injector)),
        I(2, s.IConfigService),
        I(3, c.IRenderManagerService),
        I(4, (0, s.Inject)(s.LocaleService)),
        I(5, (0, s.Inject)(s.ThemeService)),
        I(6, s.ICommandService),
        I(7, l.IMenuManagerService),
        I(8, l.IShortcutService),
      ],
      $,
    )));
function bn(_0x3c17b0) {
  return _0x3c17b0 === false
    ? false
    : typeof _0x3c17b0 != "object" || {
        ..._0x3c17b0,
        enabled: _0x3c17b0.enabled ?? true,
      };
}
Object.defineProperty(exports, "UniverBoardsTableUIPlugin", {
  enumerable: true,
  get: function () {
    return $;
  },
});
