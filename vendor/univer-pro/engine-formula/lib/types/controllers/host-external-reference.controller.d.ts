import { Disposable, ICommandService, IResourceManagerService } from '@univerjs/core';
import { HostExternalReferenceModel } from '../models/host-external-reference.model';
export declare class HostExternalReferenceController extends Disposable {
    constructor(commandService: ICommandService, resourceManagerService: IResourceManagerService, model: HostExternalReferenceModel);
}
