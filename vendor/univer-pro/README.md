# Readable @univerjs-pro copies

Published Univer Pro packages ship javascript-obfuscator string-array wrappers.
This directory holds decoded copies so we can read and patch them.

Original published blobs (do not edit): `vendor/univer-pro-published/`.

Regenerate from those originals (does not mutate the pnpm store; it unlinks then writes into `node_modules`):

Workflow: **decode → edit `vendor/univer-pro/<pkg>/lib/es` (or `dist/*.mjs`) → apply → never edit `vendor/univer-pro-published` or obfuscated `node_modules`.** Never patch `umd/` or the pnpm store. After `pnpm install`, run the script again.

Default set (Cloudflare Comb / OT / formula / exchange / print / worktree / comments):

```bash
node scripts/deobfuscate-univer-pro.mjs              # Cloudflare Pro set in DEFAULT_PACKAGES
node scripts/deobfuscate-univer-pro.mjs --all        # every @univerjs-pro package
node scripts/deobfuscate-univer-pro.mjs --fix-vendor # repair glued keywords + prettier
```

Edit files here, then re-apply:

```bash
node scripts/deobfuscate-univer-pro.mjs --fix-vendor
```

`pnpm install` restores obfuscated packages. Run the script again after install.

Keep both trees in git for now (`lib/` and `dist/`, not `umd/`). The root `.gitignore` would otherwise ignore every package `lib/` and `dist/`.

Prefer `lib/es/` (and `dist/*.mjs`) for reading and patches. Large `lib/cjs/` bundles stay as published when decoding would produce invalid syntax.
