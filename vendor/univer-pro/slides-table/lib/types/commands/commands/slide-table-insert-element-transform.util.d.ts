import type { ISlideTableElement } from '@univerjs-pro/slides';
import type { IAccessor } from '@univerjs/core';
import type { ISlideTableSnapshot } from '../../types';
export interface ISlideTableElementContextParams {
    unitId: string;
    subUnitId?: string;
    elementId?: string;
    tableId: string;
}
export declare function resolveSlideTableElementGrowMutations(accessor: IAccessor, params: ISlideTableElementContextParams, table: ISlideTableSnapshot, newTable: ISlideTableSnapshot, axis: 'row' | 'column'): {
    redoMutation: {
        id: string;
        params: {
            unitId: string;
            subUnitId: string;
            drawingId: string;
            element: ISlideTableElement;
            transform: {
                width: number;
                height: number;
                left?: number;
                top?: number;
                scaleX?: number;
                scaleY?: number;
                angle?: number;
                skewX?: number;
                skewY?: number;
                flipX?: boolean;
                flipY?: boolean;
                rotateEnabled?: boolean;
                resizeEnabled?: boolean;
                borderEnabled?: boolean;
            };
        };
    };
    undoMutation: {
        id: string;
        params: {
            unitId: string;
            subUnitId: string;
            drawingId: string;
            element: ISlideTableElement;
            transform: import("@univerjs/core").Nullable<import("@univerjs/core").ITransformState>;
        };
    };
} | null;
