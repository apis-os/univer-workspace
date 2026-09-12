import type { IEmbedDescriptor, IEmbedDescriptorMaterializeContext, IEmbedHostAnchorRecord } from '@univerjs-pro/embed';
import type { ICreateUnitOptions } from '@univerjs/core';
import { EmbedHostAdapterRegistryService, EmbedHostAnchorModelService, EmbedModelService, EmbedReferencedUnitMaterializeService } from '@univerjs-pro/embed';
export interface IEmbedHostRestoreContext {
    descriptor: IEmbedDescriptor;
    hostAnchorRecord?: IEmbedHostAnchorRecord;
    hostContext?: Record<string, unknown>;
    createOptions?: ICreateUnitOptions;
}
export declare class EmbedHostRestoreService {
    private readonly _modelService;
    private readonly _materializeService;
    private readonly _hostAdapterRegistry;
    private readonly _anchorModelService;
    constructor(_modelService: EmbedModelService, _materializeService: EmbedReferencedUnitMaterializeService, _hostAdapterRegistry: EmbedHostAdapterRegistryService, _anchorModelService: EmbedHostAnchorModelService);
    materializeDescriptor(context: IEmbedDescriptorMaterializeContext): Promise<IEmbedDescriptor>;
    restoreEmbed(context: IEmbedHostRestoreContext): Promise<IEmbedDescriptor>;
}
