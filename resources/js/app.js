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
            `<li>Id = ${data[index].id}, nom = ${data[index].name}, catégorie = ${data[index].categorie}, date début = ${data[index].date_debut}, date fin = ${data[index].date_fin}</li>`
        );
    });
});

// initialise la date avec celle de la semaine courrante
let today = new Date();
let lundiCourant = getDateOfWeekDay(today, 1);

$("#datepicker").val(today.getDate());
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
