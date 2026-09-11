import { Disposable, ICommandService } from '@univerjs/core';
import { HostExternalReferenceModel } from '../models/host-external-reference.model';
/**
 * External Reference resources travel with each calculation payload, just like dirty data.
 * They are not synchronized to the Worker through resource mutations.
 */
export declare class HostExternalReferenceCalculationController extends Disposable {
    constructor(commandService: ICommandService, model: HostExternalReferenceModel);
}
