import { CommandType, DEFAULT_STYLES, DependentOn, Disposable, ICommandService, IConfigService, IUniverInstanceService, ImageSourceType, Inject, Injector, Plugin, UnitModel, UniverInstanceType, generateRandomId, merge } from '@univerjs/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { wb } from "./pdfs-pdf-list-ordinal.js";
function Cb(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469437) {
  let var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5998 = new Map(),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A477 = [];
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462111 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469437.blocks) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469438;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462111.listItem,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46641 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469438 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469437.lists) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469438[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640.listId] : undefined;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46641) continue;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46642 = Ob(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640.level),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46643 = Db(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46641, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46642);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46643) continue;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46644 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5998.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640.listId) ?? Array(9).fill(0);
    var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5998.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640.listId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46644);
    for (let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB15 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46642 + 1; var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB15 <= 8; var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB15 += 1) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46644[var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB15] = 0;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46645 = kb(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46643.startAt);
    Ab(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640.restartAt) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46644[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46642] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640.restartAt : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46644[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46642] === 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46644[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46642] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46645 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46644[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46642] += 1;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46646 = Ab(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640.valueOverride) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640.valueOverride : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46644[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46642],
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A15 = [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46644];
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A15[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46642] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46646, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A477.push({
      'blockId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462111.id,
      'listId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640.listId,
      'level': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46642,
      'ordinal': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46646,
      'marker': Tb(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46641, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46643, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640.importedLabel, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A15),
      'levelDefinition': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46643
    });
  }
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A477;
}
function Tb(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469445, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469446, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469447, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469448) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469446.markerStyle === "none" ? '' : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469445.kind === "unordered" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469446.markerGlyph ?? jb(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469446.markerStyle) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469447 ?? '' : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469446.markerStyle === 'custom' ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469446.markerGlyph ?? Eb(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469446.markerFormat, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469445, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469448) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469447 ?? '' : Eb(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469446.markerFormat ?? '%' + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469446.level + 1) + '.', var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469445, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469448) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469447 ?? '';
}
function Eb(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469453, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469454, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469455) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469453) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469453.replace(/%([1-9])/g, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462112, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462113) => {
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D123 = Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462113) - 1,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462114 = Db(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469454, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D123);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462114 ? wb(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469455[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D123] || kb(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462114.startAt), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462114.markerStyle) : '';
  });
}
function Db(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469459, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469460) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469459.levels["find"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462118 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462118.level === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469460) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469459.levels[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469460];
}
function Ob(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469463) {
  return Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469463) ? Math.min(8, Math.max(0, Math.trunc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469463))) : 0;
}
function kb(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469465) {
  return Ab(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469465) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469465 : 1;
}
function Ab(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469467) {
  return Number.isInteger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469467) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469467 ?? 0) >= 1;
}
function jb(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469469) {
  switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469469) {
    case "disc":
      return '•';
    case 'circle':
      return '◦';
    case "square":
      return '▪';
    default:
      return;
  }
}
export { Cb as resolvePdfListMarkers };
