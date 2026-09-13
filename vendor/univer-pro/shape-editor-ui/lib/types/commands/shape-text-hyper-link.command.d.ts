import type { ICommand, ITextRangeParam } from '@univerjs/core';
export interface IShapeTextHyperLinkInfo {
    unitId: string;
    linkId: string;
    url?: string;
    readonly?: boolean;
    copyable?: boolean;
    segmentId?: string;
    segmentPage?: number;
    startIndex: number;
    endIndex: number;
}
export interface IAddShapeTextHyperLinkCommandParams {
    payload: string;
    unitId: string;
    selections?: ITextRangeParam[];
}
export declare const AddShapeTextHyperLinkCommand: ICommand<IAddShapeTextHyperLinkCommandParams>;
export interface IUpdateShapeTextHyperLinkCommandParams {
    unitId: string;
    linkId: string;
    payload: string;
    label: string;
    segmentId?: string;
}
export declare const UpdateShapeTextHyperLinkCommand: ICommand<IUpdateShapeTextHyperLinkCommandParams>;
export interface IDeleteShapeTextHyperLinkCommandParams {
    unitId: string;
    linkId: string;
    segmentId?: string;
}
export declare const DeleteShapeTextHyperLinkCommand: ICommand<IDeleteShapeTextHyperLinkCommandParams>;
export interface IShowShapeTextHyperLinkEditPopupOperationParams {
    link?: IShapeTextHyperLinkInfo;
}
export declare const ShowShapeTextHyperLinkEditPopupOperation: ICommand<IShowShapeTextHyperLinkEditPopupOperationParams>;
export declare const ToggleShapeTextHyperLinkInfoPopupOperation: ICommand<IShapeTextHyperLinkInfo>;
export interface IOpenShapeTextHyperLinkOperationParams {
    unitId: string;
    linkId: string;
    url?: string;
    segmentId?: string;
}
export declare const OpenShapeTextHyperLinkOperation: ICommand<IOpenShapeTextHyperLinkOperationParams>;
