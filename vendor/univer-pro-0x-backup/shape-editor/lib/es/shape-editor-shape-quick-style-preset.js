import{IShapeHostAdapterRegistry,ShapeArrowSizeEnum,ShapeArrowTypeEnum,ShapeFillEnum,ShapeLineDashEnum,ShapeLineTypeEnum,ShapeModel,ShapeTextAutoFitType,ShapeTextDirection,ShapeTextWrapType,ShapeTypeEnum,UniverShapePlugin,isConnectorShape,isShapeHostType}from"@univerjs-pro/engine-shape";
import{DependentOn,Disposable,HorizontalAlign,IConfigService,IUniverInstanceService,Inject,Injector,Plugin,UniverInstanceType,VerticalAlign,createParagraphId,merge,touchDependencies}from"@univerjs/core";
import{FormulaCacheEligibilityService,FormulaLastValuePersistenceService,HostExternalReferenceModel,UniverProFormulaEnginePlugin,getScalarFormulaResultCell,resolveFormulaResultPresentation,toFormulaLastValue}from"@univerjs-pro/engine-formula";
import{UniverLicensePlugin}from"@univerjs-pro/license";
import{OtherFormulaBizType,RegisterOtherFormulaService}from"@univerjs/engine-formula";
import{Subject}from"rxjs";
import { R } from "./shape-editor-shape-quick-style-presets.js";
function ge(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206){return R.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629=>var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629.id===var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206)??null;}

export { ge as getShapeQuickStylePreset };
