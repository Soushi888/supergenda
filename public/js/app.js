function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Returns the week number for this date.  dowOffset is the day of week the week
 * "starts" on for your locale - it can be from 0 to 6. If dowOffset is 1 (Monday),
 * the week returned is the ISO 8601 week number.
 * @param int dowOffset
 * @return int
 */
Date.prototype.getWeek = function (dowOffset) {
  /*getWeek() was developed by Nick Baicoianu at MeanFreePath: http://www.meanfreepath.com */
  dowOffset = typeof dowOffset == "int" ? dowOffset : 0; //default dowOffset to zero

  var newYear = new Date(this.getFullYear(), 0, 1);
  var day = newYear.getDay() - dowOffset; //the day of week the year begins on

  day = day >= 0 ? day : day + 7;
  var daynum = Math.floor((this.getTime() - newYear.getTime() - (this.getTimezoneOffset() - newYear.getTimezoneOffset()) * 60000) / 86400000) + 1;
  var weeknum; //if the year starts before the middle of a week

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
/**
 * Classe contenant des methodes statiques aidant à traiter les dates
 */


var datepicker = /*#__PURE__*/function () {
  function datepicker() {
    _classCallCheck(this, datepicker);
  }

  _createClass(datepicker, null, [{
    key: "addZero",

    /**
     * Si le nombre donné en paramètre (qu'il soit sous forme d'entier ou de caractère) est inclusivement compris entre 1 et 9, ajoute un zéro devant.
     * @param {*} number
     * @returns {string}
     */
    value: function addZero(number) {
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

  }, {
    key: "getDateOfWeekDay",
    value: function getDateOfWeekDay(date, jours) {
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
     * @param {number} jours
     */

  }, {
    key: "nomJoursSemaine",
    value: function nomJoursSemaine(jours) {
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

  }, {
    key: "nomMois",
    value: function nomMois(mois) {
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
  }]);

  return datepicker;
}();

var Events = /*#__PURE__*/function () {
  function Events() {
    _classCallCheck(this, Events);

    this.URL_EVENTS = "http://supergenda.perso/api/event";
    this.getEvents = this.getEvents.bind(this);
  }
  /**
   * Récupère les évenements du calendrier depuis l'API puis les enregistre dans le local storage
   */


  _createClass(Events, [{
    key: "getEvents",
    value: function getEvents() {
      $.get(this.URL_EVENTS, function (data) {
        localStorage.events = JSON.stringify(data);
      });
    }
    /**
     * Récupère les événements stockés dans le local storage puis les liste
     */

  }, {
    key: "listerEvents",
    value: function listerEvents() {
      var events = JSON.parse(localStorage.events);
      var list = $("#event_list ul");
      $(events).each(function (index) {
        var li = list.append("<li>Id = ".concat(events[index].id, ", nom = ").concat(events[index].name, ", cat\xE9gorie = ").concat(events[index].categorie, ", date d\xE9but = ").concat(events[index].date_debut, ", date fin = ").concat(events[index].date_fin, "</li>"));
      });
    }
  }]);

  return Events;
}();

var Semainier = /*#__PURE__*/function () {
  /**
   * Génère la structure du semainier
   */
  function Semainier() {
    _classCallCheck(this, Semainier);

    // Génération du semainier
    for (var i = 0; i <= 47; ++i) {
      var tr = $("#modele").clone().attr("id", "");
      var tdHeure = tr.children(".heure");
      var heure = Math.floor(i / 2);
      var tbody = $("tbody");
      var td = tr.children("td");

      if (i % 2 == 0) {
        tdHeure.text("".concat(heure, "h00"));
        td.data("houre", "".concat(datepicker.addZero(heure), ":00"));
      } else {
        tdHeure.text("".concat(heure, "h30"));
        td.data("houre", "".concat(datepicker.addZero(heure), ":30"));
        tr.css("border-bottom", "1px solid black");
      }

      tdHeure.css("border-right", "1px solid black");
      tbody.append(tr);
      this.afficherEvent = this.afficherEvent.bind(this);
    }
  }
  /**
   * Ajuste le numéro des jours à coté des nom des jours de la semaine dans le semainier
   * @param {Date} date 
   */


  _createClass(Semainier, [{
    key: "afficherEvent",

    /**
     * Affiche dans le semainier les événements stockés dans le localStorage d'une semaine en particulier
     * @param {Date} monday
     */
    value: function afficherEvent(monday) {
      var year = monday.getFullYear();
      var week = monday.getWeek();
      $("td").removeClass("event start-event end-event");
      var events = [];
      $(JSON.parse(localStorage.events)).each(function (index, element) {
        var yearEvent = new Date(element.date_debut).getFullYear();
        var weekEvent = new Date(element.date_debut).getWeek();

        if (yearEvent == year && weekEvent == week) {
          events.push(element);
        }
      });
      $(events).each(function (index, element) {
        var date_debut = new Date(element.date_debut);
        var date_fin = new Date(element.date_fin);
        var id = element.id;
        var jours = datepicker.nomJoursSemaine(date_debut.getDay());
        var heure_debut = "".concat(datepicker.addZero(date_debut.getHours()), ":").concat(datepicker.addZero(date_debut.getMinutes()));
        var heure_fin = "".concat(datepicker.addZero(date_fin.getHours()), ":").concat(datepicker.addZero(date_fin.getMinutes()));
        $("td.".concat(jours)).each(function (index, element) {
          if ($(element).data("houre") == heure_debut) {
            $(element).addClass("event");
            $(element).addClass("start-event");
            $(element).data("id", id);
          }

          if ($(element).data("houre") == heure_fin) {
            $(element).parent().prev().children(".".concat(jours)).addClass("event");
            $(element).parent().prev().children(".".concat(jours)).addClass("end-event");
            $(element).data("id", id);
          }

          if ($(element).data("houre") > heure_debut && $(element).data("houre") < heure_fin) {
            $(element).addClass("event");
            $(element).data("id", id);
          }
        });
      });
    }
    /**
     * Selection d'un événement du semainier
     */

  }, {
    key: "selectEvent",
    value: function selectEvent() {
      var events = JSON.parse(localStorage.events),
          jours = [],
          col = [];

      for (var i = 0; i <= 6; ++i) {
        jours.push(datepicker.nomJoursSemaine(i));
        col.push($("td.".concat(jours[i])));
        col[i].each(function (index, element) {
          if ($(element).data("id")) {
            var event;
            $(events).each(function (index, eventChecked) {
              if (eventChecked.id == $(element).data("id")) {
                event = eventChecked;
              }
            });
            $(element).on("click", function (evt) {
              console.log(event);
            }); // Effet de hover lorsque l'utilisateur passe sa souris sur un événement

            $(element).on("mouseenter", function (evt) {
              var startEvent = $(".start-event");
              $(startEvent).each(function (index, element) {
                if ($(element).data("id") == event.id) {
                  $(element).css("box-shadow", "0px -9px 8px -3px rgba(0,0,0,0.7)");
                }
              });
              var endEvent = $(".end-event");
              $(endEvent).each(function (index, element) {
                if ($(element).data("id") == event.id) {
                  $(element).css("box-shadow", "0px 9px 8px -3px rgba(0,0,0,0.7)");
                }
              });
            });
            $(element).on("mouseout", function (evt) {
              var startEvent = $(".start-event");
              $(startEvent).each(function (index, element) {
                if ($(element).data("id") == event.id) {
                  $(element).css("box-shadow", "");
                }
              });
              var endEvent = $(".end-event");
              $(endEvent).each(function (index, element) {
                if ($(element).data("id") == event.id) {
                  $(element).css("box-shadow", "");
                }
              });
            });
          }
        });
      }
    }
  }], [{
    key: "ajusterSemaine",
    value: function ajusterSemaine(date) {
      var numLundi = $(".lundi span").text(datepicker.addZero(datepicker.getDateOfWeekDay(date, 1).getDate()));
      var numMardi = $(".mardi span").text(datepicker.addZero(datepicker.getDateOfWeekDay(date, 2).getDate()));
      var numMercredi = $(".mercredi span").text(datepicker.addZero(datepicker.getDateOfWeekDay(date, 3).getDate()));
      var numJeudi = $(".jeudi span").text(datepicker.addZero(datepicker.getDateOfWeekDay(date, 4).getDate()));
      var numVendredi = $(".vendredi span").text(datepicker.addZero(datepicker.getDateOfWeekDay(date, 5).getDate()));
      var numSamedi = $(".samedi span").text(datepicker.addZero(datepicker.getDateOfWeekDay(date, 6).getDate()));
      var numDimanche = $(".dimanche span").text(datepicker.addZero(datepicker.getDateOfWeekDay(date, 0).getDate()));
    }
  }]);

  return Semainier;
}();

"use strict";

var App = /*#__PURE__*/function () {
  function App() {
    _classCallCheck(this, App);

    this.semainier = new Semainier();
    var events = new Events();
    events.getEvents();
    events.listerEvents(); // initialise la date avec celle de la semaine courrante

    var today = new Date();
    today.setDate(today.getDate() - 1);
    var lundiCourant = datepicker.getDateOfWeekDay(today, 1);
    $("#datepicker").val(today.getDate());
    $("#selection-semaine span").text("".concat(datepicker.nomJoursSemaine(lundiCourant.getDay()), " ").concat(lundiCourant.getDate(), " ").concat(datepicker.nomMois(lundiCourant.getMonth()), " ").concat(lundiCourant.getFullYear()));
    Semainier.ajusterSemaine(today);
    this.udpateDate();
    this.semainier.afficherEvent(new Date(lundiCourant));
    this.semainier.selectEvent();
  }

  _createClass(App, [{
    key: "udpateDate",
    value: function udpateDate() {
      var _this = this;

      // Change le lundi de la semaine qui est affiché à chaque fois que le input date change
      $("#datepicker").on("change", function (evt) {
        var nouveauLundi = datepicker.getDateOfWeekDay(evt.target.value, 1);
        $("#selection-semaine span").text("".concat(datepicker.nomJoursSemaine(nouveauLundi.getDay()), " ").concat(nouveauLundi.getDate(), " ").concat(datepicker.nomMois(nouveauLundi.getMonth()), " ").concat(nouveauLundi.getFullYear()));
        var dateSelect = evt.target.value;
        Semainier.ajusterSemaine(evt.target.value);

        _this.semainier.afficherEvent(new Date(nouveauLundi));

        _this.semainier.selectEvent();
      });
    }
  }]);

  return App;
}();

new App();
