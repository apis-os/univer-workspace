export interface IBoardSwimlaneToolbarMenuAction {
    key: string;
    label: string;
    shortcut?: string;
    disabled?: boolean;
    children?: IBoardSwimlaneToolbarMenuAction[];
    onClick?: () => void;
}
export declare function BoardSwimlaneToolbarMenu(props: {
    kind: 'container' | 'lane';
    actions: IBoardSwimlaneToolbarMenuAction[];
}): import("react").JSX.Element;
