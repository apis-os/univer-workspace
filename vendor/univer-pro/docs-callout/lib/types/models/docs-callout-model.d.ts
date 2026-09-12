import type { IDocsCalloutConfig, IDocsCalloutMetadataResource } from '../common/type';
import { Disposable } from '@univerjs/core';
export declare class DocsCalloutModel extends Disposable {
    private readonly _resources;
    private readonly _change$;
    readonly change$: import("rxjs").Observable<{
        unitId: string;
        blockId?: string;
    }>;
    getCalloutConfig(unitId: string, blockId: string): IDocsCalloutConfig | undefined;
    setCalloutConfig(unitId: string, blockId: string, config: Partial<IDocsCalloutConfig>): void;
    removeCallout(unitId: string, blockId: string): void;
    serialize(unitId: string): IDocsCalloutMetadataResource;
    deserialize(unitId: string, resource: IDocsCalloutMetadataResource): void;
    removeUnit(unitId: string): void;
    dispose(): void;
    private _setResource;
}
