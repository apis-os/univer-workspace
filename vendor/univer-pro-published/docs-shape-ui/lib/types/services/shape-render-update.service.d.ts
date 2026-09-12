import type { IDocShapeDrawingParam } from '@univerjs-pro/docs-shape';
import { IRenderManagerService } from '@univerjs/engine-render';
export declare class ShapeRenderUpdateService {
    private readonly _renderManagerService;
    constructor(_renderManagerService: IRenderManagerService);
    updateShapeFillImage(param: Pick<IDocShapeDrawingParam, 'unitId' | 'subUnitId' | 'drawingId'>, image: HTMLImageElement | undefined): void;
}
