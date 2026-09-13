import type { ISlideDrawingService } from '@univerjs-pro/slides';
import type { IUniverInstanceService } from '@univerjs/core';
import type { EmbedHostAnchorModelService } from '../../services/embed-host-anchor-model.service';
import type { IEmbedHostAdapterContribution } from '../../types/host-adapter';
type SlideDrawingServiceAccessor = ISlideDrawingService | (() => ISlideDrawingService | undefined);
export declare function createSlidesFloatingObjectHostAdapterContribution(anchorModelService?: EmbedHostAnchorModelService, univerInstanceService?: IUniverInstanceService, slideDrawingService?: SlideDrawingServiceAccessor): IEmbedHostAdapterContribution;
export declare function createSlidesPageListBlockHostAdapterContribution(anchorModelService?: EmbedHostAnchorModelService, univerInstanceService?: IUniverInstanceService): IEmbedHostAdapterContribution;
export {};
