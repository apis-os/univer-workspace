/**
 * Parse LaTeX string and return the display list as JSON.
 * The browser can deserialize this and draw with Canvas 2D (web-render).
 *
 * # Errors
 * Returns a JS error string if parsing fails.
 * @param {string} latex
 * @param {string | null} [color]
 * @returns {string}
 */
export declare function renderLatex(latex: any, color: any): string;
declare function initSync(module: any): any;
declare function __wbg_init(module_or_path: any): Promise<any>;
export { initSync, __wbg_init as default };
