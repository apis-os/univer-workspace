import {
  DOCS_CODE_PLUGIN as _0x54e8e5,
  DocsCodeCancelEmptyParagraphCommand as _0x470fe8,
  DocsCodeConsumeBoundaryDeleteCommand as _0x6c13db,
  DocsCodeInsertBelowCommand as _0x2c8ebf,
  DocsCodeInsertCommand as _0x59fdab,
  DocsCodeModel as _0x4acfa2,
  DocsCodeRemoveCommand as _0x20b498,
  DocsCodeUpdateCommand as _0x5c6684,
  RemoveDocsCodeConfigMutation as _0x27f8a6,
  SetDocsCodeConfigMutation as _0x443e09,
  UniverDocsCodePlugin as _0xf1932a,
  buildCancelEmptyCodeParagraphActions as _0x12a33a,
  isCodeBoundaryDelete as _0x28f874,
  normalizeDocsCodeConfig as _0x425eaf,
  normalizeDocsCodeMetadataResource as _0x597f74,
} from "@univerjs-pro/docs-code";
import {
  CommandType as _0x5578df,
  CustomCommandExecutionError as _0x523ad9,
  DataStreamTreeTokenType as _0x1cb21f,
  DependentOn as _0x1a65f,
  Disposable as _0x1764d8,
  DocumentBlockRangeType as _0x7a1506,
  ICommandService as _0x2b1c6f,
  IConfigService as _0x2eada1,
  IPermissionService as _0x293fea,
  IUniverInstanceService as _0x5a5608,
  Inject as _0x20b77c,
  Injector as _0x4a597a,
  LocaleService as _0x526e5c,
  Plugin as _0x2adca3,
  UniverInstanceType as _0x54a7c6,
  merge as _0x4546a0,
} from "@univerjs/core";
import {
  AlignCenterCommand as _0x302505,
  AlignJustifyCommand as _0x294ff1,
  AlignLeftCommand as _0x80f48c,
  AlignOperationCommand as _0x58397c,
  AlignRightCommand as _0x4ee106,
  BulletListCommand as _0x4991dc,
  CheckListCommand as _0x868297,
  DOC_CONTENT_INSERT_MENU_ID as _0x2d51c5,
  DOC_PARAGRAPH_T_EDIT_MENU_ID as _0x26f188,
  DOC_PARAGRAPH_T_INSERT_BELOW_MENU_ID as _0x4a248b,
  DOC_PARAGRAPH_T_INSERT_MENU_ID as _0x451419,
  DeleteCurrentParagraphCommand as _0x376aad,
  DeleteLeftCommand as _0x14c0b2,
  DeleteRightCommand as _0x556c91,
  DocAutoFormatService as _0x233bf9,
  DocCanvasPopManagerService as _0x12bf5d,
  DocParagraphMenuService as _0xa30f45,
  EMPTY_PARAGRAPH_MENU_ID as _0x4dda47,
  FLOAT_TEXT_STYLE_MENU_ID as _0x21c83e,
  FLOAT_TOOLBAR_MENU_POSITION as _0xf2b626,
  IDocClipboardPasteAdapterService as _0x147249,
  IDocClipboardService as _0x44d793,
  INSERT_BELLOW_MENU_ID as _0x18865f,
  OrderListCommand as _0x5450c1,
  SetInlineFormatBoldCommand as _0x298263,
  SetInlineFormatCommand as _0x147548,
  SetInlineFormatFontFamilyCommand as _0x4b168e,
  SetInlineFormatFontSizeCommand as _0x8960,
  SetInlineFormatItalicCommand as _0x4e9a44,
  SetInlineFormatStrikethroughCommand as _0x57a7e6,
  SetInlineFormatSubscriptCommand as _0x480f52,
  SetInlineFormatSuperscriptCommand as _0x4e0029,
  SetInlineFormatTextBackgroundColorCommand as _0x4cac11,
  SetInlineFormatTextColorCommand as _0xd633ad,
  SetInlineFormatUnderlineCommand as _0x224f4f,
  SetParagraphNamedStyleCommand as _0x25aaca,
  UniverDocsUIPlugin as _0x3acf86,
  disableMenuWhenHeaderFooterEditing as _0x3ca393,
  getDocBlockRangeMenuId as _0x3387ad,
  hideMenuWhenSelectionInBlockRange as _0x3b3c5e,
} from "@univerjs/docs-ui";
import {
  ComponentManager as _0x3e5b78,
  ContextMenuGroup as _0xb968e0,
  ContextMenuPosition as _0x1caad5,
  IMenuManagerService as _0x51663e,
  IconManager as _0x36c01c,
  MenuItemType as _0x51108d,
  MenuManagerPosition as _0x3078d1,
  RibbonInsertGroup as _0x29ef09,
  RibbonPosition as _0x241b21,
  getMenuHiddenObservable as _0x5a6996,
  useDependency as _0x3cde95,
} from "@univerjs/ui";
import {
  CURSOR_TYPE as _0x3d520e,
  IRenderManagerService as _0x517441,
  UniverRenderEnginePlugin as _0xbd1bfc,
} from "@univerjs/engine-render";
import {
  Observable as _0x1683aa,
  combineLatest as _0x171a57,
  map as _0x46bee5,
} from "rxjs";
import { UniverLicensePlugin as _0x2afa3a } from "@univerjs-pro/license";
import {
  DocSelectionManagerService as _0x4c069b,
  DocSkeletonManagerService as _0x41d586,
  UniverDocsPlugin as _0x20cab0,
  canEditDocumentTargets as _0x352644,
  getDocumentEntityParentPermissionObjectIds as _0xc8724f,
  getDocumentEntityPermissionObjectId as _0x29aec7,
} from "@univerjs/docs";
import {
  CheckMarkIcon as _0x3a5c4c,
  CodeBlockIcon as _0xd49c05,
} from "@univerjs/icons";
import { Button as _0x1b4bc6, clsx as _0x3463cb } from "@univerjs/design";
import { jsx as _0x3e45ed, jsxs as _0x15b252 } from "react/jsx-runtime";
import { documentSkeletonLineIterator as _0x585839 } from "@univerjs-pro/docs-column";
import _0x28a5a2 from "prismjs";
import "prismjs/components/prism-bash.js";
import "prismjs/components/prism-c.js";
import "prismjs/components/prism-cpp.js";
import "prismjs/components/prism-csharp.js";
import "prismjs/components/prism-css.js";
import "prismjs/components/prism-go.js";
import "prismjs/components/prism-java.js";
import "prismjs/components/prism-javascript.js";
import "prismjs/components/prism-json.js";
import "prismjs/components/prism-kotlin.js";
import "prismjs/components/prism-markdown.js";
import "prismjs/components/prism-markup.js";
import "prismjs/components/prism-php.js";
import "prismjs/components/prism-python.js";
import "prismjs/components/prism-ruby.js";
import "prismjs/components/prism-rust.js";
import "prismjs/components/prism-sql.js";
import "prismjs/components/prism-swift.js";
import "prismjs/components/prism-typescript.js";
import "prismjs/components/prism-yaml.js";
const N = [
  { label: "Plain\x20text", value: "plaintext" },
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
function gt(_0x48eed9) {
  var _0x5bc2e3;
  return (
    ((_0x5bc2e3 = N.find((_0x43a00a) => _0x43a00a.value === _0x48eed9)) == null
      ? undefined
      : _0x5bc2e3.label) ?? _0x48eed9
  );
}
const _t = "docs-code-ui.menu.language";
function P(_0x46dda2) {
  return {
    id: _0x59fdab.id,
    type: _0x51108d.BUTTON,
    icon: "CodeBlockIcon",
    title: "docs-code-ui.menu.code",
    tooltip: "docs-code-ui.menu.code",
    hidden$: _0x5a6996(_0x46dda2, _0x54a7c6.UNIVER_DOC),
    disabled$: _0x3ca393(_0x46dda2),
  };
}
function vt(_0xf93b29) {
  return {
    ...P(_0xf93b29),
    hidden$: _0x171a57([
      _0x5a6996(_0xf93b29, _0x54a7c6.UNIVER_DOC),
      _0x3b3c5e(_0xf93b29),
    ]).pipe(_0x46bee5(([_0x958074, _0x21fa6b]) => _0x958074 || _0x21fa6b)),
  };
}
function F(_0x11431a) {
  return {
    id: _0x2c8ebf.id,
    type: _0x51108d.BUTTON,
    icon: "CodeBlockIcon",
    title: "docs-code-ui.menu.code",
    hidden$: _0x5a6996(_0x11431a, _0x54a7c6.UNIVER_DOC),
    disabled$: _0x3ca393(_0x11431a),
  };
}
function yt(_0x40f400) {
  return {
    id: _t,
    type: _0x51108d.SUBITEMS,
    icon: "CodeBlockIcon",
    title: "docs-code-ui.language.title",
    hidden$: _0x171a57([
      _0x5a6996(_0x40f400, _0x54a7c6.UNIVER_DOC),
      bt(_0x40f400),
    ]).pipe(_0x46bee5(([_0x1a27cf, _0x41e720]) => _0x1a27cf || _0x41e720)),
  };
}
function bt(_0x2e68c7) {
  let _0x27f454 = _0x2e68c7.get(_0x5a5608),
    _0x27da12 = _0x2e68c7.get(_0x517441);
  return new _0x1683aa((_0x3b2cd2) => {
    let _0x252b0c = null,
      _0x3c0bf7 = _0x27f454.focused$["subscribe"]((_0xf41250) => {
        if (
          (_0x252b0c == null || _0x252b0c.unsubscribe(),
          (_0x252b0c = null),
          !_0xf41250 ||
            _0x27f454.getUnitType(_0xf41250) !== _0x54a7c6.UNIVER_DOC)
        ) {
          _0x3b2cd2.next(true);
          return;
        }
        let _0x51de23 = _0x27da12.getRenderUnitById(_0xf41250),
          _0xd424e5 = _0x51de23 == null ? undefined : _0x51de23.with(_0xa30f45);
        if (!_0xd424e5) {
          _0x3b2cd2.next(true);
          return;
        }
        let _0xdf82 = (_0x5267a1 = _0xd424e5.activeTarget) => {
          var _0x38d196;
          _0x3b2cd2.next(
            (_0x5267a1 == null ? undefined : _0x5267a1.kind) !== "blockRange" ||
              ((_0x38d196 = _0x5267a1.blockRange) == null
                ? undefined
                : _0x38d196.blockType) !== _0x7a1506.CODE,
          );
        };
        (_0xdf82(),
          (_0x252b0c = _0xd424e5.activeTarget$["subscribe"](_0xdf82)));
      });
    return () => {
      (_0x252b0c == null || _0x252b0c.unsubscribe(), _0x3c0bf7.unsubscribe());
    };
  });
}
function xt(_0x4db469) {
  return (_0x464848) => ({
    id: _0x5c6684.id + "." + _0x4db469.value,
    commandId: _0x5c6684.id,
    type: _0x51108d.BUTTON,
    label: _0x4db469.label,
    params: { config: { language: _0x4db469.value } },
    hidden$: _0x5a6996(_0x464848, _0x54a7c6.UNIVER_DOC),
  });
}
const St = N.reduce(
  (_0x3d0037, _0x5c0c63, _0x33aec0) => (
    (_0x3d0037[_0x5c6684.id + "." + _0x5c0c63.value] = {
      order: _0x33aec0,
      menuItemFactory: xt(_0x5c0c63),
    }),
    _0x3d0037
  ),
  {},
);
_0x3387ad(_0x7a1506.CODE);
const I = {
    [_0x29ef09.MEDIA]: { [_0x59fdab.id]: { order: 7, menuItemFactory: P } },
  },
  Ct = {
    [_0x3078d1.RIBBON]: { [_0x241b21.INSERT]: I },
    [_0xf2b626]: {
      [_0x21c83e]: { [_0x59fdab.id]: { order: 12, menuItemFactory: vt } },
    },
  },
  L = {
    ...I,
    [_0x21c83e]: { [_0x59fdab.id]: { order: 12, menuItemFactory: vt } },
    [_0x1caad5.PARAGRAPH]: {
      [_0xb968e0.LAYOUT]: {
        [_t]: { order: 0, menuItemFactory: yt, ...St },
        [_0x18865f]: { [_0x2c8ebf.id]: { order: 7, menuItemFactory: F } },
      },
      [_0x2d51c5]: {
        [_0xb968e0.LAYOUT]: {
          [_0x2c8ebf.id]: { order: 7, menuItemFactory: F },
        },
      },
      [_0x4dda47]: {
        [_0xb968e0.LAYOUT]: {
          [_0x59fdab.id]: { order: 7, menuItemFactory: P },
        },
      },
      [_0x451419]: {
        quickBottom: { [_0x59fdab.id]: { order: 2, menuItemFactory: P } },
      },
      [_0x26f188]: {
        quickBottom: { [_0x59fdab.id]: { order: 3, menuItemFactory: P } },
      },
      [_0x4a248b]: {
        quickBottom: { [_0x2c8ebf.id]: { order: 2, menuItemFactory: F } },
      },
    },
  };
var wt = "@univerjs-pro/docs-code-ui",
  Tt = "1.0.0-insiders.20260907-70fc579";
const R = {};
function z(_0x222a93, _0x48b5bb) {
  return function (_0x20a3e3, _0x3a77ee) {
    _0x48b5bb(_0x20a3e3, _0x3a77ee, _0x222a93);
  };
}
function B(_0x5714a7, _0xc80f69, _0x4e0722, _0x3cce50) {
  var _0x15b99e = arguments.length,
    _0x184981 =
      _0x15b99e < 3
        ? _0xc80f69
        : _0x3cce50 === null
          ? (_0x3cce50 = Object.getOwnPropertyDescriptor(_0xc80f69, _0x4e0722))
          : _0x3cce50,
    _0x4b2508;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x184981 = Reflect.decorate(_0x5714a7, _0xc80f69, _0x4e0722, _0x3cce50);
  else {
    for (var _0x486672 = _0x5714a7.length - 1; _0x486672 >= 0; _0x486672--)
      (_0x4b2508 = _0x5714a7[_0x486672]) &&
        (_0x184981 =
          (_0x15b99e < 3
            ? _0x4b2508(_0x184981)
            : _0x15b99e > 3
              ? _0x4b2508(_0xc80f69, _0x4e0722, _0x184981)
              : _0x4b2508(_0xc80f69, _0x4e0722)) || _0x184981);
  }
  return (
    _0x15b99e > 3 &&
      _0x184981 &&
      Object.defineProperty(_0xc80f69, _0x4e0722, _0x184981),
    _0x184981
  );
}
let V = class extends _0x1764d8 {
  constructor(_0x306190, _0x479cba, _0x142401) {
    (super(),
      (this._clipboardService = _0x306190),
      (this._pasteAdapterService = _0x479cba),
      (this._model = _0x142401),
      this.disposeWithMe(
        this._clipboardService["addClipboardHook"]({
          onCopyDocData: (_0x5c7429, _0x262e04) =>
            this._appendConfig(_0x5c7429, _0x262e04.sourceDocuments),
        }),
      ),
      this.disposeWithMe(
        this._pasteAdapterService["registerAdapter"]({
          getPasteMutationInfos: (_0x3eaaf4) =>
            this._getPasteMutationInfos(_0x3eaaf4),
        }),
      ));
  }
  _appendConfig(_0x469d4d, _0x2a4e17) {
    let _0x420530 = {};
    return (
      _0x2a4e17.forEach((_0xb6a268) => {
        var _0x639a3d;
        (_0x639a3d = _0xb6a268.body) == null ||
          (_0x639a3d = _0x639a3d.blockRanges) == null ||
          _0x639a3d.forEach((_0xab7d0c) => {
            if (_0xab7d0c.blockType !== _0x7a1506.CODE) return;
            let _0xb7187a = this._model["getCodeConfig"](
              _0xb6a268.id,
              _0xab7d0c.blockId,
            );
            _0xb7187a && (_0x420530[_0xab7d0c.blockId] = _0x425eaf(_0xb7187a));
          });
      }),
      Object.keys(_0x420530).length === 0
        ? _0x469d4d
        : {
            ..._0x469d4d,
            resources: [
              ...(_0x469d4d.resources ?? []).filter(
                (_0x4da3e3) => _0x4da3e3.name !== _0x54e8e5,
              ),
              { name: _0x54e8e5, data: JSON.stringify({ codes: _0x420530 }) },
            ],
          }
    );
  }
  _getPasteMutationInfos(_0x40e572) {
    var _0x3b64e0;
    let _0x30c1a4 =
        (_0x3b64e0 = _0x40e572.doc["resources"]) == null
          ? undefined
          : _0x3b64e0.find((_0x589891) => _0x589891.name === _0x54e8e5),
      _0x3b882d = _0x30c1a4 ? Et(_0x30c1a4.data).codes : {},
      _0x1fe753 = [],
      _0x37d009 = [];
    return (
      _0x40e572.blockRangeMappings["forEach"](
        ({ sourceBlockRange: _0x2cc398, targetBlockRange: _0x5bcd3d }) => {
          if (_0x2cc398.blockType !== _0x7a1506.CODE) return;
          let _0x5b5eb1 = _0x3b882d[_0x2cc398.blockId];
          _0x5b5eb1 &&
            (_0x1fe753.push({
              id: _0x443e09.id,
              params: {
                unitId: _0x40e572.unitId,
                blockId: _0x5bcd3d.blockId,
                config: _0x5b5eb1,
              },
            }),
            _0x37d009.push({
              id: _0x27f8a6.id,
              params: { unitId: _0x40e572.unitId, blockId: _0x5bcd3d.blockId },
            }));
        },
      ),
      { redoMutations: _0x1fe753, undoMutations: _0x37d009 }
    );
  }
};
V = B(
  [
    z(0, _0x20b77c(_0x44d793)),
    z(1, _0x20b77c(_0x147249)),
    z(2, _0x20b77c(_0x4acfa2)),
  ],
  V,
);
function Et(_0x1dda68) {
  try {
    return _0x597f74(JSON.parse(_0x1dda68));
  } catch {
    return { codes: {} };
  }
}
const H = "docs-code-ui.language-picker";
function Dt(_0x17608c) {
  var _0x22c39b, _0x4e8fe0;
  let _0x1b6bf9 = _0x3cde95(_0x526e5c),
    _0x1a4f99 =
      (_0x22c39b = _0x17608c.popup) == null ||
      (_0x22c39b = _0x22c39b.extraProps) == null
        ? undefined
        : _0x22c39b.activeLanguage,
    _0x4792a4 =
      (_0x4e8fe0 = _0x17608c.popup) == null ||
      (_0x4e8fe0 = _0x4e8fe0.extraProps) == null
        ? undefined
        : _0x4e8fe0.onSelect;
  return _0x15b252("section", {
    "data-u-comp": H,
    className:
      "univer-max-h-[320px]\x20univer-w-[188px]\x20univer-overflow-hidden\x20univer-overflow-y-auto\x20univer-rounded-lg\x20univer-border\x20univer-border-solid\x20univer-border-gray-200\x20univer-bg-gray-0\x20univer-p-1\x20univer-shadow-lg\x20dark:!univer-border-gray-600\x20dark:!univer-bg-gray-900",
    children: [
      _0x3e45ed("div", {
        className:
          "univer-px-2 univer-pb-1 univer-pt-0.5 univer-text-xs univer-leading-5 univer-text-gray-500 dark:!univer-text-gray-400",
        children: _0x1b6bf9.t("docs-code-ui.language.title"),
      }),
      N.map((_0x4c33fa) => {
        let _0x186f3e = _0x4c33fa.value === _0x1a4f99;
        return _0x15b252(
          _0x1b4bc6,
          {
            size: "small",
            variant: "ghost",
            type: "button",
            className: _0x3463cb("univer-w-full univer-justify-between", {
              "univer-bg-primary-50\x20univer-text-primary-600\x20dark:!univer-bg-gray-800\x20dark:!univer-text-primary-300":
                _0x186f3e,
            }),
            onClick: () =>
              _0x4792a4 == null ? undefined : _0x4792a4(_0x4c33fa.value),
            children: [
              _0x3e45ed("span", { children: _0x4c33fa.label }),
              _0x186f3e &&
                _0x3e45ed(_0x3a5c4c, { className: "univer-text-sm" }),
            ],
          },
          _0x4c33fa.value,
        );
      }),
    ],
  });
}
let U = class extends _0x1764d8 {
  constructor(_0x341f3f, _0x5205cb) {
    (super(),
      (this._componentManager = _0x341f3f),
      (this._iconManager = _0x5205cb),
      this._registerComponents(),
      this._registerIcons());
  }
  _registerIcons() {
    this.disposeWithMe(
      this._iconManager["register"]({ CodeBlockIcon: _0xd49c05 }),
    );
  }
  _registerComponents() {
    this.disposeWithMe(this._componentManager["register"](H, Dt));
  }
};
U = B([z(0, _0x20b77c(_0x3e5b78)), z(1, _0x20b77c(_0x36c01c))], U);
const Ot = {
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
  W = "gray.900";
function kt(_0x30c237, _0x36f192) {
  if (_0x36f192 === "plaintext") return [];
  let _0x15a6fe =
    _0x28a5a2.languages[_0x36f192] ?? _0x28a5a2.languages["javascript"];
  if (!_0x15a6fe || !_0x30c237) return [];
  let _0x5df520 = [],
    _0x3259fb = 0;
  return (
    G(_0x28a5a2.tokenize(_0x30c237, _0x15a6fe), (_0x4982e3, _0x5174f3) => {
      let _0x49aff1 = _0x3259fb;
      ((_0x3259fb += _0x4982e3.length),
        _0x4982e3 &&
          _0x5df520.push({
            color: Mt(_0x5174f3),
            end: _0x3259fb,
            start: _0x49aff1,
          }));
    }),
    _0x5df520
  );
}
function At(_0x4e2a9c, _0x2b878d) {
  var _0x1b1745;
  return (
    ((_0x1b1745 = _0x4e2a9c.find(
      (_0x5ac22a) => _0x5ac22a.start <= _0x2b878d && _0x2b878d < _0x5ac22a.end,
    )) == null
      ? undefined
      : _0x1b1745.color) ?? W
  );
}
function G(_0x4352f7, _0x3cc85a, _0x48974d = "") {
  _0x4352f7.forEach((_0x1c1c5d) => {
    if (typeof _0x1c1c5d == "string") {
      _0x3cc85a(_0x1c1c5d, _0x48974d);
      return;
    }
    let _0x35375f = jt(_0x1c1c5d.type),
      _0xaeb69a = _0x1c1c5d.content;
    typeof _0xaeb69a == "string"
      ? _0x3cc85a(_0xaeb69a, _0x35375f)
      : G(
          Array.isArray(_0xaeb69a) ? _0xaeb69a : [_0xaeb69a],
          _0x3cc85a,
          _0x35375f,
        );
  });
}
function jt(_0x131171) {
  return _0x131171.replace(/-([a-z])/g, (_0x42772d, _0x42062e) =>
    _0x42062e.toUpperCase(),
  );
}
function Mt(_0xf08bbc) {
  return Ot[_0xf08bbc] ?? W;
}
function Nt(_0x446edc, _0xc649f, _0x2ee7dc, _0x5f3f08) {
  let _0x59065d = [];
  return (
    _0x446edc.forEach((_0x5e489d) => {
      let _0x122adf = _0xc649f.filter(
        (_0x21806c) =>
          _0x21806c.pageIndex >= 0 &&
          _0x21806c.ed >= _0x5e489d.startIndex &&
          _0x21806c.st <= _0x5e489d.endIndex,
      );
      Array.from(
        new Set(_0x122adf.map((_0x5f437c) => _0x5f437c.pageIndex)),
      ).forEach((_0x3663f0) => {
        let _0x4c10b0 = _0x122adf.filter(
          (_0x4fd41c) => _0x4fd41c.pageIndex === _0x3663f0,
        );
        Array.from(
          new Set(_0x4c10b0.map((_0x1d6d9b) => _0x1d6d9b.layoutFragment)),
        ).forEach((_0x4e9489) => {
          let _0x530454 = _0x4c10b0.filter(
              (_0x6d14e7) => _0x6d14e7.layoutFragment === _0x4e9489,
            ),
            _0xcb9494 = Math.min(..._0x530454.map(K)),
            _0x197654 = Math.max(..._0x530454.map(Lt)),
            _0xe0b376 = Math.min(..._0x530454.map(Pt)) - _0x5f3f08,
            _0x211c49 = Math.max(..._0x530454.map(Ft)) + _0x5f3f08,
            _0x36afad = It(_0x530454);
          _0x59065d.push({
            blockId: _0x5e489d.blockId,
            ..._0x36afad,
            height: _0x197654 - _0xcb9494 + _0x2ee7dc * 2,
            left: _0xe0b376,
            pageIndex: _0x3663f0,
            top: _0xcb9494 - _0x2ee7dc,
            width: _0x211c49 - _0xe0b376,
          });
        });
      });
    }),
    _0x59065d
  );
}
function Pt(_0x4b5fb7) {
  return _0x4b5fb7.visualLeft ?? _0x4b5fb7.left;
}
function Ft(_0x485272) {
  return (
    (_0x485272.visualLeft ?? _0x485272.left) +
    (_0x485272.visualWidth ?? _0x485272.width)
  );
}
function It(_0x3398b4) {
  let _0x3ed758 = _0x3398b4
      .map((_0x39da02) => _0x39da02.clipLeft)
      .filter((_0x529426) => _0x529426 != null),
    _0x5879fa = _0x3398b4
      .map((_0x2606b8) => _0x2606b8.clipRight)
      .filter((_0x4a20ab) => _0x4a20ab != null);
  if (!_0x3ed758.length || !_0x5879fa.length) return {};
  let _0x85498c = Math.max(..._0x3ed758),
    _0x127a74 = Math.min(..._0x5879fa);
  return _0x127a74 > _0x85498c
    ? { clipLeft: _0x85498c, clipRight: _0x127a74 }
    : {};
}
function K(_0x5f45b8) {
  return (
    _0x5f45b8.top + (_0x5f45b8.marginTop ?? 0) + (_0x5f45b8.paddingTop ?? 0)
  );
}
function Lt(_0xd2dc63) {
  return _0xd2dc63.contentHeight == null
    ? _0xd2dc63.top +
        _0xd2dc63.height -
        (_0xd2dc63.marginBottom ?? 0) -
        (_0xd2dc63.paddingBottom ?? 0)
    : K(_0xd2dc63) + _0xd2dc63.contentHeight;
}
function q(_0x21fd43) {
  "@babel/helpers - typeof";
  return (
    (q =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x3b9122) {
            return typeof _0x3b9122;
          }
        : function (_0x57762e) {
            return _0x57762e &&
              typeof Symbol == "function" &&
              _0x57762e.constructor === Symbol &&
              _0x57762e !== Symbol.prototype
              ? "symbol"
              : typeof _0x57762e;
          }),
    q(_0x21fd43)
  );
}
function Rt(_0x16175a, _0x159e96) {
  if (q(_0x16175a) != "object" || !_0x16175a) return _0x16175a;
  var _0x1a263c = _0x16175a[Symbol.toPrimitive];
  if (_0x1a263c !== undefined) {
    var _0x4bfcc2 = _0x1a263c.call(_0x16175a, _0x159e96 || "default");
    if (q(_0x4bfcc2) != "object") return _0x4bfcc2;
    throw TypeError(
      "@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.",
    );
  }
  return (_0x159e96 === "string" ? String : Number)(_0x16175a);
}
function zt(_0x2f48b3) {
  var _0x458535 = Rt(_0x2f48b3, "string");
  return q(_0x458535) == "symbol" ? _0x458535 : _0x458535 + "";
}
function J(_0x12fe89, _0x17f3c9, _0x24236e) {
  return (
    (_0x17f3c9 = zt(_0x17f3c9)) in _0x12fe89
      ? Object.defineProperty(_0x12fe89, _0x17f3c9, {
          value: _0x24236e,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x12fe89[_0x17f3c9] = _0x24236e),
    _0x12fe89
  );
}
const Y = -10990,
  Bt = "gray.700";
let X = class extends _0x1764d8 {
  constructor(
    _0xfdedb4,
    _0x4cdee6,
    _0x56aac1,
    _0x6a5337,
    _0x23e69,
    _0x469aba,
    _0x2a1ba2,
  ) {
    (super(),
      (this._context = _0xfdedb4),
      (this._docSkeletonManagerService = _0x4cdee6),
      (this._docSelectionManagerService = _0x56aac1),
      (this._docsCodeModel = _0x6a5337),
      (this._docCanvasPopManagerService = _0x23e69),
      (this._commandService = _0x469aba),
      (this._permissionService = _0x2a1ba2),
      J(this, "_languageHitRects", []),
      J(this, "_blockHitRects", []),
      J(this, "_languagePopoverDisposable", null),
      J(this, "_activeLanguageBlockId", null),
      J(this, "_hoveredCodeBlockId", null),
      J(this, "_cursorBeforeLanguageHover", null),
      this._initRender(),
      this._initPointer(),
      this.disposeWithMe(
        this._docsCodeModel["change$"].subscribe(({ unitId: _0x3f7974 }) => {
          _0x3f7974 === this._context["unitId"] && this._makeDirty();
        }),
      ),
      this.disposeWithMe(
        this._docSelectionManagerService["textSelection$"].subscribe(
          ({ unitId: _0x2d0e08 }) => {
            _0x2d0e08 === this._context["unitId"] && this._makeDirty();
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
    var _0x299460;
    let _0x5214b5 = this._context["mainComponent"],
      _0x57bd78 =
        _0x5214b5 == null || (_0x299460 = _0x5214b5.pageRender$) == null
          ? undefined
          : _0x299460.subscribe((_0x140741) => this._drawPage(_0x140741));
    _0x57bd78 &&
      this.disposeWithMe({
        dispose: () => {
          var _0x1ec8c0, _0x36c385;
          return (
            ((_0x1ec8c0 = _0x57bd78.unsubscribe) == null
              ? undefined
              : _0x1ec8c0.call(_0x57bd78)) ??
            ((_0x36c385 = _0x57bd78.dispose) == null
              ? undefined
              : _0x36c385.call(_0x57bd78))
          );
        },
      });
  }
  _initPointer() {
    let _0x59945a = this._context["mainComponent"] ?? this._context["scene"];
    (this.disposeWithMe(
      _0x59945a.onPointerMove$["subscribeEvent"]({
        next: ([_0x221e49]) => {
          var _0x585a39;
          let _0x259b56 = Qt(
              _0x221e49.offsetX,
              _0x221e49.offsetY,
              this._context["scene"],
            ),
            _0x1b321c = this._hitLanguageButton(_0x259b56.x, _0x259b56.y);
          (this._setHoveredCodeBlock(
            (_0x1b321c == null ? undefined : _0x1b321c.blockId) ??
              ((_0x585a39 = this._hitCodeBlock(_0x259b56.x, _0x259b56.y)) ==
              null
                ? undefined
                : _0x585a39.blockId) ??
              null,
          ),
            _0x1b321c && this._canEditBlock(_0x1b321c.blockId)
              ? this._setPointerCursor()
              : this._restorePointerCursor());
        },
        priority: Y,
      }),
    ),
      this.disposeWithMe(
        _0x59945a.onPointerLeave$["subscribeEvent"](() => {
          (this._setHoveredCodeBlock(null), this._restorePointerCursor());
        }),
      ),
      this.disposeWithMe(
        _0x59945a.onPointerDown$["subscribeEvent"]({
          next: ([_0x13bc56, _0x4b3cdf]) => {
            var _0xec05f8, _0x135f68, _0x4cb4d5;
            if (_0x13bc56.button === 2) return;
            let _0x352875 = Qt(
                _0x13bc56.offsetX,
                _0x13bc56.offsetY,
                this._context["scene"],
              ),
              _0xab7524 = this._hitLanguageButton(_0x352875.x, _0x352875.y);
            if (!_0xab7524) {
              this._closeLanguagePopover();
              return;
            }
            (_0x4b3cdf == null ||
              (_0xec05f8 = _0x4b3cdf.stopPropagation) == null ||
              _0xec05f8.call(_0x4b3cdf),
              _0x4b3cdf && (_0x4b3cdf.skipNextObservers = true),
              (_0x135f68 = _0x13bc56.stopPropagation) == null ||
                _0x135f68.call(_0x13bc56),
              (_0x4cb4d5 = _0x13bc56.preventDefault) == null ||
                _0x4cb4d5.call(_0x13bc56),
              this._openLanguagePopover(_0xab7524));
          },
          priority: Y,
        }),
      ));
  }
  _drawPage(_0x512156) {
    var _0x822c05;
    let _0x2739f7 = this._context["unit"].getBody(),
      _0x3c3f66 =
        (_0x2739f7 == null || (_0x822c05 = _0x2739f7.blockRanges) == null
          ? undefined
          : _0x822c05.filter(
              (_0x3fa726) => _0x3fa726.blockType === _0x7a1506.CODE,
            )) ?? [];
    if (!_0x2739f7 || !_0x3c3f66.length) {
      ((this._languageHitRects = []), (this._blockHitRects = []));
      return;
    }
    let _0x11dc1f =
        this._docSkeletonManagerService["getSkeleton"]().getSkeletonData(),
      _0x4053e9 = (_0x11dc1f == null ? undefined : _0x11dc1f.pages) ?? [],
      _0x578c30 = _0x4053e9.indexOf(_0x512156.page);
    if (_0x578c30 < 0) return;
    _0x578c30 === 0 &&
      ((this._languageHitRects = []), (this._blockHitRects = []));
    let _0x535038 = this._collectLines(_0x4053e9, _0x3c3f66),
      _0x50bfb3 = Z(this._context["mainComponent"]),
      _0x3892b7 = Nt(_0x3c3f66, _0x535038, 8, 0).filter(
        (_0x166587) => _0x166587.pageIndex === _0x578c30,
      );
    (_0x3892b7.forEach((_0x369c86) =>
      Gt(_0x512156.ctx, _0x369c86, () => {
        Wt(
          _0x512156.ctx,
          _0x369c86.left,
          _0x369c86.top,
          _0x369c86.width,
          _0x369c86.height,
          6,
        );
      }),
    ),
      _0x3892b7.forEach((_0x535fe6) => {
        let _0x52b25b = Kt(
          {
            blockId: _0x535fe6.blockId,
            bottom: _0x535fe6.top + _0x535fe6.height + _0x50bfb3.docsTop,
            left: _0x535fe6.left + _0x50bfb3.docsLeft,
            right: _0x535fe6.left + _0x535fe6.width + _0x50bfb3.docsLeft,
            top: _0x535fe6.top + _0x50bfb3.docsTop,
          },
          _0x535fe6,
          _0x50bfb3.docsLeft,
        );
        _0x52b25b && this._blockHitRects["push"](_0x52b25b);
      }));
    let _0x465b85 = new Map(),
      _0x3d8bb1 = new Map();
    (this._collectGlyphRuns(_0x4053e9, _0x3c3f66)
      .filter((_0x1923bf) => _0x1923bf.pageIndex === _0x578c30)
      .forEach((_0x207bc5) => {
        var _0xf36009;
        let _0x49bbff = _0x207bc5.blockRange["blockId"];
        if (!_0x465b85.has(_0x49bbff)) {
          let _0x31e347 = _0x425eaf(
              this._docsCodeModel["getCodeConfig"](
                this._context["unitId"],
                _0x207bc5.blockRange["blockId"],
              ),
            ),
            { codeText: _0x358307, streamOffsetToCodeOffset: _0x5bb11a } = Ut(
              _0x2739f7.dataStream,
              _0x207bc5.blockRange,
            );
          (_0x465b85.set(_0x49bbff, kt(_0x358307, _0x31e347.language)),
            _0x3d8bb1.set(_0x49bbff, _0x5bb11a));
        }
        let _0x24ed17 =
          (_0xf36009 = _0x3d8bb1.get(_0x49bbff)) == null
            ? undefined
            : _0xf36009.get(_0x207bc5.streamOffset);
        _0x24ed17 != null &&
          Xt(
            _0x512156.ctx,
            _0x207bc5,
            At(_0x465b85.get(_0x49bbff) ?? [], _0x24ed17),
          );
      }),
      _0x3892b7.forEach((_0x286732) => {
        if (!this._shouldDrawLanguageButton(_0x286732.blockId)) return;
        let _0x5bcd15 = _0x425eaf(
            this._docsCodeModel["getCodeConfig"](
              this._context["unitId"],
              _0x286732.blockId,
            ),
          ),
          _0x32c108 = Gt(_0x512156.ctx, _0x286732, () =>
            qt(
              _0x512156.ctx,
              _0x286732.left,
              _0x286732.top,
              _0x286732.width,
              _0x5bcd15.language,
            ),
          ),
          _0x551cb0 = Kt(
            {
              blockId: _0x286732.blockId,
              bottom: _0x32c108.bottom + _0x50bfb3.docsTop,
              left: _0x32c108.left + _0x50bfb3.docsLeft,
              right: _0x32c108.right + _0x50bfb3.docsLeft,
              top: _0x32c108.top + _0x50bfb3.docsTop,
            },
            _0x286732,
            _0x50bfb3.docsLeft,
          );
        _0x551cb0 && this._languageHitRects["push"](_0x551cb0);
      }));
  }
  _collectLines(_0xee9db3, _0x102921) {
    let _0x29fdeb = [],
      _0x484398 = this._getCodeParagraphOwners(_0x102921),
      _0x137736 = Z(this._context["mainComponent"]);
    return (
      _0x585839(
        _0xee9db3,
        {
          docsLeft: _0x137736.docsLeft,
          pageMarginTop: _0x137736.pageMarginTop,
          tableCellInsetX: 6,
          unitId: this._context["unitId"],
        },
        (_0xe16174) => {
          let _0x18a5d8 = _0x484398.get(_0xe16174.line["paragraphIndex"]);
          _0x18a5d8 && _0x29fdeb.push(Vt(_0xe16174, _0x18a5d8));
        },
      ),
      _0x29fdeb
    );
  }
  _collectGlyphRuns(_0x416df4, _0x206759) {
    let _0xce0f44 = [],
      _0x463d02 = this._getCodeParagraphOwners(_0x206759),
      _0x2b377a = Z(this._context["mainComponent"]);
    return (
      _0x585839(
        _0x416df4,
        {
          docsLeft: _0x2b377a.docsLeft,
          pageMarginTop: _0x2b377a.pageMarginTop,
          tableCellInsetX: 6,
          unitId: this._context["unitId"],
        },
        (_0x28ca44) => {
          let _0x5831c4 = _0x463d02.get(_0x28ca44.line["paragraphIndex"]);
          _0x5831c4 &&
            _0x28ca44.line["divides"].forEach((_0x1e93e6) => {
              let _0x2e370b = _0x1e93e6.st;
              _0x1e93e6.glyphGroup["forEach"]((_0x51284e) => {
                var _0x10c3a7;
                if (Ht(_0x51284e)) {
                  let _0x2be69a =
                    _0x28ca44.pageLeft +
                    _0x28ca44.column["left"] +
                    _0x1e93e6.left +
                    _0x1e93e6.paddingLeft +
                    _0x51284e.left +
                    _0x51284e.xOffset;
                  if (
                    _0x28ca44.clipLeft != null &&
                    _0x28ca44.clipRight != null &&
                    (_0x2be69a < _0x28ca44.clipLeft ||
                      _0x2be69a > _0x28ca44.clipRight)
                  ) {
                    var _0x14e66d;
                    _0x2e370b += Math.max(
                      _0x51284e.count,
                      ((_0x14e66d = _0x51284e.content) == null
                        ? undefined
                        : _0x14e66d.length) ?? 1,
                    );
                    return;
                  }
                  _0xce0f44.push({
                    blockRange: _0x5831c4,
                    divide: _0x1e93e6,
                    glyph: _0x51284e,
                    line: _0x28ca44.line,
                    pageIndex: _0x28ca44.pageIndex,
                    streamOffset: _0x2e370b,
                    x: _0x2be69a,
                    y:
                      _0x28ca44.sectionTop +
                      _0x28ca44.line["top"] +
                      _0x28ca44.line["marginTop"] +
                      _0x28ca44.line["paddingTop"] +
                      _0x28ca44.line["asc"],
                  });
                }
                _0x2e370b += Math.max(
                  _0x51284e.count,
                  ((_0x10c3a7 = _0x51284e.content) == null
                    ? undefined
                    : _0x10c3a7.length) ?? 1,
                );
              });
            });
        },
      ),
      _0xce0f44
    );
  }
  _getCodeParagraphOwners(_0x3200fc) {
    var _0x894027;
    let _0x3a1824 = new Map(),
      _0x3ff46d =
        ((_0x894027 = this._context["unit"].getBody()) == null
          ? undefined
          : _0x894027.paragraphs) ?? [];
    return (
      _0x3200fc.forEach((_0x3ab4d7) => {
        _0x3ff46d.forEach((_0x101776) => {
          _0x101776.startIndex > _0x3ab4d7.startIndex &&
            _0x101776.startIndex < _0x3ab4d7.endIndex &&
            _0x3a1824.set(_0x101776.startIndex, _0x3ab4d7);
        });
      }),
      _0x3a1824
    );
  }
  _makeDirty() {
    var _0x3f2e67;
    ((_0x3f2e67 = this._context["mainComponent"]) == null ||
      _0x3f2e67.makeDirty(true),
      this._context["scene"].makeDirty());
  }
  _hitLanguageButton(_0x5dd392, _0x3a5269) {
    return (
      this._languageHitRects["find"](
        (_0x30eccb) =>
          _0x5dd392 >= _0x30eccb.left &&
          _0x5dd392 <= _0x30eccb.right &&
          _0x3a5269 >= _0x30eccb.top &&
          _0x3a5269 <= _0x30eccb.bottom,
      ) ?? null
    );
  }
  _hitCodeBlock(_0x16a340, _0x11c3b1) {
    return (
      this._blockHitRects["find"](
        (_0x2fb216) =>
          _0x16a340 >= _0x2fb216.left &&
          _0x16a340 <= _0x2fb216.right &&
          _0x11c3b1 >= _0x2fb216.top &&
          _0x11c3b1 <= _0x2fb216.bottom,
      ) ?? null
    );
  }
  _setHoveredCodeBlock(_0x1bdad9) {
    this._hoveredCodeBlockId !== _0x1bdad9 &&
      ((this._hoveredCodeBlockId = _0x1bdad9), this._makeDirty());
  }
  _shouldDrawLanguageButton(_0x532121) {
    return (
      this._canEditBlock(_0x532121) &&
      (this._activeLanguageBlockId === _0x532121 ||
        this._hoveredCodeBlockId === _0x532121 ||
        this._getFocusedCodeBlockId() === _0x532121)
    );
  }
  _getFocusedCodeBlockId() {
    var _0x5ffc55, _0x55f5fc;
    let _0x3289ad =
      this._docSelectionManagerService["getTextRanges"]({
        unitId: this._context["unitId"],
        subUnitId: this._context["unitId"],
      }) ?? [];
    if (!_0x3289ad.length) return null;
    let _0x52e082 =
        ((_0x5ffc55 = this._context["unit"].getBody()) == null ||
        (_0x5ffc55 = _0x5ffc55.blockRanges) == null
          ? undefined
          : _0x5ffc55.filter(
              (_0x5b2d1b) => _0x5b2d1b.blockType === _0x7a1506.CODE,
            )) ?? [],
      _0x4f50d4 =
        _0x3289ad.find((_0xbb4a72) => _0xbb4a72.isActive) ?? _0x3289ad[0];
    return (_0x4f50d4 == null ? undefined : _0x4f50d4.startOffset) == null ||
      (_0x4f50d4 == null ? undefined : _0x4f50d4.endOffset) == null
      ? null
      : (((_0x55f5fc = _0x52e082.find(
          (_0x15bf91) =>
            _0x4f50d4.startOffset >= _0x15bf91.startIndex &&
            _0x4f50d4.endOffset <= _0x15bf91.endIndex,
        )) == null
          ? undefined
          : _0x55f5fc.blockId) ?? null);
  }
  _openLanguagePopover(_0xb79df2) {
    if ((this._closeLanguagePopover(), !this._canEditBlock(_0xb79df2.blockId)))
      return;
    this._activeLanguageBlockId = _0xb79df2.blockId;
    let _0x44fdc1 = _0x425eaf(
      this._docsCodeModel["getCodeConfig"](
        this._context["unitId"],
        _0xb79df2.blockId,
      ),
    );
    this._languagePopoverDisposable = this._docCanvasPopManagerService[
      "attachPopupToRect"
    ](
      _0xb79df2,
      {
        componentKey: H,
        direction: "bottom-right",
        extraProps: {
          activeLanguage: _0x44fdc1.language,
          onSelect: (_0x3dff32) => {
            let _0xbfaba2 = this._activeLanguageBlockId;
            _0xbfaba2 &&
              (this._commandService["executeCommand"](_0x5c6684.id, {
                blockId: _0xbfaba2,
                config: { language: _0x3dff32 },
              }),
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
    var _0x107d1e;
    ((_0x107d1e = this._languagePopoverDisposable) == null ||
      _0x107d1e.dispose(),
      (this._languagePopoverDisposable = null),
      (this._activeLanguageBlockId = null));
  }
  _canEditBlock(_0x7a0be7) {
    return _0x352644(this._permissionService, this._context["unitId"], [
      ..._0xc8724f(this._context["unit"], "", "custom-block", _0x7a0be7),
      _0x29aec7("", "custom-block", _0x7a0be7),
    ]);
  }
  _setPointerCursor() {
    ((this._cursorBeforeLanguageHover ??= this._context["scene"].getCursor()),
      this._context["scene"].setCursor(_0x3d520e.POINTER));
  }
  _restorePointerCursor() {
    this._cursorBeforeLanguageHover != null &&
      (this._context["scene"].setCursor(this._cursorBeforeLanguageHover),
      (this._cursorBeforeLanguageHover = null));
  }
};
X = B(
  [
    z(1, _0x20b77c(_0x41d586)),
    z(2, _0x20b77c(_0x4c069b)),
    z(3, _0x20b77c(_0x4acfa2)),
    z(4, _0x20b77c(_0x12bf5d)),
    z(5, _0x2b1c6f),
    z(6, _0x293fea),
  ],
  X,
);
function Vt(_0x1303ba, _0x5a826d) {
  let {
    column: _0x81564f,
    line: _0x51c723,
    pageIndex: _0x2f1204,
    pageLeft: _0x2d6077,
    sectionTop: _0x322cd7,
  } = _0x1303ba;
  return {
    layoutFragment: _0x81564f,
    contentHeight: _0x51c723.contentHeight,
    ed: _0x51c723.ed,
    height: _0x51c723.lineHeight,
    left: _0x2d6077 + _0x81564f.left,
    clipLeft: _0x1303ba.clipLeft,
    clipRight: _0x1303ba.clipRight,
    visualLeft: _0x1303ba.visualLeft,
    visualWidth: _0x1303ba.visualWidth,
    marginBottom: _0x51c723.marginBottom,
    marginTop: _0x51c723.marginTop,
    paddingBottom: _0x51c723.paddingBottom,
    paddingTop: _0x51c723.paddingTop,
    pageIndex: _0x2f1204,
    st: _0x51c723.st,
    top: _0x322cd7 + _0x51c723.top,
    width: _0x81564f.width,
  };
}
function Z(_0x41f223) {
  var _0x200458;
  let _0x3af3f1 =
    _0x41f223 == null || (_0x200458 = _0x41f223.getOffsetConfig) == null
      ? undefined
      : _0x200458.call(_0x41f223);
  return {
    docsLeft: (_0x3af3f1 == null ? undefined : _0x3af3f1.docsLeft) ?? 0,
    docsTop: (_0x3af3f1 == null ? undefined : _0x3af3f1.docsTop) ?? 0,
    pageMarginTop:
      (_0x3af3f1 == null ? undefined : _0x3af3f1.pageMarginTop) ?? 0,
  };
}
function Ht(_0x49ce4d) {
  return (
    !!_0x49ce4d.content &&
    _0x49ce4d.streamType !== _0x1cb21f.PARAGRAPH &&
    _0x49ce4d.streamType !== _0x1cb21f.BLOCK_START &&
    _0x49ce4d.streamType !== _0x1cb21f.BLOCK_END
  );
}
function Ut(_0x5eb8e7, _0x3da7e9) {
  let _0x1a9943 = new Map(),
    _0x712711 = "";
  for (
    let _0x4b1887 = _0x3da7e9.startIndex + 1;
    _0x4b1887 < _0x3da7e9.endIndex;
    _0x4b1887++
  ) {
    let _0x4cf12b = _0x5eb8e7[_0x4b1887];
    _0x4cf12b !== _0x1cb21f.BLOCK_START &&
      _0x4cf12b !== _0x1cb21f.BLOCK_END &&
      (_0x1a9943.set(_0x4b1887, _0x712711.length),
      (_0x712711 += _0x4cf12b === _0x1cb21f.PARAGRAPH ? "\x0a" : _0x4cf12b));
  }
  return { codeText: _0x712711, streamOffsetToCodeOffset: _0x1a9943 };
}
function Wt(_0x2ed4de, _0x39c3a3, _0x23b2e1, _0x477814, _0x26111e, _0x5cb1a8) {
  let _0x45a8d6 = Math.min(_0x5cb1a8, _0x477814 / 2, _0x26111e / 2);
  (_0x2ed4de.save(),
    _0x2ed4de.beginPath(),
    _0x2ed4de.moveTo(_0x39c3a3 + _0x45a8d6, _0x23b2e1),
    _0x2ed4de.lineTo(_0x39c3a3 + _0x477814 - _0x45a8d6, _0x23b2e1),
    _0x2ed4de.quadraticCurveTo(
      _0x39c3a3 + _0x477814,
      _0x23b2e1,
      _0x39c3a3 + _0x477814,
      _0x23b2e1 + _0x45a8d6,
    ),
    _0x2ed4de.lineTo(_0x39c3a3 + _0x477814, _0x23b2e1 + _0x26111e - _0x45a8d6),
    _0x2ed4de.quadraticCurveTo(
      _0x39c3a3 + _0x477814,
      _0x23b2e1 + _0x26111e,
      _0x39c3a3 + _0x477814 - _0x45a8d6,
      _0x23b2e1 + _0x26111e,
    ),
    _0x2ed4de.lineTo(_0x39c3a3 + _0x45a8d6, _0x23b2e1 + _0x26111e),
    _0x2ed4de.quadraticCurveTo(
      _0x39c3a3,
      _0x23b2e1 + _0x26111e,
      _0x39c3a3,
      _0x23b2e1 + _0x26111e - _0x45a8d6,
    ),
    _0x2ed4de.lineTo(_0x39c3a3, _0x23b2e1 + _0x45a8d6),
    _0x2ed4de.quadraticCurveTo(
      _0x39c3a3,
      _0x23b2e1,
      _0x39c3a3 + _0x45a8d6,
      _0x23b2e1,
    ),
    _0x2ed4de.closePath(),
    (_0x2ed4de.fillStyle = "gray.100"),
    _0x2ed4de.fill(),
    (_0x2ed4de.strokeStyle = "gray.200"),
    (_0x2ed4de.lineWidth = 1),
    _0x2ed4de.stroke(),
    _0x2ed4de.restore());
}
function Gt(_0x22c7df, _0x3f051a, _0x4676e1) {
  if (
    _0x3f051a.clipLeft == null ||
    _0x3f051a.clipRight == null ||
    _0x3f051a.clipRight <= _0x3f051a.clipLeft
  )
    return _0x4676e1();
  (_0x22c7df.save(),
    _0x22c7df.beginPath(),
    _0x22c7df.rectByPrecision(
      _0x3f051a.clipLeft,
      -100000,
      _0x3f051a.clipRight - _0x3f051a.clipLeft,
      200000,
    ),
    _0x22c7df.closePath(),
    _0x22c7df.clip());
  let _0x136419 = _0x4676e1();
  return (_0x22c7df.restore(), _0x136419);
}
function Kt(_0x3d54d4, _0x562611, _0x384301) {
  if (_0x562611.clipLeft == null || _0x562611.clipRight == null)
    return _0x3d54d4;
  let _0x4c656c = Math.max(_0x3d54d4.left, _0x562611.clipLeft + _0x384301),
    _0x436483 = Math.min(_0x3d54d4.right, _0x562611.clipRight + _0x384301);
  return _0x436483 > _0x4c656c
    ? { ..._0x3d54d4, left: _0x4c656c, right: _0x436483 }
    : null;
}
function qt(_0x56f63b, _0x3ada1a, _0x340900, _0x13952e, _0x19b745) {
  let _0x535709 = gt(_0x19b745);
  (_0x56f63b.save(), (_0x56f63b.font = "12px sans-serif"));
  let _0x55943f = _0x56f63b.measureText(_0x535709).width,
    _0x5509e2 = Math.min(118, Math.max(70, _0x55943f + 14 + 5 + 6)),
    _0x47c5d8 = _0x3ada1a + _0x13952e - _0x5509e2 - 6,
    _0x3b5357 = _0x340900 - 22 - 5;
  return (
    Yt(_0x56f63b, _0x47c5d8, _0x3b5357, _0x5509e2, 22, 5),
    (_0x56f63b.fillStyle = Bt),
    (_0x56f63b.textBaseline = "middle"),
    _0x56f63b.fillText(_0x535709, _0x47c5d8 + 7, _0x3b5357 + 22 / 2),
    Jt(_0x56f63b, _0x47c5d8 + _0x5509e2 - 7 - 6, _0x3b5357 + 22 / 2 - 2, 6),
    _0x56f63b.restore(),
    {
      bottom: _0x3b5357 + 22,
      left: _0x47c5d8,
      right: _0x47c5d8 + _0x5509e2,
      top: _0x3b5357,
    }
  );
}
function Jt(_0x8e96b4, _0x314d10, _0x379d22, _0x2ff784) {
  (_0x8e96b4.save(),
    _0x8e96b4.beginPath(),
    _0x8e96b4.moveTo(_0x314d10, _0x379d22),
    _0x8e96b4.lineTo(_0x314d10 + _0x2ff784 / 2, _0x379d22 + _0x2ff784 / 2),
    _0x8e96b4.lineTo(_0x314d10 + _0x2ff784, _0x379d22),
    (_0x8e96b4.strokeStyle = Bt),
    (_0x8e96b4.lineWidth = 1.4),
    (_0x8e96b4.lineCap = "round"),
    (_0x8e96b4.lineJoin = "round"),
    _0x8e96b4.stroke(),
    _0x8e96b4.restore());
}
function Yt(_0xbf736d, _0x74a2cb, _0x338118, _0x5bd072, _0x16291b, _0x2189bc) {
  let _0x5e8341 = Math.min(_0x2189bc, _0x5bd072 / 2, _0x16291b / 2);
  (_0xbf736d.save(),
    _0xbf736d.beginPath(),
    _0xbf736d.moveTo(_0x74a2cb + _0x5e8341, _0x338118),
    _0xbf736d.lineTo(_0x74a2cb + _0x5bd072 - _0x5e8341, _0x338118),
    _0xbf736d.quadraticCurveTo(
      _0x74a2cb + _0x5bd072,
      _0x338118,
      _0x74a2cb + _0x5bd072,
      _0x338118 + _0x5e8341,
    ),
    _0xbf736d.lineTo(_0x74a2cb + _0x5bd072, _0x338118 + _0x16291b - _0x5e8341),
    _0xbf736d.quadraticCurveTo(
      _0x74a2cb + _0x5bd072,
      _0x338118 + _0x16291b,
      _0x74a2cb + _0x5bd072 - _0x5e8341,
      _0x338118 + _0x16291b,
    ),
    _0xbf736d.lineTo(_0x74a2cb + _0x5e8341, _0x338118 + _0x16291b),
    _0xbf736d.quadraticCurveTo(
      _0x74a2cb,
      _0x338118 + _0x16291b,
      _0x74a2cb,
      _0x338118 + _0x16291b - _0x5e8341,
    ),
    _0xbf736d.lineTo(_0x74a2cb, _0x338118 + _0x5e8341),
    _0xbf736d.quadraticCurveTo(
      _0x74a2cb,
      _0x338118,
      _0x74a2cb + _0x5e8341,
      _0x338118,
    ),
    _0xbf736d.closePath(),
    (_0xbf736d.fillStyle = "gray.50"),
    _0xbf736d.fill(),
    (_0xbf736d.strokeStyle = "gray.200"),
    (_0xbf736d.lineWidth = 1),
    _0xbf736d.stroke(),
    _0xbf736d.restore());
}
function Xt(_0x4967f6, _0x3b2b84, _0x3b14cd) {
  let { glyph: _0x29d5bd, x: _0x5a1890, y: _0x48bc94 } = _0x3b2b84;
  (_0x4967f6.save(),
    (_0x4967f6.font = Zt(_0x29d5bd)),
    (_0x4967f6.textBaseline = "alphabetic"),
    (_0x4967f6.fillStyle = _0x3b14cd),
    _0x4967f6.fillText(_0x29d5bd.content, _0x5a1890, _0x48bc94),
    _0x4967f6.restore());
}
function Zt(_0x2ffdb4) {
  var _0x3adb42, _0x118aaf;
  return (
    ((_0x3adb42 = _0x2ffdb4.fontStyle) == null
      ? undefined
      : _0x3adb42.fontString) ??
    (((_0x118aaf = _0x2ffdb4.ts) == null ? undefined : _0x118aaf.fs) ?? 12) +
      "pt monospace"
  );
}
function Qt(_0x5783ea, _0x5c12c9, _0x4ceddd) {
  let { scaleX: _0xc4a13e, scaleY: _0x3724d8 } = _0x4ceddd.getAncestorScale(),
    _0x4315eb = _0x4ceddd.getViewport("viewMain");
  return _0x4315eb
    ? {
        x: _0x5783ea / _0xc4a13e + _0x4315eb.viewportScrollX,
        y: _0x5c12c9 / _0x3724d8 + _0x4315eb.viewportScrollY,
      }
    : { x: _0x5783ea, y: _0x5c12c9 };
}
const $t = new Set([
    _0x302505.id,
    _0x294ff1.id,
    _0x80f48c.id,
    _0x58397c.id,
    _0x4ee106.id,
    _0x4991dc.id,
    _0x868297.id,
    _0x5450c1.id,
    _0x298263.id,
    _0x147548.id,
    _0x4b168e.id,
    _0x8960.id,
    _0x4e9a44.id,
    _0x57a7e6.id,
    _0x480f52.id,
    _0x4e0029.id,
    _0x4cac11.id,
    _0xd633ad.id,
    _0x224f4f.id,
    _0x25aaca.id,
  ]),
  en = {
    id: _0x376aad.id,
    name: "docs-code.command.delete-current-paragraph",
    type: _0x5578df.COMMAND,
    multi: true,
    priority: 100,
    handler: async (_0x58945d, _0x45b3bb) => {
      var _0x3452b4;
      return (_0x45b3bb == null || (_0x3452b4 = _0x45b3bb.blockRange) == null
        ? undefined
        : _0x3452b4.blockType) === _0x7a1506.CODE
        ? (await _0x58945d
            .get(_0x2b1c6f)
            .executeCommand(_0x20b498.id, {
              unitId: _0x45b3bb.unitId,
              blockId: _0x45b3bb.blockRange["blockId"],
            }),
          true)
        : false;
    },
  };
let Q = class extends _0x1764d8 {
  constructor(_0xf6286d, _0x2758bc, _0x42e64b, _0xaf1a33, _0x4ca990) {
    (super(),
      (this._docAutoFormatService = _0xf6286d),
      (this._docSelectionManagerService = _0x2758bc),
      (this._commandService = _0x42e64b),
      (this._univerInstanceService = _0xaf1a33),
      (this._menuManagerService = _0x4ca990),
      this._menuManagerService["mergeMenu"](L),
      this._menuManagerService["appendRootMenu"](Ct),
      this._initBoundaryDeleteGuard(),
      this._initCancelEmptyCodeParagraphAutoFormat(),
      this._initStyleCommandGuard(),
      this.disposeWithMe(this._commandService["registerMultipleCommand"](en)));
  }
  _initBoundaryDeleteGuard() {
    [
      { id: _0x14c0b2.id, direction: "left" },
      { id: _0x556c91.id, direction: "right" },
    ].forEach(({ id: _0x3870ce, direction: _0x108f22 }) => {
      this.disposeWithMe(
        this._docAutoFormatService["registerAutoFormat"]({
          id: _0x3870ce,
          match: (_0x526d5f) =>
            _0x526d5f.selection["collapsed"]
              ? _0x28f874({
                  cursorOffset: _0x526d5f.selection["startOffset"],
                  direction: _0x108f22,
                  documentData: _0x526d5f.unit["getSnapshot"](),
                })
              : false,
          getMutations: () => [{ id: _0x6c13db.id }],
          priority: 50,
        }),
      );
    });
  }
  _initCancelEmptyCodeParagraphAutoFormat() {
    [_0x14c0b2.id, _0x556c91.id].forEach((_0x2efc0e) => {
      this.disposeWithMe(
        this._docAutoFormatService["registerAutoFormat"]({
          id: _0x2efc0e,
          match: (_0x24d492) =>
            _0x24d492.selection["collapsed"]
              ? _0x12a33a({
                  cursorOffset: _0x24d492.selection["startOffset"],
                  documentData: _0x24d492.unit["getSnapshot"](),
                }) != null
              : false,
          getMutations: (_0x3d51dc) => [
            {
              id: _0x470fe8.id,
              params: { cursorOffset: _0x3d51dc.selection["startOffset"] },
            },
          ],
          priority: 100,
        }),
      );
    });
  }
  _initStyleCommandGuard() {
    this.disposeWithMe(
      this._commandService["beforeCommandExecuted"]((_0x2f69be) => {
        if (!(!$t.has(_0x2f69be.id) || !this._isSelectionInCodeBlock()))
          throw new _0x523ad9(
            "Style commands are disabled inside docs code blocks.",
          );
      }),
    );
  }
  _isSelectionInCodeBlock() {
    let _0x5c7476 = this._univerInstanceService["getCurrentUnitOfType"](
        _0x54a7c6.UNIVER_DOC,
      ),
      _0xef6aea = _0x5c7476 == null ? undefined : _0x5c7476.getBody(),
      _0x20df42 = this._docSelectionManagerService["getTextRanges"]() ?? [];
    return !_0xef6aea || _0x20df42.length === 0
      ? false
      : (_0xef6aea.blockRanges ?? []).some(
          (_0x1141f3) =>
            _0x1141f3.blockType === _0x7a1506.CODE &&
            _0x20df42.some(
              (_0x49a727) =>
                Math.max(_0x49a727.startOffset, _0x1141f3.startIndex) <=
                Math.min(_0x49a727.endOffset, _0x1141f3.endIndex),
            ),
        );
  }
};
Q = B(
  [
    z(0, _0x20b77c(_0x233bf9)),
    z(1, _0x20b77c(_0x4c069b)),
    z(2, _0x2b1c6f),
    z(3, _0x5a5608),
    z(4, _0x51663e),
  ],
  Q,
);
let $ = class extends _0x2adca3 {
  constructor(_0x311d9a = R, _0x262a3e, _0x59bd3c, _0x2bb40c) {
    (super(),
      (this._config = _0x311d9a),
      (this._injector = _0x262a3e),
      (this._renderManagerService = _0x59bd3c),
      (this._configService = _0x2bb40c));
    let { menu: _0x1f07a7, ..._0x1c8fe7 } = _0x4546a0({}, R, this._config);
    (_0x1f07a7 &&
      this._configService["setConfig"]("menu", _0x1f07a7, { merge: true }),
      this._configService["setConfig"]("docs-code-ui.config", _0x1c8fe7));
  }
  onStarting() {
    (this._injector["add"]([U]),
      this._injector["add"]([V]),
      this._injector["get"](U),
      this._injector["get"](V),
      this._injector["add"]([Q]),
      this._injector["get"](Q));
  }
  onRendered() {
    this.disposeWithMe(
      this._renderManagerService["registerRenderModule"](_0x54a7c6.UNIVER_DOC, [
        X,
      ]),
    );
  }
};
(J($, "pluginName", _0x54e8e5 + "_UI_PLUGIN"),
  J($, "packageName", wt),
  J($, "version", Tt),
  J($, "type", _0x54a7c6.UNIVER_DOC),
  ($ = B(
    [
      _0x1a65f(_0x2afa3a, _0x20cab0, _0xbd1bfc, _0x3acf86, _0xf1932a),
      z(1, _0x20b77c(_0x4a597a)),
      z(2, _0x517441),
      z(3, _0x2eada1),
    ],
    $,
  )));
export { L as DocsCodeUIMenuSchema, $ as UniverDocsCodeUIPlugin };
