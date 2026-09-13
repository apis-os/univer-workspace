import type { IViewSnapshot } from '@univerjs/core';
export declare function ViewSettingsMenu(props: {
    view: IViewSnapshot;
    onRename: (name: string) => void;
    onDuplicate: () => void;
    onDelete: () => void;
    onCancel: () => void;
}): import("react").JSX.Element;
