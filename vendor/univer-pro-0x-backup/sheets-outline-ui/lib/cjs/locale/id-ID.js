const e = {
  "sheets-outline-ui": {
    cancel: "Batal",
    group: "Kelompokkan",
    ungroup: "Batal\x20Kelompokkan",
    groupRows: "Kelompokkan baris {0} - {1}",
    groupColumns: "Kelompokkan kolom {0} - {1}",
    ungroupRows: "Batal kelompokkan baris {0} - {1}",
    ungroupColumns: "Batal\x20kelompokkan\x20kolom\x20{0}\x20-\x20{1}",
    error: {
      permission:
        "Anda tidak memiliki izin tampilan, sehingga operasi pengelompokan tidak dapat dilakukan.",
      invalidRange:
        "Tidak dapat membuat kerangka karena rentang yang dipilih tidak valid.",
      outOfBounds:
        "Tidak dapat membuat kerangka karena rentang yang dipilih berada di luar lembar.",
      crossing:
        "Tidak\x20dapat\x20memperbarui\x20kerangka\x20karena\x20hasilnya\x20akan\x20membuat\x20grup\x20yang\x20tumpang\x20tindih.",
      maxDepth:
        "Tidak dapat membuat kerangka karena kerangka yang kompatibel dengan Excel mendukung hingga 8 tingkat.",
      moveSplitsOutline:
        "Tidak\x20dapat\x20memindahkan\x20baris\x20atau\x20kolom\x20karena\x20akan\x20memisahkan\x20kerangka\x20yang\x20ada.\x20Hapus\x20kerangka\x20terkait\x20terlebih\x20dahulu.",
      clearRangeNotContainOutline:
        "Tidak dapat membatalkan pengelompokan karena rentang yang dipilih tidak sepenuhnya berisi rentang grup kerangka.",
      unknown: "Tidak dapat memperbarui kerangka karena operasi tidak valid.",
    },
  },
};
module.exports = e;
