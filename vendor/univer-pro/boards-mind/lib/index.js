import { AddBoardElementMutation as var_core_value_sig4F9D, BOARD_MIND_MAP_CONNECTOR_ROLE as var_core_value_sig278E, BOARD_MIND_MAP_CONTAINER_ROLE as var_core_value_sig2921, BOARD_MIND_MAP_DECORATION_ROLE as var_core_value_sig3959, BOARD_MIND_MAP_MODE_ID as var_core_value_sig926F, BOARD_MIND_MAP_NODE_ROLE as var_core_value_sig9414, BoardElementType as var_core_value_sig32E7, IBoardElementService as var_core_value_sigD8C3, RemoveBoardElementMutation as var_core_value_sig3A44, SetBoardElementOrderMutation as var_core_value_sig0642, UniverBoardsPlugin as var_core_value_sig786E, createAddBoardElementsMutationInfos as var_core_value_sigFC47, createBoardConnectorElement as var_core_value_sig48E2, createBoardContainerElement as var_core_value_sig2FCA, createBoardTextBoxShapeElement as var_core_value_sig04F2, createBoardTextBoxShapeTextData as var_core_value_sig2CFC, mergeBoardRichTextDocument as var_core_value_sig5CEB, offsetBoardConnectorGeometry as var_core_value_sig4935, resolveBoardElementLocalTransformForParent as var_core_value_sig1832, resolveBoardElementWorldBounds as var_core_value_sig79D7, resolveBoardElementWorldTransform as var_core_value_sig5E01, shapeTextToBoardDocumentTextStyle as var_core_value_sigBBE4 } from "@univerjs-pro/boards";
import { BooleanNumber as var_core_value_sig96B3, CommandType as var_core_value_sig9CF2, DependentOn as var_core_value_sig666D, Disposable as var_core_value_sigBD53, HorizontalAlign as var_core_value_sigD11F, ICommandService as var_core_value_sig6223, IConfigService as var_core_value_sig7653, IUndoRedoService as var_core_value_sigF65B, IUniverInstanceService as var_core_value_sig4A94, Inject as var_core_value_sigEB59, Injector as var_core_value_sigD9B0, Plugin as var_core_value_sigB7D6, Tools as var_core_value_sigCF1F, UniverInstanceType as var_core_value_sig4DD1, VerticalAlign as var_core_value_sig1293, WrapStrategy as var_core_value_sigC999, createIdentifier as var_core_value_sig9D8F, createInternalEditorID as var_core_value_sig8270, generateRandomId as var_core_value_sig95D9, merge as var_core_value_sig0E92, sequenceExecute as var_core_value_sig45CD } from "@univerjs/core";
import { ShapeFillEnum as var_core_value_sigAD84, ShapeLineTypeEnum as var_core_value_sigD513, ShapeModel as var_core_value_sig36BD, ShapeTypeEnum as var_core_value_sig0413 } from "@univerjs-pro/engine-shape";
import { UniverLicensePlugin as var_core_value_sig15B6 } from "@univerjs-pro/license";
const k = var_core_value_sig926F,
  ye = var_core_value_sig2921,
  A = var_core_value_sig9414,
  j = var_core_value_sig278E,
  be = var_core_value_sig3959,
  xe = "Add\x20text",
  M = {
    root: {
      fillColor: "#4f7bcf",
      strokeColor: "#4f7bcf",
      textColor: "#ffffff",
      fontSize: 24
    },
    child: {
      fillColor: "#ffffff",
      strokeColor: "#4f7bcf",
      textColor: "#111827",
      fontSize: 18
    },
    connector: {
      strokeColor: "#4f7bcf"
    },
    container: {
      fillColor: "rgba(255, 255, 255, 0)",
      strokeColor: "rgba(0, 0, 0, 0)"
    }
  },
  Se = {
    root: {
      paddingX: 56,
      paddingY: 34
    },
    child: {
      paddingX: 40,
      paddingY: 22
    },
    lineHeightRatio: 1.35
  },
  Ce = {
    left: 8,
    top: 8,
    right: 8,
    bottom: 8
  },
  N = {
    direction: "both",
    structureKind: "mindmap-horizontal",
    branchLineType: "rounded-orthogonal",
    horizontalGap: 96,
    timelineAxisGap: 144,
    siblingGap: 24,
    branchGap: 40
  },
  P = {
    horizontalGap: {
      min: 80,
      max: 320
    },
    siblingGap: {
      min: 16,
      max: 120
    },
    branchGap: {
      min: 24,
      max: 180
    }
  },
  F = {
    rootWidth: 220,
    rootHeight: 72,
    nodeWidth: 160,
    nodeHeight: 48,
    containerPadding: 48
  };
