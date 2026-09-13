import { IDialogService, IMenuManagerService, MenuItemType, RibbonStartGroup, getMenuHiddenObservable } from "@univerjs/ui";
import { ClientSnapshotServerService, EXPORT_FORMAT_DIALOG, ExchangeFormat, IExchangeOperateService, IExchangeService, UniverExchangeClientPlugin, isCurrentUnitLoadedFromServer, transformSheetBlockMetaToString, transformWorkbookSnapshotMetaToString } from "@univerjs-pro/exchange-client";
import { CommandType, DependentOn, Disposable, ICommandService, IConfigService, IResourceLoaderService, IUniverInstanceService, Inject, Injector, LocaleService, Plugin, UniverInstanceType, createIdentifier, merge } from "@univerjs/core";
import { b64DecodeUnicode, getSheetBlocksFromSnapshot, transformSnapshotToWorkbookData, transformWorkbookDataToSnapshot } from "@univerjs-pro/collaboration";
import { WorkbookExportPermission } from "@univerjs/sheets";
import { getCurrentRangeDisable$ } from "@univerjs/sheets-ui";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { B, H, L, V } from "./internal-glue.js";
import { q } from "./sheets-exchange-client-menu-schema.js";
import { F } from "./sheets-exchange-client-isheet-exchange.js";
const M = {
  minSheetRowCount: 1,
  minSheetColumnCount: 1,
  disableCellImageConversion: true
};
let I = class {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611) {
    this._exchangeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610, this._configService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611;
  }
  importSheetToUnitId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615 = this._createImportOptions();
    return this._exchangeService["importFileToUnitId"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614, UniverInstanceType.UNIVER_SHEET, {
      sheet: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615
    });
  }
  async importSheetToSnapshot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619 = this._createImportOptions(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620 = await this._exchangeService["importFileToJson"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618, UniverInstanceType.UNIVER_SHEET, {
        sheet: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619
      });
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620 ? this.transformSnapshotJsonToWorkbookData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620) : undefined;
  }
  exportSheetByUnitId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625 = ExchangeFormat.XLSX, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627 = this._createExportOptions(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626);
    return this._exchangeService["exportFileByUnitId"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624, UniverInstanceType.UNIVER_SHEET, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625, {
      sheet: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627
    });
  }
  async exportSheetBySnapshot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633 = ExchangeFormat.XLSX, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635 = await this.transformWorkbookDataToSnapshotJson(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636 = this._createExportOptions(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634);
    return this._exchangeService["exportFileBySnapshot"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635, UniverInstanceType.UNIVER_SHEET, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633, {
      sheet: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636
    });
  }
  transformSnapshotJsonToWorkbookData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642) {
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A = Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642.sheetBlocks || {}).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 => ({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46,
      data: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.data ? JSON.parse(b64DecodeUnicode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.data)) : undefined
    }));
    return transformSnapshotToWorkbookData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642.snapshot, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A);
  }
  async transformWorkbookDataToSnapshotJson(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644) {
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB = {
        metadata: undefined
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645 = new ClientSnapshotServerService(),
      {
        snapshot: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646
      } = await transformWorkbookDataToSnapshot(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644.rev ?? 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647 = transformWorkbookSnapshotMetaToString(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647) throw Error("Failed\x20to\x20transform\x20snapshot\x20to\x20string");
    return {
      snapshot: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647,
      sheetBlocks: transformSheetBlockMetaToString(await getSheetBlocksFromSnapshot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645))
    };
  }
  _getConfig() {
    return this._configService["getConfig"]("sheets-exchange-client.config") ?? M;
  }
  _createImportOptions() {
    let {
      minSheetRowCount: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652,
      minSheetColumnCount: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653
    } = this._getConfig();
    return {
      minSheetRowCount: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652,
      minSheetColumnCount: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653
    };
  }
  _createExportOptions(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657) {
    let {
      disableCellImageConversion: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658
    } = this._getConfig();
    return {
      useImageUrl: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658,
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656 !== ExchangeFormat.XLSX && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657 ? {
        csv: {
          sheetId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657
        }
      } : {})
    };
  }
};
let R = class {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665) {
    this._sheetExchangeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662, this._exchangeOperateService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663, this._univerInstanceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664, this._resourceLoaderService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665;
  }
  importSheetToUnitId() {
    return this._exchangeOperateService["importFileToUnitId"](UniverInstanceType.UNIVER_SHEET, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461 => this._sheetExchangeService["importSheetToUnitId"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461));
  }
  importSheetToSnapshot() {
    return this._exchangeOperateService["importFileToSnapshot"](UniverInstanceType.UNIVER_SHEET, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462 => this._sheetExchangeService["importSheetToSnapshot"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462));
  }
  exportSheetByUnitId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672 = ExchangeFormat.XLSX, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674 = this._getCurrentWorkbook();
    return this._exchangeOperateService["exportFile"](() => this._sheetExchangeService["exportSheetByUnitId"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670 ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674.getUnitId(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671 ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674.getSnapshot().name, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672);
  }
  exportSheetBySnapshot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680 = ExchangeFormat.XLSX, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682 = this._getCurrentWorkbook(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683 = this._resourceLoaderService["saveUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682.getUnitId()) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682.getSnapshot();
    return this._exchangeOperateService["exportFile"](() => this._sheetExchangeService["exportSheetBySnapshot"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683.name, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680);
  }
  _getCurrentWorkbook() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688 = this._univerInstanceService["getCurrentUnitOfType"](UniverInstanceType.UNIVER_SHEET);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688) throw Error("No\x20unit\x20of\x20type\x20" + UniverInstanceType.UNIVER_SHEET + "\x20is\x20currently\x20active.");
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688;
  }
};
let X = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696) {
    super(), this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695, this._menuManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696, this._initCommands(), this._initMenus();
  }
  _initCommands() {
    [B, H, V].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 => {
      this.disposeWithMe(this._commandService["registerCommand"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463));
    });
  }
  _initMenus() {
    this._menuManagerService["mergeMenu"](q);
  }
};
let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185 = class extends Plugin {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103 = M, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105) {
    super(), this._config = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103, this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104, this._configService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105;
    let {
      menu: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107
    } = merge({}, M, this._config);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106 && this._configService["setConfig"]("menu", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106, {
      merge: true
    }), this._configService["setConfig"]("sheets-exchange-client.config", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107);
  }
  onStarting() {
    [[F, {
      useClass: I
    }], [L, {
      useClass: R
    }], [X]].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465 => this._injector["add"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465));
  }
  onReady() {
    this._injector["get"](X);
  }
};
export { var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185 as UniverSheetsExchangeClientPlugin };
export { I, R, X };
