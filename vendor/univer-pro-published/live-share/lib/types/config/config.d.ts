import type { DependencyOverride } from '@univerjs/core';
export declare const LIVE_SHARE_PLUGIN_CONFIG_KEY = "live-share.config";
export declare const configSymbol: unique symbol;
export interface IUniverLiveShareConfig {
    override?: DependencyOverride;
}
export declare const defaultPluginConfig: IUniverLiveShareConfig;
