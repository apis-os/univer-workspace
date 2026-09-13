import type { IHistoryVersion } from '@univerjs-pro/edit-history';
import type { Nullable } from '@univerjs/core';
import { LocaleService } from '@univerjs/core';
interface IHistoryVersionListProps {
    versions: IHistoryVersion[];
    currentVersion: IHistoryVersion | null;
    loading: boolean;
    onLoadDetails: (versionId: string) => Promise<IHistoryVersion[]>;
    onSelectVersion: (version: IHistoryVersion) => void;
    onError: (error: unknown) => void;
}
interface IHistoryDateGroup {
    date: string;
    versions: IHistoryVersion[];
}
export declare function HistoryVersionList(props: IHistoryVersionListProps): import("react").JSX.Element | import("react").JSX.Element[];
export declare function groupVersionsByDate(versions: IHistoryVersion[]): IHistoryDateGroup[];
export declare function formatHistoryDay(date: string, localeService: LocaleService): string;
export declare function formatHistoryTime(time: Nullable<number>, localeService: LocaleService): string;
export {};
