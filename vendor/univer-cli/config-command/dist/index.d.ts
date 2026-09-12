import { Config } from "@univer-cli/config";
import { Command } from "commander";
//#region src/index.d.ts
interface ConfigCommandDependencies {
  readonly config: Config;
}
declare function createConfigCommand(dependencies: ConfigCommandDependencies): Command;
//#endregion
export { ConfigCommandDependencies, createConfigCommand };