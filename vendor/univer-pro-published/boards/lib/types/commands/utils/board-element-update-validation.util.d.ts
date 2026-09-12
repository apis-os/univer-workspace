import type { IMutationInfo } from '@univerjs/core';
import type { IBoardPageElement } from '../../board.type';
import type { IBoardElementData, IBoardElementService } from '../../services/board-element.service';
export declare function hasValidConnectorLabels(element: IBoardPageElement): boolean;
type IBoardElementMutationTransform = IBoardElementData['transform'];
interface IBoardElementUpdateValidationOptions {
    allowInactiveTarget?: boolean;
    allowLockedTarget?: boolean;
    allowPendingMembershipLockedCoverage?: boolean;
}
export declare function hasValidBoardElementLaneMembership(elementData: ReturnType<IBoardElementService['getElementData']>, element: IBoardPageElement): boolean;
export declare function hasBlockedBoardElementAncestor(elementData: ReturnType<IBoardElementService['getElementData']>, element: IBoardPageElement): boolean;
export declare function hasValidBoardElementContainerInvariants(element: IBoardPageElement, transform?: IBoardElementMutationTransform): boolean;
export declare function canApplyBoardElementUpdate(elementData: ReturnType<IBoardElementService['getElementData']>, currentElement: IBoardPageElement | undefined, element: IBoardPageElement, transform?: IBoardElementMutationTransform, options?: IBoardElementUpdateValidationOptions): boolean;
export declare function canApplyBoardElementUpdateMutations(elementData: ReturnType<IBoardElementService['getElementData']>, mutations: readonly IMutationInfo[]): boolean;
export declare function canApplyBoardElementMutationSequence(elementData: ReturnType<IBoardElementService['getElementData']>, mutations: readonly IMutationInfo[]): boolean;
export {};
