import type { BaseUnitPermissionAction } from '@univerjs-pro/bases';
import type { ICommandService, IPermissionService } from '@univerjs/core';
/**
 * Command-backed permissions for one Base unit.
 * @hideconstructor
 */
export declare class FBasePermission {
    private readonly _unitId;
    private readonly _commandService;
    private readonly _permissionService;
    constructor(_unitId: string, _commandService: ICommandService, _permissionService: IPermissionService);
    /**
     * Sets one Base unit permission through the command system.
     *
     * Supported actions are Edit, Copy, Export, and Comment. Await the returned promise before
     * reading the new value or performing an action that depends on it.
     *
     * @param {BaseUnitPermissionAction} action Unit permission action to update.
     * @param {boolean} value Whether the action is allowed.
     * @returns {Promise<void>} Resolves after the permission command finishes.
     * @example Disable copying while keeping the Base editable
     * ```ts
     * import { UnitAction } from '@univerjs/protocol';
     *
     * const base = univerAPI.getActiveBase();
     * if (!base) throw new Error('No active Base.');
     * await base.getPermission().setPoint(UnitAction.Copy, false);
     * ```
     */
    setPoint(action: BaseUnitPermissionAction, value: boolean): Promise<void>;
    /**
     * Returns the current value of one Base unit permission.
     * @param {BaseUnitPermissionAction} action Unit permission action to query.
     * @returns {boolean} Whether the action is currently allowed.
     * @example
     * ```ts
     * import { UnitAction } from '@univerjs/protocol';
     *
     * const base = univerAPI.getActiveBase();
     * const canExport = base?.getPermission().getPoint(UnitAction.Export) ?? false;
     * console.log(canExport);
     * ```
     */
    getPoint(action: BaseUnitPermissionAction): boolean;
    /**
     * Enables or disables editing for the whole Base.
     * @param {boolean} [editable] Whether editing is allowed. Defaults to true.
     * @returns {Promise<void>} Resolves after the permission command finishes.
     * @example
     * ```ts
     * const base = univerAPI.getActiveBase();
     * if (!base) throw new Error('No active Base.');
     * await base.getPermission().setEditable();
     * ```
     */
    setEditable(editable?: boolean): Promise<void>;
    /**
     * Makes the whole Base read-only.
     * @returns {Promise<void>} Resolves after the permission command finishes.
     * @example
     * ```ts
     * const base = univerAPI.getActiveBase();
     * if (!base) throw new Error('No active Base.');
     * await base.getPermission().setReadOnly();
     * ```
     */
    setReadOnly(): Promise<void>;
    /**
     * Returns whether the whole Base is currently editable.
     * @returns {boolean} Whether Base editing is allowed.
     */
    canEdit(): boolean;
}
/**
 * Command-backed Edit permission for one stable Base object.
 * @hideconstructor
 */
export declare class FBaseObjectPermission {
    private readonly _unitId;
    private readonly _objectId;
    private readonly _parentObjectIds;
    private readonly _commandService;
    private readonly _permissionService;
    constructor(_unitId: string, _objectId: string, _parentObjectIds: string[], _commandService: ICommandService, _permissionService: IPermissionService);
    /**
     * Enables or disables editing for this stable Base object.
     *
     * This changes only the object's Edit point. `canEdit()` also applies the Base unit and parent
     * object ceilings, so enabling a child does not override a read-only Base or parent Table.
     *
     * @param {boolean} [editable] Whether object editing is allowed. Defaults to true.
     * @returns {Promise<void>} Resolves after the permission command finishes.
     * @example Restore editing for a table
     * ```ts
     * const base = univerAPI.getActiveBase();
     * const table = base?.getTables()[0];
     * if (!table) throw new Error('Tasks table not found.');
     * await table.getPermission().setEditable();
     * ```
     */
    setEditable(editable?: boolean): Promise<void>;
    /**
     * Makes this stable Base object read-only.
     * @returns {Promise<void>} Resolves after the permission command finishes.
     * @example
     * ```ts
     * const table = univerAPI.getActiveBase()?.getTables()[0];
     * if (!table) throw new Error('Table not found.');
     * await table.getPermission().setReadOnly();
     * ```
     */
    setReadOnly(): Promise<void>;
    /**
     * Returns the effective Edit result after applying the Base unit, parent objects, and this object.
     * @returns {boolean} Whether the object is currently editable.
     */
    canEdit(): boolean;
}
