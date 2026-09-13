const e = {
  "collaboration-client": {
    collabClient: { tooltip: { reconnect: "Nhấp để kết nối lại" } },
    collabStatus: {
      fetchMiss: "Đang đồng bộ dữ liệu máy chủ...",
      conflict: "Xung đột chỉnh sửa",
      notCollab: "Tệp cục bộ",
      synced: "Đã đồng bộ",
      syncing: "Đang đồng bộ...",
      offline: "Ngoại tuyến, các chỉnh sửa sẽ được lưu cục bộ",
    },
    session: {
      "connection-failed": "Kết nối thất bại. Vui lòng kiểm tra mạng của bạn.",
      "will-retry": "Kết nối thất bại. Chúng tôi sẽ thử lại sau một lát.",
      "room-full":
        "Tài liệu đã đạt đến giới hạn cộng tác. Các chỉnh sửa của bạn sẽ được lưu cục bộ.",
      "join-failed":
        "Tham gia cộng tác thất bại. Vui lòng thử lại sau. Các chỉnh sửa của bạn sẽ được lưu cục bộ.",
      "room-not-exists":
        "Tham gia cộng tác thất bại. Các chỉnh sửa của bạn sẽ được lưu cục bộ.",
      "room-permission-denied":
        "Không có quyền cộng tác. Các chỉnh sửa của bạn sẽ được lưu cục bộ.",
      "room-cnt-exceeds":
        "Số lượng tài liệu cộng tác vượt quá giới hạn. Các chỉnh sửa của bạn sẽ được lưu cục bộ.",
      "collaboration-timeout":
        "Máy\x20chủ\x20không\x20phản\x20hồi\x20yêu\x20cầu\x20cộng\x20tác\x20của\x20bạn.\x20Các\x20chỉnh\x20sửa\x20của\x20bạn\x20sẽ\x20được\x20lưu\x20cục\x20bộ.",
    },
    conflict: {
      title: "Xung đột cộng tác",
      content:
        "Có\x20sự\x20xung\x20đột\x20giữa\x20bản\x20sao\x20cục\x20bộ\x20của\x20bạn\x20và\x20bản\x20sao\x20trên\x20máy\x20chủ.\x20Vui\x20lòng\x20lưu\x20các\x20chỉnh\x20sửa\x20cục\x20bộ\x20của\x20bạn,\x20vì\x20chúng\x20sẽ\x20bị\x20mất\x20khi\x20bạn\x20tải\x20lại\x20trang.",
    },
    permission: {
      title: "Lỗi xác thực",
      content:
        "Hành động của bạn xung đột với quyền của máy chủ. Vui lòng lưu các chỉnh sửa cục bộ của bạn ở nơi khác vì chúng sẽ bị hủy sau khi làm mới trang.",
    },
    collaboration: {
      "single-unit": {
        warning:
          "Bạn đã mở cùng một tệp trong một tab khác. Để tránh mất dữ liệu, bạn không thể chỉnh sửa trên tab này.",
      },
      closeRoom: "Quyền chỉnh sửa đã bị thu hồi vì phòng cộng tác đã đóng.",
    },
    auth: {
      needGotoLoginAlert:
        "Phiên\x20đăng\x20nhập\x20của\x20bạn\x20đã\x20hết\x20hạn,\x20nhấp\x20OK\x20để\x20đăng\x20nhập\x20lại,\x20nhấp\x20Hủy\x20để\x20lưu\x20các\x20chỉnh\x20sửa\x20cục\x20bộ\x20của\x20bạn.",
    },
  },
};
module.exports = e;
