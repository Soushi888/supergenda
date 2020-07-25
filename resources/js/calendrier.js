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
