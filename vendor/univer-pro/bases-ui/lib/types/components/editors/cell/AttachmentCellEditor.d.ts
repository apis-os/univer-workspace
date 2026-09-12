import type { IBaseAttachment } from '@univerjs/core';
import type { IBaseCellEditorCommonProps } from './editor-types';
export declare function BaseAttachmentCellEditor({ value: propValue, valueRef, focusRef, uploadFile, accept, onLiveCommit, onFilePickerInteractionStart, onFilePickerInteractionEnd, }: IBaseCellEditorCommonProps<IBaseAttachment[]> & {
    uploadFile: (file: File) => Promise<IBaseAttachment>;
    accept?: string;
    onLiveCommit?: (value: IBaseAttachment[]) => void;
    onFilePickerInteractionStart?: () => void;
    onFilePickerInteractionEnd?: () => void;
}): import("react").JSX.Element;
