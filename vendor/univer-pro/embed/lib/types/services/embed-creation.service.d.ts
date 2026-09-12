import type { IEmbedCreateContext, IEmbedCreateResult, IEmbedDescriptor } from '../types/embed';
import { EmbedCapabilityRegistryService } from './embed-capability-registry.service';
import { EmbedModelService } from './embed-model.service';
import { EmbedNestedGuardService } from './embed-nested-guard.service';
import { EmbedSourceResolverService } from './embed-source-resolver.service';
export declare class EmbedCreationService {
    private readonly _model;
    private readonly _capabilityRegistry;
    private readonly _sourceResolver;
    private readonly _nestedGuard;
    constructor(_model: EmbedModelService, _capabilityRegistry: EmbedCapabilityRegistryService, _sourceResolver: EmbedSourceResolverService, _nestedGuard: EmbedNestedGuardService);
    prepareCreateEmbed(context: IEmbedCreateContext): IEmbedCreateResult;
    createEmbed(context: IEmbedCreateContext): IEmbedCreateResult;
    prepareCopyEmbed(params: {
        hostUnitId: string;
        sourceEmbedId: string;
        nextEmbedId: string;
        nextHostAnchorId: string;
    }): IEmbedDescriptor;
    copyEmbed(params: {
        hostUnitId: string;
        sourceEmbedId: string;
        nextEmbedId: string;
        nextHostAnchorId: string;
    }): IEmbedDescriptor;
    removeEmbed(params: {
        hostUnitId: string;
        embedId: string;
    }): void;
}
