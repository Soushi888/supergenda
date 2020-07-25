"use strict";
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
  var day = date.getDay();

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
      return new Date(date.setDate(date.getDate() - day + (day == 0 ? -6 : 1)));

    case 2:
      return new Date(date.setDate(date.getDate() - day + (day == 0 ? -5 : 2)));

    case 3:
      return new Date(date.setDate(date.getDate() - day + (day == 0 ? -4 : 3)));

    case 4:
      return new Date(date.setDate(date.getDate() - day + (day == 0 ? -3 : 4)));

    case 5:
      return new Date(date.setDate(date.getDate() - day + (day == 0 ? -2 : 5)));

    case 6:
      return new Date(date.setDate(date.getDate() - day + (day == 0 ? -1 : 6)));
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
} // Génération du calendrier


for (var i = 0; i <= 47; ++i) {
  var tr = $("#modele").clone().attr("id", "");
  var tdHeure = tr.children(".heure");
  var heure = Math.floor(i / 2);
  var tbody = $("tbody");

  if (i % 2 == 0) {
    tdHeure.text("".concat(heure, "h00"));
  } else {
    tdHeure.text("".concat(heure, "h30"));
    tr.css("border-bottom", "1px solid black");
  }

  tdHeure.css("border-right", "1px solid black");
  tbody.append(tr);
} // initialise la date avec celle de la semaine courrante


var today = new Date();
var lundiCourant = getDateOfWeekDay(today, 1);
$("#datepicker").val(today.getDate());
$("#selection-semaine span").text("".concat(nomJoursSemaine(lundiCourant.getDay()), " ").concat(lundiCourant.getDate(), " ").concat(nomMois(lundiCourant.getMonth()), " ").concat(lundiCourant.getFullYear())); // Change le lundi de la semaine qui est affiché à chaque fois que le input date change

$("#datepicker").on("change", function (evt) {
  var nouveauLundi = getDateOfWeekDay(evt.target.value, 1);
  $("#selection-semaine span").text("".concat(nomJoursSemaine(nouveauLundi.getDay()), " ").concat(nouveauLundi.getDate(), " ").concat(nomMois(nouveauLundi.getMonth()), " ").concat(nouveauLundi.getFullYear())); // Ajuste le numéro des jours à coté des nom des jours de la semaine dans le calendrier

  var numLundi = $(".lundi span").text(addZero(getDateOfWeekDay(evt.target.value, 1).getDate()));
  var numMardi = $(".mardi span").text(addZero(getDateOfWeekDay(evt.target.value, 2).getDate()));
  var numMercredi = $(".mercredi span").text(addZero(getDateOfWeekDay(evt.target.value, 3).getDate()));
  var numJeudi = $(".jeudi span").text(addZero(getDateOfWeekDay(evt.target.value, 4).getDate()));
  var numVendredi = $(".vendredi span").text(addZero(getDateOfWeekDay(evt.target.value, 5).getDate()));
  var numSamedi = $(".samedi span").text(addZero(getDateOfWeekDay(evt.target.value, 6).getDate()));
  var numDimanche = $(".dimanche span").text(addZero(getDateOfWeekDay(evt.target.value, 0).getDate()));
}); // Récupération de la liste des événements

var events = $.get("http://supergenda.perso/api/event", function (data) {
  // console.log(data);
  var list = $("#event_list ul");
  $(data).each(function (index) {
    var li = list.append("<li>Id = ".concat(data[index].id, ", nom = ").concat(data[index].name, ", cat\xE9gorie = ").concat(data[index].categorie, ", date d\xE9but = ").concat(data[index].date_debut, ", date fin = ").concat(data[index].date_fin, "</li>"));
  });
});
