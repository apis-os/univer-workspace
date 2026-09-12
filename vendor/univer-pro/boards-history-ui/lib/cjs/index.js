Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/boards-history"),
  t = require("@univerjs-pro/boards-ui"),
  n = require("@univerjs-pro/collaboration-client"),
  r = require("@univerjs-pro/license"),
  i = require("@univerjs/core"),
  a = require("@univerjs/icons"),
  o = require("@univerjs-pro/boards"),
  s = require("@univerjs-pro/boards-chart"),
  c = require("@univerjs-pro/boards-chart-ui"),
  l = require("@univerjs-pro/boards-mind"),
  u = require("@univerjs-pro/boards-mind-ui"),
  d = require("@univerjs-pro/boards-table"),
  f = require("@univerjs-pro/boards-table-ui"),
  p = require("@univerjs-pro/collaboration"),
  m = require("@univerjs-pro/docs-latex"),
  h = require("@univerjs-pro/docs-latex-ui"),
  g = require("@univerjs-pro/edit-history"),
  ee = require("@univerjs-pro/ink"),
  te = require("@univerjs-pro/ink-ui"),
  ne = require("@univerjs/docs"),
  _ = require("@univerjs/docs-ui"),
  v = require("@univerjs/drawing"),
  re = require("@univerjs/engine-render"),
  y = require("@univerjs/network"),
  b = require("@univerjs/ui"),
  x = require("rxjs"),
  S = require("@univerjs-pro/edit-history-ui"),
  C = require("react/jsx-runtime");
const w = "boards-history-ui.config",
  T = { historyServerUrl: "/universer-api/history" };
var E = "@univerjs-pro/boards-history-ui",
  D = "1.0.0-insiders.20260907-70fc579";
