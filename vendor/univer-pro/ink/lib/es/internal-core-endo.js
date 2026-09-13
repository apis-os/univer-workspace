import { ShapeFillEnum, ShapeLineCapEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeTypeEnum } from '@univerjs-pro/engine-shape';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { CommandType, DependentOn, ICommandService, IConfigService, Inject, Injector, Plugin, UniverInstanceType, createIdentifier, merge, toDisposable } from '@univerjs/core';
import { Y, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484 } from "./ink-plugin.js";
const g = 0.0001;
function fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696) {
  return {
    'x': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696.x,
    'y': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696.y
  };
}
;
function v(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698) {
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698,
    'in': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698.in ? fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698.in) : undefined,
    'out': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698.out ? fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698.out) : undefined
  };
}
;
function y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100) {
  return {
    'kind': 'pen',
    'closed': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100.closed,
    'anchors': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100.anchors["map"](v)
  };
}
;
function b(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104) {
  return {
    'x': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102.x + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103.x - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102.x) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104,
    'y': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102.y + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103.y - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102.y) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104
  };
}
;
function x(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109) {
  return Math.hypot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108.x - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108.y - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109.y);
}
;
function S(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D13 = Math.hypot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112.y);
  return var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D13 < g ? {
    'x': 1,
    'y': 0
  } : {
    'x': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112.x / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D13,
    'y': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112.y / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D13
  };
}
;
function C(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116 = x(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115)) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117 = S({
    'x': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114.x - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115.x,
    'y': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114.y - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115.y
  });
  return {
    'x': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114.x + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117.x * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116,
    'y': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114.y + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117.y * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116
  };
}
;
function w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123) {
  let {
    anchors: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124
  } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124.length < 2 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123 < 0 ? null : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124.length - 1 ? {
    'startIndex': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123,
    'endIndex': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123 + 1,
    'start': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123],
    'end': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123 + 1]
  } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122.closed && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124.length - 1 ? {
    'startIndex': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124.length - 1,
    'endIndex': 0,
    'start': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124.length - 1],
    'end': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124[0]
  } : null;
}
;
function T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130 = w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130 ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.start, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.start["out"] ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.start, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.end['in'] ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.end, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.end] : null;
}
;
;
;
;
;
function O(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D15 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188.x - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187.x,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188.y - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187.y,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D17 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D15 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D15 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D17 <= g ? 0 : Math.max(0, Math.min(1, ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186.x - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187.x) * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D15 + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186.y - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187.y) * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16) / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D17)),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB5 = {
      'x': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187.x + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D15 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18,
      'y': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187.y + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18
    };
  return {
    'point': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB5,
    'ratio': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18,
    'distance': x(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB5)
  };
}
;
;
;
;
;
;
function M(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46240, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46241) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46240[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46241],
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46241 === 'in' ? "out" : 'in',
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46240[var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46240.pointType === "symmetric") {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46240[var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB] = C(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46240, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242);
      return;
    }
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46240.pointType === "smooth" && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46240[var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB] = C(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46240, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243 ? x(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46240, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243) : x(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46240, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242)));
  }
}
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var Se = "@univerjs-pro/ink",
  Ce = "1.0.0-insiders.20260907-70fc579";
;
;
;
function Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46467) {
  return function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46467(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466);
  };
}
;
function De(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46470, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474 = arguments.length,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473 === null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473 = Object.getOwnPropertyDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46476;
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function') var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475 = Reflect.decorate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46470, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473);else {
    for (var var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D61 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46470.length - 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D61 >= 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D61--) (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46476 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46470[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D61]) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46476(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474 > 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46476(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46476(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472)) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475);
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474 > 3 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475 && Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475;
}
Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484, "pluginName", "UNIVER_INK_PLUGIN"), Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484, 'packageName', Se), Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484, "version", Ce), Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484, 'type', UniverInstanceType.UNIVER_UNKNOWN), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484 = De([DependentOn(UniverLicensePlugin), Q(1, Inject(Injector)), Q(2, ICommandService), Q(3, IConfigService)], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484);
export { x, fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF1, b, T, O, y, w, S, M };
