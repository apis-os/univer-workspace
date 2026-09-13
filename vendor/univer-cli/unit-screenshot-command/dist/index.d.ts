import { UnitScreenshot, UnitScreenshotResult } from "@univer-cli/unit-screenshot";
import { UniverRenderBrowserInstallation, UniverRenderBrowserResolution, UniverRenderUnit } from "@univer-cli/univer-render-runtime";
import { Command } from "commander";
//#region src/browser-setup.d.ts
interface UniverRenderBrowserSetupCommandDependencies {
  readonly install: () => Promise<UniverRenderBrowserInstallation>;
  readonly probe: (input: {
    readonly executablePath: string;
  }) => Promise<void>;
  readonly resolve: () => Promise<UniverRenderBrowserResolution>;
}
type UniverRenderBrowserSetupResult = {
  readonly executablePath: string;
  readonly source: "explicit" | "env" | "cache" | "system";
  readonly status: "resolved";
} | ({
  readonly status: "installed";
} & UniverRenderBrowserInstallation);
declare function createUniverRenderBrowserSetupCommand(dependencies?: UniverRenderBrowserSetupCommandDependencies): Command;
//#endregion
//#region src/index.d.ts
interface UnitScreenshotCommandDependencies {
  readonly browserSetup?: UniverRenderBrowserSetupCommandDependencies;
  readonly loadUnit: (input: {
    readonly unitId?: string;
  }) => Promise<UniverRenderUnit>;
  readonly screenshot: UnitScreenshot;
  readonly writeImages: (input: UnitScreenshotWriteInput) => Promise<readonly UnitScreenshotWrittenImage[]>;
}
interface UnitScreenshotWriteInput {
  readonly destination?: string;
  readonly result: UnitScreenshotResult;
}
interface UnitScreenshotWrittenImage {
  readonly location: string;
  readonly name: string;
}
declare class UnitScreenshotCommandInputError extends Error {
  constructor(message: string);
}
declare function createUnitScreenshotCommand(dependencies: UnitScreenshotCommandDependencies): Command;
//#endregion
export { UnitScreenshotCommandDependencies, UnitScreenshotCommandInputError, UnitScreenshotWriteInput, UnitScreenshotWrittenImage, type UniverRenderBrowserSetupCommandDependencies, type UniverRenderBrowserSetupResult, createUnitScreenshotCommand, createUniverRenderBrowserSetupCommand };