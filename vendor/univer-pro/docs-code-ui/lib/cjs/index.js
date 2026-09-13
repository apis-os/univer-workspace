Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
var e = Object.create,
  t = Object.defineProperty,
  n = Object.getOwnPropertyDescriptor,
  r = Object.getOwnPropertyNames,
  i = Object.getPrototypeOf,
  a = Object.prototype["hasOwnProperty"],
  o = (var_core_value_sigDD51, var_core_value_sigF057, var_core_value_sig72F6, var_core_value_sig9FBA) => {
    if (var_core_value_sigF057 && typeof var_core_value_sigF057 == "object" || typeof var_core_value_sigF057 == "function") {
      for (var var_core_value_sigFE01 = r(var_core_value_sigF057), var_core_value_sigA2CE = 0, var_core_value_sig1975 = var_core_value_sigFE01.length, var_core_value_sig6EA1; var_core_value_sigA2CE < var_core_value_sig1975; var_core_value_sigA2CE++) var_core_value_sig6EA1 = var_core_value_sigFE01[var_core_value_sigA2CE], !a.call(var_core_value_sigDD51, var_core_value_sig6EA1) && var_core_value_sig6EA1 !== var_core_value_sig72F6 && t(var_core_value_sigDD51, var_core_value_sig6EA1, {
        get: (var_core_value_sig3D7D => var_core_value_sigF057[var_core_value_sig3D7D]).bind(null, var_core_value_sig6EA1),
        enumerable: !(var_core_value_sig9FBA = n(var_core_value_sigF057, var_core_value_sig6EA1)) || var_core_value_sig9FBA.enumerable
      });
    }
    return var_core_value_sigDD51;
  },
  s = (var_core_value_sig029F, var_core_value_sig3767, var_core_value_sig670B) => (var_core_value_sig670B = var_core_value_sig029F == null ? {} : e(i(var_core_value_sig029F)), o(var_core_value_sig3767 || !var_core_value_sig029F || !var_core_value_sig029F.__esModule ? t(var_core_value_sig670B, "default", {
    value: var_core_value_sig029F,
    enumerable: true
  }) : var_core_value_sig670B, var_core_value_sig029F));
let c = require("@univerjs-pro/docs-code"),
  l = require("@univerjs/core"),
  u = require("@univerjs/docs-ui"),
  d = require("@univerjs/ui"),
  f = require("@univerjs/engine-render"),
  p = require("rxjs"),
  ee = require("@univerjs-pro/license"),
  m = require("@univerjs/docs"),
  h = require("@univerjs/icons"),
  g = require("@univerjs/design"),
  _ = require("react/jsx-runtime"),
  v = require("@univerjs-pro/docs-column"),
  y = require("prismjs");
y = s(y), require("prismjs/components/prism-bash.js"), require("prismjs/components/prism-c.js"), require("prismjs/components/prism-cpp.js"), require("prismjs/components/prism-csharp.js"), require("prismjs/components/prism-css.js"), require("prismjs/components/prism-go.js"), require("prismjs/components/prism-java.js"), require("prismjs/components/prism-javascript.js"), require("prismjs/components/prism-json.js"), require("prismjs/components/prism-kotlin.js"), require("prismjs/components/prism-markdown.js"), require("prismjs/components/prism-markup.js"), require("prismjs/components/prism-php.js"), require("prismjs/components/prism-python.js"), require("prismjs/components/prism-ruby.js"), require("prismjs/components/prism-rust.js"), require("prismjs/components/prism-sql.js"), require("prismjs/components/prism-swift.js"), require("prismjs/components/prism-typescript.js"), require("prismjs/components/prism-yaml.js");
const b = [{
  label: "Plain text",
  value: "plaintext"
}, {
  label: "JavaScript",
  value: "javascript"
}, {
  label: "TypeScript",
  value: "typescript"
}, {
  label: "JSON",
  value: "json"
}, {
  label: "HTML / XML",
  value: "markup"
}, {
  label: "CSS",
  value: "css"
}, {
  label: "Markdown",
  value: "markdown"
}, {
  label: "YAML",
  value: "yaml"
}, {
  label: "SQL",
  value: "sql"
}, {
  label: "Bash",
  value: "bash"
}, {
  label: "Python",
  value: "python"
}, {
  label: "Java",
  value: "java"
}, {
  label: "C",
  value: "c"
}, {
  label: "C++",
  value: "cpp"
}, {
  label: "C#",
  value: "csharp"
}, {
  label: "Go",
  value: "go"
}, {
  label: "Rust",
  value: "rust"
}, {
  label: "Ruby",
  value: "ruby"
}, {
  label: "PHP",
  value: "php"
}, {
  label: "Swift",
  value: "swift"
}, {
  label: "Kotlin",
  value: "kotlin"
}];
function te(var_core_value_sig6912) {
  var var_core_value_sigE235;
  return ((var_core_value_sigE235 = b.find(var_core_value_sig8CFA => var_core_value_sig8CFA.value === var_core_value_sig6912)) == null ? undefined : var_core_value_sigE235.label) ?? var_core_value_sig6912;
}
const x = "docs-code-ui.menu.language";
function S(var_core_value_sig7664) {
  return {
    id: c.DocsCodeInsertCommand["id"],
    type: d.MenuItemType["BUTTON"],
    icon: "CodeBlockIcon",
    title: "docs-code-ui.menu.code",
    tooltip: "docs-code-ui.menu.code",
    hidden$: (0, d.getMenuHiddenObservable)(var_core_value_sig7664, l.UniverInstanceType["UNIVER_DOC"]),
    disabled$: (0, u.disableMenuWhenHeaderFooterEditing)(var_core_value_sig7664)
  };
}
function C(var_core_value_sig2281) {
  return {
    ...S(var_core_value_sig2281),
    hidden$: (0, p.combineLatest)([(0, d.getMenuHiddenObservable)(var_core_value_sig2281, l.UniverInstanceType["UNIVER_DOC"]), (0, u.hideMenuWhenSelectionInBlockRange)(var_core_value_sig2281)]).pipe((0, p.map)(([var_core_value_sig2E11, var_core_value_sig5B69]) => var_core_value_sig2E11 || var_core_value_sig5B69))
  };
}
function w(var_core_value_sig5E86) {
  return {
    id: c.DocsCodeInsertBelowCommand["id"],
    type: d.MenuItemType["BUTTON"],
    icon: "CodeBlockIcon",
    title: "docs-code-ui.menu.code",
    hidden$: (0, d.getMenuHiddenObservable)(var_core_value_sig5E86, l.UniverInstanceType["UNIVER_DOC"]),
    disabled$: (0, u.disableMenuWhenHeaderFooterEditing)(var_core_value_sig5E86)
  };
}
function ne(var_core_value_sig6998) {
  return {
    id: x,
    type: d.MenuItemType["SUBITEMS"],
    icon: "CodeBlockIcon",
    title: "docs-code-ui.language.title",
    hidden$: (0, p.combineLatest)([(0, d.getMenuHiddenObservable)(var_core_value_sig6998, l.UniverInstanceType["UNIVER_DOC"]), re(var_core_value_sig6998)]).pipe((0, p.map)(([var_core_value_sigB098, var_core_value_sigCE71]) => var_core_value_sigB098 || var_core_value_sigCE71))
  };
}
function re(var_core_value_sigF639) {
  let var_core_value_sigEAE5 = var_core_value_sigF639.get(l.IUniverInstanceService),
    var_core_value_sigE94C = var_core_value_sigF639.get(f.IRenderManagerService);
  return new p["Observable"](var_core_value_sig21D8 => {
    let var_core_value_sig2B65 = null,
      var_core_value_sigD7EA = var_core_value_sigEAE5.focused$["subscribe"](var_core_value_sigE9ED => {
        if (var_core_value_sig2B65 == null || var_core_value_sig2B65.unsubscribe(), var_core_value_sig2B65 = null, !var_core_value_sigE9ED || var_core_value_sigEAE5.getUnitType(var_core_value_sigE9ED) !== l.UniverInstanceType["UNIVER_DOC"]) {
          var_core_value_sig21D8.next(true);
          return;
        }
        let var_core_value_sigB577 = var_core_value_sigE94C.getRenderUnitById(var_core_value_sigE9ED),
          var_core_value_sig9572 = var_core_value_sigB577 == null ? undefined : var_core_value_sigB577.with(u.DocParagraphMenuService);
        if (!var_core_value_sig9572) {
          var_core_value_sig21D8.next(true);
          return;
        }
        let var_core_value_sigD873 = (var_core_value_sig27E5 = var_core_value_sig9572.activeTarget) => {
          var var_core_value_sig8061;
          var_core_value_sig21D8.next((var_core_value_sig27E5 == null ? undefined : var_core_value_sig27E5.kind) !== "blockRange" || ((var_core_value_sig8061 = var_core_value_sig27E5.blockRange) == null ? undefined : var_core_value_sig8061.blockType) !== l.DocumentBlockRangeType["CODE"]);
        };
        var_core_value_sigD873(), var_core_value_sig2B65 = var_core_value_sig9572.activeTarget$["subscribe"](var_core_value_sigD873);
      });
    return () => {
      var_core_value_sig2B65 == null || var_core_value_sig2B65.unsubscribe(), var_core_value_sigD7EA.unsubscribe();
    };
  });
}
function ie(var_core_value_sig6D47) {
  return var_core_value_sigB33B => ({
    id: c.DocsCodeUpdateCommand["id"] + "." + var_core_value_sig6D47.value,
    commandId: c.DocsCodeUpdateCommand["id"],
    type: d.MenuItemType["BUTTON"],
    label: var_core_value_sig6D47.label,
    params: {
      config: {
        language: var_core_value_sig6D47.value
      }
    },
    hidden$: (0, d.getMenuHiddenObservable)(var_core_value_sigB33B, l.UniverInstanceType["UNIVER_DOC"])
  });
}
const ae = b.reduce((var_core_value_sigCB82, var_core_value_sigCF4E, var_core_value_sig6CAD) => (var_core_value_sigCB82[c.DocsCodeUpdateCommand["id"] + "." + var_core_value_sigCF4E.value] = {
  order: var_core_value_sig6CAD,
  menuItemFactory: ie(var_core_value_sigCF4E)
}, var_core_value_sigCB82), {});
(0, u.getDocBlockRangeMenuId)(l.DocumentBlockRangeType["CODE"]);
const T = {
    [d.RibbonInsertGroup["MEDIA"]]: {
      [c.DocsCodeInsertCommand["id"]]: {
        order: 7,
        menuItemFactory: S
      }
    }
  },
  oe = {
    [d.MenuManagerPosition["RIBBON"]]: {
      [d.RibbonPosition["INSERT"]]: T
    },
    [u.FLOAT_TOOLBAR_MENU_POSITION]: {
      [u.FLOAT_TEXT_STYLE_MENU_ID]: {
        [c.DocsCodeInsertCommand["id"]]: {
          order: 12,
          menuItemFactory: C
        }
      }
    }
  },
  E = {
    ...T,
    [u.FLOAT_TEXT_STYLE_MENU_ID]: {
      [c.DocsCodeInsertCommand["id"]]: {
        order: 12,
        menuItemFactory: C
      }
    },
    [d.ContextMenuPosition["PARAGRAPH"]]: {
      [d.ContextMenuGroup["LAYOUT"]]: {
        [x]: {
          order: 0,
          menuItemFactory: ne,
          ...ae
        },
        [u.INSERT_BELLOW_MENU_ID]: {
          [c.DocsCodeInsertBelowCommand["id"]]: {
            order: 7,
            menuItemFactory: w
          }
        }
      },
      [u.DOC_CONTENT_INSERT_MENU_ID]: {
        [d.ContextMenuGroup["LAYOUT"]]: {
          [c.DocsCodeInsertBelowCommand["id"]]: {
            order: 7,
            menuItemFactory: w
          }
        }
      },
      [u.EMPTY_PARAGRAPH_MENU_ID]: {
        [d.ContextMenuGroup["LAYOUT"]]: {
          [c.DocsCodeInsertCommand["id"]]: {
            order: 7,
            menuItemFactory: S
          }
        }
      },
      [u.DOC_PARAGRAPH_T_INSERT_MENU_ID]: {
        quickBottom: {
          [c.DocsCodeInsertCommand["id"]]: {
            order: 2,
            menuItemFactory: S
          }
        }
      },
      [u.DOC_PARAGRAPH_T_EDIT_MENU_ID]: {
        quickBottom: {
          [c.DocsCodeInsertCommand["id"]]: {
            order: 3,
            menuItemFactory: S
          }
        }
      },
      [u.DOC_PARAGRAPH_T_INSERT_BELOW_MENU_ID]: {
        quickBottom: {
          [c.DocsCodeInsertBelowCommand["id"]]: {
            order: 2,
            menuItemFactory: w
          }
        }
      }
    }
  };
