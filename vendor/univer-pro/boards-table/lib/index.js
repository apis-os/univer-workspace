import { SlideTableBorderDashEnum as var_core_value_sigFBA5, SlideTableFillTypeEnum as var_core_value_sigAC47, SlideTableModelService as var_core_value_sigA06F, SlideTableResourceService as var_core_value_sig770E, SlideTableVerticalAlignEnum as var_core_value_sig4654, UniverSlidesTablePlugin as var_core_value_sigB26B, buildBorderPresetPatch as var_core_value_sig019B, buildFrozenSlideTableTheme as var_core_value_sigC6BC, buildSlideTableCellTextDataPatch as var_core_value_sig8EC2, buildUpdatedSlideTableSnapshot as var_core_value_sigA8C3, canMoveSlideTableColumns as var_core_value_sig5276, canMoveSlideTableRows as var_core_value_sig031B, createSlideTableResourceHook as var_core_value_sig9DC0, deleteSlideTableColumns as var_core_value_sig95F0, deleteSlideTableRows as var_core_value_sig9CCB, freezeSlideTableTheme as var_core_value_sigE718, hasSlideTableStyleChanged as var_core_value_sigAEC8, insertSlideTableColumns as var_core_value_sigB977, insertSlideTableRows as var_core_value_sig2949, mergeSlideTableCells as var_core_value_sig308A, moveSlideTableColumns as var_core_value_sig528D, moveSlideTableRows as var_core_value_sigA309, resizeSlideTableColumns as var_core_value_sig9E20, resizeSlideTableRows as var_core_value_sig26BB, resolveSlideTableScaledInsertSizeDelta as var_core_value_sig19B4, resolveSlideTableThemePalette as var_core_value_sig218A, setSlideTableCellStyle as var_core_value_sig14CB, unmergeSlideTableCells as var_core_value_sigFDEE } from '@univerjs-pro/slides-table';
import { BooleanNumber as var_core_value_sigA676, CommandType as var_core_value_sigC27E, DEFAULT_STYLES as var_core_value_sigA70D, DependentOn as var_core_value_sigCE10, Disposable as var_core_value_sigA386, DocumentFlavor as var_core_value_sigCD82, GridType as var_core_value_sig44DD, HorizontalAlign as var_core_value_sig96FA, ICommandService as var_core_value_sigAB68, IConfigService as var_core_value_sig040A, IResourceManagerService as var_core_value_sig2AE0, IUndoRedoService as var_core_value_sigC349, IUniverInstanceService as var_core_value_sig9D96, Inject as var_core_value_sig2776, Injector as var_core_value_sig6FB2, Plugin as var_core_value_sigEB43, ThemeService as var_core_value_sig4186, Tools as var_core_value_sigF963, UniverInstanceType as var_core_value_sigB608, createParagraphId as var_core_value_sigF866, createSectionId as var_core_value_sig5EFB, generateRandomId as var_core_value_sig3A85, merge as var_core_value_sig2682, sequenceExecute as var_core_value_sig4BB5, touchDependencies as var_core_value_sig6709 } from '@univerjs/core';
import { AddBoardElementMutation as var_core_value_sig52CA, BoardElementType as var_core_value_sigC030, IBoardElementService as var_core_value_sig88F6, IBoardTableAdapterService as var_core_value_sig37DB, RemoveBoardElementMutation as var_core_value_sig5542, RemoveBoardElementOperation as var_core_value_sigE0A9, SetBoardThemeOperation as var_core_value_sigA73E, UniverBoardsPlugin as var_core_value_sig7620, UpdateBoardElementMutation as var_core_value_sigB9FC, createAddBoardElementsMutationInfos as var_core_value_sig5055, resolveBoardSemanticThemeStyle as var_core_value_sig3801 } from '@univerjs-pro/boards';
import { UniverLicensePlugin as var_core_value_sig45F0 } from '@univerjs-pro/license';
const I = {
    'id': "board.mutation.set-table",
    'type': var_core_value_sigC27E.MUTATION,
    'handler': (var_core_value_sig273D, var_core_value_sig9A0D) => {
      var var_core_value_sigA319;
      if (!(var_core_value_sig9A0D != null && var_core_value_sig9A0D.unitId) || !((var_core_value_sigA319 = var_core_value_sig9A0D.table) != null && var_core_value_sigA319.id)) return false;
      let var_core_value_sig2D58 = var_core_value_sig273D.get(var_core_value_sig770E),
        var_core_value_sig223F = var_core_value_sig273D.get(var_core_value_sigA06F);
      return var_core_value_sig2D58.setTable(var_core_value_sig9A0D.unitId, var_core_value_sig9A0D.table, var_core_value_sig9A0D.theme), var_core_value_sig223F.notifyTableChanged(var_core_value_sig9A0D.unitId, var_core_value_sig9A0D.table['id']), true;
    }
  },
  L = {
    'id': "board.command.update-table",
    'type': var_core_value_sigC27E.COMMAND,
    'handler': (var_core_value_sigD749, var_core_value_sigCFFA) => {
      if (!var_core_value_sigCFFA) return false;
      let var_core_value_sig58C1 = var_core_value_sigD749.get(var_core_value_sig770E),
        {
          unitId: var_core_value_sig5090,
          tableId: var_core_value_sigC368,
          patch: var_core_value_sigAD56
        } = var_core_value_sigCFFA,
        var_core_value_sigDB4A = var_core_value_sig58C1.getTable(var_core_value_sig5090, var_core_value_sigC368);
      if (!var_core_value_sigDB4A) return false;
      let var_core_value_sig6418 = var_core_value_sigD749.get(var_core_value_sigAB68),
        var_core_value_sig1896 = var_core_value_sigD749.get(var_core_value_sigC349),
        var_core_value_sig0285 = var_core_value_sigDB4A.themeId ? var_core_value_sig58C1.getTheme(var_core_value_sig5090, var_core_value_sigDB4A.themeId) : undefined,
        var_core_value_sig777D = var_core_value_sig0285,
        var_core_value_sig3F4C = {
          ...var_core_value_sigAD56
        },
        var_core_value_sigD65A = var_core_value_sigAEC8(var_core_value_sigDB4A.styleId, var_core_value_sigAD56.styleId);
      var_core_value_sigD65A && (var_core_value_sig777D = undefined, var_core_value_sig3F4C.themeId = null, typeof var_core_value_sigAD56.styleId == "string" && (var_core_value_sig777D = ke(var_core_value_sig58C1, var_core_value_sigD749.get(var_core_value_sig4186), var_core_value_sig5090, var_core_value_sigDB4A, var_core_value_sigAD56.styleId), var_core_value_sig777D && (var_core_value_sig3F4C.themeId = var_core_value_sig777D.id)));
      let var_core_value_sig5A13 = {
          'unitId': var_core_value_sig5090,
          'table': var_core_value_sigA8C3(var_core_value_sigDB4A, var_core_value_sig3F4C)
        },
        var_core_value_sigF593 = {
          'unitId': var_core_value_sig5090,
          'table': var_core_value_sigDB4A
        };
      return var_core_value_sigD65A && var_core_value_sig777D && (var_core_value_sig5A13.theme = var_core_value_sig777D), var_core_value_sigD65A && var_core_value_sig0285 && (var_core_value_sigF593.theme = var_core_value_sig0285), var_core_value_sig6418.syncExecuteCommand(I.id, var_core_value_sig5A13) ? (var_core_value_sig1896.pushUndoRedo({
        'unitID': var_core_value_sig5090,
        'undoMutations': [{
          'id': I.id,
          'params': var_core_value_sigF593
        }],
        'redoMutations': [{
          'id': I.id,
          'params': var_core_value_sig5A13
        }]
      }), true) : false;
    }
  };
function ke(var_core_value_sig3607, var_core_value_sigB512, var_core_value_sigF2E6, var_core_value_sig34C8, var_core_value_sigB744) {
  let var_core_value_sigEAE2 = var_core_value_sig3607.getTheme(var_core_value_sigF2E6, var_core_value_sigB744);
  return var_core_value_sigEAE2 ? var_core_value_sigE718(var_core_value_sig34C8.id, var_core_value_sigEAE2) : var_core_value_sigC6BC(var_core_value_sig34C8.id, var_core_value_sigB744, var_core_value_sig218A(var_core_value_sigFBA4 => var_core_value_sigB512.getColorFromTheme(var_core_value_sigFBA4)));
}
const Ae = {
    'id': "board.command.delete-table-columns",
    'type': var_core_value_sigC27E.COMMAND,
    'handler': (var_core_value_sigE68A, var_core_value_sig3E68) => {
      if (!var_core_value_sig3E68) return false;
      let {
          unitId: var_core_value_sigF4C5,
          tableId: var_core_value_sig5410,
          startColumn: var_core_value_sig492F,
          endColumn: var_core_value_sig8EA0
        } = var_core_value_sig3E68,
        var_core_value_sigA6F6 = var_core_value_sigE68A.get(var_core_value_sig770E).getTable(var_core_value_sigF4C5, var_core_value_sig5410);
      if (!var_core_value_sigA6F6) return false;
      let var_core_value_sigCDDA = var_core_value_sig95F0(var_core_value_sigA6F6, var_core_value_sig492F, var_core_value_sig8EA0);
      return !!var_core_value_sigE68A.get(var_core_value_sigAB68).syncExecuteCommand(L.id, {
        'unitId': var_core_value_sigF4C5,
        'tableId': var_core_value_sig5410,
        'patch': {
          'columns': var_core_value_sigCDDA.columns,
          'rows': var_core_value_sigCDDA.rows
        }
      });
    }
  },
  je = {
    'id': "board.command.delete-table-rows",
    'type': var_core_value_sigC27E.COMMAND,
    'handler': (var_core_value_sigE243, var_core_value_sig74A8) => {
      if (!var_core_value_sig74A8) return false;
      let {
          unitId: var_core_value_sig21B2,
          tableId: var_core_value_sigDE08,
          startRow: var_core_value_sigACCB,
          endRow: var_core_value_sig7F33
        } = var_core_value_sig74A8,
        var_core_value_sig0C53 = var_core_value_sigE243.get(var_core_value_sig770E).getTable(var_core_value_sig21B2, var_core_value_sigDE08);
      if (!var_core_value_sig0C53) return false;
      let var_core_value_sigEA04 = var_core_value_sig9CCB(var_core_value_sig0C53, var_core_value_sigACCB, var_core_value_sig7F33);
      return !!var_core_value_sigE243.get(var_core_value_sigAB68).syncExecuteCommand(L.id, {
        'unitId': var_core_value_sig21B2,
        'tableId': var_core_value_sigDE08,
        'patch': {
          'rows': var_core_value_sigEA04.rows
        }
      });
    }
  };
