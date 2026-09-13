import { AddBoardElementMutation, BoardElementType, IBoardChartAdapterService, IBoardElementService, RemoveBoardElementCommand, RemoveBoardElementMutation, ReorderBoardElementsOperation, UniverBoardsPlugin, UpdateBoardElementCommand, UpdateBoardElementMutation, createAddBoardElementsMutationInfos } from "@univerjs-pro/boards";
import { ChartDataSourceRuntimeStatus, ChartResourceRepository, ChartResourceRuntimeService, ChartTypeBits, DEFAULT_CHART_RESOURCE_HEADER_ROW, IChartDataSourceRuntimeService, ResourceRefChartDataSourceAdapter, UniverChartPlugin, buildChartDataSetFromValues, buildChartPreviewData, buildOrientedChartDataSet, chartConfigInterpreter, createChartStarterRows, describeChartModel, isInlineChartDataSource, isReferencedChartDataSource, omitUndefinedFields, toChartCreateConfigSnapshot, toChartModelConfigReplacement, toChartModelUpdate } from "@univerjs-pro/engine-chart";
import { ArrangeTypeEnum, CommandType, DependentOn, Disposable, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, Inject, Injector, Plugin, Tools, UniverInstanceType, generateRandomId, getDrawingOrderIndex, merge, normalizeDrawingOrderIndex, sequenceExecute, touchDependencies } from "@univerjs/core";
import { filter, firstValueFrom } from "rxjs";
import { ShapeLineTypeEnum } from "@univerjs-pro/engine-shape";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { B, F, I, L, P } from "./boards-chart-remove-board-chart-data-source.js";
import { N } from "./boards-chart-board-chart-resource.js";
import { Y } from "./boards-chart-board-chart-model.js";
import { U } from "./boards-chart-board-chart-adapter.js";
import { K } from "./boards-chart-change-board-chart-data-source.js";
import { J, q } from "./boards-chart-board-chart-config.js";
import { Ve } from "./boards-chart-board-chart-data-source.js";
function X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472) {
  "@babel/helpers - typeof";

  return X = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298) {
    return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298;
  } : function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300 && typeof Symbol == "function" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300.constructor === Symbol && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300 !== Symbol.prototype ? "symbol" : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300;
  }, X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472);
}
function We(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475) {
  if (X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474) != "object" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474;
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46476 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474[Symbol.toPrimitive];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46476 !== undefined) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46477 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46476.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475 || "default");
    if (X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46477) != "object") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46477;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475 === "string" ? String : Number)(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474);
}
function Ge(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483 = We(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482, "string");
  return X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483) == "symbol" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483 + "";
}
function Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46486, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46488) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487 = Ge(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487)) in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46486 ? Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46486, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487, {
    value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46488,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46486[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46488, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46486;
}
let Q = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46304) {
    super(), this._resourceManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302, this._resourceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303, this._modelService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46304, Z(this, "_resourceDisposable", null), this._initResource();
  }
  _initResource() {
    this._resourceDisposable = this._resourceManagerService["registerPluginResource"]({
      pluginName: "BOARD_CHART_PLUGIN",
      businesses: [UniverInstanceType.UNIVER_BOARD],
      toJson: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466 => this._resourceService["serializeUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466),
      parseJson: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467 => JSON.parse(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467),
      onLoad: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469) => {
        this._resourceService["loadUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469);
      },
      onUnLoad: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612 => {
        this._modelService["removeUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612), this._resourceService["unloadUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612);
      }
    }), this.disposeWithMe(this._resourceDisposable);
  }
};
let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46492 = class extends Plugin {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46308 = B, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311) {
    super(), this._config = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46308, this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310, this._configService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311, Z(this, "_adapterDisposable", null);
    let {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312
    } = merge({}, B, this._config);
    this._configService["setConfig"]("boards-chart.config", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312), this._initCommands();
  }
  onStarting() {
    [[N], [Y], [Q], [U]].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614 => this._injector["add"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614)), touchDependencies(this._injector, [[N], [Y], [Q], [U]]);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46318 = this._injector["get"](IBoardChartAdapterService),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319 = this._injector["get"](U);
    this._adapterDisposable = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46318.registerAdapter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319), this.disposeWithMe(this._adapterDisposable);
  }
  _initCommands() {
    [K, J, q, Ve, I, P, L, F].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615 => {
      this.disposeWithMe(this._commandService["registerCommand"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615));
    });
  }
};
export { var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46492 as UniverBoardsChartPlugin };
export { Q, Z };
