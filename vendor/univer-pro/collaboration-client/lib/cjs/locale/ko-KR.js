const e = {
  "collaboration-client": {
    collabClient: { tooltip: { reconnect: "클릭하여\x20다시\x20연결" } },
    collabStatus: {
      fetchMiss: "서버\x20데이터\x20동기화\x20중...",
      conflict: "편집 충돌",
      notCollab: "로컬 파일",
      synced: "동기화됨",
      syncing: "동기화 중...",
      offline:
        "오프라인\x20상태입니다.\x20편집\x20내용은\x20로컬에\x20저장됩니다.",
    },
    session: {
      "connection-failed": "연결에 실패했습니다. 네트워크 연결을 확인하세요.",
      "will-retry":
        "연결에\x20실패했습니다.\x20잠시\x20후\x20다시\x20시도합니다.",
      "room-full":
        "문서의 공동 편집 인원이 한도에 도달했습니다. 편집 내용은 로컬에 캐시됩니다.",
      "join-failed":
        "공동 편집 참여에 실패했습니다. 나중에 다시 시도해 주세요. 편집 내용은 로컬에 캐시됩니다.",
      "room-not-exists":
        "공동\x20편집\x20참여에\x20실패했습니다.\x20편집\x20내용은\x20로컬에\x20캐시됩니다.",
      "room-permission-denied":
        "공동 편집 권한이 없습니다. 편집 내용은 로컬에 캐시됩니다.",
      "room-cnt-exceeds":
        "공동 편집 문서 수가 한도를 초과했습니다. 편집 내용은 로컬에 캐시됩니다.",
      "collaboration-timeout":
        "서버가 공동 편집 요청에 응답하지 않습니다. 편집 내용은 로컬에 저장됩니다.",
    },
    conflict: {
      title: "공동 편집 충돌",
      content:
        "로컬\x20사본과\x20서버\x20사본\x20간에\x20충돌이\x20발생했습니다.\x20페이지를\x20새로\x20고침하면\x20내용이\x20손실될\x20수\x20있으므로\x20로컬\x20편집\x20내용을\x20저장하세요.",
    },
    permission: {
      title: "인증 오류",
      content:
        "사용자의\x20작업이\x20서버\x20권한과\x20충돌합니다.\x20페이지를\x20새로\x20고침하면\x20내용이\x20손실될\x20수\x20있으므로\x20로컬\x20편집\x20내용을\x20다른\x20곳에\x20저장하세요.",
    },
    collaboration: {
      "single-unit": {
        warning:
          "다른 탭에서 동일한 파일을 열었습니다. 데이터 손실을 방지하기 위해 이 탭에서는 편집할 수 없습니다.",
      },
      closeRoom:
        "공동\x20편집\x20룸이\x20닫혀\x20편집\x20권한이\x20취소되었습니다.",
    },
    auth: {
      needGotoLoginAlert:
        "로그인 세션이 만료되었습니다. [확인]을 클릭하여 다시 로그인하거나, [취소]를 클릭하여 로컬 편집 내용을 저장하세요.",
    },
  },
};
module.exports = e;
