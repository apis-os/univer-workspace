import type { ISlideGroupElement, ISlidePageElement } from '../slide.type';
export interface ISlideGroupRelationDrawing {
    drawingId: string;
    groupId?: string;
    element: ISlidePageElement;
}
export declare function isSlideGroupDrawing<T extends ISlideGroupRelationDrawing>(drawing: T | null | undefined): drawing is T & {
    element: ISlideGroupElement;
};
export declare function getDirectSlideGroupChildIds<T extends ISlideGroupRelationDrawing>(drawingData: Record<string, T>, groupId: string, drawingOrder?: string[]): string[];
export declare function collectSlideGroupDescendantIds<T extends ISlideGroupRelationDrawing>(drawingData: Record<string, T>, groupId: string, drawingOrder?: string[]): string[];
export declare function collectSlideDrawingIdsForRemove<T extends ISlideGroupRelationDrawing>(drawingData: Record<string, T>, drawingOrder: string[], drawingIds: string[]): string[];
