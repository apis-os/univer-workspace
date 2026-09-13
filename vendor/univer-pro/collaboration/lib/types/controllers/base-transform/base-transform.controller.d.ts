import { Disposable } from '@univerjs/core';
import { ITransformService } from '../../services/transform/transform.service';
/**
 * Registers Base JSON1 transform algorithms to the shared transform service.
 */
export declare class BaseTransformController extends Disposable {
    private readonly _transformService;
    constructor(_transformService: ITransformService);
}
