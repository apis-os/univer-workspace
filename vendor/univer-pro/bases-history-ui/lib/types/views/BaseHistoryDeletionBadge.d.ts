import type { IPopupWithExtraProps } from '@univerjs/ui';
export declare const BASE_HISTORY_DELETION_BADGE_COMPONENT = "BASE_HISTORY_DELETION_BADGE";
export interface IBaseHistoryDeletionBadgeExtraProps {
    [key: string]: unknown;
    count: number;
    labels: string[];
}
interface IBaseHistoryDeletionBadgeProps {
    popup: IPopupWithExtraProps<IBaseHistoryDeletionBadgeExtraProps>;
}
export declare function BaseHistoryDeletionBadge({ popup }: IBaseHistoryDeletionBadgeProps): import("react").JSX.Element;
export {};
