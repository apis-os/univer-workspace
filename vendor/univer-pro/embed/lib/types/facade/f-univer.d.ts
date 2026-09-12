import type { IEmbedBaseDisplayTarget, IEmbedDescriptor, IEmbedSheetDisplayTarget, IEmbedSlideDisplayTarget, IEmbedSource, IEmbedSourceMeta, IResourceRef } from '@univerjs-pro/embed';
import type { ICreateUnitOptions } from '@univerjs/core';
import type { EmbedDocsCustomBlockInteractionMode } from '@univerjs/docs';
import type { ISheetDrawingPlacementInput } from '@univerjs/sheets-drawing';
import { UniverInstanceType } from '@univerjs/core';
import { FUniver } from '@univerjs/core/facade';
import { FEmbed } from './f-embed';
import { FEmbedHostSurface } from './f-enum';
export interface ISheetFloatingEmbedHostContext {
    subUnitId?: string;
    placement?: ISheetDrawingPlacementInput;
    componentKey?: string;
    allowTransform?: boolean;
    resizeBehavior?: 'free' | 'aspect-ratio' | 'height-auto' | 'disabled';
    aspectRatio?: number;
    runtimeMountMode?: 'always' | 'stage2';
}
/** Authoring context for a Sheet tab embed host. */
export interface ISheetTabEmbedHostContext {
    /** Zero-based insertion index. When omitted, the tab is appended. */
    sheetIndex?: number;
    /** Name of the created Sheet tab. Defaults to the embed id. */
    sheetName?: string;
}
/** Authoring context for a Base table embed host. */
export interface IBaseTableEmbedHostContext {
    /** Zero-based insertion index. When omitted, the table is appended. */
    tableIndex?: number;
    /** Name of the created Base table. Defaults to the embed id. */
    tableName?: string;
}
/** Authoring context for a Slide page embed host. */
export interface ISlidePageEmbedHostContext {
    /** Zero-based insertion index. When omitted, the page is appended. */
    pageIndex?: number;
    /** Name of the created Slide page. Defaults to the embed id. */
    pageName?: string;
}
/** Authoring context for a floating object on a Slide page. */
export interface ISlideFloatingEmbedHostContext {
    /** Target Slide page. Defaults to the active page. */
    subUnitId?: string;
    left?: number;
    top?: number;
    width?: number;
    height?: number;
}
/** Authoring context for a floating object on a Board page. */
export interface IBoardFloatingEmbedHostContext {
    /** Target Board page. Defaults to the active page. */
    subUnitId?: string;
    left?: number;
    top?: number;
    width?: number;
    height?: number;
}
/**
 * Authoring context for a DocBlock embed host.
 */
export interface IDocBlockEmbedHostContext {
    /**
     * UTF-16 offset in the host document body's `dataStream` where the custom
     * block marker is inserted.
     *
     * The offset must be a non-negative integer within the editable body. When
     * omitted, the block is inserted at the end of the body, immediately before
     * the terminal paragraph and section markers.
     */
    startIndex?: number;
    /** Custom component used to render the document block. */
    componentKey?: string;
    /** Whether the document drawing uses block or inline layout semantics. */
    interactionMode?: EmbedDocsCustomBlockInteractionMode;
}
interface ICreateEmbedHostBase<TSurface extends FEmbedHostSurface> {
    unitId: string;
    surface: TSurface;
    anchorId?: string;
}
export type ICreateEmbedHostParams<TSurface extends FEmbedHostSurface = FEmbedHostSurface> = ICreateEmbedHostBase<TSurface> & (TSurface extends typeof FEmbedHostSurface.SheetFloating ? {
    context: ISheetFloatingEmbedHostContext;
} : TSurface extends typeof FEmbedHostSurface.DocBlock ? {
    context?: IDocBlockEmbedHostContext;
} : TSurface extends typeof FEmbedHostSurface.SheetTab ? {
    context?: ISheetTabEmbedHostContext;
} : TSurface extends typeof FEmbedHostSurface.BaseTable ? {
    context?: IBaseTableEmbedHostContext;
} : TSurface extends typeof FEmbedHostSurface.SlidePage ? {
    context?: ISlidePageEmbedHostContext;
} : TSurface extends typeof FEmbedHostSurface.SlideFloating ? {
    context?: ISlideFloatingEmbedHostContext;
} : TSurface extends typeof FEmbedHostSurface.BoardFloating ? {
    context?: IBoardFloatingEmbedHostContext;
} : {
    context?: Record<string, unknown>;
});
export interface IUnitFacadeMap {
}
export type FUnitFacade<TUnitType extends UniverInstanceType | undefined> = TUnitType extends keyof IUnitFacadeMap ? IUnitFacadeMap[TUnitType] : unknown;
export type FResolvedUnitFacade<TUnitFacade, TUnitType extends UniverInstanceType | undefined> = [
    TUnitFacade
] extends [never] ? FUnitFacade<TUnitType> : TUnitFacade;
export type FEmbedSource<TChildType extends UniverInstanceType = UniverInstanceType> = IEmbedSource & {
    unitType: TChildType;
};
/**
 * Maps an embedded child unit type to its accepted persisted display target.
 *
 * - Sheet: `{ subUnitId }`
 * - Slide: `{ pageId }`
 * - Base: `{ tableId, viewId?, dashboardId? }`
 * - Other child types: no display target is accepted
 */
