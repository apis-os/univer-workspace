Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
let e = require("@univerjs-pro/collaboration-client"),
  t = require("@univerjs-pro/docs-history"),
  n = require("@univerjs-pro/license"),
  r = require("@univerjs/core"),
  i = require("@univerjs/docs-ui"),
  a = require("@univerjs/icons"),
  o = require("@univerjs/ui"),
  s = require("@univerjs-pro/collaboration"),
  c = require("@univerjs-pro/docs-callout"),
  l = require("@univerjs-pro/docs-callout-ui"),
  u = require("@univerjs-pro/docs-chart"),
  d = require("@univerjs-pro/docs-chart-ui"),
  f = require("@univerjs-pro/docs-code"),
  ee = require("@univerjs-pro/docs-code-ui"),
  p = require("@univerjs-pro/docs-column"),
  te = require("@univerjs-pro/docs-column-ui"),
  m = require("@univerjs-pro/docs-formula"),
  h = require("@univerjs-pro/docs-formula-ui"),
  g = require("@univerjs-pro/docs-latex"),
  ne = require("@univerjs-pro/docs-latex-ui"),
  _ = require("@univerjs-pro/docs-list"),
  v = require("@univerjs-pro/docs-list-ui"),
  y = require("@univerjs-pro/docs-quote"),
  b = require("@univerjs-pro/docs-quote-ui"),
  x = require("@univerjs-pro/docs-shape"),
  re = require("@univerjs-pro/docs-shape-ui"),
  S = require("@univerjs-pro/docs-table"),
  ie = require("@univerjs-pro/docs-table-ui"),
  C = require("@univerjs-pro/edit-history"),
  ae = require("@univerjs-pro/engine-formula"),
  oe = require("@univerjs-pro/shape-editor-ui"),
  w = require("@univerjs/docs"),
  T = require("@univerjs/docs-drawing"),
  E = require("@univerjs/docs-drawing-ui"),
  D = require("@univerjs/docs-hyper-link"),
  se = require("@univerjs/docs-hyper-link-ui"),
  ce = require("@univerjs/drawing"),
  le = require("@univerjs/drawing-ui"),
  O = require("@univerjs/engine-render"),
  ue = require("@univerjs/network"),
  k = require("rxjs"),
  A = require("@univerjs-pro/edit-history-ui");
const j = "docs-history-ui.config",
  M = {
    historyServerUrl: "/universer-api/history"
  };
var N = "@univerjs-pro/docs-history-ui",
  P = "1.0.0-insiders.20260907-70fc579";
