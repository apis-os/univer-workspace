const _0x1c1ba4 = _0x4838;
function _0x2652() {
  const _0x583070 = [
    "連線失敗，將在稍後重試連線。",
    "5OsiLVT",
    "您在另一個分頁開啟了同一個檔案。為避免資料遺失，此分頁將無法進行編輯。",
    "協作房間已滿，您的編輯將暫存於本機。",
    "您有未儲存至伺服器的離線編輯，請檢查網路後重試。",
    "270KBvrsS",
    "已同步",
    "您的登入已過期，點擊「確定」重新登入，點擊「取消」儲存您的本機編輯。",
    "133749KllqaB",
    "協作衝突",
    "783004nQwEMP",
    "已離線，編輯將儲存在本機",
    "連線失敗，請檢查您的網路。",
    "正在擷取伺服器資料...",
    "153231nINCpx",
    "16ZRryRn",
    "本機檔案",
    "由於協作房間已關閉，編輯權限已被收回。",
    "357Yqqwno",
    "公式計算佇列已滿，正在等待可用資源...",
    "目前無法執行公式計算，請稍後重試。",
    "84627kwdRkO",
    "您的本機文件與伺服器文件存在衝突。請將您的本機編輯儲存至其他地方，因為重新整理頁面後將會遺失。",
    "公式計算已開始。",
    "14157132vznZHN",
    "重新整理頁面",
    "資料載入停留在\x20{0}/{1}，請重新整理頁面後再試。",
    "387486jXnRWh",
    "您的操作與伺服器權限存在衝突。請將您的本機編輯儲存至其他地方，重新整理頁面後將會被捨棄。",
    "90872dFwzJF",
    "伺服器未回應協作請求，您的編輯將儲存在本機。",
  ];
  _0x2652 = function () {
    return _0x583070;
  };
  return _0x2652();
}
function _0x4838(_0x45c0f2, _0x4bc269) {
  _0x45c0f2 = _0x45c0f2 - 0x155;
  const _0x26521 = _0x2652();
  let _0x4838f4 = _0x26521[_0x45c0f2];
  return _0x4838f4;
}
(function (_0x4eaa45, _0x3c98a6) {
  const _0x416549 = _0x4838,
    _0x334358 = _0x4eaa45();
  while (!![]) {
    try {
      const _0xa40600 =
        parseInt(_0x416549(0x16e)) / 0x1 +
        (-parseInt(_0x416549(0x156)) / 0x2) *
          (parseInt(_0x416549(0x155)) / 0x3) +
        (parseInt(_0x416549(0x170)) / 0x4) *
          (parseInt(_0x416549(0x167)) / 0x5) +
        -parseInt(_0x416549(0x162)) / 0x6 +
        (-parseInt(_0x416549(0x159)) / 0x7) *
          (parseInt(_0x416549(0x164)) / 0x8) +
        (-parseInt(_0x416549(0x15c)) / 0x9) *
          (parseInt(_0x416549(0x16b)) / 0xa) +
        parseInt(_0x416549(0x15f)) / 0xb;
      if (_0xa40600 === _0x3c98a6) break;
      else _0x334358["push"](_0x334358["shift"]());
    } catch (_0x27783b) {
      _0x334358["push"](_0x334358["shift"]());
    }
  }
})(_0x2652, 0x4bb6d);
const e = {
  "collaboration-client-ui": {
    collabClient: { tooltip: { reconnect: "點擊重新連線" } },
    collabStatus: {
      fetchMiss: _0x1c1ba4(0x173),
      conflict: "編輯衝突",
      notCollab: _0x1c1ba4(0x157),
      synced: _0x1c1ba4(0x16c),
      syncing: "同步中...",
      offline: _0x1c1ba4(0x171),
    },
    snapshotLoading: { timeout: _0x1c1ba4(0x161), refresh: _0x1c1ba4(0x160) },
    session: {
      "connection-failed": _0x1c1ba4(0x172),
      "will-retry": _0x1c1ba4(0x166),
      "room-full": _0x1c1ba4(0x169),
      "collaboration-timeout": _0x1c1ba4(0x165),
    },
    conflict: { title: _0x1c1ba4(0x16f), content: _0x1c1ba4(0x15d) },
    permission: { title: "認證錯誤", content: _0x1c1ba4(0x163) },
    collaboration: {
      "offline-data-not-saved": _0x1c1ba4(0x16a),
      "single-unit": { warning: _0x1c1ba4(0x168) },
      closeRoom: _0x1c1ba4(0x158),
    },
    auth: { needGotoLoginAlert: _0x1c1ba4(0x16d) },
    formula: {
      calculation: {
        started: _0x1c1ba4(0x15e),
        waiting: _0x1c1ba4(0x15a),
        unable: _0x1c1ba4(0x15b),
      },
    },
  },
};
module["exports"] = e;
