import type { IShapeData } from '@univerjs-pro/engine-shape';
import type { IShapeEditorBaseProps } from './types';
import { ShapeFillEnum } from '@univerjs-pro/engine-shape';
export interface IShapeFillEditorProps extends IShapeEditorBaseProps {
    isLineShape: boolean;
    onUpdateShapeFillImage?: (image: HTMLImageElement) => void;
}
export declare function getInitialShapeFillType(shapeData: IShapeData): ShapeFillEnum;
export declare function ShapeFillEditor(props: IShapeFillEditorProps): import("react").JSX.Element | null;
