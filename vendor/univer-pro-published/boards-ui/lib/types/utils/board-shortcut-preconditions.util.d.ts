import type { BoardModel } from '@univerjs-pro/boards';
import type { IContextService, IUniverInstanceService } from '@univerjs/core';
import type { BoardShortcutRuntimeService } from '../services/board-shortcut-runtime.service';
export declare function isBoardKeyboardOwner(instanceService: IUniverInstanceService, boardUnitId: string): boolean;
export declare function isBoardShortcutAvailable(contextService: Pick<IContextService, 'getContextValue'>): boolean;
export declare function resolveBoardShortcutModel(runtime: BoardShortcutRuntimeService, allowViewing?: boolean): BoardModel | null;
