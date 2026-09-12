import type { ICommand } from '@univerjs/core';
export interface IConvertSlideSmartArtToShapesCommandParams {
    unitId: string;
    subUnitId: string;
    drawingId: string;
    childIds?: string[];
    groupId?: string;
}
export declare const ConvertSlideSmartArtToShapesCommand: ICommand<IConvertSlideSmartArtToShapesCommandParams>;
