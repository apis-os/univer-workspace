export declare const BOARD_MIND_MAP_DESCRIPTION_DIALOG_KEY = "board.mind-map.description-dialog";
export declare const BOARD_MIND_MAP_DESCRIPTION_DIALOG_ID = "board-mind-map-description-dialog";
export declare const BOARD_MIND_MAP_DESCRIPTION_DIALOG_WIDTH = 420;
export interface IBoardMindMapDescriptionDialogProps {
    unitId: string;
    subUnitId: string;
    nodeId: string;
    initialDescription?: string;
}
export declare function BoardMindMapDescriptionDialog(props: IBoardMindMapDescriptionDialogProps): import("react").JSX.Element;
