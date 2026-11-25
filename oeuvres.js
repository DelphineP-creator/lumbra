/* ============================================================
   LUMBRA — catalogue des œuvres
   Seul fichier à modifier pour faire vivre le site.

   Le site présente deux gammes :
     - bois                   (bois en relief)
     - papercut               (papier découpé, trois séries)
          série = 'edition'   éditions limitées à 30 exemplaires
          série = 'monuments' monuments français
          série = 'serie'     papiers découpés de la série courante

   Champs par œuvre :
     g     gamme : 'bois' ou 'papercut'
     s     série (pour papercut uniquement) :
           'edition' | 'monuments' | 'serie'
     t     titre
     dim   dimensions, hauteur × largeur, ex. '60 × 60 cm' — ou ''
     note  mention à afficher sous la technique — ou ''
           ex. 'Valence', 'Lyon', 'Édition limitée, 30 ex.'
     src   photo principale, dans le dossier images/
     more  [facultatif] photos supplémentaires, ex. ['images/x-02.webp',…]

   AJOUTER UNE ŒUVRE : copie une ligne, change les valeurs, garde
     la virgule en fin de ligne.
   EN RETIRER UNE : supprime la ligne entière.
   ============================================================ */

const TECHNIQUES = {
  bois:      'Bois découpé et assemblé en relief, encadré',
  papercut:  'Papier découpé',
};

