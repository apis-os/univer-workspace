import type { IBasicShapeData, ISmartArtData } from '../shape-type';
import { SmartArtPresentationShapeRoleEnum } from './smart-art-enum';
export type SmartArtQuickStyleSection = 'bestMatch' | 'threeDimensional';
export interface ISmartArtQuickStyleCatalogItem {
    id: string;
    key: string;
    section: SmartArtQuickStyleSection;
    preview: 'flat' | 'outline' | 'subtle' | 'moderate' | 'intense' | 'bevel' | 'inset' | 'cartoon' | 'powder' | 'brick' | 'flatScene' | 'metal' | 'sunset' | 'birdEye';
}
export declare const SMART_ART_QUICK_STYLE_CATALOG: readonly ISmartArtQuickStyleCatalogItem[];
export declare function resolveSmartArtQuickStyle3DShapeData(shapeData: IBasicShapeData, role: SmartArtPresentationShapeRoleEnum, quickStyleId?: string): IBasicShapeData;
export declare function applySmartArtQuickStyle(data: ISmartArtData, quickStyleId: string): ISmartArtData;
