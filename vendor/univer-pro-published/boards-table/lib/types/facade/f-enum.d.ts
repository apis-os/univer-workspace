import { BoardDiagramTablePreset } from '@univerjs-pro/boards-table';
import { SlideTableBorderDashEnum, SlideTableBorderPresetEnum, SlideTableFillTypeEnum, SlideTableGradientFillTypeEnum, SlideTablePictureFillModeEnum, SlideTableTextDirectionEnum, SlideTableVerticalAlignEnum } from '@univerjs-pro/slides-table';
/**
 * Board table enum constants exposed through `univerAPI.Enum`.
 *
 * Import `@univerjs-pro/boards-table/facade` before using this surface. The Board-prefixed names avoid coupling agent
 * scripts to slide-table implementation packages while retaining the same table style value semantics.
 *
 * @example
 * ```ts
 * const preset = univerAPI.Enum.BoardTableBorderPresetEnum.All;
 * console.log(preset);
 * ```
 */
export interface IFBoardTableEnumMixin {
    /**
     * UML and ER diagram-table structures accepted by `insertTable()` and `insertTable()`.
     *
     * A preset supplies the initial table geometry and semantic styling. Set cell values after insertion to describe
     * the specific entity, class, fields, or relationship.
     *
     * @example
     * ```ts
     * console.log(univerAPI.Enum.BoardTableDiagramPreset.UMLClass);
     * ```
     */
    BoardTableDiagramPreset: typeof BoardDiagramTablePreset;
    /**
     * Fill styles accepted by `FBoardTable.setCellStyle()`.
     *
     * @example
     * ```ts
     * const fill = univerAPI.Enum.BoardTableFillTypeEnum.Solid;
     * console.log(fill);
     * ```
     */
    BoardTableFillTypeEnum: typeof SlideTableFillTypeEnum;
    /**
     * Gradient geometries accepted by Board table gradient fills.
     *
     * @example
     * ```ts
     * const gradientType = univerAPI.Enum.BoardTableGradientFillTypeEnum.Linear;
     * console.log(gradientType);
     * ```
     */
    BoardTableGradientFillTypeEnum: typeof SlideTableGradientFillTypeEnum;
    /**
     * Image placement modes accepted by Board table picture fills.
     *
     * @example
     * ```ts
     * const pictureMode = univerAPI.Enum.BoardTablePictureFillModeEnum.Stretch;
     * console.log(pictureMode);
     * ```
     */
    BoardTablePictureFillModeEnum: typeof SlideTablePictureFillModeEnum;
    /**
     * Border dash styles used by Board table border definitions.
     *
     * @example
     * ```ts
     * const dash = univerAPI.Enum.BoardTableBorderDashEnum.Dash;
     * console.log(dash);
     * ```
     */
    BoardTableBorderDashEnum: typeof SlideTableBorderDashEnum;
    /**
     * Border presets accepted by `FBoardTable.setBorderPreset()`.
     *
     * @example
     * ```ts
     * const preset = univerAPI.Enum.BoardTableBorderPresetEnum.All;
     * console.log(preset);
     * ```
     */
    BoardTableBorderPresetEnum: typeof SlideTableBorderPresetEnum;
    /**
     * Vertical alignment values accepted by Board table cell styles.
     *
     * @example
     * ```ts
     * const alignment = univerAPI.Enum.BoardTableVerticalAlignEnum.Middle;
     * console.log(alignment);
     * ```
     */
    BoardTableVerticalAlignEnum: typeof SlideTableVerticalAlignEnum;
    /**
     * Text direction values accepted by Board table cell styles.
     *
     * @example
     * ```ts
     * const direction = univerAPI.Enum.BoardTableTextDirectionEnum.Vertical;
     * console.log(direction);
     * ```
     */
    BoardTableTextDirectionEnum: typeof SlideTableTextDirectionEnum;
}
declare module '@univerjs/core/facade' {
    interface FEnum extends IFBoardTableEnumMixin {
    }
}
