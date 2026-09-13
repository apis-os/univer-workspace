import type { BaseCellValue, IBaseRect, IDisposable, IProjectedField } from '@univerjs/core';
import type { ComponentType } from 'react';
import type { CanvasDrawCommand } from '../render/canvas-draw-command';
import type { IBaseResolvedRecordLink } from '../services/base-record-link-resolver.service';
import { BaseFieldType } from '@univerjs/core';
export interface IFieldCellRenderContext<TValue extends BaseCellValue = BaseCellValue, TConfig = unknown> {
    value: TValue | null;
    config: TConfig;
    commands?: CanvasDrawCommand[];
    field?: IProjectedField;
    rect?: IBaseRect;
    selected?: boolean;
    hovered?: boolean;
    linkActionHovered?: boolean;
    selectOptionRemoveHoverValue?: string | null;
    selectDropdownCenterY?: number;
    recordLinks?: readonly IBaseResolvedRecordLink[];
}
export interface IFieldCardRenderContext<TValue extends BaseCellValue = BaseCellValue, TConfig = unknown> extends IFieldCellRenderContext<TValue, TConfig> {
}
export interface IFieldEditor<TValue extends BaseCellValue = BaseCellValue> extends IDisposable {
    readonly fieldType: string;
    getValue(): TValue | null;
    setValue(value: unknown): void;
    commit(): void;
    cancel(): void;
}
export interface IFieldEditorContext<TValue extends BaseCellValue = BaseCellValue, TConfig = unknown> extends IFieldCellRenderContext<TValue, TConfig> {
    commit(value: TValue | null): void;
}
export interface IFieldConfigPanelContext<TConfig = unknown> {
    config: TConfig;
    update(config: TConfig): void;
}
export interface IFieldUIPlugin<TValue extends BaseCellValue = BaseCellValue, TConfig = unknown> {
    type: BaseFieldType;
    icon: ComponentType;
    renderCell(ctx: IFieldCellRenderContext<TValue, TConfig>): void;
    renderCardItem(ctx: IFieldCardRenderContext<TValue, TConfig>): void;
    renderGanttCell(ctx: IFieldCellRenderContext<TValue, TConfig>): void;
    createEditor(ctx: IFieldEditorContext<TValue, TConfig>): IFieldEditor<TValue>;
    createConfigPanel(ctx: IFieldConfigPanelContext<TConfig>): ComponentType;
}
export declare const BASE_SELECT_CELL_MAX_EXPANDED_HEIGHT = 120;
export interface IBaseProgressCellLayout {
    trackX: number;
    trackY: number;
    trackWidth: number;
    trackHeight: number;
    fillWidth: number;
    labelX: number;
    labelWidth: number;
    label: string;
    rawValue: number;
    start: number;
    end: number;
}
export interface IBaseProgressCellLayoutOptions {
    maxTrackWidth?: number;
    maxLabelWidth?: number;
    minLabelWidth?: number;
}
export declare const BASE_FIELD_UI_TYPES: BaseFieldType[];
export declare function createCoreFieldUIPlugins(): IFieldUIPlugin[];
export declare function createFieldUIPlugin(type: BaseFieldType): IFieldUIPlugin;
export declare function getBaseLinkTextWidth(text: string): number;
export declare function getBaseProgressCellLayout(value: unknown, config: unknown, rect: IBaseRect, options?: IBaseProgressCellLayoutOptions): IBaseProgressCellLayout;
export declare function getBaseRecordLinkChipWidth(label: string): number;
export declare function getBaseRecordLinkResolutionLimit(availableWidth: number): number;
