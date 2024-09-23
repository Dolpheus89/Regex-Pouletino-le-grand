export const exercices = [
  {
    titre: "Exercice 1 : Trouver les chiffres",
    consigne:
      "Utilise une regex pour extraire tous les chiffres dans le texte.",
    result:
      "Les résultats devraient inclure des chiffres comme 5, 2, 10. Cherche tous les nombres présents dans le texte.",
    id: 1,
  },
  {
    titre: "Exercice 2 : Extraire les dialogues",
    consigne:
      "Trouve toutes les phrases entre guillemets qui sont des dialogues.",
    result:
      'Les résultats devraient inclure les dialogues : "Aujourd\'hui est le jour où je bats tous les records !", "Bonne chance, Pouletino !", etc.',
    id: 2,
  },
  {
    titre: "Exercice 3 : Trouver les mots de 5 lettres",
    consigne:
      "Utilise une regex pour extraire tous les mots qui contiennent exactement 5 lettres.",
    result:
      "Les résultats devraient inclure des mots comme : ferme, grains, tête, cours.",
    id: 3,
  },
  {
    titre: "Exercice 4 : Identifier les unités de mesure",
    consigne:
      "Trouve toutes les unités de mesure comme 'litres', 'grains', 'œufs'.",
    result:
      "Les résultats devraient inclure 'litres', 'grains', 'œufs'. Ces termes sont utilisés pour indiquer des quantités spécifiques.",
    id: 4,
  },
  {
    titre: "Exercice 5 : Compter les occurrences d'un mot spécifique",
    consigne: `Écris une Regex pour compter combien de fois le mot "poulet" apparaît dans l’histoire de Pouletino, indépendamment de la casse (majuscules/minuscules).`,
    result: `Le nombre d’occurrences du mot "poulet".`,
    id: 5,
  },
];
