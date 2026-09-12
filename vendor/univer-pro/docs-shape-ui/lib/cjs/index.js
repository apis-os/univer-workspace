Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/shape-editor-ui"),
  t = require("@univerjs/docs-ui"),
  n = require("@univerjs/ui"),
  r = require("@univerjs-pro/docs-shape"),
  i = require("@univerjs-pro/engine-shape"),
  a = require("@univerjs-pro/shape-editor"),
  o = require("@univerjs/core"),
  s = require("@univerjs/docs"),
  c = require("@univerjs/docs-drawing"),
  l = require("@univerjs/engine-render"),
  u = require("@univerjs/drawing"),
  d = require("@univerjs/drawing-ui"),
  f = require("react/jsx-runtime"),
  p = require("rxjs"),
  m = require("@univerjs-pro/license"),
  h = require("@univerjs/docs-drawing-ui"),
  g = require("@univerjs/icons"),
  _ = require("react");
function v(_0x559e9b, _0x5946bf) {
  if (_0x5946bf) {
    if (
      (0, i.isConnectorShape)(_0x559e9b) &&
      (_0x5946bf.startArrow || _0x5946bf.endArrow)
    )
      return {
        ln: {
          startArrow: _0x5946bf.startArrow
            ? {
                type: i.ShapeArrowTypeEnum["Arrow"],
                size: i.ShapeArrowSizeEnum["Medium"],
              }
            : undefined,
          endArrow: _0x5946bf.endArrow
            ? {
                type: i.ShapeArrowTypeEnum["Arrow"],
                size: i.ShapeArrowSizeEnum["Large"],
              }
            : undefined,
        },
      };
    if (
      _0x559e9b === i.ShapeTypeEnum["Rect"] &&
      (_0x5946bf.horizontal || _0x5946bf.vertical)
    )
      return (0, a.createShapeTextBoxShapeData)({
        fill: { fillType: i.ShapeFillEnum["SolidFill"], color: "#3B82F6" },
        isHorizontal: !!_0x5946bf.horizontal,
        stroke: {
          lineStrokeType: i.ShapeLineTypeEnum["SolidLine"],
          width: 1,
          color: "#2563EB",
        },
      });
  }
}
function y(_0x40e37b, _0x45a9e4) {
  var _0x51c76b;
  let _0x339c4c = _0x45a9e4.segmentId ?? "",
    _0x11c1b3 =
      (_0x51c76b = _0x40e37b.getSelfOrHeaderFooterModel(_0x339c4c)) == null
        ? undefined
        : _0x51c76b.getBody();
  if (!_0x11c1b3) return null;
  let _0x436a21 = _0x11c1b3.paragraphs ?? [],
    _0x44f9d7 =
      _0x436a21.find((_0x3dea30) => {
        let _0x53b78b = (0, o.getParagraphContentStartOffset)(
          _0x11c1b3,
          _0x3dea30,
        );
        return (
          _0x45a9e4.startOffset >= _0x53b78b &&
          _0x45a9e4.startOffset <= _0x3dea30.startIndex
        );
      }) ?? _0x436a21[_0x436a21.length - 1];
  return _0x44f9d7
    ? {
        paragraphId: _0x44f9d7.paragraphId,
        segmentId: _0x339c4c,
        position: r.DocShapeAnchorPosition["OFFSET"],
        offset:
          _0x45a9e4.startOffset -
          (0, o.getParagraphContentStartOffset)(_0x11c1b3, _0x44f9d7),
      }
    : null;
}
function b(_0x3b65fe, _0x408e74, _0x302d85) {
  var _0x146faa, _0x5a27fc;
  if (!_0x302d85) return null;
  let _0x5e3756 =
    (_0x146faa = _0x3b65fe
      .get(l.IRenderManagerService)
      .getRenderUnitById(_0x408e74)) == null
      ? undefined
      : _0x146faa.with(t.DocParagraphMenuService).activeTarget;
  if (!_0x5e3756) return null;
  let _0x2e9914 =
    _0x302d85 === "below"
      ? {
          startOffset: _0x5e3756.moveRange["endOffset"],
          endOffset: _0x5e3756.moveRange["endOffset"],
        }
      : _0x5e3756.menuRange;
  return {
    startOffset: _0x2e9914.startOffset,
    endOffset: _0x2e9914.endOffset,
    collapsed: _0x2e9914.startOffset === _0x2e9914.endOffset,
    segmentId:
      ((_0x5a27fc = _0x5e3756.paragraph) == null
        ? undefined
        : _0x5a27fc.segmentId) ?? "",
  };
}
const x = {
    type: o.CommandType["COMMAND"],
    id: "doc.command.menu-insert-shape",
    handler: async (_0x2a4430, _0x4c5ba4) => {
      let _0x25bb3a = _0x2a4430
        .get(o.IUniverInstanceService)
        .getCurrentUnitOfType(o.UniverInstanceType["UNIVER_DOC"]);
      if (!_0x25bb3a) return false;
      let _0x2fd8f1 = _0x2a4430.get(o.ICommandService),
        _0x142ec1 = _0x25bb3a.getUnitId(),
        _0x4a2eeb = _0x4c5ba4.shapeId ?? (0, o.generateRandomId)(),
        _0x229ab8 = _0x4c5ba4.width ?? r.DEFAULT_DOC_SHAPE_WIDTH,
        _0x1b7ed8 = _0x4c5ba4.height ?? r.DEFAULT_DOC_SHAPE_HEIGHT,
        _0x622037 =
          _0x4c5ba4.shapeData ?? v(_0x4c5ba4.value, _0x4c5ba4.enhanceParams),
        _0x16a3a6 =
          b(_0x2a4430, _0x142ec1, _0x4c5ba4.paragraphMenuPlacement) ??
          _0x2a4430.get(s.DocSelectionManagerService).getActiveTextRange();
      if (!_0x16a3a6) return false;
      let _0x223b54 = y(_0x25bb3a, _0x16a3a6);
      return _0x223b54
        ? !!_0x2fd8f1.syncExecuteCommand(r.InsertDocShapeCommand["id"], {
            unitId: _0x142ec1,
            shapeId: _0x4a2eeb,
            shapeType: _0x4c5ba4.value,
            shapeData: _0x622037,
            transform: { width: _0x229ab8, height: _0x1b7ed8 },
            placement: {
              wrappingStyle: c.TextWrappingStyle["INLINE"],
              anchor: _0x223b54,
            },
          })
        : false;
    },
  },
  S = "doc.shape.edit.panel",
  C = "docs-shape-ui.ribbon.shape-format",
  w = "doc.shape.object-list.panel",
  T = (0, o.createInternalEditorID)("SHAPE_TEXT"),
  E = "doc.shape.text.float-menu",
  D = {
    id: "doc.operation.open-shape-object-list-panel",
    type: o.CommandType["COMMAND"],
    handler: (_0xc8c545, _0xc210ce) => {
      let _0x36cfab = _0xc8c545.get(n.ISidebarService),
        _0x29c1ae = _0xc8c545.get(o.LocaleService),
        _0x2ac02f = _0xc8c545.get(u.IDrawingManagerService);
      return (_0xc210ce == null ? undefined : _0xc210ce.value) === "close"
        ? (_0x36cfab.close(w), true)
        : (_0x36cfab.open({
            id: w,
            header: {
              title: _0x29c1ae.t("docs-shape-ui.objectListPanel.title"),
            },
            children: { label: w },
            onClose: () => {
              _0x2ac02f.focusDrawing(null);
            },
            width: 360,
          }),
          true);
    },
  },
  O = {
    type: o.CommandType["OPERATION"],
    id: "doc.operation.open-doc-shape-format-panel",
    handler() {
      return true;
    },
  };
function k(_0x26c471) {
  let _0x5014a2 = _0x26c471.get(u.IDrawingManagerService).getFocusDrawings(),
    _0x25913a = _0x5014a2.length === 1 ? _0x5014a2[0] : null;
  if (
    !_0x25913a ||
    _0x25913a.drawingType !== o.DrawingTypeEnum["DRAWING_SHAPE"]
  )
    return null;
  let _0x5989ec = _0x26c471.get(r.DocsShapeService),
    _0x14c705 = _0x5989ec.getShapeTypeById(
      _0x25913a.unitId,
      _0x25913a.subUnitId,
      _0x25913a.drawingId,
    ),
    _0xf5667b = _0x5989ec.getShapeDataById(
      _0x25913a.unitId,
      _0x25913a.subUnitId,
      _0x25913a.drawingId,
    );
  return _0x14c705 === undefined || !_0xf5667b
    ? null
    : { drawing: _0x25913a, shapeData: _0xf5667b, shapeType: _0x14c705 };
}
const A = {
    id: "doc.operation.apply-shape-quick-style",
    type: o.CommandType["OPERATION"],
    handler: (_0x1ec65e, _0xeec98c) => {
      let _0x26c5f6 = k(_0x1ec65e),
        _0x37de26 = (0, a.getShapeQuickStylePreset)(
          (_0xeec98c == null ? undefined : _0xeec98c.presetId) ??
            (_0xeec98c == null ? undefined : _0xeec98c.value) ??
            "",
        );
      if (
        !_0x26c5f6 ||
        !_0x37de26 ||
        _0x37de26.type !== (0, a.getShapeQuickStyleType)(_0x26c5f6.shapeData)
      )
        return false;
      let _0x1cbcb5 = (0, a.applyQuickStyleToShapeData)(
        _0x26c5f6.shapeData,
        _0x37de26,
      );
      if (!_0x1cbcb5) return false;
      let { drawing: _0x2390fb } = _0x26c5f6;
      return _0x1ec65e
        .get(o.ICommandService)
        .executeCommand(r.UpdateDocShapeDataCommand["id"], {
          unitId: _0x2390fb.unitId,
          shapeId: _0x2390fb.drawingId,
          shapeData: _0x1cbcb5,
          oldShapeJSON: { oldShapeData: _0x26c5f6.shapeData },
        });
    },
  },
  j = {
    id: "doc.operation.update-shape-type",
    type: o.CommandType["OPERATION"],
    handler: (_0x5187eb, _0x55b9a8) => {
      let _0x264516 = k(_0x5187eb),
        _0x996950 =
          (_0x55b9a8 == null ? undefined : _0x55b9a8.shapeType) ??
          (_0x55b9a8 == null ? undefined : _0x55b9a8.value);
      if (
        !_0x264516 ||
        !_0x996950 ||
        (0, i.isConnectorShape)(_0x264516.shapeType) ||
        (0, i.isConnectorShape)(_0x996950)
      )
        return false;
      let _0x1fbe4e = (0, a.cloneShapeDataForType)(
        _0x264516.shapeData,
        _0x996950,
      );
      if (!_0x1fbe4e) return false;
      let { drawing: _0x27fda4 } = _0x264516;
      return _0x5187eb
        .get(o.ICommandService)
        .executeCommand(r.UpdateDocShapeDataCommand["id"], {
          unitId: _0x27fda4.unitId,
          shapeId: _0x27fda4.drawingId,
          shapeType: _0x996950,
          shapeData: _0x1fbe4e,
          replaceShapeData: true,
          oldShapeJSON: {
            oldShapeType: _0x264516.shapeType,
            oldShapeData: _0x264516.shapeData,
          },
        });
    },
  };
function M(_0x1132ed, _0x652466) {
  return function (_0x4b773b, _0x3cc8f0) {
    _0x652466(_0x4b773b, _0x3cc8f0, _0x1132ed);
  };
}
function N(_0x15df6b, _0x591247, _0x44d10a, _0x42850f) {
  var _0xf1256e = arguments.length,
    _0xbeb74d =
      _0xf1256e < 3
        ? _0x591247
        : _0x42850f === null
          ? (_0x42850f = Object.getOwnPropertyDescriptor(_0x591247, _0x44d10a))
          : _0x42850f,
    _0x4295e2;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0xbeb74d = Reflect.decorate(_0x15df6b, _0x591247, _0x44d10a, _0x42850f);
  else {
    for (var _0x2e20ff = _0x15df6b.length - 1; _0x2e20ff >= 0; _0x2e20ff--)
      (_0x4295e2 = _0x15df6b[_0x2e20ff]) &&
        (_0xbeb74d =
          (_0xf1256e < 3
            ? _0x4295e2(_0xbeb74d)
            : _0xf1256e > 3
              ? _0x4295e2(_0x591247, _0x44d10a, _0xbeb74d)
              : _0x4295e2(_0x591247, _0x44d10a)) || _0xbeb74d);
  }
  return (
    _0xf1256e > 3 &&
      _0xbeb74d &&
      Object.defineProperty(_0x591247, _0x44d10a, _0xbeb74d),
    _0xbeb74d
  );
}
let P = class extends o.Disposable {
  constructor(_0x1ed237, _0x1d58df) {
    (super(),
      (this._clipService = _0x1ed237),
      (this._drawingManagerService = _0x1d58df),
      this._registerImageShapeClipDelegate(),
      this._clipService["setCanUseShapeClip"](true),
      this.disposeWithMe({
        dispose: () => this._clipService["setCanUseShapeClip"](false),
      }));
  }
  _registerImageShapeClipDelegate() {
    let _0x26b9e4 = new Map(),
      _0x31854b = this._clipService["registerClipDelegate"](
        (_0x4159e6, _0x5127c2, _0x11a4a2, _0x4d9cd6, _0xecef77) => {
          let _0x31ec3a = _0x5127c2;
          if (_0x31ec3a === i.ShapeTypeEnum["None"] || _0x5127c2 === "custom")
            return false;
          try {
            let _0x425ef7 = _0x26b9e4.get(_0x5127c2);
            return (
              _0x425ef7 ||
                ((_0x425ef7 = new i["ShapeModel"](
                  _0x31ec3a,
                  "clip-" + _0x5127c2,
                )),
                _0x26b9e4.set(_0x5127c2, _0x425ef7)),
              _0x425ef7.clearAdjustValue(),
              _0xecef77 &&
                Object.keys(_0xecef77).length > 0 &&
                _0x425ef7.setShapeData({ adjustValues: _0xecef77 }, true),
              _0x425ef7.updateContext({ width: _0x11a4a2, height: _0x4d9cd6 }),
              _0x425ef7.buildClipPath(_0x4159e6, {
                left: 0,
                top: 0,
                width: _0x11a4a2,
                height: _0x4d9cd6,
              })
            );
          } catch {
            return false;
          }
        },
      );
    (this.disposeWithMe(_0x31854b),
      this.disposeWithMe({ dispose: () => _0x26b9e4.clear() }));
  }
  clipByShape(_0x37ede7, _0xcdb2d, _0x88a3b9, _0x25e9d7, _0x25863f) {
    let _0x1b5859 = this._drawingManagerService["getDrawingData"](
      _0x37ede7,
      _0xcdb2d,
    )[_0x88a3b9];
    !_0x1b5859 ||
      _0x1b5859.drawingType !== o.DrawingTypeEnum["DRAWING_IMAGE"] ||
      this._drawingManagerService["featurePluginUpdateNotification"]([
        { ..._0x1b5859, prstGeom: _0x25e9d7, adjustValues: _0x25863f },
      ]);
  }
};
P = N(
  [
    M(0, (0, o.Inject)(d.DrawingImageClipService)),
    M(1, (0, o.Inject)(u.IDrawingManagerService)),
  ],
  P,
);
const F = "doc.shape.picker.component",
  I = "doc.image-clip.shape-picker.component";
function ee({ onShapeClick: _0xcf2cf1, excludeGroups: _0x46a25c }) {
  return (0, f.jsx)(e.ShapePickerPanel, {
    excludeGroups: _0x46a25c,
    onShapeClick: _0xcf2cf1,
    scrollContainer: "parent",
  });
}
function L() {
  let _0x552d54 = (0, n.useDependency)(u.IDrawingManagerService),
    _0x247724 = (0, n.useDependency)(P);
  return (0, f.jsx)(e.ShapePickerDropdown, {
    buttonLabel: "docs-shape-ui.crop.shape",
    excludeGroups: [e.ShapeGroupEnum["Line"]],
    onShapeClick: (_0x4a6f52) => {
      let _0x58dbe8 = _0x552d54
        .getFocusDrawings()
        .find(
          (_0x4666ab) =>
            _0x4666ab.drawingType === o.DrawingTypeEnum["DRAWING_IMAGE"],
        );
      if (!_0x58dbe8) return;
      let {
        unitId: _0x1219c2,
        subUnitId: _0x3aab02,
        drawingId: _0x59a6db,
      } = _0x58dbe8;
      _0x247724.clipByShape(_0x1219c2, _0x3aab02, _0x59a6db, _0x4a6f52.type);
    },
  });
}
function te() {
  let _0x592224 = (0, n.useDependency)(n.ComponentManager),
    _0x82c418 = (0, n.useDependency)(u.IDrawingManagerService),
    _0xd5a77c = (0, n.useDependency)(o.IUniverInstanceService),
    _0x28374d = _0x82c418.getFocusDrawings()[0],
    _0x326486 = _0x28374d ? _0xd5a77c.getUnitType(_0x28374d.unitId) : undefined,
    _0x5b50e9 =
      _0x326486 === o.UniverInstanceType["UNIVER_DOC"]
        ? I
        : _0x326486 === o.UniverInstanceType["UNIVER_SHEET"]
          ? "sheet.image-clip.shape-picker.component"
          : undefined,
    _0x2b7c12 = _0x5b50e9 ? _0x592224.get(_0x5b50e9) : undefined;
  return _0x2b7c12 ? (0, f.jsx)(_0x2b7c12, {}) : null;
}
function ne({ paragraphMenuPlacement: _0x3878a9 }) {
  let _0x5f0d5d = (0, n.useDependency)(o.ICommandService);
  return (0, f.jsx)(ee, {
    onShapeClick: (_0x96ecd9) => {
      _0x5f0d5d.executeCommand(x.id, {
        paragraphMenuPlacement: _0x3878a9,
        value: _0x96ecd9.type,
        enhanceParams: {
          endArrow: _0x96ecd9.endArrow,
          startArrow: _0x96ecd9.startArrow,
          horizontal: _0x96ecd9.horizontal,
          vertical: _0x96ecd9.vertical,
        },
      });
    },
  });
}
function re(_0x2b5fa3) {
  return (_0x2cd6bf) => ({
    id: x.id,
    type: n.MenuItemType["SELECTOR"],
    selections: [
      {
        label: {
          name: F,
          hoverable: false,
          selectable: false,
          props: _0x2b5fa3
            ? { id: x.id, paragraphMenuPlacement: _0x2b5fa3 }
            : { id: x.id },
        },
      },
    ],
    icon: "ShapeIcon",
    title: "docs-shape-ui.insertShape",
    tooltip: "docs-shape-ui.insertShape",
    hidden$: (0, n.getMenuHiddenObservable)(
      _0x2cd6bf,
      o.UniverInstanceType["UNIVER_DOC"],
    ),
  });
}
const ie = re(),
  ae = re("below"),
  oe = re("target");
function se(_0x39b968) {
  return {
    id: D.id,
    type: n.MenuItemType["BUTTON"],
    icon: "ObjectLayersIcon",
    title: "docs-shape-ui.objectListPanel.open",
    tooltip: "docs-shape-ui.objectListPanel.open",
    hidden$: (0, n.getMenuHiddenObservable)(
      _0x39b968,
      o.UniverInstanceType["UNIVER_DOC"],
    ),
  };
}
function R(_0x288e15, _0x1b0de2, _0x22acc9, _0x5e497a, _0x266335, _0x278ce4) {
  let _0x11da41 = {
    unitId: _0x1b0de2,
    shapeId: _0x5e497a,
    shapeData: _0x278ce4,
    oldShapeJSON: _0x266335,
  };
  return _0x288e15.executeCommand(r.UpdateDocShapeDataCommand["id"], _0x11da41);
}
function ce(_0x3f8c9d, _0x50bc12, _0x40349e, _0x379ed4, _0x572559, _0x4f5eb8) {
  let _0x31f97a = {
    unitId: _0x50bc12,
    shapeId: _0x379ed4,
    shapeData: _0x4f5eb8,
    oldShapeJSON: _0x572559,
  };
  return _0x3f8c9d.executeCommand(r.UpdateDocShapeDataCommand["id"], _0x31f97a);
}
const le = "docs-shape-ui.shape-format.quick-style-gallery",
  ue = "docs-shape-ui.shape-format.style-ribbon-control",
  de = "docs-shape-ui.shape-format.text-ribbon-control",
  fe = "docs-shape-ui.shape-format.formula-ribbon-control",
  pe = "docs-shape-ui.shape-format.wrapping-style-label",
  z = [
    {
      value: c.TextWrappingStyle["INLINE"],
      label: "docs-shape-ui.textWrap.inline",
      icon: "DocsShapeWrapInlineIcon",
    },
    {
      value: c.TextWrappingStyle["WRAP_SQUARE"],
      label: "docs-shape-ui.textWrap.square",
      icon: "DocsShapeWrapSquareIcon",
    },
    {
      value: c.TextWrappingStyle["WRAP_TOP_AND_BOTTOM"],
      label: "docs-shape-ui.textWrap.topAndBottom",
      icon: "DocsShapeWrapTopBottomIcon",
    },
    {
      value: c.TextWrappingStyle["BEHIND_TEXT"],
      label: "docs-shape-ui.textWrap.behindText",
      icon: "DocsShapeWrapBehindTextIcon",
    },
    {
      value: c.TextWrappingStyle["IN_FRONT_OF_TEXT"],
      label: "docs-shape-ui.textWrap.inFrontText",
      icon: "DocsShapeWrapInFrontOfTextIcon",
    },
  ];
