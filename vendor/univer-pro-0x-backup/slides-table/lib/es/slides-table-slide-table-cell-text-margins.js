import{CommandType,DependentOn,Disposable,ICommandService,IConfigService,IResourceManagerService,IUndoRedoService,IUniverInstanceService,Inject,Injector,Plugin,ThemeService,Tools,UniverInstanceType,generateRandomId,merge,sequenceExecute,touchDependencies}from'@univerjs/core';
import{AddSlideElementMutation,ISlideDrawingService,PageElementTypeEnum,PageTypeEnum,RemoveSlideElementMutation,UpdateSlideElementMutation,getSlideCommandTarget,plainTextToSlideDocumentData}from'@univerjs-pro/slides';
import{Subject}from'rxjs';
import{UniverLicensePlugin}from'@univerjs-pro/license';
import { Un } from "./internal-glue.js";
const Bn={'left':6,'right':6,'top':4,'bottom':4};function Vn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461735){return{'left':Un(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461735==null?undefined:var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461735.left,Bn.left),'right':Un(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461735==null?undefined:var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461735.right,Bn.right),'top':Un(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461735==null?undefined:var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461735.top,Bn.top),'bottom':Un(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461735==null?undefined:var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461735.bottom,Bn.bottom)};}

export { Vn as resolveSlideTableCellTextMargins };
