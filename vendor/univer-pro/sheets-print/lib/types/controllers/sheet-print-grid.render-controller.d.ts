import type { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { Disposable } from '@univerjs/core';
import { IPrintGridService } from '../services/print-grid.service';
import { ISheetPrintManagerService } from '../services/sheet-print-manager.service';
export declare class SheetPrintGridRenderController extends Disposable implements IRenderModule {
    private readonly _context;
    constructor(_context: IRenderContext, printGridService: IPrintGridService, printManagerService: ISheetPrintManagerService);
}
