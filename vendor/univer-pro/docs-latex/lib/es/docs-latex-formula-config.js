import{CommandType,CustomRangeType,DataStreamTreeTokenType,DependentOn,Disposable,ICommandService,IConfigService,IResourceManagerService,IUndoRedoService,IUniverInstanceService,Inject,Injector,JSONX,Plugin,TextX,UniverInstanceType,generateRandomId,getBodySliceForTextXAction,getCustomRangeInterval,getRichTextEditPath,merge,shiftExclusiveRangeOnDelete,shiftExclusiveRangeOnInsert,shiftInclusiveRangeOnDelete,shiftInclusiveRangeOnInsert}from"@univerjs/core";
import{DOC_SELECTION_OPTION_PRESERVE_CARET,DocSelectionManagerService,RichTextEditingMutation,UniverDocsPlugin}from"@univerjs/docs";
import{Subject}from"rxjs";
import{UniverLicensePlugin}from"@univerjs-pro/license";
import { b } from "./docs-latex-default-latex-formula-properties.js";
function x(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124){return{...b,latex:"",...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124};}

export { x as normalizeDocsLatexFormulaConfig };
