export type SmartArtLayoutIconElement = {
    kind: 'ellipse';
    cx: number;
    cy: number;
    rx: number;
    ry: number;
    transform?: string;
} | {
    kind: 'line';
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    transform?: string;
} | {
    kind: 'path';
    d: string;
    transform?: string;
} | {
    kind: 'rect';
    x: number;
    y: number;
    width: number;
    height: number;
    rx?: number;
    transform?: string;
};
export interface ISmartArtLayoutCatalogItem {
    category: string;
    iconElements: SmartArtLayoutIconElement[];
    iconFile: string;
    id: string;
    name: string;
}
export declare const SMART_ART_LAYOUT_CATALOG: readonly ISmartArtLayoutCatalogItem[];
