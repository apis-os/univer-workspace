import type { BoardShapeType } from '@univerjs-pro/boards';
export declare const BOARD_CONNECTOR_QUICK_SHAPE_MENU_KEY = "board.connector.quick-shape-menu";
interface IBoardConnectorQuickShapeMenuExtraProps {
    onSelect?: (shapeType: BoardShapeType | string) => void;
}
interface IBoardConnectorQuickShapeMenuProps {
    popup: {
        extraProps?: IBoardConnectorQuickShapeMenuExtraProps;
    };
}
export declare function BoardConnectorQuickShapeMenu({ popup }: IBoardConnectorQuickShapeMenuProps): import("react").JSX.Element;
export {};
