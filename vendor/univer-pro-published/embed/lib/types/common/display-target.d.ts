import type { EmbedDisplayTarget } from '../types/embed';
import { UniverInstanceType } from '@univerjs/core';
export declare function normalizeEmbedDisplayTarget(childType: UniverInstanceType, target: EmbedDisplayTarget | undefined): EmbedDisplayTarget | undefined;
export declare function isEmbedDisplayTargetEqual(left: EmbedDisplayTarget | undefined, right: EmbedDisplayTarget | undefined): boolean;
