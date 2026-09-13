import { HistoryGatewayService, HistoryUnitAdapterRegistryService, UnitComparisonAdapterRegistryService, UnitComparisonEntityType, UniverEditHistoryPlugin, alignComparisonIdentities, arrayComparisonEntries, asRecord, buildSemanticComparisonItems, recordComparisonEntries, resourceComparisonEntries, withoutComparisonKeys } from "@univerjs-pro/edit-history";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { BlockType, BooleanNumber, ColorKit, DependentOn, Disposable, IAuthzIoService, IConfigService, IUniverInstanceService, Inject, Injector, Plugin, TextDecoration, TextX, TextXActionType, Tools, UniverInstanceType, merge, registerDependencies } from "@univerjs/core";
import { DocSelectionManagerService, RichTextEditingMutation, UniverDocsPlugin } from "@univerjs/docs";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { ITransformService, RevertRevisionMutation, isTransformMutationsSuccess, parseProtocolChangeset } from "@univerjs-pro/collaboration";
const ve = "docs-history.config",
  ye = {};
export { ve as DOCS_HISTORY_PLUGIN_CONFIG_KEY };
export { ye };
