import type { IPreparedUnitComparison, IUnitComparisonInput, IUnitComparisonQuery, IUnitComparisonResult } from './types';
import type { IUnitComparisonAdapter } from './unit-comparison-adapter-registry.service';
/** Public, injector-free semantic comparison runtime for headless and server applications. */
export interface IUnitComparisonEngine {
    /** Runs the selected product adapter and applies the optional query in one call. */
    compare(input: IUnitComparisonInput): IUnitComparisonResult;
    /** Runs the selected product adapter once and retains an owned prepared result for later queries. */
    prepare(input: Omit<IUnitComparisonInput, 'query'>): IPreparedUnitComparison;
    /** Filters and pages a prepared result without rerunning the product comparison algorithm. */
    query(prepared: IPreparedUnitComparison, query?: IUnitComparisonQuery): IUnitComparisonResult;
}
/**
 * Creates a semantic Unit comparison runtime without constructing a Univer instance or accessing its injector.
 *
 * Applications choose the products they support by passing the corresponding public History adapters. The engine
 * owns adapter selection and comparison orchestration; callers only provide materialized snapshots and queries.
 *
 * @param adapters - Product History adapters to make available in this runtime. Only one adapter per Unit type is allowed.
 * @returns An isolated comparison runtime suitable for Node.js, servers, CLIs, workers, and tests.
 * @throws If more than one adapter is provided for the same Unit type, or an input uses an unregistered Unit type.
 *
 * @example
 * ```ts
 * import { DocsUnitComparisonAdapter } from '@univerjs-pro/docs-history';
 * import {
 *     createUnitComparisonEngine,
 *     UnitComparisonFidelity,
 * } from '@univerjs-pro/edit-history';
 * import { UniverInstanceType } from '@univerjs/core';
 *
 * const comparison = createUnitComparisonEngine([
 *     new DocsUnitComparisonAdapter(),
 * ]);
 * const prepared = comparison.prepare({
 *     comparisonId: 'review-42',
 *     unitId: 'doc-1',
 *     type: UniverInstanceType.UNIVER_DOC,
 *     fidelity: UnitComparisonFidelity.SNAPSHOT,
 *     leftData: { body: {
 *         dataStream: 'Review\r\n', paragraphs: [{ paragraphId: 'p1', startIndex: 6 }],
 *     } },
 *     rightData: { body: {
 *         dataStream: 'Publish\r\n', paragraphs: [{ paragraphId: 'p1', startIndex: 7 }],
 *     } },
 * });
 * const result = comparison.query(prepared, { offset: 0, limit: 20 });
 * console.log(result.summary, result.items);
 * ```
 */
export declare function createUnitComparisonEngine(adapters: readonly IUnitComparisonAdapter[]): IUnitComparisonEngine;
/** Runs one product adapter over an owned copy. Internal shared boundary for the DI service and public engine. */
export declare function prepareUnitComparison(input: Omit<IUnitComparisonInput, 'query'>, adapter: IUnitComparisonAdapter): IPreparedUnitComparison;
/** Applies filtering, projection, and pagination to a prepared comparison without rerunning its adapter. */
export declare function queryPreparedUnitComparison(prepared: IPreparedUnitComparison, query?: IUnitComparisonQuery): IUnitComparisonResult;
