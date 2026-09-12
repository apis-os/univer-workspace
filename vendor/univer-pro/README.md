# Readable @univerjs-pro copies

Published Univer Pro packages ship javascript-obfuscator string-array wrappers.
This directory holds decoded copies so we can read and patch them.

Original published blobs (do not edit): `vendor/univer-pro-published/`.
OSS `@univerjs` lives in `vendor/univer/` (not obfuscated).

**Freeze:** workspace `package.json` files use `file:` specifiers, and
`pnpm-workspace.yaml` `overrides` (pnpm 11 ignores `package.json#pnpm.overrides`)
map `@univerjs/*` and `@univerjs-pro/*` to these directories.
`.npmrc` does **not** send those scopes to insider-npm. After `pnpm install`,
packages still come from vendor. `postinstall` runs this deobfuscator so install
cannot forget the overlay.

Workflow: **decode → edit `vendor/univer-pro/<pkg>/lib/es` (or `dist` / `lib/cjs`) → apply → never edit `vendor/univer-pro-published` or the pnpm store.** Never patch `umd/`.

```bash
pnpm deobfuscate:pro                                 # DEFAULT_PACKAGES (all JS Pro used here)
node scripts/deobfuscate-univer-pro.mjs --all        # every @univerjs-pro directory in node_modules
node scripts/deobfuscate-univer-pro.mjs --fix-vendor # repair glued keywords + leftover `();` + prettier
node scripts/freeze-univer-vendor.mjs                # recopy from node_modules/.pnpm (rare)
```

`pnpm install` may relink `node_modules` onto vendor; it must not fetch `@univerjs`
or `@univerjs-pro` from a registry. Re-run `pnpm deobfuscate:pro` is safe: already
decoded files are skipped (`looksObfuscated` is false) unless published originals
are copied again.

Keep both Pro trees in git (`lib/` and `dist/`, not `umd/`). Prefer `lib/es/` and
`dist/*.mjs` for reading. Worker `require()`s `collaboration-service` CJS
(`dist/index.cjs`) — that file is decoded too.

Leftover `_0x` **identifiers** after string-array decode are expected. Wrappers
(`while(!![])`) must not remain in vendored `lib/es`, `dist`, or `lib/cjs`.
