import { ChartDataSourceRuntimeStatus as var_core_value_sig5A75, ChartResourceRepository as var_core_value_sig7BAF, ChartResourceRuntimeService as var_core_value_sig8F69, DEFAULT_CHART_RESOURCE_HEADER_ROW as var_core_value_sig6884, IChartDataSourceRuntimeService as var_core_value_sig066E, ResourceRefChartDataSourceAdapter as var_core_value_sig9B0D, UniverChartPlugin as var_core_value_sig3D2C, buildChartDataSetFromValues as var_core_value_sigC56D, buildChartPreviewData as var_core_value_sig3A17, buildOrientedChartDataSet as var_core_value_sig938F, chartConfigInterpreter as var_core_value_sigD948, describeChartModel as var_core_value_sigBE5E, isInlineChartDataSource as var_core_value_sig0281, isReferencedChartDataSource as var_core_value_sigED71, toChartCreateConfigSnapshot as var_core_value_sig281C, toChartModelConfigReplacement as var_core_value_sig3C92, toChartModelUpdate as var_core_value_sigB16B } from "@univerjs-pro/engine-chart";
import { BooleanNumber as var_core_value_sig585D, CommandType as var_core_value_sigE722, DependentOn as var_core_value_sig062A, Disposable as var_core_value_sig050A, DrawingTypeEnum as var_core_value_sig8B32, ICommandService as var_core_value_sig870F, IConfigService as var_core_value_sigB683, IResourceManagerService as var_core_value_sig26EC, IUndoRedoService as var_core_value_sigEEDB, IUniverInstanceService as var_core_value_sig36E7, Inject as var_core_value_sig6A78, Injector as var_core_value_sigF7EF, JSONX as var_core_value_sig27F9, ObjectRelativeFromH as var_core_value_sig393E, ObjectRelativeFromV as var_core_value_sigB609, Plugin as var_core_value_sig390D, PositionedObjectLayoutType as var_core_value_sigC928, Tools as var_core_value_sig39B7, UniverInstanceType as var_core_value_sig18E0, WrapTextType as var_core_value_sigE161, generateRandomId as var_core_value_sigBDEE, getDrawingOrderIndex as var_core_value_sig1F40, merge as var_core_value_sig3FC7, normalizeDrawingOrderIndex as var_core_value_sig1E1B, sequenceExecute as var_core_value_sig3B10, touchDependencies as var_core_value_sig89E6 } from "@univerjs/core";
import { IDocDrawingAdapterService as var_core_value_sig4743, IDocDrawingService as var_core_value_sigEB6A, InsertDocDrawingCommand as var_core_value_sig3D46, SetDocDrawingArrangeCommand as var_core_value_sigCC93, UniverDocsDrawingPlugin as var_core_value_sig5964 } from "@univerjs/docs-drawing";
import { filter as var_core_value_sig808B, firstValueFrom as var_core_value_sig2A26 } from "rxjs";
import { RichTextEditingMutation as var_core_value_sig1179, buildDocTransform as var_core_value_sigEA92, normalizeTextRange as var_core_value_sig8FD9 } from "@univerjs/docs";
import { UniverLicensePlugin as var_core_value_sig1AE5 } from "@univerjs-pro/license";
const M = {
    id: "doc.mutation.remove-doc-chart-data-source",
    type: var_core_value_sigE722.MUTATION,
    handler: (var_core_value_sig3E71, var_core_value_sig01B3) => var_core_value_sig3E71.get(var_core_value_sig7BAF).removeDataSource(var_core_value_sig01B3.unitId, var_core_value_sig01B3.dataSourceId)
  },
  N = {
    id: "doc.mutation.set-doc-chart-data-source",
    type: var_core_value_sigE722.MUTATION,
    handler: (var_core_value_sig7442, var_core_value_sigDF87) => (var_core_value_sig7442.get(var_core_value_sig7BAF).setDataSource(var_core_value_sigDF87.unitId, var_core_value_sigDF87.dataSource), true)
  },
  P = {
    id: "doc.mutation.set-doc-chart-snapshot",
    type: var_core_value_sigE722.MUTATION,
    handler: (var_core_value_sig9EE0, var_core_value_sigF051) => (var_core_value_sig9EE0.get(var_core_value_sig7BAF).setChart(var_core_value_sigF051.unitId, var_core_value_sigF051.chart), true)
  },
  F = {
    id: "doc.command.change-chart-data-source",
    type: var_core_value_sigE722.COMMAND,
    handler: (var_core_value_sig0B45, var_core_value_sig36F8) => {
      if (!var_core_value_sig36F8) return false;
      let var_core_value_sig03E1 = var_core_value_sig0B45.get(var_core_value_sig7BAF),
        var_core_value_sigBB57 = var_core_value_sig03E1.getChart(var_core_value_sig36F8.unitId, var_core_value_sig36F8.chartId),
        var_core_value_sig7C4A = var_core_value_sigBB57 ? var_core_value_sig03E1.getDataSource(var_core_value_sig36F8.unitId, var_core_value_sigBB57.dataSourceId) : undefined;
      if (!var_core_value_sigBB57 || !var_core_value_sig7C4A) return false;
      let var_core_value_sigE799 = var_core_value_sig03E1.isDataSourceShared(var_core_value_sig36F8.unitId, var_core_value_sig7C4A.id),
        var_core_value_sigB601 = var_core_value_sigE799 ? var_core_value_sig36F8.duplicateDataSourceId ?? var_core_value_sigBDEE() : var_core_value_sig7C4A.id,
        var_core_value_sig8B71 = Se(var_core_value_sigB601, var_core_value_sig36F8.dataSource, var_core_value_sig36F8.name ?? var_core_value_sig7C4A.name),
        var_core_value_sigAEFB = var_core_value_sig0B45.get(var_core_value_sig870F),
        var_core_value_sig826B = {
          id: N.id,
          params: {
            unitId: var_core_value_sig36F8.unitId,
            dataSource: var_core_value_sig8B71
          }
        },
        var_core_value_sigCF89 = [var_core_value_sig826B],
        var_core_value_sig00CB = [{
          id: N.id,
          params: {
            unitId: var_core_value_sig36F8.unitId,
            dataSource: var_core_value_sig7C4A
          }
        }];
      if (!var_core_value_sigAEFB.syncExecuteCommand(var_core_value_sig826B.id, var_core_value_sig826B.params)) return false;
      if (var_core_value_sigE799) {
        let var_core_value_sig480E = {
            id: P.id,
            params: {
              unitId: var_core_value_sig36F8.unitId,
              chart: {
                ...var_core_value_sigBB57,
                dataSourceId: var_core_value_sigB601
              }
            }
          },
          var_core_value_sig26DB = {
            id: M.id,
            params: {
              unitId: var_core_value_sig36F8.unitId,
              dataSourceId: var_core_value_sigB601
            }
          };
        if (!var_core_value_sigAEFB.syncExecuteCommand(var_core_value_sig480E.id, var_core_value_sig480E.params)) return var_core_value_sigAEFB.syncExecuteCommand(var_core_value_sig26DB.id, var_core_value_sig26DB.params), false;
        var_core_value_sigCF89.push(var_core_value_sig480E), var_core_value_sig00CB.splice(0, 1, {
          id: P.id,
          params: {
            unitId: var_core_value_sig36F8.unitId,
            chart: var_core_value_sigBB57
          }
        }, var_core_value_sig26DB);
      }
      let var_core_value_sig77EE = var_core_value_sig0B45.get(var_core_value_sigEEDB),
        var_core_value_sig9F76 = var_core_value_sig77EE.__tempBatchingUndoRedo(var_core_value_sig36F8.unitId);
      return var_core_value_sig77EE.pushUndoRedo({
        unitID: var_core_value_sig36F8.unitId,
        undoMutations: var_core_value_sig00CB,
        redoMutations: var_core_value_sigCF89
      }), var_core_value_sig9F76.dispose(), true;
    }
  };
