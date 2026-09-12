import type { RefObject } from 'react';
export declare function BaseToolbarSearch({ open, query, total, activeIndex, onOpen, onQueryChange, onPrevious, onNext, onClose, }: {
    open?: boolean;
    query: string;
    total: number;
    activeIndex: number | null;
    onOpen?: () => void;
    onQueryChange?: (query: string) => void;
    onPrevious?: () => void;
    onNext?: () => void;
    onClose?: () => void;
}): string | number | bigint | boolean | Iterable<import("react").ReactNode> | Promise<string | number | bigint | boolean | import("react").ReactPortal | import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>> | Iterable<import("react").ReactNode> | null | undefined> | import("react").JSX.Element | null | undefined;
export declare function BaseToolbarSearchPanel({ inputRef, query, total, activeIndex, onQueryChange, onPrevious, onNext, onClose, }: {
    inputRef?: RefObject<HTMLInputElement | null>;
    query: string;
    total: number;
    activeIndex: number | null;
    onQueryChange?: (query: string) => void;
    onPrevious?: () => void;
    onNext?: () => void;
    onClose?: () => void;
}): import("react").JSX.Element;
