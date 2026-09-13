import { createIdentifier, toDisposable } from "@univerjs/core";
const o = {
    Normal: {
      left: 53,
      right: 53,
      top: 56,
      bottom: 56
    },
    Narrow: {
      left: 19,
      right: 19,
      top: 56,
      bottom: 56
    },
    Wide: {
      left: 75,
      right: 75,
      top: 75,
      bottom: 75
    },
    None: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    Custom: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }
  },
  s = "printing-canvas-container",
  c = "printing-canvas";
export { o as PaperMarginMap, s as PRINT_CONTAINER_CLASS, c as PRINT_CANVAS_CLASS };
