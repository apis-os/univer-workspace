export declare const BASES_DASHBOARD_PLUGIN_CONFIG_KEY = "bases-dashboard.config";
export declare const configSymbol: unique symbol;
export interface IUniverBaseDashboardConfig {
    /**
     * `true` registers the main-thread RPC side, `false` registers the Worker calculator,
     * and `undefined` keeps both sides in one thread for runtimes without a Worker.
     */
    notExecuteCalculation?: boolean;
}
export declare const defaultPluginConfig: IUniverBaseDashboardConfig;
