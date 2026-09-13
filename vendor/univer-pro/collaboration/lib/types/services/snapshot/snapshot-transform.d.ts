import type { IBoardData } from '@univerjs-pro/boards';
import type { IPdfUnitData } from '@univerjs-pro/pdfs';
import type { ISlideData } from '@univerjs-pro/slides';
import type { IBaseSnapshot, IDocumentData, ILogService, IWorkbookData } from '@univerjs/core';
import type { IDeserializedSheetBlock, ISheetBlock, ISheetBlockMeta, ISnapshot } from '@univerjs/protocol';
import type { ILogContext } from '../../utils';
import type { ISnapshotServerService } from './snapshot.service';
export declare function generateTempDocumentSnapshot(_context: ILogContext, document: IDocumentData, unitID: string, rev: number): Promise<{
    snapshot: ISnapshot;
}>;
export declare function generateTempBaseSnapshot(context: ILogContext, base: IBaseSnapshot, unitID: string, rev: number, snapshotService: ISnapshotServerService, logger?: ILogService): Promise<{
    snapshot: ISnapshot;
}>;
export declare function generateTemporarySnap(context: ILogContext, workbook: IWorkbookData, unitID: string, rev: number, snapshotService: ISnapshotServerService, logger?: ILogService): Promise<{
    snapshot: ISnapshot;
}>;
export declare function transformWorkbookDataToSnapshotNoSave(context: ILogContext, workbook: IWorkbookData, unitID: string, snapshotService: ISnapshotServerService): Promise<{
    [key: string]: ISheetBlockMeta;
}>;
export declare function transformWorkbookDataToSnapshot(context: ILogContext, workbook: IWorkbookData, unitID: string, rev: number, snapshotService: ISnapshotServerService, logger?: ILogService): Promise<{
    snapshot: ISnapshot;
}>;
export declare function transformBaseDataToSnapshot(context: ILogContext, base: IBaseSnapshot, unitID: string, rev: number, snapshotService: ISnapshotServerService, logger?: ILogService): Promise<{
    snapshot: ISnapshot;
}>;
/**
 * Assemble a snapshot to a workbook.
 * @param snapshot
 * @param sheetBlocks
 */
export declare function transformSnapshotToWorkbookData(snapshot: ISnapshot, sheetBlocks: (IDeserializedSheetBlock | ISheetBlock)[], _context?: ILogContext, logService?: ILogService): Promise<IWorkbookData>;
export declare function transformSnapshotToBaseData(snapshot: ISnapshot, baseBlocks?: (IDeserializedSheetBlock | ISheetBlock)[], _context?: ILogContext, logService?: ILogService): Promise<IBaseSnapshot>;
export declare function transformSnapshotToDocumentData(snapshot: ISnapshot): IDocumentData;
export declare function transformDocumentDataToSnapshot(context: ILogContext, document: IDocumentData, unitID: string, rev: number, snapshotService: ISnapshotServerService): Promise<{
    snapshot: ISnapshot;
}>;
export declare function transformSlideDataToSnapshot(_resources: ISlideData['resources'], slideData: ISlideData, unitID: string, rev: number, snapshotService: ISnapshotServerService): Promise<{
    snapshot: ISnapshot;
}>;
export declare function transformSnapshotToSlideData(snapshot: ISnapshot): ISlideData;
export declare function transformBoardDataToSnapshot(_resources: IBoardData['resources'], boardData: IBoardData, unitID: string, rev: number, snapshotService: ISnapshotServerService): Promise<{
    snapshot: ISnapshot;
}>;
export declare function transformSnapshotToBoardData(snapshot: ISnapshot): IBoardData;
export declare function transformPdfDataToSnapshot(pdfData: IPdfUnitData, unitID: string, rev: number, snapshotService: ISnapshotServerService): Promise<{
    snapshot: ISnapshot;
}>;
export declare function transformSnapshotToPdfData(snapshot: ISnapshot): IPdfUnitData;
/**
 *
 * @param snapshot
 * @param snapshotService
 * @returns
 */
export declare function getSheetBlocksFromSnapshot(snapshot: ISnapshot, snapshotService: ISnapshotServerService): Promise<ISheetBlock[]>;
