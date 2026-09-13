const e = {
  "sheets-chart": {
    seriesDefaultName: "سلسلة\x20{0}",
    blank: "(فارغ)",
    msg: {
      emptyTips: "أضف سلسلة لبدء تصور بياناتك",
      sankeyCircularTips:
        "لا\x20يمكن\x20أن\x20يحتوي\x20مخطط\x20سانكي\x20على\x20بيانات\x20دائرية",
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
      subtotal: "المجموع الفرعي",
    },
    pareto: { lineName: "النسبة\x20المئوية\x20التراكمية" },
    boxplot: {
      min: "الحد الأدنى",
      q1: "الربع الأول",
      median: "الوسيط",
      q3: "الربع الثالث",
      max: "الحد الأقصى",
    },
    candlestick: {
      series: "سلسلة OHLC",
      category: "الفئة",
      open: "سعر\x20الافتتاح",
      high: "أعلى سعر",
      low: "أدنى سعر",
      close: "سعر\x20الإغلاق",
    },
    histogram: { frequency: "التكرار" },
    pie: { aggregateOther: "أخرى", aggregateMembers: "العناصر" },
    treemap: {
      hierarchy: "حقول التسلسل الهرمي",
      value: "حقل القيمة",
      ownValue: "القيمة الخاصة",
      children: "العناصر\x20الفرعية",
      diagnostic:
        "يتطلب\x20مخطط\x20الخريطة\x20الشجرية\x20حقلاً\x20هرمياً\x20واحداً\x20على\x20الأقل\x20وحقل\x20قيمة\x20رقمية\x20واحداً.",
    },
    sunburst: {
      hierarchy: "التسلسل الهرمي",
      value: "القيمة",
      ownValue: "القيمة الخاصة",
      children: "العناصر\x20الفرعية",
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
        "يتطلب مخطط الأوتار حقلي مصدر وهدف مختلفين، ويمكن إضافة حقل قيمة مختلف اختيارياً.",
      configDiagnostic:
        "إعداد مخطط الأوتار غير صالح. تحقق من الزوايا وأنصاف الأقطار والشفافية والأحجام.",
      source: "المصدر",
      target: "الهدف",
      value: "القيمة",
      count: "عدد العلاقات",
      associatedValue: "القيمة المرتبطة",
    },
    chartField: {
      missingCategoryFields: "يتطلب هذا المخطط المزيد من حقول التسميات.",
      missingSeriesFields:
        "يتطلب\x20هذا\x20المخطط\x20المزيد\x20من\x20حقول\x20القيم\x20الرقمية.",
      invalidFieldIndex: "لم\x20يعد\x20حقل\x20المخطط\x20المحدد\x20متاحًا.",
      invalidValueFieldType:
        "لا\x20يحتوي\x20حقل\x20القيمة\x20المحدد\x20على\x20بيانات\x20رقمية.",
      invalidDataStructure:
        "لا تشكل الحقول المحددة بنية بيانات صالحة لهذا المخطط.",
      unsupportedChartType:
        "لا\x20يتوفر\x20لهذا\x20النوع\x20من\x20المخططات\x20نهج\x20لاستهلاك\x20الحقول.",
    },
  },
};
export { e as default };
