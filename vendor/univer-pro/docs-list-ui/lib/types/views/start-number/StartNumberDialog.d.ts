import type { IPopup } from '@univerjs/ui';
export declare const DOCS_LIST_START_NUMBER_DIALOG = "docs-list-ui.start-number-dialog";
export interface IDocsListStartNumberDialogPopupProps {
    onApply?: (startNumber: number) => void;
    onClose?: () => void;
}
export declare function StartNumberDialog(props: {
    popup?: IPopup<IDocsListStartNumberDialogPopupProps>;
}): import("react").JSX.Element;
