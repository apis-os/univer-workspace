import { ApiReference } from "@univer-cli/api-reference";
import { Command } from "commander";
//#region src/index.d.ts
interface ApiReferenceCommandDependencies {
  readonly reference: ApiReference;
}
declare function createApiCommand(dependencies: ApiReferenceCommandDependencies): Command;
//#endregion
export { ApiReferenceCommandDependencies, createApiCommand };