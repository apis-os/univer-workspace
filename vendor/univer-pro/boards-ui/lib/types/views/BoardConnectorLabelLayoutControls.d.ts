import type { IBoardConnectorLabelLayout } from '@univerjs-pro/boards';
export declare function BoardConnectorLabelLayoutControls(props: {
    layout?: IBoardConnectorLabelLayout;
    resolvedSize?: {
        width: number;
        height: number;
    } | null;
    onLayout: (layout: IBoardConnectorLabelLayout | null) => void;
    onResetPlacement: () => void;
}): import("react").JSX.Element;
