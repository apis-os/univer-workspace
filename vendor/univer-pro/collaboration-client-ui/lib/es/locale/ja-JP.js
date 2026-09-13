const e = {
  "collaboration-client-ui": {
    collabClient: {
      tooltip: {
        reconnect: "クリックして再接続"
      }
    },
    collabStatus: {
      fetchMiss: "サーバーデータを同期中...",
      conflict: "編集の競合",
      notCollab: "ローカルファイル",
      synced: "同期済み",
      syncing: "同期中...",
      offline: "オフライン、編集内容はローカルに保存されます"
    },
    snapshotLoading: {
      timeout: "データの読み込みが {0}/{1} で停止しています。ページを更新して再試行してください。",
      refresh: "ページを更新"
    },
    session: {
      "connection-failed": "接続に失敗しました。ネットワーク接続を確認してください。",
      "will-retry": "接続に失敗しました。しばらくしてから再試行します。",
      "room-full": "共同編集ルームが満員です。編集内容はローカルに保存されます。",
      "collaboration-timeout": "サーバーが共同編集リクエストに応答していません。編集内容はローカルに保存されます。"
    },
    conflict: {
      title: "共同編集の競合",
      content: "ローカルのコピーとサーバー上のコピーの間に競合があります。ページを再読み込みすると失われるため、ローカルの編集内容を保存してください。"
    },
    permission: {
      title: "認証エラー",
      content: "お客様の操作がサーバーのアクセス許可と競合しています。ページを更新すると破棄されるため、ローカルの編集内容を別の場所に保存してください。"
    },
    collaboration: {
      "offline-data-not-saved": "オフライン編集内容がサーバーに保存されていません。ネットワークを確認してから再試行してください。",
      "single-unit": {
        warning: "別のタブで同じファイルを開いています。データの損失を防ぐため、このタブでは編集できません。"
      },
      closeRoom: "共同編集ルームが閉じられたため、編集権限が取り消されました。"
    },
    auth: {
      needGotoLoginAlert: "ログインの有効期限が切れました。[OK]をクリックして再ログインするか、[キャンセル]をクリックしてローカルの編集内容を保存してください。"
    },
    formula: {
      calculation: {
        started: "数式の計算を開始しました。",
        waiting: "数式の計算キューが満杯です。空きが出るまでお待ちください...",
        unable: "現在、数式の計算を実行できません。後でもう一度お試しください。"
      }
    }
  }
};
export { e as default };
