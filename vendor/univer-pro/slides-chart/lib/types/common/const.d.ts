import { ShapeLineTypeEnum } from '@univerjs-pro/engine-shape';
export declare const SLIDE_CHART_PLUGIN_NAME = "SLIDE_CHART_PLUGIN";
export declare const DEFAULT_SLIDE_CHART_ELEMENT_LEFT = 120;
export declare const DEFAULT_SLIDE_CHART_ELEMENT_TOP = 80;
export declare const DEFAULT_SLIDE_CHART_ELEMENT_WIDTH = 480;
export declare const DEFAULT_SLIDE_CHART_ELEMENT_HEIGHT = 320;
export declare const DEFAULT_SLIDE_CHART_ELEMENT_ROTATION = 0;
export declare const DEFAULT_SLIDE_CHART_VALUES: readonly [readonly ["Category", "Value"], readonly ["A", 12], readonly ["B", 18], readonly ["C", 9]];
/** Default drawing stroke for chart image frames. */
export declare const DEFAULT_SLIDE_CHART_STROKE: {
    readonly lineStrokeType: ShapeLineTypeEnum.SolidLine;
    readonly width: 1;
    readonly color: "#d1d5db";
    readonly opacity: 1;
};