function B() {
  let _0x9df57a = (0, n.useDependency)(o.ICommandService),
    _0x122455 = (0, n.useDependency)(u.IDrawingManagerService),
    _0x219735 = (0, n.useDependency)(r.DocsShapeService),
    _0x4cdd32 = () => {
      var _0x2187af;
      let _0x1dda66 = _0x122455.getFocusDrawings();
      if (
        _0x1dda66.length !== 1 ||
        ((_0x2187af = _0x1dda66[0]) == null
          ? undefined
          : _0x2187af.drawingType) !== o.DrawingTypeEnum["DRAWING_SHAPE"]
      )
        return null;
      let {
          unitId: _0x10b53b,
          subUnitId: _0xfb14af,
          drawingId: _0x24f74d,
        } = _0x1dda66[0],
        _0x2c6d91 = _0x219735.getShapeTypeById(_0x10b53b, _0xfb14af, _0x24f74d),
        _0x3c587b = _0x219735.getShapeDataById(_0x10b53b, _0xfb14af, _0x24f74d);
      return _0x2c6d91 === undefined || !_0x3c587b
        ? null
        : {
            unitId: _0x10b53b,
            subUnitId: _0xfb14af,
            drawingId: _0x24f74d,
            shapeType: _0x2c6d91,
            shapeData: _0x3c587b,
          };
    },
    _0x442eb1 = (0, n.useObservable)(
      () =>
        new p.Observable((_0x52454d) => {
          let _0x1038cd = () => _0x52454d.next(_0x4cdd32()),
            _0x38a36f = _0x122455.focus$["subscribe"](_0x1038cd),
            _0x339875 = _0x9df57a.onCommandExecuted((_0x470a70) => {
              _0x470a70.id === r.UpdateDocShapeDataMutation["id"] &&
                _0x1038cd();
            });
          return (
            _0x1038cd(),
            () => {
              (_0x38a36f.unsubscribe(), _0x339875.dispose());
            }
          );
        }),
      _0x4cdd32(),
      false,
      [_0x9df57a, _0x219735, _0x122455],
    );
  return {
    selection: _0x442eb1,
    updateShapeData: (_0x478228) => {
      _0x442eb1 &&
        R(
          _0x9df57a,
          _0x442eb1.unitId,
          _0x442eb1.subUnitId,
          _0x442eb1.drawingId,
          { oldShapeData: _0x442eb1.shapeData },
          _0x478228,
        );
    },
  };
}
function me() {
  let { selection: _0x18dc2b, updateShapeData: _0x3e0d00 } = B();
  return _0x18dc2b
    ? (0, f.jsx)(e.ShapeStyleRibbonControl, {
        shapeData: _0x18dc2b.shapeData,
        shapeType: _0x18dc2b.shapeType,
        onUpdateShapeData: _0x3e0d00,
      })
    : null;
}
function he() {
  let _0x36c8f5 = (0, n.useDependency)(o.ICommandService),
    _0x53ca10 = (0, n.useDependency)(o.LocaleService),
    { selection: _0x3f6e90 } = B();
  return _0x3f6e90
    ? (0, f.jsx)(e.ShapeQuickStyleGallery, {
        type: (0, a.getShapeQuickStyleType)(_0x3f6e90.shapeData),
        ariaLabel: _0x53ca10.t("docs-shape-ui.quickStyles"),
        activePresetId: (0, a.resolveActiveShapeQuickStylePresetId)(
          _0x3f6e90.shapeData,
        ),
        onSelect: (_0x325a52) =>
          _0x36c8f5.executeCommand(A.id, { presetId: _0x325a52 }),
      })
    : null;
}
function ge() {
  let { selection: _0x43a26d, updateShapeData: _0x248eeb } = B();
  return _0x43a26d
    ? (0, f.jsx)(e.ShapeTextRibbonControl, {
        fontFamilyPopupDataComponent: "docs-shape-format-font-family-menu",
        shapeData: _0x43a26d.shapeData,
        onUpdateShapeData: _0x248eeb,
      })
    : null;
}
function _e() {
  var _0x2a877f;
  let { selection: _0x370e4f, updateShapeData: _0x1f3218 } = B(),
    _0x4f3209 = (0, e.useFormulaShapeToolbar)({
      hostType: o.UniverInstanceType["UNIVER_DOC"],
      unitId: (_0x370e4f == null ? undefined : _0x370e4f.unitId) ?? "",
      subUnitId: (_0x370e4f == null ? undefined : _0x370e4f.subUnitId) ?? "",
      shapeId: (_0x370e4f == null ? undefined : _0x370e4f.drawingId) ?? "",
      shapeData: _0x370e4f == null ? undefined : _0x370e4f.shapeData,
      registerBinding: false,
      showLabels: true,
      dropdownSide: "bottom",
      onUpdateBinding: (_0x56c117) => _0x1f3218({ formulaBinding: _0x56c117 }),
    }),
    _0x53bac0 =
      ((_0x2a877f = _0x4f3209.extensionGroups) == null
        ? undefined
        : _0x2a877f
            .flatMap((_0x14ab75) => _0x14ab75.actions)
            .filter((_0x188c08) => _0x188c08.visible !== false)) ?? [];
  return _0x370e4f != null && _0x370e4f.shapeData["formulaBinding"]
    ? (0, f.jsx)(e.ShapeFormulaRibbonControl, {
        actions: _0x53bac0,
        panel: _0x4f3209.panel,
      })
    : null;
}
function ve({ value: _0x571255 }) {
  let _0x54334f = (0, n.useDependency)(o.LocaleService),
    _0x3e52c7 = z.find((_0x38c53e) => _0x38c53e.value === _0x571255) ?? z[0];
  return _0x3e52c7
    ? (0, f.jsx)("span", { children: _0x54334f.t(_0x3e52c7.label) })
    : null;
}
const ye = "docs-shape-ui.ribbon.shape-format.style-control",
  be = "docs-shape-ui.ribbon.shape-format.text-control",
  xe = "docs-shape-ui.ribbon.shape-format.formula-control",
  Se = "docs-shape-ui.ribbon.shape-format.arrange-forward",
  Ce = "docs-shape-ui.ribbon.shape-format.arrange-backward",
  we = "docs-shape-ui.ribbon.shape-format.arrange-front",
  Te = "docs-shape-ui.ribbon.shape-format.arrange-back",
  Ee = "docs-shape-ui.ribbon.shape-format.wrapping-style";
function De(_0x2a5f14) {
  let _0x3a49af = _0x2a5f14.get(o.ICommandService),
    _0x4b05ad = _0x2a5f14.get(u.IDrawingManagerService),
    _0x220d76 = _0x2a5f14.get(r.DocsShapeService);
  return new p["Observable"]((_0x169da2) => {
    let _0x1c3be1 = () => {
        let _0x27ace3 = V(_0x2a5f14),
          _0x5cfc36 = _0x27ace3
            ? _0x220d76.getShapeDataById(
                _0x27ace3.unitId,
                _0x27ace3.subUnitId,
                _0x27ace3.drawingId,
              )
            : null;
        _0x169da2.next(
          _0x5cfc36
            ? ((0, a.resolveActiveShapeQuickStylePresetId)(_0x5cfc36) ?? "")
            : "",
        );
      },
      _0x1131ed = _0x4b05ad.focus$["subscribe"](_0x1c3be1),
      _0x1277d0 = _0x3a49af.onCommandExecuted((_0x24e76a) => {
        _0x24e76a.id === r.UpdateDocShapeDataMutation["id"] && _0x1c3be1();
      });
    return (
      _0x1c3be1(),
      () => {
        (_0x1131ed.unsubscribe(), _0x1277d0.dispose());
      }
    );
  });
}
function V(_0x3e7b07) {
  var _0x6323a2;
  let _0x2db656 = _0x3e7b07.get(u.IDrawingManagerService).getFocusDrawings();
  return _0x2db656.length === 1 &&
    ((_0x6323a2 = _0x2db656[0]) == null ? undefined : _0x6323a2.drawingType) ===
      o.DrawingTypeEnum["DRAWING_SHAPE"]
    ? _0x2db656[0]
    : null;
}
function Oe(_0xd86c86) {
  return (_0xd86c86 == null ? undefined : _0xd86c86.layoutType) ===
    o.PositionedObjectLayoutType["WRAP_NONE"]
    ? _0xd86c86.behindDoc === o.BooleanNumber["TRUE"]
      ? c.TextWrappingStyle["BEHIND_TEXT"]
      : c.TextWrappingStyle["IN_FRONT_OF_TEXT"]
    : (_0xd86c86 == null ? undefined : _0xd86c86.layoutType) ===
        o.PositionedObjectLayoutType["WRAP_SQUARE"]
      ? c.TextWrappingStyle["WRAP_SQUARE"]
      : (_0xd86c86 == null ? undefined : _0xd86c86.layoutType) ===
          o.PositionedObjectLayoutType["WRAP_TOP_AND_BOTTOM"]
        ? c.TextWrappingStyle["WRAP_TOP_AND_BOTTOM"]
        : c.TextWrappingStyle["INLINE"];
}
function ke(_0x5c7ad5) {
  let _0x24392e = _0x5c7ad5.get(o.ICommandService),
    _0x2531c0 = _0x5c7ad5.get(u.IDrawingManagerService),
    _0x25c8c9 = _0x5c7ad5.get(o.IUniverInstanceService);
  return new p["Observable"]((_0x298861) => {
    let _0x56b2ef = () => {
        var _0x173926;
        let _0x342cdf = V(_0x5c7ad5),
          _0x347010 = _0x342cdf
            ? _0x25c8c9.getUnit(
                _0x342cdf.unitId,
                o.UniverInstanceType["UNIVER_DOC"],
              )
            : undefined;
        _0x298861.next(
          Oe(
            _0x342cdf
              ? _0x347010 == null ||
                (_0x173926 = _0x347010.getSnapshot().drawings) == null
                ? undefined
                : _0x173926[_0x342cdf.drawingId]
              : undefined,
          ),
        );
      },
      _0x24b480 = _0x2531c0.focus$["subscribe"](_0x56b2ef),
      _0x538640 = _0x24392e.onCommandExecuted((_0x38d996) => {
        _0x38d996.id === s.RichTextEditingMutation["id"] && _0x56b2ef();
      });
    return (
      _0x56b2ef(),
      () => {
        (_0x24b480.unsubscribe(), _0x538640.dispose());
      }
    );
  }).pipe((0, p.distinctUntilChanged)());
}
function H(_0x5244c5, _0x288fee = false) {
  let _0x514d02 = _0x5244c5.get(o.ICommandService),
    _0x129f58 = _0x5244c5.get(u.IDrawingManagerService),
    _0x389003 = _0x5244c5.get(r.DocsShapeService);
  return new p["Observable"]((_0x52c6e5) => {
    let _0x15020f = () => {
        let _0x3ad1b0 = V(_0x5244c5);
        if (!_0x3ad1b0) {
          _0x52c6e5.next(true);
          return;
        }
        let _0x52cd03 = _0x389003.getShapeDataById(
          _0x3ad1b0.unitId,
          _0x3ad1b0.subUnitId,
          _0x3ad1b0.drawingId,
        );
        _0x52c6e5.next(
          !_0x52cd03 || (_0x288fee && _0x52cd03.formulaBinding == null),
        );
      },
      _0x1bf0d0 = _0x129f58.focus$["subscribe"](_0x15020f),
      _0x2c43ad = _0x514d02.onCommandExecuted((_0x29a19c) => {
        _0x29a19c.id === r.UpdateDocShapeDataMutation["id"] && _0x15020f();
      });
    return (
      _0x15020f(),
      () => {
        (_0x1bf0d0.unsubscribe(), _0x2c43ad.dispose());
      }
    );
  });
}
function Ae(_0xdba9fd) {
  let _0x33a2a8 = _0xdba9fd.get(u.IDrawingManagerService),
    _0x10673e = _0xdba9fd.get(r.DocsShapeService);
  return _0x33a2a8.focus$["pipe"](
    (0, p.startWith)(_0x33a2a8.getFocusDrawings()),
    (0, p.map)(() => {
      let _0x30f479 = V(_0xdba9fd),
        _0x4fe247 = _0x30f479
          ? _0x10673e.getShapeTypeById(
              _0x30f479.unitId,
              _0x30f479.subUnitId,
              _0x30f479.drawingId,
            )
          : undefined;
      return _0x4fe247 === undefined || (0, i.isConnectorShape)(_0x4fe247);
    }),
  );
}
function je(_0x1fcc6f) {
  return {
    id: A.id,
    type: n.MenuItemType["SELECTOR"],
    icon: "PaintIcon",
    title: "shape-editor-ui.toolbar.quickStyles",
    tooltip: "shape-editor-ui.toolbar.quickStyles",
    selections: [{ label: { name: le, hoverable: false, selectable: false } }],
    value$: De(_0x1fcc6f),
    hidden$: H(_0x1fcc6f),
  };
}
function Me(_0x4535b1) {
  return {
    id: j.id,
    type: n.MenuItemType["SELECTOR"],
    icon: "ShapeIcon",
    title: "shape-editor-ui.toolbar.changeShape",
    tooltip: "shape-editor-ui.toolbar.changeShape",
    slot: true,
    selections: [
      {
        label: {
          name: e.SHAPE_CHANGE_PICKER_COMPONENT,
          hoverable: false,
          selectable: false,
        },
      },
    ],
    hidden$: Ae(_0x4535b1),
  };
}
function Ne(_0xba791a, _0x4eb4de, _0x4c634d = false) {
  return (_0x300f56) => ({
    id: _0xba791a,
    type: n.MenuItemType["BUTTON"],
    label: { name: _0x4eb4de, hoverable: false, selectable: false },
    hidden$: H(_0x300f56, _0x4c634d),
  });
}
const Pe = Ne(ye, ue),
  Fe = Ne(be, de),
  Ie = Ne(xe, fe, true);
function Le(_0x382f3f) {
  return {
    id: Ee,
    type: n.MenuItemType["SELECTOR"],
    icon: z[0].icon,
    label: pe,
    selectionsCommandId: c.UpdateDocDrawingWrappingStyleCommand["id"],
    selections: z.map(
      ({ icon: _0x387116, label: _0x5d2d45, value: _0x1c5445 }) => ({
        value: _0x1c5445,
        label: _0x5d2d45,
        icon: _0x387116,
        params: () => {
          let _0xbf03cc = V(_0x382f3f);
          return _0xbf03cc
            ? {
                unitId: _0xbf03cc.unitId,
                subUnitId: _0xbf03cc.subUnitId,
                drawings: [
                  {
                    unitId: _0xbf03cc.unitId,
                    subUnitId: _0xbf03cc.subUnitId,
                    drawingId: _0xbf03cc.drawingId,
                  },
                ],
                wrappingStyle: _0x1c5445,
              }
            : undefined;
        },
      }),
    ),
    value$: ke(_0x382f3f),
    hidden$: H(_0x382f3f),
  };
}
function U(_0x4678fb, _0x49ea59, _0x167dd8, _0x4c6771) {
  return (_0x1b87ee) => ({
    id: _0x4678fb,
    commandId: c.SetDocDrawingArrangeCommand["id"],
    type: n.MenuItemType["BUTTON"],
    icon: _0x167dd8,
    title: _0x4c6771,
    tooltip: _0x4c6771,
    hidden$: H(_0x1b87ee),
    params: () => {
      let _0x38a861 = V(_0x1b87ee);
      return _0x38a861
        ? {
            unitId: _0x38a861.unitId,
            subUnitId: _0x38a861.subUnitId,
            drawingIds: [_0x38a861.drawingId],
            arrangeType: _0x49ea59,
          }
        : undefined;
    },
  });
}
const Re = U(
    Se,
    o.ArrangeTypeEnum["forward"],
    "MoveUpIcon",
    "shape-editor-ui.arrange.forward",
  ),
  ze = U(
    Ce,
    o.ArrangeTypeEnum["backward"],
    "MoveDownIcon",
    "shape-editor-ui.arrange.backward",
  ),
  Be = U(
    we,
    o.ArrangeTypeEnum["front"],
    "TopmostIcon",
    "shape-editor-ui.arrange.front",
  ),
  Ve = U(
    Te,
    o.ArrangeTypeEnum["back"],
    "BottomIcon",
    "shape-editor-ui.arrange.back",
  );
function He(_0x4c62d2) {
  return {
    id: O.id,
    type: n.MenuItemType["BUTTON"],
    icon: "ShapeFormatSettingIcon",
    title: "docs-shape-ui.formatShape",
    tooltip: "docs-shape-ui.formatShape",
    hidden$: H(_0x4c62d2),
    params: () => {
      let _0xff59d9 = V(_0x4c62d2);
      return _0xff59d9
        ? {
            unitId: _0xff59d9.unitId,
            subUnitId: _0xff59d9.subUnitId,
            drawingId: _0xff59d9.drawingId,
          }
        : undefined;
    },
  };
}
const Ue = {
    [n.MenuManagerPosition["RIBBON"]]: {
      [C]: {
        order: 100,
        title: "docs-shape-ui.formatShape",
        contextual: true,
        "docs-shape-ui.ribbon.shape-format.quick-styles": {
          order: 0,
          [A.id]: {
            order: 0,
            gridLayout: { row: 1, column: 1, showLabel: true },
            menuItemFactory: je,
          },
          [j.id]: {
            order: 1,
            gridLayout: { row: 2, column: 1, showLabel: true },
            menuItemFactory: Me,
          },
        },
        "docs-shape-ui.ribbon.shape-format.style": {
          order: 1,
          [ye]: {
            order: 0,
            gridLayout: { row: 1, column: 1, rowSpan: 2, width: 104 },
            menuItemFactory: Pe,
          },
        },
        "docs-shape-ui.ribbon.shape-format.text": {
          order: 2,
          [be]: {
            order: 0,
            gridLayout: { row: 1, column: 1, rowSpan: 2, width: 344 },
            menuItemFactory: Fe,
          },
        },
        "docs-shape-ui.ribbon.shape-format.arrange": {
          order: 3,
          [Ee]: {
            order: 0,
            gridLayout: {
              row: 1,
              column: 1,
              rowSpan: 2,
              columnSpan: 2,
              showLabel: true,
            },
            menuItemFactory: Le,
          },
          [Se]: {
            order: 1,
            gridLayout: { row: 1, column: 3 },
            menuItemFactory: Re,
          },
          [Ce]: {
            order: 2,
            gridLayout: { row: 2, column: 3 },
            menuItemFactory: ze,
          },
          [we]: {
            order: 3,
            gridLayout: { row: 1, column: 4 },
            menuItemFactory: Be,
          },
          [Te]: {
            order: 4,
            gridLayout: { row: 2, column: 4 },
            menuItemFactory: Ve,
          },
        },
        "docs-shape-ui.ribbon.shape-format.formula": {
          order: 4,
          [xe]: {
            order: 0,
            gridLayout: { row: 1, column: 1, rowSpan: 2, width: 120 },
            menuItemFactory: Ie,
          },
        },
        "docs-shape-ui.ribbon.shape-format.advanced": {
          order: 5,
          [O.id]: {
            order: 0,
            gridLayout: { row: 1, column: 1, showLabel: true },
            menuItemFactory: He,
          },
          [e.ToggleShapeFloatingToolbarOperation["id"]]: {
            order: 1,
            gridLayout: { row: 2, column: 1, showLabel: true },
            menuItemFactory: e.ShapeFloatingToolbarToggleFactory,
          },
        },
      },
    },
  },
  We = {
    [n.RibbonInsertGroup["MEDIA"]]: {
      [x.id]: {
        order: 4,
        menuItemFactory: (_0x251bd8) => ({
          ...ie(_0x251bd8),
          title: undefined,
        }),
      },
    },
    [n.RibbonInsertGroup["OTHERS"]]: {
      [D.id]: {
        order: 0,
        gridLayout: { row: 1, column: 1, rowSpan: 2, showLabel: true },
        menuItemFactory: se,
      },
    },
    [n.ContextMenuPosition["PARAGRAPH"]]: {
      [n.ContextMenuGroup["LAYOUT"]]: {
        [t.INSERT_BELLOW_MENU_ID]: {
          [x.id]: { replace: true, order: 8, menuItemFactory: ae },
        },
      },
      [t.DOC_CONTENT_INSERT_MENU_ID]: {
        [n.ContextMenuGroup["LAYOUT"]]: {
          [x.id]: { replace: true, order: 8, menuItemFactory: ae },
        },
      },
      [t.EMPTY_PARAGRAPH_MENU_ID]: {
        [n.ContextMenuGroup["LAYOUT"]]: {
          [x.id]: { replace: true, order: 8, menuItemFactory: oe },
        },
      },
      [t.DOC_PARAGRAPH_T_INSERT_MENU_ID]: {
        insert: { [x.id]: { replace: true, order: 2, menuItemFactory: ie } },
      },
      [t.DOC_PARAGRAPH_T_INSERT_BELOW_MENU_ID]: {
        insert: {
          [x.id + ".below"]: { replace: true, order: 2, menuItemFactory: ae },
        },
      },
    },
  };
