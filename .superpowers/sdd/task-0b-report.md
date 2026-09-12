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

## Nested IIFE / wrap-fragment pass

Date: 2026-09-12. Nested `function` extraction (keep declaration name) + wrap `return`/`let` fragments as `function __uw(){…}` + last-`;export{` split. No tree-wide `_0x` sed. T9 untouched. No push.

Fixture tests: `node --test scripts/rename-univer-pro-0x-idents.test.mjs` → **11/11**.

### Hits (`vendor/univer-pro/**/lib/es`)

| | This session start | After this pass |
| --- | ---: | ---: |
| Files with `_0x` | 180 | **26** |
| Token hits | 415,446 | **44,997** |

### Giants leftover IIFE chunks

| File | Hits before | Hits after |
| --- | ---: | ---: |
| `engine-chart/lib/es/index.js` | 104,369 | **21,807** |
| `boards-ui/lib/es/index.js` | 24,712 | **5,188** |
| `bases-ui/lib/es/index.js` | 3,261 | **3,223** |

Most remaining giant hits are unbound refs or residue Babel still cannot parse (`else{` rotators, `delete` splits, export not at top level). Unparseable chunks skipped after logging the first leftover token.

### Next-largest `lib/es` (parseable)

Most went **0** (collaboration, bases, slides-table-ui, docs-table, engine-pivot, slides, embed, facades, locales, …). Overlay copied when `@univerjs-pro/<pkg>` exists in workspace `node_modules`.

Stuck leftover (unparseable chunks): shape-editor-ui 6,766 · sheets-pivot 4,445 · chart-ui 1,714 · collaboration-client-ui 873 · sheets-print 671 · docs-print 243.

## Healer / windowed class pass + cjs twins

Date: 2026-09-12. T9 files not touched (`sheets-pivot*` skipped). No push. No `--all`.

### TDD

`node --test scripts/rename-univer-pro-0x-idents.test.mjs` → **16/16**.

RED then GREEN (4 new tests):

1. Heal `await Time as` → `awaitTime as` (unglue of `@univerjs/core` `awaitTime`).
2. Heal `URL();SearchParams` → `URLSearchParams` (prefer heal-before-parse so glue happens even when `new URL();` happens to parse).
3. Nested `function` whose body is `return/^[a-zA-Z]+:\/\//` — previous scanners treated `://` as a line comment; `/` after `return` is now a regex start.
4. Extract complete `class` bodies from unparseable `else{` IIFEs and `scope.rename` method params.

Still abort `export { _0x123 }` with no `as`. String / Comb keys untouched (`eventID` still 26 in collaboration-client es/cjs/lib).

### Backup (new; did not overwrite earlier giants)

`vendor/univer-pro-0x-backup/<pkg>/lib/es/index.js` added for: `shape-editor-ui`, `chart-ui`, `collaboration-client-ui`, `sheets-print`, `docs-print`. Existing `engine-chart` / `boards-ui` / `bases-ui` backups kept.

### lib/es (`--write --apply`, skip `sheets-pivot*`)

| File | Hits before | Hits after |
| --- | ---: | ---: |
| `engine-chart/lib/es/index.js` | 21,807 | **11,944** |
| `shape-editor-ui/lib/es/index.js` | 6,766 | **1,355** |
| `boards-ui/lib/es/index.js` | 5,188 | **2,705** |
| `bases-ui/lib/es/index.js` | 3,223 | **3,223** (still unparseable; export not at top level) |
| `chart-ui/lib/es/index.js` | 1,714 | **1,570** |
| `collaboration-client-ui/lib/es/index.js` | 874 | **469** |
| `sheets-print/lib/es/index.js` | 671 | **514** (`sheets-print` not installed in workspace nm) |
| `docs-print/lib/es/index.js` | 243 | **130** |

Small facade leftovers (11…1) still parse as wholes but leftover `_0x` are unbound decoder refs — `scope.rename` correctly skips them.

### Hits (`vendor/univer-pro/**/lib/es`)

