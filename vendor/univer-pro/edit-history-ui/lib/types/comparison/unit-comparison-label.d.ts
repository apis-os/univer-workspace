import type enUS from '../locale/en-US';
import type { LocaleKey } from '../locale/types';
import { UnitComparisonEntityType } from '@univerjs-pro/edit-history';
/** Comparison vocabulary owned by edit-history-ui. */
export type UnitComparisonTerm = keyof (typeof enUS)['edit-history-ui']['comparison'];
/** A standard edit-history-ui locale key for one comparison term. */
export type UnitComparisonLocaleKey = Extract<LocaleKey, `edit-history-ui.comparison.${string}`>;
/** Stable presentation metadata. Callers translate it with LocaleService at the rendering boundary. */
export interface IUnitComparisonLabelDescriptor {
    readonly key: UnitComparisonLocaleKey;
    readonly args?: readonly string[];
}
/** Returns the standard locale key for an SDK-owned comparison term. */
export declare function unitComparisonLocaleKey(term: UnitComparisonTerm): UnitComparisonLocaleKey;
/** Resolves every built-in semantic entity type to a human-readable locale descriptor. */
export declare function getUnitComparisonEntityLabel(entityType: UnitComparisonEntityType | string): IUnitComparisonLabelDescriptor;
/** Resolves a semantic property path to independently translatable breadcrumb segments. */
export declare function getUnitComparisonPathLabels(path: readonly string[]): readonly IUnitComparisonLabelDescriptor[];
/** Resolves a schema-owned before/after value without translating user content. */
export declare function getUnitComparisonValueLabel(entityType: UnitComparisonEntityType | string, path: readonly string[], value: unknown): IUnitComparisonLabelDescriptor | undefined;
