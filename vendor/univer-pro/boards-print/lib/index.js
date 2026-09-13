import { CommandType as var_core_value_sig156F, DependentOn as var_core_value_sigDD51, Disposable as var_core_value_sigF057, ICommandService as var_core_value_sig72F6, IConfigService as var_core_value_sig9FBA, IImageIoService as var_core_value_sigFE01, IUniverInstanceService as var_core_value_sigA2CE, ImageSourceType as var_core_value_sig1975, Inject as var_core_value_sig6EA1, Injector as var_core_value_sig029F, LocaleService as var_core_value_sig3767, Plugin as var_core_value_sig670B, ThemeService as var_core_value_sig6912, UniverInstanceType as var_core_value_sigE235, delayAnimationFrame as var_core_value_sig7664, generateRandomId as var_core_value_sig2281, merge as var_core_value_sig5E86, registerDependencies as var_core_value_sig6998, toDisposable as var_core_value_sigF639 } from "@univerjs/core";
import { MessageType as var_core_value_sigEAE5 } from "@univerjs/design";
import { BuiltInUIPart as var_core_value_sigE94C, ILocalFileService as var_core_value_sig6D47, IMessageService as var_core_value_sigCB82, IUIPartsService as var_core_value_sigCF4E, connectInjector as var_core_value_sig6CAD, useDependency as var_core_value_sig8CF5, useObservable as var_core_value_sigDDD7 } from "@univerjs/ui";
import { BoardBackgroundType as var_core_value_sigB2CE, BoardElementType as var_core_value_sig443C, IBoardElementService as var_core_value_sig39B1, ResolveBoardCaptureBoundsCommand as var_core_value_sig210D, UniverBoardsPlugin as var_core_value_sigB4B4, resolveBoardElementParentChain as var_core_value_sigD407 } from "@univerjs-pro/boards";
import { BOARDS_UI_PLUGIN_CONFIG_KEY as var_core_value_sig63F3, BOARD_RENDER_LAYER_INDEX as var_core_value_sig6A71, BoardSettingsMenuContributionSubmenu as var_core_value_sig3BF6, IBoardSettingsMenuContributionService as var_core_value_sig38CE, UniverBoardsUIPlugin as var_core_value_sig62B7, createBoardElementRenderObject as var_core_value_sig37A8, resolveBoardRenderAdapters as var_core_value_sigA90D } from "@univerjs-pro/boards-ui";
import { IShapeHostAdapterRegistry as var_core_value_sig7A3C } from "@univerjs-pro/engine-shape";
import { IPrintPreparationService as var_core_value_sig0511, PrintPreparationService as var_core_value_sig1F44 } from "@univerjs-pro/print";
import { FormulaShapeResultStatus as var_core_value_sigCB04, ShapeFormulaService as var_core_value_sig947E } from "@univerjs-pro/shape-editor";
import { CanvasRenderMode as var_core_value_sig4545, Engine as var_core_value_sigF39A, ICanvasColorService as var_core_value_sigF79C, MAIN_VIEW_PORT_KEY as var_core_value_sig2E54, Scene as var_core_value_sig7658, Viewport as var_core_value_sigDCF5 } from "@univerjs/engine-render";
import { BehaviorSubject as var_core_value_sigC786 } from "rxjs";
import { UniverLicensePlugin as var_core_value_sigC0D9 } from "@univerjs-pro/license";
import { DownloadImageIcon as var_core_value_sigF051, LoadingMultiIcon as var_core_value_sig5825, PrintIcon as var_core_value_sig4EB7 } from "@univerjs/icons";
import { jsx as var_core_value_sig73AF, jsxs as var_core_value_sig548A } from "react/jsx-runtime";
function L(var_core_value_sig74A8) {
  "@babel/helpers - typeof";

  return L = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sigD873) {
    return typeof var_core_value_sigD873;
  } : function (var_core_value_sigA12B) {
    return var_core_value_sigA12B && typeof Symbol == "function" && var_core_value_sigA12B.constructor === Symbol && var_core_value_sigA12B !== Symbol.prototype ? "symbol" : typeof var_core_value_sigA12B;
  }, L(var_core_value_sig74A8);
}
function xe(var_core_value_sig21B2, var_core_value_sigDE08) {
  if (L(var_core_value_sig21B2) != "object" || !var_core_value_sig21B2) return var_core_value_sig21B2;
  var var_core_value_sigACCB = var_core_value_sig21B2[Symbol.toPrimitive];
  if (var_core_value_sigACCB !== undefined) {
    var var_core_value_sig7F33 = var_core_value_sigACCB.call(var_core_value_sig21B2, var_core_value_sigDE08 || "default");
    if (L(var_core_value_sig7F33) != "object") return var_core_value_sig7F33;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sigDE08 === "string" ? String : Number)(var_core_value_sig21B2);
}
function Se(var_core_value_sig0C53) {
  var var_core_value_sigEA04 = xe(var_core_value_sig0C53, "string");
  return L(var_core_value_sigEA04) == "symbol" ? var_core_value_sigEA04 : var_core_value_sigEA04 + "";
}
function R(var_core_value_sig7A62, var_core_value_sig8109, var_core_value_sig7565) {
  return (var_core_value_sig8109 = Se(var_core_value_sig8109)) in var_core_value_sig7A62 ? Object.defineProperty(var_core_value_sig7A62, var_core_value_sig8109, {
    value: var_core_value_sig7565,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sig7A62[var_core_value_sig8109] = var_core_value_sig7565, var_core_value_sig7A62;
}
var Ce = class extends var_core_value_sigF057 {
  get canvas() {
    return this._engine["getCanvasElement"]();
  }
  get bounds() {
    return this._options["bounds"];
  }
  get height() {
    return this._options["bounds"].height * this._options["scale"];
  }
  get pixelRatio() {
    return this._options["pixelRatio"];
  }
  get scale() {
    return this._options["scale"];
  }
  get width() {
    return this._options["bounds"].width * this._options["scale"];
  }
  constructor(var_core_value_sigF230, var_core_value_sig09B8 = document) {
    super(), this._options = var_core_value_sigF230, R(this, "container", undefined), R(this, "_engine", undefined), R(this, "_scene", undefined), R(this, "_objects", []);
    let var_core_value_sig6F91 = Math.max(1, var_core_value_sigF230.bounds["width"] * var_core_value_sigF230.scale),
      var_core_value_sigF9C7 = Math.max(1, var_core_value_sigF230.bounds["height"] * var_core_value_sigF230.scale),
      var_core_value_sig8895 = "board-print-" + var_core_value_sig2281(4);
    this.container = var_core_value_sig09B8.createElement("div"), this.container["setAttribute"]("data-univer-board-print-page", "true"), this.container["style"].position = "relative", this.container["style"].width = var_core_value_sig6F91 + "px", this.container["style"].height = var_core_value_sigF9C7 + "px", this.container["style"].overflow = "hidden", this._engine = new var_core_value_sigF39A("", {
      elementWidth: var_core_value_sig6F91,
      elementHeight: var_core_value_sigF9C7,
      dpr: var_core_value_sigF230.pixelRatio,
      renderMode: var_core_value_sigF230.renderMode
    }, var_core_value_sigF230.canvasColorService), this._scene = new var_core_value_sig7658(var_core_value_sig8895, this._engine), this._scene["disableObjectsEvent"](), this._scene["transformByState"]({
      width: var_core_value_sigF230.bounds["width"],
      height: var_core_value_sigF230.bounds["height"],
      scaleX: var_core_value_sigF230.scale,
      scaleY: var_core_value_sigF230.scale
    });
    let var_core_value_sigC80B = new var_core_value_sigDCF5(var_core_value_sig2E54, this._scene, {
      left: 0,
      top: 0,
      width: var_core_value_sigF230.bounds["width"],
      height: var_core_value_sigF230.bounds["height"],
      active: true
    });
    var_core_value_sigC80B.openClip(), var_core_value_sigC80B.updateScrollVal({
      viewportScrollX: var_core_value_sigF230.bounds["left"],
      viewportScrollY: var_core_value_sigF230.bounds["top"]
    }), this._engine["mount"](this.container, false), this._engine["getCanvas"]().getContext().setId(var_core_value_sig8895 + "_" + var_core_value_sig2281(4)), this.disposeWithMe(this._scene["beforeRender$"].subscribe(var_core_value_sig3EEE => {
      var_core_value_sig3EEE && this._drawBackground(var_core_value_sig3EEE.getContext(), var_core_value_sig6F91, var_core_value_sigF9C7);
    })), this._createObjects(), this.disposeWithMe({
      dispose: () => {
        this._objects["length"] = 0, this._engine["dispose"](), this.container["remove"]();
      }
    });
  }
  render() {
    this._objects["forEach"](var_core_value_sigBC46 => var_core_value_sigBC46.makeDirty(true)), this._scene["makeDirty"](true), this._scene["render"]();
  }
  _createObjects() {
    let {
        elementData: var_core_value_sig284F,
        elementOrder: var_core_value_sigE154,
        imageIoService: var_core_value_sig4632,
        localeService: var_core_value_sig12F2,
        renderAdapters: var_core_value_sig2259,
        resolveFormulaPresentation: var_core_value_sig9E2F,
        themeData: var_core_value_sigD082,
        unitId: var_core_value_sigDBB7
      } = this._options,
      var_core_value_sigD0A8 = new Map(var_core_value_sigE154.map((var_core_value_sig3D7D, var_core_value_sig27E5) => [var_core_value_sig3D7D, var_core_value_sig27E5]));
    var_core_value_sigE154.forEach(var_core_value_sig8061 => {
      let var_core_value_sig4D4C = var_core_value_sig284F[var_core_value_sig8061];
      if (!we(var_core_value_sig284F, var_core_value_sig4D4C)) return;
      let var_core_value_sigC9E0 = var_core_value_sig37A8({
        unitId: var_core_value_sigDBB7,
        elementDataItem: var_core_value_sig4D4C,
        elementData: var_core_value_sig284F,
        zIndex: Te(var_core_value_sig284F, var_core_value_sig4D4C, var_core_value_sigE154.length, var_core_value_sigD0A8),
        imageIoService: var_core_value_sig4632,
        localeService: var_core_value_sig12F2,
        adapters: var_core_value_sig2259,
        formulaPresentation: var_core_value_sig9E2F(var_core_value_sig4D4C),
        animateFormulaPresentation: false,
        themeData: var_core_value_sigD082
      });
      if (!var_core_value_sigC9E0) return;
      let var_core_value_sig76BA = var_core_value_sig4D4C.element["type"] === var_core_value_sig443C.Container ? var_core_value_sig6A71.container : var_core_value_sig6A71.element;
      this._scene["addObject"](var_core_value_sigC9E0, var_core_value_sig76BA), this._objects["push"](var_core_value_sigC9E0);
    });
  }
  _drawBackground(var_core_value_sigF4B9, var_core_value_sig5CEE, var_core_value_sigE92A) {
    let {
      backgroundColor: var_core_value_sig362B,
      backgroundImage: var_core_value_sig5CA5
    } = this._options;
    if (!(!var_core_value_sig362B && !var_core_value_sig5CA5)) {
      if (var_core_value_sigF4B9.save(), var_core_value_sig362B && (var_core_value_sigF4B9.fillStyle = var_core_value_sig362B, var_core_value_sigF4B9.fillRect(0, 0, var_core_value_sig5CEE, var_core_value_sigE92A)), var_core_value_sig5CA5) {
        let var_core_value_sig2AD0 = Ee(var_core_value_sig5CEE, var_core_value_sigE92A, var_core_value_sig5CA5.image["naturalWidth"], var_core_value_sig5CA5.image["naturalHeight"], var_core_value_sig5CA5.fit);
        var_core_value_sigF4B9.drawImage(var_core_value_sig5CA5.image, var_core_value_sig2AD0.left, var_core_value_sig2AD0.top, var_core_value_sig2AD0.width, var_core_value_sig2AD0.height);
      }
      var_core_value_sigF4B9.restore();
    }
  }
};
function we(var_core_value_sigD4FB, var_core_value_sig3E71) {
  return var_core_value_sig3E71 ? var_core_value_sig3E71.element["visible"] !== false && var_core_value_sigD407(var_core_value_sigD4FB, var_core_value_sig3E71.elementId).every(var_core_value_sigE90F => {
    var var_core_value_sigEFD4;
    return ((var_core_value_sigEFD4 = var_core_value_sigD4FB[var_core_value_sigE90F]) == null ? undefined : var_core_value_sigEFD4.element["visible"]) !== false;
  }) : false;
}
function Te(var_core_value_sig01B3, var_core_value_sig7442, var_core_value_sigDF87, var_core_value_sig9EE0) {
  let var_core_value_sigF0511 = var_core_value_sig9EE0.get(var_core_value_sig7442.elementId) ?? 0;
  return var_core_value_sig7442.element["type"] === var_core_value_sig443C.Container ? var_core_value_sigD407(var_core_value_sig01B3, var_core_value_sig7442.elementId).length * var_core_value_sigDF87 + var_core_value_sigF0511 : var_core_value_sigF0511;
}
function Ee(var_core_value_sig0B45, var_core_value_sig36F8, var_core_value_sig03E1, var_core_value_sigBB57, var_core_value_sig7C4A) {
  if (var_core_value_sig7C4A === "stretch" || var_core_value_sig03E1 <= 0 || var_core_value_sigBB57 <= 0) return {
    left: 0,
    top: 0,
    width: var_core_value_sig0B45,
    height: var_core_value_sig36F8
  };
  let var_core_value_sigE799 = var_core_value_sig7C4A === "contain" ? Math.min(var_core_value_sig0B45 / var_core_value_sig03E1, var_core_value_sig36F8 / var_core_value_sigBB57) : Math.max(var_core_value_sig0B45 / var_core_value_sig03E1, var_core_value_sig36F8 / var_core_value_sigBB57),
    var_core_value_sigB601 = var_core_value_sig03E1 * var_core_value_sigE799,
    var_core_value_sig8B71 = var_core_value_sigBB57 * var_core_value_sigE799;
  return {
    left: (var_core_value_sig0B45 - var_core_value_sigB601) / 2,
    top: (var_core_value_sig36F8 - var_core_value_sig8B71) / 2,
    width: var_core_value_sigB601,
    height: var_core_value_sig8B71
  };
}
var z = class {
  constructor() {
    R(this, "_transformers", new Set());
  }
  register(var_core_value_sig861B) {
    return this._transformers["add"](var_core_value_sig861B), var_core_value_sigF639(() => this._transformers["delete"](var_core_value_sig861B));
  }
  transform(var_core_value_sig5237, var_core_value_sigBB00) {
    return Array.from(this._transformers).reduce((var_core_value_sigFBFA, var_core_value_sigF602) => var_core_value_sigF602(var_core_value_sigFBFA, var_core_value_sigBB00), var_core_value_sig5237);
  }
};
function B(var_core_value_sigAEFB, var_core_value_sig826B) {
  return function (var_core_value_sig7E54, var_core_value_sig9A8D) {
    var_core_value_sig826B(var_core_value_sig7E54, var_core_value_sig9A8D, var_core_value_sigAEFB);
  };
}
function V(var_core_value_sigCF89, var_core_value_sig00CB, var_core_value_sig77EE, var_core_value_sig9F76) {
  var var_core_value_sigB008 = arguments.length,
    var_core_value_sig8721 = var_core_value_sigB008 < 3 ? var_core_value_sig00CB : var_core_value_sig9F76 === null ? var_core_value_sig9F76 = Object.getOwnPropertyDescriptor(var_core_value_sig00CB, var_core_value_sig77EE) : var_core_value_sig9F76,
    var_core_value_sig08BA;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sig8721 = Reflect.decorate(var_core_value_sigCF89, var_core_value_sig00CB, var_core_value_sig77EE, var_core_value_sig9F76);else {
    for (var var_core_value_sigDBB5 = var_core_value_sigCF89.length - 1; var_core_value_sigDBB5 >= 0; var_core_value_sigDBB5--) (var_core_value_sig08BA = var_core_value_sigCF89[var_core_value_sigDBB5]) && (var_core_value_sig8721 = (var_core_value_sigB008 < 3 ? var_core_value_sig08BA(var_core_value_sig8721) : var_core_value_sigB008 > 3 ? var_core_value_sig08BA(var_core_value_sig00CB, var_core_value_sig77EE, var_core_value_sig8721) : var_core_value_sig08BA(var_core_value_sig00CB, var_core_value_sig77EE)) || var_core_value_sig8721);
  }
  return var_core_value_sigB008 > 3 && var_core_value_sig8721 && Object.defineProperty(var_core_value_sig00CB, var_core_value_sig77EE, var_core_value_sig8721), var_core_value_sig8721;
}
const H = 16384,
  U = 5000;
let W = class extends var_core_value_sigF057 {
  constructor(var_core_value_sigC259, var_core_value_sig9C9F, var_core_value_sigFDEA, var_core_value_sig86D0, var_core_value_sig4CD2, var_core_value_sig48CA, var_core_value_sig50AF, var_core_value_sigA942, var_core_value_sigA621, var_core_value_sigBBFF, var_core_value_sig8889, var_core_value_sig32F8, var_core_value_sig5B67) {
    super(), this._commandService = var_core_value_sigC259, this._univerInstanceService = var_core_value_sig9C9F, this._printPreparationService = var_core_value_sigFDEA, this._boardElementService = var_core_value_sig86D0, this._shapeHostAdapterRegistry = var_core_value_sig4CD2, this._shapeFormulaService = var_core_value_sig48CA, this._configService = var_core_value_sig50AF, this._imageIoService = var_core_value_sigA942, this._localeService = var_core_value_sigA621, this._themeService = var_core_value_sigBBFF, this._canvasColorService = var_core_value_sig8889, this._compositionService = var_core_value_sig32F8, this._localFileService = var_core_value_sig5B67, R(this, "_preparing$", new var_core_value_sigC786(null)), R(this, "preparing$", this._preparing$["asObservable"]());
  }
  async print(var_core_value_sig1758, var_core_value_sig4805) {
    if (this._preparing$["getValue"]()) return false;
    this._preparing$["next"]("print");
    let var_core_value_sigE67E = Ae();
    if (!var_core_value_sigE67E) return this._preparing$["next"](null), false;
    let var_core_value_sig2902;
    try {
      let var_core_value_sig1BBD = await this._createCanvasView(var_core_value_sig1758, var_core_value_sig4805, "print", var_core_value_sigE67E.document);
      if (!var_core_value_sig1BBD) return false;
      var_core_value_sig2902 = var_core_value_sig1BBD;
      let var_core_value_sigF704 = var_core_value_sigE67E.document["createElement"]("style");
      return var_core_value_sigF704.textContent = je(var_core_value_sig2902.width, var_core_value_sig2902.height), var_core_value_sigE67E.document["head"].appendChild(var_core_value_sigF704), var_core_value_sigE67E.document["body"].appendChild(var_core_value_sig2902.container), await Me(var_core_value_sigE67E, () => var_core_value_sig1BBD.render());
    } finally {
      var_core_value_sig2902 == null || var_core_value_sig2902.dispose(), var_core_value_sigE67E.frame["remove"](), this._preparing$["next"](null);
    }
  }
  async exportImage(var_core_value_sig9989, var_core_value_sig698E, var_core_value_sig2809) {
    if (this._preparing$["getValue"]()) return false;
    this._preparing$["next"]("image");
    let var_core_value_sig2DAB;
    try {
      let var_core_value_sig2BCF = await this._createCanvasView(var_core_value_sig9989, var_core_value_sig698E, var_core_value_sig2809, document);
      if (!var_core_value_sig2BCF) return false;
      var_core_value_sig2DAB = var_core_value_sig2BCF, var_core_value_sig2DAB.render();
      let var_core_value_sig0D69 = var_core_value_sig2809 === "png" ? "image/png" : "image/jpeg",
        var_core_value_sig480E = await Ne(var_core_value_sig2DAB.canvas, var_core_value_sig0D69, var_core_value_sig2809 === "jpeg" ? 0.92 : undefined);
      return var_core_value_sig480E ? (this._localFileService["downloadFile"](var_core_value_sig480E, Pe(this._getBoardModel(var_core_value_sig9989), var_core_value_sig2809)), true) : false;
    } finally {
      var_core_value_sig2DAB == null || var_core_value_sig2DAB.dispose(), this._preparing$["next"](null);
    }
  }
  dispose() {
    this._preparing$["complete"](), super.dispose();
  }
  async _createCanvasView(var_core_value_sig877E, var_core_value_sig20C8, var_core_value_sigE9A7, var_core_value_sigBECE) {
    let var_core_value_sig1B22 = this._getBoardModel(var_core_value_sig877E);
    if (!var_core_value_sig1B22 || var_core_value_sig1B22.getActivePageId() !== var_core_value_sig20C8) return false;
    let var_core_value_sig7F72 = await this._resolveBounds(var_core_value_sig877E, var_core_value_sig20C8);
    if (!var_core_value_sig7F72) return false;
    let var_core_value_sig7B2A = Oe(var_core_value_sig7F72, var_core_value_sigE9A7 === "print" ? 1 : Math.max(1, Math.min(globalThis.devicePixelRatio || 1, 2)));
    if (!var_core_value_sig7B2A) return false;
    await this._printPreparationService["prepare"]({
      unitId: var_core_value_sig877E,
      unitType: var_core_value_sigE235.UNIVER_BOARD,
      dpr: var_core_value_sig7B2A.pixelRatio
    }), await this._waitForFormulaShapes(var_core_value_sig877E);
    let var_core_value_sig06CD = this._compositionService["transform"]({
        data: this._boardElementService["getElementData"](var_core_value_sig877E, var_core_value_sig20C8),
        order: this._boardElementService["getElementOrder"](var_core_value_sig877E, var_core_value_sig20C8)
      }, {
        boardModel: var_core_value_sig1B22,
        subUnitId: var_core_value_sig20C8
      }),
      var_core_value_sigA5F1 = var_core_value_sig06CD.data,
      var_core_value_sig97A2 = var_core_value_sig06CD.order;
    return await this._preloadElementImages(var_core_value_sigA5F1), new Ce({
      ...awaitthis._resolveBackground(var_core_value_sig1B22, var_core_value_sig20C8, var_core_value_sigE9A7),
      bounds: var_core_value_sig7F72,
      canvasColorService: this._canvasColorService,
      elementData: var_core_value_sigA5F1,
      elementOrder: var_core_value_sig97A2,
      imageIoService: this._imageIoService,
      localeService: this._localeService,
      pixelRatio: var_core_value_sig7B2A.pixelRatio,
      renderAdapters: var_core_value_sigA90D(this._configService["getConfig"](var_core_value_sig63F3) ?? undefined),
      renderMode: var_core_value_sigE9A7 === "print" ? var_core_value_sig4545.Printing : var_core_value_sig4545.Rendering,
      resolveFormulaPresentation: var_core_value_sig26DB => this._resolveFormulaPresentation(var_core_value_sig877E, var_core_value_sig20C8, var_core_value_sig26DB),
      scale: var_core_value_sig7B2A.scale,
      themeData: var_core_value_sig1B22.getThemeData(),
      unitId: var_core_value_sig877E
    }, var_core_value_sigBECE);
  }
  async _resolveBounds(var_core_value_sig07E9, var_core_value_sig4F59) {
    let var_core_value_sigF564 = await this._commandService["executeCommand"](var_core_value_sig210D.id, {
      unitId: var_core_value_sig07E9,
      subUnitId: var_core_value_sig4F59,
      padding: 32
    });
    return var_core_value_sigF564 && var_core_value_sigF564.ok ? var_core_value_sigF564.bounds : false;
  }
  _getBoardModel(var_core_value_sig8CFA) {
    return this._univerInstanceService["getUnit"](var_core_value_sig8CFA, var_core_value_sigE235.UNIVER_BOARD) ?? undefined;
  }
  async _waitForFormulaShapes(var_core_value_sig2E11) {
    var var_core_value_sig5B69;
    let var_core_value_sigB098 = this._shapeHostAdapterRegistry["get"](var_core_value_sigE235.UNIVER_BOARD),
      var_core_value_sigCE71 = ((var_core_value_sigB098 == null || (var_core_value_sig5B69 = var_core_value_sigB098.listShapesInUnit) == null ? undefined : var_core_value_sig5B69.call(var_core_value_sigB098, var_core_value_sig2E11)) ?? []).filter(var_core_value_sigF0F9 => {
        var var_core_value_sig1A0F;
        return (var_core_value_sig1A0F = var_core_value_sigF0F9.shapeData["formulaBinding"]) == null ? undefined : var_core_value_sig1A0F.formula["trim"]();
      });
    if (var_core_value_sigCE71.length === 0) return;
    let var_core_value_sig21D8 = Date.now() + U;
    for (; Date.now() < var_core_value_sig21D8;) {
      if (var_core_value_sigCE71.every(var_core_value_sig7524 => {
        let var_core_value_sig2AD8 = this._shapeFormulaService["getResult"](var_core_value_sig7524);
        return var_core_value_sig2AD8 && var_core_value_sig2AD8.status !== var_core_value_sigCB04.PENDING;
      })) return;
      await K();
    }
    throw Error("Board output timed out while resolving formula shapes for " + var_core_value_sig2E11);
  }
  _resolveFormulaPresentation(var_core_value_sig2B65, var_core_value_sigD7EA, var_core_value_sigB33B) {
    return ke(var_core_value_sigB33B) ? this._shapeFormulaService["getPresentation"]({
      unitId: var_core_value_sig2B65,
      subUnitId: var_core_value_sigD7EA,
      shapeId: var_core_value_sigB33B.elementId
    }) : undefined;
  }
  async _preloadElementImages(var_core_value_sig24B9) {
    let var_core_value_sigE627 = Object.values(var_core_value_sig24B9).flatMap(var_core_value_sigFBA4 => {
      let var_core_value_sig4383 = var_core_value_sigFBA4.element;
      if (var_core_value_sig4383.visible === false) return [];
      if (var_core_value_sig4383.type === var_core_value_sig443C.Image) return [this._loadImageSource(var_core_value_sig4383.source, var_core_value_sig4383.imageSourceType ?? var_core_value_sig1975.URL)];
      let var_core_value_sig186C = var_core_value_sig4383.type === var_core_value_sig443C.Shape ? var_core_value_sig4383.shapeData["fill"] : var_core_value_sig4383.type === var_core_value_sig443C.Container ? var_core_value_sig4383.containerData["shapeData"].fill : undefined;
      return var_core_value_sig186C != null && var_core_value_sig186C.fillImageSource ? [this._loadImageSource(var_core_value_sig186C.fillImageSource, var_core_value_sig186C.fillImageSourceType ?? var_core_value_sig1975.URL)] : [];
    });
    await Promise.all(var_core_value_sigE627), await document.fonts["ready"];
  }
  async _resolveBackground(var_core_value_sigEF3E, var_core_value_sig273D, var_core_value_sig9A0D) {
    var var_core_value_sigA319;
    let var_core_value_sig2D58 = De(var_core_value_sigEF3E, var_core_value_sig9A0D);
    if (var_core_value_sig2D58 === "transparent") return {};
    let var_core_value_sig223F = this._themeService["getColorFromTheme"](this._themeService["darkMode"] ? "gray.1000" : "gray.0");
    if (var_core_value_sig2D58 === "white") return var_core_value_sig9A0D === "print" ? {} : {
      backgroundColor: var_core_value_sig223F
    };
    let var_core_value_sigD749 = (var_core_value_sigA319 = var_core_value_sigEF3E.getPage(var_core_value_sig273D)) == null ? undefined : var_core_value_sigA319.background;
    if ((var_core_value_sigD749 == null ? undefined : var_core_value_sigD749.type) === var_core_value_sigB2CE.Solid) return {
      backgroundColor: var_core_value_sigD749.color
    };
    if ((var_core_value_sigD749 == null ? undefined : var_core_value_sigD749.type) === var_core_value_sigB2CE.Image) {
      let var_core_value_sigD955 = await this._loadImageSource(var_core_value_sigD749.source, var_core_value_sigD749.imageSourceType ?? var_core_value_sig1975.URL);
      return {
        backgroundColor: var_core_value_sig223F,
        backgroundImage: var_core_value_sigD955 ? {
          fit: var_core_value_sigD749.fit ?? "cover",
          image: var_core_value_sigD955
        } : undefined
      };
    }
    return {
      backgroundColor: this._themeService["getColorFromTheme"]("gray.50")
    };
  }
  async _loadImageSource(var_core_value_sigCFFA, var_core_value_sig58C1) {
    let var_core_value_sig5090 = this._imageIoService["getImageSourceCache"](var_core_value_sigCFFA, var_core_value_sig58C1);
    if (var_core_value_sig5090) return await G(var_core_value_sig5090);
    let var_core_value_sigC368 = var_core_value_sig58C1 === var_core_value_sig1975.UUID ? await this._imageIoService["getImage"](var_core_value_sigCFFA) : var_core_value_sigCFFA;
    if (!var_core_value_sigC368) return null;
    let var_core_value_sigAD56 = document.createElement("img");
    var_core_value_sigAD56.crossOrigin = "anonymous", var_core_value_sigAD56.src = var_core_value_sigC368;
    let var_core_value_sigDB4A = await G(var_core_value_sigAD56);
    return var_core_value_sigDB4A && this._imageIoService["addImageSourceCache"](var_core_value_sigCFFA, var_core_value_sig58C1, var_core_value_sigDB4A), var_core_value_sigDB4A;
  }
};
W = V([B(0, var_core_value_sig72F6), B(1, var_core_value_sigA2CE), B(2, var_core_value_sig0511), B(3, var_core_value_sig6EA1(var_core_value_sig39B1)), B(4, var_core_value_sig6EA1(var_core_value_sig7A3C)), B(5, var_core_value_sig6EA1(var_core_value_sig947E)), B(6, var_core_value_sig9FBA), B(7, var_core_value_sigFE01), B(8, var_core_value_sig6EA1(var_core_value_sig3767)), B(9, var_core_value_sig6EA1(var_core_value_sig6912)), B(10, var_core_value_sigF79C), B(11, var_core_value_sig6EA1(z)), B(12, var_core_value_sig6D47)], W);
function De(var_core_value_sigCFAC, var_core_value_sig237B) {
  let var_core_value_sigFEAB = var_core_value_sigCFAC.getActivePage().background;
  return var_core_value_sigFEAB && var_core_value_sigFEAB.type !== var_core_value_sigB2CE.None ? "scene" : var_core_value_sig237B === "png" ? "transparent" : "white";
}
function Oe(var_core_value_sigE347, var_core_value_sig3C5B) {
  if (var_core_value_sigE347.width <= 0 || var_core_value_sigE347.height <= 0 || var_core_value_sig3C5B <= 0) return null;
  let var_core_value_sig200B = Math.min(1, H / (var_core_value_sigE347.width * var_core_value_sig3C5B), H / (var_core_value_sigE347.height * var_core_value_sig3C5B), Math.sqrt(24000000 / (var_core_value_sigE347.width * var_core_value_sigE347.height * var_core_value_sig3C5B * var_core_value_sig3C5B)));
  return Number.isFinite(var_core_value_sig200B) && var_core_value_sig200B > 0 ? {
    pixelRatio: var_core_value_sig3C5B,
    scale: var_core_value_sig200B
  } : null;
}
function ke(var_core_value_sig3863) {
  if (var_core_value_sig3863.element["type"] === var_core_value_sig443C.Shape) return var_core_value_sig3863.element["shapeData"].formulaBinding;
  if (var_core_value_sig3863.element["type"] === var_core_value_sig443C.Container) return var_core_value_sig3863.element["containerData"].shapeData["formulaBinding"];
}
function Ae() {
  let var_core_value_sigC97C = document.createElement("iframe");
  var_core_value_sigC97C.setAttribute("aria-hidden", "true"), var_core_value_sigC97C.setAttribute("data-univer-boards-print-frame", "true"), var_core_value_sigC97C.style["position"] = "fixed", var_core_value_sigC97C.style["left"] = "-10000px", var_core_value_sigC97C.style["top"] = "0", var_core_value_sigC97C.style["width"] = "1px", var_core_value_sigC97C.style["height"] = "1px", var_core_value_sigC97C.style["border"] = "0", var_core_value_sigC97C.style["pointerEvents"] = "none", document.body["appendChild"](var_core_value_sigC97C);
  let var_core_value_sigC4B1 = var_core_value_sigC97C.contentWindow,
    var_core_value_sig1BD9 = var_core_value_sigC97C.contentDocument ?? (var_core_value_sigC4B1 == null ? undefined : var_core_value_sigC4B1.document);
  return !var_core_value_sigC4B1 || !var_core_value_sig1BD9 ? (var_core_value_sigC97C.remove(), null) : (var_core_value_sig1BD9.open(), var_core_value_sig1BD9.write("<!doctype html><html><head></head><body></body></html>"), var_core_value_sig1BD9.close(), {
    frame: var_core_value_sigC97C,
    document: var_core_value_sig1BD9,
    window: var_core_value_sigC4B1
  });
}
function je(var_core_value_sigE43E, var_core_value_sigA937) {
  return "\n html, body {\n margin: 0;\n padding: 0;\n width: " + var_core_value_sigE43E + "px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20" + var_core_value_sigA937 + "px;\n overflow: hidden;\n }\n @page {\n size: " + var_core_value_sigE43E + "px " + var_core_value_sigA937 + "px;\n margin: 0;\n }\n [data-univer-board-print-page] {\n position: relative;\n width: " + var_core_value_sigE43E + "px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20" + var_core_value_sigA937 + "px;\n overflow: hidden;\n break-after: auto;\n page-break-after: auto;\n }\n ";
}
function Me(var_core_value_sigCAD5, var_core_value_sigE503) {
  return new Promise(var_core_value_sig6418 => {
    let var_core_value_sig1896 = var_core_value_sigCAD5.window["onbeforeprint"],
      var_core_value_sig0285 = var_core_value_sigCAD5.window["onafterprint"],
      var_core_value_sig777D = false,
      var_core_value_sig3F4C = var_core_value_sig48BD => {
        var_core_value_sig777D || (var_core_value_sig777D = true, var_core_value_sigCAD5.window["onbeforeprint"] = var_core_value_sig1896, var_core_value_sigCAD5.window["onafterprint"] = var_core_value_sig0285, var_core_value_sig6418(var_core_value_sig48BD));
      };
    var_core_value_sigCAD5.window["onbeforeprint"] = var_core_value_sig429F => {
      var_core_value_sig1896 == null || var_core_value_sig1896.call(var_core_value_sigCAD5.window, var_core_value_sig429F), var_core_value_sigE503();
    }, var_core_value_sigCAD5.window["onafterprint"] = var_core_value_sigF62A => {
      var_core_value_sig0285 == null || var_core_value_sig0285.call(var_core_value_sigCAD5.window, var_core_value_sigF62A), var_core_value_sig3F4C(true);
    }, globalThis.setTimeout(() => {
      try {
        var_core_value_sigCAD5.window["focus"](), var_core_value_sigCAD5.window["print"]();
      } catch {
        var_core_value_sig3F4C(false);
      }
    }, 100);
  });
}
function G(var_core_value_sig48DD) {
  return var_core_value_sig48DD.complete ? Promise.resolve(var_core_value_sig48DD.naturalWidth > 0 && var_core_value_sig48DD.naturalHeight > 0 ? var_core_value_sig48DD : null) : new Promise(var_core_value_sigD65A => {
    let var_core_value_sig5A13;
    function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig5E18(var_core_value_sig8178) {
      var_core_value_sig5A13 !== undefined && globalThis.clearTimeout(var_core_value_sig5A13), var_core_value_sig48DD.removeEventListener("load", fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig8FD5), var_core_value_sig48DD.removeEventListener("error", fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD7C3), var_core_value_sigD65A(var_core_value_sig8178);
    }
    function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig8FD5() {
      fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig5E18(var_core_value_sig48DD);
    }
    function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD7C3() {
      fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig5E18(null);
    }
    var_core_value_sig5A13 = globalThis.setTimeout(() => fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig5E18(null), U), var_core_value_sig48DD.addEventListener("load", fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig8FD5), var_core_value_sig48DD.addEventListener("error", fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD7C3);
  });
}
function Ne(var_core_value_sig5E6A, var_core_value_sigB7FC, var_core_value_sig9CD9) {
  return new Promise(var_core_value_sigF2E6 => var_core_value_sig5E6A.toBlob(var_core_value_sigF2E6, var_core_value_sigB7FC, var_core_value_sig9CD9));
}
function Pe(var_core_value_sigFD0C, var_core_value_sig849B) {
  var var_core_value_sig5F1A;
  return ((var_core_value_sigFD0C == null || (var_core_value_sig5F1A = var_core_value_sigFD0C.getSnapshot().name) == null ? undefined : var_core_value_sig5F1A.trim()) || "board").replace(/[\\/:*?"<>|]/g, "-") + "." + v197;
}
function K() {
  return v221();
}
const q = {
    id: "boards-print.operation.print",
    type: v207.OPERATION,
    handler: async v199 => {
      let v200 = v199.get(v213).getCurrentUnitOfType(v220.UNIVER_BOARD);
      if (!v200) return false;
      try {
        let v131 = await v199.get(W).print(v200.getUnitId(), v200.getActivePageId());
        return v131 || v199.get(v229).show({
          type: v226.Error,
          content: v199.get(v217).t("boards-print.errors.printFailed")
        }), v131;
      } catch {
        return v199.get(v229).show({
          type: v226.Error,
          content: v199.get(v217).t("boards-print.errors.printFailed")
        }), false;
      }
    }
  },
  J = {
    id: "boards-print.operation.export-image",
    type: v207.OPERATION,
    handler: async (v201, v202) => {
      if ((v202 == null ? undefined : v202.format) !== "png" && (v202 == null ? undefined : v202.format) !== "jpeg") return false;
      let v203 = v201.get(v213).getCurrentUnitOfType(v220.UNIVER_BOARD);
      if (!v203) return false;
      try {
        let v132 = await v201.get(W).exportImage(v203.getUnitId(), v203.getActivePageId(), v202.format);
        return v132 || v201.get(v229).show({
          type: v226.Error,
          content: v201.get(v217).t("boards-print.errors.exportFailed")
        }), v132;
      } catch {
        return v201.get(v229).show({
          type: v226.Error,
          content: v201.get(v217).t("boards-print.errors.exportFailed")
        }), false;
      }
    }
  },
  Y = "boards-print.config",
  X = {};
var Fe = "@univerjs-pro/boards-print",
  Ie = "1.0.0-insiders.20260907-70fc579";
function Le() {
  let v204 = v232(v217),
    v205 = v233(v232(W).preparing$, null, true);
  if (!v205) return null;
  let v206 = v204.t(v205 === "print" ? "boards-print.loading.print" : "boards-print.loading.image");
  return v263("div", {
    "data-u-comp": "boards-printing-mask",
    "aria-busy": "true",
    "aria-label": v206,
    className: "univer-fixed univer-inset-0 univer-z-[1000] univer-flex univer-cursor-wait univer-items-center univer-justify-center univer-bg-gray-100 dark:!univer-bg-gray-900",
    children: v264("div", {
      role: "status",
      "aria-live": "polite",
      className: "univer-flex univer-items-center univer-gap-3 univer-rounded-lg univer-bg-gray-0 univer-px-5 univer-py-4 univer-text-sm univer-text-gray-900 univer-shadow-lg dark:!univer-bg-gray-700 dark:!univer-text-gray-0",
      children: [v263(v261, {
        className: "univer-size-6 univer-animate-spin univer-text-gray-500"
      }), v263("span", {
        children: v206
      })]
    })
  });
}
let Z = class extends v209 {
  constructor(v133, v134, v135, v136, v137) {
    super(), this._commandService = v133, this._localeService = v134, this._settingsMenuContributionService = v135, this._uiPartsService = v136, this._injector = v137, this.disposeWithMe(this._commandService["registerCommand"](q)), this.disposeWithMe(this._commandService["registerCommand"](J)), this.disposeWithMe(this._settingsMenuContributionService["register"]({
      id: "boards-print.settings.print",
      icon: v262,
      label: () => this._localeService["t"]("boards-print.menu.print"),
      order: 100,
      group: "output",
      onClick: async v30 => {
        await v30.executeCommand(q.id);
      }
    })), this.disposeWithMe(this._settingsMenuContributionService["register"]({
      id: "boards-print.settings.export-png",
      icon: v260,
      label: () => this._localeService["t"]("boards-print.menu.exportPng"),
      order: 200,
      group: "output",
      submenu: v242.SaveAs,
      onClick: async v31 => {
        await v31.executeCommand(J.id, {
          format: "png"
        });
      }
    })), this.disposeWithMe(this._settingsMenuContributionService["register"]({
      id: "boards-print.settings.export-jpeg",
      icon: v260,
      label: () => this._localeService["t"]("boards-print.menu.exportJpeg"),
      order: 300,
      group: "output",
      submenu: v242.SaveAs,
      onClick: async v32 => {
        await v32.executeCommand(J.id, {
          format: "jpeg"
        });
      }
    })), this.disposeWithMe(this._uiPartsService["registerComponent"](v227.GLOBAL, () => v231(Le, this._injector)));
  }
};
Z = V([B(0, v210), B(1, v215(v217)), B(2, v215(v243)), B(3, v230), B(4, v215(v216))], Z);
const Q = "UNIVER_BOARDS_PRINT_PLUGIN";
let $ = class extends v218 {
  constructor(v138 = X, v139, v140) {
    super(), this._config = v138, this._injector = v139, this._configService = v140;
    let {
      menu: v141,
      ...v142
    } = v223({}, X, this._config);
    v141 && this._configService["setConfig"]("menu", v141, {
      merge: true
    }), this._configService["setConfig"](Y, v142);
  }
  onStarting() {
    this._injector["has"](v248) || this._injector["add"]([v248, {
      useClass: v249
    }]), this._injector["has"](z) || this._injector["add"]([z]), v224(this._injector, [[W], [Z]]);
  }
  onReady() {
    this._injector["get"](Z);
  }
};
R($, "pluginName", Q), R($, "packageName", Fe), R($, "version", Ie), R($, "type", v220.UNIVER_BOARD), $ = V([v208(v259, v238, v244), B(1, v215(v216)), B(2, v211)], $);
export { Y as BOARDS_PRINT_PLUGIN_CONFIG_KEY, Q as BOARDS_PRINT_PLUGIN_NAME, z as BoardPrintCompositionService, J as ExportBoardImageOperation, q as PrintBoardOperation, $ as UniverBoardsPrintPlugin };
