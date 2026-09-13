import { CommandType as var_core_value_sig5A75, DependentOn as var_core_value_sig7BAF, Disposable as var_core_value_sig8F69, ICommandService as var_core_value_sig6884, IConfigService as var_core_value_sig066E, IUniverInstanceService as var_core_value_sig9B0D, Inject as var_core_value_sig3D2C, Injector as var_core_value_sigC56D, LocaleService as var_core_value_sig3A17, PAGE_SIZE as var_core_value_sig938F, PAPER_TYPES as var_core_value_sigD948, PaperType as var_core_value_sigBE5E, Plugin as var_core_value_sig0281, UniverInstanceType as var_core_value_sigED71, createIdentifier as var_core_value_sig281C, generateRandomId as var_core_value_sig3C92, merge as var_core_value_sigB16B, registerDependencies as var_core_value_sig585D, toDisposable as var_core_value_sigE722 } from "@univerjs/core";
import { BehaviorSubject as var_core_value_sig062A } from "rxjs";
import { IPrintPreparationService as var_core_value_sig050A, PRINT_CONTAINER_CLASS as var_core_value_sig8B32, PaperMarginMap as var_core_value_sig870F, PrintDirection as var_core_value_sigB683, PrintPaperMargin as var_core_value_sig26EC, PrintPreparationService as var_core_value_sigEEDB } from "@univerjs-pro/print";
import { ObjectProvider as var_core_value_sig36E7, SlidePageBackgroundObject as var_core_value_sig6A78, SlidePageClipGroup as var_core_value_sigF7EF, UniverSlidesUIPlugin as var_core_value_sig27F9, assembleGroupHierarchy as var_core_value_sig393E, isThumbnailRenderableDrawing as var_core_value_sigB609, resolveGroupFillInheritance as var_core_value_sig390D, resolveSlideLogicalPageSize as var_core_value_sigC928 } from "@univerjs-pro/slides-ui";
import { ISlideDrawingService as var_core_value_sig39B7, SlideSceneTypeEnum as var_core_value_sig18E0, UniverSlidesPlugin as var_core_value_sigE161, resolvedSlideLayersToDrawingMap as var_core_value_sigBDEE } from "@univerjs-pro/slides";
import { CanvasRenderMode as var_core_value_sig1F40, DRAWING_OBJECT_LAYER_INDEX as var_core_value_sig3FC7, Engine as var_core_value_sig1E1B, IRenderManagerService as var_core_value_sig3B10, MAIN_VIEW_PORT_KEY as var_core_value_sig89E6, Scene as var_core_value_sig4743, UniverRenderEnginePlugin as var_core_value_sigEB6A, Viewport as var_core_value_sig3D46 } from "@univerjs/engine-render";
import { BuiltInUIPart as var_core_value_sigCC93, IMenuManagerService as var_core_value_sig5964, IUIPartsService as var_core_value_sig808B, IconManager as var_core_value_sig2A26, MenuItemType as var_core_value_sig1179, RibbonStartGroup as var_core_value_sigEA92, connectInjector as var_core_value_sig8FD9, getMenuHiddenObservable as var_core_value_sig1AE5, useDependency as var_core_value_sig7100, useObservable as var_core_value_sigA19A } from "@univerjs/ui";
import { UniverLicensePlugin as var_core_value_sigD3F5 } from "@univerjs-pro/license";
import { LoadingMultiIcon as var_core_value_sig3082, PrintIcon as var_core_value_sigF5D1 } from "@univerjs/icons";
import { Button as var_core_value_sig8775, Checkbox as var_core_value_sig481B, FormLayout as var_core_value_sig13D7, Input as var_core_value_sig90C0, Radio as var_core_value_sigF1B2, RadioGroup as var_core_value_sigC2BB, Select as var_core_value_sigD9DB, borderBottomClassName as var_core_value_sigA363, clsx as var_core_value_sigFBA5, scrollbarClassName as var_core_value_sigAC47 } from "@univerjs/design";
import { useEffect as var_core_value_sigA06F, useMemo as var_core_value_sig770E, useRef as var_core_value_sig4654, useState as var_core_value_sigB26B } from "react";
import { Fragment as var_core_value_sig019B, jsx as var_core_value_sigC6BC, jsxs as var_core_value_sig8EC2 } from "react/jsx-runtime";
let I = function (var_core_value_sig1537) {
    return var_core_value_sig1537.FullPage = "FullPage", var_core_value_sig1537.Handout = "Handout", var_core_value_sig1537.NotesPage = "NotesPage", var_core_value_sig1537;
  }({}),
  Be = function (var_core_value_sigE4C6) {
    return var_core_value_sigE4C6.Horizontal = "Horizontal", var_core_value_sigE4C6.Vertical = "Vertical", var_core_value_sigE4C6;
  }({});
