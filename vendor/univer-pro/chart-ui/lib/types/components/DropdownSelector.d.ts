import type { ReactElement, ReactNode } from 'react';
export interface IDropdownSelectorOption {
    label?: ReactNode;
    value?: string;
    disabled?: boolean;
}
export interface IDropdownSelectorProps {
    value: string;
    menus: IDropdownSelectorOption[];
    children: ReactElement | ((visible: boolean) => ReactElement);
    onSelect?: (value: string) => void;
}
export declare function DropdownSelector(props: IDropdownSelectorProps): ReactElement;
