import type { IBoardElementFindResult, IBoardSettings, IBoardViewportPoint } from '@univerjs-pro/boards-ui';
import { BoardInteractionMode } from '@univerjs-pro/boards-ui';
declare module '@univerjs/core/facade' {
    interface FEnum {
        /** Local viewing/editing interaction, independent of document permissions. */
        readonly BoardInteractionMode: typeof BoardInteractionMode;
    }
}
declare module '@univerjs-pro/boards/facade' {
    interface FBoard {
        /** Local viewing policy. Does not modify permissions, snapshots, or Facade write capabilities. */
        getInteractionMode(): BoardInteractionMode;
        /** Commit active text editing and switch local interaction mode. Never grants Edit permission. */
        setInteractionMode(mode: BoardInteractionMode): Promise<boolean>;
        /** Returns the effective settings for the current Board UI runtime. */
        getSettings(): Required<IBoardSettings>;
        /** Updates local settings for the current Board UI runtime. */
        setSettings(settings: Partial<IBoardSettings>): boolean;
        /** Returns whether the object-list panel is open for the active Board UI. */
        getObjectListPanelOpen(): boolean;
        /** Opens or closes the object-list panel after focusing this Board. */
        setObjectListPanelOpen(open: boolean): boolean;
        /** Searches the active page using the same text index as the top-right Find panel. */
        findElementsByText(query: string): IBoardElementFindResult[];
        /** Selects an element and pans the viewport so its center reaches the requested viewport point. */
        focusElement(elementId: string, viewportPoint: IBoardViewportPoint): boolean;
        /** Returns the element center in the current Board viewport coordinate system. */
        getElementViewportPoint(elementId: string): IBoardViewportPoint | null;
    }
}
