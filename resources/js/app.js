"use strict";

class App {
    constructor() {
        this.semainier = new Semainier();
        this.modal = new Modal();

        this.events = new Events();
        this.events.getEvents().always(data => {
            this.semainier.udpateDate();
            this.semainier.afficherEvents(new Date());
            this.semainier.selectEvent();
        }).done(data => {
            console.log(data);
        });
    }
}
new App();
