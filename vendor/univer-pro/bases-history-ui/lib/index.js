import { BasesHistoryDiffService as var_core_value_sig7D1B, UniverBasesHistoryPlugin as var_core_value_sig7BE0 } from "@univerjs-pro/bases-history";
import { ActivateBaseTableOperation as var_core_value_sig7D40, ActivateBaseViewOperation as var_core_value_sig6C7E, BASE_CANVAS_COMPONENT_KEY as var_core_value_sig68BE, BASE_TOOLBAR_EXTRA_ACTIONS as var_core_value_sig04C6, BaseCanvasRenderComponent as var_core_value_sigCA05, IBaseCanvasRootResolverService as var_core_value_sig2F2B, IBaseUIStateService as var_core_value_sig70AF, UniverBasesUIPlugin as var_core_value_sigD04E, createScopedBaseCanvasRootResolverService as var_core_value_sigB99B } from "@univerjs-pro/bases-ui";
import { AuthzIoHttpService as var_core_value_sig5A75, COLLABORATION_CLIENT_PLUGIN_CONFIG_KEY as var_core_value_sig7BAF, CollaborationController as var_core_value_sig8F69, DataLoaderService as var_core_value_sig6884, SnapshotServerOverHTTPService as var_core_value_sig066E, UniverCollaborationClientPlugin as var_core_value_sig9B0D } from "@univerjs-pro/collaboration-client";
import { LS_CONFIG_KEY as var_core_value_sig3D2C, UniverLicensePlugin as var_core_value_sigC56D } from "@univerjs-pro/license";
import { BaseViewType as var_core_value_sig3A17, CommandType as var_core_value_sig938F, DependentOn as var_core_value_sigD948, Disposable as var_core_value_sigBE5E, DisposableCollection as var_core_value_sig0281, IAuthzIoService as var_core_value_sigED71, ICommandService as var_core_value_sig281C, IConfigService as var_core_value_sig3C92, ILogService as var_core_value_sigB16B, IUniverInstanceService as var_core_value_sig585D, Inject as var_core_value_sigE722, Injector as var_core_value_sig062A, LocaleService as var_core_value_sig050A, Plugin as var_core_value_sig8B32, ThemeService as var_core_value_sig870F, Univer as var_core_value_sigB683, UniverInstanceType as var_core_value_sig26EC, merge as var_core_value_sigEEDB, registerDependencies as var_core_value_sig36E7, toDisposable as var_core_value_sig6A78 } from "@univerjs/core";
import { HistoryRestoreService as var_core_value_sigF7EF, HistoryUnitAdapterRegistryService as var_core_value_sig27F9, UniverEditHistoryPlugin as var_core_value_sig393E, isHistoryRestoreAcknowledgement as var_core_value_sigB609 } from "@univerjs-pro/edit-history";
import { UnitAction as var_core_value_sig390D, UnitObject as var_core_value_sigC928 } from "@univerjs/protocol";
import { ComponentManager as var_core_value_sig39B7, ICanvasPopupService as var_core_value_sig18E0, IUIPartsService as var_core_value_sigE161, UI_PLUGIN_CONFIG_KEY as var_core_value_sigBDEE, UniverUIPlugin as var_core_value_sig1F40, connectInjector as var_core_value_sig3FC7, useDependency as var_core_value_sig1E1B } from "@univerjs/ui";
import { ApplyBaseJson1Mutation as var_core_value_sig3B10, BaseHistoryAction as var_core_value_sig89E6, BatchCreateBaseRecordsCommand as var_core_value_sig4743, BatchDeleteBaseRecordsCommand as var_core_value_sigEB6A, ChangeBaseFieldTypeCommand as var_core_value_sig3D46, CreateBaseChildRecordCommand as var_core_value_sigCC93, CreateBaseFieldCommand as var_core_value_sig5964, CreateBaseRecordCommand as var_core_value_sig808B, CreateBaseTableCommand as var_core_value_sig2A26, CreateBaseViewCommand as var_core_value_sig1179, DeleteBaseFieldCommand as var_core_value_sigEA92, DeleteBaseRecordCommand as var_core_value_sig8FD9, DeleteBaseTableCommand as var_core_value_sig1AE5, DeleteBaseViewCommand as var_core_value_sig7100, DuplicateBaseFieldCommand as var_core_value_sigA19A, DuplicateBaseRecordCommand as var_core_value_sigD3F5, EnsureBaseTemporalViewDateFieldsCommand as var_core_value_sig3082, MoveBaseFieldCommand as var_core_value_sigF5D1, MoveBaseHierarchyRecordCommand as var_core_value_sig8775, MoveBaseViewCommand as var_core_value_sig481B, RenameBaseTableCommand as var_core_value_sig13D7, RenameBaseViewCommand as var_core_value_sig90C0, SetBaseKanbanGroupFieldCommand as var_core_value_sigF1B2, SetBaseNameCommand as var_core_value_sigC2BB, SetBaseRangeValuesCommand as var_core_value_sigD9DB, SetBaseRecordValuesCommand as var_core_value_sigA363, SetBaseTableHierarchyFieldCommand as var_core_value_sigFBA5, SetBaseViewFieldOrderCommand as var_core_value_sigAC47, SetBaseViewFieldVisibleCommand as var_core_value_sigA06F, SetBaseViewFieldWidthCommand as var_core_value_sig770E, SetBaseViewFilterCommand as var_core_value_sig4654, SetBaseViewGroupCommand as var_core_value_sigB26B, SetBaseViewSortCommand as var_core_value_sig019B, UniverBasesPlugin as var_core_value_sigC6BC, UpdateBaseCellCommand as var_core_value_sig8EC2, UpdateBaseFieldCommand as var_core_value_sigA8C3, UpdateBaseFieldDescriptionCommand as var_core_value_sig5276, UpdateBaseKanbanConfigCommand as var_core_value_sig031B, UpdateBaseRecordOrderCommand as var_core_value_sig9DC0, UpdateBaseViewConditionalColorRulesCommand as var_core_value_sig95F0, UpdateBaseViewConfigCommand as var_core_value_sig9CCB } from "@univerjs-pro/bases";
import { BaseDashboardHistoryAction as var_core_value_sigE718, BaseDashboardWidgetType as var_core_value_sigAEC8, CreateBaseDashboardCommand as var_core_value_sigB977, DeleteBaseDashboardCommand as var_core_value_sig2949, RemoveBaseDashboardWidgetCommand as var_core_value_sig308A, UniverBaseDashboardPlugin as var_core_value_sig528D, UpdateBaseDashboardCommand as var_core_value_sigA309, UpdateBasePivotViewCommand as var_core_value_sig9E20, UpsertBaseDashboardWidgetCommand as var_core_value_sig26BB } from "@univerjs-pro/bases-dashboard";
import { UniverBaseDashboardUIPlugin as var_core_value_sig19B4 } from "@univerjs-pro/bases-dashboard-ui";
import { CollaborationEvent as var_core_value_sig218A, ISnapshotServerService as var_core_value_sig14CB, SnapshotService as var_core_value_sigFDEE, UniverCollaborationPlugin as var_core_value_sigA676 } from "@univerjs-pro/collaboration";
import { UniverProFormulaEnginePlugin as var_core_value_sigC27E } from "@univerjs-pro/engine-formula";
import { IRenderManagerService as var_core_value_sigA70D, UniverRenderEnginePlugin as var_core_value_sigCE10 } from "@univerjs/engine-render";
import { UniverNetworkPlugin as var_core_value_sigA386 } from "@univerjs/network";
import { BehaviorSubject as var_core_value_sigCD82, Subject as var_core_value_sig44DD, distinctUntilChanged as var_core_value_sig96FA, filter as var_core_value_sigAB68, firstValueFrom as var_core_value_sig040A, map as var_core_value_sig2AE0, takeUntil as var_core_value_sigC349, timeout as var_core_value_sig9D96 } from "rxjs";
import { HistoryActionSummaryService as var_core_value_sig2776, HistoryCanvasHighlightService as var_core_value_sig6FB2, HistoryRenderAdapterRegistryService as var_core_value_sigEB43, UniverEditHistoryUIPlugin as var_core_value_sig4186 } from "@univerjs-pro/edit-history-ui";
import { Badge as var_core_value_sigF963, Button as var_core_value_sigB608, Tooltip as var_core_value_sigF866 } from "@univerjs/design";
import { jsx as var_core_value_sig5EFB, jsxs as var_core_value_sig3A85 } from "react/jsx-runtime";
import { HistoryIcon as var_core_value_sig2682 } from "@univerjs/icons";
const I = "bases-history-ui.config",
  zt = {
    historyServerUrl: "/universer-api/history"
  };
var Bt = "@univerjs-pro/bases-history-ui",
  Vt = "1.0.0-insiders.20260907-70fc579";
