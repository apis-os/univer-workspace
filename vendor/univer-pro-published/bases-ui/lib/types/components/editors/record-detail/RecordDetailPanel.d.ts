import type { BaseFieldType, IBaseAttachment, IBaseSnapshot, IFieldSnapshot } from '@univerjs/core';
import type { ReactNode } from 'react';
import type { IBaseResolvedRecordLink } from '../../../services/base-record-link-resolver.service';
import type { IBasePeopleOption } from '../../panels/field-config/field-config-model';
export interface IRecordDetailFieldItem {
    id: string;
    name: string;
    type: BaseFieldType;
    value?: ReactNode;
    rawValue?: unknown;
    config?: Record<string, unknown>;
    readonly?: boolean;
    system?: boolean;
    recordLinks?: readonly IBaseResolvedRecordLink[];
    recordLinkCount?: number;
    resolveRecordLinks?: (limit: number) => readonly IBaseResolvedRecordLink[];
    recordLinkSnapshot?: IBaseSnapshot;
    recordLinkField?: IFieldSnapshot;
    onOpenLinkedRecord?: (recordId: string) => void;
}
export interface IRecordDetailPanelProps {
    open: boolean;
    title: string;
    recordId?: string | null;
    fields: IRecordDetailFieldItem[];
    currentIndex?: number;
    totalRecords?: number;
    onClose: () => void;
    onBack?: () => void;
    onPreviousRecord?: () => void;
    onNextRecord?: () => void;
    onFieldChange?: (fieldId: string, value: unknown) => void;
    uploadAttachment?: (file: File) => Promise<IBaseAttachment>;
    personOptions?: IBasePeopleOption[];
    groupOptions?: IBasePeopleOption[];
    onAddField?: (anchor: HTMLElement) => void;
    onEditField?: (fieldId: string, anchor: HTMLElement) => void;
    onSubmit?: (options: IRecordDetailSubmitOptions) => void;
    onDeleteRecord?: () => void;
    headerActions?: ReactNode;
    /** Compact Parent/Subitems context rendered above ordinary record fields. */
    hierarchySummary?: ReactNode;
}
export interface IRecordDetailSubmitOptions {
    addMoreAfterSubmission: boolean;
}
export interface IRecordDetailFloatingPanelProps {
    open: boolean;
    title: string;
    anchor: {
        left: number;
        top: number;
        width: number;
        height: number;
    } | null;
    fields: IRecordDetailFieldItem[];
    onClose: () => void;
    onOpenRecord: () => void;
    onFieldChange?: (fieldId: string, value: unknown) => void;
    onEditField?: (fieldId: string, anchor: HTMLElement) => void;
    onSubmit?: () => void;
    uploadAttachment?: (file: File) => Promise<IBaseAttachment>;
    personOptions?: IBasePeopleOption[];
    groupOptions?: IBasePeopleOption[];
}
export declare function RecordDetailPanel({ open, recordId, fields, currentIndex, totalRecords, onClose, onBack, onPreviousRecord, onNextRecord, onFieldChange, uploadAttachment, personOptions, groupOptions, onAddField, onEditField, onSubmit, onDeleteRecord, headerActions, hierarchySummary, }: IRecordDetailPanelProps): import("react").JSX.Element;
export declare function RecordDetailFloatingPanel({ open, title, anchor, fields, onClose, onOpenRecord, onFieldChange, onEditField, onSubmit, uploadAttachment, personOptions, groupOptions, }: IRecordDetailFloatingPanelProps): import("react").JSX.Element | null;
