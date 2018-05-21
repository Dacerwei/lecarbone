<template>
  <v-container>
    <h1>
      A cryptocurrency issued base on the vision of creating awareness
      for the need of carbon offsets and corporate social responsibilities(CSR)
    </h1>
    <count-down-timer :end-date="'20180628'">
    </count-down-timer>
  </v-container>
</template>

<script>
import CountDownTimer from '@/components/CountDownTimer';

export default {
  name: 'MainSection',
  components: {
    CountDownTimer,
  },
};
</script>

