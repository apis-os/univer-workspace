import type { Editor } from '@univerjs/docs-ui';
import type { IEditorUISession } from '../../types';
import { HorizontalAlign, VerticalAlign } from '@univerjs/core';
export interface IEditorUIAlignmentPatch {
    horizontalAlign?: HorizontalAlign;
    verticalAlign?: VerticalAlign;
}
export interface IEditorUIFloatingToolbarProps {
    applyDocumentAlignment: (alignment: IEditorUIAlignmentPatch) => void;
    editor: Editor | undefined;
    session: IEditorUISession;
    syncLayout: () => void;
}
export declare function EditorUIFloatingToolbar(props: IEditorUIFloatingToolbarProps): import("react").JSX.Element;
