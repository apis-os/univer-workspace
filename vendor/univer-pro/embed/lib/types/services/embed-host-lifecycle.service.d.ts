import type { IGroupBaseBound } from '@univerjs/core';
import type { EmbedDisplayTarget, IEmbedCreateContext, IEmbedDescriptor } from '../types/embed';
import { ICommandService, IUndoRedoService, IUniverInstanceService } from '@univerjs/core';
import { EmbedCreationService } from './embed-creation.service';
import { EmbedHostAdapterRegistryService } from './embed-host-adapter-registry.service';
import { EmbedModelService } from './embed-model.service';
export interface IEmbedHostCreateContext extends Omit<IEmbedCreateContext, 'hostAnchorId'> {
    requestedHostAnchorId?: string;
    hostContext?: Record<string, unknown>;
}
export interface IEmbedHostCopyContext {
    hostUnitId: string;
    sourceEmbedId: string;
    nextEmbedId: string;
    requestedHostAnchorId?: string;
    hostContext?: Record<string, unknown>;
}
export interface IEmbedHostRemoveContext {
    hostUnitId: string;
    embedId: string;
}
export interface IEmbedDisplayTargetUpdateContext {
    hostUnitId: string;
    embedId: string;
    displayTarget?: EmbedDisplayTarget;
}
export interface IEmbedBoundsUpdateContext {
    hostUnitId: string;
    embedId: string;
    bounds: IGroupBaseBound;
}
export declare class EmbedHostLifecycleService {
    private readonly _creationService;
    private readonly _modelService;
    private readonly _univerInstanceService;
    private readonly _hostAdapterRegistry;
    private readonly _commandService;
    private readonly _undoRedoService;
    constructor(_creationService: EmbedCreationService, _modelService: EmbedModelService, _univerInstanceService: IUniverInstanceService, _hostAdapterRegistry: EmbedHostAdapterRegistryService, _commandService: ICommandService, _undoRedoService: IUndoRedoService);
    createEmbed(context: IEmbedHostCreateContext): IEmbedDescriptor;
    copyEmbed(context: IEmbedHostCopyContext): IEmbedDescriptor;
    removeEmbed(context: IEmbedHostRemoveContext): boolean;
    setDisplayTarget(context: IEmbedDisplayTargetUpdateContext): boolean;
    setBounds(context: IEmbedBoundsUpdateContext): boolean;
    private _executeAndPushUndoRedo;
    private _getDescriptor;
    private _normalizeHostContext;
    private _toSetDescriptorMutation;
    private _toSoftDeleteDescriptorMutation;
    private _afterCreateAnchor;
    private _afterRemoveAnchor;
}
