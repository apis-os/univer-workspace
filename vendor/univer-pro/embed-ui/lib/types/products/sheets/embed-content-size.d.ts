import type { IEmbedContentSizeProvider } from '../../types/embed-ui';
import { Workbook } from '@univerjs/core';
export declare const DEFAULT_SHEET_COLUMN_HEADER_HEIGHT = 24;
type ActiveWorksheet = Exclude<ReturnType<Workbook['getActiveSheet']>, null | undefined | void>;
export declare function createSheetsContentSizeProvider(): IEmbedContentSizeProvider;
export declare function resolveSheetsStickyHeaderHeight(childUnit: unknown): number;
export declare function resolveSheetsViewportEndColumn(worksheet: ActiveWorksheet, viewportWidth: number): number;
export {};