function Me(var_core_value_sig7A62, var_core_value_sig8109, var_core_value_sig7565, var_core_value_sigD4FB, var_core_value_sig3E71) {
  let var_core_value_sig01B3 = Ne(var_core_value_sig7A62, var_core_value_sig8109);
  if (!var_core_value_sig01B3 || var_core_value_sig01B3.element["type"] !== var_core_value_sigC030.Table || var_core_value_sig01B3.element["tableId"] !== var_core_value_sig8109.tableId) return null;
  let var_core_value_sig7442 = var_core_value_sig01B3.element,
    var_core_value_sigDF87 = var_core_value_sig01B3.transform ?? Pe(var_core_value_sig7442.transform),
    var_core_value_sig9EE0 = (var_core_value_sigDF87 == null ? undefined : var_core_value_sigDF87.width) ?? var_core_value_sig7442.transform['width'] ?? 0,
    var_core_value_sigF051 = (var_core_value_sigDF87 == null ? undefined : var_core_value_sigDF87.height) ?? var_core_value_sig7442.transform['height'] ?? 0,
    var_core_value_sig0B45 = var_core_value_sig19B4(var_core_value_sig7565, var_core_value_sigD4FB, var_core_value_sig3E71 === 'row' ? var_core_value_sigF051 : var_core_value_sig9EE0, var_core_value_sig3E71);
  if (var_core_value_sig0B45 <= 0) return null;
  let var_core_value_sig36F8 = {
      ...var_core_value_sigF963.deepClone(var_core_value_sig7442),
      'transform': {
        ...var_core_value_sig7442.transform,
        'width': var_core_value_sig3E71 === "column" ? (var_core_value_sig7442.transform['width'] ?? var_core_value_sig9EE0) + var_core_value_sig0B45 : var_core_value_sig7442.transform["width"],
        'height': var_core_value_sig3E71 === "row" ? (var_core_value_sig7442.transform["height"] ?? var_core_value_sigF051) + var_core_value_sig0B45 : var_core_value_sig7442.transform["height"]
      }
    },
    var_core_value_sig03E1 = {
      ...var_core_value_sigDF87,
      'width': var_core_value_sig3E71 === "column" ? var_core_value_sig9EE0 + var_core_value_sig0B45 : var_core_value_sig9EE0,
      'height': var_core_value_sig3E71 === "row" ? var_core_value_sigF051 + var_core_value_sig0B45 : var_core_value_sigF051
    };
  return {
    'redoMutation': {
      'id': var_core_value_sigB9FC.id,
      'params': {
        'unitId': var_core_value_sig01B3.unitId,
        'subUnitId': var_core_value_sig01B3.subUnitId,
        'elementId': var_core_value_sig01B3.elementId,
        'element': var_core_value_sig36F8,
        'transform': var_core_value_sig03E1
      }
    },
    'undoMutation': {
      'id': var_core_value_sigB9FC.id,
      'params': {
        'unitId': var_core_value_sig01B3.unitId,
        'subUnitId': var_core_value_sig01B3.subUnitId,
        'elementId': var_core_value_sig01B3.elementId,
        'element': var_core_value_sig7442,
        'transform': var_core_value_sig01B3.transform ?? Pe(var_core_value_sig7442.transform)
      }
    }
  };
}
;
function Ne(var_core_value_sigBB57, var_core_value_sig7C4A) {
  let var_core_value_sigE799 = var_core_value_sigBB57.get(var_core_value_sig88F6);
  if (var_core_value_sig7C4A.subUnitId && var_core_value_sig7C4A.elementId) return var_core_value_sigE799.getElementById(var_core_value_sig7C4A.unitId, var_core_value_sig7C4A.subUnitId, var_core_value_sig7C4A.elementId) ?? null;
  let var_core_value_sigB601 = var_core_value_sigE799.getElementDataForUnit(var_core_value_sig7C4A.unitId);
  for (let [var_core_value_sig4383, var_core_value_sig186C] of Object.entries(var_core_value_sigB601)) {
    let var_core_value_sigBC46 = Object.values(var_core_value_sig186C.data).find(var_core_value_sig7524 => var_core_value_sig7524.element["type"] === var_core_value_sigC030.Table && var_core_value_sig7524.element['tableId'] === var_core_value_sig7C4A.tableId && var_core_value_sig7524.unitId === var_core_value_sig7C4A.unitId && var_core_value_sig7524.subUnitId === var_core_value_sig4383);
    if (var_core_value_sigBC46) return var_core_value_sigBC46;
  }
  return null;
}
;
function Pe(var_core_value_sig8B71) {
  return {
    'left': var_core_value_sig8B71.left ?? 0,
    'top': var_core_value_sig8B71.top ?? 0,
    'width': var_core_value_sig8B71.width ?? 0,
    'height': var_core_value_sig8B71.height ?? 0,
    'angle': var_core_value_sig8B71.rotation ?? 0,
    'flipX': var_core_value_sig8B71.flipX,
    'flipY': var_core_value_sig8B71.flipY
  };
}
const Fe = {
  'id': 'board.command.insert-table-columns',
  'type': var_core_value_sigC27E.COMMAND,
  'handler': (var_core_value_sigAEFB, var_core_value_sig826B) => {
    if (!var_core_value_sig826B) return false;
    let {
        unitId: var_core_value_sigCF89,
        tableId: var_core_value_sig00CB,
        columnIndex: var_core_value_sig77EE,
        count: var_core_value_sig9F76 = 1
      } = var_core_value_sig826B,
      var_core_value_sigB008 = var_core_value_sigAEFB.get(var_core_value_sig770E).getTable(var_core_value_sigCF89, var_core_value_sig00CB);
    if (!var_core_value_sigB008) return false;
    let var_core_value_sig8721 = var_core_value_sigB977(var_core_value_sigB008, var_core_value_sig77EE, var_core_value_sig9F76, var_core_value_sig826B.width ?? Ie(var_core_value_sigB008, var_core_value_sig77EE)),
      var_core_value_sig08BA = {
        'id': I.id,
        'params': {
          'unitId': var_core_value_sigCF89,
          'table': var_core_value_sig8721
        }
      },
      var_core_value_sigDBB5 = {
        'id': I.id,
        'params': {
          'unitId': var_core_value_sigCF89,
          'table': var_core_value_sigB008
        }
      },
      var_core_value_sigCFAC = Me(var_core_value_sigAEFB, var_core_value_sig826B, var_core_value_sigB008, var_core_value_sig8721, "column"),
      var_core_value_sig237B = var_core_value_sigCFAC ? [var_core_value_sig08BA, var_core_value_sigCFAC.redoMutation] : [var_core_value_sig08BA],
      var_core_value_sigFEAB = var_core_value_sigCFAC ? [var_core_value_sigCFAC.undoMutation, var_core_value_sigDBB5] : [var_core_value_sigDBB5];
    return var_core_value_sig4BB5(var_core_value_sig237B, var_core_value_sigAEFB.get(var_core_value_sigAB68)).result ? (var_core_value_sigAEFB.get(var_core_value_sigC349).pushUndoRedo({
      'unitID': var_core_value_sigCF89,
      'undoMutations': var_core_value_sigFEAB,
      'redoMutations': var_core_value_sig237B
    }), true) : false;
  }
};
function Ie(var_core_value_sigE347, var_core_value_sig3C5B) {
  var var_core_value_sig200B, var_core_value_sig3863;
  return ((var_core_value_sig200B = var_core_value_sigE347.columns[var_core_value_sig3C5B - 1]) == null ? undefined : var_core_value_sig200B.width) ?? ((var_core_value_sig3863 = var_core_value_sigE347.columns[var_core_value_sig3C5B]) == null ? undefined : var_core_value_sig3863.width);
}
const Le = {
  'id': "board.command.insert-table-rows",
  'type': var_core_value_sigC27E.COMMAND,
  'handler': (var_core_value_sigC97C, var_core_value_sigC4B1) => {
    if (!var_core_value_sigC4B1) return false;
    let {
        unitId: var_core_value_sig1BD9,
        tableId: var_core_value_sigE43E,
        rowIndex: var_core_value_sigA937,
        count: var_core_value_sigCAD5 = 1
      } = var_core_value_sigC4B1,
      var_core_value_sigE503 = var_core_value_sigC97C.get(var_core_value_sig770E).getTable(var_core_value_sig1BD9, var_core_value_sigE43E);
    if (!var_core_value_sigE503) return false;
    let var_core_value_sig48DD = var_core_value_sig2949(var_core_value_sigE503, var_core_value_sigA937, var_core_value_sigCAD5, var_core_value_sigC4B1.height ?? Re(var_core_value_sigE503, var_core_value_sigA937)),
      var_core_value_sig5E6A = {
        'id': I.id,
        'params': {
          'unitId': var_core_value_sig1BD9,
          'table': var_core_value_sig48DD
        }
      },
      var_core_value_sigB7FC = {
        'id': I.id,
        'params': {
          'unitId': var_core_value_sig1BD9,
          'table': var_core_value_sigE503
        }
      },
      var_core_value_sig9CD9 = Me(var_core_value_sigC97C, var_core_value_sigC4B1, var_core_value_sigE503, var_core_value_sig48DD, "row"),
      var_core_value_sigFD0C = var_core_value_sig9CD9 ? [var_core_value_sig5E6A, var_core_value_sig9CD9.redoMutation] : [var_core_value_sig5E6A],
      var_core_value_sig849B = var_core_value_sig9CD9 ? [var_core_value_sig9CD9.undoMutation, var_core_value_sigB7FC] : [var_core_value_sigB7FC];
    return var_core_value_sig4BB5(var_core_value_sigFD0C, var_core_value_sigC97C.get(var_core_value_sigAB68)).result ? (var_core_value_sigC97C.get(var_core_value_sigC349).pushUndoRedo({
      'unitID': var_core_value_sig1BD9,
      'undoMutations': var_core_value_sig849B,
      'redoMutations': var_core_value_sigFD0C
    }), true) : false;
  }
};
function Re(var_core_value_sig5F1A, var_core_value_sigB455) {
  var var_core_value_sig5241, var_core_value_sigC6E5;
  return ((var_core_value_sig5241 = var_core_value_sig5F1A.rows[var_core_value_sigB455 - 1]) == null ? undefined : var_core_value_sig5241.height) ?? ((var_core_value_sigC6E5 = var_core_value_sig5F1A.rows[var_core_value_sigB455]) == null ? undefined : var_core_value_sigC6E5.height);
}
;
function R(var_core_value_sigCEFB, var_core_value_sig1537) {
  if (var_core_value_sigCEFB === var_core_value_sig1537) return true;
  if (Array.isArray(var_core_value_sigCEFB) || Array.isArray(var_core_value_sig1537)) return Array.isArray(var_core_value_sigCEFB) && Array.isArray(var_core_value_sig1537) && var_core_value_sigCEFB.length === var_core_value_sig1537.length && var_core_value_sigCEFB.every((var_core_value_sigD955, var_core_value_sig48BD) => R(var_core_value_sigD955, var_core_value_sig1537[var_core_value_sig48BD]));
  if (!var_core_value_sigCEFB || !var_core_value_sig1537 || typeof var_core_value_sigCEFB != "object" || typeof var_core_value_sig1537 != 'object') return false;
  let var_core_value_sigE4C6 = Object.entries(var_core_value_sigCEFB),
    var_core_value_sig4313 = Object.entries(var_core_value_sig1537);
  return var_core_value_sigE4C6.length === var_core_value_sig4313.length && var_core_value_sigE4C6.every(([var_core_value_sig429F, var_core_value_sigF62A]) => R(var_core_value_sigF62A, var_core_value_sig1537[var_core_value_sig429F]));
}
;
function ze(var_core_value_sigFC87, var_core_value_sig156F, var_core_value_sigDD51, var_core_value_sigF057, var_core_value_sig72F6) {
  if (var_core_value_sig72F6 <= 0) return false;
  let var_core_value_sig9FBA = B(Math.min(z(var_core_value_sigFC87), z(var_core_value_sig156F)), 0, var_core_value_sig72F6 - 1),
    var_core_value_sigFE01 = B(Math.max(z(var_core_value_sigFC87), z(var_core_value_sig156F)), 0, var_core_value_sig72F6 - 1),
    var_core_value_sigA2CE = B(z(var_core_value_sigDD51), 0, var_core_value_sig72F6 - 1),
    var_core_value_sig1975 = var_core_value_sigF057 === "before" ? var_core_value_sigA2CE : var_core_value_sigA2CE + 1;
  return var_core_value_sig1975 >= var_core_value_sig9FBA && var_core_value_sig1975 <= var_core_value_sigFE01 + 1;
}
;
function z(var_core_value_sig6EA1) {
  return Number.isFinite(var_core_value_sig6EA1) ? Math.trunc(var_core_value_sig6EA1) : 0;
}
;
function B(var_core_value_sig029F, var_core_value_sig3767, var_core_value_sig670B) {
  return Math.min(Math.max(var_core_value_sig029F, var_core_value_sig3767), Math.max(var_core_value_sig3767, var_core_value_sig670B));
}
const Be = {
    'id': 'board.command.merge-table-cells',
    'type': var_core_value_sigC27E.COMMAND,
    'handler': (var_core_value_sig6912, var_core_value_sigE235) => {
      if (!var_core_value_sigE235) return false;
      let {
          unitId: var_core_value_sig7664,
          tableId: var_core_value_sig2281,
          range: var_core_value_sig5E86
        } = var_core_value_sigE235,
        var_core_value_sig6998 = var_core_value_sig6912.get(var_core_value_sig770E).getTable(var_core_value_sig7664, var_core_value_sig2281);
      if (!var_core_value_sig6998) return false;
      let var_core_value_sigF639 = var_core_value_sig308A(var_core_value_sig6998, var_core_value_sig5E86);
      return R(var_core_value_sigF639.rows, var_core_value_sig6998.rows) ? true : !!var_core_value_sig6912.get(var_core_value_sigAB68).syncExecuteCommand(L.id, {
        'unitId': var_core_value_sig7664,
        'tableId': var_core_value_sig2281,
        'patch': {
          'rows': var_core_value_sigF639.rows
        }
      });
    }
  },
  Ve = {
    'id': 'board.command.move-table-columns',
    'type': var_core_value_sigC27E.COMMAND,
    'handler': (var_core_value_sigEAE5, var_core_value_sigE94C) => {
      if (!var_core_value_sigE94C) return false;
      let {
          unitId: var_core_value_sig6D47,
          tableId: var_core_value_sigCB82,
          startColumn: var_core_value_sigCF4E,
          endColumn: var_core_value_sig6CAD,
          targetColumn: var_core_value_sig8CF5,
          position: var_core_value_sigDDD7
        } = var_core_value_sigE94C,
        var_core_value_sigB2CE = var_core_value_sigEAE5.get(var_core_value_sig770E).getTable(var_core_value_sig6D47, var_core_value_sigCB82);
      if (!var_core_value_sigB2CE || !var_core_value_sig5276(var_core_value_sigB2CE, {
        'startColumn': var_core_value_sigCF4E,
        'endColumn': var_core_value_sig6CAD
      }, {
        'column': var_core_value_sig8CF5,
        'position': var_core_value_sigDDD7
      })) return false;
      if (ze(var_core_value_sigCF4E, var_core_value_sig6CAD, var_core_value_sig8CF5, var_core_value_sigDDD7, var_core_value_sigB2CE.columns["length"])) return true;
      let var_core_value_sig443C = var_core_value_sig528D(var_core_value_sigB2CE, var_core_value_sigCF4E, var_core_value_sig6CAD, var_core_value_sig8CF5, var_core_value_sigDDD7);
      return var_core_value_sig443C.rev !== var_core_value_sigB2CE.rev && !!var_core_value_sigEAE5.get(var_core_value_sigAB68).syncExecuteCommand(L.id, {
        'unitId': var_core_value_sig6D47,
        'tableId': var_core_value_sigCB82,
        'patch': {
          'columns': var_core_value_sig443C.columns,
          'rows': var_core_value_sig443C.rows
        }
      });
    }
  },
  He = {
    'id': "board.command.move-table-rows",
    'type': var_core_value_sigC27E.COMMAND,
    'handler': (var_core_value_sig39B1, var_core_value_sig210D) => {
      if (!var_core_value_sig210D) return false;
      let {
          unitId: var_core_value_sigB4B4,
          tableId: var_core_value_sigD407,
          startRow: var_core_value_sig63F3,
          endRow: var_core_value_sig6A71,
          targetRow: var_core_value_sig3BF6,
          position: var_core_value_sig38CE
        } = var_core_value_sig210D,
        var_core_value_sig62B7 = var_core_value_sig39B1.get(var_core_value_sig770E).getTable(var_core_value_sigB4B4, var_core_value_sigD407);
      if (!var_core_value_sig62B7 || !var_core_value_sig031B(var_core_value_sig62B7, {
        'startRow': var_core_value_sig63F3,
        'endRow': var_core_value_sig6A71
      }, {
        'row': var_core_value_sig3BF6,
        'position': var_core_value_sig38CE
      })) return false;
      if (ze(var_core_value_sig63F3, var_core_value_sig6A71, var_core_value_sig3BF6, var_core_value_sig38CE, var_core_value_sig62B7.rows["length"])) return true;
      let var_core_value_sig37A8 = var_core_value_sigA309(var_core_value_sig62B7, var_core_value_sig63F3, var_core_value_sig6A71, var_core_value_sig3BF6, var_core_value_sig38CE);
      return var_core_value_sig37A8.rev !== var_core_value_sig62B7.rev && !!var_core_value_sig39B1.get(var_core_value_sigAB68).syncExecuteCommand(L.id, {
        'unitId': var_core_value_sigB4B4,
        'tableId': var_core_value_sigD407,
        'patch': {
          'rows': var_core_value_sig37A8.rows
        }
      });
    }
  },
  Ue = {
    'id': 'board.command.remove-table',
    'type': var_core_value_sigC27E.COMMAND,
    'handler': (var_core_value_sigA90D, var_core_value_sig7A3C) => {
      if (!(var_core_value_sig7A3C != null && var_core_value_sig7A3C.unitId) || !var_core_value_sig7A3C.subUnitId || !var_core_value_sig7A3C.tableId || !var_core_value_sig7A3C.elementId) return false;
      let {
        unitId: var_core_value_sig0511,
        subUnitId: var_core_value_sig1F44,
        tableId: var_core_value_sigCB04,
        elementId: var_core_value_sig947E
      } = var_core_value_sig7A3C;
      if (!var_core_value_sigA90D.get(var_core_value_sig770E).getTable(var_core_value_sig0511, var_core_value_sigCB04)) return false;
      let var_core_value_sig4545 = var_core_value_sigA90D.get(var_core_value_sig88F6).getElementByParam({
          'unitId': var_core_value_sig0511,
          'subUnitId': var_core_value_sig1F44,
          'elementId': var_core_value_sig947E
        }),
        var_core_value_sigF39A = var_core_value_sig4545 == null ? undefined : var_core_value_sig4545.element;
      return !var_core_value_sigF39A || var_core_value_sigF39A.type !== var_core_value_sigC030.Table || var_core_value_sigF39A.tableId !== var_core_value_sigCB04 ? false : !!var_core_value_sigA90D.get(var_core_value_sigAB68).syncExecuteCommand(var_core_value_sigE0A9.id, {
        'unitId': var_core_value_sig0511,
        'subUnitId': var_core_value_sig1F44,
        'elementId': var_core_value_sig947E
      });
    }
  },
  We = {
    'id': "board.command.resize-table-columns",
    'type': var_core_value_sigC27E.COMMAND,
    'handler': (var_core_value_sigF79C, var_core_value_sig2E54) => {
      if (!var_core_value_sig2E54) return false;
      let {
          unitId: var_core_value_sig7658,
          tableId: var_core_value_sigDCF5,
          startColumn: var_core_value_sigC786,
          endColumn: var_core_value_sigC0D9,
          width: var_core_value_sigF0511
        } = var_core_value_sig2E54,
        var_core_value_sig5825 = var_core_value_sigF79C.get(var_core_value_sig770E).getTable(var_core_value_sig7658, var_core_value_sigDCF5);
      if (!var_core_value_sig5825) return false;
      let var_core_value_sig4EB7 = var_core_value_sig5825.columns["slice"](var_core_value_sigC786, var_core_value_sigC0D9 + 1);
      if (var_core_value_sig4EB7.length === var_core_value_sigC0D9 - var_core_value_sigC786 + 1 && var_core_value_sig4EB7.every(var_core_value_sig8178 => (var_core_value_sig8178.width ?? 96) === var_core_value_sigF0511)) return true;
      let var_core_value_sig73AF = var_core_value_sig9E20(var_core_value_sig5825, var_core_value_sigC786, var_core_value_sigC0D9, var_core_value_sigF0511);
      return var_core_value_sig73AF.rev !== var_core_value_sig5825.rev && !!var_core_value_sigF79C.get(var_core_value_sigAB68).syncExecuteCommand(L.id, {
        'unitId': var_core_value_sig7658,
        'tableId': var_core_value_sigDCF5,
        'patch': {
          'columns': var_core_value_sig73AF.columns
        }
      });
    }
  },
  Ge = {
    'id': "board.command.resize-table-rows",
    'type': var_core_value_sigC27E.COMMAND,
    'handler': (var_core_value_sig548A, var_core_value_sigE026) => {
      if (!var_core_value_sigE026) return false;
      let {
          unitId: var_core_value_sig339E,
          tableId: var_core_value_sig7550,
          startRow: var_core_value_sig2983,
          endRow: var_core_value_sigE1B0,
          height: var_core_value_sigD4FF
        } = var_core_value_sigE026,
        var_core_value_sig1E5B = var_core_value_sig548A.get(var_core_value_sig770E).getTable(var_core_value_sig339E, var_core_value_sig7550);
      if (!var_core_value_sig1E5B) return false;
      let var_core_value_sigB680 = var_core_value_sig1E5B.rows["slice"](var_core_value_sig2983, var_core_value_sigE1B0 + 1);
      if (var_core_value_sigB680.length === var_core_value_sigE1B0 - var_core_value_sig2983 + 1 && var_core_value_sigB680.every(var_core_value_sigE9ED => (var_core_value_sigE9ED.height ?? 24) === var_core_value_sigD4FF)) return true;
      let var_core_value_sig1F64 = var_core_value_sig26BB(var_core_value_sig1E5B, var_core_value_sig2983, var_core_value_sigE1B0, var_core_value_sigD4FF);
      return var_core_value_sig1F64.rev !== var_core_value_sig1E5B.rev && !!var_core_value_sig548A.get(var_core_value_sigAB68).syncExecuteCommand(L.id, {
        'unitId': var_core_value_sig339E,
        'tableId': var_core_value_sig7550,
        'patch': {
          'rows': var_core_value_sig1F64.rows
        }
      });
    }
  },
  Ke = {
    'id': "board.command.set-table-border-preset",
    'type': var_core_value_sigC27E.COMMAND,
    'handler': (var_core_value_sigDD1C, var_core_value_sig2C39) => {
      if (!var_core_value_sig2C39) return false;
      let {
          unitId: var_core_value_sigB7D1,
          tableId: var_core_value_sig64F0,
          range: var_core_value_sig85B1,
          preset: var_core_value_sig3141,
          border: var_core_value_sig2162
        } = var_core_value_sig2C39,
        var_core_value_sig2EAD = var_core_value_sigDD1C.get(var_core_value_sig770E).getTable(var_core_value_sigB7D1, var_core_value_sig64F0);
      if (!var_core_value_sig2EAD) return false;
      let {
        rows: var_core_value_sig6774
      } = var_core_value_sig019B(var_core_value_sigF963.deepClone(var_core_value_sig2EAD.rows), var_core_value_sig85B1, var_core_value_sig3141, var_core_value_sig2162);
      return R(var_core_value_sig6774, var_core_value_sig2EAD.rows) ? true : !!var_core_value_sigDD1C.get(var_core_value_sigAB68).syncExecuteCommand(L.id, {
        'unitId': var_core_value_sigB7D1,
        'tableId': var_core_value_sig64F0,
        'patch': {
          'rows': var_core_value_sig6774
        }
      });
    }
  },
  qe = {
    'id': "board.command.set-table-cell-style",
    'type': var_core_value_sigC27E.COMMAND,
    'handler': (var_core_value_sig340D, var_core_value_sig82D4) => {
      if (!var_core_value_sig82D4) return false;
      let {
          unitId: var_core_value_sigBDE4,
          tableId: var_core_value_sig7DF1,
          range: var_core_value_sigDC86,
          style: var_core_value_sig0B0C
        } = var_core_value_sig82D4,
        var_core_value_sigA39E = var_core_value_sig340D.get(var_core_value_sig770E).getTable(var_core_value_sigBDE4, var_core_value_sig7DF1);
      if (!var_core_value_sigA39E) return false;
      let var_core_value_sigBBEE = var_core_value_sig14CB(var_core_value_sigA39E, var_core_value_sigDC86, var_core_value_sig0B0C);
      return R(var_core_value_sigBBEE.rows, var_core_value_sigA39E.rows) ? true : !!var_core_value_sig340D.get(var_core_value_sigAB68).syncExecuteCommand(L.id, {
        'unitId': var_core_value_sigBDE4,
        'tableId': var_core_value_sig7DF1,
        'patch': {
          'rows': var_core_value_sigBBEE.rows
        }
      });
    }
  },
  Je = {
    'id': "board.command.set-table-cell-text",
    'type': var_core_value_sigC27E.COMMAND,
    'handler': (var_core_value_sig011D, var_core_value_sig6167) => {
      var var_core_value_sig65A1;
      if (!var_core_value_sig6167) return false;
      let {
          unitId: var_core_value_sig7F19,
          tableId: var_core_value_sig7827,
          row: var_core_value_sig652C,
          column: var_core_value_sig7E32,
          textData: var_core_value_sig4C07
        } = var_core_value_sig6167,
        var_core_value_sig79AB = var_core_value_sig011D.get(var_core_value_sig770E).getTable(var_core_value_sig7F19, var_core_value_sig7827);
      if (!var_core_value_sig79AB || !((var_core_value_sig65A1 = var_core_value_sig79AB.rows[var_core_value_sig652C]) != null && var_core_value_sig65A1.cells[var_core_value_sig7E32])) return false;
      let var_core_value_sig8E74 = var_core_value_sig8EC2(var_core_value_sig79AB, var_core_value_sig652C, var_core_value_sig7E32, var_core_value_sig4C07);
      return !var_core_value_sig8E74 || !!var_core_value_sig011D.get(var_core_value_sigAB68).syncExecuteCommand(L.id, {
        'unitId': var_core_value_sig7F19,
        'tableId': var_core_value_sig7827,
        'patch': var_core_value_sig8E74
      });
    }
  },
  Ye = {
    'id': "board.command.unmerge-table-cells",
    'type': var_core_value_sigC27E.COMMAND,
    'handler': (var_core_value_sig104C, var_core_value_sig841D) => {
      if (!var_core_value_sig841D) return false;
      let {
          unitId: var_core_value_sig90CB,
          tableId: var_core_value_sigBDF5,
          row: var_core_value_sigACC6,
          column: var_core_value_sig1614
        } = var_core_value_sig841D,
        var_core_value_sig85C3 = var_core_value_sig104C.get(var_core_value_sig770E).getTable(var_core_value_sig90CB, var_core_value_sigBDF5);
      if (!var_core_value_sig85C3) return false;
      let var_core_value_sigB996 = var_core_value_sigFDEE(var_core_value_sig85C3, var_core_value_sigACC6, var_core_value_sig1614);
      return R(var_core_value_sigB996.rows, var_core_value_sig85C3.rows) ? true : !!var_core_value_sig104C.get(var_core_value_sigAB68).syncExecuteCommand(L.id, {
        'unitId': var_core_value_sig90CB,
        'tableId': var_core_value_sigBDF5,
        'patch': {
          'rows': var_core_value_sigB996.rows
        }
      });
    }
  },
  V = {
    'id': 'board.mutation.remove-table',
    'type': var_core_value_sigC27E.MUTATION,
    'handler': (var_core_value_sig4BBA, var_core_value_sig6201) => {
      if (!(var_core_value_sig6201 != null && var_core_value_sig6201.unitId) || !var_core_value_sig6201.tableId) return false;
      let var_core_value_sig5151 = var_core_value_sig4BBA.get(var_core_value_sig770E),
        var_core_value_sigB542 = var_core_value_sig4BBA.get(var_core_value_sigA06F);
      return var_core_value_sig5151.removeTable(var_core_value_sig6201.unitId, var_core_value_sig6201.tableId) ? (var_core_value_sigB542.notifyTableRemoved(var_core_value_sig6201.unitId, var_core_value_sig6201.tableId), true) : false;
    }
  };
