import { ChartDataSourceRuntimeStatus as var_core_value_sig3F79, ChartResourceRepository as var_core_value_sig880E, ChartResourceRuntimeService as var_core_value_sigC9ED, DEFAULT_CHART_RESOURCE_HEADER_ROW as var_core_value_sigB57B, IChartDataSourceRuntimeService as var_core_value_sig780B, ResourceRefChartDataSourceAdapter as var_core_value_sig7D1B, UniverChartPlugin as var_core_value_sig7BE0, buildChartDataSetFromValues as var_core_value_sig7D40, buildChartPreviewData as var_core_value_sig6C7E, buildOrientedChartDataSet as var_core_value_sig68BE, chartConfigInterpreter as var_core_value_sig04C6, describeChartModel as var_core_value_sigCA05, isInlineChartDataSource as var_core_value_sig2F2B, isReferencedChartDataSource as var_core_value_sig70AF, toChartCreateConfigSnapshot as var_core_value_sigD04E, toChartModelConfigReplacement as var_core_value_sigB99B, toChartModelUpdate as var_core_value_sig5A75 } from "@univerjs-pro/engine-chart";
import { AddSlideElementMutation as var_core_value_sig7BAF, ISlideDrawingService as var_core_value_sig8F69, PageElementTypeEnum as var_core_value_sig6884, PageTypeEnum as var_core_value_sig066E, RemoveSlideElementMutation as var_core_value_sig9B0D, ReorderSlideElementsCommand as var_core_value_sig3D2C, UpdateSlideDrawingCommand as var_core_value_sigC56D, UpdateSlideElementMutation as var_core_value_sig3A17, getSlideCommandTarget as var_core_value_sig938F } from "@univerjs-pro/slides";
import { CommandType as var_core_value_sigD948, DependentOn as var_core_value_sigBE5E, Disposable as var_core_value_sig0281, ICommandService as var_core_value_sigED71, IConfigService as var_core_value_sig281C, IResourceManagerService as var_core_value_sig3C92, IUndoRedoService as var_core_value_sigB16B, IUniverInstanceService as var_core_value_sig585D, Inject as var_core_value_sigE722, Injector as var_core_value_sig062A, Plugin as var_core_value_sig050A, Tools as var_core_value_sig8B32, UniverInstanceType as var_core_value_sig870F, generateRandomId as var_core_value_sigB683, getDrawingOrderIndex as var_core_value_sig26EC, merge as var_core_value_sigEEDB, normalizeDrawingOrderIndex as var_core_value_sig36E7, sequenceExecute as var_core_value_sig6A78, touchDependencies as var_core_value_sigF7EF } from "@univerjs/core";
import { Subject as var_core_value_sig27F9, filter as var_core_value_sig393E, firstValueFrom as var_core_value_sigB609 } from "rxjs";
import { ShapeLineTypeEnum as var_core_value_sig390D } from "@univerjs-pro/engine-shape";
import { UniverLicensePlugin as var_core_value_sigC928 } from "@univerjs-pro/license";
var L = class extends var_core_value_sig880E {};
const R = {
    id: "slide.mutation.remove-slide-chart-data-source",
    type: var_core_value_sigD948.MUTATION,
    handler: (var_core_value_sigD4FB, var_core_value_sig3E71) => var_core_value_sigD4FB.get(L).removeDataSource(var_core_value_sig3E71.unitId, var_core_value_sig3E71.dataSourceId)
  },
  z = {
    id: "slide.mutation.set-slide-chart-data-source",
    type: var_core_value_sigD948.MUTATION,
    handler: (var_core_value_sig01B3, var_core_value_sig7442) => (var_core_value_sig01B3.get(L).setDataSource(var_core_value_sig7442.unitId, var_core_value_sig7442.dataSource), true)
  },
  B = {
    id: "slide.mutation.set-slide-chart-snapshot",
    type: var_core_value_sigD948.MUTATION,
    handler: (var_core_value_sigDF87, var_core_value_sig9EE0) => (var_core_value_sigDF87.get(L).setChart(var_core_value_sig9EE0.unitId, var_core_value_sig9EE0.chart), true)
  },
  V = {
    id: "slide.command.change-chart-data-source",
    type: var_core_value_sigD948.COMMAND,
    handler: (var_core_value_sigF051, var_core_value_sig0B45) => {
      if (!var_core_value_sig0B45) return false;
      let var_core_value_sig36F8 = var_core_value_sig938F(var_core_value_sigF051.get(var_core_value_sig585D), var_core_value_sig0B45);
      if (!var_core_value_sig36F8) return false;
      let var_core_value_sig03E1 = var_core_value_sigF051.get(L),
        var_core_value_sigBB57 = var_core_value_sig03E1.getChart(var_core_value_sig36F8.unitId, var_core_value_sig0B45.chartId),
        var_core_value_sig7C4A = var_core_value_sigBB57 ? var_core_value_sig03E1.getDataSource(var_core_value_sig36F8.unitId, var_core_value_sigBB57.dataSourceId) : undefined;
      if (!var_core_value_sigBB57 || !var_core_value_sig7C4A) return false;
      let var_core_value_sigE799 = var_core_value_sig03E1.isDataSourceShared(var_core_value_sig36F8.unitId, var_core_value_sig7C4A.id),
        var_core_value_sigB601 = var_core_value_sigE799 ? var_core_value_sig0B45.duplicateDataSourceId ?? var_core_value_sigB683() : var_core_value_sig7C4A.id,
        var_core_value_sig8B71 = pe(var_core_value_sigB601, var_core_value_sig0B45.dataSource, var_core_value_sig0B45.name ?? var_core_value_sig7C4A.name),
        var_core_value_sigAEFB = var_core_value_sigF051.get(var_core_value_sigED71),
        var_core_value_sig826B = {
          id: z.id,
          params: {
            unitId: var_core_value_sig36F8.unitId,
            dataSource: var_core_value_sig8B71
          }
        },
        var_core_value_sigCF89 = [var_core_value_sig826B],
        var_core_value_sig00CB = [{
          id: z.id,
          params: {
            unitId: var_core_value_sig36F8.unitId,
            dataSource: var_core_value_sig7C4A
          }
        }];
      if (!var_core_value_sigAEFB.syncExecuteCommand(var_core_value_sig826B.id, var_core_value_sig826B.params)) return false;
      if (var_core_value_sigE799) {
        let var_core_value_sig480E = {
            id: B.id,
            params: {
              unitId: var_core_value_sig36F8.unitId,
              chart: {
                ...var_core_value_sigBB57,
                dataSourceId: var_core_value_sigB601
              }
            }
          },
          var_core_value_sig26DB = {
            id: R.id,
            params: {
              unitId: var_core_value_sig36F8.unitId,
              dataSourceId: var_core_value_sigB601
            }
          };
        if (!var_core_value_sigAEFB.syncExecuteCommand(var_core_value_sig480E.id, var_core_value_sig480E.params)) return var_core_value_sigAEFB.syncExecuteCommand(var_core_value_sig26DB.id, var_core_value_sig26DB.params), false;
        var_core_value_sigCF89.push(var_core_value_sig480E), var_core_value_sig00CB.splice(0, 1, {
          id: B.id,
          params: {
            unitId: var_core_value_sig36F8.unitId,
            chart: var_core_value_sigBB57
          }
        }, var_core_value_sig26DB);
      }
      return var_core_value_sigF051.get(var_core_value_sigB16B).pushUndoRedo({
        unitID: var_core_value_sig36F8.unitId,
        undoMutations: var_core_value_sig00CB,
        redoMutations: var_core_value_sigCF89
      }), true;
    }
  };
