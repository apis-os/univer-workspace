import type { ISlideTableRenderModel } from '@univerjs-pro/slides-table';
export type SlideTableHit = {
    kind: 'cell';
    row: number;
    column: number;
};
export declare function hitTestSlideTable(model: ISlideTableRenderModel, x: number, y: number): SlideTableHit | null;
