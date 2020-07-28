class Semainier {
    /**
     * Génère la structure du semainier
     */
    constructor() {
        // Génération du semainier
        $(".content").append(`
        <div>
                <div id="selection-semaine">
                    <input type="date" id="datepicker">
                    <p>Semaine du <span></span></p>
                </div>
                <table class="agenda">
                    <thead>
                        <tr>
                            <th>Heure</th>
                            <th class="lundi">Lundi <span></span></th>
                            <th class="mardi">Mardi <span></span></th>
                            <th class="mercredi">Mercredi <span></span></th>
                            <th class="jeudi">Jeudi <span></span></th>
                            <th class="vendredi">Vendredi <span></span></th>
                            <th class="samedi">Samedi <span></span></th>
                            <th class="dimanche">Dimanche <span></span></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr id="modele">
                            <td class="heure"></td>
                            <td class="lundi"></td>
                            <td class="mardi"></td>
                            <td class="mercredi"></td>
                            <td class="jeudi"></td>
                            <td class="vendredi"></td>
                            <td class="samedi"></td>
                            <td class="dimanche"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `);

        for (let i = 0; i <= 47; ++i) {
            let tr = $("#modele")
                .clone()
                .attr("id", "");

            let tdHeure = tr.children(".heure");

            let heure = Math.floor(i / 2);
            let tbody = $("tbody");

            let td = tr.children("td");

            if (i % 2 == 0) {
                tdHeure.text(`${heure}h00`);
                td.data("houre", `${datepicker.addZero(heure)}:00`);
            } else {
                tdHeure.text(`${heure}h30`);
                td.data("houre", `${datepicker.addZero(heure)}:30`);
                tr.css("border-bottom", "1px solid black");
            }

            tdHeure.css("border-right", "1px solid black");

            tbody.append(tr);
        }
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
        this.ajusterSemaine(today);

        this.afficherEvents = this.afficherEvents.bind(this);
    }

    /**
     * Change le lundi de la semaine qui est affiché à chaque fois que le input date change
     */
    udpateDate() {
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
            this.ajusterSemaine(evt.target.value);

            this.afficherEvents(new Date(nouveauLundi));
        });
    }

    /**
     * Ajuste le numéro des jours à coté des nom des jours de la semaine dans le semainier
     * @param {Date} date
     */
    ajusterSemaine(date) {
        let numLundi = $(".lundi span").text(
            datepicker.addZero(datepicker.getDateOfWeekDay(date, 1).getDate())
        );
        let numMardi = $(".mardi span").text(
            datepicker.addZero(datepicker.getDateOfWeekDay(date, 2).getDate())
        );
        let numMercredi = $(".mercredi span").text(
            datepicker.addZero(datepicker.getDateOfWeekDay(date, 3).getDate())
        );
        let numJeudi = $(".jeudi span").text(
            datepicker.addZero(datepicker.getDateOfWeekDay(date, 4).getDate())
        );
        let numVendredi = $(".vendredi span").text(
            datepicker.addZero(datepicker.getDateOfWeekDay(date, 5).getDate())
        );
        let numSamedi = $(".samedi span").text(
            datepicker.addZero(datepicker.getDateOfWeekDay(date, 6).getDate())
        );
        let numDimanche = $(".dimanche span").text(
            datepicker.addZero(datepicker.getDateOfWeekDay(date, 0).getDate())
        );
    }

    /**
     * Affiche dans le semainier les événements stockés dans le localStorage d'une semaine en particulier
     * @param {Date} monday
     */
    afficherEvents(monday) {
        let year = monday.getFullYear();
        let week = monday.getWeek();

        $("td").removeClass("event start-event end-event");

        let events = [];

        $(JSON.parse(localStorage.events)).each((index, element) => {
            let yearEvent = new Date(element.date_debut).getFullYear();
            let weekEvent = new Date(element.date_debut).getWeek();
            if (yearEvent == year && weekEvent == week) {
                events.push(element);
            }
        });

        $(events).each((index, element) => {
            let date_debut = new Date(element.date_debut);
            let date_fin = new Date(element.date_fin);
            let id = element.id;

            let jours = datepicker.nomJoursSemaine(date_debut.getDay());
            let heure_debut = `${datepicker.addZero(
                date_debut.getHours()
            )}:${datepicker.addZero(date_debut.getMinutes())}`;
            let heure_fin = `${datepicker.addZero(
                date_fin.getHours()
            )}:${datepicker.addZero(date_fin.getMinutes())}`;

            $(`td.${jours}`).each((index, element) => {
                if ($(element).data("houre") == heure_debut) {
                    $(element).addClass("event");
                    $(element).addClass("start-event");
                    $(element).data("id", id);
                }
                if ($(element).data("houre") == heure_fin) {
                    $(element)
                        .parent()
                        .prev()
                        .children(`.${jours}`)
                        .addClass("event");
                    $(element)
                        .parent()
                        .prev()
                        .children(`.${jours}`)
                        .addClass("end-event");
                    $(element).data("id", id);
                }
                if (
                    $(element).data("houre") > heure_debut &&
                    $(element).data("houre") < heure_fin
                ) {
                    $(element).addClass("event");
                    $(element).data("id", id);
                }
            });
        });
    }

    /**
     * Selection d'un événement du semainier
     */
    selectEvent() {
        let events = JSON.parse(localStorage.events),
            jours = [],
            col = [];

        for (let i = 0; i <= 6; ++i) {
            jours.push(datepicker.nomJoursSemaine(i));
            col.push($(`td.${jours[i]}`));
            col[i].each((index, element) => {
                if ($(element).data("id")) {
                    let event;
                    $(events).each((index, eventChecked) => {
                        if (eventChecked.id == $(element).data("id")) {
                            event = eventChecked;
                        }
                    });

                    $(element).on("click", evt => {
                        console.log(event);
                        this.afficherEvent(event);
                    });

                    // Effet de hover lorsque l'utilisateur passe sa souris sur un événement
                    $(element).on("mouseenter", evt => {
                        let startEvent = $(".start-event");
                        $(startEvent).each((index, element) => {
                            if ($(element).data("id") == event.id) {
                                $(element).css(
                                    "box-shadow",
                                    "0px -9px 8px -3px rgba(0,0,0,0.7)"
                                );
                            }
                        });
                        let endEvent = $(".end-event");
                        $(endEvent).each((index, element) => {
                            if ($(element).data("id") == event.id) {
                                $(element).css(
                                    "box-shadow",
                                    "0px 9px 8px -3px rgba(0,0,0,0.7)"
                                );
                            }
                        });
                    });

                    $(element).on("mouseout", evt => {
                        let startEvent = $(".start-event");
                        $(startEvent).each((index, element) => {
                            if ($(element).data("id") == event.id) {
                                $(element).css("box-shadow", "");
                            }
                        });
                        let endEvent = $(".end-event");
                        $(endEvent).each((index, element) => {
                            if ($(element).data("id") == event.id) {
                                $(element).css("box-shadow", "");
                            }
                        });
                    });
                }
            });
        }
    }

    /**
     * Affichage d'un événment selectionné dans un modal et interface de modification de celui-ci.
     * @param {JSON} event
     */
    afficherEvent(event) {
        Modal.showModal();
        let modalContent = $(".modal-content");

        let jours = new Date(event.date_debut);
        let joursFormate = `${datepicker.nomJoursSemaine(
            jours.getDay()
        )} ${datepicker.addZero(jours.getDate())} ${datepicker.nomMois(
            jours.getMonth()
        )} ${jours.getFullYear()}`;
        let heure_debut = `${datepicker.addZero(
            new Date(event.date_debut).getHours()
        )}:${datepicker.addZero(new Date(event.date_debut).getMinutes())}`;
        let heure_fin = `${datepicker.addZero(
            new Date(event.date_fin).getHours()
        )}:${datepicker.addZero(new Date(event.date_fin).getMinutes())}`;

        modalContent.append(`
        <button id="modifier-event">Modifier</button>
        <h1>${event.name}</h1>
        <p>Catégorie = ${event.categorie}</p>
        <p>Journée = ${joursFormate}</p>
        <p>Heure du début = ${heure_debut}</p>
        <p>Heure du début = ${heure_fin}</p>
        `);

        // Modification de l'événement
        $("#modifier-event").on("click", () => {
            this.updateEvent(event);
        });
    }

    updateEvent(event) {
        let modalContent = $(".modal-content");

        console.log("modification de l'événement");

        let date = new Date(event.date_debut);
        let month = datepicker.addZero(date.getMonth() + 1);
        let day = datepicker.addZero(date.getDate());
        let dateFormated = `${date.getFullYear()}-${month}-${day}`;

        let heure_debut = `${datepicker.addZero(
            new Date(event.date_debut).getHours()
        )}:${datepicker.addZero(new Date(event.date_debut).getMinutes())}`;
        let heure_fin = `${datepicker.addZero(
            new Date(event.date_fin).getHours()
        )}:${datepicker.addZero(new Date(event.date_fin).getMinutes())}`;

        console.log(heure_debut);
        console.log(heure_fin);

        let optionsHeures = "";
        for (let i = 0; i <= 47; ++i) {
            let heure = datepicker.addZero(Math.floor(i / 2));

            if (i % 2 == 0) {
                heure += ":00";
                optionsHeures += `<option value="${heure}" ${
                    heure == heure_debut ? "selected" : ""
                }>${heure}</option>`;
            } else {
                heure += `:30`;
                optionsHeures += `<option value="${heure}" ${
                    heure == heure_fin ? "selected" : ""
                }>${heure}</option>`;
            }
        }

        Modal.resetModal();
        modalContent.append(`
        <form id="updateForm">
        <label for="name">Nom : <input type="text" id="name" value="${event.name}"></label><br>
        <label for="categorie">Catégorie : <input type="text" id="categorie" value="${event.categorie}"></label><br>
        <label for="date">Date : <input type="date" id="date" value="${dateFormated}"></label><br>
        <label for="heure-debut">Heure du début : <select id="heure-debut">${optionsHeures}</select></label>
        <label for="heure-fin">Heure de fin : <select id="heure-fin">${optionsHeures}</select></label>

        <button id="modifier-event">Accepter</button>
        </form>
        `);

        $("#modifier-event").on("click", evt => {
            evt.preventDefault();

            let date = $("#date").val();
            let heure_debut = $("#heure-debut").val();
            let heure_fin = $("#heure-fin").val();

            let eventUpdated = {};
            eventUpdated.name = $("#name").val();
            eventUpdated.categorie = $("#categorie").val();
            eventUpdated.date_debut = new Date(`${date} ${heure_debut}`);
            eventUpdated.date_fin = new Date(`${date} ${heure_fin}`);

            console.group("Envoi ajax PUT");
            console.log(eventUpdated);
            Events.updateEvent(eventUpdated);
            console.groupEnd;

            Modal.closeModal();
        });
    }
}
