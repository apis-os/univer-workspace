import type { BoardConnectorRouting, IBoardConnectorStyle } from '@univerjs-pro/boards';
export type BoardConnectorRoutingStyleKey = 'roundedOrthogonal' | 'orthogonal' | 'straight' | 'curve';
export declare const BOARD_CONNECTOR_ROUTING_STYLE_STORAGE_KEY = "univer.boards.connector.routing-style";
export declare function normalizeBoardConnectorRoutingStyleKey(value: unknown): BoardConnectorRoutingStyleKey;
export declare function resolveBoardConnectorRoutingStyleKey(routing: BoardConnectorRouting | string | undefined, style?: Partial<IBoardConnectorStyle>): BoardConnectorRoutingStyleKey;
export declare function resolveBoardConnectorRoutingStyle(key: BoardConnectorRoutingStyleKey): {
    routing: BoardConnectorRouting;
    style: Partial<IBoardConnectorStyle>;
};
export declare function readBoardConnectorRoutingStylePreference(): BoardConnectorRoutingStyleKey;
export declare function writeBoardConnectorRoutingStylePreference(key: BoardConnectorRoutingStyleKey): void;
