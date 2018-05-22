<template>
  <div class="main-section" :style="containerStyle">
    <v-container>
      <h1 class="main-text">
        A cryptocurrency issued base on the vision of creating awareness
        for the need of carbon offsets and corporate social responsibilities(CSR)
      </h1>
      <count-down-timer :end-date="endDate"></count-down-timer>
      <prgress-bar :total="total" :current-value="progress"></prgress-bar>
      <v-layout row>
        <v-btn outline color="green">Contribute Now</v-btn>
        <div>
          <p>White Paper Download</p>
          <v-layout row>
            <v-btn outline color="white">ENGLISH</v-btn>
            <v-btn outline color="white">中文</v-btn>
          </v-layout>
        </div>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import CountDownTimer from '@/components/CountDownTimer';
import PrgressBar from '@/components/ProgressBar';
import MainSectionBackground from '@/assets/main_section_background.jpg';

export default {
  name: 'MainSection',
  data() {
    return {
      endDate: '20180628 1200',
      progress: 200,
      total: 1000,
      containerStyle: {
        backgroundImage: `url(${MainSectionBackground})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      },
    };
  },
  components: {
    CountDownTimer,
    PrgressBar,
  },
  methods: {
  },
};
</script>

<style scope>
.main-text {
  color: white;
  text-align: left;
  font-weight: bold;
}
</style>

