# T0b report — largest Pro `_0x` rename (Babel `scope.rename`)

Date: 2026-09-12. Product: `univer-workspace`. No git push. T9 files not touched.

## TDD

Fixture: `scripts/fixtures/0x-ident-rename.fixture.js`

```
function _0x12ab(){ return "_0xdead"; }
export { _0x12ab as publicApi };
{ eventID: "_0xdead" }
```

1. RED: stub `rename0xIdents` returned `{ changed: false }`. 3/3 fixture tests failed (`changed !== true`, abort not set).
2. GREEN: Babel `@babel/parser` + `path.scope.rename` + label pass. `node --test scripts/rename-univer-pro-0x-idents.test.mjs` → **5/5 pass** after healer tests (see below).
3. Extra tests (also TDD RED then GREEN):
   - abort `export { _0x123 }` with no `as`, source unchanged
   - dry-run `vendor/univer-pro/engine-formula/lib/es/facade.js` keeps `as FFormula`, no new `"_0x"` strings (`40 -> 0` renamed=14, **not written**)
   - heal unglue-split `as delete SmartArtNode` and `delete Foo(` plus `(function(){())` residue

Command (fresh):

```
✔ 5/5  duration_ms ~360
```

`package.json` `test:vendor` now includes `scripts/rename-univer-pro-0x-idents.test.mjs`.

## Files rewritten (`lib/es` only)

Order: engine-shape first (user), then next parseable largest-by-hit after aborts. `--write --apply`. lib/cjs and lib-root twins left untouched (hardlinks broken via unlink-first).

| File | Hits before | Hits after | Bindings renamed | Time | Overlay |
| --- | ---: | ---: | ---: | ---: | --- |
| `engine-shape/lib/es/index.js` | 39,922 | 0 | 9,960 | 41s | copied to `apps/workspace/node_modules/@univerjs-pro/engine-shape` |
| `slides-ui/lib/es/index.js` | 38,416 | 0 | 9,462 | 165s | copied |
| `pdfs/lib/es/index.js` | 25,574 | 0 | 6,214 | 6s | **skip** — package not installed in workspace `node_modules` |
| `embed-ui/lib/es/index.js` | 23,989 | **3** | 5,927 | 90s | copied |
| `boards/lib/es/index.js` | 16,986 | 0 | 4,085 | 11s | copied |

Batch wall time ~318s. No file exceeded 10 minutes.

`deleteSmartArtNode` export alias restored on engine-shape (was `as delete SmartArtNode` from unglue). Public `export { … as PublicName }` aliases kept.

## Aborted (untouched)

Parse still fails after healer; left as decoded `_0x` files:

| File | Hits | Reason |
| --- | ---: | --- |
| `engine-chart/lib/es/index.js` | 118,168 | `Unexpected token` (rotator residue / flattened control flow beyond `(function(){())`) |
| `boards-ui/lib/es/index.js` | 51,692 | `delete` split + later `Missing semicolon` after heal |
| `bases-ui/lib/es/index.js` | 43,015 | `Missing semicolon` (nested ternary / leftover decode) |

Healer (not `_0x` regex): rejoin `delete` + `Ident` that `unglueKeywords` split; replace `(function(){())` with `(function(){})`. Does not rewrite string literals.

## Remaining (`vendor/univer-pro/**/lib/es`)

| | Before T0b apply | After this batch |
| --- | ---: | ---: |
| Files with `_0x` | 184 | **180** |
| Token hits | 640,863 | **495,979** |

Largest remaining es: engine-chart 118,168 · boards-ui 51,692 · bases-ui 43,015 · collaboration 16,438 · bases 14,245.

lib/cjs + lib-root duplicates of the 5 rewritten files still have original `_0x` (intentional later pass). Tree-wide ~2M still includes those triples + dist.

embed-ui leftover 3: free calls `_0x1fd606(` ×2 and `_0x438c99(` — **no binding**, so `scope.rename` correctly skipped them (likely stripped decoder leftovers). Not string keys.

