import type { SlideUnitPermissionAction } from '@univerjs-pro/slides';
import type { ICommandService, IPermissionService } from '@univerjs/core';
/**
 * Command-backed permissions for one Presentation unit.
 * @hideconstructor
 */
export declare class FPresentationPermission {
    private readonly _unitId;
    private readonly _commandService;
    private readonly _permissionService;
    constructor(_unitId: string, _commandService: ICommandService, _permissionService: IPermissionService);
    /**
     * Sets one Presentation unit permission through the command system.
     *
     * Supported actions are Edit, Copy, Print, Export, and Comment.
     * @param {SlideUnitPermissionAction} action Unit permission action to update.
     * @param {boolean} value Whether the action is allowed.
     * @returns {Promise<void>} Resolves after the permission command finishes.
     * @example
     * ```ts
     * import { UnitAction } from '@univerjs/protocol';
     *
     * const presentation = univerAPI.getActivePresentation();
     * if (!presentation) throw new Error('No active Presentation.');
     * await presentation.getPermission().setPoint(UnitAction.Export, false);
     * ```
     */
    setPoint(action: SlideUnitPermissionAction, value: boolean): Promise<void>;
    /**
     * Returns the current value of one Presentation unit permission.
     * @param {SlideUnitPermissionAction} action Unit permission action to query.
     * @returns {boolean} Whether the action is currently allowed.
     * @example
     * ```ts
     * import { UnitAction } from '@univerjs/protocol';
     *
     * const presentation = univerAPI.getActivePresentation();
     * console.log(presentation?.getPermission().getPoint(UnitAction.Print));
     * ```
     */
    getPoint(action: SlideUnitPermissionAction): boolean;
    /**
     * Enables or disables editing for the whole Presentation.
     * @param {boolean} [editable] Whether editing is allowed. Defaults to true.
     * @returns {Promise<void>} Resolves after the permission command finishes.
     */
    setEditable(editable?: boolean): Promise<void>;
    /**
     * Makes the whole Presentation read-only.
     * @returns {Promise<void>} Resolves after the permission command finishes.
     * @example
     * ```ts
     * const presentation = univerAPI.getActivePresentation();
     * if (!presentation) throw new Error('No active Presentation.');
     * await presentation.getPermission().setReadOnly();
     * ```
     */
    setReadOnly(): Promise<void>;
    /**
     * Returns whether the whole Presentation is currently editable.
     * @returns {boolean} Whether Presentation editing is allowed.
     */
    canEdit(): boolean;
}
/**
 * Command-backed Edit permission for one stable Slide, Element, or Master object.
 * @hideconstructor
 */
export declare class FSlideObjectPermission {
    private readonly _unitId;
    private readonly _objectId;
    private readonly _parentObjectIds;
    private readonly _commandService;
    private readonly _permissionService;
    constructor(_unitId: string, _objectId: string, _parentObjectIds: string[], _commandService: ICommandService, _permissionService: IPermissionService);
    /**
     * Enables or disables editing for this Slide, Element, or Master object.
     *
     * `canEdit()` also applies the Presentation and parent object ceilings.
     * @param {boolean} [editable] Whether object editing is allowed. Defaults to true.
     * @returns {Promise<void>} Resolves after the permission command finishes.
     * @example
     * ```ts
     * const presentation = univerAPI.getActivePresentation();
     * const slide = presentation?.getSlideByIndex(0);
     * if (!slide) throw new Error('Slide not found.');
     * await slide.getPermission().setEditable();
     * ```
     */
    setEditable(editable?: boolean): Promise<void>;
    /**
     * Makes this Slide, Element, or Master object read-only.
     * @returns {Promise<void>} Resolves after the permission command finishes.
     */
    setReadOnly(): Promise<void>;
    /**
     * Returns the effective Edit result after applying the Presentation, parent, and object permissions.
     * @returns {boolean} Whether the object is currently editable.
     */
    canEdit(): boolean;
}
