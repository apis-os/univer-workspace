import type { CSSProperties, ReactNode } from 'react';
export interface IPanelFrameProps {
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
    'data-u-comp'?: string;
}
export declare function PanelFrame(props: IPanelFrameProps): import("react").JSX.Element;
