import { LiveShareStatus } from '@univerjs-pro/live-share';
/**
 * @ignore
 */
export interface IFLiveShareEnumMixin {
    /**
     * Get LiveShareStatus enum. {@link LiveShareStatus}
     */
    LiveShareStatusEnum: typeof LiveShareStatus;
}
/**
 * @ignore
 */
declare module '@univerjs/core/facade' {
    interface FEnum extends IFLiveShareEnumMixin {
    }
}
