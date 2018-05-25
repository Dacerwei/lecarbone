<template>
  <div class="main-section" :style="containerStyle">
    <v-container>
      <h1 class="main-text">{{ $t('message.MainSection.main_text') }}</h1>
      <count-down-timer :end-date="endDate"></count-down-timer>
      <prgress-bar :total="total" :current-value="progress"></prgress-bar>
      <v-layout row wrap>
        <v-flex xs12  md2>
          <v-btn outline color="green">Contribute Now</v-btn>
        </v-flex>
        <v-flex xs12 md4 tag="div">
          <p class="download-text">{{ $t('message.MainSection.download_white_paper') }}</p>
          <div class="btn-area">
              <span><v-btn outline color="white">ENGLISH</v-btn></span>
              <span><v-btn outline color="white">中文</v-btn></span>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import CountDownTimer from '@/components/CountDownTimer';
import PrgressBar from '@/components/ProgressBar';
import MainSectionBackground from '@/assets/background/main_section.jpg';

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

<style scoped>
.main-section {
  padding: 50px 0;
}
.main-text {
  color: white;
  text-align: left;
  font-weight: bold;
  line-height: 1.2em;
}
.download-text {
  text-align: center;
  color: white;
  margin: 0;
  font-weight: bold;
}
.btn-area {
  text-align: center;
}
</style>

