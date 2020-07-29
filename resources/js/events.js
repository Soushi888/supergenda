class Events {
    constructor() {
        this.URL_EVENTS = "http://supergenda.perso/api/event";

        this.getEvents = this.getEvents.bind(this);
    }

    /**
     * Récupère les évenements du calendrier depuis l'API puis les enregistre dans le local storage
     */
    getEvents() {
        return $.get(this.URL_EVENTS, data => {
            localStorage.events = JSON.stringify(data);
            return data;
        });
    }

    /**
     * Modifie un événement en passant par l'API
     * @param {object} event event original à modifier
     * @param {object} eventUpdated event de remplacement
     */
    updateEvent(event, eventUpdated) {
        return $.ajax({
            url: `${this.URL_EVENTS}/${event.id}`,
            type: "PUT",
            dataType: "json",
            data: {
                name: eventUpdated.name,
                categorie: eventUpdated.categorie,
                date_debut: eventUpdated.date_debut,
                date_fin: eventUpdated.date_fin
            },
            success: () => {
                console.log("Mise à jours réalisée avec succès !");
            }
        });
    }

    addEvent(event) {
        return $.ajax({
            url: `${this.URL_EVENTS}`,
            type: "POST",
            dataType: "json",
            data: {
                name: event.name,
                categorie: event.categorie,
                date_debut: event.date_debut,
                date_fin: event.date_fin
            },
            success: () => {
                console.log("Ajout réalisé avec succès !");
            }
        });
    }

    deleteEvent(event) {
        return $.ajax({
            url: `${this.URL_EVENTS}/${event.id}`,
            type: "DELETE",
            success: () => {
                console.log("Suppression réalisée avec succès !");
            }
        });
    }
}
