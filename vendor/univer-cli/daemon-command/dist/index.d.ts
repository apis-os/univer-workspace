import { DaemonControl } from "@univer-cli/daemon";
import { Command } from "commander";
//#region src/index.d.ts
interface DaemonCommandDependencies {
  readonly control: DaemonControl;
}
declare function createDaemonCommand(dependencies: DaemonCommandDependencies): Command;
//#endregion
export { DaemonCommandDependencies, createDaemonCommand };