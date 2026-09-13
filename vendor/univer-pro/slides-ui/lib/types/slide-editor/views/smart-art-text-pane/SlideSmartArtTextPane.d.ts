export declare const SLIDE_SMART_ART_TEXT_PANE_KEY = "slide.smart-art.text-pane";
interface ISlideSmartArtTextPaneExtraProps {
    unitId: string;
    subUnitId: string;
    drawingId: string;
}
interface ISlideSmartArtTextPaneProps {
    popup: {
        extraProps?: ISlideSmartArtTextPaneExtraProps;
    };
}
export declare function SlideSmartArtTextPane(props: ISlideSmartArtTextPaneProps): import("react").JSX.Element | null;
export {};
