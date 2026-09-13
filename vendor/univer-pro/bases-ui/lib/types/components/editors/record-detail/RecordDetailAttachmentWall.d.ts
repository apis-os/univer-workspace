import type { IBaseAttachment } from '@univerjs/core';
export interface IRecordDetailAttachmentWallProps {
    value: IBaseAttachment[];
    editable: boolean;
    uploadAttachment?: (file: File) => Promise<IBaseAttachment>;
    onChange?: (value: IBaseAttachment[]) => void;
}
export declare function RecordDetailAttachmentWall({ value, editable, uploadAttachment, onChange, }: IRecordDetailAttachmentWallProps): import("react").JSX.Element;
