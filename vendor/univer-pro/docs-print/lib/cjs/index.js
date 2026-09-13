Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
let e = require("@univerjs/ui"),
  t = require("@univerjs/core"),
  n = require("@univerjs/engine-render"),
  r = require("@univerjs-pro/license"),
  i = require("@univerjs-pro/print"),
  a = require("@univerjs/docs"),
  o = require("@univerjs/docs-ui"),
  s = require("rxjs"),
  c = require("@univerjs/icons"),
  l = require("react/jsx-runtime");
function u(var_core_value_sigF593, var_core_value_sig3607, var_core_value_sigB512) {
  if (!(var_core_value_sigF593 > 0) || !(var_core_value_sig3607 > 0)) return [];
  let var_core_value_sigF2E6 = var_core_value_sigB512.filter(({
      top: var_core_value_sig1A0F,
      bottom: var_core_value_sigFBA4
    }) => Number.isFinite(var_core_value_sig1A0F) && Number.isFinite(var_core_value_sigFBA4) && var_core_value_sigFBA4 > var_core_value_sig1A0F).sort((var_core_value_sig4383, var_core_value_sig186C) => var_core_value_sig4383.top - var_core_value_sig186C.top),
    var_core_value_sig34C8 = [],
    var_core_value_sigB744 = 0,
    var_core_value_sigEAE2 = 0;
  for (; var_core_value_sigEAE2 < var_core_value_sigF593;) {
    var var_core_value_sigE68A;
    let var_core_value_sig27E5 = Math.min(var_core_value_sigF593, var_core_value_sigEAE2 + var_core_value_sig3607);
    for (; ((var_core_value_sigE68A = var_core_value_sigF2E6[var_core_value_sigB744]) == null ? undefined : var_core_value_sigE68A.top) <= var_core_value_sigEAE2;) var_core_value_sigB744++;
    let var_core_value_sig8061 = var_core_value_sig27E5;
    for (let var_core_value_sig2AD8 = var_core_value_sigB744; var_core_value_sig2AD8 < var_core_value_sigF2E6.length; var_core_value_sig2AD8++) {
      let var_core_value_sig7524 = var_core_value_sigF2E6[var_core_value_sig2AD8];
      if (var_core_value_sig7524.top >= var_core_value_sig27E5) break;
      if (var_core_value_sig7524.bottom > var_core_value_sig27E5) {
        var_core_value_sig8061 = var_core_value_sig7524.top;
        break;
      }
    }
    var_core_value_sig34C8.push({
      top: var_core_value_sigEAE2,
      bottom: var_core_value_sig8061
    }), var_core_value_sigEAE2 = var_core_value_sig8061;
  }
  return var_core_value_sig34C8;
}
function d(var_core_value_sig3E68) {
  "@babel/helpers - typeof";

  return d = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sigD955) {
    return typeof var_core_value_sigD955;
  } : function (var_core_value_sig48BD) {
    return var_core_value_sig48BD && typeof Symbol == "function" && var_core_value_sig48BD.constructor === Symbol && var_core_value_sig48BD !== Symbol.prototype ? "symbol" : typeof var_core_value_sig48BD;
  }, d(var_core_value_sig3E68);
}
function f(var_core_value_sigF4C5, var_core_value_sig5410) {
  if (d(var_core_value_sigF4C5) != "object" || !var_core_value_sigF4C5) return var_core_value_sigF4C5;
  var var_core_value_sig492F = var_core_value_sigF4C5[Symbol.toPrimitive];
  if (var_core_value_sig492F !== undefined) {
    var var_core_value_sig8EA0 = var_core_value_sig492F.call(var_core_value_sigF4C5, var_core_value_sig5410 || "default");
    if (d(var_core_value_sig8EA0) != "object") return var_core_value_sig8EA0;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sig5410 === "string" ? String : Number)(var_core_value_sigF4C5);
}
function p(var_core_value_sigA6F6) {
  var var_core_value_sigCDDA = f(var_core_value_sigA6F6, "string");
  return d(var_core_value_sigCDDA) == "symbol" ? var_core_value_sigCDDA : var_core_value_sigCDDA + "";
}
function m(var_core_value_sigE243, var_core_value_sig74A8, var_core_value_sig21B2) {
  return (var_core_value_sig74A8 = p(var_core_value_sig74A8)) in var_core_value_sigE243 ? Object.defineProperty(var_core_value_sigE243, var_core_value_sig74A8, {
    value: var_core_value_sig21B2,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sigE243[var_core_value_sig74A8] = var_core_value_sig21B2, var_core_value_sigE243;
}
var h = class extends t.Disposable {
  get container() {
    return this._container;
  }
  get root() {
    return this._root;
  }
  get _currentRender() {
    let var_core_value_sig429F = this._injector["get"](n.IRenderManagerService).getRenderUnitById(this._unitId);
    if (!var_core_value_sig429F) throw Error("Render\x20is\x20not\x20found");
    return var_core_value_sig429F;
  }
  get _skeleton() {
    return this._currentRender["with"](a.DocSkeletonManagerService).getSkeleton();
  }
  get _skeletonData() {
    let var_core_value_sigF62A = this._skeleton["getSkeletonData"]();
    if (!var_core_value_sigF62A) throw Error("Skeleton data is not found");
    return var_core_value_sigF62A;
  }
  constructor(var_core_value_sig8178, var_core_value_sigE9ED, var_core_value_sigB577, var_core_value_sig9572, var_core_value_sigD873, var_core_value_sigA12B = 1, var_core_value_sigF230) {
    super(), this._injector = var_core_value_sig8178, this._unitId = var_core_value_sigE9ED, this._offsetConfig = var_core_value_sigB577, this._paperSize = var_core_value_sig9572, this._layout = var_core_value_sigD873, this._pixelRatio = var_core_value_sigA12B, this._pageIndex = var_core_value_sigF230, m(this, "_container", document.createElement("div")), m(this, "_root", document.createElement("div")), m(this, "_engine", undefined), m(this, "_scene", undefined), m(this, "_key", undefined), m(this, "_documents", undefined), m(this, "_viewMain", undefined), m(this, "_effects", new t["DisposableCollection"]()), this._key = (0, t.generateRandomId)(4), this._initRenderer(), this.disposeWithMe({
      dispose: () => {
        this._engine["dispose"](), this._scene["dispose"](), this._effects["dispose"]();
      }
    });
  }
  _initRenderer() {
    this._engine = new n["Engine"]("", {
      elementWidth: this._paperSize["width"],
      elementHeight: this._paperSize["height"],
      dpr: this._pixelRatio,
      renderMode: n.CanvasRenderMode["Printing"]
    }), this._scene = new n["Scene"](this._key, this._engine), this._scene["scale"](1, 1), this._engine["mount"](this._container, false), this._engine["getCanvas"]().getContext().setId(this._key + "_" + (0, t.generateRandomId)(4)), this._addComponent(), this._addViewport();
  }
  _addComponent() {
    let {
        pageMarginLeft: var_core_value_sig09B8,
        pageMarginTop: var_core_value_sig6F91,
        docsLeft: var_core_value_sigF9C7,
        docsTop: var_core_value_sig8895
      } = this._offsetConfig,
      var_core_value_sigC80B = {
        pageMarginLeft: var_core_value_sig09B8,
        pageMarginTop: var_core_value_sig6F91
      },
      var_core_value_sig284F = new n["Documents"]("__DocPrintRender__", this._skeleton, var_core_value_sigC80B);
    var_core_value_sig284F.translate(var_core_value_sigF9C7, var_core_value_sig8895), this._scene["addObject"](var_core_value_sig284F), this._documents = var_core_value_sig284F;
    let var_core_value_sigE154 = this._injector["get"](o.DocPrintInterceptorService),
      var_core_value_sig4632 = {
        unitId: this._unitId,
        pageIndex: this._pageIndex,
        scene: this._scene,
        engine: this._engine,
        root: this._root,
        documents: this._documents,
        skeleton: this._skeleton
      };
    var_core_value_sigE154.interceptor["fetchThroughInterceptors"](var_core_value_sigE154.interceptor["getInterceptPoints"]().PRINTING_COMPONENT_COLLECT)(undefined, var_core_value_sig4632);
  }
  _addViewport() {
    this._viewMain = new n.Viewport(o.VIEWPORT_KEY["VIEW_MAIN"], this._scene, {
      explicitViewportWidthSet: true,
      explicitViewportHeightSet: true
    });
  }
  prepare() {
    let var_core_value_sig12F2 = this._layout;
    this._viewMain["updateScrollVal"]({
      viewportScrollX: var_core_value_sig12F2.left,
      viewportScrollY: var_core_value_sig12F2.top
    }), this._root["style"].position = "absolute", this._root["style"].top = "0px", this._root["style"].left = "0px", this._root["style"].width = "100%", this._root["style"].height = Math.min(this._paperSize["height"], var_core_value_sig12F2.bottom - var_core_value_sig12F2.top) + "px", this._root["style"].overflow = "hidden", this._effects = new t["DisposableCollection"]();
    let var_core_value_sig2259 = this._injector["get"](o.DocPrintInterceptorService),
      var_core_value_sig9E2F = {
        unitId: this._unitId,
        pageIndex: this._pageIndex,
        scene: this._scene,
        engine: this._engine,
        root: this._root,
        skeleton: this._skeleton,
        offset: {
          x: var_core_value_sig12F2.left,
          y: var_core_value_sig12F2.top
        },
        bound: {
          top: var_core_value_sig12F2.top,
          left: var_core_value_sig12F2.left,
          right: var_core_value_sig12F2.right,
          bottom: var_core_value_sig12F2.bottom
        }
      };
    var_core_value_sig2259.interceptor["fetchThroughInterceptors"](var_core_value_sig2259.interceptor["getInterceptPoints"]().PRINTING_DOM_COLLECT)(this._effects, var_core_value_sig9E2F);
  }
  render() {
    let var_core_value_sigD082 = this._engine["getCanvas"]().getContext();
    this._documents["makeForceDirty"](), this._scene["makeDirty"](), var_core_value_sigD082.save(), this._scene["render"](), var_core_value_sigD082.restore();
    let var_core_value_sigDBB7 = this._layout["bottom"] - this._layout["top"];
    var_core_value_sigDBB7 < this._paperSize["height"] && var_core_value_sigD082.clearRect(0, var_core_value_sigDBB7, this._paperSize["width"], this._paperSize["height"] - var_core_value_sigDBB7);
  }
  async waitForReady(var_core_value_sigD0A8 = 10000) {
    await g();
    let var_core_value_sigF4B9 = Date.now() + var_core_value_sigD0A8;
    for (; this._root["querySelector"]("[data-univer-print-resource-pending]") && Date.now() < var_core_value_sigF4B9;) await _(16);
    let var_core_value_sig5CEE = Math.max(0, var_core_value_sigF4B9 - Date.now());
    await Promise.all(Array.from(this._root["querySelectorAll"]("img"), var_core_value_sig4D4C => v(var_core_value_sig4D4C, var_core_value_sig5CEE)));
  }
};
function g() {
  return _().then(() => _());
}
function _(var_core_value_sigDE08 = 0) {
  return new Promise(var_core_value_sigE92A => setTimeout(var_core_value_sigE92A, var_core_value_sigDE08));
}
function v(var_core_value_sigACCB, var_core_value_sig7F33) {
  return var_core_value_sigACCB.complete ? Promise.resolve() : new Promise(var_core_value_sig362B => {
    let var_core_value_sig5CA5,
      var_core_value_sigE90F = () => {
        clearTimeout(var_core_value_sig5CA5), var_core_value_sig362B();
      };
    var_core_value_sig5CA5 = setTimeout(var_core_value_sigE90F, var_core_value_sig7F33), var_core_value_sigACCB.addEventListener("load", var_core_value_sigE90F, {
      once: true
    }), var_core_value_sigACCB.addEventListener("error", var_core_value_sigE90F, {
      once: true
    });
  });
}
function y(var_core_value_sig0C53, var_core_value_sigEA04) {
  return function (var_core_value_sigEFD4, var_core_value_sig861B) {
    var_core_value_sigEA04(var_core_value_sigEFD4, var_core_value_sig861B, var_core_value_sig0C53);
  };
}
function b(var_core_value_sig7A62, var_core_value_sig8109, var_core_value_sig7565, var_core_value_sigD4FB) {
  var var_core_value_sig3E71 = arguments.length,
    var_core_value_sig01B3 = var_core_value_sig3E71 < 3 ? var_core_value_sig8109 : var_core_value_sigD4FB === null ? var_core_value_sigD4FB = Object.getOwnPropertyDescriptor(var_core_value_sig8109, var_core_value_sig7565) : var_core_value_sigD4FB,
    var_core_value_sig7442;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sig01B3 = Reflect.decorate(var_core_value_sig7A62, var_core_value_sig8109, var_core_value_sig7565, var_core_value_sigD4FB);else {
    for (var var_core_value_sigDF87 = var_core_value_sig7A62.length - 1; var_core_value_sigDF87 >= 0; var_core_value_sigDF87--) (var_core_value_sig7442 = var_core_value_sig7A62[var_core_value_sigDF87]) && (var_core_value_sig01B3 = (var_core_value_sig3E71 < 3 ? var_core_value_sig7442(var_core_value_sig01B3) : var_core_value_sig3E71 > 3 ? var_core_value_sig7442(var_core_value_sig8109, var_core_value_sig7565, var_core_value_sig01B3) : var_core_value_sig7442(var_core_value_sig8109, var_core_value_sig7565)) || var_core_value_sig01B3);
  }
  return var_core_value_sig3E71 > 3 && var_core_value_sig01B3 && Object.defineProperty(var_core_value_sig8109, var_core_value_sig7565, var_core_value_sig01B3), var_core_value_sig01B3;
}
const x = Number.parseInt(1788764280),
  S = (var_core_value_sig9EE0, var_core_value_sigF051, var_core_value_sig0B45) => {
    let var_core_value_sig36F8 = {
      page: var_core_value_sig9EE0,
      isPro: false,
      timeValid: false
    };
    if (!var_core_value_sigF051 || !var_core_value_sig0B45) return var_core_value_sig36F8;
    let var_core_value_sig03E1 = (0, r.getLicenseInfo)(var_core_value_sigF051, var_core_value_sig0B45);
    if (var_core_value_sig03E1.valid) {
      let var_core_value_sig5237 = var_core_value_sig03E1.message,
        var_core_value_sigBB00 = (0, r.isFeatureAuthorizedWithinTime)(var_core_value_sig5237, "df", x);
      var_core_value_sig36F8.isPro = var_core_value_sigBB00, var_core_value_sig36F8.timeValid = var_core_value_sigBB00, var_core_value_sig36F8.page = (0, r.getDocFeatureLimit)(var_core_value_sig5237, var_core_value_sigBB00, "mpn", var_core_value_sig9EE0, var_core_value_sig9EE0, 0);
    }
    return var_core_value_sig36F8;
  };
let C = class extends t.Disposable {
  constructor(var_core_value_sig7E54, var_core_value_sig9A8D, var_core_value_sigC259, var_core_value_sig9C9F, var_core_value_sigFDEA, var_core_value_sig86D0) {
    super(), this._univerInstanceService = var_core_value_sig7E54, this._renderManagerService = var_core_value_sig9A8D, this._injector = var_core_value_sigC259, this._configService = var_core_value_sig9C9F, this._printPreparationService = var_core_value_sigFDEA, this._docPrintInterceptorService = var_core_value_sig86D0, m(this, "_preparing$", new s.BehaviorSubject(false)), m(this, "_activePrint", undefined), m(this, "preparing$", this._preparing$["asObservable"]());
  }
  print(var_core_value_sig4CD2) {
    if (this._activePrint) return this._activePrint;
    let var_core_value_sig48CA = this._print(var_core_value_sig4CD2).finally(() => {
      this._activePrint === var_core_value_sig48CA && (this._activePrint = undefined);
    });
    return this._activePrint = var_core_value_sig48CA, var_core_value_sig48CA;
  }
  async _print(var_core_value_sig50AF) {
    var var_core_value_sigA942;
    let var_core_value_sigA621 = T(this._configService),
      var_core_value_sigBBFF = this._univerInstanceService["getUnit"](var_core_value_sig50AF, t.UniverInstanceType["UNIVER_DOC"]);
    if (!var_core_value_sigBBFF) throw Error("DocumentDataModel is not found");
    let var_core_value_sig8889 = this._renderManagerService["getRenderUnitById"](var_core_value_sig50AF);
    if (!var_core_value_sig8889) throw Error("Render is not found");
    let var_core_value_sig32F8 = (var_core_value_sigA942 = var_core_value_sig8889.with(a.DocSkeletonManagerService).getSkeleton().getSkeletonData()) == null ? undefined : var_core_value_sigA942.pages,
      var_core_value_sig5B67 = var_core_value_sig32F8 == null ? undefined : var_core_value_sig32F8[0];
    if (!var_core_value_sig32F8 || !var_core_value_sig5B67) throw Error("Pages\x20are\x20not\x20found");
    let var_core_value_sig1758 = F(var_core_value_sigBBFF.getDocumentStyle().pageSize, var_core_value_sig5B67),
      var_core_value_sig4805 = var_core_value_sig8889.mainComponent;
    if (!(var_core_value_sig4805 instanceof n.Documents)) throw TypeError("Document render component is not found");
    let var_core_value_sigE67E = var_core_value_sig4805.getOffsetConfig();
    this._preparing$["next"](true);
    try {
      var var_core_value_sig2902, var_core_value_sig9989;
      await N();
      let var_core_value_sigC9E0 = var_core_value_sigBBFF.getDocumentStyle().documentFlavor,
        var_core_value_sig76BA = D(var_core_value_sig50AF, var_core_value_sigC9E0);
      await this._printPreparationService["prepare"](var_core_value_sig76BA), await ((var_core_value_sig2902 = (var_core_value_sig9989 = this._docPrintInterceptorService).preparePrint) == null ? undefined : var_core_value_sig2902.call(var_core_value_sig9989, {
        unitId: var_core_value_sig50AF,
        dpr: var_core_value_sig76BA.dpr
      }));
      let var_core_value_sigFBFA = var_core_value_sigE67E.docsTop ?? 0,
        var_core_value_sigF602 = O(var_core_value_sigC9E0, L(I(var_core_value_sig32F8), var_core_value_sigFBFA, var_core_value_sig76BA), var_core_value_sig32F8.length, var_core_value_sig1758, var_core_value_sigE67E, var_core_value_sig50AF, var_core_value_sig5B67, var_core_value_sig76BA.pageBreakRanges).slice(0, var_core_value_sigA621),
        var_core_value_sig1BBD = document.createElement("div");
      var_core_value_sig1BBD.className = i.PRINT_CONTAINER_CLASS;
      let var_core_value_sigF704 = await k(var_core_value_sigF602, this._injector, var_core_value_sig50AF, var_core_value_sigE67E, var_core_value_sig1758, var_core_value_sig1BBD, var_core_value_sig76BA.dpr),
        var_core_value_sig2BCF = (0, i.createPrintStyle)(var_core_value_sig1758.width, var_core_value_sig1758.height, i.PrintDirection["Portrait"]);
      return document.body["appendChild"](var_core_value_sig2BCF), document.body["appendChild"](var_core_value_sig1BBD), await Promise.all(var_core_value_sigF704.map(var_core_value_sig2AD0 => var_core_value_sig2AD0.waitForReady())), await w(var_core_value_sigF704, var_core_value_sig1BBD, var_core_value_sig2BCF, () => this._preparing$["next"](false));
    } finally {
      this._preparing$["next"](false);
    }
  }
  dispose() {
    this._preparing$["complete"](), super.dispose();
  }
};
C = b([y(0, t.IUniverInstanceService), y(1, n.IRenderManagerService), y(2, (0, t.Inject)(t.Injector)), y(3, t.IConfigService), y(4, i.IPrintPreparationService), y(5, (0, t.Inject)(o.DocPrintInterceptorService))], C);
function w(var_core_value_sigBB57, var_core_value_sig7C4A, var_core_value_sigE799, var_core_value_sigB601) {
  return new Promise((var_core_value_sig698E, var_core_value_sig2809) => {
    let var_core_value_sig2DAB = false,
      var_core_value_sig877E = false,
      var_core_value_sig20C8 = () => {
        var_core_value_sig877E || (var_core_value_sig877E = true, var_core_value_sigBB57.forEach(var_core_value_sig3EEE => var_core_value_sig3EEE.render()));
      };
    function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig01B6() {
      return var_core_value_sig2DAB ? false : (var_core_value_sig2DAB = true, window.removeEventListener("beforeprint", var_core_value_sig20C8), window.removeEventListener("afterprint", fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigEEE8), var_core_value_sigBB57.forEach(var_core_value_sigBC46 => var_core_value_sigBC46.dispose()), var_core_value_sig7C4A.remove(), var_core_value_sigE799.remove(), true);
    }
    function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigEEE8() {
      fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig01B6() && var_core_value_sig698E(true);
    }
    window.addEventListener("beforeprint", var_core_value_sig20C8), window.addEventListener("afterprint", fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigEEE8), var_core_value_sigB601();
    try {
      window.print();
    } catch (var_core_value_sig0D69) {
      fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig01B6(), var_core_value_sig2809(var_core_value_sig0D69);
    }
  });
}
function T(var_core_value_sig8B71) {
  let {
    ls: var_core_value_sigAEFB,
    pbk: var_core_value_sig826B
  } = var_core_value_sig8B71.getConfig(r.LS_CONFIG_KEY) ?? {};
  return (0, r.isLocalCheck)() ? 1 / 0 : S(1, var_core_value_sigAEFB, var_core_value_sig826B).page;
}
function E(var_core_value_sigCF89) {
  return var_core_value_sigCF89 === t.DocumentFlavor["MODERN"] ? 2 : 1;
}
function D(var_core_value_sig00CB, var_core_value_sig77EE) {
  return {
    unitId: var_core_value_sig00CB,
    unitType: t.UniverInstanceType["UNIVER_DOC"],
    dpr: E(var_core_value_sig77EE)
  };
}
function O(var_core_value_sig9F76, var_core_value_sigB008, var_core_value_sig8721, var_core_value_sig08BA, var_core_value_sigDBB5, var_core_value_sigCFAC, var_core_value_sig237B, var_core_value_sigFEAB = []) {
  let var_core_value_sigE347 = var_core_value_sigDBB5.docsTop ?? 0;
  return var_core_value_sig9F76 === t.DocumentFlavor["MODERN"] ? A(Math.max(0, var_core_value_sigB008 - var_core_value_sigE347), var_core_value_sig08BA, var_core_value_sigDBB5, var_core_value_sigCFAC, var_core_value_sig237B, var_core_value_sigFEAB) : M(Math.max(var_core_value_sig8721, P(var_core_value_sigB008, var_core_value_sig08BA.height, var_core_value_sigE347)), var_core_value_sig08BA, var_core_value_sigDBB5);
}
async function k(var_core_value_sig3C5B, var_core_value_sig200B, var_core_value_sig3863, var_core_value_sigC97C, var_core_value_sigC4B1, var_core_value_sig1BD9, var_core_value_sigE43E) {
  let var_core_value_sigA937 = [];
  try {
    for (let var_core_value_sig480E = 0; var_core_value_sig480E < var_core_value_sig3C5B.length; var_core_value_sig480E++) {
      let var_core_value_sig3D7D = new h(var_core_value_sig200B, var_core_value_sig3863, var_core_value_sigC97C, var_core_value_sigC4B1, var_core_value_sig3C5B[var_core_value_sig480E], var_core_value_sigE43E, var_core_value_sig480E);
      var_core_value_sig3D7D.container["className"] = i.PRINT_CANVAS_CLASS, var_core_value_sig1BD9.appendChild(var_core_value_sig3D7D.container), var_core_value_sig3D7D.container["appendChild"](var_core_value_sig3D7D.root), var_core_value_sig3D7D.prepare(), var_core_value_sigA937.push(var_core_value_sig3D7D), (var_core_value_sig480E + 1) % 10 == 0 && (await N());
    }
    return var_core_value_sigA937;
  } catch (var_core_value_sig1B22) {
    throw var_core_value_sigA937.forEach(var_core_value_sig26DB => var_core_value_sig26DB.dispose()), var_core_value_sig1B22;
  }
}
function A(var_core_value_sigCAD5, var_core_value_sigE503, var_core_value_sig48DD, var_core_value_sig5E6A, var_core_value_sigB7FC, var_core_value_sig9CD9 = []) {
  let var_core_value_sigFD0C = var_core_value_sig48DD.docsTop ?? 0,
    var_core_value_sig849B = var_core_value_sig48DD.docsLeft ?? 0,
    var_core_value_sig5F1A = new Set(var_core_value_sig9CD9.flatMap(({
      sourceId: var_core_value_sig7F72
    }) => var_core_value_sig7F72 ? [var_core_value_sig7F72] : [])),
    var_core_value_sigB455 = var_core_value_sig9CD9.map(({
      top: var_core_value_sig7B2A,
      bottom: var_core_value_sig06CD
    }) => ({
      top: var_core_value_sig7B2A - var_core_value_sigFD0C,
      bottom: var_core_value_sig06CD - var_core_value_sigFD0C
    })),
    var_core_value_sig5241 = Array.from(var_core_value_sigB7FC.skeDrawings["entries"](), ([var_core_value_sigA5F1, var_core_value_sig97A2]) => ({
      drawingId: var_core_value_sigA5F1,
      top: var_core_value_sigB7FC.marginTop + var_core_value_sig97A2.aTop,
      bottom: var_core_value_sigB7FC.marginTop + var_core_value_sig97A2.aTop + var_core_value_sig97A2.height,
      drawingType: var_core_value_sig97A2.drawingOrigin["drawingType"]
    })),
    var_core_value_sigC6E5 = var_core_value_sig5241.filter(({
      top: var_core_value_sig07E9,
      bottom: var_core_value_sig4F59,
      drawingType: var_core_value_sigF564
    }) => Number.isFinite(var_core_value_sig07E9) && Number.isFinite(var_core_value_sig4F59) && var_core_value_sig4F59 > var_core_value_sig07E9 && (var_core_value_sigF564 === t.DrawingTypeEnum["DRAWING_IMAGE"] || var_core_value_sigF564 === t.DrawingTypeEnum["DRAWING_CHART"])),
    var_core_value_sigCEFB = var_core_value_sig5241.filter(({
      drawingId: var_core_value_sig8CFA,
      top: var_core_value_sig2E11,
      bottom: var_core_value_sig5B69,
      drawingType: var_core_value_sigB098
    }) => !var_core_value_sig5F1A.has(var_core_value_sig8CFA) && Number.isFinite(var_core_value_sig2E11) && Number.isFinite(var_core_value_sig5B69) && var_core_value_sig5B69 > var_core_value_sig2E11 && var_core_value_sig5B69 - var_core_value_sig2E11 <= var_core_value_sigE503.height && (var_core_value_sigB098 === t.DrawingTypeEnum["DRAWING_IMAGE"] || var_core_value_sigB098 === t.DrawingTypeEnum["DRAWING_CHART"] || var_core_value_sigB098 === t.DrawingTypeEnum["DRAWING_DOM"]));
  var_core_value_sigB455.push(...var_core_value_sigCEFB.map(({
    top: var_core_value_sigCE71,
    bottom: var_core_value_sig21D8
  }) => ({
    top: var_core_value_sigCE71,
    bottom: var_core_value_sig21D8
  })));
  let var_core_value_sig1537 = var_core_value_sigC6E5.reduce((var_core_value_sig2B65, var_core_value_sigD7EA) => Math.max(var_core_value_sig2B65, var_core_value_sigD7EA.bottom), var_core_value_sigCAD5);
  return (0, n.documentSkeletonLineIterator)([var_core_value_sigB7FC], {
    docsLeft: var_core_value_sig849B,
    pageMarginTop: var_core_value_sig48DD.pageMarginTop,
    unitId: var_core_value_sig5E6A
  }, ({
    line: var_core_value_sigB33B,
    sectionTop: var_core_value_sig24B9
  }) => {
    let var_core_value_sigE627 = var_core_value_sig24B9 + var_core_value_sigB33B.top,
      var_core_value_sigEF3E = var_core_value_sigE627 + var_core_value_sigB33B.lineHeight;
    Number.isFinite(var_core_value_sigE627) && Number.isFinite(var_core_value_sigEF3E) && var_core_value_sigEF3E > var_core_value_sigE627 && var_core_value_sigEF3E - var_core_value_sigE627 <= var_core_value_sigE503.height && (var_core_value_sigB455.push({
      top: var_core_value_sigE627,
      bottom: var_core_value_sigEF3E
    }), j(var_core_value_sigB33B) && (var_core_value_sig1537 = Math.max(var_core_value_sig1537, var_core_value_sigEF3E)));
  }), u(var_core_value_sig1537, var_core_value_sigE503.height, var_core_value_sigB455).map(var_core_value_sig273D => ({
    top: var_core_value_sigFD0C + var_core_value_sig273D.top,
    bottom: var_core_value_sigFD0C + var_core_value_sig273D.bottom,
    left: var_core_value_sig849B,
    right: var_core_value_sig849B + var_core_value_sigE503.width
  }));
}
function j(var_core_value_sigE4C6) {
  return var_core_value_sigE4C6.bullet || var_core_value_sigE4C6.tableId ? true : var_core_value_sigE4C6.divides["some"](var_core_value_sig9A0D => var_core_value_sig9A0D.glyphGroup["some"](({
    streamType: var_core_value_sigF0F9
  }) => var_core_value_sigF0F9 !== t.DataStreamTreeTokenType["PARAGRAPH"] && var_core_value_sigF0F9 !== t.DataStreamTreeTokenType["SECTION_BREAK"] && var_core_value_sigF0F9 !== t.DataStreamTreeTokenType["CUSTOM_BLOCK"] && var_core_value_sigF0F9 !== t.DataStreamTreeTokenType["DOCS_END"]));
}
function M(var_core_value_sig4313, var_core_value_sigFC87, var_core_value_sig156F) {
  let var_core_value_sigDD51 = var_core_value_sig156F.docsTop ?? 0,
    var_core_value_sigF057 = var_core_value_sig156F.docsLeft ?? 0;
  return Array.from({
    length: var_core_value_sig4313
  }, (var_core_value_sigA319, var_core_value_sig2D58) => ({
    top: var_core_value_sigDD51 + (var_core_value_sigDD51 + var_core_value_sigFC87.height) * var_core_value_sig2D58,
    bottom: var_core_value_sigDD51 + (var_core_value_sigDD51 + var_core_value_sigFC87.height) * (var_core_value_sig2D58 + 1),
    left: var_core_value_sigF057,
    right: var_core_value_sigF057 + var_core_value_sigFC87.width
  }));
}
function N() {
  return new Promise(var_core_value_sig223F => globalThis.setTimeout(var_core_value_sig223F, 0));
}
function P(var_core_value_sig72F6, var_core_value_sig9FBA, var_core_value_sigFE01) {
  return var_core_value_sig72F6 ? Math.ceil(Math.max(0, var_core_value_sig72F6 - var_core_value_sigFE01) / (var_core_value_sig9FBA + var_core_value_sigFE01)) : 0;
}
function F(var_core_value_sigA2CE, var_core_value_sig1975) {
  let var_core_value_sig6EA1 = R(var_core_value_sigA2CE == null ? undefined : var_core_value_sigA2CE.width, var_core_value_sig1975.pageWidth),
    var_core_value_sig029F = R(var_core_value_sigA2CE == null ? undefined : var_core_value_sigA2CE.height, var_core_value_sig1975.pageHeight);
  if (!var_core_value_sig6EA1 || !var_core_value_sig029F) throw Error("Document\x20page\x20size\x20is\x20not\x20found");
  return {
    width: var_core_value_sig6EA1,
    height: var_core_value_sig029F
  };
}
function I(var_core_value_sig3767) {
  return var_core_value_sig3767.reduce((var_core_value_sigD749, var_core_value_sigCFFA) => {
    let var_core_value_sig58C1 = Number.isFinite(var_core_value_sigCFFA.pageHeight) ? var_core_value_sigCFFA.pageHeight : var_core_value_sigCFFA.height;
    return var_core_value_sigD749 + Math.max(0, var_core_value_sig58C1);
  }, 0);
}
function L(var_core_value_sig670B, var_core_value_sig6912, var_core_value_sigE235) {
  let var_core_value_sig7664 = typeof var_core_value_sigE235.contentHeightAdjustment == "number" && Number.isFinite(var_core_value_sigE235.contentHeightAdjustment) ? var_core_value_sigE235.contentHeightAdjustment : 0;
  return Math.max(R(var_core_value_sigE235.contentHeight) ?? 0, var_core_value_sig6912 + Math.max(0, var_core_value_sig670B + var_core_value_sig7664));
}
function R(...var_core_value_sig2281) {
  return var_core_value_sig2281.find(var_core_value_sig5090 => typeof var_core_value_sig5090 == "number" && Number.isFinite(var_core_value_sig5090) && var_core_value_sig5090 > 0);
}
const z = {
  id: "docs.operation.print",
  type: t.CommandType["OPERATION"],
  handler: async var_core_value_sig5E86 => {
    let var_core_value_sig6998 = var_core_value_sig5E86.get(t.IUniverInstanceService),
      var_core_value_sigF639 = var_core_value_sig5E86.get(C),
      var_core_value_sigEAE5 = var_core_value_sig5E86.get(n.IRenderManagerService),
      var_core_value_sigE94C = var_core_value_sig6998.getCurrentUnitOfType(t.UniverInstanceType["UNIVER_DOC"]);
    if (!var_core_value_sigE94C) return false;
    if (!var_core_value_sigEAE5.getRenderUnitById(var_core_value_sigE94C.getUnitId())) throw Error("Render is not found");
    return await var_core_value_sigF639.print(var_core_value_sigE94C.getUnitId()), true;
  }
};
function B(var_core_value_sig6D47) {
  return {
    id: z.id,
    type: e.MenuItemType["BUTTON"],
    title: "docs-print.menu",
    icon: "PrintIcon",
    tooltip: "docs-print.menu",
    hidden$: (0, e.getMenuHiddenObservable)(var_core_value_sig6D47, t.UniverInstanceType["UNIVER_DOC"])
  };
}
const V = {
  [e.RibbonStartGroup["OTHERS"]]: {
    [z.id]: {
      order: 0.1,
      gridLayout: {
        row: 1,
        column: 1,
        rowSpan: 2,
        showLabel: true
      },
      menuItemFactory: B
    }
  }
};
var H = "@univerjs-pro/docs-print",
  U = "1.0.0-insiders.20260907-70fc579";
const W = {};
let G = class extends t.Disposable {
  constructor(var_core_value_sigC368) {
    super(), this._iconManager = var_core_value_sigC368, this._registerIcons();
  }
  _registerIcons() {
    this.disposeWithMe(this._iconManager["register"]({
      PrintIcon: c.PrintIcon
    }));
  }
};
G = b([y(0, (0, t.Inject)(e.IconManager))], G);
function K() {
  let var_core_value_sigCB82 = (0, e.useDependency)(t.LocaleService);
  return (0, e.useObservable)((0, e.useDependency)(C).preparing$, false, true) ? (0, l.jsx)("div", {
    "data-u-comp": "docs-printing-mask",
    "aria-busy": "true",
    "aria-label": var_core_value_sigCB82.t("docs-print.menu"),
    className: "univer-fixed univer-inset-0 univer-z-[1000] univer-flex univer-cursor-wait univer-items-center univer-justify-center univer-bg-gray-100 dark:!univer-bg-gray-900",
    children: (0, l.jsx)("div", {
      role: "status",
      "aria-live": "polite",
      className: "univer-flex\x20univer-items-center\x20univer-justify-center\x20univer-rounded-lg\x20univer-bg-gray-0\x20univer-p-5\x20univer-shadow-lg\x20dark:!univer-bg-gray-700",
      children: (0, l.jsx)(c.LoadingMultiIcon, {
        className: "univer-size-6 univer-animate-spin univer-text-gray-500"
      })
    })
  }) : null;
}
let q = class extends t.Disposable {
  constructor(var_core_value_sigAD56, var_core_value_sigDB4A, var_core_value_sig6418, var_core_value_sig1896) {
    super(), this._commandService = var_core_value_sigAD56, this._menuManagerService = var_core_value_sigDB4A, this._uiPartsService = var_core_value_sig6418, this._injector = var_core_value_sig1896, this._initMenus(), this._initCommands(), this.disposeWithMe(this._uiPartsService["registerComponent"](e.BuiltInUIPart["GLOBAL"], () => (0, e.connectInjector)(K, this._injector)));
  }
  _initMenus() {
    this._menuManagerService["mergeMenu"](V);
  }
  _initCommands() {
    this.disposeWithMe(this._commandService["registerCommand"](z));
  }
};
q = b([y(0, t.ICommandService), y(1, e.IMenuManagerService), y(2, e.IUIPartsService), y(3, (0, t.Inject)(t.Injector))], q);
let J = class extends t.Plugin {
  constructor(var_core_value_sig0285 = W, var_core_value_sig777D, var_core_value_sig3F4C) {
    super(), this._config = var_core_value_sig0285, this._injector = var_core_value_sig777D, this._configService = var_core_value_sig3F4C;
    let {
      menu: var_core_value_sigD65A,
      ...var_core_value_sig5A13
    } = (0, t.merge)({}, W, this._config);
    var_core_value_sigD65A && this._configService["setConfig"]("menu", var_core_value_sigD65A, {
      merge: true
    }), this._configService["setConfig"]("UNIVER_DOCS_PRINT", var_core_value_sig5A13);
  }
  onStarting() {
    this._injector["has"](i.IPrintPreparationService) || this._injector["add"]([i.IPrintPreparationService, {
      useClass: i.PrintPreparationService
    }]), this._injector["add"]([G]), this._injector["get"](G), (0, t.registerDependencies)(this._injector, [[C], [q]]);
  }
  onReady() {
    this._injector["get"](q);
  }
};
m(J, "pluginName", "UNIVER_DOCS_PRINT"), m(J, "packageName", H), m(J, "version", U), m(J, "type", t.UniverInstanceType["UNIVER_DOC"]), J = b([(0, t.DependentOn)(r.UniverLicensePlugin, a.UniverDocsPlugin, n.UniverRenderEnginePlugin), y(1, (0, t.Inject)(t.Injector)), y(2, t.IConfigService)], J), exports.DocsPrintMenuSchema = V, Object.defineProperty(exports, "UniverDocsPrintPlugin", {
  enumerable: true,
  get: function () {
    return J;
  }
});
