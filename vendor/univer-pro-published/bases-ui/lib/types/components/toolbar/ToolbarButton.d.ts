import type { ReactElement } from 'react';
import type { IBaseToolbarDropdownMenu } from './BaseToolbar';
export declare function ToolbarButton({ label, icon, active, activeTone, disabled, dropdown, iconOnly, onClick, }: {
    label: string;
    icon: ReactElement;
    active?: boolean;
    activeTone?: 'default' | 'filter' | 'group' | 'sort' | 'conditional';
    disabled?: boolean;
    dropdown?: IBaseToolbarDropdownMenu;
    iconOnly?: boolean;
    onClick?: (anchor: HTMLElement) => void;
}): string | number | bigint | boolean | Iterable<import("react").ReactNode> | Promise<string | number | bigint | boolean | import("react").ReactPortal | ReactElement<unknown, string | import("react").JSXElementConstructor<any>> | Iterable<import("react").ReactNode> | null | undefined> | import("react").JSX.Element | null | undefined;
