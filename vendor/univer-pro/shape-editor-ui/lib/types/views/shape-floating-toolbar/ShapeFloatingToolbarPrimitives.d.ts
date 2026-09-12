import type { ComponentProps, KeyboardEvent, MouseEvent, PointerEvent, ReactNode } from 'react';
import { Dropdown, Tooltip } from '@univerjs/design';
export declare function ShapeFloatingToolbarTooltip(props: Omit<ComponentProps<typeof Tooltip>, 'visible' | 'onVisibleChange'> & {
    popupOpen: boolean;
}): import("react").JSX.Element;
type ShapeFloatingToolbarDropdownProps = Omit<ComponentProps<typeof Dropdown>, 'avoidCollisions'>;
export declare function ShapeFloatingToolbarDropdown(props: ShapeFloatingToolbarDropdownProps): import("react").JSX.Element;
export declare function ShapeFloatingToolbarIcon(props: {
    children: ReactNode;
    className?: string;
}): import("react").JSX.Element;
export declare function ShapeFloatingToolbarContent(props: {
    children: ReactNode;
    className?: string;
    maxWidthClassName?: string;
    onMouseDown?: (event: MouseEvent<HTMLDivElement>) => void;
}): import("react").JSX.Element;
export declare function ShapeFloatingToolbarButton(props: {
    title?: string;
    active?: boolean;
    disabled?: boolean;
    children: ReactNode;
    className?: string;
    sizeClassName?: string;
    popupOpen?: boolean;
    ariaExpanded?: boolean;
    onClick?: () => void;
    onKeyDown?: (event: KeyboardEvent<HTMLButtonElement>) => void;
    onMouseDown?: (event: MouseEvent<HTMLButtonElement>) => void;
    onPointerDown?: (event: PointerEvent<HTMLButtonElement>) => void;
}): import("react").JSX.Element;
export declare function ShapeFloatingToolbarDropdownTrigger(props: {
    title?: string;
    label?: string;
    icon: ReactNode;
    active?: boolean;
    className?: string;
    sizeClassName?: string;
    onKeyDown?: (event: KeyboardEvent<HTMLButtonElement>) => void;
    onMouseDown?: (event: MouseEvent<HTMLButtonElement>) => void;
    onPointerDown?: (event: PointerEvent<HTMLButtonElement>) => void;
}): import("react").JSX.Element;
export declare function ShapeFloatingToolbarFontSizeSelect(props: {
    value: string | number;
    className?: string;
    dropdownSide?: 'top' | 'bottom';
    onChange: (fontSize: number) => void;
    onAfterChange?: () => void;
}): import("react").JSX.Element;
export {};
