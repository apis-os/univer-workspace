import type { IOperation } from '@univerjs/core';
export interface IOpenMindMapPanelOperationParams {
    unitId: string;
    subUnitId: string;
    scopeId: string;
    nodeId?: string;
}
export declare const OpenMindMapPanelOperation: IOperation<IOpenMindMapPanelOperationParams>;
