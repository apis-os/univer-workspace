import type { BaseConditionalColorTarget, IBaseConditionalColorRule } from '@univerjs/core';
import type { IBaseMenuFieldItem } from '../field-config/field-config-model';
export interface IConditionalColorAnchor {
    left: number;
    top: number;
    height: number;
}
export interface IConditionalColorRuleRowProps {
    fields: IBaseMenuFieldItem[];
    rule: IBaseConditionalColorRule;
    allowedTargets?: readonly BaseConditionalColorTarget[];
    colorPickerOpen: boolean;
    colorPickerAnchor: IConditionalColorAnchor | null;
    dragging: boolean;
    dropPosition: 'before' | 'after' | null;
    onColorPickerOpenChange: (open: boolean, anchor?: IConditionalColorAnchor) => void;
    onChange: (patch: Partial<IBaseConditionalColorRule>, options?: {
        debounce?: boolean;
    }) => void;
    onRemove: () => void;
    onDragStart: () => void;
}
export declare function ConditionalColorRuleRow(props: IConditionalColorRuleRowProps): import("react").JSX.Element;
