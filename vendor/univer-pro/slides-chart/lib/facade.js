import { ChartDataSourceRuntimeStatus as var_core_value_sig1B22, IChartDataSourceRuntimeService as var_core_value_sig7F72, ResourceRefChartDataSourceAdapter as var_core_value_sig7B2A, toChartDataItem as var_core_value_sig06CD, toChartModelConfig as var_core_value_sigA5F1 } from "@univerjs-pro/engine-chart";
import { CHART_FACADE_RANDOM_ID_LENGTH as var_core_value_sig97A2, FChart as var_core_value_sig07E9, createChartBuilder as var_core_value_sig4F59 } from "@univerjs-pro/engine-chart/facade";
import { PageElementTypeEnum as var_core_value_sigF564 } from "@univerjs-pro/slides";
import { DEFAULT_SLIDE_CHART_ELEMENT_HEIGHT as var_core_value_sig8CFA, DEFAULT_SLIDE_CHART_ELEMENT_LEFT as var_core_value_sig2E11, DEFAULT_SLIDE_CHART_ELEMENT_TOP as var_core_value_sig5B69, DEFAULT_SLIDE_CHART_ELEMENT_WIDTH as var_core_value_sigB098, InsertSlideChartCommand as var_core_value_sigCE71, SlideChartConfigAdapter as var_core_value_sig21D8, SlideChartResourceService as var_core_value_sig2B65 } from "@univerjs-pro/slides-chart";
import { FSlide as var_core_value_sigD7EA } from "@univerjs-pro/slides/facade";
import { ICommandService as var_core_value_sigB33B, Tools as var_core_value_sig24B9, generateRandomId as var_core_value_sigE627 } from "@univerjs/core";
import { filter as var_core_value_sigEF3E, firstValueFrom as var_core_value_sig273D } from "rxjs";
function S(var_core_value_sig9C9F) {
  "@babel/helpers - typeof";

  return S = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sigF62A) {
    return typeof var_core_value_sigF62A;
  } : function (var_core_value_sig8178) {
    return var_core_value_sig8178 && typeof Symbol == "function" && var_core_value_sig8178.constructor === Symbol && var_core_value_sig8178 !== Symbol.prototype ? "symbol" : typeof var_core_value_sig8178;
  }, S(var_core_value_sig9C9F);
}
function C(var_core_value_sigFDEA, var_core_value_sig86D0) {
  if (S(var_core_value_sigFDEA) != "object" || !var_core_value_sigFDEA) return var_core_value_sigFDEA;
  var var_core_value_sig4CD2 = var_core_value_sigFDEA[Symbol.toPrimitive];
  if (var_core_value_sig4CD2 !== undefined) {
    var var_core_value_sig48CA = var_core_value_sig4CD2.call(var_core_value_sigFDEA, var_core_value_sig86D0 || "default");
    if (S(var_core_value_sig48CA) != "object") return var_core_value_sig48CA;
    throw TypeError("@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.");
  }
  return (var_core_value_sig86D0 === "string" ? String : Number)(var_core_value_sigFDEA);
}
function w(var_core_value_sig50AF) {
  var var_core_value_sigA942 = C(var_core_value_sig50AF, "string");
  return S(var_core_value_sigA942) == "symbol" ? var_core_value_sigA942 : var_core_value_sigA942 + "";
}
function T(var_core_value_sigA621, var_core_value_sigBBFF, var_core_value_sig8889) {
  return (var_core_value_sigBBFF = w(var_core_value_sigBBFF)) in var_core_value_sigA621 ? Object.defineProperty(var_core_value_sigA621, var_core_value_sigBBFF, {
    value: var_core_value_sig8889,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sigA621[var_core_value_sigBBFF] = var_core_value_sig8889, var_core_value_sigA621;
}
var E = class extends var_core_value_sig07E9 {
    constructor(var_core_value_sigE9ED, var_core_value_sigB577, var_core_value_sig9572, var_core_value_sigD873, var_core_value_sigA12B, var_core_value_sigF230) {
      super(var_core_value_sig9572, () => new var_core_value_sig21D8({
        unitId: var_core_value_sigE9ED,
        subUnitId: var_core_value_sigB577,
        chartId: var_core_value_sig9572,
        elementId: var_core_value_sigD873,
        slideModel: var_core_value_sigA12B,
        injector: var_core_value_sigF230
      }), (var_core_value_sig76BA, var_core_value_sigFBFA, var_core_value_sigF602) => var_core_value_sig4F59({
        info: var_core_value_sig76BA,
        description: var_core_value_sigFBFA,
        type: var_core_value_sigF602,
        normalizeSource: var_core_value_sig3EEE => Array.isArray(var_core_value_sig3EEE) ? {
          values: var_core_value_sig24B9.deepClone(var_core_value_sig3EEE)
        } : {
          source: var_core_value_sig7B2A.toReference(var_core_value_sig3EEE)
        },
        extension: ({
          setInfo: var_core_value_sigBC46
        }) => ({
          setPlaceholder(var_core_value_sig7524) {
            return var_core_value_sigBC46("placeholder", var_core_value_sig7524), this;
          },
          setStroke(var_core_value_sig2AD8) {
            return var_core_value_sigBC46("stroke", var_core_value_sig2AD8), this;
          },
          setZOrder(var_core_value_sig2AD0) {
            return var_core_value_sigBC46("zOrder", var_core_value_sig2AD0), this;
          }
        })
      }), var_core_value_sigF230), this._unitId = var_core_value_sigE9ED, this._subUnitId = var_core_value_sigB577, this._chartId = var_core_value_sig9572, this._elementId = var_core_value_sigD873, this._slideModel = var_core_value_sigA12B, T(this, "unitId", undefined), this.unitId = var_core_value_sigE9ED;
    }
    getElementId() {
      return this._elementId;
    }
    getPlaceholder() {
      return this._getElement().placeholder;
    }
    setPlaceholder(var_core_value_sig09B8) {
      return this._createSlideAdapter().commitHost({
        placeholder: var_core_value_sig09B8
      }), this;
    }
    getStroke() {
      return this._getElement().stroke;
    }
    setStroke(var_core_value_sig6F91) {
      return this._createSlideAdapter().commitHost({
        stroke: var_core_value_sig6F91
      }), this;
    }
    getChartData() {
      let var_core_value_sigF9C7 = this._injector["get"](var_core_value_sig2B65),
        var_core_value_sig8895 = var_core_value_sigF9C7.getChart(this._unitId, this._chartId);
      if (!var_core_value_sig8895) return null;
      let var_core_value_sigC80B = var_core_value_sigF9C7.getDataSource(this._unitId, var_core_value_sig8895.dataSourceId);
      return var_core_value_sigC80B ? {
        chart: var_core_value_sig8895,
        dataSource: var_core_value_sigC80B
      } : null;
    }
    _getElement() {
      var var_core_value_sig284F;
      let var_core_value_sigE154 = (var_core_value_sig284F = this._slideModel["getSnapshot"]().slides[this._subUnitId]) == null ? undefined : var_core_value_sig284F.elements[this._elementId];
      if (!var_core_value_sigE154) throw Error("Slide chart element not found: " + this._elementId);
      return var_core_value_sigE154;
    }
    _createSlideAdapter() {
      return new var_core_value_sig21D8({
        unitId: this._unitId,
        subUnitId: this._subUnitId,
        chartId: this._chartId,
        elementId: this._elementId,
        slideModel: this._slideModel,
        injector: this._injector
      });
    }
  },
  D = class extends var_core_value_sigD7EA {
    newChart(var_core_value_sig4632) {
      return var_core_value_sig4F59({
        type: var_core_value_sig4632,
        injector: this._injector,
        commitError: "Insert\x20the\x20Slide\x20chart\x20before\x20updating\x20it.",
        normalizeSource: var_core_value_sig1BBD => Array.isArray(var_core_value_sig1BBD) ? {
          values: var_core_value_sig24B9.deepClone(var_core_value_sig1BBD)
        } : {
          source: var_core_value_sig7B2A.toReference(var_core_value_sig1BBD)
        },
        createInfo: () => ({}),
        extension: ({
          setInfo: var_core_value_sigF704
        }) => ({
          setPlaceholder(var_core_value_sig3D7D) {
            return var_core_value_sigF704("placeholder", var_core_value_sig3D7D), this;
          },
          setStroke(var_core_value_sig27E5) {
            return var_core_value_sigF704("stroke", var_core_value_sig27E5), this;
          },
          setZOrder(var_core_value_sig8061) {
            return var_core_value_sigF704("zOrder", var_core_value_sig8061), this;
          }
        })
      });
    }
    async insertChart(var_core_value_sig12F2) {
      let {
          config: var_core_value_sig2259,
          dataSource: var_core_value_sig9E2F,
          position: var_core_value_sigD082,
          size: var_core_value_sigDBB7,
          placeholder: var_core_value_sigD0A8,
          stroke: var_core_value_sigF4B9,
          zOrder: var_core_value_sig5CEE
        } = var_core_value_sig12F2,
        var_core_value_sigE92A = null;
      try {
        var_core_value_sigE92A = var_core_value_sig9E2F.values ? null : await this._resolveReferencedValues(var_core_value_sig9E2F.source);
        let {
          chart: var_core_value_sig2BCF,
          dataSource: var_core_value_sig0D69,
          element: var_core_value_sig480E,
          unitId: var_core_value_sig26DB,
          subUnitId: var_core_value_sigF0F9
        } = O(this._slideModel["getUnitId"](), this.getId(), {
          ...var_core_value_sig2259,
          data: var_core_value_sig9E2F.values ?? var_core_value_sigE92A.values,
          dataSource: var_core_value_sig9E2F,
          position: var_core_value_sigD082,
          size: var_core_value_sigDBB7,
          placeholder: var_core_value_sigD0A8,
          stroke: var_core_value_sigF4B9
        });
        if (!this._injector["get"](var_core_value_sigB33B).syncExecuteCommand(var_core_value_sigCE71.id, {
          unitId: var_core_value_sig26DB,
          subUnitId: var_core_value_sigF0F9,
          chart: var_core_value_sig2BCF,
          dataSource: var_core_value_sig0D69,
          element: var_core_value_sig480E,
          insertIndex: var_core_value_sig5CEE
        })) throw Error("Failed to insert Slide chart.");
        return this.getChart(var_core_value_sig2BCF.id);
      } finally {
        var_core_value_sigE92A == null || var_core_value_sigE92A.handle["dispose"]();
      }
    }
    getChart(var_core_value_sig362B) {
      return this.getCharts().find(var_core_value_sig1A0F => var_core_value_sig1A0F.getId() === var_core_value_sig362B || var_core_value_sig1A0F.getElementId() === var_core_value_sig362B) ?? null;
    }
    getCharts() {
      let var_core_value_sig5CA5 = this._slideModel["getUnitId"](),
        var_core_value_sigE90F = this.getId(),
        {
          elementOrder: var_core_value_sigEFD4,
          elements: var_core_value_sig861B
        } = this.getData();
      return var_core_value_sigEFD4.map(var_core_value_sigFBA4 => var_core_value_sig861B[var_core_value_sigFBA4]).filter(var_core_value_sig4383 => (var_core_value_sig4383 == null ? undefined : var_core_value_sig4383.type) === var_core_value_sigF564.Chart).map(var_core_value_sig186C => this._injector["createInstance"](E, var_core_value_sig5CA5, var_core_value_sigE90F, var_core_value_sig186C.chartId, var_core_value_sig186C.id, this._slideModel, this._injector));
    }
    async _resolveReferencedValues(var_core_value_sig5237) {
      let var_core_value_sigBB00 = this._injector["get"](var_core_value_sig7F72).acquire(var_core_value_sig5237);
      try {
        let var_core_value_sigD955 = await var_core_value_sig273D(var_core_value_sigBB00.state$["pipe"](var_core_value_sigEF3E(({
          status: var_core_value_sig4D4C
        }) => var_core_value_sig4D4C !== var_core_value_sig1B22.LOADING)));
        if (var_core_value_sigD955.status !== var_core_value_sig1B22.READY || !var_core_value_sigD955.values) throw var_core_value_sigD955.error instanceof Error ? var_core_value_sigD955.error : Error(var_core_value_sig5237.kind);
        return {
          values: var_core_value_sigD955.values["map"](var_core_value_sigC9E0 => [...var_core_value_sigC9E0]),
          handle: var_core_value_sigBB00
        };
      } catch (var_core_value_sig48BD) {
        throw var_core_value_sigBB00.dispose(), var_core_value_sig48BD;
      }
    }
  };
var_core_value_sigD7EA.extend(D);
function O(var_core_value_sig32F8, var_core_value_sig5B67, var_core_value_sig1758) {
  var var_core_value_sig4805, var_core_value_sigE67E, var_core_value_sig2902, var_core_value_sig9989, var_core_value_sig698E;
  let var_core_value_sig2809 = Array.isArray(var_core_value_sig1758.data) ? var_core_value_sig1758.data : var_core_value_sig1758.data["values"];
  if (var_core_value_sig2809.length === 0) throw Error("Chart data source values are required to insert a chart.");
  let [, ...var_core_value_sig2DAB] = var_core_value_sig2809,
    var_core_value_sig877E = var_core_value_sigA5F1(var_core_value_sig1758, {
      series: (var_core_value_sig2809[0] ?? []).slice(1).map((var_core_value_sig7E54, var_core_value_sig9A8D) => {
        let var_core_value_sigC259 = 1 + var_core_value_sig9A8D;
        return {
          index: var_core_value_sigC259,
          name: String(var_core_value_sig7E54 ?? ""),
          items: var_core_value_sig2DAB.map(var_core_value_sig429F => var_core_value_sig06CD(var_core_value_sig429F[var_core_value_sigC259]))
        };
      })
    }),
    var_core_value_sig20C8 = var_core_value_sig1758.id ?? var_core_value_sigE627(var_core_value_sig97A2),
    var_core_value_sigE9A7 = var_core_value_sig1758.dataSourceId ?? var_core_value_sigE627(var_core_value_sig97A2),
    var_core_value_sigBECE = var_core_value_sig1758.elementId ?? var_core_value_sigE627(var_core_value_sig97A2);
  return {
    unitId: var_core_value_sig32F8,
    subUnitId: var_core_value_sig5B67,
    chart: {
      id: var_core_value_sig20C8,
      dataSourceId: var_core_value_sigE9A7,
      chartType: var_core_value_sig877E.chartType,
      style: var_core_value_sig877E.style,
      context: {
        chartContext: var_core_value_sig877E.context
      },
      dataAggregation: var_core_value_sig877E.dataAggregation
    },
    dataSource: (var_core_value_sig4805 = var_core_value_sig1758.dataSource) != null && var_core_value_sig4805.source ? {
      id: var_core_value_sigE9A7,
      source: var_core_value_sig1758.dataSource["source"]
    } : {
      id: var_core_value_sigE9A7,
      values: var_core_value_sig2809,
      name: Array.isArray(var_core_value_sig1758.data) ? undefined : var_core_value_sig1758.data["name"]
    },
    element: {
      id: var_core_value_sigBECE,
      type: var_core_value_sigF564.Chart,
      chartId: var_core_value_sig20C8,
      transform: {
        left: ((var_core_value_sigE67E = var_core_value_sig1758.position) == null ? undefined : var_core_value_sigE67E.x) ?? var_core_value_sig2E11,
        top: ((var_core_value_sig2902 = var_core_value_sig1758.position) == null ? undefined : var_core_value_sig2902.y) ?? var_core_value_sig5B69,
        width: ((var_core_value_sig9989 = var_core_value_sig1758.size) == null ? undefined : var_core_value_sig9989.width) ?? var_core_value_sigB098,
        height: ((var_core_value_sig698E = var_core_value_sig1758.size) == null ? undefined : var_core_value_sig698E.height) ?? var_core_value_sig8CFA
      },
      placeholder: var_core_value_sig1758.placeholder,
      stroke: var_core_value_sig1758.stroke
    }
  };
}
export { E as FSlideChart };
