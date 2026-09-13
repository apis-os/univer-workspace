import { IConnectorShapeHostAdapter, IShapeHostAdapterRegistry, ImageFillModeEnum, ImageSourceTypeEnum, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeGradientTypeEnum, ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeModel, ShapeOperatorEnum, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, SmartArtOperationTypeEnum, applyRichTextToShapeText, applyShapeTextAlignment, applyShapeTextBoxOptions, applyShapeTextStyle, applyTextToShapeText, isConnectorShape, isSmartArtShapeData, parseSvgPathData, resolveShapeTextBoxOptions, shapeTextToRichTextValue } from '@univerjs-pro/engine-shape';
import { FBase, FEnum } from '@univerjs/core/facade';
import { BooleanNumber, ICommandService, Tools } from '@univerjs/core';
import { L } from "./facade-engine-shape-fshape-text.js";
var B;
function V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406.pathLst &&= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406.pathLst['map'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132 => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133;
    if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132.dataArray) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133.length) {
      let {
        data: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615,
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132;
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616;
    }
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132.data === undefined) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134 = parseSvgPathData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132.data),
      {
        data: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135,
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132;
    return {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136,
      'dataArray': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134
    };
  }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406;
}
let H = B = class extends FBase {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145) {
    super(), this._shapeRef = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142, this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143, this._shapeHostAdapterRegistry = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145;
  }
  isConnectorShape() {
    return false;
  }
  getId() {
    return this._shapeRef["shapeId"];
  }
  getName() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150;
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150 = this._getSnapshot()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150.name;
  }
  setName(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152) {
    return this.update({
      'name': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152
    });
  }
  getDescription() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154;
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154 = this._getSnapshot()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154.description;
  }
  setDescription(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156) {
    return this.update({
      'description': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156
    });
  }
  getHostType() {
    return this._shapeRef["hostType"];
  }
  getShapeType() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158;
    return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158 = this._getSnapshot()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158.shapeType) ?? null;
  }
  getShapeData() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46160 = this._getSnapshot();
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46160 ? Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46160.shapeData) : null;
  }
  isSmartArt() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162 = this._getSnapshot()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162.shapeData;
    return !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163 && isSmartArtShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163);
  }
  getSmartArtData() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166 = this._getSnapshot()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166.shapeData;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167 && isSmartArtShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167) ? Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167.smartArt) : null;
  }
  setSmartArtData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170) {
    return this._updateSmartArt({
      'type': SmartArtOperationTypeEnum.Replace,
      'data': Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170)
    });
  }
  insertSmartArtNode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172) {
    return this._updateSmartArt({
      'type': SmartArtOperationTypeEnum.InsertNode,
      'nodeId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172.node['id'],
      'node': Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172.node),
      'targetNodeId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172.targetNodeId,
      'position': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172.position
    });
  }
  deleteSmartArtNode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174) {
    return this._updateSmartArt({
      'type': SmartArtOperationTypeEnum.DeleteNode,
      'nodeId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174
    });
  }
  moveSmartArtNode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176) {
    return this._updateSmartArt({
      'type': SmartArtOperationTypeEnum.MoveNode,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176
    });
  }
  promoteSmartArtNode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178) {
    return this._updateSmartArt({
      'type': SmartArtOperationTypeEnum.PromoteNode,
      'nodeId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178
    });
  }
  demoteSmartArtNode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180) {
    return this._updateSmartArt({
      'type': SmartArtOperationTypeEnum.DemoteNode,
      'nodeId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180
    });
  }
  updateSmartArtNode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183) {
    return this._updateSmartArt({
      'type': SmartArtOperationTypeEnum.UpdateNode,
      'nodeId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182,
      'update': Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183)
    });
  }
  setSmartArtDirection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186) {
    return this._updateSmartArt({
      'type': SmartArtOperationTypeEnum.SetDirection,
      'direction': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186
    });
  }
  setSmartArtLayout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189) {
    return this._updateSmartArt({
      'type': SmartArtOperationTypeEnum.SetLayout,
      'layoutId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188,
      'category': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189
    });
  }
  updateSmartArtPresentationShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193) {
    return this._updateSmartArt({
      'type': SmartArtOperationTypeEnum.UpdatePresentationShape,
      'presentationShapeId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192,
      'update': Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193)
    });
  }
  convertSmartArtToShapes() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196 = this._getAdapter();
    if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196.convertSmartArtToShapes)) return console.warn("[Shape Facade]: The current Shape host cannot convert SmartArt \"" + this._shapeRef["shapeId"] + '\x22.'), [];
    try {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196.convertSmartArtToShapes(this._shapeRef);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 => this._injector["createInstance"](B, {
        'hostType': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.hostType,
        'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.unitId,
        'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.subUnitId,
        'shapeId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.shapeId
      }, this._injector)) : (console.warn('[Shape\x20Facade]:\x20Failed\x20to\x20convert\x20SmartArt\x20Shape\x20\x22' + this._shapeRef["shapeId"] + '\x22.'), []);
    } catch (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC54) {
      return console.warn("[Shape Facade]: Failed to convert SmartArt Shape \"" + this._shapeRef["shapeId"] + '\x22.', var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC54), [];
    }
  }
  getSnapshot() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198 = this._getSnapshot();
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198 ? Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198) : null;
  }
  getTransform() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200 = this._getSnapshot();
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200 ? {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200.transform
    } : null;
  }
  isVisible() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202;
    return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202 = this._getSnapshot()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202.visible) ?? false;
  }
  setVisible(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204) {
    return this.update({
      'visible': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204
    });
  }
  isSelectable() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206;
    return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206 = this._getSnapshot()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206.selectable) ?? false;
  }
  setSelectable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208) {
    return this.update({
      'selectable': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208
    });
  }
  getText() {
    return this._injector["createInstance"](L, this._shapeRef, this._injector);
  }
  isCustomShape() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210 = this.getShapeData();
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210.isCustom) === true && !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210.customGeometry;
  }
  getCustomGeometry() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212;
    return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212 = this.getShapeData()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212.customGeometry) ?? null;
  }
  setShapeType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214) {
    return this._patchShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618 => ({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618,
      'shapeType': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214);
  }
  setShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216);
    return this.update({
      'shapeType': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217.shapeType,
      'shapeData': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217
    });
  }
  setTransform(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46220) {
    return this.update({
      'transform': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46220
    });
  }
  setSize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46222, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223) {
    return this.setTransform({
      'width': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46222,
      'height': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223
    });
  }
  setRotation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226) {
    return this.setTransform({
      'rotation': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226
    });
  }
  setAbsolutePosition(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229) {
    return this.setTransform({
      'left': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228,
      'top': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229
    });
  }
  setCustomGeometry(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234;
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232.cxnLst) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233.findIndex(({
      x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619,
      y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620
    }) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619 === undefined || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620 === undefined)) ?? -1;
    if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D >= 0) return console.warn('[Shape\x20Facade]:\x20Custom\x20geometry\x20connection\x20site\x20' + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D + " requires both \"x\" and \"y\"."), this;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235 = V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232);
    if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235.cxnLst) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234.length) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621 = this._getSnapshot();
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621) return this;
      try {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461 = new ShapeModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621.shapeType, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621.shapeId, {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621.shapeData,
          'isCustom': true,
          'customGeometry': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235
        });
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461.updateContext({
          'width': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621.transform['width'],
          'height': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621.transform["height"]
        }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461.getConnectionSiteList();
      } catch {
        return console.warn("[Shape Facade]: Custom geometry connection sites must resolve to finite coordinates."), this;
      }
    }
    return this._patchShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622 => ({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622,
      'isCustom': true,
      'customGeometry': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235
    }));
  }
  setCustomGeometryFromSvgPath(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46240) {
    return this.setCustomGeometry({
      'rect': {
        'l': 0,
        't': 0,
        'r': 'r',
        'b': 'b'
      },
      'pathLst': [{
        'w': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46240.width,
        'h': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46240.height,
        'fill': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46240.fill,
        'stroke': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46240.stroke,
        'data': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46240.pathData
      }]
    });
  }
  getConnectionSites() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242;
    return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242 = this._getGeometryModel()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242.getConnectionSiteList().map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623 => ({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623
    }))) ?? [];
  }
  getStartConnectInfo() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46244;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46244 = this._getGeometryModel()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46244.getStartConnectInfo();
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245 ? {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245
    } : null;
  }
  getEndConnectInfo() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248 = this._getGeometryModel()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248.getEndConnectInfo();
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249 ? {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249
    } : null;
  }
  getAdjustHandles() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253 = this._getGeometryModel(),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253.getPresetShapeConfig().ahLst) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252.length) ?? 0;
    return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253 || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 === 0 ? [] : Array.from({
      'length': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2
    }, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253.getAdjustInfo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625)).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626 !== undefined).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627 => Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627));
  }
  setAdjustValues(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256) {
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A = Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256);
    if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A.length === 0) return this;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257 = this._getGeometryModel();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257) return this;
    let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299 = new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257.getAdjustNames());
    for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629] of var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A) {
      if (!var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628)) return console.warn('[Shape\x20Facade]:\x20Shape\x20adjustment\x20\x22' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628 + '\x22\x20does\x20not\x20exist.'), this;
      if (!Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629)) return console.warn("[Shape Facade]: Shape adjustment \"" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628 + "\" must be finite."), this;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46258 = Object.fromEntries(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A.map(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631]) => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257.setAdjustValueByName(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631)]));
    return this._patchShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632 => ({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632,
      'adjustValues': {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632.adjustValues,
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46258
      }
    }));
  }
  resetAdjustValues() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46262 = this.getShapeData();
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46262 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46262.adjustValues ? (delete var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46262.adjustValues, this.update({
      'shapeData': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46262
    })) : this;
  }
  setSolidFill(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265) {
    return this._patchShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633 => ({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633,
      'fill': {
        'fillType': ShapeFillEnum.SolidFill,
        'color': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264,
        'opacity': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265
      }
    }));
  }
  setGradientFill(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46269, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46269.length < 2 ? (console.warn('[Shape\x20Facade]:\x20Gradient\x20fill\x20requires\x20at\x20least\x20two\x20color\x20stops.'), this) : this._patchShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634 => ({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634,
      'fill': {
        'fillType': ShapeFillEnum.GradientFill,
        'gradientType': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268,
        'gradientStops': Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46269),
        'gradientAngle': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270
      }
    }));
  }
  setImageFill(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46274, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46275, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276 = {}) {
    return this._patchShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635 => ({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635,
      'fill': {
        ...Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276),
        'fillType': ShapeFillEnum.PictureFill,
        'fillImageSource': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46274,
        'fillImageSourceType': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46275
      }
    }));
  }
  setNoneFill() {
    return this._patchShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636 => ({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636,
      'fill': {
        'fillType': ShapeFillEnum.NoFill
      }
    }));
  }
  setStroke(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280) {
    return this._patchShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637 => ({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637,
      'stroke': Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280)
    }));
  }
  setStrokeColor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282) {
    return this._patchStroke(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638 => ({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638,
      'color': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282,
      'lineStrokeType': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638.lineStrokeType === ShapeLineTypeEnum.NoLine ? ShapeLineTypeEnum.SolidLine : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638.lineStrokeType
    }));
  }
  setStrokeWidth(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284) {
    return this._patchStroke(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639 => ({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639,
      'width': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284,
      'lineStrokeType': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639.lineStrokeType === ShapeLineTypeEnum.NoLine ? ShapeLineTypeEnum.SolidLine : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639.lineStrokeType
    }));
  }
  setStrokeOpacity(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286) {
    return this._patchStroke(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640 => ({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640,
      'opacity': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286
    }));
  }
  setStrokeLineDashType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288) {
    return this._patchStroke(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641 => ({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641,
      'dashType': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288
    }));
  }
  setStrokeLineJoinType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46290) {
    return this._patchStroke(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642 => ({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642,
      'lineJoinType': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46290
    }));
  }
  setStrokeLineCapType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292) {
    return this._patchStroke(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643 => ({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643,
      'capType': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292
    }));
  }
  setStrokeLineType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294) {
    return this._patchStroke(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644 => ({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644,
      'lineStrokeType': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294
    }));
  }
  update(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296.shapeData,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298 && ("relation" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298 || "points" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298) ? this.getShapeType() : null,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296.shapeType ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296.shapeData) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297.shapeType) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301 = U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300 !== null && isConnectorShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300));
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301 ? (console.warn('[Shape\x20Facade]:\x20' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301), this) : (this._mutate("update", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645.updateShape(this._shapeRef, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296)), this);
  }
  remove() {
    return this._mutate("remove", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646.removeShape(this._shapeRef));
  }
  bringToFront() {
    return this._mutate('bring\x20to\x20front', var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647.bringToFront(this._shapeRef)), this;
  }
  bringForward() {
    return this._mutate("bring forward", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648.bringForward(this._shapeRef)), this;
  }
  sendBackward() {
    return this._mutate("send backward", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649.sendBackward(this._shapeRef)), this;
  }
  sendToBack() {
    return this._mutate("send to back", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650.sendToBack(this._shapeRef)), this;
  }
  setZOrder(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46308) {
    return this._mutate("set z-order", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651.setZOrder(this._shapeRef, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46308)), this;
  }
  _getAdapter() {
    return this._shapeHostAdapterRegistry['get'](this._shapeRef['hostType']);
  }
  _patchShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312 = this.getShapeData();
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312 ? this.update({
      'shapeType': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311,
      'shapeData': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312)
    }) : this;
  }
  _updateSmartArt(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317 = this._getAdapter();
    return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317 || !this.isSmartArt() ? (console.warn("[Shape Facade]: Shape \"" + this._shapeRef["shapeId"] + "\" is not SmartArt."), this) : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317.updateShape(this._shapeRef, {
      'smartArtOperations': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316
    }) || console.warn("[Shape Facade]: Failed to update SmartArt Shape \"" + this._shapeRef["shapeId"] + '\x22.'), this);
  }
  _patchStroke(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320) {
    return this._patchShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652 => ({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652,
      'stroke': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652.stroke ?? {})
    }));
  }
  _getSnapshot() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46322 = this._getAdapter();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46322) return null;
    try {
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46322.getShape(this._shapeRef) || (console.warn("[Shape Facade]: Shape \"" + this._shapeRef["shapeId"] + "\" was not found."), null);
    } catch (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC56) {
      return console.warn("[Shape Facade]: Failed to read Shape \"" + this._shapeRef["shapeId"] + '\x22.', var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC56), null;
    }
  }
  _getGeometryModel() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46324 = this._getSnapshot();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46324) return null;
    try {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653 = new ShapeModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46324.shapeType, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46324.shapeId, Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46324.shapeData));
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653.updateContext({
        'width': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46324.transform["width"],
        'height': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46324.transform['height']
      }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653;
    } catch (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC58) {
      return console.warn("[Shape Facade]: Failed to resolve geometry for Shape \"" + this._shapeRef['shapeId'] + '\x22.', var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC58), null;
    }
  }
  _mutate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328 = this._getAdapter();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328) return false;
    try {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654 || console.warn("[Shape Facade]: Failed to " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326 + '\x20Shape\x20\x22' + this._shapeRef["shapeId"] + '\x22.'), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654;
    } catch (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC510) {
      return console.warn("[Shape Facade]: Failed to " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326 + " Shape \"" + this._shapeRef["shapeId"] + '\x22.', var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC510), false;
    }
  }
};
function U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46410 = false) {
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46332 of ["visible", "selectable"]) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46332];
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655 !== undefined && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655 != "boolean") return "Shape \"" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46332 + "\" must be boolean.";
  }
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46411 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409.transform;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46411) {
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656 of ["left", "top", "width", 'height', "rotation"]) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46411[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656];
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462 !== undefined && !Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462)) return "Shape transform \"" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656 + "\" must be finite.";
    }
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46411.width !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46411.width <= 0) return 'Shape\x20width\x20must\x20be\x20greater\x20than\x20zero.';
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46411.height !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46411.height <= 0) return "Shape height must be greater than zero.";
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657 of ['flipX', "flipY"]) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46411[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657];
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 !== undefined && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 != "boolean") return "Shape transform \"" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657 + '\x22\x20must\x20be\x20boolean.';
    }
  }
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46412 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409.shapeData;
  return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46410 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46412 && ("relation" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46412 || "points" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46412) ? "Connector relationships and route points require FConnectorShape." : null;
}
export { H as FShape };
export { B };
