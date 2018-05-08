<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs6 sm3 v-for="media in socialMediaList" :key="media.id">
        <img class="media-item"
          :src="media.src"
          alt=""/>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs4 sm3 v-for=" media in mediaList" :key="media.id">
        <h3>{{ media.name }}</h3>
        <img :src="media.src" :alt="media.name">
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Facebook from '@/assets/media/facebook.png';
import Twitter from '@/assets/media/twitter.png';
import Medium from '@/assets/media/medium.png';
import Telegram from '@/assets/media/telegram.png';

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
    src: '',
  },
  {
    id: 1,
    name: 'the washington post',
    src: '',
  },
  {
    id: 2,
    name: 'time',
    src: '',
  },
  {
    id: 3,
    name: 'bloomberg',
    src: '',
  },
  {
    id: 4,
    name: 'cnn',
    src: '',
  },
  {
    id: 5,
    name: 'bbc',
    src: '',
  },
  {
    id: 6,
    name: 'controlled environments',
    src: '',
  },
  {
    id: 7,
    name: 'the new york times',
    src: '',
  },
  {
    id: 8,
    name: 'greenpeace',
    src: '',
  },
  {
    id: 9,
    name: 'forbes',
    src: '',
  },
  {
    id: 10,
    name: 'techcrunch',
    src: '',
  },
  {
    id: 11,
    name: 'ecolog',
    src: '',
  },
];

export default {
  name: 'Media',
  data() {
    return {
      mediaList,
      socialMediaList,
    };
  },
};
</script>

<style>
.media-item {
  width: 100%;
}
</style>

