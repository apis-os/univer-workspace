import type { IBaseDashboardTextAppearance, IBaseDashboardTextWidget } from '@univerjs-pro/bases-dashboard';
import type { IDocumentData } from '@univerjs/core';
export declare const DASHBOARD_TEXT_DEFAULT_APPEARANCE: {
    readonly alignment: "left";
    readonly fontSize: 18;
    readonly fontSizeMode: "auto";
};
export type ResolvedDashboardTextAppearance = Required<Pick<IBaseDashboardTextAppearance, 'alignment' | 'fontSize' | 'fontSizeMode'>> & Pick<IBaseDashboardTextAppearance, 'backgroundColor' | 'textColor'>;
export declare function resolveDashboardTextAppearance(widget: IBaseDashboardTextWidget): ResolvedDashboardTextAppearance;
export declare function getDashboardTextDocumentText(document: IDocumentData): string;
export declare function updateDashboardTextDocument(document: IDocumentData, text: string): IDocumentData;
