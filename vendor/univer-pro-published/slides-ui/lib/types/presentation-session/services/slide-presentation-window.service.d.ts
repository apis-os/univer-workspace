import type { Observable } from 'rxjs';
import type { ISlidePresentationUrlParams } from '../protocol';
import { Disposable } from '@univerjs/core';
export interface ISlidePresentationScreenDetailed {
    left: number;
    top: number;
    width: number;
    height: number;
    availLeft?: number;
    availTop?: number;
    availWidth?: number;
    availHeight?: number;
}
export interface ISlidePresentationScreenDetails {
    currentScreen: ISlidePresentationScreenDetailed;
    screens: ISlidePresentationScreenDetailed[];
}
type SlidePresentationBrowserWindow = Window & {
    BroadcastChannel?: unknown;
    getScreenDetails?: () => Promise<ISlidePresentationScreenDetails>;
    open?: (url: string, target: string, features: string) => Window | null;
};
export interface ISlidePresentationWindowRuntime {
    getWindow(): SlidePresentationBrowserWindow | null;
    getScreen(): ({
        isExtended?: boolean;
    } & Screen) | null;
    getLocationHref(): string;
}
export interface IOpenSlidePresentationAudienceWindowParams extends ISlidePresentationUrlParams {
    unitId: string;
    sessionId: string;
}
export interface ISlidePresentationWindowService {
    readonly canShowDualScreenEntry$: Observable<boolean>;
    getCanShowDualScreenEntrySnapshot(): boolean;
    refreshAvailability(): void;
    buildAudienceUrl(params: IOpenSlidePresentationAudienceWindowParams): string;
    openAudienceWindow(params: IOpenSlidePresentationAudienceWindowParams): Promise<Window | null>;
    closeAudienceWindow(audienceWindow: Window | null | undefined): void;
}
export declare const ISlidePresentationWindowService: import("@wendellhu/redi").IdentifierDecorator<ISlidePresentationWindowService>;
export declare class SlidePresentationWindowService extends Disposable implements ISlidePresentationWindowService {
    private readonly _runtime;
    private readonly _canShowDualScreenEntry$;
    readonly canShowDualScreenEntry$: Observable<boolean>;
    constructor(_runtime?: ISlidePresentationWindowRuntime);
    dispose(): void;
    getCanShowDualScreenEntrySnapshot(): boolean;
    refreshAvailability(): void;
    buildAudienceUrl(params: IOpenSlidePresentationAudienceWindowParams): string;
    openAudienceWindow(params: IOpenSlidePresentationAudienceWindowParams): Promise<Window | null>;
    closeAudienceWindow(audienceWindow: Window | null | undefined): void;
}
export {};
