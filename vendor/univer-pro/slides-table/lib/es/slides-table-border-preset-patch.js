import { CommandType, DependentOn, Disposable, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, ThemeService, Tools, UniverInstanceType, generateRandomId, merge, sequenceExecute, touchDependencies } from '@univerjs/core';
import { AddSlideElementMutation, ISlideDrawingService, PageElementTypeEnum, PageTypeEnum, RemoveSlideElementMutation, UpdateSlideElementMutation, getSlideCommandTarget, plainTextToSlideDocumentData } from '@univerjs-pro/slides';
import { Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { kr } from "./slides-table-default-slide-table-border.js";
import { C } from "./slides-table-slide-table-cell-range.js";
import { E } from "./slides-table-iterate-selected-slide-table-cells.js";
import { Z } from "./slides-table-merge-slide-table-cell-style.js";
function Tr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461943, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461944, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461945) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461943 === "all" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461943 === 'top' || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461943 === "outer" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461944 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461945.startRow || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461943 === "innerHorizontal" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461944 > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461945.startRow || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461943 === "inner" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461944 > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461945.startRow;
}
function Er(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461949, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461950, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461951) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461949 === 'all' || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461949 === "bottom" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461949 === 'outer' && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461950 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461951.endRow;
}
function Dr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461955, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461956, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461957) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461955 === "all" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461955 === "left" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461955 === "outer" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461956 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461957.startColumn || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461955 === 'innerVertical' && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461956 > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461957.startColumn || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461955 === "inner" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461956 > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461957.startColumn;
}
function Or(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461961, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461962, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461963) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461961 === "all" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461961 === "right" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461961 === "outer" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461962 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461963.endColumn;
}
function Ar(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461967, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461968, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461969, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461970 = kr()) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461971 = C(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461968),
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A8 = false;
  return E(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461967, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461971, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46417, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419) => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46420;
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18 = {
      ...((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46420 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46417.style) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46420.borders)
    };
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461969 === "none") {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46417.style = Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46417.style, {
        'borders': {
          'top': {
            'dash': 'none'
          },
          'right': {
            'dash': "none"
          },
          'bottom': {
            'dash': "none"
          },
          'left': {
            'dash': "none"
          }
        }
      });
      return;
    }
    Tr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461969, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461971) && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18.top = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461970), Er(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461969, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461971) && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18.bottom = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461970), Dr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461969, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461971) && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18.left = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461970), Or(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461969, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461971) && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18.right = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461970), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46417.style = Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46417.style, {
      'borders': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18
    }), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A8 = true;
  }), {
    'rows': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461967,
    'changed': var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A8
  };
}
export { Ar as buildBorderPresetPatch };
