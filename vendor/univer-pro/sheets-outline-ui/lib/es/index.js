import {
  ComponentManager as _0x36a41b,
  ContextMenuGroup as _0x425e98,
  ContextMenuPosition as _0x1355b4,
  IDialogService as _0x46ce65,
  ILayoutService as _0x1b6034,
  IMenuManagerService as _0x1c11d6,
  IMessageService as _0x24af37,
  IShortcutService as _0x101a40,
  IconManager as _0x1a0299,
  KeyCode as _0xcb7269,
  MenuItemType as _0x5256fb,
  MetaKeys as _0x1c123b,
  RibbonDataGroup as _0x2bdb90,
  getMenuHiddenObservable as _0x3ef2c2,
  useDependency as _0x392ab2,
} from "@univerjs/ui";
import {
  AddDimensionOutlineCommand as _0x1a2043,
  ClearDimensionOutlinesCommand as _0x14f44d,
  DimensionOutlineAxis as _0x5e9900,
  DimensionOutlineErrorReason as _0x5be324,
  RemoveDimensionOutlineCommand as _0x51bfbd,
  SHEET_OUTLINE_PLUGIN as _0xd8c352,
  SetDimensionOutlineCollapsedCommand as _0x181b1f,
  SheetsOutlineErrorService as _0x49c358,
  SheetsOutlineModel as _0x1bdc3f,
  UniverSheetsOutlinePlugin as _0x587e66,
  buildDimensionOutlineTree as _0x3a36fb,
  canAddDimensionOutline as _0x58a94f,
  getDimensionOutlineViewPermission$ as _0x4cc6d2,
  hasDimensionOutlineViewPermission as _0x333247,
} from "@univerjs-pro/sheets-outline";
import {
  CommandType as _0x4c285c,
  DependentOn as _0x358fa2,
  Disposable as _0x407f6c,
  ICommandService as _0x5c7296,
  IConfigService as _0x384733,
  IUniverInstanceService as _0x3f16d0,
  Inject as _0x1094e7,
  Injector as _0x3e5c54,
  LocaleService as _0x1fc2e8,
  Plugin as _0x13ab7c,
  RANGE_TYPE as _0x879cd2,
  ThemeService as _0x38b4d8,
  Tools as _0x36f9ed,
  UniverInstanceType as _0x5ea1ec,
  fromCallback as _0x16450e,
  merge as _0x254169,
  toDisposable as _0x2eb9c6,
} from "@univerjs/core";
import {
  SetColHiddenMutation as _0x4c326e,
  SetColVisibleMutation as _0x2d64e3,
  SetRowHiddenMutation as _0x312ba5,
  SetRowVisibleMutation as _0xe1be0e,
  SetSelectionsOperation as _0x5ec5c6,
  SheetPermissionCheckController as _0x55d1a4,
  SheetsSelectionsService as _0x5bedea,
  UniverSheetsPlugin as _0x155166,
  WorkbookViewPermission as _0x22dca6,
  WorksheetViewPermission as _0x3ec7c7,
  getSheetCommandTarget as _0x1bba90,
} from "@univerjs/sheets";
import {
  combineLatest as _0x559b40,
  filter as _0x214363,
  map as _0x2ea49a,
  merge as _0x8e41d8,
  of as _0x22848d,
  startWith as _0x41f624,
  switchMap as _0x296095,
} from "rxjs";
import {
  Button as _0x30f0ed,
  MessageType as _0x2318a5,
} from "@univerjs/design";
import { jsx as _0x33169a, jsxs as _0x18a018 } from "react/jsx-runtime";
import { UniverLicensePlugin as _0xe638e2 } from "@univerjs-pro/license";
import {
  CURSOR_TYPE as _0x3f93a1,
  DEFAULT_FONTFACE_PLANE as _0x85a94e,
  IRenderManagerService as _0x2813f3,
  Rect as _0x2fe175,
  Shape as _0x13c9f0,
  UniverRenderEnginePlugin as _0x1481a2,
} from "@univerjs/engine-render";
import {
  HeaderUnhideRangeAxis as _0x1e4c4d,
  HeaderUnhideRangeService as _0x4c2934,
  SHEET_VIEW_KEY as _0x520364,
  SheetSkeletonManagerService as _0x49dffd,
  UniverSheetsUIPlugin as _0x1d44b4,
  getTransformCoord as _0x527b2b,
  whenSheetEditorFocused as _0xf434d0,
} from "@univerjs/sheets-ui";
import { GroupingDoubleIcon as _0x4e97f7 } from "@univerjs/icons";
const Ze = {
    id: "sheet.command.outline-selected-dimension",
    type: _0x4c285c.COMMAND,
    handler: (_0x24d491, _0xea2bed) =>
      et(
        _0x24d491,
        (_0xea2bed == null ? undefined : _0xea2bed.value) === _0x5e9900.ROW ||
          (_0xea2bed == null ? undefined : _0xea2bed.value) === _0x5e9900.COLUMN
          ? _0xea2bed.value
          : undefined,
      ),
  },
  Qe = {
    id: "sheet.command.outline-selected-rows",
    type: _0x4c285c.COMMAND,
    handler: (_0x4fea5) => et(_0x4fea5, _0x5e9900.ROW),
  },
  $e = {
    id: "sheet.command.outline-selected-columns",
    type: _0x4c285c.COMMAND,
    handler: (_0x3f187f) => et(_0x3f187f, _0x5e9900.COLUMN),
  };
function et(_0x2b2f6f, _0x310645) {
  let _0xb02dd8 = M(_0x2b2f6f.get(_0x5bedea), _0x310645);
  if (!_0xb02dd8) return false;
  let _0x36e6a3 = _0x1bba90(_0x2b2f6f.get(_0x3f16d0));
  return _0x36e6a3
    ? _0x2b2f6f
        .get(_0x5c7296)
        .executeCommand(_0x1a2043.id, {
          unitId: _0x36e6a3.unitId,
          subUnitId: _0x36e6a3.subUnitId,
          axis: _0xb02dd8.axis,
          start: _0xb02dd8.start,
          end: _0xb02dd8.end,
        })
    : false;
}
function M(_0x1d3188, _0x2010ae) {
  let _0x808d5b = _0x1d3188.getCurrentSelections();
  if (!_0x808d5b || _0x808d5b.length !== 1) return null;
  let _0x4b84bd = _0x808d5b[0].range;
  return _0x2010ae === _0x5e9900.ROW
    ? { axis: _0x2010ae, start: _0x4b84bd.startRow, end: _0x4b84bd.endRow }
    : _0x2010ae === _0x5e9900.COLUMN
      ? {
          axis: _0x2010ae,
          start: _0x4b84bd.startColumn,
          end: _0x4b84bd.endColumn,
        }
      : _0x4b84bd.rangeType === _0x879cd2.ROW
        ? {
            axis: _0x5e9900.ROW,
            start: _0x4b84bd.startRow,
            end: _0x4b84bd.endRow,
          }
        : _0x4b84bd.rangeType === _0x879cd2.COLUMN
          ? {
              axis: _0x5e9900.COLUMN,
              start: _0x4b84bd.startColumn,
              end: _0x4b84bd.endColumn,
            }
          : null;
}
const tt = {
    id: "sheet.command.clear-selected-dimension-outlines",
    type: _0x4c285c.COMMAND,
    handler: (_0x112e0a, _0x5734b8) =>
      it(
        _0x112e0a,
        (_0x5734b8 == null ? undefined : _0x5734b8.value) === _0x5e9900.ROW ||
          (_0x5734b8 == null ? undefined : _0x5734b8.value) === _0x5e9900.COLUMN
          ? _0x5734b8.value
          : undefined,
      ),
  },
  nt = {
    id: "sheet.command.clear-selected-rows-outlines",
    type: _0x4c285c.COMMAND,
    handler: (_0xa283ec) => it(_0xa283ec, _0x5e9900.ROW),
  },
  rt = {
    id: "sheet.command.clear-selected-columns-outlines",
    type: _0x4c285c.COMMAND,
    handler: (_0x434b19) => it(_0x434b19, _0x5e9900.COLUMN),
  };
function it(_0x12e4f0, _0x10cbe6) {
  let _0x1c70f0 = M(_0x12e4f0.get(_0x5bedea), _0x10cbe6);
  if (!_0x1c70f0) return false;
  let _0x52b907 = _0x1bba90(_0x12e4f0.get(_0x3f16d0));
  return _0x52b907
    ? _0x12e4f0
        .get(_0x5c7296)
        .executeCommand(_0x14f44d.id, {
          unitId: _0x52b907.unitId,
          subUnitId: _0x52b907.subUnitId,
          axis: _0x1c70f0.axis,
          start: _0x1c70f0.start,
          end: _0x1c70f0.end,
        })
    : false;
}
const at = "sheet-outline-action-dialog";
function ot(_0x196528) {
  let {
      rowLabel: _0x4cfa4f,
      columnLabel: _0x28ba3c,
      onSelect: _0x225fc6,
      onCancel: _0x2cfed8,
    } = _0x196528,
    _0x2eedc9 = _0x392ab2(_0x1fc2e8);
  return _0x18a018("div", {
    className: "univer-grid univer-gap-4",
    children: [
      _0x18a018("div", {
        className: "univer-grid univer-gap-2",
        children: [
          _0x33169a(_0x30f0ed, {
            onClick: () => _0x225fc6(_0x5e9900.ROW),
            children: _0x4cfa4f,
          }),
          _0x33169a(_0x30f0ed, {
            onClick: () => _0x225fc6(_0x5e9900.COLUMN),
            children: _0x28ba3c,
          }),
        ],
      }),
      _0x33169a("footer", {
        className: "univer-flex univer-justify-end",
        children: _0x33169a(_0x30f0ed, {
          onClick: _0x2cfed8,
          children: _0x2eedc9.t("sheets-outline-ui.cancel"),
        }),
      }),
    ],
  });
}
const N = {
    id: "sheet.command.outline-selected-dimension-shortcut",
    type: _0x4c285c.COMMAND,
    handler: (_0x36dff4) => lt(_0x36dff4, "group"),
  },
  P = {
    id: "sheet.command.clear-selected-dimension-outlines-shortcut",
    type: _0x4c285c.COMMAND,
    handler: (_0x1a4a23) => lt(_0x1a4a23, "ungroup"),
  },
  st = {
    group: { [_0x5e9900.ROW]: Qe.id, [_0x5e9900.COLUMN]: $e.id },
    ungroup: { [_0x5e9900.ROW]: nt.id, [_0x5e9900.COLUMN]: rt.id },
  },
  ct = {
    group: {
      [_0x5e9900.ROW]: "sheets-outline-ui.groupRows",
      [_0x5e9900.COLUMN]: "sheets-outline-ui.groupColumns",
    },
    ungroup: {
      [_0x5e9900.ROW]: "sheets-outline-ui.ungroupRows",
      [_0x5e9900.COLUMN]: "sheets-outline-ui.ungroupColumns",
    },
  };
