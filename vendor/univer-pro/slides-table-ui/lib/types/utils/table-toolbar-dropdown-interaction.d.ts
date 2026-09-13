import type { ReactNode } from 'react';
export interface ITableToolbarDropdownInteractionGuardProps {
    children: (handlers: {
        handleOpenChange: (open: boolean) => void;
        markInternalInteraction: () => void;
    }) => ReactNode;
    onOpenChange: (open: boolean) => void;
}
export declare function TableToolbarDropdownInteractionGuard(props: ITableToolbarDropdownInteractionGuardProps): ReactNode;
