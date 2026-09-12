const e = {
  "sheets-outline-ui": {
    cancel: "Cancel",
    group: "Group",
    ungroup: "Ungroup",
    groupRows: "Group rows {0} - {1}",
    groupColumns: "Group columns {0} - {1}",
    ungroupRows: "Ungroup rows {0} - {1}",
    ungroupColumns: "Ungroup columns {0} - {1}",
    error: {
      permission:
        "You do not have view permission, so grouping operations cannot be performed.",
      invalidRange:
        "Cannot create outline because the selected range is invalid.",
      outOfBounds:
        "Cannot create outline because the selected range is outside the sheet.",
      crossing:
        "Cannot update outline because the result would create overlapping groups.",
      maxDepth:
        "Cannot create outline because Excel-compatible outlines support up to 8 levels.",
      moveSplitsOutline:
        "Cannot move rows or columns because it would split an existing outline. Remove the related outline first.",
      clearRangeNotContainOutline:
        "Cannot ungroup because the selected range does not fully contain the outline group range.",
      unknown: "Cannot update outline because the operation is invalid.",
    },
  },
};
module.exports = e;
