import type { ISetBoardTableCellTextCommandParams } from '@univerjs-pro/boards-table';
import type { ISlideTableCellEditorSession } from '@univerjs-pro/slides-table-ui';
import type { IDocumentData } from '@univerjs/core';
export interface IBoardTableCellEditorCommitCommand {
    commandId: string;
    params: ISetBoardTableCellTextCommandParams;
}
export declare function buildBoardTableCellEditorCommitCommand(state: ISlideTableCellEditorSession | null, documentData: IDocumentData): IBoardTableCellEditorCommitCommand | null;
