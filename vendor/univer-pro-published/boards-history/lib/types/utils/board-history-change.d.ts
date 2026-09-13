import type { IHistoryMutationEntry } from '@univerjs-pro/edit-history';
import type { IBoardHistoryChange } from '../types';
export declare function extractBoardHistoryChanges(entries: IHistoryMutationEntry[]): IBoardHistoryChange[];
