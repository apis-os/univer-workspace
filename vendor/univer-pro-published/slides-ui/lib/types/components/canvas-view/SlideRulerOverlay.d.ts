import type { CSSProperties } from 'react';
export interface ISlideRulerOverlayProps {
    width: number;
    height: number;
    originX: number;
    originY: number;
    pageScale: number;
    pageLeft?: number;
    pageTop?: number;
    pageWidth?: number;
    pageHeight?: number;
    horizontalMajorStep?: number;
    verticalMajorStep?: number;
    pageScaleY?: number;
    cursorX?: number;
    cursorY?: number;
}
export declare const SLIDE_RULER_OVERLAY_STYLE: CSSProperties;
export declare function SlideRulerOverlay(props: ISlideRulerOverlayProps): import("react").JSX.Element | null;
