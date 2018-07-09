<template>
  <v-toolbar height="70px">
    <v-layout row align-center justify-space-between>
      <v-flex md1>
        <div class="logo-container">
          <router-link to="/">
            <img class="logo" :src="logo" />
          </router-link>
        </div>
      </v-flex>
      <v-flex md6>
        <v-layout row justify-center align-center>
          <v-flex md2
            v-for="(value, key) in navigations"
            :key="key">
            <a class="nav-btn" v-scroll-to="`#${value}`">
              {{ $t(`message.NavBar.${key}`) }}
            </a>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex md5 class="nav-r">
        <v-layout row align-center justify-end>
          <v-flex md3>
            <v-menu offset-y>
              <v-btn class="language" flat color="black" dark slot="activator">
                {{ $t('message.NavBar.language') }}
              </v-btn>
              <v-list>
                <v-list-tile @click="changeLanguage('en')">
                  <v-list-tile-action>
                    <img class="flag" :src="UK"/>
                  </v-list-tile-action>
                      <v-list-tile-content>
                        <v-list-tile-title>English</v-list-tile-title>
                      </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="changeLanguage('zh')">
                  <v-list-tile-action>
                    <img class="flag" :src="TW"/>
                  </v-list-tile-action>
                      <v-list-tile-content>
                        <v-list-tile-title>中文</v-list-tile-title>
                      </v-list-tile-content>
                  </v-list-tile>
              </v-list>
            </v-menu>
          </v-flex>
          <v-flex md1>
            <v-btn icon small><i class="fab fa-telegram-plane"></i></v-btn>
          </v-flex>
          <v-flex md1>
            <v-btn icon small><i class="fab fa-facebook-square"></i></v-btn>
          </v-flex>
          <v-flex md1>
            <v-btn icon small><i class="fab fa-twitter"></i></v-btn>
          </v-flex>
          <v-flex md1>
            <v-btn icon small><i class="fab fa-medium-m"></i></v-btn>
          </v-flex>
          <v-flex md3>
            <router-link to="/tokensale" class="contribute">
              {{ $t('message.NavBar.contribute') }}
            </router-link>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-toolbar>
</template>
<script>
import Logo from '@/assets/lecarbone_logo.png';
import UK from '@/assets/flag_uk.png';
import TW from '@/assets/flag_tw.png';

export default {
  name: 'DesktopNavBar',
  props: {
    navigations: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      logo: Logo,
      UK,
      TW,
    };
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.logo-container {
  width: 100%;
  padding-left: 5%;
}
.logo {
  width: 120px;
  height: 30px;
}
.flag {
  width: 30px;
  height: 30px;
}
.menu-icon svg {
  width: 30px;
  height: 30px;
}
.nav-btn {
  text-align: center;
  font-size: 12px;
  display: block;
  color: black;
}
.contribute {
  background: #69F193;
  color: #fff;
  font-weight: bold;
  border-radius: 4px;
  text-align: center;
  text-transform: capitalize;
  padding: 10px 30px;
  margin-left: 10px;
}
.language {
  font-size: 12px;
}
.mobile-menu-container {
  text-align: right;
}
</style>

