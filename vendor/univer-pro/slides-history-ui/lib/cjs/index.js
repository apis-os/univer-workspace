Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/collaboration-client"),
  t = require("@univerjs-pro/license"),
  n = require("@univerjs-pro/slides-history"),
  r = require("@univerjs-pro/slides-ui"),
  i = require("@univerjs/core"),
  a = require("@univerjs/icons"),
  o = require("@univerjs/ui"),
  s = require("@univerjs-pro/collaboration"),
  c = require("@univerjs-pro/edit-history"),
  l = require("@univerjs-pro/slides"),
  u = require("@univerjs-pro/slides-chart"),
  d = require("@univerjs-pro/slides-chart-ui"),
  f = require("@univerjs-pro/slides-table"),
  p = require("@univerjs-pro/slides-table-ui"),
  m = require("@univerjs/docs"),
  h = require("@univerjs/docs-ui"),
  g = require("@univerjs/drawing"),
  _ = require("@univerjs/engine-render"),
  v = require("@univerjs/network"),
  y = require("rxjs"),
  b = require("@univerjs-pro/edit-history-ui");
const x = "slides-history-ui.config",
  S = { historyServerUrl: "/universer-api/history" };
var C = "@univerjs-pro/slides-history-ui",
  w = "1.0.0-insiders.20260907-70fc579";
