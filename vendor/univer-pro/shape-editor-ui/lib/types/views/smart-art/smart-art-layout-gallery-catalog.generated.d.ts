import type { ISmartArtLayoutCatalogItem } from './smart-art-layout-catalog.generated';
export interface ISmartArtLayoutGalleryItem extends ISmartArtLayoutCatalogItem {
    galleryId: string;
}
export declare const SMART_ART_LAYOUT_GALLERY_CATALOG: readonly ISmartArtLayoutGalleryItem[];
