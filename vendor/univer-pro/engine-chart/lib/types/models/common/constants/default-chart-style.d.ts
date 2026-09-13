import type { ChartStyle, IChartGaugeSpec } from '../../../types';
import { AreaLineStyle, AxisAlignEnum, BarShape, ChartBorderDashType, ChartTypeBits, InvalidValueType, LabelContentType, LegendPositionEnum, LinePointShape, PieLabelPosition, RadarShape, SelectModeEnum, SeriesLabelPosition, TextAlign, TitlePositionEnum, WaterfallStackTypeEnum, WordCloudShapeEnum } from '../../../enum';
export declare const MODERN_GAUGE_STYLE: {
    readonly mode: "modern";
    readonly scale: {
        readonly min: 0;
        readonly max: 100;
        readonly splitNumber: 5;
    };
    readonly angles: {
        readonly startAngle: 225;
        readonly endAngle: -45;
    };
    readonly ranges: [];
    readonly axisLine: {
        readonly visible: true;
        readonly width: 18;
        readonly color: "gray.300";
    };
    readonly axisTick: {
        readonly visible: false;
        readonly splitNumber: 2;
        readonly length: 5;
        readonly width: 1;
        readonly color: "gray.700";
    };
    readonly splitLine: {
        readonly visible: false;
        readonly length: 8;
        readonly width: 2;
        readonly color: "gray.700";
    };
    readonly axisLabel: {
        readonly visible: false;
        readonly distance: 12;
        readonly color: "gray.700";
        readonly fontSize: 12;
        readonly bold: false;
        readonly italic: false;
        readonly family: "Arial";
    };
    readonly pointer: {
        readonly visible: true;
        readonly length: 0.62;
        readonly width: 5;
        readonly color: "blue.500";
        readonly shape: "needle";
    };
    readonly anchor: {
        readonly visible: false;
        readonly size: 8;
        readonly color: "#FFFFFF";
        readonly borderColor: "blue.500";
        readonly borderWidth: 2;
    };
    readonly progress: {
        readonly visible: true;
        readonly width: 18;
        readonly color: "blue.500";
        readonly rounded: true;
    };
    readonly title: {
        readonly visible: true;
        readonly offsetY: 0.95;
        readonly color: "gray.700";
        readonly fontSize: 12;
        readonly bold: false;
        readonly italic: false;
        readonly family: "Arial";
    };
    readonly detail: {
        readonly visible: true;
        readonly offsetY: 0.65;
        readonly color: "gray.700";
        readonly fontSize: 14;
        readonly bold: true;
        readonly italic: false;
        readonly family: "Arial";
    };
};
export declare const CLASSIC_GAUGE_STYLE: {
    readonly mode: "classic";
    readonly scale: {
        readonly min: 0;
        readonly max: 100;
        readonly splitNumber: 5;
    };
    readonly angles: {
        readonly startAngle: 225;
        readonly endAngle: -45;
    };
    readonly ranges: [];
    readonly axisLine: {
        readonly visible: true;
        readonly width: 8;
        readonly color: "gray.300";
    };
    readonly axisTick: {
        readonly visible: true;
        readonly splitNumber: 5;
        readonly length: 8;
        readonly width: 1;
        readonly color: "gray.700";
    };
    readonly splitLine: {
        readonly visible: true;
        readonly length: 12;
        readonly width: 2;
        readonly color: "gray.700";
    };
    readonly axisLabel: {
        readonly visible: true;
        readonly distance: 12;
        readonly color: "gray.700";
        readonly fontSize: 12;
        readonly bold: false;
        readonly italic: false;
        readonly family: "Arial";
    };
    readonly pointer: {
        readonly visible: true;
        readonly length: 0.62;
        readonly width: 5;
        readonly color: "blue.500";
        readonly shape: "needle";
    };
    readonly anchor: {
        readonly visible: true;
        readonly size: 8;
        readonly color: "#FFFFFF";
        readonly borderColor: "blue.500";
        readonly borderWidth: 2;
    };
    readonly progress: {
        readonly visible: true;
        readonly width: 8;
        readonly color: "blue.500";
        readonly rounded: false;
    };
    readonly title: {
        readonly visible: true;
        readonly offsetY: 0.95;
        readonly color: "gray.700";
        readonly fontSize: 12;
        readonly bold: false;
        readonly italic: false;
        readonly family: "Arial";
    };
    readonly detail: {
        readonly visible: true;
        readonly offsetY: 0.65;
        readonly color: "gray.700";
        readonly fontSize: 14;
        readonly bold: true;
        readonly italic: false;
        readonly family: "Arial";
    };
};
export declare const STATUS_DIAL_GAUGE_STYLE: {
    readonly scale: {
        readonly splitNumber: 2;
        readonly min: 0;
        readonly max: 100;
    };
    readonly axisLine: {
        readonly width: 10;
        readonly visible: true;
        readonly color: "gray.300";
    };
    readonly splitLine: {
        readonly visible: true;
        readonly length: 8;
        readonly width: 2;
        readonly color: "gray.700";
    };
    readonly axisLabel: {
        readonly visible: true;
        readonly distance: 12;
        readonly color: "gray.700";
        readonly fontSize: 12;
        readonly bold: false;
        readonly italic: false;
        readonly family: "Arial";
    };
    readonly pointer: {
        readonly visible: true;
        readonly length: 0.62;
        readonly width: 5;
        readonly color: "blue.500";
        readonly shape: "needle";
    };
    readonly anchor: {
        readonly visible: true;
        readonly size: 8;
        readonly color: "#FFFFFF";
        readonly borderColor: "blue.500";
        readonly borderWidth: 2;
    };
    readonly progress: {
        readonly visible: true;
        readonly width: 18;
        readonly color: "blue.500";
        readonly rounded: true;
    };
    readonly title: {
        readonly offsetY: 0.95;
        readonly visible: true;
        readonly color: "gray.700";
        readonly fontSize: 12;
        readonly bold: false;
        readonly italic: false;
        readonly family: "Arial";
    };
    readonly detail: {
        readonly offsetY: 0.65;
        readonly visible: true;
        readonly color: "gray.700";
        readonly fontSize: 14;
        readonly bold: true;
        readonly italic: false;
        readonly family: "Arial";
    };
    readonly mode: "modern";
    readonly angles: {
        readonly startAngle: 225;
        readonly endAngle: -45;
    };
    readonly ranges: [];
    readonly axisTick: {
        readonly visible: false;
        readonly splitNumber: 2;
        readonly length: 5;
        readonly width: 1;
        readonly color: "gray.700";
    };
};
export declare const PROGRESS_GAUGE_STYLE: {
    readonly axisTick: {
        readonly visible: false;
    };
    readonly splitLine: {
        readonly visible: false;
    };
    readonly axisLabel: {
        readonly visible: false;
    };
    readonly pointer: {
        readonly visible: false;
    };
    readonly anchor: {
        readonly visible: false;
    };
    readonly progress: {
        readonly visible: true;
        readonly width: 14;
        readonly rounded: true;
    };
    readonly mode: "modern";
    readonly scale: {
        readonly min: 0;
        readonly max: 100;
        readonly splitNumber: 5;
    };
    readonly angles: {
        readonly startAngle: 225;
        readonly endAngle: -45;
    };
    readonly ranges: [];
    readonly axisLine: {
        readonly visible: true;
        readonly width: 18;
        readonly color: "gray.300";
    };
    readonly title: {
        readonly visible: true;
        readonly offsetY: 0.95;
        readonly color: "gray.700";
        readonly fontSize: 12;
        readonly bold: false;
        readonly italic: false;
        readonly family: "Arial";
    };
    readonly detail: {
        readonly visible: true;
        readonly offsetY: 0.65;
        readonly color: "gray.700";
        readonly fontSize: 14;
        readonly bold: true;
        readonly italic: false;
        readonly family: "Arial";
    };
};
export declare const MINIMAL_GAUGE_STYLE: {
    readonly axisTick: {
        readonly visible: false;
    };
    readonly splitLine: {
        readonly visible: false;
    };
    readonly axisLabel: {
        readonly visible: false;
    };
    readonly pointer: {
        readonly visible: true;
    };
    readonly anchor: {
        readonly visible: false;
    };
    readonly progress: {
        readonly visible: false;
    };
    readonly title: {
        readonly visible: true;
    };
    readonly mode: "modern";
    readonly scale: {
        readonly min: 0;
        readonly max: 100;
        readonly splitNumber: 5;
    };
    readonly angles: {
        readonly startAngle: 225;
        readonly endAngle: -45;
    };
    readonly ranges: [];
    readonly axisLine: {
        readonly visible: true;
        readonly width: 18;
        readonly color: "gray.300";
    };
    readonly detail: {
        readonly visible: true;
        readonly offsetY: 0.65;
        readonly color: "gray.700";
        readonly fontSize: 14;
        readonly bold: true;
        readonly italic: false;
        readonly family: "Arial";
    };
};
export declare const GAUGE_STYLE_TEMPLATES: {
    readonly modern: {
        readonly mode: "modern";
        readonly scale: {
            readonly min: 0;
            readonly max: 100;
            readonly splitNumber: 5;
        };
        readonly angles: {
            readonly startAngle: 225;
            readonly endAngle: -45;
        };
        readonly ranges: [];
        readonly axisLine: {
            readonly visible: true;
            readonly width: 18;
            readonly color: "gray.300";
        };
        readonly axisTick: {
            readonly visible: false;
            readonly splitNumber: 2;
            readonly length: 5;
            readonly width: 1;
            readonly color: "gray.700";
        };
        readonly splitLine: {
            readonly visible: false;
            readonly length: 8;
            readonly width: 2;
            readonly color: "gray.700";
        };
        readonly axisLabel: {
            readonly visible: false;
            readonly distance: 12;
            readonly color: "gray.700";
            readonly fontSize: 12;
            readonly bold: false;
            readonly italic: false;
            readonly family: "Arial";
        };
        readonly pointer: {
            readonly visible: true;
            readonly length: 0.62;
            readonly width: 5;
            readonly color: "blue.500";
            readonly shape: "needle";
        };
        readonly anchor: {
            readonly visible: false;
            readonly size: 8;
            readonly color: "#FFFFFF";
            readonly borderColor: "blue.500";
            readonly borderWidth: 2;
        };
        readonly progress: {
            readonly visible: true;
            readonly width: 18;
            readonly color: "blue.500";
            readonly rounded: true;
        };
        readonly title: {
            readonly visible: true;
            readonly offsetY: 0.95;
            readonly color: "gray.700";
            readonly fontSize: 12;
            readonly bold: false;
            readonly italic: false;
            readonly family: "Arial";
        };
        readonly detail: {
            readonly visible: true;
            readonly offsetY: 0.65;
            readonly color: "gray.700";
            readonly fontSize: 14;
            readonly bold: true;
            readonly italic: false;
            readonly family: "Arial";
        };
    };
    readonly classic: {
        readonly mode: "classic";
        readonly scale: {
            readonly min: 0;
            readonly max: 100;
            readonly splitNumber: 5;
        };
        readonly angles: {
            readonly startAngle: 225;
            readonly endAngle: -45;
        };
        readonly ranges: [];
        readonly axisLine: {
            readonly visible: true;
            readonly width: 8;
            readonly color: "gray.300";
        };
        readonly axisTick: {
            readonly visible: true;
            readonly splitNumber: 5;
            readonly length: 8;
            readonly width: 1;
            readonly color: "gray.700";
        };
        readonly splitLine: {
            readonly visible: true;
            readonly length: 12;
            readonly width: 2;
            readonly color: "gray.700";
        };
        readonly axisLabel: {
            readonly visible: true;
            readonly distance: 12;
            readonly color: "gray.700";
            readonly fontSize: 12;
            readonly bold: false;
            readonly italic: false;
            readonly family: "Arial";
        };
        readonly pointer: {
            readonly visible: true;
            readonly length: 0.62;
            readonly width: 5;
            readonly color: "blue.500";
            readonly shape: "needle";
        };
        readonly anchor: {
            readonly visible: true;
            readonly size: 8;
            readonly color: "#FFFFFF";
            readonly borderColor: "blue.500";
            readonly borderWidth: 2;
        };
        readonly progress: {
            readonly visible: true;
            readonly width: 8;
            readonly color: "blue.500";
            readonly rounded: false;
        };
        readonly title: {
            readonly visible: true;
            readonly offsetY: 0.95;
            readonly color: "gray.700";
            readonly fontSize: 12;
            readonly bold: false;
            readonly italic: false;
            readonly family: "Arial";
        };
        readonly detail: {
            readonly visible: true;
            readonly offsetY: 0.65;
            readonly color: "gray.700";
            readonly fontSize: 14;
            readonly bold: true;
            readonly italic: false;
            readonly family: "Arial";
        };
    };
    readonly progress: {
        readonly axisTick: {
            readonly visible: false;
        };
        readonly splitLine: {
            readonly visible: false;
        };
        readonly axisLabel: {
            readonly visible: false;
        };
        readonly pointer: {
            readonly visible: false;
        };
        readonly anchor: {
            readonly visible: false;
        };
        readonly progress: {
            readonly visible: true;
            readonly width: 14;
            readonly rounded: true;
        };
        readonly mode: "modern";
        readonly scale: {
            readonly min: 0;
            readonly max: 100;
            readonly splitNumber: 5;
        };
        readonly angles: {
            readonly startAngle: 225;
            readonly endAngle: -45;
        };
        readonly ranges: [];
        readonly axisLine: {
            readonly visible: true;
            readonly width: 18;
            readonly color: "gray.300";
        };
        readonly title: {
            readonly visible: true;
            readonly offsetY: 0.95;
            readonly color: "gray.700";
            readonly fontSize: 12;
            readonly bold: false;
            readonly italic: false;
            readonly family: "Arial";
        };
        readonly detail: {
            readonly visible: true;
            readonly offsetY: 0.65;
            readonly color: "gray.700";
            readonly fontSize: 14;
            readonly bold: true;
            readonly italic: false;
            readonly family: "Arial";
        };
    };
    readonly minimal: {
        readonly axisTick: {
            readonly visible: false;
        };
        readonly splitLine: {
            readonly visible: false;
        };
        readonly axisLabel: {
            readonly visible: false;
        };
        readonly pointer: {
            readonly visible: true;
        };
        readonly anchor: {
            readonly visible: false;
        };
        readonly progress: {
            readonly visible: false;
        };
        readonly title: {
            readonly visible: true;
        };
        readonly mode: "modern";
        readonly scale: {
            readonly min: 0;
            readonly max: 100;
            readonly splitNumber: 5;
        };
        readonly angles: {
            readonly startAngle: 225;
            readonly endAngle: -45;
        };
        readonly ranges: [];
        readonly axisLine: {
            readonly visible: true;
            readonly width: 18;
            readonly color: "gray.300";
        };
        readonly detail: {
            readonly visible: true;
            readonly offsetY: 0.65;
            readonly color: "gray.700";
            readonly fontSize: 14;
            readonly bold: true;
            readonly italic: false;
            readonly family: "Arial";
        };
    };
};
/** Resolves the semantic Gauge visual language without persisting its defaults. */
export declare function resolveGaugeStyle(authored: IChartGaugeSpec | undefined): IChartGaugeSpec;
export declare const RTLChartStyle: ChartStyle;
export declare const defaultChartConfig: {
    allSeriesId: string;
    invalidValueType: InvalidValueType;
    point: {
        shape: LinePointShape;
        size: number;
        scatterSymbolSize: number;
    };
    backgroundColor: string;
    axis: {
        lineVisible: boolean;
        labelVisible: boolean;
        reverse: boolean;
        titleAlign: AxisAlignEnum;
        dateAxisRotate: number;
    };
    legend: {
        hiddenByDefaultChartTypes: ChartTypeBits[];
        position: LegendPositionEnum;
        selectMode: SelectModeEnum;
    };
    borderStyle: {
        opacity: number;
        width: number;
        specialChartWidthMap: {
            lineOrArea: number;
            radar: number;
        };
        dashType: ChartBorderDashType;
    };
    textStyle: {
        fontSize: number;
        subTitleFontSize: number;
        titleFontSize: number;
        color: string;
        align: string;
        position: SeriesLabelPosition;
        bold: boolean;
        family: string;
        italic: boolean;
    };
    titlePosition: TitlePositionEnum;
    titlePositionAlign: TextAlign;
    titleFontSize: number;
    area: {
        lineStyle: AreaLineStyle;
    };
    bar: {
        is3D: boolean;
        shape: BarShape;
        rotX: number;
        rotY: number;
    };
    bubble: {
        scale: number;
        sizeRepresents: string;
    };
    labelContentType: LabelContentType;
    pie: {
        labelContentType: number;
        showLabelLine: boolean;
        valueScale: number;
        radius: number;
        doughnutHole: number;
        borderColor: string;
        labelPosition: PieLabelPosition;
        hasPaddingAngle: boolean;
        is3D: boolean;
    };
    combination: {
        firstChartType: ChartTypeBits;
        otherChartType: ChartTypeBits;
    };
    funnel: {
        gap: number;
    };
    radar: {
        shape: RadarShape;
        symbolSize: number;
        symbolType: LinePointShape;
        areaOpacity: number;
    };
    wordCloud: {
        shape: WordCloudShapeEnum;
        repeat: boolean;
    };
    waterfall: {
        stackType: WaterfallStackTypeEnum;
        useSubtotal: boolean;
        pointRoles: never[];
        connector: boolean;
        connectorStyle: {
            color: string;
            width: number;
            opacity: number;
            dashType: ChartBorderDashType;
        };
        subtotalColor: string;
    };
    trendline: {
        period: number;
        order: number;
        opacity: number;
        width: number;
        dashType: ChartBorderDashType;
        color: string;
        showFormula: boolean;
        showR2: boolean;
    };
    semanticLine: {
        width: number;
        opacity: number;
        dashType: ChartBorderDashType;
    };
    relation: {
        force: {
            gravity: number;
            repulsion: number;
        };
        circular: {
            rotateLabel: boolean;
        };
        emphasis: boolean;
        nodeShape: LinePointShape;
        useValueAsSymbolSize: boolean;
    };
    tooltipAxisLabelBackground: string;
    tooltipAxisLabelColor: string;
    indicatorLineType: ChartBorderDashType;
    formatStyle: {
        red: {
            color: string;
        };
    };
    pareto: {
        symbolSize: number;
        barThemeColorIndex: number;
        lineThemeColorIndex: number;
    };
    heatmap: {
        visualMapType: string;
    };
    candlestick: {
        rising: {
            color: string;
            fillOpacity: number;
            border: {
                color: string;
                width: number;
                opacity: number;
            };
            hollow: boolean;
        };
        falling: {
            color: string;
            fillOpacity: number;
            border: {
                color: string;
                width: number;
                opacity: number;
            };
            hollow: boolean;
        };
        doji: {
            color: string;
            fillOpacity: number;
            border: {
                color: string;
                width: number;
                opacity: number;
            };
            hollow: boolean;
        };
    };
    histogram: {
        binGap: number;
        legendVisible: boolean;
    };
    treemap: {
        parentLabelLayout: "banner";
        label: {
            visible: boolean;
            contentType: LabelContentType;
            fontSize: number;
        };
    };
    sunburst: {
        centerLabel: {
            visible: boolean;
            fontSize: number;
            bold: boolean;
            italic: boolean;
        };
        label: {
            visible: boolean;
            contentType: LabelContentType;
            fontSize: number;
        };
    };
    gauge: {
        readonly mode: "classic";
        readonly scale: {
            readonly min: 0;
            readonly max: 100;
            readonly splitNumber: 5;
        };
        readonly angles: {
            readonly startAngle: 225;
            readonly endAngle: -45;
        };
        readonly ranges: [];
        readonly axisLine: {
            readonly visible: true;
            readonly width: 8;
            readonly color: "gray.300";
        };
        readonly axisTick: {
            readonly visible: true;
            readonly splitNumber: 5;
            readonly length: 8;
            readonly width: 1;
            readonly color: "gray.700";
        };
        readonly splitLine: {
            readonly visible: true;
            readonly length: 12;
            readonly width: 2;
            readonly color: "gray.700";
        };
        readonly axisLabel: {
            readonly visible: true;
            readonly distance: 12;
            readonly color: "gray.700";
            readonly fontSize: 12;
            readonly bold: false;
            readonly italic: false;
            readonly family: "Arial";
        };
        readonly pointer: {
            readonly visible: true;
            readonly length: 0.62;
            readonly width: 5;
            readonly color: "blue.500";
            readonly shape: "needle";
        };
        readonly anchor: {
            readonly visible: true;
            readonly size: 8;
            readonly color: "#FFFFFF";
            readonly borderColor: "blue.500";
            readonly borderWidth: 2;
        };
        readonly progress: {
            readonly visible: true;
            readonly width: 8;
            readonly color: "blue.500";
            readonly rounded: false;
        };
        readonly title: {
            readonly visible: true;
            readonly offsetY: 0.95;
            readonly color: "gray.700";
            readonly fontSize: 12;
            readonly bold: false;
            readonly italic: false;
            readonly family: "Arial";
        };
        readonly detail: {
            readonly visible: true;
            readonly offsetY: 0.65;
            readonly color: "gray.700";
            readonly fontSize: 14;
            readonly bold: true;
            readonly italic: false;
            readonly family: "Arial";
        };
    };
    chord: {
        layout: {
            startAngle: number;
            clockwise: boolean;
            padAngle: number;
            minAngle: number;
            innerRadiusRatio: number;
            outerRadiusRatio: number;
        };
        node: {
            opacity: number;
            borderColor: string;
            borderWidth: number;
            borderType: ChartBorderDashType;
        };
        label: {
            visible: boolean;
            position: "outside";
            rotation: number;
            distance: number;
            color: string;
            fontSize: number;
            bold: boolean;
            italic: boolean;
            family: string;
        };
        ribbon: {
            color: "gradient";
            opacity: number;
            width: number;
            type: ChartBorderDashType;
        };
        emphasis: {
            focus: "adjacency";
        };
        legendVisible: boolean;
    };
};
