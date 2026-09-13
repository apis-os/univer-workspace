import type { Spreadsheet } from '@univerjs/engine-render';
/** Copy only extensions that explicitly provide a print-safe instance. */
export declare function copySheetExtensionsForPrinting(source: Spreadsheet, target: Spreadsheet): void;
