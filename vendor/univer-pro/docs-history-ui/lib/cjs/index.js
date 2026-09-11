Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
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
 M = { historyServerUrl: "/universer-api/history" };
var N = "@univerjs-pro/docs-history-ui",
 P = "1.0.0-insiders.20260907-70fc579";
function F(_0x58dbae, _0x387297) {
 return function (_0x333246, _0x723204) {
 _0x387297(_0x333246, _0x723204, _0x58dbae);
 };
}
function I(_0x4df0ea, _0x334efa, _0x291347, _0x554eb5) {
 var _0x41da46 = arguments.length,
 _0x53fbad =
 _0x41da46 < 3
 ? _0x334efa
 : _0x554eb5 === null
 ? (_0x554eb5 = Object.getOwnPropertyDescriptor(_0x334efa, _0x291347))
 : _0x554eb5,
 _0x5036a7;
 if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
 _0x53fbad = Reflect.decorate(_0x4df0ea, _0x334efa, _0x291347, _0x554eb5);
 else {
 for (var _0x179558 = _0x4df0ea.length - 1; _0x179558 >= 0; _0x179558--)
 (_0x5036a7 = _0x4df0ea[_0x179558]) &&
 (_0x53fbad =
 (_0x41da46 < 3
 ? _0x5036a7(_0x53fbad)
 : _0x41da46 > 3
 ? _0x5036a7(_0x334efa, _0x291347, _0x53fbad)
 : _0x5036a7(_0x334efa, _0x291347)) || _0x53fbad);
 }
 return (
 _0x41da46 > 3 &&
 _0x53fbad &&
 Object.defineProperty(_0x334efa, _0x291347, _0x53fbad),
 _0x53fbad
 );
}
let L = class extends r.Disposable {
 constructor(_0x424461) {
 (super(),
 this.disposeWithMe(_0x424461.register("DocsHistoryIcon", a.HistoryIcon)));
 }
};
L = I([F(0, (0, r.Inject)(o.IconManager))], L);
const R = {
 [w.DocHistoryAction["DeleteChart"]]: "docs-history-ui.action.deleteChart",
 [w.DocHistoryAction["DeleteDivider"]]:
 "docs-history-ui.action.deleteDivider",
 [w.DocHistoryAction["DeleteImage"]]: "docs-history-ui.action.deleteImage",
 [w.DocHistoryAction["DeleteShape"]]: "docs-history-ui.action.deleteShape",
 [w.DocHistoryAction["EditTableCell"]]:
 "docs-history-ui.action.editTableCell",
 [w.DocHistoryAction["FormatParagraph"]]:
 "docs-history-ui.action.formatParagraph",
 [w.DocHistoryAction["InsertCustomRange"]]:
 "docs-history-ui.action.insertCustomRange",
 [w.DocHistoryAction["UpdateImage"]]: "docs-history-ui.action.updateImage",
 [w.DocHistoryAction["UpdatePageLayout"]]:
 "docs-history-ui.action.updatePageLayout",
 },
 z = new Map([
 [w.SetDocumentNameCommand["id"], "docs-history-ui.action.renameDocument"],
 [w.InsertTextCommand["id"], "docs-history-ui.action.insertText"],
 [i.IMEInputCommand["id"], "docs-history-ui.action.insertText"],
 [i.BreakLineCommand["id"], "docs-history-ui.action.insertText"],
 [i.InnerPasteCommand["id"], "docs-history-ui.action.insertText"],
 [i.ReplaceSelectionCommand["id"], "docs-history-ui.action.insertText"],
 [w.DeleteTextCommand["id"], "docs-history-ui.action.deleteText"],
 [i.CutContentCommand["id"], "docs-history-ui.action.deleteText"],
 [i.DeleteLeftCommand["id"], "docs-history-ui.action.deleteText"],
 [i.DeleteRightCommand["id"], "docs-history-ui.action.deleteText"],
 [
 i.DeleteCurrentParagraphCommand["id"],
 "docs-history-ui.action.deleteText",
 ],
 [i.MergeTwoParagraphCommand["id"], "docs-history-ui.action.deleteText"],
 [i.DeleteCustomBlockCommand["id"], "docs-history-ui.action.deleteBlock"],
 [w.UpdateTextCommand["id"], "docs-history-ui.action.formatText"],
 [i.SetInlineFormatCommand["id"], "docs-history-ui.action.formatText"],
 [i.ReplaceTextRunsCommand["id"], "docs-history-ui.action.formatText"],
 [
 w.UpdateDocumentParagraphStyleCommand["id"],
 "docs-history-ui.action.formatParagraph",
 ],
 [
 w.SetDocumentDefaultParagraphStyleCommand["id"],
 "docs-history-ui.action.formatParagraph",
 ],
 [i.AlignOperationCommand["id"], "docs-history-ui.action.formatParagraph"],
 [i.AfterSpaceCommand["id"], "docs-history-ui.action.formatParagraph"],
 [i.EnterCommand["id"], "docs-history-ui.action.formatParagraph"],
 [i.TabCommand["id"], "docs-history-ui.action.formatParagraph"],
 [
 i.SetParagraphNamedStyleCommand["id"],
 "docs-history-ui.action.changeHeading",
 ],
 [i.ListOperationCommand["id"], "docs-history-ui.action.updateList"],
 [i.ChangeListTypeCommand["id"], "docs-history-ui.action.updateList"],
 [
 i.ChangeListNestingLevelCommand["id"],
 "docs-history-ui.action.updateList",
 ],
 [i.ToggleCheckListCommand["id"], "docs-history-ui.action.updateList"],
 [_.DocsListInsertCommand["id"], "docs-history-ui.action.updateList"],
 [_.DocsListSetGlyphTypeCommand["id"], "docs-history-ui.action.updateList"],
 [
 _.DocsListSetGlyphSymbolCommand["id"],
 "docs-history-ui.action.updateList",
 ],
 [
 _.DocsListSetPrefixSuffixCommand["id"],
 "docs-history-ui.action.updateList",
 ],
 [
 _.DocsListSetStartNumberCommand["id"],
 "docs-history-ui.action.updateList",
 ],
 [_.DocsListPromoteCommand["id"], "docs-history-ui.action.updateList"],
 [_.DocsListDemoteCommand["id"], "docs-history-ui.action.updateList"],
 [i.MoveDocBlockCommand["id"], "docs-history-ui.action.moveBlock"],
 [i.HorizontalLineCommand["id"], "docs-history-ui.action.insertDivider"],
 [
 w.UpdateDocumentSectionCommand["id"],
 "docs-history-ui.action.updatePageLayout",
 ],
 [
 w.InsertDocumentSectionBreakCommand["id"],
 "docs-history-ui.action.updatePageLayout",
 ],
 [
 w.DeleteDocumentSectionBreakCommand["id"],
 "docs-history-ui.action.updatePageLayout",
 ],
 [
 w.InsertDocumentColumnBreakCommand["id"],
 "docs-history-ui.action.updatePageLayout",
 ],
 [
 w.CreateHeaderFooterCommand["id"],
 "docs-history-ui.action.updateHeaderFooter",
 ],
 [
 w.SetSectionHeaderFooterLinkCommand["id"],
 "docs-history-ui.action.updateHeaderFooter",
 ],
 [D.DocHyperLinkCommandId["Add"], "docs-history-ui.action.insertLink"],
 [D.DocHyperLinkCommandId["Update"], "docs-history-ui.action.updateLink"],
 [D.DocHyperLinkCommandId["Delete"], "docs-history-ui.action.deleteLink"],
 [S.DocsTableInsertTableCommand["id"], "docs-history-ui.action.insertTable"],
 [i.CreateDocTableCommand["id"], "docs-history-ui.action.insertTable"],
 [S.DocsTableDeleteTableCommand["id"], "docs-history-ui.action.deleteTable"],
 [i.DocTableDeleteTableCommand["id"], "docs-history-ui.action.deleteTable"],
 [
 S.DocsTableInsertRowsCommand["id"],
 "docs-history-ui.action.insertTableRows",
 ],
 [
 S.DocsTableDeleteRowsCommand["id"],
 "docs-history-ui.action.deleteTableRows",
 ],
 [S.DocsTableMoveRowsCommand["id"], "docs-history-ui.action.moveTableRows"],
 [
 S.DocsTableInsertColumnsCommand["id"],
 "docs-history-ui.action.insertTableColumns",
 ],
 [
 S.DocsTableDeleteColumnsCommand["id"],
 "docs-history-ui.action.deleteTableColumns",
 ],
 [
 S.DocsTableMoveColumnsCommand["id"],
 "docs-history-ui.action.moveTableColumns",
 ],
 [S.DocsTableMoveTableCommand["id"], "docs-history-ui.action.moveTable"],
 [
 S.DocsTableResizeColumnCommand["id"],
 "docs-history-ui.action.resizeTableColumns",
 ],
 [
 S.DocsTableResizeRowCommand["id"],
 "docs-history-ui.action.resizeTableRows",
 ],
 [
 S.DocsTableDistributeColumnsCommand["id"],
 "docs-history-ui.action.distributeTableColumns",
 ],
 [
 S.DocsTableDistributeRowsCommand["id"],
 "docs-history-ui.action.distributeTableRows",
 ],
 [
 S.DocsTableInsertTitleRowCommand["id"],
 "docs-history-ui.action.updateTableHeader",
 ],
 [
 S.DocsTableSetColumnTypeCommand["id"],
 "docs-history-ui.action.updateTableColumns",
 ],
 [
 S.DocsTableSetHeaderRowCountCommand["id"],
 "docs-history-ui.action.updateTableHeader",
 ],
 [
 S.DocsTableSetTableBackgroundCommand["id"],
 "docs-history-ui.action.formatTable",
 ],
 [
 S.DocsTableSetTableBorderColorCommand["id"],
 "docs-history-ui.action.formatTable",
 ],
 [
 S.DocsTableSetTableBorderCommand["id"],
 "docs-history-ui.action.formatTable",
 ],
 [
 S.DocsTableSetTableBorderStyleCommand["id"],
 "docs-history-ui.action.formatTable",
 ],
 [
 S.DocsTableSetTableBorderWidthCommand["id"],
 "docs-history-ui.action.formatTable",
 ],
 [
 S.DocsTableSetTableVerticalAlignCommand["id"],
 "docs-history-ui.action.formatTable",
 ],
 [
 S.DocsTableMergeCellsCommand["id"],
 "docs-history-ui.action.mergeTableCells",
 ],
 [
 S.DocsTableUnmergeCellsCommand["id"],
 "docs-history-ui.action.unmergeTableCells",
 ],
 [S.DocsTableSortTableCommand["id"], "docs-history-ui.action.sortTable"],
 [
 i.DocTableDeleteColumnsCommand["id"],
 "docs-history-ui.action.deleteTableColumns",
 ],
 [
 i.DocTableDeleteRowsCommand["id"],
 "docs-history-ui.action.deleteTableRows",
 ],
 [
 i.DocTableInsertColumnCommand["id"],
 "docs-history-ui.action.insertTableColumns",
 ],
 [
 i.DocTableInsertRowCommand["id"],
 "docs-history-ui.action.insertTableRows",
 ],
 [i.DocTableTabCommand["id"], "docs-history-ui.action.editTableCell"],
 [T.InsertDocDrawingCommand["id"], "docs-history-ui.action.insertImage"],
 [T.RemoveDocDrawingCommand["id"], "docs-history-ui.action.deleteImage"],
 [
 T.UpdateDrawingDocTransformCommand["id"],
 "docs-history-ui.action.updateDrawing",
 ],
 [
 T.UpdateDocDrawingWrappingStyleCommand["id"],
 "docs-history-ui.action.updateDrawing",
 ],
 [
 T.SetDocDrawingArrangeCommand["id"],
 "docs-history-ui.action.updateDrawing",
 ],
 [x.InsertDocShapeCommand["id"], "docs-history-ui.action.insertShape"],
 [x.UpdateDocShapeDataCommand["id"], "docs-history-ui.action.updateShape"],
 [
 x.UpdateDocDrawingMetadataCommand["id"],
 "docs-history-ui.action.updateShape",
 ],
 [u.InsertDocChartCommand["id"], "docs-history-ui.action.insertChart"],
 [u.RemoveDocChartCommand["id"], "docs-history-ui.action.deleteChart"],
 [
 u.RemoveDocChartSnapshotMutation["id"],
 "docs-history-ui.action.deleteChart",
 ],
 [u.UpdateDocChartConfigCommand["id"], "docs-history-ui.action.updateChart"],
 [
 u.UpdateDocChartDataSourceCommand["id"],
 "docs-history-ui.action.updateChart",
 ],
 [
 u.UpdateDocChartDrawingCommand["id"],
 "docs-history-ui.action.updateChart",
 ],
 [
 u.UpdateDocChartSnapshotCommand["id"],
 "docs-history-ui.action.updateChart",
 ],
 [
 u.ChangeDocChartDataSourceCommand["id"],
 "docs-history-ui.action.updateChart",
 ],
 [
 u.DuplicateDocChartDataSourceCommand["id"],
 "docs-history-ui.action.updateChart",
 ],
 [c.DocsCalloutInsertCommand["id"], "docs-history-ui.action.insertCallout"],
 [
 c.DocsCalloutInsertBelowCommand["id"],
 "docs-history-ui.action.insertCallout",
 ],
 [c.DocsCalloutDeleteCommand["id"], "docs-history-ui.action.deleteCallout"],
 [c.DocsCalloutUnwrapCommand["id"], "docs-history-ui.action.deleteCallout"],
 [
 c.DocsCalloutCancelEmptyParagraphCommand["id"],
 "docs-history-ui.action.deleteCallout",
 ],
 [
 c.DocsCalloutConsumeBoundaryDeleteCommand["id"],
 "docs-history-ui.action.updateCallout",
 ],
 [
 c.DocsCalloutResetColorsCommand["id"],
 "docs-history-ui.action.updateCallout",
 ],
 [
 c.DocsCalloutSetTextColorCommand["id"],
 "docs-history-ui.action.updateCallout",
 ],
 [c.DocsCalloutUpdateCommand["id"], "docs-history-ui.action.updateCallout"],
 [f.DocsCodeInsertCommand["id"], "docs-history-ui.action.insertCodeBlock"],
 [f.DocsCodeRemoveCommand["id"], "docs-history-ui.action.deleteCodeBlock"],
 [f.DocsCodeUnwrapCommand["id"], "docs-history-ui.action.deleteCodeBlock"],
 [
 f.DocsCodeCancelEmptyParagraphCommand["id"],
 "docs-history-ui.action.deleteCodeBlock",
 ],
 [
 f.DocsCodeConsumeBoundaryDeleteCommand["id"],
 "docs-history-ui.action.updateCodeBlock",
 ],
 [f.DocsCodeUpdateCommand["id"], "docs-history-ui.action.updateCodeBlock"],
 [y.DocsQuoteInsertCommand["id"], "docs-history-ui.action.insertQuote"],
 [y.DocsQuoteInsertBelowCommand["id"], "docs-history-ui.action.insertQuote"],
 [y.DocsQuoteRemoveCommand["id"], "docs-history-ui.action.deleteQuote"],
 [y.DocsQuoteUnwrapCommand["id"], "docs-history-ui.action.deleteQuote"],
 [
 y.DocsQuoteCancelEmptyParagraphCommand["id"],
 "docs-history-ui.action.deleteQuote",
 ],
 [y.DocsQuoteExitCommand["id"], "docs-history-ui.action.updateQuote"],
 [y.DocsQuoteUpdateStyleCommand["id"], "docs-history-ui.action.updateQuote"],
 [
 p.InsertDocColumnGroupCommand["id"],
 "docs-history-ui.action.insertColumns",
 ],
 [p.AddDocColumnCommand["id"], "docs-history-ui.action.updateColumns"],
 [p.DeleteDocColumnCommand["id"], "docs-history-ui.action.updateColumns"],
 [
 p.DeleteDocColumnGroupCommand["id"],
 "docs-history-ui.action.updateColumns",
 ],
 [
 p.NormalizeDocColumnGroupCommand["id"],
 "docs-history-ui.action.updateColumns",
 ],
 [
 p.ResizeDocColumnGroupCommand["id"],
 "docs-history-ui.action.updateColumns",
 ],
 [m.InsertDocFormulaCommand["id"], "docs-history-ui.action.insertFormula"],
 [m.UpdateDocFormulaCommand["id"], "docs-history-ui.action.updateFormula"],
 [
 m.SetDocFormulaNumberFormatCommand["id"],
 "docs-history-ui.action.updateFormula",
 ],
 [m.RemoveDocFormulaCommand["id"], "docs-history-ui.action.deleteFormula"],
 [
 m.ConvertDocFormulaToTextCommand["id"],
 "docs-history-ui.action.deleteFormula",
 ],
 [
 m.ReplaceDocFormulaWithTextCommand["id"],
 "docs-history-ui.action.deleteFormula",
 ],
 [
 g.InsertDocsLatexFormulaCommand["id"],
 "docs-history-ui.action.insertFormula",
 ],
 [
 g.UpdateDocsLatexFormulaCommand["id"],
 "docs-history-ui.action.updateFormula",
 ],
 [
 g.RemoveDocsLatexFormulaCommand["id"],
 "docs-history-ui.action.deleteFormula",
 ],
 [
 g.ReplaceDocsLatexFormulaWithTextCommand["id"],
 "docs-history-ui.action.deleteFormula",
 ],
 [i.CoverContentCommand["id"], "docs-history-ui.action.editDocument"],
 [i.ReplaceSnapshotCommand["id"], "docs-history-ui.action.editDocument"],
 ]),
 B = new Set([
 T.SetDocDrawingArrangeCommand["id"],
 T.UpdateDocDrawingWrappingStyleCommand["id"],
 T.UpdateDrawingDocTransformCommand["id"],
 ]),
 V = new Set([
 u.UpdateDocChartConfigCommand["id"],
 u.UpdateDocChartDataSourceCommand["id"],
 u.UpdateDocChartDrawingCommand["id"],
 u.UpdateDocChartSnapshotCommand["id"],
 x.UpdateDocDrawingMetadataCommand["id"],
 x.UpdateDocShapeDataCommand["id"],
 ]);
