import { Disposable, ICommandService } from '@univerjs/core';
import { RegisterOtherFormulaService } from '@univerjs/engine-formula';
import { HostExternalReferenceModel } from '../models/host-external-reference.model';
/** Recalculates Host formulas when their in-memory Source workbook changes. */
export declare class HostExternalReferenceSourceDirtyController extends Disposable {
    constructor(commandService: ICommandService, model: HostExternalReferenceModel, otherFormulaService: RegisterOtherFormulaService);
}