function lt(_0x4de9e2, _0x3ec9b3) {
  let _0x348f56 = _0x4de9e2.get(_0x5bedea).getCurrentSelections();
  if (!_0x348f56 || _0x348f56.length !== 1) return false;
  let _0x145f7b = _0x1bba90(_0x4de9e2.get(_0x3f16d0));
  if (
    !_0x145f7b ||
    !_0x333247(_0x4de9e2, _0x145f7b.unitId, _0x145f7b.subUnitId)
  )
    return false;
  let _0xfa74c = _0x348f56[0].range;
  return _0xfa74c.rangeType === _0x879cd2.ROW
    ? dt(_0x4de9e2, _0x3ec9b3, _0x5e9900.ROW)
    : _0xfa74c.rangeType === _0x879cd2.COLUMN
      ? dt(_0x4de9e2, _0x3ec9b3, _0x5e9900.COLUMN)
      : ut(_0x4de9e2, _0x3ec9b3);
}
async function ut(_0x376194, _0x3ce5df) {
  let _0x1c2576 = await ft(_0x376194, _0x3ce5df);
  return _0x1c2576 ? dt(_0x376194, _0x3ce5df, _0x1c2576) : false;
}
function dt(_0x131853, _0x2f5c1e, _0xedae3f) {
  return !!_0x131853
    .get(_0x5c7296)
    .executeCommand(st[_0x2f5c1e][_0xedae3f], { value: _0xedae3f });
}
function ft(_0x4e9f39, _0x497749) {
  let _0x4082ea = _0x4e9f39.get(_0x46ce65),
    _0xa77c45 = _0x4e9f39.has(_0x1b6034) ? _0x4e9f39.get(_0x1b6034) : null,
    _0x24252a = _0x4e9f39.get(_0x1fc2e8),
    _0x2dd326 = _0x4e9f39.get(_0x5bedea),
    _0x1cacf7 = M(_0x2dd326, _0x5e9900.ROW),
    _0x6b14db = M(_0x2dd326, _0x5e9900.COLUMN);
  return !_0x1cacf7 || !_0x6b14db
    ? Promise.resolve(null)
    : new Promise((_0xa83072) => {
        let _0x1591ff = false,
          _0x19596b = null,
          _0x133cc0 = (_0x5cb772) => {
            _0x1591ff ||
              ((_0x1591ff = true),
              _0x19596b == null || _0x19596b.dispose(),
              pt(_0xa77c45),
              _0xa83072(_0x5cb772));
          };
        ((_0x19596b = _0x4082ea.open({
          id: at,
          title: {
            title: _0x24252a.t(
              _0x497749 === "group"
                ? "sheets-outline-ui.group"
                : "sheets-outline-ui.ungroup",
            ),
          },
          width: 360,
          children: {
            label: {
              name: at,
              props: {
                rowLabel: mt(
                  _0x24252a,
                  _0x497749,
                  _0x5e9900.ROW,
                  _0x1cacf7.start,
                  _0x1cacf7.end,
                ),
                columnLabel: mt(
                  _0x24252a,
                  _0x497749,
                  _0x5e9900.COLUMN,
                  _0x6b14db.start,
                  _0x6b14db.end,
                ),
                onSelect: (_0x14b067) => _0x133cc0(_0x14b067),
                onCancel: () => _0x133cc0(null),
              },
            },
          },
          onClose: () => _0x133cc0(null),
        })),
          _0x1591ff && _0x19596b.dispose());
      });
}
function pt(_0x1e9142) {
  _0x1e9142 &&
    (queueMicrotask(() => _0x1e9142.focus()),
    setTimeout(() => _0x1e9142.focus(), 0));
}
function mt(_0x9575e9, _0x3e3684, _0x52670b, _0x5ef50d, _0x48d62a) {
  let _0x3677b8 = ct[_0x3e3684][_0x52670b];
  return _0x52670b === _0x5e9900.ROW
    ? _0x9575e9.t(_0x3677b8, "" + (_0x5ef50d + 1), "" + (_0x48d62a + 1))
    : _0x9575e9.t(
        _0x3677b8,
        _0x36f9ed.chatAtABC(_0x5ef50d),
        _0x36f9ed.chatAtABC(_0x48d62a),
      );
}
const ht = "sheet.toolbar.dimension-outline.group";
function gt(_0x41f24b) {
  return {
    id: ht,
    type: _0x5256fb.SELECTOR,
    icon: "GroupingDoubleIcon",
    tooltip: "sheets-outline-ui.group",
    selections: _t(_0x41f24b),
    hidden$: Ct(_0x41f24b),
    disabled$: wt(_0x41f24b),
  };
}
function _t(_0x3dfb91) {
  return F(_0x3dfb91).pipe(_0x2ea49a(() => kt(_0x3dfb91)));
}
const vt = "sheet.contextMenu.dimension-outline";
function yt(_0x1a3637) {
  return xt(_0x1a3637, _0x5e9900.ROW);
}
function bt(_0x2b4c91) {
  return xt(_0x2b4c91, _0x5e9900.COLUMN);
}
function xt(_0x11eb52, _0x45fec7) {
  return {
    id: vt,
    type: _0x5256fb.SELECTOR,
    icon: "GroupingDoubleIcon",
    title: "sheets-outline-ui.group",
    tooltip: "sheets-outline-ui.group",
    selections: St(_0x11eb52, _0x45fec7),
    hidden$: Ct(_0x11eb52),
    disabled$: wt(_0x11eb52),
  };
}
function St(_0x90c227, _0x5f5a0e) {
  return F(_0x90c227).pipe(_0x2ea49a(() => At(_0x90c227, [_0x5f5a0e])));
}
function Ct(_0x3b8a77) {
  return _0x559b40([
    _0x3ef2c2(_0x3b8a77, _0x5ea1ec.UNIVER_SHEET),
    F(_0x3b8a77),
  ]).pipe(_0x2ea49a(([_0x1c1520]) => _0x1c1520 || !Tt(_0x3b8a77)));
}
function wt(_0x488c26) {
  return F(_0x488c26).pipe(
    _0x296095(() => {
      let _0x24e4ba = _0x1bba90(_0x488c26.get(_0x3f16d0));
      return _0x24e4ba
        ? _0x4cc6d2(_0x488c26, _0x24e4ba.unitId, _0x24e4ba.subUnitId).pipe(
            _0x2ea49a((_0x4fc05a) => !_0x4fc05a),
          )
        : _0x22848d(true);
    }),
  );
}
function Tt(_0x50e512) {
  return Et(_0x50e512) != null;
}
function Et(_0x1c528d) {
  let _0x5e99df = _0x1c528d.get(_0x5bedea).getCurrentSelections();
  return (_0x5e99df == null ? undefined : _0x5e99df.length) === 1
    ? _0x5e99df[0].range
    : null;
}
function F(_0x25d688) {
  let _0x4d6772 = _0x25d688.get(_0x5bedea),
    _0x52777c = _0x25d688.get(_0x1bdc3f);
  return _0x25d688
    .get(_0x3f16d0)
    .getCurrentTypeOfUnit$(_0x5ea1ec.UNIVER_SHEET)
    .pipe(
      _0x296095((_0xfcc1dd) =>
        _0xfcc1dd
          ? _0x8e41d8(
              _0xfcc1dd.activeSheet$,
              _0x4d6772.selectionChanged$,
              _0x52777c.change$,
            ).pipe(_0x41f624(null))
          : _0x22848d(null),
      ),
    );
}
const Dt = { [_0x5e9900.ROW]: Qe.id, [_0x5e9900.COLUMN]: $e.id },
  Ot = { [_0x5e9900.ROW]: nt.id, [_0x5e9900.COLUMN]: rt.id };
