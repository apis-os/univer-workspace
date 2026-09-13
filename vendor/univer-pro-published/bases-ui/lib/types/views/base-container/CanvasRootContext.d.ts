import type { MutableRefObject, ReactNode } from 'react';
export interface IBaseCanvasRootResolver {
    scopeRef?: MutableRefObject<HTMLElement | null>;
    getCanvasRoot: (unitId?: string) => HTMLElement | null;
}
export declare function BaseCanvasRootProvider(props: {
    children: ReactNode;
}): import("react").JSX.Element;
export declare function createBaseCanvasRootResolver(scopeRef: MutableRefObject<HTMLElement | null>): IBaseCanvasRootResolver;
export declare function useBaseCanvasRootResolver(): IBaseCanvasRootResolver;
