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
        this.semainier.ajusterSemaine(today);

        this.semainier.udpateDate();

        this.semainier.afficherEvents(new Date(lundiCourant));
        this.semainier.selectEvent();
    }
}
new App();
