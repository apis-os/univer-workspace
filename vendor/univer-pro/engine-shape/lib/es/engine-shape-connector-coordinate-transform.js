import { combineDrawingEffectFilter, createDrawingEffectFilter, expandDrawingEffectBounds } from '@univerjs/engine-render';
import { BooleanNumber, DependentOn, HorizontalAlign, IConfigService, ImageSourceType, Inject, Injector, JSONX, Plugin, RichTextBuilder, RichTextValue, TextX, Tools, UniverInstanceType, VerticalAlign, createIdentifier, generateRandomId, getSingleDataStreamChange, merge, toDisposable } from '@univerjs/core';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { HostExternalReferenceModel } from '@univerjs-pro/engine-formula';
import { W } from "./internal-core-endo.js";
var ng = class e {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466049) {
    W(this, "_drawingRect", undefined), this._drawingRect = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466049
    };
  }
  get drawingRect() {
    return this._drawingRect;
  }
  setDrawingRect(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466051) {
    this._drawingRect = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466051
    };
  }
  worldToLocal(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466053) {
    let {
        left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466054,
        top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466055,
        width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466056,
        height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466057,
        flipX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466058,
        flipY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466059,
        angle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466060 = 0
      } = this._drawingRect,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D815 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466053.x - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466054,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D816 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466053.y - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466055;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466060 !== 0) {
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D325 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466056 / 2,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D326 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466057 / 2,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D327 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466060 * Math.PI / 180,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D328 = Math.cos(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D327),
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D329 = Math.sin(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D327),
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D330 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D815 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D325,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D331 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D816 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D326;
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D815 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D325 + (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D330 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D328 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D331 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D329), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D816 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D326 + (-var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D330 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D329 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D331 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D328);
    }
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466058 && (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D815 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466056 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D815), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466059 && (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D816 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466057 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D816), {
      'x': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D815,
      'y': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D816
    };
  }
  localToWorld(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466069) {
    let {
        left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466070,
        top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466071,
        width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466072,
        height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466073,
        flipX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466074,
        flipY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466075,
        angle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466076 = 0
      } = this._drawingRect,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466077 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466069.x,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466078 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466069.y;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466074 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466077 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466072 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466077), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466075 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466078 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466073 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466078), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466076 !== 0) {
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D332 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466072 / 2,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D333 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466073 / 2,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D334 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466076 * Math.PI / 180,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D335 = Math.cos(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D334),
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D336 = Math.sin(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D334),
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D337 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466077 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D332,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D338 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466078 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D333;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466077 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D332 + (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D337 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D335 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D338 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D336), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466078 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D333 + (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D337 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D336 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D338 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D335);
    }
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466077 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466070, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466078 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466071, {
      'x': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466077,
      'y': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466078
    };
  }
  static computeConnectorLayout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466089, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466090) {
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D819 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466090.x - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466089.x,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D820 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466090.y - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466089.y,
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A82 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D819 < 0,
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A83 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D820 < 0,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D821 = Math.abs(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D819),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D822 = Math.abs(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D820),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB109 = {
        'left': Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466089.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466090.x),
        'top': Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466089.y, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466090.y),
        'width': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D821,
        'height': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D822,
        'flipX': var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A82,
        'flipY': var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A83
      };
    return {
      'localPoints': [{
        'x': 0,
        'y': 0
      }, {
        'x': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D821,
        'y': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D822
      }],
      'worldRect': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB109,
      'worldPoints': [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466089, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466090]
    };
  }
  static computeBentConnectorLayout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466093, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466094, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466095 = "auto") {
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D827 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466094.x - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466093.x,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D828 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466094.y - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466093.y,
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A86 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D827 < 0,
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A87 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D828 < 0,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D829 = Math.abs(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D827),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D830 = Math.abs(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D828),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB111 = {
        'left': Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466093.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466094.x),
        'top': Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466093.y, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466094.y),
        'width': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D829,
        'height': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D830,
        'flipX': var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A86,
        'flipY': var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A87
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466096;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466096 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466095 === "auto" ? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D829 >= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D830 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466095 === "horizontal-first";
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A222 = [],
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A223 = [];
    return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A222.push({
      'x': 0,
      'y': 0
    }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A223.push({
      'x': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466093.x,
      'y': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466093.y
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466096 ? (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A222.push({
      'x': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D829 / 2,
      'y': 0
    }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A222.push({
      'x': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D829 / 2,
      'y': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D830
    }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A223.push({
      'x': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466093.x + (var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A86 ? -var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D829 / 2 : var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D829 / 2),
      'y': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466093.y
    }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A223.push({
      'x': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466093.x + (var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A86 ? -var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D829 / 2 : var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D829 / 2),
      'y': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466094.y
    })) : (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A222.push({
      'x': 0,
      'y': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D830 / 2
    }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A222.push({
      'x': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D829,
      'y': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D830 / 2
    }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A223.push({
      'x': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466093.x,
      'y': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466093.y + (var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A87 ? -var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D830 / 2 : var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D830 / 2)
    }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A223.push({
      'x': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466094.x,
      'y': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466093.y + (var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A87 ? -var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D830 / 2 : var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D830 / 2)
    })), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A222.push({
      'x': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D829,
      'y': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D830
    }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A223.push({
      'x': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466094.x,
      'y': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466094.y
    }), {
      'localPoints': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A222,
      'worldRect': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB111,
      'worldPoints': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A223
    };
  }
  static getBentTypeFromPoints(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466101, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466102 = false) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466103 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466101[0],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466104 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466101[1];
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466102) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461593 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466101[2],
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D339 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466103.x + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461593.x) / 2,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D340 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466103.y + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461593.y) / 2;
      return Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466104.y - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D340) < Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466104.x - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D339) ? "horizontal-first" : "vertical-first";
    }
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466104.y === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466103.y ? "horizontal-first" : "vertical-first";
  }
  static computeConnectorResizeLayout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466109, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466110, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466111, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466112 = "auto") {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466113 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466111 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466110 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466109,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466114 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466111 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466109 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466110;
    return e.computeBentConnectorLayout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466113, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466114, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466112);
  }
  static computeStraightConnectorLayout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466121, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466122) {
    return e.computeConnectorLayout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466121, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466122);
  }
  localPointsToWorld(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466125) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466125.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461594 => this.localToWorld(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461594));
  }
  getStartPointWorld() {
    return this.localToWorld({
      'x': 0,
      'y': 0
    });
  }
  getEndPointWorld() {
    let {
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466127,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466128
    } = this._drawingRect;
    return this.localToWorld({
      'x': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466127,
      'y': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466128
    });
  }
};
export { ng as ConnectorCoordinateTransform };
