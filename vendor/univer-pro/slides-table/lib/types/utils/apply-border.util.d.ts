import type { ISlideTableBorder, ISlideTableCellRange, ISlideTableRow } from '../types';
import { SlideTableBorderPresetEnum } from '../types';
export declare function shouldApplyTopBorder(preset: SlideTableBorderPresetEnum, row: number, range: ISlideTableCellRange): boolean;
export declare function shouldApplyBottomBorder(preset: SlideTableBorderPresetEnum, row: number, range: ISlideTableCellRange): boolean;
export declare function shouldApplyLeftBorder(preset: SlideTableBorderPresetEnum, column: number, range: ISlideTableCellRange): boolean;
export declare function shouldApplyRightBorder(preset: SlideTableBorderPresetEnum, column: number, range: ISlideTableCellRange): boolean;
export declare function getDefaultSlideTableBorder(): ISlideTableBorder;
export declare function buildBorderPresetPatch(rows: ISlideTableRow[], sourceRange: ISlideTableCellRange, preset: SlideTableBorderPresetEnum, border?: ISlideTableBorder): {
    rows: ISlideTableRow[];
    changed: boolean;
};
