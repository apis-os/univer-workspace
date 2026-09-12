export type SlideTableKeyboardInput = {
    kind: 'text';
    text: string;
} | {
    kind: 'composition-start';
} | {
    kind: 'composition';
    text?: string;
};
export declare function isSlideTablePlainTextKeyEvent(event: Pick<KeyboardEvent, 'altKey' | 'ctrlKey' | 'key' | 'metaKey'>): boolean;
export declare function isSlideTableInsertTextInputType(inputType: string): boolean;
export declare function isSlideTableEditableTarget(target: EventTarget | null): boolean;
export declare function isSlideTableDocumentEditorTarget(target: EventTarget | null): boolean;
