<template>
  <v-app id="app">
    <desktop-nav-bar v-if="!isMobile"></desktop-nav-bar>
    <mobile-nav-bar v-else></mobile-nav-bar>
    <router-view/>
    <Footer></Footer>
  </v-app>
</template>

<script>
import DesktopNavBar from '@/components/DesktopNavBar';
import MobileNavBar from '@/components/MobileNavBar';
import Footer from '@/components/Footer';

export default {
  name: 'App',
  components: {
    DesktopNavBar,
    MobileNavBar,
    Footer,
  },
  data() {
    return {
      isMobile: false,
    };
  },
  created() {
    window.addEventListener('resize', this.onResize, { passive: true });
  },
  mounted() {
    this.onResize();
  },
  beforeDestroy() {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line
      console.log('resizing');
      window.removeEventListener('resize', this.onResize, { passive: true });
    }
  },
  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 900;
    },
  },
};
</script>

<style>
#app {
  background-color: white;
}
img {
  width: 100%;
}
</style>
