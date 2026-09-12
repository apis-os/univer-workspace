import { ShapeTypeEnum } from '@univerjs-pro/engine-shape';
export type ShapeLocaleKey = `shape.${string}`;
export declare enum ShapeGroupEnum {
    Line = "line",
    Rectangle = "rectangle",
    BasicShape = "basicShape",
    BlockArrow = "blockArrow",
    EquationShape = "equationShape",
    Flowchart = "flowchart",
    StarAndBanner = "starAndBanner",
    Callout = "callout",
    Other = "other"
}
export declare const shapeTypeOptions: Array<{
    group: ShapeGroupEnum;
    type: ShapeTypeEnum;
    icon: string;
    name: ShapeLocaleKey;
    endArrow?: boolean;
    startArrow?: boolean;
    horizontal?: boolean;
    vertical?: boolean;
}>;
export type ShapeTypeOption = typeof shapeTypeOptions[number];
export declare function groupShapeOptions(options?: readonly ShapeTypeOption[], excludeGroups?: readonly ShapeGroupEnum[]): Partial<Record<ShapeGroupEnum, ShapeTypeOption[]>>;
