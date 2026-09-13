import type { Injector } from '@univerjs/core';
import type { Observable, Subscription } from 'rxjs';
import type { IChartDataAggregation } from '../../chart-data-aggregation';
import type { ChartDirection, ChartStyle, IChartConfig, IChartContext, IChartDataSource, IChartRuntimeContext, IChartSnapshot, IChartSnapshotContext } from '../../types';
import type { IChartRuntimeAdaptiveSize } from '../common/adaptive-size/chart-runtime-adaptive-size';
import { Disposable } from '@univerjs/core';
import { BehaviorSubject } from 'rxjs';
import { ChartTypeBits } from '../../enum';
import { ChartThemeService } from '../common/theme/chart-theme.service';
export interface IChartModelInit {
    chartType?: ChartTypeBits;
    dataSource: IChartDataSource;
    dataAggregation?: IChartDataAggregation;
    context?: IChartSnapshotContext;
    style?: ChartStyle;
}
export declare class ChartModel extends Disposable {
    readonly id: string;
    private _injector;
    private readonly _localeTexts;
    private readonly _runtimeAdaptiveSizeState;
    private readonly _updateAdaptiveSizeFromDomRender;
    readonly runtimeAdaptiveSize$: Observable<IChartRuntimeAdaptiveSize>;
    get runtimeAdaptiveSize(): IChartRuntimeAdaptiveSize;
    protected readonly _dataSource$: BehaviorSubject<IChartDataSource>;
    readonly dataSource$: Observable<IChartDataSource>;
    get dataSource(): IChartDataSource;
    /** chart data source config */
    protected _dataAggregation$: BehaviorSubject<IChartDataAggregation>;
    readonly dataAggregation$: Observable<IChartDataAggregation>;
    get dataAggregation(): IChartDataAggregation;
    /** chart type */
    protected _chartType$: BehaviorSubject<ChartTypeBits>;
    readonly chartType$: Observable<ChartTypeBits>;
    get chartType(): ChartTypeBits;
    /** chart data config */
    protected _context$: BehaviorSubject<IChartContext>;
    readonly context$: Observable<IChartContext>;
    get context(): IChartContext;
    /** chart config, the output of chat model */
    protected _config$: BehaviorSubject<IChartConfig | null>;
    readonly config$: Observable<IChartConfig | null>;
    /** chart style config */
    protected _style$: BehaviorSubject<{
        width?: number | undefined;
        height?: number | undefined;
        theme?: string | undefined;
        palette?: string[] | undefined;
        invalidValueType?: import("../..").InvalidValueType | undefined;
        gradientFill?: boolean | undefined;
        backgroundColor?: import("@univerjs/core").Nullable<string>;
        titleFontSize?: number | undefined;
        fontSize?: number | undefined;
        fontColor?: string | undefined;
        fontFamily?: string | undefined;
        borderColor?: import("@univerjs/core").Nullable<string>;
        borderWidth?: number | undefined;
        plotArea?: {
            left?: number | undefined;
            top?: number | undefined;
            width?: number | undefined;
            height?: number | undefined;
        } | undefined;
        titles?: {
            title?: {
                manualLayout?: {
                    left?: number | undefined;
                    top?: number | undefined;
                } | undefined;
                bold?: boolean | undefined;
                italic?: boolean | undefined;
                fontSize?: number | undefined;
                color?: string | undefined;
                rotate?: number | undefined;
                family?: string | undefined;
                content?: string | undefined;
                align?: import("../..").LabelAlignEnum | undefined;
                strikethrough?: boolean | undefined;
                underline?: boolean | undefined;
                padAngle?: boolean | undefined;
                axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                showMaxLabel?: boolean | undefined;
                showMinLabel?: boolean | undefined;
            } | undefined;
            subtitle?: {
                manualLayout?: {
                    left?: number | undefined;
                    top?: number | undefined;
                } | undefined;
                bold?: boolean | undefined;
                italic?: boolean | undefined;
                fontSize?: number | undefined;
                color?: string | undefined;
                rotate?: number | undefined;
                family?: string | undefined;
                content?: string | undefined;
                align?: import("../..").LabelAlignEnum | undefined;
                strikethrough?: boolean | undefined;
                underline?: boolean | undefined;
                padAngle?: boolean | undefined;
                axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                showMaxLabel?: boolean | undefined;
                showMinLabel?: boolean | undefined;
            } | undefined;
            xAxisTitle?: {
                bold?: boolean | undefined;
                italic?: boolean | undefined;
                fontSize?: number | undefined;
                color?: string | undefined;
                rotate?: number | undefined;
                family?: string | undefined;
                content?: string | undefined;
                align?: import("../..").LabelAlignEnum | undefined;
                strikethrough?: boolean | undefined;
                underline?: boolean | undefined;
                padAngle?: boolean | undefined;
                axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                showMaxLabel?: boolean | undefined;
                showMinLabel?: boolean | undefined;
            } | undefined;
            yAxisTitle?: {
                bold?: boolean | undefined;
                italic?: boolean | undefined;
                fontSize?: number | undefined;
                color?: string | undefined;
                rotate?: number | undefined;
                family?: string | undefined;
                content?: string | undefined;
                align?: import("../..").LabelAlignEnum | undefined;
                strikethrough?: boolean | undefined;
                underline?: boolean | undefined;
                padAngle?: boolean | undefined;
                axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                showMaxLabel?: boolean | undefined;
                showMinLabel?: boolean | undefined;
            } | undefined;
            rightYAxisTitle?: {
                bold?: boolean | undefined;
                italic?: boolean | undefined;
                fontSize?: number | undefined;
                color?: string | undefined;
                rotate?: number | undefined;
                family?: string | undefined;
                content?: string | undefined;
                align?: import("../..").LabelAlignEnum | undefined;
                strikethrough?: boolean | undefined;
                underline?: boolean | undefined;
                padAngle?: boolean | undefined;
                axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                showMaxLabel?: boolean | undefined;
                showMinLabel?: boolean | undefined;
            } | undefined;
            titlePosition?: import("../..").TitlePositionEnum | undefined;
        } | undefined;
        legend?: {
            position?: import("../..").LegendPositionEnum | undefined;
            label?: {
                bold?: boolean | undefined;
                italic?: boolean | undefined;
                fontSize?: number | undefined;
                color?: string | undefined;
                rotate?: number | undefined;
                family?: string | undefined;
                strikethrough?: boolean | undefined;
                underline?: boolean | undefined;
                padAngle?: boolean | undefined;
                axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                showMaxLabel?: boolean | undefined;
                showMinLabel?: boolean | undefined;
            } | undefined;
            selectMode?: import("../..").SelectModeEnum | undefined;
            wrap?: boolean | undefined;
        } | undefined;
        xAxis?: {
            lineVisible?: boolean | undefined;
            label?: {
                bold?: boolean | undefined;
                italic?: boolean | undefined;
                fontSize?: number | undefined;
                color?: string | undefined;
                visible?: boolean | undefined;
                rotate?: number | undefined;
                family?: string | undefined;
                strikethrough?: boolean | undefined;
                underline?: boolean | undefined;
                padAngle?: boolean | undefined;
                axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                showMaxLabel?: boolean | undefined;
                showMinLabel?: boolean | undefined;
            } | undefined;
            lineStyle?: {
                visible?: boolean | undefined;
                color?: string | undefined;
                width?: number | undefined;
                dashType?: import("../..").ChartBorderDashType | undefined;
            } | undefined;
            gridLine?: {
                visible?: boolean | undefined;
                color?: string | undefined;
                width?: number | undefined;
                dashType?: import("../..").ChartBorderDashType | undefined;
            } | undefined;
            tick?: {
                visible?: boolean | undefined;
                lineWidth?: number | undefined;
                lineColor?: string | undefined;
                length?: number | undefined;
                position?: import("../..").PieLabelPosition | undefined;
            } | undefined;
            reverse?: boolean | undefined;
            min?: number | null | undefined;
            max?: number | null | undefined;
            format?: string | undefined;
        } | undefined;
        yAxis?: {
            lineVisible?: boolean | undefined;
            label?: {
                bold?: boolean | undefined;
                italic?: boolean | undefined;
                fontSize?: number | undefined;
                color?: string | undefined;
                visible?: boolean | undefined;
                rotate?: number | undefined;
                family?: string | undefined;
                strikethrough?: boolean | undefined;
                underline?: boolean | undefined;
                padAngle?: boolean | undefined;
                axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                showMaxLabel?: boolean | undefined;
                showMinLabel?: boolean | undefined;
            } | undefined;
            lineStyle?: {
                visible?: boolean | undefined;
                color?: string | undefined;
                width?: number | undefined;
                dashType?: import("../..").ChartBorderDashType | undefined;
            } | undefined;
            gridLine?: {
                visible?: boolean | undefined;
                color?: string | undefined;
                width?: number | undefined;
                dashType?: import("../..").ChartBorderDashType | undefined;
            } | undefined;
            tick?: {
                visible?: boolean | undefined;
                lineWidth?: number | undefined;
                lineColor?: string | undefined;
                length?: number | undefined;
                position?: import("../..").PieLabelPosition | undefined;
            } | undefined;
            reverse?: boolean | undefined;
            min?: number | null | undefined;
            max?: number | null | undefined;
            format?: string | undefined;
        } | undefined;
        rightYAxis?: {
            label?: {
                bold?: boolean | undefined;
                italic?: boolean | undefined;
                fontSize?: number | undefined;
                color?: string | undefined;
                visible?: boolean | undefined;
                rotate?: number | undefined;
                family?: string | undefined;
                strikethrough?: boolean | undefined;
                underline?: boolean | undefined;
                padAngle?: boolean | undefined;
                axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                showMaxLabel?: boolean | undefined;
                showMinLabel?: boolean | undefined;
            } | undefined;
            min?: number | null | undefined;
            max?: number | null | undefined;
            tick?: {
                visible?: boolean | undefined;
                lineWidth?: number | undefined;
                lineColor?: string | undefined;
                length?: number | undefined;
                position?: import("../..").PieLabelPosition | undefined;
            } | undefined;
            format?: string | undefined;
            gridLine?: {
                visible?: boolean | undefined;
                color?: string | undefined;
                width?: number | undefined;
                dashType?: import("../..").ChartBorderDashType | undefined;
            } | undefined;
            lineVisible?: boolean | undefined;
            lineStyle?: {
                visible?: boolean | undefined;
                color?: string | undefined;
                width?: number | undefined;
                dashType?: import("../..").ChartBorderDashType | undefined;
            } | undefined;
        } | undefined;
        allSeriesStyle?: {
            label?: {
                contentType?: number | undefined;
                position?: import("../..").SeriesLabelPosition | undefined;
                format?: string | undefined;
                customValues?: {
                    [x: number]: string | undefined;
                } | undefined;
                visible?: boolean | undefined;
                content?: string | undefined;
                fontSize?: number | undefined;
                color?: string | undefined;
                align?: import("../..").LabelAlignEnum | undefined;
                bold?: boolean | undefined;
                family?: string | undefined;
                strikethrough?: boolean | undefined;
                italic?: boolean | undefined;
                underline?: boolean | undefined;
                padAngle?: boolean | undefined;
                axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                showMaxLabel?: boolean | undefined;
                showMinLabel?: boolean | undefined;
                rotate?: number | undefined;
            } | undefined;
            color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
            point?: {
                shape?: import("../..").LinePointShape | undefined;
                size?: number | undefined;
                color?: import("@univerjs/core").Nullable<string>;
            } | undefined;
            waterfall?: {
                positive?: {
                    chartType?: (ChartTypeBits.Line | ChartTypeBits.Column | ChartTypeBits.ColumnStacked | ChartTypeBits.Area | ChartTypeBits.AreaStacked) | undefined;
                    rightYAxis?: boolean | undefined;
                    color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                    fillOpacity?: number | undefined;
                    border?: {
                        opacity?: number | undefined;
                        color?: import("@univerjs/core").Nullable<string>;
                        width?: number | undefined;
                        dashType?: import("../..").ChartBorderDashType | undefined;
                    } | undefined;
                    label?: {
                        contentType?: number | undefined;
                        position?: import("../..").SeriesLabelPosition | undefined;
                        format?: string | undefined;
                        customValues?: {
                            [x: number]: string | undefined;
                        } | undefined;
                        visible?: boolean | undefined;
                        content?: string | undefined;
                        fontSize?: number | undefined;
                        color?: string | undefined;
                        align?: import("../..").LabelAlignEnum | undefined;
                        bold?: boolean | undefined;
                        family?: string | undefined;
                        strikethrough?: boolean | undefined;
                        italic?: boolean | undefined;
                        underline?: boolean | undefined;
                        padAngle?: boolean | undefined;
                        axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                        showMaxLabel?: boolean | undefined;
                        showMinLabel?: boolean | undefined;
                        rotate?: number | undefined;
                    } | undefined;
                    point?: {
                        shape?: import("../..").LinePointShape | undefined;
                        size?: number | undefined;
                        color?: import("@univerjs/core").Nullable<string>;
                    } | undefined;
                    dataPoints?: {
                        [x: number]: {
                            color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                            fillOpacity?: number | undefined;
                            size?: number | undefined;
                            shape?: import("../..").LinePointShape | undefined;
                        } | undefined;
                    } | undefined;
                    waterfall?: /*elided*/ any | undefined;
                    name?: string | undefined;
                } | undefined;
                negative?: {
                    chartType?: (ChartTypeBits.Line | ChartTypeBits.Column | ChartTypeBits.ColumnStacked | ChartTypeBits.Area | ChartTypeBits.AreaStacked) | undefined;
                    rightYAxis?: boolean | undefined;
                    color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                    fillOpacity?: number | undefined;
                    border?: {
                        opacity?: number | undefined;
                        color?: import("@univerjs/core").Nullable<string>;
                        width?: number | undefined;
                        dashType?: import("../..").ChartBorderDashType | undefined;
                    } | undefined;
                    label?: {
                        contentType?: number | undefined;
                        position?: import("../..").SeriesLabelPosition | undefined;
                        format?: string | undefined;
                        customValues?: {
                            [x: number]: string | undefined;
                        } | undefined;
                        visible?: boolean | undefined;
                        content?: string | undefined;
                        fontSize?: number | undefined;
                        color?: string | undefined;
                        align?: import("../..").LabelAlignEnum | undefined;
                        bold?: boolean | undefined;
                        family?: string | undefined;
                        strikethrough?: boolean | undefined;
                        italic?: boolean | undefined;
                        underline?: boolean | undefined;
                        padAngle?: boolean | undefined;
                        axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                        showMaxLabel?: boolean | undefined;
                        showMinLabel?: boolean | undefined;
                        rotate?: number | undefined;
                    } | undefined;
                    point?: {
                        shape?: import("../..").LinePointShape | undefined;
                        size?: number | undefined;
                        color?: import("@univerjs/core").Nullable<string>;
                    } | undefined;
                    dataPoints?: {
                        [x: number]: {
                            color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                            fillOpacity?: number | undefined;
                            size?: number | undefined;
                            shape?: import("../..").LinePointShape | undefined;
                        } | undefined;
                    } | undefined;
                    waterfall?: /*elided*/ any | undefined;
                    name?: string | undefined;
                } | undefined;
                subtotal?: {
                    chartType?: (ChartTypeBits.Line | ChartTypeBits.Column | ChartTypeBits.ColumnStacked | ChartTypeBits.Area | ChartTypeBits.AreaStacked) | undefined;
                    rightYAxis?: boolean | undefined;
                    color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                    fillOpacity?: number | undefined;
                    border?: {
                        opacity?: number | undefined;
                        color?: import("@univerjs/core").Nullable<string>;
                        width?: number | undefined;
                        dashType?: import("../..").ChartBorderDashType | undefined;
                    } | undefined;
                    label?: {
                        contentType?: number | undefined;
                        position?: import("../..").SeriesLabelPosition | undefined;
                        format?: string | undefined;
                        customValues?: {
                            [x: number]: string | undefined;
                        } | undefined;
                        visible?: boolean | undefined;
                        content?: string | undefined;
                        fontSize?: number | undefined;
                        color?: string | undefined;
                        align?: import("../..").LabelAlignEnum | undefined;
                        bold?: boolean | undefined;
                        family?: string | undefined;
                        strikethrough?: boolean | undefined;
                        italic?: boolean | undefined;
                        underline?: boolean | undefined;
                        padAngle?: boolean | undefined;
                        axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                        showMaxLabel?: boolean | undefined;
                        showMinLabel?: boolean | undefined;
                        rotate?: number | undefined;
                    } | undefined;
                    point?: {
                        shape?: import("../..").LinePointShape | undefined;
                        size?: number | undefined;
                        color?: import("@univerjs/core").Nullable<string>;
                    } | undefined;
                    dataPoints?: {
                        [x: number]: {
                            color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                            fillOpacity?: number | undefined;
                            size?: number | undefined;
                            shape?: import("../..").LinePointShape | undefined;
                        } | undefined;
                    } | undefined;
                    waterfall?: /*elided*/ any | undefined;
                    name?: string | undefined;
                } | undefined;
            } | undefined;
            fillOpacity?: number | undefined;
            border?: {
                opacity?: number | undefined;
                color?: import("@univerjs/core").Nullable<string>;
                width?: number | undefined;
                dashType?: import("../..").ChartBorderDashType | undefined;
            } | undefined;
            rightYAxis?: boolean | undefined;
        } | undefined;
        seriesStyleMap?: {
            [x: string]: {
                chartType?: (ChartTypeBits.Line | ChartTypeBits.Column | ChartTypeBits.ColumnStacked | ChartTypeBits.Area | ChartTypeBits.AreaStacked) | undefined;
                rightYAxis?: boolean | undefined;
                color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                fillOpacity?: number | undefined;
                border?: {
                    opacity?: number | undefined;
                    color?: import("@univerjs/core").Nullable<string>;
                    width?: number | undefined;
                    dashType?: import("../..").ChartBorderDashType | undefined;
                } | undefined;
                label?: {
                    contentType?: number | undefined;
                    position?: import("../..").SeriesLabelPosition | undefined;
                    format?: string | undefined;
                    customValues?: {
                        [x: number]: string | undefined;
                    } | undefined;
                    visible?: boolean | undefined;
                    content?: string | undefined;
                    fontSize?: number | undefined;
                    color?: string | undefined;
                    align?: import("../..").LabelAlignEnum | undefined;
                    bold?: boolean | undefined;
                    family?: string | undefined;
                    strikethrough?: boolean | undefined;
                    italic?: boolean | undefined;
                    underline?: boolean | undefined;
                    padAngle?: boolean | undefined;
                    axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                    showMaxLabel?: boolean | undefined;
                    showMinLabel?: boolean | undefined;
                    rotate?: number | undefined;
                } | undefined;
                point?: {
                    shape?: import("../..").LinePointShape | undefined;
                    size?: number | undefined;
                    color?: import("@univerjs/core").Nullable<string>;
                } | undefined;
                dataPoints?: {
                    [x: number]: {
                        color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                        fillOpacity?: number | undefined;
                        size?: number | undefined;
                        shape?: import("../..").LinePointShape | undefined;
                    } | undefined;
                } | undefined;
                waterfall?: {
                    positive?: {
                        chartType?: (ChartTypeBits.Line | ChartTypeBits.Column | ChartTypeBits.ColumnStacked | ChartTypeBits.Area | ChartTypeBits.AreaStacked) | undefined;
                        rightYAxis?: boolean | undefined;
                        color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                        fillOpacity?: number | undefined;
                        border?: {
                            opacity?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                            width?: number | undefined;
                            dashType?: import("../..").ChartBorderDashType | undefined;
                        } | undefined;
                        label?: {
                            contentType?: number | undefined;
                            position?: import("../..").SeriesLabelPosition | undefined;
                            format?: string | undefined;
                            customValues?: {
                                [x: number]: string | undefined;
                            } | undefined;
                            visible?: boolean | undefined;
                            content?: string | undefined;
                            fontSize?: number | undefined;
                            color?: string | undefined;
                            align?: import("../..").LabelAlignEnum | undefined;
                            bold?: boolean | undefined;
                            family?: string | undefined;
                            strikethrough?: boolean | undefined;
                            italic?: boolean | undefined;
                            underline?: boolean | undefined;
                            padAngle?: boolean | undefined;
                            axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                            showMaxLabel?: boolean | undefined;
                            showMinLabel?: boolean | undefined;
                            rotate?: number | undefined;
                        } | undefined;
                        point?: {
                            shape?: import("../..").LinePointShape | undefined;
                            size?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                        } | undefined;
                        dataPoints?: {
                            [x: number]: {
                                color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                                fillOpacity?: number | undefined;
                                size?: number | undefined;
                                shape?: import("../..").LinePointShape | undefined;
                            } | undefined;
                        } | undefined;
                        waterfall?: /*elided*/ any | undefined;
                        name?: string | undefined;
                    } | undefined;
                    negative?: {
                        chartType?: (ChartTypeBits.Line | ChartTypeBits.Column | ChartTypeBits.ColumnStacked | ChartTypeBits.Area | ChartTypeBits.AreaStacked) | undefined;
                        rightYAxis?: boolean | undefined;
                        color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                        fillOpacity?: number | undefined;
                        border?: {
                            opacity?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                            width?: number | undefined;
                            dashType?: import("../..").ChartBorderDashType | undefined;
                        } | undefined;
                        label?: {
                            contentType?: number | undefined;
                            position?: import("../..").SeriesLabelPosition | undefined;
                            format?: string | undefined;
                            customValues?: {
                                [x: number]: string | undefined;
                            } | undefined;
                            visible?: boolean | undefined;
                            content?: string | undefined;
                            fontSize?: number | undefined;
                            color?: string | undefined;
                            align?: import("../..").LabelAlignEnum | undefined;
                            bold?: boolean | undefined;
                            family?: string | undefined;
                            strikethrough?: boolean | undefined;
                            italic?: boolean | undefined;
                            underline?: boolean | undefined;
                            padAngle?: boolean | undefined;
                            axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                            showMaxLabel?: boolean | undefined;
                            showMinLabel?: boolean | undefined;
                            rotate?: number | undefined;
                        } | undefined;
                        point?: {
                            shape?: import("../..").LinePointShape | undefined;
                            size?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                        } | undefined;
                        dataPoints?: {
                            [x: number]: {
                                color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                                fillOpacity?: number | undefined;
                                size?: number | undefined;
                                shape?: import("../..").LinePointShape | undefined;
                            } | undefined;
                        } | undefined;
                        waterfall?: /*elided*/ any | undefined;
                        name?: string | undefined;
                    } | undefined;
                    subtotal?: {
                        chartType?: (ChartTypeBits.Line | ChartTypeBits.Column | ChartTypeBits.ColumnStacked | ChartTypeBits.Area | ChartTypeBits.AreaStacked) | undefined;
                        rightYAxis?: boolean | undefined;
                        color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                        fillOpacity?: number | undefined;
                        border?: {
                            opacity?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                            width?: number | undefined;
                            dashType?: import("../..").ChartBorderDashType | undefined;
                        } | undefined;
                        label?: {
                            contentType?: number | undefined;
                            position?: import("../..").SeriesLabelPosition | undefined;
                            format?: string | undefined;
                            customValues?: {
                                [x: number]: string | undefined;
                            } | undefined;
                            visible?: boolean | undefined;
                            content?: string | undefined;
                            fontSize?: number | undefined;
                            color?: string | undefined;
                            align?: import("../..").LabelAlignEnum | undefined;
                            bold?: boolean | undefined;
                            family?: string | undefined;
                            strikethrough?: boolean | undefined;
                            italic?: boolean | undefined;
                            underline?: boolean | undefined;
                            padAngle?: boolean | undefined;
                            axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                            showMaxLabel?: boolean | undefined;
                            showMinLabel?: boolean | undefined;
                            rotate?: number | undefined;
                        } | undefined;
                        point?: {
                            shape?: import("../..").LinePointShape | undefined;
                            size?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                        } | undefined;
                        dataPoints?: {
                            [x: number]: {
                                color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                                fillOpacity?: number | undefined;
                                size?: number | undefined;
                                shape?: import("../..").LinePointShape | undefined;
                            } | undefined;
                        } | undefined;
                        waterfall?: /*elided*/ any | undefined;
                        name?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        bar?: {
            gapWidth?: number | undefined;
            overlap?: number | undefined;
            is3D?: boolean | undefined;
            shape?: import("../..").BarShape | undefined;
            rotX?: number | undefined;
            rotY?: number | undefined;
        } | undefined;
        bubble?: {
            scale?: number | undefined;
            sizeRepresents?: "area" | "width" | undefined;
        } | undefined;
        trendlines?: import("../..").ITrendLine[] | undefined;
        pie?: {
            composite?: {
                enabled?: boolean | undefined;
                secondaryPlot?: {
                    type?: import("../..").PieSecondaryPlotType | undefined;
                    split?: {
                        type?: "auto" | undefined;
                    } | {
                        type?: "position" | undefined;
                        count?: number | undefined;
                    } | {
                        type?: "value" | undefined;
                        lessThan?: number | undefined;
                    } | {
                        type?: "percentage" | undefined;
                        lessThan?: number | undefined;
                    } | {
                        type?: "custom" | undefined;
                        pointIndexes?: number[] | undefined;
                    } | undefined;
                    size?: number | undefined;
                    gapWidth?: number | undefined;
                    connector?: {
                        visible?: boolean | undefined;
                        color?: string | undefined;
                        width?: number | undefined;
                        opacity?: number | undefined;
                        dashType?: import("../..").ChartBorderDashType | undefined;
                    } | undefined;
                } | undefined;
                aggregate?: {
                    label?: string | undefined;
                    style?: {
                        color?: import("../..").ChartColor | undefined;
                        fillOpacity?: number | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            startAngle?: number | undefined;
            doughnutHole?: import("@univerjs/core").Nullable<number>;
            explosion?: number | undefined;
            labelStyle?: {
                contentType?: number | undefined;
                position?: import("../..").PieLabelPosition | undefined;
                format?: string | undefined;
                bold?: boolean | undefined;
                italic?: boolean | undefined;
                fontSize?: number | undefined;
                color?: string | undefined;
                visible?: boolean | undefined;
                rotate?: number | undefined;
                family?: string | undefined;
                strikethrough?: boolean | undefined;
                underline?: boolean | undefined;
                padAngle?: boolean | undefined;
                axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                showMaxLabel?: boolean | undefined;
                showMinLabel?: boolean | undefined;
            } | undefined;
            borderColor?: string | undefined;
            hasPaddingAngle?: boolean | undefined;
            is3D?: boolean | undefined;
            isHalfPie?: boolean | undefined;
            rosePie?: boolean | undefined;
            showLabelLine?: boolean | undefined;
            valueScale?: number | undefined;
            sliceStyles?: {
                [x: number]: {
                    color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                    fillOpacity?: number | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        area?: {
            lineStyle?: import("../..").AreaLineStyle | undefined;
        } | undefined;
        radar?: {
            shape?: import("../..").RadarShape | undefined;
            fill?: boolean | undefined;
        } | undefined;
        funnel?: {
            gap?: number | undefined;
            useAbsValue?: boolean | undefined;
        } | undefined;
        wordCloud?: {
            maskImage?: string | undefined;
            shape?: import("../..").WordCloudShapeEnum | undefined;
            repeat?: boolean | undefined;
        } | undefined;
        relation?: {
            layout?: import("../..").RelationChartLayoutEnum | undefined;
            useValueAsSymbolSize?: boolean | undefined;
            useEmphasis?: boolean | undefined;
            force?: {
                repulsion?: number | undefined;
                edgeLength?: number | undefined;
                gravity?: number | undefined;
            } | undefined;
            circular?: {
                rotateLabel?: boolean | undefined;
            } | undefined;
            nodeShape?: import("../..").LinePointShape | undefined;
        } | undefined;
        waterfall?: {
            stackType?: import("../..").WaterfallStackTypeEnum | undefined;
            useSubtotal?: boolean | undefined;
            pointRoles?: import("../../types").IWaterfallPointRole[] | undefined;
            connector?: boolean | {
                color?: string | undefined;
                width?: number | undefined;
                opacity?: number | undefined;
                dashType?: import("../..").ChartBorderDashType | undefined;
            } | undefined;
        } | undefined;
        markLines?: import("../../types").IChartMarkLine[] | undefined;
        tooltip?: {
            indicatorLabelColor?: string | undefined;
            indicatorLineType?: import("../..").ChartBorderDashType | undefined;
            indicatorLineColor?: string | undefined;
            indicatorLabelTextColor?: string | undefined;
        } | undefined;
        pareto?: {
            lineStyle?: {
                chartType?: (ChartTypeBits.Line | ChartTypeBits.Column | ChartTypeBits.ColumnStacked | ChartTypeBits.Area | ChartTypeBits.AreaStacked) | undefined;
                rightYAxis?: boolean | undefined;
                color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                fillOpacity?: number | undefined;
                border?: {
                    opacity?: number | undefined;
                    color?: import("@univerjs/core").Nullable<string>;
                    width?: number | undefined;
                    dashType?: import("../..").ChartBorderDashType | undefined;
                } | undefined;
                label?: {
                    contentType?: number | undefined;
                    position?: import("../..").SeriesLabelPosition | undefined;
                    format?: string | undefined;
                    customValues?: {
                        [x: number]: string | undefined;
                    } | undefined;
                    visible?: boolean | undefined;
                    content?: string | undefined;
                    fontSize?: number | undefined;
                    color?: string | undefined;
                    align?: import("../..").LabelAlignEnum | undefined;
                    bold?: boolean | undefined;
                    family?: string | undefined;
                    strikethrough?: boolean | undefined;
                    italic?: boolean | undefined;
                    underline?: boolean | undefined;
                    padAngle?: boolean | undefined;
                    axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                    showMaxLabel?: boolean | undefined;
                    showMinLabel?: boolean | undefined;
                    rotate?: number | undefined;
                } | undefined;
                point?: {
                    shape?: import("../..").LinePointShape | undefined;
                    size?: number | undefined;
                    color?: import("@univerjs/core").Nullable<string>;
                } | undefined;
                dataPoints?: {
                    [x: number]: {
                        color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                        fillOpacity?: number | undefined;
                        size?: number | undefined;
                        shape?: import("../..").LinePointShape | undefined;
                    } | undefined;
                } | undefined;
                waterfall?: {
                    positive?: {
                        chartType?: (ChartTypeBits.Line | ChartTypeBits.Column | ChartTypeBits.ColumnStacked | ChartTypeBits.Area | ChartTypeBits.AreaStacked) | undefined;
                        rightYAxis?: boolean | undefined;
                        color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                        fillOpacity?: number | undefined;
                        border?: {
                            opacity?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                            width?: number | undefined;
                            dashType?: import("../..").ChartBorderDashType | undefined;
                        } | undefined;
                        label?: {
                            contentType?: number | undefined;
                            position?: import("../..").SeriesLabelPosition | undefined;
                            format?: string | undefined;
                            customValues?: {
                                [x: number]: string | undefined;
                            } | undefined;
                            visible?: boolean | undefined;
                            content?: string | undefined;
                            fontSize?: number | undefined;
                            color?: string | undefined;
                            align?: import("../..").LabelAlignEnum | undefined;
                            bold?: boolean | undefined;
                            family?: string | undefined;
                            strikethrough?: boolean | undefined;
                            italic?: boolean | undefined;
                            underline?: boolean | undefined;
                            padAngle?: boolean | undefined;
                            axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                            showMaxLabel?: boolean | undefined;
                            showMinLabel?: boolean | undefined;
                            rotate?: number | undefined;
                        } | undefined;
                        point?: {
                            shape?: import("../..").LinePointShape | undefined;
                            size?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                        } | undefined;
                        dataPoints?: {
                            [x: number]: {
                                color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                                fillOpacity?: number | undefined;
                                size?: number | undefined;
                                shape?: import("../..").LinePointShape | undefined;
                            } | undefined;
                        } | undefined;
                        waterfall?: /*elided*/ any | undefined;
                        name?: string | undefined;
                    } | undefined;
                    negative?: {
                        chartType?: (ChartTypeBits.Line | ChartTypeBits.Column | ChartTypeBits.ColumnStacked | ChartTypeBits.Area | ChartTypeBits.AreaStacked) | undefined;
                        rightYAxis?: boolean | undefined;
                        color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                        fillOpacity?: number | undefined;
                        border?: {
                            opacity?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                            width?: number | undefined;
                            dashType?: import("../..").ChartBorderDashType | undefined;
                        } | undefined;
                        label?: {
                            contentType?: number | undefined;
                            position?: import("../..").SeriesLabelPosition | undefined;
                            format?: string | undefined;
                            customValues?: {
                                [x: number]: string | undefined;
                            } | undefined;
                            visible?: boolean | undefined;
                            content?: string | undefined;
                            fontSize?: number | undefined;
                            color?: string | undefined;
                            align?: import("../..").LabelAlignEnum | undefined;
                            bold?: boolean | undefined;
                            family?: string | undefined;
                            strikethrough?: boolean | undefined;
                            italic?: boolean | undefined;
                            underline?: boolean | undefined;
                            padAngle?: boolean | undefined;
                            axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                            showMaxLabel?: boolean | undefined;
                            showMinLabel?: boolean | undefined;
                            rotate?: number | undefined;
                        } | undefined;
                        point?: {
                            shape?: import("../..").LinePointShape | undefined;
                            size?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                        } | undefined;
                        dataPoints?: {
                            [x: number]: {
                                color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                                fillOpacity?: number | undefined;
                                size?: number | undefined;
                                shape?: import("../..").LinePointShape | undefined;
                            } | undefined;
                        } | undefined;
                        waterfall?: /*elided*/ any | undefined;
                        name?: string | undefined;
                    } | undefined;
                    subtotal?: {
                        chartType?: (ChartTypeBits.Line | ChartTypeBits.Column | ChartTypeBits.ColumnStacked | ChartTypeBits.Area | ChartTypeBits.AreaStacked) | undefined;
                        rightYAxis?: boolean | undefined;
                        color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                        fillOpacity?: number | undefined;
                        border?: {
                            opacity?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                            width?: number | undefined;
                            dashType?: import("../..").ChartBorderDashType | undefined;
                        } | undefined;
                        label?: {
                            contentType?: number | undefined;
                            position?: import("../..").SeriesLabelPosition | undefined;
                            format?: string | undefined;
                            customValues?: {
                                [x: number]: string | undefined;
                            } | undefined;
                            visible?: boolean | undefined;
                            content?: string | undefined;
                            fontSize?: number | undefined;
                            color?: string | undefined;
                            align?: import("../..").LabelAlignEnum | undefined;
                            bold?: boolean | undefined;
                            family?: string | undefined;
                            strikethrough?: boolean | undefined;
                            italic?: boolean | undefined;
                            underline?: boolean | undefined;
                            padAngle?: boolean | undefined;
                            axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                            showMaxLabel?: boolean | undefined;
                            showMinLabel?: boolean | undefined;
                            rotate?: number | undefined;
                        } | undefined;
                        point?: {
                            shape?: import("../..").LinePointShape | undefined;
                            size?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                        } | undefined;
                        dataPoints?: {
                            [x: number]: {
                                color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                                fillOpacity?: number | undefined;
                                size?: number | undefined;
                                shape?: import("../..").LinePointShape | undefined;
                            } | undefined;
                        } | undefined;
                        waterfall?: /*elided*/ any | undefined;
                        name?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            barStyle?: {
                chartType?: (ChartTypeBits.Line | ChartTypeBits.Column | ChartTypeBits.ColumnStacked | ChartTypeBits.Area | ChartTypeBits.AreaStacked) | undefined;
                rightYAxis?: boolean | undefined;
                color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                fillOpacity?: number | undefined;
                border?: {
                    opacity?: number | undefined;
                    color?: import("@univerjs/core").Nullable<string>;
                    width?: number | undefined;
                    dashType?: import("../..").ChartBorderDashType | undefined;
                } | undefined;
                label?: {
                    contentType?: number | undefined;
                    position?: import("../..").SeriesLabelPosition | undefined;
                    format?: string | undefined;
                    customValues?: {
                        [x: number]: string | undefined;
                    } | undefined;
                    visible?: boolean | undefined;
                    content?: string | undefined;
                    fontSize?: number | undefined;
                    color?: string | undefined;
                    align?: import("../..").LabelAlignEnum | undefined;
                    bold?: boolean | undefined;
                    family?: string | undefined;
                    strikethrough?: boolean | undefined;
                    italic?: boolean | undefined;
                    underline?: boolean | undefined;
                    padAngle?: boolean | undefined;
                    axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                    showMaxLabel?: boolean | undefined;
                    showMinLabel?: boolean | undefined;
                    rotate?: number | undefined;
                } | undefined;
                point?: {
                    shape?: import("../..").LinePointShape | undefined;
                    size?: number | undefined;
                    color?: import("@univerjs/core").Nullable<string>;
                } | undefined;
                dataPoints?: {
                    [x: number]: {
                        color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                        fillOpacity?: number | undefined;
                        size?: number | undefined;
                        shape?: import("../..").LinePointShape | undefined;
                    } | undefined;
                } | undefined;
                waterfall?: {
                    positive?: {
                        chartType?: (ChartTypeBits.Line | ChartTypeBits.Column | ChartTypeBits.ColumnStacked | ChartTypeBits.Area | ChartTypeBits.AreaStacked) | undefined;
                        rightYAxis?: boolean | undefined;
                        color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                        fillOpacity?: number | undefined;
                        border?: {
                            opacity?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                            width?: number | undefined;
                            dashType?: import("../..").ChartBorderDashType | undefined;
                        } | undefined;
                        label?: {
                            contentType?: number | undefined;
                            position?: import("../..").SeriesLabelPosition | undefined;
                            format?: string | undefined;
                            customValues?: {
                                [x: number]: string | undefined;
                            } | undefined;
                            visible?: boolean | undefined;
                            content?: string | undefined;
                            fontSize?: number | undefined;
                            color?: string | undefined;
                            align?: import("../..").LabelAlignEnum | undefined;
                            bold?: boolean | undefined;
                            family?: string | undefined;
                            strikethrough?: boolean | undefined;
                            italic?: boolean | undefined;
                            underline?: boolean | undefined;
                            padAngle?: boolean | undefined;
                            axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                            showMaxLabel?: boolean | undefined;
                            showMinLabel?: boolean | undefined;
                            rotate?: number | undefined;
                        } | undefined;
                        point?: {
                            shape?: import("../..").LinePointShape | undefined;
                            size?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                        } | undefined;
                        dataPoints?: {
                            [x: number]: {
                                color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                                fillOpacity?: number | undefined;
                                size?: number | undefined;
                                shape?: import("../..").LinePointShape | undefined;
                            } | undefined;
                        } | undefined;
                        waterfall?: /*elided*/ any | undefined;
                        name?: string | undefined;
                    } | undefined;
                    negative?: {
                        chartType?: (ChartTypeBits.Line | ChartTypeBits.Column | ChartTypeBits.ColumnStacked | ChartTypeBits.Area | ChartTypeBits.AreaStacked) | undefined;
                        rightYAxis?: boolean | undefined;
                        color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                        fillOpacity?: number | undefined;
                        border?: {
                            opacity?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                            width?: number | undefined;
                            dashType?: import("../..").ChartBorderDashType | undefined;
                        } | undefined;
                        label?: {
                            contentType?: number | undefined;
                            position?: import("../..").SeriesLabelPosition | undefined;
                            format?: string | undefined;
                            customValues?: {
                                [x: number]: string | undefined;
                            } | undefined;
                            visible?: boolean | undefined;
                            content?: string | undefined;
                            fontSize?: number | undefined;
                            color?: string | undefined;
                            align?: import("../..").LabelAlignEnum | undefined;
                            bold?: boolean | undefined;
                            family?: string | undefined;
                            strikethrough?: boolean | undefined;
                            italic?: boolean | undefined;
                            underline?: boolean | undefined;
                            padAngle?: boolean | undefined;
                            axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                            showMaxLabel?: boolean | undefined;
                            showMinLabel?: boolean | undefined;
                            rotate?: number | undefined;
                        } | undefined;
                        point?: {
                            shape?: import("../..").LinePointShape | undefined;
                            size?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                        } | undefined;
                        dataPoints?: {
                            [x: number]: {
                                color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                                fillOpacity?: number | undefined;
                                size?: number | undefined;
                                shape?: import("../..").LinePointShape | undefined;
                            } | undefined;
                        } | undefined;
                        waterfall?: /*elided*/ any | undefined;
                        name?: string | undefined;
                    } | undefined;
                    subtotal?: {
                        chartType?: (ChartTypeBits.Line | ChartTypeBits.Column | ChartTypeBits.ColumnStacked | ChartTypeBits.Area | ChartTypeBits.AreaStacked) | undefined;
                        rightYAxis?: boolean | undefined;
                        color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                        fillOpacity?: number | undefined;
                        border?: {
                            opacity?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                            width?: number | undefined;
                            dashType?: import("../..").ChartBorderDashType | undefined;
                        } | undefined;
                        label?: {
                            contentType?: number | undefined;
                            position?: import("../..").SeriesLabelPosition | undefined;
                            format?: string | undefined;
                            customValues?: {
                                [x: number]: string | undefined;
                            } | undefined;
                            visible?: boolean | undefined;
                            content?: string | undefined;
                            fontSize?: number | undefined;
                            color?: string | undefined;
                            align?: import("../..").LabelAlignEnum | undefined;
                            bold?: boolean | undefined;
                            family?: string | undefined;
                            strikethrough?: boolean | undefined;
                            italic?: boolean | undefined;
                            underline?: boolean | undefined;
                            padAngle?: boolean | undefined;
                            axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                            showMaxLabel?: boolean | undefined;
                            showMinLabel?: boolean | undefined;
                            rotate?: number | undefined;
                        } | undefined;
                        point?: {
                            shape?: import("../..").LinePointShape | undefined;
                            size?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                        } | undefined;
                        dataPoints?: {
                            [x: number]: {
                                color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                                fillOpacity?: number | undefined;
                                size?: number | undefined;
                                shape?: import("../..").LinePointShape | undefined;
                            } | undefined;
                        } | undefined;
                        waterfall?: /*elided*/ any | undefined;
                        name?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            includeZeroValues?: boolean | undefined;
        } | undefined;
        heatmap?: {
            visualMapType?: "continuous" | "piecewise" | undefined;
            max?: number | undefined;
            min?: number | undefined;
            unit?: string | undefined;
            label?: {
                contentType?: number | undefined;
                position?: import("../..").SeriesLabelPosition | undefined;
                format?: string | undefined;
                customValues?: {
                    [x: number]: string | undefined;
                } | undefined;
                visible?: boolean | undefined;
                content?: string | undefined;
                fontSize?: number | undefined;
                color?: string | undefined;
                align?: import("../..").LabelAlignEnum | undefined;
                bold?: boolean | undefined;
                family?: string | undefined;
                strikethrough?: boolean | undefined;
                italic?: boolean | undefined;
                underline?: boolean | undefined;
                padAngle?: boolean | undefined;
                axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                showMaxLabel?: boolean | undefined;
                showMinLabel?: boolean | undefined;
                rotate?: number | undefined;
            } | undefined;
        } | undefined;
        candlestick?: {
            rising?: {
                color?: string | undefined;
                fillOpacity?: number | undefined;
                border?: {
                    color?: string | undefined;
                    width?: number | undefined;
                    opacity?: number | undefined;
                } | undefined;
                hollow?: boolean | undefined;
            } | undefined;
            falling?: {
                color?: string | undefined;
                fillOpacity?: number | undefined;
                border?: {
                    color?: string | undefined;
                    width?: number | undefined;
                    opacity?: number | undefined;
                } | undefined;
                hollow?: boolean | undefined;
            } | undefined;
            doji?: {
                color?: string | undefined;
                fillOpacity?: number | undefined;
                border?: {
                    color?: string | undefined;
                    width?: number | undefined;
                    opacity?: number | undefined;
                } | undefined;
                hollow?: boolean | undefined;
            } | undefined;
            candleWidth?: number | undefined;
        } | undefined;
        histogram?: {
            binGap?: number | undefined;
        } | undefined;
        treemap?: {
            parentLabelLayout?: import("../..").TreemapParentLabelLayout | undefined;
            label?: {
                visible?: boolean | undefined;
                contentType?: import("../..").LabelContentType | undefined;
                color?: string | undefined;
                fontSize?: number | undefined;
                bold?: boolean | undefined;
                italic?: boolean | undefined;
                family?: string | undefined;
                format?: string | undefined;
            } | undefined;
        } | undefined;
        sunburst?: {
            centerLabel?: {
                visible?: boolean | undefined;
                color?: string | undefined;
                fontSize?: number | undefined;
                bold?: boolean | undefined;
                italic?: boolean | undefined;
                family?: string | undefined;
                format?: string | undefined;
            } | undefined;
            label?: {
                visible?: boolean | undefined;
                contentType?: import("../..").LabelContentType | undefined;
                position?: import("../..").ChartSunburstLabelPosition | undefined;
                color?: string | undefined;
                fontSize?: number | undefined;
                bold?: boolean | undefined;
                italic?: boolean | undefined;
                family?: string | undefined;
                format?: string | undefined;
            } | undefined;
        } | undefined;
        gauge?: {
            mode?: import("../..").ChartGaugeMode | undefined;
            scale?: {
                min?: number | undefined;
                max?: number | undefined;
                splitNumber?: number | undefined;
            } | undefined;
            angles?: {
                startAngle?: number | undefined;
                endAngle?: number | undefined;
            } | undefined;
            ranges?: import("../..").IChartGaugeRangeSpec[] | undefined;
            axisLine?: {
                visible?: boolean | undefined;
                width?: number | undefined;
                color?: string | undefined;
            } | undefined;
            axisTick?: {
                visible?: boolean | undefined;
                splitNumber?: number | undefined;
                length?: number | undefined;
                width?: number | undefined;
                color?: string | undefined;
            } | undefined;
            splitLine?: {
                visible?: boolean | undefined;
                length?: number | undefined;
                width?: number | undefined;
                color?: string | undefined;
            } | undefined;
            axisLabel?: {
                visible?: boolean | undefined;
                distance?: number | undefined;
                color?: string | undefined;
                fontSize?: number | undefined;
                bold?: boolean | undefined;
                italic?: boolean | undefined;
                family?: string | undefined;
                format?: string | undefined;
            } | undefined;
            pointer?: {
                visible?: boolean | undefined;
                length?: number | undefined;
                width?: number | undefined;
                color?: string | undefined;
                shape?: import("../..").ChartGaugePointerShape | undefined;
            } | undefined;
            anchor?: {
                visible?: boolean | undefined;
                size?: number | undefined;
                color?: string | undefined;
                borderColor?: string | undefined;
                borderWidth?: number | undefined;
            } | undefined;
            progress?: {
                visible?: boolean | undefined;
                width?: number | undefined;
                color?: string | undefined;
                rounded?: boolean | undefined;
            } | undefined;
            title?: {
                visible?: boolean | undefined;
                offsetY?: number | undefined;
                color?: string | undefined;
                fontSize?: number | undefined;
                bold?: boolean | undefined;
                italic?: boolean | undefined;
                family?: string | undefined;
            } | undefined;
            detail?: {
                visible?: boolean | undefined;
                offsetY?: number | undefined;
                color?: string | undefined;
                fontSize?: number | undefined;
                bold?: boolean | undefined;
                italic?: boolean | undefined;
                family?: string | undefined;
                format?: string | undefined;
            } | undefined;
        } | undefined;
        chord?: {
            layout?: {
                startAngle?: number | undefined;
                clockwise?: boolean | undefined;
                padAngle?: number | undefined;
                minAngle?: number | undefined;
                innerRadiusRatio?: number | undefined;
                outerRadiusRatio?: number | undefined;
            } | undefined;
            node?: {
                color?: string | undefined;
                opacity?: number | undefined;
                borderColor?: string | undefined;
                borderWidth?: number | undefined;
                borderType?: import("../..").ChartBorderDashType | undefined;
            } | undefined;
            label?: {
                visible?: boolean | undefined;
                position?: import("../..").ChartChordLabelPosition | undefined;
                rotation?: number | undefined;
                distance?: number | undefined;
                color?: string | undefined;
                fontSize?: number | undefined;
                bold?: boolean | undefined;
                italic?: boolean | undefined;
                family?: string | undefined;
            } | undefined;
            ribbon?: {
                color?: import("../..").ChartChordRibbonColorMode | undefined;
                opacity?: number | undefined;
                width?: number | undefined;
                type?: import("../..").ChartBorderDashType | undefined;
            } | undefined;
            emphasis?: {
                focus?: import("../..").ChartChordFocusMode | undefined;
            } | undefined;
        } | undefined;
    }>;
    readonly style$: Observable<{
        width?: number | undefined;
        height?: number | undefined;
        theme?: string | undefined;
        palette?: string[] | undefined;
        invalidValueType?: import("../..").InvalidValueType | undefined;
        gradientFill?: boolean | undefined;
        backgroundColor?: import("@univerjs/core").Nullable<string>;
        titleFontSize?: number | undefined;
        fontSize?: number | undefined;
        fontColor?: string | undefined;
        fontFamily?: string | undefined;
        borderColor?: import("@univerjs/core").Nullable<string>;
        borderWidth?: number | undefined;
        plotArea?: {
            left?: number | undefined;
            top?: number | undefined;
            width?: number | undefined;
            height?: number | undefined;
        } | undefined;
        titles?: {
            title?: {
                manualLayout?: {
                    left?: number | undefined;
                    top?: number | undefined;
                } | undefined;
                bold?: boolean | undefined;
                italic?: boolean | undefined;
                fontSize?: number | undefined;
                color?: string | undefined;
                rotate?: number | undefined;
                family?: string | undefined;
                content?: string | undefined;
                align?: import("../..").LabelAlignEnum | undefined;
                strikethrough?: boolean | undefined;
                underline?: boolean | undefined;
                padAngle?: boolean | undefined;
                axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                showMaxLabel?: boolean | undefined;
                showMinLabel?: boolean | undefined;
            } | undefined;
            subtitle?: {
                manualLayout?: {
                    left?: number | undefined;
                    top?: number | undefined;
                } | undefined;
                bold?: boolean | undefined;
                italic?: boolean | undefined;
                fontSize?: number | undefined;
                color?: string | undefined;
                rotate?: number | undefined;
                family?: string | undefined;
                content?: string | undefined;
                align?: import("../..").LabelAlignEnum | undefined;
                strikethrough?: boolean | undefined;
                underline?: boolean | undefined;
                padAngle?: boolean | undefined;
                axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                showMaxLabel?: boolean | undefined;
                showMinLabel?: boolean | undefined;
            } | undefined;
            xAxisTitle?: {
                bold?: boolean | undefined;
                italic?: boolean | undefined;
                fontSize?: number | undefined;
                color?: string | undefined;
                rotate?: number | undefined;
                family?: string | undefined;
                content?: string | undefined;
                align?: import("../..").LabelAlignEnum | undefined;
                strikethrough?: boolean | undefined;
                underline?: boolean | undefined;
                padAngle?: boolean | undefined;
                axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                showMaxLabel?: boolean | undefined;
                showMinLabel?: boolean | undefined;
            } | undefined;
            yAxisTitle?: {
                bold?: boolean | undefined;
                italic?: boolean | undefined;
                fontSize?: number | undefined;
                color?: string | undefined;
                rotate?: number | undefined;
                family?: string | undefined;
                content?: string | undefined;
                align?: import("../..").LabelAlignEnum | undefined;
                strikethrough?: boolean | undefined;
                underline?: boolean | undefined;
                padAngle?: boolean | undefined;
                axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                showMaxLabel?: boolean | undefined;
                showMinLabel?: boolean | undefined;
            } | undefined;
            rightYAxisTitle?: {
                bold?: boolean | undefined;
                italic?: boolean | undefined;
                fontSize?: number | undefined;
                color?: string | undefined;
                rotate?: number | undefined;
                family?: string | undefined;
                content?: string | undefined;
                align?: import("../..").LabelAlignEnum | undefined;
                strikethrough?: boolean | undefined;
                underline?: boolean | undefined;
                padAngle?: boolean | undefined;
                axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                showMaxLabel?: boolean | undefined;
                showMinLabel?: boolean | undefined;
            } | undefined;
            titlePosition?: import("../..").TitlePositionEnum | undefined;
        } | undefined;
        legend?: {
            position?: import("../..").LegendPositionEnum | undefined;
            label?: {
                bold?: boolean | undefined;
                italic?: boolean | undefined;
                fontSize?: number | undefined;
                color?: string | undefined;
                rotate?: number | undefined;
                family?: string | undefined;
                strikethrough?: boolean | undefined;
                underline?: boolean | undefined;
                padAngle?: boolean | undefined;
                axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                showMaxLabel?: boolean | undefined;
                showMinLabel?: boolean | undefined;
            } | undefined;
            selectMode?: import("../..").SelectModeEnum | undefined;
            wrap?: boolean | undefined;
        } | undefined;
        xAxis?: {
            lineVisible?: boolean | undefined;
            label?: {
                bold?: boolean | undefined;
                italic?: boolean | undefined;
                fontSize?: number | undefined;
                color?: string | undefined;
                visible?: boolean | undefined;
                rotate?: number | undefined;
                family?: string | undefined;
                strikethrough?: boolean | undefined;
                underline?: boolean | undefined;
                padAngle?: boolean | undefined;
                axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                showMaxLabel?: boolean | undefined;
                showMinLabel?: boolean | undefined;
            } | undefined;
            lineStyle?: {
                visible?: boolean | undefined;
                color?: string | undefined;
                width?: number | undefined;
                dashType?: import("../..").ChartBorderDashType | undefined;
            } | undefined;
            gridLine?: {
                visible?: boolean | undefined;
                color?: string | undefined;
                width?: number | undefined;
                dashType?: import("../..").ChartBorderDashType | undefined;
            } | undefined;
            tick?: {
                visible?: boolean | undefined;
                lineWidth?: number | undefined;
                lineColor?: string | undefined;
                length?: number | undefined;
                position?: import("../..").PieLabelPosition | undefined;
            } | undefined;
            reverse?: boolean | undefined;
            min?: number | null | undefined;
            max?: number | null | undefined;
            format?: string | undefined;
        } | undefined;
        yAxis?: {
            lineVisible?: boolean | undefined;
            label?: {
                bold?: boolean | undefined;
                italic?: boolean | undefined;
                fontSize?: number | undefined;
                color?: string | undefined;
                visible?: boolean | undefined;
                rotate?: number | undefined;
                family?: string | undefined;
                strikethrough?: boolean | undefined;
                underline?: boolean | undefined;
                padAngle?: boolean | undefined;
                axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                showMaxLabel?: boolean | undefined;
                showMinLabel?: boolean | undefined;
            } | undefined;
            lineStyle?: {
                visible?: boolean | undefined;
                color?: string | undefined;
                width?: number | undefined;
                dashType?: import("../..").ChartBorderDashType | undefined;
            } | undefined;
            gridLine?: {
                visible?: boolean | undefined;
                color?: string | undefined;
                width?: number | undefined;
                dashType?: import("../..").ChartBorderDashType | undefined;
            } | undefined;
            tick?: {
                visible?: boolean | undefined;
                lineWidth?: number | undefined;
                lineColor?: string | undefined;
                length?: number | undefined;
                position?: import("../..").PieLabelPosition | undefined;
            } | undefined;
            reverse?: boolean | undefined;
            min?: number | null | undefined;
            max?: number | null | undefined;
            format?: string | undefined;
        } | undefined;
        rightYAxis?: {
            label?: {
                bold?: boolean | undefined;
                italic?: boolean | undefined;
                fontSize?: number | undefined;
                color?: string | undefined;
                visible?: boolean | undefined;
                rotate?: number | undefined;
                family?: string | undefined;
                strikethrough?: boolean | undefined;
                underline?: boolean | undefined;
                padAngle?: boolean | undefined;
                axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                showMaxLabel?: boolean | undefined;
                showMinLabel?: boolean | undefined;
            } | undefined;
            min?: number | null | undefined;
            max?: number | null | undefined;
            tick?: {
                visible?: boolean | undefined;
                lineWidth?: number | undefined;
                lineColor?: string | undefined;
                length?: number | undefined;
                position?: import("../..").PieLabelPosition | undefined;
            } | undefined;
            format?: string | undefined;
            gridLine?: {
                visible?: boolean | undefined;
                color?: string | undefined;
                width?: number | undefined;
                dashType?: import("../..").ChartBorderDashType | undefined;
            } | undefined;
            lineVisible?: boolean | undefined;
            lineStyle?: {
                visible?: boolean | undefined;
                color?: string | undefined;
                width?: number | undefined;
                dashType?: import("../..").ChartBorderDashType | undefined;
            } | undefined;
        } | undefined;
        allSeriesStyle?: {
            label?: {
                contentType?: number | undefined;
                position?: import("../..").SeriesLabelPosition | undefined;
                format?: string | undefined;
                customValues?: {
                    [x: number]: string | undefined;
                } | undefined;
                visible?: boolean | undefined;
                content?: string | undefined;
                fontSize?: number | undefined;
                color?: string | undefined;
                align?: import("../..").LabelAlignEnum | undefined;
                bold?: boolean | undefined;
                family?: string | undefined;
                strikethrough?: boolean | undefined;
                italic?: boolean | undefined;
                underline?: boolean | undefined;
                padAngle?: boolean | undefined;
                axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                showMaxLabel?: boolean | undefined;
                showMinLabel?: boolean | undefined;
                rotate?: number | undefined;
            } | undefined;
            color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
            point?: {
                shape?: import("../..").LinePointShape | undefined;
                size?: number | undefined;
                color?: import("@univerjs/core").Nullable<string>;
            } | undefined;
            waterfall?: {
                positive?: {
                    chartType?: (ChartTypeBits.Line | ChartTypeBits.Column | ChartTypeBits.ColumnStacked | ChartTypeBits.Area | ChartTypeBits.AreaStacked) | undefined;
                    rightYAxis?: boolean | undefined;
                    color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                    fillOpacity?: number | undefined;
                    border?: {
                        opacity?: number | undefined;
                        color?: import("@univerjs/core").Nullable<string>;
                        width?: number | undefined;
                        dashType?: import("../..").ChartBorderDashType | undefined;
                    } | undefined;
                    label?: {
                        contentType?: number | undefined;
                        position?: import("../..").SeriesLabelPosition | undefined;
                        format?: string | undefined;
                        customValues?: {
                            [x: number]: string | undefined;
                        } | undefined;
                        visible?: boolean | undefined;
                        content?: string | undefined;
                        fontSize?: number | undefined;
                        color?: string | undefined;
                        align?: import("../..").LabelAlignEnum | undefined;
                        bold?: boolean | undefined;
                        family?: string | undefined;
                        strikethrough?: boolean | undefined;
                        italic?: boolean | undefined;
                        underline?: boolean | undefined;
                        padAngle?: boolean | undefined;
                        axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                        showMaxLabel?: boolean | undefined;
                        showMinLabel?: boolean | undefined;
                        rotate?: number | undefined;
                    } | undefined;
                    point?: {
                        shape?: import("../..").LinePointShape | undefined;
                        size?: number | undefined;
                        color?: import("@univerjs/core").Nullable<string>;
                    } | undefined;
                    dataPoints?: {
                        [x: number]: {
                            color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                            fillOpacity?: number | undefined;
                            size?: number | undefined;
                            shape?: import("../..").LinePointShape | undefined;
                        } | undefined;
                    } | undefined;
                    waterfall?: /*elided*/ any | undefined;
                    name?: string | undefined;
                } | undefined;
                negative?: {
                    chartType?: (ChartTypeBits.Line | ChartTypeBits.Column | ChartTypeBits.ColumnStacked | ChartTypeBits.Area | ChartTypeBits.AreaStacked) | undefined;
                    rightYAxis?: boolean | undefined;
                    color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                    fillOpacity?: number | undefined;
                    border?: {
                        opacity?: number | undefined;
                        color?: import("@univerjs/core").Nullable<string>;
                        width?: number | undefined;
                        dashType?: import("../..").ChartBorderDashType | undefined;
                    } | undefined;
                    label?: {
                        contentType?: number | undefined;
                        position?: import("../..").SeriesLabelPosition | undefined;
                        format?: string | undefined;
                        customValues?: {
                            [x: number]: string | undefined;
                        } | undefined;
                        visible?: boolean | undefined;
                        content?: string | undefined;
                        fontSize?: number | undefined;
                        color?: string | undefined;
                        align?: import("../..").LabelAlignEnum | undefined;
                        bold?: boolean | undefined;
                        family?: string | undefined;
                        strikethrough?: boolean | undefined;
                        italic?: boolean | undefined;
                        underline?: boolean | undefined;
                        padAngle?: boolean | undefined;
                        axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                        showMaxLabel?: boolean | undefined;
                        showMinLabel?: boolean | undefined;
                        rotate?: number | undefined;
                    } | undefined;
                    point?: {
                        shape?: import("../..").LinePointShape | undefined;
                        size?: number | undefined;
                        color?: import("@univerjs/core").Nullable<string>;
                    } | undefined;
                    dataPoints?: {
                        [x: number]: {
                            color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                            fillOpacity?: number | undefined;
                            size?: number | undefined;
                            shape?: import("../..").LinePointShape | undefined;
                        } | undefined;
                    } | undefined;
                    waterfall?: /*elided*/ any | undefined;
                    name?: string | undefined;
                } | undefined;
                subtotal?: {
                    chartType?: (ChartTypeBits.Line | ChartTypeBits.Column | ChartTypeBits.ColumnStacked | ChartTypeBits.Area | ChartTypeBits.AreaStacked) | undefined;
                    rightYAxis?: boolean | undefined;
                    color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                    fillOpacity?: number | undefined;
                    border?: {
                        opacity?: number | undefined;
                        color?: import("@univerjs/core").Nullable<string>;
                        width?: number | undefined;
                        dashType?: import("../..").ChartBorderDashType | undefined;
                    } | undefined;
                    label?: {
                        contentType?: number | undefined;
                        position?: import("../..").SeriesLabelPosition | undefined;
                        format?: string | undefined;
                        customValues?: {
                            [x: number]: string | undefined;
                        } | undefined;
                        visible?: boolean | undefined;
                        content?: string | undefined;
                        fontSize?: number | undefined;
                        color?: string | undefined;
                        align?: import("../..").LabelAlignEnum | undefined;
                        bold?: boolean | undefined;
                        family?: string | undefined;
                        strikethrough?: boolean | undefined;
                        italic?: boolean | undefined;
                        underline?: boolean | undefined;
                        padAngle?: boolean | undefined;
                        axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                        showMaxLabel?: boolean | undefined;
                        showMinLabel?: boolean | undefined;
                        rotate?: number | undefined;
                    } | undefined;
                    point?: {
                        shape?: import("../..").LinePointShape | undefined;
                        size?: number | undefined;
                        color?: import("@univerjs/core").Nullable<string>;
                    } | undefined;
                    dataPoints?: {
                        [x: number]: {
                            color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                            fillOpacity?: number | undefined;
                            size?: number | undefined;
                            shape?: import("../..").LinePointShape | undefined;
                        } | undefined;
                    } | undefined;
                    waterfall?: /*elided*/ any | undefined;
                    name?: string | undefined;
                } | undefined;
            } | undefined;
            fillOpacity?: number | undefined;
            border?: {
                opacity?: number | undefined;
                color?: import("@univerjs/core").Nullable<string>;
                width?: number | undefined;
                dashType?: import("../..").ChartBorderDashType | undefined;
            } | undefined;
            rightYAxis?: boolean | undefined;
        } | undefined;
        seriesStyleMap?: {
            [x: string]: {
                chartType?: (ChartTypeBits.Line | ChartTypeBits.Column | ChartTypeBits.ColumnStacked | ChartTypeBits.Area | ChartTypeBits.AreaStacked) | undefined;
                rightYAxis?: boolean | undefined;
                color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                fillOpacity?: number | undefined;
                border?: {
                    opacity?: number | undefined;
                    color?: import("@univerjs/core").Nullable<string>;
                    width?: number | undefined;
                    dashType?: import("../..").ChartBorderDashType | undefined;
                } | undefined;
                label?: {
                    contentType?: number | undefined;
                    position?: import("../..").SeriesLabelPosition | undefined;
                    format?: string | undefined;
                    customValues?: {
                        [x: number]: string | undefined;
                    } | undefined;
                    visible?: boolean | undefined;
                    content?: string | undefined;
                    fontSize?: number | undefined;
                    color?: string | undefined;
                    align?: import("../..").LabelAlignEnum | undefined;
                    bold?: boolean | undefined;
                    family?: string | undefined;
                    strikethrough?: boolean | undefined;
                    italic?: boolean | undefined;
                    underline?: boolean | undefined;
                    padAngle?: boolean | undefined;
                    axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                    showMaxLabel?: boolean | undefined;
                    showMinLabel?: boolean | undefined;
                    rotate?: number | undefined;
                } | undefined;
                point?: {
                    shape?: import("../..").LinePointShape | undefined;
                    size?: number | undefined;
                    color?: import("@univerjs/core").Nullable<string>;
                } | undefined;
                dataPoints?: {
                    [x: number]: {
                        color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                        fillOpacity?: number | undefined;
                        size?: number | undefined;
                        shape?: import("../..").LinePointShape | undefined;
                    } | undefined;
                } | undefined;
                waterfall?: {
                    positive?: {
                        chartType?: (ChartTypeBits.Line | ChartTypeBits.Column | ChartTypeBits.ColumnStacked | ChartTypeBits.Area | ChartTypeBits.AreaStacked) | undefined;
                        rightYAxis?: boolean | undefined;
                        color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                        fillOpacity?: number | undefined;
                        border?: {
                            opacity?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                            width?: number | undefined;
                            dashType?: import("../..").ChartBorderDashType | undefined;
                        } | undefined;
                        label?: {
                            contentType?: number | undefined;
                            position?: import("../..").SeriesLabelPosition | undefined;
                            format?: string | undefined;
                            customValues?: {
                                [x: number]: string | undefined;
                            } | undefined;
                            visible?: boolean | undefined;
                            content?: string | undefined;
                            fontSize?: number | undefined;
                            color?: string | undefined;
                            align?: import("../..").LabelAlignEnum | undefined;
                            bold?: boolean | undefined;
                            family?: string | undefined;
                            strikethrough?: boolean | undefined;
                            italic?: boolean | undefined;
                            underline?: boolean | undefined;
                            padAngle?: boolean | undefined;
                            axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                            showMaxLabel?: boolean | undefined;
                            showMinLabel?: boolean | undefined;
                            rotate?: number | undefined;
                        } | undefined;
                        point?: {
                            shape?: import("../..").LinePointShape | undefined;
                            size?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                        } | undefined;
                        dataPoints?: {
                            [x: number]: {
                                color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                                fillOpacity?: number | undefined;
                                size?: number | undefined;
                                shape?: import("../..").LinePointShape | undefined;
                            } | undefined;
                        } | undefined;
                        waterfall?: /*elided*/ any | undefined;
                        name?: string | undefined;
                    } | undefined;
                    negative?: {
                        chartType?: (ChartTypeBits.Line | ChartTypeBits.Column | ChartTypeBits.ColumnStacked | ChartTypeBits.Area | ChartTypeBits.AreaStacked) | undefined;
                        rightYAxis?: boolean | undefined;
                        color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                        fillOpacity?: number | undefined;
                        border?: {
                            opacity?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                            width?: number | undefined;
                            dashType?: import("../..").ChartBorderDashType | undefined;
                        } | undefined;
                        label?: {
                            contentType?: number | undefined;
                            position?: import("../..").SeriesLabelPosition | undefined;
                            format?: string | undefined;
                            customValues?: {
                                [x: number]: string | undefined;
                            } | undefined;
                            visible?: boolean | undefined;
                            content?: string | undefined;
                            fontSize?: number | undefined;
                            color?: string | undefined;
                            align?: import("../..").LabelAlignEnum | undefined;
                            bold?: boolean | undefined;
                            family?: string | undefined;
                            strikethrough?: boolean | undefined;
                            italic?: boolean | undefined;
                            underline?: boolean | undefined;
                            padAngle?: boolean | undefined;
                            axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                            showMaxLabel?: boolean | undefined;
                            showMinLabel?: boolean | undefined;
                            rotate?: number | undefined;
                        } | undefined;
                        point?: {
                            shape?: import("../..").LinePointShape | undefined;
                            size?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                        } | undefined;
                        dataPoints?: {
                            [x: number]: {
                                color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                                fillOpacity?: number | undefined;
                                size?: number | undefined;
                                shape?: import("../..").LinePointShape | undefined;
                            } | undefined;
                        } | undefined;
                        waterfall?: /*elided*/ any | undefined;
                        name?: string | undefined;
                    } | undefined;
                    subtotal?: {
                        chartType?: (ChartTypeBits.Line | ChartTypeBits.Column | ChartTypeBits.ColumnStacked | ChartTypeBits.Area | ChartTypeBits.AreaStacked) | undefined;
                        rightYAxis?: boolean | undefined;
                        color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                        fillOpacity?: number | undefined;
                        border?: {
                            opacity?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                            width?: number | undefined;
                            dashType?: import("../..").ChartBorderDashType | undefined;
                        } | undefined;
                        label?: {
                            contentType?: number | undefined;
                            position?: import("../..").SeriesLabelPosition | undefined;
                            format?: string | undefined;
                            customValues?: {
                                [x: number]: string | undefined;
                            } | undefined;
                            visible?: boolean | undefined;
                            content?: string | undefined;
                            fontSize?: number | undefined;
                            color?: string | undefined;
                            align?: import("../..").LabelAlignEnum | undefined;
                            bold?: boolean | undefined;
                            family?: string | undefined;
                            strikethrough?: boolean | undefined;
                            italic?: boolean | undefined;
                            underline?: boolean | undefined;
                            padAngle?: boolean | undefined;
                            axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                            showMaxLabel?: boolean | undefined;
                            showMinLabel?: boolean | undefined;
                            rotate?: number | undefined;
                        } | undefined;
                        point?: {
                            shape?: import("../..").LinePointShape | undefined;
                            size?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                        } | undefined;
                        dataPoints?: {
                            [x: number]: {
                                color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                                fillOpacity?: number | undefined;
                                size?: number | undefined;
                                shape?: import("../..").LinePointShape | undefined;
                            } | undefined;
                        } | undefined;
                        waterfall?: /*elided*/ any | undefined;
                        name?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        bar?: {
            gapWidth?: number | undefined;
            overlap?: number | undefined;
            is3D?: boolean | undefined;
            shape?: import("../..").BarShape | undefined;
            rotX?: number | undefined;
            rotY?: number | undefined;
        } | undefined;
        bubble?: {
            scale?: number | undefined;
            sizeRepresents?: "area" | "width" | undefined;
        } | undefined;
        trendlines?: import("../..").ITrendLine[] | undefined;
        pie?: {
            composite?: {
                enabled?: boolean | undefined;
                secondaryPlot?: {
                    type?: import("../..").PieSecondaryPlotType | undefined;
                    split?: {
                        type?: "auto" | undefined;
                    } | {
                        type?: "position" | undefined;
                        count?: number | undefined;
                    } | {
                        type?: "value" | undefined;
                        lessThan?: number | undefined;
                    } | {
                        type?: "percentage" | undefined;
                        lessThan?: number | undefined;
                    } | {
                        type?: "custom" | undefined;
                        pointIndexes?: number[] | undefined;
                    } | undefined;
                    size?: number | undefined;
                    gapWidth?: number | undefined;
                    connector?: {
                        visible?: boolean | undefined;
                        color?: string | undefined;
                        width?: number | undefined;
                        opacity?: number | undefined;
                        dashType?: import("../..").ChartBorderDashType | undefined;
                    } | undefined;
                } | undefined;
                aggregate?: {
                    label?: string | undefined;
                    style?: {
                        color?: import("../..").ChartColor | undefined;
                        fillOpacity?: number | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            startAngle?: number | undefined;
            doughnutHole?: import("@univerjs/core").Nullable<number>;
            explosion?: number | undefined;
            labelStyle?: {
                contentType?: number | undefined;
                position?: import("../..").PieLabelPosition | undefined;
                format?: string | undefined;
                bold?: boolean | undefined;
                italic?: boolean | undefined;
                fontSize?: number | undefined;
                color?: string | undefined;
                visible?: boolean | undefined;
                rotate?: number | undefined;
                family?: string | undefined;
                strikethrough?: boolean | undefined;
                underline?: boolean | undefined;
                padAngle?: boolean | undefined;
                axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                showMaxLabel?: boolean | undefined;
                showMinLabel?: boolean | undefined;
            } | undefined;
            borderColor?: string | undefined;
            hasPaddingAngle?: boolean | undefined;
            is3D?: boolean | undefined;
            isHalfPie?: boolean | undefined;
            rosePie?: boolean | undefined;
            showLabelLine?: boolean | undefined;
            valueScale?: number | undefined;
            sliceStyles?: {
                [x: number]: {
                    color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                    fillOpacity?: number | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        area?: {
            lineStyle?: import("../..").AreaLineStyle | undefined;
        } | undefined;
        radar?: {
            shape?: import("../..").RadarShape | undefined;
            fill?: boolean | undefined;
        } | undefined;
        funnel?: {
            gap?: number | undefined;
            useAbsValue?: boolean | undefined;
        } | undefined;
        wordCloud?: {
            maskImage?: string | undefined;
            shape?: import("../..").WordCloudShapeEnum | undefined;
            repeat?: boolean | undefined;
        } | undefined;
        relation?: {
            layout?: import("../..").RelationChartLayoutEnum | undefined;
            useValueAsSymbolSize?: boolean | undefined;
            useEmphasis?: boolean | undefined;
            force?: {
                repulsion?: number | undefined;
                edgeLength?: number | undefined;
                gravity?: number | undefined;
            } | undefined;
            circular?: {
                rotateLabel?: boolean | undefined;
            } | undefined;
            nodeShape?: import("../..").LinePointShape | undefined;
        } | undefined;
        waterfall?: {
            stackType?: import("../..").WaterfallStackTypeEnum | undefined;
            useSubtotal?: boolean | undefined;
            pointRoles?: import("../../types").IWaterfallPointRole[] | undefined;
            connector?: boolean | {
                color?: string | undefined;
                width?: number | undefined;
                opacity?: number | undefined;
                dashType?: import("../..").ChartBorderDashType | undefined;
            } | undefined;
        } | undefined;
        markLines?: import("../../types").IChartMarkLine[] | undefined;
        tooltip?: {
            indicatorLabelColor?: string | undefined;
            indicatorLineType?: import("../..").ChartBorderDashType | undefined;
            indicatorLineColor?: string | undefined;
            indicatorLabelTextColor?: string | undefined;
        } | undefined;
        pareto?: {
            lineStyle?: {
                chartType?: (ChartTypeBits.Line | ChartTypeBits.Column | ChartTypeBits.ColumnStacked | ChartTypeBits.Area | ChartTypeBits.AreaStacked) | undefined;
                rightYAxis?: boolean | undefined;
                color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                fillOpacity?: number | undefined;
                border?: {
                    opacity?: number | undefined;
                    color?: import("@univerjs/core").Nullable<string>;
                    width?: number | undefined;
                    dashType?: import("../..").ChartBorderDashType | undefined;
                } | undefined;
                label?: {
                    contentType?: number | undefined;
                    position?: import("../..").SeriesLabelPosition | undefined;
                    format?: string | undefined;
                    customValues?: {
                        [x: number]: string | undefined;
                    } | undefined;
                    visible?: boolean | undefined;
                    content?: string | undefined;
                    fontSize?: number | undefined;
                    color?: string | undefined;
                    align?: import("../..").LabelAlignEnum | undefined;
                    bold?: boolean | undefined;
                    family?: string | undefined;
                    strikethrough?: boolean | undefined;
                    italic?: boolean | undefined;
                    underline?: boolean | undefined;
                    padAngle?: boolean | undefined;
                    axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                    showMaxLabel?: boolean | undefined;
                    showMinLabel?: boolean | undefined;
                    rotate?: number | undefined;
                } | undefined;
                point?: {
                    shape?: import("../..").LinePointShape | undefined;
                    size?: number | undefined;
                    color?: import("@univerjs/core").Nullable<string>;
                } | undefined;
                dataPoints?: {
                    [x: number]: {
                        color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                        fillOpacity?: number | undefined;
                        size?: number | undefined;
                        shape?: import("../..").LinePointShape | undefined;
                    } | undefined;
                } | undefined;
                waterfall?: {
                    positive?: {
                        chartType?: (ChartTypeBits.Line | ChartTypeBits.Column | ChartTypeBits.ColumnStacked | ChartTypeBits.Area | ChartTypeBits.AreaStacked) | undefined;
                        rightYAxis?: boolean | undefined;
                        color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                        fillOpacity?: number | undefined;
                        border?: {
                            opacity?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                            width?: number | undefined;
                            dashType?: import("../..").ChartBorderDashType | undefined;
                        } | undefined;
                        label?: {
                            contentType?: number | undefined;
                            position?: import("../..").SeriesLabelPosition | undefined;
                            format?: string | undefined;
                            customValues?: {
                                [x: number]: string | undefined;
                            } | undefined;
                            visible?: boolean | undefined;
                            content?: string | undefined;
                            fontSize?: number | undefined;
                            color?: string | undefined;
                            align?: import("../..").LabelAlignEnum | undefined;
                            bold?: boolean | undefined;
                            family?: string | undefined;
                            strikethrough?: boolean | undefined;
                            italic?: boolean | undefined;
                            underline?: boolean | undefined;
                            padAngle?: boolean | undefined;
                            axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                            showMaxLabel?: boolean | undefined;
                            showMinLabel?: boolean | undefined;
                            rotate?: number | undefined;
                        } | undefined;
                        point?: {
                            shape?: import("../..").LinePointShape | undefined;
                            size?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                        } | undefined;
                        dataPoints?: {
                            [x: number]: {
                                color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                                fillOpacity?: number | undefined;
                                size?: number | undefined;
                                shape?: import("../..").LinePointShape | undefined;
                            } | undefined;
                        } | undefined;
                        waterfall?: /*elided*/ any | undefined;
                        name?: string | undefined;
                    } | undefined;
                    negative?: {
                        chartType?: (ChartTypeBits.Line | ChartTypeBits.Column | ChartTypeBits.ColumnStacked | ChartTypeBits.Area | ChartTypeBits.AreaStacked) | undefined;
                        rightYAxis?: boolean | undefined;
                        color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                        fillOpacity?: number | undefined;
                        border?: {
                            opacity?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                            width?: number | undefined;
                            dashType?: import("../..").ChartBorderDashType | undefined;
                        } | undefined;
                        label?: {
                            contentType?: number | undefined;
                            position?: import("../..").SeriesLabelPosition | undefined;
                            format?: string | undefined;
                            customValues?: {
                                [x: number]: string | undefined;
                            } | undefined;
                            visible?: boolean | undefined;
                            content?: string | undefined;
                            fontSize?: number | undefined;
                            color?: string | undefined;
                            align?: import("../..").LabelAlignEnum | undefined;
                            bold?: boolean | undefined;
                            family?: string | undefined;
                            strikethrough?: boolean | undefined;
                            italic?: boolean | undefined;
                            underline?: boolean | undefined;
                            padAngle?: boolean | undefined;
                            axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                            showMaxLabel?: boolean | undefined;
                            showMinLabel?: boolean | undefined;
                            rotate?: number | undefined;
                        } | undefined;
                        point?: {
                            shape?: import("../..").LinePointShape | undefined;
                            size?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                        } | undefined;
                        dataPoints?: {
                            [x: number]: {
                                color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                                fillOpacity?: number | undefined;
                                size?: number | undefined;
                                shape?: import("../..").LinePointShape | undefined;
                            } | undefined;
                        } | undefined;
                        waterfall?: /*elided*/ any | undefined;
                        name?: string | undefined;
                    } | undefined;
                    subtotal?: {
                        chartType?: (ChartTypeBits.Line | ChartTypeBits.Column | ChartTypeBits.ColumnStacked | ChartTypeBits.Area | ChartTypeBits.AreaStacked) | undefined;
                        rightYAxis?: boolean | undefined;
                        color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                        fillOpacity?: number | undefined;
                        border?: {
                            opacity?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                            width?: number | undefined;
                            dashType?: import("../..").ChartBorderDashType | undefined;
                        } | undefined;
                        label?: {
                            contentType?: number | undefined;
                            position?: import("../..").SeriesLabelPosition | undefined;
                            format?: string | undefined;
                            customValues?: {
                                [x: number]: string | undefined;
                            } | undefined;
                            visible?: boolean | undefined;
                            content?: string | undefined;
                            fontSize?: number | undefined;
                            color?: string | undefined;
                            align?: import("../..").LabelAlignEnum | undefined;
                            bold?: boolean | undefined;
                            family?: string | undefined;
                            strikethrough?: boolean | undefined;
                            italic?: boolean | undefined;
                            underline?: boolean | undefined;
                            padAngle?: boolean | undefined;
                            axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                            showMaxLabel?: boolean | undefined;
                            showMinLabel?: boolean | undefined;
                            rotate?: number | undefined;
                        } | undefined;
                        point?: {
                            shape?: import("../..").LinePointShape | undefined;
                            size?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                        } | undefined;
                        dataPoints?: {
                            [x: number]: {
                                color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                                fillOpacity?: number | undefined;
                                size?: number | undefined;
                                shape?: import("../..").LinePointShape | undefined;
                            } | undefined;
                        } | undefined;
                        waterfall?: /*elided*/ any | undefined;
                        name?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            barStyle?: {
                chartType?: (ChartTypeBits.Line | ChartTypeBits.Column | ChartTypeBits.ColumnStacked | ChartTypeBits.Area | ChartTypeBits.AreaStacked) | undefined;
                rightYAxis?: boolean | undefined;
                color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                fillOpacity?: number | undefined;
                border?: {
                    opacity?: number | undefined;
                    color?: import("@univerjs/core").Nullable<string>;
                    width?: number | undefined;
                    dashType?: import("../..").ChartBorderDashType | undefined;
                } | undefined;
                label?: {
                    contentType?: number | undefined;
                    position?: import("../..").SeriesLabelPosition | undefined;
                    format?: string | undefined;
                    customValues?: {
                        [x: number]: string | undefined;
                    } | undefined;
                    visible?: boolean | undefined;
                    content?: string | undefined;
                    fontSize?: number | undefined;
                    color?: string | undefined;
                    align?: import("../..").LabelAlignEnum | undefined;
                    bold?: boolean | undefined;
                    family?: string | undefined;
                    strikethrough?: boolean | undefined;
                    italic?: boolean | undefined;
                    underline?: boolean | undefined;
                    padAngle?: boolean | undefined;
                    axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                    showMaxLabel?: boolean | undefined;
                    showMinLabel?: boolean | undefined;
                    rotate?: number | undefined;
                } | undefined;
                point?: {
                    shape?: import("../..").LinePointShape | undefined;
                    size?: number | undefined;
                    color?: import("@univerjs/core").Nullable<string>;
                } | undefined;
                dataPoints?: {
                    [x: number]: {
                        color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                        fillOpacity?: number | undefined;
                        size?: number | undefined;
                        shape?: import("../..").LinePointShape | undefined;
                    } | undefined;
                } | undefined;
                waterfall?: {
                    positive?: {
                        chartType?: (ChartTypeBits.Line | ChartTypeBits.Column | ChartTypeBits.ColumnStacked | ChartTypeBits.Area | ChartTypeBits.AreaStacked) | undefined;
                        rightYAxis?: boolean | undefined;
                        color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                        fillOpacity?: number | undefined;
                        border?: {
                            opacity?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                            width?: number | undefined;
                            dashType?: import("../..").ChartBorderDashType | undefined;
                        } | undefined;
                        label?: {
                            contentType?: number | undefined;
                            position?: import("../..").SeriesLabelPosition | undefined;
                            format?: string | undefined;
                            customValues?: {
                                [x: number]: string | undefined;
                            } | undefined;
                            visible?: boolean | undefined;
                            content?: string | undefined;
                            fontSize?: number | undefined;
                            color?: string | undefined;
                            align?: import("../..").LabelAlignEnum | undefined;
                            bold?: boolean | undefined;
                            family?: string | undefined;
                            strikethrough?: boolean | undefined;
                            italic?: boolean | undefined;
                            underline?: boolean | undefined;
                            padAngle?: boolean | undefined;
                            axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                            showMaxLabel?: boolean | undefined;
                            showMinLabel?: boolean | undefined;
                            rotate?: number | undefined;
                        } | undefined;
                        point?: {
                            shape?: import("../..").LinePointShape | undefined;
                            size?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                        } | undefined;
                        dataPoints?: {
                            [x: number]: {
                                color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                                fillOpacity?: number | undefined;
                                size?: number | undefined;
                                shape?: import("../..").LinePointShape | undefined;
                            } | undefined;
                        } | undefined;
                        waterfall?: /*elided*/ any | undefined;
                        name?: string | undefined;
                    } | undefined;
                    negative?: {
                        chartType?: (ChartTypeBits.Line | ChartTypeBits.Column | ChartTypeBits.ColumnStacked | ChartTypeBits.Area | ChartTypeBits.AreaStacked) | undefined;
                        rightYAxis?: boolean | undefined;
                        color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                        fillOpacity?: number | undefined;
                        border?: {
                            opacity?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                            width?: number | undefined;
                            dashType?: import("../..").ChartBorderDashType | undefined;
                        } | undefined;
                        label?: {
                            contentType?: number | undefined;
                            position?: import("../..").SeriesLabelPosition | undefined;
                            format?: string | undefined;
                            customValues?: {
                                [x: number]: string | undefined;
                            } | undefined;
                            visible?: boolean | undefined;
                            content?: string | undefined;
                            fontSize?: number | undefined;
                            color?: string | undefined;
                            align?: import("../..").LabelAlignEnum | undefined;
                            bold?: boolean | undefined;
                            family?: string | undefined;
                            strikethrough?: boolean | undefined;
                            italic?: boolean | undefined;
                            underline?: boolean | undefined;
                            padAngle?: boolean | undefined;
                            axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                            showMaxLabel?: boolean | undefined;
                            showMinLabel?: boolean | undefined;
                            rotate?: number | undefined;
                        } | undefined;
                        point?: {
                            shape?: import("../..").LinePointShape | undefined;
                            size?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                        } | undefined;
                        dataPoints?: {
                            [x: number]: {
                                color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                                fillOpacity?: number | undefined;
                                size?: number | undefined;
                                shape?: import("../..").LinePointShape | undefined;
                            } | undefined;
                        } | undefined;
                        waterfall?: /*elided*/ any | undefined;
                        name?: string | undefined;
                    } | undefined;
                    subtotal?: {
                        chartType?: (ChartTypeBits.Line | ChartTypeBits.Column | ChartTypeBits.ColumnStacked | ChartTypeBits.Area | ChartTypeBits.AreaStacked) | undefined;
                        rightYAxis?: boolean | undefined;
                        color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                        fillOpacity?: number | undefined;
                        border?: {
                            opacity?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                            width?: number | undefined;
                            dashType?: import("../..").ChartBorderDashType | undefined;
                        } | undefined;
                        label?: {
                            contentType?: number | undefined;
                            position?: import("../..").SeriesLabelPosition | undefined;
                            format?: string | undefined;
                            customValues?: {
                                [x: number]: string | undefined;
                            } | undefined;
                            visible?: boolean | undefined;
                            content?: string | undefined;
                            fontSize?: number | undefined;
                            color?: string | undefined;
                            align?: import("../..").LabelAlignEnum | undefined;
                            bold?: boolean | undefined;
                            family?: string | undefined;
                            strikethrough?: boolean | undefined;
                            italic?: boolean | undefined;
                            underline?: boolean | undefined;
                            padAngle?: boolean | undefined;
                            axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                            showMaxLabel?: boolean | undefined;
                            showMinLabel?: boolean | undefined;
                            rotate?: number | undefined;
                        } | undefined;
                        point?: {
                            shape?: import("../..").LinePointShape | undefined;
                            size?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                        } | undefined;
                        dataPoints?: {
                            [x: number]: {
                                color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                                fillOpacity?: number | undefined;
                                size?: number | undefined;
                                shape?: import("../..").LinePointShape | undefined;
                            } | undefined;
                        } | undefined;
                        waterfall?: /*elided*/ any | undefined;
                        name?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            includeZeroValues?: boolean | undefined;
        } | undefined;
        heatmap?: {
            visualMapType?: "continuous" | "piecewise" | undefined;
            max?: number | undefined;
            min?: number | undefined;
            unit?: string | undefined;
            label?: {
                contentType?: number | undefined;
                position?: import("../..").SeriesLabelPosition | undefined;
                format?: string | undefined;
                customValues?: {
                    [x: number]: string | undefined;
                } | undefined;
                visible?: boolean | undefined;
                content?: string | undefined;
                fontSize?: number | undefined;
                color?: string | undefined;
                align?: import("../..").LabelAlignEnum | undefined;
                bold?: boolean | undefined;
                family?: string | undefined;
                strikethrough?: boolean | undefined;
                italic?: boolean | undefined;
                underline?: boolean | undefined;
                padAngle?: boolean | undefined;
                axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                showMaxLabel?: boolean | undefined;
                showMinLabel?: boolean | undefined;
                rotate?: number | undefined;
            } | undefined;
        } | undefined;
        candlestick?: {
            rising?: {
                color?: string | undefined;
                fillOpacity?: number | undefined;
                border?: {
                    color?: string | undefined;
                    width?: number | undefined;
                    opacity?: number | undefined;
                } | undefined;
                hollow?: boolean | undefined;
            } | undefined;
            falling?: {
                color?: string | undefined;
                fillOpacity?: number | undefined;
                border?: {
                    color?: string | undefined;
                    width?: number | undefined;
                    opacity?: number | undefined;
                } | undefined;
                hollow?: boolean | undefined;
            } | undefined;
            doji?: {
                color?: string | undefined;
                fillOpacity?: number | undefined;
                border?: {
                    color?: string | undefined;
                    width?: number | undefined;
                    opacity?: number | undefined;
                } | undefined;
                hollow?: boolean | undefined;
            } | undefined;
            candleWidth?: number | undefined;
        } | undefined;
        histogram?: {
            binGap?: number | undefined;
        } | undefined;
        treemap?: {
            parentLabelLayout?: import("../..").TreemapParentLabelLayout | undefined;
            label?: {
                visible?: boolean | undefined;
                contentType?: import("../..").LabelContentType | undefined;
                color?: string | undefined;
                fontSize?: number | undefined;
                bold?: boolean | undefined;
                italic?: boolean | undefined;
                family?: string | undefined;
                format?: string | undefined;
            } | undefined;
        } | undefined;
        sunburst?: {
            centerLabel?: {
                visible?: boolean | undefined;
                color?: string | undefined;
                fontSize?: number | undefined;
                bold?: boolean | undefined;
                italic?: boolean | undefined;
                family?: string | undefined;
                format?: string | undefined;
            } | undefined;
            label?: {
                visible?: boolean | undefined;
                contentType?: import("../..").LabelContentType | undefined;
                position?: import("../..").ChartSunburstLabelPosition | undefined;
                color?: string | undefined;
                fontSize?: number | undefined;
                bold?: boolean | undefined;
                italic?: boolean | undefined;
                family?: string | undefined;
                format?: string | undefined;
            } | undefined;
        } | undefined;
        gauge?: {
            mode?: import("../..").ChartGaugeMode | undefined;
            scale?: {
                min?: number | undefined;
                max?: number | undefined;
                splitNumber?: number | undefined;
            } | undefined;
            angles?: {
                startAngle?: number | undefined;
                endAngle?: number | undefined;
            } | undefined;
            ranges?: import("../..").IChartGaugeRangeSpec[] | undefined;
            axisLine?: {
                visible?: boolean | undefined;
                width?: number | undefined;
                color?: string | undefined;
            } | undefined;
            axisTick?: {
                visible?: boolean | undefined;
                splitNumber?: number | undefined;
                length?: number | undefined;
                width?: number | undefined;
                color?: string | undefined;
            } | undefined;
            splitLine?: {
                visible?: boolean | undefined;
                length?: number | undefined;
                width?: number | undefined;
                color?: string | undefined;
            } | undefined;
            axisLabel?: {
                visible?: boolean | undefined;
                distance?: number | undefined;
                color?: string | undefined;
                fontSize?: number | undefined;
                bold?: boolean | undefined;
                italic?: boolean | undefined;
                family?: string | undefined;
                format?: string | undefined;
            } | undefined;
            pointer?: {
                visible?: boolean | undefined;
                length?: number | undefined;
                width?: number | undefined;
                color?: string | undefined;
                shape?: import("../..").ChartGaugePointerShape | undefined;
            } | undefined;
            anchor?: {
                visible?: boolean | undefined;
                size?: number | undefined;
                color?: string | undefined;
                borderColor?: string | undefined;
                borderWidth?: number | undefined;
            } | undefined;
            progress?: {
                visible?: boolean | undefined;
                width?: number | undefined;
                color?: string | undefined;
                rounded?: boolean | undefined;
            } | undefined;
            title?: {
                visible?: boolean | undefined;
                offsetY?: number | undefined;
                color?: string | undefined;
                fontSize?: number | undefined;
                bold?: boolean | undefined;
                italic?: boolean | undefined;
                family?: string | undefined;
            } | undefined;
            detail?: {
                visible?: boolean | undefined;
                offsetY?: number | undefined;
                color?: string | undefined;
                fontSize?: number | undefined;
                bold?: boolean | undefined;
                italic?: boolean | undefined;
                family?: string | undefined;
                format?: string | undefined;
            } | undefined;
        } | undefined;
        chord?: {
            layout?: {
                startAngle?: number | undefined;
                clockwise?: boolean | undefined;
                padAngle?: number | undefined;
                minAngle?: number | undefined;
                innerRadiusRatio?: number | undefined;
                outerRadiusRatio?: number | undefined;
            } | undefined;
            node?: {
                color?: string | undefined;
                opacity?: number | undefined;
                borderColor?: string | undefined;
                borderWidth?: number | undefined;
                borderType?: import("../..").ChartBorderDashType | undefined;
            } | undefined;
            label?: {
                visible?: boolean | undefined;
                position?: import("../..").ChartChordLabelPosition | undefined;
                rotation?: number | undefined;
                distance?: number | undefined;
                color?: string | undefined;
                fontSize?: number | undefined;
                bold?: boolean | undefined;
                italic?: boolean | undefined;
                family?: string | undefined;
            } | undefined;
            ribbon?: {
                color?: import("../..").ChartChordRibbonColorMode | undefined;
                opacity?: number | undefined;
                width?: number | undefined;
                type?: import("../..").ChartBorderDashType | undefined;
            } | undefined;
            emphasis?: {
                focus?: import("../..").ChartChordFocusMode | undefined;
            } | undefined;
        } | undefined;
    }>;
    get style(): {
        width?: number | undefined;
        height?: number | undefined;
        theme?: string | undefined;
        palette?: string[] | undefined;
        invalidValueType?: import("../..").InvalidValueType | undefined;
        gradientFill?: boolean | undefined;
        backgroundColor?: import("@univerjs/core").Nullable<string>;
        titleFontSize?: number | undefined;
        fontSize?: number | undefined;
        fontColor?: string | undefined;
        fontFamily?: string | undefined;
        borderColor?: import("@univerjs/core").Nullable<string>;
        borderWidth?: number | undefined;
        plotArea?: {
            left?: number | undefined;
            top?: number | undefined;
            width?: number | undefined;
            height?: number | undefined;
        } | undefined;
        titles?: {
            title?: {
                manualLayout?: {
                    left?: number | undefined;
                    top?: number | undefined;
                } | undefined;
                bold?: boolean | undefined;
                italic?: boolean | undefined;
                fontSize?: number | undefined;
                color?: string | undefined;
                rotate?: number | undefined;
                family?: string | undefined;
                content?: string | undefined;
                align?: import("../..").LabelAlignEnum | undefined;
                strikethrough?: boolean | undefined;
                underline?: boolean | undefined;
                padAngle?: boolean | undefined;
                axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                showMaxLabel?: boolean | undefined;
                showMinLabel?: boolean | undefined;
            } | undefined;
            subtitle?: {
                manualLayout?: {
                    left?: number | undefined;
                    top?: number | undefined;
                } | undefined;
                bold?: boolean | undefined;
                italic?: boolean | undefined;
                fontSize?: number | undefined;
                color?: string | undefined;
                rotate?: number | undefined;
                family?: string | undefined;
                content?: string | undefined;
                align?: import("../..").LabelAlignEnum | undefined;
                strikethrough?: boolean | undefined;
                underline?: boolean | undefined;
                padAngle?: boolean | undefined;
                axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                showMaxLabel?: boolean | undefined;
                showMinLabel?: boolean | undefined;
            } | undefined;
            xAxisTitle?: {
                bold?: boolean | undefined;
                italic?: boolean | undefined;
                fontSize?: number | undefined;
                color?: string | undefined;
                rotate?: number | undefined;
                family?: string | undefined;
                content?: string | undefined;
                align?: import("../..").LabelAlignEnum | undefined;
                strikethrough?: boolean | undefined;
                underline?: boolean | undefined;
                padAngle?: boolean | undefined;
                axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                showMaxLabel?: boolean | undefined;
                showMinLabel?: boolean | undefined;
            } | undefined;
            yAxisTitle?: {
                bold?: boolean | undefined;
                italic?: boolean | undefined;
                fontSize?: number | undefined;
                color?: string | undefined;
                rotate?: number | undefined;
                family?: string | undefined;
                content?: string | undefined;
                align?: import("../..").LabelAlignEnum | undefined;
                strikethrough?: boolean | undefined;
                underline?: boolean | undefined;
                padAngle?: boolean | undefined;
                axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                showMaxLabel?: boolean | undefined;
                showMinLabel?: boolean | undefined;
            } | undefined;
            rightYAxisTitle?: {
                bold?: boolean | undefined;
                italic?: boolean | undefined;
                fontSize?: number | undefined;
                color?: string | undefined;
                rotate?: number | undefined;
                family?: string | undefined;
                content?: string | undefined;
                align?: import("../..").LabelAlignEnum | undefined;
                strikethrough?: boolean | undefined;
                underline?: boolean | undefined;
                padAngle?: boolean | undefined;
                axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                showMaxLabel?: boolean | undefined;
                showMinLabel?: boolean | undefined;
            } | undefined;
            titlePosition?: import("../..").TitlePositionEnum | undefined;
        } | undefined;
        legend?: {
            position?: import("../..").LegendPositionEnum | undefined;
            label?: {
                bold?: boolean | undefined;
                italic?: boolean | undefined;
                fontSize?: number | undefined;
                color?: string | undefined;
                rotate?: number | undefined;
                family?: string | undefined;
                strikethrough?: boolean | undefined;
                underline?: boolean | undefined;
                padAngle?: boolean | undefined;
                axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                showMaxLabel?: boolean | undefined;
                showMinLabel?: boolean | undefined;
            } | undefined;
            selectMode?: import("../..").SelectModeEnum | undefined;
            wrap?: boolean | undefined;
        } | undefined;
        xAxis?: {
            lineVisible?: boolean | undefined;
            label?: {
                bold?: boolean | undefined;
                italic?: boolean | undefined;
                fontSize?: number | undefined;
                color?: string | undefined;
                visible?: boolean | undefined;
                rotate?: number | undefined;
                family?: string | undefined;
                strikethrough?: boolean | undefined;
                underline?: boolean | undefined;
                padAngle?: boolean | undefined;
                axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                showMaxLabel?: boolean | undefined;
                showMinLabel?: boolean | undefined;
            } | undefined;
            lineStyle?: {
                visible?: boolean | undefined;
                color?: string | undefined;
                width?: number | undefined;
                dashType?: import("../..").ChartBorderDashType | undefined;
            } | undefined;
            gridLine?: {
                visible?: boolean | undefined;
                color?: string | undefined;
                width?: number | undefined;
                dashType?: import("../..").ChartBorderDashType | undefined;
            } | undefined;
            tick?: {
                visible?: boolean | undefined;
                lineWidth?: number | undefined;
                lineColor?: string | undefined;
                length?: number | undefined;
                position?: import("../..").PieLabelPosition | undefined;
            } | undefined;
            reverse?: boolean | undefined;
            min?: number | null | undefined;
            max?: number | null | undefined;
            format?: string | undefined;
        } | undefined;
        yAxis?: {
            lineVisible?: boolean | undefined;
            label?: {
                bold?: boolean | undefined;
                italic?: boolean | undefined;
                fontSize?: number | undefined;
                color?: string | undefined;
                visible?: boolean | undefined;
                rotate?: number | undefined;
                family?: string | undefined;
                strikethrough?: boolean | undefined;
                underline?: boolean | undefined;
                padAngle?: boolean | undefined;
                axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                showMaxLabel?: boolean | undefined;
                showMinLabel?: boolean | undefined;
            } | undefined;
            lineStyle?: {
                visible?: boolean | undefined;
                color?: string | undefined;
                width?: number | undefined;
                dashType?: import("../..").ChartBorderDashType | undefined;
            } | undefined;
            gridLine?: {
                visible?: boolean | undefined;
                color?: string | undefined;
                width?: number | undefined;
                dashType?: import("../..").ChartBorderDashType | undefined;
            } | undefined;
            tick?: {
                visible?: boolean | undefined;
                lineWidth?: number | undefined;
                lineColor?: string | undefined;
                length?: number | undefined;
                position?: import("../..").PieLabelPosition | undefined;
            } | undefined;
            reverse?: boolean | undefined;
            min?: number | null | undefined;
            max?: number | null | undefined;
            format?: string | undefined;
        } | undefined;
        rightYAxis?: {
            label?: {
                bold?: boolean | undefined;
                italic?: boolean | undefined;
                fontSize?: number | undefined;
                color?: string | undefined;
                visible?: boolean | undefined;
                rotate?: number | undefined;
                family?: string | undefined;
                strikethrough?: boolean | undefined;
                underline?: boolean | undefined;
                padAngle?: boolean | undefined;
                axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                showMaxLabel?: boolean | undefined;
                showMinLabel?: boolean | undefined;
            } | undefined;
            min?: number | null | undefined;
            max?: number | null | undefined;
            tick?: {
                visible?: boolean | undefined;
                lineWidth?: number | undefined;
                lineColor?: string | undefined;
                length?: number | undefined;
                position?: import("../..").PieLabelPosition | undefined;
            } | undefined;
            format?: string | undefined;
            gridLine?: {
                visible?: boolean | undefined;
                color?: string | undefined;
                width?: number | undefined;
                dashType?: import("../..").ChartBorderDashType | undefined;
            } | undefined;
            lineVisible?: boolean | undefined;
            lineStyle?: {
                visible?: boolean | undefined;
                color?: string | undefined;
                width?: number | undefined;
                dashType?: import("../..").ChartBorderDashType | undefined;
            } | undefined;
        } | undefined;
        allSeriesStyle?: {
            label?: {
                contentType?: number | undefined;
                position?: import("../..").SeriesLabelPosition | undefined;
                format?: string | undefined;
                customValues?: {
                    [x: number]: string | undefined;
                } | undefined;
                visible?: boolean | undefined;
                content?: string | undefined;
                fontSize?: number | undefined;
                color?: string | undefined;
                align?: import("../..").LabelAlignEnum | undefined;
                bold?: boolean | undefined;
                family?: string | undefined;
                strikethrough?: boolean | undefined;
                italic?: boolean | undefined;
                underline?: boolean | undefined;
                padAngle?: boolean | undefined;
                axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                showMaxLabel?: boolean | undefined;
                showMinLabel?: boolean | undefined;
                rotate?: number | undefined;
            } | undefined;
            color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
            point?: {
                shape?: import("../..").LinePointShape | undefined;
                size?: number | undefined;
                color?: import("@univerjs/core").Nullable<string>;
            } | undefined;
            waterfall?: {
                positive?: {
                    chartType?: (ChartTypeBits.Line | ChartTypeBits.Column | ChartTypeBits.ColumnStacked | ChartTypeBits.Area | ChartTypeBits.AreaStacked) | undefined;
                    rightYAxis?: boolean | undefined;
                    color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                    fillOpacity?: number | undefined;
                    border?: {
                        opacity?: number | undefined;
                        color?: import("@univerjs/core").Nullable<string>;
                        width?: number | undefined;
                        dashType?: import("../..").ChartBorderDashType | undefined;
                    } | undefined;
                    label?: {
                        contentType?: number | undefined;
                        position?: import("../..").SeriesLabelPosition | undefined;
                        format?: string | undefined;
                        customValues?: {
                            [x: number]: string | undefined;
                        } | undefined;
                        visible?: boolean | undefined;
                        content?: string | undefined;
                        fontSize?: number | undefined;
                        color?: string | undefined;
                        align?: import("../..").LabelAlignEnum | undefined;
                        bold?: boolean | undefined;
                        family?: string | undefined;
                        strikethrough?: boolean | undefined;
                        italic?: boolean | undefined;
                        underline?: boolean | undefined;
                        padAngle?: boolean | undefined;
                        axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                        showMaxLabel?: boolean | undefined;
                        showMinLabel?: boolean | undefined;
                        rotate?: number | undefined;
                    } | undefined;
                    point?: {
                        shape?: import("../..").LinePointShape | undefined;
                        size?: number | undefined;
                        color?: import("@univerjs/core").Nullable<string>;
                    } | undefined;
                    dataPoints?: {
                        [x: number]: {
                            color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                            fillOpacity?: number | undefined;
                            size?: number | undefined;
                            shape?: import("../..").LinePointShape | undefined;
                        } | undefined;
                    } | undefined;
                    waterfall?: /*elided*/ any | undefined;
                    name?: string | undefined;
                } | undefined;
                negative?: {
                    chartType?: (ChartTypeBits.Line | ChartTypeBits.Column | ChartTypeBits.ColumnStacked | ChartTypeBits.Area | ChartTypeBits.AreaStacked) | undefined;
                    rightYAxis?: boolean | undefined;
                    color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                    fillOpacity?: number | undefined;
                    border?: {
                        opacity?: number | undefined;
                        color?: import("@univerjs/core").Nullable<string>;
                        width?: number | undefined;
                        dashType?: import("../..").ChartBorderDashType | undefined;
                    } | undefined;
                    label?: {
                        contentType?: number | undefined;
                        position?: import("../..").SeriesLabelPosition | undefined;
                        format?: string | undefined;
                        customValues?: {
                            [x: number]: string | undefined;
                        } | undefined;
                        visible?: boolean | undefined;
                        content?: string | undefined;
                        fontSize?: number | undefined;
                        color?: string | undefined;
                        align?: import("../..").LabelAlignEnum | undefined;
                        bold?: boolean | undefined;
                        family?: string | undefined;
                        strikethrough?: boolean | undefined;
                        italic?: boolean | undefined;
                        underline?: boolean | undefined;
                        padAngle?: boolean | undefined;
                        axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                        showMaxLabel?: boolean | undefined;
                        showMinLabel?: boolean | undefined;
                        rotate?: number | undefined;
                    } | undefined;
                    point?: {
                        shape?: import("../..").LinePointShape | undefined;
                        size?: number | undefined;
                        color?: import("@univerjs/core").Nullable<string>;
                    } | undefined;
                    dataPoints?: {
                        [x: number]: {
                            color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                            fillOpacity?: number | undefined;
                            size?: number | undefined;
                            shape?: import("../..").LinePointShape | undefined;
                        } | undefined;
                    } | undefined;
                    waterfall?: /*elided*/ any | undefined;
                    name?: string | undefined;
                } | undefined;
                subtotal?: {
                    chartType?: (ChartTypeBits.Line | ChartTypeBits.Column | ChartTypeBits.ColumnStacked | ChartTypeBits.Area | ChartTypeBits.AreaStacked) | undefined;
                    rightYAxis?: boolean | undefined;
                    color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                    fillOpacity?: number | undefined;
                    border?: {
                        opacity?: number | undefined;
                        color?: import("@univerjs/core").Nullable<string>;
                        width?: number | undefined;
                        dashType?: import("../..").ChartBorderDashType | undefined;
                    } | undefined;
                    label?: {
                        contentType?: number | undefined;
                        position?: import("../..").SeriesLabelPosition | undefined;
                        format?: string | undefined;
                        customValues?: {
                            [x: number]: string | undefined;
                        } | undefined;
                        visible?: boolean | undefined;
                        content?: string | undefined;
                        fontSize?: number | undefined;
                        color?: string | undefined;
                        align?: import("../..").LabelAlignEnum | undefined;
                        bold?: boolean | undefined;
                        family?: string | undefined;
                        strikethrough?: boolean | undefined;
                        italic?: boolean | undefined;
                        underline?: boolean | undefined;
                        padAngle?: boolean | undefined;
                        axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                        showMaxLabel?: boolean | undefined;
                        showMinLabel?: boolean | undefined;
                        rotate?: number | undefined;
                    } | undefined;
                    point?: {
                        shape?: import("../..").LinePointShape | undefined;
                        size?: number | undefined;
                        color?: import("@univerjs/core").Nullable<string>;
                    } | undefined;
                    dataPoints?: {
                        [x: number]: {
                            color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                            fillOpacity?: number | undefined;
                            size?: number | undefined;
                            shape?: import("../..").LinePointShape | undefined;
                        } | undefined;
                    } | undefined;
                    waterfall?: /*elided*/ any | undefined;
                    name?: string | undefined;
                } | undefined;
            } | undefined;
            fillOpacity?: number | undefined;
            border?: {
                opacity?: number | undefined;
                color?: import("@univerjs/core").Nullable<string>;
                width?: number | undefined;
                dashType?: import("../..").ChartBorderDashType | undefined;
            } | undefined;
            rightYAxis?: boolean | undefined;
        } | undefined;
        seriesStyleMap?: {
            [x: string]: {
                chartType?: (ChartTypeBits.Line | ChartTypeBits.Column | ChartTypeBits.ColumnStacked | ChartTypeBits.Area | ChartTypeBits.AreaStacked) | undefined;
                rightYAxis?: boolean | undefined;
                color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                fillOpacity?: number | undefined;
                border?: {
                    opacity?: number | undefined;
                    color?: import("@univerjs/core").Nullable<string>;
                    width?: number | undefined;
                    dashType?: import("../..").ChartBorderDashType | undefined;
                } | undefined;
                label?: {
                    contentType?: number | undefined;
                    position?: import("../..").SeriesLabelPosition | undefined;
                    format?: string | undefined;
                    customValues?: {
                        [x: number]: string | undefined;
                    } | undefined;
                    visible?: boolean | undefined;
                    content?: string | undefined;
                    fontSize?: number | undefined;
                    color?: string | undefined;
                    align?: import("../..").LabelAlignEnum | undefined;
                    bold?: boolean | undefined;
                    family?: string | undefined;
                    strikethrough?: boolean | undefined;
                    italic?: boolean | undefined;
                    underline?: boolean | undefined;
                    padAngle?: boolean | undefined;
                    axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                    showMaxLabel?: boolean | undefined;
                    showMinLabel?: boolean | undefined;
                    rotate?: number | undefined;
                } | undefined;
                point?: {
                    shape?: import("../..").LinePointShape | undefined;
                    size?: number | undefined;
                    color?: import("@univerjs/core").Nullable<string>;
                } | undefined;
                dataPoints?: {
                    [x: number]: {
                        color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                        fillOpacity?: number | undefined;
                        size?: number | undefined;
                        shape?: import("../..").LinePointShape | undefined;
                    } | undefined;
                } | undefined;
                waterfall?: {
                    positive?: {
                        chartType?: (ChartTypeBits.Line | ChartTypeBits.Column | ChartTypeBits.ColumnStacked | ChartTypeBits.Area | ChartTypeBits.AreaStacked) | undefined;
                        rightYAxis?: boolean | undefined;
                        color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                        fillOpacity?: number | undefined;
                        border?: {
                            opacity?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                            width?: number | undefined;
                            dashType?: import("../..").ChartBorderDashType | undefined;
                        } | undefined;
                        label?: {
                            contentType?: number | undefined;
                            position?: import("../..").SeriesLabelPosition | undefined;
                            format?: string | undefined;
                            customValues?: {
                                [x: number]: string | undefined;
                            } | undefined;
                            visible?: boolean | undefined;
                            content?: string | undefined;
                            fontSize?: number | undefined;
                            color?: string | undefined;
                            align?: import("../..").LabelAlignEnum | undefined;
                            bold?: boolean | undefined;
                            family?: string | undefined;
                            strikethrough?: boolean | undefined;
                            italic?: boolean | undefined;
                            underline?: boolean | undefined;
                            padAngle?: boolean | undefined;
                            axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                            showMaxLabel?: boolean | undefined;
                            showMinLabel?: boolean | undefined;
                            rotate?: number | undefined;
                        } | undefined;
                        point?: {
                            shape?: import("../..").LinePointShape | undefined;
                            size?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                        } | undefined;
                        dataPoints?: {
                            [x: number]: {
                                color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                                fillOpacity?: number | undefined;
                                size?: number | undefined;
                                shape?: import("../..").LinePointShape | undefined;
                            } | undefined;
                        } | undefined;
                        waterfall?: /*elided*/ any | undefined;
                        name?: string | undefined;
                    } | undefined;
                    negative?: {
                        chartType?: (ChartTypeBits.Line | ChartTypeBits.Column | ChartTypeBits.ColumnStacked | ChartTypeBits.Area | ChartTypeBits.AreaStacked) | undefined;
                        rightYAxis?: boolean | undefined;
                        color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                        fillOpacity?: number | undefined;
                        border?: {
                            opacity?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                            width?: number | undefined;
                            dashType?: import("../..").ChartBorderDashType | undefined;
                        } | undefined;
                        label?: {
                            contentType?: number | undefined;
                            position?: import("../..").SeriesLabelPosition | undefined;
                            format?: string | undefined;
                            customValues?: {
                                [x: number]: string | undefined;
                            } | undefined;
                            visible?: boolean | undefined;
                            content?: string | undefined;
                            fontSize?: number | undefined;
                            color?: string | undefined;
                            align?: import("../..").LabelAlignEnum | undefined;
                            bold?: boolean | undefined;
                            family?: string | undefined;
                            strikethrough?: boolean | undefined;
                            italic?: boolean | undefined;
                            underline?: boolean | undefined;
                            padAngle?: boolean | undefined;
                            axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                            showMaxLabel?: boolean | undefined;
                            showMinLabel?: boolean | undefined;
                            rotate?: number | undefined;
                        } | undefined;
                        point?: {
                            shape?: import("../..").LinePointShape | undefined;
                            size?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                        } | undefined;
                        dataPoints?: {
                            [x: number]: {
                                color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                                fillOpacity?: number | undefined;
                                size?: number | undefined;
                                shape?: import("../..").LinePointShape | undefined;
                            } | undefined;
                        } | undefined;
                        waterfall?: /*elided*/ any | undefined;
                        name?: string | undefined;
                    } | undefined;
                    subtotal?: {
                        chartType?: (ChartTypeBits.Line | ChartTypeBits.Column | ChartTypeBits.ColumnStacked | ChartTypeBits.Area | ChartTypeBits.AreaStacked) | undefined;
                        rightYAxis?: boolean | undefined;
                        color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                        fillOpacity?: number | undefined;
                        border?: {
                            opacity?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                            width?: number | undefined;
                            dashType?: import("../..").ChartBorderDashType | undefined;
                        } | undefined;
                        label?: {
                            contentType?: number | undefined;
                            position?: import("../..").SeriesLabelPosition | undefined;
                            format?: string | undefined;
                            customValues?: {
                                [x: number]: string | undefined;
                            } | undefined;
                            visible?: boolean | undefined;
                            content?: string | undefined;
                            fontSize?: number | undefined;
                            color?: string | undefined;
                            align?: import("../..").LabelAlignEnum | undefined;
                            bold?: boolean | undefined;
                            family?: string | undefined;
                            strikethrough?: boolean | undefined;
                            italic?: boolean | undefined;
                            underline?: boolean | undefined;
                            padAngle?: boolean | undefined;
                            axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                            showMaxLabel?: boolean | undefined;
                            showMinLabel?: boolean | undefined;
                            rotate?: number | undefined;
                        } | undefined;
                        point?: {
                            shape?: import("../..").LinePointShape | undefined;
                            size?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                        } | undefined;
                        dataPoints?: {
                            [x: number]: {
                                color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                                fillOpacity?: number | undefined;
                                size?: number | undefined;
                                shape?: import("../..").LinePointShape | undefined;
                            } | undefined;
                        } | undefined;
                        waterfall?: /*elided*/ any | undefined;
                        name?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        bar?: {
            gapWidth?: number | undefined;
            overlap?: number | undefined;
            is3D?: boolean | undefined;
            shape?: import("../..").BarShape | undefined;
            rotX?: number | undefined;
            rotY?: number | undefined;
        } | undefined;
        bubble?: {
            scale?: number | undefined;
            sizeRepresents?: "area" | "width" | undefined;
        } | undefined;
        trendlines?: import("../..").ITrendLine[] | undefined;
        pie?: {
            composite?: {
                enabled?: boolean | undefined;
                secondaryPlot?: {
                    type?: import("../..").PieSecondaryPlotType | undefined;
                    split?: {
                        type?: "auto" | undefined;
                    } | {
                        type?: "position" | undefined;
                        count?: number | undefined;
                    } | {
                        type?: "value" | undefined;
                        lessThan?: number | undefined;
                    } | {
                        type?: "percentage" | undefined;
                        lessThan?: number | undefined;
                    } | {
                        type?: "custom" | undefined;
                        pointIndexes?: number[] | undefined;
                    } | undefined;
                    size?: number | undefined;
                    gapWidth?: number | undefined;
                    connector?: {
                        visible?: boolean | undefined;
                        color?: string | undefined;
                        width?: number | undefined;
                        opacity?: number | undefined;
                        dashType?: import("../..").ChartBorderDashType | undefined;
                    } | undefined;
                } | undefined;
                aggregate?: {
                    label?: string | undefined;
                    style?: {
                        color?: import("../..").ChartColor | undefined;
                        fillOpacity?: number | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            startAngle?: number | undefined;
            doughnutHole?: import("@univerjs/core").Nullable<number>;
            explosion?: number | undefined;
            labelStyle?: {
                contentType?: number | undefined;
                position?: import("../..").PieLabelPosition | undefined;
                format?: string | undefined;
                bold?: boolean | undefined;
                italic?: boolean | undefined;
                fontSize?: number | undefined;
                color?: string | undefined;
                visible?: boolean | undefined;
                rotate?: number | undefined;
                family?: string | undefined;
                strikethrough?: boolean | undefined;
                underline?: boolean | undefined;
                padAngle?: boolean | undefined;
                axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                showMaxLabel?: boolean | undefined;
                showMinLabel?: boolean | undefined;
            } | undefined;
            borderColor?: string | undefined;
            hasPaddingAngle?: boolean | undefined;
            is3D?: boolean | undefined;
            isHalfPie?: boolean | undefined;
            rosePie?: boolean | undefined;
            showLabelLine?: boolean | undefined;
            valueScale?: number | undefined;
            sliceStyles?: {
                [x: number]: {
                    color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                    fillOpacity?: number | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        area?: {
            lineStyle?: import("../..").AreaLineStyle | undefined;
        } | undefined;
        radar?: {
            shape?: import("../..").RadarShape | undefined;
            fill?: boolean | undefined;
        } | undefined;
        funnel?: {
            gap?: number | undefined;
            useAbsValue?: boolean | undefined;
        } | undefined;
        wordCloud?: {
            maskImage?: string | undefined;
            shape?: import("../..").WordCloudShapeEnum | undefined;
            repeat?: boolean | undefined;
        } | undefined;
        relation?: {
            layout?: import("../..").RelationChartLayoutEnum | undefined;
            useValueAsSymbolSize?: boolean | undefined;
            useEmphasis?: boolean | undefined;
            force?: {
                repulsion?: number | undefined;
                edgeLength?: number | undefined;
                gravity?: number | undefined;
            } | undefined;
            circular?: {
                rotateLabel?: boolean | undefined;
            } | undefined;
            nodeShape?: import("../..").LinePointShape | undefined;
        } | undefined;
        waterfall?: {
            stackType?: import("../..").WaterfallStackTypeEnum | undefined;
            useSubtotal?: boolean | undefined;
            pointRoles?: import("../../types").IWaterfallPointRole[] | undefined;
            connector?: boolean | {
                color?: string | undefined;
                width?: number | undefined;
                opacity?: number | undefined;
                dashType?: import("../..").ChartBorderDashType | undefined;
            } | undefined;
        } | undefined;
        markLines?: import("../../types").IChartMarkLine[] | undefined;
        tooltip?: {
            indicatorLabelColor?: string | undefined;
            indicatorLineType?: import("../..").ChartBorderDashType | undefined;
            indicatorLineColor?: string | undefined;
            indicatorLabelTextColor?: string | undefined;
        } | undefined;
        pareto?: {
            lineStyle?: {
                chartType?: (ChartTypeBits.Line | ChartTypeBits.Column | ChartTypeBits.ColumnStacked | ChartTypeBits.Area | ChartTypeBits.AreaStacked) | undefined;
                rightYAxis?: boolean | undefined;
                color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                fillOpacity?: number | undefined;
                border?: {
                    opacity?: number | undefined;
                    color?: import("@univerjs/core").Nullable<string>;
                    width?: number | undefined;
                    dashType?: import("../..").ChartBorderDashType | undefined;
                } | undefined;
                label?: {
                    contentType?: number | undefined;
                    position?: import("../..").SeriesLabelPosition | undefined;
                    format?: string | undefined;
                    customValues?: {
                        [x: number]: string | undefined;
                    } | undefined;
                    visible?: boolean | undefined;
                    content?: string | undefined;
                    fontSize?: number | undefined;
                    color?: string | undefined;
                    align?: import("../..").LabelAlignEnum | undefined;
                    bold?: boolean | undefined;
                    family?: string | undefined;
                    strikethrough?: boolean | undefined;
                    italic?: boolean | undefined;
                    underline?: boolean | undefined;
                    padAngle?: boolean | undefined;
                    axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                    showMaxLabel?: boolean | undefined;
                    showMinLabel?: boolean | undefined;
                    rotate?: number | undefined;
                } | undefined;
                point?: {
                    shape?: import("../..").LinePointShape | undefined;
                    size?: number | undefined;
                    color?: import("@univerjs/core").Nullable<string>;
                } | undefined;
                dataPoints?: {
                    [x: number]: {
                        color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                        fillOpacity?: number | undefined;
                        size?: number | undefined;
                        shape?: import("../..").LinePointShape | undefined;
                    } | undefined;
                } | undefined;
                waterfall?: {
                    positive?: {
                        chartType?: (ChartTypeBits.Line | ChartTypeBits.Column | ChartTypeBits.ColumnStacked | ChartTypeBits.Area | ChartTypeBits.AreaStacked) | undefined;
                        rightYAxis?: boolean | undefined;
                        color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                        fillOpacity?: number | undefined;
                        border?: {
                            opacity?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                            width?: number | undefined;
                            dashType?: import("../..").ChartBorderDashType | undefined;
                        } | undefined;
                        label?: {
                            contentType?: number | undefined;
                            position?: import("../..").SeriesLabelPosition | undefined;
                            format?: string | undefined;
                            customValues?: {
                                [x: number]: string | undefined;
                            } | undefined;
                            visible?: boolean | undefined;
                            content?: string | undefined;
                            fontSize?: number | undefined;
                            color?: string | undefined;
                            align?: import("../..").LabelAlignEnum | undefined;
                            bold?: boolean | undefined;
                            family?: string | undefined;
                            strikethrough?: boolean | undefined;
                            italic?: boolean | undefined;
                            underline?: boolean | undefined;
                            padAngle?: boolean | undefined;
                            axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                            showMaxLabel?: boolean | undefined;
                            showMinLabel?: boolean | undefined;
                            rotate?: number | undefined;
                        } | undefined;
                        point?: {
                            shape?: import("../..").LinePointShape | undefined;
                            size?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                        } | undefined;
                        dataPoints?: {
                            [x: number]: {
                                color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                                fillOpacity?: number | undefined;
                                size?: number | undefined;
                                shape?: import("../..").LinePointShape | undefined;
                            } | undefined;
                        } | undefined;
                        waterfall?: /*elided*/ any | undefined;
                        name?: string | undefined;
                    } | undefined;
                    negative?: {
                        chartType?: (ChartTypeBits.Line | ChartTypeBits.Column | ChartTypeBits.ColumnStacked | ChartTypeBits.Area | ChartTypeBits.AreaStacked) | undefined;
                        rightYAxis?: boolean | undefined;
                        color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                        fillOpacity?: number | undefined;
                        border?: {
                            opacity?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                            width?: number | undefined;
                            dashType?: import("../..").ChartBorderDashType | undefined;
                        } | undefined;
                        label?: {
                            contentType?: number | undefined;
                            position?: import("../..").SeriesLabelPosition | undefined;
                            format?: string | undefined;
                            customValues?: {
                                [x: number]: string | undefined;
                            } | undefined;
                            visible?: boolean | undefined;
                            content?: string | undefined;
                            fontSize?: number | undefined;
                            color?: string | undefined;
                            align?: import("../..").LabelAlignEnum | undefined;
                            bold?: boolean | undefined;
                            family?: string | undefined;
                            strikethrough?: boolean | undefined;
                            italic?: boolean | undefined;
                            underline?: boolean | undefined;
                            padAngle?: boolean | undefined;
                            axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                            showMaxLabel?: boolean | undefined;
                            showMinLabel?: boolean | undefined;
                            rotate?: number | undefined;
                        } | undefined;
                        point?: {
                            shape?: import("../..").LinePointShape | undefined;
                            size?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                        } | undefined;
                        dataPoints?: {
                            [x: number]: {
                                color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                                fillOpacity?: number | undefined;
                                size?: number | undefined;
                                shape?: import("../..").LinePointShape | undefined;
                            } | undefined;
                        } | undefined;
                        waterfall?: /*elided*/ any | undefined;
                        name?: string | undefined;
                    } | undefined;
                    subtotal?: {
                        chartType?: (ChartTypeBits.Line | ChartTypeBits.Column | ChartTypeBits.ColumnStacked | ChartTypeBits.Area | ChartTypeBits.AreaStacked) | undefined;
                        rightYAxis?: boolean | undefined;
                        color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                        fillOpacity?: number | undefined;
                        border?: {
                            opacity?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                            width?: number | undefined;
                            dashType?: import("../..").ChartBorderDashType | undefined;
                        } | undefined;
                        label?: {
                            contentType?: number | undefined;
                            position?: import("../..").SeriesLabelPosition | undefined;
                            format?: string | undefined;
                            customValues?: {
                                [x: number]: string | undefined;
                            } | undefined;
                            visible?: boolean | undefined;
                            content?: string | undefined;
                            fontSize?: number | undefined;
                            color?: string | undefined;
                            align?: import("../..").LabelAlignEnum | undefined;
                            bold?: boolean | undefined;
                            family?: string | undefined;
                            strikethrough?: boolean | undefined;
                            italic?: boolean | undefined;
                            underline?: boolean | undefined;
                            padAngle?: boolean | undefined;
                            axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                            showMaxLabel?: boolean | undefined;
                            showMinLabel?: boolean | undefined;
                            rotate?: number | undefined;
                        } | undefined;
                        point?: {
                            shape?: import("../..").LinePointShape | undefined;
                            size?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                        } | undefined;
                        dataPoints?: {
                            [x: number]: {
                                color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                                fillOpacity?: number | undefined;
                                size?: number | undefined;
                                shape?: import("../..").LinePointShape | undefined;
                            } | undefined;
                        } | undefined;
                        waterfall?: /*elided*/ any | undefined;
                        name?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            barStyle?: {
                chartType?: (ChartTypeBits.Line | ChartTypeBits.Column | ChartTypeBits.ColumnStacked | ChartTypeBits.Area | ChartTypeBits.AreaStacked) | undefined;
                rightYAxis?: boolean | undefined;
                color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                fillOpacity?: number | undefined;
                border?: {
                    opacity?: number | undefined;
                    color?: import("@univerjs/core").Nullable<string>;
                    width?: number | undefined;
                    dashType?: import("../..").ChartBorderDashType | undefined;
                } | undefined;
                label?: {
                    contentType?: number | undefined;
                    position?: import("../..").SeriesLabelPosition | undefined;
                    format?: string | undefined;
                    customValues?: {
                        [x: number]: string | undefined;
                    } | undefined;
                    visible?: boolean | undefined;
                    content?: string | undefined;
                    fontSize?: number | undefined;
                    color?: string | undefined;
                    align?: import("../..").LabelAlignEnum | undefined;
                    bold?: boolean | undefined;
                    family?: string | undefined;
                    strikethrough?: boolean | undefined;
                    italic?: boolean | undefined;
                    underline?: boolean | undefined;
                    padAngle?: boolean | undefined;
                    axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                    showMaxLabel?: boolean | undefined;
                    showMinLabel?: boolean | undefined;
                    rotate?: number | undefined;
                } | undefined;
                point?: {
                    shape?: import("../..").LinePointShape | undefined;
                    size?: number | undefined;
                    color?: import("@univerjs/core").Nullable<string>;
                } | undefined;
                dataPoints?: {
                    [x: number]: {
                        color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                        fillOpacity?: number | undefined;
                        size?: number | undefined;
                        shape?: import("../..").LinePointShape | undefined;
                    } | undefined;
                } | undefined;
                waterfall?: {
                    positive?: {
                        chartType?: (ChartTypeBits.Line | ChartTypeBits.Column | ChartTypeBits.ColumnStacked | ChartTypeBits.Area | ChartTypeBits.AreaStacked) | undefined;
                        rightYAxis?: boolean | undefined;
                        color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                        fillOpacity?: number | undefined;
                        border?: {
                            opacity?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                            width?: number | undefined;
                            dashType?: import("../..").ChartBorderDashType | undefined;
                        } | undefined;
                        label?: {
                            contentType?: number | undefined;
                            position?: import("../..").SeriesLabelPosition | undefined;
                            format?: string | undefined;
                            customValues?: {
                                [x: number]: string | undefined;
                            } | undefined;
                            visible?: boolean | undefined;
                            content?: string | undefined;
                            fontSize?: number | undefined;
                            color?: string | undefined;
                            align?: import("../..").LabelAlignEnum | undefined;
                            bold?: boolean | undefined;
                            family?: string | undefined;
                            strikethrough?: boolean | undefined;
                            italic?: boolean | undefined;
                            underline?: boolean | undefined;
                            padAngle?: boolean | undefined;
                            axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                            showMaxLabel?: boolean | undefined;
                            showMinLabel?: boolean | undefined;
                            rotate?: number | undefined;
                        } | undefined;
                        point?: {
                            shape?: import("../..").LinePointShape | undefined;
                            size?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                        } | undefined;
                        dataPoints?: {
                            [x: number]: {
                                color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                                fillOpacity?: number | undefined;
                                size?: number | undefined;
                                shape?: import("../..").LinePointShape | undefined;
                            } | undefined;
                        } | undefined;
                        waterfall?: /*elided*/ any | undefined;
                        name?: string | undefined;
                    } | undefined;
                    negative?: {
                        chartType?: (ChartTypeBits.Line | ChartTypeBits.Column | ChartTypeBits.ColumnStacked | ChartTypeBits.Area | ChartTypeBits.AreaStacked) | undefined;
                        rightYAxis?: boolean | undefined;
                        color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                        fillOpacity?: number | undefined;
                        border?: {
                            opacity?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                            width?: number | undefined;
                            dashType?: import("../..").ChartBorderDashType | undefined;
                        } | undefined;
                        label?: {
                            contentType?: number | undefined;
                            position?: import("../..").SeriesLabelPosition | undefined;
                            format?: string | undefined;
                            customValues?: {
                                [x: number]: string | undefined;
                            } | undefined;
                            visible?: boolean | undefined;
                            content?: string | undefined;
                            fontSize?: number | undefined;
                            color?: string | undefined;
                            align?: import("../..").LabelAlignEnum | undefined;
                            bold?: boolean | undefined;
                            family?: string | undefined;
                            strikethrough?: boolean | undefined;
                            italic?: boolean | undefined;
                            underline?: boolean | undefined;
                            padAngle?: boolean | undefined;
                            axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                            showMaxLabel?: boolean | undefined;
                            showMinLabel?: boolean | undefined;
                            rotate?: number | undefined;
                        } | undefined;
                        point?: {
                            shape?: import("../..").LinePointShape | undefined;
                            size?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                        } | undefined;
                        dataPoints?: {
                            [x: number]: {
                                color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                                fillOpacity?: number | undefined;
                                size?: number | undefined;
                                shape?: import("../..").LinePointShape | undefined;
                            } | undefined;
                        } | undefined;
                        waterfall?: /*elided*/ any | undefined;
                        name?: string | undefined;
                    } | undefined;
                    subtotal?: {
                        chartType?: (ChartTypeBits.Line | ChartTypeBits.Column | ChartTypeBits.ColumnStacked | ChartTypeBits.Area | ChartTypeBits.AreaStacked) | undefined;
                        rightYAxis?: boolean | undefined;
                        color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                        fillOpacity?: number | undefined;
                        border?: {
                            opacity?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                            width?: number | undefined;
                            dashType?: import("../..").ChartBorderDashType | undefined;
                        } | undefined;
                        label?: {
                            contentType?: number | undefined;
                            position?: import("../..").SeriesLabelPosition | undefined;
                            format?: string | undefined;
                            customValues?: {
                                [x: number]: string | undefined;
                            } | undefined;
                            visible?: boolean | undefined;
                            content?: string | undefined;
                            fontSize?: number | undefined;
                            color?: string | undefined;
                            align?: import("../..").LabelAlignEnum | undefined;
                            bold?: boolean | undefined;
                            family?: string | undefined;
                            strikethrough?: boolean | undefined;
                            italic?: boolean | undefined;
                            underline?: boolean | undefined;
                            padAngle?: boolean | undefined;
                            axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                            showMaxLabel?: boolean | undefined;
                            showMinLabel?: boolean | undefined;
                            rotate?: number | undefined;
                        } | undefined;
                        point?: {
                            shape?: import("../..").LinePointShape | undefined;
                            size?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                        } | undefined;
                        dataPoints?: {
                            [x: number]: {
                                color?: import("@univerjs/core").Nullable<import("../..").ChartColor>;
                                fillOpacity?: number | undefined;
                                size?: number | undefined;
                                shape?: import("../..").LinePointShape | undefined;
                            } | undefined;
                        } | undefined;
                        waterfall?: /*elided*/ any | undefined;
                        name?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            includeZeroValues?: boolean | undefined;
        } | undefined;
        heatmap?: {
            visualMapType?: "continuous" | "piecewise" | undefined;
            max?: number | undefined;
            min?: number | undefined;
            unit?: string | undefined;
            label?: {
                contentType?: number | undefined;
                position?: import("../..").SeriesLabelPosition | undefined;
                format?: string | undefined;
                customValues?: {
                    [x: number]: string | undefined;
                } | undefined;
                visible?: boolean | undefined;
                content?: string | undefined;
                fontSize?: number | undefined;
                color?: string | undefined;
                align?: import("../..").LabelAlignEnum | undefined;
                bold?: boolean | undefined;
                family?: string | undefined;
                strikethrough?: boolean | undefined;
                italic?: boolean | undefined;
                underline?: boolean | undefined;
                padAngle?: boolean | undefined;
                axisTitleAlign?: import("../..").AxisAlignEnum | undefined;
                showMaxLabel?: boolean | undefined;
                showMinLabel?: boolean | undefined;
                rotate?: number | undefined;
            } | undefined;
        } | undefined;
        candlestick?: {
            rising?: {
                color?: string | undefined;
                fillOpacity?: number | undefined;
                border?: {
                    color?: string | undefined;
                    width?: number | undefined;
                    opacity?: number | undefined;
                } | undefined;
                hollow?: boolean | undefined;
            } | undefined;
            falling?: {
                color?: string | undefined;
                fillOpacity?: number | undefined;
                border?: {
                    color?: string | undefined;
                    width?: number | undefined;
                    opacity?: number | undefined;
                } | undefined;
                hollow?: boolean | undefined;
            } | undefined;
            doji?: {
                color?: string | undefined;
                fillOpacity?: number | undefined;
                border?: {
                    color?: string | undefined;
                    width?: number | undefined;
                    opacity?: number | undefined;
                } | undefined;
                hollow?: boolean | undefined;
            } | undefined;
            candleWidth?: number | undefined;
        } | undefined;
        histogram?: {
            binGap?: number | undefined;
        } | undefined;
        treemap?: {
            parentLabelLayout?: import("../..").TreemapParentLabelLayout | undefined;
            label?: {
                visible?: boolean | undefined;
                contentType?: import("../..").LabelContentType | undefined;
                color?: string | undefined;
                fontSize?: number | undefined;
                bold?: boolean | undefined;
                italic?: boolean | undefined;
                family?: string | undefined;
                format?: string | undefined;
            } | undefined;
        } | undefined;
        sunburst?: {
            centerLabel?: {
                visible?: boolean | undefined;
                color?: string | undefined;
                fontSize?: number | undefined;
                bold?: boolean | undefined;
                italic?: boolean | undefined;
                family?: string | undefined;
                format?: string | undefined;
            } | undefined;
            label?: {
                visible?: boolean | undefined;
                contentType?: import("../..").LabelContentType | undefined;
                position?: import("../..").ChartSunburstLabelPosition | undefined;
                color?: string | undefined;
                fontSize?: number | undefined;
                bold?: boolean | undefined;
                italic?: boolean | undefined;
                family?: string | undefined;
                format?: string | undefined;
            } | undefined;
        } | undefined;
        gauge?: {
            mode?: import("../..").ChartGaugeMode | undefined;
            scale?: {
                min?: number | undefined;
                max?: number | undefined;
                splitNumber?: number | undefined;
            } | undefined;
            angles?: {
                startAngle?: number | undefined;
                endAngle?: number | undefined;
            } | undefined;
            ranges?: import("../..").IChartGaugeRangeSpec[] | undefined;
            axisLine?: {
                visible?: boolean | undefined;
                width?: number | undefined;
                color?: string | undefined;
            } | undefined;
            axisTick?: {
                visible?: boolean | undefined;
                splitNumber?: number | undefined;
                length?: number | undefined;
                width?: number | undefined;
                color?: string | undefined;
            } | undefined;
            splitLine?: {
                visible?: boolean | undefined;
                length?: number | undefined;
                width?: number | undefined;
                color?: string | undefined;
            } | undefined;
            axisLabel?: {
                visible?: boolean | undefined;
                distance?: number | undefined;
                color?: string | undefined;
                fontSize?: number | undefined;
                bold?: boolean | undefined;
                italic?: boolean | undefined;
                family?: string | undefined;
                format?: string | undefined;
            } | undefined;
            pointer?: {
                visible?: boolean | undefined;
                length?: number | undefined;
                width?: number | undefined;
                color?: string | undefined;
                shape?: import("../..").ChartGaugePointerShape | undefined;
            } | undefined;
            anchor?: {
                visible?: boolean | undefined;
                size?: number | undefined;
                color?: string | undefined;
                borderColor?: string | undefined;
                borderWidth?: number | undefined;
            } | undefined;
            progress?: {
                visible?: boolean | undefined;
                width?: number | undefined;
                color?: string | undefined;
                rounded?: boolean | undefined;
            } | undefined;
            title?: {
                visible?: boolean | undefined;
                offsetY?: number | undefined;
                color?: string | undefined;
                fontSize?: number | undefined;
                bold?: boolean | undefined;
                italic?: boolean | undefined;
                family?: string | undefined;
            } | undefined;
            detail?: {
                visible?: boolean | undefined;
                offsetY?: number | undefined;
                color?: string | undefined;
                fontSize?: number | undefined;
                bold?: boolean | undefined;
                italic?: boolean | undefined;
                family?: string | undefined;
                format?: string | undefined;
            } | undefined;
        } | undefined;
        chord?: {
            layout?: {
                startAngle?: number | undefined;
                clockwise?: boolean | undefined;
                padAngle?: number | undefined;
                minAngle?: number | undefined;
                innerRadiusRatio?: number | undefined;
                outerRadiusRatio?: number | undefined;
            } | undefined;
            node?: {
                color?: string | undefined;
                opacity?: number | undefined;
                borderColor?: string | undefined;
                borderWidth?: number | undefined;
                borderType?: import("../..").ChartBorderDashType | undefined;
            } | undefined;
            label?: {
                visible?: boolean | undefined;
                position?: import("../..").ChartChordLabelPosition | undefined;
                rotation?: number | undefined;
                distance?: number | undefined;
                color?: string | undefined;
                fontSize?: number | undefined;
                bold?: boolean | undefined;
                italic?: boolean | undefined;
                family?: string | undefined;
            } | undefined;
            ribbon?: {
                color?: import("../..").ChartChordRibbonColorMode | undefined;
                opacity?: number | undefined;
                width?: number | undefined;
                type?: import("../..").ChartBorderDashType | undefined;
            } | undefined;
            emphasis?: {
                focus?: import("../..").ChartChordFocusMode | undefined;
            } | undefined;
        } | undefined;
    };
    get config(): IChartConfig | null;
    protected _configSubscription: Subscription | null;
    constructor(id: string, options: IChartModelInit, _injector: Injector);
    getInjector(): Injector;
    init(): void;
    getRuntimeService(): {
        chartThemeService: ChartThemeService;
    };
    replaceDataSource(dataSource: IChartDataSource): void;
    getRuntimeContext(direction?: ChartDirection): IChartRuntimeContext;
    /** Deep-merges the supplied style patch into the current style. Unspecified fields are preserved. */
    assignStyle(newStyle: ChartStyle): void;
    /** Replaces the complete style group with a cloned value. */
    setStyle(style: ChartStyle): void;
    /** Deep-merges the supplied context patch into the current context. Unspecified fields are preserved. */
    assignChartContext(context: Partial<IChartContext> | IChartSnapshotContext): void;
    /** Replaces the complete chart context with a cloned value. */
    setChartContext(context: IChartContext | IChartSnapshotContext): void;
    private _withInferredCategoryType;
    /** Deep-merges the supplied aggregation patch into the current aggregation config. */
    assignDataAggregation(config: Partial<IChartDataAggregation>): void;
    /** Replaces the complete aggregation config with a cloned value. */
    setDataAggregation(config: IChartDataAggregation): void;
    setChartType(type: ChartTypeBits): void;
    serialize(): IChartSnapshot;
    onDispose(effect: () => void): void;
    dispose(): void;
}
