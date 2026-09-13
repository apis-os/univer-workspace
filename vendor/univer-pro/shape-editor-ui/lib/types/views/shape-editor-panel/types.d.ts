import type { ICxnShapeData, IShapeData } from '@univerjs-pro/engine-shape';
export interface IOldShapeData {
    oldShapeData?: IShapeData;
}
export interface IShapeEditorUpdateHandlers {
    onUpdateShapeData: (oldShapeJSON: IOldShapeData, shapeData?: IShapeData) => void;
    onUpdateLineShapeData?: (oldShapeJSON: IOldShapeData, shapeData?: ICxnShapeData) => void;
}
export interface IShapeEditorBaseProps extends IShapeEditorUpdateHandlers {
    shapeId: string;
    shapeData: IShapeData;
    disableShapeOption: boolean;
}
