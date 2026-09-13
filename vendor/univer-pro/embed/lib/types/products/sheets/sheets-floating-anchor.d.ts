import type { ISheetDrawingPosition, ISheetFloatDom } from '@univerjs/sheets-drawing';
import type { IEmbedDescriptor } from '../../types/embed';
import { UniverInstanceType } from '@univerjs/core';
export declare const EMBED_SHEETS_FLOATING_COMPONENT_KEY = "UniverEmbedSheetsFloatingObject";
export interface IEmbedSheetsFloatingObjectData {
    version: 1;
    embedId: string;
    hostType?: UniverInstanceType;
    childType?: UniverInstanceType;
    hostUnitId?: string;
    hostAnchorId: string;
    runtimeMountMode?: 'always' | 'stage2';
    resizeBehavior?: 'free' | 'aspect-ratio' | 'height-auto' | 'disabled';
    aspectRatio?: number;
    disablePopup?: boolean;
}
export interface IEmbedSheetsFloatingObjectParams {
    embedId: string;
    childType?: UniverInstanceType;
    hostUnitId: string;
    hostSubUnitId: string;
    hostAnchorId: string;
    componentKey?: string;
    left?: number;
    top?: number;
    width?: number;
    height?: number;
    sheetTransform?: ISheetDrawingPosition;
    allowTransform?: boolean;
    resizeBehavior?: IEmbedSheetsFloatingObjectData['resizeBehavior'];
    aspectRatio?: number;
    runtimeMountMode?: IEmbedSheetsFloatingObjectData['runtimeMountMode'];
}
export declare function createEmbedSheetsFloatingObjectData(params: {
    embedId: string;
    childType?: UniverInstanceType;
    hostUnitId?: string;
    hostAnchorId: string;
    resizeBehavior?: IEmbedSheetsFloatingObjectData['resizeBehavior'];
    aspectRatio?: number;
    runtimeMountMode?: IEmbedSheetsFloatingObjectData['runtimeMountMode'];
}): IEmbedSheetsFloatingObjectData;
export declare function createEmbedSheetsFloatingDrawing(params: IEmbedSheetsFloatingObjectParams): ISheetFloatDom;
export declare function resolveEmbedSheetsFloatingObjectSize(params: {
    width?: number;
    height?: number;
    resizeBehavior?: IEmbedSheetsFloatingObjectData['resizeBehavior'];
    aspectRatio?: number;
}): {
    width: number;
    height: number;
};
export declare function createEmbedSheetsFloatingDrawingFromDescriptor(descriptor: IEmbedDescriptor, hostSubUnitId: string, hostContext?: Record<string, unknown>): ISheetFloatDom;
export declare function getEmbedSheetsFloatingObjectData(drawing: Pick<ISheetFloatDom, 'data'>): IEmbedSheetsFloatingObjectData | undefined;
export declare function isEmbedSheetsFloatingDrawing(drawing: Pick<ISheetFloatDom, 'componentKey' | 'data'>): boolean;