function O() {
  return (0, C.jsx)(t.BoardWorkbench, { embedded: true, fitOnMount: true });
}
function k(_0xaa8595, _0x10059e) {
  return function (_0xb52482, _0x30bf62) {
    _0x10059e(_0xb52482, _0x30bf62, _0xaa8595);
  };
}
function A(_0x84b47f, _0x2201b5, _0x3881e6, _0x5def62) {
  var _0x224a3f = arguments.length,
    _0x59c259 =
      _0x224a3f < 3
        ? _0x2201b5
        : _0x5def62 === null
          ? (_0x5def62 = Object.getOwnPropertyDescriptor(_0x2201b5, _0x3881e6))
          : _0x5def62,
    _0x5d7c8a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x59c259 = Reflect.decorate(_0x84b47f, _0x2201b5, _0x3881e6, _0x5def62);
  else {
    for (var _0xfa6235 = _0x84b47f.length - 1; _0xfa6235 >= 0; _0xfa6235--)
      (_0x5d7c8a = _0x84b47f[_0xfa6235]) &&
        (_0x59c259 =
          (_0x224a3f < 3
            ? _0x5d7c8a(_0x59c259)
            : _0x224a3f > 3
              ? _0x5d7c8a(_0x2201b5, _0x3881e6, _0x59c259)
              : _0x5d7c8a(_0x2201b5, _0x3881e6)) || _0x59c259);
  }
  return (
    _0x224a3f > 3 &&
      _0x59c259 &&
      Object.defineProperty(_0x2201b5, _0x3881e6, _0x59c259),
    _0x59c259
  );
}
let j = class extends i.Disposable {
  constructor(_0x2e7913, _0x5233d8) {
    (super(),
      this.disposeWithMe(
        _0x5233d8.registerComponent(b.BuiltInUIPart["CONTENT"], () =>
          (0, b.connectInjector)(O, _0x2e7913),
        ),
      ));
  }
};
j = A([k(0, (0, i.Inject)(i.Injector)), k(1, b.IUIPartsService)], j);
const M = new Map([
    [o.SetBoardNameCommand["id"], "boards-history-ui.action.renameBoard"],
    [
      o.SetBoardPageBackgroundCommand["id"],
      "boards-history-ui.action.updateBackground",
    ],
    [o.SetBoardThemeOperation["id"], "boards-history-ui.action.updateTheme"],
    [o.AddBoardElementOperation["id"], "boards-history-ui.action.insertObject"],
    [
      o.AddBoardElementsOperation["id"],
      "boards-history-ui.action.insertObject",
    ],
    [
      o.RemoveBoardElementCommand["id"],
      "boards-history-ui.action.deleteObject",
    ],
    [
      o.RemoveBoardElementsOperation["id"],
      "boards-history-ui.action.deleteObject",
    ],
    [
      o.UpdateBoardElementCommand["id"],
      "boards-history-ui.action.updateObject",
    ],
    [
      o.UpdateBoardElementsCommand["id"],
      "boards-history-ui.action.updateObject",
    ],
    [
      o.ReorderBoardElementsOperation["id"],
      "boards-history-ui.action.reorderObject",
    ],
    [
      o.ReorderBoardObjectListElementOperation["id"],
      "boards-history-ui.action.reorderObject",
    ],
    [
      o.ReparentBoardElementsOperation["id"],
      "boards-history-ui.action.moveObject",
    ],
    [
      o.SetBoardElementsMetadataOperation["id"],
      "boards-history-ui.action.updateObject",
    ],
    [
      o.SetBoardConnectorLabelTextCommand["id"],
      "boards-history-ui.action.updateConnector",
    ],
    [
      o.SetBoardConnectorLabelStyleCommand["id"],
      "boards-history-ui.action.updateConnector",
    ],
    [
      o.RemoveBoardConnectorLabelCommand["id"],
      "boards-history-ui.action.updateConnector",
    ],
    [
      o.NormalizeBoardConnectorRoutingCommand["id"],
      "boards-history-ui.action.updateConnector",
    ],
    [
      o.BeginBoardContainerOperation["id"],
      "boards-history-ui.action.insertContainer",
    ],
    [
      o.WrapBoardElementsInContainerOperation["id"],
      "boards-history-ui.action.insertContainer",
    ],
    [
      o.DisbandBoardContainerOperation["id"],
      "boards-history-ui.action.deleteContainer",
    ],
    [
      o.CommitBoardContainerTransformOperation["id"],
      "boards-history-ui.action.updateContainer",
    ],
    [
      o.FitBoardContainerToContentOperation["id"],
      "boards-history-ui.action.updateContainer",
    ],
    [
      o.SetBoardContainerAutoResizeOperation["id"],
      "boards-history-ui.action.updateContainer",
    ],
    [
      o.SetBoardContainerMembershipLockOperation["id"],
      "boards-history-ui.action.updateContainer",
    ],
    [
      o.BeginBoardSwimlaneOperation["id"],
      "boards-history-ui.action.insertSwimlane",
    ],
    [
      o.SetBoardSwimlaneLanesOperation["id"],
      "boards-history-ui.action.updateSwimlane",
    ],
    [
      o.SetBoardSwimlaneLaneSizeOperation["id"],
      "boards-history-ui.action.updateSwimlane",
    ],
    [
      o.RemoveBoardSwimlaneLaneOperation["id"],
      "boards-history-ui.action.updateSwimlane",
    ],
    [
      l.InsertBoardMindMapOperation["id"],
      "boards-history-ui.action.insertMindMap",
    ],
    [
      l.ImportMindMapOpmlOperation["id"],
      "boards-history-ui.action.insertMindMap",
    ],
    [
      l.PasteMindMapAsNewMindMapOperation["id"],
      "boards-history-ui.action.insertMindMap",
    ],
    [
      l.AddMindMapChildOperation["id"],
      "boards-history-ui.action.insertMindMapNode",
    ],
    [
      l.AddMindMapSiblingOperation["id"],
      "boards-history-ui.action.insertMindMapNode",
    ],
    [
      l.PasteMindMapNodeOperation["id"],
      "boards-history-ui.action.insertMindMapNode",
    ],
    [
      l.DeleteMindMapNodeOperation["id"],
      "boards-history-ui.action.deleteMindMapNode",
    ],
    [
      l.UpdateMindMapNodeOperation["id"],
      "boards-history-ui.action.updateMindMap",
    ],
    [
      l.UpdateMindMapNodesOperation["id"],
      "boards-history-ui.action.updateMindMap",
    ],
    [
      l.UpdateMindMapIncomingConnectorOperation["id"],
      "boards-history-ui.action.updateMindMap",
    ],
    [
      l.ChangeMindMapLayoutOperation["id"],
      "boards-history-ui.action.updateMindMapLayout",
    ],
    [
      l.LayoutMindMapOperation["id"],
      "boards-history-ui.action.updateMindMapLayout",
    ],
    [
      l.ChangeMindMapBranchLineTypeOperation["id"],
      "boards-history-ui.action.updateMindMapLayout",
    ],
    [
      l.ReflowMindMapCommand["id"],
      "boards-history-ui.action.updateMindMapLayout",
    ],
    [
      l.ReparentMindMapNodeOperation["id"],
      "boards-history-ui.action.moveMindMapNode",
    ],
    [
      l.PromoteMindMapNodeOperation["id"],
      "boards-history-ui.action.moveMindMapNode",
    ],
    [
      l.DetachMindMapNodeOperation["id"],
      "boards-history-ui.action.moveMindMapNode",
    ],
    [
      l.TranslateMindMapOperation["id"],
      "boards-history-ui.action.moveMindMapNode",
    ],
    [
      l.ToggleMindMapNodeCollapseOperation["id"],
      "boards-history-ui.action.updateMindMap",
    ],
    [o.InsertBoardTableOperation["id"], "boards-history-ui.action.insertTable"],
    [d.RemoveBoardTableCommand["id"], "boards-history-ui.action.deleteTable"],
    [
      d.InsertBoardTableRowsCommand["id"],
      "boards-history-ui.action.insertTableRows",
    ],
    [
      d.DeleteBoardTableRowsCommand["id"],
      "boards-history-ui.action.deleteTableRows",
    ],
    [
      d.MoveBoardTableRowsCommand["id"],
      "boards-history-ui.action.moveTableRows",
    ],
    [
      d.ResizeBoardTableRowsCommand["id"],
      "boards-history-ui.action.resizeTableRows",
    ],
    [
      d.InsertBoardTableColumnsCommand["id"],
      "boards-history-ui.action.insertTableColumns",
    ],
    [
      d.DeleteBoardTableColumnsCommand["id"],
      "boards-history-ui.action.deleteTableColumns",
    ],
    [
      d.MoveBoardTableColumnsCommand["id"],
      "boards-history-ui.action.moveTableColumns",
    ],
    [
      d.ResizeBoardTableColumnsCommand["id"],
      "boards-history-ui.action.resizeTableColumns",
    ],
    [
      d.MergeBoardTableCellsCommand["id"],
      "boards-history-ui.action.mergeTableCells",
    ],
    [
      d.UnmergeBoardTableCellsCommand["id"],
      "boards-history-ui.action.unmergeTableCells",
    ],
    [
      d.SetBoardTableCellTextCommand["id"],
      "boards-history-ui.action.editTableCell",
    ],
    [
      d.SetBoardTableCellStyleCommand["id"],
      "boards-history-ui.action.formatTable",
    ],
    [
      d.SetBoardTableBorderPresetCommand["id"],
      "boards-history-ui.action.formatTable",
    ],
    [d.UpdateBoardTableCommand["id"], "boards-history-ui.action.updateTable"],
    [o.InsertBoardChartCommand["id"], "boards-history-ui.action.insertChart"],
    [
      s.ChangeBoardChartDataSourceCommand["id"],
      "boards-history-ui.action.updateChart",
    ],
    [
      s.DuplicateBoardChartDataSourceCommand["id"],
      "boards-history-ui.action.updateChart",
    ],
    [
      s.UpdateBoardChartDataSourceCommand["id"],
      "boards-history-ui.action.updateChart",
    ],
    [
      s.UpdateBoardChartConfigCommand["id"],
      "boards-history-ui.action.updateChart",
    ],
  ]),
  N = new Map([
    [
      o.BoardElementType["Text"],
      {
        insert: "boards-history-ui.action.insertTextBox",
        update: "boards-history-ui.action.updateTextBox",
        delete: "boards-history-ui.action.deleteTextBox",
      },
    ],
    [
      o.BoardElementType["Shape"],
      {
        insert: "boards-history-ui.action.insertShape",
        update: "boards-history-ui.action.updateShape",
        delete: "boards-history-ui.action.deleteShape",
      },
    ],
    [
      o.BoardElementType["Image"],
      {
        insert: "boards-history-ui.action.insertImage",
        update: "boards-history-ui.action.updateImage",
        delete: "boards-history-ui.action.deleteImage",
      },
    ],
    [
      o.BoardElementType["Diagram"],
      {
        insert: "boards-history-ui.action.insertDiagram",
        update: "boards-history-ui.action.updateDiagram",
        delete: "boards-history-ui.action.deleteDiagram",
      },
    ],
    [
      o.BoardElementType["Media"],
      {
        insert: "boards-history-ui.action.insertMedia",
        update: "boards-history-ui.action.updateMedia",
        delete: "boards-history-ui.action.deleteMedia",
      },
    ],
    [
      o.BoardElementType["Group"],
      {
        insert: "boards-history-ui.action.insertGroup",
        update: "boards-history-ui.action.updateGroup",
        delete: "boards-history-ui.action.deleteGroup",
      },
    ],
    [
      o.BoardElementType["Connector"],
      {
        insert: "boards-history-ui.action.insertConnector",
        update: "boards-history-ui.action.updateConnector",
        delete: "boards-history-ui.action.deleteConnector",
      },
    ],
    [
      o.BoardElementType["Table"],
      {
        insert: "boards-history-ui.action.insertTable",
        update: "boards-history-ui.action.updateTable",
        delete: "boards-history-ui.action.deleteTable",
      },
    ],
    [
      o.BoardElementType["Chart"],
      {
        insert: "boards-history-ui.action.insertChart",
        update: "boards-history-ui.action.updateChart",
        delete: "boards-history-ui.action.deleteChart",
      },
    ],
  ]),
  ie = new Set([
    o.AddBoardElementMutation["id"],
    o.AddBoardElementOperation["id"],
    o.AddBoardElementsOperation["id"],
  ]),
  P = new Set([
    o.UpdateBoardElementCommand["id"],
    o.UpdateBoardElementMutation["id"],
    o.UpdateBoardElementsCommand["id"],
  ]),
  F = new Set([
    o.RemoveBoardElementCommand["id"],
    o.RemoveBoardElementMutation["id"],
    o.RemoveBoardElementOperation["id"],
    o.RemoveBoardElementsOperation["id"],
  ]);
