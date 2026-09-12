import type { ReactNode } from 'react';
export declare function ColorFill(props: {
    color: string;
    className?: string;
    radius?: number;
}): import("react").JSX.Element;
export declare const panelClass: string;
export declare const selectClass = "univer-box-border univer-w-full univer-max-w-full hover:univer-border-primary-300 hover:univer-bg-gray-50 hover:univer-shadow-sm dark:hover:!univer-border-primary-500 dark:hover:!univer-bg-gray-800";
export declare const conditionalSelectClass: string;
export declare const menuControlClass = "univer-h-9 univer-rounded-lg univer-text-sm hover:univer-border-primary-300 hover:univer-bg-gray-50 hover:univer-shadow-sm dark:!univer-border-gray-700 dark:!univer-bg-gray-800 dark:!univer-text-gray-100 dark:hover:!univer-border-primary-500 dark:hover:!univer-bg-gray-800";
export declare const primaryButtonClass = "univer-inline-flex univer-min-w-24 univer-items-center univer-justify-center univer-text-center";
export declare const secondaryButtonClass = "univer-inline-flex univer-min-w-24 univer-items-center univer-justify-center univer-text-center dark:!univer-border-gray-700 dark:!univer-bg-gray-800 dark:!univer-text-gray-100 dark:hover:!univer-border-primary-500 dark:hover:!univer-bg-gray-700";
export declare const fieldConfigLabelClass = "univer-grid univer-gap-2 univer-text-sm univer-font-medium univer-text-gray-600 dark:!univer-text-gray-300";
export declare const menuDangerIconButtonClass = "univer-size-7 univer-shrink-0 univer-rounded-lg univer-p-0 univer-text-gray-500 hover:!univer-bg-red-50 hover:!univer-text-red-600 dark:!univer-text-gray-400 dark:hover:!univer-bg-red-900 dark:hover:!univer-text-red-300";
export declare const darkPanelSurfaceClass = "dark:!univer-border-gray-700 dark:!univer-bg-gray-900 dark:!univer-text-gray-100";
export declare const darkInsetSurfaceClass = "dark:!univer-border-gray-700 dark:!univer-bg-gray-800 dark:!univer-text-gray-100";
export declare const darkSubtleSurfaceClass = "dark:!univer-border-gray-800 dark:!univer-bg-gray-950 dark:!univer-text-gray-100";
export declare const liveConfigPanelClass = "!univer-flex !univer-flex-col !univer-max-h-[min(560px,calc(100vh-120px))] !univer-overflow-hidden";
export declare const liveConfigRowsClass = "univer-min-h-0 univer-flex-1 univer-overflow-auto univer-pr-1";
export declare const liveConfigFooterClass = "univer-shrink-0 univer-pt-1";
export declare function MenuTitle(props: {
    children: ReactNode;
}): import("react").JSX.Element;
export declare function MenuFooter(props: {
    children: ReactNode;
}): import("react").JSX.Element;
export declare function TextInput(props: {
    label: string;
    value: string;
    placeholder?: string;
    onChange: (value: string) => void;
}): import("react").JSX.Element;
export declare function NumberInput(props: {
    label: string;
    value: number | string;
    min?: number;
    max?: number;
    onChange: (value: number | null) => void;
}): import("react").JSX.Element;
export declare function ProgressRangeInput(props: {
    label: string;
    value: number | string;
    suffix?: string;
    onChange: (value: number | null) => void;
}): import("react").JSX.Element;
export declare function FormatSelect(props: {
    label: string;
    value: string;
    options: Array<{
        value: string;
        label: string;
        example?: string;
    }>;
    onChange: (value: string) => void;
}): import("react").JSX.Element;
export declare function Example(props: {
    label: string;
    value: string;
}): import("react").JSX.Element;
