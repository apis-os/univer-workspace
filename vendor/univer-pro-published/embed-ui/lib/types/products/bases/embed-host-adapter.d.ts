import type { IBaseUIStateService } from '@univerjs-pro/bases-ui';
import type { EmbedHostAnchorModelService, IEmbedHostAdapterContribution } from '@univerjs-pro/embed';
import type { IUniverInstanceService } from '@univerjs/core';
import type { IEmbedHostContainerContribution } from '../../types/embed-ui';
export declare function createBasesTableListBlockUIHostAdapterContribution(anchorModelService?: EmbedHostAnchorModelService, univerInstanceService?: IUniverInstanceService, baseUIStateService?: IBaseUIStateService | (() => IBaseUIStateService | undefined)): IEmbedHostAdapterContribution;
export declare function createBasesTableListBlockHostContainerContribution(): IEmbedHostContainerContribution;
