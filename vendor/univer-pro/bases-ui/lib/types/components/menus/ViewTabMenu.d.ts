import type { ReactElement } from 'react';
interface IViewTabMenuView {
    name: string;
}
export declare function ViewTabMenu({ children, view, open, isFirst, isActive, renaming, onRenameMode, onClose, onSetFirst, onRename, onDuplicate, onConfigure, onDelete, }: {
    children: ReactElement;
    view: IViewTabMenuView;
    open: boolean;
    isFirst: boolean;
    isActive: boolean;
    renaming: boolean;
    onRenameMode: () => void;
    onClose: () => void;
    onSetFirst: () => void;
    onRename: (name: string) => void;
    onDuplicate: () => void;
    onConfigure?: (anchor: HTMLElement) => void;
    onDelete: () => void;
}): import("react").JSX.Element;
export {};
