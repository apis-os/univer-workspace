import type { IPopup } from '@univerjs/ui';
export declare const DOCS_CODE_LANGUAGE_PICKER = "docs-code-ui.language-picker";
export interface IDocsCodeLanguagePickerPopupProps {
    activeLanguage?: string;
    onSelect?: (language: string) => void;
}
export declare function DocsCodeLanguagePicker(props: {
    popup?: IPopup<IDocsCodeLanguagePickerPopupProps>;
}): import("react").JSX.Element;
