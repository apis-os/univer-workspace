import type { IShapeEditorBaseProps } from './types';
export interface IShapeImageFillEditorProps extends IShapeEditorBaseProps {
    onUpdateShapeFillImage?: (image: HTMLImageElement) => void;
}
export declare function ShapeImageFillEditor(props: IShapeImageFillEditorProps): import("react").JSX.Element;
