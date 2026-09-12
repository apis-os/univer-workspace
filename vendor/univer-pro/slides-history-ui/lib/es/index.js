import {
  AuthzIoHttpService as _0x589046,
  COLLABORATION_CLIENT_PLUGIN_CONFIG_KEY as _0x70ed04,
  CollaborationController as _0x2ba875,
  CollaborationImageIoService as _0x5bc08d,
  DataLoaderService as _0x351847,
  SnapshotServerOverHTTPService as _0x4f8f9f,
  UniverCollaborationClientPlugin as _0x37228f,
} from "@univerjs-pro/collaboration-client";
import {
  LS_CONFIG_KEY as _0x17e1d1,
  UniverLicensePlugin as _0x4b5ffb,
} from "@univerjs-pro/license";
import {
  SlidesHistoryDiffService as _0x5997ae,
  UniverSlidesHistoryPlugin as _0x33d22f,
} from "@univerjs-pro/slides-history";
import {
  SLIDE_PAGE_RECT_KEY as _0x1e2ae1,
  UniverSlidesUIPlugin as _0x5758db,
  buildDrawingOKey as _0x30d661,
} from "@univerjs-pro/slides-ui";
import {
  CommandType as _0x18e354,
  DependentOn as _0x8feae9,
  Disposable as _0xf7b0ef,
  DisposableCollection as _0xcfa65e,
  IAuthzIoService as _0x1d499f,
  ICommandService as _0xbf3ecd,
  IConfigService as _0x2ad4a8,
  IImageIoService as _0x1ee303,
  ILogService as _0x54e8e1,
  IUniverInstanceService as _0x25a388,
  Inject as _0x383662,
  Injector as _0x3c69bb,
  LocaleService as _0x969bf6,
  Plugin as _0x1aa4d0,
  ThemeService as _0x3348f7,
  Univer as _0xfe3d6b,
  UniverInstanceType as _0x120df4,
  merge as _0x399de1,
  registerDependencies as _0xf6255f,
} from "@univerjs/core";
import { HistoryIcon as _0x1f57e8 } from "@univerjs/icons";
import {
  IMenuManagerService as _0x54a3de,
  IconManager as _0xc89dec,
  MenuItemType as _0x157ddf,
  RibbonStartGroup as _0x375fb6,
  UI_PLUGIN_CONFIG_KEY as _0x2b52d1,
  UniverUIPlugin as _0x2c2b18,
  getMenuHiddenObservable as _0x2b639a,
} from "@univerjs/ui";
import {
  CollaborationEvent as _0x493c83,
  ISnapshotServerService as _0x2b9406,
  SnapshotService as _0x22375b,
  UniverCollaborationPlugin as _0x23b63b,
} from "@univerjs-pro/collaboration";
import {
  HistoryRestoreService as _0x1a673f,
  HistoryUnitAdapterRegistryService as _0x551339,
  UniverEditHistoryPlugin as _0x153f3f,
  isHistoryRestoreAcknowledgement as _0x3c45a4,
} from "@univerjs-pro/edit-history";
import {
  AddSlideElementCommand as _0x3ebcaf,
  AddSlideElementMutation as _0x485d6e,
  AddSlidePageCommand as _0x1bae98,
  CancelSlideGroupMutation as _0x42d8f7,
  ConvertSlideSmartArtToShapesCommand as _0x4a1846,
  CreateSlideByLayoutCommand as _0x579398,
  MoveSlidePageCommand as _0x545c64,
  PageElementTypeEnum as _0x5a96d9,
  RemoveSlideElementCommand as _0x131563,
  RemoveSlideElementMutation as _0xad96f8,
  RemoveSlidePageCommand as _0x58a00c,
  ReorderSlideElementsCommand as _0x545c2d,
  SetPresentationBackgroundGraphicsCommand as _0x1b346f,
  SetSlideGroupMutation as _0x140047,
  SetSlideNameCommand as _0x296d16,
  SetSlidePageSizeCommand as _0x18cf73,
  SetSlideSpeakerNotesCommand as _0x4a40a3,
  SetSlideTransitionCommand as _0x817fc1,
  UniverSlidesPlugin as _0x77c0a0,
  UpdateSlideDrawingCommand as _0xad2851,
  UpdateSlideElementMutation as _0x2071f0,
  UpdateSlidePageBackgroundCommand as _0x584bca,
  UpdateSlideSmartArtCommand as _0x41b30f,
  getSlidesEmptySnapshot as _0x2fb0cf,
} from "@univerjs-pro/slides";
import {
  ChangeSlideChartDataSourceCommand as _0x443754,
  DuplicateSlideChartDataSourceCommand as _0xaedd86,
  InsertSlideChartCommand as _0x44a100,
  RemoveSlideChartCommand as _0x40b2bd,
  UniverSlidesChartPlugin as _0x5f4324,
  UpdateSlideChartConfigCommand as _0x23ee27,
  UpdateSlideChartDataSourceCommand as _0x2dc622,
  UpdateSlideChartSnapshotCommand as _0xcdd05e,
} from "@univerjs-pro/slides-chart";
import { UniverSlidesChartUIPlugin as _0x5a970f } from "@univerjs-pro/slides-chart-ui";
import {
  DeleteSlideTableColumnsCommand as _0x1540a1,
  DeleteSlideTableRowsCommand as _0x342a52,
  InsertSlideTableColumnsCommand as _0x4ec1f7,
  InsertSlideTableCommand as _0x53c4f6,
  InsertSlideTableRowsCommand as _0x21f852,
  MergeSlideTableCellsCommand as _0xda7760,
  MoveSlideTableColumnsCommand as _0x2b74c1,
  MoveSlideTableRowsCommand as _0x459518,
  RemoveSlideTableCommand as _0x4366d4,
  UniverSlidesTablePlugin as _0x22bd70,
  UnmergeSlideTableCellsCommand as _0x46409f,
  UpdateSlideTableCommand as _0x30d8f2,
} from "@univerjs-pro/slides-table";
import { UniverSlidesTableUIPlugin as _0x3585c5 } from "@univerjs-pro/slides-table-ui";
import { UniverDocsPlugin as _0x52f81b } from "@univerjs/docs";
import { UniverDocsUIPlugin as _0x48bee6 } from "@univerjs/docs-ui";
import { UniverDrawingPlugin as _0x4ad3ab } from "@univerjs/drawing";
import { UniverRenderEnginePlugin as _0x220ec3 } from "@univerjs/engine-render";
import { UniverNetworkPlugin as _0x3e2240 } from "@univerjs/network";
import {
  Subject as _0x5b1a9a,
  filter as _0xf2d05d,
  firstValueFrom as _0x119a37,
  takeUntil as _0x2a7e75,
  timeout as _0x42402c,
} from "rxjs";
import {
  HistoryActionSummaryService as _0x22e10e,
  HistoryCanvasHighlightService as _0x11c4c4,
  HistoryRenderAdapterRegistryService as _0x4d317f,
  UniverEditHistoryUIPlugin as _0x2a0c65,
} from "@univerjs-pro/edit-history-ui";
const P = "slides-history-ui.config",
  F = { historyServerUrl: "/universer-api/history" };
