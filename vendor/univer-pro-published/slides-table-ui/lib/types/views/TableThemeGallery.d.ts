import type { ISlideTableStyleOptions, ISlideTableThemePalette } from '@univerjs-pro/slides-table';
export interface ITableThemeGalleryProps {
    currentStyleId?: string;
    currentOptions: ISlideTableStyleOptions;
    direction?: 'ltr' | 'rtl';
    palette?: ISlideTableThemePalette;
    showOptions?: boolean;
    showThemes?: boolean;
    onApplyTheme: (styleId: string) => void;
    onChangeOptions: (options: ISlideTableStyleOptions) => void;
}
export declare function TableThemeGallery(props: ITableThemeGalleryProps): import("react").JSX.Element;
