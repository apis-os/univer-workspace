const e = {
  "sheets-chart": {
    seriesDefaultName: "سری\x20{0}",
    blank: "(خالی)",
    msg: {
      emptyTips:
        "یک\x20سری\x20اضافه\x20کنید\x20تا\x20داده‌های\x20خود\x20را\x20تجسم\x20کنید",
      sankeyCircularTips: "نمودار سانکی نمی‌تواند داده‌های چرخشی داشته باشد",
    },
    bubble: {
      emptyTips:
        "نمودار\x20حبابی\x20حداقل\x20به\x202\x20ستون\x20نیاز\x20دارد:\x20محور\x20X،\x20محور\x20Y",
    },
    relation: {
      emptyTips:
        "منبع داده نمودار رابطه، ماتریس هم‌رخدادی واژه‌ها با یک ستون نوع اضافی در ستون دوم است.",
    },
    cloud: { word: "کلمه", frequency: "تکرار" },
    waterfall: { positive: "موجب", negative: "منفی", subtotal: "جمع فرعی" },
    pareto: { lineName: "درصد\x20تجمعی" },
    boxplot: {
      min: "کمینه",
      q1: "چارک\x20اول",
      median: "میانه",
      q3: "چارک سوم",
      max: "بیشینه",
    },
    candlestick: {
      series: "سری OHLC",
      category: "دسته بندی",
      open: "قیمت باز شدن",
      high: "بالاترین قیمت",
      low: "پایین‌ترین قیمت",
      close: "قیمت بسته شدن",
    },
    histogram: { frequency: "فراوانی" },
    pie: { aggregateOther: "سایر", aggregateMembers: "اعضا" },
    treemap: {
      hierarchy: "زمینه های سلسله مراتبی",
      value: "فیلد\x20ارزش",
      ownValue: "مقدار خود عنصر",
      children: "عناصر\x20فرزند",
      diagnostic:
        "نمودار نقشه درختی به حداقل یک فیلد سلسله‌مراتبی و یک فیلد مقدار عددی نیاز دارد.",
    },
    sunburst: {
      hierarchy: "سلسله مراتب",
      value: "مقدار",
      ownValue: "مقدار خود عنصر",
      children: "عناصر فرزند",
      diagnostic:
        "نمودار آفتاب‌نما به حداقل یک فیلد سلسله‌مراتبی و یک فیلد مقدار عددی نیاز دارد.",
    },
    gauge: {
      label: "برچسب\x20بزنید",
      value: "مقدار",
      emptyDiagnostic:
        "نمودار\x20سنجه\x20به\x20حداقل\x20یک\x20مقدار\x20عددی\x20متناهی\x20نیاز\x20دارد.",
      mappingDiagnostic:
        "نمودار\x20سنجه\x20به\x20یک\x20فیلد\x20برچسب\x20و\x20دقیقاً\x20یک\x20فیلد\x20مقدار\x20نیاز\x20دارد.",
      configDiagnostic:
        "پیکربندی\x20نمودار\x20سنجه\x20نامعتبر\x20است.\x20مقیاس،\x20بازه‌ها،\x20نسبت‌ها\x20و\x20اندازه‌ها\x20را\x20بررسی\x20کنید.",
    },
    chord: {
      emptyDiagnostic:
        "نمودار وتر به حداقل یک رابطه با وزن مثبت میان دو گره متفاوت نیاز دارد.",
      mappingDiagnostic:
        "نمودار وتر به فیلدهای مبدأ و مقصد متفاوت و در صورت نیاز یک فیلد مقدار متفاوت نیاز دارد.",
      configDiagnostic:
        "پیکربندی نمودار وتر نامعتبر است. زاویه‌ها، شعاع‌ها، شفافیت و اندازه‌ها را بررسی کنید.",
      source: "منبع",
      target: "هدف",
      value: "مقدار",
      count: "شمارش رابطه",
      associatedValue: "مقدار مرتبط",
    },
    chartField: {
      missingCategoryFields: "این نمودار به فیلدهای برچسب بیشتری نیاز دارد.",
      missingSeriesFields:
        "این\x20نمودار\x20به\x20فیلدهای\x20مقدار\x20عددی\x20بیشتری\x20نیاز\x20دارد.",
      invalidFieldIndex:
        "یکی\x20از\x20فیلدهای\x20انتخاب‌شده\x20نمودار\x20دیگر\x20در\x20دسترس\x20نیست.",
      invalidValueFieldType:
        "فیلد\x20مقدار\x20انتخاب‌شده\x20حاوی\x20داده\x20عددی\x20نیست.",
      invalidDataStructure:
        "فیلدهای انتخاب‌شده ساختار داده معتبری برای این نمودار تشکیل نمی‌دهند.",
      unsupportedChartType:
        "این نوع نمودار سیاستی برای استفاده از فیلدها ندارد.",
    },
  },
};
export { e as default };
