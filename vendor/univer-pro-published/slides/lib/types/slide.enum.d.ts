export declare enum PlaceholderTypeEnum {
    /**
     * Slide title placeholder. This is the default placeholder type for a slide. It is used to hold the title of the slide.
     */
    Title = "title",
    /**
     * Slide centered title placeholder.
     */
    CenterTitle = "centerTitle",
    /**
     * Slide subtitle placeholder. This is used to hold the subtitle of the slide.
     */
    Subtitle = "subtitle",
    /**
     * Slide body placeholder. This is used to hold the main content of the slide, such as text, images, charts, tables, etc.
     */
    Body = "body",
    /**
     * Generic text placeholder.
     */
    Text = "text",
    /**
     * Slide object placeholder. This is used to hold any content type, such as text, images, charts, tables, etc.
     */
    Object = "object",
    /**
     * Slide picture placeholder. This is used to hold a picture on the slide.
     */
    Picture = "picture",
    /**
     * Slide chart placeholder. This is used to hold a chart on the slide.
     */
    Chart = "chart",
    /**
     * Slide table placeholder. This is used to hold a table on the slide.
     */
    Table = "table",
    /**
     * Slide diagram placeholder. This is used to hold a diagram on the slide.
     */
    Diagram = "diagram",
    /**
     * Slide media placeholder. This is used to hold a multimedia on the slide.
     */
    Media = "media",
    /**
     * Slide slide number placeholder. This is used to hold the number of the slide.
     */
    SlideNumber = "slideNumber",
    /**
     * Slide date and time placeholder. This is used to hold the date and time on the slide.
     */
    Date = "date",
    /**
     * Slide footer placeholder. This is used to hold the footer text on the slide.
     */
    Footer = "footer",
    /**
     * Slide header placeholder. This is used to hold the header text on the slide.
     */
    Header = "header"
}
export declare enum PageElementTypeEnum {
    /**
     * The page element is a placeholder.
     */
    Placeholder = "placeholder",
    /**
     * The page element is an independent text box.
     */
    Text = "text",
    /**
     * The page element is a shape.
     */
    Shape = "shape",
    /**
     * The page element is an image.
     */
    Image = "image",
    /**
     * The page element is a chart.
     */
    Chart = "chart",
    /**
     * The page element is a table.
     */
    Table = "table",
    /**
     * The page element is a diagram.
     */
    Diagram = "diagram",
    /**
     * The page element is a media.
     */
    Media = "media",
    /**
     * Grouped shape, which is a collection of shapes that are grouped together. It can be treated as a single shape for formatting and manipulation purposes.
     */
    Group = "group",
    /**
     * Connector line (straight, bent, or curved) that can attach to connection sites on shapes.
     */
    Connector = "connector"
}
export declare enum SlideBackgroundTypeEnum {
    /**
     * The slide background is transparent or omitted.
     */
    None = "none",
    /**
     * The slide background is a solid color.
     */
    Solid = "solid",
    /**
     * The slide background is a gradient color.
     */
    Gradient = "gradient",
    /**
     * The slide background is a picture.
     */
    Image = "image",
    /**
     * The slide background is a pattern fill.
     */
    Pattern = "pattern"
}
export declare enum PageTypeEnum {
    Slide = "slide",
    Master = "master",
    Layout = "layout",
    HandoutMaster = "handoutMaster",
    NotesMaster = "notesMaster"
}
export declare enum SlidePageLayoutTypeEnum {
    Blank = "blank",
    Title = "title",
    TitleAndBody = "titleAndBody",
    TitleOnly = "titleOnly",
    SectionHeader = "sectionHeader",
    TwoColumns = "twoColumns",
    Comparison = "comparison",
    PictureWithCaption = "pictureWithCaption",
    Custom = "custom"
}
export declare enum SlidePageSizePresetEnum {
    Standard4By3 = "standard4By3",
    WideScreen16By9 = "wideScreen16By9",
    WideScreen16By10 = "wideScreen16By10",
    Custom = "custom"
}
export declare enum SlideMediaTypeEnum {
    Audio = "audio",
    Video = "video"
}
export declare enum SlideTransitionTypeEnum {
    /**
     * No transition effect.
     */
    None = "none",
    /**
     * Cross-fade between the previous slide and the destination slide.
     */
    Fade = "fade",
    /**
     * The destination slide moves in from the configured direction and pushes the
     * previous slide out.
     */
    Push = "push",
    /**
     * The destination slide is revealed by clipping in from the configured
     * direction while the previous slide stays in place.
     */
    Wipe = "wipe",
    /**
     * Instant switch with no animation.
     */
    Cut = "cut",
    /**
     * The destination slide moves in from the configured direction and covers the previous slide.
     */
    Cover = "cover",
    /**
     * The previous slide moves out toward the configured direction and uncovers
     * the destination slide.
     */
    Uncover = "uncover",
    /**
     * The previous slide is clipped away toward the configured direction to
     * reveal the destination slide.
     */
    Reveal = "reveal",
    /**
     * The destination slide opens from the center split. Left and Right use a
     * vertical split; Up and Down use a horizontal split.
     */
    Split = "split",
    /**
     * The destination slide scales and fades in while the previous slide scales
     * and fades out.
     */
    Zoom = "zoom"
}
export declare enum SlideTransitionDirectionEnum {
    Left = "left",
    Right = "right",
    Up = "up",
    Down = "down"
}
export declare enum SlideTransitionSpeedEnum {
    /**
     * Compatibility metadata. Current playback timing uses `duration`.
     */
    Slow = "slow",
    /**
     * Compatibility metadata. Current playback timing uses `duration`.
     */
    Medium = "medium",
    /**
     * Compatibility metadata. Current playback timing uses `duration`.
     */
    Fast = "fast"
}
/**
 * Slide scene type
 *
 * 用于描述 Slide Engine 当前所处的“工作场景（Scene）”，
 * 不同场景会影响：
 *
 * 1. 渲染内容（是否显示 placeholder / guide / ruler）
 * 2. 交互能力（是否允许编辑 / 拖拽 / 选择）
 * 3. 页面结构（是否显示缩略图 / 备注区 / 播放层）
 * 4. 生命周期（是否参与动画播放 / 演示模式）
 * 5. 权限控制（只读 / 编辑）
 */
