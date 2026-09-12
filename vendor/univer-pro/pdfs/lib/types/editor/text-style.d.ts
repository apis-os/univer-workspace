import type { IPdfTextRun } from '../types';
/** Apply a semantic style patch and discard font-specific native layout data when replacing the family. */
export declare function applyPdfEditorTextStyleToRun(run: IPdfTextRun, textStyle: Partial<Omit<IPdfTextRun, 'text'>>): IPdfTextRun;