function L(var_core_value_sig37A8, var_core_value_sigA90D) {
  return function (var_core_value_sig5CA5, var_core_value_sigE90F) {
    var_core_value_sigA90D(var_core_value_sig5CA5, var_core_value_sigE90F, var_core_value_sig37A8);
  };
}
function R(var_core_value_sig7A3C, var_core_value_sig0511, var_core_value_sig1F44, var_core_value_sigCB04) {
  var var_core_value_sig947E = arguments.length,
    var_core_value_sig4545 = var_core_value_sig947E < 3 ? var_core_value_sig0511 : var_core_value_sigCB04 === null ? var_core_value_sigCB04 = Object.getOwnPropertyDescriptor(var_core_value_sig0511, var_core_value_sig1F44) : var_core_value_sigCB04,
    var_core_value_sigF39A;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sig4545 = Reflect.decorate(var_core_value_sig7A3C, var_core_value_sig0511, var_core_value_sig1F44, var_core_value_sigCB04);else {
    for (var var_core_value_sigF79C = var_core_value_sig7A3C.length - 1; var_core_value_sigF79C >= 0; var_core_value_sigF79C--) (var_core_value_sigF39A = var_core_value_sig7A3C[var_core_value_sigF79C]) && (var_core_value_sig4545 = (var_core_value_sig947E < 3 ? var_core_value_sigF39A(var_core_value_sig4545) : var_core_value_sig947E > 3 ? var_core_value_sigF39A(var_core_value_sig0511, var_core_value_sig1F44, var_core_value_sig4545) : var_core_value_sigF39A(var_core_value_sig0511, var_core_value_sig1F44)) || var_core_value_sig4545);
  }
  return var_core_value_sig947E > 3 && var_core_value_sig4545 && Object.defineProperty(var_core_value_sig0511, var_core_value_sig1F44, var_core_value_sig4545), var_core_value_sig4545;
}
let z = class extends var_core_value_sigBE5E {
  constructor(var_core_value_sigEFD4, var_core_value_sig861B, var_core_value_sig5237, var_core_value_sigBB00) {
    super(), this._authzIoService = var_core_value_sig861B, this._stateService = var_core_value_sig5237, this._univerInstanceService = var_core_value_sigBB00, this.disposeWithMe(var_core_value_sigEFD4.register({
      type: var_core_value_sig26EC.UNIVER_BASE,
      canView: var_core_value_sig8061 => this._hasPermission(var_core_value_sig8061, var_core_value_sig390D.ViewHistory),
      canRevert: var_core_value_sig4D4C => !!this._getBase(var_core_value_sig4D4C) && this._hasPermission(var_core_value_sig4D4C, var_core_value_sig390D.RecoverHistory),
      captureLocation: () => this._captureLocation(),
      restoreLocation: (var_core_value_sigC9E0, var_core_value_sig76BA) => this._restoreLocation(var_core_value_sigC9E0, Ht(var_core_value_sig76BA) ? var_core_value_sig76BA : undefined)
    }));
  }
  _captureLocation() {
    let var_core_value_sig7E54 = this._stateService["getState"]();
    return {
      tableId: var_core_value_sig7E54.activeTableId,
      viewId: var_core_value_sig7E54.activeViewId,
      selection: var_core_value_sig7E54.selection
    };
  }
  _restoreLocation(var_core_value_sig9A8D, var_core_value_sigC259) {
    let var_core_value_sig9C9F = this._getBase(var_core_value_sig9A8D),
      var_core_value_sigFDEA = var_core_value_sigC259 != null && var_core_value_sigC259.tableId && var_core_value_sig9C9F != null && var_core_value_sig9C9F.getSnapshot().tables[var_core_value_sigC259.tableId] ? var_core_value_sigC259.tableId : var_core_value_sig9C9F == null ? undefined : var_core_value_sig9C9F.getSnapshot().tableOrder[0];
    if (!var_core_value_sigFDEA) return;
    let var_core_value_sig86D0 = var_core_value_sig9C9F == null ? undefined : var_core_value_sig9C9F.getSnapshot().tables[var_core_value_sigFDEA],
      var_core_value_sig4CD2 = var_core_value_sigC259 != null && var_core_value_sigC259.viewId && var_core_value_sig86D0 != null && var_core_value_sig86D0.views[var_core_value_sigC259.viewId] ? var_core_value_sigC259.viewId : var_core_value_sig86D0 == null ? undefined : var_core_value_sig86D0.viewOrder[0];
    this._stateService["activateTable"](var_core_value_sigFDEA), var_core_value_sig4CD2 && this._stateService["activateView"](var_core_value_sig4CD2), this._stateService["setSelection"]((var_core_value_sigC259 == null ? undefined : var_core_value_sigC259.selection) ?? null), this._univerInstanceService["focusUnit"](var_core_value_sig9A8D);
  }
  _getBase(var_core_value_sig48CA) {
    return this._univerInstanceService["getUnit"](var_core_value_sig48CA, var_core_value_sig26EC.UNIVER_BASE) ?? null;
  }
  async _hasPermission(var_core_value_sig50AF, var_core_value_sigA942) {
    return (await this._authzIoService["allowed"]({
      unitID: var_core_value_sig50AF,
      objectID: var_core_value_sig50AF,
      objectType: var_core_value_sigC928.Base,
      actions: [var_core_value_sigA942]
    })).some(var_core_value_sigFBFA => var_core_value_sigFBFA.action === var_core_value_sigA942 && var_core_value_sigFBFA.allowed);
  }
};
z = R([L(0, var_core_value_sigE722(var_core_value_sig27F9)), L(1, var_core_value_sigED71), L(2, var_core_value_sig70AF), L(3, var_core_value_sig585D)], z);
function Ht(var_core_value_sig2E54) {
  return typeof var_core_value_sig2E54 == "object" && !!var_core_value_sig2E54;
}
const Ut = "BASE_HISTORY_DELETION_BADGE";
function Wt({
  popup: var_core_value_sig7658
}) {
  let {
    count: var_core_value_sigDCF5,
    labels: var_core_value_sigC786
  } = var_core_value_sig7658.extraProps;
  return var_core_value_sig5EFB(var_core_value_sigF866, {
    placement: "right",
    title: var_core_value_sig3A85("div", {
      className: "univer-flex\x20univer-max-w-80\x20univer-flex-col\x20univer-gap-1",
      children: [var_core_value_sigC786.slice(0, 10).map(var_core_value_sigA621 => var_core_value_sig5EFB("div", {
        className: "univer-truncate",
        children: var_core_value_sigA621
      }, var_core_value_sigA621)), var_core_value_sigC786.length > 10 && var_core_value_sig5EFB("div", {
        children: "+" + (var_core_value_sigC786.length - 10)
      })]
    }),
    children: var_core_value_sig5EFB("div", {
      "aria-label": var_core_value_sigC786.join(",\x20"),
      children: var_core_value_sig5EFB(var_core_value_sigF963, {
        className: "!univer-border-red-800 !univer-bg-red-50 !univer-px-1.5 !univer-py-0.5 !univer-text-red-800 dark:!univer-border-red-400 dark:!univer-bg-red-950 dark:!univer-text-red-300",
        children: "−" + var_core_value_sigDCF5
      })
    })
  });
}
let B = class extends var_core_value_sigBE5E {
  constructor(var_core_value_sigBBFF) {
    super(), this.disposeWithMe(var_core_value_sigBBFF.register(Ut, Wt));
  }
};
B = R([L(0, var_core_value_sigE722(var_core_value_sig39B7))], B);
const Gt = new Map([[var_core_value_sig3A17.Grid, {
    create: "bases-history-ui.action.createGridView",
    delete: "bases-history-ui.action.deleteGridView"
  }], [var_core_value_sig3A17.Kanban, {
    create: "bases-history-ui.action.createKanbanView",
    delete: "bases-history-ui.action.deleteKanbanView"
  }], [var_core_value_sig3A17.Calendar, {
    create: "bases-history-ui.action.createCalendarView",
    delete: "bases-history-ui.action.deleteCalendarView"
  }], [var_core_value_sig3A17.Gantt, {
    create: "bases-history-ui.action.createGanttView",
    delete: "bases-history-ui.action.deleteGanttView"
  }], [var_core_value_sig3A17.Gallery, {
    create: "bases-history-ui.action.createGalleryView",
    delete: "bases-history-ui.action.deleteGalleryView"
  }], [var_core_value_sig3A17.Pivot, {
    create: "bases-history-ui.action.createPivotView",
    delete: "bases-history-ui.action.deletePivotView"
  }]]),
  Kt = new Map([[var_core_value_sigAEC8.PivotChart, {
    create: "bases-history-ui.action.createDashboardPivotChartWidget",
    update: "bases-history-ui.action.updateDashboardPivotChartWidget",
    remove: "bases-history-ui.action.removeDashboardPivotChartWidget"
  }], [var_core_value_sigAEC8.TableFilter, {
    create: "bases-history-ui.action.createDashboardTableFilterWidget",
    update: "bases-history-ui.action.updateDashboardTableFilterWidget",
    remove: "bases-history-ui.action.removeDashboardTableFilterWidget"
  }], [var_core_value_sigAEC8.Text, {
    create: "bases-history-ui.action.createDashboardTextWidget",
    update: "bases-history-ui.action.updateDashboardTextWidget",
    remove: "bases-history-ui.action.removeDashboardTextWidget"
  }], [var_core_value_sigAEC8.Image, {
    create: "bases-history-ui.action.createDashboardImageWidget",
    update: "bases-history-ui.action.updateDashboardImageWidget",
    remove: "bases-history-ui.action.removeDashboardImageWidget"
  }], [var_core_value_sigAEC8.FormulaShape, {
    create: "bases-history-ui.action.createDashboardFormulaShapeWidget",
    update: "bases-history-ui.action.updateDashboardFormulaShapeWidget",
    remove: "bases-history-ui.action.removeDashboardFormulaShapeWidget"
  }]]),
  qt = new Map([[var_core_value_sigC2BB.id, "bases-history-ui.action.renameBase"], [var_core_value_sig2A26.id, "bases-history-ui.action.createTable"], [var_core_value_sig1AE5.id, "bases-history-ui.action.deleteTable"], [var_core_value_sig13D7.id, "bases-history-ui.action.renameTable"], [var_core_value_sig1179.id, "bases-history-ui.action.createView"], [var_core_value_sig7100.id, "bases-history-ui.action.deleteView"], [var_core_value_sig90C0.id, "bases-history-ui.action.renameView"], [var_core_value_sig481B.id, "bases-history-ui.action.moveView"], [var_core_value_sig808B.id, "bases-history-ui.action.createRecord"], [var_core_value_sigCC93.id, "bases-history-ui.action.createRecord"], [var_core_value_sig4743.id, "bases-history-ui.action.createRecord"], [var_core_value_sig8FD9.id, "bases-history-ui.action.deleteRecord"], [var_core_value_sigEB6A.id, "bases-history-ui.action.deleteRecord"], [var_core_value_sigD3F5.id, "bases-history-ui.action.duplicateRecord"], [var_core_value_sig8775.id, "bases-history-ui.action.moveRecord"], [var_core_value_sig9DC0.id, "bases-history-ui.action.moveRecord"], [var_core_value_sig8EC2.id, "bases-history-ui.action.updateValues"], [var_core_value_sigA363.id, "bases-history-ui.action.updateValues"], [var_core_value_sigD9DB.id, "bases-history-ui.action.updateValues"], [var_core_value_sig5964.id, "bases-history-ui.action.createField"], [var_core_value_sigEA92.id, "bases-history-ui.action.deleteField"], [var_core_value_sigA19A.id, "bases-history-ui.action.duplicateField"], [var_core_value_sigF5D1.id, "bases-history-ui.action.moveField"], [var_core_value_sig3D46.id, "bases-history-ui.action.changeFieldType"], [var_core_value_sigA8C3.id, "bases-history-ui.action.updateField"], [var_core_value_sig5276.id, "bases-history-ui.action.updateFieldDescription"], [var_core_value_sigAC47.id, "bases-history-ui.action.reorderFields"], [var_core_value_sigA06F.id, "bases-history-ui.action.updateFieldVisibility"], [var_core_value_sig770E.id, "bases-history-ui.action.resizeFields"], [var_core_value_sig4654.id, "bases-history-ui.action.updateFilter"], [var_core_value_sigB26B.id, "bases-history-ui.action.updateGroup"], [var_core_value_sig019B.id, "bases-history-ui.action.updateSort"], [var_core_value_sig95F0.id, "bases-history-ui.action.updateConditionalColoring"], [var_core_value_sig9CCB.id, "bases-history-ui.action.configureView"], [var_core_value_sig3082.id, "bases-history-ui.action.configureView"], [var_core_value_sigF1B2.id, "bases-history-ui.action.configureKanban"], [var_core_value_sig031B.id, "bases-history-ui.action.configureKanban"], [var_core_value_sigFBA5.id, "bases-history-ui.action.configureHierarchy"], [var_core_value_sig9E20.id, "bases-history-ui.action.updatePivotView"], [var_core_value_sigB977.id, "bases-history-ui.action.createDashboard"], [var_core_value_sig2949.id, "bases-history-ui.action.deleteDashboard"], [var_core_value_sigA309.id, "bases-history-ui.action.updateDashboard"], [var_core_value_sig26BB.id, "bases-history-ui.action.updateDashboardWidget"], [var_core_value_sig308A.id, "bases-history-ui.action.removeDashboardWidget"]]);
