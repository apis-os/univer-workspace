import type { IDocsTableTrigger } from './docs-table-trigger-model';
export interface IDocsTableTriggerDrawContext {
    save(): void;
    restore(): void;
    beginPath(): void;
    roundRect?(x: number, y: number, width: number, height: number, radii?: number): void;
    rect(x: number, y: number, width: number, height: number): void;
    fill(): void;
    stroke(): void;
    fillStyle: string;
    strokeStyle: string;
    lineWidth: number;
}
export declare function drawDocsTableTrigger(ctx: IDocsTableTriggerDrawContext, trigger: IDocsTableTrigger): void;
