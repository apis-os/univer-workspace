import type { DependencyOverride } from '@univerjs/core';
export declare const PLUGIN_CONFIG_KEY = "collaboration-client-ui.config";
export declare const configSymbol: unique symbol;
export interface IUniverCollaborationClientUIConfig {
    /**
     * Override internal modules with custom implementations.
     */
    override?: DependencyOverride;
    /**
     * Whether to enable collaboration UI pieces that depend on Docs UI.
     * Keep this enabled for Docs/Sheets, and disable it for non-Docs hosts
     * such as Bases that only need the browser collaboration services.
     *
     * @default true
     */
    enableDocumentCollaborationUI?: boolean;
    /**
     * Whether to enable frontend log.
     * @default false
     */
    enableFrontendLog?: boolean;
}
export declare const defaultPluginConfig: IUniverCollaborationClientUIConfig;
