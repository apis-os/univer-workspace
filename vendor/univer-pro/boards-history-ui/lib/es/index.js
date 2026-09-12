import {
  BoardsHistoryDiffService as _0xc4ca6,
  UniverBoardsHistoryPlugin as _0x43f730,
} from "@univerjs-pro/boards-history";
import {
  BoardWorkbench as _0x176fca,
  IBoardSettingsMenuContributionService as _0x1b7feb,
  UniverBoardsUIPlugin as _0x29c853,
  getBoardElementRenderObjectKey as _0x4a8066,
} from "@univerjs-pro/boards-ui";
import {
  AuthzIoHttpService as _0x19c0ca,
  COLLABORATION_CLIENT_PLUGIN_CONFIG_KEY as _0x24f3a0,
  CollaborationController as _0x16082f,
  CollaborationImageIoService as _0x37ccb1,
  DataLoaderService as _0x30e36e,
  SnapshotServerOverHTTPService as _0x27828c,
  UniverCollaborationClientPlugin as _0x27f5c3,
} from "@univerjs-pro/collaboration-client";
import {
  LS_CONFIG_KEY as _0x3c65b1,
  UniverLicensePlugin as _0x5c4c93,
} from "@univerjs-pro/license";
import {
  CommandType as _0x503dda,
  DependentOn as _0x14ad9c,
  Disposable as _0x343dbd,
  DisposableCollection as _0x1f57f5,
  IAuthzIoService as _0x668e40,
  ICommandService as _0x20a8cd,
  IConfigService as _0x424ea2,
  IImageIoService as _0x573a70,
  ILogService as _0x58c11c,
  IUniverInstanceService as _0x5c7b97,
  Inject as _0x3c1b48,
  Injector as _0x2aba0a,
  LocaleService as _0xef0578,
  Plugin as _0x4887fc,
  ThemeService as _0x1b8f64,
  Univer as _0x429114,
  UniverInstanceType as _0x1c7e46,
  merge as _0x578376,
  registerDependencies as _0xa4c3a2,
} from "@univerjs/core";
import { HistoryIcon as _0x4df4df } from "@univerjs/icons";
import {
  AddBoardElementMutation as _0x12b2bc,
  AddBoardElementOperation as _0x1f183b,
  AddBoardElementsOperation as _0x33a807,
  BeginBoardContainerOperation as _0x24cba5,
  BeginBoardSwimlaneOperation as _0x2730ed,
  BoardElementType as _0x3edcba,
  CommitBoardContainerTransformOperation as _0xf2bf10,
  DisbandBoardContainerOperation as _0x4c020e,
  FitBoardContainerToContentOperation as _0x38aeaf,
  InsertBoardChartCommand as _0x3228c7,
  InsertBoardTableOperation as _0x46af53,
  NormalizeBoardConnectorRoutingCommand as _0x2c006c,
  RemoveBoardConnectorLabelCommand as _0x46da06,
  RemoveBoardElementCommand as _0x256085,
  RemoveBoardElementMutation as _0x524c84,
  RemoveBoardElementOperation as _0xe8a1d1,
  RemoveBoardElementsOperation as _0x187ced,
  RemoveBoardSwimlaneLaneOperation as _0x1b9eab,
  ReorderBoardElementsOperation as _0x167898,
  ReorderBoardObjectListElementOperation as _0x195c0e,
  ReparentBoardElementsOperation as _0x22669f,
  SetBoardConnectorLabelStyleCommand as _0x4d5b8f,
  SetBoardConnectorLabelTextCommand as _0x65ca65,
  SetBoardContainerAutoResizeOperation as _0x47fa97,
  SetBoardContainerMembershipLockOperation as _0x5ebbc9,
  SetBoardElementsMetadataOperation as _0x55b052,
  SetBoardNameCommand as _0x3f5f62,
  SetBoardPageBackgroundCommand as _0x1c080a,
  SetBoardSwimlaneLaneSizeOperation as _0xd2db29,
  SetBoardSwimlaneLanesOperation as _0x4e2208,
  SetBoardThemeOperation as _0x371a17,
  UniverBoardsPlugin as _0x36cd34,
  UpdateBoardElementCommand as _0x3ee183,
  UpdateBoardElementMutation as _0x3247f4,
  UpdateBoardElementsCommand as _0x35446e,
  WrapBoardElementsInContainerOperation as _0x1d0b78,
  getBoardsEmptySnapshot as _0x1f82a6,
} from "@univerjs-pro/boards";
import {
  ChangeBoardChartDataSourceCommand as _0x36ef58,
  DuplicateBoardChartDataSourceCommand as _0x1f9336,
  UniverBoardsChartPlugin as _0x57cc9e,
  UpdateBoardChartConfigCommand as _0x19f2be,
  UpdateBoardChartDataSourceCommand as _0x3effad,
} from "@univerjs-pro/boards-chart";
import { UniverBoardsChartUIPlugin as _0x3013e3 } from "@univerjs-pro/boards-chart-ui";
import {
  AddMindMapChildOperation as _0x2f74e5,
  AddMindMapSiblingOperation as _0x301193,
  ChangeMindMapBranchLineTypeOperation as _0x437613,
  ChangeMindMapLayoutOperation as _0x4dda2b,
  DeleteMindMapNodeOperation as _0x227cb7,
  DetachMindMapNodeOperation as _0x4ba721,
  ImportMindMapOpmlOperation as _0x3abfc2,
  InsertBoardMindMapOperation as _0x4525d4,
  LayoutMindMapOperation as _0x4b43d7,
  PasteMindMapAsNewMindMapOperation as _0x357550,
  PasteMindMapNodeOperation as _0x3e6898,
  PromoteMindMapNodeOperation as _0x5a7222,
  ReflowMindMapCommand as _0x3b20a4,
  ReparentMindMapNodeOperation as _0x474a6e,
  SetMindMapElementMutation as _0x212316,
  ToggleMindMapNodeCollapseOperation as _0x37a576,
  TranslateMindMapOperation as _0x47cd94,
  UniverBoardsMindPlugin as _0x42f7cb,
  UpdateMindMapIncomingConnectorOperation as _0x59697a,
  UpdateMindMapNodeOperation as _0x3059ad,
  UpdateMindMapNodesOperation as _0x5035a5,
  getMindMapContainerMeta as _0x42e3eb,
  getMindMapNodeMeta as _0x196c47,
} from "@univerjs-pro/boards-mind";
import { UniverBoardsMindUIPlugin as _0x38980a } from "@univerjs-pro/boards-mind-ui";
import {
  DeleteBoardTableColumnsCommand as _0x3f2e08,
  DeleteBoardTableRowsCommand as _0x57f354,
  InsertBoardTableColumnsCommand as _0x4809e6,
  InsertBoardTableRowsCommand as _0x5e3e17,
  MergeBoardTableCellsCommand as _0x33e251,
  MoveBoardTableColumnsCommand as _0x2bbdd8,
  MoveBoardTableRowsCommand as _0x1b6944,
  RemoveBoardTableCommand as _0x1d1153,
  ResizeBoardTableColumnsCommand as _0x21a9f6,
  ResizeBoardTableRowsCommand as _0x3ca534,
  SetBoardTableBorderPresetCommand as _0x3af133,
  SetBoardTableCellStyleCommand as _0x524c30,
  SetBoardTableCellTextCommand as _0x19288b,
  UniverBoardsTablePlugin as _0x429f84,
  UnmergeBoardTableCellsCommand as _0x4c03e5,
  UpdateBoardTableCommand as _0x5a2deb,
} from "@univerjs-pro/boards-table";
import { UniverBoardsTableUIPlugin as _0x6f7fbc } from "@univerjs-pro/boards-table-ui";
import {
  CollaborationEvent as _0x5f0ebc,
  ISnapshotServerService as _0x522e07,
  SnapshotService as _0x5ddcdc,
  UniverCollaborationPlugin as _0x53b19c,
} from "@univerjs-pro/collaboration";
import { UniverDocsLatexPlugin as _0x10824e } from "@univerjs-pro/docs-latex";
import { UniverDocsLatexUIPlugin as _0x4fa546 } from "@univerjs-pro/docs-latex-ui";
import {
  HistoryRestoreService as _0x1ae3ec,
  HistoryUnitAdapterRegistryService as _0x259db8,
  UniverEditHistoryPlugin as _0x377419,
  isHistoryRestoreAcknowledgement as _0x4f84ae,
} from "@univerjs-pro/edit-history";
import { UniverInkPlugin as _0xf664b9 } from "@univerjs-pro/ink";
import { UniverInkUIPlugin as _0x29d81e } from "@univerjs-pro/ink-ui";
import { UniverDocsPlugin as _0x5cb7be } from "@univerjs/docs";
import { UniverDocsUIPlugin as _0x38abcb } from "@univerjs/docs-ui";
import { UniverDrawingPlugin as _0x1af7e9 } from "@univerjs/drawing";
import { UniverRenderEnginePlugin as _0x2122ab } from "@univerjs/engine-render";
import { UniverNetworkPlugin as _0x52abda } from "@univerjs/network";
import {
  BuiltInUIPart as _0x3b621a,
  IUIPartsService as _0x41f1d7,
  UI_PLUGIN_CONFIG_KEY as _0x39db1,
  UniverUIPlugin as _0x4e315f,
  connectInjector as _0x32eead,
} from "@univerjs/ui";
import {
  Subject as _0x4f64df,
  filter as _0xff002d,
  firstValueFrom as _0x329aff,
  takeUntil as _0x5215ad,
  timeout as _0x33d522,
} from "rxjs";
import {
  HistoryActionSummaryService as _0x442092,
  HistoryCanvasHighlightService as _0x379910,
  HistoryRenderAdapterRegistryService as _0x33ae27,
  UniverEditHistoryUIPlugin as _0x17ceaa,
} from "@univerjs-pro/edit-history-ui";
import { jsx as _0xe63d14 } from "react/jsx-runtime";
const F = "boards-history-ui.config",
  I = { historyServerUrl: "/universer-api/history" };
