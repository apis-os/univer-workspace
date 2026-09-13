import type { EmbedFloatingStage, IEmbedFloatingActivation } from '../../types/embed-ui';
export declare function resolveSlidesFloatingMenuStage(params: {
    embedId: string;
    active: IEmbedFloatingActivation | null;
    fullscreen?: boolean;
    usesDomFloatingStage?: boolean;
    renderScopeActive?: boolean;
}): EmbedFloatingStage;
