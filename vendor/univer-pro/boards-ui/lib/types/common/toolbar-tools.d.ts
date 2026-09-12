import type { ComponentType } from 'react';
import type { IUniverBoardsUIConfig } from '../config/config';
import type { LocaleKey } from '../locale/types';
import type { BoardToolbarContributionGroup } from '../services/board-toolbar-contribution.service';
import { BoardToolType } from '@univerjs-pro/boards';
export interface IBoardToolbarToolDefinition {
    type: BoardToolType;
    labelKey: LocaleKey;
    icon: ComponentType<{
        className?: string;
    }>;
    enabledByDefault: boolean;
    group: BoardToolbarContributionGroup;
}
export interface IResolvedBoardToolbarTool extends Omit<IBoardToolbarToolDefinition, 'enabledByDefault'> {
    disabled: boolean;
}
export declare const BOARD_TOOLBAR_TOOL_DEFINITIONS: IBoardToolbarToolDefinition[];
export declare function resolveBoardToolbarTools(config?: Pick<IUniverBoardsUIConfig, 'toolbar'>): IResolvedBoardToolbarTool[];
