import {
  AnalyzeBoardRenderedLayoutCommand as _0x47a369,
  BoardInteractionMode as _0x47ecb9,
  CaptureBoardScreenshotCommand as _0x50dabc,
  FindBoardElementsByTextOperation as _0x50e912,
  FocusBoardElementOperation as _0x2827dd,
  GetBoardElementViewportPointOperation as _0x4e9728,
  GetBoardInteractionModeOperation as _0x7415ab,
  GetBoardObjectListPanelOpenOperation as _0x5446cc,
  GetBoardSettingsOperation as _0x314fc2,
  SetBoardInteractionModeOperation as _0x3513e0,
  SetBoardObjectListPanelOpenOperation as _0xc81ccb,
  SetBoardSettingsOperation as _0xd11d9,
} from "@univerjs-pro/boards-ui";
import { FBoard as _0x21d2b2 } from "@univerjs-pro/boards/facade";
import { FEnum as _0x527e33 } from "@univerjs/core/facade";
var m = class extends _0x21d2b2 {
  analyzeRenderedLayout(_0x6e7405) {
    return this._commandService["syncExecuteCommand"](_0x47a369.id, {
      unitId: this.id,
      subUnitId: this._boardModel["getActivePageId"](),
      focusPadding: _0x6e7405,
    });
  }
  getScreenshot(_0x539914) {
    return this._commandService["executeCommand"](_0x50dabc.id, {
      ..._0x539914,
      unitId: this.id,
      subUnitId: this._boardModel["getActivePageId"](),
    });
  }
};
_0x21d2b2.extend(m);
var h = class extends _0x527e33 {
  get BoardInteractionMode() {
    return _0x47ecb9;
  }
};
_0x527e33.extend(h);
var g = class extends _0x21d2b2 {
  getInteractionMode() {
    return this._commandService["syncExecuteCommand"](_0x7415ab.id, {
      unitId: this.id,
    });
  }
  setInteractionMode(_0x572e5d) {
    return this._commandService["executeCommand"](_0x3513e0.id, {
      unitId: this.id,
      mode: _0x572e5d,
    });
  }
  getSettings() {
    return this._commandService["syncExecuteCommand"](_0x314fc2.id, {
      unitId: this.id,
    });
  }
  setSettings(_0x89a38a) {
    return this._commandService["syncExecuteCommand"](_0xd11d9.id, {
      unitId: this.id,
      settings: _0x89a38a,
    });
  }
  getObjectListPanelOpen() {
    return this._commandService["syncExecuteCommand"](_0x5446cc.id, {
      unitId: this.id,
    });
  }
  setObjectListPanelOpen(_0x51ba37) {
    return this._commandService["syncExecuteCommand"](_0xc81ccb.id, {
      unitId: this.id,
      open: _0x51ba37,
    });
  }
  findElementsByText(_0x20c131) {
    return this._commandService["syncExecuteCommand"](_0x50e912.id, {
      unitId: this.id,
      query: _0x20c131,
    });
  }
  focusElement(_0x63ecac, _0x4cc3fc) {
    return this._commandService["syncExecuteCommand"](_0x2827dd.id, {
      unitId: this.id,
      elementId: _0x63ecac,
      viewportPoint: _0x4cc3fc,
    });
  }
  getElementViewportPoint(_0x2142e8) {
    return this._commandService["syncExecuteCommand"](_0x4e9728.id, {
      unitId: this.id,
      elementId: _0x2142e8,
    });
  }
};
_0x21d2b2.extend(g);
export {};
