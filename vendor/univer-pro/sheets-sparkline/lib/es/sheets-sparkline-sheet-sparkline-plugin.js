import { CellValueType, ColorKit, CommandType, DependentOn, Disposable, DisposableCollection, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, ObjectMatrix, Plugin, RANGE_TYPE, Range, Rectangle, Tools, UniverInstanceType, cellToRange, generateRandomId, isValidRange, merge, sequenceExecute, touchDependencies } from '@univerjs/core';
import { AddWorksheetMergeCommand, ClearSelectionAllCommand, CopySheetCommand, IExclusiveRangeService, InsertColMutation, InsertRowMutation, MoveColsMutation, MoveRangeMutation, MoveRowsMutation, RefRangeService, RemoveColCommand, RemoveColMutation, RemoveRowCommand, RemoveRowMutation, RemoveSheetCommand, ReorderRangeMutation, SetColHiddenMutation, SetColVisibleMutation, SetRangeValuesMutation, SetRowHiddenMutation, SetRowVisibleMutation, SetWorksheetActivateCommand, SheetInterceptorService, SheetsSelectionsService, UniverSheetsPlugin, adjustRangeOnMutation, getSheetCommandTarget } from '@univerjs/sheets';
import { Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { G, H, U, V, W, ke } from "./sheets-sparkline-add-sheet-sparkline.js";
import { L } from "./internal-glue.js";
import { P } from "./sheets-sparkline-plugin-name.js";
import { B } from "./sheets-sparkline-sparkline-data-source-model.js";
const Me = {};
let K = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46771, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46772, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46773, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46774) {
    super(), this._sparklineDataSourceModel = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46771, this._sheetInterceptorService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46772, this._univerInstanceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46773, this._sheetSelectionService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46774, this._initClearWithSparkline();
  }
  _initClearWithSparkline() {
    this.disposeWithMe(this._sheetInterceptorService["interceptCommand"]({
      'getMutations': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482 => {
        let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8 = [],
          var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A9 = [];
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482.id === ClearSelectionAllCommand.id) {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46364 = getSheetCommandTarget(this._univerInstanceService, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482.params);
          if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46364) return {
            'redos': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8,
            'undos': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A9
          };
          let {
              unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46365,
              subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366
            } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46364,
            var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3 = this._sheetSelectionService["getCurrentSelections"]().map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243.range),
            var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92992 = new Set(),
            var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB8 = {},
            var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB9 = {};
          var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46244 => {
            Range.foreach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46244, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162) => {
              let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163 = this._sparklineDataSourceModel["getSparkline"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46365, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162);
              if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163 && !var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92992.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163)) {
                let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130 = this._sparklineDataSourceModel["getSparklineById"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46365, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163);
                var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130 && (var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92992.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB8[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163] = {
                  'config': Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.config),
                  'sparklines': Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.sparklines["clone"]())
                }, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB9[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163] = {
                  'config': Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.config),
                  'sparklines': Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.sparklines["clone"]())
                });
              }
            });
          }), Object.values(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB9).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46246 => {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46246.sparklines;
            new ObjectMatrix(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247).forValue((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169) => {
              var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131 => Rectangle.intersects(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131, cellToRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168))) && delete var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168];
            });
          }), var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92992.size > 0 && (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8.push({
            'id': H.id,
            'params': {
              'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46365,
              'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366,
              'groupIds': Array.from(var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92992),
              'isSingle': false
            }
          }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A9.push({
            'id': H.id,
            'params': {
              'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46365,
              'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366,
              'groupIds': Array.from(var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92992),
              'isSingle': false
            }
          })), Object.keys(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB9).length > 0 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8.push({
            'id': V.id,
            'params': {
              'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46365,
              'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366,
              'sparklineConfigMap': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB9
            }
          }), Object.keys(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB8).length > 0 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A9.push({
            'id': V.id,
            'params': {
              'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46365,
              'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366,
              'sparklineConfigMap': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB8
            }
          });
        }
        return {
          'redos': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8,
          'undos': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A9
        };
      }
    }));
  }
};
let q = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46779, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46780, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46781) {
    super(), this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46779, this._sparklineDataSourceModel = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46780, this._exclusiveRangeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46781, this._initDataChangeListener(), this._initExclusiveRangeChange();
  }
  _initDataChangeListener() {
    this.disposeWithMe(this._commandService["onCommandExecuted"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484 => {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484.id === SetRangeValuesMutation.id) {
        let {
            cellValue: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46367,
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369
          } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484.params,
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370 = new ObjectMatrix(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46367),
          var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92993 = new Set(),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371 = this._sparklineDataSourceModel['getSubUnitSparkline'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369);
        if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371) return;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372 = Array.from(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371);
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370.forValue((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46250, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252) => {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253 = cellToRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46250, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251);
          for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D9 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D9 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372.length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D9++) {
            let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D9],
              var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A1 = var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92993.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132);
            var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A1 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133.sparklines["forValue"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690) => {
              let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690;
              if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691 && !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A1 && Rectangle.intersects(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691)) return var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92993.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132), true;
            });
          }
        }), var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92993.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46258 => {
          this._sparklineDataSourceModel["clearSparklineCache"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46258), this._sparklineDataSourceModel["updateSparklineExtraNum"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46258);
        });
      } else {
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484.id === ReorderRangeMutation.id) {
          let {
              range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46260,
              unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261,
              subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46262
            } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484.params,
            var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299 = new Set(),
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46263 = this._sparklineDataSourceModel["getSubUnitSparkline"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46262);
          if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46263) return;
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264 = Array.from(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46263);
          for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D10 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D10 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264.length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D10++) {
            let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D10],
              var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 = var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134);
            var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135.sparklines['forValue']((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698) => {
              let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698;
              if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699 && !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 && Rectangle.intersects(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46260, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699)) return var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134), true;
            });
          }
          var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173 => {
            this._sparklineDataSourceModel["clearSparklineCache"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46262, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173), this._sparklineDataSourceModel['updateSparklineExtraNum'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46262, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173);
          });
        }
      }
    }));
  }
  _initExclusiveRangeChange() {
    this.disposeWithMe(this._exclusiveRangeService["exclusiveRangesChange$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46486 => {
      let {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46488,
          ranges: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46489
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46486,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46490 = this._sparklineDataSourceModel["getSubUnitSparkline"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46488);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46490) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46491 = Array.from(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46490),
        var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92998 = new Set();
      for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D12 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D12 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46491.length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D12++) {
        let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46266] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46491[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D12],
          var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A3 = var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92998.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265);
        var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A3 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46266.sparklines["forValue"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46175, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177) => {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177;
          if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178 && !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A3) {
            for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46489) if (Rectangle.intersects(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178)) {
              var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92998.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265);
              break;
            }
          }
        });
      }
      var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92998.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46373 => {
        this._sparklineDataSourceModel["clearSparklineCache"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46488, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46373), this._sparklineDataSourceModel["updateSparklineExtraNum"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46488, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46373);
      });
    }));
  }
};
let J = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46785, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46786) {
    super(), this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46785, this._sparklineDataSourceModel = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46786, this._initHideRowColWithSparkline();
  }
  _initHideRowColWithSparkline() {
    this._commandService["onCommandExecuted"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498 => {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498.id === SetRowHiddenMutation.id || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498.id === SetColHiddenMutation.id || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498.id === SetRowVisibleMutation.id || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498.id === SetColVisibleMutation.id) {
        let {
            ranges: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46375,
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377
          } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498.params,
          var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92994 = new Set(),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378 = this._sparklineDataSourceModel["getSubUnitSparkline"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377);
        if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378) return;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46379 = Array.from(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378);
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46375.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267 => {
          Range.foreach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184) => {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185 = cellToRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184);
            for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46379.length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7++) {
              let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46379[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7],
                var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A = var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92994.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105);
              var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106.sparklines["forValue"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658) => {
                let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658;
                if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659 && !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A && Rectangle.intersects(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659)) return var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92994.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105), true;
              });
            }
          });
        }), var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92994.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46269 => {
          this._sparklineDataSourceModel['clearSparklineCache'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46269), this._sparklineDataSourceModel["updateSparklineExtraNum"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46269);
        });
      }
    });
  }
};
let Y = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46789, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46790, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46791) {
    super(), this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46789, this._sheetInterceptorService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46790, this._sparklineDataSourceModel = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46791, this._initMergeWithSparkline();
  }
  _initMergeWithSparkline() {
    this.disposeWithMe(this._sheetInterceptorService["interceptCommand"]({
      'getMutations': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500 => {
        let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12 = [],
          var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A13 = [];
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500.id === AddWorksheetMergeCommand.id) {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500.params;
          if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380) return {
            'redos': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12,
            'undos': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A13
          };
          let {
              unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381,
              subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382,
              ranges: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383
            } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380,
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384 = this._sparklineDataSourceModel["getSubUnitSparkline"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382);
          if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384) return {
            'redos': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12,
            'undos': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A13
          };
          let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10 = {},
            var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB11 = {},
            var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92995 = new Set();
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271 => {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46272 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271.startRow,
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271.startColumn;
            Range.foreach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190) => {
              let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191 = this._sparklineDataSourceModel["getSparkline"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190);
              if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46272 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273)) {
                let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136 = this._sparklineDataSourceModel["getSparklineById"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191);
                if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136) {
                  var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92995.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191);
                  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191];
                  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107 = {
                    'config': Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136.config),
                    'sparklines': new ObjectMatrix(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136.sparklines["clone"]())
                  }, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107.sparklines["realDeleteValue"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB11[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191] = {
                    'config': Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136.config),
                    'sparklines': Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136.sparklines["clone"]())
                  };
                }
              }
            });
          });
          for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46278] of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384) {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46278.sparklines;
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195.forValue((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139) => {
              for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383.length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5++) {
                let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5];
                if (Rectangle.contains(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139)) {
                  var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92995.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277);
                  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277];
                  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631 = {
                    'config': Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46278.config),
                    'sparklines': new ObjectMatrix(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195.clone())
                  }, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631.sparklines['realDeleteValue'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB11[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277] || (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB11[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277] = {
                    'config': Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46278.config),
                    'sparklines': Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195.clone())
                  });
                }
              }
            });
          }
          let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB12 = {};
          Object.entries(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10).forEach(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280]) => {
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280.sparklines["getSizeOf"]() && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB12[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279] = {
              'config': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280.config,
              'sparklines': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280.sparklines["clone"]()
            });
          }), var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92995.size && (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12.push({
            'id': H.id,
            'params': {
              'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381,
              'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382,
              'groupIds': Array.from(var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92995),
              'isSingle': false
            }
          }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A13.push({
            'id': H.id,
            'params': {
              'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381,
              'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382,
              'groupIds': Array.from(var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92995),
              'isSingle': false
            }
          }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12.push({
            'id': V.id,
            'params': {
              'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381,
              'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382,
              'sparklineConfigMap': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB12
            }
          }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A13.push({
            'id': V.id,
            'params': {
              'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381,
              'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382,
              'sparklineConfigMap': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB11
            }
          }));
        }
        return {
          'redos': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12,
          'undos': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A13
        };
      }
    }));
  }
};
let X = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46795, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46796, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46797, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46798) {
    super(), this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46795, this._refRangeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46796, this._univerInstanceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46797, this._sparklineDataSourceModel = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46798, L(this, "disposableCollection", new DisposableCollection()), this._onRefRangeChange(), this._initCorrectRangeWithSparkline();
  }
  _onRefRangeChange() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46803 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46503) => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46504 = this._univerInstanceService['getCurrentUnitOfType'](UniverInstanceType.UNIVER_SHEET);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46504 || !(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46504 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46504.getSheetBySheetId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46503))) return;
      this.disposableCollection["dispose"]();
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385 => this.refRangeHandle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46503),
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A16 = [],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506 = this._sparklineDataSourceModel["getSubUnitSparkline"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46503);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506) {
        for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46283, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284] of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284.sparklines["forValue"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198) => {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199 = cellToRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197);
          var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A16.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199);
        });
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A16.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285 => {
          this.disposableCollection['add'](this._refRangeService["registerRefRange"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46503));
        });
      }
    };
    this.disposeWithMe(this._commandService["onCommandExecuted"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46512 => {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46512.id === SetWorksheetActivateCommand.id) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46512.params,
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386.subUnitId,
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386.unitId;
        if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388) return;
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46803(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387);
      }
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46512.id === G.id || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46512.id === V.id) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46512.params,
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46390 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389.subUnitId,
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389.unitId;
        if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46390 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391) return;
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46803(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46390);
      }
    }));
  }
  refRangeHandle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46805, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46806, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807) {
    switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46805.id) {
      case RemoveColCommand.id:
        return this._getRefRangeMutationsByDeleteCols(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46805.params, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46806, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807);
      case RemoveRowCommand.id:
        return this._getRefRangeMutationsByDeleteRows(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46805.params, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46806, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807);
      default:
        break;
    }
    return {
      'redos': [],
      'undos': []
    };
  }
  _getRefRangeMutationsByDeleteRows(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46811, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46812, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46813) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46814;
    let {
        range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46815
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46811,
      var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929912 = new Set(),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB33 = {},
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB34 = {},
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24 = [],
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A25 = [],
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A26 = [],
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A27 = [];
    if (!getSheetCommandTarget(this._univerInstanceService, {
      'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46812,
      'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46813
    })) return {
      'redos': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A25,
      'undos': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24
    };
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46816 = this._sparklineDataSourceModel["getSubUnitSparkline"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46812, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46813);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46816 || !((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46814 = this._sparklineDataSourceModel["getSparklineCache"]().sparklineAnchorMap["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46812)) != null && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46814 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46814.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46813)) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46814.matrix)) return {
      'redos': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A25,
      'undos': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24
    };
    for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46514, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515] of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46816) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515.sparklines;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392.forValue((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46289) => {
        if (Rectangle.intersects(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46815, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46289)) {
          var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929912.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46514);
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB34[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46514];
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204 = {
            'config': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515.config,
            'sparklines': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515.sparklines['clone']()
          }, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB34[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46514] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204);
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46205 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB33[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46514];
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46205 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46205 = {
            'config': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515.config,
            'sparklines': new ObjectMatrix(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515.sparklines["clone"]())
          }, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB33[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46514] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46205);
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206 = adjustRangeOnMutation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46289, {
            'id': RemoveRowMutation.id,
            'params': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46811
          });
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46205.sparklines['setValue'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46205.sparklines["setValue"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288, {
            'startRow': -9999,
            'endRow': -9999,
            'startColumn': -9999,
            'endColumn': -9999,
            'rangeType': RANGE_TYPE.NORMAL
          });
        }
      }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392.forValue(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293 => {
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46815.endRow && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46815.startRow) {
          var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929912.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46514);
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB34[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46514];
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207 = {
            'config': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515.config,
            'sparklines': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515.sparklines["clone"]()
          }, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB34[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46514] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207);
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB33[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46514];
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208 = {
            'config': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515.config,
            'sparklines': new ObjectMatrix(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515.sparklines["clone"]())
          }, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB33[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46514] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208);
        }
      });
    }
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929912.size > 0 && (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A27.push({
      'id': H.id,
      'params': {
        'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46812,
        'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46813,
        'groupIds': Array.from(var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929912),
        'isSingle': false
      }
    }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A26.push({
      'id': H.id,
      'params': {
        'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46812,
        'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46813,
        'groupIds': Array.from(var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929912),
        'isSingle': false
      }
    }));
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB35 = {},
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A6 = false;
    return Object.entries(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB33).forEach(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46516, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517]) => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517.sparklines["getSizeOf"]() && (var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A6 = true, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517.sparklines["removeRows"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46815.startRow, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46815.endRow - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46815.startRow + 1), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB35[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46516] = {
        'config': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517.config,
        'sparklines': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517.sparklines["clone"]()
      });
    }), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A6 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A25.push({
      'id': V.id,
      'params': {
        'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46812,
        'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46813,
        'sparklineConfigMap': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB35
      }
    }), Object.keys(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB34).length > 0 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24.push({
      'id': V.id,
      'params': {
        'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46812,
        'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46813,
        'sparklineConfigMap': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB34
      }
    }), {
      'redos': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A25,
      'undos': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24,
      'preRedos': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A26,
      'preUndos': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A27
    };
  }
  _getRefRangeMutationsByDeleteCols(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46823, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46825) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46826;
    let {
        range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46827
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46823,
      var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929914 = new Set(),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB39 = {},
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB40 = {},
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A32 = [],
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A33 = [],
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A34 = [],
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A35 = [];
    if (!getSheetCommandTarget(this._univerInstanceService, {
      'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824,
      'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46825
    })) return {
      'redos': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A33,
      'undos': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A32
    };
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46828 = this._sparklineDataSourceModel["getSubUnitSparkline"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46825);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46828 || !((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46826 = this._sparklineDataSourceModel["getSparklineCache"]().sparklineAnchorMap["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824)) != null && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46826 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46826.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46825)) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46826.matrix)) return {
      'redos': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A33,
      'undos': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A32
    };
    for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521] of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46828) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46393 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521.sparklines;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46393.forValue((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297) => {
        if (Rectangle.intersects(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46827, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297)) {
          var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929914.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520);
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB40[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520];
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209 = {
            'config': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521.config,
            'sparklines': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521.sparklines["clone"]()
          }, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB40[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209);
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB39[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520];
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210 = {
            'config': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521.config,
            'sparklines': new ObjectMatrix(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521.sparklines["clone"]())
          }, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB39[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210);
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211 = adjustRangeOnMutation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297, {
            'id': RemoveColMutation.id,
            'params': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46823
          });
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210.sparklines["setValue"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210.sparklines['setValue'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296, {
            'startRow': -9999,
            'endRow': -9999,
            'startColumn': -9999,
            'endColumn': -9999,
            'rangeType': RANGE_TYPE.NORMAL
          });
        }
      }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46393.forValue((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303) => {
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46827.endColumn && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46827.startColumn) {
          var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929914.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520);
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB40[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520];
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212 = {
            'config': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521.config,
            'sparklines': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521.sparklines["clone"]()
          }, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB40[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212);
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB39[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520];
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213 = {
            'config': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521.config,
            'sparklines': new ObjectMatrix(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521.sparklines["clone"]())
          }, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB39[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213);
        }
      });
    }
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929914.size > 0 && (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A35.push({
      'id': H.id,
      'params': {
        'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824,
        'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46825,
        'groupIds': Array.from(var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929914),
        'isSingle': false
      }
    }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A34.push({
      'id': H.id,
      'params': {
        'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824,
        'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46825,
        'groupIds': Array.from(var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929914),
        'isSingle': false
      }
    }));
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB41 = {},
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A8 = false;
    return Object.entries(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB39).forEach(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46522, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46523]) => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46523.sparklines["getSizeOf"]() && (var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A8 = true, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46523.sparklines['removeColumns'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46827.startColumn, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46827.endColumn - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46827.startColumn + 1), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB41[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46522] = {
        'config': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46523.config,
        'sparklines': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46523.sparklines["clone"]()
      });
    }), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A8 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A33.push({
      'id': V.id,
      'params': {
        'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824,
        'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46825,
        'sparklineConfigMap': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB41
      }
    }), Object.keys(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB40).length > 0 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A32.push({
      'id': V.id,
      'params': {
        'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824,
        'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46825,
        'sparklineConfigMap': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB40
      }
    }), {
      'redos': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A33,
      'undos': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A32,
      'preRedos': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A34,
      'preUndos': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A35
    };
  }
  _initCorrectRangeWithSparkline() {
    this.disposeWithMe(this._commandService["onCommandExecuted"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526 => {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526.id === InsertColMutation.id) {
        let {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46395,
            range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46396
          } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526.params,
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46397 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46396.startColumn,
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D13 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46396.endColumn - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46396.startColumn + 1,
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46398 = this._sparklineDataSourceModel["getSubUnitSparkline"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46395);
        if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46398) return;
        for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46307, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46308] of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46398) {
          this._sparklineDataSourceModel["clearSparklineCache"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46395, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46307);
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46308.sparklines;
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214.forValue((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145) => {
            let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4 = {
              ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145
            };
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46397 <= var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4.startColumn ? (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4.startColumn += var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D13, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4.endColumn += var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D13) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46397 > var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4.endColumn || (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4.endColumn += var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D13), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214.setValue(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4);
          });
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214.getMatrix();
          for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149 in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215) {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215[Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149)];
            if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108) continue;
            let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A = Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108).map(Number),
              var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6 = Math.max(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A);
            for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46397; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665--) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46397 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665] && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D13] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665], delete var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665]);
          }
          this._sparklineDataSourceModel['updateSparklineExtraNum'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46395, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46307);
        }
      } else {
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526.id === InsertRowMutation.id) {
          let {
              unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309,
              subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310,
              range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311
            } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526.params,
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311.startRow,
            var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D11 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311.endRow - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311.startRow + 1,
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313 = this._sparklineDataSourceModel["getSubUnitSparkline"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310);
          if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313) return;
          for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217] of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313) {
            this._sparklineDataSourceModel["clearSparklineCache"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216);
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217.sparklines;
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150.forValue((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111) => {
              let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2 = {
                ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111
              };
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312 <= var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2.startRow ? (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2.startRow += var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D11, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2.endRow += var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D11) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312 > var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2.endRow || (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2.endRow += var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D11), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150.setValue(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2);
            });
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150.getMatrix(),
              var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1 = Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151).map(Number),
              var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D8 = Math.max(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1);
            for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D8; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115--) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115] && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D11] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115], delete var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115]);
            this._sparklineDataSourceModel["updateSparklineExtraNum"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216);
          }
        } else {
          if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526.id === RemoveColMutation.id) {
            let {
                range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218,
                unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219,
                subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46220
              } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526.params,
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221 = this._sparklineDataSourceModel["getSubUnitSparkline"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46220);
            if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221) return;
            for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153] of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221) {
              let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153.sparklines;
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116.forValue((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668) => {
                let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669 = adjustRangeOnMutation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526);
                var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116.setValue(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116.setValue(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667, {
                  'startRow': -9999,
                  'endRow': -9999,
                  'startColumn': -9999,
                  'endColumn': -9999,
                  'rangeType': RANGE_TYPE.NORMAL
                });
              }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116.removeColumns(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218.startColumn, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218.endColumn - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218.startColumn + 1);
            }
            this._sparklineDataSourceModel["reBuildAnchorCache"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46220);
          } else {
            if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526.id === RemoveRowMutation.id) {
              let {
                  range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154,
                  unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155,
                  subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156
                } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526.params,
                var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157 = this._sparklineDataSourceModel["getSubUnitSparkline"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156);
              if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157) return;
              for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118] of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157) {
                let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118.sparklines;
                var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674.forValue((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634) => {
                  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635 = adjustRangeOnMutation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526);
                  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674.setValue(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674.setValue(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633, {
                    'startRow': -9999,
                    'endRow': -9999,
                    'startColumn': -9999,
                    'endColumn': -9999,
                    'rangeType': RANGE_TYPE.NORMAL
                  });
                }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674.removeRows(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154.startRow, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154.endRow - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154.startRow + 1);
              }
              this._sparklineDataSourceModel['reBuildAnchorCache'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156);
            } else {
              if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526.id === MoveColsMutation.id) {
                let {
                    unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119,
                    subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120,
                    sourceRange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46121,
                    targetRange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122
                  } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526.params,
                  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123 = this._sparklineDataSourceModel["getSubUnitSparkline"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120);
                if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123) return;
                for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676] of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123) {
                  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676.sparklines;
                  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640.forValue((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621) => {
                    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622 = adjustRangeOnMutation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526);
                    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640.setValue(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640.setValue(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620, {
                      'startRow': -9999,
                      'endRow': -9999,
                      'startColumn': -9999,
                      'endColumn': -9999,
                      'rangeType': RANGE_TYPE.NORMAL
                    });
                  }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640.moveColumns(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46121.startColumn, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46121.endColumn - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46121.startColumn + 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122.startColumn);
                }
                this._sparklineDataSourceModel['reBuildAnchorCache'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120);
              } else {
                if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526.id === MoveRowsMutation.id) {
                  let {
                      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677,
                      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678,
                      sourceRange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679,
                      targetRange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680
                    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526.params,
                    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681 = this._sparklineDataSourceModel["getSubUnitSparkline"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678);
                  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681) return;
                  for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642] of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681) {
                    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642.sparklines;
                    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627.forValue((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611) => {
                      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612 = adjustRangeOnMutation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526);
                      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627.setValue(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627.setValue(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610, {
                        'startRow': -9999,
                        'endRow': -9999,
                        'startColumn': -9999,
                        'endColumn': -9999,
                        'rangeType': RANGE_TYPE.NORMAL
                      });
                    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627.moveRows(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679.startRow, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679.endRow - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679.startRow + 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680.startRow);
                  }
                  this._sparklineDataSourceModel["reBuildAnchorCache"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678);
                } else {
                  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526.id === MoveRangeMutation.id) {
                    let {
                      fromRange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643,
                      toRange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644,
                      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645,
                      from: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646,
                      to: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647
                    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526.params;
                    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646.subUnitId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647.subUnitId) return;
                    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646.subUnitId,
                      {
                        startRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649,
                        endRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650,
                        startColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651,
                        endColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652
                      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643,
                      {
                        startRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653,
                        startColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654
                      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644,
                      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649,
                      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651,
                      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655 = this._sparklineDataSourceModel["getSubUnitSparkline"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648);
                    if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655.size)) return;
                    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628++) for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617++) {
                      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462 = this._sparklineDataSourceModel["getSparkline"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617);
                      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462) {
                        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461 = this._sparklineDataSourceModel["getSparklineById"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462);
                        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461) {
                          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461.sparklines["getValue"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617);
                          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461.sparklines["setValue"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461.sparklines['realDeleteValue'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617));
                        }
                      }
                    }
                    for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630] of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655) {
                      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630.sparklines;
                      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618.forValue((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465) => {
                        let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB = {
                          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465
                        };
                        Rectangle.contains(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465) && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.startRow += var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.endRow += var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.startColumn += var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.endColumn += var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618.setValue(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB);
                      });
                    }
                    this._sparklineDataSourceModel["reBuildAnchorCache"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648);
                  }
                }
              }
            }
          }
        }
      }
    }));
  }
};
let Z = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46835, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46836, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46837) {
    super(), this._univerInstanceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46835, this._sheetInterceptorService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46836, this._sparklineDataSourceModel = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46837, this._initSheetChange();
  }
  _initSheetChange() {
    this.disposeWithMe(this._sheetInterceptorService['interceptCommand']({
      'getMutations': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46528 => {
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46528.id === RemoveSheetCommand.id) {
          var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46529;
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46399 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46528.params,
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46400 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46399.unitId || this._univerInstanceService["getCurrentUnitOfType"](UniverInstanceType.UNIVER_SHEET).getUnitId(),
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46399.subUnitId || ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46529 = this._univerInstanceService["getCurrentUnitOfType"](UniverInstanceType.UNIVER_SHEET).getActiveSheet()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46529.getSheetId());
          if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46400 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401) return {
            'redos': [],
            'undos': []
          };
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46402 = this._sparklineDataSourceModel["getSubUnitSparkline"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46400, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401);
          if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46402) return {
            'redos': [],
            'undos': []
          };
          let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92996 = new Set(),
            var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13 = {};
          for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46314, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315] of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46402) var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92996.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46314), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46314] = {
            'config': Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315.config),
            'sparklines': Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315.sparklines["clone"]())
          };
          if (var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92996.size) return {
            'redos': [{
              'id': H.id,
              'params': {
                'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46400,
                'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401,
                'groupIds': Array.from(var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92996),
                'isSingle': false
              }
            }],
            'undos': [{
              'id': V.id,
              'params': {
                'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46400,
                'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401,
                'sparklineConfigMap': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13
              }
            }]
          };
        } else {
          if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46528.id === CopySheetCommand.id) {
            let {
              unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316,
              subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317,
              targetSubUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46318
            } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46528.params;
            if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46318) return {
              'redos': [],
              'undos': []
            };
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319 = this._sparklineDataSourceModel['getSubUnitSparkline'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317);
            if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319) return {
              'redos': [],
              'undos': []
            };
            let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92991 = new Set(),
              var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7 = {};
            for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46222, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223] of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319) {
              let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3 = 'g_' + generateRandomId(6);
              var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92991.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46222), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7[var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3] = {
                'config': Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223.config),
                'sparklines': Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223.sparklines["clone"]())
              };
            }
            if (var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92991.size) return {
              'redos': [{
                'id': V.id,
                'params': {
                  'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316,
                  'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46318,
                  'sparklineConfigMap': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7
                }
              }],
              'undos': [{
                'id': H.id,
                'params': {
                  'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316,
                  'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46318,
                  'groupIds': Array.from(var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92991),
                  'isSingle': false
                }
              }]
            };
          }
        }
        return {
          'redos': [],
          'undos': []
        };
      }
    }));
  }
};
let Q = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46841, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46842) {
    super(), this._resourceManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46841, this._sparklineDataSourceModel = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46842, this._initSnapshot();
  }
  _initSnapshot() {
    this.disposeWithMe(this._resourceManagerService['registerPluginResource']({
      'toJson': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46532 => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46533 = this._sparklineDataSourceModel['toJSON'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46532);
        return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46533 ? JSON.stringify(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46533) : '';
      },
      'parseJson': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46536 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46536 ? JSON.parse(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46536) : {},
      'pluginName': P,
      'businesses': [UniverInstanceType.UNIVER_SHEET],
      'onLoad': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46537, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46538) => {
        this._sparklineDataSourceModel["fromJSON"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46538);
      },
      'onUnLoad': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46541 => {
        this._sparklineDataSourceModel["deleteUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46541);
      }
    }));
  }
};
let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461031 = class extends Plugin {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46845 = Me, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46846, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46847, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46848) {
    super(), this._config = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46845, this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46846, this._configService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46847, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46848;
    let {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46849
    } = merge({}, Me, this._config);
    this._configService['setConfig']("sheets-sparkline.config", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46849), this._initDependencies(), this._initRegisterCommand();
  }
  _initDependencies() {
    [[B], [q], [Y], [K], [X], [J], [Z], [Q]].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46543 => {
      this._injector["add"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46543);
    }), touchDependencies(this._injector, [[Q]]);
  }
  onReady() {
    touchDependencies(this._injector, [[q], [Y], [K], [X], [J], [Z]]);
  }
  _initRegisterCommand() {
    [U, V, W, H, ke, G].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46545 => this._commandService["registerCommand"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46545));
  }
};
export { var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461031 as UniverSheetSparklinePlugin };
export { K, q, J, Y, X, Z, Q };
