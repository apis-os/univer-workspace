import type { IShapeProps } from '@univerjs/engine-render';
import { Shape } from '@univerjs/engine-render';
export interface IDocShapeAdjustPointObjectProps extends IShapeProps {
    shapeId: string;
    adjName: string;
    unitId: string;
    subUnitId: string;
}
export declare class DocShapeAdjustPointObject extends Shape<IDocShapeAdjustPointObjectProps> {
    private _shapeId;
    private _adjName;
    private _unitId;
    private _subUnitId;
    constructor(key?: string, props?: IDocShapeAdjustPointObjectProps);
    getDrawingSearch(): {
        unitId: string;
        subUnitId: string;
        drawingId: string;
    };
    setShapeProps(props: Partial<IDocShapeAdjustPointObjectProps>): void;
    protected _draw(ctx: CanvasRenderingContext2D): void;
}
