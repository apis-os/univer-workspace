import type { IChartDataAggregation } from '../../chart-data-aggregation';
import type { InvalidValueType } from '../../enum';
import type { ChartModel } from '../../models/chart-model/chart-model';
import type { IChartLocaleTexts } from '../../models/common/chart-locale-texts';
import type { IChartContext, IUniverDataSet } from '../../types';
import type { ChartColor } from '../chart-color';
import type { ChartPendingConfig, IChartDescription } from '../chart-types';
import { ChartTypeBits, LabelContentType, LegendPositionEnum, SeriesLabelPosition, TitlePositionEnum } from '../../enum';
import { PieSecondaryPlotType } from '../chart-types';
export declare function describeChartModel(chartModel: ChartModel, pending?: ChartPendingConfig, dataSet?: IUniverDataSet): IChartDescription;
/**
 * Projects one description field without materializing the complete description.
 * Chart editor state uses this seam to avoid repeating unrelated conversions.
 */
export declare function projectChartModelDescription<K extends keyof IChartDescription>(chartModel: ChartModel, key: K): IChartDescription[K];
/** Projects data-free field metadata from an effective source without materializing chart data. */
export declare function resolveChartDescriptionMetadata(description: IChartDescription, dataSet: IUniverDataSet, localeTexts: Pick<IChartLocaleTexts, 'seriesDefaultName'>): Pick<IChartDescription, 'series' | 'category'>;
/** Resolves pending semantic state from source metadata without consulting debounced render config. */
export declare function mergeChartModelConfigPatch(chartModel: ChartModel, pending: ChartPendingConfig, dataSet: IUniverDataSet): {
    chartType: ChartTypeBits;
    style: {
        width?: number | undefined;
        height?: number | undefined;
        theme?: string | undefined;
        palette?: string[] | undefined;
        invalidValueType?: InvalidValueType | undefined;
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
            titlePosition?: TitlePositionEnum | undefined;
        } | undefined;
        legend?: {
            position?: LegendPositionEnum | undefined;
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
                position?: SeriesLabelPosition | undefined;
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
            color?: import("@univerjs/core").Nullable<ChartColor>;
            point?: {
                shape?: import("../..").LinePointShape | undefined;
                size?: number | undefined;
                color?: import("@univerjs/core").Nullable<string>;
            } | undefined;
            waterfall?: {
                positive?: {
                    chartType?: (ChartTypeBits.Line | ChartTypeBits.Column | ChartTypeBits.ColumnStacked | ChartTypeBits.Area | ChartTypeBits.AreaStacked) | undefined;
                    rightYAxis?: boolean | undefined;
                    color?: import("@univerjs/core").Nullable<ChartColor>;
                    fillOpacity?: number | undefined;
                    border?: {
                        opacity?: number | undefined;
                        color?: import("@univerjs/core").Nullable<string>;
                        width?: number | undefined;
                        dashType?: import("../..").ChartBorderDashType | undefined;
                    } | undefined;
                    label?: {
                        contentType?: number | undefined;
                        position?: SeriesLabelPosition | undefined;
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
                            color?: import("@univerjs/core").Nullable<ChartColor>;
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
                    color?: import("@univerjs/core").Nullable<ChartColor>;
                    fillOpacity?: number | undefined;
                    border?: {
                        opacity?: number | undefined;
                        color?: import("@univerjs/core").Nullable<string>;
                        width?: number | undefined;
                        dashType?: import("../..").ChartBorderDashType | undefined;
                    } | undefined;
                    label?: {
                        contentType?: number | undefined;
                        position?: SeriesLabelPosition | undefined;
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
                            color?: import("@univerjs/core").Nullable<ChartColor>;
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
                    color?: import("@univerjs/core").Nullable<ChartColor>;
                    fillOpacity?: number | undefined;
                    border?: {
                        opacity?: number | undefined;
                        color?: import("@univerjs/core").Nullable<string>;
                        width?: number | undefined;
                        dashType?: import("../..").ChartBorderDashType | undefined;
                    } | undefined;
                    label?: {
                        contentType?: number | undefined;
                        position?: SeriesLabelPosition | undefined;
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
                            color?: import("@univerjs/core").Nullable<ChartColor>;
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
                color?: import("@univerjs/core").Nullable<ChartColor>;
                fillOpacity?: number | undefined;
                border?: {
                    opacity?: number | undefined;
                    color?: import("@univerjs/core").Nullable<string>;
                    width?: number | undefined;
                    dashType?: import("../..").ChartBorderDashType | undefined;
                } | undefined;
                label?: {
                    contentType?: number | undefined;
                    position?: SeriesLabelPosition | undefined;
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
                        color?: import("@univerjs/core").Nullable<ChartColor>;
                        fillOpacity?: number | undefined;
                        size?: number | undefined;
                        shape?: import("../..").LinePointShape | undefined;
                    } | undefined;
                } | undefined;
                waterfall?: {
                    positive?: {
                        chartType?: (ChartTypeBits.Line | ChartTypeBits.Column | ChartTypeBits.ColumnStacked | ChartTypeBits.Area | ChartTypeBits.AreaStacked) | undefined;
                        rightYAxis?: boolean | undefined;
                        color?: import("@univerjs/core").Nullable<ChartColor>;
                        fillOpacity?: number | undefined;
                        border?: {
                            opacity?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                            width?: number | undefined;
                            dashType?: import("../..").ChartBorderDashType | undefined;
                        } | undefined;
                        label?: {
                            contentType?: number | undefined;
                            position?: SeriesLabelPosition | undefined;
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
                                color?: import("@univerjs/core").Nullable<ChartColor>;
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
                        color?: import("@univerjs/core").Nullable<ChartColor>;
                        fillOpacity?: number | undefined;
                        border?: {
                            opacity?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                            width?: number | undefined;
                            dashType?: import("../..").ChartBorderDashType | undefined;
                        } | undefined;
                        label?: {
                            contentType?: number | undefined;
                            position?: SeriesLabelPosition | undefined;
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
                                color?: import("@univerjs/core").Nullable<ChartColor>;
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
                        color?: import("@univerjs/core").Nullable<ChartColor>;
                        fillOpacity?: number | undefined;
                        border?: {
                            opacity?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                            width?: number | undefined;
                            dashType?: import("../..").ChartBorderDashType | undefined;
                        } | undefined;
                        label?: {
                            contentType?: number | undefined;
                            position?: SeriesLabelPosition | undefined;
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
                                color?: import("@univerjs/core").Nullable<ChartColor>;
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
                    type?: PieSecondaryPlotType | undefined;
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
                        color?: ChartColor | undefined;
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
                    color?: import("@univerjs/core").Nullable<ChartColor>;
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
                color?: import("@univerjs/core").Nullable<ChartColor>;
                fillOpacity?: number | undefined;
                border?: {
                    opacity?: number | undefined;
                    color?: import("@univerjs/core").Nullable<string>;
                    width?: number | undefined;
                    dashType?: import("../..").ChartBorderDashType | undefined;
                } | undefined;
                label?: {
                    contentType?: number | undefined;
                    position?: SeriesLabelPosition | undefined;
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
                        color?: import("@univerjs/core").Nullable<ChartColor>;
                        fillOpacity?: number | undefined;
                        size?: number | undefined;
                        shape?: import("../..").LinePointShape | undefined;
                    } | undefined;
                } | undefined;
                waterfall?: {
                    positive?: {
                        chartType?: (ChartTypeBits.Line | ChartTypeBits.Column | ChartTypeBits.ColumnStacked | ChartTypeBits.Area | ChartTypeBits.AreaStacked) | undefined;
                        rightYAxis?: boolean | undefined;
                        color?: import("@univerjs/core").Nullable<ChartColor>;
                        fillOpacity?: number | undefined;
                        border?: {
                            opacity?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                            width?: number | undefined;
                            dashType?: import("../..").ChartBorderDashType | undefined;
                        } | undefined;
                        label?: {
                            contentType?: number | undefined;
                            position?: SeriesLabelPosition | undefined;
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
                                color?: import("@univerjs/core").Nullable<ChartColor>;
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
                        color?: import("@univerjs/core").Nullable<ChartColor>;
                        fillOpacity?: number | undefined;
                        border?: {
                            opacity?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                            width?: number | undefined;
                            dashType?: import("../..").ChartBorderDashType | undefined;
                        } | undefined;
                        label?: {
                            contentType?: number | undefined;
                            position?: SeriesLabelPosition | undefined;
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
                                color?: import("@univerjs/core").Nullable<ChartColor>;
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
                        color?: import("@univerjs/core").Nullable<ChartColor>;
                        fillOpacity?: number | undefined;
                        border?: {
                            opacity?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                            width?: number | undefined;
                            dashType?: import("../..").ChartBorderDashType | undefined;
                        } | undefined;
                        label?: {
                            contentType?: number | undefined;
                            position?: SeriesLabelPosition | undefined;
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
                                color?: import("@univerjs/core").Nullable<ChartColor>;
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
                color?: import("@univerjs/core").Nullable<ChartColor>;
                fillOpacity?: number | undefined;
                border?: {
                    opacity?: number | undefined;
                    color?: import("@univerjs/core").Nullable<string>;
                    width?: number | undefined;
                    dashType?: import("../..").ChartBorderDashType | undefined;
                } | undefined;
                label?: {
                    contentType?: number | undefined;
                    position?: SeriesLabelPosition | undefined;
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
                        color?: import("@univerjs/core").Nullable<ChartColor>;
                        fillOpacity?: number | undefined;
                        size?: number | undefined;
                        shape?: import("../..").LinePointShape | undefined;
                    } | undefined;
                } | undefined;
                waterfall?: {
                    positive?: {
                        chartType?: (ChartTypeBits.Line | ChartTypeBits.Column | ChartTypeBits.ColumnStacked | ChartTypeBits.Area | ChartTypeBits.AreaStacked) | undefined;
                        rightYAxis?: boolean | undefined;
                        color?: import("@univerjs/core").Nullable<ChartColor>;
                        fillOpacity?: number | undefined;
                        border?: {
                            opacity?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                            width?: number | undefined;
                            dashType?: import("../..").ChartBorderDashType | undefined;
                        } | undefined;
                        label?: {
                            contentType?: number | undefined;
                            position?: SeriesLabelPosition | undefined;
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
                                color?: import("@univerjs/core").Nullable<ChartColor>;
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
                        color?: import("@univerjs/core").Nullable<ChartColor>;
                        fillOpacity?: number | undefined;
                        border?: {
                            opacity?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                            width?: number | undefined;
                            dashType?: import("../..").ChartBorderDashType | undefined;
                        } | undefined;
                        label?: {
                            contentType?: number | undefined;
                            position?: SeriesLabelPosition | undefined;
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
                                color?: import("@univerjs/core").Nullable<ChartColor>;
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
                        color?: import("@univerjs/core").Nullable<ChartColor>;
                        fillOpacity?: number | undefined;
                        border?: {
                            opacity?: number | undefined;
                            color?: import("@univerjs/core").Nullable<string>;
                            width?: number | undefined;
                            dashType?: import("../..").ChartBorderDashType | undefined;
                        } | undefined;
                        label?: {
                            contentType?: number | undefined;
                            position?: SeriesLabelPosition | undefined;
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
                                color?: import("@univerjs/core").Nullable<ChartColor>;
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
                position?: SeriesLabelPosition | undefined;
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
                contentType?: LabelContentType | undefined;
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
                contentType?: LabelContentType | undefined;
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
    context: IChartContext;
    dataAggregation: IChartDataAggregation;
};
