import{BuildTextUtils,CellValueType,DependentOn,Disposable,IConfigService,Inject,Injector,Plugin,RTree,generateRandomId,merge,registerDependencies}from"@univerjs/core";
import"@univerjs/sheets-filter";
import{TableManager}from"@univerjs/sheets-table";
import{UniverLicensePlugin}from"@univerjs-pro/license";
import { X } from "./range-preprocess-range-preprocess.js";
const Q={};let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46524=class extends Plugin{constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46222=Q,var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223,var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46224){super(),this._config=var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46222,this._injector=var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223,this._configService=var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46224;let{...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46225}=merge({},Q,this._config);this._configService["setConfig"]("range-preprocess.config",var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46225);}onStarting(){let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24=[[X]];registerDependencies(this._injector,var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24);}onReady(){}};

export { var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46524 as UniverRangePreprocessPlugin };
