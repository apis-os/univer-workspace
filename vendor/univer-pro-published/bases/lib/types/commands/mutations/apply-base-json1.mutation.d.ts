import type { BaseViewType, IMutation, JSONXActions } from '@univerjs/core';
import type { BaseEventSource, IBaseHierarchyChange } from '../../models/base-hierarchy';
export declare enum BaseHistoryAction {
    CreateView = "create-view",
    DeleteView = "delete-view"
}
export interface IApplyBaseJson1MutationParams {
    unitId: string;
    op: JSONXActions;
    trigger?: string;
    /** Semantic metadata consumed by optional SDK events; JSON1 remains the source of truth. */
    hierarchyChanges?: IBaseHierarchyChange[];
    historyAction?: BaseHistoryAction;
    viewType?: BaseViewType;
    source?: BaseEventSource;
}
export declare const ApplyBaseJson1Mutation: IMutation<IApplyBaseJson1MutationParams>;
