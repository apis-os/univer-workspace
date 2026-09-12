import{IShapeHostAdapterRegistry,ShapeArrowSizeEnum,ShapeArrowTypeEnum,ShapeFillEnum,ShapeLineDashEnum,ShapeLineTypeEnum,ShapeModel,ShapeTextAutoFitType,ShapeTextDirection,ShapeTextWrapType,ShapeTypeEnum,UniverShapePlugin,isConnectorShape,isShapeHostType}from"@univerjs-pro/engine-shape";
import{DependentOn,Disposable,HorizontalAlign,IConfigService,IUniverInstanceService,Inject,Injector,Plugin,UniverInstanceType,VerticalAlign,createParagraphId,merge,touchDependencies}from"@univerjs/core";
import{FormulaCacheEligibilityService,FormulaLastValuePersistenceService,HostExternalReferenceModel,UniverProFormulaEnginePlugin,getScalarFormulaResultCell,resolveFormulaResultPresentation,toFormulaLastValue}from"@univerjs-pro/engine-formula";
import{UniverLicensePlugin}from"@univerjs-pro/license";
import{OtherFormulaBizType,RegisterOtherFormulaService}from"@univerjs/engine-formula";
import{Subject}from"rxjs";
const S="shape-editor.config",C={},w={left:8,right:8,top:4,bottom:4};

export { S as SHAPE_EDITOR_PLUGIN_CONFIG_KEY, w as FORMULA_SHAPE_DEFAULT_TEXT_RECT_PADDING };

export { C };
