import { Disposable } from '@univerjs/core';
import { IRPCChannelService } from '@univerjs/rpc';
import { IFormulaReferenceDataService } from '../services/formula-reference-data.service';
export declare const FORMULA_REFERENCE_DATA_RPC_CHANNEL = "univer-pro.formula.reference-data";
export declare class FormulaReferenceDataRpcController extends Disposable {
    constructor(rpcChannelService: IRPCChannelService, referenceDataService: IFormulaReferenceDataService);
}
