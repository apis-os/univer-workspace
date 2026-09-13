import type { IBaseRect } from '@univerjs/core';
export type BaseToolbarPanelType = 'addRecord' | 'customizeField' | 'customizeKanban' | 'customizeGallery' | 'calendarEventSettings' | 'calendarViewSettings' | 'viewSettings' | 'filter' | 'group' | 'sort' | 'rowHeight' | 'conditionalColoring' | 'fieldConfig';
export interface IBaseToolbarPanelState {
    type: BaseToolbarPanelType;
    anchor?: IBaseRect;
    payload?: Record<string, unknown>;
}
export type BaseContextMenuType = 'fieldHeader' | 'fieldStats' | 'gridContext' | 'kanbanColumnColor' | 'kanbanColumnTitle';
export interface IBaseContextMenuState {
    type: BaseContextMenuType;
    anchor?: IBaseRect;
    payload?: Record<string, unknown>;
}
export type BaseActiveEditorScope = 'cell' | 'recordDetail';
export interface IBaseActiveEditorState {
    scope: BaseActiveEditorScope;
    recordId: string;
    fieldId: string;
    mode?: string;
    initialValue?: unknown;
}
