<template>
  <div class="works-container">
    <h1>How it works</h1>
    <img :src="imgSrc"/>
  </div>
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
h1 {
  text-align: center;
  color: #4A8B71;
  font-size: 32px;
  font-weight: 900;
  margin-bottom: 20px;
}
img {
  display: block;
  width: 50%;
  margin: 0 auto;
}
.works-container {
  width: 100%;
  padding: 40px 0 60px 0;
  background: linear-gradient(#FFF9E0,#EEFFFD);
}
</style>
