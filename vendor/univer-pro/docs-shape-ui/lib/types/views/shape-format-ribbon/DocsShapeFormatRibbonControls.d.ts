import type { ICustomComponentProps } from '@univerjs/ui';
import type { LocaleKey } from '../../locale/types';
import { TextWrappingStyle } from '@univerjs/docs-drawing';
export declare const DOCS_SHAPE_QUICK_STYLE_GALLERY_COMPONENT = "docs-shape-ui.shape-format.quick-style-gallery";
export declare const DOCS_SHAPE_STYLE_RIBBON_COMPONENT = "docs-shape-ui.shape-format.style-ribbon-control";
export declare const DOCS_SHAPE_TEXT_RIBBON_COMPONENT = "docs-shape-ui.shape-format.text-ribbon-control";
export declare const DOCS_FORMULA_SHAPE_RIBBON_COMPONENT = "docs-shape-ui.shape-format.formula-ribbon-control";
export declare const DOCS_SHAPE_WRAPPING_STYLE_LABEL_COMPONENT = "docs-shape-ui.shape-format.wrapping-style-label";
export declare const DOCS_SHAPE_WRAPPING_STYLE_OPTIONS: ReadonlyArray<{
    value: TextWrappingStyle;
    label: LocaleKey;
    icon: string;
}>;
export declare function DocsShapeStyleRibbonControl(): import("react").JSX.Element | null;
export declare function DocsShapeQuickStyleGallery(): import("react").JSX.Element | null;
export declare function DocsShapeTextRibbonControl(): import("react").JSX.Element | null;
export declare function DocsFormulaShapeRibbonControl(): import("react").JSX.Element | null;
export declare function DocsShapeWrappingStyleLabel({ value }: ICustomComponentProps<string | number | undefined>): import("react").JSX.Element | null;
