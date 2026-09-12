import type { IShapeData, ShapeTypeEnum } from '@univerjs-pro/engine-shape';
import type { IPopup } from '@univerjs/ui';
export declare const SLIDE_SHAPE_FLOATING_TOOLBAR_KEY = "slide.shape.floating-toolbar";
interface ISlideShapeFloatingToolbarExtraProps {
    unitId: string;
    subUnitId: string;
    drawingId: string;
    shapeType?: ShapeTypeEnum;
    shapeData?: IShapeData;
}
interface ISlideShapeFloatingToolbarProps {
    popup: IPopup<ISlideShapeFloatingToolbarExtraProps>;
}
export declare function SlideShapeFloatingToolbar(props: ISlideShapeFloatingToolbarProps): import("react").JSX.Element | null;
export {};
