let e = require("@univerjs-pro/sheets-print"),
  t = require("@univerjs/core"),
  n = require("@univerjs/sheets/facade"),
  r = require("@univerjs/core/facade"),
  i = require("@univerjs-pro/print");
var a = class extends n.FWorkbook {
  updatePrintConfig(_0xdc920d) {
    return (
      this._injector["get"](e.ISheetPrintManagerService).updateLayoutConfig(
        _0xdc920d,
      ),
      this
    );
  }
  updatePrintRenderConfig(_0xeaf591) {
    return (
      this._injector["get"](e.ISheetPrintManagerService).updateRenderConfig(
        _0xeaf591,
      ),
      this
    );
  }
  print() {
    return this._injector["get"](t.ICommandService).syncExecuteCommand(
      e.ConfirmSheetPrintOperation["id"],
    );
  }
  openPrintDialog() {
    return this._injector["get"](t.ICommandService).syncExecuteCommand(
      e.SheetPrintOpenOperation["id"],
    );
  }
  closePrintDialog() {
    return this._injector["get"](t.ICommandService).syncExecuteCommand(
      e.CancelSheetPrintOperation["id"],
    );
  }
  async saveScreenshotToClipboard() {
    return (0, e.hasPrintFacadePermission)(this._injector)
      ? this._injector["get"](t.ICommandService).executeCommand(
          e.SheetScreenShotOperation["id"],
        )
      : false;
  }
};
n.FWorkbook["extend"](a);
var o = class extends n.FRange {
  getScreenshot(_0x13fdd9) {
    return (0, e.hasPrintFacadePermission)(this._injector)
      ? this._injector["get"](e.SheetPrintClientService).getRangeImage(
          this._workbook["getUnitId"](),
          this._worksheet["getSheetId"](),
          this._range,
          _0x13fdd9 == null ? undefined : _0x13fdd9.includeHeaders,
        )
      : false;
  }
};
n.FRange["extend"](o);
var s = class extends r.FEventName {
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
r.FEventName["extend"](s);
var c = class extends r.FEnum {
  get PrintArea() {
    return e.PrintArea;
  }
  get PrintAlign() {
    return i.PrintAlign;
  }
  get PrintPaperSize() {
    return t.PaperType;
  }
  get PrintPaperMargin() {
    return i.PrintPaperMargin;
  }
  get PrintScale() {
    return i.PrintScale;
  }
  get PrintDirection() {
    return i.PrintDirection;
  }
  get PrintFreeze() {
    return e.PrintFreeze;
  }
  get PrintHeaderFooter() {
    return e.PrintHeaderFooter;
  }
  get PrintHeaderFooterSymbol() {
    return e.PrintHeaderFooterSymbol;
  }
};
r.FEnum["extend"](c);
var l = class extends r.FUniver {
  _initialize(_0x470c79) {
    let _0x4b2798 = _0x470c79.get(t.ICommandService);
    (this.disposeWithMe(
      this.registerEventHandler(this.Event["BeforeSheetPrintOpen"], () =>
        _0x4b2798.beforeCommandExecuted((_0x3f7fd0) => {
          if (_0x3f7fd0.id === e.SheetPrintOpenOperation["id"]) {
            let _0x445c80 = this.getActiveWorkbook();
            if (!_0x445c80) return;
            let _0xd92bbe = {
              workbook: _0x445c80,
              worksheet: _0x445c80.getActiveSheet(),
            };
            if (_0xd92bbe == null) return;
            if (
              (this.fireEvent(this.Event["BeforeSheetPrintOpen"], _0xd92bbe),
              _0xd92bbe.cancel)
            )
              throw new t["CanceledError"]();
          }
        }),
      ),
    ),
      this.disposeWithMe(
        this.registerEventHandler(this.Event["BeforeSheetPrintConfirm"], () =>
          _0x4b2798.beforeCommandExecuted((_0x32e30b) => {
            if (_0x32e30b.id === e.ConfirmSheetPrintOperation["id"]) {
              let _0x2c7279 = _0x470c79.get(e.ISheetPrintManagerService);
              if (!this.getActiveWorkbook()) return;
              let _0x1921c8 = {
                layoutConfig: _0x2c7279.layoutConfig,
                renderConfig: _0x2c7279.renderConfig,
              };
              if (_0x1921c8 == null) return;
              if (
                (this.fireEvent(
                  this.Event["BeforeSheetPrintConfirm"],
                  _0x1921c8,
                ),
                _0x1921c8.cancel)
              )
                throw new t["CanceledError"]();
            }
          }),
        ),
      ),
      this.disposeWithMe(
        this.registerEventHandler(this.Event["BeforeSheetPrintCanceled"], () =>
          _0x4b2798.beforeCommandExecuted((_0x27b043) => {
            if (_0x27b043.id === e.CancelSheetPrintOperation["id"]) {
              let _0x32712c = _0x470c79.get(e.ISheetPrintManagerService);
              if (!this.getActiveWorkbook()) return;
              let _0x480cc3 = {
                layoutConfig: _0x32712c.layoutConfig,
                renderConfig: _0x32712c.renderConfig,
              };
              if (_0x480cc3 == null) return;
              if (
                (this.fireEvent(
                  this.Event["BeforeSheetPrintCanceled"],
                  _0x480cc3,
                ),
                _0x480cc3.cancel)
              )
                throw new t.CanceledError();
            }
          }),
        ),
      ),
      this.disposeWithMe(
        this.registerEventHandler(this.Event["SheetPrintOpen"], () =>
          _0x4b2798.onCommandExecuted((_0x3c1a4e) => {
            if (_0x3c1a4e.id === e.SheetPrintOpenOperation["id"]) {
              let _0x44b895 = this.getActiveWorkbook();
              if (!_0x44b895) return;
              let _0x5a611b = {
                workbook: _0x44b895,
                worksheet: _0x44b895.getActiveSheet(),
              };
              if (_0x5a611b == null) return;
              this.fireEvent(this.Event["SheetPrintOpen"], _0x5a611b);
            }
          }),
        ),
      ),
      this.disposeWithMe(
        this.registerEventHandler(this.Event["SheetPrintConfirmed"], () =>
          _0x4b2798.onCommandExecuted((_0x3dffec) => {
            if (_0x3dffec.id === e.ConfirmSheetPrintOperation["id"]) {
              let _0x5dd7c1 = _0x470c79.get(e.ISheetPrintManagerService);
              if (!this.getActiveWorkbook()) return;
              let _0x5513e7 = {
                layoutConfig: _0x5dd7c1.layoutConfig,
                renderConfig: _0x5dd7c1.renderConfig,
              };
              if (_0x5513e7 == null) return;
              this.fireEvent(this.Event["SheetPrintConfirmed"], _0x5513e7);
            }
          }),
        ),
      ),
      this.disposeWithMe(
        this.registerEventHandler(this.Event["SheetPrintCanceled"], () =>
          _0x4b2798.onCommandExecuted((_0x5227cf) => {
            if (_0x5227cf.id === e.CancelSheetPrintOperation["id"]) {
              let _0x598d10 = _0x470c79.get(e.ISheetPrintManagerService);
              if (!this.getActiveWorkbook()) return;
              let _0x1e13b5 = {
                layoutConfig: _0x598d10.layoutConfig,
                renderConfig: _0x598d10.renderConfig,
              };
              if (_0x1e13b5 == null) return;
              this.fireEvent(this.Event["SheetPrintCanceled"], _0x1e13b5);
            }
          }),
        ),
      ));
  }
};
r.FUniver["extend"](l);
