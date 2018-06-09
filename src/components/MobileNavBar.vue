<template>
  <v-toolbar height="70px">
    <v-layout row align-center justify-space-between>
      <v-flex xs7>
        <div class="logo-container">
          <router-link to="/">
            <img class="logo" :src="logo" />
          </router-link>
        </div>
      </v-flex>
      <v-flex xs3>
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
      <v-flex xs2>
        <div class="mobile-menu-container">
          <v-menu offset-y>
            <v-btn slot="activator" icon large>
              <i class="fas fa-bars"></i>
            </v-btn>
            <v-list>
              <v-list-tile>
                <v-list-tile-title>
                  <a class="nav-btn" v-scroll-to="'#our-vision'">
                    {{ $t('message.NavBar.about') }}
                  </a>
                </v-list-tile-title>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-title>
                  <a class="nav-btn" v-scroll-to="'#roadmap'">
                    {{ $t('message.NavBar.roadMap') }}
                  </a>
                </v-list-tile-title>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-title>
                  <a class="nav-btn" v-scroll-to="'#token-detail'">
                    {{ $t('message.NavBar.tokenDetail') }}
                  </a>
                </v-list-tile-title>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-title>
                  <a class="nav-btn" v-scroll-to="'#team'">
                    {{ $t('message.NavBar.team') }}
                  </a>
                </v-list-tile-title>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-title>
                  <a class="nav-btn" v-scroll-to="'#footer'">
                    {{ $t('message.NavBar.contact') }}
                  </a>
                </v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </div>
      </v-flex>
    </v-layout>
  </v-toolbar>
</template>

<script>
import Logo from '@/assets/lecarbone_logo.png';
import UK from '@/assets/flag_uk.png';
import TW from '@/assets/flag_tw.png';

export default {
  name: 'MobileNavBar',
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
