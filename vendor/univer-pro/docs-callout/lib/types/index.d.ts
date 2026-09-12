export { RemoveDocsCalloutConfigMutation, SetDocsCalloutConfigMutation } from './commands/callout-config.mutation';
export { DocsCalloutCancelEmptyParagraphCommand, DocsCalloutConsumeBoundaryDeleteCommand, DocsCalloutDeleteCommand, DocsCalloutInsertBelowCommand, DocsCalloutInsertCommand, DocsCalloutResetColorsCommand, DocsCalloutSetTextColorCommand, DocsCalloutUnwrapCommand, DocsCalloutUpdateCommand, } from './commands/callout.command';
export type { IDocsCalloutDeleteCommandParams, IDocsCalloutInsertCommandParams, IDocsCalloutSetTextColorCommandParams, IDocsCalloutUnwrapCommandParams, IDocsCalloutUpdateCommandParams, } from './commands/callout.command';
export { buildCancelEmptyCalloutParagraphActions, isCalloutBoundaryDelete, } from './common/actions';
export { DOCS_CALLOUT_BACKGROUND_COLOR_TOKEN, DOCS_CALLOUT_BORDER_COLOR_TOKEN, DOCS_CALLOUT_PLUGIN } from './common/const';
export { DEFAULT_CALLOUT_CONFIG, normalizeDocsCalloutConfig, normalizeDocsCalloutMetadataResource, } from './common/metadata';
export type { IDocsCalloutConfig, IDocsCalloutMetadataResource } from './common/type';
export { DocsCalloutModel } from './models/docs-callout-model';
export { UniverDocsCalloutPlugin } from './plugin';
