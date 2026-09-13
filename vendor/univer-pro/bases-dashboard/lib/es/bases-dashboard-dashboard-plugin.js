import { ApplyBaseJson1Mutation, BaseJson1OpApplier, BaseJson1OpFactory, IBaseProjectionService, IBaseViewRegistryService, UniverBasesPlugin, UniverRemoteBasesPlugin, canEditBaseTargets, getBaseDashboardPermissionObjectId, getBaseTablePermissionObjectId, getBaseViewPermissionObjectId, matchesBaseCondition, normalizeBaseDateSerial, resolveBaseDateFieldConfig } from "@univerjs-pro/bases";
import { BaseFieldType, BaseFilterConjunction, BaseFilterOperator, BaseViewType, CommandType, CustomCommandExecutionError, DependentOn, Disposable, ICommandService, IConfigService, IPermissionService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, ImageSourceType, Inject, Injector, Optional, Plugin, Tools, UniverInstanceType, generateRandomId, merge, sequenceExecute, touchDependencies } from "@univerjs/core";
import { BehaviorSubject, filter, map } from "rxjs";
import { ChartModel, ChartTypeBits, StaticChartSource, UniverChartPlugin, generateChartContext, reconcileChartContext } from "@univerjs-pro/engine-chart";
import { DataFieldManager, PivotTable, PivotTableFiledAreaEnum, PivotView, isErrorValue, isPrefixValue } from "@univerjs-pro/engine-pivot";
import { IShapeHostAdapterRegistry, UniverShapePlugin, canApplyShapeFormulaLastValue } from "@univerjs-pro/engine-shape";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { UniverShapeEditorPlugin, createFormulaShapeData } from "@univerjs-pro/shape-editor";
import { DataSyncPrimaryController } from "@univerjs/rpc";
import { E, G, M, N, St, Ut, Z, j, w } from "./internal-glue.js";
import { F, Je, Xe } from "./bases-dashboard-dashboard-command.js";
import { B, z } from "./bases-dashboard-pivot-view.js";
import { I, L, R } from "./bases-dashboard-remove-dashboard-widget.js";
import { it } from "./bases-dashboard-default-pivot-view-config.js";
import { A } from "./bases-dashboard-dashboard-resource.js";
import { k } from "./bases-dashboard-pivot-rpcservice.js";
import { Y } from "./bases-dashboard-chart-runtime.js";
import { X } from "./bases-dashboard-dashboard-apicontext.js";
import { He } from "./bases-dashboard-pivot-command.js";
const We = "BASE_DASHBOARD_PLUGIN",
  Ge = 1,
  Ke = 12,
  qe = 32;
