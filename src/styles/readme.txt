L’architecture CSS n’est pas chose aisée, surtout lorsque l’on souhaite mettre en place une architecture cohérente et maintenable sur le long terme.

C’est là qu’intervient une feature très intéressante de Sass à savoir l’@import. Cela permet de séparer son code en autant de fichiers et dossiers que nécessaire au bon développement du projet, et de tout compiler en un seul fichier destiné à la production.

La méthodologie la plus répandue et qui semble être la plus efficace est appelée 7-1 Pattern : 7 dossiers, 1 fichier. Ici on décompose le style en 7 dossiers différents et un fichier à la racine qui va tous les importer afin d’être compilé en un fichier Css.

Voici concrètement comment cela se présente, on a donc 7 dossiers (dans cet ordre) :
– Abstracts/
– Base/
– Vendors/
– Layouts/
– Components/
– Pages/
– Themes/
Et enfin main.scss

Notre dossier abstracts va contenir tous les outils sass dont nous avons besoin (variables, mixins, fonctions, placeholders…).

Dans le dossier base on retrouve notre reset et les règles typographiques. On peut également y trouver un fichier generic appliquant du style sur des éléments html globaux.

Le dossier vendor va quant à lui contenir tout le style venant des librairies externes et autres frameworks (swiper, select2, bootstrap…)

Dans layouts sont regroupés les différentes parties du site ou de l’application (header, footer, navigation, grid, forms…)

Pour le dossier components c’est une peu comme layouts mais à une échelle plus petite, c’est ici qu’on aura les composants du projet (slider, social-share, hero, buttons, dropdown…)

Pages va contenir tout le style spécifique à certaines pages.

Le dossier themes va contenir les styles relatifs aux différents thèmes (author, admin, super-admin, reviewer…). À noter que cela est très spécifique au contexte du projet il est possible que ce dossier ne soit pas nécessaire.
De plus nous allons voir par la suite qu’il est aussi possible de gérer le thème directement depuis le composant par exemple.

Il faut garder à l’esprit que les fichiers et dossiers seront importés les uns après les autres suivant leur ordre de déclaration. C’est la raison pour laquelle l’ordre de d’import à son importance, il permet de limiter les conflits lors de la compilation et d’éviter les surcharges css.

Une fois que l’on a tous nos dossiers et nos fichiers il nous reste plus qu’à importer le tout dans mains.scss qui va donc ressembler à ça :

@import
  'abstracts/variables',
  'abstracts/functions',
  'abstracts/mixins',
  'abstracts/placeholders';
 
@import
  'base/reset',
  'base/typography';
 
@import
  'vendors/bootstrap',
  'vendors/jquery-ui';
 
 
@import
  'layout/navigation',
  'layout/grid',
  'layout/header',
  'layout/footer',
  'layout/sidebar',
  'layout/forms';
 
@import
  'components/buttons',
  'components/carousel',
  'components/cover',
  'components/dropdown';
 
@import
  'pages/home',
  'pages/contact';
 
@import
  'themes/theme',
  'themes/admin';
On peut noter plusieurs avantages qui découlent de cette organisation :
– Onboarding plus limpide, les nouveaux arrivants sur le projet mettront peu de temps avant de mettre la main sur les fichiers dont ils ont besoin
– Les phases debug deviennent moins complexes dès lors que l’organisation est cohérente
– Il est très simple de faire évoluer l’application ou le site par exemple si de nouveaux composants doivent être créer par exemple.