let H = class extends r.Disposable {
 constructor(_0xcd6580, _0x5db5da) {
 (super(),
 (this._localeService = _0x5db5da),
 this.disposeWithMe(
 _0xcd6580.register(r.UniverInstanceType["UNIVER_DOC"], this),
 ));
 }
 resolve(_0x59fbcd) {
 let _0x3c694f = de(_0x59fbcd),
 _0x1d40f6 = _0x3c694f.has(w.DocHistoryAction["InsertCustomRange"]),
 _0x1bc4f7 = _0x3c694f.has(w.DocHistoryAction["UpdateImage"]),
 _0x19d860 =
 _0x3c694f.has(w.DocHistoryAction["DeleteChart"]) ||
 _0x3c694f.has(w.DocHistoryAction["DeleteImage"]) ||
 _0x3c694f.has(w.DocHistoryAction["DeleteShape"]),
 _0x5ca745 = fe(_0x59fbcd),
 _0x501e64 =
 _0x59fbcd.commandIds["has"](x.InsertDocShapeCommand["id"]) ||
 _0x59fbcd.commandIds["has"](u.InsertDocChartCommand["id"]),
 _0x166775 = [...V].some((_0x1d39a2) =>
 _0x59fbcd.commandIds["has"](_0x1d39a2),
 ),
 _0x3084e9 = _0x5ca745.map((_0x51a9eb) =>
 this._localeService["t"](_0x51a9eb),
 );
 _0x3084e9.push(
 ...[..._0x3c694f].map((_0x5777b0) =>
 this._localeService["t"](R[_0x5777b0]),
 ),
 );
 let _0x3c6982 = [..._0x59fbcd.commandIds].flatMap((_0x24d12a) => {
 if (
 (_0x1d40f6 && _0x24d12a === i.ReplaceSelectionCommand["id"]) ||
 (_0x501e64 && _0x24d12a === T.InsertDocDrawingCommand["id"]) ||
 ((_0x19d860 || _0x5ca745.length > 0) &&
 _0x24d12a === T.RemoveDocDrawingCommand["id"]) ||
 ((_0x166775 || _0x1bc4f7) && B.has(_0x24d12a))
 )
 return [];
 let _0x2d8d2e = z.get(_0x24d12a);
 return _0x2d8d2e ? [this._localeService["t"](_0x2d8d2e)] : [];
 }),
 _0x41c3f2 = [...new Set([..._0x3084e9, ..._0x3c6982])];
 return _0x41c3f2.length > 0
 ? _0x41c3f2
 : _0x59fbcd.commandIds["has"](w.RichTextEditingMutation["id"])
 ? [this._localeService["t"]("docs-history-ui.action.editDocument")]
 : [];
 }
};
H = I(
 [
 F(0, (0, r.Inject)(A.HistoryActionSummaryService)),
 F(1, (0, r.Inject)(r.LocaleService)),
 ],
 H,
);
function de(_0x4cec8d) {
 let _0x377598 = new Set();
 return (
 _0x4cec8d.mutations["forEach"]((_0x126c11) => {
 if (!W(_0x126c11.params)) return;
 let { historyAction: _0x16978d } = _0x126c11.params;
 U(_0x16978d) && _0x377598.add(_0x16978d);
 let { historyActions: _0x4c3b66 } = _0x126c11.params;
 Array.isArray(_0x4c3b66) &&
 _0x4c3b66.forEach((_0x63adeb) => {
 U(_0x63adeb) && _0x377598.add(_0x63adeb);
 });
 }),
 _0x377598
 );
}
function U(_0x33b8de) {
 return (
 _0x33b8de === w.DocHistoryAction["DeleteChart"] ||
 _0x33b8de === w.DocHistoryAction["DeleteDivider"] ||
 _0x33b8de === w.DocHistoryAction["DeleteImage"] ||
 _0x33b8de === w.DocHistoryAction["DeleteShape"] ||
 _0x33b8de === w.DocHistoryAction["EditTableCell"] ||
 _0x33b8de === w.DocHistoryAction["FormatParagraph"] ||
 _0x33b8de === w.DocHistoryAction["InsertCustomRange"] ||
 _0x33b8de === w.DocHistoryAction["UpdateImage"] ||
 _0x33b8de === w.DocHistoryAction["UpdatePageLayout"]
 );
}
function fe(_0x224d7c) {
 if (!_0x224d7c.commandIds["has"](T.RemoveDocDrawingCommand["id"])) return [];
 let _0x4e9653 = _0x224d7c.mutations["flatMap"]((_0xb2f4ef) =>
 W(_0xb2f4ef.params)
 ? typeof _0xb2f4ef.params["chartId"] == "string"
 ? ["docs-history-ui.action.deleteChart"]
 : typeof _0xb2f4ef.params["shapeId"] == "string"
 ? ["docs-history-ui.action.deleteShape"]
 : typeof _0xb2f4ef.params["drawingId"] == "string"
 ? ["docs-history-ui.action.deleteImage"]
 : []
 : [],
 );
 return [...new Set(_0x4e9653)];
}
function W(_0x25f7d1) {
 return typeof _0x25f7d1 == "object" && !!_0x25f7d1;
}
function G(_0x3bb0f4) {
 "@babel/helpers - typeof";
 return (
 (G =
 typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
 ? function (_0x5a79b0) {
 return typeof _0x5a79b0;
 }
 : function (_0x4a38f6) {
 return _0x4a38f6 &&
 typeof Symbol == "function" &&
 _0x4a38f6.constructor === Symbol &&
 _0x4a38f6 !== Symbol.prototype
 ? "symbol"
 : typeof _0x4a38f6;
 }),
 G(_0x3bb0f4)
 );
}
function pe(_0xce5d45, _0x3d4c48) {
 if (G(_0xce5d45) != "object" || !_0xce5d45) return _0xce5d45;
 var _0x40bacb = _0xce5d45[Symbol.toPrimitive];
 if (_0x40bacb !== undefined) {
 var _0x30933e = _0x40bacb.call(_0xce5d45, _0x3d4c48 || "default");
 if (G(_0x30933e) != "object") return _0x30933e;
 throw TypeError("@@toPrimitive must return a primitive value.");
 }
 return (_0x3d4c48 === "string" ? String : Number)(_0xce5d45);
}
function K(_0x5de501) {
 var _0x4f500c = pe(_0x5de501, "string");
 return G(_0x4f500c) == "symbol" ? _0x4f500c : _0x4f500c + "";
}
function q(_0x6aa3a2, _0x156067, _0xf39f91) {
 return (
 (_0x156067 = K(_0x156067)) in _0x6aa3a2
 ? Object.defineProperty(_0x6aa3a2, _0x156067, {
 value: _0xf39f91,
 enumerable: true,
 configurable: true,
 writable: true,
 })
 : (_0x6aa3a2[_0x156067] = _0xf39f91),
 _0x6aa3a2
 );
}
let J = class extends r.Disposable {
 constructor(
 _0x5f90f9,
 _0x5e5967,
 _0x55e0fe,
 _0x54e6a5,
 _0x2d3fe3,
 _0x546156,
 ) {
 (super(),
 (this._diffService = _0x5f90f9),
 (this._snapshotService = _0x55e0fe),
 (this._resourceLoaderService = _0x54e6a5),
 (this._univerInstanceService = _0x2d3fe3),
 (this._highlightService = _0x546156),
 q(this, "type", r.UniverInstanceType["UNIVER_DOC"]),
 q(this, "_changesGeneration", 0),
 q(this, "_loadGeneration", 0),
 q(this, "_loadQueue", Promise.resolve()),
 this.disposeWithMe(_0x5e5967.register(this)));
 }
 loadRevision(_0x409cf2, _0x1f5127) {
 let _0x526c99 = ++this._loadGeneration,
 _0x429d6d = this._loadQueue["catch"](() => undefined).then(async () => {
 if (_0x526c99 !== this._loadGeneration) return;
 this._getDocument(_0x409cf2) &&
 this._univerInstanceService["disposeUnit"](_0x409cf2);
 let _0x2ba7fd = await this._snapshotService["loadDoc"](
 _0x409cf2,
 _0x1f5127.endRevision,
 );
 if ((_0x2ba7fd.setDisabled(true), _0x526c99 !== this._loadGeneration)) {
 this._getDocument(_0x409cf2) === _0x2ba7fd &&
 this._univerInstanceService["disposeUnit"](_0x409cf2);
 return;
 }
 this._univerInstanceService["focusUnit"](_0x409cf2);
 });
 return ((this._loadQueue = _0x429d6d), _0x429d6d);
 }
 async loadChanges(_0x23e3ee, _0x49edba) {
 let _0x115705 = ++this._changesGeneration,
 _0x540052 = await this._diffService["compare"](_0x23e3ee, _0x49edba);
 if (_0x115705 !== this._changesGeneration) return;
 let _0x2afd14 = this._getDocument(_0x23e3ee);
 if (!_0x2afd14) return;
 let _0x138a56 = (0, t.createDocHistoryDisplay)(
 this._resourceLoaderService["saveUnit"](_0x23e3ee) ??
 _0x2afd14.getSnapshot(),
 _0x540052.changes,
 {
 insert: this._highlightService["getStyle"]("insert"),
 delete: this._highlightService["getStyle"]("delete"),
 update: this._highlightService["getStyle"]("update"),
 },
 );
 _0x115705 === this._changesGeneration &&
 (this._univerInstanceService["disposeUnit"](_0x23e3ee),
 this._univerInstanceService["createUnit"](
 r.UniverInstanceType["UNIVER_DOC"],
 _0x138a56.snapshot,
 ).setDisabled(true),
 this._univerInstanceService["focusUnit"](_0x23e3ee));
 }
 close() {
 (++this._changesGeneration, ++this._loadGeneration);
 }
 _getDocument(_0x2dddb7) {
 return (
 this._univerInstanceService["getUnit"](
 _0x2dddb7,
 r.UniverInstanceType["UNIVER_DOC"],
 ) ?? null
 );
 }
};
J = I(
 [
 F(0, (0, r.Inject)(t.DocsHistoryDiffService)),
 F(1, (0, r.Inject)(A.HistoryRenderAdapterRegistryService)),
 F(2, (0, r.Inject)(s.SnapshotService)),
 F(3, r.IResourceLoaderService),
 F(4, r.IUniverInstanceService),
 F(5, (0, r.Inject)(A.HistoryHighlightService)),
 ],
 J,
);
let Y = class extends A.UniverEditHistoryUIPlug in {
 constructor(_0xd94aa6, _0x29aa62, _0x2f6e1c, _0x5d7710) {
 let { collaborationClientConfig: _0x440da4, ..._0x43457e } = _0xd94aa6;
 (super(_0x43457e, _0x29aa62, _0x2f6e1c, _0x5d7710),
 (this._injector = _0x29aa62),
 _0x2f6e1c.setConfig(e.COLLABORATION_CLIENT_PLUGIN_CONFIG_KEY, _0x440da4));
 }
 onStarting() {
 (super.onStarting(),
 (0, r.registerDependencies)(this._injector, [
 [
 s.ISnapshotServerService,
 { useClass: e.SnapshotServerOverHTTPService },
 ],
 [H],
 [J],
 ]),
 this._injector["get"](H),
 this._injector["get"](J));
 }
};
(q(Y, "pluginName", "UNIVER_DOCS_HISTORY_VIEWER_PLUGIN"),
 q(Y, "packageName", N),
 q(Y, "version", P),
 q(Y, "type", r.UniverInstanceType["UNIVER_UNKNOWN"]),
 (Y = I(
 [
 (0, r.DependentOn)(
 n.UniverLicensePlugin,
 t.UniverDocsHistoryPlugin,
 i.UniverDocsUIPlugin,
 ),
 F(1, (0, r.Inject)(r.Injector)),
 F(2, r.IConfigService),
 F(3, r.ILogService),
 ],
 Y,
 )));
