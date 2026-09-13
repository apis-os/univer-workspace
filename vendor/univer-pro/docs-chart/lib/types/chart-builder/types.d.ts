import type { ChartDataSourceValue, ChartStyle, ChartTypeBits, IChartDataAggregation, IChartDataSourceInput, IChartInfo, IChartResourceContext } from '@univerjs-pro/engine-chart';
import type { PositionedObjectLayoutType } from '@univerjs/core';
import type { DocChartDataEditMode } from '../types';
export declare enum DocChartInsertAnchorKind {
    Selection = "selection",
    BodyOffset = "bodyOffset",
    Paragraph = "paragraph",
    TextRange = "textRange"
}
export declare enum DocChartParagraphPosition {
    Before = "before",
    After = "after"
}
export type DocChartInsertAnchor = {
    kind: DocChartInsertAnchorKind.Selection;
} | {
    kind: DocChartInsertAnchorKind.BodyOffset;
    offset: number;
} | {
    kind: DocChartInsertAnchorKind.Paragraph;
    index: number;
    where?: DocChartParagraphPosition;
} | {
    kind: DocChartInsertAnchorKind.TextRange;
    startOffset: number;
    endOffset?: number;
    collapsed?: boolean;
};
export interface IDocChartLayoutSpec {
    /** Chart width in pixels. Defaults to `480` on insertion. */
    width?: number;
    /** Chart height in pixels. Defaults to `320` on insertion. */
    height?: number;
    /**
     * Controls how the Chart participates in document text layout. Defaults to `INLINE` on insertion.
     *
     * Prefer `INLINE`, `WRAP_SQUARE`, or `WRAP_TOP_AND_BOTTOM` for document Charts. `WRAP_NONE` creates a foreground
     * overlay that does not cause text to reflow and can cover text. The contour wrapping modes require drawing
     * contour data that the Chart Facade does not provide and should not be used here.
     */
    layoutType?: PositionedObjectLayoutType;
    /** Floating position offsets. Inline Charts remain positioned by the text flow. */
    position?: {
        x: number;
        y: number;
    };
}
export interface IDocChartInsertOptions {
    at?: DocChartInsertAnchor;
    /** Optional Chart size and text-layout behavior. */
    layout?: IDocChartLayoutSpec;
}
export interface IDocChartCreateSpec {
    values: ChartDataSourceValue[][];
    dataSource?: IChartDataSourceInput;
    chartType?: ChartTypeBits;
    style?: ChartStyle;
    context?: IChartResourceContext;
    dataAggregation?: IChartDataAggregation;
    insert?: IDocChartInsertOptions;
}
export interface IDocumentChartInfo extends IChartInfo<IChartDataSourceInput> {
    anchor?: DocChartInsertAnchor;
    layoutType?: PositionedObjectLayoutType;
}
export interface IDocChartUpdateDataOptions {
    mode?: DocChartDataEditMode;
}
