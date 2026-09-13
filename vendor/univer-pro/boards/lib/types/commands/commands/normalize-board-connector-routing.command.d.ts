import type { ICommand } from '@univerjs/core';
import type { IBoardRect } from '../../utils/board-container-transform.util';
export interface INormalizeBoardConnectorRoutingCommandParams {
    unitId: string;
    subUnitId: string;
    connectorIds: string[];
}
export interface INormalizeBoardConnectorRoutingResult {
    changedConnectorIds: string[];
    skippedElementIds: string[];
    affectedBounds: IBoardRect | null;
}
export declare const NormalizeBoardConnectorRoutingCommand: ICommand<INormalizeBoardConnectorRoutingCommandParams, INormalizeBoardConnectorRoutingResult | false>;
