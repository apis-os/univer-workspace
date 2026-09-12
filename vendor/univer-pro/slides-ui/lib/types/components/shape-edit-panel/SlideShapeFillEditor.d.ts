import type { IBasicShapeData } from '@univerjs-pro/engine-shape';
interface ISlideShapeFillEditorProps {
    unitId: string;
    subUnitId: string;
    drawingId: string;
    shapeData: IBasicShapeData;
    isLineShape: boolean;
}
export declare function SlideShapeFillEditor(props: ISlideShapeFillEditorProps): import("react").JSX.Element | null;
export {};
