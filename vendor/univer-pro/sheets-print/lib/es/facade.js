import { CancelSheetPrintOperation, ConfirmSheetPrintOperation, ISheetPrintManagerService, PrintArea, PrintFreeze, PrintHeaderFooter, PrintHeaderFooterSymbol, SheetPrintClientService, SheetPrintOpenOperation, SheetScreenShotOperation, hasPrintFacadePermission } from "@univerjs-pro/sheets-print";
import { CanceledError, ICommandService, PaperType } from "@univerjs/core";
import { FRange, FWorkbook } from "@univerjs/sheets/facade";
import { FEnum, FEventName, FUniver } from "@univerjs/core/facade";
import { PrintAlign, PrintDirection, PrintPaperMargin, PrintScale } from "@univerjs-pro/print";
var C = class extends FWorkbook {
  updatePrintConfig(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618) {
    return this._injector["get"](ISheetPrintManagerService).updateLayoutConfig(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618), this;
  }
  updatePrintRenderConfig(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620) {
    return this._injector["get"](ISheetPrintManagerService).updateRenderConfig(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620), this;
  }
  print() {
    return this._injector["get"](ICommandService).syncExecuteCommand(ConfirmSheetPrintOperation.id);
  }
  openPrintDialog() {
    return this._injector["get"](ICommandService).syncExecuteCommand(SheetPrintOpenOperation.id);
  }
  closePrintDialog() {
    return this._injector["get"](ICommandService).syncExecuteCommand(CancelSheetPrintOperation.id);
  }
  async saveScreenshotToClipboard() {
    return hasPrintFacadePermission(this._injector) ? this._injector["get"](ICommandService).executeCommand(SheetScreenShotOperation.id) : false;
  }
};
FWorkbook.extend(C);
var w = class extends FRange {
  getScreenshot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622) {
    return hasPrintFacadePermission(this._injector) ? this._injector["get"](SheetPrintClientService).getRangeImage(this._workbook["getUnitId"](), this._worksheet["getSheetId"](), this._range, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622.includeHeaders) : false;
  }
};
FRange.extend(w);
var T = class extends FEventName {
  get BeforeSheetPrintOpen() {
    return "BeforeSheetPrintOpen";
  }
  get BeforeSheetPrintConfirm() {
    return "BeforeSheetPrintConfirm";
  }
  get BeforeSheetPrintCanceled() {
    return "BeforeSheetPrintCanceled";
  }
  get SheetPrintOpen() {
    return "SheetPrintOpen";
  }
  get SheetPrintConfirmed() {
    return "SheetPrintConfirmed";
  }
  get SheetPrintCanceled() {
    return "SheetPrintCanceled";
  }
};
FEventName.extend(T);
var E = class extends FEnum {
  get PrintArea() {
    return PrintArea;
  }
  get PrintAlign() {
    return PrintAlign;
  }
  get PrintPaperSize() {
    return PaperType;
  }
  get PrintPaperMargin() {
    return PrintPaperMargin;
  }
  get PrintScale() {
    return PrintScale;
  }
  get PrintDirection() {
    return PrintDirection;
  }
  get PrintFreeze() {
    return PrintFreeze;
  }
  get PrintHeaderFooter() {
    return PrintHeaderFooter;
  }
  get PrintHeaderFooterSymbol() {
    return PrintHeaderFooterSymbol;
  }
};
FEnum.extend(E);
var D = class extends FUniver {
  _initialize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624.get(ICommandService);
    this.disposeWithMe(this.registerEventHandler(this.Event["BeforeSheetPrintOpen"], () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625.beforeCommandExecuted(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466 => {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466.id === SheetPrintOpenOperation.id) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 = this.getActiveWorkbook();
        if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46) return;
        let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB = {
          workbook: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46,
          worksheet: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.getActiveSheet()
        };
        if (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB == null) return;
        if (this.fireEvent(this.Event["BeforeSheetPrintOpen"], var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.cancel) throw new CanceledError();
      }
    }))), this.disposeWithMe(this.registerEventHandler(this.Event["BeforeSheetPrintConfirm"], () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625.beforeCommandExecuted(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468 => {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468.id === ConfirmSheetPrintOperation.id) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624.get(ISheetPrintManagerService);
        if (!this.getActiveWorkbook()) return;
        let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1 = {
          layoutConfig: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461.layoutConfig,
          renderConfig: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461.renderConfig
        };
        if (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1 == null) return;
        if (this.fireEvent(this.Event["BeforeSheetPrintConfirm"], var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1.cancel) throw new CanceledError();
      }
    }))), this.disposeWithMe(this.registerEventHandler(this.Event["BeforeSheetPrintCanceled"], () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625.beforeCommandExecuted(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610 => {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610.id === CancelSheetPrintOperation.id) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624.get(ISheetPrintManagerService);
        if (!this.getActiveWorkbook()) return;
        let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2 = {
          layoutConfig: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462.layoutConfig,
          renderConfig: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462.renderConfig
        };
        if (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2 == null) return;
        if (this.fireEvent(this.Event["BeforeSheetPrintCanceled"], var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2.cancel) throw new CanceledError();
      }
    }))), this.disposeWithMe(this.registerEventHandler(this.Event["SheetPrintOpen"], () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625.onCommandExecuted(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612 => {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612.id === SheetPrintOpenOperation.id) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 = this.getActiveWorkbook();
        if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463) return;
        let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB3 = {
          workbook: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463,
          worksheet: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463.getActiveSheet()
        };
        if (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB3 == null) return;
        this.fireEvent(this.Event["SheetPrintOpen"], var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB3);
      }
    }))), this.disposeWithMe(this.registerEventHandler(this.Event["SheetPrintConfirmed"], () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625.onCommandExecuted(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614 => {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614.id === ConfirmSheetPrintOperation.id) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624.get(ISheetPrintManagerService);
        if (!this.getActiveWorkbook()) return;
        let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4 = {
          layoutConfig: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464.layoutConfig,
          renderConfig: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464.renderConfig
        };
        if (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4 == null) return;
        this.fireEvent(this.Event["SheetPrintConfirmed"], var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4);
      }
    }))), this.disposeWithMe(this.registerEventHandler(this.Event["SheetPrintCanceled"], () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625.onCommandExecuted(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616 => {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616.id === CancelSheetPrintOperation.id) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624.get(ISheetPrintManagerService);
        if (!this.getActiveWorkbook()) return;
        let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB5 = {
          layoutConfig: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465.layoutConfig,
          renderConfig: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465.renderConfig
        };
        if (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB5 == null) return;
        this.fireEvent(this.Event["SheetPrintCanceled"], var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB5);
      }
    })));
  }
};
FUniver.extend(D);
export {};
