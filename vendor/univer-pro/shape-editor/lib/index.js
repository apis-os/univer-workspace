import { IShapeHostAdapterRegistry as var_core_value_sig48DD, ShapeArrowSizeEnum as var_core_value_sig5E6A, ShapeArrowTypeEnum as var_core_value_sigB7FC, ShapeFillEnum as var_core_value_sig9CD9, ShapeLineDashEnum as var_core_value_sigFD0C, ShapeLineTypeEnum as var_core_value_sig849B, ShapeModel as var_core_value_sig5F1A, ShapeTextAutoFitType as var_core_value_sigB455, ShapeTextDirection as var_core_value_sig5241, ShapeTextWrapType as var_core_value_sigC6E5, ShapeTypeEnum as var_core_value_sigCEFB, UniverShapePlugin as var_core_value_sig1537, isConnectorShape as var_core_value_sigE4C6, isShapeHostType as var_core_value_sig4313 } from "@univerjs-pro/engine-shape";
import { DependentOn as var_core_value_sigFC87, Disposable as var_core_value_sig156F, HorizontalAlign as var_core_value_sigDD51, IConfigService as var_core_value_sigF057, IUniverInstanceService as var_core_value_sig72F6, Inject as var_core_value_sig9FBA, Injector as var_core_value_sigFE01, Plugin as var_core_value_sigA2CE, UniverInstanceType as var_core_value_sig1975, VerticalAlign as var_core_value_sig6EA1, createParagraphId as var_core_value_sig029F, merge as var_core_value_sig3767, touchDependencies as var_core_value_sig670B } from "@univerjs/core";
import { FormulaCacheEligibilityService as var_core_value_sig6912, FormulaLastValuePersistenceService as var_core_value_sigE235, HostExternalReferenceModel as var_core_value_sig7664, UniverProFormulaEnginePlugin as var_core_value_sig2281, getScalarFormulaResultCell as var_core_value_sig5E86, resolveFormulaResultPresentation as var_core_value_sig6998, toFormulaLastValue as var_core_value_sigF639 } from "@univerjs-pro/engine-formula";
import { UniverLicensePlugin as var_core_value_sigEAE5 } from "@univerjs-pro/license";
import { OtherFormulaBizType as var_core_value_sigE94C, RegisterOtherFormulaService as var_core_value_sig6D47 } from "@univerjs/engine-formula";
import { Subject as var_core_value_sigCB82 } from "rxjs";
const S = "shape-editor.config",
  C = {},
  w = {
    left: 8,
    right: 8,
    top: 4,
    bottom: 4
  };
function T(var_core_value_sig21D8, var_core_value_sig2B65, var_core_value_sigD7EA) {
  return {
    id: "shape-text-document",
    body: {
      dataStream: "\x0d\x0a",
      paragraphs: [{
        startIndex: 0,
        paragraphId: var_core_value_sig029F(new Set()),
        paragraphStyle: {
          horizontalAlign: var_core_value_sig21D8
        }
      }],
      textRuns: []
    },
    documentStyle: {
      ...(var_core_value_sigD7EA ? {
        textStyle: var_core_value_sigD7EA
      } : null),
      renderConfig: {
        horizontalAlign: var_core_value_sig21D8,
        verticalAlign: var_core_value_sig2B65
      }
    }
  };
}
function E(var_core_value_sigB33B) {
  let var_core_value_sig24B9 = var_core_value_sigDD51.LEFT,
    var_core_value_sigE627 = var_core_value_sigB33B.verticalAlign ?? var_core_value_sig6EA1.TOP;
  return {
    fill: var_core_value_sigB33B.fill ?? {
      fillType: var_core_value_sig9CD9.NoFill
    },
    isTextBox: true,
    shapeText: {
      isHorizontal: var_core_value_sigB33B.isHorizontal,
      textDirection: var_core_value_sigB33B.isHorizontal ? var_core_value_sig5241.Horz : var_core_value_sig5241.Vert,
      text: "",
      autoFitType: var_core_value_sigB455.SpAutoFit,
      textWrap: var_core_value_sigC6E5.None,
      dataModel: {
        ha: var_core_value_sig24B9,
        va: var_core_value_sigE627,
        doc: T(var_core_value_sig24B9, var_core_value_sigE627, var_core_value_sigB33B.textStyle)
      }
    },
    stroke: var_core_value_sigB33B.stroke ?? {
      lineStrokeType: var_core_value_sig849B.NoLine
    }
  };
}
function D(var_core_value_sigEF3E = {}) {
  return {
    ...E({
      fill: var_core_value_sigEF3E.fill,
      stroke: var_core_value_sigEF3E.stroke,
      isHorizontal: var_core_value_sigEF3E.isHorizontal ?? true,
      textStyle: var_core_value_sigEF3E.textStyle,
      verticalAlign: var_core_value_sigEF3E.verticalAlign ?? var_core_value_sig6EA1.MIDDLE
    }),
    textRectPadding: {
      ...w,
      ...var_core_value_sigEF3E.textRectPadding
    },
    formulaBinding: {
      formula: var_core_value_sigEF3E.formula ?? "",
      ...(var_core_value_sigEF3E.lastValue ? {
        lastValue: var_core_value_sigEF3E.lastValue
      } : null),
      ...(var_core_value_sigEF3E.numberFormatPattern ? {
        numberFormat: {
          pattern: var_core_value_sigEF3E.numberFormatPattern
        }
      } : null)
    }
  };
}
function O(var_core_value_sig273D, var_core_value_sig9A0D) {
  let var_core_value_sigA319 = D({
    fill: var_core_value_sig273D.fill,
    stroke: var_core_value_sig273D.stroke
  });
  return {
    ...var_core_value_sigA319,
    ...var_core_value_sig273D,
    isTextBox: true,
    shapeText: var_core_value_sig273D.shapeText ?? var_core_value_sigA319.shapeText,
    textRectPadding: var_core_value_sig273D.textRectPadding ?? var_core_value_sigA319.textRectPadding,
    formulaBinding: var_core_value_sig9A0D
  };
}
const k = 1.5,
  A = [{
    id: "black",
    accent: "#111827",
    dark: "#000000",
    filled: "#111827",
    softFill: "#f3f4f6",
    softStroke: "#6b7280"
  }, {
    id: "blue",
    accent: "#4472c4",
    dark: "#1f4e79",
    filled: "#4472c4",
    softFill: "#eaf1fb",
    softStroke: "#8faadc"
  }, {
    id: "orange",
    accent: "#ed7d31",
    dark: "#c55a11",
    filled: "#ed7d31",
    softFill: "#fbe5d6",
    softStroke: "#f4b183"
  }, {
    id: "gray",
    accent: "#a6a6a6",
    dark: "#595959",
    filled: "#808080",
    softFill: "#f2f2f2",
    softStroke: "#bfbfbf"
  }, {
    id: "yellow",
    accent: "#f2a900",
    dark: "#bf9000",
    filled: "#ffc000",
    softFill: "#fff8dc",
    softStroke: "#ffd966"
  }, {
    id: "light-blue",
    accent: "#5b9bd5",
    dark: "#2e75b6",
    filled: "#5b9bd5",
    softFill: "#edf4fb",
    softStroke: "#9dc3e6"
  }, {
    id: "green",
    accent: "#70ad47",
    dark: "#548235",
    filled: "#70ad47",
    softFill: "#edf7e6",
    softStroke: "#a9d18e"
  }];
