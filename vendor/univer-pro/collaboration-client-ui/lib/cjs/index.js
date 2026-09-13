Object["defineProperty"](exports, Symbol["toStringTag"], {
  value: "Module"
});
let e = require("@univerjs-pro/collaboration-client"),
  t = require("@univerjs/core"),
  n = require("@univerjs/ui"),
  r = require("rxjs"),
  i = require("rxjs/operators"),
  a = require("@univerjs/design"),
  o = require("@univerjs/icons"),
  s = require("react"),
  c = require("react/jsx-runtime"),
  l = require("@univerjs-pro/collaboration"),
  u = require("@univerjs-pro/license"),
  d = require("@univerjs/docs"),
  f = require("@univerjs/docs-ui"),
  p = require("@univerjs/engine-render"),
  m = require("@univerjs/network"),
  h = require("@univerjs/engine-formula"),
  g = require("@univerjs/sheets"),
  _ = require("@univerjs/sheets-ui"),
  v = require("@univerjs/protocol");
function ee(v809) {
  switch (v809) {
    case e["CollaborationStatus"]["OFFLINE"]:
      return {
        icon: (0x0, c["jsx"])(o["OffLineIcon"], {}),
        colorClass: "univer-text-red-500",
        i18nKey: "collaboration-client-ui.collabStatus.offline",
        tooltipKey: "collaboration-client-ui.collabClient.tooltip.reconnect",
        clickable: !0x0,
        indicator: "static"
      };
    case e["CollaborationStatus"]["CONFLICT"]:
      return {
        icon: (0x0, c["jsx"])(o["OffLineIcon"], {}),
        colorClass: "univer-text-orange-500",
        i18nKey: "collaboration-client-ui.collabStatus.conflict",
        clickable: !0x1,
        indicator: "static"
      };
    case e["CollaborationStatus"]["FETCH_MISS"]:
      return {
        icon: (0x0, c["jsx"])(o["LoadingMultiIcon"], {}),
        colorClass: "univer-text-blue-500",
        i18nKey: "collaboration-client-ui.collabStatus.fetchMiss",
        clickable: !0x1,
        indicator: "spin"
      };
    case e["CollaborationStatus"]["NOT_COLLAB"]:
      return {
        icon: (0x0, c["jsx"])(o["OnLineIcon"], {}),
        colorClass: "univer-text-gray-400",
        i18nKey: "collaboration-client-ui.collabStatus.notCollab",
        clickable: !0x1,
        indicator: "static"
      };
    case e["CollaborationStatus"]["AWAITING"]:
    case e["CollaborationStatus"]["AWAITING_WITH_PENDING"]:
      return {
        icon: (0x0, c["jsx"])(o["LoadingMultiIcon"], {}),
        colorClass: "univer-text-blue-500",
        i18nKey: "collaboration-client-ui.collabStatus.syncing",
        clickable: !0x1,
        indicator: "spin"
      };
    case e["CollaborationStatus"]["PENDING"]:
      return {
        icon: (0x0, c["jsx"])(o["LoadingMultiIcon"], {}),
        colorClass: "univer-text-blue-500",
        i18nKey: "collaboration-client-ui.collabStatus.syncing",
        clickable: !0x1,
        indicator: "spin"
      };
    case e["CollaborationStatus"]["SYNCED"]:
      return {
        icon: (0x0, c["jsx"])(o["OnLineIcon"], {}),
        colorClass: "univer-text-green-500",
        i18nKey: "collaboration-client-ui.collabStatus.synced",
        clickable: !0x1,
        indicator: "static"
      };
  }
}
function y(v810) {
  let {
      status$: v811
    } = v810,
    v812 = (0x0, n["useObservable"])(v811, e["CollaborationStatus"]["NOT_COLLAB"]),
    v813 = (0x0, n["useDependency"])(t["LocaleService"]),
    v814 = (0x0, n["useDependency"])(e["CollaborationSessionService"]),
    v815 = (0x0, s["useMemo"])(() => ee(v812), [v812]),
    v816 = v812 !== e["CollaborationStatus"]["OFFLINE"],
    v817 = v813["t"](v815["i18nKey"]),
    v818 = v815["tooltipKey"] ? v813["t"](v815["tooltipKey"]) : v817,
    v819 = (0x0, s["useCallback"])(() => {
      v816 || v814["reconnect"]();
    }, [v816, v814]),
    v820 = (0x0, s["useCallback"])(v355 => {
      !v816 && (v355["key"] === "Enter" || v355["key"] === "\x20") && (v355["preventDefault"](), v814["reconnect"]());
    }, [v816, v814]),
    v821 = (0x0, c["jsx"])("span", {
      className: (0x0, a["clsx"])("univer-flex\x20univer-items-center\x20univer-justify-center", "univer-text-xl\x20univer-transition-colors\x20univer-duration-200", v815["colorClass"], {
        "univer-animate-spin": v815["indicator"] === "spin",
        "univer-animate-pulse": v815["indicator"] === "pulse"
      }),
      "aria-hidden": "true",
      children: v815["icon"]
    }),
    v822 = (0x0, c["jsx"])("span", {
      className: (0x0, a["clsx"])("univer-flex univer-items-center univer-justify-center", "univer-h-8 univer-w-8 univer-rounded-lg", "univer-transition-all\x20univer-duration-200", "focus:univer-outline-none focus:univer-ring-2 focus:univer-ring-primary-500 focus:univer-ring-offset-2", "dark:focus:!univer-ring-offset-gray-800", {
        "univer-cursor-pointer\x20hover:univer-bg-gray-100\x20dark:hover:!univer-bg-gray-700": v815["clickable"],
        "univer-cursor-default": !v815["clickable"]
      }),
      children: v821
    });
  return v815["clickable"] ? (0x0, c["jsx"])(a["Tooltip"], {
    title: v818,
    placement: "bottom",
    children: (0x0, c["jsx"])("button", {
      type: "button",
      onClick: v819,
      onKeyDown: v820,
      className: (0x0, a["clsx"])("univer-inline-flex univer-items-center univer-justify-center", "univer-border-none univer-bg-transparent", "univer-m-0 univer-p-0", "univer-appearance-none"),
      "aria-label": v817 + "\x20-\x20" + v818,
      role: "status",
      "aria-live": "polite",
      "aria-atomic": "true",
      children: v822
    })
  }) : (0x0, c["jsx"])(a["Tooltip"], {
    title: v818,
    placement: "bottom",
    children: (0x0, c["jsx"])("div", {
      className: (0x0, a["clsx"])("univer-inline-flex univer-items-center univer-justify-center", "univer-border-none univer-bg-transparent", "univer-m-0 univer-p-0"),
      "aria-label": v817,
      role: "status",
      "aria-live": "polite",
      "aria-atomic": "true",
      children: v822
    })
  });
}
function b(v823) {
  "@babel/helpers - typeof";

  return b = typeof Symbol == "function" && typeof Symbol["iterator"] == ox171317(0x279) ? function (v356) {
    return typeof v356;
  } : function (v357) {
    const v358 = ox171317;
    return v357 && typeof Symbol == v358(0x311) && v357[v358(0x2e2)] === Symbol && v357 !== Symbol["prototype"] ? v358(0x279) : typeof v357;
  }, b(v823);
}
function te(v824, v825) {
  if (b(v824) != oxaf9947(0x14d) || !v824) return v824;
  var v826 = v824[Symbol[oxaf9947(0x3f0)]];
  if (v826 !== void 0x0) {
    var v827 = v826["call"](v824, v825 || oxaf9947(0x318));
    if (b(v827) != oxaf9947(0x14d)) return v827;
    throw TypeError(oxaf9947(0x394));
  }
  return (v825 === oxaf9947(0x13d) ? String : Number)(v824);
}
function ne(v828) {
  var v829 = te(v828, ox3d22d8(0x13d));
  return b(v829) == ox3d22d8(0x279) ? v829 : v829 + "";
}
function x(v830, v831, v832) {
  return (v831 = ne(v831)) in v830 ? Object["defineProperty"](v830, v831, {
    value: v832,
    enumerable: !0x0,
    configurable: !0x0,
    writable: !0x0
  }) : v830[v831] = v832, v830;
}
function S(v833, v834) {
  return function (v359, v360) {
    v834(v359, v360, v833);
  };
}
function C(v835, v836, v837, v838) {
  var v839 = arguments[ox25e7e4(0x172)],
    v840 = v839 < 0x3 ? v836 : v838 === null ? v838 = Object[ox25e7e4(0x185)](v836, v837) : v838,
    v841;
  if (typeof Reflect == ox25e7e4(0x14d) && typeof Reflect[ox25e7e4(0x13a)] == ox25e7e4(0x311)) v840 = Reflect[ox25e7e4(0x13a)](v835, v836, v837, v838);else {
    for (var v842 = v835[ox25e7e4(0x172)] - 0x1; v842 >= 0x0; v842--) (v841 = v835[v842]) && (v840 = (v839 < 0x3 ? v841(v840) : v839 > 0x3 ? v841(v836, v837, v840) : v841(v836, v837)) || v840);
  }
  return v839 > 0x3 && v840 && Object[ox25e7e4(0x3f2)](v836, v837, v840), v840;
}
let w = class extends t["Disposable"] {
  constructor(v361, v362, v363, v364, v365) {
    super(), this[ox44a0c7(0x1da)] = v361, this[ox44a0c7(0x214)] = v362, this[ox44a0c7(0x27f)] = v363, this[ox44a0c7(0x1a6)] = v364, this[ox44a0c7(0x3c1)] = v365, x(this, ox44a0c7(0x1fa), new r[ox44a0c7(0x18e)](e[ox44a0c7(0x335)]["NOT_COLLAB"])), x(this, ox44a0c7(0x245), new Map()), this[ox44a0c7(0x2b9)](), this[ox44a0c7(0x416)](), this[ox44a0c7(0x3f8)]();
  }
  ["dispose"]() {
    this["_presenceStatusRegistrations"][ox19afdb(0x3e6)](v106 => v106[ox19afdb(0x2ca)]()), this[ox19afdb(0x245)]["clear"](), this[ox19afdb(0x1fa)][ox19afdb(0x2c2)](), super[ox19afdb(0x2ca)]();
  }
  ["_initStatusListener"]() {
    this[ox4c4056(0x3de)]((0x0, r[ox4c4056(0x176)])(this["_univerInstanceService"][ox4c4056(0x170)], this[ox4c4056(0x1da)][ox4c4056(0x2fd)](t[ox4c4056(0x16b)][ox4c4056(0x410)]), this[ox4c4056(0x1da)][ox4c4056(0x2fd)](t[ox4c4056(0x16b)][ox4c4056(0x37d)]))["pipe"]((0x0, i[ox4c4056(0x1dc)])(() => re(this[ox4c4056(0x1da)])), (0x0, i[ox4c4056(0x3b3)])(), (0x0, r[ox4c4056(0x36e)])(v107 => v107 ? this[ox4c4056(0x27f)][ox4c4056(0x2be)](v107) : (0x0, r["of"])(null)), (0x0, r[ox4c4056(0x36e)])(v108 => v108 ? v108["status$"] : (0x0, r["of"])(e[ox4c4056(0x335)][ox4c4056(0x1fc)])))[ox4c4056(0x32a)](v109 => {
      const v110 = ox4c4056;
      this[v110(0x1fa)]["next"](v109);
    }));
  }
  ["_initStatusComponent"]() {
    this[ox5afa3e(0x3de)](this[ox5afa3e(0x1a6)]["registerComponent"](n[ox5afa3e(0x41d)]["HEADER_MENU"], () => (0x0, n[ox5afa3e(0x24a)])(T({
      status$: this[ox5afa3e(0x1fa)][ox5afa3e(0x3bd)]()
    }), this[ox5afa3e(0x214)])));
  }
  ["_initPresenceStatusComponents"]() {
    let v366 = this[ox5ad4a0(0x3c1)][ox5ad4a0(0x16f)][ox5ad4a0(0x32a)](v111 => {
      const v112 = ox5ad4a0;
      this[v112(0x2d7)](v111);
    });
    this[ox5ad4a0(0x3de)]((0x0, t[ox5ad4a0(0x1bd)])(() => v366[ox5ad4a0(0x207)]()));
  }
  ["_syncPresenceStatusComponents"](v367) {
    let v368 = new Map(v367["filter"](v113 => v113[ox4a9189(0x295)] != null)[ox4a9189(0x1dc)](v114 => [v114[ox4a9189(0x3e7)], v114]));
    this[ox4a9189(0x245)][ox4a9189(0x3e6)]((v115, v116) => {
      const v117 = ox4a9189;
      v368[v117(0x3b5)](v116) || (v115[v117(0x2ca)](), this[v117(0x245)][v117(0x382)](v116));
    }), v368[ox4a9189(0x3e6)]((v118, v119) => {
      const v120 = ox4a9189;
      this[v120(0x245)][v120(0x3b5)](v119) || this["_registerPresenceStatusComponent"](v118);
    });
  }
  ["_registerPresenceStatusComponent"](v369) {
    let v370 = v369[ox5eb65e(0x295)];
    if (!v370) return;
    let v371 = new t[ox5eb65e(0x320)](),
      v372 = new r[ox5eb65e(0x18e)](e[ox5eb65e(0x335)]["NOT_COLLAB"]);
    v371[ox5eb65e(0x1f3)]((0x0, t["toDisposable"])(() => v372[ox5eb65e(0x2c2)]())), v371["add"](this[ox5eb65e(0x1a6)][ox5eb65e(0x205)](v370, () => (0x0, n[ox5eb65e(0x24a)])(T({
      status$: v372["asObservable"]()
    }), this[ox5eb65e(0x214)])));
    let v373 = this[ox5eb65e(0x1da)]["getCurrentTypeOfUnit$"](v369["unitType"])[ox5eb65e(0x3df)]((0x0, i["map"])(v121 => (v121 == null ? void 0x0 : v121[ox5eb65e(0x24f)]()) ?? null), (0x0, i[ox5eb65e(0x3b3)])(), (0x0, r[ox5eb65e(0x36e)])(v122 => v122 ? this[ox5eb65e(0x27f)][ox5eb65e(0x2be)](v122) : (0x0, r["of"])(null)), (0x0, r["switchMap"])(v123 => (v123 == null ? void 0x0 : v123["status$"]) ?? (0x0, r["of"])(e["CollaborationStatus"][ox5eb65e(0x1fc)])))[ox5eb65e(0x32a)](v124 => v372["next"](v124));
    v371[ox5eb65e(0x1f3)]((0x0, t["toDisposable"])(() => v373["unsubscribe"]())), this[ox5eb65e(0x245)][ox5eb65e(0x1f9)](v369[ox5eb65e(0x3e7)], v371);
  }
};
w = C([S(0x0, t["IUniverInstanceService"]), S(0x1, (0x0, t["Inject"])(t["Injector"])), S(0x2, (0x0, t["Inject"])(e["CollaborationController"])), S(0x3, n["IUIPartsService"]), S(0x4, (0x0, t["Inject"])(n["IUnitPresenceUIAdapterRegistry"]))], w);
function re(v843) {
  let v844 = v843[ox4927b1(0x1e8)](),
    v845 = v844 == null ? void 0x0 : v844[ox4927b1(0x24f)]();
  if (v845 && !(0x0, t[ox4927b1(0x2ae)])(v845)) return v845;
  let v846 = v843["getCurrentUnitOfType"](t["UniverInstanceType"]["UNIVER_DOC"]),
    v847 = v846 == null ? void 0x0 : v846[ox4927b1(0x24f)]();
  if (v847 && !(0x0, t[ox4927b1(0x2ae)])(v847)) return v847;
  let v848 = v843[ox4927b1(0x3e5)](t[ox4927b1(0x16b)][ox4927b1(0x37d)]);
  if (v848) return v848[ox4927b1(0x24f)]();
  let v849 = v843[ox4927b1(0x209)](t["UniverInstanceType"][ox4927b1(0x410)])[ox4927b1(0x2ab)](v374 => !(0x0, t[ox4927b1(0x2ae)])(v374[ox4927b1(0x24f)]()));
  return v849 ? v849[ox4927b1(0x24f)]() : null;
}
function T(v850) {
  let {
    status$: v851
  } = v850;
  return function () {
    return (0x0, c[ox2ac019(0x1cc)])(y, {
      status$: v851
    });
  };
}
var ie = "@univerjs-pro/collaboration-client-ui",
  ae = "1.0.0-insiders.20260907-70fc579";
const E = {
    id: "collaboration-client-ui.operation.update-remote-unit-presence",
    type: t["CommandType"]["OPERATION"],
    handler: (v852, v853) => {
      let v854 = v852["get"](n[oxaaab27(0x339)])[oxaaab27(0x330)](v853[oxaaab27(0x3e7)]);
      if (!v854) return !0x1;
      switch (v853["update"]["type"]) {
        case "set":
          return v854["setRemotePresence"](v853[oxaaab27(0x1c7)][oxaaab27(0x3e4)]), !0x0;
        case oxaaab27(0x375):
          return v854["removeRemotePresence"](v853[oxaaab27(0x1c7)][oxaaab27(0x1d6)], v853[oxaaab27(0x1c7)][oxaaab27(0x3a0)]), !0x0;
        case "clear":
          return v854[oxaaab27(0x2c7)](v853[oxaaab27(0x1c7)][oxaaab27(0x1d6)]), !0x0;
        default:
          return !0x1;
      }
    }
  },
  oe = {};
