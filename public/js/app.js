"use strict";

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
    let newYear = new Date(this.getFullYear(), 0, 1);
    let day = newYear.getDay() - dowOffset; //the day of week the year begins on
    day = day >= 0 ? day : day + 7;
    let daynum =
        Math.floor(
            (this.getTime() -
                newYear.getTime() -
                (this.getTimezoneOffset() - newYear.getTimezoneOffset()) *
                    60000) /
                86400000
        ) + 1;
    let weeknum;
    //if the year starts before the middle of a week
    if (day < 4) {
        weeknum = Math.floor((daynum + day - 1) / 7) + 1;
        if (weeknum > 52) {
            let nYear = new Date(this.getFullYear() + 1, 0, 1);
            let nday = nYear.getDay() - dowOffset;
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

/**
 * Si le nombre donné en paramètre (qu'il soit sous forme d'entier ou de caractère) est inclusivement compris entre 1 et 9, ajoute un zéro devant.
 * @param {*} number
 * @returns {string}
 */
function addZero(number) {
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
function getDateOfWeekDay(date, jours) {
    date = new Date(date);
    let day = date.getDay();
    switch (jours) {
        case 0:
            return new Date(date.setDate(date.getDate() - day + 7));
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
function nomJoursSemaine(jours) {
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
function nomMois(mois) {
    mois++;
    switch (mois) {
        case 1:
            return "janvier";
        case 2:
            return "février";
        case 3:
            return "mars";
        case 4:
            return "avril";
        case 5:
            return "mai";
        case 6:
            return "juin";
        case 7:
            return "juillet";
        case 8:
            return "aôut";
        case 9:
            return "septembre";
        case 10:
            return "octobre";
        case 11:
            return "novembre";
        case 12:
            return "décembre";
    }
}

("use strict");

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
}

// Récupération de la liste des événements
let events = $.get("http://supergenda.perso/api/event", data => {
    // console.log(data);
    let list = $("#event_list ul");
    $(data).each(index => {
        let li = list.append(
            `<li>Id = ${data[index].id}, nom = ${data[index].name}</li>`
        );
    });
});

// initialise la date avec celle de la semaine courrante
let today = new Date();
let lundiCourant = getDateOfWeekDay(today, 1);

$("#selection-semaine span").text(
    `${nomJoursSemaine(lundiCourant.getDay())} ${
        lundiCourant.getDate()} ${nomMois(lundiCourant.getMonth())} ${lundiCourant.getFullYear()}`
);

// Change le lundi de la semaine qui est affiché à chaque fois que le input date change
$("#datepicker").on("change", evt => {
    let nouveauLundi = getDateOfWeekDay(evt.target.value, 1);

    $("#selection-semaine span").text(
        `${nomJoursSemaine(nouveauLundi.getDay())} ${
            nouveauLundi.getDate()} ${nomMois(nouveauLundi.getMonth())} ${nouveauLundi.getFullYear()}`
    );

    // Ajuste le numéro des jours à coté des nom des jours de la semaine dans le calendrier
    let numLundi = $(".lundi span").text(
        addZero(getDateOfWeekDay(evt.target.value, 1).getDate())
    );
    let numMardi = $(".mardi span").text(
        addZero(getDateOfWeekDay(evt.target.value, 2).getDate())
    );
    let numMercredi = $(".mercredi span").text(
        addZero(getDateOfWeekDay(evt.target.value, 3).getDate())
    );
    let numJeudi = $(".jeudi span").text(
        addZero(getDateOfWeekDay(evt.target.value, 4).getDate())
    );
    let numVendredi = $(".vendredi span").text(
        addZero(getDateOfWeekDay(evt.target.value, 5).getDate())
    );
    let numSamedi = $(".samedi span").text(
        addZero(getDateOfWeekDay(evt.target.value, 6).getDate())
    );
    let numDimanche = $(".dimanche span").text(
        addZero(getDateOfWeekDay(evt.target.value, 0).getDate())
    );
});
