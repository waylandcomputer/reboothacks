"use strict";

function main(display) {
    var end = new Date("03/26/2021 12:00 AM");

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    setInterval(function () {

        var now = new Date();
        var distance = end - now;
        if (distance < 0) {
            clearInterval(timer);
            display.text("Registration is closed!");
            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        display.text("Registration closes in: " + days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds");
    }, 1000);
}

jQuery(function ($) {
    main($('#time'));
});

var curr_day = "Friday 3/26"
var sat_13 = `
        <colgroup>
           <col style="width: 25%;">
           <col style="width: 75%;">
        </colgroup>
        <thead>
            <tr>
                <th>Time</th>
                <th>Event</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>6:55 PM</td>
                <td>Stream starts!</td>
            </tr>
            <tr>
                <td>7:00 PM</td>
                <td>Introductions</td>
            </tr>
            <tr>
                <td>7:30 PM</td>
                <td>Challenge Introductions</td>
            </tr>
            <tr>
                <td>7:45 PM</td>
                <td>Speaker</td>
            </tr>
            <tr>
                <td>8:45 PM</td>
                <td>Demo</td>
            </tr>
            <tr>
                <td>9:00 PM</td>
                <td>Stream ends</td>
            </tr>
            </tbody>
        `;

var sat_20 = `
        <colgroup>
           <col style="width: 25%;">
           <col style="width: 75%;">
        </colgroup>
        <thead>
            <tr>
                <th>Time</th>
                <th>Event</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>6:55 PM</td>
                <td>Stream starts!</td>
            </tr>
            <tr>
                <td>7:00 PM</td>
                <td>Introductions</td>
            </tr>
            <tr>
                <td>7:30 PM</td>
                <td>Challenge Introductions</td>
            </tr>
            <tr>
                <td>7:45 PM</td>
                <td>Speaker</td>
            </tr>
            <tr>
                <td>8:45 PM</td>
                <td>Demo</td>
            </tr>
            <tr>
                <td>9:00 PM</td>
                <td>Stream ends</td>
            </tr>
            </tbody>
        `;

var fri_26 = `
        <colgroup>
           <col style="width: 25%;">
           <col style="width: 75%;">
        </colgroup>
        <thead>
            <tr>
                <th>Time</th>
                <th>Event</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>6:00 PM</td>
                <td>Opening ceromony starts</td>
            </tr>
            <tr>
                <td>6:15 PM</td>
                <td>Challenge Introductions</td>
            </tr>
            <tr>
                <td>6:45 PM</td>
                <td>Finding a team, slack tutorial</td>
            </tr>
            <tr>
                <td>7:00 PM</td>
                <td>Intro speaker</td>
            </tr>
            <tr>
                <td>7:30 PM</td>
                <td>Keynote speaker</td>
            </tr>
            <tr>
                <td>8:30 PM</td>
                <td>Preview the next day</td>
            </tr>
            <tr>
                <td>9:00 PM</td>
                <td>Hacking begins!</td>
            </tr>
            </tbody>
        `;

var sat_27 = `
        <colgroup>
           <col style="width: 25%;">
           <col style="width: 75%;">
        </colgroup>
        <thead>
            <tr>
                <th>Time</th>
                <th>Event</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>8:30 AM</td>
                <td>Check in</td>
            </tr>
            <tr>
                <td>9:00 AM</td>
                <td>Git workshop</td>
            </tr>
            <tr>
                <td>10:00 AM</td>
                <td>Workshop space open</td>
            </tr>
            <tr>
                <td>11:00 AM</td>
                <td>Speaker</td>
            </tr>
            <tr>
                <td>12:00 PM</td>
                <td>Check in & lunch</td>
            </tr>
            <tr>
                <td>1:30 PM</td>
                <td>Speaker</td>
            </tr>
            <tr>
                <td>4:00 PM</td>
                <td>Final hour announcement</td>
            </tr>
            <tr>
                <td>5:00 PM</td>
                <td>Hacking ends!</td>
            </tr>
            <tr>
                <td>5:30 PM</td>
                <td>Demos & judging</td>
            </tr>
            <tr>
                <td>7:00 PM</td>
                <td>Awards Ceremony</td>
            </tr>
            </tbody>
        `;

function nextDay() {
    if (curr_day === "Friday 3/26") {
        curr_day = "Saturday 3/27";
        document.getElementById("schedule-table").innerHTML = sat_27;
    } else if (curr_day === "Saturday 3/27") {
        curr_day = "Saturday 3/13";
        document.getElementById("schedule-table").innerHTML = sat_13;
    } else if (curr_day === "Saturday 3/13") {
        curr_day = "Saturday 3/20";
        document.getElementById("schedule-table").innerHTML = sat_20;
    } else if (curr_day === "Saturday 3/20") {
        curr_day = "Friday 3/26";
        document.getElementById("schedule-table").innerHTML = fri_26;
    }

    document.getElementById("schedule-date").innerHTML = curr_day;
}

function prevDay() {
    if (curr_day === "Friday 3/26") {
        curr_day = "Saturday 3/20";
        document.getElementById("schedule-table").innerHTML = sat_20;
    } else if (curr_day === "Saturday 3/27") {
        curr_day = "Friday 3/26";
        document.getElementById("schedule-table").innerHTML = fri_26;
    } else if (curr_day === "Saturday 3/13") {
        curr_day = "Saturday 3/27";
        document.getElementById("schedule-table").innerHTML = sat_27;
    } else if (curr_day === "Saturday 3/20") {
        curr_day = "Saturday 3/13";
        document.getElementById("schedule-table").innerHTML = sat_13;
    }

    document.getElementById("schedule-date").innerHTML = curr_day;
}


