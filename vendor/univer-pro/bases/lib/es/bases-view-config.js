import { BASE_RECORD_ID_FIELD_ID, BaseConditionalColorOperator, BaseConditionalColorTarget, BaseConditionalDateMode, BaseDataModel, BaseFieldType, BaseFilterConjunction, BaseHierarchyInvalidReason, BaseRecordLinkRole, BaseSortDirection, BaseViewType, CellValueType, ColorKit, CommandType, CustomCommandExecutionError, DateSystem, DependentOn, Disposable, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, JSON1, JSONX, ObjectMatrix, Optional, PermissionStatus, Plugin, Tools, UniverInstanceType, allocateBaseFormulaTableName, assertBaseTableRecordIdentity, createBaseFormulaTableNameMap, createBaseRecordIdField, createIdentifier, dateKit, excelDateTimeSerial, excelSerialToDateTime, generateRandomId, getBaseFormulaTableName, isBaseRecordIdFieldName, isValidBaseRecordId, merge, nameCharacterCheck, numfmt, regexp, sequenceExecute, toDisposable, touchDependencies } from '@univerjs/core';
import { FormulaCalculationTriggerService, IActiveDirtyManagerService, RemoveSuperTableMutation, SetFormulaCalculationResultMutation, SetSuperTableMutation, SetTriggerFormulaCalculationStartMutation, UniverProFormulaEnginePlugin, refactorFormulaUnitQualifier } from '@univerjs-pro/engine-formula';
import { UnitAction, UnitObject } from '@univerjs/protocol';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { DataSyncPrimaryController } from '@univerjs/rpc';
import { FormulaCalculationSessionService, FormulaResultApplicationType } from '@univerjs/engine-formula';
import { fn_L0_db_pred_routine_pure_ON_zalloc_nothrow_sig3B80 } from "./internal-db-pred.js";
import { U } from "./bases-json1-op-factory.js";
import { R } from "./bases-json1-op-applier.js";
import { Q } from "./bases-json1-mutation.js";
import { Ki } from "./bases-formula-service.js";
const Ao = {
    'id': "base.command.update-base-view-config",
    'type': CommandType.COMMAND,
    'handler': (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465594, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465595) => {
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465595) return false;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465596 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465594.get(IUniverInstanceService),
        {
          unitId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465597,
          tableId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465598,
          viewId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465599,
          patch: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465600
        } = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465595,
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465601 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465596.getUnit(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465597, UniverInstanceType.UNIVER_BASE);
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465601 || !fn_L0_db_pred_routine_pure_ON_zalloc_nothrow_sig3B80(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465601, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465598, {
        'viewIds': [var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465599]
      })) return false;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465602 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465594.get(ICommandService),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465603 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465594.get(IUndoRedoService),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465604 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465601.getSnapshot(),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465605 = new U().updateViewConfig(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465604, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465598, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465599, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465600),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465606 = new R().invertOp(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465604, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465605),
        var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB264 = {
          'unitId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465597,
          'op': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465605
        },
        var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB265 = {
          'unitId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465597,
          'op': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465606
        };
      return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465602.syncExecuteCommand(Q.id, var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB264) ? (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465596.focusUnit(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465597), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465603.pushUndoRedo({
        'unitID': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465597,
        'undoMutations': [{
          'id': Q.id,
          'params': var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB265
        }],
        'redoMutations': [{
          'id': Q.id,
          'params': var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB264
        }]
      }), true) : false;
    }
  },
  jo = {
    'id': 'base.command.validate-formula',
    'type': CommandType.COMMAND,
    'handler'(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465620, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465621) {
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465621) return {
        'valid': false,
        'reason': "[BaseFormula]: validation parameters are required."
      };
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465622 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465620.get(IUniverInstanceService).getUnit(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465621.unitId, UniverInstanceType.UNIVER_BASE),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465623 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465622 == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465622.getSnapshot(),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465624 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465623 == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465623.tables[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465621.tableId];
      return !var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465623 || !var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465624 ? {
        'valid': false,
        'reason': "[BaseFormula]: table does not exist."
      } : new Ki().validateFormula(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465621.formula, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465624, {
        'snapshot': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465623
      });
    }
  };
export { Ao as UpdateBaseViewConfigCommand, jo as ValidateBaseFormulaCommand };
