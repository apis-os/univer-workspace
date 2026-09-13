const e = {
  "sheets-chart": {
    seriesDefaultName: "Seria {0}",
    blank: "(Puste)",
    msg: {
      emptyTips: "Dodaj serię, aby rozpocząć wizualizację danych",
      sankeyCircularTips: "Wykres Sankeya nie może zawierać danych cyklicznych",
    },
    bubble: {
      emptyTips: "Wykres bąbelkowy wymaga co najmniej 2 kolumn: oś X, oś Y",
    },
    relation: {
      emptyTips:
        "Źródło\x20danych\x20dla\x20wykresu\x20relacji\x20to\x20macierz\x20współwystępowania\x20z\x20dodatkową\x20kolumną\x20typu\x20w\x20drugiej\x20kolumnie",
    },
    cloud: { word: "Słowo", frequency: "Częstotliwość" },
    waterfall: {
      positive: "Dodatnie",
      negative: "Ujemne",
      subtotal: "Suma\x20częściowa",
    },
    pareto: { lineName: "Skumulowany procent" },
    boxplot: {
      min: "Minimum",
      q1: "Pierwszy kwartyl",
      median: "Mediana",
      q3: "Trzeci kwartyl",
      max: "Maksimum",
    },
    candlestick: {
      series: "Seria OHLC",
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
      ownValue: "Wartość własna",
      children: "Elementy\x20podrzędne",
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
        "Wykres\x20wskaźnikowy\x20wymaga\x20jednego\x20pola\x20etykiety\x20i\x20dokładnie\x20jednego\x20pola\x20wartości.",
      configDiagnostic:
        "Konfiguracja wykresu wskaźnikowego jest nieprawidłowa. Sprawdź skalę, zakresy, proporcje i rozmiary.",
    },
    chord: {
      emptyDiagnostic:
        "Diagram cięciwowy wymaga co najmniej jednej relacji o dodatniej wadze między dwoma różnymi węzłami.",
      mappingDiagnostic:
        "Diagram cięciwowy wymaga różnych pól Źródło i Cel oraz opcjonalnego, odrębnego pola Wartość.",
      configDiagnostic:
        "Konfiguracja diagramu cięciwowego jest nieprawidłowa. Sprawdź kąty, promienie, krycie i rozmiary.",
      source: "Źródło",
      target: "Cel",
      value: "Wartość",
      count: "Liczba\x20relacji",
      associatedValue: "Wartość\x20powiązana",
    },
    chartField: {
      missingCategoryFields: "Ten wykres wymaga większej liczby pól etykiet.",
      missingSeriesFields:
        "Ten wykres wymaga większej liczby pól wartości liczbowych.",
      invalidFieldIndex:
        "Wybrane\x20pole\x20wykresu\x20nie\x20jest\x20już\x20dostępne.",
      invalidValueFieldType:
        "Wybrane pole wartości nie zawiera danych liczbowych.",
      invalidDataStructure:
        "Wybrane pola nie tworzą prawidłowej struktury danych dla tego wykresu.",
      unsupportedChartType: "Ten typ wykresu nie ma zasad wykorzystania pól.",
    },
  },
};
module.exports = e;
