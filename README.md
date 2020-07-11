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
- Passer en revue son agenda semaines par semaines
- Ajouter, modifier, supprimer un événement:
  - Nom
  - Date-heure de début
  - Date-heure de fin
- L'utilisateur ne perd pas ses préférences

Cependant :
- Un événement ne s'étend pas sur deux jours
- Les événements ne se chevauchent pas
- Pas de login, par de multi-utilisateurs

### Contraintes techniques
- Projet déployé sur un hébergement externe
- LocalStorage
- 100% Ajax en JSON
- cycle de vie de page (load, unload)
- Support navigateurs: Au mois 2 navigateurs au choix