function j(var_core_value_sig2D58) {
  return {
    fillType: var_core_value_sig9CD9.SolidFill,
    color: var_core_value_sig2D58,
    opacity: 1
  };
}
function M(var_core_value_sig223F, var_core_value_sigD749 = 2, var_core_value_sigCFFA = var_core_value_sigFD0C.Solid) {
  return {
    lineStrokeType: var_core_value_sig849B.SolidLine,
    color: var_core_value_sig223F,
    width: var_core_value_sigD749,
    opacity: 1,
    dashType: var_core_value_sigCFFA
  };
}
function N(var_core_value_sig58C1, var_core_value_sig5090, var_core_value_sigC368) {
  return {
    id: var_core_value_sig58C1,
    type: "shape",
    fill: j(var_core_value_sig5090),
    stroke: M(var_core_value_sigC368)
  };
}
function P(var_core_value_sigAD56, var_core_value_sigDB4A) {
  return {
    startArrow: {
      type: var_core_value_sigAD56,
      size: var_core_value_sig5E6A.Medium
    },
    endArrow: {
      type: var_core_value_sigDB4A,
      size: var_core_value_sig5E6A.Medium
    }
  };
}
const F = [N("shape-white-black", "#ffffff", "#111827"), N("shape-white-blue", "#ffffff", "#4472c4"), N("shape-white-orange", "#ffffff", "#ed7d31"), N("shape-white-gray", "#ffffff", "#a6a6a6"), N("shape-yellow-orange", "#fff2cc", "#f2a900"), N("shape-blue-blue", "#ddebf7", "#5b9bd5"), N("shape-green-green", "#e2f0d9", "#70ad47"), ...A.map(var_core_value_sig6418 => N("shape-soft-" + var_core_value_sig6418.id, var_core_value_sig6418.softFill, var_core_value_sig6418.softStroke)), ...A.map(var_core_value_sig1896 => N("shape-filled-" + var_core_value_sig1896.id, var_core_value_sig1896.filled, var_core_value_sig1896.dark)), ...A.map(var_core_value_sig0285 => N("shape-dark-" + var_core_value_sig0285.id, var_core_value_sig0285.dark, var_core_value_sig0285.accent))],
  I = [{
    id: "line-black-solid",
    type: "line",
    group: "solid",
    stroke: M("#111827", k),
    ln: P(var_core_value_sigB7FC.None, var_core_value_sigB7FC.None)
  }, {
    id: "line-blue-solid",
    type: "line",
    group: "solid",
    stroke: M("#4472c4", k),
    ln: P(var_core_value_sigB7FC.None, var_core_value_sigB7FC.None)
  }, {
    id: "line-orange-solid",
    type: "line",
    group: "solid",
    stroke: M("#ed7d31", k),
    ln: P(var_core_value_sigB7FC.None, var_core_value_sigB7FC.None)
  }, {
    id: "line-gray-solid",
    type: "line",
    group: "solid",
    stroke: M("#a6a6a6", k),
    ln: P(var_core_value_sigB7FC.None, var_core_value_sigB7FC.None)
  }, {
    id: "line-blue-end-arrow",
    type: "line",
    group: "solid",
    stroke: M("#4472c4", k),
    ln: P(var_core_value_sigB7FC.None, var_core_value_sigB7FC.Arrow)
  }, {
    id: "line-green-two-way-arrow",
    type: "line",
    group: "solid",
    stroke: M("#70ad47", k),
    ln: P(var_core_value_sigB7FC.Arrow, var_core_value_sigB7FC.Arrow)
  }, {
    id: "line-black-dashed",
    type: "line",
    group: "dashed",
    stroke: M("#111827", k, var_core_value_sigFD0C.Dash),
    ln: P(var_core_value_sigB7FC.None, var_core_value_sigB7FC.None)
  }, {
    id: "line-blue-dashed",
    type: "line",
    group: "dashed",
    stroke: M("#4472c4", k, var_core_value_sigFD0C.Dash),
    ln: P(var_core_value_sigB7FC.None, var_core_value_sigB7FC.None)
  }, {
    id: "line-gray-dashed",
    type: "line",
    group: "dashed",
    stroke: M("#a6a6a6", k, var_core_value_sigFD0C.Dash),
    ln: P(var_core_value_sigB7FC.None, var_core_value_sigB7FC.None)
  }, {
    id: "line-blue-dashed-end-arrow",
    type: "line",
    group: "dashed",
    stroke: M("#4472c4", k, var_core_value_sigFD0C.Dash),
    ln: P(var_core_value_sigB7FC.None, var_core_value_sigB7FC.Arrow)
  }, {
    id: "line-gray-dashed-end-arrow",
    type: "line",
    group: "dashed",
    stroke: M("#a6a6a6", k, var_core_value_sigFD0C.Dash),
    ln: P(var_core_value_sigB7FC.None, var_core_value_sigB7FC.Arrow)
  }, {
    id: "line-green-dashed-two-way-arrow",
    type: "line",
    group: "dashed",
    stroke: M("#70ad47", k, var_core_value_sigFD0C.Dash),
    ln: P(var_core_value_sigB7FC.Arrow, var_core_value_sigB7FC.Arrow)
  }],
  L = [{
    id: "text-body-black",
    type: "text",
    textStyle: {
      color: "#111827",
      fontSize: 18,
      bold: false
    }
  }, {
    id: "text-title-black",
    type: "text",
    textStyle: {
      color: "#111827",
      fontSize: 32,
      bold: true
    }
  }, {
    id: "text-accent-blue",
    type: "text",
    textStyle: {
      color: "#4472c4",
      fontSize: 28,
      bold: true
    }
  }, {
    id: "text-accent-orange",
    type: "text",
    textStyle: {
      color: "#ed7d31",
      fontSize: 28,
      bold: true
    }
  }, {
    id: "text-note-gray",
    type: "text",
    textStyle: {
      color: "#6b7280",
      fontSize: 14,
      bold: false
    }
  }],
  R = [...F, ...I, ...L];
