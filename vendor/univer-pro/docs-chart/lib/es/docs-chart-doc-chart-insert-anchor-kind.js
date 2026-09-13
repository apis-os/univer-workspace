import { ChartDataSourceRuntimeStatus, ChartResourceRepository, ChartResourceRuntimeService, DEFAULT_CHART_RESOURCE_HEADER_ROW, IChartDataSourceRuntimeService, ResourceRefChartDataSourceAdapter, UniverChartPlugin, buildChartDataSetFromValues, buildChartPreviewData, buildOrientedChartDataSet, chartConfigInterpreter, describeChartModel, isInlineChartDataSource, isReferencedChartDataSource, toChartCreateConfigSnapshot, toChartModelConfigReplacement, toChartModelUpdate } from "@univerjs-pro/engine-chart";
import { BooleanNumber, CommandType, DependentOn, Disposable, DrawingTypeEnum, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, JSONX, ObjectRelativeFromH, ObjectRelativeFromV, Plugin, PositionedObjectLayoutType, Tools, UniverInstanceType, WrapTextType, generateRandomId, getDrawingOrderIndex, merge, normalizeDrawingOrderIndex, sequenceExecute, touchDependencies } from "@univerjs/core";
import { IDocDrawingAdapterService, IDocDrawingService, InsertDocDrawingCommand, SetDocDrawingArrangeCommand, UniverDocsDrawingPlugin } from "@univerjs/docs-drawing";
import { filter, firstValueFrom } from "rxjs";
import { RichTextEditingMutation, buildDocTransform, normalizeTextRange } from "@univerjs/docs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
let Ie = function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474.Selection = "selection", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474.BodyOffset = "bodyOffset", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474.Paragraph = "paragraph", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474.TextRange = "textRange", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474;
  }({}),
  Le = function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46476) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46476.Before = "before", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46476.After = "after", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46476;
  }({});
export { Ie as DocChartInsertAnchorKind, Le as DocChartParagraphPosition };
