import type { IBoardElementService } from '@univerjs-pro/boards';
import type { IUniverInstanceService } from '@univerjs/core';
import type { EmbedHostAnchorModelService } from '../../services/embed-host-anchor-model.service';
import type { IEmbedHostAdapterContribution } from '../../types/host-adapter';
type BoardElementServiceAccessor = IBoardElementService | (() => IBoardElementService | undefined);
export declare function createBoardsFloatingObjectHostAdapterContribution(anchorModelService?: EmbedHostAnchorModelService, univerInstanceService?: IUniverInstanceService, boardElementService?: BoardElementServiceAccessor): IEmbedHostAdapterContribution;
export {};
