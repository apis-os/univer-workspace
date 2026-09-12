import type { IBaseRect, ICommand, IOperation } from '@univerjs/core';
import type { BaseContextMenuType, BaseToolbarPanelType, IBaseActiveEditorState } from '../../services/base-ui-state.types';
export interface IOpenBasePanelOperationParams {
    type: BaseToolbarPanelType;
    anchor?: IBaseRect;
    payload?: Record<string, unknown>;
}
export interface IOpenBaseContextMenuOperationParams {
    type: BaseContextMenuType;
    anchor?: IBaseRect;
    payload?: Record<string, unknown>;
}
export interface IOpenBaseRecordDetailPanelOperationParams {
    recordId: string;
}
export interface IOpenBaseAttachmentPreviewOperationParams {
    images: readonly string[];
}
export declare const BASE_RECORD_DETAIL_PANEL = "base-ui.record-detail-panel";
export declare const OpenBasePanelOperation: IOperation<IOpenBasePanelOperationParams>;
export declare const CloseBasePanelOperation: IOperation;
export declare const OpenBaseContextMenuOperation: IOperation<IOpenBaseContextMenuOperationParams>;
export declare const CloseBaseContextMenuOperation: IOperation;
export declare const OpenBaseActiveEditorOperation: IOperation<IBaseActiveEditorState>;
export declare const CloseBaseActiveEditorOperation: IOperation;
export declare const OpenBaseAttachmentPreviewOperation: IOperation<IOpenBaseAttachmentPreviewOperationParams>;
export declare const OpenBaseRecordDetailPanelOperation: IOperation<IOpenBaseRecordDetailPanelOperationParams>;
export declare const CloseBaseRecordDetailPanelOperation: IOperation;
export declare const baseUIPopupOperations: ICommand[];
export declare const BASE_TOOLBAR_MENU_OPERATIONS: ICommand[];
