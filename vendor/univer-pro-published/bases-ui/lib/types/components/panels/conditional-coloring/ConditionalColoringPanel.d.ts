import type { BaseConditionalColorTarget, IBaseConditionalColorRule } from '@univerjs/core';
import type { IBaseMenuFieldItem } from '../../panels/field-config/field-config-model';
export declare function ConditionalColoringPanel(props: {
    fields?: IBaseMenuFieldItem[];
    rules?: IBaseConditionalColorRule[];
    allowedTargets?: readonly BaseConditionalColorTarget[];
    activeValue?: string;
    onApply?: (value: string) => void;
    onApplyRules?: (rules: IBaseConditionalColorRule[]) => void;
    onClear: () => void;
}): import("react").JSX.Element;
