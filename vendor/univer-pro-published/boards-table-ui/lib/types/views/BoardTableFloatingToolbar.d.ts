import type { ISlideTableSnapshot } from '@univerjs-pro/slides-table';
import type { ISlideTableSelection } from '@univerjs-pro/slides-table-ui';
export declare const BOARD_TABLE_FLOATING_TOOLBAR_KEY = "board.table.floating-toolbar";
export interface IBoardTableFloatingToolbarExtraProps {
    unitId: string;
    subUnitId: string;
    elementId: string;
    tableId: string;
}
export interface IBoardTableFloatingToolbarProps extends Partial<IBoardTableFloatingToolbarExtraProps> {
    popup?: {
        extraProps?: Partial<IBoardTableFloatingToolbarExtraProps>;
    };
}
export declare function resolveBoardTableFloatingToolbarSelection(props: Partial<IBoardTableFloatingToolbarExtraProps> | null | undefined, selection: ISlideTableSelection | null, table: ISlideTableSnapshot | null | undefined): ISlideTableSelection | null;
export declare function BoardTableFloatingToolbar(props: IBoardTableFloatingToolbarProps): import("react").JSX.Element | null;
