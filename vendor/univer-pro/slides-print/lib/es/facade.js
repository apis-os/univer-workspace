import { OpenSlidePrintDialogOperation, SlidePrintOperation } from "@univerjs-pro/slides-print";
import { FUniver } from "@univerjs/core/facade";
var r = class extends FUniver {
  printSlidesAsync(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46) {
    return this._commandService["executeCommand"](SlidePrintOperation.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46);
  }
  openSlidesPrintDialog(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462) {
    return this._commandService["syncExecuteCommand"](OpenSlidePrintDialogOperation.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462);
  }
};
FUniver.extend(r);
export {};