function pe(var_core_value_sig77EE, var_core_value_sig9F76, var_core_value_sigB008) {
  let var_core_value_sig8721 = var_core_value_sig2F2B(var_core_value_sig9F76) ? {
    id: var_core_value_sig77EE,
    name: var_core_value_sigB008,
    values: var_core_value_sig9F76.values
  } : {
    id: var_core_value_sig77EE,
    name: var_core_value_sigB008,
    source: var_core_value_sig9F76.source
  };
  return var_core_value_sig8721.name ?? delete var_core_value_sig8721.name, var_core_value_sig8721;
}
const H = {
    id: "slide.mutation.remove-slide-chart-snapshot",
    type: var_core_value_sigD948.MUTATION,
    handler: (var_core_value_sig08BA, var_core_value_sigDBB5) => var_core_value_sig08BA.get(L).removeChart(var_core_value_sigDBB5.unitId, var_core_value_sigDBB5.chartId, {
      cleanupDataSource: var_core_value_sigDBB5.cleanupDataSource
    }) != null
  },
  U = {
    id: "slide.command.remove-slide-chart",
    type: var_core_value_sigD948.COMMAND,
    handler: (var_core_value_sigCFAC, var_core_value_sig237B) => {
      var var_core_value_sigFEAB;
      if (!var_core_value_sig237B) return false;
      let var_core_value_sigE347 = var_core_value_sig938F(var_core_value_sigCFAC.get(var_core_value_sig585D), var_core_value_sig237B);
      if (!var_core_value_sigE347) return false;
      let var_core_value_sig3C5B = var_core_value_sigCFAC.get(L),
        var_core_value_sig200B = var_core_value_sigCFAC.get(var_core_value_sig8F69),
        {
          presentation: var_core_value_sig3863,
          unitId: var_core_value_sigC97C,
          subUnitId: var_core_value_sigC4B1
        } = var_core_value_sigE347,
        {
          chartId: var_core_value_sig1BD9,
          elementId: var_core_value_sigE43E
        } = var_core_value_sig237B,
        var_core_value_sigA937 = var_core_value_sig3C5B.getChart(var_core_value_sigC97C, var_core_value_sig1BD9),
        var_core_value_sigCAD5 = var_core_value_sig200B.getDrawingByParam({
          unitId: var_core_value_sigC97C,
          subUnitId: var_core_value_sigC4B1,
          drawingId: var_core_value_sigE43E
        }),
        var_core_value_sigE503 = var_core_value_sigCAD5 == null ? undefined : var_core_value_sigCAD5.element;
      if (!var_core_value_sigA937 || !var_core_value_sigE503 || var_core_value_sigE503.type !== var_core_value_sig6884.Chart || var_core_value_sigE503.chartId !== var_core_value_sig1BD9) return false;
      let var_core_value_sig48DD = var_core_value_sigCFAC.get(var_core_value_sigED71),
        var_core_value_sig5E6A = var_core_value_sigCFAC.get(var_core_value_sigB16B),
        var_core_value_sigB7FC = var_core_value_sig3C5B.getDataSource(var_core_value_sigC97C, var_core_value_sigA937.dataSourceId),
        var_core_value_sig9CD9 = var_core_value_sig3C5B.getDataSourceSharingCount(var_core_value_sigC97C, var_core_value_sigA937.dataSourceId) <= 1,
        var_core_value_sigFD0C = ((var_core_value_sigFEAB = var_core_value_sig3863.pageManager["getSlide"](var_core_value_sigC4B1)) == null ? undefined : var_core_value_sigFEAB.getData().elementOrder["indexOf"](var_core_value_sigE43E)) ?? -1,
        var_core_value_sig849B = {
          unitId: var_core_value_sigC97C,
          subUnitId: var_core_value_sigC4B1,
          drawingId: var_core_value_sigE43E
        },
        var_core_value_sig5F1A = {
          unitId: var_core_value_sigC97C,
          chartId: var_core_value_sig1BD9,
          cleanupDataSource: var_core_value_sig9CD9
        },
        var_core_value_sigB455 = [{
          id: var_core_value_sig9B0D.id,
          params: var_core_value_sig849B
        }, {
          id: H.id,
          params: var_core_value_sig5F1A
        }],
        var_core_value_sig5241 = [];
      if (var_core_value_sig9CD9 && var_core_value_sigB7FC) {
        let var_core_value_sigF0F9 = {
          unitId: var_core_value_sigC97C,
          dataSource: var_core_value_sigB7FC
        };
        var_core_value_sig5241.push({
          id: z.id,
          params: var_core_value_sigF0F9
        });
      }
      let var_core_value_sigC6E5 = {
          unitId: var_core_value_sigC97C,
          chart: var_core_value_sigA937
        },
        var_core_value_sigCEFB = {
          unitId: var_core_value_sigC97C,
          subUnitId: var_core_value_sigC4B1,
          element: var_core_value_sigE503,
          sourcePageType: (var_core_value_sigCAD5 == null ? undefined : var_core_value_sigCAD5.sourcePageType) ?? var_core_value_sig066E.Slide,
          insertIndex: var_core_value_sigFD0C >= 0 ? var_core_value_sigFD0C : undefined
        },
        var_core_value_sig1537 = [...var_core_value_sig5241, {
          id: B.id,
          params: var_core_value_sigC6E5
        }, {
          id: var_core_value_sig7BAF.id,
          params: var_core_value_sigCEFB
        }],
        var_core_value_sigE4C6 = var_core_value_sig6A78(var_core_value_sigB455, var_core_value_sig48DD);
      return var_core_value_sigE4C6.result ? (var_core_value_sig5E6A.pushUndoRedo({
        unitID: var_core_value_sigC97C,
        undoMutations: var_core_value_sig1537,
        redoMutations: var_core_value_sigB455
      }), true) : (var_core_value_sigE4C6.index === 1 && var_core_value_sig6A78([{
        id: var_core_value_sig7BAF.id,
        params: var_core_value_sigCEFB
      }], var_core_value_sig48DD), false);
    }
  },
  me = Symbol("ReplaceSlideChartConfig");
function he(var_core_value_sig4313) {
  return {
    ...var_core_value_sig4313,
    [me]: true
  };
}
const W = {
    id: "slide.command.update-slide-chart-config",
    type: var_core_value_sigD948.COMMAND,
    replaceConfig: he,
    handler: (var_core_value_sigFC87, var_core_value_sig156F) => {
      if (!var_core_value_sig156F) return false;
      let var_core_value_sigDD51 = var_core_value_sig938F(var_core_value_sigFC87.get(var_core_value_sig585D), var_core_value_sig156F);
      if (!var_core_value_sigDD51) return false;
      let {
          unitId: var_core_value_sigF057
        } = var_core_value_sigDD51,
        {
          chartId: var_core_value_sig72F6
        } = var_core_value_sig156F,
        var_core_value_sig9FBA = var_core_value_sig156F[me] === true,
        var_core_value_sigFE01 = var_core_value_sigFC87.get(L).getChart(var_core_value_sigF057, var_core_value_sig72F6);
      if (!var_core_value_sigFE01) return false;
      let var_core_value_sigA2CE = var_core_value_sigFC87.get(var_core_value_sigED71),
        var_core_value_sig1975 = var_core_value_sigFC87.get(var_core_value_sigB16B),
        var_core_value_sig6EA1 = var_core_value_sig04C6.apply(var_core_value_sigFE01, var_core_value_sig156F, var_core_value_sig9FBA);
      if (!var_core_value_sig6EA1) return false;
      let var_core_value_sig029F = {
          unitId: var_core_value_sigF057,
          chart: var_core_value_sig6EA1
        },
        var_core_value_sig3767 = {
          unitId: var_core_value_sigF057,
          chart: var_core_value_sigFE01
        },
        var_core_value_sig670B = [{
          id: B.id,
          params: var_core_value_sig029F
        }],
        var_core_value_sig6912 = [{
          id: B.id,
          params: var_core_value_sig3767
        }];
      return var_core_value_sig6A78(var_core_value_sig670B, var_core_value_sigA2CE).result ? (var_core_value_sig1975.pushUndoRedo({
        unitID: var_core_value_sigF057,
        undoMutations: var_core_value_sig6912,
        redoMutations: var_core_value_sig670B
      }), true) : false;
    }
  },
  G = {
    id: "slide.command.update-slide-chart-data-source",
    type: var_core_value_sigD948.COMMAND,
    handler: (var_core_value_sigE235, var_core_value_sig7664) => {
      if (!var_core_value_sig7664) return false;
      let var_core_value_sig2281 = var_core_value_sig938F(var_core_value_sigE235.get(var_core_value_sig585D), var_core_value_sig7664);
      if (!var_core_value_sig2281) return false;
      let {
          unitId: var_core_value_sig5E86
        } = var_core_value_sig2281,
        {
          dataSourceId: var_core_value_sig6998,
          values: var_core_value_sigF639,
          name: var_core_value_sigEAE5
        } = var_core_value_sig7664,
        var_core_value_sigE94C = var_core_value_sigE235.get(L).getDataSource(var_core_value_sig5E86, var_core_value_sig6998);
      if (!var_core_value_sigE94C) return false;
      let var_core_value_sig6D47 = var_core_value_sigE235.get(var_core_value_sigED71),
        var_core_value_sigCB82 = var_core_value_sigE235.get(var_core_value_sigB16B),
        var_core_value_sigCF4E = {
          unitId: var_core_value_sig5E86,
          dataSource: {
            id: var_core_value_sig6998,
            values: var_core_value_sigF639,
            name: var_core_value_sigEAE5 ?? var_core_value_sigE94C.name
          }
        },
        var_core_value_sig6CAD = {
          unitId: var_core_value_sig5E86,
          dataSource: var_core_value_sigE94C
        },
        var_core_value_sig8CF5 = [{
          id: z.id,
          params: var_core_value_sigCF4E
        }],
        var_core_value_sigDDD7 = [{
          id: z.id,
          params: var_core_value_sig6CAD
        }];
      return var_core_value_sig6A78(var_core_value_sig8CF5, var_core_value_sig6D47).result ? (var_core_value_sigCB82.pushUndoRedo({
        unitID: var_core_value_sig5E86,
        undoMutations: var_core_value_sigDDD7,
        redoMutations: var_core_value_sig8CF5
      }), true) : false;
    }
  };
