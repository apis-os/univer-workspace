import type { IDocsCodeConfig, IDocsCodeMetadataResource } from '../common/type';
import { Disposable } from '@univerjs/core';
export declare class DocsCodeModel extends Disposable {
    private readonly _resources;
    private readonly _change$;
    readonly change$: import("rxjs").Observable<{
        unitId: string;
        blockId?: string;
    }>;
    getCodeConfig(unitId: string, blockId: string): IDocsCodeConfig | undefined;
    setCodeConfig(unitId: string, blockId: string, config: Partial<IDocsCodeConfig>): void;
    removeCode(unitId: string, blockId: string): void;
    serialize(unitId: string): IDocsCodeMetadataResource;
    deserialize(unitId: string, resource: IDocsCodeMetadataResource): void;
    removeUnit(unitId: string): void;
    dispose(): void;
    private _setResource;
}
