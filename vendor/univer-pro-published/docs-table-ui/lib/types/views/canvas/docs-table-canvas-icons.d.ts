import type { DocsTableTriggerKind, IDocsTableTriggerRect } from './docs-table-trigger-model';
import { DocsTableBorderPreset } from '@univerjs-pro/docs-table';
export declare const DOCS_TABLE_BORDER_PRESET_ICON_SIZE = 16;
export declare const DOCS_TABLE_BORDER_PRESET_ICON_STROKE_WIDTH = 1.35;
export declare const DOCS_TABLE_CANVAS_ICON_COLOR = "#3c4043";
export declare const DOCS_TABLE_CANVAS_ICON_MUTED_COLOR = "#5f6368";
export declare const DOCS_TABLE_CANVAS_ICON_ACCENT_COLOR = "#2f66ff";
export type DocsTableBorderPresetIconName = 'AllBorderIcon' | 'DownBorderDoubleIcon' | 'HorizontalBorderDoubleIcon' | 'InnerBorderDoubleIcon' | 'LeftBorderDoubleIcon' | 'NoBorderIcon' | 'OuterBorderDoubleIcon' | 'RightBorderDoubleIcon' | 'UpBorderDoubleIcon' | 'VerticalBorderDoubleIcon';
export declare function getDocsTableBorderPresetIconName(preset: DocsTableBorderPreset): DocsTableBorderPresetIconName;
export type DocsTableCanvasIconName = 'ColumnIcon' | 'CustomSortIcon' | 'FreezeRowIcon' | 'InsertRowBelowDoubleIcon' | 'MoreDownIcon' | 'OuterBorderDoubleIcon' | 'PlusIcon' | 'RightInsertColumnDoubleIcon' | 'RowIcon' | 'SmallPlusIcon';
export declare function getDocsTableTriggerIconName(kind: DocsTableTriggerKind): DocsTableCanvasIconName | null;
interface IDocsTableCanvasIconPath {
    d: string;
    channel?: 'accent' | 'main';
    fillRule?: CanvasFillRule;
}
interface IDocsTableCanvasIconDefinition {
    paths: IDocsTableCanvasIconPath[];
    viewBoxSize: number;
}
interface IDocsTableCanvasIconColors {
    accent: string;
    main: string;
}
export declare const DOCS_TABLE_CANVAS_ICON_PATHS: Record<DocsTableCanvasIconName, IDocsTableCanvasIconDefinition>;
export declare function getDocsTableCenteredIconOrigin(rect: IDocsTableTriggerRect, iconWidth: number, iconHeight: number): {
    x: number;
    y: number;
};
export declare function drawDocsTableCanvasIcon(ctx: CanvasRenderingContext2D, iconName: DocsTableCanvasIconName, rect: IDocsTableTriggerRect, colors?: IDocsTableCanvasIconColors, size?: number): void;
export {};
