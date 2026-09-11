import type { ISnapshotBlockJson, ISnapshotBlockJsonResponse } from '@univerjs-pro/exchange-client';
import type { ISlideData } from '@univerjs-pro/slides';
import { IExchangeService } from '@univerjs-pro/exchange-client';
export interface ISlideExchangeService {
    importSlideToUnitId(file: File | string): Promise<string | undefined>;
    importSlideToSnapshot(file: File | string): Promise<ISlideData | undefined>;
    exportSlideByUnitId(unitId: string): Promise<File | undefined>;
    exportSlideBySnapshot(snapshot: ISlideData): Promise<File | undefined>;
    transformSnapshotJsonToSlideData(json: ISnapshotBlockJsonResponse): Promise<ISlideData>;
    transformSlideDataToSnapshotJson(slideData: ISlideData): Promise<ISnapshotBlockJson>;
}
export declare const ISlideExchangeService: import("@wendellhu/redi").IdentifierDecorator<ISlideExchangeService>;
export declare class SlideExchangeService implements ISlideExchangeService {
    private readonly _exchangeService;
    constructor(_exchangeService: IExchangeService);
    importSlideToUnitId(file: File | string): Promise<string | undefined>;
    importSlideToSnapshot(file: File | string): Promise<ISlideData | undefined>;
    exportSlideByUnitId(unitId: string): Promise<File | undefined>;
    exportSlideBySnapshot(snapshot: ISlideData): Promise<File | undefined>;
    transformSnapshotJsonToSlideData(json: ISnapshotBlockJsonResponse): Promise<ISlideData>;
    transformSlideDataToSnapshotJson(slideData: ISlideData): Promise<ISnapshotBlockJson>;
}
