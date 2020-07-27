"use strict";

class App {
    constructor() {
        this.semainier = new Semainier();
        this.modal = new Modal();

        let events = new Events();
        events.getEvents();

        // initialise la date avec celle de la semaine courrante
        let today = new Date();
        today.setDate(today.getDate() - 1);
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

        this.semainier.afficherEvents(new Date(lundiCourant));
        this.semainier.selectEvent();
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

            this.semainier.afficherEvents(new Date(nouveauLundi));
        });
    }
}
new App();
