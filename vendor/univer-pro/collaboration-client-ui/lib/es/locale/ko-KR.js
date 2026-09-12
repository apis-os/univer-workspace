const e = {
  "collaboration-client-ui": {
    collabClient: { tooltip: { reconnect: "클릭하여 다시 연결" } },
    collabStatus: {
      fetchMiss: "서버 데이터 동기화 중...",
      conflict: "편집 충돌",
      notCollab: "로컬 파일",
      synced: "동기화됨",
      syncing: "동기화 중...",
      offline:
        "오프라인\x20상태입니다.\x20편집\x20내용은\x20로컬에\x20저장됩니다.",
    },
    snapshotLoading: {
      timeout:
        "데이터 로딩이 {0}/{1}에서 멈췄습니다. 페이지를 새로고침한 후 다시 시도하세요.",
      refresh: "페이지\x20새로고침",
    },
    session: {
      "connection-failed": "연결에 실패했습니다. 네트워크 연결을 확인하세요.",
      "will-retry": "연결에 실패했습니다. 잠시 후 다시 시도합니다.",
      "room-full":
        "공동 편집 룸이 가득 찼습니다. 편집 내용은 로컬에 저장됩니다.",
      "collaboration-timeout":
        "서버가 공동 편집 요청에 응답하지 않습니다. 편집 내용은 로컬에 저장됩니다.",
    },
    conflict: {
      title: "공동\x20편집\x20충돌",
      content:
        "로컬 사본과 서버 사본 간에 충돌이 발생했습니다. 페이지를 새로 고침하면 내용이 손실될 수 있으므로 로컬 편집 내용을 저장하세요.",
    },
    permission: {
      title: "인증\x20오류",
      content:
        "사용자의 작업이 서버 권한과 충돌합니다. 페이지를 새로 고침하면 내용이 손실될 수 있으므로 로컬 편집 내용을 다른 곳에 저장하세요.",
    },
    collaboration: {
      "offline-data-not-saved":
        "오프라인 편집 내용이 서버에 저장되지 않았습니다. 네트워크를 확인한 후 다시 시도하세요.",
      "single-unit": {
        warning:
          "다른\x20탭에서\x20동일한\x20파일을\x20열었습니다.\x20데이터\x20손실을\x20방지하기\x20위해\x20이\x20탭에서는\x20편집할\x20수\x20없습니다.",
      },
      closeRoom: "공동 편집 룸이 닫혀 편집 권한이 취소되었습니다.",
    },
    auth: {
      needGotoLoginAlert:
        "로그인 세션이 만료되었습니다. [확인]을 클릭하여 다시 로그인하거나, [취소]를 클릭하여 로컬 편집 내용을 저장하세요.",
    },
    formula: {
      calculation: {
        started: "수식\x20계산을\x20시작했습니다.",
        waiting:
          "수식\x20계산\x20대기열이\x20가득\x20찼습니다.\x20공간이\x20생길\x20때까지\x20기다려\x20주세요...",
        unable:
          "현재 수식 계산을 수행할 수 없습니다. 나중에 다시 시도해 주세요.",
      },
    },
  },
};
export { e as default };
