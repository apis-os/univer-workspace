import { AddBoardElementMutation, BoardElementType, IBoardChartAdapterService, IBoardElementService, RemoveBoardElementCommand, RemoveBoardElementMutation, ReorderBoardElementsOperation, UniverBoardsPlugin, UpdateBoardElementCommand, UpdateBoardElementMutation, createAddBoardElementsMutationInfos } from "@univerjs-pro/boards";
import { ChartDataSourceRuntimeStatus, ChartResourceRepository, ChartResourceRuntimeService, ChartTypeBits, DEFAULT_CHART_RESOURCE_HEADER_ROW, IChartDataSourceRuntimeService, ResourceRefChartDataSourceAdapter, UniverChartPlugin, buildChartDataSetFromValues, buildChartPreviewData, buildOrientedChartDataSet, chartConfigInterpreter, createChartStarterRows, describeChartModel, isInlineChartDataSource, isReferencedChartDataSource, omitUndefinedFields, toChartCreateConfigSnapshot, toChartModelConfigReplacement, toChartModelUpdate } from "@univerjs-pro/engine-chart";
import { ArrangeTypeEnum, CommandType, DependentOn, Disposable, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, Inject, Injector, Plugin, Tools, UniverInstanceType, generateRandomId, getDrawingOrderIndex, merge, normalizeDrawingOrderIndex, sequenceExecute, touchDependencies } from "@univerjs/core";
import { filter, firstValueFrom } from "rxjs";
import { ShapeLineTypeEnum } from "@univerjs-pro/engine-shape";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { N } from "./boards-chart-board-chart-resource.js";
const P = {
    id: "board.mutation.remove-board-chart-data-source",
    type: CommandType.MUTATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46322, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46322.get(N).removeDataSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323.dataSourceId) : false
  },
  F = {
    id: "board.mutation.remove-board-chart-snapshot",
    type: CommandType.MUTATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46324, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46324.get(N).removeChart(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325.chartId, {
      cleanupDataSource: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325.cleanupDataSource
    }) != null : false
  },
  I = {
    id: "board.mutation.set-board-chart-data-source",
    type: CommandType.MUTATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326.get(N).setDataSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327.dataSource), true) : false
  },
  L = {
    id: "board.mutation.set-board-chart-snapshot",
    type: CommandType.MUTATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328.get(N).setChart(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329.chart), true) : false
  },
  xe = 480,
  Se = 320,
  R = [["Category", "Value"], ["A", 12], ["B", 18], ["C", 9]],
  Ce = [["Hierarchy 1", "Hierarchy 2", "Value"], ...createChartStarterRows(ChartTypeBits.Treemap)],
  we = [["Hierarchy 1", "Hierarchy 2", "Value"], ...createChartStarterRows(ChartTypeBits.Sunburst)],
  Te = [["Label", "Value"], ...createChartStarterRows(ChartTypeBits.Gauge)],
  Ee = [["Source", "Target", "Value"], ...createChartStarterRows(ChartTypeBits.Chord)],
  z = {
    lineStrokeType: ShapeLineTypeEnum.SolidLine,
    width: 1,
    color: "#d1d5db",
    opacity: 1
  },
  B = {};
export { P as RemoveBoardChartDataSourceMutation, F as RemoveBoardChartSnapshotMutation, I as SetBoardChartDataSourceMutation, L as SetBoardChartSnapshotMutation, xe as DEFAULT_BOARD_CHART_ELEMENT_WIDTH, Se as DEFAULT_BOARD_CHART_ELEMENT_HEIGHT, R as DEFAULT_BOARD_CHART_VALUES, z as DEFAULT_BOARD_CHART_STROKE };
export { Ce, we, Te, Ee, B };
