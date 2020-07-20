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
    let newYear = new Date(this.getFullYear(), 0, 1);
    let day = newYear.getDay() - dowOffset; //the day of week the year begins on
    day = day >= 0 ? day : day + 7;
    let daynum =
      Math.floor(
        (this.getTime() -
          newYear.getTime() -
          (this.getTimezoneOffset() - newYear.getTimezoneOffset()) * 60000) /
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
   * Si le nombre donné en paramètre est inclusivement compris entre 1 et 9, ajoute un zéro devant
   * @param {int} number 
   * @returns {int}
   */
  function addZero(number) {
    switch (number) {
      case 1:
        number = "01";
        break;
      case 2:
        number = "02";
        break;
      case 3:
        number = "03";
        break;
      case 4:
        number = "04";
        break;
      case 5:
        number = "05";
        break;
      case 6:
        number = "06";
        break;
      case 7:
        number = "07";
        break;
      case 8:
        number = "08";
        break;
      case 9:
        number = "09";
        break;
    }
  
    return number;
  }