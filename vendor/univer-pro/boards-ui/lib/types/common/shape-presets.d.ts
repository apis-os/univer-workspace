import type { BoardConnectorRouting, BoardShapeType, IBoardConnectorStyle } from '@univerjs-pro/boards';
import type { ComponentType, CSSProperties } from 'react';
import type { IUniverBoardsUIConfig } from '../config/config';
import type { LocaleKey } from '../locale/types';
type BoardShapeIconComponent = ComponentType<{
    className?: string;
    style?: CSSProperties;
}>;
export type BoardShapeIcon = string | BoardShapeIconComponent;
interface IBoardShapeIconManager {
    get: (iconName: string) => BoardShapeIconComponent | undefined;
}
export declare enum BoardTableDiagramPreset {
    UMLClass = "uml-class",
    UMLInterface = "uml-interface",
    UMLSequenceFragment = "uml-sequence-fragment",
    UMLSequenceAlternativeFragment = "uml-sequence-alternative-fragment",
    ERDEntity = "erd-entity",
    ERDKeyField = "erd-key-field",
    ERDFieldType = "erd-field-type",
    ERDFull = "erd-full"
}
export interface IBoardShapePreset {
    labelKey: string;
    category?: string;
    categoryKey?: string;
    basicCategory?: string;
    basicCategoryKey?: string;
    shapeType?: BoardShapeType | string;
    connectorRouting?: BoardConnectorRouting;
    connectorStyle?: Partial<IBoardConnectorStyle>;
    tableDiagramPreset?: BoardTableDiagramPreset | string;
    rows?: number;
    columns?: number;
    width?: number;
    height?: number;
    icon: BoardShapeIcon;
}
export declare function resolveBoardShapePresetInsertSize(preset: IBoardShapePreset): {
    width?: number;
    height?: number;
} | undefined;
export declare function resolveBoardShapePresetIcon(iconManager: IBoardShapeIconManager, icon: BoardShapeIcon): BoardShapeIconComponent | undefined;
export declare const BOARD_BASIC_SHAPE_CATEGORY_KEY: LocaleKey;
export declare const BOARD_SHAPE_PRESETS: IBoardShapePreset[];
export interface IResolvedBoardShapePresets {
    basicAllPresetGroups: IBoardShapePresetGroup[];
    basicPreviewPresets: IBoardShapePreset[];
    boardSpecificPresetGroups: IBoardShapePresetGroup[];
    commonPresets: IBoardShapePreset[];
    presetGroups: IBoardShapePresetGroup[];
    presets: IBoardShapePreset[];
}
export interface IBoardShapePresetGroup {
    category?: string;
    categoryKey?: string;
    presets: IBoardShapePreset[];
}
export declare function groupBoardShapePresets(presets: readonly IBoardShapePreset[]): IBoardShapePresetGroup[];
export declare function resolveBoardShapePresets(config?: Pick<IUniverBoardsUIConfig, 'shape'>): IResolvedBoardShapePresets;
export declare function collectBoardShapePresetLocaleKeys(config?: Pick<IUniverBoardsUIConfig, 'shape'>): string[];
export {};
