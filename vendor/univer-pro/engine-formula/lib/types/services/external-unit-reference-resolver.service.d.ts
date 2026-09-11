import type { IFormulaUnitReferenceResolution, IFormulaUnitReferenceResolveInput } from '@univerjs/engine-formula';
import { ErrorType, FormulaUnitReferenceResolver, IFormulaCurrentConfigService } from '@univerjs/engine-formula';
import { ExternalReferenceModel } from '../models/external-reference.model';
export declare class ExternalFormulaUnitReferenceResolver extends FormulaUnitReferenceResolver {
    private readonly _externalReferenceModel;
    constructor(currentConfigService: IFormulaCurrentConfigService, _externalReferenceModel: ExternalReferenceModel);
    resolve(input: IFormulaUnitReferenceResolveInput): IFormulaUnitReferenceResolution | ErrorType;
}
