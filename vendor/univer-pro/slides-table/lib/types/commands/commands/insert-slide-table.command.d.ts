import type { ISlideTableElement } from '@univerjs-pro/slides';
import type { ICommand } from '@univerjs/core';
import type { ICreateSlideTableOptions } from '../../services/slide-table-resource.service';
import type { ISlideTableSnapshot, ISlideTableThemeSnapshot } from '../../types';
export interface IInsertSlideTableCommandParams {
    unitId: string;
    subUnitId: string;
    createOptions: ICreateSlideTableOptions;
    table?: Partial<ISlideTableSnapshot>;
    theme?: ISlideTableThemeSnapshot;
    element?: Partial<ISlideTableElement>;
    insertIndex?: number;
}
export declare const InsertSlideTableCommand: ICommand<IInsertSlideTableCommandParams>;
