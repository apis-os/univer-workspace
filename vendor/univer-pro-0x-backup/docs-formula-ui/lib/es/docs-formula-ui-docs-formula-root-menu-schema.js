import{ConvertDocFormulaToTextCommand,DOC_FORMULA_PLUGIN,DOC_FORMULA_SCHEMA_VERSION,DocFormulaDisplayTextService,DocFormulaModel,DocFormulaService,InsertDocFormulaCommand,RemoveDocFormulaCommand,RemoveDocFormulaMutation,SetDocFormulaMutation,SetDocFormulaNumberFormatCommand,UniverDocsFormulaPlugin,UpdateDocFormulaCommand,findDocFormulaRange,isDocFormulaRange,isDocFormulaResource}from"@univerjs-pro/docs-formula";
import{CommandType,DEFAULT_NUMBER_FORMAT,DependentOn,Disposable,DocumentDataModel,HorizontalAlign,ICommandService,IConfigService,IPermissionService,IUniverInstanceService,Inject,Injector,LocaleService,Plugin,ThemeService,Tools,UniverInstanceType,VerticalAlign,createParagraphId,merge,touchDependencies}from"@univerjs/core";
import{DOC_INTERCEPTOR_POINT,DOC_SELECTION_OPTION_PRESERVE_CARET,DocInterceptorService,DocLayoutExecutorService,DocSelectionManagerService,DocSkeletonManagerService,UniverDocsPlugin,canEditDocumentTargets,getDocumentEntityParentPermissionObjectIds,getDocumentEntityPermissionObjectId}from"@univerjs/docs";
import{DocCanvasPopManagerService,DocFloatMenuService,DocHtmlExportService,DocParagraphMenuService,DocRenderController,IDocClipboardPasteAdapterService,IDocClipboardService,UniverDocsUIPlugin,disableMenuWhenHeaderFooterEditing,drawDocCustomRangeChrome,resolveDocCustomRangeChromeTheme}from"@univerjs/docs-ui";
import{CURSOR_TYPE,ComponentExtension,DocumentSkeleton,DocumentViewModel,Documents,IRenderManagerService,UniverRenderEnginePlugin,pixelToPt,ptToPixel}from"@univerjs/engine-render";
import{BehaviorSubject}from"rxjs";
import{ComponentManager,IMenuManagerService,IShortcutService,IconManager,KeyCode,MenuItemType,MenuManagerPosition,MetaKeys,RibbonInsertGroup,RibbonPosition,getMenuHiddenObservable,useDependency,useObservable}from"@univerjs/ui";
import{UniverLicensePlugin}from"@univerjs-pro/license";
import{FormulaBindingEditorDialog,FormulaBindingNumberFormatDialog,SHAPE_EDITOR_UI_PLUGIN_CONFIG_KEY,UniverShapeEditorUIPlugin}from"@univerjs-pro/shape-editor-ui";
import{DeleteIcon,FxIcon,NumberIcon,TextIcon,WriteIcon}from"@univerjs/icons";
import{Fragment,jsx,jsxs}from"react/jsx-runtime";
import{Button,Tooltip}from"@univerjs/design";
import{useState}from"react";
import { R } from "./docs-formula-ui-open-doc-formula-editor-operation.js";
function yt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46478){return{id:R.id,type:MenuItemType.BUTTON,icon:"FxIcon",title:"docs-formula-ui.menu.formula",tooltip:"docs-formula-ui.menu.formula",hidden$:getMenuHiddenObservable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46478,UniverInstanceType.UNIVER_DOC),disabled$:disableMenuWhenHeaderFooterEditing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46478)};}const G={[MenuManagerPosition.RIBBON]:{[RibbonPosition.INSERT]:{[RibbonInsertGroup.MEDIA]:{[R.id]:{order:7,menuItemFactory:yt}}}}};

export { G as docsFormulaRootMenuSchema };
