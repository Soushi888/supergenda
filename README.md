# Supergenda, le super agenda !
TP final du cours "programmation interractive client-serveur". Création d'une application de type calendrier personnel en jQuery, AJAX et Laravel. 

## GIT

https://github.com/Soushi888/supergenda

## Démo

https://cmaisonneuve.sacha-pignot.website/supergenda/

## Énoncé

https://infoo.herokuapp.com/course/js/eval/agendax

### Fonctionnalités

L'utilisateur peut :

-   Passer en revue son agenda semaine par semaine
-   Ajouter, supprimer et modifier un événement avec, au minimum, les propriétés suivants:
    -   Nom
    -   Date-heure de début
    -   Date-heure de fin ou durée
    -   Une catégorie (un nom === chaîne)
-   Définir une catégorie par défaut utilisée au moment de la création d'un événement. Cette catégorie par défaut devra persister au (re-)chargement/réouverture de la page.

## Installation en local

1. Copiez le fichier .env.example et renommez le .env
2. Indiquez-y vos informations pour connecter votre base de données
3. Exécutez les commandes suivantes :

    \$ composer install

    \$ php artisan key:generate

    \$ php artisan cache:clear

    \$ php artisan config:clear

    \$ php artisan migrate --seed

4. Pour travailler la partie front-end, vous avez besoins de node et de npm. Une fois les deux installés :

    \$ npm install

    \$ npm run watch

## front-end

Les fichiers du dossier ressources/css et ressources/js sont compompilés dans les fichiers public/css/app.css et public/js/app.js.

Ils sont compilé par les instructions données dans le fichier webpack.mix.js qui est à la racine. 

En utilsant la commande `npm run watch`, les fichiers se compilent automatiquement.

### Liste des fichiers front-end dans leur ordre de chargement :

-   `date.prototype.js` : Contient des méthodes ajoutées à la classe Date
-   `datepicker.js` : Contient des méthodes statics utiles pour formatter les dates
-   `modal.js` : Classe de Modal utilisée pour gérer les modals
-   `events.js` : Interface avec l'API
-   `semainier.js` : Coeur de l'appication qui gère le semainier
-   `app.js` : Intégration du semainier dans une appication

## API

Les routes de l'api se trouve dans le fichier routes/api.php

https://cmaisonneuve.sacha-pignot.website/supergenda/public/api/

-   `GET api/event` : Renvoie tous les événements
-   `GET api/event/{id}` : Renvoie un événement
-   `POST api/event` : Ajoute un événement
-   `PUT api/event/{id}` : Met à jour un événement
-   `DELETE api/event/{id}` : Supprime un événement

## Base de donnée

La structure de la table event se trouve dans le fichier database/migrations/2020_06_23_221949_create_events_table.php

Les données de demonstration sont créé par le fichier database/seeds/EventTableSeeder.php
