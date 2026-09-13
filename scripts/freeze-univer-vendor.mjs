#!/usr/bin/env node
/**
 * Copy installed @univerjs / @univerjs-pro / @univer-cli packages into vendor/
 * and rewrite workspace manifests + pnpm.overrides to file: specifiers.
 *
 * Does not decode Pro packages — run `pnpm deobfuscate:pro` after this.
 * Never copies umd/ or nested node_modules (no pnpm-store in-place edits).
 */
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PNPM = path.join(ROOT, "node_modules/.pnpm");
const VENDOR_OSS = path.join(ROOT, "vendor/univer");
const VENDOR_PRO = path.join(ROOT, "vendor/univer-pro");
const VENDOR_CLI = path.join(ROOT, "vendor/univer-cli");
const PUBLISHED = path.join(ROOT, "vendor/univer-pro-published");
const LOCAL_UNIVERJS = /^@univerjs\/univer-workspace/;
const DEP_FIELDS = [
  "dependencies",
  "devDependencies",
  "peerDependencies",
  "optionalDependencies"
];

function isNativeOrAssets(pkg) {
  return (
    pkg === "cli-assets" ||
    pkg.includes("binding") ||
    pkg.includes("darwin") ||
    pkg.includes("linux-") ||
    pkg.includes("win32")
  );
}

function copyFilter(src) {
  const normalized = src.replaceAll("\\", "/");
  if (normalized.endsWith("/umd") || normalized.includes("/umd/")) return false;
  const afterPkg = normalized.match(/\/node_modules\/@(?:univerjs(?:-pro)?|univer-cli)\/[^/]+\/(.*)$/);
  if (afterPkg && afterPkg[1].startsWith("node_modules")) return false;
  return true;
}

function listInstalled(scope) {
  if (!fs.existsSync(PNPM)) return new Map();
  const prefix = `${scope}+`;
  const found = new Map();
  for (const entry of fs.readdirSync(PNPM, { withFileTypes: true })) {
    if (!entry.isDirectory() || !entry.name.startsWith(prefix)) continue;
    const rest = entry.name.slice(prefix.length);
    const at = rest.indexOf("@");
    if (at < 0) continue;
    const pkg = rest.slice(0, at);
    const ver = rest.slice(at + 1);
    if (scope === "@univerjs" && pkg.startsWith("univer-workspace")) continue;
    const nested = path.join(PNPM, entry.name, "node_modules", scope, pkg);
    if (!fs.existsSync(nested)) continue;
    const prev = found.get(pkg);
    const score = ver.includes("20260907-70fc579") ? 2 : ver.startsWith("file+") ? 1 : 0;
    const prevScore = prev?.score ?? -1;
    if (score >= prevScore) found.set(pkg, { dir: nested, ver, score });
  }
  return found;
}

function copyTree(from, to) {
  fs.mkdirSync(path.dirname(to), { recursive: true });
  fs.rmSync(to, { recursive: true, force: true });
  fs.cpSync(from, to, {
    recursive: true,
    dereference: true,
    filter: copyFilter
  });
}

function discoverWorkspacePackages() {
  const result = spawnSync("pnpm", ["list", "-r", "--depth", "-1", "--json"], {
    cwd: ROOT,
    encoding: "utf8"
  });
  if (result.status !== 0) {
    throw new Error(`pnpm list failed: ${result.stderr}`);
  }
  return JSON.parse(result.stdout).map((entry) => ({
    dir: entry.path,
    manifestPath: path.join(entry.path, "package.json")
  }));
}

function vendorRootFor(scope) {
  if (scope === "@univerjs-pro") return VENDOR_PRO;
  if (scope === "@univer-cli") return VENDOR_CLI;
  return VENDOR_OSS;
}

function vendorFileSpecifier(fromDir, scope, pkg) {
  const abs = path.join(vendorRootFor(scope), pkg);
  const rel = path.relative(fromDir, abs);
  return `file:${rel.split(path.sep).join("/")}`;
}

