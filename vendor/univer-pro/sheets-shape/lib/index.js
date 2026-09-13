import { IShapeHostAdapterRegistry as var_core_value_sig8EAE, ShapeModel as var_core_value_sig1CDD, UniverShapePlugin as var_core_value_sig0DB1, buildConnectorEndpointUpdate as var_core_value_sig68A2, canApplyShapeFormulaLastValue as var_core_value_sigCC17, computeConnectorRouteLayout as var_core_value_sig32AE, createDefaultInsertedShapeData as var_core_value_sigC753, createFreeConnectorPointInfo as var_core_value_sigFFD1, createUniqueShapeName as var_core_value_sig81AE, getBasicShapeRotateBound as var_core_value_sigF79F, isConnectorShape as var_core_value_sig0E54, resolveConnectorRoutePoints as var_core_value_sig3B17, resolveShapeConnectionPoint as var_core_value_sig6C4A, routeConnectorLineShape as var_core_value_sig73D9 } from "@univerjs-pro/engine-shape";
import { ArrangeTypeEnum as var_core_value_sigEAF8, CommandType as var_core_value_sig0455, DependentOn as var_core_value_sig737C, Disposable as var_core_value_sig5AF5, DrawingTypeEnum as var_core_value_sig9DE4, ICommandService as var_core_value_sig77FA, IConfigService as var_core_value_sigA4A7, IResourceManagerService as var_core_value_sigA4DF, IUndoRedoService as var_core_value_sigCC9D, IUniverInstanceService as var_core_value_sig90F5, Inject as var_core_value_sigD2BA, Injector as var_core_value_sigCD3A, Plugin as var_core_value_sig519D, Tools as var_core_value_sigC7E7, UniverInstanceType as var_core_value_sig6E1C, generateRandomId as var_core_value_sigFABC, merge as var_core_value_sig413D, sequenceExecute as var_core_value_sig5BCE, touchDependencies as var_core_value_sig8EF0 } from "@univerjs/core";
import { SheetInterceptorService as var_core_value_sig78AC, SheetSkeletonService as var_core_value_sig4CEF, UniverSheetsPlugin as var_core_value_sigD57D, getSheetCommandTarget as var_core_value_sig2CC7 } from "@univerjs/sheets";
import { ClearSheetDrawingTransformerOperation as var_core_value_sig4784, DrawingApplyType as var_core_value_sigC39E, ISheetDrawingService as var_core_value_sig16C7, InsertSheetDrawingCommand as var_core_value_sig7481, RemoveSheetDrawingCommand as var_core_value_sig08A3, SetDrawingApplyMutation as var_core_value_sig77D8, SetDrawingArrangeCommand as var_core_value_sig78A3, SetSheetDrawingCommand as var_core_value_sig649B, SheetDrawingAnchorType as var_core_value_sig6256, SheetDrawingTransformPlanService as var_core_value_sigE7A6, UniverSheetsDrawingPlugin as var_core_value_sigB505, transformToAxisAlignPosition as var_core_value_sig7428, transformToDrawingPosition as var_core_value_sig1DCE } from "@univerjs/sheets-drawing";
import { UniverLicensePlugin as var_core_value_sig0567 } from "@univerjs-pro/license";
import { IDrawingManagerService as var_core_value_sigA7F3, UniverDrawingPlugin as var_core_value_sigEACD } from "@univerjs/drawing";
const re = 200,
  ie = 200;
