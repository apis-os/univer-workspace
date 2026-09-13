import type { BaseRightPanelMode } from '../../config/config';
export interface IBaseRecordDetailPanelLayout {
    currentWidth: number;
    isFullscreen: boolean;
    onSelectWidth: (width: number) => void;
    onToggleFullscreen?: () => void;
}
export declare function clampBaseRightPanelWidth(width: number, maximum?: number): number;
export declare function resolveBaseRightPanelMaximum(containerWidth: number, mode: BaseRightPanelMode): number;
export declare function isBaseRightPanelResizePointerActive(buttons: number): boolean;
