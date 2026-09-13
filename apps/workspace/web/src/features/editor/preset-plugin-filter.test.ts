import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import {
  isRegisterablePlugin,
  isSkippablePluginError,
  isSkippableRenderError,
  omitUnnamedPlugins,
  omitUnnamedPresetPlugins,
  withSafeUniverPluginRegistration,
  installNamelessPluginServiceGuard,
  installSafeSheetRenderGuard
} from "./preset-plugin-filter";

class NamedPlugin {
  static pluginName = "UNIVER_SHEETS_PLUGIN";
}

class NamelessStub {}

class ChartPlugin {
  static pluginName = "SHEET_CHART_PLUGIN";
}

class PivotUiPlugin {
  static pluginName = "SHEET_PIVOT_UI_PLUGIN";
}

class EmbedPlugin {
  static pluginName = "UNIVER_EMBED_PLUGIN";
}

class ShapeUiPlugin {
  static pluginName = "SHEET_SHAPE_UI_PLUGIN";
}

class PrintPlugin {
  static pluginName = "SHEET_PRINT_PLUGIN";
}

class ShapePlugin {
  static pluginName = "SHEET_SHAPE_PLUGIN";
}

describe("preset plugin filter", () => {
  it("drops nameless stubs and chart/pivot leftovers", () => {
    expect(isRegisterablePlugin(NamedPlugin)).toBe(true);
    expect(isRegisterablePlugin(NamelessStub)).toBe(false);
    expect(isRegisterablePlugin(ChartPlugin)).toBe(false);
    expect(isRegisterablePlugin(PivotUiPlugin)).toBe(false);
    expect(isRegisterablePlugin(EmbedPlugin)).toBe(false);
    expect(isRegisterablePlugin(ShapeUiPlugin)).toBe(false);
    expect(isRegisterablePlugin(PrintPlugin)).toBe(false);
    expect(isRegisterablePlugin(ShapePlugin)).toBe(true);

    const presets = omitUnnamedPresetPlugins([
      {
        plugins: [
          NamedPlugin,
          NamelessStub,
          [ChartPlugin, { license: "x" }],
          PivotUiPlugin,
          EmbedPlugin,
          ShapeUiPlugin,
          PrintPlugin,
          ShapePlugin
        ]
      }
    ]);
    expect(presets[0]?.plugins).toEqual([NamedPlugin, ShapePlugin]);
    expect(omitUnnamedPlugins([NamedPlugin, NamelessStub, ChartPlugin])).toEqual([
      NamedPlugin
    ]);
  });

  it("swallows PluginService auto-register of nameless stubs", () => {
    expect(isSkippablePluginError(new Error('[PluginService]: no plugin name for . Please assign a "pluginName" to your plugin.'))).toBe(true);
    expect(isSkippablePluginError(new Error("gl.getRuntimeScopedDependencies is not a function"))).toBe(true);
    expect(isSkippablePluginError(new Error("boom"))).toBe(false);

    const proto = {
      registerPlugin(this: unknown, plugin: { pluginName?: string }) {
        if (!plugin.pluginName) {
          throw new Error('[PluginService]: no plugin name for . Please assign a "pluginName" to your plugin.');
        }
        return this;
      }
    };
    const seen: string[] = [];
    withSafeUniverPluginRegistration(proto, () => {
      proto.registerPlugin({ pluginName: "UNIVER_SHEETS_PLUGIN" });
      seen.push("named");
      proto.registerPlugin({});
      seen.push("nameless");
    });
    expect(seen).toEqual(["named", "nameless"]);
  });

  it("guards PluginService auto-register of nameless dependents", () => {
    const proto = {
      _assertPluginValid(ctor: { pluginName?: string }) {
        if (!ctor.pluginName) throw new Error('[PluginService]: no plugin name for .');
        return ctor.pluginName;
      },
      _initPlugin(plugin: { pluginName?: string }) {
        if (!plugin.pluginName) throw new Error("gl.getRuntimeScopedDependencies is not a function");
        return { name: plugin.pluginName };
      }
    };
    const restore = installNamelessPluginServiceGuard(proto);
    expect(proto._assertPluginValid({})).toBeUndefined();
    expect(proto._assertPluginValid({ pluginName: "UNIVER_SHEETS_PLUGIN" })).toBe(
      "UNIVER_SHEETS_PLUGIN"
    );
    expect(proto._initPlugin({}).getPluginName()).toBe("skipped-pro-stub");
    expect(proto._initPlugin({ pluginName: "UNIVER_SHEETS_PLUGIN" })).toEqual({
      name: "UNIVER_SHEETS_PLUGIN"
    });
    restore();
    expect(() => proto._assertPluginValid({})).toThrow(/no plugin name/);
  });

  it("keeps later plugins running when one onReady throws", () => {
    const ran: number[] = [];
    const proto = {
      _runStage(plugins: Array<{ onReady?: () => void }>, stage: number) {
        for (const plugin of plugins) {
          if (stage === 1) plugin.onReady?.();
        }
      }
    };
    const restore = installNamelessPluginServiceGuard(proto);
    proto._runStage(
      [
        {
          onReady() {
            throw new Error('[redi]: Expect 1 dependency item(s) for id "i5" but get 0. Did you forget to register it?');
          }
        },
        {
          onReady() {
            ran.push(1);
          }
        }
      ],
      1
    );
    expect(ran).toEqual([1]);
    restore();
  });

  it("wires the filter into collaboration-editor before createUniver", () => {
    const src = readFileSync(
      join(dirname(fileURLToPath(import.meta.url)), "collaboration-editor.tsx"),
      "utf8"
    );
    expect(src).toMatch(/omitUnnamedPresetPlugins\(/);
    expect(src).toMatch(/omitUnnamedPlugins\(/);
    expect(src).toMatch(/installNamelessPluginServiceGuard\(/);
    expect(src).toMatch(/installSafeSheetRenderGuard\(\s*RenderUnit\.prototype\s*\)/);
    expect(src).not.toMatch(/installSafeSheetRenderGuard\(\s*RenderManagerService\.prototype/);
    expect(src).not.toMatch(/installSafeSheetRenderGuard\(\s*univer\.__getInjector/);
    expect(src).toMatch(/PluginService/);
  });

  it("treats empty Redi tokens from leftover Pro render modules as skippable", () => {
    const emptyRedi = new Error(
      '[redi]: Cannot find "" registered by any injector. It is the 2th param of "CQ".'
    );
    expect(isSkippableRenderError(emptyRedi)).toBe(true);
    expect(isSkippablePluginError(emptyRedi)).toBe(true);
    expect(isSkippableRenderError(new Error("CQ is not defined"))).toBe(false);
    expect(isSkippablePluginError(new Error("CQ is not defined"))).toBe(true);
  });

  it("keeps later sheet render modules when a pivot module has an empty Redi token", () => {
    const added: string[] = [];
    const proto = {
      addRenderDependencies(deps: Array<{ name: string }>) {
        for (const dep of deps) {
          if (dep.name === "pivot") {
            throw new Error(
              '[redi]: Cannot find "" registered by any injector. It is the 2th param of "CQ".'
            );
          }
          added.push(dep.name);
        }
      }
    };
    const restore = installSafeSheetRenderGuard(proto);
    proto.addRenderDependencies([
      { name: "skeleton" },
      { name: "pivot" },
      { name: "scroll" }
    ]);
    expect(added).toEqual(["skeleton", "scroll"]);
    const wrapped = proto.addRenderDependencies;
    restore();
    expect(proto.addRenderDependencies).not.toBe(wrapped);
    expect(() =>
      proto.addRenderDependencies([
        { name: "skeleton" },
        { name: "pivot" },
        { name: "scroll" }
      ])
    ).toThrow(/Cannot find "" registered/);
  });

  it("throws through non-skippable sheet render errors instead of skipping the module", () => {
    const proto = {
      addRenderDependencies() {
        throw new Error("SheetSkeleton is not defined");
      }
    };
    const restore = installSafeSheetRenderGuard(proto);
    expect(() => proto.addRenderDependencies([{ name: "skeleton" }])).toThrow(
      /SheetSkeleton is not defined/
    );
    restore();
  });

  it("forwards non-array render deps instead of silently no-op", () => {
    const seen: unknown[] = [];
    const proto = {
      addRenderDependencies(deps: unknown) {
        seen.push(deps);
      }
    };
    const restore = installSafeSheetRenderGuard(proto);
    const lone = { name: "skeleton" };
    proto.addRenderDependencies(lone);
    expect(seen).toEqual([lone]);
    restore();
  });

  it("rewires leftover collaboration-client-ui import aliases so _0x free vars cannot abort the sheet", () => {
    const src = readFileSync(
      join(
        dirname(fileURLToPath(import.meta.url)),
        "../../../../../../vendor/univer-pro/collaboration-client-ui/lib/es/index.js"
      ),
      "utf8"
    );
    expect(src).toMatch(/UniverCollaborationClientUIPlugin/);
    expect(src).not.toMatch(/\b_0x[0-9a-fA-F]+\b/);
    expect(src).toMatch(
      /CollaborationStatus as v6,CollaborationUIEventId as v7/
    );
    expect(src).toMatch(/v6\.CONFLICT/);
    expect(src).toMatch(/v7\.CONFLICT/);
  });

  it("skips leftover pivot CQ registerRenderModule so _createRender never sees it", () => {
    const src = readFileSync(
      join(
        dirname(fileURLToPath(import.meta.url)),
        "../../../../../../vendor/univer-pro/sheets-pivot-ui/lib/es/index.js"
      ),
      "utf8"
    );
    const defStart = src.lastIndexOf("_registerRenderModules(){");
    expect(defStart).toBeGreaterThan(-1);
    const defEnd = src.indexOf("_initRegisterCommand", defStart);
    const method = src.slice(defStart, defEnd);
    expect(method).toMatch(/_registerRenderModules\(\)\{/);
    expect(method).not.toMatch(/\["registerRenderModule"\]|\.registerRenderModule\s*\(/);
  });

  it("keeps later render deps when RenderManagerService._tryAddRenderDependencies throws", () => {
    const added: string[] = [];
    const proto = {
      _tryAddRenderDependencies(_renderer: unknown, deps: Array<{ name: string }>) {
        for (const dep of deps) {
          if (dep.name === "pivot") {
            throw new Error(
              '[redi]: Cannot find "" registered by any injector. It is the 2th param of "CQ".'
            );
          }
          added.push(dep.name);
        }
      }
    };
    const restore = installSafeSheetRenderGuard(proto);
    proto._tryAddRenderDependencies(null, [
      { name: "skeleton" },
      { name: "pivot" },
      { name: "scroll" }
    ]);
    expect(added).toEqual(["skeleton", "scroll"]);
    restore();
  });
});
