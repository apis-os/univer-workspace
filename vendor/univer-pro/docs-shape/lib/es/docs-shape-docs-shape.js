import { IConnectorShapeHostAdapter, IShapeHostAdapterRegistry, ShapeModel, UniverShapePlugin, canApplyShapeFormulaLastValue, createDefaultInsertedShapeData, isConnectorShape } from "@univerjs-pro/engine-shape";
import { ArrangeTypeEnum, BooleanNumber, CommandType, DependentOn, Disposable, DrawingTypeEnum, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, JSONX, Plugin, Tools, UniverInstanceType, WrapTextType, generateRandomId, getParagraphContentStartOffset, merge, touchDependencies } from "@univerjs/core";
import { IDocDrawingAdapterService, InsertDocDrawingCommand, RemoveDocDrawingCommand, SetDocDrawingArrangeCommand, TextWrappingStyle, UniverDocsDrawingPlugin, UpdateDrawingDocTransformCommand, WRAPPING_STYLE_TO_LAYOUT_TYPE } from "@univerjs/docs-drawing";
import { RichTextEditingMutation, buildDocTransform, docDrawingPositionToTransform } from "@univerjs/docs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { F } from "./internal-core-endo.js";
import { z } from "./docs-shape-plugin.js";
var I = class extends Disposable {
  constructor(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667) {
    super(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667), F(this, "shapes", new Map()), F(this, "_lineIds", new Set());
  }
  addShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672 = new ShapeModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671);
    return this.shapes["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672), isConnectorShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669) && this._lineIds["add"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672;
  }
  removeShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678 = this.shapes["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678 && (isConnectorShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678.getShapeType()) && this._lineIds["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678.dispose(), this.shapes["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677));
  }
  getShapeType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682;
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682 = this.shapes["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682.getShapeType();
  }
  getShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686;
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686 = this.shapes["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686.getShapeData();
  }
  hasShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689) {
    return this.shapes["has"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689);
  }
  getBasicShapeRelation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691) {
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2 = [];
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610 of this._lineIds) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462 = this.shapes["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462.getShapeRelation();
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 && (((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463.from) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692.shapeId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2.push({
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463.from,
        lineShapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610,
        isFrom: true
      }), ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463.to) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693.shapeId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2.push({
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463.to,
        lineShapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610,
        isFrom: false
      }));
    }
    return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2;
  }
  getLineShapeRelation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698;
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698 = this.shapes["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698.getShapeRelation();
  }
  toJSON() {
    return Array.from(this.shapes["values"]()).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611.toJSON());
  }
  fromJSON(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101) {
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101) {
      let {
        id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464,
        shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612;
      this.addShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612.shapeData);
    }
  }
  dispose() {
    this._disposed || (this.shapes["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613.dispose()), this.shapes["clear"](), this._lineIds["clear"](), super.dispose());
  }
};
let B = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107) {
    super(), this._resourcesManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107, F(this, "_shapeModelManagerMap", new Map()), this._initSnapshot();
  }
  _ensureShapeModelManager(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110 = this._shapeModelManagerMap["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110 = new I(), this._shapeModelManagerMap["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110;
  }
  insertShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116) {
    this._ensureShapeModelManager(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113).addShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116);
  }
  removeShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46121, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122) {
    this._ensureShapeModelManager(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46121).removeShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122);
  }
  getShapeType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127) {
    return this._ensureShapeModelManager(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125).getShapeType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127 ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126);
  }
  getShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133) {
    return this._ensureShapeModelManager(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131).getShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133 ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132);
  }
  hasShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138) {
    return this._ensureShapeModelManager(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137).hasShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138);
  }
  getShapeTypeById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46141, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143) {
    return this.getShapeType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46141, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143 ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142);
  }
  getShapeDataById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149) {
    return this.getShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149 ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148);
  }
  getShapeModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155) {
    return this._ensureShapeModelManager(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153).shapes["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155 ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154);
  }
  getBasicShapeRelation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46160) {
    return this._ensureShapeModelManager(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159).getBasicShapeRelation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46160);
  }
  getLineShapeRelation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164) {
    return this._ensureShapeModelManager(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163).getLineShapeRelation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164);
  }
  _serializeShapeForUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168;
    return JSON.stringify(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168 = this._shapeModelManagerMap["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168.toJSON()) ?? []);
  }
  _deserializeShapeForUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172) {
    this._ensureShapeModelManager(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171).fromJSON(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172);
  }
  toJSON() {
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1 = {};
    return this._shapeModelManagerMap["forEach"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615) => {
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614.toJSON();
    }), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1;
  }
  fromJSON(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46175) {
    Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46175).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618 => {
      this._ensureShapeModelManager(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618).fromJSON(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46175[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618]);
    });
  }
  _initSnapshot() {
    this._resourcesManagerService["registerPluginResource"]({
      pluginName: z,
      businesses: [UniverInstanceType.UNIVER_DOC],
      toJson: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620 => this._serializeShapeForUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620),
      parseJson: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621 => JSON.parse(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621),
      onLoad: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623) => this._deserializeShapeForUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623 ?? []),
      onUnLoad: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624 => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625;
        (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625 = this._shapeModelManagerMap["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624)) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625.dispose(), this._shapeModelManagerMap["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624);
      }
    });
  }
  dispose() {
    this._shapeModelManagerMap["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628.dispose()), this._shapeModelManagerMap["clear"](), super.dispose();
  }
};
export { B as DocsShapeService };
