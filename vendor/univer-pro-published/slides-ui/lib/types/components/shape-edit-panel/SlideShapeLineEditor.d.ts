import type { IBasicShapeData } from '@univerjs-pro/engine-shape';
interface ISlideShapeLineEditorProps {
    unitId: string;
    subUnitId: string;
    drawingId: string;
    shapeData: IBasicShapeData;
    isLineShape: boolean;
}
export declare function SlideShapeLineEditor(props: ISlideShapeLineEditorProps): import("react").JSX.Element;
export {};
