<template>
  <v-container>
    <h1>Main Sale Started!</h1>
    <h2>from now to {{ dueDate.format('MMMM Do YYYY, h:mm:ss') }}</h2>
    <div>
      <span>{{ year }} years</span>
      <span>{{ month }} months</span>
      <span>{{ day }} days</span>
      <span>{{ hour }} hours</span>
      <span>{{ minute }} minutes</span>
      <span>{{ second }} seconds</span>
    </div>
  </v-container>
</template>

<script>
import moment from 'moment';

export default {
  name: 'CountDownTimer',
  props: {
    endDate: {
      type: String,
      default: '',
    },
    timeZone: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      dueDate: moment(this.endDate),
      duration: null,
      timer: null,
    };
  },
  mounted() {
    this.dueDate = moment(this.endDate);
    this.timer = setInterval(this.countDown, 500);
  },
  computed: {
    year() {
      return (this.duration) ? this.duration.years() : 0;
    },
    month() {
      return (this.duration) ? this.duration.months() : 0;
    },
    day() {
      return (this.duration) ? this.duration.days() : 0;
    },
    hour() {
      return (this.duration) ? this.duration.hours() : 0;
    },
    minute() {
      return (this.duration) ? this.duration.minutes() : 0;
    },
    second() {
      return (this.duration) ? this.duration.seconds() : 0;
    },
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    countDown() {
      this.duration = moment.duration(this.dueDate.diff(new Date()));
    },
  },
};
</script>
