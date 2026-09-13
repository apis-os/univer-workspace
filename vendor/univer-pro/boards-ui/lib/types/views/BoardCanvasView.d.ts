import { IBoardEmbedRuntimeFocusCoordinator } from '../services/board-embed-integration.service';
export declare function BoardCanvasView(props?: {
    fitOnMount?: boolean;
}): import("react").JSX.Element;
export declare function shouldFocusBoardForPointerEvent(boardUnitId: string | undefined, target: EventTarget | null, event: Event, embedRuntimeFocusCoordinator?: IBoardEmbedRuntimeFocusCoordinator): boolean;
