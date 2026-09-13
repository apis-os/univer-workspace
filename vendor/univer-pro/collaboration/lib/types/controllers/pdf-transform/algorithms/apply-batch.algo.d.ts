import type { IApplyPdfMutationBatchMutationParams } from '@univerjs-pro/pdfs';
import type { IMutationInfo } from '@univerjs/core';
import type { ITransformMutationResult } from '../../../services/transform/types';
export declare const ApplyPdfMutationBatchWithSelf: {
    m1: string;
    m2: string;
    handler(m1: IMutationInfo<IApplyPdfMutationBatchMutationParams>, m2: IMutationInfo<IApplyPdfMutationBatchMutationParams>): ITransformMutationResult;
};
