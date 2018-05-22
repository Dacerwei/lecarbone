<template>
  <v-container>
    <v-layout row justify-space-between>
      <span class="label">0</span>
      <span class="label">{{ total/2 }}</span>
      <span class="label">{{ total }}</span>
    </v-layout>
    <v-progress-linear
      :value="progress"
      height="30"
      color="green"
      style="border-radius: 10px">
    </v-progress-linear>
    <v-layout row justify-space-between>
      <span class="label">START</span>
      <span class="label">HARD CAP</span>
    </v-layout>
  </v-container>
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
  updated() {
    // eslint-disable-next-line
    console.log(this.progress);
  },
  computed: {
    progress() {
      return 100 * (this.currentValue / this.total);
    },
  },
};
</script>

<style scoped>
.label {
  color: white;
}
</style>

