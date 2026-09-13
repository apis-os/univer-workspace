import type { IBaseContextMenuState } from '../../services/base-ui-state.types';
import type { IBaseWorkbenchContext } from './WorkbenchContext';
export declare function BaseContextMenuDropdownMenu(props: {
    context: IBaseWorkbenchContext;
    contextMenu: IBaseContextMenuState;
}): import("react").JSX.Element;
export declare function BaseContextMenuPortal(props: {
    context: IBaseWorkbenchContext;
    contextMenu: IBaseContextMenuState;
}): import("react").JSX.Element;
