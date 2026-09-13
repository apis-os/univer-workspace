import { AuthzIoHttpService, COLLABORATION_CLIENT_PLUGIN_CONFIG_KEY, CollaborationController, DataLoaderService, SnapshotServerOverHTTPService, UniverCollaborationClientPlugin } from "@univerjs-pro/collaboration-client";
import { DocsHistoryDiffService, UniverDocsHistoryPlugin, createDocHistoryDisplay } from "@univerjs-pro/docs-history";
import { LS_CONFIG_KEY, UniverLicensePlugin } from "@univerjs-pro/license";
import { CommandType, DependentOn, Disposable, DisposableCollection, IAuthzIoService, ICommandService, IConfigService, ILogService, IResourceLoaderService, IUniverInstanceService, Inject, Injector, LocaleService, Plugin, ThemeService, Univer, UniverInstanceType, generateRandomId, merge, registerDependencies } from "@univerjs/core";
import { AfterSpaceCommand, AlignOperationCommand, BreakLineCommand, ChangeListNestingLevelCommand, ChangeListTypeCommand, CoverContentCommand, CreateDocTableCommand, CutContentCommand, DeleteCurrentParagraphCommand, DeleteCustomBlockCommand, DeleteLeftCommand, DeleteRightCommand, DocFloatMenuService, DocParagraphMenuService, DocTableDeleteColumnsCommand, DocTableDeleteRowsCommand, DocTableDeleteTableCommand, DocTableInsertColumnCommand, DocTableInsertRowCommand, DocTableTabCommand, EnterCommand, HorizontalLineCommand, IMEInputCommand, InnerPasteCommand, ListOperationCommand, MergeTwoParagraphCommand, MoveDocBlockCommand, ReplaceSelectionCommand, ReplaceSnapshotCommand, ReplaceTextRunsCommand, SetInlineFormatCommand, SetParagraphNamedStyleCommand, TabCommand, ToggleCheckListCommand, UniverDocsUIPlugin } from "@univerjs/docs-ui";
import { HistoryIcon } from "@univerjs/icons";
import { IMenuManagerService, IconManager, MenuItemType, RibbonStartGroup, UI_PLUGIN_CONFIG_KEY, UniverUIPlugin, getMenuHiddenObservable } from "@univerjs/ui";
import { CollaborationEvent, ISnapshotServerService, SnapshotService, UniverCollaborationPlugin } from "@univerjs-pro/collaboration";
import { DocsCalloutCancelEmptyParagraphCommand, DocsCalloutConsumeBoundaryDeleteCommand, DocsCalloutDeleteCommand, DocsCalloutInsertBelowCommand, DocsCalloutInsertCommand, DocsCalloutResetColorsCommand, DocsCalloutSetTextColorCommand, DocsCalloutUnwrapCommand, DocsCalloutUpdateCommand, UniverDocsCalloutPlugin } from "@univerjs-pro/docs-callout";
import { UniverDocsCalloutUIPlugin } from "@univerjs-pro/docs-callout-ui";
import { ChangeDocChartDataSourceCommand, DuplicateDocChartDataSourceCommand, InsertDocChartCommand, RemoveDocChartCommand, RemoveDocChartSnapshotMutation, UniverDocsChartPlugin, UpdateDocChartConfigCommand, UpdateDocChartDataSourceCommand, UpdateDocChartDrawingCommand, UpdateDocChartSnapshotCommand } from "@univerjs-pro/docs-chart";
import { UniverDocsChartUIPlugin } from "@univerjs-pro/docs-chart-ui";
import { DocsCodeCancelEmptyParagraphCommand, DocsCodeConsumeBoundaryDeleteCommand, DocsCodeInsertCommand, DocsCodeRemoveCommand, DocsCodeUnwrapCommand, DocsCodeUpdateCommand, UniverDocsCodePlugin } from "@univerjs-pro/docs-code";
import { UniverDocsCodeUIPlugin } from "@univerjs-pro/docs-code-ui";
import { AddDocColumnCommand, DeleteDocColumnCommand, DeleteDocColumnGroupCommand, InsertDocColumnGroupCommand, NormalizeDocColumnGroupCommand, ResizeDocColumnGroupCommand, UniverDocsColumnPlugin } from "@univerjs-pro/docs-column";
import { UniverDocsColumnUIPlugin } from "@univerjs-pro/docs-column-ui";
import { ConvertDocFormulaToTextCommand, InsertDocFormulaCommand, RemoveDocFormulaCommand, ReplaceDocFormulaWithTextCommand, SetDocFormulaNumberFormatCommand, UniverDocsFormulaPlugin, UpdateDocFormulaCommand } from "@univerjs-pro/docs-formula";
import { UniverDocsFormulaUIPlugin } from "@univerjs-pro/docs-formula-ui";
import { InsertDocsLatexFormulaCommand, RemoveDocsLatexFormulaCommand, ReplaceDocsLatexFormulaWithTextCommand, UniverDocsLatexPlugin, UpdateDocsLatexFormulaCommand } from "@univerjs-pro/docs-latex";
import { UniverDocsLatexUIPlugin } from "@univerjs-pro/docs-latex-ui";
import { DocsListDemoteCommand, DocsListInsertCommand, DocsListPromoteCommand, DocsListSetGlyphSymbolCommand, DocsListSetGlyphTypeCommand, DocsListSetPrefixSuffixCommand, DocsListSetStartNumberCommand, UniverDocsListPlugin } from "@univerjs-pro/docs-list";
import { UniverDocsListUIPlugin } from "@univerjs-pro/docs-list-ui";
import { DocsQuoteCancelEmptyParagraphCommand, DocsQuoteExitCommand, DocsQuoteInsertBelowCommand, DocsQuoteInsertCommand, DocsQuoteRemoveCommand, DocsQuoteUnwrapCommand, DocsQuoteUpdateStyleCommand, UniverDocsQuotePlugin } from "@univerjs-pro/docs-quote";
import { UniverDocsQuoteUIPlugin } from "@univerjs-pro/docs-quote-ui";
import { InsertDocShapeCommand, UniverDocsShapePlugin, UpdateDocDrawingMetadataCommand, UpdateDocShapeDataCommand } from "@univerjs-pro/docs-shape";
import { UniverDocsShapeUIPlugin } from "@univerjs-pro/docs-shape-ui";
import { DocsTableDeleteColumnsCommand, DocsTableDeleteRowsCommand, DocsTableDeleteTableCommand, DocsTableDistributeColumnsCommand, DocsTableDistributeRowsCommand, DocsTableInsertColumnsCommand, DocsTableInsertRowsCommand, DocsTableInsertTableCommand, DocsTableInsertTitleRowCommand, DocsTableMergeCellsCommand, DocsTableMoveColumnsCommand, DocsTableMoveRowsCommand, DocsTableMoveTableCommand, DocsTableResizeColumnCommand, DocsTableResizeRowCommand, DocsTableSetColumnTypeCommand, DocsTableSetHeaderRowCountCommand, DocsTableSetTableBackgroundCommand, DocsTableSetTableBorderColorCommand, DocsTableSetTableBorderCommand, DocsTableSetTableBorderStyleCommand, DocsTableSetTableBorderWidthCommand, DocsTableSetTableVerticalAlignCommand, DocsTableSortTableCommand, DocsTableUnmergeCellsCommand, UniverDocsTablePlugin } from "@univerjs-pro/docs-table";
import { UniverDocsTableUIPlugin } from "@univerjs-pro/docs-table-ui";
import { HistoryRestoreService, HistoryUnitAdapterRegistryService, UniverEditHistoryPlugin, isHistoryRestoreAcknowledgement } from "@univerjs-pro/edit-history";
import { UniverProFormulaEnginePlugin } from "@univerjs-pro/engine-formula";
import { UniverShapeEditorUIPlugin } from "@univerjs-pro/shape-editor-ui";
import { CreateHeaderFooterCommand, DeleteDocumentSectionBreakCommand, DeleteTextCommand, DocHistoryAction, InsertDocumentColumnBreakCommand, InsertDocumentSectionBreakCommand, InsertTextCommand, RichTextEditingMutation, SetDocumentDefaultParagraphStyleCommand, SetDocumentNameCommand, SetSectionHeaderFooterLinkCommand, UniverDocsPlugin, UpdateDocumentParagraphStyleCommand, UpdateDocumentSectionCommand, UpdateTextCommand } from "@univerjs/docs";
import { InsertDocDrawingCommand, RemoveDocDrawingCommand, SetDocDrawingArrangeCommand, UniverDocsDrawingPlugin, UpdateDocDrawingWrappingStyleCommand, UpdateDrawingDocTransformCommand } from "@univerjs/docs-drawing";
import { UniverDocsDrawingUIPlugin } from "@univerjs/docs-drawing-ui";
import { DocHyperLinkCommandId, UniverDocsHyperLinkPlugin } from "@univerjs/docs-hyper-link";
import { UniverDocsHyperLinkUIPlugin } from "@univerjs/docs-hyper-link-ui";
import { UniverDrawingPlugin } from "@univerjs/drawing";
import { UniverDrawingUIPlugin } from "@univerjs/drawing-ui";
import { IRenderManagerService, UniverRenderEnginePlugin } from "@univerjs/engine-render";
import { UniverNetworkPlugin } from "@univerjs/network";
import { Subject, filter, firstValueFrom, takeUntil, timeout } from "rxjs";
import { HistoryActionSummaryService, HistoryHighlightService, HistoryRenderAdapterRegistryService, UniverEditHistoryUIPlugin } from "@univerjs-pro/edit-history-ui";
import { J, Q, U, W, X, Y, q, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281 } from "./docs-history-ui-docs-history-uiplugin.js";
var Tr = "@univerjs-pro/docs-history-ui",
  Er = "1.0.0-insiders.20260907-70fc579";
