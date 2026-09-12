import type { EmbedHostAnchorModelService, IEmbedHostAdapterContribution } from '@univerjs-pro/embed';
import type { ISlideEmbedRuntimeService } from '@univerjs-pro/slides-ui';
import type { IUniverInstanceService } from '@univerjs/core';
import type { IEmbedHostContainerContribution } from '../../types/embed-ui';
export declare function createSlidesPageListBlockUIHostAdapterContribution(anchorModelService?: EmbedHostAnchorModelService, univerInstanceService?: IUniverInstanceService, embedRuntimeService?: ISlideEmbedRuntimeService): IEmbedHostAdapterContribution;
export declare function createSlidesFloatingObjectHostContainerContribution(): IEmbedHostContainerContribution;
export declare function createSlidesPageListBlockHostContainerContribution(): IEmbedHostContainerContribution;
