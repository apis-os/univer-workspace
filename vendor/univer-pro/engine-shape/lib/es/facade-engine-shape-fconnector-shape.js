import { IConnectorShapeHostAdapter, IShapeHostAdapterRegistry, ImageFillModeEnum, ImageSourceTypeEnum, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeGradientTypeEnum, ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeModel, ShapeOperatorEnum, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, SmartArtOperationTypeEnum, applyRichTextToShapeText, applyShapeTextAlignment, applyShapeTextBoxOptions, applyShapeTextStyle, applyTextToShapeText, isConnectorShape, isSmartArtShapeData, parseSvgPathData, resolveShapeTextBoxOptions, shapeTextToRichTextValue } from '@univerjs-pro/engine-shape';
import { FBase, FEnum } from '@univerjs/core/facade';
import { BooleanNumber, ICommandService, Tools } from '@univerjs/core';
import { H } from "./facade-engine-shape-fshape.js";
var W = class extends H {
  isConnectorShape() {
    return true;
  }
  getStartEndpoint() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333 = this._getConnectorSnapshot();
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333 ? Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333.start) : null;
  }
  getEndEndpoint() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335 = this._getConnectorSnapshot();
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335 ? Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335.end) : null;
  }
  getRoutePoints() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337 = this._getConnectorSnapshot();
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337 ? Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337.routePoints) : null;
  }
  getStartArrow() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339 = this._getConnectorSnapshot();
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339 ? Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339.startArrow) : null;
  }
  getEndArrow() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46341 = this._getConnectorSnapshot();
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46341 ? Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46341.endArrow) : null;
  }
  setShapeType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46343) {
    return isConnectorShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46343) ? super.setShapeType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46343) : (console.warn('[Shape\x20Facade]:\x20Connector\x20Shape\x20\x22' + this._shapeRef["shapeId"] + '\x22\x20requires\x20a\x20Connector\x20Shape\x20type.'), this);
  }
  setShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46345) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46345.shapeType !== undefined && !isConnectorShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46345.shapeType) ? (console.warn('[Shape\x20Facade]:\x20Connector\x20Shape\x20\x22' + this._shapeRef["shapeId"] + "\" requires Connector Shape data."), this) : super.setShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46345);
  }
  bindStart(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46347, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46348) {
    return this._bind("start", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46347, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46348), this;
  }
  bindEnd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46351, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352) {
    return this._bind("end", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46351, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352), this;
  }
  unbindStart() {
    return this._mutateConnector('unbind\x20start', var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658.unbindStart(this._shapeRef)), this;
  }
  unbindEnd() {
    return this._mutateConnector("unbind end", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659.unbindEnd(this._shapeRef)), this;
  }
  setStartPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46355) {
    return G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46355, this._shapeRef["shapeId"]) && this._mutateConnector("set start point", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660.setStartPoint(this._shapeRef, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46355)), this;
  }
  setEndPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46357) {
    return G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46357, this._shapeRef["shapeId"]) && this._mutateConnector("set end point", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661.setEndPoint(this._shapeRef, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46357)), this;
  }
  setRoutePoints(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359.every(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662 => G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662, this._shapeRef["shapeId"])) && this._mutateConnector("set route points", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663.setRoutePoints(this._shapeRef, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359)), this;
  }
  setStartArrow(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362) {
    return this._mutateConnector('set\x20start\x20arrow', var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664.setStartArrow(this._shapeRef, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362)), this;
  }
  setEndArrow(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46365, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366) {
    return this._mutateConnector("set end arrow", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665.setEndArrow(this._shapeRef, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46365, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366)), this;
  }
  _getConnectorAdapter() {
    return this._injector["get"](IConnectorShapeHostAdapter);
  }
  _getConnectorSnapshot() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369 = this._getConnectorAdapter();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369) return null;
    try {
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369.getConnector(this._shapeRef) || (console.warn("[Shape Facade]: Connector Shape \"" + this._shapeRef["shapeId"] + "\" was not found."), null);
    } catch (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC512) {
      return console.warn("[Shape Facade]: Failed to read Connector Shape \"" + this._shapeRef["shapeId"] + '\x22.', var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC512), null;
    }
  }
  _bind(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46373) {
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372 || !Number.isInteger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46373) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46373 < 0) return console.warn("[Shape Facade]: Connector \"" + this._shapeRef["shapeId"] + "\" binding requires a target Shape ID and a non-negative connection site index."), false;
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB = {
      'shapeId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372,
      'cxnIndex': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46373
    };
    return this._mutateConnector("bind " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371 === 'start' ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666.bindStart(this._shapeRef, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666.bindEnd(this._shapeRef, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB));
  }
  _mutateConnector(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46379 = this._getConnectorAdapter();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46379) return false;
    try {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46379);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667 || console.warn("[Shape Facade]: Failed to " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377 + " Connector Shape \"" + this._shapeRef["shapeId"] + '\x22.'), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667;
    } catch (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC514) {
      return console.warn("[Shape Facade]: Failed to " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377 + " Connector Shape \"" + this._shapeRef["shapeId"] + '\x22.', var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC514), false;
    }
  }
};
function G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46417, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418) {
  return !Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46417.x) || !Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46417.y) ? (console.warn("[Shape Facade]: Connector \"" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418 + "\" points must contain finite coordinates."), false) : true;
}
export { W as FConnectorShape };
