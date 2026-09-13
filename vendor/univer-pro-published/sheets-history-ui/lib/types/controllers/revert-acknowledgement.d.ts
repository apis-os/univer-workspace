import type { ICollaborationEvent, IRevertRevisionMutationParams } from '@univerjs-pro/collaboration';
export declare function isRevertRevisionMutationParams(params: object | undefined): params is IRevertRevisionMutationParams;
export declare function isExpectedRevertAcknowledgement(event: ICollaborationEvent, expectedRevert: IRevertRevisionMutationParams): boolean;
