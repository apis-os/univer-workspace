import { getShapeQuickStylePresets } from '@univerjs-pro/shape-editor';
type ShapeQuickStyleType = Parameters<typeof getShapeQuickStylePresets>[0];
export interface IShapeQuickStyleGalleryProps {
    type: ShapeQuickStyleType;
    ariaLabel: string;
    activePresetId?: string | null;
    onSelect: (presetId: string) => void;
}
export declare function ShapeQuickStyleGallery(props: IShapeQuickStyleGalleryProps): import("react").JSX.Element;
export {};
