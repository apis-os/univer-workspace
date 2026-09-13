import { Disposable } from '@univerjs/core';
import { ExternalCacheReferenceDataProvider } from '../services/external-cache-reference-data.provider';
import { IFormulaReferenceDataProviderRegistry } from '../services/formula-reference-data.service';
export declare class ExternalReferenceDataProvidersController extends Disposable {
    constructor(registry: IFormulaReferenceDataProviderRegistry, cacheProvider: ExternalCacheReferenceDataProvider);
}
