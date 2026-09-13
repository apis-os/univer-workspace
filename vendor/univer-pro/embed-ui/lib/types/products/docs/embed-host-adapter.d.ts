import type { EmbedHostAnchorModelService, IEmbedHostAdapterContribution } from '@univerjs-pro/embed';
import type { IUniverInstanceService } from '@univerjs/core';
import type { IRenderManagerService } from '@univerjs/engine-render';
import type { IEmbedHostContainerContribution } from '../../types/embed-ui';
export declare function createDocsCustomBlockUIHostAdapterContribution(anchorModelService?: EmbedHostAnchorModelService, univerInstanceService?: IUniverInstanceService, renderManagerService?: IRenderManagerService): IEmbedHostAdapterContribution;
export declare function createDocsCustomBlockHostContainerContribution(): IEmbedHostContainerContribution;
