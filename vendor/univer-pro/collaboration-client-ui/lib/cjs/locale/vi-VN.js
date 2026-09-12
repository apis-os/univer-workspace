const e = {
  "collaboration-client-ui": {
    collabClient: { tooltip: { reconnect: "Nhấp để kết nối lại" } },
    collabStatus: {
      fetchMiss: "Đang đồng bộ dữ liệu máy chủ...",
      conflict: "Xung đột chỉnh sửa",
      notCollab: "Tệp\x20cục\x20bộ",
      synced: "Đã đồng bộ",
      syncing: "Đang đồng bộ...",
      offline: "Ngoại tuyến, các chỉnh sửa sẽ được lưu cục bộ",
    },
    snapshotLoading: {
      timeout:
        "Quá trình tải dữ liệu đã dừng ở {0}/{1}. Hãy làm mới trang để thử lại.",
      refresh: "Làm\x20mới\x20trang",
    },
    session: {
      "connection-failed": "Kết nối thất bại, vui lòng kiểm tra mạng của bạn.",
      "will-retry": "Kết nối thất bại, chúng tôi sẽ thử lại sau một lát.",
      "room-full":
        "Phòng cộng tác đã đầy. Các chỉnh sửa của bạn sẽ được lưu cục bộ.",
      "collaboration-timeout":
        "Máy chủ không phản hồi yêu cầu cộng tác của bạn. Các chỉnh sửa của bạn sẽ được lưu cục bộ.",
    },
    conflict: {
      title: "Xung đột cộng tác",
      content:
        "Có sự xung đột giữa bản sao cục bộ của bạn và bản sao trên máy chủ. Vui lòng lưu các chỉnh sửa cục bộ của bạn, vì chúng sẽ bị mất khi bạn tải lại trang.",
    },
    permission: {
      title: "Lỗi xác thực",
      content:
        "Hành động của bạn xung đột với quyền của máy chủ. Vui lòng lưu các chỉnh sửa cục bộ của bạn ở nơi khác vì chúng sẽ bị hủy sau khi làm mới trang.",
    },
    collaboration: {
      "offline-data-not-saved":
        "Bạn có các chỉnh sửa ngoại tuyến chưa được lưu vào máy chủ. Vui lòng kiểm tra mạng của bạn và thử lại.",
      "single-unit": {
        warning:
          "Bạn đã mở cùng một tệp trong một tab khác. Để tránh mất dữ liệu, bạn không thể chỉnh sửa trên tab này.",
      },
      closeRoom: "Quyền chỉnh sửa đã bị thu hồi vì phòng cộng tác đã đóng.",
    },
    auth: {
      needGotoLoginAlert:
        "Phiên đăng nhập của bạn đã hết hạn, nhấp OK để đăng nhập lại, nhấp Hủy để lưu các chỉnh sửa cục bộ của bạn.",
    },
    formula: {
      calculation: {
        started: "Bắt đầu tính toán công thức.",
        waiting:
          "Hàng\x20đợi\x20tính\x20toán\x20công\x20thức\x20đã\x20đầy,\x20đang\x20chờ\x20vị\x20trí\x20trống...",
        unable:
          "Không thể thực hiện tính toán công thức vào lúc này. Vui lòng thử lại sau.",
      },
    },
  },
};
module.exports = e;
