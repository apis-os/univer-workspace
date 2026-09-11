import type { IRange, IScale } from '@univerjs/core';
import type { SpreadsheetSkeleton, UniverRenderingContext } from '@univerjs/engine-render';
import type { IPrintGridService } from '../../services/print-grid.service';
import type { ISheetPrintManagerService } from '../../services/sheet-print-manager.service';
import { SheetExtension } from '@univerjs/engine-render';
export declare class PrintGridExtension extends SheetExtension {
    private readonly _printGridService;
    private readonly _printManagerService;
    uKey: string;
    Z_INDEX: number;
    constructor(_printGridService: IPrintGridService, _printManagerService: ISheetPrintManagerService);
    draw(ctx: UniverRenderingContext, parentScale: IScale, skeleton: SpreadsheetSkeleton, _diffRanges: IRange[]): void;
    private _drawPrintGrid;
}
