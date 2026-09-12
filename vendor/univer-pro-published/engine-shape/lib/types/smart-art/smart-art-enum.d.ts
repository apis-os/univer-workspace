export declare enum SmartArtCategoryEnum {
    All = "all",
    List = "list",
    Process = "process",
    Cycle = "cycle",
    Hierarchy = "hierarchy",
    Relationship = "relationship",
    Matrix = "matrix",
    Pyramid = "pyramid",
    Picture = "picture",
    Timeline = "timeline",
    Team = "team",
    TextCard = "textCard"
}
export declare function parseSmartArtCategory(value: string): SmartArtCategoryEnum | undefined;
export declare enum SmartArtDirectionEnum {
    LeftToRight = "leftToRight",
    RightToLeft = "rightToLeft"
}
export declare enum SmartArtNodeRoleEnum {
    Content = "content",
    Assistant = "assistant"
}
export declare enum SmartArtTextFontSizeModeEnum {
    Auto = "auto",
    Manual = "manual"
}
export declare enum SmartArtPresentationShapeRoleEnum {
    Node = "node",
    Connector = "connector",
    Background = "background",
    Decoration = "decoration",
    Image = "image",
    Text = "text"
}
export declare enum SmartArtPresentationTextSourceEnum {
    DataNode = "dataNode",
    Presentation = "presentation"
}
export declare enum SmartArtTopologyPointKindEnum {
    Document = "document",
    Content = "content",
    Assistant = "assistant",
    ParentTransition = "parentTransition",
    SiblingTransition = "siblingTransition",
    Presentation = "presentation"
}
export declare enum SmartArtDefinitionScopeEnum {
    Diagram = "diagram",
    DiagramDrawing = "diagramDrawing",
    Drawing = "drawing",
    Relationships = "relationships"
}
export declare enum SmartArtInsertPositionEnum {
    Before = "before",
    After = "after",
    Above = "above",
    Below = "below",
    Assistant = "assistant"
}
