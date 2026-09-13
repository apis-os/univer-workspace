import{SnapshotService,UniverCollaborationPlugin}from"@univerjs-pro/collaboration";
import{CollaborationController,UniverCollaborationClientPlugin}from"@univerjs-pro/collaboration-client";
import{EmbedResourceRefProviderRegistryService,RESOURCE_REF_FILE_KIND,UniverEmbedPlugin}from"@univerjs-pro/embed";
import{UniverLicensePlugin}from"@univerjs-pro/license";
import{DependentOn,IConfigService,Inject,Injector,Plugin,UniverInstanceType,merge}from"@univerjs/core";
import { g, h } from "./collaboration-embed-plugin-config-key.js";
import { S } from "./collaboration-embed-resource-ref-provider.js";
let A=class extends Plugin{constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614=g,var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615,var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616){super(),this._config=var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614,this._injector=var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615,this._configService=var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616;let{...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617}=merge({},g,this._config);this._configService["setConfig"](h,var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617);}onStarting(){this.disposeWithMe(this._injector["get"](EmbedResourceRefProviderRegistryService).registerUnitProvider(S(this._injector["get"](SnapshotService),this._injector["get"](CollaborationController))));}};

export { A as UniverCollaborationEmbedPlugin };
