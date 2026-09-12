Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var e = Object.create,
  t = Object.defineProperty,
  n = Object.getOwnPropertyDescriptor,
  r = Object.getOwnPropertyNames,
  i = Object.getPrototypeOf,
  a = Object.prototype["hasOwnProperty"],
  o = (_0x5e8bad, _0x1aeb98, _0x5058b2, _0xf10fdb) => {
    if (
      (_0x1aeb98 && typeof _0x1aeb98 == "object") ||
      typeof _0x1aeb98 == "function"
    ) {
      for (
        var _0x281bad = r(_0x1aeb98),
          _0x2f5562 = 0,
          _0x5da297 = _0x281bad.length,
          _0x26a749;
        _0x2f5562 < _0x5da297;
        _0x2f5562++
      )
        ((_0x26a749 = _0x281bad[_0x2f5562]),
          !a.call(_0x5e8bad, _0x26a749) &&
            _0x26a749 !== _0x5058b2 &&
            t(_0x5e8bad, _0x26a749, {
              get: ((_0x9db04e) => _0x1aeb98[_0x9db04e]).bind(null, _0x26a749),
              enumerable:
                !(_0xf10fdb = n(_0x1aeb98, _0x26a749)) || _0xf10fdb.enumerable,
            }));
    }
    return _0x5e8bad;
  },
  s = (_0x86c1a, _0x3bfb64, _0x527074) => (
    (_0x527074 = _0x86c1a == null ? {} : e(i(_0x86c1a))),
    o(
      _0x3bfb64 || !_0x86c1a || !_0x86c1a.__esModule
        ? t(_0x527074, "default", { value: _0x86c1a, enumerable: true })
        : _0x527074,
      _0x86c1a,
    )
  );
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
((y = s(y)),
  require("prismjs/components/prism-bash.js"),
  require("prismjs/components/prism-c.js"),
  require("prismjs/components/prism-cpp.js"),
  require("prismjs/components/prism-csharp.js"),
  require("prismjs/components/prism-css.js"),
  require("prismjs/components/prism-go.js"),
  require("prismjs/components/prism-java.js"),
  require("prismjs/components/prism-javascript.js"),
  require("prismjs/components/prism-json.js"),
  require("prismjs/components/prism-kotlin.js"),
  require("prismjs/components/prism-markdown.js"),
  require("prismjs/components/prism-markup.js"),
  require("prismjs/components/prism-php.js"),
  require("prismjs/components/prism-python.js"),
  require("prismjs/components/prism-ruby.js"),
  require("prismjs/components/prism-rust.js"),
  require("prismjs/components/prism-sql.js"),
  require("prismjs/components/prism-swift.js"),
  require("prismjs/components/prism-typescript.js"),
  require("prismjs/components/prism-yaml.js"));
const b = [
  { label: "Plain text", value: "plaintext" },
  { label: "JavaScript", value: "javascript" },
  { label: "TypeScript", value: "typescript" },
  { label: "JSON", value: "json" },
  { label: "HTML / XML", value: "markup" },
  { label: "CSS", value: "css" },
  { label: "Markdown", value: "markdown" },
  { label: "YAML", value: "yaml" },
  { label: "SQL", value: "sql" },
  { label: "Bash", value: "bash" },
  { label: "Python", value: "python" },
  { label: "Java", value: "java" },
  { label: "C", value: "c" },
  { label: "C++", value: "cpp" },
  { label: "C#", value: "csharp" },
  { label: "Go", value: "go" },
  { label: "Rust", value: "rust" },
  { label: "Ruby", value: "ruby" },
  { label: "PHP", value: "php" },
  { label: "Swift", value: "swift" },
  { label: "Kotlin", value: "kotlin" },
];
function te(_0x3da95f) {
  var _0x533fc0;
  return (
    ((_0x533fc0 = b.find((_0x2ffadd) => _0x2ffadd.value === _0x3da95f)) == null
      ? undefined
      : _0x533fc0.label) ?? _0x3da95f
  );
}
const x = "docs-code-ui.menu.language";
function S(_0x18d376) {
  return {
    id: c.DocsCodeInsertCommand["id"],
    type: d.MenuItemType["BUTTON"],
    icon: "CodeBlockIcon",
    title: "docs-code-ui.menu.code",
    tooltip: "docs-code-ui.menu.code",
    hidden$: (0, d.getMenuHiddenObservable)(
      _0x18d376,
      l.UniverInstanceType["UNIVER_DOC"],
    ),
    disabled$: (0, u.disableMenuWhenHeaderFooterEditing)(_0x18d376),
  };
}
function C(_0x2fc59d) {
  return {
    ...S(_0x2fc59d),
    hidden$: (0, p.combineLatest)([
      (0, d.getMenuHiddenObservable)(
        _0x2fc59d,
        l.UniverInstanceType["UNIVER_DOC"],
      ),
      (0, u.hideMenuWhenSelectionInBlockRange)(_0x2fc59d),
    ]).pipe((0, p.map)(([_0x15e3b4, _0x3adfa0]) => _0x15e3b4 || _0x3adfa0)),
  };
}
function w(_0x2a1d93) {
  return {
    id: c.DocsCodeInsertBelowCommand["id"],
    type: d.MenuItemType["BUTTON"],
    icon: "CodeBlockIcon",
    title: "docs-code-ui.menu.code",
    hidden$: (0, d.getMenuHiddenObservable)(
      _0x2a1d93,
      l.UniverInstanceType["UNIVER_DOC"],
    ),
    disabled$: (0, u.disableMenuWhenHeaderFooterEditing)(_0x2a1d93),
  };
}
function ne(_0x1b45e4) {
  return {
    id: x,
    type: d.MenuItemType["SUBITEMS"],
    icon: "CodeBlockIcon",
    title: "docs-code-ui.language.title",
    hidden$: (0, p.combineLatest)([
      (0, d.getMenuHiddenObservable)(
        _0x1b45e4,
        l.UniverInstanceType["UNIVER_DOC"],
      ),
      re(_0x1b45e4),
    ]).pipe((0, p.map)(([_0x3d09cb, _0x50e045]) => _0x3d09cb || _0x50e045)),
  };
}
function re(_0x2e1d2c) {
  let _0x4707ca = _0x2e1d2c.get(l.IUniverInstanceService),
    _0x32bc1f = _0x2e1d2c.get(f.IRenderManagerService);
  return new p["Observable"]((_0x18e510) => {
    let _0x2fa3db = null,
      _0xdc86cd = _0x4707ca.focused$["subscribe"]((_0x567825) => {
        if (
          (_0x2fa3db == null || _0x2fa3db.unsubscribe(),
          (_0x2fa3db = null),
          !_0x567825 ||
            _0x4707ca.getUnitType(_0x567825) !==
              l.UniverInstanceType["UNIVER_DOC"])
        ) {
          _0x18e510.next(true);
          return;
        }
        let _0x24ec5e = _0x32bc1f.getRenderUnitById(_0x567825),
          _0x6b6da8 =
            _0x24ec5e == null
              ? undefined
              : _0x24ec5e.with(u.DocParagraphMenuService);
        if (!_0x6b6da8) {
          _0x18e510.next(true);
          return;
        }
        let _0x5834fa = (_0xe4a7fd = _0x6b6da8.activeTarget) => {
          var _0x3325f3;
          _0x18e510.next(
            (_0xe4a7fd == null ? undefined : _0xe4a7fd.kind) !== "blockRange" ||
              ((_0x3325f3 = _0xe4a7fd.blockRange) == null
                ? undefined
                : _0x3325f3.blockType) !== l.DocumentBlockRangeType["CODE"],
          );
        };
        (_0x5834fa(),
          (_0x2fa3db = _0x6b6da8.activeTarget$["subscribe"](_0x5834fa)));
      });
    return () => {
      (_0x2fa3db == null || _0x2fa3db.unsubscribe(), _0xdc86cd.unsubscribe());
    };
  });
}
function ie(_0x4acacf) {
  return (_0x12d1bb) => ({
    id: c.DocsCodeUpdateCommand["id"] + "." + _0x4acacf.value,
    commandId: c.DocsCodeUpdateCommand["id"],
    type: d.MenuItemType["BUTTON"],
    label: _0x4acacf.label,
    params: { config: { language: _0x4acacf.value } },
    hidden$: (0, d.getMenuHiddenObservable)(
      _0x12d1bb,
      l.UniverInstanceType["UNIVER_DOC"],
    ),
  });
}
const ae = b.reduce(
  (_0x3d96af, _0x11b4b0, _0xfbf639) => (
    (_0x3d96af[c.DocsCodeUpdateCommand["id"] + "." + _0x11b4b0.value] = {
      order: _0xfbf639,
      menuItemFactory: ie(_0x11b4b0),
    }),
    _0x3d96af
  ),
  {},
);
(0, u.getDocBlockRangeMenuId)(l.DocumentBlockRangeType["CODE"]);
const T = {
    [d.RibbonInsertGroup["MEDIA"]]: {
      [c.DocsCodeInsertCommand["id"]]: { order: 7, menuItemFactory: S },
    },
  },
  oe = {
    [d.MenuManagerPosition["RIBBON"]]: { [d.RibbonPosition["INSERT"]]: T },
    [u.FLOAT_TOOLBAR_MENU_POSITION]: {
      [u.FLOAT_TEXT_STYLE_MENU_ID]: {
        [c.DocsCodeInsertCommand["id"]]: { order: 12, menuItemFactory: C },
      },
    },
  },
  E = {
    ...T,
    [u.FLOAT_TEXT_STYLE_MENU_ID]: {
      [c.DocsCodeInsertCommand["id"]]: { order: 12, menuItemFactory: C },
    },
    [d.ContextMenuPosition["PARAGRAPH"]]: {
      [d.ContextMenuGroup["LAYOUT"]]: {
        [x]: { order: 0, menuItemFactory: ne, ...ae },
        [u.INSERT_BELLOW_MENU_ID]: {
          [c.DocsCodeInsertBelowCommand["id"]]: {
            order: 7,
            menuItemFactory: w,
          },
        },
      },
      [u.DOC_CONTENT_INSERT_MENU_ID]: {
        [d.ContextMenuGroup["LAYOUT"]]: {
          [c.DocsCodeInsertBelowCommand["id"]]: {
            order: 7,
            menuItemFactory: w,
          },
        },
      },
      [u.EMPTY_PARAGRAPH_MENU_ID]: {
        [d.ContextMenuGroup["LAYOUT"]]: {
          [c.DocsCodeInsertCommand["id"]]: { order: 7, menuItemFactory: S },
        },
      },
      [u.DOC_PARAGRAPH_T_INSERT_MENU_ID]: {
        quickBottom: {
          [c.DocsCodeInsertCommand["id"]]: { order: 2, menuItemFactory: S },
        },
      },
      [u.DOC_PARAGRAPH_T_EDIT_MENU_ID]: {
        quickBottom: {
          [c.DocsCodeInsertCommand["id"]]: { order: 3, menuItemFactory: S },
        },
      },
      [u.DOC_PARAGRAPH_T_INSERT_BELOW_MENU_ID]: {
        quickBottom: {
          [c.DocsCodeInsertBelowCommand["id"]]: {
            order: 2,
            menuItemFactory: w,
          },
        },
      },
    },
  };
