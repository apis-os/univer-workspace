//#region src/compiler/errors.d.ts
/**
 * svg-facade 的用户可见错误:SVG 解析失败、或命中不可转换特性(黑名单)。
 * 消费方(如 CLI 壳)捕获后翻译成自身错误语言并渲染为诊断 + 退出码 1。
 */
declare class SvgFacadeError extends Error {
  readonly code: "SVG_FACADE_COMPILE_FAILED";
  constructor(message: string);
}
declare function isSvgFacadeError(error: unknown): error is SvgFacadeError;
//#endregion
//#region src/mapping/text-measure.d.ts
/**
 * 文本量字端口 + 内置估算实现。
 * 编译管线经 {@link SvgTextMeasurer} 取单行文本的两项排版事实:原始排版宽(px)与
 * **行 ascent**(px)。文本框横向余量、取整、多行取最大等策略留在调用侧
 * (mappers),换 measurer 不改产出策略。
 * CLI 壳注入渲染 runtime 量字器(浏览器 Univer 排版实测);缺省用内置字符类估算,
 * 保持库/playground 的离线可用与既有行为。
 */
/** 单行文本的排版实测事实(px,均不含任何盒内边距)。 */
interface SvgLineMetrics {
  /** 原始排版宽度。 */
  readonly width: number;
  /**
   * 该行的 ascent(px):行内**所有字形 ascent 的最大值**,跨 fallback 字体。
   *
   * 这是把 SVG 的基线锚点折算成 facade 的左上角锚点所需的**唯一**一项 —— slide shape text
   * 的首行基线就落在 `框顶 + ascent`(见 mappers 的 TEXT_BOX_WIDTH_SLACK 上方说明)。
   * 它必须是**量出来的**,不能推导:同一字号换字体就不同(实测本机 STHeiti 0.775em ~
   * PingFang SC 1.05em,跨度 0.275em)。曾用「lineSpacing/2 + 0.35×字号」的解析模型:
   * 多了一个渲染器根本没有的 L/2 项,ascent 又写死成 Arial 的常数;两个错项在 Arial 单行下
   * 恰好抵消,于是像素标定"通过",而 CJK 字体下文字系统性偏下 ≈0.16×字号
   * (2026-07-17 逐字体实测坐实)。
   */
  readonly ascent: number;
  /**
   * 该行的 descent(px):同样是行内所有字形 descent 的最大值。
   *
   * 与 ascent 合起来 = 渲染器的**行自然高**。EXACT 行距被 `max(行距, ascent+descent)`
   * 夹在它之上 —— 比它紧的 `tspan dy` 会被静默撑开;AUTO 行距则以它为基数按比率缩放,
   * 没有夹逼。所以要精确命中任意行距(含比行自然高更紧的),就得按
   * `比率 = 目标行距 / (ascent + descent)` 发 AUTO,这个量因此是必需的。
   */
  readonly descent: number;
}
/** 一行里的一段(样式已解析到有效值:tspan 覆盖过的字号/字体就是它自己的)。 */
interface SvgLineMeasureRun {
  readonly text: string;
  readonly fontSizePx: number;
  readonly bold: boolean;
  readonly italic: boolean;
  readonly fontFamily?: string;
}
/**
 * 量字输入:**一行 = 它的 run 序列**,与将要发射的 `.span()` 序列一一对应。
 *
 * 必须按真实 run 序列量,不能拿元素级样式当整行的样式:渲染器的行 ascent 取
 * **行内所有字形的最大值**,一行里混了大字号(`<tspan font-size="36">` 混在 20px 正文里)
 * 时,说了算的是那个大的。按元素级 20px 去量会把框顶抬高约 (asc36 − asc20),实测偏下 15px。
 * 宽度同理:混排行的真实宽是各段之和,按单一字号量会偏窄。
 */
interface SvgLineMeasureInput {
  readonly runs: readonly SvgLineMeasureRun[];
}
/** 文本量字端口(异步:真实现走 daemon 渲染 runtime)。 */
interface SvgTextMeasurer {
  /** 单行文本的排版实测事实。 */
  measureLine(input: SvgLineMeasureInput): Promise<SvgLineMetrics>;
  /** 量字来源标识,进编译信封(如 "builtin-estimate" / "browser:<buildId>")。 */
  readonly source: string;
}
/**
 * 内置量字器:字符类估算(原 estimateTextWidth 去掉盒内边距后的纯排版宽)。
 * 库与 playground 的缺省实现;单测的确定性 fake 也用它。
 */
