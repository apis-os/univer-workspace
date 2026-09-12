import type { IBaseActiveEditorState, IBaseContextMenuState, IBaseToolbarPanelState } from './base-ui-state.types';
import { Disposable } from '@univerjs/core';
import { BehaviorSubject } from 'rxjs';
export interface IBaseUIPopupService {
    readonly toolbarPanel$: BehaviorSubject<IBaseToolbarPanelState | null>;
    readonly contextMenu$: BehaviorSubject<IBaseContextMenuState | null>;
    readonly activeEditor$: BehaviorSubject<IBaseActiveEditorState | null>;
    getToolbarPanel(): IBaseToolbarPanelState | null;
    openToolbarPanel(panel: IBaseToolbarPanelState): void;
    closeToolbarPanel(): void;
    getContextMenu(): IBaseContextMenuState | null;
    openContextMenu(menu: IBaseContextMenuState): void;
    closeContextMenu(): void;
    getActiveEditor(): IBaseActiveEditorState | null;
    openActiveEditor(editor: IBaseActiveEditorState): void;
    closeActiveEditor(): void;
}
export declare const IBaseUIPopupService: import("@wendellhu/redi").IdentifierDecorator<IBaseUIPopupService>;
export declare class BaseUIPopupService extends Disposable implements IBaseUIPopupService {
    private _toolbarPanel;
    private _contextMenu;
    private _activeEditor;
    readonly toolbarPanel$: BehaviorSubject<IBaseToolbarPanelState | null>;
    readonly contextMenu$: BehaviorSubject<IBaseContextMenuState | null>;
    readonly activeEditor$: BehaviorSubject<IBaseActiveEditorState | null>;
    getToolbarPanel(): IBaseToolbarPanelState | null;
    openToolbarPanel(panel: IBaseToolbarPanelState): void;
    closeToolbarPanel(): void;
    getContextMenu(): IBaseContextMenuState | null;
    openContextMenu(menu: IBaseContextMenuState): void;
    closeContextMenu(): void;
    getActiveEditor(): IBaseActiveEditorState | null;
    openActiveEditor(editor: IBaseActiveEditorState): void;
    closeActiveEditor(): void;
}
