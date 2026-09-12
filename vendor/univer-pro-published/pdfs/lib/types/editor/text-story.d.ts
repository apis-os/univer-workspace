import type { IPdfTextBlock, IPdfTextRun, IPdfTextStory, IPdfTextStoryRun } from '../types';
import type { IPdfEditorTextBlockPatch, IPdfEditorTextRange, IPdfEditorTextStoryPatch, IPdfEditorTextStoryRunEdit } from './types';
/** Clone one durable text story without retaining mutable nested references. */
export declare function clonePdfEditorTextStory(story: IPdfTextStory): IPdfTextStory;
/** Apply one sparse editor patch to a source or overlay text story. */
export declare function applyPdfEditorTextStoryPatch(story: IPdfTextStory, patch: IPdfEditorTextStoryPatch | undefined): IPdfTextStory | undefined;
/** Apply one nullable block patch while preserving unspecified source fields. */
export declare function applyPdfEditorTextBlockPatch(block: IPdfTextBlock, patch: IPdfEditorTextBlockPatch): IPdfTextBlock;
/** Apply a UTF-16 range or whole-run text edit to one identified story run. */
export declare function applyPdfEditorTextStoryRunEdit(run: IPdfTextStoryRun, edit: IPdfEditorTextStoryRunEdit): IPdfTextStoryRun;
/** Derive the smallest UTF-16 replacement that changes one flat string into another. */
export declare function derivePdfEditorTextEdit(previousText: string, nextText: string): {
    range: IPdfEditorTextRange;
    text: string;
};
/** Apply one UTF-16 text replacement while preserving unaffected text-run styles. */
export declare function applyPdfEditorTextRunsEdit(runs: IPdfTextRun[] | undefined, edit: {
    range: IPdfEditorTextRange;
    text: string;
}): IPdfTextRun[];
