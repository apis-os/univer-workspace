import type { IShapeData, ShapeTypeEnum } from '@univerjs-pro/engine-shape';
import type { ReactNode } from 'react';
import type { IShapeEditorUpdateHandlers } from './types';
export interface IShapeEditPanelProps extends IShapeEditorUpdateHandlers {
    shapeId: string;
    shapeData: IShapeData;
    shapeType: ShapeTypeEnum;
    version: number;
    disableShapeOption: boolean;
    positionEditor?: ReactNode;
    onUpdateShapeFillImage?: (image: HTMLImageElement) => void;
}
export declare function ShapeEditPanel(props: IShapeEditPanelProps): import("react").JSX.Element;
