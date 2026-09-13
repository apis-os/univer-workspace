import type { ISlideEmbedRuntimeSession } from '../../services/slide-embed-runtime.service';
export declare function SlideHostThumbnailBar(): import("react").JSX.Element | null;
export declare function SlideHostEditorContent(): import("react").JSX.Element | null;
export declare function SlideHostFooter(): import("react").JSX.Element | null;
export declare function SlideHostShapeTextEditorContainer(): import("react").JSX.Element | null;
export declare function SlideHostEditorUIFloatingContainer(): import("react").JSX.Element | null;
export declare function isSlideEmbedChildUnitSession(sessions: readonly Pick<ISlideEmbedRuntimeSession, 'childType' | 'childUnitId'>[], slideUnitId: string | null | undefined, focusedUnitId?: string | null): boolean;
