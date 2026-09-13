import { DataField, DataFieldManager, DateGroupField, FieldsCollection, GlobalConfig, PivotCallbackEnum, PivotCellStyleTypeEnum, PivotDataFieldDataTypeEnum, PivotDataFieldSortOperatorEnum, PivotDataFieldTypeEnum, PivotDateGroupFieldDateSystemEnum, PivotDateGroupFieldDateTypeEnum, PivotErrorTypeEnum, PivotFilterTypeEnum, PivotSubtotalTypeEnum, PivotTable, PivotTableChangeTypeEnum, PivotTableFiledAreaEnum, PivotTableValuePositionEnum, PivotView, PivotViewCellValueTypeEnum, createLabelField, createValueField, excelDateToUnixMilliseconds, generateHexNumber, getAutoDisplayName, isBaseGroupField, isDateGroupField, isDateGroupFieldJSON, isDateValue, isErrorValue, isPrefixValue, isValueFilterOperator, setDateSystem, setMaxLimitItemCount } from '@univerjs-pro/engine-pivot';
import { AsyncInterceptorManager, CellValueType, CommandType, CustomCommandExecutionError, DEFAULT_WORKSHEET_COLUMN_COUNT, DEFAULT_WORKSHEET_ROW_COUNT, DateSystem, DependentOn, Disposable, DisposableCollection, HorizontalAlign, ICommandService, IConfigService, ILogService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, InterceptorEffectEnum, InterceptorManager, LOCALE_META, LifecycleService, LocaleService, ObjectMatrix, Optional, Plugin, RANGE_TYPE, Range, Rectangle, Tools, UniverInstanceType, cellToRange, createAsyncInterceptorKey, createInterceptorKey, generateRandomId, getIntersectRange, merge, mergeWorksheetSnapshotWithDefault, numberToABC, numfmt, sequenceExecute } from '@univerjs/core';
import { ErrorType, GlobalComputingStatusService, IActiveDirtyManagerService, IFeatureCalculationManagerService, UniverFormulaEnginePlugin, serializeRangeWithSpreadsheet } from '@univerjs/engine-formula';
import { ClearSelectionAllCommand, ClearSelectionContentCommand, IExclusiveRangeService, INTERCEPTOR_POINT, InsertColMutation, InsertRowMutation, InsertSheetCommand, InsertSheetMutation, InsertSheetUndoMutationFactory, MoveRangeCommand, MoveRangeMutation, RefRangeService, RemoveColMutation, RemoveRowMutation, RemoveSheetCommand, RemoveSheetMutation, SetRangeValuesMutation, SetRangeValuesUndoMutationFactory, SetWorksheetActiveOperation, SetWorksheetColWidthMutation, SheetInterceptorService, SheetsSelectionsService, UniverSheetsPlugin, generateNullCell, getSheetCommandTarget } from '@univerjs/sheets';
import { BehaviorSubject, Subject, distinctUntilChanged, skip } from 'rxjs';
import { LS_CONFIG_KEY, ReleaseType, UniverLicensePlugin, getLicenseInfo, getSheetFeatureLimit, isFeatureAuthorizedWithinTime } from '@univerjs-pro/license';
import { FontCache, cjk, getFontStyleString } from '@univerjs/engine-render';
import { RemoveSheetsFilterMutation, SetSheetsFilterRangeMutation } from '@univerjs/sheets-filter';
import { DataSyncPrimaryController } from '@univerjs/rpc';
import { Bt, On, cn, q } from "./internal-core-endo.js";
import { er } from "./sheets-pivot-plugin-config-key.js";
import { It } from "./sheets-pivot-sheet-pivot-table-plugin.js";
let Z = class extends ox1100d5_1 {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461547, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461548, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461549, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461550, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461551, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461552) {
    super(), this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461547, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461548, this._univerInstanceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461549, this._resourceManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461550, this._configService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461551, this._localeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461552, q(this, "_model", new Map()), q(this, "_collectionConfigModel", new Map()), q(this, "_pivotTableRangeInfo", new Map()), q(this, '_pivotTableMatrixInfo', new Map()), q(this, "_configVersion$", new oxa98880()), q(this, '_pivotInitCompleted$', new oxa98880()), q(this, 'pivotInitCompleted$', this._pivotInitCompleted$["asObservable"]()), q(this, "_pivotConfigChange$", new oxa98880()), q(this, "pivotConfigChange$", this._pivotConfigChange$['asObservable']()), q(this, '_textInfo', {}), q(this, "configVersion$", this._configVersion$["asObservable"]()), this._initLocale(), this._initUnitDisposed();
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461553 = this._configService["getConfig"](er);
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461553 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461553.notExecuteFormula) === true && this._initSnapshot();
  }
  _initUnitDisposed() {
    this.disposeWithMe(this._univerInstanceService["getTypeOfUnitDisposed$"](ox2402ca_1.UNIVER_SHEET).subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46686 => {
      this.deleteUnitId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46686.getUnitId());
    }));
  }
  setPivotInitCompleted() {
    this._pivotInitCompleted$["next"](true);
  }
  _initLocale() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461561 = On(this._injector, Bt, '', {});
    this._textInfo = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461561, this.disposeWithMe(this._localeService["direction$"].pipe(ox4f2e90()).subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46688 => {
      this._commandService["executeCommand"](cn.id, {
        'textInfo': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461561,
        'direction': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46688
      }, {
        'onlyLocal': true
      });
    }));
  }
  getTextInfo() {
    return this._textInfo;
  }
  updateViewInfo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461563, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461564, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461565, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461566, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461567) {
    this.updatePivotTableMatrixInfo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461563, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461564, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461565, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461566), this.updatePivotTableRangeInfo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461563, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461564, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461565, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461567);
  }
  getPivotTableConfig(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461573, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461574, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461575) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461576;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461577 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461576 = this._model['get'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461573)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461576.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461574);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461577) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461577.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461575);
  }
  getTargetByPivotTableId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461583, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461584) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461585 = this._model['get'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461583);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461585) {
      for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469] of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461585.entries()) for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186] of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469.entries()) if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461584) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186.targetCellInfo;
    }
  }
  getTargetByPivotId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461589, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461590, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461591) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461592 = this.getPivotTableConfig(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461589, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461590, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461591);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461592 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461592.targetCellInfo;
  }
  getSubUnitPivotConfigs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461597, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461598) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461599;
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461599 = this._model['get'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461597)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461599.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461598);
  }
  updateConfigCache(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461603, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461604, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461605, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461606) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461607 = this._ensurePivotMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461603, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461604);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461606 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461607.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461605, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461606) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461607.delete(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461605), this._pivotConfigChange$['next']({
      'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461603,
      'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461604,
      'pivotTableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461605,
      'pivotTableConfig': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461606
    });
  }
  getCollection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461613, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461614) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461615;
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461615 = this._collectionConfigModel['get'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461613)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461615.collections[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461614];
  }
  updateCollectionConfig(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461619, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461620) {
    this._collectionConfigModel["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461619, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461620), this._configVersion$["next"](Math.random());
  }
  _ensurePivotMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461623, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461624) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461625 = this._model['get'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461623);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461625 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461625 = new Map(), this._model["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461623, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461625));
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461626 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461625.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461624);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461626 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461626 = new Map(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461625.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461624, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461626)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461626;
  }
  _ensurePivotTableRangeInfo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461631, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461632) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461633 = this._pivotTableRangeInfo["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461631);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461633 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461633 = new Map(), this._pivotTableRangeInfo["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461631, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461633));
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461634 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461633.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461632);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461634 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461634 = new Map(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461633.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461632, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461634)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461634;
  }
  _ensurePivotTableMatrixInfo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461639, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461640) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461641 = this._pivotTableMatrixInfo["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461639);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461641 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461641 = new Map(), this._pivotTableMatrixInfo["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461639, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461641));
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461642 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461641.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461640);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461642 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461642 = new Map(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461641.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461640, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461642)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461642;
  }
  updatePivotTableRangeInfo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461647, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461648, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461649, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461650) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461651;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461652 = this._ensurePivotTableRangeInfo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461647, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461648),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461653 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461651 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461652.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461649)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461651.oldRangeInfo;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461652.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461649, {
      'oldRangeInfo': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461653,
      'rangeInfo': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461650
    });
  }
  updatePivotTableMatrixInfo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461661, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461662, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461663, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461664) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461665;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461666 = this._ensurePivotTableMatrixInfo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461661, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461662),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461667 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461665 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461666.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461663)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461665.oldMatrix;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461666.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461663, {
      'oldMatrix': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461667,
      'matrix': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461664
    });
  }
  getPivotTableRangeInfo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461675, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461676, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461677) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461678;
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461678 = this._pivotTableRangeInfo["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461675)) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461678 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461678.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461676)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461678.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461677);
  }
  getPivotTableMatrixInfo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461683, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461684, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461685) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461686;
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461686 = this._pivotTableMatrixInfo["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461683)) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461686 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461686.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461684)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461686.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461685);
  }
  deleteUnitId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461691) {
    this._model["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461691), this._collectionConfigModel['delete'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461691);
  }
  _toJSON(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461693) {
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB81 = {
      'dataFieldManagerConfig': {},
      'pivotTableConfigs': {}
    };
    if (this._collectionConfigModel['get'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461693) && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB81.dataFieldManagerConfig[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461693] = this._collectionConfigModel["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461693)), this._model["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461693)) {
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB81.pivotTableConfigs[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461693] = {};
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46690 = this._model['get'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461693);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46690 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46690.size && [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46690.keys()].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46470 => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46690.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46470);
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471.size && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB81.pivotTableConfigs[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461693][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46470] = {}, [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471.keys()].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187 => {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187);
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188 && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB81.pivotTableConfigs[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461693][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46470][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188);
        }));
      });
    }
    return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB81;
  }
  _initSnapshot() {
    this.disposeWithMe(this._resourceManagerService["registerPluginResource"]({
      'toJson': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46691 => JSON.stringify(this._toJSON(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46691)),
      'parseJson': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46692 => ({}),
      'businesses': [ox2402ca_1.UNIVER_SHEET],
      'pluginName': It,
      'onLoad': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46693, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46694) => {},
      'onUnLoad': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46697 => {
        this.deleteUnitId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46697);
      }
    }));
  }
};
export { Z as SheetsPivotTableConfigModel };
