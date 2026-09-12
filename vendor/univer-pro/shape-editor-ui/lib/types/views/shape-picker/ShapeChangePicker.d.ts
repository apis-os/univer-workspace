import type { ShapeTypeEnum } from '@univerjs-pro/engine-shape';
export declare const SHAPE_CHANGE_PICKER_COMPONENT = "shape-editor-ui.change-shape-picker";
interface IShapeChangePickerProps {
    onChange?: (value: ShapeTypeEnum) => void;
}
export declare function ShapeChangePicker(props: IShapeChangePickerProps): import("react").JSX.Element;
export {};
