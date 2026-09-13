export interface IBaseDocumentMouseDragHandlers {
    move: (event: MouseEvent) => void;
    finish: (event: MouseEvent) => void | Promise<void>;
    cancel: () => void;
}
export declare function startBaseDocumentMouseDrag(handlers: IBaseDocumentMouseDragHandlers): () => void;