function T(_0x59aca1, _0x40ff99) {
  return function (_0x30afda, _0x26bd0) {
    _0x40ff99(_0x30afda, _0x26bd0, _0x59aca1);
  };
}
function E(_0xba43fb, _0x5e0fd8, _0x30a7b4, _0x49d113) {
  var _0x1845e2 = arguments.length,
    _0x5e3c1c =
      _0x1845e2 < 3
        ? _0x5e0fd8
        : _0x49d113 === null
          ? (_0x49d113 = Object.getOwnPropertyDescriptor(_0x5e0fd8, _0x30a7b4))
          : _0x49d113,
    _0x3beb31;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x5e3c1c = Reflect.decorate(_0xba43fb, _0x5e0fd8, _0x30a7b4, _0x49d113);
  else {
    for (var _0x3aa9f1 = _0xba43fb.length - 1; _0x3aa9f1 >= 0; _0x3aa9f1--)
      (_0x3beb31 = _0xba43fb[_0x3aa9f1]) &&
        (_0x5e3c1c =
          (_0x1845e2 < 3
            ? _0x3beb31(_0x5e3c1c)
            : _0x1845e2 > 3
              ? _0x3beb31(_0x5e0fd8, _0x30a7b4, _0x5e3c1c)
              : _0x3beb31(_0x5e0fd8, _0x30a7b4)) || _0x5e3c1c);
  }
  return (
    _0x1845e2 > 3 &&
      _0x5e3c1c &&
      Object.defineProperty(_0x5e0fd8, _0x30a7b4, _0x5e3c1c),
    _0x5e3c1c
  );
}
let D = class extends i.Disposable {
  constructor(_0x67680e) {
    (super(),
      this.disposeWithMe(
        _0x67680e.register("SlidesHistoryIcon", a.HistoryIcon),
      ));
  }
};
D = E([T(0, (0, i.Inject)(o.IconManager))], D);
const O = new Map([
    [l.SetSlideNameCommand["id"], "slides-history-ui.action.renameSlide"],
    [l.AddSlidePageCommand["id"], "slides-history-ui.action.insertSlide"],
    [
      l.CreateSlideByLayoutCommand["id"],
      "slides-history-ui.action.insertSlide",
    ],
    [l.RemoveSlidePageCommand["id"], "slides-history-ui.action.deleteSlide"],
    [l.MoveSlidePageCommand["id"], "slides-history-ui.action.moveSlide"],
    [
      l.SetSlidePageSizeCommand["id"],
      "slides-history-ui.action.updatePageSize",
    ],
    [
      l.UpdateSlidePageBackgroundCommand["id"],
      "slides-history-ui.action.updateBackground",
    ],
    [
      l.SetPresentationBackgroundGraphicsCommand["id"],
      "slides-history-ui.action.updateBackgroundGraphics",
    ],
    [
      l.SetSlideTransitionCommand["id"],
      "slides-history-ui.action.updateTransition",
    ],
    [
      l.SetSlideSpeakerNotesCommand["id"],
      "slides-history-ui.action.updateSpeakerNotes",
    ],
    [l.AddSlideElementCommand["id"], "slides-history-ui.action.insertObject"],
    [
      l.RemoveSlideElementCommand["id"],
      "slides-history-ui.action.deleteObject",
    ],
    [
      l.UpdateSlideDrawingCommand["id"],
      "slides-history-ui.action.updateObject",
    ],
    [
      l.ReorderSlideElementsCommand["id"],
      "slides-history-ui.action.reorderObject",
    ],
    [l.SetSlideGroupMutation["id"], "slides-history-ui.action.groupObjects"],
    [
      l.CancelSlideGroupMutation["id"],
      "slides-history-ui.action.ungroupObjects",
    ],
    [
      l.UpdateSlideSmartArtCommand["id"],
      "slides-history-ui.action.updateSmartArt",
    ],
    [
      l.ConvertSlideSmartArtToShapesCommand["id"],
      "slides-history-ui.action.convertSmartArt",
    ],
    [f.InsertSlideTableCommand["id"], "slides-history-ui.action.insertTable"],
    [f.RemoveSlideTableCommand["id"], "slides-history-ui.action.deleteTable"],
    [
      f.InsertSlideTableRowsCommand["id"],
      "slides-history-ui.action.insertTableRows",
    ],
    [
      f.DeleteSlideTableRowsCommand["id"],
      "slides-history-ui.action.deleteTableRows",
    ],
    [
      f.MoveSlideTableRowsCommand["id"],
      "slides-history-ui.action.moveTableRows",
    ],
    [
      f.InsertSlideTableColumnsCommand["id"],
      "slides-history-ui.action.insertTableColumns",
    ],
    [
      f.DeleteSlideTableColumnsCommand["id"],
      "slides-history-ui.action.deleteTableColumns",
    ],
    [
      f.MoveSlideTableColumnsCommand["id"],
      "slides-history-ui.action.moveTableColumns",
    ],
    [
      f.MergeSlideTableCellsCommand["id"],
      "slides-history-ui.action.mergeTableCells",
    ],
    [
      f.UnmergeSlideTableCellsCommand["id"],
      "slides-history-ui.action.unmergeTableCells",
    ],
    [f.UpdateSlideTableCommand["id"], "slides-history-ui.action.updateTable"],
    [u.InsertSlideChartCommand["id"], "slides-history-ui.action.insertChart"],
    [u.RemoveSlideChartCommand["id"], "slides-history-ui.action.deleteChart"],
    [
      u.ChangeSlideChartDataSourceCommand["id"],
      "slides-history-ui.action.updateChart",
    ],
    [
      u.DuplicateSlideChartDataSourceCommand["id"],
      "slides-history-ui.action.updateChart",
    ],
    [
      u.UpdateSlideChartDataSourceCommand["id"],
      "slides-history-ui.action.updateChart",
    ],
    [
      u.UpdateSlideChartConfigCommand["id"],
      "slides-history-ui.action.updateChart",
    ],
    [
      u.UpdateSlideChartSnapshotCommand["id"],
      "slides-history-ui.action.updateChart",
    ],
  ]),
  k = new Map([
    [
      l.PageElementTypeEnum["Text"],
      {
        insert: "slides-history-ui.action.insertTextBox",
        update: "slides-history-ui.action.updateTextBox",
        delete: "slides-history-ui.action.deleteTextBox",
      },
    ],
    [
      l.PageElementTypeEnum["Shape"],
      {
        insert: "slides-history-ui.action.insertShape",
        update: "slides-history-ui.action.updateShape",
        delete: "slides-history-ui.action.deleteShape",
      },
    ],
    [
      l.PageElementTypeEnum["Image"],
      {
        insert: "slides-history-ui.action.insertImage",
        update: "slides-history-ui.action.updateImage",
        delete: "slides-history-ui.action.deleteImage",
      },
    ],
    [
      l.PageElementTypeEnum["Diagram"],
      {
        insert: "slides-history-ui.action.insertDiagram",
        update: "slides-history-ui.action.updateDiagram",
        delete: "slides-history-ui.action.deleteDiagram",
      },
    ],
    [
      l.PageElementTypeEnum["Media"],
      {
        insert: "slides-history-ui.action.insertMedia",
        update: "slides-history-ui.action.updateMedia",
        delete: "slides-history-ui.action.deleteMedia",
      },
    ],
    [
      l.PageElementTypeEnum["Group"],
      {
        insert: "slides-history-ui.action.insertGroup",
        update: "slides-history-ui.action.updateGroup",
        delete: "slides-history-ui.action.deleteGroup",
      },
    ],
    [
      l.PageElementTypeEnum["Connector"],
      {
        insert: "slides-history-ui.action.insertConnector",
        update: "slides-history-ui.action.updateConnector",
        delete: "slides-history-ui.action.deleteConnector",
      },
    ],
    [
      l.PageElementTypeEnum["Table"],
      {
        insert: "slides-history-ui.action.insertTable",
        update: "slides-history-ui.action.updateTable",
        delete: "slides-history-ui.action.deleteTable",
      },
    ],
    [
      l.PageElementTypeEnum["Chart"],
      {
        insert: "slides-history-ui.action.insertChart",
        update: "slides-history-ui.action.updateChart",
        delete: "slides-history-ui.action.deleteChart",
      },
    ],
  ]),
  A = new Set([
    l.AddSlideElementCommand["id"],
    l.AddSlideElementMutation["id"],
  ]),
  j = new Set([
    l.UpdateSlideDrawingCommand["id"],
    l.UpdateSlideElementMutation["id"],
  ]),
  M = new Set([
    l.RemoveSlideElementCommand["id"],
    l.RemoveSlideElementMutation["id"],
  ]);
