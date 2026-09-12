import type { IBaseSnapshot, ICreateUnitOptions } from '@univerjs/core';
import { FUniver } from '@univerjs/core/facade';
import { FBase } from './f-base';
export interface IFUniverBaseMixin {
    /**
     * Create a new Base unit with the given snapshot and options.
     * @param {Partial<IBaseSnapshot>} snapshot The persisted Base model snapshot.
     * @param {ICreateUnitOptions} [options] Options for creating the unit.
     * @returns {FBase} The Base facade API instance.
     * @example
     * ```ts
     * const fBase = univerAPI.createBase({
     *   id: 'base-1',
     *   name: 'Roadmap'
     * });
     * console.log(fBase);
     * ```
     */
    createBase(snapshot?: Partial<IBaseSnapshot>, options?: ICreateUnitOptions): FBase;
    /**
     * Get the currently active Base unit.
     * @returns {FBase | null} The active Base facade, or `null` if no Base is active.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * console.log(fBase);
     * ```
     */
    getActiveBase(): FBase | null;
    /**
     * Get a Base unit by id.
     * @param {string} baseId The id of the Base unit to retrieve.
     * @returns {FBase | null} The Base facade, or `null` if the unit does not exist or is not a Base unit.
     * @example
     * ```ts
     * const fBase = univerAPI.getBase('base-1');
     * console.log(fBase);
     * ```
     */
    getBase(baseId: string): FBase | null;
    /**
     * Get all Base units in the current Univer instance.
     * @returns {FBase[]} An array of Base facade instances.
     * @example
     * ```ts
     * const fBases = univerAPI.getBases();
     * const snapshots = fBases.map((fBase) => fBase.save());
     * console.log(snapshots);
     * ```
     */
    getBases(): FBase[];
}
export declare class FUniverBaseMixin extends FUniver implements IFUniverBaseMixin {
    _initialize(): void;
    createBase(snapshot?: Partial<IBaseSnapshot>, options?: ICreateUnitOptions): FBase;
    getActiveBase(): FBase | null;
    getBase(baseId: string): FBase | null;
    getBases(): FBase[];
    private _initBaseAfterEvents;
    private _initBaseBeforeEvents;
    private _getHierarchyEventContext;
    private _fireBeforeHierarchyChange;
}
declare module '@univerjs/core/facade' {
    interface FUniver extends IFUniverBaseMixin {
    }
}
