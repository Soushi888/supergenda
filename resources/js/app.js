"use strict";
require("./bootstrap");
require("./agendax.js");
require("./jquery.calendar.js");
require("./WeekHistory.js");

$("#calendar-container").scrollableCalendar({
    // star date
    startDate: "2012-01-01",

    // end date
    endDate: "2022-01-22",

    // "latest-week" or a date
    currentWeek: "latest-week",

    // default is 0 for Sunday - can be from 0 to 6 (I'm using zero based as that's how Date.getDay() works)
    startDay: 0,

    // highlights the current week
    highlight: true,

    // array of true/false for week status
    readWeeks: [],

    // for different languages
    dayNames: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
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
    thumbHeight: 45,
    touchRowHeight: 48,
    nonTouchRowHeight: 29,

    // callback
    onClick: function() {
        window.alert(this);
    },

    // The final values for rowHeight & rowCount are set programably - any presets or options values are ignored
    // This value is set in validateSettings function (any value passed in is ignored)
    rowHeight: 29,
    // This value is set in the init function (any value passed in is ignored)
    rowCount: 0
});

console.log("app.js loaded");
