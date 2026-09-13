import type { IShapeData, ShapeTypeEnum } from '@univerjs-pro/engine-shape';
import type { IPopupWithExtraProps } from '@univerjs/ui';
export declare const DOCS_SHAPE_FLOATING_TOOLBAR_KEY = "doc.shape.floating-toolbar";
interface IShapeFloatingToolbarExtraProps {
    unitId: string;
    subUnitId: string;
    drawingId: string;
    shapeType: ShapeTypeEnum;
    shapeData: IShapeData;
}
interface IShapeFloatingToolbarProps {
    popup: IPopupWithExtraProps<IShapeFloatingToolbarExtraProps>;
}
export declare function DocsShapeFloatingToolbar(props: IShapeFloatingToolbarProps): import("react").JSX.Element | null;
export {};
