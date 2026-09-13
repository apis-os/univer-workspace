const e = {
  "sheets-outline-ui": {
    cancel: "취소",
    group: "그룹",
    ungroup: "그룹 해제",
    groupRows: "행 {0} - {1} 그룹화",
    groupColumns: "열 {0} - {1} 그룹화",
    ungroupRows: "행 {0} - {1} 그룹 해제",
    ungroupColumns: "열 {0} - {1} 그룹 해제",
    error: {
      permission: "보기 권한이 없어 그룹 관련 작업을 수행할 수 없습니다.",
      invalidRange: "선택한 범위가 잘못되어 윤곽선을 만들 수 없습니다.",
      outOfBounds: "선택한 범위가 시트 밖에 있어 윤곽선을 만들 수 없습니다.",
      crossing:
        "겹치는\x20그룹이\x20생성되므로\x20윤곽선을\x20업데이트할\x20수\x20없습니다.",
      maxDepth:
        "Excel 호환 윤곽선은 최대 8단계까지만 지원하므로 윤곽선을 만들 수 없습니다.",
      moveSplitsOutline:
        "기존 윤곽선이 분할되므로 행 또는 열을 이동할 수 없습니다. 먼저 관련 윤곽선을 제거하세요.",
      clearRangeNotContainOutline:
        "선택한 범위가 윤곽선 그룹 범위를 완전히 포함하지 않아 그룹을 해제할 수 없습니다.",
      unknown: "작업이 잘못되어 윤곽선을 업데이트할 수 없습니다.",
    },
  },
};
export { e as default };
