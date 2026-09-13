const e = {
  "sheets-outline-ui": {
    cancel: "Abbrechen",
    group: "Gruppieren",
    ungroup: "Gruppierung\x20aufheben",
    groupRows: "Zeilen {0} - {1} gruppieren",
    groupColumns: "Spalten\x20{0}\x20-\x20{1}\x20gruppieren",
    ungroupRows: "Gruppierung\x20der\x20Zeilen\x20{0}\x20-\x20{1}\x20aufheben",
    ungroupColumns: "Gruppierung der Spalten {0} - {1} aufheben",
    error: {
      permission:
        "Sie haben keine Ansichtsberechtigung, daher können keine Gruppierungsvorgänge ausgeführt werden.",
      invalidRange:
        "Gliederung kann nicht erstellt werden, da der ausgewählte Bereich ungültig ist.",
      outOfBounds:
        "Gliederung kann nicht erstellt werden, da der ausgewählte Bereich außerhalb des Blatts liegt.",
      crossing:
        "Gliederung\x20kann\x20nicht\x20aktualisiert\x20werden,\x20da\x20das\x20Ergebnis\x20überlappende\x20Gruppen\x20erzeugen\x20würde.",
      maxDepth:
        "Gliederung kann nicht erstellt werden, da Excel-kompatible Gliederungen maximal 8 Ebenen unterstützen.",
      moveSplitsOutline:
        "Zeilen oder Spalten können nicht verschoben werden, da dies eine bestehende Gliederung teilen würde. Entfernen Sie zunächst die zugehörige Gliederung.",
      clearRangeNotContainOutline:
        "Gruppierung\x20kann\x20nicht\x20aufgehoben\x20werden,\x20da\x20der\x20ausgewählte\x20Bereich\x20den\x20Gliederungsgruppenbereich\x20nicht\x20vollständig\x20enthält.",
      unknown:
        "Gliederung kann nicht aktualisiert werden, da der Vorgang ungültig ist.",
    },
  },
};
module.exports = e;