let V = class extends Disposable {
  constructor(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46204, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46205, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46206, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46207) {
    super(), this._commandService = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46204, this._instanceService = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46206, this._resourceService = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46207, E(this, "hostType", UniverInstanceType.UNIVER_BASE), E(this, "shapeChanged$", undefined), this.shapeChanged$ = this._resourceService["change$"].pipe(filter(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4623 => var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4623 !== null), map(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4624 => ({
      unitId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4624.unitId
    }))), this.disposeWithMe(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46205.register(this));
  }
  getShape(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46212) {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46213 = this._getWidget(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46212);
    return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46213 ? this._toSnapshot(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46212, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46213) : null;
  }
  listShapes(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46216) {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46217 = this._resourceService["getDashboard"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46216.unitId, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46216.subUnitId);
    return (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46217 == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46217.widgetOrder["map"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4625 => var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46217.widgets[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4625]).filter(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4626 => (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4626 == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4626.type) === F.FormulaShape).map(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4627 => this._toSnapshot({
      ...var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46216,
      shapeId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4627.id
    }, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4627))) ?? [];
  }
  listShapesInUnit(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46220) {
    return this._resourceService["getResource"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46220).dashboardOrder["flatMap"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4628 => this.listShapes({
      hostType: this.hostType,
      unitId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46220,
      subUnitId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4628
    }));
  }
  createShape(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46222, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46223) {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46224 = this._instanceService["getUnit"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46222.unitId, UniverInstanceType.UNIVER_BASE),
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46225 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46224 == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46224.getSnapshot().tableOrder[0];
    if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46225 || !this._resourceService["getDashboard"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46222.unitId, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46222.subUnitId)) return null;
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46226 = Ct(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46223.transform),
      var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB = {
        id: "formula-shape-" + generateRandomId(8),
        type: F.FormulaShape,
        tableId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46225,
        layout: wt(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46226),
        shapeType: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46223.shapeType,
        shapeData: Tools.deepClone(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46223.shapeData ?? createFormulaShapeData()),
        ...(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46223.name ? {
          title: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46223.name
        } : null)
      };
    return this._commandService["syncExecuteCommand"](B.id, {
      unitId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46222.unitId,
      dashboardId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46222.subUnitId,
      widget: var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB
    }) ? this._toSnapshot({
      ...var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46222,
      shapeId: var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.id
    }, var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB) : null;
  }
  updateShape(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46232, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46233) {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46234 = this._getWidget(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46232);
    if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46234) return false;
    let var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2 = {
        ...this._toSnapshot(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46232, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46234).transform,
        ...var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46233.transform
      },
      var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB3 = {
        ...var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46234,
        ...(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46233.name === undefined ? null : {
          title: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46233.name
        }),
        layout: wt(var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2),
        shapeType: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46233.shapeType ?? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46234.shapeType,
        shapeData: Tools.deepClone(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46233.shapeData ?? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46234.shapeData)
      };
    return this._commandService["syncExecuteCommand"](B.id, {
      unitId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46232.unitId,
      dashboardId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46232.subUnitId,
      widget: var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB3
    });
  }
  createFormulaLastValueMutation(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46238, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46239, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46240) {
    return this._getWidget(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46238) ? {
      id: St.id,
      params: {
        unitId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46238.unitId,
        dashboardId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46238.subUnitId,
        widgetId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46238.shapeId,
        guard: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46239,
        lastValue: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46240
      }
    } : null;
  }
  removeShape(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46244) {
    return this._commandService["syncExecuteCommand"](L.id, {
      unitId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46244.unitId,
      dashboardId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46244.subUnitId,
      widgetId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46244.shapeId
    });
  }
  bringToFront(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46246) {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46247 = this._resourceService["getDashboard"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46246.unitId, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46246.subUnitId);
    return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46247 ? this.setZOrder(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46246, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46247.widgetOrder["length"] - 1) : false;
  }
  bringForward(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46250) {
    return this._move(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46250, 1);
  }
  sendBackward(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46252) {
    return this._move(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46252, -1);
  }
  sendToBack(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46254) {
    return this.setZOrder(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46254, 0);
  }
  setZOrder(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46256, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46257) {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46258 = this._resourceService["getDashboard"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46256.unitId, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46256.subUnitId);
    if (!(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46258 != null && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46258.widgets[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46256.shapeId])) return false;
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46259 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46258.widgetOrder["filter"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4629 => var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4629 !== var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46256.shapeId);
    return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46259.splice(Math.max(0, Math.min(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46257, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46259.length)), 0, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46256.shapeId), this._commandService["syncExecuteCommand"](R.id, {
      unitId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46256.unitId,
      dashboard: {
        ...var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46258,
        widgetOrder: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46259
      }
    });
  }
  _move(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46264, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46265) {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46266 = this._resourceService["getDashboard"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46264.unitId, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46264.subUnitId),
      var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D3 = (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46266 == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46266.widgetOrder["indexOf"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46264.shapeId)) ?? -1;
    return var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D3 < 0 ? false : this.setZOrder(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46264, var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D3 + var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46265);
  }
  _getWidget(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46270) {
    var var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46271;
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46272 = (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46271 = this._resourceService["getDashboard"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46270.unitId, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46270.subUnitId)) == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46271.widgets[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46270.shapeId];
    return (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46272 == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46272.type) === F.FormulaShape ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46272 : null;
  }
  _toSnapshot(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46276, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46277) {
    return {
      ...var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46276,
      shapeType: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46277.shapeType,
      shapeData: Tools.deepClone(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46277.shapeData),
      name: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46277.title,
      transform: Tt(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46277),
      visible: true,
      selectable: true
    };
  }
};
function Ct(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46760) {
  return {
    left: (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46760 == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46760.left) ?? 0,
    top: (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46760 == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46760.top) ?? 0,
    width: (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46760 == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46760.width) ?? 4,
    height: (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46760 == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46760.height) ?? 3,
    rotation: (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46760 == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46760.rotation) ?? 0,
    flipX: (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46760 == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46760.flipX) ?? false,
    flipY: (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46760 == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46760.flipY) ?? false
  };
}
function wt(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46762) {
  let var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D9 = Math.max(0, Math.min(11, Math.round(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46762.left)));
  return {
    column: var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D9,
    row: Math.max(0, Math.round(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46762.top)),
    columnSpan: Math.max(1, Math.min(12 - var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D9, Math.round(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46762.width))),
    rowSpan: Math.max(1, Math.round(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46762.height))
  };
}
function Tt(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46764) {
  return {
    left: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46764.layout["column"],
    top: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46764.layout["row"],
    width: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46764.layout["columnSpan"],
    height: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46764.layout["rowSpan"],
    rotation: 0,
    flipX: false,
    flipY: false
  };
}
const Et = {},
  Dt = new Set([Je.id, Xe.id, L.id, R.id, z.id, B.id, I.id, M.id, N.id]);