let Xe = function (var_core_value_sigBB6C) {
  return var_core_value_sigBB6C.UMLClass = "uml-class", var_core_value_sigBB6C.UMLInterface = "uml-interface", var_core_value_sigBB6C.UMLSequenceFragment = "uml-sequence-fragment", var_core_value_sigBB6C.UMLSequenceAlternativeFragment = "uml-sequence-alternative-fragment", var_core_value_sigBB6C.ERDEntity = "erd-entity", var_core_value_sigBB6C.ERDKeyField = 'erd-key-field', var_core_value_sigBB6C.ERDFieldType = "erd-field-type", var_core_value_sigBB6C.ERDFull = 'erd-full', var_core_value_sigBB6C;
}({});
const Ze = '#111111',
  Qe = "#ffffff",
  H = "#ffffff",
  U = '#111827',
  $e = "#D9DDE3",
  et = "#2B2F36",
  W = {
    'uml-class': {
      'columns': [280],
      'rows': [50, 50, 50],
      'texts': [['Class'], ["+ field: type"], ['+\x20method(type):\x20type']],
      'outerBorderRadius': 8
    },
    'uml-interface': {
      'columns': [250],
      'rows': [50, 50],
      'texts': [['<<Interface>>'], ["+ method(type): type"]],
      'outerBorderRadius': 8
    },
    'uml-sequence-fragment': {
      'columns': [150, 410],
      'rows': [44, 260],
      'texts': [['Opt\x20/\x20Loop', ''], ['[Condition]', '']],
      'rowColumnSpans': {
        1: 2
      },
      'headerHorizontalAlign': var_core_value_sig96FA.LEFT,
      'outerBorderRadius': 0,
      'sequenceFrame': {
        'titleRow': 0,
        'titleColumn': 0,
        'notchWidth': 24
      }
    },
    'uml-sequence-alternative-fragment': {
      'columns': [150, 410],
      'rows': [44, 180, 220],
      'texts': [['Opt\x20/\x20Loop', ''], ['[Condition]', ''], ["[Else]", '']],
      'rowColumnSpans': {
        1: 2,
        2: 2
      },
      'dividerAfterRows': [1],
      'headerHorizontalAlign': var_core_value_sig96FA.LEFT,
      'outerBorderRadius': 0,
      'sequenceFrame': {
        'titleRow': 0,
        'titleColumn': 0,
        'notchWidth': 24
      }
    },
    'erd-entity': {
      'columns': [320],
      'rows': [40, 40, 40, 40],
      'visualStyle': "erd",
      'texts': [["Entity"], ["Field"], ["Field"], ["Field"]],
      'outerBorderRadius': 6
    },
    'erd-key-field': {
      'columns': [90, 310],
      'rows': [40, 40, 40, 40],
      'visualStyle': 'erd',
      'texts': [['Entity', ''], ['PK', "Field"], ['', "Field"], ['', "Field"]],
      'headerColumnSpan': 2,
      'outerBorderRadius': 6
    },
    'erd-field-type': {
      'columns': [240, 160],
      'rows': [40, 40, 40, 40],
      'visualStyle': "erd",
      'texts': [['Entity', ''], ["Field", "Type"], ["Field", "Type"], ['Field', "Type"]],
      'headerColumnSpan': 2,
      'outerBorderRadius': 6
    },
    'erd-full': {
      'columns': [90, 230, 120],
      'rows': [40, 40, 40, 40],
      'visualStyle': "erd",
      'texts': [["Entity", '', ''], ['PK', "Field", "Type"], ['', "Field", "Type"], ['', 'Field', "Type"]],
      'headerColumnSpan': 3,
      'outerBorderRadius': 6
    }
  };
