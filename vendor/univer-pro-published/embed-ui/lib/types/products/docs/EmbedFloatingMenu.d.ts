import type { IEmbedFloatingMenuContribution } from '../../types/embed-ui';
import { IPermissionService, IUniverInstanceService } from '@univerjs/core';
export declare function createDocsFloatingMenuContributions(): IEmbedFloatingMenuContribution[];
export declare function canEditDocsEmbed(permissionService: IPermissionService, univerInstanceService: IUniverInstanceService, hostUnitId: string, embedId: string, entry: string): boolean;
