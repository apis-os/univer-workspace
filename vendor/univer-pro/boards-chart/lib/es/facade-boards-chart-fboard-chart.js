import { BoardElementType, InsertBoardChartCommand } from "@univerjs-pro/boards";
import { BoardChartConfigAdapter, BoardChartResourceService } from "@univerjs-pro/boards-chart";
import { FBoard } from "@univerjs-pro/boards/facade";
import { ChartDataSourceRuntimeStatus, DEFAULT_CHART_RESOURCE_HEADER_ROW, IChartDataSourceRuntimeService, ResourceRefChartDataSourceAdapter, buildOrientedChartDataSet, chartTypeToBits, toChartDataItem, toChartModelConfig } from "@univerjs-pro/engine-chart";
import { CHART_FACADE_RANDOM_ID_LENGTH, FChart, createChartBuilder } from "@univerjs-pro/engine-chart/facade";
import { ICommandService, IUniverInstanceService, Tools, UniverInstanceType, generateRandomId } from "@univerjs/core";
import { filter, firstValueFrom } from "rxjs";
function C(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690) {
  "@babel/helpers - typeof";

  return C = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638) {
    return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638;
  } : function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640 && typeof Symbol == "function" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640.constructor === Symbol && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640 !== Symbol.prototype ? "symbol" : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640;
  }, C(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690);
}
function w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693) {
  if (C(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692) != "object" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692;
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692[Symbol.toPrimitive];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694 !== undefined) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693 || "default");
    if (C(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695) != "object") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693 === "string" ? String : Number)(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692);
}
function T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101 = w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100, "string");
  return C(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101) == "symbol" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101 + "";
}
function E(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105 = T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105)) in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104 ? Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105, {
    value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104;
}
var D = class extends FChart {
    constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644) {
      super(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644.chartId, () => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642.getId(),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643.get(IUniverInstanceService).getUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616, UniverInstanceType.UNIVER_BOARD);
        if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617) throw Error("Board not found: " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616);
        return new BoardChartConfigAdapter({
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616,
          pageId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617.getActivePageId(),
          chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644.chartId,
          elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644.elementId,
          boardModel: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617,
          injector: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643
        });
      }, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622) => createChartBuilder({
        info: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620,
        description: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621,
        type: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622,
        normalizeSource: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466 => Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466) ? {
          values: Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466)
        } : {
          source: ResourceRefChartDataSourceAdapter.toReference(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466)
        },
        extension: ({
          setInfo: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467
        }) => ({
          setContainer(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46) {
            return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467("containerId", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46), this;
          },
          setLane(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462) {
            return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467("laneId", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462), this;
          },
          setZOrder(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464) {
            return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467("zOrder", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464), this;
          }
        })
      }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643), this._board = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642, E(this, "unitId", undefined), E(this, "elementId", undefined), E(this, "chartId", undefined), this.unitId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642.getId(), this.elementId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644.elementId, this.chartId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644.chartId;
    }
    getElementId() {
      return this.elementId;
    }
    getElement() {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648 = this._board["getElement"](this.elementId);
      return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648.type) === BoardElementType.Chart ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648 : null;
    }
    getChart() {
      return this._injector["get"](BoardChartResourceService).getChart(this.unitId, this.chartId) ?? null;
    }
    getDataSource() {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650 = this.getChart();
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650 ? this._injector["get"](BoardChartResourceService).getDataSource(this.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650.dataSourceId) ?? null : null;
    }
  },
  O = class extends FBoard {
    newChart(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652) {
      return createChartBuilder({
        type: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652,
        injector: this._injector,
        commitError: "Insert the Board chart before updating it.",
        normalizeSource: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623 => Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623) ? {
          values: Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623)
        } : {
          source: ResourceRefChartDataSourceAdapter.toReference(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623)
        },
        createInfo: () => ({}),
        extension: ({
          setInfo: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624
        }) => ({
          setContainer(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468) {
            return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624("containerId", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468), this;
          },
          setLane(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610) {
            return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624("laneId", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610), this;
          },
          setZOrder(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612) {
            return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624("zOrder", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612), this;
          }
        })
      });
    }
    async insertChart(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655 = null;
      try {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659;
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654.dataSource["values"] ? null : await this._resolveReferencedValues(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654.dataSource["source"]);
        let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB = {
            ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654.config,
            data: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654.dataSource["values"] ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655.values,
            dataSource: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654.dataSource,
            position: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654.position,
            size: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654.size,
            parentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654.containerId,
            laneId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654.laneId,
            insertIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654.zOrder
          },
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625 = this._getStoragePageId(),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626 = Array.isArray(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.data) ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.data : var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.data["values"];
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626.length === 0) throw Error("Board chart data is required.");
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.size) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656.width,
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.size) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657.height;
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627 !== undefined && !(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627 > 0) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628 !== undefined && !(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628 > 0)) throw Error("Board\x20chart\x20size\x20must\x20be\x20positive.");
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.id ?? generateRandomId(CHART_FACADE_RANDOM_ID_LENGTH),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.elementId ?? generateRandomId(CHART_FACADE_RANDOM_ID_LENGTH),
          var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1 = {
            ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.context
          },
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631 = toChartModelConfig(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB, {
            series: k(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1)
          });
        if (!this._injector["get"](ICommandService).syncExecuteCommand(InsertBoardChartCommand.id, {
          unitId: this.getId(),
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625,
          elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630,
          chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629,
          parentId: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.parentId,
          laneId: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.laneId,
          insertIndex: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.insertIndex,
          left: ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.position) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658.x) ?? 0,
          top: ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.position) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659.y) ?? 0,
          width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627,
          height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628,
          options: {
            chartType: chartTypeToBits(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.type),
            data: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626,
            dataSource: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.dataSource,
            style: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631.style,
            context: {
              ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1,
              chartContext: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631.context
            },
            dataAggregation: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631.dataAggregation
          }
        })) throw Error("Failed to create Board chart.");
        return this.getChart(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629) ?? this._injector["createInstance"](D, this, this._injector, {
          chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629,
          elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630
        });
      } finally {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655.handle["dispose"]();
      }
    }
    getChart(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667 = this._elements().find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632.id === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632.chartId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667 && this._hasCompleteResource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667.chartId) ? this._injector["createInstance"](D, this, this._injector, {
        chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667.chartId,
        elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667.id
      }) : null;
    }
    getCharts() {
      return this._elements().filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633 => this._hasCompleteResource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633.chartId)).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634 => this._injector["createInstance"](D, this, this._injector, {
        chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634.chartId,
        elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634.id
      }));
    }
    _elements() {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670 = this.getData().pages[this._getStoragePageId()];
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670.elementOrder["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670.elements[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635]).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636 => (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636.type) === BoardElementType.Chart) : [];
    }
    _hasCompleteResource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673 = this._injector["get"](BoardChartResourceService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673.getChart(this.getId(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672);
      return !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674 && !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673.getDataSource(this.getId(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674.dataSourceId);
    }
    _getStoragePageId() {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679 = this.getData();
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679.activePageId ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679.pageOrder) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678[0]) ?? Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679.pages)[0] ?? "";
    }
    async _resolveReferencedValues(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683 = this._injector["get"](IChartDataSourceRuntimeService).acquire(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682);
      try {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637 = await firstValueFrom(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683.state$["pipe"](filter(({
          status: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614
        }) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614 !== ChartDataSourceRuntimeStatus.LOADING)));
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637.status !== ChartDataSourceRuntimeStatus.READY || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637.values) throw var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637.error instanceof Error ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637.error : Error(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682.kind);
        return {
          values: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637.values["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615 => [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615]),
          handle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683
        };
      } catch (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC5) {
        throw var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683.dispose(), var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC5;
      }
    }
  };
function k(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112 = buildOrientedChartDataSet(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110, {
    headerRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111.headerRow ?? DEFAULT_CHART_RESOURCE_HEADER_ROW,
    isRowDirection: BoardChartConfigAdapter.isRowRecordDirection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111.orient)
  });
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112.source["slice"](1).map((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687) => {
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB = 1 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687;
    return {
      index: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB,
      name: String(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112.dimensions[var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB] ?? ""),
      items: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686.map(toChartDataItem)
    };
  });
}
export { D as FBoardChart };
export { O };
