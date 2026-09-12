import {
  UniverBasesPlugin as _0x417259,
  getBasePermissionValue as _0x3b54b9,
} from "@univerjs-pro/bases";
import { UniverBasesThreadCommentPlugin as _0x51140b } from "@univerjs-pro/bases-thread-comment";
import {
  BASE_TOOLBAR_BEFORE_EXTRA_ACTIONS as _0x3fb897,
  IBaseRecordActionService as _0x5b2ae1,
  IBaseUIStateService as _0x32d14f,
  UniverBasesUIPlugin as _0x15cfcb,
} from "@univerjs-pro/bases-ui";
import { UniverLicensePlugin as _0x1a16af } from "@univerjs-pro/license";
import {
  BaseDataModel as _0xdede5e,
  CommandType as _0x5e765f,
  DependentOn as _0x3fc40c,
  Disposable as _0xd24c7b,
  ICommandService as _0x16fab8,
  IConfigService as _0xed1742,
  IPermissionService as _0x10d07f,
  IUniverInstanceService as _0x5a3c81,
  Inject as _0x1589f9,
  Injector as _0x39d440,
  LocaleService as _0x3ef840,
  Plugin as _0x5ef78a,
  UniverInstanceType as _0x282882,
  UserManagerService as _0x33b15a,
  merge as _0x581129,
} from "@univerjs/core";
import {
  ThreadCommentDraftService as _0x29f4e0,
  ThreadCommentPanel as _0x2726f9,
  ThreadCommentPanelService as _0x45883c,
  UniverThreadCommentUIPlugin as _0x1ede2e,
} from "@univerjs/thread-comment-ui";
import {
  ComponentManager as _0xb97520,
  ISidebarService as _0x213dcf,
  useDependency as _0x5b20a5,
  useObservable as _0x1a8832,
} from "@univerjs/ui";
import { Button as _0xa63f1b, Tooltip as _0x2ade67 } from "@univerjs/design";
import { CommentIcon as _0x2a9ca5 } from "@univerjs/icons";
import { jsx as _0x1ae4e6 } from "react/jsx-runtime";
import {
  ThreadCommentAnchorKind as _0x50ec25,
  ThreadCommentModel as _0x1cae49,
  deserializeThreadCommentAnchor as _0x57cf51,
  serializeThreadCommentAnchor as _0x22eb02,
} from "@univerjs/thread-comment";
import { map as _0x21487c, merge as _0x4079e4 } from "rxjs";
import { UnitAction as _0x338908 } from "@univerjs/protocol";
const R = "bases-thread-comment-ui.config",
  z = {};
var B = "@univerjs-pro/bases-thread-comment-ui",
  V = "1.0.0-insiders.20260907-70fc579";
const H = "univer.base.thread-comment-panel",
  U = {
    id: "base.operation.open-comment-panel",
    type: _0x5e765f.OPERATION,
    handler(_0x165c66) {
      let _0x1445c8 = _0x165c66.get(_0x45883c);
      return (
        _0x165c66
          .get(_0x213dcf)
          .open({
            header: { title: "bases-thread-comment-ui.openComments" },
            children: { label: H },
            width: 320,
            onClose: () => _0x1445c8.setPanelVisible(false),
          }),
        _0x1445c8.setPanelVisible(true),
        true
      );
    },
  };
