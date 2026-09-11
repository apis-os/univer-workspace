import type { IPreparedUnitComparison, IUnitComparisonInput, IUnitComparisonQuery, IUnitComparisonResult } from '@univerjs-pro/edit-history';
import { UnitComparisonService } from '@univerjs-pro/edit-history';
import { FUniver } from '@univerjs/core/facade';
/** A prepared semantic comparison that can be filtered and paged without rerunning product algorithms. */
export declare class FUnitComparison {
    private readonly _service;
    private readonly _prepared;
    constructor(_service: UnitComparisonService, _prepared: IPreparedUnitComparison);
    /**
     * Filters and pages this prepared comparison.
     *
     * Product views can be discovered from `query().scopes`, then passed back through `query.scope` to request
     * only the selected worksheet, slide, Base table, or Board page without rerunning the comparison algorithm.
     *
     * @param query - Optional scope, filters, result detail, and independent item/context pagination.
     * @returns A versioned, serializable comparison result.
     *
     * @example
     * ```ts
     * const comparison = univerAPI.prepareUnitComparison(input);
     * const overview = comparison.query({ detail: UnitComparisonDetailLevel.SUMMARY });
     * const firstScope = overview.scopes[0];
     * const items = firstScope === undefined
     *     ? overview.items
     *     : comparison.query({ scope: firstScope, limit: 1000 }).items;
     * ```
     */
    query(query?: IUnitComparisonQuery): IUnitComparisonResult;
}
/** @ignore */
export interface IFUniverEditHistoryMixin {
    /**
     * Compares two fully materialized UnitData snapshots with the semantic adapter registered for the unit type.
     *
     * Worktree resolution and mutation materialization must happen before this method is called. The result is
     * serializable and contains stable entity identities, locations, leaf changes, coverage, and diagnostics.
     * This is a read-only comparison, not a merge or a mutation replay operation. Register the corresponding
     * product History plugin, or register its headless comparison adapter as in the example below.
     * Product adapters compare semantic content, not byte-for-byte snapshot equality: editor selection/zoom,
     * mirrored Board storage aliases, and Base matrix indexes derived from entity order are not extra changes.
     *
     * Results default to 100 items with leaf changes and no full values. Use `query.offset`/`query.limit`
     * to page items and `query.contextOffset`/`query.contextLimit` to page Doc alignment independently.
     * For repeated queries over the same snapshots, use `prepareUnitComparison()` and call `query()` on its result.
     *
     * @param input - The two materialized states and optional result query.
     * @returns A versioned semantic comparison result suitable for UI and agent consumers.
     * @throws If the comparison service or an adapter for `input.type` has not been registered.
     *
     * @example See `createUnitComparisonEngine()` for an executable injector-free headless example. In a Univer
     * application, register the selected product History plugin and import `@univerjs-pro/edit-history/facade`
     * before creating the Facade API.
     */
    compareUnitData(input: IUnitComparisonInput): IUnitComparisonResult;
    /**
     * Prepares a semantic comparison once for repeated filtering and pagination.
     *
     * Register the selected product History plugin before calling this method. The returned Facade owns no editor
     * state and never mutates either snapshot.
     *
     * @param input - Two fully materialized UnitData snapshots and their comparison metadata.
     * @returns A prepared comparison Facade whose `query()` method does not rerun the product algorithm.
     */
    prepareUnitComparison(input: Omit<IUnitComparisonInput, 'query'>): FUnitComparison;
}
/** @ignore */
export declare class FUniverEditHistoryMixin extends FUniver implements IFUniverEditHistoryMixin {
    compareUnitData(input: IUnitComparisonInput): IUnitComparisonResult;
    prepareUnitComparison(input: Omit<IUnitComparisonInput, 'query'>): FUnitComparison;
}
declare module '@univerjs/core/facade' {
    interface FUniver extends IFUniverEditHistoryMixin {
    }
}
