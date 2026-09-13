import{BASE_RECORD_ID_FIELD_ID,BaseConditionalColorOperator,BaseConditionalColorTarget,BaseConditionalDateMode,BaseDataModel,BaseFieldType,BaseFilterConjunction,BaseHierarchyInvalidReason,BaseRecordLinkRole,BaseSortDirection,BaseViewType,CellValueType,ColorKit,CommandType,CustomCommandExecutionError,DateSystem,DependentOn,Disposable,ICommandService,IConfigService,IPermissionService,IUndoRedoService,IUniverInstanceService,Inject,Injector,JSON1,JSONX,ObjectMatrix,Optional,PermissionStatus,Plugin,Tools,UniverInstanceType,allocateBaseFormulaTableName,assertBaseTableRecordIdentity,createBaseFormulaTableNameMap,createBaseRecordIdField,createIdentifier,dateKit,excelDateTimeSerial,excelSerialToDateTime,generateRandomId,getBaseFormulaTableName,isBaseRecordIdFieldName,isValidBaseRecordId,merge,nameCharacterCheck,numfmt,regexp,sequenceExecute,toDisposable,touchDependencies}from'@univerjs/core';
import{FormulaCalculationTriggerService,IActiveDirtyManagerService,RemoveSuperTableMutation,SetFormulaCalculationResultMutation,SetSuperTableMutation,SetTriggerFormulaCalculationStartMutation,UniverProFormulaEnginePlugin,refactorFormulaUnitQualifier}from'@univerjs-pro/engine-formula';
import{UnitAction,UnitObject}from'@univerjs/protocol';
import{UniverLicensePlugin}from'@univerjs-pro/license';
import{DataSyncPrimaryController}from'@univerjs/rpc';
import{FormulaCalculationSessionService,FormulaResultApplicationType}from'@univerjs/engine-formula';
const Ko=["count","filled","empty",'unique',"sum","average","min","max"],qo=['count','filled',"empty","unique"],Jo=['sum','average',"min","max"],Yo=["min","max"],Xo=new Set([BaseFieldType.Number,BaseFieldType.Currency,BaseFieldType.Progress,BaseFieldType.Rating]),Zo=new Set([BaseFieldType.MultiSelect,BaseFieldType.Person,BaseFieldType.Group]),Qo='General';

export { Ko as BASE_FIELD_STAT_TYPES };

export { Xo, qo, Jo, Yo, Zo, Qo };
