import type { Dependency, IDisposable } from '@univerjs/core';
import type { IEmbedChildContainerContext, IEmbedChildRuntimeScope } from '../types/embed-ui';
export type EmbedChildRuntimeScopeCreateContext = Omit<IEmbedChildContainerContext, 'runtimeScope'>;
export declare function createEmbedChildRuntimeScope(context: EmbedChildRuntimeScopeCreateContext, setActive: (active: boolean) => void, scopedDependencies?: readonly Dependency[]): {
    runtimeScope: IEmbedChildRuntimeScope;
    disposable: IDisposable;
};
