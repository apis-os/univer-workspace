import type { ICommand } from '@univerjs/core';
import type { ISheetDrawingPlacementInput } from '@univerjs/sheets-drawing';
import type { IEmbedBoundsUpdateContext, IEmbedDisplayTargetUpdateContext, IEmbedHostCopyContext, IEmbedHostCreateContext, IEmbedHostRemoveContext } from '../../services/embed-host-lifecycle.service';
import type { IEmbedDescriptor } from '../../types/embed';
export declare const CreateEmbedCommand: ICommand<IEmbedHostCreateContext, IEmbedDescriptor | false>;
export declare const CopyEmbedCommand: ICommand<IEmbedHostCopyContext, IEmbedDescriptor | false>;
export declare const RemoveEmbedCommand: ICommand<IEmbedHostRemoveContext>;
export declare const SetEmbedDisplayTargetCommand: ICommand<IEmbedDisplayTargetUpdateContext>;
export declare const SetEmbedBoundsCommand: ICommand<IEmbedBoundsUpdateContext>;
export interface ISetEmbedSheetPlacementCommandParams {
    hostUnitId: string;
    embedId: string;
    placement: ISheetDrawingPlacementInput;
}
export declare const SetEmbedSheetPlacementCommand: ICommand<ISetEmbedSheetPlacementCommandParams>;
