import type { ISmartArtQuickStyleCatalogItem } from '@univerjs-pro/engine-shape';
export interface ISmartArtQuickStyleGalleryProps {
    selectedStyleId?: string;
    onSelect: (style: ISmartArtQuickStyleCatalogItem) => void;
}
export declare function SmartArtQuickStyleGallery(props: ISmartArtQuickStyleGalleryProps): import("react").JSX.Element;
export declare function SmartArtQuickStylePreview(props: {
    style: ISmartArtQuickStyleCatalogItem;
    compact?: boolean;
}): import("react").JSX.Element;
