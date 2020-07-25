class Events {
    constructor() {
        this.URL_EVENTS = "http://supergenda.perso/api/event";
    }


    static listeEvents() {
        const URL_EVENTS = "http://supergenda.perso/api/event";
        $.get(URL_EVENTS, data => {
            let list = $("#event_list ul");
            $(data).each(index => {
                let li = list.append(
                    `<li>Id = ${data[index].id}, nom = ${data[index].name}, catégorie = ${data[index].categorie}, date début = ${data[index].date_debut}, date fin = ${data[index].date_fin}</li>`
                );
            });
        });
    }
}

getEventsByWeek(monday) {

    $.get(this.URL_EVENTS, data => {
        // if
    })
}