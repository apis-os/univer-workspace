import { combineDrawingEffectFilter, createDrawingEffectFilter, expandDrawingEffectBounds } from '@univerjs/engine-render';
import { BooleanNumber, DependentOn, HorizontalAlign, IConfigService, ImageSourceType, Inject, Injector, JSONX, Plugin, RichTextBuilder, RichTextValue, TextX, Tools, UniverInstanceType, VerticalAlign, createIdentifier, generateRandomId, getSingleDataStreamChange, merge, toDisposable } from '@univerjs/core';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { HostExternalReferenceModel } from '@univerjs-pro/engine-formula';
import { W, he } from "./internal-core-endo.js";
import { q } from "./engine-shape-shape-default-config.js";
import { we } from "./engine-shape-should-use-full-shape-text-rect-for-auto-fit.js";
function se(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466354) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D838 = 0;
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D349 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D349 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466354.length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D349++) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46560 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466354.charCodeAt(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D349);
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D838 = (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D838 << 5) - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D838 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46560, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D838 |= 0;
  }
  return Math.abs(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D838) % 10000;
}
const Te = {
  1: {
    'segmentLength': 1 / 0,
    'noiseScale': 0,
    'curveNoiseScale': 0,
    'passes': 1
  },
  2: {
    'segmentLength': 30,
    'noiseScale': 0.1,
    'curveNoiseScale': 0.07,
    'passes': 1
  },
  3: {
    'segmentLength': 15,
    'noiseScale': 0.2,
    'curveNoiseScale': 0.12,
    'passes': 1
  },
  4: {
    'segmentLength': 8,
    'noiseScale': 0.32,
    'curveNoiseScale': 0.18,
    'passes': 2
  }
};
var Ee = class {
    constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461765) {
      W(this, "_state", undefined), this._state = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461765 >>> 0 || 1;
    }
    next() {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461767 = this._state += 2654435769;
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461767 = Math.imul(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461767 ^ var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461767 >>> 16, 2246822507), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461767 = Math.imul(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461767 ^ var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461767 >>> 13, 3266489909), ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461767 ^ var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461767 >>> 16) >>> 0) / 4294967296;
    }
    range(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461769, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461770) {
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461769 + this.next() * (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461770 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461769);
    }
    advance(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461773) {
      for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D114 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D114 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461773; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D114++) this.next();
    }
  },
  De = class e {
    static render(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461775, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461776, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461777, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461778) {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461777 === 1 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461776.length === 0) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461779 = Te[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461777],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461780 = new Ee(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461778);
      for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D115 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D115 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461779.passes; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D115++) var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D115 > 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461780.advance(17 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D115 * 31), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461775.beginPath(), e._renderPass(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461775, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461776, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461780, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461779), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461775.stroke();
    }
    static _renderPass(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461787, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461788, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461789, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461790) {
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D352 = 0,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D353 = 0,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D354 = 0,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D355 = 0;
      for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461788) switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567.cmd) {
        case 'M':
          {
            let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D21 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461789.range(-1, 1) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461790.noiseScale * 4,
              var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461789.range(-1, 1) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461790.noiseScale * 4;
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461787.moveTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567.x + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D21, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567.y + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D352 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567.x, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D353 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567.y, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D354 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567.x, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D355 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567.y;
            break;
          }
        case 'L':
          e._sketchLine(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461787, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D352, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D353, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567.y, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461789, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461790), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D352 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567.x, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D353 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567.y;
          break;
        case 'C':
          e._sketchCubic(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461787, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567.cp1x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567.cp1y, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567.cp2x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567.cp2y, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567.y, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461789, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461790), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D352 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567.x, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D353 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567.y;
          break;
        case 'Q':
          e._sketchQuadratic(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461787, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567.cpx, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567.cpy, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567.y, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461789, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461790), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D352 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567.x, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D353 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567.y;
          break;
        case 'A':
          e._sketchArc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461787, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461789, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461790), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D352 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567.centerX + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567.wR * Math.cos(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567.endAngle), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D353 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567.centerY + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567.hR * Math.sin(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567.endAngle);
          break;
        case 'z':
          e._sketchLine(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461787, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D352, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D353, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D354, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D355, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461789, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461790), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461787.closePath(), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D352 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D354, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D353 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D355;
          break;
      }
    }
    static _sketchLine(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461795, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461796, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461797, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461798, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461799, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461800, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461801) {
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D360 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461798 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461796,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D361 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461799 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461797,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D362 = Math.sqrt(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D360 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D360 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D361 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D361);
      if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D362 < 0.01) {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461795.lineTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461798, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461799);
        return;
      }
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D363 = Math.max(1, Math.ceil(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D362 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461801.segmentLength));
      if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D363 === 1) {
        let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D116 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461801.noiseScale * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D362,
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D117 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461796 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461798) / 2,
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D118 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461797 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461799) / 2,
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D119 = -var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D361 / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D362,
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D120 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D360 / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D362,
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D121 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461800.range(-1, 1) * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D116;
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461795.quadraticCurveTo(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D117 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D119 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D121, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D118 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D120 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D121, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461798, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461799);
        return;
      }
      let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A56 = [{
          'x': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461796,
          'y': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461797
        }],
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D364 = -var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D361 / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D362,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D365 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D360 / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D362,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D366 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D362 / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D363;
      for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D122 = 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D122 < var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D363; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D122++) {
        let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D43 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D122 / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D363,
          var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB6 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461796 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D360 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D43,
          var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB7 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461797 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D361 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D43,
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D44 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461800.range(-1, 1) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461801.noiseScale * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D366;
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A56.push({
          'x': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB6 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D364 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D44,
          'y': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB7 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D365 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D44
        });
      }
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A56.push({
        'x': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461798,
        'y': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461799
      });
      for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D123 = 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D123 < var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A56.length - 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D123++) {
        let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D45 = (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A56[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D123].x + var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A56[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D123 + 1].x) / 2,
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D46 = (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A56[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D123].y + var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A56[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D123 + 1].y) / 2;
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461795.quadraticCurveTo(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A56[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D123].x, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A56[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D123].y, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D45, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D46);
      }
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461802 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A56[var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A56.length - 2];
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461795.quadraticCurveTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461802.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461802.y, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461798, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461799);
    }
    static _sketchCubic(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461811, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461812, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461813, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461814, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461815, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461816, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461817, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461818, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461819) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461820 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461819.curveNoiseScale,
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB49 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461812 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461818.range(-1, 1) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461820 * Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461812 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461816),
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB50 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461813 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461818.range(-1, 1) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461820 * Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461813 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461817),
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB51 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461814 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461818.range(-1, 1) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461820 * Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461814 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461816),
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB52 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461815 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461818.range(-1, 1) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461820 * Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461815 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461817);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461811.bezierCurveTo(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB49, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB50, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB51, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB52, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461816, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461817);
    }
    static _sketchQuadratic(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461831, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461832, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461833, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461834, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461835, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461836, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461837) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461838 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461837.curveNoiseScale,
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB57 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461832 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461836.range(-1, 1) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461838 * Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461832 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461834),
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB58 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461833 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461836.range(-1, 1) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461838 * Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461833 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461835);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461831.quadraticCurveTo(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB57, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB58, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461834, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461835);
    }
    static _sketchArc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461847, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461848, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461849, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461850) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461851 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461850.curveNoiseScale,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D374 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461851 * Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461848.wR, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461848.hR);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461847.ellipse(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461848.centerX + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461849.range(-1, 1) * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D374, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461848.centerY + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461849.range(-1, 1) * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D374, Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461848.wR) * (1 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461849.range(-1, 1) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461851 * 0.05), Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461848.hR) * (1 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461849.range(-1, 1) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461851 * 0.05), 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461848.startAngle, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461848.endAngle, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461848.anticlockwise);
    }
  },
  J = class {
    constructor() {
      W(this, "_isLineShape", false);
    }
    isLineShape() {
      return this._isLineShape;
    }
    _isStrokeVisible(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461857) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461858 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461857.stroke,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461859 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461858 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461858.width) ?? q.strokeWidth;
      return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461858 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461858.lineStrokeType) !== 1 && Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461859) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461859 > 0;
    }
    getConnectorLinePoints() {
      return [];
    }
    hitTest(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461863, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461864, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461865) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461866 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461865.getGdRecord(),
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB47 = {
          'hitType': 0
        },
        {
          cxnLst: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461867,
          ahLst: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461868,
          rect: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461869
        } = this.presetShapeConfig;
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461868 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461868.length > 0) for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D124 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D124 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461868.length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D124++) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461868[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D124];
        if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217.pos) continue;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218 = this._getValueFromGdRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217.pos['x'], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461866),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219 = this._getValueFromGdRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217.pos['y'], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461866),
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D47 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461863 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218,
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D48 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461864 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219,
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D49 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D47 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D47 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D48 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D48,
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D50 = q.adjHandleSize / 2 + 2;
        if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D49 <= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D50 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D50) return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB47.hitType = 3, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB47.adjustHandleIndex = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D124, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB47;
      }
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461867 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461867.length > 0) for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D125 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D125 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461867.length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D125++) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46220 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461867[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D125];
        if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46220.x || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46220.y) continue;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221 = this._getValueFromGdRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46220.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461866),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46222 = this._getValueFromGdRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46220.y, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461866),
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D51 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461863 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221,
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D52 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461864 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46222,
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D53 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D51 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D51 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D52 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D52,
          var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB8 = q.cxnPointRadius + 2;
        if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D53 <= var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB8 * var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB8) return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB47.hitType = 2, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB47.connectionSiteIndex = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D125, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB47;
      }
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461869) {
        let {
            l: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46568,
            t: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46569,
            r: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46570,
            b: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46571
          } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461869,
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46572 = this._getValueFromGdRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46568, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461866),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46573 = this._getValueFromGdRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46569, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461866),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46574 = this._getValueFromGdRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46570, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461866),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46575 = this._getValueFromGdRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46571, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461866);
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461863 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46572 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461863 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46574 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461864 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46573 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461864 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46575) return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB47.hitType = 4, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB47;
      }
      return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB47;
    }
    getTextRect(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461877, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461878, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461879) {
      let {
          rect: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461880
        } = this.presetShapeConfig,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461881 = this._getTextRectPadding(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461879);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461879 && we(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461879)) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461879.textRectPadding ? this._getPaddedWholeRect(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461877, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461881) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461877;
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461880) {
        let {
            l: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46576,
            t: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46577,
            r: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46578,
            b: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46579
          } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461880,
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46580 = this._getValueFromGdRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46576, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461878),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46581 = this._getValueFromGdRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46577, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461878),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46582 = this._getValueFromGdRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46578, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461878),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46583 = this._getValueFromGdRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46579, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461878);
        return {
          'left': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46580 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461881.left,
          'top': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46581 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461881.top,
          'width': Math.max(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46582 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46580 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461881.left - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461881.right),
          'height': Math.max(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46583 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46581 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461881.top - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461881.bottom)
        };
      }
      return this._getPaddedWholeRect(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461877, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461881);
    }
    _getPaddedWholeRect(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461887, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461888) {
      return {
        'left': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461887.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461888.left,
        'top': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461887.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461888.top,
        'width': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461887.width - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461888.left - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461888.right,
        'height': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461887.height - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461888.top - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461888.bottom
      };
    }
    _getTextRectPadding(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461891) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461892 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461891 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461891.textRectPadding;
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461892) return {
        'left': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461892.left ?? 0,
        'top': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461892.top ?? 0,
        'right': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461892.right ?? 0,
        'bottom': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461892.bottom ?? 0
      };
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461893 = q.shapeText["padding"];
      return {
        'left': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461893,
        'top': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461893,
        'right': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461893,
        'bottom': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461893
      };
    }
    computeFillableBounds(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461897, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461898) {
      let {
        pathLst: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461899
      } = this.presetShapeConfig;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461899 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461899.length === 0) return {
        'left': 0,
        'top': 0,
        'width': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461897.width,
        'height': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461897.height
      };
      let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929910 = new Set(["darkenLess", "darken", "lighten", "lightenLess"]),
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A58 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461899.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584.dataArray && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584.dataArray["length"] > 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584.fill !== "none" && !var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929910.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584.fill ?? '')),
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A59 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A58.length > 0 ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A58 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461899.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585.dataArray && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585.dataArray["length"] > 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585.fill !== "none");
      if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A59.length === 0) return {
        'left': 0,
        'top': 0,
        'width': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461897.width,
        'height': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461897.height
      };
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461900 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461898.getGdRecord(),
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB49 = {
          'minX': 1 / 0,
          'minY': 1 / 0,
          'maxX': -1 / 0,
          'maxY': -1 / 0
        };
      for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586 of var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A59) {
        let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D54 = 1,
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D55 = 1;
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586.w !== undefined && (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D54 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461897.width / Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586.w)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586.h !== undefined && (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D55 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461897.height / Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586.h)), this._accumulatePathBounds(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586.dataArray, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461900, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D54, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D55, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB49);
      }
      return Number.isFinite(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB49.minX) ? {
        'left': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB49.minX,
        'top': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB49.minY,
        'width': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB49.maxX - var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB49.minX,
        'height': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB49.maxY - var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB49.minY
      } : {
        'left': 0,
        'top': 0,
        'width': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461897.width,
        'height': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461897.height
      };
    }
    render(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461905, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461906, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461907, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461908, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461909) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461910, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461911;
      let {
        pathLst: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461912
      } = this.presetShapeConfig;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461912 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461912.length === 0) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461913 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461907.getGdRecord(),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461914 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461910 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461908.stroke) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461910.sketchType) ?? q.sketchType,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D376 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461909.oKey ? se(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461909.oKey) : 1,
        var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A34 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461914 !== 1,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461915 = (((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461911 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461908.fill) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461911.fillType) ?? q.fillType) === 5 ? this.computeFillableBounds(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461906, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461907) : undefined;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461905.save(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461905.translate(-var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461906.width / 2, -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461906.height / 2);
      for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46587 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461912) {
        if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46587.dataArray || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46587.dataArray['length'] === 0) continue;
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461905.beginPath();
        let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12 = var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A34 ? [] : null,
          var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB = {
            'x': NaN,
            'y': NaN
          },
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D56 = 1,
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D57 = 1;
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46587.w !== undefined && (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D56 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461906.width / Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46587.w)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46587.h !== undefined && (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D57 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461906.height / Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46587.h));
        for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46587.dataArray) {
          let {
              command: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624,
              points: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625,
              center: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626
            } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698,
            var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618 => this._getValueFromGdRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461913)),
            var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624 === 'A' ? [var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[0], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[1]] : undefined;
          if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D56 !== 1 || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D57 !== 1) switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624) {
            case 'M':
            case 'L':
              var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[0] *= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D56, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[1] *= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D57;
              break;
            case 'Q':
              var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[0] *= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D56, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[1] *= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D57, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[2] *= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D56, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[3] *= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D57;
              break;
            case 'C':
              var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[0] *= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D56, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[1] *= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D57, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[2] *= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D56, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[3] *= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D57, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[4] *= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D56, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[5] *= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D57;
              break;
            case 'A':
              var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[0] *= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D56, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[1] *= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D57;
              break;
          }
          switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624) {
            case 'L':
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461905.lineTo(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[0], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[1]), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.x = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[0], var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.y = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[1], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12 == null || var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12.push({
                'cmd': 'L',
                'x': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[0],
                'y': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[1]
              });
              break;
            case 'M':
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461905.moveTo(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[0], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[1]), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.x = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[0], var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.y = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[1], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12 == null || var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12.push({
                'cmd': 'M',
                'x': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[0],
                'y': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[1]
              });
              break;
            case 'C':
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461905.bezierCurveTo(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[0], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[1], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[2], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[3], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[4], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[5]), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.x = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[4], var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.y = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[5], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12 == null || var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12.push({
                'cmd': 'C',
                'cp1x': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[0],
                'cp1y': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[1],
                'cp2x': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[2],
                'cp2y': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[3],
                'x': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[4],
                'y': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[5]
              });
              break;
            case 'Q':
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461905.quadraticCurveTo(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[0], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[1], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[2], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[3]), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.x = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[2], var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.y = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[3], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12 == null || var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12.push({
                'cmd': 'Q',
                'cpx': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[0],
                'cpy': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[1],
                'x': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[2],
                'y': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[3]
              });
              break;
            case 'A':
              if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626 && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.x = this._getValueFromGdRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626[0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461913), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.y = this._getValueFromGdRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626[1], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461913)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625.length >= 4) {
                let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[0],
                  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[1],
                  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[2],
                  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[3];
                if (Number.isNaN(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46) || Number.isNaN(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461) || Number.isNaN(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462) || Number.isNaN(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463)) break;
                let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462 / 60000 * (Math.PI / 180),
                  var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 / 60000 * (Math.PI / 180),
                  var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1,
                  var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A = Math.abs(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1) >= 2 * Math.PI - 0.001,
                  var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A1 = this.presetShapeConfig["arcAngleMode"] !== 'parametric' && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626 && !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A,
                  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464 = (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1 == null ? undefined : var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1[0]) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46,
                  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465 = (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1 == null ? undefined : var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1[1]) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461,
                  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466 = var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A1 ? this._ooxmlAngleToParametric(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465) : var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D,
                  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467 = var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A1 ? this._ooxmlAngleToParametric(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465) : var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB,
                  var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.x - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 * Math.cos(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466),
                  var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.y - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461 * Math.sin(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466),
                  var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626[2] !== undefined ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626[2] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 < 0;
                var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461905.ellipse(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3, Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46), Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461), 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467, var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.x = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 * Math.cos(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.y = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461 * Math.sin(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12 == null || var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12.push({
                  'cmd': 'A',
                  'centerX': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2,
                  'centerY': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3,
                  'wR': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46,
                  'hR': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461,
                  'startAngle': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466,
                  'endAngle': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467,
                  'anticlockwise': var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2
                });
              }
              break;
            case 'z':
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461905.closePath(), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12 == null || var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12.push({
                'cmd': 'z'
              });
              break;
          }
        }
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46587.fill !== "none") {
          var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461916;
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461916 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461908.fill) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461916.fillType) ?? q.fillType;
          if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699 === 4 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699 = 1), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699 === 2) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461905.fillStyle = this._getFillStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461908, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46587.fill), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46587.fill === "evenodd" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461905.fill("evenodd") : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461905.fill();else {
            if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699 === 3) {
              var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461917;
              if ((((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461917 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461908.fill) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461917.gradientType) ?? q.gradientType) === 4) this._fillDiamondGradient(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461905, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461906, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461908, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46587.fill);else {
                let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468 = this._createGradient(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461905, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461906, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461908);
                var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461905.fillStyle = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46587.fill === 'evenodd' ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461905.fill("evenodd") : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461905.fill());
              }
            } else {
              if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699 === 5) {
                let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461909.image;
                var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469 && this._fillPicture(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461905, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461906, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461908, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46587.fill, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461909.angle ?? 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461915);
              }
            }
          }
          this._applyFillModifierOverlay(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461905, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46587.fill);
        }
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46587.stroke !== false && this._isStrokeVisible(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461908)) {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461908.stroke;
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461905.strokeStyle = this._getStrokeStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461908), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461905.lineWidth = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100.width) === undefined ? q.strokeWidth : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100.width;
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101 = this._getDashType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461908);
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101.length > 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461905.setLineDash(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461905.lineJoin = this._getJoinType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461908), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461905.lineCap = this._getCapType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461908), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A34 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12.length > 0 ? De.render(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461905, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461914, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D376) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461905.stroke();
        }
      }
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461909 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461909.renderMode && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461909.renderMode & 4) > 0 && this._renderCxnPoints(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461905, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461913), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461909 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461909.renderMode && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461909.renderMode & 8) > 0 && this._renderAdjustHandles(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461905, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461913), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461905.restore();
    }
    buildClipPath(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461931, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461932, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461933) {
      let {
        pathLst: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461934
      } = this.presetShapeConfig;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461934 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461934.length === 0) return false;
      let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A62 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461934.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46588 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46588.fill !== 'none' && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46588.dataArray && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46588.dataArray["length"] > 0),
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A63 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A62.length > 0 ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A62 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461934.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46589 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46589.dataArray && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46589.dataArray["length"] > 0);
      if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A63.length === 0) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461935 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461933.getGdRecord(),
        var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A36 = false,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D378 = 1 / 0,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D379 = 1 / 0,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D380 = -1 / 0,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D381 = -1 / 0,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461936 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46590, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46591) => {
          !Number.isNaN(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46590) && !Number.isNaN(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46591) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46590 < var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D378 && (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D378 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46590), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46590 > var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D380 && (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D380 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46590), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46591 < var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D379 && (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D379 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46591), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46591 > var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D381 && (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D381 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46591));
        };
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461931.beginPath();
      for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46594 of var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A63) {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46594.fill === "evenodd" && (var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A36 = true);
        let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1 = {
            'x': NaN,
            'y': NaN
          },
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D58 = 1,
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D59 = 1;
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46594.w !== undefined && (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D58 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461932.width / Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46594.w)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46594.h !== undefined && (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D59 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461932.height / Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46594.h));
        for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46594.dataArray) {
          let {
              command: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627,
              points: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628,
              center: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629
            } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102,
            var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619 => this._getValueFromGdRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461935)),
            var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627 === 'A' ? [var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2[0], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2[1]] : undefined;
          if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D58 !== 1 || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D59 !== 1) switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627) {
            case 'M':
            case 'L':
              var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2[0] *= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D58, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2[1] *= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D59;
              break;
            case 'Q':
              var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2[0] *= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D58, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2[1] *= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D59, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2[2] *= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D58, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2[3] *= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D59;
              break;
            case 'C':
              var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2[0] *= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D58, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2[1] *= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D59, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2[2] *= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D58, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2[3] *= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D59, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2[4] *= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D58, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2[5] *= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D59;
              break;
            case 'A':
              var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2[0] *= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D58, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2[1] *= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D59;
              break;
          }
          switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627) {
            case 'L':
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461931.lineTo(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2[0], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2[1]), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1.x = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2[0], var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1.y = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2[1], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461936(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2[0], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2[1]);
              break;
            case 'M':
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461931.moveTo(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2[0], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2[1]), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1.x = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2[0], var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1.y = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2[1], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461936(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2[0], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2[1]);
              break;
            case 'C':
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461931.bezierCurveTo(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2[0], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2[1], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2[2], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2[3], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2[4], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2[5]), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1.x = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2[4], var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1.y = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2[5], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461936(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2[0], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2[1]), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461936(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2[2], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2[3]), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461936(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2[4], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2[5]);
              break;
            case 'Q':
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461931.quadraticCurveTo(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2[0], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2[1], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2[2], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2[3]), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1.x = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2[2], var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1.y = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2[3], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461936(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2[0], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2[1]), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461936(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2[2], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2[3]);
              break;
            case 'A':
              if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629 && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1.x = this._getValueFromGdRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629[0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461935), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1.y = this._getValueFromGdRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629[1], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461935)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628.length >= 4) {
                let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2[0],
                  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2[1],
                  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2[2],
                  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2[3];
                if (Number.isNaN(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610) || Number.isNaN(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611) || Number.isNaN(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612) || Number.isNaN(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613)) break;
                let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612 / 60000 * (Math.PI / 180),
                  var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613 / 60000 * (Math.PI / 180),
                  var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB1 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5,
                  var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A3 = Math.abs(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5) >= 2 * Math.PI - 0.001,
                  var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A4 = this.presetShapeConfig["arcAngleMode"] !== 'parametric' && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629 && !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A3,
                  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614 = (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3 == null ? undefined : var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3[0]) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610,
                  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615 = (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3 == null ? undefined : var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3[1]) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611,
                  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616 = var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A4 ? this._ooxmlAngleToParametric(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615) : var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4,
                  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617 = var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A4 ? this._ooxmlAngleToParametric(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615) : var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB1,
                  var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1.x - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610 * Math.cos(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616),
                  var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1.y - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611 * Math.sin(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616),
                  var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A5 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629[2] !== undefined ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629[2] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613 < 0;
                var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461931.ellipse(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7, Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610), Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611), 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617, var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A5), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1.x = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610 * Math.cos(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1.y = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611 * Math.sin(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461936(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610 * Math.cos(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611 * Math.sin(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461936(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1.x, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1.y), this._updateArcCardinalBounds(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617, var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A5, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461936);
              }
              break;
            case 'z':
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461931.closePath();
              break;
          }
        }
      }
      return var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A36 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461931.clip('evenodd') : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461931.clip(), Number.isFinite(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D378) ? {
        'left': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D378,
        'top': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D379,
        'width': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D380 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D378,
        'height': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D381 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D379
      } : {
        'left': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461932.left,
        'top': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461932.top,
        'width': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461932.width,
        'height': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461932.height
      };
    }
    _getDashType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461943) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461944;
      switch (((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461944 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461943.stroke) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461944.dashType) ?? q.lineDashType) {
        case 1:
          return [];
        case 2:
          return [1, 2];
        case 3:
          return [1, 3];
        case 4:
          return [4, 2];
        case 5:
          return [4, 2, 1, 2];
        case 6:
          return [8, 2];
        case 7:
          return [8, 2, 1, 2];
        case 8:
          return [8, 2, 1, 2, 1, 2];
        default:
          return [];
      }
    }
    _getCapType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461947) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461948;
      switch (((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461948 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461947.stroke) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461948.capType) ?? q.lineCapType) {
        case 1:
          return 'butt';
        case 2:
          return "round";
        case 3:
          return "square";
        default:
          return "butt";
      }
    }
    _getJoinType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461951) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461952;
      switch (((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461952 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461951.stroke) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461952.lineJoinType) ?? q.lineJoinType) {
        case 1:
          return "miter";
        case 2:
          return "round";
        case 3:
          return 'bevel';
        default:
          return "miter";
      }
    }
    _getStrokeWidth() {}
    _fillPicture(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461955, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461956, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461957, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461958, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461959, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461960 = 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461961) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461962, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461963, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461964, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461965;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461966 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461957.fill,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461967 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461958.naturalWidth || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461958.width,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461968 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461958.naturalHeight || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461958.height;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461967 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461968) return;
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D386 = Math.max(0, Math.min(100, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461966 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461962 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461966.srcRect) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461962.left) ?? 0)) / 100,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D387 = Math.max(0, Math.min(100, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461966 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461963 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461966.srcRect) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461963.top) ?? 0)) / 100,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D388 = Math.max(0, Math.min(100, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461966 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461964 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461966.srcRect) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461964.right) ?? 0)) / 100,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D389 = Math.max(0, Math.min(100, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461966 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461965 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461966.srcRect) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461965.bottom) ?? 0)) / 100,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D390 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D386 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461967,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D391 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D387 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461968,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D392 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461967 * (1 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D386 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D388),
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D393 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461968 * (1 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D387 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D389);
      if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D392 <= 0 || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D393 <= 0) return;
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D394 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461966 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461966.imageOpacity) === undefined ? q.fillOpacity : Math.max(0, Math.min(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461966.imageOpacity)),
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D395 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461966 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461966.imageFillMode) ?? 1,
        var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A38 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461966 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461966.imageRotateWithShape) === true,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461969 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461961 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461961.width : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461956.width,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461970 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461961 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461961.height : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461956.height;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461955.save(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461959 === "evenodd" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461955.clip('evenodd') : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461955.clip(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461955.globalAlpha = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D394;
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D396 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461961 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461961.left : 0,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D397 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461961 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461961.top : 0,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461971 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461969,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461972 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461970;
      if (!var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A38 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461960 !== 0) {
        let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D126 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461960 * Math.PI / 180,
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D127 = Math.abs(Math.cos(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D126)),
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D128 = Math.abs(Math.sin(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D126)),
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D129 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461969 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D127 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461970 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D128,
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D130 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461969 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D128 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461970 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D127,
          var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB17 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461961 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461961.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461969 / 2 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461969 / 2,
          var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB18 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461961 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461961.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461970 / 2 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461970 / 2;
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461955.translate(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB17, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB18), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461955.rotate(-var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D126), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D396 = -var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D129 / 2, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D397 = -var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D130 / 2, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461971 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D129, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461972 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D130;
      }
      if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D395 === 1) {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461973, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461974, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461975, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461976;
        let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D131 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461966 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461973 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461966.stretchFillRect) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461973.left) ?? 0) / 100 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461971,
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D132 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461966 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461974 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461966.stretchFillRect) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461974.top) ?? 0) / 100 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461972,
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D133 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461966 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461975 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461966.stretchFillRect) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461975.right) ?? 0) / 100 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461971,
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D134 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461966 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461976 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461966.stretchFillRect) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461976.bottom) ?? 0) / 100 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461972,
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D135 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D396 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D131,
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D136 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D397 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D132,
          var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB19 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461971 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D131 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D133,
          var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB20 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461972 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D132 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D134;
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461955.drawImage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461958, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D390, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D391, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D392, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D393, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D135, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D136, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB19, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB20);
      } else {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46595 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461966 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461966.imageTile,
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D137 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46595 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46595.scaleX) ?? 1,
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D138 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46595 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46595.scaleY) ?? 1,
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D139 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D392 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D137,
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D140 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D393 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D138;
        if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D139 <= 0 || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D140 <= 0) {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461955.restore();
          return;
        }
        let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D141 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46595 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46595.offsetX) ?? 0) * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D137,
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D142 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46595 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46595.offsetY) ?? 0) * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D138,
          var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB21 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46595 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46595.alignment) ?? 'tl',
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46596 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D396,
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46597 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D397;
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB21 === 't' || var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB21 === "ctr" || var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB21 === 'b' ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46596 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D396 + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461971 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D139) / 2 : (var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB21 === 'tr' || var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB21 === 'r' || var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB21 === 'br') && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46596 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D396 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461971 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D139), var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB21 === 'l' || var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB21 === 'ctr' || var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB21 === 'r' ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46597 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D397 + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461972 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D140) / 2 : (var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB21 === 'bl' || var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB21 === 'b' || var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB21 === 'br') && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46597 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D397 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461972 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D140);
        let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D143 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46596 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D141) % var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D139 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D139) % var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D139 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D139,
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D144 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46597 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D142) % var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D140 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D140) % var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D140 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D140;
        for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D144; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223 < var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D397 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461972; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223 += var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D140) for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D143; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103 < var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D396 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461971; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103 += var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D139) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461955.drawImage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461958, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D390, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D391, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D392, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D393, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D139, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D140);
      }
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461955.restore();
    }
    _ooxmlAngleToParametric(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461999, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462000, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462001) {
      return Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462000 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462001) < 0.000001 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461999 : Math.atan2(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462000 * Math.sin(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461999), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462001 * Math.cos(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461999));
    }
    _updateArcCardinalBounds(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462005, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462006, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462007, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462008, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462009, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462010, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462011, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462012) {
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D410 = 2 * Math.PI,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D411 = Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462007),
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D412 = Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462008),
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A66 = [[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462005 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D411, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462006], [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462005, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462006 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D412], [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462005 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D411, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462006], [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462005, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462006 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D412]];
      if (Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462010 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462009) >= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D410 - 0.001) {
        for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46224, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46225] of var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A66) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462012(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46224, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46225);
        return;
      }
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D413 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462009 % var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D410 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D410) % var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D410,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D414 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462010 % var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D410 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D410) % var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D410,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462013 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46598 => {
          let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D145 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46598 % var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D410 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D410) % var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D410;
          return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462011 ? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D413 >= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D414 ? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D145 <= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D413 && var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D145 >= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D414 : var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D145 <= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D413 || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D145 >= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D414 : var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D414 >= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D413 ? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D145 >= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D413 && var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D145 <= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D414 : var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D145 >= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D413 || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D145 <= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D414;
        },
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A67 = [0, Math.PI / 2, Math.PI, 3 * Math.PI / 2];
      for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D147 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D147 < var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A67.length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D147++) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462013(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A67[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D147]) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462012(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A66[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D147][0], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A66[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D147][1]);
    }
    _createGradient(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462023, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462024, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462025) {
      let {
        fill: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462026
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462025;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462026) return null;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462027 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462026.gradientType ?? q.gradientType,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462028 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462026.gradientAngle ?? q.gradientAngle,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462029 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462026.gradientStops,
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A70 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462029 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462029.length >= 2 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462029 : [{
          'position': 0,
          'color': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462026.color || q.fill
        }, {
          'position': 1,
          'color': q.gradientEndColor
        }],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462030 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462024.width,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462031 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462024.height,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D420 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462030 / 2,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D421 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462031 / 2,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462032 = null;
      switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462027) {
        case 1:
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462032 = this._createLinearGradient(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462023, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462030, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462031, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462028);
          break;
        case 2:
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462032 = this._createRadialGradient(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462023, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D420, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D421, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462030, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462031);
          break;
        case 3:
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462032 = this._createAngularGradient(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462023, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D420, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D421, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462030, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462031, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462028, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A70, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462026.opacity);
          break;
        case 4:
          break;
        default:
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462032 = this._createLinearGradient(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462023, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462030, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462031, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462028);
      }
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462032 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462027 !== 3 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462027 !== 4 && this._addGradientStops(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462032, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A70, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462026.opacity), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462032;
    }
    _createLinearGradient(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462043, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462044, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462045, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462046) {
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D424 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462046 * Math.PI / 180,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D425 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462044 / 2,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D426 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462045 / 2,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D427 = Math.cos(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D424),
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D428 = Math.sin(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D424),
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D429 = Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462044 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D427) / 2 + Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462045 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D428) / 2,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D430 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D425 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D427 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D429,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D431 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D426 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D428 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D429,
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB61 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D425 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D427 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D429,
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB62 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D426 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D428 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D429;
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462043.createLinearGradient(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D430, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D431, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB61, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB62);
    }
    _createRadialGradient(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462051, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462052, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462053, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462054, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462055) {
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D440 = Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462054, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462055) / 2;
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462051.createRadialGradient(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462052, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462053, 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462052, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462053, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D440);
    }
    _createAngularGradient(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462061, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462062, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462063, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462064, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462065, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462066, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462067, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462068) {
      if ("createConicGradient" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462061) {
        let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D148 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462066 - 90) * Math.PI / 180,
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46600 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462061.createConicGradient(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D148, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462062, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462063),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46601 = he();
        for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462067) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226.color === undefined || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226.position === undefined || Number.isNaN(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226.position) || Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226.position) === false || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46600.addColorStop(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226.position, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46601.getColorString(undefined, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226.color, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462068 ?? 1) * (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226.opacity ?? 1)));
        return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46600;
      }
      return this._createRadialGradient(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462061, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462062, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462063, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462064, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462065);
    }
    _fillDiamondGradient(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462077, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462078, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462079, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462080) {
      let {
        fill: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462081
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462079;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462081) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462082 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462078.width,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462083 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462078.height;
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462082 <= 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462083 <= 0) return;
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D442 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462082 / 2,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D443 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462083 / 2,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462084 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462081.opacity,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462085 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462081.gradientStops,
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A72 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462085 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462085.length >= 2 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462085 : [{
          'position': 0,
          'color': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462081.color || q.fill
        }, {
          'position': 1,
          'color': "#ffffff"
        }],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462086 = he();
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462077.save(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462080 === "evenodd" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462077.clip('evenodd') : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462077.clip();
      let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A73 = [{
        'points': [[-1, -1], [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462082 + 1, -1], [var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D442, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D443 + 1]],
        'gx': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D442,
        'gy': 0
      }, {
        'points': [[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462082 + 1, -1], [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462082 + 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462083 + 1], [var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D442 - 1, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D443]],
        'gx': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462082,
        'gy': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D443
      }, {
        'points': [[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462082 + 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462083 + 1], [-1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462083 + 1], [var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D442, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D443 - 1]],
        'gx': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D442,
        'gy': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462083
      }, {
        'points': [[-1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462083 + 1], [-1, -1], [var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D442 + 1, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D443]],
        'gx': 0,
        'gy': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D443
      }];
      for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602 of var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A73) {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462077.save();
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46227 = new Path2D();
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46227.moveTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602.points[0][0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602.points[0][1]), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46227.lineTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602.points[1][0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602.points[1][1]), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46227.lineTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602.points[2][0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602.points[2][1]), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46227.closePath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462077.clip(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46227);
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462077.createLinearGradient(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D442, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D443, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602.gx, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602.gy);
        for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104 of var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A72) {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462086.getColorString(undefined, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104.color, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462084 ?? 1) * (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104.opacity ?? 1));
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228.addColorStop(Math.max(0, Math.min(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104.position)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630);
        }
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462077.fillStyle = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462077.fillRect(0, 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462082, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462083), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462077.restore();
      }
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462077.restore();
    }
    _addGradientStops(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462097, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462098, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462099) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462100 = he();
      for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46603 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462098) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462100.getColorString(undefined, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46603.color, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462099 ?? 1) * (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46603.opacity ?? 1)),
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D60 = Math.max(0, Math.min(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46603.position));
        Number.isNaN(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D60) || Number.isFinite(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D60) === false || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D60 === undefined || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229 === undefined || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462097.addColorStop(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D60, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229);
      }
    }
    _getFillStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462105, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462106) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462107, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462108;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462109 = he(),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462110 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462107 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462105.fill) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462107.color) || q.fill,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462111 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462108 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462105.fill) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462108.opacity) ?? q.fillOpacity;
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462109.getColorString(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462106, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462110, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462111);
    }
    _getStrokeStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462119) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462120, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462121;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462122 = he(),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462123 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462120 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462119.stroke) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462120.color) || q.stroke;
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462122.getColorString(undefined, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462123, ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462121 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462119.stroke) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462121.opacity) ?? q.strokeOpacity);
    }
    _applyFillModifierOverlay(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462129, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462130) {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462130) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462131;
      switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462130) {
        case "darken":
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462131 = 'rgba(0,\x200,\x200,\x200.30)';
          break;
        case "darkenLess":
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462131 = "rgba(0, 0, 0, 0.12)";
          break;
        case 'lighten':
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462131 = 'rgba(255,\x20255,\x20255,\x200.30)';
          break;
        case "lightenLess":
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462131 = "rgba(255, 255, 255, 0.12)";
          break;
        default:
          return;
      }
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462129.save(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462129.fillStyle = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462131, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462129.fill(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462129.restore();
    }
    _renderTextBox(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462135, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462136, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462137) {}
    _renderCxnPoints(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462141, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462142) {
      let {
        cxnLst: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462143
      } = this.presetShapeConfig;
      if (!(!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462143 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462143.length === 0)) for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46604 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462143) {
        if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46604.x || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46604.y) continue;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230 = this._getValueFromGdRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46604.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462142),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231 = this._getValueFromGdRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46604.y, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462142);
        Number.isNaN(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230) || Number.isNaN(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231) || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462141.save(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462141.beginPath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462141.arc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231, q.cxnPointRadius, 0, 2 * Math.PI), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462141.fillStyle = q.cxnPointFill, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462141.fill(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462141.strokeStyle = q.cxnPointStroke, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462141.lineWidth = q.cxnPointStrokeWidth, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462141.stroke(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462141.restore());
      }
    }
    _getValueFromGdRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462147, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462148) {
      return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462147 == "number" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462147 : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462147 == "string" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462148[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462147] : NaN;
    }
    _accumulatePathBounds(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462151, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462152, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462153, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462154, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462155) {
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB51 = {
          'x': NaN,
          'y': NaN
        },
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462156 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46605, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46606) => {
          !Number.isNaN(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46605) && !Number.isNaN(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46606) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46605 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462155.minX && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462155.minX = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46605), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46605 > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462155.maxX && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462155.maxX = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46605), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46606 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462155.minY && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462155.minY = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46606), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46606 > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462155.maxY && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462155.maxY = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46606));
        };
      for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46609 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462151) {
        let {
            command: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232,
            points: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233,
            center: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234
          } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46609,
          var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A13 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105 => this._getValueFromGdRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462152)),
          var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A14 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232 === 'A' ? [var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A13[0], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A13[1]] : undefined;
        switch (this._scalePathPoints(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A13, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462153, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462154), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232) {
          case 'L':
          case 'M':
            var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB51.x = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A13[0], var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB51.y = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A13[1], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462156(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A13[0], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A13[1]);
            break;
          case 'C':
            var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB51.x = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A13[4], var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB51.y = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A13[5], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462156(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A13[0], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A13[1]), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462156(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A13[2], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A13[3]), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462156(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A13[4], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A13[5]);
            break;
          case 'Q':
            var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB51.x = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A13[2], var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB51.y = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A13[3], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462156(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A13[0], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A13[1]), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462156(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A13[2], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A13[3]);
            break;
          case 'A':
            if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234 && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB51.x = this._getValueFromGdRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234[0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462152), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB51.y = this._getValueFromGdRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234[1], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462152)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233.length >= 4) {
              let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A13[0],
                var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A13[1],
                var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A13[2],
                var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A13[3];
              if (Number.isNaN(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631) || Number.isNaN(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632) || Number.isNaN(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633) || Number.isNaN(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634)) break;
              let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D9 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633 / 60000 * (Math.PI / 180),
                var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D10 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634 / 60000 * (Math.PI / 180),
                var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB2 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D9 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D10,
                var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A6 = Math.abs(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D10) >= 2 * Math.PI - 0.001,
                var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A7 = this.presetShapeConfig["arcAngleMode"] !== "parametric" && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234 && !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A6,
                var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635 = (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A14 == null ? undefined : var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A14[0]) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631,
                var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636 = (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A14 == null ? undefined : var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A14[1]) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632,
                var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637 = var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A7 ? this._ooxmlAngleToParametric(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D9, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636) : var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D9,
                var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638 = var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A7 ? this._ooxmlAngleToParametric(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB2, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636) : var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB2,
                var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D11 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB51.x - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631 * Math.cos(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637),
                var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D12 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB51.y - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632 * Math.sin(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637);
              var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB51.x = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D11 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631 * Math.cos(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB51.y = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D12 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632 * Math.sin(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462156(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D11 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631 * Math.cos(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D12 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632 * Math.sin(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462156(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB51.x, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB51.y);
              let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A8 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234[2] !== undefined ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234[2] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634 < 0;
              this._updateArcCardinalBounds(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D11, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D12, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638, var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A8, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462156);
            }
            break;
          default:
            break;
        }
      }
    }
    _scalePathPoints(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462163, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462164, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462165, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462166) {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462165 !== 1 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462166 !== 1) switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462163) {
        case 'M':
        case 'L':
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462164[0] *= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462165, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462164[1] *= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462166;
          break;
        case 'Q':
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462164[0] *= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462165, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462164[1] *= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462166, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462164[2] *= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462165, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462164[3] *= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462166;
          break;
        case 'C':
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462164[0] *= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462165, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462164[1] *= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462166, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462164[2] *= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462165, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462164[3] *= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462166, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462164[4] *= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462165, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462164[5] *= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462166;
          break;
        case 'A':
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462164[0] *= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462165, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462164[1] *= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462166;
          break;
      }
    }
    getGdValue(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462171, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462172) {
      return this._getValueFromGdRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462171, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462172);
    }
    _renderAdjustHandles(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462175, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462176) {
      let {
        ahLst: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462177
      } = this.presetShapeConfig;
      if (!(!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462177 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462177.length === 0)) for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46610 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462177) {
        if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46610.pos) continue;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235 = this._getValueFromGdRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46610.pos['x'], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462176),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236 = this._getValueFromGdRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46610.pos['y'], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462176);
        if (Number.isNaN(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235) || Number.isNaN(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236)) continue;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46237 = q.adjHandleSize,
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D61 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46237 / 2;
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462175.save(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462175.translate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462175.rotate(Math.PI / 4), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462175.beginPath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462175.rect(-var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D61, -var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D61, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46237, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46237), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462175.fillStyle = q.adjHandleFill, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462175.fill(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462175.strokeStyle = q.adjHandleStroke, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462175.lineWidth = q.adjHandleStrokeWidth, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462175.stroke(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462175.restore();
      }
    }
  },
  Oe = class extends J {
    constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462181, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462182) {
      super(), W(this, 'name', undefined), W(this, "presetShapeConfig", undefined), this.name = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462181, this.presetShapeConfig = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462182;
    }
  };
export { J as BaseShapeRenderModel };
export { Oe };