let I = class extends i.Disposable {
  constructor(_0x46cb80, _0xd43ff3) {
    (super(),
      (this._localeService = _0xd43ff3),
      this.disposeWithMe(
        _0x46cb80.register(i.UniverInstanceType["UNIVER_BOARD"], this),
      ));
  }
  resolve(_0x1bf762) {
    let _0x2a7930 = new Set(
        B(_0x1bf762, o.AddBoardElementMutation["id"]).map(
          (_0x285137) => _0x285137.id,
        ),
      ),
      _0x38d18d = R(_0x1bf762),
      _0x18f972 = z(_0x1bf762, _0x2a7930),
      _0x4351d = L(_0x1bf762),
      _0x57706f = [..._0x38d18d, ..._0x18f972, ..._0x4351d].map((_0x516699) =>
        this._localeService["t"](_0x516699),
      ),
      _0x3209be = [..._0x1bf762.commandIds].flatMap((_0x9842d1) => {
        if (
          (_0x38d18d.length > 0 && ie.has(_0x9842d1)) ||
          (_0x18f972.length > 0 && P.has(_0x9842d1)) ||
          (_0x4351d.length > 0 && F.has(_0x9842d1))
        )
          return [];
        let _0x3d6b6a = M.get(_0x9842d1);
        return _0x3d6b6a ? [this._localeService["t"](_0x3d6b6a)] : [];
      }),
      _0x691278 = [...new Set([..._0x57706f, ..._0x3209be])];
    return _0x691278.length > 0
      ? _0x691278
      : _0x1bf762.commandIds["has"](l.SetMindMapElementMutation["id"])
        ? [this._localeService["t"]("boards-history-ui.action.updateMindMap")]
        : _0x1bf762.commandIds["has"](o.AddBoardElementMutation["id"])
          ? [this._localeService["t"]("boards-history-ui.action.insertObject")]
          : _0x1bf762.commandIds["has"](o.RemoveBoardElementMutation["id"])
            ? [
                this._localeService["t"](
                  "boards-history-ui.action.deleteObject",
                ),
              ]
            : _0x1bf762.commandIds["has"](o.UpdateBoardElementMutation["id"])
              ? [
                  this._localeService["t"](
                    "boards-history-ui.action.updateObject",
                  ),
                ]
              : [];
  }
};
I = A(
  [
    k(0, (0, i.Inject)(S.HistoryActionSummaryService)),
    k(1, (0, i.Inject)(i.LocaleService)),
  ],
  I,
);
function L(_0x388b31) {
  let _0x131e07 = _0x388b31.mutations["flatMap"]((_0x32e5db) => {
    var _0x5876e0;
    if (
      _0x32e5db.id !== o.RemoveBoardElementMutation["id"] ||
      !U(_0x32e5db.params)
    )
      return [];
    if (_0x32e5db.params["elementType"] === o.BoardElementType["Container"])
      return _0x32e5db.params["containerKind"] === "swimlane"
        ? ["boards-history-ui.action.deleteSwimlane"]
        : ["boards-history-ui.action.deleteContainer"];
    let _0x1b9f97 = H(_0x32e5db.params["elementType"])
      ? (_0x5876e0 = N.get(_0x32e5db.params["elementType"])) == null
        ? undefined
        : _0x5876e0.delete
      : undefined;
    return _0x1b9f97 ? [_0x1b9f97] : [];
  });
  return [...new Set(_0x131e07)];
}
function R(_0x5114c0) {
  let _0x9ed43 = B(_0x5114c0, o.AddBoardElementMutation["id"]).flatMap(
    (_0x15702e) => {
      var _0x48c243;
      if ((0, l.getMindMapContainerMeta)(_0x15702e))
        return ["boards-history-ui.action.insertMindMap"];
      if ((0, l.getMindMapNodeMeta)(_0x15702e))
        return ["boards-history-ui.action.insertMindMapNode"];
      if (_0x15702e.type === o.BoardElementType["Container"])
        return _0x15702e.containerData["kind"] === "swimlane"
          ? ["boards-history-ui.action.insertSwimlane"]
          : ["boards-history-ui.action.insertContainer"];
      let _0x4d8ab0 =
        (_0x48c243 = N.get(_0x15702e.type)) == null
          ? undefined
          : _0x48c243.insert;
      return _0x4d8ab0 ? [_0x4d8ab0] : [];
    },
  );
  return [...new Set(_0x9ed43)];
}
function z(_0x31099b, _0x4d4c7b) {
  let _0x4dd927 = [
    ...B(_0x31099b, l.SetMindMapElementMutation["id"]),
    ...B(_0x31099b, o.UpdateBoardElementMutation["id"]),
  ]
    .filter((_0x13a050) => !_0x4d4c7b.has(_0x13a050.id))
    .flatMap((_0x35ffae) => {
      var _0x2419eb;
      if (
        (0, l.getMindMapContainerMeta)(_0x35ffae) ||
        (0, l.getMindMapNodeMeta)(_0x35ffae)
      )
        return ["boards-history-ui.action.updateMindMap"];
      if (_0x35ffae.type === o.BoardElementType["Container"])
        return _0x35ffae.containerData["kind"] === "swimlane"
          ? ["boards-history-ui.action.updateSwimlane"]
          : ["boards-history-ui.action.updateContainer"];
      let _0x35abe4 =
        (_0x2419eb = N.get(_0x35ffae.type)) == null
          ? undefined
          : _0x2419eb.update;
      return _0x35abe4 ? [_0x35abe4] : [];
    });
  return [...new Set(_0x4dd927)];
}
function B(_0x2d4a3a, _0x4da70f) {
  return _0x2d4a3a.mutations["flatMap"]((_0x2c4dbd) =>
    _0x2c4dbd.id !== _0x4da70f ||
    !U(_0x2c4dbd.params) ||
    !V(_0x2c4dbd.params["element"])
      ? []
      : [_0x2c4dbd.params["element"]],
  );
}
function V(_0x14a888) {
  if (
    !U(_0x14a888) ||
    typeof _0x14a888.id != "string" ||
    !U(_0x14a888.transform)
  )
    return false;
  switch (_0x14a888.type) {
    case o.BoardElementType["Placeholder"]:
    case o.BoardElementType["Text"]:
    case o.BoardElementType["Shape"]:
    case o.BoardElementType["Image"]:
    case o.BoardElementType["Chart"]:
    case o.BoardElementType["Table"]:
    case o.BoardElementType["Diagram"]:
    case o.BoardElementType["Media"]:
    case o.BoardElementType["Group"]:
    case o.BoardElementType["Connector"]:
    case o.BoardElementType["Container"]:
      return true;
    default:
      return false;
  }
}
function H(_0x527b1e) {
  switch (_0x527b1e) {
    case o.BoardElementType["Placeholder"]:
    case o.BoardElementType["Text"]:
    case o.BoardElementType["Shape"]:
    case o.BoardElementType["Image"]:
    case o.BoardElementType["Chart"]:
    case o.BoardElementType["Table"]:
    case o.BoardElementType["Diagram"]:
    case o.BoardElementType["Media"]:
    case o.BoardElementType["Group"]:
    case o.BoardElementType["Connector"]:
    case o.BoardElementType["Container"]:
      return true;
    default:
      return false;
  }
}
function U(_0xf44d2d) {
  return typeof _0xf44d2d == "object" && !!_0xf44d2d;
}
function W(_0x3a2738) {
  "@babel/helpers - typeof";
  return (
    (W =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x1d13e9) {
            return typeof _0x1d13e9;
          }
        : function (_0x576786) {
            return _0x576786 &&
              typeof Symbol == "function" &&
              _0x576786.constructor === Symbol &&
              _0x576786 !== Symbol.prototype
              ? "symbol"
              : typeof _0x576786;
          }),
    W(_0x3a2738)
  );
}
function G(_0x889f98, _0x38ca43) {
  if (W(_0x889f98) != "object" || !_0x889f98) return _0x889f98;
  var _0x1e3cb6 = _0x889f98[Symbol.toPrimitive];
  if (_0x1e3cb6 !== undefined) {
    var _0x25d323 = _0x1e3cb6.call(_0x889f98, _0x38ca43 || "default");
    if (W(_0x25d323) != "object") return _0x25d323;
    throw TypeError(
      "@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.",
    );
  }
  return (_0x38ca43 === "string" ? String : Number)(_0x889f98);
}
function K(_0x104233) {
  var _0x52f403 = G(_0x104233, "string");
  return W(_0x52f403) == "symbol" ? _0x52f403 : _0x52f403 + "";
}
function q(_0xbd3006, _0x1ab360, _0x124dc2) {
  return (
    (_0x1ab360 = K(_0x1ab360)) in _0xbd3006
      ? Object.defineProperty(_0xbd3006, _0x1ab360, {
          value: _0x124dc2,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0xbd3006[_0x1ab360] = _0x124dc2),
    _0xbd3006
  );
}
let J = class extends i.Disposable {
  constructor(_0x770f8c, _0x405f06, _0x1c85ff, _0x346084, _0x5593aa) {
    (super(),
      (this._diffService = _0x770f8c),
      (this._snapshotService = _0x1c85ff),
      (this._univerInstanceService = _0x346084),
      (this._highlightService = _0x5593aa),
      q(this, "type", i.UniverInstanceType["UNIVER_BOARD"]),
      q(this, "_changes", new Map()),
      q(this, "_changesGeneration", 0),
      q(this, "_loadGeneration", 0),
      q(this, "_loadQueue", Promise.resolve()),
      q(this, "_unitId", ""),
      this.disposeWithMe(_0x405f06.register(this)));
  }
  loadRevision(_0x4a9b70, _0x4b6857) {
    let _0xe6a33c = ++this._loadGeneration,
      _0x36cbf0 = this._loadQueue["catch"](() => undefined).then(async () => {
        if (_0xe6a33c !== this._loadGeneration) return;
        this._getBoard(_0x4a9b70) &&
          this._univerInstanceService["disposeUnit"](_0x4a9b70);
        let _0x31240c = await this._snapshotService["loadBoard"](
          _0x4a9b70,
          _0x4b6857.endRevision,
        );
        if (_0xe6a33c !== this._loadGeneration) {
          this._getBoard(_0x4a9b70) === _0x31240c &&
            this._univerInstanceService["disposeUnit"](_0x4a9b70);
          return;
        }
        this._univerInstanceService["focusUnit"](_0x4a9b70);
      });
    return ((this._loadQueue = _0x36cbf0), _0x36cbf0);
  }
  async loadChanges(_0x1a9f33, _0x159cb5) {
    this._unitId = _0x1a9f33;
    let _0x236fe1 = ++this._changesGeneration,
      _0x467316 = await this._diffService["compare"](_0x1a9f33, _0x159cb5);
    _0x236fe1 === this._changesGeneration &&
      (this._changes["clear"](),
      _0x467316.forEach((_0x109230) =>
        this._changes["set"](_0x109230.id, _0x109230),
      ),
      await this._renderHighlights(_0x1a9f33));
  }
  close() {
    (++this._changesGeneration,
      ++this._loadGeneration,
      this._changes["clear"](),
      (this._unitId &&= (this._highlightService["clear"](this._unitId), "")));
  }
  _getBoard(_0x13f3e2) {
    return (
      this._univerInstanceService["getUnit"](
        _0x13f3e2,
        i.UniverInstanceType["UNIVER_BOARD"],
      ) ?? null
    );
  }
  _renderHighlights(_0x375990) {
    let _0x2bbf4c = this._getBoard(_0x375990);
    if (!_0x2bbf4c) return Promise.resolve();
    let _0x4c328f = _0x2bbf4c.getActivePageId(),
      _0xb3e961 = Array.from(this._changes["values"]())
        .filter((_0x190d5c) => _0x190d5c.pageId === _0x4c328f)
        .map((_0x3b7b59) => ({
          id: _0x3b7b59.id,
          kind: _0x3b7b59.kind,
          objectKey: _0x3b7b59.elementId
            ? (0, t.getBoardElementRenderObjectKey)(
                _0x375990,
                _0x3b7b59.elementId,
              )
            : undefined,
          outlineOnly: _0x3b7b59.kind === "delete" || !_0x3b7b59.elementId,
        }));
    return this._highlightService["show"](_0x375990, _0xb3e961);
  }
};
J = A(
  [
    k(0, (0, i.Inject)(e.BoardsHistoryDiffService)),
    k(1, (0, i.Inject)(S.HistoryRenderAdapterRegistryService)),
    k(2, (0, i.Inject)(p.SnapshotService)),
    k(3, i.IUniverInstanceService),
    k(4, (0, i.Inject)(S.HistoryCanvasHighlightService)),
  ],
  J,
);
let Y = class extends S.UniverEditHistoryUIPlugin {
  constructor(_0x59d7a2, _0x190ebe, _0x5528c3, _0x3b0bd4) {
    let { collaborationClientConfig: _0x3aa32f, ..._0x440e03 } = _0x59d7a2;
    (super(_0x440e03, _0x190ebe, _0x5528c3, _0x3b0bd4),
      (this._injector = _0x190ebe),
      _0x5528c3.setConfig(n.COLLABORATION_CLIENT_PLUGIN_CONFIG_KEY, _0x3aa32f));
  }
  onStarting() {
    (super.onStarting(),
      (0, i.registerDependencies)(this._injector, [
        [
          p.ISnapshotServerService,
          { useClass: n.SnapshotServerOverHTTPService },
        ],
        [I],
        [J],
        [j],
      ]),
      this._injector["get"](I),
      this._injector["get"](J),
      this._injector["get"](j));
  }
};
(q(Y, "pluginName", "UNIVER_BOARDS_HISTORY_VIEWER_PLUGIN"),
  q(Y, "packageName", E),
  q(Y, "version", D),
  q(Y, "type", i.UniverInstanceType["UNIVER_UNKNOWN"]),
  (Y = A(
    [
      (0, i.DependentOn)(
        r.UniverLicensePlugin,
        e.UniverBoardsHistoryPlugin,
        t.UniverBoardsUIPlugin,
      ),
      k(1, (0, i.Inject)(i.Injector)),
      k(2, i.IConfigService),
      k(3, i.ILogService),
    ],
    Y,
  )));
let X = class extends i.Disposable {
  constructor(
    _0x5afcae,
    _0x520ecd,
    _0xa9a86f,
    _0x4e7ab9,
    _0x3975f8,
    _0x5f122c,
    _0x256556,
    _0x2489d2,
  ) {
    (super(),
      (this._configService = _0x5afcae),
      (this._restoreService = _0x520ecd),
      (this._adapterRegistry = _0xa9a86f),
      (this._localeService = _0x4e7ab9),
      (this._themeService = _0x3975f8),
      (this._collaborationController = _0x5f122c),
      (this._dataLoaderService = _0x256556),
      (this._univerInstanceService = _0x2489d2),
      q(this, "_historyUniver", null),
      q(this, "_opening", null),
      q(this, "_openGeneration", 0),
      q(this, "_sessionDisposables", new i["DisposableCollection"]()),
      q(this, "_container", null),
      q(this, "_unitId", ""),
      q(this, "_location", undefined));
  }
  open(_0x5179e1) {
    if (this._historyUniver) return Promise.resolve();
    if (this._opening) return this._opening;
    let _0x5d028 = ++this._openGeneration,
      _0x2f50b7 = this._open(_0x5179e1, _0x5d028).finally(() => {
        this._opening === _0x2f50b7 && (this._opening = null);
      });
    return ((this._opening = _0x2f50b7), _0x2f50b7);
  }
  async _open(_0x246d6f, _0xf1d935) {
    let _0xe2791b = this._adapterRegistry["get"](
      i.UniverInstanceType["UNIVER_BOARD"],
    );
    if (!_0xe2791b)
      throw Error(
        "[BoardsHistoryLoaderService]: Board history adapter is not registered.",
      );
    let _0x422097 = await Promise.all([
      _0xe2791b.canView(_0x246d6f),
      _0xe2791b.canRevert(_0x246d6f),
    ]).catch((_0x46e059) => {
      if (_0xf1d935 === this._openGeneration) throw _0x46e059;
      return null;
    });
    if (!_0x422097 || _0xf1d935 !== this._openGeneration) return;
    let [_0x18ac1d, _0x421282] = _0x422097;
    if (!_0x18ac1d)
      throw Error(
        "[BoardsHistoryLoaderService]: The current user cannot view history for this Board.",
      );
    ((this._unitId = _0x246d6f),
      (this._location = _0xe2791b.captureLocation(_0x246d6f)));
    let _0x8a70d0 = this._ensureContainer();
    _0x8a70d0.style["display"] = "block";
    let _0x1eb909 = this._localeService["getCurrentLocale"](),
      _0x26c2cf = this._localeService["getLocales"](),
      _0x32d211 = new i["Univer"]({
        theme: this._themeService["getCurrentTheme"](),
        darkMode: this._themeService["darkMode"],
        locale: _0x1eb909,
        locales: _0x26c2cf ? { [_0x1eb909]: _0x26c2cf } : undefined,
        direction: this._localeService["getDirection"](),
        override: [[i.IAuthzIoService, { useClass: n.AuthzIoHttpService }]],
      });
    ((this._historyUniver = _0x32d211),
      this._syncViewerServices(_0x32d211, _0x8a70d0));
    try {
      (this._registerChildPlugins(_0x32d211, _0x421282, _0x8a70d0),
        _0x32d211.createUnit(
          i.UniverInstanceType["UNIVER_BOARD"],
          (0, o.getBoardsEmptySnapshot)(_0x246d6f, ""),
        ));
    } catch (_0x3c88c1) {
      throw (
        _0xf1d935 === this._openGeneration ? this.close() : _0x32d211.dispose(),
        _0x3c88c1
      );
    }
  }
  close() {
    (++this._openGeneration,
      (this._opening = null),
      this._sessionDisposables["dispose"]());
    let _0x3ce21e = this._historyUniver;
    ((this._historyUniver = null),
      _0x3ce21e == null || _0x3ce21e.dispose(),
      (this._unitId = ""),
      (this._location = undefined),
      this._container && (this._container["style"].display = "none"));
  }
  _syncViewerServices(_0x2f8439, _0x28384f) {
    let _0x43c2df = _0x2f8439.__getInjector(),
      _0x51c797 = _0x43c2df.get(i.LocaleService),
      _0x4bdc12 = _0x43c2df.get(i.ThemeService);
    (this._sessionDisposables["add"](
      this._themeService["darkMode$"].subscribe((_0xc04899) => {
        _0x4bdc12.setDarkMode(_0xc04899);
      }),
    ),
      this._sessionDisposables["add"](
        this._themeService["currentTheme$"].subscribe((_0x19c1de) => {
          _0x4bdc12.setTheme(_0x19c1de);
        }),
      ),
      this._sessionDisposables["add"](
        this._localeService["currentLocale$"].subscribe((_0x238c00) => {
          let _0x42b7a8 = this._localeService["getLocales"]();
          (_0x42b7a8 && _0x51c797.load({ [_0x238c00]: _0x42b7a8 }),
            _0x51c797.setLocale(_0x238c00));
        }),
      ),
      this._sessionDisposables["add"](
        this._localeService["direction$"].subscribe((_0x1c0ff1) => {
          (_0x51c797.setDirection(_0x1c0ff1),
            (_0x28384f.dir = _0x1c0ff1),
            (_0x28384f.style["direction"] = _0x1c0ff1));
        }),
      ));
  }
  async restore(_0x161808) {
    var _0x1d73e3;
    let _0x442555 = this._unitId,
      _0xafeda3 = this._location,
      _0x30eff9 = this._collaborationController["getCollabEntity"](_0x442555);
    if (!_0x30eff9)
      throw Error(
        "[BoardsHistoryLoaderService]: Collaboration is not ready for this Board.",
      );
    let _0x26c02a = new x.Subject(),
      _0x2f86d8 = (0, x.firstValueFrom)(
        _0x30eff9.session["event$"].pipe(
          (0, x.filter)(
            (_0x27ae23) =>
              _0x27ae23.eventID === p.CollaborationEvent["CHANGESET_ACK"],
          ),
          (0, x.filter)((_0xff30d0) =>
            (0, g.isHistoryRestoreAcknowledgement)(_0xff30d0, _0x161808),
          ),
          (0, x.takeUntil)(_0x26c02a),
          (0, x.timeout)(10000),
        ),
      );
    try {
      if (
        !(await this._restoreService["restore"](
          _0x442555,
          i.UniverInstanceType["UNIVER_BOARD"],
          _0x161808,
        ))
      )
        throw Error(
          "[BoardsHistoryLoaderService]:\x20The\x20restore\x20command\x20was\x20not\x20accepted.",
        );
      await _0x2f86d8;
    } catch (_0x582084) {
      throw (
        _0x26c02a.next(),
        await _0x2f86d8.catch(() => undefined),
        _0x582084
      );
    } finally {
      _0x26c02a.complete();
    }
    (this.close(),
      this._univerInstanceService["disposeUnit"](_0x442555),
      await this._dataLoaderService["loadUnit"](
        _0x442555,
        i.UniverInstanceType["UNIVER_BOARD"],
      ),
      await ((_0x1d73e3 = this._adapterRegistry["get"](
        i.UniverInstanceType["UNIVER_BOARD"],
      )) == null
        ? undefined
        : _0x1d73e3.restoreLocation(_0x442555, _0xafeda3)));
  }
  _ensureContainer() {
    var _0x4c312c;
    if (this._container) return this._container;
    let _0x433e2f = this._configService["getConfig"](w),
      _0x51390e =
        (_0x433e2f == null ? undefined : _0x433e2f.univerContainerId) ??
        ((_0x4c312c = this._configService["getConfig"](
          b.UI_PLUGIN_CONFIG_KEY,
        )) == null
          ? undefined
          : _0x4c312c.container),
      _0x1e0674 =
        typeof _0x51390e == "string"
          ? document.getElementById(_0x51390e)
          : _0x51390e;
    if (!_0x1e0674)
      throw Error(
        "[BoardsHistoryLoaderService]: Configure a valid Univer container before opening history.",
      );
    let _0x3585e7 = document.createElement("div");
    return (
      Object.assign(_0x3585e7.style, {
        position: "absolute",
        inset: "0",
        zIndex: "49",
        display: "none",
      }),
      _0x1e0674.appendChild(_0x3585e7),
      (this._container = _0x3585e7),
      _0x3585e7
    );
  }
  _registerChildPlugins(_0x2b0b2d, _0x2f7e44, _0x1971cd) {
    let _0x4866c9 = this._configService["getConfig"](r.LS_CONFIG_KEY),
      _0x41c9a6 = this._configService["getConfig"](w),
      _0x1ebc89 = [
        [
          r.UniverLicensePlugin,
          { license: _0x4866c9 == null ? undefined : _0x4866c9.ls },
        ],
        [re.UniverRenderEnginePlugin],
        [
          b.UniverUIPlugin,
          {
            container: _0x1971cd,
            header: true,
            toolbar: false,
            footer: true,
            contextMenu: false,
          },
        ],
        [y.UniverNetworkPlugin],
        [
          v.UniverDrawingPlugin,
          {
            override: [
              [i.IImageIoService, { useClass: n.CollaborationImageIoService }],
            ],
          },
        ],
        [ne.UniverDocsPlugin],
        [_.UniverDocsUIPlugin],
        [m.UniverDocsLatexPlugin],
        [h.UniverDocsLatexUIPlugin],
        [ee.UniverInkPlugin],
        [te.UniverInkUIPlugin],
        [o.UniverBoardsPlugin],
        [
          t.UniverBoardsUIPlugin,
          { showToolbar: false, workbench: { content: false } },
        ],
        [s.UniverBoardsChartPlugin],
        [c.UniverBoardsChartUIPlugin],
        [l.UniverBoardsMindPlugin],
        [u.UniverBoardsMindUIPlugin],
        [d.UniverBoardsTablePlugin],
        [f.UniverBoardsTableUIPlugin],
        [p.UniverCollaborationPlugin],
        [
          g.UniverEditHistoryPlugin,
          {
            historyServerUrl:
              _0x41c9a6 == null ? undefined : _0x41c9a6.historyServerUrl,
          },
        ],
        [e.UniverBoardsHistoryPlugin],
      ],
      _0x44fcf5 = new Set();
    ([
      ..._0x1ebc89,
      ...((_0x41c9a6 == null ? undefined : _0x41c9a6.viewerPlugins) ?? []),
    ].forEach(([_0x7d29e0, _0x252980]) => {
      if (_0x44fcf5.has(_0x7d29e0.pluginName))
        throw Error(
          "[BoardsHistoryLoaderService]: Plugin " +
            _0x7d29e0.pluginName +
            " has already been registered.",
        );
      (_0x44fcf5.add(_0x7d29e0.pluginName),
        _0x2b0b2d.registerPlugin(_0x7d29e0, _0x252980));
    }),
      _0x2b0b2d.registerPlugin(Y, {
        viewerMode: true,
        descriptor: {
          unitId: this._unitId,
          type: i.UniverInstanceType["UNIVER_BOARD"],
        },
        canRestore: _0x2f7e44,
        onClose: () => this.close(),
        onRestore: (_0x16b5f5) => this.restore(_0x16b5f5),
        collaborationClientConfig: this._configService["getConfig"](
          n.COLLABORATION_CLIENT_PLUGIN_CONFIG_KEY,
        ),
      }));
  }
  dispose() {
    var _0x4f659d;
    (this.close(),
      (_0x4f659d = this._container) == null || _0x4f659d.remove(),
      (this._container = null),
      super.dispose());
  }
};
X = A(
  [
    k(0, i.IConfigService),
    k(1, (0, i.Inject)(g.HistoryRestoreService)),
    k(2, (0, i.Inject)(g.HistoryUnitAdapterRegistryService)),
    k(3, (0, i.Inject)(i.LocaleService)),
    k(4, (0, i.Inject)(i.ThemeService)),
    k(5, (0, i.Inject)(n.CollaborationController)),
    k(6, (0, i.Inject)(n.DataLoaderService)),
    k(7, i.IUniverInstanceService),
  ],
  X,
);
const Z = {
  id: "boards-history-ui.operation.open",
  type: i.CommandType["OPERATION"],
  handler: (_0x5e773f) => {
    let _0x345039 = _0x5e773f
      .get(i.IUniverInstanceService)
      .getCurrentUnitOfType(i.UniverInstanceType["UNIVER_BOARD"]);
    return _0x345039
      ? (_0x5e773f
          .get(X)
          .open(_0x345039.getUnitId())
          .catch((_0x43c185) => {
            _0x5e773f
              .get(i.ILogService)
              .error(
                "[OpenBoardsHistoryOperation]: Failed to open Board history.",
                _0x43c185,
              );
          }),
        true)
      : false;
  },
};
let Q = class extends i.Disposable {
  constructor(_0x21dfb5, _0x433ca2, _0x400341) {
    (super(),
      this.disposeWithMe(_0x21dfb5.registerCommand(Z)),
      this.disposeWithMe(
        _0x433ca2.register({
          id: Z.id,
          menuItemId: Z.id,
          group: "action",
          order: 100,
          icon: a.HistoryIcon,
          label: () => _0x400341.t("boards-history-ui.menu.history"),
          onClick: (_0x43fc23) => _0x43fc23.executeCommand(Z.id),
        }),
      ));
  }
};
Q = A(
  [
    k(0, i.ICommandService),
    k(1, (0, i.Inject)(t.IBoardSettingsMenuContributionService)),
    k(2, (0, i.Inject)(i.LocaleService)),
  ],
  Q,
);
let $ = class extends i.Plugin {
  constructor(_0x4db56f = T, _0x15f34b, _0x38a166) {
    (super(),
      (this._config = _0x4db56f),
      (this._injector = _0x15f34b),
      (this._configService = _0x38a166));
    let { ..._0x53d80f } = (0, i.merge)({}, T, this._config);
    this._configService["setConfig"](w, _0x53d80f);
  }
  onStarting() {
    ((0, i.registerDependencies)(this._injector, [[X], [Q]]),
      this._injector["get"](Q));
  }
};
(q($, "pluginName", "UNIVER_BOARDS_HISTORY_UI_PLUGIN"),
  q($, "packageName", E),
  q($, "version", D),
  q($, "type", i.UniverInstanceType["UNIVER_BOARD"]),
  ($ = A(
    [
      (0, i.DependentOn)(
        r.UniverLicensePlugin,
        n.UniverCollaborationClientPlugin,
        e.UniverBoardsHistoryPlugin,
        t.UniverBoardsUIPlugin,
      ),
      k(1, (0, i.Inject)(i.Injector)),
      k(2, i.IConfigService),
    ],
    $,
  )),
  (exports.BOARDS_HISTORY_UI_PLUGIN_CONFIG_KEY = w),
  Object.defineProperty(exports, "UniverBoardsHistoryUIPlugin", {
    enumerable: true,
    get: function () {
      return $;
    },
  }));
