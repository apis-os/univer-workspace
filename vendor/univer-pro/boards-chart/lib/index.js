import { AddBoardElementMutation as var_core_value_sig4C07, BoardElementType as var_core_value_sig79AB, IBoardChartAdapterService as var_core_value_sig8E74, IBoardElementService as var_core_value_sig104C, RemoveBoardElementCommand as var_core_value_sig841D, RemoveBoardElementMutation as var_core_value_sig90CB, ReorderBoardElementsOperation as var_core_value_sigBDF5, UniverBoardsPlugin as var_core_value_sigACC6, UpdateBoardElementCommand as var_core_value_sig1614, UpdateBoardElementMutation as var_core_value_sig85C3, createAddBoardElementsMutationInfos as var_core_value_sigB996 } from "@univerjs-pro/boards";
import { ChartDataSourceRuntimeStatus as var_core_value_sig4BBA, ChartResourceRepository as var_core_value_sig6201, ChartResourceRuntimeService as var_core_value_sig5151, ChartTypeBits as var_core_value_sigB542, DEFAULT_CHART_RESOURCE_HEADER_ROW as var_core_value_sigBB6C, IChartDataSourceRuntimeService as var_core_value_sigE2BF, ResourceRefChartDataSourceAdapter as var_core_value_sigB8C7, UniverChartPlugin as var_core_value_sigA56E, buildChartDataSetFromValues as var_core_value_sig1998, buildChartPreviewData as var_core_value_sigFF19, buildOrientedChartDataSet as var_core_value_sig43B8, chartConfigInterpreter as var_core_value_sigD98F, createChartStarterRows as var_core_value_sig66C0, describeChartModel as var_core_value_sig9D15, isInlineChartDataSource as var_core_value_sigB785, isReferencedChartDataSource as var_core_value_sig130F, omitUndefinedFields as var_core_value_sigC0E3, toChartCreateConfigSnapshot as var_core_value_sig52F7, toChartModelConfigReplacement as var_core_value_sig866F, toChartModelUpdate as var_core_value_sigDE3D } from "@univerjs-pro/engine-chart";
import { ArrangeTypeEnum as var_core_value_sigF175, CommandType as var_core_value_sig6A18, DependentOn as var_core_value_sig4E3D, Disposable as var_core_value_sig49B0, ICommandService as var_core_value_sig2547, IConfigService as var_core_value_sigBCA9, IResourceManagerService as var_core_value_sig4CDF, IUndoRedoService as var_core_value_sig3F79, Inject as var_core_value_sig880E, Injector as var_core_value_sigC9ED, Plugin as var_core_value_sigB57B, Tools as var_core_value_sig780B, UniverInstanceType as var_core_value_sig7D1B, generateRandomId as var_core_value_sig7BE0, getDrawingOrderIndex as var_core_value_sig7D40, merge as var_core_value_sig6C7E, normalizeDrawingOrderIndex as var_core_value_sig68BE, sequenceExecute as var_core_value_sig04C6, touchDependencies as var_core_value_sigCA05 } from "@univerjs/core";
import { filter as var_core_value_sig2F2B, firstValueFrom as var_core_value_sig70AF } from "rxjs";
import { ShapeLineTypeEnum as var_core_value_sigD04E } from "@univerjs-pro/engine-shape";
import { UniverLicensePlugin as var_core_value_sigB99B } from "@univerjs-pro/license";
var N = class extends var_core_value_sig6201 {};
const P = {
    id: "board.mutation.remove-board-chart-data-source",
    type: var_core_value_sig6A18.MUTATION,
    handler: (var_core_value_sig200B, var_core_value_sig3863) => var_core_value_sig3863 ? var_core_value_sig200B.get(N).removeDataSource(var_core_value_sig3863.unitId, var_core_value_sig3863.dataSourceId) : false
  },
  F = {
    id: "board.mutation.remove-board-chart-snapshot",
    type: var_core_value_sig6A18.MUTATION,
    handler: (var_core_value_sigC97C, var_core_value_sigC4B1) => var_core_value_sigC4B1 ? var_core_value_sigC97C.get(N).removeChart(var_core_value_sigC4B1.unitId, var_core_value_sigC4B1.chartId, {
      cleanupDataSource: var_core_value_sigC4B1.cleanupDataSource
    }) != null : false
  },
  I = {
    id: "board.mutation.set-board-chart-data-source",
    type: var_core_value_sig6A18.MUTATION,
    handler: (var_core_value_sig1BD9, var_core_value_sigE43E) => var_core_value_sigE43E ? (var_core_value_sig1BD9.get(N).setDataSource(var_core_value_sigE43E.unitId, var_core_value_sigE43E.dataSource), true) : false
  },
  L = {
    id: "board.mutation.set-board-chart-snapshot",
    type: var_core_value_sig6A18.MUTATION,
    handler: (var_core_value_sigA937, var_core_value_sigCAD5) => var_core_value_sigCAD5 ? (var_core_value_sigA937.get(N).setChart(var_core_value_sigCAD5.unitId, var_core_value_sigCAD5.chart), true) : false
  },
  xe = 480,
  Se = 320,
  R = [["Category", "Value"], ["A", 12], ["B", 18], ["C", 9]],
  Ce = [["Hierarchy 1", "Hierarchy 2", "Value"], ...var_core_value_sig66C0(var_core_value_sigB542.Treemap)],
  we = [["Hierarchy 1", "Hierarchy 2", "Value"], ...var_core_value_sig66C0(var_core_value_sigB542.Sunburst)],
  Te = [["Label", "Value"], ...var_core_value_sig66C0(var_core_value_sigB542.Gauge)],
  Ee = [["Source", "Target", "Value"], ...var_core_value_sig66C0(var_core_value_sigB542.Chord)],
  z = {
    lineStrokeType: var_core_value_sigD04E.SolidLine,
    width: 1,
    color: "#d1d5db",
    opacity: 1
  },
  B = {};
