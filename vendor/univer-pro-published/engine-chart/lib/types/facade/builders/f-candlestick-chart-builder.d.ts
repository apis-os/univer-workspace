import type { IChartCandlestickMappingSpec, IChartCandlestickStateStyleSpec, IChartInfo } from '@univerjs-pro/engine-chart';
import { FAxisChartBuilder } from '../f-axis-chart-builder';
/**
 * Fluent semantic builder for a single OHLC Candlestick series.
 *
 * Each source row represents one trading interval. Map one category field and four
 * distinct numeric fields in Open, High, Low, Close order. A row with any missing or
 * non-finite OHLC value renders as a gap rather than a partial candle.
 *
 * @example Sheet
 * ```ts
 * const fWorkbook = univerAPI.getActiveWorkbook();
 * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
 * const chartInfo = fWorksheet
 *   .newChart(univerAPI.Enum.ChartTypeString.Candlestick)
 *   .setSource({
 *     range: 'A1:E8',
 *     orientation: univerAPI.Enum.ChartSourceOrientation.Columns,
 *   })
 *   .setCategoryField(0)
 *   .setCandlestickFields({ openIndex: 1, highIndex: 2, lowIndex: 3, closeIndex: 4 })
 *   .setRisingStyle({ color: '#0DA471', hollow: true })
 *   .setFallingStyle({ color: '#F05252' })
 *   .setDojiStyle({ color: '#8C8C8C', border: { width: 2 } })
 *   .setCandleWidth(18)
 *   .build();
 * await fWorksheet.insertChart(chartInfo);
 * ```
 *
 * @example Doc
 * ```ts
 * const fDocument = univerAPI.getActiveDocument();
 * const chartInfo = fDocument
 *   .newChart(univerAPI.Enum.ChartTypeString.Candlestick)
 *   .setSource([['Date', 'Open', 'High', 'Low', 'Close'], ['Mon', 100, 112, 96, 108], ['Tue', 108, 116, 102, 105]])
 *   .setCategoryField(0)
 *   .setCandlestickFields({ openIndex: 1, highIndex: 2, lowIndex: 3, closeIndex: 4 })
 *   .setRisingStyle({ color: '#0DA471', hollow: true })
 *   .setFallingStyle({ color: '#F05252' })
 *   .setDojiStyle({ color: '#8C8C8C', border: { width: 2 } })
 *   .setCandleWidth(18)
 *   .build();
 * await fDocument.insertChart(chartInfo);
 * ```
 *
 * @example Slide
 * ```ts
 * const fPresentation = univerAPI.getActivePresentation();
 * const fSlide = fPresentation.getSlideByIndex(0);
 * const chartInfo = fSlide
 *   .newChart(univerAPI.Enum.ChartTypeString.Candlestick)
 *   .setSource([['Date', 'Open', 'High', 'Low', 'Close'], ['Mon', 100, 112, 96, 108], ['Tue', 108, 116, 102, 105]])
 *   .setCategoryField(0)
 *   .setCandlestickFields({ openIndex: 1, highIndex: 2, lowIndex: 3, closeIndex: 4 })
 *   .setRisingStyle({ color: '#0DA471', hollow: true })
 *   .setFallingStyle({ color: '#F05252' })
 *   .setDojiStyle({ color: '#8C8C8C', border: { width: 2 } })
 *   .setCandleWidth(18)
 *   .build();
 * await fSlide.insertChart(chartInfo);
 * ```
 *
 * @example Board
 * ```ts
 * const fBoard = univerAPI.getActiveBoard();
 * const chartInfo = fBoard
 *   .newChart(univerAPI.Enum.ChartTypeString.Candlestick)
 *   .setSource([['Date', 'Open', 'High', 'Low', 'Close'], ['Mon', 100, 112, 96, 108], ['Tue', 108, 116, 102, 105]])
 *   .setCategoryField(0)
 *   .setCandlestickFields({ openIndex: 1, highIndex: 2, lowIndex: 3, closeIndex: 4 })
 *   .setRisingStyle({ color: '#0DA471', hollow: true })
 *   .setFallingStyle({ color: '#F05252' })
 *   .setDojiStyle({ color: '#8C8C8C', border: { width: 2 } })
 *   .setCandleWidth(18)
 *   .build();
 * await fBoard.insertChart(chartInfo);
 * ```
 */
export declare class FCandlestickChartBuilder<TSource = never[], TDataSource = TSource, TInfo extends IChartInfo<TDataSource> = IChartInfo<TDataSource>> extends FAxisChartBuilder<TSource, TDataSource, TInfo> {
    /**
     * Replaces Open, High, Low, and Close source fields atomically.
     *
     * Category remains configured through `setCategoryField()`. Every supplied index must be a
     * unique non-negative integer. Read the pending or persisted value with
     * `builder.build().config.mapping?.candlestick`.
     *
     * @param fields Required semantic OHLC source field indexes.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder
     *   .setCategoryField(0)
     *   .setCandlestickFields({ openIndex: 1, highIndex: 2, lowIndex: 3, closeIndex: 4 });
     * const mapping = builder.build().config.mapping?.candlestick;
     * ```
     */
    setCandlestickFields(fields: IChartCandlestickMappingSpec): this;
    /**
     * Clears the atomic OHLC mapping while preserving the category field.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.clearCandlestickFields();
     * ```
     */
    clearCandlestickFields(): this;
    /**
     * Sets semantic Rising candle body and wick style overrides.
     *
     * @param style Rising body and wick style values, passed through without Facade range validation.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setRisingStyle({ color: '#0DA471', hollow: true });
     * ```
     */
    setRisingStyle(style: IChartCandlestickStateStyleSpec): this;
    /**
     * Clears explicit Rising style overrides so runtime defaults apply.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.clearRisingStyle();
     * ```
     */
    clearRisingStyle(): this;
    /**
     * Sets semantic Falling candle body and wick style overrides.
     *
     * @param style Falling body and wick style values, passed through without Facade range validation.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setFallingStyle({ color: '#F05252' });
     * ```
     */
    setFallingStyle(style: IChartCandlestickStateStyleSpec): this;
    /**
     * Clears explicit Falling style overrides so runtime defaults apply.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.clearFallingStyle();
     * ```
     */
    clearFallingStyle(): this;
    /**
     * Sets semantic Doji body and wick style overrides.
     *
     * @param style Doji body and wick style values, passed through without Facade range validation.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setDojiStyle({ color: '#8C8C8C', border: { width: 2 } });
     * ```
     */
    setDojiStyle(style: IChartCandlestickStateStyleSpec): this;
    /**
     * Clears explicit Doji style overrides so runtime defaults apply.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.clearDojiStyle();
     * ```
     */
    clearDojiStyle(): this;
    /**
     * Sets a fixed candle width value without Facade range validation.
     *
     * @param width Fixed candle width in pixels.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setCandleWidth(18);
     * ```
     */
    setCandleWidth(width: number): this;
    /**
     * Removes the fixed candle width so the renderer chooses it automatically.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.resetCandleWidth();
     * ```
     */
    resetCandleWidth(): this;
}
