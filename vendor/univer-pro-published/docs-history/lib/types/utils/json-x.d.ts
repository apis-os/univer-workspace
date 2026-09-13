import type { JSONXActions, JSONXPath, TextXAction } from '@univerjs/core';
export interface ITextXEdit {
    actions: TextXAction[];
    path: JSONXPath;
}
export interface IJSONXStructuralEdit {
    path: JSONXPath;
    previousValue?: unknown;
    nextValue?: unknown;
}
export declare function extractTextXEdits(actions: JSONXActions): ITextXEdit[];
export declare function extractJSONXStructuralEdits(actions: JSONXActions): IJSONXStructuralEdit[];
