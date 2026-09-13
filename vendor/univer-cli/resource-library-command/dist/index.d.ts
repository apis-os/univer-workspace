import { ResourceLibrary } from "@univer-cli/resource-library";
import { Command } from "commander";
//#region src/index.d.ts
interface ResourceLibraryCommandDependencies {
  readonly openLibrary: () => ResourceLibrary;
}
declare function createResourcesCommand(dependencies: ResourceLibraryCommandDependencies): Command;
//#endregion
export { ResourceLibraryCommandDependencies, createResourcesCommand };