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
import { N } from "./bases-hierarchy-error.js";
import { Ge, We } from "./bases-hierarchy-field-id.js";
import { P } from "./bases-hierarchy-field.js";
import { Qe } from "./bases-hierarchy-index.js";
import { tt } from "./bases-hierarchy.js";
import { M } from "./bases-record-link-field-config.js";
import { X } from "./bases-ibase-command.js";
import { Ke } from "./bases-hierarchy-parent-field.js";
import { Fe } from "./bases-record-link-ids.js";
import { H, L } from "./internal-db-endo.js";
const Za = {
    'id': "base.command.move-base-field",
    'type': CommandType.COMMAND,
    'handler': (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464874, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464875) => {
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464875) return false;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464876 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464874.get(IUniverInstanceService),
        {
          unitId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464877,
          tableId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464878,
          fieldId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464879,
          target: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464880
        } = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464875,
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464881 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464876.getUnit(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464877, UniverInstanceType.UNIVER_BASE),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464882 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464880.beforeFieldId ?? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464880.afterFieldId;
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464881 || !!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464880.beforeFieldId == !!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464880.afterFieldId || !var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464882 || var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464882 === var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464879 || var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464879 === BASE_RECORD_ID_FIELD_ID || var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464880.beforeFieldId === BASE_RECORD_ID_FIELD_ID || !fn_L0_db_pred_routine_pure_ON_zalloc_nothrow_sig3B80(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464881, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464878, {
        'fieldIds': [var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464879, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464882]
      })) return false;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464883 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464874.get(ICommandService),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464884 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464874.get(IUndoRedoService),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464885 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464881.getSnapshot(),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464886 = new U().moveField(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464885, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464878, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464879, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464880),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464887 = new R().invertOp(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464885, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464886),
        var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB170 = {
          'unitId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464877,
          'op': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464886
        },
        var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB171 = {
          'unitId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464877,
          'op': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464887
        };
      return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464883.syncExecuteCommand(Q.id, var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB170) ? (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464876.focusUnit(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464877), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464884.pushUndoRedo({
        'unitID': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464877,
        'undoMutations': [{
          'id': Q.id,
          'params': var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB171
        }],
        'redoMutations': [{
          'id': Q.id,
          'params': var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB170
        }]
      }), true) : false;
    }
  },
  Qa = {
    'id': "base.command.move-base-hierarchy-record",
    'type': CommandType.COMMAND,
    'handler': (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464902, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464903) => {
      var var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464904;
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464903) return false;
      let {
          unitId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464905,
          tableId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464906,
          recordId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464907,
          parentRecordId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464908,
          orderKey: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464909
        } = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464903,
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464910 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464902.get(IUniverInstanceService),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464911 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464910.getUnit(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464905, UniverInstanceType.UNIVER_BASE);
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464911 || !fn_L0_db_pred_routine_pure_ON_zalloc_nothrow_sig3B80(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464911, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464906, {
        'recordIds': [var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464907, ...(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464908 ? [var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464908] : [])]
      })) throw new N('missingRecord');
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464912 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464911.getSnapshot(),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464913 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464912.tables[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464906],
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464914 = We(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464913),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464915 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464914 ?? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464903.fieldId ?? Ge(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464913);
      if (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464914 && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464903.fieldId && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464903.fieldId !== var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464914 || var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464913.fields[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464915] && !P(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464913, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464915)) throw new N("invalidField");
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464916 = Qe(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464913, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464915),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464917 = tt(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464916, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464907, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464908);
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464917.valid) throw new N(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464917.reason === BaseHierarchyInvalidReason.SelfParent ? "selfParent" : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464917.reason === BaseHierarchyInvalidReason.Cycle ? "cycle" : 'maxDepth');
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464918 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464916.parentByRecordId["get"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464907) ?? null,
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464919 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464913.records[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464907].orderKey;
      if (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464918 === var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464908 && (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464909 === undefined || var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464909 === var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464919)) return true;
      let var_L0_db_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A21 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464918 !== var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464908,
        var_L0_db_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A22 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464909 !== undefined && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464909 !== var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464919,
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464920 = new U(),
        var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A216 = [],
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464921 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464913.fields[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464915],
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464922 = var_L0_db_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A21 && (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464921 || ((var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464904 = M(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464921)) == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464904.relationRole) !== BaseRecordLinkRole.Parent) ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464921 ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464920.updateField(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464912, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464906, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464915, {
          'config': {
            ...var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464921.config,
            'relationRole': BaseRecordLinkRole.Parent
          }
        }) : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464902.get(X).createCreateFieldOp(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464911, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464906, Ke(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464913, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464915, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464903.parentFieldName), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464913.fieldOrder['length']) : null;
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464922 && var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A216.push(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464922), var_L0_db_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A21 && var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A216.push(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464920.updateCell(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464912, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464906, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464907, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464915, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464908 ? Fe([var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464908]) : '')), var_L0_db_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A22 && var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A216.push(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464920.updateRecordOrder(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464912, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464906, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464907, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464909));
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464923 = L(var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A216),
        var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB174 = {
          'tableId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464906,
          'fieldId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464915,
          'recordId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464907,
          'oldParentRecordId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464918,
          'parentRecordId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464908
        },
        var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB175 = {
          'unitId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464905,
          'op': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464923,
          'trigger': Qa.id,
          'hierarchyChanges': [var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB174],
          'source': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464903.source ?? 'ui'
        },
        var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB176 = {
          ...var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB175,
          'source': 'redo'
        };
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464902.get(ICommandService).syncExecuteCommand(Q.id, var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB175)) return false;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464924 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464911.getSnapshot(),
        var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A217 = [];
      var_L0_db_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A21 && var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A217.push(fn_L0_db_endo_routine_pure_O1_zalloc_nothrow_sigD23F6(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464924, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464912, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464906, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464907, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464915)), var_L0_db_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A22 && var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A217.push(eo(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464924, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464912, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464906, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464907)), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464922 && var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A217.push(new R().invertOp(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464912, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464922));
      let var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB177 = {
        'unitId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464905,
        'op': L(var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A217),
        'trigger': Qa.id,
        'hierarchyChanges': [{
          ...var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB174,
          'oldParentRecordId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464908,
          'parentRecordId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464918
        }],
        'source': "undo"
      };
      return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464910.focusUnit(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464905), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464902.get(IUndoRedoService).pushUndoRedo({
        'unitID': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464905,
        'undoMutations': [{
          'id': Q.id,
          'params': var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB177
        }],
        'redoMutations': [{
          'id': Q.id,
          'params': var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB176
        }]
      }), true;
    }
  };