function V(var_core_value_sigE503, var_core_value_sig48DD) {
  return function (var_core_value_sig0D69, var_core_value_sig480E) {
    var_core_value_sig48DD(var_core_value_sig0D69, var_core_value_sig480E, var_core_value_sigE503);
  };
}
function H(var_core_value_sig5E6A, var_core_value_sigB7FC, var_core_value_sig9CD9, var_core_value_sigFD0C) {
  var var_core_value_sig849B = arguments.length,
    var_core_value_sig5F1A = var_core_value_sig849B < 3 ? var_core_value_sigB7FC : var_core_value_sigFD0C === null ? var_core_value_sigFD0C = Object.getOwnPropertyDescriptor(var_core_value_sigB7FC, var_core_value_sig9CD9) : var_core_value_sigFD0C,
    var_core_value_sigB455;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sig5F1A = Reflect.decorate(var_core_value_sig5E6A, var_core_value_sigB7FC, var_core_value_sig9CD9, var_core_value_sigFD0C);else {
    for (var var_core_value_sig5241 = var_core_value_sig5E6A.length - 1; var_core_value_sig5241 >= 0; var_core_value_sig5241--) (var_core_value_sigB455 = var_core_value_sig5E6A[var_core_value_sig5241]) && (var_core_value_sig5F1A = (var_core_value_sig849B < 3 ? var_core_value_sigB455(var_core_value_sig5F1A) : var_core_value_sig849B > 3 ? var_core_value_sigB455(var_core_value_sigB7FC, var_core_value_sig9CD9, var_core_value_sig5F1A) : var_core_value_sigB455(var_core_value_sigB7FC, var_core_value_sig9CD9)) || var_core_value_sig5F1A);
  }
  return var_core_value_sig849B > 3 && var_core_value_sig5F1A && Object.defineProperty(var_core_value_sigB7FC, var_core_value_sig9CD9, var_core_value_sig5F1A), var_core_value_sig5F1A;
}
let U = class {
  constructor(var_core_value_sig26DB, var_core_value_sigF0F9, var_core_value_sig1A0F, var_core_value_sigFBA4, var_core_value_sig4383) {
    this._commandService = var_core_value_sig26DB, this._undoRedoService = var_core_value_sigF0F9, this._resourceService = var_core_value_sig1A0F, this._elementService = var_core_value_sigFBA4, this._configService = var_core_value_sig4383;
  }
  changeChartDataSource(var_core_value_sig186C) {
    let var_core_value_sigD955 = this._resourceService["getChart"](var_core_value_sig186C.unitId, var_core_value_sig186C.chartId),
      var_core_value_sig48BD = var_core_value_sigD955 ? this._resourceService["getDataSource"](var_core_value_sig186C.unitId, var_core_value_sigD955.dataSourceId) : undefined;
    if (!var_core_value_sigD955 || !var_core_value_sig48BD) return false;
    let var_core_value_sig429F = this._resourceService["isDataSourceShared"](var_core_value_sig186C.unitId, var_core_value_sig48BD.id),
      var_core_value_sigF62A = var_core_value_sig429F ? var_core_value_sig186C.duplicateDataSourceId ?? var_core_value_sig7BE0() : var_core_value_sig48BD.id,
      var_core_value_sig8178 = ke(var_core_value_sigF62A, var_core_value_sig186C.dataSource, var_core_value_sig186C.name ?? var_core_value_sig48BD.name),
      var_core_value_sigE9ED = {
        id: I.id,
        params: {
          unitId: var_core_value_sig186C.unitId,
          dataSource: var_core_value_sig8178
        }
      },
      var_core_value_sigB577 = [var_core_value_sigE9ED],
      var_core_value_sig9572 = [{
        id: I.id,
        params: {
          unitId: var_core_value_sig186C.unitId,
          dataSource: var_core_value_sig48BD
        }
      }];
    if (!this._commandService["syncExecuteCommand"](var_core_value_sigE9ED.id, var_core_value_sigE9ED.params)) return false;
    if (var_core_value_sig429F) {
      let var_core_value_sig3D7D = {
          id: L.id,
          params: {
            unitId: var_core_value_sig186C.unitId,
            chart: {
              ...var_core_value_sigD955,
              dataSourceId: var_core_value_sigF62A
            }
          }
        },
        var_core_value_sig27E5 = {
          id: P.id,
          params: {
            unitId: var_core_value_sig186C.unitId,
            dataSourceId: var_core_value_sigF62A
          }
        };
      if (!this._commandService["syncExecuteCommand"](var_core_value_sig3D7D.id, var_core_value_sig3D7D.params)) return this._commandService["syncExecuteCommand"](var_core_value_sig27E5.id, var_core_value_sig27E5.params), false;
      var_core_value_sigB577.push(var_core_value_sig3D7D), var_core_value_sig9572.splice(0, 1, {
        id: L.id,
        params: {
          unitId: var_core_value_sig186C.unitId,
          chart: var_core_value_sigD955
        }
      }, var_core_value_sig27E5);
    }
    return this._undoRedoService["pushUndoRedo"]({
      unitID: var_core_value_sig186C.unitId,
      undoMutations: var_core_value_sig9572,
      redoMutations: var_core_value_sigB577
    }), true;
  }
  getInsertChartMutationInfos(var_core_value_sigD873) {
    var var_core_value_sigA12B;
    if (!Me(var_core_value_sigD873)) return null;
    let var_core_value_sigF230 = De(var_core_value_sigD873, (var_core_value_sigA12B = this._configService["getConfig"]("boards-chart.config")) == null ? undefined : var_core_value_sigA12B.defaultChartSize);
    if (!var_core_value_sigF230) return null;
    let var_core_value_sig09B8 = var_core_value_sigB996({
      unitId: var_core_value_sigD873.unitId,
      subUnitId: var_core_value_sigD873.subUnitId,
      elements: [var_core_value_sigF230.element],
      insertIndex: var_core_value_sigD873.insertIndex,
      elementData: this._elementService["getElementData"](var_core_value_sigD873.unitId, var_core_value_sigD873.subUnitId),
      elementOrder: this._elementService["getElementOrder"](var_core_value_sigD873.unitId, var_core_value_sigD873.subUnitId)
    });
    return var_core_value_sig09B8 ? Oe(var_core_value_sigD873.unitId, var_core_value_sigF230, var_core_value_sig09B8) : null;
  }
  getRemoveChartMutationInfos(var_core_value_sig6F91) {
    let var_core_value_sigF9C7 = this._resourceService["getChart"](var_core_value_sig6F91.unitId, var_core_value_sig6F91.element["chartId"]);
    if (!var_core_value_sigF9C7) return {
      redoMutations: [],
      undoMutations: []
    };
    let var_core_value_sig8895 = this._resourceService["getDataSource"](var_core_value_sig6F91.unitId, var_core_value_sigF9C7.dataSourceId),
      var_core_value_sigC80B = this._resourceService["getDataSourceSharingCount"](var_core_value_sig6F91.unitId, var_core_value_sigF9C7.dataSourceId) <= 1,
      var_core_value_sig284F = [{
        id: F.id,
        params: {
          unitId: var_core_value_sig6F91.unitId,
          chartId: var_core_value_sig6F91.element["chartId"]
        }
      }],
      var_core_value_sigE154 = [{
        id: L.id,
        params: {
          unitId: var_core_value_sig6F91.unitId,
          chart: var_core_value_sigF9C7
        }
      }];
    return var_core_value_sigC80B && var_core_value_sig8895 && (var_core_value_sig284F.push({
      id: P.id,
      params: {
        unitId: var_core_value_sig6F91.unitId,
        dataSourceId: var_core_value_sigF9C7.dataSourceId
      }
    }), var_core_value_sigE154.unshift({
      id: I.id,
      params: {
        unitId: var_core_value_sig6F91.unitId,
        dataSource: var_core_value_sig8895
      }
    })), {
      redoMutations: var_core_value_sig284F,
      undoMutations: var_core_value_sigE154
    };
  }
};
U = H([V(0, var_core_value_sig2547), V(1, var_core_value_sig3F79), V(2, var_core_value_sig880E(N)), V(3, var_core_value_sig104C), V(4, var_core_value_sigBCA9)], U);
function De(var_core_value_sigC6E5, var_core_value_sigCEFB) {
  var var_core_value_sig1537, var_core_value_sigE4C6;
  let var_core_value_sig4313 = Ae(var_core_value_sigC6E5.options),
    var_core_value_sigFC87 = var_core_value_sigC6E5.chartId ?? var_core_value_sig7BE0(6),
    var_core_value_sig156F = var_core_value_sigC6E5.dataSourceId ?? var_core_value_sig7BE0(6),
    var_core_value_sigDD51 = je(var_core_value_sig4313.data, var_core_value_sig4313.chartType);
  if (var_core_value_sigDD51.length === 0) return null;
  let var_core_value_sigF057 = (var_core_value_sig1537 = var_core_value_sig4313.dataSource) != null && var_core_value_sig1537.source ? {
    id: var_core_value_sig156F,
    source: var_core_value_sig4313.dataSource["source"]
  } : {
    id: var_core_value_sig156F,
    name: typeof var_core_value_sig4313.data == "object" && !Array.isArray(var_core_value_sig4313.data) ? var_core_value_sig4313.data["name"] : undefined,
    values: var_core_value_sigDD51
  };
  var_core_value_sigF057.name ?? delete var_core_value_sigF057.name;
  let var_core_value_sig72F6 = {
    id: var_core_value_sigFC87,
    dataSourceId: var_core_value_sig156F,
    chartType: var_core_value_sig4313.chartType ?? var_core_value_sigB542.Column,
    style: var_core_value_sig4313.style,
    context: {
      ...var_core_value_sig4313.context,
      headerRow: ((var_core_value_sigE4C6 = var_core_value_sig4313.context) == null ? undefined : var_core_value_sigE4C6.headerRow) ?? var_core_value_sigBB6C
    },
    state: var_core_value_sig4313.state,
    dataAggregation: var_core_value_sig4313.dataAggregation
  };
  Ne(var_core_value_sig72F6);
  let var_core_value_sig9FBA = W(var_core_value_sigC6E5.width ?? (var_core_value_sigCEFB == null ? undefined : var_core_value_sigCEFB.width), 480),
    var_core_value_sigFE01 = W(var_core_value_sigC6E5.height ?? (var_core_value_sigCEFB == null ? undefined : var_core_value_sigCEFB.height), 320);
  return {
    chart: var_core_value_sig72F6,
    dataSource: var_core_value_sigF057,
    element: {
      id: var_core_value_sigC6E5.elementId ?? var_core_value_sig7BE0(6),
      type: var_core_value_sig79AB.Chart,
      chartId: var_core_value_sigFC87,
      parentId: var_core_value_sigC6E5.parentId,
      laneId: var_core_value_sigC6E5.laneId,
      stroke: z,
      transform: {
        left: var_core_value_sigC6E5.left,
        top: var_core_value_sigC6E5.top,
        width: var_core_value_sig9FBA,
        height: var_core_value_sigFE01,
        rotation: 0
      }
    }
  };
}
function Oe(var_core_value_sigA2CE, var_core_value_sig1975, var_core_value_sig6EA1) {
  let {
      chart: var_core_value_sig029F,
      dataSource: var_core_value_sig3767
    } = var_core_value_sig1975,
    var_core_value_sig670B = {
      id: P.id,
      params: {
        unitId: var_core_value_sigA2CE,
        dataSourceId: var_core_value_sig3767.id
      }
    },
    var_core_value_sig6912 = {
      id: F.id,
      params: {
        unitId: var_core_value_sigA2CE,
        chartId: var_core_value_sig029F.id
      }
    };
  return {
    redoMutations: [{
      id: I.id,
      params: {
        unitId: var_core_value_sigA2CE,
        dataSource: var_core_value_sig3767
      }
    }, {
      id: L.id,
      params: {
        unitId: var_core_value_sigA2CE,
        chart: var_core_value_sig029F
      }
    }, ...var_core_value_sig6EA1.redoMutations],
    undoMutations: [...var_core_value_sig6EA1.undoMutations, var_core_value_sig6912, var_core_value_sig670B],
    rollbackMutationGroups: [[var_core_value_sig670B], [var_core_value_sig6912], ...Pe(var_core_value_sig6EA1.redoMutations, var_core_value_sig6EA1.undoMutations)]
  };
}
function ke(var_core_value_sigE235, var_core_value_sig7664, var_core_value_sig2281) {
  let var_core_value_sig5E86 = var_core_value_sigB785(var_core_value_sig7664) ? {
    id: var_core_value_sigE235,
    name: var_core_value_sig2281,
    values: var_core_value_sig7664.values
  } : {
    id: var_core_value_sigE235,
    name: var_core_value_sig2281,
    source: var_core_value_sig7664.source
  };
  return var_core_value_sig5E86.name ?? delete var_core_value_sig5E86.name, var_core_value_sig5E86;
}
function Ae(var_core_value_sig6998) {
  return var_core_value_sig6998 && typeof var_core_value_sig6998 == "object" ? var_core_value_sig6998 : {};
}
function je(var_core_value_sigF639, var_core_value_sigEAE5) {
  let var_core_value_sigE94C = Array.isArray(var_core_value_sigF639) ? var_core_value_sigF639 : var_core_value_sigF639 == null ? undefined : var_core_value_sigF639.values,
    var_core_value_sig6D47;
  switch (var_core_value_sigEAE5) {
    case var_core_value_sigB542.Treemap:
      var_core_value_sig6D47 = Ce;
      break;
    case var_core_value_sigB542.Sunburst:
      var_core_value_sig6D47 = we;
      break;
    case var_core_value_sigB542.Gauge:
      var_core_value_sig6D47 = Te;
      break;
    case var_core_value_sigB542.Chord:
      var_core_value_sig6D47 = Ee;
      break;
    default:
      var_core_value_sig6D47 = R;
  }
  return (var_core_value_sigE94C ?? var_core_value_sig6D47).map(var_core_value_sig4632 => [...var_core_value_sig4632]);
}
function Me(var_core_value_sigCB82) {
  return !!var_core_value_sigCB82.unitId && !!var_core_value_sigCB82.subUnitId && Number.isFinite(var_core_value_sigCB82.left) && Number.isFinite(var_core_value_sigCB82.top);
}
function W(var_core_value_sigCF4E, var_core_value_sig6CAD) {
  return var_core_value_sigCF4E !== undefined && Number.isFinite(var_core_value_sigCF4E) && var_core_value_sigCF4E > 0 ? var_core_value_sigCF4E : var_core_value_sig6CAD;
}
function Ne(var_core_value_sig8CF5) {
  Object.keys(var_core_value_sig8CF5).forEach(var_core_value_sig12F2 => {
    var_core_value_sig8CF5[var_core_value_sig12F2] === undefined && delete var_core_value_sig8CF5[var_core_value_sig12F2];
  });
}
function Pe(var_core_value_sigDDD7, var_core_value_sigB2CE) {
  let var_core_value_sig443C = [...var_core_value_sigB2CE],
    var_core_value_sig39B1 = var_core_value_sigDDD7.map(() => []);
  for (let var_core_value_sig2259 = var_core_value_sigDDD7.length - 1; var_core_value_sig2259 >= 0; var_core_value_sig2259--) {
    let var_core_value_sig8061 = var_core_value_sigDDD7[var_core_value_sig2259],
      var_core_value_sig4D4C = var_core_value_sig443C.findIndex(var_core_value_sig2AD0 => Fe(var_core_value_sig8061, var_core_value_sig2AD0));
    var_core_value_sig4D4C < 0 || (var_core_value_sig39B1[var_core_value_sig2259] = var_core_value_sig443C.splice(var_core_value_sig4D4C, 1));
  }
  return var_core_value_sig39B1;
}
function Fe(var_core_value_sig210D, var_core_value_sigB4B4) {
  let var_core_value_sigD407 = var_core_value_sig210D.id === var_core_value_sig4C07.id && var_core_value_sigB4B4.id === var_core_value_sig90CB.id,
    var_core_value_sig63F3 = var_core_value_sig210D.id === var_core_value_sig85C3.id && var_core_value_sigB4B4.id === var_core_value_sig85C3.id;
  return (var_core_value_sigD407 || var_core_value_sig63F3) && G(var_core_value_sig210D) === G(var_core_value_sigB4B4);
}
function G(var_core_value_sig6A71) {
  var var_core_value_sig3BF6;
  let var_core_value_sig38CE = var_core_value_sig6A71.params;
  return ((var_core_value_sig3BF6 = var_core_value_sig38CE.element) == null ? undefined : var_core_value_sig3BF6.id) ?? var_core_value_sig38CE.elementId;
}
const K = {
    id: "board.command.change-chart-data-source",
    type: var_core_value_sig6A18.COMMAND,
    handler: (var_core_value_sig62B7, var_core_value_sig37A8) => var_core_value_sig37A8 ? var_core_value_sig62B7.get(U).changeChartDataSource(var_core_value_sig37A8) : false
  },
  Ie = Symbol("ReplaceBoardChartConfig");
