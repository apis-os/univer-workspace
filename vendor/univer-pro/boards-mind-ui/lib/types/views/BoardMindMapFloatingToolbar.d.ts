import type { IBoardConnectorStyle } from '@univerjs-pro/boards';
import type { IMindMapContainerData, IUpdateMindMapNodeOperationParams, MindMapBranchLineType, MindMapStructureKind } from '@univerjs-pro/boards-mind';
import type { IShapeData } from '@univerjs-pro/engine-shape';
import type { IShapeTextUpdateOptions } from '@univerjs-pro/shape-editor-ui';
import type { ITextStyle } from '@univerjs/core';
import type { MindMapKeyboardShortcutAction } from '../controllers/board-mind-map-keyboard-shortcut.controller';
import { HorizontalAlign, ICommandService, VerticalAlign } from '@univerjs/core';
import { IShortcutService } from '@univerjs/ui';
export declare const BOARD_MIND_MAP_FLOATING_TOOLBAR_KEY = "board.mind-map.floating-toolbar";
export type BoardMindMapLineType = 'solid' | 'dash' | 'dot';
interface IBoardMindMapFloatingToolbarExtraProps {
    unitId: string;
    subUnitId: string;
    elementId: string;
    scopeId: string;
    isRootNode?: boolean;
    left?: number;
    top?: number;
    shapeData?: IShapeData;
    incomingConnectorStyle?: IBoardConnectorStyle;
    layout?: IMindMapContainerData['layout'];
}
interface IBoardMindMapFloatingToolbarProps {
    popup: {
        extraProps?: IBoardMindMapFloatingToolbarExtraProps;
    };
}
export declare function executeMindMapToolbarShortcut(commandService: ICommandService, action: MindMapKeyboardShortcutAction): void;
export declare function resolveMindMapToolbarTextState(shapeData: IShapeData | undefined): {
    color: string;
    fontFamily: string;
    fontSize: number;
    horizontalAlign: HorizontalAlign;
    textFill?: ITextStyle['textFill'];
    verticalAlign: VerticalAlign;
};
export declare function resolveMindMapShortcutDisplay(shortcutService: Pick<IShortcutService, 'getShortcutDisplay'>, action?: MindMapKeyboardShortcutAction): string | undefined;
export declare function handleMindMapToolbarStructureKindChange(commandService: ICommandService, runGrouped: <T>(action: () => T) => T, params: {
    unitId: string;
    subUnitId: string;
    scopeId: string;
    structureKind: MindMapStructureKind;
    branchLineType?: MindMapBranchLineType;
}): Promise<boolean>;
export declare function handleMindMapToolbarBranchLineTypeChange(commandService: ICommandService, runGrouped: <T>(action: () => T) => T, params: {
    unitId: string;
    subUnitId: string;
    scopeId: string;
    branchLineType: MindMapBranchLineType;
}): Promise<boolean>;
export declare function handleMindMapToolbarTextUpdate(params: IShapeTextUpdateOptions, updateNode: (params: {
    textStyle: NonNullable<IUpdateMindMapNodeOperationParams['textStyle']>;
}) => void): void;
export declare function handleMindMapToolbarLineUpdate(shapeData: IShapeData | undefined, updateLine: (style: Record<string, unknown>) => void): void;
export declare function resolveMindMapLineShapeData(incomingConnectorStyle: IBoardConnectorStyle | undefined): IShapeData;
export declare function BoardMindMapFloatingToolbar(props: IBoardMindMapFloatingToolbarProps): import("react").JSX.Element | null;
export {};
