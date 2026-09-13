import { BoardsHistoryDiffService, UniverBoardsHistoryPlugin } from "@univerjs-pro/boards-history";
import { BoardWorkbench, IBoardSettingsMenuContributionService, UniverBoardsUIPlugin, getBoardElementRenderObjectKey } from "@univerjs-pro/boards-ui";
import { AuthzIoHttpService, COLLABORATION_CLIENT_PLUGIN_CONFIG_KEY, CollaborationController, CollaborationImageIoService, DataLoaderService, SnapshotServerOverHTTPService, UniverCollaborationClientPlugin } from "@univerjs-pro/collaboration-client";
import { LS_CONFIG_KEY, UniverLicensePlugin } from "@univerjs-pro/license";
import { CommandType, DependentOn, Disposable, DisposableCollection, IAuthzIoService, ICommandService, IConfigService, IImageIoService, ILogService, IUniverInstanceService, Inject, Injector, LocaleService, Plugin, ThemeService, Univer, UniverInstanceType, merge, registerDependencies } from "@univerjs/core";
import { HistoryIcon } from "@univerjs/icons";
import { AddBoardElementMutation, AddBoardElementOperation, AddBoardElementsOperation, BeginBoardContainerOperation, BeginBoardSwimlaneOperation, BoardElementType, CommitBoardContainerTransformOperation, DisbandBoardContainerOperation, FitBoardContainerToContentOperation, InsertBoardChartCommand, InsertBoardTableOperation, NormalizeBoardConnectorRoutingCommand, RemoveBoardConnectorLabelCommand, RemoveBoardElementCommand, RemoveBoardElementMutation, RemoveBoardElementOperation, RemoveBoardElementsOperation, RemoveBoardSwimlaneLaneOperation, ReorderBoardElementsOperation, ReorderBoardObjectListElementOperation, ReparentBoardElementsOperation, SetBoardConnectorLabelStyleCommand, SetBoardConnectorLabelTextCommand, SetBoardContainerAutoResizeOperation, SetBoardContainerMembershipLockOperation, SetBoardElementsMetadataOperation, SetBoardNameCommand, SetBoardPageBackgroundCommand, SetBoardSwimlaneLaneSizeOperation, SetBoardSwimlaneLanesOperation, SetBoardThemeOperation, UniverBoardsPlugin, UpdateBoardElementCommand, UpdateBoardElementMutation, UpdateBoardElementsCommand, WrapBoardElementsInContainerOperation, getBoardsEmptySnapshot } from "@univerjs-pro/boards";
import { ChangeBoardChartDataSourceCommand, DuplicateBoardChartDataSourceCommand, UniverBoardsChartPlugin, UpdateBoardChartConfigCommand, UpdateBoardChartDataSourceCommand } from "@univerjs-pro/boards-chart";
import { UniverBoardsChartUIPlugin } from "@univerjs-pro/boards-chart-ui";
import { AddMindMapChildOperation, AddMindMapSiblingOperation, ChangeMindMapBranchLineTypeOperation, ChangeMindMapLayoutOperation, DeleteMindMapNodeOperation, DetachMindMapNodeOperation, ImportMindMapOpmlOperation, InsertBoardMindMapOperation, LayoutMindMapOperation, PasteMindMapAsNewMindMapOperation, PasteMindMapNodeOperation, PromoteMindMapNodeOperation, ReflowMindMapCommand, ReparentMindMapNodeOperation, SetMindMapElementMutation, ToggleMindMapNodeCollapseOperation, TranslateMindMapOperation, UniverBoardsMindPlugin, UpdateMindMapIncomingConnectorOperation, UpdateMindMapNodeOperation, UpdateMindMapNodesOperation, getMindMapContainerMeta, getMindMapNodeMeta } from "@univerjs-pro/boards-mind";
import { UniverBoardsMindUIPlugin } from "@univerjs-pro/boards-mind-ui";
import { DeleteBoardTableColumnsCommand, DeleteBoardTableRowsCommand, InsertBoardTableColumnsCommand, InsertBoardTableRowsCommand, MergeBoardTableCellsCommand, MoveBoardTableColumnsCommand, MoveBoardTableRowsCommand, RemoveBoardTableCommand, ResizeBoardTableColumnsCommand, ResizeBoardTableRowsCommand, SetBoardTableBorderPresetCommand, SetBoardTableCellStyleCommand, SetBoardTableCellTextCommand, UniverBoardsTablePlugin, UnmergeBoardTableCellsCommand, UpdateBoardTableCommand } from "@univerjs-pro/boards-table";
import { UniverBoardsTableUIPlugin } from "@univerjs-pro/boards-table-ui";
import { CollaborationEvent, ISnapshotServerService, SnapshotService, UniverCollaborationPlugin } from "@univerjs-pro/collaboration";
import { UniverDocsLatexPlugin } from "@univerjs-pro/docs-latex";
import { UniverDocsLatexUIPlugin } from "@univerjs-pro/docs-latex-ui";
import { HistoryRestoreService, HistoryUnitAdapterRegistryService, UniverEditHistoryPlugin, isHistoryRestoreAcknowledgement } from "@univerjs-pro/edit-history";
import { UniverInkPlugin } from "@univerjs-pro/ink";
import { UniverInkUIPlugin } from "@univerjs-pro/ink-ui";
import { UniverDocsPlugin } from "@univerjs/docs";
import { UniverDocsUIPlugin } from "@univerjs/docs-ui";
import { UniverDrawingPlugin } from "@univerjs/drawing";
import { UniverRenderEnginePlugin } from "@univerjs/engine-render";
import { UniverNetworkPlugin } from "@univerjs/network";
import { BuiltInUIPart, IUIPartsService, UI_PLUGIN_CONFIG_KEY, UniverUIPlugin, connectInjector } from "@univerjs/ui";
import { Subject, filter, firstValueFrom, takeUntil, timeout } from "rxjs";
import { HistoryActionSummaryService, HistoryCanvasHighlightService, HistoryRenderAdapterRegistryService, UniverEditHistoryUIPlugin } from "@univerjs-pro/edit-history-ui";
import { jsx } from "react/jsx-runtime";
import { F, I } from "./boards-history-ui-plugin-config-key.js";
function ln() {
  return jsx(BoardWorkbench, {
    embedded: true,
    fitOnMount: true
  });
}
let V = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636) {
    super(), this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636.registerComponent(BuiltInUIPart.CONTENT, () => connectInjector(ln, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635)));
  }
};
const un = new Map([[SetBoardNameCommand.id, "boards-history-ui.action.renameBoard"], [SetBoardPageBackgroundCommand.id, "boards-history-ui.action.updateBackground"], [SetBoardThemeOperation.id, "boards-history-ui.action.updateTheme"], [AddBoardElementOperation.id, "boards-history-ui.action.insertObject"], [AddBoardElementsOperation.id, "boards-history-ui.action.insertObject"], [RemoveBoardElementCommand.id, "boards-history-ui.action.deleteObject"], [RemoveBoardElementsOperation.id, "boards-history-ui.action.deleteObject"], [UpdateBoardElementCommand.id, "boards-history-ui.action.updateObject"], [UpdateBoardElementsCommand.id, "boards-history-ui.action.updateObject"], [ReorderBoardElementsOperation.id, "boards-history-ui.action.reorderObject"], [ReorderBoardObjectListElementOperation.id, "boards-history-ui.action.reorderObject"], [ReparentBoardElementsOperation.id, "boards-history-ui.action.moveObject"], [SetBoardElementsMetadataOperation.id, "boards-history-ui.action.updateObject"], [SetBoardConnectorLabelTextCommand.id, "boards-history-ui.action.updateConnector"], [SetBoardConnectorLabelStyleCommand.id, "boards-history-ui.action.updateConnector"], [RemoveBoardConnectorLabelCommand.id, "boards-history-ui.action.updateConnector"], [NormalizeBoardConnectorRoutingCommand.id, "boards-history-ui.action.updateConnector"], [BeginBoardContainerOperation.id, "boards-history-ui.action.insertContainer"], [WrapBoardElementsInContainerOperation.id, "boards-history-ui.action.insertContainer"], [DisbandBoardContainerOperation.id, "boards-history-ui.action.deleteContainer"], [CommitBoardContainerTransformOperation.id, "boards-history-ui.action.updateContainer"], [FitBoardContainerToContentOperation.id, "boards-history-ui.action.updateContainer"], [SetBoardContainerAutoResizeOperation.id, "boards-history-ui.action.updateContainer"], [SetBoardContainerMembershipLockOperation.id, "boards-history-ui.action.updateContainer"], [BeginBoardSwimlaneOperation.id, "boards-history-ui.action.insertSwimlane"], [SetBoardSwimlaneLanesOperation.id, "boards-history-ui.action.updateSwimlane"], [SetBoardSwimlaneLaneSizeOperation.id, "boards-history-ui.action.updateSwimlane"], [RemoveBoardSwimlaneLaneOperation.id, "boards-history-ui.action.updateSwimlane"], [InsertBoardMindMapOperation.id, "boards-history-ui.action.insertMindMap"], [ImportMindMapOpmlOperation.id, "boards-history-ui.action.insertMindMap"], [PasteMindMapAsNewMindMapOperation.id, "boards-history-ui.action.insertMindMap"], [AddMindMapChildOperation.id, "boards-history-ui.action.insertMindMapNode"], [AddMindMapSiblingOperation.id, "boards-history-ui.action.insertMindMapNode"], [PasteMindMapNodeOperation.id, "boards-history-ui.action.insertMindMapNode"], [DeleteMindMapNodeOperation.id, "boards-history-ui.action.deleteMindMapNode"], [UpdateMindMapNodeOperation.id, "boards-history-ui.action.updateMindMap"], [UpdateMindMapNodesOperation.id, "boards-history-ui.action.updateMindMap"], [UpdateMindMapIncomingConnectorOperation.id, "boards-history-ui.action.updateMindMap"], [ChangeMindMapLayoutOperation.id, "boards-history-ui.action.updateMindMapLayout"], [LayoutMindMapOperation.id, "boards-history-ui.action.updateMindMapLayout"], [ChangeMindMapBranchLineTypeOperation.id, "boards-history-ui.action.updateMindMapLayout"], [ReflowMindMapCommand.id, "boards-history-ui.action.updateMindMapLayout"], [ReparentMindMapNodeOperation.id, "boards-history-ui.action.moveMindMapNode"], [PromoteMindMapNodeOperation.id, "boards-history-ui.action.moveMindMapNode"], [DetachMindMapNodeOperation.id, "boards-history-ui.action.moveMindMapNode"], [TranslateMindMapOperation.id, "boards-history-ui.action.moveMindMapNode"], [ToggleMindMapNodeCollapseOperation.id, "boards-history-ui.action.updateMindMap"], [InsertBoardTableOperation.id, "boards-history-ui.action.insertTable"], [RemoveBoardTableCommand.id, "boards-history-ui.action.deleteTable"], [InsertBoardTableRowsCommand.id, "boards-history-ui.action.insertTableRows"], [DeleteBoardTableRowsCommand.id, "boards-history-ui.action.deleteTableRows"], [MoveBoardTableRowsCommand.id, "boards-history-ui.action.moveTableRows"], [ResizeBoardTableRowsCommand.id, "boards-history-ui.action.resizeTableRows"], [InsertBoardTableColumnsCommand.id, "boards-history-ui.action.insertTableColumns"], [DeleteBoardTableColumnsCommand.id, "boards-history-ui.action.deleteTableColumns"], [MoveBoardTableColumnsCommand.id, "boards-history-ui.action.moveTableColumns"], [ResizeBoardTableColumnsCommand.id, "boards-history-ui.action.resizeTableColumns"], [MergeBoardTableCellsCommand.id, "boards-history-ui.action.mergeTableCells"], [UnmergeBoardTableCellsCommand.id, "boards-history-ui.action.unmergeTableCells"], [SetBoardTableCellTextCommand.id, "boards-history-ui.action.editTableCell"], [SetBoardTableCellStyleCommand.id, "boards-history-ui.action.formatTable"], [SetBoardTableBorderPresetCommand.id, "boards-history-ui.action.formatTable"], [UpdateBoardTableCommand.id, "boards-history-ui.action.updateTable"], [InsertBoardChartCommand.id, "boards-history-ui.action.insertChart"], [ChangeBoardChartDataSourceCommand.id, "boards-history-ui.action.updateChart"], [DuplicateBoardChartDataSourceCommand.id, "boards-history-ui.action.updateChart"], [UpdateBoardChartDataSourceCommand.id, "boards-history-ui.action.updateChart"], [UpdateBoardChartConfigCommand.id, "boards-history-ui.action.updateChart"]]),
  H = new Map([[BoardElementType.Text, {
    insert: "boards-history-ui.action.insertTextBox",
    update: "boards-history-ui.action.updateTextBox",
    delete: "boards-history-ui.action.deleteTextBox"
  }], [BoardElementType.Shape, {
    insert: "boards-history-ui.action.insertShape",
    update: "boards-history-ui.action.updateShape",
    delete: "boards-history-ui.action.deleteShape"
  }], [BoardElementType.Image, {
    insert: "boards-history-ui.action.insertImage",
    update: "boards-history-ui.action.updateImage",
    delete: "boards-history-ui.action.deleteImage"
  }], [BoardElementType.Diagram, {
    insert: "boards-history-ui.action.insertDiagram",
    update: "boards-history-ui.action.updateDiagram",
    delete: "boards-history-ui.action.deleteDiagram"
  }], [BoardElementType.Media, {
    insert: "boards-history-ui.action.insertMedia",
    update: "boards-history-ui.action.updateMedia",
    delete: "boards-history-ui.action.deleteMedia"
  }], [BoardElementType.Group, {
    insert: "boards-history-ui.action.insertGroup",
    update: "boards-history-ui.action.updateGroup",
    delete: "boards-history-ui.action.deleteGroup"
  }], [BoardElementType.Connector, {
    insert: "boards-history-ui.action.insertConnector",
    update: "boards-history-ui.action.updateConnector",
    delete: "boards-history-ui.action.deleteConnector"
  }], [BoardElementType.Table, {
    insert: "boards-history-ui.action.insertTable",
    update: "boards-history-ui.action.updateTable",
    delete: "boards-history-ui.action.deleteTable"
  }], [BoardElementType.Chart, {
    insert: "boards-history-ui.action.insertChart",
    update: "boards-history-ui.action.updateChart",
    delete: "boards-history-ui.action.deleteChart"
  }]]),
  dn = new Set([AddBoardElementMutation.id, AddBoardElementOperation.id, AddBoardElementsOperation.id]),
  fn = new Set([UpdateBoardElementCommand.id, UpdateBoardElementMutation.id, UpdateBoardElementsCommand.id]),
  pn = new Set([RemoveBoardElementCommand.id, RemoveBoardElementMutation.id, RemoveBoardElementOperation.id, RemoveBoardElementsOperation.id]);
