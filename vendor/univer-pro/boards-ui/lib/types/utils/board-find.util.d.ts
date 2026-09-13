import type { IBoardElementData, IBoardTableSearchEntry } from '@univerjs-pro/boards';
export interface IFindBoardElementsOptions {
    query: string;
    elementData: Record<string, IBoardElementData>;
    elementOrder: string[];
    tableSearchEntries?: Record<string, readonly IBoardTableSearchEntry[]>;
    localeTexts: IBoardFindLocaleTexts;
}
export interface IBoardElementFindResult {
    resultId?: string;
    elementId: string;
    subId?: string;
    kind?: BoardElementFindResultKind;
    title: string;
    description: string;
}
export type BoardElementFindResultKind = 'element' | 'connector-label' | 'container-title' | 'swimlane-lane-title' | 'table-cell';
export interface IBoardFindLocaleTexts {
    elementTypes: Record<string, string>;
    shapePresets: Record<string, string>;
    lanePositionLabels: Record<number, string>;
    tableCellPositionLabels: Record<string, string>;
}
export declare function collectBoardFindStaticLocaleKeys(): string[];
export declare function findBoardElements(options: IFindBoardElementsOptions): IBoardElementFindResult[];
