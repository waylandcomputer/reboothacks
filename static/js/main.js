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
function nextDay() {
    if (curr_day === "Friday 3/26") {
        curr_day = "Saturday 3/27";
        document.getElementById("schedule-table").innerHTML = `
        <thead>
            <tr>
                <th>Time</th>
                <th>Event</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>6:00 AM</td>
                <td>Halfway Break</td>
            </tr>
            <tr>
                <td>6:05 AM</td>
                <td>Workshops</td>
            </tr>
            <tr>
                <td>6:10 AM</td>
                <td>Closing Ceremony</td>
            </tr>
            <tr>
                <td>6:15 AM</td>
                <td>Judging</td>
            </tr>
            <tr>
                <td>8:00 PM</td>
                <td>Awards</td>
            </tr>
            <tr>
                <td>8:30 PM</td>
                <td>Rip we aleady did the closing ceremony</td>
            </tr>
            <tr>
                <td>9:00 PM</td>
                <td>Looks like there's nothing to do on Saturday</td>
            </tr>
            </tbody>
        `;
    } else if (curr_day === "Saturday 3/27") {
        curr_day = "Saturday 3/13";
        document.getElementById("schedule-table").innerHTML = `
        <thead>
            <tr>
                <th>Time</th>
                <th>Event</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>9:00 AM</td>
                <td>Something</td>
            </tr>
            <tr>
                <td>10:00 AM</td>
                <td>Workshops</td>
            </tr>
            <tr>
                <td>12:00 AM</td>
                <td>Lunch Break</td>
            </tr>
            <tr>
                <td>1:00 AM</td>
                <td>idk</td>
            </tr>
            <tr>
                <td>2:00 PM</td>
                <td>something</td>
            </tr>
            <tr>
                <td>2:01 PM</td>
                <td>Everyone should go home early</td>
            </tr>
            <tr>
                <td>2:02 PM</td>
                <td>Stragglers get kicked out</td>
            </tr>
            </tbody>
        `;
    } else if (curr_day === "Saturday 3/13") {
        curr_day = "Saturday 3/20";
        document.getElementById("schedule-table").innerHTML = `
        <thead>
            <tr>
                <th>Time</th>
                <th>Event</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>3:00 AM</td>
                <td>Why do we have two of these</td>
            </tr>
            <tr>
                <td>4:00 AM</td>
                <td>Sleep</td>
            </tr>
            <tr>
                <td>5:00 AM</td>
                <td>I've run out of</td>
            </tr>
            <tr>
                <td>6:00 AM</td>
                <td>ideas...</td>
            </tr>
            <tr>
                <td>7:00 AM</td>
                <td>More sleep</td>
            </tr>
            <tr>
                <td>8:00 AM</td>
                <td>Breakfast</td>
            </tr>
            <tr>
                <td>9:00 AM</td>
                <td>Sleeeep</td>
            </tr>
            </tbody>
        `;
    } else if (curr_day === "Saturday 3/20") {
        curr_day = "Friday 3/26";
        document.getElementById("schedule-table").innerHTML = `
        <thead>
            <tr>
                <th>Time</th>
                <th>Event</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>6:00 AM</td>
                <td>Nothing</td>
            </tr>
            <tr>
                <td>8:00 AM</td>
                <td>Still nothing</td>
            </tr>
            <tr>
                <td>10:00 AM</td>
                <td>Workshop</td>
            </tr>
            <tr>
                <td>12:00 AM</td>
                <td>Stuff</td>
            </tr>
            <tr>
                <td>2:00 PM</td>
                <td>Keep doing stuff</td>
            </tr>
            <tr>
                <td>4:00 PM</td>
                <td>idk</td>
            </tr>
            <tr>
                <td>6:00 PM</td>
                <td>k</td>
            </tr>
            </tbody>
        `;
    }

    document.getElementById("schedule-date").innerHTML = curr_day;
}

function prevDay() {
    if (curr_day === "Friday 3/26") {
        curr_day = "Saturday 3/20";
        document.getElementById("schedule-table").innerHTML = `
        <thead>
            <tr>
                <th>Time</th>
                <th>Event</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>6:00 AM</td>
                <td>Halfway Break</td>
            </tr>
            <tr>
                <td>6:05 AM</td>
                <td>Workshops</td>
            </tr>
            <tr>
                <td>6:10 AM</td>
                <td>Closing Ceremony</td>
            </tr>
            <tr>
                <td>6:15 AM</td>
                <td>Judging</td>
            </tr>
            <tr>
                <td>8:00 PM</td>
                <td>Awards</td>
            </tr>
            <tr>
                <td>8:30 PM</td>
                <td>Rip we aleady did the closing ceremony</td>
            </tr>
            <tr>
                <td>9:00 PM</td>
                <td>Looks like there's nothing to do on Saturday</td>
            </tr>
            </tbody>
        `;
    } else if (curr_day === "Saturday 3/27") {
        curr_day = "Friday 3/26";
        document.getElementById("schedule-table").innerHTML = `
        <thead>
            <tr>
                <th>Time</th>
                <th>Event</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>9:00 AM</td>
                <td>Something</td>
            </tr>
            <tr>
                <td>10:00 AM</td>
                <td>Workshops</td>
            </tr>
            <tr>
                <td>12:00 AM</td>
                <td>Lunch Break</td>
            </tr>
            <tr>
                <td>1:00 AM</td>
                <td>idk</td>
            </tr>
            <tr>
                <td>2:00 PM</td>
                <td>something</td>
            </tr>
            <tr>
                <td>2:01 PM</td>
                <td>Everyone should go home early</td>
            </tr>
            <tr>
                <td>2:02 PM</td>
                <td>Stragglers get kicked out</td>
            </tr>
            </tbody>
        `;
    } else if (curr_day === "Saturday 3/13") {
        curr_day = "Saturday 3/27";
        document.getElementById("schedule-table").innerHTML = `
        <thead>
            <tr>
                <th>Time</th>
                <th>Event</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>3:00 AM</td>
                <td>Why do we have two of these</td>
            </tr>
            <tr>
                <td>4:00 AM</td>
                <td>Sleep</td>
            </tr>
            <tr>
                <td>5:00 AM</td>
                <td>I've run out of</td>
            </tr>
            <tr>
                <td>6:00 AM</td>
                <td>ideas...</td>
            </tr>
            <tr>
                <td>7:00 AM</td>
                <td>More sleep</td>
            </tr>
            <tr>
                <td>8:00 AM</td>
                <td>Breakfast</td>
            </tr>
            <tr>
                <td>9:00 AM</td>
                <td>Sleeeep</td>
            </tr>
            </tbody>
        `;
    } else if (curr_day === "Saturday 3/20") {
        curr_day = "Saturday 3/13";
        document.getElementById("schedule-table").innerHTML = `
        <thead>
            <tr>
                <th>Time</th>
                <th>Event</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>6:00 AM</td>
                <td>Nothing</td>
            </tr>
            <tr>
                <td>8:00 AM</td>
                <td>Still nothing</td>
            </tr>
            <tr>
                <td>10:00 AM</td>
                <td>Workshop</td>
            </tr>
            <tr>
                <td>12:00 AM</td>
                <td>Stuff</td>
            </tr>
            <tr>
                <td>2:00 PM</td>
                <td>Keep doing stuff</td>
            </tr>
            <tr>
                <td>4:00 PM</td>
                <td>idk</td>
            </tr>
            <tr>
                <td>6:00 PM</td>
                <td>k</td>
            </tr>
            </tbody>
        `;
    }

    document.getElementById("schedule-date").innerHTML = curr_day;
}


