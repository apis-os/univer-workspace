import { CommandType, DependentOn, Disposable, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, ThemeService, Tools, UniverInstanceType, generateRandomId, merge, sequenceExecute, touchDependencies } from '@univerjs/core';
import { AddSlideElementMutation, ISlideDrawingService, PageElementTypeEnum, PageTypeEnum, RemoveSlideElementMutation, UpdateSlideElementMutation, getSlideCommandTarget, plainTextToSlideDocumentData } from '@univerjs-pro/slides';
import { Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { L, bt } from "./internal-glue.js";
function dt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46955, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46956 = {}) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46957 = L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46955),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46958 = xt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46957 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46957.id) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46956.id,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46959 = I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46957 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46957.rows),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46960 = yt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46957 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46957.cells),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46961 = fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F2(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46957, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46956),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46962 = vt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46957, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46956),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D42 = 0;
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46140 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46959) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46963;
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D42 = Math.max(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D42, I((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46963 = L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46140)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46963.cells).length);
  }
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D43 = 0;
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46141 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46960) var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D43 = Math.max(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D43, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46141.length);
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D44 = Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46962.length, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46959.length, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46960.length, z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46957 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46957.rowCount) ?? 0),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D45 = Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46961.length, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D42, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D43, z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46957 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46957.columnCount) ?? 0),
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A4 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D45 > 0 || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D44 > 0 || z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46956.rowCount) !== undefined || z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46956.columnCount) !== undefined;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46958 || !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A4) return;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D46 = Math.max(1, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D44, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D44 > 0 ? 0 : z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46956.rowCount) ?? 0),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D47 = Math.max(1, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D45, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D45 > 0 ? 0 : z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46956.columnCount) ?? 0),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D48 = R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46956.defaultColumnWidth) ?? 96,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D49 = R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46956.defaultRowHeight) ?? 24,
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22 = {
      'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46958,
      'rev': St(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46957 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46957.rev) ?? 0,
      'options': ht(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46957 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46957.options),
      'columns': ft(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D47, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46961, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D48),
      'rows': pt(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D46, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D47, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46959, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46960, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46962, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D49)
    };
  Ct(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46957, "name"), Ct(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46957, "description"), Ct(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46957, "styleId"), Ct(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46957, "themeId");
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46964 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46957 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46957.custom;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46964 === null ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22.custom = null : bt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46964) && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22.custom = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46964)), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22;
}
function ft(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46975, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46976, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46977) {
  return Array.from({
    'length': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46975
  }, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143) => ({
    'width': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46976[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143] ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46977
  }));
}
function pt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46981, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46982, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46983, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46984, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46985, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46986) {
  return Array.from({
    'length': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46981
  }, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145) => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146 = L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46983[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145]),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147 = I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146.cells),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46984[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145] ?? [],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148 = Array.from({
        'length': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46982
      }, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639) => mt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639] ?? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639]));
    return {
      'height': R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146.height) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46985[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145] ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46986,
      'cells': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148
    };
  });
}
function mt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46993) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46994 = L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46993);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46994) return {};
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB24 = {};
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46994.textData !== undefined && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB24.textData = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46994.textData));
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46995 = z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46994.rowSpan);
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46995 !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46995 > 1 && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB24.rowSpan = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46995);
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46996 = z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46994.columnSpan);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46996 !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46996 > 1 && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB24.columnSpan = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46996), typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46994.hMerge == "boolean" && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB24.hMerge = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46994.hMerge), typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46994.vMerge == "boolean" && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB24.vMerge = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46994.vMerge), bt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46994.style) && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB24.style = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46994.style)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46994.custom === null ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB24.custom = null : bt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46994.custom) && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB24.custom = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46994.custom)), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB24;
}
function ht(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461001) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461002 = L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461001);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461002) return {};
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB26 = {};
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154 of ["firstRow", "firstCol", 'lastRow', "lastCol", "bandRow", "bandCol"]) typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461002[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154] == "boolean" && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB26[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461002[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154]);
  return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB26;
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F2(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461009, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461010) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12 = I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461009 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461009.columns).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155 => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156;
    return R(typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155 == "number" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155 : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156 = L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156.width);
  }).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159 !== undefined);
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12.length > 0 ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12 : F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461009 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461009.columnWidths).concat(F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461009 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461009.colWidths)).concat(F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461010.columnWidths));
}
function vt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461013, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461014) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A14 = I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461013 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461013.rows).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46160 => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161;
    return R((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161 = L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46160)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161.height);
  }).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164 !== undefined);
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A14.length > 0 ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A14 : F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461013 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461013.rowHeights).concat(F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461013 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461013.heights)).concat(F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461014.rowHeights));
}
function yt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461017) {
  return I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461017).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165 => I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165));
}
function F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461019) {
  return I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461019).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166 => R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166)).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167 !== undefined);
}
function I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461021) {
  return Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461021) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461021 : [];
}
function xt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461027) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461027 == 'string' && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461027.trim() ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461027 : undefined;
}
function R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461029) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461029 == "number" && Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461029) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461029 > 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461029 : undefined;
}
function z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461031) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461032 = R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461031);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461032 === undefined ? undefined : Math.floor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461032);
}
function St(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461035) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461035 == 'number' && Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461035) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461035 >= 0 ? Math.floor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461035) : undefined;
}
function Ct(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461037, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461038, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461039) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461040 = xt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461038 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461038[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461039]);
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461040 !== undefined && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461037[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461039] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461040);
}
export { dt as normalizeSlideTableSnapshot };
