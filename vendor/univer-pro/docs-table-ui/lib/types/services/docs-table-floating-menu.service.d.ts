import type { VerticalAlignmentType } from '@univerjs/core';
import { DocsTableSelectionKind } from '@univerjs-pro/docs-table';
import { Disposable } from '@univerjs/core';
import { BehaviorSubject } from 'rxjs';
export interface IDocsTableFloatingMenuRect {
    bottom: number;
    left: number;
    right: number;
    top: number;
}
export interface IDocsTableFloatingMenuState {
    unitId: string;
    visible: boolean;
    tableId: string;
    selectionKind: DocsTableSelectionKind;
    selection: {
        endColumn: number;
        endRow: number;
        startColumn: number;
        startRow: number;
        tableId: string;
    } | null;
    anchorRect: IDocsTableFloatingMenuRect | null;
    selectionRect: IDocsTableFloatingMenuRect | null;
    mergeAction: 'merge' | 'unmerge' | null;
    showDeleteAction: boolean;
    hoverActive: boolean;
    deleteTarget: 'row' | 'column' | null;
    deleteHoverActive: boolean;
    topLeftCell: {
        column: number;
        row: number;
    } | null;
    verticalAlign: VerticalAlignmentType | null;
    typeIcon?: string;
    typeValue?: string | number;
}
export type IDocsTableFloatingMenuShowOptions = Partial<IDocsTableFloatingMenuState>;
export declare class DocsTableFloatingMenuService extends Disposable {
    private _state;
    readonly state$: BehaviorSubject<IDocsTableFloatingMenuState>;
    getState(): IDocsTableFloatingMenuState;
    setState(patch: Partial<IDocsTableFloatingMenuState>): void;
    show(options?: IDocsTableFloatingMenuShowOptions): void;
    hide(): void;
    reset(): void;
    setDeleteHoverActive(deleteHoverActive: boolean): void;
    setDeleteHover(deleteHoverActive: boolean): void;
    setHoverActive(hoverActive: boolean): void;
    dispose(): void;
    private _updateState;
}
