import type { IBaseDashboardLayout } from '@univerjs-pro/bases-dashboard';
export declare const DASHBOARD_EDGE_SCROLL_THRESHOLD = 56;
export declare const DASHBOARD_EDGE_SCROLL_MAX_SPEED = 22;
export type DashboardResizeDirection = 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w' | 'nw';
export declare function resizeDashboardLayout(layout: IBaseDashboardLayout, direction: DashboardResizeDirection, columnDelta: number, rowDelta: number): IBaseDashboardLayout;
export declare function normalizeDashboardLayout(layout: IBaseDashboardLayout): IBaseDashboardLayout;
export declare function resolveDashboardLayouts(layouts: ReadonlyMap<string, IBaseDashboardLayout>, activeId: string, activeLayout: IBaseDashboardLayout): Map<string, IBaseDashboardLayout>;
export declare function getDashboardEdgeScrollDelta(pointerY: number, top: number, bottom: number, threshold?: number, maxSpeed?: number): number;
