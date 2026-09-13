import type { ISmartArtColorStyleCatalogItem } from '@univerjs-pro/engine-shape';
export interface ISmartArtColorGalleryProps {
    selectedColorStyleId?: string;
    onSelect: (style: ISmartArtColorStyleCatalogItem) => void;
}
export declare function SmartArtColorGallery(props: ISmartArtColorGalleryProps): import("react").JSX.Element;
