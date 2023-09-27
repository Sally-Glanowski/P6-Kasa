
![image](https://github.com/Sally-Glanowski/P6-Kasa/assets/129045849/8fdd7f0a-6ba0-453a-91b9-5226dae97b49)



Démarrer le projet React et développer l’ensemble de l’application, les composants React, les routes React Router, en suivant les maquettes Figma (responsives). 

Back-end / data : les 20 dernières annonces de logements dans ce fichier JSON permettent de construire le Front qui correspond.

Contraintes techniques : Create React App pour créer les applications React.

Contraintes fonctionnelles

Quelques précisions sur les fonctionnalités du site :

Pour le défilement des photos dans la galerie (composant Gallery) :

Si l'utilisateur se trouve à la première image et qu'il clique sur "Image précédente", la galerie affiche la dernière image. 
Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "Image suivante", la galerie affiche la première image. 

S'il n'y a qu'une seule image, les boutons "Suivant" et "Précédent" ainsi que la numérotation n'apparaissent pas.
La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image.

Collapse : 
Par défaut, les Collapses sont fermés à l'initialisation de la page. 
Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer.
Inversement, si le Collapse est fermé, un clic permet de l'ouvrir.

Le style :
L'utilsation de SASS est obligatoire pour générer le style CSS du site web.

### `npm start`

Exécuter l'application en mode développement.\
Ouvrez [http://localhost:8000](http://localhost:8000) pour l'afficher dans votre navigateur.

La page se rechargera lorsque vous apporterez des modifications.\
Vous pouvez également voir des erreurs de charpie dans la console.
