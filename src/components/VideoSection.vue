<template>
  <v-container>
    <h1>Our Vision</h1>
    <v-layout row wrap>
      <v-flex xs12 sm6>
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
      <v-flex xs12 sm6>
        <p>{{ description }}</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'VideoSection',
  data() {
    return {
      videoSrc: 'https://www.youtube.com/embed/ZIY5tuU7RWg',
      description: 'This project plan on cooperating with the Food and Agriculture Organization of the United Nation in the near future, planting potatoes for charity use. Furthermore, we have been actively speaking with KPMG’s Sustainability Consulting Co. on having KPMG manage the revenues generated from economical crops to provide maximum assurance for LeCarbone investors. We have also been speaking with the Sierra Leone Government Ministry of Mineral Resources on the possibility of providing KPC (Kimberley Process Certified) diamonds available as a way of spending your LeCarbone token. The goal of AAD is to preserve and develop up to 3 million hectares of forests within 5 years in developing countries (including Indonesia). Estimated to bring a positive impact to 100,000 villagers living in rural parts their country, offsetting 1 billion tons of carbon emission within 50 years.',
    };
  },
};
</script>

<style scoped>

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

