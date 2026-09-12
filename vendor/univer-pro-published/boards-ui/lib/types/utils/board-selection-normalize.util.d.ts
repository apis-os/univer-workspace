import type { IBoardElementData } from '@univerjs-pro/boards';
export declare function hasSelectedBoardContainerAncestor(elementData: Record<string, IBoardElementData>, elementId: string, selectedIds: ReadonlySet<string>): boolean;
export declare function resolveBoardSelectionRootElementIds(elementData: Record<string, IBoardElementData>, selectedIds: readonly string[]): string[];
