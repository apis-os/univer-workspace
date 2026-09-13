import type { IReferencedUnitDescriptor, ReferencedUnitSnapshot } from '@univerjs-pro/embed';
import type { BaseDataModel, BaseSelection, IConfigService, IDisposable, LocaleService, ThemeService } from '@univerjs/core';
import type { Observable } from 'rxjs';
import type { IReferencedUnitSelection, IReferencedUnitSelectionDecoration } from './referenced-unit-viewer.service';
import { Disposable, Workbook } from '@univerjs/core';
type ReferencedUnitViewerUnit = Workbook | BaseDataModel;
export declare class ReferencedUnitViewerRuntime extends Disposable {
    private readonly _configService;
    private readonly _localeService;
    private readonly _themeService;
    private readonly _onSelection;
    private _univer;
    private _container;
    private _activeUnitId;
    private _activeUnit;
    private _isApplyingDecoration;
    private _selectionDisposables;
    constructor(_configService: IConfigService, _localeService: LocaleService, _themeService: ThemeService, _onSelection: (selection: IReferencedUnitSelection) => void);
    mount(container: HTMLElement): void;
    unmount(container: HTMLElement): void;
    open(descriptor: IReferencedUnitDescriptor, snapshot: ReferencedUnitSnapshot): Promise<ReferencedUnitViewerUnit | null>;
    setDecoration(decoration: IReferencedUnitSelectionDecoration | null): void;
    dispose(): void;
    private _disposeUniver;
    private _observeSheetSelection;
    private _observeBaseSelection;
    private _makeBaseSnapshotReadOnly;
    private _setBasePermissionsReadOnly;
    private _createUniver;
}
export declare function observeCommittedBaseSelection(state$: Observable<{
    selection?: BaseSelection | null;
}>, eventTarget: EventTarget, isApplyingDecoration: () => boolean, onSelection: (selection: BaseSelection) => void): IDisposable;
export {};
