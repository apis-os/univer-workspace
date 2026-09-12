import type { IPopup } from '@univerjs/ui';
export declare const DOCS_LIST_MORE_BULLETS_DIALOG = "docs-list-ui.more-bullets-dialog";
export interface IDocsListMoreBulletsDialogPopupProps {
    onClose?: () => void;
    onSelect?: (symbol: string) => void;
}
export declare function MoreBulletsDialog(props: {
    popup?: IPopup<IDocsListMoreBulletsDialogPopupProps>;
}): import("react").JSX.Element;
