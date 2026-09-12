import type { SlideTableMovePosition } from '@univerjs-pro/slides-table';
export declare const DEFAULT_BOARD_TABLE_COLUMN_WIDTH = 96;
export declare const DEFAULT_BOARD_TABLE_ROW_HEIGHT = 24;
export declare function areBoardTableValuesExactlyEqual(left: unknown, right: unknown): boolean;
export declare function isBoardTableMoveNoOp(startIndex: number, endIndex: number, targetIndex: number, position: SlideTableMovePosition, length: number): boolean;
