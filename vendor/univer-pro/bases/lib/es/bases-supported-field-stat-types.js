import{BASE_RECORD_ID_FIELD_ID,BaseConditionalColorOperator,BaseConditionalColorTarget,BaseConditionalDateMode,BaseDataModel,BaseFieldType,BaseFilterConjunction,BaseHierarchyInvalidReason,BaseRecordLinkRole,BaseSortDirection,BaseViewType,CellValueType,ColorKit,CommandType,CustomCommandExecutionError,DateSystem,DependentOn,Disposable,ICommandService,IConfigService,IPermissionService,IUndoRedoService,IUniverInstanceService,Inject,Injector,JSON1,JSONX,ObjectMatrix,Optional,PermissionStatus,Plugin,Tools,UniverInstanceType,allocateBaseFormulaTableName,assertBaseTableRecordIdentity,createBaseFormulaTableNameMap,createBaseRecordIdField,createIdentifier,dateKit,excelDateTimeSerial,excelSerialToDateTime,generateRandomId,getBaseFormulaTableName,isBaseRecordIdFieldName,isValidBaseRecordId,merge,nameCharacterCheck,numfmt,regexp,sequenceExecute,toDisposable,touchDependencies}from'@univerjs/core';
import{FormulaCalculationTriggerService,IActiveDirtyManagerService,RemoveSuperTableMutation,SetFormulaCalculationResultMutation,SetSuperTableMutation,SetTriggerFormulaCalculationStartMutation,UniverProFormulaEnginePlugin,refactorFormulaUnitQualifier}from'@univerjs-pro/engine-formula';
import{UnitAction,UnitObject}from'@univerjs/protocol';
import{UniverLicensePlugin}from'@univerjs-pro/license';
import{DataSyncPrimaryController}from'@univerjs/rpc';
import{FormulaCalculationSessionService,FormulaResultApplicationType}from'@univerjs/engine-formula';
import { Jo, Xo, Yo, qo } from "./bases-field-stat-types.js";
import { ys } from "./internal-db-endo.js";
function ts(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465704){return Xo.has(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465704.type)?[...qo,...Jo]:var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465704.type===BaseFieldType.Formula?[...qo,...(gs(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465704)==="date"?Yo:Jo)]:qo;}
function gs(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465762){let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465763=ys(ys(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465762.config).numfmt);return typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465763.type=='string'?var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465763.type:'general';}

export { ts as getSupportedBaseFieldStatTypes };