function tt(var_core_value_sigE2BF) {
  let var_core_value_sigB8C7 = W[var_core_value_sigE2BF.preset],
    var_core_value_sigA56E = ut(var_core_value_sigB8C7, var_core_value_sigE2BF.themeData);
  return {
    'id': var_core_value_sigE2BF.id,
    'rev': 0,
    'options': {
      'firstRow': false,
      'firstCol': false,
      'lastRow': false,
      'lastCol': false,
      'bandRow': false,
      'bandCol': false
    },
    'columns': var_core_value_sigB8C7.columns['map'](var_core_value_sigB577 => ({
      'width': var_core_value_sigB577
    })),
    'rows': var_core_value_sigB8C7.rows["map"]((var_core_value_sig9572, var_core_value_sigD873) => ot(var_core_value_sigE2BF.id, var_core_value_sigB8C7, var_core_value_sigA56E, var_core_value_sigD873, var_core_value_sig9572)),
    'custom': {
      'boardDiagramTablePreset': var_core_value_sigE2BF.preset,
      'outerBorderRadius': var_core_value_sigB8C7.outerBorderRadius,
      'outerBorderWidth': 2,
      'outerBorderColor': var_core_value_sigA56E.borderColor,
      'structuralControls': {
        'rows': true,
        'columns': false
      },
      ...(var_core_value_sigB8C7.sequenceFrame ? {
        'sequenceFrame': var_core_value_sigB8C7.sequenceFrame
      } : {})
    }
  };
}
;
function nt(var_core_value_sig1998) {
  let var_core_value_sigFF19 = W[var_core_value_sig1998];
  return {
    'width': var_core_value_sigFF19.columns["reduce"]((var_core_value_sigA12B, var_core_value_sigF230) => var_core_value_sigA12B + var_core_value_sigF230, 0),
    'height': var_core_value_sigFF19.rows["reduce"]((var_core_value_sig09B8, var_core_value_sig6F91) => var_core_value_sig09B8 + var_core_value_sig6F91, 0)
  };
}
;
function rt(var_core_value_sig43B8) {
  return typeof var_core_value_sig43B8 == "string" && Object.values(Xe).includes(var_core_value_sig43B8);
}
;
function it(var_core_value_sigD98F) {
  return rt(var_core_value_sigD98F) && W[var_core_value_sigD98F].visualStyle === "erd";
}
;
function at(var_core_value_sig66C0, var_core_value_sig9D15) {
  var var_core_value_sigB785;
  let var_core_value_sig130F = (var_core_value_sigB785 = var_core_value_sig66C0.custom) == null ? undefined : var_core_value_sigB785.boardDiagramTablePreset;
  if (!it(var_core_value_sig130F)) return var_core_value_sig66C0;
  let var_core_value_sigC0E3 = W[var_core_value_sig130F],
    var_core_value_sig52F7 = ut(var_core_value_sigC0E3, var_core_value_sig9D15),
    var_core_value_sig866F = JSON.parse(JSON.stringify(var_core_value_sig66C0));
  return var_core_value_sig866F.custom = {
    ...var_core_value_sig866F.custom,
    'outerBorderColor': var_core_value_sig52F7.borderColor
  }, var_core_value_sig866F.rows = var_core_value_sig866F.rows["map"]((var_core_value_sigF9C7, var_core_value_sig8895) => ({
    ...var_core_value_sigF9C7,
    'cells': var_core_value_sigF9C7.cells["map"]((var_core_value_sig3D7D, var_core_value_sig27E5) => {
      let var_core_value_sig8061 = var_core_value_sig8895 === 0,
        var_core_value_sig4D4C = {
          ...var_core_value_sig3D7D,
          'style': ct(var_core_value_sigC0E3, var_core_value_sig52F7, var_core_value_sig8895, var_core_value_sig27E5)
        };
      return var_core_value_sig4D4C.textData &&= ft(var_core_value_sig4D4C.textData, var_core_value_sig8061 ? var_core_value_sig52F7.headerTextColor : U), var_core_value_sig4D4C;
    })
  })), var_core_value_sig866F;
}
;
function ot(var_core_value_sigDE3D, var_core_value_sigF175, var_core_value_sig6A18, var_core_value_sig4E3D, var_core_value_sig49B0) {
  return {
    'height': var_core_value_sig49B0,
    'cells': var_core_value_sigF175.columns['map']((var_core_value_sigC80B, var_core_value_sig284F) => st(var_core_value_sigDE3D, var_core_value_sigF175, var_core_value_sig6A18, var_core_value_sig4E3D, var_core_value_sig284F))
  };
}
;
function st(var_core_value_sig2547, var_core_value_sigBCA9, var_core_value_sig4CDF, var_core_value_sig3F79, var_core_value_sig880E) {
  var var_core_value_sigC9ED, var_core_value_sigB57B, var_core_value_sig780B;
  let var_core_value_sig7D1B = ((var_core_value_sigC9ED = var_core_value_sigBCA9.texts[var_core_value_sig3F79]) == null ? undefined : var_core_value_sigC9ED[var_core_value_sig880E]) ?? '',
    var_core_value_sig7BE0 = var_core_value_sig3F79 === 0,
    var_core_value_sig7D40 = {
      'style': ct(var_core_value_sigBCA9, var_core_value_sig4CDF, var_core_value_sig3F79, var_core_value_sig880E)
    };
  return var_core_value_sig7D1B && (var_core_value_sig7D40.textData = pt(var_core_value_sig2547, var_core_value_sig3F79, var_core_value_sig880E, var_core_value_sig7D1B, var_core_value_sig7BE0, var_core_value_sigBCA9, var_core_value_sig4CDF)), var_core_value_sig3F79 === 0 && var_core_value_sigBCA9.headerColumnSpan && var_core_value_sig880E === 0 ? var_core_value_sig7D40.columnSpan = var_core_value_sigBCA9.headerColumnSpan : var_core_value_sig3F79 === 0 && var_core_value_sigBCA9.headerColumnSpan && var_core_value_sig880E < var_core_value_sigBCA9.headerColumnSpan ? var_core_value_sig7D40.hMerge = true : (var_core_value_sigB57B = var_core_value_sigBCA9.rowColumnSpans) != null && var_core_value_sigB57B[var_core_value_sig3F79] && var_core_value_sig880E === 0 ? var_core_value_sig7D40.columnSpan = var_core_value_sigBCA9.rowColumnSpans[var_core_value_sig3F79] : (var_core_value_sig780B = var_core_value_sigBCA9.rowColumnSpans) != null && var_core_value_sig780B[var_core_value_sig3F79] && var_core_value_sig880E < var_core_value_sigBCA9.rowColumnSpans[var_core_value_sig3F79] && (var_core_value_sig7D40.hMerge = true), var_core_value_sig7D40;
}
;
function ct(var_core_value_sig6C7E, var_core_value_sig68BE, var_core_value_sig04C6, var_core_value_sigCA05) {
  let var_core_value_sig2F2B = var_core_value_sig04C6 === 0;
  if (var_core_value_sig6C7E.sequenceFrame) return lt(var_core_value_sig6C7E, var_core_value_sig04C6, var_core_value_sig2F2B);
  let var_core_value_sig70AF = var_core_value_sig6C7E.visualStyle === "erd",
    var_core_value_sigD04E = var_core_value_sigCA05 === var_core_value_sig6C7E.columns['length'] - 1 || var_core_value_sig2F2B && (var_core_value_sig6C7E.headerColumnSpan ?? 1) > 1,
    var_core_value_sigB99B = var_core_value_sig04C6 === var_core_value_sig6C7E.rows["length"] - 1,
    var_core_value_sig5A75 = dt(undefined, var_core_value_sig68BE.borderColor);
  return {
    'fill': {
      'type': var_core_value_sigAC47.Solid,
      'color': var_core_value_sig2F2B && var_core_value_sig70AF ? var_core_value_sig68BE.headerFillColor : var_core_value_sig2F2B ? H : Qe
    },
    'verticalAlign': var_core_value_sig4654.Middle,
    'margins': {
      'left': var_core_value_sig2F2B ? 8 : 6,
      'right': var_core_value_sig2F2B ? 8 : 6,
      'top': 4,
      'bottom': 4
    },
    'borders': {
      'right': var_core_value_sigD04E ? undefined : var_core_value_sig5A75,
      'bottom': var_core_value_sig70AF ? var_core_value_sig2F2B ? var_core_value_sig5A75 : undefined : var_core_value_sigB99B ? undefined : var_core_value_sig5A75
    }
  };
}
;
function lt(var_core_value_sig7BAF, var_core_value_sig8F69, var_core_value_sig6884) {
  var var_core_value_sig066E;
  let var_core_value_sig9B0D = {};
  return (var_core_value_sig066E = var_core_value_sig7BAF.dividerAfterRows) != null && var_core_value_sig066E.includes(var_core_value_sig8F69) && (var_core_value_sig9B0D.bottom = dt(var_core_value_sigFBA5.Dash)), {
    'fill': {
      'type': var_core_value_sigAC47.Solid,
      'color': var_core_value_sig6884 ? H : Qe
    },
    'verticalAlign': var_core_value_sig4654.Middle,
    'margins': {
      'left': var_core_value_sig6884 ? 14 : 10,
      'right': 10,
      'top': 6,
      'bottom': 6
    },
    'borders': var_core_value_sig9B0D
  };
}
;
function ut(var_core_value_sig3D2C, var_core_value_sigC56D) {
  if (var_core_value_sig3D2C.visualStyle === 'erd' && var_core_value_sigC56D) {
    let var_core_value_sigE154 = var_core_value_sig3801(var_core_value_sigC56D, "header");
    return {
      'borderColor': var_core_value_sigE154.stroke["color"] ?? $e,
      'headerFillColor': var_core_value_sigE154.fill['color'] ?? et,
      'headerTextColor': var_core_value_sigE154.textColor
    };
  }
  return var_core_value_sig3D2C.visualStyle === 'erd' ? {
    'borderColor': $e,
    'headerFillColor': et,
    'headerTextColor': '#FFFFFF'
  } : {
    'borderColor': Ze,
    'headerFillColor': H,
    'headerTextColor': U
  };
}
;
function dt(var_core_value_sig3A17 = var_core_value_sigFBA5.Solid, var_core_value_sig938F = Ze) {
  return {
    'color': var_core_value_sig938F,
    'width': 2,
    'dash': var_core_value_sig3A17
  };
}
;
function ft(var_core_value_sigD948, var_core_value_sigBE5E) {
  var var_core_value_sig0281, var_core_value_sigED71;
  let var_core_value_sig281C = JSON.parse(JSON.stringify(var_core_value_sigD948)),
    var_core_value_sig3C92 = (var_core_value_sig0281 = var_core_value_sig281C.documentStyle) == null ? undefined : var_core_value_sig0281.textStyle;
  return var_core_value_sig3C92 && (var_core_value_sig3C92.cl = {
    'rgb': var_core_value_sigBE5E
  }, var_core_value_sig3C92.textFill = {
    'type': 'solid',
    'color': var_core_value_sigBE5E,
    'opacity': 1
  }), (var_core_value_sigED71 = var_core_value_sig281C.body) == null || (var_core_value_sigED71 = var_core_value_sigED71.textRuns) == null || var_core_value_sigED71.forEach(var_core_value_sig4632 => {
    var_core_value_sig4632.ts && (var_core_value_sig4632.ts['cl'] = {
      'rgb': var_core_value_sigBE5E
    }, var_core_value_sig4632.ts["textFill"] = {
      'type': "solid",
      'color': var_core_value_sigBE5E,
      'opacity': 1
    });
  }), var_core_value_sig281C;
}
;
function pt(var_core_value_sigB16B, var_core_value_sig585D, var_core_value_sigE722, var_core_value_sig062A, var_core_value_sig050A, var_core_value_sig8B32, var_core_value_sig870F) {
  let var_core_value_sigB683 = var_core_value_sig062A + '\x0d\x0a',
    var_core_value_sig26EC = var_core_value_sig050A ? var_core_value_sig8B32.headerHorizontalAlign ?? var_core_value_sig96FA.CENTER : var_core_value_sig96FA.LEFT,
    var_core_value_sigEEDB = var_core_value_sig050A && var_core_value_sig8B32.visualStyle === "erd" ? var_core_value_sig870F.headerTextColor : U,
    var_core_value_sig36E7 = {
      ...(var_core_value_sig050A ? {
        'bl': var_core_value_sigA676.TRUE
      } : {}),
      'cl': {
        'rgb': var_core_value_sigEEDB
      },
      'ff': var_core_value_sigA70D.ff,
      'fs': var_core_value_sigA70D.fs,
      'textFill': {
        'type': "solid",
        'color': var_core_value_sigEEDB,
        'opacity': 1
      }
    };
  return {
    'id': "BOARD_DIAGRAM_TABLE_CELL_" + var_core_value_sigB16B + '_' + var_core_value_sig585D + '_' + var_core_value_sigE722,
    'body': {
      'dataStream': var_core_value_sigB683,
      'paragraphs': [{
        'startIndex': 0,
        'paragraphId': var_core_value_sigF866(new Set()),
        'paragraphStyle': {
          'horizontalAlign': var_core_value_sig26EC,
          'lineSpacing': 1,
          'snapToGrid': var_core_value_sigA676.FALSE,
          'spaceAbove': {
            'v': 0
          },
          'spaceBelow': {
            'v': 0
          }
        }
      }],
      'sectionBreaks': [{
        'sectionId': var_core_value_sig5EFB(new Set()),
        'startIndex': Math.max(0, var_core_value_sigB683.length - 1),
        'gridType': var_core_value_sig44DD.DEFAULT
      }],
      'textRuns': var_core_value_sig062A.length > 0 ? [{
        'st': 0,
        'ed': var_core_value_sig062A.length,
        'ts': var_core_value_sig36E7
      }] : []
    },
    'documentStyle': {
      'documentFlavor': var_core_value_sigCD82.UNSPECIFIED,
      'renderConfig': {
        'horizontalAlign': var_core_value_sig26EC
      },
      'textStyle': var_core_value_sig36E7
    }
  };
}
var mt = "@univerjs-pro/boards-table",
  ht = "1.0.0-insiders.20260907-70fc579";
