const e = {
  "sheets-outline-ui": {
    cancel: "Zrušiť",
    group: "Zoskupiť",
    ungroup: "Zrušiť zoskupenie",
    groupRows: "Zoskupiť riadky {0} - {1}",
    groupColumns: "Zoskupiť stĺpce {0} - {1}",
    ungroupRows: "Zrušiť\x20zoskupenie\x20riadkov\x20{0}\x20-\x20{1}",
    ungroupColumns: "Zrušiť zoskupenie stĺpcov {0} - {1}",
    error: {
      permission:
        "Nemáte povolenie na zobrazenie, preto nie je možné vykonávať operácie zoskupenia.",
      invalidRange:
        "Nie je možné vytvoriť osnovu, pretože vybraný rozsah je neplatný.",
      outOfBounds:
        "Nie\x20je\x20možné\x20vytvoriť\x20osnovu,\x20pretože\x20vybraný\x20rozsah\x20je\x20mimo\x20hárka.",
      crossing:
        "Nie je možné aktualizovať osnovu, pretože výsledok by vytvoril prekrývajúce sa skupiny.",
      maxDepth:
        "Nie je možné vytvoriť osnovu, pretože osnovy kompatibilné s Excelom podporujú najviac 8 úrovní.",
      moveSplitsOutline:
        "Nie\x20je\x20možné\x20presunúť\x20riadky\x20alebo\x20stĺpce,\x20pretože\x20by\x20sa\x20tým\x20rozdelila\x20existujúca\x20osnova.\x20Najprv\x20odstráňte\x20súvisiacu\x20osnovu.",
      clearRangeNotContainOutline:
        "Nie je možné zrušiť zoskupenie, pretože vybraný rozsah úplne neobsahuje rozsah skupiny osnovy.",
      unknown:
        "Nie\x20je\x20možné\x20aktualizovať\x20osnovu,\x20pretože\x20operácia\x20je\x20neplatná.",
    },
  },
};
module.exports = e;
