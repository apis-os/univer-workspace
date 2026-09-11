import { Disposable, IUniverInstanceService } from '@univerjs/core';
import { ExternalReferenceOverlayModel } from '../models/external-reference-overlay.model';
import { ExternalReferenceModel } from '../models/external-reference.model';
export declare class ExternalReferenceRenameController extends Disposable {
    private readonly _univerInstanceService;
    private readonly _names;
    constructor(_univerInstanceService: IUniverInstanceService, externalReferenceModel: ExternalReferenceModel, externalReferenceOverlayModel: ExternalReferenceOverlayModel);
    private _watch;
}
