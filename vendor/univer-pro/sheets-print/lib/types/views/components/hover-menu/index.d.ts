import type { ReactNode } from 'react';
interface IHeaderFooterItem {
    value: string;
    label: string;
    desc: string;
}
interface IDropdownButtonProps {
    icon: ReactNode;
    items: IHeaderFooterItem[];
    active?: boolean;
    onChange?: (value: string) => void;
    onHover?: (active: boolean) => void;
    popupDirection?: 'top' | 'bottom';
}
export declare const DropdownButton: ({ icon, items, active, onChange, onHover, popupDirection, }: IDropdownButtonProps) => import("react").JSX.Element;
export interface IHeaderFooterHoverMenuProps {
    onSelect: (value: string) => void;
    popupDirection?: 'top' | 'bottom';
}
export declare const HeaderFooterHoverMenu: (props: IHeaderFooterHoverMenuProps) => import("react").JSX.Element;
export {};
