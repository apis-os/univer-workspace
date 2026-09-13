export interface IBoardRenamePopupProps {
    kind: 'container' | 'lane';
    initialTitle: string;
    onCancel: () => void;
    onSubmit: (title: string) => void | Promise<void>;
}
export declare function BoardRenamePopup(props: IBoardRenamePopupProps): import("react").JSX.Element;
