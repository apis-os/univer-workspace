import type { IBaseSnapshot, IDisposable, IUniverInstanceService, IWorkbookData } from '@univerjs/core';
import type { IResourceRef } from '../common/resource-ref';
import { Disposable, UniverInstanceType } from '@univerjs/core';
export type ReferencedUnitSnapshot = IWorkbookData | IBaseSnapshot;
export interface IReferencedUnitDescriptor {
    name: string;
    ref: IResourceRef;
}
export interface IReferencedUnitSource {
    listUnits(unitType: UniverInstanceType.UNIVER_SHEET | UniverInstanceType.UNIVER_BASE): Promise<readonly IReferencedUnitDescriptor[]>;
    loadUnit(unit: IReferencedUnitDescriptor): Promise<ReferencedUnitSnapshot>;
}
export interface IReferencedUnitCatalogService extends IDisposable {
    listUnits(unitType: UniverInstanceType.UNIVER_SHEET | UniverInstanceType.UNIVER_BASE): Promise<readonly IReferencedUnitDescriptor[]>;
    loadUnit(unit: IReferencedUnitDescriptor): Promise<ReferencedUnitSnapshot>;
    registerSource(source: IReferencedUnitSource): IDisposable;
}
export declare const IReferencedUnitCatalogService: import("@wendellhu/redi").IdentifierDecorator<IReferencedUnitCatalogService>;
export declare class ReferencedUnitCatalogService extends Disposable implements IReferencedUnitCatalogService {
    private readonly _loadedSource;
    private readonly _sources;
    private readonly _unitOwners;
    constructor(instanceService: IUniverInstanceService);
    registerSource(source: IReferencedUnitSource): IDisposable;
    listUnits(unitType: UniverInstanceType.UNIVER_SHEET | UniverInstanceType.UNIVER_BASE): Promise<readonly IReferencedUnitDescriptor[]>;
    loadUnit(unit: IReferencedUnitDescriptor): Promise<ReferencedUnitSnapshot>;
    private _appendSourceUnits;
}
