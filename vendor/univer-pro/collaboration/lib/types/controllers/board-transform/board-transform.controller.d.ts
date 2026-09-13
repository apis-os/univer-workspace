import { Disposable } from '@univerjs/core';
import { ITransformService } from '../../services/transform/transform.service';
/**
 * This controller registers board transform algorithms to the transform service.
 */
export declare class BoardTransformController extends Disposable {
    private readonly _transformService;
    constructor(_transformService: ITransformService);
}
