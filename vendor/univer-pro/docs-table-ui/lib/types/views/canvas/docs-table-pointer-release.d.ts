export type DocsTablePointerReleaseEventType = 'blur' | 'mouseup' | 'pointercancel' | 'pointerup';
export type DocsTablePointerMoveEventType = 'pointermove';
export type DocsTablePointerEventType = DocsTablePointerMoveEventType | DocsTablePointerReleaseEventType;
export interface IDocsTablePointerReleaseEvent {
    event: Event;
    type: DocsTablePointerReleaseEventType;
}
export interface IDocsTablePointerMoveEvent {
    event: Event;
    type: DocsTablePointerMoveEventType;
}
export interface IDocsTablePointerReleaseTarget {
    addEventListener(type: DocsTablePointerEventType, listener: (event: Event) => void, options?: boolean): void;
    removeEventListener(type: DocsTablePointerEventType, listener: (event: Event) => void, options?: boolean): void;
}
export interface IDocsTablePointerReleaseDisposable {
    dispose(): void;
}
export declare function attachDocsTablePointerReleaseListeners(release: (event: IDocsTablePointerReleaseEvent) => void, target?: IDocsTablePointerReleaseTarget | null): IDocsTablePointerReleaseDisposable;
export declare function attachDocsTablePointerMoveListener(move: (event: IDocsTablePointerMoveEvent) => void, target?: IDocsTablePointerReleaseTarget | null): IDocsTablePointerReleaseDisposable;
