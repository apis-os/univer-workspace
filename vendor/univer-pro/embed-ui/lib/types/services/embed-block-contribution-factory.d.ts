import type { Injector, UniverInstanceType } from '@univerjs/core';
import type { IEmbedBlockContribution } from '../types/embed-ui';
import { EmbedHostChromeMode } from '../types/embed-ui';
export interface ICreateEmbedRibbonBlockContributionOptions {
    childType: UniverInstanceType;
    productName: string;
    menuSchema?: unknown;
}
export interface ICreateEmbedNoHeaderBlockContributionOptions {
    childType: UniverInstanceType;
    productName: string;
    hostChromeMode?: EmbedHostChromeMode.TITLE_ONLY | EmbedHostChromeMode.NONE;
    hostHeaderMode?: 'none' | 'placeholder';
}
export declare function createEmbedRibbonBlockContribution(options: ICreateEmbedRibbonBlockContributionOptions): IEmbedBlockContribution;
export declare function resolveEmbedProductRibbonMenuSchema(injector: Pick<Injector, 'get' | 'has'> | unknown, childType: UniverInstanceType, fallbackMenuSchema?: unknown): unknown;
export declare function createEmbedNoHeaderBlockContribution(options: ICreateEmbedNoHeaderBlockContributionOptions): IEmbedBlockContribution;
