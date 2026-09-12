import type { ISlideTableSnapshot } from '@univerjs-pro/slides-table';
import type { ISlideTableContextMenuAction, ISlideTableContextMenuCommand, ISlideTableSelection, SlideTableContextMenuActionId } from '@univerjs-pro/slides-table-ui';
export declare function resolveBoardTableContextMenuActions(table: ISlideTableSnapshot | null | undefined, selection: ISlideTableSelection | null): ISlideTableContextMenuAction[];
export declare function buildBoardTableContextMenuCommand(table: ISlideTableSnapshot | null | undefined, selection: ISlideTableSelection | null, actionId: SlideTableContextMenuActionId): ISlideTableContextMenuCommand | null;
