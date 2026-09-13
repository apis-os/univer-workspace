import { ShapeFillEnum, ShapeLineCapEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeTypeEnum } from '@univerjs-pro/engine-shape';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { CommandType, DependentOn, ICommandService, IConfigService, Inject, Injector, Plugin, UniverInstanceType, createIdentifier, merge, toDisposable } from '@univerjs/core';
import { M, S, fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF1, x, y } from "./internal-core-endo.js";
function j(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230.anchors[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230.anchors[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231 - 1] ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230.closed ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230.anchors[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230.anchors["length"] - 1] : null),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230.anchors[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231 + 1] ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230.closed ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230.anchors[0] : null),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234 ? S({
      'x': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234.x - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233.x,
      'y': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234.y - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233.y
    }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234 ? S({
      'x': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234.x - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232.x,
      'y': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234.y - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232.y
    }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233 ? S({
      'x': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232.x - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233.x,
      'y': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232.y - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233.y
    }) : {
      'x': 1,
      'y': 0
    },
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D29 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234 ? Math.max(50, x(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234) / 4) : 50;
  return {
    'in': {
      'x': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232.x - var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7.x * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D29,
      'y': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232.y - var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7.y * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D29
    },
    'out': {
      'x': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232.x + var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7.x * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D29,
      'y': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232.y + var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7.y * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D29
    }
  };
}
function N(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301 = y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301.anchors["findIndex"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652.id === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301.anchors[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302];
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303.pointType = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300 === "corner") return delete var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303.in, delete var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303.out, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46304 = j(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303.in = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303.in ? fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303.in) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46304.in, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303.out = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303.out ? fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303.out) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46304.out, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300 === 'symmetric') {
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6 = Math.max(x(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303.in), x(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303.out), 50),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653 = S({
        'x': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303.out['x'] - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303.x,
        'y': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303.out['y'] - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303.y
      });
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303.out = {
      'x': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303.x + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653.x * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6,
      'y': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303.y + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653.y * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6
    }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303.in = {
      'x': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303.x - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653.x * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6,
      'y': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303.y - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653.y * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6
    };
  } else var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300 === "smooth" && M(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303, 'out');
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301;
}
export { N as setInkPenAnchorPointType };