function Le(var_core_value_sigA90D) {
  return {
    ...var_core_value_sigA90D,
    [Ie]: true
  };
}
const q = {
    id: "board.command.update-board-chart-config",
    type: var_core_value_sig6A18.COMMAND,
    replaceConfig: Le,
    handler: (var_core_value_sig7A3C, var_core_value_sig0511) => {
      if (!var_core_value_sig0511) return false;
      let {
          unitId: var_core_value_sig1F44,
          chartId: var_core_value_sigCB04
        } = var_core_value_sig0511,
        var_core_value_sig947E = var_core_value_sig0511[Ie] === true,
        var_core_value_sig4545 = var_core_value_sig7A3C.get(N).getChart(var_core_value_sig1F44, var_core_value_sigCB04);
      if (!var_core_value_sig4545) return false;
      let var_core_value_sigF39A = var_core_value_sigD98F.apply(var_core_value_sig4545, var_core_value_sig0511, var_core_value_sig947E);
      if (!var_core_value_sigF39A) return false;
      let var_core_value_sigF79C = [{
          id: L.id,
          params: {
            unitId: var_core_value_sig1F44,
            chart: var_core_value_sigF39A
          }
        }],
        var_core_value_sig2E54 = [{
          id: L.id,
          params: {
            unitId: var_core_value_sig1F44,
            chart: var_core_value_sig4545
          }
        }];
      return var_core_value_sig04C6(var_core_value_sigF79C, var_core_value_sig7A3C.get(var_core_value_sig2547)).result ? (var_core_value_sig7A3C.get(var_core_value_sig3F79).pushUndoRedo({
        unitID: var_core_value_sig1F44,
        undoMutations: var_core_value_sig2E54,
        redoMutations: var_core_value_sigF79C
      }), true) : false;
    }
  },
  J = {
    id: "board.command.update-board-chart-data-source",
    type: var_core_value_sig6A18.COMMAND,
    handler: (var_core_value_sig7658, var_core_value_sigDCF5) => {
      if (!var_core_value_sigDCF5) return false;
      let {
          unitId: var_core_value_sigC786,
          dataSourceId: var_core_value_sigC0D9,
          values: var_core_value_sigF051,
          name: var_core_value_sig5825
        } = var_core_value_sigDCF5,
        var_core_value_sig4EB7 = var_core_value_sig7658.get(N).getDataSource(var_core_value_sigC786, var_core_value_sigC0D9);
      if (!var_core_value_sig4EB7 || var_core_value_sigF051.length === 0) return false;
      let var_core_value_sig73AF = {
          unitId: var_core_value_sigC786,
          dataSource: {
            id: var_core_value_sigC0D9,
            values: var_core_value_sigF051,
            name: var_core_value_sig5825 ?? var_core_value_sig4EB7.name
          }
        },
        var_core_value_sig548A = {
          unitId: var_core_value_sigC786,
          dataSource: var_core_value_sig4EB7
        },
        var_core_value_sigE026 = [{
          id: I.id,
          params: var_core_value_sig73AF
        }],
        var_core_value_sig339E = [{
          id: I.id,
          params: var_core_value_sig548A
        }];
      return var_core_value_sig04C6(var_core_value_sigE026, var_core_value_sig7658.get(var_core_value_sig2547)).result ? (var_core_value_sig7658.get(var_core_value_sig3F79).pushUndoRedo({
        unitID: var_core_value_sigC786,
        undoMutations: var_core_value_sig339E,
        redoMutations: var_core_value_sigE026
      }), true) : false;
    }
  };