var I = "@univerjs-pro/slides-history-ui",
  L = "1.0.0-insiders.20260907-70fc579";
function R(_0x2825a1, _0x239ea7) {
  return function (_0xfa9996, _0x4d8afa) {
    _0x239ea7(_0xfa9996, _0x4d8afa, _0x2825a1);
  };
}
function z(_0x396130, _0xc495a2, _0x4ddb22, _0x15a1ff) {
  var _0x3dc1f1 = arguments.length,
    _0x34950c =
      _0x3dc1f1 < 3
        ? _0xc495a2
        : _0x15a1ff === null
          ? (_0x15a1ff = Object.getOwnPropertyDescriptor(_0xc495a2, _0x4ddb22))
          : _0x15a1ff,
    _0x117383;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x34950c = Reflect.decorate(_0x396130, _0xc495a2, _0x4ddb22, _0x15a1ff);
  else {
    for (var _0x2f1a76 = _0x396130.length - 1; _0x2f1a76 >= 0; _0x2f1a76--)
      (_0x117383 = _0x396130[_0x2f1a76]) &&
        (_0x34950c =
          (_0x3dc1f1 < 3
            ? _0x117383(_0x34950c)
            : _0x3dc1f1 > 3
              ? _0x117383(_0xc495a2, _0x4ddb22, _0x34950c)
              : _0x117383(_0xc495a2, _0x4ddb22)) || _0x34950c);
  }
  return (
    _0x3dc1f1 > 3 &&
      _0x34950c &&
      Object.defineProperty(_0xc495a2, _0x4ddb22, _0x34950c),
    _0x34950c
  );
}
let B = class extends _0xf7b0ef {
  constructor(_0x36fb9f) {
    (super(),
      this.disposeWithMe(_0x36fb9f.register("SlidesHistoryIcon", _0x1f57e8)));
  }
};
B = z([R(0, _0x383662(_0xc89dec))], B);
const xt = new Map([
    [_0x296d16.id, "slides-history-ui.action.renameSlide"],
    [_0x1bae98.id, "slides-history-ui.action.insertSlide"],
    [_0x579398.id, "slides-history-ui.action.insertSlide"],
    [_0x58a00c.id, "slides-history-ui.action.deleteSlide"],
    [_0x545c64.id, "slides-history-ui.action.moveSlide"],
    [_0x18cf73.id, "slides-history-ui.action.updatePageSize"],
    [_0x584bca.id, "slides-history-ui.action.updateBackground"],
    [_0x1b346f.id, "slides-history-ui.action.updateBackgroundGraphics"],
    [_0x817fc1.id, "slides-history-ui.action.updateTransition"],
    [_0x4a40a3.id, "slides-history-ui.action.updateSpeakerNotes"],
    [_0x3ebcaf.id, "slides-history-ui.action.insertObject"],
    [_0x131563.id, "slides-history-ui.action.deleteObject"],
    [_0xad2851.id, "slides-history-ui.action.updateObject"],
    [_0x545c2d.id, "slides-history-ui.action.reorderObject"],
    [_0x140047.id, "slides-history-ui.action.groupObjects"],
    [_0x42d8f7.id, "slides-history-ui.action.ungroupObjects"],
    [_0x41b30f.id, "slides-history-ui.action.updateSmartArt"],
    [_0x4a1846.id, "slides-history-ui.action.convertSmartArt"],
    [_0x53c4f6.id, "slides-history-ui.action.insertTable"],
    [_0x4366d4.id, "slides-history-ui.action.deleteTable"],
    [_0x21f852.id, "slides-history-ui.action.insertTableRows"],
    [_0x342a52.id, "slides-history-ui.action.deleteTableRows"],
    [_0x459518.id, "slides-history-ui.action.moveTableRows"],
    [_0x4ec1f7.id, "slides-history-ui.action.insertTableColumns"],
    [_0x1540a1.id, "slides-history-ui.action.deleteTableColumns"],
    [_0x2b74c1.id, "slides-history-ui.action.moveTableColumns"],
    [_0xda7760.id, "slides-history-ui.action.mergeTableCells"],
    [_0x46409f.id, "slides-history-ui.action.unmergeTableCells"],
    [_0x30d8f2.id, "slides-history-ui.action.updateTable"],
    [_0x44a100.id, "slides-history-ui.action.insertChart"],
    [_0x40b2bd.id, "slides-history-ui.action.deleteChart"],
    [_0x443754.id, "slides-history-ui.action.updateChart"],
    [_0xaedd86.id, "slides-history-ui.action.updateChart"],
    [_0x2dc622.id, "slides-history-ui.action.updateChart"],
    [_0x23ee27.id, "slides-history-ui.action.updateChart"],
    [_0xcdd05e.id, "slides-history-ui.action.updateChart"],
  ]),
  V = new Map([
    [
      _0x5a96d9.Text,
      {
        insert: "slides-history-ui.action.insertTextBox",
        update: "slides-history-ui.action.updateTextBox",
        delete: "slides-history-ui.action.deleteTextBox",
      },
    ],
    [
      _0x5a96d9.Shape,
      {
        insert: "slides-history-ui.action.insertShape",
        update: "slides-history-ui.action.updateShape",
        delete: "slides-history-ui.action.deleteShape",
      },
    ],
    [
      _0x5a96d9.Image,
      {
        insert: "slides-history-ui.action.insertImage",
        update: "slides-history-ui.action.updateImage",
        delete: "slides-history-ui.action.deleteImage",
      },
    ],
    [
      _0x5a96d9.Diagram,
      {
        insert: "slides-history-ui.action.insertDiagram",
        update: "slides-history-ui.action.updateDiagram",
        delete: "slides-history-ui.action.deleteDiagram",
      },
    ],
    [
      _0x5a96d9.Media,
      {
        insert: "slides-history-ui.action.insertMedia",
        update: "slides-history-ui.action.updateMedia",
        delete: "slides-history-ui.action.deleteMedia",
      },
    ],
    [
      _0x5a96d9.Group,
      {
        insert: "slides-history-ui.action.insertGroup",
        update: "slides-history-ui.action.updateGroup",
        delete: "slides-history-ui.action.deleteGroup",
      },
    ],
    [
      _0x5a96d9.Connector,
      {
        insert: "slides-history-ui.action.insertConnector",
        update: "slides-history-ui.action.updateConnector",
        delete: "slides-history-ui.action.deleteConnector",
      },
    ],
    [
      _0x5a96d9.Table,
      {
        insert: "slides-history-ui.action.insertTable",
        update: "slides-history-ui.action.updateTable",
        delete: "slides-history-ui.action.deleteTable",
      },
    ],
    [
      _0x5a96d9.Chart,
      {
        insert: "slides-history-ui.action.insertChart",
        update: "slides-history-ui.action.updateChart",
        delete: "slides-history-ui.action.deleteChart",
      },
    ],
  ]),
  St = new Set([_0x3ebcaf.id, _0x485d6e.id]),
  Ct = new Set([_0xad2851.id, _0x2071f0.id]),
  wt = new Set([_0x131563.id, _0xad96f8.id]);
