import type { IDisposable } from '@univerjs/core';
import type { IEmbedFloatingMenuContribution, IEmbedFloatingMenuMountContext } from '../types/embed-ui';
export declare function createDefaultEmbedFloatingMenuContributions(): IEmbedFloatingMenuContribution[];
export declare function mountDefaultEmbedFloatingMenu(_context: IEmbedFloatingMenuMountContext): IDisposable;
