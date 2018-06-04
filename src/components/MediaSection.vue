<template>
<div>
  <v-layout row wrap align-content-center justify-space-between class="social-media-wrapper">
    <v-flex xs6 sm2 v-for="media in socialMediaList" :key="media.id">
      <img class="social-item"
        :src="media.src"
        alt=""/>
    </v-flex>
  </v-layout>
  <v-layout row wrap justify-space-between class="media">
    <v-flex xs4 sm3 v-for=" media in mediaList" :key="media.id">
      <div :style="formatStyle(media)"></div>
    </v-flex>
  </v-layout>
</div>
</template>

<script>
import Facebook from '@/assets/media/facebook.png';
import Twitter from '@/assets/media/twitter.png';
import Medium from '@/assets/media/medium.png';
import Telegram from '@/assets/media/telegram.png';
import bbc from '@/assets/media/bbc.png';
import bloomberg from '@/assets/media/bloomberg.png';
import controlledEnvironments from '@/assets/media/controlled_environments.png';
import cnn from '@/assets/media/cnn.png';
import ecolog from '@/assets/media/ecolog.png';
import forbes from '@/assets/media/forbes.png';
import newYorTimes from '@/assets/media/new_york_times.png';
import techcrunch from '@/assets/media/techcrunch.png';
import theWallStreetJournal from '@/assets/media/the_wall_street_journal.png';
import theWashingtonPost from '@/assets/media/the_washington_post.png';
import time from '@/assets/media/time.png';
import greenpaece from '@/assets/media/greenpaece.png';

const socialMediaList = [
  {
    id: 0,
    name: 'twitter',
    src: Twitter,
  },
  {
    id: 1,
    name: 'facebook',
    src: Facebook,
  },
  {
    id: 2,
    name: 'medium',
    src: Medium,
  },
  {
    id: 3,
    name: 'telegram',
    src: Telegram,
  },
];

const mediaList = [
  {
    id: 0,
    name: 'the wall street journal',
    src: theWallStreetJournal,
  },
  {
    id: 1,
    name: 'the washington post',
    src: theWashingtonPost,
  },
  {
    id: 2,
    name: 'time',
    src: time,
  },
  {
    id: 3,
    name: 'bloomberg',
    src: bloomberg,
  },
  {
    id: 4,
    name: 'cnn',
    src: cnn,
  },
  {
    id: 5,
    name: 'bbc',
    src: bbc,
  },
  {
    id: 6,
    name: 'controlled environments',
    src: controlledEnvironments,
  },
  {
    id: 7,
    name: 'the new york times',
    src: newYorTimes,
  },
  {
    id: 8,
    name: 'greenpaece',
    src: greenpaece,
  },
  {
    id: 9,
    name: 'forbes',
    src: forbes,
  },
  {
    id: 10,
    name: 'techcrunch',
    src: techcrunch,
  },
  {
    id: 11,
    name: 'ecolog',
    src: ecolog,
  },
];

export default {
  name: 'MediaSection',
  data() {
    return {
      mediaList,
      socialMediaList,
    };
  },
  methods: {
    formatStyle(obj) {
      return {
        height: '80px',
        margin: '5%',
        backgroundImage: `url(${obj.src})`,
        backgroundPosition: 'center',
        backgroundSize: 'contain',
      };
    },
  },
};
</script>

<style scoped>
.social-media-wrapper {
  background-color: white;
  width: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 23%;
  padding-right: 23%;
}
.social-item {
  width: 100%;
}
.media {
  padding: 50px 100px;
  background-color: #eee;
}
</style>

