export declare enum BoardToolType {
    /** Select, move, resize, and edit existing elements. */
    Select = "select",
    /** Pan the Board viewport without changing content. */
    Drag = "drag",
    /** Insert a basic or custom vector shape. */
    Shape = "shape",
    /** Insert standalone editable text. */
    Text = "text",
    /** Insert a sticky-note shape. */
    Sticky = "sticky",
    /** Draw or connect line elements. */
    Line = "line",
    /** Insert a generic semantic container. */
    Container = "container",
    /** Insert a lane-based workflow container. */
    Swimlane = "swimlane",
    /** Insert an editable Board table. */
    Table = "table",
    /** Insert a chart through the registered Board chart adapter. */
    Chart = "chart",
    /** Draw a persistent Ink path. */
    Pen = "pen",
    /** Insert a structured mind map. */
    MindMap = "mind-map",
    /** Open the shape and diagram resource library. */
    Resources = "resources",
    /** Insert an image resource. */
    Image = "image",
    /** Open the external content import flow. */
    Import = "import"
}
