import type { IBoardElementData } from '@univerjs-pro/boards';
import type { IMindMapContainerData, MindMapBranchLineType, MindMapLayoutDirection, MindMapStructureKind } from '@univerjs-pro/boards-mind';
import type { CSSProperties, ReactNode } from 'react';
import type { LocaleKey } from '../locale/types';
import { ICommandService } from '@univerjs/core';
export declare const BOARD_MIND_MAP_PANEL_KEY = "board.mind-map.panel";
export declare const BOARD_MIND_MAP_PANEL_SIDEBAR_WIDTH = 388;
export declare const BOARD_MIND_MAP_PANEL_TABS: readonly ["structure", "layout", "importExport"];
export type BoardMindMapPanelTab = typeof BOARD_MIND_MAP_PANEL_TABS[number];
export type BoardMindMapPanelSpacingKey = 'horizontalGap' | 'siblingGap' | 'branchGap';
export declare const BOARD_MIND_MAP_PANEL_DEFAULT_SPACING: Record<BoardMindMapPanelSpacingKey, number>;
export declare const BOARD_MIND_MAP_PANEL_SPACING_CONTROLS: Array<{
    labelKey: LocaleKey;
    key: BoardMindMapPanelSpacingKey;
    min: number;
    max: number;
}>;
export declare const BOARD_MIND_MAP_PANEL_LAYOUT_DIRECTION_ITEMS: Array<{
    labelKey: LocaleKey;
    value: MindMapLayoutDirection;
}>;
export declare const BOARD_MIND_MAP_PANEL_STRUCTURE_ITEMS: Array<{
    labelKey: LocaleKey;
    value: MindMapStructureKind;
}>;
export declare const BOARD_MIND_MAP_PANEL_BRANCH_LINE_ITEMS: Array<{
    labelKey: LocaleKey;
    value: MindMapBranchLineType;
}>;
export interface IBoardMindMapPanelOutlineItem {
    nodeId: string;
    depth: number;
    text: string;
}
export interface IBoardMindMapPanelProps {
    unitId: string;
    subUnitId: string;
    scopeId: string;
    nodeId?: string;
    outlineItems?: IBoardMindMapPanelOutlineItem[];
    layout?: IMindMapContainerData['layout'];
}
export declare function resolveMindMapPanelLayoutState(layout?: IMindMapContainerData['layout']): {
    spacing: {
        horizontalGap: number;
        siblingGap: number;
        branchGap: number;
    };
    direction: MindMapLayoutDirection;
    structureKind: MindMapStructureKind;
    branchLineType: MindMapBranchLineType;
};
export declare function handleMindMapPanelLayoutChange(commandService: ICommandService, params: {
    unitId: string;
    subUnitId: string;
    scopeId: string;
    direction?: MindMapLayoutDirection;
    structureKind?: MindMapStructureKind;
    branchLineType?: MindMapBranchLineType;
}): Promise<boolean>;
export declare function handleMindMapPanelLineTypeChange(commandService: ICommandService, params: {
    unitId: string;
    subUnitId: string;
    scopeId: string;
    branchLineType: MindMapBranchLineType;
}): Promise<boolean>;
export declare function handleMindMapPanelSpacingChange(commandService: ICommandService, params: {
    unitId: string;
    subUnitId: string;
    scopeId: string;
    horizontalGap?: number;
    siblingGap?: number;
    branchGap?: number;
}): Promise<boolean>;
export declare function handleMindMapPanelReorderNode(commandService: ICommandService, params: {
    unitId: string;
    subUnitId: string;
    scopeId: string;
    nodeId: string;
    targetNodeId: string;
    placement: 'before' | 'after';
}): Promise<boolean>;
export declare function handleMindMapPanelRenameNode(commandService: ICommandService, params: {
    unitId: string;
    subUnitId: string;
    scopeId: string;
    nodeId: string;
    text: string;
}): Promise<boolean>;
export declare function writeMindMapPanelClipboardText(content: string): Promise<boolean>;
export declare function handleMindMapPanelExportOpml(commandService: ICommandService, params: {
    unitId: string;
    subUnitId: string;
    scopeId: string;
}, writeText?: (content: string) => Promise<boolean | void>): Promise<boolean>;
export declare function handleMindMapPanelImportOpml(commandService: ICommandService, params: {
    unitId: string;
    subUnitId: string;
    left: number;
    top: number;
    opml: string;
}): Promise<boolean>;
export declare function collectMindMapPanelOutlineItems(elementData: Record<string, IBoardElementData>, scopeId: string, fallbackText?: string): IBoardMindMapPanelOutlineItem[];
export declare function filterMindMapPanelOutlineItems(outlineItems: IBoardMindMapPanelOutlineItem[], query: string): IBoardMindMapPanelOutlineItem[];
export declare function resolveMindMapPanelOutlineIndent(depth: number): CSSProperties;
export declare function BoardMindMapPanelSection(props: {
    title: string;
    children?: ReactNode;
}): import("react").JSX.Element;
export declare function BoardMindMapPanel(props: IBoardMindMapPanelProps): import("react").JSX.Element;
