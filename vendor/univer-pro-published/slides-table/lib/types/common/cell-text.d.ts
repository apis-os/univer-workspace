import type { IDocumentData } from '@univerjs/core';
import type { ISlideTableCellStyle, ISlideTableSnapshot } from '../types';
export interface IBuildSlideTableCellTextDataPatchOptions {
    verticalAlign?: ISlideTableCellStyle['verticalAlign'];
}
export declare function setSlideTableCellTextData(table: ISlideTableSnapshot, row: number, column: number, textData: IDocumentData | null): ISlideTableSnapshot;
export declare function buildSlideTableCellTextDataPatch(table: ISlideTableSnapshot, row: number, column: number, textData: IDocumentData | null, options?: IBuildSlideTableCellTextDataPatchOptions): Pick<ISlideTableSnapshot, 'rows'> | null;