let H = class extends Disposable {
  constructor(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46280, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46281, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46282) {
    super(), this._permissionService = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46281, this._instanceService = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46282, this.disposeWithMe(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46280.beforeCommandExecuted((var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4630, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4631) => this._check(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4630, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4631)));
  }
  _check(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46286, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46287) {
    if (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46287 != null && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46287.fromCollab || var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46287 != null && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46287.fromChangeset || !Dt.has(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46286.id)) return;
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46288 = At(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46286.params) ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46286.params : undefined;
    if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46288) return;
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46289 = typeof (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46288 == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46288.unitId) == "string" ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46288.unitId : undefined;
    if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46289 || this._instanceService["getUnitType"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46289) !== UniverInstanceType.UNIVER_BASE) return;
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46290 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46286.id === z.id ? Ot(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46288) : kt(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46288);
    if (!canEditBaseTargets(this._permissionService, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46289, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46290)) throw new CustomCommandExecutionError("Base dashboard edit permission denied.");
  }
};
function Ot(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46766) {
  let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46767 = typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46766.tableId == "string" ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46766.tableId : undefined,
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46768 = typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46766.viewId == "string" ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46766.viewId : undefined;
  return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46767 && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46768 ? [getBaseTablePermissionObjectId(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46767), getBaseViewPermissionObjectId(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46767, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46768)] : [];
}
function kt(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46772) {
  let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46773 = typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46772.dashboardId == "string" ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46772.dashboardId : At(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46772.dashboard) && typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46772.dashboard["id"] == "string" ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46772.dashboard["id"] : undefined;
  return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46773 ? [getBaseDashboardPermissionObjectId(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46773)] : [];
}
function At(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46776) {
  return typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46776 == "object" && !!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46776 && !Array.isArray(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46776);
}
let U = class extends Disposable {
  constructor(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46296, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46297) {
    super(), this._resourceManagerService = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46296, this._resourceService = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46297, this.disposeWithMe(this._resourceManagerService["registerPluginResource"]({
      pluginName: We,
      businesses: [UniverInstanceType.UNIVER_BASE],
      toJson: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4632 => this._resourceService["serializeUnit"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4632),
      parseJson: jt,
      onLoad: (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4633, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4634) => this._resourceService["loadUnit"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4633, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4634),
      onUnLoad: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4635 => this._resourceService["unloadUnit"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4635)
    }));
  }
};
function jt(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46778) {
  let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46779;
  try {
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46779 = JSON.parse(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46778);
  } catch {
    return j();
  }
  if (!W(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46779) || !Array.isArray(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46779.dashboardOrder) || !W(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46779.dashboards)) return j();
  let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46780 = j(),
    var_L0_db_endo_itemsSet_pure_O1_zalloc_nothrow_sig92995 = new Set();
  for (let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46300 of var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46779.dashboardOrder) {
    if (typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46300 != "string" || var_L0_db_endo_itemsSet_pure_O1_zalloc_nothrow_sig92995.has(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46300)) continue;
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4636 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46779.dashboards[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46300];
    if (!W(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4636) || var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4636.id !== var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46300 || typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4636.name != "string" || !Array.isArray(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4636.widgetOrder) || !W(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4636.widgets)) continue;
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4637 = Object.fromEntries(Object.entries(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4636.widgets).filter(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D466 => Mt(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D466[1]) && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D466[0] === var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D466[1].id)),
      var_L0_db_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299 = new Set(Object.keys(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4637)),
      var_L0_db_endo_itemsSet_pure_O1_zalloc_nothrow_sig92991 = new Set(),
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4638 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4636.widgetOrder["filter"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D467 => typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D467 != "string" || !var_L0_db_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299.has(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D467) || var_L0_db_endo_itemsSet_pure_O1_zalloc_nothrow_sig92991.has(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D467) ? false : (var_L0_db_endo_itemsSet_pure_O1_zalloc_nothrow_sig92991.add(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D467), true));
    for (let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D468 of var_L0_db_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299) var_L0_db_endo_itemsSet_pure_O1_zalloc_nothrow_sig92991.has(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D468) || var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4638.push(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D468);
    var_L0_db_endo_itemsSet_pure_O1_zalloc_nothrow_sig92995.add(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46300), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46780.dashboardOrder["push"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46300), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46780.dashboards[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46300] = {
      id: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46300,
      name: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4636.name,
      widgetOrder: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4638,
      widgets: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4637
    };
  }
  return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46780;
}
function W(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46784) {
  return typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46784 == "object" && !!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46784 && !Array.isArray(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46784);
}
function Mt(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46786) {
  if (!W(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46786) || typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46786.id != "string" || !Pt(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46786.layout)) return false;
  switch (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46786.type) {
    case F.PivotChart:
      return typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46786.tableId == "string" && typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46786.pivotViewId == "string";
    case F.TableFilter:
      return typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46786.tableId == "string" && (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46786.filter === null || Nt(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46786.filter));
    case F.Text:
      return W(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46786.document);
    case F.Image:
      return typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46786.source == "string" && Object.values(ImageSourceType).some(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4639 => var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4639 === var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46786.sourceType);
    case F.FormulaShape:
      return typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46786.tableId == "string" && typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46786.shapeType == "string" && W(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46786.shapeData) && W(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46786.shapeData["formulaBinding"]) && typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46786.shapeData["formulaBinding"].formula == "string";
    default:
      return false;
  }
}
function Nt(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46788) {
  if (!W(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46788) || var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46788.conjunction !== BaseFilterConjunction.AND && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46788.conjunction !== BaseFilterConjunction.OR || !Array.isArray(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46788.conditions)) return false;
  let var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A36 = Object.values(BaseFilterOperator);
  return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46788.conditions["every"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46301 => W(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46301) && typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46301.fieldId == "string" && var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A36.some(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4640 => var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4640 === var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46301.operator));
}
function Pt(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46790) {
  return W(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46790) && typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46790.column == "number" && typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46790.row == "number" && typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46790.columnSpan == "number" && typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46790.rowSpan == "number";
}
let K = class extends Disposable {
  constructor(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46306, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46307) {
    super(), this.disposeWithMe(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46306.onCommandExecuted(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4651 => {
      It(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4651, w) && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46307.handleResponse(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4651.params);
    }));
  }
};
function It(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46796, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46797) {
  return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46796.id === var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46797.id && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46796.params !== undefined;
}
let q = class extends Disposable {
  constructor(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46310, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46311) {
    super();
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46312 = Lt();
    this.disposeWithMe(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46310.register(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46312)), this.disposeWithMe(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46311.registerView(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46312));
  }
};
function Lt() {
  return {
    type: BaseViewType.Pivot,
    i18nKey: "bases-dashboard.pivotView.name",
    createDefaultConfig: it,
    validateConfig: (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46316, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46317) => Rt(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46317.config),
    buildProjection: () => ({
      type: "custom",
      viewType: BaseViewType.Pivot
    }),
    repairConfig: (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46318, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46319) => Rt(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46319.config).valid ? {
      repaired: false,
      view: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46319
    } : {
      repaired: true,
      view: {
        ...var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46319,
        config: it(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46318)
      }
    }
  };
}
function Rt(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46800) {
  return !var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46800.pivot || !var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46800.chart || !["chart-and-table", "chart", "table"].includes(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46800.displayMode) ? {
    valid: false,
    reason: "invalidPivotConfig"
  } : {
    valid: true
  };
}
let Q = class extends Plugin {
  constructor(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46448 = Et, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46449, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46450, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46451, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46452) {
    super(), this._config = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46448, this._injector = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46449, this._commandService = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46450, this._configService = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46451, this._dataSyncPrimaryController = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46452;
    let {
      ...var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46453
    } = merge({}, Et, this._config);
    this._configService["setConfig"]("bases-dashboard.config", var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46453), this._registerCommands();
  }
  onStarting() {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46460 = this._config["notExecuteCalculation"],
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46461;
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46461 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46460 === true ? [[A], [U], [H], [q], [k], [Y], [K], [V], [X]] : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46460 === false ? [[G]] : [[A], [U], [H], [q], [k], [Y], [K], [V], [X], [G]], var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46461.forEach(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4665 => this._injector["add"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4665)), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46460 !== false && touchDependencies(this._injector, [[A], [U], [H], [q], [k], [Y], [K], [V], [X]]), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46460 !== true && touchDependencies(this._injector, [[G]]);
  }
  _registerCommands() {
    [He, Je, R, Xe, B, L, z, ...Ut].forEach(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4666 => this.disposeWithMe(this._commandService["registerCommand"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4666))), Z.forEach(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4667 => {
      var var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4668;
      return (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4668 = this._dataSyncPrimaryController) == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4668.registerSyncingMutations(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4667);
    });
  }
};
export { We as BASES_DASHBOARD_PLUGIN, Ge as BASES_DASHBOARD_RESOURCE_VERSION, Ke as BASES_DASHBOARD_GRID_COLUMNS, qe as BASES_DASHBOARD_DEFAULT_ROW_HEIGHT, Q as UniverBaseDashboardPlugin };
export { V, H, U, K, q };
