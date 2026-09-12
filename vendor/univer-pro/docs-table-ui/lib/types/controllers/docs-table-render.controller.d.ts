import type { IDocsTableTrigger, IDocsTableTriggerModelInput } from '../views/canvas/docs-table-trigger-model';
import { Disposable } from '@univerjs/core';
export declare class DocsTableRenderController extends Disposable {
    private _triggers;
    private readonly _triggerChange$;
    readonly triggerChange$: import("rxjs").Observable<IDocsTableTrigger[]>;
    updateTriggers(input: IDocsTableTriggerModelInput | null): void;
    getTriggers(): IDocsTableTrigger[];
    hitTest(x: number, y: number): IDocsTableTrigger | null;
    dispose(): void;
}
