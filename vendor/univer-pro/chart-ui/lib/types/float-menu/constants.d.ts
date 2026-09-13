import { AxisAlignEnum, LegendPositionEnum, PieLabelPosition, SelectModeEnum, TitlePositionEnum } from '@univerjs-pro/engine-chart';
import { ChartViewStateKey } from '../services/chart-view-state';
export declare const CHART_ELEMENT_FLOAT_MENU_COMPONENT = "chart.element.float-menu";
export declare const CHART_ELEMENT_FLOAT_MENU_OFFSET: [number, number];
export declare const CHART_ELEMENT_FLOAT_MENU_EMPTY_VALUE = "";
export declare const CHART_ELEMENT_FLOAT_MENU_DEFAULT_LABEL_ROTATE_DEGREES = 0;
export declare const CHART_ELEMENT_FLOAT_MENU_LABEL_ROTATE_DEGREES: readonly [0, 30, 45, 60, 90];
export declare const CHART_ELEMENT_FLOAT_MENU_OPACITY_OPTIONS: readonly [1, 0.9, 0.7, 0.5, 0.3, 0.2, 0.1, 0];
export declare const CHART_ELEMENT_FLOAT_MENU_VISUAL_MAP_TYPES: {
    readonly CONTINUOUS: "continuous";
    readonly PIECEWISE: "piecewise";
};
export declare const CHART_ELEMENT_FLOAT_MENU_STATE_KEYS: {
    readonly TITLE: ChartViewStateKey.Title;
    readonly SUBTITLE: ChartViewStateKey.Subtitle;
    readonly LEGEND: ChartViewStateKey.Legend;
    readonly PIE: ChartViewStateKey.Pie;
    readonly SERIES: ChartViewStateKey.Series;
    readonly PARETO: ChartViewStateKey.Pareto;
    readonly AXES: ChartViewStateKey.Axes;
};
export declare const CHART_ELEMENT_FLOAT_MENU_LOCALE_KEYS: {
    readonly MENU_TITLE: {
        readonly CHART: "chart-ui.floatMenu.menuTitle.chart";
        readonly CHART_TITLE: "chart-ui.common.chartTitle";
        readonly SUBTITLE: "chart-ui.common.subtitle";
        readonly AXIS_TITLE: "chart-ui.floatMenu.menuTitle.axisTitle";
        readonly LEGEND: "chart-ui.common.legend";
        readonly HORIZONTAL_AXIS: "chart-ui.common.horizontalAxis";
        readonly VERTICAL_AXIS: "chart-ui.common.verticalAxis";
        readonly RIGHT_VERTICAL_AXIS: "chart-ui.common.rightVerticalAxis";
        readonly GRIDLINE: "chart-ui.floatMenu.menuTitle.gridline";
        readonly TICK: "chart-ui.floatMenu.menuTitle.tick";
        readonly MARK: "chart-ui.floatMenu.menuTitle.mark";
        readonly SERIES: "chart-ui.common.series";
        readonly DATA_POINT: "chart-ui.common.dataPoint";
        readonly DATA_LABEL: "chart-ui.floatMenu.menuTitle.dataLabel";
    };
    readonly FIELD: {
        readonly TITLE: "chart-ui.common.title";
        readonly SUBTITLE: "chart-ui.common.subtitle";
        readonly POSITION: "chart-ui.floatMenu.field.position";
        readonly SIZE: "chart-ui.floatMenu.field.size";
        readonly ALIGN: "chart-ui.floatMenu.field.align";
        readonly MODE: "chart-ui.common.mode";
        readonly MAP: "chart-ui.floatMenu.field.map";
        readonly ROTATE: "chart-ui.floatMenu.field.rotate";
        readonly MIN: "chart-ui.common.min";
        readonly MAX: "chart-ui.common.max";
        readonly COLOR: "chart-ui.common.color";
        readonly BORDER_COLOR: "chart-ui.common.borderColor";
        readonly OPACITY: "chart-ui.common.opacity";
        readonly LABEL_POSITION: "chart-ui.common.labelPosition";
        readonly LABEL_TEXT: "chart-ui.floatMenu.field.labelText";
        readonly TITLE_TEXT: "chart-ui.floatMenu.field.titleText";
    };
    readonly ACTION: {
        readonly MORE: "chart-ui.floatMenu.action.more";
        readonly BOLD: "chart-ui.common.bold";
        readonly ITALIC: "chart-ui.common.italic";
    };
    readonly CONTROL: {
        readonly LABELS: "chart-ui.floatMenu.control.labels";
        readonly LINE: "chart-ui.floatMenu.control.line";
        readonly REVERSE: "chart-ui.floatMenu.control.reverse";
        readonly DATE: "chart-ui.common.date";
    };
    readonly OPTION: {
        readonly TEXT_ALIGN: {
            readonly LEFT: "chart-ui.common.textAlign.left";
            readonly CENTER: "chart-ui.common.textAlign.center";
            readonly RIGHT: "chart-ui.common.textAlign.right";
        };
        readonly POSITION: {
            readonly TOP: "chart-ui.common.position.top";
            readonly BOTTOM: "chart-ui.common.position.bottom";
            readonly LEFT: "chart-ui.common.position.left";
            readonly RIGHT: "chart-ui.common.position.right";
            readonly HIDE: "chart-ui.common.position.hide";
            readonly INSIDE: "chart-ui.common.position.inside";
            readonly OUTSIDE: "chart-ui.common.position.outside";
        };
        readonly LABEL_TEXT: {
            readonly CATEGORY: "chart-ui.common.category";
            readonly VALUE: "chart-ui.common.value";
            readonly PERCENTAGE: "chart-ui.common.percentage";
        };
        readonly AXIS_ALIGN: {
            readonly START: "chart-ui.common.axisAlign.start";
            readonly CENTER: "chart-ui.common.axisAlign.center";
            readonly END: "chart-ui.common.axisAlign.end";
        };
        readonly LEGEND_SELECT_MODE: {
            readonly SINGLE: "chart-ui.common.legendSelectMode.single";
            readonly MULTIPLE: "chart-ui.common.legendSelectMode.multiple";
            readonly CLOSE: "chart-ui.common.legendSelectMode.disabled";
        };
        readonly VISUAL_MAP_TYPE: {
            readonly CONTINUOUS: "chart-ui.common.visualMapType.continuous";
            readonly PIECEWISE: "chart-ui.common.visualMapType.piecewise";
        };
    };
};
export declare const CHART_ELEMENT_FLOAT_MENU_TITLE_POSITION_OPTION_DEFINITIONS: readonly [{
    readonly labelKey: "chart-ui.common.position.top";
    readonly value: TitlePositionEnum.Top;
}, {
    readonly labelKey: "chart-ui.common.position.bottom";
    readonly value: TitlePositionEnum.Bottom;
}, {
    readonly labelKey: "chart-ui.common.position.left";
    readonly value: TitlePositionEnum.Left;
}, {
    readonly labelKey: "chart-ui.common.position.right";
    readonly value: TitlePositionEnum.Right;
}, {
    readonly labelKey: "chart-ui.common.position.hide";
    readonly value: TitlePositionEnum.Hide;
}];
export declare const CHART_ELEMENT_FLOAT_MENU_PIE_LABEL_POSITION_OPTION_DEFINITIONS: readonly [{
    readonly labelKey: "chart-ui.common.position.inside";
    readonly value: PieLabelPosition.Inside;
}, {
    readonly labelKey: "chart-ui.common.position.outside";
    readonly value: PieLabelPosition.Outside;
}];
export declare const CHART_ELEMENT_FLOAT_MENU_PIE_LABEL_TEXT_OPTION_DEFINITIONS: readonly [{
    readonly labelKey: "chart-ui.common.category";
    readonly value: string;
}, {
    readonly labelKey: "chart-ui.common.value";
    readonly value: string;
}, {
    readonly labelKey: "chart-ui.common.percentage";
    readonly value: string;
}];
export declare const CHART_ELEMENT_FLOAT_MENU_AXIS_TITLE_ALIGN_OPTION_DEFINITIONS: readonly [{
    readonly labelKey: "chart-ui.common.axisAlign.start";
    readonly value: AxisAlignEnum.Start;
}, {
    readonly labelKey: "chart-ui.common.axisAlign.center";
    readonly value: AxisAlignEnum.Center;
}, {
    readonly labelKey: "chart-ui.common.axisAlign.end";
    readonly value: AxisAlignEnum.End;
}];
export declare const CHART_ELEMENT_FLOAT_MENU_LEGEND_POSITION_OPTION_DEFINITIONS: readonly [{
    readonly labelKey: "chart-ui.common.position.top";
    readonly value: LegendPositionEnum.Top;
}, {
    readonly labelKey: "chart-ui.common.position.bottom";
    readonly value: LegendPositionEnum.Bottom;
}, {
    readonly labelKey: "chart-ui.common.position.left";
    readonly value: LegendPositionEnum.Left;
}, {
    readonly labelKey: "chart-ui.common.position.right";
    readonly value: LegendPositionEnum.Right;
}, {
    readonly labelKey: "chart-ui.common.position.hide";
    readonly value: LegendPositionEnum.Hide;
}];
export declare const CHART_ELEMENT_FLOAT_MENU_LEGEND_SELECT_MODE_OPTION_DEFINITIONS: readonly [{
    readonly labelKey: "chart-ui.common.legendSelectMode.single";
    readonly value: SelectModeEnum.Single;
}, {
    readonly labelKey: "chart-ui.common.legendSelectMode.multiple";
    readonly value: SelectModeEnum.Multiple;
}, {
    readonly labelKey: "chart-ui.common.legendSelectMode.disabled";
    readonly value: SelectModeEnum.Close;
}];
export declare const CHART_ELEMENT_FLOAT_MENU_VISUAL_MAP_TYPE_OPTION_DEFINITIONS: readonly [{
    readonly labelKey: "chart-ui.common.visualMapType.continuous";
    readonly value: "continuous";
}, {
    readonly labelKey: "chart-ui.common.visualMapType.piecewise";
    readonly value: "piecewise";
}];
