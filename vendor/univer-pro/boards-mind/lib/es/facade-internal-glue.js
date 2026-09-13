import { BoardElementType } from "@univerjs-pro/boards";
import { AddMindMapChildOperation, AddMindMapSiblingOperation, ChangeMindMapBranchLineTypeOperation, ChangeMindMapLayoutOperation, DeleteMindMapNodeOperation, DetachMindMapNodeOperation, InsertBoardMindMapOperation, PromoteMindMapNodeOperation, ReflowMindMapCommand, ReparentMindMapNodeOperation, ToggleMindMapNodeCollapseOperation, UpdateMindMapIncomingConnectorOperation, UpdateMindMapNodeOperation, compareMindMapOrderKey, getMindMapConnectorMeta, getMindMapContainerMeta, getMindMapNodeMeta } from "@univerjs-pro/boards-mind";
import { FBoard, createBoardFacadeRichTextValue, normalizeBoardFacadeTextContent } from "@univerjs-pro/boards/facade";
import { ICommandService, Tools, generateRandomId } from "@univerjs/core";
import { FEnum } from "@univerjs/core/facade";
import { D } from "./facade-boards-mind-fboard-mind-map.js";
FBoard.extend(D);
const F = {
    MindMapHorizontal: "mindmap-horizontal",
    MindMapVertical: "mindmap-vertical",
    TreeRight: "tree-right",
    TreeLeft: "tree-left",
    TreeAlternate: "tree-alternate",
    TimelineHorizontal: "timeline-horizontal",
    TimelineVertical: "timeline-vertical"
  },
  I = {
    RoundedOrthogonal: "rounded-orthogonal",
    Curve: "curve",
    Orthogonal: "orthogonal"
  },
  L = {
    Left: "left",
    Right: "right",
    Top: "top",
    Bottom: "bottom"
  };
var R = class extends FEnum {
  get BoardMindMapStructureKind() {
    return F;
  }
  get BoardMindMapBranchLineType() {
    return I;
  }
  get BoardMindMapNodeSide() {
    return L;
  }
};
FEnum.extend(R);
