import type { IBoardData } from '@univerjs-pro/boards';
import type { ICreateUnitOptions } from '@univerjs/core';
import { FUniver } from '@univerjs/core/facade';
import { FBoard } from './f-board';
/**
 * Board entry APIs mixed into `univerAPI`.
 *
 * Agent code should use these methods to find or create the current board facade before calling `FBoard` methods. The
 * returned `FBoard` instances expose id-first and batch APIs that route mutations through Univer commands.
 *
 */
export interface IFUniverBoardsMixin {
    /**
     * Creates a board unit and returns its facade.
     *
     * @param data Optional board snapshot fields such as `name`.
     * @param options Optional Univer unit creation options.
     * @returns A board facade for the created unit.
     * @example
     * ```ts
     * const board = univerAPI.createBoard({ name: 'Planning Board' });
     * console.log(board.getId());
     * ```
     */
    createBoard(data?: Partial<IBoardData>, options?: ICreateUnitOptions): FBoard;
    /**
     * Gets the active board facade.
     *
     * @returns The active board facade, or `null` when the current Univer unit is not a board.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     *
     * const descriptors = board.describeElements();
     * console.log(descriptors.length);
     * ```
     */
    getActiveBoard(): FBoard | null;
    /**
     * Gets a board facade by unit id.
     *
     * Use this when a board unit id comes from application state or a previous facade call. Prefer `getActiveBoard()`
     * when the target is the user's current board; agent plans should store generated element ids, not generated unit ids.
     *
     * @param id Board unit id from application state or a previous facade call.
     * @returns The board facade, or `null` when no board unit exists for the id.
     * @example
     * ```ts
     * const activeBoard = univerAPI.getActiveBoard();
     * if (!activeBoard) throw new Error('No active board');
     * console.log(univerAPI.getBoard(activeBoard.getId()));
     * ```
     */
    getBoard(id: string): FBoard | null;
}
/**
 * Runtime mixin that adds board entry APIs to `FUniver`.
 *
 * Application code should call the mixed-in `univerAPI` methods after importing the facade module; it should not create
 * this class directly.
 *
 * @example
 * ```ts
 * const board = univerAPI.getActiveBoard() ?? univerAPI.createBoard({ name: 'Agent Board' });
 *
 * const descriptors = board.describeElements();
 * console.log(descriptors.length);
 * ```
 */
export declare class FUniverBoardsMixin extends FUniver implements IFUniverBoardsMixin {
    /**
     * Creates a board unit and returns its facade.
     *
     * Use this when an agent needs a new board before generating diagram content. For existing documents, prefer
     * `getActiveBoard()` so the agent edits the board the user is viewing.
     *
     * @param data Optional board snapshot fields such as `name`.
     * @param options Optional Univer unit creation options.
     * @returns A board facade for the created unit.
     * @example
     * ```ts
     * const board = univerAPI.createBoard({ name: 'Planning Board' });
     * console.log(board.getId());
     * ```
     */
    createBoard(data?: Partial<IBoardData>, options?: ICreateUnitOptions): FBoard;
    /**
     * Gets the active board facade.
     *
     * This is the recommended entry point for agent scripts running inside an existing board. It avoids guessing unit ids
     * and lets the agent operate on the same board the user has open.
     *
     * @returns The active board facade, or `null` when the current Univer unit is not a board.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     *
     * const descriptors = board.describeElements();
     * console.log(descriptors.length);
     * ```
     */
    getActiveBoard(): FBoard | null;
    /**
     * Gets a board facade by unit id.
     *
     * Use this when the agent received a board unit id from application state or a previous facade call. Prefer
     * `getActiveBoard()` when the target is simply the user's current board. Agent plans should store generated element ids,
     * not generated unit ids.
     *
     * @param id Board unit id from application state or a previous facade call.
     * @returns The board facade, or `null` when no board unit exists for the id.
     * @example
     * ```ts
     * const activeBoard = univerAPI.getActiveBoard();
     * if (!activeBoard) throw new Error('No active board');
     * console.log(univerAPI.getBoard(activeBoard.getId()));
     * ```
     */
    getBoard(id: string): FBoard | null;
}
declare module '@univerjs/core/facade' {
    interface FUniver extends IFUniverBoardsMixin {
    }
}
