<template>
  <v-app id="app">
    <desktop-nav-bar v-if="!isMobile"></desktop-nav-bar>
    <mobile-nav-bar v-else :switch-menu="switchMenu"></mobile-nav-bar>
    <router-view/>
    <Footer></Footer>
    <v-navigation-drawer
      v-model="openMenu"
      absolute
      right
      width="150"
      temporary>
      <v-list>
        <a class="nav-btn" v-scroll-to="'#our-vision'" @click="openMenu = !openMenu">
          <v-list-tile>
            <v-list-tile-title>
                {{ $t('message.NavBar.about') }}
            </v-list-tile-title>
          </v-list-tile>
        </a>
        <a class="nav-btn" v-scroll-to="'#roadmap'"  @click="openMenu = !openMenu">
          <v-list-tile>
            <v-list-tile-title>
              {{ $t('message.NavBar.roadMap') }}
            </v-list-tile-title>
          </v-list-tile>
        </a>
        <a class="nav-btn" v-scroll-to="'#token-detail'" @click="openMenu = !openMenu">
          <v-list-tile>
            <v-list-tile-title>
              {{ $t('message.NavBar.tokenDetail') }}
            </v-list-tile-title>
          </v-list-tile>
        </a>
        <a class="nav-btn" v-scroll-to="'#team'"  @click="openMenu = !openMenu">
          <v-list-tile>
            <v-list-tile-title>
              {{ $t('message.NavBar.team') }}
            </v-list-tile-title>
          </v-list-tile>
        </a>
        <a class="nav-btn" v-scroll-to="'#footer'" @click="openMenu = !openMenu">
          <v-list-tile>
            <v-list-tile-title>
              {{ $t('message.NavBar.contact') }}
            </v-list-tile-title>
          </v-list-tile>
        </a>
      </v-list>
    </v-navigation-drawer>
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
      openMenu: false,
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
