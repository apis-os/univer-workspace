import { CancelSheetPrintOperation as var_core_value_sig186C, ConfirmSheetPrintOperation as var_core_value_sigD955, ISheetPrintManagerService as var_core_value_sig48BD, PrintArea as var_core_value_sig429F, PrintFreeze as var_core_value_sigF62A, PrintHeaderFooter as var_core_value_sig8178, PrintHeaderFooterSymbol as var_core_value_sigE9ED, SheetPrintClientService as var_core_value_sigB577, SheetPrintOpenOperation as var_core_value_sig9572, SheetScreenShotOperation as var_core_value_sigD873, hasPrintFacadePermission as var_core_value_sigA12B } from "@univerjs-pro/sheets-print";
import { CanceledError as var_core_value_sigF230, ICommandService as var_core_value_sig09B8, PaperType as var_core_value_sig6F91 } from "@univerjs/core";
import { FRange as var_core_value_sigF9C7, FWorkbook as var_core_value_sig8895 } from "@univerjs/sheets/facade";
import { FEnum as var_core_value_sigC80B, FEventName as var_core_value_sig284F, FUniver as var_core_value_sigE154 } from "@univerjs/core/facade";
import { PrintAlign as var_core_value_sig4632, PrintDirection as var_core_value_sig12F2, PrintPaperMargin as var_core_value_sig2259, PrintScale as var_core_value_sig9E2F } from "@univerjs-pro/print";
var C = class extends var_core_value_sig8895 {
  updatePrintConfig(var_core_value_sig26DB) {
    return this._injector["get"](var_core_value_sig48BD).updateLayoutConfig(var_core_value_sig26DB), this;
  }
  updatePrintRenderConfig(var_core_value_sigF0F9) {
    return this._injector["get"](var_core_value_sig48BD).updateRenderConfig(var_core_value_sigF0F9), this;
  }
  print() {
    return this._injector["get"](var_core_value_sig09B8).syncExecuteCommand(var_core_value_sigD955.id);
  }
  openPrintDialog() {
    return this._injector["get"](var_core_value_sig09B8).syncExecuteCommand(var_core_value_sig9572.id);
  }
  closePrintDialog() {
    return this._injector["get"](var_core_value_sig09B8).syncExecuteCommand(var_core_value_sig186C.id);
  }
  async saveScreenshotToClipboard() {
    return var_core_value_sigA12B(this._injector) ? this._injector["get"](var_core_value_sig09B8).executeCommand(var_core_value_sigD873.id) : false;
  }
};
var_core_value_sig8895.extend(C);
var w = class extends var_core_value_sigF9C7 {
  getScreenshot(var_core_value_sig1A0F) {
    return var_core_value_sigA12B(this._injector) ? this._injector["get"](var_core_value_sigB577).getRangeImage(this._workbook["getUnitId"](), this._worksheet["getSheetId"](), this._range, var_core_value_sig1A0F == null ? undefined : var_core_value_sig1A0F.includeHeaders) : false;
  }
};
var_core_value_sigF9C7.extend(w);
var T = class extends var_core_value_sig284F {
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
var_core_value_sig284F.extend(T);
var E = class extends var_core_value_sigC80B {
  get PrintArea() {
    return var_core_value_sig429F;
  }
  get PrintAlign() {
    return var_core_value_sig4632;
  }
  get PrintPaperSize() {
    return var_core_value_sig6F91;
  }
  get PrintPaperMargin() {
    return var_core_value_sig2259;
  }
  get PrintScale() {
    return var_core_value_sig9E2F;
  }
  get PrintDirection() {
    return var_core_value_sig12F2;
  }
  get PrintFreeze() {
    return var_core_value_sigF62A;
  }
  get PrintHeaderFooter() {
    return var_core_value_sig8178;
  }
  get PrintHeaderFooterSymbol() {
    return var_core_value_sigE9ED;
  }
};
var_core_value_sigC80B.extend(E);
var D = class extends var_core_value_sigE154 {
  _initialize(var_core_value_sigFBA4) {
    let var_core_value_sig4383 = var_core_value_sigFBA4.get(var_core_value_sig09B8);
    this.disposeWithMe(this.registerEventHandler(this.Event["BeforeSheetPrintOpen"], () => var_core_value_sig4383.beforeCommandExecuted(var_core_value_sigF602 => {
      if (var_core_value_sigF602.id === var_core_value_sig9572.id) {
        let var_core_value_sig7524 = this.getActiveWorkbook();
        if (!var_core_value_sig7524) return;
        let var_core_value_sig2AD8 = {
          workbook: var_core_value_sig7524,
          worksheet: var_core_value_sig7524.getActiveSheet()
        };
        if (var_core_value_sig2AD8 == null) return;
        if (this.fireEvent(this.Event["BeforeSheetPrintOpen"], var_core_value_sig2AD8), var_core_value_sig2AD8.cancel) throw new var_core_value_sigF230();
      }
    }))), this.disposeWithMe(this.registerEventHandler(this.Event["BeforeSheetPrintConfirm"], () => var_core_value_sig4383.beforeCommandExecuted(var_core_value_sig1BBD => {
      if (var_core_value_sig1BBD.id === var_core_value_sigD955.id) {
        let var_core_value_sig2AD0 = var_core_value_sigFBA4.get(var_core_value_sig48BD);
        if (!this.getActiveWorkbook()) return;
        let var_core_value_sig3EEE = {
          layoutConfig: var_core_value_sig2AD0.layoutConfig,
          renderConfig: var_core_value_sig2AD0.renderConfig
        };
        if (var_core_value_sig3EEE == null) return;
        if (this.fireEvent(this.Event["BeforeSheetPrintConfirm"], var_core_value_sig3EEE), var_core_value_sig3EEE.cancel) throw new var_core_value_sigF230();
      }
    }))), this.disposeWithMe(this.registerEventHandler(this.Event["BeforeSheetPrintCanceled"], () => var_core_value_sig4383.beforeCommandExecuted(var_core_value_sigF704 => {
      if (var_core_value_sigF704.id === var_core_value_sig186C.id) {
        let var_core_value_sigBC46 = var_core_value_sigFBA4.get(var_core_value_sig48BD);
        if (!this.getActiveWorkbook()) return;
        let var_core_value_sig3D7D = {
          layoutConfig: var_core_value_sigBC46.layoutConfig,
          renderConfig: var_core_value_sigBC46.renderConfig
        };
        if (var_core_value_sig3D7D == null) return;
        if (this.fireEvent(this.Event["BeforeSheetPrintCanceled"], var_core_value_sig3D7D), var_core_value_sig3D7D.cancel) throw new var_core_value_sigF230();
      }
    }))), this.disposeWithMe(this.registerEventHandler(this.Event["SheetPrintOpen"], () => var_core_value_sig4383.onCommandExecuted(var_core_value_sig2BCF => {
      if (var_core_value_sig2BCF.id === var_core_value_sig9572.id) {
        let var_core_value_sig27E5 = this.getActiveWorkbook();
        if (!var_core_value_sig27E5) return;
        let var_core_value_sig8061 = {
          workbook: var_core_value_sig27E5,
          worksheet: var_core_value_sig27E5.getActiveSheet()
        };
        if (var_core_value_sig8061 == null) return;
        this.fireEvent(this.Event["SheetPrintOpen"], var_core_value_sig8061);
      }
    }))), this.disposeWithMe(this.registerEventHandler(this.Event["SheetPrintConfirmed"], () => var_core_value_sig4383.onCommandExecuted(var_core_value_sig0D69 => {
      if (var_core_value_sig0D69.id === var_core_value_sigD955.id) {
        let var_core_value_sig4D4C = var_core_value_sigFBA4.get(var_core_value_sig48BD);
        if (!this.getActiveWorkbook()) return;
        let var_core_value_sigC9E0 = {
          layoutConfig: var_core_value_sig4D4C.layoutConfig,
          renderConfig: var_core_value_sig4D4C.renderConfig
        };
        if (var_core_value_sigC9E0 == null) return;
        this.fireEvent(this.Event["SheetPrintConfirmed"], var_core_value_sigC9E0);
      }
    }))), this.disposeWithMe(this.registerEventHandler(this.Event["SheetPrintCanceled"], () => var_core_value_sig4383.onCommandExecuted(var_core_value_sig480E => {
      if (var_core_value_sig480E.id === var_core_value_sig186C.id) {
        let var_core_value_sig76BA = var_core_value_sigFBA4.get(var_core_value_sig48BD);
        if (!this.getActiveWorkbook()) return;
        let var_core_value_sigFBFA = {
          layoutConfig: var_core_value_sig76BA.layoutConfig,
          renderConfig: var_core_value_sig76BA.renderConfig
        };
        if (var_core_value_sigFBFA == null) return;
        this.fireEvent(this.Event["SheetPrintCanceled"], var_core_value_sigFBFA);
      }
    })));
  }
};
var_core_value_sigE154.extend(D);
export {};
