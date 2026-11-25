# Site Lumbra — mode d'emploi

Tout se fait depuis github.com dans le navigateur. Aucun logiciel à installer,
aucune ligne de commande.

## Les fichiers

| Fichier | À quoi il sert | Tu y touches ? |
|---|---|---|
| `oeuvres.js` | Le catalogue : une ligne par œuvre | **Oui, souvent** |
| `images/` | Les photos | **Oui, souvent** |
| `index.html` | Les textes et la mise en page | Oui, pour les textes |
| `mentions-legales.html` | Mentions légales | Une fois, au début |

---

## Ajouter une œuvre

**1. Mettre la photo en ligne**

Dépôt → dossier `images` → bouton `Add file` → `Upload files` → glisse la photo →
bouton vert `Commit changes`.

Nomme la photo dans la continuité de la gamme : `bois-19.webp`, `papercut-20.webp`,
`monuments-13.webp`. Redimensionne-la autour de 1400 px de large avant de l'envoyer,
pour qu'elle pèse 200 à 400 Ko. Une photo de 5 Mo ralentit le site pour rien.

**2. Ajouter sa ligne au catalogue**

Dépôt → clic sur `oeuvres.js` → icône crayon (en haut à droite) → copie une ligne
existante de la même gamme, colle-la en dessous, change les valeurs → `Commit changes`.

```js
{ g:'bois', t:"Titre de l'œuvre", y:'2026', dim:'60 × 60 cm', note:'', src:'images/bois-19.webp' },
```

- `g` : la gamme — `bois`, `papercut` ou `monuments`
- `t` : le titre, entre guillemets droits `"`
- `y` : l'année, ou `''` si tu ne veux pas l'afficher
- `dim` : hauteur × largeur, ou `''`
- `note` : `'Pièce unique'`, `'Édition limitée, 30 ex.'`, une ville… ou `''`
- `src` : le chemin exact de la photo

**La virgule en fin de ligne est obligatoire.** C'est la seule erreur possible.

Le site se met à jour tout seul en une à deux minutes.

---

## Plusieurs photos pour une œuvre

Chaque œuvre peut avoir plusieurs vues. La première (`src`) est celle qui
s'affiche sur la cimaise ; les suivantes (`more`) apparaissent en miniatures
quand on ouvre la fiche.

```js
{ g:'bois', t:"Cyclone", dim:'', note:'', src:'images/bois-10.webp',
  more:['images/bois-10-2.webp','images/bois-10-3.webp'] },
```

Pour ajouter une vue : dépose la photo dans `images/` en suivant la numérotation
(`bois-10-4.webp`), puis ajoute son chemin dans la liste `more`, entre
apostrophes, séparé par une virgule.

Pour n'avoir qu'une seule photo : supprime tout le `, more:[...]`.

---

## Modifier ou retirer une œuvre

Même chose : crayon sur `oeuvres.js`, change la ligne, ou supprime-la en entier.
Un champ laissé à `''` disparaît simplement du cartel.

## Compléter les années et les dimensions

C'est ce qui manque aujourd'hui. Les cartels affichent le titre et la technique ;
dès que tu remplis `y` et `dim`, ils s'affichent comme en galerie. Tu peux le faire
au fur et à mesure, le site reste correct entre-temps.

## Changer la technique d'une gamme

En haut de `oeuvres.js`, le bloc `TECHNIQUES` donne la ligne technique de chaque
gamme. La modifier là change le cartel de toutes les œuvres de la gamme d'un coup.
**À vérifier : la technique indiquée pour les Monuments est une supposition.**

## Changer un texte de la page

Crayon sur `index.html`, `Ctrl+F` pour trouver la phrase, retape-la, `Commit changes`.
Ne touche pas à ce qui est entre `<` et `>`.

---

## Ce que tu ne peux pas faire seule

Changer la mise en page, les couleurs, la typographie, ajouter une gamme ou une
rubrique : ça demande de modifier le code. C'est le prix de l'hébergement gratuit.
Pour ça, reviens me voir avec le dépôt.

## En cas de casse

Le dépôt garde tout l'historique. Onglet `Commits` → clique sur la version d'avant →
bouton `...` → `Revert`. Rien n'est jamais perdu définitivement.