function kt(_0x2249bc) {
  return Tt(_0x2249bc)
    ? [
        {
          id: N.id,
          commandId: N.id,
          value: "group",
          label: _0x2249bc.get(_0x1fc2e8).t("sheets-outline-ui.group"),
          disabled: Rt(_0x2249bc),
        },
        {
          id: P.id,
          commandId: P.id,
          value: "ungroup",
          label: _0x2249bc.get(_0x1fc2e8).t("sheets-outline-ui.ungroup"),
          disabled: zt(_0x2249bc),
        },
      ]
    : [];
}
function At(_0x2aedbd, _0x45f9e1, _0x1699ec) {
  let _0x23d198 = _0x45f9e1.map((_0x3e621d) =>
      jt(
        Dt[_0x3e621d],
        _0x3e621d,
        Pt(_0x2aedbd, _0x3e621d),
        I(_0x2aedbd, _0x3e621d),
      ),
    ),
    _0xaa10f3 = _0x45f9e1.map((_0x3321b2) =>
      jt(
        Ot[_0x3321b2],
        _0x3321b2,
        Ft(_0x2aedbd, _0x3321b2),
        L(_0x2aedbd, _0x3321b2),
      ),
    );
  return _0x1699ec === "group"
    ? _0x23d198
    : _0x1699ec === "ungroup"
      ? _0xaa10f3
      : [..._0x23d198, ..._0xaa10f3];
}
function jt(_0x4853e2, _0x2d18b8, _0x1ff64f, _0x433626) {
  return {
    id: _0x4853e2,
    commandId: _0x4853e2,
    value: _0x2d18b8,
    disabled: _0x433626,
    label: _0x1ff64f,
  };
}
const Mt = {
    [_0x5e9900.ROW]: "sheets-outline-ui.groupRows",
    [_0x5e9900.COLUMN]: "sheets-outline-ui.groupColumns",
  },
  Nt = {
    [_0x5e9900.ROW]: "sheets-outline-ui.ungroupRows",
    [_0x5e9900.COLUMN]: "sheets-outline-ui.ungroupColumns",
  };
function Pt(_0xe70b6e, _0x36c784) {
  return It(_0xe70b6e, Mt, _0x36c784);
}
function Ft(_0x10140f, _0x4a2d29) {
  return It(_0x10140f, Nt, _0x4a2d29);
}
function It(_0x298003, _0x2b2d41, _0x376e04) {
  let _0x1edb53 = M(_0x298003.get(_0x5bedea), _0x376e04);
  return _0x1edb53
    ? _0x298003.get(_0x1fc2e8).t(_0x2b2d41[_0x1edb53.axis], ...Lt(_0x1edb53))
    : "";
}
function Lt(_0x111aab) {
  return _0x111aab.axis === _0x5e9900.ROW
    ? ["" + (_0x111aab.start + 1), "" + (_0x111aab.end + 1)]
    : [
        _0x36f9ed.chatAtABC(_0x111aab.start),
        _0x36f9ed.chatAtABC(_0x111aab.end),
      ];
}
function I(_0x3eadc8, _0x23edd0) {
  let _0x52a39e = M(_0x3eadc8.get(_0x5bedea), _0x23edd0),
    _0x104506 = _0x1bba90(_0x3eadc8.get(_0x3f16d0));
  return (
    !_0x52a39e ||
    !_0x104506 ||
    !_0x333247(_0x3eadc8, _0x104506.unitId, _0x104506.subUnitId) ||
    !_0x58a94f(
      _0x3eadc8
        .get(_0x1bdc3f)
        .getOutlines(_0x104506.unitId, _0x104506.subUnitId),
      {
        id: "__menu_check__",
        unitId: _0x104506.unitId,
        subUnitId: _0x104506.subUnitId,
        axis: _0x52a39e.axis,
        start: _0x52a39e.start,
        end: _0x52a39e.end,
        collapsed: false,
      },
    ).valid
  );
}
function L(_0x440939, _0x501186) {
  let _0x2879f1 = M(_0x440939.get(_0x5bedea), _0x501186),
    _0x8f3c73 = _0x1bba90(_0x440939.get(_0x3f16d0));
  return (
    !_0x2879f1 ||
    !_0x8f3c73 ||
    !_0x333247(_0x440939, _0x8f3c73.unitId, _0x8f3c73.subUnitId) ||
    !_0x440939
      .get(_0x1bdc3f)
      .getOutlines(_0x8f3c73.unitId, _0x8f3c73.subUnitId)
      .some(
        (_0x530386) =>
          _0x530386.axis === _0x2879f1.axis &&
          _0x530386.start >= _0x2879f1.start &&
          _0x530386.end <= _0x2879f1.end,
      )
  );
}
function Rt(_0x551925) {
  let _0x5f6a26 = Et(_0x551925);
  return _0x5f6a26
    ? _0x5f6a26.rangeType === _0x879cd2.ROW
      ? I(_0x551925, _0x5e9900.ROW)
      : (_0x5f6a26.rangeType === _0x879cd2.COLUMN ||
          I(_0x551925, _0x5e9900.ROW)) &&
        I(_0x551925, _0x5e9900.COLUMN)
    : true;
}
function zt(_0x576aba) {
  let _0x4a759c = Et(_0x576aba);
  return _0x4a759c
    ? _0x4a759c.rangeType === _0x879cd2.ROW
      ? L(_0x576aba, _0x5e9900.ROW)
      : (_0x4a759c.rangeType === _0x879cd2.COLUMN ||
          L(_0x576aba, _0x5e9900.ROW)) &&
        L(_0x576aba, _0x5e9900.COLUMN)
    : true;
}
const Bt = {
  [_0x2bdb90.ORGANIZATION]: {
    [ht]: { order: 20, gridLayout: { row: 2, column: 3 }, menuItemFactory: gt },
  },
  [_0x1355b4.ROW_HEADER]: {
    [_0x425e98.LAYOUT]: { [vt]: { order: 8, menuItemFactory: yt } },
  },
  [_0x1355b4.COL_HEADER]: {
    [_0x425e98.LAYOUT]: { [vt]: { order: 8, menuItemFactory: bt } },
  },
};
var Vt = "@univerjs-pro/sheets-outline-ui",
  Ht = "1.0.0-insiders.20260907-70fc579";
const Ut = {};
function R(_0x34330f, _0x1770b3) {
  return function (_0x3927ae, _0x45a5a4) {
    _0x1770b3(_0x3927ae, _0x45a5a4, _0x34330f);
  };
}
function z(_0x7e47e7, _0x1a82bd, _0x50ee47, _0x115e2e) {
  var _0x5c2c74 = arguments.length,
    _0x33cf2b =
      _0x5c2c74 < 3
        ? _0x1a82bd
        : _0x115e2e === null
          ? (_0x115e2e = Object.getOwnPropertyDescriptor(_0x1a82bd, _0x50ee47))
          : _0x115e2e,
    _0x6416d0;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x33cf2b = Reflect.decorate(_0x7e47e7, _0x1a82bd, _0x50ee47, _0x115e2e);
  else {
    for (var _0x28b681 = _0x7e47e7.length - 1; _0x28b681 >= 0; _0x28b681--)
      (_0x6416d0 = _0x7e47e7[_0x28b681]) &&
        (_0x33cf2b =
          (_0x5c2c74 < 3
            ? _0x6416d0(_0x33cf2b)
            : _0x5c2c74 > 3
              ? _0x6416d0(_0x1a82bd, _0x50ee47, _0x33cf2b)
              : _0x6416d0(_0x1a82bd, _0x50ee47)) || _0x33cf2b);
  }
  return (
    _0x5c2c74 > 3 &&
      _0x33cf2b &&
      Object.defineProperty(_0x1a82bd, _0x50ee47, _0x33cf2b),
    _0x33cf2b
  );
}
let B = class extends _0x407f6c {
  constructor(_0x1dc34a, _0x219e5c) {
    (super(),
      (this._componentManager = _0x1dc34a),
      (this._iconManager = _0x219e5c),
      this._registerComponents(),
      this._registerIcons());
  }
  _registerComponents() {
    this.disposeWithMe(this._componentManager["register"](at, ot));
  }
  _registerIcons() {
    this.disposeWithMe(
      this._iconManager["register"]({ GroupingDoubleIcon: _0x4e97f7 }),
    );
  }
};
B = z([R(0, _0x1094e7(_0x36a41b)), R(1, _0x1094e7(_0x1a0299))], B);
const Wt = new Set([_0x1a2043.id, _0x14f44d.id, _0x51bfbd.id, _0x181b1f.id]);
let V = class extends _0x407f6c {
  constructor(_0xd2626d, _0x1eaf6c, _0x338631, _0x30182e) {
    (super(),
      (this._commandService = _0xd2626d),
      (this._localeService = _0x1eaf6c),
      (this._sheetPermissionCheckController = _0x338631),
      (this._univerInstanceService = _0x30182e),
      this._initPermission());
  }
  _initPermission() {
    this.disposeWithMe(
      this._commandService["beforeCommandExecuted"]((_0x5db8ba) => {
        if (!Wt.has(_0x5db8ba.id)) return;
        let _0x4980a6 = _0x1bba90(
          this._univerInstanceService,
          _0x5db8ba.params,
        );
        _0x4980a6 &&
          (this._sheetPermissionCheckController["permissionCheckWithoutRange"](
            { workbookTypes: [_0x22dca6], worksheetTypes: [_0x3ec7c7] },
            _0x4980a6.unitId,
            _0x4980a6.subUnitId,
          ) ||
            this._sheetPermissionCheckController[
              "blockExecuteWithoutPermission"
            ](this._localeService["t"]("sheets-outline-ui.error.permission")));
      }),
    );
  }
};
V = z(
  [
    R(0, _0x1094e7(_0x5c7296)),
    R(1, _0x1094e7(_0x1fc2e8)),
    R(2, _0x1094e7(_0x55d1a4)),
    R(3, _0x3f16d0),
  ],
  V,
);
const Gt = {
    id: N.id,
    preconditions: (_0x43e495) => _0xf434d0(_0x43e495),
    binding: _0xcb7269.ARROW_RIGHT | _0x1c123b.ALT | _0x1c123b.SHIFT,
    mac: _0xcb7269.K | _0x1c123b.CTRL_COMMAND | _0x1c123b.SHIFT,
  },
  Kt = {
    id: P.id,
    preconditions: (_0x48d8f5) => _0xf434d0(_0x48d8f5),
    binding: _0xcb7269.ARROW_LEFT | _0x1c123b.ALT | _0x1c123b.SHIFT,
    mac: _0xcb7269.J | _0x1c123b.CTRL_COMMAND | _0x1c123b.SHIFT,
  },
  qt = {
    [_0x5be324.INVALID_RANGE]: "sheets-outline-ui.error.invalidRange",
    [_0x5be324.OUT_OF_BOUNDS]: "sheets-outline-ui.error.outOfBounds",
    [_0x5be324.CROSSING]: "sheets-outline-ui.error.crossing",
    [_0x5be324.MAX_DEPTH]: "sheets-outline-ui.error.maxDepth",
    [_0x5be324.MOVE_SPLITS_OUTLINE]:
      "sheets-outline-ui.error.moveSplitsOutline",
    [_0x5be324.CLEAR_RANGE_NOT_CONTAIN_OUTLINE]:
      "sheets-outline-ui.error.clearRangeNotContainOutline",
    [_0x5be324.UNKNOWN]: "sheets-outline-ui.error.unknown",
  };
