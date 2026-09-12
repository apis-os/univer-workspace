import type { IEmbedDescriptor, IEmbedLayoutPolicy } from '@univerjs-pro/embed';
import type { IEmbedHostMenuOverride } from '../types/embed-ui';
export interface IEmbedHostMenuOverrideActivateOptions {
    layoutPolicy?: IEmbedLayoutPolicy;
    allowPlaceholder?: boolean;
    allowHiddenRibbon?: boolean;
    portalContainer?: HTMLElement | null;
}
export declare class EmbedHostMenuOverrideService {
    private readonly _override$;
    readonly override$: import("rxjs").Observable<IEmbedHostMenuOverride | null>;
    getOverride(): IEmbedHostMenuOverride | null;
    activate(descriptor: IEmbedDescriptor, reason: IEmbedHostMenuOverride['reason'], options?: IEmbedHostMenuOverrideActivateOptions): IEmbedHostMenuOverride | null;
    clear(embedId?: string): void;
}
