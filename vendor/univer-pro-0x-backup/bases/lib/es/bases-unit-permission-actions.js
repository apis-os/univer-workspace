import{BASE_RECORD_ID_FIELD_ID,BaseConditionalColorOperator,BaseConditionalColorTarget,BaseConditionalDateMode,BaseDataModel,BaseFieldType,BaseFilterConjunction,BaseHierarchyInvalidReason,BaseRecordLinkRole,BaseSortDirection,BaseViewType,CellValueType,ColorKit,CommandType,CustomCommandExecutionError,DateSystem,DependentOn,Disposable,ICommandService,IConfigService,IPermissionService,IUndoRedoService,IUniverInstanceService,Inject,Injector,JSON1,JSONX,ObjectMatrix,Optional,PermissionStatus,Plugin,Tools,UniverInstanceType,allocateBaseFormulaTableName,assertBaseTableRecordIdentity,createBaseFormulaTableNameMap,createBaseRecordIdField,createIdentifier,dateKit,excelDateTimeSerial,excelSerialToDateTime,generateRandomId,getBaseFormulaTableName,isBaseRecordIdFieldName,isValidBaseRecordId,merge,nameCharacterCheck,numfmt,regexp,sequenceExecute,toDisposable,touchDependencies}from'@univerjs/core';
import{FormulaCalculationTriggerService,IActiveDirtyManagerService,RemoveSuperTableMutation,SetFormulaCalculationResultMutation,SetSuperTableMutation,SetTriggerFormulaCalculationStartMutation,UniverProFormulaEnginePlugin,refactorFormulaUnitQualifier}from'@univerjs-pro/engine-formula';
import{UnitAction,UnitObject}from'@univerjs/protocol';
import{UniverLicensePlugin}from'@univerjs-pro/license';
import{DataSyncPrimaryController}from'@univerjs/rpc';
import{FormulaCalculationSessionService,FormulaResultApplicationType}from'@univerjs/engine-formula';
const Sr=[UnitAction.Edit,UnitAction.Copy,UnitAction.Export,UnitAction.Comment],Cr=new Set([UnitObject.Base,UnitObject.BaseTable,UnitObject.BaseField,UnitObject.BaseRecord,UnitObject.BaseView,UnitObject.BaseDashboard]),wr="table/",Tr='field/',Er="record/",Dr="view/",Or="dashboard/";

export { Sr as BASE_UNIT_PERMISSION_ACTIONS };

export { wr, Tr, Er, Dr, Or, Cr };
