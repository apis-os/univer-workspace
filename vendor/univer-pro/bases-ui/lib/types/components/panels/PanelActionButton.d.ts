import type { ReactNode } from 'react';
export interface IPanelActionButtonProps {
    icon: ReactNode;
    trailing?: ReactNode;
    label: ReactNode;
    danger?: boolean;
    tone?: 'primary';
    onAction: () => void;
}
export declare function PanelActionButton(props: IPanelActionButtonProps): import("react").JSX.Element;