## Risks

- Safe: locals, params, import aliases, labels, spread `..._0x`, export locals with `as Public`.
- Unparseable largest files (engine-chart, boards-ui, bases-ui) still unreadably named; do not regex-fix.
- Babel `compact: true` regenerate changes whitespace vs original minified line; identifier rename is the semantic change.
- embed-ui 3 unbound `_0x` calls will still throw at runtime if hit; renaming them would not be `scope.rename`.
- pdfs overlay skipped (`@univerjs-pro/pdfs` not in this workspace install). `pnpm deobfuscate:pro` / postinstall copies vendor → nm for installed packages.
- Do not run `--all` yet (543 files / hours / huge freeze diff).

## Giants pass (backup then aggressive identifier rename)

Date: 2026-09-12. Policy: backup decoded-unrenamed copies; AST `scope.rename` + in-memory chunks; Comb `eventID` strings deferred (restore if they break). No tree-wide `_0x` sed. T9 untouched. No push.

### Backup

Decoded pre-rename copies:

`vendor/univer-pro-0x-backup/<pkg>/lib/es/index.js`

- `engine-chart` 118,168 hits
- `boards-ui` 51,692 hits
- `bases-ui` 43,015 hits

Obfuscated published originals remain at `vendor/univer-pro-published/<pkg>/`.

Restore one file (example engine-chart):

```
cp vendor/univer-pro-0x-backup/engine-chart/lib/es/index.js \
   vendor/univer-pro/engine-chart/lib/es/index.js
# then overlay like deobfuscate:pro, or:
cp vendor/univer-pro/engine-chart/lib/es/index.js \
   apps/workspace/node_modules/@univerjs-pro/engine-chart/lib/es/index.js
```

Same for `boards-ui` and `bases-ui`.

### Tool comparison (why Babel chunks)

| Tool | Parses giants? | Binding-aware rename? | Used? |
| --- | --- | --- | --- |
| OpenRewrite `@openrewrite/rewrite` 8.92.1 + Moderne CLI 4.8.3 | No (`ParseException` at same residue tokens). JS recipes exist (`change-import`, `order-imports`) but **no lossless identifier rename**; docs require `mod run` for JS. | N/A | Tried parseOnly offline; not used to rewrite vendor |
| ast-grep / `@ast-grep/napi` 0.45.3 | Yes (engine-chart: 118,157 `kind:identifier` vs 0 string `_0x`) | **No** — structural `--rewrite` only ([docs](https://ast-grep.github.io/guide/rewrite-code)). Would merge distinct bindings. | Search only; **no `--rewrite` on vendor** |
| ts-morph 28 `Identifier.rename()` | SourceFile opens; 197 syntactic diags (`Expression expected` at rotator residue) | Yes (`renameInStrings` default false) | Not used — same parse holes as Babel whole-file |
| Babel `scope.rename` + healer + in-memory split | Whole file still fails; **chunks** parse | Yes; skips string literals | **Winner for this pass** |

Tests: `node --test scripts/rename-univer-pro-0x-idents.test.mjs` → **7/7**.

### Files rewritten (`lib/es` only, `--write --apply`)

| File | Hits before | Hits after | Bindings renamed | Overlay |
| --- | ---: | ---: | ---: | --- |
| `engine-chart/lib/es/index.js` | 118,168 | **104,369** | 3,599 | copied |
| `boards-ui/lib/es/index.js` | 51,692 | **24,712** | 7,169 | copied |
| `bases-ui/lib/es/index.js` | 43,015 | **3,261** | 9,631 | copied |

Leftover hits are in unparseable IIFE/class chunks (not string keys). Restore from backup if Comb `eventID` / `serializeCombRequest` regresses.

## Not done

- `lib/cjs` / `lib/index.js` twins
- leftover hits inside unparseable wrapper chunks
- `--all`
- T9 / wrangler / `/demo` sheet open
- git push
