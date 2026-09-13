import type { ISheetShapeDrawingParam } from '@univerjs-pro/sheets-shape';
import { IRenderManagerService } from '@univerjs/engine-render';
export declare class ShapeRenderUpdateService {
    private readonly _renderManagerService;
    constructor(_renderManagerService: IRenderManagerService);
    updateShapeFillImage(param: Pick<ISheetShapeDrawingParam, 'unitId' | 'subUnitId' | 'drawingId'>, image: HTMLImageElement | undefined): void;
}