| | This session start | After this pass |
| --- | ---: | ---: |
| Files with `_0x` | 26 | **26** |
| Token hits | 44,997 | **26,422** (includes skipped sheets-pivot 4,445) |

### cjs / lib-root twins of es-already-0

`--cjs-twins` (unlink-first + overlay). 274 candidates / 680,101 hits at start of twin pass. Processed in bounded batches; most large twins went **0**. Stalled twins (unparseable residue, not regex): engine-pivot cjs 2,856 · bases cjs facade 1,090 · a handful of other cjs facades.

| | After previous T0b wave (this session) | After twins |
| --- | ---: | ---: |
| Tree-wide files with `_0x` | 385 | **123** |
| Tree-wide tokens | 1,399,522 | **726,028** |
| `lib/cjs` tokens | 722,760 | **403,159** |

### Still unparseable (why)

- **engine-chart** leftover ~12k: missing-semicolon rotator residue + unbound stripped decoder (`_0xfce7a8(n)`). Nested functions/classes already renamed.
- **bases-ui** 3,223: `'import' and 'export' may only appear at the top level` even after `}export{` split; class walk finds nothing remaining.
- **sheets-pivot\***: skipped while T9 is live.
- Unbound `_0x(` calls (embed-ui 3, many giant leftovers): no binding, not renamed.

## Not done

- leftover hits inside unparseable wrapper chunks / unbound decoder calls
- `--all` (543-file freeze)
- T9 / wrangler / `/demo` sheet open
- git push

## Unbound decoder + inner-export slice + lib-root/cjs twins

Date: 2026-09-12. Did **not** re-run the stalled class/IIFE healer alone. T9 files not touched (`sheets-pivot*` skipped). No push. No `--all`.

### New techniques (TDD RED then GREEN)

`node --test scripts/rename-univer-pro-0x-idents.test.mjs` → **21/21**.

1. **Unbound leftover decoder identifiers** — if `_0xHEX` has no `function`/`class`/`const|let|var`/import binding, rename every Identifier span (lexer `walkCode`, not string/regex). Unique `ox<hex>` names. Strings and `export … as Public` stay. Fixture: `foo(_0xdead01(1));` + `"_0xdead01"`; also `var v99=_0xdead01` (RHS is not a binding).
2. **Inner `export`/`import` module slice** — first nested or trailing `export`/`import` (including `\nexport{`), split prefix/suffix, rename, splice. Suffix with no `_0x` kept unparsed (`Export 'Ui' is not defined` is parse-only).
3. **Rotator windows beyond class bodies** — complete `for(;;)` statements, concise object methods, `({…})` object literals, unclosed `else{` tails wrapped as `function __uw()`. Inner `function _0xabcd` names still skipped.
4. **`--lib-root-twins`** of es already 0 or rewritten (es hits < lib-root hits). Unlink-first + overlay. Backup if not already under `vendor/univer-pro-0x-backup/`.
5. **`--dirty-cjs`** of remaining dirty giants with the same chunker (no regex).

Still abort `export { _0x123 }` with no `as`.

### Hits

| | This session start (after `043f58f5`) | After this pass |
| --- | ---: | ---: |
| `lib/es` files / tokens | 26 / 26,422 | **6 / 9,165** (includes skipped sheets-pivot 4,445) |
| `lib/cjs` tokens | 403,159 | **20,719** |
| lib-root tokens | 286,970 | **24,171** |
| Tree-wide files / tokens | 123 / 726,028 | **48 / 63,532** |

### Giants

| File | Hits before | Hits after |
| --- | ---: | ---: |
| `engine-chart/lib/es/index.js` | 11,944 | **4,508** |
| `engine-chart/lib/index.js` | 118,168 | **4,508** |
| `engine-chart/lib/cjs/index.js` | 193,007 | **0** |
| `bases-ui/lib/es/index.js` | 3,223 | **25** |
| `boards-ui/lib/es/index.js` | 2,705 | **155** |
| `shape-editor-ui/lib/es/index.js` | 1,355 | **0** |
| `chart-ui/lib/es/index.js` | 1,570 | **11** |
| `sheets-print/lib/es/index.js` | 514 | **0** |
| `embed-ui/lib/es/index.js` | 3 | **0** |
| `engine-pivot/lib/cjs/index.js` | 2,856 | **0** |
| `bases/lib/cjs/facade.js` | 1,090 | **0** |

