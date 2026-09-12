import{CommandType,CustomRangeType,DataStreamTreeTokenType,DependentOn,Disposable,ICommandService,IConfigService,IResourceManagerService,IUndoRedoService,IUniverInstanceService,Inject,Injector,JSONX,Plugin,TextX,UniverInstanceType,generateRandomId,getBodySliceForTextXAction,getCustomRangeInterval,getRichTextEditPath,merge,shiftExclusiveRangeOnDelete,shiftExclusiveRangeOnInsert,shiftInclusiveRangeOnDelete,shiftInclusiveRangeOnInsert}from"@univerjs/core";
import{DOC_SELECTION_OPTION_PRESERVE_CARET,DocSelectionManagerService,RichTextEditingMutation,UniverDocsPlugin}from"@univerjs/docs";
import{Subject}from"rxjs";
import{UniverLicensePlugin}from"@univerjs-pro/license";
const b={displayMode:"inline",kind:"inline"};

export { b as DEFAULT_LATEX_FORMULA_PROPERTIES };
