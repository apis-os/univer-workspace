import type { IPopup } from '@univerjs/ui';
import type { ElementType } from 'react';
import { DocsTableBorderPreset } from '@univerjs-pro/docs-table';
export declare const DOCS_TABLE_BORDER_PANEL = "docs-table-ui.border-panel";
export interface IDocsTableBorderPanelItem {
    label: string;
    preset: DocsTableBorderPreset;
}
export interface IDocsTableBorderPanelPopupProps {
    onSelect?: (preset: DocsTableBorderPreset) => void;
    presets?: IDocsTableBorderPanelItem[];
}
export declare const DOCS_TABLE_BORDER_ICON_EXTEND: {
    colorChannel1: string;
};
export declare const DOCS_TABLE_BORDER_PRESET_COMPONENTS: Record<DocsTableBorderPreset, ElementType<{
    className?: string;
    extend?: typeof DOCS_TABLE_BORDER_ICON_EXTEND;
}>>;
export declare function DocsTableBorderPanel(props: {
    popup?: IPopup<IDocsTableBorderPanelPopupProps>;
}): import("react").JSX.Element;
