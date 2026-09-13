const e = {
  "sheets-chart": {
    seriesDefaultName: "Loạt {0}",
    blank: "(Trống)",
    msg: {
      emptyTips: "Không có dữ liệu để hiển thị.",
      sankeyCircularTips: "Biểu đồ Sankey không thể chứa dữ liệu vòng lặp",
    },
    bubble: {
      emptyTips: "Biểu đồ bong bóng yêu cầu ít nhất 2 cột: trục X, trục Y",
    },
    relation: {
      emptyTips:
        "Nguồn dữ liệu cho biểu đồ quan hệ là ma trận đồng từ với cột loại bổ sung ở cột thứ hai",
    },
    cloud: { word: "Từ", frequency: "Tần suất" },
    waterfall: {
      positive: "Giá trị dương",
      negative: "Giá trị âm",
      subtotal: "Tổng phụ",
    },
    pareto: { lineName: "Tỷ lệ tích lũy" },
    boxplot: {
      min: "Giá trị nhỏ nhất",
      q1: "Phần\x20tư\x20thứ\x20nhất",
      median: "Trung vị",
      q3: "Phần\x20tư\x20thứ\x20ba",
      max: "Giá trị lớn nhất",
    },
    candlestick: {
      series: "Chuỗi OHLC",
      category: "Danh mục",
      open: "Giá mở cửa",
      high: "Giá\x20cao\x20nhất",
      low: "Giá thấp nhất",
      close: "Giá đóng cửa",
    },
    histogram: { frequency: "Tần\x20suất" },
    pie: { aggregateOther: "Khác", aggregateMembers: "Thành\x20phần" },
    treemap: {
      hierarchy: "Trường\x20phân\x20cấp",
      value: "Trường\x20giá\x20trị",
      ownValue: "Giá\x20trị\x20riêng",
      children: "Phần\x20tử\x20con",
      diagnostic:
        "Biểu đồ cây cần ít nhất một trường phân cấp và một trường giá trị số.",
    },
    sunburst: {
      hierarchy: "Hệ thống phân cấp",
      value: "Giá\x20trị",
      ownValue: "Giá\x20trị\x20riêng",
      children: "Phần\x20tử\x20con",
      diagnostic:
        "Biểu đồ sunburst cần ít nhất một trường phân cấp và một trường giá trị số.",
    },
    gauge: {
      label: "Nhãn",
      value: "Giá trị",
      emptyDiagnostic: "Biểu đồ đồng hồ cần ít nhất một giá trị số hữu hạn.",
      mappingDiagnostic:
        "Biểu đồ đồng hồ cần một trường nhãn và đúng một trường giá trị.",
      configDiagnostic:
        "Cấu hình biểu đồ đồng hồ không hợp lệ. Hãy kiểm tra thang đo, phạm vi, tỷ lệ và kích thước.",
    },
    chord: {
      emptyDiagnostic:
        "Biểu\x20đồ\x20dây\x20cung\x20cần\x20ít\x20nhất\x20một\x20quan\x20hệ\x20có\x20trọng\x20số\x20dương\x20giữa\x20hai\x20nút\x20khác\x20nhau.",
      mappingDiagnostic:
        "Biểu\x20đồ\x20dây\x20cung\x20cần\x20các\x20trường\x20Nguồn\x20và\x20Đích\x20khác\x20nhau\x20cùng\x20một\x20trường\x20Giá\x20trị\x20khác\x20biệt\x20không\x20bắt\x20buộc.",
      configDiagnostic:
        "Cấu hình biểu đồ dây cung không hợp lệ. Hãy kiểm tra góc, bán kính, độ mờ và kích thước.",
      source: "Nguồn",
      target: "Mục tiêu",
      value: "Giá\x20trị",
      count: "Số lượng mối quan hệ",
      associatedValue: "Giá trị liên kết",
    },
    chartField: {
      missingCategoryFields:
        "Biểu\x20đồ\x20này\x20cần\x20thêm\x20trường\x20nhãn.",
      missingSeriesFields: "Biểu đồ này cần thêm trường giá trị số.",
      invalidFieldIndex: "Một trường biểu đồ đã chọn không còn khả dụng.",
      invalidValueFieldType: "Trường giá trị đã chọn không chứa dữ liệu số.",
      invalidDataStructure:
        "Các\x20trường\x20đã\x20chọn\x20không\x20tạo\x20thành\x20cấu\x20trúc\x20dữ\x20liệu\x20hợp\x20lệ\x20cho\x20biểu\x20đồ\x20này.",
      unsupportedChartType:
        "Loại biểu đồ này không có chính sách sử dụng trường.",
    },
  },
};
export { e as default };
