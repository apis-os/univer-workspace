import{DocsListDemoteCommand,DocsListInsertCommand,DocsListPromoteCommand,DocsListSelectCommand,DocsListSelectionMode,DocsListSetGlyphSymbolCommand,DocsListSetGlyphTypeCommand,DocsListSetPrefixSuffixCommand,DocsListSetStartNumberCommand}from"@univerjs-pro/docs-list";
import{DataStreamTreeTokenType,ICommandService,ListGlyphType,PRESET_LIST_TYPE,PresetListType,generateRandomId,getParagraphContentStartOffset,getParagraphContentStartOffsets}from"@univerjs/core";
import{FEnum}from"@univerjs/core/facade";
import{FDocument,isParagraphFacade}from"@univerjs/docs/facade";
import { N } from "./facade-docs-list-fdocument-list-item.js";
var b=class extends FEnum{get DocsListSelectionMode(){return DocsListSelectionMode;}get ListGlyphType(){return ListGlyphType;}};FEnum.extend(b);;;;;;;;;;FDocument.extend(N);
