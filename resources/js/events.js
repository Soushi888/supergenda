class Events {
    constructor() {
        this.URL_EVENTS = "http://supergenda.perso/api/event/";

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

    updateEvent(event, eventUpdated) {
        $.ajax({
            url: `${this.URL_EVENTS}${event.id}`,
            type: "PUT",
            dataType: "json",
            data: {
                name: eventUpdated.name,
                date_debut: eventUpdated.date_debut,
                date_fin: eventUpdated.date_fin
            },
            success: () => {
                console.log("Mise à jours réalisée avec succès !");
            }
        });
    }
}