function K(var_core_value_sigB2CE) {
  "@babel/helpers - typeof";

  return K = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sig1A0F) {
    return typeof var_core_value_sig1A0F;
  } : function (var_core_value_sigFBA4) {
    return var_core_value_sigFBA4 && typeof Symbol == "function" && var_core_value_sigFBA4.constructor === Symbol && var_core_value_sigFBA4 !== Symbol.prototype ? "symbol" : typeof var_core_value_sigFBA4;
  }, K(var_core_value_sigB2CE);
}
function ge(var_core_value_sig443C, var_core_value_sig39B1) {
  if (K(var_core_value_sig443C) != "object" || !var_core_value_sig443C) return var_core_value_sig443C;
  var var_core_value_sig210D = var_core_value_sig443C[Symbol.toPrimitive];
  if (var_core_value_sig210D !== undefined) {
    var var_core_value_sigB4B4 = var_core_value_sig210D.call(var_core_value_sig443C, var_core_value_sig39B1 || "default");
    if (K(var_core_value_sigB4B4) != "object") return var_core_value_sigB4B4;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sig39B1 === "string" ? String : Number)(var_core_value_sig443C);
}
function _e(var_core_value_sigD407) {
  var var_core_value_sig63F3 = ge(var_core_value_sigD407, "string");
  return K(var_core_value_sig63F3) == "symbol" ? var_core_value_sig63F3 : var_core_value_sig63F3 + "";
}
function q(var_core_value_sig6A71, var_core_value_sig3BF6, var_core_value_sig38CE) {
  return (var_core_value_sig3BF6 = _e(var_core_value_sig3BF6)) in var_core_value_sig6A71 ? Object.defineProperty(var_core_value_sig6A71, var_core_value_sig3BF6, {
    value: var_core_value_sig38CE,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sig6A71[var_core_value_sig3BF6] = var_core_value_sig38CE, var_core_value_sig6A71;
}
function J(var_core_value_sig62B7, var_core_value_sig37A8) {
  return function (var_core_value_sig4383, var_core_value_sig186C) {
    var_core_value_sig37A8(var_core_value_sig4383, var_core_value_sig186C, var_core_value_sig62B7);
  };
}
function Y(var_core_value_sigA90D, var_core_value_sig7A3C, var_core_value_sig0511, var_core_value_sig1F44) {
  var var_core_value_sigCB04 = arguments.length,
    var_core_value_sig947E = var_core_value_sigCB04 < 3 ? var_core_value_sig7A3C : var_core_value_sig1F44 === null ? var_core_value_sig1F44 = Object.getOwnPropertyDescriptor(var_core_value_sig7A3C, var_core_value_sig0511) : var_core_value_sig1F44,
    var_core_value_sig4545;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sig947E = Reflect.decorate(var_core_value_sigA90D, var_core_value_sig7A3C, var_core_value_sig0511, var_core_value_sig1F44);else {
    for (var var_core_value_sigF39A = var_core_value_sigA90D.length - 1; var_core_value_sigF39A >= 0; var_core_value_sigF39A--) (var_core_value_sig4545 = var_core_value_sigA90D[var_core_value_sigF39A]) && (var_core_value_sig947E = (var_core_value_sigCB04 < 3 ? var_core_value_sig4545(var_core_value_sig947E) : var_core_value_sigCB04 > 3 ? var_core_value_sig4545(var_core_value_sig7A3C, var_core_value_sig0511, var_core_value_sig947E) : var_core_value_sig4545(var_core_value_sig7A3C, var_core_value_sig0511)) || var_core_value_sig947E);
  }
  return var_core_value_sigCB04 > 3 && var_core_value_sig947E && Object.defineProperty(var_core_value_sig7A3C, var_core_value_sig0511, var_core_value_sig947E), var_core_value_sig947E;
}
let X = class extends var_core_value_sigC9ED {
  constructor(var_core_value_sigD955, var_core_value_sig48BD, var_core_value_sig429F) {
    super(var_core_value_sigD955, var_core_value_sig48BD, var_core_value_sig7D40, var_core_value_sig429F), q(this, "_chartDataUpdated$", new var_core_value_sig27F9()), q(this, "chartDataUpdated$", this._chartDataUpdated$["asObservable"]());
  }
  dispose() {
    this._chartDataUpdated$["complete"](), super.dispose();
  }
  _beforeRuntimeRefresh(var_core_value_sigF62A) {
    this._chartDataUpdated$["next"](var_core_value_sigF62A.chartId);
  }
};
X = Y([J(0, var_core_value_sigE722(L)), J(1, var_core_value_sigE722(var_core_value_sig062A)), J(2, var_core_value_sigE722(var_core_value_sig780B))], X);
var ve = class {
  constructor(var_core_value_sig8178) {
    this._context = var_core_value_sig8178;
  }
  describe(var_core_value_sigE9ED = {}, var_core_value_sigB577) {
    var var_core_value_sig9572, var_core_value_sigD873;
    let {
        chartId: var_core_value_sigA12B,
        elementId: var_core_value_sigF230,
        injector: var_core_value_sig09B8,
        slideModel: var_core_value_sig6F91,
        subUnitId: var_core_value_sigF9C7,
        unitId: var_core_value_sig8895
      } = this._context,
      var_core_value_sigC80B = var_core_value_sig09B8.get(X).ensureChartModel(var_core_value_sig8895, var_core_value_sigA12B),
      var_core_value_sig284F = var_core_value_sig09B8.get(L).getChart(var_core_value_sig8895, var_core_value_sigA12B),
      var_core_value_sigE154 = var_core_value_sig284F ? var_core_value_sig09B8.get(L).getDataSource(var_core_value_sig8895, var_core_value_sig284F.dataSourceId) : null,
      var_core_value_sig4632 = (var_core_value_sig9572 = var_core_value_sig6F91.getSnapshot().slides[var_core_value_sigF9C7]) == null ? undefined : var_core_value_sig9572.elements[var_core_value_sigF230];
    if (!var_core_value_sigC80B || !var_core_value_sigE154 || !var_core_value_sig4632) throw Error("Chart not found: " + var_core_value_sigA12B);
    let var_core_value_sig12F2 = ((var_core_value_sigD873 = var_core_value_sig6F91.getSnapshot().slides[var_core_value_sigF9C7]) == null ? undefined : var_core_value_sigD873.elementOrder["indexOf"](var_core_value_sigF230)) ?? -1;
    return {
      ...var_core_value_sigCA05(var_core_value_sigC80B.model, var_core_value_sigE9ED, var_core_value_sigB577),
      id: var_core_value_sigA12B,
      position: {
        x: var_core_value_sig4632.transform["left"] ?? 0,
        y: var_core_value_sig4632.transform["top"] ?? 0
      },
      size: {
        width: var_core_value_sig4632.transform["width"] ?? 0,
        height: var_core_value_sig4632.transform["height"] ?? 0
      },
      placeholder: var_core_value_sig8B32.deepClone(var_core_value_sig4632.placeholder),
      stroke: var_core_value_sig8B32.deepClone(var_core_value_sig4632.stroke),
      zOrder: var_core_value_sig12F2 < 0 ? undefined : var_core_value_sig12F2
    };
  }
  getInfo() {
    let var_core_value_sig2259 = this.describe(),
      var_core_value_sig9E2F = this.getDataSource();
    if (!var_core_value_sig9E2F) throw Error("Chart data source not found: " + this._context["chartId"]);
    return {
      config: var_core_value_sigD04E(var_core_value_sig2259),
      dataSource: var_core_value_sig2F2B(var_core_value_sig9E2F) ? {
        values: var_core_value_sig8B32.deepClone(var_core_value_sig9E2F.values)
      } : var_core_value_sig70AF(var_core_value_sig9E2F) ? {
        source: var_core_value_sig8B32.deepClone(var_core_value_sig9E2F.source)
      } : (() => {
        throw Error("Invalid Chart data source: " + this._context["chartId"]);
      })(),
      position: var_core_value_sig8B32.deepClone(var_core_value_sig2259.position),
      size: var_core_value_sig8B32.deepClone(var_core_value_sig2259.size),
      placeholder: var_core_value_sig8B32.deepClone(var_core_value_sig2259.placeholder),
      stroke: var_core_value_sig8B32.deepClone(var_core_value_sig2259.stroke),
      zOrder: var_core_value_sig2259.zOrder
    };
  }
  getData() {
    let {
        chartId: var_core_value_sigD082,
        injector: var_core_value_sigDBB7,
        unitId: var_core_value_sigD0A8
      } = this._context,
      var_core_value_sigF4B9 = var_core_value_sigDBB7.get(L).getChart(var_core_value_sigD0A8, var_core_value_sigD082),
      var_core_value_sig5CEE = var_core_value_sigF4B9 ? var_core_value_sigDBB7.get(L).getDataSource(var_core_value_sigD0A8, var_core_value_sigF4B9.dataSourceId) : null;
    return var_core_value_sig2F2B(var_core_value_sig5CEE) ? var_core_value_sig5CEE.values : null;
  }
  getDataSource() {
    let {
        chartId: var_core_value_sigE92A,
        injector: var_core_value_sig362B,
        unitId: var_core_value_sig5CA5
      } = this._context,
      var_core_value_sigE90F = var_core_value_sig362B.get(L).getChart(var_core_value_sig5CA5, var_core_value_sigE92A);
    return (var_core_value_sigE90F ? var_core_value_sig362B.get(L).getDataSource(var_core_value_sig5CA5, var_core_value_sigE90F.dataSourceId) : null) ?? null;
  }
  async commitDataSource(var_core_value_sigEFD4) {
    let {
        injector: var_core_value_sig861B
      } = this._context,
      var_core_value_sig5237 = var_core_value_sig70AF(var_core_value_sigEFD4) ? var_core_value_sigEFD4.source : undefined,
      var_core_value_sigBB00 = var_core_value_sig5237 ? var_core_value_sig861B.get(var_core_value_sig780B).acquire(var_core_value_sig5237) : null;
    try {
      if (var_core_value_sigBB00) {
        let var_core_value_sig2AD0 = await var_core_value_sigB609(var_core_value_sigBB00.state$["pipe"](var_core_value_sig393E(({
          status: var_core_value_sig7524
        }) => var_core_value_sig7524 !== var_core_value_sig3F79.LOADING)));
        if (var_core_value_sig2AD0.status !== var_core_value_sig3F79.READY) throw var_core_value_sig2AD0.error instanceof Error ? var_core_value_sig2AD0.error : Error(var_core_value_sig5237 == null ? undefined : var_core_value_sig5237.kind);
      }
      this._commitDataSource(var_core_value_sigEFD4);
    } finally {
      var_core_value_sigBB00 == null || var_core_value_sigBB00.dispose();
    }
  }
  async commitChanges(var_core_value_sig7E54, var_core_value_sig9A8D, var_core_value_sigC259, var_core_value_sig9C9F = false) {
    let {
        injector: var_core_value_sigFDEA
      } = this._context,
      var_core_value_sig86D0 = var_core_value_sig70AF(var_core_value_sig7E54) ? var_core_value_sig7E54.source : undefined,
      var_core_value_sig4CD2 = var_core_value_sig86D0 ? var_core_value_sigFDEA.get(var_core_value_sig780B).acquire(var_core_value_sig86D0) : null;
    try {
      if (var_core_value_sig4CD2) {
        let var_core_value_sig3EEE = await var_core_value_sigB609(var_core_value_sig4CD2.state$["pipe"](var_core_value_sig393E(({
          status: var_core_value_sig2AD8
        }) => var_core_value_sig2AD8 !== var_core_value_sig3F79.LOADING)));
        if (var_core_value_sig3EEE.status !== var_core_value_sig3F79.READY) throw var_core_value_sig3EEE.error instanceof Error ? var_core_value_sig3EEE.error : Error(var_core_value_sig86D0 == null ? undefined : var_core_value_sig86D0.kind);
      }
      Object.keys(var_core_value_sig9A8D).length > 0 && (var_core_value_sig9C9F ? this._replaceConfig(var_core_value_sig9A8D) : this.commit(var_core_value_sig9A8D)), Object.keys(var_core_value_sigC259).length > 0 && this.commitHost(var_core_value_sigC259), var_core_value_sig7E54 && this._commitDataSource(var_core_value_sig7E54);
    } finally {
      var_core_value_sig4CD2 == null || var_core_value_sig4CD2.dispose();
    }
  }
  refreshDataSource() {
    let {
      chartId: var_core_value_sig48CA,
      injector: var_core_value_sig50AF,
      unitId: var_core_value_sigA942
    } = this._context;
    return var_core_value_sig50AF.get(X).refreshChartDataSource(var_core_value_sigA942, var_core_value_sig48CA);
  }
  commit(var_core_value_sigA621) {
    var var_core_value_sigBBFF;
    let {
        chartId: var_core_value_sig8889,
        injector: var_core_value_sig32F8,
        unitId: var_core_value_sig5B67
      } = this._context,
      var_core_value_sig1758 = var_core_value_sig32F8.get(X).ensureChartModel(var_core_value_sig5B67, var_core_value_sig8889);
    if (!var_core_value_sig1758) throw Error("Chart\x20not\x20found:\x20" + var_core_value_sig8889);
    let var_core_value_sig4805 = var_core_value_sig5A75(var_core_value_sigA621, {
      series: (var_core_value_sigBBFF = var_core_value_sig1758.model["config"]) == null ? undefined : var_core_value_sigBBFF.series,
      currentChartType: var_core_value_sig1758.model["chartType"],
      currentStyle: var_core_value_sig1758.model["style"],
      currentContext: var_core_value_sig1758.model["context"],
      currentDataAggregation: var_core_value_sig1758.model["dataAggregation"]
    });
    if (!var_core_value_sig32F8.get(var_core_value_sigED71).syncExecuteCommand(W.id, W.replaceConfig({
      unitId: var_core_value_sig5B67,
      chartId: var_core_value_sig8889,
      ...var_core_value_sig4805
    }))) throw Error("Failed to update Slide chart configuration.");
  }
  update(var_core_value_sigE67E) {
    let var_core_value_sig2902 = {};
    return var_core_value_sigE67E.position !== undefined && (var_core_value_sig2902.position = var_core_value_sigE67E.position), var_core_value_sigE67E.size !== undefined && (var_core_value_sig2902.size = var_core_value_sigE67E.size), Object.prototype["hasOwnProperty"].call(var_core_value_sigE67E, "placeholder") && (var_core_value_sig2902.placeholder = var_core_value_sigE67E.placeholder), Object.prototype["hasOwnProperty"].call(var_core_value_sigE67E, "stroke") && (var_core_value_sig2902.stroke = var_core_value_sigE67E.stroke), var_core_value_sigE67E.zOrder !== undefined && (var_core_value_sig2902.zOrder = var_core_value_sigE67E.zOrder), this.commitChanges(var_core_value_sigE67E.dataSource, var_core_value_sigE67E.config, var_core_value_sig2902, true);
  }
  _replaceConfig(var_core_value_sig9989) {
    var var_core_value_sig698E;
    let {
        chartId: var_core_value_sig2809,
        injector: var_core_value_sig2DAB,
        unitId: var_core_value_sig877E
      } = this._context,
      var_core_value_sig20C8 = var_core_value_sig2DAB.get(X).ensureChartModel(var_core_value_sig877E, var_core_value_sig2809);
    if (!var_core_value_sig20C8) throw Error("Chart not found: " + var_core_value_sig2809);
    let var_core_value_sigE9A7 = var_core_value_sigB99B(var_core_value_sig9989, {
      series: (var_core_value_sig698E = var_core_value_sig20C8.model["config"]) == null ? undefined : var_core_value_sig698E.series,
      currentStyle: var_core_value_sig20C8.model["style"]
    });
    if (!var_core_value_sig2DAB.get(var_core_value_sigED71).syncExecuteCommand(W.id, W.replaceConfig({
      unitId: var_core_value_sig877E,
      chartId: var_core_value_sig2809,
      ...var_core_value_sigE9A7
    }))) throw Error("Failed to update Slide chart configuration.");
  }
  setDataSource(var_core_value_sigBECE) {
    return this.commitDataSource(Array.isArray(var_core_value_sigBECE) ? {
      values: var_core_value_sigBECE
    } : {
      source: var_core_value_sig7D1B.toReference(var_core_value_sigBECE)
    });
  }
  setAbsolutePosition(var_core_value_sig1B22, var_core_value_sig7F72) {
    this.commitHost({
      position: {
        x: var_core_value_sig1B22,
        y: var_core_value_sig7F72
      }
    });
  }
  setSize(var_core_value_sig7B2A, var_core_value_sig06CD) {
    this.commitHost({
      size: {
        width: var_core_value_sig7B2A,
        height: var_core_value_sig06CD
      }
    });
  }
  arrange(var_core_value_sigA5F1) {
    var var_core_value_sig97A2;
    let {
        elementId: var_core_value_sig07E9,
        slideModel: var_core_value_sig4F59,
        subUnitId: var_core_value_sigF564
      } = this._context,
      var_core_value_sig8CFA = ((var_core_value_sig97A2 = var_core_value_sig4F59.getSnapshot().slides[var_core_value_sigF564]) == null ? undefined : var_core_value_sig97A2.elementOrder) ?? [],
      var_core_value_sig2E11 = var_core_value_sig8CFA.indexOf(var_core_value_sig07E9);
    if (var_core_value_sig2E11 < 0) throw Error("Slide\x20chart\x20element\x20not\x20found:\x20" + var_core_value_sig07E9);
    this.setZOrder(var_core_value_sig26EC(var_core_value_sig2E11, var_core_value_sig8CFA.length, var_core_value_sigA5F1));
  }
  setZOrder(var_core_value_sig5B69) {
    this._commitZOrder(var_core_value_sig5B69);
  }
  resolveData(var_core_value_sigB098, var_core_value_sigCE71) {
    let {
        chartId: var_core_value_sig21D8,
        injector: var_core_value_sig2B65,
        unitId: var_core_value_sigD7EA
      } = this._context,
      var_core_value_sigB33B = var_core_value_sig2B65.get(X).ensureChartModel(var_core_value_sigD7EA, var_core_value_sig21D8);
    if (!var_core_value_sigB33B) throw Error("Chart\x20not\x20found:\x20" + var_core_value_sig21D8);
    return var_core_value_sig6C7E(var_core_value_sigB33B.model, var_core_value_sigB098, var_core_value_sigCE71);
  }
  resolveDataSet(var_core_value_sig24B9) {
    var var_core_value_sigE627, var_core_value_sigEF3E;
    let {
        chartId: var_core_value_sig273D,
        injector: var_core_value_sig9A0D,
        unitId: var_core_value_sigA319
      } = this._context,
      var_core_value_sig2D58 = var_core_value_sig9A0D.get(X).ensureChartModel(var_core_value_sigA319, var_core_value_sig273D),
      var_core_value_sig223F = var_core_value_sig9A0D.get(L).getChart(var_core_value_sigA319, var_core_value_sig273D);
    if (!var_core_value_sig2D58 || !var_core_value_sig223F) throw Error("Chart not found: " + var_core_value_sig273D);
    return var_core_value_sig68BE(var_core_value_sig24B9, {
      headerRow: ((var_core_value_sigE627 = var_core_value_sig223F.context) == null ? undefined : var_core_value_sigE627.headerRow) ?? var_core_value_sigB57B,
      isRowDirection: ((var_core_value_sigEF3E = var_core_value_sig223F.context) == null ? undefined : var_core_value_sigEF3E.orient) !== "column"
    });
  }
  commitHost(var_core_value_sigD749) {
    let {
        chartId: var_core_value_sigCFFA,
        elementId: var_core_value_sig58C1,
        injector: var_core_value_sig5090,
        slideModel: var_core_value_sigC368,
        subUnitId: var_core_value_sigAD56,
        unitId: var_core_value_sigDB4A
      } = this._context,
      var_core_value_sig6418 = var_core_value_sig5090.get(var_core_value_sigED71);
    if (var_core_value_sigD749.data !== undefined) {
      let var_core_value_sigBC46 = var_core_value_sig5090.get(L).getChart(var_core_value_sigDB4A, var_core_value_sigCFFA);
      if (!var_core_value_sigBC46 || !var_core_value_sig6418.syncExecuteCommand(G.id, {
        unitId: var_core_value_sigDB4A,
        dataSourceId: var_core_value_sigBC46.dataSourceId,
        values: var_core_value_sigD749.data ?? []
      })) throw Error("Failed to update Slide chart data.");
    }
    if (var_core_value_sigD749.position || var_core_value_sigD749.size || "placeholder" in var_core_value_sigD749 || "stroke" in var_core_value_sigD749) {
      var var_core_value_sig1896;
      let var_core_value_sig3D7D = (var_core_value_sig1896 = var_core_value_sigC368.getSnapshot().slides[var_core_value_sigAD56]) == null ? undefined : var_core_value_sig1896.elements[var_core_value_sig58C1];
      if (!var_core_value_sig3D7D) throw Error("Slide chart element not found: " + var_core_value_sig58C1);
      let var_core_value_sig27E5 = {
        ...var_core_value_sig3D7D,
        transform: {
          ...var_core_value_sig3D7D.transform,
          ...(var_core_value_sigD749.position ? {
            left: var_core_value_sigD749.position["x"],
            top: var_core_value_sigD749.position["y"]
          } : {}),
          ...(var_core_value_sigD749.size ? {
            width: var_core_value_sigD749.size["width"],
            height: var_core_value_sigD749.size["height"]
          } : {})
        },
        ...("placeholder" in var_core_value_sigD749 ? {
          placeholder: var_core_value_sigD749.placeholder
        } : {}),
        ...("stroke" in var_core_value_sigD749 ? {
          stroke: var_core_value_sigD749.stroke
        } : {})
      };
      if (!ye(var_core_value_sig3D7D, var_core_value_sig27E5) && !var_core_value_sig6418.syncExecuteCommand(var_core_value_sigC56D.id, {
        patches: [{
          unitId: var_core_value_sigDB4A,
          subUnitId: var_core_value_sigAD56,
          drawingId: var_core_value_sig58C1,
          element: var_core_value_sig27E5
        }]
      })) throw Error("Failed to update Slide chart element.");
    }
    this._commitZOrder(var_core_value_sigD749.zOrder);
  }
  remove() {
    let {
      chartId: var_core_value_sig0285,
      elementId: var_core_value_sig777D,
      injector: var_core_value_sig3F4C,
      subUnitId: var_core_value_sigD65A,
      unitId: var_core_value_sig5A13
    } = this._context;
    return var_core_value_sig3F4C.get(var_core_value_sigED71).syncExecuteCommand(U.id, {
      unitId: var_core_value_sig5A13,
      subUnitId: var_core_value_sigD65A,
      chartId: var_core_value_sig0285,
      elementId: var_core_value_sig777D
    });
  }
  _commitDataSource(var_core_value_sigF593) {
    let {
      chartId: var_core_value_sig3607,
      injector: var_core_value_sigB512,
      unitId: var_core_value_sigF2E6
    } = this._context;
    if (!var_core_value_sigB512.get(var_core_value_sigED71).syncExecuteCommand(V.id, {
      unitId: var_core_value_sigF2E6,
      chartId: var_core_value_sig3607,
      dataSource: var_core_value_sigF593
    })) throw Error(V.id);
  }
  _commitZOrder(var_core_value_sig34C8) {
    if (var_core_value_sig34C8 === undefined) return;
    let {
        elementId: var_core_value_sigB744,
        injector: var_core_value_sigEAE2,
        slideModel: var_core_value_sigE68A,
        subUnitId: var_core_value_sig3E68,
        unitId: var_core_value_sigF4C5
      } = this._context,
      var_core_value_sig5410 = var_core_value_sigE68A.getSnapshot().slides[var_core_value_sig3E68];
    if (!var_core_value_sig5410) throw Error("Slide\x20not\x20found:\x20" + var_core_value_sig3E68);
    let var_core_value_sig492F = var_core_value_sig5410.elementOrder["filter"](var_core_value_sig8061 => var_core_value_sig8061 !== var_core_value_sigB744);
    if (var_core_value_sig492F.splice(var_core_value_sig36E7(var_core_value_sig34C8, var_core_value_sig5410.elementOrder["length"]), 0, var_core_value_sigB744), !var_core_value_sig492F.every((var_core_value_sig4D4C, var_core_value_sigC9E0) => var_core_value_sig4D4C === var_core_value_sig5410.elementOrder[var_core_value_sigC9E0]) && !var_core_value_sigEAE2.get(var_core_value_sigED71).syncExecuteCommand(var_core_value_sig3D2C.id, {
      unitId: var_core_value_sigF4C5,
      subUnitId: var_core_value_sig3E68,
      drawingIds: var_core_value_sig492F
    })) throw Error("Failed to update Slide chart z-order.");
  }
};
function ye(var_core_value_sigF79C, var_core_value_sig2E54) {
  return JSON.stringify(be(var_core_value_sigF79C)) === JSON.stringify(be(var_core_value_sig2E54));
}
function be(var_core_value_sig7658) {
  let var_core_value_sigDCF5 = var_core_value_sig8B32.deepClone(var_core_value_sig7658);
  return var_core_value_sigDCF5.transform = {
    ...var_core_value_sigDCF5.transform,
    left: var_core_value_sigDCF5.transform["left"] ?? 0,
    top: var_core_value_sigDCF5.transform["top"] ?? 0,
    width: var_core_value_sigDCF5.transform["width"] ?? 0,
    height: var_core_value_sigDCF5.transform["height"] ?? 0,
    rotation: var_core_value_sigDCF5.transform["rotation"] ?? 0,
    flipX: var_core_value_sigDCF5.transform["flipX"] ?? false,
    flipY: var_core_value_sigDCF5.transform["flipY"] ?? false
  }, var_core_value_sigDCF5;
}
const xe = {
    id: "slide.command.duplicate-slide-data-source",
    type: var_core_value_sigD948.COMMAND,
    handler: (var_core_value_sigC786, var_core_value_sigC0D9) => {
      if (!var_core_value_sigC0D9) return false;
      let var_core_value_sigF0511 = var_core_value_sig938F(var_core_value_sigC786.get(var_core_value_sig585D), var_core_value_sigC0D9);
      if (!var_core_value_sigF0511) return false;
      let {
          unitId: var_core_value_sig5825
        } = var_core_value_sigF0511,
        {
          chartId: var_core_value_sig4EB7,
          duplicateDataSourceId: var_core_value_sig73AF
        } = var_core_value_sigC0D9,
        var_core_value_sig548A = var_core_value_sigC786.get(L),
        var_core_value_sigE026 = var_core_value_sig548A.getChart(var_core_value_sig5825, var_core_value_sig4EB7),
        var_core_value_sig339E = var_core_value_sigE026 ? var_core_value_sig548A.getDataSource(var_core_value_sig5825, var_core_value_sigE026.dataSourceId) : undefined,
        var_core_value_sig7550 = var_core_value_sig548A.duplicateDataSourceForChart(var_core_value_sig5825, var_core_value_sig4EB7, var_core_value_sig73AF);
      if (!var_core_value_sigE026 || !var_core_value_sig339E || !var_core_value_sig7550) return false;
      let var_core_value_sig2983 = var_core_value_sigC786.get(var_core_value_sigED71),
        var_core_value_sigE1B0 = var_core_value_sigC786.get(var_core_value_sigB16B),
        var_core_value_sigD4FF = {
          unitId: var_core_value_sig5825,
          dataSource: var_core_value_sig7550
        },
        var_core_value_sig1E5B = {
          unitId: var_core_value_sig5825,
          dataSourceId: var_core_value_sig7550.id
        },
        var_core_value_sigB680 = {
          unitId: var_core_value_sig5825,
          chart: {
            ...var_core_value_sigE026,
            dataSourceId: var_core_value_sig7550.id
          }
        },
        var_core_value_sig1F64 = {
          unitId: var_core_value_sig5825,
          chart: var_core_value_sigE026
        },
        var_core_value_sigDD1C = [{
          id: z.id,
          params: var_core_value_sigD4FF
        }, {
          id: B.id,
          params: var_core_value_sigB680
        }],
        var_core_value_sig2C39 = [{
          id: B.id,
          params: var_core_value_sig1F64
        }, {
          id: R.id,
          params: var_core_value_sig1E5B
        }];
      return var_core_value_sig6A78(var_core_value_sigDD1C, var_core_value_sig2983).result ? (var_core_value_sigE1B0.pushUndoRedo({
        unitID: var_core_value_sig5825,
        undoMutations: var_core_value_sig2C39,
        redoMutations: var_core_value_sigDD1C
      }), true) : false;
    }
  },
  Se = 120,
  Ce = 80,
  we = 480,
  Te = 320,
  Ee = [["Category", "Value"], ["A", 12], ["B", 18], ["C", 9]],
  De = {
    lineStrokeType: var_core_value_sig390D.SolidLine,
    width: 1,
    color: "#d1d5db",
    opacity: 1
  },
  Z = {
    id: "slide.command.insert-slide-chart",
    type: var_core_value_sigD948.COMMAND,
    handler: (var_core_value_sigB7D1, var_core_value_sig64F0) => {
      var var_core_value_sig85B1;
      if (!var_core_value_sig64F0) return false;
      let var_core_value_sig3141 = var_core_value_sig938F(var_core_value_sigB7D1.get(var_core_value_sig585D), var_core_value_sig64F0);
      if (!var_core_value_sig3141) return false;
      let var_core_value_sig2162 = var_core_value_sig8B32.deepClone(var_core_value_sig64F0.chart);
      if (!var_core_value_sig2162.chartType) return false;
      var_core_value_sig2162.id ||= var_core_value_sigB683(6), var_core_value_sig2162.context = {
        ...var_core_value_sig2162.context,
        headerRow: ((var_core_value_sig85B1 = var_core_value_sig2162.context) == null ? undefined : var_core_value_sig85B1.headerRow) ?? var_core_value_sigB57B
      };
      let var_core_value_sig2EAD = var_core_value_sigB7D1.get(var_core_value_sig8F69),
        var_core_value_sig6774 = var_core_value_sigB7D1.get(var_core_value_sigED71),
        var_core_value_sig340D = var_core_value_sigB7D1.get(var_core_value_sigB16B),
        {
          unitId: var_core_value_sig82D4,
          subUnitId: var_core_value_sigBDE4
        } = var_core_value_sig3141,
        {
          element: var_core_value_sig7DF1,
          replaceElementId: var_core_value_sigDC86,
          insertIndex: var_core_value_sig0B0C,
          focus: var_core_value_sigA39E
        } = var_core_value_sig64F0,
        var_core_value_sigBBEE = Oe(var_core_value_sig64F0.dataSource);
      var_core_value_sig2162.dataSourceId = var_core_value_sigBBEE.id;
      let var_core_value_sig011D = ke({
        unitId: var_core_value_sig82D4,
        subUnitId: var_core_value_sigBDE4,
        chartId: var_core_value_sig2162.id,
        element: var_core_value_sig7DF1,
        replaceElementId: var_core_value_sigDC86,
        insertIndex: var_core_value_sig0B0C,
        slideDrawingService: var_core_value_sig2EAD
      });
      if (!var_core_value_sig011D) return false;
      let var_core_value_sig6167 = {
          unitId: var_core_value_sig82D4,
          dataSource: var_core_value_sigBBEE
        },
        var_core_value_sig65A1 = {
          unitId: var_core_value_sig82D4,
          chart: var_core_value_sig2162
        },
        var_core_value_sig7F19 = [{
          id: z.id,
          params: var_core_value_sig6167
        }, {
          id: B.id,
          params: var_core_value_sig65A1
        }, var_core_value_sig011D.redoMutation],
        var_core_value_sig7827 = {
          unitId: var_core_value_sig82D4,
          chartId: var_core_value_sig2162.id,
          cleanupDataSource: true
        },
        var_core_value_sig652C = {
          unitId: var_core_value_sig82D4,
          dataSourceId: var_core_value_sigBBEE.id
        },
        var_core_value_sig7E32 = [var_core_value_sig011D.undoMutation, {
          id: H.id,
          params: var_core_value_sig7827
        }, {
          id: R.id,
          params: var_core_value_sig652C
        }],
        var_core_value_sig4C07 = var_core_value_sig6A78(var_core_value_sig7F19, var_core_value_sig6774);
      return var_core_value_sig4C07.result ? (var_core_value_sigA39E !== false && var_core_value_sig2EAD.focusDrawing([{
        unitId: var_core_value_sig82D4,
        subUnitId: var_core_value_sigBDE4,
        drawingId: var_core_value_sig011D.elementId
      }]), var_core_value_sig340D.pushUndoRedo({
        unitID: var_core_value_sig82D4,
        undoMutations: var_core_value_sig7E32,
        redoMutations: var_core_value_sig7F19
      }), true) : (var_core_value_sig6A78(var_core_value_sig4C07.index === 1 ? [{
        id: R.id,
        params: var_core_value_sig652C
      }] : var_core_value_sig4C07.index === 2 ? [{
        id: H.id,
        params: var_core_value_sig7827
      }, {
        id: R.id,
        params: var_core_value_sig652C
      }] : [], var_core_value_sig6774), false);
    }
  };
function Oe(var_core_value_sig79AB) {
  let var_core_value_sig8E74 = (var_core_value_sig79AB == null ? undefined : var_core_value_sig79AB.id) ?? var_core_value_sigB683(6),
    var_core_value_sig104C = var_core_value_sig79AB == null ? undefined : var_core_value_sig79AB.name,
    var_core_value_sig841D = var_core_value_sig79AB != null && var_core_value_sig79AB.source ? {
      id: var_core_value_sig8E74,
      name: var_core_value_sig104C,
      source: var_core_value_sig79AB.source
    } : {
      id: var_core_value_sig8E74,
      name: var_core_value_sig104C,
      values: ((var_core_value_sig79AB == null ? undefined : var_core_value_sig79AB.values) ?? Ee).map(var_core_value_sig8EA0 => [...var_core_value_sig8EA0])
    };
  return var_core_value_sig841D.name ?? delete var_core_value_sig841D.name, var_core_value_sig841D;
}
function ke(var_core_value_sig90CB) {
  let {
      unitId: var_core_value_sigBDF5,
      subUnitId: var_core_value_sigACC6,
      chartId: var_core_value_sig1614,
      replaceElementId: var_core_value_sig85C3,
      insertIndex: var_core_value_sigB996,
      slideDrawingService: var_core_value_sig4BBA
    } = var_core_value_sig90CB,
    var_core_value_sig6201 = var_core_value_sig90CB.element ? var_core_value_sig8B32.deepClone(var_core_value_sig90CB.element) : {},
    {
      stroke: var_core_value_sig5151,
      transform: var_core_value_sigB542,
      placeholder: var_core_value_sigBB6C
    } = var_core_value_sig6201;
  if (var_core_value_sig85C3) {
    let var_core_value_sigA6F6 = var_core_value_sig4BBA.getDrawingByParam({
      unitId: var_core_value_sigBDF5,
      subUnitId: var_core_value_sigACC6,
      drawingId: var_core_value_sig85C3
    });
    if ((var_core_value_sigA6F6 == null ? undefined : var_core_value_sigA6F6.sourcePageType) !== var_core_value_sig066E.Slide) return null;
    let var_core_value_sigCDDA = Ae({
        chartId: var_core_value_sig1614,
        elementId: var_core_value_sig85C3,
        stroke: var_core_value_sig5151,
        transform: var_core_value_sigB542,
        placeholder: var_core_value_sigBB6C
      }),
      var_core_value_sigE243 = {
        unitId: var_core_value_sigBDF5,
        subUnitId: var_core_value_sigACC6,
        drawingId: var_core_value_sig85C3,
        element: var_core_value_sigCDDA,
        transform: var_core_value_sigCDDA.transform
      },
      var_core_value_sig74A8 = {
        unitId: var_core_value_sigBDF5,
        subUnitId: var_core_value_sigACC6,
        drawingId: var_core_value_sig85C3,
        element: var_core_value_sigA6F6.element,
        transform: var_core_value_sigA6F6.transform
      };
    return {
      elementId: var_core_value_sig85C3,
      redoMutation: {
        id: var_core_value_sig3A17.id,
        params: var_core_value_sigE243
      },
      undoMutation: {
        id: var_core_value_sig3A17.id,
        params: var_core_value_sig74A8
      }
    };
  }
  var_core_value_sig6201.id ||= var_core_value_sigB683(6);
  let var_core_value_sigE2BF = {
      unitId: var_core_value_sigBDF5,
      subUnitId: var_core_value_sigACC6,
      element: Ae({
        chartId: var_core_value_sig1614,
        elementId: var_core_value_sig6201.id,
        stroke: var_core_value_sig5151,
        transform: var_core_value_sigB542,
        placeholder: var_core_value_sigBB6C
      }),
      insertIndex: var_core_value_sigB996
    },
    var_core_value_sigB8C7 = {
      unitId: var_core_value_sigBDF5,
      subUnitId: var_core_value_sigACC6,
      drawingId: var_core_value_sig6201.id
    };
  return {
    elementId: var_core_value_sig6201.id,
    redoMutation: {
      id: var_core_value_sig7BAF.id,
      params: var_core_value_sigE2BF
    },
    undoMutation: {
      id: var_core_value_sig9B0D.id,
      params: var_core_value_sigB8C7
    }
  };
}
function Ae(var_core_value_sigA56E) {
  let {
      chartId: var_core_value_sig1998,
      elementId: var_core_value_sigFF19,
      stroke: var_core_value_sig43B8,
      transform: var_core_value_sigD98F,
      placeholder: var_core_value_sig66C0
    } = var_core_value_sigA56E,
    var_core_value_sig9D15 = {
      id: var_core_value_sigFF19,
      type: var_core_value_sig6884.Chart,
      chartId: var_core_value_sig1998,
      stroke: var_core_value_sig43B8 ?? De,
      transform: {
        left: (var_core_value_sigD98F == null ? undefined : var_core_value_sigD98F.left) ?? 120,
        top: (var_core_value_sigD98F == null ? undefined : var_core_value_sigD98F.top) ?? 80,
        width: (var_core_value_sigD98F == null ? undefined : var_core_value_sigD98F.width) ?? 480,
        height: (var_core_value_sigD98F == null ? undefined : var_core_value_sigD98F.height) ?? 320,
        rotation: (var_core_value_sigD98F == null ? undefined : var_core_value_sigD98F.rotation) ?? 0
      }
    };
  return var_core_value_sig66C0 && (var_core_value_sig9D15.placeholder = var_core_value_sig66C0), var_core_value_sig9D15;
}
const je = {
  id: "slide.command.update-slide-chart-snapshot",
  type: var_core_value_sigD948.COMMAND,
  handler: (var_core_value_sigB785, var_core_value_sig130F) => {
    if (!var_core_value_sig130F) return false;
    let var_core_value_sigC0E3 = var_core_value_sig938F(var_core_value_sigB785.get(var_core_value_sig585D), var_core_value_sig130F);
    if (!var_core_value_sigC0E3) return false;
    let {
        unitId: var_core_value_sig52F7
      } = var_core_value_sigC0E3,
      {
        chartId: var_core_value_sig866F,
        patch: var_core_value_sigDE3D
      } = var_core_value_sig130F,
      var_core_value_sigF175 = var_core_value_sigB785.get(L).getChart(var_core_value_sig52F7, var_core_value_sig866F);
    if (!var_core_value_sigF175) return false;
    let var_core_value_sig6A18 = var_core_value_sigB785.get(var_core_value_sigED71),
      var_core_value_sig4E3D = var_core_value_sigB785.get(var_core_value_sigB16B),
      var_core_value_sig49B0 = {
        unitId: var_core_value_sig52F7,
        chart: {
          ...var_core_value_sigF175,
          ...var_core_value_sigDE3D
        }
      },
      var_core_value_sig2547 = {
        unitId: var_core_value_sig52F7,
        chart: var_core_value_sigF175
      },
      var_core_value_sigBCA9 = [{
        id: B.id,
        params: var_core_value_sig49B0
      }],
      var_core_value_sig4CDF = [{
        id: B.id,
        params: var_core_value_sig2547
      }];
    return var_core_value_sig6A78(var_core_value_sigBCA9, var_core_value_sig6A18).result ? (var_core_value_sig4E3D.pushUndoRedo({
      unitID: var_core_value_sig52F7,
      undoMutations: var_core_value_sig4CDF,
      redoMutations: var_core_value_sigBCA9
    }), true) : false;
  }
};
var Me = "@univerjs-pro/slides-chart",
  Ne = "1.0.0-insiders.20260907-70fc579";
const Pe = {};
let Q = class extends var_core_value_sig0281 {
  constructor(var_core_value_sig21B2, var_core_value_sigDE08, var_core_value_sigACCB) {
    super(), this._resourceManagerService = var_core_value_sig21B2, this._resourceService = var_core_value_sigDE08, this._modelService = var_core_value_sigACCB, q(this, "_resourceDisposable", null), this._initResource();
  }
  _initResource() {
    this._resourceDisposable = this._resourceManagerService["registerPluginResource"]({
      pluginName: "SLIDE_CHART_PLUGIN",
      businesses: [var_core_value_sig870F.UNIVER_SLIDE],
      toJson: var_core_value_sig76BA => this._resourceService["serializeUnit"](var_core_value_sig76BA),
      parseJson: var_core_value_sigFBFA => JSON.parse(var_core_value_sigFBFA),
      onLoad: (var_core_value_sigF602, var_core_value_sig1BBD) => {
        this._resourceService["loadUnit"](var_core_value_sigF602, var_core_value_sig1BBD);
      },
      onUnLoad: var_core_value_sigF704 => {
        this._modelService["removeUnit"](var_core_value_sigF704), this._resourceService["unloadUnit"](var_core_value_sigF704);
      }
    }), this.disposeWithMe(this._resourceDisposable);
  }
};
Q = Y([J(0, var_core_value_sig3C92), J(1, var_core_value_sigE722(L)), J(2, var_core_value_sigE722(X))], Q);
let $ = class extends var_core_value_sig050A {
  constructor(var_core_value_sig7F33 = Pe, var_core_value_sig0C53, var_core_value_sigEA04, var_core_value_sig7A62) {
    super(), this._config = var_core_value_sig7F33, this._injector = var_core_value_sig0C53, this._configService = var_core_value_sigEA04, this._commandService = var_core_value_sig7A62;
    let {
      ...var_core_value_sig8109
    } = var_core_value_sigEEDB({}, Pe, this._config);
    this._configService["setConfig"]("slides-chart.config", var_core_value_sig8109), this._initCommands();
  }
  onStarting() {
    let var_core_value_sig7565 = this._injector;
    [[L], [X], [Q]].forEach(var_core_value_sig2BCF => var_core_value_sig7565.add(var_core_value_sig2BCF)), var_core_value_sigF7EF(var_core_value_sig7565, [[L], [X], [Q]]);
  }
  _initCommands() {
    [Z, V, je, G, W, xe, U, z, R, B, H].forEach(var_core_value_sig0D69 => {
      this.disposeWithMe(this._commandService["registerCommand"](var_core_value_sig0D69));
    });
  }
};
q($, "type", var_core_value_sig870F.UNIVER_SLIDE), q($, "pluginName", "UniverSlidesChartPlugin"), q($, "packageName", Me), q($, "version", Ne), $ = Y([var_core_value_sigBE5E(var_core_value_sig7BE0, var_core_value_sigC928), J(1, var_core_value_sigE722(var_core_value_sig062A)), J(2, var_core_value_sig281C), J(3, var_core_value_sigED71)], $);
export { V as ChangeSlideChartDataSourceCommand, Te as DEFAULT_SLIDE_CHART_ELEMENT_HEIGHT, Se as DEFAULT_SLIDE_CHART_ELEMENT_LEFT, Ce as DEFAULT_SLIDE_CHART_ELEMENT_TOP, we as DEFAULT_SLIDE_CHART_ELEMENT_WIDTH, De as DEFAULT_SLIDE_CHART_STROKE, Ee as DEFAULT_SLIDE_CHART_VALUES, xe as DuplicateSlideChartDataSourceCommand, Z as InsertSlideChartCommand, U as RemoveSlideChartCommand, R as RemoveSlideChartDataSourceMutation, H as RemoveSlideChartSnapshotMutation, z as SetSlideChartDataSourceMutation, B as SetSlideChartSnapshotMutation, ve as SlideChartConfigAdapter, X as SlideChartModelService, L as SlideChartResourceService, $ as UniverSlidesChartPlugin, W as UpdateSlideChartConfigCommand, G as UpdateSlideChartDataSourceCommand, je as UpdateSlideChartSnapshotCommand };
