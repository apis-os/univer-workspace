import type { LocaleLeafKeys } from '@univerjs/core';
import type enUS from './en-US';
export type LocaleKey = LocaleLeafKeys<typeof enUS>;
type LocaleKeySuffix<TKey, TPrefix extends string> = TKey extends `${TPrefix}${infer TSuffix}` ? TSuffix : never;
export type ChartLocaleKeySuffix = LocaleKeySuffix<LocaleKey, 'bases-dashboard-ui.chart.'>;
export type DashboardInspectorLocaleKeySuffix = LocaleKeySuffix<LocaleKey, 'bases-dashboard-ui.dashboardInspector.'>;
export {};