var se = "@univerjs-pro/docs-code-ui",
  ce = "1.0.0-insiders.20260907-70fc579";
const D = {};
function O(_0x1d3d5a, _0x354f05) {
  return function (_0xd9955c, _0x273c52) {
    _0x354f05(_0xd9955c, _0x273c52, _0x1d3d5a);
  };
}
function k(_0x38295f, _0x19286b, _0x1d3200, _0x2e3975) {
  var _0x26a7df = arguments.length,
    _0x305e1d =
      _0x26a7df < 3
        ? _0x19286b
        : _0x2e3975 === null
          ? (_0x2e3975 = Object.getOwnPropertyDescriptor(_0x19286b, _0x1d3200))
          : _0x2e3975,
    _0x17dd4f;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x305e1d = Reflect.decorate(_0x38295f, _0x19286b, _0x1d3200, _0x2e3975);
  else {
    for (var _0x25a606 = _0x38295f.length - 1; _0x25a606 >= 0; _0x25a606--)
      (_0x17dd4f = _0x38295f[_0x25a606]) &&
        (_0x305e1d =
          (_0x26a7df < 3
            ? _0x17dd4f(_0x305e1d)
            : _0x26a7df > 3
              ? _0x17dd4f(_0x19286b, _0x1d3200, _0x305e1d)
              : _0x17dd4f(_0x19286b, _0x1d3200)) || _0x305e1d);
  }
  return (
    _0x26a7df > 3 &&
      _0x305e1d &&
      Object.defineProperty(_0x19286b, _0x1d3200, _0x305e1d),
    _0x305e1d
  );
}
let A = class extends l.Disposable {
  constructor(_0x2be622, _0x8af6ea, _0x5cefa0) {
    (super(),
      (this._clipboardService = _0x2be622),
      (this._pasteAdapterService = _0x8af6ea),
      (this._model = _0x5cefa0),
      this.disposeWithMe(
        this._clipboardService["addClipboardHook"]({
          onCopyDocData: (_0x3e8ffb, _0x21bce9) =>
            this._appendConfig(_0x3e8ffb, _0x21bce9.sourceDocuments),
        }),
      ),
      this.disposeWithMe(
        this._pasteAdapterService["registerAdapter"]({
          getPasteMutationInfos: (_0x415d1f) =>
            this._getPasteMutationInfos(_0x415d1f),
        }),
      ));
  }
  _appendConfig(_0x33ddf3, _0x1bfdc3) {
    let _0x26e0d9 = {};
    return (
      _0x1bfdc3.forEach((_0x129e1d) => {
        var _0x472715;
        (_0x472715 = _0x129e1d.body) == null ||
          (_0x472715 = _0x472715.blockRanges) == null ||
          _0x472715.forEach((_0x333e54) => {
            if (_0x333e54.blockType !== l.DocumentBlockRangeType["CODE"])
              return;
            let _0x6d0d70 = this._model["getCodeConfig"](
              _0x129e1d.id,
              _0x333e54.blockId,
            );
            _0x6d0d70 &&
              (_0x26e0d9[_0x333e54.blockId] = (0, c.normalizeDocsCodeConfig)(
                _0x6d0d70,
              ));
          });
      }),
      Object.keys(_0x26e0d9).length === 0
        ? _0x33ddf3
        : {
            ..._0x33ddf3,
            resources: [
              ...(_0x33ddf3.resources ?? []).filter(
                (_0x6d2160) => _0x6d2160.name !== c.DOCS_CODE_PLUGIN,
              ),
              {
                name: c.DOCS_CODE_PLUGIN,
                data: JSON.stringify({ codes: _0x26e0d9 }),
              },
            ],
          }
    );
  }
  _getPasteMutationInfos(_0x213920) {
    var _0x1bf6c0;
    let _0x8ec3b2 =
        (_0x1bf6c0 = _0x213920.doc["resources"]) == null
          ? undefined
          : _0x1bf6c0.find(
              (_0x1a749b) => _0x1a749b.name === c.DOCS_CODE_PLUGIN,
            ),
      _0x1267eb = _0x8ec3b2 ? le(_0x8ec3b2.data).codes : {},
      _0x2e3f9f = [],
      _0x1c88d1 = [];
    return (
      _0x213920.blockRangeMappings["forEach"](
        ({ sourceBlockRange: _0x241227, targetBlockRange: _0x27eed0 }) => {
          if (_0x241227.blockType !== l.DocumentBlockRangeType["CODE"]) return;
          let _0x3e1be4 = _0x1267eb[_0x241227.blockId];
          _0x3e1be4 &&
            (_0x2e3f9f.push({
              id: c.SetDocsCodeConfigMutation["id"],
              params: {
                unitId: _0x213920.unitId,
                blockId: _0x27eed0.blockId,
                config: _0x3e1be4,
              },
            }),
            _0x1c88d1.push({
              id: c.RemoveDocsCodeConfigMutation["id"],
              params: { unitId: _0x213920.unitId, blockId: _0x27eed0.blockId },
            }));
        },
      ),
      { redoMutations: _0x2e3f9f, undoMutations: _0x1c88d1 }
    );
  }
};
A = k(
  [
    O(0, (0, l.Inject)(u.IDocClipboardService)),
    O(1, (0, l.Inject)(u.IDocClipboardPasteAdapterService)),
    O(2, (0, l.Inject)(c.DocsCodeModel)),
  ],
  A,
);
function le(_0x4effd2) {
  try {
    return (0, c.normalizeDocsCodeMetadataResource)(JSON.parse(_0x4effd2));
  } catch {
    return { codes: {} };
  }
}
const j = "docs-code-ui.language-picker";
function ue(_0x37c378) {
  var _0x2e04a3, _0x2ff83e;
  let _0x5d302e = (0, d.useDependency)(l.LocaleService),
    _0x457153 =
      (_0x2e04a3 = _0x37c378.popup) == null ||
      (_0x2e04a3 = _0x2e04a3.extraProps) == null
        ? undefined
        : _0x2e04a3.activeLanguage,
    _0x4595b6 =
      (_0x2ff83e = _0x37c378.popup) == null ||
      (_0x2ff83e = _0x2ff83e.extraProps) == null
        ? undefined
        : _0x2ff83e.onSelect;
  return (0, _.jsxs)("section", {
    "data-u-comp": j,
    className:
      "univer-max-h-[320px] univer-w-[188px] univer-overflow-hidden univer-overflow-y-auto univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-1 univer-shadow-lg dark:!univer-border-gray-600 dark:!univer-bg-gray-900",
    children: [
      (0, _.jsx)("div", {
        className:
          "univer-px-2 univer-pb-1 univer-pt-0.5 univer-text-xs univer-leading-5 univer-text-gray-500 dark:!univer-text-gray-400",
        children: _0x5d302e.t("docs-code-ui.language.title"),
      }),
      b.map((_0x264eed) => {
        let _0x57beb1 = _0x264eed.value === _0x457153;
        return (0, _.jsxs)(
          g.Button,
          {
            size: "small",
            variant: "ghost",
            type: "button",
            className: (0, g.clsx)("univer-w-full univer-justify-between", {
              "univer-bg-primary-50\x20univer-text-primary-600\x20dark:!univer-bg-gray-800\x20dark:!univer-text-primary-300":
                _0x57beb1,
            }),
            onClick: () =>
              _0x4595b6 == null ? undefined : _0x4595b6(_0x264eed.value),
            children: [
              (0, _.jsx)("span", { children: _0x264eed.label }),
              _0x57beb1 &&
                (0, _.jsx)(h.CheckMarkIcon, { className: "univer-text-sm" }),
            ],
          },
          _0x264eed.value,
        );
      }),
    ],
  });
}
let M = class extends l.Disposable {
  constructor(_0x209586, _0x58a42c) {
    (super(),
      (this._componentManager = _0x209586),
      (this._iconManager = _0x58a42c),
      this._registerComponents(),
      this._registerIcons());
  }
  _registerIcons() {
    this.disposeWithMe(
      this._iconManager["register"]({ CodeBlockIcon: h.CodeBlockIcon }),
    );
  }
  _registerComponents() {
    this.disposeWithMe(this._componentManager["register"](j, ue));
  }
};
M = k(
  [O(0, (0, l.Inject)(d.ComponentManager)), O(1, (0, l.Inject)(d.IconManager))],
  M,
);
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
    tag: "green.700",
  },
  N = "gray.900";
