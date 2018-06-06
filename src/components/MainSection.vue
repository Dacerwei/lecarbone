<template>
  <div class="main-section" :style="containerStyle">
    <v-container>
      <h1 class="main-text">{{ $t('message.MainSection.main_text') }}</h1>
      <v-flex tag="div" class="timer-wrapper" xs12 sm6 md4>
        <count-down-timer :end-date="endDate" :time-zone="'PDT'"></count-down-timer>
      </v-flex>
      <prgress-bar :total="total" :current-value="progress"></prgress-bar>
      <v-layout row wrap>
        <v-flex xs12 md3>
          <div class="contribute-container">
            <router-link to="/tokensale">
              <div class="contribute">CONTRIBUTE NOW</div>
            </router-link>
          </div>
        </v-flex>
        <v-flex xs12 md4>
          <div class="btn-area-container">
            <p class="download-text">{{ $t('message.MainSection.download_white_paper') }}</p>
            <div class="btn-area">
                <span><v-btn class="download-btn" outline color="white">ENGLISH</v-btn></span>
                <span><v-btn class="download-btn" outline color="white">中文</v-btn></span>
            </div>
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
  text-align: center;
  color: white;
  margin: 0 0 5px 0;
  font-weight: bold;
}
.btn-area {
  text-align: center;
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
  border-style: solid;
  border-width: 1px;
  text-align: center;
  height: 50px;
  line-height: 50px;
  width: 100%;
  margin-top: 20px;
}
.btn-area-container {
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
}
</style>

