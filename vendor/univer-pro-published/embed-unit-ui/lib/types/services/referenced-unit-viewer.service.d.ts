import type { IReferencedUnitDescriptor, IResourceRef } from '@univerjs-pro/embed';
import type { BaseSelection, IDisposable, IRange } from '@univerjs/core';
import type { ISelectionWithStyle } from '@univerjs/sheets';
import type { Observable } from 'rxjs';
import { IReferencedUnitCatalogService } from '@univerjs-pro/embed';
import { IConfigService, LocaleService, ThemeService } from '@univerjs/core';
export declare enum ReferencedUnitViewerStatus {
    Loading = "loading",
    Ready = "ready",
    Unavailable = "unavailable"
}
export declare enum ReferencedUnitSelectionKind {
    SheetRange = "sheet-range",
    BaseGrid = "base-grid"
}
export interface IReferencedUnitSheetSelection {
    kind: ReferencedUnitSelectionKind.SheetRange;
    ranges: readonly IRange[];
    unit: IReferencedUnitDescriptor;
    sheetId: string;
    sheetName: string;
}
export interface IReferencedUnitBaseSelection {
    kind: ReferencedUnitSelectionKind.BaseGrid;
    unit: IReferencedUnitDescriptor;
    selection: BaseSelection;
    tableId: string;
    viewId: string;
}
export type IReferencedUnitSelection = IReferencedUnitSheetSelection | IReferencedUnitBaseSelection;
export type IReferencedUnitSelectionDecoration = {
    kind: ReferencedUnitSelectionKind.SheetRange;
    unit: IReferencedUnitDescriptor;
    selections: readonly ISelectionWithStyle[];
    sheetId: string;
    sheetName: string;
} | {
    kind: ReferencedUnitSelectionKind.BaseGrid;
    unit: IReferencedUnitDescriptor;
    selection: BaseSelection;
};
export interface IReferencedUnitViewerState {
    activeUnit: IReferencedUnitDescriptor | null;
    error?: unknown;
    units: readonly IReferencedUnitDescriptor[];
    status: ReferencedUnitViewerStatus;
}
export interface IReferencedUnitViewerSessionOptions {
    initialRef?: IResourceRef;
    initialRefRequired?: boolean;
}
export interface IReferencedUnitViewerSession extends IDisposable {
    readonly selection$: Observable<IReferencedUnitSelection>;
    readonly state$: Observable<IReferencedUnitViewerState>;
    activateUnit(unit: IReferencedUnitDescriptor): Promise<void>;
    getState(): IReferencedUnitViewerState;
    mount(container: HTMLElement): void;
    refresh(): Promise<void>;
    setDecoration(decoration: IReferencedUnitSelectionDecoration | null): void;
    unmount(container: HTMLElement): void;
}
export interface IReferencedUnitViewerService {
    createSession(options?: IReferencedUnitViewerSessionOptions): IReferencedUnitViewerSession;
}
export declare const IReferencedUnitViewerService: import("@wendellhu/redi").IdentifierDecorator<IReferencedUnitViewerService>;
export declare class ReferencedUnitViewerService implements IReferencedUnitViewerService {
    private readonly _catalog;
    private readonly _configService;
    private readonly _localeService;
    private readonly _themeService;
    constructor(_catalog: IReferencedUnitCatalogService, _configService: IConfigService, _localeService: LocaleService, _themeService: ThemeService);
    createSession(options?: IReferencedUnitViewerSessionOptions): IReferencedUnitViewerSession;
}
