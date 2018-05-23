<template>
<div class="ourvision-wrapper" :style="{'background-image': 'url(' + background + ')' }">
  <v-container tag="div" class="ourvision-container">
    <h1 class="ourvision-title">Our Vision</h1>
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
        <p>
          This project plan on cooperating with the Food and Agriculture
          Organization of the United Nation in the near future, planting
          potatoes for charity use.
        </p>
        <br/>
        <p>
          Furthermore, we have been actively speaking
          with KPMG’s Sustainability Consulting Co.
          on having KPMG manage the revenues generated
          from economical crops to provide maximum
          assurance for LeCarbone investors. We have also
          been speaking with the Sierra Leone Government
          Ministry of Mineral Resources on the possibility
          of providing KPC (Kimberley Process Certified)
          diamonds available as a way of spending your LeCarbone token.
        </p>
        <br/>
        <p>
          The goal of AAD is to preserve and develop up to 3 million hectares of
          forests within 5 years in developing countries (including Indonesia).
          Estimated to bring a positive impact to 100,000 villagers living in
          rural parts their country, offsetting 1 billion tons of carbon emission within 50 years.
        </p>
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>

<script>
import background from '@/assets/footer_background.jpg';

export default {
  name: 'VideoSection',
  data() {
    return {
      background,
      videoSrc: 'https://www.youtube.com/embed/ZIY5tuU7RWg',
    };
  },
};
</script>

<style scoped>
.ourvision-wrapper {
  background-color: black;
  padding: 2%;
  background-position: center;
  background-size: cover;
}

.ourvision-container {
  background-color: white;
  padding: 5%;
  border-radius: 80px;
}

.ourvision-title {
  text-align: center;
  margin-bottom: 50px;
  color: green;
  font-weight: bolder;
}

.ourvision-content {
  padding: 10px;
}

/* RWD for ifame  */
.video-container {
  position:relative;
  padding-bottom:56.25%;
  padding-top:30px;height:0;overflow:hidden;
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