let V = class extends var_core_value_sigBE5E {
  constructor(var_core_value_sig8889, var_core_value_sig32F8) {
    super(), this._localeService = var_core_value_sig32F8, this.disposeWithMe(var_core_value_sig8889.register(var_core_value_sig26EC.UNIVER_BASE, this));
  }
  resolve(var_core_value_sig5B67) {
    let var_core_value_sig1758 = Zt(var_core_value_sig5B67),
      var_core_value_sig4805 = Jt(var_core_value_sig5B67),
      var_core_value_sigE67E = [...var_core_value_sig1758.map(var_core_value_sigF602 => this._localeService["t"](var_core_value_sigF602)), ...var_core_value_sig4805.map(var_core_value_sig1BBD => this._localeService["t"](var_core_value_sig1BBD)), ...[...var_core_value_sig5B67.commandIds].flatMap(var_core_value_sigF704 => {
        if (var_core_value_sig1758.length > 0 && (var_core_value_sigF704 === var_core_value_sig1179.id || var_core_value_sigF704 === var_core_value_sig7100.id) || var_core_value_sig4805.length > 0 && (var_core_value_sigF704 === var_core_value_sig26BB.id || var_core_value_sigF704 === var_core_value_sig308A.id || var_core_value_sigF704 === var_core_value_sigA309.id)) return [];
        let var_core_value_sig2BCF = qt.get(var_core_value_sigF704);
        return var_core_value_sig2BCF ? [this._localeService["t"](var_core_value_sig2BCF)] : [];
      })],
      var_core_value_sig2902 = [...new Set(var_core_value_sigE67E)];
    return var_core_value_sig2902.length > 0 ? var_core_value_sig2902 : var_core_value_sig5B67.commandIds["has"](var_core_value_sig3B10.id) ? [this._localeService["t"]("bases-history-ui.action.updateBase")] : [];
  }
};
V = R([L(0, var_core_value_sigE722(var_core_value_sig2776)), L(1, var_core_value_sigE722(var_core_value_sig050A))], V);
function Jt(var_core_value_sigC0D9) {
  let var_core_value_sigF051 = var_core_value_sigC0D9.mutations["flatMap"](var_core_value_sig9989 => {
    if (!Qt(var_core_value_sig9989.params)) return [];
    let var_core_value_sig698E = Array.isArray(var_core_value_sig9989.params["historyActions"]) ? var_core_value_sig9989.params["historyActions"].filter(Yt) : [],
      var_core_value_sig2809 = [];
    var_core_value_sig698E.includes(var_core_value_sigE718.RenameDashboard) && var_core_value_sig2809.push("bases-history-ui.action.renameDashboard"), var_core_value_sig698E.includes(var_core_value_sigE718.ReorderWidgets) && var_core_value_sig2809.push("bases-history-ui.action.reorderDashboardWidgets");
    let var_core_value_sig2DAB = Array.isArray(var_core_value_sig9989.params["historyWidgetTypes"]) ? var_core_value_sig9989.params["historyWidgetTypes"].filter(Xt) : [];
    if ((var_core_value_sig9989.params["historyAction"] === var_core_value_sigE718.UpdateWidget || var_core_value_sig698E.includes(var_core_value_sigE718.UpdateWidget)) && var_core_value_sig2DAB.length > 0) return var_core_value_sig2809.push(...var_core_value_sig2DAB.flatMap(var_core_value_sig0D69 => {
      var var_core_value_sig480E;
      let var_core_value_sig26DB = (var_core_value_sig480E = Kt.get(var_core_value_sig0D69)) == null ? undefined : var_core_value_sig480E.update;
      return var_core_value_sig26DB ? [var_core_value_sig26DB] : [];
    })), var_core_value_sig2809;
    let var_core_value_sig877E = Xt(var_core_value_sig9989.params["historyWidgetType"]) ? Kt.get(var_core_value_sig9989.params["historyWidgetType"]) : undefined;
    switch (var_core_value_sig9989.params["historyAction"]) {
      case var_core_value_sigE718.CreateWidget:
        return var_core_value_sig2809.push((var_core_value_sig877E == null ? undefined : var_core_value_sig877E.create) ?? "bases-history-ui.action.createDashboardWidget"), var_core_value_sig2809;
      case var_core_value_sigE718.UpdateWidget:
        return var_core_value_sig2809.push((var_core_value_sig877E == null ? undefined : var_core_value_sig877E.update) ?? "bases-history-ui.action.updateDashboardWidget"), var_core_value_sig2809;
      case var_core_value_sigE718.RemoveWidget:
        return var_core_value_sig2809.push((var_core_value_sig877E == null ? undefined : var_core_value_sig877E.remove) ?? "bases-history-ui.action.removeDashboardWidget"), var_core_value_sig2809;
      default:
        return var_core_value_sig2809;
    }
  });
  return [...new Set(var_core_value_sigF051)];
}
function Yt(var_core_value_sig5825) {
  return var_core_value_sig5825 === var_core_value_sigE718.CreateWidget || var_core_value_sig5825 === var_core_value_sigE718.RenameDashboard || var_core_value_sig5825 === var_core_value_sigE718.ReorderWidgets || var_core_value_sig5825 === var_core_value_sigE718.UpdateWidget || var_core_value_sig5825 === var_core_value_sigE718.RemoveWidget;
}
function Xt(var_core_value_sig4EB7) {
  return var_core_value_sig4EB7 === var_core_value_sigAEC8.PivotChart || var_core_value_sig4EB7 === var_core_value_sigAEC8.TableFilter || var_core_value_sig4EB7 === var_core_value_sigAEC8.Text || var_core_value_sig4EB7 === var_core_value_sigAEC8.Image || var_core_value_sig4EB7 === var_core_value_sigAEC8.FormulaShape;
}
function Zt(var_core_value_sig73AF) {
  let var_core_value_sig548A = [],
    var_core_value_sigE026 = new Set();
  return var_core_value_sig73AF.mutations["forEach"](var_core_value_sig20C8 => {
    if (var_core_value_sig20C8.id !== var_core_value_sig3B10.id || !Qt(var_core_value_sig20C8.params)) return;
    let {
      historyAction: var_core_value_sigE9A7,
      viewType: var_core_value_sigBECE
    } = var_core_value_sig20C8.params;
    if (!$t(var_core_value_sigBECE)) return;
    let var_core_value_sig1B22 = Gt.get(var_core_value_sigBECE);
    if (var_core_value_sig1B22) {
      if (var_core_value_sigE9A7 === var_core_value_sig89E6.CreateView) {
        var_core_value_sig548A.push(var_core_value_sig1B22.create);
        return;
      }
      if (var_core_value_sigE9A7 === var_core_value_sig89E6.DeleteView) {
        var_core_value_sig548A.push(var_core_value_sig1B22.delete);
        return;
      }
      var_core_value_sigE026.add(var_core_value_sigBECE);
    }
  }), var_core_value_sig548A.length > 0 || var_core_value_sigE026.forEach(var_core_value_sig7F72 => {
    let var_core_value_sig7B2A = Gt.get(var_core_value_sig7F72);
    var_core_value_sig7B2A && (var_core_value_sig73AF.commandIds["has"](var_core_value_sig1179.id) && var_core_value_sig548A.push(var_core_value_sig7B2A.create), var_core_value_sig73AF.commandIds["has"](var_core_value_sig7100.id) && var_core_value_sig548A.push(var_core_value_sig7B2A.delete));
  }), [...new Set(var_core_value_sig548A)];
}
function Qt(var_core_value_sig339E) {
  return typeof var_core_value_sig339E == "object" && !!var_core_value_sig339E;
}
function $t(var_core_value_sig7550) {
  return var_core_value_sig7550 === var_core_value_sig3A17.Grid || var_core_value_sig7550 === var_core_value_sig3A17.Kanban || var_core_value_sig7550 === var_core_value_sig3A17.Calendar || var_core_value_sig7550 === var_core_value_sig3A17.Gantt || var_core_value_sig7550 === var_core_value_sig3A17.Gallery || var_core_value_sig7550 === var_core_value_sig3A17.Pivot;
}
function H(var_core_value_sig2983) {
  "@babel/helpers - typeof";

  return H = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sig06CD) {
    return typeof var_core_value_sig06CD;
  } : function (var_core_value_sigA5F1) {
    return var_core_value_sigA5F1 && typeof Symbol == "function" && var_core_value_sigA5F1.constructor === Symbol && var_core_value_sigA5F1 !== Symbol.prototype ? "symbol" : typeof var_core_value_sigA5F1;
  }, H(var_core_value_sig2983);
}
function en(var_core_value_sigE1B0, var_core_value_sigD4FF) {
  if (H(var_core_value_sigE1B0) != "object" || !var_core_value_sigE1B0) return var_core_value_sigE1B0;
  var var_core_value_sig1E5B = var_core_value_sigE1B0[Symbol.toPrimitive];
  if (var_core_value_sig1E5B !== undefined) {
    var var_core_value_sigB680 = var_core_value_sig1E5B.call(var_core_value_sigE1B0, var_core_value_sigD4FF || "default");
    if (H(var_core_value_sigB680) != "object") return var_core_value_sigB680;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sigD4FF === "string" ? String : Number)(var_core_value_sigE1B0);
}
function tn(var_core_value_sig1F64) {
  var var_core_value_sigDD1C = en(var_core_value_sig1F64, "string");
  return H(var_core_value_sigDD1C) == "symbol" ? var_core_value_sigDD1C : var_core_value_sigDD1C + "";
}
function U(var_core_value_sig2C39, var_core_value_sigB7D1, var_core_value_sig64F0) {
  return (var_core_value_sigB7D1 = tn(var_core_value_sigB7D1)) in var_core_value_sig2C39 ? Object.defineProperty(var_core_value_sig2C39, var_core_value_sigB7D1, {
    value: var_core_value_sig64F0,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sig2C39[var_core_value_sigB7D1] = var_core_value_sig64F0, var_core_value_sig2C39;
}
let W = class extends var_core_value_sigBE5E {
  constructor(var_core_value_sig97A2, var_core_value_sig07E9, var_core_value_sig4F59, var_core_value_sigF564) {
    super(), this._renderManagerService = var_core_value_sig97A2, this._highlightService = var_core_value_sig07E9, this._canvasRootResolverService = var_core_value_sig4F59, this._canvasPopupService = var_core_value_sigF564, U(this, "_generations", new Map()), U(this, "_badgeDisposables", new Map());
  }
  async show(var_core_value_sig8CFA, var_core_value_sig2E11) {
    let var_core_value_sig5B69 = (this._generations["get"](var_core_value_sig8CFA) ?? 0) + 1;
    this._generations["set"](var_core_value_sig8CFA, var_core_value_sig5B69), this._clearDeletionBadges(var_core_value_sig8CFA);
    let var_core_value_sigB098 = await this._getCanvasComponent(var_core_value_sig8CFA);
    if (this._generations["get"](var_core_value_sig8CFA) !== var_core_value_sig5B69) return;
    if (!var_core_value_sigB098) {
      await this._highlightService["show"](var_core_value_sig8CFA, []);
      return;
    }
    let var_core_value_sigCE71 = var_core_value_sigB098.getController().getHitRegions(),
      var_core_value_sig21D8 = var_core_value_sigB098.getRealBound(),
      var_core_value_sig2B65 = [],
      var_core_value_sigD7EA = new Map(),
      var_core_value_sigB33B = nn(var_core_value_sig2E11);
    var_core_value_sigB33B.filter(var_core_value_sigF0F9 => yn(var_core_value_sigCE71, var_core_value_sigF0F9)).forEach(var_core_value_sig1A0F => {
      let var_core_value_sigFBA4 = q(var_core_value_sigCE71.filter(({
        result: var_core_value_sig7524
      }) => vn(var_core_value_sig7524, var_core_value_sig1A0F)).map(({
        rect: var_core_value_sig2AD8
      }) => var_core_value_sig2AD8));
      if (var_core_value_sigFBA4) {
        var_core_value_sig2B65.push({
          id: var_core_value_sig1A0F.id,
          kind: var_core_value_sig1A0F.kind,
          bounds: {
            left: var_core_value_sig21D8.left + var_core_value_sigFBA4.left,
            top: var_core_value_sig21D8.top + var_core_value_sigFBA4.top,
            width: var_core_value_sigFBA4.width,
            height: var_core_value_sigFBA4.height
          },
          outlineOnly: var_core_value_sig1A0F.kind === "delete"
        });
        return;
      }
      if (!var_core_value_sig1A0F.recordId && !var_core_value_sig1A0F.fieldId) {
        let var_core_value_sig2AD0 = G(var_core_value_sigCE71, var_core_value_sig21D8, var_core_value_sig1A0F);
        var_core_value_sig2B65.push({
          id: "base-scope-" + an(var_core_value_sig1A0F),
          kind: var_core_value_sig1A0F.kind,
          bounds: {
            left: var_core_value_sig21D8.left + var_core_value_sig2AD0.left,
            top: var_core_value_sig21D8.top + var_core_value_sig2AD0.top,
            width: var_core_value_sig2AD0.width,
            height: var_core_value_sig2AD0.height
          },
          outlineOnly: true
        });
        return;
      }
      ln(var_core_value_sig2B65, var_core_value_sigD7EA, var_core_value_sigCE71, var_core_value_sig21D8, var_core_value_sigB33B, var_core_value_sig1A0F);
    }), await this._highlightService["show"](var_core_value_sig8CFA, var_core_value_sig2B65), this._generations["get"](var_core_value_sig8CFA) === var_core_value_sig5B69 && this._showDeletionBadges(var_core_value_sig8CFA, Array.from(var_core_value_sigD7EA.values()));
  }
  clear(var_core_value_sig24B9) {
    this._generations["set"](var_core_value_sig24B9, (this._generations["get"](var_core_value_sig24B9) ?? 0) + 1), this._clearDeletionBadges(var_core_value_sig24B9), this._highlightService["clear"](var_core_value_sig24B9);
  }
  dispose() {
    Array.from(this._generations["keys"]()).forEach(var_core_value_sig4383 => this.clear(var_core_value_sig4383)), super.dispose();
  }
  async _getCanvasComponent(var_core_value_sigE627) {
    for (let var_core_value_sig186C = 0; var_core_value_sig186C <= 120; var_core_value_sig186C++) {
      let var_core_value_sig3EEE = this._renderManagerService["getRenderUnitById"](var_core_value_sigE627),
        var_core_value_sigBC46 = var_core_value_sig3EEE == null ? undefined : var_core_value_sig3EEE.scene["getObject"](var_core_value_sig68BE),
        var_core_value_sig3D7D = var_core_value_sigBC46 instanceof var_core_value_sigCA05 ? var_core_value_sigBC46 : var_core_value_sig3EEE == null ? undefined : var_core_value_sig3EEE.components["get"](var_core_value_sig68BE);
      if (var_core_value_sig3D7D instanceof var_core_value_sigCA05 && var_core_value_sig3D7D.getController().getHitRegions().length > 0) return var_core_value_sig3D7D;
      await bn();
    }
    return null;
  }
  _showDeletionBadges(var_core_value_sigEF3E, var_core_value_sig273D) {
    if (var_core_value_sig273D.length === 0) return;
    let var_core_value_sig9A0D = this._renderManagerService["getRenderUnitById"](var_core_value_sigEF3E),
      var_core_value_sigA319 = this._canvasRootResolverService["getCanvasRoot"](var_core_value_sigEF3E);
    if (!var_core_value_sig9A0D || !var_core_value_sigA319) return;
    let var_core_value_sig2D58 = var_core_value_sig9A0D.engine["getCanvasElement"](),
      var_core_value_sig223F = new var_core_value_sig0281();
    var_core_value_sig273D.forEach(var_core_value_sigD955 => {
      let var_core_value_sig48BD = fn(var_core_value_sigA319, var_core_value_sigD955.bounds),
        var_core_value_sig429F = new var_core_value_sigCD82(var_core_value_sig48BD),
        var_core_value_sigF62A = {
          count: var_core_value_sigD955.changes["length"],
          labels: un(var_core_value_sigD955.changes)
        },
        var_core_value_sig8178 = this._canvasPopupService["addPopup"]({
          unitId: var_core_value_sigEF3E,
          subUnitId: var_core_value_sigEF3E,
          componentKey: Ut,
          direction: "top-left",
          anchorRect: var_core_value_sig48BD,
          anchorRect$: var_core_value_sig429F,
          canvasElement: var_core_value_sig2D58,
          constrainToCanvas: true,
          hideOnInvisible: true,
          extraProps: var_core_value_sigF62A
        });
      var_core_value_sig223F.add({
        dispose: () => {
          this._canvasPopupService["removePopup"](var_core_value_sig8178), var_core_value_sig429F.complete();
        }
      });
    }), this._badgeDisposables["set"](var_core_value_sigEF3E, var_core_value_sig223F);
  }
  _clearDeletionBadges(var_core_value_sigD749) {
    var var_core_value_sigCFFA;
    (var_core_value_sigCFFA = this._badgeDisposables["get"](var_core_value_sigD749)) == null || var_core_value_sigCFFA.dispose(), this._badgeDisposables["delete"](var_core_value_sigD749);
  }
};
W = R([L(0, var_core_value_sigA70D), L(1, var_core_value_sigE722(var_core_value_sig6FB2)), L(2, var_core_value_sig2F2B), L(3, var_core_value_sigE722(var_core_value_sig18E0))], W);
function nn(var_core_value_sig85B1) {
  let var_core_value_sig3141 = new Set(var_core_value_sig85B1.filter(var_core_value_sig58C1 => var_core_value_sig58C1.recordId && !var_core_value_sig58C1.fieldId).map(var_core_value_sig5090 => on(var_core_value_sig5090))),
    var_core_value_sig2162 = new Set(var_core_value_sig85B1.filter(var_core_value_sigC368 => var_core_value_sigC368.fieldId && !var_core_value_sigC368.recordId).map(var_core_value_sigAD56 => sn(var_core_value_sigAD56))),
    var_core_value_sig2EAD = new Map();
  return var_core_value_sig85B1.forEach(var_core_value_sigDB4A => {
    if (var_core_value_sigDB4A.recordId && var_core_value_sigDB4A.fieldId && (var_core_value_sig3141.has(on(var_core_value_sigDB4A)) || var_core_value_sig2162.has(sn(var_core_value_sigDB4A)))) return;
    let var_core_value_sig6418 = an(var_core_value_sigDB4A),
      var_core_value_sig1896 = var_core_value_sig2EAD.get(var_core_value_sig6418);
    var_core_value_sig2EAD.set(var_core_value_sig6418, var_core_value_sig1896 ? {
      ...var_core_value_sig1896,
      kind: rn(var_core_value_sig1896.kind, var_core_value_sigDB4A.kind)
    } : var_core_value_sigDB4A);
  }), Array.from(var_core_value_sig2EAD.values());
}
function rn(var_core_value_sig6774, var_core_value_sig340D) {
  return var_core_value_sig6774 === var_core_value_sig340D ? var_core_value_sig6774 : var_core_value_sig6774 === "update" ? var_core_value_sig340D : var_core_value_sig340D === "update" ? var_core_value_sig6774 : "update";
}
function an(var_core_value_sig82D4) {
  return [var_core_value_sig82D4.tableId, var_core_value_sig82D4.viewId, var_core_value_sig82D4.recordId, var_core_value_sig82D4.fieldId].map(var_core_value_sig0285 => var_core_value_sig0285 ?? "").join(":");
}
function on(var_core_value_sigBDE4) {
  return [var_core_value_sigBDE4.tableId, var_core_value_sigBDE4.viewId, var_core_value_sigBDE4.recordId].map(var_core_value_sig777D => var_core_value_sig777D ?? "").join(":");
}
function sn(var_core_value_sig7DF1) {
  return [var_core_value_sig7DF1.tableId, var_core_value_sig7DF1.viewId, var_core_value_sig7DF1.fieldId].map(var_core_value_sig3F4C => var_core_value_sig3F4C ?? "").join(":");
}
function cn(var_core_value_sigDC86) {
  return [var_core_value_sigDC86.tableId, var_core_value_sigDC86.viewId].map(var_core_value_sigD65A => var_core_value_sigD65A ?? "").join(":");
}
function G(var_core_value_sig0B0C, var_core_value_sigA39E, var_core_value_sigBBEE) {
  return q(var_core_value_sig0B0C.filter(({
    result: var_core_value_sig5A13
  }) => K(var_core_value_sig5A13, var_core_value_sigBBEE)).map(({
    rect: var_core_value_sigF593
  }) => var_core_value_sigF593)) ?? {
    left: 0,
    top: 0,
    width: var_core_value_sigA39E.width,
    height: var_core_value_sigA39E.height
  };
}
function ln(var_core_value_sig011D, var_core_value_sig6167, var_core_value_sig65A1, var_core_value_sig7F19, var_core_value_sig7827, var_core_value_sig652C) {
  let var_core_value_sig7E32 = hn(var_core_value_sig7827, var_core_value_sig652C),
    var_core_value_sig4C07 = mn(var_core_value_sig65A1, var_core_value_sig652C, var_core_value_sig7E32);
  if (var_core_value_sig4C07) {
    let var_core_value_sig3607 = var_core_value_sig652C.recordId ? "record" : "field",
      var_core_value_sigB512 = cn(var_core_value_sig652C) + ":" + var_core_value_sig3607 + ":" + var_core_value_sig7E32,
      var_core_value_sigF2E6 = var_core_value_sig6167.get(var_core_value_sigB512);
    if (var_core_value_sigF2E6) {
      var_core_value_sigF2E6.changes["push"](var_core_value_sig652C);
      return;
    }
    let var_core_value_sig34C8 = pn(var_core_value_sig7F19, var_core_value_sig4C07),
      var_core_value_sigB744 = {
        id: "base-deletion-" + var_core_value_sigB512,
        bounds: var_core_value_sig34C8,
        changes: [var_core_value_sig652C]
      };
    var_core_value_sig6167.set(var_core_value_sigB512, var_core_value_sigB744), var_core_value_sig011D.push({
      id: var_core_value_sigB744.id,
      kind: var_core_value_sig652C.kind,
      bounds: var_core_value_sig34C8
    });
    return;
  }
  let var_core_value_sig79AB = G(var_core_value_sig65A1, var_core_value_sig7F19, var_core_value_sig652C);
  var_core_value_sig011D.push({
    id: "base-missing-scope-" + var_core_value_sig652C.kind + "-" + cn(var_core_value_sig652C),
    kind: var_core_value_sig652C.kind,
    bounds: pn(var_core_value_sig7F19, var_core_value_sig79AB),
    outlineOnly: true
  });
}
function un(var_core_value_sig8E74) {
  return Array.from(new Set(var_core_value_sig8E74.map(var_core_value_sigEAE2 => dn(var_core_value_sigEAE2))));
}
function dn(var_core_value_sig104C) {
  if (var_core_value_sig104C.removedRecord) {
    let var_core_value_sigE68A = Object.values(var_core_value_sig104C.removedRecord["values"]).find(var_core_value_sigE9ED => ["string", "number", "boolean"].includes(typeof var_core_value_sigE9ED));
    if (var_core_value_sigE68A != null) return String(var_core_value_sigE68A);
  }
  return var_core_value_sig104C.recordId ?? var_core_value_sig104C.fieldId ?? var_core_value_sig104C.label;
}
function fn(var_core_value_sig841D, var_core_value_sig90CB) {
  let var_core_value_sigBDF5 = var_core_value_sig841D.getBoundingClientRect(),
    var_core_value_sigACC6 = var_core_value_sigBDF5.width > 0 && var_core_value_sig841D.clientWidth > 0 ? var_core_value_sigBDF5.width / var_core_value_sig841D.clientWidth : 1,
    var_core_value_sig1614 = var_core_value_sigBDF5.height > 0 && var_core_value_sig841D.clientHeight > 0 ? var_core_value_sigBDF5.height / var_core_value_sig841D.clientHeight : 1,
    var_core_value_sig85C3 = var_core_value_sigBDF5.left + var_core_value_sig90CB.left * var_core_value_sigACC6,
    var_core_value_sigB996 = var_core_value_sigBDF5.top + var_core_value_sig90CB.top * var_core_value_sig1614;
  return {
    left: var_core_value_sig85C3,
    right: var_core_value_sig85C3 + var_core_value_sig90CB.width * var_core_value_sigACC6,
    top: var_core_value_sigB996,
    bottom: var_core_value_sigB996 + var_core_value_sig90CB.height * var_core_value_sig1614
  };
}
function pn(var_core_value_sig4BBA, var_core_value_sig6201) {
  return {
    left: var_core_value_sig4BBA.left + var_core_value_sig6201.left,
    top: var_core_value_sig4BBA.top + var_core_value_sig6201.top,
    width: var_core_value_sig6201.width,
    height: var_core_value_sig6201.height
  };
}
function mn(var_core_value_sig5151, var_core_value_sigB542, var_core_value_sigBB6C) {
  if (var_core_value_sigB542.kind !== "delete" || var_core_value_sigBB6C === null) return null;
  let var_core_value_sigE2BF = var_core_value_sig5151.filter(({
    result: var_core_value_sig3E68
  }) => K(var_core_value_sig3E68, var_core_value_sigB542));
  if (var_core_value_sigB542.recordId) {
    let var_core_value_sigF4C5 = gn(var_core_value_sigE2BF, "recordId").sort((var_core_value_sigB577, var_core_value_sig9572) => var_core_value_sigB577.top - var_core_value_sig9572.top),
      var_core_value_sig5410 = _n(var_core_value_sigF4C5);
    if (!var_core_value_sig5410) return null;
    let var_core_value_sig492F = var_core_value_sigBB6C < var_core_value_sigF4C5.length ? var_core_value_sigF4C5[var_core_value_sigBB6C].top : var_core_value_sigF4C5[var_core_value_sigF4C5.length - 1].top + var_core_value_sigF4C5[var_core_value_sigF4C5.length - 1].height;
    return {
      left: var_core_value_sig5410.left,
      top: var_core_value_sig492F - 4 / 2,
      width: var_core_value_sig5410.width,
      height: 4
    };
  }
  if (var_core_value_sigB542.fieldId) {
    let var_core_value_sig8EA0 = gn(var_core_value_sigE2BF, "fieldId").sort((var_core_value_sigD873, var_core_value_sigA12B) => var_core_value_sigD873.left - var_core_value_sigA12B.left),
      var_core_value_sigA6F6 = _n(var_core_value_sig8EA0);
    return var_core_value_sigA6F6 ? {
      left: (var_core_value_sigBB6C < var_core_value_sig8EA0.length ? var_core_value_sig8EA0[var_core_value_sigBB6C].left : var_core_value_sig8EA0[var_core_value_sig8EA0.length - 1].left + var_core_value_sig8EA0[var_core_value_sig8EA0.length - 1].width) - 4 / 2,
      top: var_core_value_sigA6F6.top,
      width: 4,
      height: var_core_value_sigA6F6.height
    } : null;
  }
  return null;
}
function hn(var_core_value_sigB8C7, var_core_value_sigA56E) {
  let var_core_value_sig1998;
  if (var_core_value_sigA56E.recordId ? var_core_value_sig1998 = var_core_value_sigA56E.recordIndex : var_core_value_sigA56E.fieldId && (var_core_value_sig1998 = var_core_value_sigA56E.fieldIndex), var_core_value_sigA56E.kind !== "delete" || var_core_value_sig1998 === undefined) return null;
  let var_core_value_sigFF19 = new Set(var_core_value_sigB8C7.flatMap(var_core_value_sigCDDA => {
    if (var_core_value_sigCDDA.kind !== "delete" || var_core_value_sigCDDA.tableId !== var_core_value_sigA56E.tableId || var_core_value_sigCDDA.viewId !== var_core_value_sigA56E.viewId) return [];
    let var_core_value_sigE243 = var_core_value_sigA56E.recordId ? var_core_value_sigCDDA.recordIndex : var_core_value_sigCDDA.fieldIndex;
    return var_core_value_sigE243 !== undefined && var_core_value_sigE243 < var_core_value_sig1998 ? [var_core_value_sigE243] : [];
  }));
  return Math.max(0, var_core_value_sig1998 - var_core_value_sigFF19.size);
}
function gn(var_core_value_sig43B8, var_core_value_sigD98F) {
  let var_core_value_sig66C0 = new Map();
  return var_core_value_sig43B8.forEach(({
    rect: var_core_value_sig74A8,
    result: var_core_value_sig21B2
  }) => {
    let var_core_value_sigDE08;
    if (var_core_value_sigD98F === "recordId" && "recordId" in var_core_value_sig21B2 ? var_core_value_sigDE08 = var_core_value_sig21B2.recordId : var_core_value_sigD98F === "fieldId" && "fieldId" in var_core_value_sig21B2 && (var_core_value_sigDE08 = var_core_value_sig21B2.fieldId), typeof var_core_value_sigDE08 != "string") return;
    let var_core_value_sigACCB = var_core_value_sig66C0.get(var_core_value_sigDE08) ?? [];
    var_core_value_sigACCB.push(var_core_value_sig74A8), var_core_value_sig66C0.set(var_core_value_sigDE08, var_core_value_sigACCB);
  }), Array.from(var_core_value_sig66C0.values()).flatMap(var_core_value_sig7F33 => {
    let var_core_value_sig0C53 = q(var_core_value_sig7F33);
    return var_core_value_sig0C53 ? [var_core_value_sig0C53] : [];
  });
}
function _n(var_core_value_sig9D15) {
  return q(var_core_value_sig9D15.map(var_core_value_sigEA04 => ({
    x: var_core_value_sigEA04.left,
    y: var_core_value_sigEA04.top,
    width: var_core_value_sigEA04.width,
    height: var_core_value_sigEA04.height
  })));
}
function vn(var_core_value_sigB785, var_core_value_sig130F) {
  return !K(var_core_value_sigB785, var_core_value_sig130F) || var_core_value_sig130F.recordId && (!("recordId" in var_core_value_sigB785) || var_core_value_sigB785.recordId !== var_core_value_sig130F.recordId) || !var_core_value_sig130F.recordId && "recordId" in var_core_value_sigB785 || var_core_value_sig130F.fieldId && (!("fieldId" in var_core_value_sigB785) || var_core_value_sigB785.fieldId !== var_core_value_sig130F.fieldId) ? false : var_core_value_sig130F.fieldId ? var_core_value_sig130F.recordId !== undefined || var_core_value_sigB785.type["includes"]("header") : var_core_value_sig130F.recordId !== undefined;
}
function K(var_core_value_sigC0E3, var_core_value_sig52F7) {
  return !(var_core_value_sig52F7.tableId && (!("tableId" in var_core_value_sigC0E3) || var_core_value_sigC0E3.tableId !== var_core_value_sig52F7.tableId) || var_core_value_sig52F7.viewId && (!("viewId" in var_core_value_sigC0E3) || var_core_value_sigC0E3.viewId !== var_core_value_sig52F7.viewId));
}
function yn(var_core_value_sig866F, var_core_value_sigDE3D) {
  return var_core_value_sig866F.some(({
    result: var_core_value_sig7A62
  }) => K(var_core_value_sig7A62, var_core_value_sigDE3D));
}
function q(var_core_value_sigF175) {
  if (var_core_value_sigF175.length === 0) return null;
  let var_core_value_sig6A18 = Math.min(...var_core_value_sigF175.map(var_core_value_sig8109 => var_core_value_sig8109.x)),
    var_core_value_sig4E3D = Math.min(...var_core_value_sigF175.map(var_core_value_sig7565 => var_core_value_sig7565.y)),
    var_core_value_sig49B0 = Math.max(...var_core_value_sigF175.map(var_core_value_sigD4FB => var_core_value_sigD4FB.x + var_core_value_sigD4FB.width)),
    var_core_value_sig2547 = Math.max(...var_core_value_sigF175.map(var_core_value_sig3E71 => var_core_value_sig3E71.y + var_core_value_sig3E71.height));
  return {
    left: var_core_value_sig6A18,
    top: var_core_value_sig4E3D,
    width: var_core_value_sig49B0 - var_core_value_sig6A18,
    height: var_core_value_sig2547 - var_core_value_sig4E3D
  };
}
function bn() {
  return new Promise(var_core_value_sig01B3 => globalThis.setTimeout(var_core_value_sig01B3, 16));
}
let J = class extends var_core_value_sigBE5E {
  constructor(var_core_value_sig7442, var_core_value_sigDF87, var_core_value_sig9EE0, var_core_value_sigF0511, var_core_value_sig0B45, var_core_value_sig36F8, var_core_value_sig03E1, var_core_value_sigBB57) {
    super(), this._diffService = var_core_value_sig7442, this._snapshotService = var_core_value_sig9EE0, this._commandService = var_core_value_sigF0511, this._univerInstanceService = var_core_value_sig0B45, this._baseUIStateService = var_core_value_sig36F8, this._logService = var_core_value_sig03E1, this._highlightService = var_core_value_sigBB57, U(this, "type", var_core_value_sig26EC.UNIVER_BASE), U(this, "_changesGeneration", 0), U(this, "_loadGeneration", 0), U(this, "_loadQueue", Promise.resolve()), U(this, "_unitId", ""), U(this, "_changes", []), this.disposeWithMe(var_core_value_sigDF87.register(this)), this.disposeWithMe(var_core_value_sig6A78(this._baseUIStateService["state$"].pipe(var_core_value_sig2AE0(var_core_value_sigF230 => ({
      tableId: var_core_value_sigF230.activeTableId,
      viewId: var_core_value_sigF230.activeViewId
    })), var_core_value_sig96FA((var_core_value_sig09B8, var_core_value_sig6F91) => var_core_value_sig09B8.tableId === var_core_value_sig6F91.tableId && var_core_value_sig09B8.viewId === var_core_value_sig6F91.viewId)).subscribe(() => {
      this._unitId && this._highlightService["show"](this._unitId, this._changes).catch(var_core_value_sig27E5 => {
        this._logService["error"]("[BasesHistoryRenderAdapterService]: Failed to render Base history highlights.", var_core_value_sig27E5);
      });
    })));
  }
  loadRevision(var_core_value_sig7C4A, var_core_value_sigE799) {
    let var_core_value_sigB601 = ++this._loadGeneration,
      var_core_value_sig8B71 = this._loadQueue["catch"](() => undefined).then(async () => {
        if (var_core_value_sigB601 !== this._loadGeneration) return;
        this._getBase(var_core_value_sig7C4A) && this._univerInstanceService["disposeUnit"](var_core_value_sig7C4A);
        let var_core_value_sigF9C7 = await this._snapshotService["loadBase"](var_core_value_sig7C4A, var_core_value_sigE799.endRevision);
        if (var_core_value_sigB601 !== this._loadGeneration) {
          this._getBase(var_core_value_sig7C4A) === var_core_value_sigF9C7 && this._univerInstanceService["disposeUnit"](var_core_value_sig7C4A);
          return;
        }
        await this._activateRevisionLocation(var_core_value_sigF9C7), this._univerInstanceService["focusUnit"](var_core_value_sig7C4A);
      });
    return this._loadQueue = var_core_value_sig8B71, var_core_value_sig8B71;
  }
  async loadChanges(var_core_value_sigAEFB, var_core_value_sig826B) {
    this._unitId = var_core_value_sigAEFB;
    let var_core_value_sigCF89 = ++this._changesGeneration,
      var_core_value_sig00CB = await this._diffService["compare"](var_core_value_sigAEFB, var_core_value_sig826B);
    var_core_value_sigCF89 === this._changesGeneration && (this._changes = var_core_value_sig00CB, await this._highlightService["show"](var_core_value_sigAEFB, var_core_value_sig00CB));
  }
  close() {
    ++this._changesGeneration, ++this._loadGeneration, this._changes = [], this._unitId &&= (this._highlightService["clear"](this._unitId), "");
  }
  _getBase(var_core_value_sig77EE) {
    return this._univerInstanceService["getUnit"](var_core_value_sig77EE, var_core_value_sig26EC.UNIVER_BASE) ?? null;
  }
  async _activateRevisionLocation(var_core_value_sig9F76) {
    let var_core_value_sigB008 = var_core_value_sig9F76.getSnapshot(),
      var_core_value_sig8721 = this._baseUIStateService["getState"](),
      var_core_value_sig08BA = var_core_value_sig8721.activeTableId && var_core_value_sigB008.tables[var_core_value_sig8721.activeTableId] ? var_core_value_sig8721.activeTableId : var_core_value_sigB008.tableOrder["find"](var_core_value_sig8895 => var_core_value_sigB008.tables[var_core_value_sig8895]);
    if (!var_core_value_sig08BA) return;
    await this._commandService["executeCommand"](var_core_value_sig7D40.id, {
      unitId: var_core_value_sig9F76.getUnitId(),
      tableId: var_core_value_sig08BA
    });
    let var_core_value_sigDBB5 = var_core_value_sigB008.tables[var_core_value_sig08BA],
      var_core_value_sigCFAC = var_core_value_sig8721.activeViewId && var_core_value_sigDBB5.views[var_core_value_sig8721.activeViewId] ? var_core_value_sig8721.activeViewId : var_core_value_sigDBB5.viewOrder["find"](var_core_value_sigC80B => var_core_value_sigDBB5.views[var_core_value_sigC80B]);
    var_core_value_sigCFAC && (await this._commandService["executeCommand"](var_core_value_sig6C7E.id, {
      unitId: var_core_value_sig9F76.getUnitId(),
      tableId: var_core_value_sig08BA,
      viewId: var_core_value_sigCFAC
    }));
  }
};
J = R([L(0, var_core_value_sigE722(var_core_value_sig7D1B)), L(1, var_core_value_sigE722(var_core_value_sigEB43)), L(2, var_core_value_sigE722(var_core_value_sigFDEE)), L(3, var_core_value_sig281C), L(4, var_core_value_sig585D), L(5, var_core_value_sig70AF), L(6, var_core_value_sigB16B), L(7, var_core_value_sigE722(W))], J);
let Y = class extends var_core_value_sig4186 {
  constructor(var_core_value_sig237B, var_core_value_sigFEAB, var_core_value_sigE347, var_core_value_sig3C5B) {
    let {
      collaborationClientConfig: var_core_value_sig200B,
      ...var_core_value_sig3863
    } = var_core_value_sig237B;
    super(var_core_value_sig3863, var_core_value_sigFEAB, var_core_value_sigE347, var_core_value_sig3C5B), this._injector = var_core_value_sigFEAB, var_core_value_sigE347.setConfig(var_core_value_sig7BAF, var_core_value_sig200B);
  }
  onStarting() {
    super.onStarting(), var_core_value_sig36E7(this._injector, [[var_core_value_sig14CB, {
      useClass: var_core_value_sig066E
    }], [B], [V], [W], [J]]), this._injector["get"](B), this._injector["get"](V), this._injector["get"](J);
  }
};
U(Y, "pluginName", "UNIVER_BASES_HISTORY_VIEWER_PLUGIN"), U(Y, "packageName", Bt), U(Y, "version", Vt), U(Y, "type", var_core_value_sig26EC.UNIVER_UNKNOWN), Y = R([var_core_value_sigD948(var_core_value_sigC56D, var_core_value_sig7BE0, var_core_value_sigD04E), L(1, var_core_value_sigE722(var_core_value_sig062A)), L(2, var_core_value_sig3C92), L(3, var_core_value_sigB16B)], Y);
let X = class extends var_core_value_sigBE5E {
  constructor(var_core_value_sigC97C, var_core_value_sigC4B1, var_core_value_sig1BD9, var_core_value_sigE43E, var_core_value_sigA937, var_core_value_sigCAD5, var_core_value_sigE503, var_core_value_sig48DD) {
    super(), this._configService = var_core_value_sigC97C, this._restoreService = var_core_value_sigC4B1, this._adapterRegistry = var_core_value_sig1BD9, this._localeService = var_core_value_sigE43E, this._themeService = var_core_value_sigA937, this._collaborationController = var_core_value_sigCAD5, this._dataLoaderService = var_core_value_sigE503, this._univerInstanceService = var_core_value_sig48DD, U(this, "_historyUniver", null), U(this, "_opening", null), U(this, "_openGeneration", 0), U(this, "_sessionDisposables", new var_core_value_sig0281()), U(this, "_container", null), U(this, "_unitId", ""), U(this, "_location", undefined);
  }
  open(var_core_value_sig5E6A) {
    if (this._historyUniver) return Promise.resolve();
    if (this._opening) return this._opening;
    let var_core_value_sigB7FC = ++this._openGeneration,
      var_core_value_sig9CD9 = this._open(var_core_value_sig5E6A, var_core_value_sigB7FC).finally(() => {
        this._opening === var_core_value_sig9CD9 && (this._opening = null);
      });
    return this._opening = var_core_value_sig9CD9, var_core_value_sig9CD9;
  }
  async _open(var_core_value_sigFD0C, var_core_value_sig849B) {
    let var_core_value_sig5F1A = this._adapterRegistry["get"](var_core_value_sig26EC.UNIVER_BASE);
    if (!var_core_value_sig5F1A) throw Error("[BasesHistoryLoaderService]: Base history adapter is not registered.");
    let var_core_value_sigB455 = await Promise.all([var_core_value_sig5F1A.canView(var_core_value_sigFD0C), var_core_value_sig5F1A.canRevert(var_core_value_sigFD0C)]).catch(var_core_value_sig284F => {
      if (var_core_value_sig849B === this._openGeneration) throw var_core_value_sig284F;
      return null;
    });
    if (!var_core_value_sigB455 || var_core_value_sig849B !== this._openGeneration) return;
    let [var_core_value_sig5241, var_core_value_sigC6E5] = var_core_value_sigB455;
    if (!var_core_value_sig5241) throw Error("[BasesHistoryLoaderService]: The current user cannot view history for this Base.");
    this._unitId = var_core_value_sigFD0C, this._location = var_core_value_sig5F1A.captureLocation(var_core_value_sigFD0C);
    let var_core_value_sigCEFB = this._ensureContainer();
    var_core_value_sigCEFB.style["display"] = "block";
    let var_core_value_sig1537 = this._localeService["getCurrentLocale"](),
      var_core_value_sigE4C6 = this._localeService["getLocales"](),
      var_core_value_sig4313 = new var_core_value_sigB683({
        theme: this._themeService["getCurrentTheme"](),
        darkMode: this._themeService["darkMode"],
        locale: var_core_value_sig1537,
        locales: var_core_value_sigE4C6 ? {
          [var_core_value_sig1537]: var_core_value_sigE4C6
        } : undefined,
        direction: this._localeService["getDirection"](),
        override: [[var_core_value_sigED71, {
          useClass: var_core_value_sig5A75
        }]]
      });
    this._historyUniver = var_core_value_sig4313, this._syncViewerServices(var_core_value_sig4313, var_core_value_sigCEFB);
    try {
      this._registerChildPlugins(var_core_value_sig4313, var_core_value_sigC6E5, var_core_value_sigCEFB), this._createPlaceholder(var_core_value_sig4313);
    } catch (var_core_value_sigE154) {
      throw var_core_value_sig849B === this._openGeneration ? this.close() : var_core_value_sig4313.dispose(), var_core_value_sigE154;
    }
  }
  close() {
    ++this._openGeneration, this._opening = null, this._sessionDisposables["dispose"]();
    let var_core_value_sigFC87 = this._historyUniver;
    this._historyUniver = null, var_core_value_sigFC87 == null || var_core_value_sigFC87.dispose(), this._unitId = "", this._location = undefined, this._container && (this._container["style"].display = "none");
  }
  _syncViewerServices(var_core_value_sig156F, var_core_value_sigDD51) {
    let var_core_value_sigF057 = var_core_value_sig156F.__getInjector(),
      var_core_value_sig72F6 = var_core_value_sigF057.get(var_core_value_sig050A),
      var_core_value_sig9FBA = var_core_value_sigF057.get(var_core_value_sig870F);
    this._sessionDisposables["add"](this._themeService["darkMode$"].subscribe(var_core_value_sig4632 => {
      var_core_value_sig9FBA.setDarkMode(var_core_value_sig4632);
    })), this._sessionDisposables["add"](this._themeService["currentTheme$"].subscribe(var_core_value_sig12F2 => {
      var_core_value_sig9FBA.setTheme(var_core_value_sig12F2);
    })), this._sessionDisposables["add"](this._localeService["currentLocale$"].subscribe(var_core_value_sig2259 => {
      let var_core_value_sig9E2F = this._localeService["getLocales"]();
      var_core_value_sig9E2F && var_core_value_sig72F6.load({
        [var_core_value_sig2259]: var_core_value_sig9E2F
      }), var_core_value_sig72F6.setLocale(var_core_value_sig2259);
    })), this._sessionDisposables["add"](this._localeService["direction$"].subscribe(var_core_value_sigD082 => {
      var_core_value_sig72F6.setDirection(var_core_value_sigD082), var_core_value_sigDD51.dir = var_core_value_sigD082, var_core_value_sigDD51.style["direction"] = var_core_value_sigD082;
    }));
  }
  async restore(var_core_value_sigFE01) {
    var var_core_value_sigA2CE;
    let var_core_value_sig1975 = this._unitId,
      var_core_value_sig6EA1 = this._location,
      var_core_value_sig029F = this._collaborationController["getCollabEntity"](var_core_value_sig1975);
    if (!var_core_value_sig029F) throw Error("[BasesHistoryLoaderService]: Collaboration is not ready for this Base.");
    let var_core_value_sig3767 = new var_core_value_sig44DD(),
      var_core_value_sig670B = var_core_value_sig040A(var_core_value_sig029F.session["event$"].pipe(var_core_value_sigAB68(var_core_value_sigDBB7 => var_core_value_sigDBB7.eventID === var_core_value_sig218A.CHANGESET_ACK), var_core_value_sigAB68(var_core_value_sigD0A8 => var_core_value_sigB609(var_core_value_sigD0A8, var_core_value_sigFE01)), var_core_value_sigC349(var_core_value_sig3767), var_core_value_sig9D96(10000)));
    try {
      if (!(await this._restoreService["restore"](var_core_value_sig1975, var_core_value_sig26EC.UNIVER_BASE, var_core_value_sigFE01))) throw Error("[BasesHistoryLoaderService]:\x20The\x20restore\x20command\x20was\x20not\x20accepted.");
      await var_core_value_sig670B;
    } catch (var_core_value_sigF4B9) {
      throw var_core_value_sig3767.next(), await var_core_value_sig670B.catch(() => undefined), var_core_value_sigF4B9;
    } finally {
      var_core_value_sig3767.complete();
    }
    this.close(), this._univerInstanceService["disposeUnit"](var_core_value_sig1975), await this._dataLoaderService["loadUnit"](var_core_value_sig1975, var_core_value_sig26EC.UNIVER_BASE), await ((var_core_value_sigA2CE = this._adapterRegistry["get"](var_core_value_sig26EC.UNIVER_BASE)) == null ? undefined : var_core_value_sigA2CE.restoreLocation(var_core_value_sig1975, var_core_value_sig6EA1));
  }
  _ensureContainer() {
    var var_core_value_sig6912;
    if (this._container) return this._container;
    let var_core_value_sigE235 = this._configService["getConfig"](I),
      var_core_value_sig7664 = (var_core_value_sig6912 = this._configService["getConfig"](var_core_value_sigBDEE)) == null ? undefined : var_core_value_sig6912.container,
      var_core_value_sig2281 = (var_core_value_sigE235 == null ? undefined : var_core_value_sigE235.univerContainerId) ?? var_core_value_sig7664,
      var_core_value_sig5E86 = typeof var_core_value_sig2281 == "string" ? document.getElementById(var_core_value_sig2281) : var_core_value_sig2281;
    if (!var_core_value_sig5E86) throw Error("[BasesHistoryLoaderService]: Configure a valid Univer container before opening history.");
    let var_core_value_sig6998 = document.createElement("div");
    return var_core_value_sig6998.style["position"] = "absolute", var_core_value_sig6998.style["inset"] = "0", var_core_value_sig6998.style["zIndex"] = "49", var_core_value_sig6998.style["display"] = "none", var_core_value_sig5E86.appendChild(var_core_value_sig6998), this._container = var_core_value_sig6998, var_core_value_sig6998;
  }
  _registerChildPlugins(var_core_value_sigF639, var_core_value_sigEAE5, var_core_value_sigE94C) {
    let var_core_value_sig6D47 = this._configService["getConfig"](var_core_value_sig3D2C),
      var_core_value_sigCB82 = this._configService["getConfig"](I),
      var_core_value_sigCF4E = [[var_core_value_sigC56D, {
        license: var_core_value_sig6D47 == null ? undefined : var_core_value_sig6D47.ls
      }], [var_core_value_sigCE10], [var_core_value_sig1F40, {
        container: var_core_value_sigE94C,
        header: true,
        toolbar: false,
        footer: true,
        contextMenu: false
      }], [var_core_value_sigA386], [var_core_value_sigC27E, {
        notExecuteFormula: true
      }], [var_core_value_sigC6BC], [var_core_value_sig528D], [var_core_value_sigD04E, {
        disableEdit: true,
        initialState: this._getInitialState(),
        override: [[var_core_value_sig2F2B, {
          useValue: var_core_value_sigB99B(var_core_value_sigE94C)
        }]]
      }], [var_core_value_sig19B4], [var_core_value_sigA676], [var_core_value_sig393E, {
        historyServerUrl: var_core_value_sigCB82 == null ? undefined : var_core_value_sigCB82.historyServerUrl
      }], [var_core_value_sig7BE0]],
      var_core_value_sig6CAD = new Set();
    [...var_core_value_sigCF4E, ...((var_core_value_sigCB82 == null ? undefined : var_core_value_sigCB82.viewerPlugins) ?? [])].forEach(([var_core_value_sig5CEE, var_core_value_sigE92A]) => {
      if (var_core_value_sig6CAD.has(var_core_value_sig5CEE.pluginName)) throw Error("[BasesHistoryLoaderService]:\x20Plugin\x20" + var_core_value_sig5CEE.pluginName + " has already been registered.");
      var_core_value_sig6CAD.add(var_core_value_sig5CEE.pluginName), var_core_value_sigF639.registerPlugin(var_core_value_sig5CEE, var_core_value_sigE92A);
    }), var_core_value_sigF639.registerPlugin(Y, {
      viewerMode: true,
      descriptor: {
        unitId: this._unitId,
        type: var_core_value_sig26EC.UNIVER_BASE
      },
      canRestore: var_core_value_sigEAE5,
      onClose: () => this.close(),
      onRestore: var_core_value_sig362B => this.restore(var_core_value_sig362B),
      collaborationClientConfig: this._configService["getConfig"](var_core_value_sig7BAF)
    });
  }
  _createPlaceholder(var_core_value_sig8CF5) {
    let var_core_value_sigDDD7 = Date.now();
    var_core_value_sig8CF5.createUnit(var_core_value_sig26EC.UNIVER_BASE, {
      id: this._unitId,
      name: "",
      schemaVersion: 1,
      tables: {},
      tableOrder: [],
      createdAt: var_core_value_sigDDD7,
      updatedAt: var_core_value_sigDDD7
    });
  }
  _getInitialState() {
    if (!xn(this._location)) return;
    let {
      tableId: var_core_value_sigB2CE,
      viewId: var_core_value_sig443C
    } = this._location;
    return var_core_value_sigB2CE || var_core_value_sig443C ? {
      tableId: var_core_value_sigB2CE,
      viewId: var_core_value_sig443C
    } : undefined;
  }
  dispose() {
    var var_core_value_sig39B1;
    this.close(), (var_core_value_sig39B1 = this._container) == null || var_core_value_sig39B1.remove(), this._container = null, super.dispose();
  }
};
X = R([L(0, var_core_value_sig3C92), L(1, var_core_value_sigE722(var_core_value_sigF7EF)), L(2, var_core_value_sigE722(var_core_value_sig27F9)), L(3, var_core_value_sigE722(var_core_value_sig050A)), L(4, var_core_value_sigE722(var_core_value_sig870F)), L(5, var_core_value_sigE722(var_core_value_sig8F69)), L(6, var_core_value_sigE722(var_core_value_sig6884)), L(7, var_core_value_sig585D)], X);
function xn(var_core_value_sigBCA9) {
  return typeof var_core_value_sigBCA9 == "object" && !!var_core_value_sigBCA9;
}
const Z = {
  id: "bases-history-ui.operation.open",
  type: var_core_value_sig938F.OPERATION,
  handler: var_core_value_sig4CDF => {
    let var_core_value_sig3F79 = var_core_value_sig4CDF.get(var_core_value_sig585D).getCurrentUnitOfType(var_core_value_sig26EC.UNIVER_BASE);
    return var_core_value_sig3F79 ? (var_core_value_sig4CDF.get(X).open(var_core_value_sig3F79.getUnitId()).catch(var_core_value_sig210D => {
      var_core_value_sig4CDF.get(var_core_value_sigB16B).error("[OpenBasesHistoryOperation]:\x20Failed\x20to\x20open\x20Base\x20history.", var_core_value_sig210D);
    }), true) : false;
  }
};
function Sn() {
  var var_core_value_sig880E;
  let var_core_value_sigC9ED = var_core_value_sig1E1B(var_core_value_sig281C),
    var_core_value_sigB57B = var_core_value_sig1E1B(var_core_value_sig3C92),
    var_core_value_sig780B = var_core_value_sig1E1B(var_core_value_sig050A).t("bases-history-ui.menu.history");
  return (var_core_value_sig880E = var_core_value_sigB57B.getConfig("menu")) != null && (var_core_value_sig880E = var_core_value_sig880E[Z.id]) != null && var_core_value_sig880E.hidden ? null : var_core_value_sig5EFB(var_core_value_sigF866, {
    title: var_core_value_sig780B,
    placement: "top",
    children: var_core_value_sig5EFB(var_core_value_sigB608, {
      type: "button",
      variant: "text",
      className: "univer-h-8 univer-w-8 univer-p-0",
      "aria-label": var_core_value_sig780B,
      onClick: async () => {
        await var_core_value_sigC9ED.executeCommand(Z.id);
      },
      children: var_core_value_sig5EFB(var_core_value_sig2682, {})
    })
  });
}
let Q = class extends var_core_value_sigBE5E {
  constructor(var_core_value_sigB4B4, var_core_value_sigD407, var_core_value_sig63F3) {
    super(), this.disposeWithMe(var_core_value_sigB4B4.registerCommand(Z)), this.disposeWithMe(var_core_value_sig63F3.registerComponent(var_core_value_sig04C6, () => var_core_value_sig3FC7(Sn, var_core_value_sigD407)));
  }
};
Q = R([L(0, var_core_value_sig281C), L(1, var_core_value_sigE722(var_core_value_sig062A)), L(2, var_core_value_sigE161)], Q);
let $ = class extends var_core_value_sig8B32 {
  constructor(var_core_value_sig6A71 = zt, var_core_value_sig3BF6, var_core_value_sig38CE) {
    super(), this._config = var_core_value_sig6A71, this._injector = var_core_value_sig3BF6, this._configService = var_core_value_sig38CE;
    let {
      ...var_core_value_sig62B7
    } = var_core_value_sigEEDB({}, zt, this._config);
    this._configService["setConfig"](I, var_core_value_sig62B7);
  }
  onStarting() {
    var_core_value_sig36E7(this._injector, [[z], [X], [Q]]), this._injector["get"](z), this._injector["get"](Q);
  }
};
U($, "pluginName", "UNIVER_BASES_HISTORY_UI_PLUGIN"), U($, "packageName", Bt), U($, "version", Vt), U($, "type", var_core_value_sig26EC.UNIVER_BASE), $ = R([var_core_value_sigD948(var_core_value_sigC56D, var_core_value_sig9B0D, var_core_value_sig7BE0, var_core_value_sigD04E), L(1, var_core_value_sigE722(var_core_value_sig062A)), L(2, var_core_value_sig3C92)], $);
export { I as BASES_HISTORY_UI_PLUGIN_CONFIG_KEY, $ as UniverBasesHistoryUIPlugin };
