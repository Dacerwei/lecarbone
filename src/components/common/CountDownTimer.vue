<template>
  <div class="timer-wrapper">
    <v-layout row justify-space-between>
      <v-flex tag='li' xs2>
        <div class="timer-item">
          <div class="timer-time">{{ month }}</div>
          <div class="timer-label">{{ $t('message.MainSection.timer_months') }}</div>
        </div>
      </v-flex>
      <v-flex tag='li' xs2>
        <div class="timer-item">
          <div class="timer-time">{{ day }}</div>
          <div class="timer-label">{{ $t('message.MainSection.timer_days') }}</div>
        </div>
      </v-flex>
      <v-flex tag='li' xs2>
        <div class="timer-item">
          <div class="timer-time">{{ hour }}</div>
          <div class="timer-label">{{ $t('message.MainSection.timer_hours') }}</div>
        </div>
      </v-flex>
      <v-flex tag='li' xs2>
        <div class="timer-item">
          <div class="timer-time">{{ minute }}</div>
          <div class="timer-label">{{ $t('message.MainSection.timer_minutes') }}</div>
        </div>
      </v-flex>
      <v-flex tag='li' xs2>
        <div class="timer-item">
          <div class="timer-time">{{ second }}</div>
          <div class="timer-label">{{ $t('message.MainSection.timer_seconds') }}</div>
        </div>
      </v-flex>
    </v-layout>
  </div>
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
li {
  list-style: none;
}

.timer-wrapper {
  margin-top: 5%;
  margin-bottom: 5%;
}
.timer-item {
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  max-width: 80px;
  min-width: 60px;
  height: 100px;
  border-radius: 10px;
  padding: 5px;
  margin: 0 auto;
}
.timer-time {
  font-size: 250%;
  padding: 2px;
  line-height: 180%;
}
.timer-label {
  font-size: 70%;
  color: #ccc;
  font-weight: bold;
}
</style>

