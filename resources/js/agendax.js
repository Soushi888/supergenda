let Agenda = (() => {
    "use strict";

    let data = $.get("api/event", data => {
        console.log(data);
        return data;
    });
    return {
        afficherGrille: () => {
            let tbody = $(".agenda tbody")[0];
            let modele = $("#modele");

            for (let i = 0; i < 48; ++i) {
                let tr = modele.clone().appendTo(tbody);
                tr.removeAttr("id", "modele");

                let tdHeure = tr.find("td.heure");

                let heure = () => {
                    let heure = Math.floor(i / 2);
                    let minutes = "00";
                    if (i % 2 !== 0) {
                        minutes = "30";
                        tr.addClass("etDemi");
                    } else {
                        minutes = "00";
                    }
                    return `${heure}h${minutes}`;
                };

                tdHeure.text(heure);
            }
        },
        getEvents: () => data
    };
})();

Agenda.afficherGrille();
Agenda.getEvents()

// console.log(Agenda.getEvents());