var se = "@univerjs-pro/docs-code-ui",
  ce = "1.0.0-insiders.20260907-70fc579";
const D = {};
function O(var_core_value_sig8CF5, var_core_value_sigDDD7) {
  return function (var_core_value_sig24B9, var_core_value_sigE627) {
    var_core_value_sigDDD7(var_core_value_sig24B9, var_core_value_sigE627, var_core_value_sig8CF5);
  };
}
function k(var_core_value_sigB2CE, var_core_value_sig443C, var_core_value_sig39B1, var_core_value_sig210D) {
  var var_core_value_sigB4B4 = arguments.length,
    var_core_value_sigD407 = var_core_value_sigB4B4 < 3 ? var_core_value_sig443C : var_core_value_sig210D === null ? var_core_value_sig210D = Object.getOwnPropertyDescriptor(var_core_value_sig443C, var_core_value_sig39B1) : var_core_value_sig210D,
    var_core_value_sig63F3;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sigD407 = Reflect.decorate(var_core_value_sigB2CE, var_core_value_sig443C, var_core_value_sig39B1, var_core_value_sig210D);else {
    for (var var_core_value_sig6A71 = var_core_value_sigB2CE.length - 1; var_core_value_sig6A71 >= 0; var_core_value_sig6A71--) (var_core_value_sig63F3 = var_core_value_sigB2CE[var_core_value_sig6A71]) && (var_core_value_sigD407 = (var_core_value_sigB4B4 < 3 ? var_core_value_sig63F3(var_core_value_sigD407) : var_core_value_sigB4B4 > 3 ? var_core_value_sig63F3(var_core_value_sig443C, var_core_value_sig39B1, var_core_value_sigD407) : var_core_value_sig63F3(var_core_value_sig443C, var_core_value_sig39B1)) || var_core_value_sigD407);
  }
  return var_core_value_sigB4B4 > 3 && var_core_value_sigD407 && Object.defineProperty(var_core_value_sig443C, var_core_value_sig39B1, var_core_value_sigD407), var_core_value_sigD407;
}
let A = class extends l.Disposable {
  constructor(var_core_value_sigEF3E, var_core_value_sig273D, var_core_value_sig9A0D) {
    super(), this._clipboardService = var_core_value_sigEF3E, this._pasteAdapterService = var_core_value_sig273D, this._model = var_core_value_sig9A0D, this.disposeWithMe(this._clipboardService["addClipboardHook"]({
      onCopyDocData: (var_core_value_sigA12B, var_core_value_sigF230) => this._appendConfig(var_core_value_sigA12B, var_core_value_sigF230.sourceDocuments)
    })), this.disposeWithMe(this._pasteAdapterService["registerAdapter"]({
      getPasteMutationInfos: var_core_value_sig09B8 => this._getPasteMutationInfos(var_core_value_sig09B8)
    }));
  }
  _appendConfig(var_core_value_sigA319, var_core_value_sig2D58) {
    let var_core_value_sig223F = {};
    return var_core_value_sig2D58.forEach(var_core_value_sig6F91 => {
      var var_core_value_sigF9C7;
      (var_core_value_sigF9C7 = var_core_value_sig6F91.body) == null || (var_core_value_sigF9C7 = var_core_value_sigF9C7.blockRanges) == null || var_core_value_sigF9C7.forEach(var_core_value_sig4D4C => {
        if (var_core_value_sig4D4C.blockType !== l.DocumentBlockRangeType["CODE"]) return;
        let var_core_value_sigC9E0 = this._model["getCodeConfig"](var_core_value_sig6F91.id, var_core_value_sig4D4C.blockId);
        var_core_value_sigC9E0 && (var_core_value_sig223F[var_core_value_sig4D4C.blockId] = (0, c.normalizeDocsCodeConfig)(var_core_value_sigC9E0));
      });
    }), Object.keys(var_core_value_sig223F).length === 0 ? var_core_value_sigA319 : {
      ...var_core_value_sigA319,
      resources: [...(var_core_value_sigA319.resources ?? []).filter(var_core_value_sig8895 => var_core_value_sig8895.name !== c.DOCS_CODE_PLUGIN), {
        name: c.DOCS_CODE_PLUGIN,
        data: JSON.stringify({
          codes: var_core_value_sig223F
        })
      }]
    };
  }
  _getPasteMutationInfos(var_core_value_sigD749) {
    var var_core_value_sigCFFA;
    let var_core_value_sig58C1 = (var_core_value_sigCFFA = var_core_value_sigD749.doc["resources"]) == null ? undefined : var_core_value_sigCFFA.find(var_core_value_sigC80B => var_core_value_sigC80B.name === c.DOCS_CODE_PLUGIN),
      var_core_value_sig5090 = var_core_value_sig58C1 ? le(var_core_value_sig58C1.data).codes : {},
      var_core_value_sigC368 = [],
      var_core_value_sigAD56 = [];
    return var_core_value_sigD749.blockRangeMappings["forEach"](({
      sourceBlockRange: var_core_value_sig284F,
      targetBlockRange: var_core_value_sigE154
    }) => {
      if (var_core_value_sig284F.blockType !== l.DocumentBlockRangeType["CODE"]) return;
      let var_core_value_sig4632 = var_core_value_sig5090[var_core_value_sig284F.blockId];
      var_core_value_sig4632 && (var_core_value_sigC368.push({
        id: c.SetDocsCodeConfigMutation["id"],
        params: {
          unitId: var_core_value_sigD749.unitId,
          blockId: var_core_value_sigE154.blockId,
          config: var_core_value_sig4632
        }
      }), var_core_value_sigAD56.push({
        id: c.RemoveDocsCodeConfigMutation["id"],
        params: {
          unitId: var_core_value_sigD749.unitId,
          blockId: var_core_value_sigE154.blockId
        }
      }));
    }), {
      redoMutations: var_core_value_sigC368,
      undoMutations: var_core_value_sigAD56
    };
  }
};
A = k([O(0, (0, l.Inject)(u.IDocClipboardService)), O(1, (0, l.Inject)(u.IDocClipboardPasteAdapterService)), O(2, (0, l.Inject)(c.DocsCodeModel))], A);
function le(var_core_value_sig3BF6) {
  try {
    return (0, c.normalizeDocsCodeMetadataResource)(JSON.parse(var_core_value_sig3BF6));
  } catch {
    return {
      codes: {}
    };
  }
}
const j = "docs-code-ui.language-picker";
function ue(var_core_value_sig38CE) {
  var var_core_value_sig62B7, var_core_value_sig37A8;
  let var_core_value_sigA90D = (0, d.useDependency)(l.LocaleService),
    var_core_value_sig7A3C = (var_core_value_sig62B7 = var_core_value_sig38CE.popup) == null || (var_core_value_sig62B7 = var_core_value_sig62B7.extraProps) == null ? undefined : var_core_value_sig62B7.activeLanguage,
    var_core_value_sig0511 = (var_core_value_sig37A8 = var_core_value_sig38CE.popup) == null || (var_core_value_sig37A8 = var_core_value_sig37A8.extraProps) == null ? undefined : var_core_value_sig37A8.onSelect;
  return (0, _.jsxs)("section", {
    "data-u-comp": j,
    className: "univer-max-h-[320px] univer-w-[188px] univer-overflow-hidden univer-overflow-y-auto univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-1 univer-shadow-lg dark:!univer-border-gray-600 dark:!univer-bg-gray-900",
    children: [(0, _.jsx)("div", {
      className: "univer-px-2 univer-pb-1 univer-pt-0.5 univer-text-xs univer-leading-5 univer-text-gray-500 dark:!univer-text-gray-400",
      children: var_core_value_sigA90D.t("docs-code-ui.language.title")
    }), b.map(var_core_value_sigDB4A => {
      let var_core_value_sig6418 = var_core_value_sigDB4A.value === var_core_value_sig7A3C;
      return (0, _.jsxs)(g.Button, {
        size: "small",
        variant: "ghost",
        type: "button",
        className: (0, g.clsx)("univer-w-full univer-justify-between", {
          "univer-bg-primary-50\x20univer-text-primary-600\x20dark:!univer-bg-gray-800\x20dark:!univer-text-primary-300": var_core_value_sig6418
        }),
        onClick: () => var_core_value_sig0511 == null ? undefined : var_core_value_sig0511(var_core_value_sigDB4A.value),
        children: [(0, _.jsx)("span", {
          children: var_core_value_sigDB4A.label
        }), var_core_value_sig6418 && (0, _.jsx)(h.CheckMarkIcon, {
          className: "univer-text-sm"
        })]
      }, var_core_value_sigDB4A.value);
    })]
  });
}
let M = class extends l.Disposable {
  constructor(var_core_value_sig1896, var_core_value_sig0285) {
    super(), this._componentManager = var_core_value_sig1896, this._iconManager = var_core_value_sig0285, this._registerComponents(), this._registerIcons();
  }
  _registerIcons() {
    this.disposeWithMe(this._iconManager["register"]({
      CodeBlockIcon: h.CodeBlockIcon
    }));
  }
  _registerComponents() {
    this.disposeWithMe(this._componentManager["register"](j, ue));
  }
};
M = k([O(0, (0, l.Inject)(d.ComponentManager)), O(1, (0, l.Inject)(d.IconManager))], M);
const de = {
    boolean: "blue.700",
    builtin: "purple.700",
    className: "orange.700",
    comment: "gray.500",
    constant: "blue.700",
    function: "purple.600",
    keyword: "red.600",
    number: "blue.700",
    operator: "blue.700",
    property: "green.700",
    punctuation: "gray.900",
    regex: "green.700",
    selector: "green.700",
    string: "blue.800",
    tag: "green.700"
  },
  N = "gray.900";
