"use strict";

class App {
    constructor() {
        this.semainier = new Semainier();
        this.modal = new Modal();

        let events = new Events();
        events.getEvents();

        this.semainier.selectEvent();
    }
}
new App();
