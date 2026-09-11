import type { IMutationInfo } from '@univerjs/core';
export declare function getSlideUnitId(mutation: IMutationInfo): string | undefined;
export declare function getSlidePageId(mutation: IMutationInfo): string | undefined;
export declare function getSlideDrawingId(mutation: IMutationInfo): string | undefined;
export declare function getSlideDrawingIds(mutation: IMutationInfo): string[];
export declare function sameSlideUnit(m1: IMutationInfo, m2: IMutationInfo): boolean;
export declare function sameSlidePage(m1: IMutationInfo, m2: IMutationInfo): boolean;
export declare function slideDrawingIntersects(m1: IMutationInfo, m2: IMutationInfo): boolean;
