import type { IGroupBaseBound } from '@univerjs/core';
import type { IDrawingManagerService } from '@univerjs/drawing';
import type { SheetSkeletonService } from '@univerjs/sheets';
import type { ISheetDrawingPlacementInput, ISheetDrawingService } from '@univerjs/sheets-drawing';
import type { EmbedHostAnchorModelService } from '../../services/embed-host-anchor-model.service';
import type { IEmbedHostAdapterContribution, IEmbedHostAnchorContext, IEmbedHostMutationPlan } from '../../types/host-adapter';
export declare function createSheetsFloatingObjectHostAdapterContribution(anchorModelService?: EmbedHostAnchorModelService, sheetDrawingService?: ISheetDrawingService | (() => ISheetDrawingService | undefined), drawingManagerService?: IDrawingManagerService | (() => IDrawingManagerService | undefined), sheetSkeletonService?: SheetSkeletonService | (() => SheetSkeletonService | undefined)): IEmbedHostAdapterContribution;
export declare function createSheetsFloatingObjectPlacementUpdatePlan(context: IEmbedHostAnchorContext & {
    hostAnchorId: string;
    bounds?: IGroupBaseBound;
}, placement: ISheetDrawingPlacementInput, anchorModelService: EmbedHostAnchorModelService | undefined, sheetDrawingService: ISheetDrawingService, sheetSkeletonService: SheetSkeletonService): IEmbedHostMutationPlan;
