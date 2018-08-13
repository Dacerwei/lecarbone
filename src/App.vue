<template>
  <v-app id="app">
    <desktop-nav-bar v-if="!isMobile"
      :navigations="navigationItems">
    </desktop-nav-bar>
    <mobile-nav-bar v-else
      :switch-menu="switchMenu">
    </mobile-nav-bar>
    <router-view/>
    <Footer></Footer>
    <v-navigation-drawer
      v-model="openMenu"
      right
      fixed
      width="150"
      temporary>
      <v-list>
        <a v-for="(value, key) in navigationItems"
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
import DesktopNavBar from '@/components/common/DesktopNavBar';
import MobileNavBar from '@/components/common/MobileNavBar';
import Footer from '@/components/common/Footer';
import _ from 'lodash';

const navigation = [
  {
    path: '/',
    navigations: {
      about: 'our-vision',
      roadMap: 'roadmap',
      tokenDetail: 'token-detail',
      team: 'team',
      contact: 'footer',
    },
  },
  {
    path: '/tokensale',
    navigations: {
      tokenSale: 'token-sale',
      buyTokens: 'buy-tokens',
      transactions: 'transactions',
      affiliate: 'affiliate',
      faq: 'faq',
    },
  },
];

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
      currentPath: '/',
      navigation,
    };
  },
  created() {
    window.addEventListener('resize', this.onResize, { passive: true });
  },
  mounted() {
    this.onResize();
    this.currentPath = this.$route.path;
  },
  watch: {
    $route() {
      this.currentPath = this.$route.path;
    },
  },
  computed: {
    navigationItems() {
      return _.find(navigation, {
        path: this.currentPath,
      }).navigations;
    },
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
