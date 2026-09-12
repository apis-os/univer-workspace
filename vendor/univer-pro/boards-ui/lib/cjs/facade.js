let e = require("@univerjs-pro/boards-ui"),
  t = require("@univerjs-pro/boards/facade"),
  n = require("@univerjs/core/facade");
var r = class extends t.FBoard {
  analyzeRenderedLayout(_0x57e0c7) {
    return this._commandService["syncExecuteCommand"](
      e.AnalyzeBoardRenderedLayoutCommand["id"],
      {
        unitId: this.id,
        subUnitId: this._boardModel["getActivePageId"](),
        focusPadding: _0x57e0c7,
      },
    );
  }
  getScreenshot(_0x1bab17) {
    return this._commandService["executeCommand"](
      e.CaptureBoardScreenshotCommand["id"],
      {
        ..._0x1bab17,
        unitId: this.id,
        subUnitId: this._boardModel["getActivePageId"](),
      },
    );
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
    return this._commandService["syncExecuteCommand"](
      e.GetBoardInteractionModeOperation["id"],
      { unitId: this.id },
    );
  }
  setInteractionMode(_0x109c3f) {
    return this._commandService["executeCommand"](
      e.SetBoardInteractionModeOperation["id"],
      { unitId: this.id, mode: _0x109c3f },
    );
  }
  getSettings() {
    return this._commandService["syncExecuteCommand"](
      e.GetBoardSettingsOperation["id"],
      { unitId: this.id },
    );
  }
  setSettings(_0x2b5c2f) {
    return this._commandService["syncExecuteCommand"](
      e.SetBoardSettingsOperation["id"],
      { unitId: this.id, settings: _0x2b5c2f },
    );
  }
  getObjectListPanelOpen() {
    return this._commandService["syncExecuteCommand"](
      e.GetBoardObjectListPanelOpenOperation["id"],
      { unitId: this.id },
    );
  }
  setObjectListPanelOpen(_0x509f2a) {
    return this._commandService["syncExecuteCommand"](
      e.SetBoardObjectListPanelOpenOperation["id"],
      { unitId: this.id, open: _0x509f2a },
    );
  }
  findElementsByText(_0x395a9c) {
    return this._commandService["syncExecuteCommand"](
      e.FindBoardElementsByTextOperation["id"],
      { unitId: this.id, query: _0x395a9c },
    );
  }
  focusElement(_0x539567, _0x2bd21a) {
    return this._commandService["syncExecuteCommand"](
      e.FocusBoardElementOperation["id"],
      { unitId: this.id, elementId: _0x539567, viewportPoint: _0x2bd21a },
    );
  }
  getElementViewportPoint(_0x20b275) {
    return this._commandService["syncExecuteCommand"](
      e.GetBoardElementViewportPointOperation["id"],
      { unitId: this.id, elementId: _0x20b275 },
    );
  }
};
t.FBoard["extend"](a);
