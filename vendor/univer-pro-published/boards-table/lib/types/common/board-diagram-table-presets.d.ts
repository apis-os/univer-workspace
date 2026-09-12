import type { IBoardThemeData } from '@univerjs-pro/boards';
import type { ISlideTableSnapshot } from '@univerjs-pro/slides-table';
export declare enum BoardDiagramTablePreset {
    /** UML class box with name, attributes, and operations sections. */
    UMLClass = "uml-class",
    /** UML interface box with stereotype, name, and operations sections. */
    UMLInterface = "uml-interface",
    /** UML sequence-diagram frame with one labeled content region. */
    UMLSequenceFragment = "uml-sequence-fragment",
    /** UML sequence-diagram alternative frame with multiple guarded regions. */
    UMLSequenceAlternativeFragment = "uml-sequence-alternative-fragment",
    /** Compact ER entity box containing an entity name. */
    ERDEntity = "erd-entity",
    /** ER field row with a dedicated primary/foreign key column. */
    ERDKeyField = "erd-key-field",
    /** ER field row with separate field-name and data-type columns. */
    ERDFieldType = "erd-field-type",
    /** Full ER entity table with name, key, field, and data-type columns. */
    ERDFull = "erd-full"
}
export interface IBuildBoardDiagramTablePresetOptions {
    id: string;
    preset: BoardDiagramTablePreset;
    themeData?: Partial<IBoardThemeData> & {
        colorScheme?: Record<string, string>;
    };
}
export interface IBoardDiagramTablePresetSize {
    width: number;
    height: number;
}
export interface IBoardDiagramTableCustom {
    boardDiagramTablePreset: BoardDiagramTablePreset;
    outerBorderRadius: number;
    outerBorderWidth: number;
    outerBorderColor: string;
    sequenceFrame?: {
        titleRow: number;
        titleColumn: number;
        notchWidth: number;
    };
    structuralControls?: {
        rows: boolean;
        columns: boolean;
    };
}
export declare function buildBoardDiagramTablePreset(options: IBuildBoardDiagramTablePresetOptions): ISlideTableSnapshot;
export declare function getBoardDiagramTablePresetSize(preset: BoardDiagramTablePreset): IBoardDiagramTablePresetSize;
export declare function isBoardDiagramTablePreset(value: unknown): value is BoardDiagramTablePreset;
export declare function isBoardDiagramERDTablePreset(value: unknown): value is BoardDiagramTablePreset;
export declare function applyBoardDiagramTableTheme(table: ISlideTableSnapshot, themeData?: Partial<IBoardThemeData> & {
    colorScheme?: Record<string, string>;
}): ISlideTableSnapshot;
