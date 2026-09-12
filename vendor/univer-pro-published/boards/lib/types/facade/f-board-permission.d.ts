import type { BoardUnitPermissionAction } from '@univerjs-pro/boards';
import type { ICommandService, IPermissionService } from '@univerjs/core';
/**
 * Command-backed permissions for one Board unit.
 * @hideconstructor
 */
export declare class FBoardPermission {
    private readonly _unitId;
    private readonly _commandService;
    private readonly _permissionService;
    constructor(_unitId: string, _commandService: ICommandService, _permissionService: IPermissionService);
    /**
     * Sets one Board unit permission through the command system.
     *
     * Supported actions are Edit, Copy, Print, Export, and Comment.
     * @param {BoardUnitPermissionAction} action Unit permission action to update.
     * @param {boolean} value Whether the action is allowed.
     * @returns {Promise<void>} Resolves after the permission command finishes.
     * @example
     * ```ts
     * import { UnitAction } from '@univerjs/protocol';
     *
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active Board.');
     * await board.getPermission().setPoint(UnitAction.Copy, false);
     * ```
     */
    setPoint(action: BoardUnitPermissionAction, value: boolean): Promise<void>;
    /**
     * Returns the current value of one Board unit permission.
     * @param {BoardUnitPermissionAction} action Unit permission action to query.
     * @returns {boolean} Whether the action is currently allowed.
     * @example
     * ```ts
     * import { UnitAction } from '@univerjs/protocol';
     *
     * const board = univerAPI.getActiveBoard();
     * console.log(board?.getPermission().getPoint(UnitAction.Print));
     * ```
     */
    getPoint(action: BoardUnitPermissionAction): boolean;
    /**
     * Enables or disables editing for the whole Board.
     * @param {boolean} [editable] Whether editing is allowed. Defaults to true.
     * @returns {Promise<void>} Resolves after the permission command finishes.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active Board.');
     * await board.getPermission().setEditable();
     * ```
     */
    setEditable(editable?: boolean): Promise<void>;
    /**
     * Makes the whole Board read-only.
     * @returns {Promise<void>} Resolves after the permission command finishes.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active Board.');
     * await board.getPermission().setReadOnly();
     * ```
     */
    setReadOnly(): Promise<void>;
    /**
     * Returns whether the whole Board is currently editable.
     * @returns {boolean} Whether Board editing is allowed.
     */
    canEdit(): boolean;
}
/**
 * Command-backed Edit permission for one stable Board element.
 * @hideconstructor
 */
export declare class FBoardElementPermission {
    private readonly _unitId;
    private readonly _objectId;
    private readonly _commandService;
    private readonly _permissionService;
    constructor(_unitId: string, _objectId: string, _commandService: ICommandService, _permissionService: IPermissionService);
    /**
     * Enables or disables editing for one stable Board element.
     * @param {boolean} [editable] Whether element editing is allowed. Defaults to true.
     * @returns {Promise<void>} Resolves after the permission command finishes.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active Board.');
     * const element = Object.values(board.getElements())[0];
     * if (!element) throw new Error('Board element not found.');
     * await board.getElementPermission(element.id).setEditable();
     * ```
     */
    setEditable(editable?: boolean): Promise<void>;
    /**
     * Makes this Board element read-only.
     * @returns {Promise<void>} Resolves after the permission command finishes.
     */
    setReadOnly(): Promise<void>;
    /**
     * Returns the effective Edit result after applying the Board unit and element permissions.
     * @returns {boolean} Whether the element is currently editable.
     */
    canEdit(): boolean;
}
