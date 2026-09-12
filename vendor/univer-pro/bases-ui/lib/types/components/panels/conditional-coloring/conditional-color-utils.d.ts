import type { BaseConditionalColorOperator, BaseConditionalColorTarget, BaseConditionalDateMode, IBaseConditionalColorRule, LocaleService } from '@univerjs/core';
import type { LocaleKey } from '../../../locale/types';
import type { IBaseMenuFieldItem } from '../field-config/field-config-model';
export declare const BASE_CONDITIONAL_COLORING_MENU_MIN_WIDTH = 640;
export declare const BASE_CONDITIONAL_COLORING_MENU_MAX_WIDTH = 860;
export declare const CONDITIONAL_DATE_MODE_OPTIONS: Array<{
    value: BaseConditionalDateMode;
    label: LocaleKey;
}>;
export declare function getConditionalColorTargetOptions(localeService: LocaleService, allowedTargets?: readonly BaseConditionalColorTarget[]): ({
    value: "cell";
    label: string;
} | {
    value: "row";
    label: string;
} | {
    value: "column";
    label: string;
})[];
export declare function getConditionalRuleLayout(rule: IBaseConditionalColorRule, fields: IBaseMenuFieldItem[], localeService: LocaleService): {
    field: IBaseMenuFieldItem;
    isColumnTarget: boolean;
    needsOperand: boolean;
    isDate: boolean;
    isCheckbox: boolean;
    targetWidth: number;
    fieldWidth: number;
    operatorWidth: number;
    dateModeWidth: number;
    operandWidth: number;
    rowWidth: number;
};
export declare function findConditionalRuleDropTarget(element: Element | null, pointerY: number, movingId: string): {
    id: string;
    placeAfter: boolean;
} | null;
export declare function getConditionalPanelWidth(rules: IBaseConditionalColorRule[], fields: IBaseMenuFieldItem[], localeService: LocaleService): number;
export declare function conditionalOperatorsForField(field?: IBaseMenuFieldItem): BaseConditionalColorOperator[];
export declare function createConditionalRule(field?: IBaseMenuFieldItem, index?: number, target?: BaseConditionalColorTarget): IBaseConditionalColorRule;
export declare function ensureConditionalRuleForField(rule: IBaseConditionalColorRule, field?: IBaseMenuFieldItem): IBaseConditionalColorRule;
export declare function reorderConditionalRules(rules: IBaseConditionalColorRule[], movingId: string, targetId: string, placeAfterTarget: boolean): IBaseConditionalColorRule[];
export declare function defaultConditionalOperand(field?: IBaseMenuFieldItem): unknown;
export declare function normalizeHexColor(color: string): string;
