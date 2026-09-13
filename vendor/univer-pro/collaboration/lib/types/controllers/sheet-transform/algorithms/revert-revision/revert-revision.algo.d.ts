import type { IRevertRevisionMutationParams } from '../../../../commands/revert-revision.mutation';
import type { IMutationTransformAlgorithm } from '../../../../services/transform/transform.service';
export declare const RevertRevisionMutationWithOthers: IMutationTransformAlgorithm<IRevertRevisionMutationParams, any>;
export declare const OthersWithRevertRevision: IMutationTransformAlgorithm<any, IRevertRevisionMutationParams>;
