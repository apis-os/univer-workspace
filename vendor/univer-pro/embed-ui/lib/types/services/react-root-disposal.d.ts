import type { ReactElement } from 'react';
export interface IEmbedReactRoot {
    render: (node: ReactElement) => void;
}
export declare function createEmbedReactRoot(container: Element): IEmbedReactRoot;
export declare function disposeEmbedReactRoot(root: IEmbedReactRoot): void;
