import type { ShapeTypeOption } from '@univerjs-pro/shape-editor-ui';
import { ShapeGroupEnum } from '@univerjs-pro/shape-editor-ui';
export declare const SLIDE_SHAPE_PICKER_COMPONENT = "slide.shape.picker.component";
export declare const SLIDE_IMAGE_CLIP_SHAPE_PICKER_COMPONENT = "slide.image-clip-shape-picker.component";
interface ISlideShapePickerComponentProps {
    onShapeClick: (shape: ShapeTypeOption) => void;
    excludeGroups?: ShapeGroupEnum[];
    variant?: 'card' | 'dropdown';
}
export declare function SlideShapePickerComponent({ onShapeClick, excludeGroups, variant }: ISlideShapePickerComponentProps): import("react").JSX.Element;
interface ISlideShapePickerProps {
    onChange?: (value: string | number) => void;
    variant?: 'card' | 'dropdown';
}
export declare function SlideShapePicker(props: ISlideShapePickerProps): import("react").JSX.Element;
export declare function SlideImageClipShapePicker(): import("react").JSX.Element;
interface ISlideImageClipShapePickerProps {
    onSelect?: (shape: ShapeTypeOption) => void;
}
export declare function SlideImageClipShapePickerWithAction(props: ISlideImageClipShapePickerProps): import("react").JSX.Element;
export {};
