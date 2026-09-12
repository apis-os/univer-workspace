import{BooleanNumber,CommandType,DOC_RANGE_TYPE,DashStyleType,DataStreamTreeTokenType,DependentOn,Disposable,DocumentFlavor,ICommandService,IConfigService,IResourceManagerService,IUniverInstanceService,Inject,Injector,JSONX,ObjectRelativeFromH,ObjectRelativeFromV,Plugin,TableAlignmentType,TableRowHeightRule,TableSizeType,TableTextWrapType,TextX,Tools,UniverInstanceType,containsInteriorInsertionOffset,createParagraphId,createSectionId,generateRandomId,getBlockRangeInterval,getBodySliceForTextXAction,getCustomBlockIdsInSelections,getParagraphContentStartOffset,getTableCellTokenInterval,getTableRangeInterval,getTableRowTokenInterval,merge}from"@univerjs/core";
import{DocHistoryAction,DocSelectionManagerService,RichTextEditingMutation,UniverDocsPlugin,getContentInsertRange}from"@univerjs/docs";
import{Subject}from"rxjs";
import{UniverLicensePlugin}from"@univerjs-pro/license";
const at={Above:"above",Below:"below"},ot={Left:"left",Right:"right"};

export { at as DocsTableRowInsertPosition, ot as DocsTableColumnInsertPosition };
