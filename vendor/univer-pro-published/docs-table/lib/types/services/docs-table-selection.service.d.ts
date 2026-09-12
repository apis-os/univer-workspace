import type { Nullable } from '@univerjs/core';
import type { IDocsTableSelection } from '../common/type';
import { Disposable, IUniverInstanceService } from '@univerjs/core';
import { DocSelectionManagerService } from '@univerjs/docs';
export type IDocsTableStructuralSelectionInput = Pick<IDocsTableSelection, 'kind' | 'tableId' | 'startRow' | 'endRow' | 'startColumn' | 'endColumn'> & Partial<Pick<IDocsTableSelection, 'segmentId' | 'startOffset' | 'endOffset'>>;
export interface IDocsTableStructuralSelectionOptions {
    clearNativeSelection?: boolean;
    preserveOnTextSelection?: boolean;
    segmentId?: string;
}
export interface IDocsTableClearSelectionOptions {
    clearNativeSelection?: boolean;
}
type DocsTableStructuralAxis = 'row' | 'column';
export declare class DocsTableSelectionService extends Disposable {
    private readonly _univerInstanceService;
    private readonly _docSelectionManagerService;
    private readonly _selectionChange$;
    private _structuralSelection;
    private _structuralSelectionTableShape;
    private _nativeSelectionSuppressed;
    private _preserveStructuralSelectionOnNextTextSelection;
    readonly selectionChange$: import("rxjs").Observable<Nullable<IDocsTableSelection>>;
    constructor(_univerInstanceService: IUniverInstanceService, _docSelectionManagerService: DocSelectionManagerService);
    getCurrentSelection(): Nullable<IDocsTableSelection>;
    getStructuralSelection(): Nullable<IDocsTableSelection>;
    getStableTableSelection(): Nullable<IDocsTableSelection>;
    emitCurrentSelection(): void;
    setStructuralSelection(selection: IDocsTableStructuralSelectionInput, options?: IDocsTableStructuralSelectionOptions): void;
    setStructuralHeaderSelection(tableId: string, axis: DocsTableStructuralAxis, anchorIndex: number, currentIndex: number, options?: IDocsTableStructuralSelectionOptions): void;
    clearStructuralSelection(options?: IDocsTableClearSelectionOptions): void;
    setNativeSelectionSuppressed(suppressed: boolean): void;
    dispose(): void;
    private _getCurrentDoc;
    private _restoreNativeSelectionForTextFocus;
    private _setDirectStructuralSelection;
    private _getSelectionFromActiveTextRange;
    private _getSelectionFromRectRanges;
    private _canCombineRectRanges;
    private _getValidStructuralSelection;
    private _clearStructuralSelectionState;
}
export {};
