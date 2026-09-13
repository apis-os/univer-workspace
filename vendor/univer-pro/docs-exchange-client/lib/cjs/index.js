Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
let e = require("@univerjs/ui"),
  t = require("@univerjs-pro/exchange-client"),
  n = require("@univerjs/core"),
  r = require("@univerjs-pro/collaboration"),
  i = require("@univerjs-pro/license");
function a(var_core_value_sig4632, var_core_value_sig12F2) {
  return function (var_core_value_sigBC46, var_core_value_sig3D7D) {
    var_core_value_sig12F2(var_core_value_sigBC46, var_core_value_sig3D7D, var_core_value_sig4632);
  };
}
function o(var_core_value_sig2259, var_core_value_sig9E2F, var_core_value_sigD082, var_core_value_sigDBB7) {
  var var_core_value_sigD0A8 = arguments.length,
    var_core_value_sigF4B9 = var_core_value_sigD0A8 < 3 ? var_core_value_sig9E2F : var_core_value_sigDBB7 === null ? var_core_value_sigDBB7 = Object.getOwnPropertyDescriptor(var_core_value_sig9E2F, var_core_value_sigD082) : var_core_value_sigDBB7,
    var_core_value_sig5CEE;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sigF4B9 = Reflect.decorate(var_core_value_sig2259, var_core_value_sig9E2F, var_core_value_sigD082, var_core_value_sigDBB7);else {
    for (var var_core_value_sigE92A = var_core_value_sig2259.length - 1; var_core_value_sigE92A >= 0; var_core_value_sigE92A--) (var_core_value_sig5CEE = var_core_value_sig2259[var_core_value_sigE92A]) && (var_core_value_sigF4B9 = (var_core_value_sigD0A8 < 3 ? var_core_value_sig5CEE(var_core_value_sigF4B9) : var_core_value_sigD0A8 > 3 ? var_core_value_sig5CEE(var_core_value_sig9E2F, var_core_value_sigD082, var_core_value_sigF4B9) : var_core_value_sig5CEE(var_core_value_sig9E2F, var_core_value_sigD082)) || var_core_value_sigF4B9);
  }
  return var_core_value_sigD0A8 > 3 && var_core_value_sigF4B9 && Object.defineProperty(var_core_value_sig9E2F, var_core_value_sigD082, var_core_value_sigF4B9), var_core_value_sigF4B9;
}
function s(var_core_value_sig362B) {
  let var_core_value_sig5CA5 = var_core_value_sig362B.doc;
  if (!var_core_value_sig5CA5) return null;
  let var_core_value_sigE90F = (0, r.b64EncodeUnicode)(r.textDecoder["decode"](var_core_value_sig5CA5.originalMeta));
  return {
    ...var_core_value_sig362B,
    workbook: {},
    doc: {
      ...var_core_value_sig5CA5,
      originalMeta: var_core_value_sigE90F
    },
    slide: undefined,
    board: undefined,
    pdf: undefined
  };
}
const c = (0, n.createIdentifier)("docs-exchange-client.doc-exchange.service");
let l = class {
  constructor(var_core_value_sig27E5) {
    this._exchangeService = var_core_value_sig27E5;
  }
  importDocToUnitId(var_core_value_sig8061, var_core_value_sig4D4C) {
    return this._exchangeService["importFileToUnitId"](var_core_value_sig8061, n.UniverInstanceType["UNIVER_DOC"], var_core_value_sig4D4C ? {
      doc: var_core_value_sig4D4C
    } : undefined);
  }
  async importDocToSnapshot(var_core_value_sigC9E0, var_core_value_sig76BA) {
    let var_core_value_sigFBFA = await this._exchangeService["importFileToJson"](var_core_value_sigC9E0, n.UniverInstanceType["UNIVER_DOC"], var_core_value_sig76BA ? {
      doc: var_core_value_sig76BA
    } : undefined);
    return var_core_value_sigFBFA != null && var_core_value_sigFBFA.snapshot ? this.transformSnapshotJsonToDocumentData(var_core_value_sigFBFA) : undefined;
  }
  exportDocByUnitId(var_core_value_sigF602) {
    return this._exchangeService["exportFileByUnitId"](var_core_value_sigF602, n.UniverInstanceType["UNIVER_DOC"], t.ExchangeFormat["DOCX"]);
  }
  async exportDocBySnapshot(var_core_value_sig1BBD) {
    let var_core_value_sigF704 = await this.transformDocumentDataToSnapshotJson(var_core_value_sig1BBD);
    return this._exchangeService["exportFileBySnapshot"](var_core_value_sigF704, n.UniverInstanceType["UNIVER_DOC"], t.ExchangeFormat["DOCX"]);
  }
  async transformSnapshotJsonToDocumentData(var_core_value_sig2BCF) {
    return (0, r.transformSnapshotToDocumentData)(var_core_value_sig2BCF.snapshot);
  }
  async transformDocumentDataToSnapshotJson(var_core_value_sig0D69) {
    let var_core_value_sig480E = {
        metadata: undefined
      },
      var_core_value_sig26DB = new t["ClientSnapshotServerService"](),
      {
        snapshot: var_core_value_sigF0F9
      } = await (0, r.transformDocumentDataToSnapshot)(var_core_value_sig480E, var_core_value_sig0D69, var_core_value_sig0D69.id, var_core_value_sig0D69.rev ?? 0, var_core_value_sig26DB),
      var_core_value_sig1A0F = s(var_core_value_sigF0F9);
    if (!var_core_value_sig1A0F) throw Error("Failed\x20to\x20transform\x20Document\x20snapshot\x20to\x20string");
    return {
      snapshot: var_core_value_sig1A0F,
      sheetBlocks: {}
    };
  }
};
l = o([a(0, (0, n.Inject)(t.IExchangeService))], l);
function u(var_core_value_sigEFD4) {
  switch (var_core_value_sigEFD4) {
    case n.DocumentFlavor["MODERN"]:
      return {
        docType: t.ExchangeDocType["MODERN"]
      };
    case n.DocumentFlavor["TRADITIONAL"]:
      return {
        docType: t.ExchangeDocType["TRADITIONAL"]
      };
    default:
      return;
  }
}
const d = (0, n.createIdentifier)("docs-exchange-client.doc-exchange-operate.service");
let f = class {
  constructor(var_core_value_sigFBA4, var_core_value_sig4383, var_core_value_sig186C, var_core_value_sigD955) {
    this._docExchangeService = var_core_value_sigFBA4, this._exchangeOperateService = var_core_value_sig4383, this._univerInstanceService = var_core_value_sig186C, this._resourceLoaderService = var_core_value_sigD955;
  }
  importDocToUnitId() {
    let var_core_value_sig48BD = u(this._getCurrentDocument().getDocumentStyle().documentFlavor);
    return this._exchangeOperateService["importFileToUnitId"](n.UniverInstanceType["UNIVER_DOC"], var_core_value_sig7524 => this._docExchangeService["importDocToUnitId"](var_core_value_sig7524, var_core_value_sig48BD));
  }
  importDocToSnapshot() {
    let var_core_value_sig429F = u(this._getCurrentDocument().getDocumentStyle().documentFlavor);
    return this._exchangeOperateService["importFileToSnapshot"](n.UniverInstanceType["UNIVER_DOC"], var_core_value_sig2AD8 => this._docExchangeService["importDocToSnapshot"](var_core_value_sig2AD8, var_core_value_sig429F));
  }
  exportDocByUnitId(var_core_value_sigF62A, var_core_value_sig8178) {
    let var_core_value_sigE9ED = this._getCurrentDocument();
    return this._exchangeOperateService["exportFile"](() => this._docExchangeService["exportDocByUnitId"](var_core_value_sigF62A ?? var_core_value_sigE9ED.getUnitId()), var_core_value_sig8178 ?? var_core_value_sigE9ED.getSnapshot().title, t.ExchangeFormat["DOCX"]);
  }
  exportDocBySnapshot() {
    let var_core_value_sigB577 = this._getCurrentDocument(),
      var_core_value_sig9572 = this._resourceLoaderService["saveUnit"](var_core_value_sigB577.getUnitId()) ?? var_core_value_sigB577.getSnapshot();
    return this._exchangeOperateService["exportFile"](() => this._docExchangeService["exportDocBySnapshot"](var_core_value_sig9572), var_core_value_sig9572.title, t.ExchangeFormat["DOCX"]);
  }
  _getCurrentDocument() {
    let var_core_value_sigD873 = this._univerInstanceService["getCurrentUnitOfType"](n.UniverInstanceType["UNIVER_DOC"]);
    if (!var_core_value_sigD873) throw Error("No unit of type " + n.UniverInstanceType["UNIVER_DOC"] + " is currently active.");
    return var_core_value_sigD873;
  }
};
f = o([a(0, (0, n.Inject)(c)), a(1, (0, n.Inject)(t.IExchangeOperateService)), a(2, n.IUniverInstanceService), a(3, n.IResourceLoaderService)], f);
const p = {
    id: "docs-exchange-client.operation.import-doc",
    type: n.CommandType["OPERATION"],
    handler: async var_core_value_sig861B => {
      let var_core_value_sig5237 = var_core_value_sig861B.get(d);
      return (0, t.isCurrentUnitLoadedFromServer)(var_core_value_sig861B, n.UniverInstanceType["UNIVER_DOC"]) ? await var_core_value_sig5237.importDocToUnitId() : await var_core_value_sig5237.importDocToSnapshot(), true;
    }
  },
  m = {
    id: "docs-exchange-client.operation.export-doc",
    type: n.CommandType["OPERATION"],
    handler: async var_core_value_sigBB00 => {
      let var_core_value_sig7E54 = var_core_value_sigBB00.get(d);
      return (0, t.isCurrentUnitLoadedFromServer)(var_core_value_sigBB00, n.UniverInstanceType["UNIVER_DOC"]) ? await var_core_value_sig7E54.exportDocByUnitId() : await var_core_value_sig7E54.exportDocBySnapshot(), true;
    }
  },
  h = "docs-exchange-client.operation.exchange";
