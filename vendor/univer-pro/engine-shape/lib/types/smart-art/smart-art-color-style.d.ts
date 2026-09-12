import type { ISmartArtData } from '../shape-type';
export type SmartArtColorStyleSection = 'theme' | 'colorful' | 'accent1' | 'accent2' | 'accent3' | 'accent4' | 'accent5' | 'accent6';
export interface ISmartArtColorStyleCatalogItem {
    id: string;
    key: string;
    section: SmartArtColorStyleSection;
    colors: readonly string[];
    variant: 'outline' | 'fill' | 'gradient' | 'cycle' | 'transparent';
}
export declare const SMART_ART_COLOR_STYLE_CATALOG: readonly ISmartArtColorStyleCatalogItem[];
export declare function applySmartArtColorStyle(data: ISmartArtData, colorStyleId: string): ISmartArtData;
