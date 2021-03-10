"use strict";

var curr_day = "Friday 3/26"
var sat_20 = `
        <colgroup>
           <col style="width: 25%;">
           <col style="width: 75%;">
        </colgroup>
        <thead>
            <tr>
                <th>Time (EDT)</th>
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
                <td>Git workshop</td>
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
                <th>Time (EDT)</th>
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
                <td>Form your team!</td>
            </tr>
            <tr>
                <td>7:00 PM</td>
                <td>Intro speaker</td>
            </tr>
            <tr>
                <td>7:30 PM</td>
                <td>Keynote address</td>
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
                <th>Time (EDT)</th>
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
                <td>Data Science w/ Python</td>
            </tr>
            <tr>
                <td>10:00 AM</td>
                <td>Intro to programming</td>
            </tr>
            <tr>
                <td>11:00 AM</td>
                <td>Virtual reality development</td>
            </tr>
            <tr>
                <td>12:00 PM</td>
                <td>Check in & lunch</td>
            </tr>
            <tr>
                <td>2:00 PM</td>
                <td>Debugging w/ JavaScript</td>
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
        curr_day = "Saturday 3/20";
        document.getElementById("schedule-table").innerHTML = sat_20;
        // } else if (curr_day === "Saturday 3/13") {
        //     curr_day = "Saturday 3/20";
        //     document.getElementById("schedule-table").innerHTML = sat_20;
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
        // } else if (curr_day === "Saturday 3/13") {
        //     curr_day = "Saturday 3/27";
        //     document.getElementById("schedule-table").innerHTML = sat_27;
    } else if (curr_day === "Saturday 3/20") {
        curr_day = "Saturday 3/27";
        document.getElementById("schedule-table").innerHTML = sat_27;
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


var el = document.getElementById("countdown")

var Countdown = new Vue({

    el: el,

    template: ` 
  <div class="flip-clock" data-date="2021-03-26 00:00:00" @click="update">
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
            this.callback = this.callback || function () {
            };
            this.update();
        }
    },

    methods: {

        setCountdown(date) {
            this.countdown = moment(this.$el.getAttribute('data-date'));
        },

        update() {
            this.frame = requestAnimationFrame(this.update.bind(this));
            if (this.i++ % 10) {
                return;
            }
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

$('#recipeCarousel').carousel({
  interval: 10000
})

$('.carousel .carousel-item').each(function(){
    var minPerSlide = 1;
    var next = $(this).next();
    if (!next.length) {
    next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i=0;i<minPerSlide;i++) {
        next=next.next();
        if (!next.length) {
        	next = $(this).siblings(':first');
      	}

        next.children(':first-child').clone().appendTo($(this));
      }
});
