import type { Workbook } from '@univerjs/core';
import { Disposable, Injector } from '@univerjs/core';
export declare class RangePreprocessController extends Disposable {
    readonly _injector: Injector;
    constructor(_injector: Injector);
    getAllTableJson(workbook: Workbook, responseDataMode?: string): Record<string, import("../utils/type").ITableJsonWidthData[]>;
}
