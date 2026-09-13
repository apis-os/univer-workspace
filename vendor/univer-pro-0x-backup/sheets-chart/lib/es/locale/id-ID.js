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
        "Sumber data untuk grafik relasi adalah matriks co-word dengan kolom tipe tambahan di kolom kedua",
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
      q1: "Kuartal pertama",
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
      hierarchy: "Bidang\x20hierarki",
      value: "Bidang\x20nilai",
      ownValue: "Nilai sendiri",
      children: "Elemen turunan",
      diagnostic:
        "Grafik peta pohon memerlukan setidaknya satu bidang hierarki dan satu bidang nilai numerik.",
    },
    sunburst: {
      hierarchy: "Hirarki",
      value: "Nilai",
      ownValue: "Nilai sendiri",
      children: "Elemen\x20turunan",
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
        "Konfigurasi grafik pengukur tidak valid. Periksa skala, rentang, rasio, dan ukurannya.",
    },
    chord: {
      emptyDiagnostic:
        "Diagram chord memerlukan setidaknya satu hubungan berbobot positif antara dua simpul yang berbeda.",
      mappingDiagnostic:
        "Diagram chord memerlukan bidang Sumber dan Target yang berbeda serta bidang Nilai berbeda yang opsional.",
      configDiagnostic:
        "Konfigurasi diagram chord tidak valid. Periksa sudut, jari-jari, opasitas, dan ukurannya.",
      source: "Sumber",
      target: "Sasaran",
      value: "Nilai",
      count: "Jumlah hubungan",
      associatedValue: "Nilai terkait",
    },
    chartField: {
      missingCategoryFields: "Bagan ini memerlukan lebih banyak bidang label.",
      missingSeriesFields:
        "Bagan ini memerlukan lebih banyak bidang nilai numerik.",
      invalidFieldIndex: "Bidang bagan yang dipilih sudah tidak tersedia.",
      invalidValueFieldType:
        "Bidang nilai yang dipilih tidak berisi data numerik.",
      invalidDataStructure:
        "Bidang\x20yang\x20dipilih\x20tidak\x20membentuk\x20struktur\x20data\x20yang\x20valid\x20untuk\x20bagan\x20ini.",
      unsupportedChartType:
        "Jenis bagan ini tidak memiliki kebijakan penggunaan bidang.",
    },
  },
};
export { e as default };
