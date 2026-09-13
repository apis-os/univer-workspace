const e = {
  "collaboration-client": {
    collabClient: { tooltip: { reconnect: "點擊重新連線" } },
    collabStatus: {
      fetchMiss: "正在擷取伺服器資料...",
      conflict: "編輯衝突",
      notCollab: "本機檔案",
      synced: "已同步",
      syncing: "同步中...",
      offline: "已離線，編輯將儲存在本機",
    },
    session: {
      "connection-failed": "連線失敗，請檢查您的網絡。",
      "will-retry": "連線失敗，將在稍後重試連線。",
      "room-full": "此文件協作人數已達上限，您的編輯將暫存於本機。",
      "join-failed": "加入協作失敗，請稍後重試，您的編輯將暫存於本機。",
      "room-not-exists": "加入協作失敗，您的編輯將暫存於本機。",
      "room-permission-denied": "沒有協作權限，您的編輯將暫存於本機。",
      "room-cnt-exceeds": "協作文件數量超過限制，您的編輯將暫存於本機。",
      "collaboration-timeout": "伺服器未回應協作請求，您的編輯將儲存在本機。",
    },
    conflict: {
      title: "協作衝突",
      content:
        "您的本機文件與伺服器文件存在衝突。請將您的本機編輯儲存至其他地方，因為重新整理頁面後將會遺失。",
    },
    permission: {
      title: "認證錯誤",
      content:
        "您的操作與伺服器權限存在衝突。請將您的本機編輯儲存至其他地方，重新整理頁面後將會被捨棄。",
    },
    collaboration: {
      "single-unit": {
        warning:
          "您在另一個分頁開啟了同一個檔案。為避免資料遺失，此分頁將無法進行編輯。",
      },
      closeRoom: "由於協作房間已關閉，編輯權限已被收回。",
    },
    auth: {
      needGotoLoginAlert:
        "您的登入已過期，點擊「確定」重新登入，點擊「取消」儲存您的本機編輯。",
    },
  },
};
module.exports = e;
