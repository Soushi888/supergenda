# Supergenda, le super agenda !
## Installation en local
1. Copiez le fichier .env.example et renommez le .env
2. Indiquez-y vos informations pour connecter votre base de données
3. Exécutez les commandes suivantes :

       $ composer install
       $ php artisan key:generate
       $ php artisan cache:clear
       $ php artisan config:clear
       $ php artisan migrate --seed

## API
- `GET api/event` : Renvoie tous les événements
- `GET api/event/{id}` : Renvoie un événement
- `POST api/event` : Ajoute un événement
- `PUT api/event/{id}` : Met à jour un événement
- `DELETE api/event/{id}` : Supprime un événement


## Démo
Calendrier :
- [https://cmaisonneuve.sacha-pignot.website/agendax/](https://cmaisonneuve.sacha-pignot.website/agendax/)

## Énoncé
https://infoo.herokuapp.com/course/js/eval/agendax

### Fonctionnalités
 L'utilisateur peut :
  - Passer en revue son agenda semaine par semaine
  - Ajouter, supprimer et modifier un événement avec, au minimum, les propriétés suivants:
    - Nom
    - Date-heure de début
    - Date-heure de fin ou durée
    - Une catégorie (un nom === chaîne)
  - Définir une catégorie par défaut utilisée au moment de la création d'un événement. Cette catégorie par défaut devra persister au (re-)chargement/réouverture de la page.


#### Simplifications possibles :
- La gestion du fuseau horaire/GMT n'est pas requise
- Les événement sur deux jours ou plus ne sont pas requis
- Les événements qui se chevauchent ne sont pas requis
- La gestion des catégories n'a pas à être traitée au niveau du back-end ce qui évite une table des catégories et des requêtes d'API spécifiques. Dans cette simplification, les catégories et leur couleur associée peuvent être traitées en front-end (localStorage par exemple).
- 1 seul layout (desktop ou mobile au choix)


### Contraintes techniques
- Projet déployé sur un hébergement externe
- LocalStorage
- 100% Ajax en JSON
- cycle de vie de page (load, unload)
- Support navigateurs: Au mois 2 navigateurs au choix

