//#region src/types.d.ts
type ConfigPrimitive = string | number | boolean | null;
type ConfigValue = ConfigPrimitive | readonly ConfigValue[] | {
  readonly [key: string]: ConfigValue;
};
interface ConfigCodec<Value extends ConfigValue = ConfigValue> {
  readonly parse: (value: unknown) => Value;
  readonly parseText: (text: string) => Value;
}
interface ConfigDefinition<Value extends ConfigValue = ConfigValue> {
  readonly codec: ConfigCodec<Value>;
  readonly defaultValue?: Value;
  readonly description: string;
}
type ConfigDefinitions = Readonly<Record<string, ConfigDefinition>>;
interface ConfigEntryBase {
  readonly description: string;
  readonly key: string;
}
type ConfigEntry = (ConfigEntryBase & {
  readonly defaultValue?: ConfigValue;
  readonly source: "config";
  readonly value: ConfigValue;
}) | (ConfigEntryBase & {
  readonly defaultValue: ConfigValue;
  readonly source: "default";
  readonly value: ConfigValue;
}) | (ConfigEntryBase & {
  readonly source: "unset";
});
interface Config {
  readonly path: string;
  get(input: {
    readonly key: string;
  }): Promise<ConfigEntry>;
  list(): Promise<readonly ConfigEntry[]>;
  set(input: {
    readonly key: string;
    readonly value: unknown;
  }): Promise<ConfigEntry>;
  setFromText(input: {
    readonly key: string;
    readonly text: string;
  }): Promise<ConfigEntry>;
  unset(input: {
    readonly key: string;
  }): Promise<ConfigEntry>;
}
interface CreateFileConfigOptions {
  readonly definitions: ConfigDefinitions;
  readonly path: string;
}
//#endregion
//#region src/codecs.d.ts
interface IntegerCodecOptions {
  readonly maximum?: number;
  readonly minimum?: number;
}
declare const configCodecs: {
  readonly nonEmptyString: () => ConfigCodec<string>;
  readonly boolean: () => ConfigCodec<boolean>;
  readonly integer: (options?: IntegerCodecOptions) => ConfigCodec<number>;
  readonly enumeration: <const Values extends readonly [string, ...string[]]>(values: Values) => ConfigCodec<Values[number]>;
  readonly httpUrl: () => ConfigCodec<string>;
  readonly httpOrigin: () => ConfigCodec<string>;
};
//#endregion
//#region src/definitions.d.ts
declare function defineConfig<const Definitions extends ConfigDefinitions>(definitions: Definitions): Definitions;
//#endregion
//#region src/errors.d.ts
type ConfigErrorCode = "CONFIG_INVALID_DEFINITION" | "CONFIG_UNKNOWN_KEY" | "CONFIG_INVALID_VALUE" | "CONFIG_INVALID_DOCUMENT" | "CONFIG_READ_FAILED" | "CONFIG_WRITE_FAILED";
declare class ConfigError extends Error {
  readonly code: ConfigErrorCode;
  readonly details: Readonly<Record<string, ConfigValue>>;
  constructor(code: ConfigErrorCode, message: string, details?: Readonly<Record<string, ConfigValue>>, options?: ErrorOptions);
}
//#endregion
//#region src/file-config.d.ts
declare function createFileConfig(options: CreateFileConfigOptions): Config;
//#endregion
export { type Config, type ConfigCodec, type ConfigDefinition, type ConfigDefinitions, type ConfigEntry, ConfigError, type ConfigErrorCode, type ConfigPrimitive, type ConfigValue, type CreateFileConfigOptions, type IntegerCodecOptions, configCodecs, createFileConfig, defineConfig };