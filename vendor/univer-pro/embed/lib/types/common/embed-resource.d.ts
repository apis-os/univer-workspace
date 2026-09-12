import type { IResources } from '@univerjs/core';
import type { IEmbedResource } from '../types/embed';
export declare function createEmptyEmbedResource(): IEmbedResource;
export declare function cloneEmbedResource(resource: IEmbedResource | undefined | null): IEmbedResource;
export declare function createEmbedResourceEntry(resource: IEmbedResource): IResources[number];
export declare function getEmbedResourceEntry(resources: IResources | undefined | null): IResources[number] | undefined;
export declare function parseEmbedResourceEntry(entry: IResources[number] | undefined | null): IEmbedResource | undefined;
export declare function upsertEmbedResourceEntry(resources: IResources | undefined | null, resource: IEmbedResource): IResources;
