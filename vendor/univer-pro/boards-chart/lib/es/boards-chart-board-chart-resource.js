import { AddBoardElementMutation, BoardElementType, IBoardChartAdapterService, IBoardElementService, RemoveBoardElementCommand, RemoveBoardElementMutation, ReorderBoardElementsOperation, UniverBoardsPlugin, UpdateBoardElementCommand, UpdateBoardElementMutation, createAddBoardElementsMutationInfos } from "@univerjs-pro/boards";
import { ChartDataSourceRuntimeStatus, ChartResourceRepository, ChartResourceRuntimeService, ChartTypeBits, DEFAULT_CHART_RESOURCE_HEADER_ROW, IChartDataSourceRuntimeService, ResourceRefChartDataSourceAdapter, UniverChartPlugin, buildChartDataSetFromValues, buildChartPreviewData, buildOrientedChartDataSet, chartConfigInterpreter, createChartStarterRows, describeChartModel, isInlineChartDataSource, isReferencedChartDataSource, omitUndefinedFields, toChartCreateConfigSnapshot, toChartModelConfigReplacement, toChartModelUpdate } from "@univerjs-pro/engine-chart";
import { ArrangeTypeEnum, CommandType, DependentOn, Disposable, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, Inject, Injector, Plugin, Tools, UniverInstanceType, generateRandomId, getDrawingOrderIndex, merge, normalizeDrawingOrderIndex, sequenceExecute, touchDependencies } from "@univerjs/core";
import { filter, firstValueFrom } from "rxjs";
import { ShapeLineTypeEnum } from "@univerjs-pro/engine-shape";
import { UniverLicensePlugin } from "@univerjs-pro/license";
var N = class extends ChartResourceRepository {};
export { N as BoardChartResourceService };
