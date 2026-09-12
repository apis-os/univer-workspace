import type { IShapeData, ShapeTypeEnum } from '@univerjs-pro/engine-shape';
import type { IPopup } from '@univerjs/ui';
export declare const BOARD_SHAPE_FLOATING_TOOLBAR_KEY = "board.shape.floating-toolbar";
interface IBoardShapeFloatingToolbarExtraProps {
    unitId: string;
    subUnitId: string;
    elementId: string;
    shapeType?: ShapeTypeEnum;
    shapeData?: IShapeData;
    selectionOnly?: boolean;
}
interface IBoardShapeFloatingToolbarProps {
    popup: IPopup<IBoardShapeFloatingToolbarExtraProps>;
}
export declare function BoardShapeFloatingToolbar(props: IBoardShapeFloatingToolbarProps): import("react").JSX.Element | null;
export {};
