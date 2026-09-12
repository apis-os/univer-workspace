import type { IDialogPartMethodOptions } from '@univerjs/ui';
export declare const SLIDE_INSERT_SEARCH_MENU_COMPONENT = "slide.insert-ribbon.search";
export declare const SLIDE_INSERT_TABLE_MENU_COMPONENT = "slide.insert-ribbon.table";
export declare const SLIDE_INSERT_SHAPE_MENU_COMPONENT = "slide.insert-ribbon.shape";
export declare const SLIDE_INSERT_SMART_ART_MENU_COMPONENT = "slide.insert-ribbon.smart-art";
export declare const SLIDE_INSERT_SYMBOL_PICKER_COMPONENT = "slide.insert-ribbon.symbol-picker";
export declare const SLIDE_INSERT_EMOJI_PICKER_COMPONENT = "slide.insert-ribbon.emoji-picker";
export declare const SLIDE_INSERT_CHART_DIALOG_ID = "slide.insert-chart.dialog";
export declare function SlideInsertSymbolPicker(props: {
    onChange?: (value: string | number) => void;
}): import("react").JSX.Element;
export declare function SlideInsertEmojiPicker(props: {
    onChange?: (value: string | number) => void;
}): import("react").JSX.Element;
export declare function createSlideInsertChartDialogOptions(componentName: string, title: string, onClose: () => void): IDialogPartMethodOptions;
export declare function SlideInsertSearchMenu(): import("react").JSX.Element;
export declare function SlideInsertTableMenu(): import("react").JSX.Element;
export declare function SlideInsertShapeMenu(props: {
    onChange?: (value: string | number) => void;
}): import("react").JSX.Element;
export declare function SlideInsertSmartArtMenu(props: {
    onChange?: (value: string | number) => void;
}): import("react").JSX.Element;
