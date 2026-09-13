import { CommandType, DependentOn, Disposable, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, ThemeService, Tools, UniverInstanceType, generateRandomId, merge, sequenceExecute, touchDependencies } from '@univerjs/core';
import { AddSlideElementMutation, ISlideDrawingService, PageElementTypeEnum, PageTypeEnum, RemoveSlideElementMutation, UpdateSlideElementMutation, getSlideCommandTarget, plainTextToSlideDocumentData } from '@univerjs-pro/slides';
import { Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { hr } from "./internal-glue.js";
function qn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461767) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461768 = hr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461767.zoom, 1),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D76 = 6 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461768,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461769 = dr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461767.rowHeights),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461770 = dr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461767.columnWidths),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A40 = [{
      'kind': "table-handle",
      'tableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461767.tableId,
      'rect': {
        'x': -20,
        'y': -20,
        'width': 16,
        'height': 16
      }
    }];
  var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A40.push(...Jn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461767, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461769, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461768)), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A40.push(...Yn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461767, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461770, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461768));
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A41 = [...Xn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461767, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461768), ...Zn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461767, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461768)];
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A40.push(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A41.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315 => !fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig3B80(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461767))), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A40.push(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A41.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316 => fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig3B80(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461767))), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461767.rowHeights["slice"](0, -1).forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46318) => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461767.rowIndices) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46318]) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46318,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D8 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461769[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46318] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D76 / 2;
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A40.push(...er(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461767, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D8, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D76));
  }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461767.columnWidths["slice"](0, -1).forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326) => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461767.columnIndices) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326]) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D10 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461770[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D76 / 2;
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A40.push(...tr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461767, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D10, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D76));
  }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A40;
}
function Jn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461775, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461776, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461777) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D78 = 10 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461777;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461775.rowHeights["map"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46334) => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335;
    return {
      'kind': 'row-header',
      'tableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461775.tableId,
      'row': ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461775.rowIndices) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46334]) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46334,
      'rect': {
        'x': -var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D78,
        'y': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461776[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46334],
        'width': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D78,
        'height': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333
      }
    };
  });
}
function Yn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461781, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461782, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461783) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D80 = 10 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461783;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461781.columnWidths["map"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46340) => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46341;
    return {
      'kind': "column-header",
      'tableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461781.tableId,
      'column': ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46341 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461781.columnIndices) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46341[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46340]) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46340,
      'rect': {
        'x': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461782[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46340],
        'y': -var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D80,
        'width': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339,
        'height': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D80
      }
    };
  });
}
function Xn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461787, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461788) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D82 = 12 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461788,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D83 = 10 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461788,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D84 = 4 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461788;
  return fr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461787.rowHeights).map((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46345, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46346) => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46347 = pr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461787.rowIndices, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46346);
    return {
      'kind': 'row-insert-dot',
      'tableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461787.tableId,
      'row': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46347 - 1,
      'insertIndex': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46347,
      'rect': {
        'x': -var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D83 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D82 / 2 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D84,
        'y': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46345 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D82 / 2,
        'width': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D82,
        'height': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D82
      }
    };
  });
}
function Zn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461791, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461792) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D88 = 12 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461792,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D89 = 10 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461792,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D90 = 4 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461792 + 6 / 2 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461792;
  return fr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461791.columnWidths).map((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46351, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352) => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46353 = pr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461791.columnIndices, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352);
    return {
      'kind': "column-insert-dot",
      'tableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461791.tableId,
      'column': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46353 - 1,
      'insertIndex': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46353,
      'rect': {
        'x': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46351 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D88 / 2,
        'y': -var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D89 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D90 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D88 / 2,
        'width': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D88,
        'height': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D88
      }
    };
  });
}
function Qn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461795) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461795.kind !== "row-insert-dot" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461795.kind !== 'column-insert-dot') return null;
  if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461795.insertIndex == "number" && Number.isInteger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461795.insertIndex)) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461795.insertIndex;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461796 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461795.kind === "row-insert-dot" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461795.row : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461795.column;
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461796 == "number" && Number.isInteger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461796) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461796 + 1 : null;
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig3B80(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461799, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461800) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461801 = Qn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461799);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461801 === null) return false;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461802 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461799.kind === "row-insert-dot" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461800.rowIndices : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461800.columnIndices,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461803 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461799.kind === "row-insert-dot" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461800.rowHeights["length"] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461800.columnWidths["length"],
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D94 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461802 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461802[0]) ?? 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D95 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461802 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461802[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461803 - 1]) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461803 - 1) + 1;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461801 === var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D94 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461801 === var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D95;
}
function er(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461809, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461810, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461811, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461812) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461813 = ir(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461809, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461810).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46357 => or(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461809, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46357.startColumn, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46357.endColumn)).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46358 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46358).sort((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359[0] - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360[0]);
  return lr([0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461809.tableWidth], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461813).map(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362]) => ({
    'kind': "resize-row",
    'tableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461809.tableId,
    'row': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461810,
    'rect': {
      'x': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361,
      'y': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461811,
      'width': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361,
      'height': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461812
    }
  }));
}
function tr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461819, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461820, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461821, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461822) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461823 = ar(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461819, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461820).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363 => sr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461819, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363.startRow, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363.endRow)).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46364 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46364).sort((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46365, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46365[0] - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366[0]);
  return lr([0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461819.tableHeight], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461823).map(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46367, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368]) => ({
    'kind': "resize-column",
    'tableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461819.tableId,
    'column': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461820,
    'rect': {
      'x': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461821,
      'y': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46367,
      'width': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461822,
      'height': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46367
    }
  }));
}
function ir(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461843, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461844) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461845;
  return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461845 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461843.mergedCells) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461845.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461844 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376.startRow && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461844 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376.endRow)) ?? [];
}
function ar(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461849, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461850) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461851;
  return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461851 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461849.mergedCells) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461851.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461850 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377.startColumn && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461850 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377.endColumn)) ?? [];
}
function or(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461855, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461856, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461857) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461855.columnIndices) return cr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461855.columnWidths, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461855.columnIndices, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461856, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461857);
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461858 = mr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461855.columnIndices, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461856),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461859 = mr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461855.columnIndices, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461857);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461858 < 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461859 < 0) return null;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D100 = Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461858, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461859),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D101 = Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461858, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461859);
  return [Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461855.columnWidths["slice"](0, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D100)), Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461855.columnWidths["slice"](0, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D101 + 1))];
}
function sr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461865, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461866, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461867) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461865.rowIndices) return cr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461865.rowHeights, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461865.rowIndices, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461866, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461867);
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461868 = mr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461865.rowIndices, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461866),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461869 = mr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461865.rowIndices, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461867);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461868 < 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461869 < 0) return null;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D104 = Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461868, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461869),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D105 = Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461868, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461869);
  return [Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461865.rowHeights["slice"](0, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D104)), Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461865.rowHeights['slice'](0, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D105 + 1))];
}
function cr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461875, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461876, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461877, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461878) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D108 = Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461877, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461878),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D109 = Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461877, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461878),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A44 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461876.map((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46379) => ({
      'sourceIndex': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378,
      'offset': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46379
    })).filter(({
      sourceIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380
    }) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380 >= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D108 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380 <= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D109).map(({
      offset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381
    }) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381);
  if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A44.length === 0) return null;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D110 = Math.min(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A44),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D111 = Math.max(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A44);
  return [Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461875.slice(0, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D110)), Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461875.slice(0, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D111 + 1))];
}
function lr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461883, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461884) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A46 = [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461883];
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461884.forEach(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383]) => {
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A46 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A46.flatMap(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657]) => {
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 = Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656, Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382)),
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3 = Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656, Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383));
      return var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656 || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657 || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 >= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3 ? [[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657]] : [[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2], [var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657]].filter(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613]) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613 > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612);
    });
  }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A46;
}
function dr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461889) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A48 = [],
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D116 = 0;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461889.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386 => {
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A48.push(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D116), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D116 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386;
  }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A48;
}
function fr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461891) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461891.length === 0) return [];
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A50 = [0],
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D118 = 0;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461891.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388 => {
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D118 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A50.push(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D118);
  }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A50;
}
function pr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461893, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461894) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461893 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461894 === 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461893[0] ?? 0 : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461893[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461894 - 1] ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461894 - 1) + 1 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461894;
}
function mr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461897, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461898) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461897 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461897.findIndex(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46390 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46390 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461898)) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461898;
}
function Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461901) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461901.reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392, 0);
}
export { qn as buildSlideTableTriggers };