var Ge = "@univerjs-pro/docs-shape-ui",
  Ke = "1.0.0-insiders.20260907-70fc579";
const qe = {
    type: o.CommandType["OPERATION"],
    id: "doc.operation.close-doc-shape-format-panel",
    handler() {
      return true;
    },
  },
  Je = {};
function Ye(_0x3e6a3c) {
  return _0x3e6a3c.trim() || undefined;
}
function Xe(_0x4b631d, _0xf08b87, _0x4f003d) {
  var _0x3f097b, _0x59a192;
  return (
    ((_0x3f097b = _0x4b631d.name) == null ? undefined : _0x3f097b.trim()) ||
    ((_0x59a192 = _0x4b631d.title) == null ? undefined : _0x59a192.trim()) ||
    (0, d.getObjectListPanelTypeName)(
      _0x4f003d,
      (0, e.getDrawingTypeNameKey)(_0x4b631d.drawingType),
    ) +
      "\x20" +
      (_0xf08b87 + 1)
  );
}
function Ze() {
  let _0x7b721f = (0, n.useDependency)(o.LocaleService),
    _0x17caba = (0, n.useDependency)(o.ICommandService),
    _0x287a28 = (0, n.useDependency)(o.IUniverInstanceService),
    _0x5b88b3 = (0, n.useDependency)(c.IDocDrawingService),
    _0x56ea37 = (0, n.useDependency)(u.IDrawingManagerService),
    _0x1d48b3 = (0, n.useDependency)(l.IRenderManagerService),
    [, _0x150414] = (0, _.useReducer)((_0xd0c40) => _0xd0c40 + 1, 0),
    _0x1b9a92 = _0x287a28.getCurrentUnitOfType(
      o.UniverInstanceType["UNIVER_DOC"],
    ),
    _0x284f43 = (_0x1b9a92 == null ? undefined : _0x1b9a92.getUnitId()) ?? "",
    _0x37ef28 = _0x284f43,
    _0x5cd11e = (0, n.useObservable)(
      () => _0x56ea37.focus$,
      _0x56ea37.getFocusDrawings(),
      false,
      [_0x56ea37],
    );
  (0, _.useEffect)(() => {
    let _0x22e219 = _0x17caba.onCommandExecuted(() => _0x150414());
    return () => _0x22e219.dispose();
  }, [_0x17caba]);
  let _0x11dc71 = (0, _.useMemo)(
      () => (0, d.getObjectListPanelLabels)(_0x7b721f),
      [_0x7b721f],
    ),
    _0x4bf16d = _0x284f43 ? _0x5b88b3.getDrawingData(_0x284f43, _0x37ef28) : {},
    _0x28b973 = (
      _0x284f43 ? _0x5b88b3.getDrawingOrder(_0x284f43, _0x37ef28) : []
    )
      .map((_0x564536) => _0x4bf16d[_0x564536])
      .filter((_0x4cf404) => !!_0x4cf404)
      .reverse(),
    _0x22a26c = _0x28b973.reduce(
      (_0x355373, _0x3dafc6) => (
        (_0x355373[
          (0, d.getObjectListPanelSectionIdForDrawingType)(
            _0x3dafc6.drawingType,
          )
        ] += 1),
        _0x355373
      ),
      { canvas: 0, floating: 0 },
    ),
    _0x400826 = { canvas: 0, floating: 0 },
    _0x343a9c = _0x28b973.map((_0x4489a8, _0x4891c1) => {
      let _0x2bd19e = (0, d.getObjectListPanelSectionIdForDrawingType)(
          _0x4489a8.drawingType,
        ),
        _0x488bc8 = _0x2bd19e === d.OBJECT_LIST_FLOATING_SECTION_ID,
        _0x95df63 = _0x400826[_0x2bd19e]++;
      return {
        id: _0x4489a8.drawingId,
        name: Xe(_0x4489a8, _0x4891c1, _0x7b721f),
        description: _0x4489a8.description,
        visible: _0x4489a8.hidden !== true,
        selectable: _0x4489a8.selectable !== false,
        sectionId: _0x2bd19e,
        sectionTitle: _0x488bc8
          ? _0x11dc71.sectionFloating
          : _0x11dc71.sectionCanvas,
        capabilities: _0x488bc8
          ? { arrange: false, reorder: false }
          : undefined,
        canMoveForward: !_0x488bc8 && _0x95df63 > 0,
        canMoveBackward: !_0x488bc8 && _0x95df63 < _0x22a26c.canvas - 1,
        canReorder: !_0x488bc8,
      };
    }),
    _0x34e483 = (0, _.useMemo)(
      () =>
        (_0x5cd11e ?? [])
          .filter(
            (_0x37f38a) =>
              _0x37f38a.unitId === _0x284f43 &&
              _0x37f38a.subUnitId === _0x37ef28,
          )
          .map((_0x3ad4e3) => _0x3ad4e3.drawingId),
      [_0x5cd11e, _0x37ef28, _0x284f43],
    ),
    _0x34ebfa = _0x34e483[_0x34e483.length - 1] ?? null,
    _0x34965e = (_0x1dfc2c) =>
      _0x5b88b3.getDrawingByParam({
        unitId: _0x284f43,
        subUnitId: _0x37ef28,
        drawingId: _0x1dfc2c,
      }) ?? null,
    _0x29e029 = async (_0x2d872d) => {
      !_0x284f43 ||
        !_0x2d872d.length ||
        (await _0x17caba.executeCommand(
          r.UpdateDocDrawingMetadataCommand["id"],
          { unitId: _0x284f43, patches: _0x2d872d },
        ));
    },
    _0x41b561 = (_0x17b8b9, _0xd28bad) => {
      if (!_0x284f43) return;
      let _0x4f3119 = _0xd28bad
        ? _0x34e483.includes(_0x17b8b9)
          ? _0x34e483.filter((_0x55761c) => _0x55761c !== _0x17b8b9)
          : [..._0x34e483, _0x17b8b9]
        : [_0x17b8b9];
      _0x17caba.syncExecuteCommand(
        u.SetDrawingSelectedOperation["id"],
        _0x4f3119.map((_0x29c4a3) => ({
          unitId: _0x284f43,
          subUnitId: _0x37ef28,
          drawingId: _0x29c4a3,
        })),
      );
      let _0x3ab7d9 = _0x4f3119[_0x4f3119.length - 1];
      _0x3ab7d9
        ? (0, e.activateDrawingObject)(_0x1d48b3, {
            unitId: _0x284f43,
            subUnitId: _0x37ef28,
            drawingId: _0x3ab7d9,
          })
        : (0, e.clearActiveDrawingObjects)(_0x1d48b3, _0x284f43);
    },
    _0x218840 = async (_0x177757, _0x532047) => {
      await _0x29e029(
        _0x177757
          .map((_0x378ff8) => _0x34965e(_0x378ff8))
          .filter((_0xd621e7) => !!_0xd621e7)
          .filter((_0x509d73) => (_0x509d73.hidden !== true) !== _0x532047)
          .map((_0x470635) => ({
            drawingId: _0x470635.drawingId,
            hidden: !_0x532047,
          })),
      );
    },
    _0x44dfaf = async (_0x459927) => {
      let _0x2c0415 = _0x34965e(_0x459927);
      _0x2c0415 &&
        (await _0x29e029([
          {
            drawingId: _0x459927,
            selectable: _0x2c0415.selectable === false && undefined,
          },
        ]));
    },
    _0x505e8c = async (_0x28212f, _0x21443a) => {
      let _0x3d08db = _0x34965e(_0x28212f),
        _0x2773fc = Ye(_0x21443a);
      !_0x3d08db ||
        ((_0x3d08db.name ?? undefined) === _0x2773fc &&
          (_0x3d08db.title || undefined) === _0x2773fc) ||
        (await _0x29e029([
          { drawingId: _0x28212f, name: _0x2773fc, title: _0x2773fc },
        ]));
    },
    _0x44223a = async (_0x2dc0db, _0x32d268) => {
      let _0x26151b = _0x34965e(_0x2dc0db),
        _0x875a4b = Ye(_0x32d268);
      !_0x26151b ||
        (_0x26151b.description ?? undefined) === _0x875a4b ||
        (await _0x29e029([{ drawingId: _0x2dc0db, description: _0x875a4b }]));
    },
    _0x1647a2 = async (_0x5ab5d6, _0x3953e9) => {
      _0x284f43 &&
        (await _0x17caba.executeCommand(c.SetDocDrawingArrangeCommand["id"], {
          unitId: _0x284f43,
          subUnitId: _0x37ef28,
          drawingIds: [_0x5ab5d6],
          arrangeType: _0x3953e9,
        }));
    };
  return _0x284f43
    ? (0, f.jsx)(d.ObjectListPanelBase, {
        items: _0x343a9c,
        selectedIds: _0x34e483,
        focusedId: _0x34ebfa,
        labels: _0x11dc71,
        onSelect: _0x41b561,
        onSetVisible: _0x218840,
        onCommitName: _0x505e8c,
        onCommitDescription: _0x44223a,
        onMoveForward: async (_0x3e7747) =>
          _0x1647a2(_0x3e7747, o.ArrangeTypeEnum["forward"]),
        onMoveBackward: async (_0x121aea) =>
          _0x1647a2(_0x121aea, o.ArrangeTypeEnum["backward"]),
        onToggleSelectable: _0x44dfaf,
      })
    : (0, f.jsx)("div", {
        className:
          "univer-flex\x20univer-size-full\x20univer-items-center\x20univer-justify-center\x20univer-text-sm\x20univer-text-gray-500",
        children: _0x11dc71.title,
      });
}
let W = class {
  constructor(_0x556b86) {
    this._renderManagerService = _0x556b86;
  }
  updateShapeFillImage(_0x5ea958, _0x435659) {
    let _0x4d6d14 = this._renderManagerService["getRenderUnitById"](
        _0x5ea958.unitId,
      ),
      _0x333007 = _0x4d6d14 == null ? undefined : _0x4d6d14.scene;
    if (!_0x333007) return;
    let _0x410ad4 = (0, u.getDrawingShapeKeyByDrawingSearch)(_0x5ea958),
      _0x1a8984 = _0x333007.getObjectIncludeInGroup(_0x410ad4);
    _0x1a8984 == null || _0x1a8984.setFillImage(_0x435659);
  }
};
W = N([M(0, l.IRenderManagerService)], W);
function Qe() {
  let _0x3903a2 = (0, n.useDependency)(u.IDrawingManagerService),
    _0x55cdbc = (0, n.useObservable)(
      () => _0x3903a2.focus$,
      _0x3903a2.getFocusDrawings(),
      false,
      [_0x3903a2],
    );
  return _0x55cdbc.length === 0
    ? null
    : (0, f.jsx)("div", {
        children: (0, f.jsxs)("div", {
          className: "univer-box-border univer-px-4 univer-text-sm",
          children: [
            (0, f.jsx)(d.DrawingCommonPanel, {
              drawings: _0x55cdbc,
              hasCropper: false,
            }),
            (0, f.jsx)(h.DocDrawingTextWrap, { drawings: _0x55cdbc }),
            (0, f.jsx)(h.DocDrawingPosition, { drawings: _0x55cdbc }),
          ],
        }),
      });
}
function $e(_0x27ad45) {
  let {
      unitId: _0x250acc,
      subUnitId: _0x35bda2,
      shapeId: _0x4df4b2,
    } = _0x27ad45,
    _0x42b11d = (0, n.useDependency)(o.ICommandService),
    _0x4dcc2a = (0, n.useDependency)(W);
  return (0, f.jsx)(e.ShapeEditPanel, {
    ..._0x27ad45,
    positionEditor: (0, f.jsx)(Qe, {}),
    onUpdateShapeData: (_0x26699d, _0x1f442e) => {
      R(_0x42b11d, _0x250acc, _0x35bda2, _0x4df4b2, _0x26699d, _0x1f442e);
    },
    onUpdateLineShapeData: (_0x5ccb15, _0x2959f5) => {
      ce(_0x42b11d, _0x250acc, _0x35bda2, _0x4df4b2, _0x5ccb15, _0x2959f5);
    },
    onUpdateShapeFillImage: (_0x579ad7) => {
      _0x4dcc2a.updateShapeFillImage(
        { unitId: _0x250acc, subUnitId: _0x35bda2, drawingId: _0x4df4b2 },
        _0x579ad7,
      );
    },
  });
}
const et = "doc.shape.floating-toolbar";
function tt(_0x478e7e, _0x10a455) {
  var _0x29381e;
  let _0x15edd9 =
    _0x478e7e == null || (_0x29381e = _0x478e7e.getSnapshot().drawings) == null
      ? undefined
      : _0x29381e[_0x10a455];
  return _0x15edd9
    ? _0x15edd9.layoutType === o.PositionedObjectLayoutType["WRAP_NONE"]
      ? _0x15edd9.behindDoc === o.BooleanNumber["TRUE"]
        ? c.TextWrappingStyle["BEHIND_TEXT"]
        : c.TextWrappingStyle["IN_FRONT_OF_TEXT"]
      : _0x15edd9.layoutType === o.PositionedObjectLayoutType["WRAP_SQUARE"]
        ? c.TextWrappingStyle["WRAP_SQUARE"]
        : _0x15edd9.layoutType ===
            o.PositionedObjectLayoutType["WRAP_TOP_AND_BOTTOM"]
          ? c.TextWrappingStyle["WRAP_TOP_AND_BOTTOM"]
          : c.TextWrappingStyle["INLINE"]
    : c.TextWrappingStyle["INLINE"];
}
function nt(_0x8d69fe) {
  let _0x43155f = (0, n.useDependency)(e.ShapeFloatingToolbarService),
    _0x3975a6 = (0, n.useObservable)(
      () => _0x43155f.visible$,
      _0x43155f.getVisible(),
      false,
      [_0x43155f],
    ),
    _0x4bb46f = _0x8d69fe.popup["extraProps"];
  return _0x3975a6
    ? (0, f.jsx)(rt, {
        ..._0x4bb46f,
        canvasElement: _0x8d69fe.popup["canvasElement"],
      })
    : null;
}
function rt(_0x29a5d0) {
  let _0x395d5f = (0, n.useDependency)(o.ICommandService),
    _0x5771b0 = (0, n.useDependency)(o.LocaleService),
    _0x11bcca = (0, n.useDependency)(r.DocsShapeService),
    _0x2a7f98 = (0, n.useDependency)(o.IUniverInstanceService),
    {
      unitId: _0x3728d4,
      subUnitId: _0x504f26,
      drawingId: _0x1198de,
      shapeType: _0x2a873e,
    } = _0x29a5d0,
    [_0x31ebc3, _0x32164c] = (0, _.useState)(_0x29a5d0.shapeData),
    _0x333343 =
      _0x2a7f98.getUnit(_0x3728d4, o.UniverInstanceType["UNIVER_DOC"]) ??
      undefined,
    [_0x25a83e, _0x227407] = (0, _.useState)(() => tt(_0x333343, _0x1198de)),
    _0x2f95d9 = (0, _.useMemo)(
      () => (0, e.getTextStyle)(_0x31ebc3),
      [_0x31ebc3],
    ),
    _0x1eb986 = (0, _.useMemo)(
      () => (0, e.getTextModel)(_0x31ebc3),
      [_0x31ebc3],
    );
  (0, _.useEffect)(() => {
    let _0x2a71d5 = _0x395d5f.onCommandExecuted((_0x318870) => {
      if (_0x318870.id !== r.UpdateDocShapeDataMutation["id"]) return;
      let _0x19f470 = _0x11bcca.getShapeDataById(
        _0x3728d4,
        _0x504f26,
        _0x1198de,
      );
      _0x19f470 && _0x32164c(_0x19f470);
    });
    return () => _0x2a71d5.dispose();
  }, [_0x395d5f, _0x11bcca, _0x1198de, _0x504f26, _0x3728d4]);
  let _0x471840 = (_0x34cfc1) => {
      _0x32164c((_0x144f82) => ({ ..._0x144f82, ..._0x34cfc1 }));
    },
    _0xf0f86c = (_0x9cb992) => {
      let _0x45ca51 = (0, e.buildShapeTextDataUpdate)(_0x31ebc3, _0x9cb992);
      (R(
        _0x395d5f,
        _0x3728d4,
        _0x504f26,
        _0x1198de,
        { oldShapeData: { shapeText: _0x31ebc3.shapeText } },
        _0x45ca51,
      ),
        _0x471840(_0x45ca51));
    },
    _0x2e50c6 = (_0x4ea1e6) => {
      (_0x227407(_0x4ea1e6),
        _0x395d5f.executeCommand(c.UpdateDocDrawingWrappingStyleCommand["id"], {
          unitId: _0x3728d4,
          subUnitId: _0x504f26,
          drawings: [
            { unitId: _0x3728d4, subUnitId: _0x504f26, drawingId: _0x1198de },
          ],
          wrappingStyle: _0x4ea1e6,
        }));
    },
    _0x2c8416 = (0, e.useFormulaShapeToolbar)({
      hostType: o.UniverInstanceType["UNIVER_DOC"],
      unitId: _0x3728d4,
      subUnitId: _0x504f26,
      shapeId: _0x1198de,
      shapeData: _0x31ebc3,
      onUpdateBinding: (_0x22f684) => {
        let _0x211e35 = { formulaBinding: _0x22f684 };
        (R(
          _0x395d5f,
          _0x3728d4,
          _0x504f26,
          _0x1198de,
          { oldShapeData: { formulaBinding: _0x31ebc3.formulaBinding } },
          _0x211e35,
        ),
          _0x471840(_0x211e35));
      },
    }),
    _0x590cbe = [
      {
        label: _0x5771b0.t("docs-shape-ui.textWrap.inline"),
        value: c.TextWrappingStyle["INLINE"],
        icon: (0, f.jsx)(g.TextWrapShapeIcon, {}),
      },
      {
        label: _0x5771b0.t("docs-shape-ui.textWrap.square"),
        value: c.TextWrappingStyle["WRAP_SQUARE"],
        icon: (0, f.jsx)(g.TextWrapShapeIcon, {}),
      },
      {
        label: _0x5771b0.t("docs-shape-ui.textWrap.topAndBottom"),
        value: c.TextWrappingStyle["WRAP_TOP_AND_BOTTOM"],
        icon: (0, f.jsx)(g.TextWrapShapeIcon, {}),
      },
      {
        label: _0x5771b0.t("docs-shape-ui.textWrap.behindText"),
        value: c.TextWrappingStyle["BEHIND_TEXT"],
        icon: (0, f.jsx)(g.TextWrapShapeIcon, {}),
      },
      {
        label: _0x5771b0.t("docs-shape-ui.textWrap.inFrontText"),
        value: c.TextWrappingStyle["IN_FRONT_OF_TEXT"],
        icon: (0, f.jsx)(g.TextWrapShapeIcon, {}),
      },
    ];
  return (0, f.jsxs)(f.Fragment, {
    children: [
      (0, f.jsx)(e.ShapeFloatingToolbar, {
        canvasElement: _0x29a5d0.canvasElement,
        shapeData: _0x31ebc3,
        shapeType: _0x2a873e,
        textStyle: {
          ff: i.ShapeDefaultConfig["shapeText"].fontFamily,
          fs: i.ShapeDefaultConfig["shapeText"].fontSize,
          cl: { rgb: i.ShapeDefaultConfig["shapeText"].color },
          ..._0x2f95d9,
        },
        textModel: _0x1eb986
          ? {
              ha: _0x1eb986.ha ?? o.HorizontalAlign["LEFT"],
              va: _0x1eb986.va ?? o.VerticalAlign["TOP"],
            }
          : null,
        wrappingStyle: _0x25a83e,
        wrappingStyleOptions: _0x590cbe,
        enableShapeFillReset: true,
        enableShapeStrokeReset: true,
        enableTextBackgroundReset: true,
        defaultFillColor: i.ShapeDefaultConfig["fill"],
        defaultGradientEndColor: i.ShapeDefaultConfig["gradientEndColor"],
        defaultStrokeColor: i.ShapeDefaultConfig["stroke"],
        extensionGroups: _0x2c8416.extensionGroups,
        floatingObjectToolbarPosition: n.FloatingObjectToolbarPosition["DOC"],
        onUpdateShapeData: (_0x580b47, _0x2acab8) => {
          (R(_0x395d5f, _0x3728d4, _0x504f26, _0x1198de, _0x580b47, _0x2acab8),
            _0x2acab8 && _0x471840(_0x2acab8));
        },
        onUpdateText: _0xf0f86c,
        onUpdateWrappingStyle: (_0x23e354) => _0x2e50c6(_0x23e354),
        onOpenPanel: () => {
          _0x395d5f.executeCommand(O.id, {
            unitId: _0x3728d4,
            subUnitId: _0x504f26,
            drawingId: _0x1198de,
          });
        },
        onDelete: () => {
          _0x395d5f.executeCommand(c.RemoveDocDrawingCommand["id"], {
            unitId: _0x3728d4,
            drawings: [
              { unitId: _0x3728d4, subUnitId: _0x504f26, drawingId: _0x1198de },
            ],
          });
        },
      }),
      _0x2c8416.panel,
    ],
  });
}
function it({ variant: _0x137236, extend: _0x5f5266, ..._0x871bf0 }) {
  let _0x5c85ab = (0, f.jsx)("rect", {
    x: "7",
    y: "5.5",
    width: "6",
    height: "9",
    rx: "1",
    fill: "currentColor",
    fillOpacity: "0.14",
    stroke: "currentColor",
    strokeWidth: "1.2",
  });
  return (0, f.jsxs)("svg", {
    "aria-hidden": "true",
    fill: "none",
    height: "1em",
    viewBox: "0 0 20 20",
    width: "1em",
    ..._0x871bf0,
    children: [
      _0x137236 === "inline" &&
        (0, f.jsxs)(f.Fragment, {
          children: [
            (0, f.jsx)("path", {
              d: "M2\x203.5h16M2\x2016.5h16M2\x2010h5M13\x2010h5",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeWidth: "1.2",
            }),
            (0, f.jsx)("rect", {
              x: "8",
              y: "7",
              width: "4",
              height: "6",
              rx: "0.8",
              fill: "currentColor",
              fillOpacity: "0.14",
              stroke: "currentColor",
              strokeWidth: "1.2",
            }),
          ],
        }),
      _0x137236 === "square" &&
        (0, f.jsxs)(f.Fragment, {
          children: [
            (0, f.jsx)("path", {
              d: "M2 3h16M2 7.5h3M15 7.5h3M2 10h3M15 10h3M2 12.5h3M15 12.5h3M2 17h16",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeWidth: "1.2",
            }),
            _0x5c85ab,
          ],
        }),
      _0x137236 === "top-bottom" &&
        (0, f.jsxs)(f.Fragment, {
          children: [
            (0, f.jsx)("path", {
              d: "M2 3h16M2 17h16",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeWidth: "1.2",
            }),
            _0x5c85ab,
          ],
        }),
      _0x137236 === "behind" &&
        (0, f.jsxs)(f.Fragment, {
          children: [
            _0x5c85ab,
            (0, f.jsx)("path", {
              d: "M2 3h16M2 7.5h16M2 10h16M2 12.5h16M2 17h16",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeWidth: "1.2",
            }),
          ],
        }),
      _0x137236 === "front" &&
        (0, f.jsxs)(f.Fragment, {
          children: [
            (0, f.jsx)("path", {
              d: "M2\x203h16M2\x207.5h16M2\x2010h16M2\x2012.5h16M2\x2017h16",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeWidth: "1.2",
            }),
            (0, f.jsx)("rect", {
              x: "7",
              y: "5.5",
              width: "6",
              height: "9",
              rx: "1",
              fill: "currentColor",
            }),
          ],
        }),
    ],
  });
}
const G = (_0x11f2ee) => (_0x7af918) =>
    (0, f.jsx)(it, { ..._0x7af918, variant: _0x11f2ee }),
  at = {
    DocsShapeWrapInlineIcon: G("inline"),
    DocsShapeWrapSquareIcon: G("square"),
    DocsShapeWrapTopBottomIcon: G("top-bottom"),
    DocsShapeWrapBehindTextIcon: G("behind"),
    DocsShapeWrapInFrontOfTextIcon: G("front"),
  };
