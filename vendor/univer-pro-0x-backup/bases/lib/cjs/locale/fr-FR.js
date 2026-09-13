const e = {
  bases: {
    fieldType: {
      text: "Texte",
      singleSelect: "Option unique",
      multiSelect: "Options\x20multiples",
      person: "Personne",
      group: "Groupe",
      date: "Date",
      attachment: "Pièce jointe",
      number: "Nombre",
      checkbox: "Case à cocher",
      link: "Lien",
      formula: "Formule",
      lookup: "Recherche",
      flow: "Flux",
      button: "Bouton",
      numbering: "Numérotation",
      phone: "Numéro de téléphone",
      email: "E-mail",
      location: "Emplacement",
      barcode: "Code-barres",
      progress: "Progression",
      currency: "Devise",
      rating: "Évaluation",
      recordLink: "Lien vers un enregistrement",
      recordId: "ID d'enregistrement",
      createdBy: "Créé par",
      updatedBy: "Mis\x20à\x20jour\x20par",
      createdAt: "Date\x20de\x20création",
      updatedAt: "Date\x20de\x20mise\x20à\x20jour",
      summary: "Résumé",
    },
    fieldConfig: {
      textPlaceholder: "Saisir le contenu",
      linkPlaceholder:
        "Saisissez\x20une\x20URL\x20(par\x20ex.\x20univer.ai\x20ou\x20https://univer.ai/skills).",
    },
    viewType: {
      grid: "Grille",
      kanban: "Kanban",
      calendar: "Calendrier",
      gantt: "Gantt",
      gallery: "Galerie",
    },
    error: {
      fieldNameRequired: "Le\x20titre\x20du\x20champ\x20est\x20requis",
      invalidFieldType: "Type de champ invalide",
      invalidCellValue: "Valeur de cellule invalide",
      invalidKanbanGroupField:
        "Kanban\x20nécessite\x20un\x20champ\x20groupable",
      invalidCalendarDateField: "Le calendrier nécessite un champ de date",
      invalidGanttDateField:
        "Gantt nécessite des champs de date de début et de fin",
    },
    command: {
      updateCell: "Mettre à jour la cellule",
      createField: "Créer un champ",
      deleteField: "Supprimer le champ",
      createRecord: "Créer\x20un\x20enregistrement",
      deleteRecord: "Supprimer l'enregistrement",
      updateViewConfig:
        "Mettre\x20à\x20jour\x20les\x20paramètres\x20de\x20la\x20vue",
    },
  },
};
module.exports = e;
