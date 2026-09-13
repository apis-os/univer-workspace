import type { IDocsColumnMoveRange, IDocsColumnNormalizeEmptyColumnsResult } from '@univerjs-pro/docs-column';
import type { IDocumentData, IUniverInstanceService } from '@univerjs/core';
interface IDocsColumnBlockMoveContext {
    sourceRange: IDocsColumnMoveRange;
    targetOffset: number;
    unitId: string;
}
interface IDocsColumnBlockMoveTransformContext extends IDocsColumnBlockMoveContext {
    previousDocumentData: IDocumentData;
    result: IDocsColumnNormalizeEmptyColumnsResult;
}
type DocsColumnBlockMoveValidator = (context: IDocsColumnBlockMoveContext) => boolean;
type DocsColumnBlockMoveTransformer = (context: IDocsColumnBlockMoveTransformContext) => IDocsColumnNormalizeEmptyColumnsResult;
export declare function createDocColumnBlockMoveValidator(univerInstanceService: IUniverInstanceService): DocsColumnBlockMoveValidator;
export declare function createDocColumnBlockMoveTransformer(): DocsColumnBlockMoveTransformer;
export {};
