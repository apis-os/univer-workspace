import {
  BoardModel as _0x171840,
  BoardToolType as _0x4aaa8c,
  IBoardElementService as _0x598c87,
  UniverBoardsPlugin as _0x3092f4,
  getBoardPermissionValue as _0x30a68a,
} from "@univerjs-pro/boards";
import {
  BOARD_RENDER_LAYER_INDEX as _0x1c5f5a,
  BOARD_RENDER_OBJECT_Z_INDEX as _0xba0186,
  BoardElementContextMenuPosition as _0x411f87,
  IBoardElementStateService as _0x317a96,
  IBoardToolbarContributionService as _0xdf7f3a,
  IBoardUIStateService as _0x4e88af,
  UniverBoardsUIPlugin as _0x3daab4,
  getBoardElementRenderObjectKey as _0x588562,
  hitTestBoardElementAtPoint as _0x5d3cde,
} from "@univerjs-pro/boards-ui";
import {
  CommandType as _0x2afe29,
  DependentOn as _0x4533ae,
  Disposable as _0x4f641e,
  ICommandService as _0x2264b3,
  IConfigService as _0x57d0e8,
  IPermissionService as _0x481b80,
  IUniverInstanceService as _0x36b866,
  Inject as _0xb6959c,
  Injector as _0x1aaacf,
  LocaleService as _0x8b1191,
  Plugin as _0x10d286,
  RxDisposable as _0xa22183,
  ThemeService as _0x3b402e,
  UniverInstanceType as _0x4dd54f,
  UserManagerService as _0xf509b9,
  merge as _0x29bedd,
  toDisposable as _0x106a1b,
} from "@univerjs/core";
import { UnitAction as _0x41b477 } from "@univerjs/protocol";
import {
  ThreadCommentAnchorKind as _0x407545,
  ThreadCommentModel as _0x27de81,
  deserializeThreadCommentAnchor as _0x14823a,
  serializeThreadCommentAnchor as _0x13664a,
} from "@univerjs/thread-comment";
import {
  ThreadCommentCanvasOverlay as _0x16bdd7,
  ThreadCommentDraftService as _0xec52b7,
  ThreadCommentPanel as _0x3d9e53,
  ThreadCommentPanelService as _0x4f29e7,
  UniverThreadCommentUIPlugin as _0x3822a6,
} from "@univerjs/thread-comment-ui";
import {
  ComponentManager as _0x319841,
  ContextMenuGroup as _0x21ead4,
  FloatingObjectToolbarPosition as _0x2419c1,
  IMenuManagerService as _0x40b4cb,
  ISidebarService as _0x1f4ca8,
  IconManager as _0x459e8c,
  MenuItemType as _0x3b2966,
  getMenuHiddenObservable as _0x5b1766,
  useDependency as _0x3a206c,
  useObservable as _0x5cba62,
} from "@univerjs/ui";
import { UniverBoardsThreadCommentPlugin as _0x468f6f } from "@univerjs-pro/boards-thread-comment";
import { UniverLicensePlugin as _0x14b96c } from "@univerjs-pro/license";
import {
  IRenderManagerService as _0x51254b,
  UniverRenderEnginePlugin as _0x258722,
} from "@univerjs/engine-render";
import {
  CommentIcon as _0x5d08b4,
  InsertCommentDoubleIcon as _0x20e8af,
} from "@univerjs/icons";
import { useMemo as _0x3f5db2 } from "react";
import {
  combineLatest as _0x2003c2,
  distinctUntilChanged as _0x78c8f,
  map as _0x4efdfa,
  of as _0x3fecb4,
  pairwise as _0x39dc39,
  startWith as _0x515822,
  takeUntil as _0x515920,
} from "rxjs";
import { jsx as _0x16a343 } from "react/jsx-runtime";
const L = "univer.board.thread-comment-panel";
function R(_0x2159ab) {
  let _0x1b48c7 = _0x2159ab.get(_0x4f29e7);
  (_0x2159ab
    .get(_0x1f4ca8)
    .open({
      header: { title: "boards-thread-comment-ui.addComment" },
      children: { label: L },
      width: 320,
      onClose: () => _0x1b48c7.setPanelVisible(false),
    }),
    _0x1b48c7.setPanelVisible(true));
}
const z = {
    id: "board.operation.open-comment-panel",
    type: _0x2afe29.OPERATION,
    handler(_0x4b3944) {
      return (R(_0x4b3944), true);
    },
  },
  B = {
    id: "board.operation.start-comment-placement",
    type: _0x2afe29.OPERATION,
    handler(_0x31613b) {
      let _0x5c15b4 = _0x31613b
        .get(_0x36b866)
        .getCurrentUnitOfType(_0x4dd54f.UNIVER_BOARD);
      return !_0x5c15b4 ||
        !_0x30a68a(
          _0x31613b.get(_0x481b80),
          _0x5c15b4.getUnitId(),
          _0x5c15b4.getUnitId(),
          _0x41b477.Comment,
        )
        ? false
        : (_0x31613b.get(_0x4e88af).setActiveTool(_0x4aaa8c.Select),
          _0x31613b
            .get(_0xec52b7)
            .startPlacement(_0x4dd54f.UNIVER_BOARD, _0x5c15b4.getUnitId()),
          true);
    },
  },
  V = {
    id: "board.operation.add-element-comment",
    type: _0x2afe29.OPERATION,
    handler(_0x2c403e) {
      var _0x986cd0;
      let _0x3e5fe6 = _0x2c403e
          .get(_0x36b866)
          .getCurrentUnitOfType(_0x4dd54f.UNIVER_BOARD),
        _0x4b004b = _0x2c403e.get(_0x317a96).getSnapshot(),
        _0x2d4bcd = _0x3e5fe6 == null ? undefined : _0x3e5fe6.getActivePageId(),
        _0x300254 =
          _0x4b004b.focusedId ??
          _0x4b004b.selectedIds[_0x4b004b.selectedIds["length"] - 1];
      return !_0x3e5fe6 ||
        !_0x2d4bcd ||
        !_0x300254 ||
        ((_0x986cd0 = _0x4b004b.context) == null
          ? undefined
          : _0x986cd0.unitId) !== _0x3e5fe6.getUnitId() ||
        _0x4b004b.context["subUnitId"] !== _0x2d4bcd ||
        !_0x30a68a(
          _0x2c403e.get(_0x481b80),
          _0x3e5fe6.getUnitId(),
          _0x3e5fe6.getUnitId(),
          _0x41b477.Comment,
        )
        ? false
        : (_0x2c403e
            .get(_0xec52b7)
            .place({
              unitId: _0x3e5fe6.getUnitId(),
              subUnitId: _0x2d4bcd,
              anchor: {
                kind: _0x407545.BOARD_ELEMENT,
                pageId: _0x2d4bcd,
                elementId: _0x300254,
              },
            }),
          R(_0x2c403e),
          true);
    },
  },
  H = "boards-thread-comment-ui.config",
  U = {};