function ae(var_core_value_sig6C7E) {
  "@babel/helpers - typeof";

  return ae = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sig3607) {
    return typeof var_core_value_sig3607;
  } : function (var_core_value_sigB512) {
    return var_core_value_sigB512 && typeof Symbol == "function" && var_core_value_sigB512.constructor === Symbol && var_core_value_sigB512 !== Symbol.prototype ? "symbol" : typeof var_core_value_sigB512;
  }, ae(var_core_value_sig6C7E);
}
function oe(var_core_value_sig68BE, var_core_value_sig04C6) {
  if (ae(var_core_value_sig68BE) != "object" || !var_core_value_sig68BE) return var_core_value_sig68BE;
  var var_core_value_sigCA05 = var_core_value_sig68BE[Symbol.toPrimitive];
  if (var_core_value_sigCA05 !== undefined) {
    var var_core_value_sig2F2B = var_core_value_sigCA05.call(var_core_value_sig68BE, var_core_value_sig04C6 || "default");
    if (ae(var_core_value_sig2F2B) != "object") return var_core_value_sig2F2B;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sig04C6 === "string" ? String : Number)(var_core_value_sig68BE);
}
function se(var_core_value_sig70AF) {
  var var_core_value_sigD04E = oe(var_core_value_sig70AF, "string");
  return ae(var_core_value_sigD04E) == "symbol" ? var_core_value_sigD04E : var_core_value_sigD04E + "";
}
function X(var_core_value_sigB99B, var_core_value_sig5A75, var_core_value_sig7BAF) {
  return (var_core_value_sig5A75 = se(var_core_value_sig5A75)) in var_core_value_sigB99B ? Object.defineProperty(var_core_value_sigB99B, var_core_value_sig5A75, {
    value: var_core_value_sig7BAF,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sigB99B[var_core_value_sig5A75] = var_core_value_sig7BAF, var_core_value_sigB99B;
}
var ce = class extends var_core_value_sig5AF5 {
  constructor() {
    super(), X(this, "_shapes", new Map()), X(this, "_linesIds", new Set()), X(this, "_groupIds", new Set());
  }
  addShape(var_core_value_sigF2E6, var_core_value_sig34C8, var_core_value_sigB744, var_core_value_sigEAE2) {
    let var_core_value_sigE68A = new var_core_value_sig1CDD(var_core_value_sigF2E6, var_core_value_sig34C8, var_core_value_sigB744, var_core_value_sigEAE2);
    return this._shapes["set"](var_core_value_sig34C8, var_core_value_sigE68A), var_core_value_sig0E54(var_core_value_sigF2E6) && this._linesIds["add"](var_core_value_sig34C8), var_core_value_sigE68A;
  }
  getBasicShapeRelation(var_core_value_sig3E68) {
    let var_core_value_sigF4C5 = [];
    for (let var_core_value_sig5B67 of this._linesIds) {
      let var_core_value_sig284F = this._shapes["get"](var_core_value_sig5B67);
      if (var_core_value_sig284F) {
        let var_core_value_sig1A0F = var_core_value_sig284F.getShapeRelation();
        if (var_core_value_sig1A0F) {
          var var_core_value_sig5410, var_core_value_sig492F;
          ((var_core_value_sig5410 = var_core_value_sig1A0F.from) == null ? undefined : var_core_value_sig5410.shapeId) === var_core_value_sig3E68 && var_core_value_sigF4C5.push({
            ...var_core_value_sig1A0F.from,
            lineShapeId: var_core_value_sig5B67,
            isFrom: true
          }), ((var_core_value_sig492F = var_core_value_sig1A0F.to) == null ? undefined : var_core_value_sig492F.shapeId) === var_core_value_sig3E68 && var_core_value_sigF4C5.push({
            ...var_core_value_sig1A0F.to,
            lineShapeId: var_core_value_sig5B67,
            isFrom: false
          });
        }
      }
    }
    return var_core_value_sigF4C5;
  }
  getLineShapeRelation(var_core_value_sig8EA0) {
    let var_core_value_sigA6F6 = this._shapes["get"](var_core_value_sig8EA0);
    if (var_core_value_sigA6F6) return var_core_value_sigA6F6.getShapeRelation();
  }
  getShapeType(var_core_value_sigCDDA) {
    let var_core_value_sigE243 = this._shapes["get"](var_core_value_sigCDDA);
    if (var_core_value_sigE243) return var_core_value_sigE243.getShapeType();
  }
  hasShape(var_core_value_sig74A8) {
    return this._shapes["has"](var_core_value_sig74A8);
  }
  getShapeDisplayNames() {
    return Array.from(this._shapes["values"]()).map(var_core_value_sig1758 => var_core_value_sig1758.getName() || var_core_value_sig1758.getId());
  }
  removeShape(var_core_value_sig21B2) {
    let var_core_value_sigDE08 = this._shapes["get"](var_core_value_sig21B2);
    var_core_value_sigDE08 && (var_core_value_sig0E54(var_core_value_sigDE08.getShapeType()) && this._linesIds["delete"](var_core_value_sig21B2), this._shapes["delete"](var_core_value_sig21B2));
  }
  toJSON() {
    let var_core_value_sigACCB = [];
    return this._shapes["forEach"](var_core_value_sig4805 => {
      var_core_value_sigACCB.push(var_core_value_sig4805.toJSON());
    }), var_core_value_sigACCB;
  }
  fromJSON(var_core_value_sig7F33) {
    for (let var_core_value_sigE67E of var_core_value_sig7F33) {
      let {
          id: var_core_value_sigE154,
          shapeType: var_core_value_sig4632,
          name: var_core_value_sig12F2
        } = var_core_value_sigE67E,
        var_core_value_sig2259 = this.addShape(var_core_value_sig4632, var_core_value_sigE154, var_core_value_sigE67E.shapeData, var_core_value_sig12F2);
      var_core_value_sig2259 && var_core_value_sig2259.isLineShape() && this._linesIds["add"](var_core_value_sigE154);
    }
  }
  dispose() {
    this._disposed || (this._shapes["forEach"](var_core_value_sig2902 => {
      var_core_value_sig2902.dispose();
    }), this._shapes["clear"](), this._linesIds["clear"](), this._groupIds["clear"](), super.dispose());
  }
};
function Z(var_core_value_sig8F69, var_core_value_sig6884) {
  return function (var_core_value_sig0C53, var_core_value_sigEA04) {
    var_core_value_sig6884(var_core_value_sig0C53, var_core_value_sigEA04, var_core_value_sig8F69);
  };
}
function le(var_core_value_sig066E, var_core_value_sig9B0D, var_core_value_sig3D2C, var_core_value_sigC56D) {
  var var_core_value_sig3A17 = arguments.length,
    var_core_value_sig938F = var_core_value_sig3A17 < 3 ? var_core_value_sig9B0D : var_core_value_sigC56D === null ? var_core_value_sigC56D = Object.getOwnPropertyDescriptor(var_core_value_sig9B0D, var_core_value_sig3D2C) : var_core_value_sigC56D,
    var_core_value_sigD948;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sig938F = Reflect.decorate(var_core_value_sig066E, var_core_value_sig9B0D, var_core_value_sig3D2C, var_core_value_sigC56D);else {
    for (var var_core_value_sigBE5E = var_core_value_sig066E.length - 1; var_core_value_sigBE5E >= 0; var_core_value_sigBE5E--) (var_core_value_sigD948 = var_core_value_sig066E[var_core_value_sigBE5E]) && (var_core_value_sig938F = (var_core_value_sig3A17 < 3 ? var_core_value_sigD948(var_core_value_sig938F) : var_core_value_sig3A17 > 3 ? var_core_value_sigD948(var_core_value_sig9B0D, var_core_value_sig3D2C, var_core_value_sig938F) : var_core_value_sigD948(var_core_value_sig9B0D, var_core_value_sig3D2C)) || var_core_value_sig938F);
  }
  return var_core_value_sig3A17 > 3 && var_core_value_sig938F && Object.defineProperty(var_core_value_sig9B0D, var_core_value_sig3D2C, var_core_value_sig938F), var_core_value_sig938F;
}
let Q = class extends var_core_value_sig5AF5 {
  constructor(var_core_value_sig7A62) {
    super(), this._resourcesManagerService = var_core_value_sig7A62, X(this, "_shapeModelManagerMap", new Map()), this._initSnapshot();
  }
  _ensureShapeModelManager(var_core_value_sig8109, var_core_value_sig7565) {
    let var_core_value_sigD4FB = this._shapeModelManagerMap["get"](var_core_value_sig8109);
    var_core_value_sigD4FB || (var_core_value_sigD4FB = new Map(), this._shapeModelManagerMap["set"](var_core_value_sig8109, var_core_value_sigD4FB));
    let var_core_value_sig3E71 = var_core_value_sigD4FB.get(var_core_value_sig7565);
    return var_core_value_sig3E71 || (var_core_value_sig3E71 = new ce(), var_core_value_sigD4FB.set(var_core_value_sig7565, var_core_value_sig3E71)), var_core_value_sig3E71;
  }
  insertShape(var_core_value_sig01B3, var_core_value_sig7442, var_core_value_sigDF87, var_core_value_sig9EE0, var_core_value_sigF051, var_core_value_sig0B45) {
    this._ensureShapeModelManager(var_core_value_sig01B3, var_core_value_sig7442).addShape(var_core_value_sigDF87, var_core_value_sig9EE0, var_core_value_sigF051, var_core_value_sig0B45);
  }
  removeShape(var_core_value_sig36F8, var_core_value_sig03E1, var_core_value_sigBB57) {
    this._ensureShapeModelManager(var_core_value_sig36F8, var_core_value_sig03E1).removeShape(var_core_value_sigBB57);
  }
  getBasicShapeType(var_core_value_sig7C4A, var_core_value_sigE799, var_core_value_sigB601) {
    return this._ensureShapeModelManager(var_core_value_sig7C4A, var_core_value_sigE799).getShapeType(var_core_value_sigB601);
  }
  getShapeType(var_core_value_sig8B71, var_core_value_sigAEFB, var_core_value_sig826B) {
    return this._ensureShapeModelManager(var_core_value_sig8B71, var_core_value_sigAEFB).getShapeType(var_core_value_sig826B);
  }
  hasShape(var_core_value_sigCF89, var_core_value_sig00CB, var_core_value_sig77EE) {
    return this._ensureShapeModelManager(var_core_value_sigCF89, var_core_value_sig00CB).hasShape(var_core_value_sig77EE);
  }
  getShapeTypeById(var_core_value_sig9F76, var_core_value_sigB008, var_core_value_sig8721) {
    return this._ensureShapeModelManager(var_core_value_sig9F76, var_core_value_sigB008).getShapeType(var_core_value_sig8721);
  }
  getShapeDataById(var_core_value_sig08BA, var_core_value_sigDBB5, var_core_value_sigCFAC) {
    let var_core_value_sig237B = this._ensureShapeModelManager(var_core_value_sig08BA, var_core_value_sigDBB5);
    if (!var_core_value_sig237B.getShapeType(var_core_value_sigCFAC)) return;
    let var_core_value_sigFEAB = var_core_value_sig237B._shapes["get"](var_core_value_sigCFAC);
    if (var_core_value_sigFEAB) return var_core_value_sigFEAB.getShapeData();
  }
  getShapeDisplayNames(var_core_value_sigE347, var_core_value_sig3C5B) {
    return this._ensureShapeModelManager(var_core_value_sigE347, var_core_value_sig3C5B).getShapeDisplayNames();
  }
  getShapeModel(var_core_value_sig200B, var_core_value_sig3863, var_core_value_sigC97C) {
    return this._ensureShapeModelManager(var_core_value_sig200B, var_core_value_sig3863)._shapes["get"](var_core_value_sigC97C);
  }
  getBasicShapeRelation(var_core_value_sigC4B1, var_core_value_sig1BD9, var_core_value_sigE43E) {
    return this._ensureShapeModelManager(var_core_value_sigC4B1, var_core_value_sig1BD9).getBasicShapeRelation(var_core_value_sigE43E);
  }
  getLineShapeRelation(var_core_value_sigA937, var_core_value_sigCAD5, var_core_value_sigE503) {
    let var_core_value_sig48DD = this._ensureShapeModelManager(var_core_value_sigA937, var_core_value_sigCAD5)._shapes["get"](var_core_value_sigE503);
    if (var_core_value_sig48DD) return var_core_value_sig48DD.getShapeRelation();
  }
  setShapeType() {}
  _serializeShapeForUnit(var_core_value_sig5E6A) {
    let var_core_value_sigB7FC = {},
      var_core_value_sig9CD9 = this._shapeModelManagerMap["get"](var_core_value_sig5E6A);
    return var_core_value_sig9CD9 && var_core_value_sig9CD9.forEach((var_core_value_sig9989, var_core_value_sig698E) => {
      let var_core_value_sig2809 = var_core_value_sig9989.toJSON();
      var_core_value_sig2809.length > 0 && (var_core_value_sigB7FC[var_core_value_sig698E] = var_core_value_sig2809);
    }), JSON.stringify(var_core_value_sigB7FC);
  }
  _deserializeShapeForUnit(var_core_value_sigFD0C, var_core_value_sig849B) {
    Object.keys(var_core_value_sig849B).forEach(var_core_value_sig2DAB => {
      this._ensureShapeModelManager(var_core_value_sigFD0C, var_core_value_sig2DAB).fromJSON(var_core_value_sig849B[var_core_value_sig2DAB]);
    });
  }
  toJSON() {
    let var_core_value_sig5F1A = {};
    return this._shapeModelManagerMap["forEach"]((var_core_value_sig877E, var_core_value_sig20C8) => {
      var_core_value_sig5F1A[var_core_value_sig20C8] = {}, var_core_value_sig877E.forEach((var_core_value_sig9E2F, var_core_value_sigD082) => {
        var_core_value_sig5F1A[var_core_value_sig20C8][var_core_value_sigD082] = var_core_value_sig9E2F.toJSON();
      });
    }), var_core_value_sig5F1A;
  }
  fromJSON(var_core_value_sigB455) {
    Object.keys(var_core_value_sigB455).forEach(var_core_value_sigE9A7 => {
      let var_core_value_sigBECE = var_core_value_sigB455[var_core_value_sigE9A7];
      Object.keys(var_core_value_sigBECE).forEach(var_core_value_sigDBB7 => {
        this._ensureShapeModelManager(var_core_value_sigE9A7, var_core_value_sigDBB7).fromJSON(var_core_value_sigBECE[var_core_value_sigDBB7]);
      });
    });
  }
  _initSnapshot() {
    this._resourcesManagerService["registerPluginResource"]({
      pluginName: "SHEET_SHAPE_PLUGIN",
      businesses: [var_core_value_sig6E1C.UNIVER_SHEET],
      toJson: var_core_value_sig1B22 => this._serializeShapeForUnit(var_core_value_sig1B22),
      parseJson: var_core_value_sig7F72 => JSON.parse(var_core_value_sig7F72),
      onLoad: (var_core_value_sig7B2A, var_core_value_sig06CD) => {
        this._deserializeShapeForUnit(var_core_value_sig7B2A, var_core_value_sig06CD);
      },
      onUnLoad: var_core_value_sigA5F1 => {
        let var_core_value_sig97A2 = this._shapeModelManagerMap["get"](var_core_value_sigA5F1);
        var_core_value_sig97A2 && (var_core_value_sig97A2.forEach(var_core_value_sigD0A8 => {
          var_core_value_sigD0A8.dispose();
        }), this._shapeModelManagerMap["delete"](var_core_value_sigA5F1));
      }
    });
  }
  dispose() {
    this._shapeModelManagerMap["forEach"](var_core_value_sig07E9 => {
      var_core_value_sig07E9.forEach(var_core_value_sigF4B9 => {
        var_core_value_sigF4B9.dispose();
      });
    });
  }
};
Q = le([Z(0, var_core_value_sigA4DF)], Q);
const ue = {
    id: "sheet.mutation.insert-shape",
    type: var_core_value_sig0455.MUTATION,
    handler: (var_core_value_sig0281, var_core_value_sigED71) => {
      let {
        unitId: var_core_value_sig281C,
        subUnitId: var_core_value_sig3C92,
        shapeType: var_core_value_sigB16B,
        shapeId: var_core_value_sig585D,
        shapeName: var_core_value_sigE722,
        shapeData: var_core_value_sig062A
      } = var_core_value_sigED71;
      return var_core_value_sig0281.get(Q).insertShape(var_core_value_sig281C, var_core_value_sig3C92, var_core_value_sigB16B, var_core_value_sig585D, var_core_value_sigC7E7.deepClone(var_core_value_sig062A), var_core_value_sigE722), true;
    }
  },
  de = {
    id: "sheet.mutation.remove-shape",
    type: var_core_value_sig0455.MUTATION,
    handler: (var_core_value_sig050A, var_core_value_sig8B32) => {
      let {
        unitId: var_core_value_sig870F,
        subUnitId: var_core_value_sigB683,
        shapeId: var_core_value_sig26EC
      } = var_core_value_sig8B32;
      return var_core_value_sig050A.get(Q).removeShape(var_core_value_sig870F, var_core_value_sigB683, var_core_value_sig26EC), true;
    }
  },
  fe = {
    type: var_core_value_sig0455.COMMAND,
    id: "sheet.command.insert-shape",
    handler: (var_core_value_sigEEDB, var_core_value_sig36E7) => {
      let var_core_value_sig6A78 = var_core_value_sig2CC7(var_core_value_sigEEDB.get(var_core_value_sig90F5), var_core_value_sig36E7);
      if (!var_core_value_sig6A78) return false;
      let var_core_value_sigF7EF = var_core_value_sigEEDB.get(var_core_value_sig4CEF),
        {
          unitId: var_core_value_sig27F9,
          subUnitId: var_core_value_sig393E
        } = var_core_value_sig6A78,
        var_core_value_sigB609 = var_core_value_sigF7EF.ensureSkeleton(var_core_value_sig27F9, var_core_value_sig393E);
      if (!var_core_value_sigB609) return false;
      let var_core_value_sig390D = var_core_value_sigEEDB.get(var_core_value_sig77FA),
        var_core_value_sigC928 = var_core_value_sigEEDB.get(var_core_value_sigCC9D),
        var_core_value_sig39B7 = var_core_value_sigEEDB.get(var_core_value_sig78AC),
        var_core_value_sig18E0 = var_core_value_sigEEDB.get(var_core_value_sig16C7),
        var_core_value_sigE161 = var_core_value_sigEEDB.get(Q),
        {
          shapeType: var_core_value_sigBDEE
        } = var_core_value_sig36E7,
        var_core_value_sig1F40 = var_core_value_sig36E7.shapeData ?? var_core_value_sigC753(var_core_value_sigBDEE),
        var_core_value_sig3FC7 = var_core_value_sig36E7.shapeId || var_core_value_sigFABC(),
        var_core_value_sig1E1B = {
          unitId: var_core_value_sig27F9,
          subUnitId: var_core_value_sig393E,
          shapeId: var_core_value_sig3FC7,
          shapeName: var_core_value_sig36E7.shapeName ?? var_core_value_sig81AE(var_core_value_sigBDEE, var_core_value_sigE161.getShapeDisplayNames(var_core_value_sig27F9, var_core_value_sig393E)),
          shapeType: var_core_value_sigBDEE,
          shapeData: var_core_value_sig1F40
        },
        var_core_value_sig3B10 = var_core_value_sig36E7.width || 200,
        var_core_value_sig89E6 = var_core_value_sig36E7.height || 200,
        var_core_value_sig4743 = 0,
        var_core_value_sigEB6A = 0;
      if (var_core_value_sig36E7.position) {
        let {
          x: var_core_value_sig5241,
          y: var_core_value_sigC6E5
        } = var_core_value_sig36E7.position;
        var_core_value_sig4743 = var_core_value_sig5241, var_core_value_sigEB6A = var_core_value_sigC6E5;
      } else {
        if (var_core_value_sig36E7.range) {
          let {
              startRow: var_core_value_sig4F59,
              startColumn: var_core_value_sigF564
            } = var_core_value_sig36E7.range,
            var_core_value_sig8CFA = var_core_value_sigB609.getCellWithCoordByIndex(var_core_value_sig4F59, var_core_value_sigF564);
          var_core_value_sig4743 = var_core_value_sig8CFA.startX + 10, var_core_value_sigEB6A = var_core_value_sig8CFA.startY + 10;
        }
      }
      let var_core_value_sig3D46 = {
          left: var_core_value_sig4743,
          top: var_core_value_sigEB6A,
          width: var_core_value_sig3B10,
          height: var_core_value_sig89E6,
          angle: var_core_value_sig36E7.rotation ?? 0,
          flipX: var_core_value_sig36E7.flipX ?? false,
          flipY: var_core_value_sig36E7.flipY ?? false
        },
        var_core_value_sigCC93 = var_core_value_sig1DCE(var_core_value_sig3D46, var_core_value_sigB609),
        var_core_value_sig5964 = var_core_value_sig7428(var_core_value_sig3D46, var_core_value_sigB609),
        var_core_value_sig808B = {
          unitId: var_core_value_sig27F9,
          subUnitId: var_core_value_sig393E,
          drawingId: var_core_value_sig3FC7,
          drawingType: var_core_value_sig9DE4.DRAWING_SHAPE,
          anchorType: var_core_value_sig6256.Both,
          name: var_core_value_sig36E7.name,
          description: var_core_value_sig36E7.description,
          sheetTransform: var_core_value_sigCC93,
          transform: var_core_value_sig3D46,
          data: {
            shapeType: var_core_value_sigBDEE,
            shapeData: var_core_value_sig1F40
          },
          axisAlignSheetTransform: var_core_value_sig5964,
          allowTransform: true,
          hidden: var_core_value_sig36E7.visible === false,
          selectable: var_core_value_sig36E7.selectable ?? true
        };
      var_core_value_sig0E54(var_core_value_sigBDEE) && (var_core_value_sig808B.data["fill"] = false, var_core_value_sig808B.data["rotateEnabled"] = false, var_core_value_sig808B.data["resizeEnabled"] = false, var_core_value_sig808B.data["borderEnabled"] = false, var_core_value_sig808B.transform["rotateEnabled"] = false, var_core_value_sig808B.transform["resizeEnabled"] = false, var_core_value_sig808B.transform["borderEnabled"] = false);
      let {
          undo: var_core_value_sig2A26,
          redo: var_core_value_sig1179,
          objects: var_core_value_sigEA92
        } = var_core_value_sig18E0.getBatchAddOp([var_core_value_sig808B]),
        var_core_value_sig8FD9 = var_core_value_sig39B7.onCommandExecute({
          id: var_core_value_sig7481.id,
          params: {
            unitId: var_core_value_sig27F9,
            drawings: [var_core_value_sig808B]
          }
        }),
        var_core_value_sig1AE5 = [...(var_core_value_sig8FD9.preRedos ?? []), {
          id: var_core_value_sig77D8.id,
          params: {
            unitId: var_core_value_sig27F9,
            subUnitId: var_core_value_sig393E,
            op: var_core_value_sig1179,
            objects: var_core_value_sigEA92,
            type: var_core_value_sigC39E.INSERT
          }
        }, {
          id: var_core_value_sig4784.id,
          params: [var_core_value_sig27F9]
        }, ...var_core_value_sig8FD9.redos, {
          id: ue.id,
          params: var_core_value_sig1E1B
        }],
        var_core_value_sig7100 = [{
          id: de.id,
          params: {
            unitId: var_core_value_sig27F9,
            subUnitId: var_core_value_sig393E,
            shapeId: var_core_value_sig3FC7
          }
        }, ...(var_core_value_sig8FD9.preUndos ?? []), {
          id: var_core_value_sig77D8.id,
          params: {
            unitId: var_core_value_sig27F9,
            subUnitId: var_core_value_sig393E,
            op: var_core_value_sig2A26,
            objects: var_core_value_sigEA92,
            type: var_core_value_sigC39E.REMOVE
          }
        }, {
          id: var_core_value_sig4784.id,
          params: [var_core_value_sig27F9]
        }, ...var_core_value_sig8FD9.undos];
      return var_core_value_sig5BCE(var_core_value_sig1AE5, var_core_value_sig390D).result ? (var_core_value_sigC928.pushUndoRedo({
        unitID: var_core_value_sig27F9,
        undoMutations: var_core_value_sig7100,
        redoMutations: var_core_value_sig1AE5
      }), true) : false;
    }
  },
  $ = {
    id: "sheet.mutation.update-shape-data",
    type: var_core_value_sig0455.MUTATION,
    handler: (var_core_value_sigA19A, var_core_value_sigD3F5) => {
      let {
          unitId: var_core_value_sig3082,
          subUnitId: var_core_value_sigF5D1,
          shapeType: var_core_value_sig8775,
          shapeId: var_core_value_sig481B,
          shapeData: var_core_value_sig13D7,
          replace: var_core_value_sig90C0,
          formulaLastValueGuard: var_core_value_sigF1B2
        } = var_core_value_sigD3F5,
        var_core_value_sigC2BB = var_core_value_sigA19A.get(Q).getShapeModel(var_core_value_sig3082, var_core_value_sigF5D1, var_core_value_sig481B);
      if (var_core_value_sigC2BB) {
        var var_core_value_sigD9DB;
        if (!var_core_value_sigCC17(var_core_value_sigA19A, {
          hostType: var_core_value_sig6E1C.UNIVER_SHEET,
          unitId: var_core_value_sig3082,
          subUnitId: var_core_value_sigF5D1,
          shapeId: var_core_value_sig481B
        }, (var_core_value_sigD9DB = var_core_value_sigC2BB.getShapeData().formulaBinding) == null ? undefined : var_core_value_sigD9DB.formula, var_core_value_sigF1B2)) return true;
        var_core_value_sig8775 !== undefined && var_core_value_sigC2BB.setShapeType(var_core_value_sig8775), var_core_value_sig13D7 && (var_core_value_sigC2BB == null || var_core_value_sigC2BB.setShapeData(var_core_value_sigC7E7.deepClone(var_core_value_sig13D7), !var_core_value_sig90C0));
      }
      return true;
    }
  },
  pe = {
    type: var_core_value_sig0455.COMMAND,
    id: "sheet.command.set-shape-drawing-data",
    handler: (var_core_value_sigA363, var_core_value_sigFBA5) => {
      let var_core_value_sigAC47 = var_core_value_sig2CC7(var_core_value_sigA363.get(var_core_value_sig90F5), var_core_value_sigFBA5);
      if (!var_core_value_sigAC47) return false;
      let var_core_value_sigA06F = var_core_value_sigA363.get(var_core_value_sig4CEF),
        {
          unitId: var_core_value_sig770E,
          subUnitId: var_core_value_sig4654
        } = var_core_value_sigAC47,
        var_core_value_sigB26B = var_core_value_sigA06F.ensureSkeleton(var_core_value_sig770E, var_core_value_sig4654);
      if (!var_core_value_sigB26B) return false;
      let var_core_value_sig019B = var_core_value_sigA363.get(Q),
        {
          shapeId: var_core_value_sigC6BC,
          shapeType: var_core_value_sig8EC2,
          shapeData: var_core_value_sigA8C3,
          position: var_core_value_sig5276,
          width: var_core_value_sig031B,
          height: var_core_value_sig9DC0
        } = var_core_value_sigFBA5,
        var_core_value_sig95F0 = var_core_value_sig019B.getShapeModel(var_core_value_sig770E, var_core_value_sig4654, var_core_value_sigC6BC);
      if (!var_core_value_sig95F0) return false;
      let var_core_value_sig9CCB = var_core_value_sigA363.get(var_core_value_sig77FA),
        var_core_value_sigE718 = var_core_value_sigA363.get(var_core_value_sigCC9D),
        var_core_value_sigAEC8 = var_core_value_sigA363.get(var_core_value_sig78AC),
        var_core_value_sigB977 = var_core_value_sigA363.get(var_core_value_sig16C7),
        var_core_value_sig2949 = {
          unitId: var_core_value_sig770E,
          subUnitId: var_core_value_sig4654,
          shapeId: var_core_value_sigC6BC,
          shapeType: var_core_value_sig8EC2,
          shapeData: var_core_value_sigA8C3,
          replace: true
        },
        var_core_value_sig308A = var_core_value_sig95F0.getShapeType(),
        var_core_value_sig528D = var_core_value_sig95F0.getShapeData(),
        {
          x: var_core_value_sigA309,
          y: var_core_value_sig9E20
        } = var_core_value_sig5276,
        var_core_value_sig26BB = {
          left: var_core_value_sigA309,
          top: var_core_value_sig9E20,
          width: var_core_value_sig031B,
          height: var_core_value_sig9DC0,
          angle: var_core_value_sigFBA5.rotation ?? 0,
          flipX: var_core_value_sigFBA5.flipX ?? false,
          flipY: var_core_value_sigFBA5.flipY ?? false
        },
        var_core_value_sig19B4 = var_core_value_sig1DCE(var_core_value_sig26BB, var_core_value_sigB26B),
        var_core_value_sig218A = var_core_value_sig7428(var_core_value_sig26BB, var_core_value_sigB26B),
        var_core_value_sig14CB = {
          unitId: var_core_value_sig770E,
          subUnitId: var_core_value_sig4654,
          drawingId: var_core_value_sigC6BC,
          drawingType: var_core_value_sig9DE4.DRAWING_SHAPE,
          name: var_core_value_sigFBA5.name,
          description: var_core_value_sigFBA5.description,
          sheetTransform: var_core_value_sig19B4,
          transform: var_core_value_sig26BB,
          data: {
            shapeType: var_core_value_sig8EC2,
            shapeData: var_core_value_sigA8C3
          },
          axisAlignSheetTransform: var_core_value_sig218A,
          allowTransform: true,
          hidden: !var_core_value_sigFBA5.visible,
          selectable: var_core_value_sigFBA5.selectable
        };
      var_core_value_sig0E54(var_core_value_sig8EC2) && (var_core_value_sig14CB.data["fill"] = false, var_core_value_sig14CB.data["rotateEnabled"] = false, var_core_value_sig14CB.data["resizeEnabled"] = false, var_core_value_sig14CB.data["borderEnabled"] = false, var_core_value_sig14CB.transform["rotateEnabled"] = false, var_core_value_sig14CB.transform["resizeEnabled"] = false, var_core_value_sig14CB.transform["borderEnabled"] = false);
      let {
          undo: var_core_value_sigFDEE,
          redo: var_core_value_sigA676,
          objects: var_core_value_sigC27E
        } = var_core_value_sigB977.getBatchUpdateOp([var_core_value_sig14CB]),
        var_core_value_sigA70D = var_core_value_sigAEC8.onCommandExecute({
          id: var_core_value_sig649B.id,
          params: {
            unitId: var_core_value_sig770E,
            drawings: [var_core_value_sig14CB]
          }
        }),
        var_core_value_sigCE10 = [...(var_core_value_sigA70D.preRedos ?? []), {
          id: var_core_value_sig77D8.id,
          params: {
            unitId: var_core_value_sig770E,
            subUnitId: var_core_value_sig4654,
            op: var_core_value_sigA676,
            objects: var_core_value_sigC27E,
            type: var_core_value_sigC39E.UPDATE
          }
        }, {
          id: var_core_value_sig4784.id,
          params: [var_core_value_sig770E]
        }, ...var_core_value_sigA70D.redos, {
          id: $.id,
          params: var_core_value_sig2949
        }],
        var_core_value_sigA386 = [...(var_core_value_sigA70D.preUndos ?? []), {
          id: var_core_value_sig77D8.id,
          params: {
            unitId: var_core_value_sig770E,
            subUnitId: var_core_value_sig4654,
            op: var_core_value_sigFDEE,
            objects: var_core_value_sigC27E,
            type: var_core_value_sigC39E.UPDATE
          }
        }, {
          id: var_core_value_sig4784.id,
          params: [var_core_value_sig770E]
        }, ...var_core_value_sigA70D.undos, {
          id: $.id,
          params: {
            unitId: var_core_value_sig770E,
            subUnitId: var_core_value_sig4654,
            shapeType: var_core_value_sig308A,
            shapeId: var_core_value_sigC6BC,
            shapeData: var_core_value_sig528D,
            replace: true
          }
        }];
      return var_core_value_sig5BCE(var_core_value_sigCE10, var_core_value_sig9CCB).result ? (var_core_value_sigE718.pushUndoRedo({
        unitID: var_core_value_sig770E,
        undoMutations: var_core_value_sigA386,
        redoMutations: var_core_value_sigCE10
      }), true) : false;
    }
  },
  me = {
    type: var_core_value_sig0455.COMMAND,
    id: "sheet.command.toggle-shape-flip",
    handler: (var_core_value_sigCD82, var_core_value_sig44DD) => {
      let var_core_value_sig96FA = var_core_value_sig2CC7(var_core_value_sigCD82.get(var_core_value_sig90F5), var_core_value_sig44DD);
      if (!var_core_value_sig96FA) return false;
      let var_core_value_sigAB68 = var_core_value_sigCD82.get(var_core_value_sig4CEF),
        {
          unitId: var_core_value_sig040A,
          subUnitId: var_core_value_sig2AE0
        } = var_core_value_sig96FA,
        var_core_value_sigC349 = var_core_value_sigAB68.getSkeleton(var_core_value_sig040A, var_core_value_sig2AE0);
      if (!var_core_value_sigC349) return false;
      let var_core_value_sig9D96 = var_core_value_sigCD82.get(var_core_value_sig16C7),
        {
          shapeId: var_core_value_sig2776,
          flipH: var_core_value_sig6FB2,
          flipV: var_core_value_sigEB43
        } = var_core_value_sig44DD,
        var_core_value_sig4186 = var_core_value_sig9D96.getDrawingByParam({
          unitId: var_core_value_sig040A,
          subUnitId: var_core_value_sig2AE0,
          drawingId: var_core_value_sig2776
        });
      if (!var_core_value_sig4186) return false;
      let var_core_value_sigF963 = var_core_value_sigCD82.get(Q).getShapeModel(var_core_value_sig040A, var_core_value_sig2AE0, var_core_value_sig2776);
      if (!var_core_value_sigF963) return false;
      let var_core_value_sigB608 = var_core_value_sigCD82.get(var_core_value_sig77FA),
        var_core_value_sigF866 = var_core_value_sigCD82.get(var_core_value_sigCC9D),
        var_core_value_sig5EFB = var_core_value_sigCD82.get(var_core_value_sig78AC),
        var_core_value_sig3A85 = {
          ...var_core_value_sig4186.transform
        };
      var_core_value_sig6FB2 !== undefined && (var_core_value_sig3A85.flipX = !var_core_value_sig3A85.flipX), var_core_value_sigEB43 !== undefined && (var_core_value_sig3A85.flipY = !var_core_value_sig3A85.flipY);
      let var_core_value_sig2682 = var_core_value_sig1DCE(var_core_value_sig3A85, var_core_value_sigC349),
        var_core_value_sig4BB5 = var_core_value_sig7428(var_core_value_sig3A85, var_core_value_sigC349),
        var_core_value_sig6709 = var_core_value_sigF963.getShapeType(),
        var_core_value_sig52CA = var_core_value_sigF963.getShapeData(),
        var_core_value_sigC030 = {
          unitId: var_core_value_sig040A,
          subUnitId: var_core_value_sig2AE0,
          drawingId: var_core_value_sig2776,
          drawingType: var_core_value_sig9DE4.DRAWING_SHAPE,
          sheetTransform: var_core_value_sig2682,
          transform: var_core_value_sig3A85,
          data: {
            shapeType: var_core_value_sig6709,
            shapeData: var_core_value_sig52CA
          },
          axisAlignSheetTransform: var_core_value_sig4BB5,
          allowTransform: true
        },
        {
          undo: var_core_value_sig88F6,
          redo: var_core_value_sig37DB,
          objects: var_core_value_sig5542
        } = var_core_value_sig9D96.getBatchUpdateOp([var_core_value_sigC030]),
        var_core_value_sigE0A9 = var_core_value_sig5EFB.onCommandExecute({
          id: var_core_value_sig649B.id,
          params: {
            unitId: var_core_value_sig040A,
            drawings: [var_core_value_sigC030]
          }
        }),
        var_core_value_sigA73E = [...(var_core_value_sigE0A9.preRedos ?? []), {
          id: var_core_value_sig77D8.id,
          params: {
            unitId: var_core_value_sig040A,
            subUnitId: var_core_value_sig2AE0,
            op: var_core_value_sig37DB,
            objects: var_core_value_sig5542,
            type: var_core_value_sigC39E.UPDATE
          }
        }, {
          id: var_core_value_sig4784.id,
          params: [var_core_value_sig040A]
        }, ...var_core_value_sigE0A9.redos],
        var_core_value_sig7620 = [...(var_core_value_sigE0A9.preUndos ?? []), {
          id: var_core_value_sig77D8.id,
          params: {
            unitId: var_core_value_sig040A,
            subUnitId: var_core_value_sig2AE0,
            op: var_core_value_sig88F6,
            objects: var_core_value_sig5542,
            type: var_core_value_sigC39E.UPDATE
          }
        }, {
          id: var_core_value_sig4784.id,
          params: [var_core_value_sig040A]
        }, ...var_core_value_sigE0A9.undos];
      if (var_core_value_sig0E54(var_core_value_sig6709)) {
        let var_core_value_sigCEFB = var_core_value_sigF963.getShapeRelation();
        if (var_core_value_sigCEFB) {
          let var_core_value_sig2E11 = {
            ...var_core_value_sigCEFB
          };
          var_core_value_sig2E11.from = undefined, var_core_value_sig2E11.to = undefined, var_core_value_sigA73E.push({
            id: $.id,
            params: {
              unitId: var_core_value_sig040A,
              subUnitId: var_core_value_sig2AE0,
              shapeId: var_core_value_sig2776,
              shapeType: var_core_value_sig6709,
              shapeData: {
                relation: var_core_value_sig2E11
              }
            }
          }), var_core_value_sig7620.push({
            id: $.id,
            params: {
              unitId: var_core_value_sig040A,
              subUnitId: var_core_value_sig2AE0,
              shapeId: var_core_value_sig2776,
              shapeType: var_core_value_sig6709,
              shapeData: {
                relation: var_core_value_sigCEFB
              }
            }
          });
        }
      }
      return var_core_value_sig5BCE(var_core_value_sigA73E, var_core_value_sigB608).result ? (var_core_value_sigF866.pushUndoRedo({
        unitID: var_core_value_sig040A,
        undoMutations: var_core_value_sig7620,
        redoMutations: var_core_value_sigA73E
      }), true) : false;
    }
  },
  he = {
    type: var_core_value_sig0455.COMMAND,
    id: "sheet.command.set-shape-rotate",
    handler: (var_core_value_sigB9FC, var_core_value_sig5055) => {
      let var_core_value_sig3801 = var_core_value_sig2CC7(var_core_value_sigB9FC.get(var_core_value_sig90F5), var_core_value_sig5055);
      if (!var_core_value_sig3801) return false;
      let var_core_value_sig45F0 = var_core_value_sigB9FC.get(var_core_value_sig4CEF),
        {
          unitId: var_core_value_sigBC91,
          subUnitId: var_core_value_sigCB88
        } = var_core_value_sig3801,
        var_core_value_sig8D65 = var_core_value_sig45F0.getSkeleton(var_core_value_sigBC91, var_core_value_sigCB88);
      if (!var_core_value_sig8D65) return false;
      let var_core_value_sig8122 = var_core_value_sigB9FC.get(var_core_value_sig16C7),
        {
          shapeId: var_core_value_sigEDC6,
          rotate: var_core_value_sig611A
        } = var_core_value_sig5055,
        var_core_value_sig6BD9 = var_core_value_sig8122.getDrawingByParam({
          unitId: var_core_value_sigBC91,
          subUnitId: var_core_value_sigCB88,
          drawingId: var_core_value_sigEDC6
        });
      if (!var_core_value_sig6BD9) return false;
      let var_core_value_sig7E56 = var_core_value_sigB9FC.get(Q).getShapeModel(var_core_value_sigBC91, var_core_value_sigCB88, var_core_value_sigEDC6);
      if (!var_core_value_sig7E56) return false;
      let var_core_value_sig4161 = var_core_value_sigB9FC.get(var_core_value_sig77FA),
        var_core_value_sig7580 = var_core_value_sigB9FC.get(var_core_value_sigCC9D),
        var_core_value_sig1F18 = var_core_value_sigB9FC.get(var_core_value_sig78AC),
        var_core_value_sigD5A0 = {
          ...var_core_value_sig6BD9.transform
        };
      var_core_value_sig611A !== undefined && (var_core_value_sigD5A0.angle = (var_core_value_sigD5A0.angle || 0) + var_core_value_sig611A);
      let var_core_value_sig81B2 = var_core_value_sig1DCE(var_core_value_sigD5A0, var_core_value_sig8D65),
        var_core_value_sigA0A5 = var_core_value_sig7428(var_core_value_sigD5A0, var_core_value_sig8D65),
        var_core_value_sig10AA = var_core_value_sig7E56.getShapeType(),
        var_core_value_sigE6D0 = var_core_value_sig7E56.getShapeData(),
        var_core_value_sig8E91 = {
          unitId: var_core_value_sigBC91,
          subUnitId: var_core_value_sigCB88,
          drawingId: var_core_value_sigEDC6,
          drawingType: var_core_value_sig9DE4.DRAWING_SHAPE,
          sheetTransform: var_core_value_sig81B2,
          transform: var_core_value_sigD5A0,
          data: {
            shapeType: var_core_value_sig10AA,
            shapeData: var_core_value_sigE6D0
          },
          axisAlignSheetTransform: var_core_value_sigA0A5,
          allowTransform: true
        },
        {
          undo: var_core_value_sig00BE,
          redo: var_core_value_sig7BB5,
          objects: var_core_value_sig6AAD
        } = var_core_value_sig8122.getBatchUpdateOp([var_core_value_sig8E91]),
        var_core_value_sig1157 = var_core_value_sig1F18.onCommandExecute({
          id: var_core_value_sig649B.id,
          params: {
            unitId: var_core_value_sigBC91,
            drawings: [var_core_value_sig8E91]
          }
        }),
        var_core_value_sigA694 = [...(var_core_value_sig1157.preRedos ?? []), {
          id: var_core_value_sig77D8.id,
          params: {
            unitId: var_core_value_sigBC91,
            subUnitId: var_core_value_sigCB88,
            op: var_core_value_sig7BB5,
            objects: var_core_value_sig6AAD,
            type: var_core_value_sigC39E.UPDATE
          }
        }, {
          id: var_core_value_sig4784.id,
          params: [var_core_value_sigBC91]
        }, ...var_core_value_sig1157.redos],
        var_core_value_sig18E01 = [...(var_core_value_sig1157.preUndos ?? []), {
          id: var_core_value_sig77D8.id,
          params: {
            unitId: var_core_value_sigBC91,
            subUnitId: var_core_value_sigCB88,
            op: var_core_value_sig00BE,
            objects: var_core_value_sig6AAD,
            type: var_core_value_sigC39E.UPDATE
          }
        }, {
          id: var_core_value_sig4784.id,
          params: [var_core_value_sigBC91]
        }, ...var_core_value_sig1157.undos];
      return var_core_value_sig5BCE(var_core_value_sigA694, var_core_value_sig4161).result ? (var_core_value_sig7580.pushUndoRedo({
        unitID: var_core_value_sigBC91,
        undoMutations: var_core_value_sig18E01,
        redoMutations: var_core_value_sigA694
      }), true) : false;
    }
  },
  ge = {
    type: var_core_value_sig0455.COMMAND,
    id: "sheet.command.set-shape-text-vertical-toggle",
    handler: (var_core_value_sig0428, var_core_value_sigBE07) => {
      let var_core_value_sig555F = var_core_value_sig2CC7(var_core_value_sig0428.get(var_core_value_sig90F5), var_core_value_sigBE07);
      if (!var_core_value_sig555F) return false;
      let {
          unitId: var_core_value_sig3D6F,
          subUnitId: var_core_value_sig336C
        } = var_core_value_sig555F,
        {
          shapeId: var_core_value_sig6E68
        } = var_core_value_sigBE07,
        var_core_value_sig8DFE = var_core_value_sig0428.get(Q).getShapeModel(var_core_value_sig3D6F, var_core_value_sig336C, var_core_value_sig6E68);
      if (!var_core_value_sig8DFE) return false;
      let var_core_value_sig48EA = var_core_value_sig8DFE.getShapeTextData(),
        var_core_value_sig5E16 = (var_core_value_sig48EA == null ? undefined : var_core_value_sig48EA.isHorizontal) ?? true,
        var_core_value_sig09F3 = !var_core_value_sig5E16,
        var_core_value_sig4592 = var_core_value_sig0428.get(var_core_value_sig77FA),
        var_core_value_sigC5C4 = var_core_value_sig0428.get(var_core_value_sigCC9D),
        var_core_value_sig1617 = {
          unitId: var_core_value_sig3D6F,
          subUnitId: var_core_value_sig336C,
          shapeId: var_core_value_sig6E68,
          shapeData: {
            shapeText: {
              isHorizontal: var_core_value_sig09F3
            }
          }
        },
        var_core_value_sig4169 = {
          unitId: var_core_value_sig3D6F,
          subUnitId: var_core_value_sig336C,
          shapeId: var_core_value_sig6E68,
          shapeData: {
            shapeText: {
              isHorizontal: var_core_value_sig5E16
            }
          }
        },
        var_core_value_sig6D19 = [{
          id: $.id,
          params: var_core_value_sig1617
        }],
        var_core_value_sig279C = [{
          id: $.id,
          params: var_core_value_sig4169
        }];
      return var_core_value_sig5BCE(var_core_value_sig6D19, var_core_value_sig4592).result ? (var_core_value_sigC5C4.pushUndoRedo({
        unitID: var_core_value_sig3D6F,
        undoMutations: var_core_value_sig279C,
        redoMutations: var_core_value_sig6D19
      }), true) : false;
    }
  },
  _e = {
    type: var_core_value_sig0455.COMMAND,
    id: "sheet.command.update-connector-relation",
    handler: (var_core_value_sigAC51, var_core_value_sig8986) => {
      var var_core_value_sigCAF7;
      let var_core_value_sigED1C = var_core_value_sig2CC7(var_core_value_sigAC51.get(var_core_value_sig90F5), var_core_value_sig8986);
      if (!var_core_value_sigED1C) return false;
      let var_core_value_sig726E = var_core_value_sigAC51.get(var_core_value_sig4CEF),
        {
          unitId: var_core_value_sig2CD3,
          subUnitId: var_core_value_sig038E
        } = var_core_value_sigED1C,
        var_core_value_sigAA1E = var_core_value_sig726E.getSkeleton(var_core_value_sig2CD3, var_core_value_sig038E);
      if (!var_core_value_sigAA1E) return false;
      let var_core_value_sigC9F5 = var_core_value_sigAC51.get(var_core_value_sig16C7),
        {
          connectorShapeId: var_core_value_sig7EEA,
          width: var_core_value_sig59CE,
          height: var_core_value_sig33C8,
          left: var_core_value_sig957F,
          top: var_core_value_sig803B,
          flipX: var_core_value_sig5830,
          flipY: var_core_value_sig4A7C,
          rotation: var_core_value_sigF975,
          oldAdjustValues: var_core_value_sigCDAF,
          newAdjustValues: var_core_value_sigA298,
          oldLineType: var_core_value_sig0B40,
          newLineType: var_core_value_sig330B,
          oldRelation: var_core_value_sig3625,
          newRelation: var_core_value_sig0B4E
        } = var_core_value_sig8986,
        var_core_value_sig0E9F = var_core_value_sigC9F5.getDrawingByParam({
          unitId: var_core_value_sig2CD3,
          subUnitId: var_core_value_sig038E,
          drawingId: var_core_value_sig7EEA
        });
      if (!var_core_value_sig0E9F) return false;
      let var_core_value_sigE5BA = var_core_value_sigAC51.get(Q).getShapeModel(var_core_value_sig2CD3, var_core_value_sig038E, var_core_value_sig7EEA);
      if (!var_core_value_sigE5BA) return false;
      let var_core_value_sig4A83 = var_core_value_sigAC51.get(var_core_value_sig77FA),
        var_core_value_sig58AA = var_core_value_sigAC51.get(var_core_value_sigCC9D),
        var_core_value_sig84C4 = var_core_value_sigAC51.get(var_core_value_sig78AC),
        var_core_value_sigB6F7 = {
          ...var_core_value_sig0E9F.transform,
          width: var_core_value_sig59CE,
          height: var_core_value_sig33C8,
          left: var_core_value_sig957F,
          top: var_core_value_sig803B,
          flipX: var_core_value_sig5830,
          flipY: var_core_value_sig4A7C,
          angle: var_core_value_sigF975 ?? ((var_core_value_sigCAF7 = var_core_value_sig0E9F.transform) == null ? undefined : var_core_value_sigCAF7.angle) ?? 0
        },
        var_core_value_sigB495 = var_core_value_sig1DCE(var_core_value_sigB6F7, var_core_value_sigAA1E),
        var_core_value_sig70D0 = var_core_value_sig7428(var_core_value_sigB6F7, var_core_value_sigAA1E),
        var_core_value_sig2A8A = var_core_value_sigE5BA.getShapeType(),
        var_core_value_sig3782 = var_core_value_sigE5BA.getShapeData(),
        var_core_value_sigD22E = {
          unitId: var_core_value_sig2CD3,
          subUnitId: var_core_value_sig038E,
          drawingId: var_core_value_sig7EEA,
          drawingType: var_core_value_sig9DE4.DRAWING_SHAPE,
          sheetTransform: var_core_value_sigB495,
          transform: var_core_value_sigB6F7,
          data: {
            shapeType: var_core_value_sig330B || var_core_value_sig0B40 || var_core_value_sig2A8A,
            shapeData: {
              ...var_core_value_sig3782,
              adjustValues: var_core_value_sigA298 || var_core_value_sigCDAF || (var_core_value_sig3782 == null ? undefined : var_core_value_sig3782.adjustValues),
              relation: var_core_value_sig0B4E || var_core_value_sig3625 || (var_core_value_sig3782 == null ? undefined : var_core_value_sig3782.relation)
            }
          },
          axisAlignSheetTransform: var_core_value_sig70D0,
          allowTransform: true
        },
        {
          undo: var_core_value_sig3455,
          redo: var_core_value_sig5CEF,
          objects: var_core_value_sig43D5
        } = var_core_value_sigC9F5.getBatchUpdateOp([var_core_value_sigD22E]),
        var_core_value_sig1395 = var_core_value_sig84C4.onCommandExecute({
          id: var_core_value_sig649B.id,
          params: {
            unitId: var_core_value_sig2CD3,
            drawings: [var_core_value_sigD22E]
          }
        }),
        var_core_value_sig9FA0 = [...(var_core_value_sig1395.preRedos ?? []), {
          id: var_core_value_sig77D8.id,
          params: {
            unitId: var_core_value_sig2CD3,
            subUnitId: var_core_value_sig038E,
            op: var_core_value_sig5CEF,
            objects: var_core_value_sig43D5,
            type: var_core_value_sigC39E.UPDATE
          }
        }, {
          id: var_core_value_sig4784.id,
          params: [var_core_value_sig2CD3]
        }, ...var_core_value_sig1395.redos, {
          id: $.id,
          params: {
            unitId: var_core_value_sig2CD3,
            subUnitId: var_core_value_sig038E,
            shapeId: var_core_value_sig7EEA,
            shapeType: var_core_value_sig330B,
            shapeData: {
              adjustValues: var_core_value_sigA298,
              relation: var_core_value_sig0B4E
            }
          }
        }],
        var_core_value_sig055E = [...(var_core_value_sig1395.preUndos ?? []), {
          id: var_core_value_sig77D8.id,
          params: {
            unitId: var_core_value_sig2CD3,
            subUnitId: var_core_value_sig038E,
            op: var_core_value_sig3455,
            objects: var_core_value_sig43D5,
            type: var_core_value_sigC39E.UPDATE
          }
        }, {
          id: var_core_value_sig4784.id,
          params: [var_core_value_sig2CD3]
        }, ...var_core_value_sig1395.undos, {
          id: $.id,
          params: {
            unitId: var_core_value_sig2CD3,
            subUnitId: var_core_value_sig038E,
            shapeId: var_core_value_sig7EEA,
            shapeType: var_core_value_sig2A8A,
            shapeData: {
              ...var_core_value_sig3782,
              adjustValues: var_core_value_sigCDAF || (var_core_value_sig3782 == null ? undefined : var_core_value_sig3782.adjustValues),
              relation: var_core_value_sig3625 || (var_core_value_sig3782 == null ? undefined : var_core_value_sig3782.relation)
            }
          }
        }];
      return var_core_value_sig5BCE(var_core_value_sig9FA0, var_core_value_sig4A83).result ? (var_core_value_sig58AA.pushUndoRedo({
        unitID: var_core_value_sig2CD3,
        undoMutations: var_core_value_sig055E,
        redoMutations: var_core_value_sig9FA0
      }), true) : false;
    }
  },
  ve = {
    type: var_core_value_sig0455.COMMAND,
    id: "sheet.command.update-line-shape-resize",
    handler: (var_core_value_sig7C77, var_core_value_sig9578) => {
      let var_core_value_sigA2D3 = var_core_value_sig2CC7(var_core_value_sig7C77.get(var_core_value_sig90F5), var_core_value_sig9578);
      if (!var_core_value_sigA2D3) return false;
      let var_core_value_sigC218 = var_core_value_sig7C77.get(var_core_value_sig4CEF),
        {
          unitId: var_core_value_sigADEC,
          subUnitId: var_core_value_sig3D8E
        } = var_core_value_sigA2D3,
        var_core_value_sig37E5 = var_core_value_sigC218.getSkeleton(var_core_value_sigADEC, var_core_value_sig3D8E);
      if (!var_core_value_sig37E5) return false;
      let var_core_value_sigF079 = var_core_value_sig7C77.get(var_core_value_sig16C7),
        {
          shapeId: var_core_value_sigFCA0,
          width: var_core_value_sigC84D,
          height: var_core_value_sigF2BC,
          left: var_core_value_sigD37B,
          top: var_core_value_sigFA28,
          flipX: var_core_value_sig93BE,
          flipY: var_core_value_sigABEC,
          angle: var_core_value_sig2712,
          oldAdjustValues: var_core_value_sig0B9E,
          newAdjustValues: var_core_value_sigC545,
          oldLineType: var_core_value_sig12A7,
          newLineType: var_core_value_sig6F4E
        } = var_core_value_sig9578,
        var_core_value_sigA021 = var_core_value_sigF079.getDrawingByParam({
          unitId: var_core_value_sigADEC,
          subUnitId: var_core_value_sig3D8E,
          drawingId: var_core_value_sigFCA0
        });
      if (!var_core_value_sigA021) return false;
      let var_core_value_sig49D9 = var_core_value_sig7C77.get(Q).getShapeModel(var_core_value_sigADEC, var_core_value_sig3D8E, var_core_value_sigFCA0);
      if (!var_core_value_sig49D9) return false;
      let var_core_value_sig320C = var_core_value_sig7C77.get(var_core_value_sig77FA),
        var_core_value_sigE7F0 = var_core_value_sig7C77.get(var_core_value_sigCC9D),
        var_core_value_sigE837 = var_core_value_sig7C77.get(var_core_value_sig78AC),
        var_core_value_sig34F4 = {
          ...var_core_value_sigA021.transform,
          width: var_core_value_sigC84D,
          height: var_core_value_sigF2BC,
          left: var_core_value_sigD37B,
          top: var_core_value_sigFA28,
          flipX: var_core_value_sig93BE,
          flipY: var_core_value_sigABEC,
          angle: var_core_value_sig2712
        },
        var_core_value_sigA45D = var_core_value_sig1DCE(var_core_value_sig34F4, var_core_value_sig37E5),
        var_core_value_sig1BC7 = var_core_value_sig7428(var_core_value_sig34F4, var_core_value_sig37E5),
        var_core_value_sig4956 = var_core_value_sig49D9.getShapeType(),
        var_core_value_sigCC9E = var_core_value_sig49D9.getShapeData(),
        var_core_value_sig444C = {
          unitId: var_core_value_sigADEC,
          subUnitId: var_core_value_sig3D8E,
          drawingId: var_core_value_sigFCA0,
          drawingType: var_core_value_sig9DE4.DRAWING_SHAPE,
          sheetTransform: var_core_value_sigA45D,
          transform: var_core_value_sig34F4,
          data: {
            shapeType: var_core_value_sig6F4E || var_core_value_sig12A7 || var_core_value_sig4956,
            shapeData: {
              ...var_core_value_sigCC9E,
              adjustValues: var_core_value_sigC545 || var_core_value_sig0B9E || (var_core_value_sigCC9E == null ? undefined : var_core_value_sigCC9E.adjustValues)
            }
          },
          axisAlignSheetTransform: var_core_value_sig1BC7,
          allowTransform: true
        },
        {
          undo: var_core_value_sigE42E,
          redo: var_core_value_sigF039,
          objects: var_core_value_sigA321
        } = var_core_value_sigF079.getBatchUpdateOp([var_core_value_sig444C]),
        var_core_value_sigBF4C = var_core_value_sigE837.onCommandExecute({
          id: var_core_value_sig649B.id,
          params: {
            unitId: var_core_value_sigADEC,
            drawings: [var_core_value_sig444C]
          }
        }),
        var_core_value_sig3457 = [...(var_core_value_sigBF4C.preRedos ?? []), {
          id: var_core_value_sig77D8.id,
          params: {
            unitId: var_core_value_sigADEC,
            subUnitId: var_core_value_sig3D8E,
            op: var_core_value_sigF039,
            objects: var_core_value_sigA321,
            type: var_core_value_sigC39E.UPDATE
          }
        }, {
          id: var_core_value_sig4784.id,
          params: [var_core_value_sigADEC]
        }, ...var_core_value_sigBF4C.redos, {
          id: $.id,
          params: {
            unitId: var_core_value_sigADEC,
            subUnitId: var_core_value_sig3D8E,
            shapeId: var_core_value_sigFCA0,
            shapeType: var_core_value_sig6F4E,
            shapeData: {
              adjustValues: var_core_value_sigC545
            }
          }
        }],
        var_core_value_sig4A08 = [...(var_core_value_sigBF4C.preUndos ?? []), {
          id: var_core_value_sig77D8.id,
          params: {
            unitId: var_core_value_sigADEC,
            subUnitId: var_core_value_sig3D8E,
            op: var_core_value_sigE42E,
            objects: var_core_value_sigA321,
            type: var_core_value_sigC39E.UPDATE
          }
        }, {
          id: var_core_value_sig4784.id,
          params: [var_core_value_sigADEC]
        }, ...var_core_value_sigBF4C.undos, {
          id: $.id,
          params: {
            unitId: var_core_value_sigADEC,
            subUnitId: var_core_value_sig3D8E,
            shapeId: var_core_value_sigFCA0,
            shapeType: var_core_value_sig4956,
            shapeData: {
              ...var_core_value_sigCC9E,
              adjustValues: var_core_value_sig0B9E || (var_core_value_sigCC9E == null ? undefined : var_core_value_sigCC9E.adjustValues)
            }
          }
        }];
      return var_core_value_sig5BCE(var_core_value_sig3457, var_core_value_sig320C).result ? (var_core_value_sigE7F0.pushUndoRedo({
        unitID: var_core_value_sigADEC,
        undoMutations: var_core_value_sig4A08,
        redoMutations: var_core_value_sig3457
      }), true) : false;
    }
  },
  ye = {
    id: "sheet.mutation.update-shape-type",
    type: var_core_value_sig0455.MUTATION,
    handler: (var_core_value_sig1BC4, var_core_value_sig9EAB) => {
      let {
          unitId: var_core_value_sigA5C3,
          subUnitId: var_core_value_sig3A1E,
          shapeType: var_core_value_sigDC92,
          shapeId: var_core_value_sig3515,
          shapeData: var_core_value_sigC2A0
        } = var_core_value_sig9EAB,
        var_core_value_sig7C65 = var_core_value_sig1BC4.get(Q).getShapeModel(var_core_value_sigA5C3, var_core_value_sig3A1E, var_core_value_sig3515);
      return var_core_value_sig7C65 && (var_core_value_sig7C65.setShapeType(var_core_value_sigDC92), var_core_value_sigC2A0 && (var_core_value_sig7C65 == null || var_core_value_sig7C65.setShapeData(var_core_value_sigC2A0))), true;
    }
  };
var be = "@univerjs-pro/sheets-shape",
  xe = "1.0.0-insiders.20260907-70fc579";
function Se(var_core_value_sig7F05) {
  var var_core_value_sig41F3, var_core_value_sigF455, var_core_value_sig6E78, var_core_value_sigB3EE, var_core_value_sigC50A, var_core_value_sig11D0, var_core_value_sigB8ED;
  return {
    left: ((var_core_value_sig41F3 = var_core_value_sig7F05.transform) == null ? undefined : var_core_value_sig41F3.left) ?? 0,
    top: ((var_core_value_sigF455 = var_core_value_sig7F05.transform) == null ? undefined : var_core_value_sigF455.top) ?? 0,
    width: ((var_core_value_sig6E78 = var_core_value_sig7F05.transform) == null ? undefined : var_core_value_sig6E78.width) ?? 200,
    height: ((var_core_value_sigB3EE = var_core_value_sig7F05.transform) == null ? undefined : var_core_value_sigB3EE.height) ?? 200,
    rotation: ((var_core_value_sigC50A = var_core_value_sig7F05.transform) == null ? undefined : var_core_value_sigC50A.rotation) ?? 0,
    flipX: ((var_core_value_sig11D0 = var_core_value_sig7F05.transform) == null ? undefined : var_core_value_sig11D0.flipX) ?? false,
    flipY: ((var_core_value_sigB8ED = var_core_value_sig7F05.transform) == null ? undefined : var_core_value_sigB8ED.flipY) ?? false
  };
}
let Ce = class {
  constructor(var_core_value_sig1537, var_core_value_sigE4C6, var_core_value_sig4313, var_core_value_sigFC87) {
    this._commandService = var_core_value_sig1537, this._shapeService = var_core_value_sigE4C6, this._drawingService = var_core_value_sig4313, this._instanceService = var_core_value_sigFC87, X(this, "hostType", var_core_value_sig6E1C.UNIVER_SHEET);
  }
  get shapeChanged$() {
    return {
      subscribe: var_core_value_sig5B69 => {
        let var_core_value_sigB098 = this._commandService["onCommandExecuted"](var_core_value_sig5CEE => {
          (var_core_value_sig5CEE.id === ue.id || var_core_value_sig5CEE.id === de.id || var_core_value_sig5CEE.id === $.id || var_core_value_sig5CEE.id === ye.id) && var_core_value_sig5B69({
            unitId: var_core_value_sig5CEE.params["unitId"]
          });
        });
        return {
          unsubscribe: () => var_core_value_sigB098.dispose()
        };
      }
    };
  }
  getShape(var_core_value_sig156F) {
    var var_core_value_sigDD51;
    let var_core_value_sigF057 = (var_core_value_sigDD51 = this._drawingService["getDrawingData"](var_core_value_sig156F.unitId, var_core_value_sig156F.subUnitId)) == null ? undefined : var_core_value_sigDD51[var_core_value_sig156F.shapeId],
      var_core_value_sig72F6 = this._shapeService["getShapeType"](var_core_value_sig156F.unitId, var_core_value_sig156F.subUnitId, var_core_value_sig156F.shapeId);
    if (!var_core_value_sigF057 || var_core_value_sigF057.drawingType !== var_core_value_sig9DE4.DRAWING_SHAPE || !var_core_value_sig72F6) return null;
    let var_core_value_sig9FBA = var_core_value_sigF057.transform;
    return {
      ...var_core_value_sig156F,
      shapeType: var_core_value_sig72F6,
      shapeData: var_core_value_sigC7E7.deepClone(this._shapeService["getShapeDataById"](var_core_value_sig156F.unitId, var_core_value_sig156F.subUnitId, var_core_value_sig156F.shapeId) ?? {}),
      name: var_core_value_sigF057.name,
      description: var_core_value_sigF057.description,
      visible: var_core_value_sigF057.hidden !== true,
      selectable: var_core_value_sigF057.selectable !== false,
      transform: {
        left: (var_core_value_sig9FBA == null ? undefined : var_core_value_sig9FBA.left) ?? 0,
        top: (var_core_value_sig9FBA == null ? undefined : var_core_value_sig9FBA.top) ?? 0,
        width: (var_core_value_sig9FBA == null ? undefined : var_core_value_sig9FBA.width) ?? 200,
        height: (var_core_value_sig9FBA == null ? undefined : var_core_value_sig9FBA.height) ?? 200,
        rotation: (var_core_value_sig9FBA == null ? undefined : var_core_value_sig9FBA.angle) ?? 0,
        flipX: (var_core_value_sig9FBA == null ? undefined : var_core_value_sig9FBA.flipX) ?? false,
        flipY: (var_core_value_sig9FBA == null ? undefined : var_core_value_sig9FBA.flipY) ?? false
      }
    };
  }
  listShapes(var_core_value_sigFE01) {
    let var_core_value_sigA2CE = this._drawingService["getDrawingData"](var_core_value_sigFE01.unitId, var_core_value_sigFE01.subUnitId) ?? {};
    return Object.values(var_core_value_sigA2CE).filter(var_core_value_sigCE71 => (var_core_value_sigCE71 == null ? undefined : var_core_value_sigCE71.drawingType) === var_core_value_sig9DE4.DRAWING_SHAPE).map(var_core_value_sig21D8 => this.getShape({
      ...var_core_value_sigFE01,
      shapeId: var_core_value_sig21D8.drawingId
    })).filter(var_core_value_sig2B65 => !!var_core_value_sig2B65);
  }
  listShapesInUnit(var_core_value_sig1975) {
    let var_core_value_sig6EA1 = this._instanceService["getUnit"](var_core_value_sig1975, var_core_value_sig6E1C.UNIVER_SHEET);
    return (var_core_value_sig6EA1 == null ? undefined : var_core_value_sig6EA1.getSheets().flatMap(var_core_value_sigD7EA => this.listShapes({
      hostType: this.hostType,
      unitId: var_core_value_sig1975,
      subUnitId: var_core_value_sigD7EA.getSheetId()
    }))) ?? [];
  }
  createShape(var_core_value_sig029F, var_core_value_sig3767) {
    let var_core_value_sig670B = var_core_value_sigFABC(),
      var_core_value_sig6912 = Se(var_core_value_sig3767),
      var_core_value_sigE235 = var_core_value_sigC7E7.deepClone(var_core_value_sig3767.shapeData ?? var_core_value_sigC753(var_core_value_sig3767.shapeType));
    return this._commandService["syncExecuteCommand"](fe.id, {
      unitId: var_core_value_sig029F.unitId,
      subUnitId: var_core_value_sig029F.subUnitId,
      shapeId: var_core_value_sig670B,
      shapeType: var_core_value_sig3767.shapeType,
      shapeData: var_core_value_sigE235,
      name: var_core_value_sig3767.name,
      description: var_core_value_sig3767.description,
      position: {
        x: var_core_value_sig6912.left,
        y: var_core_value_sig6912.top
      },
      width: var_core_value_sig6912.width,
      height: var_core_value_sig6912.height,
      rotation: var_core_value_sig6912.rotation,
      flipX: var_core_value_sig6912.flipX,
      flipY: var_core_value_sig6912.flipY,
      visible: var_core_value_sig3767.visible ?? true,
      selectable: var_core_value_sig3767.selectable ?? true
    }) ? {
      ...var_core_value_sig029F,
      shapeId: var_core_value_sig670B,
      shapeType: var_core_value_sig3767.shapeType,
      shapeData: var_core_value_sigE235,
      name: var_core_value_sig3767.name,
      description: var_core_value_sig3767.description,
      visible: var_core_value_sig3767.visible ?? true,
      selectable: var_core_value_sig3767.selectable ?? true,
      transform: var_core_value_sig6912
    } : null;
  }
  updateShape(var_core_value_sig7664, var_core_value_sig2281) {
    var var_core_value_sig5E86;
    let var_core_value_sig6998 = this.getShape(var_core_value_sig7664);
    if (!var_core_value_sig6998) return false;
    let var_core_value_sigF639 = {
      ...var_core_value_sig6998.transform,
      ...var_core_value_sig2281.transform
    };
    return this._commandService["syncExecuteCommand"](pe.id, {
      unitId: var_core_value_sig7664.unitId,
      subUnitId: var_core_value_sig7664.subUnitId,
      shapeId: var_core_value_sig7664.shapeId,
      shapeType: var_core_value_sig2281.shapeType ?? ((var_core_value_sig5E86 = var_core_value_sig2281.shapeData) == null ? undefined : var_core_value_sig5E86.shapeType) ?? var_core_value_sig6998.shapeType,
      shapeData: var_core_value_sig2281.shapeData ?? var_core_value_sig6998.shapeData,
      position: {
        x: var_core_value_sigF639.left,
        y: var_core_value_sigF639.top
      },
      width: var_core_value_sigF639.width,
      height: var_core_value_sigF639.height,
      rotation: var_core_value_sigF639.rotation,
      flipX: var_core_value_sigF639.flipX,
      flipY: var_core_value_sigF639.flipY,
      name: "name" in var_core_value_sig2281 ? var_core_value_sig2281.name : var_core_value_sig6998.name,
      description: "description" in var_core_value_sig2281 ? var_core_value_sig2281.description : var_core_value_sig6998.description,
      visible: var_core_value_sig2281.visible ?? var_core_value_sig6998.visible,
      selectable: var_core_value_sig2281.selectable ?? var_core_value_sig6998.selectable
    });
  }
  createFormulaLastValueMutation(var_core_value_sigEAE5, var_core_value_sigE94C, var_core_value_sig6D47) {
    let var_core_value_sigCB82 = this.getShape(var_core_value_sigEAE5),
      var_core_value_sigCF4E = var_core_value_sigCB82 == null ? undefined : var_core_value_sigCB82.shapeData["formulaBinding"];
    return !var_core_value_sigCB82 || !var_core_value_sigCF4E ? null : {
      id: $.id,
      params: {
        unitId: var_core_value_sigEAE5.unitId,
        subUnitId: var_core_value_sigEAE5.subUnitId,
        shapeId: var_core_value_sigEAE5.shapeId,
        shapeData: {
          ...var_core_value_sigCB82.shapeData,
          formulaBinding: {
            ...var_core_value_sigCF4E,
            lastValue: var_core_value_sigC7E7.deepClone(var_core_value_sig6D47)
          }
        },
        replace: true,
        formulaLastValueGuard: var_core_value_sigE94C
      }
    };
  }
  removeShape(var_core_value_sig6CAD) {
    return this._commandService["syncExecuteCommand"](var_core_value_sig08A3.id, {
      unitId: var_core_value_sig6CAD.unitId,
      drawings: [{
        unitId: var_core_value_sig6CAD.unitId,
        subUnitId: var_core_value_sig6CAD.subUnitId,
        drawingId: var_core_value_sig6CAD.shapeId,
        drawingType: var_core_value_sig9DE4.DRAWING_SHAPE
      }]
    });
  }
  bringToFront(var_core_value_sig8CF5) {
    return this._arrange(var_core_value_sig8CF5, var_core_value_sigEAF8.front);
  }
  bringForward(var_core_value_sigDDD7) {
    return this._arrange(var_core_value_sigDDD7, var_core_value_sigEAF8.forward);
  }
  sendBackward(var_core_value_sigB2CE) {
    return this._arrange(var_core_value_sigB2CE, var_core_value_sigEAF8.backward);
  }
  sendToBack(var_core_value_sig443C) {
    return this._arrange(var_core_value_sig443C, var_core_value_sigEAF8.back);
  }
  setZOrder(var_core_value_sig39B1, var_core_value_sig210D) {
    return this._commandService["syncExecuteCommand"](var_core_value_sig78A3.id, {
      unitId: var_core_value_sig39B1.unitId,
      subUnitId: var_core_value_sig39B1.subUnitId,
      drawingIds: [var_core_value_sig39B1.shapeId],
      zOrder: var_core_value_sig210D
    });
  }
  _arrange(var_core_value_sigB4B4, var_core_value_sigD407) {
    return this._commandService["syncExecuteCommand"](var_core_value_sig78A3.id, {
      unitId: var_core_value_sigB4B4.unitId,
      subUnitId: var_core_value_sigB4B4.subUnitId,
      drawingIds: [var_core_value_sigB4B4.shapeId],
      arrangeType: var_core_value_sigD407
    });
  }
};
Ce = le([Z(0, var_core_value_sig77FA), Z(1, var_core_value_sigD2BA(Q)), Z(2, var_core_value_sig16C7), Z(3, var_core_value_sig90F5)], Ce);
const we = {};
let Te = class extends var_core_value_sig5AF5 {
  constructor(var_core_value_sig63F3, var_core_value_sig6A71, var_core_value_sig3BF6, var_core_value_sig38CE, var_core_value_sig62B7, var_core_value_sig37A8, var_core_value_sigA90D) {
    super(), this._commandService = var_core_value_sig63F3, this._sheetInterceptorService = var_core_value_sig6A71, this._sheetSkeletonService = var_core_value_sig3BF6, this._sheetsShapeService = var_core_value_sig38CE, this._drawingManagerService = var_core_value_sig62B7, this._shapeHostAdapterRegistry = var_core_value_sig37A8, this._initCommands(), this._initCommandInterceptor(), this.disposeWithMe(this._shapeHostAdapterRegistry["register"](var_core_value_sigA90D));
  }
  _initCommands() {
    [fe, pe, me, he, ge, _e, ve, ue, de, ye, $].forEach(var_core_value_sigB33B => this.disposeWithMe(this._commandService["registerCommand"](var_core_value_sigB33B)));
  }
  _initCommandInterceptor() {
    this.disposeWithMe(this._sheetInterceptorService["interceptCommand"]({
      getMutations: var_core_value_sig24B9 => {
        if (var_core_value_sig24B9.id === var_core_value_sig08A3.id) {
          let {
              drawings: var_core_value_sigE92A
            } = var_core_value_sig24B9.params,
            var_core_value_sig362B = var_core_value_sigE92A.filter(var_core_value_sigFBA4 => var_core_value_sigFBA4.drawingType === var_core_value_sig9DE4.DRAWING_SHAPE);
          if (var_core_value_sig362B.length === 0) return {
            preRedos: [],
            redos: [],
            preUndos: [],
            undos: []
          };
          let var_core_value_sig5CA5 = [],
            var_core_value_sigE90F = [];
          return var_core_value_sig362B.forEach(var_core_value_sig4383 => {
            let {
                unitId: var_core_value_sig186C,
                subUnitId: var_core_value_sigD955,
                drawingId: var_core_value_sig48BD
              } = var_core_value_sig4383,
              var_core_value_sig429F = this._sheetsShapeService["getShapeModel"](var_core_value_sig186C, var_core_value_sigD955, var_core_value_sig48BD);
            if (!var_core_value_sig429F) throw TypeError("Fail to get shape model, get: " + var_core_value_sig429F);
            var_core_value_sig5CA5.push({
              id: de.id,
              params: {
                unitId: var_core_value_sig186C,
                subUnitId: var_core_value_sigD955,
                shapeId: var_core_value_sig48BD
              }
            }), var_core_value_sigE90F.push({
              id: ue.id,
              params: {
                unitId: var_core_value_sig186C,
                subUnitId: var_core_value_sigD955,
                shapeId: var_core_value_sig48BD,
                shapeType: var_core_value_sig429F.getShapeType(),
                shapeData: var_core_value_sig429F.getShapeData()
              }
            });
            let var_core_value_sigF62A = this._sheetsShapeService["getBasicShapeRelation"](var_core_value_sig186C, var_core_value_sigD955, var_core_value_sig48BD);
            if (var_core_value_sigF62A) for (let var_core_value_sigF602 of var_core_value_sigF62A) {
              let var_core_value_sig27E5 = var_core_value_sigF602.lineShapeId,
                var_core_value_sig8061 = var_core_value_sigF602.isFrom,
                var_core_value_sig4D4C = var_core_value_sig8061 ? {
                  from: undefined
                } : {
                  to: undefined
                },
                var_core_value_sigC9E0 = var_core_value_sig8061 ? {
                  from: {
                    shapeId: var_core_value_sigF602.shapeId,
                    cxnIndex: var_core_value_sigF602.cxnIndex
                  }
                } : {
                  to: {
                    shapeId: var_core_value_sigF602.shapeId,
                    cxnIndex: var_core_value_sigF602.cxnIndex
                  }
                };
              var_core_value_sig5CA5.push({
                id: $.id,
                params: {
                  unitId: var_core_value_sig186C,
                  subUnitId: var_core_value_sigD955,
                  shapeId: var_core_value_sig27E5,
                  shapeData: {
                    relation: var_core_value_sig4D4C
                  }
                }
              }), var_core_value_sigE90F.push({
                id: $.id,
                params: {
                  unitId: var_core_value_sig186C,
                  subUnitId: var_core_value_sigD955,
                  shapeId: var_core_value_sig27E5,
                  shapeData: {
                    relation: var_core_value_sigC9E0
                  }
                }
              });
            }
          }), {
            preRedos: var_core_value_sig5CA5,
            redos: [],
            preUndos: [],
            undos: var_core_value_sigE90F
          };
        }
        if (var_core_value_sig24B9.id === var_core_value_sig649B.id) {
          let {
              drawings: var_core_value_sigEFD4
            } = var_core_value_sig24B9.params,
            var_core_value_sig861B = var_core_value_sigEFD4.filter(var_core_value_sig8178 => var_core_value_sig8178.drawingType === var_core_value_sig9DE4.DRAWING_SHAPE);
          if (var_core_value_sig861B.length === 0) return {
            preRedos: [],
            redos: [],
            preUndos: [],
            undos: []
          };
          let var_core_value_sig5237 = [],
            var_core_value_sigBB00 = [];
          for (let var_core_value_sigE9ED of var_core_value_sig861B) {
            let {
              unitId: var_core_value_sig1BBD,
              subUnitId: var_core_value_sigF704,
              drawingId: var_core_value_sig2BCF,
              transform: var_core_value_sig0D69
            } = var_core_value_sigE9ED;
            if (!var_core_value_sig1BBD || !var_core_value_sigF704 || !var_core_value_sig2BCF || !var_core_value_sig0D69) continue;
            let var_core_value_sig480E = this._sheetsShapeService["getShapeModel"](var_core_value_sig1BBD, var_core_value_sigF704, var_core_value_sig2BCF);
            if (!var_core_value_sig480E) throw TypeError("Fail to get shape model, get: " + var_core_value_sig480E);
            if (var_core_value_sig0E54(var_core_value_sig480E.getShapeType())) {
              let var_core_value_sig76BA = this._sheetsShapeService["getLineShapeRelation"](var_core_value_sig1BBD, var_core_value_sigF704, var_core_value_sig2BCF);
              var_core_value_sig76BA && (var_core_value_sig5237.push({
                id: $.id,
                params: {
                  unitId: var_core_value_sig1BBD,
                  subUnitId: var_core_value_sigF704,
                  shapeId: var_core_value_sig2BCF,
                  shapeData: {
                    relation: {
                      from: undefined,
                      to: undefined
                    }
                  }
                }
              }), var_core_value_sigBB00.push({
                id: $.id,
                params: {
                  unitId: var_core_value_sig1BBD,
                  subUnitId: var_core_value_sigF704,
                  shapeId: var_core_value_sig2BCF,
                  shapeData: {
                    relation: var_core_value_sig76BA
                  }
                }
              }));
            } else {
              let var_core_value_sigFBFA = this._sheetsShapeService["getBasicShapeRelation"](var_core_value_sig1BBD, var_core_value_sigF704, var_core_value_sig2BCF);
              if (var_core_value_sigFBFA && var_core_value_sigFBFA.length > 0) for (let var_core_value_sig3D7D of var_core_value_sigFBFA) {
                let var_core_value_sig7524 = var_core_value_sig3D7D.lineShapeId,
                  var_core_value_sig2AD8 = var_core_value_sig3D7D.isFrom,
                  var_core_value_sig2AD0 = this._sheetsShapeService["getShapeModel"](var_core_value_sig1BBD, var_core_value_sigF704, var_core_value_sig7524);
                if (!var_core_value_sig2AD0) continue;
                let var_core_value_sig3EEE = var_core_value_sig2AD0.getStartConnectInfo(),
                  var_core_value_sigBC46 = var_core_value_sig2AD0.getEndConnectInfo();
                var_core_value_sig3EEE && var_core_value_sigBC46 ? this._addLineRerouteUpdates(var_core_value_sig1BBD, var_core_value_sigF704, var_core_value_sig7524, var_core_value_sig2AD0, var_core_value_sig3EEE, var_core_value_sigBC46, var_core_value_sig5237, var_core_value_sigBB00, var_core_value_sig2BCF, var_core_value_sig0D69) : this._addLineFollowShapeUpdates(var_core_value_sig1BBD, var_core_value_sigF704, var_core_value_sig7524, var_core_value_sig2AD0, var_core_value_sig2AD8 ? var_core_value_sig3EEE : var_core_value_sigBC46, var_core_value_sig2AD8, var_core_value_sig5237, var_core_value_sigBB00, var_core_value_sig2BCF, var_core_value_sig0D69);
              }
            }
          }
          return {
            preRedos: [],
            redos: var_core_value_sig5237,
            preUndos: var_core_value_sigBB00,
            undos: []
          };
        }
        return {
          preRedos: [],
          redos: [],
          preUndos: [],
          undos: []
        };
      }
    }));
  }
  _getConnectPointInfo(var_core_value_sig7A3C, var_core_value_sig0511, var_core_value_sig1F44, var_core_value_sigCB04, var_core_value_sig947E) {
    if (!var_core_value_sig0511 || !var_core_value_sig1F44) return null;
    let {
        shapeId: var_core_value_sig4545,
        cxnIndex: var_core_value_sigF39A
      } = var_core_value_sig7A3C,
      var_core_value_sigF79C = this._sheetsShapeService["getShapeModel"](var_core_value_sig0511, var_core_value_sig1F44, var_core_value_sig4545);
    if (!var_core_value_sigF79C) return null;
    let var_core_value_sig2E54 = this._drawingManagerService["getDrawingByParam"]({
      unitId: var_core_value_sig0511,
      subUnitId: var_core_value_sig1F44,
      drawingId: var_core_value_sig4545
    });
    if (!(var_core_value_sig2E54 != null && var_core_value_sig2E54.transform)) return null;
    let {
      left: var_core_value_sigDCF5 = 0,
      top: var_core_value_sigC786 = 0,
      width: var_core_value_sigC0D9 = 0,
      height: var_core_value_sigF0511 = 0,
      flipX: var_core_value_sig5825 = false,
      flipY: var_core_value_sig4EB7 = false,
      angle: var_core_value_sig7658
    } = var_core_value_sig2E54.transform;
    var_core_value_sig947E && var_core_value_sigCB04 === var_core_value_sig4545 && (var_core_value_sigDCF5 = var_core_value_sig947E.left ?? var_core_value_sigDCF5, var_core_value_sigC786 = var_core_value_sig947E.top ?? var_core_value_sigC786, var_core_value_sigC0D9 = var_core_value_sig947E.width ?? var_core_value_sigC0D9, var_core_value_sigF0511 = var_core_value_sig947E.height ?? var_core_value_sigF0511, var_core_value_sig5825 = var_core_value_sig947E.flipX ?? var_core_value_sig5825, var_core_value_sig4EB7 = var_core_value_sig947E.flipY ?? var_core_value_sig4EB7, var_core_value_sig7658 = var_core_value_sig947E.angle ?? var_core_value_sig7658), var_core_value_sigF79C.updateContext({
      width: var_core_value_sigC0D9,
      height: var_core_value_sigF0511
    });
    let var_core_value_sig73AF = var_core_value_sigF79C.getConnectionSiteList().find(var_core_value_sigE627 => var_core_value_sigE627.index === var_core_value_sigF39A);
    if (!var_core_value_sig73AF) return null;
    let var_core_value_sig548A = var_core_value_sig5825 ? var_core_value_sigC0D9 - var_core_value_sig73AF.x : var_core_value_sig73AF.x,
      var_core_value_sigE026 = var_core_value_sig4EB7 ? var_core_value_sigF0511 - var_core_value_sig73AF.y : var_core_value_sig73AF.y;
    if (var_core_value_sig7658 !== 0 && var_core_value_sig7658 != null) {
      let var_core_value_sigEF3E = var_core_value_sig7658 * Math.PI / 180,
        var_core_value_sig273D = Math.cos(var_core_value_sigEF3E),
        var_core_value_sig9A0D = Math.sin(var_core_value_sigEF3E),
        var_core_value_sigA319 = var_core_value_sigC0D9 / 2,
        var_core_value_sig2D58 = var_core_value_sigF0511 / 2,
        var_core_value_sig223F = var_core_value_sig548A - var_core_value_sigA319,
        var_core_value_sigD749 = var_core_value_sigE026 - var_core_value_sig2D58;
      var_core_value_sig548A = var_core_value_sigA319 + var_core_value_sig223F * var_core_value_sig273D - var_core_value_sigD749 * var_core_value_sig9A0D, var_core_value_sigE026 = var_core_value_sig2D58 + var_core_value_sig223F * var_core_value_sig9A0D + var_core_value_sigD749 * var_core_value_sig273D;
    }
    var_core_value_sig548A += var_core_value_sigDCF5, var_core_value_sigE026 += var_core_value_sigC786;
    let var_core_value_sig339E = var_core_value_sig73AF.ang / 60000;
    var_core_value_sig5825 && (var_core_value_sig339E = 180 - var_core_value_sig339E), var_core_value_sig4EB7 && (var_core_value_sig339E = -var_core_value_sig339E), var_core_value_sig339E += var_core_value_sig7658 || 0, var_core_value_sig339E = (var_core_value_sig339E % 360 + 360) % 360;
    let var_core_value_sig7550 = var_core_value_sigF79F({
      left: var_core_value_sigDCF5,
      top: var_core_value_sigC786,
      width: var_core_value_sigC0D9,
      height: var_core_value_sigF0511
    }, var_core_value_sig7658 || 0);
    return {
      point: {
        x: var_core_value_sig548A,
        y: var_core_value_sigE026
      },
      angle: var_core_value_sig339E,
      bounds: var_core_value_sig7550
    };
  }
  _addLineRerouteUpdates(var_core_value_sig2983, var_core_value_sigE1B0, var_core_value_sigD4FF, var_core_value_sig1E5B, var_core_value_sigB680, var_core_value_sig1F64, var_core_value_sigDD1C, var_core_value_sig2C39, var_core_value_sigB7D1, var_core_value_sig64F0) {
    let var_core_value_sig85B1 = this._sheetSkeletonService["getSkeleton"](var_core_value_sig2983, var_core_value_sigE1B0);
    if (!var_core_value_sig85B1) return;
    let var_core_value_sig3141 = var_core_value_sig1E5B.getShapeRelation(),
      var_core_value_sig2162 = var_core_value_sig1E5B.getAdjustNames(),
      var_core_value_sig2EAD = {},
      var_core_value_sig6774 = {};
    var_core_value_sig2162.forEach(var_core_value_sigCFFA => {
      let var_core_value_sig58C1 = var_core_value_sig1E5B.getAdjustValueByName(var_core_value_sigCFFA);
      var_core_value_sig6774[var_core_value_sigCFFA] = var_core_value_sig58C1 ?? 0;
    });
    let var_core_value_sig340D = this._getConnectPointInfo(var_core_value_sigB680, var_core_value_sig2983, var_core_value_sigE1B0, var_core_value_sigB7D1, var_core_value_sig64F0),
      var_core_value_sig82D4 = this._getConnectPointInfo(var_core_value_sig1F64, var_core_value_sig2983, var_core_value_sigE1B0, var_core_value_sigB7D1, var_core_value_sig64F0);
    if (var_core_value_sig340D && var_core_value_sig82D4) {
      let var_core_value_sig5090 = var_core_value_sig1E5B.getShapeType(),
        var_core_value_sigC368 = var_core_value_sig73D9(var_core_value_sig340D, var_core_value_sig82D4, var_core_value_sig5090),
        var_core_value_sigAD56 = var_core_value_sig5090;
      if (var_core_value_sigC368) {
        let var_core_value_sig7E54 = var_core_value_sig32AE(var_core_value_sigC368, var_core_value_sig1E5B.getShapeType()),
          var_core_value_sig9A8D = this._drawingManagerService["getDrawingData"](var_core_value_sig2983, var_core_value_sigE1B0);
        if (var_core_value_sig9A8D && var_core_value_sig9A8D[var_core_value_sigD4FF]) {
          let var_core_value_sigB577 = var_core_value_sig9A8D[var_core_value_sigD4FF];
          var_core_value_sigAD56 = var_core_value_sig7E54.lineType;
          for (let [var_core_value_sig26DB, var_core_value_sigF0F9] of Object.entries(var_core_value_sig7E54.adjustValues)) var_core_value_sig2EAD[var_core_value_sig26DB] = var_core_value_sigF0F9;
          let var_core_value_sig9572 = {
              ...var_core_value_sigB577.transform,
              width: var_core_value_sig7E54.worldRect["width"],
              height: var_core_value_sig7E54.worldRect["height"],
              left: var_core_value_sig7E54.worldRect["left"],
              top: var_core_value_sig7E54.worldRect["top"],
              flipX: var_core_value_sig7E54.worldRect["flipX"],
              flipY: var_core_value_sig7E54.worldRect["flipY"],
              angle: var_core_value_sig7E54.rotation
            },
            var_core_value_sigD873 = var_core_value_sig1DCE(var_core_value_sig9572, var_core_value_sig85B1),
            var_core_value_sigA12B = var_core_value_sig7428(var_core_value_sig9572, var_core_value_sig85B1),
            var_core_value_sigF230 = {
              unitId: var_core_value_sig2983,
              subUnitId: var_core_value_sigE1B0,
              drawingType: var_core_value_sig9DE4.DRAWING_SHAPE,
              drawingId: var_core_value_sigD4FF,
              transform: var_core_value_sig9572,
              sheetTransform: var_core_value_sigD873,
              axisAlignSheetTransform: var_core_value_sigA12B
            },
            {
              unitId: var_core_value_sig09B8,
              subUnitId: var_core_value_sig6F91,
              undo: var_core_value_sigF9C7,
              redo: var_core_value_sig8895,
              objects: var_core_value_sigC80B
            } = this._drawingManagerService["getBatchUpdateOp"]([var_core_value_sigF230]);
          var_core_value_sigDD1C.push({
            id: var_core_value_sig77D8.id,
            params: {
              unitId: var_core_value_sig09B8,
              subUnitId: var_core_value_sig6F91,
              op: var_core_value_sig8895,
              objects: var_core_value_sigC80B,
              type: var_core_value_sigC39E.UPDATE
            }
          }), var_core_value_sig2C39.push({
            id: var_core_value_sig77D8.id,
            params: {
              unitId: var_core_value_sig09B8,
              subUnitId: var_core_value_sig6F91,
              op: var_core_value_sigF9C7,
              objects: var_core_value_sigC80B,
              type: var_core_value_sigC39E.UPDATE
            }
          });
        }
        var_core_value_sig1E5B.removeLinePoints();
      }
      var_core_value_sigDD1C.push({
        id: $.id,
        params: {
          unitId: var_core_value_sig2983,
          subUnitId: var_core_value_sigE1B0,
          shapeId: var_core_value_sigD4FF,
          shapeType: var_core_value_sigAD56,
          shapeData: {
            adjustValues: var_core_value_sig2EAD,
            relation: var_core_value_sig3141
          }
        }
      }), var_core_value_sig2C39.push({
        id: $.id,
        params: {
          unitId: var_core_value_sig2983,
          subUnitId: var_core_value_sigE1B0,
          shapeId: var_core_value_sigD4FF,
          shapeType: var_core_value_sig5090,
          shapeData: {
            adjustValues: var_core_value_sig6774,
            relation: var_core_value_sig3141
          }
        }
      });
    }
  }
  _addLineFollowShapeUpdates(var_core_value_sigBDE4, var_core_value_sig7DF1, var_core_value_sigDC86, var_core_value_sig0B0C, var_core_value_sigA39E, var_core_value_sigBBEE, var_core_value_sig011D, var_core_value_sig6167, var_core_value_sig65A1, var_core_value_sig7F19) {
    var var_core_value_sig7827;
    if (!var_core_value_sigA39E) return;
    let var_core_value_sig652C = this._sheetSkeletonService["getSkeleton"](var_core_value_sigBDE4, var_core_value_sig7DF1);
    if (!var_core_value_sig652C) return;
    let var_core_value_sig7E32 = (var_core_value_sig7827 = this._drawingManagerService["getDrawingByParam"]({
      unitId: var_core_value_sigBDE4,
      subUnitId: var_core_value_sig7DF1,
      drawingId: var_core_value_sig65A1
    })) == null ? undefined : var_core_value_sig7827.transform;
    if (!var_core_value_sig7E32) return;
    let var_core_value_sig4C07 = var_core_value_sig7E32.left !== var_core_value_sig7F19.left || var_core_value_sig7E32.top !== var_core_value_sig7F19.top,
      var_core_value_sig79AB = var_core_value_sig7E32.width !== var_core_value_sig7F19.width || var_core_value_sig7E32.height !== var_core_value_sig7F19.height,
      var_core_value_sig8E74 = var_core_value_sig7E32.flipX !== var_core_value_sig7F19.flipX || var_core_value_sig7E32.flipY !== var_core_value_sig7F19.flipY,
      var_core_value_sig104C = var_core_value_sig7E32.angle !== var_core_value_sig7F19.angle;
    if (var_core_value_sig4C07 && !var_core_value_sig79AB && !var_core_value_sig8E74 && !var_core_value_sig104C) {
      let var_core_value_sigDB4A = (var_core_value_sig7F19.left ?? 0) - (var_core_value_sig7E32.left ?? 0),
        var_core_value_sig6418 = (var_core_value_sig7F19.top ?? 0) - (var_core_value_sig7E32.top ?? 0),
        var_core_value_sig1896 = this._drawingManagerService["getDrawingData"](var_core_value_sigBDE4, var_core_value_sig7DF1);
      if (var_core_value_sig1896 && var_core_value_sig1896[var_core_value_sigDC86]) {
        var var_core_value_sig841D, var_core_value_sig90CB;
        let var_core_value_sigC259 = var_core_value_sig1896[var_core_value_sigDC86],
          var_core_value_sig9C9F = {
            ...var_core_value_sigC259.transform,
            left: (((var_core_value_sig841D = var_core_value_sigC259.transform) == null ? undefined : var_core_value_sig841D.left) ?? 0) + var_core_value_sigDB4A,
            top: (((var_core_value_sig90CB = var_core_value_sigC259.transform) == null ? undefined : var_core_value_sig90CB.top) ?? 0) + var_core_value_sig6418
          },
          var_core_value_sigFDEA = var_core_value_sig1DCE(var_core_value_sig9C9F, var_core_value_sig652C),
          var_core_value_sig86D0 = var_core_value_sig7428(var_core_value_sig9C9F, var_core_value_sig652C),
          var_core_value_sig4CD2 = {
            unitId: var_core_value_sigBDE4,
            subUnitId: var_core_value_sig7DF1,
            drawingType: var_core_value_sig9DE4.DRAWING_SHAPE,
            drawingId: var_core_value_sigDC86,
            transform: var_core_value_sig9C9F,
            sheetTransform: var_core_value_sigFDEA,
            axisAlignSheetTransform: var_core_value_sig86D0
          },
          {
            unitId: var_core_value_sig48CA,
            subUnitId: var_core_value_sig50AF,
            undo: var_core_value_sigA942,
            redo: var_core_value_sigA621,
            objects: var_core_value_sigBBFF
          } = this._drawingManagerService["getBatchUpdateOp"]([var_core_value_sig4CD2]);
        var_core_value_sig011D.push({
          id: var_core_value_sig77D8.id,
          params: {
            unitId: var_core_value_sig48CA,
            subUnitId: var_core_value_sig50AF,
            op: var_core_value_sigA621,
            objects: var_core_value_sigBBFF,
            type: var_core_value_sigC39E.UPDATE
          }
        }), var_core_value_sig6167.push({
          id: var_core_value_sig77D8.id,
          params: {
            unitId: var_core_value_sig48CA,
            subUnitId: var_core_value_sig50AF,
            op: var_core_value_sigA942,
            objects: var_core_value_sigBBFF,
            type: var_core_value_sigC39E.UPDATE
          }
        });
      }
    } else {
      let var_core_value_sig0285 = var_core_value_sig0B0C.getStartConnectInfo(),
        var_core_value_sig777D = var_core_value_sig0B0C.getEndConnectInfo();
      this._addLineRerouteUpdates(var_core_value_sigBDE4, var_core_value_sig7DF1, var_core_value_sigDC86, var_core_value_sig0B0C, var_core_value_sig0285, var_core_value_sig777D, var_core_value_sig011D, var_core_value_sig6167, var_core_value_sig65A1, var_core_value_sig7F19);
    }
  }
};
Te = le([Z(0, var_core_value_sig77FA), Z(1, var_core_value_sigD2BA(var_core_value_sig78AC)), Z(2, var_core_value_sigD2BA(var_core_value_sig4CEF)), Z(3, var_core_value_sigD2BA(Q)), Z(4, var_core_value_sigD2BA(var_core_value_sigA7F3)), Z(5, var_core_value_sigD2BA(var_core_value_sig8EAE)), Z(6, var_core_value_sigD2BA(Ce))], Te);
let Ee = class extends var_core_value_sig5AF5 {
  constructor(var_core_value_sigBDF5, var_core_value_sigACC6, var_core_value_sig1614) {
    super(), this._shapeService = var_core_value_sigBDF5, this._shapeAdapter = var_core_value_sigACC6, this.disposeWithMe(var_core_value_sig1614.register(this));
  }
  transform(var_core_value_sig85C3) {
    let var_core_value_sigB996 = {
      preRedos: [],
      redos: [],
      preUndos: [],
      undos: []
    };
    this._planDeletes(var_core_value_sig85C3, var_core_value_sigB996);
    for (let [var_core_value_sig3F4C, var_core_value_sigD65A] of var_core_value_sig85C3.originals) this._planConnector(var_core_value_sig85C3, var_core_value_sig3F4C, var_core_value_sigD65A, var_core_value_sigB996);
    return var_core_value_sigB996;
  }
  _planDeletes(var_core_value_sig4BBA, var_core_value_sig6201) {
    if (var_core_value_sig4BBA.mode === "command") for (let var_core_value_sig5A13 of var_core_value_sig4BBA.deletes) {
      let var_core_value_sig8889 = var_core_value_sig4BBA.originals["get"](var_core_value_sig5A13),
        var_core_value_sig32F8 = this._shapeService["getShapeModel"](var_core_value_sig4BBA.unitId, var_core_value_sig4BBA.subUnitId, var_core_value_sig5A13);
      (var_core_value_sig8889 == null ? undefined : var_core_value_sig8889.drawingType) !== var_core_value_sig9DE4.DRAWING_SHAPE || !var_core_value_sig32F8 || (var_core_value_sig6201.preRedos["push"]({
        id: de.id,
        params: {
          unitId: var_core_value_sig4BBA.unitId,
          subUnitId: var_core_value_sig4BBA.subUnitId,
          shapeId: var_core_value_sig5A13
        }
      }), var_core_value_sig6201.undos["push"]({
        id: ue.id,
        params: {
          unitId: var_core_value_sig4BBA.unitId,
          subUnitId: var_core_value_sig4BBA.subUnitId,
          shapeId: var_core_value_sig5A13,
          shapeName: var_core_value_sig32F8.getName(),
          shapeType: var_core_value_sig32F8.getShapeType(),
          shapeData: var_core_value_sigC7E7.deepClone(var_core_value_sig32F8.getShapeData())
        }
      }));
    }
  }
  _planConnector(var_core_value_sig5151, var_core_value_sigB542, var_core_value_sigBB6C, var_core_value_sigE2BF) {
    if (var_core_value_sigBB6C.drawingType !== var_core_value_sig9DE4.DRAWING_SHAPE || var_core_value_sig5151.deletes["has"](var_core_value_sigB542)) return;
    let var_core_value_sigB8C7 = this._shapeService["getShapeModel"](var_core_value_sig5151.unitId, var_core_value_sig5151.subUnitId, var_core_value_sigB542);
    if (!var_core_value_sigB8C7 || !var_core_value_sig0E54(var_core_value_sigB8C7.getShapeType())) return;
    let var_core_value_sigA56E = var_core_value_sigB8C7.getShapeRelation();
    if (!(var_core_value_sig5151.updates["has"](var_core_value_sigB542) || var_core_value_sigA56E != null && var_core_value_sigA56E.from && (var_core_value_sig5151.updates["has"](var_core_value_sigA56E.from["shapeId"]) || var_core_value_sig5151.deletes["has"](var_core_value_sigA56E.from["shapeId"])) || var_core_value_sigA56E != null && var_core_value_sigA56E.to && (var_core_value_sig5151.updates["has"](var_core_value_sigA56E.to["shapeId"]) || var_core_value_sig5151.deletes["has"](var_core_value_sigA56E.to["shapeId"])))) return;
    let var_core_value_sig1998 = var_core_value_sig5151.updates["get"](var_core_value_sigB542) ?? var_core_value_sigBB6C,
      var_core_value_sigFF19 = this._toSnapshot(var_core_value_sig5151, var_core_value_sig1998);
    if (!var_core_value_sigFF19) return;
    let var_core_value_sig43B8 = var_core_value_sig3B17(var_core_value_sigFF19);
    if (var_core_value_sig43B8.length < 2) return;
    let var_core_value_sigD98F = var_core_value_sigC7E7.deepClone(var_core_value_sigA56E ?? {}),
      var_core_value_sig66C0 = var_core_value_sigD98F.from && this._resolveBinding(var_core_value_sig5151, var_core_value_sigD98F.from["shapeId"], var_core_value_sigD98F.from["cxnIndex"]),
      var_core_value_sig9D15 = var_core_value_sigD98F.to && this._resolveBinding(var_core_value_sig5151, var_core_value_sigD98F.to["shapeId"], var_core_value_sigD98F.to["cxnIndex"]);
    var_core_value_sigD98F.from && !var_core_value_sig66C0 && delete var_core_value_sigD98F.from, var_core_value_sigD98F.to && !var_core_value_sig9D15 && delete var_core_value_sigD98F.to;
    let var_core_value_sigB785 = var_core_value_sig68A2(var_core_value_sigFF19, var_core_value_sig66C0 || var_core_value_sigFFD1((var_core_value_sig9D15 == null ? undefined : var_core_value_sig9D15.point) ?? var_core_value_sig43B8[var_core_value_sig43B8.length - 1], var_core_value_sig43B8[0]), var_core_value_sig9D15 || var_core_value_sigFFD1((var_core_value_sig66C0 == null ? undefined : var_core_value_sig66C0.point) ?? var_core_value_sig43B8[0], var_core_value_sig43B8[var_core_value_sig43B8.length - 1]), var_core_value_sigD98F);
    if (!(!(var_core_value_sigB785 != null && var_core_value_sigB785.transform) || !var_core_value_sigB785.shapeType || !var_core_value_sigB785.shapeData)) {
      if (this._applyUpdate(var_core_value_sig5151, var_core_value_sig1998, var_core_value_sigB785), var_core_value_sig5151.mode === "refresh") {
        var_core_value_sigB8C7.setShapeType(var_core_value_sigB785.shapeType), var_core_value_sigB8C7.setShapeData(var_core_value_sigC7E7.deepClone(var_core_value_sigB785.shapeData), false);
        return;
      }
      var_core_value_sigE2BF.redos["push"]({
        id: $.id,
        params: {
          unitId: var_core_value_sig5151.unitId,
          subUnitId: var_core_value_sig5151.subUnitId,
          shapeId: var_core_value_sigB542,
          shapeType: var_core_value_sigB785.shapeType,
          shapeData: var_core_value_sigC7E7.deepClone(var_core_value_sigB785.shapeData),
          replace: true
        }
      }), var_core_value_sigE2BF.undos["push"]({
        id: $.id,
        params: {
          unitId: var_core_value_sig5151.unitId,
          subUnitId: var_core_value_sig5151.subUnitId,
          shapeId: var_core_value_sigB542,
          shapeType: var_core_value_sigB8C7.getShapeType(),
          shapeData: var_core_value_sigC7E7.deepClone(var_core_value_sigB8C7.getShapeData()),
          replace: true
        }
      });
    }
  }
  _resolveBinding(var_core_value_sig130F, var_core_value_sigC0E3, var_core_value_sig52F7) {
    if (var_core_value_sig130F.deletes["has"](var_core_value_sigC0E3)) return null;
    let var_core_value_sig866F = var_core_value_sig130F.updates["get"](var_core_value_sigC0E3) ?? var_core_value_sig130F.originals["get"](var_core_value_sigC0E3);
    if (!var_core_value_sig866F) return null;
    let var_core_value_sigDE3D = this._toSnapshot(var_core_value_sig130F, var_core_value_sig866F);
    return var_core_value_sigDE3D ? var_core_value_sig6C4A(var_core_value_sigDE3D, var_core_value_sig52F7) : null;
  }
  _toSnapshot(var_core_value_sigF175, var_core_value_sig6A18) {
    let var_core_value_sig4E3D = {
        hostType: var_core_value_sig6E1C.UNIVER_SHEET,
        unitId: var_core_value_sigF175.unitId,
        subUnitId: var_core_value_sigF175.subUnitId,
        shapeId: var_core_value_sig6A18.drawingId
      },
      var_core_value_sig49B0 = this._shapeAdapter["getShape"](var_core_value_sig4E3D);
    return !var_core_value_sig49B0 || !var_core_value_sig6A18.transform ? null : {
      ...var_core_value_sig49B0,
      transform: {
        left: var_core_value_sig6A18.transform["left"] ?? 0,
        top: var_core_value_sig6A18.transform["top"] ?? 0,
        width: var_core_value_sig6A18.transform["width"] ?? 0,
        height: var_core_value_sig6A18.transform["height"] ?? 0,
        rotation: var_core_value_sig6A18.transform["angle"] ?? 0,
        flipX: var_core_value_sig6A18.transform["flipX"] ?? false,
        flipY: var_core_value_sig6A18.transform["flipY"] ?? false
      }
    };
  }
  _applyUpdate(var_core_value_sig2547, var_core_value_sigBCA9, var_core_value_sig4CDF) {
    let var_core_value_sig3F79 = var_core_value_sigBCA9,
      var_core_value_sig880E = {
        ...var_core_value_sigBCA9.transform,
        left: var_core_value_sig4CDF.transform["left"],
        top: var_core_value_sig4CDF.transform["top"],
        width: var_core_value_sig4CDF.transform["width"],
        height: var_core_value_sig4CDF.transform["height"],
        angle: var_core_value_sig4CDF.transform["rotation"],
        flipX: var_core_value_sig4CDF.transform["flipX"],
        flipY: var_core_value_sig4CDF.transform["flipY"]
      },
      var_core_value_sigC9ED = {
        ...var_core_value_sig3F79,
        transform: var_core_value_sig880E,
        sheetTransform: var_core_value_sig1DCE(var_core_value_sig880E, var_core_value_sig2547.skeleton),
        axisAlignSheetTransform: var_core_value_sig7428(var_core_value_sig880E, var_core_value_sig2547.skeleton),
        data: {
          ...var_core_value_sig3F79.data,
          shapeType: var_core_value_sig4CDF.shapeType,
          shapeData: var_core_value_sigC7E7.deepClone(var_core_value_sig4CDF.shapeData)
        }
      };
    var_core_value_sig2547.updates["set"](var_core_value_sigBCA9.drawingId, var_core_value_sigC9ED);
  }
};
Ee = le([Z(0, var_core_value_sigD2BA(Q)), Z(1, var_core_value_sigD2BA(Ce)), Z(2, var_core_value_sigD2BA(var_core_value_sigE7A6))], Ee);
let De = class extends var_core_value_sig519D {
  constructor(var_core_value_sigB57B = we, var_core_value_sig780B, var_core_value_sig7D1B) {
    super(), this._config = var_core_value_sigB57B, this._injector = var_core_value_sig780B, this._configService = var_core_value_sig7D1B;
    let {
      ...var_core_value_sig7BE0
    } = var_core_value_sig413D({}, we, this._config);
    this._configService["setConfig"]("sheets-shape.config", var_core_value_sig7BE0);
  }
  onStarting() {
    let var_core_value_sig7D40 = this._injector;
    [[ce], [Q], [Ce], [Ee], [Te]].forEach(var_core_value_sigF593 => var_core_value_sig7D40.add(var_core_value_sigF593)), var_core_value_sig8EF0(var_core_value_sig7D40, [[Q], [Ee], [Te]]);
  }
};
X(De, "type", var_core_value_sig6E1C.UNIVER_SHEET), X(De, "pluginName", "SHEET_SHAPE_PLUGIN"), X(De, "packageName", be), X(De, "version", xe), De = le([var_core_value_sig737C(var_core_value_sig0567, var_core_value_sigEACD, var_core_value_sig0DB1, var_core_value_sigD57D, var_core_value_sigB505), Z(1, var_core_value_sigD2BA(var_core_value_sigCD3A)), Z(2, var_core_value_sigA4A7)], De);
export { ie as DEFAULT_SHAPE_HEIGHT, re as DEFAULT_SHAPE_WIDTH, fe as InsertShapeCommand, ue as InsertSheetsShapeMutation, de as RemoveSheetsShapeMutation, pe as SetShapeDrawingDataCommand, he as SetSheetsShapeRotateCommand, ge as SetSheetsShapeTextVerticalToggleCommand, Q as SheetsShapeService, me as ToggleSheetsShapeFlipCommand, De as UniverSheetsShapePlugin, _e as UpdateConnectorRelationCommand, ve as UpdateLineShapeResizeCommand, $ as UpdateSheetsShapeDataMutation, ye as UpdateSheetsShapeTypeMutation };
