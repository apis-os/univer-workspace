import type { EmbedDisplayTarget, EmbedHostEntry, IEmbedDescriptor, IEmbedDescriptorSnapshot } from '@univerjs-pro/embed';
import type { ICreateUnitOptions, IGroupBaseBound, UniverInstanceType } from '@univerjs/core';
import type { FUniver } from '@univerjs/core/facade';
import type { ISheetDrawingPlacement, ISheetDrawingPlacementInput } from '@univerjs/sheets-drawing';
import { EmbedHostAdapterRegistryService, EmbedModelService, EmbedReferencedUnitApiResolverRegistryService, EmbedReferencedUnitMaterializeService } from '@univerjs-pro/embed';
import { ICommandService, Injector } from '@univerjs/core';
import { FBase } from '@univerjs/core/facade';
export interface ILoadEmbedOptions extends ICreateUnitOptions {
    signal?: AbortSignal;
}
/**
 * Facade object for one embed descriptor.
 *
 * `FEmbed` is intentionally small: it exposes stable identity fields for
 * agents and delegates write actions back to commands.
 *
 * @hideconstructor
 */
export declare class FEmbed<TUnitFacade = unknown> extends FBase {
    private _descriptor;
    private readonly _univerAPI;
    protected readonly _injector: Injector;
    private readonly _commandService;
    private readonly _materializeService;
    private readonly _apiResolverRegistry;
    private readonly _modelService;
    private readonly _hostAdapterRegistry;
    constructor(_descriptor: IEmbedDescriptor, _univerAPI: FUniver, _injector: Injector, _commandService: ICommandService, _materializeService: EmbedReferencedUnitMaterializeService, _apiResolverRegistry: EmbedReferencedUnitApiResolverRegistryService, _modelService: EmbedModelService, _hostAdapterRegistry: EmbedHostAdapterRegistryService);
    /**
     * Get the embed id. This id is stable inside the host unit.
     * @returns The embed id.
     * @example
     * ```ts
     * const embed = univerAPI.listEmbeds()[0];
     * console.log(embed.getId());
     * ```
     */
    getId(): string;
    /**
     * Get the host unit id that owns this embed.
     * @returns The host unit id.
     * @example
     * ```ts
     * const embed = univerAPI.listEmbeds()[0];
     * console.log(embed.getHostUnitId());
     * ```
     */
    getHostUnitId(): string;
    /**
     * Get the host anchor id. The host product uses this id to place the embed
     * in a doc custom block, sheet tab, sheet floating object, and so on.
     * @returns The host anchor id.
     * @example
     * ```ts
     * const embed = univerAPI.listEmbeds()[0];
     * console.log(embed.getHostAnchorId());
     * ```
     */
    getHostAnchorId(): string;
    /**
     * Get the embedded child unit id.
     * @returns The child unit id, or `undefined` when the descriptor points to a
     * remote resource that has not been resolved locally.
     * @example
     * ```ts
     * const embed = univerAPI.listEmbeds()[0];
     * console.log(embed.getChildUnitId());
     * ```
     */
    getChildUnitId(): string | undefined;
    /**
     * Get the host unit type.
     * @returns The host {@link UniverInstanceType}.
     * @example
     * ```ts
     * const embed = univerAPI.listEmbeds()[0];
     * console.log(embed.getHostType());
     * ```
     */
    getHostType(): UniverInstanceType;
    /**
     * Get the embedded child unit type.
     * @returns The child {@link UniverInstanceType}, or `undefined` only when
     * the descriptor does not declare a child type.
     * @example
     * ```ts
     * const embed = univerAPI.listEmbeds()[0];
     * console.log(embed.getChildType());
     * ```
     */
    getChildType(): UniverInstanceType | undefined;
    /**
     * Get the host entry used by this embed, such as `docs-custom-block` or
     * `sheets-sheet-tab`.
     * @returns The host entry.
     * @example
     * ```ts
     * const embed = univerAPI.listEmbeds()[0];
     * console.log(embed.getEntry());
     * ```
     */
    getEntry(): EmbedHostEntry;
    /**
     * Returns a detached descriptor snapshot with the Embed's current host context.
     *
     * The persisted descriptor contains identity and child configuration only.
     * `context` is resolved from the current host model on every call. When the
     * host anchor no longer exists, `context.resolved` is `false`; stale creation
     * geometry is never returned as current geometry.
     *
     * @returns The descriptor and live host context.
     * @example
     * ```ts
     * const embed = univerAPI.listEmbeds()[0];
     * const descriptor = embed.getDescriptor();
     * if (descriptor.context.resolved) {
     *   console.log(descriptor.context);
     * }
     * ```
     */
    getDescriptor(): IEmbedDescriptorSnapshot;
    /**
     * Returns the current rectangle for a floating Embed in its host model coordinate system.
     *
     * Sheet, Slide, and Board each retain their own coordinate system. This API
     * does not apply viewport scroll, zoom, or screen transforms.
     *
     * @returns {IGroupBaseBound | null} Current bounds, or `null` for a non-floating or unresolved host anchor.
     * @example
     * ```ts
     * const embed = univerAPI.listEmbeds()[0];
     * console.log(embed.getBounds());
     * ```
     */
    getBounds(): IGroupBaseBound | null;
    /**
     * Updates a floating Embed's bounds through the host adapter mutation plan.
     *
     * For a Sheet floating Embed this preserves the current Position, Both, or
     * None anchor kind and rematerializes the required markers. The update
     * participates in Undo/Redo.
     *
     * @param {IGroupBaseBound} bounds Bounds in the host model coordinate system.
     * @returns {boolean} Whether the command succeeded.
     * @throws {@link EmbedError} When this Embed is not hosted on a floating surface.
     * @example
     * ```ts
     * embed.setBounds({ left: 120, top: 80, width: 640, height: 360 });
     * ```
     */
    setBounds(bounds: IGroupBaseBound): boolean;
    /**
     * Returns a Sheet floating Embed's normalized OneCell, TwoCell, or Absolute placement.
     *
     * @returns {ISheetDrawingPlacement | null} Current Sheet placement, or `null` when this is not a resolved Sheet floating Embed.
     * @example
     * ```ts
     * const placement = embed.getPlacement();
     * console.log(placement);
     * ```
     */
    getPlacement(): ISheetDrawingPlacement | null;
    /**
     * Updates a Sheet floating Embed's placement through a command and host mutations.
     *
     * Use exact markers when the caller owns the cell relationship. Use
     * `{ kind, bounds }` when the caller owns a rectangle and wants Univer to
     * infer markers from the current Sheet grid. Position keeps a fixed size
     * while moving with its start cell; Both follows grid changes in position
     * and size; None remains an absolute Sheet rectangle.
     *
     * @param {ISheetDrawingPlacementInput} placement Exact markers or bounds with an explicit anchor kind.
     * @returns {boolean} Whether the command succeeded.
     * @throws {@link EmbedError} When this Embed is not on a Sheet floating surface.
     * @example Position inferred from bounds
     * ```ts
     * embed.setPlacement({
     *   kind: univerAPI.Enum.SheetDrawingAnchorType.Position,
     *   bounds: { left: 120, top: 80, width: 640, height: 360 },
     * });
     * ```
     * @example Position with an exact marker
     * ```ts
     * embed.setPlacement({
     *   kind: univerAPI.Enum.SheetDrawingAnchorType.Position,
     *   from: { row: 2, column: 1, rowOffset: 8, columnOffset: 12 },
     *   width: 640,
     *   height: 360,
     * });
     * ```
     * @example Both inferred from bounds
     * ```ts
     * embed.setPlacement({
     *   kind: univerAPI.Enum.SheetDrawingAnchorType.Both,
     *   bounds: { left: 120, top: 80, width: 640, height: 360 },
     * });
     * ```
     * @example Both with exact markers
     * ```ts
     * embed.setPlacement({
     *   kind: univerAPI.Enum.SheetDrawingAnchorType.Both,
     *   from: { row: 2, column: 1, rowOffset: 8, columnOffset: 12 },
     *   to: { row: 14, column: 8, rowOffset: 0, columnOffset: 0 },
     * });
     * ```
     * @example Absolute
     * ```ts
     * embed.setPlacement({
     *   kind: univerAPI.Enum.SheetDrawingAnchorType.None,
     *   left: 120,
     *   top: 80,
     *   width: 640,
     *   height: 360,
     * });
     * ```
     */
    setPlacement(placement: ISheetDrawingPlacementInput): boolean;
    /**
     * Get the persisted child subview selected for this embed.
     *
     * This value is the author- or Agent-selected default stored in the host
     * embed resource. A user's local worksheet, page, table, view, or dashboard navigation
     * does not change it. The returned IDs are stable resource IDs rather than
     * display names.
     *
     * @returns The display target, or `undefined` when the child uses its default view.
     * @example
     * ```ts
     * const embed = univerAPI.getEmbed({
     *     hostUnitId: 'board-unit-id',
     *     embedId: 'base-calendar',
     * });
     *
     * console.log(embed?.getDisplayTarget());
     * // { tableId: 'events', viewId: 'calendar' }
     * ```
     */
    getDisplayTarget(): EmbedDisplayTarget | undefined;
    /**
     * Persist the child subview displayed by this embed.
     *
     * The target shape is determined by the child type: Sheet uses
     * `subUnitId`, Slide uses `pageId`, and Base uses `tableId` with an
     * optional `viewId`. Pass stable resource IDs, not display names.
     *
     * The command updates the host embed resource, participates in Undo/Redo,
     * and is synchronized through the existing collaboration mutation stream.
     * Normal in-child navigation remains local to each collaborator.
     *
     * The command validates the target shape but does not require the referenced
     * worksheet, page, table, view, or dashboard to be loaded. When the child mounts, a
     * missing target ID falls back to its first available subview.
     *
     * @param displayTarget The next target, or `undefined` to restore default selection.
     * @returns `true` when the value is accepted (including an unchanged value);
     * `false` when the embed is missing or soft-deleted. A `true` result does
     * not assert that the referenced child ID currently exists.
     * @throws {@link EmbedError} When the target shape does not match the child unit type.
     * @example Sheet
     * ```ts
     * const embed = univerAPI.getEmbed({
     *     hostUnitId: 'board-unit-id',
     *     embedId: 'sheet-embed',
     * });
     *
     * embed?.setDisplayTarget({ subUnitId: 'sheet-2' });
     * ```
     * @example Slide
     * ```ts
     * const embed = univerAPI.getEmbed({
     *     hostUnitId: 'board-unit-id',
     *     embedId: 'slide-embed',
     * });
     *
     * embed?.setDisplayTarget({ pageId: 'page-2' });
     * ```
     * @example Base
     * ```ts
     * const embed = univerAPI.getEmbed({
     *     hostUnitId: 'board-unit-id',
     *     embedId: 'base-calendar',
     * });
     *
     * embed?.setDisplayTarget({ tableId: 'events', viewId: 'calendar', dashboardId: 'operations' });
     * embed?.setDisplayTarget(undefined); // Restore the child's default view.
     * ```
     */
    setDisplayTarget(displayTarget?: EmbedDisplayTarget): boolean;
    /**
     * Load this embed's referenced child unit into the current runtime.
     *
     * @param options Optional request controls.
     * @returns A promise resolving to the loaded child unit facade instance.
     * @example TypeScript
     * ```ts
     * const embed = univerAPI.createEmbed<UniverFacadeTypes.FDocument>({
     *     embedId: 'doc-in-sheet',
     *     host: {
     *         unitId: 'host-unit-id',
     *         surface: univerAPI.Enum.FEmbedHostSurface.SheetFloating,
     *         context: {
     *             subUnitId: 'host-sheet-id',
     *             placement: {
     *                 kind: univerAPI.Enum.SheetDrawingAnchorType.Position,
     *                 bounds: { left: 80, top: 80, width: 640, height: 360 },
     *             },
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
     * @example TypeScript descriptor read type fallback
     * ```ts
     * const embed = univerAPI.listEmbeds()[0];
     *
     * const childDocument = await embed.loadAsync<UniverFacadeTypes.FDocument>();
     * ```
     * @example JavaScript
     * ```js
     * const embed = univerAPI.listEmbeds()[0];
     *
     * const childDocument = await embed.loadAsync();
     * ```
     */
    loadAsync<TLoadFacade = TUnitFacade>(options?: ILoadEmbedOptions): Promise<TLoadFacade>;
    /**
     * Remove this embed from its host unit.
     *
     * This method executes {@link RemoveEmbedCommand}; it does not edit the
     * embed model directly.
     *
     * @returns `true` when the command succeeds.
     * @example Browser console
     * ```ts
     * const embed = univerAPI.listEmbeds()[0];
     * console.log(embed.remove());
     * ```
     */
    remove(): boolean;
}
