<template>
  <v-flex tag="div" class="timer-wrapper" xs12 sm6 md4>
    <div class="timer-title">{{ $t('message.MainSection.timer_title') }}</div>
    <div class="timer-text">
      {{ $t('message.MainSection.timer_till') }}
      {{ dueDate.format('MMMM Do, h:mm a') }} PDT
    </div>
    <v-layout row wrap justify-space-between >
      <v-flex tag='li' sm1>
        <div class="timer-item">
          <div class="timer-time">{{ month }}</div>
          <div class="timer-label">{{ $t('message.MainSection.timer_months') }}</div>
        </div>
      </v-flex>
      <v-flex tag='li' sm1>
        <div class="timer-item">
          <div class="timer-time">{{ day }}</div>
          <div class="timer-label">{{ $t('message.MainSection.timer_days') }}</div>
        </div>
      </v-flex>
      <v-flex tag='li' sm1>
        <div class="timer-item">
          <div class="timer-time">{{ hour }}</div>
          <div class="timer-label">{{ $t('message.MainSection.timer_hours') }}</div>
        </div>
      </v-flex>
      <v-flex tag='li' sm1>
        <div class="timer-item">
          <div class="timer-time">{{ minute }}</div>
          <div class="timer-label">{{ $t('message.MainSection.timer_minutes') }}</div>
        </div>
      </v-flex>
      <v-flex tag='li' sm1>
        <div class="timer-item">
          <div class="timer-time">{{ second }}</div>
          <div class="timer-label">{{ $t('message.MainSection.timer_seconds') }}</div>
        </div>
      </v-flex>
    </v-layout>
  </v-flex>
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
<style scoped>
.timer-wrapper {
  margin-top: 2%;
  margin-bottom: 2%;
}
.timer-title {
  font-size: 250%;
  text-align: left;
  color: #F1CF69;
}
.timer-text {
  color: #F1CF69;
}
.timer-item {
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  width: 80px;
  border-radius: 10px;
  padding: 5px
}
.timer-time {
  font-size: 200%;
  padding: 2px;
}
.timer-label {
  font-size: 70%;
  color: grey;
  font-weight: bold;
}
</style>

