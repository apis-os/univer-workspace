import type { IPopup } from '@univerjs/ui';
import { DocsListSelectionMode } from '@univerjs-pro/docs-list';
export declare const DOCS_LIST_PREFIX_SUFFIX_DIALOG = "docs-list-ui.prefix-suffix-dialog";
export interface IDocsListPrefixSuffixDialogPopupProps {
    onApply?: (prefix: string, suffix: string, mode: DocsListSelectionMode) => void;
    onClose?: () => void;
}
export declare function PrefixSuffixDialog(props: {
    popup?: IPopup<IDocsListPrefixSuffixDialogPopupProps>;
}): import("react").JSX.Element;
