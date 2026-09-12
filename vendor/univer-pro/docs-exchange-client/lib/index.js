import {
  IMenuManagerService as _0xf0224c,
  MenuItemType as _0x4cb377,
  RibbonStartGroup as _0x366750,
  getMenuHiddenObservable as _0x8c3f11,
} from "@univerjs/ui";
import {
  ClientSnapshotServerService as _0x34fa71,
  ExchangeDocType as _0xa7538f,
  ExchangeFormat as _0x47786f,
  IExchangeOperateService as _0x362353,
  IExchangeService as _0xc75731,
  UniverExchangeClientPlugin as _0x460712,
  isCurrentUnitLoadedFromServer as _0x319451,
} from "@univerjs-pro/exchange-client";
import {
  CommandType as _0x4470f9,
  DependentOn as _0x59ab1d,
  Disposable as _0x3368bf,
  DocumentFlavor as _0x4d3279,
  ICommandService as _0x88299e,
  IConfigService as _0x1339f7,
  IResourceLoaderService as _0x562618,
  IUniverInstanceService as _0x36f6be,
  Inject as _0x4f678c,
  Injector as _0x4cb483,
  Plugin as _0x24bd67,
  UniverInstanceType as _0x51a420,
  createIdentifier as _0x1fcd1b,
  merge as _0x164661,
  touchDependencies as _0x10bf3a,
} from "@univerjs/core";
import {
  b64EncodeUnicode as _0x249ecf,
  textDecoder as _0x4e3b4e,
  transformDocumentDataToSnapshot as _0x4b892b,
  transformSnapshotToDocumentData as _0xd83ec,
} from "@univerjs-pro/collaboration";
import { UniverLicensePlugin as _0x5ebf04 } from "@univerjs-pro/license";
function A(_0x21b306, _0x42826d) {
  return function (_0x103e42, _0x5cba9e) {
    _0x42826d(_0x103e42, _0x5cba9e, _0x21b306);
  };
}
function j(_0x121f53, _0x13b391, _0x54c29e, _0x207fe8) {
  var _0x4aff9a = arguments.length,
    _0x3fe6f6 =
      _0x4aff9a < 3
        ? _0x13b391
        : _0x207fe8 === null
          ? (_0x207fe8 = Object.getOwnPropertyDescriptor(_0x13b391, _0x54c29e))
          : _0x207fe8,
    _0x3ec2d0;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x3fe6f6 = Reflect.decorate(_0x121f53, _0x13b391, _0x54c29e, _0x207fe8);
  else {
    for (var _0x51ff20 = _0x121f53.length - 1; _0x51ff20 >= 0; _0x51ff20--)
      (_0x3ec2d0 = _0x121f53[_0x51ff20]) &&
        (_0x3fe6f6 =
          (_0x4aff9a < 3
            ? _0x3ec2d0(_0x3fe6f6)
            : _0x4aff9a > 3
              ? _0x3ec2d0(_0x13b391, _0x54c29e, _0x3fe6f6)
              : _0x3ec2d0(_0x13b391, _0x54c29e)) || _0x3fe6f6);
  }
  return (
    _0x4aff9a > 3 &&
      _0x3fe6f6 &&
      Object.defineProperty(_0x13b391, _0x54c29e, _0x3fe6f6),
    _0x3fe6f6
  );
}
function M(_0x2d392c) {
  let _0x2d79de = _0x2d392c.doc;
  if (!_0x2d79de) return null;
  let _0x15a12e = _0x249ecf(_0x4e3b4e.decode(_0x2d79de.originalMeta));
  return {
    ..._0x2d392c,
    workbook: {},
    doc: { ..._0x2d79de, originalMeta: _0x15a12e },
    slide: undefined,
    board: undefined,
    pdf: undefined,
  };
}
const N = _0x1fcd1b("docs-exchange-client.doc-exchange.service");
let P = class {
  constructor(_0x20351c) {
    this._exchangeService = _0x20351c;
  }
  importDocToUnitId(_0x2119dd, _0x4b6dee) {
    return this._exchangeService["importFileToUnitId"](
      _0x2119dd,
      _0x51a420.UNIVER_DOC,
      _0x4b6dee ? { doc: _0x4b6dee } : undefined,
    );
  }
  async importDocToSnapshot(_0x4a0dff, _0x27411c) {
    let _0x26e2da = await this._exchangeService["importFileToJson"](
      _0x4a0dff,
      _0x51a420.UNIVER_DOC,
      _0x27411c ? { doc: _0x27411c } : undefined,
    );
    return _0x26e2da != null && _0x26e2da.snapshot
      ? this.transformSnapshotJsonToDocumentData(_0x26e2da)
      : undefined;
  }
  exportDocByUnitId(_0xa3f74b) {
    return this._exchangeService["exportFileByUnitId"](
      _0xa3f74b,
      _0x51a420.UNIVER_DOC,
      _0x47786f.DOCX,
    );
  }
  async exportDocBySnapshot(_0x274a69) {
    let _0x34f2e1 = await this.transformDocumentDataToSnapshotJson(_0x274a69);
    return this._exchangeService["exportFileBySnapshot"](
      _0x34f2e1,
      _0x51a420.UNIVER_DOC,
      _0x47786f.DOCX,
    );
  }
  async transformSnapshotJsonToDocumentData(_0x359bcb) {
    return _0xd83ec(_0x359bcb.snapshot);
  }
  async transformDocumentDataToSnapshotJson(_0x5c8001) {
    let _0x22831e = { metadata: undefined },
      _0x30429f = new _0x34fa71(),
      { snapshot: _0x3a051c } = await _0x4b892b(
        _0x22831e,
        _0x5c8001,
        _0x5c8001.id,
        _0x5c8001.rev ?? 0,
        _0x30429f,
      ),
      _0x57dcd2 = M(_0x3a051c);
    if (!_0x57dcd2)
      throw Error("Failed to transform Document snapshot to string");
    return { snapshot: _0x57dcd2, sheetBlocks: {} };
  }
};
P = j([A(0, _0x4f678c(_0xc75731))], P);
function F(_0x58d84a) {
  switch (_0x58d84a) {
    case _0x4d3279.MODERN:
      return { docType: _0xa7538f.MODERN };
    case _0x4d3279.TRADITIONAL:
      return { docType: _0xa7538f.TRADITIONAL };
    default:
      return;
  }
}
const I = _0x1fcd1b("docs-exchange-client.doc-exchange-operate.service");
let L = class {
  constructor(_0x2190af, _0xd16be9, _0x19813b, _0x25e823) {
    ((this._docExchangeService = _0x2190af),
      (this._exchangeOperateService = _0xd16be9),
      (this._univerInstanceService = _0x19813b),
      (this._resourceLoaderService = _0x25e823));
  }
  importDocToUnitId() {
    let _0x713d83 = F(
      this._getCurrentDocument().getDocumentStyle().documentFlavor,
    );
    return this._exchangeOperateService["importFileToUnitId"](
      _0x51a420.UNIVER_DOC,
      (_0x12250c) =>
        this._docExchangeService["importDocToUnitId"](_0x12250c, _0x713d83),
    );
  }
  importDocToSnapshot() {
    let _0x33b933 = F(
      this._getCurrentDocument().getDocumentStyle().documentFlavor,
    );
    return this._exchangeOperateService["importFileToSnapshot"](
      _0x51a420.UNIVER_DOC,
      (_0x4d903a) =>
        this._docExchangeService["importDocToSnapshot"](_0x4d903a, _0x33b933),
    );
  }
  exportDocByUnitId(_0x24d888, _0x363a88) {
    let _0x539220 = this._getCurrentDocument();
    return this._exchangeOperateService["exportFile"](
      () =>
        this._docExchangeService["exportDocByUnitId"](
          _0x24d888 ?? _0x539220.getUnitId(),
        ),
      _0x363a88 ?? _0x539220.getSnapshot().title,
      _0x47786f.DOCX,
    );
  }
  exportDocBySnapshot() {
    let _0x38d295 = this._getCurrentDocument(),
      _0x2465f1 =
        this._resourceLoaderService["saveUnit"](_0x38d295.getUnitId()) ??
        _0x38d295.getSnapshot();
    return this._exchangeOperateService["exportFile"](
      () => this._docExchangeService["exportDocBySnapshot"](_0x2465f1),
      _0x2465f1.title,
      _0x47786f.DOCX,
    );
  }
  _getCurrentDocument() {
    let _0x41e1bf = this._univerInstanceService["getCurrentUnitOfType"](
      _0x51a420.UNIVER_DOC,
    );
    if (!_0x41e1bf)
      throw Error(
        "No unit of type " +
          _0x51a420.UNIVER_DOC +
          "\x20is\x20currently\x20active.",
      );
    return _0x41e1bf;
  }
};
L = j(
  [
    A(0, _0x4f678c(N)),
    A(1, _0x4f678c(_0x362353)),
    A(2, _0x36f6be),
    A(3, _0x562618),
  ],
  L,
);
const R = {
    id: "docs-exchange-client.operation.import-doc",
    type: _0x4470f9.OPERATION,
    handler: async (_0x141297) => {
      let _0x4d65c2 = _0x141297.get(I);
      return (
        _0x319451(_0x141297, _0x51a420.UNIVER_DOC)
          ? await _0x4d65c2.importDocToUnitId()
          : await _0x4d65c2.importDocToSnapshot(),
        true
      );
    },
  },
  z = {
    id: "docs-exchange-client.operation.export-doc",
    type: _0x4470f9.OPERATION,
    handler: async (_0x215c9b) => {
      let _0x337cc2 = _0x215c9b.get(I);
      return (
        _0x319451(_0x215c9b, _0x51a420.UNIVER_DOC)
          ? await _0x337cc2.exportDocByUnitId()
          : await _0x337cc2.exportDocBySnapshot(),
        true
      );
    },
  },
  B = "docs-exchange-client.operation.exchange";
