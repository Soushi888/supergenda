"use strict";

class App {
    constructor() {
        this.modal = new Modal();
        this.semainier = new Semainier();

        this.events = new Events();
        this.events.getEvents().always(data => {
            this.semainier.afficherEvents(new Date());
        });
    }
}
new App();
