import type { ISlideData } from '@univerjs-pro/slides';
import type { ICreateUnitOptions } from '@univerjs/core';
import type { FSlide } from './f-slide';
import { FUniver } from '@univerjs/core/facade';
import { FPresentation } from './f-presentation';
export interface IFUniverSlidesMixin {
    /**
     * Creates a new presentation unit.
     * @param {Partial<ISlideData>} [data] The initial presentation snapshot data.
     * @param {ICreateUnitOptions} [options] The unit creation options.
     * @returns {FPresentation} The created presentation facade.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.createPresentation({
     *   id: 'presentation-1',
     *   name: 'Quarterly Review',
     * });
     * console.log(fPresentation);
     * ```
     */
    createPresentation(data?: Partial<ISlideData>, options?: ICreateUnitOptions): FPresentation;
    /**
     * Get the active presentation.
     * @returns {FPresentation|null} The active presentation, or `null` if no presentation is active.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * console.log(fPresentation);
     * ```
     */
    getActivePresentation(): FPresentation | null;
    /**
     * Get a presentation by id.
     * @param {string} id The presentation id.
     * @returns {FPresentation|null} The presentation, or `null` if it does not exist.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getPresentation('presentation-1');
     * console.log(fPresentation);
     * ```
     */
    getPresentation(id: string): FPresentation | null;
    /**
     * Resolve the presentation and slide target from command params.
     * @param {{ unitId?: string; subUnitId?: string; slideId?: string }} params The command params containing `unitId`, `subUnitId`, or `slideId`.
     * @returns {{ presentation: FPresentation; slide: FSlide; unitId: string; subUnitId: string } | null} The resolved presentation, slide, unit id, and sub unit id, or `null`.
     *
     * @example
     * ```ts
     * univerAPI.addEvent(univerAPI.Event.CommandExecuted, (commandInfo) => {
     *   const target = univerAPI.getSlideCommandTarget(commandInfo.params);
     *   console.log(target);
     * });
     * ```
     */
    getSlideCommandTarget(params?: {
        unitId?: string;
        subUnitId?: string;
        slideId?: string;
    }): {
        presentation: FPresentation;
        slide: FSlide;
        unitId: string;
        subUnitId: string;
    } | null;
}
/**
 * The slide facade mixin on `FUniver`.
 * @ignore
 */
export declare class FUniverSlidesMixin extends FUniver implements IFUniverSlidesMixin {
    /** @inheritdoc */
    createPresentation(data?: Partial<ISlideData>, options?: ICreateUnitOptions): FPresentation;
    /** @inheritdoc */
    getActivePresentation(): FPresentation | null;
    /** @inheritdoc */
    getPresentation(id: string): FPresentation | null;
    /** @inheritdoc */
    getSlideCommandTarget(params?: {
        unitId?: string;
        subUnitId?: string;
        slideId?: string;
    }): {
        presentation: FPresentation;
        slide: FSlide;
        unitId: string;
        subUnitId: string;
    } | null;
}
declare module '@univerjs/core/facade' {
    interface FUniver extends IFUniverSlidesMixin {
    }
}
