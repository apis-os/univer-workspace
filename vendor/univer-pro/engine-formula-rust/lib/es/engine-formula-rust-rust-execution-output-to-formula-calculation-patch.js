import { createRequire } from "node:module";
import process from "node:process";
import { CommandType, Disposable, ICommandService, setDependencies } from "@univerjs/core";
import { CellValueType, ObjectMatrix } from "@univerjs/core";
import { IConfigService as IConfigService2, Injector, setDependencies as setDependencies4, touchDependencies } from "@univerjs/core";
import { ICalculateFormulaService } from "@univerjs/engine-formula";
import { UniverProFormulaEnginePlugin } from "@univerjs-pro/engine-formula";
import { CellValueType as CellValueType2, CommandType as CommandType2, createBaseFormulaTableReferenceNormalizer, createBaseFormulaTableNameMap, Disposable as Disposable2, ICommandService as ICommandService2, IUniverInstanceService, LocaleType, ObjectMatrix as ObjectMatrix2, setDependencies as setDependencies2, toDisposable, UniverInstanceType } from "@univerjs/core";
import { FormulaDataModel, IActiveDirtyManagerService, ISuperTableService, SetFormulaCalculationResultMutation } from "@univerjs/engine-formula";
import { AsyncLock, createIdentifier, Disposable as Disposable3, ICommandService as ICommandService3, IConfigService, ObjectMatrix as ObjectMatrix3, setDependencies as setDependencies3 } from "@univerjs/core";
import { ENGINE_FORMULA_PLUGIN_CONFIG_KEY, FormulaDataModel as FormulaDataModel2, FormulaExecuteStageType, IFeatureCalculationManagerService, IFormulaCurrentConfigService, IFormulaDependencyGenerator, IFormulaRuntimeService, IOtherFormulaManagerService, ISuperTableService as ISuperTableService2, SetArrayFormulaDataMutation, SetFormulaCalculationResultMutation as SetFormulaCalculationResultMutation2 } from "@univerjs/engine-formula";
import { ExternalReferenceModel, IFormulaReferenceDataService } from "@univerjs-pro/engine-formula";
import { Subject } from "rxjs";
import { Buffer } from "node:buffer";
import { isRecord } from "./internal-glue.js";
function rustExecutionOutputToFormulaCalculationPatch(output) {
  let arrayFormulaOutput = output;
  return {
    unitData: output.resultBatches?.length ? resultBatchesToUnitData(output.resultBatches) : runtimeDataToUnitData(output.runtimeData),
    unitOtherData: otherFormulaDataToUnitOtherData(output.otherFormulaData),
    ...(arrayFormulaOutput.arrayFormulaRange ? {
      arrayFormulaRange: arrayFormulaOutput.arrayFormulaRange
    } : {}),
    ...(arrayFormulaOutput.arrayFormulaCellData ? {
      arrayFormulaCellData: arrayFormulaCellDataToUnitData(arrayFormulaOutput.arrayFormulaCellData)
    } : {}),
    errors: output.errors?.map(error => ({
      code: "RUST_FORMULA_CALCULATION_ERROR",
      unitId: error.unitId,
      sheetId: error.sheetId,
      row: error.row,
      column: error.column,
      message: error.message
    }))
  };
}
function arrayFormulaCellDataToUnitData(input) {
  let result = {};
  for (let [unitId, sheetMap] of Object.entries(input)) {
    let unitData = {};
    result[unitId] = unitData;
    for (let [sheetId, rowMap] of Object.entries(sheetMap)) {
      let sheetData = {};
      unitData[sheetId] = sheetData;
      for (let [rowKey, colMap] of Object.entries(rowMap)) {
        let rowData = {};
        sheetData[Number(rowKey)] = rowData;
        for (let [colKey, value] of Object.entries(colMap)) rowData[Number(colKey)] = cellDataFromRustValue(value);
      }
    }
  }
  return result;
}
function otherFormulaDataToUnitOtherData(otherFormulaData) {
  let unitOtherData = {};
  return Object.entries(otherFormulaData ?? {}).forEach(([unitId, sheetMap]) => {
    if (!sheetMap) return;
    let unitSheetData = {};
    unitOtherData[unitId] = unitSheetData, Object.entries(sheetMap).forEach(([sheetId, formulaMap]) => {
      if (!formulaMap) return;
      let sheetData = {};
      unitSheetData[sheetId] = sheetData, Object.entries(formulaMap).forEach(([formulaId, rowMap]) => {
        if (!rowMap) return;
        let formulaData = {};
        sheetData[formulaId] = formulaData, Object.entries(rowMap).forEach(([rowKey, colMap]) => {
          if (!colMap) return;
          let row = Number(rowKey),
            rowData = {};
          formulaData[row] = rowData, Object.entries(colMap).forEach(([colKey, value]) => {
            rowData[Number(colKey)] = [[cellDataFromRustValue(value)]];
          });
        });
      });
    });
  }), unitOtherData;
}
function resultBatchesToUnitData(resultBatches) {
  let unitData = {};
  for (let batch of resultBatches) {
    let unitSheetData = unitData[batch.unitId] ?? {};
    unitData[batch.unitId] = unitSheetData;
    let sheetData = unitSheetData[batch.sheetId] ?? {};
    unitSheetData[batch.sheetId] = sheetData;
    for (let index = 0; index < batch.values.length; index++) {
      let row = batch.rows[index],
        col = batch.cols[index],
        value = batch.values[index],
        rowData = sheetData[row] ?? {};
      sheetData[row] = rowData, rowData[col] = cellDataFromRustValue(value);
    }
  }
  return unitData;
}
function runtimeDataToUnitData(runtimeData) {
  let unitData = {};
  return Object.entries(runtimeData ?? {}).forEach(([unitId, sheetMap]) => {
    if (!sheetMap) return;
    let unitSheetData = {};
    unitData[unitId] = unitSheetData, Object.entries(sheetMap).forEach(([sheetId, rowMap]) => {
      if (!rowMap) return;
      let sheetData = {};
      unitSheetData[sheetId] = sheetData, Object.entries(rowMap).forEach(([rowKey, colMap]) => {
        if (!colMap) return;
        let row = Number(rowKey),
          rowData = {};
        sheetData[row] = rowData, Object.entries(colMap).forEach(([colKey, value]) => {
          rowData[Number(colKey)] = cellDataFromRustValue(value);
        });
      });
    });
  }), unitData;
}
function cellDataFromRustValue(value) {
  if (value == null) return null;
  if (typeof value == "number") return {
    t: CellValueType.NUMBER,
    v: value
  };
  if (typeof value == "boolean") return {
    t: CellValueType.BOOLEAN,
    v: value
  };
  if (typeof value == "string") return {
    t: CellValueType.STRING,
    v: value
  };
  if (isRecord(value)) {
    let cell = sanitizeCoreCellData(value);
    if (Object.keys(cell).length > 0) return cell;
  }
  return {
    v: value
  };
}
function sanitizeCoreCellData(value) {
  let cell = {};
  for (let key of ["v", "t", "p", "s", "f", "si", "ref", "xf", "custom"]) key in value && (cell[key] = value[key]);
  return cell;
}
export { rustExecutionOutputToFormulaCalculationPatch };
