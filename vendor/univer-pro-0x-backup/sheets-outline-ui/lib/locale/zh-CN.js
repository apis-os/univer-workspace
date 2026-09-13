const e = {
  "sheets-outline-ui": {
    cancel: "取消",
    group: "分组",
    ungroup: "取消分组",
    groupRows: "将多行（{0} - {1}）分组",
    groupColumns: "将多列（{0} - {1}）分组",
    ungroupRows: "取消将多行（{0} - {1}）分组",
    ungroupColumns: "取消将多列（{0} - {1}）分组",
    error: {
      permission: "当前无查看权限，无法进行分组相关操作。",
      invalidRange: "无法创建分组，所选范围无效。",
      outOfBounds: "无法创建分组，所选范围超出了当前工作表。",
      crossing: "无法更新分组，操作后会产生交叉分组。",
      maxDepth: "无法创建分组，为兼容 Excel 导出，分组最多支持 8 层。",
      moveSplitsOutline:
        "无法移动行或列，该操作会拆分已有分组。请先取消相关分组后再移动。",
      clearRangeNotContainOutline: "无法取消分组，所选范围未完全包含分组范围",
      unknown: "无法更新分组，该操作无效。",
    },
  },
};
export { e as default };
