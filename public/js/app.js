/**
 * Returns the week number for this date.  dowOffset is the day of week the week
 * "starts" on for your locale - it can be from 0 to 6. If dowOffset is 1 (Monday),
 * the week returned is the ISO 8601 week number.
 * @param int dowOffset
 * @return int
 */
Date.prototype.getWeek = function(dowOffset) {
    /*getWeek() was developed by Nick Baicoianu at MeanFreePath: http://www.meanfreepath.com */

    dowOffset = typeof dowOffset == "int" ? dowOffset : 0; //default dowOffset to zero
    var newYear = new Date(this.getFullYear(), 0, 1);
    var day = newYear.getDay() - dowOffset; //the day of week the year begins on
    day = day >= 0 ? day : day + 7;
    var daynum =
        Math.floor(
            (this.getTime() -
                newYear.getTime() -
                (this.getTimezoneOffset() - newYear.getTimezoneOffset()) *
                    60000) /
                86400000
        ) + 1;
    var weeknum;
    //if the year starts before the middle of a week
    if (day < 4) {
        weeknum = Math.floor((daynum + day - 1) / 7) + 1;
        if (weeknum > 52) {
            nYear = new Date(this.getFullYear() + 1, 0, 1);
            nday = nYear.getDay() - dowOffset;
            nday = nday >= 0 ? nday : nday + 7;
            /*if the next year starts before the middle of
                  the week, it is week #1 of that year*/
            weeknum = nday < 4 ? 1 : 53;
        }
    } else {
        weeknum = Math.floor((daynum + day - 1) / 7);
    }
    return weeknum;
};

class Modal {
    constructor() {
        let modalElement = $("body").append(`<div class="modal">
            <div class="modal-content">
                <span class="close-button">&times;</span>
            </div>
        </div>`);
    }

    /**
     * Ouverture d'une fenêtre modal
     */
    static showModal() {
        let modal = $(".modal");

        modal.addClass("show-modal");

        $(".close-button").on("click", evt => {
            console.log("close");
            Modal.closeModal();
        });

        $("body").on("keydown", evt => {
            if (evt.key === "Escape") {
                Modal.closeModal();
            }
        });

        modal.on("click", evt => {
            if ($(evt.target).hasClass("modal")) {
                Modal.closeModal();
            }
        });
    }

    /**
     * Fermeture d'une fenêtre modal
     */
    static closeModal() {
        $(".modal").removeClass("show-modal");
        $(".modal-content").html("<span class='close-button'>&times;</span>");
    }

    /**
     * Réinitialisation du contenu du modal
     */
    static resetModal() {
        $(".modal-content").html("<span class='close-button'>&times;</span>");
    }
}

"use strict";

/**
 * Classe contenant des methodes statiques aidant à traiter les dates
 */
class datepicker {
    /**
     * Si le nombre donné en paramètre (qu'il soit sous forme d'entier ou de caractère) est inclusivement compris entre 1 et 9, ajoute un zéro devant.
     * @param {number} number
     * @returns {string}
     */
    static addZero(number) {
        switch (number) {
            case 0:
                number = "00";
                break;
            case "0":
                number = "00";
                break;
            case 1:
                number = "01";
                break;
            case "1":
                number = "01";
                break;
            case 2:
                number = "02";
                break;
            case "2":
                number = "02";
                break;
            case 3:
                number = "03";
                break;
            case "3":
                number = "03";
                break;
            case 4:
                number = "04";
                break;
            case "4":
                number = "04";
                break;
            case 5:
                number = "05";
                break;
            case "5":
                number = "05";
                break;
            case 6:
                number = "06";
                break;
            case "6":
                number = "06";
                break;
            case 7:
                number = "07";
                break;
            case "7":
                number = "07";
                break;
            case 8:
                number = "08";
                break;
            case "8":
                number = "08";
                break;
            case 9:
                number = "09";
                break;
            case "9":
                number = "09";
                break;
        }

        return number;
    }

