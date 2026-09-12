import type { IMutation } from '@univerjs/core';
import type { IDrawingJson1Type } from '@univerjs/drawing';
export declare enum SlideDrawingApplyType {
    INSERT = 0,
    REMOVE = 1,
    UPDATE = 2
}
export interface ISetSlideDrawingApplyMutationParams extends IDrawingJson1Type {
    type: SlideDrawingApplyType;
}
export declare const SetSlideDrawingApplyMutation: IMutation<ISetSlideDrawingApplyMutationParams>;
