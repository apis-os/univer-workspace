import type { IBaseRect } from '@univerjs/core';
import type { ReactNode } from 'react';
interface IBaseAnchoredPopupProps {
    anchor?: IBaseRect;
    children: ReactNode;
    followToolbarAnchor?: boolean;
    onClickOutside?: (event: MouseEvent) => void;
    zIndex?: number;
}
export declare function BaseAnchoredPopup(props: IBaseAnchoredPopupProps): import("react").JSX.Element;
export {};
