import type { IPopupWithExtraProps } from '@univerjs/ui';
export declare const DOCS_QUOTE_FLOATING_TOOLBAR = "docs-quote-ui.floating-toolbar";
export interface IQuoteFloatingToolbarExtraProps {
    blockId: string;
    lineColor: string;
    textColor: string;
    unitId: string;
}
export interface IQuoteFloatingToolbarProps {
    popup: IPopupWithExtraProps<IQuoteFloatingToolbarExtraProps>;
}
export declare function QuoteFloatingToolbar(props: IQuoteFloatingToolbarProps): import("react").JSX.Element;
