import{BoardElementType}from"@univerjs-pro/boards";
import{FBoard}from"@univerjs-pro/boards/facade";
import{buildInkCustomShapePayload}from"@univerjs-pro/ink";
import{Tools,generateRandomId}from"@univerjs/core";
import{FEnum}from"@univerjs/core/facade";
const m={Pen:"pen",Brush:"brush",Highlighter:"highlighter"},h={Corner:"corner",Smooth:"smooth",Symmetric:"symmetric",Free:"free"},g={Anchor:"anchor",In:"in",Out:"out"};

export { m as BoardInkTool, h as BoardInkPointType, g as BoardInkHandleKind };
