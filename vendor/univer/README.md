# Frozen @univerjs (OSS) copies

These directories are the local install source for every `@univerjs/*` package
this repo uses. They are **not** obfuscated.

Do not resolve `@univerjs` from insider-npm or registry.npmjs.org.

```bash
# After cloning or after `pnpm install` rewrites node_modules:
pnpm deobfuscate:pro   # Pro overlay (OSS copies are already vendor/)
```

`package.json` `file:` specifiers and `pnpm.overrides` pin both `@univerjs` and
`@univerjs-pro` to `vendor/`. `postinstall` runs the Pro deobfuscator so an
install cannot forget the overlay.

Never patch the pnpm store. Never vendor `umd/` (unused).
