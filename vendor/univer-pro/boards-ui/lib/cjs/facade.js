let e = require("@univerjs-pro/boards-ui"),
  t = require("@univerjs-pro/boards/facade"),
  n = require("@univerjs/core/facade");
var r = class extends t.FBoard {
  analyzeRenderedLayout(var_core_value_sig7524) {
    return this._commandService["syncExecuteCommand"](e.AnalyzeBoardRenderedLayoutCommand["id"], {
      unitId: this.id,
      subUnitId: this._boardModel["getActivePageId"](),
      focusPadding: var_core_value_sig7524
    });
  }
  getScreenshot(var_core_value_sig2AD8) {
    return this._commandService["executeCommand"](e.CaptureBoardScreenshotCommand["id"], {
      ...var_core_value_sig2AD8,
      unitId: this.id,
      subUnitId: this._boardModel["getActivePageId"]()
    });
  }
};
t.FBoard["extend"](r);
var i = class extends n.FEnum {
  get BoardInteractionMode() {
    return e.BoardInteractionMode;
  }
};
n.FEnum["extend"](i);
var a = class extends t.FBoard {
  getInteractionMode() {
    return this._commandService["syncExecuteCommand"](e.GetBoardInteractionModeOperation["id"], {
      unitId: this.id
    });
  }
  setInteractionMode(var_core_value_sig2AD0) {
    return this._commandService["executeCommand"](e.SetBoardInteractionModeOperation["id"], {
      unitId: this.id,
      mode: var_core_value_sig2AD0
    });
  }
  getSettings() {
    return this._commandService["syncExecuteCommand"](e.GetBoardSettingsOperation["id"], {
      unitId: this.id
    });
  }
  setSettings(var_core_value_sig3EEE) {
    return this._commandService["syncExecuteCommand"](e.SetBoardSettingsOperation["id"], {
      unitId: this.id,
      settings: var_core_value_sig3EEE
    });
  }
  getObjectListPanelOpen() {
    return this._commandService["syncExecuteCommand"](e.GetBoardObjectListPanelOpenOperation["id"], {
      unitId: this.id
    });
  }
  setObjectListPanelOpen(var_core_value_sigBC46) {
    return this._commandService["syncExecuteCommand"](e.SetBoardObjectListPanelOpenOperation["id"], {
      unitId: this.id,
      open: var_core_value_sigBC46
    });
  }
  findElementsByText(var_core_value_sig3D7D) {
    return this._commandService["syncExecuteCommand"](e.FindBoardElementsByTextOperation["id"], {
      unitId: this.id,
      query: var_core_value_sig3D7D
    });
  }
  focusElement(var_core_value_sig27E5, var_core_value_sig8061) {
    return this._commandService["syncExecuteCommand"](e.FocusBoardElementOperation["id"], {
      unitId: this.id,
      elementId: var_core_value_sig27E5,
      viewportPoint: var_core_value_sig8061
    });
  }
  getElementViewportPoint(var_core_value_sig4D4C) {
    return this._commandService["syncExecuteCommand"](e.GetBoardElementViewportPointOperation["id"], {
      unitId: this.id,
      elementId: var_core_value_sig4D4C
    });
  }
};
t.FBoard["extend"](a);
