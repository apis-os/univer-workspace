Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
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
  updateTable: t.UpdateBoardTableCommand["id"]
};
function C(var_core_value_sig9E81, var_core_value_sig8295) {
  return (0, a.resolveSlideTableContextMenuActions)(var_core_value_sig9E81, var_core_value_sig8295, S);
}
function w(var_core_value_sigA975, var_core_value_sig1263, var_core_value_sig457C) {
  return (0, a.buildSlideTableContextMenuCommand)(var_core_value_sigA975, var_core_value_sig1263, var_core_value_sig457C, S);
}
const T = P("board-table.operation.insert-row-above", a.SLIDE_TABLE_CONTEXT_MENU_ACTIONS["InsertRowAbove"]),
  E = P("board-table.operation.insert-row-below", a.SLIDE_TABLE_CONTEXT_MENU_ACTIONS["InsertRowBelow"]),
  D = P("board-table.operation.insert-column-left", a.SLIDE_TABLE_CONTEXT_MENU_ACTIONS["InsertColumnLeft"]),
  O = P("board-table.operation.insert-column-right", a.SLIDE_TABLE_CONTEXT_MENU_ACTIONS["InsertColumnRight"]),
  k = P("board-table.operation.delete-rows", a.SLIDE_TABLE_CONTEXT_MENU_ACTIONS["DeleteRows"]),
  ee = P("board-table.operation.delete-columns", a.SLIDE_TABLE_CONTEXT_MENU_ACTIONS["DeleteColumns"]),
  A = P("board-table.operation.merge-cells", a.SLIDE_TABLE_CONTEXT_MENU_ACTIONS["MergeCells"]),
  j = P("board-table.operation.unmerge-cells", a.SLIDE_TABLE_CONTEXT_MENU_ACTIONS["UnmergeCells"]),
  te = P("board-table.operation.distribute-rows", a.SLIDE_TABLE_CONTEXT_MENU_ACTIONS["DistributeRows"]),
  M = P("board-table.operation.distribute-columns", a.SLIDE_TABLE_CONTEXT_MENU_ACTIONS["DistributeColumns"]),
  N = [{
    title: "boards-table-ui.contextMenu.resetColor"
  }, {
    title: "white",
    color: "white"
  }, {
    title: "gray.100",
    color: "gray.100"
  }, {
    title: "primary.100",
    color: "primary.100"
  }, {
    title: "blue.100",
    color: "blue.100"
  }, {
    title: "green.100",
    color: "green.100"
  }, {
    title: "yellow.100",
    color: "yellow.100"
  }, {
    title: "red.100",
    color: "red.100"
  }],
  ne = [{
    title: "boards-table-ui.contextMenu.resetColor"
  }, {
    title: "gray.900",
    color: "gray.900"
  }, {
    title: "gray.500",
    color: "gray.500"
  }, {
    title: "red.600",
    color: "red.600"
  }, {
    title: "orange.600",
    color: "orange.600"
  }, {
    title: "yellow.700",
    color: "yellow.700"
  }, {
    title: "green.600",
    color: "green.600"
  }, {
    title: "blue.600",
    color: "blue.600"
  }, {
    title: "purple.600",
    color: "purple.600"
  }],
  re = xe("board-table.operation.border-all", i.SlideTableBorderPresetEnum["All"]),
  ie = xe("board-table.operation.border-outer", i.SlideTableBorderPresetEnum["Outer"]),
  ae = xe("board-table.operation.border-inner", i.SlideTableBorderPresetEnum["Inner"]),
  oe = xe("board-table.operation.border-none", i.SlideTableBorderPresetEnum["None"]),
  se = F("board-table.operation.align-left", {
    axis: "horizontal",
    value: s.HorizontalAlign["LEFT"]
  }),
  ce = F("board-table.operation.align-center", {
    axis: "horizontal",
    value: s.HorizontalAlign["CENTER"]
  }),
  le = F("board-table.operation.align-right", {
    axis: "horizontal",
    value: s.HorizontalAlign["RIGHT"]
  }),
  ue = F("board-table.operation.align-top", {
    axis: "vertical",
    value: s.VerticalAlign["TOP"]
  }),
  de = F("board-table.operation.align-middle", {
    axis: "vertical",
    value: s.VerticalAlign["MIDDLE"]
  }),
  fe = F("board-table.operation.align-bottom", {
    axis: "vertical",
    value: s.VerticalAlign["BOTTOM"]
  }),
  pe = N.map((var_core_value_sigA4E6, var_core_value_sig934F) => Se("board-table.operation.background-color-" + var_core_value_sig934F, var_core_value_sigA4E6)),
  me = ne.map((var_core_value_sig74A7, var_core_value_sig3685) => Ce("board-table.operation.text-color-" + var_core_value_sig3685, var_core_value_sig74A7)),
  he = be("board-table.operation.copy-table", n.BoardCopySelectionOperation["id"]),
  ge = be("board-table.operation.cut-table", n.BoardCutSelectionOperation["id"]),
  _e = {
    id: "board-table.operation.delete-table",
    type: s.CommandType["OPERATION"],
    async handler(var_core_value_sigC621) {
      let var_core_value_sig86D7 = var_core_value_sigC621.get(a.SlideTableSelectionService),
        var_core_value_sig431B = var_core_value_sig86D7.getSelection();
      if (!var_core_value_sig431B) return var_core_value_sigC621.get(s.ICommandService).executeCommand(n.BoardDeleteSelectionOperation["id"]);
      let var_core_value_sig5C7C = await var_core_value_sigC621.get(s.ICommandService).executeCommand(e.RemoveBoardElementsOperation["id"], {
        unitId: var_core_value_sig431B.unitId,
        subUnitId: var_core_value_sig431B.subUnitId,
        elementIds: [var_core_value_sig431B.elementId]
      });
      return var_core_value_sig5C7C && var_core_value_sig86D7.clear(), var_core_value_sig5C7C;
    }
  },
  ve = [T, E, D, O, k, ee, A, j, te, M, he, ge, _e, re, ie, ae, oe, se, ce, le, ue, de, fe, ...pe, ...me];
function ye(var_core_value_sig87E2, var_core_value_sig2E04) {
  var var_core_value_sig2EDD;
  let var_core_value_sig27D2 = De(var_core_value_sig87E2);
  return var_core_value_sig27D2 ? ((var_core_value_sig2EDD = C(var_core_value_sig27D2.table, var_core_value_sig27D2.selection).find(var_core_value_sig6CAD => var_core_value_sig6CAD.id === var_core_value_sig2E04)) == null ? undefined : var_core_value_sig2EDD.enabled) ?? false : false;
}
function P(var_core_value_sig355D, var_core_value_sig8B21) {
  return {
    id: var_core_value_sig355D,
    type: s.CommandType["OPERATION"],
    handler(var_core_value_sig8CF5, var_core_value_sigDDD7) {
      let var_core_value_sigB2CE = De(var_core_value_sig8CF5, var_core_value_sigDDD7 == null ? undefined : var_core_value_sigDDD7.selection);
      if (!var_core_value_sigB2CE) return false;
      let var_core_value_sig443C = w(var_core_value_sigB2CE.table, var_core_value_sigB2CE.selection, var_core_value_sig8B21);
      return var_core_value_sig443C ? var_core_value_sig8CF5.get(s.ICommandService).executeCommand(var_core_value_sig443C.commandId, var_core_value_sig443C.params) : false;
    }
  };
}
function be(var_core_value_sigEB36, var_core_value_sig5C27) {
  return {
    id: var_core_value_sigEB36,
    type: s.CommandType["OPERATION"],
    handler(var_core_value_sig39B1) {
      return var_core_value_sig39B1.get(s.ICommandService).executeCommand(var_core_value_sig5C27);
    }
  };
}
function xe(var_core_value_sigD494, var_core_value_sigBF6D) {
  return we(var_core_value_sigD494, (var_core_value_sig210D, var_core_value_sigB4B4) => (0, a.buildSlideTableBorderPresetPatch)(var_core_value_sig210D, var_core_value_sigB4B4, var_core_value_sigBF6D));
}
function F(var_core_value_sigD051, var_core_value_sig16D9) {
  return we(var_core_value_sigD051, (var_core_value_sigD407, var_core_value_sig63F3) => (0, a.buildSlideTableTextAlignPatch)(var_core_value_sigD407, var_core_value_sig63F3, var_core_value_sig16D9));
}
function Se(var_core_value_sigF378, var_core_value_sig5F6C) {
  return {
    ...we(var_core_value_sigF378, (var_core_value_sig6A71, var_core_value_sig3BF6, var_core_value_sig38CE) => (0, a.buildSlideTableBackgroundColorPatch)(var_core_value_sig6A71, var_core_value_sig3BF6, Te(var_core_value_sig38CE, var_core_value_sig5F6C.color))),
    title: var_core_value_sig5F6C.title
  };
}
function Ce(var_core_value_sig7E85, var_core_value_sigF204) {
  return {
    ...we(var_core_value_sig7E85, (var_core_value_sig62B7, var_core_value_sig37A8, var_core_value_sigA90D) => (0, a.buildSlideTableTextColorPatch)(var_core_value_sig62B7, var_core_value_sig37A8, Te(var_core_value_sigA90D, var_core_value_sigF204.color))),
    title: var_core_value_sigF204.title
  };
}
function we(var_core_value_sig7A15, var_core_value_sigEEA6) {
  return {
    id: var_core_value_sig7A15,
    type: s.CommandType["OPERATION"],
    handler(var_core_value_sig7A3C) {
      let var_core_value_sig0511 = Ee(var_core_value_sig7A3C);
      return var_core_value_sig0511 ? var_core_value_sig7A3C.get(s.ICommandService).executeCommand(t.UpdateBoardTableCommand["id"], {
        unitId: var_core_value_sig0511.unitId,
        tableId: var_core_value_sig0511.tableId,
        patch: var_core_value_sigEEA6(var_core_value_sig0511.table, var_core_value_sig0511.range, var_core_value_sig7A3C)
      }) : false;
    }
  };
}
function Te(var_core_value_sigEAE1, var_core_value_sigC69F) {
  if (!var_core_value_sigC69F) return;
  let var_core_value_sig0442 = var_core_value_sigEAE1.get(s.ThemeService);
  return var_core_value_sig0442.isValidThemeColor(var_core_value_sigC69F) ? var_core_value_sig0442.getColorFromTheme(var_core_value_sigC69F) : var_core_value_sigC69F;
}
function Ee(var_core_value_sig697A) {
  let var_core_value_sigDB65 = (0, a.getSlideTableSelectionContext)(var_core_value_sig697A.get(a.SlideTableSelectionService).getSelection());
  if (!var_core_value_sigDB65) return null;
  let var_core_value_sig045E = var_core_value_sig697A.get(i.SlideTableResourceService).getTable(var_core_value_sigDB65.unitId, var_core_value_sigDB65.tableId);
  return var_core_value_sig045E ? {
    ...var_core_value_sigDB65,
    table: var_core_value_sig045E
  } : null;
}
function De(var_core_value_sig4524, var_core_value_sig64D5) {
  let var_core_value_sig9678 = var_core_value_sig64D5 ?? var_core_value_sig4524.get(a.SlideTableSelectionService).getSelection(),
    var_core_value_sig5E74 = var_core_value_sig9678 == null ? undefined : var_core_value_sig9678.ranges[0];
  return !var_core_value_sig9678 || !var_core_value_sig5E74 ? null : {
    selection: var_core_value_sig9678,
    table: var_core_value_sig4524.get(i.SlideTableResourceService).getTable(var_core_value_sig9678.unitId, var_core_value_sig9678.tableId)
  };
}
function I(var_core_value_sig75FC, var_core_value_sig639A) {
  return function (var_core_value_sig1F44, var_core_value_sigCB04) {
    var_core_value_sig639A(var_core_value_sig1F44, var_core_value_sigCB04, var_core_value_sig75FC);
  };
}
function L(var_core_value_sig567C, var_core_value_sig825F, var_core_value_sig546D, var_core_value_sig8078) {
  var var_core_value_sigDCED = arguments.length,
    var_core_value_sig2829 = var_core_value_sigDCED < 3 ? var_core_value_sig825F : var_core_value_sig8078 === null ? var_core_value_sig8078 = Object.getOwnPropertyDescriptor(var_core_value_sig825F, var_core_value_sig546D) : var_core_value_sig8078,
    var_core_value_sig6EE2;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sig2829 = Reflect.decorate(var_core_value_sig567C, var_core_value_sig825F, var_core_value_sig546D, var_core_value_sig8078);else {
    for (var var_core_value_sig4CCC = var_core_value_sig567C.length - 1; var_core_value_sig4CCC >= 0; var_core_value_sig4CCC--) (var_core_value_sig6EE2 = var_core_value_sig567C[var_core_value_sig4CCC]) && (var_core_value_sig2829 = (var_core_value_sigDCED < 3 ? var_core_value_sig6EE2(var_core_value_sig2829) : var_core_value_sigDCED > 3 ? var_core_value_sig6EE2(var_core_value_sig825F, var_core_value_sig546D, var_core_value_sig2829) : var_core_value_sig6EE2(var_core_value_sig825F, var_core_value_sig546D)) || var_core_value_sig2829);
  }
  return var_core_value_sigDCED > 3 && var_core_value_sig2829 && Object.defineProperty(var_core_value_sig825F, var_core_value_sig546D, var_core_value_sig2829), var_core_value_sig2829;
}
const Oe = "FOCUSING_BOARD_TABLE";
let R = class extends a.TableKeyboardServiceBase {
  constructor(var_core_value_sig947E) {
    super(), this._contextService = var_core_value_sig947E;
  }
  setFocused(var_core_value_sig4545) {
    this._contextService["setContextValue"](Oe, var_core_value_sig4545);
  }
  canHandleNativeInput(var_core_value_sigF39A, var_core_value_sigF79C) {
    return this._contextService["getContextValue"]("FOCUSING_BOARD_TABLE") ? var_core_value_sigF79C != null && var_core_value_sigF79C.allowDocsEditor && (0, a.isSlideTableDocumentEditorTarget)(var_core_value_sigF39A.target) ? true : !(0, a.isSlideTableEditableTarget)(var_core_value_sigF39A.target) : false;
  }
};
R = L([I(0, s.IContextService)], R);
let ke = class extends s.Disposable {
  constructor(var_core_value_sig2E54, var_core_value_sig7658) {
    super(), this.renderContext = var_core_value_sig2E54, this.keyboardService = var_core_value_sig7658;
  }
};
ke = L([I(1, (0, s.Inject)(R))], ke);
const Ae = {
  id: "board-table.operation.keyboard",
  type: s.CommandType["OPERATION"],
  handler: (var_core_value_sig6E47, var_core_value_sigB64D, var_core_value_sig2407) => {
    if (!(var_core_value_sigB64D != null && var_core_value_sigB64D.action)) return false;
    let var_core_value_sigE4D0 = je(var_core_value_sig6E47, var_core_value_sig2407);
    return (var_core_value_sigE4D0 == null ? undefined : var_core_value_sigE4D0.keyboardService["handle"](var_core_value_sigB64D.action)) ?? false;
  }
};
function je(var_core_value_sigD5F1, var_core_value_sigBC19) {
  var var_core_value_sig4F3C, var_core_value_sig8D44;
  let var_core_value_sig1660 = typeof (var_core_value_sigBC19 == null ? undefined : var_core_value_sigBC19.unitId) == "string" ? var_core_value_sigBC19.unitId : (var_core_value_sig4F3C = var_core_value_sigD5F1.get(s.IUniverInstanceService).getCurrentUnitOfType(s.UniverInstanceType["UNIVER_BOARD"])) == null ? undefined : var_core_value_sig4F3C.getUnitId();
  return var_core_value_sig1660 ? ((var_core_value_sig8D44 = var_core_value_sigD5F1.get(c.IRenderManagerService).getRenderUnitById(var_core_value_sig1660)) == null ? undefined : var_core_value_sig8D44.with(ke)) ?? null : null;
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
    backspace: l.KeyCode["BACKSPACE"]
  },
  Pe = (0, a.buildSlideTableKeyboardShortcutBindings)(Ne).map(({
    binding: var_core_value_sigEE7B,
    action: var_core_value_sig44DF
  }) => Fe(var_core_value_sigEE7B, var_core_value_sig44DF));
function Fe(var_core_value_sig7E48, var_core_value_sig7B9E) {
  return {
    id: Ae.id,
    binding: var_core_value_sig7E48,
    priority: 130,
    preconditions: Ie,
    staticParameters: {
      action: var_core_value_sig7B9E
    }
  };
}
function Ie(var_core_value_sig5C3B) {
  return !!var_core_value_sig5C3B.getContextValue(Oe);
}
const Le = {};
function Re(var_core_value_sig4002) {
  return (0, a.resolveSlideTableToolbarActions)(var_core_value_sig4002, {
    mergeCells: t.MergeBoardTableCellsCommand["id"],
    unmergeCells: t.UnmergeBoardTableCellsCommand["id"],
    setCellStyle: t.SetBoardTableCellStyleCommand["id"],
    setBorderPreset: t.SetBoardTableBorderPresetCommand["id"]
  });
}
function ze(var_core_value_sig4153, var_core_value_sig2825) {
  return {
    actions: Re(var_core_value_sig2825),
    mergeState: (0, a.resolveSlideTableMergeToolbarAction)(var_core_value_sig4153, var_core_value_sig2825),
    values: (0, a.resolveSlideTableSelectionValues)(var_core_value_sig4153, var_core_value_sig2825 == null ? undefined : var_core_value_sig2825.ranges[0])
  };
}
function Be(var_core_value_sig5FD0, var_core_value_sigA7E3) {
  return var_core_value_sig5FD0 && (var_core_value_sigA7E3 == null ? undefined : var_core_value_sigA7E3.action) === "unmerge" ? {
    commandId: t.UnmergeBoardTableCellsCommand["id"],
    params: {
      unitId: var_core_value_sig5FD0.unitId,
      tableId: var_core_value_sig5FD0.tableId,
      row: var_core_value_sigA7E3.range["startRow"],
      column: var_core_value_sigA7E3.range["startColumn"]
    }
  } : (0, a.buildSlideTableMergeToolbarCommand)(var_core_value_sig5FD0, var_core_value_sigA7E3, {
    mergeCells: t.MergeBoardTableCellsCommand["id"],
    unmergeCells: t.UnmergeBoardTableCellsCommand["id"]
  });
}
function Ve(var_core_value_sigA784, var_core_value_sig4406) {
  return (0, a.buildSlideTableDeleteToolbarCommand)(var_core_value_sigA784, var_core_value_sig4406, {
    deleteRows: t.DeleteBoardTableRowsCommand["id"],
    deleteColumns: t.DeleteBoardTableColumnsCommand["id"]
  });
}
const He = l.FONT_SIZE_LIST["map"](var_core_value_sig6806 => ({
    label: var_core_value_sig6806.label,
    value: String(var_core_value_sig6806.value)
  })),
  z = "\n univer-flex univer-h-6 univer-min-w-9 univer-items-center univer-justify-center univer-gap-1\n univer-rounded-md univer-border-none univer-bg-transparent univer-px-1.5 univer-text-sm\n univer-text-gray-700 univer-transition-colors\n hover:univer-bg-gray-100\n dark:!univer-text-gray-100\n dark:hover:!univer-bg-gray-700\n",
  B = "univer-bg-gray-100 univer-text-primary-600 dark:!univer-bg-gray-700 dark:!univer-text-primary-300",
  Ue = [0, 1, 2, 3, 4, 6],
  We = [{
    labelKey: "boards-table-ui.editorToolbar.borderStyleSolid",
    value: i.SlideTableBorderDashEnum["Solid"]
  }, {
    labelKey: "boards-table-ui.editorToolbar.borderStyleDash",
    value: i.SlideTableBorderDashEnum["Dash"]
  }, {
    labelKey: "boards-table-ui.editorToolbar.borderStyleDot",
    value: i.SlideTableBorderDashEnum["Dot"]
  }, {
    labelKey: "boards-table-ui.editorToolbar.borderStyleDashDot",
    value: i.SlideTableBorderDashEnum["DashDot"]
  }, {
    labelKey: "boards-table-ui.editorToolbar.noBorder",
    value: i.SlideTableBorderDashEnum["None"]
  }],
  Ge = [{
    labelKey: "boards-table-ui.editorToolbar.borderPresetAll",
    preset: i.SlideTableBorderPresetEnum["All"]
  }, {
    labelKey: "boards-table-ui.editorToolbar.borderPresetInner",
    preset: i.SlideTableBorderPresetEnum["Inner"]
  }, {
    labelKey: "boards-table-ui.editorToolbar.borderPresetOuter",
    preset: i.SlideTableBorderPresetEnum["Outer"]
  }, {
    labelKey: "boards-table-ui.editorToolbar.borderPresetTop",
    preset: i.SlideTableBorderPresetEnum["Top"]
  }, {
    labelKey: "boards-table-ui.editorToolbar.borderPresetBottom",
    preset: i.SlideTableBorderPresetEnum["Bottom"]
  }, {
    labelKey: "boards-table-ui.editorToolbar.borderPresetLeft",
    preset: i.SlideTableBorderPresetEnum["Left"]
  }, {
    labelKey: "boards-table-ui.editorToolbar.borderPresetRight",
    preset: i.SlideTableBorderPresetEnum["Right"]
  }, {
    labelKey: "boards-table-ui.editorToolbar.borderPresetInnerHorizontal",
    preset: i.SlideTableBorderPresetEnum["InnerHorizontal"]
  }, {
    labelKey: "boards-table-ui.editorToolbar.borderPresetInnerVertical",
    preset: i.SlideTableBorderPresetEnum["InnerVertical"]
  }, {
    labelKey: "boards-table-ui.editorToolbar.noBorder",
    preset: i.SlideTableBorderPresetEnum["None"]
  }],
  Ke = {
    [i.SlideTableBorderPresetEnum["All"]]: f.AllBorderIcon,
    [i.SlideTableBorderPresetEnum["Inner"]]: f.InnerBorderDoubleIcon,
    [i.SlideTableBorderPresetEnum["Outer"]]: f.OuterBorderDoubleIcon,
    [i.SlideTableBorderPresetEnum["Top"]]: f.UpBorderDoubleIcon,
    [i.SlideTableBorderPresetEnum["Bottom"]]: f.DownBorderDoubleIcon,
    [i.SlideTableBorderPresetEnum["Left"]]: f.LeftBorderDoubleIcon,
    [i.SlideTableBorderPresetEnum["Right"]]: f.RightBorderDoubleIcon,
    [i.SlideTableBorderPresetEnum["InnerHorizontal"]]: f.HorizontalBorderDoubleIcon,
    [i.SlideTableBorderPresetEnum["InnerVertical"]]: f.VerticalBorderDoubleIcon,
    [i.SlideTableBorderPresetEnum["None"]]: f.NoBorderIcon
  },
  qe = {
    colorChannel1: "#9ca3af"
  },
  V = "\n univer-rounded-lg univer-bg-gray-0 univer-shadow-lg dark:!univer-bg-gray-900\n";
