import { DocChartInsertAnchorKind, DocChartParagraphPosition, DocumentChartConfigAdapter, InsertDocChartCommand, assertValidOptionalDocChartSize, normalizeDocumentChartValues } from "@univerjs-pro/docs-chart";
import { ChartDataSourceRuntimeStatus, ChartResourceRepository, ChartTypeBits, IChartDataSourceRuntimeService, ResourceRefChartDataSourceAdapter, toChartDataItem, toChartModelConfig } from "@univerjs-pro/engine-chart";
import { FChart, createChartBuilder } from "@univerjs-pro/engine-chart/facade";
import { DrawingTypeEnum, ICommandService, PositionedObjectLayoutType, Tools, getParagraphContentStartOffset } from "@univerjs/core";
import { DocSelectionManagerService, normalizeTextRange } from "@univerjs/docs";
import { FDocument } from "@univerjs/docs/facade";
import { filter, firstValueFrom } from "rxjs";
import { FEnum } from "@univerjs/core/facade";
function E(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688) {
  "@babel/helpers - typeof";

  return E = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646) {
    return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646;
  } : function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648 && typeof Symbol == "function" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648.constructor === Symbol && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648 !== Symbol.prototype ? "symbol" : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648;
  }, E(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688);
}
function D(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691) {
  if (E(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690) != "object" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690;
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690[Symbol.toPrimitive];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692 !== undefined) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691 || "default");
    if (E(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693) != "object") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691 === "string" ? String : Number)(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690);
}
function O(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699 = D(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698, "string");
  return E(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699) == "symbol" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699 + "";
}
function k(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103 = O(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103)) in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102 ? Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103, {
    value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102;
}
var A = class extends FChart {
    constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653) {
      super(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652, () => new DocumentChartConfigAdapter({
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650.getUnitId(),
        chartId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652,
        drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651,
        documentDataModel: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650,
        injector: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653
      }), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629) => createChartBuilder({
        info: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627,
        description: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628,
        type: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629,
        normalizeSource: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610 => Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610) ? {
          values: Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610)
        } : {
          source: ResourceRefChartDataSourceAdapter.toReference(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610)
        },
        extension: ({
          getInfo: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611,
          setInfo: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612,
          setAbsolutePosition: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613,
          setSize: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614
        }) => ({
          setPosition(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46) {
            return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612("anchor", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46), this;
          },
          setLayout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462) {
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462.position && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462.position["x"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462.position["y"]);
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611("size"),
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462.width ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463.width),
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462.height ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463.height);
            return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464 !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465 !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612("layoutType", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462.layoutType), this;
          },
          setInline() {
            return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612("layoutType", PositionedObjectLayoutType.INLINE), this;
          },
          setFloating() {
            return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612("layoutType", PositionedObjectLayoutType.WRAP_SQUARE), this;
          }
        })
      }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653), this._documentDataModel = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650, this._drawingId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651, this._chartId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652, k(this, "unitId", undefined), this.unitId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650.getUnitId();
    }
    getDrawingId() {
      return this._drawingId;
    }
  },
  j = class extends FDocument {
    newChart(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658) {
      return createChartBuilder({
        type: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658,
        injector: this._injector,
        commitError: "Insert the document chart before updating it.",
        normalizeSource: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630 => Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630) ? {
          values: Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630)
        } : {
          source: ResourceRefChartDataSourceAdapter.toReference(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630)
        },
        createInfo: () => ({
          anchor: undefined,
          layoutType: undefined
        }),
        extension: ({
          getInfo: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631,
          setInfo: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632,
          setAbsolutePosition: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633,
          setSize: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634
        }) => ({
          setPosition(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615) {
            return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632("anchor", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615), this;
          },
          setLayout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617) {
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617.position && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617.position["x"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617.position["y"]);
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631("size"),
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617.width ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618.width),
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617.height ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618.height);
            return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619 !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620 !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632("layoutType", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617.layoutType), this;
          },
          setInline() {
            return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632("layoutType", PositionedObjectLayoutType.INLINE), this;
          },
          setFloating() {
            return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632("layoutType", PositionedObjectLayoutType.WRAP_SQUARE), this;
          }
        })
      });
    }
    async insertChart(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661 = null;
      try {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660.dataSource["values"] ? null : await this._resolveReferencedValues(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660.dataSource["source"]);
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635 = M(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660.dataSource["values"] ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661.values),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636 = normalizeDocumentChartValues(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635.values);
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636.length === 0) throw Error("Document chart values are required.");
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637 = this.getDocumentDataModel(),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638 = P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637, this._injector, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635.insert),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639 = this._injector["get"](ICommandService).syncExecuteCommand(InsertDocChartCommand.id, {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637.getUnitId(),
            chart: {
              chartType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635.chartType ?? ChartTypeBits.Column,
              style: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635.style,
              context: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635.context,
              dataAggregation: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635.dataAggregation
            },
            dataSource: {
              ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635.dataSource ?? {
                values: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636
              })
            },
            textRange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638.textRange,
            drawing: {
              layoutType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638.layout["layoutType"]
            },
            width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638.layout["width"],
            height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638.layout["height"],
            position: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638.layout["position"]
          });
        if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639) throw Error("Failed to insert document chart.");
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640 = this.getChart(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639.chartId);
        if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640) throw Error('Inserted document chart "' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639.chartId + '" was not found.');
        return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640;
      } finally {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661.handle["dispose"]();
      }
    }
    getChart(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665 = this.getDocumentDataModel(),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666 = B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664);
      return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666 || !this._getChartResource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666.chartId) ? null : this._injector["createInstance"](A, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666.drawingId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666.chartId, this._injector);
    }
    getCharts() {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670 = this.getDocumentDataModel(),
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670.getDrawings() ?? {};
      return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670.getDrawingsOrder() ?? Object.keys(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB)).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641 => var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641]).filter(V).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642 => this._getChartResource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642.chartId) != null).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643 => this._injector["createInstance"](A, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643.drawingId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643.chartId, this._injector));
    }
    _getChartResource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672) {
      return this._injector["get"](ChartResourceRepository).getChart(this.getDocumentDataModel().getUnitId(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672);
    }
    async _resolveReferencedValues(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675 = this._injector["get"](IChartDataSourceRuntimeService).acquire(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674);
      try {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644 = await firstValueFrom(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675.state$["pipe"](filter(({
          status: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625
        }) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625 !== ChartDataSourceRuntimeStatus.LOADING)));
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644.status !== ChartDataSourceRuntimeStatus.READY || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644.values) throw var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644.error instanceof Error ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644.error : Error(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674.kind);
        return {
          values: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644.values["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626 => [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626]),
          handle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675
        };
      } catch (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC5) {
        throw var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675.dispose(), var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC5;
      }
    }
  };
