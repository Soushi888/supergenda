import $ from "jquery";

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

console.log(addzero("4"));