function Se(var_core_value_sigB008, var_core_value_sig8721, var_core_value_sig08BA) {
  let var_core_value_sigDBB5 = var_core_value_sig0281(var_core_value_sig8721) ? {
    id: var_core_value_sigB008,
    name: var_core_value_sig08BA,
    values: var_core_value_sig8721.values
  } : {
    id: var_core_value_sigB008,
    name: var_core_value_sig08BA,
    source: var_core_value_sig8721.source
  };
  return var_core_value_sigDBB5.name ?? delete var_core_value_sigDBB5.name, var_core_value_sigDBB5;
}
const I = {
    id: "doc.mutation.remove-doc-chart-snapshot",
    type: var_core_value_sigE722.MUTATION,
    handler: (var_core_value_sigCFAC, var_core_value_sig237B) => var_core_value_sigCFAC.get(var_core_value_sig7BAF).removeChart(var_core_value_sig237B.unitId, var_core_value_sig237B.chartId, {
      cleanupDataSource: var_core_value_sig237B.cleanupDataSource
    }) != null
  },
  L = {
    id: "doc.command.remove-doc-chart",
    type: var_core_value_sigE722.COMMAND,
    handler: (var_core_value_sigFEAB, var_core_value_sigE347) => {
      var var_core_value_sig3C5B;
      if (!var_core_value_sigE347) return false;
      let {
          unitId: var_core_value_sig200B,
          drawingId: var_core_value_sig3863
        } = var_core_value_sigE347,
        var_core_value_sigC97C = var_core_value_sig200B,
        var_core_value_sigC4B1 = var_core_value_sigFEAB.get(var_core_value_sig36E7).getUnit(var_core_value_sig200B, var_core_value_sig18E0.UNIVER_DOC),
        var_core_value_sig1BD9 = var_core_value_sigC4B1 == null || (var_core_value_sig3C5B = var_core_value_sigC4B1.getDrawings()) == null ? undefined : var_core_value_sig3C5B[var_core_value_sig3863];
      if (!Ce(var_core_value_sig1BD9) || var_core_value_sigE347.chartId && var_core_value_sig1BD9.chartId !== var_core_value_sigE347.chartId) return false;
      let var_core_value_sigE43E = var_core_value_sigFEAB.get(var_core_value_sig7BAF),
        var_core_value_sigA937 = var_core_value_sigE43E.getChart(var_core_value_sig200B, var_core_value_sig1BD9.chartId);
      if (!var_core_value_sigA937) return false;
      let var_core_value_sigCAD5 = var_core_value_sigFEAB.get(var_core_value_sig870F);
      return var_core_value_sigCAD5.syncExecuteCommand("doc.command.remove-doc-image", {
        unitId: var_core_value_sig200B,
        drawings: [{
          unitId: var_core_value_sig200B,
          subUnitId: var_core_value_sigC97C,
          drawingId: var_core_value_sig3863,
          drawingType: var_core_value_sig8B32.DRAWING_CHART
        }]
      }) ? !var_core_value_sigE43E.getChart(var_core_value_sig200B, var_core_value_sigA937.id) || var_core_value_sig3B10([{
        id: I.id,
        params: {
          unitId: var_core_value_sig200B,
          chartId: var_core_value_sigA937.id,
          cleanupDataSource: var_core_value_sigE43E.getDataSourceSharingCount(var_core_value_sig200B, var_core_value_sigA937.dataSourceId) <= 1
        }
      }], var_core_value_sigCAD5).result : false;
    }
  };
function Ce(var_core_value_sigE503) {
  return (var_core_value_sigE503 == null ? undefined : var_core_value_sigE503.drawingType) === var_core_value_sig8B32.DRAWING_CHART && "chartId" in var_core_value_sigE503 && typeof var_core_value_sigE503.chartId == "string";
}
const R = Symbol("ReplaceDocChartConfig"),
  z = {
    id: "doc.command.update-doc-chart-config",
    type: var_core_value_sigE722.COMMAND,
    handler: (var_core_value_sig48DD, var_core_value_sig5E6A) => {
      if (!var_core_value_sig5E6A) return false;
      let {
          unitId: var_core_value_sigB7FC,
          chartId: var_core_value_sig9CD9
        } = var_core_value_sig5E6A,
        var_core_value_sigFD0C = var_core_value_sig5E6A[R] === true,
        var_core_value_sig849B = var_core_value_sig48DD.get(var_core_value_sig7BAF).getChart(var_core_value_sigB7FC, var_core_value_sig9CD9);
      if (!var_core_value_sig849B) return false;
      let var_core_value_sig5F1A = var_core_value_sig48DD.get(var_core_value_sig870F),
        var_core_value_sigB455 = var_core_value_sig48DD.get(var_core_value_sigEEDB),
        var_core_value_sig5241 = var_core_value_sigD948.apply(var_core_value_sig849B, var_core_value_sig5E6A, var_core_value_sigFD0C);
      if (!var_core_value_sig5241) return false;
      let var_core_value_sigC6E5 = {
          unitId: var_core_value_sigB7FC,
          chart: var_core_value_sig5241
        },
        var_core_value_sigCEFB = {
          unitId: var_core_value_sigB7FC,
          chart: var_core_value_sig849B
        },
        var_core_value_sig1537 = [{
          id: P.id,
          params: var_core_value_sigC6E5
        }],
        var_core_value_sigE4C6 = [{
          id: P.id,
          params: var_core_value_sigCEFB
        }];
      return var_core_value_sig3B10(var_core_value_sig1537, var_core_value_sig5F1A).result ? (var_core_value_sigB455.pushUndoRedo({
        unitID: var_core_value_sigB7FC,
        undoMutations: var_core_value_sigE4C6,
        redoMutations: var_core_value_sig1537
      }), true) : false;
    }
  };
function B(var_core_value_sig4313, var_core_value_sigFC87) {
  return function (var_core_value_sigF0F9, var_core_value_sig1A0F) {
    var_core_value_sigFC87(var_core_value_sigF0F9, var_core_value_sig1A0F, var_core_value_sig4313);
  };
}
function V(var_core_value_sig156F, var_core_value_sigDD51, var_core_value_sigF057, var_core_value_sig72F6) {
  var var_core_value_sig9FBA = arguments.length,
    var_core_value_sigFE01 = var_core_value_sig9FBA < 3 ? var_core_value_sigDD51 : var_core_value_sig72F6 === null ? var_core_value_sig72F6 = Object.getOwnPropertyDescriptor(var_core_value_sigDD51, var_core_value_sigF057) : var_core_value_sig72F6,
    var_core_value_sigA2CE;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sigFE01 = Reflect.decorate(var_core_value_sig156F, var_core_value_sigDD51, var_core_value_sigF057, var_core_value_sig72F6);else {
    for (var var_core_value_sig1975 = var_core_value_sig156F.length - 1; var_core_value_sig1975 >= 0; var_core_value_sig1975--) (var_core_value_sigA2CE = var_core_value_sig156F[var_core_value_sig1975]) && (var_core_value_sigFE01 = (var_core_value_sig9FBA < 3 ? var_core_value_sigA2CE(var_core_value_sigFE01) : var_core_value_sig9FBA > 3 ? var_core_value_sigA2CE(var_core_value_sigDD51, var_core_value_sigF057, var_core_value_sigFE01) : var_core_value_sigA2CE(var_core_value_sigDD51, var_core_value_sigF057)) || var_core_value_sigFE01);
  }
  return var_core_value_sig9FBA > 3 && var_core_value_sigFE01 && Object.defineProperty(var_core_value_sigDD51, var_core_value_sigF057, var_core_value_sigFE01), var_core_value_sigFE01;
}
let H = class extends var_core_value_sig8F69 {
  constructor(var_core_value_sigFBA4, var_core_value_sig4383, var_core_value_sig186C) {
    super(var_core_value_sigFBA4, var_core_value_sig4383, var_core_value_sigC56D, var_core_value_sig186C);
  }
};
H = V([B(0, var_core_value_sig6A78(var_core_value_sig7BAF)), B(1, var_core_value_sig6A78(var_core_value_sigF7EF)), B(2, var_core_value_sig6A78(var_core_value_sig066E))], H);
const U = {
    id: "doc.command.duplicate-doc-chart-data-source",
    type: var_core_value_sigE722.COMMAND,
    handler: (var_core_value_sig6EA1, var_core_value_sig029F) => {
      if (!var_core_value_sig029F) return false;
      let {
          unitId: var_core_value_sig3767,
          chartId: var_core_value_sig670B,
          duplicateDataSourceId: var_core_value_sig6912
        } = var_core_value_sig029F,
        var_core_value_sigE235 = var_core_value_sig6EA1.get(var_core_value_sig7BAF),
        var_core_value_sig7664 = var_core_value_sigE235.getChart(var_core_value_sig3767, var_core_value_sig670B),
        var_core_value_sig2281 = var_core_value_sig7664 ? var_core_value_sigE235.getDataSource(var_core_value_sig3767, var_core_value_sig7664.dataSourceId) : undefined;
      if (!var_core_value_sig7664 || !var_core_value_sig2281) return false;
      let var_core_value_sig5E86 = {
          ...var_core_value_sig2281,
          id: var_core_value_sig6912 ?? var_core_value_sigBDEE()
        },
        var_core_value_sig6998 = var_core_value_sig6EA1.get(var_core_value_sig870F),
        var_core_value_sigF639 = var_core_value_sig6EA1.get(var_core_value_sigEEDB),
        var_core_value_sigEAE5 = {
          unitId: var_core_value_sig3767,
          dataSource: var_core_value_sig5E86
        },
        var_core_value_sigE94C = {
          unitId: var_core_value_sig3767,
          dataSourceId: var_core_value_sig5E86.id
        },
        var_core_value_sig6D47 = {
          unitId: var_core_value_sig3767,
          chart: {
            ...var_core_value_sig7664,
            dataSourceId: var_core_value_sig5E86.id
          }
        },
        var_core_value_sigCB82 = {
          unitId: var_core_value_sig3767,
          chart: var_core_value_sig7664
        },
        var_core_value_sigCF4E = [{
          id: N.id,
          params: var_core_value_sigEAE5
        }, {
          id: P.id,
          params: var_core_value_sig6D47
        }],
        var_core_value_sig6CAD = [{
          id: P.id,
          params: var_core_value_sigCB82
        }, {
          id: M.id,
          params: var_core_value_sigE94C
        }];
      return var_core_value_sig3B10(var_core_value_sigCF4E, var_core_value_sig6998).result ? (var_core_value_sigF639.pushUndoRedo({
        unitID: var_core_value_sig3767,
        undoMutations: var_core_value_sig6CAD,
        redoMutations: var_core_value_sigCF4E
      }), true) : false;
    }
  },
  W = {
    id: "doc.command.update-doc-chart-data-source",
    type: var_core_value_sigE722.COMMAND,
    handler: (var_core_value_sig8CF5, var_core_value_sigDDD7) => {
      if (!var_core_value_sigDDD7) return false;
      let {
        unitId: var_core_value_sigB2CE,
        dataSourceId: var_core_value_sig443C,
        values: var_core_value_sig39B1,
        name: var_core_value_sig210D
      } = var_core_value_sigDDD7;
      if (var_core_value_sig39B1.length === 0) return false;
      let var_core_value_sigB4B4 = var_core_value_sig8CF5.get(var_core_value_sig7BAF).getDataSource(var_core_value_sigB2CE, var_core_value_sig443C);
      if (!var_core_value_sigB4B4) return false;
      let var_core_value_sigD407 = var_core_value_sig8CF5.get(var_core_value_sig870F),
        var_core_value_sig63F3 = var_core_value_sig8CF5.get(var_core_value_sigEEDB),
        var_core_value_sig6A71 = {
          unitId: var_core_value_sigB2CE,
          dataSource: {
            id: var_core_value_sig443C,
            values: var_core_value_sig39B1,
            name: var_core_value_sig210D ?? var_core_value_sigB4B4.name
          }
        },
        var_core_value_sig3BF6 = {
          unitId: var_core_value_sigB2CE,
          dataSource: var_core_value_sigB4B4
        },
        var_core_value_sig38CE = [{
          id: N.id,
          params: var_core_value_sig6A71
        }],
        var_core_value_sig62B7 = [{
          id: N.id,
          params: var_core_value_sig3BF6
        }];
      return var_core_value_sig3B10(var_core_value_sig38CE, var_core_value_sigD407).result ? (var_core_value_sig63F3.pushUndoRedo({
        unitID: var_core_value_sigB2CE,
        undoMutations: var_core_value_sig62B7,
        redoMutations: var_core_value_sig38CE
      }), true) : false;
    }
  },
  we = 480,
  Te = 320,
  Ee = [["Category", "Value"], ["Series 1", 1]];
