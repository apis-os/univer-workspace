import type { IMutation } from '@univerjs/core';
import type { IHostExternalReferenceResource } from '../../models/host-external-reference.model';
export interface ISetHostExternalReferenceMutationParams {
    unitId: string;
    resource: IHostExternalReferenceResource;
}
export declare const SetHostExternalReferenceMutation: IMutation<ISetHostExternalReferenceMutationParams>;
