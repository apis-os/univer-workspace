import type { Injector } from '@univerjs/core';
import { LiveShareStatus } from '@univerjs-pro/live-share';
import { FUniver } from '@univerjs/core/facade';
/**
 * @ignore
 */
interface IFUniverLiveShareMixin {
    /**
     * Get the current live share status.
     */
    getLiveShareStatus(): LiveShareStatus;
    /**
     * Connect to server and start following.
     */
    startFollowing(): void;
    /**
     * Stop following.
     */
    stopFollowing(): void;
    /**
     * Start presenting.
     */
    startPresenting(): void;
    /**
     * Stop presenting.
     */
    stopPresenting(): void;
}
export declare class FUniverLiveShareMixin extends FUniver implements IFUniverLiveShareMixin {
    private _liveShareController;
    _initialize(injector: Injector): void;
    getLiveShareStatus(): LiveShareStatus;
    startFollowing(): void;
    stopFollowing(): void;
    startPresenting(): void;
    stopPresenting(): void;
}
declare module '@univerjs/core/facade' {
    interface FUniver extends IFUniverLiveShareMixin {
    }
}
export {};
