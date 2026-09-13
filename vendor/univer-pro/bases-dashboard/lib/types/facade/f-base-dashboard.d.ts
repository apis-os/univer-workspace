import type { BaseDashboardAPIContextService, BaseDashboardImageDisplayMode, IBaseDashboardFormulaShapeAppearance, IBaseDashboardFormulaShapeWidget, IBaseDashboardImageWidget, IBaseDashboardLayout, IBaseDashboardPivotChartWidget, IBaseDashboardSnapshot, IBaseDashboardTableFilterWidget, IBaseDashboardTextAppearance, IBaseDashboardTextWidget, IBaseDashboardWidget, IBasePivotChartConfig } from '@univerjs-pro/bases-dashboard';
import type { IShapeData, ShapeTypeEnum } from '@univerjs-pro/engine-shape';
import type { IDocumentData, IFilterConfig, ImageSourceType } from '@univerjs/core';
import { FBaseObjectPermission } from '@univerjs-pro/bases/facade';
/** Options for creating a Dashboard in a Base. */
export interface ICreateBaseDashboardOptions {
    /** Stable Dashboard id. A random id is generated when omitted. */
    id?: string;
    /** Zero-based insertion index in the Dashboard order. */
    index?: number;
}
/** Common options used when adding a Dashboard widget. */
export interface IBaseDashboardWidgetCreateOptions {
    /** Dashboard-local widget id. A random id is generated when omitted. */
    id?: string;
    /** Required grid position and size. */
    layout: IBaseDashboardLayout;
    /** Zero-based insertion index in the widget order. */
    index?: number;
    /** Optional widget title. */
    title?: string;
}
/** Options for adding a Pivot Chart widget to a Dashboard. */
export interface IAddBaseDashboardPivotChartOptions extends IBaseDashboardWidgetCreateOptions {
    /** Optional Dashboard-local Chart presentation overrides. */
    chart?: IBasePivotChartConfig;
}
/** Options for adding a table Filter widget to a Dashboard. */
export interface IAddBaseDashboardTableFilterOptions extends IBaseDashboardWidgetCreateOptions {
    /** Initial Base Filter. Omit it to add an unconfigured Filter control. */
    filter?: IFilterConfig | null;
}
/** Options for adding a Doc Model-backed Text widget to a Dashboard. */
export interface IAddBaseDashboardTextOptions extends IBaseDashboardWidgetCreateOptions {
    /** Complete detached Doc Model snapshot rendered by the Text widget. */
    document: IDocumentData;
    /** Optional Dashboard presentation settings applied around the Doc Model. */
    appearance?: IBaseDashboardTextAppearance;
}
/** Options for adding an Image widget to a Dashboard. */
export interface IAddBaseDashboardImageOptions extends IBaseDashboardWidgetCreateOptions {
    /** Persisted image source returned by Image IO, or a URL/Base64 source. */
    source: string;
    /** Image source representation used by Image IO. */
    sourceType: ImageSourceType;
    /** Accessible alternative text. */
    alt?: string;
    /** How the image fills its widget. Defaults to `cover`. */
    displayMode?: BaseDashboardImageDisplayMode;
}
/** Options for adding an Engine Shape-backed Formula Shape widget to a Dashboard. */
export interface IAddBaseDashboardFormulaShapeOptions extends IBaseDashboardWidgetCreateOptions {
    /** Engine Shape type used to render the formula result. */
    shapeType: ShapeTypeEnum;
    /** Complete Engine Shape data, including its formula binding. */
    shapeData: IShapeData;
    /** Optional accessible or descriptive label. */
    description?: string;
    /** Optional Dashboard-local presentation settings. */
    appearance?: IBaseDashboardFormulaShapeAppearance;
}
/** Facade API object bound to one persisted Base Dashboard. */
export declare class FBaseDashboard {
    private readonly _unitId;
    private readonly _dashboardId;
    private readonly _context;
    /**
     * Returns the stable Dashboard id.
     * @returns {string} Stable Dashboard id.
     * @example
     * ```ts
     * const dashboardId = dashboard.getId();
     * ```
     */
    getId(): string;
    /**
     * Returns the Dashboard object permission facade.
     *
     * `canEdit()` combines the Base unit and Dashboard object Edit points. Changing this permission
     * does not affect other Dashboards in the same Base.
     *
     * @returns {FBaseObjectPermission} Permission facade for this Dashboard.
     * @example Make one Dashboard read-only and restore it
     * ```ts
     * const base = univerAPI.getActiveBase();
     * const dashboard = base?.getDashboards()[0];
     * if (!dashboard) throw new Error('Dashboard not found.');
     *
     * await dashboard.getPermission().setReadOnly();
     * console.log(dashboard.getPermission().canEdit()); // false
     * await dashboard.getPermission().setEditable();
     * ```
     */
    getPermission(): FBaseObjectPermission;
    /**
     * Returns a detached snapshot of the Dashboard.
     * @returns {IBaseDashboardSnapshot} Dashboard snapshot safe for local inspection or editing.
     * @throws {Error} If the Dashboard has been deleted.
     * @example
     * ```ts
     * const snapshot = dashboard.getSnapshot();
     * console.log(snapshot.widgetOrder);
     * ```
     */
    getSnapshot(): IBaseDashboardSnapshot;
    /**
     * Returns the human-readable Dashboard name.
     * @returns {string} Dashboard name.
     * @example
     * ```ts
     * const name = dashboard.getName();
     * ```
     */
    getName(): string;
    /**
     * Returns all widgets in persisted display order.
     * @returns {IBaseDashboardWidget[]} Detached widget snapshots.
     * @example
     * ```ts
     * const widgets = dashboard.getWidgets();
     * ```
     */
    getWidgets(): IBaseDashboardWidget[];
    /**
     * Returns one widget by id.
     * @param {string} widgetId Stable Dashboard-local widget id.
     * @returns {IBaseDashboardWidget | null} Detached widget snapshot, or null when absent.
     * @example
     * ```ts
     * const widget = dashboard.getWidgetById('revenue-chart');
     * ```
     */
    getWidgetById(widgetId: string): IBaseDashboardWidget | null;
    /**
     * Renames the Dashboard through the command system.
     * @param {string} name New human-readable Dashboard name.
     * @returns {boolean} Whether the command succeeded.
     * @example
     * ```ts
     * dashboard.setName('FY 2026 overview');
     * ```
     */
    setName(name: string): boolean;
    /**
     * Adds or replaces a widget through the command system.
     *
     * Pass an existing widget id to update that widget. A new id appends the widget unless `index` is provided.
     *
     * @param {IBaseDashboardWidget} widget Complete widget snapshot.
     * @param {number} [index] Optional zero-based position in the widget order.
     * @returns {boolean} Whether the command succeeded.
     * @example
     * ```ts
     * import { BaseDashboardWidgetType } from '@univerjs-pro/bases-dashboard';
     *
     * dashboard.upsertWidget({
     *   id: 'filter-status',
     *   type: BaseDashboardWidgetType.TableFilter,
     *   tableId: 'orders',
     *   filter: null,
     *   layout: { column: 0, row: 0, columnSpan: 3, rowSpan: 2 },
     * });
     * ```
     */
    upsertWidget(widget: IBaseDashboardWidget, index?: number): boolean;
    /**
     * Adds a Chart widget that references calculation data owned by a Pivot View.
     *
     * The widget stores only the table and Pivot View ids plus optional Dashboard-local presentation overrides.
     * Pivot fields, filters, sorting, and aggregation remain owned by the referenced Pivot View.
     *
     * @param {string} tableId Stable source table id.
     * @param {string} pivotViewId Stable Pivot View id in the source table.
     * @param {IAddBaseDashboardPivotChartOptions} options Widget layout and optional presentation overrides.
     * @returns {IBaseDashboardPivotChartWidget} The added widget snapshot.
     * @throws {Error} If the widget command fails.
     * @example
     * ```ts
     * const widget = dashboard.addPivotChart('orders', 'revenue-pivot', {
     *   layout: { column: 0, row: 0, columnSpan: 6, rowSpan: 6 },
     * });
     * ```
     */
    addPivotChart(tableId: string, pivotViewId: string, options: IAddBaseDashboardPivotChartOptions): IBaseDashboardPivotChartWidget;
    /**
     * Adds a Base table Filter widget through the command system.
     *
     * The Filter widget stores a normal Base `IFilterConfig`; Dashboard rendering and sidebar editing remain UI concerns.
     * Omit `filter` to create an empty control that the user can configure later.
     *
     * @param {string} tableId Stable source table id.
     * @param {IAddBaseDashboardTableFilterOptions} options Widget layout and optional initial Filter.
     * @returns {IBaseDashboardTableFilterWidget} The added Filter widget snapshot.
     * @throws {Error} If the widget command fails.
     * @example
     * ```ts
     * import { BaseFilterConjunction, BaseFilterOperator } from '@univerjs/core';
     *
     * dashboard.addTableFilter('orders', {
     *   id: 'region-filter',
     *   layout: { column: 0, row: 0, columnSpan: 4, rowSpan: 2 },
     *   filter: {
     *     conjunction: BaseFilterConjunction.AND,
     *     conditions: [{ fieldId: 'region', operator: BaseFilterOperator.IS, operand: 'APAC' }],
     *   },
     * });
     * ```
     */
    addTableFilter(tableId: string, options: IAddBaseDashboardTableFilterOptions): IBaseDashboardTableFilterWidget;
    /**
     * Adds a Text widget backed by a Univer Doc Model snapshot.
     *
     * Build rich text with the existing `RichTextBuilder` and pass `getData()` as `document`; the Dashboard does not
     * maintain a parallel plain-text format.
     *
     * @param {IAddBaseDashboardTextOptions} options Doc Model, layout, and optional appearance.
     * @returns {IBaseDashboardTextWidget} The added Text widget snapshot.
     * @throws {Error} If the widget command fails.
     * @example
     * ```ts
     * import { RichTextBuilder } from '@univerjs/core';
     *
     * dashboard.addText({
     *   id: 'summary',
     *   document: RichTextBuilder.create().text('Revenue increased by 18%.').getData(),
     *   appearance: { backgroundColor: '#F8FAFC', textColor: '#111827', alignment: 'left' },
     *   layout: { column: 0, row: 2, columnSpan: 4, rowSpan: 4 },
     * });
     * ```
     */
    addText(options: IAddBaseDashboardTextOptions): IBaseDashboardTextWidget;
    /**
     * Adds an Image widget through the command system.
     *
     * For uploaded files, save the file with `IImageIoService.saveImage()` first. Pass the result's `source` as
     * `source` and `imageSourceType` as `sourceType`. This model Facade never performs file selection or upload UI work.
     *
     * @param {IAddBaseDashboardImageOptions} options Persisted image source, layout, and presentation settings.
     * @returns {IBaseDashboardImageWidget} The added Image widget snapshot.
     * @throws {Error} If the widget command fails.
     * @example
     * ```ts
     * import { ImageSourceType } from '@univerjs/core';
     *
     * dashboard.addImage({
     *   id: 'strategy-image',
     *   source: 'https://example.com/strategy.png',
     *   sourceType: ImageSourceType.URL,
     *   alt: 'FY26 growth strategy',
     *   displayMode: 'cover',
     *   layout: { column: 4, row: 2, columnSpan: 4, rowSpan: 4 },
     * });
     * ```
     */
    addImage(options: IAddBaseDashboardImageOptions): IBaseDashboardImageWidget;
    /**
     * Adds an Engine Shape-backed Formula Shape widget through the command system.
     *
     * Create `shapeData` with `createFormulaShapeData()` from `@univerjs-pro/shape-editor`; formula evaluation,
     * Doc Model text rendering, and number formatting remain owned by the Shape Engine.
     *
     * @param {string} tableId Stable table id used as the formula context.
     * @param {IAddBaseDashboardFormulaShapeOptions} options Engine Shape data, layout, and optional appearance.
     * @returns {IBaseDashboardFormulaShapeWidget} The added Formula Shape widget snapshot.
     * @throws {Error} If the widget command fails.
     * @example
     * ```ts
     * import { ShapeTypeEnum } from '@univerjs-pro/engine-shape';
     * import { createFormulaShapeData } from '@univerjs-pro/shape-editor';
     *
     * dashboard.addFormulaShape('orders', {
     *   id: 'total-revenue',
     *   shapeType: ShapeTypeEnum.RoundRect,
     *   shapeData: createFormulaShapeData({ formula: '=SUM(Orders[Revenue])' }),
     *   appearance: { backgroundColor: '#EEF2FF', textColor: '#4338CA', alignment: 'center' },
     *   layout: { column: 8, row: 2, columnSpan: 4, rowSpan: 4 },
     * });
     * ```
     */
    addFormulaShape(tableId: string, options: IAddBaseDashboardFormulaShapeOptions): IBaseDashboardFormulaShapeWidget;
    /**
     * Moves an existing widget to a new persisted display position.
     *
     * This changes `widgetOrder`, not the widget's grid layout. Use `upsertWidget()` to change `layout`.
     *
     * @param {string} widgetId Stable Dashboard-local widget id.
     * @param {number} index Zero-based target position in the widget order.
     * @returns {boolean} Whether the move command succeeded; false when the widget does not exist.
     * @example
     * ```ts
     * dashboard.moveWidget('total-revenue', 0);
     * ```
     */
    moveWidget(widgetId: string, index: number): boolean;
    /**
     * Removes one widget through the command system.
     * @param {string} widgetId Stable Dashboard-local widget id.
     * @returns {boolean} Whether the command succeeded.
     * @example
     * ```ts
     * dashboard.removeWidget('revenue-chart');
     * ```
     */
    removeWidget(widgetId: string): boolean;
    /**
     * Deletes this Dashboard through the command system.
     * @returns {boolean} Whether the command succeeded.
     * @example
     * ```ts
     * dashboard.delete();
     * ```
     */
    delete(): boolean;
    private _addWidget;
}
export declare function createBaseDashboardFacade(context: BaseDashboardAPIContextService, unitId: string, name: string, options?: ICreateBaseDashboardOptions): FBaseDashboard;
