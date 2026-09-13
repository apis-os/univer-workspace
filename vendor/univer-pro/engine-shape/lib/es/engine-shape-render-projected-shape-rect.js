import { combineDrawingEffectFilter, createDrawingEffectFilter, expandDrawingEffectBounds } from '@univerjs/engine-render';
import { BooleanNumber, DependentOn, HorizontalAlign, IConfigService, ImageSourceType, Inject, Injector, JSONX, Plugin, RichTextBuilder, RichTextValue, TextX, Tools, UniverInstanceType, VerticalAlign, createIdentifier, generateRandomId, getSingleDataStreamChange, merge, toDisposable } from '@univerjs/core';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { HostExternalReferenceModel } from '@univerjs-pro/engine-formula';
import { rt } from "./engine-shape-shape3-drect.js";
import { An, Be, Bt, Ct, Dn, Fe, He, Hn, Ie, In, Kn, Le, Ln, Ne, Nn, Pe, Re, Tn, Ue, Ve, Vt, X, Zt, dn, he, un, vn, xt, ze, zn } from "./internal-core-endo.js";
import { Me } from "./engine-shape-shape-bevel-extent.js";
import { z } from "./engine-shape-shape-render-mode-enum.js";
import { Ae } from "./engine-shape-default-shape-bevel-extent.js";
function it(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466490, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466491, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466492, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466493, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466494, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466495) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466496;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466497 = rt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466492, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466491, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466493),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D876 = Math.max(0, ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466496 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466494.shape3d) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466496.extrusionHeight) ?? 0);
  var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D876 > 0 && at(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466490, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466497, rt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466492, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466491, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466493, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D876), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466494), dt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466490, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466497, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466494, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466495);
}
function at(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466506, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466507, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466508, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466509) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466510, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466511, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466512;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466513 = Pn(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466510 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466509.shape3d) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466510.extrusionColor) ?? Mn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466509), ut(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466509.scene3d)),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB125 = {
      'points': [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466508.topLeft, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466508.topRight, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466508.bottomRight, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466508.bottomLeft],
      'normal': {
        'x': 0,
        'y': 0,
        'z': -1
      },
      'shade': 0.58
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466514 = [{
      'points': [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466508.topLeft, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466508.topRight, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466507.topRight, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466507.topLeft],
      'normal': {
        'x': 0,
        'y': -1,
        'z': 0
      },
      'shade': 1.08
    }, {
      'points': [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466508.topRight, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466508.bottomRight, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466507.bottomRight, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466507.topRight],
      'normal': {
        'x': 1,
        'y': 0,
        'z': 0
      },
      'shade': 0.74
    }, {
      'points': [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466508.bottomRight, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466508.bottomLeft, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466507.bottomLeft, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466507.bottomRight],
      'normal': {
        'x': 0,
        'y': 1,
        'z': 0
      },
      'shade': 0.62
    }, {
      'points': [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466508.bottomLeft, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466508.topLeft, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466507.topLeft, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466507.bottomLeft],
      'normal': {
        'x': -1,
        'y': 0,
        'z': 0
      },
      'shade': 0.75
    }].filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462196 => ot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462196.points)).sort((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462197, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462198) => St(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462197.points) - St(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462198.points));
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466506.save(), ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466511 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466509.shape3d) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466511.material) === 'legacyWireframe') {
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A76 = [var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB125, {
      'points': [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466508.topLeft, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466508.topRight, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466507.topRight, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466507.topLeft],
      'normal': {
        'x': 0,
        'y': -1,
        'z': 0
      }
    }, {
      'points': [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466508.topRight, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466508.bottomRight, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466507.bottomRight, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466507.topRight],
      'normal': {
        'x': 1,
        'y': 0,
        'z': 0
      }
    }, {
      'points': [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466508.bottomRight, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466508.bottomLeft, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466507.bottomLeft, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466507.bottomRight],
      'normal': {
        'x': 0,
        'y': 1,
        'z': 0
      }
    }, {
      'points': [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466508.bottomLeft, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466508.topLeft, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466507.topLeft, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466507.bottomLeft],
      'normal': {
        'x': -1,
        'y': 0,
        'z': 0
      }
    }];
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46611 of var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A76) yt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466506, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46611.points, ht(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466509), 0.75);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466506.restore();
    return;
  }
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466506.globalAlpha *= Kn((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466512 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466509.shape3d) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466512.material);
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462199 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466514) {
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D149 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462199.shade * gt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466509.scene3d),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46612 = ct(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466509, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462199.normal, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D149);
    st(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466506, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462199.points, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466509, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466513, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D149, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46612);
  }
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466506.restore();
}
function ot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466524) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D878 = 0;
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D457 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D457 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466524.length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D457 += 1) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46613 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466524[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D457],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46614 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466524[(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D457 + 1) % var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466524.length];
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D878 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46613.x * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46614.y - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46614.x * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46613.y;
  }
  return var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D878 > 0.000001;
}
function st(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466526, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466527, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466528, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466529, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466530, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466531) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466532, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466533;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466534 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466528.fill;
  if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466532 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466528.shape3d) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466532.extrusionColor || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466534 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466534.fillType) !== 3 || !((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466533 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466534.gradientStops) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466533.length)) {
    vt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466526, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466527, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466531 ? Tn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466529, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466531) : Nn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466529, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466530));
    return;
  }
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466535 = Qt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466526, Ct(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466527), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466534.gradientType, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466534.gradientAngle),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466536 = he();
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462200 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466534.gradientStops) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466535.addColorStop(X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462200.position, 0, 1), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466536.getColorString(undefined, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466531 ? Tn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462200.color, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466531) : Nn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462200.color, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466530), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462200.opacity ?? 1));
  bt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466526, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466527), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466526.fillStyle = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466535, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466526.fill();
}
function ct(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466548, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466549, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466550) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466551;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466552 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466551 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466548.shape3d) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466551.material,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466553 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466548.scene3d;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466552 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466553) return;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466552 === "flat") return {
    'scale': Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466549.y) > 0.5 ? 1 : 0.88,
    'add': 0
  };
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466554 = Ve.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466552);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466554) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462201 = At(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466553, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466549, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466554);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466552 === 'powder') return lt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466553, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466549);
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D458 = 0.5 + 0.5 * X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466550, 0, 1);
    return {
      'scale': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462201.scale * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466550,
      'add': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462201.add * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D458
    };
  }
  if (!jt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466552)) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466555 = Vt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466549, zn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466553)),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466556 = An(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466553),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466557 = Fn(0.3, 0.42, -(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466555.x * Math.cos(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466556) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466555.y * Math.sin(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466556))),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB127 = {
      'scale': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466550 + (0.38 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466550) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466557,
      'add': 160 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466557
    };
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466552 === "metal") return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB127;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466558 = Dn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466552),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D880 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466552 === "softmetal" ? 0.72 : 0.84;
  return {
    'scale': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466558.scale + (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB127.scale - Ne.scale) * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D880,
    'add': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466558.add + (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB127.add - Ne.add) * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D880
  };
}
function lt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466570, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466571) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466572, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466573;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466574 = zn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466570),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466575 = Vt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466571, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466574);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466570.camera['preset'].startsWith("perspective")) return {
    'scale': X(0.27701037 + 0.00909104 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466575.x - 0.05250331 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466575.y - 0.23160898 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466575.z, 0.12, 0.5),
    'add': X(134.34738836 + 60.85719863 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466575.x - 35.50266264 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466575.y - 113.04307342 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466575.z, 56, 200)
  };
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466576 = vn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466574.revolution),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466577 = Hn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466570.camera["preset"]),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D882 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466572 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466577.projection) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466572.x) ?? 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D883 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466573 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466577.projection) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466573.y) ?? 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D884 = Math.hypot(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D882, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D883),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB129 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D884 > 0 ? {
      'x': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D882 / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D884,
      'y': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D883 / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D884
    } : {
      'x': 0,
      'y': 0
    },
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A228 = [1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466575.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466575.y, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466575.z, Math.cos(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466576), Math.sin(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466576), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB129.x, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB129.y];
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462202 of ze) {
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D150 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466575.x - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462202[0]) ** 2 + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466575.y - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462202[1]) ** 2 + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466575.z - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462202[2]) ** 2,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D151 = (Math.cos(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466576) - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462202[3]) ** 2 + (Math.sin(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466576) - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462202[4]) ** 2,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D152 = (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB129.x - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462202[5]) ** 2 + (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB129.y - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462202[6]) ** 2;
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A228.push(Math.exp(-8 * (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D150 + 0.22 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D151 + 0.12 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D152)));
  }
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D885 = 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D886 = 0;
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D459 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D459 < Be.length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D459++) var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D885 += var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A228[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D459] * Be[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D459][0], var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D886 += var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A228[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D459] * Be[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D459][1];
  return {
    'scale': X(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D885, 0, 0.55),
    'add': X(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D886, 0, 255)
  };
}
function ut(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466586) {
  switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466586 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466586.camera["preset"]) {
    case "perspectiveRelaxed":
    case "perspectiveRelaxedModerately":
      return fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig2D1E(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466586) * 0.4;
    default:
      return 0;
  }
}
function dt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466588, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466589, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466590, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466591) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466592, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466593, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466594, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466595;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466596 = xt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466589),
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A98 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466592 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466590.shape3d) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466592.material) === "legacyWireframe",
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A99 = !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A98 && ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466593 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466590.fill) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466593.fillType) !== 1,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D892 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466594 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466590.shape3d) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466594.contourWidth) ?? 0,
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A100 = var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A98 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466590.stroke !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466590.stroke['lineStrokeType'] !== 1 || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D892 > 0,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466597 = X(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466595 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466590.fill) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466595.opacity) ?? 1, 0, 1);
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466588.save(), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A99 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466588.globalAlpha *= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466597, Kt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466588, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466589, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466590, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466591), mt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466588, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466589, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466590)), ft(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466588, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466596, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466590, var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A98, var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A100, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D892), pt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466588, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466589, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466590, var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A98), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466588.restore();
}
function ft(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466608, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466609, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466610, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466611, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466612, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466613) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466614, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466615, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466616;
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466612 && yt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466608, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466609, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466611 ? ht(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466610) : ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466614 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466610.shape3d) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466614.contourColor) ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466615 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466610.stroke) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466615.color) ?? "#FFFFFF", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466611 ? 0.75 : Math.max(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466616 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466610.stroke) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466616.width) ?? 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466613));
}
function pt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466626, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466627, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466628, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466629) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466630, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466631;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466632 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466630 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466628.shape3d) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466630.topBevel;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466629 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466632) return;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D894 = Math.max(Me(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466632.preset, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466632.width), Me(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466632.preset, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466632.height));
  var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D894 <= 0 || an(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466626, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466627, wt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466627, X(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D894 / Math.max(1, 2 * Math.min(Tt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466627.topLeft, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466627.topRight), Tt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466627.topLeft, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466627.bottomLeft))), 0.02, 0.28)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466632.preset, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466628.scene3d, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466631 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466628.shape3d) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466631.material, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D894);
}
function mt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466640, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466641, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466642) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466643, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466644;
  if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466640.createLinearGradient != "function") return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466645 = xt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466641),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466646 = Ct(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466645),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466647 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466643 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466642.shape3d) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466643.material;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466647) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462203 = zt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466642.scene3d);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462203 <= 0) return;
    Yt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466640, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466641, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466642, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462203);
    return;
  }
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466647 === "flat" || ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466644 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466642.scene3d) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466644.camera["preset"]) === 'orthographicFront') {
    Ot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466640, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466645, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466646, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466642, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466647);
    return;
  }
  Ot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466640, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466645, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466646, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466642, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466647);
}
function ht(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466656) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466657, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466658, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466659;
  return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466657 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466656.shape3d) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466657.contourColor) ?? (((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466658 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466656.stroke) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466658.lineStrokeType) === 1 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466659 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466656.stroke) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466659.color) ?? "#4A4A4A";
}
function gt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466664) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466664) return 1;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466665 = vn(zn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466664).latitude);
  return 1 + Math.max(0, Math.sin(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466665)) * 0.48;
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig2D1E(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466668) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466668 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466668.lightRig["direction"] !== 't') return 0;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466669 = vn(zn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466668).latitude);
  return Math.max(0, Math.sin(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466669)) * 0.36;
}
function vt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466672, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466673, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466674) {
  bt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466672, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466673), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466672.fillStyle = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466674, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466672.fill();
}
function yt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466678, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466679, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466680, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466681) {
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466681 <= 0 || (bt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466678, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466679), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466678.strokeStyle = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466680, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466678.lineWidth = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466681, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466678.stroke());
}
function bt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466686, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466687) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466688 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466687[0];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466688) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466686.beginPath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466686.moveTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466688.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466688.y);
    for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D153 = 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D153 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466687.length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D153 += 1) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46238 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466687[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D153];
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466686.lineTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46238.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46238.y);
    }
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466686.closePath();
  }
}
function St(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466694) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466694.reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462204, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462205) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462204 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462205.depth, 0) / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466694.length;
}
function wt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466698, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466699) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB131 = {
      'x': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466698.topLeft['x'] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466698.topRight['x'] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466698.bottomRight['x'] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466698.bottomLeft['x']) / 4,
      'y': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466698.topLeft['y'] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466698.topRight['y'] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466698.bottomRight['y'] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466698.bottomLeft['y']) / 4,
      'depth': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466698.topLeft['depth'] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466698.topRight['depth'] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466698.bottomRight["depth"] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466698.bottomLeft["depth"]) / 4
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466700 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462210 => ({
      'x': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462210.x + (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB131.x - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462210.x) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466699,
      'y': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462210.y + (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB131.y - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462210.y) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466699,
      'depth': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462210.depth + (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB131.depth - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462210.depth) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466699
    });
  return {
    'topLeft': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466700(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466698.topLeft),
    'topRight': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466700(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466698.topRight),
    'bottomRight': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466700(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466698.bottomRight),
    'bottomLeft': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466700(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466698.bottomLeft)
  };
}
function Tt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466704, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466705) {
  return Math.hypot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466705.x - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466704.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466705.y - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466704.y);
}
function Ot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466738, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466739, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466740, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466741, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466742) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466743;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466744 = Mn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466741),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466745 = kt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466742, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466741.scene3d, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466741.shape3d),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466746 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466741.fill,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466747 = X((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466746 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466746.opacity) ?? 1, 0, 1),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D898 = Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466738.globalAlpha) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466738.globalAlpha : 1;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466738.save(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466747 > 0 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466738.globalAlpha = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D898 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466747), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466738.globalCompositeOperation = "source-atop", bt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466738, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466739), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466738.clip(), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466746 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466746.fillType) === 3 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466743 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466746.gradientStops) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466743.length) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462211 = Qt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466738, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466740, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466746.gradientType, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466746.gradientAngle),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462212 = he();
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46615 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466746.gradientStops) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462211.addColorStop(X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46615.position, 0, 1), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462212.getColorString(undefined, Tn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46615.color, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466745), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46615.opacity ?? 1));
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466738.fillStyle = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462211;
  } else (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466746 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466746.fillType) === 5 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466738.fillStyle = 'rgba(255,\x20255,\x20255,\x20' + X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466745.add / 255, 0, 0.72) + ')' : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466738.fillStyle = Tn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466744, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466745);
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466738.fillRect(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466740.left, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466740.top, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466740.right - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466740.left, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466740.bottom - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466740.top), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466738.restore();
}
function kt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466758, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466759, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466760) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466761;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466762 = Dn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466758);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466759) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466762;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466763 = Ve.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466758);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466763) return At(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466759, {
    'x': 0,
    'y': 0,
    'z': 1
  }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466763);
  if (!jt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466758)) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466762;
  if (((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466760 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466760.extrusionHeight) ?? 0) > 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466760 != null && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466761 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466760.topBevel) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466761.preset) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462213 = Pt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466759);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466758 === "metal") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462213;
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D460 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466758 === 'softmetal' ? 0.72 : 0.84;
    return {
      'scale': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466762.scale + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462213.scale - Ne.scale) * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D460,
      'add': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466762.add + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462213.add - Ne.add) * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D460
    };
  }
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466764 = Mt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466759.camera["preset"]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466765 = zn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466759),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466766 = Bt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466765),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466767 = vn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466765.revolution),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB133 = {
      'x': Math.cos(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466767),
      'y': Math.sin(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466767)
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466768 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466764.scale,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466769 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466764.add;
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462214 of Pe) {
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D154 = (Math.max(0, Nt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466766, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462214.direction)) * ((var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB133.x * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462214.tangent['x'] + var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB133.y * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462214.tangent['y'] + 1) / 2)) ** var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462214.sharpness;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466768 += var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D154 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462214.scale, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466769 += var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D154 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462214.add;
  }
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466758 === "metal") return {
    'scale': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466768,
    'add': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466769
  };
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D900 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466758 === 'softmetal' ? 0.72 : 0.84;
  return {
    'scale': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466762.scale + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466768 - Ne.scale) * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D900,
    'add': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466762.add + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466769 - Ne.add) * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D900
  };
}
function At(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466782, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466783, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466784) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466785 = zn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466782),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466786 = Vt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466783, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466785),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466787 = vn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466785.revolution),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466788 = It(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466782.camera["preset"]),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A230 = [1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466786.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466786.y, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466786.z, Math.cos(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466787), Math.sin(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466787), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466788[0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466788[1], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466788[2]];
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462215 of Re) {
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D155 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466788[0] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462215[5] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466788[1] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462215[6] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466788[2] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462215[7],
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D156 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466786.x * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462215[0] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466786.y * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462215[1] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466786.z * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462215[2],
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D157 = (Math.cos(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466787) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462215[3] + Math.sin(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466787) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462215[4] + 1) / 2;
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A230.push(Math.exp(Fe * (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D156 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D157 - 1)) * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D155);
  }
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D902 = 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D903 = 0;
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D461 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D461 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466784.length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D461++) var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D902 += var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A230[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D461] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466784[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D461][0], var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D903 += var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A230[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D461] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466784[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D461][1];
  return {
    'scale': X(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D902, 0.05, 2.5),
    'add': X(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D903, -255, 255)
  };
}
function jt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466796) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466796 === 'metal' || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466796 === "softmetal" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466796 === "legacyMetal";
}
function Mt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466798) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466798.startsWith('perspective') ? {
    'scale': 1.0503054,
    'add': 0.510754
  } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466798.startsWith("oblique") ? {
    'scale': 1.0605068,
    'add': 2.027832
  } : Ne;
}
function Nt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466800, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466801) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466800.x * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466801.x + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466800.y * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466801.y + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466800.z * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466801.z;
}
function Pt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466804, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466805 = {
  'x': 0,
  'y': 0,
  'z': 1
}, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466806 = true) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466807 = zn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466804),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466808 = Vt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466805, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466807),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466809 = vn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466807.revolution),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466810 = It(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466804.camera["preset"]),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A232 = [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466808.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466808.y, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466808.z, Math.cos(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466809), Math.sin(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466809), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466810[0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466810[1], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466810[2]],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466811 = Le[0][0],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466812 = Le[0][1];
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D462 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D462 < var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A232.length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D462++) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466811 += var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A232[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D462] * Le[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D462 + 1][0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466812 += var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A232[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D462] * Le[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D462 + 1][1];
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D463 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D463 < Ie.length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D463++) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46616 = Ie[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D463];
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466810[0] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46616[5] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466810[1] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46616[6] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466810[2] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46616[7] === 0) continue;
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D158 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466808.x * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46616[0] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466808.y * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46616[1] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466808.z * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46616[2],
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D159 = (Math.cos(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466809) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46616[3] + Math.sin(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466809) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46616[4] + 1) / 2,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D160 = Math.exp(Fe * (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D158 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D159 - 1)),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46617 = Le[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D463 + 9];
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466811 += var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D160 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46617[0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466812 += var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D160 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46617[1];
  }
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB135 = {
      'scale': X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466811, 0.1, 2),
      'add': X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466812, -255, 255)
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466813 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466806 ? Ft(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466804) : undefined;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466813 ? {
    ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB135,
    'colorCurve': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466813
  } : var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB135;
}
function Ft(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466824) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466825, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466826;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466824.camera["rotation"] || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466825 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466824.camera["projection"]) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466825.rotation || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466824.lightRig["preset"] !== 'threePt' || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466824.lightRig['direction'] !== 'b' || In(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466826 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466824.lightRig['rotation']) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466826.revolution) ?? 0) !== -90) return;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D906 = He.indexOf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466824.camera["preset"]);
  if (!(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D906 < 0)) return Ue[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D906];
}
function It(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466830) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466830.startsWith("perspective") ? [0, 1, 0] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466830.startsWith("oblique") ? [0, 0, 1] : [1, 0, 0];
}
function zt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466836) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466837;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466836 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466836.lightRig["direction"] !== 't') return 0;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466838 = Hn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466836.camera["preset"]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466839 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466838.projection,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466840 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466837 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466836.camera["projection"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466837.rotation) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466836.camera["rotation"] ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466838.rotation,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D912 = Math.hypot((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466839 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466839.x) ?? 0, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466839 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466839.y) ?? 0);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466840 && var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D912 > 0) {
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D464 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466839 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466839.x) ?? 0) / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D912,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D465 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466839 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466839.y) ?? 0) / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D912;
    return X(0.0175 + Math.max(0, -var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D465) * 0.0313 + Math.max(0, -var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D464) * 0.1019, 0, 0.5);
  }
  return X(Gt(Bt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466840)), 0.006, 0.22);
}
function Gt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466872) {
  let {
      x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466873,
      y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466874,
      z: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466875
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466872,
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A234 = [1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466873, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466874, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466875, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466873 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466874, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466874 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466875, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466875 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466873, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466873 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466873 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466874 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466874, 3 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466875 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466875 - 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466874 * (3 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466873 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466873 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466874 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466874), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466873 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466874 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466875, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466874 * (5 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466875 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466875 - 1), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466875 * (5 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466875 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466875 - 3), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466873 * (5 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466875 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466875 - 1), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466875 * (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466873 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466873 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466874 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466874), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466873 * (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466873 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466873 - 3 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466874 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466874)],
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A235 = [0.1339925535, -0.0882337661, 0.1329801261, -0.1637931143, 0.0010892055, -0.2554983665, 0.1954903442, -0.0182261931, 0.1028526997, 0.0118800859, -0.2547162111, 0.0460858352, -0.067237673, -0.0783788338, 0.2356103105, -0.0070436521];
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A234.reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462216, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462217, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462218) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462216 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462217 * var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A235[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462218], 0);
}
function Kt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466880, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466881, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466882, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466883) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466884;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466885 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466882.fill,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466886 = xt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466881);
  if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466885 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466885.fillType) === 5) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466883 && qt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466880, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466881, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466883);
    return;
  }
  if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466885 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466885.fillType) !== 3 || !((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466884 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466885.gradientStops) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466884.length)) {
    vt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466880, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466886, Mn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466882));
    return;
  }
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466887 = Qt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466880, Ct(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466886), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466885.gradientType, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466885.gradientAngle),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466888 = he();
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462219 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466885.gradientStops) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466887.addColorStop(X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462219.position, 0, 1), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466888.getColorString(undefined, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462219.color, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462219.opacity ?? 1));
  bt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466880, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466886), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466880.fillStyle = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466887, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466880.fill();
}
function qt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466898, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466899, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466900) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466901 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466900.naturalWidth || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466900.width,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466902 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466900.naturalHeight || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466900.height;
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466901 <= 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466902 <= 0 || (Jt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466898, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466900, [[0, 0], [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466901, 0], [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466901, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466902]], [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466899.topLeft, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466899.topRight, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466899.bottomRight]), Jt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466898, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466900, [[0, 0], [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466901, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466902], [0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466902]], [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466899.topLeft, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466899.bottomRight, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466899.bottomLeft]));
}
function Jt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466908, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466909, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466910, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466911) {
  let [[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466912, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466913], [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466914, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466915], [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466916, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466917]] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466910,
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466918, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466919, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466920] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466911,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D926 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466912 * (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466915 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466917) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466914 * (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466917 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466913) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466916 * (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466913 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466915);
  if (Math.abs(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D926) < 0.000001) return;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D927 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466918.x * (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466915 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466917) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466919.x * (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466917 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466913) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466920.x * (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466913 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466915)) / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D926,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D928 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466918.x * (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466916 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466914) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466919.x * (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466912 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466916) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466920.x * (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466914 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466912)) / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D926,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D929 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466918.x * (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466914 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466917 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466916 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466915) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466919.x * (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466916 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466913 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466912 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466917) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466920.x * (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466912 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466915 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466914 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466913)) / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D926,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D930 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466918.y * (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466915 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466917) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466919.y * (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466917 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466913) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466920.y * (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466913 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466915)) / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D926,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D931 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466918.y * (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466916 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466914) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466919.y * (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466912 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466916) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466920.y * (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466914 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466912)) / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D926,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D932 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466918.y * (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466914 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466917 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466916 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466915) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466919.y * (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466916 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466913 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466912 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466917) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466920.y * (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466912 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466915 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466914 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466913)) / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D926;
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466908.save(), bt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466908, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466911), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466908.clip(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466908.transform(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D927, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D930, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D928, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D931, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D929, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D932), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466908.drawImage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466909, 0, 0), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466908.restore();
}
function Yt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466934, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466935, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466936, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466937) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466938;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466939 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466936.fill,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466940 = xt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466935),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466941 = Ct(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466940),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466942 = X((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466939 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466939.opacity) ?? 1, 0, 1),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D940 = Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466934.globalAlpha) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466934.globalAlpha : 1;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466934.save(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466942 > 0 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466934.globalAlpha = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D940 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466942), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466934.globalCompositeOperation = "source-atop", bt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466934, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466940), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466934.clip(), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466939 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466939.fillType) === 5) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462220 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466934.createLinearGradient(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466941.left, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466941.top, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466941.right, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466941.bottom);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462220.addColorStop(0, "rgba(255,255,255," + X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466937 * 0.75, 0, 0.32) + ')'), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462220.addColorStop(1, "rgba(255,255,255," + X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466937 * 0.25, 0, 0.16) + ')'), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466934.fillStyle = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462220;
  } else {
    if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466939 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466939.fillType) === 3 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466938 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466939.gradientStops) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466938.length) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46618 = Qt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466934, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466941, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466939.gradientType, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466939.gradientAngle);
      for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46239 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466939.gradientStops) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46618.addColorStop(X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46239.position, 0, 1), Xt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46239.color, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466937 / Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46239.opacity ?? 1, 0.12)));
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466934.fillStyle = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46618;
    } else {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46619 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466934.createLinearGradient(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466941.left, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466941.top, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466941.right, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466941.bottom),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46620 = Mn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466936);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46619.addColorStop(0, Xt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46620, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466937 + 0.02)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46619.addColorStop(1, Xt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46620, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466937 - 0.02)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466934.fillStyle = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46619;
    }
  }
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466934.fillRect(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466941.left, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466941.top, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466941.right - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466941.left, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466941.bottom - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466941.top), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466934.restore();
}
function Xt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466952, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466953) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466954 = Zt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466952);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466954) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466952;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D942 = X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466953, 0, 1) * 255;
  return "rgb(" + Math.round(X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466954.r + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D942, 0, 255)) + ',\x20' + Math.round(X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466954.g + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D942, 0, 255)) + ',\x20' + Math.round(X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466954.b + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D942, 0, 255)) + ')';
}
function Qt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466964, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466965, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466966, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466967) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D944 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466965.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466965.right) / 2,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D945 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466965.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466965.bottom) / 2;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466966 === 2) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466964.createRadialGradient(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D944, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D945, 0, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D944, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D945, Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466965.right - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466965.left, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466965.bottom - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466965.top) / 2);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466966 === 3 && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466964.createConicGradient == 'function') return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466964.createConicGradient(vn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466967 ?? 0), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D944, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D945);
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466968 = vn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466967 ?? 0),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D946 = Math.cos(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466968),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D947 = Math.sin(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466968),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D948 = (Math.abs((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466965.right - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466965.left) * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D946) + Math.abs((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466965.bottom - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466965.top) * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D947)) / 2;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466964.createLinearGradient(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D944 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D946 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D948, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D945 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D947 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D948, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D944 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D946 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D948, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D945 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D947 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D948);
}
function an(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467090, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467091, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467092, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467093, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467094, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467095, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467096) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467097 = dn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467093);
  on(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467090, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467091.topLeft, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467091.topRight, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467092.topRight, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467092.topLeft], un(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467093, "top", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467094, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467095, 0.5)), on(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467090, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467091.topRight, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467091.bottomRight, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467092.bottomRight, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467092.topRight], un(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467093, "right", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467094, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467095, 0.5)), on(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467090, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467091.bottomRight, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467091.bottomLeft, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467092.bottomLeft, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467092.bottomRight], un(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467093, "bottom", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467094, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467095, 0.5)), on(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467090, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467091.bottomLeft, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467091.topLeft, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467092.topLeft, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467092.bottomLeft], un(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467093, "left", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467094, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467095, 0.5)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467097.inner && yt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467090, xt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467092), Ln(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467097.inner), Math.max(0.75, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467096 * 0.15));
}
function on(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467106, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467107, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467108) {
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467108 !== 0 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467106.save(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467106.globalCompositeOperation = 'source-atop', vt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467106, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467107, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467108 < 0 ? "rgba(0, 0, 0, " + X(-var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467108, 0, 0.92) + ')' : "rgba(255, 255, 255, " + X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467108, 0, 0.92) + ')'), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467106.restore());
}
function Mn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467360) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467361, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467362;
  return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467361 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467360.fill) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467361.color) ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467362 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467360.shape3d) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467362.extrusionColor) ?? Ae;
}
function Pn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467376, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467377) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467378 = /^#([0-9a-f]{6})$/i.exec(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467376);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467378 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467377 <= 0) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467376;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467379 = Number.parseInt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467378[1], 16),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467380 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462249 => {
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D469 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467379 >> var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462249 & 255;
      return Math.round(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D469 + (255 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D469) * X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467377, 0, 1));
    };
  return '#' + [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467380(16), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467380(8), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467380(0)].map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462251 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462251.toString(16).padStart(2, '0')).join('');
}
function Fn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467392, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467393, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467394) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467395 = X((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467394 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467392) / (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467393 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467392), 0, 1);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467395 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467395 * (3 - 2 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467395);
}
export { it as renderProjectedShapeRect };