function M(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111;
  return N(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108.config, {
    anchor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108.anchor,
    layout: {
      width: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108.size) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110.width,
      height: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108.size) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111.height,
      layoutType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108.layoutType,
      position: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108.position
    }
  }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108.dataSource);
}
function N(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118,
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120[0] ?? []).slice(1).map((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679) => {
      let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB = 1 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679;
      return {
        index: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB,
        name: String(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678 ?? ""),
        items: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120.slice(1).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645 => toChartDataItem(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645[var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB]))
      };
    }),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46121 = toChartModelConfig({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116,
      series: Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116.series)
    }, {
      series: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A
    });
  return {
    values: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120,
    dataSource: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119,
    chartType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46121.chartType,
    style: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46121.style,
    context: {
      chartContext: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46121.context
    },
    dataAggregation: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46121.dataAggregation,
    insert: {
      at: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117.anchor,
      layout: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117.layout
    }
  };
}
function P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.at;
  return {
    textRange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135 ? I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135) : F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129),
    layout: z({
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.layout) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131.width,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.layout) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132.height,
      layoutType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.layout) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133.layoutType,
      position: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.layout) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134.position
    })
  };
}
function F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144.get(DocSelectionManagerService).getActiveTextRange();
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145.segmentId == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145.segmentId === "") ? normalizeTextRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145) : L(0);
}
function I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150.kind === DocChartInsertAnchorKind.Selection) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149.get(DocSelectionManagerService).getActiveTextRange();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682) throw Error("Cannot insert document chart at selection because there is no active text range.");
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682.segmentId != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682.segmentId !== "") throw Error("Document chart insertion currently supports the body segment only.");
    return normalizeTextRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682);
  }
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150.kind === DocChartInsertAnchorKind.Paragraph) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148.getBody(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683.paragraphs) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150.index];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684) throw Error("Document paragraph at index " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150.index + " was not found.");
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683 ? getParagraphContentStartOffset(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684) : 0;
    return L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150.where === DocChartParagraphPosition.Before ? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684.startIndex);
  }
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150.kind === DocChartInsertAnchorKind.TextRange) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150.endOffset ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150.startOffset;
    return R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150.startOffset), R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685), {
      startOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150.startOffset,
      endOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685,
      collapsed: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150.collapsed ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150.startOffset === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685,
      segmentId: ""
    };
  }
  return R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150.offset), L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150.offset);
}
function L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156) {
  return R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156), {
    startOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156,
    endOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156,
    collapsed: true,
    segmentId: ""
  };
}
function R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158) {
  if (!Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158 < 0) throw Error('Document chart insertion offset must be a non-negative finite number, got "' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158 + "\x22.");
}
function z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46160) {
  if (assertValidOptionalDocChartSize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46160.width), assertValidOptionalDocChartSize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46160.height), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46160.position && (!Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46160.position["x"]) || !Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46160.position["y"]))) throw Error("Document chart position must contain finite x and y values.");
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46160;
}
function B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162.getDrawings() ?? {},
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163];
  return V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164 : Object.values(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686).find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687 => V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687.chartId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163) ?? null;
}
function V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168.drawingType) === DrawingTypeEnum.DRAWING_CHART && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168.chartId == "string";
}
export { A as FDocumentChart };
export { j };
