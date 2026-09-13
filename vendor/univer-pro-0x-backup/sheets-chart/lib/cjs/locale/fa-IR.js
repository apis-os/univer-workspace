const e = {
  "sheets-chart": {
    seriesDefaultName: "سری\x20{0}",
    blank: "(خالی)",
    msg: {
      emptyTips: "یک سری اضافه کنید تا داده‌های خود را تجسم کنید",
      sankeyCircularTips: "نمودار سانکی نمی‌تواند داده‌های چرخشی داشته باشد",
    },
    bubble: {
      emptyTips: "نمودار حبابی حداقل به 2 ستون نیاز دارد: محور X، محور Y",
    },
    relation: {
      emptyTips:
        "منبع داده نمودار رابطه، ماتریس هم‌رخدادی واژه‌ها با یک ستون نوع اضافی در ستون دوم است.",
    },
    cloud: { word: "کلمه", frequency: "تکرار" },
    waterfall: { positive: "موجب", negative: "منفی", subtotal: "جمع\x20فرعی" },
    pareto: { lineName: "درصد\x20تجمعی" },
    boxplot: {
      min: "کمینه",
      q1: "چارک اول",
      median: "میانه",
      q3: "چارک سوم",
      max: "بیشینه",
    },
    candlestick: {
      series: "سری\x20OHLC",
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
      value: "فیلد ارزش",
      ownValue: "مقدار خود عنصر",
      children: "عناصر\x20فرزند",
      diagnostic:
        "نمودار نقشه درختی به حداقل یک فیلد سلسله‌مراتبی و یک فیلد مقدار عددی نیاز دارد.",
    },
    sunburst: {
      hierarchy: "سلسله مراتب",
      value: "مقدار",
      ownValue: "مقدار\x20خود\x20عنصر",
      children: "عناصر\x20فرزند",
      diagnostic:
        "نمودار آفتاب‌نما به حداقل یک فیلد سلسله‌مراتبی و یک فیلد مقدار عددی نیاز دارد.",
    },
    gauge: {
      label: "برچسب بزنید",
      value: "مقدار",
      emptyDiagnostic: "نمودار سنجه به حداقل یک مقدار عددی متناهی نیاز دارد.",
      mappingDiagnostic:
        "نمودار سنجه به یک فیلد برچسب و دقیقاً یک فیلد مقدار نیاز دارد.",
      configDiagnostic:
        "پیکربندی نمودار سنجه نامعتبر است. مقیاس، بازه‌ها، نسبت‌ها و اندازه‌ها را بررسی کنید.",
    },
    chord: {
      emptyDiagnostic:
        "نمودار وتر به حداقل یک رابطه با وزن مثبت میان دو گره متفاوت نیاز دارد.",
      mappingDiagnostic:
        "نمودار\x20وتر\x20به\x20فیلدهای\x20مبدأ\x20و\x20مقصد\x20متفاوت\x20و\x20در\x20صورت\x20نیاز\x20یک\x20فیلد\x20مقدار\x20متفاوت\x20نیاز\x20دارد.",
      configDiagnostic:
        "پیکربندی\x20نمودار\x20وتر\x20نامعتبر\x20است.\x20زاویه‌ها،\x20شعاع‌ها،\x20شفافیت\x20و\x20اندازه‌ها\x20را\x20بررسی\x20کنید.",
      source: "منبع",
      target: "هدف",
      value: "مقدار",
      count: "شمارش رابطه",
      associatedValue: "مقدار مرتبط",
    },
    chartField: {
      missingCategoryFields: "این نمودار به فیلدهای برچسب بیشتری نیاز دارد.",
      missingSeriesFields: "این نمودار به فیلدهای مقدار عددی بیشتری نیاز دارد.",
      invalidFieldIndex:
        "یکی\x20از\x20فیلدهای\x20انتخاب‌شده\x20نمودار\x20دیگر\x20در\x20دسترس\x20نیست.",
      invalidValueFieldType: "فیلد مقدار انتخاب‌شده حاوی داده عددی نیست.",
      invalidDataStructure:
        "فیلدهای انتخاب‌شده ساختار داده معتبری برای این نمودار تشکیل نمی‌دهند.",
      unsupportedChartType:
        "این نوع نمودار سیاستی برای استفاده از فیلدها ندارد.",
    },
  },
};
module.exports = e;
