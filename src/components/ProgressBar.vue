<template>
  <v-flex tag="div" class="progress-wrapper" xs12 sm6 md6>
    <v-layout row justify-space-between>
      <span class="label">0</span>
      <span class="label">{{ total/2 }}</span>
      <span class="label">{{ total }}</span>
    </v-layout>
    <v-progress-linear
      id="progress-bar"
      :value="progress"
      height="30"
      color="green"
      style="border-radius: 10px">
    </v-progress-linear>
    <v-layout row justify-space-between>
      <span class="label">START</span>
      <span class="label">HARD CAP</span>
    </v-layout>
  </v-flex>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    total: {
      type: Number,
      default: 100,
    },
    currentValue: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    progress() {
      return 100 * (this.currentValue / this.total);
    },
  },
};
</script>

<style scoped>
.progress-wrapper {
  margin-top: 2%;
  margin-bottom: 2%;
}
#progress-bar {
  margin-top: 0;
  margin-bottom: 0;
}
.label {
  color: white;
  font-size: 70%;
}
</style>

