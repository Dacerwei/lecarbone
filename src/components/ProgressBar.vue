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
      height="20"
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
  margin: 20px 0 60px 0;
}
#progress-bar {
  margin-top: 5px;
  margin-bottom: 5px;
}
.label {
  color: white;
  font-size: 12px;
  font-weight: 900;
}
</style>

