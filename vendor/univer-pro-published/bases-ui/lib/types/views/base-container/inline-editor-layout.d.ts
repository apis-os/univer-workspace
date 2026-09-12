import type { IFieldSnapshot, IGridProjection } from '@univerjs/core';
import type { CSSProperties } from 'react';
import type { IBaseEmbedRuntimeDomScope } from '../../services/base-embed-integration.service';
import type { IBaseVirtualRecordState } from '../../services/base-ui-state.service';
export type BaseActiveCellEditorStyle = CSSProperties & {
    placementY?: 'above' | 'below';
};
export interface IBaseActiveEditorHostRect {
    left: number;
    top: number;
    width: number;
    height: number;
}
export declare function isBaseActiveCellEditorTarget(target: EventTarget | null): boolean;
export declare function isBaseActiveCellEditorHostOrFloatingTarget(event: globalThis.MouseEvent, activeEditor: Element | null): boolean;
export declare function isBaseInlineEditorFloatingTarget(target: EventTarget | null): boolean;
export declare function isBaseInlineEditorDateFloatingTarget(target: EventTarget | null): boolean;
export declare function embedRuntimeDomScopesEqual(left: IBaseEmbedRuntimeDomScope | undefined, right: IBaseEmbedRuntimeDomScope | undefined): boolean;
export declare function getBaseActiveCellEditorEmbedAttributes(embedId: string | undefined): Record<string, string>;
export declare function cssNumber(value: CSSProperties['left']): number;
export declare function toPopupEditorStyle(style: BaseActiveCellEditorStyle): CSSProperties;
export declare function getActiveGridCellEditorRect(projection: IGridProjection, recordId: string, fieldId: string, scrollState: {
    x: number;
    y: number;
} | undefined, rowHeight: number, collapsedGroupPaths?: ReadonlySet<string>, options?: {
    virtualRecord?: Pick<IBaseVirtualRecordState, 'actualLogicalY' | 'sourceLogicalY'>;
    hostHeight?: number;
}): {
    left: number;
    top: number;
    width: number;
    height: number;
} | null;
export declare function shouldCommitBaseActiveEditorOnWheel(event: Pick<WheelEvent, 'ctrlKey' | 'metaKey' | 'deltaX' | 'deltaY'>, target?: EventTarget | null): boolean;
export declare function shouldCommitBaseActiveEditorOnBlur(currentTarget: HTMLElement, relatedTarget: EventTarget | null, pointerDownInsideEditor?: boolean, dateFloatingInteractionActive?: boolean, attachmentFilePickerInteractionActive?: boolean): boolean;
export declare function isBaseInlineEditorEmbedEditorOrPopupPointerTarget(embedId: string | undefined, target: EventTarget | null): boolean;
export declare function baseActiveEditorHostRectsEqual(left: IBaseActiveEditorHostRect, right: IBaseActiveEditorHostRect): boolean;
export declare function canRenderInlineCellEditor(field: IFieldSnapshot): boolean;
export declare function getBaseActiveCellEditorStyle(field: Pick<IFieldSnapshot, 'type'>, rect: {
    top: number;
    height: number;
}, editorLeft: number, editorWidth: number, hostWidth?: number, hostHeight?: number, value?: unknown): BaseActiveCellEditorStyle;
export declare function shouldUseBaseActiveCellEditorPopup(field: Pick<IFieldSnapshot, 'type'>): boolean;