function fe(_0x195957, _0x1343a9) {
  if (_0x1343a9 === "plaintext") return [];
  let _0x5dd455 =
    y.default["languages"][_0x1343a9] ?? y.default["languages"].javascript;
  if (!_0x5dd455 || !_0x195957) return [];
  let _0x15f4ba = [],
    _0x57743d = 0;
  return (
    P(y.default["tokenize"](_0x195957, _0x5dd455), (_0x127870, _0x1bffb3) => {
      let _0x597ce6 = _0x57743d;
      ((_0x57743d += _0x127870.length),
        _0x127870 &&
          _0x15f4ba.push({
            color: I(_0x1bffb3),
            end: _0x57743d,
            start: _0x597ce6,
          }));
    }),
    _0x15f4ba
  );
}
function pe(_0x13d7f8, _0x3f94ee) {
  var _0xb61cf1;
  return (
    ((_0xb61cf1 = _0x13d7f8.find(
      (_0x67a987) => _0x67a987.start <= _0x3f94ee && _0x3f94ee < _0x67a987.end,
    )) == null
      ? undefined
      : _0xb61cf1.color) ?? N
  );
}
function P(_0x14619f, _0x187af9, _0x5ce105 = "") {
  _0x14619f.forEach((_0x4fbe08) => {
    if (typeof _0x4fbe08 == "string") {
      _0x187af9(_0x4fbe08, _0x5ce105);
      return;
    }
    let _0x9d4a57 = F(_0x4fbe08.type),
      _0x5658cf = _0x4fbe08.content;
    typeof _0x5658cf == "string"
      ? _0x187af9(_0x5658cf, _0x9d4a57)
      : P(
          Array.isArray(_0x5658cf) ? _0x5658cf : [_0x5658cf],
          _0x187af9,
          _0x9d4a57,
        );
  });
}
function F(_0x58bf3a) {
  return _0x58bf3a.replace(/-([a-z])/g, (_0x325c12, _0x148963) =>
    _0x148963.toUpperCase(),
  );
}
function I(_0x138dd0) {
  return de[_0x138dd0] ?? N;
}
function L(_0x56611a, _0x40bf8e, _0x563507, _0x486bae) {
  let _0x52179a = [];
  return (
    _0x56611a.forEach((_0x91ef34) => {
      let _0x4f4157 = _0x40bf8e.filter(
        (_0x523209) =>
          _0x523209.pageIndex >= 0 &&
          _0x523209.ed >= _0x91ef34.startIndex &&
          _0x523209.st <= _0x91ef34.endIndex,
      );
      Array.from(
        new Set(_0x4f4157.map((_0x4cf940) => _0x4cf940.pageIndex)),
      ).forEach((_0x303089) => {
        let _0x2b9aee = _0x4f4157.filter(
          (_0x3b991a) => _0x3b991a.pageIndex === _0x303089,
        );
        Array.from(
          new Set(_0x2b9aee.map((_0x89bf39) => _0x89bf39.layoutFragment)),
        ).forEach((_0x2f0e4a) => {
          let _0x1508b1 = _0x2b9aee.filter(
              (_0x308ba0) => _0x308ba0.layoutFragment === _0x2f0e4a,
            ),
            _0x2912c9 = Math.min(..._0x1508b1.map(V)),
            _0x576ec2 = Math.max(..._0x1508b1.map(me)),
            _0x7037f8 = Math.min(..._0x1508b1.map(R)) - _0x486bae,
            _0x14c138 = Math.max(..._0x1508b1.map(z)) + _0x486bae,
            _0x5b8f3c = B(_0x1508b1);
          _0x52179a.push({
            blockId: _0x91ef34.blockId,
            ..._0x5b8f3c,
            height: _0x576ec2 - _0x2912c9 + _0x563507 * 2,
            left: _0x7037f8,
            pageIndex: _0x303089,
            top: _0x2912c9 - _0x563507,
            width: _0x14c138 - _0x7037f8,
          });
        });
      });
    }),
    _0x52179a
  );
}
function R(_0x59c1aa) {
  return _0x59c1aa.visualLeft ?? _0x59c1aa.left;
}
function z(_0x2e5aa0) {
  return (
    (_0x2e5aa0.visualLeft ?? _0x2e5aa0.left) +
    (_0x2e5aa0.visualWidth ?? _0x2e5aa0.width)
  );
}
function B(_0x133911) {
  let _0xa8b25a = _0x133911
      .map((_0xd71844) => _0xd71844.clipLeft)
      .filter((_0x2bec13) => _0x2bec13 != null),
    _0x3786c0 = _0x133911
      .map((_0xb7b72a) => _0xb7b72a.clipRight)
      .filter((_0x500fa5) => _0x500fa5 != null);
  if (!_0xa8b25a.length || !_0x3786c0.length) return {};
  let _0x41bf0e = Math.max(..._0xa8b25a),
    _0x3ee303 = Math.min(..._0x3786c0);
  return _0x3ee303 > _0x41bf0e
    ? { clipLeft: _0x41bf0e, clipRight: _0x3ee303 }
    : {};
}
function V(_0x2cdb29) {
  return (
    _0x2cdb29.top + (_0x2cdb29.marginTop ?? 0) + (_0x2cdb29.paddingTop ?? 0)
  );
}
function me(_0x3e5424) {
  return _0x3e5424.contentHeight == null
    ? _0x3e5424.top +
        _0x3e5424.height -
        (_0x3e5424.marginBottom ?? 0) -
        (_0x3e5424.paddingBottom ?? 0)
    : V(_0x3e5424) + _0x3e5424.contentHeight;
}
function H(_0x52388d) {
  "@babel/helpers - typeof";
  return (
    (H =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x1a4f5c) {
            return typeof _0x1a4f5c;
          }
        : function (_0x25b52e) {
            return _0x25b52e &&
              typeof Symbol == "function" &&
              _0x25b52e.constructor === Symbol &&
              _0x25b52e !== Symbol.prototype
              ? "symbol"
              : typeof _0x25b52e;
          }),
    H(_0x52388d)
  );
}
function he(_0x7ddb8a, _0x1eda68) {
  if (H(_0x7ddb8a) != "object" || !_0x7ddb8a) return _0x7ddb8a;
  var _0x5bf412 = _0x7ddb8a[Symbol.toPrimitive];
  if (_0x5bf412 !== undefined) {
    var _0x4140e0 = _0x5bf412.call(_0x7ddb8a, _0x1eda68 || "default");
    if (H(_0x4140e0) != "object") return _0x4140e0;
    throw TypeError(
      "@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.",
    );
  }
  return (_0x1eda68 === "string" ? String : Number)(_0x7ddb8a);
}
function ge(_0x355fba) {
  var _0x42d66c = he(_0x355fba, "string");
  return H(_0x42d66c) == "symbol" ? _0x42d66c : _0x42d66c + "";
}
function U(_0x11e098, _0x3da94d, _0x5ac68c) {
  return (
    (_0x3da94d = ge(_0x3da94d)) in _0x11e098
      ? Object.defineProperty(_0x11e098, _0x3da94d, {
          value: _0x5ac68c,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x11e098[_0x3da94d] = _0x5ac68c),
    _0x11e098
  );
}
const W = -10990,
  G = "gray.700";
let K = class extends l.Disposable {
  constructor(
    _0x1efdb6,
    _0x433532,
    _0x65b570,
    _0x134707,
    _0x326e77,
    _0x4d000c,
    _0x115079,
  ) {
    (super(),
      (this._context = _0x1efdb6),
      (this._docSkeletonManagerService = _0x433532),
      (this._docSelectionManagerService = _0x65b570),
      (this._docsCodeModel = _0x134707),
      (this._docCanvasPopManagerService = _0x326e77),
      (this._commandService = _0x4d000c),
      (this._permissionService = _0x115079),
      U(this, "_languageHitRects", []),
      U(this, "_blockHitRects", []),
      U(this, "_languagePopoverDisposable", null),
      U(this, "_activeLanguageBlockId", null),
      U(this, "_hoveredCodeBlockId", null),
      U(this, "_cursorBeforeLanguageHover", null),
      this._initRender(),
      this._initPointer(),
      this.disposeWithMe(
        this._docsCodeModel["change$"].subscribe(({ unitId: _0x11acd7 }) => {
          _0x11acd7 === this._context["unitId"] && this._makeDirty();
        }),
      ),
      this.disposeWithMe(
        this._docSelectionManagerService["textSelection$"].subscribe(
          ({ unitId: _0x549593 }) => {
            _0x549593 === this._context["unitId"] && this._makeDirty();
          },
        ),
      ),
      this.disposeWithMe(
        this._permissionService["permissionPointUpdate$"].subscribe(() => {
          (this._closeLanguagePopover(),
            this._setHoveredCodeBlock(null),
            this._restorePointerCursor(),
            this._makeDirty());
        }),
      ));
  }
  _initRender() {
    var _0x5b4077;
    let _0x1675eb = this._context["mainComponent"],
      _0x5cbd4d =
        _0x1675eb == null || (_0x5b4077 = _0x1675eb.pageRender$) == null
          ? undefined
          : _0x5b4077.subscribe((_0x3873c0) => this._drawPage(_0x3873c0));
    _0x5cbd4d &&
      this.disposeWithMe({
        dispose: () => {
          var _0x5ad9db, _0x5bca95;
          return (
            ((_0x5ad9db = _0x5cbd4d.unsubscribe) == null
              ? undefined
              : _0x5ad9db.call(_0x5cbd4d)) ??
            ((_0x5bca95 = _0x5cbd4d.dispose) == null
              ? undefined
              : _0x5bca95.call(_0x5cbd4d))
          );
        },
      });
  }
  _initPointer() {
    let _0x229f33 = this._context["mainComponent"] ?? this._context["scene"];
    (this.disposeWithMe(
      _0x229f33.onPointerMove$["subscribeEvent"]({
        next: ([_0x2bc285]) => {
          var _0x39e4a4;
          let _0x3bc7e7 = X(
              _0x2bc285.offsetX,
              _0x2bc285.offsetY,
              this._context["scene"],
            ),
            _0x4dcb48 = this._hitLanguageButton(_0x3bc7e7.x, _0x3bc7e7.y);
          (this._setHoveredCodeBlock(
            (_0x4dcb48 == null ? undefined : _0x4dcb48.blockId) ??
              ((_0x39e4a4 = this._hitCodeBlock(_0x3bc7e7.x, _0x3bc7e7.y)) ==
              null
                ? undefined
                : _0x39e4a4.blockId) ??
              null,
          ),
            _0x4dcb48 && this._canEditBlock(_0x4dcb48.blockId)
              ? this._setPointerCursor()
              : this._restorePointerCursor());
        },
        priority: W,
      }),
    ),
      this.disposeWithMe(
        _0x229f33.onPointerLeave$["subscribeEvent"](() => {
          (this._setHoveredCodeBlock(null), this._restorePointerCursor());
        }),
      ),
      this.disposeWithMe(
        _0x229f33.onPointerDown$["subscribeEvent"]({
          next: ([_0x375b99, _0x15d6a0]) => {
            var _0x141137, _0x282234, _0xffa43b;
            if (_0x375b99.button === 2) return;
            let _0x530571 = X(
                _0x375b99.offsetX,
                _0x375b99.offsetY,
                this._context["scene"],
              ),
              _0x5d647d = this._hitLanguageButton(_0x530571.x, _0x530571.y);
            if (!_0x5d647d) {
              this._closeLanguagePopover();
              return;
            }
            (_0x15d6a0 == null ||
              (_0x141137 = _0x15d6a0.stopPropagation) == null ||
              _0x141137.call(_0x15d6a0),
              _0x15d6a0 && (_0x15d6a0.skipNextObservers = true),
              (_0x282234 = _0x375b99.stopPropagation) == null ||
                _0x282234.call(_0x375b99),
              (_0xffa43b = _0x375b99.preventDefault) == null ||
                _0xffa43b.call(_0x375b99),
              this._openLanguagePopover(_0x5d647d));
          },
          priority: W,
        }),
      ));
  }
  _drawPage(_0x3e2228) {
    var _0x84b5b7;
    let _0x51eede = this._context["unit"].getBody(),
      _0x26b2c9 =
        (_0x51eede == null || (_0x84b5b7 = _0x51eede.blockRanges) == null
          ? undefined
          : _0x84b5b7.filter(
              (_0x2a184c) =>
                _0x2a184c.blockType === l.DocumentBlockRangeType["CODE"],
            )) ?? [];
    if (!_0x51eede || !_0x26b2c9.length) {
      ((this._languageHitRects = []), (this._blockHitRects = []));
      return;
    }
    let _0x3578da =
        this._docSkeletonManagerService["getSkeleton"]().getSkeletonData(),
      _0x5c2003 = (_0x3578da == null ? undefined : _0x3578da.pages) ?? [],
      _0x82fd5a = _0x5c2003.indexOf(_0x3e2228.page);
    if (_0x82fd5a < 0) return;
    _0x82fd5a === 0 &&
      ((this._languageHitRects = []), (this._blockHitRects = []));
    let _0x13a3b8 = this._collectLines(_0x5c2003, _0x26b2c9),
      _0x227576 = q(this._context["mainComponent"]),
      _0x535597 = L(_0x26b2c9, _0x13a3b8, 8, 0).filter(
        (_0xcc0f52) => _0xcc0f52.pageIndex === _0x82fd5a,
      );
    (_0x535597.forEach((_0x32fc5d) =>
      J(_0x3e2228.ctx, _0x32fc5d, () => {
        be(
          _0x3e2228.ctx,
          _0x32fc5d.left,
          _0x32fc5d.top,
          _0x32fc5d.width,
          _0x32fc5d.height,
          6,
        );
      }),
    ),
      _0x535597.forEach((_0x54628e) => {
        let _0x63eeaa = Y(
          {
            blockId: _0x54628e.blockId,
            bottom: _0x54628e.top + _0x54628e.height + _0x227576.docsTop,
            left: _0x54628e.left + _0x227576.docsLeft,
            right: _0x54628e.left + _0x54628e.width + _0x227576.docsLeft,
            top: _0x54628e.top + _0x227576.docsTop,
          },
          _0x54628e,
          _0x227576.docsLeft,
        );
        _0x63eeaa && this._blockHitRects["push"](_0x63eeaa);
      }));
    let _0x577aa8 = new Map(),
      _0x3d55fb = new Map();
    (this._collectGlyphRuns(_0x5c2003, _0x26b2c9)
      .filter((_0x436a3d) => _0x436a3d.pageIndex === _0x82fd5a)
      .forEach((_0x59181c) => {
        var _0x347c62;
        let _0x47a0de = _0x59181c.blockRange["blockId"];
        if (!_0x577aa8.has(_0x47a0de)) {
          let _0x2f6886 = (0, c.normalizeDocsCodeConfig)(
              this._docsCodeModel["getCodeConfig"](
                this._context["unitId"],
                _0x59181c.blockRange["blockId"],
              ),
            ),
            { codeText: _0x566f26, streamOffsetToCodeOffset: _0x3bfc62 } = ye(
              _0x51eede.dataStream,
              _0x59181c.blockRange,
            );
          (_0x577aa8.set(_0x47a0de, fe(_0x566f26, _0x2f6886.language)),
            _0x3d55fb.set(_0x47a0de, _0x3bfc62));
        }
        let _0x3efb16 =
          (_0x347c62 = _0x3d55fb.get(_0x47a0de)) == null
            ? undefined
            : _0x347c62.get(_0x59181c.streamOffset);
        _0x3efb16 != null &&
          we(
            _0x3e2228.ctx,
            _0x59181c,
            pe(_0x577aa8.get(_0x47a0de) ?? [], _0x3efb16),
          );
      }),
      _0x535597.forEach((_0x4818c2) => {
        if (!this._shouldDrawLanguageButton(_0x4818c2.blockId)) return;
        let _0xf7a163 = (0, c.normalizeDocsCodeConfig)(
            this._docsCodeModel["getCodeConfig"](
              this._context["unitId"],
              _0x4818c2.blockId,
            ),
          ),
          _0x300e88 = J(_0x3e2228.ctx, _0x4818c2, () =>
            xe(
              _0x3e2228.ctx,
              _0x4818c2.left,
              _0x4818c2.top,
              _0x4818c2.width,
              _0xf7a163.language,
            ),
          ),
          _0x352589 = Y(
            {
              blockId: _0x4818c2.blockId,
              bottom: _0x300e88.bottom + _0x227576.docsTop,
              left: _0x300e88.left + _0x227576.docsLeft,
              right: _0x300e88.right + _0x227576.docsLeft,
              top: _0x300e88.top + _0x227576.docsTop,
            },
            _0x4818c2,
            _0x227576.docsLeft,
          );
        _0x352589 && this._languageHitRects["push"](_0x352589);
      }));
  }
  _collectLines(_0xdc88c8, _0x59f2f8) {
    let _0x25b3d0 = [],
      _0x2f7f3c = this._getCodeParagraphOwners(_0x59f2f8),
      _0x306bbb = q(this._context["mainComponent"]);
    return (
      (0, v.documentSkeletonLineIterator)(
        _0xdc88c8,
        {
          docsLeft: _0x306bbb.docsLeft,
          pageMarginTop: _0x306bbb.pageMarginTop,
          tableCellInsetX: 6,
          unitId: this._context["unitId"],
        },
        (_0x550903) => {
          let _0x31a6c5 = _0x2f7f3c.get(_0x550903.line["paragraphIndex"]);
          _0x31a6c5 && _0x25b3d0.push(_e(_0x550903, _0x31a6c5));
        },
      ),
      _0x25b3d0
    );
  }
  _collectGlyphRuns(_0x485776, _0x520cb4) {
    let _0x54795f = [],
      _0x2345b1 = this._getCodeParagraphOwners(_0x520cb4),
      _0x305031 = q(this._context["mainComponent"]);
    return (
      (0, v.documentSkeletonLineIterator)(
        _0x485776,
        {
          docsLeft: _0x305031.docsLeft,
          pageMarginTop: _0x305031.pageMarginTop,
          tableCellInsetX: 6,
          unitId: this._context["unitId"],
        },
        (_0x193b1b) => {
          let _0x3106d8 = _0x2345b1.get(_0x193b1b.line["paragraphIndex"]);
          _0x3106d8 &&
            _0x193b1b.line["divides"].forEach((_0x51cbb1) => {
              let _0x219b8b = _0x51cbb1.st;
              _0x51cbb1.glyphGroup["forEach"]((_0x203331) => {
                var _0x2220d1;
                if (ve(_0x203331)) {
                  let _0x3ac519 =
                    _0x193b1b.pageLeft +
                    _0x193b1b.column["left"] +
                    _0x51cbb1.left +
                    _0x51cbb1.paddingLeft +
                    _0x203331.left +
                    _0x203331.xOffset;
                  if (
                    _0x193b1b.clipLeft != null &&
                    _0x193b1b.clipRight != null &&
                    (_0x3ac519 < _0x193b1b.clipLeft ||
                      _0x3ac519 > _0x193b1b.clipRight)
                  ) {
                    var _0x397380;
                    _0x219b8b += Math.max(
                      _0x203331.count,
                      ((_0x397380 = _0x203331.content) == null
                        ? undefined
                        : _0x397380.length) ?? 1,
                    );
                    return;
                  }
                  _0x54795f.push({
                    blockRange: _0x3106d8,
                    divide: _0x51cbb1,
                    glyph: _0x203331,
                    line: _0x193b1b.line,
                    pageIndex: _0x193b1b.pageIndex,
                    streamOffset: _0x219b8b,
                    x: _0x3ac519,
                    y:
                      _0x193b1b.sectionTop +
                      _0x193b1b.line["top"] +
                      _0x193b1b.line["marginTop"] +
                      _0x193b1b.line["paddingTop"] +
                      _0x193b1b.line["asc"],
                  });
                }
                _0x219b8b += Math.max(
                  _0x203331.count,
                  ((_0x2220d1 = _0x203331.content) == null
                    ? undefined
                    : _0x2220d1.length) ?? 1,
                );
              });
            });
        },
      ),
      _0x54795f
    );
  }
  _getCodeParagraphOwners(_0x37c566) {
    var _0x335ddf;
    let _0x501043 = new Map(),
      _0x5adcd5 =
        ((_0x335ddf = this._context["unit"].getBody()) == null
          ? undefined
          : _0x335ddf.paragraphs) ?? [];
    return (
      _0x37c566.forEach((_0x47eb81) => {
        _0x5adcd5.forEach((_0x28984e) => {
          _0x28984e.startIndex > _0x47eb81.startIndex &&
            _0x28984e.startIndex < _0x47eb81.endIndex &&
            _0x501043.set(_0x28984e.startIndex, _0x47eb81);
        });
      }),
      _0x501043
    );
  }
  _makeDirty() {
    var _0x45b6ad;
    ((_0x45b6ad = this._context["mainComponent"]) == null ||
      _0x45b6ad.makeDirty(true),
      this._context["scene"].makeDirty());
  }
  _hitLanguageButton(_0x4df60c, _0x41b50b) {
    return (
      this._languageHitRects["find"](
        (_0x3e2323) =>
          _0x4df60c >= _0x3e2323.left &&
          _0x4df60c <= _0x3e2323.right &&
          _0x41b50b >= _0x3e2323.top &&
          _0x41b50b <= _0x3e2323.bottom,
      ) ?? null
    );
  }
  _hitCodeBlock(_0xf04858, _0x8c689e) {
    return (
      this._blockHitRects["find"](
        (_0x57fe57) =>
          _0xf04858 >= _0x57fe57.left &&
          _0xf04858 <= _0x57fe57.right &&
          _0x8c689e >= _0x57fe57.top &&
          _0x8c689e <= _0x57fe57.bottom,
      ) ?? null
    );
  }
  _setHoveredCodeBlock(_0x260564) {
    this._hoveredCodeBlockId !== _0x260564 &&
      ((this._hoveredCodeBlockId = _0x260564), this._makeDirty());
  }
  _shouldDrawLanguageButton(_0xc0dcab) {
    return (
      this._canEditBlock(_0xc0dcab) &&
      (this._activeLanguageBlockId === _0xc0dcab ||
        this._hoveredCodeBlockId === _0xc0dcab ||
        this._getFocusedCodeBlockId() === _0xc0dcab)
    );
  }
  _getFocusedCodeBlockId() {
    var _0x3d11ed, _0x4c4305;
    let _0x277b97 =
      this._docSelectionManagerService["getTextRanges"]({
        unitId: this._context["unitId"],
        subUnitId: this._context["unitId"],
      }) ?? [];
    if (!_0x277b97.length) return null;
    let _0x4c4f46 =
        ((_0x3d11ed = this._context["unit"].getBody()) == null ||
        (_0x3d11ed = _0x3d11ed.blockRanges) == null
          ? undefined
          : _0x3d11ed.filter(
              (_0x2669b9) =>
                _0x2669b9.blockType === l.DocumentBlockRangeType["CODE"],
            )) ?? [],
      _0x31312a =
        _0x277b97.find((_0x57b5c8) => _0x57b5c8.isActive) ?? _0x277b97[0];
    return (_0x31312a == null ? undefined : _0x31312a.startOffset) == null ||
      (_0x31312a == null ? undefined : _0x31312a.endOffset) == null
      ? null
      : (((_0x4c4305 = _0x4c4f46.find(
          (_0x4b4a37) =>
            _0x31312a.startOffset >= _0x4b4a37.startIndex &&
            _0x31312a.endOffset <= _0x4b4a37.endIndex,
        )) == null
          ? undefined
          : _0x4c4305.blockId) ?? null);
  }
  _openLanguagePopover(_0x3549dd) {
    if ((this._closeLanguagePopover(), !this._canEditBlock(_0x3549dd.blockId)))
      return;
    this._activeLanguageBlockId = _0x3549dd.blockId;
    let _0x5e3b1d = (0, c.normalizeDocsCodeConfig)(
      this._docsCodeModel["getCodeConfig"](
        this._context["unitId"],
        _0x3549dd.blockId,
      ),
    );
    this._languagePopoverDisposable = this._docCanvasPopManagerService[
      "attachPopupToRect"
    ](
      _0x3549dd,
      {
        componentKey: j,
        direction: "bottom-right",
        extraProps: {
          activeLanguage: _0x5e3b1d.language,
          onSelect: (_0x5b16ea) => {
            let _0x239770 = this._activeLanguageBlockId;
            _0x239770 &&
              (this._commandService["executeCommand"](
                c.DocsCodeUpdateCommand["id"],
                { blockId: _0x239770, config: { language: _0x5b16ea } },
              ),
              this._closeLanguagePopover());
          },
        },
        onClickOutside: () => this._closeLanguagePopover(),
        onContextMenu: () => this._closeLanguagePopover(),
        zIndex: 102,
      },
      this._context["unitId"],
    );
  }
  _closeLanguagePopover() {
    var _0x3e2706;
    ((_0x3e2706 = this._languagePopoverDisposable) == null ||
      _0x3e2706.dispose(),
      (this._languagePopoverDisposable = null),
      (this._activeLanguageBlockId = null));
  }
  _canEditBlock(_0x1d3f42) {
    return (0, m.canEditDocumentTargets)(
      this._permissionService,
      this._context["unitId"],
      [
        ...(0, m.getDocumentEntityParentPermissionObjectIds)(
          this._context["unit"],
          "",
          "custom-block",
          _0x1d3f42,
        ),
        (0, m.getDocumentEntityPermissionObjectId)(
          "",
          "custom-block",
          _0x1d3f42,
        ),
      ],
    );
  }
  _setPointerCursor() {
    ((this._cursorBeforeLanguageHover ??= this._context["scene"].getCursor()),
      this._context["scene"].setCursor(f.CURSOR_TYPE["POINTER"]));
  }
  _restorePointerCursor() {
    this._cursorBeforeLanguageHover != null &&
      (this._context["scene"].setCursor(this._cursorBeforeLanguageHover),
      (this._cursorBeforeLanguageHover = null));
  }
};
K = k(
  [
    O(1, (0, l.Inject)(m.DocSkeletonManagerService)),
    O(2, (0, l.Inject)(m.DocSelectionManagerService)),
    O(3, (0, l.Inject)(c.DocsCodeModel)),
    O(4, (0, l.Inject)(u.DocCanvasPopManagerService)),
    O(5, l.ICommandService),
    O(6, l.IPermissionService),
  ],
  K,
);
function _e(_0x21068b, _0x18f939) {
  let {
    column: _0x73e03c,
    line: _0x143c37,
    pageIndex: _0x5e352a,
    pageLeft: _0x366715,
    sectionTop: _0x5ee57f,
  } = _0x21068b;
  return {
    layoutFragment: _0x73e03c,
    contentHeight: _0x143c37.contentHeight,
    ed: _0x143c37.ed,
    height: _0x143c37.lineHeight,
    left: _0x366715 + _0x73e03c.left,
    clipLeft: _0x21068b.clipLeft,
    clipRight: _0x21068b.clipRight,
    visualLeft: _0x21068b.visualLeft,
    visualWidth: _0x21068b.visualWidth,
    marginBottom: _0x143c37.marginBottom,
    marginTop: _0x143c37.marginTop,
    paddingBottom: _0x143c37.paddingBottom,
    paddingTop: _0x143c37.paddingTop,
    pageIndex: _0x5e352a,
    st: _0x143c37.st,
    top: _0x5ee57f + _0x143c37.top,
    width: _0x73e03c.width,
  };
}
function q(_0x310e81) {
  var _0x224402;
  let _0x26fbf3 =
    _0x310e81 == null || (_0x224402 = _0x310e81.getOffsetConfig) == null
      ? undefined
      : _0x224402.call(_0x310e81);
  return {
    docsLeft: (_0x26fbf3 == null ? undefined : _0x26fbf3.docsLeft) ?? 0,
    docsTop: (_0x26fbf3 == null ? undefined : _0x26fbf3.docsTop) ?? 0,
    pageMarginTop:
      (_0x26fbf3 == null ? undefined : _0x26fbf3.pageMarginTop) ?? 0,
  };
}
function ve(_0x25a7ad) {
  return (
    !!_0x25a7ad.content &&
    _0x25a7ad.streamType !== l.DataStreamTreeTokenType["PARAGRAPH"] &&
    _0x25a7ad.streamType !== l.DataStreamTreeTokenType["BLOCK_START"] &&
    _0x25a7ad.streamType !== l.DataStreamTreeTokenType["BLOCK_END"]
  );
}
function ye(_0x43b078, _0x3623fb) {
  let _0x4c35f3 = new Map(),
    _0x7888e1 = "";
  for (
    let _0x4a01ea = _0x3623fb.startIndex + 1;
    _0x4a01ea < _0x3623fb.endIndex;
    _0x4a01ea++
  ) {
    let _0x4dd94c = _0x43b078[_0x4a01ea];
    _0x4dd94c !== l.DataStreamTreeTokenType["BLOCK_START"] &&
      _0x4dd94c !== l.DataStreamTreeTokenType["BLOCK_END"] &&
      (_0x4c35f3.set(_0x4a01ea, _0x7888e1.length),
      (_0x7888e1 +=
        _0x4dd94c === l.DataStreamTreeTokenType["PARAGRAPH"]
          ? "\x0a"
          : _0x4dd94c));
  }
  return { codeText: _0x7888e1, streamOffsetToCodeOffset: _0x4c35f3 };
}
function be(_0x3e9d57, _0x237da9, _0x3b1e35, _0xb8762b, _0x45fc46, _0x395177) {
  let _0x1b6dd8 = Math.min(_0x395177, _0xb8762b / 2, _0x45fc46 / 2);
  (_0x3e9d57.save(),
    _0x3e9d57.beginPath(),
    _0x3e9d57.moveTo(_0x237da9 + _0x1b6dd8, _0x3b1e35),
    _0x3e9d57.lineTo(_0x237da9 + _0xb8762b - _0x1b6dd8, _0x3b1e35),
    _0x3e9d57.quadraticCurveTo(
      _0x237da9 + _0xb8762b,
      _0x3b1e35,
      _0x237da9 + _0xb8762b,
      _0x3b1e35 + _0x1b6dd8,
    ),
    _0x3e9d57.lineTo(_0x237da9 + _0xb8762b, _0x3b1e35 + _0x45fc46 - _0x1b6dd8),
    _0x3e9d57.quadraticCurveTo(
      _0x237da9 + _0xb8762b,
      _0x3b1e35 + _0x45fc46,
      _0x237da9 + _0xb8762b - _0x1b6dd8,
      _0x3b1e35 + _0x45fc46,
    ),
    _0x3e9d57.lineTo(_0x237da9 + _0x1b6dd8, _0x3b1e35 + _0x45fc46),
    _0x3e9d57.quadraticCurveTo(
      _0x237da9,
      _0x3b1e35 + _0x45fc46,
      _0x237da9,
      _0x3b1e35 + _0x45fc46 - _0x1b6dd8,
    ),
    _0x3e9d57.lineTo(_0x237da9, _0x3b1e35 + _0x1b6dd8),
    _0x3e9d57.quadraticCurveTo(
      _0x237da9,
      _0x3b1e35,
      _0x237da9 + _0x1b6dd8,
      _0x3b1e35,
    ),
    _0x3e9d57.closePath(),
    (_0x3e9d57.fillStyle = "gray.100"),
    _0x3e9d57.fill(),
    (_0x3e9d57.strokeStyle = "gray.200"),
    (_0x3e9d57.lineWidth = 1),
    _0x3e9d57.stroke(),
    _0x3e9d57.restore());
}
function J(_0x15753a, _0x2b4654, _0x57acce) {
  if (
    _0x2b4654.clipLeft == null ||
    _0x2b4654.clipRight == null ||
    _0x2b4654.clipRight <= _0x2b4654.clipLeft
  )
    return _0x57acce();
  (_0x15753a.save(),
    _0x15753a.beginPath(),
    _0x15753a.rectByPrecision(
      _0x2b4654.clipLeft,
      -100000,
      _0x2b4654.clipRight - _0x2b4654.clipLeft,
      200000,
    ),
    _0x15753a.closePath(),
    _0x15753a.clip());
  let _0x3b2bfa = _0x57acce();
  return (_0x15753a.restore(), _0x3b2bfa);
}
function Y(_0x371205, _0x5a9a74, _0x1e2979) {
  if (_0x5a9a74.clipLeft == null || _0x5a9a74.clipRight == null)
    return _0x371205;
  let _0x138075 = Math.max(_0x371205.left, _0x5a9a74.clipLeft + _0x1e2979),
    _0x31d80c = Math.min(_0x371205.right, _0x5a9a74.clipRight + _0x1e2979);
  return _0x31d80c > _0x138075
    ? { ..._0x371205, left: _0x138075, right: _0x31d80c }
    : null;
}
function xe(_0xa9dd2b, _0x46bd99, _0xace3fe, _0x224d2a, _0x1458d0) {
  let _0x343e25 = te(_0x1458d0);
  (_0xa9dd2b.save(), (_0xa9dd2b.font = "12px sans-serif"));
  let _0x5adfc8 = _0xa9dd2b.measureText(_0x343e25).width,
    _0x2a7de4 = Math.min(118, Math.max(70, _0x5adfc8 + 14 + 5 + 6)),
    _0x2511f6 = _0x46bd99 + _0x224d2a - _0x2a7de4 - 6,
    _0x258631 = _0xace3fe - 22 - 5;
  return (
    Ce(_0xa9dd2b, _0x2511f6, _0x258631, _0x2a7de4, 22, 5),
    (_0xa9dd2b.fillStyle = G),
    (_0xa9dd2b.textBaseline = "middle"),
    _0xa9dd2b.fillText(_0x343e25, _0x2511f6 + 7, _0x258631 + 22 / 2),
    Se(_0xa9dd2b, _0x2511f6 + _0x2a7de4 - 7 - 6, _0x258631 + 22 / 2 - 2, 6),
    _0xa9dd2b.restore(),
    {
      bottom: _0x258631 + 22,
      left: _0x2511f6,
      right: _0x2511f6 + _0x2a7de4,
      top: _0x258631,
    }
  );
}
function Se(_0x4f8ccb, _0x1c05c2, _0x5d8bba, _0x4ccf16) {
  (_0x4f8ccb.save(),
    _0x4f8ccb.beginPath(),
    _0x4f8ccb.moveTo(_0x1c05c2, _0x5d8bba),
    _0x4f8ccb.lineTo(_0x1c05c2 + _0x4ccf16 / 2, _0x5d8bba + _0x4ccf16 / 2),
    _0x4f8ccb.lineTo(_0x1c05c2 + _0x4ccf16, _0x5d8bba),
    (_0x4f8ccb.strokeStyle = G),
    (_0x4f8ccb.lineWidth = 1.4),
    (_0x4f8ccb.lineCap = "round"),
    (_0x4f8ccb.lineJoin = "round"),
    _0x4f8ccb.stroke(),
    _0x4f8ccb.restore());
}
function Ce(_0x31b682, _0x45e410, _0x3f4214, _0x2ce621, _0x45ac62, _0x3fd50b) {
  let _0x1c78a6 = Math.min(_0x3fd50b, _0x2ce621 / 2, _0x45ac62 / 2);
  (_0x31b682.save(),
    _0x31b682.beginPath(),
    _0x31b682.moveTo(_0x45e410 + _0x1c78a6, _0x3f4214),
    _0x31b682.lineTo(_0x45e410 + _0x2ce621 - _0x1c78a6, _0x3f4214),
    _0x31b682.quadraticCurveTo(
      _0x45e410 + _0x2ce621,
      _0x3f4214,
      _0x45e410 + _0x2ce621,
      _0x3f4214 + _0x1c78a6,
    ),
    _0x31b682.lineTo(_0x45e410 + _0x2ce621, _0x3f4214 + _0x45ac62 - _0x1c78a6),
    _0x31b682.quadraticCurveTo(
      _0x45e410 + _0x2ce621,
      _0x3f4214 + _0x45ac62,
      _0x45e410 + _0x2ce621 - _0x1c78a6,
      _0x3f4214 + _0x45ac62,
    ),
    _0x31b682.lineTo(_0x45e410 + _0x1c78a6, _0x3f4214 + _0x45ac62),
    _0x31b682.quadraticCurveTo(
      _0x45e410,
      _0x3f4214 + _0x45ac62,
      _0x45e410,
      _0x3f4214 + _0x45ac62 - _0x1c78a6,
    ),
    _0x31b682.lineTo(_0x45e410, _0x3f4214 + _0x1c78a6),
    _0x31b682.quadraticCurveTo(
      _0x45e410,
      _0x3f4214,
      _0x45e410 + _0x1c78a6,
      _0x3f4214,
    ),
    _0x31b682.closePath(),
    (_0x31b682.fillStyle = "gray.50"),
    _0x31b682.fill(),
    (_0x31b682.strokeStyle = "gray.200"),
    (_0x31b682.lineWidth = 1),
    _0x31b682.stroke(),
    _0x31b682.restore());
}
function we(_0x72261b, _0x7b6ce1, _0x3c2d2e) {
  let { glyph: _0x3f67d7, x: _0x4fc0e3, y: _0xb0a494 } = _0x7b6ce1;
  (_0x72261b.save(),
    (_0x72261b.font = Te(_0x3f67d7)),
    (_0x72261b.textBaseline = "alphabetic"),
    (_0x72261b.fillStyle = _0x3c2d2e),
    _0x72261b.fillText(_0x3f67d7.content, _0x4fc0e3, _0xb0a494),
    _0x72261b.restore());
}
function Te(_0x4765fa) {
  var _0x531eac, _0x405c7b;
  return (
    ((_0x531eac = _0x4765fa.fontStyle) == null
      ? undefined
      : _0x531eac.fontString) ??
    (((_0x405c7b = _0x4765fa.ts) == null ? undefined : _0x405c7b.fs) ?? 12) +
      "pt monospace"
  );
}
function X(_0x1f9439, _0x294366, _0x3fd122) {
  let { scaleX: _0xdfa369, scaleY: _0x35f004 } = _0x3fd122.getAncestorScale(),
    _0x1276ba = _0x3fd122.getViewport("viewMain");
  return _0x1276ba
    ? {
        x: _0x1f9439 / _0xdfa369 + _0x1276ba.viewportScrollX,
        y: _0x294366 / _0x35f004 + _0x1276ba.viewportScrollY,
      }
    : { x: _0x1f9439, y: _0x294366 };
}
const Z = new Set([
    u.AlignCenterCommand["id"],
    u.AlignJustifyCommand["id"],
    u.AlignLeftCommand["id"],
    u.AlignOperationCommand["id"],
    u.AlignRightCommand["id"],
    u.BulletListCommand["id"],
    u.CheckListCommand["id"],
    u.OrderListCommand["id"],
    u.SetInlineFormatBoldCommand["id"],
    u.SetInlineFormatCommand["id"],
    u.SetInlineFormatFontFamilyCommand["id"],
    u.SetInlineFormatFontSizeCommand["id"],
    u.SetInlineFormatItalicCommand["id"],
    u.SetInlineFormatStrikethroughCommand["id"],
    u.SetInlineFormatSubscriptCommand["id"],
    u.SetInlineFormatSuperscriptCommand["id"],
    u.SetInlineFormatTextBackgroundColorCommand["id"],
    u.SetInlineFormatTextColorCommand["id"],
    u.SetInlineFormatUnderlineCommand["id"],
    u.SetParagraphNamedStyleCommand["id"],
  ]),
  Ee = {
    id: u.DeleteCurrentParagraphCommand["id"],
    name: "docs-code.command.delete-current-paragraph",
    type: l.CommandType["COMMAND"],
    multi: true,
    priority: 100,
    handler: async (_0x65da79, _0x9e99dd) => {
      var _0x313e81;
      return (_0x9e99dd == null || (_0x313e81 = _0x9e99dd.blockRange) == null
        ? undefined
        : _0x313e81.blockType) === l.DocumentBlockRangeType["CODE"]
        ? (await _0x65da79
            .get(l.ICommandService)
            .executeCommand(c.DocsCodeRemoveCommand["id"], {
              unitId: _0x9e99dd.unitId,
              blockId: _0x9e99dd.blockRange["blockId"],
            }),
          true)
        : false;
    },
  };
let Q = class extends l.Disposable {
  constructor(_0x12a285, _0x5d5c9e, _0x33a6e4, _0x14e285, _0x1a4d38) {
    (super(),
      (this._docAutoFormatService = _0x12a285),
      (this._docSelectionManagerService = _0x5d5c9e),
      (this._commandService = _0x33a6e4),
      (this._univerInstanceService = _0x14e285),
      (this._menuManagerService = _0x1a4d38),
      this._menuManagerService["mergeMenu"](E),
      this._menuManagerService["appendRootMenu"](oe),
      this._initBoundaryDeleteGuard(),
      this._initCancelEmptyCodeParagraphAutoFormat(),
      this._initStyleCommandGuard(),
      this.disposeWithMe(this._commandService["registerMultipleCommand"](Ee)));
  }
  _initBoundaryDeleteGuard() {
    [
      { id: u.DeleteLeftCommand["id"], direction: "left" },
      { id: u.DeleteRightCommand["id"], direction: "right" },
    ].forEach(({ id: _0x1c570d, direction: _0x4ff836 }) => {
      this.disposeWithMe(
        this._docAutoFormatService["registerAutoFormat"]({
          id: _0x1c570d,
          match: (_0x170636) =>
            _0x170636.selection["collapsed"]
              ? (0, c.isCodeBoundaryDelete)({
                  cursorOffset: _0x170636.selection["startOffset"],
                  direction: _0x4ff836,
                  documentData: _0x170636.unit["getSnapshot"](),
                })
              : false,
          getMutations: () => [
            { id: c.DocsCodeConsumeBoundaryDeleteCommand["id"] },
          ],
          priority: 50,
        }),
      );
    });
  }
  _initCancelEmptyCodeParagraphAutoFormat() {
    [u.DeleteLeftCommand["id"], u.DeleteRightCommand["id"]].forEach(
      (_0x52085a) => {
        this.disposeWithMe(
          this._docAutoFormatService["registerAutoFormat"]({
            id: _0x52085a,
            match: (_0x1037e5) =>
              _0x1037e5.selection["collapsed"]
                ? (0, c.buildCancelEmptyCodeParagraphActions)({
                    cursorOffset: _0x1037e5.selection["startOffset"],
                    documentData: _0x1037e5.unit["getSnapshot"](),
                  }) != null
                : false,
            getMutations: (_0x26ff63) => [
              {
                id: c.DocsCodeCancelEmptyParagraphCommand["id"],
                params: { cursorOffset: _0x26ff63.selection["startOffset"] },
              },
            ],
            priority: 100,
          }),
        );
      },
    );
  }
  _initStyleCommandGuard() {
    this.disposeWithMe(
      this._commandService["beforeCommandExecuted"]((_0x29e427) => {
        if (!(!Z.has(_0x29e427.id) || !this._isSelectionInCodeBlock()))
          throw new l["CustomCommandExecutionError"](
            "Style\x20commands\x20are\x20disabled\x20inside\x20docs\x20code\x20blocks.",
          );
      }),
    );
  }
  _isSelectionInCodeBlock() {
    let _0x228e0a = this._univerInstanceService["getCurrentUnitOfType"](
        l.UniverInstanceType["UNIVER_DOC"],
      ),
      _0x51c3ff = _0x228e0a == null ? undefined : _0x228e0a.getBody(),
      _0x573b3f = this._docSelectionManagerService["getTextRanges"]() ?? [];
    return !_0x51c3ff || _0x573b3f.length === 0
      ? false
      : (_0x51c3ff.blockRanges ?? []).some(
          (_0x1715dd) =>
            _0x1715dd.blockType === l.DocumentBlockRangeType["CODE"] &&
            _0x573b3f.some(
              (_0x3ce9d0) =>
                Math.max(_0x3ce9d0.startOffset, _0x1715dd.startIndex) <=
                Math.min(_0x3ce9d0.endOffset, _0x1715dd.endIndex),
            ),
        );
  }
};
Q = k(
  [
    O(0, (0, l.Inject)(u.DocAutoFormatService)),
    O(1, (0, l.Inject)(m.DocSelectionManagerService)),
    O(2, l.ICommandService),
    O(3, l.IUniverInstanceService),
    O(4, d.IMenuManagerService),
  ],
  Q,
);
let $ = class extends l.Plugin {
  constructor(_0xf28792 = D, _0x1e4eed, _0x1eda30, _0x50cc77) {
    (super(),
      (this._config = _0xf28792),
      (this._injector = _0x1e4eed),
      (this._renderManagerService = _0x1eda30),
      (this._configService = _0x50cc77));
    let { menu: _0x517a4e, ..._0x4b2be5 } = (0, l.merge)({}, D, this._config);
    (_0x517a4e &&
      this._configService["setConfig"]("menu", _0x517a4e, { merge: true }),
      this._configService["setConfig"]("docs-code-ui.config", _0x4b2be5));
  }
  onStarting() {
    (this._injector["add"]([M]),
      this._injector["add"]([A]),
      this._injector["get"](M),
      this._injector["get"](A),
      this._injector["add"]([Q]),
      this._injector["get"](Q));
  }
  onRendered() {
    this.disposeWithMe(
      this._renderManagerService["registerRenderModule"](
        l.UniverInstanceType["UNIVER_DOC"],
        [K],
      ),
    );
  }
};
(U($, "pluginName", c.DOCS_CODE_PLUGIN + "_UI_PLUGIN"),
  U($, "packageName", se),
  U($, "version", ce),
  U($, "type", l.UniverInstanceType["UNIVER_DOC"]),
  ($ = k(
    [
      (0, l.DependentOn)(
        ee.UniverLicensePlugin,
        m.UniverDocsPlugin,
        f.UniverRenderEnginePlugin,
        u.UniverDocsUIPlugin,
        c.UniverDocsCodePlugin,
      ),
      O(1, (0, l.Inject)(l.Injector)),
      O(2, f.IRenderManagerService),
      O(3, l.IConfigService),
    ],
    $,
  )),
  (exports.DocsCodeUIMenuSchema = E),
  Object.defineProperty(exports, "UniverDocsCodeUIPlugin", {
    enumerable: true,
    get: function () {
      return $;
    },
  }));