let H = class extends _0x407f6c {
  constructor(_0x5ca405, _0x3a0d99, _0x23191e) {
    (super(),
      (this._sheetsOutlineErrorService = _0x5ca405),
      (this._messageService = _0x3a0d99),
      (this._localeService = _0x23191e),
      this._initErrorListener());
  }
  _initErrorListener() {
    this.disposeWithMe(
      this._sheetsOutlineErrorService["error$"].subscribe((_0x230e8a) => {
        this._showError(_0x230e8a);
      }),
    );
  }
  _showError(_0xb15bdd) {
    this._messageService["show"]({
      type: _0x2318a5.Error,
      content: this._localeService["t"](qt[_0xb15bdd.reason]),
    });
  }
};
H = z(
  [R(0, _0x1094e7(_0x49c358)), R(1, _0x24af37), R(2, _0x1094e7(_0x1fc2e8))],
  H,
);
let U = class extends _0x407f6c {
  constructor(_0x3b3063) {
    (super(),
      (this._menuManagerService = _0x3b3063),
      this._menuManagerService["mergeMenu"](Bt));
  }
};
U = z([R(0, _0x1c11d6)], U);
function W(_0x27ec22, _0x564c44, _0xfca27d, _0x102d99, _0x4d7cf1 = {}) {
  return $t(
    _0x3a36fb(_0x27ec22).filter(
      (_0x52820f) =>
        _0x52820f.unitId === _0x564c44 &&
        _0x52820f.subUnitId === _0xfca27d &&
        _0x52820f.axis === _0x102d99,
    ),
    _0x4d7cf1,
  );
}
function Jt(_0x1e211f, _0x14e168, _0x429a69, _0x338002, _0xbd322e = {}) {
  return W(_0x1e211f, _0x14e168, _0x429a69, _0x338002, _0xbd322e).reduce(
    (_0x4f0ad1, _0x18868f) => Math.max(_0x4f0ad1, _0x18868f.depth),
    0,
  );
}
function G(_0x2a7b2d, _0x4cc332 = {}) {
  return _0x2a7b2d <= 0
    ? 0
    : (_0x4cc332.includeLevelButtons ? Yt(_0x2a7b2d) : _0x2a7b2d) * 20;
}
function Yt(_0x4f8a5d) {
  return Math.max(0, _0x4f8a5d);
}
function Xt(_0xab58e0, _0x273fdd, _0x47a0e3) {
  return _0x47a0e3.depth < _0x273fdd
    ? false
    : !_0xab58e0.some((_0xa10c26) => _0xa10c26.collapsed);
}
function Zt(_0x5696b7, _0x18cda2, _0x21c33b) {
  for (let _0x393432 = _0x5696b7.length - 1; _0x393432 >= 0; _0x393432--) {
    let _0x3e9f11 = _0x5696b7[_0x393432];
    if (
      _0x18cda2 >= _0x3e9f11.left &&
      _0x18cda2 <= _0x3e9f11.left + _0x3e9f11.width &&
      _0x21c33b >= _0x3e9f11.top &&
      _0x21c33b <= _0x3e9f11.top + _0x3e9f11.height
    )
      return _0x3e9f11;
  }
  return null;
}
function Qt(_0x4a9a19, _0x19dc56, _0x20456a) {
  for (let _0x1f57d6 = _0x4a9a19.length - 1; _0x1f57d6 >= 0; _0x1f57d6--) {
    let _0x1b599 = _0x4a9a19[_0x1f57d6];
    if (
      _0x19dc56 >= _0x1b599.left &&
      _0x19dc56 <= _0x1b599.left + _0x1b599.width &&
      _0x20456a >= _0x1b599.top &&
      _0x20456a <= _0x1b599.top + _0x1b599.height
    )
      return _0x1b599;
  }
  return null;
}
function $t(_0x4465e6, _0x5c45ae) {
  let _0x1d9edf = [];
  for (let _0x164e48 of _0x4465e6) {
    _0x1d9edf.push(_0x164e48);
    let _0x44c45a =
      _0x5c45ae.includeHiddenGroups || !_0x164e48.collapsed
        ? _0x164e48.children
        : _0x164e48.children["filter"]((_0x22bd3b) => en(_0x164e48, _0x22bd3b));
    _0x44c45a.length > 0 && _0x1d9edf.push(...$t(_0x44c45a, _0x5c45ae));
  }
  return _0x1d9edf;
}
function en(_0x13714a, _0x88a672) {
  return (
    _0x13714a.unitId === _0x88a672.unitId &&
    _0x13714a.subUnitId === _0x88a672.subUnitId &&
    _0x13714a.axis === _0x88a672.axis &&
    _0x13714a.start === _0x88a672.start &&
    _0x13714a.end === _0x88a672.end
  );
}
function K(_0x4cd5e) {
  "@babel/helpers - typeof";
  return (
    (K =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x184640) {
            return typeof _0x184640;
          }
        : function (_0x3f51dc) {
            return _0x3f51dc &&
              typeof Symbol == "function" &&
              _0x3f51dc.constructor === Symbol &&
              _0x3f51dc !== Symbol.prototype
              ? "symbol"
              : typeof _0x3f51dc;
          }),
    K(_0x4cd5e)
  );
}
function tn(_0x33f55e, _0x2ee203) {
  if (K(_0x33f55e) != "object" || !_0x33f55e) return _0x33f55e;
  var _0x4c2144 = _0x33f55e[Symbol.toPrimitive];
  if (_0x4c2144 !== undefined) {
    var _0x4d2b7b = _0x4c2144.call(_0x33f55e, _0x2ee203 || "default");
    if (K(_0x4d2b7b) != "object") return _0x4d2b7b;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x2ee203 === "string" ? String : Number)(_0x33f55e);
}
function nn(_0x2a2e4d) {
  var _0x5d0ae2 = tn(_0x2a2e4d, "string");
  return K(_0x5d0ae2) == "symbol" ? _0x5d0ae2 : _0x5d0ae2 + "";
}
function q(_0x4066f4, _0x20f9a2, _0x14abb0) {
  return (
    (_0x20f9a2 = nn(_0x20f9a2)) in _0x4066f4
      ? Object.defineProperty(_0x4066f4, _0x20f9a2, {
          value: _0x14abb0,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x4066f4[_0x20f9a2] = _0x14abb0),
    _0x4066f4
  );
}
const J = 0.5;
var rn = class extends _0x13c9f0 {
  constructor(_0x5dc3ec, _0xdcc7ef, _0x186e84, _0x55f3ff, _0x38832e) {
    (super(_0x5dc3ec, { evented: true, fill: "rgba(0, 0, 0, 0)", zIndex: 100 }),
      (this._axis = _0xdcc7ef),
      (this._sheetsOutlineModel = _0x186e84),
      (this._themeService = _0x55f3ff),
      (this._getSkeleton = _0x38832e),
      q(this, "_buttons", []),
      q(this, "_levelButtons", []),
      q(this, "_lines", []),
      q(this, "_hoveredOutlineId", null),
      q(this, "_hoveredLevel", null));
  }
  refreshBounds() {
    let _0x51f7b8 = this._getSkeleton();
    if (!_0x51f7b8) {
      this.hide();
      return;
    }
    let _0x2d258e = _0x51f7b8.worksheet,
      _0x57d73c = _0x2d258e.getUnitId(),
      _0x42ec42 = _0x2d258e.getSheetId(),
      _0x150cee = G(
        Jt(
          this._sheetsOutlineModel["getOutlines"](_0x57d73c, _0x42ec42),
          _0x57d73c,
          _0x42ec42,
          this._axis,
          { includeHiddenGroups: true },
        ),
        { includeLevelButtons: true },
      );
    if (_0x150cee <= 0) {
      this.hide();
      return;
    }
    (this.show(),
      this._axis === _0x5e9900.ROW
        ? this.transformByState({
            left: 0,
            top: 0,
            width: _0x150cee,
            height:
              _0x51f7b8.columnHeaderHeightAndMarginTop +
              _0x51f7b8.rowTotalHeight,
          })
        : this.transformByState({
            left: 0,
            top: 0,
            width:
              _0x51f7b8.rowHeaderWidthAndMarginLeft +
              _0x51f7b8.columnTotalWidth,
            height: _0x150cee,
          }));
  }
  setHoveredOutline(_0x2d0b27) {
    this._hoveredOutlineId !== _0x2d0b27 &&
      ((this._hoveredOutlineId = _0x2d0b27), this.makeDirty(true));
  }
  setHoveredLevel(_0x35499a) {
    this._hoveredLevel !== _0x35499a &&
      ((this._hoveredLevel = _0x35499a), this.makeDirty(true));
  }
  hitTestButton(_0x2e9122, _0x163c78) {
    return Zt(this._buttons, _0x2e9122, _0x163c78);
  }
  hitTestLevelButton(_0x4cd261, _0x3d3b55) {
    return Qt(this._levelButtons, _0x4cd261, _0x3d3b55);
  }
  hitTestOutline(_0x4be9e1, _0x546540) {
    let _0x3d7bf0 = this.hitTestButton(_0x4be9e1, _0x546540);
    return _0x3d7bf0 ? _0x3d7bf0.id : this.hitTestLine(_0x4be9e1, _0x546540);
  }
  hitTestLine(_0x4c55b0, _0xce4422) {
    for (
      let _0x39e4c1 = this._lines["length"] - 1;
      _0x39e4c1 >= 0;
      _0x39e4c1--
    ) {
      let _0x5f28b4 = this._lines[_0x39e4c1];
      if (
        _0x4c55b0 >= _0x5f28b4.left &&
        _0x4c55b0 <= _0x5f28b4.left + _0x5f28b4.width &&
        _0xce4422 >= _0x5f28b4.top &&
        _0xce4422 <= _0x5f28b4.top + _0x5f28b4.height
      )
        return _0x5f28b4.id;
    }
    return null;
  }
  _draw(_0x2fe913) {
    ((this._buttons = []), (this._levelButtons = []), (this._lines = []));
    let _0x3ec730 = this._getSkeleton();
    if (!_0x3ec730) return;
    let _0x5cf0ed = _0x3ec730.worksheet,
      _0x170b4e = _0x5cf0ed.getUnitId(),
      _0x2c9bb0 = _0x5cf0ed.getSheetId(),
      _0x5acf83 = this._sheetsOutlineModel["getOutlines"](_0x170b4e, _0x2c9bb0),
      _0xa8f6fb = W(_0x5acf83, _0x170b4e, _0x2c9bb0, this._axis),
      _0x3374eb = W(_0x5acf83, _0x170b4e, _0x2c9bb0, this._axis, {
        includeHiddenGroups: true,
      });
    if (_0x3374eb.length === 0) return;
    let _0x1beedd = _0x3374eb.reduce(
        (_0x17ffbe, _0x454fed) => Math.max(_0x17ffbe, _0x454fed.depth),
        0,
      ),
      _0x347961 = G(_0x1beedd, { includeLevelButtons: true }),
      _0x294691 = sn(this._axis, _0x3374eb, _0x1beedd, _0x347961, _0x3ec730);
    (_0x2fe913.save(),
      (_0x2fe913.textAlign = "center"),
      (_0x2fe913.textBaseline = "middle"),
      (_0x2fe913.font = "12px\x20" + _0x85a94e),
      _0x2fe913.setLineWidthByPrecision(2),
      this._axis === _0x5e9900.ROW
        ? this._drawRows(_0x2fe913, _0xa8f6fb, _0x294691, _0x347961, _0x3ec730)
        : this._drawColumns(
            _0x2fe913,
            _0xa8f6fb,
            _0x294691,
            _0x347961,
            _0x3ec730,
          ),
      _0x2fe913.restore());
  }
  _drawRows(_0x452c57, _0x3070c2, _0x34c9b1, _0x33f83f, _0x1eff96) {
    let {
        rowHeightAccumulation: _0x3e3720,
        rowTotalHeight: _0x46fb5d,
        columnHeaderHeightAndMarginTop: _0x182b55,
      } = _0x1eff96,
      _0x2b5e6d = Y(this._themeService);
    (_0x452c57.save(),
      (_0x452c57.fillStyle = _0x2b5e6d.gutterBackground),
      _0x452c57.fillRectByPrecision(0, 0, _0x33f83f, _0x182b55 + _0x46fb5d),
      (_0x452c57.strokeStyle = _0x2b5e6d.gutterBorder),
      _0x452c57.setLineWidthByPrecision(1),
      _0x452c57.beginPath(),
      _0x452c57.moveToByPrecision(_0x33f83f - J, 0),
      _0x452c57.lineToByPrecision(_0x33f83f - J, _0x182b55 + _0x46fb5d),
      _0x452c57.stroke(),
      _0x452c57.restore(),
      this._drawLevelButtons(_0x452c57, _0x34c9b1),
      _0x452c57.setLineWidthByPrecision(2));
    for (let _0x54b7aa of _0x3070c2) {
      let _0x5a8f6f = Math.min(
          _0x33f83f - 14 - 3,
          (_0x54b7aa.depth - 1) * 20 + 3,
        ),
        _0x43e4f6 = _0x5a8f6f + 14 / 2,
        _0x4d27bd = cn(_0x3e3720, _0x54b7aa.start),
        _0x598a2f = X(_0x3e3720, _0x54b7aa.end, _0x46fb5d),
        _0x4741de = ln(_0x3e3720, _0x54b7aa.end, _0x46fb5d, 14),
        _0x34eb72 = this._hoveredOutlineId === _0x54b7aa.id,
        _0x3067b7 = this._getHoverColor(),
        _0x32519f = Math.max(0, _0x4d27bd),
        _0x518f8e = Math.max(_0x4d27bd, Math.min(_0x46fb5d, _0x598a2f)),
        _0x4e3628 = un(_0x3e3720, _0x54b7aa.start, _0x54b7aa.end, _0x46fb5d);
      ((_0x452c57.strokeStyle = _0x34eb72 ? _0x3067b7 : _0x2b5e6d.line),
        _0x452c57.beginPath(),
        _0x452c57.moveToByPrecision(_0x43e4f6, _0x182b55 + _0x32519f),
        _0x452c57.lineToByPrecision(_0x43e4f6, _0x182b55 + _0x518f8e),
        _0x452c57.moveToByPrecision(_0x43e4f6, _0x182b55 + _0x4e3628),
        _0x452c57.lineToByPrecision(
          Math.min(_0x33f83f, _0x43e4f6 + 8),
          _0x182b55 + _0x4e3628,
        ),
        _0x452c57.stroke(),
        this._lines["push"]({
          id: _0x54b7aa.id,
          axis: _0x54b7aa.axis,
          left: _0x43e4f6 - 6 / 2,
          top: _0x32519f,
          width: 6,
          height: Math.max(14, _0x518f8e - _0x32519f),
        }),
        this._drawButton(
          _0x452c57,
          _0x5a8f6f,
          _0x4741de,
          _0x54b7aa,
          _0x34eb72,
          0,
          _0x182b55,
        ));
    }
  }
  _drawColumns(_0x288176, _0x439988, _0xea3d48, _0x5d38a9, _0xed5302) {
    let {
        columnWidthAccumulation: _0x2fbc88,
        columnTotalWidth: _0x435782,
        rowHeaderWidthAndMarginLeft: _0x238ef2,
      } = _0xed5302,
      _0x3adefd = Y(this._themeService);
    (_0x288176.save(),
      (_0x288176.fillStyle = _0x3adefd.gutterBackground),
      _0x288176.fillRectByPrecision(0, 0, _0x238ef2 + _0x435782, _0x5d38a9),
      (_0x288176.strokeStyle = _0x3adefd.gutterBorder),
      _0x288176.setLineWidthByPrecision(1),
      _0x288176.beginPath(),
      _0x288176.moveToByPrecision(0, _0x5d38a9 - J),
      _0x288176.lineToByPrecision(_0x238ef2 + _0x435782, _0x5d38a9 - J),
      _0x288176.stroke(),
      _0x288176.restore(),
      this._drawLevelButtons(_0x288176, _0xea3d48),
      _0x288176.setLineWidthByPrecision(2));
    for (let _0x1d1593 of _0x439988) {
      let _0x521a80 = Math.min(
          _0x5d38a9 - 14 - 3,
          (_0x1d1593.depth - 1) * 20 + 3,
        ),
        _0x54d519 = _0x521a80 + 14 / 2,
        _0x1571db = cn(_0x2fbc88, _0x1d1593.start),
        _0x213b9d = X(_0x2fbc88, _0x1d1593.end, _0x435782),
        _0x1a04e8 = ln(_0x2fbc88, _0x1d1593.end, _0x435782, 14),
        _0x2e8c25 = this._hoveredOutlineId === _0x1d1593.id,
        _0x511025 = this._getHoverColor(),
        _0x5aa311 = Math.max(0, _0x1571db),
        _0xb4251f = Math.max(_0x1571db, Math.min(_0x435782, _0x213b9d)),
        _0x29387f = un(_0x2fbc88, _0x1d1593.start, _0x1d1593.end, _0x435782);
      ((_0x288176.strokeStyle = _0x2e8c25 ? _0x511025 : _0x3adefd.line),
        _0x288176.beginPath(),
        _0x288176.moveToByPrecision(_0x238ef2 + _0x5aa311, _0x54d519),
        _0x288176.lineToByPrecision(_0x238ef2 + _0xb4251f, _0x54d519),
        _0x288176.moveToByPrecision(_0x238ef2 + _0x29387f, _0x54d519),
        _0x288176.lineToByPrecision(
          _0x238ef2 + _0x29387f,
          Math.min(_0x5d38a9, _0x54d519 + 8),
        ),
        _0x288176.stroke(),
        this._lines["push"]({
          id: _0x1d1593.id,
          axis: _0x1d1593.axis,
          left: _0x5aa311,
          top: _0x54d519 - 6 / 2,
          width: Math.max(14, _0xb4251f - _0x5aa311),
          height: 6,
        }),
        this._drawButton(
          _0x288176,
          _0x1a04e8,
          _0x521a80,
          _0x1d1593,
          _0x2e8c25,
          _0x238ef2,
        ));
    }
  }
  _drawLevelButtons(_0x4b3b63, _0x4178e4) {
    let _0x23097b = Y(this._themeService);
    for (let _0xf4065d of _0x4178e4) {
      let _0x336cae = this._hoveredLevel === _0xf4065d.level;
      (_0x4b3b63.save(),
        _0x4b3b63.translateWithPrecision(_0xf4065d.left, _0xf4065d.top),
        _0x2fe175.drawWith(_0x4b3b63, {
          width: 14,
          height: 14,
          radius: 3,
          fill: _0x336cae
            ? this._getHoverBackgroundColor()
            : _0x23097b.buttonFill,
          stroke: _0x336cae ? this._getHoverColor() : _0x23097b.buttonStroke,
        }),
        (_0x4b3b63.fillStyle = _0x336cae
          ? this._getHoverColor()
          : _0x23097b.buttonText),
        _0x4b3b63.fillText(String(_0xf4065d.level), 14 / 2, 7.5),
        _0x4b3b63.restore(),
        this._levelButtons["push"](_0xf4065d));
    }
  }
  _drawButton(
    _0x40145f,
    _0x265b81,
    _0x38a014,
    _0x253868,
    _0x516ea8,
    _0x280e02 = 0,
    _0x1eeff9 = 0,
  ) {
    (_0x40145f.save(),
      _0x40145f.translateWithPrecision(
        _0x265b81 + _0x280e02,
        _0x38a014 + _0x1eeff9,
      ));
    let _0xc9c9e5 = an(_0x253868.collapsed, _0x516ea8, this._themeService);
    (_0x2fe175.drawWith(_0x40145f, {
      width: 14,
      height: 14,
      radius: 3,
      fill: _0xc9c9e5.fill,
      stroke: _0xc9c9e5.stroke,
    }),
      on(_0x40145f, _0x253868.collapsed, _0xc9c9e5.text),
      _0x40145f.restore(),
      this._buttons["push"]({
        id: _0x253868.id,
        axis: _0x253868.axis,
        collapsed: _0x253868.collapsed,
        left: _0x265b81,
        top: _0x38a014,
        width: 14,
        height: 14,
      }));
  }
  _getHoverColor() {
    return this._themeService["getColorFromTheme"]("primary.600");
  }
  _getHoverBackgroundColor() {
    return this._themeService["getColorFromTheme"]("primary.50");
  }
};
function an(_0x28d956, _0x34c0ac, _0x455574) {
  let _0x5d2dff = Y(_0x455574);
  if (_0x28d956) {
    let _0x3e41fc = _0x34c0ac
      ? _0x455574.getColorFromTheme("primary.700")
      : _0x455574.getColorFromTheme("primary.600");
    return {
      fill: _0x3e41fc,
      stroke: _0x3e41fc,
      text: _0x5d2dff.activeButtonText,
    };
  }
  return {
    fill: _0x34c0ac
      ? _0x455574.getColorFromTheme("primary.50")
      : _0x5d2dff.buttonFill,
    stroke: _0x34c0ac
      ? _0x455574.getColorFromTheme("primary.600")
      : _0x5d2dff.buttonStroke,
    text: _0x34c0ac
      ? _0x455574.getColorFromTheme("primary.600")
      : _0x5d2dff.buttonText,
  };
}
function Y(_0x41c5c7) {
  return {
    gutterBackground: _0x41c5c7.getColorFromTheme("gray.50"),
    gutterBorder: _0x41c5c7.getColorFromTheme("gray.200"),
    line: _0x41c5c7.getColorFromTheme("gray.300"),
    buttonFill: _0x41c5c7.getColorFromTheme("gray.0"),
    buttonStroke: _0x41c5c7.getColorFromTheme("gray.300"),
    buttonText: _0x41c5c7.getColorFromTheme("gray.500"),
    activeButtonText: _0x41c5c7.getColorFromTheme("gray.0"),
  };
}
function on(_0x560fe9, _0x261d26, _0xa370fa) {
  ((_0x560fe9.strokeStyle = _0xa370fa),
    _0x560fe9.setLineWidthByPrecision(1.5),
    _0x560fe9.beginPath(),
    _0x560fe9.moveToByPrecision(4, 7),
    _0x560fe9.lineToByPrecision(10, 7),
    _0x261d26 &&
      (_0x560fe9.moveToByPrecision(7, 4), _0x560fe9.lineToByPrecision(7, 10)),
    _0x560fe9.stroke());
}
function sn(_0x39e052, _0x2f1902, _0x3ee24c, _0x46735c, _0x580304) {
  let _0x34725e = Yt(_0x3ee24c);
  return Array.from({ length: _0x34725e }, (_0x1d9f02, _0x1ad742) => ({
    axis: _0x39e052,
    level: _0x1ad742 + 1,
    active: false,
    left:
      _0x39e052 === _0x5e9900.ROW
        ? _0x1ad742 * 20 + 3
        : Math.max(3, _0x580304.rowHeaderWidthAndMarginLeft - 14 - 3),
    top:
      _0x39e052 === _0x5e9900.ROW
        ? Math.max(3, _0x580304.columnHeaderHeightAndMarginTop - 14 - 3)
        : Math.min(_0x46735c - 14 - 3, _0x1ad742 * 20 + 3),
    width: 14,
    height: 14,
  }));
}
function cn(_0x4dde2e, _0x3a0b8d) {
  return _0x3a0b8d <= 0
    ? 0
    : (_0x4dde2e[_0x3a0b8d - 1] ?? _0x4dde2e[_0x4dde2e.length - 1] ?? 0);
}
function ln(_0x37c855, _0x3afeea, _0x2006ef, _0x2e0f2a) {
  let _0x5f6b87 = X(_0x37c855, _0x3afeea, _0x2006ef) - _0x2e0f2a / 2;
  return Math.max(
    3,
    Math.min(Math.max(_0x2006ef - _0x2e0f2a - 3, 3), _0x5f6b87),
  );
}
function un(_0x5dec43, _0x2ba9a9, _0x4b9a6d, _0x25b4b6) {
  return Math.max(0, Math.min(_0x25b4b6, cn(_0x5dec43, _0x2ba9a9)));
}
function X(_0x182378, _0x3b798b, _0x1cf6df) {
  let _0x3d2a01 = _0x3b798b + 1;
  return _0x3d2a01 >= 0 && _0x3d2a01 < _0x182378.length
    ? ((_0x3d2a01 <= 0 ? 0 : (_0x182378[_0x3d2a01 - 1] ?? 0)) +
        (_0x182378[_0x3d2a01] ?? _0x1cf6df)) /
        2
    : _0x1cf6df;
}
const dn = new Set([
  "sheet.mutation.add-dimension-outline",
  "sheet.mutation.remove-dimension-outline",
  "sheet.mutation.set-dimension-outline-collapsed",
  "sheet.mutation.clear-dimension-outlines",
  "sheet.mutation.transform-dimension-outlines",
  _0x312ba5.id,
  _0xe1be0e.id,
  _0x4c326e.id,
  _0x2d64e3.id,
]);
let Z = class extends _0x407f6c {
  constructor(
    _0x832266,
    _0x412a55,
    _0x11460e,
    _0x24c75e,
    _0x1eb19e,
    _0x27496a,
    _0x5549e9,
  ) {
    (super(),
      (this._context = _0x832266),
      (this._sheetsOutlineModel = _0x412a55),
      (this._sheetSkeletonManagerService = _0x11460e),
      (this._renderManagerService = _0x24c75e),
      (this._commandService = _0x1eb19e),
      (this._themeService = _0x27496a),
      (this._headerUnhideRangeService = _0x5549e9),
      q(this, "_rowOutlineShape", undefined),
      q(this, "_columnOutlineShape", undefined),
      q(this, "_headerBaseSize", new Map()),
      q(this, "_syncingHeaderSize", false),
      (this._rowOutlineShape = new rn(
        "SheetsDimensionOutlineRowOutlineShape",
        _0x5e9900.ROW,
        this._sheetsOutlineModel,
        this._themeService,
        () => this._sheetSkeletonManagerService["getCurrentSkeleton"]() || null,
      )),
      (this._columnOutlineShape = new rn(
        "SheetsDimensionOutlineColumnOutlineShape",
        _0x5e9900.COLUMN,
        this._sheetsOutlineModel,
        this._themeService,
        () => this._sheetSkeletonManagerService["getCurrentSkeleton"]() || null,
      )),
      this._initHeaderUnhideRangeRules(),
      this._initOutlineShapes(),
      this._initRefresh(),
      this._refreshCurrentSheet());
  }
  _initHeaderUnhideRangeRules() {
    this.disposeWithMe(
      this._headerUnhideRangeService["registerRangeVisibleHandler"](
        (_0x553e53, _0x390996) =>
          _0x553e53 &&
          pn(
            this._sheetsOutlineModel["getOutlines"](
              _0x390996.workbook["getUnitId"](),
              _0x390996.worksheet["getSheetId"](),
            ),
            hn(_0x390996.axis),
            _0x390996.range,
          ),
      ),
    );
  }
  _initOutlineShapes() {
    (this._context["scene"].addObjects(
      [this._rowOutlineShape, this._columnOutlineShape],
      11,
    ),
      this.disposeWithMe(
        _0x2eb9c6(() => {
          this._context["scene"].removeObjects([
            this._rowOutlineShape,
            this._columnOutlineShape,
          ]);
        }),
      ),
      this.disposeWithMe(
        this._rowOutlineShape["onPointerMove$"].subscribeEvent(
          (_0xb3cd44, _0x4891f3) => {
            this._handleOutlinePointerMove(
              _0xb3cd44,
              _0x4891f3,
              this._rowOutlineShape,
              _0x5e9900.ROW,
            );
          },
        ),
      ),
      this.disposeWithMe(
        this._rowOutlineShape["onPointerLeave$"].subscribeEvent(
          (_0x7798b3, _0x30e4ef) => {
            this._handleOutlinePointerLeave(
              _0x7798b3,
              _0x30e4ef,
              this._rowOutlineShape,
            );
          },
        ),
      ),
      this.disposeWithMe(
        this._rowOutlineShape["onPointerDown$"].subscribeEvent(
          (_0x3a45c2, _0x423227) => {
            this._handleOutlinePointerDown(
              _0x3a45c2,
              _0x423227,
              this._rowOutlineShape,
              _0x5e9900.ROW,
            );
          },
        ),
      ),
      this.disposeWithMe(
        this._columnOutlineShape["onPointerMove$"].subscribeEvent(
          (_0x43ec67, _0x21d571) => {
            this._handleOutlinePointerMove(
              _0x43ec67,
              _0x21d571,
              this._columnOutlineShape,
              _0x5e9900.COLUMN,
            );
          },
        ),
      ),
      this.disposeWithMe(
        this._columnOutlineShape["onPointerLeave$"].subscribeEvent(
          (_0x561d7a, _0x5ba19a) => {
            this._handleOutlinePointerLeave(
              _0x561d7a,
              _0x5ba19a,
              this._columnOutlineShape,
            );
          },
        ),
      ),
      this.disposeWithMe(
        this._columnOutlineShape["onPointerDown$"].subscribeEvent(
          (_0x319590, _0x5ab317) => {
            this._handleOutlinePointerDown(
              _0x319590,
              _0x5ab317,
              this._columnOutlineShape,
              _0x5e9900.COLUMN,
            );
          },
        ),
      ));
  }
  _initRefresh() {
    var _0x29c664;
    let _0x7f69dd =
        (_0x29c664 = this._context["unit"]) == null
          ? undefined
          : _0x29c664.activeSheet$,
      _0x272523 = _0x16450e(
        this._commandService["onCommandExecuted"].bind(this._commandService),
      ).pipe(
        _0x214363(
          ([_0x214ecc]) =>
            _0x214ecc.type === _0x4c285c.MUTATION && dn.has(_0x214ecc.id),
        ),
      );
    this.disposeWithMe(
      _0x8e41d8(
        this._sheetsOutlineModel["change$"],
        _0x272523,
        this._themeService["currentTheme$"],
        this._sheetSkeletonManagerService["currentSkeleton$"].pipe(
          _0x214363(
            (_0x379473) => _0x379473 != null && !this._syncingHeaderSize,
          ),
        ),
        ...(_0x7f69dd ? [_0x7f69dd] : []),
      ).subscribe(() => this._refreshCurrentSheet()),
    );
  }
  _refreshCurrentSheet() {
    var _0x3d89b6, _0x20310c, _0xa293b8;
    (this._sheetSkeletonManagerService["reCalculate"](),
      this._syncOutlineHeaderSize(),
      this._rowOutlineShape["refreshBounds"](),
      this._columnOutlineShape["refreshBounds"](),
      (_0x3d89b6 = this._context["mainComponent"]) == null ||
        _0x3d89b6.makeDirty(),
      (_0x20310c = this._context["components"].get(_0x520364.ROW)) == null ||
        _0x20310c.makeDirty(true),
      (_0xa293b8 = this._context["components"].get(_0x520364.COLUMN)) == null ||
        _0xa293b8.makeDirty(true),
      this._rowOutlineShape["makeDirty"](true),
      this._columnOutlineShape["makeDirty"](true),
      this._context["scene"].makeDirty());
  }
  _syncOutlineHeaderSize() {
    if (this._syncingHeaderSize) return;
    let _0x217707 = this._context["unit"].getActiveSheet();
    if (!_0x217707) return;
    let _0x4f06cd = this._context["unit"].getUnitId(),
      _0x2c6e79 = _0x217707.getSheetId(),
      _0x494665 = this._sheetsOutlineModel["getOutlines"](_0x4f06cd, _0x2c6e79),
      _0x391cd0 = Jt(_0x494665, _0x4f06cd, _0x2c6e79, _0x5e9900.ROW, {
        includeHiddenGroups: true,
      }),
      _0x485b3e = Jt(_0x494665, _0x4f06cd, _0x2c6e79, _0x5e9900.COLUMN, {
        includeHiddenGroups: true,
      }),
      _0x1be8dc = G(_0x391cd0, { includeLevelButtons: true }),
      _0x408ccf = G(_0x485b3e, { includeLevelButtons: true }),
      _0x4c2dec = this._getHeaderBaseSize(
        _0x4f06cd,
        _0x2c6e79,
        _0x391cd0,
        _0x485b3e,
        _0x1be8dc,
        _0x408ccf,
      ),
      _0x1c372e = _0x4c2dec.rowHeaderWidth + _0x1be8dc,
      _0x1b7ea0 = _0x4c2dec.columnHeaderHeight + _0x408ccf,
      _0x47558d = this._renderManagerService["getRenderUnitById"](_0x4f06cd),
      _0x2611e1 = this._sheetSkeletonManagerService["getSkeleton"](_0x2c6e79);
    if (!(!_0x2611e1 || !_0x47558d)) {
      this._syncingHeaderSize = true;
      try {
        let _0xf4d861 =
            _0x2611e1.rowHeaderWidth !== _0x4c2dec.rowHeaderWidth ||
            _0x2611e1.rowHeaderWidthAndMarginLeft !== _0x1c372e,
          _0xe1b37e =
            _0x2611e1.columnHeaderHeight !== _0x4c2dec.columnHeaderHeight ||
            _0x2611e1.columnHeaderHeightAndMarginTop !== _0x1b7ea0;
        ((_0xf4d861 || _0xe1b37e) &&
          ((_0x2611e1.rowHeaderWidth = _0x4c2dec.rowHeaderWidth),
          (_0x2611e1.columnHeaderHeight = _0x4c2dec.columnHeaderHeight),
          _0x2611e1.setMarginLeft(_0x1be8dc),
          _0x2611e1.setMarginTop(_0x408ccf)),
          (_0xf4d861 || _0xe1b37e) &&
            this._sheetSkeletonManagerService["setCurrent"]({
              sheetId: _0x2c6e79,
            }));
      } finally {
        this._syncingHeaderSize = false;
      }
    }
  }
  _getHeaderBaseSize(
    _0xd4d791,
    _0x88965c,
    _0x49b4c1,
    _0x1b3c40,
    _0x3c342b,
    _0x374330,
  ) {
    var _0x2054fd, _0x32b420, _0x3fdfa1;
    let _0x28286d = _0xd4d791 + ":" + _0x88965c,
      _0x200e6c = this._headerBaseSize["get"](_0x28286d),
      _0x14f7f0 =
        (_0x2054fd = this._context["unit"].getSheetBySheetId(_0x88965c)) == null
          ? undefined
          : _0x2054fd.getConfig(),
      _0x3b7df1 = {
        rowHeaderWidth: fn(
          _0x14f7f0 == null || (_0x32b420 = _0x14f7f0.rowHeader) == null
            ? undefined
            : _0x32b420.width,
          46,
          240,
          _0x49b4c1,
          _0x3c342b,
          _0x200e6c == null ? undefined : _0x200e6c.rowHeaderWidth,
        ),
        columnHeaderHeight: fn(
          _0x14f7f0 == null || (_0x3fdfa1 = _0x14f7f0.columnHeader) == null
            ? undefined
            : _0x3fdfa1.height,
          20,
          160,
          _0x1b3c40,
          _0x374330,
          _0x200e6c == null ? undefined : _0x200e6c.columnHeaderHeight,
        ),
      };
    return (this._headerBaseSize["set"](_0x28286d, _0x3b7df1), _0x3b7df1);
  }
  _handleOutlinePointerMove(_0x157270, _0x1f7045, _0x589946, _0x9c508e) {
    let _0x13c034 = this._sheetSkeletonManagerService["getCurrentSkeleton"]();
    if (!_0x13c034) return;
    _0x1f7045.stopPropagation();
    let _0xa79715 = this._getOutlineLevelLocalPoint(_0x157270),
      _0x4ac6d8 = _0x589946.hitTestLevelButton(_0xa79715.x, _0xa79715.y),
      _0x4fe96c = this._getOutlineLocalPoint(_0x157270, _0x13c034, _0x9c508e),
      _0xc49ac9 = _0x4ac6d8
        ? null
        : _0x589946.hitTestOutline(_0x4fe96c.x, _0x4fe96c.y);
    (_0x589946.setHoveredLevel(
      (_0x4ac6d8 == null ? undefined : _0x4ac6d8.level) ?? null,
    ),
      _0x589946.setHoveredOutline(_0xc49ac9),
      _0x4ac6d8 || _0xc49ac9
        ? this._context["scene"].setCursor(_0x3f93a1.POINTER)
        : this._context["scene"].resetCursor());
  }
  _handleOutlinePointerLeave(_0x3faa65, _0x31933f, _0x46bbaa) {
    (_0x31933f.stopPropagation(),
      _0x46bbaa.setHoveredOutline(null),
      _0x46bbaa.setHoveredLevel(null),
      this._context["scene"].resetCursor());
  }
  _handleOutlinePointerDown(_0x2c4c34, _0x305f55, _0x6b2ace, _0x46b548) {
    let _0x264a28 = this._sheetSkeletonManagerService["getCurrentSkeleton"](),
      _0x258493 = this._context["unit"].getActiveSheet();
    if (!_0x264a28 || !_0x258493) return;
    (_0x305f55.stopPropagation(),
      _0x2c4c34.stopPropagation(),
      _0x2c4c34.preventDefault());
    let _0x77ce62 = this._getOutlineLevelLocalPoint(_0x2c4c34),
      _0x332250 = _0x6b2ace.hitTestLevelButton(_0x77ce62.x, _0x77ce62.y);
    if (_0x332250) {
      this._handleOutlineLevelButtonDown(
        _0x332250,
        _0x46b548,
        _0x258493.getSheetId(),
      );
      return;
    }
    let _0x33ee98 = this._getOutlineLocalPoint(_0x2c4c34, _0x264a28, _0x46b548),
      _0xb8d715 = _0x6b2ace.hitTestButton(_0x33ee98.x, _0x33ee98.y);
    if (_0xb8d715) {
      this._commandService["syncExecuteCommand"](_0x181b1f.id, {
        unitId: this._context["unit"].getUnitId(),
        subUnitId: _0x258493.getSheetId(),
        outlineId: _0xb8d715.id,
        collapsed: !_0xb8d715.collapsed,
      });
      return;
    }
    let _0x32a666 = _0x6b2ace.hitTestLine(_0x33ee98.x, _0x33ee98.y);
    _0x32a666 && this._handleOutlineLineDown(_0x32a666, _0x46b548, _0x258493);
  }
  _handleOutlineLineDown(_0x294e1b, _0x56de1b, _0x26f18c) {
    let _0x4b6663 = this._context["unit"].getUnitId(),
      _0x17688f = _0x26f18c.getSheetId(),
      _0x8db9b5 = W(
        this._sheetsOutlineModel["getOutlines"](_0x4b6663, _0x17688f),
        _0x4b6663,
        _0x17688f,
        _0x56de1b,
        { includeHiddenGroups: true },
      ).find((_0x59f50c) => _0x59f50c.id === _0x294e1b);
    _0x8db9b5 &&
      this._commandService["syncExecuteCommand"](
        _0x5ec5c6.id,
        mn(
          _0x4b6663,
          _0x17688f,
          _0x8db9b5,
          _0x26f18c.getRowCount(),
          _0x26f18c.getColumnCount(),
        ),
      );
  }
  _handleOutlineLevelButtonDown(_0xc9fb5d, _0x2c1afd, _0x3f0a7d) {
    let _0x25911f = this._context["unit"].getUnitId(),
      _0x2c2b7d = W(
        this._sheetsOutlineModel["getOutlines"](_0x25911f, _0x3f0a7d),
        _0x25911f,
        _0x3f0a7d,
        _0x2c1afd,
        { includeHiddenGroups: true },
      );
    for (let _0x196251 of _0x2c2b7d) {
      let _0x361c28 = Xt(_0x2c2b7d, _0xc9fb5d.level, _0x196251);
      _0x196251.collapsed !== _0x361c28 &&
        this._commandService["syncExecuteCommand"](_0x181b1f.id, {
          unitId: _0x25911f,
          subUnitId: _0x3f0a7d,
          outlineId: _0x196251.id,
          collapsed: _0x361c28,
        });
    }
  }
  _getOutlineLocalPoint(_0x5d7187, _0x4fb886, _0x4d5219) {
    let { scaleX: _0x46a7c4, scaleY: _0x321133 } =
        this._context["scene"].getAncestorScale(),
      _0x425991 = _0x527b2b(
        _0x5d7187.offsetX,
        _0x5d7187.offsetY,
        this._context["scene"],
        _0x4fb886,
      );
    return _0x4d5219 === _0x5e9900.ROW
      ? {
          x: _0x5d7187.offsetX / _0x46a7c4,
          y: _0x425991.y - _0x4fb886.columnHeaderHeightAndMarginTop,
        }
      : {
          x: _0x425991.x - _0x4fb886.rowHeaderWidthAndMarginLeft,
          y: _0x5d7187.offsetY / _0x321133,
        };
  }
  _getOutlineLevelLocalPoint(_0xa27391) {
    let { scaleX: _0x51aea6, scaleY: _0x513f31 } =
      this._context["scene"].getAncestorScale();
    return {
      x: _0xa27391.offsetX / _0x51aea6,
      y: _0xa27391.offsetY / _0x513f31,
    };
  }
};
Z = z(
  [
    R(1, _0x1094e7(_0x1bdc3f)),
    R(2, _0x1094e7(_0x49dffd)),
    R(3, _0x2813f3),
    R(4, _0x5c7296),
    R(5, _0x1094e7(_0x38b4d8)),
    R(6, _0x1094e7(_0x4c2934)),
  ],
  Z,
);
function fn(_0x4a1b88, _0x9d0c8e, _0x522fee, _0x3cbb3a, _0x2a4c55, _0x3abda0) {
  let _0x188779 = _0x3abda0 ?? _0x9d0c8e;
  if (
    typeof _0x4a1b88 != "number" ||
    _0x4a1b88 <= 0 ||
    (_0x3cbb3a > 0 && _0x4a1b88 > _0x522fee)
  )
    return _0x188779;
  if (_0x3cbb3a > 0 && _0x2a4c55 > 0) {
    if (_0x3abda0 != null && _0x4a1b88 === _0x3abda0 + _0x2a4c55)
      return _0x3abda0;
    if (_0x4a1b88 === _0x9d0c8e + _0x2a4c55) return _0x9d0c8e;
  }
  return _0x4a1b88;
}
function pn(_0x39b263, _0x24783b, _0x405061) {
  return !_0x39b263.some((_0x6d5476) =>
    _0x6d5476.axis !== _0x24783b || !_0x6d5476.collapsed
      ? false
      : _0x24783b === _0x5e9900.ROW
        ? _0x405061.startRow === _0x6d5476.start &&
          _0x405061.endRow === _0x6d5476.end
        : _0x405061.startColumn === _0x6d5476.start &&
          _0x405061.endColumn === _0x6d5476.end,
  );
}
function mn(_0x2b295e, _0x134685, _0x21fafe, _0x5aa76c, _0x2faa23) {
  if (_0x21fafe.axis === _0x5e9900.ROW) {
    let _0x1e13f9 = Q(_0x21fafe.start, _0x5aa76c),
      _0x2db519 = Q(_0x21fafe.end, _0x5aa76c),
      _0x65d734 = Math.max(0, _0x2faa23 - 1);
    return {
      unitId: _0x2b295e,
      subUnitId: _0x134685,
      selections: [
        {
          range: {
            startRow: _0x1e13f9,
            endRow: _0x2db519,
            startColumn: 0,
            endColumn: _0x65d734,
            rangeType: _0x879cd2.ROW,
          },
          primary: {
            startRow: _0x1e13f9,
            endRow: _0x2db519,
            startColumn: 0,
            endColumn: _0x65d734,
            actualRow: _0x1e13f9,
            actualColumn: 0,
            isMerged: false,
            isMergedMainCell: false,
          },
          style: null,
        },
      ],
    };
  }
  let _0x1a800b = Q(_0x21fafe.start, _0x2faa23),
    _0x5d3ae7 = Q(_0x21fafe.end, _0x2faa23),
    _0x51693e = Math.max(0, _0x5aa76c - 1);
  return {
    unitId: _0x2b295e,
    subUnitId: _0x134685,
    selections: [
      {
        range: {
          startRow: 0,
          endRow: _0x51693e,
          startColumn: _0x1a800b,
          endColumn: _0x5d3ae7,
          rangeType: _0x879cd2.COLUMN,
        },
        primary: {
          startRow: 0,
          endRow: _0x51693e,
          startColumn: _0x1a800b,
          endColumn: _0x5d3ae7,
          actualRow: 0,
          actualColumn: _0x1a800b,
          isMerged: false,
          isMergedMainCell: false,
        },
        style: null,
      },
    ],
  };
}
function Q(_0x3edde2, _0x47f9c0) {
  return Math.max(0, Math.min(Math.max(0, _0x47f9c0 - 1), _0x3edde2));
}
function hn(_0xf41d8e) {
  return _0xf41d8e === _0x1e4c4d.ROW ? _0x5e9900.ROW : _0x5e9900.COLUMN;
}
let $ = class extends _0x13ab7c {
  constructor(
    _0x239078 = Ut,
    _0x84a06a,
    _0x416c3e,
    _0xce1a4,
    _0x254575,
    _0xcb891,
  ) {
    (super(),
      (this._config = _0x239078),
      (this._injector = _0x84a06a),
      (this._commandService = _0x416c3e),
      (this._renderManagerService = _0xce1a4),
      (this._shortcutService = _0x254575),
      (this._configService = _0xcb891));
    let { menu: _0x4cd1b4, ..._0x2f5c68 } = _0x254169({}, Ut, this._config);
    (_0x4cd1b4 &&
      this._configService["setConfig"]("menu", _0x4cd1b4, { merge: true }),
      this._configService["setConfig"]("sheets-outline-ui.config", _0x2f5c68));
  }
  onStarting() {
    (this._injector["add"]([B]),
      this._injector["get"](B),
      [[V], [H], [U]].forEach((_0x576146) => this._injector["add"](_0x576146)),
      this._initRegisterCommand(),
      this._initRegisterShortcut(),
      this._injector["get"](V),
      this._injector["get"](H),
      this._injector["get"](U));
  }
  onReady() {
    this.disposeWithMe(
      this._renderManagerService["registerRenderModule"](
        _0x5ea1ec.UNIVER_SHEET,
        [Z],
      ),
    );
  }
  _initRegisterCommand() {
    [Ze, Qe, $e, tt, nt, rt, N, P].forEach((_0x1ff422) =>
      this.disposeWithMe(this._commandService["registerCommand"](_0x1ff422)),
    );
  }
  _initRegisterShortcut() {
    [Gt, Kt].forEach((_0x1d58fc) =>
      this.disposeWithMe(this._shortcutService["registerShortcut"](_0x1d58fc)),
    );
  }
};
(q($, "pluginName", _0xd8c352 + "_UI_PLUGIN"),
  q($, "packageName", Vt),
  q($, "version", Ht),
  q($, "type", _0x5ea1ec.UNIVER_SHEET),
  ($ = z(
    [
      _0x358fa2(_0xe638e2, _0x1481a2, _0x155166, _0x587e66, _0x1d44b4),
      R(1, _0x1094e7(_0x3e5c54)),
      R(2, _0x5c7296),
      R(3, _0x2813f3),
      R(4, _0x101a40),
      R(5, _0x384733),
    ],
    $,
  )));
export { Bt as SheetsOutlineUIMenuSchema, $ as UniverSheetsOutlineUIPlugin };
