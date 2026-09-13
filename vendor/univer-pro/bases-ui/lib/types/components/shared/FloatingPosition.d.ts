import type { MutableRefObject, ReactNode } from 'react';
export declare function useStableScrollPosition<T extends HTMLElement>(key: string): {
    ref: MutableRefObject<T | null>;
    onScroll: () => void;
    remember: () => void;
};
export interface IBaseFloatingPositionOptions {
    width: number;
    height?: number;
    gap?: number;
    margin?: number;
    minHeight?: number;
    viewportWidth?: number;
    viewportHeight?: number;
}
export interface IBaseFloatingPosition {
    left: number;
    top: number;
    width: number;
    maxHeight: number;
    placementY: 'top' | 'bottom';
    placementX: 'left' | 'right' | 'clamped';
}
export declare function clampNumber(value: number, min: number, max: number): number;
export declare function getBaseFloatingPosition(anchor: Pick<DOMRect, 'left' | 'top' | 'width' | 'height'> & {
    right?: number;
    bottom?: number;
}, options: IBaseFloatingPositionOptions): IBaseFloatingPosition;
export declare function ConditionalControlHoverFrame(props: {
    children: ReactNode;
}): import("react").JSX.Element;
