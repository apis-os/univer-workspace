import type { IUniverCollaborationClientConfig } from '@univerjs-pro/collaboration-client';
import type { IUniverEditHistoryUIConfig } from '@univerjs-pro/edit-history-ui';
import { UniverEditHistoryUIPlugin } from '@univerjs-pro/edit-history-ui';
import { IConfigService, ILogService, Injector, UniverInstanceType } from '@univerjs/core';
export interface IUniverBasesHistoryViewerConfig extends IUniverEditHistoryUIConfig {
    collaborationClientConfig?: IUniverCollaborationClientConfig;
}
export declare class UniverBasesHistoryViewerPlugin extends UniverEditHistoryUIPlugin {
    protected readonly _injector: Injector;
    static pluginName: string;
    static packageName: string;
    static version: string;
    static type: UniverInstanceType;
    constructor(viewerConfig: IUniverBasesHistoryViewerConfig, _injector: Injector, configService: IConfigService, logService: ILogService);
    onStarting(): void;
}
