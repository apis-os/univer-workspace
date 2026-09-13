import { BASE_RECORD_ID_FIELD_ID, BaseConditionalColorOperator, BaseConditionalColorTarget, BaseConditionalDateMode, BaseDataModel, BaseFieldType, BaseFilterConjunction, BaseHierarchyInvalidReason, BaseRecordLinkRole, BaseSortDirection, BaseViewType, CellValueType, ColorKit, CommandType, CustomCommandExecutionError, DateSystem, DependentOn, Disposable, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, JSON1, JSONX, ObjectMatrix, Optional, PermissionStatus, Plugin, Tools, UniverInstanceType, allocateBaseFormulaTableName, assertBaseTableRecordIdentity, createBaseFormulaTableNameMap, createBaseRecordIdField, createIdentifier, dateKit, excelDateTimeSerial, excelSerialToDateTime, generateRandomId, getBaseFormulaTableName, isBaseRecordIdFieldName, isValidBaseRecordId, merge, nameCharacterCheck, numfmt, regexp, sequenceExecute, toDisposable, touchDependencies } from '@univerjs/core';
import { FormulaCalculationTriggerService, IActiveDirtyManagerService, RemoveSuperTableMutation, SetFormulaCalculationResultMutation, SetSuperTableMutation, SetTriggerFormulaCalculationStartMutation, UniverProFormulaEnginePlugin, refactorFormulaUnitQualifier } from '@univerjs-pro/engine-formula';
import { UnitAction, UnitObject } from '@univerjs/protocol';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { DataSyncPrimaryController } from '@univerjs/rpc';
import { FormulaCalculationSessionService, FormulaResultApplicationType } from '@univerjs/engine-formula';
function fn_L2_db_endo_routine_io_ON2_heap_nothrow_sigD23F(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463132, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463133, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463134 = new Set(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463133.map(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46146 => var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46146.recordId))) {
  let var_L0_db_endo_itemsSet_pure_O1_zalloc_nothrow_sig929934 = new Set(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463134);
  for (let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46827 of var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463134) {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46147 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463132.parentByRecordId['get'](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46827) ?? null;
    for (; var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46147;) var_L0_db_endo_itemsSet_pure_O1_zalloc_nothrow_sig929934.add(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46147), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46147 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463132.parentByRecordId['get'](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46147) ?? null;
  }
  let var_L0_db_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5938 = new Map(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463133.map(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46828 => [var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46828.recordId, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46828])),
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463135 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463132.orderedRecordIds['filter'](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46829 => var_L0_db_endo_itemsSet_pure_O1_zalloc_nothrow_sig929934.has(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46829)),
    var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A130 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463135.flatMap(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46830 => {
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46831 = var_L0_db_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5938.get(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46830);
      return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46831 ? [var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46831] : [];
    }),
    var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB64 = {};
  for (let var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D27 = 0; var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D27 < var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463135.length; var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D27++) {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46148 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463135[var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D27];
    var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB64[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46148] = {
      'recordId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46148,
      'parentRecordId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463132.parentByRecordId["get"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46148) ?? null,
      'depth': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463132.depthByRecordId["get"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46148) ?? 0,
      'directChildCount': (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463132.childrenByParentId["get"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46148) ?? []).length,
      'subtreeHeight': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463132.subtreeHeightByRecordId["get"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46148) ?? 0,
      'subtreeEndIndex': var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D27,
      'invalidReason': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463132.invalidReasonByRecordId['get'](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46148)
    };
  }
  let var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A131 = [];
  for (let var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D28 = 0; var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D28 < var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463135.length; var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D28++) {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46149 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463135[var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D28],
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46150 = var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB64[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46149].depth;
    for (; var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A131.length && var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A131[var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A131.length - 1].depth >= var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46150;) {
      let var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 = var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A131.pop();
      var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB64[var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D2.recordId].subtreeEndIndex = var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D28 - 1;
    }
    var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A131.push({
      'recordId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46149,
      'depth': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46150
    });
  }
  return var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A131.forEach(({
    recordId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46834
  }) => {
    var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB64[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46834].subtreeEndIndex = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463135.length - 1;
  }), {
    'rows': var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A130,
    'hierarchy': {
      'fieldId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463132.fieldId,
      'rootRecordIds': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463132.rootRecordIds["filter"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46836 => var_L0_db_endo_itemsSet_pure_O1_zalloc_nothrow_sig929934.has(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46836)),
      'orderedRecordIds': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463135,
      'nodes': var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB64
    }
  };
}
function tt(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463144, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463145, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463146) {
  if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463146) return {
    'valid': true
  };
  if (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463145 === var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463146) return {
    'valid': false,
    'reason': BaseHierarchyInvalidReason.SelfParent
  };
  let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463147 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463146;
  for (; var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463147;) {
    if (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463147 === var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463145) return {
      'valid': false,
      'reason': BaseHierarchyInvalidReason.Cycle
    };
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463147 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463144.parentByRecordId["get"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463147) ?? null;
  }
  return (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463144.depthByRecordId["get"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463146) ?? 0) + 1 + (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463144.subtreeHeightByRecordId["get"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463145) ?? 0) >= 5 ? {
    'valid': false,
    'reason': BaseHierarchyInvalidReason.MaxDepth
  } : {
    'valid': true
  };
}
export { fn_L2_db_endo_routine_io_ON2_heap_nothrow_sigD23F as projectBaseHierarchy, tt as validateBaseHierarchyMove };
