import { SlidePageLayoutTypeEnum } from '@univerjs-pro/slides';
export interface ISlideLayoutPickerProps {
    /** Called with the chosen layout type when the user clicks a card. */
    onSelect: (layoutType: SlidePageLayoutTypeEnum) => void;
}
/** Grid of layout thumbnails for inserting a new slide with a specific layout. */
export declare function SlideLayoutPicker({ onSelect }: ISlideLayoutPickerProps): import("react").JSX.Element;
