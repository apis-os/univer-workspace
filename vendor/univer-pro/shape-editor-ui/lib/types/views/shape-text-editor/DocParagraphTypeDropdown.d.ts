import type { MouseEvent as ReactMouseEvent } from 'react';
export interface IDocParagraphTypeDropdownProps {
    className?: string;
    popupDataComponent?: string;
    size?: 'small' | 'middle';
    title?: string;
    onAfterCommand?: () => void;
    onBeforeCommand?: () => void;
    onMouseDown?: (event: ReactMouseEvent<HTMLButtonElement>) => void;
}
export declare function DocParagraphTypeDropdown(props: IDocParagraphTypeDropdownProps): import("react").JSX.Element;
