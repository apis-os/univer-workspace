import type { SmartArtOperation } from '@univerjs-pro/engine-shape';
import type { ICommand } from '@univerjs/core';
export interface IUpdateSlideSmartArtCommandParams {
    unitId: string;
    subUnitId: string;
    drawingId: string;
    operations: readonly SmartArtOperation[];
}
export declare const UpdateSlideSmartArtCommand: ICommand<IUpdateSlideSmartArtCommandParams>;