let D = class extends t["RxDisposable"] {
  constructor(v375, v376) {
    super(), this[ox34fa5f(0x322)] = v375, this[ox34fa5f(0x1f4)] = v376, this[ox34fa5f(0x2e6)]();
  }
  ["_init"]() {
    let v377 = this;
    this["disposeWithMe"](this[ox5e3cbd(0x322)][ox5e3cbd(0x20e)]({
      onBeforePasteImage: async v125 => {
        const v126 = ox5e3cbd;
        let v127 = await v377[v126(0x1f4)][v126(0x19d)](v125);
        return v127 ? {
          source: v127["source"],
          imageSourceType: v127["imageSourceType"]
        } : null;
      }
    }));
  }
};
D = C([S(0x0, f["IDocClipboardService"]), S(0x1, t["IImageIoService"])], D);
const se = ["purple.300", "jiqing.500", "green.600", "red.300", "blue.400", "yellow.400"];
var O = class extends t["Disposable"] {
  constructor(...v378) {
    super(...v378), x(this, ox556d74(0x3cd), new Map()), x(this, ox556d74(0x213), 0x0);
  }
  ["assignAColorForMemberID"](v379) {
    if (this[ox419406(0x3cd)][ox419406(0x3b5)](v379)) return this[ox419406(0x3cd)][ox419406(0x330)](v379);
    let v380 = se[this[ox419406(0x213)]];
    return this[ox419406(0x213)] = (this[ox419406(0x213)] + 0x1) % se[ox419406(0x172)], this["_assignedColors"][ox419406(0x1f9)](v379, v380), v380;
  }
};
function ce(v855) {
  let v856 = "";
  for (let v381 of v855) {
    let {
      startOffset: v128,
      endOffset: v129,
      isActive: v130,
      rangeType: v131,
      segmentId: v132,
      segmentPage: v133
    } = v381;
    v856[ox43b652(0x172)] && (v856 += ","), v856 += v128 + ":" + v129 + ":" + (v130 ? "1" : "0") + ":" + v131 + ":" + v132 + ":" + v133;
  }
  return v856;
}
function le(v857) {
  let v858 = v857[ox74c5a(0x34c)](","),
    v859 = [];
  for (let v382 of v858) {
    let [v134, v135, v136, v137, v138, v139] = v382[ox74c5a(0x34c)](":");
    v859[ox74c5a(0x365)]({
      startOffset: Number(v134),
      endOffset: Number(v135),
      collapsed: v134 === v135,
      isActive: v136 === "1",
      rangeType: v137 === t[ox74c5a(0x3a5)][ox74c5a(0x3b4)] ? t[ox74c5a(0x3a5)][ox74c5a(0x3b4)] : t[ox74c5a(0x3a5)]["RECT"],
      segmentId: typeof v138 == ox74c5a(0x13d) ? String(v138) : "",
      segmentPage: Number(v139 ?? -0x1)
    });
  }
  return v859["some"](v383 => v383[ox74c5a(0x165)]) || (v859[0x0][ox74c5a(0x165)] = !0x0), v859;
}
var k = class extends t["RxDisposable"] {
  constructor(...v384) {
    super(...v384), x(this, ox2b4ce8(0x314), new r[ox2b4ce8(0x18e)](null)), x(this, "collabCursorState$", this[ox2b4ce8(0x314)][ox2b4ce8(0x3bd)]());
  }
  ["syncEditingCollabCursor"](v385) {
    let {
        unitID: v386,
        memberID: v387,
        textRanges: v388
      } = v385,
      v389 = ce(v388);
    if (v389 === "") return;
    let v390 = {
      unitID: v386,
      memberID: v387,
      selection: v389
    };
    this["_collabCursorState$"][ox34e252(0x2f8)](v390);
  }
};
let A = class extends t["RxDisposable"] {
  get ["cursorInfo"]() {
    return this[ox4d3e01(0x294)][ox4d3e01(0x26d)]();
  }
  get ["roomMembers"]() {
    return this[ox38461b(0x2a7)][ox38461b(0x26d)]();
  }
  constructor(v391, v392, v393, v394, v395, v396, v397, v398, v399) {
    super(), this[ox2e176b(0x346)] = v391, this[ox2e176b(0x1ab)] = v392, this[ox2e176b(0x214)] = v393, this[ox2e176b(0x256)] = v394, this[ox2e176b(0x145)] = v395, this[ox2e176b(0x3ae)] = v396, this[ox2e176b(0x421)] = v397, this["_univerInstanceService"] = v398, this["_commandService"] = v399, x(this, ox2e176b(0x350), !0x1), x(this, ox2e176b(0x2e6), !0x1), x(this, ox2e176b(0x294), new r[ox2e176b(0x18e)](new Map())), x(this, "cursorInfo$", this["_cursorInfo$"][ox2e176b(0x3bd)]()), x(this, ox2e176b(0x2a7), new r[ox2e176b(0x18e)]([])), x(this, "roomMembers$", this[ox2e176b(0x2a7)]["pipe"]((0x0, r["debounceTime"])(0x12c))), x(this, ox2e176b(0x192), (0x0, t[ox2e176b(0x2aa)])(v140 => {
      const v141 = ox2e176b;
      let v142 = {
        eventID: l[v141(0x14e)][v141(0x3fa)],
        data: {
          unitID: this[v141(0x346)],
          memberID: this[v141(0x1ab)][v141(0x35b)](),
          selection: ce(v140)
        }
      };
      this["_session"][v141(0x157)](v142, this[v141(0x346)]);
    }, 0x64));
  }
  ["dispose"]() {
    super[ox359dd1(0x2ca)](), this[ox359dd1(0x294)][ox359dd1(0x2f8)](new Map()), this[ox359dd1(0x294)][ox359dd1(0x2c2)](), this[ox359dd1(0x2a7)][ox359dd1(0x2f8)]([]), this[ox359dd1(0x2a7)][ox359dd1(0x2c2)]();
  }
  ["init"]() {
    this[ox1f2f78(0x2e6)] || (this[ox1f2f78(0x2e6)] = !0x0, this["_session"][ox1f2f78(0x313)][ox1f2f78(0x3df)]((0x0, r["takeUntil"])(this[ox1f2f78(0x305)]))["subscribe"](v143 => {
      const v144 = ox1f2f78;
      v143 === e["SessionStatus"]["ONLINE"] ? this[v144(0x267)]() : this[v144(0x14a)]();
    }), this["_session"]["event$"]["pipe"]((0x0, r[ox1f2f78(0x3d0)])(this["dispose$"]))["subscribe"](v145 => {
      const v146 = ox1f2f78;
      let v147 = v145["eventID"];
      v147 === l[v146(0x14e)][v146(0x3fa)] && this[v146(0x190)](v145), v147 === l[v146(0x14e)][v146(0x1fb)] && this["_onCursorDelete"](v145);
    }), this[ox1f2f78(0x3de)](this[ox1f2f78(0x3fb)]["onCommandExecuted"](v148 => {
      const v149 = ox1f2f78;
      let v150 = v148[v149(0x351)];
      v150 != null && this["_online"] && v148["id"] === d["SetTextSelectionsOperation"]["id"] && v150[v149(0x1d6)] === this[v149(0x346)] && v150[v149(0x1cb)] === !0x1 && v150[v149(0x36a)][v149(0x172)] > 0x0 && this[v149(0x192)](v150["ranges"]);
    })), this[ox1f2f78(0x3ae)][ox1f2f78(0x371)][ox1f2f78(0x3df)]((0x0, r[ox1f2f78(0x3d0)])(this[ox1f2f78(0x305)]))["subscribe"](v151 => {
      const v152 = ox1f2f78;
      if ((v151 == null ? void 0x0 : v151[v152(0x346)]) !== this[v152(0x346)]) return;
      let v153 = {
        eventID: l[v152(0x14e)][v152(0x3fa)],
        data: v151
      };
      this[v152(0x190)](v153);
    }), this["disposeWithMe"](this[ox1f2f78(0x3fb)]["onCommandExecuted"](v154 => {
      const v155 = ox1f2f78;
      if (v154[v155(0x351)] == null) return;
      let v156 = v154["params"];
      if (v154["id"] !== d[v155(0x219)]["id"] || v156[v155(0x1d6)] !== this[v155(0x346)]) return;
      let v157 = {
          id: v155(0x271),
          params: v156
        },
        v158 = this["cursorInfo"];
      for (let [v27, v28] of v158) {
        let v12 = {
            id: v155(0x271),
            params: {
              unitId: this[v155(0x346)],
              actions: null,
              textRanges: v28["ranges"]
            }
          },
          v13 = this[v155(0x421)][v155(0x269)](v157, v12, !0x1);
        if ((0x0, l[v155(0x14b)])(v13)) throw v13["error"];
        v158[v155(0x1f9)](v27, {
          ...v28,
          ranges: v13[v155(0x270)][v155(0x351)]["textRanges"]
        });
      }
      queueMicrotask(() => {
        const v29 = v155;
        this["_cursorInfo$"][v29(0x2f8)](v158);
      });
    })));
  }
  ["_onCursorUpdate"](v400) {
    var v401;
    let {
        memberID: v402,
        selection: v403
      } = v400[ox57e86b(0x1f7)],
      v404 = le(v403),
      v405 = ((v401 = this["_memberService"][ox57e86b(0x41f)](this[ox57e86b(0x346)], v402)) == null ? void 0x0 : v401[ox57e86b(0x25b)]) ?? ox57e86b(0x2eb),
      v406 = {
        color: this[ox57e86b(0x256)][ox57e86b(0x3a3)](v402),
        name: v405,
        ranges: v404
      },
      v407 = this["cursorInfo"];
    v407[ox57e86b(0x1f9)](v402, v406), this[ox57e86b(0x294)][ox57e86b(0x2f8)](v407);
  }
  ["_onCursorDelete"](v408) {
    let {
        memberID: v409
      } = v408["data"],
      v410 = this[ox23859c(0x2ef)];
    v410["delete"](v409), this[ox23859c(0x294)][ox23859c(0x2f8)](v410);
  }
  ["_toggleOnline"]() {
    var v411;
    if (this[ox27da42(0x350)] = !0x0, ((v411 = this[ox27da42(0x1da)][ox27da42(0x1e8)]()) == null ? void 0x0 : v411[ox27da42(0x24f)]()) !== this[ox27da42(0x346)]) return;
    let v412 = this[ox27da42(0x214)]["get"](d[ox27da42(0x211)])[ox27da42(0x39d)]();
    Array["isArray"](v412) && v412["length"] > 0x0 && this[ox27da42(0x192)](v412);
  }
  ["_toggleOffline"]() {
    this[ox2c5fb5(0x350)] = !0x1;
  }
};
A = C([S(0x2, (0x0, t["Inject"])(t["Injector"])), S(0x3, (0x0, t["Inject"])(O)), S(0x4, (0x0, t["Inject"])(e["MemberService"])), S(0x5, (0x0, t["Inject"])(k)), S(0x6, l["ITransformService"]), S(0x7, t["IUniverInstanceService"]), S(0x8, t["ICommandService"])], A);
const ue = () => {
  let v860 = [],
    v861 = !0x1;
  return v413 => {
    v860[ox382b6d(0x365)](v413), v861 || (v861 = !0x0, setTimeout(() => {
      const v159 = ox382b6d;
      v860[v159(0x3e6)](v30 => v30()), v860 = [], v861 = !0x1;
    }));
  };
};
let j = class extends t["RxDisposable"] {
  get ["cursorInfo"]() {
    return this["_cursorInfo$"]["getValue"]();
  }
  get ["roomMembers"]() {
    return this[ox2c9b6e(0x2a7)][ox2c9b6e(0x26d)]();
  }
  constructor(v414, v415, v416, v417, v418, v419, v420, v421) {
    super(), this["unitID"] = v414, this[ox3ead35(0x1ab)] = v415, this[ox3ead35(0x214)] = v416, this[ox3ead35(0x256)] = v417, this[ox3ead35(0x145)] = v418, this["_univerInstanceService"] = v419, this[ox3ead35(0x3fb)] = v420, this["_refRangeService"] = v421, x(this, ox3ead35(0x350), !0x1), x(this, ox3ead35(0x2e6), !0x1), x(this, ox3ead35(0x294), new r[ox3ead35(0x18e)](new Map())), x(this, ox3ead35(0x389), this[ox3ead35(0x294)][ox3ead35(0x3bd)]()), x(this, ox3ead35(0x2a7), new r["BehaviorSubject"]([])), x(this, ox3ead35(0x2c8), this[ox3ead35(0x2a7)]["pipe"]((0x0, r[ox3ead35(0x2af)])(0x12c))), x(this, ox3ead35(0x192), (0x0, t[ox3ead35(0x2aa)])((v160, v161) => {
      const v162 = ox3ead35;
      let v163 = {
        eventID: l[v162(0x14e)][v162(0x3fa)],
        data: {
          unitID: this[v162(0x346)],
          memberID: this[v162(0x1ab)][v162(0x35b)](),
          selection: (0x0, h[v162(0x2ff)])(v160, v161["range"])
        }
      };
      this[v162(0x1ab)][v162(0x157)](v163, this[v162(0x346)]);
    }, 0x64));
  }
  ["dispose"]() {
    super[ox3b5815(0x2ca)](), this[ox3b5815(0x294)][ox3b5815(0x2f8)](new Map()), this[ox3b5815(0x294)][ox3b5815(0x2c2)](), this[ox3b5815(0x2a7)]["next"]([]), this[ox3b5815(0x2a7)][ox3b5815(0x2c2)]();
  }
  ["init"]() {
    this[ox21442d(0x2e6)] || (this[ox21442d(0x2e6)] = !0x0, this["_session"][ox21442d(0x313)]["pipe"]((0x0, r[ox21442d(0x3d0)])(this[ox21442d(0x305)]))[ox21442d(0x32a)](v164 => {
      const v165 = ox21442d;
      v164 === e[v165(0x2fb)][v165(0x175)] ? this[v165(0x267)]() : this[v165(0x14a)]();
    }), this[ox21442d(0x1ab)][ox21442d(0x405)][ox21442d(0x3df)]((0x0, r["takeUntil"])(this[ox21442d(0x305)]))["subscribe"](v166 => {
      const v167 = ox21442d;
      let v168 = v166["eventID"];
      v168 === l["CollaborationEvent"][v167(0x3fa)] && this[v167(0x190)](v166), v168 === l[v167(0x14e)][v167(0x1fb)] && this["_onCursorDelete"](v166);
    }), this[ox21442d(0x1ac)](), this["disposeWithMe"](this[ox21442d(0x3fb)][ox21442d(0x417)](v169 => {
      const v170 = ox21442d;
      if (this[v170(0x350)] && v169["id"] === g["SetSelectionsOperation"]["id"] && v169[v170(0x351)]["unitId"] === this[v170(0x346)]) {
        let v31 = v169[v170(0x351)];
        this["_updateLocalCursor"](v31[v170(0x338)], v31["selections"][0x0]);
      }
    })));
  }
  ["_onCursorUpdate"](v422) {
    var v423;
    let {
        memberID: v424,
        selection: v425
      } = v422["data"],
      {
        sheetName: v426,
        range: v427
      } = (0x0, h[ox27e9d3(0x36d)])(v425),
      v428 = {
        name: ((v423 = this[ox27e9d3(0x145)]["getMember"](this[ox27e9d3(0x346)], v424)) == null ? void 0x0 : v423[ox27e9d3(0x25b)]) ?? ox27e9d3(0x2eb),
        range: this[ox27e9d3(0x413)](v426, v427),
        sheetID: v426,
        color: this[ox27e9d3(0x256)][ox27e9d3(0x3a3)](v424),
        selection: v425
      },
      v429 = this[ox27e9d3(0x2ef)];
    v429[ox27e9d3(0x1f9)](v424, v428), this[ox27e9d3(0x294)]["next"](v429);
  }
  ["_onCursorDelete"](v430) {
    let {
        memberID: v431
      } = v430[ox31b358(0x1f7)],
      v432 = this["cursorInfo"];
    v432[ox31b358(0x382)](v431), this[ox31b358(0x294)]["next"](v432);
  }
  ["_getMergeRange"](v433, v434) {
    var v435;
    let v436 = (v435 = this[ox39588b(0x1da)][ox39588b(0x2fc)](this["unitID"], t[ox39588b(0x16b)][ox39588b(0x37d)])) == null || (v435 = v435[ox39588b(0x193)](v433)) == null ? void 0x0 : v435[ox39588b(0x24c)]();
    return (v436 == null ? void 0x0 : v436["find"](v171 => t["Rectangle"][ox39588b(0x1a2)](v171, v434))) || v434;
  }
  ["_onRefRangeChange"]() {
    let v437 = new t[ox108b28(0x320)](),
      v438 = ue(),
      v439 = () => {
        const v172 = ox108b28;
        v437[v172(0x2ca)]();
        let v173 = (v32, v33, v34, v35) => {
          const v36 = v172;
          let v37 = [];
          switch (v32["id"]) {
            case g[v36(0x387)][v36(0x419)]:
              v37 = (0x0, g[v36(0x33c)])(v32, v35);
              break;
            case g[v36(0x387)][v36(0x173)]:
              v37 = (0x0, g[v36(0x244)])(v32, v35);
              break;
            case g[v36(0x387)][v36(0x1f1)]:
              v37 = (0x0, g[v36(0x2a6)])(v32, v35);
              break;
            case g[v36(0x387)]["InsertRangeMoveDownCommandId"]:
              v37 = (0x0, g[v36(0x35f)])(v32, v35);
              break;
            case g[v36(0x387)][v36(0x423)]:
              v37 = (0x0, g[v36(0x355)])(v32, v35);
              break;
            case g["EffectRefRangId"][v36(0x3c8)]:
              v37 = (0x0, g["handleInsertRow"])(v32, v35);
              break;
            case g["EffectRefRangId"][v36(0x139)]:
              v37 = (0x0, g[v36(0x18d)])(v32, v35);
              break;
            case g["EffectRefRangId"][v36(0x240)]:
              v37 = (0x0, g["handleIRemoveCol"])(v32, v35);
              break;
            case g["EffectRefRangId"][v36(0x391)]:
              v37 = (0x0, g[v36(0x366)])(v32, v35);
              break;
          }
          let v38 = (0x0, g[v36(0x3c9)])(v37, v35),
            v39 = this["cursorInfo"]["get"](v33);
          if (v39 && v38) {
            let v14 = {
              ...v39,
              range: v38
            };
            this[v36(0x2ef)][v36(0x1f9)](v33, v14), v438(() => {
              const v5 = v36;
              let v6 = this["_refRangeService"][v5(0x2c9)](v38, v1 => (v6[v5(0x2ca)](), v173(v1, v33, v34, v38)));
              v437[v5(0x1f3)](v6);
            });
          }
          return {
            redos: [],
            undos: []
          };
        };
        this[v172(0x2ef)][v172(0x3e6)]((v40, v41) => {
          const v42 = v172;
          let {
              range: v43,
              sheetID: v44
            } = v40,
            v45 = this[v42(0x356)][v42(0x2c9)](v43, v15 => (v45[v42(0x2ca)](), v173(v15, v41, v44, v43)));
          v437[v42(0x1f3)](v45);
        });
      };
    this[ox108b28(0x3de)]((0x0, t[ox108b28(0x1bd)])(this[ox108b28(0x294)]["subscribe"](() => {
      v439();
    })));
  }
  ["_toggleOnline"]() {
    var v440, v441;
    if (this[ox5d72e1(0x350)] = !0x0, ((v440 = this["_univerInstanceService"][ox5d72e1(0x1e8)]()) == null ? void 0x0 : v440[ox5d72e1(0x24f)]()) !== this[ox5d72e1(0x346)]) return;
    let v442 = (v441 = this[ox5d72e1(0x214)][ox5d72e1(0x330)](g["SheetsSelectionsService"])["getCurrentSelections"]()) == null ? void 0x0 : v441[0x0],
      v443 = this[ox5d72e1(0x1da)]["getCurrentUnitOfType"](t[ox5d72e1(0x16b)][ox5d72e1(0x37d)])[ox5d72e1(0x2d4)]();
    v442 && v443 && this[ox5d72e1(0x192)](v443["getSheetId"](), v442);
  }
  ["_toggleOffline"]() {
    this[ox4737fb(0x350)] = !0x1;
  }
};
j = C([S(0x2, (0x0, t["Inject"])(t["Injector"])), S(0x3, (0x0, t["Inject"])(O)), S(0x4, (0x0, t["Inject"])(e["MemberService"])), S(0x5, t["IUniverInstanceService"]), S(0x6, t["ICommandService"]), S(0x7, (0x0, t["Inject"])(g["RefRangeService"]))], j);
let M = class extends t["RxDisposable"] {
  constructor(v444, v445, v446) {
    super(), this[ox5705d2(0x1da)] = v444, this[ox5705d2(0x214)] = v445, this[ox5705d2(0x1c1)] = v446, x(this, ox5705d2(0x2f3), new Map()), x(this, "_entityInit$", new r[ox5705d2(0x1b3)]()), this[ox5705d2(0x2e6)]();
  }
  ["dispose"]() {
    super[ox364469(0x2ca)](), this[ox364469(0x289)][ox364469(0x2c2)](), this["_entities"][ox364469(0x3e6)](v174 => v174[ox364469(0x2ca)]());
  }
  ["getCollabCursors$"](v447) {
    let v448 = this[oxd951f0(0x2f3)][oxd951f0(0x330)](v447);
    return v448 ? v448[oxd951f0(0x389)] : this[oxd951f0(0x289)][oxd951f0(0x3df)]((0x0, r[oxd951f0(0x1b7)])(v175 => v175[oxd951f0(0x346)] === v447), (0x0, r[oxd951f0(0x36e)])(v176 => v176[oxd951f0(0x389)]));
  }
  ["_init"]() {
    this[ox223704(0x1da)][ox223704(0x1c9)](t[ox223704(0x16b)][ox223704(0x37d)])[ox223704(0x3df)]((0x0, r[ox223704(0x3d0)])(this["dispose$"]))["subscribe"](async v177 => {
      const v178 = ox223704;
      let v179 = v177[v178(0x38c)][v178(0x24f)](),
        v180 = await this[v178(0x397)](v179);
      this["_entityInit$"]["next"](v180), this[v178(0x2f3)][v178(0x1f9)](v179, v180);
    }), this[ox223704(0x1da)][ox223704(0x1c9)](t[ox223704(0x16b)][ox223704(0x410)])[ox223704(0x3df)]((0x0, r[ox223704(0x3d0)])(this["dispose$"]))[ox223704(0x3df)]((0x0, r[ox223704(0x1b7)])(v181 => !v181[ox223704(0x38c)][ox223704(0x24f)]()["startsWith"]("__")))[ox223704(0x32a)](async v182 => {
      const v183 = ox223704;
      let {
          unit: v184
        } = v182,
        v185 = v184[v183(0x24f)](),
        v186 = await this["_startDocCollabCursor"](v185);
      this[v183(0x289)]["next"](v186), this[v183(0x2f3)]["set"](v185, v186);
    }), (0x0, r[ox223704(0x176)])(this[ox223704(0x1da)][ox223704(0x20d)](t[ox223704(0x16b)][ox223704(0x410)]), this[ox223704(0x1da)][ox223704(0x20d)](t[ox223704(0x16b)][ox223704(0x37d)]))[ox223704(0x3df)]((0x0, r[ox223704(0x3d0)])(this[ox223704(0x305)]))[ox223704(0x32a)](v187 => {
      const v188 = ox223704;
      let v189 = v187[v188(0x24f)](),
        v190 = this[v188(0x2f3)]["get"](v189);
      v190 && (v190[v188(0x2ca)](), this["_entities"][v188(0x382)](v189));
    });
  }
  async ["_startSheetCollabCursor"](v449) {
    let v450 = await this[oxb7202e(0x1c1)][oxb7202e(0x328)](v449),
      v451 = this[oxb7202e(0x214)][oxb7202e(0x164)](j, v449, v450);
    return v451[oxb7202e(0x384)](), v451;
  }
  async ["_startDocCollabCursor"](v452) {
    let v453 = await this["_collabSessionService"][ox528396(0x328)](v452),
      v454 = this[ox528396(0x214)]["createInstance"](A, v452, v453);
    return v454[ox528396(0x384)](), v454;
  }
};
M = C([S(0x0, t["IUniverInstanceService"]), S(0x1, (0x0, t["Inject"])(t["Injector"])), S(0x2, (0x0, t["Inject"])(e["CollaborationSessionService"]))], M);
function de(v862, v863) {
  v862[ox188188(0x27c)](), v862[ox188188(0x3fd)] = ox188188(0x28b);
  let v864 = v862[ox188188(0x23f)](v863)[ox188188(0x28c)];
  return v862["restore"](), Math[ox188188(0x2fa)](v864 + 0x8, 0xc8);
}
function fe(v865, v866) {
  let {
    radius: v867,
    width: v868,
    height: v869
  } = v866;
  v867 ??= 0x0, v868 ??= 0x1e, v869 ??= 0x1e;
  let v870 = 0x0,
    v871 = 0x0,
    v872 = 0x0;
  v870 = v871 = v872 = Math["min"](v867, v868 / 0x2, v869 / 0x2), v865["beginPath"](), v865[ox4bfe4f(0x255)](v870, 0x0), v865[ox4bfe4f(0x1e7)](v868 - v871, 0x0), v865[ox4bfe4f(0x155)](v868 - v871, v871, v871, Math["PI"] * 0x3 / 0x2, 0x0, !0x1), v865[ox4bfe4f(0x1e7)](v868, v869 - v872), v865[ox4bfe4f(0x155)](v868 - v872, v869 - v872, v872, 0x0, Math["PI"] / 0x2, !0x1), v865[ox4bfe4f(0x1e7)](0x0, v869), v865[ox4bfe4f(0x1e7)](0x0, v870), v865[ox4bfe4f(0x155)](v870, v870, v870, Math["PI"], Math["PI"] * 0x3 / 0x2, !0x1), v865[ox4bfe4f(0x235)](), v866[ox4bfe4f(0x1b2)] && (v865["save"](), v865[ox4bfe4f(0x3dd)] = v866["fill"], v866["fillRule"] === "evenodd" ? v865["fill"](ox4bfe4f(0x259)) : v865[ox4bfe4f(0x1b2)](), v865["restore"]());
}
var pe = class e extends p["Shape"] {
  constructor(v455, v456) {
    super(v455, v456), x(this, ox2e36ff(0x293), void 0x0), x(this, ox2e36ff(0x1b0), void 0x0), this["color"] = v456 == null ? void 0x0 : v456[ox2e36ff(0x293)], this[ox2e36ff(0x1b0)] = v456 == null ? void 0x0 : v456[ox2e36ff(0x1b0)];
  }
  static ["drawWith"](v457, v458) {
    let {
      text: v459,
      color: v460
    } = v458;
    v457["save"](), v457[ox37d185(0x3fd)] = ox37d185(0x383);
    let v461 = v457[ox37d185(0x23f)](v459)[ox37d185(0x28c)];
    if (fe(v457, {
      height: 0x14,
      radius: 0x4,
      width: de(v457, v459),
      fill: v460,
      evented: !0x1
    }), v457["fillStyle"] = ox37d185(0x15a), v461 > 0xc0) {
      let v191 = "",
        v192 = 0x0;
      for (let v46 of v459) {
        let v16 = v457["measureText"](v46)[ox37d185(0x28c)];
        if (v192 + v16 <= 0xc0 - v457[ox37d185(0x23f)](ox37d185(0x297))[ox37d185(0x28c)]) v191 += v46, v192 += v16;else {
          v191 += "...";
          break;
        }
      }
      v457["fillText"](v191, 0x4, 0xf);
    } else v457[ox37d185(0x3a9)](v459, 0x4, 0xf);
    v457[ox37d185(0x234)]();
  }
  ["_draw"](v462) {
    e[oxccc94a(0x191)](v462, this);
  }
};
const N = "collab-text-anchor-";
var me = class {
  constructor(v463, v464, v465, v466) {
    this[ox23efce(0x3b7)] = v463, this[ox23efce(0x31b)] = v464, this[ox23efce(0x3d2)] = v465, this[ox23efce(0x39e)] = v466, x(this, ox23efce(0x38a), []), x(this, "_anchor", null), x(this, ox23efce(0x404), null), x(this, ox23efce(0x390), null), x(this, "_hideTimer", null), x(this, ox23efce(0x23b), null), this["_render"]();
  }
  set ["_hover"](v467) {
    v467 ? (this[ox41be9c(0x390)] && this["_anchorDot"][ox41be9c(0x141)](), this["_textBubble"] && this[ox41be9c(0x404)][ox41be9c(0x2de)]()) : (this[ox41be9c(0x390)] && this["_anchorDot"][ox41be9c(0x2de)](), this[ox41be9c(0x404)] && this[ox41be9c(0x404)][ox41be9c(0x141)]());
  }
  ["dispose"]() {
    for (let v193 of this[ox3af7ee(0x38a)]) v193[ox3af7ee(0x2ca)]();
    this["_textBubble"] && this["_textBubble"][ox3af7ee(0x2ca)](), this[ox3af7ee(0x390)] && this[ox3af7ee(0x390)][ox3af7ee(0x2ca)](), this[ox3af7ee(0x386)] && this["_anchor"][ox3af7ee(0x2ca)](), this[ox3af7ee(0x23b)] && this[ox3af7ee(0x23b)]();
  }
  ["_render"]() {
    let {
        _docSkeleton: v468,
        _document: v469
      } = this,
      {
        color: v470,
        name: v471,
        ranges: v472
      } = this[ox4785c5(0x3b7)],
      v473 = v469[ox4785c5(0x152)](),
      {
        docsLeft: v474,
        docsTop: v475
      } = v473,
      v476 = new f[ox4785c5(0x263)](v473, v468);
    for (let {
      startOffset: v194,
      endOffset: v195,
      rangeType: v196,
      segmentId: v197,
      segmentPage: v198,
      collapsed: v199,
      isActive: v200
    } of v472) {
      let v47 = v468["findNodePositionByCharIndex"](v194, !0x0, v197, v198),
        v48 = v468[ox4785c5(0x3a6)](v195, !0x0, v197, v198);
      v48 ??= v468[ox4785c5(0x3a6)](v195 - 0x1, !0x1, v197, v198);
      let v49 = he(v47, v48);
      if (v200 && v49[ox4785c5(0x16a)]) {
        let {
          contentBoxPointGroup: v17
        } = v476[ox4785c5(0x148)](v48, v48);
        if (v17[ox4785c5(0x172)] === 0x0) continue;
        this["_drawAnchor"](v470, v17, v474, v475, v471), this[ox4785c5(0x23b)] = this[ox4785c5(0x353)]();
      }
      if (v47 && v48) {
        if (v196 === t[ox4785c5(0x3a5)][ox4785c5(0x341)]) {
          let {
            pointGroup: v7
          } = new f[ox4785c5(0x40c)](v473, v468)[ox4785c5(0x148)](v47, v48) ?? {};
          if (v7 == null || v7[ox4785c5(0x172)] === 0x0) continue;
          this[ox4785c5(0x16d)](v470, v7, v474, v475);
        } else {
          if (!v199 && v49["canRenderSelection"]) {
            let {
              borderBoxPointGroup: v2
            } = v476[ox4785c5(0x148)](v47, v48);
            if (v2[ox4785c5(0x172)] === 0x0) continue;
            this[ox4785c5(0x1a5)](v470, v2, v474, v475);
          }
        }
      }
    }
  }
  ["_drawAnchor"](v477, v478, v479, v480, v481) {
    let {
        left: v482,
        top: v483,
        height: v484
      } = this[ox2a29a5(0x1cf)](v478),
      v485 = 1.5 / this["_getScale"](),
      v486 = new p[ox2a29a5(0x144)](N + (0x0, t["generateRandomId"])(0x6), {
        left: v482 + v479 - v485,
        top: v483 + v480,
        height: v484,
        width: 1.5,
        fill: v477 || (0x0, p[ox2a29a5(0x307)])(t[ox2a29a5(0x3e3)][ox2a29a5(0x3e8)], 0x0),
        strokeWidth: v485,
        stroke: ox2a29a5(0x1f2),
        evented: !0x0
      });
    this[ox2a29a5(0x386)] = v486, this[ox2a29a5(0x31b)]["addObject"](v486, f[ox2a29a5(0x1c3)]);
    let v487 = new p[ox2a29a5(0x144)](N + (0x0, t[ox2a29a5(0x3d1)])(0x6), {
      left: v482 + v479 - v485,
      top: v483 + v480 - 0x4 / 0x2,
      height: 0x4,
      width: 0x4,
      fill: v477 || (0x0, p[ox2a29a5(0x307)])(t[ox2a29a5(0x3e3)][ox2a29a5(0x3e8)], 0x0),
      strokeWidth: 0x0,
      stroke: v477 || (0x0, p[ox2a29a5(0x307)])(t[ox2a29a5(0x3e3)]["black"], 0x0),
      evented: !0x1
    });
    this[ox2a29a5(0x390)] = v487, this["_scene"][ox2a29a5(0x239)](v487, f[ox2a29a5(0x1c3)]);
    let v488 = new pe(N + (0x0, t[ox2a29a5(0x3d1)])(0x6), {
      left: v482 + v479 - v485,
      top: v483 + v480 - 0x14,
      text: v481,
      color: v477
    });
    this[ox2a29a5(0x404)] = v488, this[ox2a29a5(0x31b)][ox2a29a5(0x239)](v488, f[ox2a29a5(0x1c3)]), this[ox2a29a5(0x2f1)] = !0x1;
  }
  ["_handleHover"]() {
    let v489 = this[ox4f7fd2(0x386)][ox4f7fd2(0x26b)][ox4f7fd2(0x1f8)](() => {
        const v201 = ox4f7fd2;
        this[v201(0x2f1)] = !0x0;
      }),
      v490 = this[ox4f7fd2(0x386)][ox4f7fd2(0x178)][ox4f7fd2(0x1f8)](() => {
        const v202 = ox4f7fd2;
        this[v202(0x1ad)] && clearTimeout(this[v202(0x1ad)]), this[v202(0x1ad)] = setTimeout(() => {
          const v50 = v202;
          this[v50(0x2f1)] = !0x1;
        }, 0x7d0);
      });
    return () => {
      const v203 = ox4f7fd2;
      v489[v203(0x207)](), v490[v203(0x207)]();
    };
  }
  ["_drawTextRange"](v491, v492, v493, v494) {
    let v495 = 0.2,
      v496 = new t[ox3d31b7(0x342)](v491)[ox3d31b7(0x1ed)](v495)[ox3d31b7(0x3b8)](),
      v497 = new p[ox3d31b7(0x2db)](ox3d31b7(0x2cf) + (0x0, t[ox3d31b7(0x3d1)])(0x6), {
        pointsGroup: v492,
        fill: v496 || (0x0, p[ox3d31b7(0x307)])(t["COLORS"][ox3d31b7(0x3e8)], v495),
        left: v493,
        top: v494,
        evented: !0x1,
        debounceParentDirty: !0x1
      });
    this[ox3d31b7(0x38a)][ox3d31b7(0x365)](v497), this[ox3d31b7(0x31b)][ox3d31b7(0x239)](v497, f[ox3d31b7(0x1c3)]);
  }
  ["_drawRectRange"](v498, v499, v500, v501) {
    let v502 = 0.2,
      v503 = new t[ox591d0e(0x342)](v498)[ox591d0e(0x1ed)](v502)[ox591d0e(0x3b8)](),
      v504 = new p[ox591d0e(0x2db)](ox591d0e(0x364) + (0x0, t[ox591d0e(0x3d1)])(0x6), {
        pointsGroup: v499,
        fill: v503 || (0x0, p[ox591d0e(0x307)])(t[ox591d0e(0x3e3)][ox591d0e(0x3e8)], v502),
        left: v500,
        top: v501,
        evented: !0x1,
        debounceParentDirty: !0x1
      });
    this[ox591d0e(0x38a)]["push"](v504), this[ox591d0e(0x31b)]["addObject"](v504, f["TEXT_RANGE_LAYER_INDEX"]);
  }
  ["_getAnchorBounding"](v505) {
    let v506 = v505[0x0],
      v507 = v506[0x0],
      v508 = v506[0x2],
      {
        x: v509,
        y: v510
      } = v507,
      {
        x: v511,
        y: v512
      } = v508;
    return {
      left: v509,
      top: v510,
      width: v511 - v509,
      height: v512 - v510
    };
  }
  ["_getScale"]() {
    let {
      scaleX: v513,
      scaleY: v514
    } = this["_scene"][ox32115c(0x136)]();
    return Math["max"](v513, v514);
  }
};
function he(v873, v874) {
  if (!v874) return {
    canRenderAnchor: !0x1,
    canRenderSelection: !0x1
  };
  if (!v873 || v873[ox2b7962(0x344)] !== v874[ox2b7962(0x344)] || (v873[ox2b7962(0x344)] === p[ox2b7962(0x398)]["HEADER"] || v873[ox2b7962(0x344)] === p["DocumentSkeletonPageType"][ox2b7962(0x277)]) && v873["segmentPage"] !== v874["segmentPage"]) return {
    canRenderAnchor: !0x0,
    canRenderSelection: !0x1
  };
  let v875 = (0x0, p[ox2b7962(0x150)])(v873),
    v876 = (0x0, p[ox2b7962(0x150)])(v874);
  return {
    canRenderAnchor: !0x0,
    canRenderSelection: v875 == null || v876 == null ? v875 == null && v876 == null : v875[ox2b7962(0x2b6)] === v876[ox2b7962(0x2b6)] && v875[ox2b7962(0x15c)] === v876[ox2b7962(0x15c)] && v875["columnIndex"] === v876[ox2b7962(0x396)]
  };
}
let P = class extends t["RxDisposable"] {
  constructor(v515, v516, v517, v518, v519) {
    super(), this["_context"] = v515, this[ox2d9330(0x343)] = v516, this[ox2d9330(0x2b4)] = v517, this["_commandService"] = v518, this[ox2d9330(0x34f)] = v519, x(this, ox2d9330(0x169), []), x(this, "_cursors", []), this[ox2d9330(0x2e6)]();
  }
  ["_init"]() {
    let v520 = this[ox244b33(0x17a)]["unitId"],
      v521 = this[ox244b33(0x343)];
    this[ox244b33(0x3de)]((0x0, r[ox244b33(0x223)])([this["_collabCursorController"][ox244b33(0x418)](v520), this[ox244b33(0x34f)]["currentTheme$"]])["pipe"]((0x0, i[ox244b33(0x1dc)])(([v204, v205]) => ({
      skeleton: v521[ox244b33(0x282)](),
      cursors: [...v204[ox244b33(0x40d)]()][ox244b33(0x1c2)](v51 => ({
        ...v51,
        color: this["_themeService"][ox244b33(0x264)](v51["color"])
      }))
    })))[ox244b33(0x32a)](v206 => {
      const v207 = ox244b33;
      if (this[v207(0x3ac)](), v206) {
        let {
          skeleton: v52,
          cursors: v53
        } = v206;
        this[v207(0x3e2)](v52, v53);
      }
    })), this[ox244b33(0x354)](), this[ox244b33(0x3c6)]();
  }
  ["_updateCollabCursors"](v522, v523) {
    let {
        scene: v524,
        mainComponent: v525
      } = this[ox226cee(0x17a)],
      v526 = v523[ox226cee(0x1dc)](v208 => new me(v208, v524, v522, v525));
    this[ox226cee(0x169)] = v526, this[ox226cee(0x298)] = v523;
  }
  ["_refreshCollabCursors"]() {
    this["_removeCollabCursors"]();
    let {
        scene: v527,
        mainComponent: v528
      } = this[ox27aaba(0x17a)],
      v529 = this[ox27aaba(0x343)][ox27aaba(0x282)](),
      v530 = this[ox27aaba(0x298)][ox27aaba(0x1dc)](v209 => new me(v209, v527, v529, v528));
    this[ox27aaba(0x169)] = v530;
  }
  ["_removeCollabCursors"]() {
    this["_cursorShapes"][ox11388d(0x3e6)](v210 => v210[ox11388d(0x2ca)]()), this[ox11388d(0x169)] = [];
  }
  ["_initCommandExecutedListener"]() {
    let v531 = [f[ox237e3c(0x1f6)]["id"]];
    this[ox237e3c(0x3de)](this[ox237e3c(0x3fb)][ox237e3c(0x417)](v211 => {
      const v212 = ox237e3c;
      v531[v212(0x2f5)](v211["id"]) && v211[v212(0x351)][v212(0x1d6)] === this["_context"]["unitId"] && this["_refreshCollabCursors"]();
    }));
  }
  ["_initResize"]() {
    this[ox19f13e(0x3de)]((0x0, t[ox19f13e(0x325)])(this[ox19f13e(0x17a)][ox19f13e(0x260)][ox19f13e(0x184)])[ox19f13e(0x3df)]((0x0, i[ox19f13e(0x1b7)])(v213 => v213[ox19f13e(0x331)] === p[ox19f13e(0x3ce)][ox19f13e(0x3ab)]), (0x0, i[ox19f13e(0x1d8)])(0x10))[ox19f13e(0x32a)](() => {
      this["_refreshCollabCursors"]();
    }));
  }
};
P = C([S(0x1, (0x0, t["Inject"])(d["DocSkeletonManagerService"])), S(0x2, (0x0, t["Inject"])(M)), S(0x3, t["ICommandService"]), S(0x4, (0x0, t["Inject"])(t["ThemeService"]))], P);
var ge = class extends p["Shape"] {
  constructor(v532, v533) {
    super(v532, v533), x(this, ox1bb12b(0x20c), void 0x0), x(this, ox1bb12b(0x2ed), !0x1), x(this, ox1bb12b(0x31c), void 0x0), x(this, "_name", ""), x(this, ox1bb12b(0x18f), "top"), x(this, ox1bb12b(0x210), void 0x0), x(this, ox1bb12b(0x39c), void 0x0), x(this, ox1bb12b(0x362), void 0x0), x(this, ox1bb12b(0x217), 0x4), x(this, "_blinkTimer", void 0x0), x(this, ox1bb12b(0x2c5), void 0x0), x(this, ox1bb12b(0x26c), !0x0), x(this, ox1bb12b(0x1be), 0x0), x(this, ox1bb12b(0x2b1), "right"), v533 && (this[ox1bb12b(0x254)](v533), v533[ox1bb12b(0x2a3)] && (v533[ox1bb12b(0x37e)] ?? this[ox1bb12b(0x217)]) && this[ox1bb12b(0x1a8)](v533[ox1bb12b(0x37e)] ?? this[ox1bb12b(0x217)])), this["onPointerEnter$"]["subscribeEvent"](() => this["setShapeProps"]({
      hovered: !0x0
    })), this["onPointerLeave$"]["subscribeEvent"](() => this["setShapeProps"]({
      hovered: !0x1
    }));
  }
  ["setOffsetY"](v534) {
    this[ox3137e3(0x1be)] = v534;
  }
  ["setShapeProps"](v535) {
    this[ox56f5ae(0x20c)] = v535[ox56f5ae(0x293)] ?? this[ox56f5ae(0x20c)], this[ox56f5ae(0x2ed)] = v535["hovered"] ?? this[ox56f5ae(0x2ed)], this[ox56f5ae(0x31c)] = v535[ox56f5ae(0x28e)] ?? this["_range"], this[ox56f5ae(0x14c)] = v535["name"] ?? this[ox56f5ae(0x14c)], this["_labelPosition"] = v535["labelPosition"] ?? this[ox56f5ae(0x18f)], this[ox56f5ae(0x210)] = v535[ox56f5ae(0x22e)] ?? this[ox56f5ae(0x210)], this["_showText"] = v535[ox56f5ae(0x26f)] ?? this[ox56f5ae(0x39c)], this[ox56f5ae(0x2b1)] = v535[ox56f5ae(0x2d3)] ?? this[ox56f5ae(0x2b1)], v535[ox56f5ae(0x37e)] !== void 0x0 && (this[ox56f5ae(0x217)] = v535[ox56f5ae(0x37e)]), v535[ox56f5ae(0x2a3)] !== void 0x0 && (this[ox56f5ae(0x362)] = v535[ox56f5ae(0x2a3)]), v535[ox56f5ae(0x310)] !== void 0x0 && (this[ox56f5ae(0x1be)] = v535[ox56f5ae(0x310)]), this["transformByState"]({
      width: v535[ox56f5ae(0x28c)],
      height: v535[ox56f5ae(0x37b)]
    });
  }
  ["onMouseMove"](v536) {
    let {
      row: v537,
      column: v538
    } = v536;
    if (v537 >= this["_range"][ox570935(0x3d7)] && v537 <= this[ox570935(0x31c)][ox570935(0x38f)] && v538 >= this[ox570935(0x31c)][ox570935(0x3cf)] && v538 <= this[ox570935(0x31c)]["endColumn"]) {
      this[ox570935(0x254)]({
        hovered: !0x0
      });
      return;
    }
    this[ox570935(0x254)]({
      hovered: !0x1
    });
  }
  ["_startBlinking"](v539) {
    this[ox2630bc(0x206)](), this[ox2630bc(0x26c)] = !0x0, this["_blinkIntervalTimer"] = window[ox2630bc(0x3bb)](() => {
      const v214 = ox2630bc;
      this[v214(0x26c)] = !this[v214(0x26c)], this["makeDirty"](!0x0);
    }, 0x1f4), this["_blinkTimer"] = window["setTimeout"](() => {
      const v215 = ox2630bc;
      this["_stopBlinking"](), this[v215(0x26c)] = !0x0, this[v215(0x222)](!0x0);
    }, v539 * 0x3e8);
  }
  ["_stopBlinking"]() {
    this[ox2639fc(0x2c5)] &&= (window[ox2639fc(0x37f)](this["_blinkIntervalTimer"]), void 0x0), this[ox2639fc(0x137)] &&= (window[ox2639fc(0x3d9)](this[ox2639fc(0x137)]), void 0x0);
  }
  ["triggerDblclick"](v540) {
    return !0x1;
  }
  ["dispose"]() {
    this[ox5934cc(0x206)](), super[ox5934cc(0x2ca)]();
  }
  ["_draw"](v541) {
    let v542 = this[ox2723c6(0x20c)],
      v543 = this[ox2723c6(0x210)];
    if (this["_highlight"] && !this[ox2723c6(0x26c)] && (v542 = this[ox2723c6(0x233)](this[ox2723c6(0x20c)]), v543 = this[ox2723c6(0x210)] ? this["_getLighterColor"](this["_backgroundColor"]) : void 0x0), p["Rect"][ox2723c6(0x191)](v541, {
      width: this[ox2723c6(0x28c)],
      height: this["height"],
      strokeWidth: this[ox2723c6(0x3b1)] || 1.5,
      stroke: v542,
      evented: !0x1,
      fill: v543
    }), this[ox2723c6(0x2ed)] || this[ox2723c6(0x39c)]) {
      v541[ox2723c6(0x27c)]();
      let v216 = this[ox2723c6(0x2b1)] === ox2723c6(0x1a3) ? -de(v541, this[ox2723c6(0x14c)]) : this[ox2723c6(0x28c)];
      v541[ox2723c6(0x33a)](0x1, 0x0, 0x0, 0x1, v216, (this[ox2723c6(0x18f)] === ox2723c6(0x248) ? 0x0 : -0x14) + (this[ox2723c6(0x1be)] ?? 0x0)), pe["drawWith"](v541, {
        text: this[ox2723c6(0x14c)],
        color: v542
      }), v541[ox2723c6(0x234)]();
    }
  }
  ["_getLighterColor"](v544) {
    return v544["startsWith"]("#") ? ox36925f(0x3db) + Number[ox36925f(0x1ca)](v544[ox36925f(0x2d2)](0x1, 0x3), 0x10) + ",\x20" + Number["parseInt"](v544[ox36925f(0x2d2)](0x3, 0x5), 0x10) + ",\x20" + Number[ox36925f(0x1ca)](v544[ox36925f(0x2d2)](0x5, 0x7), 0x10) + ox36925f(0x236) : v544[ox36925f(0x3be)](ox36925f(0x3a8)) ? v544[ox36925f(0x16c)](/[\d.]+\)$/g, ox36925f(0x2e5)) : v544[ox36925f(0x3be)]("rgb") ? v544[ox36925f(0x16c)](ox36925f(0x2df), ox36925f(0x3a8))[ox36925f(0x16c)](")", ",\x200.2)") : v544;
  }
};
let F = class extends t["RxDisposable"] {
  constructor(v545, v546, v547, v548) {
    super(), this[ox14f6ba(0x17a)] = v545, this[ox14f6ba(0x3a4)] = v546, this["_collabCursorController"] = v547, this[ox14f6ba(0x34f)] = v548, x(this, ox14f6ba(0x298), new Set()), x(this, "_lastPointer", null), x(this, ox14f6ba(0x32c), null), this[ox14f6ba(0x2e6)]();
  }
  ["_init"]() {
    this["_sheetSkeletonManagerService"][ox65f602(0x407)][ox65f602(0x3df)]((0x0, i["takeUntil"])(this["dispose$"]), (0x0, i[ox65f602(0x36e)])(v217 => {
      const v218 = ox65f602;
      if (v217) {
        let v54 = v217["sheetId"];
        return (0x0, r[v218(0x223)])(this[v218(0x2b4)]["getCollabCursors$"](this["_context"][v218(0x1d6)]), this["_themeService"][v218(0x177)])["pipe"]((0x0, i["map"])(([v18, v19]) => {
          const v20 = v218;
          let v21 = new Map();
          return v18[v20(0x3e6)]((v8, v9) => {
            const v10 = v20;
            if (v8[v10(0x2cb)] === v54) {
              let v3 = {
                ...v8
              };
              v3[v10(0x293)] = this["_themeService"]["getColorFromTheme"](v8["color"]), v21["set"](v9, v3);
            }
          }), {
            skeleton: v217,
            cursors: v21
          };
        }));
      }
      return (0x0, r["of"])({
        skeleton: null,
        cursors: new Map()
      });
    }))[ox65f602(0x32a)](({
      skeleton: v219,
      cursors: v220
    }) => {
      this["_removeCollabCursors"](), v219 && this["_updateCollabCursors"](v219, v220);
    }), this[ox65f602(0x3de)](this[ox65f602(0x3a4)]["currentSkeleton$"][ox65f602(0x3df)]((0x0, i[ox65f602(0x3d0)])(this["dispose$"]))[ox65f602(0x32a)](v221 => {
      const v222 = ox65f602;
      var v223;
      if (v221 == null) return;
      (v223 = this[v222(0x32c)]) == null || v223[v222(0x207)](), this[v222(0x32c)] = null;
      let {
          skeleton: v224
        } = v221,
        {
          scene: v225
        } = this[v222(0x17a)];
      this[v222(0x32c)] = v225[v222(0x392)]["subscribeEvent"]((0x0, t["debounce"])(v55 => {
        const v56 = v222;
        var v57, v58;
        let {
            offsetX: v59,
            offsetY: v60
          } = v55,
          {
            x: v61,
            y: v62
          } = v225[v56(0x253)](p[v56(0x187)]["FromArray"]([v59, v60])),
          {
            scaleX: v63,
            scaleY: v64
          } = v225[v56(0x136)](),
          v65 = v225[v56(0x400)](p[v56(0x28f)][v56(0x13f)]),
          v66 = v225[v56(0x352)](p[v56(0x187)][v56(0x156)]([v61, v62]), v65),
          v67 = v224["getCellIndexByOffset"](v59, v60, v63, v64, v66);
        (((v57 = this[v56(0x199)]) == null ? void 0x0 : v57[v56(0x290)]) !== v67[v56(0x290)] || ((v58 = this[v56(0x199)]) == null ? void 0x0 : v58[v56(0x2e7)]) !== v67["row"]) && this[v56(0x298)][v56(0x3e6)](v22 => {
          v22["onMouseMove"](v67);
        });
      }, 0x64));
    })), this[ox65f602(0x3de)]((0x0, t[ox65f602(0x1bd)])(() => {
      const v226 = ox65f602;
      var v227;
      (v227 = this["_pointerMoveDisposable"]) == null || v227[v226(0x207)](), this[v226(0x32c)] = null;
    }));
  }
  ["_updateCollabCursors"](v549, v550) {
    let v551 = this[ox20cdfe(0x3a4)][ox20cdfe(0x3f1)]();
    if (!v551) return;
    let v552 = this[ox20cdfe(0x194)]();
    if (!v552) return;
    this[ox20cdfe(0x298)][ox20cdfe(0x3e6)](v228 => {
      const v229 = ox20cdfe;
      v228[v229(0x222)]();
    });
    let {
        scene: v553
      } = v552,
      v554 = _e(Array[ox20cdfe(0x32f)](v550[ox20cdfe(0x40d)]()))[ox20cdfe(0x1dc)](v230 => {
        const v231 = ox20cdfe;
        let {
            color: v232,
            range: v233,
            name: v234,
            selection: v235,
            sheetID: v236
          } = v230,
          {
            startColumn: v237,
            startRow: v238,
            endColumn: v239,
            endRow: v240
          } = v233,
          v241 = (0x0, _["getCoordByCell"])(v238, v237, v553, v551),
          v242 = (0x0, _[v231(0x220)])(v240, v239, v553, v551),
          {
            columnHeaderHeightAndMarginTop: v243
          } = v551,
          {
            startX: v244,
            startY: v245
          } = v241,
          {
            endX: v246,
            endY: v247
          } = v242,
          v248 = v246 - v244,
          v249 = v247 - v245;
        return new ge(v234, {
          labelPosition: v245 - v243 >= 0x14 ? v231(0x1b4) : v231(0x248),
          sheetID: v236,
          range: v233,
          color: v232,
          name: v234,
          selection: v235,
          left: v244,
          top: v245,
          width: v248,
          height: v249,
          evented: !0x1,
          zIndex: 0x1389
        });
      });
    v553[ox20cdfe(0x363)](v554, 0x1), this["_cursors"] = new Set(v554);
  }
  ["_removeCollabCursors"]() {
    var v555;
    (v555 = this[ox3cc13a(0x298)]) == null || v555[ox3cc13a(0x3e6)](v250 => v250[ox3cc13a(0x2ca)]());
  }
  ["_getSheetObject"]() {
    return (0x0, _[ox43d806(0x37a)])(this[ox43d806(0x17a)][ox43d806(0x38c)], this["_context"]);
  }
};
F = C([S(0x1, (0x0, t["Inject"])(_["SheetSkeletonManagerService"])), S(0x2, (0x0, t["Inject"])(M)), S(0x3, (0x0, t["Inject"])(t["ThemeService"]))], F);
function _e(v877) {
  let v878 = new Map();
  return v877["forEach"](v556 => {
    if (v878[oxa3a09d(0x3b5)](v556["selection"])) {
      let v251 = v878[oxa3a09d(0x330)](v556[oxa3a09d(0x3ff)]);
      v251[oxa3a09d(0x25b)] += ",\x20" + v556[oxa3a09d(0x25b)];
    } else v878["set"](v556[oxa3a09d(0x3ff)], v556);
  }), Array[ox4d4ee4(0x32f)](v878["values"]());
}
function I(v879) {
  return typeof v879 == ox5058f1(0x14d) && !!v879;
}
function ve(v880) {
  return v880[ox50955a(0x2c1)] === l[ox50955a(0x14e)][ox50955a(0x3fa)] && ox50955a(0x1f7) in v880 && I(v880[ox50955a(0x1f7)]) && typeof v880["data"]["memberID"] == ox50955a(0x13d) && typeof v880[ox50955a(0x1f7)]["selection"] == ox50955a(0x13d);
}
function ye(v881) {
  return v881[ox19ecd8(0x2c1)] === l[ox19ecd8(0x14e)][ox19ecd8(0x1fb)] && "data" in v881 && I(v881[ox19ecd8(0x1f7)]) && typeof v881[ox19ecd8(0x1f7)][ox19ecd8(0x296)] == ox19ecd8(0x13d);
}
function be(v882, v883) {
  let v884;
  try {
    v884 = JSON[ox50ba25(0x361)](v882);
  } catch {
    return null;
  }
  if (!I(v884) || typeof v884[ox50ba25(0x3d3)] != ox50ba25(0x13d) || typeof v884[ox50ba25(0x1d6)] != ox50ba25(0x13d) || typeof v884[ox50ba25(0x338)] != ox50ba25(0x13d)) return null;
  let v885 = typeof v884[ox50ba25(0x3e7)] == ox50ba25(0x18a) ? v884[ox50ba25(0x3e7)] : v883;
  if (v885 == null) return null;
  let v886 = I(v884[ox50ba25(0x283)]) && typeof v884["pointer"]["x"] == ox50ba25(0x18a) && Number["isFinite"](v884[ox50ba25(0x283)]["x"]) && typeof v884["pointer"]["y"] == ox50ba25(0x18a) && Number[ox50ba25(0x309)](v884[ox50ba25(0x283)]["y"]) ? {
    x: v884[ox50ba25(0x283)]["x"],
    y: v884[ox50ba25(0x283)]["y"]
  } : null;
  return {
    kind: v884[ox50ba25(0x3d3)],
    unitType: v885,
    unitId: v884[ox50ba25(0x1d6)],
    subUnitId: v884[ox50ba25(0x338)],
    selectedIds: Array[ox50ba25(0x2f9)](v884[ox50ba25(0x409)]) ? v884[ox50ba25(0x409)]["filter"](v557 => typeof v557 == ox50ba25(0x13d)) : [],
    focusedId: typeof v884[ox50ba25(0x1ec)] == ox50ba25(0x13d) ? v884["focusedId"] : null,
    pointer: v886
  };
}
function xe(v887, v888, v889) {
  return {
    kind: v888,
    unitType: v887,
    unitId: v889["unitId"],
    subUnitId: v889["subUnitId"],
    selectedIds: Array[ox58a5ac(0x32f)](v889[ox58a5ac(0x409)]),
    focusedId: v889[ox58a5ac(0x1ec)],
    pointer: v889[ox58a5ac(0x283)] ? {
      ...v889[ox58a5ac(0x283)]
    } : null
  };
}
let L = class extends t["RxDisposable"] {
  constructor(v558, v559, v560, v561, v562, v563) {
    super(), this[ox5b1e33(0x1d6)] = v558, this["_session"] = v559, this[ox5b1e33(0x35e)] = v560, this[ox5b1e33(0x256)] = v561, this[ox5b1e33(0x145)] = v562, this["_commandService"] = v563, x(this, ox5b1e33(0x350), !0x1), x(this, ox5b1e33(0x266), !0x1);
  }
  get ["unitType"]() {
    return this[ox261e54(0x35e)][ox261e54(0x3e7)];
  }
  ["dispose"]() {
    this[ox329daf(0x2c6)](), super["dispose"]();
  }
  ["init"]() {
    this[ox14f17d(0x266)] || (this[ox14f17d(0x266)] = !0x0, this[ox14f17d(0x1ab)]["sessionStatus$"][ox14f17d(0x3df)]((0x0, r["takeUntil"])(this[ox14f17d(0x305)]))[ox14f17d(0x32a)](v252 => {
      const v253 = ox14f17d;
      if (v252 === e[v253(0x2fb)][v253(0x175)]) {
        this[v253(0x350)] = !0x0;
        let v68 = this[v253(0x35e)][v253(0x26e)](this[v253(0x1d6)]);
        v68 && this[v253(0x3e0)](v68);
        return;
      }
      this[v253(0x350)] = !0x1, this[v253(0x2c6)]();
    }), this[ox14f17d(0x1ab)][ox14f17d(0x405)][ox14f17d(0x3df)]((0x0, r[ox14f17d(0x3d0)])(this["dispose$"]))["subscribe"](v254 => {
      const v255 = ox14f17d;
      ve(v254) ? this[v255(0x250)](v254) : ye(v254) && this["_removeRemotePresence"](v254[v255(0x1f7)][v255(0x296)]);
    }), this[ox14f17d(0x35e)][ox14f17d(0x1fe)][ox14f17d(0x3df)]((0x0, r["filter"])(v256 => this[ox14f17d(0x350)] && v256[ox14f17d(0x1d6)] === this[ox14f17d(0x1d6)]), (0x0, r[ox14f17d(0x2e1)])(v257 => (0x0, r[ox14f17d(0x34e)])(v257["shareInterval"]), {
      leading: !0x0,
      trailing: !0x0
    }), (0x0, r[ox14f17d(0x3d0)])(this[ox14f17d(0x305)]))[ox14f17d(0x32a)](v258 => this[ox14f17d(0x3e0)](v258)));
  }
  ["_sendLocalPresence"](v564) {
    let v565 = this[ox22b17b(0x1ab)][ox22b17b(0x35b)]();
    if (!v565 || !this[ox22b17b(0x350)]) return;
    let v566 = {
      eventID: l[ox22b17b(0x14e)][ox22b17b(0x3fa)],
      data: {
        unitID: this[ox22b17b(0x1d6)],
        memberID: v565,
        selection: JSON[ox22b17b(0x3bf)](xe(this[ox22b17b(0x3e7)], this[ox22b17b(0x35e)][ox22b17b(0x2f4)], v564))
      }
    };
    this[ox22b17b(0x1ab)][ox22b17b(0x157)](v566, this[ox22b17b(0x1d6)])["catch"](() => void 0x0);
  }
  ["_handleCursorUpdate"](v567) {
    let {
      memberID: v568,
      selection: v569
    } = v567["data"];
    if (v568 === this["_session"]["getMemberID"]()) return;
    let v570 = be(v569, this[ox358669(0x3e7)]);
    if (!v570 || v570[ox358669(0x3d3)] !== this[ox358669(0x35e)][ox358669(0x2f4)] || v570["unitType"] !== this["unitType"] || v570[ox358669(0x1d6)] !== this[ox358669(0x1d6)]) return;
    let v571 = this[ox358669(0x145)][ox358669(0x41f)](this[ox358669(0x1d6)], v568),
      v572 = {
        unitId: v570["unitId"],
        subUnitId: v570[ox358669(0x338)],
        selectedIds: v570[ox358669(0x409)],
        focusedId: v570[ox358669(0x1ec)],
        pointer: v570[ox358669(0x283)],
        memberId: v568,
        color: this[ox358669(0x256)][ox358669(0x3a3)](v568),
        name: (v571 == null ? void 0x0 : v571[ox358669(0x25b)]) ?? v568
      };
    this["_commandService"][ox358669(0x167)](E["id"], {
      unitType: this[ox358669(0x3e7)],
      update: {
        type: "set",
        state: v572
      }
    })["catch"](() => void 0x0);
  }
  ["_removeRemotePresence"](v573) {
    this[ox50ee1a(0x3fb)][ox50ee1a(0x167)](E["id"], {
      unitType: this[ox50ee1a(0x3e7)],
      update: {
        type: "remove",
        unitId: this[ox50ee1a(0x1d6)],
        memberId: v573
      }
    })[ox50ee1a(0x2b3)](() => void 0x0);
  }
  ["_clearRemotePresences"]() {
    this[ox33b545(0x3fb)]["executeCommand"](E["id"], {
      unitType: this[ox33b545(0x3e7)],
      update: {
        type: ox33b545(0x158),
        unitId: this[ox33b545(0x1d6)]
      }
    })[ox33b545(0x2b3)](() => void 0x0);
  }
};
L = C([S(0x3, (0x0, t["Inject"])(O)), S(0x4, (0x0, t["Inject"])(e["MemberService"])), S(0x5, (0x0, t["Inject"])(t["ICommandService"]))], L);
let R = class extends t["RxDisposable"] {
  constructor(v574, v575, v576, v577) {
    super(), this[ox4cb096(0x1da)] = v574, this["_injector"] = v575, this[ox4cb096(0x1c1)] = v576, this["_adapterRegistry"] = v577, x(this, ox4cb096(0x24e), !0x1), x(this, ox4cb096(0x2f3), new Map()), x(this, ox4cb096(0x31a), new Map()), x(this, ox4cb096(0x1c8), new Map()), this[ox4cb096(0x2e6)]();
  }
  ["dispose"]() {
    this[ox2a68f4(0x24e)] = !0x0, this[ox2a68f4(0x1c8)][ox2a68f4(0x3e6)](v259 => v259["dispose"]()), this[ox2a68f4(0x1c8)][ox2a68f4(0x158)](), this[ox2a68f4(0x2f3)][ox2a68f4(0x3e6)](v260 => v260[ox2a68f4(0x2ca)]()), this[ox2a68f4(0x2f3)][ox2a68f4(0x158)](), this[ox2a68f4(0x31a)][ox2a68f4(0x158)](), super["dispose"]();
  }
  ["_init"]() {
    this["_adapterRegistry"][ox4a11c6(0x16f)][ox4a11c6(0x3df)]((0x0, r[ox4a11c6(0x3d0)])(this[ox4a11c6(0x305)]))["subscribe"](v261 => this[ox4a11c6(0x17d)](v261));
  }
  ["_syncAdapters"](v578) {
    let v579 = new Set(v578[oxab1fa(0x1dc)](v262 => v262[oxab1fa(0x3e7)]));
    this["_adapterDisposables"][oxab1fa(0x3e6)]((v263, v264) => {
      const v265 = oxab1fa;
      v579["has"](v264) || (v263[v265(0x2ca)](), this[v265(0x1c8)][v265(0x382)](v264), this[v265(0x347)](v264));
    }), v578["forEach"](v266 => {
      const v267 = oxab1fa;
      this[v267(0x1c8)][v267(0x3b5)](v266[v267(0x3e7)]) || this[v267(0x2a9)](v266);
    });
  }
  ["_bindAdapter"](v580) {
    let v581 = new t[ox5934ab(0x320)]();
    this[ox5934ab(0x1c8)][ox5934ab(0x1f9)](v580[ox5934ab(0x3e7)], v581), v581[ox5934ab(0x1f3)](v580[ox5934ab(0x13e)]()), this[ox5934ab(0x1da)]["getAllUnitsForType"](v580[ox5934ab(0x3e7)])[ox5934ab(0x3e6)](v268 => this[ox5934ab(0x27e)](v268[ox5934ab(0x24f)](), v580)[ox5934ab(0x2b3)](() => void 0x0));
    let v582 = this[ox5934ab(0x1da)][ox5934ab(0x1c9)](v580[ox5934ab(0x3e7)])[ox5934ab(0x32a)](({
      unit: v269
    }) => this["_startEntity"](v269[ox5934ab(0x24f)](), v580)["catch"](() => void 0x0));
    v581[ox5934ab(0x1f3)]((0x0, t[ox5934ab(0x1bd)])(() => v582[ox5934ab(0x207)]()));
    let v583 = this["_univerInstanceService"][ox5934ab(0x20d)](v580[ox5934ab(0x3e7)])["subscribe"](v270 => this["_disposeEntity"](v270[ox5934ab(0x24f)]()));
    v581[ox5934ab(0x1f3)]((0x0, t[ox5934ab(0x1bd)])(() => v583[ox5934ab(0x207)]()));
  }
  async ["_startEntity"](v584, v585) {
    if (this[ox4f9f31(0x2f3)]["has"](v584) || this[ox4f9f31(0x31a)][ox4f9f31(0x3b5)](v584)) return;
    let v586 = {};
    this["_pendingEntities"][ox4f9f31(0x1f9)](v584, v586);
    let v587 = await this["_collabSessionService"][ox4f9f31(0x328)](v584)[ox4f9f31(0x2b3)](v271 => {
      const v272 = ox4f9f31;
      throw this["_pendingEntities"][v272(0x330)](v584) === v586 && this["_pendingEntities"][v272(0x382)](v584), v271;
    });
    if (this["_isDisposed"] || this[ox4f9f31(0x31a)]["get"](v584) !== v586 || this["_adapterRegistry"][ox4f9f31(0x330)](v585[ox4f9f31(0x3e7)]) !== v585) {
      this[ox4f9f31(0x31a)][ox4f9f31(0x330)](v584) === v586 && this[ox4f9f31(0x31a)][ox4f9f31(0x382)](v584);
      return;
    }
    let v588 = this[ox4f9f31(0x214)][ox4f9f31(0x164)](L, v584, v587, v585);
    v588[ox4f9f31(0x384)](), this[ox4f9f31(0x31a)][ox4f9f31(0x382)](v584), this[ox4f9f31(0x2f3)]["set"](v584, v588);
  }
  ["_disposeEntity"](v589) {
    this[ox4025ef(0x31a)]["delete"](v589);
    let v590 = this[ox4025ef(0x2f3)]["get"](v589);
    v590 && (v590[ox4025ef(0x2ca)](), this[ox4025ef(0x2f3)][ox4025ef(0x382)](v589));
  }
  ["_disposeEntitiesForType"](v591) {
    this[ox2fe195(0x1da)][ox2fe195(0x209)](v591)[ox2fe195(0x3e6)](v273 => this[ox2fe195(0x31a)][ox2fe195(0x382)](v273[ox2fe195(0x24f)]())), Array[ox2fe195(0x32f)](this[ox2fe195(0x2f3)][ox2fe195(0x162)]())[ox2fe195(0x3e6)](([v274, v275]) => {
      const v276 = ox2fe195;
      v275[v276(0x3e7)] === v591 && this["_disposeEntity"](v274);
    });
  }
};
R = C([S(0x0, t["IUniverInstanceService"]), S(0x1, (0x0, t["Inject"])(t["Injector"])), S(0x2, (0x0, t["Inject"])(e["CollaborationSessionService"])), S(0x3, (0x0, t["Inject"])(n["IUnitPresenceUIAdapterRegistry"]))], R);
let z = class extends t["Disposable"] {
  constructor(v592, v593, v594, v595, v596, v597) {
    super(), this["_beforeCloseService"] = v592, this[ox4f610e(0x399)] = v593, this["_collaborationUIEventService"] = v594, this["_messageService"] = v595, this[ox4f610e(0x1e6)] = v596, this[ox4f610e(0x3d8)] = v597, this[ox4f610e(0x38d)](), this[ox4f610e(0x420)]();
  }
  ["_setupBeforeClosingHandler"]() {
    this[ox2850de(0x3de)](this["_beforeCloseService"]["registerBeforeClose"](() => {
      const v277 = ox2850de;
      if (this[v277(0x399)][v277(0x231)][v277(0x3f5)]) return this["_localeService"]["t"](v277(0x3c0));
    }));
  }
  ["_initEvent"]() {
    this["disposeWithMe"](this[ox241928(0x1e1)]["event$"][ox241928(0x32a)](v278 => {
      const v279 = ox241928;
      v278["id"] === e[v279(0x1e4)]["OTHER_CLIENT_EDITING"] && this[v279(0x327)][v279(0x2de)]({
        type: a[v279(0x406)][v279(0x151)],
        content: this[v279(0x3d8)]["t"](v279(0x2d8))
      }), v278["id"] === e[v279(0x1e4)]["CLOSE_ROOM"] && this[v279(0x327)][v279(0x2de)]({
        type: a[v279(0x406)]["Warning"],
        content: this[v279(0x3d8)]["t"](v279(0x25e))
      }), v278["id"] === e[v279(0x1e4)][v279(0x3cc)] && this["_notificationService"][v279(0x2de)]({
        title: this["_localeService"]["t"](v279(0x3c7)),
        content: this[v279(0x3d8)]["t"](v279(0x323)),
        type: "error",
        duration: 0x0
      }), v278["id"] === e[v279(0x1e4)][v279(0x381)] && this[v279(0x1e6)][v279(0x2de)]({
        title: this[v279(0x3d8)]["t"](v279(0x19a)),
        content: this[v279(0x3d8)]["t"]("collaboration-client-ui.conflict.content"),
        type: v279(0x1b1),
        duration: 0x0
      }), v278["id"] === e[v279(0x1e4)]["JOIN_ROOM_FAILED"] && this[v279(0x327)]["show"]({
        type: a[v279(0x406)][v279(0x151)],
        content: this[v279(0x3d8)]["t"](v278["data"] || "")
      }), v278["id"] === e["CollaborationUIEventId"][v279(0x2c0)] && this[v279(0x327)]["show"]({
        type: a["MessageType"]["Warning"],
        content: this[v279(0x3d8)]["t"]("collaboration-client-ui.session.will-retry")
      }), v278["id"] === e[v279(0x1e4)]["SOCKET_FAILED"] && this[v279(0x327)][v279(0x2de)]({
        type: a[v279(0x406)][v279(0x3d6)],
        content: this["_localeService"]["t"](v279(0x422))
      }), v278["id"] === e[v279(0x1e4)]["SUBMIT_CHANGESET_TIMEOUT"] && this[v279(0x327)][v279(0x2de)]({
        type: a[v279(0x406)]["Error"],
        content: this["_localeService"]["t"](v279(0x17c))
      });
    }));
  }
};
z = C([S(0x0, n["IBeforeCloseService"]), S(0x1, e["ILocalCacheService"]), S(0x2, (0x0, t["Inject"])(e["CollaborationUIEventService"])), S(0x3, n["IMessageService"]), S(0x4, n["INotificationService"]), S(0x5, (0x0, t["Inject"])(t["LocaleService"]))], z);
const B = (0x0, t["createIdentifier"])("uni.network.url-service");
let V = class extends t["RxDisposable"] {
  constructor(v598, v599, v600, v601) {
    super(), this[ox4318eb(0x31e)] = v598, this["_logService"] = v599, this[ox4318eb(0x3fb)] = v600, this[ox4318eb(0x370)] = v601, this[ox4318eb(0x2e6)]()[ox4318eb(0x2b3)](v280 => this["_logService"][ox4318eb(0x1b1)]("[CollaborationDataLoaderController]", v280));
  }
  async ["_init"]() {
    let v602 = this[ox2b535b(0x31e)][ox2b535b(0x25f)](ox2b535b(0x38c)),
      v603 = this[ox2b535b(0x31e)][ox2b535b(0x25f)](ox2b535b(0x331)),
      v604 = this["_urlService"][ox2b535b(0x25f)]("subunit");
    if (!v602 || !v603) {
      this["_logService"][ox2b535b(0x2bf)](ox2b535b(0x2ac), ox2b535b(0x197));
      return;
    }
    let v605 = await this[ox2b535b(0x370)][ox2b535b(0x326)](v602, Number(v603), v604);
    this[ox2b535b(0x22f)] || v605 && v605 instanceof t[ox2b535b(0x281)] && (await this["_setupSubUnitSync"](v605));
  }
  async ["_setupSubUnitSync"](v606) {
    await this[ox18e6b0(0x40e)](v606), !this[ox18e6b0(0x22f)] && (v606[ox18e6b0(0x379)]["pipe"]((0x0, r[ox18e6b0(0x3d0)])(this[ox18e6b0(0x305)]))[ox18e6b0(0x32a)](v281 => {
      const v282 = ox18e6b0;
      v281 && this[v282(0x2c3)](v281);
    }), this[ox18e6b0(0x31e)][ox18e6b0(0x3ba)][ox18e6b0(0x3df)]((0x0, r["takeUntil"])(this[ox18e6b0(0x305)]))[ox18e6b0(0x32a)](() => {
      const v283 = ox18e6b0;
      this[v283(0x40e)](v606)[v283(0x2b3)](v69 => this["_logService"][v283(0x1b1)]("[CollaborationDataLoaderController]", v69));
    }));
  }
  ["_updateURLWithCurrentState"](v607, v608 = !0x1) {
    let v609 = this[ox55309b(0x31e)][ox55309b(0x25f)](ox55309b(0x1c6));
    v607[ox55309b(0x360)]() !== v609 && this["_urlService"][ox55309b(0x303)](ox55309b(0x1c6), v607[ox55309b(0x360)](), v608);
  }
  async ["_updateSubUnitFromURLParams"](v610) {
    var v611;
    let v612 = this[ox421302(0x31e)][ox421302(0x25f)](ox421302(0x1c6));
    if (!v612 || !v610[ox421302(0x193)](v612)) {
      let v284 = v610["getUnhiddenWorksheets"]()[0x0],
        v285 = v610["getSheetBySheetId"](v284);
      if (!v285 || (this[ox421302(0x2c3)](v285, !0x0), this[ox421302(0x22f)])) return;
      await this[ox421302(0x3fb)]["executeCommand"](g[ox421302(0x274)]["id"], {
        unitId: v610[ox421302(0x24f)](),
        subUnitId: v284
      });
      return;
    }
    ((v611 = v610["getActiveSheet"]()) == null ? void 0x0 : v611[ox421302(0x360)]()) !== v612 && (await this["_commandService"][ox421302(0x167)](g[ox421302(0x274)]["id"], {
      unitId: v610[ox421302(0x24f)](),
      subUnitId: v612
    }));
  }
};
V = C([S(0x0, B), S(0x1, t["ILogService"]), S(0x2, t["ICommandService"]), S(0x3, (0x0, t["Inject"])(e["DataLoaderService"]))], V);
let H = class {
  constructor(v613, v614) {
    this[ox3c10ec(0x421)] = v613, this[ox3c10ec(0x1df)] = v614;
  }
  ["transformIMECache"](v615) {
    this[oxd44697(0x288)](v615), this["_transformPreviousActiveRange"](v615);
  }
  ["transformRemoteChangeset"](v616) {
    let {
        unitID: v617
      } = v616,
      {
        redoCache: v618
      } = this[ox9d60d8(0x1df)][ox9d60d8(0x17f)](v617)[ox9d60d8(0x188)](f[ox9d60d8(0x35c)])[ox9d60d8(0x3a2)]();
    if (v618["length"] === 0x0) return v616;
    let v619 = t[ox9d60d8(0x3b6)][ox9d60d8(0x180)](v616["mutations"][0x0]);
    for (let v286 = 0x0; v286 < v618[ox9d60d8(0x172)]; v286++) {
      let v70 = {
          id: "doc.mutation.rich-text-editing",
          params: {
            ...v618[v286]
          }
        },
        v71 = this[ox9d60d8(0x421)][ox9d60d8(0x269)](v619, v70, !0x1);
      if ((0x0, l["isTransformMutationFailure"])(v71)) throw v71[ox9d60d8(0x1b1)];
      v619 = v71["m1Prime"];
    }
    return {
      ...t[ox9d60d8(0x3b6)][ox9d60d8(0x180)](v616),
      mutations: [v619]
    };
  }
  ["_transformUndoRedoStack"](v620) {
    let {
        unitID: v621
      } = v620,
      v622 = this["_renderManagerService"]["getRenderUnitById"](v621)["with"](f[ox539ff8(0x35c)]),
      {
        undoCache: v623,
        redoCache: v624
      } = v622[ox539ff8(0x3a2)]();
    if (v623["length"] === 0x0 || v624[ox539ff8(0x172)] === 0x0) return;
    let v625 = [],
      v626 = [],
      v627 = t[ox539ff8(0x3b6)][ox539ff8(0x180)](v620[ox539ff8(0x30b)][0x0]),
      v628 = t[ox539ff8(0x3b6)][ox539ff8(0x180)](v620[ox539ff8(0x30b)][0x0]);
    for (let v287 = v623[ox539ff8(0x172)] - 0x1; v287 >= 0x0; v287--) {
      let v72 = {
          id: ox539ff8(0x271),
          params: {
            ...v623[v287]
          }
        },
        v73 = {
          id: "doc.mutation.rich-text-editing",
          params: {
            ...v624[v287]
          }
        },
        v74 = this[ox539ff8(0x421)][ox539ff8(0x269)](v627, v72, !0x1),
        v75 = this["_transformService"][ox539ff8(0x269)](v628, v73, !0x1);
      if ((0x0, l["isTransformMutationFailure"])(v74)) throw v74["error"];
      if ((0x0, l["isTransformMutationFailure"])(v75)) throw v75[ox539ff8(0x1b1)];
      v625[ox539ff8(0x19e)](v74["m2Prime"]["params"]), v626[ox539ff8(0x19e)](v75[ox539ff8(0x270)]["params"]), v627 = v74[ox539ff8(0x36b)], v628 = v75["m1Prime"];
    }
    v622[ox539ff8(0x3c3)]({
      undoCache: v625,
      redoCache: v626
    });
  }
  ["_transformPreviousActiveRange"](v629) {
    let {
        unitID: v630
      } = v629,
      v631 = this[ox5e39c1(0x1df)]["getRenderUnitById"](v630)["with"](f["DocIMEInputManagerService"]),
      v632 = v631["getActiveRange"]();
    if (v632 == null) return;
    let v633 = [{
        id: ox5e39c1(0x271),
        params: {
          unitId: v629["unitID"],
          actions: null,
          textRanges: [v632]
        }
      }],
      v634 = this[ox5e39c1(0x421)]["transformMutationsWithChangeset"](v629, v633);
    if (!(0x0, l["isTransformMutationsWithChangesetSuccess"])(v634)) throw v634[ox5e39c1(0x1b1)];
    let v635 = v634[ox5e39c1(0x270)][0x0][ox5e39c1(0x351)]["textRanges"];
    Array["isArray"](v635) && v635[ox5e39c1(0x172)] && v631[ox5e39c1(0x1d9)](v635[0x0]);
  }
};
H = C([S(0x0, l["ITransformService"]), S(0x1, p["IRenderManagerService"])], H);
let U = class {
  constructor(v636, v637, v638) {
    this[ox16c5de(0x214)] = v636, this[ox16c5de(0x421)] = v637, this[ox16c5de(0x2e9)] = v638;
  }
  ["transformStateCache"](v639) {
    this[ox150b49(0x208)](v639);
  }
  ["transformRemoteChangeset"](v640) {
    let {
        unitID: v641
      } = v640,
      {
        collaboration: v642
      } = this[ox259a26(0x2e9)][ox259a26(0x225)](v641);
    if (v642[ox259a26(0x172)] === 0x0) return v640;
    let v643 = t[ox259a26(0x3b6)][ox259a26(0x180)](v640["mutations"][0x0]);
    for (let v288 = 0x0; v288 < v642[ox259a26(0x172)]; v288++) {
      let v76 = {
          id: "doc.mutation.rich-text-editing",
          params: {
            unitId: v642[v288][ox259a26(0x1d6)],
            ...v642[v288][ox259a26(0x268)]
          }
        },
        v77 = this[ox259a26(0x421)][ox259a26(0x269)](v643, v76, !0x1);
      if ((0x0, l[ox259a26(0x14b)])(v77)) throw v77[ox259a26(0x1b1)];
      v643 = v77[ox259a26(0x36b)];
    }
    return {
      ...t[ox259a26(0x3b6)][ox259a26(0x180)](v640),
      mutations: [v643]
    };
  }
  ["_transformHistoryAndStateStack"](v644) {
    let {
        unitID: v645
      } = v644,
      {
        history: v646,
        collaboration: v647
      } = this[ox5bdc89(0x2e9)][ox5bdc89(0x225)](v645);
    if (v646["length"] === 0x0 && v647[ox5bdc89(0x172)] === 0x0) return;
    let v648 = [],
      v649 = [],
      v650 = t[ox5bdc89(0x3b6)][ox5bdc89(0x180)](v644[ox5bdc89(0x30b)][0x0]),
      v651 = t[ox5bdc89(0x3b6)][ox5bdc89(0x180)](v644[ox5bdc89(0x30b)][0x0]);
    for (let v289 = v646[ox5bdc89(0x172)] - 0x1; v289 >= 0x0; v289--) {
      let v78 = {
          id: ox5bdc89(0x271),
          params: {
            unitId: v646[v289][ox5bdc89(0x1d6)],
            ...v646[v289][ox5bdc89(0x1d5)]
          }
        },
        v79 = {
          id: ox5bdc89(0x271),
          params: {
            unitId: v646[v289][ox5bdc89(0x1d6)],
            ...v646[v289][ox5bdc89(0x268)]
          }
        },
        v80 = this[ox5bdc89(0x421)][ox5bdc89(0x269)](v650, v78, !0x1),
        v81 = this[ox5bdc89(0x421)]["transformMutation"](v651, v79, !0x1);
      if ((0x0, l[ox5bdc89(0x14b)])(v80)) throw v80[ox5bdc89(0x1b1)];
      if ((0x0, l[ox5bdc89(0x14b)])(v81)) throw v81[ox5bdc89(0x1b1)];
      v648[ox5bdc89(0x19e)]({
        ...v646[v289],
        undoState: v80["m2Prime"][ox5bdc89(0x351)],
        redoState: v81[ox5bdc89(0x270)][ox5bdc89(0x351)]
      }), v650 = v80[ox5bdc89(0x36b)], v651 = v81[ox5bdc89(0x36b)];
    }
    v650 = t[ox5bdc89(0x3b6)][ox5bdc89(0x180)](v644[ox5bdc89(0x30b)][0x0]), v651 = t[ox5bdc89(0x3b6)][ox5bdc89(0x180)](v644[ox5bdc89(0x30b)][0x0]);
    for (let v290 = v647["length"] - 0x1; v290 >= 0x0; v290--) {
      let v82 = {
          id: "doc.mutation.rich-text-editing",
          params: {
            unitId: v647[v290][ox5bdc89(0x1d6)],
            ...v647[v290][ox5bdc89(0x1d5)]
          }
        },
        v83 = {
          id: ox5bdc89(0x271),
          params: {
            unitId: v647[v290]["unitId"],
            ...v647[v290][ox5bdc89(0x268)]
          }
        },
        v84 = this["_transformService"][ox5bdc89(0x269)](v650, v82, !0x1),
        v85 = this["_transformService"]["transformMutation"](v651, v83, !0x1);
      if ((0x0, l[ox5bdc89(0x14b)])(v84)) throw v84[ox5bdc89(0x1b1)];
      if ((0x0, l[ox5bdc89(0x14b)])(v85)) throw v85["error"];
      v649[ox5bdc89(0x19e)]({
        ...v647[v290],
        undoState: v84[ox5bdc89(0x270)][ox5bdc89(0x351)],
        redoState: v85[ox5bdc89(0x270)][ox5bdc89(0x351)]
      }), v650 = v84[ox5bdc89(0x36b)], v651 = v85[ox5bdc89(0x36b)];
    }
    this[ox5bdc89(0x2e9)][ox5bdc89(0x39b)](v645, {
      history: v648,
      collaboration: v649
    });
  }
};
U = C([S(0x0, (0x0, t["Inject"])(t["Injector"])), S(0x1, l["ITransformService"]), S(0x2, (0x0, t["Inject"])(d["DocStateChangeManagerService"]))], U);
let W = class {
  constructor(v652, v653) {
    this[ox412518(0x168)] = v652, this[ox412518(0x421)] = v653;
  }
  ["prepareTransformSelections"](v654) {
    var v655;
    let v656 = this[ox3e971b(0x168)][ox3e971b(0x39d)]() ?? [],
      v657 = this[ox3e971b(0x168)][ox3e971b(0x33b)]();
    if (v656["length"] === 0x0 || v657 == null) return null;
    let v658 = v654[ox3e971b(0x346)],
      v659 = [{
        id: ox3e971b(0x271),
        params: {
          unitId: v658,
          actions: null,
          textRanges: v656
        }
      }],
      v660 = this["_transformService"]["transformMutationsWithChangeset"](v654, v659);
    if (!(0x0, l[ox3e971b(0x2bd)])(v660)) throw v660[ox3e971b(0x1b1)];
    let v661 = (v655 = v660[ox3e971b(0x270)][0x0]) == null ? void 0x0 : v655["params"],
      v662 = v661 && typeof v661 == ox3e971b(0x14d) && ox3e971b(0x292) in v661 ? v661[ox3e971b(0x292)] : null;
    if (!we(v662)) return null;
    let v663 = Se(v654[ox3e971b(0x30b)]["some"](v291 => G(v291[ox3e971b(0x351)])) ? v662["filter"](v292 => !("tableId" in v292)) : v662, {
        ...v657,
        options: v657[ox3e971b(0x1d1)] ? {
          ...v657[ox3e971b(0x1d1)],
          wholeDocument: !0x1
        } : void 0x0
      }),
      v664 = {
        unitId: v658,
        subUnitId: v658
      };
    this[ox3e971b(0x168)][ox3e971b(0x34d)](v663, v664);
    let v665 = !0x0;
    return {
      commit: () => {
        v665 = !0x1;
      },
      rollback: () => {
        const v293 = ox3e971b;
        v665 && (v665 = !0x1, this[v293(0x168)][v293(0x34d)](v657, v664));
      }
    };
  }
};
W = C([S(0x0, (0x0, t["Inject"])(d["DocSelectionManagerService"])), S(0x1, l["ITransformService"])], W);
function Se(v890, v891) {
  let v892 = [],
    v893 = [];
  for (let v666 of v890) Ce(v666) ? v893[ox569e56(0x365)](v666) : v892[ox569e56(0x365)](v666);
  return {
    ...v891,
    textRanges: v892,
    rectRanges: v893
  };
}
function Ce(v894) {
  return ox26da26(0x3a1) in v894;
}
function we(v895) {
  return Array[ox58173f(0x2f9)](v895) && v895["every"](v667 => typeof v667 == ox58173f(0x14d) && !!v667 && ox58173f(0x243) in v667 && ox58173f(0x23e) in v667);
}
function G(v896) {
  return v896 === ox2da9c9(0x1e9) ? !0x0 : Array[ox2da9c9(0x2f9)](v896) ? v896["some"](v668 => G(v668)) : !v896 || typeof v896 != ox2da9c9(0x14d) ? !0x1 : Object[ox2da9c9(0x40d)](v896)[ox2da9c9(0x258)](v669 => G(v669));
}
let K = class extends t["Disposable"] {
  constructor(v670, v671, v672, v673, v674, v675, v676) {
    super(), this[ox3e350b(0x27f)] = v670, this[ox3e350b(0x414)] = v671, this["_docTransformStateCacheService"] = v672, this["_docTransformSelectionsService"] = v673, this[ox3e350b(0x280)] = v674, this[ox3e350b(0x327)] = v675, this[ox3e350b(0x3d8)] = v676, x(this, "_status$", new r[ox3e350b(0x18e)](e[ox3e350b(0x335)][ox3e350b(0x1fc)])), this[ox3e350b(0x2f0)]();
  }
  ["_initEntityListener"]() {
    this["disposeWithMe"](this[oxaea9d0(0x27f)][oxaea9d0(0x149)][oxaea9d0(0x32a)](v294 => {
      const v295 = oxaea9d0;
      v294 instanceof e["DocCollaborationEntity"] && v294["addHandlerCallback"]({
        onTransformIME: v86 => this[v295(0x414)][v295(0x23a)](v86),
        onTransformState: v87 => this[v295(0x359)][v295(0x1ae)](v87),
        onPrepareTransformSelections: v88 => this[v295(0x357)][v295(0x29f)](v88),
        onSyncEditingCollabCursor: v89 => this["_docSyncEditingCollabCursorService"][v295(0x26a)](v89),
        onTransformRemoteChangesetByIMECache: v90 => this[v295(0x414)]["transformRemoteChangeset"](v90),
        onTransformRemoteChangesetByStateCache: v91 => this[v295(0x359)]["transformRemoteChangeset"](v91)
      });
    }));
  }
};
K = C([S(0x0, (0x0, t["Inject"])(e["CollaborationController"])), S(0x1, (0x0, t["Inject"])(H)), S(0x2, (0x0, t["Inject"])(U)), S(0x3, (0x0, t["Inject"])(W)), S(0x4, (0x0, t["Inject"])(k)), S(0x5, n["IMessageService"]), S(0x6, (0x0, t["Inject"])(t["LocaleService"]))], K);
let q = class extends t["Disposable"] {
  constructor(v677, v678, v679, v680) {
    super(), this[ox216b7b(0x214)] = v677, this[ox216b7b(0x324)] = v678, this["_logService"] = v679, this["_collaborationSessionService"] = v680, x(this, ox216b7b(0x1bb), void 0x0), this[ox216b7b(0x2e6)]();
  }
  ["_init"]() {
    this[ox1feb49(0x39a)](), this[ox1feb49(0x2bb)](), this["_monkeyPatchLogService"](), this["_initUserListener"]();
  }
  ["_initUserListener"]() {
    this["disposeWithMe"](this["_collaborationSessionService"][ox5965d8(0x2e3)][ox5965d8(0x32a)](v296 => {
      const v297 = ox5965d8;
      this[v297(0x1bb)] = v296 == null ? void 0x0 : v296["memberID"];
    }));
  }
  ["_initWindowErrorListener"]() {
    let v681 = v298 => {
      var v299;
      this[ox1df8d5(0x348)]("error", ox1df8d5(0x1f0) + v298[ox1df8d5(0x21e)] + "\x20at\x20" + v298["filename"] + ":" + v298[ox1df8d5(0x369)] + ":" + v298[ox1df8d5(0x196)] + "\x0a" + (((v299 = v298[ox1df8d5(0x1b1)]) == null ? void 0x0 : v299[ox1df8d5(0x32d)]) || ""));
    };
    window[ox41ab84(0x3fc)](ox41ab84(0x1b1), v681), this["disposeWithMe"](() => {
      const v300 = ox41ab84;
      window[v300(0x1dd)](v300(0x1b1), v681);
    });
  }
  ["_initUnhandledRejectionListener"]() {
    let v682 = v301 => {
      this[ox1af72c(0x348)](ox1af72c(0x1b1), "[Unhandled\x20Rejection]:\x20" + v301["reason"]);
    };
    window["addEventListener"](ox18e1cc(0x265), v682), this[ox18e1cc(0x3de)](() => {
      const v302 = ox18e1cc;
      window[v302(0x1dd)](v302(0x265), v682);
    });
  }
  ["_monkeyPatchLogService"]() {
    let v683 = this["_logService"][ox28fe5b(0x1b1)][ox28fe5b(0x3aa)](this["_logService"]);
    this[ox28fe5b(0x154)][ox28fe5b(0x1b1)] = (...v303) => {
      const v304 = ox28fe5b;
      let v305 = v303[v304(0x1dc)](v92 => v92 instanceof Error ? v92[v304(0x21e)] + "\x0a" + v92[v304(0x32d)] : String(v92))[v304(0x201)]("\x20");
      this[v304(0x348)]("error", v304(0x41b) + v305), v683(...v303);
    }, this[ox28fe5b(0x3de)](() => {
      const v306 = ox28fe5b;
      this[v306(0x154)][v306(0x1b1)] = v683;
    });
  }
  ["_uploadLog"](v684, v685) {
    try {
      let v307 = {
        userId: this[ox434640(0x1bb)],
        logLabel: v684,
        content: v685
      };
      this[ox434640(0x324)][ox434640(0x3b9)](ox434640(0x147), {
        body: v307
      })[ox434640(0x2b3)](() => {});
    } catch {}
  }
};
q = C([S(0x0, (0x0, t["Inject"])(t["Injector"])), S(0x1, (0x0, t["Inject"])(m["HTTPService"])), S(0x2, t["ILogService"]), S(0x3, (0x0, t["Inject"])(e["CollaborationSessionService"]))], q);
function Te({
  state$: v897
}) {
  let v898 = (0x0, n[ox151d92(0x291)])(v897, null, !0x0);
  return v898 ? (0x0, c["jsxs"])(ox151d92(0x3e1), {
    "data-u-comp": ox151d92(0x424),
    role: ox151d92(0x2a2),
    className: ox151d92(0x1d0),
    children: [(0x0, c[ox151d92(0x1cc)])(o["WarningIcon"], {
      className: ox151d92(0x3eb)
    }), (0x0, c[ox151d92(0x1cc)])(ox151d92(0x2b5), {
      children: v898[ox151d92(0x374)]
    }), (0x0, c[ox151d92(0x1cc)])(a[ox151d92(0x1b6)], {
      size: "small",
      variant: ox151d92(0x15e),
      onClick: () => window[ox151d92(0x321)][ox151d92(0x2e4)](),
      children: v898[ox151d92(0x15d)]
    })]
  }) : null;
}
const Ee = "snapshot-loading-";
let J = class extends t["Disposable"] {
  constructor(v686, v687, v688, v689, v690, v691) {
    super(), this[ox8a20a4(0x143)] = v686, this[ox8a20a4(0x327)] = v687, this[ox8a20a4(0x3d8)] = v688, this[ox8a20a4(0x214)] = v689, this[ox8a20a4(0x31e)] = v691, x(this, "_timeoutState$", new r[ox8a20a4(0x18e)](null)), x(this, ox8a20a4(0x27b), new Set()), x(this, ox8a20a4(0x285), new Map()), x(this, ox8a20a4(0x2a1), new Map()), x(this, "timeoutState$", this["_timeoutState$"][ox8a20a4(0x3bd)]());
    let v692 = () => (0x0, s[ox8a20a4(0x340)])(Te, {
      state$: this["timeoutState$"]
    });
    this[ox8a20a4(0x3de)](v690["registerComponent"](n[ox8a20a4(0x41d)]["GLOBAL"], () => (0x0, n[ox8a20a4(0x24a)])(v692, this["_injector"]))), this[ox8a20a4(0x3de)](this["_snapshotLoadingService"][ox8a20a4(0x378)][ox8a20a4(0x32a)](v308 => {
      const v309 = ox8a20a4;
      this["_latestStates"] = v308, v308[v309(0x3e6)](v93 => this[v309(0x2cd)](v93));
    })), this[ox8a20a4(0x3de)](this[ox8a20a4(0x31e)][ox8a20a4(0x3ba)]["subscribe"](() => {
      const v310 = ox8a20a4;
      this[v310(0x2a1)][v310(0x3e6)](v94 => this[v310(0x2cd)](v94));
    }));
  }
  ["dispose"]() {
    this[ox3de7eb(0x27b)][ox3de7eb(0x3e6)](v311 => this[ox3de7eb(0x327)][ox3de7eb(0x375)](v311)), this["_messageIds"][ox3de7eb(0x158)](), this[ox3de7eb(0x285)][ox3de7eb(0x3e6)](({
      timeoutId: v312
    }) => clearTimeout(v312)), this["_blockProgressWatches"]["clear"](), this[ox3de7eb(0x2ea)][ox3de7eb(0x2c2)](), super[ox3de7eb(0x2ca)]();
  }
  ["_updateMessage"](v693) {
    let v694 = "" + Ee + v693[ox5d669d(0x1d6)];
    if (v693[ox5d669d(0x39f)] === l["SnapshotLoadStage"][ox5d669d(0x198)]) {
      this[ox5d669d(0x3a7)](v693[ox5d669d(0x1d6)]), this[ox5d669d(0x1c4)](v693[ox5d669d(0x1d6)]), this[ox5d669d(0x327)][ox5d669d(0x375)](v694), this[ox5d669d(0x27b)][ox5d669d(0x382)](v694);
      return;
    }
    if (!this[ox5d669d(0x1ef)](v693[ox5d669d(0x1d6)])) {
      this[ox5d669d(0x3a7)](v693[ox5d669d(0x1d6)]), this[ox5d669d(0x1c4)](v693[ox5d669d(0x1d6)]), this[ox5d669d(0x327)]["remove"](v694), this[ox5d669d(0x27b)][ox5d669d(0x382)](v694);
      return;
    }
    if (v693[ox5d669d(0x39f)] === l[ox5d669d(0x17e)][ox5d669d(0x171)]) {
      this["_clearBlockProgressWatch"](v693[ox5d669d(0x1d6)]), this["_clearTimeoutState"](v693["unitId"]), this[ox5d669d(0x327)][ox5d669d(0x2de)]({
        id: v694,
        type: a["MessageType"][ox5d669d(0x3d6)],
        content: this[ox5d669d(0x3d8)]["t"]("collaboration-client-ui.session.connection-failed")
      }), this[ox5d669d(0x27b)][ox5d669d(0x382)](v694);
      return;
    }
    if (v693[ox5d669d(0x39f)] !== l[ox5d669d(0x17e)][ox5d669d(0x35a)] || v693["totalBlocks"] <= 0xa) {
      this[ox5d669d(0x3a7)](v693["unitId"]), this[ox5d669d(0x327)][ox5d669d(0x375)](v694), this[ox5d669d(0x27b)][ox5d669d(0x382)](v694);
      return;
    }
    this[ox5d669d(0x252)](v693) || (this[ox5d669d(0x327)]["show"]({
      id: v694,
      type: a[ox5d669d(0x406)][ox5d669d(0x2a5)],
      duration: 0x1 / 0x0,
      content: this[ox5d669d(0x3d8)]["t"](ox5d669d(0x301)) + "\x20" + v693["loadedBlocks"] + "/" + v693[ox5d669d(0x3f6)]
    }), this[ox5d669d(0x27b)][ox5d669d(0x1f3)](v694));
  }
  ["_watchBlockProgress"](v695) {
    let v696 = this["_blockProgressWatches"][ox4b80df(0x330)](v695[ox4b80df(0x1d6)]);
    if ((v696 == null ? void 0x0 : v696[ox4b80df(0x159)]) === v695[ox4b80df(0x159)]) return v696[ox4b80df(0x1a7)];
    this[ox4b80df(0x3a7)](v695["unitId"]);
    let v697 = setTimeout(() => {
      const v313 = ox4b80df;
      let v314 = this[v313(0x285)][v313(0x330)](v695["unitId"]);
      if (!v314 || v314[v313(0x316)] !== v697) return;
      v314[v313(0x1a7)] = !0x0;
      let v315 = "" + Ee + v695[v313(0x1d6)];
      this["_messageService"][v313(0x375)](v315), this[v313(0x27b)]["delete"](v315), this[v313(0x2ea)][v313(0x2f8)]({
        unitId: v695["unitId"],
        content: this[v313(0x3d8)]["t"]("collaboration-client-ui.snapshotLoading.timeout", String(v695[v313(0x159)]), String(v695[v313(0x3f6)])),
        refreshLabel: this[v313(0x3d8)]["t"](v313(0x153))
      });
    }, 0xea60);
    return this[ox4b80df(0x285)][ox4b80df(0x1f9)](v695[ox4b80df(0x1d6)], {
      loadedBlocks: v695["loadedBlocks"],
      timedOut: !0x1,
      timeoutId: v697
    }), !0x1;
  }
  ["_clearBlockProgressWatch"](v698) {
    let v699 = this[ox621021(0x285)][ox621021(0x330)](v698);
    v699 && (clearTimeout(v699[ox621021(0x316)]), this[ox621021(0x285)][ox621021(0x382)](v698), this[ox621021(0x1c4)](v698));
  }
  ["_clearTimeoutState"](v700) {
    var v701;
    ((v701 = this[ox2f4f7c(0x2ea)][ox2f4f7c(0x29b)]) == null ? void 0x0 : v701[ox2f4f7c(0x1d6)]) === v700 && this["_timeoutState$"][ox2f4f7c(0x2f8)](null);
  }
  ["_isVisibleUnit"](v702) {
    let v703 = this["_urlService"][oxaa0c4e(0x25f)]("unit");
    return !v703 || v703 === v702;
  }
};
J = C([S(0x0, (0x0, t["Inject"])(l["SnapshotLoadingService"])), S(0x1, n["IMessageService"]), S(0x2, (0x0, t["Inject"])(t["LocaleService"])), S(0x3, (0x0, t["Inject"])(t["Injector"])), S(0x4, n["IUIPartsService"]), S(0x5, B)], J);
function De(v899) {
  var v900, v901;
  let v902 = (v900 = v899[ox518d06(0x140)]) == null ? void 0x0 : v900["stage"],
    v903 = ((v901 = v899[ox518d06(0x140)]) == null ? void 0x0 : v901["totalFormulasToCalculate"]) || 0x0;
  return v902 === h[ox518d06(0x33f)]["START_CALCULATION"] && v903 > 0x0;
}
function Oe(v904) {
  return v904[ox127c1b(0x2cc)] === h[ox127c1b(0x1e2)][ox127c1b(0x275)];
}
let Y = class extends t["Disposable"] {
  constructor(v704, v705, v706, v707, v708, v709, v710) {
    super(), this[ox2921e0(0x327)] = v704, this["_commandService"] = v705, this["_configService"] = v706, this[ox2921e0(0x324)] = v707, this[ox2921e0(0x1da)] = v708, this[ox2921e0(0x154)] = v709, this["_localeService"] = v710, x(this, ox2921e0(0x3ed), null), x(this, ox2921e0(0x28d), 0x0), x(this, ox2921e0(0x2ec), 0x0), x(this, ox2921e0(0x18b), []), x(this, ox2921e0(0x3ec), 0x0), this[ox2921e0(0x1d4)]();
  }
  ["_initCommandInterceptor"]() {
    this[oxee35f9(0x3de)](this[oxee35f9(0x3fb)][oxee35f9(0x1f5)]((v316, v317) => {
      const v318 = oxee35f9;
      if (v316["id"] !== h[v318(0x1a4)]["id"]) return;
      let v319 = v316[v318(0x351)];
      if (this[v318(0x41c)](v319[v318(0x3bc)] ?? []) && !this[v318(0x246)]()) throw this[v318(0x3d4)](v316, v317), this[v318(0x221)](), new t[v318(0x377)]();
    })), this[oxee35f9(0x3de)](this[oxee35f9(0x3fb)][oxee35f9(0x417)]((v320, v321) => {
      const v322 = oxee35f9;
      if (v320["id"] !== h[v322(0x2ba)]["id"]) return;
      let v323 = v320[v322(0x351)];
      if (De(v323)) {
        let v95 = (0x0, t[v322(0x3d1)])();
        this[v322(0x18b)]["push"](v95), this["_startCalculationLimit"](v95);
      } else {
        if (Oe(v323) && this[v322(0x18b)]["length"] > 0x0) {
          let v23 = this["_taskIds"][v322(0x247)]();
          this[v322(0x395)](v23);
        }
      }
    }));
  }
  ["dispose"]() {
    super[ox3119db(0x2ca)](), this["_clearPolling"](), this[ox3119db(0x18b)] = [], this[ox3119db(0x2ec)] = 0x0, this[ox3119db(0x28d)] = 0x0, this["_lastResponseTimestamp"] = 0x0;
  }
  async ["_checkAndWaitForCalculationPermission"](v711, v712) {
    for (let v324 = 0x0; v324 < 0x1e; v324++) try {
      if (await this["_getFormulaLimitStatus"](), this[ox170dda(0x246)]()) {
        this[ox170dda(0x34a)](v711, v712), this[ox170dda(0x327)][ox170dda(0x2de)]({
          content: this["_localeService"]["t"](ox170dda(0x376)),
          type: a[ox170dda(0x406)]["Success"]
        });
        return;
      }
      await new Promise(v24 => {
        const v25 = ox170dda;
        this["_pollingInterval"] = window[v25(0x329)](v24, 0x3e8);
      });
    } catch (v96) {
      this[ox170dda(0x154)][ox170dda(0x1b1)](v96);
    }
    this["_messageService"][ox170dda(0x2de)]({
      content: this[ox170dda(0x3d8)]["t"]("collaboration-client-ui.formula.calculation.unable"),
      type: a[ox170dda(0x406)]["Error"]
    });
  }
  ["_applyCommand"](v713, v714) {
    try {
      this[oxcc500b(0x3fb)]["executeCommand"](v713["id"], v713[oxcc500b(0x351)], v714);
    } catch (v325) {
      this["_logService"]["error"](v325);
    }
  }
  ["_setFormulaLimitStatus"](v715, v716) {
    v716 < this[ox519433(0x3ec)] || (this[ox519433(0x3ec)] = v716, this[ox519433(0x28d)] = Number["parseInt"](v715[ox519433(0x2f7)]), this[ox519433(0x2ec)] = Number["parseInt"](v715[ox519433(0x332)]));
  }
  async ["_startCalculationLimit"](v717) {
    let v718 = Date[ox4787d7(0x1b5)]();
    try {
      var v719, v720;
      let v326 = ((v719 = this[ox4787d7(0x24b)][ox4787d7(0x30d)](e["COLLABORATION_CLIENT_PLUGIN_CONFIG_KEY"])) == null ? void 0x0 : v719[ox4787d7(0x3af)]) || ox4787d7(0x1b8),
        v327 = (await this["_httpService"][ox4787d7(0x3b9)](v326, {
          body: JSON[ox4787d7(0x3bf)]({
            taskId: v717
          })
        }))["body"];
      if (((v720 = v327["error"]) == null ? void 0x0 : v720[ox4787d7(0x186)]) !== v[ox4787d7(0x2d0)]["OK"]) return;
      this["_setFormulaLimitStatus"](v327[ox4787d7(0x31f)], v718);
    } catch (v328) {
      this[ox4787d7(0x154)][ox4787d7(0x1b1)](v328);
    }
  }
  async ["_getFormulaLimitStatus"](v721) {
    let v722 = Date[ox595f36(0x1b5)]();
    try {
      var v723, v724;
      let v329 = ((v723 = this["_configService"][ox595f36(0x30d)](e["COLLABORATION_CLIENT_PLUGIN_CONFIG_KEY"])) == null ? void 0x0 : v723[ox595f36(0x388)]) || ox595f36(0x19c),
        v330 = v721 ? v329 + ox595f36(0x18c) + encodeURIComponent(v721) : v329,
        v331 = (await this[ox595f36(0x324)][ox595f36(0x330)](v330))[ox595f36(0x202)];
      if (((v724 = v331["error"]) == null ? void 0x0 : v724["code"]) !== v[ox595f36(0x2d0)]["OK"]) return;
      this[ox595f36(0x14f)](v331[ox595f36(0x31f)], v722);
    } catch (v332) {
      this[ox595f36(0x154)]["error"](v332);
    }
  }
  async ["_releaseCalculationLimit"](v725) {
    let v726 = Date[ox20a16b(0x1b5)]();
    try {
      var v727, v728;
      let v333 = ((v727 = this[ox20a16b(0x24b)][ox20a16b(0x30d)](e["COLLABORATION_CLIENT_PLUGIN_CONFIG_KEY"])) == null ? void 0x0 : v727["releaseFormulaLimitUrl"]) || ox20a16b(0x237),
        v334 = (await this["_httpService"][ox20a16b(0x3b9)](v333, {
          body: JSON[ox20a16b(0x3bf)]({
            taskId: v725
          })
        }))["body"];
      if (((v728 = v334[ox20a16b(0x1b1)]) == null ? void 0x0 : v728["code"]) !== v[ox20a16b(0x2d0)]["OK"]) return;
      this[ox20a16b(0x14f)](v334[ox20a16b(0x31f)], v726);
    } catch (v335) {
      this[ox20a16b(0x154)]["error"](v335);
    }
  }
  ["_checkCalculationAvailable"]() {
    return this[ox1c0f6c(0x28d)] === 0x0 || this[ox1c0f6c(0x28d)] - this[ox1c0f6c(0x2ec)] > 0x0;
  }
  ["_clearPolling"]() {
    this[ox319d4e(0x3ed)] &&= (clearTimeout(this[ox319d4e(0x3ed)]), null);
  }
  ["_showGuardMessage"]() {
    this[ox44724f(0x327)][ox44724f(0x2de)]({
      content: this[ox44724f(0x3d8)]["t"](ox44724f(0x1a9)),
      type: a[ox44724f(0x406)]["Loading"]
    });
  }
  ["_hasFormulaInDirtyRanges"](v729) {
    for (let v336 of v729) {
      let {
          unitId: v97,
          sheetId: v98,
          range: v99
        } = v336,
        v100 = this["_univerInstanceService"][ox2a9fe1(0x2fc)](v97, t[ox2a9fe1(0x16b)][ox2a9fe1(0x37d)]);
      if (!v100) continue;
      let v101 = v100[ox2a9fe1(0x193)](v98);
      if (!v101) continue;
      let v102 = v101[ox2a9fe1(0x2d6)]();
      for (let v26 = v99[ox2a9fe1(0x3d7)]; v26 <= v99[ox2a9fe1(0x38f)]; v26++) for (let v11 = v99[ox2a9fe1(0x3cf)]; v11 <= v99["endColumn"]; v11++) {
        let v4 = v102[ox2a9fe1(0x26d)](v26, v11);
        if (v4 && ((0x0, t[ox2a9fe1(0x3b0)])(v4["f"]) || (0x0, t[ox2a9fe1(0x1c0)])(v4["si"]))) return !0x0;
      }
    }
    return !0x1;
  }
};
Y = C([S(0x0, (0x0, t["Inject"])(n["IMessageService"])), S(0x1, t["ICommandService"]), S(0x2, t["IConfigService"]), S(0x3, (0x0, t["Inject"])(m["HTTPService"])), S(0x4, t["IUniverInstanceService"]), S(0x5, t["ILogService"]), S(0x6, (0x0, t["Inject"])(t["LocaleService"]))], Y);
let X = class extends t["Disposable"] {
  constructor(v730, v731, v732) {
    super(), this[ox1bc89b(0x24b)] = v730, this[ox1bc89b(0x29d)] = v731, this[ox1bc89b(0x31d)] = v732, x(this, ox1bc89b(0x2ee), new Map()), x(this, ox1bc89b(0x2f2), new Map()), x(this, ox1bc89b(0x2dc), !0x1);
  }
  ["disableLocalCache"]() {
    this["_disabled"] = !0x0;
  }
  ["enableLocalCache"]() {
    this[ox45dc52(0x2dc)] = !0x1;
  }
  get ["saveTaskMap"]() {
    return this[ox5c72c5(0x2f2)];
  }
  ["dispose"]() {
    this[ox594715(0x1af)]()[ox594715(0x315)](() => super[ox594715(0x2ca)]());
  }
  async ["loadOfflineData"](v733) {
    return this[ox97c37f(0x2dc)] ? null : this[ox97c37f(0x29d)][ox97c37f(0x368)]((0x0, e[ox97c37f(0x33e)])(v733));
  }
  async ["saveOfflineData"](v734, v735) {
    return !!this[ox204b58(0x29d)][ox204b58(0x2b8)]((0x0, e[ox204b58(0x33e)])(v734), v735);
  }
  async ["backupOfflineData"](v736, v737) {
    let v738 = this["_cachedData"][ox58d4b7(0x330)](v736) ?? (await this["_localStorageService"][ox58d4b7(0x368)]((0x0, e[ox58d4b7(0x33e)])(v736)));
    if (!v738) return;
    let v739 = Date["now"](),
      v740 = new Date(v739)[ox58d4b7(0x228)]();
    await this[ox58d4b7(0x29d)]["setItem"]((0x0, e[ox58d4b7(0x33e)])(v736) + ":backup:" + v739, {
      reason: v737,
      createdAt: v740,
      data: v738
    });
  }
  ["updateOfflineData"](v741, v742, v743, v744) {
    let v745 = this["_revisionService"]["getCurrentRevOfUnit"](v741);
    this["_cachedData"][ox39cecf(0x1f9)](v741, {
      unitID: v741,
      type: v742,
      awaitingChangeset: v743,
      mutations: v744,
      rev: v745
    }), this[ox39cecf(0x2f2)][ox39cecf(0x3b5)](v741) || this["_scheduleSaving"](v741);
  }
  ["_scheduleSaving"](v746) {
    let v747 = this["_getSaveTimeout"]();
    v747 === 0x0 ? this["_saveCache"](v746) : this[ox3d5503(0x2f2)][ox3d5503(0x1f9)](v746, window["setTimeout"](() => this[ox3d5503(0x37c)](v746), v747));
  }
  ["_getSaveTimeout"]() {
    return this["_configService"][ox9e0371(0x30d)](e["LOCAL_CACHE_INTERVAL_KEY"]) ?? e[ox9e0371(0x21b)];
  }
  ["_saveCache"](v748) {
    let v749 = this["_saveTaskMap"][ox3031fa(0x330)](v748);
    return v749 !== void 0x0 && window[ox3031fa(0x3d9)](v749), this[ox3031fa(0x29d)]["setItem"]((0x0, e["getLocalCacheKey"])(v748), this[ox3031fa(0x2ee)][ox3031fa(0x330)](v748))["then"](() => this[ox3031fa(0x2f2)][ox3031fa(0x382)](v748));
  }
  async ["exhaustSavingTask"]() {
    let v750 = [];
    this[ox827081(0x2f2)][ox827081(0x3e6)]((v337, v338) => {
      const v339 = ox827081;
      window[v339(0x3d9)](v337), v750["push"](this["_saveCache"](v338)["then"](() => {
        const v103 = v339;
        this["_saveTaskMap"][v103(0x382)](v338);
      }));
    }), await Promise[ox827081(0x1a1)](v750);
  }
};
X = C([S(0x0, t["IConfigService"]), S(0x1, t["ILocalStorageService"]), S(0x2, (0x0, t["Inject"])(l["RevisionService"]))], X);
var ke = class extends t["RxDisposable"] {
  constructor() {
    super(), x(this, ox54107d(0x3ba), void 0x0), this[ox54107d(0x3ba)] = (0x0, r[ox54107d(0x41a)])(window, ox54107d(0x2a8))["pipe"]((0x0, r[ox54107d(0x3d0)])(this["dispose$"]), (0x0, r["shareReplay"])({
      bufferSize: 0x1,
      refCount: !0x0
    }), (0x0, r[ox54107d(0x212)])(void 0x0));
  }
  ["setParam"](v751, v752, v753 = !0x1) {
    let v754 = new URL(window[ox101afd(0x321)][ox101afd(0x1d2)]);
    v754[ox101afd(0x20a)][ox101afd(0x1f9)](v751, v752), v753 ? window[ox101afd(0x317)][ox101afd(0x1fd)]("", "", v754[ox101afd(0x2a4)]()) : window[ox101afd(0x317)][ox101afd(0x1aa)]("", "", v754[ox101afd(0x2a4)]());
  }
  ["removeParam"](v755, v756 = !0x1) {
    let v757 = new URL(window[ox52745c(0x321)][ox52745c(0x1d2)]);
    v757[ox52745c(0x20a)][ox52745c(0x382)](v755), v756 ? window["history"]["replaceState"]("", "", v757[ox52745c(0x2a4)]()) : window["history"][ox52745c(0x1aa)]("", "", v757["toString"]());
  }
  ["getParam"](v758) {
    return new URL(window[ox2d26a8(0x321)][ox2d26a8(0x1d2)])[ox2d26a8(0x20a)][ox2d26a8(0x330)](v758) ?? void 0x0;
  }
};
let Z = class extends t["Plugin"] {
  constructor(v759 = oe, v760, v761, v762, v763) {
    super(), this[ox2d2a08(0x161)] = v759, this[ox2d2a08(0x1df)] = v760, this["_injector"] = v761, this[ox2d2a08(0x24b)] = v762, this["_commandService"] = v763;
    let {
      ...v764
    } = (0x0, t[ox2d2a08(0x176)])({}, oe, this[ox2d2a08(0x161)]);
    this[ox2d2a08(0x24b)][ox2d2a08(0x3ef)]("collaboration-client-ui.config", v764);
  }
  ["onStarting"]() {
    this[ox496ea1(0x21c)](), this[ox496ea1(0x3de)](this[ox496ea1(0x3fb)][ox496ea1(0x3f3)](E)), this["_initDependencies"]();
  }
  ["onRendered"]() {
    this["_registerRenderDependencies"]();
  }
  ["_registerDependencies"]() {
    var v765;
    let v766 = [[O], [Y], [B, {
      useClass: ke
    }], [m[ox2c5981(0x30e)], {
      useClass: m["WebSocketService"]
    }], [e[ox2c5981(0x35d)], {
      useClass: X
    }], [w], [z], [M], [R], [V], [J]];
    this["_config"][ox2c5981(0x1ee)] !== !0x1 && v766[ox2c5981(0x365)]([W], [H], [U], [k], [K], [D]), this[ox2c5981(0x161)]["enableFrontendLog"] && v766[ox2c5981(0x365)]([q]), (0x0, t[ox2c5981(0x2dd)])(this[ox2c5981(0x214)], (0x0, t["mergeOverrideWithDependencies"])(v766, (v765 = this["_config"]) == null ? void 0x0 : v765["override"]));
  }
  ["_registerRenderDependencies"]() {
    this[oxe3aa1d(0x161)][oxe3aa1d(0x1ee)] !== !0x1 && this[oxe3aa1d(0x3de)](this[oxe3aa1d(0x1df)][oxe3aa1d(0x13c)](t[oxe3aa1d(0x16b)]["UNIVER_DOC"], [P])), this["disposeWithMe"](this[oxe3aa1d(0x1df)]["registerRenderModule"](t[oxe3aa1d(0x16b)][oxe3aa1d(0x37d)], [F]));
  }
  ["_initDependencies"]() {
    (0x0, t["touchDependencies"])(this[ox4c1ac3(0x214)], [[M], [R], [w], [z], [V], [Y], [J]]), this[ox4c1ac3(0x161)]["enableDocumentCollaborationUI"] !== !0x1 && (0x0, t["touchDependencies"])(this[ox4c1ac3(0x214)], [[K], [D]]), this[ox4c1ac3(0x161)][ox4c1ac3(0x372)] && (0x0, t[ox4c1ac3(0x1e0)])(this["_injector"], [[q]]);
  }
};
x(Z, "pluginName", "UNIVER_COLLABORATION_CLIENT_WEB_PLUGIN"), x(Z, "packageName", ie), x(Z, "version", ae), Z = C([(0x0, t["DependentOn"])(u["UniverLicensePlugin"], d["UniverDocsPlugin"], p["UniverRenderEnginePlugin"], m["UniverNetworkPlugin"], l["UniverCollaborationPlugin"], f["UniverDocsUIPlugin"], e["UniverCollaborationClientPlugin"]), S(0x1, p["IRenderManagerService"]), S(0x2, (0x0, t["Inject"])(t["Injector"])), S(0x3, t["IConfigService"]), S(0x4, t["ICommandService"])], Z);
let Q = class extends e["CollaborationSocketService"] {
  constructor(v767, v768, v769, v770, v771) {
    super(v767, v768, v769, v770, v771);
  }
  async ["createSocket"](v772) {
    let v773 = await this[ox5ed07d(0x300)](),
      v774 = this["_createSocketURL"](v772, v773);
    return this[ox5ed07d(0x286)](v774);
  }
  ["_createSocketURL"](v775, v776) {
    let v777 = typeof window > "u" ? new URL(v775) : new URL(v775, window[ox3f5c7c(0x321)][ox3f5c7c(0x2ad)]);
    v777[ox3f5c7c(0x20a)][ox3f5c7c(0x1f9)]("sessionTicket", v776);
    let v778 = typeof window > "u" ? new URLSearchParams() : new URLSearchParams(window[ox3f5c7c(0x321)][ox3f5c7c(0x349)]);
    return v778[ox3f5c7c(0x330)](ox3f5c7c(0x2fe)) && v777[ox3f5c7c(0x20a)][ox3f5c7c(0x1f9)](ox3f5c7c(0x2fe), v778["get"](ox3f5c7c(0x2fe))), v777[ox3f5c7c(0x2a4)]();
  }
  async ["_getSessionTicket"]() {
    var v779;
    let v780 = this["_configService"][ox2f6978(0x30d)](e[ox2f6978(0x1ff)]),
      v781 = (v780 == null ? void 0x0 : v780[ox2f6978(0x160)]) ?? e[ox2f6978(0x415)];
    return ((v779 = (await this[ox2f6978(0x324)][ox2f6978(0x330)](v781, {
      headers: {
        "Content-Type": ox2f6978(0x15f)
      }
    }))["body"]) == null ? void 0x0 : v779[ox2f6978(0x41e)]) ?? "";
  }
};
Q = C([S(0x0, (0x0, t["Inject"])(t["Injector"])), S(0x1, (0x0, t["Inject"])(m["HTTPService"])), S(0x2, t["IConfigService"]), S(0x3, t["ILogService"]), S(0x4, l["ISnapshotServerService"])], Q);
let $ = class extends t["Disposable"] {
  constructor(v782, v783, v784) {
    super(), this[ox1d4428(0x333)] = v782, this["_httpService"] = v783, this[ox1d4428(0x24b)] = v784;
  }
  async ["runOnServer"](v785, v786, v787, ...v788) {
    let v789 = this[ox138877(0x333)][ox138877(0x1e8)]();
    if (!v789) throw Error(ox138877(0x2d1));
    let v790 = (this[ox138877(0x24b)]["getConfig"](e["REMOTE_UNISCRIPT_EXECUTION_ENDPOINT_KEY"]) ?? e["DEFAULT_REMOTE_UNISCRIPT_EXECUTION_ENDPOINT"]) + "/" + v785 + "/run/" + v786,
      v791 = {
        scriptId: v785,
        runId: new URL(window[ox138877(0x321)][ox138877(0x1d2)])[ox138877(0x20a)]["get"](ox138877(0x2fe)) ?? "",
        function: v786,
        unitId: v789["getUnitId"](),
        argsOfFunction: JSON[ox138877(0x3bf)](v788),
        invokeId: v787["invokeId"] ?? "",
        executionId: v787["executionId"] ?? ""
      };
    try {
      let v340 = await this[ox138877(0x324)][ox138877(0x3b9)](v790, {
        body: v791
      });
      return v340[ox138877(0x202)][ox138877(0x1b1)] && v340[ox138877(0x202)][ox138877(0x1b1)][ox138877(0x186)] !== v[ox138877(0x2d0)]["OK"] ? "Failed" : v340[ox138877(0x202)][ox138877(0x1b9)];
    } catch {
      return "Failed";
    }
  }
};
$ = C([S(0x0, t["IUniverInstanceService"]), S(0x1, (0x0, t["Inject"])(m["HTTPService"])), S(0x2, t["IConfigService"])], $);
const Ae = 0x7530,
  je = "ACTIVE_UNIT_EVENT_CHANNEL";