let X = class extends r.Disposable {
 constructor(
 _0x1b2c82,
 _0x22080e,
 _0x41de7d,
 _0x1d830b,
 _0x282ed4,
 _0x16c7b7,
 _0x419ac2,
 _0x17f60a,
 _0x19f3ad,
 ) {
 (super(),
 (this._configService = _0x1b2c82),
 (this._restoreService = _0x22080e),
 (this._adapterRegistry = _0x41de7d),
 (this._localeService = _0x1d830b),
 (this._themeService = _0x282ed4),
 (this._collaborationController = _0x16c7b7),
 (this._dataLoaderService = _0x419ac2),
 (this._univerInstanceService = _0x17f60a),
 (this._renderManagerService = _0x19f3ad),
 q(this, "_historyUniver", null),
 q(this, "_opening", null),
 q(this, "_openGeneration", 0),
 q(this, "_sessionDisposables", new r.DisposableCollection()),
 q(this, "_container", null),
 q(this, "_ownsContainer", false),
 q(this, "_unitId", ""),
 q(this, "_location", undefined),
 q(this, "_suppressedHostUnitId", ""));
 }
 open(_0x2a3e1e) {
 if (this._historyUniver) return Promise.resolve();
 if (this._opening) return this._opening;
 let _0x40f439 = ++this._openGeneration,
 _0x3a3c87 = this._open(_0x2a3e1e, _0x40f439).finally(() => {
 this._opening === _0x3a3c87 && (this._opening = null);
 });
 return ((this._opening = _0x3a3c87), _0x3a3c87);
 }
 async _open(_0x519f60, _0x3b86d2) {
 let _0x4c9c4b = this._adapterRegistry["get"](
 r.UniverInstanceType["UNIVER_DOC"],
 );
 if (!_0x4c9c4b)
 throw Error(
 "[DocsHistoryLoaderService]:\x20Docs\x20history\x20adapter\x20is\x20not\x20registered.",
 );
 let _0x68eadf = _0x4c9c4b.captureLocation(_0x519f60),
 _0x1acc45 = await Promise.all([
 _0x4c9c4b.canView(_0x519f60),
 _0x4c9c4b.canRevert(_0x519f60),
 ]).catch((_0x34a1b5) => {
 if (_0x3b86d2 === this._openGeneration) throw _0x34a1b5;
 return null;
 });
 if (!_0x1acc45 || _0x3b86d2 !== this._openGeneration) return;
 let [_0x5b4748, _0x4189fe] = _0x1acc45;
 if (!_0x5b4748)
 throw Error(
 "[DocsHistoryLoaderService]: The current user cannot view history for this document.",
 );
 ((this._unitId = _0x519f60), (this._location = _0x68eadf));
 let _0x37a975 = this._ensureContainer(),
 _0x415b4d = this._localeService["getCurrentLocale"](),
 _0x30bfa0 = this._localeService["getLocales"](),
 _0xb96f35 = new r.Univer({
 theme: this._themeService["getCurrentTheme"](),
 darkMode: this._themeService["darkMode"],
 locale: _0x415b4d,
 locales: _0x30bfa0 ? { [_0x415b4d]: _0x30bfa0 } : undefined,
 direction: this._localeService["getDirection"](),
 override: [[r.IAuthzIoService, { useClass: e.AuthzIoHttpService }]],
 });
 this._historyUniver = _0xb96f35;
 try {
 (this._suppressHostMenus(_0x519f60),
 (_0x37a975.style["display"] = "block"),
 this._syncViewerServices(_0xb96f35, _0x37a975),
 this._registerChildPlugins(_0xb96f35, _0x4189fe, _0x37a975),
 this._createPlaceholderDocument(_0xb96f35));
 } catch (_0x3e7599) {
 throw (
 _0x3b86d2 === this._openGeneration
 ? this.close()
 : ((_0x37a975.style["display"] = "none"),
 this._restoreHostMenus(),
 _0xb96f35.dispose()),
 _0x3e7599
 );
 }
 }
 close() {
 (++this._openGeneration,
 (this._opening = null),
 this._sessionDisposables["dispose"]());
 let _0x4599f3 = this._historyUniver;
 ((this._historyUniver = null), _0x4599f3 == null || _0x4599f3.dispose());
 let _0x24a5a9 = this._container;
 (_0x24a5a9 && (_0x24a5a9.style["display"] = "none"),
 this._restoreHostMenus(),
 (this._unitId = ""),
 (this._location = undefined));
 }
 _syncViewerServices(_0x4e6f0d, _0x4f59ec) {
 let _0x102134 = _0x4e6f0d.__getInjector(),
 _0x159e76 = _0x102134.get(r.LocaleService),
 _0x58fda8 = _0x102134.get(r.ThemeService);
 (this._sessionDisposables["add"](
 this._themeService["darkMode$"].subscribe((_0x4b0368) => {
 _0x58fda8.setDarkMode(_0x4b0368);
 }),
 ),
 this._sessionDisposables["add"](
 this._themeService["currentTheme$"].subscribe((_0x2e30e2) => {
 _0x58fda8.setTheme(_0x2e30e2);
 }),
 ),
 this._sessionDisposables["add"](
 this._localeService["currentLocale$"].subscribe((_0x988f73) => {
 let _0x5194ad = this._localeService["getLocales"]();
 (_0x5194ad && _0x159e76.load({ [_0x988f73]: _0x5194ad }),
 _0x159e76.setLocale(_0x988f73));
 }),
 ),
 this._sessionDisposables["add"](
 this._localeService["direction$"].subscribe((_0x40e03a) => {
 (_0x159e76.setDirection(_0x40e03a),
 (_0x4f59ec.dir = _0x40e03a),
 (_0x4f59ec.style["direction"] = _0x40e03a));
 }),
 ));
 }
 async restore(_0x127ef5) {
 var _0x5a7d91;
 let _0x50f69f = this._unitId,
 _0x1c1edc = this._location,
 _0x2c3993 = this._collaborationController["getCollabEntity"](_0x50f69f);
 if (!_0x2c3993)
 throw Error(
 "[DocsHistoryLoaderService]: Collaboration is not ready for this document.",
 );
 let _0x30585e = new k.Subject(),
 _0x3feb07 = (0, k.firstValueFrom)(
 _0x2c3993.session["event$"].pipe(
 (0, k.filter)(
 (_0x37590c) =>
 _0x37590c.eventID === s.CollaborationEvent["CHANGESET_ACK"],
 ),
 (0, k.filter)((_0x351c6d) =>
 (0, C.isHistoryRestoreAcknowledgement)(_0x351c6d, _0x127ef5),
 ),
 (0, k.takeUntil)(_0x30585e),
 (0, k.timeout)(10000),
 ),
 );
 try {
 if (
 !(await this._restoreService["restore"](
 _0x50f69f,
 r.UniverInstanceType["UNIVER_DOC"],
 _0x127ef5,
 ))
 )
 throw Error(
 "[DocsHistoryLoaderService]: The restore command was not accepted.",
 );
 await _0x3feb07;
 } catch (_0x2274bb) {
 throw (
 _0x30585e.next(),
 await _0x3feb07.catch(() => undefined),
 _0x2274bb
 );
 } finally {
 _0x30585e.complete();
 }
 (this.close(),
 this._univerInstanceService["disposeUnit"](_0x50f69f),
 await this._dataLoaderService["loadUnit"](
 _0x50f69f,
 r.UniverInstanceType["UNIVER_DOC"],
 ),
 await ((_0x5a7d91 = this._adapterRegistry["get"](
 r.UniverInstanceType["UNIVER_DOC"],
 )) == null
 ? undefined
 : _0x5a7d91.restoreLocation(_0x50f69f, _0x1c1edc)));
 }
 _ensureContainer() {
 var _0x3f2c1a;
 if (this._container) return this._container;
 let _0x189a7e = this._configService["getConfig"](j),
 _0x167225 =
 (_0x3f2c1a = this._configService["getConfig"](
 o.UI_PLUGIN_CONFIG_KEY,
 )) == null
 ? undefined
 : _0x3f2c1a.container,
 _0x1c728b =
 (_0x189a7e == null ? undefined : _0x189a7e.univerContainerId) ??
 _0x167225,
 _0xb88e50 =
 typeof _0x1c728b == "string"
 ? document.getElementById(_0x1c728b)
 : _0x1c728b;
 if (!_0xb88e50)
 throw Error(
 "[DocsHistoryLoaderService]: Configure a valid Univer container before opening history.",
 );
 let _0x3d1272 = document.createElement("div");
 return (
 (_0x3d1272.style["position"] = "absolute"),
 (_0x3d1272.style["inset"] = "0"),
 (_0x3d1272.style["zIndex"] = "49"),
 (_0x3d1272.style["display"] = "none"),
 _0xb88e50.appendChild(_0x3d1272),
 (this._container = _0x3d1272),
 (this._ownsContainer = true),
 _0x3d1272
 );
 }
 _registerChildPlugins(_0x11f0d1, _0x5879fe, _0x2709ad) {
 let _0xc32a06 = this._configService["getConfig"](n.LS_CONFIG_KEY),
 _0xaac12d = this._configService["getConfig"](j),
 _0x2ce11b = [
 [
 n.UniverLicensePlugin,
 { license: _0xc32a06 == null ? undefined : _0xc32a06.ls },
 ],
 [O.UniverRenderEnginePlugin],
 [
 o.UniverUIPlugin,
 {
 container: _0x2709ad,
 header: true,
 toolbar: false,
 footer: true,
 contextMenu: false,
 },
 ],
 [ue.UniverNetworkPlugin],
 [ce.UniverDrawingPlugin],
 [le.UniverDrawingUIPlugin],
 [w.UniverDocsPlugin, { hasScroll: false }],
 [i.UniverDocsUIPlugin],
 [T.UniverDocsDrawingPlugin],
 [E.UniverDocsDrawingUIPlugin],
 [ae.UniverProFormulaEnginePlugin],
 [oe.UniverShapeEditorUIPlugin],
 [m.UniverDocsFormulaPlugin],
 [h.UniverDocsFormulaUIPlugin],
 [S.UniverDocsTablePlugin],
 [ie.UniverDocsTableUIPlugin],
 [c.UniverDocsCalloutPlugin],
 [l.UniverDocsCalloutUIPlugin],
 [f.UniverDocsCodePlugin],
 [ee.UniverDocsCodeUIPlugin],
 [y.UniverDocsQuotePlugin],
 [b.UniverDocsQuoteUIPlugin],
 [p.UniverDocsColumnPlugin],
 [te.UniverDocsColumnUIPlugin],
 [g.UniverDocsLatexPlugin],
 [ne.UniverDocsLatexUIPlugin],
 [_.UniverDocsListPlugin],
 [v.UniverDocsListUIPlugin],
 [x.UniverDocsShapePlugin],
 [re.UniverDocsShapeUIPlugin],
 [u.UniverDocsChartPlugin],
 [d.UniverDocsChartUIPlugin],
 [D.UniverDocsHyperLinkPlugin],
 [se.UniverDocsHyperLinkUIPlugin],
 [s.UniverCollaborationPlugin],
 [
 C.UniverEditHistoryPlugin,
 {
 historyServerUrl:
 _0xaac12d == null ? undefined : _0xaac12d.historyServerUrl,
 },
 ],
 [t.UniverDocsHistoryPlugin],
 ],
 _0x5ecd0e = new Set();
 ([
 ..._0x2ce11b,
 ...((_0xaac12d == null ? undefined : _0xaac12d.viewerPlugins) ?? []),
 ].forEach(([_0x4c6f96, _0x3567d9]) => {
 if (_0x5ecd0e.has(_0x4c6f96.pluginName))
 throw Error(
 "[DocsHistoryLoaderService]: Plugin " +
 _0x4c6f96.pluginName +
 " has already been registered.",
 );
 (_0x5ecd0e.add(_0x4c6f96.pluginName),
 _0x11f0d1.registerPlugin(_0x4c6f96, _0x3567d9));
 }),
 _0x11f0d1.registerPlugin(Y, {
 viewerMode: true,
 descriptor: {
 unitId: this._unitId,
 type: r.UniverInstanceType["UNIVER_DOC"],
 },
 canRestore: _0x5879fe,
 onClose: () => this.close(),
 onRestore: (_0x9e9868) => this.restore(_0x9e9868),
 collaborationClientConfig: this._configService["getConfig"](
 e.COLLABORATION_CLIENT_PLUGIN_CONFIG_KEY,
 ),
 }));
 }
 _createPlaceholderDocument(_0x78351b) {
 _0x78351b
 .createUnit(r.UniverInstanceType["UNIVER_DOC"], {
 id: this._unitId,
 body: {
 dataStream: "\x0d\x0a",
 paragraphs: [
 { startIndex: 0, paragraphId: (0, r.generateRandomId)() },
 ],
 sectionBreaks: [
 { startIndex: 1, sectionId: (0, r.generateRandomId)() },
 ],
 },
 documentStyle: {},
 })
 .setDisabled(true);
 }
 _suppressHostMenus(_0x4b8f11) {
 let _0x8a4eb5 = this._renderManagerService["getRenderUnitById"](_0x4b8f11);
 (_0x8a4eb5 == null ? undefined : _0x8a4eb5.type) ===
 r.UniverInstanceType["UNIVER_DOC"] &&
 ((this._suppressedHostUnitId = _0x4b8f11),
 _0x8a4eb5.with(i.DocFloatMenuService).setSuppressed(true),
 _0x8a4eb5.with(i.DocParagraphMenuService).hideParagraphMenu(true));
 }
 _restoreHostMenus() {
 let _0x27d3d8 = this._suppressedHostUnitId;
 if (((this._suppressedHostUnitId = ""), !_0x27d3d8)) return;
 let _0x52b477 = this._renderManagerService["getRenderUnitById"](_0x27d3d8);
 (_0x52b477 == null ? undefined : _0x52b477.type) ===
 r.UniverInstanceType["UNIVER_DOC"] &&
 _0x52b477.with(i.DocFloatMenuService).setSuppressed(false);
 }
 dispose() {
 if ((this.close(), this._ownsContainer)) {
 var _0x1a7d8a;
 (_0x1a7d8a = this._container) == null || _0x1a7d8a.remove();
 }
 ((this._container = null), (this._ownsContainer = false), super.dispose());
 }
};
X = I(
 [
 F(0, r.IConfigService),
 F(1, (0, r.Inject)(C.HistoryRestoreService)),
 F(2, (0, r.Inject)(C.HistoryUnitAdapterRegistryService)),
 F(3, (0, r.Inject)(r.LocaleService)),
 F(4, (0, r.Inject)(r.ThemeService)),
 F(5, (0, r.Inject)(e.CollaborationController)),
 F(6, (0, r.Inject)(e.DataLoaderService)),
 F(7, r.IUniverInstanceService),
 F(8, O.IRenderManagerService),
 ],
 X,
);
const Z = {
 id: "docs-history-ui.operation.open",
 type: r.CommandType["OPERATION"],
 handler: (_0x3f5143) => {
 let _0x1ec067 = _0x3f5143
 .get(r.IUniverInstanceService)
 .getCurrentUnitOfType(r.UniverInstanceType["UNIVER_DOC"]);
 return _0x1ec067
 ? (_0x3f5143
 .get(X)
 .open(_0x1ec067.getUnitId())
 .catch((_0x28c1a1) => {
 _0x3f5143
 .get(r.ILogService)
 .error(
 "[OpenDocsHistoryOperation]: Failed to open document history.",
 _0x28c1a1,
 );
 }),
 true)
 : false;
 },
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
 showLabel: true,
 },
 menuItemFactory: he,
 },
 },
 };
