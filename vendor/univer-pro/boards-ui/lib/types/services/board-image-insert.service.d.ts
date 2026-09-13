import { IConfigService, IImageIoService, ImageSourceType, IPermissionService, IUniverInstanceService } from '@univerjs/core';
import { BoardElementInsertService } from './board-element-insert.service';
import { BoardViewportService } from './board-viewport.service';
export interface IBoardImageInsertOptions {
    offset?: {
        x: number;
        y: number;
    };
    point?: {
        x: number;
        y: number;
    };
    target?: IBoardImageInsertTarget;
}
export interface IBoardImageInsertTarget {
    unitId: string;
    subUnitId: string;
}
export declare class BoardImageInsertService {
    private readonly _instanceService;
    private readonly _elementInsertService;
    private readonly _configService;
    private readonly _permissionService;
    private readonly _viewportService;
    private readonly _imageIoService?;
    constructor(_instanceService: IUniverInstanceService, _elementInsertService: BoardElementInsertService, _configService: IConfigService, _permissionService: IPermissionService, _viewportService: BoardViewportService, _imageIoService?: IImageIoService | undefined);
    insertImage(file: File, options?: IBoardImageInsertOptions): Promise<boolean>;
    private _insertImage;
    resolveImageSource(file: File): Promise<{
        source: string;
        imageSourceType: ImageSourceType;
        width: number;
        height: number;
    } | null>;
    private _fileToDataUrl;
}
