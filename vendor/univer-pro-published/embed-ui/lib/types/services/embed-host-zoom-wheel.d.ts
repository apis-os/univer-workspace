import type { ICommandService, IUniverInstanceService } from '@univerjs/core';
import type { IEmbedChildContainerContext } from '../types/embed-ui';
export interface IEmbedHostZoomWheelDependencies {
    commandService: ICommandService;
    univerInstanceService: IUniverInstanceService;
}
export declare function routeEmbedHostZoomWheel(event: WheelEvent, context: IEmbedChildContainerContext, dependencies: IEmbedHostZoomWheelDependencies): boolean;
