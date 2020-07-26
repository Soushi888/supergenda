class Events {
    constructor() {
        this.URL_EVENTS = "http://supergenda.perso/api/event";

        this.getEvents = this.getEvents.bind(this);
    }

    /**
     * Récupère les évenements du calendrier depuis l'API puis les enregistre dans le local storage
     */
    getEvents() {
        $.get(this.URL_EVENTS, (data) => {
            localStorage.events = JSON.stringify(data);
        });
    }

    /**
     * Récupère les événements stockés dans le local storage puis les liste
     */
    listerEvents() {
        let events = JSON.parse(localStorage.events);

        let list = $("#event_list ul");
        $(events).each(index => {
            let li = list.append(
                `<li>Id = ${events[index].id}, nom = ${events[index].name}, catégorie = ${events[index].categorie}, date début = ${events[index].date_debut}, date fin = ${events[index].date_fin}</li>`
            );
        });
    }
}
