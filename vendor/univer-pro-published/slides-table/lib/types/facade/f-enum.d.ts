import { SlideTableBorderDashEnum, SlideTableBorderPresetEnum, SlideTableFillTypeEnum, SlideTableGradientFillTypeEnum, SlideTablePictureFillModeEnum, SlideTableTextDirectionEnum, SlideTableVerticalAlignEnum } from '@univerjs-pro/slides-table';
export interface IFSlideTableEnumMixin {
    /**
     * Slide table fill type enum.
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideById('slide-1');
     *
     * const table = fSlide.getTableById('status-table');
     * table.setCellStyle(table.getTableRange(), {
     *   fill: {
     *     type: univerAPI.Enum.SlideTableFillTypeEnum.Solid,
     *     color: '#E8F1FF',
     *     alpha: 1,
     *   },
     * });
     * ```
     */
    SlideTableFillTypeEnum: typeof SlideTableFillTypeEnum;
    /**
     * Slide table gradient fill type enum.
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideById('slide-1');
     *
     * const table = fSlide.getTableById('status-table');
     * table.setCellStyle(table.getTableRange(), {
     *   fill: {
     *     type: univerAPI.Enum.SlideTableFillTypeEnum.Gradient,
     *     gradient: {
     *       type: univerAPI.Enum.SlideTableGradientFillTypeEnum.Linear,
     *       angle: 90,
     *       stops: [
     *         { color: '#E8F1FF', offset: 0, opacity: 1 },
     *         { color: '#FFFFFF', offset: 1, opacity: 1 },
     *       ],
     *     }
     *   },
     * });
     * ```
     */
    SlideTableGradientFillTypeEnum: typeof SlideTableGradientFillTypeEnum;
    /**
     * Slide table picture fill mode enum.
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideById('slide-1');
     *
     * const table = fSlide.getTableById('status-table');
     * table.setCellStyle(table.getTableRange(), {
     *   fill: {
     *     type: univerAPI.Enum.SlideTableFillTypeEnum.Picture,
     *     picture: {
     *       source: 'https://example.com/image.png',
     *       mode: univerAPI.Enum.SlideTablePictureFillModeEnum.Tile,
     *     },
     *   },
     * });
     * ```
     */
    SlideTablePictureFillModeEnum: typeof SlideTablePictureFillModeEnum;
    /**
     * Slide table border dash enum.
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideById('slide-1');
     *
     * const table = fSlide.getTableById('status-table');
     * table.setCellStyle(table.getTableRange(), {
     *   borders: {
     *     left: {
     *       color: '#111827',
     *       width: 1,
     *       dash: univerAPI.Enum.SlideTableBorderDashEnum.Dash,
     *     },
     *   },
     * });
     * ```
     */
    SlideTableBorderDashEnum: typeof SlideTableBorderDashEnum;
    /**
     * Slide table border preset enum.
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const table = fSlide.getTableById('status-table');
     * table.setBorder(
     *   table.getTableRange(),
     *   {
     *     color: '#111827',
     *     width: 1,
     *     dash: univerAPI.Enum.SlideTableBorderDashEnum.Dash
     *   },
     *   univerAPI.Enum.SlideTableBorderPresetEnum.Outer
     * );
     * ```
     */
    SlideTableBorderPresetEnum: typeof SlideTableBorderPresetEnum;
    /**
     * Chart type enum.
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideById('slide-1');
     *
     * const table = fSlide.getTableById('status-table');
     * table.setCellStyle(table.getTableRange(), {
     *   verticalAlign: univerAPI.Enum.SlideTableVerticalAlignEnum.Middle,
     * });
     * ```
     */
    SlideTableVerticalAlignEnum: typeof SlideTableVerticalAlignEnum;
    /**
     * Slide table text direction enum.
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideById('slide-1');
     *
     * const table = fSlide.getTableById('status-table');
     * table.setCellStyle(table.getTableRange(), {
     *   textDirection: univerAPI.Enum.SlideTableTextDirectionEnum.Vertical,
     * });
     * ```
     */
    SlideTableTextDirectionEnum: typeof SlideTableTextDirectionEnum;
}
declare module '@univerjs/core/facade' {
    interface FEnum extends IFSlideTableEnumMixin {
    }
}
