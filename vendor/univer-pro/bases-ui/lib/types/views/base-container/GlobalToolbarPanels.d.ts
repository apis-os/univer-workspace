import type { IBaseToolbarPanelState } from '../../services/base-ui-state.types';
import type { IBaseWorkbenchContext } from './WorkbenchContext';
export declare function BaseToolbarPanelPortal(props: {
    context: IBaseWorkbenchContext;
    toolbarPanel: IBaseToolbarPanelState;
    floating?: boolean;
}): import("react").JSX.Element | null;
