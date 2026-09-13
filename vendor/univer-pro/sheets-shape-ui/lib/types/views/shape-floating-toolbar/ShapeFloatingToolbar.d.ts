import type { IShapeData, ShapeTypeEnum } from '@univerjs-pro/engine-shape';
import type { DrawingTypeEnum } from '@univerjs/core';
import type { IPopup } from '@univerjs/ui';
interface IShapeFloatingToolbarExtraProps {
    unitId: string;
    subUnitId: string;
    drawingId: string;
    drawingType: DrawingTypeEnum;
    shapeType: ShapeTypeEnum;
    shapeData: IShapeData;
}
interface IShapeFloatingToolbarProps {
    popup: IPopup<IShapeFloatingToolbarExtraProps>;
}
export declare function SheetsShapeFloatingToolbar(props: IShapeFloatingToolbarProps): import("react").JSX.Element | null;
export {};
