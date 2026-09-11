import type { IBoardData } from '@univerjs-pro/boards';
import type { IPdfUnitData } from '@univerjs-pro/pdfs';
import type { ISlideData } from '@univerjs-pro/slides';
import type { BaseDataModel, DocumentDataModel, IBaseSnapshot, IDocumentData, IWorkbookData, Workbook } from '@univerjs/core';
import type { ISheetBlockMeta, ISnapshot } from '@univerjs/protocol';
import type { ILogContext } from '../../utils';
import { ILogService } from '@univerjs/core';
import { ISnapshotServerService, SnapshotService } from './snapshot.service';
/**
 * This service provides methods to save snapshots into the database.
 *
 * It should be considered as a missing part ot `SnapshotService`. Because
 * we only need to save snapshot on the server side, so we separate it from
 * `SnapshotService`.
 *
 * Though this service is implemented in `@univerjs-pro/collaboration`, it is not registered by the plugin.
 */
export declare class SnapshotSaveService {
    private readonly _snapshotServerService;
    private _snapshotService;
    private readonly _logService;
    constructor(_snapshotServerService: ISnapshotServerService, _snapshotService: SnapshotService, _logService: ILogService);
    saveSheet(context: ILogContext, unitId: string, rev: number, workbook: Workbook, workbookData?: IWorkbookData): Promise<{
        snapshot: ISnapshot;
    }>;
    updateSheet(context: ILogContext, unitId: string, workbook: Workbook, workbookData?: IWorkbookData): Promise<{
        [key: string]: ISheetBlockMeta;
    }>;
    getSheet(context: ILogContext, unitID: string, rev: number, workbook: Workbook): Promise<{
        snapshot: ISnapshot;
    }>;
    getBase(context: ILogContext, unitID: string, rev: number, base: BaseDataModel): Promise<{
        snapshot: ISnapshot;
    }>;
    getDoc(context: ILogContext, unitId: string, rev: number, document: DocumentDataModel): Promise<{
        snapshot: ISnapshot;
    }>;
    saveDoc(context: ILogContext, unitId: string, rev: number, document: DocumentDataModel, documentData?: IDocumentData): Promise<{
        snapshot: ISnapshot;
    }>;
    saveBase(context: ILogContext, unitId: string, rev: number, base: BaseDataModel, baseData?: IBaseSnapshot): Promise<{
        snapshot: ISnapshot;
    }>;
    saveSlide(unitId: string, slideData: ISlideData, rev: number): Promise<{
        snapshot: ISnapshot;
    }>;
    saveBoard(unitId: string, boardData: IBoardData, rev: number): Promise<{
        snapshot: ISnapshot;
    }>;
    savePdf(unitId: string, pdfData: IPdfUnitData, rev: number): Promise<{
        snapshot: ISnapshot;
    }>;
}
