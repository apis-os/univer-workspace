import { DataField, DataFieldManager, DateGroupField, FieldsCollection, GlobalConfig, PivotCallbackEnum, PivotCellStyleTypeEnum, PivotDataFieldDataTypeEnum, PivotDataFieldSortOperatorEnum, PivotDataFieldTypeEnum, PivotDateGroupFieldDateSystemEnum, PivotDateGroupFieldDateTypeEnum, PivotErrorTypeEnum, PivotFilterTypeEnum, PivotSubtotalTypeEnum, PivotTable, PivotTableChangeTypeEnum, PivotTableFiledAreaEnum, PivotTableValuePositionEnum, PivotView, PivotViewCellValueTypeEnum, createLabelField, createValueField, excelDateToUnixMilliseconds, generateHexNumber, getAutoDisplayName, isBaseGroupField, isDateGroupField, isDateGroupFieldJSON, isDateValue, isErrorValue, isPrefixValue, isValueFilterOperator, setDateSystem, setMaxLimitItemCount } from '@univerjs-pro/engine-pivot';
import { AsyncInterceptorManager, CellValueType, CommandType, CustomCommandExecutionError, DEFAULT_WORKSHEET_COLUMN_COUNT, DEFAULT_WORKSHEET_ROW_COUNT, DateSystem, DependentOn, Disposable, DisposableCollection, HorizontalAlign, ICommandService, IConfigService, ILogService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, InterceptorEffectEnum, InterceptorManager, LOCALE_META, LifecycleService, LocaleService, ObjectMatrix, Optional, Plugin, RANGE_TYPE, Range, Rectangle, Tools, UniverInstanceType, cellToRange, createAsyncInterceptorKey, createInterceptorKey, generateRandomId, getIntersectRange, merge, mergeWorksheetSnapshotWithDefault, numberToABC, numfmt, sequenceExecute } from '@univerjs/core';
import { ErrorType, GlobalComputingStatusService, IActiveDirtyManagerService, IFeatureCalculationManagerService, UniverFormulaEnginePlugin, serializeRangeWithSpreadsheet } from '@univerjs/engine-formula';
import { ClearSelectionAllCommand, ClearSelectionContentCommand, IExclusiveRangeService, INTERCEPTOR_POINT, InsertColMutation, InsertRowMutation, InsertSheetCommand, InsertSheetMutation, InsertSheetUndoMutationFactory, MoveRangeCommand, MoveRangeMutation, RefRangeService, RemoveColMutation, RemoveRowMutation, RemoveSheetCommand, RemoveSheetMutation, SetRangeValuesMutation, SetRangeValuesUndoMutationFactory, SetWorksheetActiveOperation, SetWorksheetColWidthMutation, SheetInterceptorService, SheetsSelectionsService, UniverSheetsPlugin, generateNullCell, getSheetCommandTarget } from '@univerjs/sheets';
import { BehaviorSubject, Subject, distinctUntilChanged, skip } from 'rxjs';
import { LS_CONFIG_KEY, ReleaseType, UniverLicensePlugin, getLicenseInfo, getSheetFeatureLimit, isFeatureAuthorizedWithinTime } from '@univerjs-pro/license';
import { FontCache, cjk, getFontStyleString } from '@univerjs/engine-render';
import { RemoveSheetsFilterMutation, SetSheetsFilterRangeMutation } from '@univerjs/sheets-filter';
import { DataSyncPrimaryController } from '@univerjs/rpc';
import { Y } from "./sheets-pivot-rpcservice.js";
import { Q } from "./sheets-pivot-table.js";
import { K, Ln, Qn, Rr, W, X, ar, fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F, fn_L1_core_endo_routine_pure_ON_heap_nothrow_sig8CF1, ir } from "./internal-core-endo.js";
import { Z } from "./sheets-pivot-table-config-model.js";
import { nr } from "./sheets-pivot-table-adaptor-model.js";
import { Ur, Vr } from "./sheets-pivot-add-pivot-field.js";
import { wn } from "./sheets-pivot-pivot-sheet-cell.js";
import { Kr } from "./sheets-pivot-pivot-date-group-context.js";
import { qr } from "./sheets-pivot-pivot-date-group-type-disabled.js";
const Zr = {
    'type': ox3c5662.COMMAND,
    'id': "sheet.command.move-pivot-field",
    async handler(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463691, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463692) {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463692) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463693 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463691.get(ox53f8d0),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463694 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463691.get(Y),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463695 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463691.get(ox10ebc2),
        {
          pivotTableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463696,
          fieldId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463697,
          area: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463698,
          index: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463699,
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463700,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463701
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463692,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463702 = (await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463694.getPivotDisplayConfig({
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463700,
          'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463701,
          'pivotTableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463696,
          'params': {
            'type': "movePivotField",
            'movePivotField': {
              'fieldId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463697,
              'area': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463698,
              'index': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463699
            }
          }
        })).result["movePivotField"];
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463702) return false;
      let {
          changesets: cellToRangeLocal,
          view: createAsyncInterceptorKeyLocal,
          isEmpty: createInterceptorKeyLocal,
          pivotTableConfig: generateRandomIdLocal
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463702,
        getIntersectRangeLocal = generateRandomIdLocal.targetCellInfo,
        mergeLocal = new oxd30f7d();
      mergeLocal.formJSON(ox1164b3);
      let univerInstanceType = {
        'cellInfo': getIntersectRangeLocal,
        'view': mergeLocal,
        'isEmpty': oxa8f7e5
      };
      if (!(await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463691.get(Q).asyncInterceptor["fetchThroughAsyncInterceptors"](K)(true, univerInstanceType))) return false;
      let rANGE_TYPE = Ln(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463691, mergeLocal, getIntersectRangeLocal, oxa8f7e5),
        range = Rr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463691, univerInstanceType),
        {
          redos: rectangle,
          undos: tools
        } = fn_L1_core_endo_routine_pure_ON_heap_nothrow_sig8CF1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463693, {
          'pivotTableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463696,
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463700,
          'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463701
        }, ox5c787a);
      return ox448739([...rANGE_TYPE.redos, ...range.redos, ...ox139efb], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463693).result ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463695.pushUndoRedo({
        'unitID': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463700,
        'redoMutations': [...rANGE_TYPE.redos, ...range.redos, ...ox139efb],
        'undoMutations': [...rANGE_TYPE.undos, ...range.undos, ...ox28d4e9]
      }), true) : false;
    }
  },
  Qr = {
    'type': ox3c5662.MUTATION,
    'id': "sheet.mutation.set-pivot-position",
    'handler'(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463715, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463716) {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463716) return false;
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463715.get(ox455214).getConfig('SHEET_PIVOT_IN_MAIN_THREAD')) return true;
      let {
          pivotTableId: lifecycleService,
          targetCellPosition: localeService,
          unitId: objectMatrix,
          subUnitId: optional
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463716,
        plugin = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463715.get(X);
      if (!plugin.getPivotTableInstance(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463716.pivotTableId)) return false;
      let lOCALE_META = plugin.getTargetByPivotId(ox22a4e7);
      if (!lOCALE_META) return false;
      let interceptorManager = plugin.getCollection(lOCALE_META.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463716.pivotTableId);
      if (!interceptorManager) return false;
      let interceptorEffectEnum = plugin.getPivotTableConfig(lOCALE_META.unitId, lOCALE_META.subUnitId, ox22a4e7);
      if (!interceptorEffectEnum) return false;
      let injector = ox360a6a.deepClone(interceptorEffectEnum);
      injector.targetCellInfo = {
        'unitId': ox51e4ed,
        'subUnitId': ox3c1e2a,
        'row': ox4c5374.row,
        'col': ox4c5374.col
      };
      let inject = interceptorManager.toJSON();
      if (lOCALE_META.subUnitId === ox3c1e2a && lOCALE_META.unitId === ox51e4ed) plugin.setPivotTable(ox51e4ed, ox3c1e2a, ox22a4e7, injector), plugin.addDirtyPivotTable({
        'unitId': ox51e4ed,
        'subUnitId': ox3c1e2a,
        'token': ox22a4e7,
        'type': "set"
      });else {
        plugin.addDirtyPivotTable({
          'unitId': lOCALE_META.unitId,
          'subUnitId': lOCALE_META.subUnitId,
          'token': ox22a4e7,
          'type': "delete"
        }), plugin.removePivotTable(lOCALE_META.unitId, lOCALE_META.subUnitId, ox22a4e7);
        let iUniverInstanceService = new ox34933b(plugin.addCollectionByJSON(ox22a4e7, inject, interceptorEffectEnum.sourceRangeInfo, injector.targetCellInfo).collection, undefined, ox22a4e7);
        iUniverInstanceService.fromJSON(injector.fieldsConfig), plugin.addPivotTable(ox51e4ed, ox3c1e2a, ox22a4e7, iUniverInstanceService, injector), plugin.addDirtyPivotTable({
          'unitId': ox51e4ed,
          'subUnitId': ox3c1e2a,
          'token': ox22a4e7,
          'type': "add",
          'pivotConfig': injector
        });
      }
      return true;
    }
  },
  var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB157 = {
    'type': ox3c5662.COMMAND,
    'id': "sheet.command.move-pivot-table",
    'handler': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463719, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463720) => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463720) return false;
      let iUndoRedoService = ox28421e(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463719.get(ox458dc5), {
        'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463720.targetCellInfo['unitId'],
        'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463720.targetCellInfo['subUnitId']
      });
      if (!iUndoRedoService) throw Error("[Pivot Table]: Target sheet is not valid");
      let iResourceManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463719.get(Z).getPivotTableConfig(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463720.originTargetInfo["unitId"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463720.originTargetInfo["subUnitId"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463720.pivotTableId);
      if (!iResourceManagerService) return false;
      let dependentOn = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463719.get(ox53f8d0),
        disposable = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463719.get(ox10ebc2),
        {
          unitId: disposableCollection,
          subUnitId: horizontalAlign,
          worksheet: iCommandService
        } = iUndoRedoService,
        iConfigService = iCommandService.getRowCount(),
        iLogService = iCommandService.getColumnCount();
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463720.targetCellInfo["row"] > iConfigService || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463720.targetCellInfo["col"] > iLogService) throw Error("[Pivot Table]: Target cell is out of range");
      let dEFAULT_WORKSHEET_ROW_COUNT = [{
          'id': Qr.id,
          'params': {
            'unitId': ox4beaee,
            'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463720.targetCellInfo["subUnitId"],
            'pivotTableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463720.pivotTableId,
            'targetCellPosition': {
              'row': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463720.targetCellInfo["row"],
              'col': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463720.targetCellInfo["col"]
            }
          }
        }],
        dateSystem = [{
          'id': Qr.id,
          'params': {
            'unitId': ox4beaee,
            'subUnitId': ox50e9e8,
            'pivotTableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463720.pivotTableId,
            'targetCellPosition': {
              'row': iResourceManagerService.targetCellInfo['row'],
              'col': iResourceManagerService.targetCellInfo["col"]
            }
          }
        }];
      return ox448739(dEFAULT_WORKSHEET_ROW_COUNT, dependentOn).result ? (disposable.pushUndoRedo({
        'unitID': ox4beaee,
        'undoMutations': dateSystem,
        'redoMutations': dEFAULT_WORKSHEET_ROW_COUNT
      }), true) : false;
    }
  },
  ei = {
    'type': ox3c5662.COMMAND,
    'id': "sheet.command.pivot-drill-down",
    async handler(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463723, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463724) {
      var dEFAULT_WORKSHEET_COLUMN_COUNT;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463724) return false;
      let commandType = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463723.get(ox458dc5),
        customCommandExecutionError = ox28421e(commandType);
      if (!customCommandExecutionError) return false;
      let {
          unitId: isErrorValueLocal,
          subUnitId: isPrefixValueLocal,
          workbook: isValueFilterOperatorLocal
        } = customCommandExecutionError,
        {
          row: setDateSystemLocal,
          col: setMaxLimitItemCountLocal
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463724,
        asyncInterceptorManager = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463723.get(nr),
        cellValueType = asyncInterceptorManager.getPivotTableIdByCell(isErrorValueLocal, isPrefixValueLocal, setDateSystemLocal, setMaxLimitItemCountLocal);
      if (!cellValueType) return false;
      let isDateValueLocal = (dEFAULT_WORKSHEET_COLUMN_COUNT = asyncInterceptorManager.getPivotItemRenderInfoCache(oxd2afe5, ox41575f, cellValueType)) == null ? undefined : dEFAULT_WORKSHEET_COLUMN_COUNT.areaInfo;
      if (!isDateValueLocal) return false;
      let isDateGroupFieldJSONLocal = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463723.get(Z).getPivotTableConfig(oxd2afe5, ox41575f, cellValueType);
      if (!isDateGroupFieldJSONLocal) return false;
      let {
          rowInfo: generateHexNumberLocal,
          colInfo: getAutoDisplayNameLocal
        } = isDateValueLocal,
        isBaseGroupFieldLocal = generateHexNumberLocal[ox5dc1ef],
        isDateGroupFieldLocal = getAutoDisplayNameLocal[ox4da9d0];
      if (!isBaseGroupFieldLocal || !isDateGroupFieldLocal) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463725 = isBaseGroupFieldLocal.paths,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463726 = isDateGroupFieldLocal.paths,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463727 = isBaseGroupFieldLocal.level,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463728 = isDateGroupFieldLocal.level,
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A72 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463725.concat(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463726),
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A73 = isDateGroupFieldJSONLocal.fieldsConfig["rowFields"].slice(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463727),
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A74 = isDateGroupFieldJSONLocal.fieldsConfig["columnFields"].slice(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463728),
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A75 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A73.concat(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A74),
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A76 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A72.map((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461923, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461924) => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461923, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A75[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461924]]),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463729 = (await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463723.get(Y).getPivotDisplayConfig({
          'unitId': oxd2afe5,
          'subUnitId': ox41575f,
          'pivotTableId': cellValueType,
          'params': {
            'type': "drillDown",
            'drillDown': {
              'tuple': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A76
            }
          }
        })).result["drillDown"];
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463729) return false;
      let {
          indexes: pivotDateGroupFieldDateSystemEnum,
          range: pivotDateGroupFieldDateTypeEnum,
          sourceUnitId: pivotErrorTypeEnum,
          sourceSubUnitId: pivotFilterTypeEnum,
          formatMap: pivotSubtotalTypeEnum
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463729,
        {
          startRow: pivotTable,
          endRow: pivotTableChangeTypeEnum,
          startColumn: pivotTableFiledAreaEnum,
          endColumn: pivotTableValuePositionEnum
        } = pivotDateGroupFieldDateTypeEnum,
        pivotView = new ox286e14(),
        pivotViewCellValueTypeEnum = pivotTableChangeTypeEnum - pivotTable,
        createLabelFieldLocal = pivotTableValuePositionEnum - pivotTableFiledAreaEnum,
        createValueFieldLocal = {},
        excelDateToUnixMillisecondsLocal = ox28421e(commandType, {
          'unitId': pivotErrorTypeEnum,
          'subUnitId': pivotFilterTypeEnum
        });
      if (!excelDateToUnixMillisecondsLocal) return false;
      let dateGroupField = W.colStyle,
        fieldsCollection = W.subTotalStyle,
        globalConfig = W.subTotalStyle,
        pivotCallbackEnum = ox349b48.getStyles().setValue(dateGroupField),
        pivotCellStyleTypeEnum = ox349b48.getStyles().setValue(fieldsCollection),
        pivotDataFieldDataTypeEnum = ox349b48.getStyles().setValue(globalConfig),
        {
          worksheet: pivotDataFieldSortOperatorEnum
        } = excelDateToUnixMillisecondsLocal,
        pivotDataFieldTypeEnum = 0;
      oxd38e4a.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461925 => {
        for (let dataFieldManager = 0; dataFieldManager <= oxd8fd7a - ox119517; dataFieldManager++) pivotView.setValue(pivotDataFieldTypeEnum, dataFieldManager, oxd64abd.getCellRaw(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461925 + ox34fb39.startRow + 1, dataFieldManager));
        pivotDataFieldTypeEnum++;
      });
      for (let dataField = ox119517; dataField <= oxd8fd7a; dataField++) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46764 = oxd64abd.getCellRaw(ox436331, dataField);
        createValueFieldLocal[ox436331] || (createValueFieldLocal[ox436331] = {}), createValueFieldLocal[ox436331][dataField] = {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46764,
          's': pivotCallbackEnum
        };
      }
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D92 = 1,
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB127 = {},
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB128 = {};
      ox534829.forRow((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461927, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461928) => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461928.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46765 => {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46766 = ox534829.getValue(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461927, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46765);
          if (ox26c920[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D92] || (ox26c920[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D92] = {}), ox26c920[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D92][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46765] = {
            ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46766,
            's': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D92 % 2 == 0 ? ox5ad9ac : ox48bf37
          }, ox5ae774[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46765] && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461927 >= 0) {
            let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A4 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D92 % 2 == 0,
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46550 = var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A4 ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB128[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46765] : var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB127[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46765];
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46550 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46550 = ox349b48.getStyles().setValue({
              ...(var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A4 ? oxc282b4 : ox3bbf9f),
              'n': {
                'pattern': ox5ae774[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46765]
              }
            }), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A4 ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB128[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46765] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46550 : var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB127[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46765] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46550), ox26c920[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D92][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46765].s = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46550;
          }
        }), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D92++;
      });
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463730 = new ox286e14(ox26c920),
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB129 = {};
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463730.forValue((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461931, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461932, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461933) => {
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB129[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461931] || (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB129[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461931] = {}), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB129[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461931][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461932] = {
          's': null,
          'f': null,
          'si': null,
          'p': null,
          'v': null,
          't': null,
          'custom': null
        };
      });
      let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A77 = [],
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A78 = [],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463731 = ox349b48.getSheets().length,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463732 = oxc46e4a({
          'rowCount': Math.max(ox407816, ox2abcbb + 10),
          'columnCount': Math.max(ox1ea5d6, ox2003be + 5)
        }),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463733 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463723.get(ox76cf68);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463732.id = ox364134(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463732.name = ox349b48.generateNewSheetName('' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463733.t("sheets-pivot.sheet"));
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB130 = {
          'index': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463731,
          'sheet': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463732,
          'unitId': oxd2afe5
        },
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463734 = oxe73156(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463723, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB130);
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A78.push({
        'id': ox13d5d2.id,
        'params': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB130
      }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A77.push({
        'id': ox3f1c34.id,
        'params': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463734
      }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A78.push({
        'id': ox104f54.id,
        'params': {
          'unitId': oxd2afe5,
          'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463732.id,
          'cellValue': ox26c920
        }
      }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A77.unshift({
        'id': ox104f54.id,
        'params': {
          'unitId': oxd2afe5,
          'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463732.id,
          'cellValue': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB129
        }
      });
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB131 = {
        'startRow': 0,
        'startColumn': 0,
        'endRow': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D92 - 1,
        'endColumn': oxd8fd7a
      };
      return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A78.push({
        'id': ox185495.id,
        'params': {
          'unitId': oxd2afe5,
          'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463732.id,
          'range': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB131
        }
      }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A77.unshift({
        'id': ox2a3ccc.id,
        'params': {
          'unitId': oxd2afe5,
          'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463732.id
        }
      }), ox448739(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A78, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463723.get(ox53f8d0)).result ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463723.get(ox10ebc2).pushUndoRedo({
        'unitID': oxd2afe5,
        'undoMutations': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A77,
        'redoMutations': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A78
      }), true) : false;
    }
  },
  ti = {
    'type': ox3c5662.COMMAND,
    'id': 'sheet.command.remove-pivot-field',
    async handler(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463747, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463748) {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463748) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463749 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463747.get(ox53f8d0),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463750 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463747.get(Y),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463751 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463747.get(ox10ebc2),
        {
          pivotTableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463752,
          fieldIds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463753,
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463754,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463755
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463748,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463756 = (await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463750.getPivotDisplayConfig({
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463754,
          'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463755,
          'pivotTableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463752,
          'params': {
            'type': "removePivotField",
            'removePivotField': {
              'fieldIds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463753
            }
          }
        })).result['removePivotField'];
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463756) return false;
      let {
          view: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463757,
          changesets: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463758,
          isEmpty: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463759,
          pivotTableConfig: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463760
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463756,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463761 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463760.targetCellInfo,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463762 = new oxd30f7d();
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463762.formJSON(ox210784);
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB137 = {
        'cellInfo': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463761,
        'view': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463762,
        'isEmpty': ox34d7d9
      };
      if (!(await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463747.get(Q).asyncInterceptor["fetchThroughAsyncInterceptors"](K)(true, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB137))) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463763 = Ln(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463747, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463762, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463761, ox34d7d9),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463764 = Rr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463747, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB137),
        {
          redos: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463765,
          undos: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463766
        } = fn_L1_core_endo_routine_pure_ON_heap_nothrow_sig8CF1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463749, {
          'pivotTableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463752,
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463754,
          'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463755
        }, ox475cc3);
      return ox448739([...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463763.redos, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463764.redos, ...ox432070], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463749).result ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463751.pushUndoRedo({
        'unitID': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463754,
        'redoMutations': [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463763.redos, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463764.redos, ...ox432070],
        'undoMutations': [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463763.undos, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463764.undos, ...ox1044fb]
      }), true) : false;
    }
  },
  ni = {
    'type': ox3c5662.COMMAND,
    'id': "sheet.command.remove-pivot-table",
    'handler'(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463787, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463788) {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463788) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463789 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463787.get(ox53f8d0),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463790 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463787.get(ox10ebc2),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463791 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463787.get(Z),
        {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463792,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463793,
          pivotTableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463794
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463788,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463795 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463791.getPivotTableConfig(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463792, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463793, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463794),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463796 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463791.getCollection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463792, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463794);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463795 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463796) return false;
      let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A86 = [{
          'id': Ur.id,
          'params': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463788
        }],
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A87 = [{
          'id': Vr.id,
          'params': {
            'unitId': ox171fe5,
            'subUnitId': ox11f5ae,
            'pivotTableId': oxe1194a,
            'pivotTableConfig': ox360a6a.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463795),
            'collectionConfig': ox360a6a.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463796)
          }
        }];
      return ox448739(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A86, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463789).result ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463790.pushUndoRedo({
        'unitID': ox171fe5,
        'redoMutations': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A86,
        'undoMutations': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A87
      }), true) : false;
    }
  },
  ri = {
    'type': ox3c5662.COMMAND,
    'id': "sheet.command.reset-pivot-fields-config",
    async handler(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463807, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463808) {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463808) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463809 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463807.get(ox53f8d0),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463810 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463807.get(ox10ebc2),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463811 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463807.get(Y),
        {
          resetArea: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463812,
          pivotTableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463813,
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463814,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463815
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463808,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463816 = (await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463811.getPivotDisplayConfig({
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463814,
          'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463815,
          'pivotTableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463813,
          'params': {
            'type': 'resetPivotTable',
            'resetPivotTable': {
              'pivotTableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463813,
              'resetArea': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463812
            }
          }
        })).result['resetPivotTable'];
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463816) return false;
      let {
          changesets: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463817
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463816,
        {
          redos: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463818,
          undos: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463819
        } = fn_L1_core_endo_routine_pure_ON_heap_nothrow_sig8CF1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463809, {
          'pivotTableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463813,
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463814,
          'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463815
        }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463817);
      return ox448739(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463818, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463809).result ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463810.pushUndoRedo({
        'unitID': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463814,
        'redoMutations': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463818,
        'undoMutations': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463819
      }), true) : false;
    }
  },
  ii = {
    'type': ox3c5662.COMMAND,
    'id': "sheet.command.set-pivot-collapse",
    async handler(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463833, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463834) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463835 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463833.get(ox53f8d0),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463836 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463833.get(Y),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463837 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463833.get(nr),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463838 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463833.get(ox458dc5),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463839 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463833.get(ox76cf68),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463840 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463833.get(ox10ebc2);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463834) return false;
      let {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463841,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463842,
          row: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463843,
          col: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463844,
          collapse: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463845
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463834,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463846 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463838.getUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463841);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463846 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463846.getSheetBySheetId(ox4b57f2)) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463847 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463837.getPivotTableIdByCell(ox1cc600, ox4b57f2, ox1498c5, ox55c2bc);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463847) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463848 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463837.getPivotItemRenderInfoCache(ox1cc600, ox4b57f2, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463847);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463848) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463849 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463837.getPivotTableCellData(ox1cc600, ox4b57f2, ox1498c5, ox55c2bc),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463850 = wn(ox1498c5, ox55c2bc, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463849, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463848),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463851 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463850 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463850.tableFieldId,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463852 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463849 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463849.v;
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463852 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463839.t("sheets-pivot.blank") && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463852 = ox22eb53.BLANK_PLACEHOLDER), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463852 == null || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463847 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463851) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463853 = await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463836.getPivotDisplayConfig({
          'unitId': ox1cc600,
          'subUnitId': ox4b57f2,
          'pivotTableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463847,
          'params': {
            'type': 'setPivotCollapse',
            'setPivotCollapse': {
              'tableFieldId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463851,
              'collapse': ox2c7112,
              'item': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463852
            }
          }
        }),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463854 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463853 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463853.result['setPivotCollapse'];
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463854) return false;
      let {
          view: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463855,
          pivotTableConfig: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463856,
          isEmpty: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463857,
          changesets: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463858
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463854,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463859 = new oxd30f7d();
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463859.formJSON(ox599325);
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463860 = ox55ea09.targetCellInfo,
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB139 = {
          'cellInfo': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463860,
          'view': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463859,
          'isEmpty': ox3e432f
        };
      if (!(await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463833.get(Q).asyncInterceptor["fetchThroughAsyncInterceptors"](K)(true, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB139))) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463861 = Ln(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463833, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463859, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463860, ox3e432f),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463862 = Rr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463833, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB139),
        {
          redos: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463863,
          undos: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463864
        } = fn_L1_core_endo_routine_pure_ON_heap_nothrow_sig8CF1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463835, {
          'pivotTableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463847,
          'unitId': ox1cc600,
          'subUnitId': ox4b57f2
        }, ox5c5364);
      return ox448739([...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463861.redos, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463862.redos, ...ox2fa8ba], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463835).result ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463840.pushUndoRedo({
        'unitID': ox1cc600,
        'redoMutations': [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463861.redos, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463862.redos, ...ox2fa8ba],
        'undoMutations': [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463861.undos, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463862.undos, ...ox5f34b3]
      }), true) : false;
    }
  },
  ai = {
    'id': "sheet.mutation.update-date-group",
    'type': ox3c5662.MUTATION,
    'handler': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463897, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463898) => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463898) return false;
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463897.get(ox455214).getConfig("SHEET_PIVOT_IN_MAIN_THREAD")) return true;
      let {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463899,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463900,
          pivotTableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463901,
          tableFieldId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463902,
          dateType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463903
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463898,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463904 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463897.get(X),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463905 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463904.getPivotTableInstance(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463901);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463905) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463906 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463905.getDataFieldByTableId(ox3861ac);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463906) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463907 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463906.getOriginFieldId(),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463908 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463905.getDataFieldByDataFieldId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463907),
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB67 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463908 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463908.getName()) + " - " + fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463897, ox4acd44);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463904.getCollection(ox44808d, ox235655).setDisplayName(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463906.id, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB67);
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463909 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463905.getTableFieldById(ox3861ac);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463909) return false;
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463905.renameField(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463909.getId(), var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB67), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463906.setDateType(ox4acd44), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463908) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461937 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463897.get(ox458dc5).getUnit(ox44808d, ox2402ca.UNIVER_SHEET);
        Qn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461937 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461937.getDateSystem()), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463906.refreshGroupField(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463908);
      }
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463905.setDirty(true);
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463910 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463904.getPivotTableConfig(ox44808d, oxf0c327, ox235655);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463904.addDirtyPivotTable({
        'unitId': ox44808d,
        'subUnitId': oxf0c327,
        'token': ox235655,
        'type': "set",
        'pivotConfig': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463910
      }), true;
    }
  },
  oi = {
    'type': ox3c5662.COMMAND,
    'id': "sheet.command.set-pivot-date-group",
    async handler(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463925, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463926) {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463926) return false;
      let {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463927,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463928,
          pivotTableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463929,
          tableFieldId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463930,
          dateType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463931
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463926,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463932 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463925.get(ox53f8d0),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463933 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463925.get(Z),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463934 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463933.getPivotTableConfig(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463927, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463928, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463929),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463935 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463933.getCollection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463927, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463929),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463936 = Kr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463934 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463934.fieldsConfig, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463935, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463930);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463936 || qr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463936, ox1baa8e)) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463937 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463925.get(Y),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463938 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463925.get(ox10ebc2),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463939 = (await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463937.getPivotDisplayConfig({
          'unitId': ox1a572a,
          'subUnitId': ox3be55a,
          'pivotTableId': ox14cc0b,
          'params': {
            'type': "setPivotDateGroup",
            'setPivotDateGroup': {
              'tableFieldId': ox317e5b,
              'dateType': ox1baa8e
            }
          }
        })).result["setPivotDateGroup"];
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463939) return false;
      let {
          view: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463940,
          changesets: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463941,
          isEmpty: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463942,
          pivotTableConfig: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463943,
          shouldBeAddedGroupJSON: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463944
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463939,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463945 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463943.targetCellInfo,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463946 = new oxd30f7d();
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463946.formJSON(ox5cccf5);
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB141 = {
        'cellInfo': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463945,
        'view': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463946,
        'isEmpty': ox183b17
      };
      if (!(await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463925.get(Q).asyncInterceptor["fetchThroughAsyncInterceptors"](K)(true, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB141))) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463947 = Ln(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463925, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463946, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463945, ox183b17),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463948 = Rr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463925, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB141),
        {
          undos: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463949,
          redos: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463950
        } = fn_L1_core_endo_routine_pure_ON_heap_nothrow_sig8CF1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463932, {
          'pivotTableId': ox14cc0b,
          'unitId': ox1a572a,
          'subUnitId': ox3be55a
        }, ox118dfd);
      ox225a8c && (ox350e0f.unshift({
        'id': ir.id,
        'params': {
          'pivotTableId': ox14cc0b,
          'fieldJSON': ox225a8c,
          'unitId': ox1a572a,
          'subUnitId': ox3be55a
        }
      }), ox3357c0.push({
        'id': ar.id,
        'params': {
          'pivotTableId': ox14cc0b,
          'dataFieldId': ox225a8c.id,
          'unitId': ox1a572a,
          'subUnitId': ox3be55a
        }
      })), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463936.kind === "date-group" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463936.currentDateType && (ox350e0f.push({
        'id': ai.id,
        'params': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463926
      }), ox3357c0.push({
        'id': ai.id,
        'params': {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463926,
          'dateType': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463936.currentDateType
        }
      }));
      let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A90 = [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463947.redos, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463948.redos, ...ox350e0f],
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A91 = [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463947.undos, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463948.undos, ...ox3357c0];
      return ox448739(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A90, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463932).result ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463938.pushUndoRedo({
        'unitID': ox1a572a,
        'redoMutations': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A90,
        'undoMutations': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A91
      }), true) : false;
    }
  },
  si = {
    'type': ox3c5662.COMMAND,
    'id': "sheet.command.set-pivot-fields-config",
    async handler(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463977, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463978) {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463978) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463979 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463977.get(ox53f8d0),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463980 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463977.get(ox10ebc2),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463981 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463977.get(Y),
        {
          pivotTableConfig: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463982,
          pivotTableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463983,
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463984,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463985
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463978,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463986 = (await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463981.getPivotDisplayConfig({
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463984,
          'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463985,
          'pivotTableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463983,
          'params': {
            'type': "setPivotTableConfig",
            'setPivotTableConfig': {
              'pivotTableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463983,
              'pivotTableConfig': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463982
            }
          }
        })).result["setPivotTableConfig"];
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463986) return false;
      let {
          changesets: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463987
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463986,
        {
          redos: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463988,
          undos: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463989
        } = fn_L1_core_endo_routine_pure_ON_heap_nothrow_sig8CF1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463979, {
          'pivotTableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463983,
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463984,
          'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463985
        }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463987);
      return ox448739(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463988, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463979).result ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463980.pushUndoRedo({
        'unitID': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463984,
        'redoMutations': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463988,
        'undoMutations': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463989
      }), true) : false;
    }
  },
  ci = {
    'type': ox3c5662.COMMAND,
    'id': 'sheet.command.set-pivot-filter',
    async handler(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464003, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464004) {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464004) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464005 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464003.get(ox53f8d0),
        {
          pivotTableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464006,
          tableFieldId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464007,
          items: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464008,
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464009,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464010,
          isAll: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464011
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464004,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464012 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464003.get(Y),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464013 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464003.get(ox10ebc2),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464014 = (await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464012.getPivotDisplayConfig({
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464009,
          'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464010,
          'pivotTableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464006,
          'params': {
            'type': 'setPivotFilter',
            'setPivotFilter': {
              'tableFieldId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464007,
              'items': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464008,
              'isAll': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464011
            }
          }
        })).result["setPivotFilter"];
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464014) return false;
      let {
          changesets: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464015,
          pivotTableConfig: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464016,
          isEmpty: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464017,
          view: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464018
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464014,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464019 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464016.targetCellInfo,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464020 = new oxd30f7d();
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464020.formJSON(ox4d9121);
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB143 = {
        'cellInfo': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464019,
        'view': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464020,
        'isEmpty': oxc29459
      };
      if (!(await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464003.get(Q).asyncInterceptor['fetchThroughAsyncInterceptors'](K)(true, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB143))) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464021 = Ln(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464003, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464020, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464019, oxc29459),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464022 = Rr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464003, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB143),
        {
          undos: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464023,
          redos: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464024
        } = fn_L1_core_endo_routine_pure_ON_heap_nothrow_sig8CF1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464005, {
          'pivotTableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464006,
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464009,
          'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464010
        }, ox2a59e5);
      return ox448739([...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464021.redos, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464022.redos, ...oxbf0ace], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464005).result ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464013.pushUndoRedo({
        'unitID': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464009,
        'redoMutations': [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464021.redos, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464022.redos, ...oxbf0ace],
        'undoMutations': [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464021.undos, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464022.undos, ...ox3d3b6a]
      }), true) : false;
    }
  },
  li = {
    'type': ox3c5662.COMMAND,
    'id': "sheet.command.set-pivot-layout",
    async handler(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464047, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464048) {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464048) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464049 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464047.get(ox53f8d0),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464050 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464047.get(ox10ebc2),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464051 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464047.get(Y),
        {
          layout: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464052,
          pivotTableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464053,
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464054,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464055
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464048,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464056 = (await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464051.getPivotDisplayConfig({
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464054,
          'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464055,
          'pivotTableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464053,
          'params': {
            'type': 'setPivotLayout',
            'setPivotLayout': {
              'pivotTableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464053,
              'layout': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464052
            }
          }
        })).result["setPivotLayout"];
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464056) return false;
      let {
          changesets: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464057
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464056,
        {
          redos: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464058,
          undos: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464059
        } = fn_L1_core_endo_routine_pure_ON_heap_nothrow_sig8CF1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464049, {
          'pivotTableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464053,
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464054,
          'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464055
        }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464057);
      return ox448739(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464058, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464049).result ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464050.pushUndoRedo({
        'unitID': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464054,
        'redoMutations': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464058,
        'undoMutations': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464059
      }), true) : false;
    }
  },
  ui = {
    'type': ox3c5662.COMMAND,
    'id': "sheet.command.set-pivot-table-options",
    async handler(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464073, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464074) {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464074) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464075 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464073.get(ox53f8d0),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464076 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464073.get(ox10ebc2),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464077 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464073.get(Y),
        {
          options: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464078,
          pivotTableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464079,
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464080,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464081
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464074,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464082 = (await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464077.getPivotDisplayConfig({
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464080,
          'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464081,
          'pivotTableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464079,
          'params': {
            'type': "setOption",
            'setOptions': {
              'pivotTableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464079,
              'info': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464078
            }
          }
        })).result['setPivotOption'];
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464082) return false;
      let {
          changesets: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464083
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464082,
        {
          redos: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464084,
          undos: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464085
        } = fn_L1_core_endo_routine_pure_ON_heap_nothrow_sig8CF1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464075, {
          'pivotTableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464079,
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464080,
          'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464081
        }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464083);
      return ox448739(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464084, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464075), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464076.pushUndoRedo({
        'unitID': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464080,
        'redoMutations': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464084,
        'undoMutations': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464085
      }), true;
    }
  },
  di = {
    'type': ox3c5662.COMMAND,
    'id': "sheet.command.set-pivot-sort",
    async handler(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464099, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464100) {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464100) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464101 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464099.get(ox53f8d0),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464102 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464099.get(ox10ebc2),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464103 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464099.get(Y),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464104 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464099.get(ox76cf68),
        {
          info: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464105,
          tableFieldId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464106,
          pivotTableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464107,
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464108,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464109
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464100,
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB145 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464105 === undefined || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464105.type === ox4f8ad3.custom ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464105 : {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464105,
          'sortLocale': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464105.sortLocale ?? ox51816c[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464104.getCurrentLocale()].tag
        },
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464110 = (await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464103.getPivotDisplayConfig({
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464108,
          'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464109,
          'pivotTableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464107,
          'params': {
            'type': "setPivotSort",
            'setPivotSort': {
              'tableFieldId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464106,
              'info': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB145
            }
          }
        })).result["setPivotSort"];
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464110) return false;
      let {
          changesets: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464111
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464110,
        {
          redos: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464112,
          undos: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464113
        } = fn_L1_core_endo_routine_pure_ON_heap_nothrow_sig8CF1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464101, {
          'pivotTableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464107,
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464108,
          'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464109
        }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464111);
      return ox448739(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464112, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464101).result ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464102.pushUndoRedo({
        'unitID': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464108,
        'redoMutations': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464112,
        'undoMutations': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464113
      }), true) : false;
    }
  },
  fi = {
    'type': ox3c5662.COMMAND,
    'id': "sheet.command.set-pivot-value-filter",
    async handler(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464129, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464130) {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464130) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464131 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464129.get(ox53f8d0),
        {
          pivotTableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464132,
          fieldId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464133,
          valueFilterInfo: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464134,
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464135,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464136
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464130,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464137 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464129.get(X).getPivotTableModelConfig(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464135, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464136, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464132),
        var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A34 = !!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464137 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464137.rowFields['includes'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464133) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464137.columnFields["includes"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464133)));
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464137 || !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A34 || ox5831fd !== undefined && (ox5831fd.type !== ox9f683e.ValueFilter || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464137.measure[ox5831fd.valueFieldId] || !ox5cf113(ox5831fd.operator))) return false;
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB147 = ox5831fd && {
          ...ox5831fd,
          'expected': Array.isArray(ox5831fd.expected) ? ox5831fd.expected["concat"]() : ox5831fd.expected
        },
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464138 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464129.get(Y),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464139 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464129.get(ox10ebc2),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464140 = (await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464138.getPivotDisplayConfig({
          'unitId': oxce209,
          'subUnitId': ox127a64,
          'pivotTableId': ox3d188c,
          'params': {
            'type': "setValuePivotFilter",
            'setValuePivotFilter': {
              'tableFieldId': ox5594fb,
              'filterInfo': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB147
            }
          }
        })).result["setValuePivotFilter"];
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464140) return false;
      let {
          changesets: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464141,
          pivotTableConfig: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464142,
          isEmpty: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464143,
          view: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464144
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464140,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464145 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464142.targetCellInfo,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464146 = new oxd30f7d();
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464146.formJSON(ox5142ed);
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB148 = {
        'cellInfo': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464145,
        'view': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464146,
        'isEmpty': ox5161e8
      };
      if (!(await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464129.get(Q).asyncInterceptor["fetchThroughAsyncInterceptors"](K)(true, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB148))) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464147 = Ln(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464129, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464146, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464145, ox5161e8),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464148 = Rr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464129, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB148),
        {
          undos: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464149,
          redos: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464150
        } = fn_L1_core_endo_routine_pure_ON_heap_nothrow_sig8CF1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464131, {
          'pivotTableId': ox3d188c,
          'unitId': oxce209,
          'subUnitId': ox127a64
        }, oxb4e200);
      return ox448739([...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464147.redos, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464148.redos, ...ox3d18ab], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464131).result ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464139.pushUndoRedo({
        'unitID': oxce209,
        'redoMutations': [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464147.redos, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464148.redos, ...ox3d18ab],
        'undoMutations': [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464147.undos, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464148.undos, ...ox49c3c0]
      }), true) : false;
    }
  },
  pi = {
    'type': ox3c5662.COMMAND,
    'id': 'sheet.command.set-pivot-field-setting',
    async handler(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464173, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464174) {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464174) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464175 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464173.get(ox53f8d0),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464176 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464173.get(ox10ebc2),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464177 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464173.get(Y),
        {
          displayName: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464178,
          subtotalType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464179,
          format: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464180,
          showDataAs: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464181,
          tableFieldId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464182,
          pivotTableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464183,
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464184,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464185
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464174,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464186 = (await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464177.getPivotDisplayConfig({
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464184,
          'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464185,
          'pivotTableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464183,
          'params': {
            'type': 'setPivotSetting',
            'setPivotSetting': {
              'tableFieldId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464182,
              'displayName': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464178,
              'subtotalType': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464179,
              'format': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464180,
              'showDataAs': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464181 === undefined ? undefined : {
                ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464181
              }
            }
          }
        })).result["setPivotSetting"];
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464186) return false;
      let {
          changesets: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464187,
          view: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464188,
          pivotTableConfig: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464189,
          isEmpty: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464190
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464186,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464191 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464189.targetCellInfo,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464192 = new oxd30f7d();
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464192.formJSON(ox1a16e2);
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB151 = {
        'cellInfo': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464191,
        'view': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464192,
        'isEmpty': ox1039e4
      };
      if (!(await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464173.get(Q).asyncInterceptor["fetchThroughAsyncInterceptors"](K)(true, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB151))) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464193 = Ln(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464173, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464192, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464191, ox1039e4),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464194 = Rr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464173, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB151),
        {
          undos: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464195,
          redos: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464196
        } = fn_L1_core_endo_routine_pure_ON_heap_nothrow_sig8CF1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464175, {
          'pivotTableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464183,
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464184,
          'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464185
        }, ox51047d);
      return ox448739([...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464193.redos, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464194.redos, ...ox526e80], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464175).result ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464176.pushUndoRedo({
        'unitID': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464184,
        'redoMutations': [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464193.redos, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464194.redos, ...ox526e80],
        'undoMutations': [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464193.undos, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464194.undos, ...ox2cab64]
      }), true) : false;
    }
  },
  mi = {
    'type': ox3c5662.MUTATION,
    'id': "sheet.mutation.update-pivot-table-source-range",
    'handler'(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464221, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464222) {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464222) return false;
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464221.get(ox455214).getConfig('SHEET_PIVOT_IN_MAIN_THREAD')) return true;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464223 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464221.get(X),
        {
          pivotTableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464224,
          deleteIds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464225,
          collectionJSON: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464226,
          dataRangeInfo: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464227,
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464228,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464229
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464222,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464230 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464223.getPivotTableInstance(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464224),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464231 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464223.getPivotTableConfig(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464228, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464229, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464224);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464230 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464231) return false;
      let {
        collection: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464232,
        updateDataFieldList: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464233
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464223.addCollectionByJSON(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464224, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464226, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464227, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464231.targetCellInfo);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464223.refreshData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464232, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464233, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464227), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464230.updateDataFieldsCollection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464232);
      for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461938 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464225) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464223.removeDataField(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464227.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461938);
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464234 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464223.getPivotTableConfig(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464228, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464229, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464224);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464234.sourceRangeInfo = JSON.parse(JSON.stringify(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464227)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464223.addDirtyPivotTable({
        'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464228,
        'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464229,
        'token': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464224,
        'type': "set"
      }), true;
    }
  },
  hi = {
    'type': ox3c5662.COMMAND,
    'id': "sheet.command.update-pivot-table-source-range",
    async handler(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464249, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464250) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464251 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464249.get(ox53f8d0),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464252 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464249.get(Y),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464253 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464249.get(ox10ebc2);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464250) return false;
      let {
          token: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464254,
          dataRangeInfo: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464255,
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464256,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464257
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464250,
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A94 = [],
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A95 = [],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464258 = (await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464252.getPivotDisplayConfig({
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464256,
          'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464257,
          'pivotTableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464254,
          'params': {
            'type': "updatePivotSource",
            'updatePivotSource': {
              'dataRangeInfo': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464255,
              'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464256,
              'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464257
            }
          }
        })).result["updatePivotSource"];
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464258) return false;
      let {
        changesets: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464259,
        deleteIds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464260,
        collectionConfig: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464261,
        oldCollectionConfig: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464262,
        view: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464263,
        isEmpty: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464264,
        pivotTableConfig: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464265
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464258;
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A95.push({
        'id': mi.id,
        'params': {
          'pivotTableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464254,
          'deleteIds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464260,
          'collectionJSON': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464261,
          'dataRangeInfo': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464255,
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464256,
          'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464257
        }
      }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A94.unshift({
        'id': mi.id,
        'params': {
          'pivotTableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464254,
          'deleteIds': [],
          'collectionJSON': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464262,
          'dataRangeInfo': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464265.sourceRangeInfo,
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464256,
          'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464257
        }
      });
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464266 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464265.targetCellInfo,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464267 = new oxd30f7d();
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464267.formJSON(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464263);
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB153 = {
        'cellInfo': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464266,
        'view': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464267,
        'isEmpty': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464264
      };
      if (!(await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464249.get(Q).asyncInterceptor["fetchThroughAsyncInterceptors"](K)(true, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB153))) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464268 = Ln(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464249, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464267, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464266, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464264),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464269 = Rr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464249, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB153),
        {
          redos: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464270,
          undos: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464271
        } = fn_L1_core_endo_routine_pure_ON_heap_nothrow_sig8CF1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464251, {
          'pivotTableId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464254,
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464256,
          'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464257
        }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464259);
      return ox448739([...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464268.redos, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464269.redos, ...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A95, ...ox2a4778], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464251).result ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464253.pushUndoRedo({
        'unitID': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464256,
        'redoMutations': [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464268.redos, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464269.redos, ...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A95, ...ox2a4778],
        'undoMutations': [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464268.undos, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464269.undos, ...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A94, ...ox1bee2a]
      }), true) : false;
    }
  },
  gi = {
    'type': ox3c5662.COMMAND,
    'id': "sheet.command.update-pivot-value-position",
    async handler(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464295, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464296) {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464296) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464297 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464295.get(ox53f8d0),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464298 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464295.get(Y),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464299 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464295.get(ox458dc5),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464300 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464295.get(ox10ebc2),
        {
          pivotTableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464301,
          position: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464302,
          index: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464303
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464296,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464304 = ox28421e(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464299);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464304) return false;
      let {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464305,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464306
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464304,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464307 = (await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464298.getPivotDisplayConfig({
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464305,
          'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464306,
          'pivotTableId': ox460abe,
          'params': {
            'type': "updateValuePosition",
            'updateValuePosition': {
              'position': ox13b75a,
              'index': ox491d93
            }
          }
        })).result["updateValuePosition"];
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464307) return false;
      let {
          changesets: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464308,
          view: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464309,
          isEmpty: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464310,
          pivotTableConfig: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464311
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464307,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464312 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464311.targetCellInfo,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464313 = new oxd30f7d();
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464313.formJSON(oxc4da4d);
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464314 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464295.get(Q),
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB155 = {
          'cellInfo': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464312,
          'view': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464313,
          'isEmpty': ox5e25b0
        };
      if (!(await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464314.asyncInterceptor["fetchThroughAsyncInterceptors"](K)(true, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB155))) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464315 = Ln(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464295, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464313, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464312, ox5e25b0),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464316 = Rr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464295, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB155),
        {
          undos: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464317,
          redos: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464318
        } = fn_L1_core_endo_routine_pure_ON_heap_nothrow_sig8CF1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464297, {
          'pivotTableId': ox460abe,
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464305,
          'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464306
        }, ox23f733);
      return ox448739([...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464315.redos, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464316.redos, ...ox558021], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464297).result ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464300.pushUndoRedo({
        'unitID': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464305,
        'redoMutations': [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464315.redos, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464316.redos, ...ox558021],
        'undoMutations': [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464315.undos, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464316.undos, ...oxc38fd5]
      }), true) : false;
    }
  };
export { Zr as MovePivotFieldCommand, Qr as SetPivotPositionMutation, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB157 as MovePivotTableCommand, ei as PivotDrillDownCommand, ti as RemovePivotFieldCommand, ni as RemovePivotTableCommand, ri as ResetPivotFieldsConfigCommand, ii as SetPivotCollapseCommand, oi as SetPivotDateGroupCommand, si as SetPivotFieldsConfigCommand, ci as SetPivotFilterCommand, li as SetPivotLayoutCommand, ui as SetPivotOptionCommand, di as SetPivotSortCommand, fi as SetPivotValueFilterCommand, pi as UpdatePivotFieldSettingCommand, mi as UpdatePivotTableSourceRangeMutation, hi as UpdatePivotTableSourceRangeCommand, gi as UpdatePivotValuePositionCommand };
export { ai };
