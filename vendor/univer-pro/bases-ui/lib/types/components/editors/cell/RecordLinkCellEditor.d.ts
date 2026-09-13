import type { IBaseSnapshot, IFieldSnapshot } from '@univerjs/core';
import type { IBaseCellEditorFocusHandle, IBaseCellEditorOption } from './editor-types';
export interface IRecordLinkEditorOption extends IBaseCellEditorOption {
    details: Array<{
        fieldId: string;
        name: string;
        value: string;
    }>;
}
export interface IRecordLinkEditorOptionSource {
    recordIds: readonly string[];
    getLabel(recordId: string): string | null;
    getSearchText(recordId: string): string | null;
    getOption(recordId: string): IRecordLinkEditorOption | null;
}
export declare function BaseRecordLinkCellEditor({ snapshot, field, value: propValue, valueRef, focusRef, initialQuery, onCommit, onLiveCommit, onTabCommit, }: {
    snapshot: IBaseSnapshot;
    field: IFieldSnapshot;
    value: string;
    valueRef: {
        current: unknown;
    };
    focusRef?: IBaseCellEditorFocusHandle;
    initialQuery?: string | null;
    onCommit: () => void;
    onLiveCommit: (value: string) => void;
    onTabCommit?: (shiftKey: boolean) => void;
}): import("react").JSX.Element;
export declare function resolveRecordLinkEditorOptions(snapshot: IBaseSnapshot, field: IFieldSnapshot): IBaseCellEditorOption[];
export declare function createRecordLinkEditorOptionSource(snapshot: IBaseSnapshot, field: IFieldSnapshot): IRecordLinkEditorOptionSource;
export declare function filterRecordLinkEditorRecordIds(source: IRecordLinkEditorOptionSource, query: string): readonly string[];