Small facades (docs-list/quote/callout/code/formula, history, thread-comment, print, sparkline-ui) went **0** on es + lib-root + cjs.

### Still stuck (one-line why)

- **sheets-pivot\***: skipped while T9 is live (~44k across es/cjs/lib-root).
- **engine-chart es/lib 4,508**: missing-semicolon rotator IIFE; remaining names are *bound* inside unparseable `function _0x…` bodies (second pass UNCHANGED).
- **boards-ui 155/79**: missing-semicolon residue after `else{`.
- **bases-ui 25 / docs-print 21 / chart-ui 11**: inner export slice + unbound left a few bound names in unparseable prefix.
- **collab `dist/*.cjs`**: not es/cjs/lib-root twins; left for a later dist pass.

Commit: `5abf54b7` `chore(vendor): drop leftover Pro _0x via unbound decoder and module-slice heals`.

## Extract inner `function _0x` + else-semicolon + dist

Date: 2026-09-12. Did **not** re-run unbound-decoder + module-slice alone. T9 files not touched (`sheets-pivot*`, `collaboration-client-ui` skipped). No push. No `--all`.

### New techniques (TDD RED then GREEN)

`node --test scripts/rename-univer-pro-0x-idents.test.mjs` → **28/28**.

1. **Extract complete `function _0xHEX(...){…}` as its own program** even when the parent IIFE does not parse. `scope.rename` the function’s own binding (recursion included), splice back, then rewrite remaining Identifier refs of that name in the parent. Fixture: unparseable `else{` containing `function _0xab12(a){ return a+_0xab12; }`.
2. **Missing semicolon after `else{`:** insert `;` only at a proven statement boundary (digit / `)` / `]` / string then `function|class|const|let|var|if|for|…`). Does not insert before `foo(function`. Fixture: `var _0xaaa=1function _0xbbb`.
3. **Parseable prefix of unclosed / false-complete hex functions** (brace matcher stole an outer `}`). Longest depth-1 statement prefix that parses as `function _0xHEX(){…}`, rename, splice without adding a brace.
4. **Hex `var`/`let`/`const` statements** in unparseable wrappers: isolate, wrap as `function __uw()`, `scope.rename`, splice, rewrite remaining Identifier refs of those bindings.
5. **`for (let x of _0xdead01)`** is not a binding of `_0xdead01` (unbound decoder rename).
6. **`--dist`** of leftover `dist/*.cjs` / `dist/*.mjs`, excluding `sheets-pivot*` and `collaboration-client-ui`. Same AST rename.

Still abort `export { _0x123 }` with no `as`. Strings / Comb keys untouched.

### Hits

| | This session start (after `5abf54b7`) | After this pass |
| --- | ---: | ---: |
| `lib/es` files / tokens | 6 / 9,165 | **4 / 4,569** (includes skipped sheets-pivot 4,445) |
| Tree-wide files / tokens | 48 / 63,532 | **15 / 44,748** |

### Giants

| File | Hits before | Hits after |
| --- | ---: | ---: |
| `engine-chart/lib/es/index.js` | 4,508 | **111** |
| `engine-chart/lib/index.js` | 4,508 | **111** |
| `boards-ui/lib/es/index.js` | 155 | **2** |
| `boards-ui/lib/cjs/index.js` | 79 | **2** |
| `bases-ui/lib/es/index.js` | 25 | **11** |
| `docs-print/lib/es/index.js` | 21 | **0** |
| `chart-ui/lib/es/index.js` | 11 | **0** |
| `bases-ui/lib/cjs/rolldown-runtime-*.js` | 47 | **0** |
| collab `dist/*.cjs` (service, worktree, endpoint, history, …) | 9,477 across 28 files | **11** (`collaboration-worktree-client/dist/index.mjs` only) |

