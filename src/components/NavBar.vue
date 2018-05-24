<template>
  <v-toolbar height="70px">
    <img class="logo" :src="logo" />
    <a class="nav-btn">{{ $t('message.NavBar.about') }}</a>
    <a class="nav-btn">{{ $t('message.NavBar.roadMap') }}</a>
    <a class="nav-btn">{{ $t('message.NavBar.tokenDetail') }}</a>
    <a class="nav-btn">{{ $t('message.NavBar.team') }}</a>
    <a class="nav-btn">{{ $t('message.NavBar.contact') }}</a>
    <div class="nav-r">
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
      <v-btn icon small><i class="fab fa-telegram-plane"></i></v-btn>
      <v-btn icon small><i class="fab fa-facebook-square"></i></v-btn>
      <v-btn icon small><i class="fab fa-twitter"></i></v-btn>
      <v-btn icon small><i class="fab fa-medium-m"></i></v-btn>
      <a class="contribute">{{ $t('message.NavBar.contribute') }}</a>
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
.logo {
  width: 120px;
  height: 30px;
  margin-right: 1%;
}
.flag {
  width: 30px;
  height: 30px;
}
.nav-btn {
  margin: 1.5%;
  display: block;
  color: black;
}
.contribute {
  background: #69F193;
  color: #fff;
  border-radius: 4px;
  text-align: center;
  padding: 5px 30px;
}
.nav-r {
  position: absolute;
  right: 0;
}
</style>

