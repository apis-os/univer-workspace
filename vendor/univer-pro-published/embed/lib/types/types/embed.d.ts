import type { UniverInstanceType } from '@univerjs/core';
import type { ResourceRefInput } from '../common/resource-ref';
export declare const EmbedHostEntryEnum: {
    readonly DocsCustomBlock: "docs-custom-block";
    readonly SheetsFloatingObject: "sheets-floating-object";
    readonly SheetsSheetTab: "sheets-sheet-tab";
    readonly BasesTableListBlock: "bases-table-list-block";
    readonly SlidesFloatingObject: "slides-floating-object";
    readonly SlidesPageListBlock: "slides-page-list-block";
    readonly BoardsFloatingObject: "boards-floating-object";
};
export type EmbedHostEntry = typeof EmbedHostEntryEnum[keyof typeof EmbedHostEntryEnum] | (string & {});
export type EmbedMode = 'float' | 'tab';
export type EmbedMenuBehavior = 'floating' | 'host-override' | 'none';
export type EmbedRenderHost = 'dom' | 'sheets-drawing-dom' | 'slides-object-dom' | 'boards-object-dom';
export type EmbedLayout = 'docs-sticky-sheet' | 'docs-sticky-base' | 'scroll-contained' | 'doc-width-scale' | 'aspect-fit' | 'content-bounds-fit' | 'tab-peer';
export type EmbedSurfacePlacement = 'host' | 'child' | 'hidden' | 'compact';
export interface IEmbedLayoutPolicy {
    ribbon?: EmbedSurfacePlacement;
    productToolbar?: EmbedSurfacePlacement;
    contextMenu?: EmbedSurfacePlacement;
    floatToolbar?: EmbedSurfacePlacement;
    footer?: EmbedSurfacePlacement;
    sidePanel?: EmbedSurfacePlacement;
    floatingMenu?: EmbedSurfacePlacement;
}
export interface IEmbedLayoutPolicies {
    tab?: IEmbedLayoutPolicy;
    float?: IEmbedLayoutPolicy;
    docFlow?: IEmbedLayoutPolicy;
}
export declare const DEFAULT_EMBED_TAB_LAYOUT_POLICY: Required<IEmbedLayoutPolicy>;
export declare const DEFAULT_EMBED_FLOAT_LAYOUT_POLICY: Required<IEmbedLayoutPolicy>;
export declare const DEFAULT_EMBED_DOC_FLOW_LAYOUT_POLICY: Required<IEmbedLayoutPolicy>;
export interface IEmbedCapability {
    hostType: UniverInstanceType;
    childType: UniverInstanceType;
    entry: EmbedHostEntry;
    mode: EmbedMode;
    renderHost?: EmbedRenderHost;
    layout: EmbedLayout;
    menuBehavior: EmbedMenuBehavior;
    nestedEmbed: false;
}
export interface IEmbedSource {
    ref: ResourceRefInput;
    unitType: UniverInstanceType;
    creationConfig?: Record<string, unknown>;
}
/**
 * Persisted default worksheet for an embedded Sheet unit.
 *
 * Use the worksheet's stable sub-unit ID, not its display name. Runtime view
 * adapters fall back to the first available worksheet when this ID no longer
 * exists.
 */
export interface IEmbedSheetDisplayTarget {
    /** Stable worksheet sub-unit ID. */
    subUnitId: string;
    pageId?: never;
    tableId?: never;
    viewId?: never;
    dashboardId?: never;
}
/**
 * Persisted default page for an embedded Slide unit.
 *
 * Use the slide page's stable ID, not its display name. Runtime view adapters
 * fall back to the first available page when this ID no longer exists.
 */
export interface IEmbedSlideDisplayTarget {
    subUnitId?: never;
    /** Stable slide page ID. */
    pageId: string;
    tableId?: never;
    viewId?: never;
    dashboardId?: never;
}
/**
 * Persisted default table, optional view, and optional dashboard for an embedded Base unit.
 *
 * Use stable table/view IDs, not display names. Omitting `viewId` selects the
 * table's first available view. Runtime view adapters fall back to the first
 * available table or view when a stored ID no longer exists. Missing dashboard
 * IDs fall back to the resolved table view.
 */
export interface IEmbedBaseDisplayTarget {
    subUnitId?: never;
    pageId?: never;
    /** Stable Base table ID. */
    tableId: string;
    /** Stable Base view ID. Omit it to use the table's first available view. */
    viewId?: string;
    /** Stable Base dashboard ID. Omit it to display the selected table view. */
    dashboardId?: string;
}
/**
 * Persisted default child subview for an embed.
 *
 * The target shape must match the descriptor's child type. This value is
 * author/Agent-controlled resource state; normal user navigation inside the
 * embedded child remains local and does not overwrite it.
 */
export type EmbedDisplayTarget = IEmbedSheetDisplayTarget | IEmbedSlideDisplayTarget | IEmbedBaseDisplayTarget;
export interface IEmbedFloatingConfig {
    enabled?: boolean;
    layout?: EmbedLayout;
    fullscreen?: boolean;
}
export interface IEmbedTabConfig {
    enabled?: boolean;
    container?: 'sheet-tab' | 'table-list' | 'slide-page-list';
    replaceHostMenu?: boolean;
    hideHostFxBar?: boolean;
    lockHostRibbon?: boolean;
    thumbnail?: boolean;
}
export interface IEmbedSourceMeta {
    renderHost?: EmbedRenderHost;
    verticalWheelMode?: 'self' | 'host';
    horizontalWheelMode?: 'self' | 'host' | 'expand-then-self';
    floating?: false | IEmbedFloatingConfig;
    tab?: false | IEmbedTabConfig;
}
export interface IEmbedDescriptor {
    embedId: string;
    hostUnitId: string;
    hostType: UniverInstanceType;
    entry: EmbedHostEntry;
    hostAnchorId: string;
    source: IEmbedSource;
    childUnitId?: string;
    childType: UniverInstanceType;
    mode?: 'readonly' | 'interactive';
    sourceMeta?: IEmbedSourceMeta;
    /**
     * Persisted default child subview.
     *
     * IDs are structurally validated when written and resolved against the
     * child unit when mounted. Missing IDs fall back to the first available
     * worksheet, page, table, view, or dashboard.
     */
    displayTarget?: EmbedDisplayTarget;
    lifecycle?: 'active' | 'soft-deleted';
    createdAt?: number;
    updatedAt?: number;
}
export interface IEmbedResource {
    version: 1;
    embeds: Record<string, IEmbedDescriptor>;
}
export interface IEmbeddedFocusOwner {
    hostUnitId: string;
    embedId: string;
    childUnitId: string;
    childType: UniverInstanceType;
    reason: 'pointer' | 'keyboard' | 'fullscreen';
}
export interface IEmbedResolvedSource {
    childUnitId?: string;
    childType: UniverInstanceType;
    source: IEmbedSource;
}
export interface IEmbedCreateContext {
    embedId: string;
    hostUnitId: string;
    hostType: UniverInstanceType;
    hostAnchorId: string;
    entry: EmbedHostEntry;
    source: IEmbedSource;
    mode?: IEmbedDescriptor['mode'];
    sourceMeta?: IEmbedSourceMeta;
    /**
     * Initial persisted default child subview. Its shape must match
     * `source.unitType`.
     */
    displayTarget?: EmbedDisplayTarget;
    hostContext?: Record<string, unknown>;
    parentEmbedId?: string;
}
export interface IEmbedCreateResult {
    descriptor: IEmbedDescriptor;
    resolvedSource: IEmbedResolvedSource;
}
