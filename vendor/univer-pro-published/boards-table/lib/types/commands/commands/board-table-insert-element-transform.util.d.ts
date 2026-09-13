import type { IBoardTableElement } from '@univerjs-pro/boards';
import type { ISlideTableSnapshot } from '@univerjs-pro/slides-table';
import type { IAccessor } from '@univerjs/core';
export interface IBoardTableElementContextParams {
    unitId: string;
    subUnitId?: string;
    elementId?: string;
    tableId: string;
}
export declare function resolveBoardTableElementGrowMutations(accessor: IAccessor, params: IBoardTableElementContextParams, table: ISlideTableSnapshot, newTable: ISlideTableSnapshot, axis: 'row' | 'column'): {
    redoMutation: {
        id: string;
        params: {
            unitId: string;
            subUnitId: string;
            elementId: string;
            element: IBoardTableElement;
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
            } | {
                width: number;
                height: number;
                left: number;
                top: number;
                angle: number;
                flipX: boolean | undefined;
                flipY: boolean | undefined;
            };
        };
    };
    undoMutation: {
        id: string;
        params: {
            unitId: string;
            subUnitId: string;
            elementId: string;
            element: IBoardTableElement;
            transform: import("@univerjs/core").ITransformState | {
                left: number;
                top: number;
                width: number;
                height: number;
                angle: number;
                flipX: boolean | undefined;
                flipY: boolean | undefined;
            };
        };
    };
} | null;
