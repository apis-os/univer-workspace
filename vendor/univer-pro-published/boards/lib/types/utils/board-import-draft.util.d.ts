import type { IBoardPageElement } from '../board.type';
import type { IBoardRect } from './board-container-transform.util';
/**
 * Diagnostic returned by an external importer or appended by the client import pipeline.
 *
 * @example
 * ```ts
 * const diagnostic: IBoardImportDiagnostic = {
 *   level: 'warning',
 *   message: 'Connector label was simplified during import.',
 *   sourceRange: [18, 42],
 * };
 *
 * console.log(diagnostic.level, diagnostic.message);
 * ```
 */
export interface IBoardImportDiagnostic {
    /**
     * Diagnostic severity returned by the importer.
     */
    level: 'info' | 'warning' | 'error';
    /**
     * Human-readable diagnostic message shown by the import UI.
     */
    message: string;
    /**
     * Optional source character range in the imported text, expressed as `[start, end]` offsets.
     */
    sourceRange?: [number, number];
}
/**
 * Intermediate board-native payload returned by importers such as Mermaid conversion.
 *
 * This is not an FBoard facade API for agents. Agent-facing generation should prefer semantic `FBoard` methods such as
 * `insertShape()` and `insertConnector()`. UI import flows pass this payload to `materializeBoardImportDraft()`
 * or `InsertBoardDraftOperation` to wrap the imported elements in a real board container.
 *
 */
export interface IBoardImportDraft {
    /**
     * Draft schema version. Omit or use `1` for the current importer contract.
     */
    version?: number;
    /**
     * Import source identifier, such as `mermaid`.
     */
    sourceType?: string;
    /**
     * Suggested container title for the imported diagram.
     */
    title?: string;
    /**
     * Source diagram type, such as `flowchart` or `sequenceDiagram`.
     */
    diagramType?: string;
    /**
     * Board-native elements. `transform.left` and `transform.top` must use the
     * same coordinate semantics as regular board elements, not Mermaid or SVG
     * top-left coordinates.
     */
    elements: IBoardPageElement[];
    /**
     * Optional draft bounds. Importers should include every returned element;
     * the client expands this rect when elements fall outside it.
     */
    bounds?: IBoardRect;
    /**
     * Import diagnostics returned by the server or appended by the client.
     */
    diagnostics?: IBoardImportDiagnostic[];
}
/**
 * Options for converting an importer draft into real board elements at a board position.
 *
 * @example
 * ```ts
 * const start = createBoardShapeElement({
 *   id: 'draft-start',
 *   shapeType: 'rect',
 *   left: 0,
 *   top: 0,
 *   width: 160,
 *   height: 64,
 * });
 *
 * const options: IMaterializeBoardImportDraftOptions = {
 *   draft: {
 *     sourceType: 'mermaid',
 *     title: 'Course Flow',
 *     elements: [start],
 *   },
 *   containerName: 'Imported Course Flow',
 *   position: { left: 400, top: 240 },
 *   createId: (sourceId) => `real-${sourceId}`,
 * };
 *
 * const result = materializeBoardImportDraft(options);
 * console.log(result.containerId);
 * ```
 */
export interface IMaterializeBoardImportDraftOptions {
    /**
     * Import draft to materialize into board elements.
     */
    draft: IBoardImportDraft;
    /**
     * Optional container title. When omitted, the draft title is used.
     */
    containerName?: string;
    /**
     * Board coordinate where the materialized container should be placed.
     */
    position: Pick<IBoardRect, 'left' | 'top'>;
    /**
     * Optional id factory used to convert draft ids into real board element ids.
     */
    createId?: (sourceId: string) => string;
}
/**
 * Result of materializing an import draft before the command layer inserts the elements.
 *
 * @example
 * ```ts
 * const shape = createBoardShapeElement({
 *   id: 'draft-node',
 *   shapeType: 'rect',
 *   left: 0,
 *   top: 0,
 *   width: 160,
 *   height: 64,
 * });
 *
 * const result: IMaterializeBoardImportDraftResult = materializeBoardImportDraft({
 *   draft: { elements: [shape], title: 'Draft' },
 *   position: { left: 100, top: 200 },
 *   createId: (sourceId) => `real-${sourceId}`,
 * });
 *
 * console.log(result.containerId, result.elementIdMap['draft-node'], result.elements.length);
 * ```
 */
export interface IMaterializeBoardImportDraftResult {
    /**
     * Generated id of the wrapper container inserted for the draft.
     */
    containerId: string;
    /**
     * Materialized board elements, including the wrapper container.
     */
    elements: IBoardPageElement[];
    /**
     * Mapping from source draft element ids to generated board element ids.
     */
    elementIdMap: Record<string, string>;
    /**
     * Materialized wrapper bounds in board coordinates.
     */
    bounds: IBoardRect;
}
/**
 * Resolves the board-coordinate bounds for an import draft.
 *
 * Import preview and insertion code use this to fit the server/client returned elements before materialization. This is
 * not an FBoard facade mutation API; it only reads importer intermediate data.
 *
 * @example
 * ```ts
 * const shape = createBoardShapeElement({
 *   id: 'draft-outside',
 *   shapeType: 'rect',
 *   left: 260,
 *   top: 160,
 *   width: 120,
 *   height: 80,
 * });
 *
 * const bounds = resolveBoardImportDraftBounds({
 *   elements: [shape],
 *   bounds: { left: 0, top: 0, width: 100, height: 100 },
 * });
 *
 * console.log(bounds.width, bounds.height);
 * ```
 */
export declare function resolveBoardImportDraftBounds(draft: IBoardImportDraft): IBoardRect;
/**
 * Reports whether the importer-provided bounds were too small for the returned elements.
 *
 * Import UI code uses this to surface diagnostics before insertion. This is not an FBoard facade mutation API; it only
 * compares intermediate draft bounds with resolved element bounds.
 *
 * @example
 * ```ts
 * const shape = createBoardShapeElement({
 *   id: 'draft-outside',
 *   shapeType: 'rect',
 *   left: 260,
 *   top: 160,
 *   width: 120,
 *   height: 80,
 * });
 *
 * const expanded = isBoardImportDraftBoundsExpanded({
 *   elements: [shape],
 *   bounds: { left: 0, top: 0, width: 100, height: 100 },
 * });
 *
 * console.log(expanded);
 * ```
 */
export declare function isBoardImportDraftBoundsExpanded(draft: IBoardImportDraft): boolean;
/**
 * Converts an import draft into real board elements wrapped by a container.
 *
 * This helper is used by import pipeline code before dispatching `AddBoardElementsOperation`. It remaps draft ids to
 * generated board element ids and offsets coordinates into the requested insertion position. This is not an FBoard
 * facade mutation API; callers still need to dispatch the returned elements through the command layer.
 *
 * @example
 * ```ts
 * const start = createBoardShapeElement({
 *   id: 'draft-start',
 *   shapeType: 'rect',
 *   left: 0,
 *   top: 0,
 *   width: 160,
 *   height: 64,
 * });
 *
 * const result = materializeBoardImportDraft({
 *   draft: {
 *     sourceType: 'mermaid',
 *     title: 'Course Flow',
 *     elements: [start],
 *   },
 *   containerName: 'Imported Course Flow',
 *   position: { left: 400, top: 240 },
 *   createId: (sourceId) => `real-${sourceId}`,
 * });
 *
 * console.log(result.containerId, result.elementIdMap['draft-start']);
 * ```
 */
export declare function materializeBoardImportDraft(options: IMaterializeBoardImportDraftOptions): IMaterializeBoardImportDraftResult;