function W() {
  let _0x418025 = _0x5b20a5(_0x16fab8),
    _0x3ab30e = _0x5b20a5(_0x3ef840).t("bases-thread-comment-ui.openComments");
  return _0x1ae4e6(_0x2ade67, {
    title: _0x3ab30e,
    placement: "top",
    children: _0x1ae4e6(_0xa63f1b, {
      "aria-label": _0x3ab30e,
      className: "univer-size-8 univer-p-0",
      type: "button",
      variant: "text",
      onClick: () => _0x418025.executeCommand(U.id),
      children: _0x1ae4e6(_0x2a9ca5, {}),
    }),
  });
}
function G() {
  let _0x1292a3 = _0x5b20a5(_0x5a3c81),
    _0x33aaaf = _0x5b20a5(_0x32d14f),
    _0x10587d = _0x5b20a5(_0x29f4e0),
    _0x52482f = _0x5b20a5(_0x33b15a),
    _0x1af0d3 = _0x1292a3.getCurrentUnitOfType(_0x282882.UNIVER_BASE),
    _0x29f01c = _0x1a8832(_0x10587d.draft$, _0x10587d.draft),
    _0x5d9672 = _0x33aaaf.state$["pipe"](
      _0x21487c((_0x1dc74d) => _0x1dc74d.activeTableId),
    ),
    _0x4cec06 =
      _0x29f01c &&
      _0x29f01c.unitId ===
        (_0x1af0d3 == null ? undefined : _0x1af0d3.getUnitId())
        ? {
            id: "",
            threadId: "",
            unitId: _0x29f01c.unitId,
            subUnitId: _0x29f01c.subUnitId,
            ref: _0x22eb02(_0x29f01c.anchor),
            dT: "",
            personId: _0x52482f.getCurrentUser().userID,
            text: { dataStream: "\x0d\x0a" },
          }
        : null;
  return _0x1af0d3 instanceof _0xdede5e
    ? _0x1ae4e6(_0x2726f9, {
        unitId: _0x1af0d3.getUnitId(),
        subUnitId$: _0x5d9672,
        type: _0x282882.UNIVER_BASE,
        onAdd: () => undefined,
        disableAdd: true,
        getSubUnitName: (_0x4055ef) => {
          var _0x40f982;
          return (
            ((_0x40f982 = _0x1af0d3.getSnapshot().tables[_0x4055ef]) == null
              ? undefined
              : _0x40f982.name) ?? _0x4055ef
          );
        },
        tempComment: _0x4cec06,
        onTempCommentClose: () => _0x10587d.cancel(),
        formatRef: (_0x3123f9) => K(_0x3123f9.ref, _0x1af0d3),
      })
    : null;
}
function K(_0x12fb7c, _0xe99d) {
  let _0xfb8264 = _0x57cf51(_0x12fb7c);
  if (
    (_0xfb8264 == null ? undefined : _0xfb8264.kind) !== _0x50ec25.BASE_RECORD
  )
    return _0x12fb7c;
  let _0x35fd2a = _0xe99d.getSnapshot().tables[_0xfb8264.tableId],
    _0x2bfee3 =
      _0x35fd2a == null
        ? undefined
        : _0x35fd2a.fields[_0x35fd2a.primaryFieldId],
    _0x2ef620 =
      _0x35fd2a == null ? undefined : _0x35fd2a.records[_0xfb8264.recordId],
    _0x321d39 = _0x2bfee3
      ? ((_0x2ef620 == null ? undefined : _0x2ef620.values[_0x2bfee3.id]) ??
        _0x2bfee3.defaultValue)
      : null;
  return (
    (_0x321d39 == null ? "" : String(_0x321d39).trim()) ||
    "#" + _0xfb8264.recordId
  );
}
function q(_0x2e89df, _0xad6fa5) {
  return function (_0xbcb81b, _0x136295) {
    _0xad6fa5(_0xbcb81b, _0x136295, _0x2e89df);
  };
}
function J(_0x31c1d1, _0x103b43, _0x1ce603, _0x2b2f96) {
  var _0xd6cd1 = arguments.length,
    _0x3b15b1 =
      _0xd6cd1 < 3
        ? _0x103b43
        : _0x2b2f96 === null
          ? (_0x2b2f96 = Object.getOwnPropertyDescriptor(_0x103b43, _0x1ce603))
          : _0x2b2f96,
    _0x4c02a5;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x3b15b1 = Reflect.decorate(_0x31c1d1, _0x103b43, _0x1ce603, _0x2b2f96);
  else {
    for (var _0x44ae27 = _0x31c1d1.length - 1; _0x44ae27 >= 0; _0x44ae27--)
      (_0x4c02a5 = _0x31c1d1[_0x44ae27]) &&
        (_0x3b15b1 =
          (_0xd6cd1 < 3
            ? _0x4c02a5(_0x3b15b1)
            : _0xd6cd1 > 3
              ? _0x4c02a5(_0x103b43, _0x1ce603, _0x3b15b1)
              : _0x4c02a5(_0x103b43, _0x1ce603)) || _0x3b15b1);
  }
  return (
    _0xd6cd1 > 3 &&
      _0x3b15b1 &&
      Object.defineProperty(_0x103b43, _0x1ce603, _0x3b15b1),
    _0x3b15b1
  );
}
let Y = class extends _0xd24c7b {
  constructor(_0x3912a8) {
    (super(), (this._componentManager = _0x3912a8), this._registerComponents());
  }
  _registerComponents() {
    (this.disposeWithMe(this._componentManager["register"](H, G)),
      this.disposeWithMe(this._componentManager["register"](_0x3fb897, W)));
  }
};
Y = J([q(0, _0x1589f9(_0xb97520))], Y);
function ie(_0x5bcf81, _0x2c75aa) {
  (_0x5bcf81.open({
    header: { title: "bases-thread-comment-ui.addComment" },
    children: { label: H },
    width: 320,
    onClose: () => _0x2c75aa.setPanelVisible(false),
  }),
    _0x2c75aa.setPanelVisible(true));
}
let X = class extends _0xd24c7b {
  constructor(
    _0x34c9ff,
    _0x1ab1dc,
    _0x391d8b,
    _0x4e97f9,
    _0x27f570,
    _0x5315e1,
    _0x4aa206,
  ) {
    (super(),
      this.disposeWithMe(_0x34c9ff.registerCommand(U)),
      this.disposeWithMe(
        _0x1ab1dc.register({
          id: "base-record-comment",
          label: "bases-thread-comment-ui.addComment",
          changed$: _0x4079e4(
            _0x391d8b.commentUpdate$,
            _0x27f570.activeCommentId$,
            _0x27f570.hoveredCommentId$,
          ),
          getBadgeCounts: ({ unitId: _0x54d1ec, tableId: _0x230c42 }) => {
            let _0x2009da = new Map();
            return (
              _0x391d8b
                .query({
                  unitIds: [_0x54d1ec],
                  subUnitIds: [_0x230c42],
                  anchorKinds: [_0x50ec25.BASE_RECORD],
                  resolved: false,
                })
                .forEach(({ root: _0xd4d5b1 }) => {
                  let _0x229163 = _0x57cf51(_0xd4d5b1.ref);
                  (_0x229163 == null ? undefined : _0x229163.kind) ===
                    _0x50ec25.BASE_RECORD &&
                    _0x229163.tableId === _0x230c42 &&
                    _0x2009da.set(
                      _0x229163.recordId,
                      (_0x2009da.get(_0x229163.recordId) ?? 0) + 1,
                    );
                }),
              _0x2009da
            );
          },
          getFocusedRecordId: ({ unitId: _0x4fb012, tableId: _0x1347d1 }) => {
            for (let _0x4828bd of [
              _0x27f570.hoveredCommentId,
              _0x27f570.activeCommentId,
            ]) {
              if (
                (_0x4828bd == null ? undefined : _0x4828bd.unitId) !==
                  _0x4fb012 ||
                _0x4828bd.subUnitId !== _0x1347d1
              )
                continue;
              let _0x1f1707 = _0x391d8b.getComment(
                  _0x4fb012,
                  _0x1347d1,
                  _0x4828bd.commentId,
                ),
                _0x2abafc = _0x1f1707 && _0x57cf51(_0x1f1707.ref);
              if (
                (_0x2abafc == null ? undefined : _0x2abafc.kind) ===
                  _0x50ec25.BASE_RECORD &&
                _0x2abafc.tableId === _0x1347d1
              )
                return _0x2abafc.recordId;
            }
          },
          execute: ({
            unitId: _0x8ec86b,
            tableId: _0x12b712,
            recordId: _0x33c5b8,
            trigger: _0x284973,
          }) => {
            var _0x33c0cb;
            let _0x5e078a = _0x391d8b
                .query({
                  unitIds: [_0x8ec86b],
                  subUnitIds: [_0x12b712],
                  anchorKinds: [_0x50ec25.BASE_RECORD],
                  resolved: false,
                })
                .filter(({ root: _0x537afc }) => {
                  let _0x48e89d = _0x57cf51(_0x537afc.ref);
                  return (
                    (_0x48e89d == null ? undefined : _0x48e89d.kind) ===
                      _0x50ec25.BASE_RECORD &&
                    _0x48e89d.tableId === _0x12b712 &&
                    _0x48e89d.recordId === _0x33c5b8
                  );
                }),
              _0x18b29a =
                (_0x33c0cb = _0x5e078a[_0x5e078a.length - 1]) == null
                  ? undefined
                  : _0x33c0cb.root;
            if (_0x284973 === "badge" && _0x18b29a)
              (_0x4e97f9.cancel(),
                _0x27f570.setActiveComment({
                  unitId: _0x8ec86b,
                  subUnitId: _0x12b712,
                  commentId: _0x18b29a.id,
                }));
            else {
              if (
                !_0x3b54b9(_0x5315e1, _0x8ec86b, _0x8ec86b, _0x338908.Comment)
              )
                return;
              (_0x27f570.setActiveComment(undefined),
                _0x4e97f9.place({
                  unitId: _0x8ec86b,
                  subUnitId: _0x12b712,
                  anchor: {
                    kind: _0x50ec25.BASE_RECORD,
                    tableId: _0x12b712,
                    recordId: _0x33c5b8,
                  },
                }));
            }
            ie(_0x4aa206, _0x27f570);
          },
        }),
      ));
  }
};
X = J(
  [
    q(0, _0x16fab8),
    q(1, _0x5b2ae1),
    q(2, _0x1589f9(_0x1cae49)),
    q(3, _0x1589f9(_0x29f4e0)),
    q(4, _0x1589f9(_0x45883c)),
    q(5, _0x10d07f),
    q(6, _0x213dcf),
  ],
  X,
);
function Z(_0x561f9f) {
  "@babel/helpers - typeof";
  return (
    (Z =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x1cf338) {
            return typeof _0x1cf338;
          }
        : function (_0x1d8c9a) {
            return _0x1d8c9a &&
              typeof Symbol == "function" &&
              _0x1d8c9a.constructor === Symbol &&
              _0x1d8c9a !== Symbol.prototype
              ? "symbol"
              : typeof _0x1d8c9a;
          }),
    Z(_0x561f9f)
  );
}
function ae(_0x2ef3c9, _0x164ee0) {
  if (Z(_0x2ef3c9) != "object" || !_0x2ef3c9) return _0x2ef3c9;
  var _0x518ba7 = _0x2ef3c9[Symbol.toPrimitive];
  if (_0x518ba7 !== undefined) {
    var _0x5b25bd = _0x518ba7.call(_0x2ef3c9, _0x164ee0 || "default");
    if (Z(_0x5b25bd) != "object") return _0x5b25bd;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x164ee0 === "string" ? String : Number)(_0x2ef3c9);
}
function oe(_0x20b3ce) {
  var _0x3acf77 = ae(_0x20b3ce, "string");
  return Z(_0x3acf77) == "symbol" ? _0x3acf77 : _0x3acf77 + "";
}
function Q(_0x2a0932, _0x3a3e24, _0x3fffde) {
  return (
    (_0x3a3e24 = oe(_0x3a3e24)) in _0x2a0932
      ? Object.defineProperty(_0x2a0932, _0x3a3e24, {
          value: _0x3fffde,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x2a0932[_0x3a3e24] = _0x3fffde),
    _0x2a0932
  );
}
const se = [[Y], [X]];
let $ = class extends _0x5ef78a {
  constructor(_0x3eea0c = z, _0x7b0eb5, _0x188a4c) {
    (super(),
      (this._config = _0x3eea0c),
      (this._injector = _0x7b0eb5),
      (this._configService = _0x188a4c));
    let { ..._0x2b0815 } = _0x581129({}, z, this._config);
    this._configService["setConfig"](R, _0x2b0815);
  }
  onStarting() {
    (se.forEach((_0x4a2379) => {
      this._injector["add"](_0x4a2379);
    }),
      this._injector["get"](Y));
  }
  onReady() {
    this._injector["get"](X);
  }
};
(Q($, "pluginName", "UNIVER_BASES_THREAD_COMMENT_UI_PLUGIN"),
  Q($, "packageName", B),
  Q($, "version", V),
  Q($, "type", _0x282882.UNIVER_BASE),
  ($ = J(
    [
      _0x3fc40c(_0x417259, _0x51140b, _0x15cfcb, _0x1a16af, _0x1ede2e),
      q(1, _0x1589f9(_0x39d440)),
      q(2, _0xed1742),
    ],
    $,
  )));
export {
  R as BASES_THREAD_COMMENT_UI_PLUGIN_CONFIG_KEY,
  $ as UniverBasesThreadCommentUIPlugin,
};
