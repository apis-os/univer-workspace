import type { IDocsCalloutConfig } from '@univerjs-pro/docs-callout';
import type { IPopupWithExtraProps } from '@univerjs/ui';
export declare const DOCS_CALLOUT_FLOATING_TOOLBAR = "docs-callout-ui.floating-toolbar";
export interface ICalloutFloatingToolbarExtraProps {
    blockId: string;
    config: IDocsCalloutConfig;
    textColor?: string;
    unitId: string;
}
export interface ICalloutFloatingToolbarProps {
    popup: IPopupWithExtraProps<ICalloutFloatingToolbarExtraProps>;
}
export declare function CalloutFloatingToolbar(props: ICalloutFloatingToolbarProps): import("react").JSX.Element;
