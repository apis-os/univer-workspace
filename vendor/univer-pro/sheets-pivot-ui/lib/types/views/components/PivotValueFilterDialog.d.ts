import type { IPivotTableValueFilter } from '@univerjs-pro/engine-pivot';
import type { LocaleKey } from '../../locale/types';
import { ST_PivotFilterOperatorEnum } from '@univerjs-pro/engine-pivot';
export interface IPivotValueFilterFieldOption {
    id: string;
    label: string;
}
export interface IPivotValueFilterDraft {
    operator: ST_PivotFilterOperatorEnum;
    expected: number | [number, number];
    valueFieldId: string;
    isBottom?: boolean;
}
export interface IPivotValueFilterDialogProps {
    targetFieldId: string;
    targetFieldName: string;
    valueFields: IPivotValueFilterFieldOption[];
    defaultValueFieldId?: string;
    currentFilter?: IPivotTableValueFilter;
    onConfirm: (filter: IPivotValueFilterDraft) => Promise<void>;
    onClear: () => Promise<void>;
    onCancel: () => void;
}
type PivotValueFilterRuleId = 'equal' | 'notEqual' | 'greaterThan' | 'greaterThanOrEqual' | 'lessThan' | 'lessThanOrEqual' | 'between' | 'notBetween' | 'topCount' | 'bottomCount' | 'topPercent' | 'bottomPercent';
interface IPivotValueFilterRule {
    id: PivotValueFilterRuleId;
    localeKey: Extract<LocaleKey, `sheets-pivot-ui.valueFilter.${string}`>;
    operator: ST_PivotFilterOperatorEnum;
    isBottom?: boolean;
    isBetween?: boolean;
    isCount?: boolean;
    isPercent?: boolean;
}
export declare const PIVOT_VALUE_FILTER_RULES: IPivotValueFilterRule[];
export declare function PivotValueFilterDialog({ targetFieldId, targetFieldName, valueFields, defaultValueFieldId, currentFilter, onConfirm, onClear, onCancel, }: IPivotValueFilterDialogProps): import("react").JSX.Element;
export {};
