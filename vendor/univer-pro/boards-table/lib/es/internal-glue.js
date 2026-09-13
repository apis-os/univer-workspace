import { SlideTableBorderDashEnum, SlideTableFillTypeEnum, SlideTableModelService, SlideTableResourceService, SlideTableVerticalAlignEnum, UniverSlidesTablePlugin, buildBorderPresetPatch, buildFrozenSlideTableTheme, buildSlideTableCellTextDataPatch, buildUpdatedSlideTableSnapshot, canMoveSlideTableColumns, canMoveSlideTableRows, createSlideTableResourceHook, deleteSlideTableColumns, deleteSlideTableRows, freezeSlideTableTheme, hasSlideTableStyleChanged, insertSlideTableColumns, insertSlideTableRows, mergeSlideTableCells, moveSlideTableColumns, moveSlideTableRows, resizeSlideTableColumns, resizeSlideTableRows, resolveSlideTableScaledInsertSizeDelta, resolveSlideTableThemePalette, setSlideTableCellStyle, unmergeSlideTableCells } from '@univerjs-pro/slides-table';
import { BooleanNumber, CommandType, DEFAULT_STYLES, DependentOn, Disposable, DocumentFlavor, GridType, HorizontalAlign, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, ThemeService, Tools, UniverInstanceType, createParagraphId, createSectionId, generateRandomId, merge, sequenceExecute, touchDependencies } from '@univerjs/core';
import { AddBoardElementMutation, BoardElementType, IBoardElementService, IBoardTableAdapterService, RemoveBoardElementMutation, RemoveBoardElementOperation, SetBoardThemeOperation, UniverBoardsPlugin, UpdateBoardElementMutation, createAddBoardElementsMutationInfos, resolveBoardSemanticThemeStyle } from '@univerjs-pro/boards';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { K, X, Y, Z, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46723 } from "./boards-table-plugin.js";
function Me(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46246, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46250 = Ne(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46246);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46250 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46250.element["type"] !== BoardElementType.Table || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46250.element["tableId"] !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46246.tableId) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46250.element,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46250.transform ?? Pe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251.transform),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252.width) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251.transform['width'] ?? 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252.height) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251.transform['height'] ?? 0,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253 = resolveSlideTableScaledInsertSizeDelta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249 === 'row' ? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3 : var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253 <= 0) return null;
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18 = {
      ...Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251),
      'transform': {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251.transform,
        'width': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249 === "column" ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251.transform['width'] ?? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251.transform["width"],
        'height': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249 === "row" ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251.transform["height"] ?? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251.transform["height"]
      }
    },
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB19 = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252,
      'width': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249 === "column" ? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253 : var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2,
      'height': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249 === "row" ? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253 : var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3
    };
  return {
    'redoMutation': {
      'id': UpdateBoardElementMutation.id,
      'params': {
        'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46250.unitId,
        'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46250.subUnitId,
        'elementId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46250.elementId,
        'element': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18,
        'transform': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB19
      }
    },
    'undoMutation': {
      'id': UpdateBoardElementMutation.id,
      'params': {
        'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46250.unitId,
        'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46250.subUnitId,
        'elementId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46250.elementId,
        'element': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251,
        'transform': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46250.transform ?? Pe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251.transform)
      }
    }
  };
}
;
function Ne(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46263, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46263.get(IBoardElementService);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264.subUnitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264.elementId) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265.getElementById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264.elementId) ?? null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46266 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265.getElementDataForUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264.unitId);
  for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634] of Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46266)) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467 = Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634.data).find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.element["type"] === BoardElementType.Table && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.element['tableId'] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264.tableId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.unitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264.unitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.subUnitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467;
  }
  return null;
}
;
function Pe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271) {
  return {
    'left': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271.left ?? 0,
    'top': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271.top ?? 0,
    'width': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271.width ?? 0,
    'height': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271.height ?? 0,
    'angle': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271.rotation ?? 0,
    'flipX': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271.flipX,
    'flipY': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271.flipY
  };
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
var mt = "@univerjs-pro/boards-table",
  ht = "1.0.0-insiders.20260907-70fc579";
;
;
;
;
function q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46669, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46670) {
  return function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46670(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46669);
  };
}
;
function J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46673, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46674, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46675, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46676) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46677 = arguments.length,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46678 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46677 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46674 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46676 === null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46676 = Object.getOwnPropertyDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46674, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46675) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46676,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46679;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46678 = Reflect.decorate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46673, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46674, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46675, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46676);else {
    for (var var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46673.length - 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6 >= 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6--) (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46679 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46673[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6]) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46678 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46677 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46679(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46678) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46677 > 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46679(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46674, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46675, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46678) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46679(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46674, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46675)) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46678);
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46677 > 3 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46678 && Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46674, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46675, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46678), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46678;
}
Y = J([q(0, IResourceManagerService), q(1, Inject(SlideTableResourceService)), q(2, Inject(SlideTableModelService))], Y);
X = J([q(0, ICommandService), q(1, IUniverInstanceService), q(2, Inject(SlideTableResourceService)), q(3, Inject(SlideTableModelService))], X);
Z = J([q(0, ICommandService), q(1, IUndoRedoService), q(2, Inject(SlideTableResourceService)), q(3, IBoardElementService), q(4, IUniverInstanceService), q(5, Inject(ThemeService))], Z);
;
;
;
;
;
;
;
;
K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46723, "type", UniverInstanceType.UNIVER_BOARD), K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46723, 'pluginName', "UniverBoardsTablePlugin"), K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46723, 'packageName', mt), K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46723, "version", ht), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46723 = J([DependentOn(UniverLicensePlugin, UniverSlidesTablePlugin, UniverBoardsPlugin), q(1, Inject(Injector)), q(2, ICommandService), q(3, IConfigService)], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46723);
export { Me };