const gt = {};
function G(var_core_value_sig6A78) {
  '@babel/helpers - typeof';

  return G = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sig12F2) {
    return typeof var_core_value_sig12F2;
  } : function (var_core_value_sig2259) {
    return var_core_value_sig2259 && typeof Symbol == 'function' && var_core_value_sig2259.constructor === Symbol && var_core_value_sig2259 !== Symbol.prototype ? 'symbol' : typeof var_core_value_sig2259;
  }, G(var_core_value_sig6A78);
}
;
function _t(var_core_value_sigF7EF, var_core_value_sig27F9) {
  if (G(var_core_value_sigF7EF) != 'object' || !var_core_value_sigF7EF) return var_core_value_sigF7EF;
  var var_core_value_sig393E = var_core_value_sigF7EF[Symbol.toPrimitive];
  if (var_core_value_sig393E !== undefined) {
    var var_core_value_sigB609 = var_core_value_sig393E.call(var_core_value_sigF7EF, var_core_value_sig27F9 || "default");
    if (G(var_core_value_sigB609) != "object") return var_core_value_sigB609;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sig27F9 === "string" ? String : Number)(var_core_value_sigF7EF);
}
;
function vt(var_core_value_sig390D) {
  var var_core_value_sigC928 = _t(var_core_value_sig390D, 'string');
  return G(var_core_value_sigC928) == 'symbol' ? var_core_value_sigC928 : var_core_value_sigC928 + '';
}
;
function K(var_core_value_sig39B7, var_core_value_sig18E0, var_core_value_sigE161) {
  return (var_core_value_sig18E0 = vt(var_core_value_sig18E0)) in var_core_value_sig39B7 ? Object.defineProperty(var_core_value_sig39B7, var_core_value_sig18E0, {
    'value': var_core_value_sigE161,
    'enumerable': true,
    'configurable': true,
    'writable': true
  }) : var_core_value_sig39B7[var_core_value_sig18E0] = var_core_value_sigE161, var_core_value_sig39B7;
}
;
function q(var_core_value_sigBDEE, var_core_value_sig1F40) {
  return function (var_core_value_sig9E2F, var_core_value_sigD082) {
    var_core_value_sig1F40(var_core_value_sig9E2F, var_core_value_sigD082, var_core_value_sigBDEE);
  };
}
;
function J(var_core_value_sig3FC7, var_core_value_sig1E1B, var_core_value_sig3B10, var_core_value_sig89E6) {
  var var_core_value_sig4743 = arguments.length,
    var_core_value_sigEB6A = var_core_value_sig4743 < 3 ? var_core_value_sig1E1B : var_core_value_sig89E6 === null ? var_core_value_sig89E6 = Object.getOwnPropertyDescriptor(var_core_value_sig1E1B, var_core_value_sig3B10) : var_core_value_sig89E6,
    var_core_value_sig3D46;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sigEB6A = Reflect.decorate(var_core_value_sig3FC7, var_core_value_sig1E1B, var_core_value_sig3B10, var_core_value_sig89E6);else {
    for (var var_core_value_sigCC93 = var_core_value_sig3FC7.length - 1; var_core_value_sigCC93 >= 0; var_core_value_sigCC93--) (var_core_value_sig3D46 = var_core_value_sig3FC7[var_core_value_sigCC93]) && (var_core_value_sigEB6A = (var_core_value_sig4743 < 3 ? var_core_value_sig3D46(var_core_value_sigEB6A) : var_core_value_sig4743 > 3 ? var_core_value_sig3D46(var_core_value_sig1E1B, var_core_value_sig3B10, var_core_value_sigEB6A) : var_core_value_sig3D46(var_core_value_sig1E1B, var_core_value_sig3B10)) || var_core_value_sigEB6A);
  }
  return var_core_value_sig4743 > 3 && var_core_value_sigEB6A && Object.defineProperty(var_core_value_sig1E1B, var_core_value_sig3B10, var_core_value_sigEB6A), var_core_value_sigEB6A;
}
let Y = class extends var_core_value_sigA386 {
  constructor(var_core_value_sigDBB7, var_core_value_sigD0A8, var_core_value_sigF4B9) {
    super(), this._resourceManagerService = var_core_value_sigDBB7, this._resourceService = var_core_value_sigD0A8, this._modelService = var_core_value_sigF4B9, K(this, "_resourceDisposable", null), this._initResource();
  }
  _initResource() {
    this._resourceDisposable = this._resourceManagerService["registerPluginResource"](var_core_value_sig9DC0({
      'pluginName': 'BOARD_TABLE_PLUGIN',
      'businesses': [var_core_value_sigB608.UNIVER_BOARD],
      'resourceService': this._resourceService,
      'modelService': this._modelService
    })), this.disposeWithMe(this._resourceDisposable);
  }
};
Y = J([q(0, var_core_value_sig2AE0), q(1, var_core_value_sig2776(var_core_value_sig770E)), q(2, var_core_value_sig2776(var_core_value_sigA06F))], Y);
let X = class extends var_core_value_sigA386 {
  constructor(var_core_value_sig5CEE, var_core_value_sigE92A, var_core_value_sig362B, var_core_value_sig5CA5) {
    super(), this._commandService = var_core_value_sig5CEE, this._instanceService = var_core_value_sigE92A, this._resourceService = var_core_value_sig362B, this._modelService = var_core_value_sig5CA5, this._initThemeListener();
  }
  _initThemeListener() {
    this.disposeWithMe(this._commandService["onCommandExecuted"](var_core_value_sigC9E0 => {
      var_core_value_sigC9E0.id === var_core_value_sigA73E.id && this._refreshERDTables(var_core_value_sigC9E0.params);
    }));
  }
  _refreshERDTables(var_core_value_sigE90F) {
    if (!(var_core_value_sigE90F != null && var_core_value_sigE90F.unitId)) return;
    let var_core_value_sigEFD4 = this._instanceService["getUnit"](var_core_value_sigE90F.unitId, var_core_value_sigB608.UNIVER_BOARD),
      var_core_value_sig861B = var_core_value_sigE90F.themeData ?? (var_core_value_sigEFD4 == null ? undefined : var_core_value_sigEFD4.getThemeData());
    if (!var_core_value_sig861B) return;
    let var_core_value_sig5237 = this._resourceService['getResource'](var_core_value_sigE90F.unitId);
    Object.values(var_core_value_sig5237.tables).forEach(var_core_value_sig76BA => {
      var var_core_value_sigFBFA;
      if (!it((var_core_value_sigFBFA = var_core_value_sig76BA.custom) == null ? undefined : var_core_value_sigFBFA.boardDiagramTablePreset)) return;
      let var_core_value_sigF602 = at(var_core_value_sig76BA, var_core_value_sig861B);
      this._resourceService["setTable"](var_core_value_sigE90F.unitId, var_core_value_sigF602), this._modelService["notifyTableChanged"](var_core_value_sigE90F.unitId, var_core_value_sig76BA.id);
    });
  }
};
X = J([q(0, var_core_value_sigAB68), q(1, var_core_value_sig9D96), q(2, var_core_value_sig2776(var_core_value_sig770E)), q(3, var_core_value_sig2776(var_core_value_sigA06F))], X);
let Z = class {
  constructor(var_core_value_sigBB00, var_core_value_sig7E54, var_core_value_sig9A8D, var_core_value_sigC259, var_core_value_sig9C9F, var_core_value_sigFDEA) {
    this._commandService = var_core_value_sigBB00, this._undoRedoService = var_core_value_sig7E54, this._resourceService = var_core_value_sig9A8D, this._elementService = var_core_value_sigC259, this._instanceService = var_core_value_sig9C9F, this._themeService = var_core_value_sigFDEA;
  }
  insertTable(var_core_value_sig86D0) {
    var var_core_value_sig4CD2;
    if (!xt(var_core_value_sig86D0)) return false;
    let var_core_value_sig48CA = rt(var_core_value_sig86D0.diagramPreset) ? var_core_value_sig86D0.diagramPreset : undefined,
      var_core_value_sig50AF = bt(var_core_value_sig86D0.rows, 3),
      var_core_value_sigA942 = bt(var_core_value_sig86D0.columns, 3),
      var_core_value_sigA621 = var_core_value_sig48CA ? nt(var_core_value_sig48CA) : undefined,
      var_core_value_sigBBFF = Q(var_core_value_sig86D0.width, (var_core_value_sigA621 == null ? undefined : var_core_value_sigA621.width) ?? Math.max(240, var_core_value_sigA942 * 120)),
      var_core_value_sig8889 = Q(var_core_value_sig86D0.height, (var_core_value_sigA621 == null ? undefined : var_core_value_sigA621.height) ?? Math.max(96, var_core_value_sig50AF * 48)),
      var_core_value_sig32F8 = var_core_value_sig3A85(6),
      var_core_value_sig5B67 = var_core_value_sig86D0.elementId ?? var_core_value_sig3A85(6),
      var_core_value_sig1758 = var_core_value_sig48CA ? (var_core_value_sig4CD2 = this._instanceService['getUnit'](var_core_value_sig86D0.unitId, var_core_value_sigB608.UNIVER_BOARD)) == null ? undefined : var_core_value_sig4CD2.getThemeData() : undefined,
      var_core_value_sig4805 = var_core_value_sig48CA ? tt({
        'id': var_core_value_sig32F8,
        'preset': var_core_value_sig48CA,
        'themeData': var_core_value_sig1758
      }) : this._resourceService["buildTable"]({
        'id': var_core_value_sig32F8,
        'rows': var_core_value_sig50AF,
        'columns': var_core_value_sigA942,
        'columnWidth': var_core_value_sigBBFF / var_core_value_sigA942,
        'rowHeight': var_core_value_sig8889 / var_core_value_sig50AF
      }),
      var_core_value_sigE67E;
    !var_core_value_sig48CA && var_core_value_sig4805.styleId && (var_core_value_sigE67E = var_core_value_sigC6BC(var_core_value_sig4805.id, var_core_value_sig4805.styleId, var_core_value_sig218A(var_core_value_sig1BBD => this._themeService["getColorFromTheme"](var_core_value_sig1BBD)))), var_core_value_sigE67E && (var_core_value_sig4805.themeId = var_core_value_sigE67E.id);
    let var_core_value_sig2902 = {
        'id': var_core_value_sig5B67,
        'type': var_core_value_sigC030.Table,
        'tableId': var_core_value_sig32F8,
        'parentId': var_core_value_sig86D0.parentId,
        'laneId': var_core_value_sig86D0.laneId,
        'transform': {
          'left': var_core_value_sig86D0.left,
          'top': var_core_value_sig86D0.top,
          'width': var_core_value_sigBBFF,
          'height': var_core_value_sig8889,
          'rotation': 0
        }
      },
      var_core_value_sig9989 = {
        'unitId': var_core_value_sig86D0.unitId,
        'table': var_core_value_sig4805
      };
    var_core_value_sigE67E && (var_core_value_sig9989.theme = var_core_value_sigE67E);
    let var_core_value_sig698E = {
        'unitId': var_core_value_sig86D0.unitId,
        'tableId': var_core_value_sig32F8
      },
      var_core_value_sig2809 = {
        'id': I.id,
        'params': var_core_value_sig9989
      },
      var_core_value_sig2DAB = this._elementService["getElementData"](var_core_value_sig86D0.unitId, var_core_value_sig86D0.subUnitId),
      var_core_value_sig877E = var_core_value_sig5055({
        'unitId': var_core_value_sig86D0.unitId,
        'subUnitId': var_core_value_sig86D0.subUnitId,
        'elements': [var_core_value_sig2902],
        'elementData': var_core_value_sig2DAB,
        'elementOrder': this._elementService["getElementOrder"](var_core_value_sig86D0.unitId, var_core_value_sig86D0.subUnitId)
      });
    if (!var_core_value_sig877E) return false;
    let {
      redoMutations: var_core_value_sig20C8,
      undoMutations: var_core_value_sigE9A7
    } = var_core_value_sig877E;
    if (!this._commandService["syncExecuteCommand"](I.id, var_core_value_sig9989)) return false;
    let var_core_value_sigBECE = this._executeBoardRedoMutations(var_core_value_sig20C8, var_core_value_sigE9A7);
    return var_core_value_sigBECE.result ? (this._undoRedoService["pushUndoRedo"]({
      'unitID': var_core_value_sig86D0.unitId,
      'undoMutations': [...var_core_value_sigE9A7, {
        'id': V.id,
        'params': var_core_value_sig698E
      }],
      'redoMutations': [var_core_value_sig2809, ...var_core_value_sig20C8]
    }), true) : (var_core_value_sigBECE.undoMutations["length"] > 0 && this._rollbackBoardMutations(var_core_value_sigBECE.undoMutations), this._commandService["syncExecuteCommand"](V.id, var_core_value_sig698E), false);
  }
  _executeBoardRedoMutations(var_core_value_sig1B22, var_core_value_sig7F72) {
    let var_core_value_sig7B2A = [];
    for (let var_core_value_sigF704 of var_core_value_sig1B22) {
      if (!this._commandService['syncExecuteCommand'](var_core_value_sigF704.id, var_core_value_sigF704.params)) return {
        'result': false,
        'undoMutations': St(var_core_value_sig7B2A, var_core_value_sig7F72)
      };
      var_core_value_sig7B2A.push(var_core_value_sigF704);
    }
    return {
      'result': true,
      'undoMutations': var_core_value_sig7F72
    };
  }
  _rollbackBoardMutations(var_core_value_sig06CD) {
    var_core_value_sig06CD.forEach(var_core_value_sig2BCF => {
      this._commandService["syncExecuteCommand"](var_core_value_sig2BCF.id, var_core_value_sig2BCF.params);
    });
  }
  getRemoveTableMutationInfos(var_core_value_sigA5F1) {
    let var_core_value_sig97A2 = this._resourceService["getTable"](var_core_value_sigA5F1.unitId, var_core_value_sigA5F1.element["tableId"]);
    if (!var_core_value_sig97A2) return {
      'redoMutations': [],
      'undoMutations': []
    };
    let var_core_value_sig07E9 = var_core_value_sig97A2.themeId ? this._resourceService["getTheme"](var_core_value_sigA5F1.unitId, var_core_value_sig97A2.themeId) : undefined,
      var_core_value_sig4F59 = {
        'unitId': var_core_value_sigA5F1.unitId,
        'table': var_core_value_sig97A2
      };
    return var_core_value_sig07E9 && (var_core_value_sig4F59.theme = var_core_value_sig07E9), {
      'redoMutations': [{
        'id': V.id,
        'params': {
          'unitId': var_core_value_sigA5F1.unitId,
          'tableId': var_core_value_sigA5F1.element["tableId"]
        }
      }],
      'undoMutations': [{
        'id': I.id,
        'params': var_core_value_sig4F59
      }]
    };
  }
  getSearchEntries(var_core_value_sigF564) {
    let var_core_value_sig8CFA = this._resourceService["getTable"](var_core_value_sigF564.unitId, var_core_value_sigF564.element["tableId"]);
    if (!var_core_value_sig8CFA) return [];
    let var_core_value_sig2E11 = [];
    return var_core_value_sig8CFA.rows["forEach"]((var_core_value_sig0D69, var_core_value_sig480E) => {
      var_core_value_sig0D69.cells["forEach"]((var_core_value_sig2AD8, var_core_value_sig2AD0) => {
        let var_core_value_sig3EEE = yt(var_core_value_sig2AD8.textData);
        var_core_value_sig3EEE && var_core_value_sig2E11.push({
          'row': var_core_value_sig480E,
          'column': var_core_value_sig2AD0,
          'text': var_core_value_sig3EEE
        });
      });
    }), var_core_value_sig2E11;
  }
};
Z = J([q(0, var_core_value_sigAB68), q(1, var_core_value_sigC349), q(2, var_core_value_sig2776(var_core_value_sig770E)), q(3, var_core_value_sig88F6), q(4, var_core_value_sig9D96), q(5, var_core_value_sig2776(var_core_value_sig4186))], Z);
function yt(var_core_value_sig5964) {
  var var_core_value_sig808B;
  let var_core_value_sig2A26 = var_core_value_sig5964 == null || (var_core_value_sig808B = var_core_value_sig5964.body) == null ? undefined : var_core_value_sig808B.dataStream;
  return var_core_value_sig2A26 ? var_core_value_sig2A26.replace(/\r\n/g, '\x0a').replace(/\r/g, '\x0a').replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').replace(/\n+$/g, '') : '';
}
;
function Q(var_core_value_sig1179, var_core_value_sigEA92) {
  return var_core_value_sig1179 !== undefined && Number.isFinite(var_core_value_sig1179) && var_core_value_sig1179 > 0 ? var_core_value_sig1179 : var_core_value_sigEA92;
}
;
function bt(var_core_value_sig8FD9, var_core_value_sig1AE5) {
  return var_core_value_sig8FD9 === undefined || !Number.isFinite(var_core_value_sig8FD9) ? var_core_value_sig1AE5 : Math.max(1, Math.floor(var_core_value_sig8FD9));
}
;
function xt(var_core_value_sig7100) {
  return !!var_core_value_sig7100.unitId && !!var_core_value_sig7100.subUnitId && Number.isFinite(var_core_value_sig7100.left) && Number.isFinite(var_core_value_sig7100.top);
}
;
function St(var_core_value_sigA19A, var_core_value_sigD3F5) {
  let var_core_value_sig3082 = [...var_core_value_sigD3F5],
    var_core_value_sigF5D1 = [];
  return var_core_value_sigA19A.slice().reverse().forEach(var_core_value_sig5B69 => {
    let var_core_value_sigB098 = var_core_value_sig3082.findIndex(var_core_value_sig26DB => Ct(var_core_value_sig5B69, var_core_value_sig26DB));
    if (var_core_value_sigB098 < 0) return;
    let [var_core_value_sigCE71] = var_core_value_sig3082.splice(var_core_value_sigB098, 1);
    var_core_value_sigF5D1.push(var_core_value_sigCE71);
  }), var_core_value_sigF5D1;
}
;
function Ct(var_core_value_sig8775, var_core_value_sig481B) {
  return var_core_value_sig8775.id === var_core_value_sig52CA.id && var_core_value_sig481B.id === var_core_value_sig5542.id ? wt(var_core_value_sig8775) === Tt(var_core_value_sig481B) : var_core_value_sig8775.id === var_core_value_sigB9FC.id && var_core_value_sig481B.id === var_core_value_sigB9FC.id && Et(var_core_value_sig8775) === Et(var_core_value_sig481B);
}
;
function wt(var_core_value_sig13D7) {
  var var_core_value_sig90C0;
  return (var_core_value_sig90C0 = var_core_value_sig13D7.params) == null || (var_core_value_sig90C0 = var_core_value_sig90C0.element) == null ? undefined : var_core_value_sig90C0.id;
}
;
function Tt(var_core_value_sigF1B2) {
  var var_core_value_sigC2BB;
  return (var_core_value_sigC2BB = var_core_value_sigF1B2.params) == null ? undefined : var_core_value_sigC2BB.elementId;
}
;
function Et(var_core_value_sigD9DB) {
  var var_core_value_sigA363;
  return (var_core_value_sigA363 = var_core_value_sigD9DB.params) == null ? undefined : var_core_value_sigA363.elementId;
}
let $ = class extends var_core_value_sigEB43 {
  constructor(var_core_value_sig21D8 = gt, var_core_value_sig2B65, var_core_value_sigD7EA, var_core_value_sigB33B) {
    super(), this._config = var_core_value_sig21D8, this._injector = var_core_value_sig2B65, this._commandService = var_core_value_sigD7EA, this._configService = var_core_value_sigB33B, K(this, "_adapterDisposable", null);
    let {
      ...var_core_value_sig24B9
    } = var_core_value_sig2682({}, gt, this._config);
    this._configService["setConfig"]('boards-table.config', var_core_value_sig24B9), this._initCommands();
  }
  onStarting() {
    this._injector["has"](var_core_value_sig770E) || this._injector["add"]([var_core_value_sig770E]), this._injector['has'](var_core_value_sigA06F) || this._injector["add"]([var_core_value_sigA06F]), [[Y], [X], [Z]].forEach(var_core_value_sigF0F9 => this._injector["add"](var_core_value_sigF0F9)), var_core_value_sig6709(this._injector, [[var_core_value_sig770E], [var_core_value_sigA06F], [Y], [X], [Z]]);
    let var_core_value_sigE627 = this._injector["get"](var_core_value_sig37DB),
      var_core_value_sigEF3E = this._injector["get"](Z);
    this._adapterDisposable = var_core_value_sigE627.registerAdapter(var_core_value_sigEF3E), this.disposeWithMe(this._adapterDisposable);
  }
  _initCommands() {
    [Le, je, Fe, Ae, He, Ve, Ge, We, Ue, Be, Ye, Ke, qe, Je, L, I, V].forEach(var_core_value_sig1A0F => {
      this.disposeWithMe(this._commandService["registerCommand"](var_core_value_sig1A0F));
    });
  }
};
K($, "type", var_core_value_sigB608.UNIVER_BOARD), K($, 'pluginName', "UniverBoardsTablePlugin"), K($, 'packageName', mt), K($, "version", ht), $ = J([var_core_value_sigCE10(var_core_value_sig45F0, var_core_value_sigB26B, var_core_value_sig7620), q(1, var_core_value_sig2776(var_core_value_sig6FB2)), q(2, var_core_value_sigAB68), q(3, var_core_value_sig040A)], $);
export { Xe as BoardDiagramTablePreset, Ae as DeleteBoardTableColumnsCommand, je as DeleteBoardTableRowsCommand, Fe as InsertBoardTableColumnsCommand, Le as InsertBoardTableRowsCommand, Be as MergeBoardTableCellsCommand, Ve as MoveBoardTableColumnsCommand, He as MoveBoardTableRowsCommand, Ue as RemoveBoardTableCommand, V as RemoveBoardTableMutation, We as ResizeBoardTableColumnsCommand, Ge as ResizeBoardTableRowsCommand, Ke as SetBoardTableBorderPresetCommand, qe as SetBoardTableCellStyleCommand, Je as SetBoardTableCellTextCommand, I as SetBoardTableMutation, $ as UniverBoardsTablePlugin, Ye as UnmergeBoardTableCellsCommand, L as UpdateBoardTableCommand };