function F(var_core_value_sigB512, var_core_value_sigF2E6) {
  return function (var_core_value_sig1A0F, var_core_value_sigFBA4) {
    var_core_value_sigF2E6(var_core_value_sig1A0F, var_core_value_sigFBA4, var_core_value_sigB512);
  };
}
function I(var_core_value_sig34C8, var_core_value_sigB744, var_core_value_sigEAE2, var_core_value_sigE68A) {
  var var_core_value_sig3E68 = arguments.length,
    var_core_value_sigF4C5 = var_core_value_sig3E68 < 3 ? var_core_value_sigB744 : var_core_value_sigE68A === null ? var_core_value_sigE68A = Object.getOwnPropertyDescriptor(var_core_value_sigB744, var_core_value_sigEAE2) : var_core_value_sigE68A,
    var_core_value_sig5410;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sigF4C5 = Reflect.decorate(var_core_value_sig34C8, var_core_value_sigB744, var_core_value_sigEAE2, var_core_value_sigE68A);else {
    for (var var_core_value_sig492F = var_core_value_sig34C8.length - 1; var_core_value_sig492F >= 0; var_core_value_sig492F--) (var_core_value_sig5410 = var_core_value_sig34C8[var_core_value_sig492F]) && (var_core_value_sigF4C5 = (var_core_value_sig3E68 < 3 ? var_core_value_sig5410(var_core_value_sigF4C5) : var_core_value_sig3E68 > 3 ? var_core_value_sig5410(var_core_value_sigB744, var_core_value_sigEAE2, var_core_value_sigF4C5) : var_core_value_sig5410(var_core_value_sigB744, var_core_value_sigEAE2)) || var_core_value_sigF4C5);
  }
  return var_core_value_sig3E68 > 3 && var_core_value_sigF4C5 && Object.defineProperty(var_core_value_sigB744, var_core_value_sigEAE2, var_core_value_sigF4C5), var_core_value_sigF4C5;
}
let L = class extends r.Disposable {
  constructor(var_core_value_sig4383) {
    super(), this.disposeWithMe(var_core_value_sig4383.register("DocsHistoryIcon", a.HistoryIcon));
  }
};
L = I([F(0, (0, r.Inject)(o.IconManager))], L);
const R = {
    [w.DocHistoryAction["DeleteChart"]]: "docs-history-ui.action.deleteChart",
    [w.DocHistoryAction["DeleteDivider"]]: "docs-history-ui.action.deleteDivider",
    [w.DocHistoryAction["DeleteImage"]]: "docs-history-ui.action.deleteImage",
    [w.DocHistoryAction["DeleteShape"]]: "docs-history-ui.action.deleteShape",
    [w.DocHistoryAction["EditTableCell"]]: "docs-history-ui.action.editTableCell",
    [w.DocHistoryAction["FormatParagraph"]]: "docs-history-ui.action.formatParagraph",
    [w.DocHistoryAction["InsertCustomRange"]]: "docs-history-ui.action.insertCustomRange",
    [w.DocHistoryAction["UpdateImage"]]: "docs-history-ui.action.updateImage",
    [w.DocHistoryAction["UpdatePageLayout"]]: "docs-history-ui.action.updatePageLayout"
  },
  z = new Map([[w.SetDocumentNameCommand["id"], "docs-history-ui.action.renameDocument"], [w.InsertTextCommand["id"], "docs-history-ui.action.insertText"], [i.IMEInputCommand["id"], "docs-history-ui.action.insertText"], [i.BreakLineCommand["id"], "docs-history-ui.action.insertText"], [i.InnerPasteCommand["id"], "docs-history-ui.action.insertText"], [i.ReplaceSelectionCommand["id"], "docs-history-ui.action.insertText"], [w.DeleteTextCommand["id"], "docs-history-ui.action.deleteText"], [i.CutContentCommand["id"], "docs-history-ui.action.deleteText"], [i.DeleteLeftCommand["id"], "docs-history-ui.action.deleteText"], [i.DeleteRightCommand["id"], "docs-history-ui.action.deleteText"], [i.DeleteCurrentParagraphCommand["id"], "docs-history-ui.action.deleteText"], [i.MergeTwoParagraphCommand["id"], "docs-history-ui.action.deleteText"], [i.DeleteCustomBlockCommand["id"], "docs-history-ui.action.deleteBlock"], [w.UpdateTextCommand["id"], "docs-history-ui.action.formatText"], [i.SetInlineFormatCommand["id"], "docs-history-ui.action.formatText"], [i.ReplaceTextRunsCommand["id"], "docs-history-ui.action.formatText"], [w.UpdateDocumentParagraphStyleCommand["id"], "docs-history-ui.action.formatParagraph"], [w.SetDocumentDefaultParagraphStyleCommand["id"], "docs-history-ui.action.formatParagraph"], [i.AlignOperationCommand["id"], "docs-history-ui.action.formatParagraph"], [i.AfterSpaceCommand["id"], "docs-history-ui.action.formatParagraph"], [i.EnterCommand["id"], "docs-history-ui.action.formatParagraph"], [i.TabCommand["id"], "docs-history-ui.action.formatParagraph"], [i.SetParagraphNamedStyleCommand["id"], "docs-history-ui.action.changeHeading"], [i.ListOperationCommand["id"], "docs-history-ui.action.updateList"], [i.ChangeListTypeCommand["id"], "docs-history-ui.action.updateList"], [i.ChangeListNestingLevelCommand["id"], "docs-history-ui.action.updateList"], [i.ToggleCheckListCommand["id"], "docs-history-ui.action.updateList"], [_.DocsListInsertCommand["id"], "docs-history-ui.action.updateList"], [_.DocsListSetGlyphTypeCommand["id"], "docs-history-ui.action.updateList"], [_.DocsListSetGlyphSymbolCommand["id"], "docs-history-ui.action.updateList"], [_.DocsListSetPrefixSuffixCommand["id"], "docs-history-ui.action.updateList"], [_.DocsListSetStartNumberCommand["id"], "docs-history-ui.action.updateList"], [_.DocsListPromoteCommand["id"], "docs-history-ui.action.updateList"], [_.DocsListDemoteCommand["id"], "docs-history-ui.action.updateList"], [i.MoveDocBlockCommand["id"], "docs-history-ui.action.moveBlock"], [i.HorizontalLineCommand["id"], "docs-history-ui.action.insertDivider"], [w.UpdateDocumentSectionCommand["id"], "docs-history-ui.action.updatePageLayout"], [w.InsertDocumentSectionBreakCommand["id"], "docs-history-ui.action.updatePageLayout"], [w.DeleteDocumentSectionBreakCommand["id"], "docs-history-ui.action.updatePageLayout"], [w.InsertDocumentColumnBreakCommand["id"], "docs-history-ui.action.updatePageLayout"], [w.CreateHeaderFooterCommand["id"], "docs-history-ui.action.updateHeaderFooter"], [w.SetSectionHeaderFooterLinkCommand["id"], "docs-history-ui.action.updateHeaderFooter"], [D.DocHyperLinkCommandId["Add"], "docs-history-ui.action.insertLink"], [D.DocHyperLinkCommandId["Update"], "docs-history-ui.action.updateLink"], [D.DocHyperLinkCommandId["Delete"], "docs-history-ui.action.deleteLink"], [S.DocsTableInsertTableCommand["id"], "docs-history-ui.action.insertTable"], [i.CreateDocTableCommand["id"], "docs-history-ui.action.insertTable"], [S.DocsTableDeleteTableCommand["id"], "docs-history-ui.action.deleteTable"], [i.DocTableDeleteTableCommand["id"], "docs-history-ui.action.deleteTable"], [S.DocsTableInsertRowsCommand["id"], "docs-history-ui.action.insertTableRows"], [S.DocsTableDeleteRowsCommand["id"], "docs-history-ui.action.deleteTableRows"], [S.DocsTableMoveRowsCommand["id"], "docs-history-ui.action.moveTableRows"], [S.DocsTableInsertColumnsCommand["id"], "docs-history-ui.action.insertTableColumns"], [S.DocsTableDeleteColumnsCommand["id"], "docs-history-ui.action.deleteTableColumns"], [S.DocsTableMoveColumnsCommand["id"], "docs-history-ui.action.moveTableColumns"], [S.DocsTableMoveTableCommand["id"], "docs-history-ui.action.moveTable"], [S.DocsTableResizeColumnCommand["id"], "docs-history-ui.action.resizeTableColumns"], [S.DocsTableResizeRowCommand["id"], "docs-history-ui.action.resizeTableRows"], [S.DocsTableDistributeColumnsCommand["id"], "docs-history-ui.action.distributeTableColumns"], [S.DocsTableDistributeRowsCommand["id"], "docs-history-ui.action.distributeTableRows"], [S.DocsTableInsertTitleRowCommand["id"], "docs-history-ui.action.updateTableHeader"], [S.DocsTableSetColumnTypeCommand["id"], "docs-history-ui.action.updateTableColumns"], [S.DocsTableSetHeaderRowCountCommand["id"], "docs-history-ui.action.updateTableHeader"], [S.DocsTableSetTableBackgroundCommand["id"], "docs-history-ui.action.formatTable"], [S.DocsTableSetTableBorderColorCommand["id"], "docs-history-ui.action.formatTable"], [S.DocsTableSetTableBorderCommand["id"], "docs-history-ui.action.formatTable"], [S.DocsTableSetTableBorderStyleCommand["id"], "docs-history-ui.action.formatTable"], [S.DocsTableSetTableBorderWidthCommand["id"], "docs-history-ui.action.formatTable"], [S.DocsTableSetTableVerticalAlignCommand["id"], "docs-history-ui.action.formatTable"], [S.DocsTableMergeCellsCommand["id"], "docs-history-ui.action.mergeTableCells"], [S.DocsTableUnmergeCellsCommand["id"], "docs-history-ui.action.unmergeTableCells"], [S.DocsTableSortTableCommand["id"], "docs-history-ui.action.sortTable"], [i.DocTableDeleteColumnsCommand["id"], "docs-history-ui.action.deleteTableColumns"], [i.DocTableDeleteRowsCommand["id"], "docs-history-ui.action.deleteTableRows"], [i.DocTableInsertColumnCommand["id"], "docs-history-ui.action.insertTableColumns"], [i.DocTableInsertRowCommand["id"], "docs-history-ui.action.insertTableRows"], [i.DocTableTabCommand["id"], "docs-history-ui.action.editTableCell"], [T.InsertDocDrawingCommand["id"], "docs-history-ui.action.insertImage"], [T.RemoveDocDrawingCommand["id"], "docs-history-ui.action.deleteImage"], [T.UpdateDrawingDocTransformCommand["id"], "docs-history-ui.action.updateDrawing"], [T.UpdateDocDrawingWrappingStyleCommand["id"], "docs-history-ui.action.updateDrawing"], [T.SetDocDrawingArrangeCommand["id"], "docs-history-ui.action.updateDrawing"], [x.InsertDocShapeCommand["id"], "docs-history-ui.action.insertShape"], [x.UpdateDocShapeDataCommand["id"], "docs-history-ui.action.updateShape"], [x.UpdateDocDrawingMetadataCommand["id"], "docs-history-ui.action.updateShape"], [u.InsertDocChartCommand["id"], "docs-history-ui.action.insertChart"], [u.RemoveDocChartCommand["id"], "docs-history-ui.action.deleteChart"], [u.RemoveDocChartSnapshotMutation["id"], "docs-history-ui.action.deleteChart"], [u.UpdateDocChartConfigCommand["id"], "docs-history-ui.action.updateChart"], [u.UpdateDocChartDataSourceCommand["id"], "docs-history-ui.action.updateChart"], [u.UpdateDocChartDrawingCommand["id"], "docs-history-ui.action.updateChart"], [u.UpdateDocChartSnapshotCommand["id"], "docs-history-ui.action.updateChart"], [u.ChangeDocChartDataSourceCommand["id"], "docs-history-ui.action.updateChart"], [u.DuplicateDocChartDataSourceCommand["id"], "docs-history-ui.action.updateChart"], [c.DocsCalloutInsertCommand["id"], "docs-history-ui.action.insertCallout"], [c.DocsCalloutInsertBelowCommand["id"], "docs-history-ui.action.insertCallout"], [c.DocsCalloutDeleteCommand["id"], "docs-history-ui.action.deleteCallout"], [c.DocsCalloutUnwrapCommand["id"], "docs-history-ui.action.deleteCallout"], [c.DocsCalloutCancelEmptyParagraphCommand["id"], "docs-history-ui.action.deleteCallout"], [c.DocsCalloutConsumeBoundaryDeleteCommand["id"], "docs-history-ui.action.updateCallout"], [c.DocsCalloutResetColorsCommand["id"], "docs-history-ui.action.updateCallout"], [c.DocsCalloutSetTextColorCommand["id"], "docs-history-ui.action.updateCallout"], [c.DocsCalloutUpdateCommand["id"], "docs-history-ui.action.updateCallout"], [f.DocsCodeInsertCommand["id"], "docs-history-ui.action.insertCodeBlock"], [f.DocsCodeRemoveCommand["id"], "docs-history-ui.action.deleteCodeBlock"], [f.DocsCodeUnwrapCommand["id"], "docs-history-ui.action.deleteCodeBlock"], [f.DocsCodeCancelEmptyParagraphCommand["id"], "docs-history-ui.action.deleteCodeBlock"], [f.DocsCodeConsumeBoundaryDeleteCommand["id"], "docs-history-ui.action.updateCodeBlock"], [f.DocsCodeUpdateCommand["id"], "docs-history-ui.action.updateCodeBlock"], [y.DocsQuoteInsertCommand["id"], "docs-history-ui.action.insertQuote"], [y.DocsQuoteInsertBelowCommand["id"], "docs-history-ui.action.insertQuote"], [y.DocsQuoteRemoveCommand["id"], "docs-history-ui.action.deleteQuote"], [y.DocsQuoteUnwrapCommand["id"], "docs-history-ui.action.deleteQuote"], [y.DocsQuoteCancelEmptyParagraphCommand["id"], "docs-history-ui.action.deleteQuote"], [y.DocsQuoteExitCommand["id"], "docs-history-ui.action.updateQuote"], [y.DocsQuoteUpdateStyleCommand["id"], "docs-history-ui.action.updateQuote"], [p.InsertDocColumnGroupCommand["id"], "docs-history-ui.action.insertColumns"], [p.AddDocColumnCommand["id"], "docs-history-ui.action.updateColumns"], [p.DeleteDocColumnCommand["id"], "docs-history-ui.action.updateColumns"], [p.DeleteDocColumnGroupCommand["id"], "docs-history-ui.action.updateColumns"], [p.NormalizeDocColumnGroupCommand["id"], "docs-history-ui.action.updateColumns"], [p.ResizeDocColumnGroupCommand["id"], "docs-history-ui.action.updateColumns"], [m.InsertDocFormulaCommand["id"], "docs-history-ui.action.insertFormula"], [m.UpdateDocFormulaCommand["id"], "docs-history-ui.action.updateFormula"], [m.SetDocFormulaNumberFormatCommand["id"], "docs-history-ui.action.updateFormula"], [m.RemoveDocFormulaCommand["id"], "docs-history-ui.action.deleteFormula"], [m.ConvertDocFormulaToTextCommand["id"], "docs-history-ui.action.deleteFormula"], [m.ReplaceDocFormulaWithTextCommand["id"], "docs-history-ui.action.deleteFormula"], [g.InsertDocsLatexFormulaCommand["id"], "docs-history-ui.action.insertFormula"], [g.UpdateDocsLatexFormulaCommand["id"], "docs-history-ui.action.updateFormula"], [g.RemoveDocsLatexFormulaCommand["id"], "docs-history-ui.action.deleteFormula"], [g.ReplaceDocsLatexFormulaWithTextCommand["id"], "docs-history-ui.action.deleteFormula"], [i.CoverContentCommand["id"], "docs-history-ui.action.editDocument"], [i.ReplaceSnapshotCommand["id"], "docs-history-ui.action.editDocument"]]),
  B = new Set([T.SetDocDrawingArrangeCommand["id"], T.UpdateDocDrawingWrappingStyleCommand["id"], T.UpdateDrawingDocTransformCommand["id"]]),
  V = new Set([u.UpdateDocChartConfigCommand["id"], u.UpdateDocChartDataSourceCommand["id"], u.UpdateDocChartDrawingCommand["id"], u.UpdateDocChartSnapshotCommand["id"], x.UpdateDocDrawingMetadataCommand["id"], x.UpdateDocShapeDataCommand["id"]]);
