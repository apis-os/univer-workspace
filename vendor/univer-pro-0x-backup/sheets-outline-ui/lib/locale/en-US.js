const e = {
  "sheets-outline-ui": {
    cancel: "Cancel",
    group: "Group",
    ungroup: "Ungroup",
    groupRows: "Group\x20rows\x20{0}\x20-\x20{1}",
    groupColumns: "Group columns {0} - {1}",
    ungroupRows: "Ungroup\x20rows\x20{0}\x20-\x20{1}",
    ungroupColumns: "Ungroup columns {0} - {1}",
    error: {
      permission:
        "You do not have view permission, so grouping operations cannot be performed.",
      invalidRange:
        "Cannot\x20create\x20outline\x20because\x20the\x20selected\x20range\x20is\x20invalid.",
      outOfBounds:
        "Cannot create outline because the selected range is outside the sheet.",
      crossing:
        "Cannot\x20update\x20outline\x20because\x20the\x20result\x20would\x20create\x20overlapping\x20groups.",
      maxDepth:
        "Cannot\x20create\x20outline\x20because\x20Excel-compatible\x20outlines\x20support\x20up\x20to\x208\x20levels.",
      moveSplitsOutline:
        "Cannot move rows or columns because it would split an existing outline. Remove the related outline first.",
      clearRangeNotContainOutline:
        "Cannot ungroup because the selected range does not fully contain the outline group range.",
      unknown: "Cannot update outline because the operation is invalid.",
    },
  },
};
export { e as default };
