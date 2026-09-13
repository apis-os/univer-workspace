import type { IBaseConditionalColorRule, ICommand } from '@univerjs/core';
/** Operations supported by {@link UpdateBaseViewConditionalColorRulesCommand}. */
export declare enum BaseConditionalColorRuleUpdateType {
    Set = "set",
    Add = "add",
    Delete = "delete",
    Clear = "clear"
}
interface IBaseConditionalColorRuleCommandTarget {
    unitId: string;
    tableId: string;
    viewId: string;
}
/** Parameters for updating one view's ordered conditional coloring rules. */
export type IUpdateBaseViewConditionalColorRulesCommandParams = IBaseConditionalColorRuleCommandTarget & ({
    type: BaseConditionalColorRuleUpdateType.Set;
    rules: IBaseConditionalColorRule[];
} | {
    type: BaseConditionalColorRuleUpdateType.Add;
    rule: IBaseConditionalColorRule;
} | {
    type: BaseConditionalColorRuleUpdateType.Delete;
    ruleId: string;
} | {
    type: BaseConditionalColorRuleUpdateType.Clear;
});
/**
 * Update Base conditional coloring through a JSON1 mutation with undo/redo.
 * Invalid rules are rejected before the mutation is executed.
 */
export declare const UpdateBaseViewConditionalColorRulesCommand: ICommand<IUpdateBaseViewConditionalColorRulesCommandParams>;
export {};
