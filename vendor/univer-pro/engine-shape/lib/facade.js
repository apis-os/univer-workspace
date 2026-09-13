import { IConnectorShapeHostAdapter as var_core_value_sigF051, IShapeHostAdapterRegistry as var_core_value_sig5825, ImageFillModeEnum as var_core_value_sig4EB7, ImageSourceTypeEnum as var_core_value_sig73AF, ShapeArrowSizeEnum as var_core_value_sig548A, ShapeArrowTypeEnum as var_core_value_sigE026, ShapeFillEnum as var_core_value_sig339E, ShapeGradientTypeEnum as var_core_value_sig7550, ShapeLineCapEnum as var_core_value_sig2983, ShapeLineDashEnum as var_core_value_sigE1B0, ShapeLineJoinEnum as var_core_value_sigD4FF, ShapeLineTypeEnum as var_core_value_sig1E5B, ShapeModel as var_core_value_sigB680, ShapeOperatorEnum as var_core_value_sig1F64, ShapeTextAutoFitType as var_core_value_sigDD1C, ShapeTextDirection as var_core_value_sig2C39, ShapeTextWrapType as var_core_value_sigB7D1, ShapeTypeEnum as var_core_value_sig64F0, SmartArtOperationTypeEnum as var_core_value_sig85B1, applyRichTextToShapeText as var_core_value_sig3141, applyShapeTextAlignment as var_core_value_sig2162, applyShapeTextBoxOptions as var_core_value_sig2EAD, applyShapeTextStyle as var_core_value_sig6774, applyTextToShapeText as var_core_value_sig340D, isConnectorShape as var_core_value_sig82D4, isSmartArtShapeData as var_core_value_sigBDE4, parseSvgPathData as var_core_value_sig7DF1, resolveShapeTextBoxOptions as var_core_value_sigDC86, shapeTextToRichTextValue as var_core_value_sig0B0C } from '@univerjs-pro/engine-shape';
import { FBase as var_core_value_sigA39E, FEnum as var_core_value_sigBBEE } from '@univerjs/core/facade';
import { BooleanNumber as var_core_value_sig011D, ICommandService as var_core_value_sig6167, Tools as var_core_value_sig65A1 } from '@univerjs/core';
var P = class extends var_core_value_sigBBEE {
  get ShapeTypeEnum() {
    return var_core_value_sig64F0;
  }
  get ShapeFillEnum() {
    return var_core_value_sig339E;
  }
  get ShapeGradientTypeEnum() {
    return var_core_value_sig7550;
  }
  get ShapeImageFillModeEnum() {
    return var_core_value_sig4EB7;
  }
  get ShapeImageSourceTypeEnum() {
    return var_core_value_sig73AF;
  }
  get ShapeLineTypeEnum() {
    return var_core_value_sig1E5B;
  }
  get ShapeLineDashEnum() {
    return var_core_value_sigE1B0;
  }
  get ShapeLineCapEnum() {
    return var_core_value_sig2983;
  }
  get ShapeLineJoinEnum() {
    return var_core_value_sigD4FF;
  }
  get ShapeOperatorEnum() {
    return var_core_value_sig1F64;
  }
  get ShapeArrowTypeEnum() {
    return var_core_value_sigE026;
  }
  get ShapeArrowSizeEnum() {
    return var_core_value_sig548A;
  }
  get ShapeTextAutoFitType() {
    return var_core_value_sigDD1C;
  }
  get ShapeTextDirection() {
    return var_core_value_sig2C39;
  }
  get ShapeTextWrapType() {
    return var_core_value_sigB7D1;
  }
};
var_core_value_sigBBEE.extend(P);
function F(var_core_value_sig63F3) {
  switch (var_core_value_sig63F3) {
    case var_core_value_sig7550.Radial:
      return "radial";
    case var_core_value_sig7550.Angular:
      return "angular";
    case var_core_value_sig7550.Diamond:
      return "diamond";
    case var_core_value_sig7550.Linear:
    default:
      return "linear";
  }
}
;
function I(var_core_value_sig6A71) {
  return var_core_value_sig6A71 === var_core_value_sig4EB7.Tile ? "tile" : "stretch";
}
var L = class {
  constructor(var_core_value_sigE67E, var_core_value_sig2902) {
    this._shapeRef = var_core_value_sigE67E, this._injector = var_core_value_sig2902;
  }
  getRichText() {
    var var_core_value_sig9989;
    return var_core_value_sig0B0C((var_core_value_sig9989 = this._getShapeData()) == null ? undefined : var_core_value_sig9989.shapeText);
  }
  getPlainText() {
    var var_core_value_sig698E;
    return ((var_core_value_sig698E = this.getRichText()) == null ? undefined : var_core_value_sig698E.toPlainText()) ?? null;
  }
  setRichText(var_core_value_sig2809) {
    return this._updateShapeData(var_core_value_sigBC46 => ({
      ...var_core_value_sigBC46,
      'shapeText': var_core_value_sig3141(var_core_value_sigBC46.shapeText, var_core_value_sig2809)
    })), this;
  }
  setText(var_core_value_sig2DAB) {
    return this._updateShapeData(var_core_value_sig3D7D => ({
      ...var_core_value_sig3D7D,
      'shapeText': var_core_value_sig340D(var_core_value_sig3D7D.shapeText, var_core_value_sig2DAB)
    })), this;
  }
  setTextStyle(var_core_value_sig877E) {
    return this._updateShapeData(var_core_value_sig27E5 => ({
      ...var_core_value_sig27E5,
      'shapeText': var_core_value_sig6774(var_core_value_sig27E5.shapeText, var_core_value_sig877E)
    })), this;
  }
  setColor(var_core_value_sig20C8, var_core_value_sigE9A7) {
    return this.setTextStyle({
      'cl': {
        'rgb': var_core_value_sig20C8
      },
      'textFill': {
        'type': 'solid',
        'color': var_core_value_sig20C8,
        'opacity': var_core_value_sigE9A7
      }
    });
  }
  setNoneFill() {
    return this.setTextStyle({
      'cl': {
        'rgb': "rgba(0, 0, 0, 0)"
      },
      'textFill': {
        'type': 'none'
      }
    });
  }
  setGradientFill(var_core_value_sigBECE, var_core_value_sig1B22, var_core_value_sig7F72) {
    return var_core_value_sig1B22.length < 2 ? (console.warn("[Shape Text Facade]: Gradient text fill requires at least two color stops."), this) : this.setTextStyle({
      'cl': {
        'rgb': var_core_value_sig1B22[0].color
      },
      'textFill': {
        'type': "gradient",
        'gradient': {
          'type': F(var_core_value_sigBECE),
          'angle': var_core_value_sig7F72,
          'stops': var_core_value_sig1B22.map(({
            position: var_core_value_sig8061,
            color: var_core_value_sig4D4C,
            opacity: var_core_value_sigC9E0
          }) => ({
            'offset': var_core_value_sig8061,
            'color': var_core_value_sig4D4C,
            'opacity': var_core_value_sigC9E0
          }))
        }
      }
    });
  }
  setImageFill(var_core_value_sig7B2A, var_core_value_sig06CD = var_core_value_sig73AF.URL, var_core_value_sigA5F1 = {}) {
    return this.setTextStyle({
      'textFill': {
        'type': "picture",
        'picture': {
          'source': var_core_value_sig7B2A,
          'sourceType': var_core_value_sig06CD,
          'opacity': var_core_value_sigA5F1.opacity,
          'mode': I(var_core_value_sigA5F1.mode),
          'scaleX': var_core_value_sigA5F1.scaleX,
          'scaleY': var_core_value_sigA5F1.scaleY,
          'offsetX': var_core_value_sigA5F1.offsetX,
          'offsetY': var_core_value_sigA5F1.offsetY
        }
      }
    });
  }
  setFontSize(var_core_value_sig97A2) {
    return this.setTextStyle({
      'fs': var_core_value_sig97A2
    });
  }
  setFontFamily(var_core_value_sig07E9) {
    return this.setTextStyle({
      'ff': var_core_value_sig07E9
    });
  }
  setBold(var_core_value_sig4F59) {
    return this.setTextStyle({
      'bl': var_core_value_sig4F59 ? var_core_value_sig011D.TRUE : var_core_value_sig011D.FALSE
    });
  }
  setItalic(var_core_value_sigF564) {
    return this.setTextStyle({
      'it': var_core_value_sigF564 ? var_core_value_sig011D.TRUE : var_core_value_sig011D.FALSE
    });
  }
  setUnderline(var_core_value_sig8CFA) {
    return this.setTextStyle({
      'ul': {
        's': var_core_value_sig8CFA ? var_core_value_sig011D.TRUE : var_core_value_sig011D.FALSE
      }
    });
  }
  setStrikethrough(var_core_value_sig2E11) {
    return this.setTextStyle({
      'st': {
        's': var_core_value_sig2E11 ? var_core_value_sig011D.TRUE : var_core_value_sig011D.FALSE
      }
    });
  }
  setHorizontalAlign(var_core_value_sig5B69) {
    return this._updateShapeData(var_core_value_sig76BA => var_core_value_sig2162(var_core_value_sig76BA, {
      'horizontalAlign': var_core_value_sig5B69
    })), this;
  }
  setVerticalAlign(var_core_value_sigB098) {
    return this._updateShapeData(var_core_value_sigFBFA => var_core_value_sig2162(var_core_value_sigFBFA, {
      'verticalAlign': var_core_value_sigB098
    })), this;
  }
  getTextBoxOptions() {
    let var_core_value_sigCE71 = this._getShapeData();
    return var_core_value_sigCE71 ? var_core_value_sigDC86(var_core_value_sigCE71) : null;
  }
  setTextBoxOptions(var_core_value_sig21D8) {
    return this._updateShapeData(var_core_value_sigF602 => var_core_value_sig2EAD(var_core_value_sigF602, var_core_value_sig21D8)), this;
  }
  _getAdapter() {
    return this._injector['get'](var_core_value_sig5825).get(this._shapeRef['hostType']);
  }
  _getShapeData() {
    let var_core_value_sig2B65 = this._getAdapter();
    if (!var_core_value_sig2B65) return null;
    try {
      var var_core_value_sigD7EA;
      return ((var_core_value_sigD7EA = var_core_value_sig2B65.getShape(this._shapeRef)) == null ? undefined : var_core_value_sigD7EA.shapeData) || (console.warn("[Shape Text Facade]: Shape \"" + this._shapeRef["shapeId"] + '\x22\x20was\x20not\x20found.'), null);
    } catch (var_core_value_sig1BBD) {
      return console.warn("[Shape Text Facade]: Failed to read Shape \"" + this._shapeRef["shapeId"] + "\" text.", var_core_value_sig1BBD), null;
    }
  }
  _updateShapeData(var_core_value_sigB33B) {
    let var_core_value_sig24B9 = this._getAdapter();
    if (!var_core_value_sig24B9) return false;
    try {
      var var_core_value_sigE627;
      let var_core_value_sigF704 = (var_core_value_sigE627 = var_core_value_sig24B9.getShape(this._shapeRef)) == null ? undefined : var_core_value_sigE627.shapeData;
      if (!var_core_value_sigF704) return console.warn('[Shape\x20Text\x20Facade]:\x20Shape\x20\x22' + this._shapeRef["shapeId"] + "\" was not found."), false;
      let var_core_value_sig2BCF = var_core_value_sig24B9.updateShape(this._shapeRef, {
        'shapeData': var_core_value_sigB33B(var_core_value_sigF704)
      });
      return var_core_value_sig2BCF || console.warn("[Shape Text Facade]: Failed to update Shape \"" + this._shapeRef["shapeId"] + "\" text."), var_core_value_sig2BCF;
    } catch (var_core_value_sig0D69) {
      return console.warn("[Shape Text Facade]: Failed to update Shape \"" + this._shapeRef["shapeId"] + "\" text.", var_core_value_sig0D69), false;
    }
  }
};
function R(var_core_value_sig3BF6, var_core_value_sig38CE) {
  return function (var_core_value_sigEF3E, var_core_value_sig273D) {
    var_core_value_sig38CE(var_core_value_sigEF3E, var_core_value_sig273D, var_core_value_sig3BF6);
  };
}
;
function z(var_core_value_sig62B7, var_core_value_sig37A8, var_core_value_sigA90D, var_core_value_sig7A3C) {
  var var_core_value_sig0511 = arguments.length,
    var_core_value_sig1F44 = var_core_value_sig0511 < 3 ? var_core_value_sig37A8 : var_core_value_sig7A3C === null ? var_core_value_sig7A3C = Object.getOwnPropertyDescriptor(var_core_value_sig37A8, var_core_value_sigA90D) : var_core_value_sig7A3C,
    var_core_value_sigCB04;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sig1F44 = Reflect.decorate(var_core_value_sig62B7, var_core_value_sig37A8, var_core_value_sigA90D, var_core_value_sig7A3C);else {
    for (var var_core_value_sig947E = var_core_value_sig62B7.length - 1; var_core_value_sig947E >= 0; var_core_value_sig947E--) (var_core_value_sigCB04 = var_core_value_sig62B7[var_core_value_sig947E]) && (var_core_value_sig1F44 = (var_core_value_sig0511 < 3 ? var_core_value_sigCB04(var_core_value_sig1F44) : var_core_value_sig0511 > 3 ? var_core_value_sigCB04(var_core_value_sig37A8, var_core_value_sigA90D, var_core_value_sig1F44) : var_core_value_sigCB04(var_core_value_sig37A8, var_core_value_sigA90D)) || var_core_value_sig1F44);
  }
  return var_core_value_sig0511 > 3 && var_core_value_sig1F44 && Object.defineProperty(var_core_value_sig37A8, var_core_value_sigA90D, var_core_value_sig1F44), var_core_value_sig1F44;
}
var B;
function V(var_core_value_sig4545) {
  let var_core_value_sigF39A = var_core_value_sig65A1.deepClone(var_core_value_sig4545);
  return var_core_value_sigF39A.pathLst &&= var_core_value_sigF39A.pathLst['map'](var_core_value_sig9A0D => {
    var var_core_value_sigA319;
    if ((var_core_value_sigA319 = var_core_value_sig9A0D.dataArray) != null && var_core_value_sigA319.length) {
      let {
        data: var_core_value_sig480E,
        ...var_core_value_sig26DB
      } = var_core_value_sig9A0D;
      return var_core_value_sig26DB;
    }
    if (var_core_value_sig9A0D.data === undefined) return var_core_value_sig9A0D;
    let var_core_value_sig2D58 = var_core_value_sig7DF1(var_core_value_sig9A0D.data),
      {
        data: var_core_value_sig223F,
        ...var_core_value_sigD749
      } = var_core_value_sig9A0D;
    return {
      ...var_core_value_sigD749,
      'dataArray': var_core_value_sig2D58
    };
  }), var_core_value_sigF39A;
}
let H = B = class extends var_core_value_sigA39E {
  constructor(var_core_value_sigCFFA, var_core_value_sig58C1, var_core_value_sig5090, var_core_value_sigC368) {
    super(), this._shapeRef = var_core_value_sigCFFA, this._injector = var_core_value_sig58C1, this._shapeHostAdapterRegistry = var_core_value_sig5090, this._commandService = var_core_value_sigC368;
  }
  isConnectorShape() {
    return false;
  }
  getId() {
    return this._shapeRef["shapeId"];
  }
  getName() {
    var var_core_value_sigAD56;
    return (var_core_value_sigAD56 = this._getSnapshot()) == null ? undefined : var_core_value_sigAD56.name;
  }
  setName(var_core_value_sigDB4A) {
    return this.update({
      'name': var_core_value_sigDB4A
    });
  }
  getDescription() {
    var var_core_value_sig6418;
    return (var_core_value_sig6418 = this._getSnapshot()) == null ? undefined : var_core_value_sig6418.description;
  }
  setDescription(var_core_value_sig1896) {
    return this.update({
      'description': var_core_value_sig1896
    });
  }
  getHostType() {
    return this._shapeRef["hostType"];
  }
  getShapeType() {
    var var_core_value_sig0285;
    return ((var_core_value_sig0285 = this._getSnapshot()) == null ? undefined : var_core_value_sig0285.shapeType) ?? null;
  }
  getShapeData() {
    let var_core_value_sig777D = this._getSnapshot();
    return var_core_value_sig777D ? var_core_value_sig65A1.deepClone(var_core_value_sig777D.shapeData) : null;
  }
  isSmartArt() {
    var var_core_value_sig3F4C;
    let var_core_value_sigD65A = (var_core_value_sig3F4C = this._getSnapshot()) == null ? undefined : var_core_value_sig3F4C.shapeData;
    return !!var_core_value_sigD65A && var_core_value_sigBDE4(var_core_value_sigD65A);
  }
  getSmartArtData() {
    var var_core_value_sig5A13;
    let var_core_value_sigF593 = (var_core_value_sig5A13 = this._getSnapshot()) == null ? undefined : var_core_value_sig5A13.shapeData;
    return var_core_value_sigF593 && var_core_value_sigBDE4(var_core_value_sigF593) ? var_core_value_sig65A1.deepClone(var_core_value_sigF593.smartArt) : null;
  }
  setSmartArtData(var_core_value_sig3607) {
    return this._updateSmartArt({
      'type': var_core_value_sig85B1.Replace,
      'data': var_core_value_sig65A1.deepClone(var_core_value_sig3607)
    });
  }
  insertSmartArtNode(var_core_value_sigB512) {
    return this._updateSmartArt({
      'type': var_core_value_sig85B1.InsertNode,
      'nodeId': var_core_value_sigB512.node['id'],
      'node': var_core_value_sig65A1.deepClone(var_core_value_sigB512.node),
      'targetNodeId': var_core_value_sigB512.targetNodeId,
      'position': var_core_value_sigB512.position
    });
  }
  deleteSmartArtNode(var_core_value_sigF2E6) {
    return this._updateSmartArt({
      'type': var_core_value_sig85B1.DeleteNode,
      'nodeId': var_core_value_sigF2E6
    });
  }
  moveSmartArtNode(var_core_value_sig34C8) {
    return this._updateSmartArt({
      'type': var_core_value_sig85B1.MoveNode,
      ...var_core_value_sig34C8
    });
  }
  promoteSmartArtNode(var_core_value_sigB744) {
    return this._updateSmartArt({
      'type': var_core_value_sig85B1.PromoteNode,
      'nodeId': var_core_value_sigB744
    });
  }
  demoteSmartArtNode(var_core_value_sigEAE2) {
    return this._updateSmartArt({
      'type': var_core_value_sig85B1.DemoteNode,
      'nodeId': var_core_value_sigEAE2
    });
  }
  updateSmartArtNode(var_core_value_sigE68A, var_core_value_sig3E68) {
    return this._updateSmartArt({
      'type': var_core_value_sig85B1.UpdateNode,
      'nodeId': var_core_value_sigE68A,
      'update': var_core_value_sig65A1.deepClone(var_core_value_sig3E68)
    });
  }
  setSmartArtDirection(var_core_value_sigF4C5) {
    return this._updateSmartArt({
      'type': var_core_value_sig85B1.SetDirection,
      'direction': var_core_value_sigF4C5
    });
  }
  setSmartArtLayout(var_core_value_sig5410, var_core_value_sig492F) {
    return this._updateSmartArt({
      'type': var_core_value_sig85B1.SetLayout,
      'layoutId': var_core_value_sig5410,
      'category': var_core_value_sig492F
    });
  }
  updateSmartArtPresentationShape(var_core_value_sig8EA0, var_core_value_sigA6F6) {
    return this._updateSmartArt({
      'type': var_core_value_sig85B1.UpdatePresentationShape,
      'presentationShapeId': var_core_value_sig8EA0,
      'update': var_core_value_sig65A1.deepClone(var_core_value_sigA6F6)
    });
  }
  convertSmartArtToShapes() {
    let var_core_value_sigCDDA = this._getAdapter();
    if (!(var_core_value_sigCDDA != null && var_core_value_sigCDDA.convertSmartArtToShapes)) return console.warn("[Shape Facade]: The current Shape host cannot convert SmartArt \"" + this._shapeRef["shapeId"] + '\x22.'), [];
    try {
      let var_core_value_sigF0F9 = var_core_value_sigCDDA.convertSmartArtToShapes(this._shapeRef);
      return var_core_value_sigF0F9 ? var_core_value_sigF0F9.map(var_core_value_sig7524 => this._injector["createInstance"](B, {
        'hostType': var_core_value_sig7524.hostType,
        'unitId': var_core_value_sig7524.unitId,
        'subUnitId': var_core_value_sig7524.subUnitId,
        'shapeId': var_core_value_sig7524.shapeId
      }, this._injector)) : (console.warn('[Shape\x20Facade]:\x20Failed\x20to\x20convert\x20SmartArt\x20Shape\x20\x22' + this._shapeRef["shapeId"] + '\x22.'), []);
    } catch (var_core_value_sig1A0F) {
      return console.warn("[Shape Facade]: Failed to convert SmartArt Shape \"" + this._shapeRef["shapeId"] + '\x22.', var_core_value_sig1A0F), [];
    }
  }
  getSnapshot() {
    let var_core_value_sigE243 = this._getSnapshot();
    return var_core_value_sigE243 ? var_core_value_sig65A1.deepClone(var_core_value_sigE243) : null;
  }
  getTransform() {
    let var_core_value_sig74A8 = this._getSnapshot();
    return var_core_value_sig74A8 ? {
      ...var_core_value_sig74A8.transform
    } : null;
  }
  isVisible() {
    var var_core_value_sig21B2;
    return ((var_core_value_sig21B2 = this._getSnapshot()) == null ? undefined : var_core_value_sig21B2.visible) ?? false;
  }
  setVisible(var_core_value_sigDE08) {
    return this.update({
      'visible': var_core_value_sigDE08
    });
  }
  isSelectable() {
    var var_core_value_sigACCB;
    return ((var_core_value_sigACCB = this._getSnapshot()) == null ? undefined : var_core_value_sigACCB.selectable) ?? false;
  }
  setSelectable(var_core_value_sig7F33) {
    return this.update({
      'selectable': var_core_value_sig7F33
    });
  }
  getText() {
    return this._injector["createInstance"](L, this._shapeRef, this._injector);
  }
  isCustomShape() {
    let var_core_value_sig0C53 = this.getShapeData();
    return (var_core_value_sig0C53 == null ? undefined : var_core_value_sig0C53.isCustom) === true && !!var_core_value_sig0C53.customGeometry;
  }
  getCustomGeometry() {
    var var_core_value_sigEA04;
    return ((var_core_value_sigEA04 = this.getShapeData()) == null ? undefined : var_core_value_sigEA04.customGeometry) ?? null;
  }
  setShapeType(var_core_value_sig7A62) {
    return this._patchShapeData(var_core_value_sigFBA4 => ({
      ...var_core_value_sigFBA4,
      'shapeType': var_core_value_sig7A62
    }), var_core_value_sig7A62);
  }
  setShapeData(var_core_value_sig8109) {
    let var_core_value_sig7565 = var_core_value_sig65A1.deepClone(var_core_value_sig8109);
    return this.update({
      'shapeType': var_core_value_sig7565.shapeType,
      'shapeData': var_core_value_sig7565
    });
  }
  setTransform(var_core_value_sigD4FB) {
    return this.update({
      'transform': var_core_value_sigD4FB
    });
  }
  setSize(var_core_value_sig3E71, var_core_value_sig01B3) {
    return this.setTransform({
      'width': var_core_value_sig3E71,
      'height': var_core_value_sig01B3
    });
  }
  setRotation(var_core_value_sig7442) {
    return this.setTransform({
      'rotation': var_core_value_sig7442
    });
  }
  setAbsolutePosition(var_core_value_sigDF87, var_core_value_sig9EE0) {
    return this.setTransform({
      'left': var_core_value_sigDF87,
      'top': var_core_value_sig9EE0
    });
  }
  setCustomGeometry(var_core_value_sigF0511) {
    var var_core_value_sig0B45, var_core_value_sig36F8;
    let var_core_value_sig03E1 = ((var_core_value_sig0B45 = var_core_value_sigF0511.cxnLst) == null ? undefined : var_core_value_sig0B45.findIndex(({
      x: var_core_value_sig4383,
      y: var_core_value_sig186C
    }) => var_core_value_sig4383 === undefined || var_core_value_sig186C === undefined)) ?? -1;
    if (var_core_value_sig03E1 >= 0) return console.warn('[Shape\x20Facade]:\x20Custom\x20geometry\x20connection\x20site\x20' + var_core_value_sig03E1 + " requires both \"x\" and \"y\"."), this;
    let var_core_value_sigBB57 = V(var_core_value_sigF0511);
    if ((var_core_value_sig36F8 = var_core_value_sigBB57.cxnLst) != null && var_core_value_sig36F8.length) {
      let var_core_value_sigD955 = this._getSnapshot();
      if (!var_core_value_sigD955) return this;
      try {
        let var_core_value_sig2AD8 = new var_core_value_sigB680(var_core_value_sigD955.shapeType, var_core_value_sigD955.shapeId, {
          ...var_core_value_sigD955.shapeData,
          'isCustom': true,
          'customGeometry': var_core_value_sigBB57
        });
        var_core_value_sig2AD8.updateContext({
          'width': var_core_value_sigD955.transform['width'],
          'height': var_core_value_sigD955.transform["height"]
        }), var_core_value_sig2AD8.getConnectionSiteList();
      } catch {
        return console.warn("[Shape Facade]: Custom geometry connection sites must resolve to finite coordinates."), this;
      }
    }
    return this._patchShapeData(var_core_value_sig48BD => ({
      ...var_core_value_sig48BD,
      'isCustom': true,
      'customGeometry': var_core_value_sigBB57
    }));
  }
  setCustomGeometryFromSvgPath(var_core_value_sig7C4A) {
    return this.setCustomGeometry({
      'rect': {
        'l': 0,
        't': 0,
        'r': 'r',
        'b': 'b'
      },
      'pathLst': [{
        'w': var_core_value_sig7C4A.width,
        'h': var_core_value_sig7C4A.height,
        'fill': var_core_value_sig7C4A.fill,
        'stroke': var_core_value_sig7C4A.stroke,
        'data': var_core_value_sig7C4A.pathData
      }]
    });
  }
  getConnectionSites() {
    var var_core_value_sigE799;
    return ((var_core_value_sigE799 = this._getGeometryModel()) == null ? undefined : var_core_value_sigE799.getConnectionSiteList().map(var_core_value_sig429F => ({
      ...var_core_value_sig429F
    }))) ?? [];
  }
  getStartConnectInfo() {
    var var_core_value_sigB601;
    let var_core_value_sig8B71 = (var_core_value_sigB601 = this._getGeometryModel()) == null ? undefined : var_core_value_sigB601.getStartConnectInfo();
    return var_core_value_sig8B71 ? {
      ...var_core_value_sig8B71
    } : null;
  }
  getEndConnectInfo() {
    var var_core_value_sigAEFB;
    let var_core_value_sig826B = (var_core_value_sigAEFB = this._getGeometryModel()) == null ? undefined : var_core_value_sigAEFB.getEndConnectInfo();
    return var_core_value_sig826B ? {
      ...var_core_value_sig826B
    } : null;
  }
  getAdjustHandles() {
    var var_core_value_sigCF89;
    let var_core_value_sig00CB = this._getGeometryModel(),
      var_core_value_sig77EE = (var_core_value_sig00CB == null || (var_core_value_sigCF89 = var_core_value_sig00CB.getPresetShapeConfig().ahLst) == null ? undefined : var_core_value_sigCF89.length) ?? 0;
    return !var_core_value_sig00CB || var_core_value_sig77EE === 0 ? [] : Array.from({
      'length': var_core_value_sig77EE
    }, (var_core_value_sigF62A, var_core_value_sig8178) => var_core_value_sig00CB.getAdjustInfo(var_core_value_sig8178)).filter(var_core_value_sigE9ED => var_core_value_sigE9ED !== undefined).map(var_core_value_sigB577 => var_core_value_sig65A1.deepClone(var_core_value_sigB577));
  }
  setAdjustValues(var_core_value_sig9F76) {
    let var_core_value_sigB008 = Object.entries(var_core_value_sig9F76);
    if (var_core_value_sigB008.length === 0) return this;
    let var_core_value_sig8721 = this._getGeometryModel();
    if (!var_core_value_sig8721) return this;
    let var_core_value_sig08BA = new Set(var_core_value_sig8721.getAdjustNames());
    for (let [var_core_value_sig9572, var_core_value_sigD873] of var_core_value_sigB008) {
      if (!var_core_value_sig08BA.has(var_core_value_sig9572)) return console.warn('[Shape\x20Facade]:\x20Shape\x20adjustment\x20\x22' + var_core_value_sig9572 + '\x22\x20does\x20not\x20exist.'), this;
      if (!Number.isFinite(var_core_value_sigD873)) return console.warn("[Shape Facade]: Shape adjustment \"" + var_core_value_sig9572 + "\" must be finite."), this;
    }
    let var_core_value_sigDBB5 = Object.fromEntries(var_core_value_sigB008.map(([var_core_value_sigA12B, var_core_value_sigF230]) => [var_core_value_sigA12B, var_core_value_sig8721.setAdjustValueByName(var_core_value_sigA12B, var_core_value_sigF230)]));
    return this._patchShapeData(var_core_value_sig09B8 => ({
      ...var_core_value_sig09B8,
      'adjustValues': {
        ...var_core_value_sig09B8.adjustValues,
        ...var_core_value_sigDBB5
      }
    }));
  }
  resetAdjustValues() {
    let var_core_value_sigCFAC = this.getShapeData();
    return var_core_value_sigCFAC != null && var_core_value_sigCFAC.adjustValues ? (delete var_core_value_sigCFAC.adjustValues, this.update({
      'shapeData': var_core_value_sigCFAC
    })) : this;
  }
  setSolidFill(var_core_value_sig237B, var_core_value_sigFEAB) {
    return this._patchShapeData(var_core_value_sig6F91 => ({
      ...var_core_value_sig6F91,
      'fill': {
        'fillType': var_core_value_sig339E.SolidFill,
        'color': var_core_value_sig237B,
        'opacity': var_core_value_sigFEAB
      }
    }));
  }
  setGradientFill(var_core_value_sigE347, var_core_value_sig3C5B, var_core_value_sig200B) {
    return var_core_value_sig3C5B.length < 2 ? (console.warn('[Shape\x20Facade]:\x20Gradient\x20fill\x20requires\x20at\x20least\x20two\x20color\x20stops.'), this) : this._patchShapeData(var_core_value_sigF9C7 => ({
      ...var_core_value_sigF9C7,
      'fill': {
        'fillType': var_core_value_sig339E.GradientFill,
        'gradientType': var_core_value_sigE347,
        'gradientStops': var_core_value_sig65A1.deepClone(var_core_value_sig3C5B),
        'gradientAngle': var_core_value_sig200B
      }
    }));
  }
  setImageFill(var_core_value_sig3863, var_core_value_sigC97C, var_core_value_sigC4B1 = {}) {
    return this._patchShapeData(var_core_value_sig8895 => ({
      ...var_core_value_sig8895,
      'fill': {
        ...var_core_value_sig65A1.deepClone(var_core_value_sigC4B1),
        'fillType': var_core_value_sig339E.PictureFill,
        'fillImageSource': var_core_value_sig3863,
        'fillImageSourceType': var_core_value_sigC97C
      }
    }));
  }
  setNoneFill() {
    return this._patchShapeData(var_core_value_sigC80B => ({
      ...var_core_value_sigC80B,
      'fill': {
        'fillType': var_core_value_sig339E.NoFill
      }
    }));
  }
  setStroke(var_core_value_sig1BD9) {
    return this._patchShapeData(var_core_value_sig284F => ({
      ...var_core_value_sig284F,
      'stroke': var_core_value_sig65A1.deepClone(var_core_value_sig1BD9)
    }));
  }
  setStrokeColor(var_core_value_sigE43E) {
    return this._patchStroke(var_core_value_sigE154 => ({
      ...var_core_value_sigE154,
      'color': var_core_value_sigE43E,
      'lineStrokeType': var_core_value_sigE154.lineStrokeType === var_core_value_sig1E5B.NoLine ? var_core_value_sig1E5B.SolidLine : var_core_value_sigE154.lineStrokeType
    }));
  }
  setStrokeWidth(var_core_value_sigA937) {
    return this._patchStroke(var_core_value_sig4632 => ({
      ...var_core_value_sig4632,
      'width': var_core_value_sigA937,
      'lineStrokeType': var_core_value_sig4632.lineStrokeType === var_core_value_sig1E5B.NoLine ? var_core_value_sig1E5B.SolidLine : var_core_value_sig4632.lineStrokeType
    }));
  }
  setStrokeOpacity(var_core_value_sigCAD5) {
    return this._patchStroke(var_core_value_sig12F2 => ({
      ...var_core_value_sig12F2,
      'opacity': var_core_value_sigCAD5
    }));
  }
  setStrokeLineDashType(var_core_value_sigE503) {
    return this._patchStroke(var_core_value_sig2259 => ({
      ...var_core_value_sig2259,
      'dashType': var_core_value_sigE503
    }));
  }
  setStrokeLineJoinType(var_core_value_sig48DD) {
    return this._patchStroke(var_core_value_sig9E2F => ({
      ...var_core_value_sig9E2F,
      'lineJoinType': var_core_value_sig48DD
    }));
  }
  setStrokeLineCapType(var_core_value_sig5E6A) {
    return this._patchStroke(var_core_value_sigD082 => ({
      ...var_core_value_sigD082,
      'capType': var_core_value_sig5E6A
    }));
  }
  setStrokeLineType(var_core_value_sigB7FC) {
    return this._patchStroke(var_core_value_sigDBB7 => ({
      ...var_core_value_sigDBB7,
      'lineStrokeType': var_core_value_sigB7FC
    }));
  }
  update(var_core_value_sig9CD9) {
    var var_core_value_sigFD0C;
    let var_core_value_sig849B = var_core_value_sig9CD9.shapeData,
      var_core_value_sig5F1A = var_core_value_sig849B && ("relation" in var_core_value_sig849B || "points" in var_core_value_sig849B) ? this.getShapeType() : null,
      var_core_value_sigB455 = var_core_value_sig9CD9.shapeType ?? ((var_core_value_sigFD0C = var_core_value_sig9CD9.shapeData) == null ? undefined : var_core_value_sigFD0C.shapeType) ?? var_core_value_sig5F1A,
      var_core_value_sig5241 = U(var_core_value_sig9CD9, var_core_value_sigB455 !== null && var_core_value_sig82D4(var_core_value_sigB455));
    return var_core_value_sig5241 ? (console.warn('[Shape\x20Facade]:\x20' + var_core_value_sig5241), this) : (this._mutate("update", var_core_value_sigD0A8 => var_core_value_sigD0A8.updateShape(this._shapeRef, var_core_value_sig9CD9)), this);
  }
  remove() {
    return this._mutate("remove", var_core_value_sigF4B9 => var_core_value_sigF4B9.removeShape(this._shapeRef));
  }
  bringToFront() {
    return this._mutate('bring\x20to\x20front', var_core_value_sig5CEE => var_core_value_sig5CEE.bringToFront(this._shapeRef)), this;
  }
  bringForward() {
    return this._mutate("bring forward", var_core_value_sigE92A => var_core_value_sigE92A.bringForward(this._shapeRef)), this;
  }
  sendBackward() {
    return this._mutate("send backward", var_core_value_sig362B => var_core_value_sig362B.sendBackward(this._shapeRef)), this;
  }
  sendToBack() {
    return this._mutate("send to back", var_core_value_sig5CA5 => var_core_value_sig5CA5.sendToBack(this._shapeRef)), this;
  }
  setZOrder(var_core_value_sigC6E5) {
    return this._mutate("set z-order", var_core_value_sigE90F => var_core_value_sigE90F.setZOrder(this._shapeRef, var_core_value_sigC6E5)), this;
  }
  _getAdapter() {
    return this._shapeHostAdapterRegistry['get'](this._shapeRef['hostType']);
  }
  _patchShapeData(var_core_value_sigCEFB, var_core_value_sig1537) {
    let var_core_value_sigE4C6 = this.getShapeData();
    return var_core_value_sigE4C6 ? this.update({
      'shapeType': var_core_value_sig1537,
      'shapeData': var_core_value_sigCEFB(var_core_value_sigE4C6)
    }) : this;
  }
  _updateSmartArt(...var_core_value_sig4313) {
    let var_core_value_sigFC87 = this._getAdapter();
    return !var_core_value_sigFC87 || !this.isSmartArt() ? (console.warn("[Shape Facade]: Shape \"" + this._shapeRef["shapeId"] + "\" is not SmartArt."), this) : (var_core_value_sigFC87.updateShape(this._shapeRef, {
      'smartArtOperations': var_core_value_sig4313
    }) || console.warn("[Shape Facade]: Failed to update SmartArt Shape \"" + this._shapeRef["shapeId"] + '\x22.'), this);
  }
  _patchStroke(var_core_value_sig156F) {
    return this._patchShapeData(var_core_value_sigEFD4 => ({
      ...var_core_value_sigEFD4,
      'stroke': var_core_value_sig156F(var_core_value_sigEFD4.stroke ?? {})
    }));
  }
  _getSnapshot() {
    let var_core_value_sigDD51 = this._getAdapter();
    if (!var_core_value_sigDD51) return null;
    try {
      return var_core_value_sigDD51.getShape(this._shapeRef) || (console.warn("[Shape Facade]: Shape \"" + this._shapeRef["shapeId"] + "\" was not found."), null);
    } catch (var_core_value_sig861B) {
      return console.warn("[Shape Facade]: Failed to read Shape \"" + this._shapeRef["shapeId"] + '\x22.', var_core_value_sig861B), null;
    }
  }
  _getGeometryModel() {
    let var_core_value_sigF057 = this._getSnapshot();
    if (!var_core_value_sigF057) return null;
    try {
      let var_core_value_sig5237 = new var_core_value_sigB680(var_core_value_sigF057.shapeType, var_core_value_sigF057.shapeId, var_core_value_sig65A1.deepClone(var_core_value_sigF057.shapeData));
      return var_core_value_sig5237.updateContext({
        'width': var_core_value_sigF057.transform["width"],
        'height': var_core_value_sigF057.transform['height']
      }), var_core_value_sig5237;
    } catch (var_core_value_sigBB00) {
      return console.warn("[Shape Facade]: Failed to resolve geometry for Shape \"" + this._shapeRef['shapeId'] + '\x22.', var_core_value_sigBB00), null;
    }
  }
  _mutate(var_core_value_sig72F6, var_core_value_sig9FBA) {
    let var_core_value_sigFE01 = this._getAdapter();
    if (!var_core_value_sigFE01) return false;
    try {
      let var_core_value_sig7E54 = var_core_value_sig9FBA(var_core_value_sigFE01);
      return var_core_value_sig7E54 || console.warn("[Shape Facade]: Failed to " + var_core_value_sig72F6 + '\x20Shape\x20\x22' + this._shapeRef["shapeId"] + '\x22.'), var_core_value_sig7E54;
    } catch (var_core_value_sig9A8D) {
      return console.warn("[Shape Facade]: Failed to " + var_core_value_sig72F6 + " Shape \"" + this._shapeRef["shapeId"] + '\x22.', var_core_value_sig9A8D), false;
    }
  }
};
H = B = z([R(2, var_core_value_sig5825), R(3, var_core_value_sig6167)], H);
function U(var_core_value_sigF79C, var_core_value_sig2E54 = false) {
  for (let var_core_value_sigA2CE of ["visible", "selectable"]) {
    let var_core_value_sigC259 = var_core_value_sigF79C[var_core_value_sigA2CE];
    if (var_core_value_sigC259 !== undefined && typeof var_core_value_sigC259 != "boolean") return "Shape \"" + var_core_value_sigA2CE + "\" must be boolean.";
  }
  let var_core_value_sig7658 = var_core_value_sigF79C.transform;
  if (var_core_value_sig7658) {
    for (let var_core_value_sig9C9F of ["left", "top", "width", 'height', "rotation"]) {
      let var_core_value_sig2AD0 = var_core_value_sig7658[var_core_value_sig9C9F];
      if (var_core_value_sig2AD0 !== undefined && !Number.isFinite(var_core_value_sig2AD0)) return "Shape transform \"" + var_core_value_sig9C9F + "\" must be finite.";
    }
    if (var_core_value_sig7658.width !== undefined && var_core_value_sig7658.width <= 0) return 'Shape\x20width\x20must\x20be\x20greater\x20than\x20zero.';
    if (var_core_value_sig7658.height !== undefined && var_core_value_sig7658.height <= 0) return "Shape height must be greater than zero.";
    for (let var_core_value_sigFDEA of ['flipX', "flipY"]) {
      let var_core_value_sig3EEE = var_core_value_sig7658[var_core_value_sigFDEA];
      if (var_core_value_sig3EEE !== undefined && typeof var_core_value_sig3EEE != "boolean") return "Shape transform \"" + var_core_value_sigFDEA + '\x22\x20must\x20be\x20boolean.';
    }
  }
  let var_core_value_sigDCF5 = var_core_value_sigF79C.shapeData;
  return !var_core_value_sig2E54 && var_core_value_sigDCF5 && ("relation" in var_core_value_sigDCF5 || "points" in var_core_value_sigDCF5) ? "Connector relationships and route points require FConnectorShape." : null;
}
var W = class extends H {
  isConnectorShape() {
    return true;
  }
  getStartEndpoint() {
    let var_core_value_sig1975 = this._getConnectorSnapshot();
    return var_core_value_sig1975 ? var_core_value_sig65A1.deepClone(var_core_value_sig1975.start) : null;
  }
  getEndEndpoint() {
    let var_core_value_sig6EA1 = this._getConnectorSnapshot();
    return var_core_value_sig6EA1 ? var_core_value_sig65A1.deepClone(var_core_value_sig6EA1.end) : null;
  }
  getRoutePoints() {
    let var_core_value_sig029F = this._getConnectorSnapshot();
    return var_core_value_sig029F ? var_core_value_sig65A1.deepClone(var_core_value_sig029F.routePoints) : null;
  }
  getStartArrow() {
    let var_core_value_sig3767 = this._getConnectorSnapshot();
    return var_core_value_sig3767 ? var_core_value_sig65A1.deepClone(var_core_value_sig3767.startArrow) : null;
  }
  getEndArrow() {
    let var_core_value_sig670B = this._getConnectorSnapshot();
    return var_core_value_sig670B ? var_core_value_sig65A1.deepClone(var_core_value_sig670B.endArrow) : null;
  }
  setShapeType(var_core_value_sig6912) {
    return var_core_value_sig82D4(var_core_value_sig6912) ? super.setShapeType(var_core_value_sig6912) : (console.warn('[Shape\x20Facade]:\x20Connector\x20Shape\x20\x22' + this._shapeRef["shapeId"] + '\x22\x20requires\x20a\x20Connector\x20Shape\x20type.'), this);
  }
  setShapeData(var_core_value_sigE235) {
    return var_core_value_sigE235.shapeType !== undefined && !var_core_value_sig82D4(var_core_value_sigE235.shapeType) ? (console.warn('[Shape\x20Facade]:\x20Connector\x20Shape\x20\x22' + this._shapeRef["shapeId"] + "\" requires Connector Shape data."), this) : super.setShapeData(var_core_value_sigE235);
  }
  bindStart(var_core_value_sig7664, var_core_value_sig2281) {
    return this._bind("start", var_core_value_sig7664, var_core_value_sig2281), this;
  }
  bindEnd(var_core_value_sig5E86, var_core_value_sig6998) {
    return this._bind("end", var_core_value_sig5E86, var_core_value_sig6998), this;
  }
  unbindStart() {
    return this._mutateConnector('unbind\x20start', var_core_value_sig86D0 => var_core_value_sig86D0.unbindStart(this._shapeRef)), this;
  }
  unbindEnd() {
    return this._mutateConnector("unbind end", var_core_value_sig4CD2 => var_core_value_sig4CD2.unbindEnd(this._shapeRef)), this;
  }
  setStartPoint(var_core_value_sigF639) {
    return G(var_core_value_sigF639, this._shapeRef["shapeId"]) && this._mutateConnector("set start point", var_core_value_sig48CA => var_core_value_sig48CA.setStartPoint(this._shapeRef, var_core_value_sigF639)), this;
  }
  setEndPoint(var_core_value_sigEAE5) {
    return G(var_core_value_sigEAE5, this._shapeRef["shapeId"]) && this._mutateConnector("set end point", var_core_value_sig50AF => var_core_value_sig50AF.setEndPoint(this._shapeRef, var_core_value_sigEAE5)), this;
  }
  setRoutePoints(var_core_value_sigE94C) {
    return var_core_value_sigE94C.every(var_core_value_sigA942 => G(var_core_value_sigA942, this._shapeRef["shapeId"])) && this._mutateConnector("set route points", var_core_value_sigA621 => var_core_value_sigA621.setRoutePoints(this._shapeRef, var_core_value_sigE94C)), this;
  }
  setStartArrow(var_core_value_sig6D47, var_core_value_sigCB82) {
    return this._mutateConnector('set\x20start\x20arrow', var_core_value_sigBBFF => var_core_value_sigBBFF.setStartArrow(this._shapeRef, var_core_value_sig6D47, var_core_value_sigCB82)), this;
  }
  setEndArrow(var_core_value_sigCF4E, var_core_value_sig6CAD) {
    return this._mutateConnector("set end arrow", var_core_value_sig8889 => var_core_value_sig8889.setEndArrow(this._shapeRef, var_core_value_sigCF4E, var_core_value_sig6CAD)), this;
  }
  _getConnectorAdapter() {
    return this._injector["get"](var_core_value_sigF051);
  }
  _getConnectorSnapshot() {
    let var_core_value_sig8CF5 = this._getConnectorAdapter();
    if (!var_core_value_sig8CF5) return null;
    try {
      return var_core_value_sig8CF5.getConnector(this._shapeRef) || (console.warn("[Shape Facade]: Connector Shape \"" + this._shapeRef["shapeId"] + "\" was not found."), null);
    } catch (var_core_value_sig32F8) {
      return console.warn("[Shape Facade]: Failed to read Connector Shape \"" + this._shapeRef["shapeId"] + '\x22.', var_core_value_sig32F8), null;
    }
  }
  _bind(var_core_value_sigDDD7, var_core_value_sigB2CE, var_core_value_sig443C) {
    if (!var_core_value_sigB2CE || !Number.isInteger(var_core_value_sig443C) || var_core_value_sig443C < 0) return console.warn("[Shape Facade]: Connector \"" + this._shapeRef["shapeId"] + "\" binding requires a target Shape ID and a non-negative connection site index."), false;
    let var_core_value_sig39B1 = {
      'shapeId': var_core_value_sigB2CE,
      'cxnIndex': var_core_value_sig443C
    };
    return this._mutateConnector("bind " + var_core_value_sigDDD7, var_core_value_sig5B67 => var_core_value_sigDDD7 === 'start' ? var_core_value_sig5B67.bindStart(this._shapeRef, var_core_value_sig39B1) : var_core_value_sig5B67.bindEnd(this._shapeRef, var_core_value_sig39B1));
  }
  _mutateConnector(var_core_value_sig210D, var_core_value_sigB4B4) {
    let var_core_value_sigD407 = this._getConnectorAdapter();
    if (!var_core_value_sigD407) return false;
    try {
      let var_core_value_sig1758 = var_core_value_sigB4B4(var_core_value_sigD407);
      return var_core_value_sig1758 || console.warn("[Shape Facade]: Failed to " + var_core_value_sig210D + " Connector Shape \"" + this._shapeRef["shapeId"] + '\x22.'), var_core_value_sig1758;
    } catch (var_core_value_sig4805) {
      return console.warn("[Shape Facade]: Failed to " + var_core_value_sig210D + " Connector Shape \"" + this._shapeRef["shapeId"] + '\x22.', var_core_value_sig4805), false;
    }
  }
};
function G(var_core_value_sigC786, var_core_value_sigC0D9) {
  return !Number.isFinite(var_core_value_sigC786.x) || !Number.isFinite(var_core_value_sigC786.y) ? (console.warn("[Shape Facade]: Connector \"" + var_core_value_sigC0D9 + "\" points must contain finite coordinates."), false) : true;
}
export { W as FConnectorShape, H as FShape, L as FShapeText };