function ge(var_core_value_sig777D) {
  return R.find(var_core_value_sig429F => var_core_value_sig429F.id === var_core_value_sig777D) ?? null;
}
function z(var_core_value_sig3F4C) {
  return var_core_value_sig3F4C === "shape" ? F : var_core_value_sig3F4C === "line" ? I : L;
}
function B(var_core_value_sigD65A) {
  return var_core_value_sigD65A.shapeType && var_core_value_sigE4C6(var_core_value_sigD65A.shapeType) ? "line" : "shape";
}
function _e(var_core_value_sig5A13, var_core_value_sigF593) {
  var var_core_value_sig3607, var_core_value_sigB512;
  if (var_core_value_sigF593.type === "text") return null;
  if (var_core_value_sigF593.type === "shape") return {
    ...var_core_value_sig5A13,
    fill: {
      ...(var_core_value_sig5A13.fill ?? {}),
      ...var_core_value_sigF593.fill
    },
    stroke: {
      ...(var_core_value_sig5A13.stroke ?? {}),
      ...var_core_value_sigF593.stroke
    }
  };
  let var_core_value_sigF2E6 = "ln" in var_core_value_sig5A13 ? var_core_value_sig5A13.ln : undefined;
  return {
    ...var_core_value_sig5A13,
    stroke: {
      ...(var_core_value_sig5A13.stroke ?? {}),
      ...var_core_value_sigF593.stroke
    },
    ln: {
      ...(var_core_value_sigF2E6 ?? {}),
      ...var_core_value_sigF593.ln,
      startArrow: {
        ...((var_core_value_sigF2E6 == null ? undefined : var_core_value_sigF2E6.startArrow) ?? {}),
        ...(((var_core_value_sig3607 = var_core_value_sigF593.ln) == null ? undefined : var_core_value_sig3607.startArrow) ?? {})
      },
      endArrow: {
        ...((var_core_value_sigF2E6 == null ? undefined : var_core_value_sigF2E6.endArrow) ?? {}),
        ...(((var_core_value_sigB512 = var_core_value_sigF593.ln) == null ? undefined : var_core_value_sigB512.endArrow) ?? {})
      }
    }
  };
}
function V(var_core_value_sig34C8) {
  return (var_core_value_sig34C8 ?? "").toLowerCase();
}
function H(var_core_value_sigB744) {
  return (var_core_value_sigB744 == null ? undefined : var_core_value_sigB744.dashType) ?? var_core_value_sigFD0C.Solid;
}
function U(var_core_value_sigEAE2, var_core_value_sigE68A) {
  var var_core_value_sig3E68;
  return (var_core_value_sigEAE2 == null || (var_core_value_sig3E68 = var_core_value_sigEAE2[var_core_value_sigE68A]) == null ? undefined : var_core_value_sig3E68.type) ?? var_core_value_sigB7FC.None;
}
function ve(var_core_value_sigF4C5, var_core_value_sig5410) {
  var var_core_value_sig492F, var_core_value_sig8EA0, var_core_value_sigA6F6, var_core_value_sigCDDA;
  return V((var_core_value_sig492F = var_core_value_sigF4C5.fill) == null ? undefined : var_core_value_sig492F.color) === V((var_core_value_sig8EA0 = var_core_value_sig5410.fill) == null ? undefined : var_core_value_sig8EA0.color) && V((var_core_value_sigA6F6 = var_core_value_sigF4C5.stroke) == null ? undefined : var_core_value_sigA6F6.color) === V(var_core_value_sig5410.stroke["color"]) && (((var_core_value_sigCDDA = var_core_value_sigF4C5.stroke) == null ? undefined : var_core_value_sigCDDA.width) ?? 0) === var_core_value_sig5410.stroke["width"];
}
function ye(var_core_value_sigE243, var_core_value_sig74A8) {
  var var_core_value_sig21B2, var_core_value_sigDE08;
  let var_core_value_sigACCB = "ln" in var_core_value_sigE243 ? var_core_value_sigE243.ln : undefined;
  return V((var_core_value_sig21B2 = var_core_value_sigE243.stroke) == null ? undefined : var_core_value_sig21B2.color) === V(var_core_value_sig74A8.stroke["color"]) && (((var_core_value_sigDE08 = var_core_value_sigE243.stroke) == null ? undefined : var_core_value_sigDE08.width) ?? 0) === var_core_value_sig74A8.stroke["width"] && H(var_core_value_sigE243.stroke) === H(var_core_value_sig74A8.stroke) && U(var_core_value_sigACCB, "startArrow") === U(var_core_value_sig74A8.ln, "startArrow") && U(var_core_value_sigACCB, "endArrow") === U(var_core_value_sig74A8.ln, "endArrow");
}
function be(var_core_value_sig7F33, var_core_value_sig0C53) {
  return var_core_value_sig0C53.type === "shape" ? ve(var_core_value_sig7F33, var_core_value_sig0C53) : var_core_value_sig0C53.type === "line" && ye(var_core_value_sig7F33, var_core_value_sig0C53);
}
function xe(var_core_value_sigEA04) {
  var var_core_value_sig7A62;
  return ((var_core_value_sig7A62 = z(B(var_core_value_sigEA04)).find(var_core_value_sigF62A => be(var_core_value_sigEA04, var_core_value_sigF62A))) == null ? undefined : var_core_value_sig7A62.id) ?? null;
}
function Se(var_core_value_sig8109, var_core_value_sig7565) {
  try {
    return new var_core_value_sig5F1A(var_core_value_sig8109.shapeType ?? var_core_value_sigCEFB.Rect, "shape-type-conversion", var_core_value_sig8109).cloneShapeDataForShapeType(var_core_value_sig7565);
  } catch {
    return null;
  }
}
var Ce = "@univerjs-pro/shape-editor",
  we = "1.0.0-insiders.20260907-70fc579";
