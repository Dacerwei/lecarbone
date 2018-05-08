<template>
  <v-container>
    <img :src="imgSrc"/>
  </v-container>
</template>

<script>
import HowItWorks from '@/assets/how_it_works.png';

export default {
  name: 'HowItWorksSection',
  data() {
    return {
      imgSrc: HowItWorks,
    };
  },
};
</script>
<style scoped>
img {
  width: 100%;
}
</style>

