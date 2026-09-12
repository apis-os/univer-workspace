import type { EmbedFloatingStage, IEmbedFloatingActivation } from '../types/embed-ui';
export declare class EmbedFloatingActiveService {
    private readonly _active$;
    readonly active$: import("rxjs").Observable<IEmbedFloatingActivation | null>;
    getActive(): IEmbedFloatingActivation | null;
    getStage(embedId: string): EmbedFloatingStage;
    activate(next: IEmbedFloatingActivation, stage?: Exclude<EmbedFloatingStage, 'inactive'>): void;
    setStage(embedId: string, stage: Exclude<EmbedFloatingStage, 'inactive'>): void;
    promote(embedId: string): void;
    clear(embedId?: string): void;
}
