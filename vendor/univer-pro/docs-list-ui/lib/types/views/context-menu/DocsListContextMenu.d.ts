import type { IPopup } from '@univerjs/ui';
import type { IDocsListMarkerInfo } from '../../services/docs-list-selection.service';
import { ListGlyphType } from '@univerjs/core';
export declare const DOCS_LIST_CONTEXT_MENU = "docs-list-ui.context-menu";
export interface IDocsListContextMenuPopupProps {
    marker: IDocsListMarkerInfo;
    onClose?: () => void;
    onDemote?: () => void;
    onEditPrefixSuffix?: () => void;
    onMoreBullets?: () => void;
    onPromote?: () => void;
    onRestartAt?: () => void;
    onSelectCurrentLevel?: () => void;
    onSelectCurrentList?: () => void;
    onSelectItem?: () => void;
    onSetGlyphSymbol?: (symbol: string) => void;
    onSetGlyphType?: (glyphType: ListGlyphType) => void;
    onSetStartNumber?: (startNumber: number) => void;
    canDemote?: boolean;
    canPromote?: boolean;
    readOnly?: boolean;
    showNumberingControls?: boolean;
}
export declare function DocsListContextMenu(props: {
    popup?: IPopup<IDocsListContextMenuPopupProps>;
}): import("react").JSX.Element;
