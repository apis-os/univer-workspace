import type { IBaseAttachment } from '@univerjs/core';
import type { IBasePeopleOption } from '../../panels/field-config/field-config-model';
import type { IRecordDetailFieldItem } from './RecordDetailPanel';
export declare function bindDetailProgressDragListeners(move: (event: globalThis.MouseEvent) => void, up: (event: globalThis.MouseEvent) => void): () => void;
export declare function handleDetailPopupTrigger(active: boolean, onOpen: () => void, onClose: () => void): void;
export declare function EditableDetailValue({ field, active, onOpen, onClose, onChange, onActiveCommitChange, uploadAttachment, personOptions, groupOptions, }: {
    field: IRecordDetailFieldItem;
    active: boolean;
    onOpen: () => void;
    onClose: () => void;
    onChange: (value: unknown) => void;
    onActiveCommitChange?: (commit: (() => void) | null) => void;
    uploadAttachment?: (file: File) => Promise<IBaseAttachment>;
    personOptions?: IBasePeopleOption[];
    groupOptions?: IBasePeopleOption[];
}): import("react").JSX.Element;
