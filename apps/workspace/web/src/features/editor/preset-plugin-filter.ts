import type { IPreset, IPresetPlugin } from "@univerjs/presets";

const OPTIONAL_BROKEN_PRO = /CHART|PIVOT|EMBED|SHAPE_UI|SHAPE_EDITOR|PRINT|SPARKLINE/i;

export function pluginConstructor(spec: unknown): unknown {
  return Array.isArray(spec) ? spec[0] : spec;
}

export function isRegisterablePlugin(ctor: unknown): boolean {
  if (ctor == null || (typeof ctor !== "function" && typeof ctor !== "object")) {
    return false;
  }
  const name = (ctor as { pluginName?: unknown }).pluginName;
  if (typeof name !== "string" || !name.trim()) return false;
  if (OPTIONAL_BROKEN_PRO.test(name)) return false;
  return true;
}

export function omitUnnamedPresetPlugins(presets: IPreset[]): IPreset[] {
  return presets.map((preset) => ({
    ...preset,
    plugins: (preset.plugins ?? []).filter((spec) =>
      isRegisterablePlugin(pluginConstructor(spec))
    )
  }));
}

export function omitUnnamedPlugins(plugins: IPresetPlugin[]): IPresetPlugin[] {
  return plugins.filter((spec) => isRegisterablePlugin(pluginConstructor(spec)));
}

export function isSkippablePluginError(reason: unknown): boolean {
  const message = reason instanceof Error ? reason.message : String(reason ?? "");
  return /no plugin name|getRuntimeScopedDependencies is not a function|is not defined|Did you forget to register|Cannot find "" registered/i.test(
    message
  );
}

type UniverPrototype = {
  registerPlugin: (plugin: unknown, config?: unknown) => unknown;
};

export function withSafeUniverPluginRegistration<T>(
  univerPrototype: UniverPrototype,
  run: () => T
): T {
  const original = univerPrototype.registerPlugin;
  univerPrototype.registerPlugin = function (this: unknown, plugin: unknown, config?: unknown) {
    if (!isRegisterablePlugin(plugin)) return this;
    try {
      return original.call(this, plugin, config);
    } catch (err) {
      if (isSkippablePluginError(err)) return this;
      throw err;
    }
  };
  try {
    return run();
  } finally {
    univerPrototype.registerPlugin = original;
  }
}

function noopPlugin() {
  return {
    onStarting() {},
    onReady() {},
    onRendered() {},
    onSteady() {},
    getPluginName() {
      return "skipped-pro-stub";
    },
    dispose() {}
  };
}

type PluginServicePrototype = {
  _assertPluginValid?: (ctor: unknown) => unknown;
  _initPlugin?: (plugin: unknown, options?: unknown) => unknown;
  _runStage?: (plugins: unknown, stage: unknown) => unknown;
};

export function installNamelessPluginServiceGuard(
  pluginServicePrototype: PluginServicePrototype
): () => void {
  const origAssert = pluginServicePrototype._assertPluginValid;
  const origInit = pluginServicePrototype._initPlugin;
  const origRun = pluginServicePrototype._runStage;
  pluginServicePrototype._assertPluginValid = function (this: unknown, ctor: unknown) {
    if (!isRegisterablePlugin(ctor)) return;
    return origAssert?.call(this, ctor);
  };
  pluginServicePrototype._initPlugin = function (this: unknown, plugin: unknown, options?: unknown) {
    if (!isRegisterablePlugin(plugin)) return noopPlugin();
    try {
      return origInit?.call(this, plugin, options);
    } catch (err) {
      if (isSkippablePluginError(err)) return noopPlugin();
      throw err;
    }
  };
  pluginServicePrototype._runStage = function (this: unknown, plugins: unknown, stage: unknown) {
    const list = Array.isArray(plugins) ? plugins : [];
    for (const plugin of list) {
      try {
        origRun?.call(this, [plugin], stage);
      } catch (err) {
        if (isSkippablePluginError(err)) continue;
        throw err;
      }
    }
  };
  return () => {
    pluginServicePrototype._assertPluginValid = origAssert;
    pluginServicePrototype._initPlugin = origInit;
    pluginServicePrototype._runStage = origRun;
  };
}
