"use strict";

class App {
    constructor() {
        let events = new Events();
        events.getEvents().always(data => {
            this.modal = new Modal();
            this.semainier = new Semainier();
        });
    }
}
new App();