function he(_0x42f0b1) {
 return {
 id: Z.id,
 type: o.MenuItemType["BUTTON"],
 icon: "DocsHistoryIcon",
 title: "docs-history-ui.menu.history",
 tooltip: "docs-history-ui.menu.history",
 hidden$: (0, o.getMenuHiddenObservable)(
 _0x42f0b1,
 r.UniverInstanceType["UNIVER_DOC"],
 ),
 };
}
let Q = class extends r.Disposable {
 constructor(_0x2c904e, _0x16a2dd) {
 (super(),
 this.disposeWithMe(_0x2c904e.registerCommand(Z)),
 _0x16a2dd.mergeMenu(me));
 }
};
Q = I([F(0, r.ICommandService), F(1, o.IMenuManagerService)], Q);
let $ = class extends r.Plug in {
 constructor(_0x373b7b = M, _0x4a1dca, _0x1821fd) {
 (super(),
 (this._config = _0x373b7b),
 (this._injector = _0x4a1dca),
 (this._configService = _0x1821fd));
 let { ..._0x481974 } = (0, r.merge)({}, M, this._config);
 this._configService["setConfig"](j, _0x481974);
 }
 onStarting() {
 ((0, r.registerDependencies)(this._injector, [[L], [X], [Q]]),
 this._injector["get"](L),
 this._injector["get"](Q));
 }
};
(q($, "pluginName", "UNIVER_DOCS_HISTORY_UI_PLUGIN"),
 q($, "packageName", N),
 q($, "version", P),
 q($, "type", r.UniverInstanceType["UNIVER_DOC"]),
 ($ = I(
 [
 (0, r.DependentOn)(
 n.UniverLicensePlugin,
 e.UniverCollaborationClientPlugin,
 t.UniverDocsHistoryPlugin,
 i.UniverDocsUIPlugin,
 ),
 F(1, (0, r.Inject)(r.Injector)),
 F(2, r.IConfigService),
 ],
 $,
 )),
 (exports.DOCS_HISTORY_UI_PLUGIN_CONFIG_KEY = j),
 Object.defineProperty(exports, "UniverDocsHistoryUIPlugin", {
 enumerable: true,
 get: function () {
 return $;
 },
 }));
