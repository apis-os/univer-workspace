import type { SnapshotService } from '@univerjs-pro/collaboration';
import type { CollaborationController } from '@univerjs-pro/collaboration-client';
import type { IEmbedResourceRefUnitProviderRegistration } from '@univerjs-pro/embed';
export declare const COLLABORATION_EMBED_RESOURCE_REF_PROVIDER_ID = "collaboration-univer-uri-provider";
export declare const COLLABORATION_EMBED_RESOURCE_REF_PROVIDER_PRIORITY = 100;
export declare const COLLABORATION_EMBED_UNSUPPORTED_UNIT_TYPE = "COLLABORATION_EMBED_UNSUPPORTED_UNIT_TYPE";
export declare function createCollaborationEmbedResourceRefProvider(snapshotService: SnapshotService, collaborationController: CollaborationController): IEmbedResourceRefUnitProviderRegistration;