declare const builtinTextMeasurer: SvgTextMeasurer;
//#endregion
//#region src/mapping/mappers.d.ts
/** 本地文件引用 → 原始字节 的同步解析端口(MIME 由编译器按字节 magic 判定,不信扩展名)。 */
type SvgAssetResolver = (href: string) => {
  bytes: Uint8Array;
};
//#endregion
//#region src/compiler/compile.d.ts
/** 编译选项。 */
interface CompileSvgOptions {
  /**
   * 本地文件引用的资产解析端口(同步)。`<image href>` 命中非 data:、非带 scheme URL 的
   * 路径形引用时调用;返回文件原始字节,MIME 由编译器按字节 magic 判定(不信扩展名)。
   * 未注入时命中文件引用即编译错误(浏览器等无文件系统环境保持可用)。相对路径的解析
   * 基准由实现闭包承担(CLI 以 SVG 源文件所在目录为基准);读取失败直接 throw,消息应含
   * 解析后的绝对路径。
   */
  readonly assetResolver?: SvgAssetResolver;
  /**
   * 文本量字端口(`<text>` 框宽与 text-anchor 折算的数据源)。缺省用内置字符类估算
   * (source="builtin-estimate"),库/playground 离线可用;CLI 壳注入渲染 runtime
   * 量字器获得与渲染引擎同源的实测宽(硬依赖,失败即编译失败,不回落估算)。
   */
  readonly textMeasurer?: SvgTextMeasurer;
}
/** 编译结果。 */
interface CompileSvgResult {
  /** 假定 `slide` / `univerAPI` 在作用域内的授权代码片段(纯 JS,对 tsc 消费方亦类型干净)。 */
  readonly code: string;
  /** 有损/降级映射的提示(不支持特性,渲染必然与源不同;不阻断)。 */
  readonly warnings: string[];
  /** 复查建议(产物没丢东西,源写法疑似非本意;不阻断,不要求清零——确认符合本意即可保留)。 */
  readonly lints: string[];
  /** SVG 视口尺寸(产物坐标假定的页尺寸;wrapSlideScript 用它对齐 setPageSize)。 */
  readonly viewport: {
    readonly width: number;
    readonly height: number;
  };
  /** 量字来源标识(= 所用 measurer 的 source,如 "builtin-estimate"),供信封追溯量字环境。 */
  readonly textMeasure: string;
}
/**
 * 编译 SVG 为 facade 授权代码。
 * @param svg SVG 源串。
 * @param options 编译选项。
 * @returns plain JavaScript code 与结构化 diagnostics。
 * @throws {SvgFacadeError} 命中黑名单特性时阻断,消息列出每项的元素路径 + 特性。
 */
declare function compileSvgToFacade(svg: string, options?: CompileSvgOptions): Promise<CompileSvgResult>;
//#endregion
//#region src/compiler/wrap-script.d.ts
/** 页定位选项。 */
interface WrapSlideScriptOptions {
  /** 目标页(1 起):≤页数取该页,==页数+1 追加新页,更大则脚本运行时报错。 */
  readonly page: number;
  /** replace:先清空目标页再灌入;add:保留现有元素、只叠加。 */
  readonly mode: "replace" | "add";
  /** 页尺寸(用编译结果的 viewport,保证与产物坐标系一致)。 */
  readonly width: number;
  readonly height: number;
}
/**
 * 包装编译产物为自闭合脚本(prelude + 片段;假定 `presentation` / `univerAPI` 在作用域)。
 * @param body compileSvgToFacade 的 `code` 片段。
 * @param options 目标页 / 模式 / 页尺寸。
 * @throws {SvgFacadeError} page 不是 ≥1 的整数时。
 */
declare function wrapSlideScript(body: string, options: WrapSlideScriptOptions): string;
//#endregion
export { type CompileSvgOptions, type CompileSvgResult, type SvgAssetResolver, SvgFacadeError, type SvgLineMeasureInput, type SvgLineMeasureRun, type SvgLineMetrics, type SvgTextMeasurer, type WrapSlideScriptOptions, builtinTextMeasurer, compileSvgToFacade, isSvgFacadeError, wrapSlideScript };