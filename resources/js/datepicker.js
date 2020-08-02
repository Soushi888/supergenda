/**
 * Classe contenant des methodes statiques aidant à traiter les dates
 */
class datepicker {
    /**
     * Si le nombre donné en paramètre (qu'il soit sous forme d'entier ou de caractère) est inclusivement compris entre 1 et 9, ajoute un zéro devant.
     * @param {number} number
     * @returns {string}
     */
    static addZero(number) {
        return 0 + number;
    }

    /**
     * Retourne la date de la journée donnée d'une semaine donnée. 0 étant dimanche et 6 étant samedi.
     * @param {Date} date
     * @param {number} jours
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
     * Retourne le nom en français du numéro de la journée de semaine donné en paramètre.
     * @param {number} jours
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
     * @param {number} mois
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
