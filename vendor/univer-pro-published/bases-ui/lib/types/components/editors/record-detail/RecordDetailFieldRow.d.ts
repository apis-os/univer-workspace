import type { IBaseAttachment } from '@univerjs/core';
import type { IBasePeopleOption } from '../../panels/field-config/field-config-model';
import type { IRecordDetailFieldItem } from './RecordDetailPanel';
export declare function RecordDetailFieldRow({ field, activeEditorId, onOpenEditor, onCloseEditor, onChange, onRegisterActiveCommit, uploadAttachment, personOptions, groupOptions, onEditField, }: {
    field: IRecordDetailFieldItem;
    activeEditorId: string | null;
    onOpenEditor: (fieldId: string) => void;
    onCloseEditor: (fieldId: string) => void;
    onChange?: (fieldId: string, value: unknown) => void;
    onRegisterActiveCommit?: (fieldId: string, commit: (() => void) | null) => void;
    uploadAttachment?: (file: File) => Promise<IBaseAttachment>;
    personOptions?: IBasePeopleOption[];
    groupOptions?: IBasePeopleOption[];
    onEditField?: (fieldId: string, anchor: HTMLElement) => void;
}): import("react").JSX.Element;
