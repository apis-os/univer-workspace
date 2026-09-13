Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
let e = require("@univerjs/ui"),
  t = require("@univerjs-pro/exchange-client"),
  n = require("@univerjs/core"),
  r = require("@univerjs-pro/collaboration"),
  i = require("@univerjs-pro/license");
function a(var_core_value_sigF9C7, var_core_value_sig8895) {
  return function (var_core_value_sigBC46, var_core_value_sig3D7D) {
    var_core_value_sig8895(var_core_value_sigBC46, var_core_value_sig3D7D, var_core_value_sigF9C7);
  };
}
function o(var_core_value_sigC80B, var_core_value_sig284F, var_core_value_sigE154, var_core_value_sig4632) {
  var var_core_value_sig12F2 = arguments.length,
    var_core_value_sig2259 = var_core_value_sig12F2 < 3 ? var_core_value_sig284F : var_core_value_sig4632 === null ? var_core_value_sig4632 = Object.getOwnPropertyDescriptor(var_core_value_sig284F, var_core_value_sigE154) : var_core_value_sig4632,
    var_core_value_sig9E2F;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sig2259 = Reflect.decorate(var_core_value_sigC80B, var_core_value_sig284F, var_core_value_sigE154, var_core_value_sig4632);else {
    for (var var_core_value_sigD082 = var_core_value_sigC80B.length - 1; var_core_value_sigD082 >= 0; var_core_value_sigD082--) (var_core_value_sig9E2F = var_core_value_sigC80B[var_core_value_sigD082]) && (var_core_value_sig2259 = (var_core_value_sig12F2 < 3 ? var_core_value_sig9E2F(var_core_value_sig2259) : var_core_value_sig12F2 > 3 ? var_core_value_sig9E2F(var_core_value_sig284F, var_core_value_sigE154, var_core_value_sig2259) : var_core_value_sig9E2F(var_core_value_sig284F, var_core_value_sigE154)) || var_core_value_sig2259);
  }
  return var_core_value_sig12F2 > 3 && var_core_value_sig2259 && Object.defineProperty(var_core_value_sig284F, var_core_value_sigE154, var_core_value_sig2259), var_core_value_sig2259;
}
function s(var_core_value_sigDBB7) {
  let var_core_value_sigD0A8 = var_core_value_sigDBB7.slide ?? var_core_value_sigDBB7.doc;
  if (!var_core_value_sigD0A8) return null;
  let var_core_value_sigF4B9 = typeof var_core_value_sigD0A8.originalMeta == "string" ? var_core_value_sigD0A8.originalMeta : (0, r.b64EncodeUnicode)(r.textDecoder["decode"](var_core_value_sigD0A8.originalMeta));
  return {
    ...var_core_value_sigDBB7,
    workbook: {},
    doc: {},
    slide: {
      ...var_core_value_sigD0A8,
      originalMeta: var_core_value_sigF4B9
    },
    board: undefined,
    pdf: undefined
  };
}
const c = (0, n.createIdentifier)("slides-exchange-client.slide-exchange.service");
let l = class {
  constructor(var_core_value_sig27E5) {
    this._exchangeService = var_core_value_sig27E5;
  }
  importSlideToUnitId(var_core_value_sig8061) {
    return this._exchangeService["importFileToUnitId"](var_core_value_sig8061, n.UniverInstanceType["UNIVER_SLIDE"]);
  }
  async importSlideToSnapshot(var_core_value_sig4D4C) {
    let var_core_value_sigC9E0 = await this._exchangeService["importFileToJson"](var_core_value_sig4D4C, n.UniverInstanceType["UNIVER_SLIDE"]);
    return var_core_value_sigC9E0 != null && var_core_value_sigC9E0.snapshot ? this.transformSnapshotJsonToSlideData(var_core_value_sigC9E0) : undefined;
  }
  exportSlideByUnitId(var_core_value_sig76BA) {
    return this._exchangeService["exportFileByUnitId"](var_core_value_sig76BA, n.UniverInstanceType["UNIVER_SLIDE"], t.ExchangeFormat["PPTX"]);
  }
  async exportSlideBySnapshot(var_core_value_sigFBFA) {
    let var_core_value_sigF602 = await this.transformSlideDataToSnapshotJson(var_core_value_sigFBFA);
    return this._exchangeService["exportFileBySnapshot"](var_core_value_sigF602, n.UniverInstanceType["UNIVER_SLIDE"], t.ExchangeFormat["PPTX"]);
  }
  async transformSnapshotJsonToSlideData(var_core_value_sig1BBD) {
    return (0, r.transformSnapshotToSlideData)(var_core_value_sig1BBD.snapshot);
  }
  async transformSlideDataToSnapshotJson(var_core_value_sigF704) {
    let var_core_value_sig2BCF = new t["ClientSnapshotServerService"](),
      {
        snapshot: var_core_value_sig0D69
      } = await (0, r.transformSlideDataToSnapshot)(var_core_value_sigF704.resources, var_core_value_sigF704, var_core_value_sigF704.id, var_core_value_sigF704.rev ?? 0, var_core_value_sig2BCF),
      var_core_value_sig480E = s(var_core_value_sig0D69);
    if (!var_core_value_sig480E) throw Error("Failed to transform Slide snapshot to string");
    return {
      snapshot: var_core_value_sig480E,
      sheetBlocks: {}
    };
  }
};
l = o([a(0, (0, n.Inject)(t.IExchangeService))], l);
const u = (0, n.createIdentifier)("slides-exchange-client.slide-exchange-operate.service");
let d = class {
  constructor(var_core_value_sig26DB, var_core_value_sigF0F9, var_core_value_sig1A0F, var_core_value_sigFBA4) {
    this._slideExchangeService = var_core_value_sig26DB, this._exchangeOperateService = var_core_value_sigF0F9, this._univerInstanceService = var_core_value_sig1A0F, this._resourceLoaderService = var_core_value_sigFBA4;
  }
  importSlideToUnitId() {
    return this._exchangeOperateService["importFileToUnitId"](n.UniverInstanceType["UNIVER_SLIDE"], var_core_value_sig7524 => this._slideExchangeService["importSlideToUnitId"](var_core_value_sig7524));
  }
  importSlideToSnapshot() {
    return this._exchangeOperateService["importFileToSnapshot"](n.UniverInstanceType["UNIVER_SLIDE"], var_core_value_sig2AD8 => this._slideExchangeService["importSlideToSnapshot"](var_core_value_sig2AD8));
  }
  exportSlideByUnitId(var_core_value_sig4383, var_core_value_sig186C) {
    let var_core_value_sigD955 = this._getCurrentSlide();
    return this._exchangeOperateService["exportFile"](() => this._slideExchangeService["exportSlideByUnitId"](var_core_value_sig4383 ?? var_core_value_sigD955.getUnitId()), var_core_value_sig186C ?? var_core_value_sigD955.getSnapshot().name, t.ExchangeFormat["PPTX"]);
  }
  exportSlideBySnapshot() {
    let var_core_value_sig48BD = this._getCurrentSlide(),
      var_core_value_sig429F = this._resourceLoaderService["saveUnit"](var_core_value_sig48BD.getUnitId()) ?? var_core_value_sig48BD.getSnapshot();
    return this._exchangeOperateService["exportFile"](() => this._slideExchangeService["exportSlideBySnapshot"](var_core_value_sig429F), var_core_value_sig429F.name, t.ExchangeFormat["PPTX"]);
  }
  _getCurrentSlide() {
    let var_core_value_sigF62A = this._univerInstanceService["getCurrentUnitOfType"](n.UniverInstanceType["UNIVER_SLIDE"]);
    if (!var_core_value_sigF62A) throw Error("No unit of type " + n.UniverInstanceType["UNIVER_SLIDE"] + " is currently active.");
    return var_core_value_sigF62A;
  }
};
d = o([a(0, (0, n.Inject)(c)), a(1, (0, n.Inject)(t.IExchangeOperateService)), a(2, n.IUniverInstanceService), a(3, n.IResourceLoaderService)], d);
const f = {
    id: "slides-exchange-client.operation.import-slide",
    type: n.CommandType["OPERATION"],
    handler: async var_core_value_sig5CEE => {
      let var_core_value_sigE92A = var_core_value_sig5CEE.get(u);
      return (0, t.isCurrentUnitLoadedFromServer)(var_core_value_sig5CEE, n.UniverInstanceType["UNIVER_SLIDE"]) ? await var_core_value_sigE92A.importSlideToUnitId() : await var_core_value_sigE92A.importSlideToSnapshot(), true;
    }
  },
  p = {
    id: "slides-exchange-client.operation.export-slide",
    type: n.CommandType["OPERATION"],
    handler: async var_core_value_sig362B => {
      let var_core_value_sig5CA5 = var_core_value_sig362B.get(u);
      return (0, t.isCurrentUnitLoadedFromServer)(var_core_value_sig362B, n.UniverInstanceType["UNIVER_SLIDE"]) ? await var_core_value_sig5CA5.exportSlideByUnitId() : await var_core_value_sig5CA5.exportSlideBySnapshot(), true;
    }
  },
  m = "slides-exchange-client.operation.exchange";
