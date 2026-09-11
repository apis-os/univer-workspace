import type { MenuConfig } from '@univerjs/ui';
export declare const SHEETS_HISTORY_UI_PLUGIN_CONFIG_KEY = "sheets-history-ui.config";
export declare const configSymbol: unique symbol;
export declare const SHEETS_HISTORY_PANEL_COMPONENT = "history-panel";
export interface IUniverSheetsHistoryUIConfig {
    menu?: MenuConfig;
    /**
     * The DOM id of the host Univer container where the history viewer is mounted.
     * If omitted, the container configured for the host Univer UI plugin is used.
     */
    univerContainerId?: string;
    /**
     * Base URL of the history service, shared by list, creator and changeset requests.
     * @default '/universer-api/history'
     */
    historyServerUrl?: string;
    /**
     * The component key used to render the history version list in the sidebar.
     * @default 'history-panel'
     */
    historyPanelComponentKey?: string;
    /**
     * Whether to hide the history viewer header.
     * @default false
     */
    historyPanelHidden?: boolean;
    /**
     * Whether to show filters for AI-assisted and collaborator edits.
     * @default false
     */
    historyAIassistantEnabled?: boolean;
    /**
     * The Web Worker used in edit history.
     * If the workerURL is provided and workerURL is a Worker instance, it will be destroyed when history is closed.
     * So a new Worker instance need to be created when history is opened again. For example:
     * ```ts
     * import { SHEETS_HISTORY_UI_PLUGIN_CONFIG_KEY, ToggleEditHistoryOperation } from '@univerjs-pro/sheets-history-ui';
     *
     * univerAPI.addEvent(univerAPI.Event.BeforeCommandExecute, (event) => {
     *   if (event.id === ToggleEditHistoryOperation.id) {
     *     const workerURL = new Worker(new URL('./worker.ts', import.meta.url));
     *     const configService = univer.__getInjector().get(IConfigService);
     *     configService.setConfig(SHEETS_HISTORY_UI_PLUGIN_CONFIG_KEY, {
     *       workerURL,
     *     });
     *   }
     * });
     *
     * If the workerURL is a string or URL, no additional processing is required.
     * ```
     */
    workerURL?: string | URL | Worker;
}
export declare const defaultPluginConfig: IUniverSheetsHistoryUIConfig;
export declare function resolveHistoryServerUrl(config?: IUniverSheetsHistoryUIConfig): string;
