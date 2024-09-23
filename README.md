Les **expressions régulières** (ou **regex**) sont un outil puissant pour rechercher et manipuler des chaînes de caractères dans les langages de programmation, y compris JavaScript. Voici un cours complet pour comprendre et utiliser les **regex** en **JavaScript**.

## 1. Qu'est-ce qu'une expression régulière ?
Une **expression régulière** est une séquence de caractères qui définit un **modèle de recherche**. Ce modèle peut être utilisé pour rechercher, remplacer ou extraire des parties d'une chaîne de texte.

En **JavaScript**, les regex sont créées de deux façons :
- En utilisant des **littéraux** d'expressions régulières :  
  Exemple : `/abc/`
- En utilisant le **constructeur** `RegExp` :  
  Exemple : `new RegExp('abc')`

### Littéral vs Constructeur :
- **Littéral** : Utilisé quand le modèle de l'expression est constant.  
  Exemple : `/\d{3}/g`
- **Constructeur** : Utile quand le modèle est dynamique (calculé à l'exécution).  
  Exemple : `new RegExp('\\d{3}', 'g')` (Notez le double `\\` pour échapper les caractères dans une chaîne).

## 2. Syntaxe de base des expressions régulières

Les **expressions régulières** sont composées de **caractères** et de **méta-caractères**. Voici un aperçu de certains éléments de base :

### 2.1. Caractères standards :
- `a`, `b`, `c`, etc. : Correspondent aux caractères littéraux.
  - Exemple : `/a/` correspond au caractère `a`.

### 2.2. Méta-caractères :
Les **méta-caractères** ont une signification spéciale et doivent être échappés si utilisés littéralement :
- `.` : Correspond à **n'importe quel caractère** (sauf les sauts de ligne).
  - Exemple : `/a.b/` correspond à `aab`, `acb`, etc.
  
- `\d` : Correspond à n'importe quel chiffre (0-9).
  - Exemple : `/\d/` correspond à `1`, `5`, `9`, etc.
  
- `\w` : Correspond à n'importe quelle lettre ou chiffre (a-z, A-Z, 0-9) et le caractère de soulignement `_`.
  - Exemple : `/\w/` correspond à `a`, `Z`, `0`, `_`, etc.
  
- `\s` : Correspond à n'importe quel **espace blanc** (espace, tabulation, saut de ligne).
  - Exemple : `/\s/` correspond à un espace ou une tabulation.

- `\b` : Correspond à une **limite de mot** (début ou fin d'un mot).
  - Exemple : `/\bword\b/` correspond à `word` mais pas à `password`.

### 2.3. Quantificateurs :
Les **quantificateurs** définissent combien de fois un élément doit apparaître.
- `+` : Correspond à une ou plusieurs occurrences.
  - Exemple : `/a+/` correspond à `a`, `aa`, `aaa`, etc.

- `*` : Correspond à zéro ou plusieurs occurrences.
  - Exemple : `/a*/` correspond à rien, `a`, `aa`, `aaa`, etc.

- `?` : Correspond à zéro ou une occurrence.
  - Exemple : `/a?/` correspond à rien ou `a`.

- `{n}` : Correspond exactement à `n` occurrences.
  - Exemple : `/a{3}/` correspond à `aaa`.

- `{n,}` : Correspond à au moins `n` occurrences.
  - Exemple : `/a{2,}/` correspond à `aa`, `aaa`, `aaaa`, etc.

- `{n,m}` : Correspond à entre `n` et `m` occurrences.
  - Exemple : `/a{2,4}/` correspond à `aa`, `aaa`, `aaaa`.

### 2.4. Groupes et alternance :
- `(abc)` : Définit un **groupe de capture**.
  - Exemple : `/a(bc)/` correspond à `abc` et capture `bc`.

- `|` : Opérateur **OU**.
  - Exemple : `/a|b/` correspond à `a` ou `b`.

### 2.5. Ancres :
Les **ancres** définissent les positions dans la chaîne.
- `^` : Correspond au **début de la chaîne**.
  - Exemple : `/^a/` correspond à `a` uniquement au début de la chaîne.

- `$` : Correspond à la **fin de la chaîne**.
  - Exemple : `/a$/` correspond à `a` uniquement à la fin de la chaîne.

### 2.6. Classes de caractères :
Les **classes de caractères** permettent de définir un ensemble de caractères entre crochets `[]`.
- `[abc]` : Correspond à `a`, `b` ou `c`.
  - Exemple : `/[abc]/` correspond à `a`, `b` ou `c`.

- `[a-z]` : Correspond à tout caractère entre `a` et `z`.
  - Exemple : `/[a-z]/` correspond à une lettre minuscule.

- `[^abc]` : Correspond à tout caractère **sauf** `a`, `b` ou `c`.
  - Exemple : `/[^abc]/` correspond à tout sauf `a`, `b` ou `c`.

## 3. Utilisation des regex en JavaScript

### 3.1. Méthodes pour travailler avec les regex

1. **`test()`**  
   Vérifie si une chaîne correspond à l'expression régulière. Renvoie `true` ou `false`.
   ```javascript
   const regex = /abc/;
   console.log(regex.test('abcdef')); // true
   console.log(regex.test('ghijk'));  // false
   ```

2. **`exec()`**  
   Renvoie un tableau contenant les correspondances, ou `null` si aucune correspondance n'est trouvée.
   ```javascript
   const regex = /(\d+)/;
   const result = regex.exec('Il y a 100 pommes');
   console.log(result[0]); // "100"
   console.log(result.index); // Position où la correspondance a été trouvée
   ```

3. **`match()`**  
   Renvoie un tableau contenant toutes les correspondances.
   ```javascript
   const str = 'Chat, chien, cheval';
   const regex = /\w+/g;
   const result = str.match(regex);
   console.log(result); // ["Chat", "chien", "cheval"]
   ```

4. **`replace()`**  
   Remplace la correspondance par une nouvelle chaîne.
   ```javascript
   const str = 'Hello 123';
   const newStr = str.replace(/\d+/g, '456');
   console.log(newStr); // "Hello 456"
   ```

5. **`split()`**  
   Divise une chaîne en un tableau, selon l'expression régulière.
   ```javascript
   const str = 'pomme,poire,banane';
   const result = str.split(/,/);
   console.log(result); // ["pomme", "poire", "banane"]
   ```

## 4. Modificateurs (Flags)

Les **modificateurs** permettent d'ajouter des options aux regex. Ils sont placés après la dernière barre oblique `/` :
- **`g`** : Recherche **globale** (trouve toutes les correspondances, pas seulement la première).
- **`i`** : Recherche **insensible à la casse**.
- **`m`** : Recherche sur plusieurs lignes (change le comportement des ancres `^` et `$`).

Exemples :
```javascript
const regex = /abc/g;   // Recherche globale
const regex = /abc/i;   // Insensible à la casse
const regex = /^abc/m;  // Recherche sur plusieurs lignes
```

## 5. Exemples pratiques

1. **Validation d'une adresse email** :
   ```javascript
   const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
   console.log(emailRegex.test('exemple@mail.com')); // true
   ```

2. **Validation d'un numéro de téléphone** (Format 10 chiffres) :
   ```javascript
   const phoneRegex = /^\d{10}$/;
   console.log(phoneRegex.test('0123456789')); // true
   ```

3. **Extraction des hashtags d'un texte** :
   ```javascript
   const text = "J'aime #JavaScript et #regex !";
   const hashtags = text.match(/#\w+/g);
   console.log(hashtags); // ["#JavaScript", "#regex"]
   ```

## 6. Conclusion

Les **expressions régulières** en **JavaScript** sont un outil puissant pour manipuler des chaînes de caractères. Bien qu'elles puissent sembler complexes au début, avec de la pratique, elles deviennent un atout indispensable pour les développeurs.