<template>
  <v-app id="app">
    <desktop-nav-bar v-if="!isMobile"></desktop-nav-bar>
    <mobile-nav-bar v-else :switch-menu="switchMenu"></mobile-nav-bar>
    <router-view/>
    <Footer></Footer>
    <v-navigation-drawer
      v-model="openMenu"
      right
      fixed
      width="150"
      temporary>
      <v-list>
        <a v-for="(value, key) in navigation"
          :key="key"
          class="nav-btn"
          v-scroll-to="`#${value}`"
          @click="openMenu = !openMenu">
          <v-list-tile>
            <v-list-tile-title>
                {{ $t( `message.NavBar.${key}`) }}
            </v-list-tile-title>
          </v-list-tile>
        </a>
        <v-list-tile>
          <v-btn icon small><i class="fab fa-telegram-plane"></i></v-btn>
          <v-btn icon small><i class="fab fa-medium-m"></i></v-btn>
        </v-list-tile>
        <v-list-tile>
          <v-btn icon small><i class="fab fa-facebook-square"></i></v-btn>
          <v-btn icon small><i class="fab fa-twitter"></i></v-btn>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import DesktopNavBar from '@/components/DesktopNavBar';
import MobileNavBar from '@/components/MobileNavBar';
import Footer from '@/components/Footer';

const navigation = {
  about: 'our-vision',
  roadMap: 'roadmap',
  tokenDetail: 'token-detail',
  team: 'team',
  contact: 'footer',
};

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
      openMenu: false,
      navigation,
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
      window.removeEventListener('resize', this.onResize, { passive: true });
    }
  },
  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 900;
    },
    switchMenu() {
      this.openMenu = !this.openMenu;
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