function V(_0x1bf234) {
  return {
    id: B,
    type: _0x4cb377.SUBITEMS,
    icon: "DirectExportIcon",
    tooltip: "docs-exchange-client.file",
    hidden$: _0x8c3f11(_0x1bf234, _0x51a420.UNIVER_DOC),
  };
}
function H() {
  return {
    id: R.id,
    type: _0x4cb377.BUTTON,
    title: "docs-exchange-client.upload",
    icon: "FolderIcon",
  };
}
function U() {
  return {
    id: z.id,
    type: _0x4cb377.BUTTON,
    title: "docs-exchange-client.download",
    icon: "ExportIcon",
  };
}
const W = {
  [_0x366750.OTHERS]: {
    [B]: {
      order: 0.3,
      gridLayout: { row: 1, column: 2, rowSpan: 2, showLabel: true },
      menuItemFactory: V,
      [R.id]: { order: 0, menuItemFactory: H },
      [z.id]: { order: 1, menuItemFactory: U },
    },
  },
};
var G = "@univerjs-pro/docs-exchange-client",
  K = "1.0.0-insiders.20260907-70fc579";
const q = {};
let J = class extends _0x3368bf {
  constructor(_0x553125, _0x3d0d44) {
    (super(),
      (this._commandService = _0x553125),
      (this._menuManagerService = _0x3d0d44),
      this._initCommands(),
      this._initMenus());
  }
  _initCommands() {
    [R, z].forEach((_0x1eb501) => {
      this.disposeWithMe(this._commandService["registerCommand"](_0x1eb501));
    });
  }
  _initMenus() {
    this._menuManagerService["mergeMenu"](W);
  }
};
J = j([A(0, _0x88299e), A(1, _0xf0224c)], J);
function Y(_0x22bf9f) {
  "@babel/helpers - typeof";
  return (
    (Y =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x36c5b0) {
            return typeof _0x36c5b0;
          }
        : function (_0x2b1a37) {
            return _0x2b1a37 &&
              typeof Symbol == "function" &&
              _0x2b1a37.constructor === Symbol &&
              _0x2b1a37 !== Symbol.prototype
              ? "symbol"
              : typeof _0x2b1a37;
          }),
    Y(_0x22bf9f)
  );
}
function X(_0x566fbb, _0x24fea5) {
  if (Y(_0x566fbb) != "object" || !_0x566fbb) return _0x566fbb;
  var _0x217ffb = _0x566fbb[Symbol.toPrimitive];
  if (_0x217ffb !== undefined) {
    var _0x181959 = _0x217ffb.call(_0x566fbb, _0x24fea5 || "default");
    if (Y(_0x181959) != "object") return _0x181959;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x24fea5 === "string" ? String : Number)(_0x566fbb);
}
function Z(_0x3c5445) {
  var _0x5653c5 = X(_0x3c5445, "string");
  return Y(_0x5653c5) == "symbol" ? _0x5653c5 : _0x5653c5 + "";
}
function Q(_0x59799f, _0x11f5ec, _0x4005e6) {
  return (
    (_0x11f5ec = Z(_0x11f5ec)) in _0x59799f
      ? Object.defineProperty(_0x59799f, _0x11f5ec, {
          value: _0x4005e6,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x59799f[_0x11f5ec] = _0x4005e6),
    _0x59799f
  );
}
let $ = class extends _0x24bd67 {
  constructor(_0xd9c7b9 = q, _0x5984e0, _0x3d0904) {
    (super(),
      (this._config = _0xd9c7b9),
      (this._injector = _0x5984e0),
      (this._configService = _0x3d0904));
    let { menu: _0x1168c5, ..._0x220807 } = _0x164661({}, q, this._config);
    (_0x1168c5 &&
      this._configService["setConfig"]("menu", _0x1168c5, { merge: true }),
      this._configService["setConfig"](
        "docs-exchange-client.config",
        _0x220807,
      ));
  }
  onStarting() {
    [[N, { useClass: P }], [I, { useClass: L }], [J]].forEach((_0x539c84) =>
      this._injector["add"](_0x539c84),
    );
  }
  onReady() {
    _0x10bf3a(this._injector, [[J]]);
  }
};
(Q($, "pluginName", "DOC_EXCHANGE_CLIENT_PLUGIN"),
  Q($, "packageName", G),
  Q($, "version", K),
  Q($, "type", _0x51a420.UNIVER_DOC),
  ($ = j(
    [
      _0x59ab1d(_0x5ebf04, _0x460712),
      A(1, _0x4f678c(_0x4cb483)),
      A(2, _0x1339f7),
    ],
    $,
  )));
export {
  W as DocsExchangeClientMenuSchema,
  N as IDocExchangeService,
  $ as UniverDocsExchangeClientPlugin,
};
