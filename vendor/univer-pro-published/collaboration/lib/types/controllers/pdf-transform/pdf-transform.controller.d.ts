import { Disposable } from '@univerjs/core';
import { ITransformService } from '../../services/transform/transform.service';
/** Registers canonical PDF mutation transforms with the shared collaboration layer. */
export declare class PdfTransformController extends Disposable {
    private readonly _transformService;
    constructor(_transformService: ITransformService);
}
