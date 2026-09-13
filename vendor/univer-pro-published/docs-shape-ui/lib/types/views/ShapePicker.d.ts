import type { IMenuInsertShapeCommandParams } from '../commands/command/menu-insert-shape.command';
export declare const SHAPE_PICKER_COMPONENT = "doc.shape.picker.component";
export declare const DOCS_IMAGE_CLIP_SHAPE_PICKER_COMPONENT = "doc.image-clip.shape-picker.component";
export declare function ImageClipShapePicker(): import("react").JSX.Element;
export declare function ImageClipShapePickerBridge(): import("react").JSX.Element | null;
export declare function ShapePicker({ paragraphMenuPlacement }: {
    paragraphMenuPlacement?: IMenuInsertShapeCommandParams['paragraphMenuPlacement'];
}): import("react").JSX.Element;