function L(var_core_value_sig4313, var_core_value_sigFC87) {
  return var_core_value_sig4313 === undefined ? var_core_value_sigFC87 : var_core_value_sig4313;
}
function Ve(var_core_value_sig156F) {
  let var_core_value_sigDD51 = (var_core_value_sig156F == null ? undefined : var_core_value_sig156F.layout) ?? "FullPage",
    var_core_value_sigF057 = var_core_value_sigDD51 === "FullPage";
  return {
    layout: var_core_value_sigDD51,
    slidesPerPage: L(var_core_value_sig156F == null ? undefined : var_core_value_sig156F.slidesPerPage, 2),
    handoutOrder: L(var_core_value_sig156F == null ? undefined : var_core_value_sig156F.handoutOrder, "Horizontal"),
    paperSize: var_core_value_sig156F == null ? undefined : var_core_value_sig156F.paperSize,
    direction: L(var_core_value_sig156F == null ? undefined : var_core_value_sig156F.direction, var_core_value_sigF057 ? var_core_value_sigB683.Landscape : var_core_value_sigB683.Portrait),
    margin: L(var_core_value_sig156F == null ? undefined : var_core_value_sig156F.margin, var_core_value_sig156F != null && var_core_value_sig156F.paperSize ? var_core_value_sig26EC.Normal : var_core_value_sig26EC.None),
    marginCustom: L(var_core_value_sig156F == null ? undefined : var_core_value_sig156F.marginCustom, {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }),
    frameSlides: L(var_core_value_sig156F == null ? undefined : var_core_value_sig156F.frameSlides, !var_core_value_sigF057),
    showSlideNumber: L(var_core_value_sig156F == null ? undefined : var_core_value_sig156F.showSlideNumber, !var_core_value_sigF057)
  };
}
function He(var_core_value_sig72F6, var_core_value_sig9FBA, var_core_value_sigFE01, var_core_value_sigA2CE = var_core_value_sig480E => var_core_value_sig480E.length * 14 * 0.55) {
  let var_core_value_sig1975 = var_core_value_sigC928(var_core_value_sig9FBA),
    var_core_value_sig6EA1 = Ve(var_core_value_sigFE01);
  !(var_core_value_sigFE01 != null && var_core_value_sigFE01.direction) && var_core_value_sig6EA1.layout === "FullPage" && (var_core_value_sig6EA1.direction = var_core_value_sig1975.width >= var_core_value_sig1975.height ? var_core_value_sigB683.Landscape : var_core_value_sigB683.Portrait);
  let var_core_value_sig029F = We(var_core_value_sig1975, var_core_value_sig6EA1),
    var_core_value_sig3767 = var_core_value_sig6EA1.margin === var_core_value_sig26EC.Custom ? var_core_value_sig6EA1.marginCustom : var_core_value_sig870F[var_core_value_sig6EA1.margin],
    var_core_value_sig670B = Ge(var_core_value_sig029F, var_core_value_sig3767),
    var_core_value_sig6912;
  switch (var_core_value_sig6EA1.layout) {
    case "Handout":
      var_core_value_sig6912 = Ke(var_core_value_sig72F6, var_core_value_sig670B, var_core_value_sig6EA1.slidesPerPage, var_core_value_sig6EA1.handoutOrder);
      break;
    case "NotesPage":
      var_core_value_sig6912 = Ye(var_core_value_sig72F6, var_core_value_sig670B, var_core_value_sigA2CE);
      break;
    default:
      var_core_value_sig6912 = var_core_value_sig72F6.map(var_core_value_sig26DB => ({
        key: "full-page-" + var_core_value_sig26DB.pageId,
        slots: [{
          source: var_core_value_sig26DB,
          rect: var_core_value_sig670B
        }]
      }));
      break;
  }
  return {
    pageSize: var_core_value_sig029F,
    margin: var_core_value_sig3767,
    options: var_core_value_sig6EA1,
    pages: var_core_value_sig6912
  };
}
function Ue(var_core_value_sigE235, var_core_value_sig7664) {
  let var_core_value_sig2281 = var_core_value_sigC928(var_core_value_sig7664);
  return var_core_value_sigE235.map(({
    page: var_core_value_sigA621,
    index: var_core_value_sigBBFF
  }) => {
    let var_core_value_sig8889 = var_core_value_sigA621.getData(),
      var_core_value_sig32F8 = var_core_value_sigC928(var_core_value_sig8889.pageSize ?? var_core_value_sig2281);
    return {
      index: var_core_value_sigBBFF,
      page: var_core_value_sigA621,
      pageId: var_core_value_sigA621.getId(),
      width: var_core_value_sig32F8.width,
      height: var_core_value_sig32F8.height,
      speakerNotes: var_core_value_sig8889.speakerNotes ?? ""
    };
  });
}
function We(var_core_value_sig5E86, var_core_value_sig6998) {
  let var_core_value_sigF639 = var_core_value_sig6998.paperSize ? var_core_value_sig938F[var_core_value_sig6998.paperSize] : var_core_value_sig5E86,
    var_core_value_sigEAE5 = Math.min(var_core_value_sigF639.width, var_core_value_sigF639.height),
    var_core_value_sigE94C = Math.max(var_core_value_sigF639.width, var_core_value_sigF639.height);
  return var_core_value_sig6998.direction === var_core_value_sigB683.Portrait ? {
    width: var_core_value_sigEAE5,
    height: var_core_value_sigE94C
  } : {
    width: var_core_value_sigE94C,
    height: var_core_value_sigEAE5
  };
}
function Ge(var_core_value_sig6D47, var_core_value_sigCB82) {
  return {
    x: var_core_value_sigCB82.left,
    y: var_core_value_sigCB82.top,
    width: Math.max(1, var_core_value_sig6D47.width - var_core_value_sigCB82.left - var_core_value_sigCB82.right),
    height: Math.max(1, var_core_value_sig6D47.height - var_core_value_sigCB82.top - var_core_value_sigCB82.bottom)
  };
}
function Ke(var_core_value_sigCF4E, var_core_value_sig6CAD, var_core_value_sig8CF5, var_core_value_sigDDD7) {
  let var_core_value_sigB2CE = [];
  for (let var_core_value_sig5B67 = 0; var_core_value_sig5B67 < var_core_value_sigCF4E.length; var_core_value_sig5B67 += var_core_value_sig8CF5) {
    let var_core_value_sigF0F9 = var_core_value_sigCF4E.slice(var_core_value_sig5B67, var_core_value_sig5B67 + var_core_value_sig8CF5),
      var_core_value_sig1A0F = Je(qe(var_core_value_sig6CAD, var_core_value_sig8CF5), var_core_value_sig8CF5, var_core_value_sigDDD7);
    var_core_value_sigB2CE.push({
      key: "handout-" + var_core_value_sig5B67 / var_core_value_sig8CF5,
      slots: var_core_value_sigF0F9.map((var_core_value_sigC9E0, var_core_value_sig76BA) => {
        let var_core_value_sigFBFA = var_core_value_sig1A0F[var_core_value_sig76BA];
        if (var_core_value_sig8CF5 !== 3) return {
          source: var_core_value_sigC9E0,
          rect: var_core_value_sigFBFA
        };
        let var_core_value_sigF602 = (var_core_value_sigFBFA.width - 24) * 0.56;
        return {
          source: var_core_value_sigC9E0,
          rect: {
            ...var_core_value_sigFBFA,
            width: var_core_value_sigF602
          },
          noteLinesRect: {
            x: var_core_value_sigFBFA.x + var_core_value_sigF602 + 24,
            y: var_core_value_sigFBFA.y,
            width: Math.max(1, var_core_value_sigFBFA.width - var_core_value_sigF602 - 24),
            height: var_core_value_sigFBFA.height
          }
        };
      })
    });
  }
  return var_core_value_sigB2CE;
}
function qe(var_core_value_sig443C, var_core_value_sig39B1) {
  let [var_core_value_sig210D, var_core_value_sigB4B4] = var_core_value_sig39B1 === 1 ? [1, 1] : var_core_value_sig39B1 === 2 || var_core_value_sig39B1 === 3 ? [1, var_core_value_sig39B1] : var_core_value_sig39B1 === 4 ? [2, 2] : var_core_value_sig39B1 === 6 ? [2, 3] : [3, 3],
    var_core_value_sigD407 = (var_core_value_sig443C.width - 24 * (var_core_value_sig210D - 1)) / var_core_value_sig210D,
    var_core_value_sig63F3 = (var_core_value_sig443C.height - 24 * (var_core_value_sigB4B4 - 1)) / var_core_value_sigB4B4,
    var_core_value_sig6A71 = [];
  for (let var_core_value_sig1758 = 0; var_core_value_sig1758 < var_core_value_sigB4B4; var_core_value_sig1758++) for (let var_core_value_sigFBA4 = 0; var_core_value_sigFBA4 < var_core_value_sig210D; var_core_value_sigFBA4++) var_core_value_sig6A71.push({
    x: var_core_value_sig443C.x + var_core_value_sigFBA4 * (var_core_value_sigD407 + 24),
    y: var_core_value_sig443C.y + var_core_value_sig1758 * (var_core_value_sig63F3 + 24),
    width: var_core_value_sigD407,
    height: var_core_value_sig63F3
  });
  return var_core_value_sig6A71;
}
function Je(var_core_value_sig3BF6, var_core_value_sig38CE, var_core_value_sig62B7) {
  if (var_core_value_sig62B7 === "Horizontal" || var_core_value_sig38CE < 4) return var_core_value_sig3BF6;
  let var_core_value_sig37A8 = var_core_value_sig38CE === 9 ? 3 : 2,
    var_core_value_sigA90D = var_core_value_sig38CE / var_core_value_sig37A8;
  return var_core_value_sig3BF6.map((var_core_value_sig4805, var_core_value_sigE67E) => var_core_value_sig3BF6[var_core_value_sigE67E % var_core_value_sigA90D * var_core_value_sig37A8 + Math.floor(var_core_value_sigE67E / var_core_value_sigA90D)]);
}
function Ye(var_core_value_sig7A3C, var_core_value_sig0511, var_core_value_sig1F44) {
  let var_core_value_sigCB04 = [];
  for (let var_core_value_sig2902 of var_core_value_sig7A3C) {
    let var_core_value_sig4383 = var_core_value_sig0511.height * 0.42,
      var_core_value_sig186C = {
        x: var_core_value_sig0511.x,
        y: var_core_value_sig0511.y + var_core_value_sig4383 + 24,
        width: var_core_value_sig0511.width,
        height: Math.max(1, var_core_value_sig0511.height - var_core_value_sig4383 - 24)
      },
      var_core_value_sigD955 = Xe(var_core_value_sig2902.speakerNotes, var_core_value_sig186C.width, var_core_value_sig1F44),
      var_core_value_sig48BD = Math.max(1, Math.floor(var_core_value_sig186C.height / 21)),
      var_core_value_sig429F = Math.max(1, Math.floor(var_core_value_sig0511.height / 21)),
      var_core_value_sigF62A = var_core_value_sigD955.splice(0, var_core_value_sig48BD);
    var_core_value_sigCB04.push({
      key: "notes-" + var_core_value_sig2902.pageId + "-0",
      slots: [{
        source: var_core_value_sig2902,
        rect: {
          x: var_core_value_sig0511.x,
          y: var_core_value_sig0511.y,
          width: var_core_value_sig0511.width,
          height: var_core_value_sig4383
        }
      }],
      notes: {
        lines: var_core_value_sigF62A,
        rect: var_core_value_sig186C,
        continuation: false,
        source: var_core_value_sig2902
      }
    });
    let var_core_value_sig8178 = 1;
    for (; var_core_value_sigD955.length;) var_core_value_sigCB04.push({
      key: "notes-" + var_core_value_sig2902.pageId + "-" + var_core_value_sig8178,
      slots: [],
      notes: {
        lines: var_core_value_sigD955.splice(0, var_core_value_sig429F),
        rect: var_core_value_sig0511,
        continuation: true,
        source: var_core_value_sig2902
      }
    }), var_core_value_sig8178++;
  }
  return var_core_value_sigCB04;
}
function Xe(var_core_value_sig947E, var_core_value_sig4545, var_core_value_sigF39A) {
  if (!var_core_value_sig947E) return [];
  let var_core_value_sigF79C = var_core_value_sig947E.replace(/\r\n/g, "\x0a").split("\x0a"),
    var_core_value_sig2E54 = [];
  return var_core_value_sigF79C.forEach(var_core_value_sig9989 => {
    let var_core_value_sig698E = Array.from(var_core_value_sig9989);
    if (var_core_value_sig698E.length === 0) var_core_value_sig2E54.push("");else {
      let var_core_value_sigE9ED = 0;
      for (; var_core_value_sigE9ED < var_core_value_sig698E.length;) {
        let var_core_value_sig2AD0 = var_core_value_sigE9ED + 1,
          var_core_value_sig3EEE = var_core_value_sig698E.length,
          var_core_value_sigBC46 = var_core_value_sigE9ED;
        for (; var_core_value_sig2AD0 <= var_core_value_sig3EEE;) {
          let var_core_value_sig7524 = Math.floor((var_core_value_sig2AD0 + var_core_value_sig3EEE) / 2);
          var_core_value_sigF39A(var_core_value_sig698E.slice(var_core_value_sigE9ED, var_core_value_sig7524).join("")) <= var_core_value_sig4545 ? (var_core_value_sigBC46 = var_core_value_sig7524, var_core_value_sig2AD0 = var_core_value_sig7524 + 1) : var_core_value_sig3EEE = var_core_value_sig7524 - 1;
        }
        let var_core_value_sig3D7D = Math.max(var_core_value_sigE9ED + 1, var_core_value_sigBC46);
        var_core_value_sig2E54.push(var_core_value_sig698E.slice(var_core_value_sigE9ED, var_core_value_sig3D7D).join("")), var_core_value_sigE9ED = var_core_value_sig3D7D;
      }
    }
  }), var_core_value_sig2E54;
}
function Ze() {
  return {
    layout: "FullPage",
    slidesPerPage: 2,
    handoutOrder: "Horizontal",
    paperSize: var_core_value_sigBE5E.A4,
    direction: var_core_value_sigB683.Landscape,
    margin: var_core_value_sig26EC.Normal,
    frameSlides: false,
    showSlideNumber: false
  };
}
function R(var_core_value_sig7658) {
  "@babel/helpers - typeof";

  return R = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sig2809) {
    return typeof var_core_value_sig2809;
  } : function (var_core_value_sig2DAB) {
    return var_core_value_sig2DAB && typeof Symbol == "function" && var_core_value_sig2DAB.constructor === Symbol && var_core_value_sig2DAB !== Symbol.prototype ? "symbol" : typeof var_core_value_sig2DAB;
  }, R(var_core_value_sig7658);
}
function Qe(var_core_value_sigDCF5, var_core_value_sigC786) {
  if (R(var_core_value_sigDCF5) != "object" || !var_core_value_sigDCF5) return var_core_value_sigDCF5;
  var var_core_value_sigC0D9 = var_core_value_sigDCF5[Symbol.toPrimitive];
  if (var_core_value_sigC0D9 !== undefined) {
    var var_core_value_sigF051 = var_core_value_sigC0D9.call(var_core_value_sigDCF5, var_core_value_sigC786 || "default");
    if (R(var_core_value_sigF051) != "object") return var_core_value_sigF051;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sigC786 === "string" ? String : Number)(var_core_value_sigDCF5);
}
function $e(var_core_value_sig5825) {
  var var_core_value_sig4EB7 = Qe(var_core_value_sig5825, "string");
  return R(var_core_value_sig4EB7) == "symbol" ? var_core_value_sig4EB7 : var_core_value_sig4EB7 + "";
}
function z(var_core_value_sig73AF, var_core_value_sig548A, var_core_value_sigE026) {
  return (var_core_value_sig548A = $e(var_core_value_sig548A)) in var_core_value_sig73AF ? Object.defineProperty(var_core_value_sig73AF, var_core_value_sig548A, {
    value: var_core_value_sigE026,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sig73AF[var_core_value_sig548A] = var_core_value_sigE026, var_core_value_sig73AF;
}
const B = var_core_value_sig281C("univer-pro.slide-print-dialog.service");
var et = class extends var_core_value_sig8F69 {
  constructor(...var_core_value_sig877E) {
    super(...var_core_value_sig877E), z(this, "_visible$", new var_core_value_sig062A(false)), z(this, "_options$", new var_core_value_sig062A(Ze())), z(this, "visible$", this._visible$["asObservable"]()), z(this, "options$", this._options$["asObservable"]());
  }
  get visible() {
    return this._visible$["getValue"]();
  }
  get options() {
    return this._options$["getValue"]();
  }
  open(var_core_value_sig20C8) {
    this._options$["next"]({
      ...Ze(),
      ...var_core_value_sig20C8
    }), this._visible$["next"](true);
  }
  close() {
    this._visible$["next"](false);
  }
  updateOptions(var_core_value_sigE9A7) {
    this._options$["next"]({
      ...this.options,
      ...var_core_value_sigE9A7
    });
  }
  dispose() {
    this._visible$["complete"](), this._options$["complete"](), super.dispose();
  }
};
const V = {
    id: "slide.operation.print-open",
    type: var_core_value_sig5A75.OPERATION,
    handler(var_core_value_sig339E, var_core_value_sig7550) {
      return var_core_value_sig339E.get(B).open(var_core_value_sig7550), true;
    }
  },
  H = {
    id: "slide.operation.print-close",
    type: var_core_value_sig5A75.OPERATION,
    handler(var_core_value_sig2983) {
      return var_core_value_sig2983.get(B).close(), true;
    }
  };
var U = class {
  constructor() {
    z(this, "_transformers", new Set());
  }
  register(var_core_value_sigBECE) {
    return this._transformers["add"](var_core_value_sigBECE), var_core_value_sigE722(() => this._transformers["delete"](var_core_value_sigBECE));
  }
  transform(var_core_value_sig1B22, var_core_value_sig7F72) {
    return Array.from(this._transformers).reduce((var_core_value_sigB577, var_core_value_sig9572) => var_core_value_sig9572(var_core_value_sigB577, var_core_value_sig7F72), var_core_value_sig1B22);
  }
};
function tt(var_core_value_sigE1B0, var_core_value_sigD4FF) {
  let var_core_value_sig1E5B = {};
  return {
    data: var_core_value_sig1E5B,
    order: var_core_value_sigD4FF.filter(var_core_value_sig7B2A => {
      let var_core_value_sig06CD = var_core_value_sigE1B0[var_core_value_sig7B2A];
      return var_core_value_sigB609(var_core_value_sig06CD) ? (var_core_value_sig1E5B[var_core_value_sig7B2A] = var_core_value_sig06CD, true) : false;
    })
  };
}
function nt(var_core_value_sigB680, var_core_value_sig1F64, var_core_value_sigDD1C) {
  let var_core_value_sig2C39 = var_core_value_sig1F64.getUnitId(),
    var_core_value_sigB7D1 = var_core_value_sigDD1C.getId(),
    var_core_value_sig64F0 = var_core_value_sigB680.getDrawingData(var_core_value_sig2C39, var_core_value_sigB7D1),
    var_core_value_sig85B1 = var_core_value_sigB680.getDrawingOrder(var_core_value_sig2C39, var_core_value_sigB7D1);
  if (var_core_value_sig85B1.some(var_core_value_sigA5F1 => !!var_core_value_sig64F0[var_core_value_sigA5F1])) return tt(var_core_value_sig64F0, var_core_value_sig85B1);
  let var_core_value_sig3141 = var_core_value_sigBDEE(var_core_value_sig2C39, var_core_value_sigB7D1, var_core_value_sigDD1C.resolveElements(), var_core_value_sig1F64.getThemeDataForPage(var_core_value_sigB7D1));
  return tt(var_core_value_sig3141.data, var_core_value_sig3141.order);
}
var rt = class extends var_core_value_sig8F69 {
  get container() {
    return this._container;
  }
  get root() {
    return this._root;
  }
  get _pageSize() {
    return var_core_value_sigC928(this._slidePage["getData"]().pageSize ?? this._slideModel["getSnapshot"]().defaultPageSize);
  }
  constructor(var_core_value_sig97A2, var_core_value_sig07E9, var_core_value_sig4F59, var_core_value_sigF564, var_core_value_sig8CFA = false) {
    super(), this._injector = var_core_value_sig97A2, this._slideDrawingService = var_core_value_sig07E9, this._slideModel = var_core_value_sig4F59, this._slidePage = var_core_value_sigF564, this._autoRender = var_core_value_sig8CFA, z(this, "_container", document.createElement("div")), z(this, "_root", document.createElement("div")), z(this, "_engine", undefined), z(this, "_scene", undefined), z(this, "_objectProvider", undefined), z(this, "_renderObjectMap", new Map()), z(this, "_drawingTransformService", undefined), this._drawingTransformService = this._injector["get"](U), this._objectProvider = this._injector["createInstance"](var_core_value_sig36E7), this._initRenderer(), this.disposeWithMe({
      dispose: () => {
        this._renderObjectMap["clear"](), this._scene["dispose"](), this._engine["dispose"]();
      }
    });
  }
  _initRenderer() {
    let var_core_value_sig2E11 = "slide-print-" + var_core_value_sig3C92(4),
      {
        width: var_core_value_sig5B69,
        height: var_core_value_sigB098
      } = this._pageSize;
    this._engine = new var_core_value_sig1E1B("", {
      elementWidth: var_core_value_sig5B69,
      elementHeight: var_core_value_sigB098,
      dpr: 1,
      renderMode: var_core_value_sig1F40.Printing
    }), this._scene = new var_core_value_sig4743(var_core_value_sig2E11, this._engine), this._scene["disableObjectsEvent"](), this._scene["transformByState"]({
      width: var_core_value_sig5B69,
      height: var_core_value_sigB098,
      scaleX: 1,
      scaleY: 1
    }), new var_core_value_sig3D46(var_core_value_sig89E6, this._scene, {
      left: 0,
      top: 0,
      width: var_core_value_sig5B69,
      height: var_core_value_sigB098,
      active: true
    }).openClip(), this._engine["mount"](this._container, false), this._engine["getCanvas"]().getContext().setId(var_core_value_sig2E11 + "_" + var_core_value_sig3C92(4)), this._renderSlidePage();
  }
  _renderSlidePage() {
    let var_core_value_sigCE71 = this._slideModel["getUnitId"](),
      var_core_value_sig21D8 = this._slidePage["getId"](),
      {
        width: var_core_value_sig2B65,
        height: var_core_value_sigD7EA
      } = this._pageSize,
      var_core_value_sigB33B = this._scene,
      var_core_value_sig24B9 = this._injector["createInstance"](var_core_value_sig6A78, "slide-print-page-background-" + var_core_value_sigCE71 + "-" + var_core_value_sig21D8, {
        left: 0,
        top: 0,
        width: var_core_value_sig2B65,
        height: var_core_value_sigD7EA,
        background: this._slidePage["resolveBackground"](),
        evented: false,
        zIndex: 1
      });
    var_core_value_sigB33B.addObject(var_core_value_sig24B9, 0), this._renderObjectMap["set"](var_core_value_sig24B9.oKey, var_core_value_sig24B9);
    let {
        data: var_core_value_sigE627,
        order: var_core_value_sigEF3E
      } = this._drawingTransformService["transform"](nt(this._slideDrawingService, this._slideModel, this._slidePage), {
        slideModel: this._slideModel,
        slidePage: this._slidePage
      }),
      var_core_value_sig273D = var_core_value_sig390D(var_core_value_sigE627),
      var_core_value_sig9A0D = new var_core_value_sigF7EF("slide-print-page-clip-" + var_core_value_sigCE71 + "-" + var_core_value_sig21D8, {
        left: 0,
        top: 0,
        width: var_core_value_sig2B65,
        height: var_core_value_sigD7EA
      });
    var_core_value_sigB33B.addObject(var_core_value_sig9A0D, 0), this._renderObjectMap["set"](var_core_value_sig9A0D.oKey, var_core_value_sig9A0D), this._objectProvider["convertToRenderObjects"](var_core_value_sig273D, var_core_value_sigEF3E, {
      unitId: var_core_value_sigCE71,
      subUnitId: var_core_value_sig21D8,
      pageOffsetLeft: 0,
      pageOffsetTop: 0,
      sceneType: var_core_value_sig18E0.PRESENTATION,
      showPlaceholder: false,
      requestRender: () => this._requestRender()
    }).forEach(var_core_value_sigD873 => {
      var_core_value_sigB33B.addObject(var_core_value_sigD873, var_core_value_sig3FC7), this._renderObjectMap["set"](var_core_value_sigD873.oKey, var_core_value_sigD873);
    }), var_core_value_sig393E(var_core_value_sig273D, var_core_value_sigEF3E, var_core_value_sigB33B, {
      unitId: var_core_value_sigCE71,
      subUnitId: var_core_value_sig21D8,
      pageOffsetLeft: 0,
      pageOffsetTop: 0,
      sceneType: var_core_value_sig18E0.PRESENTATION,
      showPlaceholder: false,
      objectProvider: this._objectProvider,
      renderObjectMap: this._renderObjectMap,
      requestRender: () => this._requestRender()
    }), var_core_value_sigB33B.makeDirty(true);
  }
  prepare() {
    this._root["style"].position = "absolute", this._root["style"].top = "0px", this._root["style"].left = "0px", this._root["style"].width = "100%", this._root["style"].height = "100%";
  }
  render() {
    let var_core_value_sigA319 = this._engine["getCanvas"]().getContext();
    this._scene["makeDirty"](true), var_core_value_sigA319.save(), this._scene["render"](), var_core_value_sigA319.restore();
  }
  _requestRender() {
    this._scene["makeDirty"](true), this._autoRender && this.render();
  }
};
const W = "univer-slide-print-page";
var it = class extends var_core_value_sig8F69 {
  constructor(var_core_value_sig2D58, var_core_value_sig223F, var_core_value_sigD749, var_core_value_sigCFFA, var_core_value_sig58C1, var_core_value_sig5090, var_core_value_sigC368) {
    super(), this._document = var_core_value_sig2D58, this._injector = var_core_value_sig223F, this._slideDrawingService = var_core_value_sigD749, this._slideModel = var_core_value_sigCFFA, this._plan = var_core_value_sig58C1, this._pageSize = var_core_value_sig5090, this._options = var_core_value_sigC368, z(this, "container", undefined), z(this, "_slideViews", []), this.container = this._document["createElement"]("div"), this.container["className"] = W, this.container["style"].position = "relative", this.container["style"].width = this._pageSize["width"] + "px", this.container["style"].height = this._pageSize["height"] + "px", this.container["style"].background = "#fff", this.container["style"].color = "#000", this.container["style"].overflow = "hidden", this._mountSlides(), this._mountNotes();
  }
  render() {
    this._slideViews["forEach"](var_core_value_sigA12B => var_core_value_sigA12B.render());
  }
  dispose() {
    this._slideViews["forEach"](var_core_value_sigF230 => var_core_value_sigF230.dispose()), this._slideViews["length"] = 0, this.container["remove"](), super.dispose();
  }
  _mountSlides() {
    this._plan["slots"].forEach(var_core_value_sig09B8 => {
      let var_core_value_sig6F91 = this._document["createElement"]("div");
      var_core_value_sig6F91.className = "univer-slide-print-slot", G(var_core_value_sig6F91, var_core_value_sig09B8.rect), var_core_value_sig6F91.style["overflow"] = "hidden", this.container["appendChild"](var_core_value_sig6F91);
      let var_core_value_sigF9C7 = this._options["showSlideNumber"] ? 20 : 0,
        var_core_value_sig8895 = {
          ...var_core_value_sig09B8.rect,
          x: 0,
          y: 0,
          height: Math.max(1, var_core_value_sig09B8.rect["height"] - var_core_value_sigF9C7)
        },
        var_core_value_sigC80B = var_core_value_sig09B8.source["width"] || this._slideModel["getSnapshot"]().defaultPageSize["width"],
        var_core_value_sig284F = var_core_value_sig09B8.source["height"] || this._slideModel["getSnapshot"]().defaultPageSize["height"],
        var_core_value_sigE154 = at(var_core_value_sigC80B, var_core_value_sig284F, var_core_value_sig8895),
        var_core_value_sig4632 = new rt(this._injector, this._slideDrawingService, this._slideModel, var_core_value_sig09B8.source["page"], this._options["preview"] ?? false);
      if (var_core_value_sig4632.prepare(), var_core_value_sig4632.container["className"] = "univer-slide-print-surface", var_core_value_sig4632.container["style"].position = "absolute", var_core_value_sig4632.container["style"].left = var_core_value_sigE154.x + "px", var_core_value_sig4632.container["style"].top = var_core_value_sigE154.y + "px", var_core_value_sig4632.container["style"].width = var_core_value_sigC80B + "px", var_core_value_sig4632.container["style"].height = var_core_value_sig284F + "px", var_core_value_sig4632.container["style"].transform = "scale(" + var_core_value_sigE154.width / var_core_value_sigC80B + ")", var_core_value_sig4632.container["style"].transformOrigin = "top\x20left", var_core_value_sig4632.container["appendChild"](var_core_value_sig4632.root), var_core_value_sig6F91.appendChild(var_core_value_sig4632.container), this._slideViews["push"](var_core_value_sig4632), this._options["frameSlides"]) {
        let var_core_value_sig1BBD = this._document["createElement"]("div");
        G(var_core_value_sig1BBD, var_core_value_sigE154), var_core_value_sig1BBD.style["border"] = "1px solid currentColor", var_core_value_sig1BBD.style["boxSizing"] = "border-box", var_core_value_sig1BBD.style["opacity"] = "0.5", var_core_value_sig1BBD.style["pointerEvents"] = "none", var_core_value_sig6F91.appendChild(var_core_value_sig1BBD);
      }
      if (this._options["showSlideNumber"]) {
        let var_core_value_sigF704 = this._document["createElement"]("div");
        var_core_value_sigF704.textContent = String(var_core_value_sig09B8.source["index"] + 1), var_core_value_sigF704.style["position"] = "absolute", var_core_value_sigF704.style["left"] = "0", var_core_value_sigF704.style["right"] = "0", var_core_value_sigF704.style["bottom"] = "0", var_core_value_sigF704.style["height"] = "20px", var_core_value_sigF704.style["font"] = "12px/20px Arial, sans-serif", var_core_value_sigF704.style["textAlign"] = "center", var_core_value_sig6F91.appendChild(var_core_value_sigF704);
      }
      var_core_value_sig09B8.noteLinesRect && this._mountHandoutLines(var_core_value_sig09B8.noteLinesRect);
    });
  }
  _mountHandoutLines(var_core_value_sigAD56) {
    let var_core_value_sigDB4A = this._document["createElement"]("div");
    G(var_core_value_sigDB4A, var_core_value_sigAD56), var_core_value_sigDB4A.style["display"] = "flex", var_core_value_sigDB4A.style["flexDirection"] = "column", var_core_value_sigDB4A.style["justifyContent"] = "space-evenly";
    for (let var_core_value_sig12F2 = 0; var_core_value_sig12F2 < 6; var_core_value_sig12F2++) {
      let var_core_value_sig2BCF = this._document["createElement"]("div");
      var_core_value_sig2BCF.style["borderBottom"] = "1px solid currentColor", var_core_value_sig2BCF.style["opacity"] = "0.4", var_core_value_sigDB4A.appendChild(var_core_value_sig2BCF);
    }
    this.container["appendChild"](var_core_value_sigDB4A);
  }
  _mountNotes() {
    let var_core_value_sig6418 = this._plan["notes"];
    if (!var_core_value_sig6418) return;
    let var_core_value_sig1896 = this._document["createElement"]("div");
    G(var_core_value_sig1896, var_core_value_sig6418.rect), var_core_value_sig1896.style["boxSizing"] = "border-box", var_core_value_sig1896.style["font"] = "14px/21px Arial, sans-serif", var_core_value_sig1896.style["overflow"] = "hidden", var_core_value_sig1896.style["whiteSpace"] = "pre", var_core_value_sig1896.dir = "auto", var_core_value_sig6418.lines["forEach"](var_core_value_sig2259 => {
      let var_core_value_sig9E2F = this._document["createElement"]("div");
      var_core_value_sig9E2F.style["height"] = "21px", var_core_value_sig9E2F.textContent = var_core_value_sig2259 || "\u00a0", var_core_value_sig1896.appendChild(var_core_value_sig9E2F);
    }), this.container["appendChild"](var_core_value_sig1896);
  }
};
function at(var_core_value_sig2162, var_core_value_sig2EAD, var_core_value_sig6774) {
  let var_core_value_sig340D = Math.min(var_core_value_sig6774.width / var_core_value_sig2162, var_core_value_sig6774.height / var_core_value_sig2EAD),
    var_core_value_sig82D4 = var_core_value_sig2162 * var_core_value_sig340D,
    var_core_value_sigBDE4 = var_core_value_sig2EAD * var_core_value_sig340D;
  return {
    x: var_core_value_sig6774.x + (var_core_value_sig6774.width - var_core_value_sig82D4) / 2,
    y: var_core_value_sig6774.y + (var_core_value_sig6774.height - var_core_value_sigBDE4) / 2,
    width: var_core_value_sig82D4,
    height: var_core_value_sigBDE4
  };
}
function G(var_core_value_sig7DF1, var_core_value_sigDC86) {
  var_core_value_sig7DF1.style["position"] = "absolute", var_core_value_sig7DF1.style["left"] = var_core_value_sigDC86.x + "px", var_core_value_sig7DF1.style["top"] = var_core_value_sigDC86.y + "px", var_core_value_sig7DF1.style["width"] = var_core_value_sigDC86.width + "px", var_core_value_sig7DF1.style["height"] = var_core_value_sigDC86.height + "px";
}
function ot(var_core_value_sig0B0C, var_core_value_sigA39E, var_core_value_sigBBEE) {
  let var_core_value_sig011D = var_core_value_sig0B0C.createElement("style"),
    var_core_value_sig6167 = var_core_value_sigBBEE.paperSize ? "size: " + var_core_value_sigBBEE.paperSize + "\x20" + var_core_value_sigBBEE.direction["toLowerCase"]() + ";" : "";
  return var_core_value_sig011D.className = "offline-printing-css", var_core_value_sig011D.textContent = "\n html, body {\n margin: 0;\n padding: 0;\n }\n ." + var_core_value_sig8B32 + " {\n position: relative;\n }\n ." + W + " {\n position: relative;\n width: " + var_core_value_sigA39E.width + "px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20" + var_core_value_sigA39E.height + "px;\n overflow: hidden;\n }\n @media print {\n @page {\n size: " + var_core_value_sigA39E.width + "px " + var_core_value_sigA39E.height + "px;\n " + var_core_value_sig6167 + "\n margin: 0;\n }\n ." + W + " {\n break-after: page;\n page-break-after: always;\n }\n ." + W + ":last-child {\n break-after: auto;\n page-break-after: auto;\n }\n }\n ", var_core_value_sig011D;
}
function st(var_core_value_sig65A1) {
  return Number.isFinite(var_core_value_sig65A1.from) && Number.isFinite(var_core_value_sig65A1.to) && var_core_value_sig65A1.from <= var_core_value_sig65A1.to;
}
function ct(var_core_value_sig7F19, var_core_value_sig7827) {
  return Math.max(0, Math.min(var_core_value_sig7827 - 1, var_core_value_sig7F19 - 1));
}
function lt(var_core_value_sig652C, var_core_value_sig7E32) {
  if (var_core_value_sig652C <= 0) return [];
  if (!var_core_value_sig7E32) return Array.from({
    length: var_core_value_sig652C
  }, (var_core_value_sig0285, var_core_value_sig777D) => var_core_value_sig777D);
  let var_core_value_sig4C07 = new Set();
  return var_core_value_sig7E32.forEach(var_core_value_sig3F4C => {
    if (!st(var_core_value_sig3F4C) || var_core_value_sig3F4C.to < 1 || var_core_value_sig3F4C.from > var_core_value_sig652C) return;
    let var_core_value_sigD65A = ct(var_core_value_sig3F4C.from, var_core_value_sig652C),
      var_core_value_sig5A13 = ct(var_core_value_sig3F4C.to, var_core_value_sig652C);
    for (let var_core_value_sigD082 = var_core_value_sigD65A; var_core_value_sigD082 <= var_core_value_sig5A13; var_core_value_sigD082 += 1) var_core_value_sig4C07.add(var_core_value_sigD082);
  }), Array.from(var_core_value_sig4C07).sort((var_core_value_sigF593, var_core_value_sig3607) => var_core_value_sigF593 - var_core_value_sig3607);
}
function K(var_core_value_sig79AB, var_core_value_sig8E74) {
  return function (var_core_value_sigB512, var_core_value_sigF2E6) {
    var_core_value_sig8E74(var_core_value_sigB512, var_core_value_sigF2E6, var_core_value_sig79AB);
  };
}
function q(var_core_value_sig104C, var_core_value_sig841D, var_core_value_sig90CB, var_core_value_sigBDF5) {
  var var_core_value_sigACC6 = arguments.length,
    var_core_value_sig1614 = var_core_value_sigACC6 < 3 ? var_core_value_sig841D : var_core_value_sigBDF5 === null ? var_core_value_sigBDF5 = Object.getOwnPropertyDescriptor(var_core_value_sig841D, var_core_value_sig90CB) : var_core_value_sigBDF5,
    var_core_value_sig85C3;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sig1614 = Reflect.decorate(var_core_value_sig104C, var_core_value_sig841D, var_core_value_sig90CB, var_core_value_sigBDF5);else {
    for (var var_core_value_sigB996 = var_core_value_sig104C.length - 1; var_core_value_sigB996 >= 0; var_core_value_sigB996--) (var_core_value_sig85C3 = var_core_value_sig104C[var_core_value_sigB996]) && (var_core_value_sig1614 = (var_core_value_sigACC6 < 3 ? var_core_value_sig85C3(var_core_value_sig1614) : var_core_value_sigACC6 > 3 ? var_core_value_sig85C3(var_core_value_sig841D, var_core_value_sig90CB, var_core_value_sig1614) : var_core_value_sig85C3(var_core_value_sig841D, var_core_value_sig90CB)) || var_core_value_sig1614);
  }
  return var_core_value_sigACC6 > 3 && var_core_value_sig1614 && Object.defineProperty(var_core_value_sig841D, var_core_value_sig90CB, var_core_value_sig1614), var_core_value_sig1614;
}
let J = class extends var_core_value_sig8F69 {
  constructor(var_core_value_sig34C8, var_core_value_sigB744, var_core_value_sigEAE2, var_core_value_sigE68A, var_core_value_sig3E68) {
    super(), this._univerInstanceService = var_core_value_sig34C8, this._injector = var_core_value_sigB744, this._slideDrawingService = var_core_value_sigEAE2, this._renderManagerService = var_core_value_sigE68A, this._printPreparationService = var_core_value_sig3E68, z(this, "_printing", false);
  }
  async print(var_core_value_sigF4C5, var_core_value_sig5410) {
    if (this._printing) return Promise.resolve(false);
    let var_core_value_sig492F = this._univerInstanceService["getUnit"](var_core_value_sigF4C5, var_core_value_sigED71.UNIVER_SLIDE);
    if (!var_core_value_sig492F) return Promise.resolve(false);
    let var_core_value_sig8EA0 = var_core_value_sig492F.getSnapshot(),
      var_core_value_sigA6F6 = lt(var_core_value_sig8EA0.slideOrder["length"], var_core_value_sig5410 == null ? undefined : var_core_value_sig5410.range).map(var_core_value_sigDBB7 => ({
        index: var_core_value_sigDBB7,
        page: var_core_value_sig492F.pageManager["getSlide"](var_core_value_sig8EA0.slideOrder[var_core_value_sigDBB7])
      })).filter(var_core_value_sigD0A8 => !!var_core_value_sigD0A8.page);
    if (var_core_value_sigA6F6.length === 0) return false;
    this._printing = true;
    try {
      await this._printPreparationService["prepare"]({
        unitId: var_core_value_sigF4C5,
        unitType: var_core_value_sigED71.UNIVER_SLIDE,
        dpr: 1
      });
    } catch (var_core_value_sigF4B9) {
      throw this._printing = false, var_core_value_sigF4B9;
    }
    let var_core_value_sigCDDA = this._createPrintFrame();
    if (!var_core_value_sigCDDA) return this._printing = false, false;
    try {
      let var_core_value_sig5CEE = this._preparePrintResources(var_core_value_sigCDDA, var_core_value_sig492F, var_core_value_sigA6F6, var_core_value_sig5410);
      return this._printPreparedPages(var_core_value_sigF4C5, var_core_value_sig8EA0.slideOrder, var_core_value_sigCDDA, var_core_value_sig5CEE);
    } catch (var_core_value_sigE92A) {
      return var_core_value_sigCDDA.frame["remove"](), this._printing = false, Promise.reject(var_core_value_sigE92A);
    }
  }
  _preparePrintResources(var_core_value_sigE243, var_core_value_sig74A8, var_core_value_sig21B2, var_core_value_sigDE08) {
    let var_core_value_sigACCB = var_core_value_sig74A8.getSnapshot(),
      var_core_value_sig7F33 = var_core_value_sigE243.document["createElement"]("canvas").getContext("2d");
    var_core_value_sig7F33 && (var_core_value_sig7F33.font = "14px Arial, sans-serif");
    let var_core_value_sig0C53 = He(Ue(var_core_value_sig21B2, var_core_value_sigACCB.defaultPageSize), var_core_value_sigACCB.defaultPageSize, var_core_value_sigDE08, var_core_value_sig362B => (var_core_value_sig7F33 == null ? undefined : var_core_value_sig7F33.measureText(var_core_value_sig362B).width) ?? var_core_value_sig362B.length * 14 * 0.55),
      var_core_value_sigEA04 = ot(var_core_value_sigE243.document, var_core_value_sig0C53.pageSize, var_core_value_sig0C53.options),
      var_core_value_sig7A62 = var_core_value_sigE243.document["createElement"]("div");
    var_core_value_sig7A62.className = var_core_value_sig8B32;
    let var_core_value_sig8109 = var_core_value_sig0C53.pages["map"](var_core_value_sig5CA5 => new it(var_core_value_sigE243.document, this._injector, this._slideDrawingService, var_core_value_sig74A8, var_core_value_sig5CA5, var_core_value_sig0C53.pageSize, var_core_value_sig0C53.options));
    return var_core_value_sig8109.forEach(var_core_value_sigE90F => var_core_value_sig7A62.appendChild(var_core_value_sigE90F.container)), var_core_value_sigE243.document["head"].appendChild(var_core_value_sigEA04), var_core_value_sigE243.document["body"].appendChild(var_core_value_sig7A62), {
      container: var_core_value_sig7A62,
      pageInstances: var_core_value_sig8109,
      style: var_core_value_sigEA04
    };
  }
  _printPreparedPages(var_core_value_sig7565, var_core_value_sigD4FB, var_core_value_sig3E71, var_core_value_sig01B3) {
    let {
        container: var_core_value_sig7442,
        pageInstances: var_core_value_sigDF87,
        style: var_core_value_sig9EE0
      } = var_core_value_sig01B3,
      var_core_value_sigF0511 = var_core_value_sig3E71.window,
      var_core_value_sig0B45 = var_core_value_sigF0511.onbeforeprint,
      var_core_value_sig36F8 = var_core_value_sigF0511.onafterprint;
    return new Promise(var_core_value_sigEFD4 => {
      let var_core_value_sig861B = var_core_value_sig0D69 => {
        var_core_value_sigDF87.forEach(var_core_value_sig27E5 => var_core_value_sig27E5.dispose()), var_core_value_sig7442.remove(), var_core_value_sig9EE0.remove(), var_core_value_sigF0511.onbeforeprint = var_core_value_sig0B45, var_core_value_sigF0511.onafterprint = var_core_value_sig36F8, var_core_value_sig3E71.frame["remove"](), this._restoreThumbnailRenders(var_core_value_sig7565, var_core_value_sigD4FB), this._printing = false, var_core_value_sigEFD4(var_core_value_sig0D69);
      };
      setTimeout(() => {
        if (var_core_value_sigF0511.onbeforeprint = var_core_value_sig8061 => {
          var_core_value_sig0B45 == null || var_core_value_sig0B45.call(var_core_value_sigF0511, var_core_value_sig8061), var_core_value_sigDF87.forEach(var_core_value_sig2AD8 => var_core_value_sig2AD8.render());
        }, var_core_value_sigF0511.onafterprint = var_core_value_sig4D4C => {
          var_core_value_sig36F8 == null || var_core_value_sig36F8.call(var_core_value_sigF0511, var_core_value_sig4D4C), var_core_value_sig861B(true);
        }, typeof var_core_value_sigF0511.print != "function") {
          var_core_value_sig861B(false);
          return;
        }
        try {
          var_core_value_sigF0511.print();
        } catch {
          var_core_value_sig861B(false);
        }
      }, 100);
    });
  }
  _createPrintFrame() {
    let var_core_value_sig03E1 = document.createElement("iframe");
    var_core_value_sig03E1.setAttribute("aria-hidden", "true"), var_core_value_sig03E1.setAttribute("data-univer-slides-print-frame", "true"), var_core_value_sig03E1.style["position"] = "fixed", var_core_value_sig03E1.style["left"] = "-10000px", var_core_value_sig03E1.style["top"] = "0", var_core_value_sig03E1.style["width"] = "1px", var_core_value_sig03E1.style["height"] = "1px", var_core_value_sig03E1.style["border"] = "0", var_core_value_sig03E1.style["pointerEvents"] = "none", document.body["appendChild"](var_core_value_sig03E1);
    let var_core_value_sigBB57 = var_core_value_sig03E1.contentWindow,
      var_core_value_sig7C4A = var_core_value_sig03E1.contentDocument ?? (var_core_value_sigBB57 == null ? undefined : var_core_value_sigBB57.document);
    return !var_core_value_sigBB57 || !var_core_value_sig7C4A ? (var_core_value_sig03E1.remove(), null) : (var_core_value_sig7C4A.open(), var_core_value_sig7C4A.write("<!doctype html><html><head></head><body></body></html>"), var_core_value_sig7C4A.close(), {
      frame: var_core_value_sig03E1,
      document: var_core_value_sig7C4A,
      window: var_core_value_sigBB57
    });
  }
  _restoreThumbnailRenders(var_core_value_sigE799, var_core_value_sigB601) {
    var_core_value_sigB601.forEach(var_core_value_sig5237 => {
      let var_core_value_sigBB00 = this._renderManagerService["getRenderUnitById"](var_core_value_sigE799 + "-thumb-" + var_core_value_sig5237);
      var_core_value_sigBB00 && (var_core_value_sigBB00.engine["resize"](), var_core_value_sigBB00.scene["makeDirty"](true), var_core_value_sigBB00.scene["render"]());
    });
  }
};
J = q([K(0, var_core_value_sig9B0D), K(1, var_core_value_sig3D2C(var_core_value_sigC56D)), K(2, var_core_value_sig39B7), K(3, var_core_value_sig3B10), K(4, var_core_value_sig050A)], J);
const Y = {
  id: "slide.operation.print",
  type: var_core_value_sig5A75.OPERATION,
  handler: async (var_core_value_sig4BBA, var_core_value_sig6201) => {
    let var_core_value_sig5151 = var_core_value_sig4BBA.get(var_core_value_sig9B0D),
      var_core_value_sigB542 = var_core_value_sig4BBA.get(J),
      var_core_value_sigBB6C = var_core_value_sig5151.getCurrentUnitOfType(var_core_value_sigED71.UNIVER_SLIDE);
    return var_core_value_sigBB6C ? var_core_value_sigB542.print(var_core_value_sigBB6C.getUnitId(), var_core_value_sig6201) : false;
  }
};
function ut(var_core_value_sigE2BF) {
  return {
    id: V.id,
    type: var_core_value_sig1179.BUTTON,
    title: "slides-print.menu",
    icon: "PrintIcon",
    tooltip: "slides-print.menu",
    hidden$: var_core_value_sig1AE5(var_core_value_sigE2BF, var_core_value_sigED71.UNIVER_SLIDE)
  };
}
const dt = {
  [var_core_value_sigEA92.OTHERS]: {
    [V.id]: {
      order: 0.2,
      gridLayout: {
        row: 1,
        column: 2,
        rowSpan: 2,
        showLabel: true
      },
      menuItemFactory: ut
    }
  }
};
var ft = "@univerjs-pro/slides-print",
  pt = "1.0.0-insiders.20260907-70fc579";
const mt = {};
let X = class extends var_core_value_sig8F69 {
  constructor(var_core_value_sig8B71) {
    super(), this._iconManager = var_core_value_sig8B71, this._registerIcons();
  }
  _registerIcons() {
    this.disposeWithMe(this._iconManager["register"]({
      PrintIcon: var_core_value_sigF5D1
    }));
  }
};
X = q([K(0, var_core_value_sig3D2C(var_core_value_sig2A26))], X);
function ht(var_core_value_sigB8C7, var_core_value_sigA56E) {
  let var_core_value_sig1998 = var_core_value_sigB8C7.trim();
  if (!var_core_value_sig1998) return {
    valid: true
  };
  let var_core_value_sigFF19 = [];
  for (let var_core_value_sigAEFB of var_core_value_sig1998.split(",")) {
    let var_core_value_sig7E54 = /^\s*(\d+)(?:\s*-\s*(\d+))?\s*$/["exec"](var_core_value_sigAEFB);
    if (!var_core_value_sig7E54) return {
      valid: false
    };
    let var_core_value_sig9A8D = Number(var_core_value_sig7E54[1]),
      var_core_value_sigC259 = Number(var_core_value_sig7E54[2] ?? var_core_value_sig7E54[1]);
    if (var_core_value_sig9A8D < 1 || var_core_value_sigC259 < var_core_value_sig9A8D || var_core_value_sigC259 > var_core_value_sigA56E) return {
      valid: false
    };
    var_core_value_sigFF19.push({
      from: var_core_value_sig9A8D,
      to: var_core_value_sigC259
    });
  }
  return {
    valid: true,
    range: var_core_value_sigFF19
  };
}
function gt(var_core_value_sig43B8) {
  return (var_core_value_sig43B8 == null ? undefined : var_core_value_sig43B8.map(({
    from: var_core_value_sig826B,
    to: var_core_value_sigCF89
  }) => var_core_value_sig826B === var_core_value_sigCF89 ? String(var_core_value_sig826B) : var_core_value_sig826B + "-" + var_core_value_sigCF89).join(",")) ?? "";
}
const Z = [1, 2, 3, 4, 6, 9];
function _t({
  model: var_core_value_sigD98F,
  page: var_core_value_sig66C0,
  plan: var_core_value_sig9D15
}) {
  let var_core_value_sigB785 = var_core_value_sig4654(null),
    var_core_value_sig130F = var_core_value_sig7100(var_core_value_sigC56D),
    var_core_value_sigC0E3 = var_core_value_sig7100(var_core_value_sig39B7),
    var_core_value_sig52F7 = Math.min(1, 560 / var_core_value_sig9D15.pageSize["width"]);
  return var_core_value_sigA06F(() => {
    let var_core_value_sig00CB = var_core_value_sigB785.current;
    if (!var_core_value_sig00CB) return;
    let var_core_value_sig77EE = new it(document, var_core_value_sig130F, var_core_value_sigC0E3, var_core_value_sigD98F, var_core_value_sig66C0, var_core_value_sig9D15.pageSize, {
      ...var_core_value_sig9D15.options,
      preview: true
    });
    return var_core_value_sig77EE.container["style"].transform = "scale(" + var_core_value_sig52F7 + ")", var_core_value_sig77EE.container["style"].transformOrigin = "top left", var_core_value_sig77EE.container["classList"].add("univer-shadow-sm"), var_core_value_sig00CB.appendChild(var_core_value_sig77EE.container), var_core_value_sig77EE.render(), () => var_core_value_sig77EE.dispose();
  }, [var_core_value_sig130F, var_core_value_sigD98F, var_core_value_sig66C0, var_core_value_sig9D15, var_core_value_sig52F7, var_core_value_sigC0E3]), var_core_value_sigC6BC("div", {
    ref: var_core_value_sigB785,
    className: "univer-relative univer-mx-auto univer-mb-7",
    style: {
      width: var_core_value_sig9D15.pageSize["width"] * var_core_value_sig52F7,
      height: var_core_value_sig9D15.pageSize["height"] * var_core_value_sig52F7
    }
  });
}
function vt({
  totalSlides: var_core_value_sig866F
}) {
  let var_core_value_sigDE3D = var_core_value_sig7100(B),
    var_core_value_sigF175 = var_core_value_sigA19A(var_core_value_sigDE3D.options$, var_core_value_sigDE3D.options),
    var_core_value_sig6A18 = var_core_value_sig7100(var_core_value_sig3A17),
    [var_core_value_sig4E3D, var_core_value_sig49B0] = var_core_value_sigB26B(() => gt(var_core_value_sigF175.range)),
    [var_core_value_sig2547, var_core_value_sigBCA9] = var_core_value_sigB26B(true),
    var_core_value_sig4CDF = var_core_value_sigF175.layout ?? "FullPage",
    var_core_value_sig3F79 = var_core_value_sigF175.slidesPerPage ?? 2;
  return var_core_value_sigC6BC("div", {
    className: var_core_value_sigFBA5("univer-h-full univer-overflow-y-auto", var_core_value_sigAC47),
    children: var_core_value_sig8EC2("div", {
      className: "univer-p-4",
      children: [var_core_value_sig8EC2(var_core_value_sig13D7, {
        label: var_core_value_sig6A18.t("slides-print.settings.range"),
        children: [var_core_value_sigC6BC(var_core_value_sig90C0, {
          value: var_core_value_sig4E3D,
          placeholder: var_core_value_sig6A18.t("slides-print.settings.rangePlaceholder"),
          onChange: var_core_value_sig9F76 => {
            var_core_value_sig49B0(var_core_value_sig9F76);
            let var_core_value_sigB008 = ht(var_core_value_sig9F76, var_core_value_sig866F);
            var_core_value_sigBCA9(var_core_value_sigB008.valid), var_core_value_sigB008.valid && var_core_value_sigDE3D.updateOptions({
              range: var_core_value_sigB008.range
            });
          }
        }), !var_core_value_sig2547 && var_core_value_sigC6BC("div", {
          className: "univer-mt-1 univer-text-xs univer-text-red-500",
          children: var_core_value_sig6A18.t("slides-print.settings.rangeInvalid")
        })]
      }), var_core_value_sigC6BC(var_core_value_sig13D7, {
        label: var_core_value_sig6A18.t("slides-print.settings.layout"),
        children: var_core_value_sigC6BC(var_core_value_sigD9DB, {
          className: "univer-w-full",
          value: var_core_value_sig4CDF,
          options: [{
            label: var_core_value_sig6A18.t("slides-print.settings.fullPage"),
            value: "FullPage"
          }, {
            label: var_core_value_sig6A18.t("slides-print.settings.notesPage"),
            value: "NotesPage"
          }, {
            label: var_core_value_sig6A18.t("slides-print.settings.handout"),
            value: "Handout"
          }],
          onChange: var_core_value_sig8721 => {
            let var_core_value_sig08BA = Object.values(I).find(var_core_value_sig9C9F => var_core_value_sig9C9F === var_core_value_sig8721);
            var_core_value_sig08BA && var_core_value_sigDE3D.updateOptions({
              layout: var_core_value_sig08BA,
              direction: var_core_value_sig08BA === "FullPage" ? var_core_value_sigB683.Landscape : var_core_value_sigB683.Portrait,
              frameSlides: var_core_value_sig08BA !== "FullPage",
              showSlideNumber: var_core_value_sig08BA !== "FullPage"
            });
          }
        })
      }), var_core_value_sig4CDF === "Handout" && var_core_value_sig8EC2(var_core_value_sig019B, {
        children: [var_core_value_sigC6BC(var_core_value_sig13D7, {
          label: var_core_value_sig6A18.t("slides-print.settings.slidesPerPage"),
          children: var_core_value_sigC6BC(var_core_value_sigD9DB, {
            className: "univer-w-full",
            value: String(var_core_value_sig3F79),
            options: Z.map(var_core_value_sigDBB5 => ({
              label: String(var_core_value_sigDBB5),
              value: String(var_core_value_sigDBB5)
            })),
            onChange: var_core_value_sigCFAC => {
              let var_core_value_sig237B = Z.find(var_core_value_sigFDEA => String(var_core_value_sigFDEA) === var_core_value_sigCFAC);
              var_core_value_sig237B && var_core_value_sigDE3D.updateOptions({
                slidesPerPage: var_core_value_sig237B
              });
            }
          })
        }), var_core_value_sig3F79 >= 4 && var_core_value_sigC6BC(var_core_value_sig13D7, {
          label: var_core_value_sig6A18.t("slides-print.settings.order"),
          children: var_core_value_sig8EC2(var_core_value_sigC2BB, {
            value: var_core_value_sigF175.handoutOrder ?? "Horizontal",
            onChange: var_core_value_sigFEAB => {
              (var_core_value_sigFEAB === "Horizontal" || var_core_value_sigFEAB === "Vertical") && var_core_value_sigDE3D.updateOptions({
                handoutOrder: var_core_value_sigFEAB
              });
            },
            children: [var_core_value_sigC6BC(var_core_value_sigF1B2, {
              value: "Horizontal",
              children: var_core_value_sig6A18.t("slides-print.settings.horizontal")
            }), var_core_value_sigC6BC(var_core_value_sigF1B2, {
              value: "Vertical",
              children: var_core_value_sig6A18.t("slides-print.settings.vertical")
            })]
          })
        })]
      }), var_core_value_sigC6BC(var_core_value_sig13D7, {
        label: var_core_value_sig6A18.t("slides-print.settings.paperSize"),
        children: var_core_value_sigC6BC(var_core_value_sigD9DB, {
          className: "univer-w-full",
          value: var_core_value_sigF175.paperSize ?? var_core_value_sigBE5E.A4,
          options: var_core_value_sigD948.map(var_core_value_sigE347 => ({
            label: var_core_value_sigE347,
            value: var_core_value_sigE347
          })),
          onChange: var_core_value_sig3C5B => {
            let var_core_value_sig200B = var_core_value_sigD948.find(var_core_value_sig86D0 => var_core_value_sig86D0 === var_core_value_sig3C5B);
            var_core_value_sig200B && var_core_value_sigDE3D.updateOptions({
              paperSize: var_core_value_sig200B
            });
          }
        })
      }), var_core_value_sigC6BC(var_core_value_sig13D7, {
        label: var_core_value_sig6A18.t("slides-print.settings.orientation"),
        children: var_core_value_sig8EC2(var_core_value_sigC2BB, {
          value: var_core_value_sigF175.direction ?? var_core_value_sigB683.Landscape,
          onChange: var_core_value_sig3863 => {
            (var_core_value_sig3863 === var_core_value_sigB683.Portrait || var_core_value_sig3863 === var_core_value_sigB683.Landscape) && var_core_value_sigDE3D.updateOptions({
              direction: var_core_value_sig3863
            });
          },
          children: [var_core_value_sigC6BC(var_core_value_sigF1B2, {
            value: var_core_value_sigB683.Portrait,
            children: var_core_value_sig6A18.t("slides-print.settings.portrait")
          }), var_core_value_sigC6BC(var_core_value_sigF1B2, {
            value: var_core_value_sigB683.Landscape,
            children: var_core_value_sig6A18.t("slides-print.settings.landscape")
          })]
        })
      }), var_core_value_sigC6BC(var_core_value_sig13D7, {
        label: var_core_value_sig6A18.t("slides-print.settings.margin"),
        children: var_core_value_sigC6BC(var_core_value_sigD9DB, {
          className: "univer-w-full",
          value: var_core_value_sigF175.margin ?? var_core_value_sig26EC.Normal,
          options: [{
            label: var_core_value_sig6A18.t("slides-print.settings.normal"),
            value: var_core_value_sig26EC.Normal
          }, {
            label: var_core_value_sig6A18.t("slides-print.settings.narrow"),
            value: var_core_value_sig26EC.Narrow
          }, {
            label: var_core_value_sig6A18.t("slides-print.settings.wide"),
            value: var_core_value_sig26EC.Wide
          }, {
            label: var_core_value_sig6A18.t("slides-print.settings.none"),
            value: var_core_value_sig26EC.None
          }],
          onChange: var_core_value_sigC97C => {
            (var_core_value_sigC97C === var_core_value_sig26EC.Normal || var_core_value_sigC97C === var_core_value_sig26EC.Narrow || var_core_value_sigC97C === var_core_value_sig26EC.Wide || var_core_value_sigC97C === var_core_value_sig26EC.None) && var_core_value_sigDE3D.updateOptions({
              margin: var_core_value_sigC97C
            });
          }
        })
      }), var_core_value_sigC6BC(var_core_value_sig13D7, {
        label: var_core_value_sig6A18.t("slides-print.settings.formatting"),
        children: var_core_value_sig8EC2("div", {
          className: "univer-flex univer-flex-col univer-gap-3",
          children: [var_core_value_sigC6BC(var_core_value_sig481B, {
            checked: var_core_value_sigF175.frameSlides ?? false,
            onChange: var_core_value_sigC4B1 => {
              typeof var_core_value_sigC4B1 == "boolean" && var_core_value_sigDE3D.updateOptions({
                frameSlides: var_core_value_sigC4B1
              });
            },
            children: var_core_value_sig6A18.t("slides-print.settings.frameSlides")
          }), var_core_value_sigC6BC(var_core_value_sig481B, {
            checked: var_core_value_sigF175.showSlideNumber ?? false,
            onChange: var_core_value_sig1BD9 => {
              typeof var_core_value_sig1BD9 == "boolean" && var_core_value_sigDE3D.updateOptions({
                showSlideNumber: var_core_value_sig1BD9
              });
            },
            children: var_core_value_sig6A18.t("slides-print.settings.slideNumber")
          })]
        })
      })]
    })
  });
}
function yt() {
  let var_core_value_sig880E = var_core_value_sig7100(var_core_value_sig6884),
    var_core_value_sigC9ED = var_core_value_sig7100(B),
    var_core_value_sigB57B = var_core_value_sigA19A(var_core_value_sigC9ED.options$, var_core_value_sigC9ED.options),
    var_core_value_sig780B = var_core_value_sig7100(var_core_value_sig9B0D),
    var_core_value_sig7D1B = var_core_value_sig7100(var_core_value_sig3A17),
    var_core_value_sig7BE0 = var_core_value_sig7100(var_core_value_sig050A),
    [var_core_value_sig7D40, var_core_value_sig6C7E] = var_core_value_sigB26B(false),
    [var_core_value_sig68BE, var_core_value_sig04C6] = var_core_value_sigB26B(),
    [var_core_value_sigCA05] = var_core_value_sigB26B(() => {
      var var_core_value_sigE43E;
      return (var_core_value_sigE43E = var_core_value_sig780B.getCurrentUnitOfType(var_core_value_sigED71.UNIVER_SLIDE)) == null ? undefined : var_core_value_sigE43E.getUnitId();
    }),
    var_core_value_sig2F2B = var_core_value_sigCA05 ? var_core_value_sig780B.getUnit(var_core_value_sigCA05, var_core_value_sigED71.UNIVER_SLIDE) : undefined,
    var_core_value_sig70AF = var_core_value_sig2F2B == null ? undefined : var_core_value_sig2F2B.getSnapshot(),
    var_core_value_sigD04E = var_core_value_sig770E(() => {
      if (!var_core_value_sig2F2B || !var_core_value_sig70AF || var_core_value_sig68BE !== var_core_value_sigCA05) return;
      let var_core_value_sigA937 = var_core_value_sigC928(var_core_value_sig70AF.defaultPageSize),
        var_core_value_sigCAD5 = Ue(lt(var_core_value_sig70AF.slideOrder["length"], var_core_value_sigB57B.range).map(var_core_value_sig4CD2 => ({
          index: var_core_value_sig4CD2,
          page: var_core_value_sig2F2B.pageManager["getSlide"](var_core_value_sig70AF.slideOrder[var_core_value_sig4CD2])
        })).filter(var_core_value_sig48CA => !!var_core_value_sig48CA.page), var_core_value_sigA937),
        var_core_value_sigE503 = document.createElement("canvas").getContext("2d");
      return var_core_value_sigE503 && (var_core_value_sigE503.font = "14px Arial, sans-serif"), He(var_core_value_sigCAD5, var_core_value_sigA937, var_core_value_sigB57B, var_core_value_sig50AF => (var_core_value_sigE503 == null ? undefined : var_core_value_sigE503.measureText(var_core_value_sig50AF).width) ?? var_core_value_sig50AF.length * 14 * 0.55);
    }, [var_core_value_sig2F2B, var_core_value_sigB57B, var_core_value_sig68BE, var_core_value_sig70AF, var_core_value_sigCA05]);
  return var_core_value_sigA06F(() => {
    if (!var_core_value_sig2F2B || !var_core_value_sigCA05) return;
    let var_core_value_sig48DD = true;
    return var_core_value_sig7BE0.prepare({
      unitId: var_core_value_sigCA05,
      unitType: var_core_value_sigED71.UNIVER_SLIDE,
      dpr: 1
    }).then(() => {
      var_core_value_sig48DD && var_core_value_sig04C6(var_core_value_sigCA05);
    }, () => {
      var_core_value_sig48DD && var_core_value_sig04C6(undefined);
    }), () => {
      var_core_value_sig48DD = false;
    };
  }, [var_core_value_sig2F2B, var_core_value_sig7BE0, var_core_value_sigCA05]), !var_core_value_sig2F2B || !var_core_value_sig70AF ? null : var_core_value_sig8EC2("div", {
    className: "univer-absolute univer-inset-0 univer-z-[100] univer-flex univer-size-full univer-flex-col univer-overflow-hidden univer-bg-gray-100 dark:!univer-bg-gray-900",
    children: [var_core_value_sig8EC2("div", {
      className: var_core_value_sigFBA5("univer-flex univer-h-16 univer-items-center univer-justify-between univer-bg-gray-0 univer-px-4 dark:!univer-bg-gray-900", var_core_value_sigA363),
      children: [var_core_value_sigC6BC("div", {
        className: "univer-ml-2 univer-text-base univer-font-medium univer-text-gray-900 dark:!univer-text-gray-0",
        children: var_core_value_sig7D1B.t("slides-print.header.pages", String((var_core_value_sigD04E == null ? undefined : var_core_value_sigD04E.pages["length"]) ?? 0))
      }), var_core_value_sig8EC2("div", {
        className: "univer-flex univer-gap-2",
        children: [var_core_value_sigC6BC(var_core_value_sig8775, {
          disabled: var_core_value_sig7D40,
          onClick: () => var_core_value_sig880E.executeCommand(H.id),
          children: var_core_value_sig7D1B.t("slides-print.header.cancel")
        }), var_core_value_sigC6BC(var_core_value_sig8775, {
          variant: "primary",
          disabled: var_core_value_sig7D40 || !(var_core_value_sigD04E != null && var_core_value_sigD04E.pages["length"]),
          onClick: async () => {
            var_core_value_sig6C7E(true);
            try {
              (await var_core_value_sig880E.executeCommand(Y.id, var_core_value_sigB57B)) && (await var_core_value_sig880E.executeCommand(H.id));
            } finally {
              var_core_value_sig6C7E(false);
            }
          },
          children: var_core_value_sig7D40 ? var_core_value_sig7D1B.t("slides-print.header.printing") : var_core_value_sig7D1B.t("slides-print.header.next")
        })]
      })]
    }), var_core_value_sig8EC2("div", {
      className: "univer-flex univer-flex-1 univer-overflow-hidden",
      children: [var_core_value_sigC6BC("div", {
        className: var_core_value_sigFBA5("univer-flex-1 univer-overflow-auto univer-p-7", var_core_value_sigAC47),
        "aria-busy": !var_core_value_sigD04E,
        children: var_core_value_sigD04E ? var_core_value_sigD04E.pages["map"](var_core_value_sig5E6A => var_core_value_sigC6BC(_t, {
          model: var_core_value_sig2F2B,
          page: var_core_value_sig5E6A,
          plan: var_core_value_sigD04E
        }, var_core_value_sig5E6A.key)) : var_core_value_sigC6BC("div", {
          className: "univer-flex univer-size-full univer-items-center univer-justify-center",
          role: "status",
          "aria-label": var_core_value_sig7D1B.t("slides-print.header.printing"),
          children: var_core_value_sigC6BC(var_core_value_sig3082, {
            className: "univer-size-8\x20univer-animate-spin\x20univer-text-gray-500",
            "aria-hidden": "true"
          })
        })
      }), var_core_value_sigC6BC("div", {
        className: "univer-box-border univer-h-full univer-w-[312px] univer-flex-none univer-bg-gray-0 dark:!univer-bg-gray-900",
        children: var_core_value_sigC6BC(vt, {
          totalSlides: var_core_value_sig70AF.slideOrder["length"]
        })
      })]
    })]
  });
}
function bt() {
  let var_core_value_sigB99B = var_core_value_sig7100(B);
  return var_core_value_sigA19A(var_core_value_sigB99B.visible$, var_core_value_sigB99B.visible) ? var_core_value_sigC6BC(yt, {}) : null;
}
let Q = class extends var_core_value_sig8F69 {
  constructor(var_core_value_sigB7FC, var_core_value_sig9CD9, var_core_value_sigFD0C, var_core_value_sig849B) {
    super(), this._commandService = var_core_value_sigB7FC, this._menuManagerService = var_core_value_sig9CD9, this._uiPartsService = var_core_value_sigFD0C, this._injector = var_core_value_sig849B, this._initCommands(), this._initUIParts(), this._initMenus();
  }
  _initCommands() {
    [Y, V, H].forEach(var_core_value_sigA942 => this.disposeWithMe(this._commandService["registerCommand"](var_core_value_sigA942)));
  }
  _initUIParts() {
    this.disposeWithMe(this._uiPartsService["registerComponent"](var_core_value_sigCC93.GLOBAL, () => var_core_value_sig8FD9(bt, this._injector)));
  }
  _initMenus() {
    this._menuManagerService["mergeMenu"](dt);
  }
};
Q = q([K(0, var_core_value_sig6884), K(1, var_core_value_sig5964), K(2, var_core_value_sig808B), K(3, var_core_value_sig3D2C(var_core_value_sigC56D))], Q);
let $ = class extends var_core_value_sig0281 {
  constructor(var_core_value_sig5F1A = mt, var_core_value_sigB455, var_core_value_sig5241) {
    super(), this._config = var_core_value_sig5F1A, this._injector = var_core_value_sigB455, this._configService = var_core_value_sig5241;
    let {
      menu: var_core_value_sigC6E5,
      ...var_core_value_sigCEFB
    } = var_core_value_sigB16B({}, mt, this._config);
    var_core_value_sigC6E5 && this._configService["setConfig"]("menu", var_core_value_sigC6E5, {
      merge: true
    }), this._configService["setConfig"]("slides-print.config", var_core_value_sigCEFB);
  }
  onStarting() {
    this._injector["has"](var_core_value_sig050A) || this._injector["add"]([var_core_value_sig050A, {
      useClass: var_core_value_sigEEDB
    }]), this._injector["add"]([X]), this._injector["get"](X), this._injector["has"](U) || this._injector["add"]([U]), var_core_value_sig585D(this._injector, [[J], [B, {
      useClass: et
    }], [Q]]);
  }
  onReady() {
    this._injector["get"](Q);
  }
};
z($, "pluginName", "SLIDES_PRINT_PLUGIN"), z($, "packageName", ft), z($, "version", pt), z($, "type", var_core_value_sigED71.UNIVER_SLIDE), $ = q([var_core_value_sig7BAF(var_core_value_sigD3F5, var_core_value_sigEB6A, var_core_value_sigE161, var_core_value_sig27F9), K(1, var_core_value_sig3D2C(var_core_value_sigC56D)), K(2, var_core_value_sig066E)], $);
export { V as OpenSlidePrintDialogOperation, U as SlidePrintDrawingTransformService, Be as SlidePrintHandoutOrder, I as SlidePrintLayoutType, Y as SlidePrintOperation, dt as SlidesPrintMenuSchema, $ as UniverSlidesPrintPlugin };
