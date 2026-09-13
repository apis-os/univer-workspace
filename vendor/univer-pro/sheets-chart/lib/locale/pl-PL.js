const e = {
  "sheets-chart": {
    seriesDefaultName: "Seria {0}",
    blank: "(Puste)",
    msg: {
      emptyTips: "Dodaj serię, aby rozpocząć wizualizację danych",
      sankeyCircularTips: "Wykres Sankeya nie może zawierać danych cyklicznych",
    },
    bubble: {
      emptyTips:
        "Wykres\x20bąbelkowy\x20wymaga\x20co\x20najmniej\x202\x20kolumn:\x20oś\x20X,\x20oś\x20Y",
    },
    relation: {
      emptyTips:
        "Źródło danych dla wykresu relacji to macierz współwystępowania z dodatkową kolumną typu w drugiej kolumnie",
    },
    cloud: { word: "Słowo", frequency: "Częstotliwość" },
    waterfall: {
      positive: "Dodatnie",
      negative: "Ujemne",
      subtotal: "Suma częściowa",
    },
    pareto: { lineName: "Skumulowany procent" },
    boxplot: {
      min: "Minimum",
      q1: "Pierwszy\x20kwartyl",
      median: "Mediana",
      q3: "Trzeci kwartyl",
      max: "Maksimum",
    },
    candlestick: {
      series: "Seria\x20OHLC",
      category: "Kategoria",
      open: "Otwarcie",
      high: "Maksimum",
      low: "Minimum",
      close: "Zamknięcie",
    },
    histogram: { frequency: "Częstotliwość" },
    pie: { aggregateOther: "Inne", aggregateMembers: "Elementy" },
    treemap: {
      hierarchy: "Pola\x20hierarchii",
      value: "Pole wartości",
      ownValue: "Wartość\x20własna",
      children: "Elementy podrzędne",
      diagnostic:
        "Mapa drzewa wymaga co najmniej jednego pola hierarchii i jednego liczbowego pola wartości.",
    },
    sunburst: {
      hierarchy: "Hierarchia",
      value: "Wartość",
      ownValue: "Wartość\x20własna",
      children: "Elementy podrzędne",
      diagnostic:
        "Wykres pierścieniowy wymaga co najmniej jednego pola hierarchii i jednego liczbowego pola wartości.",
    },
    gauge: {
      label: "Etykieta",
      value: "Wartość",
      emptyDiagnostic:
        "Wykres wskaźnikowy wymaga co najmniej jednej skończonej wartości liczbowej.",
      mappingDiagnostic:
        "Wykres wskaźnikowy wymaga jednego pola etykiety i dokładnie jednego pola wartości.",
      configDiagnostic:
        "Konfiguracja\x20wykresu\x20wskaźnikowego\x20jest\x20nieprawidłowa.\x20Sprawdź\x20skalę,\x20zakresy,\x20proporcje\x20i\x20rozmiary.",
    },
    chord: {
      emptyDiagnostic:
        "Diagram\x20cięciwowy\x20wymaga\x20co\x20najmniej\x20jednej\x20relacji\x20o\x20dodatniej\x20wadze\x20między\x20dwoma\x20różnymi\x20węzłami.",
      mappingDiagnostic:
        "Diagram cięciwowy wymaga różnych pól Źródło i Cel oraz opcjonalnego, odrębnego pola Wartość.",
      configDiagnostic:
        "Konfiguracja\x20diagramu\x20cięciwowego\x20jest\x20nieprawidłowa.\x20Sprawdź\x20kąty,\x20promienie,\x20krycie\x20i\x20rozmiary.",
      source: "Źródło",
      target: "Cel",
      value: "Wartość",
      count: "Liczba relacji",
      associatedValue: "Wartość powiązana",
    },
    chartField: {
      missingCategoryFields: "Ten wykres wymaga większej liczby pól etykiet.",
      missingSeriesFields:
        "Ten wykres wymaga większej liczby pól wartości liczbowych.",
      invalidFieldIndex: "Wybrane pole wykresu nie jest już dostępne.",
      invalidValueFieldType:
        "Wybrane\x20pole\x20wartości\x20nie\x20zawiera\x20danych\x20liczbowych.",
      invalidDataStructure:
        "Wybrane pola nie tworzą prawidłowej struktury danych dla tego wykresu.",
      unsupportedChartType: "Ten typ wykresu nie ma zasad wykorzystania pól.",
    },
  },
};
export { e as default };
