"use strict";

class App {
    constructor() {
        new Semainier();
        Events.listeEvents();

        let events = new Events();
        events.getEvents().always(data => {
            localStorage.events = JSON.stringify(data);
        });

        // initialise la date avec celle de la semaine courrante
        let today = new Date();
        let lundiCourant = datepicker.getDateOfWeekDay(today, 1);

        $("#datepicker").val(today.getDate());
        $("#selection-semaine span").text(
            `${datepicker.nomJoursSemaine(
                lundiCourant.getDay()
            )} ${lundiCourant.getDate()} ${datepicker.nomMois(
                lundiCourant.getMonth()
            )} ${lundiCourant.getFullYear()}`
        );
        Semainier.ajusterSemaine(today);

        this.udpateDate();

        let semainier = new Semainier();
        semainier.afficherEvent(new Date(lundiCourant));
    }

    udpateDate() {
        // Change le lundi de la semaine qui est affiché à chaque fois que le input date change
        $("#datepicker").on("change", evt => {
            let nouveauLundi = datepicker.getDateOfWeekDay(evt.target.value, 1);

            $("#selection-semaine span").text(
                `${datepicker.nomJoursSemaine(
                    nouveauLundi.getDay()
                )} ${nouveauLundi.getDate()} ${datepicker.nomMois(
                    nouveauLundi.getMonth()
                )} ${nouveauLundi.getFullYear()}`
            );

            let dateSelect = evt.target.value;
            Semainier.ajusterSemaine(evt.target.value);

            let semainier = new Semainier();
            semainier.afficherEvent(new Date(nouveauLundi));
        });
    }
}
new App();
