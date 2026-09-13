import type { IMenuItem, IMenuSchema } from '@univerjs/ui';
import type { IEmbedFloatingMenuContribution } from '../../types/embed-ui';
import type { IResolvedSheetsFloatingToolbarMenuItems } from './SheetEmbedFloatingMenuControls';
export type SheetFloatingToolbarItem = {
    id: string;
    type: 'button' | 'dropdown';
} | {
    id: string;
    type: 'divider';
};
export declare function createSheetsFloatingToolbarItems(): SheetFloatingToolbarItem[];
export declare function resolveSheetsFloatingToolbarMenuItems(menuSchemas: IMenuSchema[]): IResolvedSheetsFloatingToolbarMenuItems;
export declare function createVisibleSheetsFloatingToolbarItems(resolved: IResolvedSheetsFloatingToolbarMenuItems): SheetFloatingToolbarItem[];
export declare function resolveMenuCommandRequest(item: IMenuItem | undefined, params?: object): {
    commandId: string;
    params?: object;
} | undefined;
export declare function createSheetsFloatingMenuContributions(): IEmbedFloatingMenuContribution[];
export declare function shouldUseSheetsFloatingMenuDomStage(_entry: string): boolean;
