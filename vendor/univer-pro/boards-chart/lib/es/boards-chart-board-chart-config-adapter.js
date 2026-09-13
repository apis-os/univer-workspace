import { AddBoardElementMutation, BoardElementType, IBoardChartAdapterService, IBoardElementService, RemoveBoardElementCommand, RemoveBoardElementMutation, ReorderBoardElementsOperation, UniverBoardsPlugin, UpdateBoardElementCommand, UpdateBoardElementMutation, createAddBoardElementsMutationInfos } from "@univerjs-pro/boards";
import { ChartDataSourceRuntimeStatus, ChartResourceRepository, ChartResourceRuntimeService, ChartTypeBits, DEFAULT_CHART_RESOURCE_HEADER_ROW, IChartDataSourceRuntimeService, ResourceRefChartDataSourceAdapter, UniverChartPlugin, buildChartDataSetFromValues, buildChartPreviewData, buildOrientedChartDataSet, chartConfigInterpreter, createChartStarterRows, describeChartModel, isInlineChartDataSource, isReferencedChartDataSource, omitUndefinedFields, toChartCreateConfigSnapshot, toChartModelConfigReplacement, toChartModelUpdate } from "@univerjs-pro/engine-chart";
import { ArrangeTypeEnum, CommandType, DependentOn, Disposable, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, Inject, Injector, Plugin, Tools, UniverInstanceType, generateRandomId, getDrawingOrderIndex, merge, normalizeDrawingOrderIndex, sequenceExecute, touchDependencies } from "@univerjs/core";
import { filter, firstValueFrom } from "rxjs";
import { ShapeLineTypeEnum } from "@univerjs-pro/engine-shape";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { Y } from "./boards-chart-board-chart-model.js";
import { N } from "./boards-chart-board-chart-resource.js";
import { J, q } from "./boards-chart-board-chart-config.js";
import { K } from "./boards-chart-change-board-chart-data-source.js";
var Re = class e {
  static isRowRecordDirection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666 !== "column";
  }
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668) {
    this._context = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668;
  }
  describe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670 = {}, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673;
    let {
        boardModel: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674,
        chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675,
        elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676,
        injector: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677,
        pageId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678,
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679
      } = this._context,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677.get(Y).ensureChartModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677.get(N).getChart(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674.getSnapshot().pages[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672.elements[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682) throw Error("Board chart not found: " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675);
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674.getSnapshot().pages[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673.elementOrder["indexOf"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676)) ?? -1;
    return omitUndefinedFields({
      ...describeChartModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680.model, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671),
      id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675,
      position: {
        x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682.transform["left"] ?? 0,
        y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682.transform["top"] ?? 0
      },
      size: {
        width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682.transform["width"] ?? 0,
        height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682.transform["height"] ?? 0
      },
      containerId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682.parentId,
      laneId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682.laneId,
      zOrder: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 < 0 ? undefined : var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2
    });
  }
  getInfo() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697 = this.describe(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698 = this.getDataSource();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698) throw Error("Board chart data source not found: " + this._context["chartId"]);
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696 = this._context["boardModel"].getSnapshot().pages[this._context["pageId"]]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696.elementOrder["indexOf"](this._context["elementId"])) ?? -1;
    return {
      config: toChartCreateConfigSnapshot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697),
      dataSource: isInlineChartDataSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698) ? {
        values: Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698.values)
      } : isReferencedChartDataSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698) ? {
        source: Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698.source)
      } : (() => {
        throw Error("Invalid Board chart data source: " + this._context["chartId"]);
      })(),
      position: Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697.position),
      size: Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697.size),
      containerId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697.containerId ?? undefined,
      laneId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697.laneId ?? undefined,
      zOrder: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4 < 0 ? undefined : var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4
    };
  }
  getData() {
    let {
        chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102,
        injector: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103,
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104
      } = this._context,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103.get(N).getChart(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103.get(N).getDataSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105.dataSourceId) : null;
    return isInlineChartDataSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106.values : null;
  }
  getDataSource() {
    let {
        chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112,
        injector: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113,
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114
      } = this._context,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113.get(N).getChart(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112);
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113.get(N).getDataSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115.dataSourceId) : null) ?? null;
  }
  async commitDataSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120) {
    let {
        injector: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46121
      } = this._context,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122 = isReferencedChartDataSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120.source : undefined,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46121.get(IChartDataSourceRuntimeService).acquire(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122) : null;
    try {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 = await firstValueFrom(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123.state$["pipe"](filter(({
          status: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46
        }) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 !== ChartDataSourceRuntimeStatus.LOADING)));
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463.status !== ChartDataSourceRuntimeStatus.READY) throw var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463.error instanceof Error ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463.error : Error(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122.kind);
      }
      this._commitDataSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120);
    } finally {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123.dispose();
    }
  }
  async commitChanges(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131 = false) {
    let {
        injector: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132
      } = this._context,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133 = isReferencedChartDataSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128.source : undefined,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132.get(IChartDataSourceRuntimeService).acquire(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133) : null;
    try {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464 = await firstValueFrom(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134.state$["pipe"](filter(({
          status: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461
        }) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461 !== ChartDataSourceRuntimeStatus.LOADING)));
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464.status !== ChartDataSourceRuntimeStatus.READY) throw var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464.error instanceof Error ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464.error : Error(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133.kind);
      }
      Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129).length > 0 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131 ? this._replaceConfig(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129) : this.commit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129)), Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130).length > 0 && this.commitHost(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128 && this._commitDataSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128);
    } finally {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134.dispose();
    }
  }
  refreshDataSource() {
    let {
      chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142,
      injector: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143,
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144
    } = this._context;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143.get(Y).refreshChartDataSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142);
  }
  commit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149;
    let {
        chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150,
        injector: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151,
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152
      } = this._context,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151.get(Y).ensureChartModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153) throw Error("Board chart not found: " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154 = toChartModelUpdate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148, {
      series: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153.model["config"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149.series,
      currentChartType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153.model["chartType"],
      currentStyle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153.model["style"],
      currentContext: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153.model["context"],
      currentDataAggregation: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153.model["dataAggregation"]
    });
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151.get(ICommandService).syncExecuteCommand(q.id, q.replaceConfig({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152,
      chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154
    }))) throw Error("Failed to update Board chart configuration.");
  }
  update(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162) {
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4 = {};
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162.position !== undefined && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4.position = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162.position), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162.size !== undefined && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4.size = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162.size), Object.prototype["hasOwnProperty"].call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162, "containerId") && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4.containerId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162.containerId ?? null), Object.prototype["hasOwnProperty"].call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162, "laneId") && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4.laneId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162.laneId ?? null), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162.zOrder !== undefined && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4.zOrder = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162.zOrder), this.commitChanges(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162.dataSource, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162.config, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4, true);
  }
  _replaceConfig(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165;
    let {
        chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166,
        injector: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167,
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168
      } = this._context,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167.get(Y).ensureChartModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169) throw Error("Board\x20chart\x20not\x20found:\x20" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170 = toChartModelConfigReplacement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164, {
      series: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169.model["config"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165.series,
      currentStyle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169.model["style"]
    });
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167.get(ICommandService).syncExecuteCommand(q.id, q.replaceConfig({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168,
      chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170
    }))) throw Error("Failed to update Board chart configuration.");
  }
  setDataSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178) {
    return this.commitDataSource(Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178) ? {
      values: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178
    } : {
      source: ResourceRefChartDataSourceAdapter.toReference(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178)
    });
  }
  setAbsolutePosition(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181) {
    this.commitHost({
      position: {
        x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180,
        y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181
      }
    });
  }
  setSize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185) {
    this.commitHost({
      size: {
        width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184,
        height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185
      }
    });
  }
  arrange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189;
    let {
        boardModel: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190,
        elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191,
        injector: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192,
        pageId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193,
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194
      } = this._context,
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190.getSnapshot().pages[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189.elementOrder) ?? [],
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8.indexOf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191);
    if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6 < 0) throw Error("Board chart element not found: " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191);
    if (getDrawingOrderIndex(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8.length, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188) !== var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6 && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192.get(ICommandService).syncExecuteCommand(ReorderBoardElementsOperation.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193,
      elementIds: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191],
      placement: Be(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188)
    })) throw Error("Failed to arrange Board chart.");
  }
  setZOrder(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202) {
    this._commitZOrder(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202);
  }
  resolveData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46205) {
    let {
        chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206,
        injector: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207,
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208
      } = this._context,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207.get(Y).ensureChartModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209) throw Error("Board chart not found: " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206);
    return buildChartPreviewData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209.model, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46205);
  }
  resolveDataSet(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218;
    let {
        chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219,
        injector: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46220,
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221
      } = this._context,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46222 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46220.get(Y).ensureChartModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46220.get(N).getChart(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46222 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223) throw Error("Board chart not found: " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219);
    return buildOrientedChartDataSet(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216, {
      headerRow: ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223.context) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217.headerRow) ?? DEFAULT_CHART_RESOURCE_HEADER_ROW,
      isRowDirection: e.isRowRecordDirection((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223.context) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218.orient)
    });
  }
  commitHost(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232) {
    this._commitData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232.data), this._commitElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232), this._commitZOrder(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232.zOrder);
  }
  remove() {
    let {
      elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234,
      injector: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235,
      pageId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236,
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46237
    } = this._context;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235.get(ICommandService).syncExecuteCommand(RemoveBoardElementCommand.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46237,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236,
      elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234
    });
  }
  _commitData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242 === undefined) return;
    let {
        chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243,
        injector: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46244,
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245
      } = this._context,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46246 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46244.get(N).getChart(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243);
    if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46246 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46244.get(ICommandService).syncExecuteCommand(J.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245,
      dataSourceId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46246.dataSourceId,
      values: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242
    }))) throw Error("Failed to update Board chart data.");
  }
  _commitDataSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252) {
    let {
      chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253,
      injector: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46254,
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46255
    } = this._context;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46254.get(ICommandService).syncExecuteCommand(K.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46255,
      chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253,
      dataSource: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252
    })) throw Error(K.id);
  }
  _commitElement({
    containerId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46260,
    position: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261,
    size: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46262,
    laneId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46263
  }) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264;
    if (!ze({
      containerId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46260,
      position: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261,
      size: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46262,
      laneId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46263
    })) return;
    let {
        boardModel: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265,
        elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46266,
        injector: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267,
        pageId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268,
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46269
      } = this._context,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265.getSnapshot().pages[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264.elements[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46266];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270) throw Error("Board chart element not found: " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46266);
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6 = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270,
      parentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46260 === undefined ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270.parentId : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46260 ?? undefined,
      laneId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46263 === undefined ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270.laneId : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46263 ?? undefined,
      transform: {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270.transform,
        left: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261.x) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270.transform["left"],
        top: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261.y) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270.transform["top"],
        width: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46262 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46262.width) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270.transform["width"],
        height: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46262 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46262.height) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270.transform["height"]
      }
    };
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267.get(ICommandService).syncExecuteCommand(UpdateBoardElementCommand.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46269,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268,
      elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46266,
      element: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6,
      transform: {
        left: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6.transform["left"],
        top: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6.transform["top"],
        width: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6.transform["width"],
        height: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6.transform["height"],
        angle: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6.transform["rotation"] ?? 0,
        flipX: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6.transform["flipX"],
        flipY: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6.transform["flipY"]
      }
    })) throw Error("Failed to update Board chart element.");
  }
  _commitZOrder(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282 === undefined) return;
    let {
        boardModel: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46283,
        elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284,
        injector: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285,
        pageId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286,
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287
      } = this._context,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46283.getSnapshot().pages[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288) throw Error("Board page not found: " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46289 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288.elementOrder["indexOf"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46289 < 0) throw Error("Board chart element not found: " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284);
    if (normalizeDrawingOrderIndex(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288.elementOrder["length"]) !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46289 && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285.get(ICommandService).syncExecuteCommand(ReorderBoardElementsOperation.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286,
      elementIds: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284],
      zOrder: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282
    })) throw Error("Failed\x20to\x20update\x20Board\x20chart\x20z-order.");
  }
};
function ze({
  containerId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446,
  laneId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447,
  position: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46448,
  size: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449
}) {
  return !!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46448 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446 !== undefined || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447 !== undefined);
}
function Be(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46454) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46454 === ArrangeTypeEnum.front ? "front" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46454 === ArrangeTypeEnum.forward ? "forward" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46454 === ArrangeTypeEnum.backward ? "backward" : "back";
}
export { Re as BoardChartConfigAdapter };