function V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46227, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228) {
  return function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46227);
  };
}
function H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235 = arguments.length,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234 === null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234 = Object.getOwnPropertyDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46237;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236 = Reflect.decorate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234);else {
    for (var var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231.length - 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D >= 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D--) (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46237 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D]) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46237(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235 > 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46237(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46237(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233)) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236);
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235 > 3 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236 && Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236;
}
U = H([V(0, Inject(IconManager))], U);
W = H([V(0, Inject(HistoryActionSummaryService)), V(1, Inject(LocaleService))], W);
J = H([V(0, Inject(DocsHistoryDiffService)), V(1, Inject(HistoryRenderAdapterRegistryService)), V(2, Inject(SnapshotService)), V(3, IResourceLoaderService), V(4, IUniverInstanceService), V(5, Inject(HistoryHighlightService))], J);
q(Y, "pluginName", "UNIVER_DOCS_HISTORY_VIEWER_PLUGIN"), q(Y, "packageName", Tr), q(Y, "version", Er), q(Y, "type", UniverInstanceType.UNIVER_UNKNOWN), Y = H([DependentOn(UniverLicensePlugin, UniverDocsHistoryPlugin, UniverDocsUIPlugin), V(1, Inject(Injector)), V(2, IConfigService), V(3, ILogService)], Y);
X = H([V(0, IConfigService), V(1, Inject(HistoryRestoreService)), V(2, Inject(HistoryUnitAdapterRegistryService)), V(3, Inject(LocaleService)), V(4, Inject(ThemeService)), V(5, Inject(CollaborationController)), V(6, Inject(DataLoaderService)), V(7, IUniverInstanceService), V(8, IRenderManagerService)], X);
Q = H([V(0, ICommandService), V(1, IMenuManagerService)], Q);
q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281, "pluginName", "UNIVER_DOCS_HISTORY_UI_PLUGIN"), q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281, "packageName", Tr), q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281, "version", Er), q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281, "type", UniverInstanceType.UNIVER_DOC), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281 = H([DependentOn(UniverLicensePlugin, UniverCollaborationClientPlugin, UniverDocsHistoryPlugin, UniverDocsUIPlugin), V(1, Inject(Injector)), V(2, IConfigService)], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281);