function I(var_core_value_sig2AE0, var_core_value_sigC349) {
  let var_core_value_sig9D96 = var_core_value_sig2AE0.transform,
    var_core_value_sig2776 = var_core_value_sig9D96.left ?? 0,
    var_core_value_sig6FB2 = var_core_value_sig9D96.top ?? 0,
    var_core_value_sigEB43 = var_core_value_sig9D96.width ?? 0,
    var_core_value_sig4186 = var_core_value_sig9D96.height ?? 0;
  return {
    x: var_core_value_sigC349 === "right" ? var_core_value_sig2776 + var_core_value_sigEB43 : var_core_value_sigC349 === "left" ? var_core_value_sig2776 : var_core_value_sig2776 + var_core_value_sigEB43 / 2,
    y: var_core_value_sigC349 === "bottom" ? var_core_value_sig6FB2 + var_core_value_sig4186 : var_core_value_sigC349 === "top" ? var_core_value_sig6FB2 : var_core_value_sig6FB2 + var_core_value_sig4186 / 2
  };
}
function we(var_core_value_sigF963, var_core_value_sigB608, var_core_value_sigF866) {
  return {
    kind: "shapeSite",
    shapeId: var_core_value_sigF963,
    connectionSiteId: var_core_value_sigB608 === "top" ? 0 : var_core_value_sigB608 === "right" ? 1 : var_core_value_sigB608 === "bottom" ? 2 : 3,
    ...(var_core_value_sigF866 ? {
      fallbackPoint: var_core_value_sigF866
    } : null)
  };
}
function Te(var_core_value_sig5EFB) {
  let var_core_value_sig3A85 = var_core_value_sig5EFB.parentNode["transform"].left ?? 0,
    var_core_value_sig2682 = var_core_value_sig5EFB.parentNode["transform"].width ?? 0,
    var_core_value_sig4BB5 = var_core_value_sig5EFB.branchGap ?? N.branchGap;
  return var_core_value_sig5EFB.side === "right" ? var_core_value_sig3A85 + var_core_value_sig2682 + var_core_value_sig4BB5 : var_core_value_sig3A85 - var_core_value_sig4BB5;
}
function Ee(var_core_value_sig6709) {
  let var_core_value_sig52CA = var_core_value_sig6709.parentNode["transform"].top ?? 0,
    var_core_value_sigC030 = var_core_value_sig6709.parentNode["transform"].height ?? 0,
    var_core_value_sig88F6 = var_core_value_sig6709.branchGap ?? N.branchGap;
  return var_core_value_sig6709.side === "bottom" ? var_core_value_sig52CA + var_core_value_sigC030 + var_core_value_sig88F6 : var_core_value_sig52CA - var_core_value_sig88F6;
}
function L(var_core_value_sig37DB) {
  return var_core_value_sig37DB === "left" ? {
    startSide: "left",
    endSide: "right"
  } : var_core_value_sig37DB === "top" ? {
    startSide: "top",
    endSide: "bottom"
  } : var_core_value_sig37DB === "bottom" ? {
    startSide: "bottom",
    endSide: "top"
  } : {
    startSide: "right",
    endSide: "left"
  };
}
function De(var_core_value_sig5542) {
  let {
      startSide: var_core_value_sigE0A9,
      endSide: var_core_value_sigA73E
    } = L(var_core_value_sig5542.side),
    var_core_value_sig7620 = I(var_core_value_sig5542.parentNode, var_core_value_sigE0A9),
    var_core_value_sigB9FC = I(var_core_value_sig5542.childNode, var_core_value_sigA73E),
    var_core_value_sig5055 = Te(var_core_value_sig5542),
    var_core_value_sig3801 = Ee(var_core_value_sig5542),
    var_core_value_sig45F0 = var_core_value_sig5542.idPrefix ?? var_core_value_sig5542.parentNode["id"] + "-" + var_core_value_sig5542.childNode["id"];
  return var_core_value_sig5542.side === "top" || var_core_value_sig5542.side === "bottom" ? var_core_value_sig7620.x === var_core_value_sigB9FC.x && !var_core_value_sig5542.forceTrunk ? [] : var_core_value_sig7620.x === var_core_value_sigB9FC.x ? [{
    id: var_core_value_sig45F0 + "-route-0",
    kind: "manual",
    x: var_core_value_sig7620.x,
    y: var_core_value_sig3801
  }] : [{
    id: var_core_value_sig45F0 + "-route-0",
    kind: "manual",
    x: var_core_value_sig7620.x,
    y: var_core_value_sig3801
  }, {
    id: var_core_value_sig45F0 + "-route-1",
    kind: "manual",
    x: var_core_value_sigB9FC.x,
    y: var_core_value_sig3801
  }] : var_core_value_sig7620.y === var_core_value_sigB9FC.y && !var_core_value_sig5542.forceTrunk ? [] : var_core_value_sig7620.y === var_core_value_sigB9FC.y ? [{
    id: var_core_value_sig45F0 + "-route-0",
    kind: "manual",
    x: var_core_value_sig5055,
    y: var_core_value_sig7620.y
  }] : [{
    id: var_core_value_sig45F0 + "-route-0",
    kind: "manual",
    x: var_core_value_sig5055,
    y: var_core_value_sig7620.y
  }, {
    id: var_core_value_sig45F0 + "-route-1",
    kind: "manual",
    x: var_core_value_sig5055,
    y: var_core_value_sigB9FC.y
  }];
}
function Oe(var_core_value_sigBC91) {
  var var_core_value_sigCB88, var_core_value_sig8D65;
  let {
      startSide: var_core_value_sig8122,
      endSide: var_core_value_sigEDC6
    } = L(var_core_value_sigBC91.side),
    var_core_value_sig611A = I(var_core_value_sigBC91.parentNode, var_core_value_sig8122),
    var_core_value_sig6BD9 = I(var_core_value_sigBC91.childNode, var_core_value_sigEDC6),
    var_core_value_sig7E56 = [var_core_value_sig611A, ...var_core_value_sigBC91.routePoints, ...(((var_core_value_sigCB88 = var_core_value_sigBC91.curveData) == null ? undefined : var_core_value_sigCB88.controls) ?? []), ...(((var_core_value_sig8D65 = var_core_value_sigBC91.curveData) == null ? undefined : var_core_value_sig8D65.anchors) ?? []), var_core_value_sig6BD9],
    var_core_value_sig4161 = Math.min(...var_core_value_sig7E56.map(var_core_value_sigA942 => var_core_value_sigA942.x)),
    var_core_value_sig7580 = Math.min(...var_core_value_sig7E56.map(var_core_value_sigA621 => var_core_value_sigA621.y)),
    var_core_value_sig1F18 = Math.max(...var_core_value_sig7E56.map(var_core_value_sigBBFF => var_core_value_sigBBFF.x)),
    var_core_value_sigD5A0 = Math.max(...var_core_value_sig7E56.map(var_core_value_sig8889 => var_core_value_sig8889.y));
  return {
    left: var_core_value_sig4161,
    top: var_core_value_sig7580,
    width: Math.max(1, var_core_value_sig1F18 - var_core_value_sig4161),
    height: Math.max(1, var_core_value_sigD5A0 - var_core_value_sig7580),
    rotation: 0
  };
}
function ke(var_core_value_sig81B2) {
  let var_core_value_sigA0A5 = Math.min(...var_core_value_sig81B2.map(var_core_value_sig32F8 => var_core_value_sig32F8.x)),
    var_core_value_sig10AA = Math.min(...var_core_value_sig81B2.map(var_core_value_sig5B67 => var_core_value_sig5B67.y)),
    var_core_value_sigE6D0 = Math.max(...var_core_value_sig81B2.map(var_core_value_sig1758 => var_core_value_sig1758.x)),
    var_core_value_sig8E91 = Math.max(...var_core_value_sig81B2.map(var_core_value_sig4805 => var_core_value_sig4805.y));
  return {
    left: var_core_value_sigA0A5,
    top: var_core_value_sig10AA,
    width: Math.max(1, var_core_value_sigE6D0 - var_core_value_sigA0A5),
    height: Math.max(1, var_core_value_sig8E91 - var_core_value_sig10AA),
    rotation: 0
  };
}
function R(var_core_value_sig00BE) {
  return var_core_value_sig00BE ?? N.branchLineType;
}
function Ae(var_core_value_sig7BB5) {
  let {
      startSide: var_core_value_sig6AAD,
      endSide: var_core_value_sig1157
    } = L(var_core_value_sig7BB5.side),
    var_core_value_sigA694 = I(var_core_value_sig7BB5.parentNode, var_core_value_sig6AAD),
    var_core_value_sig18E0 = I(var_core_value_sig7BB5.childNode, var_core_value_sig1157),
    var_core_value_sig0428 = var_core_value_sig7BB5.side === "left" || var_core_value_sig7BB5.side === "right",
    var_core_value_sigBE07 = Math.abs(var_core_value_sig0428 ? var_core_value_sig18E0.x - var_core_value_sigA694.x : var_core_value_sig18E0.y - var_core_value_sigA694.y),
    var_core_value_sig555F = Math.max(40, Math.min(72, var_core_value_sigBE07 * 0.24)),
    var_core_value_sig3D6F = Math.max(48, Math.min(96, var_core_value_sigBE07 * 0.35)),
    var_core_value_sig336C = var_core_value_sig0428 ? {
      x: var_core_value_sigA694.x + (var_core_value_sig7BB5.side === "right" ? var_core_value_sig555F : -var_core_value_sig555F),
      y: var_core_value_sigA694.y + (var_core_value_sig18E0.y - var_core_value_sigA694.y) * 0.55
    } : {
      x: var_core_value_sigA694.x + (var_core_value_sig18E0.x - var_core_value_sigA694.x) * 0.55,
      y: var_core_value_sigA694.y + (var_core_value_sig7BB5.side === "bottom" ? var_core_value_sig555F : -var_core_value_sig555F)
    },
    var_core_value_sig6E68 = var_core_value_sig0428 ? {
      x: var_core_value_sig18E0.x + (var_core_value_sig7BB5.side === "right" ? -var_core_value_sig3D6F : var_core_value_sig3D6F),
      y: var_core_value_sig18E0.y
    } : {
      x: var_core_value_sig18E0.x,
      y: var_core_value_sig18E0.y + (var_core_value_sig7BB5.side === "bottom" ? -var_core_value_sig3D6F : var_core_value_sig3D6F)
    };
  return {
    controls: [{
      id: var_core_value_sig7BB5.idPrefix + "-curve-control-0",
      segmentIndex: 0,
      kind: "manual",
      ...var_core_value_sig336C
    }, {
      id: var_core_value_sig7BB5.idPrefix + "-curve-control-1",
      segmentIndex: 0,
      kind: "manual",
      ...var_core_value_sig6E68
    }],
    tension: 0.5
  };
}
function je(var_core_value_sig8DFE) {
  let var_core_value_sig48EA = var_core_value_sig8DFE.side === "left" ? "left" : "right",
    var_core_value_sig5E16 = "bottom",
    var_core_value_sig09F3 = var_core_value_sig48EA === "left" ? "right" : "left",
    var_core_value_sig4592 = I(var_core_value_sig8DFE.parentNode, var_core_value_sig5E16),
    var_core_value_sigC5C4 = I(var_core_value_sig8DFE.childNode, var_core_value_sig09F3),
    var_core_value_sig1617 = R(var_core_value_sig8DFE.branchLineType),
    var_core_value_sig4169 = [{
      id: var_core_value_sig8DFE.idPrefix + "-route-0",
      kind: "manual",
      x: var_core_value_sig4592.x,
      y: var_core_value_sigC5C4.y
    }],
    var_core_value_sig6D19 = var_core_value_sig1617 === "curve" ? (() => {
      let var_core_value_sigE67E = Math.max(48, Math.abs(var_core_value_sigC5C4.y - var_core_value_sig4592.y) / 2),
        var_core_value_sig2902 = Math.max(48, Math.abs(var_core_value_sigC5C4.x - var_core_value_sig4592.x) / 2);
      return {
        controls: [{
          id: var_core_value_sig8DFE.idPrefix + "-curve-control-0",
          segmentIndex: 0,
          kind: "manual",
          x: var_core_value_sig4592.x,
          y: var_core_value_sig4592.y + var_core_value_sigE67E
        }, {
          id: var_core_value_sig8DFE.idPrefix + "-curve-control-1",
          segmentIndex: 0,
          kind: "manual",
          x: var_core_value_sigC5C4.x + (var_core_value_sig48EA === "left" ? var_core_value_sig2902 : -var_core_value_sig2902),
          y: var_core_value_sigC5C4.y
        }],
        tension: 0.5
      };
    })() : undefined;
  return {
    startSide: var_core_value_sig5E16,
    endSide: var_core_value_sig09F3,
    startPoint: var_core_value_sig4592,
    endPoint: var_core_value_sigC5C4,
    routePoints: var_core_value_sig4169,
    curveData: var_core_value_sig6D19,
    transform: ke(var_core_value_sig1617 === "curve" ? [var_core_value_sig4592, ...((var_core_value_sig6D19 == null ? undefined : var_core_value_sig6D19.controls) ?? []), var_core_value_sigC5C4] : [var_core_value_sig4592, ...var_core_value_sig4169, var_core_value_sigC5C4])
  };
}
function Me(var_core_value_sig279C) {
  let var_core_value_sigAC51 = var_core_value_sig279C.structureKind === "timeline-horizontal",
    var_core_value_sig8986 = var_core_value_sig279C.childSide === "right" ? "right" : "left",
    var_core_value_sigCAF7 = var_core_value_sigAC51 ? "right" : "bottom",
    var_core_value_sigED1C = var_core_value_sigAC51 ? "left" : var_core_value_sig8986 === "left" ? "right" : "left",
    var_core_value_sig726E = (var_core_value_sig279C.parentNode["transform"].left ?? 0) + (var_core_value_sig279C.parentNode["transform"].width ?? 0) / 2,
    var_core_value_sig2CD3 = var_core_value_sig279C.previousAxisNode ? var_core_value_sigAC51 ? I(var_core_value_sig279C.previousAxisNode, var_core_value_sigCAF7) : {
      x: var_core_value_sig726E,
      y: (var_core_value_sig279C.previousAxisNode["transform"].top ?? 0) + (var_core_value_sig279C.previousAxisNode["transform"].height ?? 0) / 2
    } : I(var_core_value_sig279C.parentNode, var_core_value_sigCAF7),
    var_core_value_sig038E = I(var_core_value_sig279C.childNode, var_core_value_sigED1C),
    var_core_value_sigAA1E = var_core_value_sig279C.previousAxisNode ? {
      kind: "free",
      ...var_core_value_sig2CD3
    } : undefined,
    var_core_value_sigC9F5 = R(var_core_value_sig279C.branchLineType),
    var_core_value_sig7EEA = var_core_value_sigAC51 ? [] : [{
      id: var_core_value_sig279C.idPrefix + "-route-0",
      kind: "manual",
      x: var_core_value_sig726E,
      y: var_core_value_sig038E.y
    }],
    var_core_value_sig59CE = var_core_value_sigC9F5 === "curve" ? (() => {
      let var_core_value_sig9989 = Math.max(48, Math.abs(var_core_value_sigAC51 ? var_core_value_sig038E.x - var_core_value_sig2CD3.x : var_core_value_sig038E.y - var_core_value_sig2CD3.y) / 2);
      return {
        controls: [{
          id: var_core_value_sig279C.idPrefix + "-curve-control-0",
          segmentIndex: 0,
          kind: "manual",
          x: var_core_value_sigAC51 ? var_core_value_sig2CD3.x + var_core_value_sig9989 : var_core_value_sig2CD3.x,
          y: var_core_value_sigAC51 ? var_core_value_sig2CD3.y : var_core_value_sig2CD3.y + var_core_value_sig9989
        }, {
          id: var_core_value_sig279C.idPrefix + "-curve-control-1",
          segmentIndex: 0,
          kind: "manual",
          x: var_core_value_sigAC51 ? var_core_value_sig038E.x - var_core_value_sig9989 : var_core_value_sig038E.x,
          y: var_core_value_sigAC51 ? var_core_value_sig038E.y : var_core_value_sig038E.y - var_core_value_sig9989
        }],
        tension: 0.5
      };
    })() : undefined;
  return {
    startSide: var_core_value_sigCAF7,
    endSide: var_core_value_sigED1C,
    startPoint: var_core_value_sig2CD3,
    endPoint: var_core_value_sig038E,
    startEndpoint: var_core_value_sigAA1E,
    routePoints: var_core_value_sig7EEA,
    curveData: var_core_value_sig59CE,
    transform: ke([var_core_value_sig2CD3, ...((var_core_value_sig59CE == null ? undefined : var_core_value_sig59CE.controls) ?? []), var_core_value_sig038E])
  };
}
function Ne(var_core_value_sig33C8) {
  if (!var_core_value_sig33C8.parentIsAxisNode) {
    let var_core_value_sig698E = "right",
      var_core_value_sig2809 = "left",
      var_core_value_sig2DAB = I(var_core_value_sig33C8.parentNode, var_core_value_sig698E),
      var_core_value_sig877E = I(var_core_value_sig33C8.childNode, var_core_value_sig2809),
      var_core_value_sig20C8 = De({
        idPrefix: var_core_value_sig33C8.idPrefix,
        parentNode: var_core_value_sig33C8.parentNode,
        childNode: var_core_value_sig33C8.childNode,
        side: "right"
      }),
      var_core_value_sigE9A7 = R(var_core_value_sig33C8.branchLineType) === "curve" ? Ae({
        idPrefix: var_core_value_sig33C8.idPrefix,
        parentNode: var_core_value_sig33C8.parentNode,
        childNode: var_core_value_sig33C8.childNode,
        side: "right"
      }) : undefined;
    return {
      startSide: var_core_value_sig698E,
      endSide: var_core_value_sig2809,
      startPoint: var_core_value_sig2DAB,
      endPoint: var_core_value_sig877E,
      routePoints: var_core_value_sig20C8,
      curveData: var_core_value_sigE9A7,
      transform: ke([var_core_value_sig2DAB, ...var_core_value_sig20C8, ...((var_core_value_sigE9A7 == null ? undefined : var_core_value_sigE9A7.controls) ?? []), var_core_value_sig877E])
    };
  }
  let var_core_value_sig957F = "left",
    var_core_value_sig803B = {
      x: (var_core_value_sig33C8.parentNode["transform"].left ?? 0) + (var_core_value_sig33C8.parentNode["transform"].width ?? 0) / 2,
      y: (var_core_value_sig33C8.parentNode["transform"].top ?? 0) + (var_core_value_sig33C8.parentNode["transform"].height ?? 0) / 2
    },
    var_core_value_sig5830 = I(var_core_value_sig33C8.childNode, var_core_value_sig957F),
    var_core_value_sig4A7C = var_core_value_sig803B.y === var_core_value_sig5830.y ? [] : [{
      id: var_core_value_sig33C8.idPrefix + "-route-0",
      kind: "manual",
      x: var_core_value_sig803B.x,
      y: var_core_value_sig5830.y
    }],
    var_core_value_sigF975 = R(var_core_value_sig33C8.branchLineType) === "curve" ? {
      controls: [{
        id: var_core_value_sig33C8.idPrefix + "-curve-control-0",
        segmentIndex: 0,
        kind: "manual",
        x: var_core_value_sig803B.x,
        y: var_core_value_sig803B.y + (var_core_value_sig5830.y - var_core_value_sig803B.y) / 2
      }, {
        id: var_core_value_sig33C8.idPrefix + "-curve-control-1",
        segmentIndex: 0,
        kind: "manual",
        x: var_core_value_sig5830.x - Math.max(48, Math.abs(var_core_value_sig5830.x - var_core_value_sig803B.x) / 2),
        y: var_core_value_sig5830.y
      }],
      tension: 0.5
    } : undefined;
  return {
    startSide: "left",
    endSide: var_core_value_sig957F,
    startPoint: var_core_value_sig803B,
    endPoint: var_core_value_sig5830,
    startEndpoint: {
      kind: "free",
      ...var_core_value_sig803B
    },
    routePoints: var_core_value_sig4A7C,
    curveData: var_core_value_sigF975,
    transform: ke([var_core_value_sig803B, ...var_core_value_sig4A7C, ...((var_core_value_sigF975 == null ? undefined : var_core_value_sigF975.controls) ?? []), var_core_value_sig5830])
  };
}
function Pe(var_core_value_sigCDAF) {
  let var_core_value_sigA298 = var_core_value_sigCDAF.side === "left" ? "left" : "right";
  if (!var_core_value_sigCDAF.parentIsAxisNode) {
    let {
        startSide: var_core_value_sigBECE,
        endSide: var_core_value_sig1B22
      } = L(var_core_value_sigA298),
      var_core_value_sig7F72 = I(var_core_value_sigCDAF.parentNode, var_core_value_sigBECE),
      var_core_value_sig7B2A = I(var_core_value_sigCDAF.childNode, var_core_value_sig1B22),
      var_core_value_sig06CD = De({
        idPrefix: var_core_value_sigCDAF.idPrefix,
        parentNode: var_core_value_sigCDAF.parentNode,
        childNode: var_core_value_sigCDAF.childNode,
        side: var_core_value_sigA298
      }),
      var_core_value_sigA5F1 = R(var_core_value_sigCDAF.branchLineType) === "curve" ? Ae({
        idPrefix: var_core_value_sigCDAF.idPrefix,
        parentNode: var_core_value_sigCDAF.parentNode,
        childNode: var_core_value_sigCDAF.childNode,
        side: var_core_value_sigA298
      }) : undefined;
    return {
      startSide: var_core_value_sigBECE,
      endSide: var_core_value_sig1B22,
      startPoint: var_core_value_sig7F72,
      endPoint: var_core_value_sig7B2A,
      routePoints: var_core_value_sig06CD,
      curveData: var_core_value_sigA5F1,
      transform: ke([var_core_value_sig7F72, ...var_core_value_sig06CD, ...((var_core_value_sigA5F1 == null ? undefined : var_core_value_sigA5F1.controls) ?? []), var_core_value_sig7B2A])
    };
  }
  let {
      startSide: var_core_value_sig0B40,
      endSide: var_core_value_sig330B
    } = L(var_core_value_sigA298),
    var_core_value_sig3625 = I(var_core_value_sigCDAF.parentNode, var_core_value_sig0B40),
    var_core_value_sig0B4E = I(var_core_value_sigCDAF.childNode, var_core_value_sig330B),
    var_core_value_sig0E9F = De({
      idPrefix: var_core_value_sigCDAF.idPrefix,
      parentNode: var_core_value_sigCDAF.parentNode,
      childNode: var_core_value_sigCDAF.childNode,
      side: var_core_value_sigA298,
      forceTrunk: var_core_value_sigCDAF.forceTrunk
    }),
    var_core_value_sigE5BA = R(var_core_value_sigCDAF.branchLineType) === "curve" ? Ae({
      idPrefix: var_core_value_sigCDAF.idPrefix,
      parentNode: var_core_value_sigCDAF.parentNode,
      childNode: var_core_value_sigCDAF.childNode,
      side: var_core_value_sigA298
    }) : undefined;
  return {
    startSide: var_core_value_sig0B40,
    endSide: var_core_value_sig330B,
    startPoint: var_core_value_sig3625,
    endPoint: var_core_value_sig0B4E,
    routePoints: var_core_value_sig0E9F,
    curveData: var_core_value_sigE5BA,
    transform: ke([var_core_value_sig3625, ...var_core_value_sig0E9F, ...((var_core_value_sigE5BA == null ? undefined : var_core_value_sigE5BA.controls) ?? []), var_core_value_sig0B4E])
  };
}
function Fe(var_core_value_sig4A83) {
  var var_core_value_sig58AA;
  let var_core_value_sig84C4 = var_core_value_sig4A83.custom;
  return (var_core_value_sig84C4 == null || (var_core_value_sig58AA = var_core_value_sig84C4.structured) == null ? undefined : var_core_value_sig58AA.modeId) === k && var_core_value_sig84C4.structured["semanticRole"] === A ? var_core_value_sig84C4.mindmap ?? null : null;
}
const Ie = 1 / 0;
function Le(var_core_value_sigB6F7) {
  return /[\u2E80-\u9FFF\uF900-\uFAFF\uFF00-\uFFEF]/u.test(var_core_value_sigB6F7);
}
function Re(var_core_value_sigB495, var_core_value_sig70D0, var_core_value_sig2A8A) {
  let var_core_value_sig3782 = 0,
    var_core_value_sigD22E = var_core_value_sig2A8A ? 1.08 : 1;
  return Array.from(var_core_value_sigB495).forEach(var_core_value_sig97A2 => {
    var_core_value_sig97A2 === "\x20" || var_core_value_sig97A2 === "\x09" || var_core_value_sig97A2 === "\u00a0" ? var_core_value_sig3782 += var_core_value_sig70D0 * 0.32 : Le(var_core_value_sig97A2) ? var_core_value_sig3782 += var_core_value_sig70D0 : /[\.,:;'"`!|ilI\[\]\(\)]/u.test(var_core_value_sig97A2) ? var_core_value_sig3782 += var_core_value_sig70D0 * 0.42 : var_core_value_sig3782 += var_core_value_sig70D0 * 0.72;
  }), var_core_value_sig3782 * var_core_value_sigD22E;
}
function ze(var_core_value_sig3455) {
  let var_core_value_sig5CEF = var_core_value_sig3455.replace(/\r\n/g, "\x0a").replace(/\r/g, "\x0a");
  return var_core_value_sig5CEF.length ? var_core_value_sig5CEF.split("\x0a") : [""];
}
function Be(var_core_value_sig43D5, var_core_value_sig1395) {
  return Number.isFinite(var_core_value_sig43D5) && var_core_value_sig43D5 > 0 ? var_core_value_sig43D5 : var_core_value_sig1395;
}
function Ve(var_core_value_sig9FA0) {
  var var_core_value_sig055E, var_core_value_sig7C77;
  let var_core_value_sig9578 = !(var_core_value_sig9FA0 != null && var_core_value_sig9FA0.parentNodeId);
  return {
    minWidth: (var_core_value_sig9FA0 == null || (var_core_value_sig055E = var_core_value_sig9FA0.size) == null ? undefined : var_core_value_sig055E.minWidth) ?? (var_core_value_sig9578 ? F.rootWidth : F.nodeWidth),
    minHeight: (var_core_value_sig9FA0 == null || (var_core_value_sig7C77 = var_core_value_sig9FA0.size) == null ? undefined : var_core_value_sig7C77.minHeight) ?? (var_core_value_sig9578 ? F.rootHeight : F.nodeHeight)
  };
}
function He(var_core_value_sigA2D3) {
  let var_core_value_sigC218 = ze(var_core_value_sigA2D3.text),
    var_core_value_sigADEC = Math.max(0, ...var_core_value_sigC218.map(var_core_value_sig07E9 => Re(var_core_value_sig07E9, var_core_value_sigA2D3.fontSize, var_core_value_sigA2D3.bold))),
    var_core_value_sig3D8E = var_core_value_sigA2D3.fontSize * Se.lineHeightRatio,
    var_core_value_sig37E5 = var_core_value_sigA2D3.minWidth >= F.rootWidth ? Se.root : Se.child,
    var_core_value_sigF079 = var_core_value_sig37E5.paddingX,
    var_core_value_sigFCA0 = var_core_value_sig37E5.paddingY,
    var_core_value_sigC84D = Be(var_core_value_sigA2D3.maxWidth ?? Ie, Ie),
    var_core_value_sigF2BC = Be(var_core_value_sigA2D3.maxHeight ?? 1 / 0, 1 / 0);
  return {
    width: Math.ceil(Math.min(var_core_value_sigC84D, Math.max(var_core_value_sigA2D3.minWidth, var_core_value_sigADEC + var_core_value_sigF079))),
    height: Math.ceil(Math.min(var_core_value_sigF2BC, Math.max(var_core_value_sigA2D3.minHeight, var_core_value_sigC218.length * var_core_value_sig3D8E + var_core_value_sigFCA0)))
  };
}
function Ue(var_core_value_sigD37B) {
  var var_core_value_sigFA28, var_core_value_sig93BE;
  if (typeof var_core_value_sigD37B.text == "string") return var_core_value_sigD37B.text;
  let var_core_value_sigABEC = (var_core_value_sigFA28 = var_core_value_sigD37B.dataModel) == null ? undefined : var_core_value_sigFA28.doc,
    var_core_value_sig2712 = var_core_value_sigABEC == null || (var_core_value_sig93BE = var_core_value_sigABEC.body) == null ? undefined : var_core_value_sig93BE.dataStream;
  return typeof var_core_value_sig2712 == "string" ? var_core_value_sig2712.replace(/\r\n$/u, "").replace(/\n$/u, "").replace(/\r$/u, "") : "";
}
function We(var_core_value_sig0B9E) {
  var var_core_value_sigC545, var_core_value_sig12A7, var_core_value_sig6F4E;
  let var_core_value_sigA021 = (var_core_value_sigC545 = var_core_value_sig0B9E.custom) == null ? undefined : var_core_value_sigC545.mindmap,
    var_core_value_sig49D9 = var_core_value_sig0B9E.shapeData["shapeText"] ?? {},
    var_core_value_sig320C = !(var_core_value_sigA021 != null && var_core_value_sigA021.parentNodeId),
    {
      minHeight: var_core_value_sigE7F0,
      minWidth: var_core_value_sigE837
    } = Ve(var_core_value_sigA021),
    var_core_value_sig34F4 = typeof var_core_value_sig49D9.fontSize == "number" ? var_core_value_sig49D9.fontSize : var_core_value_sig320C ? M.root["fontSize"] : M.child["fontSize"];
  return He({
    bold: var_core_value_sig49D9.bold === true,
    fontSize: var_core_value_sig34F4,
    maxHeight: var_core_value_sigA021 == null || (var_core_value_sig12A7 = var_core_value_sigA021.size) == null ? undefined : var_core_value_sig12A7.maxHeight,
    maxWidth: var_core_value_sigA021 == null || (var_core_value_sig6F4E = var_core_value_sigA021.size) == null ? undefined : var_core_value_sig6F4E.maxWidth,
    minHeight: var_core_value_sigE7F0,
    minWidth: var_core_value_sigE837,
    text: Ue(var_core_value_sig49D9)
  });
}
function Ge(var_core_value_sigA45D, var_core_value_sig1BC7) {
  if (var_core_value_sigA45D.element["type"] !== var_core_value_sig32E7.Shape) return null;
  let var_core_value_sig4956 = Fe(var_core_value_sigA45D.element);
  if (!var_core_value_sig4956) return null;
  let {
    minHeight: var_core_value_sigCC9E,
    minWidth: var_core_value_sig444C
  } = Ve(var_core_value_sig4956);
  return {
    width: Math.max(var_core_value_sig444C, Math.ceil(var_core_value_sig1BC7.width)),
    height: Math.max(var_core_value_sigCC9E, Math.ceil(var_core_value_sig1BC7.height))
  };
}
const Ke = var_core_value_sig8270("BOARD_SHAPE_TEXT");
function qe(var_core_value_sigE42E, var_core_value_sigF039) {
  return var_core_value_sigBBE4({
    ...var_core_value_sigE42E,
    ...((var_core_value_sigF039 == null ? undefined : var_core_value_sigF039.fontFamily) === undefined ? null : {
      fontFamily: var_core_value_sigF039.fontFamily
    }),
    ...((var_core_value_sigF039 == null ? undefined : var_core_value_sigF039.fontSize) === undefined ? null : {
      fontSize: var_core_value_sigF039.fontSize
    }),
    ...((var_core_value_sigF039 == null ? undefined : var_core_value_sigF039.color) === undefined ? null : {
      color: var_core_value_sigF039.color
    }),
    ...((var_core_value_sigF039 == null ? undefined : var_core_value_sigF039.bold) === undefined ? null : {
      bold: var_core_value_sigF039.bold
    }),
    ...((var_core_value_sigF039 == null ? undefined : var_core_value_sigF039.italic) === undefined ? null : {
      italic: var_core_value_sigF039.italic
    }),
    ...((var_core_value_sigF039 == null ? undefined : var_core_value_sigF039.underline) === undefined ? null : {
      underline: var_core_value_sigF039.underline
    }),
    ...((var_core_value_sigF039 == null ? undefined : var_core_value_sigF039.strikethrough) === undefined ? null : {
      strikethrough: var_core_value_sigF039.strikethrough
    }),
    ...((var_core_value_sigF039 == null ? undefined : var_core_value_sigF039.textFill) === undefined ? null : {
      textFill: var_core_value_sigF039.textFill
    })
  });
}
function Je(var_core_value_sigA321) {
  let var_core_value_sigBF4C = var_core_value_sig2CFC({
      bold: typeof var_core_value_sigA321.shapeText["bold"] == "boolean" ? var_core_value_sigA321.shapeText["bold"] : undefined,
      color: typeof var_core_value_sigA321.shapeText["color"] == "string" ? var_core_value_sigA321.shapeText["color"] : undefined,
      fontFamily: typeof var_core_value_sigA321.shapeText["fontFamily"] == "string" ? var_core_value_sigA321.shapeText["fontFamily"] : undefined,
      fontSize: typeof var_core_value_sigA321.shapeText["fontSize"] == "number" ? var_core_value_sigA321.shapeText["fontSize"] : undefined,
      horizontal: true,
      horizontalAlign: var_core_value_sigA321.horizontalAlign,
      id: Ke,
      italic: typeof var_core_value_sigA321.shapeText["italic"] == "boolean" ? var_core_value_sigA321.shapeText["italic"] : undefined,
      strikethrough: typeof var_core_value_sigA321.shapeText["strikethrough"] == "boolean" ? var_core_value_sigA321.shapeText["strikethrough"] : undefined,
      text: var_core_value_sigA321.text,
      textFill: var_core_value_sigA321.shapeText["textFill"],
      textStyle: var_core_value_sigA321.textStyle,
      underline: typeof var_core_value_sigA321.shapeText["underline"] == "boolean" ? var_core_value_sigA321.shapeText["underline"] : undefined,
      verticalAlign: var_core_value_sigA321.verticalAlign,
      wrapStrategy: var_core_value_sigC999.CLIP
    }),
    var_core_value_sig3457 = var_core_value_sigBF4C.dataModel && typeof var_core_value_sigBF4C.dataModel == "object" ? var_core_value_sigBF4C.dataModel : {},
    var_core_value_sig4A08 = var_core_value_sig3457.doc,
    var_core_value_sig1BC4 = var_core_value_sigA321.documentData ? var_core_value_sig5CEB(var_core_value_sig4A08, var_core_value_sigA321.documentData) : var_core_value_sig4A08;
  return {
    ...var_core_value_sigA321.shapeText,
    ...var_core_value_sigBF4C,
    isRichText: !!var_core_value_sigA321.documentData,
    dataModel: {
      ...(var_core_value_sigA321.currentDataModel ?? {}),
      ...var_core_value_sig3457,
      ...(var_core_value_sig1BC4 ? {
        doc: var_core_value_sig1BC4
      } : null)
    }
  };
}
const Ye = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
function Xe(var_core_value_sig9EAB, var_core_value_sigA5C3) {
  let var_core_value_sig3A1E = var_core_value_sig9EAB ?? "",
    var_core_value_sigDC92 = var_core_value_sigA5C3 ?? "",
    var_core_value_sig3515 = Math.max(var_core_value_sig3A1E.length, var_core_value_sigDC92.length);
  for (let var_core_value_sig4F59 = 0; var_core_value_sig4F59 < var_core_value_sig3515; var_core_value_sig4F59 += 1) {
    if (var_core_value_sig4F59 >= var_core_value_sig3A1E.length) return -1;
    if (var_core_value_sig4F59 >= var_core_value_sigDC92.length) return 1;
    let var_core_value_sigF704 = et(var_core_value_sig3A1E[var_core_value_sig4F59]),
      var_core_value_sig2BCF = et(var_core_value_sigDC92[var_core_value_sig4F59]);
    if (var_core_value_sigF704 < 0 || var_core_value_sig2BCF < 0) return var_core_value_sig3A1E.localeCompare(var_core_value_sigDC92);
    if (var_core_value_sigF704 !== var_core_value_sig2BCF) return var_core_value_sigF704 - var_core_value_sig2BCF;
  }
  return 0;
}
function Ze(var_core_value_sigC2A0, var_core_value_sig7C65) {
  let var_core_value_sig7F05 = $e(var_core_value_sigC2A0),
    var_core_value_sig41F3 = $e(var_core_value_sig7C65),
    var_core_value_sigF455 = "";
  for (let var_core_value_sigF564 = 0;; var_core_value_sigF564 += 1) {
    let var_core_value_sig0D69 = var_core_value_sigF564 < var_core_value_sig7F05.length ? et(var_core_value_sig7F05[var_core_value_sigF564]) : 0,
      var_core_value_sig480E = var_core_value_sigF564 < var_core_value_sig41F3.length ? et(var_core_value_sig41F3[var_core_value_sigF564]) : 61;
    if (var_core_value_sig0D69 < 0 || var_core_value_sig480E < 0) return Ze(undefined, undefined);
    if (var_core_value_sig480E - var_core_value_sig0D69 > 1) return "" + var_core_value_sigF455 + Ye[Math.floor((var_core_value_sig0D69 + var_core_value_sig480E) / 2)];
    var_core_value_sigF455 += Ye[var_core_value_sig0D69];
  }
}
function Qe(var_core_value_sig6E78) {
  let var_core_value_sigB3EE;
  for (let var_core_value_sig8CFA = 0; var_core_value_sig8CFA <= var_core_value_sig6E78; var_core_value_sig8CFA += 1) var_core_value_sigB3EE = Ze(var_core_value_sigB3EE, undefined);
  return var_core_value_sigB3EE ?? Ze(undefined, undefined);
}
function $e(var_core_value_sigC50A) {
  return [...(var_core_value_sigC50A ?? "")].every(var_core_value_sig2E11 => et(var_core_value_sig2E11) >= 0) ? var_core_value_sigC50A ?? "" : "";
}
function et(var_core_value_sig11D0) {
  return var_core_value_sig11D0 === undefined ? -1 : Ye.indexOf(var_core_value_sig11D0);
}
function z(var_core_value_sigB8ED) {
  return var_core_value_sigB8ED === "tree-right" || var_core_value_sigB8ED === "tree-left" || var_core_value_sigB8ED === "tree-alternate";
}
function B(var_core_value_sig8EAE) {
  return var_core_value_sig8EAE === "timeline-horizontal" || var_core_value_sig8EAE === "timeline-vertical";
}
function tt(var_core_value_sig1CDD) {
  return var_core_value_sig1CDD === "mindmap-horizontal" || var_core_value_sig1CDD === "mindmap-vertical";
}
function nt(var_core_value_sig0DB1, var_core_value_sig68A2) {
  let var_core_value_sigCC17 = var_core_value_sig68A2 ?? N.branchLineType;
  return var_core_value_sigCC17 === "curve" && !tt(var_core_value_sig0DB1 ?? N.structureKind) ? N.branchLineType : var_core_value_sigCC17;
}
function rt(var_core_value_sig32AE, var_core_value_sigC753) {
  return var_core_value_sig32AE.children["filter"](var_core_value_sig5B69 => (var_core_value_sig5B69.side ?? (var_core_value_sig32AE.parentId ? var_core_value_sigC753 : "right")) === var_core_value_sigC753);
}
function it(var_core_value_sigFFD1) {
  return var_core_value_sigFFD1.children;
}
function at(var_core_value_sig81AE, var_core_value_sigF79F, var_core_value_sig0E54) {
  if (var_core_value_sig81AE.collapsed) return var_core_value_sig81AE.height;
  let var_core_value_sig3B17 = rt(var_core_value_sig81AE, var_core_value_sigF79F);
  if (!var_core_value_sig3B17.length) return var_core_value_sig81AE.height;
  let var_core_value_sig6C4A = var_core_value_sig3B17.map(var_core_value_sigB098 => at(var_core_value_sigB098, var_core_value_sigF79F, var_core_value_sig0E54));
  return Math.max(var_core_value_sig81AE.height, var_core_value_sig6C4A.reduce((var_core_value_sigCE71, var_core_value_sig21D8) => var_core_value_sigCE71 + var_core_value_sig21D8, 0) + Math.max(0, var_core_value_sig6C4A.length - 1) * var_core_value_sig0E54);
}
function ot(var_core_value_sig73D9, var_core_value_sigEAF8, var_core_value_sig0455, var_core_value_sig737C, var_core_value_sig5AF5, var_core_value_sig9DE4) {
  if (var_core_value_sig5AF5.set(var_core_value_sig73D9.id, {
    left: var_core_value_sig0455,
    top: var_core_value_sig737C - var_core_value_sig73D9.height / 2
  }), var_core_value_sig73D9.collapsed) return;
  let var_core_value_sig77FA = rt(var_core_value_sig73D9, var_core_value_sigEAF8);
  if (!var_core_value_sig77FA.length) return;
  let var_core_value_sigA4A7 = var_core_value_sig77FA.map(var_core_value_sig2B65 => at(var_core_value_sig2B65, var_core_value_sigEAF8, var_core_value_sig9DE4.siblingGap)),
    var_core_value_sigA4DF = var_core_value_sig737C - (var_core_value_sigA4A7.reduce((var_core_value_sigD7EA, var_core_value_sigB33B) => var_core_value_sigD7EA + var_core_value_sigB33B, 0) + Math.max(0, var_core_value_sigA4A7.length - 1) * var_core_value_sig9DE4.siblingGap) / 2;
  var_core_value_sig77FA.forEach((var_core_value_sig24B9, var_core_value_sigE627) => {
    let var_core_value_sigEF3E = var_core_value_sigEAF8 === "right" ? var_core_value_sig0455 + var_core_value_sig73D9.width + var_core_value_sig9DE4.horizontalGap : var_core_value_sig0455 - var_core_value_sig9DE4.horizontalGap - var_core_value_sig24B9.width,
      var_core_value_sig273D = var_core_value_sigA4A7[var_core_value_sigE627];
    ot(var_core_value_sig24B9, var_core_value_sigEAF8, var_core_value_sigEF3E, var_core_value_sigA4DF + var_core_value_sig273D / 2, var_core_value_sig5AF5, var_core_value_sig9DE4), var_core_value_sigA4DF += var_core_value_sig273D + var_core_value_sig9DE4.siblingGap;
  });
}
function st(var_core_value_sigCC9D, var_core_value_sig90F5, var_core_value_sigD2BA) {
  if (var_core_value_sigCC9D.collapsed) return var_core_value_sigCC9D.width;
  let var_core_value_sigCD3A = rt(var_core_value_sigCC9D, var_core_value_sig90F5);
  if (!var_core_value_sigCD3A.length) return var_core_value_sigCC9D.width;
  let var_core_value_sig519D = var_core_value_sigCD3A.map(var_core_value_sig9A0D => st(var_core_value_sig9A0D, var_core_value_sig90F5, var_core_value_sigD2BA));
  return Math.max(var_core_value_sigCC9D.width, var_core_value_sig519D.reduce((var_core_value_sigA319, var_core_value_sig2D58) => var_core_value_sigA319 + var_core_value_sig2D58, 0) + Math.max(0, var_core_value_sig519D.length - 1) * var_core_value_sigD2BA);
}
function ct(var_core_value_sigC7E7, var_core_value_sig6E1C, var_core_value_sigFABC, var_core_value_sig413D, var_core_value_sig5BCE, var_core_value_sig8EF0) {
  if (var_core_value_sig5BCE.set(var_core_value_sigC7E7.id, {
    left: var_core_value_sigFABC - var_core_value_sigC7E7.width / 2,
    top: var_core_value_sig413D
  }), var_core_value_sigC7E7.collapsed) return;
  let var_core_value_sig78AC = rt(var_core_value_sigC7E7, var_core_value_sig6E1C);
  if (!var_core_value_sig78AC.length) return;
  let var_core_value_sig4CEF = var_core_value_sig78AC.map(var_core_value_sig223F => st(var_core_value_sig223F, var_core_value_sig6E1C, var_core_value_sig8EF0.siblingGap)),
    var_core_value_sigD57D = var_core_value_sigFABC - (var_core_value_sig4CEF.reduce((var_core_value_sigD749, var_core_value_sigCFFA) => var_core_value_sigD749 + var_core_value_sigCFFA, 0) + Math.max(0, var_core_value_sig4CEF.length - 1) * var_core_value_sig8EF0.siblingGap) / 2,
    var_core_value_sig2CC7 = var_core_value_sig6E1C === "bottom" ? var_core_value_sig413D + var_core_value_sigC7E7.height + var_core_value_sig8EF0.horizontalGap : var_core_value_sig413D - var_core_value_sig8EF0.horizontalGap;
  var_core_value_sig78AC.forEach((var_core_value_sig58C1, var_core_value_sig5090) => {
    let var_core_value_sigC368 = var_core_value_sig4CEF[var_core_value_sig5090],
      var_core_value_sigAD56 = var_core_value_sig6E1C === "bottom" ? var_core_value_sig2CC7 : var_core_value_sig2CC7 - var_core_value_sig58C1.height;
    ct(var_core_value_sig58C1, var_core_value_sig6E1C, var_core_value_sigD57D + var_core_value_sigC368 / 2, var_core_value_sigAD56, var_core_value_sig5BCE, var_core_value_sig8EF0), var_core_value_sigD57D += var_core_value_sigC368 + var_core_value_sig8EF0.siblingGap;
  });
}
function lt(var_core_value_sig4784, var_core_value_sigC39E) {
  if (var_core_value_sig4784.collapsed || !var_core_value_sig4784.children["length"]) return var_core_value_sig4784.height;
  let var_core_value_sig16C7 = var_core_value_sig4784.children["map"](var_core_value_sigDB4A => lt(var_core_value_sigDB4A, var_core_value_sigC39E));
  return Math.max(var_core_value_sig4784.height, var_core_value_sig16C7.reduce((var_core_value_sig6418, var_core_value_sig1896) => var_core_value_sig6418 + var_core_value_sig1896, 0) + Math.max(0, var_core_value_sig16C7.length - 1) * var_core_value_sigC39E.siblingGap);
}
function ut(var_core_value_sig7481, var_core_value_sig08A3, var_core_value_sig77D8, var_core_value_sig78A3, var_core_value_sig649B) {
  if (var_core_value_sig78A3.set(var_core_value_sig7481.id, {
    left: var_core_value_sig08A3,
    top: var_core_value_sig77D8 - var_core_value_sig7481.height / 2
  }), var_core_value_sig7481.collapsed || !var_core_value_sig7481.children["length"]) return;
  let var_core_value_sig6256 = var_core_value_sig7481.children["map"](var_core_value_sig0285 => lt(var_core_value_sig0285, var_core_value_sig649B)),
    var_core_value_sigE7A6 = var_core_value_sig77D8 - (var_core_value_sig6256.reduce((var_core_value_sig777D, var_core_value_sig3F4C) => var_core_value_sig777D + var_core_value_sig3F4C, 0) + Math.max(0, var_core_value_sig6256.length - 1) * var_core_value_sig649B.siblingGap) / 2,
    var_core_value_sigB505 = var_core_value_sig08A3 + var_core_value_sig7481.width + var_core_value_sig649B.horizontalGap;
  var_core_value_sig7481.children["forEach"]((var_core_value_sigD65A, var_core_value_sig5A13) => {
    let var_core_value_sigF593 = var_core_value_sig6256[var_core_value_sig5A13];
    ut(var_core_value_sigD65A, var_core_value_sigB505, var_core_value_sigE7A6 + var_core_value_sigF593 / 2, var_core_value_sig78A3, var_core_value_sig649B), var_core_value_sigE7A6 += var_core_value_sigF593 + var_core_value_sig649B.siblingGap;
  });
}
function dt(var_core_value_sig7428, var_core_value_sig1DCE, var_core_value_sig0567, var_core_value_sigA7F3, var_core_value_sigEACD, var_core_value_sig901E) {
  if (var_core_value_sig7428.collapsed || !var_core_value_sig7428.children["length"]) return;
  let var_core_value_sigF7BB = var_core_value_sig7428.children["map"](var_core_value_sig3607 => lt(var_core_value_sig3607, var_core_value_sig901E)),
    var_core_value_sigFA38 = var_core_value_sigF7BB.reduce((var_core_value_sigB512, var_core_value_sigF2E6) => var_core_value_sigB512 + var_core_value_sigF2E6, 0) + Math.max(0, var_core_value_sigF7BB.length - 1) * var_core_value_sig901E.siblingGap,
    var_core_value_sig102B = var_core_value_sig1DCE === "top" ? var_core_value_sigA7F3 - var_core_value_sig901E.horizontalGap - var_core_value_sigFA38 : var_core_value_sigA7F3 + var_core_value_sig7428.height + var_core_value_sig901E.horizontalGap,
    var_core_value_sigA7DB = var_core_value_sig0567 + var_core_value_sig7428.width + N.branchGap;
  var_core_value_sig7428.children["forEach"]((var_core_value_sig34C8, var_core_value_sigB744) => {
    let var_core_value_sigEAE2 = var_core_value_sigF7BB[var_core_value_sigB744];
    ut(var_core_value_sig34C8, var_core_value_sigA7DB, var_core_value_sig102B + var_core_value_sigEAE2 / 2, var_core_value_sigEACD, var_core_value_sig901E), var_core_value_sig102B += var_core_value_sigEAE2 + var_core_value_sig901E.siblingGap;
  });
}
function ft(var_core_value_sig5EEE, var_core_value_sig65B4, var_core_value_sigF98E) {
  let var_core_value_sigA470 = new Map(),
    var_core_value_sig19A1 = var_core_value_sig65B4.rootLeft + var_core_value_sig5EEE.width / 2;
  return var_core_value_sigA470.set(var_core_value_sig5EEE.id, {
    left: var_core_value_sig65B4.rootLeft,
    top: var_core_value_sig65B4.rootTop
  }), ["top", "bottom"].forEach(var_core_value_sigE68A => {
    let var_core_value_sig3E68 = rt(var_core_value_sig5EEE, var_core_value_sigE68A);
    if (!var_core_value_sig3E68.length) return;
    let var_core_value_sigF4C5 = var_core_value_sig3E68.map(var_core_value_sig26DB => st(var_core_value_sig26DB, var_core_value_sigE68A, var_core_value_sigF98E.siblingGap)),
      var_core_value_sig5410 = var_core_value_sigF4C5.reduce((var_core_value_sigF0F9, var_core_value_sig1A0F) => var_core_value_sigF0F9 + var_core_value_sig1A0F, 0) + Math.max(0, var_core_value_sigF4C5.length - 1) * var_core_value_sigF98E.siblingGap,
      var_core_value_sig492F = var_core_value_sig19A1 - var_core_value_sig5410 / 2,
      var_core_value_sig8EA0 = var_core_value_sigE68A === "bottom" ? var_core_value_sig65B4.rootTop + var_core_value_sig5EEE.height + var_core_value_sigF98E.horizontalGap : var_core_value_sig65B4.rootTop - var_core_value_sigF98E.horizontalGap;
    var_core_value_sig3E68.forEach((var_core_value_sigFBA4, var_core_value_sig4383) => {
      let var_core_value_sig186C = var_core_value_sigF4C5[var_core_value_sig4383],
        var_core_value_sigD955 = var_core_value_sigE68A === "bottom" ? var_core_value_sig8EA0 : var_core_value_sig8EA0 - var_core_value_sigFBA4.height;
      ct(var_core_value_sigFBA4, var_core_value_sigE68A, var_core_value_sig492F + var_core_value_sig186C / 2, var_core_value_sigD955, var_core_value_sigA470, var_core_value_sigF98E), var_core_value_sig492F += var_core_value_sig186C + var_core_value_sigF98E.siblingGap;
    });
  }), var_core_value_sigA470;
}
function pt(var_core_value_sig81F7, var_core_value_sigBE51, var_core_value_sigAAD1, var_core_value_sigBC1A, var_core_value_sig3F3A, var_core_value_sigA984) {
  if (var_core_value_sigBE51 === "top" || var_core_value_sigBE51 === "bottom") {
    ct(var_core_value_sig81F7, var_core_value_sigBE51, var_core_value_sigAAD1 + var_core_value_sig81F7.width / 2, var_core_value_sigBC1A, var_core_value_sig3F3A, var_core_value_sigA984);
    return;
  }
  ot(var_core_value_sig81F7, var_core_value_sigBE51, var_core_value_sigAAD1, var_core_value_sigBC1A + var_core_value_sig81F7.height / 2, var_core_value_sig3F3A, var_core_value_sigA984);
}
function mt(var_core_value_sigA504, var_core_value_sig05FF, var_core_value_sigFBF0) {
  let var_core_value_sig2F95 = new Map(),
    var_core_value_sigF0E1 = it(var_core_value_sigA504),
    var_core_value_sig2D8D = var_core_value_sig05FF.rootLeft + var_core_value_sigA504.width / 2,
    var_core_value_sigE5A6 = N.timelineAxisGap;
  var_core_value_sig2F95.set(var_core_value_sigA504.id, {
    left: var_core_value_sig05FF.rootLeft,
    top: var_core_value_sig05FF.rootTop
  });
  let var_core_value_sigF449 = var_core_value_sig05FF.rootTop + var_core_value_sigA504.height + var_core_value_sigE5A6;
  return var_core_value_sigF0E1.forEach(var_core_value_sigA6F6 => {
    let var_core_value_sigCDDA = var_core_value_sigA6F6.side === "left" ? "left" : "right",
      var_core_value_sigE243 = at(var_core_value_sigA6F6, var_core_value_sigCDDA, var_core_value_sigFBF0.siblingGap);
    pt(var_core_value_sigA6F6, var_core_value_sigCDDA, var_core_value_sigCDDA === "left" ? var_core_value_sig2D8D - var_core_value_sigFBF0.horizontalGap - var_core_value_sigA6F6.width : var_core_value_sig2D8D + var_core_value_sigFBF0.horizontalGap, var_core_value_sigF449 + var_core_value_sigE243 / 2 - var_core_value_sigA6F6.height / 2, var_core_value_sig2F95, var_core_value_sigFBF0), var_core_value_sigF449 += var_core_value_sigE243 + var_core_value_sigFBF0.siblingGap;
  }), var_core_value_sig2F95;
}
function ht(var_core_value_sig38C5, var_core_value_sigC87D, var_core_value_sigCCDC) {
  let var_core_value_sigC310 = new Map(),
    var_core_value_sigA4E8 = it(var_core_value_sig38C5),
    var_core_value_sigDC07 = var_core_value_sigC87D.rootTop + var_core_value_sig38C5.height / 2,
    var_core_value_sig3474 = N.timelineAxisGap;
  var_core_value_sigC310.set(var_core_value_sig38C5.id, {
    left: var_core_value_sigC87D.rootLeft,
    top: var_core_value_sigC87D.rootTop
  });
  let var_core_value_sig4E80 = var_core_value_sigC87D.rootLeft + var_core_value_sig38C5.width + var_core_value_sig3474;
  return var_core_value_sigA4E8.forEach(var_core_value_sig74A8 => {
    let var_core_value_sig21B2 = var_core_value_sig74A8.side === "bottom" ? "bottom" : "top",
      var_core_value_sigDE08 = var_core_value_sigDC07 - var_core_value_sig74A8.height / 2;
    var_core_value_sigC310.set(var_core_value_sig74A8.id, {
      left: var_core_value_sig4E80,
      top: var_core_value_sigDE08
    }), dt(var_core_value_sig74A8, var_core_value_sig21B2, var_core_value_sig4E80, var_core_value_sigDE08, var_core_value_sigC310, var_core_value_sigCCDC), var_core_value_sig4E80 += var_core_value_sig74A8.width + var_core_value_sig3474;
  }), var_core_value_sigC310;
}
function gt(var_core_value_sigD23B, var_core_value_sig2B2A, var_core_value_sig0B5C) {
  let var_core_value_sig7D42 = new Map(),
    var_core_value_sig8FDE = it(var_core_value_sigD23B),
    var_core_value_sig78E6 = var_core_value_sig2B2A.rootLeft + var_core_value_sigD23B.width / 2,
    var_core_value_sig541F = N.timelineAxisGap;
  var_core_value_sig7D42.set(var_core_value_sigD23B.id, {
    left: var_core_value_sig2B2A.rootLeft,
    top: var_core_value_sig2B2A.rootTop
  });
  let var_core_value_sig417B = var_core_value_sig2B2A.rootTop + var_core_value_sigD23B.height + var_core_value_sig541F;
  return var_core_value_sig8FDE.forEach(var_core_value_sigACCB => {
    let var_core_value_sig7F33 = var_core_value_sigACCB.side === "right" ? "right" : "left",
      var_core_value_sig0C53 = var_core_value_sig7F33 === "left" ? var_core_value_sig78E6 - N.branchGap - var_core_value_sigACCB.width : var_core_value_sig78E6 + N.branchGap;
    if (var_core_value_sig7D42.set(var_core_value_sigACCB.id, {
      left: var_core_value_sig0C53,
      top: var_core_value_sig417B
    }), !var_core_value_sigACCB.collapsed) {
      let var_core_value_sig48BD = rt(var_core_value_sigACCB, var_core_value_sig7F33),
        var_core_value_sig429F = var_core_value_sig48BD.map(var_core_value_sig7524 => at(var_core_value_sig7524, var_core_value_sig7F33, var_core_value_sig0B5C.siblingGap)),
        var_core_value_sigF62A = var_core_value_sig429F.reduce((var_core_value_sig2AD8, var_core_value_sig2AD0) => var_core_value_sig2AD8 + var_core_value_sig2AD0, 0) + Math.max(0, var_core_value_sig429F.length - 1) * var_core_value_sig0B5C.siblingGap,
        var_core_value_sig8178 = var_core_value_sig417B + var_core_value_sigACCB.height / 2 - var_core_value_sigF62A / 2;
      var_core_value_sig48BD.forEach((var_core_value_sig3EEE, var_core_value_sigBC46) => {
        let var_core_value_sig3D7D = var_core_value_sig7F33 === "left" ? var_core_value_sig0C53 - var_core_value_sig0B5C.horizontalGap - var_core_value_sig3EEE.width : var_core_value_sig0C53 + var_core_value_sigACCB.width + var_core_value_sig0B5C.horizontalGap,
          var_core_value_sig27E5 = var_core_value_sig429F[var_core_value_sigBC46];
        ot(var_core_value_sig3EEE, var_core_value_sig7F33, var_core_value_sig3D7D, var_core_value_sig8178 + var_core_value_sig27E5 / 2, var_core_value_sig7D42, var_core_value_sig0B5C), var_core_value_sig8178 += var_core_value_sig27E5 + var_core_value_sig0B5C.siblingGap;
      });
    }
    var_core_value_sig417B += var_core_value_sigACCB.height + var_core_value_sig541F;
  }), var_core_value_sig7D42;
}
function _t(var_core_value_sigAA90, var_core_value_sigE92D) {
  let var_core_value_sig9940 = {
      horizontalGap: var_core_value_sigE92D.horizontalGap ?? N.horizontalGap,
      siblingGap: var_core_value_sigE92D.siblingGap ?? N.siblingGap
    },
    var_core_value_sig682D = var_core_value_sigE92D.structureKind ?? N.structureKind;
  if (var_core_value_sig682D === "mindmap-vertical") return ft(var_core_value_sigAA90, var_core_value_sigE92D, var_core_value_sig9940);
  if (var_core_value_sig682D === "tree-right" || var_core_value_sig682D === "tree-left" || var_core_value_sig682D === "tree-alternate") return mt(var_core_value_sigAA90, var_core_value_sigE92D, var_core_value_sig9940);
  if (var_core_value_sig682D === "timeline-horizontal") return ht(var_core_value_sigAA90, var_core_value_sigE92D, var_core_value_sig9940);
  if (var_core_value_sig682D === "timeline-vertical") return gt(var_core_value_sigAA90, var_core_value_sigE92D, var_core_value_sig9940);
  let var_core_value_sig1435 = new Map(),
    var_core_value_sig4082 = var_core_value_sigE92D.rootTop + var_core_value_sigAA90.height / 2;
  return ot(var_core_value_sigAA90, "right", var_core_value_sigE92D.rootLeft, var_core_value_sig4082, var_core_value_sig1435, var_core_value_sig9940), ot(var_core_value_sigAA90, "left", var_core_value_sigE92D.rootLeft, var_core_value_sig4082, var_core_value_sig1435, var_core_value_sig9940), var_core_value_sig1435;
}
function vt(var_core_value_sigC049, var_core_value_sigE5C3) {
  return var_core_value_sigC049 === "timeline-horizontal" ? var_core_value_sigE5C3 % 2 == 0 ? "top" : "bottom" : var_core_value_sigC049 === "timeline-vertical" && var_core_value_sigE5C3 % 2 == 0 ? "left" : "right";
}
function yt(var_core_value_sigCCAA, var_core_value_sigF32D) {
  return {
    modeId: k,
    structureScopeId: var_core_value_sigCCAA,
    semanticRole: var_core_value_sigF32D
  };
}
function bt(var_core_value_sig9427) {
  let var_core_value_sig21F4 = var_core_value_sig9427.structureKind ?? N.structureKind,
    var_core_value_sigA345 = nt(var_core_value_sig21F4, var_core_value_sig9427.branchLineType),
    var_core_value_sigA468 = var_core_value_sig2FCA({
      id: var_core_value_sig9427.id,
      left: var_core_value_sig9427.left,
      top: var_core_value_sig9427.top,
      width: var_core_value_sig9427.width,
      height: var_core_value_sig9427.height,
      title: "Mind Map",
      fillColor: M.container["fillColor"],
      strokeColor: M.container["strokeColor"],
      strokeWidth: 0,
      membershipLocked: true
    });
  return var_core_value_sigA468.containerData = {
    ...var_core_value_sigA468.containerData,
    titleVisible: false,
    shapeData: {
      ...var_core_value_sigA468.containerData["shapeData"],
      fill: {
        ...var_core_value_sigA468.containerData["shapeData"].fill,
        fillType: var_core_value_sigAD84.NoFill
      },
      stroke: {
        ...var_core_value_sigA468.containerData["shapeData"].stroke,
        lineStrokeType: var_core_value_sigD513.NoLine
      }
    },
    behavior: {
      ...var_core_value_sigA468.containerData["behavior"],
      acceptsChildren: true,
      acceptsContainer: false,
      allowNested: false,
      autoCapture: false,
      autoResize: false,
      membershipLocked: true,
      clipChildren: false,
      membershipAwareness: "structural"
    },
    capturePolicy: {
      ...var_core_value_sigA468.containerData["capturePolicy"],
      enabled: false,
      allowCaptureContainer: false,
      allowCaptureFromAncestorContainer: false,
      allowCaptureFromSiblingContainer: false
    },
    custom: {
      ...(var_core_value_sigA468.containerData["custom"] ?? {})
    }
  }, var_core_value_sigA468.custom = {
    structured: yt(var_core_value_sig9427.id, ye),
    mindmap: {
      presentation: "implicit",
      boundsMode: "auto-fit",
      rootNodeId: var_core_value_sig9427.rootNodeId,
      layout: {
        ...N,
        structureKind: var_core_value_sig21F4,
        branchLineType: var_core_value_sigA345
      },
      themeId: "default",
      structureRevision: 1
    }
  }, var_core_value_sigA468;
}
function xt(var_core_value_sig1561) {
  let var_core_value_sigDF14 = var_core_value_sig04F2({
      id: var_core_value_sig1561.id,
      parentId: var_core_value_sig1561.parentId,
      left: var_core_value_sig1561.left,
      top: var_core_value_sig1561.top,
      width: var_core_value_sig1561.width,
      height: var_core_value_sig1561.height,
      text: var_core_value_sig1561.text,
      horizontal: true
    }),
    var_core_value_sig842F = var_core_value_sig1561.parentNodeId ? M.child : M.root,
    var_core_value_sigC4C0 = var_core_value_sig842F.fillColor,
    var_core_value_sig214A = var_core_value_sig842F.strokeColor,
    var_core_value_sigCCC3 = var_core_value_sig842F.textColor,
    var_core_value_sig986E = var_core_value_sig842F.fontSize,
    var_core_value_sig537C = {
      fs: var_core_value_sig986E,
      cl: {
        rgb: var_core_value_sigCCC3
      }
    },
    var_core_value_sigBBBC = var_core_value_sig1561.parentNodeId ? var_core_value_sigD11F.LEFT : var_core_value_sigD11F.CENTER,
    var_core_value_sig5440 = var_core_value_sig1293.MIDDLE,
    var_core_value_sigE28B = {
      ...Je({
        horizontalAlign: var_core_value_sigBBBC,
        shapeText: {
          color: var_core_value_sigCCC3,
          fontSize: var_core_value_sig986E
        },
        text: var_core_value_sig1561.text,
        documentData: var_core_value_sig1561.textData,
        textStyle: var_core_value_sig537C,
        verticalAlign: var_core_value_sig5440
      }),
      fontSize: var_core_value_sig986E,
      color: var_core_value_sigCCC3,
      horizontalAlign: var_core_value_sigBBBC,
      verticalAlign: var_core_value_sig5440
    };
  return var_core_value_sigDF14.shapeData = {
    ...var_core_value_sigDF14.shapeData,
    shapeType: var_core_value_sig0413.RoundRect,
    fill: {
      fillType: var_core_value_sigAD84.SolidFill,
      color: var_core_value_sigC4C0
    },
    stroke: {
      lineStrokeType: var_core_value_sigD513.SolidLine,
      color: var_core_value_sig214A,
      width: 2
    },
    textRectPadding: {
      ...Ce
    },
    isTextBox: true,
    shapeText: var_core_value_sigE28B
  }, var_core_value_sigDF14.custom = {
    structured: yt(var_core_value_sig1561.scopeId, A),
    mindmap: {
      parentNodeId: var_core_value_sig1561.parentNodeId,
      orderKey: var_core_value_sig1561.orderKey,
      ...(var_core_value_sig1561.side ? {
        side: var_core_value_sig1561.side
      } : null),
      collapsed: var_core_value_sig1561.collapsed ?? false,
      size: {
        minWidth: var_core_value_sig1561.parentNodeId ? F.nodeWidth : F.rootWidth,
        minHeight: var_core_value_sig1561.parentNodeId ? F.nodeHeight : F.rootHeight
      },
      ...(var_core_value_sig1561.foreignAttributes ? {
        foreignAttributes: var_core_value_sig1561.foreignAttributes
      } : null),
      ...(var_core_value_sig1561.branchColorKey ? {
        branchColorKey: var_core_value_sig1561.branchColorKey
      } : null)
    }
  }, var_core_value_sigDF14;
}
function St(var_core_value_sig0FD9) {
  var var_core_value_sig5649;
  let var_core_value_sigAF82 = !var_core_value_sig0FD9.parentNodeId,
    var_core_value_sig21A2 = {
      width: var_core_value_sigAF82 ? F.rootWidth : F.nodeWidth,
      height: var_core_value_sigAF82 ? F.rootHeight : F.nodeHeight
    },
    var_core_value_sig5C1D = ((var_core_value_sig5649 = var_core_value_sig0FD9.textData) == null || (var_core_value_sig5649 = var_core_value_sig5649.body) == null ? undefined : var_core_value_sig5649.textRuns) ?? [],
    var_core_value_sig4CBA = var_core_value_sigAF82 ? M.root["fontSize"] : M.child["fontSize"],
    var_core_value_sig8E65 = var_core_value_sig5C1D.reduce((var_core_value_sigEA04, var_core_value_sig7A62) => {
      var var_core_value_sig8109;
      return Math.max(var_core_value_sigEA04, ((var_core_value_sig8109 = var_core_value_sig7A62.ts) == null ? undefined : var_core_value_sig8109.fs) ?? var_core_value_sigEA04);
    }, var_core_value_sig4CBA);
  return He({
    bold: var_core_value_sig5C1D.some(var_core_value_sig7565 => {
      var var_core_value_sigD4FB;
      return ((var_core_value_sigD4FB = var_core_value_sig7565.ts) == null ? undefined : var_core_value_sigD4FB.bl) === var_core_value_sig96B3.TRUE;
    }),
    fontSize: var_core_value_sig8E65,
    minWidth: var_core_value_sig21A2.width,
    minHeight: var_core_value_sig21A2.height,
    text: var_core_value_sig0FD9.text
  });
}
function Ct(var_core_value_sig772C) {
  let var_core_value_sigF309 = R(var_core_value_sig772C.branchLineType),
    var_core_value_sig44F9 = H(var_core_value_sig772C.parentNode),
    var_core_value_sigE532 = var_core_value_sig772C.timelineRootStructureKind ? Me({
      idPrefix: var_core_value_sig772C.id,
      parentNode: var_core_value_sig772C.parentNode,
      childNode: var_core_value_sig772C.childNode,
      previousAxisNode: var_core_value_sig772C.timelinePreviousAxisNode,
      structureKind: var_core_value_sig772C.timelineRootStructureKind,
      childSide: var_core_value_sig772C.side,
      branchLineType: var_core_value_sigF309
    }) : var_core_value_sig772C.timelineHorizontalRootNodeId && (var_core_value_sig44F9 == null ? undefined : var_core_value_sig44F9.parentNodeId) !== null ? Ne({
      idPrefix: var_core_value_sig772C.id,
      parentNode: var_core_value_sig772C.parentNode,
      childNode: var_core_value_sig772C.childNode,
      parentIsAxisNode: (var_core_value_sig44F9 == null ? undefined : var_core_value_sig44F9.parentNodeId) === var_core_value_sig772C.timelineHorizontalRootNodeId,
      branchLineType: var_core_value_sigF309
    }) : var_core_value_sig772C.timelineVerticalRootNodeId && (var_core_value_sig44F9 == null ? undefined : var_core_value_sig44F9.parentNodeId) !== null ? Pe({
      idPrefix: var_core_value_sig772C.id,
      parentNode: var_core_value_sig772C.parentNode,
      childNode: var_core_value_sig772C.childNode,
      parentIsAxisNode: (var_core_value_sig44F9 == null ? undefined : var_core_value_sig44F9.parentNodeId) === var_core_value_sig772C.timelineVerticalRootNodeId,
      side: var_core_value_sig772C.side,
      branchLineType: var_core_value_sigF309,
      forceTrunk: var_core_value_sig772C.forceTrunk
    }) : var_core_value_sig772C.treeRootTrunk ? je({
      idPrefix: var_core_value_sig772C.id,
      parentNode: var_core_value_sig772C.parentNode,
      childNode: var_core_value_sig772C.childNode,
      side: var_core_value_sig772C.side,
      branchLineType: var_core_value_sigF309
    }) : null,
    {
      startSide: var_core_value_sigF381,
      endSide: var_core_value_sigCB92
    } = var_core_value_sigE532 ?? L(var_core_value_sig772C.side),
    var_core_value_sigC844 = (var_core_value_sigE532 == null ? undefined : var_core_value_sigE532.startPoint) ?? I(var_core_value_sig772C.parentNode, var_core_value_sigF381),
    var_core_value_sig2ED4 = (var_core_value_sigE532 == null ? undefined : var_core_value_sigE532.endPoint) ?? I(var_core_value_sig772C.childNode, var_core_value_sigCB92),
    var_core_value_sig0477 = (var_core_value_sigE532 == null ? undefined : var_core_value_sigE532.routePoints) ?? De({
      idPrefix: var_core_value_sig772C.id,
      parentNode: var_core_value_sig772C.parentNode,
      childNode: var_core_value_sig772C.childNode,
      side: var_core_value_sig772C.side,
      forceTrunk: var_core_value_sig772C.forceTrunk
    }),
    var_core_value_sig6FDF = (var_core_value_sigE532 == null ? undefined : var_core_value_sigE532.curveData) ?? (var_core_value_sigF309 === "curve" ? Ae({
      idPrefix: var_core_value_sig772C.id,
      parentNode: var_core_value_sig772C.parentNode,
      childNode: var_core_value_sig772C.childNode,
      side: var_core_value_sig772C.side
    }) : undefined),
    var_core_value_sig27C4 = var_core_value_sig48E2({
      id: var_core_value_sig772C.id,
      start: (var_core_value_sigE532 == null ? undefined : var_core_value_sigE532.startEndpoint) ?? we(var_core_value_sig772C.parentNode["id"], var_core_value_sigF381, var_core_value_sigC844),
      end: (var_core_value_sigE532 == null ? undefined : var_core_value_sigE532.endEndpoint) ?? we(var_core_value_sig772C.childNode["id"], var_core_value_sigCB92, var_core_value_sig2ED4),
      routing: var_core_value_sigF309 === "curve" ? "curve" : "orthogonal",
      routingMode: "manual",
      waypoints: var_core_value_sigF309 === "curve" ? [] : var_core_value_sig0477,
      orthogonalData: var_core_value_sigF309 === "curve" ? undefined : {
        routePoints: var_core_value_sig0477
      },
      curveData: var_core_value_sig6FDF,
      transform: (var_core_value_sigE532 == null ? undefined : var_core_value_sigE532.transform) ?? Oe({
        parentNode: var_core_value_sig772C.parentNode,
        childNode: var_core_value_sig772C.childNode,
        side: var_core_value_sig772C.side,
        routePoints: var_core_value_sig0477,
        curveData: var_core_value_sig6FDF
      }),
      style: {
        stroke: M.connector["strokeColor"],
        strokeWidth: 2,
        opacity: 1,
        cornerStyle: var_core_value_sigF309 === "orthogonal" ? "miter" : "rounded"
      }
    });
  return var_core_value_sig27C4.parentId = var_core_value_sig772C.scopeId, var_core_value_sig27C4.custom = {
    structured: yt(var_core_value_sig772C.scopeId, j),
    mindmap: {
      managed: true,
      parentNodeId: var_core_value_sig772C.parentNode["id"],
      childNodeId: var_core_value_sig772C.childNode["id"]
    }
  }, var_core_value_sig27C4;
}
function wt(var_core_value_sig3E1A, var_core_value_sig7FB0) {
  return {
    ...var_core_value_sig3E1A,
    transform: {
      ...var_core_value_sig3E1A.transform,
      left: (var_core_value_sig3E1A.transform["left"] ?? 0) - (var_core_value_sig7FB0.transform["left"] ?? 0),
      top: (var_core_value_sig3E1A.transform["top"] ?? 0) - (var_core_value_sig7FB0.transform["top"] ?? 0)
    }
  };
}
function Tt(var_core_value_sig5215) {
  return B(var_core_value_sig5215.structureKind) ? [var_core_value_sig5215.container, ...var_core_value_sig5215.connectors, ...var_core_value_sig5215.nodes] : [var_core_value_sig5215.container, ...var_core_value_sig5215.nodes, ...var_core_value_sig5215.connectors];
}
function Et(var_core_value_sig5204) {
  let var_core_value_sig5E11 = var_core_value_sig5204.containerId ?? var_core_value_sig95D9(6),
    var_core_value_sig4D58 = var_core_value_sig5204.rootNodeId ?? var_core_value_sig95D9(6),
    var_core_value_sig2DBD = var_core_value_sig5204.children ?? [],
    var_core_value_sig424E = var_core_value_sig5204.rootText ?? "Add\x20text",
    var_core_value_sigF481 = nt(var_core_value_sig5204.structureKind, var_core_value_sig5204.branchLineType),
    var_core_value_sigD7F2 = St({
      parentNodeId: null,
      text: var_core_value_sig424E
    }),
    var_core_value_sig7CF3 = F.containerPadding,
    var_core_value_sig9DC6 = var_core_value_sig2DBD.map((var_core_value_sig3E71, var_core_value_sig01B3) => ({
      ...var_core_value_sig3E71,
      nodeId: var_core_value_sig3E71.nodeId ?? var_core_value_sig95D9(6),
      connectorId: var_core_value_sig3E71.connectorId ?? var_core_value_sig95D9(6),
      orderKey: var_core_value_sig3E71.orderKey ?? Qe(var_core_value_sig01B3),
      side: var_core_value_sig3E71.side ?? vt(var_core_value_sig5204.structureKind, var_core_value_sig01B3),
      text: var_core_value_sig3E71.text ?? "Add\x20text"
    })),
    var_core_value_sig6643 = _t({
      id: var_core_value_sig4D58,
      parentId: null,
      width: var_core_value_sigD7F2.width,
      height: var_core_value_sigD7F2.height,
      children: var_core_value_sig9DC6.map(var_core_value_sig7442 => ({
        id: var_core_value_sig7442.nodeId,
        parentId: var_core_value_sig4D58,
        side: var_core_value_sig7442.side,
        collapsed: var_core_value_sig7442.collapsed,
        ...St({
          parentNodeId: var_core_value_sig4D58,
          text: var_core_value_sig7442.text,
          textData: var_core_value_sig7442.textData
        }),
        children: []
      }))
    }, {
      rootLeft: var_core_value_sig5204.left,
      rootTop: var_core_value_sig5204.top,
      structureKind: var_core_value_sig5204.structureKind,
      horizontalGap: N.horizontalGap,
      siblingGap: N.siblingGap
    }),
    var_core_value_sig4124 = var_core_value_sig6643.get(var_core_value_sig4D58) ?? {
      left: var_core_value_sig5204.left,
      top: var_core_value_sig5204.top
    },
    var_core_value_sigBF1C = var_core_value_sig9DC6.reduce((var_core_value_sigDF87, var_core_value_sig9EE0) => (var_core_value_sigDF87[var_core_value_sig9EE0.side] += 1, var_core_value_sigDF87), {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }),
    var_core_value_sigEEEF = z(var_core_value_sig5204.structureKind),
    var_core_value_sig9A01 = B(var_core_value_sig5204.structureKind) ? var_core_value_sig5204.structureKind : undefined,
    var_core_value_sig674F = xt({
      id: var_core_value_sig4D58,
      scopeId: var_core_value_sig5E11,
      parentId: var_core_value_sig5E11,
      parentNodeId: null,
      orderKey: "a0",
      text: var_core_value_sig424E,
      left: var_core_value_sig4124.left,
      top: var_core_value_sig4124.top,
      width: var_core_value_sigD7F2.width,
      height: var_core_value_sigD7F2.height
    }),
    var_core_value_sigC8F6 = var_core_value_sig9DC6.map(var_core_value_sigF051 => {
      let var_core_value_sig0B45 = var_core_value_sig6643.get(var_core_value_sigF051.nodeId) ?? {
        left: var_core_value_sig5204.left,
        top: var_core_value_sig5204.top
      };
      return xt({
        id: var_core_value_sigF051.nodeId,
        scopeId: var_core_value_sig5E11,
        parentId: var_core_value_sig5E11,
        parentNodeId: var_core_value_sig4D58,
        orderKey: var_core_value_sigF051.orderKey,
        side: var_core_value_sigF051.side,
        text: var_core_value_sigF051.text,
        textData: var_core_value_sigF051.textData,
        left: var_core_value_sig0B45.left,
        top: var_core_value_sig0B45.top,
        ...St({
          parentNodeId: var_core_value_sig4D58,
          text: var_core_value_sigF051.text,
          textData: var_core_value_sigF051.textData
        }),
        collapsed: var_core_value_sigF051.collapsed,
        foreignAttributes: var_core_value_sigF051.foreignAttributes,
        branchColorKey: var_core_value_sigF051.branchColorKey ?? "branch-" + var_core_value_sigF051.orderKey
      });
    }),
    var_core_value_sig8A26 = var_core_value_sigC8F6.map((var_core_value_sig36F8, var_core_value_sig03E1) => {
      var var_core_value_sigBB57;
      let var_core_value_sig7C4A = ((var_core_value_sigBB57 = H(var_core_value_sig36F8)) == null ? undefined : var_core_value_sigBB57.side) ?? "right";
      return Ct({
        id: var_core_value_sig9DC6[var_core_value_sig03E1].connectorId,
        scopeId: var_core_value_sig5E11,
        parentNode: var_core_value_sig674F,
        childNode: var_core_value_sig36F8,
        side: var_core_value_sig7C4A,
        branchLineType: var_core_value_sigF481,
        forceTrunk: var_core_value_sigBF1C[var_core_value_sig7C4A] > 1,
        treeRootTrunk: var_core_value_sigEEEF,
        timelineRootStructureKind: var_core_value_sig9A01,
        timelinePreviousAxisNode: var_core_value_sig9A01 ? var_core_value_sigC8F6[var_core_value_sig03E1 - 1] : undefined,
        timelineHorizontalRootNodeId: var_core_value_sig5204.structureKind === "timeline-horizontal" ? var_core_value_sig4D58 : undefined,
        timelineVerticalRootNodeId: var_core_value_sig5204.structureKind === "timeline-vertical" ? var_core_value_sig4D58 : undefined
      });
    }),
    var_core_value_sigD073 = [var_core_value_sig674F, ...var_core_value_sigC8F6].reduce((var_core_value_sigE799, var_core_value_sigB601) => {
      let var_core_value_sig8B71 = var_core_value_sigB601.transform["left"] ?? 0,
        var_core_value_sigAEFB = var_core_value_sigB601.transform["top"] ?? 0,
        var_core_value_sig826B = var_core_value_sig8B71 + (var_core_value_sigB601.transform["width"] ?? 0),
        var_core_value_sigCF89 = var_core_value_sigAEFB + (var_core_value_sigB601.transform["height"] ?? 0);
      return {
        left: Math.min(var_core_value_sigE799.left, var_core_value_sig8B71),
        top: Math.min(var_core_value_sigE799.top, var_core_value_sigAEFB),
        right: Math.max(var_core_value_sigE799.right, var_core_value_sig826B),
        bottom: Math.max(var_core_value_sigE799.bottom, var_core_value_sigCF89)
      };
    }, {
      left: 1 / 0,
      top: 1 / 0,
      right: -1 / 0,
      bottom: -1 / 0
    }),
    var_core_value_sigF631 = bt({
      id: var_core_value_sig5E11,
      rootNodeId: var_core_value_sig4D58,
      left: var_core_value_sigD073.left - var_core_value_sig7CF3,
      top: var_core_value_sigD073.top - var_core_value_sig7CF3,
      width: var_core_value_sigD073.right - var_core_value_sigD073.left + var_core_value_sig7CF3 * 2,
      height: var_core_value_sigD073.bottom - var_core_value_sigD073.top + var_core_value_sig7CF3 * 2,
      structureKind: var_core_value_sig5204.structureKind,
      branchLineType: var_core_value_sigF481
    }),
    var_core_value_sig2278 = wt(var_core_value_sig674F, var_core_value_sigF631),
    var_core_value_sig7053 = var_core_value_sigC8F6.map(var_core_value_sig00CB => wt(var_core_value_sig00CB, var_core_value_sigF631)),
    var_core_value_sig52F1 = var_core_value_sig8A26.map(var_core_value_sig77EE => wt(var_core_value_sig77EE, var_core_value_sigF631)),
    var_core_value_sig1E74 = [var_core_value_sig2278, ...var_core_value_sig7053];
  return {
    container: var_core_value_sigF631,
    rootNode: var_core_value_sig2278,
    nodes: var_core_value_sig1E74,
    connectors: var_core_value_sig52F1,
    elements: Tt({
      container: var_core_value_sigF631,
      nodes: var_core_value_sig1E74,
      connectors: var_core_value_sig52F1,
      structureKind: var_core_value_sig5204.structureKind
    })
  };
}
function Dt(var_core_value_sig1E84, var_core_value_sig133B) {
  let var_core_value_sig69B8 = var_core_value_sig1E84.children["map"]((var_core_value_sig9F76, var_core_value_sigB008) => Dt(var_core_value_sig9F76, {
    orderKey: var_core_value_sig9F76.orderKey ?? Qe(var_core_value_sigB008),
    id: var_core_value_sig9F76.nodeId ?? var_core_value_sig95D9(6),
    connectorId: var_core_value_sig9F76.connectorId ?? var_core_value_sig95D9(6),
    parentId: var_core_value_sig133B.id,
    side: var_core_value_sig9F76.side ?? var_core_value_sig133B.side ?? "right",
    branchColorKey: var_core_value_sig133B.parentId === null ? var_core_value_sig9F76.branchColorKey ?? "branch-" + (var_core_value_sig9F76.orderKey ?? Qe(var_core_value_sigB008)) : var_core_value_sig9F76.branchColorKey ?? var_core_value_sig133B.branchColorKey
  }));
  return {
    blueprint: var_core_value_sig1E84,
    id: var_core_value_sig133B.id,
    connectorId: var_core_value_sig133B.connectorId,
    parentId: var_core_value_sig133B.parentId,
    orderKey: var_core_value_sig133B.orderKey,
    side: var_core_value_sig133B.side,
    branchColorKey: var_core_value_sig1E84.branchColorKey ?? var_core_value_sig133B.branchColorKey,
    children: var_core_value_sig69B8
  };
}
function Ot(var_core_value_sig983D, var_core_value_sig9A03) {
  var_core_value_sig9A03(var_core_value_sig983D), var_core_value_sig983D.children["forEach"](var_core_value_sig8721 => Ot(var_core_value_sig8721, var_core_value_sig9A03));
}
function kt(var_core_value_sig3363, var_core_value_sigF64A) {
  let var_core_value_sig25EC = St({
    parentNodeId: var_core_value_sig3363.parentId,
    text: var_core_value_sig3363.blueprint["text"],
    textData: var_core_value_sig3363.blueprint["textData"]
  });
  return {
    id: var_core_value_sig3363.id,
    parentId: var_core_value_sig3363.parentId,
    side: var_core_value_sig3363.side,
    collapsed: var_core_value_sig3363.blueprint["collapsed"],
    width: var_core_value_sig25EC.width,
    height: var_core_value_sig25EC.height,
    children: var_core_value_sig3363.children["map"](var_core_value_sig08BA => kt(var_core_value_sig08BA, var_core_value_sigF64A))
  };
}
function At(var_core_value_sigA790) {
  let var_core_value_sig9A5E = var_core_value_sigA790.containerId ?? var_core_value_sig95D9(6),
    var_core_value_sig01B9 = var_core_value_sigA790.rootNodeId ?? var_core_value_sigA790.blueprint["root"].nodeId ?? var_core_value_sig95D9(6),
    var_core_value_sigD6A9 = nt(var_core_value_sigA790.structureKind, var_core_value_sigA790.branchLineType),
    var_core_value_sig0FCF = Dt(var_core_value_sigA790.blueprint["root"], {
      id: var_core_value_sig01B9,
      parentId: null,
      orderKey: "a0"
    }),
    var_core_value_sigCF96 = [];
  Ot(var_core_value_sig0FCF, var_core_value_sigDBB5 => var_core_value_sigCF96.push(var_core_value_sigDBB5));
  let var_core_value_sigC4E9 = _t(kt(var_core_value_sig0FCF, {
      rootNodeId: var_core_value_sig01B9,
      structureKind: var_core_value_sigA790.structureKind
    }), {
      rootLeft: var_core_value_sigA790.left,
      rootTop: var_core_value_sigA790.top,
      structureKind: var_core_value_sigA790.structureKind,
      horizontalGap: N.horizontalGap,
      siblingGap: N.siblingGap
    }),
    var_core_value_sigF612 = new Map(),
    var_core_value_sigAA6C = var_core_value_sigCF96.map(var_core_value_sigCFAC => {
      let var_core_value_sig237B = St({
          parentNodeId: var_core_value_sigCFAC.parentId,
          text: var_core_value_sigCFAC.blueprint["text"],
          textData: var_core_value_sigCFAC.blueprint["textData"]
        }),
        var_core_value_sigFEAB = var_core_value_sigC4E9.get(var_core_value_sigCFAC.id) ?? {
          left: var_core_value_sigA790.left,
          top: var_core_value_sigA790.top
        },
        var_core_value_sigE347 = xt({
          id: var_core_value_sigCFAC.id,
          scopeId: var_core_value_sig9A5E,
          parentId: var_core_value_sig9A5E,
          parentNodeId: var_core_value_sigCFAC.parentId,
          orderKey: var_core_value_sigCFAC.orderKey,
          side: var_core_value_sigCFAC.parentId ? var_core_value_sigCFAC.side ?? "right" : undefined,
          text: var_core_value_sigCFAC.blueprint["text"],
          textData: var_core_value_sigCFAC.blueprint["textData"],
          left: var_core_value_sigFEAB.left,
          top: var_core_value_sigFEAB.top,
          width: var_core_value_sig237B.width,
          height: var_core_value_sig237B.height,
          collapsed: var_core_value_sigCFAC.blueprint["collapsed"],
          foreignAttributes: var_core_value_sigCFAC.blueprint["foreignAttributes"],
          branchColorKey: var_core_value_sigCFAC.parentId ? var_core_value_sigCFAC.branchColorKey : undefined
        });
      return var_core_value_sigF612.set(var_core_value_sigCFAC.id, var_core_value_sigE347), var_core_value_sigE347;
    }),
    var_core_value_sig8BFA = var_core_value_sigAA6C[0],
    var_core_value_sig236B = var_core_value_sigCF96.reduce((var_core_value_sig3C5B, var_core_value_sig200B) => {
      if (!var_core_value_sig200B.parentId) return var_core_value_sig3C5B;
      let var_core_value_sig3863 = var_core_value_sig200B.side ?? "right",
        var_core_value_sigC97C = var_core_value_sig200B.parentId + ":" + var_core_value_sig3863;
      return var_core_value_sig3C5B.set(var_core_value_sigC97C, (var_core_value_sig3C5B.get(var_core_value_sigC97C) ?? 0) + 1), var_core_value_sig3C5B;
    }, new Map()),
    var_core_value_sig1951 = var_core_value_sigCF96.filter(var_core_value_sigC4B1 => !!var_core_value_sigC4B1.parentId).map(var_core_value_sig1BD9 => Ct({
      id: var_core_value_sig1BD9.connectorId ?? var_core_value_sig95D9(6),
      scopeId: var_core_value_sig9A5E,
      parentNode: var_core_value_sigF612.get(var_core_value_sig1BD9.parentId),
      childNode: var_core_value_sigF612.get(var_core_value_sig1BD9.id),
      side: var_core_value_sig1BD9.side ?? "right",
      branchLineType: var_core_value_sigD6A9,
      forceTrunk: (var_core_value_sig236B.get(var_core_value_sig1BD9.parentId + ":" + (var_core_value_sig1BD9.side ?? "right")) ?? 0) > 1,
      treeRootTrunk: z(var_core_value_sigA790.structureKind) && var_core_value_sig1BD9.parentId === var_core_value_sig01B9,
      timelineRootStructureKind: B(var_core_value_sigA790.structureKind) && var_core_value_sig1BD9.parentId === var_core_value_sig01B9 ? var_core_value_sigA790.structureKind : undefined,
      timelinePreviousAxisNode: B(var_core_value_sigA790.structureKind) && var_core_value_sig1BD9.parentId === var_core_value_sig01B9 ? (() => {
        let var_core_value_sigE9ED = var_core_value_sigCF96.filter(var_core_value_sig8061 => var_core_value_sig8061.parentId === var_core_value_sig01B9).sort((var_core_value_sig4D4C, var_core_value_sigC9E0) => var_core_value_sig4D4C.orderKey["localeCompare"](var_core_value_sigC9E0.orderKey)),
          var_core_value_sigB577 = var_core_value_sigE9ED.findIndex(var_core_value_sig76BA => var_core_value_sig76BA.id === var_core_value_sig1BD9.id);
        return var_core_value_sigB577 > 0 ? var_core_value_sigF612.get(var_core_value_sigE9ED[var_core_value_sigB577 - 1].id) : undefined;
      })() : undefined,
      timelineHorizontalRootNodeId: var_core_value_sigA790.structureKind === "timeline-horizontal" ? var_core_value_sig01B9 : undefined,
      timelineVerticalRootNodeId: var_core_value_sigA790.structureKind === "timeline-vertical" ? var_core_value_sig01B9 : undefined
    })),
    var_core_value_sigFEA0 = F.containerPadding,
    var_core_value_sig931A = Math.min(...var_core_value_sigAA6C.map(var_core_value_sigE43E => var_core_value_sigE43E.transform["left"] ?? 0)) - var_core_value_sigFEA0,
    var_core_value_sigEE7D = Math.min(...var_core_value_sigAA6C.map(var_core_value_sigA937 => var_core_value_sigA937.transform["top"] ?? 0)) - var_core_value_sigFEA0,
    var_core_value_sig3585 = Math.max(...var_core_value_sigAA6C.map(var_core_value_sigCAD5 => (var_core_value_sigCAD5.transform["left"] ?? 0) + (var_core_value_sigCAD5.transform["width"] ?? F.nodeWidth))) + var_core_value_sigFEA0,
    var_core_value_sig31A8 = Math.max(...var_core_value_sigAA6C.map(var_core_value_sigE503 => (var_core_value_sigE503.transform["top"] ?? 0) + (var_core_value_sigE503.transform["height"] ?? F.nodeHeight))) + var_core_value_sigFEA0,
    var_core_value_sigA4DA = bt({
      id: var_core_value_sig9A5E,
      rootNodeId: var_core_value_sig01B9,
      left: var_core_value_sig931A,
      top: var_core_value_sigEE7D,
      width: var_core_value_sig3585 - var_core_value_sig931A,
      height: var_core_value_sig31A8 - var_core_value_sigEE7D,
      structureKind: var_core_value_sigA790.structureKind,
      branchLineType: var_core_value_sigD6A9
    }),
    var_core_value_sig6FC0 = var_core_value_sigAA6C.map(var_core_value_sig48DD => wt(var_core_value_sig48DD, var_core_value_sigA4DA)),
    var_core_value_sig6217 = var_core_value_sig6FC0.find(var_core_value_sig5E6A => var_core_value_sig5E6A.id === var_core_value_sig8BFA.id) ?? var_core_value_sig6FC0[0],
    var_core_value_sigB805 = var_core_value_sig1951.map(var_core_value_sigB7FC => wt(var_core_value_sigB7FC, var_core_value_sigA4DA));
  return {
    container: var_core_value_sigA4DA,
    rootNode: var_core_value_sig6217,
    nodes: var_core_value_sig6FC0,
    connectors: var_core_value_sigB805,
    elements: Tt({
      container: var_core_value_sigA4DA,
      nodes: var_core_value_sig6FC0,
      connectors: var_core_value_sigB805,
      structureKind: var_core_value_sigA790.structureKind
    })
  };
}
function jt(var_core_value_sig4FAE) {
  let var_core_value_sig1FCC = var_core_value_sig4FAE.text ?? "Add\x20text",
    var_core_value_sigB7F9 = St({
      parentNodeId: var_core_value_sig4FAE.parentNode["id"],
      text: var_core_value_sig1FCC,
      textData: var_core_value_sig4FAE.textData
    }),
    var_core_value_sigB1A2 = xt({
      id: var_core_value_sig4FAE.nodeId ?? var_core_value_sig95D9(6),
      scopeId: var_core_value_sig4FAE.scopeId,
      parentId: var_core_value_sig4FAE.scopeId,
      parentNodeId: var_core_value_sig4FAE.parentNode["id"],
      orderKey: var_core_value_sig4FAE.orderKey,
      side: var_core_value_sig4FAE.side,
      text: var_core_value_sig1FCC,
      textData: var_core_value_sig4FAE.textData,
      left: var_core_value_sig4FAE.left,
      top: var_core_value_sig4FAE.top,
      width: var_core_value_sigB7F9.width,
      height: var_core_value_sigB7F9.height,
      branchColorKey: var_core_value_sig4FAE.branchColorKey
    }),
    var_core_value_sig526D = Ct({
      id: var_core_value_sig4FAE.connectorId ?? var_core_value_sig95D9(6),
      scopeId: var_core_value_sig4FAE.scopeId,
      parentNode: var_core_value_sig4FAE.parentNode,
      childNode: var_core_value_sigB1A2,
      side: var_core_value_sig4FAE.side,
      branchLineType: var_core_value_sig4FAE.branchLineType,
      treeRootTrunk: var_core_value_sig4FAE.treeRootTrunk,
      timelineRootStructureKind: var_core_value_sig4FAE.timelineRootStructureKind,
      timelineHorizontalRootNodeId: var_core_value_sig4FAE.timelineRootStructureKind === "timeline-horizontal" ? var_core_value_sig4FAE.parentNode["id"] : undefined,
      timelineVerticalRootNodeId: var_core_value_sig4FAE.timelineRootStructureKind === "timeline-vertical" ? var_core_value_sig4FAE.parentNode["id"] : undefined
    });
  return {
    node: var_core_value_sigB1A2,
    connector: var_core_value_sig526D,
    elements: var_core_value_sig4FAE.timelineRootStructureKind ? [var_core_value_sig526D, var_core_value_sigB1A2] : [var_core_value_sigB1A2, var_core_value_sig526D]
  };
}
function V(var_core_value_sigBDB5) {
  var var_core_value_sig59CE1;
  let var_core_value_sig3AD7 = var_core_value_sigBDB5 == null ? undefined : var_core_value_sigBDB5.custom;
  return !var_core_value_sig3AD7 || ((var_core_value_sig59CE1 = var_core_value_sig3AD7.structured) == null ? undefined : var_core_value_sig59CE1.modeId) !== k || var_core_value_sig3AD7.structured["semanticRole"] !== ye || typeof var_core_value_sig3AD7.structured["structureScopeId"] != "string" ? null : {
    ...var_core_value_sig3AD7.mindmap,
    modeId: k,
    structureScopeId: var_core_value_sig3AD7.structured["structureScopeId"],
    semanticRole: ye
  };
}
function H(var_core_value_sig04E4) {
  var var_core_value_sigD8F0;
  let var_core_value_sig1475 = var_core_value_sig04E4 == null ? undefined : var_core_value_sig04E4.custom;
  return !var_core_value_sig1475 || ((var_core_value_sigD8F0 = var_core_value_sig1475.structured) == null ? undefined : var_core_value_sigD8F0.modeId) !== k || var_core_value_sig1475.structured["semanticRole"] !== A || typeof var_core_value_sig1475.structured["structureScopeId"] != "string" ? null : {
    ...var_core_value_sig1475.mindmap,
    modeId: k,
    structureScopeId: var_core_value_sig1475.structured["structureScopeId"],
    semanticRole: A
  };
}
function U(var_core_value_sig08B7) {
  var var_core_value_sig2008;
  let var_core_value_sig496B = var_core_value_sig08B7 == null ? undefined : var_core_value_sig08B7.custom;
  return !var_core_value_sig496B || ((var_core_value_sig2008 = var_core_value_sig496B.structured) == null ? undefined : var_core_value_sig2008.modeId) !== k || var_core_value_sig496B.structured["semanticRole"] !== j || typeof var_core_value_sig496B.structured["structureScopeId"] != "string" ? null : {
    ...var_core_value_sig496B.mindmap,
    modeId: k,
    structureScopeId: var_core_value_sig496B.structured["structureScopeId"],
    semanticRole: j
  };
}
function W(var_core_value_sig7161) {
  var var_core_value_sig2AB8;
  let var_core_value_sig3FCF = var_core_value_sig7161 == null ? undefined : var_core_value_sig7161.custom;
  if (!var_core_value_sig3FCF || ((var_core_value_sig2AB8 = var_core_value_sig3FCF.structured) == null ? undefined : var_core_value_sig2AB8.modeId) !== k || var_core_value_sig3FCF.structured["semanticRole"] !== be || typeof var_core_value_sig3FCF.structured["structureScopeId"] != "string") return null;
  let var_core_value_sig675A = var_core_value_sig3FCF.mindmap;
  return typeof (var_core_value_sig675A == null ? undefined : var_core_value_sig675A.ownerNodeId) != "string" || typeof var_core_value_sig675A.offsetX != "number" || typeof var_core_value_sig675A.offsetY != "number" ? null : {
    ownerNodeId: var_core_value_sig675A.ownerNodeId,
    offsetX: var_core_value_sig675A.offsetX,
    offsetY: var_core_value_sig675A.offsetY,
    modeId: k,
    structureScopeId: var_core_value_sig3FCF.structured["structureScopeId"],
    semanticRole: be
  };
}
function Mt(var_core_value_sig837F) {
  let var_core_value_sig9D6E = var_core_value_sig837F;
  return {
    redo: var_core_value_sig9D6E.redo,
    objects: (var_core_value_sig9D6E.objects ?? []).map(var_core_value_sig9CD9 => ({
      unitId: var_core_value_sig9CD9.unitId,
      subUnitId: var_core_value_sig9CD9.subUnitId,
      elementId: var_core_value_sig9CD9.drawingId
    }))
  };
}
function Nt(var_core_value_sigB205) {
  return !!(V(var_core_value_sigB205) || H(var_core_value_sigB205) || U(var_core_value_sigB205) || W(var_core_value_sigB205));
}
const G = {
    id: "board.mutation.set-mind-map-element",
    type: var_core_value_sig9CF2.MUTATION,
    handler: (var_core_value_sigBF78, var_core_value_sig8AF3) => {
      if (!(var_core_value_sig8AF3 != null && var_core_value_sig8AF3.unitId) || !var_core_value_sig8AF3.subUnitId || !var_core_value_sig8AF3.elementId || var_core_value_sig8AF3.element["id"] !== var_core_value_sig8AF3.elementId) return false;
      let var_core_value_sigA0CC = var_core_value_sigBF78.get(var_core_value_sigD8C3),
        var_core_value_sigB3A1 = var_core_value_sigA0CC.getElementByParam({
          unitId: var_core_value_sig8AF3.unitId,
          subUnitId: var_core_value_sig8AF3.subUnitId,
          elementId: var_core_value_sig8AF3.elementId
        });
      if (!var_core_value_sigB3A1 || !Nt(var_core_value_sigB3A1.element) || !Nt(var_core_value_sig8AF3.element)) return false;
      let var_core_value_sig1FB9 = var_core_value_sigBF78.get(var_core_value_sig4A94).getUnit(var_core_value_sig8AF3.unitId, var_core_value_sig4DD1.UNIVER_BOARD),
        var_core_value_sig53A9 = var_core_value_sig1FB9 == null ? undefined : var_core_value_sig1FB9.getPage(var_core_value_sig8AF3.subUnitId);
      if (!var_core_value_sig1FB9 || !var_core_value_sig53A9 || !var_core_value_sig53A9.elements[var_core_value_sig8AF3.elementId]) return false;
      var_core_value_sig53A9.elements = {
        ...var_core_value_sig53A9.elements,
        [var_core_value_sig8AF3.elementId]: var_core_value_sig8AF3.element
      };
      let var_core_value_sigDACD = {
          ...var_core_value_sigB3A1,
          element: var_core_value_sig8AF3.element,
          transform: var_core_value_sig8AF3.transform ?? var_core_value_sigB3A1.transform,
          hidden: var_core_value_sig8AF3.element["visible"] === false
        },
        var_core_value_sig691E = Mt(var_core_value_sigA0CC.getBatchUpdateElementOp([var_core_value_sigDACD]));
      return var_core_value_sigA0CC.applyElementJson1(var_core_value_sig8AF3.unitId, var_core_value_sig8AF3.subUnitId, var_core_value_sig691E.redo), var_core_value_sigA0CC.updateElementNotification(var_core_value_sig691E.objects), true;
    }
  },
  Pt = {
    id: "board.operation.insert-mind-map",
    type: var_core_value_sig9CF2.OPERATION,
    handler: (var_core_value_sigD6D6, var_core_value_sig0347) => {
      if (!var_core_value_sig0347 || !var_core_value_sig0347.unitId || !var_core_value_sig0347.subUnitId || !Number.isFinite(var_core_value_sig0347.left) || !Number.isFinite(var_core_value_sig0347.top)) return false;
      let var_core_value_sig52A3 = var_core_value_sigD6D6.get(var_core_value_sigD8C3),
        var_core_value_sigAD91 = var_core_value_sig52A3.getElementData(var_core_value_sig0347.unitId, var_core_value_sig0347.subUnitId),
        var_core_value_sigF64E = var_core_value_sig52A3.getElementOrder(var_core_value_sig0347.unitId, var_core_value_sig0347.subUnitId),
        var_core_value_sig9B3D = var_core_value_sig0347.blueprint ? At({
          containerId: var_core_value_sig0347.containerId,
          rootNodeId: var_core_value_sig0347.rootNodeId,
          left: var_core_value_sig0347.left,
          top: var_core_value_sig0347.top,
          blueprint: var_core_value_sig0347.rootText ? {
            ...var_core_value_sig0347.blueprint,
            root: {
              ...var_core_value_sig0347.blueprint["root"],
              text: var_core_value_sig0347.rootText
            }
          } : var_core_value_sig0347.blueprint,
          structureKind: var_core_value_sig0347.structureKind,
          branchLineType: var_core_value_sig0347.branchLineType
        }) : Et({
          containerId: var_core_value_sig0347.containerId,
          rootNodeId: var_core_value_sig0347.rootNodeId,
          left: var_core_value_sig0347.left,
          top: var_core_value_sig0347.top,
          rootText: var_core_value_sig0347.rootText,
          structureKind: var_core_value_sig0347.structureKind,
          branchLineType: var_core_value_sig0347.branchLineType,
          children: var_core_value_sig0347.children
        }),
        var_core_value_sigB217 = var_core_value_sigFC47({
          unitId: var_core_value_sig0347.unitId,
          subUnitId: var_core_value_sig0347.subUnitId,
          elements: var_core_value_sig9B3D.elements,
          insertIndex: var_core_value_sig0347.insertIndex,
          elementData: var_core_value_sigAD91,
          elementOrder: var_core_value_sigF64E
        });
      if (!var_core_value_sigB217) return false;
      let var_core_value_sig1FE6 = var_core_value_sigD6D6.get(var_core_value_sig6223),
        var_core_value_sig2471 = var_core_value_sig45CD(var_core_value_sigB217.redoMutations, var_core_value_sig1FE6);
      return var_core_value_sig2471.result ? (var_core_value_sigD6D6.get(var_core_value_sigF65B).pushUndoRedo({
        unitID: var_core_value_sig0347.unitId,
        redoMutations: var_core_value_sigB217.redoMutations,
        undoMutations: var_core_value_sigB217.undoMutations
      }), true) : (Ft(var_core_value_sig1FE6, var_core_value_sigB217.undoMutations, var_core_value_sig2471.index), false);
    }
  };
function Ft(var_core_value_sigD1FC, var_core_value_sigE2F9, var_core_value_sigD689) {
  let var_core_value_sig7AE3 = var_core_value_sigD689 < 0 ? var_core_value_sigE2F9.length : var_core_value_sigD689;
  var_core_value_sigE2F9.slice(-var_core_value_sig7AE3).forEach(var_core_value_sigFD0C => {
    var_core_value_sigD1FC.syncExecuteCommand(var_core_value_sigFD0C.id, var_core_value_sigFD0C.params);
  });
}
function It(var_core_value_sig1EB3) {
  "@babel/helpers - typeof";

  return It = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sig849B) {
    return typeof var_core_value_sig849B;
  } : function (var_core_value_sig5F1A) {
    return var_core_value_sig5F1A && typeof Symbol == "function" && var_core_value_sig5F1A.constructor === Symbol && var_core_value_sig5F1A !== Symbol.prototype ? "symbol" : typeof var_core_value_sig5F1A;
  }, It(var_core_value_sig1EB3);
}
function Lt(var_core_value_sigE120, var_core_value_sigD6E7) {
  if (It(var_core_value_sigE120) != "object" || !var_core_value_sigE120) return var_core_value_sigE120;
  var var_core_value_sig3669 = var_core_value_sigE120[Symbol.toPrimitive];
  if (var_core_value_sig3669 !== undefined) {
    var var_core_value_sig5CBC = var_core_value_sig3669.call(var_core_value_sigE120, var_core_value_sigD6E7 || "default");
    if (It(var_core_value_sig5CBC) != "object") return var_core_value_sig5CBC;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sigD6E7 === "string" ? String : Number)(var_core_value_sigE120);
}
function Rt(var_core_value_sig20BE) {
  var var_core_value_sig6BD0 = Lt(var_core_value_sig20BE, "string");
  return It(var_core_value_sig6BD0) == "symbol" ? var_core_value_sig6BD0 : var_core_value_sig6BD0 + "";
}
function zt(var_core_value_sig8C15, var_core_value_sig6DF7, var_core_value_sigB411) {
  return (var_core_value_sig6DF7 = Rt(var_core_value_sig6DF7)) in var_core_value_sig8C15 ? Object.defineProperty(var_core_value_sig8C15, var_core_value_sig6DF7, {
    value: var_core_value_sigB411,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sig8C15[var_core_value_sig6DF7] = var_core_value_sigB411, var_core_value_sig8C15;
}
const Bt = var_core_value_sig9D8F("board.mind-map-clipboard.service");
var Vt = class extends var_core_value_sigBD53 {
  constructor(...var_core_value_sigB455) {
    super(...var_core_value_sigB455), zt(this, "_payload", null);
  }
  setPayload(var_core_value_sig5241) {
    this._payload = var_core_value_sig5241;
  }
  getPayload() {
    return this._payload;
  }
  dispose() {
    this._payload = null, super.dispose();
  }
};
const Ht = M.root["fillColor"],
  Ut = M.root["strokeColor"],
  Wt = M.root["textColor"],
  Gt = M.root["fontSize"],
  Kt = M.child["fillColor"],
  qt = M.child["strokeColor"],
  Jt = M.child["textColor"],
  Yt = M.child["fontSize"];
function K(var_core_value_sigA81B, var_core_value_sigFE8D) {
  let var_core_value_sig8595 = var_core_value_sigA81B[var_core_value_sigFE8D],
    var_core_value_sigF8DE = H(var_core_value_sig8595 == null ? undefined : var_core_value_sig8595.element);
  return !var_core_value_sig8595 || !var_core_value_sigF8DE ? null : {
    data: var_core_value_sig8595,
    meta: var_core_value_sigF8DE
  };
}
function Xt(var_core_value_sigFE76, var_core_value_sig84C8, var_core_value_sig80C0) {
  return Object.values(var_core_value_sigFE76).map(var_core_value_sigC6E5 => {
    let var_core_value_sigCEFB = H(var_core_value_sigC6E5.element);
    return var_core_value_sigCEFB && var_core_value_sigCEFB.structureScopeId === var_core_value_sig84C8 && var_core_value_sigCEFB.parentNodeId === var_core_value_sig80C0 ? {
      data: var_core_value_sigC6E5,
      meta: var_core_value_sigCEFB
    } : null;
  }).filter(var_core_value_sig1537 => !!var_core_value_sig1537).sort(Qt);
}
function Zt(var_core_value_sig22B4) {
  var var_core_value_sigBB37;
  return Ze((var_core_value_sigBB37 = var_core_value_sig22B4[var_core_value_sig22B4.length - 1]) == null ? undefined : var_core_value_sigBB37.meta["orderKey"], undefined);
}
function Qt(var_core_value_sig0C51, var_core_value_sigADA4) {
  return Xe(var_core_value_sig0C51.meta["orderKey"], var_core_value_sigADA4.meta["orderKey"]) || var_core_value_sig0C51.data["elementId"].localeCompare(var_core_value_sigADA4.data["elementId"]);
}
function q(var_core_value_sig0E48) {
  return var_core_value_sig0E48 ?? N.structureKind;
}
function $t(var_core_value_sig495B, var_core_value_sig310C, var_core_value_sig759E) {
  return var_core_value_sig495B % 2 == 0 ? var_core_value_sig310C : var_core_value_sig759E;
}
function en(var_core_value_sig6C80, var_core_value_sig6B99, var_core_value_sig6ADC) {
  return var_core_value_sig6C80 === "mindmap-vertical" ? var_core_value_sig6ADC === "top" || var_core_value_sig6ADC === "bottom" ? var_core_value_sig6ADC : "bottom" : var_core_value_sig6C80 === "tree-left" ? "left" : var_core_value_sig6C80 === "tree-right" ? "right" : var_core_value_sig6C80 === "tree-alternate" ? $t(var_core_value_sig6B99, "left", "right") : var_core_value_sig6C80 === "timeline-horizontal" ? $t(var_core_value_sig6B99, "top", "bottom") : var_core_value_sig6C80 === "timeline-vertical" ? $t(var_core_value_sig6B99, "left", "right") : var_core_value_sig6ADC === "left" || var_core_value_sig6ADC === "right" ? var_core_value_sig6ADC : "right";
}
function tn(var_core_value_sig41AD, var_core_value_sigDBC2) {
  return var_core_value_sig41AD || (var_core_value_sigDBC2 === "mindmap-vertical" || var_core_value_sigDBC2 === "timeline-horizontal" ? "bottom" : "right");
}
function nn(var_core_value_sig7739, var_core_value_sig4040, var_core_value_sig1AAA = N.structureKind, var_core_value_sig58DB = 0) {
  return var_core_value_sig4040 || (var_core_value_sig7739.parentNodeId ? tn(var_core_value_sig7739.side, var_core_value_sig1AAA) : en(var_core_value_sig1AAA, var_core_value_sig58DB));
}
function rn(var_core_value_sig4840, var_core_value_sigB76D, var_core_value_sig1015) {
  let var_core_value_sig62231 = var_core_value_sig4840.transform["left"] ?? 0,
    var_core_value_sigC6B6 = var_core_value_sig4840.transform["top"] ?? 0,
    var_core_value_sig498A = var_core_value_sig4840.transform["width"] ?? F.nodeWidth,
    var_core_value_sigEF45 = F.nodeWidth,
    var_core_value_sig36FE = F.nodeHeight,
    var_core_value_sig3AF5 = N.horizontalGap,
    var_core_value_sig14E6 = N.siblingGap;
  return {
    left: var_core_value_sigB76D === "right" ? var_core_value_sig62231 + var_core_value_sig498A + var_core_value_sig3AF5 : var_core_value_sig62231 - var_core_value_sig3AF5 - var_core_value_sigEF45,
    top: var_core_value_sigC6B6 + var_core_value_sig1015 * (var_core_value_sig36FE + var_core_value_sig14E6)
  };
}
function an(var_core_value_sig8690) {
  return {
    redoMutations: var_core_value_sig8690.elements["map"](var_core_value_sigE4C6 => ({
      id: var_core_value_sig4F9D.id,
      params: {
        unitId: var_core_value_sig8690.unitId,
        subUnitId: var_core_value_sig8690.subUnitId,
        element: var_core_value_sigCF1F.deepClone(var_core_value_sigE4C6),
        allowLockedParent: true
      }
    })),
    undoMutations: [...var_core_value_sig8690.elements].reverse().map(var_core_value_sig4313 => ({
      id: var_core_value_sig3A44.id,
      params: {
        unitId: var_core_value_sig8690.unitId,
        subUnitId: var_core_value_sig8690.subUnitId,
        elementId: var_core_value_sig4313.id,
        allowLockedParent: true
      }
    }))
  };
}
function J(var_core_value_sigDF29, var_core_value_sigC0F8, var_core_value_sig3C75, var_core_value_sig992D = {}) {
  if (var_core_value_sig3C75.redoMutations["length"] === 0) return true;
  let var_core_value_sigE4E4 = var_core_value_sigDF29.get(var_core_value_sig6223),
    var_core_value_sigA4B0 = var_core_value_sig45CD(var_core_value_sig3C75.redoMutations, var_core_value_sigE4E4);
  return var_core_value_sigA4B0.result ? (var_core_value_sig992D.skipUndo || var_core_value_sigDF29.get(var_core_value_sigF65B).pushUndoRedo({
    unitID: var_core_value_sigC0F8,
    redoMutations: var_core_value_sig3C75.redoMutations,
    undoMutations: var_core_value_sig3C75.undoMutations
  }), true) : (sn(var_core_value_sigE4E4, var_core_value_sig3C75.undoMutations, var_core_value_sigA4B0.index), false);
}
function on(var_core_value_sig5F50, var_core_value_sig4494) {
  if (Object.is(var_core_value_sig5F50, var_core_value_sig4494)) return true;
  if (!var_core_value_sig5F50 || !var_core_value_sig4494 || typeof var_core_value_sig5F50 != "object" || typeof var_core_value_sig4494 != "object") return false;
  if (Array.isArray(var_core_value_sig5F50) || Array.isArray(var_core_value_sig4494)) return Array.isArray(var_core_value_sig5F50) && Array.isArray(var_core_value_sig4494) && var_core_value_sig5F50.length === var_core_value_sig4494.length && var_core_value_sig5F50.every((var_core_value_sigFC87, var_core_value_sig156F) => on(var_core_value_sigFC87, var_core_value_sig4494[var_core_value_sig156F]));
  let var_core_value_sigFFAF = var_core_value_sig5F50,
    var_core_value_sig478B = var_core_value_sig4494,
    var_core_value_sig1E21 = Object.keys(var_core_value_sigFFAF).filter(var_core_value_sigDD51 => var_core_value_sigFFAF[var_core_value_sigDD51] !== undefined),
    var_core_value_sig9DBF = Object.keys(var_core_value_sig478B).filter(var_core_value_sigF057 => var_core_value_sig478B[var_core_value_sigF057] !== undefined);
  return var_core_value_sig1E21.length === var_core_value_sig9DBF.length && var_core_value_sig1E21.every(var_core_value_sig72F6 => Object.prototype["hasOwnProperty"].call(var_core_value_sig478B, var_core_value_sig72F6) && on(var_core_value_sigFFAF[var_core_value_sig72F6], var_core_value_sig478B[var_core_value_sig72F6]));
}
function sn(var_core_value_sig36CC, var_core_value_sigA568, var_core_value_sigD22D) {
  let var_core_value_sig85D5 = var_core_value_sigD22D < 0 ? var_core_value_sigA568.length : var_core_value_sigD22D;
  var_core_value_sigA568.slice(-var_core_value_sig85D5).forEach(var_core_value_sig9FBA => {
    var_core_value_sig36CC.syncExecuteCommand(var_core_value_sig9FBA.id, var_core_value_sig9FBA.params);
  });
}
function cn(var_core_value_sig5D2E, var_core_value_sig7221) {
  var var_core_value_sig0A5A, var_core_value_sigE6D6, var_core_value_sig8507;
  let var_core_value_sig8A7F = var_core_value_sig5D2E.get(var_core_value_sigD8C3).getElementData(var_core_value_sig7221.unitId, var_core_value_sig7221.subUnitId),
    var_core_value_sig9E81 = K(var_core_value_sig8A7F, var_core_value_sig7221.parentNodeId);
  if (!var_core_value_sig9E81) return false;
  let var_core_value_sig8295 = Xt(var_core_value_sig8A7F, var_core_value_sig9E81.meta["structureScopeId"], var_core_value_sig7221.parentNodeId),
    var_core_value_sigA975 = V((var_core_value_sig0A5A = var_core_value_sig8A7F[var_core_value_sig9E81.meta["structureScopeId"]]) == null ? undefined : var_core_value_sig0A5A.element),
    var_core_value_sig1263 = var_core_value_sigA975 == null ? undefined : var_core_value_sigA975.rootNodeId,
    var_core_value_sig457C = var_core_value_sig1263 ? var_core_value_sig79D7(var_core_value_sig8A7F, var_core_value_sig1263) : null,
    var_core_value_sigA4E6 = q(var_core_value_sigA975 == null || (var_core_value_sigE6D6 = var_core_value_sigA975.layout) == null ? undefined : var_core_value_sigE6D6.structureKind),
    var_core_value_sig934F = nn(var_core_value_sig9E81.meta, var_core_value_sig7221.side, var_core_value_sigA4E6, var_core_value_sig8295.length),
    var_core_value_sig74A7 = rn(var_core_value_sig9E81.data["element"], var_core_value_sig934F, var_core_value_sig8295.length),
    var_core_value_sig3685 = wn(var_core_value_sig8A7F, var_core_value_sig9E81.meta["structureScopeId"], var_core_value_sig7221.parentNodeId, var_core_value_sig7221.nodeId ?? "", var_core_value_sig7221.orderKey, var_core_value_sig7221.referenceNodeId, var_core_value_sig7221.placement),
    var_core_value_sigC621 = jt({
      nodeId: var_core_value_sig7221.nodeId,
      connectorId: var_core_value_sig7221.connectorId,
      scopeId: var_core_value_sig9E81.meta["structureScopeId"],
      parentNode: var_core_value_sig9E81.data["element"],
      orderKey: var_core_value_sig3685,
      side: var_core_value_sig934F,
      text: var_core_value_sig7221.text,
      textData: var_core_value_sig7221.textData,
      branchColorKey: var_core_value_sig9E81.meta["parentNodeId"] === null ? "branch-" + var_core_value_sig3685 : var_core_value_sig9E81.meta["branchColorKey"],
      branchLineType: var_core_value_sigA975 == null || (var_core_value_sig8507 = var_core_value_sigA975.layout) == null ? undefined : var_core_value_sig8507.branchLineType,
      treeRootTrunk: z(var_core_value_sigA4E6) && var_core_value_sig9E81.meta["parentNodeId"] === null,
      timelineRootStructureKind: B(var_core_value_sigA4E6) && var_core_value_sig9E81.meta["parentNodeId"] === null ? var_core_value_sigA4E6 : undefined,
      left: var_core_value_sig74A7.left,
      top: var_core_value_sig74A7.top
    });
  mn(var_core_value_sigC621, var_core_value_sig7221, var_core_value_sig9E81, var_core_value_sig8295, var_core_value_sig8A7F);
  let var_core_value_sig86D7 = an({
      unitId: var_core_value_sig7221.unitId,
      subUnitId: var_core_value_sig7221.subUnitId,
      elements: var_core_value_sigC621.elements
    }),
    var_core_value_sig431B = {
      ...var_core_value_sig8A7F
    };
  var_core_value_sigC621.elements["forEach"](var_core_value_sigFE01 => {
    var_core_value_sig431B[var_core_value_sigFE01.id] = qn(var_core_value_sig7221.unitId, var_core_value_sig7221.subUnitId, var_core_value_sigFE01);
  });
  let var_core_value_sig5C7C = Z(var_core_value_sig431B, var_core_value_sig9E81.meta["structureScopeId"]),
    var_core_value_sig87E2 = var_core_value_sig457C && var_core_value_sig1263 ? $n(var_core_value_sig431B, var_core_value_sig9E81.meta["structureScopeId"], var_core_value_sig1263, var_core_value_sig457C) : null;
  return J(var_core_value_sig5D2E, var_core_value_sig7221.unitId, {
    redoMutations: [...var_core_value_sig86D7.redoMutations, ...((var_core_value_sig5C7C == null ? undefined : var_core_value_sig5C7C.redoMutations) ?? []), ...((var_core_value_sig87E2 == null ? undefined : var_core_value_sig87E2.redoMutations) ?? [])],
    undoMutations: [...((var_core_value_sig87E2 == null ? undefined : var_core_value_sig87E2.undoMutations) ?? []), ...((var_core_value_sig5C7C == null ? undefined : var_core_value_sig5C7C.undoMutations) ?? []), ...var_core_value_sig86D7.undoMutations]
  });
}
function ln(var_core_value_sig2E04, var_core_value_sig2EDD, var_core_value_sig27D2, var_core_value_sig355D, var_core_value_sig8B21, var_core_value_sigEB36, var_core_value_sig5C27 = un(var_core_value_sig2E04, var_core_value_sig2EDD)) {
  Object.values(var_core_value_sig2E04).map(var_core_value_sigA2CE => {
    let var_core_value_sig1975 = U(var_core_value_sigA2CE.element);
    return var_core_value_sig1975 && var_core_value_sig1975.structureScopeId === var_core_value_sig2EDD && var_core_value_sig1975.parentNodeId === var_core_value_sig27D2 ? {
      data: var_core_value_sigA2CE,
      meta: var_core_value_sig1975
    } : null;
  }).filter(var_core_value_sig6EA1 => !!var_core_value_sig6EA1).forEach(({
    data: var_core_value_sig029F,
    meta: var_core_value_sig3767
  }) => {
    let var_core_value_sig670B = K(var_core_value_sig2E04, var_core_value_sig3767.childNodeId);
    var_core_value_sig670B && (bn(var_core_value_sig029F, var_core_value_sig355D, var_core_value_sig8B21, var_core_value_sigEB36), bn(var_core_value_sig670B.data, var_core_value_sig355D, var_core_value_sig8B21, var_core_value_sigEB36), (var_core_value_sig5C27.get(var_core_value_sig670B.data["elementId"]) ?? []).forEach(var_core_value_sig9572 => {
      bn(var_core_value_sig9572, var_core_value_sig355D, var_core_value_sig8B21, var_core_value_sigEB36);
    }), ln(var_core_value_sig2E04, var_core_value_sig2EDD, var_core_value_sig670B.data["element"].id, var_core_value_sig355D && !var_core_value_sig670B.meta["collapsed"], var_core_value_sig8B21, var_core_value_sigEB36, var_core_value_sig5C27));
  });
}
function un(var_core_value_sigD494, var_core_value_sigBF6D) {
  let var_core_value_sigD051 = new Map();
  return Object.values(var_core_value_sigD494).forEach(var_core_value_sig6912 => {
    let var_core_value_sigE235 = W(var_core_value_sig6912.element);
    if ((var_core_value_sigE235 == null ? undefined : var_core_value_sigE235.structureScopeId) !== var_core_value_sigBF6D) return;
    let var_core_value_sig7664 = var_core_value_sigD051.get(var_core_value_sigE235.ownerNodeId);
    var_core_value_sig7664 ? var_core_value_sig7664.push(var_core_value_sig6912) : var_core_value_sigD051.set(var_core_value_sigE235.ownerNodeId, [var_core_value_sig6912]);
  }), var_core_value_sigD051;
}
function dn(var_core_value_sig16D9, var_core_value_sigF378, var_core_value_sig5F6C, var_core_value_sig7E85 = new Set(), var_core_value_sigF204 = un(var_core_value_sig16D9, var_core_value_sigF378)) {
  return var_core_value_sig7E85.add(var_core_value_sig5F6C), (var_core_value_sigF204.get(var_core_value_sig5F6C) ?? []).forEach(var_core_value_sig2281 => {
    var_core_value_sig7E85.add(var_core_value_sig2281.elementId);
  }), Object.values(var_core_value_sig16D9).forEach(var_core_value_sig5E86 => {
    let var_core_value_sig6998 = U(var_core_value_sig5E86.element);
    (var_core_value_sig6998 == null ? undefined : var_core_value_sig6998.structureScopeId) === var_core_value_sigF378 && var_core_value_sig6998.childNodeId === var_core_value_sig5F6C && var_core_value_sig7E85.add(var_core_value_sig5E86.elementId);
  }), Object.values(var_core_value_sig16D9).forEach(var_core_value_sigF639 => {
    let var_core_value_sigEAE5 = H(var_core_value_sigF639.element);
    (var_core_value_sigEAE5 == null ? undefined : var_core_value_sigEAE5.structureScopeId) === var_core_value_sigF378 && var_core_value_sigEAE5.parentNodeId === var_core_value_sig5F6C && (Object.values(var_core_value_sig16D9).forEach(var_core_value_sigD873 => {
      let var_core_value_sigA12B = U(var_core_value_sigD873.element);
      (var_core_value_sigA12B == null ? undefined : var_core_value_sigA12B.structureScopeId) === var_core_value_sigF378 && var_core_value_sigA12B.parentNodeId === var_core_value_sig5F6C && var_core_value_sigA12B.childNodeId === var_core_value_sigF639.elementId && var_core_value_sig7E85.add(var_core_value_sigD873.elementId);
    }), dn(var_core_value_sig16D9, var_core_value_sigF378, var_core_value_sigF639.elementId, var_core_value_sig7E85, var_core_value_sigF204));
  }), var_core_value_sig7E85;
}
function fn(var_core_value_sig7A15, var_core_value_sigEEA6, var_core_value_sigEAE1) {
  for (let var_core_value_sigE94C of Object.values(var_core_value_sig7A15)) {
    let var_core_value_sigF230 = U(var_core_value_sigE94C.element);
    if ((var_core_value_sigF230 == null ? undefined : var_core_value_sigF230.structureScopeId) === var_core_value_sigEEA6 && var_core_value_sigF230.childNodeId === var_core_value_sigEAE1) return var_core_value_sigE94C;
  }
  return null;
}
function pn(var_core_value_sigC69F, var_core_value_sig0442, var_core_value_sig697A) {
  var var_core_value_sigDB65;
  let var_core_value_sig045E = ur(var_core_value_sig0442, {
    nodeId: var_core_value_sig0442.data["elementId"],
    text: ((var_core_value_sigDB65 = var_core_value_sigC69F.shapeData["shapeText"]) == null ? undefined : var_core_value_sigDB65.text) ?? "",
    textData: var_core_value_sig697A
  });
  return !var_core_value_sig045E || var_core_value_sig045E.type !== var_core_value_sig32E7.Shape ? var_core_value_sigC69F : {
    ...var_core_value_sigC69F,
    shapeData: var_core_value_sigCF1F.deepClone(var_core_value_sig045E.shapeData)
  };
}
function mn(var_core_value_sig4524, var_core_value_sig64D5, var_core_value_sig9678, var_core_value_sig5E74, var_core_value_sig75FC) {
  let var_core_value_sig639A = var_core_value_sig64D5.referenceNodeId ? K(var_core_value_sig75FC, var_core_value_sig64D5.referenceNodeId) : var_core_value_sig9678.meta["parentNodeId"] === null ? var_core_value_sig5E74[0] ?? null : var_core_value_sig9678;
  if (!var_core_value_sig639A) return;
  var_core_value_sig4524.node["shapeData"] = pn(var_core_value_sig4524.node, var_core_value_sig639A, var_core_value_sig64D5.textData).shapeData;
  let var_core_value_sig567C = fn(var_core_value_sig75FC, var_core_value_sig639A.meta["structureScopeId"], var_core_value_sig639A.data["elementId"]);
  (var_core_value_sig567C == null ? undefined : var_core_value_sig567C.element["type"]) === var_core_value_sig32E7.Connector && (var_core_value_sig4524.connector["connectorData"].style = var_core_value_sigCF1F.deepClone(var_core_value_sig567C.element["connectorData"].style ?? {}));
}
function hn(var_core_value_sig825F) {
  if (var_core_value_sig825F === "dash") return [8, 6];
  if (var_core_value_sig825F === "dot") return [1, 6];
}
function gn(var_core_value_sig546D, var_core_value_sig8078, var_core_value_sigDCED, var_core_value_sig2829) {
  try {
    let var_core_value_sig6D47 = new var_core_value_sig36BD(var_core_value_sig546D, "mind-map-node-size-probe", var_core_value_sig8078);
    var_core_value_sig6D47.updateContext({
      width: var_core_value_sigDCED,
      height: var_core_value_sig2829
    });
    let var_core_value_sigCB82 = var_core_value_sig6D47.getShapeTextRect({
      left: 0,
      top: 0,
      width: var_core_value_sigDCED,
      height: var_core_value_sig2829
    });
    return Number.isFinite(var_core_value_sigCB82.width) && var_core_value_sigCB82.width > 0 ? var_core_value_sigCB82.width : null;
  } catch {
    return null;
  }
}
function _n(var_core_value_sig6EE2, var_core_value_sig4CCC, var_core_value_sig6E47) {
  if (!var_core_value_sig6E47 || var_core_value_sig6E47 === var_core_value_sig6EE2.shapeData["shapeType"]) return var_core_value_sig6EE2.transform;
  let var_core_value_sigB64D = var_core_value_sig6EE2.transform["width"] ?? F.nodeWidth,
    var_core_value_sig2407 = var_core_value_sig6EE2.transform["height"] ?? F.nodeHeight;
  if (!Number.isFinite(var_core_value_sigB64D) || !Number.isFinite(var_core_value_sig2407) || var_core_value_sigB64D <= 0 || var_core_value_sig2407 <= 0) return var_core_value_sig6EE2.transform;
  let var_core_value_sigE4D0 = gn(var_core_value_sig6EE2.shapeData["shapeType"] ?? var_core_value_sig0413.RoundRect, var_core_value_sig6EE2.shapeData, var_core_value_sigB64D, var_core_value_sig2407),
    var_core_value_sigD5F1 = gn(var_core_value_sig6E47, var_core_value_sig4CCC, var_core_value_sigB64D, var_core_value_sig2407);
  return !var_core_value_sigE4D0 || !var_core_value_sigD5F1 || var_core_value_sigD5F1 >= var_core_value_sigE4D0 ? var_core_value_sig6EE2.transform : {
    ...var_core_value_sig6EE2.transform,
    width: Math.ceil(var_core_value_sigB64D * var_core_value_sigE4D0 / var_core_value_sigD5F1)
  };
}
function vn(var_core_value_sigBC19) {
  return (var_core_value_sigBC19 == null ? undefined : var_core_value_sigBC19.fontSize) !== undefined || (var_core_value_sigBC19 == null ? undefined : var_core_value_sigBC19.bold) !== undefined;
}
function yn(var_core_value_sig4F3C, var_core_value_sig8D44) {
  if (!var_core_value_sig8D44) return var_core_value_sig4F3C.transform;
  let var_core_value_sig1660 = We(var_core_value_sig4F3C),
    var_core_value_sigEE7B = var_core_value_sig4F3C.transform["width"] ?? 0,
    var_core_value_sig44DF = var_core_value_sig4F3C.transform["height"] ?? 0;
  return var_core_value_sigEE7B === var_core_value_sig1660.width && var_core_value_sig44DF === var_core_value_sig1660.height ? var_core_value_sig4F3C.transform : {
    ...var_core_value_sig4F3C.transform,
    width: var_core_value_sig1660.width,
    height: var_core_value_sig1660.height
  };
}
function bn(var_core_value_sig7E48, var_core_value_sig7B9E, var_core_value_sig5C3B, var_core_value_sig4002) {
  let var_core_value_sig4153 = {
    ...var_core_value_sigCF1F.deepClone(var_core_value_sig7E48.element),
    visible: var_core_value_sig7B9E
  };
  var_core_value_sig5C3B.push({
    id: G.id,
    params: {
      unitId: var_core_value_sig7E48.unitId,
      subUnitId: var_core_value_sig7E48.subUnitId,
      elementId: var_core_value_sig7E48.elementId,
      element: var_core_value_sig4153,
      transform: var_core_value_sig7E48.transform
    }
  }), var_core_value_sig4002.unshift({
    id: G.id,
    params: {
      unitId: var_core_value_sig7E48.unitId,
      subUnitId: var_core_value_sig7E48.subUnitId,
      elementId: var_core_value_sig7E48.elementId,
      element: var_core_value_sigCF1F.deepClone(var_core_value_sig7E48.element),
      transform: var_core_value_sig7E48.transform
    }
  });
}
function xn(var_core_value_sig2825, var_core_value_sig5FD0, var_core_value_sigA7E3, var_core_value_sigA784) {
  var var_core_value_sig4406;
  let var_core_value_sig6806 = var_core_value_sigCF1F.deepClone(var_core_value_sig2825.element);
  var_core_value_sig6806.custom = {
    ...(var_core_value_sig6806.custom ?? {}),
    mindmap: {
      ...(((var_core_value_sig4406 = var_core_value_sig6806.custom) == null ? undefined : var_core_value_sig4406.mindmap) ?? {}),
      collapsed: var_core_value_sig5FD0
    }
  }, var_core_value_sigA7E3.push({
    id: G.id,
    params: {
      unitId: var_core_value_sig2825.unitId,
      subUnitId: var_core_value_sig2825.subUnitId,
      elementId: var_core_value_sig2825.elementId,
      element: var_core_value_sig6806,
      transform: var_core_value_sig2825.transform
    }
  }), var_core_value_sigA784.unshift({
    id: G.id,
    params: {
      unitId: var_core_value_sig2825.unitId,
      subUnitId: var_core_value_sig2825.subUnitId,
      elementId: var_core_value_sig2825.elementId,
      element: var_core_value_sigCF1F.deepClone(var_core_value_sig2825.element),
      transform: var_core_value_sig2825.transform
    }
  });
}
function Y(var_core_value_sigD4AA, var_core_value_sigDC41) {
  return {
    redoMutation: {
      id: G.id,
      params: {
        unitId: var_core_value_sigD4AA.unitId,
        subUnitId: var_core_value_sigD4AA.subUnitId,
        elementId: var_core_value_sigD4AA.elementId,
        element: var_core_value_sigDC41,
        transform: var_core_value_sigDC41.transform
      }
    },
    undoMutation: {
      id: G.id,
      params: {
        unitId: var_core_value_sigD4AA.unitId,
        subUnitId: var_core_value_sigD4AA.subUnitId,
        elementId: var_core_value_sigD4AA.elementId,
        element: var_core_value_sigCF1F.deepClone(var_core_value_sigD4AA.element),
        transform: var_core_value_sigD4AA.transform
      }
    }
  };
}
function Sn(var_core_value_sigFB47, var_core_value_sig9B3D1, var_core_value_sigC1CF, var_core_value_sigEE12) {
  let var_core_value_sigD70C = K(var_core_value_sigFB47, var_core_value_sigC1CF);
  for (; var_core_value_sigD70C != null && var_core_value_sigD70C.meta["parentNodeId"];) {
    if (var_core_value_sigD70C.meta["parentNodeId"] === var_core_value_sigEE12) return true;
    if (var_core_value_sigD70C = K(var_core_value_sigFB47, var_core_value_sigD70C.meta["parentNodeId"]), (var_core_value_sigD70C == null ? undefined : var_core_value_sigD70C.meta["structureScopeId"]) !== var_core_value_sig9B3D1) return false;
  }
  return false;
}
function Cn(var_core_value_sigF047, var_core_value_sigC2F9, var_core_value_sig1F51) {
  return [...dn(var_core_value_sigF047, var_core_value_sigC2F9, var_core_value_sig1F51)].map(var_core_value_sigCF4E => var_core_value_sigF047[var_core_value_sigCF4E]).filter(var_core_value_sig6CAD => !!var_core_value_sig6CAD);
}
function wn(var_core_value_sig29F5, var_core_value_sig5A51, var_core_value_sigF1D1, var_core_value_sig370E, var_core_value_sigDE14, var_core_value_sig02CB, var_core_value_sig6CBB) {
  if (var_core_value_sigDE14) return var_core_value_sigDE14;
  let var_core_value_sig68DA = Xt(var_core_value_sig29F5, var_core_value_sig5A51, var_core_value_sigF1D1).filter(var_core_value_sig8CF5 => var_core_value_sig8CF5.data["elementId"] !== var_core_value_sig370E),
    var_core_value_sig64D8 = var_core_value_sig02CB ? var_core_value_sig68DA.findIndex(var_core_value_sigDDD7 => var_core_value_sigDDD7.data["elementId"] === var_core_value_sig02CB) : -1;
  if (var_core_value_sig64D8 >= 0 && var_core_value_sig6CBB) {
    let var_core_value_sigB2CE = var_core_value_sig6CBB === "before" ? var_core_value_sig68DA[var_core_value_sig64D8 - 1] : var_core_value_sig68DA[var_core_value_sig64D8],
      var_core_value_sig443C = var_core_value_sig6CBB === "before" ? var_core_value_sig68DA[var_core_value_sig64D8] : var_core_value_sig68DA[var_core_value_sig64D8 + 1];
    return Ze(var_core_value_sigB2CE == null ? undefined : var_core_value_sigB2CE.meta["orderKey"], var_core_value_sig443C == null ? undefined : var_core_value_sig443C.meta["orderKey"]);
  }
  return Zt(var_core_value_sig68DA);
}
function Tn(var_core_value_sigD755, var_core_value_sigF897) {
  let var_core_value_sigA578 = var_core_value_sigCF1F.deepClone(var_core_value_sigD755.element),
    var_core_value_sig0260 = R(var_core_value_sigF897.branchLineType),
    var_core_value_sig034D = H(var_core_value_sigF897.parentNode),
    var_core_value_sig89EC = var_core_value_sigF897.timelineRootStructureKind ? En(var_core_value_sigF897.elementData, var_core_value_sigF897.parentNode["id"], var_core_value_sigF897.childNode["id"]) : undefined,
    var_core_value_sig9975 = var_core_value_sigF897.timelineRootStructureKind ? Me({
      idPrefix: var_core_value_sigA578.id,
      parentNode: var_core_value_sigF897.parentNode,
      childNode: var_core_value_sigF897.childNode,
      previousAxisNode: var_core_value_sig89EC,
      structureKind: var_core_value_sigF897.timelineRootStructureKind,
      childSide: var_core_value_sigF897.side,
      branchLineType: var_core_value_sig0260
    }) : var_core_value_sigF897.timelineHorizontalRootNodeId && (var_core_value_sig034D == null ? undefined : var_core_value_sig034D.parentNodeId) !== null ? Ne({
      idPrefix: var_core_value_sigA578.id,
      parentNode: var_core_value_sigF897.parentNode,
      childNode: var_core_value_sigF897.childNode,
      parentIsAxisNode: (var_core_value_sig034D == null ? undefined : var_core_value_sig034D.parentNodeId) === var_core_value_sigF897.timelineHorizontalRootNodeId,
      branchLineType: var_core_value_sig0260
    }) : var_core_value_sigF897.timelineVerticalRootNodeId && (var_core_value_sig034D == null ? undefined : var_core_value_sig034D.parentNodeId) !== null ? Pe({
      idPrefix: var_core_value_sigA578.id,
      parentNode: var_core_value_sigF897.parentNode,
      childNode: var_core_value_sigF897.childNode,
      parentIsAxisNode: (var_core_value_sig034D == null ? undefined : var_core_value_sig034D.parentNodeId) === var_core_value_sigF897.timelineVerticalRootNodeId,
      side: var_core_value_sigF897.side,
      branchLineType: var_core_value_sig0260,
      forceTrunk: var_core_value_sigF897.forceTrunk
    }) : var_core_value_sigF897.treeRootTrunk ? je({
      idPrefix: var_core_value_sigA578.id,
      parentNode: var_core_value_sigF897.parentNode,
      childNode: var_core_value_sigF897.childNode,
      side: var_core_value_sigF897.side,
      branchLineType: var_core_value_sig0260
    }) : null,
    {
      startSide: var_core_value_sigD6D9,
      endSide: var_core_value_sig2637
    } = var_core_value_sig9975 ?? L(var_core_value_sigF897.side),
    var_core_value_sigAF1D = (var_core_value_sig9975 == null ? undefined : var_core_value_sig9975.routePoints) ?? De({
      idPrefix: var_core_value_sigA578.id,
      parentNode: var_core_value_sigF897.parentNode,
      childNode: var_core_value_sigF897.childNode,
      side: var_core_value_sigF897.side,
      forceTrunk: var_core_value_sigF897.forceTrunk
    }),
    var_core_value_sigC92D = (var_core_value_sig9975 == null ? undefined : var_core_value_sig9975.curveData) ?? (var_core_value_sig0260 === "curve" ? Ae({
      idPrefix: var_core_value_sigA578.id,
      parentNode: var_core_value_sigF897.parentNode,
      childNode: var_core_value_sigF897.childNode,
      side: var_core_value_sigF897.side
    }) : undefined),
    var_core_value_sigEA3D = (var_core_value_sig9975 == null ? undefined : var_core_value_sig9975.transform) ?? Oe({
      parentNode: var_core_value_sigF897.parentNode,
      childNode: var_core_value_sigF897.childNode,
      side: var_core_value_sigF897.side,
      routePoints: var_core_value_sigAF1D,
      curveData: var_core_value_sigC92D
    });
  return var_core_value_sigA578.transform = var_core_value_sig1832(var_core_value_sigF897.elementData, {
    parentId: var_core_value_sigA578.parentId,
    worldTransform: var_core_value_sigEA3D
  }), var_core_value_sigA578.connectorData = {
    ...var_core_value_sigA578.connectorData,
    start: (var_core_value_sig9975 == null ? undefined : var_core_value_sig9975.startEndpoint) ?? we(var_core_value_sigF897.parentNode["id"], var_core_value_sigD6D9, (var_core_value_sig9975 == null ? undefined : var_core_value_sig9975.startPoint) ?? I(var_core_value_sigF897.parentNode, var_core_value_sigD6D9)),
    end: (var_core_value_sig9975 == null ? undefined : var_core_value_sig9975.endEndpoint) ?? we(var_core_value_sigF897.childNode["id"], var_core_value_sig2637, (var_core_value_sig9975 == null ? undefined : var_core_value_sig9975.endPoint) ?? I(var_core_value_sigF897.childNode, var_core_value_sig2637)),
    routing: var_core_value_sig0260 === "curve" ? "curve" : "orthogonal",
    routingMode: "manual",
    waypoints: var_core_value_sig0260 === "curve" ? [] : var_core_value_sigAF1D,
    orthogonalData: var_core_value_sig0260 === "curve" ? undefined : {
      ...(var_core_value_sigA578.connectorData["orthogonalData"] ?? {}),
      routePoints: var_core_value_sigAF1D
    },
    curveData: var_core_value_sigC92D,
    style: {
      ...(var_core_value_sigA578.connectorData["style"] ?? {}),
      cornerStyle: var_core_value_sig0260 === "orthogonal" ? "miter" : "rounded"
    }
  }, var_core_value_sig0260 !== "curve" && delete var_core_value_sigA578.connectorData["curveData"], var_core_value_sig0260 === "curve" && delete var_core_value_sigA578.connectorData["orthogonalData"], var_core_value_sigA578;
}
function En(var_core_value_sig2841, var_core_value_sig9FE1, var_core_value_sig9DAA) {
  var var_core_value_sig1F8A;
  let var_core_value_sigEBB4 = H((var_core_value_sig1F8A = var_core_value_sig2841[var_core_value_sig9FE1]) == null ? undefined : var_core_value_sig1F8A.element);
  if (!var_core_value_sigEBB4) return;
  let var_core_value_sig2B74 = Xt(var_core_value_sig2841, var_core_value_sigEBB4.structureScopeId, var_core_value_sig9FE1),
    var_core_value_sig0483 = var_core_value_sig2B74.findIndex(var_core_value_sig39B1 => var_core_value_sig39B1.data["elementId"] === var_core_value_sig9DAA);
  if (!(var_core_value_sig0483 <= 0)) return Jn(var_core_value_sig2841, var_core_value_sig2B74[var_core_value_sig0483 - 1].data["elementId"]) ?? undefined;
}
function Dn(var_core_value_sig4A48, var_core_value_sigD170, var_core_value_sig90E5, var_core_value_sig7000) {
  return Object.values(var_core_value_sig4A48).filter(var_core_value_sig210D => {
    let var_core_value_sigB4B4 = H(var_core_value_sig210D.element);
    return (var_core_value_sigB4B4 == null ? undefined : var_core_value_sigB4B4.structureScopeId) === var_core_value_sigD170 && var_core_value_sigB4B4.parentNodeId === var_core_value_sig90E5 && (var_core_value_sigB4B4.side ?? var_core_value_sig7000) === var_core_value_sig7000;
  }).length;
}
function On(var_core_value_sigD7C5, var_core_value_sig3633) {
  var var_core_value_sig1DF5, var_core_value_sig90A3;
  let var_core_value_sig28BE = H(var_core_value_sigD7C5.element),
    var_core_value_sig0224 = var_core_value_sigCF1F.deepClone(var_core_value_sigD7C5.element);
  if (var_core_value_sig0224.parentId = var_core_value_sig3633.scopeId, var_core_value_sig0224.custom = {
    ...(var_core_value_sig0224.custom ?? {}),
    structured: {
      ...(((var_core_value_sig1DF5 = var_core_value_sig0224.custom) == null ? undefined : var_core_value_sig1DF5.structured) ?? {}),
      modeId: var_core_value_sig28BE == null ? undefined : var_core_value_sig28BE.modeId,
      semanticRole: var_core_value_sig28BE == null ? undefined : var_core_value_sig28BE.semanticRole,
      structureScopeId: var_core_value_sig3633.scopeId
    },
    mindmap: {
      ...(((var_core_value_sig90A3 = var_core_value_sig0224.custom) == null ? undefined : var_core_value_sig90A3.mindmap) ?? {}),
      parentNodeId: var_core_value_sig3633.parentNodeId,
      orderKey: var_core_value_sig3633.orderKey,
      collapsed: (var_core_value_sig28BE == null ? undefined : var_core_value_sig28BE.collapsed) ?? false,
      ...(var_core_value_sig3633.root ? null : {
        side: var_core_value_sig3633.side ?? (var_core_value_sig28BE == null ? undefined : var_core_value_sig28BE.side) ?? "right"
      })
    }
  }, var_core_value_sig3633.root && (delete var_core_value_sig0224.custom["mindmap"].side, "shapeData" in var_core_value_sig0224)) {
    var var_core_value_sig854B;
    let var_core_value_sigD407 = var_core_value_sig0224.shapeData["shapeText"] ?? {},
      var_core_value_sig63F3 = var_core_value_sigD407.dataModel && typeof var_core_value_sigD407.dataModel == "object" ? var_core_value_sigCF1F.deepClone(var_core_value_sigD407.dataModel) : {},
      var_core_value_sig6A71 = typeof var_core_value_sigD407.text == "string" ? var_core_value_sigD407.text : "",
      var_core_value_sig3BF6 = var_core_value_sigD11F.CENTER,
      var_core_value_sig38CE = var_core_value_sig1293.MIDDLE,
      var_core_value_sig62B7 = Je({
        currentDataModel: var_core_value_sig63F3,
        horizontalAlign: var_core_value_sig3BF6,
        shapeText: {
          ...var_core_value_sigD407,
          color: Wt,
          fontSize: Gt
        },
        text: var_core_value_sig6A71,
        textStyle: qe({
          ...var_core_value_sigD407,
          color: Wt,
          fontSize: Gt
        }, undefined),
        verticalAlign: var_core_value_sig38CE
      }),
      var_core_value_sig37A8 = {
        ...var_core_value_sigD407,
        ...var_core_value_sig62B7,
        color: Wt,
        fontSize: Gt,
        horizontalAlign: var_core_value_sig3BF6,
        verticalAlign: var_core_value_sig38CE
      };
    var_core_value_sig0224.shapeData = {
      ...var_core_value_sig0224.shapeData,
      fill: {
        fillType: var_core_value_sigAD84.SolidFill,
        color: Ht
      },
      stroke: {
        ...(var_core_value_sig0224.shapeData["stroke"] ?? {}),
        lineStrokeType: ((var_core_value_sig854B = var_core_value_sig0224.shapeData["stroke"]) == null ? undefined : var_core_value_sig854B.lineStrokeType) ?? var_core_value_sigD513.SolidLine,
        color: Ut
      },
      textRectPadding: var_core_value_sig0224.shapeData["textRectPadding"] ?? {
        ...Ce
      },
      shapeText: var_core_value_sig37A8
    }, var_core_value_sig0224.custom["mindmap"] = {
      ...var_core_value_sig0224.custom["mindmap"],
      size: {
        minWidth: F.rootWidth,
        minHeight: F.rootHeight
      }
    };
  }
  if (var_core_value_sig3633.demoteToChild && "shapeData" in var_core_value_sig0224) {
    var var_core_value_sig1FF6;
    let var_core_value_sigA90D = var_core_value_sig0224.shapeData["shapeText"] ?? {},
      var_core_value_sig7A3C = var_core_value_sigA90D.dataModel && typeof var_core_value_sigA90D.dataModel == "object" ? var_core_value_sigCF1F.deepClone(var_core_value_sigA90D.dataModel) : {},
      var_core_value_sig0511 = typeof var_core_value_sigA90D.text == "string" ? var_core_value_sigA90D.text : "",
      var_core_value_sig1F44 = var_core_value_sigD11F.LEFT,
      var_core_value_sigCB04 = var_core_value_sig1293.MIDDLE,
      var_core_value_sig947E = Je({
        currentDataModel: var_core_value_sig7A3C,
        horizontalAlign: var_core_value_sig1F44,
        shapeText: {
          ...var_core_value_sigA90D,
          color: Jt,
          fontSize: Yt
        },
        text: var_core_value_sig0511,
        textStyle: qe({
          ...var_core_value_sigA90D,
          color: Jt,
          fontSize: Yt
        }, undefined),
        verticalAlign: var_core_value_sigCB04
      }),
      var_core_value_sig4545 = {
        ...var_core_value_sigA90D,
        ...var_core_value_sig947E,
        color: Jt,
        fontSize: Yt,
        horizontalAlign: var_core_value_sig1F44,
        verticalAlign: var_core_value_sigCB04
      };
    var_core_value_sig0224.shapeData = {
      ...var_core_value_sig0224.shapeData,
      fill: {
        fillType: var_core_value_sigAD84.SolidFill,
        color: Kt
      },
      stroke: {
        ...(var_core_value_sig0224.shapeData["stroke"] ?? {}),
        lineStrokeType: ((var_core_value_sig1FF6 = var_core_value_sig0224.shapeData["stroke"]) == null ? undefined : var_core_value_sig1FF6.lineStrokeType) ?? var_core_value_sigD513.SolidLine,
        color: qt
      },
      textRectPadding: var_core_value_sig0224.shapeData["textRectPadding"] ?? {
        ...Ce
      },
      shapeText: var_core_value_sig4545
    }, var_core_value_sig0224.custom["mindmap"] = {
      ...var_core_value_sig0224.custom["mindmap"],
      size: {
        minWidth: F.nodeWidth,
        minHeight: F.nodeHeight
      }
    };
  }
  return var_core_value_sig0224;
}
function kn(var_core_value_sig4B27, var_core_value_sig3A41) {
  var var_core_value_sig269A;
  let var_core_value_sigBF53 = U(var_core_value_sig4B27.element),
    var_core_value_sigD9BB = var_core_value_sigCF1F.deepClone(var_core_value_sig4B27.element);
  if (var_core_value_sigD9BB.parentId = var_core_value_sig3A41.scopeId, var_core_value_sigD9BB.custom = {
    ...(var_core_value_sigD9BB.custom ?? {}),
    structured: {
      ...(((var_core_value_sig269A = var_core_value_sigD9BB.custom) == null ? undefined : var_core_value_sig269A.structured) ?? {}),
      modeId: var_core_value_sigBF53 == null ? undefined : var_core_value_sigBF53.modeId,
      semanticRole: var_core_value_sigBF53 == null ? undefined : var_core_value_sigBF53.semanticRole,
      structureScopeId: var_core_value_sig3A41.scopeId
    },
    mindmap: {
      managed: true,
      parentNodeId: var_core_value_sig3A41.parentNodeId,
      childNodeId: var_core_value_sig3A41.childNodeId
    }
  }, var_core_value_sig3A41.updateEndpoints) {
    let {
      startSide: var_core_value_sigF39A,
      endSide: var_core_value_sigF79C
    } = L(var_core_value_sig3A41.side ?? "right");
    var_core_value_sigD9BB.connectorData = {
      ...var_core_value_sigD9BB.connectorData,
      start: we(var_core_value_sig3A41.parentNodeId, var_core_value_sigF39A),
      end: we(var_core_value_sig3A41.childNodeId, var_core_value_sigF79C)
    };
  }
  return var_core_value_sigD9BB;
}
function An(var_core_value_sigF549, var_core_value_sigC125, var_core_value_sigB63D, var_core_value_sig8255, var_core_value_sigBFC7, var_core_value_sig933F) {
  var_core_value_sigC125.forEach(var_core_value_sig2E54 => {
    let var_core_value_sig7658 = H(var_core_value_sig2E54.element);
    if (var_core_value_sig7658) {
      let var_core_value_sig09B8 = On(var_core_value_sig2E54, {
          scopeId: var_core_value_sigB63D.scopeId,
          parentNodeId: var_core_value_sig2E54.elementId === var_core_value_sigB63D.rootNodeId ? var_core_value_sigB63D.rootParentNodeId : var_core_value_sig7658.parentNodeId,
          orderKey: var_core_value_sig2E54.elementId === var_core_value_sigB63D.rootNodeId ? var_core_value_sigB63D.rootOrderKey : var_core_value_sig7658.orderKey,
          side: var_core_value_sig2E54.elementId === var_core_value_sigB63D.rootNodeId ? var_core_value_sigB63D.rootSide : var_core_value_sig7658.side,
          root: var_core_value_sig2E54.elementId === var_core_value_sigB63D.rootNodeId && var_core_value_sigB63D.rootIsDetached,
          demoteToChild: var_core_value_sig2E54.elementId === var_core_value_sigB63D.rootNodeId && var_core_value_sigB63D.rootIsDemoted
        }),
        var_core_value_sig6F91 = Y(var_core_value_sig2E54, var_core_value_sig09B8);
      var_core_value_sig8255.push(var_core_value_sig6F91.redoMutation), var_core_value_sigBFC7.unshift(var_core_value_sig6F91.undoMutation), var_core_value_sig933F && (var_core_value_sig933F[var_core_value_sig2E54.elementId] = X(var_core_value_sig2E54, var_core_value_sig09B8));
      return;
    }
    let var_core_value_sigDCF5 = U(var_core_value_sig2E54.element);
    if (var_core_value_sigDCF5 && var_core_value_sig2E54.elementId !== var_core_value_sigB63D.incomingConnectorId) {
      let var_core_value_sigF9C7 = K(var_core_value_sigF549, var_core_value_sigDCF5.childNodeId),
        var_core_value_sig8895 = kn(var_core_value_sig2E54, {
          scopeId: var_core_value_sigB63D.scopeId,
          parentNodeId: var_core_value_sigDCF5.parentNodeId,
          childNodeId: var_core_value_sigDCF5.childNodeId,
          side: var_core_value_sigF9C7 == null ? undefined : var_core_value_sigF9C7.meta["side"]
        }),
        var_core_value_sigC80B = Y(var_core_value_sig2E54, var_core_value_sig8895);
      var_core_value_sig8255.push(var_core_value_sigC80B.redoMutation), var_core_value_sigBFC7.unshift(var_core_value_sigC80B.undoMutation), var_core_value_sig933F && (var_core_value_sig933F[var_core_value_sig2E54.elementId] = X(var_core_value_sig2E54, var_core_value_sig8895));
      return;
    }
    let var_core_value_sigC786 = W(var_core_value_sig2E54.element);
    if (var_core_value_sigC786) {
      var var_core_value_sigC0D9, var_core_value_sigF0511;
      let var_core_value_sig284F = var_core_value_sigCF1F.deepClone(var_core_value_sig2E54.element);
      var_core_value_sig284F.parentId = var_core_value_sigB63D.scopeId, var_core_value_sig284F.custom = {
        ...(var_core_value_sig284F.custom ?? {}),
        structured: {
          ...(((var_core_value_sigC0D9 = var_core_value_sig284F.custom) == null ? undefined : var_core_value_sigC0D9.structured) ?? {}),
          modeId: var_core_value_sigC786.modeId,
          semanticRole: var_core_value_sigC786.semanticRole,
          structureScopeId: var_core_value_sigB63D.scopeId
        },
        mindmap: {
          ...(((var_core_value_sigF0511 = var_core_value_sig284F.custom) == null ? undefined : var_core_value_sigF0511.mindmap) ?? {}),
          ownerNodeId: var_core_value_sigC786.ownerNodeId
        }
      };
      let var_core_value_sigE154 = Y(var_core_value_sig2E54, var_core_value_sig284F);
      var_core_value_sig8255.push(var_core_value_sigE154.redoMutation), var_core_value_sigBFC7.unshift(var_core_value_sigE154.undoMutation), var_core_value_sig933F && (var_core_value_sig933F[var_core_value_sig2E54.elementId] = X(var_core_value_sig2E54, var_core_value_sig284F));
    }
  });
}
function jn(var_core_value_sig29DE, var_core_value_sig4AFB, var_core_value_sigC7EA, var_core_value_sigDAB9, var_core_value_sig9CF7) {
  var_core_value_sigC7EA.filter((var_core_value_sig5825, var_core_value_sig4EB7) => var_core_value_sigC7EA.indexOf(var_core_value_sig5825) === var_core_value_sig4EB7).forEach(var_core_value_sig73AF => {
    var var_core_value_sig548A, var_core_value_sigE026;
    let var_core_value_sig339E = (var_core_value_sig548A = V((var_core_value_sigE026 = var_core_value_sig4AFB[var_core_value_sig73AF]) == null ? undefined : var_core_value_sigE026.element)) == null ? undefined : var_core_value_sig548A.rootNodeId,
      var_core_value_sig7550 = var_core_value_sig339E ? var_core_value_sig79D7(var_core_value_sig29DE, var_core_value_sig339E) : null,
      var_core_value_sig2983 = Z(var_core_value_sig4AFB, var_core_value_sig73AF);
    if (!var_core_value_sig2983) return;
    let var_core_value_sigE1B0 = var_core_value_sig7550 && var_core_value_sig339E ? $n(var_core_value_sig4AFB, var_core_value_sig73AF, var_core_value_sig339E, var_core_value_sig7550) : null;
    var_core_value_sigDAB9.push(...var_core_value_sig2983.redoMutations, ...((var_core_value_sigE1B0 == null ? undefined : var_core_value_sigE1B0.redoMutations) ?? [])), var_core_value_sig9CF7.unshift(...((var_core_value_sigE1B0 == null ? undefined : var_core_value_sigE1B0.undoMutations) ?? []), ...var_core_value_sig2983.undoMutations);
  });
}
function Mn(var_core_value_sigCCE5) {
  let var_core_value_sig5933 = var_core_value_sigCCE5.filter(var_core_value_sigD4FF => !!H(var_core_value_sigD4FF.element)).map(var_core_value_sig1E5B => ({
      left: var_core_value_sig1E5B.element["transform"].left ?? 0,
      top: var_core_value_sig1E5B.element["transform"].top ?? 0,
      right: (var_core_value_sig1E5B.element["transform"].left ?? 0) + (var_core_value_sig1E5B.element["transform"].width ?? F.nodeWidth),
      bottom: (var_core_value_sig1E5B.element["transform"].top ?? 0) + (var_core_value_sig1E5B.element["transform"].height ?? F.nodeHeight)
    })),
    var_core_value_sig884B = F.containerPadding,
    var_core_value_sig4E30 = Math.min(...var_core_value_sig5933.map(var_core_value_sigB680 => var_core_value_sigB680.left)) - var_core_value_sig884B,
    var_core_value_sig9730 = Math.min(...var_core_value_sig5933.map(var_core_value_sig1F64 => var_core_value_sig1F64.top)) - var_core_value_sig884B,
    var_core_value_sig8E4A = Math.max(...var_core_value_sig5933.map(var_core_value_sigDD1C => var_core_value_sigDD1C.right)) + var_core_value_sig884B,
    var_core_value_sig300B = Math.max(...var_core_value_sig5933.map(var_core_value_sig2C39 => var_core_value_sig2C39.bottom)) + var_core_value_sig884B;
  return {
    left: var_core_value_sig4E30,
    top: var_core_value_sig9730,
    width: var_core_value_sig8E4A - var_core_value_sig4E30,
    height: var_core_value_sig300B - var_core_value_sig9730
  };
}
function Nn(var_core_value_sig8457, var_core_value_sigB30D) {
  let var_core_value_sigDB33 = H(var_core_value_sig8457.element);
  if ((var_core_value_sigDB33 == null ? undefined : var_core_value_sigDB33.structureScopeId) === var_core_value_sigB30D) return true;
  let var_core_value_sig6C8C = U(var_core_value_sig8457.element);
  if ((var_core_value_sig6C8C == null ? undefined : var_core_value_sig6C8C.structureScopeId) === var_core_value_sigB30D) return true;
  let var_core_value_sig7A5E = W(var_core_value_sig8457.element);
  return (var_core_value_sig7A5E == null ? undefined : var_core_value_sig7A5E.structureScopeId) === var_core_value_sigB30D || var_core_value_sig8457.element["id"] === var_core_value_sigB30D;
}
function Pn(var_core_value_sig838E, var_core_value_sig9A5B, var_core_value_sigC860) {
  let var_core_value_sigE64C = var_core_value_sigCF1F.deepClone(var_core_value_sig838E.element);
  return var_core_value_sigE64C.transform = {
    ...var_core_value_sigE64C.transform,
    left: (var_core_value_sigE64C.transform["left"] ?? 0) + var_core_value_sig9A5B,
    top: (var_core_value_sigE64C.transform["top"] ?? 0) + var_core_value_sigC860
  }, var_core_value_sigE64C;
}
function Fn(var_core_value_sigF39B, var_core_value_sig9B88) {
  let var_core_value_sig992A = var_core_value_sigF39B[var_core_value_sig9B88.scopeId],
    var_core_value_sig6281 = V(var_core_value_sig992A == null ? undefined : var_core_value_sig992A.element);
  if (!var_core_value_sig992A || !var_core_value_sig6281) return null;
  let var_core_value_sig9B01 = [],
    var_core_value_sigA724 = [],
    var_core_value_sig385E = {
      ...var_core_value_sigF39B
    },
    var_core_value_sig10D3 = new Set(var_core_value_sig9B88.excludeElementIds ?? []),
    var_core_value_sig41F2 = Pn(var_core_value_sig992A, var_core_value_sig9B88.deltaX, var_core_value_sig9B88.deltaY),
    var_core_value_sig32DD = Y(var_core_value_sig992A, var_core_value_sig41F2);
  return var_core_value_sig9B01.push(var_core_value_sig32DD.redoMutation), var_core_value_sigA724.unshift(var_core_value_sig32DD.undoMutation), var_core_value_sig385E[var_core_value_sig992A.elementId] = X(var_core_value_sig992A, var_core_value_sig41F2), var_core_value_sig9B88.preserveExcludedWorldTransforms && Object.values(var_core_value_sigF39B).filter(var_core_value_sigB7D1 => var_core_value_sig10D3.has(var_core_value_sigB7D1.elementId) && Nn(var_core_value_sigB7D1, var_core_value_sig9B88.scopeId) && In(var_core_value_sigB7D1, var_core_value_sigF39B, var_core_value_sig9B88.scopeId, var_core_value_sig10D3)).forEach(var_core_value_sig64F0 => {
    let var_core_value_sig85B1 = Pn(var_core_value_sig64F0, -var_core_value_sig9B88.deltaX, -var_core_value_sig9B88.deltaY),
      var_core_value_sig3141 = Y(var_core_value_sig64F0, var_core_value_sig85B1);
    var_core_value_sig9B01.push(var_core_value_sig3141.redoMutation), var_core_value_sigA724.unshift(var_core_value_sig3141.undoMutation), var_core_value_sig385E[var_core_value_sig64F0.elementId] = X(var_core_value_sig64F0, var_core_value_sig85B1);
  }), Object.values(var_core_value_sigF39B).forEach(var_core_value_sig2162 => {
    var var_core_value_sig2EAD, var_core_value_sig6774, var_core_value_sig340D, var_core_value_sig82D4, var_core_value_sigBDE4;
    let var_core_value_sig7DF1 = U(var_core_value_sig2162.element);
    if ((var_core_value_sig7DF1 == null ? undefined : var_core_value_sig7DF1.structureScopeId) !== var_core_value_sig9B88.scopeId || !("connectorData" in var_core_value_sig2162.element)) return;
    let var_core_value_sigDC86 = Jn(var_core_value_sig385E, var_core_value_sig7DF1.parentNodeId),
      var_core_value_sig0B0C = Jn(var_core_value_sig385E, var_core_value_sig7DF1.childNodeId),
      var_core_value_sigA39E = H(var_core_value_sig0B0C);
    if (!var_core_value_sigDC86 || !var_core_value_sig0B0C || !var_core_value_sigA39E) return;
    let var_core_value_sigBBEE = Tn(var_core_value_sig2162, {
        parentNode: var_core_value_sigDC86,
        childNode: var_core_value_sig0B0C,
        side: var_core_value_sigA39E.side ?? "right",
        elementData: var_core_value_sig385E,
        branchLineType: (var_core_value_sig2EAD = var_core_value_sig6281.layout) == null ? undefined : var_core_value_sig2EAD.branchLineType,
        treeRootTrunk: z((var_core_value_sig6774 = var_core_value_sig6281.layout) == null ? undefined : var_core_value_sig6774.structureKind) && var_core_value_sig7DF1.parentNodeId === var_core_value_sig6281.rootNodeId,
        timelineRootStructureKind: B((var_core_value_sig340D = var_core_value_sig6281.layout) == null ? undefined : var_core_value_sig340D.structureKind) && var_core_value_sig7DF1.parentNodeId === var_core_value_sig6281.rootNodeId ? var_core_value_sig6281.layout["structureKind"] : undefined,
        timelineHorizontalRootNodeId: ((var_core_value_sig82D4 = var_core_value_sig6281.layout) == null ? undefined : var_core_value_sig82D4.structureKind) === "timeline-horizontal" ? var_core_value_sig6281.rootNodeId : undefined,
        timelineVerticalRootNodeId: ((var_core_value_sigBDE4 = var_core_value_sig6281.layout) == null ? undefined : var_core_value_sigBDE4.structureKind) === "timeline-vertical" ? var_core_value_sig6281.rootNodeId : undefined,
        forceTrunk: Dn(var_core_value_sig385E, var_core_value_sig7DF1.structureScopeId, var_core_value_sig7DF1.parentNodeId, var_core_value_sigA39E.side ?? "right") > 1
      }),
      var_core_value_sig011D = Y(var_core_value_sig2162, var_core_value_sigBBEE);
    var_core_value_sig9B01.push(var_core_value_sig011D.redoMutation), var_core_value_sigA724.unshift(var_core_value_sig011D.undoMutation), var_core_value_sig385E[var_core_value_sig2162.elementId] = X(var_core_value_sig2162, var_core_value_sigBBEE);
  }), {
    redoMutations: var_core_value_sig9B01,
    undoMutations: var_core_value_sigA724
  };
}
function In(var_core_value_sig7A88, var_core_value_sig6CFC, var_core_value_sig3EC0, var_core_value_sigEA69) {
  let var_core_value_sigF42A = var_core_value_sig7A88.element["parentId"];
  for (; var_core_value_sigF42A;) {
    let var_core_value_sig4632 = var_core_value_sig6CFC[var_core_value_sigF42A];
    if (!var_core_value_sig4632) return false;
    if (Nn(var_core_value_sig4632, var_core_value_sig3EC0) && !var_core_value_sigEA69.has(var_core_value_sig4632.elementId)) return true;
    var_core_value_sigF42A = var_core_value_sig4632.element["parentId"];
  }
  return false;
}
function Ln(var_core_value_sig898E, var_core_value_sigC481, var_core_value_sig27B7) {
  let var_core_value_sig2DAD = Cn(var_core_value_sig898E, var_core_value_sigC481, var_core_value_sig27B7),
    var_core_value_sig00DE = new Set(var_core_value_sig2DAD.filter(var_core_value_sig6167 => !!H(var_core_value_sig6167.element)).map(var_core_value_sig65A1 => var_core_value_sig65A1.elementId));
  return var_core_value_sig2DAD.filter(var_core_value_sig7F19 => {
    if (H(var_core_value_sig7F19.element)) return true;
    let var_core_value_sig7827 = U(var_core_value_sig7F19.element);
    if (var_core_value_sig7827 && var_core_value_sig00DE.has(var_core_value_sig7827.parentNodeId) && var_core_value_sig00DE.has(var_core_value_sig7827.childNodeId)) return true;
    let var_core_value_sig652C = W(var_core_value_sig7F19.element);
    return !!var_core_value_sig652C && var_core_value_sig00DE.has(var_core_value_sig652C.ownerNodeId);
  }).map(var_core_value_sig7E32 => var_core_value_sigCF1F.deepClone(var_core_value_sig7E32.element));
}
function Rn(var_core_value_sigEF7C, var_core_value_sig07E7) {
  return (var_core_value_sig07E7 == null ? undefined : var_core_value_sig07E7[var_core_value_sigEF7C]) ?? var_core_value_sig95D9(6);
}
function zn(var_core_value_sig6005, var_core_value_sig25A4) {
  if (var_core_value_sig6005.kind === "free") return var_core_value_sig6005;
  let var_core_value_sigB591 = var_core_value_sig25A4.get(var_core_value_sig6005.shapeId);
  return var_core_value_sigB591 ? {
    ...var_core_value_sig6005,
    shapeId: var_core_value_sigB591
  } : var_core_value_sig6005;
}
function Bn(var_core_value_sigB272, var_core_value_sig6F52) {
  var var_core_value_sig09C4, var_core_value_sig8E3E;
  let var_core_value_sigC3D3 = H(var_core_value_sigB272),
    var_core_value_sig1451 = var_core_value_sigCF1F.deepClone(var_core_value_sigB272);
  return var_core_value_sig1451.id = var_core_value_sig6F52.id, var_core_value_sig1451.parentId = var_core_value_sig6F52.scopeId, var_core_value_sig1451.transform = {
    ...var_core_value_sig1451.transform,
    left: (var_core_value_sig1451.transform["left"] ?? 0) + var_core_value_sig6F52.deltaX,
    top: (var_core_value_sig1451.transform["top"] ?? 0) + var_core_value_sig6F52.deltaY
  }, var_core_value_sig1451.custom = {
    ...(var_core_value_sig1451.custom ?? {}),
    structured: {
      ...(((var_core_value_sig09C4 = var_core_value_sig1451.custom) == null ? undefined : var_core_value_sig09C4.structured) ?? {}),
      modeId: var_core_value_sigC3D3 == null ? undefined : var_core_value_sigC3D3.modeId,
      semanticRole: var_core_value_sigC3D3 == null ? undefined : var_core_value_sigC3D3.semanticRole,
      structureScopeId: var_core_value_sig6F52.scopeId
    },
    mindmap: {
      ...(((var_core_value_sig8E3E = var_core_value_sig1451.custom) == null ? undefined : var_core_value_sig8E3E.mindmap) ?? {}),
      parentNodeId: var_core_value_sig6F52.parentNodeId,
      orderKey: var_core_value_sig6F52.orderKey,
      collapsed: (var_core_value_sigC3D3 == null ? undefined : var_core_value_sigC3D3.collapsed) ?? false,
      ...(var_core_value_sig6F52.parentNodeId === null ? null : {
        side: var_core_value_sig6F52.side ?? (var_core_value_sigC3D3 == null ? undefined : var_core_value_sigC3D3.side) ?? "right"
      })
    }
  }, var_core_value_sig6F52.parentNodeId === null && delete var_core_value_sig1451.custom["mindmap"].side, var_core_value_sig1451;
}
function Vn(var_core_value_sigAD57, var_core_value_sig58A8) {
  var var_core_value_sigEC1A;
  let var_core_value_sigBDED = U(var_core_value_sigAD57),
    var_core_value_sig4BFF = var_core_value_sig4935(var_core_value_sigCF1F.deepClone(var_core_value_sigAD57), {
      x: var_core_value_sig58A8.deltaX,
      y: var_core_value_sig58A8.deltaY
    });
  return var_core_value_sig4BFF.id = var_core_value_sig58A8.id, var_core_value_sig4BFF.parentId = var_core_value_sig58A8.scopeId, var_core_value_sig4BFF.transform = {
    ...var_core_value_sig4BFF.transform,
    left: (var_core_value_sig4BFF.transform["left"] ?? 0) + var_core_value_sig58A8.deltaX,
    top: (var_core_value_sig4BFF.transform["top"] ?? 0) + var_core_value_sig58A8.deltaY
  }, var_core_value_sig4BFF.connectorData = {
    ...var_core_value_sig4BFF.connectorData,
    start: zn(var_core_value_sig4BFF.connectorData["start"], var_core_value_sig58A8.idMap),
    end: zn(var_core_value_sig4BFF.connectorData["end"], var_core_value_sig58A8.idMap)
  }, var_core_value_sig4BFF.custom = {
    ...(var_core_value_sig4BFF.custom ?? {}),
    structured: {
      ...(((var_core_value_sigEC1A = var_core_value_sig4BFF.custom) == null ? undefined : var_core_value_sigEC1A.structured) ?? {}),
      modeId: var_core_value_sigBDED == null ? undefined : var_core_value_sigBDED.modeId,
      semanticRole: var_core_value_sigBDED == null ? undefined : var_core_value_sigBDED.semanticRole,
      structureScopeId: var_core_value_sig58A8.scopeId
    },
    mindmap: {
      managed: true,
      parentNodeId: var_core_value_sig58A8.parentNodeId,
      childNodeId: var_core_value_sig58A8.childNodeId
    }
  }, var_core_value_sig4BFF;
}
function Hn(var_core_value_sig40E7, var_core_value_sigEDBA) {
  var var_core_value_sigE863, var_core_value_sig04B4;
  let var_core_value_sig1C07 = W(var_core_value_sig40E7),
    var_core_value_sig93D6 = var_core_value_sigCF1F.deepClone(var_core_value_sig40E7);
  return var_core_value_sig93D6.id = var_core_value_sigEDBA.id, var_core_value_sig93D6.parentId = var_core_value_sigEDBA.scopeId, var_core_value_sig93D6.transform = {
    ...var_core_value_sig93D6.transform,
    left: (var_core_value_sig93D6.transform["left"] ?? 0) + var_core_value_sigEDBA.deltaX,
    top: (var_core_value_sig93D6.transform["top"] ?? 0) + var_core_value_sigEDBA.deltaY
  }, var_core_value_sig93D6.custom = {
    ...(var_core_value_sig93D6.custom ?? {}),
    structured: {
      ...(((var_core_value_sigE863 = var_core_value_sig93D6.custom) == null ? undefined : var_core_value_sigE863.structured) ?? {}),
      modeId: var_core_value_sig1C07 == null ? undefined : var_core_value_sig1C07.modeId,
      semanticRole: var_core_value_sig1C07 == null ? undefined : var_core_value_sig1C07.semanticRole,
      structureScopeId: var_core_value_sigEDBA.scopeId
    },
    mindmap: {
      ...(((var_core_value_sig04B4 = var_core_value_sig93D6.custom) == null ? undefined : var_core_value_sig04B4.mindmap) ?? {}),
      ownerNodeId: var_core_value_sigEDBA.ownerNodeId
    }
  }, var_core_value_sig93D6;
}
function Un(var_core_value_sigDD05, var_core_value_sig3932) {
  return Object.values(var_core_value_sigDD05).map(var_core_value_sig4C07 => {
    let var_core_value_sig79AB = H(var_core_value_sig4C07.element);
    return (var_core_value_sig79AB == null ? undefined : var_core_value_sig79AB.structureScopeId) === var_core_value_sig3932 && var_core_value_sig79AB.parentNodeId === null ? {
      data: var_core_value_sig4C07,
      meta: var_core_value_sig79AB
    } : null;
  }).find(var_core_value_sig8E74 => !!var_core_value_sig8E74) ?? null;
}
function Wn(var_core_value_sig48B2) {
  return var_core_value_sig48B2.element["transform"].height ?? F.nodeHeight;
}
function Gn(var_core_value_sig57DF) {
  return var_core_value_sig57DF.element["transform"].width ?? F.nodeWidth;
}
function Kn(var_core_value_sigC985, var_core_value_sig8DA6, var_core_value_sigCA69) {
  let var_core_value_sigB77C = var_core_value_sigCF1F.deepClone(var_core_value_sigC985.element);
  return var_core_value_sigB77C.transform = {
    ...var_core_value_sigB77C.transform,
    left: var_core_value_sig8DA6,
    top: var_core_value_sigCA69
  }, var_core_value_sigB77C;
}
function X(var_core_value_sig9AFF, var_core_value_sig3545) {
  return {
    ...var_core_value_sig9AFF,
    element: var_core_value_sig3545,
    transform: var_core_value_sig3545.transform
  };
}
function qn(var_core_value_sig5EE4, var_core_value_sig7EAB, var_core_value_sig56B9) {
  return {
    unitId: var_core_value_sig5EE4,
    subUnitId: var_core_value_sig7EAB,
    elementId: var_core_value_sig56B9.id,
    element: var_core_value_sig56B9,
    transform: var_core_value_sig56B9.transform,
    hidden: var_core_value_sig56B9.visible === false
  };
}
function Jn(var_core_value_sig90CF, var_core_value_sigA386) {
  var var_core_value_sigCD6E;
  let var_core_value_sigFD9D = var_core_value_sig90CF[var_core_value_sigA386],
    var_core_value_sigA2A4 = H(var_core_value_sigFD9D == null ? undefined : var_core_value_sigFD9D.element);
  if (!var_core_value_sigFD9D || !var_core_value_sigA2A4) return null;
  let var_core_value_sigA1AC = (var_core_value_sigCD6E = var_core_value_sig5E01(var_core_value_sig90CF, var_core_value_sigA386)) == null ? undefined : var_core_value_sigCD6E.worldTransform;
  return var_core_value_sigA1AC ? {
    ...var_core_value_sigFD9D.element,
    transform: {
      ...(var_core_value_sigFD9D.element["transform"] ?? {}),
      ...var_core_value_sigA1AC
    }
  } : var_core_value_sigFD9D.element;
}
function Yn(var_core_value_sig6180, var_core_value_sigB93D, var_core_value_sigB17C) {
  return {
    id: var_core_value_sigB93D.data["elementId"],
    parentId: var_core_value_sigB93D.meta["parentNodeId"],
    side: var_core_value_sigB93D.meta["side"],
    collapsed: var_core_value_sigB93D.meta["collapsed"],
    width: Gn(var_core_value_sigB93D.data),
    height: Wn(var_core_value_sigB93D.data),
    children: Xt(var_core_value_sig6180, var_core_value_sigB93D.meta["structureScopeId"], var_core_value_sigB93D.data["elementId"]).map(var_core_value_sig104C => Yn(var_core_value_sig6180, var_core_value_sig104C, var_core_value_sigB17C))
  };
}
function Xn(var_core_value_sig69B6) {
  let var_core_value_sig708D = var_core_value_sig69B6.filter(var_core_value_sig841D => !!H(var_core_value_sig841D)),
    var_core_value_sig1ED2 = F.containerPadding,
    var_core_value_sig94C1 = Math.min(...var_core_value_sig708D.map(var_core_value_sig90CB => var_core_value_sig90CB.transform["left"] ?? 0)) - var_core_value_sig1ED2,
    var_core_value_sigABAC = Math.min(...var_core_value_sig708D.map(var_core_value_sigBDF5 => var_core_value_sigBDF5.transform["top"] ?? 0)) - var_core_value_sig1ED2,
    var_core_value_sigFAE6 = Math.max(...var_core_value_sig708D.map(var_core_value_sigACC6 => (var_core_value_sigACC6.transform["left"] ?? 0) + (var_core_value_sigACC6.transform["width"] ?? F.nodeWidth))) + var_core_value_sig1ED2,
    var_core_value_sig06AC = Math.max(...var_core_value_sig708D.map(var_core_value_sig1614 => (var_core_value_sig1614.transform["top"] ?? 0) + (var_core_value_sig1614.transform["height"] ?? F.nodeHeight))) + var_core_value_sig1ED2;
  return {
    left: var_core_value_sig94C1,
    top: var_core_value_sigABAC,
    width: var_core_value_sigFAE6 - var_core_value_sig94C1,
    height: var_core_value_sig06AC - var_core_value_sigABAC
  };
}
function Zn(var_core_value_sig57E2, var_core_value_sig01FC) {
  var var_core_value_sig10FC;
  let var_core_value_sig5374 = Un(var_core_value_sig57E2, var_core_value_sig01FC),
    var_core_value_sigB66D = var_core_value_sig57E2[var_core_value_sig01FC];
  if (!var_core_value_sig5374 || !var_core_value_sigB66D) return null;
  let var_core_value_sigD0F0 = V(var_core_value_sigB66D.element),
    var_core_value_sig8E31 = (var_core_value_sigD0F0 == null ? undefined : var_core_value_sigD0F0.layout) ?? N,
    var_core_value_sig8339 = var_core_value_sig5374.data["element"].transform["left"] ?? 0,
    var_core_value_sigA01E = var_core_value_sig5374.data["element"].transform["top"] ?? 0,
    var_core_value_sigA41E = ((var_core_value_sig10FC = var_core_value_sig5E01(var_core_value_sig57E2, var_core_value_sig01FC)) == null ? undefined : var_core_value_sig10FC.worldTransform) ?? var_core_value_sigB66D.element["transform"],
    var_core_value_sig939C = var_core_value_sigA41E.left ?? 0,
    var_core_value_sigA49E = var_core_value_sigA41E.top ?? 0,
    var_core_value_sig6DEB = _t(Yn(var_core_value_sig57E2, var_core_value_sig5374, {
      rootNodeId: var_core_value_sigD0F0 == null ? undefined : var_core_value_sigD0F0.rootNodeId,
      structureKind: var_core_value_sig8E31.structureKind
    }), {
      rootLeft: var_core_value_sig8339,
      rootTop: var_core_value_sigA01E,
      structureKind: var_core_value_sig8E31.structureKind,
      horizontalGap: var_core_value_sig8E31.horizontalGap,
      siblingGap: var_core_value_sig8E31.siblingGap
    }),
    var_core_value_sig2F0D = Object.values(var_core_value_sig57E2).filter(var_core_value_sig85C3 => {
      let var_core_value_sigB996 = H(var_core_value_sig85C3.element);
      return (var_core_value_sigB996 == null ? undefined : var_core_value_sigB996.structureScopeId) === var_core_value_sig01FC && var_core_value_sig85C3.element["visible"] !== false;
    }),
    var_core_value_sig5141 = var_core_value_sig2F0D.map(var_core_value_sig4BBA => {
      let var_core_value_sig6201 = var_core_value_sig6DEB.get(var_core_value_sig4BBA.elementId);
      return var_core_value_sig6201 ? Kn(var_core_value_sig4BBA, var_core_value_sig939C + var_core_value_sig6201.left, var_core_value_sigA49E + var_core_value_sig6201.top) : var_core_value_sig4BBA.element;
    });
  if (!var_core_value_sig5141.length) return null;
  let var_core_value_sigA9E0 = var_core_value_sigCF1F.deepClone(var_core_value_sigB66D.element),
    var_core_value_sig751D = Xn(var_core_value_sig5141);
  var_core_value_sigA9E0.transform = var_core_value_sig1832(var_core_value_sig57E2, {
    parentId: var_core_value_sigA9E0.parentId,
    worldTransform: {
      ...var_core_value_sigA9E0.transform,
      ...var_core_value_sig751D
    }
  });
  let var_core_value_sig2E9A = {
    ...var_core_value_sig57E2
  };
  var_core_value_sig2E9A[var_core_value_sig01FC] = X(var_core_value_sigB66D, var_core_value_sigA9E0);
  let var_core_value_sigE105 = [];
  return var_core_value_sig2F0D.forEach(var_core_value_sig5151 => {
    let var_core_value_sigB542 = var_core_value_sig6DEB.get(var_core_value_sig5151.elementId);
    if (!var_core_value_sigB542) return;
    let var_core_value_sigBB6C = Kn(var_core_value_sig5151, var_core_value_sig939C + var_core_value_sigB542.left, var_core_value_sigA49E + var_core_value_sigB542.top);
    var_core_value_sigBB6C.transform = var_core_value_sig1832(var_core_value_sig2E9A, {
      parentId: var_core_value_sigBB6C.parentId,
      worldTransform: {
        ...var_core_value_sigBB6C.transform
      }
    }), var_core_value_sigE105.push(var_core_value_sigBB6C), var_core_value_sig2E9A[var_core_value_sig5151.elementId] = X(var_core_value_sig5151, var_core_value_sigBB6C);
  }), Object.values(var_core_value_sig57E2).forEach(var_core_value_sigE2BF => {
    var var_core_value_sigB8C7, var_core_value_sigA56E;
    let var_core_value_sig1998 = W(var_core_value_sigE2BF.element);
    if ((var_core_value_sig1998 == null ? undefined : var_core_value_sig1998.structureScopeId) !== var_core_value_sig01FC) return;
    let var_core_value_sigFF19 = var_core_value_sig2E9A[var_core_value_sig1998.ownerNodeId],
      var_core_value_sig43B8 = (var_core_value_sigB8C7 = var_core_value_sig5E01(var_core_value_sig2E9A, var_core_value_sig1998.ownerNodeId)) == null ? undefined : var_core_value_sigB8C7.worldTransform,
      var_core_value_sigD98F = (var_core_value_sigA56E = var_core_value_sig5E01(var_core_value_sig57E2, var_core_value_sigE2BF.elementId)) == null ? undefined : var_core_value_sigA56E.worldTransform;
    if (!var_core_value_sigFF19 || !var_core_value_sig43B8 || !var_core_value_sigD98F) return;
    let var_core_value_sig66C0 = var_core_value_sigCF1F.deepClone(var_core_value_sigE2BF.element);
    var_core_value_sig66C0.visible = var_core_value_sigFF19.element["visible"], var_core_value_sig66C0.transform = var_core_value_sig1832(var_core_value_sig2E9A, {
      parentId: var_core_value_sig66C0.parentId,
      worldTransform: {
        ...var_core_value_sigD98F,
        left: (var_core_value_sig43B8.left ?? 0) + var_core_value_sig1998.offsetX,
        top: (var_core_value_sig43B8.top ?? 0) + var_core_value_sig1998.offsetY
      }
    }), var_core_value_sigE105.push(var_core_value_sig66C0), var_core_value_sig2E9A[var_core_value_sigE2BF.elementId] = X(var_core_value_sigE2BF, var_core_value_sig66C0);
  }), Object.values(var_core_value_sig57E2).forEach(var_core_value_sig9D15 => {
    let var_core_value_sigB785 = U(var_core_value_sig9D15.element);
    if ((var_core_value_sigB785 == null ? undefined : var_core_value_sigB785.structureScopeId) !== var_core_value_sig01FC || !("connectorData" in var_core_value_sig9D15.element)) return;
    let var_core_value_sig130F = Jn(var_core_value_sig2E9A, var_core_value_sigB785.parentNodeId),
      var_core_value_sigC0E3 = Jn(var_core_value_sig2E9A, var_core_value_sigB785.childNodeId),
      var_core_value_sig52F7 = H(var_core_value_sigC0E3);
    if (!var_core_value_sig130F || !var_core_value_sigC0E3 || !var_core_value_sig52F7) return;
    let var_core_value_sig866F = Tn(var_core_value_sig9D15, {
      parentNode: var_core_value_sig130F,
      childNode: var_core_value_sigC0E3,
      side: var_core_value_sig52F7.side ?? "right",
      elementData: var_core_value_sig2E9A,
      branchLineType: var_core_value_sig8E31.branchLineType,
      treeRootTrunk: z(var_core_value_sig8E31.structureKind) && var_core_value_sigB785.parentNodeId === (var_core_value_sigD0F0 == null ? undefined : var_core_value_sigD0F0.rootNodeId),
      timelineRootStructureKind: B(var_core_value_sig8E31.structureKind) && var_core_value_sigB785.parentNodeId === (var_core_value_sigD0F0 == null ? undefined : var_core_value_sigD0F0.rootNodeId) ? var_core_value_sig8E31.structureKind : undefined,
      timelineHorizontalRootNodeId: var_core_value_sig8E31.structureKind === "timeline-horizontal" ? var_core_value_sigD0F0 == null ? undefined : var_core_value_sigD0F0.rootNodeId : undefined,
      timelineVerticalRootNodeId: var_core_value_sig8E31.structureKind === "timeline-vertical" ? var_core_value_sigD0F0 == null ? undefined : var_core_value_sigD0F0.rootNodeId : undefined,
      forceTrunk: Dn(var_core_value_sig2E9A, var_core_value_sigB785.structureScopeId, var_core_value_sigB785.parentNodeId, var_core_value_sig52F7.side ?? "right") > 1
    });
    var_core_value_sigE105.push(var_core_value_sig866F), var_core_value_sig2E9A[var_core_value_sig9D15.elementId] = X(var_core_value_sig9D15, var_core_value_sig866F);
  }), var_core_value_sigE105.push(var_core_value_sigA9E0), var_core_value_sigE105;
}
function Qn(var_core_value_sig0BD6, var_core_value_sig3070) {
  let var_core_value_sigC66D = Zn(var_core_value_sig0BD6, var_core_value_sig3070);
  if (!var_core_value_sigC66D) return null;
  let var_core_value_sig8EC5 = {
    ...var_core_value_sig0BD6
  };
  return var_core_value_sigC66D.forEach(var_core_value_sigDE3D => {
    let var_core_value_sigF175 = var_core_value_sig0BD6[var_core_value_sigDE3D.id];
    var_core_value_sigF175 && (var_core_value_sig8EC5[var_core_value_sigDE3D.id] = X(var_core_value_sigF175, var_core_value_sigDE3D));
  }), var_core_value_sig8EC5;
}
function $n(var_core_value_sig1056, var_core_value_sig6EE5, var_core_value_sig9DD9, var_core_value_sig09AC) {
  let var_core_value_sig1613 = Qn(var_core_value_sig1056, var_core_value_sig6EE5);
  if (!var_core_value_sig1613) return null;
  let var_core_value_sigADC6 = var_core_value_sig79D7(var_core_value_sig1613, var_core_value_sig9DD9);
  if (!var_core_value_sigADC6) return null;
  let var_core_value_sig4620 = var_core_value_sig09AC.left - var_core_value_sigADC6.left,
    var_core_value_sig07FB = var_core_value_sig09AC.top - var_core_value_sigADC6.top;
  return var_core_value_sig4620 === 0 && var_core_value_sig07FB === 0 ? null : Fn(var_core_value_sig1613, {
    scopeId: var_core_value_sig6EE5,
    deltaX: var_core_value_sig4620,
    deltaY: var_core_value_sig07FB
  });
}
function Z(var_core_value_sig617E, var_core_value_sigC85E) {
  let var_core_value_sig8293 = Zn(var_core_value_sig617E, var_core_value_sigC85E);
  if (!var_core_value_sig8293) return null;
  let var_core_value_sig050D = [],
    var_core_value_sig37AE = [];
  return var_core_value_sig8293.forEach(var_core_value_sig6A18 => {
    let var_core_value_sig4E3D = var_core_value_sig617E[var_core_value_sig6A18.id];
    if (!var_core_value_sig4E3D || on(var_core_value_sig4E3D.element, var_core_value_sig6A18)) return;
    let var_core_value_sig49B0 = Y(var_core_value_sig4E3D, var_core_value_sig6A18);
    var_core_value_sig050D.push(var_core_value_sig49B0.redoMutation), var_core_value_sig37AE.unshift(var_core_value_sig49B0.undoMutation);
  }), {
    redoMutations: var_core_value_sig050D,
    undoMutations: var_core_value_sig37AE
  };
}
function er(var_core_value_sig5B51) {
  let var_core_value_sig64FF = var_core_value_sig5B51.elementOrder["filter"](var_core_value_sig2547 => {
    var var_core_value_sigBCA9, var_core_value_sig4CDF, var_core_value_sig3F79, var_core_value_sig880E, var_core_value_sigC9ED;
    let var_core_value_sigB57B = (var_core_value_sigBCA9 = var_core_value_sig5B51.elementData[var_core_value_sig2547]) == null ? undefined : var_core_value_sigBCA9.element;
    return ((var_core_value_sig4CDF = V(var_core_value_sigB57B)) == null ? undefined : var_core_value_sig4CDF.structureScopeId) === var_core_value_sig5B51.scopeId || ((var_core_value_sig3F79 = H(var_core_value_sigB57B)) == null ? undefined : var_core_value_sig3F79.structureScopeId) === var_core_value_sig5B51.scopeId || ((var_core_value_sig880E = U(var_core_value_sigB57B)) == null ? undefined : var_core_value_sig880E.structureScopeId) === var_core_value_sig5B51.scopeId || ((var_core_value_sigC9ED = W(var_core_value_sigB57B)) == null ? undefined : var_core_value_sigC9ED.structureScopeId) === var_core_value_sig5B51.scopeId;
  });
  if (!var_core_value_sig64FF.length) return null;
  let var_core_value_sig86F4 = var_core_value_sig64FF.filter(var_core_value_sig780B => {
      var var_core_value_sig7D1B;
      return !!V((var_core_value_sig7D1B = var_core_value_sig5B51.elementData[var_core_value_sig780B]) == null ? undefined : var_core_value_sig7D1B.element);
    }),
    var_core_value_sig9E0F = var_core_value_sig64FF.filter(var_core_value_sig7BE0 => {
      var var_core_value_sig7D40;
      return !!U((var_core_value_sig7D40 = var_core_value_sig5B51.elementData[var_core_value_sig7BE0]) == null ? undefined : var_core_value_sig7D40.element);
    }),
    var_core_value_sig3A42 = var_core_value_sig64FF.filter(var_core_value_sig6C7E => {
      var var_core_value_sig68BE;
      return !!H((var_core_value_sig68BE = var_core_value_sig5B51.elementData[var_core_value_sig6C7E]) == null ? undefined : var_core_value_sig68BE.element);
    }),
    var_core_value_sig8802 = var_core_value_sig64FF.filter(var_core_value_sig04C6 => {
      var var_core_value_sigCA05;
      return !!W((var_core_value_sigCA05 = var_core_value_sig5B51.elementData[var_core_value_sig04C6]) == null ? undefined : var_core_value_sigCA05.element);
    }),
    var_core_value_sig95D5 = [...var_core_value_sig86F4, ...var_core_value_sig9E0F, ...var_core_value_sig3A42, ...var_core_value_sig8802],
    var_core_value_sigE027 = 0,
    var_core_value_sigE537 = new Set(var_core_value_sig64FF),
    var_core_value_sig5D84 = var_core_value_sig5B51.elementOrder["map"](var_core_value_sig2F2B => var_core_value_sigE537.has(var_core_value_sig2F2B) ? var_core_value_sig95D5[var_core_value_sigE027++] ?? var_core_value_sig2F2B : var_core_value_sig2F2B);
  return var_core_value_sig5D84.every((var_core_value_sig70AF, var_core_value_sigD04E) => var_core_value_sig70AF === var_core_value_sig5B51.elementOrder[var_core_value_sigD04E]) ? null : {
    redoMutation: {
      id: var_core_value_sig0642.id,
      params: {
        unitId: var_core_value_sig5B51.unitId,
        subUnitId: var_core_value_sig5B51.subUnitId,
        elementIds: var_core_value_sig5D84
      }
    },
    undoMutation: {
      id: var_core_value_sig0642.id,
      params: {
        unitId: var_core_value_sig5B51.unitId,
        subUnitId: var_core_value_sig5B51.subUnitId,
        elementIds: var_core_value_sig5B51.elementOrder
      }
    }
  };
}
function tr(var_core_value_sigD120, var_core_value_sigAA05) {
  return var_core_value_sigD120 === undefined || Number.isFinite(var_core_value_sigD120) && var_core_value_sigD120 >= var_core_value_sigAA05.min && var_core_value_sigD120 <= var_core_value_sigAA05.max;
}
function nr(var_core_value_sigC04C, var_core_value_sig2069) {
  if (!Number.isFinite(var_core_value_sigC04C.left) || !Number.isFinite(var_core_value_sigC04C.top) || !Number.isFinite(var_core_value_sigC04C.width) || !Number.isFinite(var_core_value_sigC04C.height) || var_core_value_sigC04C.width <= 0 || var_core_value_sigC04C.height <= 0 || !Number.isFinite(var_core_value_sig2069) || var_core_value_sig2069 < 0) return null;
  let var_core_value_sig5176 = var_core_value_sigC04C.width - var_core_value_sig2069 * 2,
    var_core_value_sig71A1 = var_core_value_sigC04C.height - var_core_value_sig2069 * 2;
  return var_core_value_sig5176 > 0 && var_core_value_sig71A1 > 0 ? {
    left: var_core_value_sigC04C.left + var_core_value_sig2069,
    top: var_core_value_sigC04C.top + var_core_value_sig2069,
    width: var_core_value_sig5176,
    height: var_core_value_sig71A1
  } : null;
}
function rr(var_core_value_sig72AD, var_core_value_sig9ABE) {
  return var_core_value_sig9ABE.width <= var_core_value_sig72AD.width && var_core_value_sig9ABE.height <= var_core_value_sig72AD.height;
}
function ir(var_core_value_sig8EF01, var_core_value_sig234B, var_core_value_sig8169) {
  let var_core_value_sigC5FB = q(var_core_value_sig234B.structureKind ?? var_core_value_sig8EF01.layout["structureKind"]);
  return {
    ...var_core_value_sig8EF01.layout,
    direction: var_core_value_sig234B.direction ?? (var_core_value_sigC5FB === "mindmap-horizontal" ? "both" : var_core_value_sig8EF01.layout["direction"]),
    ...(var_core_value_sig234B.structureKind === undefined ? null : {
      structureKind: var_core_value_sig234B.structureKind
    }),
    branchLineType: nt(var_core_value_sigC5FB, var_core_value_sig234B.branchLineType ?? var_core_value_sig8EF01.layout["branchLineType"]),
    horizontalGap: var_core_value_sig8169 ? P.horizontalGap["min"] : var_core_value_sig234B.horizontalGap ?? var_core_value_sig8EF01.layout["horizontalGap"],
    siblingGap: var_core_value_sig8169 ? P.siblingGap["min"] : var_core_value_sig234B.siblingGap ?? var_core_value_sig8EF01.layout["siblingGap"],
    branchGap: var_core_value_sig8169 ? P.branchGap["min"] : var_core_value_sig234B.branchGap ?? var_core_value_sig8EF01.layout["branchGap"]
  };
}
function ar(var_core_value_sig5453, var_core_value_sig8725, var_core_value_sig513B) {
  var var_core_value_sig5501;
  let var_core_value_sig7784 = var_core_value_sig5453[var_core_value_sig8725.scopeId],
    var_core_value_sigB706 = V(var_core_value_sig7784 == null ? undefined : var_core_value_sig7784.element);
  if (!var_core_value_sig7784 || !var_core_value_sigB706) return null;
  let var_core_value_sig5FD01 = ir(var_core_value_sigB706, var_core_value_sig8725, var_core_value_sig513B),
    var_core_value_sig77E3 = q(var_core_value_sig5FD01.structureKind),
    var_core_value_sigB071 = var_core_value_sig5FD01.direction,
    var_core_value_sig15FE = {
      ...var_core_value_sig5453
    },
    var_core_value_sigCF47 = var_core_value_sigCF1F.deepClone(var_core_value_sig7784.element);
  var_core_value_sigCF47.custom = {
    ...(var_core_value_sigCF47.custom ?? {}),
    mindmap: {
      ...(((var_core_value_sig5501 = var_core_value_sigCF47.custom) == null ? undefined : var_core_value_sig5501.mindmap) ?? {}),
      layout: var_core_value_sig5FD01,
      structureRevision: (var_core_value_sigB706.structureRevision ?? 0) + 1
    }
  }, var_core_value_sig15FE[var_core_value_sig8725.scopeId] = X(var_core_value_sig7784, var_core_value_sigCF47);
  let var_core_value_sigB0F9 = Object.values(var_core_value_sig5453).map(var_core_value_sigB99B => {
      let var_core_value_sig5A75 = H(var_core_value_sigB99B.element);
      return (var_core_value_sig5A75 == null ? undefined : var_core_value_sig5A75.structureScopeId) === var_core_value_sig8725.scopeId && var_core_value_sig5A75.parentNodeId !== null ? {
        data: var_core_value_sigB99B,
        meta: var_core_value_sig5A75
      } : null;
    }).filter(var_core_value_sig7BAF => !!var_core_value_sig7BAF),
    var_core_value_sigAF12 = new Map();
  var_core_value_sigB0F9.forEach(var_core_value_sig8F69 => {
    var_core_value_sigAF12.set(var_core_value_sig8F69.meta["parentNodeId"], [...(var_core_value_sigAF12.get(var_core_value_sig8F69.meta["parentNodeId"]) ?? []), var_core_value_sig8F69]);
  }), var_core_value_sigAF12.forEach(var_core_value_sig6884 => var_core_value_sig6884.sort(Qt));
  let var_core_value_sigC60C = new Map(),
    var_core_value_sig1C3C = (var_core_value_sig066E, var_core_value_sig9B0D) => {
      (var_core_value_sigAF12.get(var_core_value_sig066E) ?? []).forEach((var_core_value_sig12F2, var_core_value_sig2259) => {
        let var_core_value_sig9E2F = var_core_value_sigB071 === "left" || var_core_value_sigB071 === "right" ? var_core_value_sigB071 : var_core_value_sig12F2.meta["parentNodeId"] === var_core_value_sigB706.rootNodeId ? var_core_value_sig77E3 === "mindmap-horizontal" ? $t(var_core_value_sig2259, "right", "left") : en(var_core_value_sig77E3, var_core_value_sig2259, var_core_value_sig12F2.meta["side"]) : tn(var_core_value_sig9B0D, var_core_value_sig77E3);
        var_core_value_sigC60C.set(var_core_value_sig12F2.data["elementId"], var_core_value_sig9E2F), var_core_value_sig1C3C(var_core_value_sig12F2.data["elementId"], var_core_value_sig9E2F);
      });
    };
  return var_core_value_sig1C3C(var_core_value_sigB706.rootNodeId), var_core_value_sigB0F9.forEach(({
    data: var_core_value_sig3D2C,
    meta: var_core_value_sigC56D
  }) => {
    let var_core_value_sig3A17 = On(var_core_value_sig3D2C, {
      scopeId: var_core_value_sig8725.scopeId,
      parentNodeId: var_core_value_sigC56D.parentNodeId,
      orderKey: var_core_value_sigC56D.orderKey,
      side: var_core_value_sigC60C.get(var_core_value_sig3D2C.elementId) ?? var_core_value_sigC56D.side ?? "right"
    });
    var_core_value_sig15FE[var_core_value_sig3D2C.elementId] = X(var_core_value_sig3D2C, var_core_value_sig3A17);
  }), Qn(var_core_value_sig15FE, var_core_value_sig8725.scopeId);
}
function or(var_core_value_sig71CF, var_core_value_sigC341, var_core_value_sigBA47) {
  let var_core_value_sig3DF7 = var_core_value_sig79D7(var_core_value_sig71CF, var_core_value_sigC341),
    var_core_value_sigD49F = var_core_value_sig71CF[var_core_value_sigC341];
  if (!var_core_value_sig3DF7 || !var_core_value_sigD49F) return null;
  let var_core_value_sigCECC = var_core_value_sigBA47.left + (var_core_value_sigBA47.width - var_core_value_sig3DF7.width) / 2 - var_core_value_sig3DF7.left,
    var_core_value_sig0F47 = var_core_value_sigBA47.top + (var_core_value_sigBA47.height - var_core_value_sig3DF7.height) / 2 - var_core_value_sig3DF7.top,
    var_core_value_sig6B29 = Pn(var_core_value_sigD49F, var_core_value_sigCECC, var_core_value_sig0F47);
  return {
    elementData: {
      ...var_core_value_sig71CF,
      [var_core_value_sigC341]: X(var_core_value_sigD49F, var_core_value_sig6B29)
    },
    bounds: {
      left: var_core_value_sig3DF7.left + var_core_value_sigCECC,
      top: var_core_value_sig3DF7.top + var_core_value_sig0F47,
      width: var_core_value_sig3DF7.width,
      height: var_core_value_sig3DF7.height
    }
  };
}
function sr(var_core_value_sig28E2, var_core_value_sig1578, var_core_value_sig52ED) {
  let var_core_value_sig135F = [],
    var_core_value_sig416D = [];
  return Object.values(var_core_value_sig28E2).forEach(var_core_value_sig938F => {
    var var_core_value_sigD948;
    if (!Nn(var_core_value_sig938F, var_core_value_sig52ED)) return;
    let var_core_value_sigBE5E = (var_core_value_sigD948 = var_core_value_sig1578[var_core_value_sig938F.elementId]) == null ? undefined : var_core_value_sigD948.element;
    if (!var_core_value_sigBE5E || on(var_core_value_sig938F.element, var_core_value_sigBE5E)) return;
    let var_core_value_sig0281 = Y(var_core_value_sig938F, var_core_value_sigBE5E);
    var_core_value_sig135F.push(var_core_value_sig0281.redoMutation), var_core_value_sig416D.unshift(var_core_value_sig0281.undoMutation);
  }), {
    redoMutations: var_core_value_sig135F,
    undoMutations: var_core_value_sig416D
  };
}
const cr = {
    id: "board.operation.mind-map.add-child",
    type: var_core_value_sig9CF2.OPERATION,
    handler: (var_core_value_sigAD5D, var_core_value_sig1B8A) => !(var_core_value_sig1B8A != null && var_core_value_sig1B8A.unitId) || !var_core_value_sig1B8A.subUnitId || !var_core_value_sig1B8A.parentNodeId ? false : cn(var_core_value_sigAD5D, var_core_value_sig1B8A)
  },
  lr = {
    id: "board.operation.mind-map.add-sibling",
    type: var_core_value_sig9CF2.OPERATION,
    handler: (var_core_value_sigFB18, var_core_value_sig703C) => {
      if (!(var_core_value_sig703C != null && var_core_value_sig703C.unitId) || !var_core_value_sig703C.subUnitId || !var_core_value_sig703C.nodeId) return false;
      let var_core_value_sig96CF = K(var_core_value_sigFB18.get(var_core_value_sigD8C3).getElementData(var_core_value_sig703C.unitId, var_core_value_sig703C.subUnitId), var_core_value_sig703C.nodeId);
      return var_core_value_sig96CF != null && var_core_value_sig96CF.meta["parentNodeId"] ? cn(var_core_value_sigFB18, {
        unitId: var_core_value_sig703C.unitId,
        subUnitId: var_core_value_sig703C.subUnitId,
        parentNodeId: var_core_value_sig96CF.meta["parentNodeId"],
        nodeId: var_core_value_sig703C.siblingNodeId,
        connectorId: var_core_value_sig703C.connectorId,
        text: var_core_value_sig703C.text,
        textData: var_core_value_sig703C.textData,
        side: var_core_value_sig96CF.meta["side"],
        referenceNodeId: var_core_value_sig703C.nodeId,
        placement: var_core_value_sig703C.placement
      }) : false;
    }
  };
function ur(var_core_value_sig49F1, var_core_value_sig2F7B) {
  var var_core_value_sigB0DF, var_core_value_sig2E44, var_core_value_sig8560, var_core_value_sig138D, var_core_value_sig1E26, var_core_value_sig5C6C, var_core_value_sigBE85, var_core_value_sig56DE, var_core_value_sig0278, var_core_value_sig08A6, var_core_value_sig04E1, var_core_value_sigC504, var_core_value_sig0515, var_core_value_sig9F34, var_core_value_sig0247, var_core_value_sig6030, var_core_value_sig0137, var_core_value_sig14F3, var_core_value_sig34E8, var_core_value_sigCFE7;
  let var_core_value_sigECBC = var_core_value_sigCF1F.deepClone(var_core_value_sig49F1.data["element"]);
  if (!("shapeData" in var_core_value_sigECBC)) return null;
  let var_core_value_sig65D2 = var_core_value_sigECBC.shapeData["shapeText"] ?? {},
    {
      autoFit: var_core_value_sig4306,
      ...var_core_value_sigFCD3
    } = var_core_value_sig65D2,
    var_core_value_sig147A = var_core_value_sig65D2.dataModel && typeof var_core_value_sig65D2.dataModel == "object" ? var_core_value_sigCF1F.deepClone(var_core_value_sig65D2.dataModel) : {},
    var_core_value_sig829F = var_core_value_sig49F1.meta["parentNodeId"] ? var_core_value_sigD11F.LEFT : var_core_value_sigD11F.CENTER,
    var_core_value_sig534C = var_core_value_sig1293.MIDDLE,
    var_core_value_sigABB7 = var_core_value_sig65D2.horizontalAlign,
    var_core_value_sig9071 = var_core_value_sig65D2.verticalAlign,
    var_core_value_sig01A9 = var_core_value_sig147A.ha,
    var_core_value_sig9477 = var_core_value_sig147A.va,
    var_core_value_sig917C = ((var_core_value_sigB0DF = var_core_value_sig2F7B.textStyle) == null ? undefined : var_core_value_sigB0DF.horizontalAlign) ?? var_core_value_sigABB7 ?? var_core_value_sig01A9 ?? var_core_value_sig829F,
    var_core_value_sig27E2 = ((var_core_value_sig2E44 = var_core_value_sig2F7B.textStyle) == null ? undefined : var_core_value_sig2E44.verticalAlign) ?? var_core_value_sig9071 ?? var_core_value_sig9477 ?? var_core_value_sig534C,
    var_core_value_sig10D7 = var_core_value_sig2F7B.shapeText ? var_core_value_sigCF1F.deepClone(var_core_value_sig2F7B.shapeText) : null,
    var_core_value_sig5A1A = var_core_value_sig10D7 == null || (var_core_value_sig8560 = var_core_value_sig10D7.dataModel) == null ? undefined : var_core_value_sig8560.doc,
    var_core_value_sig77D2 = var_core_value_sig5A1A ? (((var_core_value_sig138D = var_core_value_sig5A1A.body) == null ? undefined : var_core_value_sig138D.dataStream) ?? "").replace(/\r\n$/, "").replace(/\r/g, "\x0a") : typeof (var_core_value_sig10D7 == null ? undefined : var_core_value_sig10D7.text) == "string" ? var_core_value_sig10D7.text : undefined,
    var_core_value_sig625E = var_core_value_sig2F7B.text ?? var_core_value_sig77D2 ?? (typeof var_core_value_sig65D2.text == "string" ? var_core_value_sig65D2.text : ""),
    var_core_value_sig6F04 = var_core_value_sig147A.doc,
    var_core_value_sig48DA = var_core_value_sig65D2.isRichText === true,
    var_core_value_sigD327 = var_core_value_sig2F7B.textData === undefined ? var_core_value_sig2F7B.text === undefined && var_core_value_sig48DA ? var_core_value_sig6F04 : undefined : var_core_value_sig2F7B.textData ?? undefined,
    var_core_value_sig6694 = qe(var_core_value_sig65D2, var_core_value_sig2F7B.textStyle),
    var_core_value_sig2A21 = Je({
      currentDataModel: var_core_value_sig147A,
      documentData: var_core_value_sigD327,
      horizontalAlign: var_core_value_sig917C,
      shapeText: {
        ...var_core_value_sigFCD3,
        ...(((var_core_value_sig1E26 = var_core_value_sig2F7B.textStyle) == null ? undefined : var_core_value_sig1E26.color) === undefined ? null : {
          color: var_core_value_sig2F7B.textStyle["color"]
        }),
        ...(((var_core_value_sig5C6C = var_core_value_sig2F7B.textStyle) == null ? undefined : var_core_value_sig5C6C.fontFamily) === undefined ? null : {
          fontFamily: var_core_value_sig2F7B.textStyle["fontFamily"]
        }),
        ...(((var_core_value_sigBE85 = var_core_value_sig2F7B.textStyle) == null ? undefined : var_core_value_sigBE85.fontSize) === undefined ? null : {
          fontSize: var_core_value_sig2F7B.textStyle["fontSize"]
        }),
        ...(((var_core_value_sig56DE = var_core_value_sig2F7B.textStyle) == null ? undefined : var_core_value_sig56DE.bold) === undefined ? null : {
          bold: var_core_value_sig2F7B.textStyle["bold"]
        }),
        ...(((var_core_value_sig0278 = var_core_value_sig2F7B.textStyle) == null ? undefined : var_core_value_sig0278.italic) === undefined ? null : {
          italic: var_core_value_sig2F7B.textStyle["italic"]
        }),
        ...(((var_core_value_sig08A6 = var_core_value_sig2F7B.textStyle) == null ? undefined : var_core_value_sig08A6.underline) === undefined ? null : {
          underline: var_core_value_sig2F7B.textStyle["underline"]
        }),
        ...(((var_core_value_sig04E1 = var_core_value_sig2F7B.textStyle) == null ? undefined : var_core_value_sig04E1.strikethrough) === undefined ? null : {
          strikethrough: var_core_value_sig2F7B.textStyle["strikethrough"]
        }),
        ...(((var_core_value_sigC504 = var_core_value_sig2F7B.textStyle) == null ? undefined : var_core_value_sigC504.textFill) === undefined ? null : {
          textFill: var_core_value_sig2F7B.textStyle["textFill"]
        })
      },
      text: var_core_value_sig625E,
      textStyle: var_core_value_sig6694,
      verticalAlign: var_core_value_sig27E2
    }),
    var_core_value_sig0836 = {
      ...var_core_value_sigFCD3,
      ...(var_core_value_sig10D7 ?? var_core_value_sig2A21),
      ...(var_core_value_sig10D7 ? {
        text: var_core_value_sig625E
      } : {
        horizontalAlign: var_core_value_sig917C,
        verticalAlign: var_core_value_sig27E2
      }),
      ...(var_core_value_sig2F7B.text === undefined ? null : {
        text: var_core_value_sig2F7B.text
      }),
      ...(((var_core_value_sig0515 = var_core_value_sig2F7B.textStyle) == null ? undefined : var_core_value_sig0515.color) === undefined ? null : {
        color: var_core_value_sig2F7B.textStyle["color"]
      }),
      ...(((var_core_value_sig9F34 = var_core_value_sig2F7B.textStyle) == null ? undefined : var_core_value_sig9F34.fontFamily) === undefined ? null : {
        fontFamily: var_core_value_sig2F7B.textStyle["fontFamily"]
      }),
      ...(((var_core_value_sig0247 = var_core_value_sig2F7B.textStyle) == null ? undefined : var_core_value_sig0247.fontSize) === undefined ? null : {
        fontSize: var_core_value_sig2F7B.textStyle["fontSize"]
      }),
      ...(((var_core_value_sig6030 = var_core_value_sig2F7B.textStyle) == null ? undefined : var_core_value_sig6030.bold) === undefined ? null : {
        bold: var_core_value_sig2F7B.textStyle["bold"]
      }),
      ...(((var_core_value_sig0137 = var_core_value_sig2F7B.textStyle) == null ? undefined : var_core_value_sig0137.italic) === undefined ? null : {
        italic: var_core_value_sig2F7B.textStyle["italic"]
      }),
      ...(((var_core_value_sig14F3 = var_core_value_sig2F7B.textStyle) == null ? undefined : var_core_value_sig14F3.underline) === undefined ? null : {
        underline: var_core_value_sig2F7B.textStyle["underline"]
      }),
      ...(((var_core_value_sig34E8 = var_core_value_sig2F7B.textStyle) == null ? undefined : var_core_value_sig34E8.strikethrough) === undefined ? null : {
        strikethrough: var_core_value_sig2F7B.textStyle["strikethrough"]
      }),
      ...(((var_core_value_sigCFE7 = var_core_value_sig2F7B.textStyle) == null ? undefined : var_core_value_sigCFE7.textFill) === undefined ? null : {
        textFill: var_core_value_sig2F7B.textStyle["textFill"]
      })
    };
  if (var_core_value_sigECBC.shapeData = {
    ...var_core_value_sigECBC.shapeData,
    ...(var_core_value_sig2F7B.shapeType === undefined ? null : {
      shapeType: var_core_value_sig2F7B.shapeType
    }),
    fill: {
      ...(var_core_value_sigECBC.shapeData["fill"] ?? {}),
      ...(var_core_value_sig2F7B.fill ?? {
        fillType: var_core_value_sigAD84.SolidFill
      }),
      ...(var_core_value_sig2F7B.fillColor === undefined ? null : {
        color: var_core_value_sig2F7B.fillColor
      })
    },
    stroke: {
      ...(var_core_value_sigECBC.shapeData["stroke"] ?? {}),
      ...(var_core_value_sig2F7B.stroke ?? {
        lineStrokeType: var_core_value_sigD513.SolidLine
      }),
      ...(var_core_value_sig2F7B.strokeColor === undefined ? null : {
        color: var_core_value_sig2F7B.strokeColor
      })
    },
    textRectPadding: var_core_value_sigECBC.shapeData["textRectPadding"] ?? {
      ...Ce
    },
    isTextBox: true,
    shapeText: var_core_value_sig0836
  }, var_core_value_sig2F7B.foreignAttributes !== undefined) {
    var var_core_value_sigD95C;
    let var_core_value_sigED71 = (var_core_value_sigD95C = var_core_value_sigECBC.custom) == null ? undefined : var_core_value_sigD95C.mindmap;
    if (!var_core_value_sigED71 || !Object.prototype["hasOwnProperty"].call(var_core_value_sigED71, "parentNodeId")) return null;
    let var_core_value_sig281C = {
      ...(var_core_value_sigED71.foreignAttributes ?? {})
    };
    Object.entries(var_core_value_sig2F7B.foreignAttributes).forEach(([var_core_value_sigD082, var_core_value_sigDBB7]) => {
      var_core_value_sigDBB7 == null ? delete var_core_value_sig281C[var_core_value_sigD082] : var_core_value_sig281C[var_core_value_sigD082] = var_core_value_sigDBB7;
    });
    let var_core_value_sig3C92 = {
      ...var_core_value_sigED71,
      ...(Object.keys(var_core_value_sig281C).length > 0 ? {
        foreignAttributes: var_core_value_sig281C
      } : {
        foreignAttributes: undefined
      })
    };
    var_core_value_sig3C92.foreignAttributes || delete var_core_value_sig3C92.foreignAttributes, var_core_value_sigECBC.custom = {
      ...var_core_value_sigECBC.custom,
      mindmap: var_core_value_sig3C92
    };
  }
  var_core_value_sigECBC.transform = _n(var_core_value_sig49F1.data["element"], var_core_value_sigECBC.shapeData, var_core_value_sig2F7B.shapeType), var_core_value_sigECBC.transform = yn(var_core_value_sigECBC, var_core_value_sig2F7B.text !== undefined || var_core_value_sig2F7B.textData !== undefined || var_core_value_sig2F7B.shapeText !== undefined || vn(var_core_value_sig2F7B.textStyle));
  let var_core_value_sig692E = var_core_value_sig2F7B.hostSize ? Ge(X(var_core_value_sig49F1.data, var_core_value_sigECBC), var_core_value_sig2F7B.hostSize) : null;
  return var_core_value_sig692E && (var_core_value_sigECBC.transform = {
    ...var_core_value_sigECBC.transform,
    width: var_core_value_sig692E.width,
    height: var_core_value_sig692E.height
  }), var_core_value_sigECBC;
}
const dr = {
    id: "board.operation.mind-map.update-node",
    type: var_core_value_sig9CF2.OPERATION,
    handler: (var_core_value_sig3FAF, var_core_value_sig378B) => {
      if (!(var_core_value_sig378B != null && var_core_value_sig378B.unitId) || !var_core_value_sig378B.subUnitId || !var_core_value_sig378B.nodeId) return false;
      let var_core_value_sigDE50 = var_core_value_sig3FAF.get(var_core_value_sigD8C3),
        var_core_value_sig3094 = K(var_core_value_sigDE50.getElementData(var_core_value_sig378B.unitId, var_core_value_sig378B.subUnitId), var_core_value_sig378B.nodeId);
      if (!var_core_value_sig3094) return false;
      let var_core_value_sig86CC = ur(var_core_value_sig3094, var_core_value_sig378B);
      if (!var_core_value_sig86CC) return false;
      if (on(var_core_value_sig3094.data["element"], var_core_value_sig86CC)) return true;
      let var_core_value_sig7868 = Y(var_core_value_sig3094.data, var_core_value_sig86CC),
        var_core_value_sig9921 = Z({
          ...var_core_value_sigDE50.getElementData(var_core_value_sig378B.unitId, var_core_value_sig378B.subUnitId),
          [var_core_value_sig378B.nodeId]: X(var_core_value_sig3094.data, var_core_value_sig86CC)
        }, var_core_value_sig3094.meta["structureScopeId"]);
      return J(var_core_value_sig3FAF, var_core_value_sig378B.unitId, {
        redoMutations: [var_core_value_sig7868.redoMutation, ...((var_core_value_sig9921 == null ? undefined : var_core_value_sig9921.redoMutations) ?? [])],
        undoMutations: [...((var_core_value_sig9921 == null ? undefined : var_core_value_sig9921.undoMutations) ?? []), var_core_value_sig7868.undoMutation]
      });
    }
  },
  fr = {
    id: "board.operation.mind-map.update-nodes",
    type: var_core_value_sig9CF2.OPERATION,
    handler: (var_core_value_sig59BF, var_core_value_sigF001) => {
      if (!(var_core_value_sigF001 != null && var_core_value_sigF001.unitId) || !var_core_value_sigF001.subUnitId || !var_core_value_sigF001.updates["length"]) return false;
      let var_core_value_sigE511 = var_core_value_sigF001.updates["map"](var_core_value_sigB16B => var_core_value_sigB16B.nodeId);
      if (var_core_value_sigE511.some(var_core_value_sig585D => !var_core_value_sig585D) || new Set(var_core_value_sigE511).size !== var_core_value_sigE511.length) return false;
      let var_core_value_sig1C81 = {
          ...var_core_value_sig59BF.get(var_core_value_sigD8C3).getElementData(var_core_value_sigF001.unitId, var_core_value_sigF001.subUnitId)
        },
        var_core_value_sig2C6A = [],
        var_core_value_sig7207 = [],
        var_core_value_sig297F = null;
      for (let var_core_value_sigE722 of var_core_value_sigF001.updates) {
        let var_core_value_sigD0A8 = K(var_core_value_sig1C81, var_core_value_sigE722.nodeId);
        if (!var_core_value_sigD0A8 || var_core_value_sig297F !== null && var_core_value_sigD0A8.meta["structureScopeId"] !== var_core_value_sig297F) return false;
        var_core_value_sig297F = var_core_value_sigD0A8.meta["structureScopeId"];
        let var_core_value_sigF4B9 = ur(var_core_value_sigD0A8, var_core_value_sigE722);
        if (!var_core_value_sigF4B9) return false;
        if (on(var_core_value_sigD0A8.data["element"], var_core_value_sigF4B9)) continue;
        let var_core_value_sig5CEE = Y(var_core_value_sigD0A8.data, var_core_value_sigF4B9);
        var_core_value_sig2C6A.push(var_core_value_sig5CEE.redoMutation), var_core_value_sig7207.unshift(var_core_value_sig5CEE.undoMutation), var_core_value_sig1C81[var_core_value_sigE722.nodeId] = X(var_core_value_sigD0A8.data, var_core_value_sigF4B9);
      }
      if (var_core_value_sig2C6A.length === 0) return true;
      let var_core_value_sigA95A = var_core_value_sig297F ? Z(var_core_value_sig1C81, var_core_value_sig297F) : null;
      return J(var_core_value_sig59BF, var_core_value_sigF001.unitId, {
        redoMutations: [...var_core_value_sig2C6A, ...((var_core_value_sigA95A == null ? undefined : var_core_value_sigA95A.redoMutations) ?? [])],
        undoMutations: [...((var_core_value_sigA95A == null ? undefined : var_core_value_sigA95A.undoMutations) ?? []), ...var_core_value_sig7207]
      });
    }
  },
  pr = {
    id: "board.operation.mind-map.update-incoming-connector",
    type: var_core_value_sig9CF2.OPERATION,
    handler: (var_core_value_sig94D6, var_core_value_sigC22E) => {
      if (!(var_core_value_sigC22E != null && var_core_value_sigC22E.unitId) || !var_core_value_sigC22E.subUnitId || !var_core_value_sigC22E.nodeId || !var_core_value_sigC22E.style) return false;
      let var_core_value_sig2321 = var_core_value_sig94D6.get(var_core_value_sigD8C3).getElementData(var_core_value_sigC22E.unitId, var_core_value_sigC22E.subUnitId),
        var_core_value_sigFF33 = K(var_core_value_sig2321, var_core_value_sigC22E.nodeId);
      if (!(var_core_value_sigFF33 != null && var_core_value_sigFF33.meta["parentNodeId"])) return false;
      let var_core_value_sig16E0 = fn(var_core_value_sig2321, var_core_value_sigFF33.meta["structureScopeId"], var_core_value_sigC22E.nodeId);
      if (!var_core_value_sig16E0 || !("connectorData" in var_core_value_sig16E0.element)) return false;
      let var_core_value_sig213C = var_core_value_sigCF1F.deepClone(var_core_value_sig16E0.element),
        var_core_value_sig31F8 = hn(var_core_value_sigC22E.style["lineType"]);
      var_core_value_sig213C.connectorData = {
        ...var_core_value_sig213C.connectorData,
        style: {
          ...(var_core_value_sig213C.connectorData["style"] ?? {}),
          ...var_core_value_sigC22E.style,
          ...(var_core_value_sigC22E.style["lineType"] === undefined ? null : {
            dash: var_core_value_sig31F8
          })
        }
      }, delete var_core_value_sig213C.connectorData["style"].lineType;
      let var_core_value_sig6905 = Y(var_core_value_sig16E0, var_core_value_sig213C);
      return J(var_core_value_sig94D6, var_core_value_sigC22E.unitId, {
        redoMutations: [var_core_value_sig6905.redoMutation],
        undoMutations: [var_core_value_sig6905.undoMutation]
      });
    }
  },
  mr = {
    id: "board.operation.mind-map.delete-node",
    type: var_core_value_sig9CF2.OPERATION,
    handler: (var_core_value_sigC3C0, var_core_value_sig1F39) => {
      var var_core_value_sig9256;
      if (!(var_core_value_sig1F39 != null && var_core_value_sig1F39.unitId) || !var_core_value_sig1F39.subUnitId || !var_core_value_sig1F39.nodeId) return false;
      let var_core_value_sig98A0 = var_core_value_sigC3C0.get(var_core_value_sigD8C3),
        var_core_value_sig3EBD = var_core_value_sig98A0.getElementData(var_core_value_sig1F39.unitId, var_core_value_sig1F39.subUnitId),
        var_core_value_sig1AC3 = K(var_core_value_sig3EBD, var_core_value_sig1F39.nodeId);
      if (!var_core_value_sig1AC3) return false;
      let var_core_value_sig66B8 = var_core_value_sig98A0.getElementOrder(var_core_value_sig1F39.unitId, var_core_value_sig1F39.subUnitId),
        var_core_value_sig4C7F = dn(var_core_value_sig3EBD, var_core_value_sig1AC3.meta["structureScopeId"], var_core_value_sig1F39.nodeId);
      var_core_value_sig1AC3.meta["parentNodeId"] ?? var_core_value_sig4C7F.add(var_core_value_sig1AC3.meta["structureScopeId"]);
      let var_core_value_sig2543 = V((var_core_value_sig9256 = var_core_value_sig3EBD[var_core_value_sig1AC3.meta["structureScopeId"]]) == null ? undefined : var_core_value_sig9256.element),
        var_core_value_sigB230 = var_core_value_sig2543 == null ? undefined : var_core_value_sig2543.rootNodeId,
        var_core_value_sig407E = var_core_value_sigB230 ? var_core_value_sig79D7(var_core_value_sig3EBD, var_core_value_sigB230) : null,
        var_core_value_sig88CB = {
          ...var_core_value_sig3EBD
        };
      var_core_value_sig4C7F.forEach(var_core_value_sig062A => delete var_core_value_sig88CB[var_core_value_sig062A]);
      let var_core_value_sigD615 = var_core_value_sig1AC3.meta["parentNodeId"] == null ? null : Z(var_core_value_sig88CB, var_core_value_sig1AC3.meta["structureScopeId"]),
        var_core_value_sigB708 = var_core_value_sig407E && var_core_value_sigB230 ? $n(var_core_value_sig88CB, var_core_value_sig1AC3.meta["structureScopeId"], var_core_value_sigB230, var_core_value_sig407E) : null,
        var_core_value_sig60EF = [...var_core_value_sig66B8].filter(var_core_value_sig050A => var_core_value_sig4C7F.has(var_core_value_sig050A)),
        var_core_value_sigA6FB = [...var_core_value_sig60EF].reverse().map(var_core_value_sig8B32 => ({
          id: var_core_value_sig3A44.id,
          params: {
            unitId: var_core_value_sig1F39.unitId,
            subUnitId: var_core_value_sig1F39.subUnitId,
            elementId: var_core_value_sig8B32,
            allowLockedParent: true
          }
        })),
        var_core_value_sigD6EA = var_core_value_sig60EF.map(var_core_value_sig870F => ({
          id: var_core_value_sig4F9D.id,
          params: {
            unitId: var_core_value_sig1F39.unitId,
            subUnitId: var_core_value_sig1F39.subUnitId,
            element: var_core_value_sigCF1F.deepClone(var_core_value_sig3EBD[var_core_value_sig870F].element),
            insertIndex: var_core_value_sig66B8.indexOf(var_core_value_sig870F),
            allowLockedParent: true
          }
        }));
      return J(var_core_value_sigC3C0, var_core_value_sig1F39.unitId, {
        redoMutations: [...var_core_value_sigA6FB, ...((var_core_value_sigD615 == null ? undefined : var_core_value_sigD615.redoMutations) ?? []), ...((var_core_value_sigB708 == null ? undefined : var_core_value_sigB708.redoMutations) ?? [])],
        undoMutations: [...((var_core_value_sigB708 == null ? undefined : var_core_value_sigB708.undoMutations) ?? []), ...((var_core_value_sigD615 == null ? undefined : var_core_value_sigD615.undoMutations) ?? []), ...var_core_value_sigD6EA]
      });
    }
  },
  hr = {
    id: "board.operation.mind-map.reparent-node",
    type: var_core_value_sig9CF2.OPERATION,
    handler: (var_core_value_sigA2D31, var_core_value_sig727A) => {
      if (!(var_core_value_sig727A != null && var_core_value_sig727A.unitId) || !var_core_value_sig727A.subUnitId || !var_core_value_sig727A.nodeId || !var_core_value_sig727A.newParentNodeId) return false;
      let var_core_value_sig6AF1 = var_core_value_sigA2D31.get(var_core_value_sigD8C3),
        var_core_value_sig3F6A = var_core_value_sig6AF1.getElementData(var_core_value_sig727A.unitId, var_core_value_sig727A.subUnitId),
        var_core_value_sig23B4 = K(var_core_value_sig3F6A, var_core_value_sig727A.nodeId),
        var_core_value_sig350C = K(var_core_value_sig3F6A, var_core_value_sig727A.newParentNodeId);
      if (!var_core_value_sig23B4 || !var_core_value_sig350C || var_core_value_sig727A.nodeId === var_core_value_sig727A.newParentNodeId) return false;
      if (var_core_value_sig23B4.meta["parentNodeId"] === null) {
        var var_core_value_sig2335, var_core_value_sig6233, var_core_value_sig4230, var_core_value_sig6136;
        if (var_core_value_sig23B4.meta["structureScopeId"] === var_core_value_sig350C.meta["structureScopeId"]) return false;
        let var_core_value_sigB683 = var_core_value_sig727A.incomingConnectorId ?? var_core_value_sig95D9(6);
        if (var_core_value_sig3F6A[var_core_value_sigB683]) return false;
        let var_core_value_sig26EC = nn(var_core_value_sig350C.meta, var_core_value_sig727A.side ?? var_core_value_sig23B4.meta["side"]),
          var_core_value_sigEEDB = V((var_core_value_sig2335 = var_core_value_sig3F6A[var_core_value_sig350C.meta["structureScopeId"]]) == null ? undefined : var_core_value_sig2335.element),
          var_core_value_sig36E7 = wn(var_core_value_sig3F6A, var_core_value_sig350C.meta["structureScopeId"], var_core_value_sig727A.newParentNodeId, var_core_value_sig727A.nodeId, var_core_value_sig727A.orderKey, var_core_value_sig727A.referenceNodeId, var_core_value_sig727A.placement),
          var_core_value_sig6A78 = Cn(var_core_value_sig3F6A, var_core_value_sig23B4.meta["structureScopeId"], var_core_value_sig727A.nodeId),
          var_core_value_sigF7EF = [],
          var_core_value_sig27F9 = [],
          var_core_value_sig393E = {
            ...var_core_value_sig3F6A
          };
        An(var_core_value_sig3F6A, var_core_value_sig6A78, {
          scopeId: var_core_value_sig350C.meta["structureScopeId"],
          rootNodeId: var_core_value_sig727A.nodeId,
          rootParentNodeId: var_core_value_sig727A.newParentNodeId,
          rootOrderKey: var_core_value_sig36E7,
          rootSide: var_core_value_sig26EC,
          rootIsDemoted: true
        }, var_core_value_sigF7EF, var_core_value_sig27F9, var_core_value_sig393E);
        let var_core_value_sigB609 = jt({
          nodeId: var_core_value_sig727A.nodeId,
          connectorId: var_core_value_sigB683,
          scopeId: var_core_value_sig350C.meta["structureScopeId"],
          parentNode: var_core_value_sig350C.data["element"],
          orderKey: var_core_value_sig36E7,
          side: var_core_value_sig26EC,
          branchLineType: var_core_value_sigEEDB == null || (var_core_value_sig6233 = var_core_value_sigEEDB.layout) == null ? undefined : var_core_value_sig6233.branchLineType,
          treeRootTrunk: z(var_core_value_sigEEDB == null || (var_core_value_sig4230 = var_core_value_sigEEDB.layout) == null ? undefined : var_core_value_sig4230.structureKind) && var_core_value_sig350C.meta["parentNodeId"] === null,
          timelineRootStructureKind: B(var_core_value_sigEEDB == null || (var_core_value_sig6136 = var_core_value_sigEEDB.layout) == null ? undefined : var_core_value_sig6136.structureKind) && var_core_value_sig350C.meta["parentNodeId"] === null ? var_core_value_sigEEDB.layout["structureKind"] : undefined,
          left: var_core_value_sig23B4.data["element"].transform["left"] ?? 0,
          top: var_core_value_sig23B4.data["element"].transform["top"] ?? 0
        }).connector;
        var_core_value_sigF7EF.push({
          id: var_core_value_sig4F9D.id,
          params: {
            unitId: var_core_value_sig727A.unitId,
            subUnitId: var_core_value_sig727A.subUnitId,
            element: var_core_value_sigB609,
            allowLockedParent: true
          }
        }), var_core_value_sig27F9.unshift({
          id: var_core_value_sig3A44.id,
          params: {
            unitId: var_core_value_sig727A.unitId,
            subUnitId: var_core_value_sig727A.subUnitId,
            elementId: var_core_value_sigB609.id,
            allowLockedParent: true
          }
        }), var_core_value_sig393E[var_core_value_sigB609.id] = qn(var_core_value_sig727A.unitId, var_core_value_sig727A.subUnitId, var_core_value_sigB609);
        let var_core_value_sig390D = var_core_value_sig3F6A[var_core_value_sig23B4.meta["structureScopeId"]];
        return var_core_value_sig390D && (var_core_value_sigF7EF.push({
          id: var_core_value_sig3A44.id,
          params: {
            unitId: var_core_value_sig727A.unitId,
            subUnitId: var_core_value_sig727A.subUnitId,
            elementId: var_core_value_sig390D.elementId,
            allowLockedParent: true
          }
        }), var_core_value_sig27F9.unshift({
          id: var_core_value_sig4F9D.id,
          params: {
            unitId: var_core_value_sig727A.unitId,
            subUnitId: var_core_value_sig727A.subUnitId,
            element: var_core_value_sigCF1F.deepClone(var_core_value_sig390D.element),
            insertIndex: var_core_value_sig6AF1.getElementOrder(var_core_value_sig727A.unitId, var_core_value_sig727A.subUnitId).indexOf(var_core_value_sig390D.elementId),
            allowLockedParent: true
          }
        }), delete var_core_value_sig393E[var_core_value_sig390D.elementId]), jn(var_core_value_sig3F6A, var_core_value_sig393E, [var_core_value_sig350C.meta["structureScopeId"]], var_core_value_sigF7EF, var_core_value_sig27F9), J(var_core_value_sigA2D31, var_core_value_sig727A.unitId, {
          redoMutations: var_core_value_sigF7EF,
          undoMutations: var_core_value_sig27F9
        });
      }
      if (Sn(var_core_value_sig3F6A, var_core_value_sig23B4.meta["structureScopeId"], var_core_value_sig727A.newParentNodeId, var_core_value_sig727A.nodeId)) return false;
      let var_core_value_sigD25E = fn(var_core_value_sig3F6A, var_core_value_sig23B4.meta["structureScopeId"], var_core_value_sig727A.nodeId);
      if (!var_core_value_sigD25E) return false;
      let var_core_value_sigE1BC = nn(var_core_value_sig350C.meta, var_core_value_sig727A.side ?? var_core_value_sig23B4.meta["side"]),
        var_core_value_sigCF44 = [],
        var_core_value_sig3C97 = [],
        var_core_value_sigA920 = {
          ...var_core_value_sig3F6A
        };
      An(var_core_value_sig3F6A, Cn(var_core_value_sig3F6A, var_core_value_sig23B4.meta["structureScopeId"], var_core_value_sig727A.nodeId), {
        scopeId: var_core_value_sig350C.meta["structureScopeId"],
        rootNodeId: var_core_value_sig727A.nodeId,
        rootParentNodeId: var_core_value_sig727A.newParentNodeId,
        rootOrderKey: wn(var_core_value_sig3F6A, var_core_value_sig350C.meta["structureScopeId"], var_core_value_sig727A.newParentNodeId, var_core_value_sig727A.nodeId, var_core_value_sig727A.orderKey, var_core_value_sig727A.referenceNodeId, var_core_value_sig727A.placement),
        rootSide: var_core_value_sigE1BC,
        incomingConnectorId: var_core_value_sigD25E.elementId
      }, var_core_value_sigCF44, var_core_value_sig3C97, var_core_value_sigA920);
      let var_core_value_sigAD561 = kn(var_core_value_sigD25E, {
          scopeId: var_core_value_sig350C.meta["structureScopeId"],
          parentNodeId: var_core_value_sig727A.newParentNodeId,
          childNodeId: var_core_value_sig727A.nodeId,
          side: var_core_value_sigE1BC,
          updateEndpoints: true
        }),
        var_core_value_sig0454 = Y(var_core_value_sigD25E, var_core_value_sigAD561);
      return var_core_value_sigCF44.push(var_core_value_sig0454.redoMutation), var_core_value_sig3C97.unshift(var_core_value_sig0454.undoMutation), var_core_value_sigA920[var_core_value_sigD25E.elementId] = X(var_core_value_sigD25E, var_core_value_sigAD561), jn(var_core_value_sig3F6A, var_core_value_sigA920, [var_core_value_sig23B4.meta["structureScopeId"], var_core_value_sig350C.meta["structureScopeId"]], var_core_value_sigCF44, var_core_value_sig3C97), J(var_core_value_sigA2D31, var_core_value_sig727A.unitId, {
        redoMutations: var_core_value_sigCF44,
        undoMutations: var_core_value_sig3C97
      });
    }
  },
  gr = {
    id: "board.operation.mind-map.promote-node",
    type: var_core_value_sig9CF2.OPERATION,
    handler: (var_core_value_sigEE1A, var_core_value_sig4107) => {
      if (!(var_core_value_sig4107 != null && var_core_value_sig4107.unitId) || !var_core_value_sig4107.subUnitId || !var_core_value_sig4107.nodeId) return false;
      let var_core_value_sigF35C = var_core_value_sigEE1A.get(var_core_value_sigD8C3).getElementData(var_core_value_sig4107.unitId, var_core_value_sig4107.subUnitId),
        var_core_value_sigEF8D = K(var_core_value_sigF35C, var_core_value_sig4107.nodeId);
      if (!(var_core_value_sigEF8D != null && var_core_value_sigEF8D.meta["parentNodeId"])) return false;
      let var_core_value_sigE025 = K(var_core_value_sigF35C, var_core_value_sigEF8D.meta["parentNodeId"]);
      if (!(var_core_value_sigE025 != null && var_core_value_sigE025.meta["parentNodeId"])) return false;
      let var_core_value_sigD549 = K(var_core_value_sigF35C, var_core_value_sigE025.meta["parentNodeId"]),
        var_core_value_sigC79E = fn(var_core_value_sigF35C, var_core_value_sigEF8D.meta["structureScopeId"], var_core_value_sig4107.nodeId);
      if (!var_core_value_sigD549 || !var_core_value_sigC79E) return false;
      let var_core_value_sig9221 = var_core_value_sigE025.meta["parentNodeId"] === null ? var_core_value_sigEF8D.meta["side"] : var_core_value_sigE025.meta["side"] ?? var_core_value_sigEF8D.meta["side"] ?? "right",
        var_core_value_sig0351 = wn(var_core_value_sigF35C, var_core_value_sigEF8D.meta["structureScopeId"], var_core_value_sigD549.data["elementId"], var_core_value_sig4107.nodeId),
        var_core_value_sig4686 = [],
        var_core_value_sig8E1C = [],
        var_core_value_sigD719 = On(var_core_value_sigEF8D.data, {
          scopeId: var_core_value_sigEF8D.meta["structureScopeId"],
          parentNodeId: var_core_value_sigD549.data["elementId"],
          orderKey: var_core_value_sig0351,
          side: var_core_value_sig9221
        }),
        var_core_value_sig323C = Y(var_core_value_sigEF8D.data, var_core_value_sigD719);
      var_core_value_sig4686.push(var_core_value_sig323C.redoMutation), var_core_value_sig8E1C.unshift(var_core_value_sig323C.undoMutation);
      let var_core_value_sig015D = Y(var_core_value_sigC79E, kn(var_core_value_sigC79E, {
        scopeId: var_core_value_sigEF8D.meta["structureScopeId"],
        parentNodeId: var_core_value_sigD549.data["elementId"],
        childNodeId: var_core_value_sig4107.nodeId,
        side: var_core_value_sig9221,
        updateEndpoints: true
      }));
      return var_core_value_sig4686.push(var_core_value_sig015D.redoMutation), var_core_value_sig8E1C.unshift(var_core_value_sig015D.undoMutation), J(var_core_value_sigEE1A, var_core_value_sig4107.unitId, {
        redoMutations: var_core_value_sig4686,
        undoMutations: var_core_value_sig8E1C
      });
    }
  },
  _r = {
    id: "board.operation.mind-map.detach-node",
    type: var_core_value_sig9CF2.OPERATION,
    handler: (var_core_value_sigBF8B, var_core_value_sigF7CE) => {
      if (!(var_core_value_sigF7CE != null && var_core_value_sigF7CE.unitId) || !var_core_value_sigF7CE.subUnitId || !var_core_value_sigF7CE.nodeId) return false;
      let var_core_value_sig7CF1 = var_core_value_sigBF8B.get(var_core_value_sigD8C3),
        var_core_value_sigA552 = var_core_value_sig7CF1.getElementData(var_core_value_sigF7CE.unitId, var_core_value_sigF7CE.subUnitId),
        var_core_value_sigAE32 = K(var_core_value_sigA552, var_core_value_sigF7CE.nodeId);
      if (!(var_core_value_sigAE32 != null && var_core_value_sigAE32.meta["parentNodeId"])) return false;
      let var_core_value_sig9B4D = fn(var_core_value_sigA552, var_core_value_sigAE32.meta["structureScopeId"], var_core_value_sigF7CE.nodeId);
      if (!var_core_value_sig9B4D) return false;
      let var_core_value_sig2704 = Cn(var_core_value_sigA552, var_core_value_sigAE32.meta["structureScopeId"], var_core_value_sigF7CE.nodeId),
        var_core_value_sigD0CC = var_core_value_sigF7CE.containerId ?? var_core_value_sig95D9(6);
      if (var_core_value_sigA552[var_core_value_sigD0CC]) return false;
      let var_core_value_sigF347 = Mn(var_core_value_sig2704),
        var_core_value_sig80C6 = var_core_value_sigAE32.data["element"].transform["left"] ?? 0,
        var_core_value_sigEBFB = var_core_value_sigAE32.data["element"].transform["top"] ?? 0,
        var_core_value_sigF3BF = bt({
          id: var_core_value_sigD0CC,
          rootNodeId: var_core_value_sigF7CE.nodeId,
          ...var_core_value_sigF347,
          ...(Number.isFinite(var_core_value_sigF7CE.left) ? {
            left: var_core_value_sigF7CE.left - var_core_value_sig80C6
          } : null),
          ...(Number.isFinite(var_core_value_sigF7CE.top) ? {
            top: var_core_value_sigF7CE.top - var_core_value_sigEBFB
          } : null)
        }),
        var_core_value_sigAE58 = [{
          id: var_core_value_sig4F9D.id,
          params: {
            unitId: var_core_value_sigF7CE.unitId,
            subUnitId: var_core_value_sigF7CE.subUnitId,
            element: var_core_value_sigF3BF,
            allowLockedParent: true
          }
        }, {
          id: var_core_value_sig3A44.id,
          params: {
            unitId: var_core_value_sigF7CE.unitId,
            subUnitId: var_core_value_sigF7CE.subUnitId,
            elementId: var_core_value_sig9B4D.elementId,
            allowLockedParent: true
          }
        }],
        var_core_value_sig8E13 = [{
          id: var_core_value_sig4F9D.id,
          params: {
            unitId: var_core_value_sigF7CE.unitId,
            subUnitId: var_core_value_sigF7CE.subUnitId,
            element: var_core_value_sigCF1F.deepClone(var_core_value_sig9B4D.element),
            insertIndex: var_core_value_sig7CF1.getElementOrder(var_core_value_sigF7CE.unitId, var_core_value_sigF7CE.subUnitId).indexOf(var_core_value_sig9B4D.elementId),
            allowLockedParent: true
          }
        }, {
          id: var_core_value_sig3A44.id,
          params: {
            unitId: var_core_value_sigF7CE.unitId,
            subUnitId: var_core_value_sigF7CE.subUnitId,
            elementId: var_core_value_sigD0CC,
            allowLockedParent: true
          }
        }];
      return An(var_core_value_sigA552, var_core_value_sig2704, {
        scopeId: var_core_value_sigD0CC,
        rootNodeId: var_core_value_sigF7CE.nodeId,
        rootParentNodeId: null,
        rootOrderKey: "a0",
        rootIsDetached: true,
        incomingConnectorId: var_core_value_sig9B4D.elementId
      }, var_core_value_sigAE58, var_core_value_sig8E13), J(var_core_value_sigBF8B, var_core_value_sigF7CE.unitId, {
        redoMutations: var_core_value_sigAE58,
        undoMutations: var_core_value_sig8E13
      });
    }
  },
  vr = {
    id: "board.operation.mind-map.translate",
    type: var_core_value_sig9CF2.OPERATION,
    handler: (var_core_value_sig3AAF, var_core_value_sig134E) => {
      if (!(var_core_value_sig134E != null && var_core_value_sig134E.unitId) || !var_core_value_sig134E.subUnitId || !var_core_value_sig134E.scopeId || !Number.isFinite(var_core_value_sig134E.deltaX) || !Number.isFinite(var_core_value_sig134E.deltaY) || var_core_value_sig134E.deltaX === 0 && var_core_value_sig134E.deltaY === 0) return false;
      let var_core_value_sigA3C0 = Fn(var_core_value_sig3AAF.get(var_core_value_sigD8C3).getElementData(var_core_value_sig134E.unitId, var_core_value_sig134E.subUnitId), {
        scopeId: var_core_value_sig134E.scopeId,
        deltaX: var_core_value_sig134E.deltaX,
        deltaY: var_core_value_sig134E.deltaY,
        excludeElementIds: var_core_value_sig134E.excludeElementIds,
        preserveExcludedWorldTransforms: var_core_value_sig134E.preserveExcludedWorldTransforms
      });
      return var_core_value_sigA3C0 ? J(var_core_value_sig3AAF, var_core_value_sig134E.unitId, var_core_value_sigA3C0) : false;
    }
  },
  yr = {
    id: "board.operation.mind-map.layout",
    type: var_core_value_sig9CF2.OPERATION,
    handler: (var_core_value_sig723F, var_core_value_sigD044) => {
      if (!(var_core_value_sigD044 != null && var_core_value_sigD044.unitId) || !var_core_value_sigD044.subUnitId || !var_core_value_sigD044.scopeId) return false;
      let var_core_value_sig9797 = var_core_value_sig723F.get(var_core_value_sigD8C3).getElementData(var_core_value_sigD044.unitId, var_core_value_sigD044.subUnitId),
        var_core_value_sig8533 = var_core_value_sigD044.anchorNodeId ? var_core_value_sig79D7(var_core_value_sig9797, var_core_value_sigD044.anchorNodeId) : null,
        var_core_value_sig57C5 = Z(var_core_value_sig9797, var_core_value_sigD044.scopeId);
      if (!var_core_value_sig57C5) return false;
      let var_core_value_sig0DE9 = var_core_value_sig8533 && var_core_value_sigD044.anchorNodeId ? $n(var_core_value_sig9797, var_core_value_sigD044.scopeId, var_core_value_sigD044.anchorNodeId, var_core_value_sig8533) : null;
      return J(var_core_value_sig723F, var_core_value_sigD044.unitId, {
        redoMutations: [...var_core_value_sig57C5.redoMutations, ...((var_core_value_sig0DE9 == null ? undefined : var_core_value_sig0DE9.redoMutations) ?? [])],
        undoMutations: [...((var_core_value_sig0DE9 == null ? undefined : var_core_value_sig0DE9.undoMutations) ?? []), ...var_core_value_sig57C5.undoMutations]
      }, {
        skipUndo: var_core_value_sigD044.skipUndo
      });
    }
  },
  br = {
    id: "board.operation.mind-map.change-layout",
    type: var_core_value_sig9CF2.OPERATION,
    handler: (var_core_value_sigB00D, var_core_value_sig57C8) => {
      var var_core_value_sigC27D;
      if (!(var_core_value_sig57C8 != null && var_core_value_sig57C8.unitId) || !var_core_value_sig57C8.subUnitId || !var_core_value_sig57C8.scopeId) return false;
      let var_core_value_sig7B95 = var_core_value_sigB00D.get(var_core_value_sigD8C3),
        var_core_value_sig7D59 = var_core_value_sig7B95.getElementData(var_core_value_sig57C8.unitId, var_core_value_sig57C8.subUnitId),
        var_core_value_sig5863 = var_core_value_sig7B95.getElementOrder(var_core_value_sig57C8.unitId, var_core_value_sig57C8.subUnitId),
        var_core_value_sig5BE7 = var_core_value_sig7D59[var_core_value_sig57C8.scopeId],
        var_core_value_sigC74A = V(var_core_value_sig5BE7 == null ? undefined : var_core_value_sig5BE7.element);
      if (!var_core_value_sig5BE7 || !var_core_value_sigC74A) return false;
      let var_core_value_sig8F6A = nt(q(var_core_value_sig57C8.structureKind ?? var_core_value_sigC74A.layout["structureKind"]), var_core_value_sig57C8.branchLineType ?? var_core_value_sigC74A.layout["branchLineType"]),
        var_core_value_sig46EA = {
          ...var_core_value_sigC74A.layout,
          ...(var_core_value_sig57C8.direction === undefined ? null : {
            direction: var_core_value_sig57C8.direction
          }),
          ...(var_core_value_sig57C8.structureKind === undefined ? null : {
            structureKind: var_core_value_sig57C8.structureKind
          }),
          branchLineType: var_core_value_sig8F6A,
          ...(var_core_value_sig57C8.horizontalGap === undefined ? null : {
            horizontalGap: var_core_value_sig57C8.horizontalGap
          }),
          ...(var_core_value_sig57C8.siblingGap === undefined ? null : {
            siblingGap: var_core_value_sig57C8.siblingGap
          }),
          ...(var_core_value_sig57C8.branchGap === undefined ? null : {
            branchGap: var_core_value_sig57C8.branchGap
          })
        },
        var_core_value_sig626C = var_core_value_sigCF1F.deepClone(var_core_value_sig5BE7.element);
      var_core_value_sig626C.custom = {
        ...(var_core_value_sig626C.custom ?? {}),
        mindmap: {
          ...(((var_core_value_sigC27D = var_core_value_sig626C.custom) == null ? undefined : var_core_value_sigC27D.mindmap) ?? {}),
          layout: var_core_value_sig46EA,
          structureRevision: (var_core_value_sigC74A.structureRevision ?? 0) + 1
        }
      };
      let var_core_value_sig9077 = [],
        var_core_value_sigC76C = [],
        var_core_value_sigB23A = {
          ...var_core_value_sig7D59
        },
        var_core_value_sigBA66 = Y(var_core_value_sig5BE7, var_core_value_sig626C);
      if (var_core_value_sig9077.push(var_core_value_sigBA66.redoMutation), var_core_value_sigC76C.unshift(var_core_value_sigBA66.undoMutation), var_core_value_sigB23A[var_core_value_sig5BE7.elementId] = X(var_core_value_sig5BE7, var_core_value_sig626C), var_core_value_sig57C8.direction !== undefined || var_core_value_sig57C8.structureKind) {
        let var_core_value_sigC928 = Object.values(var_core_value_sig7D59).map(var_core_value_sigE92A => {
            let var_core_value_sig362B = H(var_core_value_sigE92A.element);
            return (var_core_value_sig362B == null ? undefined : var_core_value_sig362B.structureScopeId) === var_core_value_sig57C8.scopeId && var_core_value_sig362B.parentNodeId !== null ? {
              data: var_core_value_sigE92A,
              meta: var_core_value_sig362B
            } : null;
          }).filter(var_core_value_sig5CA5 => !!var_core_value_sig5CA5),
          var_core_value_sig39B7 = q(var_core_value_sig46EA.structureKind),
          var_core_value_sig18E01 = new Map(),
          var_core_value_sigE161 = new Map();
        var_core_value_sigC928.forEach(var_core_value_sigE90F => {
          var_core_value_sigE161.set(var_core_value_sigE90F.meta["parentNodeId"], [...(var_core_value_sigE161.get(var_core_value_sigE90F.meta["parentNodeId"]) ?? []), var_core_value_sigE90F]);
        }), var_core_value_sigE161.forEach(var_core_value_sigEFD4 => var_core_value_sigEFD4.sort(Qt));
        let var_core_value_sigBDEE = (var_core_value_sig861B, var_core_value_sig5237) => {
          (var_core_value_sigE161.get(var_core_value_sig861B) ?? []).forEach((var_core_value_sigFBFA, var_core_value_sigF602) => {
            let var_core_value_sig1BBD = var_core_value_sig57C8.direction === "left" || var_core_value_sig57C8.direction === "right" ? var_core_value_sig57C8.direction : var_core_value_sigFBFA.meta["parentNodeId"] === var_core_value_sigC74A.rootNodeId ? var_core_value_sig57C8.direction === "both" && var_core_value_sig39B7 === "mindmap-horizontal" ? $t(var_core_value_sigF602, "right", "left") : en(var_core_value_sig39B7, var_core_value_sigF602, var_core_value_sigFBFA.meta["side"]) : tn(var_core_value_sig5237, var_core_value_sig39B7);
            var_core_value_sig18E01.set(var_core_value_sigFBFA.data["elementId"], var_core_value_sig1BBD), var_core_value_sigBDEE(var_core_value_sigFBFA.data["elementId"], var_core_value_sig1BBD);
          });
        };
        var_core_value_sigBDEE(var_core_value_sigC74A.rootNodeId), var_core_value_sigC928.forEach(({
          data: var_core_value_sigBB00,
          meta: var_core_value_sig7E54
        }) => {
          let var_core_value_sig9A8D = On(var_core_value_sigBB00, {
              scopeId: var_core_value_sig57C8.scopeId,
              parentNodeId: var_core_value_sig7E54.parentNodeId,
              orderKey: var_core_value_sig7E54.orderKey,
              side: var_core_value_sig18E01.get(var_core_value_sigBB00.elementId) ?? var_core_value_sig7E54.side ?? "right"
            }),
            var_core_value_sigC259 = Y(var_core_value_sigBB00, var_core_value_sig9A8D);
          var_core_value_sig9077.push(var_core_value_sigC259.redoMutation), var_core_value_sigC76C.unshift(var_core_value_sigC259.undoMutation), var_core_value_sigB23A[var_core_value_sigBB00.elementId] = X(var_core_value_sigBB00, var_core_value_sig9A8D);
        }), Object.values(var_core_value_sig7D59).forEach(var_core_value_sig9C9F => {
          let var_core_value_sigFDEA = U(var_core_value_sig9C9F.element);
          if ((var_core_value_sigFDEA == null ? undefined : var_core_value_sigFDEA.structureScopeId) !== var_core_value_sig57C8.scopeId) return;
          let var_core_value_sig86D0 = kn(var_core_value_sig9C9F, {
              scopeId: var_core_value_sig57C8.scopeId,
              parentNodeId: var_core_value_sigFDEA.parentNodeId,
              childNodeId: var_core_value_sigFDEA.childNodeId,
              side: var_core_value_sig18E01.get(var_core_value_sigFDEA.childNodeId) ?? "right",
              updateEndpoints: true
            }),
            var_core_value_sig4CD2 = Y(var_core_value_sig9C9F, var_core_value_sig86D0);
          var_core_value_sig9077.push(var_core_value_sig4CD2.redoMutation), var_core_value_sigC76C.unshift(var_core_value_sig4CD2.undoMutation), var_core_value_sigB23A[var_core_value_sig9C9F.elementId] = X(var_core_value_sig9C9F, var_core_value_sig86D0);
        });
      }
      let var_core_value_sig3DF0 = Z(var_core_value_sigB23A, var_core_value_sig57C8.scopeId);
      if (var_core_value_sig3DF0 && (var_core_value_sig9077.push(...var_core_value_sig3DF0.redoMutations), var_core_value_sigC76C.unshift(...var_core_value_sig3DF0.undoMutations)), B(q(var_core_value_sig46EA.structureKind))) {
        let var_core_value_sig1F40 = er({
          unitId: var_core_value_sig57C8.unitId,
          subUnitId: var_core_value_sig57C8.subUnitId,
          scopeId: var_core_value_sig57C8.scopeId,
          elementData: var_core_value_sig7D59,
          elementOrder: [...var_core_value_sig5863]
        });
        var_core_value_sig1F40 && (var_core_value_sig9077.push(var_core_value_sig1F40.redoMutation), var_core_value_sigC76C.unshift(var_core_value_sig1F40.undoMutation));
      }
      return J(var_core_value_sigB00D, var_core_value_sig57C8.unitId, {
        redoMutations: var_core_value_sig9077,
        undoMutations: var_core_value_sigC76C
      });
    }
  };
function Q(var_core_value_sig0512, var_core_value_sig4B2B = null, var_core_value_sigDF88 = 1, var_core_value_sigDB93) {
  return {
    success: false,
    fits: false,
    bounds: var_core_value_sig4B2B,
    scale: var_core_value_sigDF88,
    reason: var_core_value_sig0512,
    ...(var_core_value_sigDB93 ? {
      requiredBounds: var_core_value_sigDB93
    } : null)
  };
}
function xr(var_core_value_sig67CF, var_core_value_sigCA96, var_core_value_sig6C5E) {
  let var_core_value_sig4997 = ar(var_core_value_sig67CF, var_core_value_sigCA96, false),
    var_core_value_sig7290 = var_core_value_sig4997 && var_core_value_sig79D7(var_core_value_sig4997, var_core_value_sigCA96.scopeId);
  return (!var_core_value_sig7290 || !rr(var_core_value_sig6C5E, var_core_value_sig7290)) && var_core_value_sigCA96.compact !== false && (var_core_value_sig4997 = ar(var_core_value_sig67CF, var_core_value_sigCA96, true), var_core_value_sig7290 = var_core_value_sig4997 && var_core_value_sig79D7(var_core_value_sig4997, var_core_value_sigCA96.scopeId)), var_core_value_sig4997 && var_core_value_sig7290 ? {
    elementData: var_core_value_sig4997,
    bounds: var_core_value_sig7290
  } : null;
}
function Sr(var_core_value_sigE835) {
  var var_core_value_sig4644;
  let var_core_value_sig9DED = V((var_core_value_sig4644 = var_core_value_sigE835.preview[var_core_value_sigE835.params["scopeId"]]) == null ? undefined : var_core_value_sig4644.element);
  if (!B(q(var_core_value_sig9DED == null ? undefined : var_core_value_sig9DED.layout["structureKind"]))) return;
  let var_core_value_sig7DE6 = er({
    unitId: var_core_value_sigE835.params["unitId"],
    subUnitId: var_core_value_sigE835.params["subUnitId"],
    scopeId: var_core_value_sigE835.params["scopeId"],
    elementData: var_core_value_sigE835.elementData,
    elementOrder: var_core_value_sigE835.elementOrder
  });
  var_core_value_sig7DE6 && (var_core_value_sigE835.mutations["redoMutations"].push(var_core_value_sig7DE6.redoMutation), var_core_value_sigE835.mutations["undoMutations"].unshift(var_core_value_sig7DE6.undoMutation));
}
const Cr = {
    id: "board.command.mind-map.reflow",
    type: var_core_value_sig9CF2.COMMAND,
    handler: (var_core_value_sig120E, var_core_value_sigD79B) => {
      var var_core_value_sig92A3;
      if (!(var_core_value_sigD79B != null && var_core_value_sigD79B.unitId) || !var_core_value_sigD79B.subUnitId || !var_core_value_sigD79B.scopeId) return Q("invalid-options");
      let var_core_value_sig8911 = var_core_value_sigD79B.padding ?? 0,
        var_core_value_sig8D1B = nr(var_core_value_sigD79B.bounds, var_core_value_sig8911);
      if (!var_core_value_sig8D1B || !tr(var_core_value_sigD79B.horizontalGap, P.horizontalGap) || !tr(var_core_value_sigD79B.siblingGap, P.siblingGap) || !tr(var_core_value_sigD79B.branchGap, P.branchGap)) return Q("invalid-options");
      let var_core_value_sigA915 = var_core_value_sig120E.get(var_core_value_sigD8C3),
        var_core_value_sigE1F7 = var_core_value_sigA915.getElementData(var_core_value_sigD79B.unitId, var_core_value_sigD79B.subUnitId),
        var_core_value_sig4BE7 = var_core_value_sig79D7(var_core_value_sigE1F7, var_core_value_sigD79B.scopeId);
      if (!var_core_value_sig4BE7 || !V((var_core_value_sig92A3 = var_core_value_sigE1F7[var_core_value_sigD79B.scopeId]) == null ? undefined : var_core_value_sig92A3.element)) return Q("mind-map-missing", var_core_value_sig4BE7);
      let var_core_value_sigF9FF = xr(var_core_value_sigE1F7, var_core_value_sigD79B, var_core_value_sig8D1B);
      if (!var_core_value_sigF9FF) return Q("mind-map-missing", var_core_value_sig4BE7);
      if (!rr(var_core_value_sig8D1B, var_core_value_sigF9FF.bounds)) return Q("bounds-too-small", var_core_value_sig4BE7, Math.min(var_core_value_sig8D1B.width / var_core_value_sigF9FF.bounds["width"], var_core_value_sig8D1B.height / var_core_value_sigF9FF.bounds["height"]), var_core_value_sigF9FF.bounds);
      let var_core_value_sigE0E3 = or(var_core_value_sigF9FF.elementData, var_core_value_sigD79B.scopeId, var_core_value_sig8D1B);
      if (!var_core_value_sigE0E3) return Q("mind-map-missing", var_core_value_sig4BE7);
      let var_core_value_sig3AB3 = sr(var_core_value_sigE1F7, var_core_value_sigE0E3.elementData, var_core_value_sigD79B.scopeId);
      return Sr({
        elementData: var_core_value_sigE1F7,
        elementOrder: [...var_core_value_sigA915.getElementOrder(var_core_value_sigD79B.unitId, var_core_value_sigD79B.subUnitId)],
        mutations: var_core_value_sig3AB3,
        params: var_core_value_sigD79B,
        preview: var_core_value_sigE0E3.elementData
      }), J(var_core_value_sig120E, var_core_value_sigD79B.unitId, var_core_value_sig3AB3) ? {
        success: true,
        fits: true,
        bounds: var_core_value_sigE0E3.bounds,
        scale: 1
      } : Q("execution-failed", var_core_value_sig4BE7);
    }
  },
  wr = {
    id: "board.operation.mind-map.change-branch-line-type",
    type: var_core_value_sig9CF2.OPERATION,
    handler: (var_core_value_sig816E, var_core_value_sigE6F3) => !(var_core_value_sigE6F3 != null && var_core_value_sigE6F3.unitId) || !var_core_value_sigE6F3.subUnitId || !var_core_value_sigE6F3.scopeId || !var_core_value_sigE6F3.branchLineType ? false : br.handler(var_core_value_sig816E, {
      unitId: var_core_value_sigE6F3.unitId,
      subUnitId: var_core_value_sigE6F3.subUnitId,
      scopeId: var_core_value_sigE6F3.scopeId,
      branchLineType: var_core_value_sigE6F3.branchLineType
    })
  },
  Tr = {
    id: "board.operation.mind-map.copy-node",
    type: var_core_value_sig9CF2.OPERATION,
    handler: (var_core_value_sig3EE1, var_core_value_sig9673) => {
      if (!(var_core_value_sig9673 != null && var_core_value_sig9673.unitId) || !var_core_value_sig9673.subUnitId || !var_core_value_sig9673.nodeId) return false;
      let var_core_value_sig4917 = var_core_value_sig3EE1.get(var_core_value_sigD8C3).getElementData(var_core_value_sig9673.unitId, var_core_value_sig9673.subUnitId),
        var_core_value_sig3BE6 = K(var_core_value_sig4917, var_core_value_sig9673.nodeId);
      if (!var_core_value_sig3BE6) return false;
      let var_core_value_sigA1C9 = Ln(var_core_value_sig4917, var_core_value_sig3BE6.meta["structureScopeId"], var_core_value_sig9673.nodeId);
      return var_core_value_sigA1C9.length ? (var_core_value_sig3EE1.get(Bt).setPayload({
        rootNodeId: var_core_value_sig9673.nodeId,
        elements: var_core_value_sigA1C9
      }), true) : false;
    }
  },
  Er = {
    id: "board.operation.mind-map.paste-node",
    type: var_core_value_sig9CF2.OPERATION,
    handler: (var_core_value_sig77D6, var_core_value_sigE3CE) => {
      var var_core_value_sig219B, var_core_value_sig4493, var_core_value_sig8B9C, var_core_value_sigA35B, var_core_value_sig82DD;
      if (!(var_core_value_sigE3CE != null && var_core_value_sigE3CE.unitId) || !var_core_value_sigE3CE.subUnitId || !var_core_value_sigE3CE.targetNodeId) return false;
      let var_core_value_sigAAC7 = var_core_value_sig77D6.get(Bt).getPayload();
      if (!var_core_value_sigAAC7) return false;
      let var_core_value_sig1999 = var_core_value_sig77D6.get(var_core_value_sigD8C3).getElementData(var_core_value_sigE3CE.unitId, var_core_value_sigE3CE.subUnitId),
        var_core_value_sigFB45 = K(var_core_value_sig1999, var_core_value_sigE3CE.targetNodeId);
      if (!var_core_value_sigFB45) return false;
      let var_core_value_sigB86C = new Map(var_core_value_sigAAC7.elements["map"](var_core_value_sig3FC7 => [var_core_value_sig3FC7.id, var_core_value_sig3FC7])).get(var_core_value_sigAAC7.rootNodeId),
        var_core_value_sigD892 = H(var_core_value_sigB86C);
      if (!var_core_value_sigB86C || !var_core_value_sigD892) return false;
      let var_core_value_sig6086 = var_core_value_sigAAC7.elements["filter"](var_core_value_sig1E1B => !!H(var_core_value_sig1E1B)),
        var_core_value_sigAED2 = new Map(var_core_value_sig6086.map(var_core_value_sig3B10 => [var_core_value_sig3B10.id, Rn(var_core_value_sig3B10.id, var_core_value_sigE3CE.idMap)]));
      var_core_value_sigAAC7.elements["forEach"](var_core_value_sig89E6 => {
        (U(var_core_value_sig89E6) || W(var_core_value_sig89E6)) && var_core_value_sigAED2.set(var_core_value_sig89E6.id, Rn(var_core_value_sig89E6.id, var_core_value_sigE3CE.idMap));
      });
      let var_core_value_sig3516 = var_core_value_sigAED2.get(var_core_value_sigAAC7.rootNodeId);
      if (!var_core_value_sig3516) return false;
      let var_core_value_sigCDCD = Xt(var_core_value_sig1999, var_core_value_sigFB45.meta["structureScopeId"], var_core_value_sigE3CE.targetNodeId),
        var_core_value_sig206A = V((var_core_value_sig219B = var_core_value_sig1999[var_core_value_sigFB45.meta["structureScopeId"]]) == null ? undefined : var_core_value_sig219B.element),
        var_core_value_sig1EFE = nn(var_core_value_sigFB45.meta, var_core_value_sigD892.side),
        var_core_value_sig9904 = rn(var_core_value_sigFB45.data["element"], var_core_value_sig1EFE, var_core_value_sigCDCD.length),
        var_core_value_sig39C7 = var_core_value_sig9904.left - (var_core_value_sigB86C.transform["left"] ?? 0),
        var_core_value_sigA022 = var_core_value_sig9904.top - (var_core_value_sigB86C.transform["top"] ?? 0),
        var_core_value_sig913A = Bn(var_core_value_sigB86C, {
          id: var_core_value_sig3516,
          scopeId: var_core_value_sigFB45.meta["structureScopeId"],
          parentNodeId: var_core_value_sigE3CE.targetNodeId,
          orderKey: Zt(var_core_value_sigCDCD),
          side: var_core_value_sig1EFE,
          deltaX: var_core_value_sig39C7,
          deltaY: var_core_value_sigA022
        }),
        var_core_value_sig991D = jt({
          nodeId: var_core_value_sig3516,
          connectorId: var_core_value_sigE3CE.incomingConnectorId ?? var_core_value_sig95D9(6),
          scopeId: var_core_value_sigFB45.meta["structureScopeId"],
          parentNode: var_core_value_sigFB45.data["element"],
          orderKey: ((var_core_value_sig4493 = H(var_core_value_sig913A)) == null ? undefined : var_core_value_sig4493.orderKey) ?? Zt(var_core_value_sigCDCD),
          side: var_core_value_sig1EFE,
          branchLineType: var_core_value_sig206A == null || (var_core_value_sig8B9C = var_core_value_sig206A.layout) == null ? undefined : var_core_value_sig8B9C.branchLineType,
          treeRootTrunk: z(var_core_value_sig206A == null || (var_core_value_sigA35B = var_core_value_sig206A.layout) == null ? undefined : var_core_value_sigA35B.structureKind) && var_core_value_sigFB45.meta["parentNodeId"] === null,
          timelineRootStructureKind: B(var_core_value_sig206A == null || (var_core_value_sig82DD = var_core_value_sig206A.layout) == null ? undefined : var_core_value_sig82DD.structureKind) && var_core_value_sigFB45.meta["parentNodeId"] === null ? var_core_value_sig206A.layout["structureKind"] : undefined,
          left: var_core_value_sig913A.transform["left"] ?? var_core_value_sig9904.left,
          top: var_core_value_sig913A.transform["top"] ?? var_core_value_sig9904.top
        }).connector,
        var_core_value_sig3E9C = var_core_value_sig6086.filter(var_core_value_sig4743 => var_core_value_sig4743.id !== var_core_value_sigAAC7.rootNodeId).map(var_core_value_sigEB6A => {
          let var_core_value_sig3D46 = H(var_core_value_sigEB6A),
            var_core_value_sigCC93 = var_core_value_sigAED2.get(var_core_value_sigEB6A.id),
            var_core_value_sig5964 = var_core_value_sig3D46 != null && var_core_value_sig3D46.parentNodeId ? var_core_value_sigAED2.get(var_core_value_sig3D46.parentNodeId) : undefined;
          return !var_core_value_sig3D46 || !var_core_value_sigCC93 || !var_core_value_sig5964 ? null : Bn(var_core_value_sigEB6A, {
            id: var_core_value_sigCC93,
            scopeId: var_core_value_sigFB45.meta["structureScopeId"],
            parentNodeId: var_core_value_sig5964,
            orderKey: var_core_value_sig3D46.orderKey,
            side: var_core_value_sig3D46.side,
            deltaX: var_core_value_sig39C7,
            deltaY: var_core_value_sigA022
          });
        }).filter(var_core_value_sig808B => !!var_core_value_sig808B),
        var_core_value_sig7835 = var_core_value_sigAAC7.elements["map"](var_core_value_sig2A26 => {
          let var_core_value_sig1179 = U(var_core_value_sig2A26);
          if (!var_core_value_sig1179 || !("connectorData" in var_core_value_sig2A26)) return null;
          let var_core_value_sigEA92 = var_core_value_sigAED2.get(var_core_value_sig2A26.id),
            var_core_value_sig8FD9 = var_core_value_sigAED2.get(var_core_value_sig1179.parentNodeId),
            var_core_value_sig1AE5 = var_core_value_sigAED2.get(var_core_value_sig1179.childNodeId);
          return !var_core_value_sigEA92 || !var_core_value_sig8FD9 || !var_core_value_sig1AE5 ? null : Vn(var_core_value_sig2A26, {
            id: var_core_value_sigEA92,
            scopeId: var_core_value_sigFB45.meta["structureScopeId"],
            parentNodeId: var_core_value_sig8FD9,
            childNodeId: var_core_value_sig1AE5,
            idMap: var_core_value_sigAED2,
            deltaX: var_core_value_sig39C7,
            deltaY: var_core_value_sigA022
          });
        }).filter(var_core_value_sig7100 => !!var_core_value_sig7100),
        var_core_value_sig1257 = var_core_value_sigAAC7.elements["map"](var_core_value_sigA19A => {
          let var_core_value_sigD3F5 = W(var_core_value_sigA19A),
            var_core_value_sig3082 = var_core_value_sigAED2.get(var_core_value_sigA19A.id),
            var_core_value_sigF5D1 = var_core_value_sigD3F5 ? var_core_value_sigAED2.get(var_core_value_sigD3F5.ownerNodeId) : undefined;
          return !var_core_value_sigD3F5 || !var_core_value_sig3082 || !var_core_value_sigF5D1 ? null : Hn(var_core_value_sigA19A, {
            id: var_core_value_sig3082,
            scopeId: var_core_value_sigFB45.meta["structureScopeId"],
            ownerNodeId: var_core_value_sigF5D1,
            deltaX: var_core_value_sig39C7,
            deltaY: var_core_value_sigA022
          });
        }).filter(var_core_value_sig8775 => !!var_core_value_sig8775);
      return J(var_core_value_sig77D6, var_core_value_sigE3CE.unitId, an({
        unitId: var_core_value_sigE3CE.unitId,
        subUnitId: var_core_value_sigE3CE.subUnitId,
        elements: [var_core_value_sig913A, ...var_core_value_sig3E9C, var_core_value_sig991D, ...var_core_value_sig7835, ...var_core_value_sig1257]
      }));
    }
  },
  Dr = {
    id: "board.operation.mind-map.paste-as-new",
    type: var_core_value_sig9CF2.OPERATION,
    handler: (var_core_value_sig97E2, var_core_value_sigBFA3) => {
      if (!(var_core_value_sigBFA3 != null && var_core_value_sigBFA3.unitId) || !var_core_value_sigBFA3.subUnitId || !Number.isFinite(var_core_value_sigBFA3.left) || !Number.isFinite(var_core_value_sigBFA3.top)) return false;
      let var_core_value_sig6663 = var_core_value_sig97E2.get(Bt).getPayload();
      if (!var_core_value_sig6663) return false;
      let var_core_value_sigB250 = var_core_value_sig97E2.get(var_core_value_sigD8C3).getElementData(var_core_value_sigBFA3.unitId, var_core_value_sigBFA3.subUnitId),
        var_core_value_sig4EAB = var_core_value_sigBFA3.containerId ?? var_core_value_sig95D9(6);
      if (var_core_value_sigB250[var_core_value_sig4EAB]) return false;
      let var_core_value_sig2FD0 = new Map(var_core_value_sig6663.elements["map"](var_core_value_sig481B => [var_core_value_sig481B.id, var_core_value_sig481B])).get(var_core_value_sig6663.rootNodeId),
        var_core_value_sig035C = H(var_core_value_sig2FD0);
      if (!var_core_value_sig2FD0 || !var_core_value_sig035C) return false;
      let var_core_value_sigA7F0 = var_core_value_sig6663.elements["filter"](var_core_value_sig13D7 => !!H(var_core_value_sig13D7)),
        var_core_value_sig6AE2 = new Map(var_core_value_sigA7F0.map(var_core_value_sig90C0 => [var_core_value_sig90C0.id, Rn(var_core_value_sig90C0.id, var_core_value_sigBFA3.idMap)]));
      var_core_value_sig6663.elements["forEach"](var_core_value_sigF1B2 => {
        (U(var_core_value_sigF1B2) || W(var_core_value_sigF1B2)) && var_core_value_sig6AE2.set(var_core_value_sigF1B2.id, Rn(var_core_value_sigF1B2.id, var_core_value_sigBFA3.idMap));
      });
      let var_core_value_sigFD17 = var_core_value_sig6AE2.get(var_core_value_sig6663.rootNodeId);
      if (!var_core_value_sigFD17) return false;
      let var_core_value_sigA5E0 = var_core_value_sigBFA3.left - (var_core_value_sig2FD0.transform["left"] ?? 0),
        var_core_value_sigC38F = var_core_value_sigBFA3.top - (var_core_value_sig2FD0.transform["top"] ?? 0),
        var_core_value_sigFAFE = Bn(var_core_value_sig2FD0, {
          id: var_core_value_sigFD17,
          scopeId: var_core_value_sig4EAB,
          parentNodeId: null,
          orderKey: "a0",
          deltaX: var_core_value_sigA5E0,
          deltaY: var_core_value_sigC38F
        }),
        var_core_value_sig2B86 = var_core_value_sigA7F0.filter(var_core_value_sigC2BB => var_core_value_sigC2BB.id !== var_core_value_sig6663.rootNodeId).map(var_core_value_sigD9DB => {
          let var_core_value_sigA363 = H(var_core_value_sigD9DB),
            var_core_value_sigFBA5 = var_core_value_sig6AE2.get(var_core_value_sigD9DB.id),
            var_core_value_sigAC47 = var_core_value_sigA363 != null && var_core_value_sigA363.parentNodeId ? var_core_value_sig6AE2.get(var_core_value_sigA363.parentNodeId) : undefined;
          return !var_core_value_sigA363 || !var_core_value_sigFBA5 || !var_core_value_sigAC47 ? null : Bn(var_core_value_sigD9DB, {
            id: var_core_value_sigFBA5,
            scopeId: var_core_value_sig4EAB,
            parentNodeId: var_core_value_sigAC47,
            orderKey: var_core_value_sigA363.orderKey,
            side: var_core_value_sigA363.side,
            deltaX: var_core_value_sigA5E0,
            deltaY: var_core_value_sigC38F
          });
        }).filter(var_core_value_sigA06F => !!var_core_value_sigA06F),
        var_core_value_sig8873 = var_core_value_sig6663.elements["map"](var_core_value_sig770E => {
          let var_core_value_sig4654 = U(var_core_value_sig770E);
          if (!var_core_value_sig4654 || !("connectorData" in var_core_value_sig770E)) return null;
          let var_core_value_sigB26B = var_core_value_sig6AE2.get(var_core_value_sig770E.id),
            var_core_value_sig019B = var_core_value_sig6AE2.get(var_core_value_sig4654.parentNodeId),
            var_core_value_sigC6BC = var_core_value_sig6AE2.get(var_core_value_sig4654.childNodeId);
          return !var_core_value_sigB26B || !var_core_value_sig019B || !var_core_value_sigC6BC ? null : Vn(var_core_value_sig770E, {
            id: var_core_value_sigB26B,
            scopeId: var_core_value_sig4EAB,
            parentNodeId: var_core_value_sig019B,
            childNodeId: var_core_value_sigC6BC,
            idMap: var_core_value_sig6AE2,
            deltaX: var_core_value_sigA5E0,
            deltaY: var_core_value_sigC38F
          });
        }).filter(var_core_value_sig8EC2 => !!var_core_value_sig8EC2),
        var_core_value_sigB9C5 = var_core_value_sig6663.elements["map"](var_core_value_sigA8C3 => {
          let var_core_value_sig5276 = W(var_core_value_sigA8C3),
            var_core_value_sig031B = var_core_value_sig6AE2.get(var_core_value_sigA8C3.id),
            var_core_value_sig9DC0 = var_core_value_sig5276 ? var_core_value_sig6AE2.get(var_core_value_sig5276.ownerNodeId) : undefined;
          return !var_core_value_sig5276 || !var_core_value_sig031B || !var_core_value_sig9DC0 ? null : Hn(var_core_value_sigA8C3, {
            id: var_core_value_sig031B,
            scopeId: var_core_value_sig4EAB,
            ownerNodeId: var_core_value_sig9DC0,
            deltaX: var_core_value_sigA5E0,
            deltaY: var_core_value_sigC38F
          });
        }).filter(var_core_value_sig95F0 => !!var_core_value_sig95F0),
        var_core_value_sig511D = [var_core_value_sigFAFE, ...var_core_value_sig2B86],
        var_core_value_sig1610 = bt({
          id: var_core_value_sig4EAB,
          rootNodeId: var_core_value_sigFD17,
          ...Xn(var_core_value_sig511D)
        });
      return J(var_core_value_sig97E2, var_core_value_sigBFA3.unitId, an({
        unitId: var_core_value_sigBFA3.unitId,
        subUnitId: var_core_value_sigBFA3.subUnitId,
        elements: [var_core_value_sig1610, ...var_core_value_sig511D, ...var_core_value_sig8873, ...var_core_value_sigB9C5]
      }));
    }
  },
  Or = {
    id: "board.operation.mind-map.toggle-collapse",
    type: var_core_value_sig9CF2.OPERATION,
    handler: (var_core_value_sig23AB, var_core_value_sigA15D) => {
      if (!(var_core_value_sigA15D != null && var_core_value_sigA15D.unitId) || !var_core_value_sigA15D.subUnitId || !var_core_value_sigA15D.nodeId) return false;
      let var_core_value_sig7E90 = var_core_value_sig23AB.get(var_core_value_sigD8C3).getElementData(var_core_value_sigA15D.unitId, var_core_value_sigA15D.subUnitId),
        var_core_value_sig03F7 = K(var_core_value_sig7E90, var_core_value_sigA15D.nodeId);
      if (!var_core_value_sig03F7) return false;
      let var_core_value_sig756F = var_core_value_sigA15D.collapsed ?? !var_core_value_sig03F7.meta["collapsed"],
        var_core_value_sig0DB11 = [],
        var_core_value_sig4950 = [];
      return xn(var_core_value_sig03F7.data, var_core_value_sig756F, var_core_value_sig0DB11, var_core_value_sig4950), ln(var_core_value_sig7E90, var_core_value_sig03F7.meta["structureScopeId"], var_core_value_sigA15D.nodeId, !var_core_value_sig756F, var_core_value_sig0DB11, var_core_value_sig4950), J(var_core_value_sig23AB, var_core_value_sigA15D.unitId, {
        redoMutations: var_core_value_sig0DB11,
        undoMutations: var_core_value_sig4950
      });
    }
  },
  kr = [cr, lr, dr, fr, pr, mr, hr, gr, _r, vr, yr, Cr, wr, br, Tr, Er, Dr, Or],
  Ar = /<!\s*(doctype|entity)\b/i,
  jr = new Set(["text", "title"]);
function Mr(var_core_value_sig4424) {
  return !!var_core_value_sig4424 && var_core_value_sig4424.nodeType === 1;
}
function Nr(var_core_value_sig57E8, var_core_value_sig76B6) {
  return Array.from(var_core_value_sig57E8.children).filter(var_core_value_sig9CCB => var_core_value_sig9CCB.tagName["toLowerCase"]() === var_core_value_sig76B6);
}
function Pr(var_core_value_sig89BC, var_core_value_sig2191) {
  return Nr(var_core_value_sig89BC, var_core_value_sig2191)[0];
}
function Fr(var_core_value_sig3B2E) {
  var var_core_value_sig5A9A;
  return (var_core_value_sig3B2E == null || (var_core_value_sig5A9A = var_core_value_sig3B2E.textContent) == null ? undefined : var_core_value_sig5A9A.trim()) || undefined;
}
function Ir(var_core_value_sigB524) {
  return var_core_value_sigB524.getAttribute("text") ?? var_core_value_sigB524.getAttribute("title") ?? "Add text";
}
function Lr(var_core_value_sig8CFB) {
  let var_core_value_sigB52C = {};
  return Array.from(var_core_value_sig8CFB.attributes).forEach(var_core_value_sigE718 => {
    jr.has(var_core_value_sigE718.name) || (var_core_value_sigB52C[var_core_value_sigE718.name] = var_core_value_sigE718.value);
  }), Object.keys(var_core_value_sigB52C).length ? var_core_value_sigB52C : undefined;
}
function Rr(var_core_value_sigA4B8) {
  return {
    text: Ir(var_core_value_sigA4B8),
    foreignAttributes: Lr(var_core_value_sigA4B8),
    children: Nr(var_core_value_sigA4B8, "outline").map(Rr)
  };
}
function zr(var_core_value_sigFF9C, var_core_value_sig278D) {
  return {
    text: var_core_value_sigFF9C || var_core_value_sig278D || "导入的大纲",
    children: []
  };
}
function Br(var_core_value_sigC0FE, var_core_value_sigDD22) {
  let var_core_value_sig2D35 = [];
  if (Ar.test(var_core_value_sigC0FE)) return {
    diagnostics: [{
      severity: "error",
      code: "unsafe-doctype",
      message: "OPML containing DOCTYPE or ENTITY declarations is not imported."
    }]
  };
  let var_core_value_sig7A4B = new DOMParser().parseFromString(var_core_value_sigC0FE, "text/xml");
  if (var_core_value_sig7A4B.getElementsByTagName("parsererror").length > 0) return {
    diagnostics: [{
      severity: "error",
      code: "invalid-xml",
      message: "OPML\x20XML\x20could\x20not\x20be\x20parsed."
    }]
  };
  let var_core_value_sigE50A = Pr(var_core_value_sig7A4B.documentElement, "body") ? var_core_value_sig7A4B.documentElement : var_core_value_sig7A4B.getElementsByTagName("opml")[0];
  if (!Mr(var_core_value_sigE50A)) return {
    diagnostics: [{
      severity: "error",
      code: "missing-opml",
      message: "The document does not contain an OPML root element."
    }]
  };
  let var_core_value_sigC8AC = Pr(var_core_value_sigE50A, "head"),
    var_core_value_sig8E63 = Pr(var_core_value_sigE50A, "body"),
    var_core_value_sig300D = Fr(Pr(var_core_value_sigC8AC ?? var_core_value_sigE50A, "title")),
    var_core_value_sig520B = var_core_value_sig8E63 ? Nr(var_core_value_sig8E63, "outline").map(Rr) : [];
  var_core_value_sig520B.length || var_core_value_sig2D35.push({
    severity: "warning",
    code: "empty-body",
    message: "The OPML body does not contain outline nodes."
  });
  let var_core_value_sigFE26 = var_core_value_sig520B.length === 1 ? var_core_value_sig520B[0] : {
    ...zr(var_core_value_sig300D, var_core_value_sigDD22 == null ? undefined : var_core_value_sigDD22.fileName),
    children: var_core_value_sig520B
  };
  return {
    blueprint: {
      title: var_core_value_sig300D ?? var_core_value_sigFE26.text,
      root: var_core_value_sigFE26
    },
    diagnostics: var_core_value_sig2D35
  };
}
function Vr(var_core_value_sig1019) {
  return var_core_value_sig1019.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
function Hr(var_core_value_sig32AB) {
  return var_core_value_sig32AB ? Object.entries(var_core_value_sig32AB).map(([var_core_value_sigAEC8, var_core_value_sigB977]) => "\x20" + var_core_value_sigAEC8 + "=\x22" + Vr(var_core_value_sigB977) + "\x22").join("") : "";
}
function Ur(var_core_value_sig72BE, var_core_value_sig3E4A) {
  let var_core_value_sig3171 = " "["repeat"](var_core_value_sig3E4A),
    var_core_value_sigEBC4 = 'text="' + Vr(var_core_value_sig72BE.text) + "\x22" + Hr(var_core_value_sig72BE.foreignAttributes);
  return var_core_value_sig72BE.children["length"] ? [var_core_value_sig3171 + "<outline " + var_core_value_sigEBC4 + ">", ...var_core_value_sig72BE.children["map"](var_core_value_sig2949 => Ur(var_core_value_sig2949, var_core_value_sig3E4A + 1)), var_core_value_sig3171 + "</outline>"].join("\x0a") : var_core_value_sig3171 + "<outline " + var_core_value_sigEBC4 + " />";
}
function Wr(var_core_value_sig788B) {
  let var_core_value_sig9A80 = var_core_value_sig788B.title ?? var_core_value_sig788B.root["text"],
    var_core_value_sig7C69 = var_core_value_sig788B.root["children"].length ? var_core_value_sig788B.root["children"] : [var_core_value_sig788B.root];
  return ['<?xml version="1.0" encoding="UTF-8"?>', "<opml\x20version=\x222.0\x22>", " <head>", " <title>" + Vr(var_core_value_sig9A80) + "</title>", " </head>", " <body>", ...var_core_value_sig7C69.map(var_core_value_sig308A => Ur(var_core_value_sig308A, 2)), "\x20\x20</body>", "</opml>"].join("\x0a");
}
function Gr(var_core_value_sig01EF, var_core_value_sig3603, var_core_value_sigC163) {
  let var_core_value_sigF5F3 = var_core_value_sigC163 < 0 ? var_core_value_sig3603.length : var_core_value_sigC163;
  var_core_value_sig3603.slice(-var_core_value_sigF5F3).forEach(var_core_value_sig528D => {
    var_core_value_sig01EF.syncExecuteCommand(var_core_value_sig528D.id, var_core_value_sig528D.params);
  });
}
function Kr(var_core_value_sig5E69, var_core_value_sig7B39) {
  let var_core_value_sigDCAB = At({
    containerId: var_core_value_sig5E69.containerId,
    rootNodeId: var_core_value_sig5E69.rootNodeId,
    left: var_core_value_sig5E69.left,
    top: var_core_value_sig5E69.top,
    blueprint: var_core_value_sig7B39
  });
  return var_core_value_sigDCAB.container["custom"] = {
    ...var_core_value_sigDCAB.container["custom"],
    mindmap: {
      ...var_core_value_sigDCAB.container["custom"].mindmap,
      sourceProvenance: {
        format: "opml",
        ...(var_core_value_sig5E69.fileName ? {
          fileName: var_core_value_sig5E69.fileName
        } : null),
        importedAt: Date.now()
      }
    }
  }, var_core_value_sigDCAB.elements;
}
const qr = {
  id: "board.operation.mind-map.import-opml",
  type: var_core_value_sig9CF2.OPERATION,
  handler: (var_core_value_sigF569, var_core_value_sig2A9F) => {
    var var_core_value_sigB14A;
    if (!(var_core_value_sig2A9F != null && var_core_value_sig2A9F.unitId) || !var_core_value_sig2A9F.subUnitId || !var_core_value_sig2A9F.opml || !Number.isFinite(var_core_value_sig2A9F.left) || !Number.isFinite(var_core_value_sig2A9F.top)) return {
      success: false,
      diagnostics: [{
        severity: "error",
        code: "invalid-params",
        message: "Missing import parameters."
      }]
    };
    let var_core_value_sig4401 = Br(var_core_value_sig2A9F.opml, {
      fileName: var_core_value_sig2A9F.fileName
    });
    if (!var_core_value_sig4401.blueprint) return {
      success: false,
      diagnostics: var_core_value_sig4401.diagnostics
    };
    let var_core_value_sig4D6A = Kr(var_core_value_sig2A9F, var_core_value_sig4401.blueprint),
      var_core_value_sigEF80 = var_core_value_sigF569.get(var_core_value_sigD8C3),
      var_core_value_sig526D1 = var_core_value_sigEF80.getElementData(var_core_value_sig2A9F.unitId, var_core_value_sig2A9F.subUnitId),
      var_core_value_sigD78B = var_core_value_sigEF80.getElementOrder(var_core_value_sig2A9F.unitId, var_core_value_sig2A9F.subUnitId),
      var_core_value_sigCB8C = var_core_value_sigFC47({
        unitId: var_core_value_sig2A9F.unitId,
        subUnitId: var_core_value_sig2A9F.subUnitId,
        elements: var_core_value_sig4D6A,
        insertIndex: var_core_value_sig2A9F.insertIndex,
        elementData: var_core_value_sig526D1,
        elementOrder: var_core_value_sigD78B
      });
    if (!var_core_value_sigCB8C) return {
      success: false,
      diagnostics: [{
        severity: "error",
        code: "add-elements-failed",
        message: "Unable to create board elements for imported OPML."
      }]
    };
    let var_core_value_sigD217 = var_core_value_sigF569.get(var_core_value_sig6223),
      var_core_value_sigEB0F = var_core_value_sig45CD(var_core_value_sigCB8C.redoMutations, var_core_value_sigD217);
    return var_core_value_sigEB0F.result ? (var_core_value_sigF569.get(var_core_value_sigF65B).pushUndoRedo({
      unitID: var_core_value_sig2A9F.unitId,
      redoMutations: var_core_value_sigCB8C.redoMutations,
      undoMutations: var_core_value_sigCB8C.undoMutations
    }), {
      success: true,
      diagnostics: var_core_value_sig4401.diagnostics,
      containerId: var_core_value_sig4D6A[0].id,
      rootNodeId: (var_core_value_sigB14A = V(var_core_value_sig4D6A[0])) == null ? undefined : var_core_value_sigB14A.rootNodeId,
      nodeCount: var_core_value_sig4D6A.filter(var_core_value_sigA309 => !!H(var_core_value_sigA309)).length
    }) : (Gr(var_core_value_sigD217, var_core_value_sigCB8C.undoMutations, var_core_value_sigEB0F.index), {
      success: false,
      diagnostics: [{
        severity: "error",
        code: "mutation-failed",
        message: "Unable to add imported mind-map elements."
      }]
    });
  }
};
function Jr(var_core_value_sigDC44) {
  let var_core_value_sigDEFC = "shapeData" in var_core_value_sigDC44 ? var_core_value_sigDC44.shapeData["shapeText"] : undefined;
  return (var_core_value_sigDEFC == null ? undefined : var_core_value_sigDEFC.text) ?? "Add text";
}
function Yr(var_core_value_sigE842, var_core_value_sigA77A, var_core_value_sig0701) {
  return Object.values(var_core_value_sigE842).filter(var_core_value_sig9E20 => {
    let var_core_value_sig26BB = H(var_core_value_sig9E20.element);
    return (var_core_value_sig26BB == null ? undefined : var_core_value_sig26BB.structureScopeId) === var_core_value_sigA77A && var_core_value_sig26BB.parentNodeId === var_core_value_sig0701;
  }).sort((var_core_value_sig19B4, var_core_value_sig218A) => {
    let var_core_value_sig14CB = H(var_core_value_sig19B4.element),
      var_core_value_sigFDEE = H(var_core_value_sig218A.element);
    return Xe(var_core_value_sig14CB == null ? undefined : var_core_value_sig14CB.orderKey, var_core_value_sigFDEE == null ? undefined : var_core_value_sigFDEE.orderKey) || var_core_value_sig19B4.elementId["localeCompare"](var_core_value_sig218A.elementId);
  });
}
function Xr(var_core_value_sig5DCA, var_core_value_sigF1AB, var_core_value_sig902F) {
  let var_core_value_sig6BD7 = H(var_core_value_sig902F.element);
  return {
    text: Jr(var_core_value_sig902F.element),
    foreignAttributes: var_core_value_sig6BD7 == null ? undefined : var_core_value_sig6BD7.foreignAttributes,
    collapsed: var_core_value_sig6BD7 == null ? undefined : var_core_value_sig6BD7.collapsed,
    children: Yr(var_core_value_sig5DCA, var_core_value_sigF1AB, var_core_value_sig902F.elementId).map(var_core_value_sigA676 => Xr(var_core_value_sig5DCA, var_core_value_sigF1AB, var_core_value_sigA676))
  };
}
const Zr = {
    id: "board.operation.mind-map.export-opml",
    type: var_core_value_sig9CF2.OPERATION,
    handler: (var_core_value_sig63E0, var_core_value_sig1B87) => {
      if (!(var_core_value_sig1B87 != null && var_core_value_sig1B87.unitId) || !var_core_value_sig1B87.subUnitId || !var_core_value_sig1B87.scopeId) return false;
      let var_core_value_sig580B = var_core_value_sig63E0.get(var_core_value_sigD8C3).getElementData(var_core_value_sig1B87.unitId, var_core_value_sig1B87.subUnitId),
        var_core_value_sig4836 = Object.values(var_core_value_sig580B).find(var_core_value_sigC27E => {
          let var_core_value_sigA70D = H(var_core_value_sigC27E.element);
          return (var_core_value_sigA70D == null ? undefined : var_core_value_sigA70D.structureScopeId) === var_core_value_sig1B87.scopeId && var_core_value_sigA70D.parentNodeId === null;
        });
      return var_core_value_sig4836 ? Wr({
        title: Jr(var_core_value_sig4836.element),
        root: Xr(var_core_value_sig580B, var_core_value_sig1B87.scopeId, var_core_value_sig4836)
      }) : false;
    }
  },
  Qr = [qr, Zr];
var $r = "@univerjs-pro/boards-mind",
  ei = "1.0.0-insiders.20260907-70fc579";
const ti = {};
function ni(var_core_value_sig4C06, var_core_value_sig4D56) {
  return function (var_core_value_sigCE10, var_core_value_sigA3861) {
    var_core_value_sig4D56(var_core_value_sigCE10, var_core_value_sigA3861, var_core_value_sig4C06);
  };
}
function ri(var_core_value_sig7C26, var_core_value_sigBC59, var_core_value_sig544E, var_core_value_sigCE8A) {
  var var_core_value_sig0718 = arguments.length,
    var_core_value_sig1B221 = var_core_value_sig0718 < 3 ? var_core_value_sigBC59 : var_core_value_sigCE8A === null ? var_core_value_sigCE8A = Object.getOwnPropertyDescriptor(var_core_value_sigBC59, var_core_value_sig544E) : var_core_value_sigCE8A,
    var_core_value_sig8854;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sig1B221 = Reflect.decorate(var_core_value_sig7C26, var_core_value_sigBC59, var_core_value_sig544E, var_core_value_sigCE8A);else {
    for (var var_core_value_sig5275 = var_core_value_sig7C26.length - 1; var_core_value_sig5275 >= 0; var_core_value_sig5275--) (var_core_value_sig8854 = var_core_value_sig7C26[var_core_value_sig5275]) && (var_core_value_sig1B221 = (var_core_value_sig0718 < 3 ? var_core_value_sig8854(var_core_value_sig1B221) : var_core_value_sig0718 > 3 ? var_core_value_sig8854(var_core_value_sigBC59, var_core_value_sig544E, var_core_value_sig1B221) : var_core_value_sig8854(var_core_value_sigBC59, var_core_value_sig544E)) || var_core_value_sig1B221);
  }
  return var_core_value_sig0718 > 3 && var_core_value_sig1B221 && Object.defineProperty(var_core_value_sigBC59, var_core_value_sig544E, var_core_value_sig1B221), var_core_value_sig1B221;
}
let $ = class extends var_core_value_sigB7D6 {
  constructor(var_core_value_sigCD82 = ti, var_core_value_sig44DD, var_core_value_sig96FA, var_core_value_sigAB68) {
    super(), this._config = var_core_value_sigCD82, this._injector = var_core_value_sig44DD, this._commandService = var_core_value_sig96FA, this._configService = var_core_value_sigAB68;
    let {
      ...var_core_value_sig040A
    } = var_core_value_sig0E92({}, ti, this._config);
    this._configService["setConfig"]("boards-mind.config", var_core_value_sig040A);
  }
  onStarting() {
    this._injector["add"]([Bt, {
      useClass: Vt
    }]), this.disposeWithMe(this._commandService["registerCommand"](G)), this.disposeWithMe(this._commandService["registerCommand"](Pt)), kr.forEach(var_core_value_sig48CA => {
      this.disposeWithMe(this._commandService["registerCommand"](var_core_value_sig48CA));
    }), Qr.forEach(var_core_value_sig50AF => {
      this.disposeWithMe(this._commandService["registerCommand"](var_core_value_sig50AF));
    });
  }
};
zt($, "pluginName", "UNIVER_BOARDS_MIND_PLUGIN"), zt($, "packageName", $r), zt($, "version", ei), zt($, "type", var_core_value_sig4DD1.UNIVER_BOARD), $ = ri([var_core_value_sig666D(var_core_value_sig15B6, var_core_value_sig786E), ni(1, var_core_value_sigEB59(var_core_value_sigD9B0)), ni(2, var_core_value_sig6223), ni(3, var_core_value_sig7653)], $);
export { cr as AddMindMapChildOperation, lr as AddMindMapSiblingOperation, wr as ChangeMindMapBranchLineTypeOperation, br as ChangeMindMapLayoutOperation, Tr as CopyMindMapNodeOperation, mr as DeleteMindMapNodeOperation, _r as DetachMindMapNodeOperation, Zr as ExportMindMapOpmlOperation, Bt as IMindMapClipboardService, qr as ImportMindMapOpmlOperation, Pt as InsertBoardMindMapOperation, yr as LayoutMindMapOperation, j as MIND_MAP_CONNECTOR_ROLE, N as MIND_MAP_DEFAULT_LAYOUT, F as MIND_MAP_DEFAULT_NODE_SIZE, xe as MIND_MAP_DEFAULT_NODE_TEXT, P as MIND_MAP_LAYOUT_SPACING_LIMITS, k as MIND_MAP_MODE_ID, A as MIND_MAP_NODE_ROLE, Dr as PasteMindMapAsNewMindMapOperation, Er as PasteMindMapNodeOperation, gr as PromoteMindMapNodeOperation, Cr as ReflowMindMapCommand, hr as ReparentMindMapNodeOperation, G as SetMindMapElementMutation, Or as ToggleMindMapNodeCollapseOperation, vr as TranslateMindMapOperation, $ as UniverBoardsMindPlugin, pr as UpdateMindMapIncomingConnectorOperation, dr as UpdateMindMapNodeOperation, fr as UpdateMindMapNodesOperation, Xe as compareMindMapOrderKey, Et as createMindMapElements, At as createMindMapElementsFromBlueprint, U as getMindMapConnectorMeta, V as getMindMapContainerMeta, Qe as getMindMapDefaultChildOrderKey, H as getMindMapNodeMeta, tt as isMindMapPlainStructureKind, nt as resolveMindMapBranchLineTypeForStructure, Qn as resolveMindMapLayoutPreview, Ge as resolveMindMapNodeHostSize };