function fe(var_core_value_sig1F44, var_core_value_sigCB04) {
  if (var_core_value_sigCB04 === "plaintext") return [];
  let var_core_value_sig947E = y.default["languages"][var_core_value_sigCB04] ?? y.default["languages"].javascript;
  if (!var_core_value_sig947E || !var_core_value_sig1F44) return [];
  let var_core_value_sig4545 = [],
    var_core_value_sigF39A = 0;
  return P(y.default["tokenize"](var_core_value_sig1F44, var_core_value_sig947E), (var_core_value_sig777D, var_core_value_sig3F4C) => {
    let var_core_value_sigD65A = var_core_value_sigF39A;
    var_core_value_sigF39A += var_core_value_sig777D.length, var_core_value_sig777D && var_core_value_sig4545.push({
      color: I(var_core_value_sig3F4C),
      end: var_core_value_sigF39A,
      start: var_core_value_sigD65A
    });
  }), var_core_value_sig4545;
}
function pe(var_core_value_sigF79C, var_core_value_sig2E54) {
  var var_core_value_sig7658;
  return ((var_core_value_sig7658 = var_core_value_sigF79C.find(var_core_value_sig5A13 => var_core_value_sig5A13.start <= var_core_value_sig2E54 && var_core_value_sig2E54 < var_core_value_sig5A13.end)) == null ? undefined : var_core_value_sig7658.color) ?? N;
}
function P(var_core_value_sigDCF5, var_core_value_sigC786, var_core_value_sigC0D9 = "") {
  var_core_value_sigDCF5.forEach(var_core_value_sigF593 => {
    if (typeof var_core_value_sigF593 == "string") {
      var_core_value_sigC786(var_core_value_sigF593, var_core_value_sigC0D9);
      return;
    }
    let var_core_value_sig3607 = F(var_core_value_sigF593.type),
      var_core_value_sigB512 = var_core_value_sigF593.content;
    typeof var_core_value_sigB512 == "string" ? var_core_value_sigC786(var_core_value_sigB512, var_core_value_sig3607) : P(Array.isArray(var_core_value_sigB512) ? var_core_value_sigB512 : [var_core_value_sigB512], var_core_value_sigC786, var_core_value_sig3607);
  });
}
function F(var_core_value_sigF051) {
  return var_core_value_sigF051.replace(/-([a-z])/g, (var_core_value_sigF2E6, var_core_value_sig34C8) => var_core_value_sig34C8.toUpperCase());
}
function I(var_core_value_sig5825) {
  return de[var_core_value_sig5825] ?? N;
}
function L(var_core_value_sig4EB7, var_core_value_sig73AF, var_core_value_sig548A, var_core_value_sigE026) {
  let var_core_value_sig339E = [];
  return var_core_value_sig4EB7.forEach(var_core_value_sigB744 => {
    let var_core_value_sigEAE2 = var_core_value_sig73AF.filter(var_core_value_sig12F2 => var_core_value_sig12F2.pageIndex >= 0 && var_core_value_sig12F2.ed >= var_core_value_sigB744.startIndex && var_core_value_sig12F2.st <= var_core_value_sigB744.endIndex);
    Array.from(new Set(var_core_value_sigEAE2.map(var_core_value_sig2259 => var_core_value_sig2259.pageIndex))).forEach(var_core_value_sig9E2F => {
      let var_core_value_sigD082 = var_core_value_sigEAE2.filter(var_core_value_sig76BA => var_core_value_sig76BA.pageIndex === var_core_value_sig9E2F);
      Array.from(new Set(var_core_value_sigD082.map(var_core_value_sigFBFA => var_core_value_sigFBFA.layoutFragment))).forEach(var_core_value_sigF602 => {
        let var_core_value_sig1BBD = var_core_value_sigD082.filter(var_core_value_sig2AD8 => var_core_value_sig2AD8.layoutFragment === var_core_value_sigF602),
          var_core_value_sigF704 = Math.min(...var_core_value_sig1BBD.map(V)),
          var_core_value_sig2BCF = Math.max(...var_core_value_sig1BBD.map(me)),
          var_core_value_sig0D69 = Math.min(...var_core_value_sig1BBD.map(R)) - var_core_value_sigE026,
          var_core_value_sig480E = Math.max(...var_core_value_sig1BBD.map(z)) + var_core_value_sigE026,
          var_core_value_sig26DB = B(var_core_value_sig1BBD);
        var_core_value_sig339E.push({
          blockId: var_core_value_sigB744.blockId,
          ...var_core_value_sig26DB,
          height: var_core_value_sig2BCF - var_core_value_sigF704 + var_core_value_sig548A * 2,
          left: var_core_value_sig0D69,
          pageIndex: var_core_value_sig9E2F,
          top: var_core_value_sigF704 - var_core_value_sig548A,
          width: var_core_value_sig480E - var_core_value_sig0D69
        });
      });
    });
  }), var_core_value_sig339E;
}
function R(var_core_value_sig7550) {
  return var_core_value_sig7550.visualLeft ?? var_core_value_sig7550.left;
}
function z(var_core_value_sig2983) {
  return (var_core_value_sig2983.visualLeft ?? var_core_value_sig2983.left) + (var_core_value_sig2983.visualWidth ?? var_core_value_sig2983.width);
}
function B(var_core_value_sigE1B0) {
  let var_core_value_sigD4FF = var_core_value_sigE1B0.map(var_core_value_sigE68A => var_core_value_sigE68A.clipLeft).filter(var_core_value_sig3E68 => var_core_value_sig3E68 != null),
    var_core_value_sig1E5B = var_core_value_sigE1B0.map(var_core_value_sigF4C5 => var_core_value_sigF4C5.clipRight).filter(var_core_value_sig5410 => var_core_value_sig5410 != null);
  if (!var_core_value_sigD4FF.length || !var_core_value_sig1E5B.length) return {};
  let var_core_value_sigB680 = Math.max(...var_core_value_sigD4FF),
    var_core_value_sig1F64 = Math.min(...var_core_value_sig1E5B);
  return var_core_value_sig1F64 > var_core_value_sigB680 ? {
    clipLeft: var_core_value_sigB680,
    clipRight: var_core_value_sig1F64
  } : {};
}
function V(var_core_value_sigDD1C) {
  return var_core_value_sigDD1C.top + (var_core_value_sigDD1C.marginTop ?? 0) + (var_core_value_sigDD1C.paddingTop ?? 0);
}
function me(var_core_value_sig2C39) {
  return var_core_value_sig2C39.contentHeight == null ? var_core_value_sig2C39.top + var_core_value_sig2C39.height - (var_core_value_sig2C39.marginBottom ?? 0) - (var_core_value_sig2C39.paddingBottom ?? 0) : V(var_core_value_sig2C39) + var_core_value_sig2C39.contentHeight;
}
function H(var_core_value_sigB7D1) {
  "@babel/helpers - typeof";

  return H = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sig492F) {
    return typeof var_core_value_sig492F;
  } : function (var_core_value_sig8EA0) {
    return var_core_value_sig8EA0 && typeof Symbol == "function" && var_core_value_sig8EA0.constructor === Symbol && var_core_value_sig8EA0 !== Symbol.prototype ? "symbol" : typeof var_core_value_sig8EA0;
  }, H(var_core_value_sigB7D1);
}
function he(var_core_value_sig64F0, var_core_value_sig85B1) {
  if (H(var_core_value_sig64F0) != "object" || !var_core_value_sig64F0) return var_core_value_sig64F0;
  var var_core_value_sig3141 = var_core_value_sig64F0[Symbol.toPrimitive];
  if (var_core_value_sig3141 !== undefined) {
    var var_core_value_sig2162 = var_core_value_sig3141.call(var_core_value_sig64F0, var_core_value_sig85B1 || "default");
    if (H(var_core_value_sig2162) != "object") return var_core_value_sig2162;
    throw TypeError("@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.");
  }
  return (var_core_value_sig85B1 === "string" ? String : Number)(var_core_value_sig64F0);
}
function ge(var_core_value_sig2EAD) {
  var var_core_value_sig6774 = he(var_core_value_sig2EAD, "string");
  return H(var_core_value_sig6774) == "symbol" ? var_core_value_sig6774 : var_core_value_sig6774 + "";
}
function U(var_core_value_sig340D, var_core_value_sig82D4, var_core_value_sigBDE4) {
  return (var_core_value_sig82D4 = ge(var_core_value_sig82D4)) in var_core_value_sig340D ? Object.defineProperty(var_core_value_sig340D, var_core_value_sig82D4, {
    value: var_core_value_sigBDE4,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sig340D[var_core_value_sig82D4] = var_core_value_sigBDE4, var_core_value_sig340D;
}
const W = -10990,
  G = "gray.700";
let K = class extends l.Disposable {
  constructor(var_core_value_sigA6F6, var_core_value_sigCDDA, var_core_value_sigE243, var_core_value_sig74A8, var_core_value_sig21B2, var_core_value_sigDE08, var_core_value_sigACCB) {
    super(), this._context = var_core_value_sigA6F6, this._docSkeletonManagerService = var_core_value_sigCDDA, this._docSelectionManagerService = var_core_value_sigE243, this._docsCodeModel = var_core_value_sig74A8, this._docCanvasPopManagerService = var_core_value_sig21B2, this._commandService = var_core_value_sigDE08, this._permissionService = var_core_value_sigACCB, U(this, "_languageHitRects", []), U(this, "_blockHitRects", []), U(this, "_languagePopoverDisposable", null), U(this, "_activeLanguageBlockId", null), U(this, "_hoveredCodeBlockId", null), U(this, "_cursorBeforeLanguageHover", null), this._initRender(), this._initPointer(), this.disposeWithMe(this._docsCodeModel["change$"].subscribe(({
      unitId: var_core_value_sigDBB7
    }) => {
      var_core_value_sigDBB7 === this._context["unitId"] && this._makeDirty();
    })), this.disposeWithMe(this._docSelectionManagerService["textSelection$"].subscribe(({
      unitId: var_core_value_sigD0A8
    }) => {
      var_core_value_sigD0A8 === this._context["unitId"] && this._makeDirty();
    })), this.disposeWithMe(this._permissionService["permissionPointUpdate$"].subscribe(() => {
      this._closeLanguagePopover(), this._setHoveredCodeBlock(null), this._restorePointerCursor(), this._makeDirty();
    }));
  }
  _initRender() {
    var var_core_value_sig7F33;
    let var_core_value_sig0C53 = this._context["mainComponent"],
      var_core_value_sigEA04 = var_core_value_sig0C53 == null || (var_core_value_sig7F33 = var_core_value_sig0C53.pageRender$) == null ? undefined : var_core_value_sig7F33.subscribe(var_core_value_sigF4B9 => this._drawPage(var_core_value_sigF4B9));
    var_core_value_sigEA04 && this.disposeWithMe({
      dispose: () => {
        var var_core_value_sig5CEE, var_core_value_sigE92A;
        return ((var_core_value_sig5CEE = var_core_value_sigEA04.unsubscribe) == null ? undefined : var_core_value_sig5CEE.call(var_core_value_sigEA04)) ?? ((var_core_value_sigE92A = var_core_value_sigEA04.dispose) == null ? undefined : var_core_value_sigE92A.call(var_core_value_sigEA04));
      }
    });
  }
  _initPointer() {
    let var_core_value_sig7A62 = this._context["mainComponent"] ?? this._context["scene"];
    this.disposeWithMe(var_core_value_sig7A62.onPointerMove$["subscribeEvent"]({
      next: ([var_core_value_sig362B]) => {
        var var_core_value_sig5CA5;
        let var_core_value_sigE90F = X(var_core_value_sig362B.offsetX, var_core_value_sig362B.offsetY, this._context["scene"]),
          var_core_value_sigEFD4 = this._hitLanguageButton(var_core_value_sigE90F.x, var_core_value_sigE90F.y);
        this._setHoveredCodeBlock((var_core_value_sigEFD4 == null ? undefined : var_core_value_sigEFD4.blockId) ?? ((var_core_value_sig5CA5 = this._hitCodeBlock(var_core_value_sigE90F.x, var_core_value_sigE90F.y)) == null ? undefined : var_core_value_sig5CA5.blockId) ?? null), var_core_value_sigEFD4 && this._canEditBlock(var_core_value_sigEFD4.blockId) ? this._setPointerCursor() : this._restorePointerCursor();
      },
      priority: W
    })), this.disposeWithMe(var_core_value_sig7A62.onPointerLeave$["subscribeEvent"](() => {
      this._setHoveredCodeBlock(null), this._restorePointerCursor();
    })), this.disposeWithMe(var_core_value_sig7A62.onPointerDown$["subscribeEvent"]({
      next: ([var_core_value_sig861B, var_core_value_sig5237]) => {
        var var_core_value_sigBB00, var_core_value_sig7E54, var_core_value_sig9A8D;
        if (var_core_value_sig861B.button === 2) return;
        let var_core_value_sigC259 = X(var_core_value_sig861B.offsetX, var_core_value_sig861B.offsetY, this._context["scene"]),
          var_core_value_sig9C9F = this._hitLanguageButton(var_core_value_sigC259.x, var_core_value_sigC259.y);
        if (!var_core_value_sig9C9F) {
          this._closeLanguagePopover();
          return;
        }
        var_core_value_sig5237 == null || (var_core_value_sigBB00 = var_core_value_sig5237.stopPropagation) == null || var_core_value_sigBB00.call(var_core_value_sig5237), var_core_value_sig5237 && (var_core_value_sig5237.skipNextObservers = true), (var_core_value_sig7E54 = var_core_value_sig861B.stopPropagation) == null || var_core_value_sig7E54.call(var_core_value_sig861B), (var_core_value_sig9A8D = var_core_value_sig861B.preventDefault) == null || var_core_value_sig9A8D.call(var_core_value_sig861B), this._openLanguagePopover(var_core_value_sig9C9F);
      },
      priority: W
    }));
  }
  _drawPage(var_core_value_sig8109) {
    var var_core_value_sig7565;
    let var_core_value_sigD4FB = this._context["unit"].getBody(),
      var_core_value_sig3E71 = (var_core_value_sigD4FB == null || (var_core_value_sig7565 = var_core_value_sigD4FB.blockRanges) == null ? undefined : var_core_value_sig7565.filter(var_core_value_sigFDEA => var_core_value_sigFDEA.blockType === l.DocumentBlockRangeType["CODE"])) ?? [];
    if (!var_core_value_sigD4FB || !var_core_value_sig3E71.length) {
      this._languageHitRects = [], this._blockHitRects = [];
      return;
    }
    let var_core_value_sig01B3 = this._docSkeletonManagerService["getSkeleton"]().getSkeletonData(),
      var_core_value_sig7442 = (var_core_value_sig01B3 == null ? undefined : var_core_value_sig01B3.pages) ?? [],
      var_core_value_sigDF87 = var_core_value_sig7442.indexOf(var_core_value_sig8109.page);
    if (var_core_value_sigDF87 < 0) return;
    var_core_value_sigDF87 === 0 && (this._languageHitRects = [], this._blockHitRects = []);
    let var_core_value_sig9EE0 = this._collectLines(var_core_value_sig7442, var_core_value_sig3E71),
      var_core_value_sigF0511 = q(this._context["mainComponent"]),
      var_core_value_sig0B45 = L(var_core_value_sig3E71, var_core_value_sig9EE0, 8, 0).filter(var_core_value_sig86D0 => var_core_value_sig86D0.pageIndex === var_core_value_sigDF87);
    var_core_value_sig0B45.forEach(var_core_value_sig4CD2 => J(var_core_value_sig8109.ctx, var_core_value_sig4CD2, () => {
      be(var_core_value_sig8109.ctx, var_core_value_sig4CD2.left, var_core_value_sig4CD2.top, var_core_value_sig4CD2.width, var_core_value_sig4CD2.height, 6);
    })), var_core_value_sig0B45.forEach(var_core_value_sig48CA => {
      let var_core_value_sig50AF = Y({
        blockId: var_core_value_sig48CA.blockId,
        bottom: var_core_value_sig48CA.top + var_core_value_sig48CA.height + var_core_value_sigF0511.docsTop,
        left: var_core_value_sig48CA.left + var_core_value_sigF0511.docsLeft,
        right: var_core_value_sig48CA.left + var_core_value_sig48CA.width + var_core_value_sigF0511.docsLeft,
        top: var_core_value_sig48CA.top + var_core_value_sigF0511.docsTop
      }, var_core_value_sig48CA, var_core_value_sigF0511.docsLeft);
      var_core_value_sig50AF && this._blockHitRects["push"](var_core_value_sig50AF);
    });
    let var_core_value_sig36F8 = new Map(),
      var_core_value_sig03E1 = new Map();
    this._collectGlyphRuns(var_core_value_sig7442, var_core_value_sig3E71).filter(var_core_value_sigA942 => var_core_value_sigA942.pageIndex === var_core_value_sigDF87).forEach(var_core_value_sigA621 => {
      var var_core_value_sigBBFF;
      let var_core_value_sig8889 = var_core_value_sigA621.blockRange["blockId"];
      if (!var_core_value_sig36F8.has(var_core_value_sig8889)) {
        let var_core_value_sigF0F9 = (0, c.normalizeDocsCodeConfig)(this._docsCodeModel["getCodeConfig"](this._context["unitId"], var_core_value_sigA621.blockRange["blockId"])),
          {
            codeText: var_core_value_sig1A0F,
            streamOffsetToCodeOffset: var_core_value_sigFBA4
          } = ye(var_core_value_sigD4FB.dataStream, var_core_value_sigA621.blockRange);
        var_core_value_sig36F8.set(var_core_value_sig8889, fe(var_core_value_sig1A0F, var_core_value_sigF0F9.language)), var_core_value_sig03E1.set(var_core_value_sig8889, var_core_value_sigFBA4);
      }
      let var_core_value_sig32F8 = (var_core_value_sigBBFF = var_core_value_sig03E1.get(var_core_value_sig8889)) == null ? undefined : var_core_value_sigBBFF.get(var_core_value_sigA621.streamOffset);
      var_core_value_sig32F8 != null && we(var_core_value_sig8109.ctx, var_core_value_sigA621, pe(var_core_value_sig36F8.get(var_core_value_sig8889) ?? [], var_core_value_sig32F8));
    }), var_core_value_sig0B45.forEach(var_core_value_sig5B67 => {
      if (!this._shouldDrawLanguageButton(var_core_value_sig5B67.blockId)) return;
      let var_core_value_sig1758 = (0, c.normalizeDocsCodeConfig)(this._docsCodeModel["getCodeConfig"](this._context["unitId"], var_core_value_sig5B67.blockId)),
        var_core_value_sig4805 = J(var_core_value_sig8109.ctx, var_core_value_sig5B67, () => xe(var_core_value_sig8109.ctx, var_core_value_sig5B67.left, var_core_value_sig5B67.top, var_core_value_sig5B67.width, var_core_value_sig1758.language)),
        var_core_value_sigE67E = Y({
          blockId: var_core_value_sig5B67.blockId,
          bottom: var_core_value_sig4805.bottom + var_core_value_sigF0511.docsTop,
          left: var_core_value_sig4805.left + var_core_value_sigF0511.docsLeft,
          right: var_core_value_sig4805.right + var_core_value_sigF0511.docsLeft,
          top: var_core_value_sig4805.top + var_core_value_sigF0511.docsTop
        }, var_core_value_sig5B67, var_core_value_sigF0511.docsLeft);
      var_core_value_sigE67E && this._languageHitRects["push"](var_core_value_sigE67E);
    });
  }
  _collectLines(var_core_value_sigBB57, var_core_value_sig7C4A) {
    let var_core_value_sigE799 = [],
      var_core_value_sigB601 = this._getCodeParagraphOwners(var_core_value_sig7C4A),
      var_core_value_sig8B71 = q(this._context["mainComponent"]);
    return (0, v.documentSkeletonLineIterator)(var_core_value_sigBB57, {
      docsLeft: var_core_value_sig8B71.docsLeft,
      pageMarginTop: var_core_value_sig8B71.pageMarginTop,
      tableCellInsetX: 6,
      unitId: this._context["unitId"]
    }, var_core_value_sig2902 => {
      let var_core_value_sig9989 = var_core_value_sigB601.get(var_core_value_sig2902.line["paragraphIndex"]);
      var_core_value_sig9989 && var_core_value_sigE799.push(_e(var_core_value_sig2902, var_core_value_sig9989));
    }), var_core_value_sigE799;
  }
  _collectGlyphRuns(var_core_value_sigAEFB, var_core_value_sig826B) {
    let var_core_value_sigCF89 = [],
      var_core_value_sig00CB = this._getCodeParagraphOwners(var_core_value_sig826B),
      var_core_value_sig77EE = q(this._context["mainComponent"]);
    return (0, v.documentSkeletonLineIterator)(var_core_value_sigAEFB, {
      docsLeft: var_core_value_sig77EE.docsLeft,
      pageMarginTop: var_core_value_sig77EE.pageMarginTop,
      tableCellInsetX: 6,
      unitId: this._context["unitId"]
    }, var_core_value_sig698E => {
      let var_core_value_sig2809 = var_core_value_sig00CB.get(var_core_value_sig698E.line["paragraphIndex"]);
      var_core_value_sig2809 && var_core_value_sig698E.line["divides"].forEach(var_core_value_sig4383 => {
        let var_core_value_sig186C = var_core_value_sig4383.st;
        var_core_value_sig4383.glyphGroup["forEach"](var_core_value_sig2AD0 => {
          var var_core_value_sig3EEE;
          if (ve(var_core_value_sig2AD0)) {
            let var_core_value_sig7524 = var_core_value_sig698E.pageLeft + var_core_value_sig698E.column["left"] + var_core_value_sig4383.left + var_core_value_sig4383.paddingLeft + var_core_value_sig2AD0.left + var_core_value_sig2AD0.xOffset;
            if (var_core_value_sig698E.clipLeft != null && var_core_value_sig698E.clipRight != null && (var_core_value_sig7524 < var_core_value_sig698E.clipLeft || var_core_value_sig7524 > var_core_value_sig698E.clipRight)) {
              var var_core_value_sigBC46;
              var_core_value_sig186C += Math.max(var_core_value_sig2AD0.count, ((var_core_value_sigBC46 = var_core_value_sig2AD0.content) == null ? undefined : var_core_value_sigBC46.length) ?? 1);
              return;
            }
            var_core_value_sigCF89.push({
              blockRange: var_core_value_sig2809,
              divide: var_core_value_sig4383,
              glyph: var_core_value_sig2AD0,
              line: var_core_value_sig698E.line,
              pageIndex: var_core_value_sig698E.pageIndex,
              streamOffset: var_core_value_sig186C,
              x: var_core_value_sig7524,
              y: var_core_value_sig698E.sectionTop + var_core_value_sig698E.line["top"] + var_core_value_sig698E.line["marginTop"] + var_core_value_sig698E.line["paddingTop"] + var_core_value_sig698E.line["asc"]
            });
          }
          var_core_value_sig186C += Math.max(var_core_value_sig2AD0.count, ((var_core_value_sig3EEE = var_core_value_sig2AD0.content) == null ? undefined : var_core_value_sig3EEE.length) ?? 1);
        });
      });
    }), var_core_value_sigCF89;
  }
  _getCodeParagraphOwners(var_core_value_sig9F76) {
    var var_core_value_sigB008;
    let var_core_value_sig8721 = new Map(),
      var_core_value_sig08BA = ((var_core_value_sigB008 = this._context["unit"].getBody()) == null ? undefined : var_core_value_sigB008.paragraphs) ?? [];
    return var_core_value_sig9F76.forEach(var_core_value_sig2DAB => {
      var_core_value_sig08BA.forEach(var_core_value_sigD955 => {
        var_core_value_sigD955.startIndex > var_core_value_sig2DAB.startIndex && var_core_value_sigD955.startIndex < var_core_value_sig2DAB.endIndex && var_core_value_sig8721.set(var_core_value_sigD955.startIndex, var_core_value_sig2DAB);
      });
    }), var_core_value_sig8721;
  }
  _makeDirty() {
    var var_core_value_sigDBB5;
    (var_core_value_sigDBB5 = this._context["mainComponent"]) == null || var_core_value_sigDBB5.makeDirty(true), this._context["scene"].makeDirty();
  }
  _hitLanguageButton(var_core_value_sigCFAC, var_core_value_sig237B) {
    return this._languageHitRects["find"](var_core_value_sig877E => var_core_value_sigCFAC >= var_core_value_sig877E.left && var_core_value_sigCFAC <= var_core_value_sig877E.right && var_core_value_sig237B >= var_core_value_sig877E.top && var_core_value_sig237B <= var_core_value_sig877E.bottom) ?? null;
  }
  _hitCodeBlock(var_core_value_sigFEAB, var_core_value_sigE347) {
    return this._blockHitRects["find"](var_core_value_sig20C8 => var_core_value_sigFEAB >= var_core_value_sig20C8.left && var_core_value_sigFEAB <= var_core_value_sig20C8.right && var_core_value_sigE347 >= var_core_value_sig20C8.top && var_core_value_sigE347 <= var_core_value_sig20C8.bottom) ?? null;
  }
  _setHoveredCodeBlock(var_core_value_sig3C5B) {
    this._hoveredCodeBlockId !== var_core_value_sig3C5B && (this._hoveredCodeBlockId = var_core_value_sig3C5B, this._makeDirty());
  }
  _shouldDrawLanguageButton(var_core_value_sig200B) {
    return this._canEditBlock(var_core_value_sig200B) && (this._activeLanguageBlockId === var_core_value_sig200B || this._hoveredCodeBlockId === var_core_value_sig200B || this._getFocusedCodeBlockId() === var_core_value_sig200B);
  }
  _getFocusedCodeBlockId() {
    var var_core_value_sig3863, var_core_value_sigC97C;
    let var_core_value_sigC4B1 = this._docSelectionManagerService["getTextRanges"]({
      unitId: this._context["unitId"],
      subUnitId: this._context["unitId"]
    }) ?? [];
    if (!var_core_value_sigC4B1.length) return null;
    let var_core_value_sig1BD9 = ((var_core_value_sig3863 = this._context["unit"].getBody()) == null || (var_core_value_sig3863 = var_core_value_sig3863.blockRanges) == null ? undefined : var_core_value_sig3863.filter(var_core_value_sigE9A7 => var_core_value_sigE9A7.blockType === l.DocumentBlockRangeType["CODE"])) ?? [],
      var_core_value_sigE43E = var_core_value_sigC4B1.find(var_core_value_sigBECE => var_core_value_sigBECE.isActive) ?? var_core_value_sigC4B1[0];
    return (var_core_value_sigE43E == null ? undefined : var_core_value_sigE43E.startOffset) == null || (var_core_value_sigE43E == null ? undefined : var_core_value_sigE43E.endOffset) == null ? null : ((var_core_value_sigC97C = var_core_value_sig1BD9.find(var_core_value_sig1B22 => var_core_value_sigE43E.startOffset >= var_core_value_sig1B22.startIndex && var_core_value_sigE43E.endOffset <= var_core_value_sig1B22.endIndex)) == null ? undefined : var_core_value_sigC97C.blockId) ?? null;
  }
  _openLanguagePopover(var_core_value_sigA937) {
    if (this._closeLanguagePopover(), !this._canEditBlock(var_core_value_sigA937.blockId)) return;
    this._activeLanguageBlockId = var_core_value_sigA937.blockId;
    let var_core_value_sigCAD5 = (0, c.normalizeDocsCodeConfig)(this._docsCodeModel["getCodeConfig"](this._context["unitId"], var_core_value_sigA937.blockId));
    this._languagePopoverDisposable = this._docCanvasPopManagerService["attachPopupToRect"](var_core_value_sigA937, {
      componentKey: j,
      direction: "bottom-right",
      extraProps: {
        activeLanguage: var_core_value_sigCAD5.language,
        onSelect: var_core_value_sig7F72 => {
          let var_core_value_sig7B2A = this._activeLanguageBlockId;
          var_core_value_sig7B2A && (this._commandService["executeCommand"](c.DocsCodeUpdateCommand["id"], {
            blockId: var_core_value_sig7B2A,
            config: {
              language: var_core_value_sig7F72
            }
          }), this._closeLanguagePopover());
        }
      },
      onClickOutside: () => this._closeLanguagePopover(),
      onContextMenu: () => this._closeLanguagePopover(),
      zIndex: 102
    }, this._context["unitId"]);
  }
  _closeLanguagePopover() {
    var var_core_value_sigE503;
    (var_core_value_sigE503 = this._languagePopoverDisposable) == null || var_core_value_sigE503.dispose(), this._languagePopoverDisposable = null, this._activeLanguageBlockId = null;
  }
  _canEditBlock(var_core_value_sig48DD) {
    return (0, m.canEditDocumentTargets)(this._permissionService, this._context["unitId"], [...(0, m.getDocumentEntityParentPermissionObjectIds)(this._context["unit"], "", "custom-block", var_core_value_sig48DD), (0, m.getDocumentEntityPermissionObjectId)("", "custom-block", var_core_value_sig48DD)]);
  }
  _setPointerCursor() {
    this._cursorBeforeLanguageHover ??= this._context["scene"].getCursor(), this._context["scene"].setCursor(f.CURSOR_TYPE["POINTER"]);
  }
  _restorePointerCursor() {
    this._cursorBeforeLanguageHover != null && (this._context["scene"].setCursor(this._cursorBeforeLanguageHover), this._cursorBeforeLanguageHover = null);
  }
};
K = k([O(1, (0, l.Inject)(m.DocSkeletonManagerService)), O(2, (0, l.Inject)(m.DocSelectionManagerService)), O(3, (0, l.Inject)(c.DocsCodeModel)), O(4, (0, l.Inject)(u.DocCanvasPopManagerService)), O(5, l.ICommandService), O(6, l.IPermissionService)], K);
function _e(var_core_value_sig7DF1, var_core_value_sigDC86) {
  let {
    column: var_core_value_sig0B0C,
    line: var_core_value_sigA39E,
    pageIndex: var_core_value_sigBBEE,
    pageLeft: var_core_value_sig011D,
    sectionTop: var_core_value_sig6167
  } = var_core_value_sig7DF1;
  return {
    layoutFragment: var_core_value_sig0B0C,
    contentHeight: var_core_value_sigA39E.contentHeight,
    ed: var_core_value_sigA39E.ed,
    height: var_core_value_sigA39E.lineHeight,
    left: var_core_value_sig011D + var_core_value_sig0B0C.left,
    clipLeft: var_core_value_sig7DF1.clipLeft,
    clipRight: var_core_value_sig7DF1.clipRight,
    visualLeft: var_core_value_sig7DF1.visualLeft,
    visualWidth: var_core_value_sig7DF1.visualWidth,
    marginBottom: var_core_value_sigA39E.marginBottom,
    marginTop: var_core_value_sigA39E.marginTop,
    paddingBottom: var_core_value_sigA39E.paddingBottom,
    paddingTop: var_core_value_sigA39E.paddingTop,
    pageIndex: var_core_value_sigBBEE,
    st: var_core_value_sigA39E.st,
    top: var_core_value_sig6167 + var_core_value_sigA39E.top,
    width: var_core_value_sig0B0C.width
  };
}
function q(var_core_value_sig65A1) {
  var var_core_value_sig7F19;
  let var_core_value_sig7827 = var_core_value_sig65A1 == null || (var_core_value_sig7F19 = var_core_value_sig65A1.getOffsetConfig) == null ? undefined : var_core_value_sig7F19.call(var_core_value_sig65A1);
  return {
    docsLeft: (var_core_value_sig7827 == null ? undefined : var_core_value_sig7827.docsLeft) ?? 0,
    docsTop: (var_core_value_sig7827 == null ? undefined : var_core_value_sig7827.docsTop) ?? 0,
    pageMarginTop: (var_core_value_sig7827 == null ? undefined : var_core_value_sig7827.pageMarginTop) ?? 0
  };
}
function ve(var_core_value_sig652C) {
  return !!var_core_value_sig652C.content && var_core_value_sig652C.streamType !== l.DataStreamTreeTokenType["PARAGRAPH"] && var_core_value_sig652C.streamType !== l.DataStreamTreeTokenType["BLOCK_START"] && var_core_value_sig652C.streamType !== l.DataStreamTreeTokenType["BLOCK_END"];
}
function ye(var_core_value_sig7E32, var_core_value_sig4C07) {
  let var_core_value_sig79AB = new Map(),
    var_core_value_sig8E74 = "";
  for (let var_core_value_sig5E6A = var_core_value_sig4C07.startIndex + 1; var_core_value_sig5E6A < var_core_value_sig4C07.endIndex; var_core_value_sig5E6A++) {
    let var_core_value_sig06CD = var_core_value_sig7E32[var_core_value_sig5E6A];
    var_core_value_sig06CD !== l.DataStreamTreeTokenType["BLOCK_START"] && var_core_value_sig06CD !== l.DataStreamTreeTokenType["BLOCK_END"] && (var_core_value_sig79AB.set(var_core_value_sig5E6A, var_core_value_sig8E74.length), var_core_value_sig8E74 += var_core_value_sig06CD === l.DataStreamTreeTokenType["PARAGRAPH"] ? "\x0a" : var_core_value_sig06CD);
  }
  return {
    codeText: var_core_value_sig8E74,
    streamOffsetToCodeOffset: var_core_value_sig79AB
  };
}
function be(var_core_value_sig104C, var_core_value_sig841D, var_core_value_sig90CB, var_core_value_sigBDF5, var_core_value_sigACC6, var_core_value_sig1614) {
  let var_core_value_sig85C3 = Math.min(var_core_value_sig1614, var_core_value_sigBDF5 / 2, var_core_value_sigACC6 / 2);
  var_core_value_sig104C.save(), var_core_value_sig104C.beginPath(), var_core_value_sig104C.moveTo(var_core_value_sig841D + var_core_value_sig85C3, var_core_value_sig90CB), var_core_value_sig104C.lineTo(var_core_value_sig841D + var_core_value_sigBDF5 - var_core_value_sig85C3, var_core_value_sig90CB), var_core_value_sig104C.quadraticCurveTo(var_core_value_sig841D + var_core_value_sigBDF5, var_core_value_sig90CB, var_core_value_sig841D + var_core_value_sigBDF5, var_core_value_sig90CB + var_core_value_sig85C3), var_core_value_sig104C.lineTo(var_core_value_sig841D + var_core_value_sigBDF5, var_core_value_sig90CB + var_core_value_sigACC6 - var_core_value_sig85C3), var_core_value_sig104C.quadraticCurveTo(var_core_value_sig841D + var_core_value_sigBDF5, var_core_value_sig90CB + var_core_value_sigACC6, var_core_value_sig841D + var_core_value_sigBDF5 - var_core_value_sig85C3, var_core_value_sig90CB + var_core_value_sigACC6), var_core_value_sig104C.lineTo(var_core_value_sig841D + var_core_value_sig85C3, var_core_value_sig90CB + var_core_value_sigACC6), var_core_value_sig104C.quadraticCurveTo(var_core_value_sig841D, var_core_value_sig90CB + var_core_value_sigACC6, var_core_value_sig841D, var_core_value_sig90CB + var_core_value_sigACC6 - var_core_value_sig85C3), var_core_value_sig104C.lineTo(var_core_value_sig841D, var_core_value_sig90CB + var_core_value_sig85C3), var_core_value_sig104C.quadraticCurveTo(var_core_value_sig841D, var_core_value_sig90CB, var_core_value_sig841D + var_core_value_sig85C3, var_core_value_sig90CB), var_core_value_sig104C.closePath(), var_core_value_sig104C.fillStyle = "gray.100", var_core_value_sig104C.fill(), var_core_value_sig104C.strokeStyle = "gray.200", var_core_value_sig104C.lineWidth = 1, var_core_value_sig104C.stroke(), var_core_value_sig104C.restore();
}
function J(var_core_value_sigB996, var_core_value_sig4BBA, var_core_value_sig6201) {
  if (var_core_value_sig4BBA.clipLeft == null || var_core_value_sig4BBA.clipRight == null || var_core_value_sig4BBA.clipRight <= var_core_value_sig4BBA.clipLeft) return var_core_value_sig6201();
  var_core_value_sigB996.save(), var_core_value_sigB996.beginPath(), var_core_value_sigB996.rectByPrecision(var_core_value_sig4BBA.clipLeft, -100000, var_core_value_sig4BBA.clipRight - var_core_value_sig4BBA.clipLeft, 200000), var_core_value_sigB996.closePath(), var_core_value_sigB996.clip();
  let var_core_value_sig5151 = var_core_value_sig6201();
  return var_core_value_sigB996.restore(), var_core_value_sig5151;
}
function Y(var_core_value_sigB542, var_core_value_sigBB6C, var_core_value_sigE2BF) {
  if (var_core_value_sigBB6C.clipLeft == null || var_core_value_sigBB6C.clipRight == null) return var_core_value_sigB542;
  let var_core_value_sigB8C7 = Math.max(var_core_value_sigB542.left, var_core_value_sigBB6C.clipLeft + var_core_value_sigE2BF),
    var_core_value_sigA56E = Math.min(var_core_value_sigB542.right, var_core_value_sigBB6C.clipRight + var_core_value_sigE2BF);
  return var_core_value_sigA56E > var_core_value_sigB8C7 ? {
    ...var_core_value_sigB542,
    left: var_core_value_sigB8C7,
    right: var_core_value_sigA56E
  } : null;
}
function xe(var_core_value_sig1998, var_core_value_sigFF19, var_core_value_sig43B8, var_core_value_sigD98F, var_core_value_sig66C0) {
  let var_core_value_sig9D15 = te(var_core_value_sig66C0);
  var_core_value_sig1998.save(), var_core_value_sig1998.font = "12px sans-serif";
  let var_core_value_sigB785 = var_core_value_sig1998.measureText(var_core_value_sig9D15).width,
    var_core_value_sig130F = Math.min(118, Math.max(70, var_core_value_sigB785 + 14 + 5 + 6)),
    var_core_value_sigC0E3 = var_core_value_sigFF19 + var_core_value_sigD98F - var_core_value_sig130F - 6,
    var_core_value_sig52F7 = var_core_value_sig43B8 - 22 - 5;
  return Ce(var_core_value_sig1998, var_core_value_sigC0E3, var_core_value_sig52F7, var_core_value_sig130F, 22, 5), var_core_value_sig1998.fillStyle = G, var_core_value_sig1998.textBaseline = "middle", var_core_value_sig1998.fillText(var_core_value_sig9D15, var_core_value_sigC0E3 + 7, var_core_value_sig52F7 + 22 / 2), Se(var_core_value_sig1998, var_core_value_sigC0E3 + var_core_value_sig130F - 7 - 6, var_core_value_sig52F7 + 22 / 2 - 2, 6), var_core_value_sig1998.restore(), {
    bottom: var_core_value_sig52F7 + 22,
    left: var_core_value_sigC0E3,
    right: var_core_value_sigC0E3 + var_core_value_sig130F,
    top: var_core_value_sig52F7
  };
}
function Se(var_core_value_sig866F, var_core_value_sigDE3D, var_core_value_sigF175, var_core_value_sig6A18) {
  var_core_value_sig866F.save(), var_core_value_sig866F.beginPath(), var_core_value_sig866F.moveTo(var_core_value_sigDE3D, var_core_value_sigF175), var_core_value_sig866F.lineTo(var_core_value_sigDE3D + var_core_value_sig6A18 / 2, var_core_value_sigF175 + var_core_value_sig6A18 / 2), var_core_value_sig866F.lineTo(var_core_value_sigDE3D + var_core_value_sig6A18, var_core_value_sigF175), var_core_value_sig866F.strokeStyle = G, var_core_value_sig866F.lineWidth = 1.4, var_core_value_sig866F.lineCap = "round", var_core_value_sig866F.lineJoin = "round", var_core_value_sig866F.stroke(), var_core_value_sig866F.restore();
}
function Ce(var_core_value_sig4E3D, var_core_value_sig49B0, var_core_value_sig2547, var_core_value_sigBCA9, var_core_value_sig4CDF, var_core_value_sig3F79) {
  let var_core_value_sig880E = Math.min(var_core_value_sig3F79, var_core_value_sigBCA9 / 2, var_core_value_sig4CDF / 2);
  var_core_value_sig4E3D.save(), var_core_value_sig4E3D.beginPath(), var_core_value_sig4E3D.moveTo(var_core_value_sig49B0 + var_core_value_sig880E, var_core_value_sig2547), var_core_value_sig4E3D.lineTo(var_core_value_sig49B0 + var_core_value_sigBCA9 - var_core_value_sig880E, var_core_value_sig2547), var_core_value_sig4E3D.quadraticCurveTo(var_core_value_sig49B0 + var_core_value_sigBCA9, var_core_value_sig2547, var_core_value_sig49B0 + var_core_value_sigBCA9, var_core_value_sig2547 + var_core_value_sig880E), var_core_value_sig4E3D.lineTo(var_core_value_sig49B0 + var_core_value_sigBCA9, var_core_value_sig2547 + var_core_value_sig4CDF - var_core_value_sig880E), var_core_value_sig4E3D.quadraticCurveTo(var_core_value_sig49B0 + var_core_value_sigBCA9, var_core_value_sig2547 + var_core_value_sig4CDF, var_core_value_sig49B0 + var_core_value_sigBCA9 - var_core_value_sig880E, var_core_value_sig2547 + var_core_value_sig4CDF), var_core_value_sig4E3D.lineTo(var_core_value_sig49B0 + var_core_value_sig880E, var_core_value_sig2547 + var_core_value_sig4CDF), var_core_value_sig4E3D.quadraticCurveTo(var_core_value_sig49B0, var_core_value_sig2547 + var_core_value_sig4CDF, var_core_value_sig49B0, var_core_value_sig2547 + var_core_value_sig4CDF - var_core_value_sig880E), var_core_value_sig4E3D.lineTo(var_core_value_sig49B0, var_core_value_sig2547 + var_core_value_sig880E), var_core_value_sig4E3D.quadraticCurveTo(var_core_value_sig49B0, var_core_value_sig2547, var_core_value_sig49B0 + var_core_value_sig880E, var_core_value_sig2547), var_core_value_sig4E3D.closePath(), var_core_value_sig4E3D.fillStyle = "gray.50", var_core_value_sig4E3D.fill(), var_core_value_sig4E3D.strokeStyle = "gray.200", var_core_value_sig4E3D.lineWidth = 1, var_core_value_sig4E3D.stroke(), var_core_value_sig4E3D.restore();
}
function we(var_core_value_sigC9ED, var_core_value_sigB57B, var_core_value_sig780B) {
  let {
    glyph: var_core_value_sig7D1B,
    x: var_core_value_sig7BE0,
    y: var_core_value_sig7D40
  } = var_core_value_sigB57B;
  var_core_value_sigC9ED.save(), var_core_value_sigC9ED.font = Te(var_core_value_sig7D1B), var_core_value_sigC9ED.textBaseline = "alphabetic", var_core_value_sigC9ED.fillStyle = var_core_value_sig780B, var_core_value_sigC9ED.fillText(var_core_value_sig7D1B.content, var_core_value_sig7BE0, var_core_value_sig7D40), var_core_value_sigC9ED.restore();
}
function Te(var_core_value_sig6C7E) {
  var var_core_value_sig68BE, var_core_value_sig04C6;
  return ((var_core_value_sig68BE = var_core_value_sig6C7E.fontStyle) == null ? undefined : var_core_value_sig68BE.fontString) ?? (((var_core_value_sig04C6 = var_core_value_sig6C7E.ts) == null ? undefined : var_core_value_sig04C6.fs) ?? 12) + "pt monospace";
}
function X(var_core_value_sigCA05, var_core_value_sig2F2B, var_core_value_sig70AF) {
  let {
      scaleX: var_core_value_sigD04E,
      scaleY: var_core_value_sigB99B
    } = var_core_value_sig70AF.getAncestorScale(),
    var_core_value_sig5A75 = var_core_value_sig70AF.getViewport("viewMain");
  return var_core_value_sig5A75 ? {
    x: var_core_value_sigCA05 / var_core_value_sigD04E + var_core_value_sig5A75.viewportScrollX,
    y: var_core_value_sig2F2B / var_core_value_sigB99B + var_core_value_sig5A75.viewportScrollY
  } : {
    x: var_core_value_sigCA05,
    y: var_core_value_sig2F2B
  };
}
const Z = new Set([u.AlignCenterCommand["id"], u.AlignJustifyCommand["id"], u.AlignLeftCommand["id"], u.AlignOperationCommand["id"], u.AlignRightCommand["id"], u.BulletListCommand["id"], u.CheckListCommand["id"], u.OrderListCommand["id"], u.SetInlineFormatBoldCommand["id"], u.SetInlineFormatCommand["id"], u.SetInlineFormatFontFamilyCommand["id"], u.SetInlineFormatFontSizeCommand["id"], u.SetInlineFormatItalicCommand["id"], u.SetInlineFormatStrikethroughCommand["id"], u.SetInlineFormatSubscriptCommand["id"], u.SetInlineFormatSuperscriptCommand["id"], u.SetInlineFormatTextBackgroundColorCommand["id"], u.SetInlineFormatTextColorCommand["id"], u.SetInlineFormatUnderlineCommand["id"], u.SetParagraphNamedStyleCommand["id"]]),
  Ee = {
    id: u.DeleteCurrentParagraphCommand["id"],
    name: "docs-code.command.delete-current-paragraph",
    type: l.CommandType["COMMAND"],
    multi: true,
    priority: 100,
    handler: async (var_core_value_sig7BAF, var_core_value_sig8F69) => {
      var var_core_value_sig6884;
      return (var_core_value_sig8F69 == null || (var_core_value_sig6884 = var_core_value_sig8F69.blockRange) == null ? undefined : var_core_value_sig6884.blockType) === l.DocumentBlockRangeType["CODE"] ? (await var_core_value_sig7BAF.get(l.ICommandService).executeCommand(c.DocsCodeRemoveCommand["id"], {
        unitId: var_core_value_sig8F69.unitId,
        blockId: var_core_value_sig8F69.blockRange["blockId"]
      }), true) : false;
    }
  };
let Q = class extends l.Disposable {
  constructor(var_core_value_sigB7FC, var_core_value_sig9CD9, var_core_value_sigFD0C, var_core_value_sig849B, var_core_value_sig5F1A) {
    super(), this._docAutoFormatService = var_core_value_sigB7FC, this._docSelectionManagerService = var_core_value_sig9CD9, this._commandService = var_core_value_sigFD0C, this._univerInstanceService = var_core_value_sig849B, this._menuManagerService = var_core_value_sig5F1A, this._menuManagerService["mergeMenu"](E), this._menuManagerService["appendRootMenu"](oe), this._initBoundaryDeleteGuard(), this._initCancelEmptyCodeParagraphAutoFormat(), this._initStyleCommandGuard(), this.disposeWithMe(this._commandService["registerMultipleCommand"](Ee));
  }
  _initBoundaryDeleteGuard() {
    [{
      id: u.DeleteLeftCommand["id"],
      direction: "left"
    }, {
      id: u.DeleteRightCommand["id"],
      direction: "right"
    }].forEach(({
      id: var_core_value_sigA5F1,
      direction: var_core_value_sig97A2
    }) => {
      this.disposeWithMe(this._docAutoFormatService["registerAutoFormat"]({
        id: var_core_value_sigA5F1,
        match: var_core_value_sig48BD => var_core_value_sig48BD.selection["collapsed"] ? (0, c.isCodeBoundaryDelete)({
          cursorOffset: var_core_value_sig48BD.selection["startOffset"],
          direction: var_core_value_sig97A2,
          documentData: var_core_value_sig48BD.unit["getSnapshot"]()
        }) : false,
        getMutations: () => [{
          id: c.DocsCodeConsumeBoundaryDeleteCommand["id"]
        }],
        priority: 50
      }));
    });
  }
  _initCancelEmptyCodeParagraphAutoFormat() {
    [u.DeleteLeftCommand["id"], u.DeleteRightCommand["id"]].forEach(var_core_value_sig07E9 => {
      this.disposeWithMe(this._docAutoFormatService["registerAutoFormat"]({
        id: var_core_value_sig07E9,
        match: var_core_value_sig429F => var_core_value_sig429F.selection["collapsed"] ? (0, c.buildCancelEmptyCodeParagraphActions)({
          cursorOffset: var_core_value_sig429F.selection["startOffset"],
          documentData: var_core_value_sig429F.unit["getSnapshot"]()
        }) != null : false,
        getMutations: var_core_value_sigF62A => [{
          id: c.DocsCodeCancelEmptyParagraphCommand["id"],
          params: {
            cursorOffset: var_core_value_sigF62A.selection["startOffset"]
          }
        }],
        priority: 100
      }));
    });
  }
  _initStyleCommandGuard() {
    this.disposeWithMe(this._commandService["beforeCommandExecuted"](var_core_value_sig4F59 => {
      if (!(!Z.has(var_core_value_sig4F59.id) || !this._isSelectionInCodeBlock())) throw new l["CustomCommandExecutionError"]("Style\x20commands\x20are\x20disabled\x20inside\x20docs\x20code\x20blocks.");
    }));
  }
  _isSelectionInCodeBlock() {
    let var_core_value_sigB455 = this._univerInstanceService["getCurrentUnitOfType"](l.UniverInstanceType["UNIVER_DOC"]),
      var_core_value_sig5241 = var_core_value_sigB455 == null ? undefined : var_core_value_sigB455.getBody(),
      var_core_value_sigC6E5 = this._docSelectionManagerService["getTextRanges"]() ?? [];
    return !var_core_value_sig5241 || var_core_value_sigC6E5.length === 0 ? false : (var_core_value_sig5241.blockRanges ?? []).some(var_core_value_sigF564 => var_core_value_sigF564.blockType === l.DocumentBlockRangeType["CODE"] && var_core_value_sigC6E5.some(var_core_value_sig8178 => Math.max(var_core_value_sig8178.startOffset, var_core_value_sigF564.startIndex) <= Math.min(var_core_value_sig8178.endOffset, var_core_value_sigF564.endIndex)));
  }
};
Q = k([O(0, (0, l.Inject)(u.DocAutoFormatService)), O(1, (0, l.Inject)(m.DocSelectionManagerService)), O(2, l.ICommandService), O(3, l.IUniverInstanceService), O(4, d.IMenuManagerService)], Q);
let $ = class extends l.Plugin {
  constructor(var_core_value_sigCEFB = D, var_core_value_sig1537, var_core_value_sigE4C6, var_core_value_sig4313) {
    super(), this._config = var_core_value_sigCEFB, this._injector = var_core_value_sig1537, this._renderManagerService = var_core_value_sigE4C6, this._configService = var_core_value_sig4313;
    let {
      menu: var_core_value_sigFC87,
      ...var_core_value_sig156F
    } = (0, l.merge)({}, D, this._config);
    var_core_value_sigFC87 && this._configService["setConfig"]("menu", var_core_value_sigFC87, {
      merge: true
    }), this._configService["setConfig"]("docs-code-ui.config", var_core_value_sig156F);
  }
  onStarting() {
    this._injector["add"]([M]), this._injector["add"]([A]), this._injector["get"](M), this._injector["get"](A), this._injector["add"]([Q]), this._injector["get"](Q);
  }
  onRendered() {
    this.disposeWithMe(this._renderManagerService["registerRenderModule"](l.UniverInstanceType["UNIVER_DOC"], [K]));
  }
};
U($, "pluginName", c.DOCS_CODE_PLUGIN + "_UI_PLUGIN"), U($, "packageName", se), U($, "version", ce), U($, "type", l.UniverInstanceType["UNIVER_DOC"]), $ = k([(0, l.DependentOn)(ee.UniverLicensePlugin, m.UniverDocsPlugin, f.UniverRenderEnginePlugin, u.UniverDocsUIPlugin, c.UniverDocsCodePlugin), O(1, (0, l.Inject)(l.Injector)), O(2, f.IRenderManagerService), O(3, l.IConfigService)], $), exports.DocsCodeUIMenuSchema = E, Object.defineProperty(exports, "UniverDocsCodeUIPlugin", {
  enumerable: true,
  get: function () {
    return $;
  }
});