var L = "@univerjs-pro/boards-history-ui",
  R = "1.0.0-insiders.20260907-70fc579";
function ln() {
  return _0xe63d14(_0x176fca, { embedded: true, fitOnMount: true });
}
function z(_0x4f9fe3, _0x5bf1f4) {
  return function (_0xda4a83, _0x18a6a7) {
    _0x5bf1f4(_0xda4a83, _0x18a6a7, _0x4f9fe3);
  };
}
function B(_0x5f55fe, _0x4011b4, _0x7187e8, _0x288dad) {
  var _0x50266c = arguments.length,
    _0x5cf3c9 =
      _0x50266c < 3
        ? _0x4011b4
        : _0x288dad === null
          ? (_0x288dad = Object.getOwnPropertyDescriptor(_0x4011b4, _0x7187e8))
          : _0x288dad,
    _0x579d18;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x5cf3c9 = Reflect.decorate(_0x5f55fe, _0x4011b4, _0x7187e8, _0x288dad);
  else {
    for (var _0x1bdb81 = _0x5f55fe.length - 1; _0x1bdb81 >= 0; _0x1bdb81--)
      (_0x579d18 = _0x5f55fe[_0x1bdb81]) &&
        (_0x5cf3c9 =
          (_0x50266c < 3
            ? _0x579d18(_0x5cf3c9)
            : _0x50266c > 3
              ? _0x579d18(_0x4011b4, _0x7187e8, _0x5cf3c9)
              : _0x579d18(_0x4011b4, _0x7187e8)) || _0x5cf3c9);
  }
  return (
    _0x50266c > 3 &&
      _0x5cf3c9 &&
      Object.defineProperty(_0x4011b4, _0x7187e8, _0x5cf3c9),
    _0x5cf3c9
  );
}
let V = class extends _0x343dbd {
  constructor(_0x2d71f9, _0x1a88e3) {
    (super(),
      this.disposeWithMe(
        _0x1a88e3.registerComponent(_0x3b621a.CONTENT, () =>
          _0x32eead(ln, _0x2d71f9),
        ),
      ));
  }
};
V = B([z(0, _0x3c1b48(_0x2aba0a)), z(1, _0x41f1d7)], V);
const un = new Map([
    [_0x3f5f62.id, "boards-history-ui.action.renameBoard"],
    [_0x1c080a.id, "boards-history-ui.action.updateBackground"],
    [_0x371a17.id, "boards-history-ui.action.updateTheme"],
    [_0x1f183b.id, "boards-history-ui.action.insertObject"],
    [_0x33a807.id, "boards-history-ui.action.insertObject"],
    [_0x256085.id, "boards-history-ui.action.deleteObject"],
    [_0x187ced.id, "boards-history-ui.action.deleteObject"],
    [_0x3ee183.id, "boards-history-ui.action.updateObject"],
    [_0x35446e.id, "boards-history-ui.action.updateObject"],
    [_0x167898.id, "boards-history-ui.action.reorderObject"],
    [_0x195c0e.id, "boards-history-ui.action.reorderObject"],
    [_0x22669f.id, "boards-history-ui.action.moveObject"],
    [_0x55b052.id, "boards-history-ui.action.updateObject"],
    [_0x65ca65.id, "boards-history-ui.action.updateConnector"],
    [_0x4d5b8f.id, "boards-history-ui.action.updateConnector"],
    [_0x46da06.id, "boards-history-ui.action.updateConnector"],
    [_0x2c006c.id, "boards-history-ui.action.updateConnector"],
    [_0x24cba5.id, "boards-history-ui.action.insertContainer"],
    [_0x1d0b78.id, "boards-history-ui.action.insertContainer"],
    [_0x4c020e.id, "boards-history-ui.action.deleteContainer"],
    [_0xf2bf10.id, "boards-history-ui.action.updateContainer"],
    [_0x38aeaf.id, "boards-history-ui.action.updateContainer"],
    [_0x47fa97.id, "boards-history-ui.action.updateContainer"],
    [_0x5ebbc9.id, "boards-history-ui.action.updateContainer"],
    [_0x2730ed.id, "boards-history-ui.action.insertSwimlane"],
    [_0x4e2208.id, "boards-history-ui.action.updateSwimlane"],
    [_0xd2db29.id, "boards-history-ui.action.updateSwimlane"],
    [_0x1b9eab.id, "boards-history-ui.action.updateSwimlane"],
    [_0x4525d4.id, "boards-history-ui.action.insertMindMap"],
    [_0x3abfc2.id, "boards-history-ui.action.insertMindMap"],
    [_0x357550.id, "boards-history-ui.action.insertMindMap"],
    [_0x2f74e5.id, "boards-history-ui.action.insertMindMapNode"],
    [_0x301193.id, "boards-history-ui.action.insertMindMapNode"],
    [_0x3e6898.id, "boards-history-ui.action.insertMindMapNode"],
    [_0x227cb7.id, "boards-history-ui.action.deleteMindMapNode"],
    [_0x3059ad.id, "boards-history-ui.action.updateMindMap"],
    [_0x5035a5.id, "boards-history-ui.action.updateMindMap"],
    [_0x59697a.id, "boards-history-ui.action.updateMindMap"],
    [_0x4dda2b.id, "boards-history-ui.action.updateMindMapLayout"],
    [_0x4b43d7.id, "boards-history-ui.action.updateMindMapLayout"],
    [_0x437613.id, "boards-history-ui.action.updateMindMapLayout"],
    [_0x3b20a4.id, "boards-history-ui.action.updateMindMapLayout"],
    [_0x474a6e.id, "boards-history-ui.action.moveMindMapNode"],
    [_0x5a7222.id, "boards-history-ui.action.moveMindMapNode"],
    [_0x4ba721.id, "boards-history-ui.action.moveMindMapNode"],
    [_0x47cd94.id, "boards-history-ui.action.moveMindMapNode"],
    [_0x37a576.id, "boards-history-ui.action.updateMindMap"],
    [_0x46af53.id, "boards-history-ui.action.insertTable"],
    [_0x1d1153.id, "boards-history-ui.action.deleteTable"],
    [_0x5e3e17.id, "boards-history-ui.action.insertTableRows"],
    [_0x57f354.id, "boards-history-ui.action.deleteTableRows"],
    [_0x1b6944.id, "boards-history-ui.action.moveTableRows"],
    [_0x3ca534.id, "boards-history-ui.action.resizeTableRows"],
    [_0x4809e6.id, "boards-history-ui.action.insertTableColumns"],
    [_0x3f2e08.id, "boards-history-ui.action.deleteTableColumns"],
    [_0x2bbdd8.id, "boards-history-ui.action.moveTableColumns"],
    [_0x21a9f6.id, "boards-history-ui.action.resizeTableColumns"],
    [_0x33e251.id, "boards-history-ui.action.mergeTableCells"],
    [_0x4c03e5.id, "boards-history-ui.action.unmergeTableCells"],
    [_0x19288b.id, "boards-history-ui.action.editTableCell"],
    [_0x524c30.id, "boards-history-ui.action.formatTable"],
    [_0x3af133.id, "boards-history-ui.action.formatTable"],
    [_0x5a2deb.id, "boards-history-ui.action.updateTable"],
    [_0x3228c7.id, "boards-history-ui.action.insertChart"],
    [_0x36ef58.id, "boards-history-ui.action.updateChart"],
    [_0x1f9336.id, "boards-history-ui.action.updateChart"],
    [_0x3effad.id, "boards-history-ui.action.updateChart"],
    [_0x19f2be.id, "boards-history-ui.action.updateChart"],
  ]),
  H = new Map([
    [
      _0x3edcba.Text,
      {
        insert: "boards-history-ui.action.insertTextBox",
        update: "boards-history-ui.action.updateTextBox",
        delete: "boards-history-ui.action.deleteTextBox",
      },
    ],
    [
      _0x3edcba.Shape,
      {
        insert: "boards-history-ui.action.insertShape",
        update: "boards-history-ui.action.updateShape",
        delete: "boards-history-ui.action.deleteShape",
      },
    ],
    [
      _0x3edcba.Image,
      {
        insert: "boards-history-ui.action.insertImage",
        update: "boards-history-ui.action.updateImage",
        delete: "boards-history-ui.action.deleteImage",
      },
    ],
    [
      _0x3edcba.Diagram,
      {
        insert: "boards-history-ui.action.insertDiagram",
        update: "boards-history-ui.action.updateDiagram",
        delete: "boards-history-ui.action.deleteDiagram",
      },
    ],
    [
      _0x3edcba.Media,
      {
        insert: "boards-history-ui.action.insertMedia",
        update: "boards-history-ui.action.updateMedia",
        delete: "boards-history-ui.action.deleteMedia",
      },
    ],
    [
      _0x3edcba.Group,
      {
        insert: "boards-history-ui.action.insertGroup",
        update: "boards-history-ui.action.updateGroup",
        delete: "boards-history-ui.action.deleteGroup",
      },
    ],
    [
      _0x3edcba.Connector,
      {
        insert: "boards-history-ui.action.insertConnector",
        update: "boards-history-ui.action.updateConnector",
        delete: "boards-history-ui.action.deleteConnector",
      },
    ],
    [
      _0x3edcba.Table,
      {
        insert: "boards-history-ui.action.insertTable",
        update: "boards-history-ui.action.updateTable",
        delete: "boards-history-ui.action.deleteTable",
      },
    ],
    [
      _0x3edcba.Chart,
      {
        insert: "boards-history-ui.action.insertChart",
        update: "boards-history-ui.action.updateChart",
        delete: "boards-history-ui.action.deleteChart",
      },
    ],
  ]),
  dn = new Set([_0x12b2bc.id, _0x1f183b.id, _0x33a807.id]),
  fn = new Set([_0x3ee183.id, _0x3247f4.id, _0x35446e.id]),
  pn = new Set([_0x256085.id, _0x524c84.id, _0xe8a1d1.id, _0x187ced.id]);