let U = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640) {
    super(), this._localeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640, this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639.register(UniverInstanceType.UNIVER_BOARD, this));
  }
  resolve(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643) {
    let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299 = new Set(W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643, AddBoardElementMutation.id).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.id)),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644 = hn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645 = gn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643, var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646 = mn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A = [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646].map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461 => this._localeService["t"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461)),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1 = [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643.commandIds].flatMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462 => {
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644.length > 0 && dn.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645.length > 0 && fn.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646.length > 0 && pn.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462)) return [];
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 = un.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462);
        return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 ? [this._localeService["t"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463)] : [];
      }),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2 = [...new Set([...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A, ...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1])];
    return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2.length > 0 ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643.commandIds["has"](SetMindMapElementMutation.id) ? [this._localeService["t"]("boards-history-ui.action.updateMindMap")] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643.commandIds["has"](AddBoardElementMutation.id) ? [this._localeService["t"]("boards-history-ui.action.insertObject")] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643.commandIds["has"](RemoveBoardElementMutation.id) ? [this._localeService["t"]("boards-history-ui.action.deleteObject")] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643.commandIds["has"](UpdateBoardElementMutation.id) ? [this._localeService["t"]("boards-history-ui.action.updateObject")] : [];
  }
};
function mn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46246 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245.mutations["flatMap"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651 => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651.id !== RemoveBoardElementMutation.id || !G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651.params)) return [];
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651.params["elementType"] === BoardElementType.Container) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651.params["containerKind"] === "swimlane" ? ["boards-history-ui.action.deleteSwimlane"] : ["boards-history-ui.action.deleteContainer"];
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653 = vn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651.params["elementType"]) ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652 = H.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651.params["elementType"])) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652.delete : undefined;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653 ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653] : [];
  });
  return [...new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46246)];
}
function hn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A10 = W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249, AddBoardElementMutation.id).flatMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657 => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658;
    if (getMindMapContainerMeta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657)) return ["boards-history-ui.action.insertMindMap"];
    if (getMindMapNodeMeta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657)) return ["boards-history-ui.action.insertMindMapNode"];
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657.type === BoardElementType.Container) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657.containerData["kind"] === "swimlane" ? ["boards-history-ui.action.insertSwimlane"] : ["boards-history-ui.action.insertContainer"];
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658 = H.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657.type)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658.insert;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659 ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659] : [];
  });
  return [...new Set(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A10)];
}
function gn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12 = [...W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251, SetMindMapElementMutation.id), ...W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251, UpdateBoardElementMutation.id)].filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663 => !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663.id)).flatMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664 => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665;
    if (getMindMapContainerMeta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664) || getMindMapNodeMeta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664)) return ["boards-history-ui.action.updateMindMap"];
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664.type === BoardElementType.Container) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664.containerData["kind"] === "swimlane" ? ["boards-history-ui.action.updateSwimlane"] : ["boards-history-ui.action.updateContainer"];
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665 = H.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664.type)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665.update;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666 ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666] : [];
  });
  return [...new Set(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12)];
}
function W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46255, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46255.mutations["flatMap"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670.id !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256 || !G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670.params) || !fn_L0_core_pred_routine_pure_O1_zalloc_nothrow_sig3B80(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670.params["element"]) ? [] : [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670.params["element"]]);
}
function fn_L0_core_pred_routine_pure_O1_zalloc_nothrow_sig3B80(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259) {
  if (!G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259) || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259.id != "string" || !G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259.transform)) return false;
  switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259.type) {
    case BoardElementType.Placeholder:
    case BoardElementType.Text:
    case BoardElementType.Shape:
    case BoardElementType.Image:
    case BoardElementType.Chart:
    case BoardElementType.Table:
    case BoardElementType.Diagram:
    case BoardElementType.Media:
    case BoardElementType.Group:
    case BoardElementType.Connector:
    case BoardElementType.Container:
      return true;
    default:
      return false;
  }
}
function vn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261) {
  switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261) {
    case BoardElementType.Placeholder:
    case BoardElementType.Text:
    case BoardElementType.Shape:
    case BoardElementType.Image:
    case BoardElementType.Chart:
    case BoardElementType.Table:
    case BoardElementType.Diagram:
    case BoardElementType.Media:
    case BoardElementType.Group:
    case BoardElementType.Connector:
    case BoardElementType.Container:
      return true;
    default:
      return false;
  }
}
function G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46263) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46263 == "object" && !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46263;
}
function K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265) {
  "@babel/helpers - typeof";

  return K = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671) {
    return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671;
  } : function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673 && typeof Symbol == "function" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673.constructor === Symbol && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673 !== Symbol.prototype ? "symbol" : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673;
  }, K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265);
}
function yn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268) {
  if (K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267) != "object" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267;
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46269 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267[Symbol.toPrimitive];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46269 !== undefined) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46269.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268 || "default");
    if (K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270) != "object") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268 === "string" ? String : Number)(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267);
}
function bn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46275) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276 = yn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46275, "string");
  return K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276) == "symbol" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276 + "";
}
function q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280 = bn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280)) in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279 ? Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280, {
    value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279;
}
let J = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679) {
    super(), this._diffService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675, this._snapshotService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677, this._univerInstanceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678, this._highlightService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679, q(this, "type", UniverInstanceType.UNIVER_BOARD), q(this, "_changes", new Map()), q(this, "_changesGeneration", 0), q(this, "_loadGeneration", 0), q(this, "_loadQueue", Promise.resolve()), q(this, "_unitId", ""), this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676.register(this));
  }
  loadRevision(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687 = ++this._loadGeneration,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688 = this._loadQueue["catch"](() => undefined).then(async () => {
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687 !== this._loadGeneration) return;
        this._getBoard(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685) && this._univerInstanceService["disposeUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685);
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466 = await this._snapshotService["loadBoard"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686.endRevision);
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687 !== this._loadGeneration) {
          this._getBoard(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466 && this._univerInstanceService["disposeUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685);
          return;
        }
        this._univerInstanceService["focusUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685);
      });
    return this._loadQueue = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688;
  }
  async loadChanges(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694) {
    this._unitId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695 = ++this._changesGeneration,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696 = await this._diffService["compare"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695 === this._changesGeneration && (this._changes["clear"](), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468 => this._changes["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468)), await this._renderHighlights(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693));
  }
  close() {
    ++this._changesGeneration, ++this._loadGeneration, this._changes["clear"](), this._unitId &&= (this._highlightService["clear"](this._unitId), "");
  }
  _getBoard(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101) {
    return this._univerInstanceService["getUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101, UniverInstanceType.UNIVER_BOARD) ?? null;
  }
  _renderHighlights(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104 = this._getBoard(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104) return Promise.resolve();
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104.getActivePageId(),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6 = Array.from(this._changes["values"]()).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469.pageId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610 => ({
        id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610.id,
        kind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610.kind,
        objectKey: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610.elementId ? getBoardElementRenderObjectKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610.elementId) : undefined,
        outlineOnly: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610.kind === "delete" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610.elementId
      }));
    return this._highlightService["show"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6);
  }
};
let Y = class extends UniverEditHistoryUIPlugin {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112) {
    let {
      collaborationClientConfig: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109;
    super(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112), this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111.setConfig(COLLABORATION_CLIENT_PLUGIN_CONFIG_KEY, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113);
  }
  onStarting() {
    super.onStarting(), registerDependencies(this._injector, [[ISnapshotServerService, {
      useClass: SnapshotServerOverHTTPService
    }], [U], [J], [V]]), this._injector["get"](U), this._injector["get"](J), this._injector["get"](V);
  }
};
let X = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46121, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128) {
    super(), this._configService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46121, this._restoreService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122, this._adapterRegistry = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123, this._localeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124, this._themeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125, this._collaborationController = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126, this._dataLoaderService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127, this._univerInstanceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128, q(this, "_historyUniver", null), q(this, "_opening", null), q(this, "_openGeneration", 0), q(this, "_sessionDisposables", new DisposableCollection()), q(this, "_container", null), q(this, "_unitId", ""), q(this, "_location", undefined);
  }
  open(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137) {
    if (this._historyUniver) return Promise.resolve();
    if (this._opening) return this._opening;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138 = ++this._openGeneration,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139 = this._open(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138).finally(() => {
        this._opening === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139 && (this._opening = null);
      });
    return this._opening = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139;
  }
  async _open(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145 = this._adapterRegistry["get"](UniverInstanceType.UNIVER_BOARD);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145) throw Error("[BoardsHistoryLoaderService]: Board history adapter is not registered.");
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146 = await Promise.all([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145.canView(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145.canRevert(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143)]).catch(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611 => {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144 === this._openGeneration) throw var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611;
      return null;
    });
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144 !== this._openGeneration) return;
    let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147) throw Error("[BoardsHistoryLoaderService]:\x20The\x20current\x20user\x20cannot\x20view\x20history\x20for\x20this\x20Board.");
    this._unitId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143, this._location = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145.captureLocation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149 = this._ensureContainer();
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149.style["display"] = "block";
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150 = this._localeService["getCurrentLocale"](),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151 = this._localeService["getLocales"](),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152 = new Univer({
        theme: this._themeService["getCurrentTheme"](),
        darkMode: this._themeService["darkMode"],
        locale: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150,
        locales: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151 ? {
          [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151
        } : undefined,
        direction: this._localeService["getDirection"](),
        override: [[IAuthzIoService, {
          useClass: AuthzIoHttpService
        }]]
      });
    this._historyUniver = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152, this._syncViewerServices(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149);
    try {
      this._registerChildPlugins(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152.createUnit(UniverInstanceType.UNIVER_BOARD, getBoardsEmptySnapshot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143, ""));
    } catch (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC5) {
      throw var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144 === this._openGeneration ? this.close() : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152.dispose(), var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC5;
    }
  }
  close() {
    ++this._openGeneration, this._opening = null, this._sessionDisposables["dispose"]();
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163 = this._historyUniver;
    this._historyUniver = null, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163.dispose(), this._unitId = "", this._location = undefined, this._container && (this._container["style"].display = "none");
  }
  _syncViewerServices(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165.__getInjector(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167.get(LocaleService),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167.get(ThemeService);
    this._sessionDisposables["add"](this._themeService["darkMode$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169.setDarkMode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613);
    })), this._sessionDisposables["add"](this._themeService["currentTheme$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169.setTheme(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615);
    })), this._sessionDisposables["add"](this._localeService["currentLocale$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618 = this._localeService["getLocales"]();
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168.load({
        [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618
      }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168.setLocale(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617);
    })), this._sessionDisposables["add"](this._localeService["direction$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168.setDirection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166.dir = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166.style["direction"] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621;
    }));
  }
  async restore(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46175) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177 = this._unitId,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178 = this._location,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179 = this._collaborationController["getCollabEntity"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179) throw Error("[BoardsHistoryLoaderService]: Collaboration is not ready for this Board.");
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180 = new Subject(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181 = firstValueFrom(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179.session["event$"].pipe(filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623.eventID === CollaborationEvent.CHANGESET_ACK), filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624 => isHistoryRestoreAcknowledgement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46175)), takeUntil(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180), timeout(10000)));
    try {
      if (!(await this._restoreService["restore"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177, UniverInstanceType.UNIVER_BOARD, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46175))) throw Error("[BoardsHistoryLoaderService]: The restore command was not accepted.");
      await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181;
    } catch (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC52) {
      throw var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180.next(), await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181.catch(() => undefined), var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC52;
    } finally {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180.complete();
    }
    this.close(), this._univerInstanceService["disposeUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177), await this._dataLoaderService["loadUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177, UniverInstanceType.UNIVER_BOARD), await ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176 = this._adapterRegistry["get"](UniverInstanceType.UNIVER_BOARD)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176.restoreLocation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178));
  }
  _ensureContainer() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189;
    if (this._container) return this._container;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190 = this._configService["getConfig"](F),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190.univerContainerId) ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189 = this._configService["getConfig"](UI_PLUGIN_CONFIG_KEY)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189.container),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192 = typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191 == "string" ? document.getElementById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192) throw Error("[BoardsHistoryLoaderService]: Configure a valid Univer container before opening history.");
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193 = document.createElement("div");
    return Object.assign(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.style, {
      position: "absolute",
      inset: "0",
      zIndex: "49",
      display: "none"
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192.appendChild(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193), this._container = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193;
  }
  _registerChildPlugins(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202 = this._configService["getConfig"](LS_CONFIG_KEY),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203 = this._configService["getConfig"](F),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8 = [[UniverLicensePlugin, {
        license: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202.ls
      }], [UniverRenderEnginePlugin], [UniverUIPlugin, {
        container: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201,
        header: true,
        toolbar: false,
        footer: true,
        contextMenu: false
      }], [UniverNetworkPlugin], [UniverDrawingPlugin, {
        override: [[IImageIoService, {
          useClass: CollaborationImageIoService
        }]]
      }], [UniverDocsPlugin], [UniverDocsUIPlugin], [UniverDocsLatexPlugin], [UniverDocsLatexUIPlugin], [UniverInkPlugin], [UniverInkUIPlugin], [UniverBoardsPlugin], [UniverBoardsUIPlugin, {
        showToolbar: false,
        workbench: {
          content: false
        }
      }], [UniverBoardsChartPlugin], [UniverBoardsChartUIPlugin], [UniverBoardsMindPlugin], [UniverBoardsMindUIPlugin], [UniverBoardsTablePlugin], [UniverBoardsTableUIPlugin], [UniverCollaborationPlugin], [UniverEditHistoryPlugin, {
        historyServerUrl: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203.historyServerUrl
      }], [UniverBoardsHistoryPlugin]],
      var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92992 = new Set();
    [...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8, ...((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203.viewerPlugins) ?? [])].forEach(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626]) => {
      if (var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92992.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625.pluginName)) throw Error("[BoardsHistoryLoaderService]: Plugin " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625.pluginName + " has already been registered.");
      var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92992.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625.pluginName), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199.registerPlugin(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626);
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199.registerPlugin(Y, {
      viewerMode: true,
      descriptor: {
        unitId: this._unitId,
        type: UniverInstanceType.UNIVER_BOARD
      },
      canRestore: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200,
      onClose: () => this.close(),
      onRestore: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629 => this.restore(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629),
      collaborationClientConfig: this._configService["getConfig"](COLLABORATION_CLIENT_PLUGIN_CONFIG_KEY)
    });
  }
  dispose() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209;
    this.close(), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209 = this._container) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209.remove(), this._container = null, super.dispose();
  }
};
const Z = {
  id: "boards-history-ui.operation.open",
  type: CommandType.OPERATION,
  handler: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285.get(IUniverInstanceService).getCurrentUnitOfType(UniverInstanceType.UNIVER_BOARD);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285.get(X).open(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286.getUnitId()).catch(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285.get(ILogService).error("[OpenBoardsHistoryOperation]: Failed to open Board history.", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211);
    }), true) : false;
  }
};
let Q = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215) {
    super(), this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213.registerCommand(Z)), this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214.register({
      id: Z.id,
      menuItemId: Z.id,
      group: "action",
      order: 100,
      icon: HistoryIcon,
      label: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215.t("boards-history-ui.menu.history"),
      onClick: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630.executeCommand(Z.id)
    }));
  }
};
let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46289 = class extends Plugin {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219 = I, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46220, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221) {
    super(), this._config = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219, this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46220, this._configService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221;
    let {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46222
    } = merge({}, I, this._config);
    this._configService["setConfig"](F, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46222);
  }
  onStarting() {
    registerDependencies(this._injector, [[X], [Q]]), this._injector["get"](Q);
  }
};
export { var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46289 as UniverBoardsHistoryUIPlugin };
export { V, U, J, q, Y, X, Q };
