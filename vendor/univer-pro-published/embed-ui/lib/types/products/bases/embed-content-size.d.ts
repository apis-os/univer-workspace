import type { IEmbedContentSizeProvider } from '../../types/embed-ui';
import { IBaseProjectionService } from '@univerjs-pro/bases';
import { IBaseUIStateService, IBaseViewWheelScrollService } from '@univerjs-pro/bases-ui';
import { UniverInstanceType } from '@univerjs/core';
export declare class BasesEmbedContentSizeProvider implements IEmbedContentSizeProvider {
    private readonly _baseUIStateService;
    private readonly _projectionService;
    private readonly _wheelScrollService;
    readonly childType = UniverInstanceType.UNIVER_BASE;
    constructor(_baseUIStateService: IBaseUIStateService, _projectionService: IBaseProjectionService, _wheelScrollService: IBaseViewWheelScrollService);
    measureContentSize(context: Parameters<IEmbedContentSizeProvider['measureContentSize']>[0]): {
        height: number | undefined;
        verticalBreaks: number[] | undefined;
        width: number | undefined;
    } | undefined;
}
