import type { ISlideDrawing, ISlidePageElement } from '@univerjs-pro/slides';
export interface ISlideShapeEditPanelProps {
    unitId: string;
    subUnitId: string;
    drawingId: string;
    transform?: ISlideDrawing['transform'];
    element?: ISlidePageElement;
}
export declare function SlideShapeEditPanel(props: ISlideShapeEditPanelProps): import("react").JSX.Element;
