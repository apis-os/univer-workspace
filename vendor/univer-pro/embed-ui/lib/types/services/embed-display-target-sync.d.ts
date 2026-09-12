import type { EmbedDisplayTarget } from '@univerjs-pro/embed';
import type { ICommandService, IDisposable } from '@univerjs/core';
import type { IEmbedChildContainerContext } from '../types/embed-ui';
export declare function registerEmbedDisplayTargetSync(context: Pick<IEmbedChildContainerContext, 'descriptor' | 'embedId' | 'hostUnitId'>, commandService: ICommandService, applyTarget: (target: EmbedDisplayTarget | undefined) => void): IDisposable;
