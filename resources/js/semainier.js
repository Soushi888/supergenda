class Semainier {
    /**
     * Génère la structure du semainier
     */
    constructor() {
        // Génération du semainier
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

            this.afficherEvent = this.afficherEvent.bind(this);
        }
    }

    /**
     * Ajuste le numéro des jours à coté des nom des jours de la semaine dans le semainier
     * @param {Date} date 
     */
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
        );
    }

    /**
     * Affiche dans le semainier les événements stockés dans le localStorage d'une semaine en particulier
     * @param {Date} monday
     */
    afficherEvent(monday) {
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
}