function h(var_core_value_sigE90F) {
  return {
    id: m,
    type: e.MenuItemType["SUBITEMS"],
    icon: "DirectExportIcon",
    tooltip: "slides-exchange-client.file",
    hidden$: (0, e.getMenuHiddenObservable)(var_core_value_sigE90F, n.UniverInstanceType["UNIVER_SLIDE"])
  };
}
function g() {
  return {
    id: f.id,
    type: e.MenuItemType["BUTTON"],
    title: "slides-exchange-client.upload",
    icon: "FolderIcon"
  };
}
function _() {
  return {
    id: p.id,
    type: e.MenuItemType["BUTTON"],
    title: "slides-exchange-client.download",
    icon: "ExportIcon"
  };
}
const v = {
  [e.RibbonStartGroup["OTHERS"]]: {
    [m]: {
      order: 0.3,
      gridLayout: {
        row: 1,
        column: 3,
        rowSpan: 2,
        showLabel: true
      },
      menuItemFactory: h,
      [f.id]: {
        order: 0,
        menuItemFactory: g
      },
      [p.id]: {
        order: 1,
        menuItemFactory: _
      }
    }
  }
};
var y = "@univerjs-pro/slides-exchange-client",
  b = "1.0.0-insiders.20260907-70fc579";
const x = {};
let S = class extends n.Disposable {
  constructor(var_core_value_sig8178, var_core_value_sigE9ED) {
    super(), this._commandService = var_core_value_sig8178, this._menuManagerService = var_core_value_sigE9ED, this._initCommands(), this._initMenus();
  }
  _initCommands() {
    [f, p].forEach(var_core_value_sig2AD0 => {
      this.disposeWithMe(this._commandService["registerCommand"](var_core_value_sig2AD0));
    });
  }
  _initMenus() {
    this._menuManagerService["mergeMenu"](v);
  }
};
S = o([a(0, n.ICommandService), a(1, e.IMenuManagerService)], S);
function C(var_core_value_sigEFD4) {
  "@babel/helpers - typeof";

  return C = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sigB577) {
    return typeof var_core_value_sigB577;
  } : function (var_core_value_sig9572) {
    return var_core_value_sig9572 && typeof Symbol == "function" && var_core_value_sig9572.constructor === Symbol && var_core_value_sig9572 !== Symbol.prototype ? "symbol" : typeof var_core_value_sig9572;
  }, C(var_core_value_sigEFD4);
}
function w(var_core_value_sig861B, var_core_value_sig5237) {
  if (C(var_core_value_sig861B) != "object" || !var_core_value_sig861B) return var_core_value_sig861B;
  var var_core_value_sigBB00 = var_core_value_sig861B[Symbol.toPrimitive];
  if (var_core_value_sigBB00 !== undefined) {
    var var_core_value_sig7E54 = var_core_value_sigBB00.call(var_core_value_sig861B, var_core_value_sig5237 || "default");
    if (C(var_core_value_sig7E54) != "object") return var_core_value_sig7E54;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sig5237 === "string" ? String : Number)(var_core_value_sig861B);
}
function T(var_core_value_sig9A8D) {
  var var_core_value_sigC259 = w(var_core_value_sig9A8D, "string");
  return C(var_core_value_sigC259) == "symbol" ? var_core_value_sigC259 : var_core_value_sigC259 + "";
}
function E(var_core_value_sig9C9F, var_core_value_sigFDEA, var_core_value_sig86D0) {
  return (var_core_value_sigFDEA = T(var_core_value_sigFDEA)) in var_core_value_sig9C9F ? Object.defineProperty(var_core_value_sig9C9F, var_core_value_sigFDEA, {
    value: var_core_value_sig86D0,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sig9C9F[var_core_value_sigFDEA] = var_core_value_sig86D0, var_core_value_sig9C9F;
}
let D = class extends n.Plugin {
  constructor(var_core_value_sigD873 = x, var_core_value_sigA12B, var_core_value_sigF230) {
    super(), this._config = var_core_value_sigD873, this._injector = var_core_value_sigA12B, this._configService = var_core_value_sigF230;
    let {
      menu: var_core_value_sig09B8,
      ...var_core_value_sig6F91
    } = (0, n.merge)({}, x, this._config);
    var_core_value_sig09B8 && this._configService["setConfig"]("menu", var_core_value_sig09B8, {
      merge: true
    }), this._configService["setConfig"]("slides-exchange-client.config", var_core_value_sig6F91);
  }
  onStarting() {
    [[c, {
      useClass: l
    }], [u, {
      useClass: d
    }], [S]].forEach(var_core_value_sig3EEE => this._injector["add"](var_core_value_sig3EEE));
  }
  onReady() {
    this._injector["get"](S);
  }
};
E(D, "pluginName", "SLIDES_EXCHANGE_CLIENT_PLUGIN"), E(D, "packageName", y), E(D, "version", b), E(D, "type", n.UniverInstanceType["UNIVER_SLIDE"]), D = o([(0, n.DependentOn)(i.UniverLicensePlugin, t.UniverExchangeClientPlugin), a(1, (0, n.Inject)(n.Injector)), a(2, n.IConfigService)], D), exports.ISlideExchangeService = c, exports.SlidesExchangeClientMenuSchema = v, Object.defineProperty(exports, "UniverSlidesExchangeClientPlugin", {
  enumerable: true,
  get: function () {
    return D;
  }
});
