import{ApplyBaseJson1Mutation,BaseJson1OpApplier,BaseJson1OpFactory,IBaseProjectionService,IBaseViewRegistryService,UniverBasesPlugin,UniverRemoteBasesPlugin,canEditBaseTargets,getBaseDashboardPermissionObjectId,getBaseTablePermissionObjectId,getBaseViewPermissionObjectId,matchesBaseCondition,normalizeBaseDateSerial,resolveBaseDateFieldConfig}from"@univerjs-pro/bases";
import{BaseFieldType,BaseFilterConjunction,BaseFilterOperator,BaseViewType,CommandType,CustomCommandExecutionError,DependentOn,Disposable,ICommandService,IConfigService,IPermissionService,IResourceManagerService,IUndoRedoService,IUniverInstanceService,ImageSourceType,Inject,Injector,Optional,Plugin,Tools,UniverInstanceType,generateRandomId,merge,sequenceExecute,touchDependencies}from"@univerjs/core";
import{BehaviorSubject,filter,map}from"rxjs";
import{ChartModel,ChartTypeBits,StaticChartSource,UniverChartPlugin,generateChartContext,reconcileChartContext}from"@univerjs-pro/engine-chart";
import{DataFieldManager,PivotTable,PivotTableFiledAreaEnum,PivotView,isErrorValue,isPrefixValue}from"@univerjs-pro/engine-pivot";
import{IShapeHostAdapterRegistry,UniverShapePlugin,canApplyShapeFormulaLastValue}from"@univerjs-pro/engine-shape";
import{UniverLicensePlugin}from"@univerjs-pro/license";
import{UniverShapeEditorPlugin,createFormulaShapeData}from"@univerjs-pro/shape-editor";
import{DataSyncPrimaryController}from"@univerjs/rpc";
import { rt } from "./bases-dashboard-default-pivot-snapshot.js";
function it(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46660){return{pivot:rt(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46660),chart:{type:ChartTypeBits.Column,orient:"column"},displayMode:"chart-and-table"};}

export { it as createDefaultBasePivotViewConfig };
