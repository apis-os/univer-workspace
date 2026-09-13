export type { IUniverDocsHistoryConfig } from './config/config';
export { DOCS_HISTORY_PLUGIN_CONFIG_KEY } from './config/config';
export { UniverDocsHistoryPlugin } from './plugin';
export { DocsHistoryDiffService } from './services/docs-history-diff.service';
export { DocsUnitComparisonAdapter } from './services/docs-unit-comparison.adapter';
export type { DocHistoryChangeCategory, DocHistoryChangeKind, IDocHistoryAnchor, IDocHistoryChange, IDocHistoryDiff, IDocHistoryLocation, } from './types';
export { resolveDocHistoryAnchors } from './utils/doc-diff';
export { createDocHistoryDisplay } from './utils/history-display';
