import { Disposable, IUniverInstanceService } from '@univerjs/core';
import { IActiveDirtyManagerService, RegisterOtherFormulaService } from '@univerjs/engine-formula';
export declare class HostExternalReferenceActiveDirtyController extends Disposable {
    constructor(activeDirtyManagerService: IActiveDirtyManagerService, univerInstanceService: IUniverInstanceService, registerOtherFormulaService: RegisterOtherFormulaService);
}
