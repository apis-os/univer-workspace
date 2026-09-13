import type { Nullable } from '@univerjs/core';
import type { Scene, SpreadsheetSkeleton } from '@univerjs/engine-render';
import type { IShapeTextEditingParams, IShapeTextEditorPositionOffset, IShapeTextEditorViewportKeys } from '../types';
export interface IShapePosition {
    left: number;
    top: number;
    width: number;
    height: number;
    angle: number;
    scaleX: number;
    scaleY: number;
}
export interface IShapePositionResult {
    position: IShapePosition;
    updatePosition: () => void;
}
export declare function areShapePositionsEqual(a: IShapePosition, b: IShapePosition): boolean;
export declare function offsetShapePosition(position: IShapePosition, offset: Nullable<IShapeTextEditorPositionOffset>): IShapePosition;
/**
 * Calculate shape position in DOM coordinates.
 */
export declare function calcShapePosition(shapeLeft: number, shapeTop: number, shapeWidth: number, shapeHeight: number, shapeAngle: number, scene: Scene, viewportKeys: IShapeTextEditorViewportKeys, skeleton?: Nullable<SpreadsheetSkeleton>): IShapePosition;
export interface IUseShapePositionOptions {
    editingParams: Nullable<IShapeTextEditingParams>;
    scene: Nullable<Scene>;
    viewportKeys: IShapeTextEditorViewportKeys;
    skeleton?: Nullable<SpreadsheetSkeleton>;
    getShapeTransform: () => Nullable<{
        left: number;
        top: number;
        width: number;
        height: number;
        angle: number;
    }>;
    getPositionOffset?: () => Nullable<IShapeTextEditorPositionOffset>;
}
/**
 * Hook to calculate and track shape position in DOM coordinates.
 * Handles freeze zones and scroll updates.
 */
export declare function useShapePosition(options: IUseShapePositionOptions): IShapePositionResult;
