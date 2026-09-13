import { AuthzIoHttpService, COLLABORATION_CLIENT_PLUGIN_CONFIG_KEY, CollaborationController, CollaborationImageIoService, DataLoaderService, SnapshotServerOverHTTPService, UniverCollaborationClientPlugin } from "@univerjs-pro/collaboration-client";
import { LS_CONFIG_KEY, UniverLicensePlugin } from "@univerjs-pro/license";
import { SlidesHistoryDiffService, UniverSlidesHistoryPlugin } from "@univerjs-pro/slides-history";
import { SLIDE_PAGE_RECT_KEY, UniverSlidesUIPlugin, buildDrawingOKey } from "@univerjs-pro/slides-ui";
import { CommandType, DependentOn, Disposable, DisposableCollection, IAuthzIoService, ICommandService, IConfigService, IImageIoService, ILogService, IUniverInstanceService, Inject, Injector, LocaleService, Plugin, ThemeService, Univer, UniverInstanceType, merge, registerDependencies } from "@univerjs/core";
import { HistoryIcon } from "@univerjs/icons";
import { IMenuManagerService, IconManager, MenuItemType, RibbonStartGroup, UI_PLUGIN_CONFIG_KEY, UniverUIPlugin, getMenuHiddenObservable } from "@univerjs/ui";
import { CollaborationEvent, ISnapshotServerService, SnapshotService, UniverCollaborationPlugin } from "@univerjs-pro/collaboration";
import { HistoryRestoreService, HistoryUnitAdapterRegistryService, UniverEditHistoryPlugin, isHistoryRestoreAcknowledgement } from "@univerjs-pro/edit-history";
import { AddSlideElementCommand, AddSlideElementMutation, AddSlidePageCommand, CancelSlideGroupMutation, ConvertSlideSmartArtToShapesCommand, CreateSlideByLayoutCommand, MoveSlidePageCommand, PageElementTypeEnum, RemoveSlideElementCommand, RemoveSlideElementMutation, RemoveSlidePageCommand, ReorderSlideElementsCommand, SetPresentationBackgroundGraphicsCommand, SetSlideGroupMutation, SetSlideNameCommand, SetSlidePageSizeCommand, SetSlideSpeakerNotesCommand, SetSlideTransitionCommand, UniverSlidesPlugin, UpdateSlideDrawingCommand, UpdateSlideElementMutation, UpdateSlidePageBackgroundCommand, UpdateSlideSmartArtCommand, getSlidesEmptySnapshot } from "@univerjs-pro/slides";
import { ChangeSlideChartDataSourceCommand, DuplicateSlideChartDataSourceCommand, InsertSlideChartCommand, RemoveSlideChartCommand, UniverSlidesChartPlugin, UpdateSlideChartConfigCommand, UpdateSlideChartDataSourceCommand, UpdateSlideChartSnapshotCommand } from "@univerjs-pro/slides-chart";
import { UniverSlidesChartUIPlugin } from "@univerjs-pro/slides-chart-ui";
import { DeleteSlideTableColumnsCommand, DeleteSlideTableRowsCommand, InsertSlideTableColumnsCommand, InsertSlideTableCommand, InsertSlideTableRowsCommand, MergeSlideTableCellsCommand, MoveSlideTableColumnsCommand, MoveSlideTableRowsCommand, RemoveSlideTableCommand, UniverSlidesTablePlugin, UnmergeSlideTableCellsCommand, UpdateSlideTableCommand } from "@univerjs-pro/slides-table";
import { UniverSlidesTableUIPlugin } from "@univerjs-pro/slides-table-ui";
import { UniverDocsPlugin } from "@univerjs/docs";
import { UniverDocsUIPlugin } from "@univerjs/docs-ui";
import { UniverDrawingPlugin } from "@univerjs/drawing";
import { UniverRenderEnginePlugin } from "@univerjs/engine-render";
import { UniverNetworkPlugin } from "@univerjs/network";
import { Subject, filter, firstValueFrom, takeUntil, timeout } from "rxjs";
import { HistoryActionSummaryService, HistoryCanvasHighlightService, HistoryRenderAdapterRegistryService, UniverEditHistoryUIPlugin } from "@univerjs-pro/edit-history-ui";
import { F, P } from "./slides-history-ui-plugin-config-key.js";
let B = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635) {
    super(), this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635.register("SlidesHistoryIcon", HistoryIcon));
  }
};
const xt = new Map([[SetSlideNameCommand.id, "slides-history-ui.action.renameSlide"], [AddSlidePageCommand.id, "slides-history-ui.action.insertSlide"], [CreateSlideByLayoutCommand.id, "slides-history-ui.action.insertSlide"], [RemoveSlidePageCommand.id, "slides-history-ui.action.deleteSlide"], [MoveSlidePageCommand.id, "slides-history-ui.action.moveSlide"], [SetSlidePageSizeCommand.id, "slides-history-ui.action.updatePageSize"], [UpdateSlidePageBackgroundCommand.id, "slides-history-ui.action.updateBackground"], [SetPresentationBackgroundGraphicsCommand.id, "slides-history-ui.action.updateBackgroundGraphics"], [SetSlideTransitionCommand.id, "slides-history-ui.action.updateTransition"], [SetSlideSpeakerNotesCommand.id, "slides-history-ui.action.updateSpeakerNotes"], [AddSlideElementCommand.id, "slides-history-ui.action.insertObject"], [RemoveSlideElementCommand.id, "slides-history-ui.action.deleteObject"], [UpdateSlideDrawingCommand.id, "slides-history-ui.action.updateObject"], [ReorderSlideElementsCommand.id, "slides-history-ui.action.reorderObject"], [SetSlideGroupMutation.id, "slides-history-ui.action.groupObjects"], [CancelSlideGroupMutation.id, "slides-history-ui.action.ungroupObjects"], [UpdateSlideSmartArtCommand.id, "slides-history-ui.action.updateSmartArt"], [ConvertSlideSmartArtToShapesCommand.id, "slides-history-ui.action.convertSmartArt"], [InsertSlideTableCommand.id, "slides-history-ui.action.insertTable"], [RemoveSlideTableCommand.id, "slides-history-ui.action.deleteTable"], [InsertSlideTableRowsCommand.id, "slides-history-ui.action.insertTableRows"], [DeleteSlideTableRowsCommand.id, "slides-history-ui.action.deleteTableRows"], [MoveSlideTableRowsCommand.id, "slides-history-ui.action.moveTableRows"], [InsertSlideTableColumnsCommand.id, "slides-history-ui.action.insertTableColumns"], [DeleteSlideTableColumnsCommand.id, "slides-history-ui.action.deleteTableColumns"], [MoveSlideTableColumnsCommand.id, "slides-history-ui.action.moveTableColumns"], [MergeSlideTableCellsCommand.id, "slides-history-ui.action.mergeTableCells"], [UnmergeSlideTableCellsCommand.id, "slides-history-ui.action.unmergeTableCells"], [UpdateSlideTableCommand.id, "slides-history-ui.action.updateTable"], [InsertSlideChartCommand.id, "slides-history-ui.action.insertChart"], [RemoveSlideChartCommand.id, "slides-history-ui.action.deleteChart"], [ChangeSlideChartDataSourceCommand.id, "slides-history-ui.action.updateChart"], [DuplicateSlideChartDataSourceCommand.id, "slides-history-ui.action.updateChart"], [UpdateSlideChartDataSourceCommand.id, "slides-history-ui.action.updateChart"], [UpdateSlideChartConfigCommand.id, "slides-history-ui.action.updateChart"], [UpdateSlideChartSnapshotCommand.id, "slides-history-ui.action.updateChart"]]),
  V = new Map([[PageElementTypeEnum.Text, {
    insert: "slides-history-ui.action.insertTextBox",
    update: "slides-history-ui.action.updateTextBox",
    delete: "slides-history-ui.action.deleteTextBox"
  }], [PageElementTypeEnum.Shape, {
    insert: "slides-history-ui.action.insertShape",
    update: "slides-history-ui.action.updateShape",
    delete: "slides-history-ui.action.deleteShape"
  }], [PageElementTypeEnum.Image, {
    insert: "slides-history-ui.action.insertImage",
    update: "slides-history-ui.action.updateImage",
    delete: "slides-history-ui.action.deleteImage"
  }], [PageElementTypeEnum.Diagram, {
    insert: "slides-history-ui.action.insertDiagram",
    update: "slides-history-ui.action.updateDiagram",
    delete: "slides-history-ui.action.deleteDiagram"
  }], [PageElementTypeEnum.Media, {
    insert: "slides-history-ui.action.insertMedia",
    update: "slides-history-ui.action.updateMedia",
    delete: "slides-history-ui.action.deleteMedia"
  }], [PageElementTypeEnum.Group, {
    insert: "slides-history-ui.action.insertGroup",
    update: "slides-history-ui.action.updateGroup",
    delete: "slides-history-ui.action.deleteGroup"
  }], [PageElementTypeEnum.Connector, {
    insert: "slides-history-ui.action.insertConnector",
    update: "slides-history-ui.action.updateConnector",
    delete: "slides-history-ui.action.deleteConnector"
  }], [PageElementTypeEnum.Table, {
    insert: "slides-history-ui.action.insertTable",
    update: "slides-history-ui.action.updateTable",
    delete: "slides-history-ui.action.deleteTable"
  }], [PageElementTypeEnum.Chart, {
    insert: "slides-history-ui.action.insertChart",
    update: "slides-history-ui.action.updateChart",
    delete: "slides-history-ui.action.deleteChart"
  }]]),
  St = new Set([AddSlideElementCommand.id, AddSlideElementMutation.id]),
  Ct = new Set([UpdateSlideDrawingCommand.id, UpdateSlideElementMutation.id]),
  wt = new Set([RemoveSlideElementCommand.id, RemoveSlideElementMutation.id]);
