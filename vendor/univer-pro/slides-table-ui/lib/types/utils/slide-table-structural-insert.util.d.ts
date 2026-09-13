import type { ISlideTableTrigger } from '@univerjs-pro/slides-table';
import type { ISlideTableObjectControlState } from '../render-objects/slide-table-object';
export type ISlideTableInsertDotTrigger = ISlideTableTrigger & ({
    kind: 'row-insert-dot';
    row: number;
} | {
    kind: 'column-insert-dot';
    column: number;
});
export declare function isSlideTableInsertDotTrigger(trigger: {
    kind?: string;
    row?: number;
    column?: number;
} | null | undefined): trigger is ISlideTableInsertDotTrigger;
export declare function buildSlideTableInsertDotControlState(trigger: ISlideTableInsertDotTrigger): ISlideTableObjectControlState;
