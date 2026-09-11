import type { IHistoryVersion } from '../services/history-fetch.service';
export interface IVersionWitDate {
    versions: IHistoryVersion[];
    dateString: string;
    startDateString: string;
    endDateString: string;
}
export declare function VersionListPanel(): import("react").JSX.Element;
export declare function Empty(): import("react").JSX.Element;
export declare function VersionDate(props: {
    date: string;
    startDate?: string;
    endDate?: string;
}): import("react").JSX.Element;
export declare function VersionItem(props: {
    item: IHistoryVersion;
    onToggleExpand?: (version: IHistoryVersion) => Promise<void>;
    isExpanded?: boolean;
    isLoadingDetail?: boolean;
    isDetail?: boolean;
}): import("react").JSX.Element;
