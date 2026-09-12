import type { EmbedFloatingStage, IEmbedFloatingActivation, IEmbedFloatingMenuContribution } from '../../types/embed-ui';
export declare function createBoardsFloatingMenuContributions(): IEmbedFloatingMenuContribution[];
export declare function resolveBoardsFloatingMenuStage(params: {
    embedId: string;
    active: IEmbedFloatingActivation | null;
    fullscreen: boolean;
}): EmbedFloatingStage;
