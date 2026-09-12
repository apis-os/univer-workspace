const e = {
  "sheets-outline-ui": {
    cancel: "キャンセル",
    group: "グループ化",
    ungroup: "グループ解除",
    groupRows: "行 {0} - {1} をグループ化",
    groupColumns: "列\x20{0}\x20-\x20{1}\x20をグループ化",
    ungroupRows: "行 {0} - {1} のグループを解除",
    ungroupColumns: "列 {0} - {1} のグループを解除",
    error: {
      permission: "表示権限がないため、グループ関連の操作を実行できません。",
      invalidRange: "選択した範囲が無効なため、アウトラインを作成できません。",
      outOfBounds:
        "選択した範囲がシート外にあるため、アウトラインを作成できません。",
      crossing:
        "重なり合うグループが作成されるため、アウトラインを更新できません。",
      maxDepth:
        "Excel 互換のアウトラインは最大 8 レベルまで対応しているため、アウトラインを作成できません。",
      moveSplitsOutline:
        "既存のアウトラインが分割されるため、行または列を移動できません。先に関連するアウトラインを削除してください。",
      clearRangeNotContainOutline:
        "選択範囲がアウトライングループ範囲全体を含んでいないため、グループを解除できません。",
      unknown: "操作が無効なため、アウトラインを更新できません。",
    },
  },
};
module.exports = e;