var ke = "@univerjs-pro/boards-thread-comment-ui",
  Ae = "1.0.0-insiders.20260907-70fc579";
function je() {
  let _0x189676 = _0x3a206c(_0x36b866),
    _0x4f0e5a = _0x3a206c(_0x2264b3),
    _0x15d625 = _0x3a206c(_0xec52b7),
    _0x5c277e = _0x3a206c(_0xf509b9),
    _0x2f282d = _0x3a206c(_0x598c87),
    _0x30203f = _0x189676.getCurrentUnitOfType(_0x4dd54f.UNIVER_BOARD),
    _0x5b684f = _0x30203f instanceof _0x171840 ? _0x30203f : undefined,
    _0x56fa39 = _0x3a206c(_0x481b80);
  _0x5cba62(() => _0x56fa39.permissionPointUpdate$, undefined, false, [
    _0x56fa39,
  ]);
  let _0x34aab3 = _0x5cba62(_0x15d625.draft$, _0x15d625.draft),
    _0x21c24b = _0x3f5db2(
      () =>
        _0x3fecb4(_0x5b684f == null ? undefined : _0x5b684f.getActivePageId()),
      [_0x5b684f],
    ),
    _0x2c1778 =
      _0x34aab3 &&
      _0x34aab3.unitId ===
        (_0x5b684f == null ? undefined : _0x5b684f.getUnitId())
        ? {
            id: "",
            threadId: "",
            unitId: _0x34aab3.unitId,
            subUnitId: _0x34aab3.subUnitId,
            ref: _0x13664a(_0x34aab3.anchor),
            dT: "",
            personId: _0x5c277e.getCurrentUser().userID,
            text: { dataStream: "\x0d\x0a" },
          }
        : null;
  if (!_0x5b684f) return null;
  let _0x4d42c3 = !_0x30a68a(
    _0x56fa39,
    _0x5b684f.getUnitId(),
    _0x5b684f.getUnitId(),
    _0x41b477.Comment,
  );
  return _0x16a343(_0x3d9e53, {
    unitId: _0x5b684f.getUnitId(),
    subUnitId$: _0x21c24b,
    type: _0x4dd54f.UNIVER_BOARD,
    onAdd: () => _0x4f0e5a.executeCommand(B.id),
    disableAdd: _0x4d42c3,
    getSubUnitName: (_0x26c067) => {
      var _0x206dda;
      return (
        ((_0x206dda = _0x5b684f.getPage(_0x26c067)) == null
          ? undefined
          : _0x206dda.name) ?? _0x26c067
      );
    },
    tempComment: _0x2c1778,
    onTempCommentClose: () => _0x15d625.cancel(),
    formatRef: (_0x9ab457) => Me(_0x9ab457, _0x2f282d),
  });
}
function Me(_0x1c7a6c, _0x57284d) {
  let _0x9dfaa0 = _0x14823a(_0x1c7a6c.ref);
  if (
    (_0x9dfaa0 == null ? undefined : _0x9dfaa0.kind) === _0x407545.BOARD_ELEMENT
  ) {
    var _0x1309c8;
    let _0x27dcc3 = _0x57284d.getElementById(
      _0x1c7a6c.unitId,
      _0x9dfaa0.pageId ?? _0x1c7a6c.subUnitId,
      _0x9dfaa0.elementId,
    );
    return (
      (_0x27dcc3 == null || (_0x1309c8 = _0x27dcc3.element["name"]) == null
        ? undefined
        : _0x1309c8.trim()) || _0x9dfaa0.elementId
    );
  }
  return (_0x9dfaa0 == null ? undefined : _0x9dfaa0.kind) ===
    _0x407545.BOARD_POSITION
    ? "(" + Math.round(_0x9dfaa0.x) + ",\x20" + Math.round(_0x9dfaa0.y) + ")"
    : _0x1c7a6c.ref;
}
function W(_0x33d589, _0x29df10) {
  return function (_0x302ae3, _0x2519ba) {
    _0x29df10(_0x302ae3, _0x2519ba, _0x33d589);
  };
}
function G(_0x367efe, _0x3c7955, _0x58bbe9, _0x2a05b3) {
  var _0x32e8bf = arguments.length,
    _0x33c343 =
      _0x32e8bf < 3
        ? _0x3c7955
        : _0x2a05b3 === null
          ? (_0x2a05b3 = Object.getOwnPropertyDescriptor(_0x3c7955, _0x58bbe9))
          : _0x2a05b3,
    _0x10aa94;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x33c343 = Reflect.decorate(_0x367efe, _0x3c7955, _0x58bbe9, _0x2a05b3);
  else {
    for (var _0x4fe950 = _0x367efe.length - 1; _0x4fe950 >= 0; _0x4fe950--)
      (_0x10aa94 = _0x367efe[_0x4fe950]) &&
        (_0x33c343 =
          (_0x32e8bf < 3
            ? _0x10aa94(_0x33c343)
            : _0x32e8bf > 3
              ? _0x10aa94(_0x3c7955, _0x58bbe9, _0x33c343)
              : _0x10aa94(_0x3c7955, _0x58bbe9)) || _0x33c343);
  }
  return (
    _0x32e8bf > 3 &&
      _0x33c343 &&
      Object.defineProperty(_0x3c7955, _0x58bbe9, _0x33c343),
    _0x33c343
  );
}
let K = class extends _0x4f641e {
  constructor(_0x2ef69f, _0x3777e3) {
    (super(),
      (this._componentManager = _0x2ef69f),
      (this._iconManager = _0x3777e3),
      this._registerIcons(),
      this._registerComponents());
  }
  _registerIcons() {
    this.disposeWithMe(
      this._iconManager["register"]({ InsertCommentDoubleIcon: _0x20e8af }),
    );
  }
  _registerComponents() {
    this.disposeWithMe(this._componentManager["register"](L, je));
  }
};
K = G([W(0, _0xb6959c(_0x319841)), W(1, _0xb6959c(_0x459e8c))], K);
function q(_0x4f9254, _0x21b40e, _0x184b45) {
  let _0x4b73c2 =
    Number.isFinite(_0x184b45.zoomRatio) && _0x184b45.zoomRatio > 0
      ? _0x184b45.zoomRatio
      : 1;
  return {
    x: (_0x4f9254 - _0x184b45.viewportPanOffset["x"]) / _0x4b73c2,
    y: (_0x21b40e - _0x184b45.viewportPanOffset["y"]) / _0x4b73c2,
  };
}
function J(_0x1e5979) {
  "@babel/helpers - typeof";
  return (
    (J =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x2a83aa) {
            return typeof _0x2a83aa;
          }
        : function (_0x12c6ba) {
            return _0x12c6ba &&
              typeof Symbol == "function" &&
              _0x12c6ba.constructor === Symbol &&
              _0x12c6ba !== Symbol.prototype
              ? "symbol"
              : typeof _0x12c6ba;
          }),
    J(_0x1e5979)
  );
}
function Ne(_0x15b9cd, _0x1bfa3f) {
  if (J(_0x15b9cd) != "object" || !_0x15b9cd) return _0x15b9cd;
  var _0x3451f5 = _0x15b9cd[Symbol.toPrimitive];
  if (_0x3451f5 !== undefined) {
    var _0x4cffe7 = _0x3451f5.call(_0x15b9cd, _0x1bfa3f || "default");
    if (J(_0x4cffe7) != "object") return _0x4cffe7;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x1bfa3f === "string" ? String : Number)(_0x15b9cd);
}
function Pe(_0x2f7cb7) {
  var _0x507eca = Ne(_0x2f7cb7, "string");
  return J(_0x507eca) == "symbol" ? _0x507eca : _0x507eca + "";
}
function Y(_0x35e77a, _0x2434f7, _0x38e582) {
  return (
    (_0x2434f7 = Pe(_0x2434f7)) in _0x35e77a
      ? Object.defineProperty(_0x35e77a, _0x2434f7, {
          value: _0x38e582,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x35e77a[_0x2434f7] = _0x38e582),
    _0x35e77a
  );
}
function Fe(_0x93e600) {
  let _0x2d47b4 = new Map();
  return (
    _0x93e600.forEach((_0x120cf3) => {
      let _0x28a9df = _0x120cf3.x + "\x00" + _0x120cf3.y,
        _0x2fbfc6 = _0x2d47b4.get(_0x28a9df);
      if (_0x2fbfc6) {
        ((_0x2fbfc6.commentId = _0x120cf3.commentId),
          _0x2fbfc6.commentIds["push"](_0x120cf3.commentId),
          (_0x2fbfc6.count += 1));
        return;
      }
      _0x2d47b4.set(_0x28a9df, {
        ..._0x120cf3,
        commentIds: [_0x120cf3.commentId],
        count: 1,
      });
    }),
    Array.from(_0x2d47b4.values())
  );
}
let X = class extends _0xa22183 {
  constructor(
    _0x49a410,
    _0x3f8ff7,
    _0x37f7bd,
    _0x1451de,
    _0x2d2411,
    _0x2f6b32,
    _0x2cb466,
    _0x498764,
    _0x2e2ec0,
    _0x275738,
  ) {
    (super(),
      (this._renderContext = _0x49a410),
      (this._commandService = _0x3f8ff7),
      (this._instanceService = _0x37f7bd),
      (this._elementService = _0x1451de),
      (this._elementStateService = _0x2d2411),
      (this._uiStateService = _0x2f6b32),
      (this._draftService = _0x2cb466),
      (this._commentModel = _0x498764),
      (this._panelService = _0x2e2ec0),
      (this._themeService = _0x275738),
      Y(this, "_overlay", undefined),
      (this._overlay = new _0x16bdd7("board-thread-comment-overlay", {
        ...this._getColors(),
        zoomRatio: 1,
        markers: [],
        underlines: [],
      })),
      (this._overlay["zIndex"] = _0xba0186.transientNavigation + 1),
      this._renderContext["scene"].addObject(this._overlay, _0x1c5f5a.overlay),
      this.disposeWithMe(
        _0x106a1b(
          this._overlay["onPointerDown$"].subscribeEvent(
            (_0x3f4a2f, _0x40741c) => this._onOverlayPointerDown(_0x40741c),
          ),
        ),
      ),
      this.disposeWithMe(
        _0x106a1b(
          this._overlay["onPointerLeave$"].subscribeEvent(() =>
            this._overlay["clearHover"](),
          ),
        ),
      ),
      this.disposeWithMe(
        _0x106a1b(
          this._renderContext["scene"].onPointerDown$["subscribeEvent"](
            (_0x905148, _0x3d74f1) => this._onPointerDown(_0x905148, _0x3d74f1),
          ),
        ),
      ),
      this.disposeWithMe(
        _0x106a1b(
          this._renderContext["scene"].onPointerMove$["subscribeEvent"](
            (_0x503b42) => this._onPointerMove(_0x503b42),
          ),
        ),
      ),
      this.disposeWithMe(
        _0x106a1b(
          this._elementStateService["state$"]
            .pipe(_0x39dc39(), _0x515920(this.dispose$))
            .subscribe(([_0x3299fa, _0x48b436]) => {
              var _0xd37964;
              this._draftService["placementType"] !== _0x4dd54f.UNIVER_BOARD ||
                !_0x48b436.focusedId ||
                !_0x48b436.context ||
                (_0x3299fa.focusedId === _0x48b436.focusedId &&
                  ((_0xd37964 = _0x3299fa.context) == null
                    ? undefined
                    : _0xd37964.unitId) === _0x48b436.context["unitId"] &&
                  _0x3299fa.context["subUnitId"] ===
                    _0x48b436.context["subUnitId"]) ||
                this._placeElement(
                  _0x48b436.context["unitId"],
                  _0x48b436.context["subUnitId"],
                  _0x48b436.focusedId,
                );
            }),
        ),
      ),
      this.disposeWithMe(
        this._commentModel["commentUpdate$"]
          .pipe(_0x515920(this.dispose$))
          .subscribe((_0xe50dd5) => {
            _0xe50dd5.unitId === this._renderContext["unitId"] &&
              this._syncOverlay();
          }),
      ),
      [
        this._panelService["activeCommentId$"],
        this._panelService["hoveredCommentId$"],
      ].forEach((_0x2ceb00) => {
        this.disposeWithMe(
          _0x2ceb00
            .pipe(_0x515920(this.dispose$))
            .subscribe(() => this._syncOverlay()),
        );
      }),
      [
        this._elementService["elementAdd$"],
        this._elementService["elementUpdate$"],
        this._elementService["elementRemove$"],
      ].forEach((_0x40f3f8) => {
        this.disposeWithMe(
          _0x40f3f8.pipe(_0x515920(this.dispose$)).subscribe((_0x5dcc57) => {
            _0x5dcc57.some(
              (_0x5c41cf) => _0x5c41cf.unitId === this._renderContext["unitId"],
            ) && this._syncOverlay();
          }),
        );
      }),
      this.disposeWithMe(
        this._uiStateService["state$"]
          .pipe(
            _0x78c8f(
              (_0x2663c2, _0x37b076) =>
                _0x2663c2.zoomRatio === _0x37b076.zoomRatio,
            ),
            _0x515920(this.dispose$),
          )
          .subscribe(() => this._syncOverlay()),
      ),
      this._listenToolSwitch(),
      this.disposeWithMe(
        this._draftService["placementType$"]
          .pipe(_0x515920(this.dispose$))
          .subscribe((_0x36c2f3) => {
            _0x36c2f3 !== _0x4dd54f.UNIVER_BOARD &&
              this._overlay["updateState"]({
                previewMarker: null,
                previewUnderline: null,
              });
          }),
      ),
      this.disposeWithMe(
        this._themeService["currentTheme$"]
          .pipe(_0x515920(this.dispose$))
          .subscribe(() => this._syncOverlay()),
      ),
      this._syncOverlay());
  }
  _listenToolSwitch() {
    this.disposeWithMe(
      this._uiStateService["state$"]
        .pipe(
          _0x4efdfa((_0x37509c) => _0x37509c.activeTool),
          _0x78c8f(),
          _0x39dc39(),
          _0x515920(this.dispose$),
        )
        .subscribe(() => {
          this._draftService["placementType"] === _0x4dd54f.UNIVER_BOARD &&
            this._draftService["cancel"]();
        }),
    );
  }
  _placeElement(_0x3a0b5e, _0x97b5a4, _0xd94a56) {
    _0x3a0b5e === this._renderContext["unitId"] &&
      (this._draftService["place"]({
        unitId: _0x3a0b5e,
        subUnitId: _0x97b5a4,
        anchor: {
          kind: _0x407545.BOARD_ELEMENT,
          pageId: _0x97b5a4,
          elementId: _0xd94a56,
        },
      }),
      this._overlay["updateState"]({
        previewMarker: null,
        previewUnderline: null,
      }),
      this._commandService["executeCommand"](z.id).catch(() => undefined));
  }
  _onPointerDown(_0x3a719e, _0x38de1a) {
    if (
      this._draftService["placementType"] !== _0x4dd54f.UNIVER_BOARD ||
      (_0x3a719e.button ?? 0) !== 0
    )
      return;
    let _0x5290a2 = this._getModel();
    if (!_0x5290a2) {
      this._draftService["cancel"]();
      return;
    }
    let _0x571e03 = _0x5290a2.getActivePageId(),
      _0x5e67ab = this._toBoardPoint(_0x3a719e.offsetX, _0x3a719e.offsetY),
      _0x38517e = this._hitTest(_0x5290a2, _0x571e03, _0x5e67ab);
    (this._draftService["place"]({
      unitId: _0x5290a2.getUnitId(),
      subUnitId: _0x571e03,
      anchor: _0x38517e
        ? {
            kind: _0x407545.BOARD_ELEMENT,
            pageId: _0x571e03,
            elementId: _0x38517e.elementId,
          }
        : { kind: _0x407545.BOARD_POSITION, pageId: _0x571e03, ..._0x5e67ab },
    }),
      this._overlay["updateState"]({
        previewMarker: null,
        previewUnderline: null,
      }),
      _0x38de1a.stopPropagation(),
      this._commandService["executeCommand"](z.id).catch(() => undefined));
  }
  _onPointerMove(_0x1b164c) {
    if (this._draftService["placementType"] !== _0x4dd54f.UNIVER_BOARD) return;
    let _0x5165e1 = this._getModel();
    if (!_0x5165e1) return;
    let _0x31bb8b = _0x5165e1.getActivePageId(),
      _0x778026 = this._toBoardPoint(_0x1b164c.offsetX, _0x1b164c.offsetY),
      _0x527386 = this._hitTest(_0x5165e1, _0x31bb8b, _0x778026),
      _0x1f22d7 = _0x527386
        ? this._getElementUnderline(_0x527386.elementId)
        : null;
    if (_0x1f22d7) {
      this._overlay["updateState"]({
        previewMarker: _0x778026,
        previewUnderline: _0x1f22d7,
      });
      return;
    }
    this._overlay["updateState"]({
      previewMarker: _0x778026,
      previewUnderline: null,
    });
  }
  _onOverlayPointerDown(_0x536626) {
    let _0x2026bc = this._getModel(),
      _0x2271ca = this._overlay["hitCommentId"];
    !_0x2026bc ||
      !_0x2271ca ||
      (this._panelService["setActiveComment"]({
        unitId: _0x2026bc.getUnitId(),
        subUnitId: _0x2026bc.getActivePageId(),
        commentId: _0x2271ca,
        trigger: "board-canvas",
      }),
      _0x536626.stopPropagation(),
      this._commandService["executeCommand"](z.id).catch(() => undefined));
  }
  _syncOverlay() {
    let _0x49305f = this._getModel();
    if (!_0x49305f) {
      this._overlay["updateState"]({
        markers: [],
        underlines: [],
        focusedCommentIds: [],
        focusOutlines: [],
      });
      return;
    }
    let _0x3dd7c7 = _0x49305f.getActivePageId(),
      _0x348538 = [],
      _0x338c09 = new Map();
    (this._commentModel["query"]({
      unitIds: [_0x49305f.getUnitId()],
      subUnitIds: [_0x3dd7c7],
      anchorKinds: [_0x407545.BOARD_ELEMENT, _0x407545.BOARD_POSITION],
      resolved: false,
    }).forEach(({ root: _0x29905d }) => {
      let _0x28a686 = _0x14823a(_0x29905d.ref);
      if (
        (_0x28a686 == null ? undefined : _0x28a686.kind) ===
        _0x407545.BOARD_POSITION
      )
        _0x348538.push({
          commentId: _0x29905d.id,
          x: _0x28a686.x,
          y: _0x28a686.y,
        });
      else {
        if (
          (_0x28a686 == null ? undefined : _0x28a686.kind) ===
          _0x407545.BOARD_ELEMENT
        ) {
          let _0xf974f7 = this._getElementUnderline(
            _0x28a686.elementId,
            _0x29905d.id,
          );
          _0xf974f7 && _0x338c09.set(_0x28a686.elementId, _0xf974f7);
        }
      }
    }),
      this._overlay["updateState"]({
        ...this._getColors(),
        zoomRatio: this._uiStateService["getState"]().zoomRatio,
        markers: Fe(_0x348538),
        underlines: Array.from(_0x338c09.values()),
        ...this._getFocusState(_0x49305f, _0x3dd7c7),
      }));
  }
  _getElementUnderline(_0x410e15, _0x43e403 = "") {
    let _0x1baad9 = this._getElementOutline(_0x410e15);
    if (!_0x1baad9) return null;
    let _0x2caf64 = this._uiStateService["getState"]().zoomRatio || 1;
    return {
      commentId: _0x43e403,
      left: _0x1baad9.left,
      top: _0x1baad9.top + _0x1baad9.height + 2 / _0x2caf64,
      width: _0x1baad9.width,
    };
  }
  _getElementOutline(_0x1f1db0) {
    var _0x316372;
    let _0x1c4a6e = this._getModel();
    if (!_0x1c4a6e) return null;
    let _0x3d9d77 = this._renderContext["scene"],
      _0x5c8631 = _0x588562(_0x1c4a6e.getUnitId(), _0x1f1db0),
      _0x2c2040 =
        _0x3d9d77.getObject(_0x5c8631) ??
        ((_0x316372 = _0x3d9d77.getObjectIncludeInGroup) == null
          ? undefined
          : _0x316372.call(_0x3d9d77, _0x5c8631));
    if (!_0x2c2040) return null;
    let _0x41c4d5 = _0x2c2040.getRealBound();
    return {
      left: _0x41c4d5.left,
      top: _0x41c4d5.top,
      width: _0x41c4d5.width,
      height: _0x41c4d5.height,
    };
  }
  _getFocusState(_0x6524f3, _0x432e63) {
    let _0x61f66a = [],
      _0x62af01 = new Map();
    return (
      [
        this._panelService["activeCommentId"],
        this._panelService["hoveredCommentId"],
      ].forEach((_0x5c2ba2) => {
        if (
          !_0x5c2ba2 ||
          _0x5c2ba2.unitId !== _0x6524f3.getUnitId() ||
          _0x5c2ba2.subUnitId !== _0x432e63
        )
          return;
        let _0x4fff85 = this._commentModel["getComment"](
          _0x5c2ba2.unitId,
          _0x5c2ba2.subUnitId,
          _0x5c2ba2.commentId,
        );
        if (!_0x4fff85) return;
        _0x61f66a.push(_0x5c2ba2.commentId);
        let _0x5deea7 = _0x14823a(_0x4fff85.ref);
        if (
          (_0x5deea7 == null ? undefined : _0x5deea7.kind) ===
            _0x407545.BOARD_ELEMENT &&
          !_0x62af01.has(_0x5deea7.elementId)
        ) {
          let _0x418c8d = this._getElementOutline(_0x5deea7.elementId);
          _0x418c8d && _0x62af01.set(_0x5deea7.elementId, _0x418c8d);
        }
      }),
      {
        focusedCommentIds: _0x61f66a,
        focusOutlines: Array.from(_0x62af01.values()),
      }
    );
  }
  _hitTest(_0xc0405d, _0x2042dc, _0x1a14ac) {
    return _0x5d3cde({
      elementData: this._elementService["getElementData"](
        _0xc0405d.getUnitId(),
        _0x2042dc,
      ),
      elementOrder: this._elementService["getElementOrder"](
        _0xc0405d.getUnitId(),
        _0x2042dc,
      ),
      point: _0x1a14ac,
    });
  }
  _getColors() {
    return {
      accentColor: this._themeService["getColorFromTheme"]("yellow.400"),
      foregroundColor: this._themeService["getColorFromTheme"]("gray.900"),
      outlineColor: this._themeService["getColorFromTheme"]("white"),
    };
  }
  _getModel() {
    return (
      this._instanceService["getUnit"](
        this._renderContext["unitId"],
        _0x4dd54f.UNIVER_BOARD,
      ) ?? null
    );
  }
  _toBoardPoint(_0x8bf0fb, _0x200d9c) {
    return q(_0x8bf0fb, _0x200d9c, this._uiStateService["getState"]());
  }
};
X = G(
  [
    W(1, _0x2264b3),
    W(2, _0x36b866),
    W(3, _0x598c87),
    W(4, _0x317a96),
    W(5, _0x4e88af),
    W(6, _0xb6959c(_0xec52b7)),
    W(7, _0xb6959c(_0x27de81)),
    W(8, _0xb6959c(_0x4f29e7)),
    W(9, _0xb6959c(_0x3b402e)),
  ],
  X,
);
function Ie(_0x21ec64) {
  let _0x3b4787 = _0x21ec64.get(_0x36b866),
    _0x25ca3a = _0x21ec64.get(_0x481b80);
  return _0x2003c2([
    _0x3b4787.getCurrentTypeOfUnit$(_0x4dd54f.UNIVER_BOARD),
    _0x25ca3a.permissionPointUpdate$["pipe"](_0x515822(undefined)),
  ]).pipe(
    _0x4efdfa(
      ([_0x14173e]) =>
        !_0x14173e ||
        !_0x30a68a(
          _0x25ca3a,
          _0x14173e.getUnitId(),
          _0x14173e.getUnitId(),
          _0x41b477.Comment,
        ),
    ),
  );
}
function Z(_0x125e38) {
  return {
    id: V.id,
    type: _0x3b2966.BUTTON,
    icon: "InsertCommentDoubleIcon",
    title: "boards-thread-comment-ui.addComment",
    tooltip: "boards-thread-comment-ui.addComment",
    hidden$: _0x5b1766(_0x125e38, _0x4dd54f.UNIVER_BOARD),
    disabled$: Ie(_0x125e38),
  };
}
const Le = {
  [_0x411f87.ELEMENT]: {
    [_0x21ead4.OTHERS]: { [V.id]: { order: 0, menuItemFactory: Z } },
  },
  [_0x411f87.SELECTION]: {
    [_0x21ead4.OTHERS]: { [V.id]: { order: 0, menuItemFactory: Z } },
  },
  [_0x2419c1.BOARD]: { [V.id]: { order: 10, menuItemFactory: Z } },
};
let Q = class extends _0x4f641e {
  constructor(
    _0x4fc733,
    _0x25ed00,
    _0x54b6dd,
    _0x2b4967,
    _0x513b96,
    _0x24fc17,
  ) {
    (super(),
      [V, z, B].forEach((_0x3ea85b) =>
        this.disposeWithMe(_0x4fc733.registerCommand(_0x3ea85b)),
      ),
      _0x25ed00.mergeMenu(Le),
      this.disposeWithMe(
        _0x54b6dd.register({
          id: "boards-thread-comment-ui.view-selection.add-comment",
          icon: _0x5d08b4,
          label: () => _0x2b4967.t("boards-thread-comment-ui.addComment"),
          order: 100,
          group: "auxiliary",
          placement: "view-selection",
          enabled: () => {
            let _0x241580 = _0x24fc17.getCurrentUnitOfType(
              _0x4dd54f.UNIVER_BOARD,
            );
            return (
              !!_0x241580 &&
              _0x30a68a(
                _0x513b96,
                _0x241580.getUnitId(),
                _0x241580.getUnitId(),
                _0x41b477.Comment,
              )
            );
          },
          onClick: async (_0x236a24) => {
            await _0x236a24.executeCommand(V.id);
          },
        }),
      ),
      this.disposeWithMe(
        _0x54b6dd.register({
          id: "boards-thread-comment-ui.top-right.open-comments",
          availableInViewing: true,
          icon: _0x5d08b4,
          label: () => _0x2b4967.t("boards-thread-comment-ui.openComments"),
          order: 100,
          group: "auxiliary",
          placement: "top-right-before-history",
          menuItemId: z.id,
          onClick: async (_0x54f7e3) => {
            await _0x54f7e3.executeCommand(z.id);
          },
        }),
      ),
      this.disposeWithMe(
        _0x54b6dd.register({
          id: "boards-thread-comment-ui.toolbar.add-comment",
          availableInViewing: true,
          icon: _0x20e8af,
          label: () => _0x2b4967.t("boards-thread-comment-ui.addComment"),
          order: 100,
          group: "auxiliary",
          menuItemId: B.id,
          enabled: () => {
            let _0x2210f4 = _0x24fc17.getCurrentUnitOfType(
              _0x4dd54f.UNIVER_BOARD,
            );
            return (
              !!_0x2210f4 &&
              _0x30a68a(
                _0x513b96,
                _0x2210f4.getUnitId(),
                _0x2210f4.getUnitId(),
                _0x41b477.Comment,
              )
            );
          },
          onClick: async (_0x33e0d3) => {
            await _0x33e0d3.executeCommand(B.id);
          },
        }),
      ));
  }
};
Q = G(
  [
    W(0, _0x2264b3),
    W(1, _0x40b4cb),
    W(2, _0xb6959c(_0xdf7f3a)),
    W(3, _0xb6959c(_0x8b1191)),
    W(4, _0x481b80),
    W(5, _0x36b866),
  ],
  Q,
);
const Re = [[K], [Q]];
let $ = class extends _0x10d286 {
  constructor(_0x1737b5 = U, _0x1ccc71, _0xda4706, _0x374c2c) {
    (super(),
      (this._config = _0x1737b5),
      (this._injector = _0x1ccc71),
      (this._configService = _0xda4706),
      (this._renderManagerService = _0x374c2c));
    let { ..._0x44447f } = _0x29bedd({}, U, this._config);
    this._configService["setConfig"](H, _0x44447f);
  }
  onStarting() {
    (Re.forEach((_0x13c043) => {
      this._injector["add"](_0x13c043);
    }),
      this._injector["get"](K));
  }
  onRendered() {
    (this._renderManagerService["registerRenderModule"](
      _0x4dd54f.UNIVER_BOARD,
      [X],
    ),
      this._injector["get"](Q));
  }
};
(Y($, "pluginName", "UNIVER_BOARDS_THREAD_COMMENT_UI_PLUGIN"),
  Y($, "packageName", ke),
  Y($, "version", Ae),
  Y($, "type", _0x4dd54f.UNIVER_BOARD),
  ($ = G(
    [
      _0x4533ae(
        _0x3092f4,
        _0x468f6f,
        _0x3daab4,
        _0x14b96c,
        _0x258722,
        _0x3822a6,
      ),
      W(1, _0xb6959c(_0x1aaacf)),
      W(2, _0x57d0e8),
      W(3, _0x51254b),
    ],
    $,
  )));
export {
  H as BOARDS_THREAD_COMMENT_UI_PLUGIN_CONFIG_KEY,
  z as OpenBoardCommentPanelOperation,
  B as StartBoardCommentPlacementOperation,
  $ as UniverBoardsThreadCommentUIPlugin,
};
