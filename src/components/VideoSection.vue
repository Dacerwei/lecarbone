<template>
<div class="ourvision-wrapper" :style="{'background-image': 'url(' + background + ')' }">
  <v-container tag="div" class="ourvision-container">
    <h1 class="ourvision-title">{{ $t('message.VideoSection.title') }}</h1>
    <v-layout row wrap>
      <v-flex sm12 md6 class="ourvision-content">
        <div class="video-container">
          <iframe
            width="560"
            height="315"
            :src="videoSrc"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen>
          </iframe>
        </div>
      </v-flex>
      <v-flex sm12 md6 class="ourvision-content">
        <p>{{ $t('message.VideoSection.content_1') }}</p>
        <br/>
        <p>{{ $t('message.VideoSection.content_2') }}</p>
        <br/>
        <p>{{ $t('message.VideoSection.content_3') }}</p>
      </v-flex>
    </v-layout>
  </v-container>
  <v-layout row wrap justify-space-around class="rank-wrapper">
    <v-flex xs5 sm5 md3 v-for="rank in ranks" :key="rank.id">
      <div class="rank-container">
        <img :src="rank.src" />
      </div>
    </v-flex>
  </v-layout>
</div>
</template>

<script>
import background from '@/assets/footer_background.jpg';
import bazar from '@/assets/rank/icobazar.png';
import bench from '@/assets/rank/icobench.png';
import ranker from '@/assets/rank/icoranker.png';
import rating from '@/assets/rank/icorating.png';

const ranks = [
  {
    id: 0,
    src: bazar,
  },
  {
    id: 1,
    src: bench,
  },
  {
    id: 2,
    src: ranker,
  },
  {
    id: 3,
    src: rating,
  },
];

export default {
  name: 'VideoSection',
  data() {
    return {
      background,
      ranks,
      videoSrc: 'https://www.youtube.com/embed/ZIY5tuU7RWg',
    };
  },
};
</script>

<style scoped>
.ourvision-wrapper {
  background-color: black;
  padding: 4%;
  background-position: center;
  background-size: cover;
}

.ourvision-container {
  background-color: white;
  padding: 3%;
  border-radius: 40px;
}

.ourvision-title {
  text-align: center;
  margin-bottom: 10px;
  color: #4A8B71;
  font-size: 36px;
  font-weight: bolder;
}

.ourvision-content {
  padding: 20px;
}

.rank-wrapper {
  margin-top: 2%;
}

.rank-container {
  padding: 2%;
  margin: 10px;
}

/* RWD for ifame  */
.video-container {
  position:relative;
  padding-bottom:54%;
  height:0;overflow:hidden;
}

.video-container iframe,
.video-container object,
.video-container embed {
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
}
</style>