let H = class extends _0xf7b0ef {
  constructor(_0x22e106, _0x16617a) {
    (super(),
      (this._localeService = _0x16617a),
      this.disposeWithMe(_0x22e106.register(_0x120df4.UNIVER_SLIDE, this)));
  }
  resolve(_0x248c7f) {
    let _0x2b6b72 =
        _0x248c7f.commandIds["has"](_0x140047.id) ||
        _0x248c7f.commandIds["has"](_0x42d8f7.id) ||
        _0x248c7f.commandIds["has"](_0x4a1846.id),
      _0xffe4a5 = Et(_0x248c7f, _0x485d6e.id),
      _0x53b521 = _0x2b6b72 ? [] : U(_0x248c7f, _0x485d6e.id, "insert"),
      _0x3784e9 =
        _0x2b6b72 || _0x248c7f.commandIds["has"](_0x41b30f.id)
          ? []
          : U(_0x248c7f, _0x2071f0.id, "update", _0xffe4a5),
      _0x26b32a = _0x2b6b72 ? [] : Tt(_0x248c7f),
      _0x1aac52 = [..._0x53b521, ..._0x3784e9, ..._0x26b32a].map((_0x441b6e) =>
        this._localeService["t"](_0x441b6e),
      ),
      _0x54e3a8 = [..._0x248c7f.commandIds].flatMap((_0x2868bd) => {
        if (
          (_0x53b521.length > 0 && St.has(_0x2868bd)) ||
          (_0x3784e9.length > 0 && Ct.has(_0x2868bd)) ||
          (_0x26b32a.length > 0 && wt.has(_0x2868bd))
        )
          return [];
        let _0x25089b = xt.get(_0x2868bd);
        return _0x25089b ? [this._localeService["t"](_0x25089b)] : [];
      }),
      _0x4c8523 = [...new Set([..._0x1aac52, ..._0x54e3a8])];
    return _0x4c8523.length > 0
      ? _0x4c8523
      : _0x248c7f.commandIds["has"](_0x485d6e.id)
        ? [this._localeService["t"]("slides-history-ui.action.insertObject")]
        : _0x248c7f.commandIds["has"](_0xad96f8.id)
          ? [this._localeService["t"]("slides-history-ui.action.deleteObject")]
          : _0x248c7f.commandIds["has"](_0x2071f0.id)
            ? [
                this._localeService["t"](
                  "slides-history-ui.action.updateObject",
                ),
              ]
            : [];
  }
};
H = z([R(0, _0x383662(_0x22e10e)), R(1, _0x383662(_0x969bf6))], H);
function Tt(_0x3d7e1d) {
  let _0x18c5dc = _0x3d7e1d.mutations["flatMap"]((_0x28f2b9) => {
    var _0x30caf6;
    if (_0x28f2b9.id !== _0xad96f8.id || !G(_0x28f2b9.params)) return [];
    let _0x312144 = W(_0x28f2b9.params["elementType"])
      ? (_0x30caf6 = V.get(_0x28f2b9.params["elementType"])) == null
        ? undefined
        : _0x30caf6.delete
      : undefined;
    return _0x312144 ? [_0x312144] : [];
  });
  return [...new Set(_0x18c5dc)];
}
function U(_0x33107d, _0x5a64f3, _0x5407b6, _0x1a45b0 = new Set()) {
  let _0x468133 = _0x33107d.mutations["flatMap"]((_0x39d970) =>
    _0x39d970.id !== _0x5a64f3 ||
    !G(_0x39d970.params) ||
    !G(_0x39d970.params["element"]) ||
    (typeof _0x39d970.params["element"].id == "string" &&
      _0x1a45b0.has(_0x39d970.params["element"].id))
      ? []
      : W(_0x39d970.params["element"].type)
        ? [_0x39d970.params["element"].type]
        : [],
  ).flatMap((_0x133b01) => {
    var _0x12acdb;
    let _0x5b025e =
      (_0x12acdb = V.get(_0x133b01)) == null ? undefined : _0x12acdb[_0x5407b6];
    return _0x5b025e ? [_0x5b025e] : [];
  });
  return [...new Set(_0x468133)];
}
function Et(_0x350295, _0x4d0b10) {
  let _0x5b8b53 = _0x350295.mutations["flatMap"]((_0x294b0f) =>
    _0x294b0f.id !== _0x4d0b10 ||
    !G(_0x294b0f.params) ||
    !G(_0x294b0f.params["element"])
      ? []
      : typeof _0x294b0f.params["element"].id == "string"
        ? [_0x294b0f.params["element"].id]
        : [],
  );
  return new Set(_0x5b8b53);
}
function W(_0x23fc56) {
  switch (_0x23fc56) {
    case _0x5a96d9.Placeholder:
    case _0x5a96d9.Text:
    case _0x5a96d9.Shape:
    case _0x5a96d9.Image:
    case _0x5a96d9.Chart:
    case _0x5a96d9.Table:
    case _0x5a96d9.Diagram:
    case _0x5a96d9.Media:
    case _0x5a96d9.Group:
    case _0x5a96d9.Connector:
      return true;
    default:
      return false;
  }
}
function G(_0x3aafab) {
  return typeof _0x3aafab == "object" && !!_0x3aafab;
}
function K(_0x41e71f) {
  "@babel/helpers - typeof";
  return (
    (K =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x39450e) {
            return typeof _0x39450e;
          }
        : function (_0x19c3e0) {
            return _0x19c3e0 &&
              typeof Symbol == "function" &&
              _0x19c3e0.constructor === Symbol &&
              _0x19c3e0 !== Symbol.prototype
              ? "symbol"
              : typeof _0x19c3e0;
          }),
    K(_0x41e71f)
  );
}
function Dt(_0x3c2dd4, _0x47ab12) {
  if (K(_0x3c2dd4) != "object" || !_0x3c2dd4) return _0x3c2dd4;
  var _0x86d695 = _0x3c2dd4[Symbol.toPrimitive];
  if (_0x86d695 !== undefined) {
    var _0x1fdd8b = _0x86d695.call(_0x3c2dd4, _0x47ab12 || "default");
    if (K(_0x1fdd8b) != "object") return _0x1fdd8b;
    throw TypeError(
      "@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.",
    );
  }
  return (_0x47ab12 === "string" ? String : Number)(_0x3c2dd4);
}
function Ot(_0x509722) {
  var _0x4ab394 = Dt(_0x509722, "string");
  return K(_0x4ab394) == "symbol" ? _0x4ab394 : _0x4ab394 + "";
}
function q(_0x5712f7, _0x2d1173, _0x244b26) {
  return (
    (_0x2d1173 = Ot(_0x2d1173)) in _0x5712f7
      ? Object.defineProperty(_0x5712f7, _0x2d1173, {
          value: _0x244b26,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x5712f7[_0x2d1173] = _0x244b26),
    _0x5712f7
  );
}
let J = class extends _0xf7b0ef {
  constructor(
    _0x1e1176,
    _0x3e2dd4,
    _0x4a9fe0,
    _0x43b63b,
    _0x42d9d4,
    _0x514823,
  ) {
    (super(),
      (this._diffService = _0x1e1176),
      (this._snapshotService = _0x4a9fe0),
      (this._univerInstanceService = _0x43b63b),
      (this._logService = _0x42d9d4),
      (this._highlightService = _0x514823),
      q(this, "type", _0x120df4.UNIVER_SLIDE),
      q(this, "_changes", new Map()),
      q(this, "_changesGeneration", 0),
      q(this, "_loadGeneration", 0),
      q(this, "_loadQueue", Promise.resolve()),
      q(this, "_unitId", ""),
      q(this, "_activeSlideSubscription", null),
      this.disposeWithMe(_0x3e2dd4.register(this)));
  }
  loadRevision(_0x472d48, _0x102d94) {
    let _0x14eb2a = ++this._loadGeneration,
      _0x1d195a = this._loadQueue["catch"](() => undefined).then(async () => {
        if (_0x14eb2a !== this._loadGeneration) return;
        (this._clearActiveSlideSubscription(),
          this._getSlide(_0x472d48) &&
            this._univerInstanceService["disposeUnit"](_0x472d48));
        let _0x1ca4ec = await this._snapshotService["loadSlide"](
          _0x472d48,
          _0x102d94.endRevision,
        );
        if (_0x14eb2a !== this._loadGeneration) {
          this._getSlide(_0x472d48) === _0x1ca4ec &&
            this._univerInstanceService["disposeUnit"](_0x472d48);
          return;
        }
        (this._bindActiveSlide(_0x1ca4ec, _0x472d48),
          this._univerInstanceService["focusUnit"](_0x472d48));
      });
    return ((this._loadQueue = _0x1d195a), _0x1d195a);
  }
  async loadChanges(_0x124b68, _0x6daba5) {
    this._unitId = _0x124b68;
    let _0x2f24ae = ++this._changesGeneration,
      _0x5ca01c = await this._diffService["compare"](_0x124b68, _0x6daba5);
    _0x2f24ae === this._changesGeneration &&
      (this._changes["clear"](),
      _0x5ca01c.forEach((_0x27cf1e) =>
        this._changes["set"](_0x27cf1e.id, _0x27cf1e),
      ),
      await this._renderHighlights(_0x124b68));
  }
  close() {
    (++this._changesGeneration,
      ++this._loadGeneration,
      this._clearActiveSlideSubscription(),
      this._changes["clear"](),
      (this._unitId &&= (this._highlightService["clear"](this._unitId), "")));
  }
  _getSlide(_0xae6780) {
    return (
      this._univerInstanceService["getUnit"](
        _0xae6780,
        _0x120df4.UNIVER_SLIDE,
      ) ?? null
    );
  }
  _bindActiveSlide(_0x192ae3, _0x5d8108) {
    this._activeSlideSubscription = _0x192ae3.pageManager[
      "activeSlideId$"
    ].subscribe(() => {
      this._unitId === _0x5d8108 &&
        this._renderHighlights(_0x5d8108).catch((_0x376749) => {
          this._logService["error"](
            "[SlidesHistoryRenderAdapterService]: Failed to render slide history highlights.",
            _0x376749,
          );
        });
    });
  }
  _clearActiveSlideSubscription() {
    var _0x97628b;
    ((_0x97628b = this._activeSlideSubscription) == null ||
      _0x97628b.unsubscribe(),
      (this._activeSlideSubscription = null));
  }
  _renderHighlights(_0x26757b) {
    var _0x4ffc28;
    let _0x3ab747 = this._getSlide(_0x26757b),
      _0x308264 =
        _0x3ab747 == null ||
        (_0x4ffc28 = _0x3ab747.pageManager["getActiveSlide"]()) == null
          ? undefined
          : _0x4ffc28.getId();
    if (!_0x308264) return Promise.resolve();
    let _0x1c8e9e = Array.from(this._changes["values"]())
      .filter((_0x14699d) => _0x14699d.slideId === _0x308264)
      .map((_0x3ff76c) => ({
        id: _0x3ff76c.id,
        kind: _0x3ff76c.kind,
        objectKey: _0x3ff76c.drawingId
          ? _0x30d661(_0x26757b, _0x308264, _0x3ff76c.drawingId)
          : undefined,
        fallbackObjectKey: _0x1e2ae1,
        outlineOnly: _0x3ff76c.kind === "delete" || !_0x3ff76c.drawingId,
      }));
    return this._highlightService["show"](_0x26757b, _0x1c8e9e);
  }
  dispose() {
    (this.close(), super.dispose());
  }
};
J = z(
  [
    R(0, _0x383662(_0x5997ae)),
    R(1, _0x383662(_0x4d317f)),
    R(2, _0x383662(_0x22375b)),
    R(3, _0x25a388),
    R(4, _0x54e8e1),
    R(5, _0x383662(_0x11c4c4)),
  ],
  J,
);
let Y = class extends _0x2a0c65 {
  constructor(_0x44f39f, _0xf2bfec, _0x157139, _0x2e77c9) {
    let { collaborationClientConfig: _0x559f73, ..._0x2c2c64 } = _0x44f39f;
    (super(_0x2c2c64, _0xf2bfec, _0x157139, _0x2e77c9),
      (this._injector = _0xf2bfec),
      _0x157139.setConfig(_0x70ed04, _0x559f73));
  }
  onStarting() {
    (super.onStarting(),
      _0xf6255f(this._injector, [
        [_0x2b9406, { useClass: _0x4f8f9f }],
        [H],
        [J],
      ]),
      this._injector["get"](H),
      this._injector["get"](J));
  }
};
(q(Y, "pluginName", "UNIVER_SLIDES_HISTORY_VIEWER_PLUGIN"),
  q(Y, "packageName", I),
  q(Y, "version", L),
  q(Y, "type", _0x120df4.UNIVER_UNKNOWN),
  (Y = z(
    [
      _0x8feae9(_0x4b5ffb, _0x33d22f, _0x5758db),
      R(1, _0x383662(_0x3c69bb)),
      R(2, _0x2ad4a8),
      R(3, _0x54e8e1),
    ],
    Y,
  )));
let X = class extends _0xf7b0ef {
  constructor(
    _0x104b3f,
    _0x49f3fa,
    _0x3bed97,
    _0x448534,
    _0x37257f,
    _0x17f805,
    _0x10de3c,
    _0x1c55be,
  ) {
    (super(),
      (this._configService = _0x104b3f),
      (this._restoreService = _0x49f3fa),
      (this._adapterRegistry = _0x3bed97),
      (this._localeService = _0x448534),
      (this._themeService = _0x37257f),
      (this._collaborationController = _0x17f805),
      (this._dataLoaderService = _0x10de3c),
      (this._univerInstanceService = _0x1c55be),
      q(this, "_historyUniver", null),
      q(this, "_opening", null),
      q(this, "_openGeneration", 0),
      q(this, "_sessionDisposables", new _0xcfa65e()),
      q(this, "_container", null),
      q(this, "_unitId", ""),
      q(this, "_location", undefined));
  }
  open(_0x5268d8) {
    if (this._historyUniver) return Promise.resolve();
    if (this._opening) return this._opening;
    let _0x34539c = ++this._openGeneration,
      _0x1af7ea = this._open(_0x5268d8, _0x34539c).finally(() => {
        this._opening === _0x1af7ea && (this._opening = null);
      });
    return ((this._opening = _0x1af7ea), _0x1af7ea);
  }
  async _open(_0x537fd2, _0x35d8c9) {
    let _0x502d60 = this._adapterRegistry["get"](_0x120df4.UNIVER_SLIDE);
    if (!_0x502d60)
      throw Error(
        "[SlidesHistoryLoaderService]: Slides history adapter is not registered.",
      );
    let _0x244843 = await Promise.all([
      _0x502d60.canView(_0x537fd2),
      _0x502d60.canRevert(_0x537fd2),
    ]).catch((_0x6e9b1b) => {
      if (_0x35d8c9 === this._openGeneration) throw _0x6e9b1b;
      return null;
    });
    if (!_0x244843 || _0x35d8c9 !== this._openGeneration) return;
    let [_0x3b7ff2, _0x2e034c] = _0x244843;
    if (!_0x3b7ff2)
      throw Error(
        "[SlidesHistoryLoaderService]:\x20The\x20current\x20user\x20cannot\x20view\x20history\x20for\x20this\x20presentation.",
      );
    ((this._unitId = _0x537fd2),
      (this._location = _0x502d60.captureLocation(_0x537fd2)));
    let _0x52e96b = this._ensureContainer();
    _0x52e96b.style["display"] = "block";
    let _0x24cf5d = this._localeService["getCurrentLocale"](),
      _0x112725 = this._localeService["getLocales"](),
      _0x110974 = new _0xfe3d6b({
        theme: this._themeService["getCurrentTheme"](),
        darkMode: this._themeService["darkMode"],
        locale: _0x24cf5d,
        locales: _0x112725 ? { [_0x24cf5d]: _0x112725 } : undefined,
        direction: this._localeService["getDirection"](),
        override: [[_0x1d499f, { useClass: _0x589046 }]],
      });
    ((this._historyUniver = _0x110974),
      this._syncViewerServices(_0x110974, _0x52e96b));
    try {
      (this._registerChildPlugins(_0x110974, _0x2e034c, _0x52e96b),
        _0x110974.createUnit(_0x120df4.UNIVER_SLIDE, _0x2fb0cf(_0x537fd2)));
    } catch (_0x2d9ad9) {
      throw (
        _0x35d8c9 === this._openGeneration ? this.close() : _0x110974.dispose(),
        _0x2d9ad9
      );
    }
  }
  close() {
    (++this._openGeneration,
      (this._opening = null),
      this._sessionDisposables["dispose"]());
    let _0x1efb3d = this._historyUniver;
    ((this._historyUniver = null),
      _0x1efb3d == null || _0x1efb3d.dispose(),
      (this._unitId = ""),
      (this._location = undefined),
      this._container && (this._container["style"].display = "none"));
  }
  _syncViewerServices(_0x2408f0, _0x596639) {
    let _0x34f441 = _0x2408f0.__getInjector(),
      _0x4c3568 = _0x34f441.get(_0x969bf6),
      _0x32ef9f = _0x34f441.get(_0x3348f7);
    (this._sessionDisposables["add"](
      this._themeService["darkMode$"].subscribe((_0xa50024) => {
        _0x32ef9f.setDarkMode(_0xa50024);
      }),
    ),
      this._sessionDisposables["add"](
        this._themeService["currentTheme$"].subscribe((_0x2ddbd3) => {
          _0x32ef9f.setTheme(_0x2ddbd3);
        }),
      ),
      this._sessionDisposables["add"](
        this._localeService["currentLocale$"].subscribe((_0x1dfd36) => {
          let _0x5bc3fb = this._localeService["getLocales"]();
          (_0x5bc3fb && _0x4c3568.load({ [_0x1dfd36]: _0x5bc3fb }),
            _0x4c3568.setLocale(_0x1dfd36));
        }),
      ),
      this._sessionDisposables["add"](
        this._localeService["direction$"].subscribe((_0x35488e) => {
          (_0x4c3568.setDirection(_0x35488e),
            (_0x596639.dir = _0x35488e),
            (_0x596639.style["direction"] = _0x35488e));
        }),
      ));
  }
  async restore(_0x2fa57f) {
    var _0x2e6d63;
    let _0x2d1286 = this._unitId,
      _0xf602ba = this._location,
      _0x21b16f = this._collaborationController["getCollabEntity"](_0x2d1286);
    if (!_0x21b16f)
      throw Error(
        "[SlidesHistoryLoaderService]:\x20Collaboration\x20is\x20not\x20ready\x20for\x20this\x20presentation.",
      );
    let _0x6d642e = new _0x5b1a9a(),
      _0x16b3ee = _0x119a37(
        _0x21b16f.session["event$"].pipe(
          _0xf2d05d(
            (_0x2bb1a8) => _0x2bb1a8.eventID === _0x493c83.CHANGESET_ACK,
          ),
          _0xf2d05d((_0x38f15a) => _0x3c45a4(_0x38f15a, _0x2fa57f)),
          _0x2a7e75(_0x6d642e),
          _0x42402c(10000),
        ),
      );
    try {
      if (
        !(await this._restoreService["restore"](
          _0x2d1286,
          _0x120df4.UNIVER_SLIDE,
          _0x2fa57f,
        ))
      )
        throw Error(
          "[SlidesHistoryLoaderService]: The restore command was not accepted.",
        );
      await _0x16b3ee;
    } catch (_0x143199) {
      throw (
        _0x6d642e.next(),
        await _0x16b3ee.catch(() => undefined),
        _0x143199
      );
    } finally {
      _0x6d642e.complete();
    }
    (this.close(),
      this._univerInstanceService["disposeUnit"](_0x2d1286),
      await this._dataLoaderService["loadUnit"](
        _0x2d1286,
        _0x120df4.UNIVER_SLIDE,
      ),
      await ((_0x2e6d63 = this._adapterRegistry["get"](
        _0x120df4.UNIVER_SLIDE,
      )) == null
        ? undefined
        : _0x2e6d63.restoreLocation(_0x2d1286, _0xf602ba)));
  }
  _ensureContainer() {
    var _0x17c4ca;
    if (this._container) return this._container;
    let _0xa53591 = this._configService["getConfig"](P),
      _0x2f04b9 =
        (_0xa53591 == null ? undefined : _0xa53591.univerContainerId) ??
        ((_0x17c4ca = this._configService["getConfig"](_0x2b52d1)) == null
          ? undefined
          : _0x17c4ca.container),
      _0x22a107 =
        typeof _0x2f04b9 == "string"
          ? document.getElementById(_0x2f04b9)
          : _0x2f04b9;
    if (!_0x22a107)
      throw Error(
        "[SlidesHistoryLoaderService]:\x20Configure\x20a\x20valid\x20Univer\x20container\x20before\x20opening\x20history.",
      );
    let _0x2f96ed = document.createElement("div");
    return (
      Object.assign(_0x2f96ed.style, {
        position: "absolute",
        inset: "0",
        zIndex: "49",
        display: "none",
      }),
      _0x22a107.appendChild(_0x2f96ed),
      (this._container = _0x2f96ed),
      _0x2f96ed
    );
  }
  _registerChildPlugins(_0x1fccd5, _0x2eeed6, _0x4ef362) {
    let _0x207844 = this._configService["getConfig"](_0x17e1d1),
      _0x691699 = this._configService["getConfig"](P),
      _0x57152e = [
        [_0x4b5ffb, { license: _0x207844 == null ? undefined : _0x207844.ls }],
        [_0x220ec3],
        [
          _0x2c2b18,
          {
            container: _0x4ef362,
            header: true,
            toolbar: false,
            footer: true,
            contextMenu: false,
          },
        ],
        [_0x3e2240],
        [_0x52f81b],
        [_0x48bee6],
        [_0x4ad3ab, { override: [[_0x1ee303, { useClass: _0x5bc08d }]] }],
        [_0x77c0a0],
        [_0x5758db],
        [_0x5f4324],
        [_0x5a970f],
        [_0x22bd70],
        [_0x3585c5],
        [_0x23b63b],
        [
          _0x153f3f,
          {
            historyServerUrl:
              _0x691699 == null ? undefined : _0x691699.historyServerUrl,
          },
        ],
        [_0x33d22f],
      ],
      _0x634bbe = new Set();
    ([
      ..._0x57152e,
      ...((_0x691699 == null ? undefined : _0x691699.viewerPlugins) ?? []),
    ].forEach(([_0x17a26d, _0x1b160]) => {
      if (_0x634bbe.has(_0x17a26d.pluginName))
        throw Error(
          "[SlidesHistoryLoaderService]: Plugin " +
            _0x17a26d.pluginName +
            " has already been registered.",
        );
      (_0x634bbe.add(_0x17a26d.pluginName),
        _0x1fccd5.registerPlugin(_0x17a26d, _0x1b160));
    }),
      _0x1fccd5.registerPlugin(Y, {
        viewerMode: true,
        descriptor: { unitId: this._unitId, type: _0x120df4.UNIVER_SLIDE },
        canRestore: _0x2eeed6,
        onClose: () => this.close(),
        onRestore: (_0x36b0ed) => this.restore(_0x36b0ed),
        collaborationClientConfig: this._configService["getConfig"](_0x70ed04),
      }));
  }
  dispose() {
    var _0xaf4695;
    (this.close(),
      (_0xaf4695 = this._container) == null || _0xaf4695.remove(),
      (this._container = null),
      super.dispose());
  }
};
X = z(
  [
    R(0, _0x2ad4a8),
    R(1, _0x383662(_0x1a673f)),
    R(2, _0x383662(_0x551339)),
    R(3, _0x383662(_0x969bf6)),
    R(4, _0x383662(_0x3348f7)),
    R(5, _0x383662(_0x2ba875)),
    R(6, _0x383662(_0x351847)),
    R(7, _0x25a388),
  ],
  X,
);
const Z = {
    id: "slides-history-ui.operation.open",
    type: _0x18e354.OPERATION,
    handler: (_0x2b3ecd) => {
      let _0x1ce111 = _0x2b3ecd
        .get(_0x25a388)
        .getCurrentUnitOfType(_0x120df4.UNIVER_SLIDE);
      return _0x1ce111
        ? (_0x2b3ecd
            .get(X)
            .open(_0x1ce111.getUnitId())
            .catch((_0x4e905c) => {
              _0x2b3ecd
                .get(_0x54e8e1)
                .error(
                  "[OpenSlidesHistoryOperation]: Failed to open Slides history.",
                  _0x4e905c,
                );
            }),
          true)
        : false;
    },
  },
  kt = {
    [_0x375fb6.OTHERS]: {
      [Z.id]: {
        order: 100,
        gridLayout: {
          row: 1,
          column: 3,
          rowSpan: 2,
          columnSpan: 2,
          showLabel: true,
        },
        menuItemFactory: At,
      },
    },
  };
function At(_0x17284d) {
  return {
    id: Z.id,
    type: _0x157ddf.BUTTON,
    icon: "SlidesHistoryIcon",
    title: "slides-history-ui.menu.history",
    tooltip: "slides-history-ui.menu.history",
    hidden$: _0x2b639a(_0x17284d, _0x120df4.UNIVER_SLIDE),
  };
}
let Q = class extends _0xf7b0ef {
  constructor(_0xd157dc, _0x19a186) {
    (super(),
      this.disposeWithMe(_0xd157dc.registerCommand(Z)),
      _0x19a186.mergeMenu(kt));
  }
};
Q = z([R(0, _0xbf3ecd), R(1, _0x54a3de)], Q);
let $ = class extends _0x1aa4d0 {
  constructor(_0x43f615 = F, _0x85e561, _0x37b4ac) {
    (super(),
      (this._config = _0x43f615),
      (this._injector = _0x85e561),
      (this._configService = _0x37b4ac));
    let { ..._0x4f005b } = _0x399de1({}, F, this._config);
    this._configService["setConfig"](P, _0x4f005b);
  }
  onStarting() {
    (_0xf6255f(this._injector, [[B], [X], [Q]]),
      this._injector["get"](B),
      this._injector["get"](Q));
  }
};
(q($, "pluginName", "UNIVER_SLIDES_HISTORY_UI_PLUGIN"),
  q($, "packageName", I),
  q($, "version", L),
  q($, "type", _0x120df4.UNIVER_SLIDE),
  ($ = z(
    [
      _0x8feae9(_0x4b5ffb, _0x37228f, _0x33d22f, _0x5758db),
      R(1, _0x383662(_0x3c69bb)),
      R(2, _0x2ad4a8),
    ],
    $,
  )));
export {
  P as SLIDES_HISTORY_UI_PLUGIN_CONFIG_KEY,
  $ as UniverSlidesHistoryUIPlugin,
};
