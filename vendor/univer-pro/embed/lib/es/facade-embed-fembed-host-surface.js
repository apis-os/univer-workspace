import { CreateEmbedCommand, EMBED_CHILD_CREATE_OPTIONS, EmbedError, EmbedErrorCode, EmbedHostAdapterRegistryService, EmbedHostEntryEnum, EmbedModelService, EmbedReferencedUnitApiResolverRegistryService, EmbedReferencedUnitMaterializeService, IReferencedUnitManagerService, RemoveEmbedCommand, SetEmbedBoundsCommand, SetEmbedDisplayTargetCommand, SetEmbedSheetPlacementCommand, normalizeResourceRefLocator } from "@univerjs-pro/embed";
import { FBase, FEnum, FUniver } from "@univerjs/core/facade";
import { ICommandService, Inject, Injector, UniverInstanceType, generateRandomId } from "@univerjs/core";
const C = {
  DocBlock: EmbedHostEntryEnum.DocsCustomBlock,
  SheetTab: EmbedHostEntryEnum.SheetsSheetTab,
  SheetFloating: EmbedHostEntryEnum.SheetsFloatingObject,
  BaseTable: EmbedHostEntryEnum.BasesTableListBlock,
  SlidePage: EmbedHostEntryEnum.SlidesPageListBlock,
  SlideFloating: EmbedHostEntryEnum.SlidesFloatingObject,
  BoardFloating: EmbedHostEntryEnum.BoardsFloatingObject
};
export { C as FEmbedHostSurface };
