import type { ISmartArtData } from '@univerjs-pro/engine-shape';
import type { ISmartArtLayoutGalleryItem } from './smart-art-layout-gallery-catalog.generated';
export interface ISmartArtLayoutGalleryProps {
    selectedLayoutId?: string;
    selectedCategory?: ISmartArtData['layout']['category'];
    onSelect: (layout: ISmartArtLayoutGalleryItem) => void;
}
export declare function SmartArtLayoutGallery(props: ISmartArtLayoutGalleryProps): import("react").JSX.Element;
