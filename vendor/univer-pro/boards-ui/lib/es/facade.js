import { AnalyzeBoardRenderedLayoutCommand, BoardInteractionMode, CaptureBoardScreenshotCommand, FindBoardElementsByTextOperation, FocusBoardElementOperation, GetBoardElementViewportPointOperation, GetBoardInteractionModeOperation, GetBoardObjectListPanelOpenOperation, GetBoardSettingsOperation, SetBoardInteractionModeOperation, SetBoardObjectListPanelOpenOperation, SetBoardSettingsOperation } from "@univerjs-pro/boards-ui";
import { FBoard } from "@univerjs-pro/boards/facade";
import { FEnum } from "@univerjs/core/facade";
var m = class extends FBoard {
  analyzeRenderedLayout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46) {
    return this._commandService["syncExecuteCommand"](AnalyzeBoardRenderedLayoutCommand.id, {
      unitId: this.id,
      subUnitId: this._boardModel["getActivePageId"](),
      focusPadding: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46
    });
  }
  getScreenshot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462) {
    return this._commandService["executeCommand"](CaptureBoardScreenshotCommand.id, {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462,
      unitId: this.id,
      subUnitId: this._boardModel["getActivePageId"]()
    });
  }
};
FBoard.extend(m);
var h = class extends FEnum {
  get BoardInteractionMode() {
    return BoardInteractionMode;
  }
};
FEnum.extend(h);
var g = class extends FBoard {
  getInteractionMode() {
    return this._commandService["syncExecuteCommand"](GetBoardInteractionModeOperation.id, {
      unitId: this.id
    });
  }
  setInteractionMode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464) {
    return this._commandService["executeCommand"](SetBoardInteractionModeOperation.id, {
      unitId: this.id,
      mode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464
    });
  }
  getSettings() {
    return this._commandService["syncExecuteCommand"](GetBoardSettingsOperation.id, {
      unitId: this.id
    });
  }
  setSettings(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466) {
    return this._commandService["syncExecuteCommand"](SetBoardSettingsOperation.id, {
      unitId: this.id,
      settings: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466
    });
  }
  getObjectListPanelOpen() {
    return this._commandService["syncExecuteCommand"](GetBoardObjectListPanelOpenOperation.id, {
      unitId: this.id
    });
  }
  setObjectListPanelOpen(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468) {
    return this._commandService["syncExecuteCommand"](SetBoardObjectListPanelOpenOperation.id, {
      unitId: this.id,
      open: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468
    });
  }
  findElementsByText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610) {
    return this._commandService["syncExecuteCommand"](FindBoardElementsByTextOperation.id, {
      unitId: this.id,
      query: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610
    });
  }
  focusElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613) {
    return this._commandService["syncExecuteCommand"](FocusBoardElementOperation.id, {
      unitId: this.id,
      elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612,
      viewportPoint: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613
    });
  }
  getElementViewportPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616) {
    return this._commandService["syncExecuteCommand"](GetBoardElementViewportPointOperation.id, {
      unitId: this.id,
      elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616
    });
  }
};
FBoard.extend(g);
export {};
