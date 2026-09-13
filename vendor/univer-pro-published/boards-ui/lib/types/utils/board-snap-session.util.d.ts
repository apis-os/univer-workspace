import type { IAlignmentSnapGuide } from '@univerjs/engine-render';
export interface IBoardConnectorAxisSnapOptions {
    anchor: {
        x: number;
        y: number;
    };
    point: {
        x: number;
        y: number;
    };
    threshold: number;
}
export interface IBoardConnectorAxisSnapResult {
    point: {
        x: number;
        y: number;
    };
    axis: 'horizontal' | 'vertical';
    guide: IAlignmentSnapGuide;
}
export declare function resolveBoardConnectorAxisSnap(options: IBoardConnectorAxisSnapOptions): IBoardConnectorAxisSnapResult | null;
