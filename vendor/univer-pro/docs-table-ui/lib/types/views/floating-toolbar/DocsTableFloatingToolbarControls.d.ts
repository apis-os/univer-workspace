import type { IDisplayMenuItem, IMenuItem } from '@univerjs/ui';
import type { Observable } from 'rxjs';
import { DocsTableBorderPreset } from '@univerjs-pro/docs-table';
import { HorizontalAlign, VerticalAlignmentType } from '@univerjs/core';
export declare const DOCS_TABLE_FLOATING_TOOLBAR = "docs-table-ui.floating-toolbar";
export declare function ToolbarGroup({ items }: {
    items: Array<IDisplayMenuItem<IMenuItem>>;
}): import("react").JSX.Element;
export declare function ToolbarMixedGroup({ items, children }: {
    items?: Array<IDisplayMenuItem<IMenuItem>>;
    children?: React.ReactNode;
}): import("react").JSX.Element;
export declare function TextFormatPanelDropdownButton(props: {
    alignItem: {
        value$?: Observable<HorizontalAlign>;
    };
    disabled: boolean;
    formatItems: {
        bold: IDisplayMenuItem<IMenuItem>;
        italic: IDisplayMenuItem<IMenuItem>;
        strike: IDisplayMenuItem<IMenuItem>;
        underline: IDisplayMenuItem<IMenuItem>;
    };
    verticalAlign: VerticalAlignmentType | null;
    onExecuteInlineCommand: (commandId: string) => void;
    onHorizontalAlign: (value: HorizontalAlign) => void;
    onVerticalAlign: (value: VerticalAlignmentType) => void;
}): import("react").JSX.Element;
export declare function CellBackgroundButton(props: {
    color: string;
    disabled: boolean;
    onChange: (color: string) => void;
    onReset: () => void;
}): import("react").JSX.Element;
export declare function BorderPanelDropdownButton(props: {
    color: string;
    width: number;
    style: 'solid' | 'dot' | 'dash';
    disabled: boolean;
    onSelectPreset: (preset: DocsTableBorderPreset) => void;
    onChangeColor: (value: string) => void;
    onResetColor: () => void;
    onChangeWidth: (value: number) => void;
    onChangeStyle: (value: 'solid' | 'dot' | 'dash') => void;
}): import("react").JSX.Element;
export declare function FloatingColorPickerButton(props: {
    color: string;
    commandId: string;
    disabled: boolean;
    icon: 'font' | 'bucket';
    itemId: string;
    resetItemId: string;
    title: string;
    onChange: (commandId: string, value: string | null) => void;
}): import("react").JSX.Element;
