import { CellValueType, ColorKit, CommandType, DependentOn, Disposable, DisposableCollection, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, ObjectMatrix, Plugin, RANGE_TYPE, Range, Rectangle, Tools, UniverInstanceType, cellToRange, generateRandomId, isValidRange, merge, sequenceExecute, touchDependencies } from '@univerjs/core';
import { AddWorksheetMergeCommand, ClearSelectionAllCommand, CopySheetCommand, IExclusiveRangeService, InsertColMutation, InsertRowMutation, MoveColsMutation, MoveRangeMutation, MoveRowsMutation, RefRangeService, RemoveColCommand, RemoveColMutation, RemoveRowCommand, RemoveRowMutation, RemoveSheetCommand, ReorderRangeMutation, SetColHiddenMutation, SetColVisibleMutation, SetRangeValuesMutation, SetRowHiddenMutation, SetRowVisibleMutation, SetWorksheetActivateCommand, SheetInterceptorService, SheetsSelectionsService, UniverSheetsPlugin, adjustRangeOnMutation, getSheetCommandTarget } from '@univerjs/sheets';
import { Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { B } from "./sheets-sparkline-sparkline-data-source-model.js";
import { J, K, Q, X, Y, Z, q, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461031 } from "./sheets-sparkline-sheet-sparkline-plugin.js";
import { P } from "./sheets-sparkline-plugin-name.js";
function I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46869) {
  '@babel/helpers - typeof';

  return I = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46560) {
    return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46560;
  } : function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46562) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46562 && typeof Symbol == "function" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46562.constructor === Symbol && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46562 !== Symbol.prototype ? "symbol" : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46562;
  }, I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46869);
}
;
function De(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46871, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46872) {
  if (I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46871) != "object" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46871) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46871;
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46873 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46871[Symbol.toPrimitive];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46873 !== undefined) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46874 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46873.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46871, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46872 || 'default');
    if (I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46874) != 'object') return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46874;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46872 === "string" ? String : Number)(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46871);
}
;
function Oe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46879) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46880 = De(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46879, "string");
  return I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46880) == "symbol" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46880 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46880 + '';
}
;
function L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46883, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46884, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46885) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46884 = Oe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46884)) in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46883 ? Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46883, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46884, {
    'value': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46885,
    'enumerable': true,
    'configurable': true,
    'writable': true
  }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46883[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46884] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46885, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46883;
}
;
function R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46889, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46890) {
  return function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46564, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46565) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46890(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46564, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46565, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46889);
  };
}
;
function z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46893, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46894, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46895, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46896) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46897 = arguments.length,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46898 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46897 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46894 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46896 === null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46896 = Object.getOwnPropertyDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46894, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46895) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46896,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46899;
  if (typeof Reflect == "object" && typeof Reflect.decorate == 'function') var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46898 = Reflect.decorate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46893, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46894, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46895, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46896);else {
    for (var var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46893.length - 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30 >= 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30--) (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46899 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46893[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30]) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46898 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46897 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46899(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46898) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46897 > 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46899(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46894, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46895, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46898) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46899(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46894, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46895)) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46898);
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46897 > 3 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46898 && Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46894, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46895, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46898), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46898;
}
B = z([R(0, Inject(IUniverInstanceService))], B);
var Ae = '@univerjs-pro/sheets-sparkline',
  je = '1.0.0-insiders.20260907-70fc579';
K = z([R(0, Inject(B)), R(1, Inject(SheetInterceptorService)), R(2, Inject(IUniverInstanceService)), R(3, Inject(SheetsSelectionsService))], K);
q = z([R(0, Inject(ICommandService)), R(1, Inject(B)), R(2, Inject(IExclusiveRangeService))], q);
J = z([R(0, Inject(ICommandService)), R(1, Inject(B))], J);
Y = z([R(0, Inject(ICommandService)), R(1, Inject(SheetInterceptorService)), R(2, Inject(B))], Y);
X = z([R(0, Inject(ICommandService)), R(1, Inject(RefRangeService)), R(2, IUniverInstanceService), R(3, Inject(B))], X);
Z = z([R(0, Inject(IUniverInstanceService)), R(1, Inject(SheetInterceptorService)), R(2, Inject(B))], Z);
Q = z([R(0, Inject(IResourceManagerService)), R(1, Inject(B))], Q);
L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461031, "pluginName", P), L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461031, 'packageName', Ae), L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461031, "version", je), L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461031, "type", UniverInstanceType.UNIVER_SHEET), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461031 = z([DependentOn(UniverLicensePlugin, UniverSheetsPlugin), R(1, Inject(Injector)), R(2, IConfigService), R(3, Inject(ICommandService))], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461031);
export { L };
