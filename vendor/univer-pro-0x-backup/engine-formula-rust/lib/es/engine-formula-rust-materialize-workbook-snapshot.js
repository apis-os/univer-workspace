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
import { loadNativeBinding } from "./engine-formula-rust-load-native-binding.js";
import { materializeWorkbookSnapshotOnRust } from "./engine-formula-rust-materialize-workbook-snapshot-on-rust.js";
async function materializeWorkbookSnapshot(workbook, unitID, rev, dirtyInput) {
  await loadNativeBinding();
  let result = await materializeWorkbookSnapshotOnRust(Buffer.from(JSON.stringify(workbook)), unitID, rev, dirtyInput == null ? void 0 : JSON.stringify(dirtyInput)),
    draft = JSON.parse(result.snapshotDraftJson.toString("utf8")),
    encoder = new TextEncoder(),
    sheets = Object.fromEntries(Object.entries(draft.workbook.sheets).map(([sheetID, sheet]) => {
      let {
        originalMetaJson: originalMetaJson2,
        ...meta
      } = sheet;
      return [sheetID, {
        ...meta,
        originalMeta: encoder.encode(originalMetaJson2)
      }];
    })),
    {
      originalMetaJson,
      ...workbookMeta
    } = draft.workbook;
  return {
    snapshot: {
      unitID: draft.unitID,
      type: draft.type,
      rev: draft.rev,
      workbook: {
        ...workbookMeta,
        sheets,
        originalMeta: encoder.encode(originalMetaJson)
      },
      doc: void 0,
      slide: void 0,
      board: void 0
    },
    sheetBlocks: Object.fromEntries(result.sheetBlocks.map(({
      sheetId,
      blocks
    }) => [sheetId, blocks])),
    warnings: JSON.parse(result.warningsJson.toString("utf8")),
    calculationStats: JSON.parse(result.calculationStatsJson.toString("utf8"))
  };
}
export { materializeWorkbookSnapshot };
