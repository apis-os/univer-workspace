import { ChartDataSourceRuntimeStatus, ChartResourceRepository, ChartResourceRuntimeService, DEFAULT_CHART_RESOURCE_HEADER_ROW, IChartDataSourceRuntimeService, ResourceRefChartDataSourceAdapter, UniverChartPlugin, buildChartDataSetFromValues, buildChartPreviewData, buildOrientedChartDataSet, chartConfigInterpreter, describeChartModel, isInlineChartDataSource, isReferencedChartDataSource, toChartCreateConfigSnapshot, toChartModelConfigReplacement, toChartModelUpdate } from "@univerjs-pro/engine-chart";
import { BooleanNumber, CommandType, DependentOn, Disposable, DrawingTypeEnum, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, JSONX, ObjectRelativeFromH, ObjectRelativeFromV, Plugin, PositionedObjectLayoutType, Tools, UniverInstanceType, WrapTextType, generateRandomId, getDrawingOrderIndex, merge, normalizeDrawingOrderIndex, sequenceExecute, touchDependencies } from "@univerjs/core";
import { IDocDrawingAdapterService, IDocDrawingService, InsertDocDrawingCommand, SetDocDrawingArrangeCommand, UniverDocsDrawingPlugin } from "@univerjs/docs-drawing";
import { filter, firstValueFrom } from "rxjs";
import { RichTextEditingMutation, buildDocTransform, normalizeTextRange } from "@univerjs/docs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { K } from "./internal-glue.js";
function q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406) {
  if (!K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406)) throw Error("Document chart width and height must be positive finite numbers.");
}
export { q as assertValidOptionalDocChartSize };
