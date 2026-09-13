Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
let e = require("@univerjs-pro/bases"),
  t = require("@univerjs-pro/bases-thread-comment"),
  n = require("@univerjs-pro/bases-ui"),
  r = require("@univerjs-pro/license"),
  i = require("@univerjs/core"),
  a = require("@univerjs/thread-comment-ui"),
  o = require("@univerjs/ui"),
  s = require("@univerjs/design"),
  c = require("@univerjs/icons"),
  l = require("react/jsx-runtime"),
  u = require("@univerjs/thread-comment"),
  d = require("rxjs"),
  f = require("@univerjs/protocol");
const p = "bases-thread-comment-ui.config",
  m = {};
var h = "@univerjs-pro/bases-thread-comment-ui",
  g = "1.0.0-insiders.20260907-70fc579";
const _ = "univer.base.thread-comment-panel",
  v = {
    id: "base.operation.open-comment-panel",
    type: i.CommandType["OPERATION"],
    handler(var_core_value_sig284F) {
      let var_core_value_sigE154 = var_core_value_sig284F.get(a.ThreadCommentPanelService);
      return var_core_value_sig284F.get(o.ISidebarService).open({
        header: {
          title: "bases-thread-comment-ui.openComments"
        },
        children: {
          label: _
        },
        width: 320,
        onClose: () => var_core_value_sigE154.setPanelVisible(false)
      }), var_core_value_sigE154.setPanelVisible(true), true;
    }
  };
