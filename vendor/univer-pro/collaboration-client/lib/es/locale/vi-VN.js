const e = {
  "collaboration-client": {
    collabClient: {
      tooltip: {
        reconnect: "Nhấp để kết nối lại"
      }
    },
    collabStatus: {
      fetchMiss: "Đang\x20đồng\x20bộ\x20dữ\x20liệu\x20máy\x20chủ...",
      conflict: "Xung đột chỉnh sửa",
      notCollab: "Tệp cục bộ",
      synced: "Đã\x20đồng\x20bộ",
      syncing: "Đang đồng bộ...",
      offline: "Ngoại\x20tuyến,\x20các\x20chỉnh\x20sửa\x20sẽ\x20được\x20lưu\x20cục\x20bộ"
    },
    session: {
      "connection-failed": "Kết nối thất bại. Vui lòng kiểm tra mạng của bạn.",
      "will-retry": "Kết\x20nối\x20thất\x20bại.\x20Chúng\x20tôi\x20sẽ\x20thử\x20lại\x20sau\x20một\x20lát.",
      "room-full": "Tài liệu đã đạt đến giới hạn cộng tác. Các chỉnh sửa của bạn sẽ được lưu cục bộ.",
      "join-failed": "Tham gia cộng tác thất bại. Vui lòng thử lại sau. Các chỉnh sửa của bạn sẽ được lưu cục bộ.",
      "room-not-exists": "Tham gia cộng tác thất bại. Các chỉnh sửa của bạn sẽ được lưu cục bộ.",
      "room-permission-denied": "Không có quyền cộng tác. Các chỉnh sửa của bạn sẽ được lưu cục bộ.",
      "room-cnt-exceeds": "Số lượng tài liệu cộng tác vượt quá giới hạn. Các chỉnh sửa của bạn sẽ được lưu cục bộ.",
      "collaboration-timeout": "Máy\x20chủ\x20không\x20phản\x20hồi\x20yêu\x20cầu\x20cộng\x20tác\x20của\x20bạn.\x20Các\x20chỉnh\x20sửa\x20của\x20bạn\x20sẽ\x20được\x20lưu\x20cục\x20bộ."
    },
    conflict: {
      title: "Xung đột cộng tác",
      content: "Có sự xung đột giữa bản sao cục bộ của bạn và bản sao trên máy chủ. Vui lòng lưu các chỉnh sửa cục bộ của bạn, vì chúng sẽ bị mất khi bạn tải lại trang."
    },
    permission: {
      title: "Lỗi\x20xác\x20thực",
      content: "Hành\x20động\x20của\x20bạn\x20xung\x20đột\x20với\x20quyền\x20của\x20máy\x20chủ.\x20Vui\x20lòng\x20lưu\x20các\x20chỉnh\x20sửa\x20cục\x20bộ\x20của\x20bạn\x20ở\x20nơi\x20khác\x20vì\x20chúng\x20sẽ\x20bị\x20hủy\x20sau\x20khi\x20làm\x20mới\x20trang."
    },
    collaboration: {
      "single-unit": {
        warning: "Bạn\x20đã\x20mở\x20cùng\x20một\x20tệp\x20trong\x20một\x20tab\x20khác.\x20Để\x20tránh\x20mất\x20dữ\x20liệu,\x20bạn\x20không\x20thể\x20chỉnh\x20sửa\x20trên\x20tab\x20này."
      },
      closeRoom: "Quyền\x20chỉnh\x20sửa\x20đã\x20bị\x20thu\x20hồi\x20vì\x20phòng\x20cộng\x20tác\x20đã\x20đóng."
    },
    auth: {
      needGotoLoginAlert: "Phiên đăng nhập của bạn đã hết hạn, nhấp OK để đăng nhập lại, nhấp Hủy để lưu các chỉnh sửa cục bộ của bạn."
    }
  }
};
export { e as default };
