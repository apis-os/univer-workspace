import type { IOperation } from '@univerjs/core';
export interface ISetBaseZoomOperationParams {
    viewId: string;
    zoom: number;
}
export declare const SetBaseZoomOperation: IOperation<ISetBaseZoomOperationParams>;
