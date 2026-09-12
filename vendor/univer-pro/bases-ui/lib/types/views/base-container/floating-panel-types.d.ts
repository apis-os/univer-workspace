import type { CSSProperties } from 'react';
export interface IBaseFloatingPanelStyle extends CSSProperties {
    top: number;
    left: number;
    width?: number;
    height?: number;
    maxWidth?: number;
    maxHeight?: number;
}