    /**
     * Retourne la date de la journée donnée d'une semaine donnée. 0 étant dimanche et 6 étant samedi.
     * @param {Date} date
     * @param {number} jours
     */
    static getDateOfWeekDay(date, jours) {
        date = new Date(date);
        let day = date.getDay();

        if (day == 0) {
            date.setDate(date.getDate() + 7);
        }

        switch (jours) {
            case 0:
                if (day == 0) {
                    return new Date(date.setDate(date.getDate() - day));
                } else {
                    return new Date(date.setDate(date.getDate() - day + 7));
                }
            case 1:
                return new Date(
                    date.setDate(date.getDate() - day + (day == 0 ? -6 : 1))
                );
            case 2:
                return new Date(
                    date.setDate(date.getDate() - day + (day == 0 ? -5 : 2))
                );
            case 3:
                return new Date(
                    date.setDate(date.getDate() - day + (day == 0 ? -4 : 3))
                );
            case 4:
                return new Date(
                    date.setDate(date.getDate() - day + (day == 0 ? -3 : 4))
                );
            case 5:
                return new Date(
                    date.setDate(date.getDate() - day + (day == 0 ? -2 : 5))
                );
            case 6:
                return new Date(
                    date.setDate(date.getDate() - day + (day == 0 ? -1 : 6))
                );
        }
    }

    /**
     * Retourne le nom en fraçais du numéro de la journée de semaine donné en paramètre.
     * @param {number} jours
     */
    static nomJoursSemaine(jours) {
        switch (jours) {
            case 0:
                return "dimanche";
            case 1:
                return "lundi";
            case 2:
                return "mardi";
            case 3:
                return "mercredi";
            case 4:
                return "jeudi";
            case 5:
                return "vendredi";
            case 6:
                return "samedi";
        }
    }

    /**
     * Retourne le nom en français du numéro du mois donné en paramètre.
     * @param {number} mois
     */
    static nomMois(mois) {
        switch (mois) {
            case 0:
                return "janvier";
            case 1:
                return "février";
            case 2:
                return "mars";
            case 3:
                return "avril";
            case 4:
                return "mai";
            case 5:
                return "juin";
            case 6:
                return "juillet";
            case 7:
                return "aôut";
            case 8:
                return "septembre";
            case 9:
                return "octobre";
            case 10:
                return "novembre";
            case 11:
                return "décembre";
        }
    }
}

class Events {
    constructor() {
        this.URL_EVENTS = "http://supergenda.perso/api/event/";

        this.getEvents = this.getEvents.bind(this);
    }

    /**
     * Récupère les évenements du calendrier depuis l'API puis les enregistre dans le local storage
     */
    getEvents() {
        return $.get(this.URL_EVENTS, data => {
            localStorage.events = JSON.stringify(data);
            return data;
        });
    }

    updateEvent(event, eventUpdated) {
        $.ajax({
            url: `${this.URL_EVENTS}${event.id}`,
            type: "PUT",
            dataType: "json",
            data: {
                name: eventUpdated.name,
                date_debut: eventUpdated.date_debut,
                date_fin: eventUpdated.date_fin
            },
            success: () => {
                console.log("Mise à jours réalisée avec succès !");
            }
        });
    }
}

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

        this.udpateDate();

        this.afficherEvents(new Date(lundiCourant));
        this.selectEvent();

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

        let optionsHeures = "";

        Modal.resetModal();
        modalContent.append(`
        <label for="name">Nom : <input type="text" id="name" value="${
            event.name
        }"></label>
        <label for="categorie">Catégorie : <input type="text" id="categorie" value="${
            event.categorie
        }"></label>
        <label for="date">Date : <input type="date" id="date" value="${date.getFullYear()}-${month}-${day}"></label>
        <label for="heure-debut">Heure du début : <select id="heure-debut">${optionsHeures}</select></label>
        <label for="heure-fin">Heure de fin : <select id="heure-fin"></select></label>

        <button id="modifier-event">Accepter</button>
        `);

        let eventUpdated = {};
        eventUpdated.name = $("#name").val();
        eventUpdated.categorie = $("#categorie").val();

        $("#modifier-event").on("click", () => {
            console.log("Envoi ajax PUT");
        });
    }
}

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