let H = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638) {
    super(), this._localeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638, this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637.register(UniverInstanceType.UNIVER_SLIDE, this));
  }
  resolve(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641.commandIds["has"](SetSlideGroupMutation.id) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641.commandIds["has"](CancelSlideGroupMutation.id) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641.commandIds["has"](ConvertSlideSmartArtToShapesCommand.id),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643 = Et(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641, AddSlideElementMutation.id),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642 ? [] : U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641, AddSlideElementMutation.id, "insert"),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641.commandIds["has"](UpdateSlideSmartArtCommand.id) ? [] : U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641, UpdateSlideElementMutation.id, "update", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642 ? [] : Tt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3 = [...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A, ...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1, ...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2].map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462 => this._localeService["t"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462)),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4 = [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641.commandIds].flatMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 => {
        if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A.length > 0 && St.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463) || var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1.length > 0 && Ct.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463) || var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2.length > 0 && wt.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463)) return [];
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464 = xt.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463);
        return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464 ? [this._localeService["t"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464)] : [];
      }),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A5 = [...new Set([...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3, ...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4])];
    return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A5.length > 0 ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A5 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641.commandIds["has"](AddSlideElementMutation.id) ? [this._localeService["t"]("slides-history-ui.action.insertObject")] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641.commandIds["has"](RemoveSlideElementMutation.id) ? [this._localeService["t"]("slides-history-ui.action.deleteObject")] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641.commandIds["has"](UpdateSlideElementMutation.id) ? [this._localeService["t"]("slides-history-ui.action.updateObject")] : [];
  }
};
function Tt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46244 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243.mutations["flatMap"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647 => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647.id !== RemoveSlideElementMutation.id || !G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647.params)) return [];
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649 = W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647.params["elementType"]) ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648 = V.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647.params["elementType"])) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648.delete : undefined;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649 ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649] : [];
  });
  return [...new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46244)];
}
function U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46250 = new Set()) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A16 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247.mutations["flatMap"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653.id !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248 || !G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653.params) || !G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653.params["element"]) || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653.params["element"].id == "string" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46250.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653.params["element"].id) ? [] : W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653.params["element"].type) ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653.params["element"].type] : []).flatMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654 => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655 = V.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249];
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656 ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656] : [];
  });
  return [...new Set(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A16)];
}
function Et(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46255, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46255.mutations["flatMap"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660.id !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256 || !G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660.params) || !G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660.params["element"]) ? [] : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660.params["element"].id == "string" ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660.params["element"].id] : []);
  return new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257);
}
function W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261) {
  switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261) {
    case PageElementTypeEnum.Placeholder:
    case PageElementTypeEnum.Text:
    case PageElementTypeEnum.Shape:
    case PageElementTypeEnum.Image:
    case PageElementTypeEnum.Chart:
    case PageElementTypeEnum.Table:
    case PageElementTypeEnum.Diagram:
    case PageElementTypeEnum.Media:
    case PageElementTypeEnum.Group:
    case PageElementTypeEnum.Connector:
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

  return K = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661) {
    return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661;
  } : function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663 && typeof Symbol == "function" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663.constructor === Symbol && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663 !== Symbol.prototype ? "symbol" : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663;
  }, K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265);
}
function Dt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268) {
  if (K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267) != "object" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267;
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46269 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267[Symbol.toPrimitive];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46269 !== undefined) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46269.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268 || "default");
    if (K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270) != "object") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270;
    throw TypeError("@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.");
  }
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268 === "string" ? String : Number)(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267);
}
function Ot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46275) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276 = Dt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46275, "string");
  return K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276) == "symbol" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276 + "";
}
function q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280 = Ot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280)) in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279 ? Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280, {
    value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279;
}
let J = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670) {
    super(), this._diffService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665, this._snapshotService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667, this._univerInstanceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668, this._logService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669, this._highlightService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670, q(this, "type", UniverInstanceType.UNIVER_SLIDE), q(this, "_changes", new Map()), q(this, "_changesGeneration", 0), q(this, "_loadGeneration", 0), q(this, "_loadQueue", Promise.resolve()), q(this, "_unitId", ""), q(this, "_activeSlideSubscription", null), this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666.register(this));
  }
  loadRevision(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679 = ++this._loadGeneration,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680 = this._loadQueue["catch"](() => undefined).then(async () => {
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679 !== this._loadGeneration) return;
        this._clearActiveSlideSubscription(), this._getSlide(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677) && this._univerInstanceService["disposeUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677);
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467 = await this._snapshotService["loadSlide"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678.endRevision);
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679 !== this._loadGeneration) {
          this._getSlide(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467 && this._univerInstanceService["disposeUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677);
          return;
        }
        this._bindActiveSlide(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677), this._univerInstanceService["focusUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677);
      });
    return this._loadQueue = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680;
  }
  async loadChanges(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686) {
    this._unitId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687 = ++this._changesGeneration,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688 = await this._diffService["compare"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687 === this._changesGeneration && (this._changes["clear"](), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469 => this._changes["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469)), await this._renderHighlights(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685));
  }
  close() {
    ++this._changesGeneration, ++this._loadGeneration, this._clearActiveSlideSubscription(), this._changes["clear"](), this._unitId &&= (this._highlightService["clear"](this._unitId), "");
  }
  _getSlide(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693) {
    return this._univerInstanceService["getUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693, UniverInstanceType.UNIVER_SLIDE) ?? null;
  }
  _bindActiveSlide(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696) {
    this._activeSlideSubscription = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695.pageManager["activeSlideId$"].subscribe(() => {
      this._unitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696 && this._renderHighlights(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696).catch(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 => {
        this._logService["error"]("[SlidesHistoryRenderAdapterService]: Failed to render slide history highlights.", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46);
      });
    });
  }
  _clearActiveSlideSubscription() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699;
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699 = this._activeSlideSubscription) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699.unsubscribe(), this._activeSlideSubscription = null;
  }
  _renderHighlights(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103 = this._getSlide(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103.pageManager["getActiveSlide"]()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102.getId();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104) return Promise.resolve();
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12 = Array.from(this._changes["values"]()).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610.slideId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611 => ({
      id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611.id,
      kind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611.kind,
      objectKey: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611.drawingId ? buildDrawingOKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611.drawingId) : undefined,
      fallbackObjectKey: SLIDE_PAGE_RECT_KEY,
      outlineOnly: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611.kind === "delete" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611.drawingId
    }));
    return this._highlightService["show"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12);
  }
  dispose() {
    this.close(), super.dispose();
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
    }], [H], [J]]), this._injector["get"](H), this._injector["get"](J);
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
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145 = this._adapterRegistry["get"](UniverInstanceType.UNIVER_SLIDE);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145) throw Error("[SlidesHistoryLoaderService]: Slides history adapter is not registered.");
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146 = await Promise.all([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145.canView(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145.canRevert(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143)]).catch(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612 => {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144 === this._openGeneration) throw var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612;
      return null;
    });
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144 !== this._openGeneration) return;
    let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147) throw Error("[SlidesHistoryLoaderService]:\x20The\x20current\x20user\x20cannot\x20view\x20history\x20for\x20this\x20presentation.");
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
      this._registerChildPlugins(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152.createUnit(UniverInstanceType.UNIVER_SLIDE, getSlidesEmptySnapshot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143));
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
    this._sessionDisposables["add"](this._themeService["darkMode$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169.setDarkMode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614);
    })), this._sessionDisposables["add"](this._themeService["currentTheme$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169.setTheme(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616);
    })), this._sessionDisposables["add"](this._localeService["currentLocale$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619 = this._localeService["getLocales"]();
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168.load({
        [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619
      }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168.setLocale(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618);
    })), this._sessionDisposables["add"](this._localeService["direction$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168.setDirection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166.dir = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166.style["direction"] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622;
    }));
  }
  async restore(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46175) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177 = this._unitId,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178 = this._location,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179 = this._collaborationController["getCollabEntity"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179) throw Error("[SlidesHistoryLoaderService]:\x20Collaboration\x20is\x20not\x20ready\x20for\x20this\x20presentation.");
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180 = new Subject(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181 = firstValueFrom(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179.session["event$"].pipe(filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624.eventID === CollaborationEvent.CHANGESET_ACK), filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625 => isHistoryRestoreAcknowledgement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46175)), takeUntil(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180), timeout(10000)));
    try {
      if (!(await this._restoreService["restore"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177, UniverInstanceType.UNIVER_SLIDE, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46175))) throw Error("[SlidesHistoryLoaderService]: The restore command was not accepted.");
      await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181;
    } catch (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC52) {
      throw var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180.next(), await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181.catch(() => undefined), var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC52;
    } finally {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180.complete();
    }
    this.close(), this._univerInstanceService["disposeUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177), await this._dataLoaderService["loadUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177, UniverInstanceType.UNIVER_SLIDE), await ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176 = this._adapterRegistry["get"](UniverInstanceType.UNIVER_SLIDE)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176.restoreLocation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178));
  }
  _ensureContainer() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189;
    if (this._container) return this._container;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190 = this._configService["getConfig"](P),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190.univerContainerId) ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189 = this._configService["getConfig"](UI_PLUGIN_CONFIG_KEY)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189.container),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192 = typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191 == "string" ? document.getElementById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192) throw Error("[SlidesHistoryLoaderService]:\x20Configure\x20a\x20valid\x20Univer\x20container\x20before\x20opening\x20history.");
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
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203 = this._configService["getConfig"](P),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A14 = [[UniverLicensePlugin, {
        license: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202.ls
      }], [UniverRenderEnginePlugin], [UniverUIPlugin, {
        container: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201,
        header: true,
        toolbar: false,
        footer: true,
        contextMenu: false
      }], [UniverNetworkPlugin], [UniverDocsPlugin], [UniverDocsUIPlugin], [UniverDrawingPlugin, {
        override: [[IImageIoService, {
          useClass: CollaborationImageIoService
        }]]
      }], [UniverSlidesPlugin], [UniverSlidesUIPlugin], [UniverSlidesChartPlugin], [UniverSlidesChartUIPlugin], [UniverSlidesTablePlugin], [UniverSlidesTableUIPlugin], [UniverCollaborationPlugin], [UniverEditHistoryPlugin, {
        historyServerUrl: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203.historyServerUrl
      }], [UniverSlidesHistoryPlugin]],
      var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299 = new Set();
    [...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A14, ...((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203.viewerPlugins) ?? [])].forEach(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627]) => {
      if (var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626.pluginName)) throw Error("[SlidesHistoryLoaderService]: Plugin " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626.pluginName + " has already been registered.");
      var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626.pluginName), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199.registerPlugin(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627);
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199.registerPlugin(Y, {
      viewerMode: true,
      descriptor: {
        unitId: this._unitId,
        type: UniverInstanceType.UNIVER_SLIDE
      },
      canRestore: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200,
      onClose: () => this.close(),
      onRestore: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630 => this.restore(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630),
      collaborationClientConfig: this._configService["getConfig"](COLLABORATION_CLIENT_PLUGIN_CONFIG_KEY)
    });
  }
  dispose() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209;
    this.close(), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209 = this._container) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209.remove(), this._container = null, super.dispose();
  }
};
const Z = {
    id: "slides-history-ui.operation.open",
    type: CommandType.OPERATION,
    handler: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285.get(IUniverInstanceService).getCurrentUnitOfType(UniverInstanceType.UNIVER_SLIDE);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285.get(X).open(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286.getUnitId()).catch(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211 => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285.get(ILogService).error("[OpenSlidesHistoryOperation]: Failed to open Slides history.", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211);
      }), true) : false;
    }
  },
  kt = {
    [RibbonStartGroup.OTHERS]: {
      [Z.id]: {
        order: 100,
        gridLayout: {
          row: 1,
          column: 3,
          rowSpan: 2,
          columnSpan: 2,
          showLabel: true
        },
        menuItemFactory: At
      }
    }
  };
function At(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46289) {
  return {
    id: Z.id,
    type: MenuItemType.BUTTON,
    icon: "SlidesHistoryIcon",
    title: "slides-history-ui.menu.history",
    tooltip: "slides-history-ui.menu.history",
    hidden$: getMenuHiddenObservable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46289, UniverInstanceType.UNIVER_SLIDE)
  };
}
let Q = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214) {
    super(), this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213.registerCommand(Z)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214.mergeMenu(kt);
  }
};
let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46291 = class extends Plugin {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217 = F, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219) {
    super(), this._config = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217, this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218, this._configService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219;
    let {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46220
    } = merge({}, F, this._config);
    this._configService["setConfig"](P, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46220);
  }
  onStarting() {
    registerDependencies(this._injector, [[B], [X], [Q]]), this._injector["get"](B), this._injector["get"](Q);
  }
};
export { var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46291 as UniverSlidesHistoryUIPlugin };
export { B, H, J, q, Y, X, Q };