function W(var_core_value_sigD4FB, var_core_value_sig3E71) {
  return var_core_value_sig6998({
    numberFormat: var_core_value_sigD4FB.numberFormat,
    lastValue: var_core_value_sigD4FB.lastValue,
    result: var_core_value_sig3E71
  });
}
function G(var_core_value_sig01B3) {
  "@babel/helpers - typeof";

  return G = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sig8178) {
    return typeof var_core_value_sig8178;
  } : function (var_core_value_sigE9ED) {
    return var_core_value_sigE9ED && typeof Symbol == "function" && var_core_value_sigE9ED.constructor === Symbol && var_core_value_sigE9ED !== Symbol.prototype ? "symbol" : typeof var_core_value_sigE9ED;
  }, G(var_core_value_sig01B3);
}
function Te(var_core_value_sig7442, var_core_value_sigDF87) {
  if (G(var_core_value_sig7442) != "object" || !var_core_value_sig7442) return var_core_value_sig7442;
  var var_core_value_sig9EE0 = var_core_value_sig7442[Symbol.toPrimitive];
  if (var_core_value_sig9EE0 !== undefined) {
    var var_core_value_sigF051 = var_core_value_sig9EE0.call(var_core_value_sig7442, var_core_value_sigDF87 || "default");
    if (G(var_core_value_sigF051) != "object") return var_core_value_sigF051;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sigDF87 === "string" ? String : Number)(var_core_value_sig7442);
}
function Ee(var_core_value_sig0B45) {
  var var_core_value_sig36F8 = Te(var_core_value_sig0B45, "string");
  return G(var_core_value_sig36F8) == "symbol" ? var_core_value_sig36F8 : var_core_value_sig36F8 + "";
}
function K(var_core_value_sig03E1, var_core_value_sigBB57, var_core_value_sig7C4A) {
  return (var_core_value_sigBB57 = Ee(var_core_value_sigBB57)) in var_core_value_sig03E1 ? Object.defineProperty(var_core_value_sig03E1, var_core_value_sigBB57, {
    value: var_core_value_sig7C4A,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sig03E1[var_core_value_sigBB57] = var_core_value_sig7C4A, var_core_value_sig03E1;
}
function q(var_core_value_sigE799, var_core_value_sigB601) {
  return function (var_core_value_sigB577, var_core_value_sig9572) {
    var_core_value_sigB601(var_core_value_sigB577, var_core_value_sig9572, var_core_value_sigE799);
  };
}
function J(var_core_value_sig8B71, var_core_value_sigAEFB, var_core_value_sig826B, var_core_value_sigCF89) {
  var var_core_value_sig00CB = arguments.length,
    var_core_value_sig77EE = var_core_value_sig00CB < 3 ? var_core_value_sigAEFB : var_core_value_sigCF89 === null ? var_core_value_sigCF89 = Object.getOwnPropertyDescriptor(var_core_value_sigAEFB, var_core_value_sig826B) : var_core_value_sigCF89,
    var_core_value_sig9F76;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sig77EE = Reflect.decorate(var_core_value_sig8B71, var_core_value_sigAEFB, var_core_value_sig826B, var_core_value_sigCF89);else {
    for (var var_core_value_sigB008 = var_core_value_sig8B71.length - 1; var_core_value_sigB008 >= 0; var_core_value_sigB008--) (var_core_value_sig9F76 = var_core_value_sig8B71[var_core_value_sigB008]) && (var_core_value_sig77EE = (var_core_value_sig00CB < 3 ? var_core_value_sig9F76(var_core_value_sig77EE) : var_core_value_sig00CB > 3 ? var_core_value_sig9F76(var_core_value_sigAEFB, var_core_value_sig826B, var_core_value_sig77EE) : var_core_value_sig9F76(var_core_value_sigAEFB, var_core_value_sig826B)) || var_core_value_sig77EE);
  }
  return var_core_value_sig00CB > 3 && var_core_value_sig77EE && Object.defineProperty(var_core_value_sigAEFB, var_core_value_sig826B, var_core_value_sig77EE), var_core_value_sig77EE;
}
let De = function (var_core_value_sig8721) {
  return var_core_value_sig8721.EMPTY = "empty", var_core_value_sig8721.PENDING = "pending", var_core_value_sig8721.SUCCESS = "success", var_core_value_sig8721.ERROR = "error", var_core_value_sig8721;
}({});
function Y(var_core_value_sig08BA) {
  return var_core_value_sig08BA.unitId + "\x00" + var_core_value_sig08BA.subUnitId + "\x00" + var_core_value_sig08BA.shapeId;
}
let X = class extends var_core_value_sig156F {
  constructor(var_core_value_sigD873, var_core_value_sigA12B) {
    super(), this._registerOtherFormulaService = var_core_value_sigD873, this._hostExternalReferenceModel = var_core_value_sigA12B, K(this, "_registrations", new Map()), K(this, "_formulaKeys", new Map()), K(this, "_presentationChanged$", new var_core_value_sigCB82()), K(this, "presentationChanged$", this._presentationChanged$["asObservable"]()), this.disposeWithMe(this._registerOtherFormulaService["formulaResult$"].subscribe(var_core_value_sigC9E0 => {
      for (let var_core_value_sig2AD0 of Object.values(var_core_value_sigC9E0)) for (let var_core_value_sig2AD8 of Object.values(var_core_value_sig2AD0)) for (let var_core_value_sig7524 of var_core_value_sig2AD8) this._updateFormulaResult(var_core_value_sig7524);
    }));
  }
  register(var_core_value_sigF230, var_core_value_sig09B8) {
    let var_core_value_sig6F91 = Y(var_core_value_sigF230),
      var_core_value_sigF9C7 = this._registrations["get"](var_core_value_sig6F91),
      var_core_value_sig8895 = this._hostExternalReferenceModel["getRevision"](var_core_value_sigF230.unitId);
    if (var_core_value_sigF9C7 && var_core_value_sigF9C7.binding["formula"] === var_core_value_sig09B8.formula && var_core_value_sigF9C7.referenceRevision === var_core_value_sig8895 && (var_core_value_sigF230.hostType === undefined || var_core_value_sigF9C7.hostType === var_core_value_sigF230.hostType) && var_core_value_sigF9C7.formulaUnitId === var_core_value_sigF230.unitId && var_core_value_sigF9C7.formulaSubUnitId === var_core_value_sigF230.subUnitId) {
      var_core_value_sigF9C7.binding = var_core_value_sig09B8;
      let var_core_value_sig76BA = var_core_value_sigF9C7.formulaId ? this._registerOtherFormulaService["getFormulaValueSync"](var_core_value_sigF9C7.formulaUnitId, var_core_value_sigF9C7.formulaSubUnitId, var_core_value_sigF9C7.formulaId) ?? undefined : undefined;
      var_core_value_sigF9C7.liveResult = var_core_value_sig76BA, this._setPresentation(var_core_value_sig6F91, W(var_core_value_sig09B8, var_core_value_sig76BA));
      return;
    }
    var_core_value_sigF9C7 != null && var_core_value_sigF9C7.formulaId && (this._registerOtherFormulaService["deleteFormula"](var_core_value_sigF9C7.formulaUnitId, var_core_value_sigF9C7.formulaSubUnitId, [var_core_value_sigF9C7.formulaId]), this._formulaKeys["delete"](var_core_value_sigF9C7.formulaId));
    let var_core_value_sigC80B = {
      ...var_core_value_sigF230,
      hostType: var_core_value_sigF230.hostType ?? (var_core_value_sigF9C7 == null ? undefined : var_core_value_sigF9C7.hostType),
      binding: var_core_value_sig09B8,
      referenceRevision: var_core_value_sig8895,
      formulaSubUnitId: var_core_value_sigF230.subUnitId,
      formulaUnitId: var_core_value_sigF230.unitId,
      presentation: W(var_core_value_sig09B8, undefined)
    };
    if (this._registrations["set"](var_core_value_sig6F91, var_core_value_sigC80B), !var_core_value_sig09B8.formula["trim"]()) {
      this._setPresentation(var_core_value_sig6F91, var_core_value_sigC80B.presentation);
      return;
    }
    let var_core_value_sig284F = this._registerOtherFormulaService["registerFormulaWithRange"](var_core_value_sigF230.unitId, var_core_value_sigF230.subUnitId, var_core_value_sig09B8.formula, undefined, {
      shapeId: var_core_value_sigF230.shapeId
    }, var_core_value_sigE94C.SHAPE, var_core_value_sigF230.shapeId);
    var_core_value_sigC80B.formulaId = var_core_value_sig284F, this._formulaKeys["set"](var_core_value_sig284F, var_core_value_sig6F91);
  }
  update(var_core_value_sigE154, var_core_value_sig4632) {
    this.register(var_core_value_sigE154, var_core_value_sig4632);
  }
  unregister(var_core_value_sig12F2) {
    let var_core_value_sig2259 = Y(var_core_value_sig12F2),
      var_core_value_sig9E2F = this._registrations["get"](var_core_value_sig2259);
    var_core_value_sig9E2F && (var_core_value_sig9E2F.formulaId && (this._registerOtherFormulaService["deleteFormula"](var_core_value_sig9E2F.formulaUnitId, var_core_value_sig9E2F.formulaSubUnitId, [var_core_value_sig9E2F.formulaId]), this._formulaKeys["delete"](var_core_value_sig9E2F.formulaId)), this._registrations["delete"](var_core_value_sig2259));
  }
  unregisterUnit(var_core_value_sigD082) {
    for (let var_core_value_sigFBFA of [...this._registrations["values"]()]) var_core_value_sigFBFA.unitId === var_core_value_sigD082 && this.unregister(var_core_value_sigFBFA);
  }
  syncUnit(var_core_value_sigDBB7, var_core_value_sigD0A8) {
    let var_core_value_sigF4B9 = var_core_value_sigD0A8.filter(var_core_value_sigF602 => var_core_value_sigF602.shapeData["formulaBinding"]),
      var_core_value_sig5CEE = new Set(var_core_value_sigF4B9.map(Y));
    for (let var_core_value_sig1BBD of [...this._registrations["values"]()]) var_core_value_sig1BBD.unitId === var_core_value_sigDBB7 && !var_core_value_sig5CEE.has(Y(var_core_value_sig1BBD)) && this.unregister(var_core_value_sig1BBD);
    for (let var_core_value_sigF704 of var_core_value_sigF4B9) this.register(var_core_value_sigF704, var_core_value_sigF704.shapeData["formulaBinding"]);
  }
  getPresentation(var_core_value_sigE92A) {
    var var_core_value_sig362B;
    return (var_core_value_sig362B = this._registrations["get"](Y(var_core_value_sigE92A))) == null ? undefined : var_core_value_sig362B.presentation;
  }
  getResult(var_core_value_sig5CA5) {
    let var_core_value_sigE90F = this._registrations["get"](Y(var_core_value_sig5CA5));
    return var_core_value_sigE90F ? this._createResult(var_core_value_sigE90F, var_core_value_sigE90F.presentation) : undefined;
  }
  getRegisteredFormulas() {
    let var_core_value_sigEFD4 = [];
    for (let var_core_value_sig2BCF of this._registrations["values"]()) var_core_value_sig2BCF.hostType !== undefined && var_core_value_sigEFD4.push({
      identity: {
        hostType: var_core_value_sig2BCF.hostType,
        unitId: var_core_value_sig2BCF.unitId,
        subUnitId: var_core_value_sig2BCF.subUnitId,
        shapeId: var_core_value_sig2BCF.shapeId
      },
      binding: var_core_value_sig2BCF.binding,
      referenceRevision: var_core_value_sig2BCF.referenceRevision,
      liveResult: var_core_value_sig2BCF.liveResult,
      presentation: var_core_value_sig2BCF.presentation
    });
    return var_core_value_sigEFD4;
  }
  _updateFormulaResult(var_core_value_sig861B) {
    let var_core_value_sig5237 = this._formulaKeys["get"](var_core_value_sig861B.formulaId),
      var_core_value_sigBB00 = var_core_value_sig5237 ? this._registrations["get"](var_core_value_sig5237) : undefined;
    !var_core_value_sig5237 || !var_core_value_sigBB00 || (var_core_value_sigBB00.liveResult = var_core_value_sig861B, this._setPresentation(var_core_value_sig5237, W(var_core_value_sigBB00.binding, var_core_value_sig861B)));
  }
  _setPresentation(var_core_value_sig7E54, var_core_value_sig9A8D) {
    var var_core_value_sigC259, var_core_value_sig9C9F, var_core_value_sigFDEA, var_core_value_sig86D0;
    let var_core_value_sig4CD2 = this._registrations["get"](var_core_value_sig7E54);
    if (!var_core_value_sig4CD2 || var_core_value_sig4CD2.presentation["text"] === var_core_value_sig9A8D.text && var_core_value_sig4CD2.presentation["color"] === var_core_value_sig9A8D.color && var_core_value_sig4CD2.presentation["pattern"] === var_core_value_sig9A8D.pattern && ((var_core_value_sigC259 = var_core_value_sig4CD2.presentation["cell"]) == null ? undefined : var_core_value_sigC259.t) === ((var_core_value_sig9C9F = var_core_value_sig9A8D.cell) == null ? undefined : var_core_value_sig9C9F.t) && var_core_value_sig4CD2.presentation["source"] === var_core_value_sig9A8D.source && var_core_value_sig4CD2.presentation["stale"] === var_core_value_sig9A8D.stale && Object.is((var_core_value_sigFDEA = var_core_value_sig4CD2.presentation["cell"]) == null ? undefined : var_core_value_sigFDEA.v, (var_core_value_sig86D0 = var_core_value_sig9A8D.cell) == null ? undefined : var_core_value_sig86D0.v)) return;
    let var_core_value_sig48CA = var_core_value_sig4CD2.presentation;
    var_core_value_sig4CD2.presentation = var_core_value_sig9A8D, this._presentationChanged$["next"]({
      unitId: var_core_value_sig4CD2.unitId,
      subUnitId: var_core_value_sig4CD2.subUnitId,
      shapeId: var_core_value_sig4CD2.shapeId,
      presentation: var_core_value_sig9A8D,
      previousPresentation: var_core_value_sig48CA,
      result: this._createResult(var_core_value_sig4CD2, var_core_value_sig9A8D),
      previousResult: this._createResult(var_core_value_sig4CD2, var_core_value_sig48CA),
      animationEnabled: var_core_value_sig4CD2.binding["animationEnabled"] !== false && !var_core_value_sig48CA.stale
    });
  }
  _createResult(var_core_value_sig50AF, var_core_value_sigA942) {
    var var_core_value_sigA621, var_core_value_sigBBFF;
    let var_core_value_sig8889 = (var_core_value_sigA621 = var_core_value_sigA942.cell) == null ? undefined : var_core_value_sigA621.v;
    return {
      status: var_core_value_sig50AF.binding["formula"].trim() ? var_core_value_sigA942.stale || var_core_value_sigA942.cell == null ? "pending" : typeof var_core_value_sig8889 == "string" && var_core_value_sig8889.startsWith("#") ? "error" : "success" : "empty",
      value: var_core_value_sig8889,
      valueType: ((var_core_value_sigBBFF = var_core_value_sigA942.cell) == null ? undefined : var_core_value_sigBBFF.t) ?? undefined,
      displayText: var_core_value_sigA942.text,
      color: var_core_value_sigA942.color,
      numberFormat: var_core_value_sigA942.pattern,
      source: var_core_value_sigA942.source,
      stale: var_core_value_sigA942.stale
    };
  }
  dispose() {
    for (let var_core_value_sig0D69 of this._registrations["values"]()) var_core_value_sig0D69.formulaId && this._registerOtherFormulaService["deleteFormula"](var_core_value_sig0D69.formulaUnitId, var_core_value_sig0D69.formulaSubUnitId, [var_core_value_sig0D69.formulaId]);
    this._registrations["clear"](), this._formulaKeys["clear"](), this._presentationChanged$["complete"](), super.dispose();
  }
};
X = J([q(0, var_core_value_sig9FBA(var_core_value_sig6D47)), q(1, var_core_value_sig9FBA(var_core_value_sig7664))], X);
let Z = class extends var_core_value_sig156F {
  constructor(var_core_value_sig32F8, var_core_value_sig5B67, var_core_value_sig1758) {
    super(), this._instanceService = var_core_value_sig32F8, this._shapeHostAdapterRegistry = var_core_value_sig5B67, this._shapeFormulaService = var_core_value_sig1758, K(this, "_isDisposed", false), K(this, "_pendingUnitIds", new Set()), K(this, "_adapterBindings", new Map()), K(this, "_syncScheduled", false);
    let var_core_value_sig4805 = this._shapeHostAdapterRegistry["adapterChanged$"].subscribe(var_core_value_sig480E => {
      this._handleAdapterChange(var_core_value_sig480E);
    });
    this.disposeWithMe(() => var_core_value_sig4805.unsubscribe());
    for (let var_core_value_sig26DB of this._shapeHostAdapterRegistry["list"]()) this._bindAdapter(var_core_value_sig26DB);
    this.disposeWithMe(this._instanceService["unitAdded$"].subscribe(({
      unit: var_core_value_sigF0F9
    }) => {
      this._queueSync(var_core_value_sigF0F9.getUnitId());
    })), this.disposeWithMe(this._instanceService["unitDisposed$"].subscribe(var_core_value_sig1A0F => {
      this._shapeFormulaService["unregisterUnit"](var_core_value_sig1A0F.getUnitId());
    }));
  }
  _handleAdapterChange(var_core_value_sigE67E) {
    this._isDisposed || (var_core_value_sigE67E.type === "registered" ? this._bindAdapter(var_core_value_sigE67E.adapter) : this._unbindAdapter(var_core_value_sigE67E.adapter));
  }
  _bindAdapter(var_core_value_sig2902) {
    var var_core_value_sig9989;
    let var_core_value_sig698E = this._adapterBindings["get"](var_core_value_sig2902.hostType);
    if ((var_core_value_sig698E == null ? undefined : var_core_value_sig698E.adapter) === var_core_value_sig2902) return;
    var_core_value_sig698E == null || var_core_value_sig698E.unsubscribe();
    let var_core_value_sig2809 = (var_core_value_sig9989 = var_core_value_sig2902.shapeChanged$) == null ? undefined : var_core_value_sig9989.subscribe(({
      unitId: var_core_value_sigFBA4
    }) => this._queueSync(var_core_value_sigFBA4));
    this._adapterBindings["set"](var_core_value_sig2902.hostType, {
      adapter: var_core_value_sig2902,
      unsubscribe: () => var_core_value_sig2809 == null ? undefined : var_core_value_sig2809.unsubscribe()
    });
    for (let var_core_value_sig4383 of this._instanceService["getAllUnitsForType"](var_core_value_sig2902.hostType)) this._syncUnit(var_core_value_sig4383.getUnitId());
  }
  _unbindAdapter(var_core_value_sig2DAB) {
    let var_core_value_sig877E = this._adapterBindings["get"](var_core_value_sig2DAB.hostType);
    if ((var_core_value_sig877E == null ? undefined : var_core_value_sig877E.adapter) === var_core_value_sig2DAB) {
      var_core_value_sig877E.unsubscribe(), this._adapterBindings["delete"](var_core_value_sig2DAB.hostType);
      for (let var_core_value_sig3EEE of this._instanceService["getAllUnitsForType"](var_core_value_sig2DAB.hostType)) this._shapeFormulaService["unregisterUnit"](var_core_value_sig3EEE.getUnitId());
    }
  }
  _queueSync(var_core_value_sig20C8) {
    this._pendingUnitIds["add"](var_core_value_sig20C8), !this._syncScheduled && (this._syncScheduled = true, queueMicrotask(() => {
      if (this._syncScheduled = false, this._isDisposed) return;
      let var_core_value_sig186C = [...this._pendingUnitIds];
      this._pendingUnitIds["clear"](), var_core_value_sig186C.forEach(var_core_value_sigBC46 => this._syncUnit(var_core_value_sigBC46));
    }));
  }
  _syncUnit(var_core_value_sigE9A7) {
    var var_core_value_sigBECE, var_core_value_sig1B22;
    let var_core_value_sig7F72 = this._instanceService["getUnitType"](var_core_value_sigE9A7);
    if (!var_core_value_sig4313(var_core_value_sig7F72)) return;
    let var_core_value_sig7B2A = (var_core_value_sigBECE = this._adapterBindings["get"](var_core_value_sig7F72)) == null ? undefined : var_core_value_sigBECE.adapter;
    var_core_value_sig7B2A && this._shapeFormulaService["syncUnit"](var_core_value_sigE9A7, ((var_core_value_sig1B22 = var_core_value_sig7B2A.listShapesInUnit) == null ? undefined : var_core_value_sig1B22.call(var_core_value_sig7B2A, var_core_value_sigE9A7)) ?? []);
  }
  dispose() {
    this._isDisposed = true;
    for (let var_core_value_sigD955 of this._adapterBindings["values"]()) var_core_value_sigD955.unsubscribe();
    this._adapterBindings["clear"](), super.dispose();
  }
};
Z = J([q(0, var_core_value_sig72F6), q(1, var_core_value_sig48DD), q(2, var_core_value_sig9FBA(X))], Z);
let Q = class extends var_core_value_sig156F {
  constructor(var_core_value_sig06CD, var_core_value_sigA5F1, var_core_value_sig97A2, var_core_value_sig07E9) {
    super(), this._formulaService = var_core_value_sig06CD, this._cacheEligibilityService = var_core_value_sigA5F1, this._shapeHostAdapterRegistry = var_core_value_sig97A2, this.disposeWithMe(var_core_value_sig07E9.registerProvider(this));
  }
  collectMutations(var_core_value_sig4F59) {
    let var_core_value_sigF564 = [];
    for (let var_core_value_sig48BD of this._formulaService["getRegisteredFormulas"]()) {
      var var_core_value_sig8CFA;
      if (!this._cacheEligibilityService["assess"](var_core_value_sig48BD.binding["formula"], var_core_value_sig48BD.liveResult).eligible) continue;
      let var_core_value_sig3D7D = var_core_value_sig5E86(var_core_value_sig48BD.liveResult),
        var_core_value_sig27E5 = var_core_value_sig3D7D ? var_core_value_sigF639(var_core_value_sig3D7D) : null;
      if (!var_core_value_sig27E5 || Oe(var_core_value_sig48BD.binding["lastValue"], var_core_value_sig27E5)) continue;
      let var_core_value_sig8061 = this._shapeHostAdapterRegistry["get"](var_core_value_sig48BD.identity["hostType"]),
        var_core_value_sig4D4C = var_core_value_sig8061 == null || (var_core_value_sig8CFA = var_core_value_sig8061.createFormulaLastValueMutation) == null ? undefined : var_core_value_sig8CFA.call(var_core_value_sig8061, var_core_value_sig48BD.identity, {
          expectedFormula: var_core_value_sig48BD.binding["formula"],
          expectedReferenceRevision: var_core_value_sig48BD.referenceRevision
        }, var_core_value_sig27E5);
      var_core_value_sig4D4C && var_core_value_sigF564.push(var_core_value_sig4D4C);
    }
    return var_core_value_sigF564;
  }
};
Q = J([q(0, var_core_value_sig9FBA(X)), q(1, var_core_value_sig9FBA(var_core_value_sig6912)), q(2, var_core_value_sig48DD), q(3, var_core_value_sig9FBA(var_core_value_sigE235))], Q);
function Oe(var_core_value_sigDBB5, var_core_value_sigCFAC) {
  return (var_core_value_sigDBB5 == null ? undefined : var_core_value_sigDBB5.v) === var_core_value_sigCFAC.v && (var_core_value_sigDBB5 == null ? undefined : var_core_value_sigDBB5.t) === var_core_value_sigCFAC.t && (var_core_value_sigDBB5 == null ? undefined : var_core_value_sigDBB5.pattern) === var_core_value_sigCFAC.pattern;
}
let $ = class extends var_core_value_sigA2CE {
  constructor(var_core_value_sig2E11 = C, var_core_value_sig5B69, var_core_value_sigB098) {
    super(), this._config = var_core_value_sig2E11, this._injector = var_core_value_sig5B69, this._configService = var_core_value_sigB098;
    let {
      ...var_core_value_sigCE71
    } = var_core_value_sig3767({}, C, this._config);
    this._configService["setConfig"](S, var_core_value_sigCE71);
  }
  onStarting() {
    this._injector["add"]([X]), this._injector["add"]([Z]), this._injector["add"]([Q]);
  }
  onReady() {
    var_core_value_sig670B(this._injector, [[Z], [Q]]);
  }
};
K($, "type", var_core_value_sig1975.UNIVER_UNKNOWN), K($, "pluginName", "SHAPE_EDITOR_PLUGIN"), K($, "packageName", Ce), K($, "version", we), $ = J([var_core_value_sigFC87(var_core_value_sigEAE5, var_core_value_sig2281, var_core_value_sig1537), q(1, var_core_value_sig9FBA(var_core_value_sigFE01)), q(2, var_core_value_sigF057)], $);
function ke(var_core_value_sig237B, var_core_value_sigFEAB) {
  var var_core_value_sigE347, var_core_value_sig3C5B, var_core_value_sig200B, var_core_value_sig3863;
  if (!var_core_value_sigFEAB) return var_core_value_sig237B;
  let var_core_value_sigC97C = var_core_value_sigFEAB.text,
    var_core_value_sigC4B1 = var_core_value_sig237B.body,
    var_core_value_sig1BD9 = (var_core_value_sigC4B1 == null || (var_core_value_sigE347 = var_core_value_sigC4B1.textRuns) == null || (var_core_value_sigE347 = var_core_value_sigE347[0]) == null ? undefined : var_core_value_sigE347.ts) ?? ((var_core_value_sig3C5B = var_core_value_sig237B.documentStyle) == null ? undefined : var_core_value_sig3C5B.textStyle) ?? {},
    var_core_value_sigE43E = var_core_value_sigFEAB.color ? {
      ...var_core_value_sig1BD9,
      cl: {
        rgb: var_core_value_sigFEAB.color
      }
    } : var_core_value_sig1BD9,
    var_core_value_sigA937 = var_core_value_sigC4B1 == null || (var_core_value_sig200B = var_core_value_sigC4B1.paragraphs) == null ? undefined : var_core_value_sig200B[0],
    var_core_value_sigCAD5 = var_core_value_sigC4B1 == null || (var_core_value_sig3863 = var_core_value_sigC4B1.sectionBreaks) == null ? undefined : var_core_value_sig3863[0],
    var_core_value_sigE503 = (var_core_value_sigA937 == null ? undefined : var_core_value_sigA937.paragraphId) ?? var_core_value_sig029F(new Set());
  return {
    ...var_core_value_sig237B,
    body: {
      ...var_core_value_sigC4B1,
      dataStream: var_core_value_sigC97C + "\x0d\x0a",
      textRuns: var_core_value_sigC97C.length ? [{
        st: 0,
        ed: var_core_value_sigC97C.length,
        ts: var_core_value_sigE43E
      }] : [],
      paragraphs: [{
        ...(var_core_value_sigA937 ?? {}),
        startIndex: var_core_value_sigC97C.length,
        paragraphId: var_core_value_sigE503
      }],
      sectionBreaks: var_core_value_sigCAD5 ? [{
        ...var_core_value_sigCAD5,
        startIndex: var_core_value_sigC97C.length + 1
      }] : var_core_value_sigC4B1 == null ? undefined : var_core_value_sigC4B1.sectionBreaks
    }
  };
}
export { w as FORMULA_SHAPE_DEFAULT_TEXT_RECT_PADDING, De as FormulaShapeResultStatus, S as SHAPE_EDITOR_PLUGIN_CONFIG_KEY, I as SHAPE_LINE_QUICK_STYLE_PRESETS, F as SHAPE_QUICK_STYLE_PRESETS, X as ShapeFormulaService, $ as UniverShapeEditorPlugin, _e as applyQuickStyleToShapeData, Se as cloneShapeDataForType, D as createFormulaShapeData, O as createFormulaShapeDataFromShape, ke as createShapeFormulaDocument, E as createShapeTextBoxShapeData, ge as getShapeQuickStylePreset, z as getShapeQuickStylePresets, B as getShapeQuickStyleType, xe as resolveActiveShapeQuickStylePresetId, W as resolveShapeFormulaPresentation };
