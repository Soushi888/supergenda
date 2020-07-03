'use strict';
function startOfWeek(date) {
    var diff = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);

    return new Date(date.setDate(diff));
}

let current_week = startOfWeek(new Date());
let current_month = current_week.getMonth();

if (current_month < 10) {
    current_month = "0" + current_month;
}

current_week = `${current_week.getFullYear()}-${current_month}-${current_week.getDate()}`;
$("#current-week span").html(current_week);

$("#calendar-container").scrollableCalendar({
    // star date
    startDate: "2020-01-01",

    // end date
    endDate: "2025-12-31",

    // default is 0 for Sunday - can be from 0 to 6 (I'm using zero based as that's how Date.getDay() works)
    startDay: 1,

    currentWeek: current_week,

    // highlights the current week
    highlight: true,

    // array of true/false for week status
    readWeeks: [],

    // for different languages
    dayNames: ["D", "L", "M", "M", "J", "V", "S"],
    monthNames: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ],

    // title of the calendar
    calendarTitle: "",

    // if true, calendar row heights are the touchRowHeight
    touch: false,

    // Heights are in pixels
    thumbHeight: 35,
    touchRowHeight: 48,
    nonTouchRowHeight: 29,

    // callback
    onClick: function() {
        $("#current-week span").html(this);
        console.log(this);

    },

    // The final values for rowHeight & rowCount are set programably - any presets or options values are ignored
    // This value is set in validateSettings function (any value passed in is ignored)
    rowHeight: 20,
    // This value is set in the init function (any value passed in is ignored)
    rowCount: 0
});
