Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
let e = require("@univerjs-pro/docs-chart"),
  t = require("@univerjs-pro/engine-chart"),
  n = require("@univerjs-pro/engine-chart/facade"),
  r = require("@univerjs/core"),
  i = require("@univerjs/docs"),
  a = require("@univerjs/docs/facade"),
  o = require("rxjs"),
  s = require("@univerjs/core/facade");
function c(var_core_value_sig86D0) {
  "@babel/helpers - typeof";

  return c = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sigF9C7) {
    return typeof var_core_value_sigF9C7;
  } : function (var_core_value_sig8895) {
    return var_core_value_sig8895 && typeof Symbol == "function" && var_core_value_sig8895.constructor === Symbol && var_core_value_sig8895 !== Symbol.prototype ? "symbol" : typeof var_core_value_sig8895;
  }, c(var_core_value_sig86D0);
}
function l(var_core_value_sig4CD2, var_core_value_sig48CA) {
  if (c(var_core_value_sig4CD2) != "object" || !var_core_value_sig4CD2) return var_core_value_sig4CD2;
  var var_core_value_sig50AF = var_core_value_sig4CD2[Symbol.toPrimitive];
  if (var_core_value_sig50AF !== undefined) {
    var var_core_value_sigA942 = var_core_value_sig50AF.call(var_core_value_sig4CD2, var_core_value_sig48CA || "default");
    if (c(var_core_value_sigA942) != "object") return var_core_value_sigA942;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sig48CA === "string" ? String : Number)(var_core_value_sig4CD2);
}
function u(var_core_value_sigA621) {
  var var_core_value_sigBBFF = l(var_core_value_sigA621, "string");
  return c(var_core_value_sigBBFF) == "symbol" ? var_core_value_sigBBFF : var_core_value_sigBBFF + "";
}
function d(var_core_value_sig8889, var_core_value_sig32F8, var_core_value_sig5B67) {
  return (var_core_value_sig32F8 = u(var_core_value_sig32F8)) in var_core_value_sig8889 ? Object.defineProperty(var_core_value_sig8889, var_core_value_sig32F8, {
    value: var_core_value_sig5B67,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sig8889[var_core_value_sig32F8] = var_core_value_sig5B67, var_core_value_sig8889;
}
var f = class extends n.FChart {
    constructor(var_core_value_sigC80B, var_core_value_sig284F, var_core_value_sigE154, var_core_value_sig4632) {
      super(var_core_value_sigE154, () => new e["DocumentChartConfigAdapter"]({
        unitId: var_core_value_sigC80B.getUnitId(),
        chartId: var_core_value_sigE154,
        drawingId: var_core_value_sig284F,
        documentDataModel: var_core_value_sigC80B,
        injector: var_core_value_sig4632
      }), (var_core_value_sig480E, var_core_value_sig26DB, var_core_value_sigF0F9) => (0, n.createChartBuilder)({
        info: var_core_value_sig480E,
        description: var_core_value_sig26DB,
        type: var_core_value_sigF0F9,
        normalizeSource: var_core_value_sig3D7D => Array.isArray(var_core_value_sig3D7D) ? {
          values: r.Tools["deepClone"](var_core_value_sig3D7D)
        } : {
          source: t.ResourceRefChartDataSourceAdapter["toReference"](var_core_value_sig3D7D)
        },
        extension: ({
          getInfo: var_core_value_sig27E5,
          setInfo: var_core_value_sig8061,
          setAbsolutePosition: var_core_value_sig4D4C,
          setSize: var_core_value_sigC9E0
        }) => ({
          setPosition(var_core_value_sig7524) {
            return var_core_value_sig8061("anchor", var_core_value_sig7524), this;
          },
          setLayout(var_core_value_sig2AD8) {
            var_core_value_sig2AD8.position && var_core_value_sig4D4C(var_core_value_sig2AD8.position["x"], var_core_value_sig2AD8.position["y"]);
            let var_core_value_sig2AD0 = var_core_value_sig27E5("size"),
              var_core_value_sig3EEE = var_core_value_sig2AD8.width ?? (var_core_value_sig2AD0 == null ? undefined : var_core_value_sig2AD0.width),
              var_core_value_sigBC46 = var_core_value_sig2AD8.height ?? (var_core_value_sig2AD0 == null ? undefined : var_core_value_sig2AD0.height);
            return var_core_value_sig3EEE !== undefined && var_core_value_sigBC46 !== undefined && var_core_value_sigC9E0(var_core_value_sig3EEE, var_core_value_sigBC46), var_core_value_sig8061("layoutType", var_core_value_sig2AD8.layoutType), this;
          },
          setInline() {
            return var_core_value_sig8061("layoutType", r.PositionedObjectLayoutType["INLINE"]), this;
          },
          setFloating() {
            return var_core_value_sig8061("layoutType", r.PositionedObjectLayoutType["WRAP_SQUARE"]), this;
          }
        })
      }), var_core_value_sig4632), this._documentDataModel = var_core_value_sigC80B, this._drawingId = var_core_value_sig284F, this._chartId = var_core_value_sigE154, d(this, "unitId", undefined), this.unitId = var_core_value_sigC80B.getUnitId();
    }
    getDrawingId() {
      return this._drawingId;
    }
  },
  p = class extends a.FDocument {
    newChart(var_core_value_sig12F2) {
      return (0, n.createChartBuilder)({
        type: var_core_value_sig12F2,
        injector: this._injector,
        commitError: "Insert\x20the\x20document\x20chart\x20before\x20updating\x20it.",
        normalizeSource: var_core_value_sig1A0F => Array.isArray(var_core_value_sig1A0F) ? {
          values: r.Tools["deepClone"](var_core_value_sig1A0F)
        } : {
          source: t.ResourceRefChartDataSourceAdapter["toReference"](var_core_value_sig1A0F)
        },
        createInfo: () => ({
          anchor: undefined,
          layoutType: undefined
        }),
        extension: ({
          getInfo: var_core_value_sigFBA4,
          setInfo: var_core_value_sig4383,
          setAbsolutePosition: var_core_value_sig186C,
          setSize: var_core_value_sigD955
        }) => ({
          setPosition(var_core_value_sig76BA) {
            return var_core_value_sig4383("anchor", var_core_value_sig76BA), this;
          },
          setLayout(var_core_value_sigFBFA) {
            var_core_value_sigFBFA.position && var_core_value_sig186C(var_core_value_sigFBFA.position["x"], var_core_value_sigFBFA.position["y"]);
            let var_core_value_sigF602 = var_core_value_sigFBA4("size"),
              var_core_value_sig1BBD = var_core_value_sigFBFA.width ?? (var_core_value_sigF602 == null ? undefined : var_core_value_sigF602.width),
              var_core_value_sigF704 = var_core_value_sigFBFA.height ?? (var_core_value_sigF602 == null ? undefined : var_core_value_sigF602.height);
            return var_core_value_sig1BBD !== undefined && var_core_value_sigF704 !== undefined && var_core_value_sigD955(var_core_value_sig1BBD, var_core_value_sigF704), var_core_value_sig4383("layoutType", var_core_value_sigFBFA.layoutType), this;
          },
          setInline() {
            return var_core_value_sig4383("layoutType", r.PositionedObjectLayoutType["INLINE"]), this;
          },
          setFloating() {
            return var_core_value_sig4383("layoutType", r.PositionedObjectLayoutType["WRAP_SQUARE"]), this;
          }
        })
      });
    }
    async insertChart(var_core_value_sig2259) {
      let var_core_value_sig9E2F = null;
      try {
        var_core_value_sig9E2F = var_core_value_sig2259.dataSource["values"] ? null : await this._resolveReferencedValues(var_core_value_sig2259.dataSource["source"]);
        let var_core_value_sig48BD = m(var_core_value_sig2259, var_core_value_sig2259.dataSource["values"] ?? var_core_value_sig9E2F.values),
          var_core_value_sig429F = (0, e.normalizeDocumentChartValues)(var_core_value_sig48BD.values);
        if (var_core_value_sig429F.length === 0) throw Error("Document chart values are required.");
        let var_core_value_sigF62A = this.getDocumentDataModel(),
          var_core_value_sig8178 = g(var_core_value_sigF62A, this._injector, var_core_value_sig48BD.insert),
          var_core_value_sigE9ED = this._injector["get"](r.ICommandService).syncExecuteCommand(e.InsertDocChartCommand["id"], {
            unitId: var_core_value_sigF62A.getUnitId(),
            chart: {
              chartType: var_core_value_sig48BD.chartType ?? t.ChartTypeBits["Column"],
              style: var_core_value_sig48BD.style,
              context: var_core_value_sig48BD.context,
              dataAggregation: var_core_value_sig48BD.dataAggregation
            },
            dataSource: {
              ...(var_core_value_sig48BD.dataSource ?? {
                values: var_core_value_sig429F
              })
            },
            textRange: var_core_value_sig8178.textRange,
            drawing: {
              layoutType: var_core_value_sig8178.layout["layoutType"]
            },
            width: var_core_value_sig8178.layout["width"],
            height: var_core_value_sig8178.layout["height"],
            position: var_core_value_sig8178.layout["position"]
          });
        if (!var_core_value_sigE9ED) throw Error("Failed to insert document chart.");
        let var_core_value_sigB577 = this.getChart(var_core_value_sigE9ED.chartId);
        if (!var_core_value_sigB577) throw Error('Inserted document chart "' + var_core_value_sigE9ED.chartId + '" was not found.');
        return var_core_value_sigB577;
      } finally {
        var_core_value_sig9E2F == null || var_core_value_sig9E2F.handle["dispose"]();
      }
    }
    getChart(var_core_value_sigD082) {
      let var_core_value_sigDBB7 = this.getDocumentDataModel(),
        var_core_value_sigD0A8 = S(var_core_value_sigDBB7, var_core_value_sigD082);
      return !var_core_value_sigD0A8 || !this._getChartResource(var_core_value_sigD0A8.chartId) ? null : this._injector["createInstance"](f, var_core_value_sigDBB7, var_core_value_sigD0A8.drawingId, var_core_value_sigD0A8.chartId, this._injector);
    }
    getCharts() {
      let var_core_value_sigF4B9 = this.getDocumentDataModel(),
        var_core_value_sig5CEE = var_core_value_sigF4B9.getDrawings() ?? {};
      return (var_core_value_sigF4B9.getDrawingsOrder() ?? Object.keys(var_core_value_sig5CEE)).map(var_core_value_sig9572 => var_core_value_sig5CEE[var_core_value_sig9572]).filter(C).filter(var_core_value_sigD873 => this._getChartResource(var_core_value_sigD873.chartId) != null).map(var_core_value_sigA12B => this._injector["createInstance"](f, var_core_value_sigF4B9, var_core_value_sigA12B.drawingId, var_core_value_sigA12B.chartId, this._injector));
    }
    _getChartResource(var_core_value_sigE92A) {
      return this._injector["get"](t.ChartResourceRepository).getChart(this.getDocumentDataModel().getUnitId(), var_core_value_sigE92A);
    }
    async _resolveReferencedValues(var_core_value_sig362B) {
      let var_core_value_sig5CA5 = this._injector["get"](t.IChartDataSourceRuntimeService).acquire(var_core_value_sig362B);
      try {
        let var_core_value_sigF230 = await (0, o.firstValueFrom)(var_core_value_sig5CA5.state$["pipe"]((0, o.filter)(({
          status: var_core_value_sig2BCF
        }) => var_core_value_sig2BCF !== t.ChartDataSourceRuntimeStatus["LOADING"])));
        if (var_core_value_sigF230.status !== t.ChartDataSourceRuntimeStatus["READY"] || !var_core_value_sigF230.values) throw var_core_value_sigF230.error instanceof Error ? var_core_value_sigF230.error : Error(var_core_value_sig362B.kind);
        return {
          values: var_core_value_sigF230.values["map"](var_core_value_sig0D69 => [...var_core_value_sig0D69]),
          handle: var_core_value_sig5CA5
        };
      } catch (var_core_value_sig09B8) {
        throw var_core_value_sig5CA5.dispose(), var_core_value_sig09B8;
      }
    }
  };
function m(var_core_value_sig1758, var_core_value_sig4805) {
  var var_core_value_sigE67E, var_core_value_sig2902;
  return h(var_core_value_sig1758.config, {
    anchor: var_core_value_sig1758.anchor,
    layout: {
      width: (var_core_value_sigE67E = var_core_value_sig1758.size) == null ? undefined : var_core_value_sigE67E.width,
      height: (var_core_value_sig2902 = var_core_value_sig1758.size) == null ? undefined : var_core_value_sig2902.height,
      layoutType: var_core_value_sig1758.layoutType,
      position: var_core_value_sig1758.position
    }
  }, var_core_value_sig4805, var_core_value_sig1758.dataSource);
}
function h(var_core_value_sig9989, var_core_value_sig698E, var_core_value_sig2809, var_core_value_sig2DAB) {
  let var_core_value_sig877E = var_core_value_sig2809,
    var_core_value_sig20C8 = (var_core_value_sig877E[0] ?? []).slice(1).map((var_core_value_sigE90F, var_core_value_sigEFD4) => {
      let var_core_value_sig861B = 1 + var_core_value_sigEFD4;
      return {
        index: var_core_value_sig861B,
        name: String(var_core_value_sigE90F ?? ""),
        items: var_core_value_sig877E.slice(1).map(var_core_value_sig6F91 => (0, t.toChartDataItem)(var_core_value_sig6F91[var_core_value_sig861B]))
      };
    }),
    var_core_value_sigE9A7 = (0, t.toChartModelConfig)({
      ...var_core_value_sig9989,
      series: r.Tools["deepClone"](var_core_value_sig9989.series)
    }, {
      series: var_core_value_sig20C8
    });
  return {
    values: var_core_value_sig877E,
    dataSource: var_core_value_sig2DAB,
    chartType: var_core_value_sigE9A7.chartType,
    style: var_core_value_sigE9A7.style,
    context: {
      chartContext: var_core_value_sigE9A7.context
    },
    dataAggregation: var_core_value_sigE9A7.dataAggregation,
    insert: {
      at: var_core_value_sig698E.anchor,
      layout: var_core_value_sig698E.layout
    }
  };
}
function g(var_core_value_sigBECE, var_core_value_sig1B22, var_core_value_sig7F72) {
  var var_core_value_sig7B2A, var_core_value_sig06CD, var_core_value_sigA5F1, var_core_value_sig97A2;
  let var_core_value_sig07E9 = var_core_value_sig7F72 == null ? undefined : var_core_value_sig7F72.at;
  return {
    textRange: var_core_value_sig07E9 ? v(var_core_value_sigBECE, var_core_value_sig1B22, var_core_value_sig07E9) : _(var_core_value_sig1B22),
    layout: x({
      width: var_core_value_sig7F72 == null || (var_core_value_sig7B2A = var_core_value_sig7F72.layout) == null ? undefined : var_core_value_sig7B2A.width,
      height: var_core_value_sig7F72 == null || (var_core_value_sig06CD = var_core_value_sig7F72.layout) == null ? undefined : var_core_value_sig06CD.height,
      layoutType: var_core_value_sig7F72 == null || (var_core_value_sigA5F1 = var_core_value_sig7F72.layout) == null ? undefined : var_core_value_sigA5F1.layoutType,
      position: var_core_value_sig7F72 == null || (var_core_value_sig97A2 = var_core_value_sig7F72.layout) == null ? undefined : var_core_value_sig97A2.position
    })
  };
}
function _(var_core_value_sig4F59) {
  let var_core_value_sigF564 = var_core_value_sig4F59.get(i.DocSelectionManagerService).getActiveTextRange();
  return var_core_value_sigF564 && (var_core_value_sigF564.segmentId == null || var_core_value_sigF564.segmentId === "") ? (0, i.normalizeTextRange)(var_core_value_sigF564) : y(0);
}
function v(var_core_value_sig8CFA, var_core_value_sig2E11, var_core_value_sig5B69) {
  if (var_core_value_sig5B69.kind === e.DocChartInsertAnchorKind["Selection"]) {
    let var_core_value_sig5237 = var_core_value_sig2E11.get(i.DocSelectionManagerService).getActiveTextRange();
    if (!var_core_value_sig5237) throw Error("Cannot insert document chart at selection because there is no active text range.");
    if (var_core_value_sig5237.segmentId != null && var_core_value_sig5237.segmentId !== "") throw Error("Document chart insertion currently supports the body segment only.");
    return (0, i.normalizeTextRange)(var_core_value_sig5237);
  }
  if (var_core_value_sig5B69.kind === e.DocChartInsertAnchorKind["Paragraph"]) {
    var var_core_value_sigB098;
    let var_core_value_sigBB00 = var_core_value_sig8CFA.getBody(),
      var_core_value_sig7E54 = var_core_value_sigBB00 == null || (var_core_value_sigB098 = var_core_value_sigBB00.paragraphs) == null ? undefined : var_core_value_sigB098[var_core_value_sig5B69.index];
    if (!var_core_value_sig7E54) throw Error("Document paragraph at index " + var_core_value_sig5B69.index + "\x20was\x20not\x20found.");
    let var_core_value_sig9A8D = var_core_value_sigBB00 ? (0, r.getParagraphContentStartOffset)(var_core_value_sigBB00, var_core_value_sig7E54) : 0;
    return y(var_core_value_sig5B69.where === e.DocChartParagraphPosition["Before"] ? var_core_value_sig9A8D : var_core_value_sig7E54.startIndex);
  }
  if (var_core_value_sig5B69.kind === e.DocChartInsertAnchorKind["TextRange"]) {
    let var_core_value_sigC259 = var_core_value_sig5B69.endOffset ?? var_core_value_sig5B69.startOffset;
    return b(var_core_value_sig5B69.startOffset), b(var_core_value_sigC259), {
      startOffset: var_core_value_sig5B69.startOffset,
      endOffset: var_core_value_sigC259,
      collapsed: var_core_value_sig5B69.collapsed ?? var_core_value_sig5B69.startOffset === var_core_value_sigC259,
      segmentId: ""
    };
  }
  return b(var_core_value_sig5B69.offset), y(var_core_value_sig5B69.offset);
}
function y(var_core_value_sigCE71) {
  return b(var_core_value_sigCE71), {
    startOffset: var_core_value_sigCE71,
    endOffset: var_core_value_sigCE71,
    collapsed: true,
    segmentId: ""
  };
}
function b(var_core_value_sig21D8) {
  if (!Number.isFinite(var_core_value_sig21D8) || var_core_value_sig21D8 < 0) throw Error('Document chart insertion offset must be a non-negative finite number, got "' + var_core_value_sig21D8 + "\x22.");
}
function x(var_core_value_sig2B65) {
  if ((0, e.assertValidOptionalDocChartSize)(var_core_value_sig2B65.width), (0, e.assertValidOptionalDocChartSize)(var_core_value_sig2B65.height), var_core_value_sig2B65.position && (!Number.isFinite(var_core_value_sig2B65.position["x"]) || !Number.isFinite(var_core_value_sig2B65.position["y"]))) throw Error("Document\x20chart\x20position\x20must\x20contain\x20finite\x20x\x20and\x20y\x20values.");
  return var_core_value_sig2B65;
}
function S(var_core_value_sigD7EA, var_core_value_sigB33B) {
  let var_core_value_sig24B9 = var_core_value_sigD7EA.getDrawings() ?? {},
    var_core_value_sigE627 = var_core_value_sig24B9[var_core_value_sigB33B];
  return C(var_core_value_sigE627) ? var_core_value_sigE627 : Object.values(var_core_value_sig24B9).map(var_core_value_sig9C9F => var_core_value_sig9C9F).find(var_core_value_sigFDEA => C(var_core_value_sigFDEA) && var_core_value_sigFDEA.chartId === var_core_value_sigB33B) ?? null;
}
function C(var_core_value_sigEF3E) {
  return (var_core_value_sigEF3E == null ? undefined : var_core_value_sigEF3E.drawingType) === r.DrawingTypeEnum["DRAWING_CHART"] && typeof var_core_value_sigEF3E.chartId == "string";
}
a.FDocument["extend"](p);
var w = class extends s.FEnum {
  get DocsChartInsertAnchorKind() {
    return e.DocChartInsertAnchorKind;
  }
  get DocsChartLayoutType() {
    return r.PositionedObjectLayoutType;
  }
};
s.FEnum["extend"](w), exports.FDocumentChart = f;