const OEUVRES = [

  /* ===================== BOIS EN RELIEF ===================== */
  { g:'bois', t:"Vibrations Abstraites", dim:'', note:'', src:'images/bois-01.webp', more:['images/bois-01-2.webp', 'images/bois-01-3.webp'] },
  { g:'bois', t:"Rayons Solaires",       dim:'', note:'', src:'images/bois-02.webp', more:['images/bois-02-2.webp', 'images/bois-02-3.webp'] },
  { g:'bois', t:"Halos Argentés",        dim:'', note:'', src:'images/bois-03.webp', more:['images/bois-03-2.webp', 'images/bois-03-3.webp'] },
  { g:'bois', t:"Éclats Cuivrés",        dim:'', note:'', src:'images/bois-04.webp', more:['images/bois-04-2.webp', 'images/bois-04-3.webp'] },
  { g:'bois', t:"Lumière Abstraite",     dim:'', note:'', src:'images/bois-05.webp', more:['images/bois-05-2.webp', 'images/bois-05-3.webp'] },
  { g:'bois', t:"Vision Fragmentée",     dim:'', note:'', src:'images/bois-06.webp', more:['images/bois-06-2.webp', 'images/bois-06-3.webp'] },
  { g:'bois', t:"Fragment de Lumière",   dim:'', note:'', src:'images/bois-07.webp' },
  { g:'bois', t:"Obscuréclat",           dim:'', note:'', src:'images/bois-08.webp' },
  { g:'bois', t:"Irisor",                dim:'', note:'', src:'images/bois-09.webp', more:['images/bois-09-2.webp'] },
  { g:'bois', t:"Cyclone",               dim:'', note:'', src:'images/bois-10.webp' },
  { g:'bois', t:"Iridesc",               dim:'', note:'', src:'images/bois-11.webp', more:['images/bois-11-2.webp', 'images/bois-11-3.jpg', 'images/bois-11-4.webp'] },
  { g:'bois', t:"Iridion",               dim:'', note:'', src:'images/bois-12.webp', more:['images/bois-12-2.webp', 'images/bois-12-3.webp'] },
  { g:'bois', t:"Perception",            dim:'', note:'', src:'images/bois-13.webp', more:['images/bois-13-2.webp', 'images/bois-13-3.webp', 'images/bois-13-4.webp'] },
  { g:'bois', t:"Irisation",             dim:'', note:'', src:'images/bois-14.webp', more:['images/bois-14-2.webp', 'images/bois-14-3.webp', 'images/bois-14-4.webp'] },
  { g:'bois', t:"Fragment",              dim:'', note:'', src:'images/bois-15.jpg' , more:['images/bois-15-2.webp', 'images/bois-15-3.webp', 'images/bois-15-4.webp', 'images/bois-15-5.webp'] },
  { g:'bois', t:"Cercle de Lumière",     dim:'', note:'', src:'images/bois-16.webp', more:['images/bois-16-2.webp', 'images/bois-16-3.webp', 'images/bois-16-4.webp', 'images/bois-16-5.webp'] },
  { g:'bois', t:"Écho de l'Iris",        dim:'', note:'', src:'images/bois-17.webp', more:['images/bois-17-2.webp', 'images/bois-17-3.webp', 'images/bois-17-4.webp', 'images/bois-17-5.webp'] },
  { g:'bois', t:"Vision Organique",      dim:'', note:'', src:'images/bois-18.webp', more:['images/bois-18-2.webp', 'images/bois-18-3.webp'] },

  /* ===================== PAPIER DÉCOUPÉ ===================== */

  /* ----- Éditions limitées à 30 exemplaires ----- */
  { g:'papercut', s:'edition', t:"Abeille",              dim:'', note:'Édition limitée, 30 ex.', src:'images/papercut-01.webp', more:['images/papercut-01-2.webp', 'images/papercut-01-3.webp', 'images/papercut-01-4.webp', 'images/papercut-01-5.webp', 'images/papercut-01-6.webp'] },
  { g:'papercut', s:'edition', t:"Coquillage",           dim:'', note:'Édition limitée, 30 ex.', src:'images/papercut-02.webp', more:['images/papercut-02-2.webp', 'images/papercut-02-3.webp', 'images/papercut-02-4.webp', 'images/papercut-02-5.webp', 'images/papercut-02-6.webp', 'images/papercut-02-7.webp'] },
  { g:'papercut', s:'edition', t:"Tournesol",            dim:'', note:'Édition limitée, 30 ex.', src:'images/papercut-03.webp', more:['images/papercut-03-2.webp', 'images/papercut-03-3.webp', 'images/papercut-03-4.webp', 'images/papercut-03-5.webp', 'images/papercut-03-6.webp'] },
  { g:'papercut', s:'edition', t:"Aridité",              dim:'', note:'Édition limitée, 30 ex.', src:'images/papercut-04.webp', more:['images/papercut-04-2.webp', 'images/papercut-04-3.webp', 'images/papercut-04-4.webp', 'images/papercut-04-5.webp', 'images/papercut-04-6.webp', 'images/papercut-04-7.webp'] },
  { g:'papercut', s:'edition', t:"Murmure de l'eau",     dim:'', note:'Édition limitée, 30 ex.', src:'images/papercut-05.webp', more:['images/papercut-05-2.webp', 'images/papercut-05-3.webp', 'images/papercut-05-4.webp', 'images/papercut-05-5.webp', 'images/papercut-05-6.webp', 'images/papercut-05-7.webp'] },
  { g:'papercut', s:'edition', t:"Structure Organique",  dim:'', note:'Édition limitée, 30 ex.', src:'images/papercut-06.webp', more:['images/papercut-06-2.webp', 'images/papercut-06-3.webp', 'images/papercut-06-4.webp', 'images/papercut-06-5.webp'] },
  { g:'papercut', s:'edition', t:"Empreinte minérale",   dim:'', note:'Édition limitée, 30 ex.', src:'images/papercut-07.webp', more:['images/papercut-07-2.webp', 'images/papercut-07-3.webp', 'images/papercut-07-4.webp', 'images/papercut-07-5.webp'] },
  { g:'papercut', s:'edition', t:"Coccinelle sur feuille", dim:'', note:'Édition limitée, 30 ex.', src:'images/papercut-08.webp', more:['images/papercut-08-2.webp', 'images/papercut-08-3.webp'] },
  { g:'papercut', s:'edition', t:"Papillon sur fleur",   dim:'', note:'Édition limitée, 30 ex.', src:'images/papercut-09.webp', more:['images/papercut-09-2.webp', 'images/papercut-09-3.webp', 'images/papercut-09-4.webp', 'images/papercut-09-5.webp', 'images/papercut-09-6.webp', 'images/papercut-09-7.webp'] },
  { g:'papercut', s:'edition', t:"Coccinelle",           dim:'', note:'Édition limitée, 30 ex.', src:'images/papercut-10.webp', more:['images/papercut-10-2.webp', 'images/papercut-10-3.webp', 'images/papercut-10-4.webp', 'images/papercut-10-5.webp', 'images/papercut-10-6.webp', 'images/papercut-10-7.webp'] },
  { g:'papercut', s:'edition', t:"Papillon",             dim:'', note:'Édition limitée, 30 ex.', src:'images/papercut-11.webp', more:['images/papercut-11-2.webp', 'images/papercut-11-3.webp', 'images/papercut-11-4.webp', 'images/papercut-11-5.webp', 'images/papercut-11-6.webp'] },

  /* ----- Monuments français ----- */
  { g:'papercut', s:'monuments', t:"Kiosque Peynet",           dim:'', note:'Valence',           src:'images/monuments-01.webp', more:['images/monuments-01-2.webp', 'images/monuments-01-3.webp', 'images/monuments-01-4.webp', 'images/monuments-01-5.webp'] },
  { g:'papercut', s:'monuments', t:"Place Saint-Jean",         dim:'', note:'Valence',           src:'images/monuments-02.webp', more:['images/monuments-02-2.webp', 'images/monuments-02-3.webp', 'images/monuments-02-4.webp', 'images/monuments-02-5.webp'] },
  { g:'papercut', s:'monuments', t:"Fontaine monumentale",     dim:'', note:'Valence',           src:'images/monuments-03.webp', more:['images/monuments-03-2.webp', 'images/monuments-03-3.webp', 'images/monuments-03-4.webp', 'images/monuments-03-5.webp', 'images/monuments-03-6.webp'] },
  { g:'papercut', s:'monuments', t:"Bonhomme Jacquemart",      dim:'', note:'Romans-sur-Isère',  src:'images/monuments-04.webp', more:['images/monuments-04-2.webp', 'images/monuments-04-3.png', 'images/monuments-04-4.webp', 'images/monuments-04-5.webp'] },
  { g:'papercut', s:'monuments', t:"Collégiale Saint-Barnard", dim:'', note:'Romans-sur-Isère',  src:'images/monuments-05.webp', more:['images/monuments-05-2.webp', 'images/monuments-05-3.webp', 'images/monuments-05-4.webp'] },
  { g:'papercut', s:'monuments', t:"Tour Jacquemart",          dim:'', note:'Romans-sur-Isère',  src:'images/monuments-06.webp', more:['images/monuments-06-2.webp', 'images/monuments-06-3.png', 'images/monuments-06-4.webp', 'images/monuments-06-5.webp', 'images/monuments-06-6.webp'] },
  { g:'papercut', s:'monuments', t:"Place Saint-Jean",         dim:'', note:'Lyon',              src:'images/monuments-07.webp', more:['images/monuments-07-2.webp', 'images/monuments-07-3.webp', 'images/monuments-07-4.webp', 'images/monuments-07-5.webp'] },
  { g:'papercut', s:'monuments', t:"Place des Terreaux",       dim:'', note:'Lyon',              src:'images/monuments-08.webp', more:['images/monuments-08-2.webp', 'images/monuments-08-3.webp', 'images/monuments-08-4.webp', 'images/monuments-08-5.webp', 'images/monuments-08-6.webp'] },
  { g:'papercut', s:'monuments', t:"Opéra National",           dim:'', note:'Lyon',              src:'images/monuments-09.webp', more:['images/monuments-09-2.webp', 'images/monuments-09-3.webp', 'images/monuments-09-4.webp', 'images/monuments-09-5.webp', 'images/monuments-09-6.jpg', 'images/monuments-09-7.webp'] },
  { g:'papercut', s:'monuments', t:"Basilique de Fourvière",   dim:'', note:'Lyon',              src:'images/monuments-10.webp', more:['images/monuments-10-2.webp', 'images/monuments-10-3.webp', 'images/monuments-10-4.webp', 'images/monuments-10-5.webp'] },
  { g:'papercut', s:'monuments', t:"Tour Tanguy",              dim:'', note:'Brest',             src:'images/monuments-11.webp', more:['images/monuments-11-2.webp', 'images/monuments-11-3.png', 'images/monuments-11-4.webp', 'images/monuments-11-5.png'] },
  { g:'papercut', s:'monuments', t:"Les Tours",                dim:'', note:'La Rochelle',       src:'images/monuments-12.webp', more:['images/monuments-12-2.webp', 'images/monuments-12-3.webp'] },

  /* ----- Autres papiers découpés ----- */
  { g:'papercut', s:'serie', t:"Magnolia",                dim:'', note:'', src:'images/papercut-12.webp', more:['images/papercut-12-2.webp', 'images/papercut-12-3.webp', 'images/papercut-12-4.webp'] },
  { g:'papercut', s:'serie', t:"Tulipes",                 dim:'', note:'', src:'images/papercut-13.webp', more:['images/papercut-13-2.webp', 'images/papercut-13-3.webp', 'images/papercut-13-4.webp'] },
  { g:'papercut', s:'serie', t:"Nervures",                dim:'', note:'', src:'images/papercut-14.webp', more:['images/papercut-14-2.webp', 'images/papercut-14-3.webp', 'images/papercut-14-4.webp', 'images/papercut-14-5.webp'] },
  { g:'papercut', s:'serie', t:"Fleur de Magnolia",       dim:'', note:'', src:'images/papercut-15.webp', more:['images/papercut-15-2.webp', 'images/papercut-15-3.webp', 'images/papercut-15-4.webp'] },
  { g:'papercut', s:'serie', t:"Fleurs de Lys",           dim:'', note:'', src:'images/papercut-16.webp', more:['images/papercut-16-2.webp', 'images/papercut-16-3.webp'] },
  { g:'papercut', s:'serie', t:"Tulipes Noires Éternelles", dim:'', note:'', src:'images/papercut-17.webp', more:['images/papercut-17-2.webp', 'images/papercut-17-3.webp', 'images/papercut-17-4.webp', 'images/papercut-17-5.webp'] },
  { g:'papercut', s:'serie', t:"Nervure de feuille",      dim:'', note:'', src:'images/papercut-18.webp', more:['images/papercut-18-2.webp', 'images/papercut-18-3.webp', 'images/papercut-18-4.webp', 'images/papercut-18-5.webp'] },
  { g:'papercut', s:'serie', t:"Bouquet de Ginkgo Biloba",dim:'', note:'', src:'images/papercut-19.webp', more:['images/papercut-19-2.webp', 'images/papercut-19-3.webp', 'images/papercut-19-4.webp', 'images/papercut-19-5.png'] },

];
