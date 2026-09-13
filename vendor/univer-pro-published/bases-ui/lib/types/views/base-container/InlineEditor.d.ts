import type { BaseCellValue, IBaseAttachment, IBaseSnapshot, IFieldSnapshot } from '@univerjs/core';
import type { IBaseCellEditorFocusHandle, IBaseCellEditorOption } from '../../components/editors/cell/editor-types';
import type { IBasePeopleOption } from '../../components/panels/field-config/field-config-model';
import { BaseFieldType } from '@univerjs/core';
import React, { useRef } from 'react';
export interface IBaseInlineLiveCommitScheduler {
    schedule: (commit: () => unknown) => void;
    flush: () => boolean;
    cancel: () => void;
}
export declare function createBaseInlineLiveCommitScheduler(delayMs?: number): IBaseInlineLiveCommitScheduler;
export declare function RenderBaseActiveCellEditor(): React.JSX.Element;
export declare function renderInlineCellEditor({ field, snapshot, value, valueRef, focusRef, initialQuery, commit, commitAndMove, startDateFloatingInteraction, startAttachmentFilePickerInteraction, endAttachmentFilePickerInteraction, liveCommit, uploadAttachment, personOptions, groupOptions, textEditorMinHeight, textEditorMaxHeight, }: {
    field: IFieldSnapshot;
    snapshot: IBaseSnapshot;
    value: unknown;
    valueRef: ReturnType<typeof useRef<unknown>>;
    focusRef: ReturnType<typeof useRef<IBaseCellEditorFocusHandle>>;
    initialQuery?: string;
    commit: () => void;
    commitAndMove: (shiftKey?: boolean) => void;
    startDateFloatingInteraction: () => void;
    startAttachmentFilePickerInteraction?: () => void;
    endAttachmentFilePickerInteraction?: () => void;
    liveCommit: (value: unknown) => void;
    uploadAttachment: (file: File) => Promise<IBaseAttachment>;
    personOptions?: IBasePeopleOption[];
    groupOptions?: IBasePeopleOption[];
    textEditorMinHeight?: number;
    textEditorMaxHeight?: number;
}): React.JSX.Element;
export declare function resolveInlineEditorOptions(field: IFieldSnapshot, personOptions?: IBasePeopleOption[], groupOptions?: IBasePeopleOption[], value?: unknown): IBaseCellEditorOption[];
export declare function usesInlineLiveCommit(field: IFieldSnapshot, value: unknown): boolean;
type BaseInlineEditorKeyboardAction = 'cancel' | 'commit' | 'move-up' | 'move-down' | 'newline' | 'tab-backward' | 'tab-forward' | null;
export declare function resolveBaseInlineEditorKeyboardAction(fieldType: BaseFieldType, event: Pick<React.KeyboardEvent<HTMLDivElement>, 'altKey' | 'ctrlKey' | 'defaultPrevented' | 'key' | 'metaKey' | 'shiftKey'>): BaseInlineEditorKeyboardAction;
export declare function normalizeInlineEditorValue(field: IFieldSnapshot, value: unknown): BaseCellValue;
export {};
