export declare const SLIDE_RULER_SIZE = 14;
export declare const SLIDE_RULER_MAJOR_STEP = 120;
export declare const SLIDE_RULER_MINOR_DIVISIONS = 4;
export type SlideRulerAxis = 'horizontal' | 'vertical';
export interface ISlideRulerGeometryInput {
    containerWidth: number;
    containerHeight: number;
    pageWidth: number;
    pageHeight: number;
    pageScale: number;
    pageOffsetLeft: number;
    pageOffsetTop: number;
    viewportScrollX: number;
    viewportScrollY: number;
}
export interface ISlideRulerGeometry {
    width: number;
    height: number;
    originX: number;
    originY: number;
    pageScale: number;
}
export interface ISlideRulerPageFrameInput {
    containerOffsetLeft: number;
    containerOffsetTop: number;
    pageLeft: number;
    pageTop: number;
    pageWidth: number;
    pageHeight: number;
    pageScale: number;
    pageScaleX?: number;
    pageScaleY?: number;
    viewportScrollX: number;
    viewportScrollY: number;
}
export interface ISlideRulerPageFrame {
    originX: number;
    originY: number;
    pageLeft: number;
    pageTop: number;
    pageWidth: number;
    pageHeight: number;
}
export interface ISlideRulerTickInput {
    axis: SlideRulerAxis;
    length: number;
    origin: number;
    scale: number;
    majorStep: number;
    minorDivisions: number;
}
export interface ISlideRulerTick {
    position: number;
    value: number;
    label: string;
    major: boolean;
}
export declare function resolveSlideRulerGeometry(input: ISlideRulerGeometryInput): ISlideRulerGeometry;
export declare function resolveSlideRulerPageFrame(input: ISlideRulerPageFrameInput): ISlideRulerPageFrame;
export declare function buildSlideRulerTicks(input: ISlideRulerTickInput): ISlideRulerTick[];
