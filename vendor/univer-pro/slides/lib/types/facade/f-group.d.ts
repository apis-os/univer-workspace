import type { ISlideGroupElement, SlideModel } from '@univerjs-pro/slides';
import type { Injector } from '@univerjs/core';
import type { FSlidePageElement } from './f-slide';
import { ICommandService, IPermissionService } from '@univerjs/core';
import { FPageElement } from './f-page-element';
/**
 * The facade class for a slide group element.
 * @hideconstructor
 */
export declare class FGroup extends FPageElement<ISlideGroupElement> {
    constructor(unitId: string, subUnitId: string, elementId: string, slideModel: SlideModel, injector: Injector, commandService: ICommandService, permissionService: IPermissionService);
    /**
     * Get the direct children of this group.
     * @returns {FSlidePageElement[]} The direct child elements in group order.
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * const groups = fSlide.getGroups();
     * console.log(groups[0]?.getChildren());
     * ```
     */
    getChildren(): FSlidePageElement[];
    /**
     * Ungroup this group and return the released child element facades.
     * @returns {FSlidePageElement[]} The direct child elements that were released.
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const group = fSlide.getGroups()[0];
     * if (group) {
     *   group.ungroup();
     * }
     * ```
     */
    ungroup(): FSlidePageElement[];
    private _createChildElement;
}