export type EmbedDisplayTargetFor<TChildType extends UniverInstanceType> = TChildType extends UniverInstanceType.UNIVER_SHEET ? IEmbedSheetDisplayTarget : TChildType extends UniverInstanceType.UNIVER_SLIDE ? IEmbedSlideDisplayTarget : TChildType extends UniverInstanceType.UNIVER_BASE ? IEmbedBaseDisplayTarget : never;
export interface ICreateEmbedParams<TChildType extends UniverInstanceType = UniverInstanceType, THostSurface extends FEmbedHostSurface = FEmbedHostSurface> {
    embedId?: string;
    host: ICreateEmbedHostParams<THostSurface>;
    content: FEmbedSource<TChildType>;
    interaction?: IEmbedDescriptor['mode'];
    sourceMeta?: IEmbedSourceMeta;
    /**
     * Persisted default child subview. The accepted shape is inferred from
     * `content.unitType`.
     *
     * Use stable IDs rather than display names. The command validates the
     * target shape when creating the embed; the child UI resolves ID existence
     * when mounted and falls back to its first available subview when needed.
     * Normal user navigation does not update this value.
     */
    displayTarget?: EmbedDisplayTargetFor<TChildType>;
}
export interface IRemoveEmbedParams {
    hostUnitId: string;
    embedId: string;
}
export interface IGetEmbedParams {
    hostUnitId: string;
    embedId: string;
}
export interface IListEmbedsParams {
    hostUnitId?: string;
}
export type FUnitRef = IResourceRef | string;
export interface ILoadUnitAsyncOptions<TUnitType extends UniverInstanceType | undefined = UniverInstanceType | undefined> extends ICreateUnitOptions {
    unitType?: TUnitType;
    signal?: AbortSignal;
}
/**
 * @ignore
 */
