const e = {
  "sheets-outline-ui": {
    cancel: "取消",
    group: "群組",
    ungroup: "取消群組",
    groupRows: "群組列 {0} - {1}",
    groupColumns: "群組欄\x20{0}\x20-\x20{1}",
    ungroupRows: "取消群組列 {0} - {1}",
    ungroupColumns: "取消群組欄\x20{0}\x20-\x20{1}",
    error: {
      permission: "目前沒有檢視權限，無法進行分組相關操作。",
      invalidRange: "無法建立群組，所選範圍無效。",
      outOfBounds: "無法建立群組，所選範圍超出了目前工作表。",
      crossing: "無法更新群組，操作後會產生交叉群組。",
      maxDepth: "無法建立群組，為兼容 Excel 匯出，群組最多支援 8 層。",
      moveSplitsOutline:
        "無法移動列或欄，該操作會拆分既有群組。請先取消相關群組後再移動。",
      clearRangeNotContainOutline: "無法取消群組，所選範圍未完全包含群組範圍",
      unknown: "無法更新群組，該操作無效。",
    },
  },
};
module.exports = e;
