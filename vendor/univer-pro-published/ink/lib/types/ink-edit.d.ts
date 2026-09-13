import type { IInkAnchorPoint, IInkBrushModel, IInkPenModel, IInkPoint } from './ink-types';
export type InkPenPointType = IInkAnchorPoint['pointType'];
export type InkPenHandleKind = 'anchor' | 'in' | 'out';
export interface IInkPenHandleRef {
    kind: InkPenHandleKind;
    anchorId: string;
}
export interface IInkPenPathHit {
    segmentIndex: number;
    t: number;
    point: IInkPoint;
    distance: number;
}
export interface IInkPenHandleHit {
    handle: IInkPenHandleRef;
    point: IInkPoint;
    distance: number;
}
export declare function isInkPenHandleVisible(model: IInkPenModel, anchorIndex: number, kind: InkPenHandleKind): boolean;
export declare function getInkPenPreviewModel(model: IInkPenModel, point: IInkPoint | null): IInkPenModel;
export declare function convertBrushModelToPenModel(model: IInkBrushModel, options?: {
    tolerance?: number;
    createId?: (index: number) => string;
}): IInkPenModel;
export declare function findClosestInkPenHandle(model: IInkPenModel, point: IInkPoint, tolerance: number): IInkPenHandleHit | null;
export declare function findClosestInkPenSegment(model: IInkPenModel, point: IInkPoint, tolerance: number): IInkPenPathHit | null;
export declare function insertInkPenAnchorAt(model: IInkPenModel, hit: Pick<IInkPenPathHit, 'segmentIndex' | 't'>, createId: () => string): IInkPenModel;
export declare function deleteInkPenAnchor(model: IInkPenModel, anchorId: string): IInkPenModel;
export declare function setInkPenAnchorPointType(model: IInkPenModel, anchorId: string, pointType: InkPenPointType): IInkPenModel;
export declare function cycleInkPenAnchorPointType(model: IInkPenModel, anchorId: string): IInkPenModel;
export declare function moveInkPenAnchorPoint(model: IInkPenModel, handleRef: IInkPenHandleRef, point: IInkPoint): IInkPenModel;