function K(_0x92dd7a) {
  "@babel/helpers - typeof";
  return (
    (K =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x2601b3) {
            return typeof _0x2601b3;
          }
        : function (_0x24ba61) {
            return _0x24ba61 &&
              typeof Symbol == "function" &&
              _0x24ba61.constructor === Symbol &&
              _0x24ba61 !== Symbol.prototype
              ? "symbol"
              : typeof _0x24ba61;
          }),
    K(_0x92dd7a)
  );
}
function ot(_0x323f46, _0x2274e3) {
  if (K(_0x323f46) != "object" || !_0x323f46) return _0x323f46;
  var _0x2adf63 = _0x323f46[Symbol.toPrimitive];
  if (_0x2adf63 !== undefined) {
    var _0x349b3b = _0x2adf63.call(_0x323f46, _0x2274e3 || "default");
    if (K(_0x349b3b) != "object") return _0x349b3b;
    throw TypeError(
      "@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.",
    );
  }
  return (_0x2274e3 === "string" ? String : Number)(_0x323f46);
}
function st(_0x1670ba) {
  var _0x458ff3 = ot(_0x1670ba, "string");
  return K(_0x458ff3) == "symbol" ? _0x458ff3 : _0x458ff3 + "";
}
function q(_0x5849ff, _0x5a3c6f, _0xe29fda) {
  return (
    (_0x5a3c6f = st(_0x5a3c6f)) in _0x5849ff
      ? Object.defineProperty(_0x5849ff, _0x5a3c6f, {
          value: _0xe29fda,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x5849ff[_0x5a3c6f] = _0xe29fda),
    _0x5849ff
  );
}
let J = class extends o.Disposable {
  constructor(_0x149ac7, _0x2eab36) {
    (super(),
      (this._permissionService = _0x149ac7),
      (this._instanceService = _0x2eab36),
      q(this, "_editingParams$", new p["BehaviorSubject"](null)),
      q(this, "editingParams$", this._editingParams$["asObservable"]()),
      q(this, "_onSavingEditorData$", new p["BehaviorSubject"](false)),
      q(
        this,
        "onSavingEditorData$",
        this._onSavingEditorData$["asObservable"](),
      ),
      this.disposeWithMe(
        this._permissionService["permissionPointUpdate$"].subscribe(() => {
          let _0x225d7c = this.getEditing();
          _0x225d7c != null &&
            _0x225d7c.visible &&
            !this._canEdit(_0x225d7c) &&
            this.setEditing(null);
        }),
      ));
  }
  dispose() {
    (this._editingParams$["next"](null),
      this._editingParams$["complete"](),
      this._onSavingEditorData$["next"](false),
      this._onSavingEditorData$["complete"](),
      super.dispose());
  }
  setEditing(_0x3e9537) {
    (_0x3e9537 != null && _0x3e9537.visible && !this._canEdit(_0x3e9537)) ||
      (this._editingParams$["next"](_0x3e9537),
      _0x3e9537 ?? this._onSavingEditorData$["next"](false));
  }
  setOnSavingEditorData(_0x2977ec) {
    this._onSavingEditorData$["next"](_0x2977ec);
  }
  getEditing() {
    return this._editingParams$["getValue"]();
  }
  _canEdit(_0x5af89e) {
    let _0x431c2d = this._instanceService["getUnit"](
      _0x5af89e.unitId,
      o.UniverInstanceType["UNIVER_DOC"],
    );
    if (!_0x431c2d) return true;
    let _0x585db7 = (0, s.getDocumentDrawingSegmentId)(
      _0x431c2d,
      _0x5af89e.shapeId,
    );
    return (0, s.canEditDocumentTargets)(
      this._permissionService,
      _0x5af89e.unitId,
      [
        ...(0, s.getDocumentEntityParentPermissionObjectIds)(
          _0x431c2d,
          _0x585db7,
          "drawing",
          _0x5af89e.shapeId,
        ),
        (0, s.getDocumentEntityPermissionObjectId)(
          _0x585db7,
          "drawing",
          _0x5af89e.shapeId,
        ),
      ],
    );
  }
  completeEditing(_0x2e5f4e) {
    this.getEditing() &&
      (this.setOnSavingEditorData(true),
      requestAnimationFrame(() => {
        this.setEditing(null);
      }));
  }
  cancelEditing() {
    this.getEditing() && this.setEditing(null);
  }
};
J = N([M(0, o.IPermissionService), M(1, o.IUniverInstanceService)], J);
const ct = (0, _.memo)(() => {
  let _0x42e5a6 = (0, n.useDependency)(J),
    _0x478081 = (0, n.useDependency)(r.DocsShapeService),
    _0x4bb526 = (0, n.useDependency)(u.IDrawingManagerService),
    _0x1d2704 = (0, n.useDependency)(o.ICommandService);
  return (0, f.jsx)(e.ShapeTextEditorContainer, {
    adapter: (0, _.useMemo)(
      () => ({
        getShapeModel: (_0x479521, _0x4929c9, _0x86db1b) =>
          _0x478081.getShapeModel(_0x479521, _0x4929c9, _0x86db1b),
        getShapeData: (_0x3f24b8, _0x39905f, _0x3b51f6) =>
          _0x478081.getShapeDataById(_0x3f24b8, _0x39905f, _0x3b51f6),
        getDrawingTransform: (_0x3c8cda, _0x2ca01d, _0x2003cb) => {
          let _0x1e1dc6 = _0x4bb526.getDrawingByParam({
            unitId: _0x3c8cda,
            subUnitId: _0x2ca01d,
            drawingId: _0x2003cb,
          });
          return _0x1e1dc6 == null ? undefined : _0x1e1dc6.transform;
        },
        updateShapeText: ({
          unitId: _0x23dce5,
          shapeId: _0x23e7e2,
          shapeText: _0x4fc968,
          oldShapeText: _0x1eb11a,
        }) => {
          _0x1d2704.executeCommand(r.UpdateDocShapeDataCommand["id"], {
            unitId: _0x23dce5,
            shapeId: _0x23e7e2,
            shapeData: { shapeText: _0x4fc968 },
            oldShapeJSON: { oldShapeData: { shapeText: _0x1eb11a } },
          });
        },
        updateHostSize: ({
          unitId: _0x1d1628,
          subUnitId: _0x5348c9,
          shapeId: _0x21c309,
          width: _0x46cad8,
          height: _0x21d66e,
        }) => {
          _0x1d2704.executeCommand(c.UpdateDrawingDocTransformCommand["id"], {
            unitId: _0x1d1628,
            subUnitId: _0x5348c9,
            drawings: [
              {
                drawingId: _0x21c309,
                key: "size",
                value: { width: _0x46cad8, height: _0x21d66e },
              },
            ],
          });
        },
        allowHostSizeShrink: ({
          unitId: _0x48c61d,
          subUnitId: _0x499058,
          shapeId: _0x513af4,
        }) =>
          (0, e.shouldAllowShapeTextEditorHostSizeShrink)(
            _0x478081.getShapeDataById(_0x48c61d, _0x499058, _0x513af4),
          ),
      }),
      [_0x1d2704, _0x478081, _0x4bb526],
    ),
    editingService: _0x42e5a6,
    editorUnitId: T,
    positionOptions: (0, _.useMemo)(
      () => ({ viewportKeys: { main: t.VIEWPORT_KEY["VIEW_MAIN"] } }),
      [],
    ),
  });
});
let Y = class extends o.Disposable {
  constructor(_0x8d61ce, _0x5d8c10) {
    (super(),
      (this._componentManager = _0x8d61ce),
      (this._iconManager = _0x5d8c10),
      this._registerIcons(),
      this._registerComponents());
  }
  _registerIcons() {
    (this._iconManager["has"]("ObjectLayersIcon") ||
      this.disposeWithMe(
        this._iconManager["register"]({ ObjectLayersIcon: g.ObjectLayersIcon }),
      ),
      this._iconManager["has"]("BottomIcon") ||
        this.disposeWithMe(
          this._iconManager["register"]({ BottomIcon: g.BottomIcon }),
        ),
      this._iconManager["has"]("MoveDownIcon") ||
        this.disposeWithMe(
          this._iconManager["register"]({ MoveDownIcon: g.MoveDownIcon }),
        ),
      this._iconManager["has"]("MoveUpIcon") ||
        this.disposeWithMe(
          this._iconManager["register"]({ MoveUpIcon: g.MoveUpIcon }),
        ),
      this._iconManager["has"]("ShapeFormatSettingIcon") ||
        this.disposeWithMe(
          this._iconManager["register"]({
            ShapeFormatSettingIcon: g.ShapeFormatSettingIcon,
          }),
        ),
      this._iconManager["has"]("TopmostIcon") ||
        this.disposeWithMe(
          this._iconManager["register"]({ TopmostIcon: g.TopmostIcon }),
        ),
      this.disposeWithMe(this._iconManager["register"](at)));
  }
  _registerComponents() {
    (this.disposeWithMe(this._componentManager["register"](S, $e)),
      this.disposeWithMe(this._componentManager["register"](w, Ze)),
      this.disposeWithMe(this._componentManager["register"](et, nt)),
      this.disposeWithMe(this._componentManager["register"](ue, me)),
      this.disposeWithMe(this._componentManager["register"](le, he)),
      this.disposeWithMe(this._componentManager["register"](de, ge)),
      this.disposeWithMe(this._componentManager["register"](fe, _e)),
      this.disposeWithMe(this._componentManager["register"](pe, ve)),
      this.disposeWithMe(
        this._componentManager["register"](E, e.ShapeTextFloatToolbar),
      ),
      this.disposeWithMe(this._componentManager["register"](F, ne)),
      this.disposeWithMe(this._componentManager["register"](I, L)),
      this._componentManager["get"](d.IMAGE_CLIP_SHAPE_PICKER_COMPONENT) ||
        this.disposeWithMe(
          this._componentManager["register"](
            d.IMAGE_CLIP_SHAPE_PICKER_COMPONENT,
            te,
          ),
        ),
      this.disposeWithMe(
        this._componentManager["register"]("DocsShapeTextEditorContainer", ct),
      ));
  }
};
Y = N(
  [M(0, (0, o.Inject)(n.ComponentManager)), M(1, (0, o.Inject)(n.IconManager))],
  Y,
);
var lt = class extends l.Shape {
  constructor(_0x2d3440, _0x52a3b9) {
    (super(_0x2d3440, _0x52a3b9),
      q(this, "_shapeId", null),
      q(this, "_adjName", null),
      q(this, "_unitId", null),
      q(this, "_subUnitId", null),
      _0x52a3b9 && this.setShapeProps(_0x52a3b9));
  }
  getDrawingSearch() {
    return {
      unitId: this._unitId,
      subUnitId: this._subUnitId,
      drawingId: this._shapeId,
    };
  }
  setShapeProps(_0x3d2f80) {
    (_0x3d2f80.shapeId !== undefined && (this._shapeId = _0x3d2f80.shapeId),
      _0x3d2f80.adjName !== undefined && (this._adjName = _0x3d2f80.adjName),
      _0x3d2f80.unitId !== undefined && (this._unitId = _0x3d2f80.unitId),
      _0x3d2f80.subUnitId !== undefined &&
        (this._subUnitId = _0x3d2f80.subUnitId),
      this.transformByState({
        width: _0x3d2f80.width,
        height: _0x3d2f80.height,
      }));
  }
  _draw(_0x2add8c) {
    l.Circle["drawWith"](_0x2add8c, {
      radius: i.ShapeDefaultConfig["adjHandleSize"],
      fill: i.ShapeDefaultConfig["adjHandleFill"],
      stroke: i.ShapeDefaultConfig["adjHandleStroke"],
      strokeWidth: 1,
      evented: true,
    });
  }
};
function ut(_0x37077b, _0x46d539, _0x9723cf) {
  let _0x404a33 = (0, e.resolveShapeTextEditorBehaviorShapeData)(_0x37077b, {
      ..._0x46d539,
      dataModel: {
        ...(_0x46d539.dataModel ?? {}),
        ...(_0x9723cf ? { doc: _0x9723cf } : null),
      },
    }),
    _0x50ca5e = (0, e.resolveShapeTextEditorWrapStrategy)(_0x404a33);
  return {
    clip: (0, e.shouldClipShapeTextDocument)(_0x404a33, _0x50ca5e),
    wrapStrategy: _0x50ca5e,
  };
}
var X = class extends l.Shape {
  constructor(_0x4a6b78, _0x2fcb9d) {
    (super(_0x4a6b78, _0x2fcb9d),
      q(this, "_props", undefined),
      q(
        this,
        "_formulaAnimation",
        new e["FormulaShapeAnimationController"](
          () => this.makeDirty(true),
          () => this._applyFormulaAutoFitSize(),
        ),
      ),
      q(this, "_transformCalculateSrcRect", true),
      q(this, "_drawingType", o.DrawingTypeEnum["DRAWING_SHAPE"]),
      q(this, "isDrawingObject", true),
      (this._props = { ..._0x2fcb9d }),
      this._formulaAnimation["setPresentation"](
        _0x2fcb9d.formulaPresentation,
        _0x2fcb9d.animateFormulaPresentation !== false,
      ),
      this._init(),
      this._applyFormulaAutoFitSize());
  }
  _init() {
    this.onTransformChange$["subscribeEvent"]((_0xe464de) => {
      this._updateSrcRectByTransform(_0xe464de);
    });
  }
  setPrstGeom(_0x32ceb2) {
    this._props["prstGeom"] = _0x32ceb2;
  }
  setEditing(_0x560352) {
    ((this._props["isEditing"] = _0x560352), this.makeDirty(true));
  }
  setFormulaPresentation(_0xcc6f85, _0x20669f = true) {
    (this._formulaAnimation["setPresentation"](_0xcc6f85, _0x20669f),
      (this._props["formulaPresentation"] = _0xcc6f85),
      this._applyFormulaAutoFitSize(),
      this.makeDirty(true));
  }
  _applyFormulaAutoFitSize() {
    let _0x1e6d42 = this._props["shapeModel"],
      _0x392f1b = _0x1e6d42.getShapeTextData(),
      _0xf67ec7 = (0, e.normalizeShapeTextModel)(
        _0x392f1b == null ? undefined : _0x392f1b.dataModel,
      ),
      _0x28f46e = _0xf67ec7 == null ? undefined : _0xf67ec7.doc,
      _0x22c297 = this._formulaAnimation["getAutoFitPresentations"]();
    if (!_0x28f46e || _0x22c297.length === 0) return;
    _0x1e6d42.updateContext({ width: this.width, height: this.height });
    let _0x1bd8de = (0, e.resolveFormulaShapeAutoFitSize)({
      documentData: _0x22c297.map((_0x4318a2) =>
        (0, a.createShapeFormulaDocument)(_0x28f46e, _0x4318a2),
      ),
      height: this.height,
      shapeData: _0x1e6d42.getShapeData(),
      textRect: _0x1e6d42.getShapeTextRect({
        left: 0,
        top: 0,
        width: this.width,
        height: this.height,
      }),
      width: this.width,
    });
    if (_0x1bd8de) {
      var _0x44f99e;
      (this.resize(_0x1bd8de.width, _0x1bd8de.height),
        (_0x44f99e = this.getScene()) == null ||
          (_0x44f99e = _0x44f99e.getTransformer()) == null ||
          _0x44f99e.debounceRefreshControls());
    }
  }
  get unitId() {
    return this._props["unitId"];
  }
  get subUnitId() {
    return this._props["subUnitId"];
  }
  _updateSrcRectByTransform(_0x31a7b0) {
    if (this._props["srcRect"] == null || !this._transformCalculateSrcRect)
      return;
    let { width: _0x22da81, height: _0x222307 } = this,
      { width: _0x29a820 = 0, height: _0xb06987 = 0 } = _0x31a7b0.preValue,
      {
        left: _0x48f688 = 0,
        top: _0x330640 = 0,
        right: _0x2291f0 = 0,
        bottom: _0x2f00ee = 0,
      } = this._props["srcRect"],
      _0x3d7437 = _0x48f688,
      _0x256e81 = _0x330640,
      _0x20f8b9 = _0x2291f0,
      _0x4de83a = _0x2f00ee,
      _0x45bdd6 = false;
    if (_0x29a820 !== 0 && _0x29a820 !== _0x22da81) {
      let _0x42a04f = _0x48f688 / _0x29a820,
        _0x242b1e = _0x2291f0 / _0x29a820;
      ((_0x3d7437 = _0x22da81 * _0x42a04f),
        (_0x20f8b9 = _0x22da81 * _0x242b1e),
        (_0x45bdd6 = true));
    }
    if (_0xb06987 !== 0 && _0xb06987 !== _0x222307) {
      let _0x4cfc23 = _0x330640 / _0xb06987,
        _0x53d9d9 = _0x2f00ee / _0xb06987;
      ((_0x256e81 = _0x222307 * _0x4cfc23),
        (_0x4de83a = _0x222307 * _0x53d9d9),
        (_0x45bdd6 = true));
    }
    _0x45bdd6 &&
      this.setSrcRect({
        left: _0x3d7437,
        top: _0x256e81,
        right: _0x20f8b9,
        bottom: _0x4de83a,
      });
  }
  setSrcRect(_0x4c0f9a) {
    ((this._props["srcRect"] = _0x4c0f9a), this.makeDirty(true));
  }
  setFillImage(_0x1a25de) {
    ((this._props["image"] = _0x1a25de), this.makeDirty(true));
  }
  set transform(_0x1a8ba5) {
    this._transform = _0x1a8ba5;
  }
  get transform() {
    this._transform || this._setTransForm();
    let _0xb1b57a = this._transform["clone"]();
    return this.transformForAngle(_0xb1b57a);
  }
  get shapeModel() {
    return this._props["shapeModel"];
  }
  get shapeId() {
    return this._props["shapeId"];
  }
  get classType() {
    return l.RENDER_CLASS_TYPE["SHAPE"];
  }
  _draw(_0x3436bb, _0x1db15c, _0x5b5429, _0x1800dd) {
    let _0x3b9aa0 = this._props["shapeModel"];
    if (!_0x3b9aa0 || !_0x1db15c) return;
    let _0x3e3f0d = _0x5b5429 ?? this.width,
      _0x8aa0ef = _0x1800dd ?? this.height,
      _0x19bc77 = {
        shapeType: _0x3b9aa0.getShapeType(),
        width: _0x3e3f0d,
        height: _0x8aa0ef,
      },
      _0x515c47 = {
        renderMode: i.ShapeRenderModeEnum["Path"],
        oKey: this.oKey,
        image: this._props["image"],
        angle: this.angle,
      };
    (_0x3b9aa0.updateContext(_0x19bc77), _0x3436bb.save());
    let _0x3b0b24 = { top: 0, left: 0, width: _0x3e3f0d, height: _0x8aa0ef },
      _0x4e75fe = _0x3b9aa0.getDrawingEffectBounds(_0x3b0b24);
    (_0x4e75fe
      ? this._renderWithCache(_0x3436bb, _0x4e75fe, (_0x1dda75) => {
          _0x3b9aa0.render(_0x1dda75, _0x3b0b24, _0x515c47);
        })
      : (this._releaseRenderCache(),
        _0x3b9aa0.render(_0x3436bb, _0x3b0b24, _0x515c47)),
      _0x3436bb.restore());
    let _0xc910c = _0x3b9aa0.getShapeTextData(),
      _0x43e374 = _0x3b9aa0.getShapeTextRect(_0x3b0b24),
      _0x3a3176 = _0x3b9aa0.isLineShape();
    if (_0xc910c && _0x43e374 && !_0x3a3176) {
      (_0x3436bb.save(), this.getState().flipX && _0x3436bb.scale(-1, 1));
      let _0x59ad08 = _0x3e3f0d / 2,
        _0x27524d = _0x8aa0ef / 2;
      (_0x3436bb.translate(-_0x59ad08, -_0x27524d),
        _0x3436bb.beginPath(),
        this._drawShapeText(_0x3436bb, _0xc910c, _0x43e374),
        _0x3436bb.restore());
    }
  }
  getDrawingPoints(_0x2d7141) {}
  _drawShapeText(_0x20ba31, _0x29fb87, _0x3379e5) {
    var _0x416f92;
    this._props["isEditing"] ||
      (!((_0x416f92 = _0x29fb87.dataModel) != null && _0x416f92.doc) &&
      "isRichText" in _0x29fb87 &&
      _0x29fb87.isRichText === false
        ? this._drawSimpleText(_0x20ba31, _0x29fb87, _0x3379e5)
        : this._drawRichText(_0x20ba31, _0x29fb87, _0x3379e5));
  }
  _drawSimpleText(_0x84288e, _0x6c9c46, _0x213bac) {
    this._drawRichText(
      _0x84288e,
      {
        ..._0x6c9c46,
        text: _0x6c9c46.text ?? "",
        dataModel: {
          doc: (0, e.plainShapeTextToDocumentData)(
            _0x6c9c46,
            "docs-shape-text-" + this.oKey,
          ),
        },
      },
      _0x213bac,
    );
  }
  _drawRichText(_0x1bd1c3, _0x35f40b, _0x1fe2d6) {
    (0, e.drawFormulaShapeAnimationLayers)(
      _0x1bd1c3,
      this._formulaAnimation,
      (_0x532ae0, _0x2ca222) => {
        this._drawRichTextLayer(_0x532ae0, _0x35f40b, _0x1fe2d6, _0x2ca222);
      },
    );
  }
  _drawRichTextLayer(_0x233c05, _0x11fb5e, _0x2a6bd1, _0x4af10f) {
    let _0x4cd15b = this._props["localeService"];
    if (!_0x11fb5e.dataModel || !_0x4cd15b) {
      _0x4cd15b ||
        console.warn(
          "[DrawingShape] LocaleService is required for rich text rendering",
        );
      return;
    }
    let _0x5e167f = (0, e.normalizeShapeTextModel)(_0x11fb5e.dataModel);
    if (!_0x5e167f) return;
    let _0x44daff = _0x5e167f.doc;
    if (!_0x44daff) return;
    let _0x192edf = (0, a.createShapeFormulaDocument)(_0x44daff, _0x4af10f),
      _0x889ad = _0x5e167f.va ?? o.VerticalAlign["TOP"],
      _0x55d3b5 = _0x5e167f.ha ?? o.HorizontalAlign["LEFT"],
      _0xca1443 = ut(
        this._props["shapeModel"].getShapeData(),
        _0x11fb5e,
        _0x192edf,
      ),
      _0xeccc7d = _0x11fb5e.isHorizontal,
      _0x55b584 = new o["DocumentDataModel"](
        (0, e.prepareShapeTextDocumentData)(_0x192edf, {
          isHorizontal: _0xeccc7d !== false,
          textRect: _0x2a6bd1,
          verticalAlign: _0x889ad,
          horizontalAlign: _0x55d3b5,
          wrapStrategy: _0xca1443.wrapStrategy,
        }),
      ),
      _0x3a4696 = new l["DocumentViewModel"](_0x55b584),
      _0x525215 = l.DocumentSkeleton["create"](_0x3a4696, _0x4cd15b);
    _0x525215.calculate();
    let _0x1e24d1 = _0x525215.getActualSize().actualHeight,
      _0x2c0105 = (0, e.resolveShapeTextDocumentRenderLayout)({
        contentHeight: _0x1e24d1,
        verticalAlign: _0x889ad,
        viewportHeight: _0x2a6bd1.height,
      });
    (_0x55b584.updateDocumentStyle({
      pageSize: {
        width: _0xeccc7d === false ? _0x2a6bd1.height : _0x2a6bd1.width,
        height: _0x2c0105.contentHeight,
      },
    }),
      _0x55b584.updateDocumentDataMargin({ t: _0x2c0105.marginTop }),
      _0x525215.calculate());
    let _0x5eb496 = new l["Documents"]("shape-text-" + this.oKey, _0x525215, {
      pageMarginLeft: 0,
      pageMarginTop: 0,
      onTextFillImageLoaded: () => this.makeDirty(true),
    });
    (_0x5eb496.resize(_0x2a6bd1.width, _0x2c0105.contentHeight),
      _0x233c05.save(),
      _0x233c05.translateWithPrecision(_0x2a6bd1.left, _0x2a6bd1.top),
      _0xca1443.clip &&
        (_0x233c05.beginPath(),
        _0x233c05.rect(
          0,
          _0x2c0105.clipTop,
          _0x2a6bd1.width,
          _0x2c0105.clipHeight,
        ),
        _0x233c05.clip()),
      _0x2c0105.contentVerticalOffset &&
        _0x233c05.translateWithPrecision(0, _0x2c0105.contentVerticalOffset),
      _0x5eb496.draw(_0x233c05),
      _0x233c05.restore(),
      _0x5eb496.dispose(),
      _0x525215.dispose(),
      _0x3a4696.dispose(),
      _0x55b584.dispose());
  }
  render(_0x48a761, _0x3a81f3, _0x3c9ba1 = false) {
    if (!this.visible) return (this.makeDirty(false), this);
    let {
        width: _0x571a80,
        height: _0x1f9709,
        left: _0x12f827,
        top: _0x276eea,
      } = this,
      _0x2136dc = this.getRealBound();
    if (
      ((_0x571a80 = _0x2136dc.width),
      (_0x1f9709 = _0x2136dc.height),
      (_0x12f827 = _0x2136dc.left),
      (_0x276eea = _0x2136dc.top),
      this.isRender(_0x3a81f3))
    ) {
      let {
        top: _0x2d0a47,
        left: _0xee9cf2,
        bottom: _0x592080,
        right: _0x120efe,
      } = _0x3a81f3.viewBound;
      if (
        _0x571a80 + this.strokeWidth + _0x12f827 < _0xee9cf2 ||
        _0x120efe < _0x12f827 ||
        _0x1f9709 + this.strokeWidth + _0x276eea < _0x2d0a47 ||
        _0x592080 < _0x276eea
      )
        return this;
    }
    let _0x33869f = _0x12f827 + _0x571a80 / 2,
      _0x29e07c = _0x276eea + _0x1f9709 / 2,
      _0x3a716d = this.transform["getMatrix"]();
    if (this._props["isEditing"]) {
      let _0x4efb2f = this.getState(),
        _0x3c4721 = new l["Transform"]();
      (_0x3c4721.composeMatrix({ ..._0x4efb2f }),
        (_0x3a716d = _0x3c4721.getMatrix()));
    }
    return (
      _0x48a761.save(),
      this._props["shapeModel"].isRenderLinePointsMode === true ||
        _0x48a761.transform(
          _0x3a716d[0],
          _0x3a716d[1],
          _0x3a716d[2],
          _0x3a716d[3],
          _0x33869f,
          _0x29e07c,
        ),
      this._draw(_0x48a761, _0x3a81f3, _0x571a80, _0x1f9709),
      _0x48a761.restore(),
      this.makeDirty(false),
      this
    );
  }
  getInverseCoord(_0x417f71) {
    let {
        left: _0x1b0861,
        top: _0x3c211b,
        width: _0x4638f2,
        height: _0x6a674c,
      } = this.getRealBound(),
      _0x1b43fa = this.transform["getMatrix"](),
      _0x19e606 = _0x1b0861 + _0x4638f2 / 2,
      _0x127769 = _0x3c211b + _0x6a674c / 2,
      _0x9ff77b = new l["Transform"]([
        _0x1b43fa[0],
        _0x1b43fa[1],
        _0x1b43fa[2],
        _0x1b43fa[3],
        _0x19e606,
        _0x127769,
      ]),
      _0x3096d8 = this.getParent();
    return (
      this.isInGroup &&
      (_0x3096d8 == null ? undefined : _0x3096d8.classType) ===
        l.RENDER_CLASS_TYPE["GROUP"]
        ? _0x3096d8.ancestorTransform["multiply"](_0x9ff77b)
        : _0x9ff77b
    )
      .invert()
      .applyPoint(_0x417f71);
  }
  isHit(_0xb0bca) {
    let {
        left: _0x4f2789,
        top: _0x2d74f4,
        width: _0x546261,
        height: _0x13b0af,
      } = this.getRealBound(),
      _0x1d55c8 = _0x4f2789 + _0x546261 / 2,
      _0x5d3ee4 = _0x2d74f4 + _0x13b0af / 2,
      _0x4b4f65 = this.transform["getMatrix"](),
      _0x11d341 = new l["Transform"]([
        _0x4b4f65[0],
        _0x4b4f65[1],
        _0x4b4f65[2],
        _0x4b4f65[3],
        _0x1d55c8,
        _0x5d3ee4,
      ]),
      _0x477899 = this.getParent(),
      _0x488308 = (
        this.isInGroup &&
        (_0x477899 == null ? undefined : _0x477899.classType) ===
          l.RENDER_CLASS_TYPE["GROUP"]
          ? _0x477899.ancestorTransform["multiply"](_0x11d341)
          : _0x11d341
      )
        .invert()
        .applyPoint(_0xb0bca),
      _0x5604a9 = _0x546261 / 2,
      _0x338414 = _0x13b0af / 2,
      _0x3837a1 = this._props["shapeModel"];
    return _0x3837a1 && _0x3837a1.isLineShape()
      ? _0x3837a1.isHitLine(_0x488308.x, _0x488308.y, _0x546261, _0x13b0af)
      : _0x488308.x >= -_0x5604a9 - this.strokeWidth / 2 &&
          _0x488308.x <= _0x5604a9 + this.strokeWidth / 2 &&
          _0x488308.y >= -_0x338414 - this.strokeWidth / 2 &&
          _0x488308.y <= _0x338414 + this.strokeWidth / 2;
  }
  dispose() {
    (this._formulaAnimation["dispose"](),
      (this._props["shapeModel"] = null),
      super.dispose());
  }
};
let Z = class extends o.Disposable {
  constructor(_0x236e09, _0x93945e, _0x41236b, _0x5a801b) {
    (super(),
      (this._context = _0x236e09),
      (this._drawingManagerService = _0x93945e),
      (this._docsShapeService = _0x41236b),
      (this._commandService = _0x5a801b),
      q(this, "_activeShapeId", null),
      q(this, "_unitId", null),
      q(this, "_subUnitId", null),
      q(this, "_activeShapeAdjustPointList", undefined),
      q(this, "_adjustPointObjects", []),
      q(this, "_baseShapeLeft", 0),
      q(this, "_baseShapeTop", 0),
      q(this, "_baseShapeWidth", 0),
      q(this, "_baseShapeHeight", 0),
      q(this, "_isStartAdjusting", false),
      q(this, "_isShouldShowDrawingShapeAdjust", false),
      q(this, "_activeAdjustInfo", undefined),
      q(this, "_activeShapeModel", undefined),
      q(this, "_adjHandlerPointerMove", undefined),
      q(this, "_adjHandlerPointerUp", undefined),
      this._registerDrawingFocusChangeHandler(),
      this._registerDrawingTransformHandler());
  }
  clearAdjustControls() {
    this._clearShapeAdjustControls();
  }
  refreshAdjustControls() {
    this._updateShapeAdjustControls(true);
  }
  _getShapeAdjustPointListById(_0x54f26d, _0x5ec753, _0x2b43e3) {
    var _0x19443e;
    return (_0x19443e = this._docsShapeService["getShapeModel"](
      _0x54f26d,
      _0x5ec753,
      _0x2b43e3,
    )) == null
      ? undefined
      : _0x19443e.getDrawingPoints();
  }
  _getShapeAdjustInfosById(_0x4cad8c, _0x23d81f, _0x2440c1, _0x40d69d) {
    var _0x369531;
    return (_0x369531 = this._docsShapeService["getShapeModel"](
      _0x4cad8c,
      _0x23d81f,
      _0x2440c1,
    )) == null
      ? undefined
      : _0x369531.getAdjustInfoByName(_0x40d69d);
  }
  _getActiveDrawingParam() {
    return this._unitId === null ||
      this._subUnitId === null ||
      this._activeShapeId === null
      ? null
      : (this._drawingManagerService["getDrawingByParam"]({
          unitId: this._unitId,
          subUnitId: this._subUnitId,
          drawingId: this._activeShapeId,
        }) ?? null);
  }
  _getActiveDrawingShape(_0x4c3c59) {
    if (
      this._unitId === null ||
      this._subUnitId === null ||
      this._activeShapeId === null
    )
      return null;
    let _0x139a89 = (0, u.getDrawingShapeKeyByDrawingSearch)({
        unitId: this._unitId,
        subUnitId: this._subUnitId,
        drawingId: this._activeShapeId,
      }),
      _0x1d1852 = _0x4c3c59.getObjectIncludeInGroup(_0x139a89);
    return _0x1d1852 instanceof X ? _0x1d1852 : null;
  }
  _createShapeAdjustControls(_0x161f62 = false) {
    if (
      this._unitId === null ||
      this._subUnitId === null ||
      this._activeShapeId === null
    )
      return;
    let _0x25b77a = this._getActiveDrawingParam();
    if (
      (_0x25b77a == null ? undefined : _0x25b77a.drawingType) !==
        o.DrawingTypeEnum["DRAWING_SHAPE"] ||
      !_0x25b77a.transform
    )
      return;
    let _0x4ea0ed = this._docsShapeService["getShapeModel"](
      this._unitId,
      this._subUnitId,
      this._activeShapeId,
    );
    if (!_0x4ea0ed || _0x4ea0ed.isLineShape()) return;
    let {
      left: _0x8dcc32 = 0,
      top: _0x96823a = 0,
      width: _0x515c3c = 0,
      height: _0x5ea31c = 0,
      flipX: _0x4a5df0,
      flipY: _0x4616c0,
      angle: _0x1239e0 = 0,
    } = _0x25b77a.transform;
    (_0x161f62 || !this._activeShapeAdjustPointList) &&
      (_0x4ea0ed.updateContext({ width: _0x515c3c, height: _0x5ea31c }),
      (this._activeShapeAdjustPointList = _0x4ea0ed.getDrawingPoints()));
    let _0x3ea8a4 = this._activeShapeAdjustPointList;
    if (!(_0x3ea8a4 != null && _0x3ea8a4.length)) return;
    let { scene: _0x53e619 } = this._context;
    for (let _0x4a2904 of _0x3ea8a4) {
      let _0x2f4dce = this._toVisualAdjustPoint(
        _0x4a2904,
        _0x515c3c,
        _0x5ea31c,
        !!_0x4a5df0,
        !!_0x4616c0,
        _0x1239e0,
      );
      this._addShapeAdjustControl(
        _0x53e619,
        _0x2f4dce,
        _0x2f4dce.adjName,
        _0x8dcc32,
        _0x96823a,
        this._unitId,
        this._subUnitId,
      );
    }
  }
  _toVisualAdjustPoint(
    _0x351097,
    _0x3247bb,
    _0x5ee13d,
    _0x1e1fc7,
    _0x1a5a2d,
    _0xeb2ae9,
  ) {
    let _0x28f59e = _0x351097.x,
      _0x293195 = _0x351097.y;
    if (
      (_0x1e1fc7 && (_0x28f59e = _0x3247bb - _0x28f59e),
      _0x1a5a2d && (_0x293195 = _0x5ee13d - _0x293195),
      _0xeb2ae9 !== 0)
    ) {
      let _0x364202 = _0x3247bb / 2,
        _0x30ae75 = _0x5ee13d / 2,
        _0x38088b = (_0xeb2ae9 * Math.PI) / 180,
        _0x4769a9 = Math.cos(_0x38088b),
        _0x47f1f4 = Math.sin(_0x38088b),
        _0x2aa88f = _0x28f59e - _0x364202,
        _0x3d55f2 = _0x293195 - _0x30ae75;
      ((_0x28f59e =
        _0x364202 + (_0x2aa88f * _0x4769a9 - _0x3d55f2 * _0x47f1f4)),
        (_0x293195 =
          _0x30ae75 + (_0x2aa88f * _0x47f1f4 + _0x3d55f2 * _0x4769a9)));
    }
    return { x: _0x28f59e, y: _0x293195, adjName: _0x351097.adjName };
  }
  _updateShapeAdjustControls(_0x2353ba = false) {
    (_0x2353ba && this._clearShapeAdjustControls(),
      this._createShapeAdjustControls(_0x2353ba));
  }
  _addShapeAdjustControl(
    _0x1a23e6,
    _0x1ce5ed,
    _0x552329,
    _0x16a841,
    _0x1f255d,
    _0x60d2cc,
    _0x265307,
  ) {
    if (!this._activeShapeId) return;
    let _0x5bddd8 =
        "doc-shape-adjust-point-" + this._activeShapeId + "-" + _0x552329,
      _0x3c0d2c = _0x1a23e6.getObjectIncludeInGroup(_0x5bddd8);
    if (_0x3c0d2c) {
      (_0x3c0d2c.transformByState({
        left: _0x1ce5ed.x + _0x16a841 - i.ShapeDefaultConfig["adjHandleSize"],
        top: _0x1ce5ed.y + _0x1f255d - i.ShapeDefaultConfig["adjHandleSize"],
      }),
        _0x3c0d2c.makeDirty(true));
      return;
    }
    let _0x153383 = new lt(_0x5bddd8, {
      left: _0x1ce5ed.x + _0x16a841 - i.ShapeDefaultConfig["adjHandleSize"],
      top: _0x1ce5ed.y + _0x1f255d - i.ShapeDefaultConfig["adjHandleSize"],
      adjName: _0x552329,
      shapeId: this._activeShapeId,
      unitId: _0x60d2cc,
      subUnitId: _0x265307,
      width: i.ShapeDefaultConfig["adjHandleSize"] + 8,
      height: i.ShapeDefaultConfig["adjHandleSize"] + 8,
      zIndex: l.DRAWING_OBJECT_LAYER_INDEX + 1,
      evented: true,
    });
    (this._adjustPointObjects["push"](_0x153383),
      this._attachAdjustEvent(_0x153383, _0x1a23e6, _0x552329),
      _0x1a23e6.addObject(_0x153383, l.DRAWING_OBJECT_LAYER_INDEX + 1));
  }
  _clearShapeAdjustControls() {
    (this._adjustPointObjects["forEach"]((_0x25ec13) => _0x25ec13.dispose()),
      (this._adjustPointObjects = []));
  }
  _updateAdjustControlPositions() {
    this._createShapeAdjustControls();
  }
  _toScenePoint(_0x22d47e, _0x52039c, _0x46ebff) {
    let _0x5d80dc = l.Vector2["FromArray"]([_0x52039c, _0x46ebff]),
      _0x2e777a =
        _0x22d47e.getActiveViewportByCoord(_0x5d80dc) ??
        _0x22d47e.getViewports()[0];
    return (
      (_0x2e777a == null
        ? undefined
        : _0x2e777a.transformVector2SceneCoord(_0x5d80dc)) ?? _0x5d80dc
    );
  }
  _attachAdjustEvent(_0x5b983c, _0x14dd72, _0x20cc0e) {
    this.disposeWithMe(
      (0, o.toDisposable)(
        _0x5b983c.onPointerDown$["subscribeEvent"]((_0x29458e, _0xe25aaf) => {
          var _0x533a18;
          let _0x56391b = _0x5b983c.getDrawingSearch();
          ((this._activeAdjustInfo = this._getShapeAdjustInfosById(
            _0x56391b.unitId,
            _0x56391b.subUnitId,
            _0x56391b.drawingId,
            _0x20cc0e,
          )),
            (this._activeShapeModel = this._docsShapeService["getShapeModel"](
              _0x56391b.unitId,
              _0x56391b.subUnitId,
              _0x56391b.drawingId,
            )));
          let _0x100935 = this._getActiveDrawingParam(),
            _0x119b95 = _0x100935 == null ? undefined : _0x100935.transform;
          if (!_0x100935 || !_0x119b95 || !this._activeShapeModel) return;
          ((this._baseShapeLeft = _0x119b95.left || 0),
            (this._baseShapeTop = _0x119b95.top || 0),
            (this._baseShapeWidth = _0x119b95.width || 0),
            (this._baseShapeHeight = _0x119b95.height || 0));
          let _0x343f81 = !!_0x119b95.flipX,
            _0x431b6c = !!_0x119b95.flipY,
            _0xa9f28a = _0x119b95.angle || 0,
            _0xa0f1c = {
              ...(((_0x533a18 = this._activeAdjustInfo) == null
                ? undefined
                : _0x533a18.currentAdjustValues) ?? {}),
            };
          ((this._isStartAdjusting = true),
            _0x14dd72.disableObjectsEvent(),
            (this._adjHandlerPointerMove = _0x14dd72.onPointerMove$[
              "subscribeEvent"
            ]((_0x4ccacb, _0x5910f4) => {
              var _0x2af727;
              if (
                !this._isStartAdjusting ||
                !this._activeShapeModel ||
                !this._activeAdjustInfo
              )
                return;
              (_0x14dd72.disableObjectsEvent(),
                _0x14dd72.setCursor(l.CURSOR_TYPE["CROSSHAIR"]));
              let _0x1e1e98 = this._toScenePoint(
                  _0x14dd72,
                  _0x4ccacb.offsetX,
                  _0x4ccacb.offsetY,
                ),
                _0x4dc309 = _0x1e1e98.x - this._baseShapeLeft,
                _0x11cc21 = _0x1e1e98.y - this._baseShapeTop;
              if (_0xa9f28a !== 0) {
                let _0x3a32bb = this._baseShapeWidth / 2,
                  _0x2a71f4 = this._baseShapeHeight / 2,
                  _0x2d8918 = (_0xa9f28a * Math.PI) / 180,
                  _0x8dfe5a = Math.cos(_0x2d8918),
                  _0x4101f9 = Math.sin(_0x2d8918),
                  _0x29d13b = _0x4dc309 - _0x3a32bb,
                  _0x8fcb24 = _0x11cc21 - _0x2a71f4;
                ((_0x4dc309 =
                  _0x3a32bb + (_0x29d13b * _0x8dfe5a + _0x8fcb24 * _0x4101f9)),
                  (_0x11cc21 =
                    _0x2a71f4 +
                    (-_0x29d13b * _0x4101f9 + _0x8fcb24 * _0x8dfe5a)));
              }
              (_0x343f81 && (_0x4dc309 = this._baseShapeWidth - _0x4dc309),
                _0x431b6c && (_0x11cc21 = this._baseShapeHeight - _0x11cc21));
              let _0x5590b9 = {
                  left: 0,
                  top: 0,
                  width: this._baseShapeWidth,
                  height: this._baseShapeHeight,
                },
                _0x52f920 = this._activeShapeModel["calcAdjValues"](
                  _0x5590b9,
                  { x: _0x4dc309, y: _0x11cc21 },
                  this._activeAdjustInfo,
                  _0x343f81,
                  _0x431b6c,
                );
              if (Object.keys(_0x52f920).length !== 0) {
                for (let [_0x20e6cc, _0x187906] of Object.entries(_0x52f920))
                  this._activeShapeModel["setAdjustValueByName"](
                    _0x20e6cc,
                    _0x187906,
                  );
                (this._activeShapeModel["updateContext"]({
                  width: this._baseShapeWidth,
                  height: this._baseShapeHeight,
                }),
                  (_0x2af727 = this._getActiveDrawingShape(_0x14dd72)) ==
                    null || _0x2af727.makeDirty(true),
                  (this._activeShapeAdjustPointList =
                    this._getShapeAdjustPointListById(
                      _0x56391b.unitId,
                      _0x56391b.subUnitId,
                      _0x56391b.drawingId,
                    )),
                  this._updateAdjustControlPositions(),
                  _0x5910f4.stopPropagation());
              }
            })),
            (this._adjHandlerPointerUp = _0x14dd72.onPointerUp$[
              "subscribeEvent"
            ]((_0x53ca5e, _0xefcaa6) => {
              var _0x38f90c, _0x1add34;
              ((_0x38f90c = this._adjHandlerPointerMove) == null ||
                _0x38f90c.unsubscribe(),
                (_0x1add34 = this._adjHandlerPointerUp) == null ||
                  _0x1add34.unsubscribe(),
                _0x14dd72.resetCursor());
              let _0x5dc511 = this._activeAdjustInfo;
              if (_0x5dc511 && this._activeShapeModel) {
                let _0x6a8c04 = {};
                for (let _0x41ae49 of Object.keys(
                  _0x5dc511.currentAdjustValues,
                )) {
                  let _0x387174 =
                    this._activeShapeModel["getAdjustValueByName"](_0x41ae49);
                  _0x387174 !== undefined && (_0x6a8c04[_0x41ae49] = _0x387174);
                }
                Object.keys(_0x6a8c04).length > 0 &&
                  R(
                    this._commandService,
                    _0x56391b.unitId,
                    _0x56391b.subUnitId,
                    _0x56391b.drawingId,
                    { oldShapeData: { adjustValues: _0xa0f1c } },
                    { adjustValues: _0x6a8c04 },
                  );
              }
              ((this._activeAdjustInfo = undefined),
                (this._activeShapeModel = undefined),
                (this._isStartAdjusting = false),
                _0x14dd72.enableObjectsEvent(),
                _0xefcaa6.stopPropagation());
            })),
            _0xe25aaf.stopPropagation());
        }),
      ),
    );
  }
  _registerDrawingTransformHandler() {
    let { scene: _0xc17cef } = this._context,
      _0x38c54e = _0xc17cef.getTransformerByCreate();
    (this.disposeWithMe(
      _0x38c54e.changeStart$["subscribe"]((_0x242977) => {
        (this._createShapeAdjustControls(),
          _0x242977.objects !== null &&
            _0x242977.objects["size"] === 1 &&
            _0x242977.objects["values"]().next().value instanceof X &&
            (this._isShouldShowDrawingShapeAdjust = true));
      }),
    ),
      this.disposeWithMe(
        _0x38c54e.changing$["subscribe"](() => {
          this._isShouldShowDrawingShapeAdjust &&
            this._clearShapeAdjustControls();
        }),
      ),
      this.disposeWithMe(
        _0xc17cef.onPointerUp$["subscribeEvent"](() => {
          this._isShouldShowDrawingShapeAdjust &&
            ((this._isShouldShowDrawingShapeAdjust = false),
            this._createShapeAdjustControls());
        }),
      ),
      this.disposeWithMe(
        _0x38c54e.changeEnd$["subscribe"](() => {
          this._unitId &&
            this._subUnitId &&
            this._activeShapeId &&
            ((this._activeShapeAdjustPointList =
              this._getShapeAdjustPointListById(
                this._unitId,
                this._subUnitId,
                this._activeShapeId,
              )),
            this._updateAdjustControlPositions());
        }),
      ));
  }
  _registerDrawingFocusChangeHandler() {
    (this.disposeWithMe(
      this._commandService["onCommandExecuted"]((_0x135e99) => {
        if (_0x135e99.id !== r.UpdateDocShapeDataMutation["id"]) return;
        let { unitId: _0x22f806, shapeId: _0x1a9c19 } = _0x135e99.params;
        _0x22f806 === this._unitId &&
          _0x1a9c19 === this._activeShapeId &&
          this.refreshAdjustControls();
      }),
    ),
      this.disposeWithMe(
        this._drawingManagerService["focus$"].subscribe((_0x1c7e35) => {
          if (_0x1c7e35.length === 1) {
            let _0x3626a9 = _0x1c7e35[0],
              _0xa52020 =
                this._drawingManagerService["getDrawingByParam"](_0x3626a9);
            if (
              (_0xa52020 == null ? undefined : _0xa52020.drawingType) ===
              o.DrawingTypeEnum["DRAWING_SHAPE"]
            ) {
              ((this._activeShapeId = _0x3626a9.drawingId),
                (this._unitId = _0x3626a9.unitId),
                (this._subUnitId = _0x3626a9.subUnitId),
                (this._activeShapeAdjustPointList =
                  this._getShapeAdjustPointListById(
                    _0x3626a9.unitId,
                    _0x3626a9.subUnitId,
                    _0x3626a9.drawingId,
                  )),
                this._clearShapeAdjustControls(),
                this._createShapeAdjustControls());
              return;
            }
          }
          ((this._activeShapeId = null),
            (this._activeShapeAdjustPointList = undefined),
            (this._unitId = null),
            (this._subUnitId = null),
            this._clearShapeAdjustControls());
        }),
      ),
      this.disposeWithMe(
        (0, p.merge)(
          this._drawingManagerService["update$"],
          this._drawingManagerService["refreshTransform$"],
        ).subscribe((_0x28b90b) => {
          var _0x4ca6cb;
          let _0x3d63ad = _0x28b90b.find(
            (_0xe15bee) =>
              _0xe15bee.drawingId === this._activeShapeId &&
              _0xe15bee.unitId === this._unitId &&
              _0xe15bee.subUnitId === this._subUnitId,
          );
          _0x3d63ad &&
            ((_0x4ca6cb =
              this._drawingManagerService["getDrawingByParam"](_0x3d63ad)) ==
            null
              ? undefined
              : _0x4ca6cb.drawingType) === o.DrawingTypeEnum["DRAWING_SHAPE"] &&
            this._updateShapeAdjustControls(true);
        }),
      ),
      this.disposeWithMe(
        this._drawingManagerService["remove$"].subscribe((_0x137f02) => {
          for (let _0x3819de of _0x137f02)
            this._activeShapeId === _0x3819de.drawingId &&
              ((this._activeShapeId = null),
              (this._activeShapeAdjustPointList = undefined),
              (this._unitId = null),
              (this._subUnitId = null),
              this._clearShapeAdjustControls());
        }),
      ));
  }
};
Z = N(
  [
    M(1, u.IDrawingManagerService),
    M(2, (0, o.Inject)(r.DocsShapeService)),
    M(3, o.ICommandService),
  ],
  Z,
);
function dt(_0x57404d) {
  return _0x57404d.behindText === true ||
    _0x57404d.behindText === o.BooleanNumber["TRUE"] ||
    (_0x57404d.layoutType === o.PositionedObjectLayoutType["WRAP_NONE"] &&
      _0x57404d.behindDoc === o.BooleanNumber["TRUE"])
    ? t.DOCS_COMPONENT_MAIN_LAYER_INDEX - 1
    : l.DRAWING_OBJECT_LAYER_INDEX;
}
let Q = class extends o.Disposable {
  constructor(
    _0x56c33d,
    _0x50ba7f,
    _0x303449,
    _0x27023e,
    _0x5e35bd,
    _0x4e8659,
    _0x2d1a41,
  ) {
    (super(),
      (this._drawingManagerService = _0x56c33d),
      (this._docsShapeService = _0x50ba7f),
      (this._localeService = _0x303449),
      (this._imageIoService = _0x27023e),
      (this._urlImageService = _0x5e35bd),
      (this._shapeTextEditingService = _0x4e8659),
      (this._shapeFormulaService = _0x2d1a41),
      q(this, "_formulaShapes", new Map()),
      this.disposeWithMe(
        this._shapeFormulaService["presentationChanged$"].subscribe(
          (_0x5f14d7) => {
            var _0x2976b0;
            (_0x2976b0 = this._formulaShapes["get"](
              this._formulaKey(
                _0x5f14d7.unitId,
                _0x5f14d7.subUnitId,
                _0x5f14d7.shapeId,
              ),
            )) == null ||
              _0x2976b0.forEach((_0x1bdcf2) =>
                _0x1bdcf2.setFormulaPresentation(
                  _0x5f14d7.presentation,
                  _0x5f14d7.animationEnabled,
                ),
              );
          },
        ),
      ),
      this.disposeWithMe(
        this._drawingManagerService["remove$"].subscribe((_0x2877c8) => {
          _0x2877c8.forEach((_0x38eb6e) => {
            (this._shapeFormulaService["unregister"]({
              unitId: _0x38eb6e.unitId,
              subUnitId: _0x38eb6e.subUnitId,
              shapeId: _0x38eb6e.drawingId,
            }),
              this._formulaShapes["delete"](
                this._formulaKey(
                  _0x38eb6e.unitId,
                  _0x38eb6e.subUnitId,
                  _0x38eb6e.drawingId,
                ),
              ));
          });
        }),
      ));
  }
  renderDrawingShape(_0x4821ef, _0x1755eb) {
    let {
      transform: _0x233b2f,
      drawingType: _0x52e1c2,
      srcRect: _0xd3cc0f,
      prstGeom: _0x4e78ba,
      groupId: _0x2e543f,
      unitId: _0x376983,
      subUnitId: _0x1812c2,
      drawingId: _0x4fb843,
      isMultiTransform: _0x54df91,
      transforms: _0x5d5756,
      hidden: _0x142ee1,
      selectable: _0x4f4db1,
    } = _0x4821ef;
    if (
      _0x52e1c2 !== o.DrawingTypeEnum["DRAWING_SHAPE"] ||
      !this._drawingManagerService["getDrawingVisible"]() ||
      _0x233b2f == null
    )
      return;
    let _0x2a8c92 = this._drawingManagerService["getDrawingEditable"](),
      _0x1c9d6b = _0x54df91 && _0x5d5756 ? _0x5d5756 : [_0x233b2f],
      _0x4c75fc = [];
    for (let _0x45072b of _0x1c9d6b) {
      let {
          left: _0x253f89,
          top: _0x13b799,
          width: _0x1775c0,
          height: _0x246edc,
          angle: _0x49d47d,
          flipX: _0x368fd3,
          flipY: _0x3139f4,
          skewX: _0x2c82ba,
          skewY: _0x343aa1,
        } = _0x45072b,
        _0x5055c4 = _0x1c9d6b.indexOf(_0x45072b),
        _0x4efb45 = (0, u.getDrawingShapeKeyByDrawingSearch)(
          { unitId: _0x376983, subUnitId: _0x1812c2, drawingId: _0x4fb843 },
          _0x54df91 ? _0x5055c4 : undefined,
        ),
        _0x4658ef = _0x1755eb.getObjectIncludeInGroup(_0x4efb45);
      if (_0x4658ef != null) {
        let _0x3510c3 = {
          unitId: _0x376983,
          subUnitId: _0x1812c2,
          shapeId: _0x4fb843,
        };
        (_0x4658ef instanceof X &&
          this.refreshFormulaPresentation(_0x4658ef, _0x3510c3),
          _0x4658ef.transformByState({
            left: _0x253f89,
            top: _0x13b799,
            width: _0x1775c0,
            height: _0x246edc,
            angle: _0x49d47d,
            flipX: _0x368fd3,
            flipY: _0x3139f4,
            skewX: _0x2c82ba,
            skewY: _0x343aa1,
          }));
        continue;
      }
      let _0x2d7f66 = this._drawingManagerService["getDrawingOrder"](
          _0x376983,
          _0x1812c2,
        ),
        _0x3013ef = _0x2d7f66.indexOf(_0x4fb843);
      if (
        _0x1755eb.getObjectIncludeInGroup(_0x4efb45) ||
        !this._drawingManagerService["getDrawingVisible"]()
      )
        continue;
      let _0x32b5a1 = this._docsShapeService["getShapeModel"](
        _0x376983,
        _0x1812c2,
        _0x4fb843,
      );
      if (!_0x32b5a1) continue;
      let _0x326134 = (0, i.isConnectorShape)(_0x32b5a1.getShapeType())
          ? {
              ...e.SHAPE_EDITOR_TRANSFORMER_CONFIG,
              rotateEnabled: false,
              resizeEnabled: false,
              borderEnabled: false,
            }
          : e.SHAPE_EDITOR_TRANSFORMER_CONFIG,
        _0x4aee37 = _0x32b5a1.getShapeData().formulaBinding,
        _0x4f6d34 = {
          unitId: _0x376983,
          subUnitId: _0x1812c2,
          shapeId: _0x4fb843,
        };
      _0x4aee37 && this._shapeFormulaService["register"](_0x4f6d34, _0x4aee37);
      let _0x1d17ff = new X(_0x4efb45, {
        ..._0x45072b,
        zIndex: _0x3013ef === -1 ? _0x2d7f66.length - 1 : _0x3013ef,
        shapeModel: _0x32b5a1,
        localeService: this._localeService,
        shapeId: _0x4fb843,
        unitId: _0x376983,
        subUnitId: _0x1812c2,
        visible: _0x142ee1 !== true,
        evented: _0x4f4db1 !== false,
        formulaPresentation: _0x4aee37
          ? this._shapeFormulaService["getPresentation"](_0x4f6d34)
          : undefined,
        animateFormulaPresentation:
          (_0x4aee37 == null ? undefined : _0x4aee37.animationEnabled) !==
          false,
        transformerConfig: _0x326134,
      });
      if (_0x4aee37) {
        let _0x2daeda = this._formulaKey(_0x376983, _0x1812c2, _0x4fb843),
          _0x25ac12 = this._formulaShapes["get"](_0x2daeda) ?? new Set();
        (_0x25ac12.add(_0x1d17ff),
          this._formulaShapes["set"](_0x2daeda, _0x25ac12));
      }
      (this.disposeWithMe(
        (0, o.toDisposable)(
          _0x1d17ff.onDblclick$["subscribeEvent"]((_0x31cc19, _0x4952df) => {
            _0x32b5a1.isLineShape() ||
              _0x4aee37 ||
              (this._shapeTextEditingService["setEditing"]({
                visible: true,
                unitId: _0x376983,
                subUnitId: _0x1812c2,
                shapeId: _0x4fb843,
                shapeKey: _0x1d17ff.oKey,
              }),
              _0x4952df.stopPropagation());
          }),
        ),
      ),
        _0x1755eb.addObject(_0x1d17ff, dt(_0x4821ef)),
        _0x2a8c92 && _0x1755eb.attachTransformerTo(_0x1d17ff),
        _0x2e543f &&
          (0, d.insertGroupObject)(
            { drawingId: _0x2e543f, unitId: _0x376983, subUnitId: _0x1812c2 },
            _0x1d17ff,
            _0x1755eb,
            this._drawingManagerService,
          ),
        _0x4e78ba != null && _0x1d17ff.setPrstGeom(_0x4e78ba),
        _0xd3cc0f != null && _0x1d17ff.setSrcRect(_0xd3cc0f),
        this._loadShapePictureFill(_0x1d17ff, _0x32b5a1.getShapeData()),
        _0x4c75fc.push(_0x1d17ff));
    }
    return _0x4c75fc;
  }
  _formulaKey(_0x4113cb, _0x62c705, _0x5eb275) {
    return _0x4113cb + "\x00" + _0x62c705 + "\x00" + _0x5eb275;
  }
  refreshFormulaPresentation(_0x2b8160, _0x11fa15) {
    let _0x469f1d = this._docsShapeService["getShapeModel"](
        _0x11fa15.unitId,
        _0x11fa15.subUnitId,
        _0x11fa15.shapeId,
      ),
      _0x31b4e1 =
        _0x469f1d == null ? undefined : _0x469f1d.getShapeData().formulaBinding,
      _0x53c3d3 = this._formulaKey(
        _0x11fa15.unitId,
        _0x11fa15.subUnitId,
        _0x11fa15.shapeId,
      );
    if (_0x31b4e1) {
      this._shapeFormulaService["register"](_0x11fa15, _0x31b4e1);
      let _0x2f392f = this._formulaShapes["get"](_0x53c3d3) ?? new Set();
      (_0x2f392f.add(_0x2b8160),
        this._formulaShapes["set"](_0x53c3d3, _0x2f392f));
    } else {
      var _0x5ae950;
      (this._shapeFormulaService["unregister"](_0x11fa15),
        (_0x5ae950 = this._formulaShapes["get"](_0x53c3d3)) == null ||
          _0x5ae950.delete(_0x2b8160));
    }
    _0x2b8160.setFormulaPresentation(
      _0x31b4e1
        ? this._shapeFormulaService["getPresentation"](_0x11fa15)
        : undefined,
      (_0x31b4e1 == null ? undefined : _0x31b4e1.animationEnabled) !== false,
    );
  }
  refreshShapeFillImage(_0x4b4c90) {
    let _0x18f0e5 = _0x4b4c90.shapeModel["getShapeData"](),
      _0x10221b = _0x18f0e5.fill;
    if (
      !_0x10221b ||
      _0x10221b.fillType !== i.ShapeFillEnum["PictureFill"] ||
      !_0x10221b.fillImageSource
    ) {
      _0x4b4c90.setFillImage(undefined);
      return;
    }
    this._loadShapePictureFill(_0x4b4c90, _0x18f0e5);
  }
  _loadShapePictureFill(_0x395ebc, _0x11dcfd) {
    let _0x1f5265 = _0x11dcfd.fill;
    if (
      !_0x1f5265 ||
      _0x1f5265.fillType !== i.ShapeFillEnum["PictureFill"] ||
      !_0x1f5265.fillImageSource
    )
      return;
    let _0x22b978 = _0x1f5265.fillImageSource,
      _0x5f3523 = _0x1f5265.fillImageSourceType ?? i.ImageSourceTypeEnum["URL"],
      _0x39284d = this._imageIoService["getImageSourceCache"](
        _0x22b978,
        _0x5f3523,
      );
    if (_0x39284d) {
      _0x395ebc.setFillImage(_0x39284d);
      return;
    }
    this._loadAndSetImage(_0x395ebc, _0x22b978, _0x5f3523);
  }
  async _loadAndSetImage(_0x23215a, _0x43ac6d, _0x33e2f2) {
    let _0x7016aa;
    try {
      if (_0x33e2f2 === i.ImageSourceTypeEnum["UUID"])
        _0x7016aa = await this._imageIoService["getImage"](_0x43ac6d);
      else {
        if (_0x33e2f2 === i.ImageSourceTypeEnum["URL"])
          try {
            _0x7016aa = await this._urlImageService["getImage"](_0x43ac6d);
          } catch {
            _0x7016aa = _0x43ac6d;
          }
        else _0x7016aa = _0x43ac6d;
      }
    } catch (_0x14c02a) {
      console.error(
        "[ShapeRender] Failed to resolve picture fill source",
        _0x14c02a,
      );
      return;
    }
    let _0x1dd68c = new window.Image();
    ((_0x1dd68c.onload = () => {
      (this._imageIoService["addImageSourceCache"](
        _0x43ac6d,
        _0x33e2f2,
        _0x1dd68c,
      ),
        _0x23215a.setFillImage(_0x1dd68c));
    }),
      (_0x1dd68c.onerror = () => {
        console.error(
          "[ShapeRender] Failed to load picture fill image",
          _0x43ac6d,
        );
      }),
      (_0x1dd68c.src = _0x7016aa));
  }
};
Q = N(
  [
    M(0, u.IDrawingManagerService),
    M(1, (0, o.Inject)(r.DocsShapeService)),
    M(2, (0, o.Inject)(o.LocaleService)),
    M(3, o.IImageIoService),
    M(4, o.IURLImageService),
    M(5, (0, o.Inject)(J)),
    M(6, (0, o.Inject)(a.ShapeFormulaService)),
  ],
  Q,
);
let ft = class extends o.Disposable {
  constructor(_0x379329, _0x2c1b9a, _0x708c5e) {
    (super(),
      (this._docPrintInterceptorService = _0x379329),
      (this._drawingManagerService = _0x2c1b9a),
      (this._shapeRenderController = _0x708c5e),
      this._initPrinting());
  }
  _initPrinting() {
    this.disposeWithMe(
      this._docPrintInterceptorService["interceptor"].intercept(
        this._docPrintInterceptorService["interceptor"].getInterceptPoints()
          .PRINTING_COMPONENT_COLLECT,
        {
          handler: (_0x3d2372, _0x37ba5b, _0x443946) => {
            var _0x3c0f7b;
            let {
                unitId: _0x42845f,
                scene: _0x2f90fb,
                skeleton: _0x1dc5d1,
              } = _0x37ba5b,
              { pageIndex: _0x158756 } = _0x37ba5b,
              _0x512f90 =
                (_0x3c0f7b =
                  this._drawingManagerService["getDrawingDataForUnit"](
                    _0x42845f,
                  )) == null
                  ? undefined
                  : _0x3c0f7b[_0x42845f],
              _0x286f06 = pt(
                this._docPrintInterceptorService,
                _0x1dc5d1,
                _0x158756,
              );
            return (
              _0x512f90 == null ||
                _0x512f90.order["forEach"]((_0x42fbc9) => {
                  if (_0x286f06 && !_0x286f06.has(_0x42fbc9)) return;
                  let _0x20a4c8 = _0x512f90.data[_0x42fbc9];
                  _0x20a4c8.drawingType ===
                    o.DrawingTypeEnum["DRAWING_SHAPE"] &&
                    !_0x20a4c8.hidden &&
                    this._shapeRenderController["renderDrawingShape"](
                      _0x20a4c8,
                      _0x2f90fb,
                    );
                }),
              _0x443946(_0x3d2372)
            );
          },
        },
      ),
    );
  }
};
ft = N(
  [
    M(0, (0, o.Inject)(t.DocPrintInterceptorService)),
    M(1, u.IDrawingManagerService),
    M(2, (0, o.Inject)(Q)),
  ],
  ft,
);
function pt(_0x26429f, _0x65a551, _0x24b30b) {
  var _0x21bb67, _0xbaaaaf;
  let _0x185292 = _0x26429f;
  if (_0x185292.getPageDrawingIds)
    return _0x185292.getPageDrawingIds(_0x65a551, _0x24b30b);
  let _0x4ab822 = _0x65a551.getSkeletonData();
  if (!_0x4ab822 || _0x4ab822.pages["length"] <= 1 || _0x24b30b == null)
    return null;
  let _0x43be22 = new Set(),
    _0x106c9c = _0x4ab822.pages[_0x24b30b];
  if (!_0x106c9c) return _0x43be22;
  mt(_0x106c9c, _0x43be22);
  let _0x47fb01 =
      (_0x21bb67 = _0x4ab822.skeHeaders["get"](_0x106c9c.headerId)) == null
        ? undefined
        : _0x21bb67.get(_0x106c9c.pageWidth),
    _0x5826e6 =
      (_0xbaaaaf = _0x4ab822.skeFooters["get"](_0x106c9c.footerId)) == null
        ? undefined
        : _0xbaaaaf.get(_0x106c9c.pageWidth);
  return (
    _0x47fb01 && mt(_0x47fb01, _0x43be22),
    _0x5826e6 && mt(_0x5826e6, _0x43be22),
    _0x43be22
  );
}
function mt(_0x351cc9, _0x9f2455) {
  for (let _0x10d2d5 of _0x351cc9.skeDrawings["keys"]())
    _0x9f2455.add(_0x10d2d5);
  for (let _0x571b81 of _0x351cc9.skeTables["values"]())
    for (let _0x356758 of _0x571b81.rows)
      for (let _0x4e3653 of _0x356758.cells) mt(_0x4e3653, _0x9f2455);
}
const ht = "docs-shape-contextual-ribbon";
let gt = class extends o.Disposable {
  constructor(
    _0x300888,
    _0x249c0d,
    _0x545a4d,
    _0x4b6908,
    _0x12bd46,
    _0x435434,
  ) {
    (super(),
      (this._menuManagerService = _0x300888),
      (this._ribbonService = _0x249c0d),
      (this._drawingManagerService = _0x545a4d),
      (this._univerInstanceService = _0x4b6908),
      (this._renderManagerService = _0x12bd46),
      (this._shapeFloatingToolbarService = _0x435434),
      q(this, "_visible", false),
      this._menuManagerService["mergeMenu"](Ue),
      this.disposeWithMe(
        (0, o.toDisposable)(
          this._drawingManagerService["focus$"].subscribe(() => this._update()),
        ),
      ),
      this._update());
  }
  dispose() {
    (this._shapeFloatingToolbarService["setFallbackVisible"](false, ht),
      this._hide(),
      super.dispose());
  }
  _update() {
    var _0x2ac7b2;
    let _0x1687b0 = this._drawingManagerService["getFocusDrawings"](),
      _0x48cbdc = _0x1687b0.length === 1 ? _0x1687b0[0] : undefined;
    if (
      (_0x48cbdc == null ? undefined : _0x48cbdc.drawingType) !==
        o.DrawingTypeEnum["DRAWING_SHAPE"] ||
      this._univerInstanceService["getUnitType"](_0x48cbdc.unitId) !==
        o.UniverInstanceType["UNIVER_DOC"]
    ) {
      (this._shapeFloatingToolbarService["setFallbackVisible"](false, ht),
        this._hide());
      return;
    }
    let _0x38e23e =
      (0, e.resolveShapeContextualRibbonHostMode)(
        (_0x2ac7b2 = this._renderManagerService["getRenderUnitById"](
          _0x48cbdc.unitId,
        )) == null
          ? undefined
          : _0x2ac7b2.engine["getCanvasElement"](),
      ) === "isolated";
    if (
      (this._shapeFloatingToolbarService["setFallbackVisible"](_0x38e23e, ht),
      _0x38e23e)
    ) {
      this._hide();
      return;
    }
    this._visible ||
      ((this._visible = true),
      this._ribbonService["showContextualTab"](C, { activate: true }));
  }
  _hide() {
    this._visible &&
      ((this._visible = false),
      this._ribbonService["hideContextualTab"](C),
      this._ribbonService["setCollapsedIds"]([]));
  }
};
gt = N(
  [
    M(0, n.IMenuManagerService),
    M(1, n.IRibbonService),
    M(2, u.IDrawingManagerService),
    M(3, o.IUniverInstanceService),
    M(4, l.IRenderManagerService),
    M(5, (0, o.Inject)(e.ShapeFloatingToolbarService)),
  ],
  gt,
);
function _t(_0x4a8297, _0x41cbd4) {
  let _0x2d41da = _0x4a8297;
  for (; _0x2d41da;) {
    if (_0x41cbd4(_0x2d41da)) return _0x2d41da;
    _0x2d41da =
      typeof _0x2d41da.getParent == "function" ? _0x2d41da.getParent() : null;
  }
  return null;
}
function vt(_0x745f92) {
  return _t(_0x745f92, (_0x1619f1) => _0x1619f1 instanceof X);
}
function yt(_0x4c8798) {
  return (_0x4c8798 == null ? undefined : _0x4c8798.formulaBinding) == null;
}
let bt = class extends o.Disposable {
  constructor(
    _0x325c12,
    _0x5f161e,
    _0x33088d,
    _0x5580ec,
    _0x45bf87,
    _0x3e850c,
  ) {
    (super(),
      (this._context = _0x325c12),
      (this._shapeTextEditingService = _0x5f161e),
      (this._drawingManagerService = _0x33088d),
      (this._contextService = _0x5580ec),
      (this._docLayoutInteractionService = _0x45bf87),
      (this._docsShapeService = _0x3e850c),
      q(this, "_lastEditingShapeKey", null),
      q(this, "_layoutInteraction", null),
      this._initEvents(),
      this._initSelection(),
      this._initEditingParams());
  }
  dispose() {
    (this._endLayoutInteraction(), super.dispose());
  }
  _initEvents() {
    let { scene: _0x116878 } = this._context;
    this.disposeWithMe(
      _0x116878.onDblclick$["subscribeEvent"]((_0x2373ff, _0x24c4c8) => {
        let { offsetX: _0x4ba379, offsetY: _0x566c52 } = _0x2373ff,
          _0x3ad86c = l.Vector2["FromArray"]([_0x4ba379, _0x566c52]),
          _0x13f363 =
            vt(_0x116878.pick(_0x3ad86c)) ??
            this._getFocusedShapeAtPoint(_0x3ad86c);
        if (_0x13f363) {
          _0x24c4c8.stopPropagation();
          let _0x1cd1f8 = this._docsShapeService["getShapeModel"](
            _0x13f363.unitId,
            _0x13f363.subUnitId,
            _0x13f363.shapeId,
          );
          if (
            !_0x1cd1f8 ||
            (0, i.isConnectorShape)(_0x1cd1f8.getShapeType()) ||
            !yt(_0x1cd1f8.getShapeData())
          )
            return;
          this._shapeTextEditingService["setEditing"]({
            visible: true,
            unitId: _0x13f363.unitId,
            subUnitId: _0x13f363.subUnitId,
            shapeId: _0x13f363.shapeId,
            shapeKey: _0x13f363.oKey,
          });
        }
      }),
    );
  }
  _getFocusedShapeAtPoint(_0x17ef2c) {
    let { scene: _0x5d3a06 } = this._context;
    return (
      this._drawingManagerService["getFocusDrawings"]()
        .map((_0x15a097) =>
          _0x5d3a06.getObjectIncludeInGroup(
            (0, u.getDrawingShapeKeyByDrawingSearch)(_0x15a097),
          ),
        )
        .find(
          (_0x1a9f89) => _0x1a9f89 instanceof X && _0x1a9f89.isHit(_0x17ef2c),
        ) ?? null
    );
  }
  _initSelection() {
    (this.disposeWithMe(
      this._drawingManagerService["focus$"].subscribe((_0x486b8d) => {
        if (_0x486b8d.length === 1) {
          let _0x4d97a0 = _0x486b8d[0],
            _0x2bb40b =
              this._drawingManagerService["getDrawingByParam"](_0x4d97a0);
          if (
            (_0x2bb40b == null ? undefined : _0x2bb40b.drawingType) ===
            o.DrawingTypeEnum["DRAWING_SHAPE"]
          ) {
            let _0x2592bb = this._shapeTextEditingService["getEditing"]();
            if (
              (_0x2592bb == null ? undefined : _0x2592bb.shapeId) ===
                _0x4d97a0.drawingId &&
              _0x2592bb.visible
            )
              return;
            (0, i.isConnectorShape)(
              this._docsShapeService["getShapeType"](
                _0x4d97a0.unitId,
                _0x4d97a0.subUnitId,
                _0x4d97a0.drawingId,
              ),
            ) && this._shapeTextEditingService["setEditing"](null);
          } else
            this._shapeTextEditingService["getEditing"]() &&
              (this._shapeTextEditingService["setOnSavingEditorData"](true),
              requestAnimationFrame(() => {
                this._shapeTextEditingService["setEditing"](null);
              }));
        } else
          this._shapeTextEditingService["getEditing"]() &&
            (this._shapeTextEditingService["setOnSavingEditorData"](true),
            requestAnimationFrame(() => {
              this._shapeTextEditingService["setEditing"](null);
            }));
      }),
    ),
      this.disposeWithMe(
        this._drawingManagerService["remove$"].subscribe((_0x54d403) => {
          let _0x1c8162 = this._shapeTextEditingService["getEditing"]();
          _0x1c8162 &&
            _0x54d403.some(
              (_0x40cd5b) => _0x40cd5b.drawingId === _0x1c8162.shapeId,
            ) &&
            this._shapeTextEditingService["setEditing"](null);
        }),
      ));
  }
  _initEditingParams() {
    this.disposeWithMe(
      this._shapeTextEditingService["editingParams$"].subscribe((_0x3fcf0d) => {
        (_0x3fcf0d == null ? undefined : _0x3fcf0d.visible) === true &&
        _0x3fcf0d.unitId === this._context["unitId"]
          ? (this._layoutInteraction ??=
              this._docLayoutInteractionService["beginInteraction"]())
          : this._endLayoutInteraction();
        let { scene: _0xcb218c } = this._context;
        if (this._lastEditingShapeKey) {
          let _0xdcb878 = _0xcb218c.getObjectIncludeInGroup(
            this._lastEditingShapeKey,
          );
          _0xdcb878 && _0xdcb878.setEditing(false);
        }
        if (_0x3fcf0d) {
          let _0x47619b = !!_0x3fcf0d.visible,
            _0x1abf5c = _0xcb218c.getObjectIncludeInGroup(_0x3fcf0d.shapeKey);
          (_0x1abf5c &&
            (_0x1abf5c.setEditing(_0x47619b),
            (this._lastEditingShapeKey = _0x3fcf0d.shapeKey)),
            this._contextService["setContextValue"](
              o.FOCUSING_SHAPE_TEXT_EDITOR,
              _0x47619b,
            ));
        } else
          ((this._lastEditingShapeKey = null),
            this._contextService["setContextValue"](
              o.FOCUSING_SHAPE_TEXT_EDITOR,
              false,
            ));
      }),
    );
  }
  _endLayoutInteraction() {
    var _0x14a913;
    ((_0x14a913 = this._layoutInteraction) == null || _0x14a913.dispose(),
      (this._layoutInteraction = null));
  }
};
bt = N(
  [
    M(1, (0, o.Inject)(J)),
    M(2, u.IDrawingManagerService),
    M(3, o.IContextService),
    M(4, (0, o.Inject)(t.DocLayoutInteractionService)),
    M(5, (0, o.Inject)(r.DocsShapeService)),
  ],
  bt,
);
let xt = class extends e.ShapeTextFloatMenuRenderControllerBase {
  constructor(
    _0x770e50,
    _0x335e08,
    _0x118f66,
    _0xb29a97,
    _0x361f20,
    _0x465034,
    _0x4db378,
    _0x520a20,
    _0x515548,
    _0x461978,
  ) {
    super(
      _0x770e50,
      _0x335e08,
      _0x118f66,
      _0xb29a97,
      _0x361f20,
      _0x465034,
      _0x4db378,
      _0x520a20,
      _0x515548,
      _0x461978,
      { componentKey: E, editorUnitId: T },
    );
  }
};
xt = N(
  [
    M(1, (0, o.Inject)(s.DocSelectionManagerService)),
    M(2, (0, o.Inject)(t.DocCanvasPopManagerService)),
    M(3, (0, o.Inject)(t.DocSelectionRenderService)),
    M(4, o.ICommandService),
    M(5, (0, o.Inject)(t.DocEventManagerService)),
    M(6, (0, o.Inject)(e.ShapeTextHyperLinkPopupService)),
    M(7, (0, o.Inject)(s.DocInterceptorService)),
    M(8, (0, o.Inject)(t.DocRenderController)),
    M(9, (0, o.Inject)(J)),
  ],
  xt,
);
let St = class extends o.Disposable {
  constructor(_0x52b89b, _0x44c0bb, _0x78cdaf, _0x2c65aa) {
    (super(),
      (this._commandService = _0x52b89b),
      (this._renderManagerService = _0x44c0bb),
      (this._drawingManagerService = _0x78cdaf),
      (this._docDrawingShapeRenderController = _0x2c65aa),
      this._initialize());
  }
  _initialize() {
    (this.disposeWithMe(
      this._drawingManagerService["add$"].subscribe((_0x4c48fd) =>
        this._insertShapes(_0x4c48fd),
      ),
    ),
      this.disposeWithMe(
        this._drawingManagerService["update$"].subscribe((_0x5f0f56) => {
          _0x5f0f56.forEach((_0x50d7d0) => this._updateShape(_0x50d7d0));
        }),
      ),
      this.disposeWithMe(
        this._commandService["onCommandExecuted"]((_0x32004e) => {
          if (_0x32004e.id !== r.UpdateDocShapeDataMutation["id"]) return;
          let { unitId: _0x478c1d, shapeId: _0x4a7977 } = _0x32004e.params;
          this._refreshShapeData({
            unitId: _0x478c1d,
            subUnitId: _0x478c1d,
            drawingId: _0x4a7977,
          });
        }),
      ));
  }
  _insertShapes(_0x2bd558) {
    _0x2bd558.forEach((_0x2a44e8) => {
      let _0x1d728c = this._getSceneByUnitId(_0x2a44e8.unitId);
      if (!_0x1d728c) return;
      let _0x28a879 =
        this._drawingManagerService["getDrawingByParam"](_0x2a44e8);
      (_0x28a879 == null ? undefined : _0x28a879.drawingType) ===
        o.DrawingTypeEnum["DRAWING_SHAPE"] &&
        this._docDrawingShapeRenderController["renderDrawingShape"](
          _0x28a879,
          _0x1d728c.scene,
        );
    });
  }
  _updateShape(_0x318507) {
    let _0x5d02ef = this._drawingManagerService["getDrawingByParam"](_0x318507);
    if (
      (_0x5d02ef == null ? undefined : _0x5d02ef.drawingType) !==
      o.DrawingTypeEnum["DRAWING_SHAPE"]
    )
      return;
    let _0x58c11d = this._getSceneByUnitId(_0x318507.unitId);
    if (!_0x58c11d || _0x5d02ef.transform == null) return;
    let _0x1b5c84 = (0, u.getDrawingShapeKeyByDrawingSearch)(_0x318507),
      _0x3f3fe2 = _0x58c11d.scene["getObjectIncludeInGroup"](_0x1b5c84);
    _0x3f3fe2 &&
      (_0x3f3fe2.setSrcRect(_0x5d02ef.srcRect),
      _0x3f3fe2.setPrstGeom(_0x5d02ef.prstGeom),
      _0x3f3fe2.makeDirty(true));
  }
  _refreshShapeData(_0x5b47c0) {
    let _0x5f2615 = this._getSceneByUnitId(_0x5b47c0.unitId);
    if (!_0x5f2615) return;
    let _0x37dc35 = (0, u.getDrawingShapeKeyByDrawingSearch)(_0x5b47c0),
      _0x4e2e95 = _0x5f2615.scene["getObjectIncludeInGroup"](_0x37dc35);
    _0x4e2e95 &&
      (this._docDrawingShapeRenderController["refreshShapeFillImage"](
        _0x4e2e95,
      ),
      this._docDrawingShapeRenderController["refreshFormulaPresentation"](
        _0x4e2e95,
        {
          unitId: _0x5b47c0.unitId,
          subUnitId: _0x5b47c0.subUnitId,
          shapeId: _0x5b47c0.drawingId,
        },
      ),
      _0x4e2e95.makeDirty(true));
  }
  _getSceneByUnitId(_0xbba8ec) {
    if (_0xbba8ec == null) return null;
    let _0x4b6356 = this._renderManagerService["getRenderUnitById"](_0xbba8ec),
      _0x4bf4d9 = _0x4b6356 == null ? undefined : _0x4b6356.scene;
    return _0x4bf4d9 == null ? null : { scene: _0x4bf4d9 };
  }
};
St = N(
  [
    M(0, o.ICommandService),
    M(1, l.IRenderManagerService),
    M(2, u.IDrawingManagerService),
    M(3, (0, o.Inject)(Q)),
  ],
  St,
);
let Ct = class extends o.Disposable {
  constructor(
    _0x10d275,
    _0x4526a4,
    _0x1fa2ad,
    _0x5982fa,
    _0x20ffee,
    _0x518b7e,
    _0x349ba2,
    _0x261a95,
    _0x4337d0,
    _0x2ddb02,
    _0xc7dbb7,
    _0x586dc8,
  ) {
    (super(),
      (this._univerInstanceService = _0x10d275),
      (this._sidebarService = _0x4526a4),
      (this._menuManagerService = _0x1fa2ad),
      (this._docsShapeService = _0x5982fa),
      (this._localeService = _0x20ffee),
      (this._commandService = _0x518b7e),
      (this._drawingManagerService = _0x349ba2),
      (this._docCanvasPopManagerService = _0x261a95),
      (this._renderManagerService = _0x4337d0),
      (this._contextService = _0x2ddb02),
      (this._shapeTextEditingService = _0xc7dbb7),
      (this._permissionService = _0x586dc8),
      q(this, "_sidebarDisposable", null),
      q(this, "_activeShapeInfo", null),
      q(this, "_isOpenedShapeEditPanel", false),
      q(this, "_shapeEditPanelVersion", 0),
      q(this, "_disposePopupsByUnit", new Map()),
      q(this, "_popupTargetKeys", new Map()),
      this._initMenu(),
      this.disposeWithMe(
        this._univerInstanceService["getCurrentTypeOfUnit$"](
          o.UniverInstanceType["UNIVER_DOC"],
        ).subscribe((_0x2e45d1) => {
          if (!_0x2e45d1) {
            var _0x5b1234;
            (_0x5b1234 = this._sidebarDisposable) == null ||
              _0x5b1234.dispose();
          }
        }),
      ),
      this._registerOperations(),
      this.disposeWithMe(
        (0, e.bindRenderTransformerLifecycle)(
          this._renderManagerService,
          o.UniverInstanceType["UNIVER_DOC"],
          (_0x5a5038) => this._popupMenuListener(_0x5a5038),
        ),
      ),
      this.disposeWithMe(
        this._shapeTextEditingService["editingParams$"].subscribe(
          (_0x4cca77) => {
            _0x4cca77 && this._clearPopups(undefined, true);
          },
        ),
      ),
      this.disposeWithMe(
        this._permissionService["permissionPointUpdate$"].subscribe(() => {
          this._drawingManagerService["getFocusDrawings"]().some(
            (_0xd531b2) =>
              _0xd531b2.drawingType === o.DrawingTypeEnum["DRAWING_SHAPE"] &&
              this._univerInstanceService["getUnitType"](_0xd531b2.unitId) ===
                o.UniverInstanceType["UNIVER_DOC"] &&
              !this._canEditShape(_0xd531b2.unitId, _0xd531b2.drawingId),
          ) &&
            (this._clearPopups(undefined, true), this._closeShapeEditPanel());
        }),
      ));
  }
  _initMenu() {
    this._menuManagerService["mergeMenu"](We);
  }
  getShapePopupMenus(_0x4de1d8, _0x20cbb7, _0x2310fc, _0x3bc62b) {
    return [
      {
        label: "docs-shape-ui.openPanel",
        index: 0,
        commandId: O.id,
        commandParams: {
          unitId: _0x4de1d8,
          subUnitId: _0x20cbb7,
          drawingId: _0x2310fc,
        },
        disable: _0x3bc62b === o.DrawingTypeEnum["DRAWING_DOM"],
      },
      {
        label: "docs-shape-ui.deleteShape",
        index: 1,
        commandId: c.RemoveDocDrawingCommand["id"],
        commandParams: {
          unitId: _0x4de1d8,
          drawings: [
            { unitId: _0x4de1d8, subUnitId: _0x20cbb7, drawingId: _0x2310fc },
          ],
        },
        disable: false,
      },
      {
        label: "docs-shape-ui.hidePanel",
        index: 2,
        commandId: qe.id,
        commandParams: {
          unitId: _0x4de1d8,
          subUnitId: _0x20cbb7,
          drawingId: _0x2310fc,
        },
        disable: false,
      },
    ];
  }
  _getShapeInfo(_0x272bce, _0x152fb5, _0x394cfa) {
    let _0x26dde7 = this._docsShapeService["getShapeTypeById"](
        _0x272bce,
        _0x152fb5,
        _0x394cfa,
      ),
      _0x2f9d8c = this._docsShapeService["getShapeDataById"](
        _0x272bce,
        _0x152fb5,
        _0x394cfa,
      );
    return _0x26dde7 !== undefined && _0x2f9d8c !== undefined
      ? {
          shapeData: _0x2f9d8c,
          shapeId: _0x394cfa,
          shapeType: _0x26dde7,
          unitId: _0x272bce,
          subUnitId: _0x152fb5,
          version: this._shapeEditPanelVersion,
          disableShapeOption: false,
        }
      : null;
  }
  _clearPopups(_0xdad7a0, _0xf1f3bd = false) {
    if (_0xdad7a0 == null) {
      [...this._disposePopupsByUnit["keys"]()].forEach((_0x4700dd) =>
        this._clearPopups(_0x4700dd, _0xf1f3bd),
      );
      return;
    }
    let _0x2aeae3 = this._disposePopupsByUnit["get"](_0xdad7a0);
    if (_0x2aeae3) {
      for (let _0x48112d = _0x2aeae3.length - 1; _0x48112d >= 0; --_0x48112d) {
        let _0x417ffc = _0x2aeae3[_0x48112d];
        (_0xf1f3bd || _0x417ffc.canDispose()) &&
          (_0x417ffc.dispose(), _0x2aeae3.splice(_0x48112d, 1));
      }
      _0x2aeae3.length === 0 &&
        (this._disposePopupsByUnit["delete"](_0xdad7a0),
        this._popupTargetKeys["delete"](_0xdad7a0));
    }
  }
  _getDisposePopups(_0x3b6cbe) {
    let _0x41b6b5 = this._disposePopupsByUnit["get"](_0x3b6cbe);
    if (_0x41b6b5) return _0x41b6b5;
    let _0x355c2a = [];
    return (this._disposePopupsByUnit["set"](_0x3b6cbe, _0x355c2a), _0x355c2a);
  }
  _popupMenuListener(_0x5a742f) {
    var _0xd063a1;
    let _0x46d620 = new o["DisposableCollection"](),
      _0x183d64 =
        (_0xd063a1 = this._renderManagerService["getAllRenderersOfType"](
          o.UniverInstanceType["UNIVER_DOC"],
        ).find(
          (_0x626be1) =>
            _0x626be1.scene["getTransformerByCreate"]() === _0x5a742f,
        )) == null
          ? undefined
          : _0xd063a1.unitId;
    return _0x183d64
      ? (_0x46d620.add(
          _0x5a742f.createControl$["subscribe"](() =>
            this._handleCreateControl(_0x5a742f, _0x183d64),
          ),
        ),
        _0x46d620.add(
          _0x5a742f.clearControl$["subscribe"](() => {
            (this._clearPopups(_0x183d64),
              queueMicrotask(() => {
                _0x5a742f.getSelectedObjectMap().size > 0 ||
                  (this._contextService["setContextValue"](
                    o.FOCUSING_COMMON_DRAWINGS,
                    false,
                  ),
                  this._drawingManagerService["focusDrawing"](null));
              }));
          }),
        ),
        _0x46d620.add(
          _0x5a742f.changing$["subscribe"](() => {
            this._clearPopups(_0x183d64, true);
          }),
        ),
        _0x46d620)
      : _0x46d620;
  }
  _handleCreateControl(_0x52243f, _0x5da54d) {
    let _0x585606 = _0x52243f.getSelectedObjectMap();
    if (this._isOpenedShapeEditPanel) {
      this._clearPopups(_0x5da54d, true);
      return;
    }
    if (_0x585606.size > 1) {
      this._clearPopups(_0x5da54d);
      return;
    }
    let _0x8e0689 = _0x585606.values().next().value;
    if (!_0x8e0689) {
      this._clearPopups(_0x5da54d);
      return;
    }
    let _0x47567b = this._drawingManagerService["getDrawingOKey"](
      _0x8e0689.oKey,
    );
    if (
      !_0x47567b ||
      _0x47567b.drawingType !== o.DrawingTypeEnum["DRAWING_SHAPE"]
    ) {
      this._clearPopups(_0x5da54d);
      return;
    }
    let {
      unitId: _0x1ef0ce,
      subUnitId: _0x16c040,
      drawingId: _0x5d00da,
      drawingType: _0xbecaff,
    } = _0x47567b;
    if (!this._canEditShape(_0x1ef0ce, _0x5d00da)) {
      this._clearPopups(_0x5da54d, true);
      return;
    }
    let _0x40a4ba = this._getShapeInfo(_0x1ef0ce, _0x16c040, _0x5d00da);
    if (!_0x40a4ba) {
      this._clearPopups(_0x5da54d);
      return;
    }
    let _0x52f8bd = this._disposePopupsByUnit["get"](_0x5da54d),
      _0x5678dc = _0x1ef0ce + ":" + _0x16c040 + ":" + _0x5d00da;
    if (
      this._popupTargetKeys["get"](_0x5da54d) === _0x5678dc &&
      _0x52f8bd &&
      _0x52f8bd.length > 0
    )
      return;
    this._clearPopups(_0x5da54d);
    let _0x2677d3 = this._renderManagerService["getRenderUnitById"](_0x1ef0ce),
      _0x4d0b2e = (
        (_0x2677d3 == null ? undefined : _0x2677d3.isMainScene) === false
          ? _0x2677d3.with(t.DocCanvasPopManagerService)
          : this._docCanvasPopManagerService
      ).attachPopupToObject(
        _0x8e0689,
        {
          componentKey: et,
          direction: "vertical-center",
          offset: [0, e.SHEET_DOC_SHAPE_FLOATING_TOOLBAR_TOP_OFFSET],
          extraProps: {
            unitId: _0x1ef0ce,
            subUnitId: _0x16c040,
            drawingId: _0x5d00da,
            drawingType: _0xbecaff,
            shapeType: _0x40a4ba.shapeType,
            shapeData: _0x40a4ba.shapeData,
          },
        },
        _0x1ef0ce,
      );
    (this.disposeWithMe(_0x4d0b2e),
      this._getDisposePopups(_0x5da54d).push(_0x4d0b2e),
      this._popupTargetKeys["set"](_0x5da54d, _0x5678dc),
      this._drawingManagerService["getFocusDrawings"]().some(
        (_0x187fc4) =>
          _0x187fc4.unitId === _0x1ef0ce &&
          _0x187fc4.subUnitId === _0x16c040 &&
          _0x187fc4.drawingId === _0x5d00da,
      ) ||
        this._drawingManagerService["focusDrawing"]([
          { unitId: _0x1ef0ce, subUnitId: _0x16c040, drawingId: _0x5d00da },
        ]));
  }
  _canEditShape(_0x598a1a, _0x56cf02) {
    let _0x56376b = this._univerInstanceService["getUnit"](
      _0x598a1a,
      o.UniverInstanceType["UNIVER_DOC"],
    );
    if (!_0x56376b) return false;
    let _0xb01bc6 = (0, s.getDocumentDrawingSegmentId)(_0x56376b, _0x56cf02);
    return (0, s.canEditDocumentTargets)(this._permissionService, _0x598a1a, [
      ...(0, s.getDocumentEntityParentPermissionObjectIds)(
        _0x56376b,
        _0xb01bc6,
        "drawing",
        _0x56cf02,
      ),
      (0, s.getDocumentEntityPermissionObjectId)(
        _0xb01bc6,
        "drawing",
        _0x56cf02,
      ),
    ]);
  }
  _registerOperations() {
    (this.disposeWithMe(
      this._commandService["onCommandExecuted"]((_0x31ddd2) => {
        if (_0x31ddd2.id === O.id) {
          let {
            unitId: _0x1e0e8e,
            subUnitId: _0x113774,
            drawingId: _0x1a2646,
          } = _0x31ddd2.params;
          ((this._shapeEditPanelVersion += 1),
            (this._activeShapeInfo = this._getShapeInfo(
              _0x1e0e8e,
              _0x113774,
              _0x1a2646,
            )),
            this._clearPopups(undefined, true),
            this._openShapeEditPanel());
        }
        if (
          (_0x31ddd2.id === qe.id &&
            ((this._activeShapeInfo = null), this._closeShapeEditPanel()),
          _0x31ddd2.id === r.UpdateDocShapeDataMutation["id"])
        ) {
          let { unitId: _0x53b5ed, shapeId: _0x1aa468 } = _0x31ddd2.params;
          if (
            this._activeShapeInfo &&
            this._activeShapeInfo["shapeId"] === _0x1aa468
          ) {
            let _0x1189cf = this._getShapeInfo(
              _0x53b5ed,
              this._activeShapeInfo["subUnitId"],
              _0x1aa468,
            );
            _0x1189cf &&
              ((this._shapeEditPanelVersion += 1),
              (_0x1189cf.version = this._shapeEditPanelVersion),
              (this._activeShapeInfo = _0x1189cf),
              this._isOpenedShapeEditPanel && this._openShapeEditPanel());
          }
        }
      }),
    ),
      this.disposeWithMe(
        this._drawingManagerService["focus$"].subscribe((_0x3a2641) => {
          if (this._isOpenedShapeEditPanel === false) return;
          if (_0x3a2641.length === 0) {
            ((this._activeShapeInfo = null), this._closeShapeEditPanel());
            return;
          }
          if (
            _0x3a2641.length === 1 &&
            _0x3a2641[0].drawingType === o.DrawingTypeEnum["DRAWING_SHAPE"] &&
            ((this._shapeEditPanelVersion += 1),
            (this._activeShapeInfo = this._getShapeInfo(
              _0x3a2641[0].unitId,
              _0x3a2641[0].subUnitId,
              _0x3a2641[0].drawingId,
            )),
            this._activeShapeInfo)
          ) {
            this._openShapeEditPanel();
            return;
          }
          let _0x35e094 = _0x3a2641.filter(
            (_0x20117b) =>
              _0x20117b.drawingType === o.DrawingTypeEnum["DRAWING_SHAPE"],
          );
          if (_0x3a2641.length > 1 && _0x35e094.length === _0x3a2641.length) {
            if (
              ((this._shapeEditPanelVersion += 1),
              (this._activeShapeInfo = this._getShapeInfo(
                _0x3a2641[0].unitId,
                _0x3a2641[0].subUnitId,
                _0x3a2641[0].drawingId,
              )),
              this._activeShapeInfo)
            ) {
              this._openShapeEditPanel();
              return;
            }
          } else {
            if (
              ((this._shapeEditPanelVersion += 1),
              (this._activeShapeInfo = this._getShapeInfo(
                _0x3a2641[0].unitId,
                _0x3a2641[0].subUnitId,
                _0x3a2641[0].drawingId,
              )),
              this._activeShapeInfo)
            ) {
              ((this._activeShapeInfo["disableShapeOption"] = true),
                this._openShapeEditPanel());
              return;
            }
          }
          this._closeShapeEditPanel();
        }),
      ));
  }
  _openShapeEditPanel() {
    this._activeShapeInfo &&
      ((this._sidebarDisposable = this._sidebarService["open"]({
        id: S,
        header: {
          title: this._localeService["t"]("docs-shape-ui.formatShape"),
        },
        width: 388,
        children: { label: S, ...this._activeShapeInfo },
        onClose: () => {
          (this._drawingManagerService["focusDrawing"](null),
            this._contextService["setContextValue"](
              o.FOCUSING_COMMON_DRAWINGS,
              false,
            ),
            (this._sidebarDisposable = null));
        },
      })),
      (this._isOpenedShapeEditPanel = true));
  }
  _closeShapeEditPanel() {
    ((this._isOpenedShapeEditPanel = false),
      this._sidebarService["close"](S),
      (this._sidebarDisposable = null),
      this._contextService["setContextValue"](
        o.FOCUSING_COMMON_DRAWINGS,
        false,
      ),
      this._drawingManagerService["focusDrawing"](null));
  }
};
Ct = N(
  [
    M(0, o.IUniverInstanceService),
    M(1, (0, o.Inject)(n.ISidebarService)),
    M(2, n.IMenuManagerService),
    M(3, (0, o.Inject)(r.DocsShapeService)),
    M(4, (0, o.Inject)(o.LocaleService)),
    M(5, o.ICommandService),
    M(6, u.IDrawingManagerService),
    M(7, (0, o.Inject)(t.DocCanvasPopManagerService)),
    M(8, l.IRenderManagerService),
    M(9, o.IContextService),
    M(10, (0, o.Inject)(J)),
    M(11, o.IPermissionService),
  ],
  Ct,
);
let $ = class extends o.Plugin {
  constructor(_0x5507da = Je, _0x538584, _0x7289da, _0x10f02e, _0x5bcf8c) {
    (super(),
      (this._config = _0x5507da),
      (this._injector = _0x538584),
      (this._commandService = _0x7289da),
      (this._configService = _0x10f02e),
      (this._renderManagerService = _0x5bcf8c));
    let { menu: _0x9387be, ..._0x113866 } = (0, o.merge)({}, Je, this._config);
    (_0x9387be &&
      this._configService["setConfig"]("menu", _0x9387be, { merge: true }),
      this._configService["setConfig"]("docs-shape-ui.config", _0x113866),
      this._initCommands());
  }
  onStarting() {
    (this._injector["add"]([Y]),
      this._injector["get"](Y),
      (0, o.registerDependencies)(this._injector, [
        [Ct],
        [St],
        [Q],
        [ft],
        [Z],
        [P],
        [W],
        [J],
        [gt],
      ]),
      this._initUIPart());
  }
  onReady() {
    (this._renderManagerService["registerRenderModule"](
      o.UniverInstanceType["UNIVER_DOC"],
      [Z],
    ),
      this._renderManagerService["registerRenderModule"](
        o.UniverInstanceType["UNIVER_DOC"],
        [bt],
      ),
      (0, o.touchDependencies)(this._injector, [
        [Ct],
        [St],
        [Q],
        [ft],
        [P],
        [W],
        [J],
        [gt],
      ]));
  }
  onRendered() {
    this._renderManagerService["registerRenderModule"](
      o.UniverInstanceType["UNIVER_DOC"],
      [xt],
    );
  }
  _initCommands() {
    [x, qe, O, D, A, j].forEach((_0x28bee4) =>
      this.disposeWithMe(this._commandService["registerCommand"](_0x28bee4)),
    );
  }
  _initUIPart() {
    let _0x41a797 = this._injector,
      _0xa5f5a8 = _0x41a797.get(n.IUIPartsService);
    this.disposeWithMe(
      _0xa5f5a8.registerComponent(n.BuiltInUIPart["CONTENT"], () =>
        (0, n.connectInjector)(ct, _0x41a797),
      ),
    );
  }
};
(q($, "type", o.UniverInstanceType["UNIVER_DOC"]),
  q($, "pluginName", "DOCS_SHAPE_UI_PLUGIN"),
  q($, "packageName", Ge),
  q($, "version", Ke),
  ($ = N(
    [
      (0, o.DependentOn)(
        m.UniverLicensePlugin,
        s.UniverDocsPlugin,
        u.UniverDrawingPlugin,
        d.UniverDrawingUIPlugin,
        l.UniverRenderEnginePlugin,
        t.UniverDocsUIPlugin,
        a.UniverShapeEditorPlugin,
        h.UniverDocsDrawingUIPlugin,
        r.UniverDocsShapePlugin,
        e.UniverShapeEditorUIPlugin,
      ),
      M(1, (0, o.Inject)(o.Injector)),
      M(2, o.ICommandService),
      M(3, o.IConfigService),
      M(4, l.IRenderManagerService),
    ],
    $,
  )),
  (exports.DocsShapeUIMenuSchema = We),
  Object.defineProperty(exports, "UniverDocsShapeUIPlugin", {
    enumerable: true,
    get: function () {
      return $;
    },
  }));
