<template>
  <div class="main-section" :style="containerStyle">
    <v-container>
      <h1 class="main-text">{{ $t('message.MainSection.main_text') }}</h1>
      <v-flex tag="div" class="timer-wrapper" xs12 sm6 md4>
        <count-down-timer :end-date="endDate" :time-zone="'PDT'"></count-down-timer>
      </v-flex>
      <prgress-bar :total="total" :current-value="progress"></prgress-bar>
      <v-layout row wrap>
        <v-flex xs12  md3>
          <router-link to="/tokensale">
            <v-btn class="contribute" outline>Contribute Now</v-btn>
          </router-link>
        </v-flex>
        <v-flex xs12 md4 tag="div">
          <p class="download-text">{{ $t('message.MainSection.download_white_paper') }}</p>
          <div class="btn-area">
              <span><v-btn class="download-btn" outline color="white">ENGLISH</v-btn></span>
              <span><v-btn class="download-btn" outline color="white">中文</v-btn></span>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import CountDownTimer from '@/components/CountDownTimer';
import PrgressBar from '@/components/ProgressBar';
import MainSectionBackground from '@/assets/background/main_section.png';

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
a {
  text-decoration: none;
}
.main-section {
  padding: 50px 0;
}
.main-text {
  color: white;
  text-align: left;
  font-weight: bold;
  line-height: 1.2em;
  margin-bottom: 40px;
}
.download-text {
  text-align: left;
  color: white;
  margin: 0 0 5px 0;
  font-weight: bold;
}
.download-btn {
  font-size: 12px;
  height: 30px;
  width: 120px;
  margin: 0;
}
.contribute {
  color: white;
  font-size: 18px;
  font-weight: bold;
  border-color: #69F193;
  height: 50px;
  width: 250px;
}

</style>

