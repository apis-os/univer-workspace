import type { IBoardPageElement } from '../../board.type';
import type { BoardModel } from '../../models/board-model';
import type { IBoardElementBridgeData } from '../../services/board-element-bridge.service';
export declare function persistAddBoardElementToSnapshot(boardModel: BoardModel, bridgeData: IBoardElementBridgeData, insertIndex?: number): boolean;
export declare function persistUpdateBoardElementToSnapshot(boardModel: BoardModel, bridgeData: IBoardElementBridgeData, element: IBoardPageElement, transform?: IBoardElementBridgeData['transform']): boolean;
export declare function persistRemoveBoardElementFromSnapshot(boardModel: BoardModel, bridgeData: IBoardElementBridgeData): boolean;
export declare function persistRemoveBoardElementsFromSnapshot(boardModel: BoardModel, bridgeDataList: IBoardElementBridgeData[]): boolean;
export declare function persistSetBoardElementOrderToSnapshot(boardModel: BoardModel, subUnitId: string, elementIds: string[]): boolean;
