import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DEP_FIELDS = ["dependencies", "devDependencies", "peerDependencies", "optionalDependencies"];
const LOCAL_UNIVERJS = /^@univerjs\/univer-workspace/;

function isFrozenScope(name) {
  return (
    (name.startsWith("@univerjs/") && !LOCAL_UNIVERJS.test(name)) ||
    name.startsWith("@univerjs-pro/") ||
    name.startsWith("@univer-cli/")
  );
}

function vendorDirFor(name) {
  if (name.startsWith("@univerjs-pro/")) {
    return path.join(ROOT, "vendor/univer-pro", name.slice("@univerjs-pro/".length));
  }
  if (name.startsWith("@univer-cli/")) {
    return path.join(ROOT, "vendor/univer-cli", name.slice("@univer-cli/".length));
  }
  return path.join(ROOT, "vendor/univer", name.slice("@univerjs/".length));
}

function isFileVendorSpecifier(specifier) {
  return (
    typeof specifier === "string" &&
    (specifier.startsWith("file:") || specifier.startsWith("link:")) &&
    /vendor\/univer(-pro|-cli)?\//.test(specifier)
  );
}

function workspacePackageJsons(dir = ROOT, out = []) {
  if (!existsSync(dir)) return out;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (
      entry.name === "node_modules" ||
      entry.name === "vendor" ||
      entry.name === ".git" ||
      entry.name === ".cache" ||
      entry.name === ".wrangler" ||
      entry.name === "dist" ||
      entry.name === "coverage"
    ) {
      continue;
    }
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) workspacePackageJsons(full, out);
    else if (entry.name === "package.json" && dir !== ROOT) out.push(full);
  }
  return out;
}

test("workspace @univerjs, @univerjs-pro, and @univer-cli deps are file: vendor specifiers", () => {
  const rootManifest = JSON.parse(readFileSync(path.join(ROOT, "package.json"), "utf8"));
  assert.match(String(rootManifest.scripts?.postinstall ?? ""), /deobfuscate-univer-pro/);

  const failures = [];
  for (const file of [path.join(ROOT, "package.json"), ...workspacePackageJsons()]) {
    const manifest = JSON.parse(readFileSync(file, "utf8"));
    for (const field of DEP_FIELDS) {
      for (const [name, specifier] of Object.entries(manifest[field] ?? {})) {
        if (!isFrozenScope(name)) continue;
        if (!isFileVendorSpecifier(specifier)) {
          failures.push(`${path.relative(ROOT, file)} ${field} ${name} = ${specifier}`);
        }
      }
    }
  }
  assert.equal(failures.length, 0, failures.join("\n"));
});

test("pnpm.overrides pin frozen Univer scopes to vendor", () => {
  const workspace = readFileSync(path.join(ROOT, "pnpm-workspace.yaml"), "utf8");
  assert.match(workspace, /['"]@univerjs\/core['"]\s*:\s*['"]file:vendor\/univer\/core['"]/);
  assert.match(
    workspace,
    /['"]@univerjs-pro\/license['"]\s*:\s*['"]file:vendor\/univer-pro\/license['"]/
  );
  assert.match(
    workspace,
    /['"]@univer-cli\/config['"]\s*:\s*['"]file:vendor\/univer-cli\/config['"]/
  );
});

test("lockfile importers and snapshots do not resolve frozen scopes from npm registries", () => {
  const lock = readFileSync(path.join(ROOT, "pnpm-lock.yaml"), "utf8");
  const importerHits = [];
  const importerBlock = lock.split("\npackages:\n")[0] ?? lock;
  const depRe =
    /^(\s*)('(?:@(?:univerjs(?:-pro)?|univer-cli)\/[^']+)'|(?:@(?:univerjs(?:-pro)?|univer-cli)\/[^\s:]+)):\n\s+specifier: ([^\n]+)\n\s+version: ([^\n]+)/gm;
  let match;
  while ((match = depRe.exec(importerBlock))) {
    const name = match[2].replaceAll("'", "");
    if (!isFrozenScope(name)) continue;
    const specifier = match[3].trim();
    const version = match[4].trim();
    if (!isFileVendorSpecifier(specifier) && !specifier.startsWith("file:") && !specifier.startsWith("link:")) {
      importerHits.push(`${name} specifier=${specifier} version=${version}`);
    }
  }
  assert.equal(importerHits.length, 0, `importers still on registry:\n${importerHits.join("\n")}`);

  const registryHits = [];
  for (const host of ["insider-npm-registry.univer.work", "registry.npmjs.org"]) {
    for (const scope of ["@univerjs/", "@univerjs-pro/", "@univer-cli/"]) {
      const needle = `https://${host}/${scope}`;
      if (lock.includes(needle)) registryHits.push(needle);
    }
  }
  assert.equal(
    registryHits.length,
    0,
    `lockfile still fetches Univer from a registry:\n${registryHits.join("\n")}`
  );
});

test(".npmrc does not send @univerjs, @univerjs-pro, or @univer-cli to insider-npm", () => {
  const npmrc = existsSync(path.join(ROOT, ".npmrc"))
    ? readFileSync(path.join(ROOT, ".npmrc"), "utf8")
    : "";
  assert.doesNotMatch(npmrc, /@univerjs:registry=/);
  assert.doesNotMatch(npmrc, /@univerjs-pro:registry=/);
  assert.doesNotMatch(npmrc, /@univer-cli:registry=/);
});

test("OSS @univerjs/core is vendored locally", () => {
  const dir = vendorDirFor("@univerjs/core");
  assert.ok(existsSync(path.join(dir, "package.json")), "vendor/univer/core");
  const manifest = JSON.parse(readFileSync(path.join(dir, "package.json"), "utf8"));
  assert.equal(manifest.name, "@univerjs/core");
});

test("@univer-cli/config is vendored locally", () => {
  const dir = vendorDirFor("@univer-cli/config");
  assert.ok(existsSync(path.join(dir, "package.json")), "vendor/univer-cli/config");
  const manifest = JSON.parse(readFileSync(path.join(dir, "package.json"), "utf8"));
  assert.equal(manifest.name, "@univer-cli/config");
});
