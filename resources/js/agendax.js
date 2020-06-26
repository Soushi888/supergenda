let Agenda = (() => {
    'use strict';
    return {
        afficherGrille: () => {
            let tbody = $(".agenda tbody")[0];
            let modele = $("#modele");
            console.log(modele);
            console.log(tbody);

            for (let i = 0; i < 48; ++i) {
                let tr = modele.clone().appendTo(tbody);
                tr.removeAttr("id", "modele");
                // console.log(tr);

                let tdHeure = tr.find("td.heure");
                console.log(tdHeure);

                let heure = () => {
                    let heure = Math.floor(i / 2);
                    let minutes = "00";
                    if (i % 2 !== 0) {
                        minutes = "30";
                        tr.addClass("etDemi");
                        console.log(tr);
                    } else {
                        minutes = "00";
                    }
                    return `${heure}h${minutes}`;
                };

                tdHeure.text(heure);
            }
        }
    };
})();

Agenda.afficherGrille();