### Still stuck (one-line why)

- **sheets-pivot\***: skipped while T9 is live (~44k across es/cjs/lib-root).
- **engine-chart es/lib 111**: leftover bound names past the parseable prefix of two unclosed `function _0x…` bodies.
- **bases-ui 11 / boards-ui 2**: inner export / missing-semicolon residue after `else{`.
- **collaboration-worktree-client dist/index.mjs 11**: unparseable chunks after AST rename (`Export 'x' is not defined` / unexpected token).
- **collaboration-client-ui**: skipped (T9 remapped leftover `_0x` imports onto `vN`).

Commit: `0ec13b3f` `chore(vendor): extract inner hex functions and rename leftover Pro dist _0x`.

## Loose parse (acorn-loose Identifier ranges)

Date: 2026-09-12. Did **not** re-run extract-inner-function alone. T9 files not touched (`sheets-pivot*`, `collaboration-client-ui` skipped). No push. No `--all`.

### New technique (TDD RED then GREEN)

`node --test scripts/rename-univer-pro-0x-idents.test.mjs` → **31/31**.

1. **Parse-only acorn-loose tree** of unclosed / unparseable leftover source. Babel `@babel/parser` `errorRecovery` still throws on EOF / `?..`. Collect Identifier `start`/`end` for bound `_0xHEX` names (function/class ids, params, var/let/const, catch, import locals), then splice replacements into the **original** slices. Does not generate code and does not add a closing brace. Fixture: `function _0xcc01(a){ return a+_0xcc01` (no `}`). Strings, non-computed property keys, and `export … as Public` stay.
2. Leftover Identifier in tiny files with a recovered binding is renamed (bases-ui 11, boards-ui 2, worktree-client 11). String / public export alias leftovers would be left.
3. Worktree-client `dist/index.mjs`: same AST (loose), not regex. Kept `?..` residue and `export{x as WorktreeClient,…}`. Module-slice still logs `Export 'x' is not defined` then the loose pass mops the prefix bindings.

Vendored `scripts/vendor/loose-parse/node_modules/{acorn,acorn-loose}` (force-added; root `node_modules/` gitignore).

Still abort `export { _0x123 }` with no `as`.

### Hits

| | This session start (after `0ec13b3f`) | After this pass |
| --- | ---: | ---: |
| `lib/es` files / tokens | 4 / 4,569 (includes skipped sheets-pivot 4,445) | **2 / 4,456** (sheets-pivot 4,445 + engine-chart 11) |
| Tree-wide files / tokens | 15 / 44,748 | **9 / 44,509** |

### Targets

| File | Hits before | Hits after |
| --- | ---: | ---: |
| `engine-chart/lib/es/index.js` | 111 | **11** |
| `engine-chart/lib/index.js` | 111 | **11** |
| `bases-ui/lib/es/index.js` | 11 | **0** |
| `bases-ui/lib/index.js` | 11 | **0** |
| `boards-ui/lib/es/index.js` | 2 | **0** |
| `boards-ui/lib/cjs/index.js` | 2 | **0** |
| `boards-ui/lib/index.js` | 2 | **0** |
| `collaboration-worktree-client/dist/index.mjs` | 11 | **0** |

### Still stuck (one-line why)

- **sheets-pivot\***: skipped while T9 is live (~44k across es/cjs/lib-root/facade). Biggest leftover.
- **engine-chart es/lib 11+11 `_0x5554c2`**: Identifier constructor refs with **no recovered binding** (prototype assignments + `;}(oO)`). Loose parse correctly skipped them; not strings.
- Non-pivot is **saturated** aside from those 22 unbound constructor idents. Remaining mass is sheets-pivot (blocked on T9).

Commit: `cd1c7fb1` `chore(vendor): loose-parse leftover Pro _0x without adding braces`.