export interface IFUniverEmbedMixin {
    /**
     * Create an embed descriptor and host anchor without materializing
     * provider-backed ResourceRefs.
     *
     * `displayTarget` stores the author- or Agent-selected default subview in
     * the host embed resource. Normal user navigation inside the child remains
     * local and does not overwrite this value.
     *
     * A Sheet floating embed defaults to
     * `SheetDrawingAnchorType.Position` when `host.context.placement` is
     * omitted. Pass an explicit Placement when the caller needs a specific
     * Position, Both, or None anchor.
     *
     * A DocBlock embed accepts `host.context.startIndex` as a UTF-16 offset in
     * the host document body's `dataStream`. When it is omitted, the block is
     * appended to the editable body. Unknown context fields and invalid offsets
     * are rejected.
     *
     * SheetTab, BaseTable, and SlidePage accept a zero-based insertion index and
     * an optional display name. Omitted indices append to the corresponding live
     * collection. SlideFloating and BoardFloating accept an optional target page
     * plus finite bounds. Every built-in surface rejects unknown context fields
     * and invalid values before creating its descriptor or anchor mutations.
     *
     * @param params Embed creation parameters.
     * @returns The created embed facade.
     * @example TypeScript
     * ```ts
     * const embed = univerAPI.createEmbed<UniverFacadeTypes.FDocument>({
     *     embedId: 'doc-in-sheet',
     *     host: {
     *         unitId: 'host-unit-id',
     *         surface: univerAPI.Enum.FEmbedHostSurface.SheetFloating,
     *         context: {
     *             subUnitId: 'host-sheet-id',
     *         },
     *     },
     *     content: {
     *         unitType: univerAPI.Enum.UniverInstanceType.UNIVER_DOC,
     *         ref: '#unit=another-unit-id&type=doc',
     *     },
     * });
     *
     * const childDocument = await embed.loadAsync();
     * ```
     * @example Insert a Sheet block at a document model offset
     * ```ts
     * const embed = univerAPI.createEmbed({
     *     host: {
     *         unitId: 'host-document-id',
     *         surface: univerAPI.Enum.FEmbedHostSurface.DocBlock,
     *         context: { startIndex: 42 },
     *     },
     *     content: {
     *         unitType: univerAPI.Enum.UniverInstanceType.UNIVER_SHEET,
     *         ref: '#unit=sheet-unit-id&type=sheet',
     *     },
     * });
     * ```
     * @example Create a Base embed that initially opens a calendar view
     * ```ts
     * const embed = univerAPI.createEmbed({
     *     embedId: 'base-calendar',
     *     host: {
     *         unitId: 'board-unit-id',
     *         surface: univerAPI.Enum.FEmbedHostSurface.BoardFloating,
     *         context: {
     *             left: 120,
     *             top: 100,
     *             width: 1120,
     *             height: 680,
     *         },
     *     },
     *     content: {
     *         unitType: univerAPI.Enum.UniverInstanceType.UNIVER_BASE,
     *         ref: '#unit=base-unit-id&type=base',
     *     },
     *     displayTarget: {
     *         tableId: 'events',
     *         viewId: 'calendar',
     *     },
     * });
     * ```
     */
    createEmbed<TUnitFacade = never, TChildType extends UniverInstanceType = UniverInstanceType, THostSurface extends FEmbedHostSurface = FEmbedHostSurface>(params: ICreateEmbedParams<TChildType, THostSurface>): FEmbed<FResolvedUnitFacade<TUnitFacade, TChildType>>;
    /**
     * Remove an embed by host unit id and embed id.
     *
     * @param params Remove parameters.
     * @param params.hostUnitId The host unit id that owns the embed.
     * @param params.embedId The embed id to remove.
     * @returns `true` when the remove command succeeds.
     * @example TypeScript
     * ```ts
     * const removed = univerAPI.removeEmbed({
     *     hostUnitId: 'host-unit-id',
     *     embedId: 'doc-in-sheet',
     * });
     * ```
     */
    removeEmbed(params: IRemoveEmbedParams): boolean;
    /**
     * Get one embed by host unit id and embed id.
     *
     * @param params Get parameters.
     * @param params.hostUnitId The host unit id that owns the embed.
     * @param params.embedId The embed id to read.
     * @returns The embed facade, or `null` when it does not exist.
     * @example TypeScript
     * ```ts
     * const embed = univerAPI.getEmbed({
     *     hostUnitId: 'host-unit-id',
     *     embedId: 'doc-in-sheet',
     * });
     * ```
     */
    getEmbed(params: IGetEmbedParams): FEmbed<unknown> | null;
    /**
     * List active embeds.
     *
     * @param params List parameters.
     * @param params.hostUnitId Optional host unit id. When omitted, all active
     * embeds in the local runtime are returned.
     * @returns Active embed facades.
     * @example TypeScript
     * ```ts
     * const embeds = univerAPI.listEmbeds({ hostUnitId: 'host-unit-id' });
     * ```
     */
    listEmbeds(params?: IListEmbedsParams): Array<FEmbed<unknown>>;
    /**
     * Load a ResourceRef-targeted unit into the current runtime.
     *
     * This is the generic facade entry for unit load. Embed-specific
     * callers can use {@link FEmbed.loadAsync}, which passes an embed owner.
     *
     * @param ref The resource reference to load. String input supports canonical
     * self unit ResourceRefs like `#unit=<unitId>&type=doc`.
     * @param options Optional request controls.
     * @returns A promise resolving to the loaded unit facade instance.
     * @example TypeScript
     * ```ts
     * const document = await univerAPI.loadUnitAsync<UniverFacadeTypes.FDocument>(
     *     '#unit=another-unit-id&type=doc',
     *     { unitType: univerAPI.Enum.UniverInstanceType.UNIVER_DOC }
     * );
     * ```
     * @example JavaScript
     * ```js
     * const document = await univerAPI.loadUnitAsync(
     *     '#unit=another-unit-id&type=doc',
     *     { unitType: univerAPI.Enum.UniverInstanceType.UNIVER_DOC }
     * );
     * ```
     */
    loadUnitAsync<TUnitFacade = never, TUnitType extends UniverInstanceType | undefined = undefined>(ref: FUnitRef, options?: ILoadUnitAsyncOptions<TUnitType>): Promise<FResolvedUnitFacade<TUnitFacade, TUnitType>>;
}
/**
 * The embed facade mixin on `FUniver`.
 * @ignore
 */
export declare class FUniverEmbedMixin extends FUniver implements IFUniverEmbedMixin {
    createEmbed<TUnitFacade = never, TChildType extends UniverInstanceType = UniverInstanceType, THostSurface extends FEmbedHostSurface = FEmbedHostSurface>(params: ICreateEmbedParams<TChildType, THostSurface>): FEmbed<FResolvedUnitFacade<TUnitFacade, TChildType>>;
    removeEmbed(params: IRemoveEmbedParams): boolean;
    getEmbed(params: IGetEmbedParams): FEmbed<unknown> | null;
    listEmbeds(params?: IListEmbedsParams): Array<FEmbed<unknown>>;
    loadUnitAsync<TUnitFacade = never, TUnitType extends UniverInstanceType | undefined = undefined>(ref: FUnitRef, options?: ILoadUnitAsyncOptions<TUnitType>): Promise<FResolvedUnitFacade<TUnitFacade, TUnitType>>;
    private _normalizeLoadUnitRef;
    private _toFEmbed;
}
declare module '@univerjs/core/facade' {
    interface FUniver extends IFUniverEmbedMixin {
    }
}
export {};
