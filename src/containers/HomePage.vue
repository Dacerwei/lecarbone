<template>
<v-app>
  <NavBar></NavBar>
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

export default {
  components: {
    NavBar,
    OurTeam,
    TokenDetail,
    UseOfFound,
    Footer,
  },
};
</script>

<style scoped>

</style>