var Me = class extends t["Disposable"] {
  constructor() {
    super(), x(this, "_id", (0x0, t["generateRandomId"])()), x(this, ox164b33(0x3da), new Set()), x(this, ox164b33(0x195), new Map()), x(this, ox164b33(0x24d), null), x(this, ox164b33(0x2d5), new Map()), x(this, ox164b33(0x179), new Map()), this[ox164b33(0x2e6)]();
  }
  ["dispose"]() {
    super[ox4eef1(0x2ca)](), this["_clearOtherTimers"]["forEach"]((v341, v342) => this[ox4eef1(0x22a)](v342)), this[ox4eef1(0x24d)] && window["clearInterval"](this["_heartbeatTimer"]);
  }
  ["getUnitStatus$"](v792) {
    return this["_ensureSubject"](v792)[ox3b2234(0x3df)]((0x0, r[ox3b2234(0x3b3)])());
  }
  ["editingUnit"](v793) {
    this["_selfUnitIDs"]["size"] === 0x0 && this["_scheduleHeartbeat"](), this[ox58ee7a(0x3da)][ox58ee7a(0x1f3)](v793), this["_send"]({
      type: 0x0,
      memberID: this[ox58ee7a(0x1e5)],
      unitIDs: [v793],
      isForwarded: !0x1
    });
  }
  ["disposeUnit"](v794) {
    this[ox526a2f(0x3da)][ox526a2f(0x382)](v794), this[ox526a2f(0x3da)][ox526a2f(0x3f5)] === 0x0 && this[ox526a2f(0x24d)] && window[ox526a2f(0x37f)](this[ox526a2f(0x24d)]);
  }
  ["_init"]() {
    this["disposeWithMe"]((0x0, t[ox429a25(0x1bd)])((0x0, r["fromEvent"])(window, ox429a25(0x2ce))["subscribe"](v343 => {
      const v344 = ox429a25;
      if (v343[v344(0x36c)] !== je || !v343[v344(0x232)]) return;
      let v345 = JSON[v344(0x361)](v343[v344(0x232)]);
      this[v344(0x2d9)](v345);
    }))), window[ox429a25(0x3fc)]("unload", () => this[ox429a25(0x337)]({
      type: 0x1,
      memberID: this["_id"],
      unitIDs: Array["from"](this[ox429a25(0x3da)])
    }));
  }
  ["_handleEvent"](v795) {
    switch (v795[ox497631(0x331)]) {
      case 0x0:
        this["_handleJoinEvent"](v795);
        break;
      case 0x1:
        this["_handleLeaveEvent"](v795);
        break;
      case 0x2:
        this["_handleHeartbeatEvent"](v795);
        break;
    }
  }
  ["_handleJoinEvent"](v796) {
    let {
      unitIDs: v797,
      memberID: v798,
      isForwarded: v799
    } = v796;
    v797[ox5de639(0x3e6)](v346 => {
      const v347 = ox5de639;
      if (!v799 && this[v347(0x195)]["has"](v346) && this["_ensureSubject"](v346)[v347(0x2f8)](e[v347(0x402)]["OTHER_CLIENTS_EDITING"]), !this[v347(0x195)][v347(0x3b5)](v346) || !this[v347(0x195)][v347(0x330)](v346)[v347(0x3b5)](v798)) {
        let v104 = this[v347(0x195)][v347(0x330)](v346) || new Set();
        v104[v347(0x1f3)](v798), this[v347(0x195)][v347(0x1f9)](v346, v104), this["_scheduleClearOtherTimer"](v798);
      }
    }), v799 || this["_send"]({
      type: 0x0,
      memberID: this[ox5de639(0x1e5)],
      unitIDs: [...this[ox5de639(0x3da)]],
      isForwarded: !0x0
    });
  }
  ["_scheduleClearOtherTimer"](v800) {
    this[ox2bc388(0x22a)](v800);
    let v801 = window[ox2bc388(0x329)](() => {
      const v348 = ox2bc388;
      this[v348(0x195)][v348(0x3e6)](v105 => {
        v105["delete"](v800);
      });
    }, Ae * 0x2);
    this[ox2bc388(0x2d5)][ox2bc388(0x1f9)](v800, v801);
  }
  ["_removeClearOtherTimer"](v802) {
    if (this["_clearOtherTimers"][ox275a89(0x3b5)](v802)) {
      let v349 = this[ox275a89(0x2d5)]["get"](v802);
      v349 && window[ox275a89(0x3d9)](v349), this[ox275a89(0x2d5)]["set"](v802, null);
    }
  }
  ["_handleLeaveEvent"](v803) {
    let {
      memberID: v804,
      unitIDs: v805
    } = v803;
    v805[ox3f739c(0x3e6)](v350 => {
      const v351 = ox3f739c;
      var v352;
      let v353 = this[v351(0x195)][v351(0x330)](v350);
      v353 && (v353[v351(0x382)](v804), (v352 = this[v351(0x182)](v350)) == null || v352[v351(0x2f8)](v353[v351(0x3f5)] === 0x0 ? e[v351(0x402)]["NO_OTHER_CLIENTS_EDITING"] : e[v351(0x402)][v351(0x30f)]));
    }), this[ox3f739c(0x22a)](v804);
  }
  ["_handleHeartbeatEvent"](v806) {
    this[ox4a9074(0x13b)](v806[ox4a9074(0x296)]);
  }
  ["_send"](v807) {
    localStorage[ox38db48(0x2b8)](je, JSON[ox38db48(0x3bf)](v807));
  }
  ["_scheduleHeartbeat"]() {
    this[ox4069dd(0x24d)] = window[ox4069dd(0x3bb)](() => {
      const v354 = ox4069dd;
      this[v354(0x337)]({
        type: 0x2,
        memberID: this[v354(0x1e5)]
      });
    }, Ae);
  }
  ["_ensureSubject"](v808) {
    return this[ox22be52(0x179)][ox22be52(0x3b5)](v808) || this["_unitStatus"][ox22be52(0x1f9)](v808, new r[ox22be52(0x18e)](e[ox22be52(0x402)][ox22be52(0x238)])), this[ox22be52(0x179)][ox22be52(0x330)](v808);
  }
};
Object["defineProperty"](exports, "BrowserCollaborationSocketService", {
  enumerable: !0x0,
  get: function () {
    return Q;
  }
}), Object["defineProperty"](exports, "DesktopCollaborationStatusDisplayController", {
  enumerable: !0x0,
  get: function () {
    return w;
  }
}), exports["IURLService"] = B, Object["defineProperty"](exports, "RemoteUniscriptService", {
  enumerable: !0x0,
  get: function () {
    return $;
  }
}), exports["SheetCollabCursorShape"] = ge, Object["defineProperty"](exports, "UniverCollaborationClientUIPlugin", {
  enumerable: !0x0,
  get: function () {
    return Z;
  }
}), exports["WebBrowserSingleActiveUnitService"] = Me;
