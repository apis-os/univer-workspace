import type { IMenuItem, IValueOption } from '@univerjs/ui';
import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';
import type { LocaleKey } from '../../locale/types';
export declare const FloatingToolbarTrigger: import("react").ForwardRefExoticComponent<ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
    title: string;
} & import("react").RefAttributes<HTMLButtonElement>>;
export declare const FloatingToolbarSplitTrigger: import("react").ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & {
    title: string;
    primary: ReactNode;
    disabled?: boolean;
    open?: boolean;
    onPrimaryClick: () => void;
} & import("react").RefAttributes<HTMLDivElement>>;
export declare function MenuButton(props: {
    children: ReactNode;
    title: string;
    className?: string;
    disabled?: boolean;
    active?: boolean;
    onClick: () => void;
}): import("react").JSX.Element;
export declare function MenuButtonFromMenu(props: {
    item: IMenuItem | undefined;
    children: ReactNode;
    title: LocaleKey;
    onClick: () => void;
}): import("react").JSX.Element | null;
export declare function useMenuItemRuntimeState(item: IMenuItem | undefined): {
    hidden: boolean;
    disabled: boolean;
    activated: boolean;
    value: unknown;
};
export declare function getMenuTitle(item: IMenuItem): string;
export declare function getOptionLabel(option: IValueOption): string;
export declare function getWrapIcon(value: IValueOption['value']): ReactNode;
export declare function keepFloatingPanelInteraction(event: React.MouseEvent<HTMLElement> | React.PointerEvent<HTMLElement>): void;
export declare function isFloatingDropdownOwnSurfaceTarget(target: EventTarget | null, embedId: string): boolean;
export declare function keepFloatingDropdownOpenForOwnSurface(event: {
    target: EventTarget | null;
    preventDefault: () => void;
}, embedId: string): void;
export declare function Panel(props: {
    embedId: string;
    children: ReactNode;
    onPointerDown: (event: React.PointerEvent<HTMLElement>) => void;
}): import("react").JSX.Element;
export declare function PanelRow(props: {
    children: ReactNode;
}): import("react").JSX.Element;
export declare function InlineFloatingDropdown(props: {
    embedId: string;
    title: LocaleKey;
    trigger: ReactNode;
    overlay: ReactNode;
    disabled?: boolean;
    triggerClassName?: string;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}): import("react").JSX.Element;
export declare function MenuPanel(props: {
    children: ReactNode;
}): import("react").JSX.Element;
export declare function RibbonListPanel(props: {
    children: ReactNode;
}): import("react").JSX.Element;
export declare function RibbonListItem(props: {
    children: ReactNode;
    icon: ReactNode;
    onClick: () => void;
}): import("react").JSX.Element;
export declare function MenuPanelItem(props: {
    children: ReactNode;
    icon?: ReactNode;
    active?: boolean;
    onClick: () => void;
}): import("react").JSX.Element;
export declare function PanelButton(props: {
    title: string;
    active?: boolean;
    disabled?: boolean;
    children: ReactNode;
    onClick: () => void;
}): import("react").JSX.Element;
