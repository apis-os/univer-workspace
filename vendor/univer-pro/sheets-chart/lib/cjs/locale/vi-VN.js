const e = {
  "sheets-chart": {
    seriesDefaultName: "Loạt {0}",
    blank: "(Trống)",
    msg: {
      emptyTips: "Không\x20có\x20dữ\x20liệu\x20để\x20hiển\x20thị.",
      sankeyCircularTips: "Biểu đồ Sankey không thể chứa dữ liệu vòng lặp",
    },
    bubble: {
      emptyTips:
        "Biểu\x20đồ\x20bong\x20bóng\x20yêu\x20cầu\x20ít\x20nhất\x202\x20cột:\x20trục\x20X,\x20trục\x20Y",
    },
    relation: {
      emptyTips:
        "Nguồn dữ liệu cho biểu đồ quan hệ là ma trận đồng từ với cột loại bổ sung ở cột thứ hai",
    },
    cloud: { word: "Từ", frequency: "Tần suất" },
    waterfall: {
      positive: "Giá\x20trị\x20dương",
      negative: "Giá\x20trị\x20âm",
      subtotal: "Tổng phụ",
    },
    pareto: { lineName: "Tỷ lệ tích lũy" },
    boxplot: {
      min: "Giá trị nhỏ nhất",
      q1: "Phần tư thứ nhất",
      median: "Trung vị",
      q3: "Phần\x20tư\x20thứ\x20ba",
      max: "Giá trị lớn nhất",
    },
    candlestick: {
      series: "Chuỗi OHLC",
      category: "Danh mục",
      open: "Giá mở cửa",
      high: "Giá cao nhất",
      low: "Giá thấp nhất",
      close: "Giá đóng cửa",
    },
    histogram: { frequency: "Tần suất" },
    pie: { aggregateOther: "Khác", aggregateMembers: "Thành phần" },
    treemap: {
      hierarchy: "Trường\x20phân\x20cấp",
      value: "Trường giá trị",
      ownValue: "Giá trị riêng",
      children: "Phần tử con",
      diagnostic:
        "Biểu đồ cây cần ít nhất một trường phân cấp và một trường giá trị số.",
    },
    sunburst: {
      hierarchy: "Hệ thống phân cấp",
      value: "Giá trị",
      ownValue: "Giá trị riêng",
      children: "Phần\x20tử\x20con",
      diagnostic:
        "Biểu đồ sunburst cần ít nhất một trường phân cấp và một trường giá trị số.",
    },
    gauge: {
      label: "Nhãn",
      value: "Giá\x20trị",
      emptyDiagnostic: "Biểu đồ đồng hồ cần ít nhất một giá trị số hữu hạn.",
      mappingDiagnostic:
        "Biểu\x20đồ\x20đồng\x20hồ\x20cần\x20một\x20trường\x20nhãn\x20và\x20đúng\x20một\x20trường\x20giá\x20trị.",
      configDiagnostic:
        "Cấu hình biểu đồ đồng hồ không hợp lệ. Hãy kiểm tra thang đo, phạm vi, tỷ lệ và kích thước.",
    },
    chord: {
      emptyDiagnostic:
        "Biểu đồ dây cung cần ít nhất một quan hệ có trọng số dương giữa hai nút khác nhau.",
      mappingDiagnostic:
        "Biểu đồ dây cung cần các trường Nguồn và Đích khác nhau cùng một trường Giá trị khác biệt không bắt buộc.",
      configDiagnostic:
        "Cấu\x20hình\x20biểu\x20đồ\x20dây\x20cung\x20không\x20hợp\x20lệ.\x20Hãy\x20kiểm\x20tra\x20góc,\x20bán\x20kính,\x20độ\x20mờ\x20và\x20kích\x20thước.",
      source: "Nguồn",
      target: "Mục tiêu",
      value: "Giá trị",
      count: "Số lượng mối quan hệ",
      associatedValue: "Giá trị liên kết",
    },
    chartField: {
      missingCategoryFields: "Biểu đồ này cần thêm trường nhãn.",
      missingSeriesFields:
        "Biểu\x20đồ\x20này\x20cần\x20thêm\x20trường\x20giá\x20trị\x20số.",
      invalidFieldIndex: "Một trường biểu đồ đã chọn không còn khả dụng.",
      invalidValueFieldType: "Trường giá trị đã chọn không chứa dữ liệu số.",
      invalidDataStructure:
        "Các trường đã chọn không tạo thành cấu trúc dữ liệu hợp lệ cho biểu đồ này.",
      unsupportedChartType:
        "Loại biểu đồ này không có chính sách sử dụng trường.",
    },
  },
};
module.exports = e;
