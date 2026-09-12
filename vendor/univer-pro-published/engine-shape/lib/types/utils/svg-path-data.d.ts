import type { IPathCommand } from '../shape-type';
/**
 * Parses an SVG `<path>` element's `d` attribute into engine-shape path commands.
 *
 * This helper parses path geometry only. It does not accept complete `<svg>` or `<path>` markup,
 * data URLs, transforms, fill colors, or stroke styles. Configure those properties separately on
 * the Shape.
 *
 * Supported SVG commands:
 *
 * - `M` / `m` — move to
 * - `L` / `l` — line to
 * - `H` / `h` — horizontal line to
 * - `V` / `v` — vertical line to
 * - `C` / `c` — cubic Bézier curve
 * - `S` / `s` — smooth cubic Bézier curve
 * - `Q` / `q` — quadratic Bézier curve
 * - `T` / `t` — smooth quadratic Bézier curve
 * - `A` / `a` — elliptical arc
 * - `Z` / `z` — close path
 *
 * Repeated coordinate groups and relative commands are normalized to absolute `IPathCommand`
 * values. `H` and `V` become `L`, smooth commands expand their reflected control points, and SVG
 * arcs become one or more cubic `C` segments. SVG arcs are never forwarded as engine-shape `A`
 * commands because that command follows different OOXML arc semantics.
 *
 * @param data The value of an SVG `<path d="...">` attribute.
 * @returns Parsed, absolute engine-shape path commands.
 * @throws {SyntaxError} When the path is empty, malformed, starts without `M`/`m`, or uses an
 * unsupported SVG command.
 *
 * @example
 * ```ts
 * const commands = parseSvgPathData(
 *   'M 50,10 C 34,20 24,64 22,92 L 78,92 C 76,64 66,20 50,10 Z'
 * );
 *
 * console.log(commands);
 * // [
 * //   { command: 'M', points: [50, 10] },
 * //   { command: 'C', points: [34, 20, 24, 64, 22, 92] },
 * //   { command: 'L', points: [78, 92] },
 * //   { command: 'C', points: [76, 64, 66, 20, 50, 10] },
 * //   { command: 'z', points: [] },
 * // ]
 * ```
 */
export declare function parseSvgPathData(data: string): IPathCommand[];
