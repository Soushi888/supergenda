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

"use strict";

class datepicker {
    /**
     * Si le nombre donné en paramètre (qu'il soit sous forme d'entier ou de caractère) est inclusivement compris entre 1 et 9, ajoute un zéro devant.
     * @param {*} number
     * @returns {string}
     */
    static addZero(number) {
        switch (number) {
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
     * @param {Int} jours
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
     * @param {Int} jours
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
     * @param {Int} mois
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
        this.URL_EVENTS = "http://supergenda.perso/api/event";

        this.logURL = this.logURL.bind(this);
    }


    static listeEvents() {
        const URL_EVENTS = "http://supergenda.perso/api/event";
        $.get(URL_EVENTS, data => {
            let list = $("#event_list ul");
            $(data).each(index => {
                let li = list.append(
                    `<li>Id = ${data[index].id}, nom = ${data[index].name}, catégorie = ${data[index].categorie}, date début = ${data[index].date_debut}, date fin = ${data[index].date_fin}</li>`
                );
            });
        });
    }
}

getEventsByWeek(monday) {

    $.get(this.URL_EVENTS, data => {
        // if
    })
}
class Calendrier {
    constructor() {
        // Génération du calendrier
        for (let i = 0; i <= 47; ++i) {
            let tr = $("#modele")
                .clone()
                .attr("id", "");

            let tdHeure = tr.children(".heure");

            let heure = Math.floor(i / 2);
            let tbody = $("tbody");

            if (i % 2 == 0) {
                tdHeure.text(`${heure}h00`);
            } else {
                tdHeure.text(`${heure}h30`);
                tr.css("border-bottom", "1px solid black");
            }
            tdHeure.css("border-right", "1px solid black");

            tbody.append(tr);

            this.afficherEvent = this.afficherEvent.bind(this);
        }
    }

    // Ajuste le numéro des jours à coté des nom des jours de la semaine dans le calendrier
    static ajusterSemaine(date) {
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
        )
    }

    afficherEvent() {
        // new Events();
    }
}

"use strict";

class App {
    constructor() {
        new Calendrier();
        Events.listeEvents();

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
        Calendrier.ajusterSemaine(today);

        this.udpateDate();
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
            Calendrier.ajusterSemaine(evt.target.value);
        });
    }
}
new App();
