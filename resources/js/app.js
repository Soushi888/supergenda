"use strict";

class App {
    constructor() {
        this.events = new Events();

        this.events.getEvents().always(data => {
            this.semainier = new Semainier();
            this.modal = new Modal();
        });
    }
}
new App();
