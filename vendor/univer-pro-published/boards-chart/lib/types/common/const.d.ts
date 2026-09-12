import { ShapeLineTypeEnum } from '@univerjs-pro/engine-shape';
export declare const BOARD_CHART_PLUGIN_NAME = "BOARD_CHART_PLUGIN";
export declare const DEFAULT_BOARD_CHART_ELEMENT_WIDTH = 480;
export declare const DEFAULT_BOARD_CHART_ELEMENT_HEIGHT = 320;
export declare const DEFAULT_BOARD_CHART_ELEMENT_ROTATION = 0;
export declare const DEFAULT_BOARD_CHART_VALUES: (string | number)[][];
/** Excel-style path columns followed by one numeric value column. */
export declare const DEFAULT_BOARD_TREEMAP_VALUES: import("@univerjs-pro/engine-chart/chart-builder/chart-starter-data.js").ChartStarterCellValue[][];
/** Excel-style Sunburst path columns followed by one numeric value column. */
export declare const DEFAULT_BOARD_SUNBURST_VALUES: import("@univerjs-pro/engine-chart/chart-builder/chart-starter-data.js").ChartStarterCellValue[][];
export declare const DEFAULT_BOARD_GAUGE_VALUES: import("@univerjs-pro/engine-chart/chart-builder/chart-starter-data.js").ChartStarterCellValue[][];
export declare const DEFAULT_BOARD_CHORD_VALUES: import("@univerjs-pro/engine-chart/chart-builder/chart-starter-data.js").ChartStarterCellValue[][];
export declare const DEFAULT_BOARD_CHART_STROKE: {
    readonly lineStrokeType: ShapeLineTypeEnum.SolidLine;
    readonly width: 1;
    readonly color: "#d1d5db";
    readonly opacity: 1;
};
