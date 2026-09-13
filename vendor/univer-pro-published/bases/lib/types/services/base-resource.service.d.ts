import type { BaseDataModel, IBaseSnapshot } from '@univerjs/core';
import { IUniverInstanceService } from '@univerjs/core';
export interface IBaseResourceService {
    getBase(baseId: string): BaseDataModel | null;
    getAllBases(): BaseDataModel[];
    createBase(snapshot: Partial<IBaseSnapshot>): BaseDataModel;
}
export declare const IBaseResourceService: import("@wendellhu/redi").IdentifierDecorator<IBaseResourceService>;
export declare class BaseResourceService implements IBaseResourceService {
    private readonly _univerInstanceService;
    constructor(_univerInstanceService: IUniverInstanceService);
    getBase(baseId: string): BaseDataModel | null;
    getAllBases(): BaseDataModel[];
    createBase(snapshot: Partial<IBaseSnapshot>): BaseDataModel;
}