function G(var_core_value_sig37A8) {
  return Number.isFinite(var_core_value_sig37A8) && var_core_value_sig37A8 > 0;
}
function K(var_core_value_sigA90D) {
  return var_core_value_sigA90D === undefined || G(var_core_value_sigA90D);
}
function q(var_core_value_sig7A3C) {
  if (!K(var_core_value_sig7A3C)) throw Error("Document chart width and height must be positive finite numbers.");
}
const J = {
  id: "doc.command.update-doc-chart-drawing",
  type: var_core_value_sigE722.COMMAND,
  handler: (var_core_value_sig0511, var_core_value_sig1F44) => {
    var var_core_value_sigCB04;
    if (!var_core_value_sig1F44 || !var_core_value_sig1F44.unitId || !var_core_value_sig1F44.drawingId || !Ae(var_core_value_sig1F44.layout)) return false;
    let var_core_value_sig947E = var_core_value_sig0511.get(var_core_value_sig36E7).getUnit(var_core_value_sig1F44.unitId, var_core_value_sig18E0.UNIVER_DOC),
      var_core_value_sig4545 = var_core_value_sig947E == null || (var_core_value_sigCB04 = var_core_value_sig947E.getDrawings()) == null ? undefined : var_core_value_sigCB04[var_core_value_sig1F44.drawingId];
    if (!ke(var_core_value_sig4545) || var_core_value_sig1F44.chartId && var_core_value_sig4545.chartId !== var_core_value_sig1F44.chartId) return false;
    let var_core_value_sigF39A = De(var_core_value_sig4545, var_core_value_sig1F44.layout),
      var_core_value_sigF79C = var_core_value_sig27F9.getInstance().replaceOp(["drawings", var_core_value_sig1F44.drawingId], var_core_value_sig4545, var_core_value_sigF39A);
    return var_core_value_sigF79C ? !!var_core_value_sig0511.get(var_core_value_sig870F).syncExecuteCommand(var_core_value_sig1179.id, {
      unitId: var_core_value_sig1F44.unitId,
      actions: var_core_value_sigF79C,
      textRanges: null,
      noNeedSetTextRange: true
    }) : false;
  }
};
function De(var_core_value_sig2E54, var_core_value_sig7658) {
  let var_core_value_sigDCF5 = var_core_value_sig7658.width !== undefined || var_core_value_sig7658.height !== undefined || var_core_value_sig7658.position !== undefined;
  return {
    ...var_core_value_sig2E54,
    ...(var_core_value_sig7658.layoutType === undefined ? {} : {
      layoutType: var_core_value_sig7658.layoutType
    }),
    ...(var_core_value_sigDCF5 ? {
      docTransform: Oe(var_core_value_sig2E54.docTransform, var_core_value_sig7658)
    } : {})
  };
}
function Oe(var_core_value_sigC786, var_core_value_sigC0D9) {
  if (var_core_value_sigC0D9.width === undefined && var_core_value_sigC0D9.height === undefined && var_core_value_sigC0D9.position === undefined) return var_core_value_sigC786 ?? var_core_value_sigEA92(480, 320);
  let var_core_value_sigF0511 = var_core_value_sigC0D9.width ?? (var_core_value_sigC786 == null ? undefined : var_core_value_sigC786.size["width"]) ?? 480,
    var_core_value_sig5825 = var_core_value_sigC0D9.height ?? (var_core_value_sigC786 == null ? undefined : var_core_value_sigC786.size["height"]) ?? 320,
    var_core_value_sig4EB7 = var_core_value_sigC0D9.position;
  return {
    ...(var_core_value_sigC786 ?? var_core_value_sigEA92(var_core_value_sigF0511, var_core_value_sig5825)),
    size: {
      width: var_core_value_sigF0511,
      height: var_core_value_sig5825
    },
    ...(var_core_value_sig4EB7 === undefined ? {} : {
      positionH: {
        relativeFrom: var_core_value_sig393E.PAGE,
        posOffset: var_core_value_sig4EB7.x
      },
      positionV: {
        relativeFrom: var_core_value_sigB609.PARAGRAPH,
        posOffset: var_core_value_sig4EB7.y
      }
    })
  };
}
function ke(var_core_value_sig73AF) {
  return (var_core_value_sig73AF == null ? undefined : var_core_value_sig73AF.drawingType) === var_core_value_sig8B32.DRAWING_CHART && "chartId" in var_core_value_sig73AF && typeof var_core_value_sig73AF.chartId == "string";
}
function Ae(var_core_value_sig548A) {
  return !!var_core_value_sig548A && K(var_core_value_sig548A.width) && K(var_core_value_sig548A.height) && (var_core_value_sig548A.position === undefined || Number.isFinite(var_core_value_sig548A.position["x"]) && Number.isFinite(var_core_value_sig548A.position["y"]));
}
let je = function (var_core_value_sigE026) {
  return var_core_value_sigE026.DuplicateIfShared = "duplicateIfShared", var_core_value_sigE026.UpdateShared = "updateShared", var_core_value_sigE026.RejectIfShared = "rejectIfShared", var_core_value_sigE026;
}({});
function Me(var_core_value_sig339E) {
  let var_core_value_sig7550 = var_core_value_sig339E.map(var_core_value_sigD955 => [...var_core_value_sigD955]),
    var_core_value_sig2983 = var_core_value_sig7550.length;
  for (; var_core_value_sig2983 > 0 && var_core_value_sig7550[var_core_value_sig2983 - 1].every(var_core_value_sigBC46 => var_core_value_sigBC46 == null || var_core_value_sigBC46 === "");) var_core_value_sig2983--;
  let var_core_value_sigE1B0 = var_core_value_sig7550.slice(0, var_core_value_sig2983),
    var_core_value_sigD4FF = Math.max(0, ...var_core_value_sigE1B0.map(var_core_value_sig48BD => var_core_value_sig48BD.length));
  for (; var_core_value_sigD4FF > 0 && var_core_value_sigE1B0.every(var_core_value_sig3D7D => var_core_value_sig3D7D[var_core_value_sigD4FF - 1] == null || var_core_value_sig3D7D[var_core_value_sigD4FF - 1] === "");) var_core_value_sigD4FF--;
  return var_core_value_sigE1B0.map(var_core_value_sig429F => var_core_value_sig429F.slice(0, var_core_value_sigD4FF)).filter(var_core_value_sigF62A => var_core_value_sigF62A.length > 0);
}
function Ne(var_core_value_sig1E5B, var_core_value_sigB680, var_core_value_sig1F64) {
  let var_core_value_sigDD1C = Me(var_core_value_sigB680);
  if (var_core_value_sigDD1C.length === 0) throw Error("Document\x20chart\x20values\x20are\x20required.");
  let {
      chartId: var_core_value_sig2C39,
      injector: var_core_value_sigB7D1,
      unitId: var_core_value_sig64F0
    } = var_core_value_sig1E5B,
    var_core_value_sig85B1 = var_core_value_sigB7D1.get(var_core_value_sig870F),
    var_core_value_sig3141 = var_core_value_sigB7D1.get(var_core_value_sig7BAF),
    var_core_value_sig2162 = var_core_value_sig3141.getChart(var_core_value_sig64F0, var_core_value_sig2C39);
  if (!var_core_value_sig2162) throw Error('Document chart "' + var_core_value_sig2C39 + '" was not found.');
  let var_core_value_sig2EAD = (var_core_value_sig1F64 == null ? undefined : var_core_value_sig1F64.mode) ?? "duplicateIfShared";
  if (var_core_value_sig3141.getChartIdsByDataSource(var_core_value_sig64F0, var_core_value_sig2162.dataSourceId).length > 1) {
    if (var_core_value_sig2EAD === "rejectIfShared") throw Error("Document\x20chart\x20data\x20source\x20\x22" + var_core_value_sig2162.dataSourceId + "\x22\x20is\x20shared.");
    if (var_core_value_sig2EAD === "duplicateIfShared") {
      if (!var_core_value_sig85B1.syncExecuteCommand(U.id, {
        unitId: var_core_value_sig64F0,
        chartId: var_core_value_sig2C39
      })) throw Error("Failed\x20to\x20duplicate\x20data\x20source\x20for\x20document\x20chart\x20\x22" + var_core_value_sig2C39 + "\x22.");
      var_core_value_sig2162 = var_core_value_sig3141.getChart(var_core_value_sig64F0, var_core_value_sig2C39);
    }
  }
  if (!var_core_value_sig2162 || !var_core_value_sig85B1.syncExecuteCommand(W.id, {
    unitId: var_core_value_sig64F0,
    dataSourceId: var_core_value_sig2162.dataSourceId,
    values: var_core_value_sigDD1C
  })) throw Error('Failed to update document chart data source for "' + var_core_value_sig2C39 + "\x22.");
}
function Pe(var_core_value_sig6774, var_core_value_sig340D) {
  q(var_core_value_sig340D.width), q(var_core_value_sig340D.height);
  let {
    chartId: var_core_value_sig82D4,
    drawingId: var_core_value_sigBDE4,
    injector: var_core_value_sig7DF1,
    unitId: var_core_value_sigDC86
  } = var_core_value_sig6774;
  if (!var_core_value_sig7DF1.get(var_core_value_sig870F).syncExecuteCommand(J.id, {
    unitId: var_core_value_sigDC86,
    drawingId: var_core_value_sigBDE4,
    chartId: var_core_value_sig82D4,
    layout: var_core_value_sig340D
  })) throw Error('Failed to update document chart layout "' + var_core_value_sig82D4 + "\x22.");
}
var Fe = class {
  constructor(var_core_value_sig8178) {
    this._context = var_core_value_sig8178;
  }
  describe(var_core_value_sigE9ED = {}, var_core_value_sigB577) {
    var var_core_value_sig9572, var_core_value_sigD873, var_core_value_sigA12B;
    let {
        chartId: var_core_value_sigF230,
        documentDataModel: var_core_value_sig09B8,
        drawingId: var_core_value_sig6F91,
        injector: var_core_value_sigF9C7,
        unitId: var_core_value_sig8895
      } = this._context,
      var_core_value_sigC80B = var_core_value_sigF9C7.get(H).ensureChartModel(var_core_value_sig8895, var_core_value_sigF230);
    if (!var_core_value_sigC80B) throw Error("Document chart not found: " + var_core_value_sigF230);
    let var_core_value_sig284F = (var_core_value_sig9572 = var_core_value_sig09B8.getDrawings()) == null ? undefined : var_core_value_sig9572[var_core_value_sig6F91],
      var_core_value_sigE154 = var_core_value_sig284F != null && var_core_value_sig284F.docTransform ? {
        width: (var_core_value_sigD873 = var_core_value_sig284F.docTransform["size"]) == null ? undefined : var_core_value_sigD873.width,
        height: (var_core_value_sigA12B = var_core_value_sig284F.docTransform["size"]) == null ? undefined : var_core_value_sigA12B.height,
        layoutType: var_core_value_sig284F.layoutType
      } : undefined;
    return {
      ...var_core_value_sigBE5E(var_core_value_sigC80B.model, var_core_value_sigE9ED, var_core_value_sigB577),
      layout: var_core_value_sigE154
    };
  }
  getInfo() {
    var var_core_value_sig4632, var_core_value_sig12F2;
    let var_core_value_sig2259 = this.describe(),
      var_core_value_sig9E2F = this.getDataSource();
    if (!var_core_value_sig9E2F) throw Error("Document chart data source not found: " + this._context["chartId"]);
    return {
      config: var_core_value_sig281C(var_core_value_sig2259),
      dataSource: var_core_value_sig0281(var_core_value_sig9E2F) ? {
        values: var_core_value_sig39B7.deepClone(var_core_value_sig9E2F.values)
      } : var_core_value_sigED71(var_core_value_sig9E2F) ? {
        source: var_core_value_sig39B7.deepClone(var_core_value_sig9E2F.source)
      } : (() => {
        throw Error("Invalid\x20Document\x20chart\x20data\x20source:\x20" + this._context["chartId"]);
      })(),
      position: var_core_value_sig39B7.deepClone((var_core_value_sig4632 = var_core_value_sig2259.layout) == null ? undefined : var_core_value_sig4632.position),
      size: var_core_value_sig2259.layout ? {
        width: var_core_value_sig2259.layout["width"] ?? 0,
        height: var_core_value_sig2259.layout["height"] ?? 0
      } : undefined,
      layoutType: (var_core_value_sig12F2 = var_core_value_sig2259.layout) == null ? undefined : var_core_value_sig12F2.layoutType
    };
  }
  getData() {
    let {
        chartId: var_core_value_sigD082,
        injector: var_core_value_sigDBB7,
        unitId: var_core_value_sigD0A8
      } = this._context,
      var_core_value_sigF4B9 = var_core_value_sigDBB7.get(var_core_value_sig7BAF).getChart(var_core_value_sigD0A8, var_core_value_sigD082),
      var_core_value_sig5CEE = var_core_value_sigF4B9 ? var_core_value_sigDBB7.get(var_core_value_sig7BAF).getDataSource(var_core_value_sigD0A8, var_core_value_sigF4B9.dataSourceId) : null;
    return var_core_value_sig0281(var_core_value_sig5CEE) ? var_core_value_sig5CEE.values : null;
  }
  getDataSource() {
    let {
        chartId: var_core_value_sigE92A,
        injector: var_core_value_sig362B,
        unitId: var_core_value_sig5CA5
      } = this._context,
      var_core_value_sigE90F = var_core_value_sig362B.get(var_core_value_sig7BAF).getChart(var_core_value_sig5CA5, var_core_value_sigE92A);
    return (var_core_value_sigE90F ? var_core_value_sig362B.get(var_core_value_sig7BAF).getDataSource(var_core_value_sig5CA5, var_core_value_sigE90F.dataSourceId) : null) ?? null;
  }
  async commitDataSource(var_core_value_sigEFD4) {
    let {
        injector: var_core_value_sig861B
      } = this._context,
      var_core_value_sig5237 = var_core_value_sigED71(var_core_value_sigEFD4) ? var_core_value_sigEFD4.source : undefined,
      var_core_value_sigBB00 = var_core_value_sig5237 ? var_core_value_sig861B.get(var_core_value_sig066E).acquire(var_core_value_sig5237) : null;
    try {
      if (var_core_value_sigBB00) {
        let var_core_value_sig2AD0 = await var_core_value_sig2A26(var_core_value_sigBB00.state$["pipe"](var_core_value_sig808B(({
          status: var_core_value_sig7524
        }) => var_core_value_sig7524 !== var_core_value_sig5A75.LOADING)));
        if (var_core_value_sig2AD0.status !== var_core_value_sig5A75.READY) throw var_core_value_sig2AD0.error instanceof Error ? var_core_value_sig2AD0.error : Error(var_core_value_sig5237 == null ? undefined : var_core_value_sig5237.kind);
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
      var_core_value_sig86D0 = var_core_value_sigED71(var_core_value_sig7E54) ? var_core_value_sig7E54.source : undefined,
      var_core_value_sig4CD2 = var_core_value_sig86D0 ? var_core_value_sigFDEA.get(var_core_value_sig066E).acquire(var_core_value_sig86D0) : null;
    try {
      if (var_core_value_sig4CD2) {
        let var_core_value_sig3EEE = await var_core_value_sig2A26(var_core_value_sig4CD2.state$["pipe"](var_core_value_sig808B(({
          status: var_core_value_sig2AD8
        }) => var_core_value_sig2AD8 !== var_core_value_sig5A75.LOADING)));
        if (var_core_value_sig3EEE.status !== var_core_value_sig5A75.READY) throw var_core_value_sig3EEE.error instanceof Error ? var_core_value_sig3EEE.error : Error(var_core_value_sig86D0 == null ? undefined : var_core_value_sig86D0.kind);
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
    return var_core_value_sig50AF.get(H).refreshChartDataSource(var_core_value_sigA942, var_core_value_sig48CA);
  }
  commit(var_core_value_sigA621) {
    var var_core_value_sigBBFF;
    let {
        chartId: var_core_value_sig8889,
        injector: var_core_value_sig32F8,
        unitId: var_core_value_sig5B67
      } = this._context,
      var_core_value_sig1758 = var_core_value_sig32F8.get(H).ensureChartModel(var_core_value_sig5B67, var_core_value_sig8889);
    if (!var_core_value_sig1758) throw Error("Document\x20chart\x20not\x20found:\x20" + var_core_value_sig8889);
    let var_core_value_sig4805 = var_core_value_sigB16B(var_core_value_sigA621, {
      series: (var_core_value_sigBBFF = var_core_value_sig1758.model["config"]) == null ? undefined : var_core_value_sigBBFF.series,
      currentChartType: var_core_value_sig1758.model["chartType"],
      currentStyle: var_core_value_sig1758.model["style"],
      currentContext: var_core_value_sig1758.model["context"],
      currentDataAggregation: var_core_value_sig1758.model["dataAggregation"]
    });
    if (!var_core_value_sig32F8.get(var_core_value_sig870F).syncExecuteCommand(z.id, {
      unitId: var_core_value_sig5B67,
      chartId: var_core_value_sig8889,
      ...var_core_value_sig4805,
      [R]: true
    })) throw Error("Failed\x20to\x20update\x20Document\x20chart\x20configuration.");
  }
  update(var_core_value_sigE67E) {
    let var_core_value_sig2902 = {};
    var_core_value_sigE67E.position !== undefined && (var_core_value_sig2902.position = var_core_value_sigE67E.position), var_core_value_sigE67E.size !== undefined && (var_core_value_sig2902.width = var_core_value_sigE67E.size["width"], var_core_value_sig2902.height = var_core_value_sigE67E.size["height"]), Object.prototype["hasOwnProperty"].call(var_core_value_sigE67E, "layoutType") && (var_core_value_sig2902.layoutType = var_core_value_sigE67E.layoutType);
    let var_core_value_sig9989 = {};
    return var_core_value_sigE67E.anchor !== undefined && (var_core_value_sig9989.anchor = var_core_value_sigE67E.anchor), Object.keys(var_core_value_sig2902).length > 0 && (var_core_value_sig9989.layout = var_core_value_sig2902), this.commitChanges(var_core_value_sigE67E.dataSource, var_core_value_sigE67E.config, var_core_value_sig9989, true);
  }
  _replaceConfig(var_core_value_sig698E) {
    var var_core_value_sig2809;
    let {
        chartId: var_core_value_sig2DAB,
        injector: var_core_value_sig877E,
        unitId: var_core_value_sig20C8
      } = this._context,
      var_core_value_sigE9A7 = var_core_value_sig877E.get(H).ensureChartModel(var_core_value_sig20C8, var_core_value_sig2DAB);
    if (!var_core_value_sigE9A7) throw Error("Document chart not found: " + var_core_value_sig2DAB);
    let var_core_value_sigBECE = var_core_value_sig3C92(var_core_value_sig698E, {
      series: (var_core_value_sig2809 = var_core_value_sigE9A7.model["config"]) == null ? undefined : var_core_value_sig2809.series,
      currentStyle: var_core_value_sigE9A7.model["style"]
    });
    if (!var_core_value_sig877E.get(var_core_value_sig870F).syncExecuteCommand(z.id, {
      unitId: var_core_value_sig20C8,
      chartId: var_core_value_sig2DAB,
      ...var_core_value_sigBECE,
      [R]: true
    })) throw Error("Failed to update Document chart configuration.");
  }
  setDataSource(var_core_value_sig1B22) {
    return this.commitDataSource(Array.isArray(var_core_value_sig1B22) ? {
      values: var_core_value_sig1B22
    } : {
      source: var_core_value_sig9B0D.toReference(var_core_value_sig1B22)
    });
  }
  setAbsolutePosition(var_core_value_sig7F72, var_core_value_sig7B2A) {
    this.commitHost({
      layout: {
        position: {
          x: var_core_value_sig7F72,
          y: var_core_value_sig7B2A
        }
      }
    });
  }
  setSize(var_core_value_sig06CD, var_core_value_sigA5F1) {
    this.commitHost({
      layout: {
        width: var_core_value_sig06CD,
        height: var_core_value_sigA5F1
      }
    });
  }
  arrange(var_core_value_sig97A2) {
    let {
        documentDataModel: var_core_value_sig07E9,
        drawingId: var_core_value_sig4F59,
        injector: var_core_value_sigF564,
        unitId: var_core_value_sig8CFA
      } = this._context,
      var_core_value_sig2E11 = var_core_value_sig07E9.getDrawingsOrder() ?? [],
      var_core_value_sig5B69 = var_core_value_sig2E11.indexOf(var_core_value_sig4F59);
    if (var_core_value_sig5B69 < 0) throw Error("Document\x20chart\x20drawing\x20not\x20found:\x20" + var_core_value_sig4F59);
    if (var_core_value_sig1F40(var_core_value_sig5B69, var_core_value_sig2E11.length, var_core_value_sig97A2) !== var_core_value_sig5B69 && !var_core_value_sigF564.get(var_core_value_sig870F).syncExecuteCommand(var_core_value_sigCC93.id, {
      unitId: var_core_value_sig8CFA,
      subUnitId: var_core_value_sig8CFA,
      drawingIds: [var_core_value_sig4F59],
      arrangeType: var_core_value_sig97A2
    })) throw Error("Failed to arrange Document chart.");
  }
  setZOrder(var_core_value_sigB098) {
    let {
        documentDataModel: var_core_value_sigCE71,
        drawingId: var_core_value_sig21D8,
        injector: var_core_value_sig2B65,
        unitId: var_core_value_sigD7EA
      } = this._context,
      var_core_value_sigB33B = var_core_value_sigCE71.getDrawingsOrder() ?? [],
      var_core_value_sig24B9 = var_core_value_sigB33B.indexOf(var_core_value_sig21D8);
    if (var_core_value_sig24B9 < 0) throw Error("Document chart drawing not found: " + var_core_value_sig21D8);
    if (var_core_value_sig1E1B(var_core_value_sigB098, var_core_value_sigB33B.length) !== var_core_value_sig24B9 && !var_core_value_sig2B65.get(var_core_value_sig870F).syncExecuteCommand(var_core_value_sigCC93.id, {
      unitId: var_core_value_sigD7EA,
      subUnitId: var_core_value_sigD7EA,
      drawingIds: [var_core_value_sig21D8],
      zOrder: var_core_value_sigB098
    })) throw Error("Failed to update Document chart z-order.");
  }
  resolveData(var_core_value_sigE627, var_core_value_sigEF3E) {
    let {
        chartId: var_core_value_sig273D,
        injector: var_core_value_sig9A0D,
        unitId: var_core_value_sigA319
      } = this._context,
      var_core_value_sig2D58 = var_core_value_sig9A0D.get(H).ensureChartModel(var_core_value_sigA319, var_core_value_sig273D);
    if (!var_core_value_sig2D58) throw Error("Document chart not found: " + var_core_value_sig273D);
    return var_core_value_sig3A17(var_core_value_sig2D58.model, var_core_value_sigE627, var_core_value_sigEF3E);
  }
  resolveDataSet(var_core_value_sig223F) {
    var var_core_value_sigD749, var_core_value_sigCFFA;
    let {
        chartId: var_core_value_sig58C1,
        injector: var_core_value_sig5090,
        unitId: var_core_value_sigC368
      } = this._context,
      var_core_value_sigAD56 = var_core_value_sig5090.get(H).ensureChartModel(var_core_value_sigC368, var_core_value_sig58C1),
      var_core_value_sigDB4A = var_core_value_sig5090.get(var_core_value_sig7BAF).getChart(var_core_value_sigC368, var_core_value_sig58C1);
    if (!var_core_value_sigAD56 || !var_core_value_sigDB4A) throw Error("Document chart not found: " + var_core_value_sig58C1);
    return var_core_value_sig938F(var_core_value_sig223F, {
      headerRow: ((var_core_value_sigD749 = var_core_value_sigDB4A.context) == null ? undefined : var_core_value_sigD749.headerRow) ?? var_core_value_sig6884,
      isRowDirection: ((var_core_value_sigCFFA = var_core_value_sigDB4A.context) == null ? undefined : var_core_value_sigCFFA.orient) !== "column"
    });
  }
  commitHost(var_core_value_sig6418) {
    let {
      chartId: var_core_value_sig1896,
      drawingId: var_core_value_sig0285,
      injector: var_core_value_sig777D,
      unitId: var_core_value_sig3F4C
    } = this._context;
    if (var_core_value_sig6418.anchor !== undefined) throw Error("Document chart anchor can only be set before insert().");
    var_core_value_sig6418.data !== undefined && Ne({
      unitId: var_core_value_sig3F4C,
      chartId: var_core_value_sig1896,
      injector: var_core_value_sig777D
    }, var_core_value_sig6418.data), var_core_value_sig6418.layout !== undefined && Pe({
      unitId: var_core_value_sig3F4C,
      chartId: var_core_value_sig1896,
      drawingId: var_core_value_sig0285,
      injector: var_core_value_sig777D
    }, var_core_value_sig6418.layout);
  }
  remove() {
    let {
      chartId: var_core_value_sigD65A,
      drawingId: var_core_value_sig5A13,
      injector: var_core_value_sigF593,
      unitId: var_core_value_sig3607
    } = this._context;
    return !!var_core_value_sigF593.get(var_core_value_sig870F).syncExecuteCommand(L.id, {
      unitId: var_core_value_sig3607,
      drawingId: var_core_value_sig5A13,
      chartId: var_core_value_sigD65A
    });
  }
  _commitDataSource(var_core_value_sigB512) {
    let {
      chartId: var_core_value_sigF2E6,
      injector: var_core_value_sig34C8,
      unitId: var_core_value_sigB744
    } = this._context;
    if (!var_core_value_sig34C8.get(var_core_value_sig870F).syncExecuteCommand(F.id, {
      unitId: var_core_value_sigB744,
      chartId: var_core_value_sigF2E6,
      dataSource: var_core_value_sigB512
    })) throw Error(F.id);
  }
};
let Ie = function (var_core_value_sig0B0C) {
    return var_core_value_sig0B0C.Selection = "selection", var_core_value_sig0B0C.BodyOffset = "bodyOffset", var_core_value_sig0B0C.Paragraph = "paragraph", var_core_value_sig0B0C.TextRange = "textRange", var_core_value_sig0B0C;
  }({}),
  Le = function (var_core_value_sigA39E) {
    return var_core_value_sigA39E.Before = "before", var_core_value_sigA39E.After = "after", var_core_value_sigA39E;
  }({});
const Re = {},
  ze = {
    id: "doc.command.insert-doc-chart",
    type: var_core_value_sigE722.COMMAND,
    handler: (var_core_value_sigBBEE, var_core_value_sig011D) => {
      var var_core_value_sig6167, var_core_value_sig65A1, var_core_value_sig7F19, var_core_value_sig7827, var_core_value_sig652C, var_core_value_sig7E32;
      if (!var_core_value_sig011D || !var_core_value_sig011D.unitId) return false;
      let var_core_value_sig4C07 = var_core_value_sig39B7.deepClone(var_core_value_sig011D.chart);
      if (!var_core_value_sig4C07.chartType || ((var_core_value_sig6167 = var_core_value_sig011D.textRange) == null ? undefined : var_core_value_sig6167.segmentId) != null && var_core_value_sig011D.textRange["segmentId"] !== "" || !K(var_core_value_sig011D.width) || !K(var_core_value_sig011D.height) || var_core_value_sig011D.position && (!Number.isFinite(var_core_value_sig011D.position["x"]) || !Number.isFinite(var_core_value_sig011D.position["y"]))) return false;
      var_core_value_sig4C07.id = var_core_value_sig4C07.id ?? var_core_value_sigBDEE(6), var_core_value_sig4C07.context = {
        ...var_core_value_sig4C07.context,
        headerRow: ((var_core_value_sig65A1 = var_core_value_sig4C07.context) == null ? undefined : var_core_value_sig65A1.headerRow) ?? var_core_value_sig6884
      };
      let var_core_value_sig79AB = Be(var_core_value_sig011D.dataSource);
      var_core_value_sig4C07.dataSourceId = var_core_value_sig79AB.id;
      let var_core_value_sig8E74 = (var_core_value_sig7F19 = var_core_value_sigBBEE.get(var_core_value_sigB683).getConfig("docs-chart.config")) == null ? undefined : var_core_value_sig7F19.defaultChartSize,
        var_core_value_sig104C = (var_core_value_sig7827 = var_core_value_sig011D.drawing) == null ? undefined : var_core_value_sig7827.docTransform,
        var_core_value_sig841D = var_core_value_sig011D.width ?? (var_core_value_sig104C == null ? undefined : var_core_value_sig104C.size["width"]) ?? (var_core_value_sig8E74 == null ? undefined : var_core_value_sig8E74.width) ?? 480,
        var_core_value_sig90CB = var_core_value_sig011D.height ?? (var_core_value_sig104C == null ? undefined : var_core_value_sig104C.size["height"]) ?? (var_core_value_sig8E74 == null ? undefined : var_core_value_sig8E74.height) ?? 320,
        var_core_value_sigBDF5 = {
          ...(var_core_value_sig104C ?? var_core_value_sigEA92(var_core_value_sig841D, var_core_value_sig90CB)),
          size: {
            width: var_core_value_sig841D,
            height: var_core_value_sig90CB
          },
          ...(var_core_value_sig011D.position === undefined ? {} : {
            positionH: {
              relativeFrom: var_core_value_sig393E.PAGE,
              posOffset: var_core_value_sig011D.position["x"]
            },
            positionV: {
              relativeFrom: var_core_value_sigB609.PARAGRAPH,
              posOffset: var_core_value_sig011D.position["y"]
            }
          })
        },
        var_core_value_sigACC6 = Ve({
          unitId: var_core_value_sig011D.unitId,
          chartId: var_core_value_sig4C07.id,
          drawing: var_core_value_sig011D.drawing,
          docTransform: var_core_value_sigBDF5
        });
      if (!G(((var_core_value_sig652C = var_core_value_sigACC6.docTransform) == null ? undefined : var_core_value_sig652C.size["width"]) ?? NaN) || !G(((var_core_value_sig7E32 = var_core_value_sigACC6.docTransform) == null ? undefined : var_core_value_sig7E32.size["height"]) ?? NaN)) return false;
      let var_core_value_sig1614 = {
          unitId: var_core_value_sig011D.unitId,
          dataSource: var_core_value_sig79AB
        },
        var_core_value_sig85C3 = {
          unitId: var_core_value_sig011D.unitId,
          chart: var_core_value_sig4C07
        },
        var_core_value_sigB996 = {
          unitId: var_core_value_sig011D.unitId,
          chartId: var_core_value_sig4C07.id
        },
        var_core_value_sig4BBA = {
          unitId: var_core_value_sig011D.unitId,
          dataSourceId: var_core_value_sig79AB.id
        },
        var_core_value_sig6201 = [{
          id: N.id,
          params: var_core_value_sig1614
        }, {
          id: P.id,
          params: var_core_value_sig85C3
        }],
        var_core_value_sig5151 = [{
          id: I.id,
          params: var_core_value_sigB996
        }, {
          id: M.id,
          params: var_core_value_sig4BBA
        }],
        var_core_value_sigB542 = var_core_value_sigBBEE.get(var_core_value_sig870F),
        var_core_value_sigBB6C = var_core_value_sigBBEE.get(var_core_value_sigEEDB),
        var_core_value_sigE2BF = var_core_value_sig3B10(var_core_value_sig6201, var_core_value_sigB542);
      if (!var_core_value_sigE2BF.result) return var_core_value_sig3B10(var_core_value_sig5151.slice(var_core_value_sig5151.length - var_core_value_sigE2BF.index), var_core_value_sigB542), false;
      let var_core_value_sigB8C7 = "doc-chart-insert-resource:" + var_core_value_sig011D.unitId + ":" + var_core_value_sig4C07.id,
        var_core_value_sigA56E = var_core_value_sigBB6C.__tempBatchingUndoRedo(var_core_value_sig011D.unitId);
      var_core_value_sigBB6C.pushUndoRedo({
        unitID: var_core_value_sig011D.unitId,
        redoMutations: var_core_value_sig6201,
        undoMutations: var_core_value_sig5151,
        id: var_core_value_sigB8C7
      });
      let var_core_value_sig1998 = {
        unitId: var_core_value_sig011D.unitId,
        drawings: [var_core_value_sigACC6]
      };
      if (var_core_value_sig011D.textRange != null && (var_core_value_sig1998.textRange = var_core_value_sig8FD9(var_core_value_sig011D.textRange)), !var_core_value_sigB542.syncExecuteCommand(var_core_value_sig3D46.id, var_core_value_sig1998)) return var_core_value_sigA56E.dispose(), var_core_value_sigBB6C.rollback(var_core_value_sigB8C7, var_core_value_sig011D.unitId), false;
      if (var_core_value_sig011D.focus !== false) try {
        var_core_value_sigBBEE.get(var_core_value_sigEB6A).focusDrawing([{
          unitId: var_core_value_sig011D.unitId,
          subUnitId: var_core_value_sig011D.unitId,
          drawingId: var_core_value_sigACC6.drawingId
        }]);
      } catch {}
      return var_core_value_sigA56E.dispose(), {
        chartId: var_core_value_sig4C07.id,
        dataSourceId: var_core_value_sig79AB.id,
        drawingId: var_core_value_sigACC6.drawingId
      };
    }
  };
function Be(var_core_value_sigFF19) {
  let var_core_value_sig43B8 = (var_core_value_sigFF19 == null ? undefined : var_core_value_sigFF19.id) ?? var_core_value_sigBDEE(6),
    var_core_value_sigD98F = var_core_value_sigFF19 == null ? undefined : var_core_value_sigFF19.name,
    var_core_value_sig66C0 = var_core_value_sigFF19 != null && var_core_value_sigFF19.source ? {
      id: var_core_value_sig43B8,
      name: var_core_value_sigD98F,
      source: var_core_value_sigFF19.source
    } : {
      id: var_core_value_sig43B8,
      name: var_core_value_sigD98F,
      values: He((var_core_value_sigFF19 == null ? undefined : var_core_value_sigFF19.values) ?? Ee)
    };
  return var_core_value_sig66C0.name ?? delete var_core_value_sig66C0.name, var_core_value_sig66C0;
}
function Ve(var_core_value_sig9D15) {
  let {
    unitId: var_core_value_sigB785,
    chartId: var_core_value_sig130F,
    drawing: var_core_value_sigC0E3,
    docTransform: var_core_value_sig52F7
  } = var_core_value_sig9D15;
  return {
    ...var_core_value_sigC0E3,
    unitId: var_core_value_sigB785,
    subUnitId: var_core_value_sigB785,
    drawingId: (var_core_value_sigC0E3 == null ? undefined : var_core_value_sigC0E3.drawingId) ?? var_core_value_sigBDEE(6),
    drawingType: var_core_value_sig8B32.DRAWING_CHART,
    chartId: var_core_value_sig130F,
    docTransform: var_core_value_sig52F7,
    behindDoc: (var_core_value_sigC0E3 == null ? undefined : var_core_value_sigC0E3.behindDoc) ?? var_core_value_sig585D.FALSE,
    title: (var_core_value_sigC0E3 == null ? undefined : var_core_value_sigC0E3.title) ?? "",
    description: (var_core_value_sigC0E3 == null ? undefined : var_core_value_sigC0E3.description) ?? "",
    layoutType: (var_core_value_sigC0E3 == null ? undefined : var_core_value_sigC0E3.layoutType) ?? var_core_value_sigC928.INLINE,
    wrapText: (var_core_value_sigC0E3 == null ? undefined : var_core_value_sigC0E3.wrapText) ?? var_core_value_sigE161.BOTH_SIDES,
    distB: (var_core_value_sigC0E3 == null ? undefined : var_core_value_sigC0E3.distB) ?? 0,
    distL: (var_core_value_sigC0E3 == null ? undefined : var_core_value_sigC0E3.distL) ?? 0,
    distR: (var_core_value_sigC0E3 == null ? undefined : var_core_value_sigC0E3.distR) ?? 0,
    distT: (var_core_value_sigC0E3 == null ? undefined : var_core_value_sigC0E3.distT) ?? 0,
    allowTransform: (var_core_value_sigC0E3 == null ? undefined : var_core_value_sigC0E3.allowTransform) ?? true
  };
}
function He(var_core_value_sig866F) {
  return var_core_value_sig866F.map(var_core_value_sigEAE2 => [...var_core_value_sigEAE2]);
}
const Ue = {
  id: "doc.command.update-doc-chart-snapshot",
  type: var_core_value_sigE722.COMMAND,
  handler: (var_core_value_sigDE3D, var_core_value_sigF175) => {
    if (!var_core_value_sigF175) return false;
    let {
        unitId: var_core_value_sig6A18,
        chartId: var_core_value_sig4E3D,
        patch: var_core_value_sig49B0
      } = var_core_value_sigF175,
      var_core_value_sig2547 = var_core_value_sigDE3D.get(var_core_value_sig7BAF).getChart(var_core_value_sig6A18, var_core_value_sig4E3D);
    if (!var_core_value_sig2547) return false;
    let var_core_value_sigBCA9 = var_core_value_sigDE3D.get(var_core_value_sig870F),
      var_core_value_sig4CDF = var_core_value_sigDE3D.get(var_core_value_sigEEDB),
      var_core_value_sig3F79 = {
        unitId: var_core_value_sig6A18,
        chart: {
          ...var_core_value_sig2547,
          ...var_core_value_sig49B0
        }
      },
      var_core_value_sig880E = {
        unitId: var_core_value_sig6A18,
        chart: var_core_value_sig2547
      },
      var_core_value_sigC9ED = [{
        id: P.id,
        params: var_core_value_sig3F79
      }],
      var_core_value_sigB57B = [{
        id: P.id,
        params: var_core_value_sig880E
      }];
    return var_core_value_sig3B10(var_core_value_sigC9ED, var_core_value_sigBCA9).result ? (var_core_value_sig4CDF.pushUndoRedo({
      unitID: var_core_value_sig6A18,
      undoMutations: var_core_value_sigB57B,
      redoMutations: var_core_value_sigC9ED
    }), true) : false;
  }
};
var We = "@univerjs-pro/docs-chart",
  Ge = "1.0.0-insiders.20260907-70fc579";
function Y(var_core_value_sig780B) {
  "@babel/helpers - typeof";

  return Y = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sigE68A) {
    return typeof var_core_value_sigE68A;
  } : function (var_core_value_sig3E68) {
    return var_core_value_sig3E68 && typeof Symbol == "function" && var_core_value_sig3E68.constructor === Symbol && var_core_value_sig3E68 !== Symbol.prototype ? "symbol" : typeof var_core_value_sig3E68;
  }, Y(var_core_value_sig780B);
}
function Ke(var_core_value_sig7D1B, var_core_value_sig7BE0) {
  if (Y(var_core_value_sig7D1B) != "object" || !var_core_value_sig7D1B) return var_core_value_sig7D1B;
  var var_core_value_sig7D40 = var_core_value_sig7D1B[Symbol.toPrimitive];
  if (var_core_value_sig7D40 !== undefined) {
    var var_core_value_sig6C7E = var_core_value_sig7D40.call(var_core_value_sig7D1B, var_core_value_sig7BE0 || "default");
    if (Y(var_core_value_sig6C7E) != "object") return var_core_value_sig6C7E;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sig7BE0 === "string" ? String : Number)(var_core_value_sig7D1B);
}
function qe(var_core_value_sig68BE) {
  var var_core_value_sig04C6 = Ke(var_core_value_sig68BE, "string");
  return Y(var_core_value_sig04C6) == "symbol" ? var_core_value_sig04C6 : var_core_value_sig04C6 + "";
}
function X(var_core_value_sigCA05, var_core_value_sig2F2B, var_core_value_sig70AF) {
  return (var_core_value_sig2F2B = qe(var_core_value_sig2F2B)) in var_core_value_sigCA05 ? Object.defineProperty(var_core_value_sigCA05, var_core_value_sig2F2B, {
    value: var_core_value_sig70AF,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sigCA05[var_core_value_sig2F2B] = var_core_value_sig70AF, var_core_value_sigCA05;
}
let Z = class extends var_core_value_sig050A {
  constructor(var_core_value_sigF4C5, var_core_value_sig5410, var_core_value_sig492F) {
    super(), this._resourceManagerService = var_core_value_sigF4C5, this._resourceService = var_core_value_sig5410, this._modelService = var_core_value_sig492F, X(this, "_resourceDisposable", null), this._initResource();
  }
  _initResource() {
    this._resourceDisposable = this._resourceManagerService["registerPluginResource"]({
      pluginName: "DOC_CHART_PLUGIN",
      businesses: [var_core_value_sig18E0.UNIVER_DOC],
      toJson: var_core_value_sig27E5 => this._resourceService["serializeUnit"](var_core_value_sig27E5),
      parseJson: var_core_value_sig8061 => JSON.parse(var_core_value_sig8061),
      onLoad: (var_core_value_sig4D4C, var_core_value_sigC9E0) => {
        this._resourceService["loadUnit"](var_core_value_sig4D4C, var_core_value_sigC9E0);
      },
      onUnLoad: var_core_value_sig76BA => {
        this._modelService["removeUnit"](var_core_value_sig76BA), this._resourceService["unloadUnit"](var_core_value_sig76BA);
      }
    }), this.disposeWithMe(this._resourceDisposable);
  }
};
Z = V([B(0, var_core_value_sig26EC), B(1, var_core_value_sig6A78(var_core_value_sig7BAF)), B(2, var_core_value_sig6A78(H))], Z);
let Q = class {
  constructor(var_core_value_sig8EA0) {
    this._resourceService = var_core_value_sig8EA0;
  }
  getRemoveDrawingMutationInfos(var_core_value_sigA6F6) {
    let var_core_value_sigCDDA = Je(var_core_value_sigA6F6.drawing);
    if (!var_core_value_sigCDDA) return null;
    let var_core_value_sigE243 = this._resourceService["getChart"](var_core_value_sigA6F6.unitId, var_core_value_sigCDDA.chartId);
    if (!var_core_value_sigE243) return null;
    let var_core_value_sig74A8 = this._resourceService["getDataSource"](var_core_value_sigA6F6.unitId, var_core_value_sigE243.dataSourceId),
      var_core_value_sig21B2 = this._shouldCleanupDataSource(var_core_value_sigA6F6, var_core_value_sigE243.dataSourceId);
    return {
      redoMutations: [{
        id: I.id,
        params: {
          unitId: var_core_value_sigA6F6.unitId,
          chartId: var_core_value_sigE243.id,
          cleanupDataSource: var_core_value_sig21B2
        }
      }],
      undoMutations: [...(var_core_value_sig21B2 && var_core_value_sig74A8 ? [{
        id: N.id,
        params: {
          unitId: var_core_value_sigA6F6.unitId,
          dataSource: var_core_value_sig74A8
        }
      }] : []), {
        id: P.id,
        params: {
          unitId: var_core_value_sigA6F6.unitId,
          chart: var_core_value_sigE243
        }
      }]
    };
  }
  _shouldCleanupDataSource(var_core_value_sigDE08, var_core_value_sigACCB) {
    let var_core_value_sig7F33 = new Set(var_core_value_sigDE08.removeDrawings["map"](var_core_value_sigFBFA => {
      var var_core_value_sigF602;
      return (var_core_value_sigF602 = Je(var_core_value_sigFBFA)) == null ? undefined : var_core_value_sigF602.chartId;
    }).filter(var_core_value_sig1BBD => var_core_value_sig1BBD != null));
    return this._resourceService["getChartIdsByDataSource"](var_core_value_sigDE08.unitId, var_core_value_sigACCB).filter(var_core_value_sigF704 => !var_core_value_sig7F33.has(var_core_value_sigF704)).length === 0;
  }
};
Q = V([B(0, var_core_value_sig6A78(var_core_value_sig7BAF))], Q);
function Je(var_core_value_sigD04E) {
  let var_core_value_sigB99B = var_core_value_sigD04E;
  return var_core_value_sigB99B.drawingType === var_core_value_sig8B32.DRAWING_CHART && typeof var_core_value_sigB99B.chartId == "string" ? var_core_value_sigB99B : null;
}
let $ = class extends var_core_value_sig390D {
  constructor(var_core_value_sig0C53 = Re, var_core_value_sigEA04, var_core_value_sig7A62, var_core_value_sig8109) {
    super(), this._config = var_core_value_sig0C53, this._injector = var_core_value_sigEA04, this._configService = var_core_value_sig7A62, this._commandService = var_core_value_sig8109;
    let {
      ...var_core_value_sig7565
    } = var_core_value_sig3FC7({}, Re, this._config);
    this._configService["setConfig"]("docs-chart.config", var_core_value_sig7565), this._initCommands();
  }
  onStarting() {
    let var_core_value_sigD4FB = this._injector;
    [[var_core_value_sig7BAF], [H], [Q], [Z]].forEach(var_core_value_sig2BCF => var_core_value_sigD4FB.add(var_core_value_sig2BCF)), this.disposeWithMe(var_core_value_sigD4FB.get(var_core_value_sig4743).registerAdapter(var_core_value_sigD4FB.get(Q))), var_core_value_sig89E6(var_core_value_sigD4FB, [[var_core_value_sig7BAF], [H], [Q], [Z]]);
  }
  _initCommands() {
    [ze, F, Ue, W, z, J, U, L, N, M, P, I].forEach(var_core_value_sig0D69 => {
      this.disposeWithMe(this._commandService["registerCommand"](var_core_value_sig0D69));
    });
  }
};
X($, "type", var_core_value_sig18E0.UNIVER_DOC), X($, "pluginName", "UniverDocsChartPlugin"), X($, "packageName", We), X($, "version", Ge), $ = V([var_core_value_sig062A(var_core_value_sig3D2C, var_core_value_sig1AE5, var_core_value_sig5964), B(1, var_core_value_sig6A78(var_core_value_sigF7EF)), B(2, var_core_value_sigB683), B(3, var_core_value_sig870F)], $);
export { F as ChangeDocChartDataSourceCommand, Te as DEFAULT_DOC_CHART_ELEMENT_HEIGHT, we as DEFAULT_DOC_CHART_ELEMENT_WIDTH, Ee as DEFAULT_DOC_CHART_VALUES, je as DocChartDataEditMode, Q as DocChartDrawingAdapter, Ie as DocChartInsertAnchorKind, H as DocChartModelService, Le as DocChartParagraphPosition, Fe as DocumentChartConfigAdapter, U as DuplicateDocChartDataSourceCommand, ze as InsertDocChartCommand, L as RemoveDocChartCommand, M as RemoveDocChartDataSourceMutation, I as RemoveDocChartSnapshotMutation, N as SetDocChartDataSourceMutation, P as SetDocChartSnapshotMutation, $ as UniverDocsChartPlugin, z as UpdateDocChartConfigCommand, W as UpdateDocChartDataSourceCommand, J as UpdateDocChartDrawingCommand, Ue as UpdateDocChartSnapshotCommand, q as assertValidOptionalDocChartSize, Me as normalizeDocumentChartValues, Ne as updateDocumentChartData, Pe as updateDocumentChartLayout };
