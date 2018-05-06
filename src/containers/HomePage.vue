<template>
<v-app>
  <NavBar></NavBar>
  <why-le-carbone></why-le-carbone>
  <token-detail></token-detail>
  <use-of-found></use-of-found>
  <our-team></our-team>
  <Footer></Footer>
</v-app>
</template>
<script>
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import OurTeam from '@/components/OurTeam';
import UseOfFound from '@/components/UseOfFound';
import TokenDetail from '@/components/TokenDetail';
import WhyLeCarbone from '@/components/WhyLeCarbone';

export default {
  components: {
    NavBar,
    OurTeam,
    WhyLeCarbone,
    TokenDetail,
    UseOfFound,
    Footer,
  },
};
</script>

<style scoped>

</style>
