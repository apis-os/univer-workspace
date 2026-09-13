import type { IZoomInputProps } from '@univerjs/ui';
export declare const SLIDE_ZOOM_INPUT_COMPONENT = "SLIDE_ZOOM_INPUT_COMPONENT";
export declare const SLIDE_ZOOM_SHORTCUTS: number[];
export declare const SLIDE_ZOOM_RANGE: number[];
export declare function SlideZoomInput({ className, ...props }: Omit<IZoomInputProps, 'onChange'>): import("react").JSX.Element;
export declare function SlideFooter(): import("react").JSX.Element | null;