function y() {
  let var_core_value_sig4632 = (0, o.useDependency)(i.ICommandService),
    var_core_value_sig12F2 = (0, o.useDependency)(i.LocaleService).t("bases-thread-comment-ui.openComments");
  return (0, l.jsx)(s.Tooltip, {
    title: var_core_value_sig12F2,
    placement: "top",
    children: (0, l.jsx)(s.Button, {
      "aria-label": var_core_value_sig12F2,
      className: "univer-size-8 univer-p-0",
      type: "button",
      variant: "text",
      onClick: () => var_core_value_sig4632.executeCommand(v.id),
      children: (0, l.jsx)(c.CommentIcon, {})
    })
  });
}
function b() {
  let var_core_value_sig2259 = (0, o.useDependency)(i.IUniverInstanceService),
    var_core_value_sig9E2F = (0, o.useDependency)(n.IBaseUIStateService),
    var_core_value_sigD082 = (0, o.useDependency)(a.ThreadCommentDraftService),
    var_core_value_sigDBB7 = (0, o.useDependency)(i.UserManagerService),
    var_core_value_sigD0A8 = var_core_value_sig2259.getCurrentUnitOfType(i.UniverInstanceType["UNIVER_BASE"]),
    var_core_value_sigF4B9 = (0, o.useObservable)(var_core_value_sigD082.draft$, var_core_value_sigD082.draft),
    var_core_value_sig5CEE = var_core_value_sig9E2F.state$["pipe"]((0, d.map)(var_core_value_sig1A0F => var_core_value_sig1A0F.activeTableId)),
    var_core_value_sigE92A = var_core_value_sigF4B9 && var_core_value_sigF4B9.unitId === (var_core_value_sigD0A8 == null ? undefined : var_core_value_sigD0A8.getUnitId()) ? {
      id: "",
      threadId: "",
      unitId: var_core_value_sigF4B9.unitId,
      subUnitId: var_core_value_sigF4B9.subUnitId,
      ref: (0, u.serializeThreadCommentAnchor)(var_core_value_sigF4B9.anchor),
      dT: "",
      personId: var_core_value_sigDBB7.getCurrentUser().userID,
      text: {
        dataStream: "\x0d\x0a"
      }
    } : null;
  return var_core_value_sigD0A8 instanceof i.BaseDataModel ? (0, l.jsx)(a.ThreadCommentPanel, {
    unitId: var_core_value_sigD0A8.getUnitId(),
    subUnitId$: var_core_value_sig5CEE,
    type: i.UniverInstanceType["UNIVER_BASE"],
    onAdd: () => undefined,
    disableAdd: true,
    getSubUnitName: var_core_value_sigFBA4 => {
      var var_core_value_sig4383;
      return ((var_core_value_sig4383 = var_core_value_sigD0A8.getSnapshot().tables[var_core_value_sigFBA4]) == null ? undefined : var_core_value_sig4383.name) ?? var_core_value_sigFBA4;
    },
    tempComment: var_core_value_sigE92A,
    onTempCommentClose: () => var_core_value_sigD082.cancel(),
    formatRef: var_core_value_sig186C => x(var_core_value_sig186C.ref, var_core_value_sigD0A8)
  }) : null;
}
function x(var_core_value_sig362B, var_core_value_sig5CA5) {
  let var_core_value_sigE90F = (0, u.deserializeThreadCommentAnchor)(var_core_value_sig362B);
  if ((var_core_value_sigE90F == null ? undefined : var_core_value_sigE90F.kind) !== u.ThreadCommentAnchorKind["BASE_RECORD"]) return var_core_value_sig362B;
  let var_core_value_sigEFD4 = var_core_value_sig5CA5.getSnapshot().tables[var_core_value_sigE90F.tableId],
    var_core_value_sig861B = var_core_value_sigEFD4 == null ? undefined : var_core_value_sigEFD4.fields[var_core_value_sigEFD4.primaryFieldId],
    var_core_value_sig5237 = var_core_value_sigEFD4 == null ? undefined : var_core_value_sigEFD4.records[var_core_value_sigE90F.recordId],
    var_core_value_sigBB00 = var_core_value_sig861B ? (var_core_value_sig5237 == null ? undefined : var_core_value_sig5237.values[var_core_value_sig861B.id]) ?? var_core_value_sig861B.defaultValue : null;
  return (var_core_value_sigBB00 == null ? "" : String(var_core_value_sigBB00).trim()) || "#" + var_core_value_sigE90F.recordId;
}
function S(var_core_value_sig7E54, var_core_value_sig9A8D) {
  return function (var_core_value_sigD955, var_core_value_sig48BD) {
    var_core_value_sig9A8D(var_core_value_sigD955, var_core_value_sig48BD, var_core_value_sig7E54);
  };
}
function C(var_core_value_sigC259, var_core_value_sig9C9F, var_core_value_sigFDEA, var_core_value_sig86D0) {
  var var_core_value_sig4CD2 = arguments.length,
    var_core_value_sig48CA = var_core_value_sig4CD2 < 3 ? var_core_value_sig9C9F : var_core_value_sig86D0 === null ? var_core_value_sig86D0 = Object.getOwnPropertyDescriptor(var_core_value_sig9C9F, var_core_value_sigFDEA) : var_core_value_sig86D0,
    var_core_value_sig50AF;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sig48CA = Reflect.decorate(var_core_value_sigC259, var_core_value_sig9C9F, var_core_value_sigFDEA, var_core_value_sig86D0);else {
    for (var var_core_value_sigA942 = var_core_value_sigC259.length - 1; var_core_value_sigA942 >= 0; var_core_value_sigA942--) (var_core_value_sig50AF = var_core_value_sigC259[var_core_value_sigA942]) && (var_core_value_sig48CA = (var_core_value_sig4CD2 < 3 ? var_core_value_sig50AF(var_core_value_sig48CA) : var_core_value_sig4CD2 > 3 ? var_core_value_sig50AF(var_core_value_sig9C9F, var_core_value_sigFDEA, var_core_value_sig48CA) : var_core_value_sig50AF(var_core_value_sig9C9F, var_core_value_sigFDEA)) || var_core_value_sig48CA);
  }
  return var_core_value_sig4CD2 > 3 && var_core_value_sig48CA && Object.defineProperty(var_core_value_sig9C9F, var_core_value_sigFDEA, var_core_value_sig48CA), var_core_value_sig48CA;
}
let w = class extends i.Disposable {
  constructor(var_core_value_sig429F) {
    super(), this._componentManager = var_core_value_sig429F, this._registerComponents();
  }
  _registerComponents() {
    this.disposeWithMe(this._componentManager["register"](_, b)), this.disposeWithMe(this._componentManager["register"](n.BASE_TOOLBAR_BEFORE_EXTRA_ACTIONS, y));
  }
};
w = C([S(0, (0, i.Inject)(o.ComponentManager))], w);
function T(var_core_value_sigA621, var_core_value_sigBBFF) {
  var_core_value_sigA621.open({
    header: {
      title: "bases-thread-comment-ui.addComment"
    },
    children: {
      label: _
    },
    width: 320,
    onClose: () => var_core_value_sigBBFF.setPanelVisible(false)
  }), var_core_value_sigBBFF.setPanelVisible(true);
}
let E = class extends i.Disposable {
  constructor(var_core_value_sigF62A, var_core_value_sig8178, var_core_value_sigE9ED, var_core_value_sigB577, var_core_value_sig9572, var_core_value_sigD873, var_core_value_sigA12B) {
    super(), this.disposeWithMe(var_core_value_sigF62A.registerCommand(v)), this.disposeWithMe(var_core_value_sig8178.register({
      id: "base-record-comment",
      label: "bases-thread-comment-ui.addComment",
      changed$: (0, d.merge)(var_core_value_sigE9ED.commentUpdate$, var_core_value_sig9572.activeCommentId$, var_core_value_sig9572.hoveredCommentId$),
      getBadgeCounts: ({
        unitId: var_core_value_sig8061,
        tableId: var_core_value_sig4D4C
      }) => {
        let var_core_value_sigC9E0 = new Map();
        return var_core_value_sigE9ED.query({
          unitIds: [var_core_value_sig8061],
          subUnitIds: [var_core_value_sig4D4C],
          anchorKinds: [u.ThreadCommentAnchorKind["BASE_RECORD"]],
          resolved: false
        }).forEach(({
          root: var_core_value_sig2AD0
        }) => {
          let var_core_value_sig3EEE = (0, u.deserializeThreadCommentAnchor)(var_core_value_sig2AD0.ref);
          (var_core_value_sig3EEE == null ? undefined : var_core_value_sig3EEE.kind) === u.ThreadCommentAnchorKind["BASE_RECORD"] && var_core_value_sig3EEE.tableId === var_core_value_sig4D4C && var_core_value_sigC9E0.set(var_core_value_sig3EEE.recordId, (var_core_value_sigC9E0.get(var_core_value_sig3EEE.recordId) ?? 0) + 1);
        }), var_core_value_sigC9E0;
      },
      getFocusedRecordId: ({
        unitId: var_core_value_sig76BA,
        tableId: var_core_value_sigFBFA
      }) => {
        for (let var_core_value_sigBC46 of [var_core_value_sig9572.hoveredCommentId, var_core_value_sig9572.activeCommentId]) {
          if ((var_core_value_sigBC46 == null ? undefined : var_core_value_sigBC46.unitId) !== var_core_value_sig76BA || var_core_value_sigBC46.subUnitId !== var_core_value_sigFBFA) continue;
          let var_core_value_sig7524 = var_core_value_sigE9ED.getComment(var_core_value_sig76BA, var_core_value_sigFBFA, var_core_value_sigBC46.commentId),
            var_core_value_sig2AD8 = var_core_value_sig7524 && (0, u.deserializeThreadCommentAnchor)(var_core_value_sig7524.ref);
          if ((var_core_value_sig2AD8 == null ? undefined : var_core_value_sig2AD8.kind) === u.ThreadCommentAnchorKind["BASE_RECORD"] && var_core_value_sig2AD8.tableId === var_core_value_sigFBFA) return var_core_value_sig2AD8.recordId;
        }
      },
      execute: ({
        unitId: var_core_value_sigF602,
        tableId: var_core_value_sig1BBD,
        recordId: var_core_value_sigF704,
        trigger: var_core_value_sig2BCF
      }) => {
        var var_core_value_sig0D69;
        let var_core_value_sig480E = var_core_value_sigE9ED.query({
            unitIds: [var_core_value_sigF602],
            subUnitIds: [var_core_value_sig1BBD],
            anchorKinds: [u.ThreadCommentAnchorKind["BASE_RECORD"]],
            resolved: false
          }).filter(({
            root: var_core_value_sig3D7D
          }) => {
            let var_core_value_sig27E5 = (0, u.deserializeThreadCommentAnchor)(var_core_value_sig3D7D.ref);
            return (var_core_value_sig27E5 == null ? undefined : var_core_value_sig27E5.kind) === u.ThreadCommentAnchorKind["BASE_RECORD"] && var_core_value_sig27E5.tableId === var_core_value_sig1BBD && var_core_value_sig27E5.recordId === var_core_value_sigF704;
          }),
          var_core_value_sig26DB = (var_core_value_sig0D69 = var_core_value_sig480E[var_core_value_sig480E.length - 1]) == null ? undefined : var_core_value_sig0D69.root;
        if (var_core_value_sig2BCF === "badge" && var_core_value_sig26DB) var_core_value_sigB577.cancel(), var_core_value_sig9572.setActiveComment({
          unitId: var_core_value_sigF602,
          subUnitId: var_core_value_sig1BBD,
          commentId: var_core_value_sig26DB.id
        });else {
          if (!(0, e.getBasePermissionValue)(var_core_value_sigD873, var_core_value_sigF602, var_core_value_sigF602, f.UnitAction["Comment"])) return;
          var_core_value_sig9572.setActiveComment(undefined), var_core_value_sigB577.place({
            unitId: var_core_value_sigF602,
            subUnitId: var_core_value_sig1BBD,
            anchor: {
              kind: u.ThreadCommentAnchorKind["BASE_RECORD"],
              tableId: var_core_value_sig1BBD,
              recordId: var_core_value_sigF704
            }
          });
        }
        T(var_core_value_sigA12B, var_core_value_sig9572);
      }
    }));
  }
};
E = C([S(0, i.ICommandService), S(1, n.IBaseRecordActionService), S(2, (0, i.Inject)(u.ThreadCommentModel)), S(3, (0, i.Inject)(a.ThreadCommentDraftService)), S(4, (0, i.Inject)(a.ThreadCommentPanelService)), S(5, i.IPermissionService), S(6, o.ISidebarService)], E);
function D(var_core_value_sig8889) {
  "@babel/helpers - typeof";

  return D = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sigF230) {
    return typeof var_core_value_sigF230;
  } : function (var_core_value_sig09B8) {
    return var_core_value_sig09B8 && typeof Symbol == "function" && var_core_value_sig09B8.constructor === Symbol && var_core_value_sig09B8 !== Symbol.prototype ? "symbol" : typeof var_core_value_sig09B8;
  }, D(var_core_value_sig8889);
}
function O(var_core_value_sig32F8, var_core_value_sig5B67) {
  if (D(var_core_value_sig32F8) != "object" || !var_core_value_sig32F8) return var_core_value_sig32F8;
  var var_core_value_sig1758 = var_core_value_sig32F8[Symbol.toPrimitive];
  if (var_core_value_sig1758 !== undefined) {
    var var_core_value_sig4805 = var_core_value_sig1758.call(var_core_value_sig32F8, var_core_value_sig5B67 || "default");
    if (D(var_core_value_sig4805) != "object") return var_core_value_sig4805;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sig5B67 === "string" ? String : Number)(var_core_value_sig32F8);
}
function k(var_core_value_sigE67E) {
  var var_core_value_sig2902 = O(var_core_value_sigE67E, "string");
  return D(var_core_value_sig2902) == "symbol" ? var_core_value_sig2902 : var_core_value_sig2902 + "";
}
function A(var_core_value_sig9989, var_core_value_sig698E, var_core_value_sig2809) {
  return (var_core_value_sig698E = k(var_core_value_sig698E)) in var_core_value_sig9989 ? Object.defineProperty(var_core_value_sig9989, var_core_value_sig698E, {
    value: var_core_value_sig2809,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sig9989[var_core_value_sig698E] = var_core_value_sig2809, var_core_value_sig9989;
}
const j = [[w], [E]];
let M = class extends i.Plugin {
  constructor(var_core_value_sig6F91 = m, var_core_value_sigF9C7, var_core_value_sig8895) {
    super(), this._config = var_core_value_sig6F91, this._injector = var_core_value_sigF9C7, this._configService = var_core_value_sig8895;
    let {
      ...var_core_value_sigC80B
    } = (0, i.merge)({}, m, this._config);
    this._configService["setConfig"](p, var_core_value_sigC80B);
  }
  onStarting() {
    j.forEach(var_core_value_sigF0F9 => {
      this._injector["add"](var_core_value_sigF0F9);
    }), this._injector["get"](w);
  }
  onReady() {
    this._injector["get"](E);
  }
};
A(M, "pluginName", "UNIVER_BASES_THREAD_COMMENT_UI_PLUGIN"), A(M, "packageName", h), A(M, "version", g), A(M, "type", i.UniverInstanceType["UNIVER_BASE"]), M = C([(0, i.DependentOn)(e.UniverBasesPlugin, t.UniverBasesThreadCommentPlugin, n.UniverBasesUIPlugin, r.UniverLicensePlugin, a.UniverThreadCommentUIPlugin), S(1, (0, i.Inject)(i.Injector)), S(2, i.IConfigService)], M), exports.BASES_THREAD_COMMENT_UI_PLUGIN_CONFIG_KEY = p, Object.defineProperty(exports, "UniverBasesThreadCommentUIPlugin", {
  enumerable: true,
  get: function () {
    return M;
  }
});