function Je(var_core_value_sigD4AA) {
  let var_core_value_sigDC41 = (0, l.useDependency)(s.LocaleService);
  return (0, h.jsx)(a.TableToolbarDropdownInteractionGuard, {
    onOpenChange: var_core_value_sigD4AA.onOpenChange,
    children: ({
      handleOpenChange: var_core_value_sigDCF5,
      markInternalInteraction: var_core_value_sigC786
    }) => (0, h.jsx)(d.Dropdown, {
      open: var_core_value_sigD4AA.open,
      onOpenChange: var_core_value_sigDCF5,
      overlay: (0, h.jsx)("section", {
        className: (0, d.clsx)(V, d.borderClassName),
        "data-u-comp": "board-table-floating-toolbar-popup",
        onMouseDown: var_core_value_sigC80B => {
          var_core_value_sigC786(), (0, u.keepFloatingToolbarPanelInteraction)(var_core_value_sigC80B);
        },
        onPointerDown: var_core_value_sig284F => {
          var_core_value_sigC786(), (0, u.keepFloatingToolbarPanelInteraction)(var_core_value_sig284F);
        },
        children: var_core_value_sigD4AA.children
      }),
      children: (0, h.jsx)("span", {
        children: (0, h.jsx)(d.Tooltip, {
          title: var_core_value_sigDC41.t("boards-table-ui.editorToolbar.tableTheme"),
          placement: "bottom",
          children: (0, h.jsxs)(d.Button, {
            size: "small",
            variant: "ghost",
            "data-toolbar-item": "table-theme",
            "aria-expanded": var_core_value_sigD4AA.open,
            "aria-label": var_core_value_sigDC41.t("boards-table-ui.editorToolbar.tableTheme"),
            title: var_core_value_sigDC41.t("boards-table-ui.editorToolbar.tableTheme"),
            onMouseDown: u.keepFloatingToolbarPanelInteraction,
            onPointerDown: u.keepFloatingToolbarPanelInteraction,
            className: (0, d.clsx)(z, {
              [B]: var_core_value_sigD4AA.open
            }),
            children: [(0, h.jsx)(f.PaintIcon, {}), (0, h.jsx)(f.MoreDownIcon, {
              className: "univer-text-xs"
            })]
          })
        })
      })
    })
  });
}
function H(var_core_value_sigFB47) {
  return (0, h.jsx)("div", {
    className: "univer-flex univer-h-7 univer-flex-nowrap univer-items-center univer-gap-1 univer-px-1",
    children: var_core_value_sigFB47.children
  });
}
function Ye(var_core_value_sig9B3D) {
  return (0, h.jsx)(d.Tooltip, {
    title: var_core_value_sig9B3D.title,
    placement: "bottom",
    children: (0, h.jsx)("span", {
      children: (0, h.jsx)(d.Button, {
        size: "small",
        variant: "ghost",
        "data-toolbar-item": var_core_value_sig9B3D["data-toolbar-item"],
        "aria-label": var_core_value_sig9B3D.title,
        title: var_core_value_sig9B3D.title,
        className: "univer-flex univer-size-7 univer-items-center univer-justify-center univer-rounded-md univer-border-none univer-bg-transparent univer-p-0 univer-text-gray-700 univer-transition-colors hover:univer-bg-gray-100 dark:!univer-text-gray-100 dark:hover:!univer-bg-gray-700",
        onClick: var_core_value_sigC0D9 => {
          var_core_value_sigC0D9.preventDefault(), var_core_value_sig9B3D.onClick();
        },
        onMouseDown: u.keepFloatingToolbarPanelInteraction,
        onPointerDown: u.keepFloatingToolbarPanelInteraction,
        children: var_core_value_sig9B3D.children
      })
    })
  });
}
function Xe(var_core_value_sigC1CF) {
  let [var_core_value_sigEE12, var_core_value_sigD70C] = (0, p.useState)(false),
    var_core_value_sigF047 = var_core_value_sigC1CF.open ?? var_core_value_sigEE12;
  return (0, h.jsx)(a.TableToolbarDropdownInteractionGuard, {
    onOpenChange: var_core_value_sigC1CF.onOpenChange ?? var_core_value_sigD70C,
    children: ({
      handleOpenChange: var_core_value_sigF051,
      markInternalInteraction: var_core_value_sig5825
    }) => (0, h.jsx)(d.Dropdown, {
      open: var_core_value_sigF047,
      onOpenChange: var_core_value_sigF051,
      overlay: (0, h.jsx)("div", {
        className: (0, d.clsx)(V, "univer-p-3", d.borderClassName),
        "data-u-comp": "board-table-floating-toolbar-popup",
        onMouseDown: var_core_value_sigE154 => {
          var_core_value_sig5825(), (0, u.keepFloatingToolbarPanelInteraction)(var_core_value_sigE154);
        },
        onPointerDown: var_core_value_sig4632 => {
          var_core_value_sig5825(), (0, u.keepFloatingToolbarPanelInteraction)(var_core_value_sig4632);
        },
        children: (0, h.jsx)(d.ColorPicker, {
          value: var_core_value_sigC1CF.color,
          onChange: var_core_value_sigC1CF.onChange
        })
      }),
      children: (0, h.jsx)("span", {
        children: (0, h.jsx)(d.Tooltip, {
          title: var_core_value_sigC1CF.title,
          placement: "bottom",
          children: (0, h.jsxs)(d.Button, {
            size: "small",
            variant: "ghost",
            "data-toolbar-item": var_core_value_sigC1CF["data-toolbar-item"],
            "aria-expanded": var_core_value_sigF047,
            "aria-label": var_core_value_sigC1CF.title,
            className: (0, d.clsx)(z, {
              [B]: var_core_value_sigF047
            }),
            onMouseDown: u.keepFloatingToolbarPanelInteraction,
            onPointerDown: u.keepFloatingToolbarPanelInteraction,
            children: [var_core_value_sigC1CF.children, (0, h.jsx)("span", {
              className: "univer-h-3 univer-w-3 univer-rounded-sm univer-border univer-border-solid univer-border-gray-300 dark:!univer-border-gray-600",
              style: {
                backgroundColor: var_core_value_sigC1CF.color
              }
            }), (0, h.jsx)(f.MoreDownIcon, {
              className: "univer-text-xs"
            })]
          })
        })
      })
    })
  });
}
function Ze(var_core_value_sigC2F9) {
  return (0, h.jsx)(a.TableToolbarDropdownInteractionGuard, {
    onOpenChange: var_core_value_sigC2F9.onOpenChange,
    children: ({
      handleOpenChange: var_core_value_sig4EB7,
      markInternalInteraction: var_core_value_sig73AF
    }) => (0, h.jsx)(d.Dropdown, {
      open: var_core_value_sigC2F9.open,
      onOpenChange: var_core_value_sig4EB7,
      overlay: (0, h.jsx)("div", {
        className: (0, d.clsx)(V, "univer-p-3", d.borderClassName),
        "data-u-comp": "board-table-floating-toolbar-popup",
        onMouseDown: var_core_value_sig12F2 => {
          var_core_value_sig73AF(), (0, u.keepFloatingToolbarPanelInteraction)(var_core_value_sig12F2);
        },
        onPointerDown: var_core_value_sig2259 => {
          var_core_value_sig73AF(), (0, u.keepFloatingToolbarPanelInteraction)(var_core_value_sig2259);
        },
        children: (0, h.jsx)(d.ColorPicker, {
          value: var_core_value_sigC2F9.color,
          onChange: var_core_value_sigC2F9.onChange
        })
      }),
      children: (0, h.jsx)("span", {
        children: (0, h.jsx)(d.Tooltip, {
          title: var_core_value_sigC2F9.title,
          placement: "bottom",
          children: (0, h.jsxs)(d.Button, {
            size: "small",
            variant: "ghost",
            "data-toolbar-item": var_core_value_sigC2F9["data-toolbar-item"],
            "aria-expanded": var_core_value_sigC2F9.open,
            "aria-label": var_core_value_sigC2F9.title,
            className: (0, d.clsx)(z, {
              [B]: var_core_value_sigC2F9.open
            }),
            onMouseDown: u.keepFloatingToolbarPanelInteraction,
            onPointerDown: u.keepFloatingToolbarPanelInteraction,
            children: [var_core_value_sigC2F9.icon === "font" ? (0, h.jsx)(f.FontColorDoubleIcon, {
              className: "univer-fill-primary-600",
              extend: {
                colorChannel1: var_core_value_sigC2F9.color
              }
            }) : (0, h.jsx)(f.PaintBucketDoubleIcon, {
              className: "univer-fill-primary-600",
              extend: {
                colorChannel1: var_core_value_sigC2F9.color
              }
            }), (0, h.jsx)(f.MoreDownIcon, {
              className: "univer-text-xs"
            })]
          })
        })
      })
    })
  });
}
function Qe(var_core_value_sig1F51) {
  let var_core_value_sig29F5 = (0, l.useDependency)(s.LocaleService),
    var_core_value_sig5A51 = We.find(var_core_value_sig548A => var_core_value_sig548A.value === var_core_value_sig1F51.dash) ?? We[0];
  return (0, h.jsx)(a.TableToolbarDropdownInteractionGuard, {
    onOpenChange: var_core_value_sig1F51.onOpenChange,
    children: ({
      handleOpenChange: var_core_value_sigE026,
      markInternalInteraction: var_core_value_sig339E
    }) => (0, h.jsx)(d.Dropdown, {
      open: var_core_value_sig1F51.open,
      onOpenChange: var_core_value_sigE026,
      overlay: (0, h.jsxs)("section", {
        className: (0, d.clsx)(V, "univer-grid univer-gap-2 univer-p-2", d.borderClassName),
        "data-u-comp": "board-table-floating-toolbar-popup",
        onMouseDown: var_core_value_sig9E2F => {
          var_core_value_sig339E(), (0, u.keepFloatingToolbarPanelInteraction)(var_core_value_sig9E2F);
        },
        onPointerDown: var_core_value_sigD082 => {
          var_core_value_sig339E(), (0, u.keepFloatingToolbarPanelInteraction)(var_core_value_sigD082);
        },
        children: [(0, h.jsx)("div", {
          className: "univer-grid univer-grid-cols-5 univer-gap-1",
          children: var_core_value_sig1F51.presets["map"](({
            labelKey: var_core_value_sigDBB7,
            preset: var_core_value_sigD0A8
          }) => {
            let var_core_value_sigF4B9 = Ke[var_core_value_sigD0A8];
            return (0, h.jsx)(d.Tooltip, {
              title: var_core_value_sig29F5.t(var_core_value_sigDBB7),
              placement: "bottom",
              children: (0, h.jsx)(d.Button, {
                size: "small",
                variant: "ghost",
                "aria-label": var_core_value_sig29F5.t(var_core_value_sigDBB7),
                className: "univer-flex univer-size-7 univer-items-center univer-justify-center univer-rounded univer-border-none univer-bg-transparent univer-p-0 univer-text-primary-600 hover:univer-bg-gray-100 dark:hover:!univer-bg-gray-800",
                onClick: () => {
                  var_core_value_sig1F51.onSelectPreset(var_core_value_sigD0A8), var_core_value_sig1F51.onOpenChange(false);
                },
                onMouseDown: u.keepFloatingToolbarPanelInteraction,
                onPointerDown: u.keepFloatingToolbarPanelInteraction,
                children: (0, h.jsx)(var_core_value_sigF4B9, {
                  className: "univer-size-4\x20univer-text-current",
                  extend: qe
                })
              })
            }, var_core_value_sigD0A8);
          })
        }), (0, h.jsx)(d.Separator, {}), (0, h.jsxs)("div", {
          className: "univer-flex univer-items-center univer-gap-2",
          children: [(0, h.jsx)(Xe, {
            "data-toolbar-item": "border-color",
            title: var_core_value_sig29F5.t("boards-table-ui.editorToolbar.tableBorderColor"),
            color: var_core_value_sig1F51.color,
            onChange: var_core_value_sig1F51.onChangeColor,
            children: (0, h.jsx)(f.PaintBucketDoubleIcon, {
              extend: {
                colorChannel1: var_core_value_sig1F51.color
              }
            })
          }), (0, h.jsx)($e, {
            title: var_core_value_sig29F5.t("boards-table-ui.editorToolbar.borderWidth"),
            value: String(var_core_value_sig1F51.width),
            options: Ue.map(var_core_value_sig5CEE => ({
              label: var_core_value_sig5CEE === 0 ? var_core_value_sig29F5.t("boards-table-ui.editorToolbar.noBorder") : var_core_value_sig5CEE + "px",
              value: String(var_core_value_sig5CEE),
              icon: (0, h.jsx)("span", {
                className: "univer-block univer-w-5 univer-rounded-full univer-bg-current",
                style: {
                  height: Math.max(1, var_core_value_sig5CEE || 1)
                }
              })
            })),
            onChange: var_core_value_sigE92A => var_core_value_sig1F51.onChangeWidth(Number(var_core_value_sigE92A)),
            children: (0, h.jsxs)("span", {
              className: "univer-text-xs",
              children: [var_core_value_sig1F51.width, "px"]
            })
          }), (0, h.jsx)($e, {
            title: var_core_value_sig29F5.t("boards-table-ui.editorToolbar.borderStyle"),
            value: var_core_value_sig1F51.dash,
            options: We.map(var_core_value_sig362B => ({
              label: var_core_value_sig29F5.t(var_core_value_sig362B.labelKey),
              value: var_core_value_sig362B.value,
              icon: (0, h.jsx)(nt, {
                dash: var_core_value_sig362B.value
              })
            })),
            onChange: var_core_value_sig1F51.onChangeDash,
            children: var_core_value_sig5A51 ? (0, h.jsx)(nt, {
              dash: var_core_value_sig5A51.value
            }) : (0, h.jsx)(f.AllBorderIcon, {})
          })]
        })]
      }),
      children: (0, h.jsx)("span", {
        children: (0, h.jsx)(d.Tooltip, {
          title: var_core_value_sig29F5.t("boards-table-ui.editorToolbar.border"),
          placement: "bottom",
          children: (0, h.jsxs)(d.Button, {
            size: "small",
            variant: "ghost",
            "data-toolbar-item": var_core_value_sig1F51["data-toolbar-item"],
            "aria-expanded": var_core_value_sig1F51.open,
            "aria-label": var_core_value_sig29F5.t("boards-table-ui.editorToolbar.border"),
            title: var_core_value_sig29F5.t("boards-table-ui.editorToolbar.border"),
            onMouseDown: u.keepFloatingToolbarPanelInteraction,
            onPointerDown: u.keepFloatingToolbarPanelInteraction,
            className: (0, d.clsx)(z, {
              [B]: var_core_value_sig1F51.open
            }),
            children: [(0, h.jsx)(f.AllBorderIcon, {}), (0, h.jsx)(f.MoreDownIcon, {
              className: "univer-text-xs"
            })]
          })
        })
      })
    })
  });
}
function $e(var_core_value_sigF1D1) {
  let [var_core_value_sig370E, var_core_value_sigDE14] = (0, p.useState)(false),
    var_core_value_sig02CB = var_core_value_sigF1D1.options["find"](var_core_value_sig7550 => var_core_value_sig7550.value === var_core_value_sigF1D1.value) ?? var_core_value_sigF1D1.options[0];
  return var_core_value_sig02CB ? (0, h.jsx)(a.TableToolbarDropdownInteractionGuard, {
    onOpenChange: var_core_value_sigDE14,
    children: ({
      handleOpenChange: var_core_value_sig2983,
      markInternalInteraction: var_core_value_sigE1B0
    }) => (0, h.jsx)(d.Dropdown, {
      open: var_core_value_sig370E,
      onOpenChange: var_core_value_sig2983,
      overlay: (0, h.jsx)("div", {
        className: (0, d.clsx)(V, "univer-min-w-32 univer-p-1", d.borderClassName),
        "data-u-comp": "board-table-floating-toolbar-popup",
        onMouseDown: var_core_value_sig5CA5 => {
          var_core_value_sigE1B0(), (0, u.keepFloatingToolbarPanelInteraction)(var_core_value_sig5CA5);
        },
        onPointerDown: var_core_value_sigE90F => {
          var_core_value_sigE1B0(), (0, u.keepFloatingToolbarPanelInteraction)(var_core_value_sigE90F);
        },
        children: var_core_value_sigF1D1.options["map"](var_core_value_sigEFD4 => (0, h.jsxs)(d.Button, {
          size: "small",
          variant: "ghost",
          onClick: () => {
            var_core_value_sigF1D1.onChange(var_core_value_sigEFD4.value), var_core_value_sigDE14(false);
          },
          onMouseDown: u.keepFloatingToolbarPanelInteraction,
          onPointerDown: u.keepFloatingToolbarPanelInteraction,
          className: (0, d.clsx)("univer-flex univer-h-8 univer-w-full univer-items-center univer-gap-2 univer-rounded-md univer-border-none univer-bg-transparent univer-px-2 univer-text-left univer-text-sm univer-text-gray-700 univer-transition-colors hover:univer-bg-gray-100 dark:!univer-text-gray-100 dark:hover:!univer-bg-gray-800", {
            "univer-bg-primary-50\x20univer-text-primary-600\x20dark:!univer-bg-gray-800\x20dark:!univer-text-primary-300": var_core_value_sigEFD4.value === var_core_value_sigF1D1.value
          }),
          children: [(0, h.jsx)("span", {
            className: "univer-flex univer-size-4 univer-items-center univer-justify-center",
            children: var_core_value_sigEFD4.icon
          }), (0, h.jsx)("span", {
            className: "univer-flex-1",
            children: var_core_value_sigEFD4.label
          })]
        }, var_core_value_sigEFD4.value))
      }),
      children: (0, h.jsx)("span", {
        children: (0, h.jsx)(d.Tooltip, {
          title: var_core_value_sigF1D1.title,
          placement: "bottom",
          children: (0, h.jsxs)(d.Button, {
            size: "small",
            variant: "ghost",
            "aria-expanded": var_core_value_sig370E,
            "aria-label": var_core_value_sigF1D1.title,
            title: var_core_value_sigF1D1.title,
            onMouseDown: u.keepFloatingToolbarPanelInteraction,
            onPointerDown: u.keepFloatingToolbarPanelInteraction,
            className: (0, d.clsx)(z, {
              [B]: var_core_value_sig370E
            }),
            children: [var_core_value_sigF1D1.children ?? var_core_value_sig02CB.icon, (0, h.jsx)(f.MoreDownIcon, {
              className: "univer-text-xs"
            })]
          })
        })
      })
    })
  }) : null;
}
function et(var_core_value_sig6CBB) {
  let var_core_value_sig68DA = (0, l.useDependency)(s.LocaleService);
  return (0, h.jsx)(a.TableToolbarDropdownInteractionGuard, {
    onOpenChange: var_core_value_sig6CBB.onOpenChange,
    children: ({
      handleOpenChange: var_core_value_sigD4FF,
      markInternalInteraction: var_core_value_sig1E5B
    }) => (0, h.jsx)(d.Dropdown, {
      open: var_core_value_sig6CBB.open,
      onOpenChange: var_core_value_sigD4FF,
      overlay: (0, h.jsxs)("section", {
        className: (0, d.clsx)(V, "univer-grid univer-gap-2 univer-p-2", d.borderClassName),
        "data-u-comp": "board-table-floating-toolbar-popup",
        onMouseDown: var_core_value_sig861B => {
          var_core_value_sig1E5B(), (0, u.keepFloatingToolbarPanelInteraction)(var_core_value_sig861B);
        },
        onPointerDown: var_core_value_sig5237 => {
          var_core_value_sig1E5B(), (0, u.keepFloatingToolbarPanelInteraction)(var_core_value_sig5237);
        },
        children: [(0, h.jsxs)("div", {
          className: "univer-flex univer-items-center univer-gap-2",
          children: [(0, h.jsx)(U, {
            active: var_core_value_sig6CBB.values["bold"],
            title: var_core_value_sig68DA.t("boards-table-ui.editorToolbar.bold"),
            onClick: () => var_core_value_sig6CBB.onToggleStyle({
              bl: var_core_value_sig6CBB.values["bold"] ? s.BooleanNumber["FALSE"] : s.BooleanNumber["TRUE"]
            }),
            children: (0, h.jsx)(f.BoldIcon, {})
          }), (0, h.jsx)(U, {
            active: var_core_value_sig6CBB.values["italic"],
            title: var_core_value_sig68DA.t("boards-table-ui.editorToolbar.italic"),
            onClick: () => var_core_value_sig6CBB.onToggleStyle({
              it: var_core_value_sig6CBB.values["italic"] ? s.BooleanNumber["FALSE"] : s.BooleanNumber["TRUE"]
            }),
            children: (0, h.jsx)(f.ItalicIcon, {})
          }), (0, h.jsx)(U, {
            active: var_core_value_sig6CBB.values["underline"],
            title: var_core_value_sig68DA.t("boards-table-ui.editorToolbar.underline"),
            onClick: () => var_core_value_sig6CBB.onToggleStyle({
              ul: {
                s: var_core_value_sig6CBB.values["underline"] ? s.BooleanNumber["FALSE"] : s.BooleanNumber["TRUE"]
              }
            }),
            children: (0, h.jsx)(f.UnderlineIcon, {})
          }), (0, h.jsx)(U, {
            active: var_core_value_sig6CBB.values["strike"],
            title: var_core_value_sig68DA.t("boards-table-ui.editorToolbar.strikethrough"),
            onClick: () => var_core_value_sig6CBB.onToggleStyle({
              st: {
                s: var_core_value_sig6CBB.values["strike"] ? s.BooleanNumber["FALSE"] : s.BooleanNumber["TRUE"]
              }
            }),
            children: (0, h.jsx)(f.StrikethroughIcon, {})
          })]
        }), (0, h.jsx)(d.Separator, {}), (0, h.jsxs)("div", {
          className: "univer-flex\x20univer-items-center\x20univer-gap-2",
          children: [(0, h.jsx)("span", {
            className: "univer-sr-only",
            children: var_core_value_sig68DA.t("boards-table-ui.editorToolbar.horizontalAlign")
          }), var_core_value_sig6CBB.horizontalAlignOptions["map"](var_core_value_sigBB00 => (0, h.jsx)(U, {
            active: var_core_value_sig6CBB.values["horizontalAlign"] === var_core_value_sigBB00.value,
            title: var_core_value_sig68DA.t(var_core_value_sigBB00.labelKey),
            onClick: () => var_core_value_sig6CBB.onHorizontalAlign(var_core_value_sigBB00.value),
            children: var_core_value_sigBB00.icon
          }, var_core_value_sigBB00.value))]
        }), (0, h.jsx)(d.Separator, {}), (0, h.jsxs)("div", {
          className: "univer-flex univer-items-center univer-gap-2",
          children: [(0, h.jsx)("span", {
            className: "univer-sr-only",
            children: var_core_value_sig68DA.t("boards-table-ui.editorToolbar.verticalAlign")
          }), var_core_value_sig6CBB.verticalAlignOptions["map"](var_core_value_sig7E54 => (0, h.jsx)(U, {
            active: var_core_value_sig6CBB.values["verticalAlign"] === var_core_value_sig7E54.value,
            title: var_core_value_sig68DA.t(var_core_value_sig7E54.labelKey),
            onClick: () => var_core_value_sig6CBB.onVerticalAlign(var_core_value_sig7E54.value),
            children: var_core_value_sig7E54.icon
          }, var_core_value_sig7E54.value))]
        })]
      }),
      children: (0, h.jsx)("span", {
        children: (0, h.jsx)(d.Tooltip, {
          title: var_core_value_sig68DA.t("boards-table-ui.editorToolbar.textFormat"),
          placement: "bottom",
          children: (0, h.jsxs)(d.Button, {
            size: "small",
            variant: "ghost",
            "data-toolbar-item": var_core_value_sig6CBB["data-toolbar-item"],
            "aria-expanded": var_core_value_sig6CBB.open,
            "aria-label": var_core_value_sig68DA.t("boards-table-ui.editorToolbar.textFormat"),
            className: (0, d.clsx)(z, {
              [B]: var_core_value_sig6CBB.open
            }),
            onMouseDown: u.keepFloatingToolbarPanelInteraction,
            onPointerDown: u.keepFloatingToolbarPanelInteraction,
            children: [(0, h.jsx)(f.TextIcon, {}), (0, h.jsx)(f.MoreDownIcon, {
              className: "univer-text-xs"
            })]
          })
        })
      })
    })
  });
}
function U(var_core_value_sig64D8) {
  return (0, h.jsx)(d.Tooltip, {
    title: var_core_value_sig64D8.title,
    placement: "bottom",
    children: (0, h.jsx)(d.Button, {
      size: "small",
      variant: "ghost",
      "aria-label": var_core_value_sig64D8.title,
      className: (0, d.clsx)("univer-flex\x20univer-size-7\x20univer-items-center\x20univer-justify-center\x20univer-rounded-md\x20univer-border-none\x20univer-bg-transparent\x20univer-p-0\x20univer-text-gray-700\x20univer-transition-colors\x20hover:univer-bg-gray-100\x20dark:!univer-text-gray-100\x20dark:hover:!univer-bg-gray-800", {
        "univer-bg-primary-50\x20univer-text-primary-600\x20dark:!univer-bg-gray-800\x20dark:!univer-text-primary-300": var_core_value_sig64D8.active
      }),
      onClick: var_core_value_sigB680 => {
        var_core_value_sigB680.preventDefault(), var_core_value_sig64D8.onClick();
      },
      onMouseDown: u.keepFloatingToolbarPanelInteraction,
      onPointerDown: u.keepFloatingToolbarPanelInteraction,
      children: var_core_value_sig64D8.children
    })
  });
}
function tt(var_core_value_sigD755) {
  return (0, h.jsx)(d.Tooltip, {
    title: var_core_value_sigD755.title,
    placement: "bottom",
    children: (0, h.jsx)("span", {
      "data-toolbar-item": var_core_value_sigD755["data-toolbar-item"],
      onMouseDown: u.keepFloatingToolbarPanelInteraction,
      onPointerDown: u.keepFloatingToolbarPanelInteraction,
      children: (0, h.jsx)(d.Select, {
        borderless: true,
        className: (0, d.clsx)("!univer-h-6 !univer-min-w-0 !univer-rounded-md !univer-border-transparent !univer-bg-transparent !univer-px-1.5", var_core_value_sigD755.widthClassName),
        value: var_core_value_sigD755.value,
        options: var_core_value_sigD755.options,
        onChange: var_core_value_sigD755.onChange
      })
    })
  });
}
function nt(var_core_value_sigF897) {
  let var_core_value_sigA578 = (0, l.useDependency)(s.LocaleService),
    var_core_value_sig0260 = var_core_value_sigF897.dash === "dot" ? "1 3" : var_core_value_sigF897.dash === "dash" ? "4 3" : var_core_value_sigF897.dash === "dashDot" ? "4 2 1 2" : undefined;
  return var_core_value_sigF897.dash === "none" ? (0, h.jsx)("span", {
    className: "univer-text-xs",
    children: var_core_value_sigA578.t("boards-table-ui.editorToolbar.none")
  }) : (0, h.jsx)("svg", {
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
      strokeDasharray: var_core_value_sig0260
    })
  });
}
const rt = {
  none: "none",
  solid: "solid",
  gradient: "gradient",
  picture: "picture"
};
function it(var_core_value_sig034D) {
  var var_core_value_sig89EC;
  let {
      children: var_core_value_sig9975,
      color: var_core_value_sigD6D9,
      gradientValue: var_core_value_sig2637,
      previewStyle: var_core_value_sigAF1D,
      showPreview: var_core_value_sig1F8A = true,
      tableFill: var_core_value_sigC92D,
      open: var_core_value_sigEA3D,
      value: var_core_value_sig2841,
      onOpenChange: var_core_value_sig9FE1,
      onTableFillChange: var_core_value_sig9DAA
    } = var_core_value_sig034D,
    var_core_value_sigEBB4 = (0, l.useDependency)(s.LocaleService),
    var_core_value_sig2B74 = {
      noFill: var_core_value_sigEBB4.t("boards-table-ui.shapePanel.fill.noFill"),
      solidFill: var_core_value_sigEBB4.t("boards-table-ui.shapePanel.fill.solidFill"),
      gradientFill: var_core_value_sigEBB4.t("boards-table-ui.shapePanel.fill.gradientFill"),
      pictureFill: var_core_value_sigEBB4.t("boards-table-ui.shapePanel.fill.pictureFill"),
      color: var_core_value_sigEBB4.t("boards-table-ui.shapePanel.fill.color"),
      transparency: var_core_value_sigEBB4.t("boards-table-ui.shapePanel.fill.transparency"),
      pictureSource: var_core_value_sigEBB4.t("boards-table-ui.shapePanel.fill.picture.source"),
      pictureInsert: var_core_value_sigEBB4.t("boards-table-ui.shapePanel.fill.picture.insert")
    },
    var_core_value_sig0483 = (var_core_value_sigC92D == null || (var_core_value_sig89EC = var_core_value_sigC92D.picture) == null ? undefined : var_core_value_sig89EC.opacity) ?? (var_core_value_sigC92D == null ? undefined : var_core_value_sigC92D.alpha) ?? 1;
  return (0, h.jsx)(a.TableToolbarDropdownInteractionGuard, {
    onOpenChange: var_core_value_sig9FE1,
    children: ({
      handleOpenChange: var_core_value_sig1F64,
      markInternalInteraction: var_core_value_sigDD1C
    }) => (0, h.jsx)(d.Dropdown, {
      overlay: (0, h.jsx)("div", {
        className: (0, d.clsx)("\n univer-rounded-lg univer-bg-gray-0 univer-shadow-lg dark:!univer-bg-gray-900\n", "univer-w-[280px]\x20univer-p-3", d.borderClassName),
        "data-u-comp": "board-table-floating-toolbar-popup",
        onMouseDown: var_core_value_sig9A8D => {
          var_core_value_sigDD1C(), (0, u.keepFloatingToolbarPanelInteraction)(var_core_value_sig9A8D);
        },
        onPointerDown: var_core_value_sigC259 => {
          var_core_value_sigDD1C(), (0, u.keepFloatingToolbarPanelInteraction)(var_core_value_sigC259);
        },
        children: (0, h.jsx)(u.FillStyleTabsEditor, {
          compact: true,
          direction: var_core_value_sigEBB4.getDirection(),
          keepColorPickerOpenOnChange: true,
          value: var_core_value_sig2841,
          typeValues: rt,
          color: var_core_value_sigD6D9,
          transparency: Math.round((1 - var_core_value_sig0483) * 100),
          gradientValue: var_core_value_sig2637,
          labels: var_core_value_sig2B74,
          tabLabels: var_core_value_sig2B74,
          onChange: var_core_value_sig9C9F => {
            if (var_core_value_sig9C9F === "none") var_core_value_sig9DAA({
              ...var_core_value_sigC92D,
              type: i.SlideTableFillTypeEnum["None"],
              gradient: undefined,
              picture: undefined
            });else {
              if (var_core_value_sig9C9F === "solid") var_core_value_sig9DAA({
                ...var_core_value_sigC92D,
                type: i.SlideTableFillTypeEnum["Solid"],
                color: var_core_value_sigD6D9,
                alpha: var_core_value_sig0483,
                gradient: undefined,
                picture: undefined
              });else {
                if (var_core_value_sig9C9F === "gradient") var_core_value_sig9DAA((0, a.gradientValueToSlideTableFill)(var_core_value_sig2637));else {
                  if (var_core_value_sig9C9F === "picture") {
                    var var_core_value_sigFDEA;
                    var_core_value_sig9DAA({
                      ...var_core_value_sigC92D,
                      type: i.SlideTableFillTypeEnum["Picture"],
                      color: var_core_value_sigD6D9,
                      alpha: var_core_value_sig0483,
                      gradient: undefined,
                      picture: {
                        ...(var_core_value_sigC92D == null ? undefined : var_core_value_sigC92D.picture),
                        opacity: var_core_value_sig0483,
                        mode: (var_core_value_sigC92D == null || (var_core_value_sigFDEA = var_core_value_sigC92D.picture) == null ? undefined : var_core_value_sigFDEA.mode) ?? i.SlideTablePictureFillModeEnum["Stretch"]
                      }
                    });
                  }
                }
              }
            }
          },
          onColorChange: var_core_value_sig86D0 => {
            var_core_value_sig9DAA({
              ...var_core_value_sigC92D,
              type: i.SlideTableFillTypeEnum["Solid"],
              color: var_core_value_sig86D0,
              alpha: var_core_value_sig0483,
              gradient: undefined,
              picture: undefined
            });
          },
          onTransparencyChange: var_core_value_sig4CD2 => {
            let var_core_value_sig48CA = (100 - Math.max(0, Math.min(100, var_core_value_sig4CD2))) / 100;
            if (var_core_value_sig2841 === "picture") {
              var var_core_value_sig50AF;
              var_core_value_sig9DAA({
                ...var_core_value_sigC92D,
                type: i.SlideTableFillTypeEnum["Picture"],
                picture: {
                  ...(var_core_value_sigC92D == null ? undefined : var_core_value_sigC92D.picture),
                  opacity: var_core_value_sig48CA,
                  mode: (var_core_value_sigC92D == null || (var_core_value_sig50AF = var_core_value_sigC92D.picture) == null ? undefined : var_core_value_sig50AF.mode) ?? i.SlideTablePictureFillModeEnum["Stretch"]
                }
              });
              return;
            }
            var_core_value_sig9DAA({
              ...var_core_value_sigC92D,
              type: i.SlideTableFillTypeEnum["Solid"],
              color: var_core_value_sigD6D9,
              alpha: var_core_value_sig48CA,
              gradient: undefined,
              picture: undefined
            });
          },
          onGradientChange: var_core_value_sigA942 => {
            var_core_value_sig9DAA((0, a.gradientValueToSlideTableFill)(var_core_value_sigA942));
          },
          pictureFillEditor: (0, h.jsx)(at, {
            fill: var_core_value_sigC92D,
            labels: var_core_value_sig2B74,
            onChange: var_core_value_sig9DAA
          })
        })
      }),
      open: var_core_value_sigEA3D,
      onOpenChange: var_core_value_sig1F64,
      children: (0, h.jsx)("span", {
        children: (0, h.jsx)(d.Tooltip, {
          title: var_core_value_sigEBB4.t("boards-table-ui.editorToolbar.tableBackgroundColor"),
          placement: "bottom",
          children: (0, h.jsxs)(d.Button, {
            size: "small",
            variant: "ghost",
            "aria-expanded": var_core_value_sigEA3D,
            "aria-label": var_core_value_sigEBB4.t("boards-table-ui.editorToolbar.tableBackgroundColor"),
            className: (0, d.clsx)(z, {
              [B]: var_core_value_sigEA3D
            }),
            "data-toolbar-item": var_core_value_sig034D["data-toolbar-item"],
            title: var_core_value_sigEBB4.t("boards-table-ui.editorToolbar.tableBackgroundColor"),
            onMouseDown: u.keepFloatingToolbarPanelInteraction,
            onPointerDown: u.keepFloatingToolbarPanelInteraction,
            children: [var_core_value_sig9975, var_core_value_sig1F8A ? (0, h.jsx)("span", {
              className: "univer-h-3 univer-w-3 univer-rounded-sm univer-border univer-border-solid univer-border-gray-300 dark:!univer-border-gray-600",
              style: var_core_value_sigAF1D
            }) : null, (0, h.jsx)(f.MoreDownIcon, {
              className: "univer-text-xs"
            })]
          })
        })
      })
    })
  });
}
function at(var_core_value_sig4A48) {
  let {
      fill: var_core_value_sigD170,
      labels: var_core_value_sig90E5,
      onChange: var_core_value_sig7000
    } = var_core_value_sig4A48,
    var_core_value_sigD7C5 = (0, l.useDependency)(s.IImageIoService),
    var_core_value_sig3633 = (0, p.useRef)(null),
    var_core_value_sig1DF5 = var_core_value_sigD170 == null ? undefined : var_core_value_sigD170.picture,
    var_core_value_sig90A3 = (var_core_value_sig1DF5 == null ? undefined : var_core_value_sig1DF5.opacity) ?? (var_core_value_sigD170 == null ? undefined : var_core_value_sigD170.alpha) ?? 1,
    var_core_value_sig28BE = var_core_value_sig1DF5 != null && var_core_value_sig1DF5.source && /^(?:data:|https?:)/["test"](var_core_value_sig1DF5.source) ? var_core_value_sig1DF5.source : undefined;
  return (0, h.jsxs)("div", {
    className: "univer-flex univer-flex-col univer-gap-2",
    children: [(0, h.jsxs)("div", {
      className: "univer-flex univer-items-center univer-justify-between univer-gap-3",
      children: [(0, h.jsx)("span", {
        className: "univer-shrink-0\x20univer-text-xs\x20univer-text-gray-600\x20dark:!univer-text-gray-200",
        children: var_core_value_sig90E5.pictureSource
      }), (0, h.jsx)("input", {
        ref: var_core_value_sig3633,
        type: "file",
        accept: "image/*",
        className: "univer-hidden",
        onChange: async var_core_value_sig2C39 => {
          var var_core_value_sigB7D1;
          let var_core_value_sig64F0 = (var_core_value_sigB7D1 = var_core_value_sig2C39.target["files"]) == null ? undefined : var_core_value_sigB7D1[0];
          if (!var_core_value_sig64F0) return;
          var_core_value_sig2C39.target["value"] = "";
          let var_core_value_sig85B1 = await var_core_value_sigD7C5.saveImage(var_core_value_sig64F0);
          if (var_core_value_sig85B1 == null) return;
          let {
            imageSourceType: var_core_value_sig3141,
            source: var_core_value_sig2162,
            base64Cache: var_core_value_sig2EAD
          } = var_core_value_sig85B1;
          if (var_core_value_sig2EAD) {
            let {
              image: var_core_value_sigA621
            } = await (0, m.getImageSize)(var_core_value_sig2EAD);
            var_core_value_sigD7C5.addImageSourceCache(var_core_value_sig2162, var_core_value_sig3141, var_core_value_sigA621);
          }
          var_core_value_sig7000({
            ...var_core_value_sigD170,
            type: i.SlideTableFillTypeEnum["Picture"],
            gradient: undefined,
            picture: {
              ...var_core_value_sig1DF5,
              source: var_core_value_sig2162,
              sourceType: var_core_value_sig3141,
              opacity: var_core_value_sig90A3,
              mode: (var_core_value_sig1DF5 == null ? undefined : var_core_value_sig1DF5.mode) ?? i.SlideTablePictureFillModeEnum["Stretch"]
            }
          });
        }
      }), (0, h.jsx)(d.Button, {
        size: "small",
        variant: "ghost",
        onClick: () => {
          var var_core_value_sig6774;
          return (var_core_value_sig6774 = var_core_value_sig3633.current) == null ? undefined : var_core_value_sig6774.click();
        },
        className: "univer-rounded univer-px-2 univer-py-1 univer-text-xs univer-transition-colors hover:univer-bg-gray-100 dark:hover:!univer-bg-gray-700",
        children: var_core_value_sig90E5.pictureInsert
      })]
    }), var_core_value_sig28BE && (0, h.jsx)("img", {
      src: var_core_value_sig28BE,
      alt: "",
      className: "univer-h-14 univer-w-full univer-rounded univer-object-cover"
    }), (0, h.jsx)(ot, {
      label: var_core_value_sig90E5.transparency,
      opacity: var_core_value_sig90A3,
      onChange: var_core_value_sig340D => var_core_value_sig7000({
        ...var_core_value_sigD170,
        picture: {
          ...var_core_value_sig1DF5,
          opacity: var_core_value_sig340D,
          mode: (var_core_value_sig1DF5 == null ? undefined : var_core_value_sig1DF5.mode) ?? i.SlideTablePictureFillModeEnum["Stretch"]
        }
      })
    })]
  });
}
function ot(var_core_value_sig0224) {
  return (0, h.jsxs)("div", {
    className: "univer-flex univer-items-center univer-justify-between univer-gap-3",
    children: [(0, h.jsx)("span", {
      className: "univer-shrink-0 univer-text-xs univer-text-gray-600 dark:!univer-text-gray-200",
      children: var_core_value_sig0224.label
    }), (0, h.jsx)("div", {
      className: "univer-w-20",
      children: (0, h.jsx)(d.InputNumber, {
        className: "univer-w-full",
        value: Math.round((1 - var_core_value_sig0224.opacity) * 100),
        min: 0,
        max: 100,
        step: 10,
        formatter: var_core_value_sig82D4 => var_core_value_sig82D4 + "%",
        parser: var_core_value_sigBDE4 => (var_core_value_sigBDE4 == null ? undefined : var_core_value_sigBDE4.replace("%", "")) || "",
        onChange: var_core_value_sig7DF1 => {
          let var_core_value_sigDC86 = Math.max(0, Math.min(100, var_core_value_sig7DF1 ?? 0));
          var_core_value_sig0224.onChange((100 - var_core_value_sigDC86) / 100);
        }
      })
    })]
  });
}
const st = "board.table.floating-toolbar";
function ct(var_core_value_sig854B, var_core_value_sig1FF6, var_core_value_sig4B27) {
  if (!(var_core_value_sig854B != null && var_core_value_sig854B.unitId) || !var_core_value_sig854B.subUnitId || !var_core_value_sig854B.elementId || !var_core_value_sig854B.tableId) return null;
  let var_core_value_sig3A41 = !!var_core_value_sig1FF6 && var_core_value_sig1FF6.unitId === var_core_value_sig854B.unitId && var_core_value_sig1FF6.subUnitId === var_core_value_sig854B.subUnitId && var_core_value_sig1FF6.elementId === var_core_value_sig854B.elementId && var_core_value_sig1FF6.tableId === var_core_value_sig854B.tableId;
  return var_core_value_sig3A41 && var_core_value_sig1FF6.kind === "text" ? null : var_core_value_sig3A41 && var_core_value_sig1FF6.ranges["length"] ? var_core_value_sig1FF6 : var_core_value_sig4B27 ? {
    unitId: var_core_value_sig854B.unitId,
    subUnitId: var_core_value_sig854B.subUnitId,
    elementId: var_core_value_sig854B.elementId,
    tableId: var_core_value_sig854B.tableId,
    kind: "table",
    ranges: [{
      startRow: 0,
      endRow: Math.max(0, var_core_value_sig4B27.rows["length"] - 1),
      startColumn: 0,
      endColumn: Math.max(0, var_core_value_sig4B27.columns["length"] - 1)
    }]
  } : null;
}
function lt(var_core_value_sig269A) {
  var var_core_value_sigBF53;
  let var_core_value_sigD9BB = (0, l.useDependency)(s.ICommandService),
    var_core_value_sigF549 = (0, l.useDependency)(s.LocaleService),
    var_core_value_sigC125 = (0, l.useObservable)(var_core_value_sigF549.direction$, var_core_value_sigF549.getDirection()),
    var_core_value_sigB63D = (0, l.useDependency)(a.SlideTableSelectionService),
    var_core_value_sig8255 = (0, l.useDependency)(i.SlideTableResourceService),
    var_core_value_sigBFC7 = (0, l.useDependency)(s.ThemeService),
    var_core_value_sig933F = (0, l.useDependency)(i.SlideTableModelService),
    var_core_value_sig29DE = (0, l.useObservable)(var_core_value_sigB63D.selection$);
  (0, l.useObservable)(var_core_value_sig933F.tableChange$);
  let [var_core_value_sig4AFB, var_core_value_sigC7EA] = (0, p.useState)({
      selectionKey: null,
      value: null
    }),
    var_core_value_sigDAB9 = ((var_core_value_sigBF53 = var_core_value_sig269A.popup) == null ? undefined : var_core_value_sigBF53.extraProps) ?? var_core_value_sig269A,
    var_core_value_sig9CF7 = var_core_value_sigDAB9.unitId && var_core_value_sigDAB9.tableId ? var_core_value_sig8255.getTable(var_core_value_sigDAB9.unitId, var_core_value_sigDAB9.tableId) : null,
    var_core_value_sigCCE5 = ct(var_core_value_sigDAB9, var_core_value_sig29DE, var_core_value_sig9CF7),
    var_core_value_sig5933 = var_core_value_sigCCE5 ? [var_core_value_sigCCE5.unitId, var_core_value_sigCCE5.subUnitId, var_core_value_sigCCE5.elementId, var_core_value_sigCCE5.tableId, ...Object.values(var_core_value_sigCCE5.ranges[0] ?? {})].join("|") : null,
    var_core_value_sig884B = var_core_value_sig4AFB.selectionKey === var_core_value_sig5933 ? var_core_value_sig4AFB.value : null,
    var_core_value_sig4E30 = ze(var_core_value_sig9CF7, var_core_value_sigCCE5),
    var_core_value_sig9730 = var_core_value_sig4E30.values,
    var_core_value_sig8E4A = (0, p.useCallback)(var_core_value_sig0B0C => {
      if (!var_core_value_sigCCE5) return;
      let var_core_value_sigA39E = var_core_value_sigCCE5.ranges[0],
        var_core_value_sigBBEE = var_core_value_sig8255.getTable(var_core_value_sigCCE5.unitId, var_core_value_sigCCE5.tableId);
      !var_core_value_sigA39E || !var_core_value_sigBBEE || var_core_value_sigD9BB.executeCommand(t.UpdateBoardTableCommand["id"], {
        unitId: var_core_value_sigCCE5.unitId,
        tableId: var_core_value_sigCCE5.tableId,
        patch: var_core_value_sig0B0C(var_core_value_sigBBEE, var_core_value_sigA39E)
      });
    }, [var_core_value_sigD9BB, var_core_value_sig8255, var_core_value_sigCCE5]),
    var_core_value_sig300B = (0, p.useCallback)(var_core_value_sig011D => {
      var_core_value_sigCCE5 && var_core_value_sigD9BB.executeCommand(t.UpdateBoardTableCommand["id"], {
        unitId: var_core_value_sigCCE5.unitId,
        tableId: var_core_value_sigCCE5.tableId,
        patch: {
          styleId: var_core_value_sig011D
        }
      });
    }, [var_core_value_sigD9BB, var_core_value_sigCCE5]),
    var_core_value_sig8457 = (0, p.useCallback)(var_core_value_sig6167 => {
      var_core_value_sigCCE5 && var_core_value_sigD9BB.executeCommand(t.UpdateBoardTableCommand["id"], {
        unitId: var_core_value_sigCCE5.unitId,
        tableId: var_core_value_sigCCE5.tableId,
        patch: {
          options: var_core_value_sig6167
        }
      });
    }, [var_core_value_sigD9BB, var_core_value_sigCCE5]),
    var_core_value_sigB30D = (0, p.useCallback)((var_core_value_sig65A1, var_core_value_sig7F19) => {
      var_core_value_sigC7EA({
        selectionKey: var_core_value_sig5933,
        value: var_core_value_sig7F19 ? var_core_value_sig65A1 : null
      });
    }, [var_core_value_sig5933]),
    var_core_value_sigDB33 = (0, p.useMemo)(() => (0, i.resolveSlideTableThemePalette)(var_core_value_sigBBFF => var_core_value_sigBFC7.getColorFromTheme(var_core_value_sigBBFF)), [var_core_value_sigBFC7]);
  if (!var_core_value_sigCCE5 || !var_core_value_sig9CF7) return null;
  let var_core_value_sig6C8C = var_core_value_sig4E30.mergeState,
    var_core_value_sig7A5E = Ve(var_core_value_sig9CF7, var_core_value_sigCCE5),
    var_core_value_sig838E = (var_core_value_sig7A5E == null ? undefined : var_core_value_sig7A5E.kind) === "row" ? var_core_value_sigF549.t("boards-table-ui.contextMenu.deleteRow") : (var_core_value_sig7A5E == null ? undefined : var_core_value_sig7A5E.kind) === "column" ? var_core_value_sigF549.t("boards-table-ui.contextMenu.deleteColumn") : null,
    var_core_value_sig9A5B = () => {
      var_core_value_sig7A5E && var_core_value_sigD9BB.executeCommand(var_core_value_sig7A5E.commandId, var_core_value_sig7A5E.params);
    },
    var_core_value_sigC860 = (var_core_value_sig6C8C == null ? undefined : var_core_value_sig6C8C.action) === "unmerge" ? var_core_value_sigF549.t("boards-table-ui.editorToolbar.unmergeCells") : (var_core_value_sig6C8C == null ? undefined : var_core_value_sig6C8C.action) === "merge" ? var_core_value_sigF549.t("boards-table-ui.editorToolbar.mergeCells") : null,
    var_core_value_sigE64C = () => {
      let var_core_value_sig7827 = Be(var_core_value_sigCCE5, var_core_value_sig6C8C ?? null);
      var_core_value_sig7827 && var_core_value_sigD9BB.executeCommand(var_core_value_sig7827.commandId, var_core_value_sig7827.params);
    },
    var_core_value_sigF39B = [{
      labelKey: "boards-table-ui.editorToolbar.alignLeft",
      value: s.HorizontalAlign["LEFT"],
      icon: (0, h.jsx)(f.LeftJustifyingIcon, {})
    }, {
      labelKey: "boards-table-ui.editorToolbar.alignCenter",
      value: s.HorizontalAlign["CENTER"],
      icon: (0, h.jsx)(f.HorizontallyIcon, {})
    }, {
      labelKey: "boards-table-ui.editorToolbar.alignRight",
      value: s.HorizontalAlign["RIGHT"],
      icon: (0, h.jsx)(f.RightJustifyingIcon, {})
    }, {
      labelKey: "boards-table-ui.editorToolbar.alignJustify",
      value: s.HorizontalAlign["JUSTIFIED"],
      icon: (0, h.jsx)(f.AlignTextBothIcon, {})
    }],
    var_core_value_sig9B88 = [{
      labelKey: "boards-table-ui.editorToolbar.alignTop",
      value: s.VerticalAlign["TOP"],
      icon: (0, h.jsx)(f.AlignTopIcon, {})
    }, {
      labelKey: "boards-table-ui.editorToolbar.alignMiddle",
      value: s.VerticalAlign["MIDDLE"],
      icon: (0, h.jsx)(f.VerticalCenterIcon, {})
    }, {
      labelKey: "boards-table-ui.editorToolbar.alignBottom",
      value: s.VerticalAlign["BOTTOM"],
      icon: (0, h.jsx)(f.AlignBottomIcon, {})
    }];
  return (0, h.jsxs)("div", {
    className: (0, d.clsx)("univer-box-border univer-flex univer-max-w-[760px] univer-flex-nowrap univer-items-center univer-rounded univer-bg-gray-0 univer-px-1 univer-py-1 univer-shadow-sm dark:!univer-border-gray-700 dark:!univer-bg-gray-900", d.borderClassName),
    "data-u-comp": "board-table-floating-toolbar",
    dir: var_core_value_sigC125,
    role: "toolbar",
    style: {
      direction: var_core_value_sigC125
    },
    onMouseDownCapture: () => var_core_value_sigB63D.markTableInternalInteraction(),
    onPointerDownCapture: () => var_core_value_sigB63D.markTableInternalInteraction(),
    onMouseDown: u.keepFloatingToolbarPanelInteraction,
    onPointerDown: u.keepFloatingToolbarPanelInteraction,
    children: [var_core_value_sig7A5E && var_core_value_sig838E ? (0, h.jsxs)(h.Fragment, {
      children: [(0, h.jsx)(H, {
        children: (0, h.jsx)(Ye, {
          "data-toolbar-item": var_core_value_sig7A5E.kind === "row" ? "delete-row" : "delete-column",
          title: var_core_value_sig838E,
          onClick: var_core_value_sig9A5B,
          children: (0, h.jsx)(f.DeleteIcon, {})
        })
      }), (0, h.jsx)(d.Separator, {
        orientation: "vertical"
      })]
    }) : null, var_core_value_sigC860 ? (0, h.jsxs)(h.Fragment, {
      children: [(0, h.jsx)(H, {
        children: (0, h.jsx)(Ye, {
          "data-toolbar-item": "merge-cells",
          title: var_core_value_sigC860,
          onClick: var_core_value_sigE64C,
          children: (var_core_value_sig6C8C == null ? undefined : var_core_value_sig6C8C.action) === "unmerge" ? (0, h.jsx)(f.CancelMergeIcon, {}) : (0, h.jsx)(f.MergeAllIcon, {})
        })
      }), (0, h.jsx)(d.Separator, {
        orientation: "vertical"
      })]
    }) : null, (0, h.jsxs)(H, {
      children: [(0, h.jsx)(it, {
        "data-toolbar-item": "background",
        color: var_core_value_sig9730.backgroundColor,
        value: (0, a.getSlideTableFillType)(var_core_value_sig9730.backgroundFill),
        gradientValue: (0, a.getSlideTableGradientValue)(var_core_value_sig9730.backgroundFill, var_core_value_sig9730.backgroundColor),
        previewStyle: (0, a.getSlideTableFillPreviewStyle)(var_core_value_sig9730.backgroundFill, var_core_value_sig9730.backgroundColor),
        showPreview: false,
        tableFill: var_core_value_sig9730.backgroundFill,
        open: var_core_value_sig884B === "background",
        onOpenChange: var_core_value_sig652C => var_core_value_sigB30D("background", var_core_value_sig652C),
        onTableFillChange: var_core_value_sig7E32 => var_core_value_sig8E4A((var_core_value_sig8889, var_core_value_sig32F8) => (0, a.buildSlideTableBackgroundFillPatch)(var_core_value_sig8889, var_core_value_sig32F8, var_core_value_sig7E32)),
        children: (0, h.jsx)(f.ShapeBackgroundColorDoubleIcon, {
          extend: {
            colorChannel1: var_core_value_sig9730.backgroundColor
          }
        })
      }), (0, h.jsx)(Qe, {
        "data-toolbar-item": "border",
        color: var_core_value_sig9730.borderColor,
        width: var_core_value_sig9730.borderWidth,
        dash: var_core_value_sig9730.borderDash,
        presets: Ge,
        open: var_core_value_sig884B === "border",
        onOpenChange: var_core_value_sig4C07 => var_core_value_sigB30D("border", var_core_value_sig4C07),
        onSelectPreset: var_core_value_sig79AB => var_core_value_sig8E4A((var_core_value_sig5B67, var_core_value_sig1758) => (0, a.buildSlideTableBorderPresetPatch)(var_core_value_sig5B67, var_core_value_sig1758, var_core_value_sig79AB)),
        onChangeColor: var_core_value_sig8E74 => var_core_value_sig8E4A((var_core_value_sig4805, var_core_value_sigE67E) => (0, a.buildSlideTableBorderStylePatch)(var_core_value_sig4805, var_core_value_sigE67E, {
          color: var_core_value_sig8E74
        })),
        onChangeWidth: var_core_value_sig104C => var_core_value_sig8E4A((var_core_value_sig2902, var_core_value_sig9989) => (0, a.buildSlideTableBorderStylePatch)(var_core_value_sig2902, var_core_value_sig9989, {
          width: var_core_value_sig104C,
          dash: var_core_value_sig104C === 0 ? i.SlideTableBorderDashEnum["None"] : undefined
        })),
        onChangeDash: var_core_value_sig841D => var_core_value_sig8E4A((var_core_value_sig698E, var_core_value_sig2809) => (0, a.buildSlideTableBorderStylePatch)(var_core_value_sig698E, var_core_value_sig2809, {
          dash: var_core_value_sig841D
        }))
      })]
    }), (0, h.jsx)(d.Separator, {
      orientation: "vertical"
    }), (0, h.jsxs)(H, {
      children: [(0, h.jsx)("span", {
        "data-toolbar-item": "font-family",
        onMouseDown: u.keepFloatingToolbarPanelInteraction,
        onPointerDown: u.keepFloatingToolbarPanelInteraction,
        children: (0, h.jsx)(l.FontFamilyDropdown, {
          ariaLabel: var_core_value_sigF549.t("boards-table-ui.editorToolbar.fontFamily"),
          className: "univer-w-28",
          inputClassName: "univer-w-auto",
          title: var_core_value_sig9730.fontFamily,
          value: var_core_value_sig9730.fontFamily,
          onChange: var_core_value_sig90CB => var_core_value_sig8E4A((var_core_value_sig2DAB, var_core_value_sig877E) => (0, a.buildSlideTableFontFamilyPatch)(var_core_value_sig2DAB, var_core_value_sig877E, var_core_value_sig90CB)),
          onMouseDown: u.keepFloatingToolbarPanelInteraction,
          onPointerDown: u.keepFloatingToolbarPanelInteraction
        })
      }), (0, h.jsx)(tt, {
        "data-toolbar-item": "font-size",
        title: var_core_value_sigF549.t("boards-table-ui.editorToolbar.fontSize"),
        widthClassName: "univer-w-14",
        value: String(var_core_value_sig9730.fontSize),
        options: (0, a.ensureOption)(He, String(var_core_value_sig9730.fontSize)),
        onChange: var_core_value_sigBDF5 => {
          let var_core_value_sigACC6 = Number(var_core_value_sigBDF5);
          Number.isNaN(var_core_value_sigACC6) || var_core_value_sig8E4A((var_core_value_sig20C8, var_core_value_sigE9A7) => (0, a.buildSlideTableFontSizePatch)(var_core_value_sig20C8, var_core_value_sigE9A7, var_core_value_sigACC6));
        }
      }), (0, h.jsx)(et, {
        "data-toolbar-item": "text-format",
        open: var_core_value_sig884B === "textFormat",
        values: var_core_value_sig9730,
        horizontalAlignOptions: var_core_value_sigF39B,
        verticalAlignOptions: var_core_value_sig9B88,
        onOpenChange: var_core_value_sig1614 => var_core_value_sigB30D("textFormat", var_core_value_sig1614),
        onToggleStyle: var_core_value_sig85C3 => var_core_value_sig8E4A((var_core_value_sigBECE, var_core_value_sig1B22) => (0, a.buildSlideTableTextStylePatch)(var_core_value_sigBECE, var_core_value_sig1B22, var_core_value_sig85C3)),
        onHorizontalAlign: var_core_value_sigB996 => var_core_value_sig8E4A((var_core_value_sig7F72, var_core_value_sig7B2A) => (0, a.buildSlideTableTextAlignPatch)(var_core_value_sig7F72, var_core_value_sig7B2A, {
          axis: "horizontal",
          value: var_core_value_sigB996
        })),
        onVerticalAlign: var_core_value_sig4BBA => var_core_value_sig8E4A((var_core_value_sig06CD, var_core_value_sigA5F1) => (0, a.buildSlideTableTextAlignPatch)(var_core_value_sig06CD, var_core_value_sigA5F1, {
          axis: "vertical",
          value: var_core_value_sig4BBA
        }))
      })]
    }), (0, h.jsx)(d.Separator, {
      orientation: "vertical"
    }), (0, h.jsxs)(H, {
      children: [(0, h.jsx)(Ze, {
        "data-toolbar-item": "text-color",
        title: var_core_value_sigF549.t("boards-table-ui.editorToolbar.textColor"),
        color: var_core_value_sig9730.textColor,
        icon: "font",
        open: var_core_value_sig884B === "textColor",
        onOpenChange: var_core_value_sig6201 => var_core_value_sigB30D("textColor", var_core_value_sig6201),
        onChange: var_core_value_sig5151 => var_core_value_sig8E4A((var_core_value_sig97A2, var_core_value_sig07E9) => (0, a.buildSlideTableTextFillPatch)(var_core_value_sig97A2, var_core_value_sig07E9, {
          type: "solid",
          color: var_core_value_sig5151,
          opacity: 1
        }))
      }), (0, h.jsx)(Ze, {
        "data-toolbar-item": "text-background",
        title: var_core_value_sigF549.t("boards-table-ui.editorToolbar.textBackgroundColor"),
        color: var_core_value_sig9730.textBackgroundColor,
        icon: "bucket",
        open: var_core_value_sig884B === "textBackground",
        onOpenChange: var_core_value_sigB542 => var_core_value_sigB30D("textBackground", var_core_value_sigB542),
        onChange: var_core_value_sigBB6C => var_core_value_sig8E4A((var_core_value_sig4F59, var_core_value_sigF564) => (0, a.buildSlideTableTextStylePatch)(var_core_value_sig4F59, var_core_value_sigF564, {
          bg: {
            rgb: var_core_value_sigBB6C
          }
        }))
      })]
    }), (0, h.jsx)(d.Separator, {
      orientation: "vertical"
    }), (0, h.jsx)(H, {
      children: (0, h.jsx)(Je, {
        open: var_core_value_sig884B === "theme",
        onOpenChange: var_core_value_sigE2BF => var_core_value_sigB30D("theme", var_core_value_sigE2BF),
        children: (0, h.jsx)(a.TableThemeGallery, {
          currentStyleId: var_core_value_sig9CF7.styleId,
          currentOptions: var_core_value_sig9CF7.options ?? {},
          direction: var_core_value_sigC125,
          palette: var_core_value_sigDB33,
          onApplyTheme: var_core_value_sigB8C7 => {
            var_core_value_sig300B(var_core_value_sigB8C7), var_core_value_sigB30D("theme", false);
          },
          onChangeOptions: var_core_value_sig8457
        })
      })
    }), (0, h.jsx)(d.Separator, {
      orientation: "vertical"
    }), (0, h.jsx)(H, {
      children: (0, h.jsx)(Ye, {
        "data-toolbar-item": "delete-table",
        title: var_core_value_sigF549.t("boards-table-ui.contextMenu.deleteTable"),
        onClick: () => var_core_value_sigD9BB.executeCommand(_e.id),
        children: (0, h.jsx)(f.DeleteIcon, {})
      })
    })]
  });
}
function W(var_core_value_sig992A) {
  "@babel/helpers - typeof";

  return W = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sigA56E) {
    return typeof var_core_value_sigA56E;
  } : function (var_core_value_sig1998) {
    return var_core_value_sig1998 && typeof Symbol == "function" && var_core_value_sig1998.constructor === Symbol && var_core_value_sig1998 !== Symbol.prototype ? "symbol" : typeof var_core_value_sig1998;
  }, W(var_core_value_sig992A);
}
function ut(var_core_value_sig6281, var_core_value_sig9B01) {
  if (W(var_core_value_sig6281) != "object" || !var_core_value_sig6281) return var_core_value_sig6281;
  var var_core_value_sigA724 = var_core_value_sig6281[Symbol.toPrimitive];
  if (var_core_value_sigA724 !== undefined) {
    var var_core_value_sig385E = var_core_value_sigA724.call(var_core_value_sig6281, var_core_value_sig9B01 || "default");
    if (W(var_core_value_sig385E) != "object") return var_core_value_sig385E;
    throw TypeError("@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.");
  }
  return (var_core_value_sig9B01 === "string" ? String : Number)(var_core_value_sig6281);
}
function dt(var_core_value_sig10D3) {
  var var_core_value_sig41F2 = ut(var_core_value_sig10D3, "string");
  return W(var_core_value_sig41F2) == "symbol" ? var_core_value_sig41F2 : var_core_value_sig41F2 + "";
}
function G(var_core_value_sig32DD, var_core_value_sig7A88, var_core_value_sig6CFC) {
  return (var_core_value_sig7A88 = dt(var_core_value_sig7A88)) in var_core_value_sig32DD ? Object.defineProperty(var_core_value_sig32DD, var_core_value_sig7A88, {
    value: var_core_value_sig6CFC,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sig32DD[var_core_value_sig7A88] = var_core_value_sig6CFC, var_core_value_sig32DD;
}
const ft = i.SLIDE_TABLE_CONTROL_GUTTER + 18;
let pt = class extends s.RxDisposable {
  constructor(var_core_value_sigFF19, var_core_value_sig43B8, var_core_value_sigD98F, var_core_value_sig66C0, var_core_value_sig9D15, var_core_value_sigB785, var_core_value_sig130F) {
    super(), this._renderContext = var_core_value_sigFF19, this._boardCanvasPopManagerService = var_core_value_sig43B8, this._boardElementService = var_core_value_sigD98F, this._slideTableSelectionService = var_core_value_sig66C0, this._elementStateService = var_core_value_sig9D15, this._slideTableResourceService = var_core_value_sigB785, this._interactionSurfaceService = var_core_value_sig130F, G(this, "_popupDisposable", null), G(this, "_popupSelectionKey", null), G(this, "_eventDisposables", new s["DisposableCollection"]()), this.disposeWithMe(this._eventDisposables), this._init();
  }
  dispose() {
    this._clearPopup(), super.dispose();
  }
  _init() {
    let var_core_value_sigC0E3 = this._renderContext["scene"].getTransformerByCreate();
    this._subscribe(var_core_value_sigC0E3.createControl$, () => this._showPopupForSelection()), this._subscribe(var_core_value_sigC0E3.clearControl$, () => this._clearPopupIfSelectionChanged()), this._subscribe(var_core_value_sigC0E3.changeStart$, () => this._clearPopup()), this._subscribe(var_core_value_sigC0E3.changeEnd$, () => setTimeout(() => this._showPopupForSelection(), 0)), this._subscribe(this._slideTableSelectionService["selection$"], () => setTimeout(() => this._showPopupForSelection(), 0)), this._subscribe(this._elementStateService["state$"], () => setTimeout(() => this._showPopupForSelection(), 0)), this._subscribe(this._interactionSurfaceService["interactionSurfaceActive$"], () => {
      if (this._interactionSurfaceService["isInteractionSurfaceActive"]) {
        this._clearPopup();
        return;
      }
      setTimeout(() => this._showPopupForSelection(), 0);
    });
  }
  _subscribe(var_core_value_sig52F7, var_core_value_sig866F) {
    let var_core_value_sigDE3D = var_core_value_sig52F7.subscribe(var_core_value_sig866F);
    this._eventDisposables["add"]((0, s.toDisposable)(() => {
      var var_core_value_sig8CFA, var_core_value_sig2E11;
      (var_core_value_sig8CFA = var_core_value_sigDE3D.unsubscribe) == null || var_core_value_sig8CFA.call(var_core_value_sigDE3D), (var_core_value_sig2E11 = var_core_value_sigDE3D.dispose) == null || var_core_value_sig2E11.call(var_core_value_sigDE3D);
    }));
  }
  _clearPopup() {
    var var_core_value_sigF175;
    (var_core_value_sigF175 = this._popupDisposable) == null || var_core_value_sigF175.dispose(), this._popupDisposable = null, this._popupSelectionKey = null;
  }
  _clearPopupIfSelectionChanged() {
    setTimeout(() => {
      this._isPopupSelectionStillActive() || this._clearPopup();
    }, 0);
  }
  _isPopupSelectionStillActive() {
    let var_core_value_sig6A18 = this._elementStateService["getSnapshot"]();
    return !var_core_value_sig6A18.context || !var_core_value_sig6A18.selectedIds["length"] ? false : this._popupSelectionKey === this._buildPopupSelectionKey(var_core_value_sig6A18.context["unitId"], var_core_value_sig6A18.context["subUnitId"], var_core_value_sig6A18.selectedIds);
  }
  _buildPopupSelectionKey(var_core_value_sig4E3D, var_core_value_sig49B0, var_core_value_sig2547) {
    return var_core_value_sig4E3D + ":" + var_core_value_sig49B0 + ":" + var_core_value_sig2547.join(",");
  }
  _showPopupForSelection() {
    var var_core_value_sigBCA9;
    if (this._interactionSurfaceService["isInteractionSurfaceActive"]) {
      this._clearPopup();
      return;
    }
    let var_core_value_sig4CDF = this._elementStateService["getSnapshot"]();
    if (var_core_value_sig4CDF.isTransforming) {
      this._clearPopup();
      return;
    }
    let var_core_value_sig3F79 = this._renderContext["scene"].getTransformerByCreate().getSelectedObjectMap();
    if (!var_core_value_sig3F79.size) {
      if (this._showPopupForTableSelection() || this._isPopupSelectionStillActive()) return;
      this._clearPopup();
      return;
    }
    if ((0, n.resolveBoardFloatingToolbarSelection)({
      context: var_core_value_sig4CDF.context,
      selectedIds: var_core_value_sig4CDF.selectedIds,
      getElementById: (var_core_value_sig5B69, var_core_value_sigB098, var_core_value_sigCE71) => this._boardElementService["getElementById"](var_core_value_sig5B69, var_core_value_sigB098, var_core_value_sigCE71)
    }).owner !== "table") {
      this._clearPopup();
      return;
    }
    let var_core_value_sig880E = Array.from(var_core_value_sig3F79.values()).map(var_core_value_sig21D8 => this._resolveSelectedEntry(var_core_value_sig21D8)).filter(var_core_value_sig2B65 => !!var_core_value_sig2B65).filter(var_core_value_sigD7EA => var_core_value_sigD7EA.elementData["element"].type === e.BoardElementType["Table"]);
    if (!var_core_value_sig880E.length) {
      this._clearPopup();
      return;
    }
    let var_core_value_sigC9ED = var_core_value_sig880E.find(var_core_value_sigB33B => var_core_value_sigB33B.elementData["elementId"] === var_core_value_sig4CDF.focusedId) ?? var_core_value_sig880E[0];
    if (!var_core_value_sigC9ED) {
      this._clearPopup();
      return;
    }
    let var_core_value_sigB57B = this._buildPopupSelectionKey(var_core_value_sigC9ED.elementData["unitId"], var_core_value_sigC9ED.elementData["subUnitId"], ((var_core_value_sigBCA9 = var_core_value_sig4CDF.context) == null ? undefined : var_core_value_sigBCA9.unitId) === var_core_value_sigC9ED.elementData["unitId"] && var_core_value_sig4CDF.context["subUnitId"] === var_core_value_sigC9ED.elementData["subUnitId"] && var_core_value_sig4CDF.selectedIds["length"] ? var_core_value_sig4CDF.selectedIds : [var_core_value_sigC9ED.elementData["elementId"]]);
    this._popupDisposable && this._popupSelectionKey === var_core_value_sigB57B || (this._clearPopup(), this._popupDisposable = this.disposeWithMe(this._boardCanvasPopManagerService["attachPopupToObject"](var_core_value_sigC9ED.elementData["unitId"], var_core_value_sigC9ED.elementData["subUnitId"], var_core_value_sigC9ED.object, {
      componentKey: st,
      direction: "top-center",
      offset: [0, ft],
      anchorBoundResolver: this._resolveSelectionAnchorBoundResolver(var_core_value_sigC9ED.elementData),
      extraProps: {
        unitId: var_core_value_sigC9ED.elementData["unitId"],
        subUnitId: var_core_value_sigC9ED.elementData["subUnitId"],
        elementId: var_core_value_sigC9ED.elementData["elementId"],
        tableId: var_core_value_sigC9ED.elementData["element"].tableId
      }
    })), this._popupSelectionKey = var_core_value_sigB57B);
  }
  _showPopupForTableSelection() {
    let var_core_value_sig780B = this._slideTableSelectionService["getSelection"]();
    if (!var_core_value_sig780B || var_core_value_sig780B.kind === "text" || !var_core_value_sig780B.ranges["length"]) return false;
    let var_core_value_sig7D1B = this._resolveTableSelectionObject(var_core_value_sig780B.unitId, var_core_value_sig780B.elementId);
    if (!var_core_value_sig7D1B) return false;
    let var_core_value_sig7BE0 = this._boardElementService["getElementById"](var_core_value_sig780B.unitId, var_core_value_sig780B.subUnitId, var_core_value_sig780B.elementId);
    if (!var_core_value_sig7BE0 || var_core_value_sig7BE0.element["type"] !== e.BoardElementType["Table"] || var_core_value_sig7BE0.element["tableId"] !== var_core_value_sig780B.tableId) return false;
    let var_core_value_sig7D40 = var_core_value_sig7BE0,
      var_core_value_sig6C7E = this._buildPopupSelectionKey(var_core_value_sig780B.unitId, var_core_value_sig780B.subUnitId, [var_core_value_sig780B.elementId]) + this._buildTableSelectionRangeKey(var_core_value_sig780B);
    return this._popupDisposable && this._popupSelectionKey === var_core_value_sig6C7E ? true : (this._clearPopup(), this._popupDisposable = this.disposeWithMe(this._boardCanvasPopManagerService["attachPopupToObject"](var_core_value_sig780B.unitId, var_core_value_sig780B.subUnitId, var_core_value_sig7D1B, {
      componentKey: st,
      direction: "top-center",
      offset: [0, ft],
      anchorBoundResolver: this._resolveSelectionAnchorBoundResolver(var_core_value_sig7D40),
      extraProps: {
        unitId: var_core_value_sig780B.unitId,
        subUnitId: var_core_value_sig780B.subUnitId,
        elementId: var_core_value_sig780B.elementId,
        tableId: var_core_value_sig780B.tableId
      }
    })), this._popupSelectionKey = var_core_value_sig6C7E, true);
  }
  _buildTableSelectionRangeKey(var_core_value_sig68BE) {
    let var_core_value_sig04C6 = var_core_value_sig68BE.ranges[0];
    return var_core_value_sig04C6 ? ":table-selection:" + var_core_value_sig68BE.kind + ":" + var_core_value_sig04C6.startRow + ":" + var_core_value_sig04C6.endRow + ":" + var_core_value_sig04C6.startColumn + ":" + var_core_value_sig04C6.endColumn : ":table-selection:" + var_core_value_sig68BE.kind + ":empty";
  }
  _resolveSelectionAnchorBoundResolver(var_core_value_sigCA05) {
    let var_core_value_sig2F2B = this._slideTableSelectionService["getSelection"]();
    if (!mt(var_core_value_sig2F2B, var_core_value_sigCA05) || var_core_value_sig2F2B.kind !== "row" && var_core_value_sig2F2B.kind !== "column") return;
    let var_core_value_sig70AF = this._slideTableResourceService["getTable"](var_core_value_sig2F2B.unitId, var_core_value_sig2F2B.tableId),
      var_core_value_sigD04E = var_core_value_sig2F2B.ranges[0];
    if (!(!var_core_value_sig70AF || !var_core_value_sigD04E)) return var_core_value_sig24B9 => {
      let var_core_value_sigE627 = (0, i.normalizeSlideTableCellRange)(var_core_value_sigD04E),
        var_core_value_sigEF3E = ht(var_core_value_sig70AF.columns["map"](var_core_value_sigC9E0 => var_core_value_sigC9E0.width), var_core_value_sig24B9.width, var_core_value_sigE627.startColumn, var_core_value_sigE627.endColumn),
        var_core_value_sig273D = ht(var_core_value_sig70AF.rows["map"](var_core_value_sig76BA => var_core_value_sig76BA.height ?? 24), var_core_value_sig24B9.height, var_core_value_sigE627.startRow, var_core_value_sigE627.endRow);
      return {
        left: var_core_value_sig24B9.left + var_core_value_sigEF3E.start,
        right: var_core_value_sig24B9.left + var_core_value_sigEF3E.start + var_core_value_sigEF3E.size,
        top: var_core_value_sig24B9.top + var_core_value_sig273D.start,
        bottom: var_core_value_sig24B9.top + var_core_value_sig273D.start + var_core_value_sig273D.size
      };
    };
  }
  _resolveTableSelectionObject(var_core_value_sigB99B, var_core_value_sig5A75) {
    var var_core_value_sig7BAF, var_core_value_sig8F69;
    let var_core_value_sig6884 = this._renderContext["scene"],
      var_core_value_sig066E = (0, n.getBoardElementRenderObjectKey)(var_core_value_sigB99B, var_core_value_sig5A75);
    return ((var_core_value_sig7BAF = var_core_value_sig6884.getObjectIncludeInGroup) == null ? undefined : var_core_value_sig7BAF.call(var_core_value_sig6884, var_core_value_sig066E)) ?? ((var_core_value_sig8F69 = var_core_value_sig6884.getObject) == null ? undefined : var_core_value_sig8F69.call(var_core_value_sig6884, var_core_value_sig066E)) ?? null;
  }
  _resolveSelectedEntry(var_core_value_sig9B0D) {
    var var_core_value_sig3D2C;
    if (!var_core_value_sig9B0D) return null;
    let var_core_value_sigC56D = (0, n.parseBoardElementRenderObjectKey)(var_core_value_sig9B0D.oKey);
    if (!var_core_value_sigC56D) return null;
    let var_core_value_sig3A17 = this._elementStateService["getSnapshot"](),
      var_core_value_sig938F = ((var_core_value_sig3D2C = var_core_value_sig3A17.context) == null ? undefined : var_core_value_sig3D2C.unitId) === var_core_value_sigC56D.unitId ? var_core_value_sig3A17.context["subUnitId"] : undefined;
    if (!var_core_value_sig938F) return null;
    let var_core_value_sigD948 = this._boardElementService["getElementById"](var_core_value_sigC56D.unitId, var_core_value_sig938F, var_core_value_sigC56D.elementId);
    return !var_core_value_sigD948 || var_core_value_sigD948.element["type"] !== e.BoardElementType["Table"] ? null : {
      object: var_core_value_sig9B0D,
      elementData: var_core_value_sigD948
    };
  }
};
pt = L([I(1, (0, s.Inject)(n.BoardCanvasPopManagerService)), I(2, (0, s.Inject)(e.IBoardElementService)), I(3, (0, s.Inject)(a.SlideTableSelectionService)), I(4, (0, s.Inject)(n.IBoardElementStateService)), I(5, (0, s.Inject)(i.SlideTableResourceService)), I(6, (0, s.Inject)(n.BoardInteractionSurfaceService))], pt);
function mt(var_core_value_sig3EC0, var_core_value_sigEA69) {
  return !!var_core_value_sig3EC0 && var_core_value_sig3EC0.unitId === var_core_value_sigEA69.unitId && var_core_value_sig3EC0.subUnitId === var_core_value_sigEA69.subUnitId && var_core_value_sig3EC0.elementId === var_core_value_sigEA69.elementId && var_core_value_sig3EC0.tableId === var_core_value_sigEA69.element["tableId"] && !!var_core_value_sig3EC0.ranges["length"];
}
function ht(var_core_value_sigF42A, var_core_value_sig898E, var_core_value_sigC481, var_core_value_sig27B7) {
  let var_core_value_sig2DAD = var_core_value_sigF42A.reduce((var_core_value_sigBE5E, var_core_value_sig0281) => var_core_value_sigBE5E + var_core_value_sig0281, 0);
  if (var_core_value_sig2DAD <= 0 || var_core_value_sigF42A.length === 0) return {
    start: 0,
    size: var_core_value_sig898E
  };
  let var_core_value_sig00DE = Math.max(0, Math.min(var_core_value_sigC481, var_core_value_sigF42A.length - 1)),
    var_core_value_sigEF7C = Math.max(var_core_value_sig00DE, Math.min(var_core_value_sig27B7, var_core_value_sigF42A.length - 1)),
    var_core_value_sig07E7 = var_core_value_sigF42A.slice(0, var_core_value_sig00DE).reduce((var_core_value_sigED71, var_core_value_sig281C) => var_core_value_sigED71 + var_core_value_sig281C, 0),
    var_core_value_sig6005 = var_core_value_sigF42A.slice(var_core_value_sig00DE, var_core_value_sigEF7C + 1).reduce((var_core_value_sig3C92, var_core_value_sigB16B) => var_core_value_sig3C92 + var_core_value_sigB16B, 0);
  return {
    start: var_core_value_sig07E7 / var_core_value_sig2DAD * var_core_value_sig898E,
    size: var_core_value_sig6005 / var_core_value_sig2DAD * var_core_value_sig898E
  };
}
var gt = class extends a.SlideTableObject {
  constructor(var_core_value_sig585D, var_core_value_sigE722) {
    super(var_core_value_sig585D, {
      ...var_core_value_sigE722,
      controlButtonMode: "table-handle"
    }), G(this, "_element", undefined), this._element = var_core_value_sigE722.element;
  }
  updateElement(var_core_value_sig062A) {
    this._element = var_core_value_sig062A, this.makeDirty(true);
  }
  getElement() {
    return this._element;
  }
};
let _t = class extends s.RxDisposable {
  constructor(var_core_value_sig050A, var_core_value_sig8B32, var_core_value_sig870F, var_core_value_sigB683, var_core_value_sig26EC) {
    super(), this._renderContext = var_core_value_sig050A, this._instanceService = var_core_value_sig8B32, this._boardElementService = var_core_value_sig870F, this._slideTableModelService = var_core_value_sigB683, this._slideTableResourceService = var_core_value_sig26EC, this._init();
  }
  _init() {
    this.disposeWithMe((0, s.toDisposable)(this._slideTableModelService["tableChange$"].subscribe(var_core_value_sig9A0D => {
      var_core_value_sig9A0D.unitId === this._renderContext["unitId"] && this._syncTableObjects(var_core_value_sig9A0D.tableId);
    }))), this.disposeWithMe((0, s.toDisposable)(this._slideTableModelService["tableRemoval$"].subscribe(var_core_value_sigA319 => {
      var_core_value_sigA319.unitId === this._renderContext["unitId"] && this._syncTableObjects(var_core_value_sigA319.tableId);
    })));
  }
  _syncTableObjects(var_core_value_sigEEDB) {
    let {
        unitId: var_core_value_sig36E7
      } = this._renderContext,
      var_core_value_sig6A78 = this._instanceService["getUnit"](var_core_value_sig36E7, s.UniverInstanceType["UNIVER_BOARD"]);
    if (!var_core_value_sig6A78) return;
    let var_core_value_sigF7EF = var_core_value_sig6A78.getActivePageId(),
      var_core_value_sig27F9 = this._boardElementService["getElementData"](var_core_value_sig36E7, var_core_value_sigF7EF),
      var_core_value_sig393E = this._slideTableModelService["getTable"](var_core_value_sig36E7, var_core_value_sigEEDB) ?? null,
      var_core_value_sigB609 = this._slideTableResourceService["getThemes"](var_core_value_sig36E7),
      var_core_value_sig390D = false;
    if (Object.values(var_core_value_sig27F9).forEach(var_core_value_sig2D58 => {
      if (!vt(var_core_value_sig2D58) || var_core_value_sig2D58.element["tableId"] !== var_core_value_sigEEDB) return;
      let var_core_value_sig223F = this._getBoardTableObject((0, n.getBoardElementRenderObjectKey)(var_core_value_sig36E7, var_core_value_sig2D58.elementId));
      var_core_value_sig223F && (var_core_value_sig223F.updateElement(var_core_value_sig2D58.element), var_core_value_sig223F.setTableThemes(var_core_value_sigB609), var_core_value_sig223F.setTable(var_core_value_sig393E), var_core_value_sig390D = true);
    }), var_core_value_sig390D) {
      var var_core_value_sigC928, var_core_value_sig39B7;
      (var_core_value_sigC928 = (var_core_value_sig39B7 = this._renderContext["scene"]).makeDirty) == null || var_core_value_sigC928.call(var_core_value_sig39B7, true);
    }
  }
  _getBoardTableObject(var_core_value_sig18E0) {
    var var_core_value_sigE161, var_core_value_sigBDEE;
    let var_core_value_sig1F40 = this._renderContext["scene"],
      var_core_value_sig3FC7 = ((var_core_value_sigE161 = var_core_value_sig1F40.getObjectIncludeInGroup) == null ? undefined : var_core_value_sigE161.call(var_core_value_sig1F40, var_core_value_sig18E0)) ?? ((var_core_value_sigBDEE = var_core_value_sig1F40.getObject) == null ? undefined : var_core_value_sigBDEE.call(var_core_value_sig1F40, var_core_value_sig18E0));
    return var_core_value_sig3FC7 instanceof gt ? var_core_value_sig3FC7 : null;
  }
};
_t = L([I(1, s.IUniverInstanceService), I(2, e.IBoardElementService), I(3, (0, s.Inject)(i.SlideTableModelService)), I(4, (0, s.Inject)(i.SlideTableResourceService))], _t);
function vt(var_core_value_sig25A4) {
  return var_core_value_sig25A4.element["type"] === e.BoardElementType["Table"];
}
var yt = class extends a.SlideTableCellEditorService {
  getEditing() {
    return this.getSession();
  }
  subscribe(var_core_value_sig1E1B) {
    return super.subscribe(var_core_value_sig1E1B);
  }
};
function bt(var_core_value_sigB591) {
  return var_core_value_sigB591.altKey || var_core_value_sigB591.ctrlKey || var_core_value_sigB591.metaKey || var_core_value_sigB591.key !== "Tab" ? null : var_core_value_sigB591.shiftKey ? "tab-backward" : "tab-forward";
}
function xt(var_core_value_sigB272, var_core_value_sig6F52) {
  var var_core_value_sig09C4, var_core_value_sig8E3E;
  if (!var_core_value_sigB272) return null;
  let var_core_value_sigC3D3 = ((var_core_value_sig09C4 = (var_core_value_sig8E3E = var_core_value_sig6F52.scene).getAncestorScale) == null ? undefined : var_core_value_sig09C4.call(var_core_value_sig8E3E)) ?? {};
  return {
    ...(0, a.resolveSlideTableCellEditorLayout)({
      rect: var_core_value_sigB272.rect,
      tableTransform: var_core_value_sigB272.tableTransform,
      scale: {
        scaleX: K(var_core_value_sigC3D3.scaleX, 1),
        scaleY: K(var_core_value_sigC3D3.scaleY, 1)
      },
      scenePointToViewportPoint: var_core_value_sig3B10 => Ct(var_core_value_sig3B10, var_core_value_sig6F52)
    }),
    ...(var_core_value_sigB272.horizontalAlign === undefined ? {} : {
      horizontalAlign: var_core_value_sigB272.horizontalAlign
    }),
    ...(var_core_value_sigB272.verticalAlign === undefined ? {} : {
      verticalAlign: var_core_value_sigB272.verticalAlign
    }),
    ...(var_core_value_sigB272.isHorizontal === undefined ? {} : {
      isHorizontal: var_core_value_sigB272.isHorizontal
    })
  };
}
function St(var_core_value_sig1451, var_core_value_sigAD57) {
  var var_core_value_sig58A8, var_core_value_sigEC1A;
  let var_core_value_sigBDED = var_core_value_sig1451 == null || (var_core_value_sig58A8 = var_core_value_sig1451.getBoundingClientRect) == null ? undefined : var_core_value_sig58A8.call(var_core_value_sig1451);
  if (!var_core_value_sigBDED) return;
  let var_core_value_sig4BFF = var_core_value_sigAD57 == null || (var_core_value_sigEC1A = var_core_value_sigAD57.getBoundingClientRect) == null ? undefined : var_core_value_sigEC1A.call(var_core_value_sigAD57),
    var_core_value_sig40E7 = var_core_value_sig4BFF ? var_core_value_sig4BFF.left + ((var_core_value_sigAD57 == null ? undefined : var_core_value_sigAD57.clientLeft) ?? 0) - ((var_core_value_sigAD57 == null ? undefined : var_core_value_sigAD57.scrollLeft) ?? 0) : 0,
    var_core_value_sigEDBA = var_core_value_sig4BFF ? var_core_value_sig4BFF.top + ((var_core_value_sigAD57 == null ? undefined : var_core_value_sigAD57.clientTop) ?? 0) - ((var_core_value_sigAD57 == null ? undefined : var_core_value_sigAD57.scrollTop) ?? 0) : 0;
  return {
    left: var_core_value_sigBDED.left - var_core_value_sig40E7,
    top: var_core_value_sigBDED.top - var_core_value_sigEDBA
  };
}
function Ct(var_core_value_sigE863, var_core_value_sig04B4) {
  var var_core_value_sig1C07, var_core_value_sig93D6, var_core_value_sigDD05, var_core_value_sig3932, var_core_value_sig48B2;
  let var_core_value_sig57DF = (var_core_value_sig1C07 = (var_core_value_sig93D6 = var_core_value_sig04B4.scene).getViewport) == null || (var_core_value_sig1C07 = var_core_value_sig1C07.call(var_core_value_sig93D6, n.BOARD_MAIN_VIEWPORT_KEY)) == null || (var_core_value_sigDD05 = var_core_value_sig1C07.getAbsoluteVector) == null ? undefined : var_core_value_sigDD05.call(var_core_value_sig1C07, new c["Vector2"](var_core_value_sigE863.x, var_core_value_sigE863.y)),
    var_core_value_sigC985 = var_core_value_sig04B4.canvasOffset ?? {
      left: 0,
      top: 0
    };
  if (var_core_value_sig57DF) return {
    x: var_core_value_sigC985.left + var_core_value_sig57DF.x,
    y: var_core_value_sigC985.top + var_core_value_sig57DF.y
  };
  let var_core_value_sig8DA6 = ((var_core_value_sig3932 = (var_core_value_sig48B2 = var_core_value_sig04B4.scene).getAncestorScale) == null ? undefined : var_core_value_sig3932.call(var_core_value_sig48B2)) ?? {},
    var_core_value_sigCA69 = K(var_core_value_sig04B4.canvasScale, 1),
    var_core_value_sigB77C = K(var_core_value_sig8DA6.scaleX, 1) * var_core_value_sigCA69,
    var_core_value_sig9AFF = K(var_core_value_sig8DA6.scaleY, 1) * var_core_value_sigCA69;
  return {
    x: var_core_value_sigC985.left + var_core_value_sigE863.x * var_core_value_sigB77C,
    y: var_core_value_sigC985.top + var_core_value_sigE863.y * var_core_value_sig9AFF
  };
}
function K(var_core_value_sig3545, var_core_value_sig5EE4) {
  return typeof var_core_value_sig3545 == "number" && Number.isFinite(var_core_value_sig3545) && var_core_value_sig3545 > 0 ? var_core_value_sig3545 : var_core_value_sig5EE4;
}
let wt = class extends s.RxDisposable {
  constructor(var_core_value_sig89E6, var_core_value_sig4743, var_core_value_sigEB6A, var_core_value_sig3D46, var_core_value_sigCC93, var_core_value_sig5964, var_core_value_sig808B, var_core_value_sig2A26, var_core_value_sig1179, var_core_value_sigEA92, var_core_value_sig8FD9, var_core_value_sig1AE5, var_core_value_sig7100, var_core_value_sigA19A, var_core_value_sigD3F5, var_core_value_sig3082) {
    super(), this._renderContext = var_core_value_sig89E6, this._instanceService = var_core_value_sig4743, this._boardElementService = var_core_value_sigEB6A, this._slideTableSelectionService = var_core_value_sig3D46, this._contextMenuService = var_core_value_sigCC93, this._keyboardService = var_core_value_sig5964, this._cellEditorBridgeService = var_core_value_sig808B, this._commandService = var_core_value_sig2A26, this._contextService = var_core_value_sig1179, this._slideTableResourceService = var_core_value_sigEA92, this._boardElementStateService = var_core_value_sig8FD9, this._boardUIStateService = var_core_value_sig1AE5, this._editorUIService = var_core_value_sig7100, this._layoutService = var_core_value_sigA19A, this._permissionService = var_core_value_sigD3F5, this._boardImageInsertService = var_core_value_sig3082, G(this, "_attachScheduled", false), G(this, "_objectPointerDisposables", null), G(this, "_resizeState", null), G(this, "_rangeDragState", null), G(this, "_headerDragState", null), G(this, "_pendingHeaderMoveState", null), G(this, "_rowColumnMoveState", null), G(this, "_rowColumnMoveTarget", null), G(this, "_tableHandleMoveState", null), G(this, "_pendingStage1BodyState", null), G(this, "_tableActivationStage", null), G(this, "_activeTableContext", null), G(this, "_resizeHoverActive", false), G(this, "_areTransformerControlsHiddenForTableMove", false), G(this, "_areTransformerControlsHiddenForTableStructuralHover", false), G(this, "_tableStructuralHoverTransformerObject", null), G(this, "_handleClipboardCopy", var_core_value_sigD749 => {
      let var_core_value_sigCFFA = this._resolveTableClipboardTarget(var_core_value_sigD749);
      !var_core_value_sigCFFA || !var_core_value_sigD749.clipboardData || !this._canCopyTable(var_core_value_sigCFFA.selection) || (var_core_value_sigD749.clipboardData["setData"]("text/plain", (0, a.serializeSlideTableSelectionToText)(var_core_value_sigCFFA.table, var_core_value_sigCFFA.selection)), var_core_value_sigD749.clipboardData["setData"]("text/html", (0, a.serializeSlideTableSelectionToHtml)(var_core_value_sigCFFA.table, var_core_value_sigCFFA.selection)), var_core_value_sigD749.preventDefault(), var_core_value_sigD749.stopPropagation());
    }), G(this, "_handleClipboardCut", async var_core_value_sig58C1 => {
      let var_core_value_sig5090 = this._resolveTableClipboardTarget(var_core_value_sig58C1);
      if (!var_core_value_sig5090 || !var_core_value_sig58C1.clipboardData || !this._canCopyTable(var_core_value_sig5090.selection)) return;
      let var_core_value_sigC368 = (0, a.buildSlideTableClearTextPatch)(var_core_value_sig5090.table, var_core_value_sig5090.selection);
      var_core_value_sigC368 && (var_core_value_sig58C1.clipboardData["setData"]("text/plain", (0, a.serializeSlideTableSelectionToText)(var_core_value_sig5090.table, var_core_value_sig5090.selection)), var_core_value_sig58C1.clipboardData["setData"]("text/html", (0, a.serializeSlideTableSelectionToHtml)(var_core_value_sig5090.table, var_core_value_sig5090.selection)), var_core_value_sig58C1.preventDefault(), var_core_value_sig58C1.stopPropagation(), await this._commitClipboardPatch(var_core_value_sig5090, var_core_value_sigC368));
    }), G(this, "_handleClipboardPaste", async var_core_value_sigAD56 => {
      let var_core_value_sigDB4A = this._resolveTableClipboardTarget(var_core_value_sigAD56);
      if (!var_core_value_sigDB4A || !var_core_value_sigAD56.clipboardData) return;
      let var_core_value_sig6418 = var_core_value_sigAD56.clipboardData["getData"]("text/html"),
        var_core_value_sig1896 = var_core_value_sigAD56.clipboardData["getData"]("text/plain"),
        var_core_value_sig0285 = (0, g.isClipboardTextImage)(var_core_value_sig1896) ? await (0, g.extractClipboardTextImageFile)(var_core_value_sig1896) : null,
        var_core_value_sig777D = var_core_value_sig0285 ? null : (var_core_value_sig6418 ? (0, a.buildSlideTablePasteHtmlPatch)(var_core_value_sigDB4A.table, var_core_value_sigDB4A.selection, var_core_value_sig6418) : null) ?? (0, a.buildSlideTablePasteTextPatch)(var_core_value_sigDB4A.table, var_core_value_sigDB4A.selection, var_core_value_sig1896),
        var_core_value_sig3F4C = var_core_value_sig0285 ? [var_core_value_sig0285] : await Rt(var_core_value_sigAD56.clipboardData, var_core_value_sig6418);
      !var_core_value_sig777D && var_core_value_sig3F4C.length === 0 || (var_core_value_sigAD56.preventDefault(), var_core_value_sigAD56.stopPropagation(), !(var_core_value_sig777D && !(await this._commitClipboardPatch(var_core_value_sigDB4A, var_core_value_sig777D))) && (await this._insertClipboardImages(var_core_value_sig3F4C, +!!var_core_value_sig777D)));
    }), this._init();
  }
  dispose() {
    this._resetTableInteraction(), super.dispose();
  }
  _init() {
    document.addEventListener("copy", this._handleClipboardCopy, true), document.addEventListener("cut", this._handleClipboardCut, true), document.addEventListener("paste", this._handleClipboardPaste, true), this.disposeWithMe((0, s.toDisposable)(() => {
      document.removeEventListener("copy", this._handleClipboardCopy, true), document.removeEventListener("cut", this._handleClipboardCut, true), document.removeEventListener("paste", this._handleClipboardPaste, true);
    })), this._initScenePointerEvents(), this.disposeWithMe(this._keyboardService["setHandler"](var_core_value_sigD65A => this._handleKeyboardAction(var_core_value_sigD65A))), this.disposeWithMe(this._keyboardService["setInputHandler"](var_core_value_sig5A13 => this._handleKeyboardInput(var_core_value_sig5A13))), this.disposeWithMe((0, s.toDisposable)(this._slideTableSelectionService["selection$"].subscribe(var_core_value_sigF593 => {
      this._syncSelection(var_core_value_sigF593), var_core_value_sigF593 && this._syncActivationStageFromSelection(var_core_value_sigF593), this._keyboardService["setFocused"](!!var_core_value_sigF593 && var_core_value_sigF593.kind !== "text");
    })));
    let var_core_value_sigF5D1 = this._instanceService["getUnit"](this._renderContext["unitId"], s.UniverInstanceType["UNIVER_BOARD"]);
    var_core_value_sigF5D1 && (this.disposeWithMe((0, s.toDisposable)(() => {
      var var_core_value_sig3607;
      return (var_core_value_sig3607 = this._objectPointerDisposables) == null ? undefined : var_core_value_sig3607.dispose();
    })), this._attachObjectPointerEvents(var_core_value_sigF5D1), this._subscribeBoardElementChanges(var_core_value_sigF5D1), this._subscribeBoardElementStateChanges(var_core_value_sigF5D1), this.disposeWithMe((0, s.toDisposable)(this._boardUIStateService["state$"].subscribe(var_core_value_sigB512 => {
      var_core_value_sigB512.interactionMode === "viewing" && this._resetTableInteraction();
    }))));
  }
  _initScenePointerEvents() {
    var var_core_value_sig8775, var_core_value_sig481B, var_core_value_sig13D7, var_core_value_sig90C0;
    let var_core_value_sigF1B2 = this._renderContext["scene"],
      var_core_value_sigC2BB = (var_core_value_sig8775 = var_core_value_sigF1B2.onPointerDown$) == null ? undefined : var_core_value_sig8775.subscribeEvent((var_core_value_sigF2E6, var_core_value_sig34C8) => {
        this._handleScenePointerDown(var_core_value_sigF2E6, var_core_value_sig34C8);
      });
    var_core_value_sigC2BB && this.disposeWithMe((0, s.toDisposable)(() => kt(var_core_value_sigC2BB)));
    let var_core_value_sigD9DB = (var_core_value_sig481B = var_core_value_sigF1B2.onPointerMove$) == null ? undefined : var_core_value_sig481B.subscribeEvent(var_core_value_sigB744 => {
      this._handlePendingStage1BodyPointerMove(var_core_value_sigB744), this._handleTableHandleMovePointerMove(var_core_value_sigB744), this._handleRowColumnMovePointerMove(var_core_value_sigB744), this._handleHeaderDragPointerMove(var_core_value_sigB744), this._handleResizeCursorHover(var_core_value_sigB744), this._handleControlHoverPointerMove(var_core_value_sigB744), this._handleResizePointerMove(var_core_value_sigB744), this._handleRangeDragPointerMove(var_core_value_sigB744);
    });
    var_core_value_sigD9DB && this.disposeWithMe((0, s.toDisposable)(() => kt(var_core_value_sigD9DB)));
    let var_core_value_sigA363 = (var_core_value_sig13D7 = var_core_value_sigF1B2.onPointerUp$) == null ? undefined : var_core_value_sig13D7.subscribeEvent(var_core_value_sigEAE2 => {
      this._finishTableHandleMove(var_core_value_sigEAE2), this._finishPendingStage1Body({
        focusCell: true
      }), this._finishRowColumnMove({
        commit: true
      }), this._handleResizePointerUp(var_core_value_sigEAE2), this._finishRangeDrag(), this._finishHeaderDrag();
    });
    var_core_value_sigA363 && this.disposeWithMe((0, s.toDisposable)(() => kt(var_core_value_sigA363)));
    let var_core_value_sigFBA5 = (var_core_value_sig90C0 = var_core_value_sigF1B2.onPointerCancel$) == null ? undefined : var_core_value_sig90C0.subscribeEvent(() => {
      this._finishPendingStage1Body({
        focusCell: false
      }), this._cancelTableHandleMove(), this._finishRowColumnMove({
        commit: false
      }), this._cancelResizePreview(), this._resetResizeCursor(), this._finishRangeDrag(), this._finishHeaderDrag();
    });
    var_core_value_sigFBA5 && this.disposeWithMe((0, s.toDisposable)(() => kt(var_core_value_sigFBA5)));
  }
  _handleScenePointerDown(var_core_value_sigAC47, var_core_value_sigA06F) {
    if (this._boardUIStateService["getState"]().interactionMode === "viewing") return;
    let var_core_value_sig770E = var_core_value_sigAC47.button ?? 0;
    if (var_core_value_sig770E !== 0 && var_core_value_sig770E !== 2 || this._isTableTextEditing()) return;
    this._tableActivationStage && !this._isActiveTablePointerDown(var_core_value_sigAC47) && this._resetTableInteraction();
    let var_core_value_sig4654 = this._instanceService["getUnit"](this._renderContext["unitId"], s.UniverInstanceType["UNIVER_BOARD"]);
    if (!var_core_value_sig4654) return;
    let var_core_value_sigB26B = var_core_value_sig4654.getUnitId(),
      var_core_value_sig019B = var_core_value_sig4654.getActivePageId(),
      var_core_value_sigC6BC = this._boardElementService["getElementData"](var_core_value_sigB26B, var_core_value_sig019B),
      var_core_value_sig8EC2 = this._getBoardPointVectorFromEvent(var_core_value_sigAC47);
    for (let var_core_value_sigE68A of Object.values(var_core_value_sigC6BC)) {
      var var_core_value_sigA8C3, var_core_value_sig5276;
      if (!q(var_core_value_sigE68A)) continue;
      let var_core_value_sigFBFA = this._getBoardTableObject((0, n.getBoardElementRenderObjectKey)(var_core_value_sigB26B, var_core_value_sigE68A.elementId)),
        var_core_value_sigF602 = var_core_value_sigFBFA == null ? undefined : var_core_value_sigFBFA.getTable(),
        var_core_value_sig1BBD = var_core_value_sigFBFA == null ? undefined : var_core_value_sigFBFA.hitTestStructuralTriggerAtScenePoint(var_core_value_sig8EC2);
      if (var_core_value_sigFBFA && var_core_value_sigF602 && var_core_value_sig770E === 0 && (0, a.isSlideTableInsertDotTrigger)(var_core_value_sig1BBD)) {
        if (this._handleStructuralInsertTrigger(var_core_value_sigB26B, var_core_value_sigE68A, var_core_value_sigFBFA, var_core_value_sig1BBD, var_core_value_sig8EC2)) {
          var var_core_value_sig031B, var_core_value_sig9DC0;
          (var_core_value_sig031B = var_core_value_sigAC47.preventDefault) == null || var_core_value_sig031B.call(var_core_value_sigAC47), (var_core_value_sig9DC0 = var_core_value_sigAC47.stopPropagation) == null || var_core_value_sig9DC0.call(var_core_value_sigAC47), J(var_core_value_sigA06F), this._makeSceneDirty();
        }
        return;
      }
      let var_core_value_sigF704 = var_core_value_sigFBFA == null ? undefined : var_core_value_sigFBFA.hitTestControlAtScenePoint(var_core_value_sig8EC2);
      if (!var_core_value_sigFBFA || !var_core_value_sigF602 || !var_core_value_sigF704 && !var_core_value_sig1BBD) continue;
      if (!this._isTableReadyForCellInteraction(var_core_value_sig4654, var_core_value_sigE68A)) return;
      let var_core_value_sig2BCF = null;
      if (this._slideTableSelectionService["markTableInternalInteraction"](), (var_core_value_sig1BBD == null ? undefined : var_core_value_sig1BBD.kind) === "row-header" && var_core_value_sig1BBD.row !== undefined) {
        let var_core_value_sigBC46 = this._getSelectedHeaderRange(var_core_value_sigE68A, "row", var_core_value_sig1BBD.row);
        if (var_core_value_sig770E === 0 && var_core_value_sigBC46) {
          var var_core_value_sig95F0, var_core_value_sig9CCB;
          this._startPendingHeaderMove({
            kind: "row",
            unitId: var_core_value_sigB26B,
            subUnitId: var_core_value_sig019B,
            elementId: var_core_value_sigE68A.elementId,
            tableId: var_core_value_sigE68A.element["tableId"],
            object: var_core_value_sigFBFA,
            table: var_core_value_sigF602,
            start: var_core_value_sigBC46.start,
            end: var_core_value_sigBC46.end,
            startPoint: var_core_value_sig8EC2
          }), (var_core_value_sig95F0 = var_core_value_sigAC47.preventDefault) == null || var_core_value_sig95F0.call(var_core_value_sigAC47), (var_core_value_sig9CCB = var_core_value_sigAC47.stopPropagation) == null || var_core_value_sig9CCB.call(var_core_value_sigAC47), J(var_core_value_sigA06F);
          return;
        }
        let var_core_value_sig3D7D = (0, i.expandSlideTableRangeToMergedCells)(var_core_value_sigF602, {
          startRow: var_core_value_sig1BBD.row,
          endRow: var_core_value_sig1BBD.row,
          startColumn: 0,
          endColumn: Math.max(0, var_core_value_sigF602.columns["length"] - 1)
        });
        var_core_value_sig2BCF = this._slideTableSelectionService["selectRows"]({
          unitId: var_core_value_sigB26B,
          subUnitId: var_core_value_sig019B,
          elementId: var_core_value_sigE68A.elementId,
          tableId: var_core_value_sigE68A.element["tableId"],
          startRow: var_core_value_sig3D7D.startRow,
          endRow: var_core_value_sig3D7D.endRow,
          columnCount: var_core_value_sigF602.columns["length"]
        }), var_core_value_sig770E === 0 && (this._headerDragState = {
          kind: "row",
          anchor: var_core_value_sig1BBD.row,
          object: var_core_value_sigFBFA,
          selection: var_core_value_sig2BCF,
          table: var_core_value_sigF602
        });
      } else {
        if ((var_core_value_sig1BBD == null ? undefined : var_core_value_sig1BBD.kind) === "column-header" && var_core_value_sig1BBD.column !== undefined) {
          let var_core_value_sig2AD8 = this._getSelectedHeaderRange(var_core_value_sigE68A, "column", var_core_value_sig1BBD.column);
          if (var_core_value_sig770E === 0 && var_core_value_sig2AD8) {
            var var_core_value_sigE718, var_core_value_sigAEC8;
            this._startPendingHeaderMove({
              kind: "column",
              unitId: var_core_value_sigB26B,
              subUnitId: var_core_value_sig019B,
              elementId: var_core_value_sigE68A.elementId,
              tableId: var_core_value_sigE68A.element["tableId"],
              object: var_core_value_sigFBFA,
              table: var_core_value_sigF602,
              start: var_core_value_sig2AD8.start,
              end: var_core_value_sig2AD8.end,
              startPoint: var_core_value_sig8EC2
            }), (var_core_value_sigE718 = var_core_value_sigAC47.preventDefault) == null || var_core_value_sigE718.call(var_core_value_sigAC47), (var_core_value_sigAEC8 = var_core_value_sigAC47.stopPropagation) == null || var_core_value_sigAEC8.call(var_core_value_sigAC47), J(var_core_value_sigA06F);
            return;
          }
          let var_core_value_sig2AD0 = (0, i.expandSlideTableRangeToMergedCells)(var_core_value_sigF602, {
            startRow: 0,
            endRow: Math.max(0, var_core_value_sigF602.rows["length"] - 1),
            startColumn: var_core_value_sig1BBD.column,
            endColumn: var_core_value_sig1BBD.column
          });
          var_core_value_sig2BCF = this._slideTableSelectionService["selectColumns"]({
            unitId: var_core_value_sigB26B,
            subUnitId: var_core_value_sig019B,
            elementId: var_core_value_sigE68A.elementId,
            tableId: var_core_value_sigE68A.element["tableId"],
            startColumn: var_core_value_sig2AD0.startColumn,
            endColumn: var_core_value_sig2AD0.endColumn,
            rowCount: var_core_value_sigF602.rows["length"]
          }), var_core_value_sig770E === 0 && (this._headerDragState = {
            kind: "column",
            anchor: var_core_value_sig1BBD.column,
            object: var_core_value_sigFBFA,
            selection: var_core_value_sig2BCF,
            table: var_core_value_sigF602
          });
        } else (var_core_value_sigF704 == null ? undefined : var_core_value_sigF704.kind) === "table-handle" && (var_core_value_sig2BCF = this._slideTableSelectionService["selectTable"]({
          unitId: var_core_value_sigB26B,
          subUnitId: var_core_value_sig019B,
          elementId: var_core_value_sigE68A.elementId,
          tableId: var_core_value_sigE68A.element["tableId"],
          rowCount: var_core_value_sigF602.rows["length"],
          columnCount: var_core_value_sigF602.columns["length"]
        }), this._boardElementStateService["selectElements"]({
          unitId: var_core_value_sigB26B,
          subUnitId: var_core_value_sig019B
        }, [var_core_value_sigE68A.elementId], var_core_value_sigE68A.elementId), var_core_value_sig770E === 0 && this._startTableHandleMove(var_core_value_sigB26B, var_core_value_sig019B, var_core_value_sigC6BC, var_core_value_sigE68A, var_core_value_sigFBFA, var_core_value_sigAC47));
      }
      if (var_core_value_sig2BCF) {
        (var_core_value_sigF704 == null ? undefined : var_core_value_sigF704.kind) !== "table-handle" && this._beginTableInternalInteraction(var_core_value_sigFBFA), var_core_value_sigFBFA.setTableSelection((0, a.resolveSlideTableObjectSelection)(var_core_value_sig2BCF)), var_core_value_sig770E === 2 && this._openContextMenu(var_core_value_sigAC47), (var_core_value_sigA8C3 = var_core_value_sigAC47.preventDefault) == null || var_core_value_sigA8C3.call(var_core_value_sigAC47), (var_core_value_sig5276 = var_core_value_sigAC47.stopPropagation) == null || var_core_value_sig5276.call(var_core_value_sigAC47), J(var_core_value_sigA06F), this._makeSceneDirty();
        return;
      }
    }
  }
  _handleStructuralInsertTrigger(var_core_value_sigB977, var_core_value_sig2949, var_core_value_sig308A, var_core_value_sig528D, var_core_value_sigA309) {
    let var_core_value_sig9E20 = Pt(var_core_value_sig528D),
      var_core_value_sig26BB = false;
    if (var_core_value_sig528D.kind === "row-insert-dot" && var_core_value_sig9E20 !== null) {
      let var_core_value_sig3E68 = this._slideTableResourceService["getTable"](var_core_value_sigB977, var_core_value_sig2949.element["tableId"]);
      var_core_value_sig26BB = !!this._commandService["executeCommand"](t.InsertBoardTableRowsCommand["id"], {
        unitId: var_core_value_sigB977,
        subUnitId: var_core_value_sig2949.subUnitId,
        elementId: var_core_value_sig2949.elementId,
        tableId: var_core_value_sig2949.element["tableId"],
        rowIndex: var_core_value_sig9E20,
        count: 1,
        height: Mt(var_core_value_sig3E68, var_core_value_sig9E20)
      });
    } else {
      if (var_core_value_sig528D.kind === "column-insert-dot" && var_core_value_sig9E20 !== null) {
        let var_core_value_sig0D69 = this._slideTableResourceService["getTable"](var_core_value_sigB977, var_core_value_sig2949.element["tableId"]);
        var_core_value_sig26BB = !!this._commandService["executeCommand"](t.InsertBoardTableColumnsCommand["id"], {
          unitId: var_core_value_sigB977,
          subUnitId: var_core_value_sig2949.subUnitId,
          elementId: var_core_value_sig2949.elementId,
          tableId: var_core_value_sig2949.element["tableId"],
          columnIndex: var_core_value_sig9E20,
          count: 1,
          width: Nt(var_core_value_sig0D69, var_core_value_sig9E20)
        });
      }
    }
    if (var_core_value_sig26BB) {
      let var_core_value_sigF4C5 = var_core_value_sig308A.hitTestStructuralTriggerAtScenePoint(var_core_value_sigA309),
        var_core_value_sig5410 = (0, a.buildSlideTableInsertDotControlState)((0, a.isSlideTableInsertDotTrigger)(var_core_value_sigF4C5) ? var_core_value_sigF4C5 : var_core_value_sig528D);
      var_core_value_sig308A.setTableControlState(var_core_value_sig5410), var_core_value_sig308A.setTableControlHover(null), var_core_value_sig308A.setTableCellHover(null);
    }
    return var_core_value_sig26BB;
  }
  _handleControlHoverPointerMove(var_core_value_sig19B4) {
    if (this._resizeState || this._rangeDragState || this._headerDragState || this._pendingHeaderMoveState || this._rowColumnMoveState || this._tableHandleMoveState) return;
    if (this._isTableTextEditing()) {
      this._clearTableControlHover();
      return;
    }
    let var_core_value_sig218A = this._instanceService["getUnit"](this._renderContext["unitId"], s.UniverInstanceType["UNIVER_BOARD"]);
    if (!var_core_value_sig218A) return;
    let var_core_value_sig14CB = var_core_value_sig218A.getUnitId(),
      var_core_value_sigFDEE = var_core_value_sig218A.getActivePageId(),
      var_core_value_sigA676 = this._boardElementService["getElementData"](var_core_value_sig14CB, var_core_value_sigFDEE),
      var_core_value_sigC27E = this._getBoardPointVectorFromEvent(var_core_value_sig19B4),
      var_core_value_sigA70D = false,
      var_core_value_sigCE10 = null;
    Object.values(var_core_value_sigA676).forEach(var_core_value_sig492F => {
      if (!q(var_core_value_sig492F)) return;
      let var_core_value_sig8EA0 = this._getBoardTableObject((0, n.getBoardElementRenderObjectKey)(var_core_value_sig14CB, var_core_value_sig492F.elementId));
      if (!var_core_value_sig8EA0) return;
      let var_core_value_sigA6F6 = var_core_value_sig8EA0.hitTestStructuralTriggerAtScenePoint(var_core_value_sigC27E),
        var_core_value_sigCDDA = (0, a.isSlideTableInsertDotTrigger)(var_core_value_sigA6F6) ? var_core_value_sigA6F6 : null;
      if (!this._isTableReadyForCellInteraction(var_core_value_sig218A, var_core_value_sig492F) && !var_core_value_sigCDDA) {
        let var_core_value_sig480E = var_core_value_sig8EA0.setTableControlHover(null),
          var_core_value_sig26DB = var_core_value_sig8EA0.setTableControlState(null),
          var_core_value_sigF0F9 = var_core_value_sig8EA0.setTableCellHover(null);
        var_core_value_sigA70D = var_core_value_sig480E || var_core_value_sig26DB || var_core_value_sigF0F9 || var_core_value_sigA70D;
        return;
      }
      let var_core_value_sigE243 = var_core_value_sig8EA0.hitTestControlAtScenePoint(var_core_value_sigC27E),
        var_core_value_sig74A8 = !!var_core_value_sigE243 || !!var_core_value_sigA6F6,
        var_core_value_sig21B2 = this._buildStructuralControlState(var_core_value_sigA6F6);
      if (var_core_value_sigCDDA && !this._isTableReadyForCellInteraction(var_core_value_sig218A, var_core_value_sig492F)) {
        let var_core_value_sig1A0F = var_core_value_sig8EA0.setTableControlHover(null),
          var_core_value_sigFBA4 = var_core_value_sig8EA0.setTableControlState(var_core_value_sig21B2),
          var_core_value_sig4383 = var_core_value_sig8EA0.setTableCellHover(null);
        var_core_value_sigA70D = var_core_value_sig1A0F || var_core_value_sigFBA4 || var_core_value_sig4383 || var_core_value_sigA70D;
        return;
      }
      var_core_value_sig21B2 && !this._isActiveTableContext(var_core_value_sig218A, var_core_value_sig492F) && this._isSelectedTableElement(var_core_value_sig218A, var_core_value_sig492F) && (var_core_value_sigCE10 = var_core_value_sig8EA0);
      let var_core_value_sigDE08 = var_core_value_sig8EA0.setTableControlHover(var_core_value_sigE243 ? {
          kind: var_core_value_sigE243.kind,
          row: var_core_value_sigE243.row ?? null,
          column: var_core_value_sigE243.column ?? null
        } : null),
        var_core_value_sigACCB = var_core_value_sig8EA0.setTableControlState(var_core_value_sig21B2),
        var_core_value_sig7F33 = this._updateTableCellHover(var_core_value_sig14CB, var_core_value_sigFDEE, var_core_value_sig492F, var_core_value_sig8EA0, var_core_value_sigC27E, var_core_value_sig74A8);
      var_core_value_sigA70D = var_core_value_sigDE08 || var_core_value_sigACCB || var_core_value_sig7F33 || var_core_value_sigA70D;
    }), var_core_value_sigA70D = this._setTransformerControlsHiddenForTableStructuralHover(var_core_value_sigCE10) || var_core_value_sigA70D, var_core_value_sigA70D && this._makeSceneDirty();
  }
  _updateTableCellHover(var_core_value_sigA386, var_core_value_sigCD82, var_core_value_sig44DD, var_core_value_sig96FA, var_core_value_sigAB68, var_core_value_sig040A) {
    if (var_core_value_sig040A || !this._isTableActiveForCellHover(var_core_value_sigA386, var_core_value_sigCD82, var_core_value_sig44DD)) return var_core_value_sig96FA.setTableCellHover(null);
    let var_core_value_sig2AE0 = var_core_value_sig96FA.hitTestCellAtScenePoint(var_core_value_sigAB68);
    return var_core_value_sig96FA.setTableCellHover((var_core_value_sig2AE0 == null ? undefined : var_core_value_sig2AE0.kind) === "cell" ? {
      row: var_core_value_sig2AE0.row,
      column: var_core_value_sig2AE0.column
    } : null);
  }
  _clearTableControlHover() {
    let var_core_value_sigC349 = this._instanceService["getUnit"](this._renderContext["unitId"], s.UniverInstanceType["UNIVER_BOARD"]);
    if (!var_core_value_sigC349) {
      this._setTransformerControlsHiddenForTableStructuralHover(null);
      return;
    }
    let var_core_value_sig9D96 = var_core_value_sigC349.getUnitId(),
      var_core_value_sig2776 = var_core_value_sigC349.getActivePageId(),
      var_core_value_sig6FB2 = this._boardElementService["getElementData"](var_core_value_sig9D96, var_core_value_sig2776),
      var_core_value_sigEB43 = false;
    Object.values(var_core_value_sig6FB2).forEach(var_core_value_sig0C53 => {
      if (!q(var_core_value_sig0C53)) return;
      let var_core_value_sigEA04 = this._getBoardTableObject((0, n.getBoardElementRenderObjectKey)(var_core_value_sig9D96, var_core_value_sig0C53.elementId));
      if (!var_core_value_sigEA04) return;
      let var_core_value_sig7A62 = var_core_value_sigEA04.setTableControlHover(null),
        var_core_value_sig8109 = var_core_value_sigEA04.setTableControlState(null),
        var_core_value_sig7565 = var_core_value_sigEA04.setTableCellHover(null);
      var_core_value_sigEB43 = var_core_value_sig7A62 || var_core_value_sig8109 || var_core_value_sig7565 || var_core_value_sigEB43;
    }), var_core_value_sigEB43 = this._setTransformerControlsHiddenForTableStructuralHover(null) || var_core_value_sigEB43, var_core_value_sigEB43 && this._makeSceneDirty();
  }
  _isTableActiveForCellHover(var_core_value_sig4186, var_core_value_sigF963, var_core_value_sigB608) {
    return !!this._tableActivationStage && !!this._activeTableContext && this._activeTableContext["unitId"] === var_core_value_sig4186 && this._activeTableContext["subUnitId"] === var_core_value_sigF963 && this._activeTableContext["elementId"] === var_core_value_sigB608.elementId && this._activeTableContext["tableId"] === var_core_value_sigB608.element["tableId"];
  }
  _syncActivationStageFromSelection(var_core_value_sigF866) {
    if (var_core_value_sigF866.unitId === this._renderContext["unitId"] && (this._tableActivationStage = var_core_value_sigF866.ranges["length"] ? "cell" : "table", this._activeTableContext = {
      unitId: var_core_value_sigF866.unitId,
      subUnitId: var_core_value_sigF866.subUnitId,
      elementId: var_core_value_sigF866.elementId,
      tableId: var_core_value_sigF866.tableId
    }, var_core_value_sigF866.ranges["length"])) {
      let var_core_value_sigD4FB = this._getBoardTableObject((0, n.getBoardElementRenderObjectKey)(var_core_value_sigF866.unitId, var_core_value_sigF866.elementId));
      if (var_core_value_sigD4FB) {
        var var_core_value_sig5EFB, var_core_value_sig3A85;
        (var_core_value_sig5EFB = (var_core_value_sig3A85 = this._renderContext["scene"]).getTransformer) == null || (var_core_value_sig5EFB = var_core_value_sig5EFB.call(var_core_value_sig3A85)) == null || var_core_value_sig5EFB.detachFrom(var_core_value_sigD4FB);
      }
    }
  }
  _subscribeBoardElementStateChanges(var_core_value_sig2682) {
    let var_core_value_sig4BB5 = this._boardElementStateService["state$"];
    if (!var_core_value_sig4BB5) return;
    let var_core_value_sig6709 = var_core_value_sig4BB5.subscribe(var_core_value_sig3E71 => {
      this._handleBoardElementStateChange(var_core_value_sig3E71);
    });
    this.disposeWithMe((0, s.toDisposable)(() => var_core_value_sig6709.unsubscribe()));
  }
  _handleBoardElementStateChange(var_core_value_sig52CA) {
    var var_core_value_sigC030;
    let var_core_value_sig88F6 = this._slideTableSelectionService["getSelection"](),
      var_core_value_sig37DB = var_core_value_sig88F6 ? {
        unitId: var_core_value_sig88F6.unitId,
        subUnitId: var_core_value_sig88F6.subUnitId,
        elementId: var_core_value_sig88F6.elementId,
        tableId: var_core_value_sig88F6.tableId
      } : this._activeTableContext;
    if (!var_core_value_sig37DB || !this._tableActivationStage) return;
    let var_core_value_sig5542 = ((var_core_value_sigC030 = var_core_value_sig52CA.context) == null ? undefined : var_core_value_sigC030.unitId) === var_core_value_sig37DB.unitId && var_core_value_sig52CA.context["subUnitId"] === var_core_value_sig37DB.subUnitId && var_core_value_sig52CA.selectedIds["includes"](var_core_value_sig37DB.elementId);
    if (var_core_value_sig5542 || this._slideTableSelectionService["isTableInternalInteractionActive"]()) {
      !var_core_value_sig5542 && var_core_value_sig52CA.selectedIds["length"] > 0 && this._resetTableInteraction();
      return;
    }
    this._resetTableInteraction();
  }
  _isActiveTablePointerDown(var_core_value_sigE0A9) {
    let var_core_value_sigA73E = this._activeTableContext;
    if (!var_core_value_sigA73E) return false;
    let var_core_value_sig7620 = this._getBoardTableObject((0, n.getBoardElementRenderObjectKey)(var_core_value_sigA73E.unitId, var_core_value_sigA73E.elementId));
    if (!var_core_value_sig7620) return false;
    let var_core_value_sigB9FC = this._getBoardPointVectorFromEvent(var_core_value_sigE0A9);
    return var_core_value_sig7620.isHit(var_core_value_sigB9FC) || Ft(var_core_value_sig7620, var_core_value_sigB9FC) || !!var_core_value_sig7620.hitTestCellAtScenePoint(var_core_value_sigB9FC) || !!var_core_value_sig7620.hitTestControlAtScenePoint(var_core_value_sigB9FC) || !!var_core_value_sig7620.hitTestStructuralTriggerAtScenePoint(var_core_value_sigB9FC) || !!var_core_value_sig7620.hitTestFloatingStructuralTriggerAtScenePoint(var_core_value_sigB9FC);
  }
  _resetTableInteraction() {
    let var_core_value_sig5055 = this._slideTableSelectionService["getSelection"](),
      var_core_value_sig3801 = [var_core_value_sig5055 ? {
        unitId: var_core_value_sig5055.unitId,
        subUnitId: var_core_value_sig5055.subUnitId,
        elementId: var_core_value_sig5055.elementId
      } : null, this._activeTableContext ? {
        unitId: this._activeTableContext["unitId"],
        subUnitId: this._activeTableContext["subUnitId"],
        elementId: this._activeTableContext["elementId"]
      } : null].filter(var_core_value_sig01B3 => !!var_core_value_sig01B3),
      var_core_value_sig45F0 = var_core_value_sig3801.filter((var_core_value_sig7442, var_core_value_sigDF87) => var_core_value_sig3801.findIndex(var_core_value_sig186C => var_core_value_sig186C.unitId === var_core_value_sig7442.unitId && var_core_value_sig186C.subUnitId === var_core_value_sig7442.subUnitId && var_core_value_sig186C.elementId === var_core_value_sig7442.elementId) === var_core_value_sigDF87);
    this._cancelActiveEditor(), this._finishRangeDrag(), this._finishHeaderDrag(), this._finishPendingStage1Body({
      focusCell: false
    }), this._cancelTableHandleMove(), this._finishRowColumnMove({
      commit: false
    }), this._cancelResizePreview(), this._pendingHeaderMoveState = null, this._tableActivationStage = null, this._activeTableContext = null, this._resetResizeCursor(), this._setTransformerControlsHiddenForTableStructuralHover(null), var_core_value_sig45F0.forEach(var_core_value_sig9EE0 => {
      let var_core_value_sigF0511 = this._getBoardTableObject((0, n.getBoardElementRenderObjectKey)(var_core_value_sig9EE0.unitId, var_core_value_sig9EE0.elementId));
      var_core_value_sigF0511 == null || var_core_value_sigF0511.setEditingCell(null), var_core_value_sigF0511 == null || var_core_value_sigF0511.setPreviewTable(null), var_core_value_sigF0511 == null || var_core_value_sigF0511.setTableSelection(null), var_core_value_sigF0511 == null || var_core_value_sigF0511.setTableCellHover(null), var_core_value_sigF0511 == null || var_core_value_sigF0511.setTableControlState(null), var_core_value_sigF0511 == null || var_core_value_sigF0511.setTableControlHover(null);
    }), this._slideTableSelectionService["clear"](), this._keyboardService["setFocused"](false), this._makeSceneDirty();
  }
  _buildStructuralControlState(var_core_value_sigBC91) {
    if (!var_core_value_sigBC91 || var_core_value_sigBC91.kind !== "row-header" && var_core_value_sigBC91.kind !== "column-header" && var_core_value_sigBC91.kind !== "row-insert-dot" && var_core_value_sigBC91.kind !== "column-insert-dot") return null;
    let var_core_value_sigCB88 = Pt(var_core_value_sigBC91);
    return {
      visible: true,
      hoveredTrigger: var_core_value_sigBC91,
      insertGuide: var_core_value_sigBC91.kind === "row-insert-dot" && var_core_value_sigCB88 !== null ? {
        kind: "row",
        index: var_core_value_sigCB88
      } : var_core_value_sigBC91.kind === "column-insert-dot" && var_core_value_sigCB88 !== null ? {
        kind: "column",
        index: var_core_value_sigCB88
      } : null
    };
  }
  _handleHeaderDragPointerMove(var_core_value_sig8D65) {
    let var_core_value_sig8122 = this._headerDragState;
    if (!var_core_value_sig8122) return;
    if ("buttons" in var_core_value_sig8D65 && var_core_value_sig8D65.buttons !== undefined && (var_core_value_sig8D65.buttons & 1) != 1) {
      this._finishHeaderDrag();
      return;
    }
    let var_core_value_sigEDC6 = var_core_value_sig8122.object["hitTestFloatingStructuralTriggerAtScenePoint"](this._getBoardPointVectorFromEvent(var_core_value_sig8D65));
    if (!var_core_value_sigEDC6) return;
    let var_core_value_sig611A = null;
    if (var_core_value_sig8122.kind === "row" && var_core_value_sigEDC6.kind === "row-header" && var_core_value_sigEDC6.row !== undefined) {
      let var_core_value_sig0B45 = (0, i.expandSlideTableRangeToMergedCells)(var_core_value_sig8122.table, {
        startRow: var_core_value_sig8122.anchor,
        endRow: var_core_value_sigEDC6.row,
        startColumn: 0,
        endColumn: Math.max(0, var_core_value_sig8122.table["columns"].length - 1)
      });
      var_core_value_sig611A = this._slideTableSelectionService["selectRows"]({
        unitId: var_core_value_sig8122.selection["unitId"],
        subUnitId: var_core_value_sig8122.selection["subUnitId"],
        elementId: var_core_value_sig8122.selection["elementId"],
        tableId: var_core_value_sig8122.selection["tableId"],
        startRow: var_core_value_sig0B45.startRow,
        endRow: var_core_value_sig0B45.endRow,
        columnCount: var_core_value_sig8122.table["columns"].length
      });
    } else {
      if (var_core_value_sig8122.kind === "column" && var_core_value_sigEDC6.kind === "column-header" && var_core_value_sigEDC6.column !== undefined) {
        let var_core_value_sigD955 = (0, i.expandSlideTableRangeToMergedCells)(var_core_value_sig8122.table, {
          startRow: 0,
          endRow: Math.max(0, var_core_value_sig8122.table["rows"].length - 1),
          startColumn: var_core_value_sig8122.anchor,
          endColumn: var_core_value_sigEDC6.column
        });
        var_core_value_sig611A = this._slideTableSelectionService["selectColumns"]({
          unitId: var_core_value_sig8122.selection["unitId"],
          subUnitId: var_core_value_sig8122.selection["subUnitId"],
          elementId: var_core_value_sig8122.selection["elementId"],
          tableId: var_core_value_sig8122.selection["tableId"],
          startColumn: var_core_value_sigD955.startColumn,
          endColumn: var_core_value_sigD955.endColumn,
          rowCount: var_core_value_sig8122.table["rows"].length
        });
      }
    }
    var_core_value_sig611A && (var_core_value_sig8122.selection = var_core_value_sig611A, var_core_value_sig8122.object["setTableSelection"]((0, a.resolveSlideTableObjectSelection)(var_core_value_sig611A)), this._makeSceneDirty());
  }
  _finishHeaderDrag() {
    this._headerDragState = null;
  }
  _getSelectedHeaderRange(var_core_value_sig6BD9, var_core_value_sig7E56, var_core_value_sig4161) {
    let var_core_value_sig7580 = this._slideTableSelectionService["getSelection"]();
    if (!var_core_value_sig7580 || var_core_value_sig7580.kind !== var_core_value_sig7E56 || var_core_value_sig7580.unitId !== this._renderContext["unitId"] || var_core_value_sig7580.elementId !== var_core_value_sig6BD9.elementId || var_core_value_sig7580.tableId !== var_core_value_sig6BD9.element["tableId"]) return null;
    for (let var_core_value_sig36F8 of var_core_value_sig7580.ranges) {
      let var_core_value_sig48BD = var_core_value_sig7E56 === "row" ? Math.min(var_core_value_sig36F8.startRow, var_core_value_sig36F8.endRow) : Math.min(var_core_value_sig36F8.startColumn, var_core_value_sig36F8.endColumn),
        var_core_value_sig429F = var_core_value_sig7E56 === "row" ? Math.max(var_core_value_sig36F8.startRow, var_core_value_sig36F8.endRow) : Math.max(var_core_value_sig36F8.startColumn, var_core_value_sig36F8.endColumn);
      if (var_core_value_sig4161 >= var_core_value_sig48BD && var_core_value_sig4161 <= var_core_value_sig429F) return {
        start: var_core_value_sig48BD,
        end: var_core_value_sig429F
      };
    }
    return null;
  }
  _startPendingHeaderMove(var_core_value_sig1F18) {
    this._finishRowColumnMove({
      commit: false
    }), this._pendingHeaderMoveState = var_core_value_sig1F18, var_core_value_sig1F18.object["setTableControlState"]({
      visible: true,
      selectedStructuralRange: {
        kind: var_core_value_sig1F18.kind,
        start: var_core_value_sig1F18.start,
        end: var_core_value_sig1F18.end
      }
    }), this._makeSceneDirty();
  }
  _handleRowColumnMovePointerMove(var_core_value_sigD5A0) {
    let var_core_value_sig81B2 = this._rowColumnMoveState ?? this._pendingHeaderMoveState;
    if (!var_core_value_sig81B2) return;
    if ("buttons" in var_core_value_sigD5A0 && var_core_value_sigD5A0.buttons !== undefined && (var_core_value_sigD5A0.buttons & 1) != 1) {
      this._finishRowColumnMove({
        commit: false
      });
      return;
    }
    let var_core_value_sigA0A5 = this._getBoardPointVectorFromEvent(var_core_value_sigD5A0, var_core_value_sig81B2.startPoint);
    if (!this._rowColumnMoveState) {
      let var_core_value_sig03E1 = var_core_value_sigA0A5.x - this._pendingHeaderMoveState["startPoint"].x,
        var_core_value_sigBB57 = var_core_value_sigA0A5.y - this._pendingHeaderMoveState["startPoint"].y;
      if (Math.hypot(var_core_value_sig03E1, var_core_value_sigBB57) < 8) return;
      this._rowColumnMoveState = {
        ...this._pendingHeaderMoveState
      }, this._pendingHeaderMoveState = null;
    }
    let var_core_value_sig10AA = this._rowColumnMoveState;
    if (!var_core_value_sig10AA) return;
    let var_core_value_sigE6D0 = this._resolveRowColumnMoveTarget(var_core_value_sig10AA.table, var_core_value_sig10AA.object, var_core_value_sig10AA.kind, var_core_value_sigA0A5),
      var_core_value_sig8E91 = !!var_core_value_sigE6D0 && (var_core_value_sigE6D0.kind === "row" ? (0, i.canMoveSlideTableRows)(var_core_value_sig10AA.table, {
        startRow: var_core_value_sig10AA.start,
        endRow: var_core_value_sig10AA.end
      }, {
        row: var_core_value_sigE6D0.targetRow,
        position: var_core_value_sigE6D0.position
      }) : (0, i.canMoveSlideTableColumns)(var_core_value_sig10AA.table, {
        startColumn: var_core_value_sig10AA.start,
        endColumn: var_core_value_sig10AA.end
      }, {
        column: var_core_value_sigE6D0.targetColumn,
        position: var_core_value_sigE6D0.position
      }));
    this._rowColumnMoveTarget = var_core_value_sig8E91 ? var_core_value_sigE6D0 : null, var_core_value_sig10AA.object["setTableControlState"](var_core_value_sig8E91 && var_core_value_sigE6D0 ? {
      visible: true,
      selectedStructuralRange: {
        kind: var_core_value_sig10AA.kind,
        start: var_core_value_sig10AA.start,
        end: var_core_value_sig10AA.end
      },
      reorderGuide: {
        kind: var_core_value_sigE6D0.kind,
        index: var_core_value_sigE6D0.guideIndex
      }
    } : {
      visible: true,
      selectedStructuralRange: {
        kind: var_core_value_sig10AA.kind,
        start: var_core_value_sig10AA.start,
        end: var_core_value_sig10AA.end
      }
    }), this._makeSceneDirty();
  }
  _finishRowColumnMove(var_core_value_sig00BE) {
    let var_core_value_sig7BB5 = this._rowColumnMoveState,
      var_core_value_sig6AAD = this._rowColumnMoveTarget,
      var_core_value_sig1157 = this._pendingHeaderMoveState;
    var_core_value_sig00BE.commit && var_core_value_sig7BB5 && var_core_value_sig6AAD && this._commandService && (var_core_value_sig7BB5.kind === "row" && var_core_value_sig6AAD.kind === "row" ? this._commandService["executeCommand"](t.MoveBoardTableRowsCommand["id"], {
      unitId: var_core_value_sig7BB5.unitId,
      tableId: var_core_value_sig7BB5.tableId,
      startRow: var_core_value_sig7BB5.start,
      endRow: var_core_value_sig7BB5.end,
      targetRow: var_core_value_sig6AAD.targetRow,
      position: var_core_value_sig6AAD.position
    }) : var_core_value_sig7BB5.kind === "column" && var_core_value_sig6AAD.kind === "column" && this._commandService["executeCommand"](t.MoveBoardTableColumnsCommand["id"], {
      unitId: var_core_value_sig7BB5.unitId,
      tableId: var_core_value_sig7BB5.tableId,
      startColumn: var_core_value_sig7BB5.start,
      endColumn: var_core_value_sig7BB5.end,
      targetColumn: var_core_value_sig6AAD.targetColumn,
      position: var_core_value_sig6AAD.position
    }));
    let var_core_value_sigA694 = (var_core_value_sig7BB5 == null ? undefined : var_core_value_sig7BB5.object) ?? (var_core_value_sig1157 == null ? undefined : var_core_value_sig1157.object);
    this._pendingHeaderMoveState = null, this._rowColumnMoveState = null, this._rowColumnMoveTarget = null, var_core_value_sigA694 && (var_core_value_sigA694.setTableControlState(null), this._makeSceneDirty());
  }
  _resolveRowColumnMoveTarget(var_core_value_sig18E01, var_core_value_sig0428, var_core_value_sigBE07, var_core_value_sig555F) {
    let var_core_value_sig3D6F = this._resolveObjectPoint(var_core_value_sig0428, var_core_value_sig555F.x, var_core_value_sig555F.y),
      var_core_value_sig336C = var_core_value_sigBE07 === "row" ? At(var_core_value_sig18E01.rows["map"](var_core_value_sig7C4A => var_core_value_sig7C4A.height ?? 24), var_core_value_sig0428.height) : At(var_core_value_sig18E01.columns["map"](var_core_value_sigE799 => var_core_value_sigE799.width), var_core_value_sig0428.width);
    if (var_core_value_sig336C.length === 0) return null;
    let var_core_value_sig6E68 = jt(var_core_value_sig336C, var_core_value_sigBE07 === "row" ? var_core_value_sig3D6F.y : var_core_value_sig3D6F.x),
      var_core_value_sig8DFE = var_core_value_sig6E68 <= 0 ? 0 : var_core_value_sig6E68 >= var_core_value_sig336C.length ? var_core_value_sig336C.length - 1 : var_core_value_sig6E68,
      var_core_value_sig48EA = var_core_value_sig6E68 <= 0 ? "before" : var_core_value_sig6E68 >= var_core_value_sig336C.length ? "after" : "before";
    return var_core_value_sigBE07 === "row" ? {
      kind: var_core_value_sigBE07,
      targetRow: var_core_value_sig8DFE,
      position: var_core_value_sig48EA,
      guideIndex: var_core_value_sig6E68
    } : {
      kind: var_core_value_sigBE07,
      targetColumn: var_core_value_sig8DFE,
      position: var_core_value_sig48EA,
      guideIndex: var_core_value_sig6E68
    };
  }
  _startTableHandleMove(var_core_value_sig5E16, var_core_value_sig09F3, var_core_value_sig4592, var_core_value_sigC5C4, var_core_value_sig1617, var_core_value_sig4169) {
    let var_core_value_sig6D19 = var_core_value_sigC5C4.transform ?? var_core_value_sigC5C4.element["transform"];
    this._tableHandleMoveState = {
      unitId: var_core_value_sig5E16,
      subUnitId: var_core_value_sig09F3,
      elementId: var_core_value_sigC5C4.elementId,
      object: var_core_value_sig1617,
      element: var_core_value_sigC5C4.element,
      elementData: var_core_value_sig4592,
      startPointer: {
        ...this._getBoardPointFromEvent(var_core_value_sig4169, {
          x: var_core_value_sig1617.left,
          y: var_core_value_sig1617.top
        })
      },
      startTransform: {
        ...It(var_core_value_sig6D19),
        left: var_core_value_sig1617.left,
        top: var_core_value_sig1617.top,
        width: var_core_value_sig1617.width,
        height: var_core_value_sig1617.height
      },
      moved: false
    };
  }
  _handleTableHandleMovePointerMove(var_core_value_sig279C) {
    let var_core_value_sigAC51 = this._tableHandleMoveState;
    if (!var_core_value_sigAC51) return;
    if ("buttons" in var_core_value_sig279C && var_core_value_sig279C.buttons !== undefined && (var_core_value_sig279C.buttons & 1) != 1) {
      this._finishTableHandleMove(var_core_value_sig279C);
      return;
    }
    let var_core_value_sig8986 = this._buildTableHandleMoveTransform(var_core_value_sigAC51, var_core_value_sig279C);
    if (!var_core_value_sig8986) return;
    let var_core_value_sigCAF7 = var_core_value_sig8986.left - var_core_value_sigAC51.startTransform["left"],
      var_core_value_sigED1C = var_core_value_sig8986.top - var_core_value_sigAC51.startTransform["top"];
    !var_core_value_sigAC51.moved && Math.hypot(var_core_value_sigCAF7, var_core_value_sigED1C) < 8 || (var_core_value_sigAC51.moved || (var_core_value_sigAC51.moved = true, this._beginTableHandleTransform()), this._applyTableHandleMovePreview(var_core_value_sigAC51, var_core_value_sig8986));
  }
  async _finishTableHandleMove(var_core_value_sig726E) {
    let var_core_value_sig2CD3 = this._tableHandleMoveState;
    if (!var_core_value_sig2CD3) return;
    this._tableHandleMoveState = null;
    let var_core_value_sig038E = var_core_value_sig2CD3.moved ? this._buildTableHandleMoveTransform(var_core_value_sig2CD3, var_core_value_sig726E) : null;
    if (!var_core_value_sig038E || !var_core_value_sig2CD3.moved) {
      this._restoreTableHandleMovePreview(var_core_value_sig2CD3), this._finishTableHandleTransform();
      return;
    }
    this._applyTableHandleMovePreview(var_core_value_sig2CD3, var_core_value_sig038E);
    let var_core_value_sigAA1E = {
        ...var_core_value_sig038E,
        left: var_core_value_sig2CD3.object["left"],
        top: var_core_value_sig2CD3.object["top"],
        width: var_core_value_sig2CD3.object["width"],
        height: var_core_value_sig2CD3.object["height"]
      },
      var_core_value_sigC9F5 = this._resolveTableHandleMoveLocalTransform(var_core_value_sig2CD3, var_core_value_sigAA1E);
    try {
      await this._commandService["executeCommand"](e.UpdateBoardElementsCommand["id"], {
        unitId: var_core_value_sig2CD3.unitId,
        subUnitId: var_core_value_sig2CD3.subUnitId,
        updates: [{
          elementId: var_core_value_sig2CD3.elementId,
          element: {
            ...var_core_value_sig2CD3.element,
            transform: {
              ...var_core_value_sig2CD3.element["transform"],
              ...var_core_value_sigC9F5
            }
          },
          transform: var_core_value_sigC9F5
        }]
      }), this._makeSceneDirty();
    } finally {
      this._finishTableHandleTransform();
    }
  }
  _cancelTableHandleMove() {
    let var_core_value_sig7EEA = this._tableHandleMoveState;
    var_core_value_sig7EEA && (this._tableHandleMoveState = null, this._restoreTableHandleMovePreview(var_core_value_sig7EEA), this._finishTableHandleTransform());
  }
  _beginTableHandleTransform() {
    var var_core_value_sig59CE, var_core_value_sig33C8, var_core_value_sig957F, var_core_value_sig803B;
    if (this._boardElementStateService["setTransforming"](true), this._areTransformerControlsHiddenForTableMove) return;
    let var_core_value_sig5830 = (var_core_value_sig59CE = (var_core_value_sig33C8 = this._renderContext["scene"]).getTransformer) == null ? undefined : var_core_value_sig59CE.call(var_core_value_sig33C8);
    var_core_value_sig5830 == null || (var_core_value_sig957F = var_core_value_sig5830._hideControl) == null || var_core_value_sig957F.call(var_core_value_sig5830), var_core_value_sig5830 == null || (var_core_value_sig803B = var_core_value_sig5830.clearControls) == null || var_core_value_sig803B.call(var_core_value_sig5830), this._areTransformerControlsHiddenForTableMove = true;
  }
  _finishTableHandleTransform() {
    var var_core_value_sig4A7C, var_core_value_sigF975, var_core_value_sigCDAF;
    this._boardElementStateService["setTransforming"](false), this._areTransformerControlsHiddenForTableMove && (this._areTransformerControlsHiddenForTableMove = false, (var_core_value_sig4A7C = (var_core_value_sigF975 = this._renderContext["scene"]).getTransformer) == null || (var_core_value_sig4A7C = var_core_value_sig4A7C.call(var_core_value_sigF975)) == null || (var_core_value_sigCDAF = var_core_value_sig4A7C.refreshControls) == null || var_core_value_sigCDAF.call(var_core_value_sig4A7C));
  }
  _setTransformerControlsHiddenForTableStructuralHover(var_core_value_sigA298) {
    var var_core_value_sig0B40, var_core_value_sig330B;
    let var_core_value_sig3625 = this._tableStructuralHoverTransformerObject;
    if (var_core_value_sig3625 === var_core_value_sigA298 && this._areTransformerControlsHiddenForTableStructuralHover === !!var_core_value_sigA298) return false;
    let var_core_value_sig0B4E = (var_core_value_sig0B40 = (var_core_value_sig330B = this._renderContext["scene"]).getTransformer) == null ? undefined : var_core_value_sig0B40.call(var_core_value_sig330B);
    if (var_core_value_sig3625 && var_core_value_sig3625 !== var_core_value_sigA298) {
      var var_core_value_sig0E9F, var_core_value_sigE5BA;
      var_core_value_sig0B4E == null || (var_core_value_sig0E9F = var_core_value_sig0B4E.attachTo) == null || var_core_value_sig0E9F.call(var_core_value_sig0B4E, var_core_value_sig3625), var_core_value_sig0B4E == null || (var_core_value_sigE5BA = var_core_value_sig0B4E.setSelectedControl) == null || var_core_value_sigE5BA.call(var_core_value_sig0B4E, var_core_value_sig3625);
    }
    if (this._tableStructuralHoverTransformerObject = var_core_value_sigA298, var_core_value_sigA298) {
      var var_core_value_sig4A83, var_core_value_sig58AA, var_core_value_sig84C4;
      this._areTransformerControlsHiddenForTableStructuralHover = true, var_core_value_sig0B4E == null || (var_core_value_sig4A83 = var_core_value_sig0B4E.detachFrom) == null || var_core_value_sig4A83.call(var_core_value_sig0B4E, var_core_value_sigA298), var_core_value_sig0B4E == null || (var_core_value_sig58AA = var_core_value_sig0B4E._hideControl) == null || var_core_value_sig58AA.call(var_core_value_sig0B4E), var_core_value_sig0B4E == null || (var_core_value_sig84C4 = var_core_value_sig0B4E.clearControls) == null || var_core_value_sig84C4.call(var_core_value_sig0B4E);
    } else {
      var var_core_value_sigB6F7;
      this._areTransformerControlsHiddenForTableStructuralHover = false, var_core_value_sig0B4E == null || (var_core_value_sigB6F7 = var_core_value_sig0B4E.refreshControls) == null || var_core_value_sigB6F7.call(var_core_value_sig0B4E);
    }
    return true;
  }
  _buildTableHandleMoveTransform(var_core_value_sigB495, var_core_value_sig70D0) {
    let {
        x: var_core_value_sig2A8A,
        y: var_core_value_sig3782
      } = this._getBoardPointFromEvent(var_core_value_sig70D0, var_core_value_sigB495.startPointer),
      var_core_value_sigD22E = var_core_value_sig2A8A - var_core_value_sigB495.startPointer["x"],
      var_core_value_sig3455 = var_core_value_sig3782 - var_core_value_sigB495.startPointer["y"];
    return !Number.isFinite(var_core_value_sigD22E) || !Number.isFinite(var_core_value_sig3455) ? null : {
      ...var_core_value_sigB495.startTransform,
      left: var_core_value_sigB495.startTransform["left"] + var_core_value_sigD22E,
      top: var_core_value_sigB495.startTransform["top"] + var_core_value_sig3455
    };
  }
  _applyTableHandleMovePreview(var_core_value_sig5CEF, var_core_value_sig43D5) {
    var var_core_value_sig1395, var_core_value_sig9FA0, var_core_value_sig055E;
    var_core_value_sig5CEF.object["transformByState"]({
      left: var_core_value_sig43D5.left,
      top: var_core_value_sig43D5.top,
      width: var_core_value_sig43D5.width,
      height: var_core_value_sig43D5.height,
      angle: var_core_value_sig43D5.rotation ?? 0,
      flipX: var_core_value_sig43D5.flipX,
      flipY: var_core_value_sig43D5.flipY
    }), (var_core_value_sig1395 = (var_core_value_sig9FA0 = this._renderContext["scene"]).getTransformer) == null || (var_core_value_sig1395 = var_core_value_sig1395.call(var_core_value_sig9FA0)) == null || (var_core_value_sig055E = var_core_value_sig1395.changeNotification) == null || var_core_value_sig055E.call(var_core_value_sig1395), this._makeSceneDirty();
  }
  _restoreTableHandleMovePreview(var_core_value_sig7C77) {
    this._applyTableHandleMovePreview(var_core_value_sig7C77, var_core_value_sig7C77.startTransform);
  }
  _resolveTableHandleMoveLocalTransform(var_core_value_sig9578, var_core_value_sigA2D3) {
    let var_core_value_sigC218 = var_core_value_sig9578.element["parentId"],
      var_core_value_sigADEC = It((0, e.resolveBoardElementLocalTransformForParent)(var_core_value_sig9578.elementData, {
        parentId: var_core_value_sigC218,
        worldTransform: var_core_value_sigA2D3
      }));
    return var_core_value_sig9578.startTransform["rotation"] === undefined && delete var_core_value_sigADEC.rotation, var_core_value_sig9578.startTransform["flipX"] === undefined && delete var_core_value_sigADEC.flipX, var_core_value_sig9578.startTransform["flipY"] === undefined && delete var_core_value_sigADEC.flipY, var_core_value_sigADEC;
  }
  _syncSelection(var_core_value_sig3D8E) {
    let {
        unitId: var_core_value_sig37E5
      } = this._renderContext,
      var_core_value_sigF079 = this._instanceService["getUnit"](var_core_value_sig37E5, s.UniverInstanceType["UNIVER_BOARD"]);
    if (!var_core_value_sigF079) return;
    let var_core_value_sigFCA0 = var_core_value_sigF079.getActivePageId(),
      var_core_value_sigC84D = this._boardElementService["getElementData"](var_core_value_sig37E5, var_core_value_sigFCA0),
      var_core_value_sigF2BC = false;
    Object.values(var_core_value_sigC84D).forEach(var_core_value_sigB601 => {
      if (!q(var_core_value_sigB601)) return;
      let var_core_value_sig8B71 = this._getBoardTableObject((0, n.getBoardElementRenderObjectKey)(var_core_value_sig37E5, var_core_value_sigB601.elementId));
      if (!var_core_value_sig8B71) return;
      let var_core_value_sigAEFB = (0, a.resolveSlideTableObjectSelection)(var_core_value_sig3D8E);
      if (!(var_core_value_sig3D8E && var_core_value_sigAEFB && var_core_value_sig3D8E.unitId === var_core_value_sig37E5 && var_core_value_sig3D8E.subUnitId === var_core_value_sigFCA0 && var_core_value_sig3D8E.elementId === var_core_value_sigB601.elementId && var_core_value_sig3D8E.tableId === var_core_value_sigB601.element["tableId"])) {
        var_core_value_sig8B71.setTableSelection(null), var_core_value_sigF2BC = true;
        return;
      }
      var_core_value_sig8B71.setTableSelection(var_core_value_sigAEFB), var_core_value_sigF2BC = true;
    }), var_core_value_sigF2BC && this._makeSceneDirty();
  }
  _getBoardTableObject(var_core_value_sigD37B) {
    var var_core_value_sigFA28, var_core_value_sig93BE;
    let var_core_value_sigABEC = this._renderContext["scene"],
      var_core_value_sig2712 = ((var_core_value_sigFA28 = var_core_value_sigABEC.getObjectIncludeInGroup) == null ? undefined : var_core_value_sigFA28.call(var_core_value_sigABEC, var_core_value_sigD37B)) ?? ((var_core_value_sig93BE = var_core_value_sigABEC.getObject) == null ? undefined : var_core_value_sig93BE.call(var_core_value_sigABEC, var_core_value_sigD37B));
    return var_core_value_sig2712 instanceof gt ? var_core_value_sig2712 : null;
  }
  _makeSceneDirty() {
    var var_core_value_sig0B9E, var_core_value_sigC545;
    (var_core_value_sig0B9E = (var_core_value_sigC545 = this._renderContext["scene"]).makeDirty) == null || var_core_value_sig0B9E.call(var_core_value_sigC545, true);
  }
  _subscribeBoardElementChanges(var_core_value_sig12A7) {
    let var_core_value_sig6F4E = this._boardElementService,
      var_core_value_sigA021 = var_core_value_sig826B => {
        if (!var_core_value_sig826B) return;
        let var_core_value_sigCF89 = var_core_value_sig826B.subscribe(var_core_value_sigF62A => {
          var_core_value_sigF62A.some(var_core_value_sig27E5 => var_core_value_sig27E5.unitId === this._renderContext["unitId"]) && this._scheduleAttachObjectPointerEvents(var_core_value_sig12A7);
        });
        this.disposeWithMe((0, s.toDisposable)(() => var_core_value_sigCF89.unsubscribe()));
      };
    var_core_value_sigA021(var_core_value_sig6F4E.elementAdd$), var_core_value_sigA021(var_core_value_sig6F4E.elementUpdate$), var_core_value_sigA021(var_core_value_sig6F4E.elementRemove$);
  }
  _scheduleAttachObjectPointerEvents(var_core_value_sig49D9) {
    this._attachScheduled || (this._attachScheduled = true, Promise.resolve().then(() => {
      this._attachScheduled = false, this._attachObjectPointerEvents(var_core_value_sig49D9);
    }));
  }
  _attachObjectPointerEvents(var_core_value_sig320C) {
    var var_core_value_sigE7F0;
    let {
        unitId: var_core_value_sigE837
      } = this._renderContext,
      var_core_value_sig34F4 = var_core_value_sig320C.getActivePageId(),
      var_core_value_sigA45D = this._boardElementService["getElementData"](var_core_value_sigE837, var_core_value_sig34F4),
      var_core_value_sig1BC7 = new s["DisposableCollection"]();
    (var_core_value_sigE7F0 = this._objectPointerDisposables) == null || var_core_value_sigE7F0.dispose(), this._objectPointerDisposables = var_core_value_sig1BC7, Object.values(var_core_value_sigA45D).forEach(var_core_value_sig00CB => {
      if (!q(var_core_value_sig00CB)) return;
      let var_core_value_sig77EE = this._getBoardTableObject((0, n.getBoardElementRenderObjectKey)(var_core_value_sigE837, var_core_value_sig00CB.elementId));
      var_core_value_sig77EE && (var_core_value_sig1BC7.add(var_core_value_sig77EE.onPointerDown$["subscribeEvent"]({
        priority: -2,
        next: ([var_core_value_sig8178, var_core_value_sigE9ED]) => {
          this._boardUIStateService["getState"]().interactionMode !== "viewing" && this._handleTablePointerDown(var_core_value_sig320C, var_core_value_sig00CB, var_core_value_sig77EE, var_core_value_sig8178, var_core_value_sigE9ED);
        }
      })), var_core_value_sig1BC7.add(var_core_value_sig77EE.onDblclick$["subscribeEvent"]({
        priority: -2,
        next: ([var_core_value_sigB577, var_core_value_sig9572]) => {
          this._boardUIStateService["getState"]().interactionMode !== "viewing" && this._handleTableDoubleClick(var_core_value_sig320C, var_core_value_sig00CB, var_core_value_sig77EE, var_core_value_sigB577, var_core_value_sig9572);
        }
      })));
    });
  }
  _handleTablePointerDown(var_core_value_sig4956, var_core_value_sigCC9E, var_core_value_sig444C, var_core_value_sigE42E, var_core_value_sigF039) {
    var var_core_value_sigA321, var_core_value_sigBF4C;
    let var_core_value_sig3457 = var_core_value_sigE42E.button ?? 0;
    if (var_core_value_sig3457 !== 0 && var_core_value_sig3457 !== 2 || var_core_value_sig3457 === 0 && this._handleCellEditorPointerDown(var_core_value_sig4956, var_core_value_sigCC9E, var_core_value_sig444C, var_core_value_sigE42E, var_core_value_sigF039) || var_core_value_sig3457 === 0 && this._isTableTextEditing()) return;
    let var_core_value_sig4A08 = this._getBoardPointVectorFromEvent(var_core_value_sigE42E),
      var_core_value_sig1BC4 = var_core_value_sig444C.hitTestStructuralTriggerAtScenePoint(var_core_value_sig4A08);
    if (var_core_value_sig3457 === 0 && (0, a.isSlideTableInsertDotTrigger)(var_core_value_sig1BC4)) {
      if (this._handleStructuralInsertTrigger(var_core_value_sig4956.getUnitId(), var_core_value_sigCC9E, var_core_value_sig444C, var_core_value_sig1BC4, var_core_value_sig4A08)) {
        var var_core_value_sig9EAB, var_core_value_sigA5C3;
        (var_core_value_sig9EAB = var_core_value_sigE42E.preventDefault) == null || var_core_value_sig9EAB.call(var_core_value_sigE42E), (var_core_value_sigA5C3 = var_core_value_sigE42E.stopPropagation) == null || var_core_value_sigA5C3.call(var_core_value_sigE42E), J(var_core_value_sigF039), this._makeSceneDirty();
      }
      return;
    }
    if (var_core_value_sig3457 === 0 && this._startResizeIfHit(var_core_value_sig4956, var_core_value_sigCC9E, var_core_value_sig444C, var_core_value_sigE42E)) {
      J(var_core_value_sigF039);
      return;
    }
    if (var_core_value_sig3457 === 0 && !this._isTableReadyForCellInteraction(var_core_value_sig4956, var_core_value_sigCC9E)) {
      this._activateTableStage(var_core_value_sig4956, var_core_value_sigCC9E, var_core_value_sig444C, var_core_value_sigE42E, var_core_value_sigF039);
      return;
    }
    if (var_core_value_sig3457 === 0 && this._tableActivationStage === "table") {
      this._startPendingStage1Body(var_core_value_sig4956, var_core_value_sigCC9E, var_core_value_sig444C, var_core_value_sigE42E, var_core_value_sigF039);
      return;
    }
    if (var_core_value_sig3457 === 2 && !this._isTableReadyForCellInteraction(var_core_value_sig4956, var_core_value_sigCC9E)) return;
    let var_core_value_sig3A1E = this._selectCellFromTableEvent(var_core_value_sig4956, var_core_value_sigCC9E, var_core_value_sig444C, var_core_value_sigE42E);
    if (var_core_value_sig3A1E) {
      if (var_core_value_sig3457 === 0) {
        var var_core_value_sigDC92, var_core_value_sig3515;
        (var_core_value_sigDC92 = (var_core_value_sig3515 = this._contextMenuService).hideContextMenu) == null || var_core_value_sigDC92.call(var_core_value_sig3515);
      }
      if ((var_core_value_sigA321 = var_core_value_sigE42E.preventDefault) == null || var_core_value_sigA321.call(var_core_value_sigE42E), (var_core_value_sigBF4C = var_core_value_sigE42E.stopPropagation) == null || var_core_value_sigBF4C.call(var_core_value_sigE42E), J(var_core_value_sigF039), this._beginTableInternalInteraction(var_core_value_sig444C), this._enterCellStage(var_core_value_sig4956, var_core_value_sigCC9E), var_core_value_sig3457 === 0) {
        let var_core_value_sigD873 = var_core_value_sig3A1E.focus ?? var_core_value_sig3A1E.anchor ?? (0, a.resolveFirstSlideTableSelectionCell)(var_core_value_sig3A1E);
        var_core_value_sigD873 && (this._rangeDragState = {
          selection: var_core_value_sig3A1E,
          object: var_core_value_sig444C,
          anchor: var_core_value_sigD873,
          startPoint: this._getBoardPointFromEvent(var_core_value_sigE42E),
          activated: false
        });
      }
      var_core_value_sig3457 === 2 && this._openContextMenu(var_core_value_sigE42E);
    }
  }
  _handleCellEditorPointerDown(var_core_value_sigC2A0, var_core_value_sig7C65, var_core_value_sig7F05, var_core_value_sig41F3, var_core_value_sigF455) {
    var var_core_value_sig6E78, var_core_value_sigB3EE;
    let var_core_value_sigC50A = this._getActiveEditingSession();
    if (!var_core_value_sigC50A || var_core_value_sigC50A.unitId !== var_core_value_sigC2A0.getUnitId() || var_core_value_sigC50A.subUnitId !== var_core_value_sigC2A0.getActivePageId() || var_core_value_sigC50A.elementId !== var_core_value_sig7C65.elementId || var_core_value_sigC50A.tableId !== var_core_value_sig7C65.element["tableId"]) return false;
    let var_core_value_sig11D0 = this._buildCellSelectionFromTableEvent(var_core_value_sigC2A0, var_core_value_sig7C65, var_core_value_sig7F05, var_core_value_sig41F3),
      var_core_value_sigB8ED = (var_core_value_sig11D0 == null ? undefined : var_core_value_sig11D0.focus) ?? (var_core_value_sig11D0 == null ? undefined : var_core_value_sig11D0.anchor) ?? (var_core_value_sig11D0 ? (0, a.resolveFirstSlideTableSelectionCell)(var_core_value_sig11D0) : null);
    if (!var_core_value_sig11D0 || !var_core_value_sigB8ED) return false;
    if ((var_core_value_sig6E78 = var_core_value_sig41F3.preventDefault) == null || var_core_value_sig6E78.call(var_core_value_sig41F3), (var_core_value_sigB3EE = var_core_value_sig41F3.stopPropagation) == null || var_core_value_sigB3EE.call(var_core_value_sig41F3), J(var_core_value_sigF455), var_core_value_sigB8ED.row === var_core_value_sigC50A.row && var_core_value_sigB8ED.column === var_core_value_sigC50A.column) return true;
    this._completeActiveEditor(var_core_value_sigC50A.documentData);
    let var_core_value_sig8EAE = this._slideTableResourceService["getTable"](var_core_value_sig11D0.unitId, var_core_value_sig11D0.tableId) ?? var_core_value_sig7F05.getTable();
    return var_core_value_sig8EAE && this._openCellEditor({
      selection: var_core_value_sig11D0,
      object: var_core_value_sig7F05,
      table: var_core_value_sig8EAE
    }), true;
  }
  _isTableReadyForCellInteraction(var_core_value_sig1CDD, var_core_value_sig0DB1) {
    return this._isActiveTableContext(var_core_value_sig1CDD, var_core_value_sig0DB1) ? true : this._isSelectedTableElement(var_core_value_sig1CDD, var_core_value_sig0DB1);
  }
  _isActiveTableContext(var_core_value_sig68A2, var_core_value_sigCC17) {
    return !!this._tableActivationStage && !!this._activeTableContext && this._activeTableContext["unitId"] === var_core_value_sig68A2.getUnitId() && this._activeTableContext["subUnitId"] === var_core_value_sig68A2.getActivePageId() && this._activeTableContext["elementId"] === var_core_value_sigCC17.elementId && this._activeTableContext["tableId"] === var_core_value_sigCC17.element["tableId"];
  }
  _isSelectedTableElement(var_core_value_sig32AE, var_core_value_sigC753) {
    var var_core_value_sigFFD1;
    let var_core_value_sig81AE = this._boardElementStateService["getSnapshot"]();
    return (var_core_value_sig81AE == null || (var_core_value_sigFFD1 = var_core_value_sig81AE.context) == null ? undefined : var_core_value_sigFFD1.unitId) === var_core_value_sig32AE.getUnitId() && var_core_value_sig81AE.context["subUnitId"] === var_core_value_sig32AE.getActivePageId() && var_core_value_sig81AE.selectedIds["includes"](var_core_value_sigC753.elementId);
  }
  _activateTableStage(var_core_value_sigF79F, var_core_value_sig0E54, var_core_value_sig3B17, var_core_value_sig6C4A, var_core_value_sig73D9) {
    var var_core_value_sigEAF8, var_core_value_sig0455;
    let var_core_value_sig737C = var_core_value_sigF79F.getUnitId(),
      var_core_value_sig5AF5 = var_core_value_sigF79F.getActivePageId();
    this._tableActivationStage = "table", this._activeTableContext = {
      unitId: var_core_value_sig737C,
      subUnitId: var_core_value_sig5AF5,
      elementId: var_core_value_sig0E54.elementId,
      tableId: var_core_value_sig0E54.element["tableId"]
    }, this._slideTableSelectionService["clear"](), this._boardElementStateService["selectElements"]({
      unitId: var_core_value_sig737C,
      subUnitId: var_core_value_sig5AF5
    }, [var_core_value_sig0E54.elementId], var_core_value_sig0E54.elementId), var_core_value_sig3B17.setTableSelection({
      ranges: []
    }), (var_core_value_sigEAF8 = var_core_value_sig6C4A.preventDefault) == null || var_core_value_sigEAF8.call(var_core_value_sig6C4A), (var_core_value_sig0455 = var_core_value_sig6C4A.stopPropagation) == null || var_core_value_sig0455.call(var_core_value_sig6C4A), J(var_core_value_sig73D9), this._makeSceneDirty();
  }
  _startPendingStage1Body(var_core_value_sig9DE4, var_core_value_sig77FA, var_core_value_sigA4A7, var_core_value_sigA4DF, var_core_value_sigCC9D) {
    var var_core_value_sig90F5, var_core_value_sigD2BA;
    let var_core_value_sigCD3A = var_core_value_sig9DE4.getUnitId(),
      var_core_value_sig519D = var_core_value_sig9DE4.getActivePageId(),
      var_core_value_sigC7E7 = this._boardElementService["getElementData"](var_core_value_sigCD3A, var_core_value_sig519D),
      var_core_value_sig6E1C = this._buildCellSelectionFromTableEvent(var_core_value_sig9DE4, var_core_value_sig77FA, var_core_value_sigA4A7, var_core_value_sigA4DF);
    var_core_value_sig6E1C && (this._pendingStage1BodyState = {
      unitId: var_core_value_sigCD3A,
      subUnitId: var_core_value_sig519D,
      elementData: var_core_value_sigC7E7,
      elementDataItem: var_core_value_sig77FA,
      object: var_core_value_sigA4A7,
      startEvent: var_core_value_sigA4DF,
      startPoint: {
        ...this._getBoardPointFromEvent(var_core_value_sigA4DF, {
          x: var_core_value_sigA4A7.left,
          y: var_core_value_sigA4A7.top
        })
      },
      pendingSelection: var_core_value_sig6E1C
    }, (var_core_value_sig90F5 = var_core_value_sigA4DF.preventDefault) == null || var_core_value_sig90F5.call(var_core_value_sigA4DF), (var_core_value_sigD2BA = var_core_value_sigA4DF.stopPropagation) == null || var_core_value_sigD2BA.call(var_core_value_sigA4DF), J(var_core_value_sigCC9D));
  }
  _handlePendingStage1BodyPointerMove(var_core_value_sigFABC) {
    let var_core_value_sig413D = this._pendingStage1BodyState;
    if (!var_core_value_sig413D) return;
    if ("buttons" in var_core_value_sigFABC && var_core_value_sigFABC.buttons !== undefined && (var_core_value_sigFABC.buttons & 1) != 1) {
      this._finishPendingStage1Body({
        focusCell: true
      });
      return;
    }
    let {
        x: var_core_value_sig5BCE,
        y: var_core_value_sig8EF0
      } = this._getBoardPointFromEvent(var_core_value_sigFABC, var_core_value_sig413D.startPoint),
      var_core_value_sig78AC = var_core_value_sig5BCE - var_core_value_sig413D.startPoint["x"],
      var_core_value_sig4CEF = var_core_value_sig8EF0 - var_core_value_sig413D.startPoint["y"];
    Math.hypot(var_core_value_sig78AC, var_core_value_sig4CEF) < 8 || (this._pendingStage1BodyState = null, this._startTableHandleMove(var_core_value_sig413D.unitId, var_core_value_sig413D.subUnitId, var_core_value_sig413D.elementData, var_core_value_sig413D.elementDataItem, var_core_value_sig413D.object, var_core_value_sig413D.startEvent), this._handleTableHandleMovePointerMove(var_core_value_sigFABC));
  }
  _finishPendingStage1Body(var_core_value_sigD57D) {
    let var_core_value_sig2CC7 = this._pendingStage1BodyState;
    if (!var_core_value_sig2CC7 || (this._pendingStage1BodyState = null, !var_core_value_sigD57D.focusCell)) return;
    let var_core_value_sig4784 = var_core_value_sig2CC7.pendingSelection["focus"] ?? var_core_value_sig2CC7.pendingSelection["anchor"] ?? (0, a.resolveFirstSlideTableSelectionCell)(var_core_value_sig2CC7.pendingSelection);
    if (!var_core_value_sig4784) return;
    this._slideTableSelectionService["markTableInternalInteraction"](), this._beginTableInternalInteraction(var_core_value_sig2CC7.object);
    let var_core_value_sigC39E = this._slideTableSelectionService["selectCell"]({
      unitId: var_core_value_sig2CC7.pendingSelection["unitId"],
      subUnitId: var_core_value_sig2CC7.pendingSelection["subUnitId"],
      elementId: var_core_value_sig2CC7.pendingSelection["elementId"],
      tableId: var_core_value_sig2CC7.pendingSelection["tableId"],
      row: var_core_value_sig4784.row,
      column: var_core_value_sig4784.column
    });
    this._enterCellStageFromSelection(var_core_value_sigC39E), var_core_value_sig2CC7.object["setTableSelection"]((0, a.resolveSlideTableObjectSelection)(var_core_value_sigC39E)), this._makeSceneDirty();
  }
  _enterCellStage(var_core_value_sig16C7, var_core_value_sig7481) {
    this._tableActivationStage = "cell", this._activeTableContext = {
      unitId: var_core_value_sig16C7.getUnitId(),
      subUnitId: var_core_value_sig16C7.getActivePageId(),
      elementId: var_core_value_sig7481.elementId,
      tableId: var_core_value_sig7481.element["tableId"]
    };
  }
  _enterCellStageFromSelection(var_core_value_sig08A3) {
    this._tableActivationStage = "cell", this._activeTableContext = {
      unitId: var_core_value_sig08A3.unitId,
      subUnitId: var_core_value_sig08A3.subUnitId,
      elementId: var_core_value_sig08A3.elementId,
      tableId: var_core_value_sig08A3.tableId
    };
  }
  _startResizeIfHit(var_core_value_sig77D8, var_core_value_sig78A3, var_core_value_sig649B, var_core_value_sig6256) {
    var var_core_value_sigE7A6, var_core_value_sigB505, var_core_value_sig7428, var_core_value_sig1DCE;
    if (this._isTableTextEditing()) return false;
    let var_core_value_sig0567 = var_core_value_sig649B.getTable();
    if (!var_core_value_sig0567) return false;
    let var_core_value_sigA7F3 = this._getBoardPointFromEvent(var_core_value_sig6256),
      var_core_value_sigEACD = this._resolveObjectPoint(var_core_value_sig649B, var_core_value_sigA7F3.x, var_core_value_sigA7F3.y),
      var_core_value_sig901E = this._resolveResizeTrigger(var_core_value_sig0567, var_core_value_sig649B, var_core_value_sigEACD.x, var_core_value_sigEACD.y);
    if (!var_core_value_sig901E) return false;
    let var_core_value_sigF7BB = Tt(var_core_value_sig0567, var_core_value_sig649B),
      var_core_value_sigFA38 = var_core_value_sig77D8.getUnitId();
    return this._resizeState = {
      unitId: var_core_value_sigFA38,
      subUnitId: var_core_value_sig77D8.getActivePageId(),
      elementId: var_core_value_sig78A3.elementId,
      tableId: var_core_value_sig78A3.element["tableId"],
      object: var_core_value_sig649B,
      table: var_core_value_sig0567,
      trigger: var_core_value_sig901E,
      startPoint: var_core_value_sigEACD,
      startSize: var_core_value_sig901E.kind === "resize-row" ? ((var_core_value_sigE7A6 = var_core_value_sig0567.rows[var_core_value_sig901E.row ?? 0]) == null ? undefined : var_core_value_sigE7A6.height) ?? 24 : ((var_core_value_sigB505 = var_core_value_sig0567.columns[var_core_value_sig901E.column ?? 0]) == null ? undefined : var_core_value_sigB505.width) ?? 96,
      scaleX: var_core_value_sigF7BB.scaleX,
      scaleY: var_core_value_sigF7BB.scaleY
    }, (var_core_value_sig7428 = var_core_value_sig6256.preventDefault) == null || var_core_value_sig7428.call(var_core_value_sig6256), (var_core_value_sig1DCE = var_core_value_sig6256.stopPropagation) == null || var_core_value_sig1DCE.call(var_core_value_sig6256), this._setResizeCursor(var_core_value_sig901E.kind), true;
  }
  _handleResizeCursorHover(var_core_value_sig102B) {
    if (this._resizeState) return;
    if (this._isTableTextEditing()) {
      this._resetResizeCursor();
      return;
    }
    if (this._rangeDragState || this._headerDragState || this._pendingHeaderMoveState || this._rowColumnMoveState || this._tableHandleMoveState) {
      this._resetResizeCursor();
      return;
    }
    let var_core_value_sigA7DB = this._instanceService["getUnit"](this._renderContext["unitId"], s.UniverInstanceType["UNIVER_BOARD"]);
    if (!var_core_value_sigA7DB) {
      this._resetResizeCursor();
      return;
    }
    let var_core_value_sig5EEE = var_core_value_sigA7DB.getUnitId(),
      var_core_value_sig65B4 = var_core_value_sigA7DB.getActivePageId(),
      var_core_value_sigF98E = this._boardElementService["getElementData"](var_core_value_sig5EEE, var_core_value_sig65B4),
      var_core_value_sigA470 = this._getBoardPointFromEvent(var_core_value_sig102B);
    for (let var_core_value_sig9F76 of Object.values(var_core_value_sigF98E)) {
      if (!q(var_core_value_sig9F76)) continue;
      let var_core_value_sigA12B = this._getBoardTableObject((0, n.getBoardElementRenderObjectKey)(var_core_value_sig5EEE, var_core_value_sig9F76.elementId)),
        var_core_value_sigF230 = var_core_value_sigA12B == null ? undefined : var_core_value_sigA12B.getTable();
      if (!var_core_value_sigA12B || !var_core_value_sigF230 || !this._isTableActiveForResizeHover(var_core_value_sig5EEE, var_core_value_sig65B4, var_core_value_sig9F76)) continue;
      let var_core_value_sig09B8 = this._resolveObjectPoint(var_core_value_sigA12B, var_core_value_sigA470.x, var_core_value_sigA470.y),
        var_core_value_sig6F91 = this._resolveResizeTrigger(var_core_value_sigF230, var_core_value_sigA12B, var_core_value_sig09B8.x, var_core_value_sig09B8.y);
      if (var_core_value_sig6F91) {
        this._setResizeCursor(var_core_value_sig6F91.kind);
        return;
      }
    }
    this._resetResizeCursor();
  }
  _isTableTextEditing() {
    return !!this._getActiveEditingSession();
  }
  _getActiveEditingSession() {
    let var_core_value_sig19A1 = this._editorUIService["getSession"]();
    return var_core_value_sig19A1 != null && var_core_value_sig19A1.context ? {
      ...var_core_value_sig19A1.context,
      documentData: var_core_value_sig19A1.documentData,
      measurement: var_core_value_sig19A1.measurement
    } : this._cellEditorBridgeService["getEditing"]() ?? null;
  }
  _completeActiveEditor(var_core_value_sig81F7) {
    let var_core_value_sigBE51 = this._editorUIService["getSession"]();
    if (var_core_value_sigBE51 != null && var_core_value_sigBE51.context) {
      this._editorUIService["complete"](var_core_value_sig81F7 ?? var_core_value_sigBE51.documentData, var_core_value_sigBE51.measurement, var_core_value_sigBE51.sessionId);
      return;
    }
    this._cellEditorBridgeService["complete"](var_core_value_sig81F7);
  }
  _cancelActiveEditor() {
    let var_core_value_sigAAD1 = this._editorUIService["getSession"]();
    if (var_core_value_sigAAD1 != null && var_core_value_sigAAD1.context) {
      this._editorUIService["cancel"](var_core_value_sigAAD1.sessionId);
      return;
    }
    this._cellEditorBridgeService["cancel"]();
  }
  _isTableActiveForResizeHover(var_core_value_sigBC1A, var_core_value_sig3F3A, var_core_value_sigA984) {
    let var_core_value_sigA504 = this._slideTableSelectionService["getSelection"]();
    return var_core_value_sigA504 && var_core_value_sigA504.unitId === var_core_value_sigBC1A && var_core_value_sigA504.subUnitId === var_core_value_sig3F3A && var_core_value_sigA504.elementId === var_core_value_sigA984.elementId && var_core_value_sigA504.tableId === var_core_value_sigA984.element["tableId"] ? true : !!this._activeTableContext && this._activeTableContext["unitId"] === var_core_value_sigBC1A && this._activeTableContext["subUnitId"] === var_core_value_sig3F3A && this._activeTableContext["elementId"] === var_core_value_sigA984.elementId && this._activeTableContext["tableId"] === var_core_value_sigA984.element["tableId"];
  }
  _resolveResizeTrigger(var_core_value_sig05FF, var_core_value_sigFBF0, var_core_value_sig2F95, var_core_value_sigF0E1) {
    let var_core_value_sig2D8D = Tt(var_core_value_sig05FF, var_core_value_sigFBF0),
      var_core_value_sigE5A6 = (0, i.hitTestSlideTableTrigger)((0, i.buildSlideTableTriggers)({
        tableId: var_core_value_sig05FF.id,
        tableWidth: var_core_value_sigFBF0.width,
        tableHeight: var_core_value_sigFBF0.height,
        rowHeights: var_core_value_sig05FF.rows["map"](var_core_value_sigB008 => (var_core_value_sigB008.height ?? 24) * var_core_value_sig2D8D.scaleY),
        columnWidths: var_core_value_sig05FF.columns["map"](var_core_value_sig8721 => var_core_value_sig8721.width * var_core_value_sig2D8D.scaleX),
        mergedCells: (0, i.collectSlideTableMergeRanges)(var_core_value_sig05FF)
      }), var_core_value_sig2F95, var_core_value_sigF0E1);
    return (var_core_value_sigE5A6 == null ? undefined : var_core_value_sigE5A6.kind) === "resize-row" || (var_core_value_sigE5A6 == null ? undefined : var_core_value_sigE5A6.kind) === "resize-column" ? var_core_value_sigE5A6 : null;
  }
  _handleResizePointerMove(var_core_value_sigF449) {
    let var_core_value_sig38C5 = this._resizeState;
    if (!var_core_value_sig38C5) return;
    if ("buttons" in var_core_value_sigF449 && var_core_value_sigF449.buttons !== undefined && (var_core_value_sigF449.buttons & 1) != 1) {
      this._handleResizePointerUp(var_core_value_sigF449);
      return;
    }
    let var_core_value_sigC87D = this._buildResizeTable(var_core_value_sig38C5, var_core_value_sigF449);
    var_core_value_sigC87D && (this._setResizeCursor(var_core_value_sig38C5.trigger["kind"]), var_core_value_sig38C5.object["setPreviewTable"](var_core_value_sigC87D), this._makeSceneDirty());
  }
  _handleRangeDragPointerMove(var_core_value_sigCCDC) {
    let var_core_value_sigC310 = this._rangeDragState;
    if (!var_core_value_sigC310 || this._resizeState) return;
    if ("buttons" in var_core_value_sigCCDC && var_core_value_sigCCDC.buttons !== undefined && (var_core_value_sigCCDC.buttons & 1) != 1) {
      this._finishRangeDrag();
      return;
    }
    let var_core_value_sigA4E8 = this._getBoardPointVectorFromEvent(var_core_value_sigCCDC, var_core_value_sigC310.startPoint);
    if (!var_core_value_sigC310.activated) {
      let var_core_value_sig08BA = var_core_value_sigA4E8.x - var_core_value_sigC310.startPoint["x"],
        var_core_value_sigDBB5 = var_core_value_sigA4E8.y - var_core_value_sigC310.startPoint["y"];
      if (Math.hypot(var_core_value_sig08BA, var_core_value_sigDBB5) < 8) return;
      var_core_value_sigC310.activated = true;
    }
    let var_core_value_sigDC07 = var_core_value_sigC310.object["hitTestCellAtScenePoint"](var_core_value_sigA4E8);
    if (!var_core_value_sigDC07 || var_core_value_sigDC07.kind !== "cell") return;
    let var_core_value_sig3474 = var_core_value_sigC310.object["getTable"]();
    if (!var_core_value_sig3474) return;
    let var_core_value_sig4E80 = (0, i.expandSlideTableRangeToMergedCells)(var_core_value_sig3474, {
        startRow: var_core_value_sigC310.anchor["row"],
        startColumn: var_core_value_sigC310.anchor["column"],
        endRow: var_core_value_sigDC07.row,
        endColumn: var_core_value_sigDC07.column
      }),
      var_core_value_sigD23B = this._slideTableSelectionService["selectRange"]({
        unitId: var_core_value_sigC310.selection["unitId"],
        subUnitId: var_core_value_sigC310.selection["subUnitId"],
        elementId: var_core_value_sigC310.selection["elementId"],
        tableId: var_core_value_sigC310.selection["tableId"],
        ...var_core_value_sig4E80
      });
    var_core_value_sigC310.object["setTableSelection"]((0, a.resolveSlideTableObjectSelection)(var_core_value_sigD23B)), this._makeSceneDirty();
  }
  _finishRangeDrag() {
    this._rangeDragState = null;
  }
  _handleResizePointerUp(var_core_value_sig2B2A) {
    let var_core_value_sig0B5C = this._resizeState;
    if (!var_core_value_sig0B5C) return;
    this._resizeState = null, var_core_value_sig0B5C.object["setPreviewTable"](null), this._resetResizeCursor();
    let var_core_value_sig7D42 = this._resolveResizeSize(var_core_value_sig0B5C, var_core_value_sig2B2A);
    if (var_core_value_sig7D42 === null || var_core_value_sig7D42 === var_core_value_sig0B5C.startSize) {
      this._makeSceneDirty();
      return;
    }
    let var_core_value_sig8FDE = this._buildResizeTable(var_core_value_sig0B5C, var_core_value_sig2B2A);
    if (!var_core_value_sig8FDE || var_core_value_sig8FDE.rev === var_core_value_sig0B5C.table["rev"]) {
      this._makeSceneDirty();
      return;
    }
    this._commandService["executeCommand"](t.UpdateBoardTableCommand["id"], var_core_value_sig0B5C.trigger["kind"] === "resize-row" ? {
      unitId: var_core_value_sig0B5C.unitId,
      tableId: var_core_value_sig0B5C.tableId,
      patch: {
        rows: var_core_value_sig8FDE.rows
      }
    } : {
      unitId: var_core_value_sig0B5C.unitId,
      tableId: var_core_value_sig0B5C.tableId,
      patch: {
        columns: var_core_value_sig8FDE.columns
      }
    }), this._makeSceneDirty();
  }
  _cancelResizePreview() {
    let var_core_value_sig78E6 = this._resizeState;
    var_core_value_sig78E6 && (this._resizeState = null, var_core_value_sig78E6.object["setPreviewTable"](null), this._resetResizeCursor(), this._makeSceneDirty());
  }
  _setResizeCursor(var_core_value_sig541F) {
    var var_core_value_sig417B;
    this._resizeHoverActive = true;
    let var_core_value_sigAA90 = this._renderContext["scene"];
    (var_core_value_sig417B = var_core_value_sigAA90.setCursor) == null || var_core_value_sig417B.call(var_core_value_sigAA90, var_core_value_sig541F === "resize-column" ? c.CURSOR_TYPE["COLUMN_RESIZE"] : c.CURSOR_TYPE["ROW_RESIZE"]);
  }
  _resetResizeCursor() {
    var var_core_value_sigE92D;
    if (!this._resizeHoverActive) return;
    this._resizeHoverActive = false;
    let var_core_value_sig9940 = this._renderContext["scene"];
    (var_core_value_sigE92D = var_core_value_sig9940.resetCursor) == null || var_core_value_sigE92D.call(var_core_value_sig9940);
  }
  _buildResizeTable(var_core_value_sig682D, var_core_value_sig1435) {
    let var_core_value_sig4082 = this._resolveResizeDelta(var_core_value_sig682D, var_core_value_sig1435);
    if (var_core_value_sig4082 === null) return null;
    if (var_core_value_sig682D.trigger["kind"] === "resize-row") {
      let var_core_value_sigCFAC = var_core_value_sig682D.trigger["row"] ?? 0;
      return (0, i.resizeSlideTableRowBoundary)(var_core_value_sig682D.table, var_core_value_sigCFAC, var_core_value_sig4082, 12);
    }
    let var_core_value_sigC049 = var_core_value_sig682D.trigger["column"] ?? 0;
    return (0, i.resizeSlideTableColumnBoundary)(var_core_value_sig682D.table, var_core_value_sigC049, var_core_value_sig4082, 12);
  }
  _resolveResizeSize(var_core_value_sigE5C3, var_core_value_sigCCAA) {
    let var_core_value_sigF32D = this._resolveResizeDelta(var_core_value_sigE5C3, var_core_value_sigCCAA);
    return var_core_value_sigF32D === null ? null : Math.round(var_core_value_sigE5C3.startSize + var_core_value_sigF32D);
  }
  _resolveResizeDelta(var_core_value_sig9427, var_core_value_sig21F4) {
    let var_core_value_sigA345 = this._getBoardPointFromEvent(var_core_value_sig21F4, var_core_value_sig9427.startPoint),
      var_core_value_sigA468 = this._resolveObjectPoint(var_core_value_sig9427.object, var_core_value_sigA345.x, var_core_value_sigA345.y),
      var_core_value_sig1561 = var_core_value_sig9427.trigger["kind"] === "resize-row" ? (var_core_value_sigA468.y - var_core_value_sig9427.startPoint["y"]) / var_core_value_sig9427.scaleY : (var_core_value_sigA468.x - var_core_value_sig9427.startPoint["x"]) / var_core_value_sig9427.scaleX;
    return Number.isFinite(var_core_value_sig1561) ? var_core_value_sig1561 : null;
  }
  _getBoardPointVectorFromEvent(var_core_value_sigDF14, var_core_value_sig842F) {
    let var_core_value_sigC4C0 = this._getBoardPointFromEvent(var_core_value_sigDF14, var_core_value_sig842F);
    return c.Vector2["FromArray"]([var_core_value_sigC4C0.x, var_core_value_sigC4C0.y]);
  }
  _getBoardPointFromEvent(var_core_value_sig214A, var_core_value_sigCCC3 = {
    x: 0,
    y: 0
  }) {
    let var_core_value_sig986E = Number.isFinite(var_core_value_sig214A.offsetX) ? var_core_value_sig214A.offsetX : var_core_value_sigCCC3.x,
      var_core_value_sig537C = Number.isFinite(var_core_value_sig214A.offsetY) ? var_core_value_sig214A.offsetY : var_core_value_sigCCC3.y,
      var_core_value_sigBBBC = this._boardUIStateService["getState"](),
      var_core_value_sig5440 = (var_core_value_sigBBBC == null ? undefined : var_core_value_sigBBBC.viewportPanOffset) ?? {
        x: 0,
        y: 0
      },
      var_core_value_sigE28B = Number.isFinite(var_core_value_sigBBBC == null ? undefined : var_core_value_sigBBBC.zoomRatio) && ((var_core_value_sigBBBC == null ? undefined : var_core_value_sigBBBC.zoomRatio) ?? 0) > 0 ? var_core_value_sigBBBC.zoomRatio : 1;
    return {
      x: (var_core_value_sig986E - var_core_value_sig5440.x) / var_core_value_sigE28B,
      y: (var_core_value_sig537C - var_core_value_sig5440.y) / var_core_value_sigE28B
    };
  }
  _resolveObjectPoint(var_core_value_sig0FD9, var_core_value_sig5649, var_core_value_sigAF82) {
    let var_core_value_sig21A2 = var_core_value_sig0FD9.getInverseCoord(c.Vector2["FromArray"]([var_core_value_sig5649, var_core_value_sigAF82]));
    return {
      x: var_core_value_sig21A2.x + var_core_value_sig0FD9.width / 2,
      y: var_core_value_sig21A2.y + var_core_value_sig0FD9.height / 2
    };
  }
  _handleTableDoubleClick(var_core_value_sig5C1D, var_core_value_sig4CBA, var_core_value_sig8E65, var_core_value_sig772C, var_core_value_sigF309) {
    var var_core_value_sig44F9, var_core_value_sigE532;
    if ((var_core_value_sig772C.button ?? 0) !== 0 || !this._isTableReadyForCellInteraction(var_core_value_sig5C1D, var_core_value_sig4CBA)) return;
    let var_core_value_sigF381 = this._selectCellFromTableEvent(var_core_value_sig5C1D, var_core_value_sig4CBA, var_core_value_sig8E65, var_core_value_sig772C),
      var_core_value_sigCB92 = var_core_value_sig8E65.getTable();
    !var_core_value_sigF381 || !var_core_value_sigCB92 || ((var_core_value_sig44F9 = var_core_value_sig772C.preventDefault) == null || var_core_value_sig44F9.call(var_core_value_sig772C), (var_core_value_sigE532 = var_core_value_sig772C.stopPropagation) == null || var_core_value_sigE532.call(var_core_value_sig772C), J(var_core_value_sigF309), this._openCellEditor({
      selection: var_core_value_sigF381,
      object: var_core_value_sig8E65,
      table: var_core_value_sigCB92
    }));
  }
  _selectCellFromTableEvent(var_core_value_sigC844, var_core_value_sig2ED4, var_core_value_sig0477, var_core_value_sig6FDF) {
    let var_core_value_sig27C4 = this._buildCellSelectionFromTableEvent(var_core_value_sigC844, var_core_value_sig2ED4, var_core_value_sig0477, var_core_value_sig6FDF),
      var_core_value_sig3E1A = (var_core_value_sig27C4 == null ? undefined : var_core_value_sig27C4.focus) ?? (var_core_value_sig27C4 == null ? undefined : var_core_value_sig27C4.anchor) ?? (var_core_value_sig27C4 ? (0, a.resolveFirstSlideTableSelectionCell)(var_core_value_sig27C4) : null);
    return !var_core_value_sig27C4 || !var_core_value_sig3E1A ? null : (this._slideTableSelectionService["markTableInternalInteraction"](), this._slideTableSelectionService["selectCell"]({
      unitId: var_core_value_sig27C4.unitId,
      subUnitId: var_core_value_sig27C4.subUnitId,
      elementId: var_core_value_sig27C4.elementId,
      tableId: var_core_value_sig27C4.tableId,
      row: var_core_value_sig3E1A.row,
      column: var_core_value_sig3E1A.column
    }));
  }
  _buildCellSelectionFromTableEvent(var_core_value_sig7FB0, var_core_value_sig5215, var_core_value_sig5204, var_core_value_sig5E11) {
    let var_core_value_sig4D58 = var_core_value_sig5204.hitTestCellAtScenePoint(this._getBoardPointVectorFromEvent(var_core_value_sig5E11));
    if (!var_core_value_sig4D58 || var_core_value_sig4D58.kind !== "cell") return null;
    let var_core_value_sig2DBD = var_core_value_sig7FB0.getUnitId(),
      var_core_value_sig424E = var_core_value_sig7FB0.getActivePageId(),
      var_core_value_sigF481 = {
        row: var_core_value_sig4D58.row,
        column: var_core_value_sig4D58.column
      };
    return {
      unitId: var_core_value_sig2DBD,
      subUnitId: var_core_value_sig424E,
      elementId: var_core_value_sig5215.elementId,
      tableId: var_core_value_sig5215.element["tableId"],
      kind: "cell",
      anchor: var_core_value_sigF481,
      focus: var_core_value_sigF481,
      ranges: [{
        startRow: var_core_value_sig4D58.row,
        endRow: var_core_value_sig4D58.row,
        startColumn: var_core_value_sig4D58.column,
        endColumn: var_core_value_sig4D58.column
      }]
    };
  }
  _beginTableInternalInteraction(var_core_value_sigD7F2) {
    var var_core_value_sig7CF3, var_core_value_sig9DC6;
    this._boardElementStateService["clearSelection"](), (var_core_value_sig7CF3 = (var_core_value_sig9DC6 = this._renderContext["scene"]).getTransformer) == null || (var_core_value_sig7CF3 = var_core_value_sig7CF3.call(var_core_value_sig9DC6)) == null || var_core_value_sig7CF3.detachFrom(var_core_value_sigD7F2);
  }
  _handleKeyboardAction(var_core_value_sig6643) {
    let var_core_value_sig4124 = this._getActiveEditingSession();
    if (var_core_value_sig4124) return this._handleEditingKeyboardAction(var_core_value_sig6643, var_core_value_sig4124);
    let var_core_value_sigBF1C = this._resolveActiveKeyboardTarget();
    if (!var_core_value_sigBF1C) return false;
    if (var_core_value_sig6643 === "edit-cell") return this._openCellEditor(var_core_value_sigBF1C);
    if (var_core_value_sig6643 === "clear-cells") return this._clearSelectedCellContents(var_core_value_sigBF1C);
    let var_core_value_sigEEEF = (0, a.resolveSlideTableKeyboardMovement)(var_core_value_sig6643);
    if (!var_core_value_sigEEEF) return false;
    let {
        selection: var_core_value_sig9A01,
        table: var_core_value_sig674F,
        object: var_core_value_sigC8F6
      } = var_core_value_sigBF1C,
      var_core_value_sig8A26 = var_core_value_sig9A01.focus ?? var_core_value_sig9A01.anchor ?? (0, a.resolveFirstSlideTableSelectionCell)(var_core_value_sig9A01);
    if (!var_core_value_sig8A26) return false;
    let var_core_value_sigD073 = (0, a.resolveNextSlideTableKeyboardCell)(var_core_value_sig8A26, var_core_value_sigEEEF, var_core_value_sig674F.rows["length"], var_core_value_sig674F.columns["length"]);
    if (var_core_value_sigEEEF.extend) {
      let var_core_value_sig237B = var_core_value_sig9A01.anchor ?? var_core_value_sig8A26,
        var_core_value_sigFEAB = (0, i.expandSlideTableRangeToMergedCells)(var_core_value_sig674F, {
          startRow: var_core_value_sig237B.row,
          startColumn: var_core_value_sig237B.column,
          endRow: var_core_value_sigD073.row,
          endColumn: var_core_value_sigD073.column
        }),
        var_core_value_sigE347 = this._slideTableSelectionService["selectRange"]({
          unitId: var_core_value_sig9A01.unitId,
          subUnitId: var_core_value_sig9A01.subUnitId,
          elementId: var_core_value_sig9A01.elementId,
          tableId: var_core_value_sig9A01.tableId,
          ...var_core_value_sigFEAB
        });
      var_core_value_sigC8F6.setTableSelection((0, a.resolveSlideTableObjectSelection)(var_core_value_sigE347));
    } else {
      let var_core_value_sig3C5B = this._slideTableSelectionService["selectCell"]({
        unitId: var_core_value_sig9A01.unitId,
        subUnitId: var_core_value_sig9A01.subUnitId,
        elementId: var_core_value_sig9A01.elementId,
        tableId: var_core_value_sig9A01.tableId,
        row: var_core_value_sigD073.row,
        column: var_core_value_sigD073.column
      });
      var_core_value_sigC8F6.setTableSelection((0, a.resolveSlideTableObjectSelection)(var_core_value_sig3C5B));
    }
    return this._makeSceneDirty(), true;
  }
  _handleEditingKeyboardAction(var_core_value_sigF631, var_core_value_sig2278) {
    let var_core_value_sig7053 = var_core_value_sigF631 === "tab-forward" || var_core_value_sigF631 === "tab-backward" ? (0, a.resolveSlideTableKeyboardMovement)(var_core_value_sigF631) : null;
    if (!var_core_value_sig7053) return false;
    let var_core_value_sig52F1 = this._getBoardTableObject((0, n.getBoardElementRenderObjectKey)(var_core_value_sig2278.unitId, var_core_value_sig2278.elementId)),
      var_core_value_sig1E74 = this._slideTableResourceService["getTable"](var_core_value_sig2278.unitId, var_core_value_sig2278.tableId) ?? (var_core_value_sig52F1 == null ? undefined : var_core_value_sig52F1.getTable());
    if (!var_core_value_sig52F1 || !var_core_value_sig1E74) return false;
    let var_core_value_sig1E84 = (0, a.resolveNextSlideTableKeyboardCell)({
      row: var_core_value_sig2278.row,
      column: var_core_value_sig2278.column
    }, var_core_value_sig7053, var_core_value_sig1E74.rows["length"], var_core_value_sig1E74.columns["length"]);
    if (var_core_value_sig1E84.row === var_core_value_sig2278.row && var_core_value_sig1E84.column === var_core_value_sig2278.column) return false;
    this._completeActiveEditor(var_core_value_sig2278.documentData);
    let var_core_value_sig133B = this._slideTableSelectionService["selectCell"]({
      unitId: var_core_value_sig2278.unitId,
      subUnitId: var_core_value_sig2278.subUnitId,
      elementId: var_core_value_sig2278.elementId,
      tableId: var_core_value_sig2278.tableId,
      row: var_core_value_sig1E84.row,
      column: var_core_value_sig1E84.column
    });
    return var_core_value_sig52F1.setTableSelection((0, a.resolveSlideTableObjectSelection)(var_core_value_sig133B)), this._tableActivationStage = "cell", this._activeTableContext = {
      unitId: var_core_value_sig2278.unitId,
      subUnitId: var_core_value_sig2278.subUnitId,
      elementId: var_core_value_sig2278.elementId,
      tableId: var_core_value_sig2278.tableId
    }, this._keyboardService["setFocused"](true), this._makeSceneDirty(), true;
  }
  _resolveTableClipboardTarget(var_core_value_sig69B8) {
    if (var_core_value_sig69B8.defaultPrevented || !this._contextService["getContextValue"]("FOCUSING_BOARD_TABLE") || this._getActiveEditingSession()) return null;
    let var_core_value_sig983D = this._resolveActiveKeyboardTarget();
    return (var_core_value_sig983D == null ? undefined : var_core_value_sig983D.selection["unitId"]) === this._renderContext["unitId"] ? var_core_value_sig983D : null;
  }
  _canCopyTable(var_core_value_sig9A03) {
    return (0, e.getBoardPermissionValue)(this._permissionService, var_core_value_sig9A03.unitId, var_core_value_sig9A03.unitId, _.UnitAction["Copy"]);
  }
  async _commitClipboardPatch(var_core_value_sig3363, var_core_value_sigF64A) {
    return (await this._commandService["executeCommand"](t.UpdateBoardTableCommand["id"], {
      unitId: var_core_value_sig3363.selection["unitId"],
      tableId: var_core_value_sig3363.selection["tableId"],
      patch: var_core_value_sigF64A
    })) ? (var_core_value_sig3363.object["setTableSelection"]((0, a.resolveSlideTableObjectSelection)(var_core_value_sig3363.selection)), this._keyboardService["setFocused"](true), this._makeSceneDirty(), true) : false;
  }
  async _insertClipboardImages(var_core_value_sig25EC, var_core_value_sigA790 = 0) {
    for (let var_core_value_sig200B = 0; var_core_value_sig200B < var_core_value_sig25EC.length; var_core_value_sig200B++) {
      let var_core_value_sigF9C7 = var_core_value_sig25EC[var_core_value_sig200B],
        var_core_value_sig8895 = await (0, g.normalizeClipboardImageFile)(var_core_value_sigF9C7);
      if (var_core_value_sig8895) {
        let var_core_value_sig8061 = (var_core_value_sigA790 + var_core_value_sig200B) * 32;
        var_core_value_sig8061 === 0 ? await this._boardImageInsertService["insertImage"](var_core_value_sig8895) : await this._boardImageInsertService["insertImage"](var_core_value_sig8895, {
          offset: {
            x: var_core_value_sig8061,
            y: var_core_value_sig8061
          }
        });
      }
    }
  }
  _handleKeyboardInput(var_core_value_sig9A5E) {
    return var_core_value_sig9A5E.kind === "composition-start" ? this._openActiveCellEditor() : this._getActiveEditingSession() || !var_core_value_sig9A5E.text ? false : this._openActiveCellEditor({
      initialText: var_core_value_sig9A5E.text
    });
  }
  _clearSelectedCellContents(var_core_value_sig01B9) {
    let var_core_value_sigD6A9 = (0, a.buildSlideTableClearTextPatch)(var_core_value_sig01B9.table, var_core_value_sig01B9.selection);
    return var_core_value_sigD6A9 && this._commandService["executeCommand"](t.UpdateBoardTableCommand["id"], {
      unitId: var_core_value_sig01B9.selection["unitId"],
      tableId: var_core_value_sig01B9.selection["tableId"],
      patch: var_core_value_sigD6A9
    }), var_core_value_sig01B9.object["setTableSelection"]((0, a.resolveSlideTableObjectSelection)(var_core_value_sig01B9.selection)), this._makeSceneDirty(), true;
  }
  _openActiveCellEditor(var_core_value_sig0FCF) {
    let var_core_value_sigCF96 = this._resolveActiveKeyboardTarget();
    return var_core_value_sigCF96 ? this._openCellEditor(var_core_value_sigCF96, var_core_value_sig0FCF) : false;
  }
  _openCellEditor(var_core_value_sigC4E9, var_core_value_sigF612) {
    var var_core_value_sigAA6C, var_core_value_sig8BFA, var_core_value_sig236B, var_core_value_sig1951;
    let var_core_value_sigFEA0 = (0, a.resolveSlideTableCellEditorTarget)({
      table: var_core_value_sigC4E9.table,
      selection: var_core_value_sigC4E9.selection,
      tableWidth: var_core_value_sigC4E9.object["width"],
      tableHeight: var_core_value_sigC4E9.object["height"]
    });
    if (!var_core_value_sigFEA0) return false;
    let var_core_value_sig931A = var_core_value_sigC4E9.object["getCellTextRect"](var_core_value_sigFEA0.row, var_core_value_sigFEA0.column, var_core_value_sigC4E9.object["width"], var_core_value_sigC4E9.object["height"]) ?? var_core_value_sigFEA0.rect,
      var_core_value_sigEE7D = (var_core_value_sigF612 == null ? undefined : var_core_value_sigF612.initialText) === undefined ? var_core_value_sigFEA0.documentData : (0, a.replaceSlideTableCellDocumentText)(var_core_value_sigFEA0.documentData, var_core_value_sigF612.initialText),
      var_core_value_sig3585 = {
        unitId: var_core_value_sigC4E9.selection["unitId"],
        subUnitId: var_core_value_sigC4E9.selection["subUnitId"] ?? "",
        elementId: var_core_value_sigC4E9.selection["elementId"],
        tableId: var_core_value_sigC4E9.selection["tableId"],
        row: var_core_value_sigFEA0.row,
        column: var_core_value_sigFEA0.column,
        rect: var_core_value_sig931A,
        horizontalAlign: (0, a.resolveSlideTableDocumentHorizontalAlign)(var_core_value_sigFEA0.documentData) ?? s.HorizontalAlign["LEFT"],
        verticalAlign: (0, a.toCoreVerticalAlign)((var_core_value_sigAA6C = var_core_value_sigFEA0.cellStyle) == null ? undefined : var_core_value_sigAA6C.verticalAlign) ?? ((var_core_value_sig8BFA = var_core_value_sigFEA0.documentData["documentStyle"]) == null || (var_core_value_sig8BFA = var_core_value_sig8BFA.renderConfig) == null ? undefined : var_core_value_sig8BFA.verticalAlign),
        isHorizontal: ((var_core_value_sig236B = var_core_value_sigFEA0.cellStyle) == null ? undefined : var_core_value_sig236B.textDirection) !== i.SlideTableTextDirectionEnum["Vertical"] && ((var_core_value_sig1951 = var_core_value_sigFEA0.cellStyle) == null ? undefined : var_core_value_sig1951.textDirection) !== i.SlideTableTextDirectionEnum["Vertical270"],
        tableTransform: {
          left: var_core_value_sigC4E9.object["left"],
          top: var_core_value_sigC4E9.object["top"],
          width: var_core_value_sigC4E9.object["width"],
          height: var_core_value_sigC4E9.object["height"],
          angle: var_core_value_sigC4E9.object["angle"] ?? 0,
          flipX: var_core_value_sigC4E9.object["flipX"],
          flipY: var_core_value_sigC4E9.object["flipY"]
        },
        documentData: var_core_value_sigEE7D
      },
      var_core_value_sig31A8 = this._resolveEditorUILayout(var_core_value_sig3585);
    if (!var_core_value_sig31A8) return false;
    let var_core_value_sigA4DA = this._editorUIService["getSession"]();
    var_core_value_sigA4DA != null && var_core_value_sigA4DA.context ? this._editorUIService["complete"](var_core_value_sigA4DA.documentData, var_core_value_sigA4DA.measurement, var_core_value_sigA4DA.sessionId) : (this._cellEditorBridgeService["complete"](), this._editorUIService["complete"]());
    let var_core_value_sig6FC0 = this._slideTableSelectionService["enterTextMode"]({
      unitId: var_core_value_sigC4E9.selection["unitId"],
      subUnitId: var_core_value_sigC4E9.selection["subUnitId"] ?? "",
      elementId: var_core_value_sigC4E9.selection["elementId"],
      tableId: var_core_value_sigC4E9.selection["tableId"],
      row: var_core_value_sigFEA0.row,
      column: var_core_value_sigFEA0.column
    });
    return var_core_value_sigC4E9.object["setEditingCell"]({
      row: var_core_value_sigFEA0.row,
      column: var_core_value_sigFEA0.column
    }), var_core_value_sigC4E9.object["setTableSelection"]((0, a.resolveSlideTableObjectSelection)(var_core_value_sig6FC0)), this._keyboardService["setFocused"](false), this._editorUIService["open"]({
      editorId: "BOARD_TABLE_EDITOR_UNIT_ID",
      documentData: var_core_value_sigEE7D,
      layout: var_core_value_sig31A8,
      context: var_core_value_sig3585,
      appearance: "table-cell",
      autoFocus: true,
      hideFloatingToolbarAlignment: true,
      isSingle: false,
      onChange: (var_core_value_sig3863, var_core_value_sigC97C, var_core_value_sigC4B1) => {
        var_core_value_sigC97C && this._autoGrowCellEditorRowHeight(var_core_value_sigC4E9.object, {
          ...var_core_value_sigC97C,
          documentData: var_core_value_sig3863,
          measurement: var_core_value_sigC4B1
        });
      },
      onComplete: (var_core_value_sig1BD9, var_core_value_sigE43E, var_core_value_sigA937) => {
        var_core_value_sigE43E && this._commitCellDocument(var_core_value_sigC4E9.object, {
          ...var_core_value_sigE43E,
          documentData: var_core_value_sig1BD9,
          measurement: var_core_value_sigA937
        });
      },
      onCancel: () => {
        this._finishCellEditing(var_core_value_sigC4E9.object);
      },
      onKeyDown: var_core_value_sigCAD5 => {
        let var_core_value_sigE503 = bt(var_core_value_sigCAD5);
        return var_core_value_sigE503 ? (var_core_value_sigCAD5.preventDefault(), var_core_value_sigCAD5.stopPropagation(), Promise.resolve(this._keyboardService["handle"](var_core_value_sigE503)), true) : false;
      }
    }), this._makeSceneDirty(), true;
  }
  _resolveEditorUILayout(var_core_value_sig6217) {
    var var_core_value_sigB805, var_core_value_sig4FAE;
    return xt(var_core_value_sig6217, {
      canvasOffset: St((var_core_value_sigB805 = this._renderContext["engine"]) == null || (var_core_value_sig4FAE = var_core_value_sigB805.getCanvasElement) == null ? undefined : var_core_value_sig4FAE.call(var_core_value_sigB805), this._layoutService["getContentElement"]()),
      scene: this._renderContext["scene"]
    });
  }
  _commitCellDocument(var_core_value_sig1FCC, var_core_value_sigB7F9) {
    var var_core_value_sigB1A2;
    let var_core_value_sig526D = this._slideTableResourceService["getTable"](var_core_value_sigB7F9.unitId, var_core_value_sigB7F9.tableId) ?? var_core_value_sig1FCC.getTable();
    if (!var_core_value_sig526D) {
      this._finishCellEditing(var_core_value_sig1FCC);
      return;
    }
    let var_core_value_sigBDB5 = "BOARD_TABLE_CELL_EDITOR_" + var_core_value_sig526D.id + "_" + var_core_value_sigB7F9.row + "_" + var_core_value_sigB7F9.column,
      var_core_value_sig59CE1 = (0, a.normalizeSlideTableCellDocumentData)((0, o.stripEditorUIDocumentData)(var_core_value_sigB7F9.documentData), var_core_value_sigBDB5),
      var_core_value_sig3AD7 = (0, i.buildSlideTableCellTextDataPatch)(var_core_value_sig526D, var_core_value_sigB7F9.row, var_core_value_sigB7F9.column, var_core_value_sig59CE1, {
        verticalAlign: Ot((var_core_value_sigB1A2 = var_core_value_sig59CE1.documentStyle) == null || (var_core_value_sigB1A2 = var_core_value_sigB1A2.renderConfig) == null ? undefined : var_core_value_sigB1A2.verticalAlign)
      });
    if (!var_core_value_sig3AD7) {
      this._finishCellEditing(var_core_value_sig1FCC);
      return;
    }
    let var_core_value_sig04E4 = var_core_value_sig3AD7.rows,
      var_core_value_sigD8F0 = Et(var_core_value_sig526D, var_core_value_sig04E4, var_core_value_sig1FCC, var_core_value_sigB7F9);
    this._commandService["executeCommand"](t.UpdateBoardTableCommand["id"], {
      unitId: var_core_value_sigB7F9.unitId,
      tableId: var_core_value_sigB7F9.tableId,
      patch: {
        rows: var_core_value_sig04E4
      }
    }), var_core_value_sigD8F0 > 0 && this._growBoardTableElementHeight(var_core_value_sig1FCC, var_core_value_sigB7F9, var_core_value_sigD8F0), this._finishCellEditing(var_core_value_sig1FCC);
  }
  _autoGrowCellEditorRowHeight(var_core_value_sig1475, var_core_value_sig08B7) {
    if (!var_core_value_sig08B7.measurement) return;
    let var_core_value_sig2008 = this._slideTableResourceService["getTable"](var_core_value_sig08B7.unitId, var_core_value_sig08B7.tableId) ?? var_core_value_sig1475.getTable();
    if (!var_core_value_sig2008) return;
    let var_core_value_sig496B = var_core_value_sig2008.rows["map"](var_core_value_sig48DD => ({
        ...var_core_value_sig48DD
      })),
      var_core_value_sig7161 = Et(var_core_value_sig2008, var_core_value_sig496B, var_core_value_sig1475, var_core_value_sig08B7);
    var_core_value_sig7161 <= 0 || (this._commandService["executeCommand"](t.UpdateBoardTableCommand["id"], {
      unitId: var_core_value_sig08B7.unitId,
      tableId: var_core_value_sig08B7.tableId,
      patch: {
        rows: var_core_value_sig496B
      }
    }), var_core_value_sig1475.setPreviewTable({
      ...var_core_value_sig2008,
      rows: var_core_value_sig496B
    }), this._growBoardTableElementHeight(var_core_value_sig1475, var_core_value_sig08B7, var_core_value_sig7161), this._makeSceneDirty());
  }
  _growBoardTableElementHeight(var_core_value_sig2AB8, var_core_value_sig3FCF, var_core_value_sig675A) {
    if (var_core_value_sig675A <= 0) return;
    let var_core_value_sig837F = var_core_value_sig2AB8.getElement(),
      var_core_value_sig9D6E = {
        ...var_core_value_sig837F.transform,
        height: Y(var_core_value_sig837F.transform["height"] ?? var_core_value_sig2AB8.height, var_core_value_sig2AB8.height) + var_core_value_sig675A
      };
    this._commandService["executeCommand"](e.UpdateBoardElementsCommand["id"], {
      unitId: var_core_value_sig3FCF.unitId,
      subUnitId: var_core_value_sig3FCF.subUnitId,
      updates: [{
        elementId: var_core_value_sig3FCF.elementId,
        element: {
          ...var_core_value_sig837F,
          transform: var_core_value_sig9D6E
        },
        transform: var_core_value_sig9D6E
      }]
    });
  }
  _finishCellEditing(var_core_value_sigB205) {
    this._slideTableSelectionService["clear"](), this._keyboardService["setFocused"](false), var_core_value_sigB205.setEditingCell(null), var_core_value_sigB205.setTableSelection(null), var_core_value_sigB205.setTableControlHover(null), var_core_value_sigB205.setPreviewTable(null), this._makeSceneDirty();
  }
  _resolveActiveKeyboardTarget() {
    if (this._boardUIStateService["getState"]().interactionMode === "viewing") return null;
    let var_core_value_sigBF78 = this._slideTableSelectionService["getSelection"]();
    if (!var_core_value_sigBF78 || var_core_value_sigBF78.kind === "text") return null;
    let var_core_value_sig8AF3 = this._getBoardTableObject((0, n.getBoardElementRenderObjectKey)(var_core_value_sigBF78.unitId, var_core_value_sigBF78.elementId)),
      var_core_value_sigA0CC = this._slideTableResourceService["getTable"](var_core_value_sigBF78.unitId, var_core_value_sigBF78.tableId) ?? (var_core_value_sig8AF3 == null ? undefined : var_core_value_sig8AF3.getTable());
    return !var_core_value_sig8AF3 || !var_core_value_sigA0CC ? null : {
      selection: var_core_value_sigBF78,
      object: var_core_value_sig8AF3,
      table: var_core_value_sigA0CC
    };
  }
  _openContextMenu(var_core_value_sigB3A1) {
    var var_core_value_sig1FB9, var_core_value_sig53A9, var_core_value_sigDACD, var_core_value_sig691E;
    (var_core_value_sig1FB9 = (var_core_value_sig53A9 = this._contextMenuService).hideContextMenu) == null || var_core_value_sig1FB9.call(var_core_value_sig53A9);
    let var_core_value_sigD6D6 = this._createContextMenuEvent(var_core_value_sigB3A1);
    (var_core_value_sigDACD = var_core_value_sigD6D6.preventDefault) == null || var_core_value_sigDACD.call(var_core_value_sigD6D6), (var_core_value_sig691E = var_core_value_sigD6D6.stopPropagation) == null || var_core_value_sig691E.call(var_core_value_sigD6D6), this._contextMenuService["triggerContextMenu"](var_core_value_sigD6D6, "board.table.contextMenu.cell");
  }
  _createContextMenuEvent(var_core_value_sig0347) {
    var var_core_value_sig52A3, var_core_value_sigAD91, var_core_value_sigF64E;
    let var_core_value_sig9B3D1 = var_core_value_sig0347;
    if (Number.isFinite(var_core_value_sig9B3D1.clientX) && Number.isFinite(var_core_value_sig9B3D1.clientY)) return {
      ...var_core_value_sig9B3D1,
      clientX: var_core_value_sig9B3D1.clientX,
      clientY: var_core_value_sig9B3D1.clientY,
      preventDefault: () => {
        var var_core_value_sig5E6A;
        return (var_core_value_sig5E6A = var_core_value_sig9B3D1.preventDefault) == null ? undefined : var_core_value_sig5E6A.call(var_core_value_sig9B3D1);
      },
      stopPropagation: () => {
        var var_core_value_sigB7FC;
        return (var_core_value_sigB7FC = var_core_value_sig9B3D1.stopPropagation) == null ? undefined : var_core_value_sigB7FC.call(var_core_value_sig9B3D1);
      }
    };
    let var_core_value_sigB217 = (var_core_value_sig52A3 = this._renderContext["engine"]) == null || (var_core_value_sigAD91 = var_core_value_sig52A3.getCanvasElement) == null || (var_core_value_sigAD91 = var_core_value_sigAD91.call(var_core_value_sig52A3)) == null || (var_core_value_sigF64E = var_core_value_sigAD91.getBoundingClientRect) == null ? undefined : var_core_value_sigF64E.call(var_core_value_sigAD91),
      var_core_value_sig1FE6 = ((var_core_value_sigB217 == null ? undefined : var_core_value_sigB217.left) ?? 0) + (var_core_value_sig0347.offsetX ?? 0),
      var_core_value_sig2471 = ((var_core_value_sigB217 == null ? undefined : var_core_value_sigB217.top) ?? 0) + (var_core_value_sig0347.offsetY ?? 0);
    return {
      ...var_core_value_sig9B3D1,
      clientX: var_core_value_sig1FE6,
      clientY: var_core_value_sig2471,
      preventDefault: () => {
        var var_core_value_sig9CD9;
        return (var_core_value_sig9CD9 = var_core_value_sig9B3D1.preventDefault) == null ? undefined : var_core_value_sig9CD9.call(var_core_value_sig9B3D1);
      },
      stopPropagation: () => {
        var var_core_value_sigFD0C;
        return (var_core_value_sigFD0C = var_core_value_sig9B3D1.stopPropagation) == null ? undefined : var_core_value_sigFD0C.call(var_core_value_sig9B3D1);
      }
    };
  }
};
wt = L([I(1, s.IUniverInstanceService), I(2, e.IBoardElementService), I(3, (0, s.Inject)(a.SlideTableSelectionService)), I(4, l.IContextMenuService), I(5, (0, s.Inject)(R)), I(6, (0, s.Inject)(yt)), I(7, s.ICommandService), I(8, s.IContextService), I(9, (0, s.Inject)(i.SlideTableResourceService)), I(10, n.IBoardElementStateService), I(11, n.IBoardUIStateService), I(12, o.IEditorUIService), I(13, l.ILayoutService), I(14, s.IPermissionService), I(15, (0, s.Inject)(n.BoardImageInsertService))], wt);
function q(var_core_value_sig7EAB) {
  return var_core_value_sig7EAB.element["type"] === e.BoardElementType["Table"];
}
function Tt(var_core_value_sig56B9, var_core_value_sig90CF) {
  let var_core_value_sigA3861 = (0, i.resolveSlideTableRenderModel)(var_core_value_sig56B9);
  return {
    scaleX: Y(var_core_value_sig90CF.width / var_core_value_sigA3861.width, 1),
    scaleY: Y(var_core_value_sig90CF.height / var_core_value_sigA3861.height, 1)
  };
}
function Et(var_core_value_sigCD6E, var_core_value_sigFD9D, var_core_value_sigA2A4, var_core_value_sigA1AC) {
  let var_core_value_sig6180 = var_core_value_sigA1AC.measurement;
  if (!var_core_value_sig6180) return 0;
  let var_core_value_sigB93D = (0, i.resolveSlideTableRenderModel)(var_core_value_sigCD6E),
    var_core_value_sigB17C = var_core_value_sigB93D.cells["find"](var_core_value_sigD1FC => !var_core_value_sigD1FC.hidden && var_core_value_sigD1FC.row === var_core_value_sigA1AC.row && var_core_value_sigD1FC.column === var_core_value_sigA1AC.column);
  if (!var_core_value_sigB17C) return 0;
  let var_core_value_sig69B6 = Dt(var_core_value_sigB17C, var_core_value_sigB93D.height, var_core_value_sigA2A4.height),
    var_core_value_sig708D = Y(var_core_value_sig6180.contentHeight, var_core_value_sig69B6),
    var_core_value_sig1ED2 = Math.ceil(var_core_value_sig708D - var_core_value_sig69B6);
  if (var_core_value_sig1ED2 <= 0) return 0;
  let var_core_value_sig94C1 = var_core_value_sig1ED2 * Y(var_core_value_sigB93D.height / var_core_value_sigA2A4.height, 1),
    var_core_value_sigABAC = var_core_value_sigFD9D[var_core_value_sigB17C.row + var_core_value_sigB17C.rowSpan - 1];
  return var_core_value_sigABAC ? (var_core_value_sigABAC.height = Y(var_core_value_sigABAC.height ?? 24, 24) + var_core_value_sig94C1, var_core_value_sig1ED2) : 0;
}
function Dt(var_core_value_sigFAE6, var_core_value_sig06AC, var_core_value_sig57E2) {
  let var_core_value_sig01FC = (0, i.resolveSlideTableCellTextMargins)(var_core_value_sigFAE6.style["margins"]),
    var_core_value_sig10FC = Y(var_core_value_sig57E2 / var_core_value_sig06AC, 1);
  return Math.max(1, var_core_value_sigFAE6.bounds["height"] * var_core_value_sig10FC - var_core_value_sig01FC.top - var_core_value_sig01FC.bottom);
}
function Ot(var_core_value_sig5374) {
  if (var_core_value_sig5374 === s.VerticalAlign["MIDDLE"]) return i.SlideTableVerticalAlignEnum["Middle"];
  if (var_core_value_sig5374 === s.VerticalAlign["BOTTOM"]) return i.SlideTableVerticalAlignEnum["Bottom"];
  if (var_core_value_sig5374 === s.VerticalAlign["TOP"]) return i.SlideTableVerticalAlignEnum["Top"];
}
function kt(var_core_value_sigB66D) {
  var var_core_value_sigD0F0, var_core_value_sig8E31;
  (var_core_value_sigD0F0 = var_core_value_sigB66D.dispose) == null || var_core_value_sigD0F0.call(var_core_value_sigB66D), (var_core_value_sig8E31 = var_core_value_sigB66D.unsubscribe) == null || var_core_value_sig8E31.call(var_core_value_sigB66D);
}
function At(var_core_value_sig8339, var_core_value_sigA01E) {
  let var_core_value_sigA41E = Y(var_core_value_sigA01E, 1),
    var_core_value_sig939C = var_core_value_sig8339.map(var_core_value_sigE2F9 => Y(var_core_value_sigE2F9, 1)),
    var_core_value_sigA49E = var_core_value_sig939C.reduce((var_core_value_sigD689, var_core_value_sig7AE3) => var_core_value_sigD689 + var_core_value_sig7AE3, 0);
  return var_core_value_sig939C.map(var_core_value_sig1EB3 => var_core_value_sig1EB3 / var_core_value_sigA49E * var_core_value_sigA41E);
}
function jt(var_core_value_sig6DEB, var_core_value_sig2F0D) {
  let var_core_value_sig5141 = 0,
    var_core_value_sigA9E0 = {
      index: 0,
      distance: Math.abs(var_core_value_sig2F0D)
    };
  for (let var_core_value_sigE120 = 0; var_core_value_sigE120 < var_core_value_sig6DEB.length; var_core_value_sigE120 += 1) {
    var_core_value_sig5141 += var_core_value_sig6DEB[var_core_value_sigE120];
    let var_core_value_sig849B = Math.abs(var_core_value_sig2F0D - var_core_value_sig5141);
    var_core_value_sig849B < var_core_value_sigA9E0.distance && (var_core_value_sigA9E0 = {
      index: var_core_value_sigE120 + 1,
      distance: var_core_value_sig849B
    });
  }
  return var_core_value_sigA9E0.index;
}
function J(var_core_value_sig751D) {
  var_core_value_sig751D && (var_core_value_sig751D.stopPropagation(), var_core_value_sig751D.skipNextObservers = true);
}
function Mt(var_core_value_sig2E9A, var_core_value_sigE105) {
  var var_core_value_sig0BD6, var_core_value_sig3070;
  if (var_core_value_sig2E9A) return ((var_core_value_sig0BD6 = var_core_value_sig2E9A.rows[var_core_value_sigE105 - 1]) == null ? undefined : var_core_value_sig0BD6.height) ?? ((var_core_value_sig3070 = var_core_value_sig2E9A.rows[var_core_value_sigE105]) == null ? undefined : var_core_value_sig3070.height);
}
function Nt(var_core_value_sigC66D, var_core_value_sig8EC5) {
  var var_core_value_sig1056, var_core_value_sig6EE5;
  if (var_core_value_sigC66D) return ((var_core_value_sig1056 = var_core_value_sigC66D.columns[var_core_value_sig8EC5 - 1]) == null ? undefined : var_core_value_sig1056.width) ?? ((var_core_value_sig6EE5 = var_core_value_sigC66D.columns[var_core_value_sig8EC5]) == null ? undefined : var_core_value_sig6EE5.width);
}
function Pt(var_core_value_sig9DD9) {
  if (typeof var_core_value_sig9DD9.insertIndex == "number" && Number.isInteger(var_core_value_sig9DD9.insertIndex)) return var_core_value_sig9DD9.insertIndex;
  let var_core_value_sig09AC = var_core_value_sig9DD9.kind === "row-insert-dot" ? var_core_value_sig9DD9.row : var_core_value_sig9DD9.column;
  return typeof var_core_value_sig09AC == "number" && Number.isInteger(var_core_value_sig09AC) ? var_core_value_sig09AC + 1 : null;
}
function Ft(var_core_value_sig1613, var_core_value_sigADC6) {
  let var_core_value_sig4620 = var_core_value_sig1613.getInverseCoord(var_core_value_sigADC6),
    var_core_value_sig07FB = var_core_value_sig4620.x + var_core_value_sig1613.width / 2,
    var_core_value_sig617E = var_core_value_sig4620.y + var_core_value_sig1613.height / 2;
  return var_core_value_sig07FB >= -32 && var_core_value_sig07FB <= var_core_value_sig1613.width + 32 && var_core_value_sig617E >= -32 && var_core_value_sig617E <= var_core_value_sig1613.height + 32;
}
function It(var_core_value_sigC85E) {
  let var_core_value_sig8293 = {
    left: var_core_value_sigC85E.left ?? 0,
    top: var_core_value_sigC85E.top ?? 0,
    width: var_core_value_sigC85E.width ?? 0,
    height: var_core_value_sigC85E.height ?? 0
  };
  return var_core_value_sigC85E.rotation !== undefined && (var_core_value_sig8293.rotation = var_core_value_sigC85E.rotation), var_core_value_sigC85E.flipX !== undefined && (var_core_value_sig8293.flipX = var_core_value_sigC85E.flipX), var_core_value_sigC85E.flipY !== undefined && (var_core_value_sig8293.flipY = var_core_value_sigC85E.flipY), var_core_value_sig8293;
}
function Y(var_core_value_sig050D, var_core_value_sig37AE) {
  return Number.isFinite(var_core_value_sig050D) && var_core_value_sig050D > 0 ? var_core_value_sig050D : var_core_value_sig37AE;
}
function Lt(var_core_value_sig5B51) {
  return new DOMParser().parseFromString(var_core_value_sig5B51, "text/html").querySelector("img") !== null;
}
async function Rt(var_core_value_sig64FF, var_core_value_sig86F4) {
  let var_core_value_sig9E0F = (0, g.extractClipboardImageFiles)(var_core_value_sig64FF);
  return var_core_value_sig86F4 ? Lt(var_core_value_sig86F4) ? var_core_value_sig9E0F.length > 0 ? var_core_value_sig9E0F : (0, g.extractClipboardHtmlImageFiles)(var_core_value_sig86F4) : [] : var_core_value_sig9E0F;
}
let zt = class extends s.Disposable {
  constructor(var_core_value_sigD6E7) {
    super(), this._componentManager = var_core_value_sigD6E7, this._registerComponents();
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
  return en("board-table.menu.distribute", "boards-table-ui.contextMenu.distribute");
}
function Ut(var_core_value_sig3A42) {
  return Z(T.id, "boards-table-ui.contextMenu.insertRowAbove", X(var_core_value_sig3A42, a.SLIDE_TABLE_CONTEXT_MENU_ACTIONS["InsertRowAbove"]), var_core_value_sig3A42);
}
function Wt(var_core_value_sig8802) {
  return Z(E.id, "boards-table-ui.contextMenu.insertRowBelow", X(var_core_value_sig8802, a.SLIDE_TABLE_CONTEXT_MENU_ACTIONS["InsertRowBelow"]), var_core_value_sig8802);
}
function Gt(var_core_value_sig95D5) {
  return Z(D.id, "boards-table-ui.contextMenu.insertColumnLeft", X(var_core_value_sig95D5, a.SLIDE_TABLE_CONTEXT_MENU_ACTIONS["InsertColumnLeft"]), var_core_value_sig95D5);
}
function Kt(var_core_value_sigE027) {
  return Z(O.id, "boards-table-ui.contextMenu.insertColumnRight", X(var_core_value_sigE027, a.SLIDE_TABLE_CONTEXT_MENU_ACTIONS["InsertColumnRight"]), var_core_value_sigE027);
}
function qt(var_core_value_sigE537) {
  return Z(k.id, "boards-table-ui.contextMenu.deleteRow", X(var_core_value_sigE537, a.SLIDE_TABLE_CONTEXT_MENU_ACTIONS["DeleteRows"]), var_core_value_sigE537);
}
function Jt(var_core_value_sig5D84) {
  return Z(ee.id, "boards-table-ui.contextMenu.deleteColumn", X(var_core_value_sig5D84, a.SLIDE_TABLE_CONTEXT_MENU_ACTIONS["DeleteColumns"]), var_core_value_sig5D84);
}
function Yt() {
  return Z(_e.id, "boards-table-ui.contextMenu.deleteTable", false);
}
function Xt(var_core_value_sigD120) {
  return Z(A.id, "boards-table-ui.editorToolbar.mergeCells", X(var_core_value_sigD120, a.SLIDE_TABLE_CONTEXT_MENU_ACTIONS["MergeCells"]), var_core_value_sigD120);
}
function Zt(var_core_value_sigAA05) {
  return Z(j.id, "boards-table-ui.editorToolbar.unmergeCells", X(var_core_value_sigAA05, a.SLIDE_TABLE_CONTEXT_MENU_ACTIONS["UnmergeCells"]), var_core_value_sigAA05);
}
function Qt(var_core_value_sigC04C) {
  return Z(te.id, "boards-table-ui.contextMenu.distributeRows", X(var_core_value_sigC04C, a.SLIDE_TABLE_CONTEXT_MENU_ACTIONS["DistributeRows"]), var_core_value_sigC04C);
}
function $t(var_core_value_sig2069) {
  return Z(M.id, "boards-table-ui.contextMenu.distributeColumns", X(var_core_value_sig2069, a.SLIDE_TABLE_CONTEXT_MENU_ACTIONS["DistributeColumns"]), var_core_value_sig2069);
}
function X(var_core_value_sig5176, var_core_value_sig71A1) {
  return !var_core_value_sig5176 || !ye(var_core_value_sig5176, var_core_value_sig71A1);
}
function en(var_core_value_sig72AD, var_core_value_sig9ABE) {
  return {
    id: var_core_value_sig72AD,
    type: l.MenuItemType["SUBITEMS"],
    title: var_core_value_sig9ABE
  };
}
function Z(var_core_value_sig8EF01, var_core_value_sig234B, var_core_value_sig8169, var_core_value_sigC5FB) {
  let var_core_value_sig5453 = var_core_value_sigC5FB == null ? undefined : var_core_value_sigC5FB.get(a.SlideTableSelectionService).getSelection();
  return {
    id: var_core_value_sig8EF01,
    type: l.MenuItemType["BUTTON"],
    title: var_core_value_sig234B,
    disabled$: tn(var_core_value_sig8169),
    ...(var_core_value_sig5453 ? {
      params: {
        selection: var_core_value_sig5453
      }
    } : {})
  };
}
function tn(var_core_value_sig8725) {
  return {
    subscribe(var_core_value_sig3669) {
      if (typeof var_core_value_sig3669 == "function") var_core_value_sig3669(var_core_value_sig8725);else {
        var var_core_value_sig5CBC;
        (var_core_value_sig5CBC = var_core_value_sig3669.next) == null || var_core_value_sig5CBC.call(var_core_value_sig3669, var_core_value_sig8725);
      }
      return {
        unsubscribe: () => {}
      };
    }
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
          [T.id]: {
            order: 0,
            menuItemFactory: Ut
          },
          [E.id]: {
            order: 1,
            menuItemFactory: Wt
          },
          [D.id]: {
            order: 2,
            menuItemFactory: Gt
          },
          [O.id]: {
            order: 3,
            menuItemFactory: Kt
          }
        },
        "board-table.menu.delete": {
          order: 1,
          menuItemFactory: Vt,
          [k.id]: {
            order: 0,
            menuItemFactory: qt
          },
          [ee.id]: {
            order: 1,
            menuItemFactory: Jt
          }
        },
        [A.id]: {
          order: 2,
          menuItemFactory: Xt
        },
        [j.id]: {
          order: 3,
          menuItemFactory: Zt
        },
        "board-table.menu.distribute": {
          order: 4,
          menuItemFactory: Ht,
          [te.id]: {
            order: 0,
            menuItemFactory: Qt
          },
          [M.id]: {
            order: 1,
            menuItemFactory: $t
          }
        }
      },
      [l.ContextMenuGroup["OTHERS"]]: {
        order: 1,
        [_e.id]: {
          order: 0,
          menuItemFactory: Yt
        }
      }
    }
  }
};
function rn(var_core_value_sig513B) {
  let var_core_value_sig5501 = var_core_value_sig513B;
  return (var_core_value_sig5501 == null ? undefined : var_core_value_sig5501.type) !== e.BoardElementType["Table"] || typeof var_core_value_sig5501.tableId != "string" ? null : var_core_value_sig5501;
}
function an(var_core_value_sig7784, var_core_value_sigB706, var_core_value_sig5FD01, var_core_value_sig77E3) {
  return {
    name: "table",
    createObject: ({
      unitId: var_core_value_sig20BE,
      elementDataItem: var_core_value_sig6BD0,
      key: var_core_value_sig8C15,
      bounds: var_core_value_sig6DF7,
      zIndex: var_core_value_sigB411
    }) => {
      let var_core_value_sigA81B = rn(var_core_value_sig6BD0.element);
      if (!var_core_value_sigA81B) return null;
      let var_core_value_sigFE8D = var_core_value_sig7784.getTable(var_core_value_sig20BE, var_core_value_sigA81B.tableId);
      return new gt(var_core_value_sig8C15, {
        ...var_core_value_sig6DF7,
        element: var_core_value_sigA81B,
        localeService: var_core_value_sigB706,
        tableThemePalette: var_core_value_sig5FD01,
        tableThemes: var_core_value_sig7784.getThemes(var_core_value_sig20BE),
        themeService: var_core_value_sig77E3,
        table: var_core_value_sigFE8D,
        zIndex: var_core_value_sigB411,
        evented: true
      });
    },
    syncObject: (var_core_value_sig8595, {
      unitId: var_core_value_sigF8DE,
      elementDataItem: var_core_value_sigFE76,
      bounds: var_core_value_sig84C8,
      zIndex: var_core_value_sig80C0,
      preserveTransform: var_core_value_sig22B4
    }) => {
      if (!(var_core_value_sig8595 instanceof gt)) return false;
      let var_core_value_sigBB37 = rn(var_core_value_sigFE76.element);
      return var_core_value_sigBB37 ? (var_core_value_sig22B4 || var_core_value_sig8595.transformByState(var_core_value_sig84C8), var_core_value_sig80C0 !== undefined && var_core_value_sig8595.zIndex !== var_core_value_sig80C0 && (var_core_value_sig8595.zIndex = var_core_value_sig80C0), var_core_value_sig8595.updateElement(var_core_value_sigBB37), var_core_value_sig8595.setLocaleService(var_core_value_sigB706), var_core_value_sig8595.setTableThemePalette(var_core_value_sig5FD01), var_core_value_sig8595.setTableThemes(var_core_value_sig7784.getThemes(var_core_value_sigF8DE)), var_core_value_sig8595.setTable(var_core_value_sig7784.getTable(var_core_value_sigF8DE, var_core_value_sigBB37.tableId)), var_core_value_sig8595.makeDirty(true), true) : false;
    }
  };
}
let Q = class {
  constructor(var_core_value_sig0C51) {
    this._resourceService = var_core_value_sig0C51, G(this, "key", "board-table");
  }
  collect(var_core_value_sigADA4) {
    let var_core_value_sig0E48 = {},
      var_core_value_sig495B = {};
    return var_core_value_sigADA4.elements["forEach"](var_core_value_sig5F1A => {
      if (!on(var_core_value_sig5F1A)) return;
      let var_core_value_sigB455 = this._resourceService["getTable"](var_core_value_sigADA4.unitId, var_core_value_sig5F1A.tableId);
      if (!var_core_value_sigB455) return;
      var_core_value_sig0E48[var_core_value_sig5F1A.id] = s.Tools["deepClone"](var_core_value_sigB455);
      let var_core_value_sig5241 = var_core_value_sigB455.themeId ? this._resourceService["getTheme"](var_core_value_sigADA4.unitId, var_core_value_sigB455.themeId) : undefined;
      var_core_value_sig5241 && (var_core_value_sig495B[var_core_value_sig5241.id] = s.Tools["deepClone"](var_core_value_sig5241));
    }), Object.keys(var_core_value_sig0E48).length > 0 ? {
      tablesByElementId: var_core_value_sig0E48,
      themes: var_core_value_sig495B
    } : null;
  }
  serialize(var_core_value_sig310C) {
    let var_core_value_sig759E = var_core_value_sig310C.elements["filter"](on).map(var_core_value_sigC6E5 => this._resourceService["getTable"](var_core_value_sig310C.unitId, var_core_value_sigC6E5.tableId)).filter(var_core_value_sigCEFB => var_core_value_sigCEFB !== undefined);
    return var_core_value_sig759E.length > 0 ? {
      html: var_core_value_sig759E.map(pn).join("<br>"),
      plainText: var_core_value_sig759E.map(fn).join("\x0a")
    } : null;
  }
  parseExternalHtml(var_core_value_sig6C80) {
    let var_core_value_sig6B99 = cn(var_core_value_sig6C80.html);
    if (!var_core_value_sig6B99) return null;
    let var_core_value_sig6ADC = (0, s.generateRandomId)(6),
      var_core_value_sig41AD = ln(var_core_value_sig6B99),
      var_core_value_sigDBC2 = var_core_value_sig41AD.columns["reduce"]((var_core_value_sig1537, var_core_value_sigE4C6) => var_core_value_sig1537 + var_core_value_sigE4C6.width, 0),
      var_core_value_sig7739 = var_core_value_sig41AD.rows["reduce"]((var_core_value_sig4313, var_core_value_sigFC87) => var_core_value_sig4313 + (var_core_value_sigFC87.height ?? 28), 0);
    return {
      elements: [{
        id: var_core_value_sig6ADC,
        type: e.BoardElementType["Table"],
        tableId: var_core_value_sig41AD.id,
        transform: {
          left: Math.round(var_core_value_sig6C80.point["x"] - var_core_value_sigDBC2 / 2),
          top: Math.round(var_core_value_sig6C80.point["y"] - var_core_value_sig7739 / 2),
          width: var_core_value_sigDBC2,
          height: var_core_value_sig7739,
          rotation: 0
        }
      }],
      resources: {
        [this.key]: {
          tablesByElementId: {
            [var_core_value_sig6ADC]: var_core_value_sig41AD
          },
          themes: {}
        }
      }
    };
  }
  parseExternalPlainText(var_core_value_sig4040) {
    let var_core_value_sig1AAA = (0, v.convertPlainTextTableToHtml)(var_core_value_sig4040.text);
    return var_core_value_sig1AAA ? this.parseExternalHtml({
      ...var_core_value_sig4040,
      html: var_core_value_sig1AAA
    }) : null;
  }
  preparePaste(var_core_value_sig58DB) {
    if (!sn(var_core_value_sig58DB.payload)) return null;
    let var_core_value_sig4840 = var_core_value_sig58DB.payload,
      var_core_value_sigB76D = new Map();
    var_core_value_sig58DB.elementIdMap["forEach"]((var_core_value_sig156F, var_core_value_sigDD51) => var_core_value_sigB76D.set(var_core_value_sig156F, var_core_value_sigDD51));
    let var_core_value_sig1015 = [],
      var_core_value_sig6223 = var_core_value_sig58DB.elements["map"](var_core_value_sigF057 => {
        if (!on(var_core_value_sigF057)) return var_core_value_sigF057;
        let var_core_value_sig72F6 = var_core_value_sigB76D.get(var_core_value_sigF057.id),
          var_core_value_sig9FBA = var_core_value_sig72F6 ? var_core_value_sig4840.tablesByElementId[var_core_value_sig72F6] : undefined;
        if (!var_core_value_sig9FBA) return var_core_value_sigF057;
        let var_core_value_sigFE01 = (0, s.generateRandomId)(6),
          var_core_value_sigA2CE = var_core_value_sig9FBA.themeId ? var_core_value_sig4840.themes[var_core_value_sig9FBA.themeId] : undefined,
          var_core_value_sig1975 = var_core_value_sigA2CE ? {
            ...s.Tools["deepClone"](var_core_value_sigA2CE),
            id: (0, s.generateRandomId)(6)
          } : undefined,
          var_core_value_sig6EA1 = {
            ...s.Tools["deepClone"](var_core_value_sig9FBA),
            id: var_core_value_sigFE01,
            themeId: var_core_value_sig1975 == null ? undefined : var_core_value_sig1975.id
          };
        return var_core_value_sig1015.push({
          table: var_core_value_sig6EA1,
          theme: var_core_value_sig1975
        }), {
          ...var_core_value_sigF057,
          tableId: var_core_value_sigFE01
        };
      });
    return var_core_value_sig1015.length === 0 ? null : {
      elements: var_core_value_sig6223,
      redoMutations: var_core_value_sig1015.map(({
        table: var_core_value_sig029F,
        theme: var_core_value_sig3767
      }) => ({
        id: t.SetBoardTableMutation["id"],
        params: {
          unitId: var_core_value_sig58DB.targetUnitId,
          table: var_core_value_sig029F,
          theme: var_core_value_sig3767
        }
      })),
      undoMutations: [...var_core_value_sig1015].reverse().map(({
        table: var_core_value_sig670B
      }) => ({
        id: t.RemoveBoardTableMutation["id"],
        params: {
          unitId: var_core_value_sig58DB.targetUnitId,
          tableId: var_core_value_sig670B.id
        }
      }))
    };
  }
};
Q = L([I(0, (0, s.Inject)(i.SlideTableResourceService))], Q);
function on(var_core_value_sigB071) {
  return var_core_value_sigB071.type === e.BoardElementType["Table"];
}
function sn(var_core_value_sig15FE) {
  return !var_core_value_sig15FE || typeof var_core_value_sig15FE != "object" ? false : "tablesByElementId" in var_core_value_sig15FE && !!var_core_value_sig15FE.tablesByElementId && typeof var_core_value_sig15FE.tablesByElementId == "object" && "themes" in var_core_value_sig15FE && !!var_core_value_sig15FE.themes && typeof var_core_value_sig15FE.themes == "object";
}
function cn(var_core_value_sigCF47) {
  let var_core_value_sigB0F9 = new DOMParser().parseFromString(var_core_value_sigCF47, "text/html"),
    var_core_value_sigAF12 = var_core_value_sigB0F9.querySelectorAll("table");
  if (var_core_value_sigAF12.length !== 1 || (var_core_value_sigAF12[0].remove(), (var_core_value_sigB0F9.body["textContent"] ?? "").trim() || var_core_value_sigB0F9.body["querySelector"]("img"))) return null;
  let var_core_value_sigC60C = (0, v.parseHtmlTableClipboard)(var_core_value_sigCF47);
  return var_core_value_sigC60C.rows["length"] > 0 && var_core_value_sigC60C.columnWidths["length"] > 0 ? var_core_value_sigC60C : null;
}
function ln(var_core_value_sig1C3C) {
  let var_core_value_sig71CF = {
    id: (0, s.generateRandomId)(6),
    rev: 0,
    options: {},
    columns: var_core_value_sig1C3C.columnWidths["map"](var_core_value_sigC6B6 => ({
      width: _n(var_core_value_sigC6B6 ?? 100, 24, 320)
    })),
    rows: var_core_value_sig1C3C.rows["map"](var_core_value_sig498A => ({
      height: _n(var_core_value_sig498A.height ?? 28, 20, 180),
      cells: var_core_value_sig498A.cells["map"](var_core_value_sig6912 => un(var_core_value_sig6912))
    }))
  };
  return var_core_value_sig1C3C.rows["forEach"]((var_core_value_sigEF45, var_core_value_sig36FE) => {
    var_core_value_sigEF45.cells["forEach"]((var_core_value_sigE235, var_core_value_sig7664) => {
      if (var_core_value_sigE235) {
        for (let var_core_value_sig4D4C = 0; var_core_value_sig4D4C < var_core_value_sigE235.rowSpan; var_core_value_sig4D4C += 1) for (let var_core_value_sig3EEE = 0; var_core_value_sig3EEE < var_core_value_sigE235.colSpan; var_core_value_sig3EEE += 1) {
          var var_core_value_sig2281;
          if (var_core_value_sig4D4C === 0 && var_core_value_sig3EEE === 0) continue;
          let var_core_value_sig7524 = (var_core_value_sig2281 = var_core_value_sig71CF.rows[var_core_value_sig36FE + var_core_value_sig4D4C]) == null ? undefined : var_core_value_sig2281.cells[var_core_value_sig7664 + var_core_value_sig3EEE];
          var_core_value_sig7524 && (var_core_value_sig7524.hMerge = var_core_value_sig3EEE > 0, var_core_value_sig7524.vMerge = var_core_value_sig4D4C > 0);
        }
      }
    });
  }), var_core_value_sig71CF;
}
function un(var_core_value_sigC341) {
  if (!var_core_value_sigC341) return {};
  let var_core_value_sigBA47 = dn((0, y.removeClipboardHtmlImages)(var_core_value_sigC341.html)) ?? dn(gn(var_core_value_sigC341.text)),
    var_core_value_sig3DF7 = var_core_value_sigC341.borderColor || var_core_value_sigC341.borderWidth ? {
      color: var_core_value_sigC341.borderColor,
      width: var_core_value_sigC341.borderWidth,
      dash: i.SlideTableBorderDashEnum["Solid"]
    } : undefined;
  return {
    textData: var_core_value_sigBA47 ?? undefined,
    rowSpan: var_core_value_sigC341.rowSpan > 1 ? var_core_value_sigC341.rowSpan : undefined,
    columnSpan: var_core_value_sigC341.colSpan > 1 ? var_core_value_sigC341.colSpan : undefined,
    style: var_core_value_sigC341.backgroundColor || var_core_value_sig3DF7 ? {
      fill: var_core_value_sigC341.backgroundColor ? {
        type: i.SlideTableFillTypeEnum["Solid"],
        color: var_core_value_sigC341.backgroundColor
      } : undefined,
      borders: var_core_value_sig3DF7 ? {
        top: var_core_value_sig3DF7,
        right: var_core_value_sig3DF7,
        bottom: var_core_value_sig3DF7,
        left: var_core_value_sig3DF7
      } : undefined
    } : undefined
  };
}
function dn(var_core_value_sigD49F) {
  try {
    var var_core_value_sigCECC;
    let var_core_value_sig3AF5 = (0, y.convertClipboardHtmlToDocumentData)(var_core_value_sigD49F, (0, s.generateRandomId)(6));
    return (var_core_value_sigCECC = var_core_value_sig3AF5.body) != null && var_core_value_sigCECC.dataStream ? {
      ...var_core_value_sig3AF5,
      id: var_core_value_sig3AF5.id || (0, s.generateRandomId)(6),
      body: var_core_value_sig3AF5.body,
      documentStyle: var_core_value_sig3AF5.documentStyle ?? {}
    } : null;
  } catch {
    return null;
  }
}
function fn(var_core_value_sig0F47) {
  return var_core_value_sig0F47.rows["map"](var_core_value_sig14E6 => var_core_value_sig14E6.cells["map"](var_core_value_sig5E86 => var_core_value_sig5E86.hMerge || var_core_value_sig5E86.vMerge ? "" : var_core_value_sig5E86.textData ? mn(var_core_value_sig5E86.textData).replace(/[\t\r\n]+/g, "\x20") : "").join("\x09")).join("\x0a");
}
function pn(var_core_value_sig6B29) {
  return "<table><colgroup>" + var_core_value_sig6B29.columns["map"](var_core_value_sig8690 => '<col style="width: ' + var_core_value_sig8690.width + 'px">').join("") + "</colgroup><tbody>" + var_core_value_sig6B29.rows["map"](var_core_value_sigDF29 => {
    let var_core_value_sigC0F8 = var_core_value_sigDF29.cells["map"](var_core_value_sig6998 => {
      if (var_core_value_sig6998.hMerge || var_core_value_sig6998.vMerge) return "";
      let var_core_value_sigF639 = [var_core_value_sig6998.rowSpan && var_core_value_sig6998.rowSpan > 1 ? "rowspan=\x22" + var_core_value_sig6998.rowSpan + "\x22" : "", var_core_value_sig6998.columnSpan && var_core_value_sig6998.columnSpan > 1 ? 'colspan="' + var_core_value_sig6998.columnSpan + "\x22" : "", (0, a.serializeSlideTableCellStyleAttribute)(var_core_value_sig6998)].filter(Boolean).join("\x20"),
        var_core_value_sigEAE5 = var_core_value_sig6998.textData ? hn(var_core_value_sig6998.textData) : "";
      return "<td" + (var_core_value_sigF639 ? "\x20" + var_core_value_sigF639 : "") + ">" + var_core_value_sigEAE5 + "</td>";
    }).join("");
    return "<tr" + (var_core_value_sigDF29.height ? ' style="height: ' + var_core_value_sigDF29.height + "px\x22" : "") + ">" + var_core_value_sigC0F8 + "</tr>";
  }).join("") + "</tbody></table>";
}
function mn(var_core_value_sig28E2) {
  var var_core_value_sig1578;
  return (((var_core_value_sig1578 = var_core_value_sig28E2.body) == null ? undefined : var_core_value_sig1578.dataStream) ?? "").replace(/\r\n$/, "").replace(/\r/g, "\x0a");
}
function hn(var_core_value_sig52ED) {
  try {
    return (0, y.convertBodyToHtml)(s.Tools["deepClone"](var_core_value_sig52ED));
  } catch {
    return "";
  }
}
function gn(var_core_value_sig135F) {
  return var_core_value_sig135F.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function _n(var_core_value_sig416D, var_core_value_sigAD5D, var_core_value_sig1B8A) {
  return Math.min(var_core_value_sig1B8A, Math.max(var_core_value_sigAD5D, var_core_value_sig416D));
}
var vn;
const yn = [ke];
let $ = vn = class extends s.Plugin {
  constructor(var_core_value_sig3C75 = Le, var_core_value_sig992D, var_core_value_sigE4E4, var_core_value_sigA4B0, var_core_value_sig5F50, var_core_value_sig4494, var_core_value_sigFFAF, var_core_value_sig478B, var_core_value_sig1E21) {
    super(), this._config = var_core_value_sig3C75, this._injector = var_core_value_sig992D, this._configService = var_core_value_sigE4E4, this._renderManagerService = var_core_value_sigA4B0, this._localeService = var_core_value_sig5F50, this._themeService = var_core_value_sig4494, this._commandService = var_core_value_sigFFAF, this._menuManagerService = var_core_value_sig478B, this._shortcutService = var_core_value_sig1E21, G(this, "_adapter", null);
    let {
      ...var_core_value_sig9DBF
    } = (0, s.merge)({}, Le, this._config);
    this._configService["setConfig"]("boards-table-ui.config", var_core_value_sig9DBF);
  }
  onStarting() {
    n.UniverBoardsUIPlugin["registerRuntimeScopedDependencies"](this._injector, vn.scopedDependencies), this._injector["has"](a.SlideTableSelectionService) || this._injector["add"]([a.SlideTableSelectionService]), this._injector["add"]([R]), this._injector["add"]([yt]), this._injector["add"]([Q]), this._injector["add"]([zt]), this._injector["has"](o.IEditorUIService) || this._injector["add"]([o.IEditorUIService, {
      useClass: o.EditorUIService
    }]), (0, s.touchDependencies)(this._injector, [[a.SlideTableSelectionService]]), (0, s.touchDependencies)(this._injector, [[R]]), (0, s.touchDependencies)(this._injector, [[yt]]), (0, s.touchDependencies)(this._injector, [[Q]]), (0, s.touchDependencies)(this._injector, [[o.IEditorUIService]]), this.disposeWithMe(this._injector["get"](zt)), this.disposeWithMe(this._injector["get"](n.IBoardClipboardResourceAdapterService).registerAdapter(this._injector["get"](Q)));
    let var_core_value_sig36CC = an(this._injector["get"](i.SlideTableResourceService), this._localeService, (0, i.resolveSlideTableThemePalette)(var_core_value_sigE94C => this._themeService["getColorFromTheme"](var_core_value_sigE94C)), this._themeService);
    this._adapter = var_core_value_sig36CC, this._appendRenderAdapter(var_core_value_sig36CC), [...ve, ...Me].forEach(var_core_value_sig6D47 => {
      this.disposeWithMe(this._commandService["registerCommand"](var_core_value_sig6D47));
    }), Pe.forEach(var_core_value_sigCB82 => {
      this.disposeWithMe(this._shortcutService["registerShortcut"](var_core_value_sigCB82));
    }), this.disposeWithMe((0, s.toDisposable)(() => {
      this._removeRenderAdapter(var_core_value_sig36CC), this._adapter = null;
    }));
  }
  onReady() {
    this._menuManagerService["mergeMenu"](nn), this.disposeWithMe(this._renderManagerService["registerRenderModule"](s.UniverInstanceType["UNIVER_BOARD"], yn)), this.disposeWithMe(this._renderManagerService["registerRenderModule"](s.UniverInstanceType["UNIVER_BOARD"], _t)), this.disposeWithMe(this._renderManagerService["registerRenderModule"](s.UniverInstanceType["UNIVER_BOARD"], wt)), this.disposeWithMe(this._renderManagerService["registerRenderModule"](s.UniverInstanceType["UNIVER_BOARD"], pt));
  }
  _appendRenderAdapter(var_core_value_sigA568) {
    var var_core_value_sigD22D, var_core_value_sig85D5;
    let var_core_value_sig5D2E = this._getBoardsUIConfig(),
      var_core_value_sig7221 = var_core_value_sig5D2E.additionalRenderAdapters ?? [];
    var_core_value_sig7221.includes(var_core_value_sigA568) || this._configService["setConfig"](n.BOARDS_UI_PLUGIN_CONFIG_KEY, {
      ...var_core_value_sig5D2E,
      additionalRenderAdapters: [...var_core_value_sig7221, var_core_value_sigA568],
      toolbar: {
        ...var_core_value_sig5D2E.toolbar,
        tools: {
          ...((var_core_value_sigD22D = var_core_value_sig5D2E.toolbar) == null ? undefined : var_core_value_sigD22D.tools),
          [e.BoardToolType["Table"]]: bn((var_core_value_sig85D5 = var_core_value_sig5D2E.toolbar) == null || (var_core_value_sig85D5 = var_core_value_sig85D5.tools) == null ? undefined : var_core_value_sig85D5[e.BoardToolType["Table"]])
        }
      }
    });
  }
  _removeRenderAdapter(var_core_value_sig0A5A) {
    var var_core_value_sigE6D6;
    let var_core_value_sig8507 = this._getBoardsUIConfig(),
      var_core_value_sig8A7F = (var_core_value_sigE6D6 = var_core_value_sig8507.additionalRenderAdapters) == null ? undefined : var_core_value_sigE6D6.filter(var_core_value_sigCF4E => var_core_value_sigCF4E !== var_core_value_sig0A5A);
    this._configService["setConfig"](n.BOARDS_UI_PLUGIN_CONFIG_KEY, {
      ...var_core_value_sig8507,
      additionalRenderAdapters: var_core_value_sig8A7F
    });
  }
  _getBoardsUIConfig() {
    return this._configService["getConfig"](n.BOARDS_UI_PLUGIN_CONFIG_KEY) ?? {};
  }
};
G($, "pluginName", "UNIVER_BOARDS_TABLE_UI_PLUGIN"), G($, "packageName", b), G($, "version", x), G($, "type", s.UniverInstanceType["UNIVER_BOARD"]), G($, "scopedDependencies", [[a.SlideTableSelectionService], [R], [yt], [o.IEditorUIService, {
  useClass: o.EditorUIService
}]]), $ = vn = L([(0, s.DependentOn)(r.UniverLicensePlugin, c.UniverRenderEnginePlugin, i.UniverSlidesTablePlugin, e.UniverBoardsPlugin, t.UniverBoardsTablePlugin, o.UniverSlidesUIPlugin, n.UniverBoardsUIPlugin, a.UniverSlidesTableUIPlugin), I(1, (0, s.Inject)(s.Injector)), I(2, s.IConfigService), I(3, c.IRenderManagerService), I(4, (0, s.Inject)(s.LocaleService)), I(5, (0, s.Inject)(s.ThemeService)), I(6, s.ICommandService), I(7, l.IMenuManagerService), I(8, l.IShortcutService)], $);
function bn(var_core_value_sigFB18) {
  return var_core_value_sigFB18 === false ? false : typeof var_core_value_sigFB18 != "object" || {
    ...var_core_value_sigFB18,
    enabled: var_core_value_sigFB18.enabled ?? true
  };
}
Object.defineProperty(exports, "UniverBoardsTableUIPlugin", {
  enumerable: true,
  get: function () {
    return $;
  }
});