let H = class extends r.Disposable {
  constructor(var_core_value_sig186C, var_core_value_sigD955) {
    super(), this._localeService = var_core_value_sigD955, this.disposeWithMe(var_core_value_sig186C.register(r.UniverInstanceType["UNIVER_DOC"], this));
  }
  resolve(var_core_value_sig48BD) {
    let var_core_value_sig429F = de(var_core_value_sig48BD),
      var_core_value_sigF62A = var_core_value_sig429F.has(w.DocHistoryAction["InsertCustomRange"]),
      var_core_value_sig8178 = var_core_value_sig429F.has(w.DocHistoryAction["UpdateImage"]),
      var_core_value_sigE9ED = var_core_value_sig429F.has(w.DocHistoryAction["DeleteChart"]) || var_core_value_sig429F.has(w.DocHistoryAction["DeleteImage"]) || var_core_value_sig429F.has(w.DocHistoryAction["DeleteShape"]),
      var_core_value_sigB577 = fe(var_core_value_sig48BD),
      var_core_value_sig9572 = var_core_value_sig48BD.commandIds["has"](x.InsertDocShapeCommand["id"]) || var_core_value_sig48BD.commandIds["has"](u.InsertDocChartCommand["id"]),
      var_core_value_sigD873 = [...V].some(var_core_value_sig7524 => var_core_value_sig48BD.commandIds["has"](var_core_value_sig7524)),
      var_core_value_sigA12B = var_core_value_sigB577.map(var_core_value_sig2AD8 => this._localeService["t"](var_core_value_sig2AD8));
    var_core_value_sigA12B.push(...[...var_core_value_sig429F].map(var_core_value_sig2AD0 => this._localeService["t"](R[var_core_value_sig2AD0])));
    let var_core_value_sigF230 = [...var_core_value_sig48BD.commandIds].flatMap(var_core_value_sig3EEE => {
        if (var_core_value_sigF62A && var_core_value_sig3EEE === i.ReplaceSelectionCommand["id"] || var_core_value_sig9572 && var_core_value_sig3EEE === T.InsertDocDrawingCommand["id"] || (var_core_value_sigE9ED || var_core_value_sigB577.length > 0) && var_core_value_sig3EEE === T.RemoveDocDrawingCommand["id"] || (var_core_value_sigD873 || var_core_value_sig8178) && B.has(var_core_value_sig3EEE)) return [];
        let var_core_value_sigBC46 = z.get(var_core_value_sig3EEE);
        return var_core_value_sigBC46 ? [this._localeService["t"](var_core_value_sigBC46)] : [];
      }),
      var_core_value_sig09B8 = [...new Set([...var_core_value_sigA12B, ...var_core_value_sigF230])];
    return var_core_value_sig09B8.length > 0 ? var_core_value_sig09B8 : var_core_value_sig48BD.commandIds["has"](w.RichTextEditingMutation["id"]) ? [this._localeService["t"]("docs-history-ui.action.editDocument")] : [];
  }
};
H = I([F(0, (0, r.Inject)(A.HistoryActionSummaryService)), F(1, (0, r.Inject)(r.LocaleService))], H);
function de(var_core_value_sig8EA0) {
  let var_core_value_sigA6F6 = new Set();
  return var_core_value_sig8EA0.mutations["forEach"](var_core_value_sig6F91 => {
    if (!W(var_core_value_sig6F91.params)) return;
    let {
      historyAction: var_core_value_sigF9C7
    } = var_core_value_sig6F91.params;
    U(var_core_value_sigF9C7) && var_core_value_sigA6F6.add(var_core_value_sigF9C7);
    let {
      historyActions: var_core_value_sig8895
    } = var_core_value_sig6F91.params;
    Array.isArray(var_core_value_sig8895) && var_core_value_sig8895.forEach(var_core_value_sig3D7D => {
      U(var_core_value_sig3D7D) && var_core_value_sigA6F6.add(var_core_value_sig3D7D);
    });
  }), var_core_value_sigA6F6;
}
function U(var_core_value_sigCDDA) {
  return var_core_value_sigCDDA === w.DocHistoryAction["DeleteChart"] || var_core_value_sigCDDA === w.DocHistoryAction["DeleteDivider"] || var_core_value_sigCDDA === w.DocHistoryAction["DeleteImage"] || var_core_value_sigCDDA === w.DocHistoryAction["DeleteShape"] || var_core_value_sigCDDA === w.DocHistoryAction["EditTableCell"] || var_core_value_sigCDDA === w.DocHistoryAction["FormatParagraph"] || var_core_value_sigCDDA === w.DocHistoryAction["InsertCustomRange"] || var_core_value_sigCDDA === w.DocHistoryAction["UpdateImage"] || var_core_value_sigCDDA === w.DocHistoryAction["UpdatePageLayout"];
}
function fe(var_core_value_sigE243) {
  if (!var_core_value_sigE243.commandIds["has"](T.RemoveDocDrawingCommand["id"])) return [];
  let var_core_value_sig74A8 = var_core_value_sigE243.mutations["flatMap"](var_core_value_sigC80B => W(var_core_value_sigC80B.params) ? typeof var_core_value_sigC80B.params["chartId"] == "string" ? ["docs-history-ui.action.deleteChart"] : typeof var_core_value_sigC80B.params["shapeId"] == "string" ? ["docs-history-ui.action.deleteShape"] : typeof var_core_value_sigC80B.params["drawingId"] == "string" ? ["docs-history-ui.action.deleteImage"] : [] : []);
  return [...new Set(var_core_value_sig74A8)];
}
function W(var_core_value_sig21B2) {
  return typeof var_core_value_sig21B2 == "object" && !!var_core_value_sig21B2;
}
function G(var_core_value_sigDE08) {
  "@babel/helpers - typeof";

  return G = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sig284F) {
    return typeof var_core_value_sig284F;
  } : function (var_core_value_sigE154) {
    return var_core_value_sigE154 && typeof Symbol == "function" && var_core_value_sigE154.constructor === Symbol && var_core_value_sigE154 !== Symbol.prototype ? "symbol" : typeof var_core_value_sigE154;
  }, G(var_core_value_sigDE08);
}
function pe(var_core_value_sigACCB, var_core_value_sig7F33) {
  if (G(var_core_value_sigACCB) != "object" || !var_core_value_sigACCB) return var_core_value_sigACCB;
  var var_core_value_sig0C53 = var_core_value_sigACCB[Symbol.toPrimitive];
  if (var_core_value_sig0C53 !== undefined) {
    var var_core_value_sigEA04 = var_core_value_sig0C53.call(var_core_value_sigACCB, var_core_value_sig7F33 || "default");
    if (G(var_core_value_sigEA04) != "object") return var_core_value_sigEA04;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sig7F33 === "string" ? String : Number)(var_core_value_sigACCB);
}
function K(var_core_value_sig7A62) {
  var var_core_value_sig8109 = pe(var_core_value_sig7A62, "string");
  return G(var_core_value_sig8109) == "symbol" ? var_core_value_sig8109 : var_core_value_sig8109 + "";
}
function q(var_core_value_sig7565, var_core_value_sigD4FB, var_core_value_sig3E71) {
  return (var_core_value_sigD4FB = K(var_core_value_sigD4FB)) in var_core_value_sig7565 ? Object.defineProperty(var_core_value_sig7565, var_core_value_sigD4FB, {
    value: var_core_value_sig3E71,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sig7565[var_core_value_sigD4FB] = var_core_value_sig3E71, var_core_value_sig7565;
}
let J = class extends r.Disposable {
  constructor(var_core_value_sig4632, var_core_value_sig12F2, var_core_value_sig2259, var_core_value_sig9E2F, var_core_value_sigD082, var_core_value_sigDBB7) {
    super(), this._diffService = var_core_value_sig4632, this._snapshotService = var_core_value_sig2259, this._resourceLoaderService = var_core_value_sig9E2F, this._univerInstanceService = var_core_value_sigD082, this._highlightService = var_core_value_sigDBB7, q(this, "type", r.UniverInstanceType["UNIVER_DOC"]), q(this, "_changesGeneration", 0), q(this, "_loadGeneration", 0), q(this, "_loadQueue", Promise.resolve()), this.disposeWithMe(var_core_value_sig12F2.register(this));
  }
  loadRevision(var_core_value_sigD0A8, var_core_value_sigF4B9) {
    let var_core_value_sig5CEE = ++this._loadGeneration,
      var_core_value_sigE92A = this._loadQueue["catch"](() => undefined).then(async () => {
        if (var_core_value_sig5CEE !== this._loadGeneration) return;
        this._getDocument(var_core_value_sigD0A8) && this._univerInstanceService["disposeUnit"](var_core_value_sigD0A8);
        let var_core_value_sig27E5 = await this._snapshotService["loadDoc"](var_core_value_sigD0A8, var_core_value_sigF4B9.endRevision);
        if (var_core_value_sig27E5.setDisabled(true), var_core_value_sig5CEE !== this._loadGeneration) {
          this._getDocument(var_core_value_sigD0A8) === var_core_value_sig27E5 && this._univerInstanceService["disposeUnit"](var_core_value_sigD0A8);
          return;
        }
        this._univerInstanceService["focusUnit"](var_core_value_sigD0A8);
      });
    return this._loadQueue = var_core_value_sigE92A, var_core_value_sigE92A;
  }
  async loadChanges(var_core_value_sig362B, var_core_value_sig5CA5) {
    let var_core_value_sigE90F = ++this._changesGeneration,
      var_core_value_sigEFD4 = await this._diffService["compare"](var_core_value_sig362B, var_core_value_sig5CA5);
    if (var_core_value_sigE90F !== this._changesGeneration) return;
    let var_core_value_sig861B = this._getDocument(var_core_value_sig362B);
    if (!var_core_value_sig861B) return;
    let var_core_value_sig5237 = (0, t.createDocHistoryDisplay)(this._resourceLoaderService["saveUnit"](var_core_value_sig362B) ?? var_core_value_sig861B.getSnapshot(), var_core_value_sigEFD4.changes, {
      insert: this._highlightService["getStyle"]("insert"),
      delete: this._highlightService["getStyle"]("delete"),
      update: this._highlightService["getStyle"]("update")
    });
    var_core_value_sigE90F === this._changesGeneration && (this._univerInstanceService["disposeUnit"](var_core_value_sig362B), this._univerInstanceService["createUnit"](r.UniverInstanceType["UNIVER_DOC"], var_core_value_sig5237.snapshot).setDisabled(true), this._univerInstanceService["focusUnit"](var_core_value_sig362B));
  }
  close() {
    ++this._changesGeneration, ++this._loadGeneration;
  }
  _getDocument(var_core_value_sigBB00) {
    return this._univerInstanceService["getUnit"](var_core_value_sigBB00, r.UniverInstanceType["UNIVER_DOC"]) ?? null;
  }
};
J = I([F(0, (0, r.Inject)(t.DocsHistoryDiffService)), F(1, (0, r.Inject)(A.HistoryRenderAdapterRegistryService)), F(2, (0, r.Inject)(s.SnapshotService)), F(3, r.IResourceLoaderService), F(4, r.IUniverInstanceService), F(5, (0, r.Inject)(A.HistoryHighlightService))], J);
let Y = class extends A.UniverEditHistoryUIPlugin {
  constructor(var_core_value_sig7E54, var_core_value_sig9A8D, var_core_value_sigC259, var_core_value_sig9C9F) {
    let {
      collaborationClientConfig: var_core_value_sigFDEA,
      ...var_core_value_sig86D0
    } = var_core_value_sig7E54;
    super(var_core_value_sig86D0, var_core_value_sig9A8D, var_core_value_sigC259, var_core_value_sig9C9F), this._injector = var_core_value_sig9A8D, var_core_value_sigC259.setConfig(e.COLLABORATION_CLIENT_PLUGIN_CONFIG_KEY, var_core_value_sigFDEA);
  }
  onStarting() {
    super.onStarting(), (0, r.registerDependencies)(this._injector, [[s.ISnapshotServerService, {
      useClass: e.SnapshotServerOverHTTPService
    }], [H], [J]]), this._injector["get"](H), this._injector["get"](J);
  }
};
q(Y, "pluginName", "UNIVER_DOCS_HISTORY_VIEWER_PLUGIN"), q(Y, "packageName", N), q(Y, "version", P), q(Y, "type", r.UniverInstanceType["UNIVER_UNKNOWN"]), Y = I([(0, r.DependentOn)(n.UniverLicensePlugin, t.UniverDocsHistoryPlugin, i.UniverDocsUIPlugin), F(1, (0, r.Inject)(r.Injector)), F(2, r.IConfigService), F(3, r.ILogService)], Y);
let X = class extends r.Disposable {
  constructor(var_core_value_sig4CD2, var_core_value_sig48CA, var_core_value_sig50AF, var_core_value_sigA942, var_core_value_sigA621, var_core_value_sigBBFF, var_core_value_sig8889, var_core_value_sig32F8, var_core_value_sig5B67) {
    super(), this._configService = var_core_value_sig4CD2, this._restoreService = var_core_value_sig48CA, this._adapterRegistry = var_core_value_sig50AF, this._localeService = var_core_value_sigA942, this._themeService = var_core_value_sigA621, this._collaborationController = var_core_value_sigBBFF, this._dataLoaderService = var_core_value_sig8889, this._univerInstanceService = var_core_value_sig32F8, this._renderManagerService = var_core_value_sig5B67, q(this, "_historyUniver", null), q(this, "_opening", null), q(this, "_openGeneration", 0), q(this, "_sessionDisposables", new r.DisposableCollection()), q(this, "_container", null), q(this, "_ownsContainer", false), q(this, "_unitId", ""), q(this, "_location", undefined), q(this, "_suppressedHostUnitId", "");
  }
  open(var_core_value_sig1758) {
    if (this._historyUniver) return Promise.resolve();
    if (this._opening) return this._opening;
    let var_core_value_sig4805 = ++this._openGeneration,
      var_core_value_sigE67E = this._open(var_core_value_sig1758, var_core_value_sig4805).finally(() => {
        this._opening === var_core_value_sigE67E && (this._opening = null);
      });
    return this._opening = var_core_value_sigE67E, var_core_value_sigE67E;
  }
  async _open(var_core_value_sig2902, var_core_value_sig9989) {
    let var_core_value_sig698E = this._adapterRegistry["get"](r.UniverInstanceType["UNIVER_DOC"]);
    if (!var_core_value_sig698E) throw Error("[DocsHistoryLoaderService]:\x20Docs\x20history\x20adapter\x20is\x20not\x20registered.");
    let var_core_value_sig2809 = var_core_value_sig698E.captureLocation(var_core_value_sig2902),
      var_core_value_sig2DAB = await Promise.all([var_core_value_sig698E.canView(var_core_value_sig2902), var_core_value_sig698E.canRevert(var_core_value_sig2902)]).catch(var_core_value_sig8061 => {
        if (var_core_value_sig9989 === this._openGeneration) throw var_core_value_sig8061;
        return null;
      });
    if (!var_core_value_sig2DAB || var_core_value_sig9989 !== this._openGeneration) return;
    let [var_core_value_sig877E, var_core_value_sig20C8] = var_core_value_sig2DAB;
    if (!var_core_value_sig877E) throw Error("[DocsHistoryLoaderService]: The current user cannot view history for this document.");
    this._unitId = var_core_value_sig2902, this._location = var_core_value_sig2809;
    let var_core_value_sigE9A7 = this._ensureContainer(),
      var_core_value_sigBECE = this._localeService["getCurrentLocale"](),
      var_core_value_sig1B22 = this._localeService["getLocales"](),
      var_core_value_sig7F72 = new r.Univer({
        theme: this._themeService["getCurrentTheme"](),
        darkMode: this._themeService["darkMode"],
        locale: var_core_value_sigBECE,
        locales: var_core_value_sig1B22 ? {
          [var_core_value_sigBECE]: var_core_value_sig1B22
        } : undefined,
        direction: this._localeService["getDirection"](),
        override: [[r.IAuthzIoService, {
          useClass: e.AuthzIoHttpService
        }]]
      });
    this._historyUniver = var_core_value_sig7F72;
    try {
      this._suppressHostMenus(var_core_value_sig2902), var_core_value_sigE9A7.style["display"] = "block", this._syncViewerServices(var_core_value_sig7F72, var_core_value_sigE9A7), this._registerChildPlugins(var_core_value_sig7F72, var_core_value_sig20C8, var_core_value_sigE9A7), this._createPlaceholderDocument(var_core_value_sig7F72);
    } catch (var_core_value_sig4D4C) {
      throw var_core_value_sig9989 === this._openGeneration ? this.close() : (var_core_value_sigE9A7.style["display"] = "none", this._restoreHostMenus(), var_core_value_sig7F72.dispose()), var_core_value_sig4D4C;
    }
  }
  close() {
    ++this._openGeneration, this._opening = null, this._sessionDisposables["dispose"]();
    let var_core_value_sig7B2A = this._historyUniver;
    this._historyUniver = null, var_core_value_sig7B2A == null || var_core_value_sig7B2A.dispose();
    let var_core_value_sig06CD = this._container;
    var_core_value_sig06CD && (var_core_value_sig06CD.style["display"] = "none"), this._restoreHostMenus(), this._unitId = "", this._location = undefined;
  }
  _syncViewerServices(var_core_value_sigA5F1, var_core_value_sig97A2) {
    let var_core_value_sig07E9 = var_core_value_sigA5F1.__getInjector(),
      var_core_value_sig4F59 = var_core_value_sig07E9.get(r.LocaleService),
      var_core_value_sigF564 = var_core_value_sig07E9.get(r.ThemeService);
    this._sessionDisposables["add"](this._themeService["darkMode$"].subscribe(var_core_value_sigC9E0 => {
      var_core_value_sigF564.setDarkMode(var_core_value_sigC9E0);
    })), this._sessionDisposables["add"](this._themeService["currentTheme$"].subscribe(var_core_value_sig76BA => {
      var_core_value_sigF564.setTheme(var_core_value_sig76BA);
    })), this._sessionDisposables["add"](this._localeService["currentLocale$"].subscribe(var_core_value_sigFBFA => {
      let var_core_value_sigF602 = this._localeService["getLocales"]();
      var_core_value_sigF602 && var_core_value_sig4F59.load({
        [var_core_value_sigFBFA]: var_core_value_sigF602
      }), var_core_value_sig4F59.setLocale(var_core_value_sigFBFA);
    })), this._sessionDisposables["add"](this._localeService["direction$"].subscribe(var_core_value_sig1BBD => {
      var_core_value_sig4F59.setDirection(var_core_value_sig1BBD), var_core_value_sig97A2.dir = var_core_value_sig1BBD, var_core_value_sig97A2.style["direction"] = var_core_value_sig1BBD;
    }));
  }
  async restore(var_core_value_sig8CFA) {
    var var_core_value_sig2E11;
    let var_core_value_sig5B69 = this._unitId,
      var_core_value_sigB098 = this._location,
      var_core_value_sigCE71 = this._collaborationController["getCollabEntity"](var_core_value_sig5B69);
    if (!var_core_value_sigCE71) throw Error("[DocsHistoryLoaderService]: Collaboration is not ready for this document.");
    let var_core_value_sig21D8 = new k.Subject(),
      var_core_value_sig2B65 = (0, k.firstValueFrom)(var_core_value_sigCE71.session["event$"].pipe((0, k.filter)(var_core_value_sigF704 => var_core_value_sigF704.eventID === s.CollaborationEvent["CHANGESET_ACK"]), (0, k.filter)(var_core_value_sig2BCF => (0, C.isHistoryRestoreAcknowledgement)(var_core_value_sig2BCF, var_core_value_sig8CFA)), (0, k.takeUntil)(var_core_value_sig21D8), (0, k.timeout)(10000)));
    try {
      if (!(await this._restoreService["restore"](var_core_value_sig5B69, r.UniverInstanceType["UNIVER_DOC"], var_core_value_sig8CFA))) throw Error("[DocsHistoryLoaderService]: The restore command was not accepted.");
      await var_core_value_sig2B65;
    } catch (var_core_value_sig0D69) {
      throw var_core_value_sig21D8.next(), await var_core_value_sig2B65.catch(() => undefined), var_core_value_sig0D69;
    } finally {
      var_core_value_sig21D8.complete();
    }
    this.close(), this._univerInstanceService["disposeUnit"](var_core_value_sig5B69), await this._dataLoaderService["loadUnit"](var_core_value_sig5B69, r.UniverInstanceType["UNIVER_DOC"]), await ((var_core_value_sig2E11 = this._adapterRegistry["get"](r.UniverInstanceType["UNIVER_DOC"])) == null ? undefined : var_core_value_sig2E11.restoreLocation(var_core_value_sig5B69, var_core_value_sigB098));
  }
  _ensureContainer() {
    var var_core_value_sigD7EA;
    if (this._container) return this._container;
    let var_core_value_sigB33B = this._configService["getConfig"](j),
      var_core_value_sig24B9 = (var_core_value_sigD7EA = this._configService["getConfig"](o.UI_PLUGIN_CONFIG_KEY)) == null ? undefined : var_core_value_sigD7EA.container,
      var_core_value_sigE627 = (var_core_value_sigB33B == null ? undefined : var_core_value_sigB33B.univerContainerId) ?? var_core_value_sig24B9,
      var_core_value_sigEF3E = typeof var_core_value_sigE627 == "string" ? document.getElementById(var_core_value_sigE627) : var_core_value_sigE627;
    if (!var_core_value_sigEF3E) throw Error("[DocsHistoryLoaderService]: Configure a valid Univer container before opening history.");
    let var_core_value_sig273D = document.createElement("div");
    return var_core_value_sig273D.style["position"] = "absolute", var_core_value_sig273D.style["inset"] = "0", var_core_value_sig273D.style["zIndex"] = "49", var_core_value_sig273D.style["display"] = "none", var_core_value_sigEF3E.appendChild(var_core_value_sig273D), this._container = var_core_value_sig273D, this._ownsContainer = true, var_core_value_sig273D;
  }
  _registerChildPlugins(var_core_value_sig9A0D, var_core_value_sigA319, var_core_value_sig2D58) {
    let var_core_value_sig223F = this._configService["getConfig"](n.LS_CONFIG_KEY),
      var_core_value_sigD749 = this._configService["getConfig"](j),
      var_core_value_sigCFFA = [[n.UniverLicensePlugin, {
        license: var_core_value_sig223F == null ? undefined : var_core_value_sig223F.ls
      }], [O.UniverRenderEnginePlugin], [o.UniverUIPlugin, {
        container: var_core_value_sig2D58,
        header: true,
        toolbar: false,
        footer: true,
        contextMenu: false
      }], [ue.UniverNetworkPlugin], [ce.UniverDrawingPlugin], [le.UniverDrawingUIPlugin], [w.UniverDocsPlugin, {
        hasScroll: false
      }], [i.UniverDocsUIPlugin], [T.UniverDocsDrawingPlugin], [E.UniverDocsDrawingUIPlugin], [ae.UniverProFormulaEnginePlugin], [oe.UniverShapeEditorUIPlugin], [m.UniverDocsFormulaPlugin], [h.UniverDocsFormulaUIPlugin], [S.UniverDocsTablePlugin], [ie.UniverDocsTableUIPlugin], [c.UniverDocsCalloutPlugin], [l.UniverDocsCalloutUIPlugin], [f.UniverDocsCodePlugin], [ee.UniverDocsCodeUIPlugin], [y.UniverDocsQuotePlugin], [b.UniverDocsQuoteUIPlugin], [p.UniverDocsColumnPlugin], [te.UniverDocsColumnUIPlugin], [g.UniverDocsLatexPlugin], [ne.UniverDocsLatexUIPlugin], [_.UniverDocsListPlugin], [v.UniverDocsListUIPlugin], [x.UniverDocsShapePlugin], [re.UniverDocsShapeUIPlugin], [u.UniverDocsChartPlugin], [d.UniverDocsChartUIPlugin], [D.UniverDocsHyperLinkPlugin], [se.UniverDocsHyperLinkUIPlugin], [s.UniverCollaborationPlugin], [C.UniverEditHistoryPlugin, {
        historyServerUrl: var_core_value_sigD749 == null ? undefined : var_core_value_sigD749.historyServerUrl
      }], [t.UniverDocsHistoryPlugin]],
      var_core_value_sig58C1 = new Set();
    [...var_core_value_sigCFFA, ...((var_core_value_sigD749 == null ? undefined : var_core_value_sigD749.viewerPlugins) ?? [])].forEach(([var_core_value_sig480E, var_core_value_sig26DB]) => {
      if (var_core_value_sig58C1.has(var_core_value_sig480E.pluginName)) throw Error("[DocsHistoryLoaderService]: Plugin " + var_core_value_sig480E.pluginName + " has already been registered.");
      var_core_value_sig58C1.add(var_core_value_sig480E.pluginName), var_core_value_sig9A0D.registerPlugin(var_core_value_sig480E, var_core_value_sig26DB);
    }), var_core_value_sig9A0D.registerPlugin(Y, {
      viewerMode: true,
      descriptor: {
        unitId: this._unitId,
        type: r.UniverInstanceType["UNIVER_DOC"]
      },
      canRestore: var_core_value_sigA319,
      onClose: () => this.close(),
      onRestore: var_core_value_sigF0F9 => this.restore(var_core_value_sigF0F9),
      collaborationClientConfig: this._configService["getConfig"](e.COLLABORATION_CLIENT_PLUGIN_CONFIG_KEY)
    });
  }
  _createPlaceholderDocument(var_core_value_sig5090) {
    var_core_value_sig5090.createUnit(r.UniverInstanceType["UNIVER_DOC"], {
      id: this._unitId,
      body: {
        dataStream: "\x0d\x0a",
        paragraphs: [{
          startIndex: 0,
          paragraphId: (0, r.generateRandomId)()
        }],
        sectionBreaks: [{
          startIndex: 1,
          sectionId: (0, r.generateRandomId)()
        }]
      },
      documentStyle: {}
    }).setDisabled(true);
  }
  _suppressHostMenus(var_core_value_sigC368) {
    let var_core_value_sigAD56 = this._renderManagerService["getRenderUnitById"](var_core_value_sigC368);
    (var_core_value_sigAD56 == null ? undefined : var_core_value_sigAD56.type) === r.UniverInstanceType["UNIVER_DOC"] && (this._suppressedHostUnitId = var_core_value_sigC368, var_core_value_sigAD56.with(i.DocFloatMenuService).setSuppressed(true), var_core_value_sigAD56.with(i.DocParagraphMenuService).hideParagraphMenu(true));
  }
  _restoreHostMenus() {
    let var_core_value_sigDB4A = this._suppressedHostUnitId;
    if (this._suppressedHostUnitId = "", !var_core_value_sigDB4A) return;
    let var_core_value_sig6418 = this._renderManagerService["getRenderUnitById"](var_core_value_sigDB4A);
    (var_core_value_sig6418 == null ? undefined : var_core_value_sig6418.type) === r.UniverInstanceType["UNIVER_DOC"] && var_core_value_sig6418.with(i.DocFloatMenuService).setSuppressed(false);
  }
  dispose() {
    if (this.close(), this._ownsContainer) {
      var var_core_value_sig1896;
      (var_core_value_sig1896 = this._container) == null || var_core_value_sig1896.remove();
    }
    this._container = null, this._ownsContainer = false, super.dispose();
  }
};
X = I([F(0, r.IConfigService), F(1, (0, r.Inject)(C.HistoryRestoreService)), F(2, (0, r.Inject)(C.HistoryUnitAdapterRegistryService)), F(3, (0, r.Inject)(r.LocaleService)), F(4, (0, r.Inject)(r.ThemeService)), F(5, (0, r.Inject)(e.CollaborationController)), F(6, (0, r.Inject)(e.DataLoaderService)), F(7, r.IUniverInstanceService), F(8, O.IRenderManagerService)], X);
const Z = {
    id: "docs-history-ui.operation.open",
    type: r.CommandType["OPERATION"],
    handler: var_core_value_sig01B3 => {
      let var_core_value_sig7442 = var_core_value_sig01B3.get(r.IUniverInstanceService).getCurrentUnitOfType(r.UniverInstanceType["UNIVER_DOC"]);
      return var_core_value_sig7442 ? (var_core_value_sig01B3.get(X).open(var_core_value_sig7442.getUnitId()).catch(var_core_value_sig0285 => {
        var_core_value_sig01B3.get(r.ILogService).error("[OpenDocsHistoryOperation]: Failed to open document history.", var_core_value_sig0285);
      }), true) : false;
    }
  },
  me = {
    [o.RibbonStartGroup["OTHERS"]]: {
      [Z.id]: {
        order: 100,
        gridLayout: {
          row: 1,
          column: 3,
          rowSpan: 2,
          columnSpan: 2,
          showLabel: true
        },
        menuItemFactory: he
      }
    }
  };
function he(var_core_value_sigDF87) {
  return {
    id: Z.id,
    type: o.MenuItemType["BUTTON"],
    icon: "DocsHistoryIcon",
    title: "docs-history-ui.menu.history",
    tooltip: "docs-history-ui.menu.history",
    hidden$: (0, o.getMenuHiddenObservable)(var_core_value_sigDF87, r.UniverInstanceType["UNIVER_DOC"])
  };
}
let Q = class extends r.Disposable {
  constructor(var_core_value_sig777D, var_core_value_sig3F4C) {
    super(), this.disposeWithMe(var_core_value_sig777D.registerCommand(Z)), var_core_value_sig3F4C.mergeMenu(me);
  }
};
Q = I([F(0, r.ICommandService), F(1, o.IMenuManagerService)], Q);
let $ = class extends r.Plugin {
  constructor(var_core_value_sigD65A = M, var_core_value_sig5A13, var_core_value_sigF593) {
    super(), this._config = var_core_value_sigD65A, this._injector = var_core_value_sig5A13, this._configService = var_core_value_sigF593;
    let {
      ...var_core_value_sig3607
    } = (0, r.merge)({}, M, this._config);
    this._configService["setConfig"](j, var_core_value_sig3607);
  }
  onStarting() {
    (0, r.registerDependencies)(this._injector, [[L], [X], [Q]]), this._injector["get"](L), this._injector["get"](Q);
  }
};
q($, "pluginName", "UNIVER_DOCS_HISTORY_UI_PLUGIN"), q($, "packageName", N), q($, "version", P), q($, "type", r.UniverInstanceType["UNIVER_DOC"]), $ = I([(0, r.DependentOn)(n.UniverLicensePlugin, e.UniverCollaborationClientPlugin, t.UniverDocsHistoryPlugin, i.UniverDocsUIPlugin), F(1, (0, r.Inject)(r.Injector)), F(2, r.IConfigService)], $), exports.DOCS_HISTORY_UI_PLUGIN_CONFIG_KEY = j, Object.defineProperty(exports, "UniverDocsHistoryUIPlugin", {
  enumerable: true,
  get: function () {
    return $;
  }
});
