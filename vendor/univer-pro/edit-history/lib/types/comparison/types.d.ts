import type { UniverInstanceType } from '@univerjs/core';
/** Unit types supported by semantic history comparison. */
export type UnitComparisonType = UniverInstanceType.UNIVER_DOC | UniverInstanceType.UNIVER_SHEET | UniverInstanceType.UNIVER_SLIDE | UniverInstanceType.UNIVER_BASE | UniverInstanceType.UNIVER_BOARD;
/** Describes how the two compared states were reconstructed. */
export declare enum UnitComparisonFidelity {
    HISTORY = "history",
    SNAPSHOT = "snapshot"
}
/** Describes a semantic change from the left state to the right state. */
export declare enum UnitComparisonChangeKind {
    DELETE = "delete",
    INSERT = "insert",
    UPDATE = "update"
}
/** Controls the amount of information returned for each change. */
export declare enum UnitComparisonDetailLevel {
    SUMMARY = "summary",
    CHANGES = "changes",
    FULL = "full"
}
/** Describes a segment in a text-level diff. */
export declare enum UnitComparisonSegmentKind {
    DELETE = "delete",
    EQUAL = "equal",
    INSERT = "insert"
}
/** Describes the semantic type of a changed leaf value. */
export declare enum UnitComparisonValueType {
    ARRAY = "array",
    BOOLEAN = "boolean",
    COLOR = "color",
    FORMULA = "formula",
    GEOMETRY = "geometry",
    NULL = "null",
    NUMBER = "number",
    OBJECT = "object",
    POSITION = "position",
    REFERENCE = "reference",
    STYLE = "style",
    TEXT = "text",
    UNKNOWN = "unknown"
}
/** Stable semantic entity codes. Applications translate these codes at the presentation boundary. */
export declare enum UnitComparisonEntityType {
    UNIT = "unit",
    WORKBOOK = "workbook",
    WORKSHEET = "worksheet",
    CELL = "cell",
    ROW_COLUMN = "row-column",
    MOVE = "move",
    CONDITION_FORMAT = "condition-format",
    DATA_VALIDATION = "data-validation",
    SPARKLINE = "sparkline",
    TABLE = "table",
    SHAPE = "shape",
    CHART = "chart",
    PIVOT = "pivot",
    PARAGRAPH = "paragraph",
    TEXT_STYLE = "text-style",
    SECTION = "section",
    BLOCK_RANGE = "block-range",
    CUSTOM_RANGE = "custom-range",
    TABLE_RANGE = "table-range",
    CUSTOM_BLOCK = "custom-block",
    COLUMN_GROUP = "column-group",
    DRAWING = "drawing",
    HEADER = "header",
    FOOTER = "footer",
    DOCUMENT_STYLE = "document-style",
    DOCUMENT_SETTING = "document-setting",
    CUSTOM_DECORATION = "custom-decoration",
    DOC_HYPERLINK = "doc-hyperlink",
    DOC_CALLOUT = "doc-callout",
    DOC_QUOTE = "doc-quote",
    DOC_CHART = "doc-chart",
    DOC_CHART_DATA = "doc-chart-data",
    DOC_CODE = "doc-code",
    DOC_LATEX = "doc-latex",
    DOC_SHAPE_RESOURCE = "doc-shape-resource",
    DOC_TABLE_RESOURCE = "doc-table-resource",
    SLIDE = "slide",
    SLIDE_ELEMENT = "slide-element",
    SLIDE_TRANSITION = "slide-transition",
    SLIDE_TRANSITION_REFERENCE = "slide-transition-ref",
    SLIDE_MASTER = "slide-master",
    SLIDE_LAYOUT = "slide-layout",
    SLIDE_THEME = "slide-theme",
    SLIDE_CHART = "slide-chart",
    SLIDE_CHART_DATA = "slide-chart-data",
    SLIDE_TABLE = "slide-table",
    BASE = "base",
    FIELD = "field",
    RECORD = "record",
    VIEW = "view",
    BOARD_PAGE = "board-page",
    BOARD_ELEMENT = "board-element",
    BOARD_THEME = "board-theme",
    BOARD_CHART = "board-chart",
    BOARD_CHART_DATA = "board-chart-data",
    BOARD_TABLE = "board-table"
}
/** Indicates whether a comparison result is complete enough for normal presentation. */
export declare enum UnitComparisonReadiness {
    DEGRADED = "degraded",
    READY = "ready"
}
/** Stable machine-readable reasons why a comparison result is degraded. */
export declare enum UnitComparisonDiagnosticCode {
    SHEET_SNAPSHOT_AXIS_IDENTITY_AMBIGUOUS = "sheet-snapshot-axis-identity-ambiguous",
    SHEET_STRUCTURAL_HISTORY_FALLBACK = "sheet-structural-history-partially-falls-back-to-snapshot-coordinates"
}
export interface IUnitComparisonTextSegment {
    /** How this text segment changed from the left state to the right state. */
    readonly kind: UnitComparisonSegmentKind;
    /** Text content in this segment. */
    readonly text: string;
}
/** One normalized property-level change within a semantic entity. */
export interface IUnitComparisonLeafChange {
    /** Product-neutral property path, such as `['formula']` or `['geometry', 'width']`. */
    readonly path: readonly string[];
    /** Exact path in the adapter's entity value when semantic normalization changes the path. */
    readonly sourcePath?: readonly string[];
    /** How this property changed from the left state to the right state. */
    readonly kind: UnitComparisonChangeKind;
    /** Semantic value category used by renderers and agent consumers. */
    readonly valueType: UnitComparisonValueType;
    /** Property value in the left state, when available. */
    readonly before?: unknown;
    /** Property value in the right state, when available. */
    readonly after?: unknown;
    /**
     * Inline diff for paired text/formula strings. Segments reconstruct each complete input.
     * Unchanged prefixes/suffixes are retained even for long strings. An oversized changed middle
     * is returned as a whole replacement to bound the alignment cost.
     */
    readonly segments?: {
        /** Segments that reconstruct and annotate the left value. */
        readonly left: readonly IUnitComparisonTextSegment[];
        /** Segments that reconstruct and annotate the right value. */
        readonly right: readonly IUnitComparisonTextSegment[];
    };
}
/** Default navigation target for one semantic entity. */
export interface IUnitComparisonEntityTarget {
    /** Target discriminant. */
    readonly kind: 'entity';
    /** Semantic category of the target. */
    readonly entityType: UnitComparisonEntityType;
    /** Product-native stable identifier used for navigation. */
    readonly stableId: string;
    /** Stable identity used to align the two comparison sides. */
    readonly comparisonStableId: string;
    /** Stable identifier of the containing entity. */
    readonly parentStableId?: string;
}
/** Serializable Sheet range used by comparison navigation. */
export interface IUnitComparisonSheetRange {
    /** Zero-based first row. */
    readonly startRow: number;
    /** Zero-based last row, inclusive. */
    readonly endRow: number;
    /** Zero-based first column. */
    readonly startColumn: number;
    /** Zero-based last column, inclusive. */
    readonly endColumn: number;
}
/** Navigation target for one or more ranges in a worksheet. */
export interface IUnitComparisonSheetRangeTarget {
    /** Target discriminant. */
    readonly kind: 'sheet-range';
    /** Semantic category of the Sheet resource. */
    readonly entityType: UnitComparisonEntityType;
    /** Product-native stable identifier used for navigation. */
    readonly stableId: string;
    /** Stable identity used to align the two comparison sides. */
    readonly comparisonStableId: string;
    /** Stable worksheet identifier. */
    readonly parentStableId?: string;
    /** Single resource range, when the resource owns one range. */
    readonly range?: IUnitComparisonSheetRange;
    /** Resource ranges, when the resource owns a range collection. */
    readonly ranges?: readonly IUnitComparisonSheetRange[];
}
/** Navigation target for a changed Sheet row or column run. */
export interface IUnitComparisonSheetAxisTarget {
    /** Target discriminant. */
    readonly kind: 'sheet-axis';
    /** Semantic category of the axis change. */
    readonly entityType: UnitComparisonEntityType;
    /** Product-native stable identifier used for navigation. */
    readonly stableId: string;
    /** Stable identity used to align the two comparison sides. */
    readonly comparisonStableId: string;
    /** Stable worksheet identifier. */
    readonly parentStableId?: string;
    /** Whether this target addresses columns or rows. */
    readonly axis: 'column' | 'row';
    /** Zero-based first native axis index. */
    readonly start: number;
    /** Zero-based last native axis index, inclusive. */
    readonly end: number;
}
/** Navigation target for one raw Base table cell. */
export interface IUnitComparisonBaseCellTarget {
    /** Target discriminant. */
    readonly kind: 'base-cell';
    /** Semantic category of the Base cell. */
    readonly entityType: UnitComparisonEntityType;
    /** Product-native stable identifier used for navigation. */
    readonly stableId: string;
    /** Stable identity used to align the two comparison sides. */
    readonly comparisonStableId: string;
    /** Stable table identifier inherited from the semantic entity. */
    readonly parentStableId?: string;
    /** Base table identifier. */
    readonly tableId: string;
    /** Base record identifier. */
    readonly recordId: string;
    /** Base field identifier. */
    readonly fieldId: string;
}
/** Product-neutral, serializable navigation target union. */
export type IUnitComparisonNavigationTarget = IUnitComparisonEntityTarget | IUnitComparisonSheetRangeTarget | IUnitComparisonSheetAxisTarget | IUnitComparisonBaseCellTarget;
/** Serializable location of one semantic entity on one side of a comparison. */
export interface IUnitComparisonLocation {
    /** Stable semantic path from the Unit root to this entity. */
    readonly path: readonly string[];
    /** Product-native stable identifier when one exists, otherwise the comparison identifier. */
    readonly stableId: string;
    /** Stable identifier of the containing entity, such as a worksheet or page. */
    readonly parentStableId?: string;
    /** Zero-based product ordering position, or `null` when the side has no position. */
    readonly position?: number | null;
    /** Serializable navigation target; never a runtime object or DOM reference. */
    readonly target?: IUnitComparisonNavigationTarget;
}
/** Stable product-owned view scope, such as a worksheet, slide, Base table, or Board page. */
export interface IUnitComparisonScopeReference {
    /** Semantic category of the scope root. */
    readonly entityType: UnitComparisonEntityType;
    /** Product-native stable identifier of the scope root. */
    readonly stableId: string;
}
/** One stable, symmetric semantic difference between the left and right Unit states. */
export interface IUnitComparisonItem {
    /** Deterministic identifier for this comparison item. */
    readonly id: string;
    /** Identifier used to align the same semantic entity across both sides. */
    readonly stableId: string;
    /** Stable identifier of the containing entity, when applicable. */
    readonly parentStableId?: string;
    /** Product-owned view scope containing this item, when the product has independently navigable views. */
    readonly scope?: IUnitComparisonScopeReference;
    /** Top-level entity change from the left state to the right state. */
    readonly kind: UnitComparisonChangeKind;
    /** Product-neutral semantic entity category. */
    readonly entityType: UnitComparisonEntityType;
    /** Stable semantic path from the Unit root to the compared entity. */
    readonly path: readonly string[];
    /** Optional human-readable product name; applications localize the entity category separately. */
    readonly displayName?: string;
    /** Whether the aligned entity changed ordering position. */
    readonly moved: boolean;
    /** Normalized property-level changes for this entity. */
    readonly changes: readonly IUnitComparisonLeafChange[];
    /** Navigation locations on both sides; an absent side is represented by `null`. */
    readonly locations: {
        /** Location in the left state. */
        readonly left: IUnitComparisonLocation | null;
        /** Location in the right state. */
        readonly right: IUnitComparisonLocation | null;
    };
    /** Full product values, included only by the `FULL` detail projection. */
    readonly values?: {
        /** Complete value in the left state. */
        readonly left?: unknown;
        /** Complete value in the right state. */
        readonly right?: unknown;
    };
}
/** Filter, search, projection, and pagination options for a semantic comparison. */
export interface IUnitComparisonQuery {
    /** Zero-based offset into the filtered item list. Defaults to `0`. */
    readonly offset?: number;
    /** Maximum number of returned items. Defaults to `100` and is capped at `1000`. */
    readonly limit?: number;
    /** Zero-based offset into product-owned context rows, such as Doc paragraph alignment. */
    readonly contextOffset?: number;
    /** Maximum returned context rows. Defaults to `1000` and is capped at `1000`. */
    readonly contextLimit?: number;
    /** Includes only the requested top-level change kinds. */
    readonly kinds?: readonly UnitComparisonChangeKind[];
    /** Includes only the requested semantic entity categories. */
    readonly entityTypes?: readonly UnitComparisonEntityType[];
    /** Includes only children of this stable parent identifier. */
    readonly parentStableId?: string;
    /** Includes only items rendered inside this product-owned view scope. */
    readonly scope?: IUnitComparisonScopeReference;
    /** Case-insensitive search over names, identifiers, semantic paths, and changed leaf values. */
    readonly search?: string;
    /** Controls whether results contain summary metadata, leaf changes, or full values. */
    readonly detail?: UnitComparisonDetailLevel;
}
/** Complete input for comparing two already materialized UnitData states. */
export interface IUnitComparisonInput {
    /** Caller-owned identifier that correlates this result with a review or comparison session. */
    readonly comparisonId: string;
    /** Identifier of the Unit represented by both snapshots. */
    readonly unitId: string;
    /** Optional current display name of the Unit. */
    readonly unitName?: string;
    /** Numeric Univer Unit type used to resolve the product adapter. */
    readonly type: UnitComparisonType;
    /** How the caller reconstructed the two supplied states. */
    readonly fidelity: UnitComparisonFidelity;
    /** Optional shared history revision from which both states diverged. */
    readonly commonBaseRevision?: number;
    /** Whether either materialized state has advanced since this comparison was prepared. */
    readonly stale?: boolean;
    /** Fully materialized UnitData for the left side, including all applied mutations. */
    readonly leftData: unknown;
    /** Fully materialized UnitData for the right side, including all applied mutations. */
    readonly rightData: unknown;
    /** Optional left-side mutation metadata for product adapters that can improve fidelity with history. */
    readonly leftChangesets?: readonly unknown[];
    /** Optional right-side mutation metadata for product adapters that can improve fidelity with history. */
    readonly rightChangesets?: readonly unknown[];
    /** Optional filtering and result projection applied after semantic comparison. */
    readonly query?: IUnitComparisonQuery;
}
/** Product-adapter input after common comparison metadata has been removed. */
export interface IUnitComparisonAdapterInput {
    /** Identifier of the compared Unit. */
    readonly unitId: string;
    /** Fully materialized left UnitData. */
    readonly leftData: unknown;
    /** Fully materialized right UnitData. */
    readonly rightData: unknown;
    /** Left history metadata supplied by the caller, or an empty array. */
    readonly leftChangesets: readonly unknown[];
    /** Right history metadata supplied by the caller, or an empty array. */
    readonly rightChangesets: readonly unknown[];
}
/** Complete, unpaged semantic output produced by one product adapter. */
export interface IUnitComparisonAdapterResult {
    /** All semantic differences before query filtering or pagination. */
    readonly items: readonly IUnitComparisonItem[];
    /** Entity categories for which this adapter provides semantic coverage. */
    readonly supportedEntityTypes: readonly UnitComparisonEntityType[];
    /** Optional serializable navigation metadata owned by the product adapter. */
    readonly productContext?: IUnitComparisonProductContext;
    /** Changed product-owned view scopes in a stable, symmetric order. */
    readonly scopes?: readonly IUnitComparisonScope[];
    /** Mutation identifiers the adapter could not interpret, if history-assisted comparison was requested. */
    readonly unsupportedMutationIds?: readonly string[];
    /** Explicit degradation when native identities cannot be recovered from snapshots alone. */
    readonly readiness?: UnitComparisonReadiness;
    /** Stable machine-readable reasons why the comparison is degraded. */
    readonly diagnosticCodes?: readonly UnitComparisonDiagnosticCode[];
}
/** Compact native row/column run for symmetric layout and coordinate navigation. */
export interface IUnitComparisonAxisAlignment {
    /** First native left index, or null for a right-only run. */
    readonly leftStart: number | null;
    /** First native right index, or null for a left-only run. */
    readonly rightStart: number | null;
    /** Number of consecutive axes represented by this run; always positive. */
    readonly count: number;
}
/** One changed, independently navigable product view suitable for tabs, trees, and agent queries. */
export interface IUnitComparisonScope extends IUnitComparisonScopeReference {
    /** Product-owned display name from the right state, falling back to the left state and stable ID. */
    readonly displayName: string;
    /** Whether the complete scope was inserted, deleted, or changed in place. */
    readonly kind: UnitComparisonChangeKind;
    /** Number of semantic comparison items contained by this scope. */
    readonly changeCount: number;
    /** Whether the scope itself changed ordering position. */
    readonly moved: boolean;
    /** Scope locations on both sides. A missing side is represented by `null`. */
    readonly locations: {
        /** Scope location in the left state. */
        readonly left: IUnitComparisonLocation | null;
        /** Scope location in the right state. */
        readonly right: IUnitComparisonLocation | null;
    };
}
/** One changed worksheet exposed for product navigation. */
export interface IUnitComparisonSheetContextItem {
    /** Stable worksheet identifier. */
    readonly sheetId: string;
    /** Worksheet display name from the right state, falling back to the left state. */
    readonly name: string;
    /** Number of changed entities contained by this worksheet. */
    readonly changeCount: number;
    /** Monotonic native row runs. History identities are preferred; snapshot-only insertions may be inferred. */
    readonly rows: readonly IUnitComparisonAxisAlignment[];
    /** Monotonic native column runs, compact even for very large sparse worksheets. */
    readonly columns: readonly IUnitComparisonAxisAlignment[];
}
/** Sheet-specific serializable navigation metadata. */
export interface IUnitComparisonSheetContext {
    /** Discriminant for a Sheet Unit. */
    readonly type: UniverInstanceType.UNIVER_SHEET;
    /** Changed worksheets in stable workbook order. */
    readonly sheets: readonly IUnitComparisonSheetContextItem[];
}
/** One stable paragraph alignment row used by symmetric Doc presentation. */
export interface IUnitComparisonParagraphAlignment {
    /** Body path for header/footer paragraphs; omitted for the main document body. */
    readonly segmentPath?: readonly string[];
    /** Comparison identifier shared by both sides of the aligned row. */
    readonly stableId: string;
    /** Paragraph position in the left state, or `null` for a right-only paragraph. */
    readonly leftPosition: number | null;
    /** Paragraph position in the right state, or `null` for a left-only paragraph. */
    readonly rightPosition: number | null;
    /** Product-native left paragraph identifier, when present. */
    readonly leftNativeStableId: string | null;
    /** Product-native right paragraph identifier, when present. */
    readonly rightNativeStableId: string | null;
    /** Whether the row is left-only, paired, or right-only. */
    readonly presence: 'left' | 'paired' | 'right';
}
/** Doc-specific serializable navigation metadata. */
export interface IUnitComparisonDocContext {
    /** Discriminant for a Doc Unit. */
    readonly type: UniverInstanceType.UNIVER_DOC;
    /** Stable paragraph rows used to align insertions and deletions symmetrically. */
    readonly paragraphAlignment: readonly IUnitComparisonParagraphAlignment[];
    /** Optional page metadata added when the public service bounds paragraph alignment rows. */
    readonly paragraphAlignmentPage?: IUnitComparisonPage;
}
/** Slide-specific serializable navigation metadata. */
export interface IUnitComparisonSlideContext {
    /** Discriminant for a Slide Unit. */
    readonly type: UniverInstanceType.UNIVER_SLIDE;
}
/** Base-specific serializable navigation metadata. */
export interface IUnitComparisonBaseContext {
    /** Discriminant for a Base Unit. */
    readonly type: UniverInstanceType.UNIVER_BASE;
    /** Declares that visual comparison should project the canonical raw table data. */
    readonly visualProjection: 'raw-table-data';
}
/** Board-specific serializable navigation metadata. */
export interface IUnitComparisonBoardContext {
    /** Discriminant for a Board Unit. */
    readonly type: UniverInstanceType.UNIVER_BOARD;
}
/** Product-specific navigation data that remains serializable and UI-independent. */
export type IUnitComparisonProductContext = IUnitComparisonSheetContext | IUnitComparisonDocContext | IUnitComparisonSlideContext | IUnitComparisonBaseContext | IUnitComparisonBoardContext;
/** Compact metadata retained by a prepared comparison after its snapshots have been released. */
export interface IPreparedUnitComparisonMetadata {
    /** Caller-owned comparison session identifier. */
    readonly comparisonId: string;
    /** Identifier of the compared Unit. */
    readonly unitId: string;
    /** Optional current display name of the Unit. */
    readonly unitName?: string;
    /** Numeric Univer Unit type. */
    readonly type: UnitComparisonType;
    /** How the caller reconstructed the compared states. */
    readonly fidelity: UnitComparisonFidelity;
    /** Optional shared history revision from which both states diverged. */
    readonly commonBaseRevision?: number;
    /** Whether either materialized state advanced after preparation. */
    readonly stale: boolean;
}
/** Cached product comparison that can serve multiple cheap queries without rerunning the adapter. */
export interface IPreparedUnitComparison {
    /** Compact immutable metadata; full input snapshots are not retained. */
    readonly metadata: IPreparedUnitComparisonMetadata;
    /** Complete adapter output retained for cheap repeated queries. */
    readonly adapterResult: IUnitComparisonAdapterResult;
}
/** Aggregate counts for the complete, unfiltered semantic comparison. */
export interface IUnitComparisonSummary {
    /** Total number of changed semantic entities. */
    readonly total: number;
    /** Number of entities present only on the right. */
    readonly insert: number;
    /** Number of entities present only on the left. */
    readonly delete: number;
    /** Number of aligned entities whose content changed. */
    readonly update: number;
    /** Number of aligned entities whose ordering position changed. */
    readonly moved: number;
    /** Changed entity count grouped by semantic entity category. */
    readonly byEntityType: Readonly<Partial<Record<UnitComparisonEntityType, number>>>;
}
/** Pagination metadata for the filtered comparison item list. */
export interface IUnitComparisonPage {
    /** Zero-based offset used by this page. */
    readonly offset: number;
    /** Maximum requested page size after service bounds are applied. */
    readonly limit: number;
    /** Total number of items matching the current filters. */
    readonly matched: number;
    /** Whether another page exists after the returned items. */
    readonly hasMore: boolean;
}
/** Versioned, serializable comparison result shared by Web, Server, CLI, and agent consumers. */
export interface IUnitComparisonResult {
    /** Wire schema version for backward-compatible consumers. */
    readonly schemaVersion: 1;
    /** Caller-owned comparison session identifier. */
    readonly comparisonId: string;
    /** Identity and type of the compared Unit. */
    readonly unit: {
        /** Identifier of the compared Unit. */
        readonly unitId: string;
        /** Numeric Univer Unit type. */
        readonly type: UnitComparisonType;
        /** Optional current Unit display name. */
        readonly name?: string;
    };
    /** How the two compared states were reconstructed. */
    readonly fidelity: UnitComparisonFidelity;
    /** Shared history revision, when supplied by the caller. */
    readonly commonBaseRevision?: number;
    /** Whether the prepared comparison is older than either current side. */
    readonly stale: boolean;
    /** Detail projection applied to returned items. */
    readonly detail: UnitComparisonDetailLevel;
    /** Aggregate counts over the complete comparison. */
    readonly summary: IUnitComparisonSummary;
    /** Declared semantic coverage of the selected product adapter. */
    readonly coverage: {
        /** Entity categories understood by this adapter. */
        readonly supportedEntityTypes: readonly UnitComparisonEntityType[];
    };
    /** Changed product-owned views used to build tabs, navigation trees, or follow-up scope queries. */
    readonly scopes: readonly IUnitComparisonScope[];
    /** Pagination metadata for the current filtered item list. */
    readonly page: IUnitComparisonPage;
    /** Filtered and paged semantic differences. */
    readonly items: readonly IUnitComparisonItem[];
    /** Machine-readable completeness and degradation information. */
    readonly diagnostics: {
        /** Whether the adapter considers the result ready for normal presentation. */
        readonly readiness: UnitComparisonReadiness;
        /** Mutation identifiers that could not be interpreted. */
        readonly unsupportedMutationIds: readonly string[];
        /** Stable machine-readable reasons why the result is degraded. */
        readonly codes: readonly UnitComparisonDiagnosticCode[];
    };
    /** Optional serializable navigation metadata owned by the product adapter. */
    readonly productContext?: IUnitComparisonProductContext;
}
