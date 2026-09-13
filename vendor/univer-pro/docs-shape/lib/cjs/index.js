Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
let e = require("@univerjs-pro/engine-shape"),
  t = require("@univerjs/core"),
  n = require("@univerjs/docs-drawing"),
  r = require("@univerjs/docs"),
  i = require("@univerjs-pro/license"),
  a = function (var_core_value_sig5241) {
    return var_core_value_sig5241.PARAGRAPH_START = "paragraph-start", var_core_value_sig5241.PARAGRAPH_END = "paragraph-end", var_core_value_sig5241.OFFSET = "offset", var_core_value_sig5241;
  }({});
function o(var_core_value_sigC6E5) {
  "@babel/helpers - typeof";

  return o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sigF4B9) {
    return typeof var_core_value_sigF4B9;
  } : function (var_core_value_sig5CEE) {
    return var_core_value_sig5CEE && typeof Symbol == "function" && var_core_value_sig5CEE.constructor === Symbol && var_core_value_sig5CEE !== Symbol.prototype ? "symbol" : typeof var_core_value_sig5CEE;
  }, o(var_core_value_sigC6E5);
}
function s(var_core_value_sigCEFB, var_core_value_sig1537) {
  if (o(var_core_value_sigCEFB) != "object" || !var_core_value_sigCEFB) return var_core_value_sigCEFB;
  var var_core_value_sigE4C6 = var_core_value_sigCEFB[Symbol.toPrimitive];
  if (var_core_value_sigE4C6 !== undefined) {
    var var_core_value_sig4313 = var_core_value_sigE4C6.call(var_core_value_sigCEFB, var_core_value_sig1537 || "default");
    if (o(var_core_value_sig4313) != "object") return var_core_value_sig4313;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sig1537 === "string" ? String : Number)(var_core_value_sigCEFB);
}
function c(var_core_value_sigFC87) {
  var var_core_value_sig156F = s(var_core_value_sigFC87, "string");
  return o(var_core_value_sig156F) == "symbol" ? var_core_value_sig156F : var_core_value_sig156F + "";
}
function l(var_core_value_sigDD51, var_core_value_sigF057, var_core_value_sig72F6) {
  return (var_core_value_sigF057 = c(var_core_value_sigF057)) in var_core_value_sigDD51 ? Object.defineProperty(var_core_value_sigDD51, var_core_value_sigF057, {
    value: var_core_value_sig72F6,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sigDD51[var_core_value_sigF057] = var_core_value_sig72F6, var_core_value_sigDD51;
}
var u = class extends t.Disposable {
  constructor(...var_core_value_sigE92A) {
    super(...var_core_value_sigE92A), l(this, "shapes", new Map()), l(this, "_lineIds", new Set());
  }
  addShape(var_core_value_sig362B, var_core_value_sig5CA5, var_core_value_sigE90F) {
    let var_core_value_sigEFD4 = new e["ShapeModel"](var_core_value_sig362B, var_core_value_sig5CA5, var_core_value_sigE90F);
    return this.shapes["set"](var_core_value_sig5CA5, var_core_value_sigEFD4), (0, e.isConnectorShape)(var_core_value_sig362B) && this._lineIds["add"](var_core_value_sig5CA5), var_core_value_sigEFD4;
  }
  removeShape(var_core_value_sig861B) {
    let var_core_value_sig5237 = this.shapes["get"](var_core_value_sig861B);
    var_core_value_sig5237 && ((0, e.isConnectorShape)(var_core_value_sig5237.getShapeType()) && this._lineIds["delete"](var_core_value_sig861B), var_core_value_sig5237.dispose(), this.shapes["delete"](var_core_value_sig861B));
  }
  getShapeType(var_core_value_sigBB00) {
    var var_core_value_sig7E54;
    return (var_core_value_sig7E54 = this.shapes["get"](var_core_value_sigBB00)) == null ? undefined : var_core_value_sig7E54.getShapeType();
  }
  getShapeData(var_core_value_sig9A8D) {
    var var_core_value_sigC259;
    return (var_core_value_sigC259 = this.shapes["get"](var_core_value_sig9A8D)) == null ? undefined : var_core_value_sigC259.getShapeData();
  }
  hasShape(var_core_value_sig9C9F) {
    return this.shapes["has"](var_core_value_sig9C9F);
  }
  getBasicShapeRelation(var_core_value_sigFDEA) {
    let var_core_value_sig86D0 = [];
    for (let var_core_value_sig76BA of this._lineIds) {
      var var_core_value_sig4CD2, var_core_value_sig48CA;
      let var_core_value_sig2AD0 = this.shapes["get"](var_core_value_sig76BA),
        var_core_value_sig3EEE = var_core_value_sig2AD0 == null ? undefined : var_core_value_sig2AD0.getShapeRelation();
      var_core_value_sig3EEE && (((var_core_value_sig4CD2 = var_core_value_sig3EEE.from) == null ? undefined : var_core_value_sig4CD2.shapeId) === var_core_value_sigFDEA && var_core_value_sig86D0.push({
        ...var_core_value_sig3EEE.from,
        lineShapeId: var_core_value_sig76BA,
        isFrom: true
      }), ((var_core_value_sig48CA = var_core_value_sig3EEE.to) == null ? undefined : var_core_value_sig48CA.shapeId) === var_core_value_sigFDEA && var_core_value_sig86D0.push({
        ...var_core_value_sig3EEE.to,
        lineShapeId: var_core_value_sig76BA,
        isFrom: false
      }));
    }
    return var_core_value_sig86D0;
  }
  getLineShapeRelation(var_core_value_sig50AF) {
    var var_core_value_sigA942;
    return (var_core_value_sigA942 = this.shapes["get"](var_core_value_sig50AF)) == null ? undefined : var_core_value_sigA942.getShapeRelation();
  }
  toJSON() {
    return Array.from(this.shapes["values"]()).map(var_core_value_sigFBFA => var_core_value_sigFBFA.toJSON());
  }
  fromJSON(var_core_value_sigA621) {
    for (let var_core_value_sigF602 of var_core_value_sigA621) {
      let {
        id: var_core_value_sigBC46,
        shapeType: var_core_value_sig3D7D
      } = var_core_value_sigF602;
      this.addShape(var_core_value_sig3D7D, var_core_value_sigBC46, var_core_value_sigF602.shapeData);
    }
  }
  dispose() {
    this._disposed || (this.shapes["forEach"](var_core_value_sig1BBD => var_core_value_sig1BBD.dispose()), this.shapes["clear"](), this._lineIds["clear"](), super.dispose());
  }
};
function d(var_core_value_sig9FBA, var_core_value_sigFE01) {
  return function (var_core_value_sigBBFF, var_core_value_sig8889) {
    var_core_value_sigFE01(var_core_value_sigBBFF, var_core_value_sig8889, var_core_value_sig9FBA);
  };
}
function f(var_core_value_sigA2CE, var_core_value_sig1975, var_core_value_sig6EA1, var_core_value_sig029F) {
  var var_core_value_sig3767 = arguments.length,
    var_core_value_sig670B = var_core_value_sig3767 < 3 ? var_core_value_sig1975 : var_core_value_sig029F === null ? var_core_value_sig029F = Object.getOwnPropertyDescriptor(var_core_value_sig1975, var_core_value_sig6EA1) : var_core_value_sig029F,
    var_core_value_sig6912;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sig670B = Reflect.decorate(var_core_value_sigA2CE, var_core_value_sig1975, var_core_value_sig6EA1, var_core_value_sig029F);else {
    for (var var_core_value_sigE235 = var_core_value_sigA2CE.length - 1; var_core_value_sigE235 >= 0; var_core_value_sigE235--) (var_core_value_sig6912 = var_core_value_sigA2CE[var_core_value_sigE235]) && (var_core_value_sig670B = (var_core_value_sig3767 < 3 ? var_core_value_sig6912(var_core_value_sig670B) : var_core_value_sig3767 > 3 ? var_core_value_sig6912(var_core_value_sig1975, var_core_value_sig6EA1, var_core_value_sig670B) : var_core_value_sig6912(var_core_value_sig1975, var_core_value_sig6EA1)) || var_core_value_sig670B);
  }
  return var_core_value_sig3767 > 3 && var_core_value_sig670B && Object.defineProperty(var_core_value_sig1975, var_core_value_sig6EA1, var_core_value_sig670B), var_core_value_sig670B;
}
const p = "DOC_SHAPE_PLUGIN";
let m = class extends t.Disposable {
  constructor(var_core_value_sig32F8) {
    super(), this._resourcesManagerService = var_core_value_sig32F8, l(this, "_shapeModelManagerMap", new Map()), this._initSnapshot();
  }
  _ensureShapeModelManager(var_core_value_sig5B67) {
    let var_core_value_sig1758 = this._shapeModelManagerMap["get"](var_core_value_sig5B67);
    return var_core_value_sig1758 || (var_core_value_sig1758 = new u(), this._shapeModelManagerMap["set"](var_core_value_sig5B67, var_core_value_sig1758)), var_core_value_sig1758;
  }
  insertShape(var_core_value_sig4805, var_core_value_sigE67E, var_core_value_sig2902, var_core_value_sig9989) {
    this._ensureShapeModelManager(var_core_value_sig4805).addShape(var_core_value_sigE67E, var_core_value_sig2902, var_core_value_sig9989);
  }
  removeShape(var_core_value_sig698E, var_core_value_sig2809) {
    this._ensureShapeModelManager(var_core_value_sig698E).removeShape(var_core_value_sig2809);
  }
  getShapeType(var_core_value_sig2DAB, var_core_value_sig877E, var_core_value_sig20C8) {
    return this._ensureShapeModelManager(var_core_value_sig2DAB).getShapeType(var_core_value_sig20C8 ?? var_core_value_sig877E);
  }
  getShapeData(var_core_value_sigE9A7, var_core_value_sigBECE, var_core_value_sig1B22) {
    return this._ensureShapeModelManager(var_core_value_sigE9A7).getShapeData(var_core_value_sig1B22 ?? var_core_value_sigBECE);
  }
  hasShape(var_core_value_sig7F72, var_core_value_sig7B2A) {
    return this._ensureShapeModelManager(var_core_value_sig7F72).hasShape(var_core_value_sig7B2A);
  }
  getShapeTypeById(var_core_value_sig06CD, var_core_value_sigA5F1, var_core_value_sig97A2) {
    return this.getShapeType(var_core_value_sig06CD, var_core_value_sig97A2 ?? var_core_value_sigA5F1);
  }
  getShapeDataById(var_core_value_sig07E9, var_core_value_sig4F59, var_core_value_sigF564) {
    return this.getShapeData(var_core_value_sig07E9, var_core_value_sigF564 ?? var_core_value_sig4F59);
  }
  getShapeModel(var_core_value_sig8CFA, var_core_value_sig2E11, var_core_value_sig5B69) {
    return this._ensureShapeModelManager(var_core_value_sig8CFA).shapes["get"](var_core_value_sig5B69 ?? var_core_value_sig2E11);
  }
  getBasicShapeRelation(var_core_value_sigB098, var_core_value_sigCE71) {
    return this._ensureShapeModelManager(var_core_value_sigB098).getBasicShapeRelation(var_core_value_sigCE71);
  }
  getLineShapeRelation(var_core_value_sig21D8, var_core_value_sig2B65) {
    return this._ensureShapeModelManager(var_core_value_sig21D8).getLineShapeRelation(var_core_value_sig2B65);
  }
  _serializeShapeForUnit(var_core_value_sigD7EA) {
    var var_core_value_sigB33B;
    return JSON.stringify(((var_core_value_sigB33B = this._shapeModelManagerMap["get"](var_core_value_sigD7EA)) == null ? undefined : var_core_value_sigB33B.toJSON()) ?? []);
  }
  _deserializeShapeForUnit(var_core_value_sig24B9, var_core_value_sigE627) {
    this._ensureShapeModelManager(var_core_value_sig24B9).fromJSON(var_core_value_sigE627);
  }
  toJSON() {
    let var_core_value_sigEF3E = {};
    return this._shapeModelManagerMap["forEach"]((var_core_value_sigF704, var_core_value_sig2BCF) => {
      var_core_value_sigEF3E[var_core_value_sig2BCF] = var_core_value_sigF704.toJSON();
    }), var_core_value_sigEF3E;
  }
  fromJSON(var_core_value_sig273D) {
    Object.keys(var_core_value_sig273D).forEach(var_core_value_sig0D69 => {
      this._ensureShapeModelManager(var_core_value_sig0D69).fromJSON(var_core_value_sig273D[var_core_value_sig0D69]);
    });
  }
  _initSnapshot() {
    this._resourcesManagerService["registerPluginResource"]({
      pluginName: p,
      businesses: [t.UniverInstanceType["UNIVER_DOC"]],
      toJson: var_core_value_sig480E => this._serializeShapeForUnit(var_core_value_sig480E),
      parseJson: var_core_value_sig26DB => JSON.parse(var_core_value_sig26DB),
      onLoad: (var_core_value_sigF0F9, var_core_value_sig1A0F) => this._deserializeShapeForUnit(var_core_value_sigF0F9, var_core_value_sig1A0F ?? []),
      onUnLoad: var_core_value_sigFBA4 => {
        var var_core_value_sig4383;
        (var_core_value_sig4383 = this._shapeModelManagerMap["get"](var_core_value_sigFBA4)) == null || var_core_value_sig4383.dispose(), this._shapeModelManagerMap["delete"](var_core_value_sigFBA4);
      }
    });
  }
  dispose() {
    this._shapeModelManagerMap["forEach"](var_core_value_sig186C => var_core_value_sig186C.dispose()), this._shapeModelManagerMap["clear"](), super.dispose();
  }
};
m = f([d(0, t.IResourceManagerService)], m);
const h = {
    id: "doc.mutation.insert-shape",
    type: t.CommandType["MUTATION"],
    handler: (var_core_value_sig7664, var_core_value_sig2281) => {
      let {
        unitId: var_core_value_sig5E86,
        shapeType: var_core_value_sig6998,
        shapeId: var_core_value_sigF639,
        shapeData: var_core_value_sigEAE5
      } = var_core_value_sig2281;
      return var_core_value_sig7664.get(m).insertShape(var_core_value_sig5E86, var_core_value_sig6998, var_core_value_sigF639, var_core_value_sigEAE5), true;
    }
  },
  g = {
    id: "doc.mutation.remove-shape",
    type: t.CommandType["MUTATION"],
    handler: (var_core_value_sigE94C, var_core_value_sig6D47) => {
      let {
        unitId: var_core_value_sigCB82,
        shapeId: var_core_value_sigCF4E
      } = var_core_value_sig6D47;
      return var_core_value_sigE94C.get(m).removeShape(var_core_value_sigCB82, var_core_value_sigCF4E), true;
    }
  };
function _(var_core_value_sig6CAD, var_core_value_sig8CF5) {
  var var_core_value_sigDDD7;
  let var_core_value_sigB2CE = var_core_value_sig8CF5.segmentId ?? "",
    var_core_value_sig443C = (var_core_value_sigDDD7 = var_core_value_sig6CAD.getSelfOrHeaderFooterModel(var_core_value_sigB2CE)) == null ? undefined : var_core_value_sigDDD7.getBody();
  if (!var_core_value_sig443C) return null;
  let var_core_value_sig39B1 = (var_core_value_sig443C.paragraphs ?? []).filter(var_core_value_sig9A0D => var_core_value_sig9A0D.paragraphId === var_core_value_sig8CF5.paragraphId);
  if (var_core_value_sig39B1.length !== 1) return null;
  let var_core_value_sig210D = var_core_value_sig39B1[0],
    var_core_value_sigB4B4 = (0, t.getParagraphContentStartOffset)(var_core_value_sig443C, var_core_value_sig210D),
    var_core_value_sigD407 = var_core_value_sig210D.startIndex,
    var_core_value_sig63F3 = var_core_value_sigD407;
  if (var_core_value_sig8CF5.position === "offset") {
    let {
      offset: var_core_value_sigA319
    } = var_core_value_sig8CF5;
    if (!Number.isInteger(var_core_value_sigA319) || var_core_value_sigA319 < 0 || var_core_value_sigA319 > var_core_value_sigD407 - var_core_value_sigB4B4) return null;
    var_core_value_sig63F3 = var_core_value_sigB4B4 + var_core_value_sigA319;
  } else {
    if (var_core_value_sig8CF5.position === "paragraph-start") var_core_value_sig63F3 = var_core_value_sigB4B4;else {
      if (var_core_value_sig8CF5.position !== undefined && var_core_value_sig8CF5.position !== "paragraph-end") return null;
    }
  }
  return {
    startOffset: var_core_value_sig63F3,
    endOffset: var_core_value_sig63F3,
    collapsed: true,
    segmentId: var_core_value_sigB2CE
  };
}
function v(var_core_value_sig6A71, var_core_value_sig3BF6) {
  let var_core_value_sig38CE = n.WRAPPING_STYLE_TO_LAYOUT_TYPE[var_core_value_sig3BF6.wrappingStyle];
  if (var_core_value_sig38CE === undefined || var_core_value_sig3BF6.wrappingStyle === n.TextWrappingStyle["INLINE"] && var_core_value_sig3BF6.position !== undefined) return null;
  let var_core_value_sig62B7 = _(var_core_value_sig6A71, var_core_value_sig3BF6.anchor);
  return var_core_value_sig62B7 ? {
    layoutType: var_core_value_sig38CE,
    textRange: var_core_value_sig62B7
  } : null;
}
function y(var_core_value_sig37A8, var_core_value_sigA90D, var_core_value_sig7A3C) {
  var var_core_value_sig0511, var_core_value_sig1F44, var_core_value_sigCB04, var_core_value_sig947E, var_core_value_sig4545;
  let {
      placement: var_core_value_sigF39A
    } = var_core_value_sig37A8,
    var_core_value_sigF79C = ((var_core_value_sig0511 = var_core_value_sig37A8.transform) == null ? undefined : var_core_value_sig0511.width) ?? 160,
    var_core_value_sig2E54 = ((var_core_value_sig1F44 = var_core_value_sig37A8.transform) == null ? undefined : var_core_value_sig1F44.height) ?? 96,
    var_core_value_sig7658 = ((var_core_value_sigCB04 = var_core_value_sig37A8.transform) == null ? undefined : var_core_value_sigCB04.rotation) ?? 0,
    var_core_value_sigDCF5 = {
      ...(0, r.buildDocTransform)(var_core_value_sigF79C, var_core_value_sig2E54, var_core_value_sigF39A.wrappingStyle === n.TextWrappingStyle["INLINE"] ? undefined : {
        left: (var_core_value_sig947E = var_core_value_sigF39A.position) == null ? undefined : var_core_value_sig947E.horizontalOffset,
        top: (var_core_value_sig4545 = var_core_value_sigF39A.position) == null ? undefined : var_core_value_sig4545.verticalOffset
      }),
      angle: var_core_value_sig7658
    },
    var_core_value_sigC786 = {
      ...(0, r.docDrawingPositionToTransform)(var_core_value_sigDCF5),
      angle: var_core_value_sig7658
    },
    var_core_value_sigC0D9 = {};
  return (0, e.isConnectorShape)(var_core_value_sig37A8.shapeType) && (var_core_value_sigC0D9.fill = false, var_core_value_sigC0D9.rotateEnabled = false, var_core_value_sigC0D9.resizeEnabled = false, var_core_value_sigC0D9.borderEnabled = false, var_core_value_sigC786.rotateEnabled = false, var_core_value_sigC786.resizeEnabled = false, var_core_value_sigC786.borderEnabled = false), {
    unitId: var_core_value_sig37A8.unitId,
    subUnitId: var_core_value_sig37A8.unitId,
    drawingId: var_core_value_sigA90D,
    drawingType: t.DrawingTypeEnum["DRAWING_SHAPE"],
    name: var_core_value_sig37A8.name,
    transform: var_core_value_sigC786,
    docTransform: var_core_value_sigDCF5,
    data: var_core_value_sigC0D9,
    behindDoc: var_core_value_sigF39A.wrappingStyle === n.TextWrappingStyle["BEHIND_TEXT"] ? t.BooleanNumber["TRUE"] : t.BooleanNumber["FALSE"],
    title: var_core_value_sig37A8.name ?? "",
    description: var_core_value_sig37A8.description ?? "",
    layoutType: var_core_value_sig7A3C,
    wrapText: t.WrapTextType["BOTH_SIDES"],
    distB: 0,
    distL: 0,
    distR: 0,
    distT: 0,
    allowTransform: true,
    hidden: var_core_value_sig37A8.visible === false,
    selectable: var_core_value_sig37A8.selectable ?? true
  };
}
const b = {
    type: t.CommandType["COMMAND"],
    id: "doc.command.insert-shape",
    handler: (var_core_value_sigF051, var_core_value_sig5825) => {
      var var_core_value_sig4EB7;
      let var_core_value_sig73AF = var_core_value_sigF051.get(t.IUniverInstanceService).getUnit(var_core_value_sig5825.unitId, t.UniverInstanceType["UNIVER_DOC"]);
      if (!var_core_value_sig73AF) return false;
      let var_core_value_sig548A = (var_core_value_sig4EB7 = var_core_value_sig5825.placement) != null && var_core_value_sig4EB7.anchor ? v(var_core_value_sig73AF, var_core_value_sig5825.placement) : null;
      if (!var_core_value_sig548A) return false;
      let var_core_value_sigE026 = var_core_value_sigF051.get(t.ICommandService),
        var_core_value_sig339E = var_core_value_sigF051.get(t.IUndoRedoService),
        var_core_value_sig7550 = var_core_value_sig5825.shapeId ?? (0, t.generateRandomId)(),
        var_core_value_sig2983 = y(var_core_value_sig5825, var_core_value_sig7550, var_core_value_sig548A.layoutType),
        var_core_value_sigE1B0 = var_core_value_sig5825.shapeData ?? (0, e.createDefaultInsertedShapeData)(var_core_value_sig5825.shapeType),
        var_core_value_sigD4FF = {
          unitId: var_core_value_sig5825.unitId,
          shapeId: var_core_value_sig7550,
          shapeType: var_core_value_sig5825.shapeType,
          shapeData: var_core_value_sigE1B0
        },
        var_core_value_sig1E5B = "doc-shape-insert:" + var_core_value_sig5825.unitId + ":" + var_core_value_sig7550,
        var_core_value_sigB680 = var_core_value_sig339E.__tempBatchingUndoRedo(var_core_value_sig5825.unitId);
      if (!var_core_value_sigE026.syncExecuteCommand(h.id, var_core_value_sigD4FF)) return var_core_value_sigB680 == null || var_core_value_sigB680.dispose(), false;
      var_core_value_sig339E.pushUndoRedo({
        id: var_core_value_sig1E5B,
        unitID: var_core_value_sig5825.unitId,
        redoMutations: [{
          id: h.id,
          params: var_core_value_sigD4FF
        }],
        undoMutations: [{
          id: g.id,
          params: {
            unitId: var_core_value_sig5825.unitId,
            shapeId: var_core_value_sig7550
          }
        }]
      });
      let var_core_value_sig1F64 = var_core_value_sigE026.syncExecuteCommand(n.InsertDocDrawingCommand["id"], {
        unitId: var_core_value_sig5825.unitId,
        drawings: [var_core_value_sig2983],
        textRange: var_core_value_sig548A.textRange
      });
      return var_core_value_sigB680 == null || var_core_value_sigB680.dispose(), var_core_value_sig1F64 ? true : (var_core_value_sig339E.rollback(var_core_value_sig1E5B, var_core_value_sig5825.unitId), false);
    }
  },
  x = ["name", "title", "description", "hidden", "visible", "selectable"],
  S = {
    id: "doc.command.update-drawing-metadata",
    type: t.CommandType["COMMAND"],
    handler: (var_core_value_sigDD1C, var_core_value_sig2C39) => {
      if (!var_core_value_sig2C39 || var_core_value_sig2C39.patches["length"] === 0) return false;
      let var_core_value_sigB7D1 = var_core_value_sigDD1C.get(t.ICommandService),
        var_core_value_sig64F0 = var_core_value_sigDD1C.get(t.IUniverInstanceService).getUnit(var_core_value_sig2C39.unitId, t.UniverInstanceType["UNIVER_DOC"]),
        var_core_value_sig85B1 = var_core_value_sig64F0 == null ? undefined : var_core_value_sig64F0.getSnapshot().drawings;
      if (!var_core_value_sig64F0 || !var_core_value_sig85B1) return false;
      let var_core_value_sig3141 = t.JSONX["getInstance"](),
        var_core_value_sig2162 = [];
      if (var_core_value_sig2C39.patches["forEach"](var_core_value_sig2D58 => {
        let var_core_value_sig223F = var_core_value_sig85B1[var_core_value_sig2D58.drawingId];
        var_core_value_sig223F && x.forEach(var_core_value_sigD955 => {
          if (!(var_core_value_sigD955 in var_core_value_sig2D58)) return;
          let var_core_value_sig48BD = var_core_value_sig2D58[var_core_value_sigD955],
            var_core_value_sig429F = var_core_value_sig223F[var_core_value_sigD955];
          if (var_core_value_sig429F === var_core_value_sig48BD) return;
          let var_core_value_sigF62A = ["drawings", var_core_value_sig2D58.drawingId, var_core_value_sigD955];
          if (var_core_value_sig48BD === undefined) {
            var_core_value_sig429F !== undefined && var_core_value_sig2162.push(var_core_value_sig3141.removeOp(var_core_value_sigF62A, var_core_value_sig429F));
            return;
          }
          var_core_value_sig2162.push(var_core_value_sig429F === undefined ? var_core_value_sig3141.insertOp(var_core_value_sigF62A, var_core_value_sig48BD) : var_core_value_sig3141.replaceOp(var_core_value_sigF62A, var_core_value_sig429F, var_core_value_sig48BD));
        });
      }), !var_core_value_sig2162.length) return false;
      let var_core_value_sig2EAD = {
        id: r.RichTextEditingMutation["id"],
        params: {
          unitId: var_core_value_sig2C39.unitId,
          actions: var_core_value_sig2162.reduce((var_core_value_sigD749, var_core_value_sigCFFA) => t.JSONX["compose"](var_core_value_sigD749, var_core_value_sigCFFA), null),
          textRanges: null
        }
      };
      return !!var_core_value_sigB7D1.syncExecuteCommand(var_core_value_sig2EAD.id, var_core_value_sig2EAD.params);
    }
  },
  C = {
    id: "doc.mutation.update-shape-data",
    type: t.CommandType["MUTATION"],
    handler: (var_core_value_sig6774, var_core_value_sig340D) => {
      var var_core_value_sig82D4;
      let {
          unitId: var_core_value_sigBDE4,
          shapeType: var_core_value_sig7DF1,
          shapeId: var_core_value_sigDC86,
          shapeData: var_core_value_sig0B0C,
          replaceShapeData: var_core_value_sigA39E,
          formulaLastValueGuard: var_core_value_sigBBEE
        } = var_core_value_sig340D,
        var_core_value_sig011D = var_core_value_sig6774.get(m).getShapeModel(var_core_value_sigBDE4, var_core_value_sigDC86);
      return var_core_value_sig011D ? (0, e.canApplyShapeFormulaLastValue)(var_core_value_sig6774, {
        hostType: t.UniverInstanceType["UNIVER_DOC"],
        unitId: var_core_value_sigBDE4,
        subUnitId: var_core_value_sigBDE4,
        shapeId: var_core_value_sigDC86
      }, (var_core_value_sig82D4 = var_core_value_sig011D.getShapeData().formulaBinding) == null ? undefined : var_core_value_sig82D4.formula, var_core_value_sigBBEE) ? (var_core_value_sig7DF1 !== undefined && var_core_value_sig011D.setShapeType(var_core_value_sig7DF1), var_core_value_sig0B0C && var_core_value_sig011D.setShapeData(var_core_value_sig0B0C, !var_core_value_sigA39E), true) : true : false;
    }
  };
function w(var_core_value_sig6167, var_core_value_sig65A1) {
  let var_core_value_sig7F19 = {};
  for (let var_core_value_sig58C1 of Object.keys(var_core_value_sig65A1)) {
    let var_core_value_sig8178 = var_core_value_sig65A1[var_core_value_sig58C1],
      var_core_value_sigE9ED = var_core_value_sig6167[var_core_value_sig58C1];
    var_core_value_sig8178 !== undefined && (typeof var_core_value_sig8178 == "object" && var_core_value_sig8178 && !Array.isArray(var_core_value_sig8178) && typeof var_core_value_sigE9ED == "object" && var_core_value_sigE9ED && !Array.isArray(var_core_value_sigE9ED) ? var_core_value_sig7F19[var_core_value_sig58C1] = w(var_core_value_sigE9ED, var_core_value_sig8178) : var_core_value_sig7F19[var_core_value_sig58C1] = var_core_value_sigE9ED);
  }
  return var_core_value_sig7F19;
}
const T = {
  type: t.CommandType["COMMAND"],
  id: "doc.command.update-shape-data",
  handler: (var_core_value_sig7827, var_core_value_sig652C) => {
    let var_core_value_sig7E32 = var_core_value_sig7827.get(m),
      {
        unitId: var_core_value_sig4C07,
        shapeType: var_core_value_sig79AB,
        shapeId: var_core_value_sig8E74,
        shapeData: var_core_value_sig104C,
        replaceShapeData: var_core_value_sig841D,
        oldShapeJSON: var_core_value_sig90CB
      } = var_core_value_sig652C;
    if (!var_core_value_sig7E32.getShapeModel(var_core_value_sig4C07, var_core_value_sig8E74)) return false;
    let var_core_value_sigBDF5 = var_core_value_sig7827.get(t.ICommandService),
      var_core_value_sigACC6 = var_core_value_sig7827.get(t.IUndoRedoService),
      {
        oldShapeType: var_core_value_sig1614,
        oldShapeData: var_core_value_sig85C3 = {}
      } = var_core_value_sig90CB,
      var_core_value_sigB996 = var_core_value_sig841D ? var_core_value_sig85C3 : w(var_core_value_sig85C3, var_core_value_sig104C || {}),
      var_core_value_sig4BBA = {
        id: C.id,
        params: {
          unitId: var_core_value_sig4C07,
          shapeId: var_core_value_sig8E74,
          shapeType: var_core_value_sig79AB,
          shapeData: var_core_value_sig104C,
          replaceShapeData: var_core_value_sig841D
        }
      },
      var_core_value_sig6201 = {
        id: C.id,
        params: {
          unitId: var_core_value_sig4C07,
          shapeId: var_core_value_sig8E74,
          shapeType: var_core_value_sig1614,
          shapeData: var_core_value_sigB996,
          replaceShapeData: var_core_value_sig841D
        }
      };
    return var_core_value_sigBDF5.syncExecuteCommand(var_core_value_sig4BBA.id, var_core_value_sig4BBA.params) ? (var_core_value_sigACC6.pushUndoRedo({
      unitID: var_core_value_sig4C07,
      undoMutations: [var_core_value_sig6201],
      redoMutations: [var_core_value_sig4BBA]
    }), true) : false;
  }
};
function E(var_core_value_sig5151) {
  let {
    docTransform: var_core_value_sigB542,
    transform: var_core_value_sigBB6C
  } = var_core_value_sig5151;
  return {
    left: var_core_value_sigB542.positionH["posOffset"] ?? (var_core_value_sigBB6C == null ? undefined : var_core_value_sigBB6C.left) ?? 0,
    top: var_core_value_sigB542.positionV["posOffset"] ?? (var_core_value_sigBB6C == null ? undefined : var_core_value_sigBB6C.top) ?? 0,
    width: var_core_value_sigB542.size["width"] ?? 160,
    height: var_core_value_sigB542.size["height"] ?? 96,
    rotation: var_core_value_sigB542.angle ?? 0,
    flipX: var_core_value_sigB542.flipX ?? (var_core_value_sigBB6C == null ? undefined : var_core_value_sigBB6C.flipX) ?? false,
    flipY: var_core_value_sigB542.flipY ?? (var_core_value_sigBB6C == null ? undefined : var_core_value_sigBB6C.flipY) ?? false
  };
}
let D = class {
  constructor(var_core_value_sig5090, var_core_value_sigC368, var_core_value_sigAD56, var_core_value_sigDB4A) {
    this._commandService = var_core_value_sig5090, this._univerInstanceService = var_core_value_sigC368, this._shapeService = var_core_value_sigAD56, this._connectorShapeHostAdapter = var_core_value_sigDB4A, l(this, "hostType", t.UniverInstanceType["UNIVER_DOC"]);
  }
  get shapeChanged$() {
    return {
      subscribe: var_core_value_sigB577 => {
        let var_core_value_sig9572 = this._commandService["onCommandExecuted"](var_core_value_sig27E5 => {
          (var_core_value_sig27E5.id === h.id || var_core_value_sig27E5.id === g.id || var_core_value_sig27E5.id === C.id) && var_core_value_sigB577({
            unitId: var_core_value_sig27E5.params["unitId"]
          });
        });
        return {
          unsubscribe: () => var_core_value_sig9572.dispose()
        };
      }
    };
  }
  getShape(var_core_value_sig6418) {
    let var_core_value_sig1896 = this._getDrawing(var_core_value_sig6418),
      var_core_value_sig0285 = this._shapeService["getShapeType"](var_core_value_sig6418.unitId, var_core_value_sig6418.shapeId);
    return !var_core_value_sig1896 || var_core_value_sig0285 === undefined ? null : {
      ...var_core_value_sig6418,
      shapeType: var_core_value_sig0285,
      shapeData: t.Tools["deepClone"](this._shapeService["getShapeData"](var_core_value_sig6418.unitId, var_core_value_sig6418.shapeId) ?? {}),
      name: var_core_value_sig1896.name ?? (var_core_value_sig1896.title || undefined),
      description: var_core_value_sig1896.description,
      visible: var_core_value_sig1896.hidden !== true,
      selectable: var_core_value_sig1896.selectable !== false,
      transform: E(var_core_value_sig1896)
    };
  }
  listShapes(var_core_value_sig777D) {
    let var_core_value_sig3F4C = this._getDocument(var_core_value_sig777D.unitId);
    if (!var_core_value_sig3F4C) return [];
    let var_core_value_sigD65A = var_core_value_sig3F4C.getDrawings() ?? {};
    return (var_core_value_sig3F4C.getDrawingsOrder() ?? Object.keys(var_core_value_sigD65A)).filter(var_core_value_sigD873 => {
      var var_core_value_sigA12B;
      return ((var_core_value_sigA12B = var_core_value_sigD65A[var_core_value_sigD873]) == null ? undefined : var_core_value_sigA12B.drawingType) === t.DrawingTypeEnum["DRAWING_SHAPE"];
    }).map(var_core_value_sigF230 => this.getShape({
      ...var_core_value_sig777D,
      shapeId: var_core_value_sigF230
    })).filter(var_core_value_sig09B8 => !!var_core_value_sig09B8);
  }
  listShapesInUnit(var_core_value_sig5A13) {
    return this.listShapes({
      hostType: this.hostType,
      unitId: var_core_value_sig5A13,
      subUnitId: var_core_value_sig5A13
    });
  }
  createShape(var_core_value_sigF593, var_core_value_sig3607) {
    var var_core_value_sigB512, var_core_value_sigF2E6, var_core_value_sig34C8;
    if (!var_core_value_sig3607.placement) return null;
    let var_core_value_sigB744 = (0, t.generateRandomId)(),
      var_core_value_sigEAE2 = var_core_value_sig3607.placement["wrappingStyle"] === n.TextWrappingStyle["INLINE"] ? undefined : var_core_value_sig3607.placement["position"],
      var_core_value_sigE68A = {
        left: (var_core_value_sigEAE2 == null ? undefined : var_core_value_sigEAE2.horizontalOffset) ?? 0,
        top: (var_core_value_sigEAE2 == null ? undefined : var_core_value_sigEAE2.verticalOffset) ?? 0,
        width: ((var_core_value_sigB512 = var_core_value_sig3607.transform) == null ? undefined : var_core_value_sigB512.width) ?? 160,
        height: ((var_core_value_sigF2E6 = var_core_value_sig3607.transform) == null ? undefined : var_core_value_sigF2E6.height) ?? 96,
        rotation: ((var_core_value_sig34C8 = var_core_value_sig3607.transform) == null ? undefined : var_core_value_sig34C8.rotation) ?? 0,
        flipX: false,
        flipY: false
      },
      var_core_value_sig3E68 = t.Tools["deepClone"](var_core_value_sig3607.shapeData ?? (0, e.createDefaultInsertedShapeData)(var_core_value_sig3607.shapeType));
    return this._commandService["syncExecuteCommand"](b.id, {
      unitId: var_core_value_sigF593.unitId,
      shapeId: var_core_value_sigB744,
      ...var_core_value_sig3607,
      shapeData: var_core_value_sig3E68,
      transform: {
        width: var_core_value_sigE68A.width,
        height: var_core_value_sigE68A.height,
        rotation: var_core_value_sigE68A.rotation
      },
      visible: var_core_value_sig3607.visible ?? true,
      selectable: var_core_value_sig3607.selectable ?? true
    }) ? {
      ...var_core_value_sigF593,
      shapeId: var_core_value_sigB744,
      shapeType: var_core_value_sig3607.shapeType,
      shapeData: var_core_value_sig3E68,
      name: var_core_value_sig3607.name,
      description: var_core_value_sig3607.description,
      visible: var_core_value_sig3607.visible ?? true,
      selectable: var_core_value_sig3607.selectable ?? true,
      transform: var_core_value_sigE68A
    } : null;
  }
  updateShape(var_core_value_sigF4C5, var_core_value_sig5410) {
    let var_core_value_sig492F = this.getShape(var_core_value_sigF4C5),
      var_core_value_sig8EA0 = this._getDrawing(var_core_value_sigF4C5);
    if (!var_core_value_sig492F || !var_core_value_sig8EA0 || !this._supportsTransformUpdate(var_core_value_sig492F, var_core_value_sig5410)) return false;
    if (var_core_value_sig5410.shapeType !== undefined || var_core_value_sig5410.shapeData !== undefined) {
      var var_core_value_sigA6F6;
      if (!this._commandService["syncExecuteCommand"](T.id, {
        unitId: var_core_value_sigF4C5.unitId,
        shapeId: var_core_value_sigF4C5.shapeId,
        shapeType: var_core_value_sig5410.shapeType ?? ((var_core_value_sigA6F6 = var_core_value_sig5410.shapeData) == null ? undefined : var_core_value_sigA6F6.shapeType),
        shapeData: var_core_value_sig5410.shapeData,
        replaceShapeData: true,
        oldShapeJSON: {
          oldShapeData: var_core_value_sig492F.shapeData,
          oldShapeType: var_core_value_sig492F.shapeType
        }
      })) return false;
    }
    let var_core_value_sigCDDA = this._buildTransformUpdates(var_core_value_sigF4C5, var_core_value_sig8EA0, var_core_value_sig492F, var_core_value_sig5410);
    if (var_core_value_sigCDDA.length > 0 && !this._commandService["syncExecuteCommand"](n.UpdateDrawingDocTransformCommand["id"], {
      unitId: var_core_value_sigF4C5.unitId,
      subUnitId: var_core_value_sigF4C5.subUnitId,
      drawings: var_core_value_sigCDDA
    })) return false;
    let var_core_value_sigE243 = "name" in var_core_value_sig5410,
      var_core_value_sig74A8 = "description" in var_core_value_sig5410;
    return var_core_value_sig5410.visible === undefined && var_core_value_sig5410.selectable === undefined && !var_core_value_sigE243 && !var_core_value_sig74A8 || this._commandService["syncExecuteCommand"](S.id, {
      unitId: var_core_value_sigF4C5.unitId,
      patches: [{
        drawingId: var_core_value_sigF4C5.shapeId,
        ...(var_core_value_sig5410.visible === undefined ? null : {
          hidden: !var_core_value_sig5410.visible
        }),
        ...(var_core_value_sig5410.selectable === undefined ? null : {
          selectable: var_core_value_sig5410.selectable
        }),
        ...(var_core_value_sigE243 ? {
          name: var_core_value_sig5410.name,
          title: var_core_value_sig5410.name
        } : null),
        ...(var_core_value_sig74A8 ? {
          description: var_core_value_sig5410.description
        } : null)
      }]
    });
  }
  createFormulaLastValueMutation(var_core_value_sig21B2, var_core_value_sigDE08, var_core_value_sigACCB) {
    let var_core_value_sig7F33 = this.getShape(var_core_value_sig21B2),
      var_core_value_sig0C53 = var_core_value_sig7F33 == null ? undefined : var_core_value_sig7F33.shapeData["formulaBinding"];
    return !var_core_value_sig7F33 || !var_core_value_sig0C53 ? null : {
      id: C.id,
      params: {
        unitId: var_core_value_sig21B2.unitId,
        shapeId: var_core_value_sig21B2.shapeId,
        shapeData: {
          ...var_core_value_sig7F33.shapeData,
          formulaBinding: {
            ...var_core_value_sig0C53,
            lastValue: t.Tools["deepClone"](var_core_value_sigACCB)
          }
        },
        replaceShapeData: true,
        formulaLastValueGuard: var_core_value_sigDE08
      }
    };
  }
  removeShape(var_core_value_sigEA04) {
    let var_core_value_sig7A62 = this._getDrawing(var_core_value_sigEA04),
      var_core_value_sig8109 = this._getTextRange(var_core_value_sigEA04.unitId, var_core_value_sigEA04.shapeId);
    return !var_core_value_sig7A62 || !var_core_value_sig8109 ? false : this._commandService["syncExecuteCommand"](n.RemoveDocDrawingCommand["id"], {
      unitId: var_core_value_sigEA04.unitId,
      drawings: [{
        unitId: var_core_value_sigEA04.unitId,
        subUnitId: var_core_value_sigEA04.subUnitId,
        drawingId: var_core_value_sigEA04.shapeId,
        drawingType: t.DrawingTypeEnum["DRAWING_SHAPE"]
      }],
      textRange: var_core_value_sig8109
    });
  }
  bringToFront(var_core_value_sig7565) {
    return this._arrange(var_core_value_sig7565, t.ArrangeTypeEnum["front"]);
  }
  bringForward(var_core_value_sigD4FB) {
    return this._arrange(var_core_value_sigD4FB, t.ArrangeTypeEnum["forward"]);
  }
  sendBackward(var_core_value_sig3E71) {
    return this._arrange(var_core_value_sig3E71, t.ArrangeTypeEnum["backward"]);
  }
  sendToBack(var_core_value_sig01B3) {
    return this._arrange(var_core_value_sig01B3, t.ArrangeTypeEnum["back"]);
  }
  setZOrder(var_core_value_sig7442, var_core_value_sigDF87) {
    return this._commandService["syncExecuteCommand"](n.SetDocDrawingArrangeCommand["id"], {
      unitId: var_core_value_sig7442.unitId,
      subUnitId: var_core_value_sig7442.subUnitId,
      drawingIds: [var_core_value_sig7442.shapeId],
      zOrder: var_core_value_sigDF87
    });
  }
  refreshConnectedConnectors(var_core_value_sig9EE0) {
    let var_core_value_sigF0511 = this._shapeService["getShapeType"](var_core_value_sig9EE0.unitId, var_core_value_sig9EE0.shapeId);
    if (var_core_value_sigF0511 === undefined) return false;
    if ((0, e.isConnectorShape)(var_core_value_sigF0511)) return true;
    let var_core_value_sig0B45 = new Set(this._shapeService["getBasicShapeRelation"](var_core_value_sig9EE0.unitId, var_core_value_sig9EE0.shapeId).map(({
        lineShapeId: var_core_value_sig6F91
      }) => var_core_value_sig6F91)),
      var_core_value_sig36F8 = true;
    for (let var_core_value_sigF9C7 of var_core_value_sig0B45) {
      let var_core_value_sig8061 = this._shapeService["getLineShapeRelation"](var_core_value_sig9EE0.unitId, var_core_value_sigF9C7),
        var_core_value_sig4D4C = {
          ...var_core_value_sig9EE0,
          shapeId: var_core_value_sigF9C7
        };
      var_core_value_sig8061 != null && var_core_value_sig8061.from && (var_core_value_sig36F8 = this._connectorShapeHostAdapter["bindStart"](var_core_value_sig4D4C, var_core_value_sig8061.from) && var_core_value_sig36F8), var_core_value_sig8061 != null && var_core_value_sig8061.to && (var_core_value_sig36F8 = this._connectorShapeHostAdapter["bindEnd"](var_core_value_sig4D4C, var_core_value_sig8061.to) && var_core_value_sig36F8);
    }
    return var_core_value_sig36F8;
  }
  getRemoveDrawingMutationInfos(var_core_value_sig03E1) {
    let {
      drawing: var_core_value_sigBB57,
      unitId: var_core_value_sig7C4A
    } = var_core_value_sig03E1;
    if (var_core_value_sigBB57.drawingType !== t.DrawingTypeEnum["DRAWING_SHAPE"]) return null;
    let var_core_value_sigE799 = this._shapeService["getShapeType"](var_core_value_sig7C4A, var_core_value_sigBB57.drawingId);
    if (var_core_value_sigE799 === undefined) return null;
    let var_core_value_sigB601 = this._shapeService["getShapeData"](var_core_value_sig7C4A, var_core_value_sigBB57.drawingId);
    return {
      redoMutations: [{
        id: g.id,
        params: {
          unitId: var_core_value_sig7C4A,
          shapeId: var_core_value_sigBB57.drawingId
        }
      }],
      undoMutations: [{
        id: h.id,
        params: {
          unitId: var_core_value_sig7C4A,
          shapeId: var_core_value_sigBB57.drawingId,
          shapeType: var_core_value_sigE799,
          shapeData: var_core_value_sigB601
        }
      }]
    };
  }
  _getDocument(var_core_value_sig8B71) {
    return this._univerInstanceService["getUnit"](var_core_value_sig8B71, t.UniverInstanceType["UNIVER_DOC"]) ?? null;
  }
  _getDrawing(var_core_value_sigAEFB) {
    var var_core_value_sig826B;
    let var_core_value_sigCF89 = (var_core_value_sig826B = this._getDocument(var_core_value_sigAEFB.unitId)) == null || (var_core_value_sig826B = var_core_value_sig826B.getDrawings()) == null ? undefined : var_core_value_sig826B[var_core_value_sigAEFB.shapeId];
    return (var_core_value_sigCF89 == null ? undefined : var_core_value_sigCF89.drawingType) === t.DrawingTypeEnum["DRAWING_SHAPE"] ? var_core_value_sigCF89 : null;
  }
  _supportsTransformUpdate(var_core_value_sig00CB, var_core_value_sig77EE) {
    var var_core_value_sig9F76, var_core_value_sigB008;
    return (0, e.isConnectorShape)(var_core_value_sig00CB.shapeType) ? true : (((var_core_value_sig9F76 = var_core_value_sig77EE.transform) == null ? undefined : var_core_value_sig9F76.flipX) === undefined || var_core_value_sig77EE.transform["flipX"] === var_core_value_sig00CB.transform["flipX"]) && (((var_core_value_sigB008 = var_core_value_sig77EE.transform) == null ? undefined : var_core_value_sigB008.flipY) === undefined || var_core_value_sig77EE.transform["flipY"] === var_core_value_sig00CB.transform["flipY"]);
  }
  _buildTransformUpdates(var_core_value_sig8721, var_core_value_sig08BA, var_core_value_sigDBB5, var_core_value_sigCFAC) {
    let var_core_value_sig237B = var_core_value_sigCFAC.transform;
    if (!var_core_value_sig237B) return [];
    let var_core_value_sigFEAB = [];
    return (var_core_value_sig237B.width !== undefined || var_core_value_sig237B.height !== undefined) && var_core_value_sigFEAB.push({
      drawingId: var_core_value_sig8721.shapeId,
      key: "size",
      value: {
        width: var_core_value_sig237B.width ?? var_core_value_sigDBB5.transform["width"],
        height: var_core_value_sig237B.height ?? var_core_value_sigDBB5.transform["height"]
      }
    }), var_core_value_sig237B.rotation !== undefined && var_core_value_sigFEAB.push({
      drawingId: var_core_value_sig8721.shapeId,
      key: "angle",
      value: var_core_value_sig237B.rotation
    }), var_core_value_sig237B.left !== undefined && var_core_value_sigFEAB.push({
      drawingId: var_core_value_sig8721.shapeId,
      key: "positionH",
      value: {
        ...var_core_value_sig08BA.docTransform["positionH"],
        posOffset: var_core_value_sig237B.left
      }
    }), var_core_value_sig237B.top !== undefined && var_core_value_sigFEAB.push({
      drawingId: var_core_value_sig8721.shapeId,
      key: "positionV",
      value: {
        ...var_core_value_sig08BA.docTransform["positionV"],
        posOffset: var_core_value_sig237B.top
      }
    }), var_core_value_sig237B.flipX !== undefined && var_core_value_sigFEAB.push({
      drawingId: var_core_value_sig8721.shapeId,
      key: "flipX",
      value: var_core_value_sig237B.flipX
    }), var_core_value_sig237B.flipY !== undefined && var_core_value_sigFEAB.push({
      drawingId: var_core_value_sig8721.shapeId,
      key: "flipY",
      value: var_core_value_sig237B.flipY
    }), var_core_value_sigFEAB;
  }
  _arrange(var_core_value_sigE347, var_core_value_sig3C5B) {
    return this._commandService["syncExecuteCommand"](n.SetDocDrawingArrangeCommand["id"], {
      unitId: var_core_value_sigE347.unitId,
      subUnitId: var_core_value_sigE347.subUnitId,
      drawingIds: [var_core_value_sigE347.shapeId],
      arrangeType: var_core_value_sig3C5B
    });
  }
  _getTextRange(var_core_value_sig200B, var_core_value_sig3863) {
    var var_core_value_sigC97C;
    let var_core_value_sigC4B1 = (var_core_value_sigC97C = this._getDocument(var_core_value_sig200B)) == null ? undefined : var_core_value_sigC97C.getSnapshot();
    if (!var_core_value_sigC4B1) return null;
    let var_core_value_sig1BD9 = [{
      segmentId: "",
      body: var_core_value_sigC4B1.body
    }, ...Object.entries(var_core_value_sigC4B1.headers ?? {}).map(([var_core_value_sig8895, var_core_value_sigC80B]) => ({
      segmentId: var_core_value_sig8895,
      body: var_core_value_sigC80B.body
    })), ...Object.entries(var_core_value_sigC4B1.footers ?? {}).map(([var_core_value_sig284F, var_core_value_sigE154]) => ({
      segmentId: var_core_value_sig284F,
      body: var_core_value_sigE154.body
    }))];
    for (let {
      segmentId: var_core_value_sig4632,
      body: var_core_value_sig12F2
    } of var_core_value_sig1BD9) {
      var var_core_value_sigE43E;
      let var_core_value_sigC9E0 = var_core_value_sig12F2 == null || (var_core_value_sigE43E = var_core_value_sig12F2.customBlocks) == null ? undefined : var_core_value_sigE43E.find(var_core_value_sig7524 => var_core_value_sig7524.blockId === var_core_value_sig3863);
      if (var_core_value_sigC9E0) return {
        startOffset: var_core_value_sigC9E0.startIndex,
        endOffset: var_core_value_sigC9E0.startIndex,
        collapsed: true,
        segmentId: var_core_value_sig4632
      };
    }
    return null;
  }
};
D = f([d(0, t.ICommandService), d(1, t.IUniverInstanceService), d(2, (0, t.Inject)(m)), d(3, e.IConnectorShapeHostAdapter)], D);
var O = "@univerjs-pro/docs-shape",
  k = "1.0.0-insiders.20260907-70fc579";
const A = {};
let j = class extends t.Disposable {
  constructor(var_core_value_sigA937, var_core_value_sigCAD5, var_core_value_sigE503, var_core_value_sig48DD) {
    super(), this._commandService = var_core_value_sigA937, this._shapeHostAdapterRegistry = var_core_value_sigCAD5, this._docDrawingAdapterService = var_core_value_sigE503, this._registerCommands(), this.disposeWithMe(this._shapeHostAdapterRegistry["register"](var_core_value_sig48DD)), this.disposeWithMe(this._docDrawingAdapterService["registerAdapter"](var_core_value_sig48DD)), this.disposeWithMe(this._commandService["onCommandExecuted"](var_core_value_sig2259 => {
      if (var_core_value_sig2259.id !== r.RichTextEditingMutation["id"]) return;
      let {
        unitId: var_core_value_sig9E2F,
        actions: var_core_value_sigD082
      } = var_core_value_sig2259.params;
      if (M(var_core_value_sigD082, "docTransform")) {
        for (let var_core_value_sig2AD8 of N(var_core_value_sigD082)) var_core_value_sig48DD.refreshConnectedConnectors({
          hostType: t.UniverInstanceType["UNIVER_DOC"],
          unitId: var_core_value_sig9E2F,
          subUnitId: var_core_value_sig9E2F,
          shapeId: var_core_value_sig2AD8
        });
      }
    }));
  }
  _registerCommands() {
    [b, h, g, C, T, S].forEach(var_core_value_sigDBB7 => this.disposeWithMe(this._commandService["registerCommand"](var_core_value_sigDBB7)));
  }
};
j = f([d(0, t.ICommandService), d(1, e.IShapeHostAdapterRegistry), d(2, n.IDocDrawingAdapterService), d(3, (0, t.Inject)(D))], j);
function M(var_core_value_sigE2BF, var_core_value_sigB8C7) {
  return Array.isArray(var_core_value_sigE2BF) && var_core_value_sigE2BF.some(var_core_value_sig5E6A => var_core_value_sig5E6A === var_core_value_sigB8C7 || Array.isArray(var_core_value_sig5E6A) && M(var_core_value_sig5E6A, var_core_value_sigB8C7));
}
function N(var_core_value_sigA56E, var_core_value_sig1998 = new Set()) {
  return t.JSONX["isNoop"](var_core_value_sigA56E) || !Array.isArray(var_core_value_sigA56E) ? var_core_value_sig1998 : var_core_value_sigA56E[0] === "drawings" ? (typeof var_core_value_sigA56E[1] == "string" ? var_core_value_sig1998.add(var_core_value_sigA56E[1]) : var_core_value_sigA56E.slice(1).forEach(var_core_value_sigB7FC => {
    Array.isArray(var_core_value_sigB7FC) && typeof var_core_value_sigB7FC[0] == "string" && var_core_value_sig1998.add(var_core_value_sigB7FC[0]);
  }), var_core_value_sig1998) : (var_core_value_sigA56E.forEach(var_core_value_sig9CD9 => {
    Array.isArray(var_core_value_sig9CD9) && N(var_core_value_sig9CD9, var_core_value_sig1998);
  }), var_core_value_sig1998);
}
let P = class extends t.Plugin {
  constructor(var_core_value_sigFD0C = A, var_core_value_sig849B, var_core_value_sig5F1A) {
    super(), this._config = var_core_value_sigFD0C, this._injector = var_core_value_sig849B, this._configService = var_core_value_sig5F1A;
    let {
      ...var_core_value_sigB455
    } = (0, t.merge)({}, A, this._config);
    this._configService["setConfig"]("docs-shape.config", var_core_value_sigB455);
  }
  onStarting() {
    [[m], [D], [j]].forEach(var_core_value_sigD0A8 => this._injector["add"](var_core_value_sigD0A8)), (0, t.touchDependencies)(this._injector, [[m], [j]]);
  }
};
l(P, "type", t.UniverInstanceType["UNIVER_DOC"]), l(P, "pluginName", "DOC_SHAPE_PLUGIN"), l(P, "packageName", O), l(P, "version", k), P = f([(0, t.DependentOn)(i.UniverLicensePlugin, n.UniverDocsDrawingPlugin, e.UniverShapePlugin), d(1, (0, t.Inject)(t.Injector)), d(2, t.IConfigService)], P), exports.DEFAULT_DOC_SHAPE_HEIGHT = 96, exports.DEFAULT_DOC_SHAPE_WIDTH = 160, exports.DOCS_SHAPE_PLUGIN = p, exports.DocShapeAnchorPosition = a, Object.defineProperty(exports, "DocShapeHostAdapter", {
  enumerable: true,
  get: function () {
    return D;
  }
}), Object.defineProperty(exports, "DocsShapeService", {
  enumerable: true,
  get: function () {
    return m;
  }
}), exports.InsertDocShapeCommand = b, exports.InsertDocShapeMutation = h, Object.defineProperty(exports, "UniverDocsShapePlugin", {
  enumerable: true,
  get: function () {
    return P;
  }
}), exports.UpdateDocDrawingMetadataCommand = S, exports.UpdateDocShapeDataCommand = T, exports.UpdateDocShapeDataMutation = C;
