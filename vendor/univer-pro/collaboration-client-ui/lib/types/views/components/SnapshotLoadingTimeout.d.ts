import type { Observable } from 'rxjs';
export interface ISnapshotLoadingTimeoutState {
    unitId: string;
    content: string;
    refreshLabel: string;
}
interface IProps {
    state$: Observable<ISnapshotLoadingTimeoutState | null>;
}
export declare function SnapshotLoadingTimeout({ state$ }: IProps): import("react").JSX.Element | null;
export {};
