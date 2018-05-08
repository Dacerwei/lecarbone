<template>
<v-app>
  <NavBar></NavBar>
  <media></media>
  <Video-section></Video-section>
  <why-le-carbone></why-le-carbone>
  <token-detail></token-detail>
  <use-of-found></use-of-found>
  <our-team></our-team>
  <advisor></advisor>
  <partners></partners>
  <Footer></Footer>
</v-app>
</template>
<script>
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Media from '@/components/Media';
import OurTeam from '@/components/OurTeam';
import UseOfFound from '@/components/UseOfFound';
import TokenDetail from '@/components/TokenDetail';
import WhyLeCarbone from '@/components/WhyLeCarbone';
import Partners from '@/components/Partners';
import Advisor from '@/components/Advisor';
import VideoSection from '@/components/VideoSection';

export default {
  components: {
    NavBar,
    VideoSection,
    OurTeam,
    Media,
    WhyLeCarbone,
    TokenDetail,
    UseOfFound,
    Partners,
    Advisor,
    Footer,
  },
};
</script>

<style scoped>

</style>
