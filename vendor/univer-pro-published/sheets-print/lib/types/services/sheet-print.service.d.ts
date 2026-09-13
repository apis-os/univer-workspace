import type { IRange } from '@univerjs/core';
import type { ISheetPrintRenderConfig } from '../common/types';
import type { ISheetPrintLayoutInfo } from './sheet-print-manager.service';
import { IPrintPreparationService } from '@univerjs-pro/print';
import { IConfigService, Injector } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
import { IMessageService } from '@univerjs/ui';
import { ISheetPrintDialogService } from './sheet-print-dialog.service';
import { ISheetPrintManagerService } from './sheet-print-manager.service';
export declare class SheetPrintClientService {
    private readonly _injector;
    private readonly _printDialogService;
    private readonly _sheetPrintManagerService;
    private readonly _renderManagerService;
    protected readonly _messageService: IMessageService;
    private readonly _configService;
    private readonly _printPreparationService;
    constructor(_injector: Injector, _printDialogService: ISheetPrintDialogService, _sheetPrintManagerService: ISheetPrintManagerService, _renderManagerService: IRenderManagerService, _messageService: IMessageService, _configService: IConfigService, _printPreparationService: IPrintPreparationService);
    print(configs: ISheetPrintLayoutInfo[], renderConfig: ISheetPrintRenderConfig): Promise<boolean>;
    getRangeImage(unitId: string, subUnitId: string, range: IRange, includeHeaders?: boolean): string | false;
}
