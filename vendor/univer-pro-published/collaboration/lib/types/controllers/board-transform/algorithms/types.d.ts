import type { IMutationInfo } from '@univerjs/core';
export declare function getBoardUnitId(mutation: IMutationInfo): string | undefined;
export declare function getBoardPageId(mutation: IMutationInfo): string | undefined;
export declare function getBoardElementId(mutation: IMutationInfo): string | undefined;
export declare function getBoardElementIds(mutation: IMutationInfo): string[];
export declare function sameBoardUnit(m1: IMutationInfo, m2: IMutationInfo): boolean;
export declare function sameBoardPage(m1: IMutationInfo, m2: IMutationInfo): boolean;
export declare function boardElementIntersects(m1: IMutationInfo, m2: IMutationInfo): boolean;