function fn_L0_db_endo_routine_pure_O1_zalloc_nothrow_sigD23F6(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464948, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464949, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464950, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464951, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464952) {
  var var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464953, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464954, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464955, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464956, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464957, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464958, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464959, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464960;
  let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464961 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464948.tables[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464950],
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464962 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464949.tables[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464950],
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464963 = (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464953 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464961.rowIndex) == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464953[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464951],
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464964 = (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464954 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464961.colIndex) == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464954[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464952],
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464965 = (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464955 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464962.rowIndex) == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464955[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464951],
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464966 = (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464956 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464962.colIndex) == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464956[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464952],
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464967 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464963 == null || var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464964 == null || (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464957 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464961.cellData) == null || (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464957 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464957[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464963]) == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464957[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464964],
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464968 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464965 == null || var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464966 == null || (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464958 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464962.cellData) == null || (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464958 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464958[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464965]) == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464958[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464966],
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464969 = (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464959 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464961.records[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464951]) == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464959.values[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464952],
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464970 = (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464960 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464962.records[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464951]) == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464960.values[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464952],
    var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A220 = [],
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464971 = to(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464963 == null || var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464964 == null ? null : H.cellData(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464950, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464963, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464964), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464967, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464968);
  var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464971 && var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A220.push(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464971);
  let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464972 = to(H.cell(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464950, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464951, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464952), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464969, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464970);
  return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464972 && var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A220.push(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464972), L(var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A220);
}
function eo(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464998, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464999, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465000, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465001) {
  var var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465002, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465003;
  let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465004 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464998.tables[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465000],
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465005 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464999.tables[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465000];
  return L([to([...H.record(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465000, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465001), 'orderKey'], (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465002 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465004.records[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465001]) == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465002.orderKey, (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465003 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465005.records[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465001]) == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465003.orderKey), to([...H.table(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465000), "recordOrder"], var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465004.recordOrder, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465005.recordOrder)].filter(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462731 => !!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462731));
}
function to(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465014, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465015, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465016) {
  if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465014 || var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465015 === undefined && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465016 === undefined) return null;
  let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465017 = JSONX.getInstance();
  return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465016 === undefined ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465017.removeOp(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465014, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465015) : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465015 === undefined ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465017.insertOp(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465014, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465016) : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465017.replaceOp(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465014, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465015, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465016);
}
export { Za as MoveBaseFieldCommand, Qa as MoveBaseHierarchyRecordCommand };
