import type { ISlideDrawing } from '@univerjs-pro/slides';
import { PageElementTypeEnum } from '@univerjs-pro/slides';
interface ISlideShapePositionEditorProps {
    unitId: string;
    subUnitId: string;
    drawingId: string;
    transform?: ISlideDrawing['transform'];
    elementType?: PageElementTypeEnum;
}
export declare function SlideShapePositionEditor(props: ISlideShapePositionEditorProps): import("react").JSX.Element;
export {};
