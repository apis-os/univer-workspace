import type { EmbedHostEntry } from '@univerjs-pro/embed';
import { UniverInstanceType } from '@univerjs/core';
export interface IEmbedHostChromePolicyInput {
    entry?: EmbedHostEntry | string;
    childType?: UniverInstanceType;
    hasMountedEmbedSlot?: boolean;
    hasMountedSlideWorkbench?: boolean;
    hasMountedSlidesFloatingObject?: boolean;
    hasMountedBaseWorkbench?: boolean;
}
export interface IEmbedHostChromePolicy {
    hideHostHeaderChrome: boolean;
    hideHostFormulaBar: boolean;
    hideSheetFooterControls: boolean;
    hideSlideInsertToolbar: boolean;
    hideGlobalBaseWorkbench: boolean;
    restoreEmbedBaseWorkbench: boolean;
}
export declare function getEmbedHostChromePolicy(input: IEmbedHostChromePolicyInput): IEmbedHostChromePolicy;
