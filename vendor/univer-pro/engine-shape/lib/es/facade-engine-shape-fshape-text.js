import { IConnectorShapeHostAdapter, IShapeHostAdapterRegistry, ImageFillModeEnum, ImageSourceTypeEnum, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeGradientTypeEnum, ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeModel, ShapeOperatorEnum, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, SmartArtOperationTypeEnum, applyRichTextToShapeText, applyShapeTextAlignment, applyShapeTextBoxOptions, applyShapeTextStyle, applyTextToShapeText, isConnectorShape, isSmartArtShapeData, parseSvgPathData, resolveShapeTextBoxOptions, shapeTextToRichTextValue } from '@univerjs-pro/engine-shape';
import { FBase, FEnum } from '@univerjs/core/facade';
import { BooleanNumber, ICommandService, Tools } from '@univerjs/core';
function F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383) {
  switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383) {
    case ShapeGradientTypeEnum.Radial:
      return "radial";
    case ShapeGradientTypeEnum.Angular:
      return "angular";
    case ShapeGradientTypeEnum.Diamond:
      return "diamond";
    case ShapeGradientTypeEnum.Linear:
    default:
      return "linear";
  }
}
function I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385 === ImageFillModeEnum.Tile ? "tile" : "stretch";
}
var L = class {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669) {
    this._shapeRef = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668, this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669;
  }
  getRichText() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672;
    return shapeTextToRichTextValue((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672 = this._getShapeData()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672.shapeText);
  }
  getPlainText() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674;
    return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674 = this.getRichText()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674.toPlainText()) ?? null;
  }
  setRichText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676) {
    return this._updateShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464 => ({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464,
      'shapeText': applyRichTextToShapeText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464.shapeText, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676)
    })), this;
  }
  setText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678) {
    return this._updateShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465 => ({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465,
      'shapeText': applyTextToShapeText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465.shapeText, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678)
    })), this;
  }
  setTextStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680) {
    return this._updateShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466 => ({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466,
      'shapeText': applyShapeTextStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466.shapeText, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680)
    })), this;
  }
  setColor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683) {
    return this.setTextStyle({
      'cl': {
        'rgb': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682
      },
      'textFill': {
        'type': 'solid',
        'color': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682,
        'opacity': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683
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
  setGradientFill(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687.length < 2 ? (console.warn("[Shape Text Facade]: Gradient text fill requires at least two color stops."), this) : this.setTextStyle({
      'cl': {
        'rgb': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687[0].color
      },
      'textFill': {
        'type': "gradient",
        'gradient': {
          'type': F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686),
          'angle': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688,
          'stops': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687.map(({
            position: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467,
            color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468,
            opacity: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469
          }) => ({
            'offset': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467,
            'color': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468,
            'opacity': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469
          }))
        }
      }
    });
  }
  setImageFill(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693 = ImageSourceTypeEnum.URL, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694 = {}) {
    return this.setTextStyle({
      'textFill': {
        'type': "picture",
        'picture': {
          'source': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692,
          'sourceType': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693,
          'opacity': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694.opacity,
          'mode': I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694.mode),
          'scaleX': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694.scaleX,
          'scaleY': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694.scaleY,
          'offsetX': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694.offsetX,
          'offsetY': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694.offsetY
        }
      }
    });
  }
  setFontSize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698) {
    return this.setTextStyle({
      'fs': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698
    });
  }
  setFontFamily(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100) {
    return this.setTextStyle({
      'ff': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100
    });
  }
  setBold(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102) {
    return this.setTextStyle({
      'bl': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102 ? BooleanNumber.TRUE : BooleanNumber.FALSE
    });
  }
  setItalic(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104) {
    return this.setTextStyle({
      'it': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104 ? BooleanNumber.TRUE : BooleanNumber.FALSE
    });
  }
  setUnderline(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106) {
    return this.setTextStyle({
      'ul': {
        's': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106 ? BooleanNumber.TRUE : BooleanNumber.FALSE
      }
    });
  }
  setStrikethrough(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108) {
    return this.setTextStyle({
      'st': {
        's': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108 ? BooleanNumber.TRUE : BooleanNumber.FALSE
      }
    });
  }
  setHorizontalAlign(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110) {
    return this._updateShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610 => applyShapeTextAlignment(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610, {
      'horizontalAlign': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110
    })), this;
  }
  setVerticalAlign(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112) {
    return this._updateShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611 => applyShapeTextAlignment(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611, {
      'verticalAlign': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112
    })), this;
  }
  getTextBoxOptions() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114 = this._getShapeData();
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114 ? resolveShapeTextBoxOptions(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114) : null;
  }
  setTextBoxOptions(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116) {
    return this._updateShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612 => applyShapeTextBoxOptions(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116)), this;
  }
  _getAdapter() {
    return this._injector['get'](IShapeHostAdapterRegistry).get(this._shapeRef['hostType']);
  }
  _getShapeData() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118 = this._getAdapter();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118) return null;
    try {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119;
      return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118.getShape(this._shapeRef)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119.shapeData) || (console.warn("[Shape Text Facade]: Shape \"" + this._shapeRef["shapeId"] + '\x22\x20was\x20not\x20found.'), null);
    } catch (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC5) {
      return console.warn("[Shape Text Facade]: Failed to read Shape \"" + this._shapeRef["shapeId"] + "\" text.", var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC5), null;
    }
  }
  _updateShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123 = this._getAdapter();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123) return false;
    try {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123.getShape(this._shapeRef)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124.shapeData;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613) return console.warn('[Shape\x20Text\x20Facade]:\x20Shape\x20\x22' + this._shapeRef["shapeId"] + "\" was not found."), false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123.updateShape(this._shapeRef, {
        'shapeData': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613)
      });
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614 || console.warn("[Shape Text Facade]: Failed to update Shape \"" + this._shapeRef["shapeId"] + "\" text."), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614;
    } catch (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC52) {
      return console.warn("[Shape Text Facade]: Failed to update Shape \"" + this._shapeRef["shapeId"] + "\" text.", var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC52), false;
    }
  }
};
export { L as FShapeText };