function g(var_core_value_sig9A8D) {
  return {
    id: h,
    type: e.MenuItemType["SUBITEMS"],
    icon: "DirectExportIcon",
    tooltip: "docs-exchange-client.file",
    hidden$: (0, e.getMenuHiddenObservable)(var_core_value_sig9A8D, n.UniverInstanceType["UNIVER_DOC"])
  };
}
function _() {
  return {
    id: p.id,
    type: e.MenuItemType["BUTTON"],
    title: "docs-exchange-client.upload",
    icon: "FolderIcon"
  };
}
function v() {
  return {
    id: m.id,
    type: e.MenuItemType["BUTTON"],
    title: "docs-exchange-client.download",
    icon: "ExportIcon"
  };
}
const y = {
  [e.RibbonStartGroup["OTHERS"]]: {
    [h]: {
      order: 0.3,
      gridLayout: {
        row: 1,
        column: 2,
        rowSpan: 2,
        showLabel: true
      },
      menuItemFactory: g,
      [p.id]: {
        order: 0,
        menuItemFactory: _
      },
      [m.id]: {
        order: 1,
        menuItemFactory: v
      }
    }
  }
};
var b = "@univerjs-pro/docs-exchange-client",
  x = "1.0.0-insiders.20260907-70fc579";
const S = {};
let C = class extends n.Disposable {
  constructor(var_core_value_sigA12B, var_core_value_sigF230) {
    super(), this._commandService = var_core_value_sigA12B, this._menuManagerService = var_core_value_sigF230, this._initCommands(), this._initMenus();
  }
  _initCommands() {
    [p, m].forEach(var_core_value_sig2AD0 => {
      this.disposeWithMe(this._commandService["registerCommand"](var_core_value_sig2AD0));
    });
  }
  _initMenus() {
    this._menuManagerService["mergeMenu"](y);
  }
};
C = o([a(0, n.ICommandService), a(1, e.IMenuManagerService)], C);
function w(var_core_value_sigC259) {
  "@babel/helpers - typeof";

  return w = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sig09B8) {
    return typeof var_core_value_sig09B8;
  } : function (var_core_value_sig6F91) {
    return var_core_value_sig6F91 && typeof Symbol == "function" && var_core_value_sig6F91.constructor === Symbol && var_core_value_sig6F91 !== Symbol.prototype ? "symbol" : typeof var_core_value_sig6F91;
  }, w(var_core_value_sigC259);
}
function T(var_core_value_sig9C9F, var_core_value_sigFDEA) {
  if (w(var_core_value_sig9C9F) != "object" || !var_core_value_sig9C9F) return var_core_value_sig9C9F;
  var var_core_value_sig86D0 = var_core_value_sig9C9F[Symbol.toPrimitive];
  if (var_core_value_sig86D0 !== undefined) {
    var var_core_value_sig4CD2 = var_core_value_sig86D0.call(var_core_value_sig9C9F, var_core_value_sigFDEA || "default");
    if (w(var_core_value_sig4CD2) != "object") return var_core_value_sig4CD2;
    throw TypeError("@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.");
  }
  return (var_core_value_sigFDEA === "string" ? String : Number)(var_core_value_sig9C9F);
}
function E(var_core_value_sig48CA) {
  var var_core_value_sig50AF = T(var_core_value_sig48CA, "string");
  return w(var_core_value_sig50AF) == "symbol" ? var_core_value_sig50AF : var_core_value_sig50AF + "";
}
function D(var_core_value_sigA942, var_core_value_sigA621, var_core_value_sigBBFF) {
  return (var_core_value_sigA621 = E(var_core_value_sigA621)) in var_core_value_sigA942 ? Object.defineProperty(var_core_value_sigA942, var_core_value_sigA621, {
    value: var_core_value_sigBBFF,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sigA942[var_core_value_sigA621] = var_core_value_sigBBFF, var_core_value_sigA942;
}
let O = class extends n.Plugin {
  constructor(var_core_value_sigF9C7 = S, var_core_value_sig8895, var_core_value_sigC80B) {
    super(), this._config = var_core_value_sigF9C7, this._injector = var_core_value_sig8895, this._configService = var_core_value_sigC80B;
    let {
      menu: var_core_value_sig284F,
      ...var_core_value_sigE154
    } = (0, n.merge)({}, S, this._config);
    var_core_value_sig284F && this._configService["setConfig"]("menu", var_core_value_sig284F, {
      merge: true
    }), this._configService["setConfig"]("docs-exchange-client.config", var_core_value_sigE154);
  }
  onStarting() {
    [[c, {
      useClass: l
    }], [d, {
      useClass: f
    }], [C]].forEach(var_core_value_sig3EEE => this._injector["add"](var_core_value_sig3EEE));
  }
  onReady() {
    (0, n.touchDependencies)(this._injector, [[C]]);
  }
};
D(O, "pluginName", "DOC_EXCHANGE_CLIENT_PLUGIN"), D(O, "packageName", b), D(O, "version", x), D(O, "type", n.UniverInstanceType["UNIVER_DOC"]), O = o([(0, n.DependentOn)(i.UniverLicensePlugin, t.UniverExchangeClientPlugin), a(1, (0, n.Inject)(n.Injector)), a(2, n.IConfigService)], O), exports.DocsExchangeClientMenuSchema = y, exports.IDocExchangeService = c, Object.defineProperty(exports, "UniverDocsExchangeClientPlugin", {
  enumerable: true,
  get: function () {
    return O;
  }
});
