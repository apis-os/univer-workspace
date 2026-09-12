export declare function shouldRenderSlideInlineSpeakerNotes(editorEnabled: boolean, presentationActive: boolean): boolean;
export declare function shouldRenderSlidesEmbedPageHost(presentationActive: boolean, hasHostScopedEmbedPage: boolean): boolean;
export interface ISlideEditorContentProps {
    embedMode?: boolean;
}
/**
 * Main content area: canvas + speaker notes + presentation overlay.
 *
 * Registered to `BuiltInUIPart.CONTENT` by `SlideUIController`.
 * The Univer workbench already provides the outer LEFT_SIDEBAR slot.
 */
export declare function SlideEditorContent(props?: ISlideEditorContentProps): import("react").JSX.Element | null;
export declare function disposeSlidesEmbedPageHostSession(registration: {
    dispose: () => void;
} | undefined): void;
