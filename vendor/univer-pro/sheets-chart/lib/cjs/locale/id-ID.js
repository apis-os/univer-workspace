const e = {
  "sheets-chart": {
    seriesDefaultName: "Seri\x20{0}",
    blank: "(Kosong)",
    msg: {
      emptyTips: "Tambahkan seri untuk mulai memvisualisasikan data Anda",
      sankeyCircularTips: "Grafik Sankey tidak boleh mengandung data melingkar",
    },
    bubble: {
      emptyTips:
        "Grafik gelembung memerlukan setidaknya 2 kolom: Sumbu X, Sumbu Y",
    },
    relation: {
      emptyTips:
        "Sumber\x20data\x20untuk\x20grafik\x20relasi\x20adalah\x20matriks\x20co-word\x20dengan\x20kolom\x20tipe\x20tambahan\x20di\x20kolom\x20kedua",
    },
    cloud: { word: "Kata", frequency: "Frekuensi" },
    waterfall: {
      positive: "Positif",
      negative: "Negatif",
      subtotal: "Subtotal",
    },
    pareto: { lineName: "Persentase Kumulatif" },
    boxplot: {
      min: "Minimum",
      q1: "Kuartal\x20pertama",
      median: "Median",
      q3: "Kuartal ketiga",
      max: "Maksimum",
    },
    candlestick: {
      series: "Seri OHLC",
      category: "Kategori",
      open: "Pembukaan",
      high: "Tertinggi",
      low: "Terendah",
      close: "Penutupan",
    },
    histogram: { frequency: "Frekuensi" },
    pie: { aggregateOther: "Lainnya", aggregateMembers: "Anggota" },
    treemap: {
      hierarchy: "Bidang hierarki",
      value: "Bidang nilai",
      ownValue: "Nilai\x20sendiri",
      children: "Elemen turunan",
      diagnostic:
        "Grafik peta pohon memerlukan setidaknya satu bidang hierarki dan satu bidang nilai numerik.",
    },
    sunburst: {
      hierarchy: "Hirarki",
      value: "Nilai",
      ownValue: "Nilai sendiri",
      children: "Elemen turunan",
      diagnostic:
        "Grafik sunburst memerlukan setidaknya satu bidang hierarki dan satu bidang nilai numerik.",
    },
    gauge: {
      label: "Label",
      value: "Nilai",
      emptyDiagnostic:
        "Grafik pengukur memerlukan setidaknya satu nilai numerik berhingga.",
      mappingDiagnostic:
        "Grafik pengukur memerlukan satu bidang label dan tepat satu bidang nilai.",
      configDiagnostic:
        "Konfigurasi\x20grafik\x20pengukur\x20tidak\x20valid.\x20Periksa\x20skala,\x20rentang,\x20rasio,\x20dan\x20ukurannya.",
    },
    chord: {
      emptyDiagnostic:
        "Diagram\x20chord\x20memerlukan\x20setidaknya\x20satu\x20hubungan\x20berbobot\x20positif\x20antara\x20dua\x20simpul\x20yang\x20berbeda.",
      mappingDiagnostic:
        "Diagram\x20chord\x20memerlukan\x20bidang\x20Sumber\x20dan\x20Target\x20yang\x20berbeda\x20serta\x20bidang\x20Nilai\x20berbeda\x20yang\x20opsional.",
      configDiagnostic:
        "Konfigurasi diagram chord tidak valid. Periksa sudut, jari-jari, opasitas, dan ukurannya.",
      source: "Sumber",
      target: "Sasaran",
      value: "Nilai",
      count: "Jumlah\x20hubungan",
      associatedValue: "Nilai terkait",
    },
    chartField: {
      missingCategoryFields: "Bagan ini memerlukan lebih banyak bidang label.",
      missingSeriesFields:
        "Bagan ini memerlukan lebih banyak bidang nilai numerik.",
      invalidFieldIndex: "Bidang bagan yang dipilih sudah tidak tersedia.",
      invalidValueFieldType:
        "Bidang\x20nilai\x20yang\x20dipilih\x20tidak\x20berisi\x20data\x20numerik.",
      invalidDataStructure:
        "Bidang yang dipilih tidak membentuk struktur data yang valid untuk bagan ini.",
      unsupportedChartType:
        "Jenis bagan ini tidak memiliki kebijakan penggunaan bidang.",
    },
  },
};
module.exports = e;
