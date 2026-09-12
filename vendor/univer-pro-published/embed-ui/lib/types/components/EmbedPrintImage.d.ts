export declare const EMBED_PRINT_IMAGE_COMPONENT_KEY = "UniverEmbedPrintImage";
export declare const EMBED_PRINT_PLACEHOLDER_COMPONENT_KEY = "UniverEmbedPrintPlaceholder";
export interface IEmbedPrintImageProps {
    data?: unknown;
    unitId: string;
}
export declare function EmbedPrintImage(props: IEmbedPrintImageProps): import("react").JSX.Element | null;
export declare function EmbedPrintPlaceholder(): null;
