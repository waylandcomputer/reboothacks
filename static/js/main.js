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

Vue.filter('zerofill', function (value) {
    //value = ( value < 0 ? 0 : value );
    return (value < 10 && value > -1 ? '0' : '') + value;
});

var Tracker = Vue.extend({
    template: `
    <span v-show="show" class="flip-clock__piece">
      <span class="flip-clock__card flip-card">
        <b class="flip-card__top">{{current | zerofill}}</b>
        <b class="flip-card__bottom" data-value="{{current | zerofill}}"></b>
        <b class="flip-card__back" data-value="{{previous | zerofill}}"></b>
        <b class="flip-card__back-bottom" data-value="{{previous | zerofill}}"></b>
      </span>
      <span class="flip-clock__slot">{{property}}</span>
    </span>`,
    props: ['property', 'time'],
    data: () => ({
        current: 0,
        previous: 0,
        show: false
    }),

    events: {
        time(newValue) {

            if (newValue[this.property] === undefined) {
                this.show = false;
                return;
            }

            var val = newValue[this.property];
            this.show = true;

            val = (val < 0 ? 0 : val);

            if (val !== this.current) {

                this.previous = this.current;
                this.current = val;

                this.$el.classList.remove('flip');
                void this.$el.offsetWidth;
                this.$el.classList.add('flip');
            }

        }
    },

});



var el = document.createElement('div');
document.body.appendChild(el);

var Countdown = new Vue({

    el: el,

    template: ` 
    <div class="flip-clock" data-date="2017-02-11" @click="update">
      <tracker 
        v-for="tracker in trackers"
        :property="tracker"
        :time="time"
        v-ref:trackers
      ></tracker>
    </div>
    `,

    props: ['date', 'callback'],

    data: () => ({
        time: {},
        i: 0,
        trackers: ['Days', 'Hours', 'Minutes', 'Seconds'] //'Random', 
    }),

    components: {
        Tracker
    },

    beforeDestroy() {
        if (window['cancelAnimationFrame']) {
            cancelAnimationFrame(this.frame);
        }
    },

    watch: {
        'date': function (newVal) {
            this.setCountdown(newVal);
        }
    },

    ready() {
        if (window['requestAnimationFrame']) {
            this.setCountdown(this.date);
            this.callback = this.callback || function () { };
            this.update();
        }
    },

    methods: {

        setCountdown(date) {

            if (date) {
                this.countdown = moment(date, 'YYYY-MM-DD HH:mm:ss');
            } else {
                this.countdown = moment().endOf('day');  //this.$el.getAttribute('data-date');
            }
        },

        update() {
            this.frame = requestAnimationFrame(this.update.bind(this));
            if (this.i++ % 10) { return; }
            var t = moment(new Date());
            // Calculation adapted from https://www.sitepoint.com/build-javascript-countdown-timer-no-dependencies/
            if (this.countdown) {

                t = this.countdown.diff(t);

                //t = this.countdown.diff(t);//.getTime();
                //console.log(t);
                this.time.Days = Math.floor(t / (1000 * 60 * 60 * 24));
                this.time.Hours = Math.floor((t / (1000 * 60 * 60)) % 24);
                this.time.Minutes = Math.floor((t / 1000 / 60) % 60);
                this.time.Seconds = Math.floor((t / 1000) % 60);
            } else {
                this.time.Days = undefined;
                this.time.Hours = t.hours() % 13;
                this.time.Minutes = t.minutes();
                this.time.Seconds = t.seconds();
            }

            this.time.Total = t;

            this.$broadcast('time', this.time);
            return this.time;
        }
    }
});

