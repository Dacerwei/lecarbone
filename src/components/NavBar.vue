<template>
  <v-toolbar app>
    <div class="logo-container">
      <img :src="logo" />
    </div>
    <v-btn flat>{{ $t('message.NavBar.about') }}</v-btn>
    <v-btn flat>{{ $t('message.NavBar.roadMap') }}</v-btn>
    <v-btn flat>{{ $t('message.NavBar.tokenDetail') }}</v-btn>
    <v-btn flat>{{ $t('message.NavBar.team') }}</v-btn>
    <v-btn flat>{{ $t('message.NavBar.contact') }}</v-btn>
    <v-menu offset-y>
      <v-btn flat color="primary" dark slot="activator">{{ $t('message.NavBar.language') }}</v-btn>
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
    <div class="nav-btn-r">
      <v-btn icon large><i class="fab fa-telegram-plane"></i></v-btn>
      <v-btn icon large><i class="fab fa-facebook-square"></i></v-btn>
      <v-btn icon large><i class="fab fa-twitter"></i></v-btn>
      <v-btn icon large><i class="fab fa-medium-m"></i></v-btn>
      <v-btn >{{ $t('message.NavBar.contribute') }}</v-btn>
    </div>
  </v-toolbar>
</template>
<script>
import Logo from '@/assets/lecarbone_logo.png';
import UK from '@/assets/flag_uk.png';
import TW from '@/assets/flag_tw.png';

export default {
  name: 'nav-bar',
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
.flag {
  width: 30px;
  height: 30px;
}
.logo-container {
  width: 120px;
  height: 30px;
}
.nav-btn-r {
  position: absolute;
  right: 0;
}
.nav-btn-r icon {
  margin: 0;
}
</style>