let Y = class extends var_core_value_sig5151 {
  constructor(var_core_value_sig9E2F, var_core_value_sigD082, var_core_value_sigDBB7) {
    super(var_core_value_sig9E2F, var_core_value_sigD082, var_core_value_sig1998, var_core_value_sigDBB7);
  }
};
Y = H([V(0, var_core_value_sig880E(N)), V(1, var_core_value_sig880E(var_core_value_sigC9ED)), V(2, var_core_value_sig880E(var_core_value_sigE2BF))], Y);
var Re = class e {
  static isRowRecordDirection(var_core_value_sigD0A8) {
    return var_core_value_sigD0A8 !== "column";
  }
  constructor(var_core_value_sigF4B9) {
    this._context = var_core_value_sigF4B9;
  }
  describe(var_core_value_sig5CEE = {}, var_core_value_sigE92A) {
    var var_core_value_sig362B, var_core_value_sig5CA5;
    let {
        boardModel: var_core_value_sigE90F,
        chartId: var_core_value_sigEFD4,
        elementId: var_core_value_sig861B,
        injector: var_core_value_sig5237,
        pageId: var_core_value_sigBB00,
        unitId: var_core_value_sig7E54
      } = this._context,
      var_core_value_sig9A8D = var_core_value_sig5237.get(Y).ensureChartModel(var_core_value_sig7E54, var_core_value_sigEFD4),
      var_core_value_sigC259 = var_core_value_sig5237.get(N).getChart(var_core_value_sig7E54, var_core_value_sigEFD4),
      var_core_value_sig9C9F = (var_core_value_sig362B = var_core_value_sigE90F.getSnapshot().pages[var_core_value_sigBB00]) == null ? undefined : var_core_value_sig362B.elements[var_core_value_sig861B];
    if (!var_core_value_sig9A8D || !var_core_value_sigC259 || !var_core_value_sig9C9F) throw Error("Board chart not found: " + var_core_value_sigEFD4);
    let var_core_value_sigFDEA = ((var_core_value_sig5CA5 = var_core_value_sigE90F.getSnapshot().pages[var_core_value_sigBB00]) == null ? undefined : var_core_value_sig5CA5.elementOrder["indexOf"](var_core_value_sig861B)) ?? -1;
    return var_core_value_sigC0E3({
      ...var_core_value_sig9D15(var_core_value_sig9A8D.model, var_core_value_sig5CEE, var_core_value_sigE92A),
      id: var_core_value_sigEFD4,
      position: {
        x: var_core_value_sig9C9F.transform["left"] ?? 0,
        y: var_core_value_sig9C9F.transform["top"] ?? 0
      },
      size: {
        width: var_core_value_sig9C9F.transform["width"] ?? 0,
        height: var_core_value_sig9C9F.transform["height"] ?? 0
      },
      containerId: var_core_value_sig9C9F.parentId,
      laneId: var_core_value_sig9C9F.laneId,
      zOrder: var_core_value_sigFDEA < 0 ? undefined : var_core_value_sigFDEA
    });
  }
  getInfo() {
    var var_core_value_sig86D0;
    let var_core_value_sig4CD2 = this.describe(),
      var_core_value_sig48CA = this.getDataSource();
    if (!var_core_value_sig48CA) throw Error("Board chart data source not found: " + this._context["chartId"]);
    let var_core_value_sig50AF = ((var_core_value_sig86D0 = this._context["boardModel"].getSnapshot().pages[this._context["pageId"]]) == null ? undefined : var_core_value_sig86D0.elementOrder["indexOf"](this._context["elementId"])) ?? -1;
    return {
      config: var_core_value_sig52F7(var_core_value_sig4CD2),
      dataSource: var_core_value_sigB785(var_core_value_sig48CA) ? {
        values: var_core_value_sig780B.deepClone(var_core_value_sig48CA.values)
      } : var_core_value_sig130F(var_core_value_sig48CA) ? {
        source: var_core_value_sig780B.deepClone(var_core_value_sig48CA.source)
      } : (() => {
        throw Error("Invalid Board chart data source: " + this._context["chartId"]);
      })(),
      position: var_core_value_sig780B.deepClone(var_core_value_sig4CD2.position),
      size: var_core_value_sig780B.deepClone(var_core_value_sig4CD2.size),
      containerId: var_core_value_sig4CD2.containerId ?? undefined,
      laneId: var_core_value_sig4CD2.laneId ?? undefined,
      zOrder: var_core_value_sig50AF < 0 ? undefined : var_core_value_sig50AF
    };
  }
  getData() {
    let {
        chartId: var_core_value_sigA942,
        injector: var_core_value_sigA621,
        unitId: var_core_value_sigBBFF
      } = this._context,
      var_core_value_sig8889 = var_core_value_sigA621.get(N).getChart(var_core_value_sigBBFF, var_core_value_sigA942),
      var_core_value_sig32F8 = var_core_value_sig8889 ? var_core_value_sigA621.get(N).getDataSource(var_core_value_sigBBFF, var_core_value_sig8889.dataSourceId) : null;
    return var_core_value_sigB785(var_core_value_sig32F8) ? var_core_value_sig32F8.values : null;
  }
  getDataSource() {
    let {
        chartId: var_core_value_sig5B67,
        injector: var_core_value_sig1758,
        unitId: var_core_value_sig4805
      } = this._context,
      var_core_value_sigE67E = var_core_value_sig1758.get(N).getChart(var_core_value_sig4805, var_core_value_sig5B67);
    return (var_core_value_sigE67E ? var_core_value_sig1758.get(N).getDataSource(var_core_value_sig4805, var_core_value_sigE67E.dataSourceId) : null) ?? null;
  }
  async commitDataSource(var_core_value_sig2902) {
    let {
        injector: var_core_value_sig9989
      } = this._context,
      var_core_value_sig698E = var_core_value_sig130F(var_core_value_sig2902) ? var_core_value_sig2902.source : undefined,
      var_core_value_sig2809 = var_core_value_sig698E ? var_core_value_sig9989.get(var_core_value_sigE2BF).acquire(var_core_value_sig698E) : null;
    try {
      if (var_core_value_sig2809) {
        let var_core_value_sig3EEE = await var_core_value_sig70AF(var_core_value_sig2809.state$["pipe"](var_core_value_sig2F2B(({
          status: var_core_value_sig7524
        }) => var_core_value_sig7524 !== var_core_value_sig4BBA.LOADING)));
        if (var_core_value_sig3EEE.status !== var_core_value_sig4BBA.READY) throw var_core_value_sig3EEE.error instanceof Error ? var_core_value_sig3EEE.error : Error(var_core_value_sig698E == null ? undefined : var_core_value_sig698E.kind);
      }
      this._commitDataSource(var_core_value_sig2902);
    } finally {
      var_core_value_sig2809 == null || var_core_value_sig2809.dispose();
    }
  }
  async commitChanges(var_core_value_sig2DAB, var_core_value_sig877E, var_core_value_sig20C8, var_core_value_sigE9A7 = false) {
    let {
        injector: var_core_value_sigBECE
      } = this._context,
      var_core_value_sig1B22 = var_core_value_sig130F(var_core_value_sig2DAB) ? var_core_value_sig2DAB.source : undefined,
      var_core_value_sig7F72 = var_core_value_sig1B22 ? var_core_value_sigBECE.get(var_core_value_sigE2BF).acquire(var_core_value_sig1B22) : null;
    try {
      if (var_core_value_sig7F72) {
        let var_core_value_sigBC46 = await var_core_value_sig70AF(var_core_value_sig7F72.state$["pipe"](var_core_value_sig2F2B(({
          status: var_core_value_sig2AD8
        }) => var_core_value_sig2AD8 !== var_core_value_sig4BBA.LOADING)));
        if (var_core_value_sigBC46.status !== var_core_value_sig4BBA.READY) throw var_core_value_sigBC46.error instanceof Error ? var_core_value_sigBC46.error : Error(var_core_value_sig1B22 == null ? undefined : var_core_value_sig1B22.kind);
      }
      Object.keys(var_core_value_sig877E).length > 0 && (var_core_value_sigE9A7 ? this._replaceConfig(var_core_value_sig877E) : this.commit(var_core_value_sig877E)), Object.keys(var_core_value_sig20C8).length > 0 && this.commitHost(var_core_value_sig20C8), var_core_value_sig2DAB && this._commitDataSource(var_core_value_sig2DAB);
    } finally {
      var_core_value_sig7F72 == null || var_core_value_sig7F72.dispose();
    }
  }
  refreshDataSource() {
    let {
      chartId: var_core_value_sig7B2A,
      injector: var_core_value_sig06CD,
      unitId: var_core_value_sigA5F1
    } = this._context;
    return var_core_value_sig06CD.get(Y).refreshChartDataSource(var_core_value_sigA5F1, var_core_value_sig7B2A);
  }
  commit(var_core_value_sig97A2) {
    var var_core_value_sig07E9;
    let {
        chartId: var_core_value_sig4F59,
        injector: var_core_value_sigF564,
        unitId: var_core_value_sig8CFA
      } = this._context,
      var_core_value_sig2E11 = var_core_value_sigF564.get(Y).ensureChartModel(var_core_value_sig8CFA, var_core_value_sig4F59);
    if (!var_core_value_sig2E11) throw Error("Board chart not found: " + var_core_value_sig4F59);
    let var_core_value_sig5B69 = var_core_value_sigDE3D(var_core_value_sig97A2, {
      series: (var_core_value_sig07E9 = var_core_value_sig2E11.model["config"]) == null ? undefined : var_core_value_sig07E9.series,
      currentChartType: var_core_value_sig2E11.model["chartType"],
      currentStyle: var_core_value_sig2E11.model["style"],
      currentContext: var_core_value_sig2E11.model["context"],
      currentDataAggregation: var_core_value_sig2E11.model["dataAggregation"]
    });
    if (!var_core_value_sigF564.get(var_core_value_sig2547).syncExecuteCommand(q.id, q.replaceConfig({
      unitId: var_core_value_sig8CFA,
      chartId: var_core_value_sig4F59,
      ...var_core_value_sig5B69
    }))) throw Error("Failed to update Board chart configuration.");
  }
  update(var_core_value_sigB098) {
    let var_core_value_sigCE71 = {};
    return var_core_value_sigB098.position !== undefined && (var_core_value_sigCE71.position = var_core_value_sigB098.position), var_core_value_sigB098.size !== undefined && (var_core_value_sigCE71.size = var_core_value_sigB098.size), Object.prototype["hasOwnProperty"].call(var_core_value_sigB098, "containerId") && (var_core_value_sigCE71.containerId = var_core_value_sigB098.containerId ?? null), Object.prototype["hasOwnProperty"].call(var_core_value_sigB098, "laneId") && (var_core_value_sigCE71.laneId = var_core_value_sigB098.laneId ?? null), var_core_value_sigB098.zOrder !== undefined && (var_core_value_sigCE71.zOrder = var_core_value_sigB098.zOrder), this.commitChanges(var_core_value_sigB098.dataSource, var_core_value_sigB098.config, var_core_value_sigCE71, true);
  }
  _replaceConfig(var_core_value_sig21D8) {
    var var_core_value_sig2B65;
    let {
        chartId: var_core_value_sigD7EA,
        injector: var_core_value_sigB33B,
        unitId: var_core_value_sig24B9
      } = this._context,
      var_core_value_sigE627 = var_core_value_sigB33B.get(Y).ensureChartModel(var_core_value_sig24B9, var_core_value_sigD7EA);
    if (!var_core_value_sigE627) throw Error("Board\x20chart\x20not\x20found:\x20" + var_core_value_sigD7EA);
    let var_core_value_sigEF3E = var_core_value_sig866F(var_core_value_sig21D8, {
      series: (var_core_value_sig2B65 = var_core_value_sigE627.model["config"]) == null ? undefined : var_core_value_sig2B65.series,
      currentStyle: var_core_value_sigE627.model["style"]
    });
    if (!var_core_value_sigB33B.get(var_core_value_sig2547).syncExecuteCommand(q.id, q.replaceConfig({
      unitId: var_core_value_sig24B9,
      chartId: var_core_value_sigD7EA,
      ...var_core_value_sigEF3E
    }))) throw Error("Failed to update Board chart configuration.");
  }
  setDataSource(var_core_value_sig273D) {
    return this.commitDataSource(Array.isArray(var_core_value_sig273D) ? {
      values: var_core_value_sig273D
    } : {
      source: var_core_value_sigB8C7.toReference(var_core_value_sig273D)
    });
  }
  setAbsolutePosition(var_core_value_sig9A0D, var_core_value_sigA319) {
    this.commitHost({
      position: {
        x: var_core_value_sig9A0D,
        y: var_core_value_sigA319
      }
    });
  }
  setSize(var_core_value_sig2D58, var_core_value_sig223F) {
    this.commitHost({
      size: {
        width: var_core_value_sig2D58,
        height: var_core_value_sig223F
      }
    });
  }
  arrange(var_core_value_sigD749) {
    var var_core_value_sigCFFA;
    let {
        boardModel: var_core_value_sig58C1,
        elementId: var_core_value_sig5090,
        injector: var_core_value_sigC368,
        pageId: var_core_value_sigAD56,
        unitId: var_core_value_sigDB4A
      } = this._context,
      var_core_value_sig6418 = ((var_core_value_sigCFFA = var_core_value_sig58C1.getSnapshot().pages[var_core_value_sigAD56]) == null ? undefined : var_core_value_sigCFFA.elementOrder) ?? [],
      var_core_value_sig1896 = var_core_value_sig6418.indexOf(var_core_value_sig5090);
    if (var_core_value_sig1896 < 0) throw Error("Board chart element not found: " + var_core_value_sig5090);
    if (var_core_value_sig7D40(var_core_value_sig1896, var_core_value_sig6418.length, var_core_value_sigD749) !== var_core_value_sig1896 && !var_core_value_sigC368.get(var_core_value_sig2547).syncExecuteCommand(var_core_value_sigBDF5.id, {
      unitId: var_core_value_sigDB4A,
      subUnitId: var_core_value_sigAD56,
      elementIds: [var_core_value_sig5090],
      placement: Be(var_core_value_sigD749)
    })) throw Error("Failed to arrange Board chart.");
  }
  setZOrder(var_core_value_sig0285) {
    this._commitZOrder(var_core_value_sig0285);
  }
  resolveData(var_core_value_sig777D, var_core_value_sig3F4C) {
    let {
        chartId: var_core_value_sigD65A,
        injector: var_core_value_sig5A13,
        unitId: var_core_value_sigF593
      } = this._context,
      var_core_value_sig3607 = var_core_value_sig5A13.get(Y).ensureChartModel(var_core_value_sigF593, var_core_value_sigD65A);
    if (!var_core_value_sig3607) throw Error("Board chart not found: " + var_core_value_sigD65A);
    return var_core_value_sigFF19(var_core_value_sig3607.model, var_core_value_sig777D, var_core_value_sig3F4C);
  }
  resolveDataSet(var_core_value_sigB512) {
    var var_core_value_sigF2E6, var_core_value_sig34C8;
    let {
        chartId: var_core_value_sigB744,
        injector: var_core_value_sigEAE2,
        unitId: var_core_value_sigE68A
      } = this._context,
      var_core_value_sig3E68 = var_core_value_sigEAE2.get(Y).ensureChartModel(var_core_value_sigE68A, var_core_value_sigB744),
      var_core_value_sigF4C5 = var_core_value_sigEAE2.get(N).getChart(var_core_value_sigE68A, var_core_value_sigB744);
    if (!var_core_value_sig3E68 || !var_core_value_sigF4C5) throw Error("Board chart not found: " + var_core_value_sigB744);
    return var_core_value_sig43B8(var_core_value_sigB512, {
      headerRow: ((var_core_value_sigF2E6 = var_core_value_sigF4C5.context) == null ? undefined : var_core_value_sigF2E6.headerRow) ?? var_core_value_sigBB6C,
      isRowDirection: e.isRowRecordDirection((var_core_value_sig34C8 = var_core_value_sigF4C5.context) == null ? undefined : var_core_value_sig34C8.orient)
    });
  }
  commitHost(var_core_value_sig5410) {
    this._commitData(var_core_value_sig5410.data), this._commitElement(var_core_value_sig5410), this._commitZOrder(var_core_value_sig5410.zOrder);
  }
  remove() {
    let {
      elementId: var_core_value_sig492F,
      injector: var_core_value_sig8EA0,
      pageId: var_core_value_sigA6F6,
      unitId: var_core_value_sigCDDA
    } = this._context;
    return var_core_value_sig8EA0.get(var_core_value_sig2547).syncExecuteCommand(var_core_value_sig841D.id, {
      unitId: var_core_value_sigCDDA,
      subUnitId: var_core_value_sigA6F6,
      elementId: var_core_value_sig492F
    });
  }
  _commitData(var_core_value_sigE243) {
    if (var_core_value_sigE243 === undefined) return;
    let {
        chartId: var_core_value_sig74A8,
        injector: var_core_value_sig21B2,
        unitId: var_core_value_sigDE08
      } = this._context,
      var_core_value_sigACCB = var_core_value_sig21B2.get(N).getChart(var_core_value_sigDE08, var_core_value_sig74A8);
    if (!(var_core_value_sigACCB && var_core_value_sig21B2.get(var_core_value_sig2547).syncExecuteCommand(J.id, {
      unitId: var_core_value_sigDE08,
      dataSourceId: var_core_value_sigACCB.dataSourceId,
      values: var_core_value_sigE243
    }))) throw Error("Failed to update Board chart data.");
  }
  _commitDataSource(var_core_value_sig7F33) {
    let {
      chartId: var_core_value_sig0C53,
      injector: var_core_value_sigEA04,
      unitId: var_core_value_sig7A62
    } = this._context;
    if (!var_core_value_sigEA04.get(var_core_value_sig2547).syncExecuteCommand(K.id, {
      unitId: var_core_value_sig7A62,
      chartId: var_core_value_sig0C53,
      dataSource: var_core_value_sig7F33
    })) throw Error(K.id);
  }
  _commitElement({
    containerId: var_core_value_sig8109,
    position: var_core_value_sig7565,
    size: var_core_value_sigD4FB,
    laneId: var_core_value_sig3E71
  }) {
    var var_core_value_sig01B3;
    if (!ze({
      containerId: var_core_value_sig8109,
      position: var_core_value_sig7565,
      size: var_core_value_sigD4FB,
      laneId: var_core_value_sig3E71
    })) return;
    let {
        boardModel: var_core_value_sig7442,
        elementId: var_core_value_sigDF87,
        injector: var_core_value_sig9EE0,
        pageId: var_core_value_sigF0511,
        unitId: var_core_value_sig0B45
      } = this._context,
      var_core_value_sig36F8 = (var_core_value_sig01B3 = var_core_value_sig7442.getSnapshot().pages[var_core_value_sigF0511]) == null ? undefined : var_core_value_sig01B3.elements[var_core_value_sigDF87];
    if (!var_core_value_sig36F8) throw Error("Board chart element not found: " + var_core_value_sigDF87);
    let var_core_value_sig03E1 = {
      ...var_core_value_sig36F8,
      parentId: var_core_value_sig8109 === undefined ? var_core_value_sig36F8.parentId : var_core_value_sig8109 ?? undefined,
      laneId: var_core_value_sig3E71 === undefined ? var_core_value_sig36F8.laneId : var_core_value_sig3E71 ?? undefined,
      transform: {
        ...var_core_value_sig36F8.transform,
        left: (var_core_value_sig7565 == null ? undefined : var_core_value_sig7565.x) ?? var_core_value_sig36F8.transform["left"],
        top: (var_core_value_sig7565 == null ? undefined : var_core_value_sig7565.y) ?? var_core_value_sig36F8.transform["top"],
        width: (var_core_value_sigD4FB == null ? undefined : var_core_value_sigD4FB.width) ?? var_core_value_sig36F8.transform["width"],
        height: (var_core_value_sigD4FB == null ? undefined : var_core_value_sigD4FB.height) ?? var_core_value_sig36F8.transform["height"]
      }
    };
    if (!var_core_value_sig9EE0.get(var_core_value_sig2547).syncExecuteCommand(var_core_value_sig1614.id, {
      unitId: var_core_value_sig0B45,
      subUnitId: var_core_value_sigF0511,
      elementId: var_core_value_sigDF87,
      element: var_core_value_sig03E1,
      transform: {
        left: var_core_value_sig03E1.transform["left"],
        top: var_core_value_sig03E1.transform["top"],
        width: var_core_value_sig03E1.transform["width"],
        height: var_core_value_sig03E1.transform["height"],
        angle: var_core_value_sig03E1.transform["rotation"] ?? 0,
        flipX: var_core_value_sig03E1.transform["flipX"],
        flipY: var_core_value_sig03E1.transform["flipY"]
      }
    })) throw Error("Failed to update Board chart element.");
  }
  _commitZOrder(var_core_value_sigBB57) {
    if (var_core_value_sigBB57 === undefined) return;
    let {
        boardModel: var_core_value_sig7C4A,
        elementId: var_core_value_sigE799,
        injector: var_core_value_sigB601,
        pageId: var_core_value_sig8B71,
        unitId: var_core_value_sigAEFB
      } = this._context,
      var_core_value_sig826B = var_core_value_sig7C4A.getSnapshot().pages[var_core_value_sig8B71];
    if (!var_core_value_sig826B) throw Error("Board page not found: " + var_core_value_sig8B71);
    let var_core_value_sigCF89 = var_core_value_sig826B.elementOrder["indexOf"](var_core_value_sigE799);
    if (var_core_value_sigCF89 < 0) throw Error("Board chart element not found: " + var_core_value_sigE799);
    if (var_core_value_sig68BE(var_core_value_sigBB57, var_core_value_sig826B.elementOrder["length"]) !== var_core_value_sigCF89 && !var_core_value_sigB601.get(var_core_value_sig2547).syncExecuteCommand(var_core_value_sigBDF5.id, {
      unitId: var_core_value_sigAEFB,
      subUnitId: var_core_value_sig8B71,
      elementIds: [var_core_value_sigE799],
      zOrder: var_core_value_sigBB57
    })) throw Error("Failed\x20to\x20update\x20Board\x20chart\x20z-order.");
  }
};
function ze({
  containerId: var_core_value_sig7550,
  laneId: var_core_value_sig2983,
  position: var_core_value_sigE1B0,
  size: var_core_value_sigD4FF
}) {
  return !!(var_core_value_sigE1B0 || var_core_value_sigD4FF || var_core_value_sig7550 !== undefined || var_core_value_sig2983 !== undefined);
}
function Be(var_core_value_sig1E5B) {
  return var_core_value_sig1E5B === var_core_value_sigF175.front ? "front" : var_core_value_sig1E5B === var_core_value_sigF175.forward ? "forward" : var_core_value_sig1E5B === var_core_value_sigF175.backward ? "backward" : "back";
}
const Ve = {
  id: "board.command.duplicate-board-chart-data-source",
  type: var_core_value_sig6A18.COMMAND,
  handler: (var_core_value_sigB680, var_core_value_sig1F64) => {
    if (!var_core_value_sig1F64) return false;
    let {
        unitId: var_core_value_sigDD1C,
        chartId: var_core_value_sig2C39,
        duplicateDataSourceId: var_core_value_sigB7D1
      } = var_core_value_sig1F64,
      var_core_value_sig64F0 = var_core_value_sigB680.get(N),
      var_core_value_sig85B1 = var_core_value_sig64F0.getChart(var_core_value_sigDD1C, var_core_value_sig2C39),
      var_core_value_sig3141 = var_core_value_sig85B1 ? var_core_value_sig64F0.getDataSource(var_core_value_sigDD1C, var_core_value_sig85B1.dataSourceId) : undefined;
    if (!var_core_value_sig85B1 || !var_core_value_sig3141) return false;
    let var_core_value_sig2162 = {
        ...var_core_value_sig3141,
        id: var_core_value_sigB7D1 ?? var_core_value_sig7BE0()
      },
      var_core_value_sig2EAD = {
        ...var_core_value_sig85B1,
        dataSourceId: var_core_value_sig2162.id
      },
      var_core_value_sig6774 = {
        unitId: var_core_value_sigDD1C,
        dataSource: var_core_value_sig2162
      },
      var_core_value_sig340D = {
        unitId: var_core_value_sigDD1C,
        dataSourceId: var_core_value_sig2162.id
      },
      var_core_value_sig82D4 = {
        unitId: var_core_value_sigDD1C,
        chart: var_core_value_sig2EAD
      },
      var_core_value_sigBDE4 = {
        unitId: var_core_value_sigDD1C,
        chart: var_core_value_sig85B1
      },
      var_core_value_sig7DF1 = [{
        id: I.id,
        params: var_core_value_sig6774
      }, {
        id: L.id,
        params: var_core_value_sig82D4
      }],
      var_core_value_sigDC86 = [{
        id: L.id,
        params: var_core_value_sigBDE4
      }, {
        id: P.id,
        params: var_core_value_sig340D
      }];
    return var_core_value_sig04C6(var_core_value_sig7DF1, var_core_value_sigB680.get(var_core_value_sig2547)).result ? (var_core_value_sigB680.get(var_core_value_sig3F79).pushUndoRedo({
      unitID: var_core_value_sigDD1C,
      undoMutations: var_core_value_sigDC86,
      redoMutations: var_core_value_sig7DF1
    }), true) : false;
  }
};
var He = "@univerjs-pro/boards-chart",
  Ue = "1.0.0-insiders.20260907-70fc579";