let U = class extends _0x343dbd {
  constructor(_0x59299f, _0x4b46c7) {
    (super(),
      (this._localeService = _0x4b46c7),
      this.disposeWithMe(_0x59299f.register(_0x1c7e46.UNIVER_BOARD, this)));
  }
  resolve(_0x18ce72) {
    let _0x7e1335 = new Set(
        W(_0x18ce72, _0x12b2bc.id).map((_0x2e3cfe) => _0x2e3cfe.id),
      ),
      _0x2a8ca2 = hn(_0x18ce72),
      _0x14250e = gn(_0x18ce72, _0x7e1335),
      _0x2076ff = mn(_0x18ce72),
      _0xe1d190 = [..._0x2a8ca2, ..._0x14250e, ..._0x2076ff].map((_0x13769f) =>
        this._localeService["t"](_0x13769f),
      ),
      _0x4ee621 = [..._0x18ce72.commandIds].flatMap((_0x1cd6a3) => {
        if (
          (_0x2a8ca2.length > 0 && dn.has(_0x1cd6a3)) ||
          (_0x14250e.length > 0 && fn.has(_0x1cd6a3)) ||
          (_0x2076ff.length > 0 && pn.has(_0x1cd6a3))
        )
          return [];
        let _0x5696c6 = un.get(_0x1cd6a3);
        return _0x5696c6 ? [this._localeService["t"](_0x5696c6)] : [];
      }),
      _0x9109a4 = [...new Set([..._0xe1d190, ..._0x4ee621])];
    return _0x9109a4.length > 0
      ? _0x9109a4
      : _0x18ce72.commandIds["has"](_0x212316.id)
        ? [this._localeService["t"]("boards-history-ui.action.updateMindMap")]
        : _0x18ce72.commandIds["has"](_0x12b2bc.id)
          ? [this._localeService["t"]("boards-history-ui.action.insertObject")]
          : _0x18ce72.commandIds["has"](_0x524c84.id)
            ? [
                this._localeService["t"](
                  "boards-history-ui.action.deleteObject",
                ),
              ]
            : _0x18ce72.commandIds["has"](_0x3247f4.id)
              ? [
                  this._localeService["t"](
                    "boards-history-ui.action.updateObject",
                  ),
                ]
              : [];
  }
};
U = B([z(0, _0x3c1b48(_0x442092)), z(1, _0x3c1b48(_0xef0578))], U);
function mn(_0x173cec) {
  let _0x53d44b = _0x173cec.mutations["flatMap"]((_0xd4b794) => {
    var _0x4c79c2;
    if (_0xd4b794.id !== _0x524c84.id || !G(_0xd4b794.params)) return [];
    if (_0xd4b794.params["elementType"] === _0x3edcba.Container)
      return _0xd4b794.params["containerKind"] === "swimlane"
        ? ["boards-history-ui.action.deleteSwimlane"]
        : ["boards-history-ui.action.deleteContainer"];
    let _0x37a2bb = vn(_0xd4b794.params["elementType"])
      ? (_0x4c79c2 = H.get(_0xd4b794.params["elementType"])) == null
        ? undefined
        : _0x4c79c2.delete
      : undefined;
    return _0x37a2bb ? [_0x37a2bb] : [];
  });
  return [...new Set(_0x53d44b)];
}
function hn(_0x27d601) {
  let _0x4f2050 = W(_0x27d601, _0x12b2bc.id).flatMap((_0x5b4d2a) => {
    var _0x2eb88f;
    if (_0x42e3eb(_0x5b4d2a)) return ["boards-history-ui.action.insertMindMap"];
    if (_0x196c47(_0x5b4d2a))
      return ["boards-history-ui.action.insertMindMapNode"];
    if (_0x5b4d2a.type === _0x3edcba.Container)
      return _0x5b4d2a.containerData["kind"] === "swimlane"
        ? ["boards-history-ui.action.insertSwimlane"]
        : ["boards-history-ui.action.insertContainer"];
    let _0x1200de =
      (_0x2eb88f = H.get(_0x5b4d2a.type)) == null
        ? undefined
        : _0x2eb88f.insert;
    return _0x1200de ? [_0x1200de] : [];
  });
  return [...new Set(_0x4f2050)];
}
function gn(_0x45c3ab, _0x374813) {
  let _0x5dc1df = [...W(_0x45c3ab, _0x212316.id), ...W(_0x45c3ab, _0x3247f4.id)]
    .filter((_0x20da9e) => !_0x374813.has(_0x20da9e.id))
    .flatMap((_0x34a661) => {
      var _0x46ad9a;
      if (_0x42e3eb(_0x34a661) || _0x196c47(_0x34a661))
        return ["boards-history-ui.action.updateMindMap"];
      if (_0x34a661.type === _0x3edcba.Container)
        return _0x34a661.containerData["kind"] === "swimlane"
          ? ["boards-history-ui.action.updateSwimlane"]
          : ["boards-history-ui.action.updateContainer"];
      let _0x1f3436 =
        (_0x46ad9a = H.get(_0x34a661.type)) == null
          ? undefined
          : _0x46ad9a.update;
      return _0x1f3436 ? [_0x1f3436] : [];
    });
  return [...new Set(_0x5dc1df)];
}
function W(_0x37d3f1, _0x507dfa) {
  return _0x37d3f1.mutations["flatMap"]((_0x2e2573) =>
    _0x2e2573.id !== _0x507dfa ||
    !G(_0x2e2573.params) ||
    !_n(_0x2e2573.params["element"])
      ? []
      : [_0x2e2573.params["element"]],
  );
}
function _n(_0x560e1c) {
  if (
    !G(_0x560e1c) ||
    typeof _0x560e1c.id != "string" ||
    !G(_0x560e1c.transform)
  )
    return false;
  switch (_0x560e1c.type) {
    case _0x3edcba.Placeholder:
    case _0x3edcba.Text:
    case _0x3edcba.Shape:
    case _0x3edcba.Image:
    case _0x3edcba.Chart:
    case _0x3edcba.Table:
    case _0x3edcba.Diagram:
    case _0x3edcba.Media:
    case _0x3edcba.Group:
    case _0x3edcba.Connector:
    case _0x3edcba.Container:
      return true;
    default:
      return false;
  }
}
function vn(_0xe8929a) {
  switch (_0xe8929a) {
    case _0x3edcba.Placeholder:
    case _0x3edcba.Text:
    case _0x3edcba.Shape:
    case _0x3edcba.Image:
    case _0x3edcba.Chart:
    case _0x3edcba.Table:
    case _0x3edcba.Diagram:
    case _0x3edcba.Media:
    case _0x3edcba.Group:
    case _0x3edcba.Connector:
    case _0x3edcba.Container:
      return true;
    default:
      return false;
  }
}
function G(_0x794b45) {
  return typeof _0x794b45 == "object" && !!_0x794b45;
}
function K(_0xc55535) {
  "@babel/helpers - typeof";
  return (
    (K =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x2a35bc) {
            return typeof _0x2a35bc;
          }
        : function (_0x4f746c) {
            return _0x4f746c &&
              typeof Symbol == "function" &&
              _0x4f746c.constructor === Symbol &&
              _0x4f746c !== Symbol.prototype
              ? "symbol"
              : typeof _0x4f746c;
          }),
    K(_0xc55535)
  );
}
function yn(_0x5999a8, _0x4e3839) {
  if (K(_0x5999a8) != "object" || !_0x5999a8) return _0x5999a8;
  var _0x5dedef = _0x5999a8[Symbol.toPrimitive];
  if (_0x5dedef !== undefined) {
    var _0x444317 = _0x5dedef.call(_0x5999a8, _0x4e3839 || "default");
    if (K(_0x444317) != "object") return _0x444317;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x4e3839 === "string" ? String : Number)(_0x5999a8);
}
function bn(_0x18ac1c) {
  var _0x1f23f1 = yn(_0x18ac1c, "string");
  return K(_0x1f23f1) == "symbol" ? _0x1f23f1 : _0x1f23f1 + "";
}
function q(_0x46df36, _0x48058c, _0x4a0e52) {
  return (
    (_0x48058c = bn(_0x48058c)) in _0x46df36
      ? Object.defineProperty(_0x46df36, _0x48058c, {
          value: _0x4a0e52,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x46df36[_0x48058c] = _0x4a0e52),
    _0x46df36
  );
}
let J = class extends _0x343dbd {
  constructor(_0x364d4c, _0x19b8b8, _0x2662f2, _0x975720, _0x303c12) {
    (super(),
      (this._diffService = _0x364d4c),
      (this._snapshotService = _0x2662f2),
      (this._univerInstanceService = _0x975720),
      (this._highlightService = _0x303c12),
      q(this, "type", _0x1c7e46.UNIVER_BOARD),
      q(this, "_changes", new Map()),
      q(this, "_changesGeneration", 0),
      q(this, "_loadGeneration", 0),
      q(this, "_loadQueue", Promise.resolve()),
      q(this, "_unitId", ""),
      this.disposeWithMe(_0x19b8b8.register(this)));
  }
  loadRevision(_0x555fe8, _0x35bd03) {
    let _0x5b1596 = ++this._loadGeneration,
      _0x23afbf = this._loadQueue["catch"](() => undefined).then(async () => {
        if (_0x5b1596 !== this._loadGeneration) return;
        this._getBoard(_0x555fe8) &&
          this._univerInstanceService["disposeUnit"](_0x555fe8);
        let _0xa7240d = await this._snapshotService["loadBoard"](
          _0x555fe8,
          _0x35bd03.endRevision,
        );
        if (_0x5b1596 !== this._loadGeneration) {
          this._getBoard(_0x555fe8) === _0xa7240d &&
            this._univerInstanceService["disposeUnit"](_0x555fe8);
          return;
        }
        this._univerInstanceService["focusUnit"](_0x555fe8);
      });
    return ((this._loadQueue = _0x23afbf), _0x23afbf);
  }
  async loadChanges(_0x3b10e7, _0x111077) {
    this._unitId = _0x3b10e7;
    let _0x1e4837 = ++this._changesGeneration,
      _0x51684e = await this._diffService["compare"](_0x3b10e7, _0x111077);
    _0x1e4837 === this._changesGeneration &&
      (this._changes["clear"](),
      _0x51684e.forEach((_0x24235a) =>
        this._changes["set"](_0x24235a.id, _0x24235a),
      ),
      await this._renderHighlights(_0x3b10e7));
  }
  close() {
    (++this._changesGeneration,
      ++this._loadGeneration,
      this._changes["clear"](),
      (this._unitId &&= (this._highlightService["clear"](this._unitId), "")));
  }
  _getBoard(_0x11ea0b) {
    return (
      this._univerInstanceService["getUnit"](
        _0x11ea0b,
        _0x1c7e46.UNIVER_BOARD,
      ) ?? null
    );
  }
  _renderHighlights(_0x84e5e5) {
    let _0x388ce6 = this._getBoard(_0x84e5e5);
    if (!_0x388ce6) return Promise.resolve();
    let _0x449c25 = _0x388ce6.getActivePageId(),
      _0x15b623 = Array.from(this._changes["values"]())
        .filter((_0x84e1a3) => _0x84e1a3.pageId === _0x449c25)
        .map((_0x2b4aca) => ({
          id: _0x2b4aca.id,
          kind: _0x2b4aca.kind,
          objectKey: _0x2b4aca.elementId
            ? _0x4a8066(_0x84e5e5, _0x2b4aca.elementId)
            : undefined,
          outlineOnly: _0x2b4aca.kind === "delete" || !_0x2b4aca.elementId,
        }));
    return this._highlightService["show"](_0x84e5e5, _0x15b623);
  }
};
J = B(
  [
    z(0, _0x3c1b48(_0xc4ca6)),
    z(1, _0x3c1b48(_0x33ae27)),
    z(2, _0x3c1b48(_0x5ddcdc)),
    z(3, _0x5c7b97),
    z(4, _0x3c1b48(_0x379910)),
  ],
  J,
);
let Y = class extends _0x17ceaa {
  constructor(_0x57235a, _0x209f15, _0x47485d, _0x3ef867) {
    let { collaborationClientConfig: _0x518cee, ..._0x433ddd } = _0x57235a;
    (super(_0x433ddd, _0x209f15, _0x47485d, _0x3ef867),
      (this._injector = _0x209f15),
      _0x47485d.setConfig(_0x24f3a0, _0x518cee));
  }
  onStarting() {
    (super.onStarting(),
      _0xa4c3a2(this._injector, [
        [_0x522e07, { useClass: _0x27828c }],
        [U],
        [J],
        [V],
      ]),
      this._injector["get"](U),
      this._injector["get"](J),
      this._injector["get"](V));
  }
};
(q(Y, "pluginName", "UNIVER_BOARDS_HISTORY_VIEWER_PLUGIN"),
  q(Y, "packageName", L),
  q(Y, "version", R),
  q(Y, "type", _0x1c7e46.UNIVER_UNKNOWN),
  (Y = B(
    [
      _0x14ad9c(_0x5c4c93, _0x43f730, _0x29c853),
      z(1, _0x3c1b48(_0x2aba0a)),
      z(2, _0x424ea2),
      z(3, _0x58c11c),
    ],
    Y,
  )));
let X = class extends _0x343dbd {
  constructor(
    _0xa24c0e,
    _0x31ed9e,
    _0x11f489,
    _0x32eac2,
    _0x4fda2e,
    _0xaadb5c,
    _0x13e3f7,
    _0x33901e,
  ) {
    (super(),
      (this._configService = _0xa24c0e),
      (this._restoreService = _0x31ed9e),
      (this._adapterRegistry = _0x11f489),
      (this._localeService = _0x32eac2),
      (this._themeService = _0x4fda2e),
      (this._collaborationController = _0xaadb5c),
      (this._dataLoaderService = _0x13e3f7),
      (this._univerInstanceService = _0x33901e),
      q(this, "_historyUniver", null),
      q(this, "_opening", null),
      q(this, "_openGeneration", 0),
      q(this, "_sessionDisposables", new _0x1f57f5()),
      q(this, "_container", null),
      q(this, "_unitId", ""),
      q(this, "_location", undefined));
  }
  open(_0x13141c) {
    if (this._historyUniver) return Promise.resolve();
    if (this._opening) return this._opening;
    let _0x2e2e48 = ++this._openGeneration,
      _0x2e1386 = this._open(_0x13141c, _0x2e2e48).finally(() => {
        this._opening === _0x2e1386 && (this._opening = null);
      });
    return ((this._opening = _0x2e1386), _0x2e1386);
  }
  async _open(_0x43b446, _0x2dd11c) {
    let _0xb9196c = this._adapterRegistry["get"](_0x1c7e46.UNIVER_BOARD);
    if (!_0xb9196c)
      throw Error(
        "[BoardsHistoryLoaderService]: Board history adapter is not registered.",
      );
    let _0x1cb0d5 = await Promise.all([
      _0xb9196c.canView(_0x43b446),
      _0xb9196c.canRevert(_0x43b446),
    ]).catch((_0x352db7) => {
      if (_0x2dd11c === this._openGeneration) throw _0x352db7;
      return null;
    });
    if (!_0x1cb0d5 || _0x2dd11c !== this._openGeneration) return;
    let [_0x529aa8, _0x1bbc76] = _0x1cb0d5;
    if (!_0x529aa8)
      throw Error(
        "[BoardsHistoryLoaderService]:\x20The\x20current\x20user\x20cannot\x20view\x20history\x20for\x20this\x20Board.",
      );
    ((this._unitId = _0x43b446),
      (this._location = _0xb9196c.captureLocation(_0x43b446)));
    let _0x2d194d = this._ensureContainer();
    _0x2d194d.style["display"] = "block";
    let _0x203e40 = this._localeService["getCurrentLocale"](),
      _0x1fbdd3 = this._localeService["getLocales"](),
      _0x178a67 = new _0x429114({
        theme: this._themeService["getCurrentTheme"](),
        darkMode: this._themeService["darkMode"],
        locale: _0x203e40,
        locales: _0x1fbdd3 ? { [_0x203e40]: _0x1fbdd3 } : undefined,
        direction: this._localeService["getDirection"](),
        override: [[_0x668e40, { useClass: _0x19c0ca }]],
      });
    ((this._historyUniver = _0x178a67),
      this._syncViewerServices(_0x178a67, _0x2d194d));
    try {
      (this._registerChildPlugins(_0x178a67, _0x1bbc76, _0x2d194d),
        _0x178a67.createUnit(_0x1c7e46.UNIVER_BOARD, _0x1f82a6(_0x43b446, "")));
    } catch (_0x483d75) {
      throw (
        _0x2dd11c === this._openGeneration ? this.close() : _0x178a67.dispose(),
        _0x483d75
      );
    }
  }
  close() {
    (++this._openGeneration,
      (this._opening = null),
      this._sessionDisposables["dispose"]());
    let _0x24efb8 = this._historyUniver;
    ((this._historyUniver = null),
      _0x24efb8 == null || _0x24efb8.dispose(),
      (this._unitId = ""),
      (this._location = undefined),
      this._container && (this._container["style"].display = "none"));
  }
  _syncViewerServices(_0x3868fe, _0x563347) {
    let _0x96cfb = _0x3868fe.__getInjector(),
      _0xcf781a = _0x96cfb.get(_0xef0578),
      _0x4dfdff = _0x96cfb.get(_0x1b8f64);
    (this._sessionDisposables["add"](
      this._themeService["darkMode$"].subscribe((_0x228ee5) => {
        _0x4dfdff.setDarkMode(_0x228ee5);
      }),
    ),
      this._sessionDisposables["add"](
        this._themeService["currentTheme$"].subscribe((_0xb1b0cc) => {
          _0x4dfdff.setTheme(_0xb1b0cc);
        }),
      ),
      this._sessionDisposables["add"](
        this._localeService["currentLocale$"].subscribe((_0x256844) => {
          let _0x383903 = this._localeService["getLocales"]();
          (_0x383903 && _0xcf781a.load({ [_0x256844]: _0x383903 }),
            _0xcf781a.setLocale(_0x256844));
        }),
      ),
      this._sessionDisposables["add"](
        this._localeService["direction$"].subscribe((_0x50df63) => {
          (_0xcf781a.setDirection(_0x50df63),
            (_0x563347.dir = _0x50df63),
            (_0x563347.style["direction"] = _0x50df63));
        }),
      ));
  }
  async restore(_0x315c48) {
    var _0x150bba;
    let _0x1de032 = this._unitId,
      _0x112448 = this._location,
      _0x1e0331 = this._collaborationController["getCollabEntity"](_0x1de032);
    if (!_0x1e0331)
      throw Error(
        "[BoardsHistoryLoaderService]: Collaboration is not ready for this Board.",
      );
    let _0x16e651 = new _0x4f64df(),
      _0x33c8ad = _0x329aff(
        _0x1e0331.session["event$"].pipe(
          _0xff002d(
            (_0x567d67) => _0x567d67.eventID === _0x5f0ebc.CHANGESET_ACK,
          ),
          _0xff002d((_0x3535dc) => _0x4f84ae(_0x3535dc, _0x315c48)),
          _0x5215ad(_0x16e651),
          _0x33d522(10000),
        ),
      );
    try {
      if (
        !(await this._restoreService["restore"](
          _0x1de032,
          _0x1c7e46.UNIVER_BOARD,
          _0x315c48,
        ))
      )
        throw Error(
          "[BoardsHistoryLoaderService]: The restore command was not accepted.",
        );
      await _0x33c8ad;
    } catch (_0x1729ae) {
      throw (
        _0x16e651.next(),
        await _0x33c8ad.catch(() => undefined),
        _0x1729ae
      );
    } finally {
      _0x16e651.complete();
    }
    (this.close(),
      this._univerInstanceService["disposeUnit"](_0x1de032),
      await this._dataLoaderService["loadUnit"](
        _0x1de032,
        _0x1c7e46.UNIVER_BOARD,
      ),
      await ((_0x150bba = this._adapterRegistry["get"](
        _0x1c7e46.UNIVER_BOARD,
      )) == null
        ? undefined
        : _0x150bba.restoreLocation(_0x1de032, _0x112448)));
  }
  _ensureContainer() {
    var _0x251fc9;
    if (this._container) return this._container;
    let _0x50c614 = this._configService["getConfig"](F),
      _0x4c35d8 =
        (_0x50c614 == null ? undefined : _0x50c614.univerContainerId) ??
        ((_0x251fc9 = this._configService["getConfig"](_0x39db1)) == null
          ? undefined
          : _0x251fc9.container),
      _0x4c2270 =
        typeof _0x4c35d8 == "string"
          ? document.getElementById(_0x4c35d8)
          : _0x4c35d8;
    if (!_0x4c2270)
      throw Error(
        "[BoardsHistoryLoaderService]: Configure a valid Univer container before opening history.",
      );
    let _0x3dee90 = document.createElement("div");
    return (
      Object.assign(_0x3dee90.style, {
        position: "absolute",
        inset: "0",
        zIndex: "49",
        display: "none",
      }),
      _0x4c2270.appendChild(_0x3dee90),
      (this._container = _0x3dee90),
      _0x3dee90
    );
  }
  _registerChildPlugins(_0x39b32b, _0x22507e, _0x11e494) {
    let _0x26c3c4 = this._configService["getConfig"](_0x3c65b1),
      _0x599436 = this._configService["getConfig"](F),
      _0x5a175d = [
        [_0x5c4c93, { license: _0x26c3c4 == null ? undefined : _0x26c3c4.ls }],
        [_0x2122ab],
        [
          _0x4e315f,
          {
            container: _0x11e494,
            header: true,
            toolbar: false,
            footer: true,
            contextMenu: false,
          },
        ],
        [_0x52abda],
        [_0x1af7e9, { override: [[_0x573a70, { useClass: _0x37ccb1 }]] }],
        [_0x5cb7be],
        [_0x38abcb],
        [_0x10824e],
        [_0x4fa546],
        [_0xf664b9],
        [_0x29d81e],
        [_0x36cd34],
        [_0x29c853, { showToolbar: false, workbench: { content: false } }],
        [_0x57cc9e],
        [_0x3013e3],
        [_0x42f7cb],
        [_0x38980a],
        [_0x429f84],
        [_0x6f7fbc],
        [_0x53b19c],
        [
          _0x377419,
          {
            historyServerUrl:
              _0x599436 == null ? undefined : _0x599436.historyServerUrl,
          },
        ],
        [_0x43f730],
      ],
      _0x4c4ddf = new Set();
    ([
      ..._0x5a175d,
      ...((_0x599436 == null ? undefined : _0x599436.viewerPlugins) ?? []),
    ].forEach(([_0x2df712, _0x1c27e3]) => {
      if (_0x4c4ddf.has(_0x2df712.pluginName))
        throw Error(
          "[BoardsHistoryLoaderService]: Plugin " +
            _0x2df712.pluginName +
            " has already been registered.",
        );
      (_0x4c4ddf.add(_0x2df712.pluginName),
        _0x39b32b.registerPlugin(_0x2df712, _0x1c27e3));
    }),
      _0x39b32b.registerPlugin(Y, {
        viewerMode: true,
        descriptor: { unitId: this._unitId, type: _0x1c7e46.UNIVER_BOARD },
        canRestore: _0x22507e,
        onClose: () => this.close(),
        onRestore: (_0x3cc302) => this.restore(_0x3cc302),
        collaborationClientConfig: this._configService["getConfig"](_0x24f3a0),
      }));
  }
  dispose() {
    var _0x2b86fe;
    (this.close(),
      (_0x2b86fe = this._container) == null || _0x2b86fe.remove(),
      (this._container = null),
      super.dispose());
  }
};
X = B(
  [
    z(0, _0x424ea2),
    z(1, _0x3c1b48(_0x1ae3ec)),
    z(2, _0x3c1b48(_0x259db8)),
    z(3, _0x3c1b48(_0xef0578)),
    z(4, _0x3c1b48(_0x1b8f64)),
    z(5, _0x3c1b48(_0x16082f)),
    z(6, _0x3c1b48(_0x30e36e)),
    z(7, _0x5c7b97),
  ],
  X,
);
const Z = {
  id: "boards-history-ui.operation.open",
  type: _0x503dda.OPERATION,
  handler: (_0x2e5328) => {
    let _0x624059 = _0x2e5328
      .get(_0x5c7b97)
      .getCurrentUnitOfType(_0x1c7e46.UNIVER_BOARD);
    return _0x624059
      ? (_0x2e5328
          .get(X)
          .open(_0x624059.getUnitId())
          .catch((_0x127b5c) => {
            _0x2e5328
              .get(_0x58c11c)
              .error(
                "[OpenBoardsHistoryOperation]: Failed to open Board history.",
                _0x127b5c,
              );
          }),
        true)
      : false;
  },
};
let Q = class extends _0x343dbd {
  constructor(_0x26ff05, _0x34673a, _0x1286af) {
    (super(),
      this.disposeWithMe(_0x26ff05.registerCommand(Z)),
      this.disposeWithMe(
        _0x34673a.register({
          id: Z.id,
          menuItemId: Z.id,
          group: "action",
          order: 100,
          icon: _0x4df4df,
          label: () => _0x1286af.t("boards-history-ui.menu.history"),
          onClick: (_0x590c6c) => _0x590c6c.executeCommand(Z.id),
        }),
      ));
  }
};
Q = B(
  [z(0, _0x20a8cd), z(1, _0x3c1b48(_0x1b7feb)), z(2, _0x3c1b48(_0xef0578))],
  Q,
);
let $ = class extends _0x4887fc {
  constructor(_0x11f178 = I, _0xe1dbe0, _0xc3817a) {
    (super(),
      (this._config = _0x11f178),
      (this._injector = _0xe1dbe0),
      (this._configService = _0xc3817a));
    let { ..._0x4cb271 } = _0x578376({}, I, this._config);
    this._configService["setConfig"](F, _0x4cb271);
  }
  onStarting() {
    (_0xa4c3a2(this._injector, [[X], [Q]]), this._injector["get"](Q));
  }
};
(q($, "pluginName", "UNIVER_BOARDS_HISTORY_UI_PLUGIN"),
  q($, "packageName", L),
  q($, "version", R),
  q($, "type", _0x1c7e46.UNIVER_BOARD),
  ($ = B(
    [
      _0x14ad9c(_0x5c4c93, _0x27f5c3, _0x43f730, _0x29c853),
      z(1, _0x3c1b48(_0x2aba0a)),
      z(2, _0x424ea2),
    ],
    $,
  )));
export {
  F as BOARDS_HISTORY_UI_PLUGIN_CONFIG_KEY,
  $ as UniverBoardsHistoryUIPlugin,
};
