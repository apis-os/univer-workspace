import { Disposable, IResourceManagerService } from '@univerjs/core';
import { ExternalReferenceOverlayModel } from '../models/external-reference-overlay.model';
import { ExternalReferenceModel } from '../models/external-reference.model';
export declare class ExternalReferenceResourceController extends Disposable {
    constructor(resourceManagerService: IResourceManagerService, externalReferenceModel: ExternalReferenceModel, externalReferenceOverlayModel: ExternalReferenceOverlayModel);
}
