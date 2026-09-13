import type { ICommand } from '@univerjs/core';
import type { IBoardRect } from '../../utils/board-container-transform.util';
import type { IBoardImportDraft, IMaterializeBoardImportDraftResult } from '../../utils/board-import-draft.util';
/**
 * Command params for inserting an importer draft into an existing board page.
 *
 * This is an import pipeline API, not an FBoard facade API for agents. Agent-facing board generation should use
 * semantic FBoard methods; UI import flows use this command after converting external syntax into an IBoardImportDraft.
 *
 * @example
 * ```ts
 * const shape = createBoardShapeElement({
 *   id: 'draft-start',
 *   shapeType: 'rect',
 *   left: 0,
 *   top: 0,
 *   width: 160,
 *   height: 64,
 * });
 *
 * const params: IInsertBoardDraftOperationParams = {
 *   unitId: 'board-unit-id',
 *   subUnitId: 'board-page-id',
 *   draft: {
 *     sourceType: 'mermaid',
 *     title: 'Course Flow',
 *     elements: [shape],
 *   },
 *   containerName: 'Imported Course Flow',
 *   position: { left: 400, top: 240 },
 * };
 *
 * console.log(params.draft.elements.length);
 * ```
 */
export interface IInsertBoardDraftOperationParams {
    /**
     * Target board unit id that receives the generated elements.
     */
    unitId: string;
    /**
     * Target board page id within the unit.
     */
    subUnitId: string;
    /**
     * Intermediate importer payload to materialize into real board elements.
     */
    draft: IBoardImportDraft;
    /**
     * Optional wrapper container title. When present, it overrides the draft title.
     */
    containerName?: string;
    /**
     * Board coordinates for the wrapper container's top-left corner.
     */
    position: Pick<IBoardRect, 'left' | 'top'>;
    /**
     * Optional z-order insertion index passed through to AddBoardElementsOperation.
     */
    insertIndex?: number;
}
/**
 * Result returned after materializeBoardImportDraft creates board elements and AddBoardElementsOperation inserts them.
 *
 * The shape mirrors IMaterializeBoardImportDraftResult so import UI callers can inspect the generated container,
 * inserted elements, and calculated bounds without re-reading the board snapshot.
 *
 * @example
 * ```ts
 * const shape = createBoardShapeElement({
 *   id: 'draft-start',
 *   shapeType: 'rect',
 *   left: 0,
 *   top: 0,
 *   width: 160,
 *   height: 64,
 * });
 *
 * const result: IInsertBoardDraftOperationResult = materializeBoardImportDraft({
 *   draft: { title: 'Course Flow', elements: [shape] },
 *   position: { left: 400, top: 240 },
 *   createId: (sourceId) => `real-${sourceId}`,
 * });
 *
 * console.log(result.containerId, result.elements.length);
 * ```
 */
export interface IInsertBoardDraftOperationResult extends IMaterializeBoardImportDraftResult {
}
/**
 * Inserts an import draft by materializing it and dispatching AddBoardElementsOperation.
 *
 * This command is part of the import pipeline, not an FBoard facade mutation API. It returns false when params are
 * missing, the draft has no elements, or the generated add-elements command fails.
 *
 * @example
 * ```ts
 * const shape = createBoardShapeElement({
 *   id: 'draft-start',
 *   shapeType: 'rect',
 *   left: 0,
 *   top: 0,
 *   width: 160,
 *   height: 64,
 * });
 *
 * const result = commandService.syncExecuteCommand<IInsertBoardDraftOperationResult | false>(
 *   InsertBoardDraftOperation.id,
 *   {
 *     unitId: 'board-unit-id',
 *     subUnitId: 'board-page-id',
 *     draft: { title: 'Course Flow', elements: [shape] },
 *     position: { left: 400, top: 240 },
 *   }
 * );
 *
 * if (!result) throw new Error('Cannot insert import draft');
 * console.log(result.containerId);
 * ```
 */
export declare const InsertBoardDraftOperation: ICommand<IInsertBoardDraftOperationParams, IInsertBoardDraftOperationResult | false>;
