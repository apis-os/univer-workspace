import type { ISlideTableObjectSelection } from '../render-objects/slide-table-object';
import type { ISlideTableSelection } from '../services/slide-table-selection.service';
export declare function resolveSlideTableObjectSelection(selection: ISlideTableSelection | null): ISlideTableObjectSelection | null;
export declare function resolveFirstSlideTableSelectionCell(selection: Pick<ISlideTableSelection, 'ranges'>): {
    row: number;
    column: number;
} | undefined;
