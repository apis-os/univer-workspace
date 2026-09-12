import type { IMenuItem } from '@univerjs/ui';
import type { ReactNode } from 'react';
import type { LocaleKey } from '../../locale/types';
import { BorderStyleTypes, BorderType } from '@univerjs/core';
export interface IResolvedSheetsFloatingToolbarMenuItems {
    formatPainter?: IMenuItem;
    numberFormat?: IMenuItem;
    fontFamily?: IMenuItem;
    fontSize?: IMenuItem;
    bold?: IMenuItem;
    textColor?: IMenuItem;
    backgroundColor?: IMenuItem;
    borderComposite?: IMenuItem;
    merge?: {
        root?: IMenuItem;
        all?: IMenuItem;
        vertical?: IMenuItem;
        horizontal?: IMenuItem;
        unmerge?: IMenuItem;
    };
    horizontalAlign?: IMenuItem;
    verticalAlign?: IMenuItem;
    wrap?: IMenuItem;
    filter?: IMenuItem;
    deleteBlock?: true;
}
export declare function NumberFormatDropdown(props: {
    menuItem: IMenuItem | undefined;
    onClick: () => void;
}): import("react").JSX.Element | null;
export declare function FontFamilyFloatingDropdown(props: {
    embedId: string;
    menuItem: IMenuItem | undefined;
    title: LocaleKey;
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSelect: (value: string) => void;
}): import("react").JSX.Element | null;
export declare function FontSizeFloatingDropdown(props: {
    embedId: string;
    menuItem: IMenuItem | undefined;
    title: LocaleKey;
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSelect: (value: string) => void;
}): import("react").JSX.Element | null;
export declare function HorizontalAlignDropdown(props: {
    embedId: string;
    menuItem: IMenuItem | undefined;
    open: boolean;
    onOpenChange: (open: boolean) => void;
    execute: (item: IMenuItem | undefined, params?: object) => void;
}): import("react").JSX.Element | null;
export declare function VerticalAlignDropdown(props: {
    embedId: string;
    menuItem: IMenuItem | undefined;
    open: boolean;
    onOpenChange: (open: boolean) => void;
    execute: (item: IMenuItem | undefined, params?: object) => void;
}): import("react").JSX.Element | null;
export declare function ColorDropdown(props: {
    embedId: string;
    menuItem: IMenuItem | undefined;
    title: LocaleKey;
    icon: ReactNode;
    defaultColor: string;
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onChange: (value: string) => void;
    onReset: () => void;
}): import("react").JSX.Element | null;
export declare function BorderCompositeDropdown(props: {
    embedId: string;
    menuItem: IMenuItem | undefined;
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSelect: (type: BorderType, style?: BorderStyleTypes, color?: string) => void;
}): import("react").JSX.Element | null;
export declare function MergeDropdown(props: {
    embedId: string;
    menuItems: IResolvedSheetsFloatingToolbarMenuItems['merge'];
    open: boolean;
    onOpenChange: (open: boolean) => void;
    execute: (item: IMenuItem | undefined, params?: object) => void;
}): import("react").JSX.Element | null;
export declare function WrapDropdown(props: {
    embedId: string;
    menuItem: IMenuItem | undefined;
    open: boolean;
    onOpenChange: (open: boolean) => void;
    execute: (commandId: string, params?: object) => void;
}): import("react").JSX.Element | null;
