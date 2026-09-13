import type { IBoardShapeElement } from '@univerjs-pro/boards';
import type { IBoardFacadeAddElementOptions } from '@univerjs-pro/boards/facade';
import type { IInkSourceModel, IInkStyle, InkToolType } from '@univerjs-pro/ink';
/**
 * Options for inserting a persistent Ink path into a Board.
 *
 * Ink coordinates are Board coordinates. The generated element bounds come from the supplied path model; callers do not
 * need to calculate `left`, `top`, `width`, or `height` separately.
 *
 */
export interface IBoardInkFacadeInsertOptions extends IBoardFacadeAddElementOptions {
    /** Ink geometry in Board coordinates. */
    model: IInkSourceModel;
    /** Optional visual style. Model defaults are used when omitted. */
    style?: IInkStyle;
    /**
     * Stored Ink tool. Use `univerAPI.Enum.BoardInkTool`; defaults to `model.kind`.
     */
    tool?: Exclude<InkToolType, 'eraser'>;
    /**
     * Optional original model retained for editing after a converted path is rendered.
     *
     * Most callers should omit this. It is useful when rendering one model while retaining another as the editable source.
     */
    sourceModel?: IInkSourceModel;
    /** Optional element id. A random id is generated when omitted. */
    id?: string;
    /** Optional parent container id for low-level integrations. */
    parentId?: string;
    /** Optional target swimlane lane id. */
    laneId?: string;
}
/**
 * Ink APIs mixed into `FBoard` by importing `@univerjs-pro/ink/facade`.
 *
 * @example
 * ```ts
 * const board = univerAPI.getActiveBoard();
 * if (!board) throw new Error('No active board');
 * console.log(board.getInks().length);
 * ```
 */
export interface IFBoardInkMixin {
    /**
     * Inserts one persistent Ink element through the normal Board command path.
     *
     * @param options Ink model, style, element id, and optional container placement.
     * @returns The inserted Board shape element, or `null` when validation or insertion fails.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const ink = board.insertInk({
     *   tool: univerAPI.Enum.BoardInkTool.Brush,
     *   model: {
     *     kind: 'brush',
     *     points: [{ x: 80, y: 80, t: 0 }, { x: 160, y: 120, t: 1 }, { x: 240, y: 90, t: 2 }],
     *     color: '#2563eb',
     *     width: 4,
     *     opacity: 1,
     *   },
     * });
     * if (!ink) throw new Error('Cannot insert ink');
     * ```
     */
    insertInk(options: IBoardInkFacadeInsertOptions): IBoardShapeElement | null;
    /**
     * Lists persistent Ink elements in Board z-order, including hidden or locked Ink.
     *
     * @returns Ink shape elements in Board z-order.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * console.log(board.getInks().length);
     * ```
     */
    getInks(): IBoardShapeElement[];
}
declare module '@univerjs-pro/boards/facade' {
    interface FBoard extends IFBoardInkMixin {
    }
}