let N = class extends i.Disposable {
  constructor(_0x224cee, _0x16c0b4) {
    (super(),
      (this._localeService = _0x16c0b4),
      this.disposeWithMe(
        _0x224cee.register(i.UniverInstanceType["UNIVER_SLIDE"], this),
      ));
  }
  resolve(_0x299e68) {
    let _0x1a5125 =
        _0x299e68.commandIds["has"](l.SetSlideGroupMutation["id"]) ||
        _0x299e68.commandIds["has"](l.CancelSlideGroupMutation["id"]) ||
        _0x299e68.commandIds["has"](
          l.ConvertSlideSmartArtToShapesCommand["id"],
        ),
      _0x185d9e = I(_0x299e68, l.AddSlideElementMutation["id"]),
      _0x392569 = _0x1a5125
        ? []
        : F(_0x299e68, l.AddSlideElementMutation["id"], "insert"),
      _0x41f494 =
        _0x1a5125 ||
        _0x299e68.commandIds["has"](l.UpdateSlideSmartArtCommand["id"])
          ? []
          : F(
              _0x299e68,
              l.UpdateSlideElementMutation["id"],
              "update",
              _0x185d9e,
            ),
      _0x119d35 = _0x1a5125 ? [] : P(_0x299e68),
      _0x36efa4 = [..._0x392569, ..._0x41f494, ..._0x119d35].map((_0x7794ac) =>
        this._localeService["t"](_0x7794ac),
      ),
      _0x4f474f = [..._0x299e68.commandIds].flatMap((_0x3b628d) => {
        if (
          (_0x392569.length > 0 && A.has(_0x3b628d)) ||
          (_0x41f494.length > 0 && j.has(_0x3b628d)) ||
          (_0x119d35.length > 0 && M.has(_0x3b628d))
        )
          return [];
        let _0x4ca441 = O.get(_0x3b628d);
        return _0x4ca441 ? [this._localeService["t"](_0x4ca441)] : [];
      }),
      _0x15949f = [...new Set([..._0x36efa4, ..._0x4f474f])];
    return _0x15949f.length > 0
      ? _0x15949f
      : _0x299e68.commandIds["has"](l.AddSlideElementMutation["id"])
        ? [this._localeService["t"]("slides-history-ui.action.insertObject")]
        : _0x299e68.commandIds["has"](l.RemoveSlideElementMutation["id"])
          ? [this._localeService["t"]("slides-history-ui.action.deleteObject")]
          : _0x299e68.commandIds["has"](l.UpdateSlideElementMutation["id"])
            ? [
                this._localeService["t"](
                  "slides-history-ui.action.updateObject",
                ),
              ]
            : [];
  }
};
N = E(
  [
    T(0, (0, i.Inject)(b.HistoryActionSummaryService)),
    T(1, (0, i.Inject)(i.LocaleService)),
  ],
  N,
);
function P(_0xb09444) {
  let _0x5505e2 = _0xb09444.mutations["flatMap"]((_0x2769e1) => {
    var _0x423d02;
    if (
      _0x2769e1.id !== l.RemoveSlideElementMutation["id"] ||
      !R(_0x2769e1.params)
    )
      return [];
    let _0x2eb44f = L(_0x2769e1.params["elementType"])
      ? (_0x423d02 = k.get(_0x2769e1.params["elementType"])) == null
        ? undefined
        : _0x423d02.delete
      : undefined;
    return _0x2eb44f ? [_0x2eb44f] : [];
  });
  return [...new Set(_0x5505e2)];
}
function F(_0xd15cf7, _0x7c662, _0x4287d0, _0x8293fb = new Set()) {
  let _0x7cbfe6 = _0xd15cf7.mutations["flatMap"]((_0xc62262) =>
    _0xc62262.id !== _0x7c662 ||
    !R(_0xc62262.params) ||
    !R(_0xc62262.params["element"]) ||
    (typeof _0xc62262.params["element"].id == "string" &&
      _0x8293fb.has(_0xc62262.params["element"].id))
      ? []
      : L(_0xc62262.params["element"].type)
        ? [_0xc62262.params["element"].type]
        : [],
  ).flatMap((_0x52c396) => {
    var _0x4617d5;
    let _0x38825b =
      (_0x4617d5 = k.get(_0x52c396)) == null ? undefined : _0x4617d5[_0x4287d0];
    return _0x38825b ? [_0x38825b] : [];
  });
  return [...new Set(_0x7cbfe6)];
}
function I(_0xd660c, _0xde009c) {
  let _0x2d9481 = _0xd660c.mutations["flatMap"]((_0x1f599f) =>
    _0x1f599f.id !== _0xde009c ||
    !R(_0x1f599f.params) ||
    !R(_0x1f599f.params["element"])
      ? []
      : typeof _0x1f599f.params["element"].id == "string"
        ? [_0x1f599f.params["element"].id]
        : [],
  );
  return new Set(_0x2d9481);
}
function L(_0x168b54) {
  switch (_0x168b54) {
    case l.PageElementTypeEnum["Placeholder"]:
    case l.PageElementTypeEnum["Text"]:
    case l.PageElementTypeEnum["Shape"]:
    case l.PageElementTypeEnum["Image"]:
    case l.PageElementTypeEnum["Chart"]:
    case l.PageElementTypeEnum["Table"]:
    case l.PageElementTypeEnum["Diagram"]:
    case l.PageElementTypeEnum["Media"]:
    case l.PageElementTypeEnum["Group"]:
    case l.PageElementTypeEnum["Connector"]:
      return true;
    default:
      return false;
  }
}
function R(_0x4ba19c) {
  return typeof _0x4ba19c == "object" && !!_0x4ba19c;
}
function z(_0x1a974e) {
  "@babel/helpers - typeof";
  return (
    (z =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0xada763) {
            return typeof _0xada763;
          }
        : function (_0x5ad199) {
            return _0x5ad199 &&
              typeof Symbol == "function" &&
              _0x5ad199.constructor === Symbol &&
              _0x5ad199 !== Symbol.prototype
              ? "symbol"
              : typeof _0x5ad199;
          }),
    z(_0x1a974e)
  );
}
function B(_0x471cfb, _0x4dfb09) {
  if (z(_0x471cfb) != "object" || !_0x471cfb) return _0x471cfb;
  var _0x467afe = _0x471cfb[Symbol.toPrimitive];
  if (_0x467afe !== undefined) {
    var _0x4b9e16 = _0x467afe.call(_0x471cfb, _0x4dfb09 || "default");
    if (z(_0x4b9e16) != "object") return _0x4b9e16;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x4dfb09 === "string" ? String : Number)(_0x471cfb);
}
function V(_0x5a9166) {
  var _0x42b673 = B(_0x5a9166, "string");
  return z(_0x42b673) == "symbol" ? _0x42b673 : _0x42b673 + "";
}
function H(_0x32de82, _0x4adda3, _0x33e579) {
  return (
    (_0x4adda3 = V(_0x4adda3)) in _0x32de82
      ? Object.defineProperty(_0x32de82, _0x4adda3, {
          value: _0x33e579,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x32de82[_0x4adda3] = _0x33e579),
    _0x32de82
  );
}
let U = class extends i.Disposable {
  constructor(
    _0x2de083,
    _0x5e9f5e,
    _0x50f817,
    _0x2e8c61,
    _0x3f1ce5,
    _0x2217d5,
  ) {
    (super(),
      (this._diffService = _0x2de083),
      (this._snapshotService = _0x50f817),
      (this._univerInstanceService = _0x2e8c61),
      (this._logService = _0x3f1ce5),
      (this._highlightService = _0x2217d5),
      H(this, "type", i.UniverInstanceType["UNIVER_SLIDE"]),
      H(this, "_changes", new Map()),
      H(this, "_changesGeneration", 0),
      H(this, "_loadGeneration", 0),
      H(this, "_loadQueue", Promise.resolve()),
      H(this, "_unitId", ""),
      H(this, "_activeSlideSubscription", null),
      this.disposeWithMe(_0x5e9f5e.register(this)));
  }
  loadRevision(_0x2874a6, _0x7669fa) {
    let _0x52de6f = ++this._loadGeneration,
      _0x5e9fb3 = this._loadQueue["catch"](() => undefined).then(async () => {
        if (_0x52de6f !== this._loadGeneration) return;
        (this._clearActiveSlideSubscription(),
          this._getSlide(_0x2874a6) &&
            this._univerInstanceService["disposeUnit"](_0x2874a6));
        let _0x3af14e = await this._snapshotService["loadSlide"](
          _0x2874a6,
          _0x7669fa.endRevision,
        );
        if (_0x52de6f !== this._loadGeneration) {
          this._getSlide(_0x2874a6) === _0x3af14e &&
            this._univerInstanceService["disposeUnit"](_0x2874a6);
          return;
        }
        (this._bindActiveSlide(_0x3af14e, _0x2874a6),
          this._univerInstanceService["focusUnit"](_0x2874a6));
      });
    return ((this._loadQueue = _0x5e9fb3), _0x5e9fb3);
  }
  async loadChanges(_0x10bd35, _0x101cb1) {
    this._unitId = _0x10bd35;
    let _0x35dd2b = ++this._changesGeneration,
      _0x5dd110 = await this._diffService["compare"](_0x10bd35, _0x101cb1);
    _0x35dd2b === this._changesGeneration &&
      (this._changes["clear"](),
      _0x5dd110.forEach((_0x242d56) =>
        this._changes["set"](_0x242d56.id, _0x242d56),
      ),
      await this._renderHighlights(_0x10bd35));
  }
  close() {
    (++this._changesGeneration,
      ++this._loadGeneration,
      this._clearActiveSlideSubscription(),
      this._changes["clear"](),
      (this._unitId &&= (this._highlightService["clear"](this._unitId), "")));
  }
  _getSlide(_0x498905) {
    return (
      this._univerInstanceService["getUnit"](
        _0x498905,
        i.UniverInstanceType["UNIVER_SLIDE"],
      ) ?? null
    );
  }
  _bindActiveSlide(_0x316d67, _0x4456c2) {
    this._activeSlideSubscription = _0x316d67.pageManager[
      "activeSlideId$"
    ].subscribe(() => {
      this._unitId === _0x4456c2 &&
        this._renderHighlights(_0x4456c2).catch((_0x30509a) => {
          this._logService["error"](
            "[SlidesHistoryRenderAdapterService]: Failed to render slide history highlights.",
            _0x30509a,
          );
        });
    });
  }
  _clearActiveSlideSubscription() {
    var _0x478122;
    ((_0x478122 = this._activeSlideSubscription) == null ||
      _0x478122.unsubscribe(),
      (this._activeSlideSubscription = null));
  }
  _renderHighlights(_0x2fe859) {
    var _0x4f3928;
    let _0x49a693 = this._getSlide(_0x2fe859),
      _0x1690cc =
        _0x49a693 == null ||
        (_0x4f3928 = _0x49a693.pageManager["getActiveSlide"]()) == null
          ? undefined
          : _0x4f3928.getId();
    if (!_0x1690cc) return Promise.resolve();
    let _0x46a902 = Array.from(this._changes["values"]())
      .filter((_0x14d023) => _0x14d023.slideId === _0x1690cc)
      .map((_0x1fd3ee) => ({
        id: _0x1fd3ee.id,
        kind: _0x1fd3ee.kind,
        objectKey: _0x1fd3ee.drawingId
          ? (0, r.buildDrawingOKey)(_0x2fe859, _0x1690cc, _0x1fd3ee.drawingId)
          : undefined,
        fallbackObjectKey: r.SLIDE_PAGE_RECT_KEY,
        outlineOnly: _0x1fd3ee.kind === "delete" || !_0x1fd3ee.drawingId,
      }));
    return this._highlightService["show"](_0x2fe859, _0x46a902);
  }
  dispose() {
    (this.close(), super.dispose());
  }
};
U = E(
  [
    T(0, (0, i.Inject)(n.SlidesHistoryDiffService)),
    T(1, (0, i.Inject)(b.HistoryRenderAdapterRegistryService)),
    T(2, (0, i.Inject)(s.SnapshotService)),
    T(3, i.IUniverInstanceService),
    T(4, i.ILogService),
    T(5, (0, i.Inject)(b.HistoryCanvasHighlightService)),
  ],
  U,
);
let W = class extends b.UniverEditHistoryUIPlugin {
  constructor(_0x33f1ce, _0x224551, _0x25bcf5, _0x29fbb1) {
    let { collaborationClientConfig: _0x11e094, ..._0x27f398 } = _0x33f1ce;
    (super(_0x27f398, _0x224551, _0x25bcf5, _0x29fbb1),
      (this._injector = _0x224551),
      _0x25bcf5.setConfig(e.COLLABORATION_CLIENT_PLUGIN_CONFIG_KEY, _0x11e094));
  }
  onStarting() {
    (super.onStarting(),
      (0, i.registerDependencies)(this._injector, [
        [
          s.ISnapshotServerService,
          { useClass: e.SnapshotServerOverHTTPService },
        ],
        [N],
        [U],
      ]),
      this._injector["get"](N),
      this._injector["get"](U));
  }
};
(H(W, "pluginName", "UNIVER_SLIDES_HISTORY_VIEWER_PLUGIN"),
  H(W, "packageName", C),
  H(W, "version", w),
  H(W, "type", i.UniverInstanceType["UNIVER_UNKNOWN"]),
  (W = E(
    [
      (0, i.DependentOn)(
        t.UniverLicensePlugin,
        n.UniverSlidesHistoryPlugin,
        r.UniverSlidesUIPlugin,
      ),
      T(1, (0, i.Inject)(i.Injector)),
      T(2, i.IConfigService),
      T(3, i.ILogService),
    ],
    W,
  )));
let G = class extends i.Disposable {
  constructor(
    _0x52034b,
    _0x5aeb78,
    _0x15b4d6,
    _0x393cb6,
    _0x1ae60e,
    _0x4c4987,
    _0x2f8a18,
    _0x2268ab,
  ) {
    (super(),
      (this._configService = _0x52034b),
      (this._restoreService = _0x5aeb78),
      (this._adapterRegistry = _0x15b4d6),
      (this._localeService = _0x393cb6),
      (this._themeService = _0x1ae60e),
      (this._collaborationController = _0x4c4987),
      (this._dataLoaderService = _0x2f8a18),
      (this._univerInstanceService = _0x2268ab),
      H(this, "_historyUniver", null),
      H(this, "_opening", null),
      H(this, "_openGeneration", 0),
      H(this, "_sessionDisposables", new i["DisposableCollection"]()),
      H(this, "_container", null),
      H(this, "_unitId", ""),
      H(this, "_location", undefined));
  }
  open(_0x11d66f) {
    if (this._historyUniver) return Promise.resolve();
    if (this._opening) return this._opening;
    let _0x2ccc82 = ++this._openGeneration,
      _0x4d6efd = this._open(_0x11d66f, _0x2ccc82).finally(() => {
        this._opening === _0x4d6efd && (this._opening = null);
      });
    return ((this._opening = _0x4d6efd), _0x4d6efd);
  }
  async _open(_0x179453, _0x520e93) {
    let _0x41e7b8 = this._adapterRegistry["get"](
      i.UniverInstanceType["UNIVER_SLIDE"],
    );
    if (!_0x41e7b8)
      throw Error(
        "[SlidesHistoryLoaderService]:\x20Slides\x20history\x20adapter\x20is\x20not\x20registered.",
      );
    let _0x59a747 = await Promise.all([
      _0x41e7b8.canView(_0x179453),
      _0x41e7b8.canRevert(_0x179453),
    ]).catch((_0x53c7aa) => {
      if (_0x520e93 === this._openGeneration) throw _0x53c7aa;
      return null;
    });
    if (!_0x59a747 || _0x520e93 !== this._openGeneration) return;
    let [_0x4f5ebe, _0x1db512] = _0x59a747;
    if (!_0x4f5ebe)
      throw Error(
        "[SlidesHistoryLoaderService]: The current user cannot view history for this presentation.",
      );
    ((this._unitId = _0x179453),
      (this._location = _0x41e7b8.captureLocation(_0x179453)));
    let _0x5d3a77 = this._ensureContainer();
    _0x5d3a77.style["display"] = "block";
    let _0x417674 = this._localeService["getCurrentLocale"](),
      _0x19c704 = this._localeService["getLocales"](),
      _0x4a5469 = new i["Univer"]({
        theme: this._themeService["getCurrentTheme"](),
        darkMode: this._themeService["darkMode"],
        locale: _0x417674,
        locales: _0x19c704 ? { [_0x417674]: _0x19c704 } : undefined,
        direction: this._localeService["getDirection"](),
        override: [[i.IAuthzIoService, { useClass: e.AuthzIoHttpService }]],
      });
    ((this._historyUniver = _0x4a5469),
      this._syncViewerServices(_0x4a5469, _0x5d3a77));
    try {
      (this._registerChildPlugins(_0x4a5469, _0x1db512, _0x5d3a77),
        _0x4a5469.createUnit(
          i.UniverInstanceType["UNIVER_SLIDE"],
          (0, l.getSlidesEmptySnapshot)(_0x179453),
        ));
    } catch (_0x325db5) {
      throw (
        _0x520e93 === this._openGeneration ? this.close() : _0x4a5469.dispose(),
        _0x325db5
      );
    }
  }
  close() {
    (++this._openGeneration,
      (this._opening = null),
      this._sessionDisposables["dispose"]());
    let _0x1a14d6 = this._historyUniver;
    ((this._historyUniver = null),
      _0x1a14d6 == null || _0x1a14d6.dispose(),
      (this._unitId = ""),
      (this._location = undefined),
      this._container && (this._container["style"].display = "none"));
  }
  _syncViewerServices(_0x3cfd74, _0x329ab3) {
    let _0x36258c = _0x3cfd74.__getInjector(),
      _0x225f90 = _0x36258c.get(i.LocaleService),
      _0x51d4a8 = _0x36258c.get(i.ThemeService);
    (this._sessionDisposables["add"](
      this._themeService["darkMode$"].subscribe((_0x1ad587) => {
        _0x51d4a8.setDarkMode(_0x1ad587);
      }),
    ),
      this._sessionDisposables["add"](
        this._themeService["currentTheme$"].subscribe((_0x44bf8) => {
          _0x51d4a8.setTheme(_0x44bf8);
        }),
      ),
      this._sessionDisposables["add"](
        this._localeService["currentLocale$"].subscribe((_0x9f04a7) => {
          let _0x972f4b = this._localeService["getLocales"]();
          (_0x972f4b && _0x225f90.load({ [_0x9f04a7]: _0x972f4b }),
            _0x225f90.setLocale(_0x9f04a7));
        }),
      ),
      this._sessionDisposables["add"](
        this._localeService["direction$"].subscribe((_0x5602e1) => {
          (_0x225f90.setDirection(_0x5602e1),
            (_0x329ab3.dir = _0x5602e1),
            (_0x329ab3.style["direction"] = _0x5602e1));
        }),
      ));
  }
  async restore(_0x5763f1) {
    var _0x1980c5;
    let _0x50e66a = this._unitId,
      _0x29bde8 = this._location,
      _0x859e8f = this._collaborationController["getCollabEntity"](_0x50e66a);
    if (!_0x859e8f)
      throw Error(
        "[SlidesHistoryLoaderService]: Collaboration is not ready for this presentation.",
      );
    let _0x2538a5 = new y["Subject"](),
      _0x264e90 = (0, y.firstValueFrom)(
        _0x859e8f.session["event$"].pipe(
          (0, y.filter)(
            (_0x2d70f6) =>
              _0x2d70f6.eventID === s.CollaborationEvent["CHANGESET_ACK"],
          ),
          (0, y.filter)((_0x2c4a89) =>
            (0, c.isHistoryRestoreAcknowledgement)(_0x2c4a89, _0x5763f1),
          ),
          (0, y.takeUntil)(_0x2538a5),
          (0, y.timeout)(10000),
        ),
      );
    try {
      if (
        !(await this._restoreService["restore"](
          _0x50e66a,
          i.UniverInstanceType["UNIVER_SLIDE"],
          _0x5763f1,
        ))
      )
        throw Error(
          "[SlidesHistoryLoaderService]:\x20The\x20restore\x20command\x20was\x20not\x20accepted.",
        );
      await _0x264e90;
    } catch (_0x38db21) {
      throw (
        _0x2538a5.next(),
        await _0x264e90.catch(() => undefined),
        _0x38db21
      );
    } finally {
      _0x2538a5.complete();
    }
    (this.close(),
      this._univerInstanceService["disposeUnit"](_0x50e66a),
      await this._dataLoaderService["loadUnit"](
        _0x50e66a,
        i.UniverInstanceType["UNIVER_SLIDE"],
      ),
      await ((_0x1980c5 = this._adapterRegistry["get"](
        i.UniverInstanceType["UNIVER_SLIDE"],
      )) == null
        ? undefined
        : _0x1980c5.restoreLocation(_0x50e66a, _0x29bde8)));
  }
  _ensureContainer() {
    var _0x3c8dbd;
    if (this._container) return this._container;
    let _0x357f81 = this._configService["getConfig"](x),
      _0x28a1b6 =
        (_0x357f81 == null ? undefined : _0x357f81.univerContainerId) ??
        ((_0x3c8dbd = this._configService["getConfig"](
          o.UI_PLUGIN_CONFIG_KEY,
        )) == null
          ? undefined
          : _0x3c8dbd.container),
      _0x3e6e53 =
        typeof _0x28a1b6 == "string"
          ? document.getElementById(_0x28a1b6)
          : _0x28a1b6;
    if (!_0x3e6e53)
      throw Error(
        "[SlidesHistoryLoaderService]:\x20Configure\x20a\x20valid\x20Univer\x20container\x20before\x20opening\x20history.",
      );
    let _0x18977a = document.createElement("div");
    return (
      Object.assign(_0x18977a.style, {
        position: "absolute",
        inset: "0",
        zIndex: "49",
        display: "none",
      }),
      _0x3e6e53.appendChild(_0x18977a),
      (this._container = _0x18977a),
      _0x18977a
    );
  }
  _registerChildPlugins(_0x29504a, _0x4c53bc, _0x47e966) {
    let _0xb85ba0 = this._configService["getConfig"](t.LS_CONFIG_KEY),
      _0x444cae = this._configService["getConfig"](x),
      _0x22e8e8 = [
        [
          t.UniverLicensePlugin,
          { license: _0xb85ba0 == null ? undefined : _0xb85ba0.ls },
        ],
        [_.UniverRenderEnginePlugin],
        [
          o.UniverUIPlugin,
          {
            container: _0x47e966,
            header: true,
            toolbar: false,
            footer: true,
            contextMenu: false,
          },
        ],
        [v.UniverNetworkPlugin],
        [m.UniverDocsPlugin],
        [h.UniverDocsUIPlugin],
        [
          g.UniverDrawingPlugin,
          {
            override: [
              [i.IImageIoService, { useClass: e.CollaborationImageIoService }],
            ],
          },
        ],
        [l.UniverSlidesPlugin],
        [r.UniverSlidesUIPlugin],
        [u.UniverSlidesChartPlugin],
        [d.UniverSlidesChartUIPlugin],
        [f.UniverSlidesTablePlugin],
        [p.UniverSlidesTableUIPlugin],
        [s.UniverCollaborationPlugin],
        [
          c.UniverEditHistoryPlugin,
          {
            historyServerUrl:
              _0x444cae == null ? undefined : _0x444cae.historyServerUrl,
          },
        ],
        [n.UniverSlidesHistoryPlugin],
      ],
      _0x27f3f3 = new Set();
    ([
      ..._0x22e8e8,
      ...((_0x444cae == null ? undefined : _0x444cae.viewerPlugins) ?? []),
    ].forEach(([_0x59ab32, _0x3d8c48]) => {
      if (_0x27f3f3.has(_0x59ab32.pluginName))
        throw Error(
          "[SlidesHistoryLoaderService]: Plugin " +
            _0x59ab32.pluginName +
            " has already been registered.",
        );
      (_0x27f3f3.add(_0x59ab32.pluginName),
        _0x29504a.registerPlugin(_0x59ab32, _0x3d8c48));
    }),
      _0x29504a.registerPlugin(W, {
        viewerMode: true,
        descriptor: {
          unitId: this._unitId,
          type: i.UniverInstanceType["UNIVER_SLIDE"],
        },
        canRestore: _0x4c53bc,
        onClose: () => this.close(),
        onRestore: (_0x5f4917) => this.restore(_0x5f4917),
        collaborationClientConfig: this._configService["getConfig"](
          e.COLLABORATION_CLIENT_PLUGIN_CONFIG_KEY,
        ),
      }));
  }
  dispose() {
    var _0x2c4801;
    (this.close(),
      (_0x2c4801 = this._container) == null || _0x2c4801.remove(),
      (this._container = null),
      super.dispose());
  }
};
G = E(
  [
    T(0, i.IConfigService),
    T(1, (0, i.Inject)(c.HistoryRestoreService)),
    T(2, (0, i.Inject)(c.HistoryUnitAdapterRegistryService)),
    T(3, (0, i.Inject)(i.LocaleService)),
    T(4, (0, i.Inject)(i.ThemeService)),
    T(5, (0, i.Inject)(e.CollaborationController)),
    T(6, (0, i.Inject)(e.DataLoaderService)),
    T(7, i.IUniverInstanceService),
  ],
  G,
);
const K = {
    id: "slides-history-ui.operation.open",
    type: i.CommandType["OPERATION"],
    handler: (_0x4dcc22) => {
      let _0x14a885 = _0x4dcc22
        .get(i.IUniverInstanceService)
        .getCurrentUnitOfType(i.UniverInstanceType["UNIVER_SLIDE"]);
      return _0x14a885
        ? (_0x4dcc22
            .get(G)
            .open(_0x14a885.getUnitId())
            .catch((_0x5515c5) => {
              _0x4dcc22
                .get(i.ILogService)
                .error(
                  "[OpenSlidesHistoryOperation]:\x20Failed\x20to\x20open\x20Slides\x20history.",
                  _0x5515c5,
                );
            }),
          true)
        : false;
    },
  },
  q = {
    [o.RibbonStartGroup["OTHERS"]]: {
      [K.id]: {
        order: 100,
        gridLayout: {
          row: 1,
          column: 3,
          rowSpan: 2,
          columnSpan: 2,
          showLabel: true,
        },
        menuItemFactory: J,
      },
    },
  };
function J(_0x35acbf) {
  return {
    id: K.id,
    type: o.MenuItemType["BUTTON"],
    icon: "SlidesHistoryIcon",
    title: "slides-history-ui.menu.history",
    tooltip: "slides-history-ui.menu.history",
    hidden$: (0, o.getMenuHiddenObservable)(
      _0x35acbf,
      i.UniverInstanceType["UNIVER_SLIDE"],
    ),
  };
}
let Y = class extends i.Disposable {
  constructor(_0x5dc405, _0x481899) {
    (super(),
      this.disposeWithMe(_0x5dc405.registerCommand(K)),
      _0x481899.mergeMenu(q));
  }
};
Y = E([T(0, i.ICommandService), T(1, o.IMenuManagerService)], Y);
let X = class extends i.Plugin {
  constructor(_0x1710f7 = S, _0x2d6a9b, _0x488acf) {
    (super(),
      (this._config = _0x1710f7),
      (this._injector = _0x2d6a9b),
      (this._configService = _0x488acf));
    let { ..._0x10fae7 } = (0, i.merge)({}, S, this._config);
    this._configService["setConfig"](x, _0x10fae7);
  }
  onStarting() {
    ((0, i.registerDependencies)(this._injector, [[D], [G], [Y]]),
      this._injector["get"](D),
      this._injector["get"](Y));
  }
};
(H(X, "pluginName", "UNIVER_SLIDES_HISTORY_UI_PLUGIN"),
  H(X, "packageName", C),
  H(X, "version", w),
  H(X, "type", i.UniverInstanceType["UNIVER_SLIDE"]),
  (X = E(
    [
      (0, i.DependentOn)(
        t.UniverLicensePlugin,
        e.UniverCollaborationClientPlugin,
        n.UniverSlidesHistoryPlugin,
        r.UniverSlidesUIPlugin,
      ),
      T(1, (0, i.Inject)(i.Injector)),
      T(2, i.IConfigService),
    ],
    X,
  )),
  (exports.SLIDES_HISTORY_UI_PLUGIN_CONFIG_KEY = x),
  Object.defineProperty(exports, "UniverSlidesHistoryUIPlugin", {
    enumerable: true,
    get: function () {
      return X;
    },
  }));
