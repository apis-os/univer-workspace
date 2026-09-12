# @univerjs-pro/boards

[![npm version](https://img.shields.io/npm/v/@univerjs-pro/boards?style=flat-square)](https://npmjs.com/package/@univerjs-pro/boards)
[![license](https://img.shields.io/npm/l/@univerjs-pro/boards?style=flat-square)](https://npmjs.com/package/@univerjs-pro/boards)
[![downloads](https://img.shields.io/npm/dm/@univerjs-pro/boards?style=flat-square)](https://npmjs.com/package/@univerjs-pro/boards)

`@univerjs-pro/boards` is part of Univer Pro. Board model integration for Univer.

## Package Overview

| Package | UMD global | CSS | Locales | Facade entry |
| --- | --- | :---: | :---: | :---: |
| `@univerjs-pro/boards` | `UniverProBoards` | No | No | Yes |

## Native shape creation

`FBoard.insertShape()` and `insertShapes()` accept `IBoardShapeCreateInput` from this package.
Its `shapeType` supports `BoardCustomShapeType`, `BoardSequenceShapeType`, and engine `ShapeTypeEnum`
presets without caller-side type assertions. Geometry remains under `transform`; the returned handles
retain the common Shape text/style APIs. Batch insertion is one undoable action.

Native sequence settings may be partial: `shapeData.sequenceLifeline: { lifelineHeight: 800 }`
retains the preset participant and minimum height, while
`shapeData.sequenceActivation: { lifelineId, offsetY: 40 }` retains native activation attachment.
These overrides are merged at creation; they do not reschedule existing messages.

## Connector labels

`connectorData.labels` is the only stored label collection. New element writes must not include the old
`connectorData.label` field. Snapshot loading and resource import convert single-label documents without
modifying their source. An explicit `labels` array takes precedence over the legacy field, even when empty;
clearing every label stores `labels: []` and cannot revive a stale primary-label mirror on reopen.

Connector labels use a stable `id` and one `content` value: plain text or an
`IDocumentData` snapshot. Facade insertion, replacement and patch APIs also accept
the shared rich-text value returned by `univerAPI.newRichText()`. Inputs are
detached before they enter the model; subsequent builder edits cannot mutate a Board.

```ts
board.setConnectorLabels('relation', [
    {
        id: 'source-role',
        content: 'Agent',
        placement: {
            anchor: univerAPI.Enum.BoardConnectorLabelAnchor.Start,
            side: univerAPI.Enum.BoardConnectorLabelSide.Left,
        },
    },
    {
        id: 'operation',
        content: univerAPI.newRichText().span('Calls tools', { bold: true }),
        layout: { mode: univerAPI.Enum.BoardConnectorLabelSizing.FixedWidth, width: 160 },
    },
]);
board.updateConnectorLabel('relation', 'operation', { content: 'Returns result' });
```

- `AutoSize` is the default: no automatic wrapping; explicit newlines remain.
- `FixedWidth` declares the outer width (including padding), wraps text and derives height at runtime.
- `FixedSize` declares both outer dimensions, wraps and clips overflowing text without shrinking the font.
- New writes declare dimensions only in `layout`; top-level label `width`/`height` are rejected, including
  properties set to `undefined`. On load/import, legacy dimensions become `FixedSize`, with the old 96-by-28
  defaults for missing dimensions. An explicit canonical layout wins over stale legacy dimensions. Old content-only
  `text`/`documentData` labels retain their default fixed box; new `content` labels default to AutoSize.
  Content is preserved in full, but text previously painted outside an old box is clipped under the FixedSize
  contract and reported as overflow. Review that diagnostic and explicitly choose FixedWidth or AutoSize if desired.
- `style.interruptLine` defaults to `true` and interrupts the connector where it intersects the label box plus
  `style.lineGap`. It applies at every anchor and is independent of text wrapping. Empty labels do not interrupt
  the route. Fixed-width blank space remains part of the box and therefore of the interruption mask.
- Legacy `style.lineBreak` is converted to `interruptLine` on snapshot load and resource import; an explicitly
  defined canonical value wins. New writes reject the legacy field instead of silently ignoring it.
- Omitted placement, an empty placement object and explicit `placement.anchor: Center` all use the whole
  rendered path's arc-length midpoint, including orthogonal and curved routes. `placement.anchor: Auto`
  explicitly prefers the longest orthogonal segment and falls back to the arc-length midpoint on other routes.
  Side placement is relative to the directed path, independent of paragraph alignment.
- Explicit path positions use `placement: { anchor: 'path', pathRatio: 0.75 }`. New writes reject a top-level
  `pathRatio`, including `undefined`. Loading/import moves an old ratio into placement only when the old renderer
  would have used it: no placement, or a Path placement with no ratio. An explicit canonical ratio (including zero),
  a non-Path anchor, or an existing placement with an omitted anchor takes precedence. Conversion retains offsets
  and never measures text. Recognized historical label fields or an old primary-label collection with no placement
  become explicit Auto placement so their old longest-segment positioning survives loading and serialization.
  Current-format labels without historical fields retain the new Center default.
- Free displacement belongs to `placement.offset`. Use `{ space: 'path', along, normal }` for edits that follow
  the directed route tangent; positive `normal` points left. Dragging and width resizing write this form.
  `{ space: 'canvas', x, y }` keeps a displacement in Board axes and preserves imported historical positions.
  Loading moves a top-level `offset` into that explicit canvas form without routing or text measurement; an
  existing canonical offset wins. New writes reject top-level `offset`, including `undefined`.
  Width resizing retains the opposite box edge. Near-route snapping uses distance to the finite route, not its
  infinite extension; free positions beyond endpoints remain editable.
- `BoardConnectorLabelAnchor`, `BoardConnectorLabelSide`, `BoardConnectorLabelOrientation`, and
  `BoardConnectorLabelSizing` plus `BoardConnectorLabelOffsetSpace` are shared runtime constants, also available through `univerAPI.Enum`.
  `Horizontal` keeps text horizontal; `FollowPath` follows the directed tangent exactly and can invert text
  on a reversed route; `Auto` follows the tangent while keeping text upright. The label settings menu exposes
  all three orientations independently of text alignment, sizing, anchor, and side.
- Content and layout updates replace their respective values. Placement/style patches merge explicit fields;
  passing `null` resets placement, style or layout. Resetting placement does not change content or sizing.
  An explicit anchor or path-ratio patch clears free displacement unless an offset is supplied in the same patch.
  `placement: { offset: null }` clears only displacement; an offset object replaces the whole vector rather than
  merging coordinate frames. The UI anchor presets also clear displacement. Content/style-only edits retain it.
- `setConnectorLabelText` changes the primary label's content, not its measured dimensions. Headless success
  confirms a data update, not measured or visually verified layout. Measurement belongs to the Board UI runtime.
- With the Board UI Facade extension, `analyzeRenderedLayout()` reports `connector-label-overflow` and
  `connector-label-layout-unresolved` with stable `labelIds`. Unresolved is not visual success. Its `contentBounds`
  includes the current measured, rotated labels (unresolved bounds are provisional); model-only analysis does not
  validate text layout.
- Rendered analysis also reports `connector-label-collision` for overlapping nonempty labels on the same connector,
  using their oriented boxes rather than just axis-aligned envelopes. `connector-label-endpoint-constrained` means
  the requested endpoint inset, marker clearance and label extent exceed the available half-path before clamping.
  Both warnings identify the affected labels; diagnostics never shrink text or reroute the graph.
- Legacy `text`/`documentData` content is converted on snapshot load and resource import without mutating the
  input. New label writes use `content`; rich content takes precedence over an old plain-text mirror during conversion.

## Class and entity relationships

`insertClassRelation()` / `insertClassRelations()` expand association, directed association, aggregation,
composition, generalization, realization and dependency into ordinary editable connectors. Generalization uses a
solid line and an open triangle at the parent end; realization uses a dashed line. Roles and multiplicities remain
independently editable labels, not extra shapes.

`insertEntityRelation()` / `insertEntityRelations()` support identifying and non-identifying relationships with
`one`, `zeroOrOne`, `oneOrMany` and `zeroOrMany` cardinalities at either end. Unknown relation types/cardinalities,
missing endpoints and non-string class multiplicities return `null` rather than silently selecting another preset.
Batch preflight rejects the whole batch without creating elements or undo history. Successful batches can be
undone/redone as one edit.

## Sequence message geometry

Native activation bars keep a four-unit corner radius (clamped to half the smaller dimension) when resized.
Snapshot loading and Board resource materialization convert the exact historical fixed-canvas activation path
through `normalizeBoardSequenceActivationElement()`, without mutating the source. Custom geometry, styling,
element identities and connector bindings are preserved; normalized snapshots reopen without another conversion.

Create native participants and activation bars before calling `insertSequenceMessages()`.
All messages use a shared Board-world timeline: `timeOriginY + firstOffsetY + (order - 1) * step`.
By default, `timeOriginY` is the smallest bottom-edge Y among the referenced participants. Pass the same explicit
origin when inserting a sequence in separate calls, particularly when later messages reference only late-created
participants. Different header heights do not change message time; each lifeline offset is derived from that time.

For `create`, position the receiving participant's header center at the message time first. The dashed creation
message binds to the facing header edge, not to an activation or the dashed lifeline. Self-creation and a receiving
activation ID are invalid. For `destroy`, configure the receiving lifeline to end at the receive time first; the
message terminates with a cross there. Messages outside a participant's lifeline interval are rejected. This helper
only inserts connectors: it never moves headers, resizes activations, or truncates existing lifelines. Invalid
geometry, unknown message types, and invalid or duplicate orders reject the whole batch without adding history.
The native renderer centers a cross attached to a lifeline on the endpoint; an explicitly configured marker offset
still displaces it along the path. Other marker types retain their normal tip/gap behavior.

Messages to the same participant use distinct send and receive positions and an editable orthogonal loop by default,
including synchronous self calls. `selfMessageHeight` defaults to half of `step`; `selfMessageWidth` defaults to 96.
Both dimensions must be positive finite numbers. The receive position must remain inside the participant's lifeline.
An explicit `type: 'self'` requires the same source and target participant. Self-loop waypoints are normal manual
connector waypoints; labels and activation bindings remain independently editable and participate in undo/redo.
Explicit routing still overrides the default route style.

## Installation

```sh
pnpm add @univerjs-pro/boards
# or
npm install @univerjs-pro/boards
```

Keep all `@univerjs/*` and `@univerjs-pro/*` packages on the same version.

## Usage

```ts
import { UniverBoardsPlugin } from '@univerjs-pro/boards';

univer.registerPlugin(UniverBoardsPlugin);
```

## Integration Notes

- Keep this package on the same version as the other `@univerjs/*` and `@univerjs-pro/*` packages in your application.
- Use the facade entry when integrating through Univer Facade APIs.

## Resources

- [Documentation](https://docs.univer.ai/guides/pro)
- [NPM package](https://npmjs.com/package/@univerjs-pro/boards)
