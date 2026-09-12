import type { MouseEvent, PointerEvent } from 'react';
export declare function shouldKeepFloatingToolbarMouseDownDefault(target: EventTarget | null): boolean;
export declare function preventFloatingToolbarPanelBlur(event: MouseEvent<HTMLElement> | PointerEvent<HTMLElement>): void;
export declare function keepFloatingToolbarPanelInteraction(event: MouseEvent<HTMLElement> | PointerEvent<HTMLElement>): void;