export declare enum SlideSceneTypeEnum {
    /**
     * 主编辑视图（Normal View）
     *
     * 默认工作区：
     * - 可编辑 shape
     * - 可显示 placeholder
     * - 可显示 ruler / guide / selection
     * - 支持拖拽、缩放、旋转
     * - 支持母版继承展示
     */
    EDIT = "edit",
    /**
     * 缩略图视图（Thumbnail View）
     *
     * 左侧 slide navigator
     *
     * 特点：
     * - 只做轻量渲染
     * - 不显示 placeholder 控制点
     * - 不显示编辑辅助线
     * - 不允许复杂交互
     * - 支持排序 / 拖拽重排
     */
    THUMBNAIL = "thumbnail",
    /**
     * 备注页视图（Notes View）
     *
     * 演讲者备注编辑模式
     *
     * 特点：
     * - 上方 slide preview
     * - 下方 notes 文本区域
     * - 支持备注内容编辑
     * - 不直接编辑 slide shape
     */
    NOTES = "notes",
    /**
     * 演示播放视图（Slide Show）
     *
     * 全屏播放模式
     *
     * 特点：
     * - 禁止编辑
     * - 执行动画 / Transition
     * - 支持 Presenter 模式
     * - 支持超链接 / 点击事件
     */
    PRESENTATION = "presentation",
    /**
     * 演讲者视图（Presenter View）
     *
     * 双屏模式：
     * - 当前页
     * - 下一页预览
     * - 备注区
     * - 计时器
     */
    PRESENTER = "presenter",
    /**
     * 母版编辑视图（Master View）
     *
     * 编辑 slideMaster / layout
     *
     * 特点：
     * - 编辑 placeholder definition
     * - 编辑主题继承结构
     * - 不直接编辑普通 slide instance
     */
    MASTER = "master",
    /**
     * 讲义视图（Handout View）
     *
     * 打印讲义预览
     *
     * 特点：
     * - 多 slide 排版
     * - 页眉页脚
     * - 打印导向
     */
    HANDOUT = "handout",
    /**
     * 阅读模式（Reading View）
     *
     * 非全屏轻量播放模式
     *
     * 特点：
     * - 禁止编辑
     * - 支持翻页
     * - 不进入完整放映模式
     */
    READING = "reading"
}
