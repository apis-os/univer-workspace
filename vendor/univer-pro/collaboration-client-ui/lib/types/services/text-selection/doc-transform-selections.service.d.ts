import type { IChangeset } from '@univerjs-pro/collaboration';
import type { ISelectionTransformTransaction } from '@univerjs-pro/collaboration-client';
import { ITransformService } from '@univerjs-pro/collaboration';
import { DocSelectionManagerService } from '@univerjs/docs';
export declare class DocTransformSelectionsService {
    private readonly _docSelectionManagerService;
    private readonly _transformService;
    constructor(_docSelectionManagerService: DocSelectionManagerService, _transformService: ITransformService);
    prepareTransformSelections(changeset: IChangeset): ISelectionTransformTransaction | null;
}
