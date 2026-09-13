import type { BaseViewType } from '@univerjs/core';
export interface IBaseMenuViewItem {
    type: BaseViewType;
    label: string;
    description: string;
}
export declare function AddViewMenu(props: {
    views: IBaseMenuViewItem[];
    onCreate: (type: BaseViewType) => void;
}): import("react").JSX.Element;