function X(var_core_value_sig0B0C) {
  "@babel/helpers - typeof";

  return X = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sig00CB) {
    return typeof var_core_value_sig00CB;
  } : function (var_core_value_sig77EE) {
    return var_core_value_sig77EE && typeof Symbol == "function" && var_core_value_sig77EE.constructor === Symbol && var_core_value_sig77EE !== Symbol.prototype ? "symbol" : typeof var_core_value_sig77EE;
  }, X(var_core_value_sig0B0C);
}
function We(var_core_value_sigA39E, var_core_value_sigBBEE) {
  if (X(var_core_value_sigA39E) != "object" || !var_core_value_sigA39E) return var_core_value_sigA39E;
  var var_core_value_sig011D = var_core_value_sigA39E[Symbol.toPrimitive];
  if (var_core_value_sig011D !== undefined) {
    var var_core_value_sig6167 = var_core_value_sig011D.call(var_core_value_sigA39E, var_core_value_sigBBEE || "default");
    if (X(var_core_value_sig6167) != "object") return var_core_value_sig6167;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sigBBEE === "string" ? String : Number)(var_core_value_sigA39E);
}
function Ge(var_core_value_sig65A1) {
  var var_core_value_sig7F19 = We(var_core_value_sig65A1, "string");
  return X(var_core_value_sig7F19) == "symbol" ? var_core_value_sig7F19 : var_core_value_sig7F19 + "";
}
function Z(var_core_value_sig7827, var_core_value_sig652C, var_core_value_sig7E32) {
  return (var_core_value_sig652C = Ge(var_core_value_sig652C)) in var_core_value_sig7827 ? Object.defineProperty(var_core_value_sig7827, var_core_value_sig652C, {
    value: var_core_value_sig7E32,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sig7827[var_core_value_sig652C] = var_core_value_sig7E32, var_core_value_sig7827;
}
let Q = class extends var_core_value_sig49B0 {
  constructor(var_core_value_sig9F76, var_core_value_sigB008, var_core_value_sig8721) {
    super(), this._resourceManagerService = var_core_value_sig9F76, this._resourceService = var_core_value_sigB008, this._modelService = var_core_value_sig8721, Z(this, "_resourceDisposable", null), this._initResource();
  }
  _initResource() {
    this._resourceDisposable = this._resourceManagerService["registerPluginResource"]({
      pluginName: "BOARD_CHART_PLUGIN",
      businesses: [var_core_value_sig7D1B.UNIVER_BOARD],
      toJson: var_core_value_sigC9E0 => this._resourceService["serializeUnit"](var_core_value_sigC9E0),
      parseJson: var_core_value_sig76BA => JSON.parse(var_core_value_sig76BA),
      onLoad: (var_core_value_sigFBFA, var_core_value_sigF602) => {
        this._resourceService["loadUnit"](var_core_value_sigFBFA, var_core_value_sigF602);
      },
      onUnLoad: var_core_value_sig1BBD => {
        this._modelService["removeUnit"](var_core_value_sig1BBD), this._resourceService["unloadUnit"](var_core_value_sig1BBD);
      }
    }), this.disposeWithMe(this._resourceDisposable);
  }
};
Q = H([V(0, var_core_value_sig4CDF), V(1, var_core_value_sig880E(N)), V(2, var_core_value_sig880E(Y))], Q);
let $ = class extends var_core_value_sigB57B {
  constructor(var_core_value_sig08BA = B, var_core_value_sigDBB5, var_core_value_sigCFAC, var_core_value_sig237B) {
    super(), this._config = var_core_value_sig08BA, this._injector = var_core_value_sigDBB5, this._commandService = var_core_value_sigCFAC, this._configService = var_core_value_sig237B, Z(this, "_adapterDisposable", null);
    let {
      ...var_core_value_sigFEAB
    } = var_core_value_sig6C7E({}, B, this._config);
    this._configService["setConfig"]("boards-chart.config", var_core_value_sigFEAB), this._initCommands();
  }
  onStarting() {
    [[N], [Y], [Q], [U]].forEach(var_core_value_sigF704 => this._injector["add"](var_core_value_sigF704)), var_core_value_sigCA05(this._injector, [[N], [Y], [Q], [U]]);
    let var_core_value_sigE347 = this._injector["get"](var_core_value_sig8E74),
      var_core_value_sig3C5B = this._injector["get"](U);
    this._adapterDisposable = var_core_value_sigE347.registerAdapter(var_core_value_sig3C5B), this.disposeWithMe(this._adapterDisposable);
  }
  _initCommands() {
    [K, J, q, Ve, I, P, L, F].forEach(var_core_value_sig2BCF => {
      this.disposeWithMe(this._commandService["registerCommand"](var_core_value_sig2BCF));
    });
  }
};
Z($, "type", var_core_value_sig7D1B.UNIVER_BOARD), Z($, "pluginName", "UniverBoardsChartPlugin"), Z($, "packageName", He), Z($, "version", Ue), $ = H([var_core_value_sig4E3D(var_core_value_sigA56E, var_core_value_sigB99B, var_core_value_sigACC6), V(1, var_core_value_sig880E(var_core_value_sigC9ED)), V(2, var_core_value_sig2547), V(3, var_core_value_sigBCA9)], $);
export { U as BoardChartAdapter, Re as BoardChartConfigAdapter, Y as BoardChartModelService, N as BoardChartResourceService, K as ChangeBoardChartDataSourceCommand, Se as DEFAULT_BOARD_CHART_ELEMENT_HEIGHT, xe as DEFAULT_BOARD_CHART_ELEMENT_WIDTH, z as DEFAULT_BOARD_CHART_STROKE, R as DEFAULT_BOARD_CHART_VALUES, Ve as DuplicateBoardChartDataSourceCommand, P as RemoveBoardChartDataSourceMutation, F as RemoveBoardChartSnapshotMutation, I as SetBoardChartDataSourceMutation, L as SetBoardChartSnapshotMutation, $ as UniverBoardsChartPlugin, q as UpdateBoardChartConfigCommand, J as UpdateBoardChartDataSourceCommand };
