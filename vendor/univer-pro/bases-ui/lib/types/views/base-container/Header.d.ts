import type { IBaseConditionalColorRule, IGalleryProjection, IGanttProjection, IGridProjection, IKanbanProjection, IViewSnapshot } from '@univerjs/core';
import type { ReactNode } from 'react';
import type { IBaseToolbarPanelState } from '../../services/base-ui-state.types';
import type { IBaseWorkbenchContext } from './WorkbenchContext';
import { IBaseProjectionService } from '@univerjs-pro/bases';
import { IBaseUIStateService } from '../../services/base-ui-state.service';
export declare const BASE_TOOLBAR_EXTRA_ACTIONS = "bases-ui.toolbar.extra-actions";
export declare const BASE_TOOLBAR_BEFORE_EXTRA_ACTIONS = "bases-ui.toolbar.before-extra-actions";
interface IBaseHeaderMenuViewProps {
    context: IBaseWorkbenchContext | null;
    renderToolbarPanel?: (props: {
        context: IBaseWorkbenchContext;
        toolbarPanel: IBaseToolbarPanelState;
    }) => ReactNode;
    helpers: {
        countConfiguredFilters: (filter: IViewSnapshot['filter']) => number;
        countConfiguredGroups: (groups: IViewSnapshot['group']) => number;
        countConfiguredSorts: (sorts: IViewSnapshot['sort']) => number;
        createInitialDraftRecordValues: (context: IBaseWorkbenchContext, projectionService: IBaseProjectionService) => Record<string, unknown>;
        normalizeConditionalColoringConfig: (value: unknown) => IBaseConditionalColorRule[];
        resolveKanbanGroupFieldId: (context: IBaseWorkbenchContext) => string | null;
        scrollGalleryRecordIntoView: (context: IBaseWorkbenchContext, projection: IGalleryProjection, stateService: IBaseUIStateService, recordId: string) => void;
        scrollGanttRecordIntoView: (context: IBaseWorkbenchContext, projection: IGanttProjection, stateService: IBaseUIStateService, recordId: string) => void;
        scrollGridMatchIntoView: (context: IBaseWorkbenchContext, projection: IGridProjection, stateService: IBaseUIStateService, recordId: string, fieldId: string) => void;
        scrollKanbanRecordIntoView: (context: IBaseWorkbenchContext, projection: IKanbanProjection, stateService: IBaseUIStateService, recordId: string) => void;
    };
}
export declare function RenderBaseHeader(props?: {
    startInset?: boolean;
}): import("react").JSX.Element;
export declare function RenderBaseHeaderMenu(props?: {
    renderToolbarPanel?: IBaseHeaderMenuViewProps['renderToolbarPanel'];
}): import("react").JSX.Element | null;
export {};