function rewriteManifest(manifestPath) {
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  const fromDir = path.dirname(manifestPath);
  let changed = 0;
  for (const field of DEP_FIELDS) {
    const deps = manifest[field];
    if (!deps) continue;
    for (const [name, specifier] of Object.entries(deps)) {
      if (LOCAL_UNIVERJS.test(name)) continue;
      let scope;
      let pkg;
      if (name.startsWith("@univerjs-pro/")) {
        scope = "@univerjs-pro";
        pkg = name.slice("@univerjs-pro/".length);
      } else if (name.startsWith("@univer-cli/")) {
        scope = "@univer-cli";
        pkg = name.slice("@univer-cli/".length);
      } else if (name.startsWith("@univerjs/")) {
        scope = "@univerjs";
        pkg = name.slice("@univerjs/".length);
      } else continue;
      const next = vendorFileSpecifier(fromDir, scope, pkg);
      if (specifier !== next) {
        deps[name] = next;
        changed += 1;
      }
    }
  }
  if (changed > 0) {
    fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  }
  return changed;
}

function writeWorkspaceYamlOverrides(overrides) {
  const yamlPath = path.join(ROOT, "pnpm-workspace.yaml");
  let yaml = fs.readFileSync(yamlPath, "utf8");
  yaml = yaml.replace(/\n# Frozen Univer[\s\S]*$/m, "\n");
  yaml = yaml.replace(/\noverrides:\n(?:  .*\n)+/g, "\n");
  const lines = [
    "",
    "# Frozen Univer: pnpm 11+ reads overrides here, not package.json#pnpm.",
    "# Do not resolve @univerjs / @univerjs-pro / @univer-cli from insider-npm or registry.npmjs.org.",
    "overrides:"
  ];
  for (const [name, spec] of Object.entries(overrides).sort(([a], [b]) => a.localeCompare(b))) {
    lines.push(`  "${name}": "${spec}"`);
  }
  fs.writeFileSync(yamlPath, `${yaml.replace(/\s+$/, "")}\n${lines.join("\n")}\n`);
}

function writeRootOverrides(oss, pro, cli) {
  const pkgPath = path.join(ROOT, "package.json");
  const manifest = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
  const overrides = {};
  for (const pkg of oss.keys()) {
    overrides[`@univerjs/${pkg}`] = `file:vendor/univer/${pkg}`;
  }
  for (const pkg of pro.keys()) {
    overrides[`@univerjs-pro/${pkg}`] = `file:vendor/univer-pro/${pkg}`;
  }
  for (const pkg of cli.keys()) {
    overrides[`@univer-cli/${pkg}`] = `file:vendor/univer-cli/${pkg}`;
  }
  delete manifest.pnpm;
  const scripts = manifest.scripts ?? {};
  scripts.postinstall = "node scripts/deobfuscate-univer-pro.mjs";
  if (!scripts["test:vendor"]) {
    scripts["test:vendor"] =
      "node --test scripts/deobfuscate-univer-pro.test.mjs scripts/vendor-univer-freeze.test.mjs";
  }
  if (typeof scripts.test === "string" && !scripts.test.includes("test:vendor")) {
    scripts.test = scripts.test.replace(
      "pnpm test:sdk-dependencies && ",
      "pnpm test:sdk-dependencies && pnpm test:vendor && "
    );
  }
  manifest.scripts = scripts;
  fs.writeFileSync(pkgPath, `${JSON.stringify(manifest, null, 2)}\n`);
  writeWorkspaceYamlOverrides(overrides);
}

function writeNpmrc() {
  const npmrc = path.join(ROOT, ".npmrc");
  const lines = fs.existsSync(npmrc)
    ? fs.readFileSync(npmrc, "utf8").split(/\r?\n/)
    : [];
  const kept = lines.filter(
    (line) =>
      line.trim() !== "" &&
      !line.startsWith("@univerjs:registry=") &&
      !line.startsWith("@univerjs-pro:registry=") &&
      !line.startsWith("@univer-cli:registry=")
  );
  fs.writeFileSync(npmrc, kept.length ? `${kept.filter(Boolean).join("\n")}\n` : "");
}

function mergeCliOverrides(cli) {
  const yamlPath = path.join(ROOT, "pnpm-workspace.yaml");
  let yaml = fs.readFileSync(yamlPath, "utf8");
  yaml = yaml.replace(
    /# Do not resolve @univerjs \/ @univerjs-pro from insider-npm or registry\.npmjs\.org\./,
    "# Do not resolve @univerjs / @univerjs-pro / @univer-cli from insider-npm or registry.npmjs.org."
  );
  const additions = [];
  for (const pkg of [...cli.keys()].sort()) {
    const name = `@univer-cli/${pkg}`;
    const spec = `file:vendor/univer-cli/${pkg}`;
    const line = `  "${name}": "${spec}"`;
    if (yaml.includes(`"${name}":`)) continue;
    additions.push(line);
  }
  if (additions.length === 0) return;
  yaml = yaml.replace(/^(overrides:\n)/m, `$1${additions.join("\n")}\n`);
  fs.writeFileSync(yamlPath, `${yaml.replace(/\s+$/, "")}\n`);
}

function main() {
  const cliOnly = process.argv.includes("--cli");
  const oss = listInstalled("@univerjs");
  const pro = listInstalled("@univerjs-pro");
  const cli = listInstalled("@univer-cli");
  if (cli.size === 0) {
    throw new Error("Installed @univer-cli packages not found under node_modules/.pnpm");
  }
  if (!cliOnly && (oss.size === 0 || pro.size === 0)) {
    throw new Error("Installed Univer packages not found under node_modules/.pnpm");
  }

  if (!cliOnly) {
    fs.mkdirSync(VENDOR_OSS, { recursive: true });
    fs.mkdirSync(VENDOR_PRO, { recursive: true });
    fs.mkdirSync(PUBLISHED, { recursive: true });

    console.log(`Copying ${oss.size} @univerjs packages -> vendor/univer`);
    for (const [pkg, info] of oss) {
      copyTree(info.dir, path.join(VENDOR_OSS, pkg));
      console.log(`  @univerjs/${pkg}`);
    }

    console.log(`Snapshot + copy ${pro.size} @univerjs-pro packages`);
    for (const [pkg, info] of pro) {
      const published = path.join(PUBLISHED, pkg);
      if (!fs.existsSync(published)) {
        copyTree(info.dir, published);
        console.log(`  snapshot published ${pkg}`);
      }
      if (isNativeOrAssets(pkg) && !fs.existsSync(path.join(VENDOR_PRO, pkg))) {
        copyTree(info.dir, path.join(VENDOR_PRO, pkg));
        console.log(`  vendor native/assets ${pkg}`);
      }
    }
  }

  fs.mkdirSync(VENDOR_CLI, { recursive: true });
  console.log(`Copying ${cli.size} @univer-cli packages -> vendor/univer-cli`);
  for (const [pkg, info] of cli) {
    copyTree(info.dir, path.join(VENDOR_CLI, pkg));
    console.log(`  @univer-cli/${pkg}`);
  }

  let rewritten = 0;
  for (const { manifestPath } of discoverWorkspacePackages()) {
    rewritten += rewriteManifest(manifestPath);
  }
  if (cliOnly) {
    mergeCliOverrides(cli);
  } else {
    writeRootOverrides(oss, pro, cli);
  }
  writeNpmrc();
  console.log(`rewrote ${rewritten} dependency specifiers to file: vendor`);
}

export { copyFilter, isNativeOrAssets, listInstalled, vendorFileSpecifier };

if (process.argv[1] !== undefined && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main();
}
