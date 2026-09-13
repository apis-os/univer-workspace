const e = {
  "sheets-chart": {
    seriesDefaultName: "سلسلة {0}",
    blank: "(فارغ)",
    msg: {
      emptyTips: "أضف سلسلة لبدء تصور بياناتك",
      sankeyCircularTips: "لا يمكن أن يحتوي مخطط سانكي على بيانات دائرية",
    },
    bubble: {
      emptyTips: "يتطلب مخطط الفقاعات عمودين على الأقل: محور س، محور ص",
    },
    relation: {
      emptyTips:
        "مصدر بيانات مخطط العلاقات هو مصفوفة الكلمات المشتركة مع عمود النوع الإضافي في العمود الثاني",
    },
    cloud: { word: "كلمة", frequency: "التكرار" },
    waterfall: {
      positive: "إيجابي",
      negative: "سلبي",
      subtotal: "المجموع\x20الفرعي",
    },
    pareto: { lineName: "النسبة\x20المئوية\x20التراكمية" },
    boxplot: {
      min: "الحد الأدنى",
      q1: "الربع الأول",
      median: "الوسيط",
      q3: "الربع\x20الثالث",
      max: "الحد الأقصى",
    },
    candlestick: {
      series: "سلسلة OHLC",
      category: "الفئة",
      open: "سعر\x20الافتتاح",
      high: "أعلى سعر",
      low: "أدنى سعر",
      close: "سعر الإغلاق",
    },
    histogram: { frequency: "التكرار" },
    pie: { aggregateOther: "أخرى", aggregateMembers: "العناصر" },
    treemap: {
      hierarchy: "حقول\x20التسلسل\x20الهرمي",
      value: "حقل القيمة",
      ownValue: "القيمة الخاصة",
      children: "العناصر الفرعية",
      diagnostic:
        "يتطلب مخطط الخريطة الشجرية حقلاً هرمياً واحداً على الأقل وحقل قيمة رقمية واحداً.",
    },
    sunburst: {
      hierarchy: "التسلسل\x20الهرمي",
      value: "القيمة",
      ownValue: "القيمة الخاصة",
      children: "العناصر الفرعية",
      diagnostic:
        "يتطلب المخطط الشمسي حقلاً هرمياً واحداً على الأقل وحقل قيمة رقمية واحداً.",
    },
    gauge: {
      label: "التسمية",
      value: "القيمة",
      emptyDiagnostic: "يتطلب مخطط المقياس قيمة رقمية محدودة واحدة على الأقل.",
      mappingDiagnostic:
        "يتطلب مخطط المقياس حقل تسمية واحداً وحقل قيمة واحداً فقط.",
      configDiagnostic:
        "إعداد مخطط المقياس غير صالح. تحقق من المقياس والنطاقات والنسب والأحجام.",
    },
    chord: {
      emptyDiagnostic:
        "يتطلب مخطط الأوتار علاقة واحدة على الأقل ذات وزن موجب بين عقدتين مختلفتين.",
      mappingDiagnostic:
        "يتطلب\x20مخطط\x20الأوتار\x20حقلي\x20مصدر\x20وهدف\x20مختلفين،\x20ويمكن\x20إضافة\x20حقل\x20قيمة\x20مختلف\x20اختيارياً.",
      configDiagnostic:
        "إعداد مخطط الأوتار غير صالح. تحقق من الزوايا وأنصاف الأقطار والشفافية والأحجام.",
      source: "المصدر",
      target: "الهدف",
      value: "القيمة",
      count: "عدد العلاقات",
      associatedValue: "القيمة\x20المرتبطة",
    },
    chartField: {
      missingCategoryFields: "يتطلب هذا المخطط المزيد من حقول التسميات.",
      missingSeriesFields: "يتطلب هذا المخطط المزيد من حقول القيم الرقمية.",
      invalidFieldIndex: "لم يعد حقل المخطط المحدد متاحًا.",
      invalidValueFieldType: "لا يحتوي حقل القيمة المحدد على بيانات رقمية.",
      invalidDataStructure:
        "لا\x20تشكل\x20الحقول\x20المحددة\x20بنية\x20بيانات\x20صالحة\x20لهذا\x20المخطط.",
      unsupportedChartType:
        "لا يتوفر لهذا النوع من المخططات نهج لاستهلاك الحقول.",
    },
  },
};
module.exports = e;
