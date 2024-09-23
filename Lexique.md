# Lexique des Regex

Voici quelques termes clés et concepts associés aux expressions régulières :

- **Expression régulière (Regex)** : Une séquence de caractères qui forme un motif de recherche. Utilisée pour faire correspondre des chaînes de caractères.

- **Littéraux** : Caractères normaux dans une regex qui correspondent exactement à eux-mêmes, par exemple, `a`, `1`, `!`.

- **Métacaractères** : Caractères spéciaux ayant des significations spécifiques dans les regex :
  - `.` : Correspond à n'importe quel caractère, sauf un retour à la ligne.
  - `^` : Indique le début d'une chaîne.
  - `$` : Indique la fin d'une chaîne.
  - `*` : Correspond à 0 ou plusieurs occurrences du caractère précédent.
  - `+` : Correspond à 1 ou plusieurs occurrences du caractère précédent.
  - `?` : Correspond à 0 ou 1 occurrence du caractère précédent.
  - `{n}` : Correspond exactement à `n` occurrences du caractère précédent.
  - `{n,}` : Correspond à `n` occurrences ou plus du caractère précédent.
  - `{n,m}` : Correspond à entre `n` et `m` occurrences du caractère précédent.

- **Classes de caractères** : Définit un ensemble de caractères à faire correspondre :
  - `[abc]` : Correspond à `a`, `b`, ou `c`.
  - `[^abc]` : Correspond à tout caractère sauf `a`, `b`, ou `c`.
  - `[a-z]` : Correspond à toute lettre minuscule.
  - `[A-Z]` : Correspond à toute lettre majuscule.
  - `[0-9]` : Correspond à tout chiffre.
  - `\d` : Correspond à tout chiffre (équivalent à `[0-9]`).
  - `\D` : Correspond à tout caractère qui n'est pas un chiffre (équivalent à `[^0-9]`).
  - `\w` : Correspond à tout caractère alphanumérique (lettres, chiffres, et `_`, équivalent à `[a-zA-Z0-9_]`).
  - `\W` : Correspond à tout caractère qui n'est pas alphanumérique (équivalent à `[^a-zA-Z0-9_]`).
  - `\s` : Correspond à tout espace blanc (espace, tabulation, saut de ligne).
  - `\S` : Correspond à tout caractère qui n'est pas un espace blanc.

- **Groupes de capture** : Utilisés pour capturer des sous-motifs :
  - `(abc)` : Correspond à la séquence `abc` et capture cette séquence.

- **Quantificateurs** : Spécifient le nombre d'occurrences :
  - `*`, `+`, `?`, `{n}`, `{n,}`, `{n,m}` (décrits ci-dessus).

- **Assertions** : Conditions qui doivent être vraies pour qu'une correspondance soit trouvée :
  - `(?=abc)` : Assertion positive (doit être suivi de `abc`).
  - `(?!abc)` : Assertion négative (ne doit pas être suivi de `abc`).

- **Flags (drapeaux)** : Modifient le comportement de la regex :
  - `i` : Ignorer la casse (case insensitive).
  - `g` : Global, pour trouver toutes les correspondances dans la chaîne.
  - `m` : Multilignes, pour faire correspondre le début et la fin de chaque ligne.

## Ressources supplémentaires

Pour en savoir plus sur les expressions régulières et pratiquer, consultez [Regexr](https://regexr.com/). Ce site interactif vous permet de tester vos regex et de visualiser les correspondances en temps réel.

