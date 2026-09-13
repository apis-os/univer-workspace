import { ChartDataSourceRuntimeStatus, ChartResourceRepository, ChartResourceRuntimeService, DEFAULT_CHART_RESOURCE_HEADER_ROW, IChartDataSourceRuntimeService, ResourceRefChartDataSourceAdapter, UniverChartPlugin, buildChartDataSetFromValues, buildChartPreviewData, buildOrientedChartDataSet, chartConfigInterpreter, describeChartModel, isInlineChartDataSource, isReferencedChartDataSource, toChartCreateConfigSnapshot, toChartModelConfigReplacement, toChartModelUpdate } from "@univerjs-pro/engine-chart";
import { AddSlideElementMutation, ISlideDrawingService, PageElementTypeEnum, PageTypeEnum, RemoveSlideElementMutation, ReorderSlideElementsCommand, UpdateSlideDrawingCommand, UpdateSlideElementMutation, getSlideCommandTarget } from "@univerjs-pro/slides";
import { CommandType, DependentOn, Disposable, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, Tools, UniverInstanceType, generateRandomId, getDrawingOrderIndex, merge, normalizeDrawingOrderIndex, sequenceExecute, touchDependencies } from "@univerjs/core";
import { Subject, filter, firstValueFrom } from "rxjs";
import { ShapeLineTypeEnum } from "@univerjs-pro/engine-shape";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { q } from "./internal-core-endo.js";
import { L } from "./slides-chart-slide-chart-resource.js";
import { X } from "./slides-chart-slide-chart-model.js";
import { Z, xe } from "./slides-chart-slide-chart-data-source.js";
import { B, R, V, z } from "./slides-chart-remove-slide-chart-data-source.js";
import { je } from "./slides-chart-slide-chart-snapshot.js";
import { G, W } from "./slides-chart-slide-chart-config.js";
import { H, U } from "./slides-chart-remove-slide-chart-snapshot.js";
const Pe = {};
let Q = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253) {
    super(), this._resourceManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251, this._resourceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252, this._modelService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253, q(this, "_resourceDisposable", null), this._initResource();
  }
  _initResource() {
    this._resourceDisposable = this._resourceManagerService["registerPluginResource"]({
      pluginName: "SLIDE_CHART_PLUGIN",
      businesses: [UniverInstanceType.UNIVER_SLIDE],
      toJson: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469 => this._resourceService["serializeUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469),
      parseJson: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610 => JSON.parse(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610),
      onLoad: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612) => {
        this._resourceService["loadUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612);
      },
      onUnLoad: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615 => {
        this._modelService["removeUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615), this._resourceService["unloadUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615);
      }
    }), this.disposeWithMe(this._resourceDisposable);
  }
};
let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46539 = class extends Plugin {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257 = Pe, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46258, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46260) {
    super(), this._config = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257, this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46258, this._configService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46260;
    let {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261
    } = merge({}, Pe, this._config);
    this._configService["setConfig"]("slides-chart.config", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261), this._initCommands();
  }
  onStarting() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267 = this._injector;
    [[L], [X], [Q]].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617)), touchDependencies(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267, [[L], [X], [Q]]);
  }
  _initCommands() {
    [Z, V, je, G, W, xe, U, z, R, B, H].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618 => {
      this.disposeWithMe(this._commandService["registerCommand"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618));
    });
  }
};
export { var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46539 as UniverSlidesChartPlugin };
export { Q };
